//A more efficient way to add properties to a prototype is to set the prototype to a new object that already contains the properties.

function Dog(name) {
    this.name = name;
  }
  
  //But whenever a prototype is manually set to a new object, remember to define the constructor property, otherwise the constructor property will be overwritten.

  Dog.prototype = {
constructor: Dog,
  numLegs: 4,
  eat: function(){
    console.log("Au au au");
  },
  describe: function(){
    console.log("Hi, my name is "+ this.name);
  }
  };


