// function convertToRoman(num) {

//     var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX",
//         10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC",
//         100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM",
//         1000: "M", 2000: "MM", 3000: "MMM"};

//         let converted = str(+num).split("");

//         let result = "";

//     for (let i = 0; i < converted.length; i++){

//         let lookupKey = converted[i]*Math.pow(10, converted.length-i-1);

//         if(arabicToRoman[lookupKey])
//             {
//             result += arabicToRoman[lookupKey]

//         }
//     }

//     return num;
//    }

//    convertToRoman(36);

//    _____________________________________________________________

//    codeManS::::

// const input = document.getElementById("number");
// const convert = document.getElementById("convert-btn");
// const output = document.getElementById("output");

// const numerals = [
//   ["M", 1000],
//   ["CM", 900],
//   ["D", 500],
//   ["CD", 400],
//   ["C", 100],
//   ["XC", 90],
//   ["L", 50],
//   ["XL", 40],
//   ["X", 10],
//   ["IX", 9],
//   ["V", 5],
//   ["IV", 4],
//   ["I", 1],
// ];

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     convert.click();
//   }
// });

// convert.addEventListener("click", () => {
//   const value = input.value;
//   if (!value) {
//     output.innerText = "Please enter a valid number";
//   } else if (value < 0) {
//     output.innerText = "Please enter a number greater than or equal to 1";
//   } else if (value > 3999) {
//     output.innerText = "Please enter a number less than or equal to 3999";
//   } else {
//     let result = "";

//     for (const [roman, number] of numerals) {
//       while (value >= number) {
//         result += roman;
//         value -= number;
//       }
//     }
//     output.innerText = result;
//   }
// });
_______________________________________________________________

// Dylan Israel:

// const input = document.getElementById("button");
// const convert = document.getElementById("convert-btn");
// const output = document.getElementById("output");

// function convert(num) {
// var roman = "";
//  var roamnNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
//  var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//  for (let i = 0; i < numbers.length; i++) {
//     while(num >= numbers[i]) {
//         roman = roman + romanNumerals[i];
//         num = num - numbers[i];
//     }
//  }
//     return roman;
// }

// convert.addEventListener("click", (num) => {
//     const value = input.value;
//     if(!value) {
//         output.innerText = "Please enter a valid number";
//             } else if (value < 0) {
//                 output.innerText = "Please enter a number greater than or equal to 1";
//             } else if (value > 3999) {
//                 output.InnerText = "Please enter a number less than or equal to 3999";
//             } else {

//             }
// })

// convert(36);
_______________________________________________________________
 
// DSeanHD:
// SUCCESS FINALLY!!


let number = document.getElementById("number");
let convertBtn =  document.getElementById("convert-btn");
let output = document.getElementById("output");

function convertToRoman() {
    
    if (number.value == ""){       
        output.innerHTML = "Please enter a valid number";   
        return;

    } else if ( number.value < 1){
        output.innerHTML = "Please enter a number greater than or equal to 1"
         return;

    }  if (number.value > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }

    
   const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV",  "I"];

    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
    let romanNumeral = "";

    for (let i = 0; i < romanValues.length; i++) {

        while (number.value >= romanValues[i]) {
        
            romanNumeral += romanSymbols[i];
            number.value -= romanValues[i];
        }
    }

    number.value = "";
    output.innerHTML = romanNumeral;
}


convertBtn.addEventListener("click",  convertToRoman);