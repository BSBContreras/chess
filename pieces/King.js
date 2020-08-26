import coordsToLocation from '../utils/coordsToLocation.js';
import locationToCoords from '../utils/locationToCoords.js';

export default function King(side) {

  const styles = {
    'white': {
      path: 'white-king.svg',
      color: 'black'
    },
    'black': {
      path: 'black-king.svg',
      color: 'white'
    }
  }

  const style = styles[side];

  function getMovementList(from, board) {
    const movementList = []

    const [ x, y ] = coordsToLocation(from);

    var coords;

    coords = locationToCoords(x + 1, y - 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x + 1, y);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x + 1, y + 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x, y + 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x - 1, y + 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x - 1, y);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x - 1, y - 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    coords = locationToCoords(x, y - 1);
    if(coords && (!board[coords] || board[coords].side !== side)) {
      movementList.push(coords);
    }

    return movementList;
  }

  function canMove(from, to, board) {
    const movementList = getMovementList(from, board);

    return movementList.includes(to);
  }

  return {
    canMove,
    style,
    side
  }
}