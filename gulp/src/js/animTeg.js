let modal = document.getElementsByClassName('modal-window');


let item1 = ["[password]", "<h>", "<p/>", "<h/>", "<>", "<>"];


var W = 500,
  H = 500,
  R = 20,
  S = 2;
let position = modal[0].getBoundingClientRect();
console.log(position.width);
console.log("bottom " +position.bottom);
console.log("left " +position.left);
console.log("width " + modal[0].style.width);


var balls = [];
let count = 0;

function createBall() {

  let ball = document.createElement("DIV");
  ball.innerText = item1[count];
  console.log("randomTop " + item1[count] + " " + (Math.floor((Math.random() * (position.bottom - position.top)) + position.top)-position.top));
  count = count + 1;
  modal[0].appendChild(ball);

  ball.style.cssText = "margin-top: " + (Math.floor(Math.random() * 500 ))  +
  "px; margin-left:" + (Math.floor(Math.random() * position.width-100))  +
  "px; " +
    "px; position: absolute; z-index: -1; width: 30px; color: #3a8a94; background-color: red;  border-radius: " + R + "px";
  ball.direction = Math.random() * 6.28;
  var pos = ball.getBoundingClientRect();
  ball.realTop = pos.top;
  ball.realLeft = pos.left;
  console.log(ball.getClientRects());
  console.log("top" + item1[count] + "" + ball.offsetTop);
  console.log("left real" + item1[count] + "" + ball.offsetLeft);


  setInterval(function() {
    //moveBall(ball)
  }, 17);
  balls.push(ball);
}

function moveBall(ball) {

  for (var i = 0; i < balls.length; i++) {
    if (balls[i] == ball || ball.timeout) continue;
    if (ball.realTop > balls[i].realTop && ball.realTop < (balls[i].realTop ) && ball.realLeft > balls[i].realLeft && ball.realLeft < (balls[i].realLeft + R)) {
      ball.direction += Math.PI / 2
      balls[i].direction += Math.PI / 2
      ball.timeout = true
      setTimeout(function() {
        ball.timeout = false
      }, 1000);
    }
  }

  ball.realTop += Math.sin(ball.direction) * S;
  ball.realLeft += Math.cos(ball.direction) * S;

  if (ball.realTop  > position.bottom+position.top || ball.realLeft > position.right || ball.realTop < ball.offsetTop || ball.realLeft < ball.offsetLeft) {
    ball.direction += Math.PI / 2;
    return moveBall(ball);
  }
  ball.style.top = ball.realTop + "px";
  ball.style.left = ball.realLeft + "px";
}


var i = 4;
while (i--) createBall();
