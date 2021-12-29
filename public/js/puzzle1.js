import {
  stages,
  rotateDigits,
  displayPoliceFile,
 
  makeLockBigger,
  closeBiggerItem,
  submitRightAnswer,
} from "./sharedFunctions.js";

const cableCarImage = document.querySelector("#cablecar");
const padlock = document.querySelector(".padlock");
const closeButton = document.querySelector(".close");

cableCarImage.addEventListener("click", function(){makeLockBigger(padlock)});


closeButton.addEventListener("click", function(){closeBiggerItem(padlock)});


const padlockButton1 = document.querySelector(".first");
const padlockButton2 = document.querySelector(".second");
const padlockButton3 = document.querySelector(".third");
const padlockButton4 = document.querySelector(".fourth");
const padlockButtonUnlock = document.querySelector(".unlock");

const padlockButtons = [
  padlockButton1,
  padlockButton2,
  padlockButton3,
  padlockButton4,
];

padlockButtons.forEach((button) => {
  button.addEventListener("click", rotateDigits);
});

padlockButtonUnlock.addEventListener("click", function () { submitRightAnswer (padlockButtons, "6369", '../murderscene.html')});

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
