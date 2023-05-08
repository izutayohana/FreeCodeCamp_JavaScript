//Convert the given number into a roman numeral.

function convertToRoman(num) {
    let roman = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    }; 
  let converted = "";
   let number = num;
   for (const key in roman){
     while (number - roman[key] >= 0){
       converted += key 
       number -= roman[key]
     }
   }
  
   return converted;
  }
  
  console.log(convertToRoman(3999));