let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const converter = document.querySelector("#converter");
function registerUserValue(e) {
  console.log(e.target);
  userNumber = e.target.value;
}
function convert() {
  let binary = "110100";
  let digit = parseInt(binary, 2);
  return digit;
}
console.log(convert);

converter.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
