class Cell {
  constructor(x, y, piece) {
    this.pos = createVector(x, y)
    this.piece = piece
  }
  
  draw() {
    fill(BACKGROUND)
    stroke(0, 40)
    square(this.pos.x * SIZE, this.pos.y * SIZE, SIZE)
    
    fill(this.piece)
    stroke(0, 150)
    circle((this.pos.x + 0.5) * SIZE, (this.pos.y + 0.5) * SIZE, SIZE - SPACE)
  }
}
