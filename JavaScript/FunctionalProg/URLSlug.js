// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
function urlSlug(title) {
    let arr = title.toLowerCase().split(" ");
    let notwhite = arr.reduce((acc, words) => {
      if (words != '') {
      return [...acc, words];
    } return acc}, [])
    let slug = notwhite.join("-");
    
    return slug
    
    }
    // Only change code above this line
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));