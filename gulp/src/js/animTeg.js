let modal = document.getElementsByClassName('modal-window__registration');


let item1 = ["[password]", "<h>", "<p/>", "<h/>", "<>", "<>"];


var W = 500,
  H = 500,

  S = 2;
let position = modal[0].getBoundingClientRect();
console.log(position.width);
console.log("bottom " +position.bottom);
console.log("right " +position.right);
console.log("left random" + (Math.floor(Math.random() * (position.right-position.left )+position.left)));


var balls = [];
let count = 0;

function createBall() {

  let ball = document.createElement("DIV");
  ball.innerText = item1[count];
  console.log("randomTop " + item1[count] + " " + (Math.floor(Math.random() * ((position.top +modal[0].style.height)-position.top )+position.top)));
  count = count + 1;
  modal[0].appendChild(ball);

  ball.style.cssText = "left: " + (Math.floor(Math.random() * ((position.right-60)-position.left )+position.left))  +
  "px; top:" + (Math.floor(Math.random() * ((position.bottom-40) -position.top ) +position.top))  +
  "px; " +
    "px; position: absolute; z-index: 2;   color: #04bcc2; font-size: 20px; ";
    ball.classList.add('animTeg');

  ball.direction = Math.random() * 6.28;
  var pos = ball.getBoundingClientRect();
  ball.realTop = pos.top;
  ball.realLeft = pos.left;
  console.log(ball.getClientRects());
  console.log("top" + item1[count] + "" + ball.offsetTop);
  console.log("left real" + item1[count] + "" + ball.offsetLeft);


  setInterval(function() {
    moveBall(ball)
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

  if (ball.realTop  > (position.bottom-40)|| ball.realLeft > (position.right-60) || ball.realTop < position.top || ball.realLeft < position.left) {
    ball.direction += Math.PI / 2;
    return moveBall(ball);
  }
  ball.style.top = ball.realTop + "px";
  ball.style.left = ball.realLeft + "px";
}


var i = 5;
while (i--) createBall();
