function whatIsInAName(arr, src) {
  
  let name = arr.filter(obj => !arr.includes(src));
  return name;
}

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
));
console.log([{ first: "Tybalt", last: "Capulet" }], 'returned');

console.log(whatIsInAName(
  [
    { "apple": 1 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2 }
  ], 
  { "apple": 1 }
));
console.log([{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}], 'returned');

console.log(whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "bat": 2 }
));
console.log([{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}], 'returned');

console.log(whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "cookie": 2 }
));
console.log([{"apple": 1, "bat": 2, "cookie": 2}], 'returned');

console.log(whatIsInAName(
  [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 },
    { "bat": 2 }
  ],
  { "apple": 1, "bat": 2 }
));
console.log([{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}], 'returned');

console.log(whatIsInAName(
  [
    {"a": 1, "b": 2, "c": 3}
  ],
  {"a": 1, "b": 9999, "c": 3}
));
console.log([], 'returned');
console.log(whatIsInAName(
  [
    {"a": 1, "b": 2, "c": 3, "d": 9999}
  ],
  {"a": 1, "b": 9999, "c": 3}
));
console.log([], 'returned');
