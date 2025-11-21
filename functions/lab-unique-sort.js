function uniteUnique(...arrays) {
  let uniqueArr = [];

  for (let array of arrays) {
    for (let i = 0; i < array.length; i++){
      if (!uniqueArr.includes(array[i])) {
        uniqueArr.push(array[i]);
      }
    }
  }
  return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
