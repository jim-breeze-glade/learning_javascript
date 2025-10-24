
function getAverageRating(array) {
  const arrSum = array[0] + array[1] + array[2] + array[3];
  return arrSum / 4;  
}

console.log(getAverageRating([4, 4, 4, 4]));