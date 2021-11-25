// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
};
const eqArrays = function(arr1, arr2) {
  let output = true;
  if(arr1.length !== arr2.length){
    return false;
  }
  //compare each element of both the arrays- iterate.
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      output = false;
    }
  }
return output;
}
// eqObjects function - compare two objects
const eqObjects = function (object1, object2) {
  // two objects will be same if:
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let output = false;
  //same number of keys
  if (key1.length === key2.length) {
    //if the value of each key in object1 === the value for the same key in object2
    for (const key of key1) {
      //iterate - compare the key value in both the objects
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        console.log(object1[key],object2[key])
        output = eqArrays(object1[key],object2[key])
      }else if(object1[key] === object2[key]) {
        output = true;
      }
    } 
  }
  return output;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const key1 = Object.keys(actual);
  const key2 = Object.keys(expected);
  let output = false;
  //same number of keys
  if (key1.length === key2.length) {
    //if the value of each key in object1 === the value for the same key in object2
    for (const key of key1) {
      //iterate - compare the key value in both the objects
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        console.log(actual[key],expected[key])
        output = eqArrays(actual[key],expected[key])
      }else if(actual[key] === expected[key]) {
        output = true;
      }
    } 
  }
  if (output) {
    console.log(`\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false
assertObjectsEqual({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] })