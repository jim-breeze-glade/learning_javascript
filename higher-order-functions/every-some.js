const num1 = [2, 4, 6, 8, 10];
const num2 = [1, 3, 5, 7, 8, 9];

const hasAllEven1 = num1.every((num) => num % 2 === 0);
const hasAllEven2 = num2.every((num) => num % 2 === 0);
const hasSomeEven1 = num1.some((num) => num % 2 === 0);
const hasSomeEven2 = num2.some((num) => num % 2 === 0);

console.log(`All even ${num1}: ${hasAllEven1}`);
console.log(`All even ${num2}: ${hasAllEven2}`);
console.log(`Some even ${num1}: ${hasSomeEven1}`);
console.log(`Some even ${num2}: ${hasSomeEven2}`);

