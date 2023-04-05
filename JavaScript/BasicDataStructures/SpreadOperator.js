function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
  newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine(["cute", "capybara"], 5));

  //Combine Arrays with the Spread Operator

  function shoppinglist() {
    let candy = ['chocolate', 'cake', 'gummy', 'soda'];
    let sandwich = ['bread', 'cream cheese', 'ham', 'cheese']
    let vegetables = ['lettuce', 'cabbage', 'onion']
    let list = [...vegetables, ...candy, ...sandwich];
    return list;
  }
  
  console.log(shoppinglist());