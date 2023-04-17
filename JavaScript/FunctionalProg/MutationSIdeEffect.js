// changing or altering things is called mutation, and the outcome is called a side effect. 
//A function, ideally, should be a pure function, meaning that it does not cause any side effects.

let fixedValue = 4;

//Another principle of functional programming is to always declare your dependencies explicitly. 
//This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
function incrementer(fixedValue) {
let incremented = fixedValue+1;
return incremented
}