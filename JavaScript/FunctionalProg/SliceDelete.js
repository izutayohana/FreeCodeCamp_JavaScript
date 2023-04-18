//Using the slice method instead of splice helps to avoid any array-mutating side effects.


function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));