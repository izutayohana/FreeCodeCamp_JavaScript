//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
    let newArr = [];
    for (let a = 0; a < arr.length; a++) {
      if (newArr.indexOf(arr[a])< 0){
        newArr.push(arr[a]);
      }
    }
    function testing(arr1, arr2){
      for (let i = 0; i < arr1.length; i++) { 
      if (arr2.indexOf(arr1[i]) < 0 && newArr.indexOf(arr1[i]) < 0) {
          newArr.push(arr1[i])
        } 
      } return newArr;
    }
    for (let j = 1; j < arguments.length; j++){
      testing(arguments[j], arguments[j-1]);
    }
    return newArr 
  }
  
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));