import {
  stages,
   displayPoliceFile,
url
} from "./sharedFunctions.js";

{/* <input id="accusation" type="text" />
      <button id="submitAccusation">Make your accusation</button> */}

const accusationInput = document.querySelector("#accusation");

const submitAccusation = document.querySelector("#submitAccusation");

submitAccusation.addEventListener("click", function () {
    checkAnswer("damien", '../finalreveal.html')
})

function checkAnswer(answer, newUrl) {
    const accusation = accusationInput.value;
    if (accusation.trim().toLowerCase() === answer) {
        window.location.replace(newUrl);
    }
}

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");

const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});