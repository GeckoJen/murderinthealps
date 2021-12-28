import { stages, displayPoliceFile } from "./sharedFunctions.js";

const answerText = document.querySelector(".answer");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", verifyAnswer);

function verifyAnswer() {
  const answer = answerText.value.trim().toLowerCase();
  console.log(answer);
  if (answer === "8" || answer === "size 8" || answer === "eight") {
    window.location.replace("../interviewingsuspects.html");
  }
}

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");
const url = "";
const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
