//In this prototype chain, Dog is the supertype for beagle, while beagle is the subtype. 
//Object is a supertype for both Dog and beagle. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  Object.prototype.isPrototypeOf(Dog.prototype);