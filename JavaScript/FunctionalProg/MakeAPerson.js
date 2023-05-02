//Fill in the object constructor with the following methods below:

//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)

const Person = function(firstAndLast) {
    let fullname =  firstAndLast;
   this.getFirstName = function() {
    return fullname.split(" ")[0];
  };
    this.getLastName = function() {
    return fullname.split(" ")[1];
  }; 
   this.getFullName = function() {
      return fullname;
    };
     
    this.setFirstName = function(name) {
    fullname = name + " " + fullname.split(" ")[1]
  };
   this.setLastName = function(name) {
    fullname = fullname.split(" ")[0] + " " + name
  };
  this.setFullName = function(name) {
    fullname = name
  };
  };
const bob = new Person("Bob Ross");
console.log(bob.getFullName());
  
  
  const bob = new Person('Bob Ross');
  console.log(bob);
  console.log(Object.keys(bob).length);
  bob.setFullName("Haskell Curry")
  console.log(bob.getFirstName());