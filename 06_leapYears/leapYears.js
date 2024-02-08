const leapYears = function(year) {
  //If the year is divisible by 4
if (year % 4 === 0){
    //If the year is also divisible by 100 but not 400
    if (year % 100 === 0 && year % 400 !== 0){
      return false;
    }else{
      return true;
    }
    //If its not divisible by 4
  }else{
    return false;
  }
}
// Do not edit below this line
module.exports = leapYears;
