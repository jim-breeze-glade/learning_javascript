function pyramid(char, rows, bool) {
  let result = '';
  
  if (bool) {
    // Inverted pyramid: starts wide, gets narrow
    for (let i = 0; i < rows; i++) {
      result += '\n' + ' '.repeat(i) + char.repeat(rows * 2 - 1 - i * 2);
    }
  } else {
    // Normal pyramid: starts narrow, gets wide
    for (let i = 0; i < rows; i++) {
      result += '\n' + ' '.repeat(rows - 1 - i) + char.repeat(i * 2 + 1);
    }
  }
  
  return result + '\n';
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));

/*
1. You should have a function named pyramid.
2. Your pyramid function should have three parameters.
3. pyramid("o", 4, false) should return "\n   o\n  ooo\n ooooo\nooooooo\n".
4. pyramid("p", 5, true) should return "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n".
 */
