const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members){
  
  let arr = [];

  for(let i = 0; i< members.length; i++){
    
    if(typeof members[i] === 'string'){
      members[i] = members[i].trim().split("");
 
      arr.push(members[i][0].toUpperCase());      
    } 
  }
  
  return arr.sort().join("");
} else return false
};
