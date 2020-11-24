function drawBoard() {
  for (var y = 0; y < ROWS; y++) {
    for (var x = 0; x < COLS; x++) {
      board[x][y].draw()
    }
  }
  
  noFill()
  stroke(0)
  rect(0, 0, BW, BH)
}

function onBoard(x, y) {
  return x >= 0 && y >= 0 && x < COLS && y < ROWS
} 

function piece(turn) {
  if (turn == PLAYER) {
    return PLAYER_PIECE
  }
  return AI_PIECE
}

function switchTurn() {
  if (turn == PLAYER) {
    turn = AI
  } else {
    turn = PLAYER
  }
}

function mousePos(cell=true) {
  var pos = createVector(mouseX - xoff, mouseY - yoff)
  if (cell) {
    pos.x = floor(pos.x / SIZE)
    pos.y = floor(pos.y / SIZE)
  }
  return pos
}

function drawText() { 
  image(title, width/2-title.width/2, 0)
  
  fill(0)
  stroke(0)
  textAlign(CENTER, CENTER)
  textFont('Futura')
  textSize(50)
  text("Score: " + str(playerScore) + " - " + str(computerScore), width/2, (height + yoff + BH)/2)
}

function placePiece(col, swap=true) {
  for (var i = ROWS - 1; i >= 0; i--) {
    if (board[col][i].piece == NO_PIECE) {
      board[col][i].piece = piece(turn)
      if (swap) {
        switchTurn()
      }
      break
    }
  }
}

function calculateOffset() {
  xoff = width/2 - BW/2
  yoff = height/2 - BH/2
}
