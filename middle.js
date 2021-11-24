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
//create a new function- middle-input-array
//odd number of elements - return an arry of single element.
//for even return two elements
//conditions:
//array with one/two elements, return empty array.
//return an array with only middle element(s)-need an empty container
const middle = function(arr) {
let output = [];
const midIndex = arr.length / 2;
if(arr.length > 2){
  if(arr.length % 2 !== 0){
    output = arr.splice(midIndex,1)
  }else if(arr.length % 2 === 0){
    output = arr.splice(midIndex-1,2)
  }
}
console.log(output);
}



// TEST CODE
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1]) // => []
middle([1, 2]) // => []