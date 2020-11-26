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

function startDrop(col, row) {
  dropping = true
  orig = createVector(col, row)
  pos = createVector((col + 0.5) * SIZE, SIZE/2)
  vel = 0
  end = createVector((col + 0.5) * SIZE, (row + 0.5) * SIZE)
  bounces = 0
}

function animateDrop() {
  fill(piece(turn))
    stroke(0)
    circle(pos.x, pos.y, SIZE - SPACE)
    
    vel += 0.25
    pos.y += vel
    
    if (pos.y > end.y) {
      pos.y = end.y
      vel *= -0.3
      bounces += 1
    }
    
    if (bounces > 3) {
      dropping = false
      placePiece(orig.x)
    }
}

function emptyRow(col) {
  for (var row = ROWS - 1; row >= 0; row--) {
    if (board[col][row].piece == NO_PIECE) {
      return row
    }
  }
  return -1
}

function placePiece(col, swap=true) {
  board[col][emptyRow(col)].piece = piece(turn)
  if (swap) {
    switchTurn()
  }
}

function calculateOffset() {
  xoff = width/2 - BW/2
  yoff = height/2 - BH/2
}
