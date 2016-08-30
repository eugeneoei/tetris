document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  //<canvas id="canvas" width="800" height="200">
  // o = square block
  // i = stick block
  // j = j block
  // l = l block
  // t = t block
  // s = s block
  // z = z block

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = 10;
  var height = 20;
  var col = 4; // x-axis
  var row = 0; // y-axis
  // var dCol = 1;
  // var dRow = 1;


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

  var interval = setInterval(gameStart, 800);

  // game loop
  function gameStart() {
    checkPosition();
    clearCanvas();
    colorCanvas();
  }

  function newBlock() {
    gameGrid[row][col] = 1;
    console.log("new block drawn");
    console.log(gameGrid);
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width*10,height*10);
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
      interval = setInterval(gameStart, 800);
    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
      row = 0;
      newBlock();
      interval = setInterval(gameStart, 800);
      // resetMove();
    }
    else {
      updateGrid();
      row++;
      console.log("position update: " + row);
    }
  }

  function checkBorder() {
    if (row === 19) {
      console.log(row);
      console.log('checkBorder returning true');
      row = row;
      return true;
    }
    else {
      console.log('checkBorder returning false');
      return false;
    }
  }

  function checkCollision() {
    console.log("-------------");
    console.log(gameGrid[row]);
    console.log("Row: ",row, "Col: ", col);
    console.log("-------------");
    if (gameGrid[row+1][col] === 1) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkLeftBorder() {
    for (var i = 0; i < gameGrid.length; i++) {
      if (gameGrid[i][0] === 1) {
        return true;
      }
    }
  }

  function checkRightBorder() {
    for (var i = 0; i < gameGrid.length; i++) {
      if (gameGrid[i][9] === 1) {
        return true;
      }
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

  // keypad arrows
  function direction(event) {
    // right arrow
    // function recognise key code

    if (event.keyCode === 39) {
      if (col === 9) {
        console.log(col);
        col = col;
      }
      else if (gameGrid[row][col+1]!=0) {
        checkCollision();
      }
      else {
        col++;
        gameGrid[row][col -1] = 0;
        gameGrid[row][col] = 1;
        clearCanvas();
        console.log("right arrow pressed");
        // resetMove();
      }
    }

    // left arrow
    else if (event.keyCode === 37) {
      if (col === 0) {
        col = col;
      }
      else if (gameGrid[row][col-1]!=0) {
        checkCollision();
      }
      else {
        col--;
        gameGrid[row][col + 1] = 0;
        gameGrid[row][col] = 1;
        clearCanvas();
        console.log("left arrow pressed");
      // resetMove();
      }
    }

    // down arrow
    else if (event.keyCode === 40) {
      if (row === 19) {
        row = row;
      }
      else if (gameGrid[row+1][col]!=0){
        checkCollision();
      }
      else {
        row++;
        gameGrid[row - 1][col] = 0;
        gameGrid[row][col] = 1;
        clearCanvas();
        console.log("down arrow pressed");
      }
    }
  }



  // colorCanvas();
  // draw();
  // console.log(gameGrid);
}); // bracket for dom content loaded
