//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = arr1.slice().concat(arr2)
    const numbers = [];
    const strings = [];
    for (let i = 0; i < newArr.length; i ++){
      if (typeof(newArr[i]) == "number") {
        numbers.push(newArr[i]);
      } else {
        strings.push(newArr[i]);
      }
    }
    strings.sort(function(a, b) {return a===b ? 0: a > b? 1 : -1});
    numbers.sort(function(a, b){return a-b});
    let allsorted = strings.concat(numbers);
    console.log(allsorted)
    let different = [];
    for (let j = 0; j < allsorted.length; j++){
      if (allsorted[j] == allsorted[j+1]){
        j++;
      } else {
        different.push(allsorted[j])
      }
    }
    return different;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));