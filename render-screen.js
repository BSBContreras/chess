import coordsToLocation from './utils/coordsToLocation.js';

export default function renderScreen(screen, game) {
  const context = screen.getContext('2d')
  context.clearRect(0, 0, 10, 10)

  const sizeW = screen.width / 8;
  const sizeH = screen.height / 8;

  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if(j % 2 == 0) {
        if(i % 2 == 0) {
          context.fillStyle = '#FFCE9E';
        } else {
          context.fillStyle = '#D18B47';
        }
      } else {
        if(i % 2 == 1) {
          context.fillStyle = '#FFCE9E';
        } else {
          context.fillStyle = '#D18B47';
        }
      }
      context.fillRect(j * sizeW, i * sizeH, sizeW, sizeH);
    }
  }

  for(const pieceCoord in game.state.board) {
    const piece = game.state.board[pieceCoord];
    const [ x, y ] = coordsToLocation(pieceCoord);
    const { path, color } = piece.style;
    
    const img = new Image();
    img.src = `assets/${path}`

    img.onload = () => {
      // context.fillStyle = color;
      // context.fillRect(x * sizeW + 20, y * sizeH + 20, 60, 60);
      context.drawImage(img, x * sizeW + 20, y * sizeH + 20, 60, 60);
    }
  }
}
