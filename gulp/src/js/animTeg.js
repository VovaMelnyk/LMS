
function delTeg() {

  for (var i = 0; i < 5; i++) {
    let teg = document.getElementsByClassName('animTeg');
    teg[0].parentNode.removeChild(teg[0]);
//console.log(teg);
  }

}
function animTT(argument) {


let modal =  argument[0].children[0];
let item1 = ["[password]", "<h>", "<p/>", "<h/>", "<span>"];
let count = 0;

let balls = [];
  let S = 2;
  let position = modal.getBoundingClientRect();



function createBall() {

  let ball = document.createElement("DIV");
  ball.innerText = item1[count];
  count = count + 1;


  ball.style.cssText = "left: " + (-50)   +
  "px; top:" + 50  +
  "px; " +
    "px; position: absolute; width: 100px; z-index: 2;  height: 20px;  color: #04bcc2; font-size: 20px; ";

    modal.appendChild(ball);
    ball.classList.add('animTeg');

  ball.direction = Math.random() * 6.28;
  var pos = ball.getBoundingClientRect();

  ball.realTop = pos.top;
  ball.realLeft = pos.left;
//   console.log("родитель ширна "+position.width);
//   console.log("родитель высота " +position.height);
//   console.log("родитель сверху " +position.top);
//
// console.log("тег справа " + ball.innerText + " "+ pos.right);
// console.log("тег слева "+ ball.innerText + " "+ pos.left);
// console.log("тег сверху "+ ball.innerText + " "+ ball.style.top);



  setInterval(function() {
    moveBall(ball)
  }, 17);
  balls.push(ball);
}

function moveBall(ball) {

  for (var i = 0; i < balls.length; i++) {
    if (balls[i] == ball || ball.timeout) continue;
    if (ball.realTop > balls[i].realTop && ball.realTop < (balls[i].realTop + 20 ) && ball.realLeft > balls[i].realLeft+20 && ball.realLeft < (balls[i].realLeft + 60)) {
      ball.direction += Math.PI / 2;
      balls[i].direction += Math.PI / 2;
      ball.timeout = true;

      setTimeout(function() {
        ball.timeout = false;
      }, 2000);
    }
  }

  ball.realTop += Math.sin(ball.direction) * S;
  ball.realLeft += Math.cos(ball.direction) * S;

  if (ball.realTop  > (position.height-50)|| ball.realLeft < 0 || ball.realTop < 0 || ball.realLeft > position.width-100 ) {
    ball.direction += Math.PI / 2;
    return moveBall(ball);
  }
  ball.style.top = ball.realTop + "px";
  ball.style.left = ball.realLeft + "px";
}
var i = 5;
while (i--) createBall();
};
