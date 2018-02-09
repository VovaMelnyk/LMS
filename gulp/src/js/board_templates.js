/*jshint esversion: 6 */

let url = "http://localhost:3000/";
let postUrl = `${url}post`;
let commentsUrl = `${url}comments`;
let userUrl = `${url}user`;
let backgroundCounter = 0;
localStorage.setItem("currentUserId", 6);
localStorage.setItem("currentUser", "Test user");
localStorage.setItem("currentRole", "Student"); // Administrator Student

let currentUserId = +localStorage.getItem("currentUserId");
let currentUser = localStorage.getItem("currentUser");
let currentRole = localStorage.getItem("currentRole");
const posts = document.querySelector('.posts');

let clickHandler = (event) => {
    let targetId = event.currentTarget.id;
    let targetClasslist = event.target.classList;
    let targetFirstClass = event.target.classList.item(0);
    switch (targetFirstClass) {
        case "btn-post":
            createComment(targetId);
            break;
        case "edit":
            updateMessage(targetId);
            break;
        case "delete":
            if (confirm("Подтвердите удаление сообщения")) {
                removeData(targetId);
            }
            break;
        case "pointer":
        case "pointer__arrow":
            showComments(targetId);
            break;
        case "icon":
            if (targetClasslist.contains("icon--comment")) {
                showComments(targetId);
            } else if (targetClasslist.contains("icon--like")) {
                increaseLikes(targetId);
            }
            break;
    }
};

function showComments(targetId) {
    let mainElement = select(`#${targetId}`);
    let comments = mainElement.querySelector(".comments");
    let arrow = mainElement.querySelector(".pointer__arrow");

    comments.style.display = (comments.style.display != "block") ? "block" : "none";
    if (arrow.classList.contains("pointer--down")) {
        arrow.classList.add("pointer--up");
        arrow.classList.remove("pointer--down");
    } else {
        arrow.classList.remove("pointer--up");
        arrow.classList.add("pointer--down");
    }
}

function setMessageDate() {
    var date = new Date();

    var dd = date.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }

    var mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }

    var yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
}

function setMessageTime() {
    return Date().substr(16, 5);
}

function select(name) {
    return document.querySelector(name);
}

function getPost(post) {
    const html = select('#post-template').textContent.trim();
    const compiled = _.template(html);
    const result = compiled(post);
    let div = document.createElement("div");
    if (backgroundCounter % 2) {
        div.classList.add("post-wrapper");
        backgroundCounter++;
    } else {
        div.classList.add("post-wrapper--middle-grey");
        backgroundCounter++;
    }
    div.setAttribute("id", ("post-" + post.id));
    div.innerHTML = result;
    posts.appendChild(div);
    checkLikesCount(`post-${post.id}`);

    if (post.changed) {
        div.querySelector(`.make-correction`).style.display = "block";
    }

    let comment = document.querySelectorAll(".comments");
    comment[comment.length - 1].setAttribute("id", ("comment-post-" + post.id));
    addNewComment(comment[comment.length - 1], post.id);

    div.addEventListener('click', clickHandler);
}

function getComment(comment) {
    const comments = select(`#comment-post-${comment.postID}`);
    const newComment = comments.querySelector(".new-comment-wrapper");
    const commentHtml = select('#comment-template').textContent.trim();
    const compiledComment = _.template(commentHtml);
    const commentResult = compiledComment(comment);

    let div = document.createElement("div");
    div.setAttribute("id", ("comments-" + comment.id));

    div.innerHTML = commentResult;
    comments.insertBefore(div, newComment);
    checkLikesCount(`comments-${comment.id}`);

    if (comment.changed) {
        div.querySelector(`.make-correction`).style.display = "block";
    }

    div.addEventListener('click', clickHandler);
}

function addNewComment(place, postId) {
    const newComment = document.createElement("div");
    const newCommentHtml = select('#new-comment-template').textContent.trim();
    const newCompiledComment = _.template(newCommentHtml);
    const newCommentResult = newCompiledComment();

    newComment.classList.add("new-comment-wrapper");
    newComment.innerHTML = newCommentResult;
    newComment.setAttribute("id", ("addcomment-" + postId));

    place.appendChild(newComment);
    newComment.addEventListener('click', clickHandler);
}

