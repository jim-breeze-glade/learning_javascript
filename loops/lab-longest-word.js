const test1 = "The quick brown fox jumped over the lazy fox";
const test2 = "May the force be with you";
const test3 = "Google do a barrel roll";
const test4 = "What is the average airspeed velocity of an unladen swallow";
const test5 = "What if we try a super-long word such as otorhinolaryngology";

function findLongestWordLength(sentence) {
    let longest = 0;
    for (let word of sentence.split(' ')) {
        if (word.length > longest) {
            longest = word.length;
        }
        // console.log(longest);
        // console.log(word.length)
    }
    return longest;
}

console.log(findLongestWordLength(test1));
console.log(findLongestWordLength(test2));
console.log(findLongestWordLength(test3));
console.log(findLongestWordLength(test4));
console.log(findLongestWordLength(test5));
// findLongestWordLength(test);
