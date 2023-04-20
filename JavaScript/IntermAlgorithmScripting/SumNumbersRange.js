//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    arr.sort(function (a, b){return a-b})
    let full = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
    full.push(i);
    }
    let sums = full.reduce((sum, value) => (sum + value))
    return sums;
  }
  
  console.log(sumAll([5, 10]));