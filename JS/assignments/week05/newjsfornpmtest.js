let numbers = [1,2,3,4,5,6,7,8,9]

// es 5 function
// function doStuff(arr){   ||
const doStuff = function(arr) {  
    let total = 0
    // for ( let i = 0; i < arr.length; i++){
    //     total = total + arr[i]
    // }
    // return total   ||  (item represents arr[i])
    for (item of arr){
        total = total + item
    }
    return total
}
// console.log("arr", arr)


console.log(doStuff(numbers))

// ES 6 function
// const doStuff2 = (arr) => {
//     console.log('arrowFuction', arr)
// }
// console.log(doStuff2(numbers))


// reduce function --- always takes in 2 parameters---- takes in first two from [] adds then that becomes the first param and goes to next and does the same and continues til done     ----can add, sub, divide, multiply can use for str to concat all together
// helps reduce algos     working on budget/ have all the totals  when using reduce it takes all the data (alot of it) and gets the problem solved in simplier terms 


console.log("reduce", numbers.reduce((a, b) => a + b))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                      let str = ["a", "b", "c", "d","e"]
console.log("reduce a string", str.reduce((a, b) => a + b))


// high order functions 

// 1.      .map is array method that'll do the same thing to every item in the array   && map is used to return multiple objects from array

//2.        .filter is a for loop with a conditional statement (returns array so doesn't mutate OG array)


// .map
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num.map((item) => item * 10))

// .filter
console.log("filter", num.filter((item) => item % 2 == 0))

// map does same thing on every item but filter is doing a different thing on each item


// below we built our own map function, same as above
function thisIsMap(arr){

}
let result = []
console.log("thisIsMap", thisIsMap(arr)){
    for (let i = 0; i < arr.length; i++){
    result.push(arr[i] * 10)   
    }
return result
    }
console.log('filter', num.filter((item) => item % 2 ==0))

// below we will build our own filter method

// function thisIsFilter(arr){
const thisIsFilter = (arr) => {
    let result = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            result.push(arr[i])
        }
    }
    return result
}

thisIsFilter = 'what'