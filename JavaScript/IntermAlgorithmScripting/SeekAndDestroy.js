//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arguments.length; j++)
          {
        if (arr.indexOf(arguments[j]) !== -1) {
            arr.splice((arr.indexOf(arguments[j])), 1);
            }
        }
    }
    return arr;
  }
  
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));