//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.


function truthCheck(collection, pre) {
    return collection.every(item => item[pre])
  }
  
  console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"));