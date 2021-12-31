import {
  stages,
  
  displayPoliceFile,
  makePictureBigger,

} from "./sharedFunctions.js";


const selectHint = document.querySelector("#selectPasswordHint");
const passwordHint = document.querySelector("#passwordHint");

selectHint.addEventListener("click", function () {
    makePictureBigger(passwordHint);
})

const password = document.querySelector("#passwordInput");
password.addEventListener("keyup", function () {
    checkPassword("fireflynovember1986", "../inalyssaslaptop.html");
})

function checkPassword(answer, newUrl) {
    if (password.value === answer) {
         window.location.replace(newUrl);
    }
}

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});