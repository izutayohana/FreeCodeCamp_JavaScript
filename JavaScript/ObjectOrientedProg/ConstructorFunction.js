function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }

    let hound = new Dog("Lilo", "White with black dots");
    console.log(hound instanceof Dog);

    let ownProps = [];

    for (property in hound){
        if (hound.hasOwnProperty(property)){
            ownProps.push(property)
        }
    }
    
console.log(ownProps);
