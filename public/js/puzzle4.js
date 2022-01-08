import {
  stages,
  rotateDigits,
  displayPoliceFile,
  makePictureBigger,
  makeLockBigger,
  closeBiggerItem,
  submitRightAnswer,
  url
} from "./sharedFunctions.js";

const skiPictureButton = document.querySelector("#skiPictureDiv");
const itineraryButton = document.querySelector("#itineraryDiv");
const skiLockerButton = document.querySelector("#skiLockerDiv");

const skiPicture = document.querySelector("#skiWallPhoto");
const itinerary = document.querySelector("#itinerary");

const locker = document.querySelector(".skiLockerCode");
const lockerClose = document.querySelector(".lockerClose");

skiPictureButton.addEventListener("click", function () {
  makePictureBigger(skiPicture);
});
skiPicture.addEventListener("click", function () {
  closeBiggerItem(skiPicture);
});

itineraryButton.addEventListener("click", function () {
  makePictureBigger(itinerary);
});
itinerary.addEventListener("click", function () {
  closeBiggerItem(itinerary);
});

skiLockerButton.addEventListener("click", function () {
  makeLockBigger(locker);
});

lockerClose.addEventListener("click", function () {
  closeBiggerItem(locker);
});

const lockerButton1 = document.querySelector(".lockerFirst");
const lockerButton2 = document.querySelector(".lockerSecond");
const lockerButton3 = document.querySelector(".lockerThird");
const lockerButton4 = document.querySelector(".lockerFourth");
const lockerButton5 = document.querySelector(".lockerFifth");
const lockerButton6 = document.querySelector(".lockerSixth");

const lockerButtonUnlock = document.querySelector(".lockerUnlock");

const lockerButtons = [
  lockerButton1,
  lockerButton2,
  lockerButton3,
  lockerButton4,
  lockerButton5,
  lockerButton6,
];

lockerButtons.forEach((button) => {
  button.addEventListener("click", rotateDigits);
});

lockerButtonUnlock.addEventListener("click", function () {
  submitRightAnswer(lockerButtons, "220758", "../brendansclue.html");
});

const policeFile = document.querySelector(".policeFile");
const evidenceTitle = document.querySelector(".evidenceTitle");

const evidenceTable = document.querySelector(".evidenceTable");

policeFile.addEventListener("click", function () {
  displayPoliceFile(policeFile, evidenceTitle, evidenceTable, url, stages);
});
