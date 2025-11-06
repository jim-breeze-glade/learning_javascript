// Claude example
function getWordCount(sentence) {
  let count = 0;
  let inWord = false;
  
  for (let char of sentence) {
    if (char !== " ") {
      // We're in a word
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      // We hit a space, so we're not in a word anymore
      inWord = false;
    }
  }
  
  return count;
}
console.log(getWordCount("I am a dude"));

// freeCodeCamp workshop
function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}