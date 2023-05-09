function checkCashRegister(price, cash, cid) {
    let change = {"status": "OPEN", "change": []};
    let changevalue = cash - price;
    let reversed = cid.reverse();
    let result
    let amount = {
     "ONE HUNDRED": 100,
     "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    }
    for (const key in amount){
         for (let i = 0; i < reversed.length; i++){
          if (changevalue - amount[key] > 0 && key == reversed[i][0] && changevalue/amount[key] >= 1){
    
           let times1 = reversed[i][1]/amount[key]
           let times2 = Math.floor(changevalue/amount[key])
           result = times1 - times2
           if (result > 0) {
             let value = [key, reversed[i][1] - result*amount[key]]
             change["change"].push(value)
             changevalue -= (reversed[i][1] - result*amount[key]) 
           } else {
             if(reversed[i][1] > 0){
             let value = [key, reversed[i][1]]
             change["change"].push(value)
          changevalue = changevalue - (times2 - times1) }
           }
           } 
         } 
       }
     
      if(changevalue > 0){
         change["status"] = "INSUFFICIENT_FUNDS"
         change["change"] = []
       }
  return change;
   
  } 
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))