// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  location.reload();
};

const toggleRestartBtn = () => {
  // enable the restart btn
};

const win = () => {
  board.removeEventListener('click', handleClick);
  const winner = `Player ${currentPlayer} WINS!`;
  const endMess = document.querySelector('.js-end-message');
  endMess.innerText = winner;
   // activate the restart btn
};

const verifyWin = () => {
  if (COUNTER > 3) {
    // ROWS
    if (game[0] === game[1] && game[1] === game[2]) win();
    if (game[3] === game[4] && game[4] === game[5]) win();
    if (game[6] === game[7] && game[7] === game[8]) win();
    // COLUMNS
    if (game[0] === game[3] && game[3] === game[6]) win();
    if (game[1] === game[4] && game[4] === game[7]) win();
    if (game[2] === game[5] && game[5] === game[8]) win();
    // DIAGONALS
    if (game[0] === game[4] && game[4] === game[8]) win();
    if (game[2] === game[4] && game[4] === game[6]) win();
  }
};

const togglePlayer = () => {
  (COUNTER % 2 === 0) ? currentPlayer = '1' : currentPlayer = '2';
  if (currentPlayer === '1') {
    player1.classList.remove('active');
    player2.classList.add('active');
  } else {
    player2.classList.remove('active');
    player1.classList.add('active');
  }
};

const handleClick = (event) => {
  console.log(currentPlayer);

  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    COUNTER++;
    game[cellId] = icon;
    verifyWin();
    togglePlayer();
  }
};

board.addEventListener('click', handleClick);
