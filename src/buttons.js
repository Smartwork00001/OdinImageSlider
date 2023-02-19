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

const navigationHandler = function () {
  let arr = globalVariables.getNavigationArr();
  const imageNumber = globalVariables.getImageNumber();
  let flag = false;
  arr.forEach((x) => {
    if (x === imageNumber) {
      flag = true;
    }
  });
  if (!flag) {
    globalVariables.generateNavigationArr(globalVariables.getImageNumber());
    arr = globalVariables.getNavigationArr();
    console.log(arr[0],arr[1],arr[2],arr[3]);
    for (let i = globalVariables.getImageTotal() - 1; i >= 0; i -= 1) {
      const div = document.querySelector(`.navigation#i${i}`);
      if (!div.classList.contains("hidden")) {
        div.classList.add("hidden");
      }
    }
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      const div = document.querySelector(`.navigation#i${arr[i]}`);
      if (div.classList.contains("hidden")) {
        div.classList.remove("hidden");
      }
    }
  }
};

const showNextImage = function () {
  const currImg = document.querySelector(
    `.slide#i${globalVariables.getImageNumber()}`
  );
  const nextImgNumber = globalVariables.getNextImageNumber();
  const nextImg = document.querySelector(`.slide#i${nextImgNumber}`);
  currImg.classList.add("hidden");
  nextImg.classList.remove("hidden");

  globalVariables.setImageNumber(nextImgNumber);
  navigationHandler();
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
  navigationHandler();
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

slideLeftButton.addEventListener("click", imageSliderHandler);
slideRightButton.addEventListener("click", imageSliderHandler);
navigationSlideLeftButton.addEventListener("click", imageSliderHandler);
navigationSlideRightButton.addEventListener("click", imageSliderHandler);
window.addEventListener("keydown", keyDownHandler);
