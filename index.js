import Algebra from "./Algebra.js";

const A = new Algebra();
const delimiter = "."
// const startVal = "12"

// let value = A.convertNumberStringToArray(startVal, delimiter)
// console.log(value)

// console.log(A.addArrays(value, value, delimiter))

// console.log(A.removeLeadingNumbersFromString(A.convertNumbersArrayToString(A.addArrays(value, value, delimiter))))
// console.log(A.removeLeadingNumbersFromString(A.convertNumbersArrayToString(value)))

let numbers = {
    1: "0",
    2: "1",
    3: "1"
}

let iteration = 1;
while (true){

    
    numbers[3] = A.addArrays(A.convertNumberStringToArray(numbers[1],delimiter),A.convertNumberStringToArray(numbers[2],delimiter));
    numbers[2] = numbers[1];
    numbers[1] = numbers[3];

    console.log("Iteration: " + iteration + " Fibonacci: " + A.removeLeadingZerosFromString(A.convertNumbersArrayToString(numbers[3] )))
    
    iteration ++;
}

