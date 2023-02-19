class GlobalVariables {
  constructor() {
    this.imageNumber = 1;
    this.navigationLeft = 0;
    this.navigationRight = 3;
    this.navigationArr = [1, 2, 3, 4];
    this.imageTotal = 18;
  }

  getNavigationArr() {
    return this.navigationArr;
  }

  navigationLeftShift() {
    for (let i = 0; i < this.navigationArr.length; i += 1) {
      this.navigationArr[i] = this.prevOf(this.navigationArr[i]);
    }
  }

  navigationRightShift() {
    for (let i = 0; i < this.navigationArr.length; i += 1) {
      this.navigationArr[i] = this.nextOf(this.navigationArr[i]);
    }
  }

  prevOf(numTemp) {
    const num = numTemp * 1;
    if (num === 0) {
      return this.imageTotal - 1;
    }
    return num - 1;
  }

  nextOf(numTemp) {
    const num = numTemp * 1;
    if (num === this.imageTotal - 1) {
      return 0;
    }
    return num + 1;
  }

  generateNavigationArr() {
    this.navigationArr[0] = this.imageNumber * 1;
    this.navigationArr[1] = this.nextOf(this.navigationArr[0]);
    this.navigationArr[2] = this.nextOf(this.navigationArr[1]);
    this.navigationArr[3] = this.nextOf(this.navigationArr[2]);
  }

  getImageNumber() {
    return this.imageNumber;
  }

  getImageTotal() {
    return this.imageTotal;
  }

  setImageNumber(num) {
    this.imageNumber = num;
  }

  getPrevImageNumber() {
    const num = this.imageNumber * 1;
    const total = this.imageTotal * 1;
    if (num === 0) {
      return total - 1;
    }
    return num - 1;
  }

  getNextImageNumber() {
    const num = this.imageNumber * 1;
    const total = this.imageTotal * 1;
    if (num === total - 1) {
      return 0;
    }
    return num + 1;
  }

  getNavigationLeft() {
    return this.navigationLeft;
  }

  getNavigationRight() {
    return this.navigationRight;
  }

  setNavigationLeft(num) {
    this.navigationLeft = num;
  }

  setNavigationRight(num) {
    this.navigationRight = num;
  }

  navigationNext() {
    if (this.navigationLeft === this.imageTotal - 1) {
      this.navigationLeft = 0;
    } else {
      this.navigationLeft += 1;
    }
    if (this.navigationRight === this.imageTotal - 1) {
      this.navigationRight = 0;
    } else {
      this.navigationRight += 1;
    }
  }

  navigationPrev() {
    if (this.navigationLeft === 0) {
      this.navigationLeft = this.imageTotal - 1;
    } else {
      this.navigationLeft -= 1;
    }
    if (this.navigationRight === 0) {
      this.navigationRight = this.imageTotal - 1;
    } else {
      this.navigationRight -= 1;
    }
  }
}

export default GlobalVariables;
