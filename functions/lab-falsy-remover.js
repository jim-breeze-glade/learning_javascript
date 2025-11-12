function bouncer(array) {
  const arr = [...array];
  let bounced = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      bounced.push(arr[i]);
    }
  }
  return bounced;
}

arr1 = [7, "ate", "", false, 9];
arr2 = [false, null, 0, NaN, undefined, ""]
console.log(bouncer(arr1));
console.log(arr1);
