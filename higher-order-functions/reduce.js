const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0
);
const seeWhatHappens = numbers.reduce((a, b) => a + b, 6)

console.log(sum);
console.log(seeWhatHappens);
