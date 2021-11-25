// FUNCTION IMPLEMENTATION
//assertArrays function
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
// eaArrays function
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

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
      } else{
        results[sentence[i]] = [i];
      }
      
    }
    }
    
  return results;
};



assertArraysEqual(letterPositions("hello").e, [1]);