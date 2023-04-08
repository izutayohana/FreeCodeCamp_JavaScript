//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    let finaltarget = new RegExp(target + "$",'gi')
      return finaltarget.test(str);
    }
    
    console.log(confirmEnding("Abstraction", "action"));