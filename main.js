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
let turn = PLAYER;
let playerScore = 0;
let computerScore = 0;
let xoff, yoff, title;

function preload() {
  title = loadImage("Images/title.png")
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  calculateOffset()
}

function mousePressed() {
  var pos = mousePos()
  if (onBoard(pos.x, pos.y)) {
    placePiece(pos.x)
  }
}

function draw() {
  background(255)

  drawText()
  
  translate(xoff, yoff)
  
  drawBoard()
}
