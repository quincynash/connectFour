class Cell {
  constructor(x, y, piece) {
    this.pos = createVector(x, y)
    this.piece = piece
  }
  
  draw() {
    if (dropping && orig.x == this.pos.x && this.piece == NO_PIECE) {
      fill(BACKGROUND)
      noStroke()
      beginShape()
      vertex(this.pos.x * SIZE, (this.pos.y + 0.5) * SIZE)
      vertex(this.pos.x * SIZE, (this.pos.y + 1) * SIZE)
      vertex((this.pos.x + 1) * SIZE, (this.pos.y + 1) * SIZE)
      vertex((this.pos.x + 1) * SIZE, (this.pos.y + 0.5) * SIZE)
      for (var a1 = 90; a1 >= -90; a1-=18) {
        var point1 = cartesian((this.pos.x + 0.5) * SIZE, (this.pos.y + 0.5) * SIZE, (SIZE - SPACE) / 2, radians(a1))
        vertex(point1.x, point1.y)
      }
      endShape(CLOSE)
      
      beginShape()
      vertex(this.pos.x * SIZE, (this.pos.y + 0.5) * SIZE)
      vertex(this.pos.x * SIZE, this.pos.y * SIZE)
      vertex((this.pos.x + 1) * SIZE, this.pos.y * SIZE)
      vertex((this.pos.x + 1) * SIZE, (this.pos.y + 0.5) * SIZE)
      for (var a2 = 90; a2 <= 270; a2+=18) {
        var point2 = cartesian((this.pos.x + 0.5) * SIZE, (this.pos.y + 0.5) * SIZE, (SIZE - SPACE) / 2, radians(a2))
        vertex(point2.x, point2.y)
      }
      endShape(CLOSE)
      
      noFill()
      stroke(0, 40)
      square(this.pos.x * SIZE, this.pos.y * SIZE, SIZE)
      
      stroke(0, 150)
      circle((this.pos.x + 0.5) * SIZE, (this.pos.y + 0.5) * SIZE, SIZE - SPACE)
    } else {
      fill(BACKGROUND)
      stroke(0, 40)
      square(this.pos.x * SIZE, this.pos.y * SIZE, SIZE)
      
      fill(this.piece)
      stroke(0, 150)
      circle((this.pos.x + 0.5) * SIZE, (this.pos.y + 0.5) * SIZE, SIZE - SPACE)
    }
  }
}
