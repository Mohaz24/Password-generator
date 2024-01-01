import { characters, symbols, numbers, letters } from "./data.js";

const txtInput1 = document.getElementById("input");
const txtInput2 = document.getElementById("inputs");
const checkNum = document.getElementById("number");
const checkLetters = document.getElementById("letters");
const checkSymbols = document.getElementById("symbols");
const checkChars = document.getElementById("chars");
const range = document.getElementById("ranges");
const passwordLength = document.getElementById("password-strength");

document.getElementById("btn").addEventListener("click", generateRandomPassBtn);
document.addEventListener("change", selectedRadioValue);

range.addEventListener("change", generateMaxLength);

function generateRandomPassBtn() {
  warningMessage();

  txtInput1.value = ``;
  txtInput2.value = ``;

  if (checkChars.checked) {
    setRandomChars(characters);
  } else if (checkLetters.checked) {
    setRandomChars(letters);
  } else if (checkSymbols.checked) {
    setRandomChars(symbols);
  } else if (checkNum.checked) {
    setRandomChars(numbers);
  } else {
    return;
  }
}

function warningMessage() {
  if (
    !checkChars.checked &&
    !checkLetters.checked &&
    !checkSymbols.checked &&
    !checkNum.checked
  ) {
    alert("Select the boxes to generate password 😃");
  } else {
    return null;
  }
}

function generateMaxLength(e) {
  const length = document.getElementById("length");
  length.textContent = `Password length: `;
  length.textContent += e.target.value;
  txtInput1.value = ``;
  txtInput2.value = ``;

  changePasswordStrength();

  return length;
}

function changePasswordStrength() {
  if (range.value <= 5) {
    passwordLength.textContent = `Weak password!`;
    passwordLength.style.color = `red`;
  } else if (range.value <= 9) {
    passwordLength.textContent = `Good password!`;
    passwordLength.style.color = `lightgreen`;
  } else if (range.value >= 10) {
    passwordLength.textContent = `Strong password!`;
    passwordLength.style.color = `darkgreen`;
  }
}

function setRandomChars(value) {
  for (let n = 0; n < range.value; n++) {
    txtInput1.value += randomNumberGenerator(value);
    txtInput2.value += randomNumberGenerator(value);
  }
  return value;
}

function selectedRadioValue(e) {
  console.log(e.target.checked);
}

function randomNumberGenerator(number) {
  const randomNum1 = Math.floor(Math.random() * number.length);
  const randomNum2 = Math.floor(Math.random() * number.length);
  return number[randomNum1] && number[randomNum2];
}
