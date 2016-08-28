document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  //<canvas id="canvas" width="200" height="400">
  // o = square block
  // i = stick block
  // j = j block
  // l = l block
  // t = t block
  // s = s block
  // z = z block

  var canvas = document.getElementById("canvas");
  var draw = canvas.getContext("2d");
  var width = 200;
  var height = 400;


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
    // function recognise key code and draw new o
    if (event.keyCode === 39) {
      // clears canvas then redraw new image
      draw.clearRect(0, 0, width, height);
      oZero.x += 10;
      oOne.x += 10;
      oTwo.x += 10;
      oThree.x += 10;
      console.log("right arrow pressed");
      console.log(oZero);
    }
    // left arrow
    else if (event.keyCode === 37) {
      draw.clearRect(0, 0, width, height);
      oZero.x -= 10;
      oOne.x -= 10;
      oTwo.x -= 10;
      oThree.x -= 10;
      console.log("left arrow pressed");
      console.log(oZero);
    }
    // down arrow
    else if (event.keyCode === 40) {
      draw.clearRect(0, 0, width, height);
      oZero.y += 10;
      oOne.y += 10;
      oTwo.y += 10;
      oThree.y += 10;
      console.log("down arrow pressed");
      console.log(oZero);
    }
    // redraw image once canvas page is cleared
    oDraw();
  };

  function drop() {
    draw.clearRect(0, 0, width, height);
    oZero.y += 10;
    oOne.y += 10;
    oTwo.y += 10;
    oThree.y += 10;
    oDraw();
    console.log("block drop");
  }

  // setInterval(drop, 1000);

  // simulate first shape
  // on start, to call oDraw function
  oDraw();


  // straight block
  // var i = [
  //   {x: 180, y: 10, width: 10, height: 10, color: "red"},
  //   {x: 180, y: 20, width: 10, height: 10, color: "blue"},
  //   {x: 180, y: 30, width: 10, height: 10, color: "yellow"},
  //   {x: 180, y: 40, width: 10, height: 10, color: "green"}
  // ];
  //
  // var iZero = i[0];
  // var iOne = i[1];
  // var iTwo = i[2];
  // var iThree = i[3];
  //
  // draw.fillStyle = iZero.color;
  // draw.fillRect(iZero.x, iZero.y, iZero.width, iZero.height)
  //
  // draw.fillStyle = iOne.color;
  // draw.fillRect(iOne.x, iOne.y, iOne.width, iOne.height)
  //
  // draw.fillStyle = iTwo.color;
  // draw.fillRect(iTwo.x, iTwo.y, iTwo.width, iTwo.height)
  //
  // draw.fillStyle = iThree.color;
  // draw.fillRect(iThree.x, iThree.y, iThree.width, iThree.height)


}); // bracket for dom content loaded
