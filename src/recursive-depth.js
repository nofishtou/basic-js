module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 0;

        arr.forEach((item) => {
            if(Array.isArray(item)){
                let tempCounter = this.calculateDepth(item)
                if(counter < tempCounter) {
                    counter = tempCounter
                }        
            }
        })
        
        counter +=1
        return counter
    }
};