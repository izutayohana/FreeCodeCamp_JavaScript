//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    while (arr.some((item) => Array.isArray(item))){
      arr = [].concat(...arr)
    } return arr
    
    }
    
    console.log(steamrollArray([[["a"]], [["b"]]]));
    console.log(steamrollArray([1, [2], [3, [[4]]]]));
    console.log(steamrollArray([1, {}, [3, [[4]]]]));