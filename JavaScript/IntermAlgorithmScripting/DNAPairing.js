//The DNA strand is missing the pairing element. 
//Write a function to match the missing base pairs for the provided DNA strand. 
//For each character in the provided string, find the base pair character. Return the results as a 2d array.

function pairElement(str) {
    let newArr = [];
    for(let i = 0; i < str.length; i++){
      switch(str[i]) {      
        case "C":
        newArr.push(["C", "G"])
        break;
        case "G":
        newArr.push(["G", "C"])
        break;
        case "A":
        newArr.push(["A", "T"])
        break;
        case "T":
        newArr.push(["T", "A"])
        break;
        }
    }
    return newArr;
  }
  
  console.log(pairElement("GCG"));