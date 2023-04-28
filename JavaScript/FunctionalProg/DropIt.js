function dropElements(arr, func) {
    let newArr = [];
    
       for (let j = 0; j < arr.length; j++){
         while (!func(arr[j])) {
           arr.shift();
       }
  
    } 
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));