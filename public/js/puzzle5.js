import {
  stages,
  rotateDigits,
  displayPoliceFile,
  makePictureBigger,
  makeLockBigger,
  closeBiggerItem,
  submitRightAnswer,
} from "./sharedFunctions.js";

const secretDiary = document.querySelector(".puzzleImage");

const diaryCode = document.querySelector(".secretDiaryCode");
const diaryClose = document.querySelector(".diaryClose");

secretDiary.addEventListener("click", function () {
  makeLockBigger(diaryCode);
});

diaryClose.addEventListener("click", function () {
  closeBiggerItem(diaryCode);
});

const diaryButton1 = document.querySelector(".diaryFirst");
const diaryButton2 = document.querySelector(".diarySecond");
const diaryButton3 = document.querySelector(".diaryThird");

const diaryUnlock = document.querySelector(".diaryUnlock");

const diaryButtons = [
  diaryButton1,
  diaryButton2,
  diaryButton3,

];

diaryButtons.forEach((button) => {
  button.addEventListener("click", rotateDigits);
});

diaryUnlock.addEventListener("click", function () {
  submitRightAnswer(diaryButtons, "319", "../carolynsclue.html");
});

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
