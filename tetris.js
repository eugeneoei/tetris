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
  var col = 40; // x-axis
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

  var interval = setInterval(move, 500);

  // game loop
  function move() {
    checkPosition();
    clearCanvas();
    //draw();
    colorCanvas();
    // newBlock();
  }

  // function newBlock() {
  //   ctx.fillStyle = "red";
  //   ctx.fillRect(10,10,10,10);
  //   console.log("new block drawn");
  // }

  function updateGrid() {
    // setting next grid to equal 1
    gameGrid[row/10][col/10] = 0;
    gameGrid[row/10 + 1][col/10] = 1;


    console.log(gameGrid);
    console.log("grid updated");
  }

  function clearCanvas() {
    ctx.clearRect(0,0,width,height);
    console.log("canvas cleared");
  }

  function checkPosition() {
    if (checkBorder()) {
      clearInterval(interval);
      console.log("time stop");
      // newBlock();
    }
    else if (checkCollision()) {
      clearInterval(interval);
      console.log("time stop");
      // newBlock();
    } else {
      updateGrid();
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
    if (row > 180) {
      console.log('checkBorder returning true');
      return true;
    }
    else {
      console.log('checkBorder returning false');
      return false;
    }
  }


  // colorCanvas();
  // draw();
  // console.log(gameGrid);
}); // bracket for dom content loaded
