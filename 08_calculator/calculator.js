const add = function(a, b) {
  let sum = a + b

  return sum
};

const subtract = function(a, b) {
  let result = a - b;
  return result

};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }
  return mult
};

const power = function(num, power) {
  let pow = num ** power
  return pow;
};

const factorial = function(a) {
  let result = a
  if (a === 0 || a === 1) {
    return 1;
  }
  while (a > 1) {
    a--;
    result *= a;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
