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

//new function called takeUntil 
//input - two parameters - array and callback
//return a slice of the array with elements taken from the beginning
//should keep going untill the callback returns a truthy value.

const takeUntil = function(array, callback) {
  let results = [];
  for(const element of array){
    //callback shoul run untill the condition is true.
    if(callback(element)){
     return results;
    }
    results.push(element)
  }
  return results;
};




//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);