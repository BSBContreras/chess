import locationToCoords from '../../utils/locationToCoords.js';
import coordsToLocation from '../../utils/coordsToLocation.js';

export default function diagonalMovements(from, board) {
  
  const [ x, y ] = coordsToLocation(from);
  const movementList = [];
  const piece = board[from];
  let i, j;

  // Diagonal Left Up movements
  i = x - 1;
  j = y - 1;
  while(i >= 0 && j >= 0) {
    const coord = locationToCoords(i, j);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;

    i--;
    j--;
  }

  // Diagonal Right Up movements
  i = x + 1;
  j = y - 1;
  while(i < 8 && j >= 0) {
    const coord = locationToCoords(i, j);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;

    i++;
    j--;
  }

  // Diagonal Left Down movements
  i = x - 1;
  j = y + 1;
  while(i >= 0 && j < 8) {
    const coord = locationToCoords(i, j);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;

    i--;
    j++;
  }

  // Diagonal Right Down movements
  i = x + 1;
  j = y + 1;
  while(i < 8 && j < 8) {
    const coord = locationToCoords(i, j);

    if(board[coord] && (board[coord].side === piece.side)) break;

    movementList.push(coord);
    
    if(board[coord]) break;

    i++;
    j++;
  }

  return movementList;
}