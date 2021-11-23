// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  return arr.splice(1);
};

// TEST CODE
assertEqual(tail([5, 6, 7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([]), []);
