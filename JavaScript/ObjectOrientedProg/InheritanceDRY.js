//In order to not repeat myself I created an Animal supertype that includes the eat function, so I don't have to write in both previous functions.

function Cat(name) {
    this.name = name;
  }
  
  function Bear(name) {
    this.name = name;
  }
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom")
  }}
 //When an object inherits its prototype from another object, it also inherits the supertype's constructor property
 //To fix this, you can manually set the constructor property of the object, like I've done below:

  Cat.prototype = Object.create(Animal.prototype); //this makes the Cat inherit all the prototype properties from Animal
  Cat.prototype.constructor = Cat; //this resets the constructor from Animal to Cat
  Cat.prototype.voice = function(){console.log("Nya!")} //this gives the cat its own method, in addition to the inherited methods

  Bear.prototype = Object.create(Animal.prototype);
  Bear.prototype.constructor = Bear;
  Bear.prototype.voice = function(){console.log("Grrrrr!")}

  let garfield = new Cat("Garfield");
  let pooh = new Bear("Pooh")

pooh.eat();
pooh.voice();
console.log(pooh.name);

garfield.eat();
garfield.voice();
console.log(garfield.name);