/* 
    I had a ton of trouble with the incrementing to walk through the slices
    from creating vars to store slice start and endpoints, and wasted some time on trying to nest shift() methods which start out promising, but was
    not concise at all. Using the slice(i, i + size) along with incrementing
    by i += size kept the chunks from compounding in size.
*/

function chunkArrayInGroups(arr, size) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  
  return result;
}
    
    /*const numOfChunks = Math.floor(array.length/chunkLen);
    let chunkedArray = [];
    let finalArray = [];
    for (i = 0; i < numOfChunks; i++) {
        for (j = 0; i < chunkLen; j++) {
            let chunk = array.shift();
            chunkedArray.push(chunk);
            
        }
        finalArray.push(chunkedArray);
    }
    console.log(finalArray);*/
    /*console.log(chunkedArray);
    console.log(array);*/
    
    /*const numOfChunks = Math.floor(array.length/num);
    const remainingChunk = array.length%num;

    let endChunk = (array.length - remainingChunk) / numOfChunks;
    let startChunk = 0;
    newArray = [];

    for (i = 0; i < numOfChunks; i++) {
        let slicedChunk = array.slice(startChunk, endChunk);
        newArray.push(slicedChunk);
        startChunk = endChunk;
        endChunk += startChunk;
    }

    console.log(newArray);*/


const array1 = ["a", "b", "c", "d"] // 2, [["a", "b"], ["c", "d"]]
const array2 = [0, 1, 2, 3, 4, 5] // 3, [[0, 1, 2], [3, 4, 5]]
const array3 = [0, 1, 2, 3, 4, 5] // 2, [[0, 1], [2, 3], [4, 5]]
const array4 = [0, 1, 2, 3, 4, 5] // 4. [[0, 1, 2, 3], [4, 5]]
const array5 = [0, 1, 2, 3, 4, 5, 6] // 3, [[0, 1, 2], [3, 4, 5], [6]]
const array6 = [0, 1, 2, 3, 4, 5, 6, 7, 8] // 4, [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8] // 2, [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

console.log(chunkArrayInGroups(array1, 2));
console.log(chunkArrayInGroups(array2, 3));
console.log(chunkArrayInGroups(array3, 2));
console.log(chunkArrayInGroups(array4, 4));
console.log(chunkArrayInGroups(array5, 3));
console.log(chunkArrayInGroups(array6, 4));
console.log(chunkArrayInGroups(array7, 2));