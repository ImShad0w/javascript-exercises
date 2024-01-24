const removeFromArray = function (array, ...values) {
  //Loops through all of the items in the array
  values.forEach((value) => {
    //Sets the index of the value as the constant to find the value in the array
    const index = array.indexOf(value);
    if (index !== -1) {
      //Once it finds the matching value it will splice it
      array.splice(index, 1);
    }
  });
  //At the end it returns the array with the result
  return array;
};
let result = removeFromArray([1, 2, 3, 4, 5], 3, 4);
console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