function addCorrection(place, postId) {
    const correction = document.createElement("div");
    const correctionHtml = select('#correction-template').textContent.trim();
    const compiledCorrection = _.template(correctionHtml);
    const correctionResult = compiledCorrection();

    correction.classList.add("new-comment-wrapper");
    correction.innerHTML = correctionResult;
    correction.setAttribute("id", ("correction-" + postId));

    place.appendChild(correction);

    let change = select("#change");
    let cancel = select("#cancel");

    change.addEventListener("click", () => {
        place.removeChild(correction);
    });
    cancel.addEventListener("click", () => {
        place.removeChild(correction);
    });
}

function checkLikesCount(targetId) {
    let targetIdArray = targetId.split("-");
    let likesFromStorage = +localStorage.getItem(`${targetId}-likes`);
    let likesFromDatabase = select(`#${targetId}`).querySelector(".counter__likes");

    if (likesFromStorage != null && likesFromStorage > +likesFromDatabase.textContent.trim()) {
        console.log(`Данные в базе не обновились - повторная отправка Данных на обновление ${targetId}-likes!`);
        let updated = {};

        likesFromDatabase.textContent = localStorage.getItem(`${targetId}-likes`);

        let updateUrl = `${url}${targetIdArray[0]}/${targetIdArray[1]}`;
        updated.headers = {
            'Content-Type': 'application/json'
        };
        updated.method = "PATCH";
        updated.body = JSON.stringify({
            "likes": +localStorage.getItem(`${targetId}-likes`)
        });

        fetch(updateUrl, updated)
            .then(response => {
                if (response.ok) {
                    response.json();
                } else {
                    throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
                }
            })
            .catch(err => {
                console.error("Error: ", err);
            });
    }
}

function pageRender() {
    posts.innerHTML = "";
    console.log(`Fetching URL: ${postUrl}`);

    backgroundCounter = 0;

    fetch(postUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
        })
        .then(jsonArray => {
            for (let json in jsonArray) {
                getPost(jsonArray[json]);
            }

            jsonArray.forEach((json) => {
                let postId = json.id;
                let commentUrl = `${url}comments?postID=${postId}`;
                let post = select(`#post-${postId}`);
                let commentsCount = post.querySelector(".counter__comments");

                fetch(commentUrl)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
                    })
                    .then(jsonArray => {
                        commentsCount.textContent = jsonArray.length;
                        jsonArray.forEach((json) => {
                            getComment(json);
                        });
                    })
                    .catch(err => {
                        console.error("Error: ", err);
                    });
            });
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

function removeData(targetId) {

    let element = select(`#${targetId}`);
    let elemenAutor = element.querySelector(".user__name").textContent.trim();

    if (currentRole == "Administrator" || currentUser == elemenAutor) {

        let targetIdArray = targetId.split("-");

        let removeUrl = `${url}${targetIdArray[0]}/${targetIdArray[1]}`;
        console.log(`Fetching URL: ${removeUrl}`);

        let removed = {};

        removed.headers = {
            'Content-Type': 'application/json'
        };
        removed.method = "DELETE";

        removed.body = JSON.stringify({});

        fetch(removeUrl, removed)
            .then(response => {
                if (response.ok) {
                    response.json();
                } else {
                    throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
                }
            })
            .then(() => {
                if (targetIdArray[0] == "post") {
                    let commentUrl = `${url}comments?postID=${targetIdArray[1]}`;

                    fetch(commentUrl)
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            }
                            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
                        })
                        .then(jsonArray => {
                            for (let item in jsonArray) {
                                console.log(jsonArray[item].id);
                                removeData(`comments-${jsonArray[item].id}`);
                            }
                        })
                        .then(pageRender);
                } else {
                    pageRender();
                }
            })
            .catch(err => {
                console.error("Error: ", err);
            });
    } else {
        alert("Удалить сообщение может только автор или администратор!");
    }
}

