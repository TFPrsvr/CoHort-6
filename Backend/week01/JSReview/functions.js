const returnEmptyString = function () {

    return  ""

};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnString = function () {
    return "abc123"
};

const addition = function (num1, num2) {
return num1 + num2 

};

const subtraction = function (num3, num4) {
    return num3 - num4 
};

const multiplication = function (num5, num6) {
    return num5 * num6
};

const division = function (num7, num8) {
    return num7 / num8 
};

const returnArray = function (arr) {
   return arr
};

const returnFirstIndex = function (arr) {     
    return arr[0]
}; 

const returnSecondIndex = function (arr) {
    return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};

const arraySum = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum
};

const arraySubtraction = function (arr) {
    let sub = 0
    for (let i =0; i < arr.length; i++) {
        sub -= arr[i]
    } return sub
};

const multiplicationArray = function (arr) {
    let mult = 1
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i]
    } return mult 
};

const divisionArray = function (arr) {
  if (arr.length === 0) return 0
  if( arr.some(value => value === 0)) throw new Error('Cannot divide by zero')
    const result = arr.reduce((accumulator, currentValue) => accumulator / currentValue)
   return parseFloat(result.toFixed(3))
};

const oddArray = function (arr) {
    const odds = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          odds.push(arr[i])
        }
    } return odds 
};

const evenArray = function (arr) {
    const evens = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i])
        }
    } return evens
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
