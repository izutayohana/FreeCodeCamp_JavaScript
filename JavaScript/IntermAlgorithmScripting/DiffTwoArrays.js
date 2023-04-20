//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = arr1.slice().concat(arr2).sort(function(a, b) {return a===b ? 0: a > b? 1 : -1});
    let different = [];
    for (let i = 0; i < newArr.length; i+=2){
      if (newArr[i] != newArr[i+1]){
        different.push(newArr[i]);
        i++;
      }
    }
    return different;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));