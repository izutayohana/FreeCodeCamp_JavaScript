//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let repeated = '';
    if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeated += str
    }
    }
      return repeated
  }
  
  console.log(repeatStringNumTimes("abc", 3));