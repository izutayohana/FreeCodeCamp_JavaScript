//In order to not repeat myself I created an Animal supertype that includes the eat function, so I don't have to write in both previous functions.

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat};
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear};
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom")
  }}
 //When an object inherits its prototype from another object, it also inherits the supertype's constructor property
 //To fix this, you can manually set the constructor property of the object, like I've done below:

  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;

  Bear.prototype = Object.create(Animal.prototype);
  Bear.prototype.constructor = Bear;

  let garfield = new Cat("Garfield");
  console.log(garfield.constructor)


  