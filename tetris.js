document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded');

  // <canvas id="canvas" width="100" height="200">
  // o = square block
  // i = stick block
  // j = j block
  // l = l block
  // t = t block
  // s = s block
  // z = z block

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = 20;
  var height = 40;
  // var col = 4; // x-axis
  // var row = 0; // y-axis
  // var cube1;
  // var cube2;
  // var cube3;
  // var cube4;

  var gameGrid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];


  // gameGrid[row/10][col/10] = 1;

  // var gameGrid = []
  // for (var i = 0; i < 40; i++) {
  //   var temp = [];
  //   for (var j = 0; j < 20; j++) {
  //     temp.push(0);
  //   }
  //   gameGrid.push(temp);
  // }

  function shape (row, col) {
  	this.row = row;
  	this.col = col;
    // this.moveLeft = funtion() {
    //
    // }
  }

  var Oone = new shape (1,9);
  var Otwo = new shape (1,10);
  var Othree = new shape (2,9);
  var Ofour = new shape (2,10);

  var O = [Oone,Otwo,Othree,Ofour];

  // var I = [
  //   {row: 1, col: 9},
  //   {row: 2, col: 9},
  //   {row: 3, col: 9},
  //   {row: 4, col: 9}
  // ];
  //
  // var L = [
  //   {row: 1, col: 9},
  //   {row: 2, col: 9},
  //   {row: 3, col: 9},
  //   {row: 3, col: 10}
  // ];
  //
  // var J = [
  //   {row: 1, col: 10},
  //   {row: 2, col: 10},
  //   {row: 3, col: 10},
  //   {row: 3, col: 9}
  // ];
  //
  // var T = [
  //   {row: 1, col: 8},
  //   {row: 1, col: 9},
  //   {row: 1, col: 10},
  //   {row: 2, col: 9}
  // ];
  //
  // var S = [
  //   {row: 1, col: 9},
  //   {row: 1, col: 10},
  //   {row: 2, col: 9},
  //   {row: 2, col: 8}
  // ];
  //
  // var Z = [
  //   {row: 1, col: 8},
  //   {row: 1, col: 9},
  //   {row: 2, col: 9},
  //   {row: 2, col: 10}
  // ];

  function colorGrid() {
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

  var interval = setInterval(gameStart, 100);

  // game loop
  function gameStart() {
    // drawShape();
    checkPosition();
    clearCanvas();
    colorGrid();
  }

  // function drawShape() {
  //   gameGrid[row][col] = 1;
  //   console.log("new block drawn");
  //   console.log(gameGrid);
  // }

  // use switch to take random value to recognise different shapes
  function drawShape() {
      for (var i = 0; i < O.length; i++) {
        gameGrid[O[i].row][O[i].col] = 2;
        console.log("new Block");
      }
  }

  function setFinalLocation() {
    for (var i = 0; i < O.length; i++) {
      gameGrid[O[i].row][O[i].col] = 1;
    }
  }

  function newShape() {
    // row = row; // this has to be removed
    var num = Math.random();
    if (num < .25) {
      newSquare();
    } else if (num < .5) {
      newLine();
    }
  }

  function newSquare() {
    Oone.row = 1;
    Oone.col = 9;
    Otwo.row = 1;
    Otwo.col = 10;
    Othree.row = 2;
    Othree.col = 9;
    Ofour.row = 2;
    Ofour.col = 10;
  }

  function newZigZag() {

  }

  function newLine() {
    Oone.row = 1;
    Oone.col = 9;
    Otwo.row = 2;
    Otwo.col = 9;
    Othree.row = 3;
    Othree.col = 9;
    Ofour.row = 4;
    Ofour.col = 9;
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width*10,height*10);
    console.log("canvas cleared");
  }

  function checkPosition() {
    // if (gameStatus()) {
    //   clearInterval(interval);
    //   console.log("game over");
    // }
    // else
    if (checkBaseline()) {
      clearInterval(interval);
      console.log("time stop");
      clearAndDrop();

      setFinalLocation();
      newShape();

      drawShape();
      interval = setInterval(gameStart, 100);

    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
      clearAndDrop();
      // for (var i = 0; i < O.length; i++) {
      //   O[i].row = O[i].row;
      // }
      // row = 0; // this has to be removed
      drawShape();
      setFinalLocation();
      newShape();
      interval = setInterval(gameStart, 100);
    }
    else {
      // check position first then update grid
      // or grid below will be updated to 1 and
      // collision will be detected and game stops
      updateGrid(); // not necessary anymore since
      // accessing values in object instead????
      // row++; //***********
      clearCanvas();

      O[0].row++;
      O[1].row++;
      O[2].row++;
      O[3].row++;
      drawShape();
      // console.log("position update: " + row);
    }
  }

  function checkBaseline() { //*********** done
    // if (row === 39) {
    //   console.log(row);
    //   console.log('checkBaseline returning true');
    //   // row = row; // set to beginning row
    //   return true;

    // check if any cubes are at the baseline
    var isBottom = false;
    for (var i = 0; i < O.length; i++) {
      if(O[i].row === 39) {
        isBottom = true;
        return isBottom;
      }
    }
  }

  function checkCollision() { //*********** done
    // this has to be changed to be more dynamic to
    // consider shapes
    // console.log("-------------");
    // console.log(gameGrid[row]);
    // console.log("Row: ",row, "Col: ", col);
    // console.log("-------------");
  //   if (gameGrid[row+1][col] === 1) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

    // for collison, check from bottom up if any cubes
    // beneath are occupied
    var isCollided = false;
    for (var i = O.length-1; i >= 0; i--) {
      var someNum = (O[i].row) + 1;
      var someNum2 = O[i].col;
      if(gameGrid[someNum][someNum2] === 1) {
        isCollided = true;
        return isCollided;
      }
    }
  }

  function gameStatus() { //*********** do this last
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
    for (var i = 0; i < O.length; i++) {
      gameGrid[O[i].row][O[i].col] = 0;
      gameGrid[(O[i].row) + 1][O[i].col] = 1;
      console.log("grid updated");
    }
  }


  document.addEventListener("keydown", direction);

  // keypad arrows
  function direction(event) { //***********
    // right arrow
    // function recognise key code
    if (event.keyCode === 39) {
    	var isRight = false;
    	for (var i = 0; i < O.length; i++) {
    		if(O[i].col === (width - 1)) {
    			isRight = true;
    		}
    		else if (gameGrid[O[i].row][(O[i].col) + 1] !== 0) {
    		    // checkCollision();
    	 	}
    	 	else {

            clearCanvas();
            console.log("canvas cleared on right");
            console.log(gameGrid[1]);
            console.log(gameGrid[2]);
            console.log(gameGrid[3]);
            console.log(gameGrid[4]);
            console.log(gameGrid[5]);
            console.log(gameGrid[6]);

            for (var i = 0; i < O.length; i++) {
              gameGrid[O[i].row][O[i].col] = 0;
            }

            O[0].col++;
            O[1].col++;
            O[2].col++;
            O[3].col++;
            drawShape();
            // console.log(gameGrid);
            // debugger;


            // gameGrid[O[i].row][O[i].col -1] = 0;
            // gameGrid[O[i].row][O[i].col] = 1;


    		    console.log("right arrow pressed");
    		}
    	}
      if(isRight) {
        for (var i = 0; i < O.length; i++) {
          O[i].col = O[i].col;
		    }
      }
    }


    // if (event.keyCode === 39) {
    //   if (col === (width - 1)) {
    //     console.log(col);
    //     col = col;
    //   }
    //   // checks for col on block's right
    //   else if (gameGrid[row][col+1]!=0) {
    //     checkCollision();
    //   }
    //   else {
    //     col++;
    //     gameGrid[row][col -1] = 0;
    //     gameGrid[row][col] = 1;
    //     clearCanvas();
    //     console.log("right arrow pressed");
    //   }
    // }

    // left arrow
    else if (event.keyCode === 37) {
    	var isLeft = false;
    	for (var i = 0; i < O.length; i++) {
    		if (O[i].col === 0) {
    			isLeft = true;
    		}
    		// checks for col on block's left
    		else if (gameGrid[O[i].row][(O[i].col) - 1] !== 0) {
    			checkCollision();
    		}
    		else {
          clearCanvas();

          for (var i = 0; i < O.length; i++) {
            gameGrid[O[i].row][O[i].col] = 0;
          }

          O[0].col--;
          O[1].col--;
          O[2].col--;
          O[3].col--;
          drawShape();
    		console.log("left arrow pressed");
    		}
    	}
    	if(isLeft) {
    		for (var i = 0; i < O.length; i++) {
    			O[i].col = O[i].col;
    		}
    	}
    }

    // else if (event.keyCode === 37) {
    //   if (col === 0) {
    //     col = col;
    //   }
    //   // checks for col on block's left
    //   else if (gameGrid[row][col-1]!=0) {
    //     checkCollision();
    //   }
    //   else {
    //     col--;
    //     gameGrid[row][col + 1] = 0;
    //     gameGrid[row][col] = 1;
    //     clearCanvas();
    //     console.log("left arrow pressed");
    //   }
    // }

    // down arrow
    else if (event.keyCode === 40) {
    	var isDown = false;
    	for (var i = 0; i < O.length; i++) {
    			if (O[i].row === (height - 1)) {
    				isDown = true;
    		}
    		// checks for block below if clock not at row 19
    		else if (gameGrid[(O[i].row) + 1][O[i].col] !== 0) {
    			checkCollision();
    		}
    		else {
          clearCanvas();

          for (var i = 0; i < O.length; i++) {
            gameGrid[O[i].row][O[i].col] = 0;
          }

          O[0].row++;
          O[1].row++;
          O[2].row++;
          O[3].row++;

    			drawShape();
    			console.log("down arrow pressed");
    		}
    	}
    	if(isDown) {
    		for (var i = 0; i < O.length; i++) {
    			O[i].col = O[i].col;
    		}
    	}
    }
  }

  //   else if (event.keyCode === 40) {
  //     if (row === (height - 1)) {
  //       row = row;
  //     }
  //     // checks for block below if clock not at row 19
  //     else if (gameGrid[row+1][col] !== 0){
  //       checkCollision();
  //     }
  //     else {
  //       row++;
  //       gameGrid[row - 1][col] = 0;
  //       gameGrid[row][col] = 1;
  //       clearCanvas();
  //       console.log("down arrow pressed");
  //     }
  //   }
  // }

  // to identify which array row needs to be cleared
  // to clear lines
  function clearAndDrop() {
    // iterate through all rows to check if they are completely filled
  	for(var i = 0; i < gameGrid.length; i++) {
  		var x = 0;
      // iterate through each row
  		for(var j = 0; j < gameGrid[i].length; j++) {
        // check if each value in the row is occupied
  			if(gameGrid[i][j] > 0) {
  				x++;
  			}
  		}
      // if whole row is filled, shift everything on top down by 1 row
      if(x === gameGrid[i].length) {
        console.log("values in row " + i + " are all greater than 0");
        var k = i;
        do {
          // copy row on top and delete tow on top
          for (var j = 0; j < gameGrid[k].length; j++) {
            gameGrid[k][j] = gameGrid[k-1][j];
            gameGrid[k-1][j] = 0;
          }
          if (k > 1) {
            k--;
          }
        } while(rowEmpty(k-1) !== 0);
      }
  	}
  }

  function rowEmpty(rowNum) {
  	var total = 0;
  	for (var counter = 0; counter < gameGrid[rowNum].length; counter++) {
  		total += gameGrid[rowNum][counter];
  	}
  	return total;
  }


}); // bracket for dom content loaded
