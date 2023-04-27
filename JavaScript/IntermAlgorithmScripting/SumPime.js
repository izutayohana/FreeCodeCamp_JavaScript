//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let sum = 1;
    let counter = 0;
    for (let j = 1; j < num; j++){
      for (let i = 1; i < 10; i++) {
        if (j % i == 0){
          counter++;
        } if(counter == 2) {
          sum = sum + j
          console.log(sum)
        }  
    }
    }
    return sum;
  }
  
  console.log(sumPrimes(10));   