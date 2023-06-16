// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.


function manipulateString(string,callback) {
    const manipulateString = string.toUpperCase();
    
 return callback(manipulateString);
}

function logString(manipulateString) {
    // console.log("The manipulated string is:" + string);
    console.log(`The manipulated string is :${manipulateString}`);
}

manipulateString("aditya,jain,akshay",logString)