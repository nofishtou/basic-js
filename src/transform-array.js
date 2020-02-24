module.exports = function transform(arr) {
      if(typeof(arr) === 'object' && arr !== []){
        const result = []
        let push = true
  
        arr.forEach((item, index, array) => {
          if(push) {
            if(item === '--discard-next') {
              if(index !== array.length - 1){
                push = false
              }  
            } else if (item === '--discard-prev') {            
              if(index !== 0){
                result.splice(result.length -1, 1)
              }
            } else if(item === '--double-next') {
              if(index !== array.length - 1) {
                  result.push(array[index +1])
              }    
            } else if(item === '--double-prev') {
              if(index !== 0){
                result.push(array[index - 1])
              } 
            } else {
              return result.push(item)
            }
          } else {
            push = true;
          }
        })
        return result
      }
    throw 'Not array';
    // remove line with error and write your code here
};
