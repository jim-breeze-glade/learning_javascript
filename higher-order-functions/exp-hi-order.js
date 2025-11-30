function arrOperationFunc(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function addExclamation(str) {
  str = str.toUpperCase();
  return str + '!';
}

function yell(str) {
  return str.toUpperCase();
}

const sentence = "Wow that is amazing";
let words = sentence.split(' ');
let exclaimed = arrOperationFunc(words, addExclamation).join(' ');
let yelled = arrOperationFunc(words, yell).join(' ');
console.log(sentence);
console.log(exclaimed);
console.log(yelled);
