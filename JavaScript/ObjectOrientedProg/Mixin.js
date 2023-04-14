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

  let happyMixin = function(obj) {
    obj.happy = function() {
        console.log("I am happy!!")
    }
  }

  Cat.prototype = Object.create(Animal.prototype); //this makes the Cat inherit all the prototype properties from Animal
  Cat.prototype.constructor = Cat; //this resets the constructor from Animal to Cat
  Cat.prototype.voice = function(){console.log("Nya!")} //this gives the cat its own method, in addition to the inherited methods
  Cat.prototype.eat = function(){console.log("Nhac nhac")} //this is a override of an inherited method
  
  Bear.prototype = Object.create(Animal.prototype);
  Bear.prototype.constructor = Bear;
  Bear.prototype.voice = function(){console.log("Grrrrr!")}

  let garfield = new Cat("Garfield");
  let pooh = new Bear("Pooh")

happyMixin(pooh);
pooh.eat();
pooh.voice();
console.log(pooh.name);
pooh.happy();

happyMixin(garfield);
garfield.eat();
garfield.voice();
console.log(garfield.name);
garfield.happy();