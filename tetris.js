document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  //<canvas id="canvas" width="1000" height="200">
  // o = square block
  // i = stick block
  // j = j block
  // l = l block
  // t = t block
  // s = s block
  // z = z block

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = 1000;
  var height = 200;
  var col = 4; // x-axis
  var row = 0; // y-axis
  var dCol = 1; // for col
  var dRow = 1; // for row


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


  // gameGrid[row/10][col/10] = 1;

  function colorCanvas() {
    for (var i = 0; i < gameGrid.length; i++) {
      for (var j = 0; j < gameGrid[i].length; j++) {
        if (gameGrid[i][j] === 1) {
          ctx.fillStyle = "red";
          ctx.fillRect(j*10,i*10,10,10);
          console.log("grid colored");
        }
        else if (gameGrid[i][j] === 2) {
          ctx.fillStyle = "blue";
          ctx.fillRect(j*10,i*10,10,10);
          console.log("grid colored");
        }
      }
    }
  }


  // var gameGrid = []
  // for (var i = 0; i < 20; i++) {
  //   var temp = [];
  //   for (var i = 0; i < 10; i++) {
  //     temp.push(0);
  //   }
  //   gameGrid.push(temp);
  // }

  var interval = setInterval(gameStart, 1000);

  // game loop
  function gameStart() {
    checkPosition();
    clearCanvas();
    //draw();

    colorCanvas();
    // newBlock();


  }

  function newBlock() {
    gameGrid[row][col] = 1;
    console.log("new block drawn");
    console.log(gameGrid);
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width,height);
    console.log("canvas cleared");
  }

  function checkPosition() {
    if (gameStatus()) {
      clearInterval(interval);
      console.log("game over");
    }
    else if (checkBorder()) {
      clearInterval(interval);
      console.log("time stop");
      row = 0;
      newBlock();
      interval = setInterval(gameStart, 1000);
    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
      row = 0;
      newBlock();
      interval = setInterval(gameStart, 1000);
    }
    else {
      updateGrid();
      row += dRow;
      console.log("position update: " + row);
    }
  }

  function checkBorder() {
    if (row > 18) {
      console.log('checkBorder returning true');
      return true;
    }
    else {
      console.log('checkBorder returning false');
      return false;
    }
  }

  function checkCollision() {
    if (gameGrid[row+1][col] === 1) {
      return true;
    }
    else {
      return false;
    }
  }

  function gameStatus() {
    // check for game over. if grid below spawn point is occupied
    // then game is over
    if ((gameGrid[0][col] === 1) && (gameGrid[1][col] === 1)) {
      return true;
    }
    else {
      return false;
    }
  }

  function updateGrid() {
    // setting next grid to equal 1
    gameGrid[row][col] = 0;
    gameGrid[row + 1][col] = 1;
    // console.log(gameGrid);
    console.log("grid updated");
  }


  document.addEventListener("keydown", direction);

  function direction(event) {
    // right arrow
    // function recognise key code
    if (event.keyCode === 39) {
      // clears canvas then redraw new image
      col += dCol;
      gameGrid[row][col -1] = 0;
      gameGrid[row][col] = 1;
      clearCanvas();
      console.log("right arrow pressed");
    }
    // left arrow
    else if (event.keyCode === 37) {
      col -= dCol;
      gameGrid[row][col + 1] = 0;
      gameGrid[row][col] = 1;
      clearCanvas();
      console.log("left arrow pressed");
    }
    // down arrow
    else if (event.keyCode === 40) {
      row += dRow;
      gameGrid[row - 1][col] = 0;
      gameGrid[row][col] = 1;
      clearCanvas();
      console.log("down arrow pressed");
    }
  }



  // colorCanvas();
  // draw();
  // console.log(gameGrid);
}); // bracket for dom content loaded
