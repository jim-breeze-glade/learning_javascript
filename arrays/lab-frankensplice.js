// This one might not be optimized but it passes the 6th test.

function frankenSplice(monster, man, index) {
  let parts = monster;
  let frank = [...man];
  for (let i = 0; i < monster.length; i++) {
    frank.splice(index, 0, parts[i]);
    index++;
  }
  return frank;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));

/*
Passed:1. frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Passed:2. frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Passed:3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Passed:4. All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
Passed:5. The first array should remain the same after the function runs.
Passed:6. The second array should remain the same after the function runs.
*/
