function sumFibs(n) {
  let a = 0;
  let b = 1;
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  for (let i = 2; i <= n; i++) {
    if (a%2 !== 0 && b%2 !== 0) {
      let next = a + b;
      a = b;
      b = next;
    }
  }
  return b;
}

console.log(sumFibs(4));
