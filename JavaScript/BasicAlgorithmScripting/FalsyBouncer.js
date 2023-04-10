//Remove all falsy values from an array. Return a new array; do not mutate the original array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
    let arr2 = [];
     for (let i = 0; i < arr.length; i++) {
       if (arr[i]){
         arr2.push(arr[i]);
       }
     }
      return arr2;
   }
   
   console.log(bouncer([null, NaN, 1, 2, undefined]));