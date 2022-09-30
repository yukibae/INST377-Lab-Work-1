document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = (document.querySelector(".grid div"));
  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  const width = 10;

  // The Tetrominos
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 4;
  let currentRotation = 0;

  // randomly select a Tetromino and its first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation]

  // draw the first rotation in the first tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  }

  //undraw the Tetromino
  function undraw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')]
    })
  }

  //make the tetromino move down every secod
  timerID = setInterval(moveDown, 1000)

  //assign functions to keyCodes
  function control(e) {
    if(e.keyCode ===37){
      moveLeft()
    }else if (e.keyCode === 38)
  }
  document.addEventListener('keyup', control)

  //move down function
  function moveDown(){
    undraw()
    currentPosition+=width
    draw()
  }

  //freeze function
  function freeze(){
    if(current.some(index => squares[currentPosition + index+width].classList.contains('taken'))){
      //start a new tetromino falling
      random = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition=4
      draw()
  }
}
//move the tetromino left, unless iks at the edge or there is a bloackage
function moveLeft(){
  undraw()
const isAtLeftEdge = current.some(index => (currentPosition+index)%width ===0)
if(!isAtLeftEdge) currentPosition -=1
if(current.some(index => squares[currentPosition+ index].classList.contains('taken'))){
  currentPosition+=1
}
draw()
}

});