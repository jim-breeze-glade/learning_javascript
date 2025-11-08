
function getAverage(grades) {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  const average = total / grades.length;

  return function getGrade() {
    if (average === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else if (score >= 0) {
      return 'F';
    }
  };
}
//const grade1 = [100,100,100];
const gradeFunction = getAverage([100, 100, 100]);
console.log(gradeFunction());
