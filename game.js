import mountBoard from './pieces/index.js';

export default function createGame() {
  const state = {
    screen: {
      width: 800,
      height: 800
    }
  };

  const main = {
    board: {},
    turn: 'white',
  }

  const observers = [];

  function subscribe(observerFunction) {
    observers.push(observerFunction);
  }

  function notifyAll(command) {
    for (const observerFunction of observers) {
        observerFunction(command);
    }
  }

  function start() {
    main.board = mountBoard();

    notifyAll({
      type: 'start-game'
    });
  }

  function getState() {
    return {...main}
  }

  function togglePlayer() {
    if(main.turn === 'white') {
      main.turn = 'black';
    } else {
      main.turn = 'white';
    }

    notifyAll({
      type: 'toggle-player',
      turn: main.turn
    })
  }

  function move(command) {
    const { from, to } = command;

    const piece = main.board[from];

    if(from === to) {
      throw new Error('Same position');
    }

    if(!piece) {
      throw new Error('This position do not have any piece');
    }

    if(piece.side !== main.turn) {
      throw new Error('Is not your turn');
    }

    if(!piece.canMove(from, to, main.board)) {
      throw new Error('This piece cannot move to this position');
    }

    main.board[to] = piece;
    delete main.board[from];

    notifyAll({
      type: 'move-piece',
      from, to
    });

    togglePlayer();
  }

  return {
    state,
    move,
    start,
    getState,
    subscribe,
  }
}
