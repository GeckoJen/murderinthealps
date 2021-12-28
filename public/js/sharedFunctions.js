export function rotateDigits(e) {
  if (e.target.innerText === "9") {
    e.target.innerText = "0";
  } else {
    e.target.innerText++;
  }
}

export const stages = {
  "/summonedtomurder.html": 1,
  "/murderscene.html": 2,
  "/interviewingsuspects.html": 3,
};

export async function displayPoliceFile(
    policeFile,
    evidenceTitle,
  evidenceTable,
  url,
  stages
) {
  if (evidenceTitle.innerText === "Click to view evidence") {
    policeFile.style.minHeight = "50vh";
      policeFile.style.width = "100%";
      evidenceTitle.innerText = "Click to hide evidence";
    let stageNumber = stages[window.location.pathname];
    const response = await fetch(`${url}/files/${stageNumber}`);
    const { payload } = await response.json();
    payload.forEach(function (element) {
      renderEvidence(element, evidenceTable);
    });
  } else {
    policeFile.style.minHeight = "";
      policeFile.style.width = "";
      evidenceTitle.innerText = "Click to view evidence";
    while (evidenceTable.firstChild) {
      evidenceTable.removeChild(evidenceTable.firstChild);
    }
  }
}

function renderEvidence(element, evidenceTable) {
  const newRow = document.createElement("p");
  newRow.innerText = element.evidence;
  evidenceTable.appendChild(newRow);
}

