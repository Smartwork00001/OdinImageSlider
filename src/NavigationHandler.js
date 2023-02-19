const navigationHandler = function (globalVariables) {
  let arr = globalVariables.getNavigationArr();
  const imageNumber = globalVariables.getImageNumber();
  let flag = false;
  arr.forEach((x) => {
    if (x === imageNumber) {
      flag = true;
    }
  });
  if (!flag) {
    globalVariables.generateNavigationArr();
    arr = globalVariables.getNavigationArr();
    console.log(arr[0], arr[1], arr[2], arr[3]);
    for (let i = globalVariables.getImageTotal() - 1; i >= 0; i -= 1) {
      const div = document.querySelector(`.navigation#i${i}`);
      if (!div.classList.contains("hidden")) {
        div.classList.add("hidden");
      }
      if (div.classList.contains("highlight")) {
        div.classList.remove("highlight");
      }
    }
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      const div = document.querySelector(`.navigation#i${arr[i]}`);
      if (div.classList.contains("hidden")) {
        div.classList.remove("hidden");
      }
    }
  }
  for (let i = globalVariables.getImageTotal() - 1; i >= 0; i -= 1) {
    const div = document.querySelector(`.navigation#i${i}`);
    if (div.classList.contains("highlight")) {
      div.classList.remove("highlight");
    }
  }
  const div = document.querySelector(
    `.navigation#i${globalVariables.getImageNumber()}`
  );
  if (!div.classList.contains("highlight")) {
    div.classList.add("highlight");
  }
};

export default navigationHandler;
