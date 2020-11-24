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

function calculateOffset() {
  xoff = width/2 - BW/2
  yoff = height/2 - BH/2
}
