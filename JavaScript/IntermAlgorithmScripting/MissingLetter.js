//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphacut = alphabet.slice(alphabet.indexOf(str.slice(0,1)),alphabet.indexOf(str.slice(str.length-1))+1)
      for (let i = 0; i < alphacut.length; i++) {
        if (alphacut[i] != str[i]){
          return alphacut[i]
        }
    }
  }
  
  console.log(fearNotLetter("abce"));