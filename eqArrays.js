
const eqArrays = function(arr1, arr2) {
  let output = true;
  //if the length of both arrays are not same return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //compare each element of both the arrays- iterate.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      output = false;
    }
  }
  return output;
};
module.exports = eqArrays;
