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
        if(this.imageNumber === this.imageTotal-1){
            return 0;
        }
        return this.imageNumber+1;
    }
};

export default GlobalVariables;