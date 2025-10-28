const alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
    
    const comp = alphabet.slice(alphabet.indexOf(str.charAt(0)), alphabet.indexOf(str.charAt(0)) + str.length);

    for (let i = 0; i < comp.length; i++) {
        if (str.charAt(i) !== comp.charAt(i)) {
            return comp.charAt(i);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));  // should return the string d.
console.log(fearNotLetter("abcdefghjklmno"));  // should return the string i.
console.log(fearNotLetter("stvwx"));  // should return the string u.
console.log(fearNotLetter("bcdf"));  // should return the string e.
console.log(fearNotLetter("abce")); // should return the string d.
console.log(fearNotLetter("abcdefghjklmno"));  // should return the string i.
console.log(fearNotLetter("stvwx"));  // should return the string u.
console.log(fearNotLetter("bcdf"));  // should return the string e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));  // should return undefined.