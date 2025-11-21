function convertHTML(str) {
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "&") {
      arr.push("&amp;");
    } else if (str[i] === "<") {
      arr.push("&lt;");
    } else if (str[i] === ">") {
      arr.push("&gt;");
    } else if (str[i] === '"') {
      arr.push("&quot;");
    } else if (str[i] === "'") {
      arr.push("&apos;");
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join("");

}

console.log(convertHTML("<>"))
