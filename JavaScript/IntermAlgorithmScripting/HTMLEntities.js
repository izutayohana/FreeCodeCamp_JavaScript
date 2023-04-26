//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// & = &amp;
// < = &lt;
// > = &gt;
// "" = &quot;
// '' = &apos;

function convertHTML(str) {
    let entities = {
      "&": "&amp;",
      "'": "&apos;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }
    let newStr = "";
  
    newStr = str.replace(/[&'<>"]/g, m => entities[m])
    return newStr;
  }
  
  console.log(convertHTML('Stuff in "quotation marks"'));