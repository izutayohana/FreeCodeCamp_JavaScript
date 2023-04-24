function translatePigLatin(str) {
    let vowels = /a|e|i|o|u/;
    let word = "";
    if (!str.match(vowels)) {
      word = str + "ay";
    } else {
      let index = str.indexOf(str.match(vowels));
      if (index == 0) {
        word = str + "way";
    } else {
      word = str.slice(index) + str.slice(0,index) + "ay"
      
    }
  } return word 
  }
  console.log(translatePigLatin("algorithm"));