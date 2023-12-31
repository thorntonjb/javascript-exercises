const add = function(...args) {
    let total = 0;
    for (const arg of args)
      total += arg;

    return total;
};

const subtract = function(first, second, ...args) {
    let total = first - second;
    for (const arg of args) {
      total -= arg
    }

    return total;
};

const sum = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }

    return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }

    return total;
};

const power = function(base, power) {
	  let total = base;
    for (let i = 0; i < power - 1; i++)
    {
      total *= base;
    }

    return total;
};

const factorial = function(base) {
    if (base == 0)
      return 1;
    if (base == 1)
      return 1;

    let array = [];
    let total = 1;
    for (let i = 1; i < base + 1; i++) {
      array[i] = i;
      total *= i;
    }

    return total;
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
