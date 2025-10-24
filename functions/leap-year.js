const yearInput1 = 2000;
const yearInput2 = 1900;
const yearInput3 = 2024;
const yearInput4 = 1997;

function isLeapYear(year) {
    if (year%400 === 0) {
        return true;
    } else if (year%100 === 0) {
        return false;
    } else if (year%4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(yearInput1));
console.log(isLeapYear(yearInput2));
console.log(isLeapYear(yearInput3));
console.log(isLeapYear(yearInput4));