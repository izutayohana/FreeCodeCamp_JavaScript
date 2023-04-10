//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

function mutation(arr) {
    for (let i = 0; i < arr[0].length ; i++) {
      for (let j = 0; j < arr[1].length ; j++) {  
        let reg = new RegExp(arr[1][j], "gi");
        if (reg.test(arr[0]) == false) {
          return false
        }
      } return true
    }
  }
  
  console.log(mutation(["voodoo", "no"]));