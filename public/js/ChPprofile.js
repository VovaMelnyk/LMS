axios('http://localhost:3000/users')
        .then(function (data) {
        	console.log(data.data)
        	var members =data.data;
        	var strip = '';
        	var stripLength = 0;
        	var memberLength = parseInt(getComputedStyle(document.getElementsByClassName('ChP_grup-strip-member')[0]).width);
        	
        	for(var i=0; i<members.length; i++){
        		if(members[i].group == "FrontEnd_1"){
        			strip+=`<div class="ChP_grup-strip-member">
                    <div class="ChP_grup-strip-member-imgDiv" style="background-image: url(img/users/${members[i].img})"></div>
                    <p class="ChP_grup-strip-member-name">${members[i].name}</p>
                    <p class="ChP_grup-strip-member-bal">${members[i].grade}</p>
                </div>`

                document.getElementsByClassName('ChP_grup-strip')[0].innerHTML = strip;
                
                stripLength+=memberLength

        		}

        		document.getElementsByClassName('ChP_grup-strip')[0].style.width=stripLength+'px';
                console.log(stripLength)

			}
        });