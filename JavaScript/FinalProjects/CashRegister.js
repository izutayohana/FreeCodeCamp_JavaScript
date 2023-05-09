function checkCashRegister(price, cash, cid) {
    let change = {"status": "OPEN", "change": []};
    let changevalue = cash - price;
    console.log(changevalue)
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
       if (changevalue - amount[key] >= 0){
         for (let i = 0; i < reversed.length; i++){
         if(key == reversed[i][0] && changevalue/amount[key] >= 1) {
           let times1 = reversed[i][1]/amount[key]
           let times2 = Math.floor(changevalue/amount[key])
           result = times1 - times2
           if (result >= 0) {
             let value = [key, reversed[i][1] - result*amount[key]]
             change["change"].push(value)
             
           } else {
           while (result >= 0 && times2 > 0){
             times2 -= 1;
           } let value = [key, reversed[i][1] - result*amount[key]]
             change["change"].push(value)
           }
           changevalue -= result*amount[key] 
           } 
         } 
       } if(change["change"] == []){
         change["status"] = "INSUFFICIENT_FUNDS"
       }
     }
  return change;
   
  } 
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));