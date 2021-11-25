// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
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
    console.log(`\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`\u274C Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
};

//creat our own map function
// input - two arguments- array to map through and callback function.
//return a new array
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results1,['g','c',['t'],'m','t']);
assertArraysEqual(results1,['g','c','o','m','m']);



