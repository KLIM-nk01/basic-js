const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   
    let repeatTimes = options.repeatTimes;
   
    let addition =  String(options.addition);
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;

    let arrStr = [];
    let additionArr = [];

    

    str = String(str)
   let separator = options.separator;
    
    if(separator === undefined) separator = '+'
    
    if(additionSeparator === undefined) additionSeparator = '|'

    if(repeatTimes !== undefined){
      
     
        if(additionRepeatTimes !== undefined){
          
          for(let i = 0; i <= additionRepeatTimes - 1; i++){
              

                additionArr.push(addition)
                additionArr.push(additionSeparator)
        }
         additionArr.pop()
         additionArr = additionArr.join('')
        
        } 
          
            

            for(let j = 0; j <= repeatTimes-1; j++){

                arrStr.push(str)
                if(additionArr.length !== 0) arrStr.push(additionArr)
                arrStr.push(separator)

                
            }
            arrStr.pop()
            arrStr = arrStr.join('')
            return arrStr
    } else {
      arrStr.push(str)
      arrStr.push(addition)
      arrStr = arrStr.join('')
      return arrStr
    } 
    
        
}

