//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let separated = str.split("")
    let arr2 = [];
    for (let i = 0; i < separated.length; i++){
      if (separated[i].match(/[A-Z]/gi)) {
        let index = (alphabet.indexOf(separated[i]) - 13);
        if (index >= 0){
          arr2.push(alphabet[index])
        } else {
          arr2.push(alphabet[26 + index])
        }
   } else {
      arr2.push(separated[i])
      }
    }
    return arr2.join("");
  
  }
  console.log(rot13("SERR YBIR?"));