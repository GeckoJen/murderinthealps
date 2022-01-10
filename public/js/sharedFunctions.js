export function rotateDigits(e) {
  if (e.target.innerText === "9") {
    e.target.innerText = "0";
  } else {
    e.target.innerText++;
  }
}

export const url = "window.location.origin";

export const stages = {
  "/summonedtomurder.html": 1,
  "/murderscene.html": 2,
  "/interviewingsuspects.html": 3,
  "/interviewingbrendan.html": 4,
  "/interviewingcarolyn.html": 5,
  "/interviewingdamien.html": 6,
  "/interviewingedmund.html": 7,
  "/interviewingfrancesca.html": 8,
  "/francescasclue.html": 9,
};

export async function displayPoliceFile(
  policeFile,
  evidenceTitle,
  evidenceTable,
  url,
  stages
) {
  if (evidenceTitle.innerText === "Click to view evidence") {
    policeFile.style.minHeight = "100vh";
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

export function makePictureBigger(image) {
  image.style.display = "block";
}

export function closeBiggerItem(item) {
  item.style.display = "none";
}

export function makeLockBigger(lock) {
  lock.style.display = "grid";
}

export function submitRightAnswer(array, answer, newUrl) {
  const code = array.map((button) => {
    return button.innerText;
  });
  if (code.join("") === answer) {
    window.location.replace(newUrl);
  }
}
