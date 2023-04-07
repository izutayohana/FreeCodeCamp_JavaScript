let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    //we can use the hasOwnProperty or the 'Something' in object
    //return userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan') 
  
        return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;
  }
  
  console.log(isEveryoneHere(users));