function telephoneCheck(str) {
  let test= false;
  const regex= new RegExp(/^((1\s){0,1}|1{0,1})(([0-9]{3})|([(][0-9]{3}[)]))[\s-]*[0-9]{3}[\s-]*[0-9]{4}$/); 
  if(regex.test(str)) return true;
  /*
  const regex2= new RegExp(/^(1\s){0,1}[0-9]{3}[\s-]*[0-9]{3}[\s-]*[0-9]{4}$/); 
  if(regex2.test(str)) return true;
  const regex3= new RegExp(/^(1){0,1}[(][0-9]{3}[)][\s-]*[0-9]{3}[\s-]*[0-9]{4}$/); 
  if(regex3.test(str)) return true; */
  return false;
}




function isEmpty() {
  const userInput = document.getElementById("user-input").value

  if (userInput === "") {
    alert("Please provide a phone number");
  }
  return;
}

function clearDiv() {
  console.log("test")
 const resultsDiv = document.getElementById("results-div")
 resultsDiv.innerText=""

 

  return;
}

function giveFeedback() {
 const userInput = document.getElementById("user-input").value
 const results = document.getElementById("results-div")
  console.log("test",userInput)
  if (telephoneCheck(userInput))
  {results.innerText = "Valid US number: "+userInput

  }else{
    results.innerText = "Invalid US number: "+userInput
  }

}


telephoneCheck("1 555 555 5555");
