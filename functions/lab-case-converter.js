function titleCase(str) {
  const lowerStr = str.toLowerCase();
  const splitStr = lowerStr.split(' ');
  let casedStr = '';

  for (let i = 0; i < splitStr.length; i++) {
    let upperLetter = splitStr[i].replace(splitStr[i].charAt(0), splitStr[i].charAt(0).toUpperCase())
    casedStr += upperLetter + ' ';
    }
    return casedStr.trimEnd(); 
  }


str1 = 'javaScript is fun';

console.log(titleCase(str1));
