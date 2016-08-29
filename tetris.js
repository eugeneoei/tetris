document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  //<canvas id="canvas" width="100" height="200">
  // o = square block
  // i = stick block
  // j = j block
  // l = l block
  // t = t block
  // s = s block
  // z = z block

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = 100;
  var height = 200;
  var col = 10;
  var row = 10;
  var dRow = 10; // for row
  var dCol = 10; // for col


  var gameGrid =[[0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0]]

  // game loop
  setInterval(function() {
    draw();
    updateGrid();
    clearCanvas();
    updatePosition();
       draw();
  }, 1000);

  function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(row,col,10,10);
    console.log("square drawn")
  }

  function updateGrid() {
    gameGrid[col/10][row/10] = 1;
    console.log("grip updated")
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width,height);
    console.log("canvas cleared")
  }

  function updatePosition() {
    col += dCol;
  }

  draw();
  console.log(gameGrid);
}); // bracket for dom content loaded
