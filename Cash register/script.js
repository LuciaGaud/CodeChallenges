let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const currencyNameMap = {
  PENNY: 'Pennies',
  NICKEL: 'Nickels',
  DIME: 'Dimes',
  QUARTER: 'Quarters',
  ONE: 'Ones',
  FIVE: 'Fives',
  TEN: 'Tens',
  TWENTY: 'Twenties',
  'ONE HUNDRED': 'Hundreds'
};

const currencyValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.10,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  'ONE HUNDRED': 100 
}

console.log("cid 1,0"+cid[1][0])
console.log(cid
  .reverse().map(el=>  `${el[0]} `))
  //reduce((el,acc)=> { console.log(``); return acc+": $ \n" + el[[0]]},"iniziale "))
  console.log("prima del reduce"+cid
    .reverse().reduce((acc,el)=>  acc+el[0],""))



const calculate = (price, cid, cash)=>{


return (newcid,changeDue, cidStatus)
}
const test2 =[0,2,3]
const cashInputElement = document.getElementById("cash")

const statusHtml = document.getElementById("status");
const purchaseBtn = document.getElementById("purchase-btn")


const test = document.getElementById("test")
const cidElement = document.getElementById("cid-element")
const displayChangeDue =document.getElementById(`change-due`);
cidElement.innerHTML = cid
.reduce((acc,el)=> acc+ `${currencyNameMap[el[0]]}: $ ${+el[1]}<br>`,"")

purchaseBtn.addEventListener("click",() => { // console.log(`ho submittato e cashInput is ${cashInput.value}`);
 let status = "OPEN"
 let reply =""
const cashInput = cashInputElement.value;
let change = (cashInput - price).toFixed(2) ;

const totalCashFunction = ()=> cid.reduce( (acc,el)=> el[1]+acc,0).toFixed(2)
const totalCash=totalCashFunction()
console.log(`total money in the cid${totalCash} and chanhe is ${change} change > totalCash: ${change>totalCash}`)
if(Number(change)>Number(totalCash) ){
displayChangeDue.innerText="Status: INSUFFICIENT_FUNDS"
return
}

if (cashInput<price){
  window.alert("Customer does not have enough money to purchase the item");
  return
} 
if(cashInput==price){
displayChangeDue.innerText = "No change due - customer paid with exact cash"
return
} //starts the else when a change is due
 
 
  reply = cid.reverse().reduce((acc,el)=>{
    let maxCoin =Math.floor(change/currencyValue[el[0]]);
    console.log("change is",change)
    let amount = Math.min((maxCoin*currencyValue[el[0]]),el[1])

  
    if (amount===0){
      return acc;
    } else {
      
      el[1]=el[1]-amount;
      change = (change -amount).toFixed(2);
      return acc+ `${el[0]}: $${amount} `
  }},"")
if( Number(change)>0){
  displayChangeDue.innerText="Status: INSUFFICIENT_FUNDS"
return
}

if (totalCashFunction()==0 ){
 
  status ="CLOSED"
}

displayChangeDue.innerHTML =`Status: ${status} ${reply}`


  })
  
