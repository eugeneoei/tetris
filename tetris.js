document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded');

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = 20;
  var height = 40;
  var interval = setInterval(gameStart, 100);
  // var gameGrid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  //

  var gameGrid = []
  for (var i = 0; i < 40; i++) {
    var temp = [];
    for (var j = 0; j < 20; j++) {
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
    cubeOne.col = 9;
    cubeTwo.row = 1;
    cubeTwo.col = 9;
    cubeThree.row = 2;
    cubeThree.col = 9;
    cubeFour.row = 2;
    cubeFour.col = 10;

  }

  function newJ() {
    cubeOne.row = 0;
    cubeOne.col = 10;
    cubeTwo.row = 1;
    cubeTwo.col = 10;
    cubeThree.row = 2;
    cubeThree.col = 10;
    cubeFour.row = 2;
    cubeFour.col = 9;
  }

  function newT() {
    cubeOne.row = 0;
    cubeOne.col = 8;
    cubeTwo.row = 0;
    cubeTwo.col = 9;
    cubeThree.row = 0;
    cubeThree.col = 10;
    cubeFour.row = 1;
    cubeFour.col = 9;
  }

  function newS() {
    cubeOne.row = 0;
    cubeOne.col = 9;
    cubeTwo.row = 0;
    cubeTwo.col = 10;
    cubeThree.row = 1;
    cubeThree.col = 9;
    cubeFour.row = 1;
    cubeFour.col = 8;
  }

  function newZ() {
    cubeOne.row = 0;
    cubeOne.col = 8;
    cubeTwo.row = 0;
    cubeTwo.col = 9;
    cubeThree.row = 1;
    cubeThree.col = 9;
    cubeFour.row = 1;
    cubeFour.col = 10;
  }

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

  // game loop
  function gameStart() {
    checkPosition();
    clearCanvas();
    colorGrid();
  }

  function drawShape() {
      for (var i = 0; i < shape.length; i++) {
        gameGrid[shape[i].row][shape[i].col] = 2;
        console.log("new Block");
      }
  }

  function setFinalLocation() {
    for (var i = 0; i < shape.length; i++) {
      gameGrid[shape[i].row][shape[i].col] = 1;
    }
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width*10,height*10);
    console.log("canvas cleared");
  }

  function checkPosition() {
    // this part is still WIP
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
      drawShape();
      setFinalLocation();
      newShape();
      interval = setInterval(gameStart, 100);
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
  function checkCollision() {
    var isCollided = false;
    for (var i = shape.length-1; i >= 0; i--) {
      if(gameGrid[(shape[i].row) + 1][shape[i].col] === 1) {
        isCollided = true;
        return isCollided;
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
      console.log("grid updated");
    }
  }

  document.addEventListener("keydown", direction);

  // keypad arrows
  function direction(event) {
    // right arrow
    if (event.keyCode === 39) {
    	var isRight = false;
    	for (var i = 0; i < shape.length; i++) {
    		if(shape[i].col === (width - 1)) {
    			isRight = true;
    		}
    		else if (gameGrid[shape[i].row][(shape[i].col) + 1] !== 0) {
    		    // checkCollision();
    	 	}
    	 	else {
            clearCanvas();
            console.log("canvas cleared on right");
            for (var i = 0; i < shape.length; i++) {
              gameGrid[shape[i].row][shape[i].col] = 0;
            }
            shape[0].col++;
            shape[1].col++;
            shape[2].col++;
            shape[3].col++;
            drawShape();
    		    console.log("right arrow pressed");
    		}
    	}
      if(isRight) {
        for (var i = 0; i < shape.length; i++) {
          shape[i].col = shape[i].col;
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
    		else if (gameGrid[shape[i].row][(shape[i].col) - 1] !== 0) {
    			// checkCollision();
    		}
    		else {
          clearCanvas();
          for (var i = 0; i < shape.length; i++) {
            gameGrid[shape[i].row][shape[i].col] = 0;
          };
          shape[0].col--;
          shape[1].col--;
          shape[2].col--;
          shape[3].col--;
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
    		// checks for block below if clock not at row 19
    		else if (gameGrid[(shape[i].row) + 1][shape[i].col] !== 0) {
    			checkCollision();
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

  // design
  // ctx.beginPath();
  // ctx.moveTo(0,0);
  // ctx.lineTo(0,200);
  // // ctx.lineTo(200,100);
  // // ctx.lineTo(70,100);
  // ctx.strokeStyle="red";
  // ctx.stroke();

}); // bracket for dom content loaded
