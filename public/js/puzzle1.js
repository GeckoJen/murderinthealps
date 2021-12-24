const cableCarImage = document.querySelector(".puzzleImage")
const padlock = document.querySelector(".padlock")
const closeButton = document.querySelector(".close");

cableCarImage.addEventListener("click", displayPadlock);

function displayPadlock() {
    padlock.style.display = "grid";
}

closeButton.addEventListener("click", closePadlock);

function closePadlock() {
    padlock.style.display = "none";
}

const padlockButton1 = document.querySelector(".first");
const padlockButton2 = document.querySelector(".second");
const padlockButton3 = document.querySelector(".third");
const padlockButton4 = document.querySelector(".fourth");
const padlockButtonUnlock = document.querySelector(".unlock");

const padlockButtons = [padlockButton1, padlockButton2, padlockButton3, padlockButton4];

padlockButtons.forEach(button => { button.addEventListener("click", rotateDigits) });

function rotateDigits(e) {
    if (e.target.innerText === '9') { e.target.innerText = '0' }
    else {
        e.target.innerText++
    }
}

padlockButtonUnlock.addEventListener("click", submitRightAnswer);

function submitRightAnswer() {
    const padlockCode = padlockButtons.map(button => { return button.innerText })
    console.log(padlockCode)
    const answer = "6369";
    if (padlockCode.join('') === answer) {
        console.log(true);
        window.location.replace("../puzzle2.html");
   }
}