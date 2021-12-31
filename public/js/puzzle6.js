import {
  stages,

  displayPoliceFile,
  makePictureBigger,
  makeLockBigger,
  closeBiggerItem,

} from "./sharedFunctions.js";

const cctvLock = document.querySelector(".cctvLock");
const cctvCodeReminder = document.querySelector(".cctvCodeReminder");
const codeReminderImg = document.querySelector("#cctvReminderImg");
const cctvDoor = document.querySelector(".cctvDoor");
const doorImg = document.querySelector("#cctvDoorImg");

cctvCodeReminder.addEventListener("click", function () {
  makePictureBigger(codeReminderImg);
});
codeReminderImg.addEventListener("click", function () {
  closeBiggerItem(codeReminderImg);
});

cctvDoor.addEventListener("click", function () {
  makePictureBigger(doorImg);
});
doorImg.addEventListener("click", function () {
  closeBiggerItem(doorImg);
});

const cctvCodePanel = document.querySelector(".CCTVpanel");
const cctvClose = document.querySelector(".cctvClose");

cctvLock.addEventListener("click", function () {
  makeLockBigger(cctvCodePanel);
});

cctvClose.addEventListener("click", function () {
  closeBiggerItem(cctvCodePanel);
  cctvAnswer = [];
});

const codeButtons = document.querySelectorAll(".padlockButton.key");
console.log(codeButtons);
codeButtons.forEach((button) => {
  button.addEventListener("click", makeCctvCode);
});

let cctvAnswer = [];

function makeCctvCode(e) {
  let digit = e.target.innerText;
  cctvAnswer.push(digit);
  console.log(cctvAnswer);
}

const cctvUnlock = document.querySelector(".cctvUnlock");

cctvUnlock.addEventListener("click", function () {
  checkRightAnswer(cctvAnswer, "CC149C0Y", "../inthecctvoffice.html");
});

function checkRightAnswer(array, answer, newUrl) {
  if (array.join("") === answer) {
    window.location.replace(newUrl);
  } else {
    cctvAnswer = [];
  }
}

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
