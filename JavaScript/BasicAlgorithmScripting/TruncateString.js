//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending

function truncateString(str, num) {
    let newstr = '';
    if (str.slice(0, num) == str) {
    newstr = str.slice(0, num);
    } else {
     newstr = str.slice(0, num) + '...';
    }
    return newstr;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));