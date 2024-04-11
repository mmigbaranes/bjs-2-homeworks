"use strict"
function solveEquation(a, b, c) {
  
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
      if(D < 0) 
  arr.push();
    if(D == 0) {
      arr.push(D = (-b / (2 * a)));
    } else if(D > 0){  
      
      let tmp = [];
    arr.push(tmp);
      tmp.push((-b + Math.sqrt(D)) / (2 * a)); 
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
    }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let perc = (percent / 12) / 100;
  let loanBody = amount - contribution;

  let amountMonths = loanBody * (perc + (perc / ((Math.pow((1 + perc), countMonths)) - 1)));
  return  (+(amountMonths * countMonths)).toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
// console.log(calculateTotalMortgage(0, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
// console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));