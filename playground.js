export default function createGame() {
  const state = {
    screen: {
      width: 800,
      height: 800
    }
  };

  const main = {
    board: {},
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
    notifyAll({
      type: 'start-game'
    });
  }

  function addPiece(position, piece) {
    main.board[position] = piece;

    notifyAll({
      type: 'add-piece',
      position
    });
  }

  function removePiece(position) {
    const piece = main.board[position];
    delete  main.board[position];

    notifyAll({
      type: 'remove-piece',
      position
    });

    return piece;
  }

  function getState() {
    return {...main};
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

    if(!piece.canMove(from, to, main.board)) {
      throw new Error('This piece cannot move to this position');
    }

    main.board[to] = piece;
    delete main.board[from];

    notifyAll({
      type: 'move-piece',
      from, to
    });
  }

  return {
    state,
    move,
    start,
    addPiece,
    removePiece,
    getState,
    subscribe,
  }
}
