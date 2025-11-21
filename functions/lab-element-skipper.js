function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
