// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed ${actual} === ${expected}`);
  } else console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
};
//create function named findKeyByValue- input object and value
// retun the corresponding key to the given value
const findKeyByValue = function(obj, value){
  //array of the keys Object.keys;
const keys = Object.keys(obj);
console.log(keys)
//iterate keys and match with value in the object
for(const key of keys){
  if(obj[key] === value){
    return key;
  }
}
}

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);