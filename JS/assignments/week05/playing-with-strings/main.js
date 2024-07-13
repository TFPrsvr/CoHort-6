/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += 'x'
  }
  return newStr
}

function yellingChars(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i] + '!'
  }
  return newStr
}

function indexedChars(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += i + str[i]
  }
  return newStr
}

function numberedChars(str) {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    output += "(" + (i + 1) + ")" + str[i];
  }
  return output
}

function exclaim(str) {
  return str.replace(/[?.]/g, '!')
}

 
 function repeatIt(str, num){
  let repeatedStr = "";
  while (num > 0){
    repeatedStr += str;
    num--;
  } return repeatedStr;
 }


function truncate(str){
 
  let maxLength = 18
 if (str.length <= maxLength){
  return str
 } 
   return str.slice(0, maxLength-3) + '...' 
  }
console.log("I don't know what I'm doing")



function emailify(str) {
  let parts = str.split(' ');
  if (parts.length !== 2) {
    return 'Invalid'
  }
  let firstName = parts[0][0].toLowerCase();
  let lastName = parts[1].toLowerCase();
  let email = `${firstName}${lastName}.prsvr@gmail.com`
  return email
}


 function reverse(input){
  let result = []
  let split = input.split("")
  for (let i = 0; i < split.length; i++){
    result.unshift(split[i])   
  }
  return result.join("")
 }



 function onlyVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += str[i]
    }
  }
  return result
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
