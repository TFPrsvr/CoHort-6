Build a Roman Numeral Converter
Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
Objective: Build an app that is functionally similar to https://roman-numeral-converter.freecodecamp.rocks

User Stories:

You should have an input element with an id of "number"
You should have a button element with an id of "convert-btn"
You should have a div, span or p element with an id of output
When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!



Waiting:You should have an input element with an id of "number".
Waiting:You should have a button element with an id of "convert-btn".
Waiting:You should have a div, span, or p element with an id of "output".
Waiting:When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
Waiting:When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
Waiting:When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
Waiting:When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
Waiting:When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
Waiting:When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
Waiting:When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
Waiting:When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
Waiting:When the #number element contains a random negative number and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
Waiting:When the #number element contains a number greater than 4000 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"

_______________________________________________________________________

1st found solution:

function convertToRoman(num) {
  /* 
  Main IDea
  convert num to str 
  convert each str char to it's corresponding Roman number considering it's order 
  join the result 
  */ 
  var str ='';
  str += num;
  var result = [];
  var res1 = '';
  var res2 = '';
  var res3 = '';
  var res4 = '';
  if (str.length == 0){
  result = [];
  }else if (str.length > 0){
    switch (str[str.length-1]){
    case "1" :
    res1 = "I";
    break;
    case "2" :
    res1 = "II";
    break;
      case "3" :
    res1 = "III";
    break;
      case "4" :
    res1 = "IV";
    break;
      case "5" :
    res1 = "V";
    break;
      case "6" :
    res1 = "VI";
    break;
      case "7" :
    res1 = "VII";
    break;
      case "8" :
    res1 = "VIII";
    break;
      case "9" :
    res1 = "IX";
    break;
      
  }
    switch (str[str.length-2]){
        
      case "1" :
    res2 = "X";
    break;
      case "2" :
    res2 = "XX";
    break;
      case "3" :
    res2 = "XXX";
    break;
      case "4" :
    res2 = "XL";
    break;
      case "5" :
    res2 = "L";
    break;
      case "6" :
    res2 = "LX";
    break;
      case "7" :
    res2 = "LXX";
    break;
      case "8" :
    res2 = "LXXX";
    break;
      case "9" :
    res2 = "XC";
    break;
    }
    switch (str[str.length-3]){
        
      case "1" :
    res3 = "C";
    break;
      case "2" :
    res3 = "CC";
    break;
      case "3" :
    res3 = "CCC";
    break;
      case "4" :
    res3 = "CD";
    break;
      case "5" :
    res3 = "D";
    break;
      case "6" :
    res3 = "DC";
    break;
      case "7" :
    res3 = "DCC";
    break;
      case "8" :
    res3 = "DCCC";
    break;
      case "9" :
    res3 = "CM";
    break;
    }
    switch (str[str.length-4]){
        
      case "1" :
    res4 = "M";
    break;
      case "2" :
    res4 = "MM";
    break;
      case "3" :
    res4 = "MMM";
    break;
    }
  }
result.push(res4,res3,res2,res1);
  return result.join("");
}

convertToRoman(39999);
_______________________________________________________________________

2nd found solution:

function convertToRoman(num) {

	var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
1000: "M", 2000: "MM", 3000: "MMM"};

  var digits = String(+num).split(""); //array with digits
  var result = ''; //empty result initialized
  for(var i =0; i <digits.length; i++){
    var lookupKey = digits[i]*Math.pow(10,digits.length-i-1); //find the key of the current index value multiplied by power of 10^i  
    if(arabicToRoman[lookupKey]){
      result +=  arabicToRoman[lookupKey];
    }    
  }
  return result;    
    
}

__________________________________________________________________________

3rd found solution:

let input = document.getElementById("number");
let button = document.getElementById("convert-btn");
let output = document.getElementById("output");


button.addEventListener("click", () => {
    let num = parseInt(input.value, 10);

    if(isNaN(num)){
        return output.textContent = "Please enter a valid number";
    } else if(num < 0){
        return output.textContent = "Please enter a number greater than or equal to 1";
    } else if(num >= 4000) {
        return output.textContent = "Please enter a number less than or equal to 3999";
    }

    let numString = num.toString().padStart(4,'0');
    numString = numString.split("");
    let romanNum = [];
    

singlesConverter(numString)
    .then(() => {
        return tensConverter(numString);
    })
    .then(() => {
        return hundredsConverter(numString);
    })
    .then(() => {
        thousandsConverter(numString);
    });

function singlesConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[3];
        let letterSingles;
        switch(num){
            case 0:
                letterSingles = "";
                break;
            case '1':
                letterSingles = 'I';
                break;
            case '2':
                letterSingles = 'II';
                break;
            case '3':
                letterSingles = 'III';
                break;
            case '4':
                letterSingles = 'IV';
                break;
            case '5':
                letterSingles = 'V';
                break;
            case '6':
                letterSingles = 'VI';
                break;
            case '7':
                letterSingles = 'VII';
                break;
            case '8':
                letterSingles = 'VIII';
                break;
            case '9':
                letterSingles = 'IX';
                break;
            }
        romanNum.push(letterSingles)
        resolve();
    });
}

function tensConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[2];
        let letterTens;
        switch(num){
            case 0:
                letterTens = "";
                break;
            case '1':
                letterTens = 'X';
                break;
            case '2':
                letterTens = 'XX';
                break;
            case '3':
                letterTens = 'XXX';
                break;
            case '4':
                letterTens = 'XL';
                break;
            case '5':
                letterTens = 'L';
                break;
            case '6':
                letterTens = 'LX';
                break;
            case '7':
                letterTens = 'LXX';
                break;
            case '8':
                letterTens = 'LXXX';
                break;
            case '9':
                letterTens = 'XC';
                break;
            }
            romanNum.push(letterTens)
            resolve();
    });
}

function hundredsConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[1];
        let letterHundreds;
        switch(num){
            case 0:
                letterHundreds = "";
                break;
            case '1':
                letterHundreds = 'C';
                break;
            case '2':
                letterHundreds = 'CC';
                break;
            case '3':
                letterHundreds = 'CCC';
                break;
            case '4':
                letterHundreds = 'CD';
                break;
            case '5':
                letterHundreds = 'D';
                break;
            case '6':
                letterHundreds = 'DC';
                break;
            case '7':
                letterHundreds = 'DCC';
                break;
            case '8':
                letterHundreds = 'DCCC';
                break;
            case '9':
                letterHundreds = 'CM';
                break;
            }
            romanNum.push(letterHundreds)
            resolve();
    });
}

function thousandsConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[0];
        let letterThousands;
        switch(num){
            case "1":
                letterThousands = 'M';
                break;
            case "2":
                letterThousands = 'MM';
                break;
            case "3":
                letterThousands = 'MMM';
                break;
            case "0":
                letterThousands = "";
                break;
            }
            romanNum.push(letterThousands);
            romanNum.reverse();
            romanNum = romanNum.join("");
            romanNum = String(romanNum);
            output.textContent = romanNum;
            resolve ()
        });
    }
});