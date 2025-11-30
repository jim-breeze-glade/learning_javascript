function destroyer(arr, ...nums) {
  let survived = arr.filter(element => !nums.includes(element));
  return survived;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log([1, 1], 'returned');
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log([1, 5, 1], 'returned');
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log([1], 'returned');
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log([], 'returned');
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(["hamburger"], 'returned');
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ));
console.log([12, 92, 65], 'returned');
