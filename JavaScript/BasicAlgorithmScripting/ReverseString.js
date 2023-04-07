function reverseString(str) {
    var splitString = str.split("");
    var reverse = splitString.reverse()
    var string = reverse.join("");
    console.log(string)
    return string;
    }
    
    reverseString("hello");