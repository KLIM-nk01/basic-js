

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity !== undefined){
    if(typeof sampleActivity === 'string'){
     
     if(+sampleActivity){
       sampleActivity = +sampleActivity;
      if(sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY){
        let k = 0.693 / HALF_LIFE_PERIOD;
      let t = Math.log(MODERN_ACTIVITY/sampleActivity) / k;
      return Math.ceil(t);         
      }       
     } else return false    
    }
  } return false;
};
