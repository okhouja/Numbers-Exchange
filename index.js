let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const converter = document.querySelector("#converter");
function registerUserValue(e) {
  console.log(e.target);
  userNumber = e.target.value;
  convert();
}
function convert() {
  let currentConverterValue;

  console.log(converter.value);
  console.log(userNumber);
  switch (converter.value) {
    case "binary":
      currentConverterValue = parseInt(userNumber).toString(2);
      break;
    case "hexa":
      currentConverterValue = parseInt(userNumber).toString(16);
      break;
    default:
      currentConverterValue = 1;
  }
  result.innerHTML = currentConverterValue;
}
// console.log(convert);

converter.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
