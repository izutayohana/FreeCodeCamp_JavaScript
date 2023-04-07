//Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true.

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let counter = 0;
  for  (let user in usersObj) {
    console.log(user)
    for (let status in usersObj[user]) {
      console.log(usersObj[user][status])
      if (usersObj[user][status] == true) {
        counter += 1;
      }
    }
  } return counter;
    // Only change code above this line
  }
  
  console.log(countOnline(users));