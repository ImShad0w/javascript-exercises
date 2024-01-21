const removeFromArray = function (array, value) {
  //Gets the index of the specified value
  const index = array.indexOf(value);
  //Only splices the array when the value is found
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
let result = removeFromArray([1, 2, 3, 4, 5], 3, 4);
console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
