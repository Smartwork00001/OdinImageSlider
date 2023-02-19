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

const showNextImage = function(){
    const currImg = document.querySelector(`#i${globalVariables.getImageNumber()}`);
    const nextImgNumber = globalVariables.getNextImageNumber();
    const nextImg = document.querySelector(`#i${nextImgNumber}`);
    currImg.classList.add("hidden");
    nextImg.classList.remove("hidden");
    globalVariables.setImageNumber(nextImgNumber);
}

const showPrevImage = function(){
    const currImg = document.querySelector(`#i${globalVariables.getImageNumber()}`);
    const prevImgNumber = globalVariables.getPrevImageNumber();
    const prevImg = document.querySelector(`#i${prevImgNumber}`);
    currImg.classList.add("hidden");
    prevImg.classList.remove("hidden");
    globalVariables.setImageNumber(prevImgNumber);
}

const keyDownHandler = function(event){
    if(event.keyCode === 39){
        showNextImage();
    }else if(event.keyCode === 37){
        showPrevImage();
    }
}

const imageSliderHandler = function (event) {
  if (event.target.classList.contains("slide-left-button")) {
   showPrevImage();
  } else {
    showNextImage();
  }
};

slideLeftButton.addEventListener("click", imageSliderHandler);
slideRightButton.addEventListener("click", imageSliderHandler);
navigationSlideLeftButton.addEventListener("click", imageSliderHandler);
navigationSlideRightButton.addEventListener("click", imageSliderHandler);
window.addEventListener('keydown',keyDownHandler);
