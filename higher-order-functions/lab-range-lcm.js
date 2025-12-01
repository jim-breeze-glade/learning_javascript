function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let fullArray = [];
  const a = arr[0];
  const b = arr[1];

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
  }

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArray.push(i);
  }
  return fullArray.reduce((acc, curr) => lcm(acc, curr));
}

console.log(smallestCommons([5, 1]));
