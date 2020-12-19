var ball = document.getElementById('ball');
var moveBy=10;
window.addEventListener('keydown', (event) => {
  var position = ball.getBoundingClientRect();
  var top = position.top;
  var left = position.left;
  var key = event.key;
  if (true){
    console.log("inside if-block");
    if ((key == "d" || key == "D" || key=="ArrowRight") && position.right <= window.innerWidth-10) {
      let n = parseInt(left) + moveBy + "px";
      ball.style.left = n;
    } else if ((key == 's' || key == 'S' || key=="ArrowDown") && position.bottom <= window.innerHeight-10) {
      let n = parseInt(top) + moveBy + "px";
      ball.style.top = n;
    } else if ((key == 'a' || key == 'A' || key=="ArrowLeft") && position.left >= 10) {
      let n = parseInt(left) - moveBy + "px";
      ball.style.left = n;
    } else if ((key == 'w' || key == 'W' || key=="ArrowUp") && position.top >= 10 ) {
      let n = parseInt(top) - moveBy + "px";
      ball.style.top = n;
    }
  }
});
