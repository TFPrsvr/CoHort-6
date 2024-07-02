// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num) {
    if (num >= 25) {
        return 'You can do pretty much anything.'
    } else if (num <= 24 && num >= 18) {
        return 'You can vote but not rent a car.'
    }
    else if (num <= 17 && num >= 16) {
        return 'You can drive but not vote.'
    }
    else if (num < 16) {
        return "You can't drive."
    }
}


function oddIndices(arr){
    
    let newArr = []
    
    for (let i = 1; i < arr.length; i += 2){
        // console.log("i", i)
           newArr.push(arr[i])
    } 
    return newArr
}


// if ( i % 2 !== 0){newArr.push(arr[i])}**** another way to solve

// function oddIndices(arr){
//     let odds = []
//     for( let i = 1; i < arr.length; i += 2){
//         odds.push(arr[i])
//     } return odds 
// }

// function numOddValues(arr){
//     let oddValues = []
//     for (let x = 1, x < arr.length; x += 2){
//         oddValues.push(arr[i])
//     }    if (i % 2 !== 0){
    
//     }
// }
// need func, take in [], return amount of odd values, need counter to track odd values

 function numOddValues(arr){

let count = 0

for (let i = 0; i < arr.length; i++){

    if (arr[i] % 2 !== 0){

        count++
    }
}
    return count
}
// another way to solve *****
// function numOddValues(arr){
//     let oddValues = []
//     for (let i = o; i < arr.length; i++){
//         // oddValues.push(arr[i])
//         if (arr[i]  % 2 !== 0){
//             oddValues.push(arr[i])
//         }
//     }
//     return oddValues.length
// }

// need func, takes in [], returns avg lgth of "....."......
// need to know length of every string & add the values
// divide by the # of strings
function averageStringLength(arr){
    let total = 0 
    //  --holds values of each [i].length
    if (arr.length === 0){
        return 0
    }
    for (let i = 0; i < arr.length; i++){
//   total = total + arr[i].length || total += arr[i].length
        total += arr[i].length
  }
   return total / arr.length;
}



// func taking in str that returns index of 1st time of .!? in string if NAN return -1
function firstPunctuationIndex(str){
  
    for (let i = 0; i < str.length; i++){

    if (str[i] == "!" || str[i] == "." || str[i] == "?"){

        return i
    }
  }
  return -1
} 


function getPlace(param1, param2){

}



// func addToObj(obj, key, value)

// function addToObj(obj, key, value){

// obj['key'] = value

// 

function addToObj(obj, key, value) {

    if(typeof key !== 'string'){
        return "Function must be called with a valid key."
    }
    obj[key] = value
}

// console.log(typeof 23)  //"number "
// console.log(typeof "23") // "string"
// console.log(typeof {name: "23"})  //"object"

// let obj = {
//     user: "teacher",
//     birthday: "January 1st",
//     favoriteColor: "yellow"
// }
// console.log("pre", obj)
// obj.user = "BOB" 
// alter obj call what you want to alter and give it the new value
// obj.age = 42
// to add obj call what you want to add and give it a value
// obj[key] = value -----Bracket Notation****!!!!-------
// console.log("post", obj)

function duplicateElements(arr){

}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
