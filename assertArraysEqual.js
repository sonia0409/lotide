// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} === ${expected}`);
};

module.exports = assertArraysEqual;