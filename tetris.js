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
  var col = 10; // x-axis
  var row = 0; // y-axis
  var dCol = 10; // for col
  var dRow = 10; // for row


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

  // var gameGrid = []
  // for (var i = 0; i < 20; i++) {
  //   var temp = [];
  //   for (var i = 0; i < 10; i++) {
  //     temp.push(0);
  //   }
  //   gameGrid.push(temp);
  // }

  var interval = setInterval(gameStart, 500);

  // game loop
  function gameStart() {
    draw();
    updateGrid();
    clearCanvas();
    updatePosition();
    draw();
  }

  // use for loop to draw shapes later
  function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(col,row,10,10);
    console.log("square drawn");
  }

  function updateGrid() {
    gameGrid[row/10][col/10] = 1;
    console.log("grid updated");
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width,height);
    console.log("canvas cleared");
  }

  function updatePosition() {
    if (checkBorder()) {
      clearInterval(interval);
      console.log("time stop");
    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
    }
    else {
    row += dRow;
    console.log("position update: " + row);
    }
  }

  function checkCollision() {
    if (gameGrid[(row/10)+1][col/10] === 1) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkBorder() {
    // gameGrid[19][1] starts at (10,180)
    if (row > 180) {
      console.log('checkBorder returning true');
      return true;
    }
    else {
      console.log('checkBorder returning false');
      return false;
    }
  }

  // draw();
  // console.log(gameGrid);
}); // bracket for dom content loaded
