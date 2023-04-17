// changing or altering things is called mutation, and the outcome is called a side effect. 
//A function, ideally, should be a pure function, meaning that it does not cause any side effects.

let fixedValue = 4;

function incrementer() {
let incremented = fixedValue+1;
return incremented
}