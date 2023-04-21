function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    let newArr = [];
    for (let i = 0; i < keys.length; i++){
    let items = source[keys[i]]
    return items
    }
  
  
    
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));