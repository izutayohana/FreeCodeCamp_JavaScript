//A more efficient way to add properties to a prototype is to set the prototype to a new object that already contains the properties.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
  numLegs: 4,
  eat: function(){
    console.log("Au au au");
  },
  describe: function(){
    console.log("Hi, my name is "+ this.name);
  }
  };


