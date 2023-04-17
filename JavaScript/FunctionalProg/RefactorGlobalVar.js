// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
var changed = bookList;
// Change code below this line
function add(arr, bookName) {
  let arr1 = arr.slice(0)
  arr1.push(bookName);
  return arr1;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
let arr2 = arr.slice(0)
    arr2.splice(book_index, 1);
    return arr2;

    // Change code above this line
    }
}
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))