const weapons = ['Buster Sword', 'Katana', 'Kukri', 'Whip', 'Combat Knife'];
weapons.sort();

const numbers1 = [414, 200, 5, 10, 3];
numbers1.sort();

const numbers2 = [414, 200, 5, 10, 3];
numbers2.sort((a, b) => a - b);

console.log(weapons);
console.log(numbers1);
console.log(numbers2);
