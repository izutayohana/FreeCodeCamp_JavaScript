//You are given two arrays and an index. Copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
    var newarr1 = arr2.slice(0, n)
    var newarr2 = arr2.slice(n, arr2.length)
    var newarr = [...newarr1, ...arr1, ...newarr2]
    return newarr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);




  // function frankenSplice(arr1, arr2, n) {
 // return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));