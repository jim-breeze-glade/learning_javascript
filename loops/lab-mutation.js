// checks if the second value of array contains all chars of first, returns bool

function mutation(array) {
    const control = array[0].toLowerCase();
    let contains = true;
    for (let char of array[1].toLowerCase()) {
        if(!control.includes(char)) {
            contains = false;
        }
    }
    return contains;
}

const array1 = ["hello", "yeh"]; // false
const array2 = ["Hello", "hello"]; // true
const array3 = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"]; // true
const array4 = ["Mary", "Army"]; // true
const array5 = ["Mary", "Aarmy"]; //true
const array6 = ["Alien", "line"]; // true
const array7 = ["floor", "for"]; // true
const array8 = ["hello", "neo"]; // false
const array9 = ["voodoo", "no"]; //false
const array10 = ["ate", "date"]; // false
const array11 = ["Tiger", "Zebra"]; //false
const array12 = ["Noel", "Ole"]; //true

console.log(mutation(array1));
console.log(mutation(array2));
console.log(mutation(array3));
console.log(mutation(array4));
console.log(mutation(array5));
console.log(mutation(array6));
console.log(mutation(array7));
console.log(mutation(array8));
console.log(mutation(array9));
console.log(mutation(array10));
console.log(mutation(array11));
console.log(mutation(array12));

