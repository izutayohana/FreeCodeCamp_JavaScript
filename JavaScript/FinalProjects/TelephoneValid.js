//Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number. 

function telephoneCheck(str) {
    let separated = str.split("")
    let counter = str.match(/[()]/gi)
    let variant = /[0-9]/gi
    let matches = str.match(variant).join("");
    if (matches.length == 11 && str[0] != 1 || matches.length < 10 || matches.length > 11 || separated.indexOf("-", 12) > 0) {
            return false
    } else if (!counter || counter.length == 2 && separated.indexOf(")") - separated.indexOf("(") == 4) {
        return true
    } else {
     return false;
    }
  }
  
  
  console.log(telephoneCheck("-1 (757) 622-7382"));