import GlobalVariables from "./GlobalVariables";
import navigationHandler from "./NavigationHandler";

const slideLeftButton = document.querySelector(".slide-left-button");
const slideRightButton = document.querySelector(".slide-right-button");
const navigationSlideRightButton = document.querySelector(
  ".navigation.slide-right-button"
);
const navigationSlideLeftButton = document.querySelector(
  ".navigation.slide-left-button"
);
const navigationImg = document.querySelector(".image.small");
const globalVariables = new GlobalVariables();

const showNextImage = function () {
  const currImg = document.querySelector(
    `.slide#i${globalVariables.getImageNumber()}`
  );
  const nextImgNumber = globalVariables.getNextImageNumber();
  const nextImg = document.querySelector(`.slide#i${nextImgNumber}`);
  currImg.classList.add("hidden");
  nextImg.classList.remove("hidden");

  globalVariables.setImageNumber(nextImgNumber);
  navigationHandler(globalVariables);
};

const showPrevImage = function () {
  const currImg = document.querySelector(
    `#i${globalVariables.getImageNumber()}`
  );
  const prevImgNumber = globalVariables.getPrevImageNumber();
  const prevImg = document.querySelector(`#i${prevImgNumber}`);
  currImg.classList.add("hidden");
  prevImg.classList.remove("hidden");

  globalVariables.setImageNumber(prevImgNumber);
  navigationHandler(globalVariables);
};

const keyDownHandler = function (event) {
  if (event.keyCode === 39) {
    showNextImage();
  } else if (event.keyCode === 37) {
    showPrevImage();
  }
};

const imageSliderHandler = function (event) {
  if (event.target.classList.contains("slide-left-button")) {
    showPrevImage();
  } else {
    showNextImage();
  }
};

const showImage = function(imageId){
  const imageNum = imageId.split('i');
  const currImage = globalVariables.getImageNumber();
  const currImageDiv = document.querySelector(`.slide#i${currImage}`);
  const newImageDiv = document.querySelector(`.slide#${imageId}`);

  if(!currImageDiv.classList.contains("hidden")){
    currImageDiv.classList.add("hidden");
  }
  if(newImageDiv.classList.contains("hidden")){
    newImageDiv.classList.remove("hidden");
  }

  globalVariables.setImageNumber(imageNum[1]);
  navigationHandler(globalVariables);

}

const navigationClickHandler = function(event){
  const imageId = event.target.closest("img.navigation").getAttribute("id");
  showImage(imageId);
}

slideLeftButton.addEventListener("click", imageSliderHandler);
slideRightButton.addEventListener("click", imageSliderHandler);
navigationSlideLeftButton.addEventListener("click", imageSliderHandler);
navigationSlideRightButton.addEventListener("click", imageSliderHandler);
window.addEventListener("keydown", keyDownHandler);
navigationImg.addEventListener("click",navigationClickHandler);