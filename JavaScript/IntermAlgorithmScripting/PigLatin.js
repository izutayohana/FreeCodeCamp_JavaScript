function translatePigLatin(str) {
    let vowels = /a|e|i|o|u/;
    let firstletter = str.slice(0,1);
    let word = "";
    if (!str.match(vowels)) {
      word = str + "ay";
      return word
    } else {
      let index = str.indexOf(str.match(vowels));
      if (index == 0) {
        word = str.slice(1) + "way";
      return word
    }
  }
  }
  console.log(translatePigLatin("algorithm"));