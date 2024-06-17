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
    let oddIndex = []
    for (let i = 1; i < arr.length; i += 2){
           oddIndex.push(arr[i])
    } return oddIndex
}


function numOddValues(arr){
    let oddValues = []
    for (let x = 1, x < arr.length; x += 2){
        oddValues.push(arr[i])
    }    if (i % 2 !== 0){
    
    }
}


function averageStringLength(arr){
    let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  } return sum / arr.length;
}


function firstPunctuationIndex(){

} 


function getPlace(param1, param2){

}

function addToObj(){

}

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
