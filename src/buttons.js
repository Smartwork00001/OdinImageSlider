import GlobalVariables from "./GlobalVariables";

const slideLeftButton = document.querySelector(".slide-left-button");
const slideRightButton = document.querySelector(".slide-right-button");
const navigationSlideRightButton = document.querySelector(
  ".navigation.slide-right-button"
);
const navigationSlideLeftButton = document.querySelector(
  ".navigation.slide-left-button"
);

const globalVariables = new GlobalVariables();

const imageSliderHandler = function (event) {
  const currImage = globalVariables.getImageNumber();
  const currImageImg = document.querySelector(`#i${currImage}`);
  currImageImg.classList.add("hidden");
  if (event.target.classList.contains("slide-left-button")) {
    const prevImage = globalVariables.getNextImageNumber();
    const prevImageImg = document.querySelector(`#i${prevImage}`);
    prevImageImg.classList.remove("hidden");
    globalVariables.setImageNumber(prevImage);
  } else {
    const nextImage = globalVariables.getNextImageNumber();
    const nextImageImg = document.querySelector(`#i${nextImage}`);
    nextImageImg.classList.remove("hidden");
    globalVariables.setImageNumber(nextImage);
  }
};

const navigationHandler = function (event) {
  console.log(event.target);
};

slideLeftButton.addEventListener("click", imageSliderHandler);
slideRightButton.addEventListener("click", imageSliderHandler);
navigationSlideLeftButton.addEventListener("click", navigationHandler);
navigationSlideRightButton.addEventListener("click", navigationHandler);
