//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
//Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    let newArr = [];
    for (let i = 0; i < keys.length; i++){
    let items = source[keys[i]]
    if (collection.some(e => e[keys[i]] === items)) {
     let index = collection.findIndex(e => e[keys[i]] === items)
     newArr.push(collection[index]);
  return newArr
    }
    }
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));