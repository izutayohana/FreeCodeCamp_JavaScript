function spinalCase(str) {
    // positive lookaheade to check if any string is followed by upperCase letter
    let upper = /(?=[A-Z])/g;
    // positive lookaheade to check if any string followed by space and upperCase/lowerCase letter 
    let spaceletter = /(?=\s[A-Z])/gi
  
    //checking if there are two hypens together
   let hyphentwo = new RegExp("-{2,}", "g");
  
    str = str.replaceAll("_", "-");
    str = str.replace(spaceletter, "-")
    str = str.replace(upper, "-")
    str = str.replaceAll(" ", "-")
    str = str.replaceAll(hyphentwo, "-")
    str = str.toLowerCase();
    if(str[0] == "-"){
     return str.replace("-", "");
    }
  
    return str;
  }
  
  
  console.log(spinalCase("AllThe-small Things"));
  console.log(spinalCase("thisIsSpinalTap"))
  console.log(spinalCase("The_Andy_Griffith_Show"))