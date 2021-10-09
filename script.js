var inputNum = document.querySelector("#txt-input");
var btnCheck = document.querySelector("#btn-check");
var outputNum = document.querySelector("#output");

btnCheck.addEventListener("click",isPrime)

function isPrime(number){
  var result = "";
  var num = Number(inputNum.value);
  if(num>=0){
    if(num ===0 || num===1){
    outputNum.textContent = "It's neither prime nor composite";
  }
    else if(num===2){
    outputNum.textContent = "Yes! it is a prime number";
  }
  else {
    for(var i= 2; i <= Math.sqrt(num); i++){  
    if(num % i ==0){
      outputNum.textContent = "No! it's not a prime number";  
      break;
    }else{
      outputNum.textContent ="Yes! it is a prime number";
    }
  }
  }

  }else{
    outputNum.textContent = "Please enter a valid number";
  }
  
}