// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  let output = true;
  //compare each element of both the arrays- iterate.
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      output = false;
    }
  }
  if (output) {
    console.log(`\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else console.log(`\u274C Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); 