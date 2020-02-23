module.exports = function countCats(...args) {
  let counter = 0
  args[0].forEach((item)=>{
    item.forEach((el) => {
      if(el === '^^'){
        counter +=1;
      }
    })
  })
  return counter
};
