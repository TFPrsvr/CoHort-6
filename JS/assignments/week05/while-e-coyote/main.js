function numberDoubler(num) {
        // Your code here
        let count = 0
        while (num <= 100) {
            //  num *= 2
            num = num * 2
        }
        return num
    }


function stringRepeater(str) {
    // Your code here
    str2 = "";
while(str2.length < 10){
    str2 = str2 + str
}
return str2
}


function makeDivisible(x, y) {
    // Your code here
    while (x % y != 0) {
        x++
             // console.log("x",x, "y",y)
    }
    return x
    }



module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};