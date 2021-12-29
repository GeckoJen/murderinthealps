import {
  stages,
  displayPoliceFile,
  makePictureBigger,
  makeLockBigger,
  closeBiggerItem,
  submitRightAnswer,
} from "./sharedFunctions.js";

// click on picture of case to bring up clickable buttons, click to close
const gretaCase = document.querySelector("#gretaCase");
const gretaClickCase = document.querySelector(".gretaClickCase");
const closeButton = document.querySelector(".caseClose");

gretaCase.addEventListener("click", function () { makeLockBigger(gretaClickCase) });

closeButton.addEventListener("click", function(){closeBiggerItem(gretaClickCase)});


//click buttons to rotate through letters

const first = document.querySelector(".caseFirst");
const second = document.querySelector(".caseSecond");
const third = document.querySelector(".caseThird");
const fourth = document.querySelector(".caseFourth");
const fifth = document.querySelector(".caseFifth");
const sixth = document.querySelector(".caseSixth");
const seventh = document.querySelector(".caseSeventh");

const buttons = [first, second, third, fourth, fifth, sixth, seventh];

buttons.forEach((button) => {
  button.addEventListener("click", rotateLetters);
});

function rotateLetters(e) {
  let letters = [
    "A",
    "C",
    "E",
    "G",
    "I",
    "K",
    "N",
    "O",
    "Q",
    "S",
    "U",
    "W",
    "Y",
  ];

  let index = letters.findIndex((letter) => {
    return e.target.innerText === letter;
  });
  if (index === letters.length - 1) {
    e.target.innerText = letters[0];
  } else {
    e.target.innerText = letters[index + 1];
  }
}

// if answer correct go to next page

const caseUnlockButton = document.querySelector(".caseUnlock");

caseUnlockButton.addEventListener("click", function () { submitRightAnswer(buttons, "SNOWING", '../gretasclue.html') });



//show/hide polaroids

const gretaFolder = document.querySelector("#gretaFolder");
const gretaPolaroids = document.querySelector("#gretaPolaroids");

gretaFolder.addEventListener("click", function(){makePictureBigger(gretaPolaroids)});

gretaPolaroids.addEventListener("click", function(){closeBiggerItem(gretaPolaroids)});


// show/hide evidence file
const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
