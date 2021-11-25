// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let output = true;
  if(actual.length !== expected.length){
    return false;
  }
  //compare each element of both the arrays- iterate.
  for(let i = 0; i < actual.length; i++){
    if(actual[i] !== expected[i]){
      output = false;
    }
  }
  if (output) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} === ${expected}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); 