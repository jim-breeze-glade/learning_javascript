function pyramid(char, rows, bool) {
  let pyramid = '\n';
  let space = ' ';
  let falseSpaces = rows;
  
  if (bool) {
    for (let i = 1; i <= rows; i++) {
      pyramid = pyramid + '\n' + space.repeat(i - 1) + char.repeat(rows*2 - i*2 + 1);
    }
    return pyramid;
  } else {
    for (let j = 1; j <= rows*2; j += 2) {
      pyramid = pyramid + '\n' + space.repeat(falseSpaces - 1) + char.repeat(j);
      falseSpaces--;
    }
    return pyramid;
  }
}
console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));

/*
1. You should have a function named pyramid.
2. Your pyramid function should have three parameters.
3. pyramid("o", 4, false) should return "\n   o\n  ooo\n ooooo\nooooooo\n".
4. pyramid("p", 5, true) should return "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n".
 */
