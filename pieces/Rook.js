import straightMovements from './movements/straight-movements.js';

export default function Rook(side) {

  const styles = {
    'white': {
      path: 'white-rook.svg',
      color: 'black'
    },
    'black': {
      path: 'black-rook.svg',
      color: 'white'
    }
  }

  const style = styles[side];

  function getMovementList(from, board) {
    const straight = straightMovements(from, board);

    return straight;
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