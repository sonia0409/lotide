// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
};
const eqArrays = function(arr1, arr2) {
  let output = true;
  //compare each element of both the arrays- iterate.
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      output = false;
    }
  }
return output;
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", ["2", "3"]], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 