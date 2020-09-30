const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date && !isNaN(date)) {

    const earlySpring = 2;
    const earlySummer = 5;
    const earlyAutumn = 8;
    const earlyWinter = 11;

    if (date.getMonth() >= earlySpring && date.getMonth() < earlySummer) {
      return 'spring';
    } else if (date.getMonth() >= earlySummer && date.getMonth() < earlyAutumn) {
      return 'summer';
    } else if (date.getMonth() >= earlyAutumn && date.getMonth() < earlyWinter) {
      return 'autumn';
    } else return 'winter';
  } else throw new Error();



};
