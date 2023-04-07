function factorialize(num) {
    var counter = 1;
    for (let i = 1; i <= num; i++) {
      counter *= i;
    }
    num = counter;
    return num;
  }
  
  console.log(factorialize(5));