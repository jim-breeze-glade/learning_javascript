const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const divBy3 = numbers.filter((num) => num % 3 === 0);

const str = "Wow that is amazing";
const sentence = str.split(' ');
const extractWow = sentence.filter((word) => word.includes("Wow"));

const items = [
  { name: 'Knife', qty: 1 },
  { name: 'Potion', qty: 40 },
  { name: 'Ether', qty: 3 },
  { name: 'Ifrit Card', qty: 1 }
];
const lowInv = items.filter((item) => item.qty < 5);
const noInv = items.filter((item) => item.qty === 0);

console.log(extractWow);
console.log(evenNumbers);
console.log(divBy3);
console.log(lowInv);
console.log(noInv);
