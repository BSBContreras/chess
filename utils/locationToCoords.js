export default function coordsToLocation(x, y) {
  const coordX = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
  }

  const coordY = {
    7: '1',
    6: '2',
    5: '3',
    4: '4',
    3: '5',
    2: '6',
    1: '7',
    0: '8',
  }

  if(!coordX[x]) {
    return false;
  }

  if(!coordY[y]) {
    return false;
  }

  return coordX[x] + coordY[y];
}