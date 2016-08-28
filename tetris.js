document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

//<canvas id="canvas" width="200" height="400">

  var canvas = document.getElementById("canvas");
  var draw = canvas.getContext("2d");


//square block
var o = [
  {x: 10, y: 10, width: 10, height: 10, color: "red"},
  {x: 20, y: 10, width: 10, height: 10, color: "blue"},
  {x: 10, y: 20, width: 10, height: 10, color: "yellow"},
  {x: 20, y: 20, width: 10, height: 10, color: "green"}

];

var oZero = o[0];
var oOne = o[1];
var oTwo = o[2];
var oThree = o[3];

function oDraw() {
draw.fillStyle = oZero.color;
draw.fillRect(oZero.x, oZero.y, oZero.width, oZero.height)

draw.fillStyle = oOne.color;
draw.fillRect(oOne.x, oOne.y, oOne.width, oOne.height)

draw.fillStyle = oTwo.color;
draw.fillRect(oTwo.x, oTwo.y, oTwo.width, oTwo.height)

draw.fillStyle = oThree.color;
draw.fillRect(oThree.x, oThree.y, oThree.width, oThree.height)

};

window.addEventListener("keydown", move, false);

function move(event) {
  // right arrow
  if (event.keyCode === 39) {
    // clears canvas then redraw new image
    draw.clearRect(0,0,200,400);
    oZero.x += 10;
    oOne.x += 10;
    oTwo.x += 10;
    oThree.x += 10;
    console.log("right arrow pressed");
    console.log(oZero);
  }
  // left arrow
  else if (event.keyCode === 37) {
    draw.clearRect(0,0,200,400);
    oZero.x -= 10;
    oOne.x -= 10;
    oTwo.x -= 10;
    oThree.x -= 10;
    console.log("left arrow pressed");
    console.log(oZero);
  }
  // down arrow
  else if (event.keyCode === 40) {
    draw.clearRect(0,0,200,400);
    oZero.y += 10;
    oOne.y += 10;
    oTwo.y += 10;
    oThree.y += 10;
    console.log("left arrow pressed");
    console.log(oZero);
  }
  oDraw();
};

oDraw();


// straight block
// var l = [
//   {x: 180, y: 10, width: 10, height: 10, color: "red"},
//   {x: 180, y: 20, width: 10, height: 10, color: "blue"},
//   {x: 180, y: 30, width: 10, height: 10, color: "green"},
//   {x: 180, y: 40, width: 10, height: 10, color: "yellow"}
// ]
//
// var lZero = l[0];
// var lOne = l[1];
// var lTwo = l[2];
// var lThree = l[3];
//
// draw.fillStyle = lZero.color;
// draw.fillRect(lZero.x, lZero.y, lZero.width, lZero.height)
//
// draw.fillStyle = lOne.color;
// draw.fillRect(lOne.x, lOne.y, lOne.width, lOne.height)
//
// draw.fillStyle = lTwo.color;
// draw.fillRect(lTwo.x, lTwo.y, lTwo.width, lTwo.height)
//
// draw.fillStyle = lThree.color;
// draw.fillRect(lThree.x, lThree.y, lThree.width, lThree.height)


}); // bracket for dom content loaded
