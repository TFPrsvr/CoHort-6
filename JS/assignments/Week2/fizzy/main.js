/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// need function
// input & output
// take in number
// need condition (if num divis by 3 return fizz if by 5 return buzz if both return fizz buzz)

function fizzy(n){
  if (n % 3 === 0 && n % 5 === 0){

    return "FizzBuzz"
  
  } else if ( n % 3 === 0){
  
    return "Fizz"
 
  } else if ( n % 5 === 0){
 
    return "Buzz"
 
  } else {
 
    return n 
 }
  }


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
