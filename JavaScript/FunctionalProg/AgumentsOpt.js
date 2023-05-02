//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    if (!Number.isInteger(arguments[0])) {
      return undefined
    }
   if (arguments.length == 2) {
   if (!Number.isInteger(arguments[1])){
      return undefined;
    } else{
      return arguments[0]+arguments[1]}
    } else {
      let first = arguments[0]
      let second = function (b) {
        if (Number.isInteger(b)){
      return first + b;
    } else {
        return undefined}
        }
    return second
    }
    
  }
  
  console.log(addTogether(5)("3"));