//Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
//Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. 
//In JavaScript, all functions are first class functions.
//The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea,5);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 2);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);