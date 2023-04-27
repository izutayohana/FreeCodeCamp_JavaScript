//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let sum = 0;
    let counter = 0;
    for (let j = 2; j <= num; j++){
      for (let i = 1; i <= j; i++){
        if(j % i == 0){
          counter++;
        }
      } if (counter <= 2) {
        sum = sum + j;
        console.log(j)
      } counter = 0;
    }
    return sum;
  }
  
  console.log(sumPrimes(10));