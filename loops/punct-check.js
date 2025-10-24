function getPunctuationCount(sentence) {
  let count = 0;
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  for (char of sentence.toLowerCase()) {
    if (char !== " " && !alpha.includes(char)) {
      count++;
    }
  }
  
  return count;
}

console.log(getPunctuationCount("What????!"));