import createPlayground from '../playground.js';
import Knight from '../pieces/Knight.js';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function KnightsTour() {

  const observers = [];
  const playground = createPlayground();
  playground.subscribe(notifyAll);

  const main = {
    board: {}
  }

  function subscribe(observerFunction) {
    observers.push(observerFunction);
  }

  function notifyAll(command) {
    for (const observerFunction of observers) {
        observerFunction(command);
    }
  }

  function getMovementList(board, coords) {
    return board[coords].getMovementList(coords, board);
  }

  async function getLastKnight(board, coords) {

    // console.log(coords);

    if(isComplete()) {
      return coords;
    }

    await sleep(500);

    playground.addPiece(coords, Knight('black'));

    const movements = getMovementList(board, coords);
    
    for(let i = 0; i < movements.length; i++) {
      const lastKnight = await getLastKnight(board, movements[i])

      if(lastKnight) {
        return [...lastKnight, coords];
      } else {
        playground.removePiece(movements[i]);
        await sleep(500);
      }
    }
  }

  function isComplete() {
    let i = 0;

    for(const coords in main.board) {
      if(main.board[coords]) {
        i++;
      }
    }

    return i === 64;
  }

  async function start(coords) {  
  
    main.board = playground.getState().board;

    const knight = await getLastKnight(main.board, coords);

    console.log(knight);

    notifyAll({
      type: 'start-game'
    })
  }

  function getState () {
    return {...main};
  }

  return {
    start,
    subscribe,
    getState
  };
} 
