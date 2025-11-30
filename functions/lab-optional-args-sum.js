function addTogether(x, y) {
  if (typeof x !== 'number') {
    return undefined;
  }

  if (arguments.length === 2) {
    if (typeof y !== 'number') {
      return undefined;
    }
    return x + y;
  }

  return function(y) {
    if (typeof y !== 'number') {
      return undefined;
    }
    return x + y;
  };
}
console.log(addTogether(1, undefined));
console.log(addTogether(5)(undefined));
console.log(addTogether(5, 7));
