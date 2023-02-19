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
       if(this.imageNumber === 0){
        return this.imageTotal-1;
       }
       return this.imageNumber-1;
    }

    getNextImageNumber(){
        return ((this.imageNumber+1)%this.imageTotal);
    }
};

export default GlobalVariables;