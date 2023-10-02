// .filter]
console.log([1,-3,5].filter((value, index) => {
  /*
  if (value >= 0) {
    return true
  } else{
    return false
  }
  */
//  does the same thing
  return value >= 0
}));




// .map
// creates a new array and add returned values
console.log([1,1,3].map((value,index) => {
  return value * value;
}));

// as we are not using the index, we can just make it shorter
console.log([1,1,3].map( value =>  value * value));

// closure feature
// if a function has access to a value , it will always have the access to the value


