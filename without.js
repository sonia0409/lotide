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
const without = function(input1, input2) {
  let newArr = [];
  //comparing the element of two arrays- such that element in input2 should be taken out of the input1
  for(let i = 0; i < input1.length; i++){
    let include = true;
    for(let j = 0; j < input2.length; j++) {
      if(input1[i] === input2[j]){
        include = false; 
      }
    }
    if(include){
      newArr.push(input1[i]);
    }
  }
console.log(newArr);
}




// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);