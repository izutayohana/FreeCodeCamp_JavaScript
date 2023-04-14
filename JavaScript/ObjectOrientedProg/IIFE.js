//IIFE is Immediately Invoked Function Expression

(function() {console.log("I am an anonymous function and I am immediately invoked")}) ()

//An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module.

let funModule = (function() {
    return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    noiseMixin: function(obj) {
      obj.noise = function() {
        console.log("I make a cute noise");
      };
    }
    }
    })()
    //this thing above was a module. Below we can use it. 
    function Capybara(name) {
        this.name = name;
    } 

    function Animal() { };

    Animal.prototype = {
        constructor: Animal,
        eat: function() {
          console.log("Chomp Chomp")
      }}

Capybara.prototype = Object.create(Animal.prototype);
Capybara.prototype.constructor = Capybara;
Capybara.prototype.food = function(){console.log("I eat grass!")}

let maria = new Capybara("Maria");
maria.eat();
maria.food();
funModule.noiseMixin(maria);
funModule.isCuteMixin(maria);
console.log(maria.isCute());
maria.noise();