function increaseLikes(targetId) {
    let targetIdArray = targetId.split("-");

    let updateUrl = `${url}${targetIdArray[0]}/${targetIdArray[1]}`;
    let currentLikes = select(`#${targetId}`).querySelector(".counter__likes");
    let newLikes = +currentLikes.textContent.trim() + 1;
    let updated = {};

    localStorage.setItem(`${targetId}-likes`, newLikes);
    currentLikes.textContent = localStorage.getItem(`${targetId}-likes`);

    updated.headers = {
        'Content-Type': 'application/json'
    };
    updated.method = "PATCH";
    updated.body = JSON.stringify({
        "likes": +localStorage.getItem(`${targetId}-likes`)
    });

    fetch(updateUrl, updated)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

function createPost(event) {

    console.log(`Fetching URL: ${postUrl}`);
    let postTitle = document.getElementById("postTheme");
    let added = {};
if ( postTitle.value == '') {
    postTitle.placeholder = 'Введите тему объявления';
    postTitle.style.border = '1px solid #ff0000';
    event.preventDefault();
    } else {
    added.headers = {
        'Content-Type': 'application/json'
    };
    added.method = "POST";
    added.body = JSON.stringify({
        "isNew": true,
        "title": postTitle.value,
        "date": setMessageDate(),
        "time": setMessageTime(),
        "userID": currentUserId,
        "userName": currentUser,
        "userRole": currentRole,
        "message": suneditor.getContent(),
        "likes": 0,
        "changeDate": "",
        "changeTime": "",
        "changeAutor": "",
        "changed": false
    });

    fetch(postUrl, added)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .then(pageRender)
        .catch(err => {
            console.error("Error: ", err);
        });

    }
};

function createComment(targetId) {

    console.log(`Fetching URL: ${commentsUrl}`);

    let targetIdArray = targetId.split("-");
    let added = {};
    let newComment = select(`#${targetId}`);
    let message = newComment.querySelector(".new-comment__title").value;
    let newCommentsArray;

    added.headers = {
        'Content-Type': 'application/json'
    };
    added.method = "POST";
    added.body = JSON.stringify({
        "postID": Number(targetIdArray[1]),
        "isNew": true,
        "date": setMessageDate(),
        "time": setMessageTime(),
        "userID": currentUserId,
        "userName": currentUser,
        "userRole": currentRole,
        "message": message,
        "likes": 0,
        "changeDate": "",
        "changeTime": "",
        "changeAutor": "",
        "changed": false
    });

    fetch(commentsUrl, added)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .then(pageRender)
        .catch(err => {
            console.error("Error: ", err);
        });
}

function updateMessage(targetId) {

    let element = select(`#${targetId}`);
    let elemenAutor = element.querySelector(".user__name").textContent.trim();

    if (currentRole == "Administrator" || currentUser == elemenAutor) {

        let targetIdArray = targetId.split("-");

        let post = select(`#${targetId}`);
        let message = post.querySelector(".contents__text");

        if (!select(`#correction-0`)) {
            let currentMessage = message.textContent.trim();

            addCorrection(message, 0);
            let temp = select("#correction-0");
            let tempMessage = temp.querySelector(".new-comment__title");
            tempMessage.textContent = currentMessage;
            tempMessage.style.minHeight = "100px";

            let button = temp.querySelector("#change");

            button.addEventListener("click", () => {
                let updateUrl = `${url}${targetIdArray[0]}/${targetIdArray[1]}`;
                console.log(`Fetching URL: ${updateUrl}`);

                let updated = {};

                updated.headers = {
                    'Content-Type': 'application/json'
                };
                updated.method = "PATCH";

                updated.body = JSON.stringify({
                    "message": tempMessage.value,
                    "changeDate": setMessageDate(),
                    "changeTime": setMessageTime(),
                    "changeAutor": currentUser,
                    "changed": true
                });

                if (confirm("Внести изменения?")) {

                    fetch(updateUrl, updated)
                        .then(response => {
                            if (response.ok) {
                                response.json();
                            } else {
                                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
                            }
                        })
                        .then(pageRender);
                }
            });
        }
    } else {
        alert("Изменить сообщение может только автор или администратор!");
    };
};


function showEditor(event) {
        console.log('sdlfkjs');
        event.target.classList.toggle('add');
        event.target.classList.toggle('cancel');
        editor.classList.toggle('show');
        let subTitle = document.querySelector("#sub_title");
        console.log(subTitle);
        if ( subTitle.innerHTML == lastNewsTitle) {
            subTitle.innerHTML = '[ Создать объявление _]';
        } else {
            subTitle.innerHTML = lastNewsTitle;
        };
};

let sendPost = document.querySelector('#send-post');
sendPost.addEventListener("click", createPost);

let editor = select(".add-post");
let addIcon = select(".icon-add");


let lastNewsTitle = '[ Последние новости: ]';
addIcon.addEventListener("click", showEditor);

window.onload = pageRender();

/**
* ID : 'post_add_editor'
* ClassName : 'sun-editor'
*/

var suneditor = SUNEDITOR.create('post_add_editor', {
    // insert options
    height: '100%',
    width: '100%',
    editorIframeFont : 'Arial',
    showFont: false,
    showFormats: false,
    showFontSize: false,
    showFontColor: false,
    showHiliteColor: false,
    showInOutDent: false,
    showLine: false,
    showTable: false,
    showImage: false,
    showVideo: false,
    showFullScreen: false,
    showCodeView: false
});
