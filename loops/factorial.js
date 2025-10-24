// google result
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n* factorial(n - 1);
    }
}

console.log(factorial(6));

// freeCodeCamp lab solution
const num = 5;

function factorialCalculator(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    result = num * factorialCalculator(num - 1);
    return result;
  }
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
