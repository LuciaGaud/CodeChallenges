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
const changeDue =0;
cidElement.innerHTML = cid
.reduce((acc,el)=> acc+ `${currencyNameMap[el[0]]}: $ ${+el[1]}<br>`,"")
purchaseBtn.addEventListener("click",() => { // console.log(`ho submittato e cashInput is ${cashInput.value}`);
const cashInput = cashInputElement.value;
const totalCash = cid.reduce( (acc,el)=> el[1]+acc,0).toFixed(2)
console.log(`total money in the cid${totalCash}`)
  })
const updateStatus = (cid, status)=>{


  return
}