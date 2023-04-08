//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.


function titleCase(str) {
    let lowcase = str.toLowerCase().split(' ');
    let capitalized = [];
  for (let i = 0; i < lowcase.length; i++) {
    capitalized.push(lowcase[i].charAt().toUpperCase() + lowcase[i].slice(1))
    } return capitalized.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));