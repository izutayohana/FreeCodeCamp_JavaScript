
  function shoppinglist() {
    let candy = ['chocolate', 'cake', 'gummy', 'soda'];
    let sandwich = ['bread', 'cream cheese', 'ham', 'cheese']
    let vegetables = ['lettuce', 'cabbage', 'onion']
    let list = [...vegetables, ...candy, ...sandwich];
    return list;
  }
 

  function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
  return true
  } else {
    return false
  }
  }
  
  console.log(quickCheck(shoppinglist(), 'ham'));