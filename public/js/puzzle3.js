import { stages, displayPoliceFile } from "./sharedFunctions.js";

// click on picture of case to bring up clickable buttons, click to close
const gretaCase = document.querySelector("#gretaCase");
const gretaClickCase = document.querySelector(".gretaClickCase");
const closeButton = document.querySelector(".caseClose")

gretaCase.addEventListener("click", displayGretaCase);

function displayGretaCase() {
    gretaClickCase.style.display = "grid";
}

closeButton.addEventListener("click", closeGretaCase);

function closeGretaCase() {
    gretaClickCase.style.display = "none";
}

//click buttons to rotate through letters

const first = document.querySelector(".caseFirst");
const second = document.querySelector(".caseSecond");
const third = document.querySelector(".caseThird");
const fourth = document.querySelector(".caseFourth");
const fifth = document.querySelector(".caseFifth");
const sixth = document.querySelector(".caseSixth");
const seventh = document.querySelector(".caseSeventh");

const buttons = [first, second, third, fourth, fifth, sixth, seventh];

buttons.forEach(button => {button.addEventListener("click", rotateLetters)})

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

const caseUnlockButton = document.querySelector(".caseUnlock")
    
caseUnlockButton.addEventListener("click", submitRightAnswer);

function submitRightAnswer() {
  const caseCode = buttons.map((button) => {
    return button.innerText;
  });
 
  const answer = "SNOWING";
  if (caseCode.join("") === answer) {
       window.location.replace("../gretasclue.html");
  }
}

//show/hide polaroids

const gretaFolder = document.querySelector("#gretaFolder");
const gretaPolaroids = document.querySelector("#gretaPolaroids");

gretaFolder.addEventListener("click", showPolaroids);

function showPolaroids() {
    gretaPolaroids.style.display = "block";
}

gretaPolaroids.addEventListener("click", hidePolaroids);

function hidePolaroids() {
    gretaPolaroids.style.display = "none";
}

// show/hide evidence file
const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
