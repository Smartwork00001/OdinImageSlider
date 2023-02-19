const setImage = (imageLoc) => {
  const image = document.querySelector(".image.big>img");
  image.setAttribute("src", imageLoc);
};

export default setImage;
