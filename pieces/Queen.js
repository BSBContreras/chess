import straightMovements from './movements/straight-movements.js';
import diagonalMovements from './movements/diagonal-movements.js';

export default function Queen(side) {

  const styles = {
    'white': {
      path: 'white-queen.svg',
      color: 'black'
    },
    'black': {
      path: 'black-queen.svg',
      color: 'white'
    }
  }

  const style = styles[side];

  function getMovementList(from, board) {
    const straight = straightMovements(from, board);

    const diagonal = diagonalMovements(from, board);

    return straight.concat(diagonal);
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