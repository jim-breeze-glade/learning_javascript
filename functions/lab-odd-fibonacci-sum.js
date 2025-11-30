function sumFibs(n) {
  let sum = 0;
  let prev = 0;
  let curr = 1;

  if (curr <= n && curr % 2 !== 0) {
    sum += curr;
  }

  while (true) {
    let next = prev + curr;

    if (next > n) break;

    if (next % 2 !== 0) {
      sum += next;
    }
    
    prev = curr;
    curr = next;
  }

  return sum;
} 

console.log(sumFibs(1000));
