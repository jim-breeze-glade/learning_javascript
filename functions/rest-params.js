function arrFunc(...arrays) {
  for (let array of arrays) {
    console.log(array);
  }
}

arr1 = [1, 2, 3];
arr2 = [3, 4];
arr3 = [7, 8, 9];

arrFunc(arr1, arr2, arr3);
