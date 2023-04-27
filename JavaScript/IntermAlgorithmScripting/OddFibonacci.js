//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    let num1 = 0;
    let num2 = 1;
    let fibodd = 1;
    for (let i = 0; num2 < num; i++) {
      let sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      if(num2 <= num && (num2) % 2 != 0){
       fibodd += num2
      }
    } return fibodd;
  }
  
  console.log(sumFibs(4000000));