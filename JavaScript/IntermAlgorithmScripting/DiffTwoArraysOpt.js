//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = [];
    function exists(first, second) {
      for (let i = 0; i < first.length; i++){
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
      exists(arr1, arr2);
      exists(arr2, arr1);
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));