function repeatStringNumTimes(str, num) {
    let output = '';
    for (i = 0; i < num; i++) {
        output += str;
    }
    return output;
}

console.log(repeatStringNumTimes("*", 3)); // should return the string ***.
console.log(repeatStringNumTimes("abc", 3)); //should return the string abcabcabc.
console.log(repeatStringNumTimes("abc", 4)); //should return the string abcabcabcabc.
console.log(repeatStringNumTimes("abc", 1)); //should return the string abc.
console.log(repeatStringNumTimes("*", 8)); //should return the string ********.
console.log(repeatStringNumTimes("abc", -2)); //should return an empty string ("").
console.log(repeatStringNumTimes("abc", 0)); //should return "".