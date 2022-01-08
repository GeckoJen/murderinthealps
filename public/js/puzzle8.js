import {
  makePictureBigger,
  closeBiggerItem,
  
} from "./sharedFunctions.js";

const encryptionAppButton = document.querySelector("#encryptionAppButton");
const encryptionLaptop = document.querySelector("#encryptionApp");
const encryptionInput = document.querySelector("#inputMessage");
const encryptButton = document.querySelector("#encryptButton");
const decryptButton = document.querySelector("#decryptButton");
const revealMessage = document.querySelector("#revealMessage");
const newMessage = document.querySelector("#newMessage");
const closeMessage = document.querySelector("#closeMessage");

let message;

encryptionAppButton.addEventListener("click", function () {
    makePictureBigger(encryptionLaptop);
    makePictureBigger(encryptionInput);
    makePictureBigger(encryptButton);
    makePictureBigger(decryptButton);
})

encryptButton.addEventListener("click", encryptMessage);
decryptButton.addEventListener("click", decryptMessage);

closeMessage.addEventListener("click", function () {
    closeBiggerItem(revealMessage);
    encryptionInput.value = '';
})

function encryptMessage() {
    message = encryptionInput.value;
      const output1 = caesarCipher(message, 8);
      const output2 = reverseCipher(output1);
    const output3 = symbolCipher(output2);
    encryptionInput.value = "";
    makePictureBigger(revealMessage);  
    newMessage.innerText = output3;
}

function decryptMessage() {
    message = encryptionInput.value;
  const decode1 = symbolCipher(message);
  const decode2 = reverseCipher(decode1);
    const decode3 = caesarCipher(decode2, -8);
    encryptionInput.value = "";
  makePictureBigger(revealMessage);
  newMessage.innerText = decode3;
}

function caesarCipher(str, amount) {
   if (amount < 0) {
     return caesarCipher(str, amount + 26);
   }
    let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

function symbolCipher(str) {
  const symbols = {
    i: "!",
    "!": "i",
    l: "1",
    1: "l",
    s: "$",
    $: "s",
    o: "0",
    0: "o",
    a: "@",
    "@": "a",
    e: "3",
    3: "e",
    b: "6",
    6: "b",
  };

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char];
    } else {
      output += char;
    }
  }
  return output;
};

function reverseCipher(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
};

const decodeInput = document.querySelector("#decodedMessage");
const submitButton = document.querySelector("#submitAnswerButton");
const finalSection = document.querySelector("#finalSection")

submitButton.addEventListener("click", function () {
    checkAnswer("francesca is busy watching films tonight. meet me in the sauna at 10pm. neddy.")
});

function checkAnswer(answer) {
    const decodedMessage = decodeInput.value.trim().toLowerCase();
    console.log(decodeInput.value);
    console.log(decodedMessage);
    if (decodedMessage === answer) {
        makePictureBigger(finalSection)
    }

}