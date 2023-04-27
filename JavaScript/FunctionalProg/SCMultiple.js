//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
    arr.sort(function (a,b){return a-b})
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++){
      newArr.push(i)
    } return newArr;
    }
    
    console.log(smallestCommons([1,5]));