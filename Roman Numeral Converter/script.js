const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
];

const convert = () => {
    const numStr = document.getElementById("number").value;

    //console.log(`numStr is ${numStr}...`)
    let num = parseInt(numStr);
    console.log("num is", num);

    if (!isValid(num) || !num) {
        console.log("Please enter a valid number");
        return;
    }
    const arr = [];
    for (const rowNum of ref) {
        //console.log("rowNum is ",rowNum,"type of rowNum[1] is",typeof(rowNum[1]))
        while (rowNum[1] <= num) {
            if (num >= rowNum[1]) {
                arr.push(rowNum[0]);
                num -= rowNum[1];
            }
        }
    }
    console.log("the arr is", arr);
    output.innerText = arr.join("");
    return arr;
};


const isValid = (num) => {
    // console.log(`the type of num is${typeof(num)}`)

    if (num > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }
    if (num <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    }
    if (!num) {
        output.innerText = "Please enter a valid number";
        return false;
    }
    return true;
};

convertButton.addEventListener("click", convert);

form.addEventListener('submit', e => {
  convert()
  e.preventDefault();
  updateUI();
});