let generateBtn = document.getElementById("generate-btn");
let outputOne = document.querySelector(".output-one");
let outputTwo = document.querySelector(".output-two");
let inputLength = document.querySelector(".input-length");
let allOutputs = document.querySelectorAll(".output-one, .output-two");
let inputNumbers = document.querySelector(".input-numbers");
let inputSymbols = document.querySelector(".input-symbols");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

generateBtn.addEventListener("click", function () {
  let password = "";
  let passwordTwo = "";
  let includeNumbers = inputNumbers.checked;
  let includeSymbols = inputSymbols.checked;

  for (let i = 0; i < inputLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);

    if (
      (!includeNumbers && /[0-9]/.test(characters[randomIndex])) ||
      (!includeSymbols &&
        /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(characters[randomIndex]))
    ) {
      i--;
      continue;
    }

    password += characters[randomIndex];
  }

  for (let i = 0; i < inputLength.value; i++) {
    let randomIndexTwo = Math.floor(Math.random() * characters.length);

    if (
      (!includeNumbers && /[0-9]/.test(characters[randomIndexTwo])) ||
      (!includeSymbols &&
        /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
          characters[randomIndexTwo]
        ))
    ) {
      i--;
      continue;
    }

    passwordTwo += characters[randomIndexTwo];
  }

  outputOne.textContent = password.toLocaleLowerCase();
  outputTwo.textContent = passwordTwo.toLocaleLowerCase();
});

// Copy on Click function
allOutputs.forEach(function (eachElement) {
  eachElement.addEventListener("click", function () {
    let range = document.createRange();

    // Select the text node within the <p> element
    range.selectNodeContents(this);

    // Create a selection
    let selection = window.getSelection();

    // Remove existing selections
    selection.removeAllRanges();

    // Add the range to the selection
    selection.addRange(range);

    // Execute copy command
    document.execCommand("copy");
  });
});
