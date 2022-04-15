
// very easy _____________________________________________

// let chart1= "6";
// let chart2= "2";
// console.log(getDifference(6,2));//4



// easy  _________________________________________________

// var name1= "Ben";
// var name2= "Dover";
// console.log ("the name Dover is longer than Ben by 2 characters");





// medium _________________________________________________

// let userText = prompt("Type something in the textbox");

// if (userText == userText.toUpperCase()) {
//     console.log("Are you Yelling?")
// // } else if (userText == userText.toLowerCase()){
//     console.log("Are you whispering")
// // } else {
//     console.log("Are you speaking normally?")
// }




// hard   ______________________________________________

// function add(num1, num2) {
//     let res = num1 + num2
//     return res
// }
// // console.log(add(4, 2));

// function sub(num1, num2) {
//     let res = num1 - num2
//     return res
// }
// // console.log(sub(8, 5));

// function multiply(num1, num2) {
//     let res = num1 * num2
//     return res
// }
// // console.log(multiply(2, 2));

// function div(num1, num2) {
//     let res = num1 / num2
//     return res 
// }
// console.log(div(8, 4));




// very hard ________________________________________________

// read numbers
const num1 = parseFloat (prompt('Enter num1:')); // 10 > '10'
const num2 = parseFloat (prompt('Enter num2:')); //abc, '', null NaN
// read operators
const operator = prompt('Enter operator (+, -, /, *) ');  
let result = 0;
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong input! Refresh the page again and provide data.');
}else {

    if (operator == '+'){
    result = num1 + num2 ;
    }else if (operator == '-'){
    result = num1 - num2;
    }else if (operator == '*'){
    result = num1 * num2 ;
    }else if (operator == '/'){
    result = num1 / num2 ;
}
   document.write(num1 + operator + num2 + ' = ' + result);
} 