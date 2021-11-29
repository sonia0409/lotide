// FUNCTION IMPLEMENTATION
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
return output;
}

module.exports = middle;

