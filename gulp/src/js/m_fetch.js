const theoryName = document.querySelector("#theory-name");
const theoryNumber = document.querySelector(".caption__theme");
const contentParent = document.querySelector(".m-content");
const leftNavParent = document.querySelector(".m-left-nav");

fetch("http://localhost:3000/course")
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("error while fetching, " + response.statusText);
  })
  .then(data => {
    console.log(data);

    theoryName.innerHTML = `[ ${data[0].theory.title} _]`;
    theoryNumber.innerHTML = `ТЕМА ${data[0].theory.number}`;
    let contentCard = "";
    data[0].theory.content.forEach((elem, idx) => {
      contentCard += `
      <h4 class="m-content__content-title" id="cnt${idx}">[ ${elem.contentTitle} _]</h4>
      <p class="m-content__text">${elem.contentText}</p>
      `;
    });
    contentParent.innerHTML = contentCard;
    let navCard = "";
    data[0].theory.content.forEach((elem, idx) => {
      navCard += `<a href="#cnt${idx}" class="m-left-nav__link">
        ${idx + 1}
        <span class="m-left-nav__prompt">[ ${elem.contentTitle} _]</span>
    </a>
        `;
      leftNavParent.innerHTML = navCard;
    });
  })

  .catch(err => console.log(err));
