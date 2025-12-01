function steamrollArray(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output.push(...steamrollArray(arr[i]));
    } else if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}

const arr1 = [[1], 2, {'foo': 'bar'}, [], {}, [3, [[4]]]];

console.log(steamrollArray(arr1));
