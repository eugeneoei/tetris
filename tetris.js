document.addEventListener('DOMContentLoaded', function () {
  // console.log('DOM loaded');

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = 20;
  var height = 40;
  var interval;
  var gameGrid = [];
  var currentShape;

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
      currentShape = "O";
      newO();
    }
    else if (num <= .28) {
      currentShape = "I";
      newI();
    }
    else if (num <= .42) {
      currentShape = "L";
      newL();
    }
    else if (num <= .56) {
      currentShape = "J";
      newJ();
    }
    else if (num <= .7) {
      currentShape = "T";
      newT();
    }
    else if (num <= .84) {
      currentShape = "S";
      newS();
    }
    else if (num <= 1) {
      currentShape = "Z";
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
    currentShape = "posOneI";
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
    currentShape = "posOneL";
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
    currentShape = "posOneJ";
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
    currentShape = "posOneT";
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
    currentShape = "posOneS";
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
    currentShape = "posOneZ";
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

  function checkRightWall() {
    var isRight = false;
    console.log(shape, "MY SHAPE");
    for (var i = 0; i < shape.length; i++) {
      if(shape[i].col === (width - 1)) {
        isRight = true;
        return isRight;
      }
    }
  }

  function checkLeftWall() {
    var isLeft = false;
    for (var i = 0; i < shape.length; i++) {
      if(shape[i].col === 0) {
        isLeft = true;
        return isLeft;
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

  function rotate() {
    clearCanvas();
    for (var i = 0; i < shape.length; i++) {
      gameGrid[shape[i].row][shape[i].col] = 0;
    }
  }

  document.addEventListener("keydown", direction);

  // keypad arrows
  function direction(event) {
    // right arrow
    if (event.keyCode === 39) {
      if(checkRightWall()) { // THIS WAS SHIFTED INTO THE FOR LOOP
        for (var i = 0; i < shape.length; i++) {
          shape[i].col = shape[i].col;
        }
      }
      // checks if block's right is occupied
      else if (checkRightCollision()) {
          shape[i].col = shape[i].col;
  	 	}
      // otherwise move block one col right
  	 	else {
          clearCanvas();
          for (var i = 0; i < shape.length; i++) {
            gameGrid[shape[i].row][shape[i].col] = 0;
            shape[i].col++;
          }
          drawShape();
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
        else if (checkBottomCollision()) {
          gameGrid[shape[i].row] = gameGrid[shape[i].row];
    		}
    		else {
          clearCanvas();
          for (var i = 0; i < shape.length; i++) {
            gameGrid[shape[i].row][shape[i].col] = 0;
            shape[i].row++;
          }
    			drawShape();
    		}
    	}
    	if(isDown) {
    		for (var i = 0; i < shape.length; i++) {
    			shape[i].col = shape[i].col;
    		}
    	}
    }
    else if (event.keyCode === 38) {
      // cubeThree is the pivot for shape I
      // pivot's position does not change
      // have not added rotation restriction
      if (currentShape === "posOneI") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col + 2;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col - 1;
        drawShape();
        currentShape = "posTwoI";
      }
      else if (currentShape === "posTwoI") {
        rotate();
        cubeOne.row = cubeThree.row - 2;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row + 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posOneI";
      }
      // cubeTwo is pivot for shape T
      else if (currentShape === "posOneT") {
        rotate();
        cubeOne.row = cubeTwo.row - 1;
        cubeOne.col = cubeTwo.col;

        cubeThree.row = cubeTwo.row + 1;
        cubeThree.col = cubeTwo.col;

        cubeFour.row = cubeTwo.row;
        cubeFour.col = cubeTwo.col - 1;
        drawShape();
        currentShape = "posTwoT";
      }
      else if (currentShape === "posTwoT") {
        rotate();
        cubeOne.row = cubeTwo.row;
        cubeOne.col = cubeTwo.col + 1;

        cubeThree.row = cubeTwo.row;
        cubeThree.col = cubeTwo.col - 1;

        cubeFour.row = cubeTwo.row - 1;
        cubeFour.col = cubeTwo.col;
        drawShape();
        currentShape = "posThreeT";
      }
      else if (currentShape === "posThreeT") {
        rotate();
        cubeOne.row = cubeTwo.row + 1;
        cubeOne.col = cubeTwo.col;

        cubeThree.row = cubeTwo.row - 1;
        cubeThree.col = cubeTwo.col;

        cubeFour.row = cubeTwo.row;
        cubeFour.col = cubeTwo.col + 1;
        drawShape();
        currentShape = "posFourT";
      }
      else if (currentShape === "posFourT") {
        rotate();
        cubeOne.row = cubeTwo.row;
        cubeOne.col = cubeTwo.col - 1;

        cubeThree.row = cubeTwo.row;
        cubeThree.col = cubeTwo.col + 1;

        cubeFour.row = cubeTwo.row + 1;
        cubeFour.col = cubeTwo.col;
        drawShape();
        currentShape = "posOneT";
      }
      // cubeThree is pivot for shape L
      else if (currentShape === "posOneL") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col + 2;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row + 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posTwoL";
      }
      else if (currentShape === "posTwoL") {
        rotate();
        cubeOne.row = cubeThree.row + 2;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row + 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col - 1;
        drawShape();
        currentShape = "posThreeL";
      }
      else if (currentShape === "posThreeL") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col - 2;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col - 1;

        cubeFour.row = cubeThree.row - 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posFourL";
      }
      else if (currentShape === "posFourL") {
        rotate();
        cubeOne.row = cubeThree.row - 2;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col  + 1;
        drawShape();
        currentShape = "posOneL";
      }
      // cubeThree is pivot for shape J
      else if (currentShape === "posOneJ") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col + 2;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row - 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posTwoJ";
      }
      else if (currentShape === "posTwoJ") {
        rotate();
        cubeOne.row = cubeThree.row - 2;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col + 1;
        drawShape();
        currentShape = "posThreeJ";
      }
      else if (currentShape === "posThreeJ") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col - 2;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col - 1;

        cubeFour.row = cubeThree.row + 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posFourJ";
      }
      else if (currentShape === "posFourJ") {
        rotate();
        cubeOne.row = cubeThree.row - 2;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col - 1;
        drawShape();
        currentShape = "posOneJ";
      }
      // cubeThree is pivot for shape S
      else if (currentShape === "posOneS") {
        rotate();
        cubeOne.row = cubeThree.row;
        cubeOne.col = cubeThree.col + 1;

        cubeTwo.row = cubeThree.row + 1;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row - 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posTwoS";
      }
      else if (currentShape === "posTwoS") {
        rotate();
        cubeOne.row = cubeThree.row - 1;
        cubeOne.col = cubeThree.col;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col - 1;
        drawShape();
        currentShape = "posOneS";
      }
      // cubeThree is pivot for shape Z
      else if (currentShape === "posOneZ") {
        rotate();
        cubeOne.row = cubeThree.row - 1;
        cubeOne.col = cubeThree.col + 1;

        cubeTwo.row = cubeThree.row;
        cubeTwo.col = cubeThree.col + 1;

        cubeFour.row = cubeThree.row + 1;
        cubeFour.col = cubeThree.col;
        drawShape();
        currentShape = "posTwoZ";
      }
      else if (currentShape === "posTwoZ") {
        rotate();
        cubeOne.row = cubeThree.row - 1;
        cubeOne.col = cubeThree.col - 1;

        cubeTwo.row = cubeThree.row - 1;
        cubeTwo.col = cubeThree.col;

        cubeFour.row = cubeThree.row;
        cubeFour.col = cubeThree.col + 1;
        drawShape();
        currentShape = "posOneZ";
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
