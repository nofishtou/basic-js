module.exports = function createDreamTeam(arr) {
  

  if(Array.isArray(arr)){
    let result = '';
    arr.forEach((item) => {
      if(typeof(item) === 'string'){
        let tempStr = item.trim()
        tempStr = tempStr[0]
        if(tempStr.charCodeAt() >= 65 && tempStr.charCodeAt() <= 90 || tempStr.charCodeAt() >= 97 && tempStr.charCodeAt() <= 122) {
          result += tempStr.toUpperCase()
        }
      }
    })
    
    return result.split('').sort().join('')
  }
  
  return false
};