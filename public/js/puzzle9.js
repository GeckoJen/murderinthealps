import {
  stages,
    displayPoliceFile,
  makePictureBigger,
url
} from "./sharedFunctions.js";

// #clickOnZipFile {
//   grid-area: 2 / 1 / span 1 / span 1;
// }

// #passwordForZipFile {

const clickOnZipFile = document.querySelector("#clickOnZipFile");
const passwordForZipFile = document.querySelector("#passwordForZipFile");
const passwordInput = document.querySelector("#zipFilePasswordInput");

clickOnZipFile.addEventListener("click", function () { makePictureBigger(passwordForZipFile) })

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");

const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});

passwordInput.addEventListener("keyup", function () { checkAnswer("insideman", "../francescasclue.html"); })

function checkAnswer(answer, newUrl) {
    if (passwordInput.value === answer) {
        window.location.replace(newUrl);
    }
}