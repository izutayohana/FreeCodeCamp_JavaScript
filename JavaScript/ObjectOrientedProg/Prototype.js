//Properties in the prototype are shared among ALL instances of the constructor, it is better than have a lot of duplicated variables like we had before with numLegs. 

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let protProps = [];
  for (let property in beagle){
    if (beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }
    else {
      protProps.push(property);
    }
  }

console.log(ownProps, protProps)
