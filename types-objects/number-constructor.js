const myNum = new Number("34");
console.log(myNum); // [Number: 34]
console.log(typeof myNum); // object

const myNumber = Number("100"); // No 'new' keyword
console.log(myNumber); // 100
console.log(typeof myNumber); // number

const emptyNum = Number(""); 
console.log(emptyNum); // 0

const notAnum = Number("stringer");
console.log(notAnum); // NaN

const boolTrue = Number(true);
const boolFalse = Number(false);
console.log(boolTrue); // 1
console.log(boolFalse); // 0

const undefinedNum = Number(undefined);
const nullNum = Number(null);
console.log(undefinedNum); // NaN
console.log(null); // null

const emptyArr = Number([]);
const arrOneNum = Number([7]);
const arrMultiNum = Number([7, 36, 12]);
const arrStr = Number(["str1"]);
const arrMultiStr = Number(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN

// In conclusion, you'll mostly use the Number() constructor for type conversion more than creating a number or a number object.