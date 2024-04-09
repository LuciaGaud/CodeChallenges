
const btn = document.getElementById('check-btn')
const resultText = document.getElementById('result');
const checkPalindrome = ()=>{
  const textToCheck = document.querySelectorAll('input[type=text]')[0].value; // it must be inside the function otherwise at the beginning it will be empty
  console.log(`nel texttocheck ce ${textToCheck}`);
  if (textToCheck === '') {
  alert('Please input a value');

  return;
  }
  let manipulatedText = textToCheck
  .toLowerCase()
  .replace(/[^a-zA-Z0-9]/gi ,'');
  console.log(manipulatedText);
  let isPal = true;
  let i=0;
  while(i<=(manipulatedText.length/2)){
    if(manipulatedText[i]!==manipulatedText[manipulatedText.length-1-i]){
      isPal =false;
      break;
    }
    i++;
  }
  console.log(`La consizione e' ${isPal}`);
  resultText.innerText = (isPal == true) ? `${textToCheck} is a palindrome` : `${textToCheck} is not a palindrome`
  document.querySelectorAll('input[type=text]')[0].value='';
}

btn.addEventListener("click",checkPalindrome)