// forEach can take 3 args: the current element, its index and the array forEach
// was called on. In that order.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, idx, arry) => {
  console.log(`Element ${number} is at index ${idx} in array ${arry}`);
});
