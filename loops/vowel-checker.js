const sent = 'vegetable';

function getVowelCount(sentence) {
    let count = 0
    for (char of sentence) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    return count;
}  
 
console.log(getVowelCount(sent));

// more concise version
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}