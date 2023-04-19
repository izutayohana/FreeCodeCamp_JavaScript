// The global variable
const squareList = arr => {
    // Only change code below this line
  
    let squared = arr.reduce((accumulator, currentValue) => {
    if (currentValue > 0 && Number.isInteger(currentValue)) {
      const square = currentValue * currentValue;
      return [...accumulator, square];
    }
    return accumulator;
  }, []);
  
    return squared;
  
  
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);
