

  let chessboard = ' ';
  let size = 9;
  
  for (let i = 0; i < (size * size); i++) {
  
  let currentNum = i;
  if (!(currentNum % 2) && currentNum % size) {
    chessboard = chessboard + ' ';
  } else if (currentNum % 2 && currentNum % size) {
    chessboard = chessboard + '#';
  } else if (!(currentNum % size)) {
    chessboard = chessboard + '\n';
  }
                                 }

console.log(chessboard);