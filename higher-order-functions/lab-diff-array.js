function diffArray(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)));
}

// *** Test Area ***
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log('["pink wool"]***');
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log('["diorite", "pink wool"]***');
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]));
console.log('[]***');
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log('["pen", "pencil", "notebook"]***');
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]));
console.log('["car", "train", "plane"]***');
console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));
console.log('["banana", "grape"]***');
console.log(diffArray([], ["apple", "banana"]));
console.log('["apple", "banana"]***');
console.log(diffArray(["apple", "banana"], []));
console.log('["apple", "banana"]***');
console.log(diffArray([], []));
console.log('[]***');
