const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) === 'string' && 0 < parseFloat(sampleActivity) && parseFloat(sampleActivity) < 15){
    const k = 0.693/ HALF_LIFE_PERIOD 
    let result = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k) 
    return result
  } else {
    return false
  }

  // throw 'Not implemented';
  // remove line with error and write your code here
};
