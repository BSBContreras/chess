import diagonalMovements from './movements/diagonal-movements.js';

export default function Bishop(side) {

  const styles = {
    'white': {
      path: 'white-bishop.svg',
      color: 'black'
    },
    'black': {
      path: 'black-bishop.svg',
      color: 'white'
    }
  }

  const style = styles[side];

  function getMovementList(from, board) {
    const diagonal = diagonalMovements(from, board);

    return diagonal;
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