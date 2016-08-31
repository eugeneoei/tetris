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
      linesToClear();
      row = 0;
      newBlock();
      interval = setInterval(gameStart, 800);
    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
      linesToClear();
      row = 0;
      newBlock();
      interval = setInterval(gameStart, 800);
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
    console.log("grid updated");
  }


  document.addEventListener("keydown", direction);

  // keypad arrows
  function direction(event) {
    // right arrow
    // function recognise key code
    if (event.keyCode === 39) {
      if (col === (width - 1)) {
        console.log(col);
        col = col;
      }
      // checks for col on block's right
      else if (gameGrid[row][col+1]!=0) {
        checkCollision();
      }
      else {
        col++;
        gameGrid[row][col -1] = 0;
        gameGrid[row][col] = 1;
        clearCanvas();
        console.log("right arrow pressed");
      }
    }

    // left arrow
    else if (event.keyCode === 37) {
      if (col === 0) {
        col = col;
      }
      // checks for col on block's left
      else if (gameGrid[row][col-1]!=0) {
        checkCollision();
      }
      else {
        col--;
        gameGrid[row][col + 1] = 0;
        gameGrid[row][col] = 1;
        clearCanvas();
        console.log("left arrow pressed");
      }
    }

    // down arrow
    else if (event.keyCode === 40) {
      if (row === (height - 1)) {
        row = row;
      }
      // checks for block below if clock not at row 19
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

  // to clear lines
  // to identify which array row needs to be cleared
  function linesToClear() {
  	for(var i = 0; i < gameGrid.length; i++) {
  		var x = 0;
  		for(var j = 0; j < gameGrid[i].length; j++) {
  			if(gameGrid[i][j] > 0) {
  				x++;
  			}
  			if(x === gameGrid[i].length) {
  				console.log("values in row " + i + " are all greater than 0");
          for (var k = 0; k < gameGrid[i].length; k++) {
            gameGrid[i][k] = 0;
				  }
  			}
  		}
  	}
  }













  // function linesToClear() {
  //   for (var j = 0; j < gameGrid.length; j++) {
  //   	if (arrayEquals(gameGrid[j], correctArray)) {
  //       console.log ("row " + j + " needs to be cleared");
  //       for (var k = 0; k < gameGrid[j].length; k++) {
	// 		       gameGrid[j][k] = 0;
  //       }
  //       console.log(gameGrid);
  //   	}
  //   }
  // }
  //
  // function arrayEquals(a1, a2) {
  //   if (a1.length !== a2.length) {
  //   	console.log("array length not identical");
  //     return false;
  //   }
  //   for (var i = 0; i < a1.length; i++) {
  //     if (a1[i] !== a2[i]) {
  //       console.log("array values not indentical");
  // 	  	return false;
  //     }
  //   }
  //   console.log("array identical");
  //   return true;
  // }






}); // bracket for dom content loaded
