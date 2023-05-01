//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.


function truthCheck(collection, pre) {
    let filt = collection.filter(item => item[pre] !== true)
  
    return filt
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));