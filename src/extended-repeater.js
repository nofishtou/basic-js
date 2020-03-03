module.exports = function repeater(str, options) {
    let result = '';
    let addition = '';

    if(options.addition !== undefined){
        if( options.additionRepeatTimes === undefined || 0) {
            addition +=options.addition + '';
        } else {
            for(let i = 0; i < options.additionRepeatTimes; i++) {
                addition +=options.addition + '';
                if(options.additionSeparator !== undefined){
                    if(i !== options.additionRepeatTimes - 1){
                        addition += options.additionSeparator
                    }
                }
            }        
        }
    }
    
    if( options.repeatTimes === undefined || 0) {
        result +=str + '';
        result +=addition
    } else {
        for(let i = 0; i < options.repeatTimes; i++) {
            result +=str + '';
            result +=addition
            if(i !== options.repeatTimes - 1) {
                if(options.separator === undefined) {
                    result += '+'
                } else {
                    result += options.separator
                } 
            } 
        }
    }

    return result
};
  