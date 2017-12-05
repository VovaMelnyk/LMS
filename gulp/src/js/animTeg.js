let main = document.getElementsByClassName('modal-window');

let item1 = ["[password]", "<h>", "<p/>", "<h/>", "<>", "<>"];


var W = 500,
  H = 500,
  R = 50,
  S = 2;

var balls = [];
let count = 0;

function createBall() {

  var ball = document.createElement("DIV");
  ball.innerText = item1[count];
  count = count + 1;
  main[0].appendChild(ball);
  ball.style.cssText = "top: " + (Math.random() * 400) + "px; left:" + (Math.random() * 400) +
    "px; position: absolute; color: #3a8a94;  border-radius: " + R + "px";
  ball.direction = Math.random() * 6.28;
  var pos = ball.getBoundingClientRect();
  ball.realTop = pos.top;
  ball.realLeft = pos.left;
  setInterval(function() {
    moveBall(ball)
  }, 17);
  balls.push(ball);
}

function moveBall(ball) {

  for (var i = 0; i < balls.length; i++) {
    if (balls[i] == ball || ball.timeout) continue;
    if (ball.realTop > balls[i].realTop && ball.realTop < (balls[i].realTop + R) && ball.realLeft > balls[i].realLeft && ball.realLeft < (balls[i].realLeft + R)) {
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

  if (ball.realTop + R > H || ball.realLeft + R > W || ball.realTop < 0 || ball.realLeft < 0) {
    ball.direction += Math.PI / 2;
    return moveBall(ball);
  }
  ball.style.top = ball.realTop + "px";
  ball.style.left = ball.realLeft + "px";
}


var i = 5;
while (i--) createBall();
