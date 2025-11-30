const numbers = [3, 4, 5, 6, 7].map((element, idx, arr) => {
  console.log('Element:', element);
  console.log('Index:', idx);
  console.log('Array:', arr);
  return element * 2;
})
