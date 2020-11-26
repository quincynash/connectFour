const COLS = 8;
const ROWS = 7;
const SIZE = 60;
const SPACE = 10;
const BW = COLS * SIZE;
const BH = ROWS * SIZE;
const PLAYER = 0;
const AI = 1;
const PLAYER_PIECE = [250, 250, 0];
const AI_PIECE = [255, 90, 90];
const NO_PIECE = [255, 255, 255];
const BACKGROUND = [80, 80, 255, 175]
let board = [];
let dropping = false;
let turn = 0;
let playerScore = 0;
let computerScore = 0;
let xoff, yoff, title, settings, pos, vel, end, orig;

function preload() {
  title = loadImage("Images/title.png")
  settings = loadImage("Images/settings.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (var x = 0; x < COLS; x++) {
    sub = []
    for (var y = 0; y < ROWS; y++) {
      sub.push(new Cell(x, y, NO_PIECE))
    }
    board.push(sub)
  }
  
  calculateOffset()
  //frameRate(5)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  calculateOffset()
}

function mousePressed() {
  if (!dropping) {
    var cell = mousePos()
    if (onBoard(cell.x, cell.y)) {
      var y = emptyRow(cell.x)
      if (y != -1) {
        startDrop(cell.x, y)
      }
    }
  }
  if (mouseX > width - 30 && mouseY < 30) {
    translate(-xoff, -yoff)
    fill(0)
    rect(0, 0, 100, 100)
    frameRate(1)
  }
}

function draw() {
  background(255)

  drawText()
  
  translate(xoff, yoff)
  
  if (dropping) {
    animateDrop()
  }
  
  drawBoard()
}
