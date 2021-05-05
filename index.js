let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const converter = document.querySelector("#converter");
function registerUserValue(e) {
  console.log(e.target);
  userNumber = e.target.value;
}
function convert() {
  let = currentConverterValue;
  console.log(converter.value);
  //   let binary = "110100";
  switch (converter.value) {
    case "binary":
      currentConverterValue = parseInt(userNumber, 2);
      break;
    case "decimal":
      currentConverterValue = userNumber.toString(16);
      break;
    default:
      currentConverterValue = 1;
  }
  result.innerHTML = `${currentConverterValue * parseInt(userNumber)}`;
}
// console.log(convert);

converter.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
