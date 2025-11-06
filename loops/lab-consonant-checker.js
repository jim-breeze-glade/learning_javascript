consSentence = 'The quick brown fox';

function getConsonantCount(sentence) {
    const vowels = 'aeiou';
    const punct = ' !,.\\/()<>-=+*&^%$#@`;:[]{}|'
    let count = 0;

    for (let char of sentence.toLowerCase()) {
        if (!vowels.includes(char) && !punct.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(getConsonantCount("coding is fun"))

// freeCodeCamp version
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}