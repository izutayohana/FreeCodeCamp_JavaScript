//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let chunked = [];
    for (let i = 0; i < arr.length; i+= size) {
      if (i + size <= arr.length) {
      chunked.push(arr.slice(i, i+size))
      } else {
        chunked.push(arr.slice(i, arr.length))
      }
    }
    return chunked;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));