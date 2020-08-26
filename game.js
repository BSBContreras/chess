import mountBoard from './pieces/index.js';

export default function createGame() {
  const state = {
    board: {},
    turn: 'white',
    screen: {
      width: 800,
      height: 800
    }
  };

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
    state.board = mountBoard();

    notifyAll({
      type: 'start-game'
    });
  }

  function togglePlayer() {
    if(state.turn === 'white') {
      state.turn = 'black';
    } else {
      state.turn = 'white';
    }

    notifyAll({
      type: 'toggle-player'
    })
  }

  function move(command) {
    const { from, to } = command;

    const piece = state.board[from];

    if(piece.side !== state.turn) {
      throw new Error('Is not your turn');
    }

    if(from === to) {
      throw new Error('Same position');
    }

    if(!piece) {
      throw new Error('This position do not have any piece');
    }

    if(!piece.canMove(from, to, state.board)) {
      throw new Error('This piece cannot move to this position');
    }

    if(state.board[to]) {
      notifyAll({
        type: 'capture-piece',
        captured: state.board[to],
        by: piece
      });
    }

    state.board[to] = piece;
    delete state.board[from];

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
    subscribe,
  }
}