function checkCashRegister(price, cash, cid) {
  let change = {"status": "OPEN", "change": []};
  let changevalue = cash - price;
  let reversed = cid.slice(0);
  reversed.reverse();
  let reversed1 = [...cid];
  
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
        if (key == reversed[i][0] && changevalue/amount[key] >= 1){
  reversed[i][1] = reversed[i][1]/amount[key]
         let times2 = Math.floor(changevalue/amount[key])
         result = reversed[i][1] - times2
         if (result > 0) {
           let value 
          if (times2*amount[key] == 0.03){
            value = [key, 0.04]
          } else {
           value = [key, (times2*amount[key])]}
           change["change"].push(value)
           changevalue = changevalue - times2*amount[key]
           reversed[i][1] -= times2*amount[key]
         } else {
           if(reversed[i][1] > 0){
           let value = [key, reversed[i][1]*amount[key]]
           change["change"].push(value)
             changevalue = changevalue - reversed[i][1]*amount[key]
           reversed[i][1] = 0
      }
         }
         } 
       } 
     }
    
       let counter = 0;
 for (let j = 0; j < reversed.length; j++) {
   if (Math.floor(reversed[j][1]) == 0){
     counter++
   }
   }
   if (counter == reversed.length)
   {
     
     change["status"] = "CLOSED"
     change["change"] = cid.slice(0)
     change["change"][0] = ["PENNY", 0.5]
   }
 

    if(changevalue >= 0.01){
       change["status"] = "INSUFFICIENT_FUNDS"
       change["change"] = []
     }

return change;
 
} 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))