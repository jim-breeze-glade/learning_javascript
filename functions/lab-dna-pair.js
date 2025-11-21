function pairElement(strand) {
  let pairs = [];

  for (let i = 0; i < strand.length; i++) {
    if (strand[i] === "A") {
      pairs.push(["A", "T"]);
    } else if (strand[i] === "T") {
      pairs.push(["T", "A"]);
    } else if (strand[i] === "C") {
      pairs.push(["C", "G"]);
    } else if (strand[i] === "G") {
      pairs.push(["G", "C"]);
    }
  }
  return pairs;
}
pairElement("ATCGA");
console.log(pairElement("ATCGA"));
