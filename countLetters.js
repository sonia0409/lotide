// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
};
const countLetters = function(sentence){
  //return an object with the chacter being a key and the number of occurance being the value
  //create an object that return each of the letter
  let output = {}
  let regExp = /\w/gi
  const char = sentence.replace(" ", "").match(regExp);
  console.log(char);
  for(let element of char){
    if(output[element]){
      output[element] += 1;
    } else{
      output[element] = 1;
    }
  }
  console.log(output);
}

// TEST CODE
/* countLetters("Lighthouse Labs")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual('A', 'a'); */