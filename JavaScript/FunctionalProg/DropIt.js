function dropElements(arr, func) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++){
      if(!func(arr[i])){
        arr.shift()
      }
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));