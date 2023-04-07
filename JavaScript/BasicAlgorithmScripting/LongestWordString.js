function findLongestWordLength(str) {
    var splittedsentence = str.split(' ')
    var lengths = [];
    var max;
    for (let i = 0; i < splittedsentence.length; i++) {
      lengths.push(splittedsentence[i].length)
    } 
    var maximum = Math.max(...lengths)
    console.log(maximum)
  
  
    return str.length;  
  }
  
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");