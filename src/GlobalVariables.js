class GlobalVariables{
    constructor(){
        this.imageNumber = 1;
        this.imageTotal = 18;
    }

    getImageNumber(){
        return this.imageNumber;
    }

    setImageNumber(num){
        this.imageNumber = num;
    }

    getPrevImageNumber(){
        return ((this.imageNumber-1)%this.imageTotal);
    }

    getNextImageNumber(){
        return ((this.imageNumber+1)%this.imageTotal);
    }
};

export default GlobalVariables;