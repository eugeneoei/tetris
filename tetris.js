document.addEventListener('DOMContentLoaded', function () {
  // console.log('DOM loaded');

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = 20;
  var height = 40;
  var interval;
  var gameGrid = [];

  // var gameGrid = [[10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  //                 [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10]]

  // generate array to store values
  for (var i = 0; i < height; i++) {
    var temp = [];
    for (var j = 0; j < width; j++) {
      temp.push(0);
    }
    gameGrid.push(temp);
  }

  function block (row, col) {
  	this.row = row;
  	this.col = col;
  }

  var cubeOne = new block (1,9);
  var cubeTwo = new block (1,10);
  var cubeThree = new block (2,9);
  var cubeFour = new block (2,10);
  var shape = [cubeOne,cubeTwo,cubeThree,cubeFour];

  function initiateTimer() {
    interval = setInterval(gameStart, 500);
  }

  function newShape() {
    var num = Math.random();
    if (num <= .14) {
      newO();
    }
    else if (num <= .28) {
      newI();
    }
    else if (num <= .42) {
      newL();
    }
    else if (num <= .56) {
      newJ();
    }
    else if (num <= .7) {
      newT();
    }
    else if (num <= .84) {
      newS();
    }
    else if (num <= 1) {
      newZ();
    }
  }
   // use object constructor to create blocks here
  function newO() {
    cubeOne.row = 0;
    cubeOne.col = 9;
    cubeTwo.row = 0;
    cubeTwo.col = 10;
    cubeThree.row = 1;
    cubeThree.col = 9;
    cubeFour.row = 1;
    cubeFour.col = 10;
  }

  function newI() {
    cubeOne.row = 0;
    cubeOne.col = 9;
    cubeTwo.row = 1;
    cubeTwo.col = 9;
    cubeThree.row = 2;
    cubeThree.col = 9;
    cubeFour.row = 3;
    cubeFour.col = 9;
  }

  function newL() {
    cubeOne.row = 0;
    cubeOne.col = 8;
    cubeTwo.row = 1;
    cubeTwo.col = 8;
    cubeThree.row = 2;
    cubeThree.col = 8;
    cubeFour.row = 2;
    cubeFour.col = 9;

  }

  function newJ() {
    cubeOne.row = 0;
    cubeOne.col = 9;
    cubeTwo.row = 1;
    cubeTwo.col = 9;
    cubeThree.row = 2;
    cubeThree.col = 9;
    cubeFour.row = 2;
    cubeFour.col = 8;
  }

  function newT() {
    cubeOne.row = 0;
    cubeOne.col = 7;
    cubeTwo.row = 0;
    cubeTwo.col = 8;
    cubeThree.row = 0;
    cubeThree.col = 9;
    cubeFour.row = 1;
    cubeFour.col = 8;
  }

  function newS() {
    cubeOne.row = 0;
    cubeOne.col = 8;
    cubeTwo.row = 0;
    cubeTwo.col = 9;
    cubeThree.row = 1;
    cubeThree.col = 8;
    cubeFour.row = 1;
    cubeFour.col = 7;
  }

  function newZ() {
    cubeOne.row = 0;
    cubeOne.col = 7;
    cubeTwo.row = 0;
    cubeTwo.col = 8;
    cubeThree.row = 1;
    cubeThree.col = 8;
    cubeFour.row = 1;
    cubeFour.col = 9;
  }



  // game loop
  function gameStart() {
    drawShape();
    checkPosition();
    clearCanvas();
    colorGrid();
  }

  function checkPosition() {
    // this part is still WIP
    // if (gameStatus()) {
    //   clearInterval(initiateTimer());
      // console.log("game over");
    // }
    // else
    if (checkBaseline()) {
      clearInterval(interval);
      // console.log("time stop");
      clearAndDrop();
      setFinalLocation();
      newShape();
      drawShape();
      interval = setInterval(gameStart, 500);
    }
    else if (checkBottomCollision()) {
      clearInterval(interval);
      // console.log("time stop");
      clearAndDrop();
      drawShape();
      setFinalLocation();
      newShape();
      interval = setInterval(gameStart, 500);
    }
    else {
      // check position first then update grid
      // or grid below will be updated to 1 and
      // collision will be detected and game stops
      updateGrid();
      clearCanvas();
      shape[0].row++;
      shape[1].row++;
      shape[2].row++;
      shape[3].row++;
      drawShape();
    }
  }

  function drawShape() {
      for (var i = 0; i < shape.length; i++) {
        gameGrid[shape[i].row][shape[i].col] = 2;
        // console.log("new Block");
        console.log(gameGrid[shape[i].row]);
      }
  }

  function setFinalLocation() {
    for (var i = 0; i < shape.length; i++) {
      gameGrid[shape[i].row][shape[i].col] = 1;
    }
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width*10,height*10);
    // console.log("canvas cleared");
  }

  function colorGrid() {
    for (var i = 0; i < gameGrid.length; i++) {
      for (var j = 0; j < gameGrid[i].length; j++) {
        if (gameGrid[i][j] === 1) {
          ctx.fillStyle = "#94A3B2";
          ctx.fillRect(j*10,i*10,10,10);
          // console.log("grid colored");
        }
        else if (gameGrid[i][j] === 2) {
          ctx.fillStyle = "black";
          ctx.fillRect(j*10,i*10,10,10);
          // console.log("grid colored");
        }
      }
    }
  }

  // check if any cubes are at the baseline
  function checkBaseline() {
    var isBottom = false;
    for (var i = 0; i < shape.length; i++) {
      if(shape[i].row === 39) {
        isBottom = true;
        return isBottom;
      }
    }
  }

  // for collison, check from bottom up if any cubes beneath are occupied
  function checkBottomCollision() {
    var isBottomCollided = false;
    for (var i = shape.length-1; i >= 0; i--) {
      if(gameGrid[(shape[i].row) + 1][shape[i].col] === 1) {
        gameGrid[shape[i].row] = gameGrid[shape[i].row]
        isBottomCollided = true;
        return isBottomCollided;
      }
    }
  }

  function checkRightCollision() {
    var isRightCollided = false;
    for (var i = shape.length-1; i >= 0; i--) {
      if(gameGrid[shape[i].row][(shape[i].col) + 1] === 1) {
        isRightCollided = true;
        return isRightCollided;
      }
    }
  }

  function checkLeftCollision() {
    var isLeftCollided = false;
    for (var i = shape.length-1; i >= 0; i--) {
      if(gameGrid[shape[i].row][(shape[i].col) - 1] === 1) {
        isLeftCollided = true;
        return isLeftCollided;
      }
    }
  }

  // check for game over. if grid below spawn point is occupied then game is over
  // this part is not completed yet
  function gameStatus() {
    var isStatus = false;
    for (var i = 0; i < width - 1; i++) {
      if (gameGrid[4][i] !== 0) {
        isStatus = true;
        return isStatus;
      }
    }
  }

  // setting next grid to equal 1
  function updateGrid() {
    for (var i = 0; i < shape.length; i++) {
      gameGrid[shape[i].row][shape[i].col] = 0;
      gameGrid[(shape[i].row) + 1][shape[i].col] = 1;
      // console.log("grid updated");
    }
  }

  document.addEventListener("keydown", direction);

  // keypad arrows
  function direction(event) {
    // right arrow
    if (event.keyCode === 39) {
    	var isRight = false;
      console.log(shape, "MY SHAPE");
    	for (var i = 0; i < shape.length; i++) {
        // checks for right wall
        // console.log(gameGrid[shape[i].row][(shape[i].col)]);
        // console.log(gameGrid[shape[i].row]); // PROBLEM IS HERE
    		if(shape[i].col === width - 1) {
          // shape[i].col = shape[i].col;
    			isRight = true;
          // console.log(isRight, "sasdbasjdbahsbdkjhsbkdhjbaksg");
          // console.log(shape[i], i);
          // break;
    		}
        // checks if block's right is occupied
        else if (checkRightCollision()) {
            shape[i].col = shape[i].col;
            // break;
    	 	}
    	 	else {
            clearCanvas();
            console.log("canvas cleared on right");
            for (var i = 0; i < shape.length; i++) {
              gameGrid[shape[i].row][shape[i].col] = 0;
              shape[i].col++;
              console.log(gameGrid[shape[i].row])
            }
            drawShape();
    		    // console.log("right arrow pressed");
    		}
        if(isRight) { // THIS WAS SHIFTED INTO THE FOR LOOP
          for (var i = 0; i < shape.length; i++) {
            shape[i].col = shape[i].col;
  		    }
        }
      }
    }

    // left arrow
    else if (event.keyCode === 37) {
    	var isLeft = false;
    	for (var i = 0; i < shape.length; i++) {
    		if (shape[i].col === 0) {
    			isLeft = true;
    		}
    		// checks for col on block's left
    		else if (checkLeftCollision()) {
          shape[i].col = shape[i].col;
    		}
    		else {
          clearCanvas();
          for (var i = 0; i < shape.length; i++) {
            gameGrid[shape[i].row][shape[i].col] = 0;
            shape[i].col--;
          }
          drawShape();
    		}
    	}
    	if(isLeft) {
    		for (var i = 0; i < shape.length; i++) {
    			shape[i].col = shape[i].col;
    		}
    	}
    }

    // down arrow
    else if (event.keyCode === 40) {
    	var isDown = false;
    	for (var i = 0; i < shape.length; i++) {
    			if (shape[i].row === (height - 1)) {
    				isDown = true;
    		}
    		// checks for block below if block not at row 39
    		else if (gameGrid[(shape[i].row) + 1][shape[i].col] !== 0) {
    			checkBottomCollision();
          // for (var i = shape.length-1; i >= 0; i--) {
          //   gameGrid[shape[i].row] = gameGrid[shape[i].row]
          // }
    		}
    		else {
          clearCanvas();
          for (var i = 0; i < shape.length; i++) {
            gameGrid[shape[i].row][shape[i].col] = 0;
          }
          shape[0].row++;
          shape[1].row++;
          shape[2].row++;
          shape[3].row++;
    			drawShape();
    		}
    	}
    	if(isDown) {
    		for (var i = 0; i < shape.length; i++) {
    			shape[i].col = shape[i].col;
    		}
    	}
    }
    // spacebar to start timer
    else if (event.keyCode === 32) {
      initiateTimer();
    }
  }

  // to identify which array row needs to be cleared
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
        // console.log("values in row " + i + " are all greater than 0");
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
