const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error();
  }
  
  let convertedArray = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]){
   case '--discard-next': 
      convertedArray[i] = undefined;
      if(i+1 < convertedArray.length) {
        convertedArray[i+1] = undefined;
      }
      break

    case '--discard-prev': 
      convertedArray[i]= undefined;
      if(i-1 > 0) {
        convertedArray[i-1] =undefined;
      }
      break

    case '--double-next' :
      if(i+1 < convertedArray.length) {
        convertedArray[i] = convertedArray[i+1];
      } else {
        convertedArray[i] = undefined;
      }
      break

    case '--double-prev' :
      if(i-1 > 0) {
        convertedArray[i] = convertedArray[i-1];
      } else {
        convertedArray[i] = undefined;
      }
      break
    } 
  
    }
  
    for(let i=0;i<convertedArray.length;i++) {
      if(convertedArray[i] === undefined) {
        convertedArray.splice(i,1);
        i--;
      }
    }
  return convertedArray;
};