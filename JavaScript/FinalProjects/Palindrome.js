//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
    let alphan = /[a-z0-9]/gi
    let matched = str.match(alphan).join('').toLowerCase();
    return matched;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));