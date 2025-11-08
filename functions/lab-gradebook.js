function getAverage(grades) {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  return total / grades.length;
}

function getGrade(grades) {
  if (grades === 100) {
    return 'A+';
  } else if (grades >= 90) {
    return 'A';
  } else if (grades >= 80) {
    return 'B';
  } else if (grades >= 70) {
    return 'C';
  } else if (grades >= 60) {
    return 'D';
  } else if (grades >= 0) {
    return 'F';
  }
}

function hasPassingGrade(grade) {
  letter = getGrade(grade);

  if (letter === 'A+' || letter === 'A' || letter === 'B' || letter === 'C' || letter === 'D') {
    return true;
  } else {
    return false;
  }
}

function studentMsg(grades, grade) {
  const average = getAverage(grades);
  const letter = getGrade(grade);
  const isPassing = hasPassingGrade(grade);
  
  if (isPassing) {
    return `Class average: ${average}. Your grade: ${letter}. You passed the course.`
  } else {
    return `Class average: ${average}. Your grade: ${letter}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))
