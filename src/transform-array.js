module.exports = function transform(arr) {
    // if(typeof(arr) === 'object' && arr !== []){
    //     let mark = true
    //     let counter = 0
    //     const result = arr.reduce((res, item, index, array) => {
    //         if(mark){
    //             if(item === '--discard-next') {
    //                 mark = false;
    //                 counter += 2
    //                 return res
    //             }
    //             if(item === '--discard-prev'){      
    //                 res.splice(index - counter, 1)
    //                 counter +=2
    //                 return res
    //             }
    //             if(item === '--double-next'){
    //                 if(index !== array.length - 1){
    //                     res.push(array[index + 1]);
    //                     return res
    //                 }   
    //                 return res
    //             }
    //             if(item === '--double-prev'){
    //                 if(index !== 0){
    //                     res.push(array[index - 1]);
    //                     return res
    //                 }
    //                 return res
    //             }
    //             res.push(item)
    //             return res
    //         } else {
    //             mark = true;
    //             return res
    //         }
    //     }, []) 
    //     return result
    // } 
    if(typeof(arr) === 'object' && arr !== []){
        const result = [...arr]
        result.forEach((item, index, array) => {
            if(item === '--discard-next') {
                array.splice(index + 1, 1)
                array.splice(index, 1)
            }
            if(item === '--discard-prev'){
                array.splice(index, 1)
                array.splice(index - 1, 1)   
            }
            if(item === '--double-next'){
                if(index !== array.length - 1){
                    array.splice(index, 1, array[index + 1])
                } else {
                    array.splice(index, 1) 
                }   
            }
            if(item === '--double-prev'){
                if(index !== 0){
                    array.splice(index, 1, array[index - 1])
                } else {
                    array.splice(index, 1) 
                }
            }
            return item
        })
        return result
    }
    throw 'Not array';
    // remove line with error and write your code here
};
