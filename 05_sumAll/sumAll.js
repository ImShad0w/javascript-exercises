const sumAll = function (startNum, endNum) {
  let sumResult = 0;
  //Return error if the numbers are negative
  if (startNum < 0) {
    return "ERROR";
  }
  //Return error if the values are not numbers
  if (typeof startNum === "string" || typeof endNum === "string") {
    return "ERROR";
  }

  //If the first number is bigger switch places
  if (startNum > endNum) {
    const swap = startNum;
    startNum = endNum;
    endNum = swap;
  }

  //Sums all the numbers between the start and end numbers
  for (let num = startNum; num <= endNum; num++) {
    sumResult += num;
  }
  return sumResult;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
