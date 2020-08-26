import Pawn from './Pawn.js';
import King from './King.js';
import Rook from './Rook.js';
import Queen from './Queen.js';
import Bishop from './Bishop.js';
import Knight from './Knight.js';

export default function mountBoard() {
  return {
    'a2': Pawn('white'),
    'b2': Pawn('white'),
    'c2': Pawn('white'),
    'd2': Pawn('white'),
    'e2': Pawn('white'),
    'f2': Pawn('white'),
    'g2': Pawn('white'),
    'h2': Pawn('white'),
    'a1': Rook('white'),
    'b1': Knight('white'),
    'c1': Bishop('white'),
    'e1': King('white'),
    'd1': Queen('white'),
    'f1': Bishop('white'),
    'g1': Knight('white'),
    'h1': Rook('white'),

    'a7': Pawn('black'),
    'b7': Pawn('black'),
    'c7': Pawn('black'),
    'd7': Pawn('black'),
    'e7': Pawn('black'),
    'f7': Pawn('black'),
    'g7': Pawn('black'),
    'h7': Pawn('black'),
    'a8': Rook('black'),
    'b8': Knight('black'),
    'c8': Bishop('black'),
    'd8': Queen('black'),
    'e8': King('black'),
    'f8': Bishop('black'),
    'g8': Knight('black'),
    'h8': Rook('black'),
  }
}