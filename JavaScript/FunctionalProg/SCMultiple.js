//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
    arr.sort(function (a,b){return a-b})
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++){
      newArr.push(i)
    } 
    let multiple = newArr[newArr.length-1]*newArr[newArr.length-2];
    for (let j = 0; j < newArr.length; j++){
      while (multiple%newArr[j] != 0){
        multiple = multiple*newArr[j]
      }
    }
    return multiple;
    }
    
    console.log(smallestCommons([2, 10]));