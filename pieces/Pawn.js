import coordsToLocation from '../utils/coordsToLocation.js';
import locationToCoords from '../utils/locationToCoords.js';

export default function Pawn(side) {

  const styles = {
    'white': {
      path: 'white-pawn.svg',
      color: 'black'
    },
    'black': {
      path: 'black-pawn.svg',
      color: 'white'
    }
  }

  const style = styles[side];

  function blackMovements(from, board) {
    const [ x, y ] = coordsToLocation(from);

    const movementList = [];
    var coords;
    var piece;

    for(let i = y + 1; i <= y + (y === 1 ? 2 : 1) && i < 8; i++) {
      coords = locationToCoords(x, i);

      if(board[coords]) break;

      movementList.push(coords);
    }

    coords = locationToCoords(x - 1, y + 1);
    piece = board[coords];
    if(piece && piece.side !== side) {
      movementList.push(coords);
    }

    coords = locationToCoords(x + 1, y + 1);
    piece = board[coords];
    if(piece && piece.side !== side) {
      movementList.push(coords);
    }

    return movementList;
  }

  function whiteMovements(from, board) {
    const [ x, y ] = coordsToLocation(from);

    const movementList = [];
    var coords;
    var piece;

    for(let i = y - 1; i >= y - (y === 6 ? 2 : 1) && i >= 0; i--) {
      coords = locationToCoords(x, i);

      if(board[coords]) break;

      movementList.push(coords);
    }

    coords = locationToCoords(x - 1, y - 1);
    piece = board[coords];
    if(piece && piece.side !== side) {
      movementList.push(coords);
    }

    coords = locationToCoords(x + 1, y - 1);
    piece = board[coords];
    if(piece && piece.side !== side) {
      movementList.push(coords);
    }

    return movementList;
  }

  function getMovementList(from, board) {
    if(side === 'white') {
      return whiteMovements(from, board);
    } else {
      return blackMovements(from, board);
    }
  }

  function canMove(from, to, board) {
    const movementList = getMovementList(from, board);

    return movementList.includes(to);
  }

  return {
    getMovementList,
    canMove,
    style,
    side
  }
}