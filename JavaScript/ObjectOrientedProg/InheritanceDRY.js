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