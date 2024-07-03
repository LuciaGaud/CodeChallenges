let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

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
const cashInputElement = document.getElementById("cash-input")

const statusHtml = document.getElementById("status");
const purchaseBtn = document.getElementById("purchase-btn")


const test = document.getElementById("test")
const cidElement = document.getElementById("cid-element")
const changeDue =document.getElementById(`change-due`);
cidElement.innerHTML = cid
.reduce((acc,el)=> acc+ `${currencyNameMap[el[0]]}: $ ${+el[1]}<br>`,"")

purchaseBtn.addEventListener("click",() => { // console.log(`ho submittato e cashInput is ${cashInput.value}`);
 let status = "OPEN"
 let reply =""
 let change =0;
const cashInput = cashInputElement.value;
const totalCash = cid.reduce( (acc,el)=> el[1]+acc,0).toFixed(2)
console.log(`total money in the cid${totalCash}`)
if (cashInput<price){
  window.alert("Customer does not have enough money to purchase the item");
} else if(cashInput===price){
changeDue.innerText = "No change due - customer paid with exact cash"
} else{  //starts the else when a change is due

  change = cashInput - price 
  reply = cid.reverse().reduce((acc,el)=>{
    let maxCoin =Math.floor(change/currencyValue[el[0]]);
    if (maxCoin===0){
      return acc;
    } else{
      let amount = Math.min((maxCoin*currencyValue[el[0]]).toFixed(2),el[1])
      el[1]=el[1]-amount;
      change = change -amount;
      return  `${el[0]} $${amount} ` + acc
  }},"")

console.log(`${reply} and change is ${change.toFixed(2)}`)
}
if (change>0){
  status ="CLOSED"
}
changeDue.innerText =`Status: ${status} ${reply} `
  })
  
