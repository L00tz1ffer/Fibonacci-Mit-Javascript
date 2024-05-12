import Algebra from "./modules/Algebra.js";
import { countChars } from "./util/util.js";

const A = new Algebra();
const delimiter = "."
// const startVal = "12"

// let value = A.convertNumberStringToArray(startVal, delimiter)
// console.log(value)

// console.log(A.addArrays(value, value, delimiter))

// console.log(A.removeLeadingNumbersFromString(A.convertNumbersArrayToString(A.addArrays(value, value, delimiter))))
// console.log(A.removeLeadingNumbersFromString(A.convertNumbersArrayToString(value)))


const startTime =Date.now()


let numbers = {
    1: "0",
    2: "1",
    3: "1"
}

let lastRun = 0;
let iteration = 1;
while (true){

    
    numbers[3] = A.addArrays(A.convertNumberStringToArray(numbers[1],delimiter),A.convertNumberStringToArray(numbers[2],delimiter));
    numbers[2] = numbers[1];
    numbers[1] = numbers[3];

    let output =  A.removeLeadingZerosFromString(A.convertNumbersArrayToString(numbers[3] ))
    console.clear()

    const roundFinishTime = Date.now()
    const timeRunning = roundFinishTime - startTime;
    const roundTime = roundFinishTime - lastRun;
    console.log("This calculation Took " + roundTime + " ms" + "\n" + "Running since: " + timeRunning + "\n" + "Iteration: " + iteration + "\n" + "Output Lenght: " + countChars(output) + "\n" + "Fibonacci: " + output)
    
    let newIterationSave = {
        "Iteration": iteration,
        "outputLentght": countChars(output),
        "FibonacciNumber": output,
        "timeElapsedSinceLastCalculation": roundTime,
        "totalTimeElapsed": timeRunning,
    }

    lastRun = roundFinishTime;
    iteration ++;
}

