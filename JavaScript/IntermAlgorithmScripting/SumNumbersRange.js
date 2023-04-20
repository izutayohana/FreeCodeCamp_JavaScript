function sumAll(arr) {
    arr.sort(function (a, b){return a-b})
    let full = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
    full.push(i);
    }
    return full;
  }
  
  console.log(sumAll([4, 1]));
  