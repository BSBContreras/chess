import locationToCoords from '../../utils/locationToCoords.js';
import coordsToLocation from '../../utils/coordsToLocation.js';

export default function straightMovements(from, board) {
  const [ x, y ] = coordsToLocation(from);
  const movementList = [];
  const piece = board[from];

  // Up movements
  for(let i = y - 1; i >= 0; i--) {
    const coord = locationToCoords(x, i);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;
  }

  // Down movements
  for(let i = y + 1; i < 8; i++) {
    const coord = locationToCoords(x, i);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;
  }

  // Left movements
  for(let i = x - 1; i >= 0; i--) {
    const coord = locationToCoords(i, y);
    
    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;
  }

  // Right movements
  for(let i = x + 1; i < 8; i++) {
    const coord = locationToCoords(i, y);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;
  }

  return movementList;
}