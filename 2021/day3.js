//day3 - fuck the elves.
const fs = require('fs');

function fileRead() {
    const file = fs.readFileSync('./day3.txt', 'utf-8')
    const inputArray = file.split('\n');
    return inputArray;
}
//-----------------part 1 functions-----------------
function countDigits(array) {
    let counts = Array.from({length: array[0].length}, () => 0);
    for (let i = 0; i < array.length; i++){
        let string = array[i];
        for (let j = 0; j < string.length; j++){
            if (string[j] === '1'){
                counts[j] += 1
            }
        }
    }
    return counts
}

function calcGamma(originalArray){
    const countedArray = countDigits(originalArray);
    const threshold = (originalArray.length/2)
    const newArray = [];
    for (let i = 0; i < countedArray.length; i++){
        if(countedArray[i]>=threshold){
            newArray.push('1')
        }
        else{
            newArray.push('0')
        }
    }
    return newArray.join("");
}

function calcEpsilon(originalArray){
    const countedArray = countDigits(originalArray);
    const threshold = (originalArray.length/2)
    const newArray = [];
    for (let i = 0; i < countedArray.length; i++){
        if(countedArray[i]<threshold){
            newArray.push('1')
        }
        else{
            newArray.push('0')
        }
    }
    return newArray.join("");
}
//-----------------part 2 functions-----------------

function calcGenerator(binaryNumbers, index=0){
    const mostCommon= calcGamma(binaryNumbers);
    const remainingNumbers = binaryNumbers.filter((binaryNumber) => binaryNumber[index] === mostCommon[index])
    if (remainingNumbers.length === 1){
        return remainingNumbers[0]
    }
    else {
        return calcGenerator(remainingNumbers, index+1)
    }
    //console.log(remainingNumbers)

}

function calcScrubber(binaryNumbers, index=0){
    const leastCommon= calcEpsilon(binaryNumbers);
    const remainingNumbers = binaryNumbers.filter((binaryNumber) => binaryNumber[index] === leastCommon[index])
    if (remainingNumbers.length === 1){
        return remainingNumbers[0]
    }
    else {
        return calcScrubber(remainingNumbers, index+1)
    }
}

let inputArray = fileRead();

let gamma = calcGamma(inputArray);
let epsilon =calcEpsilon(inputArray);
let result1 = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log('Part 1 Answer:', result1);

let generator =  calcGenerator(inputArray); //most common
let scrubber = calcScrubber(inputArray); //least common
console.log(scrubber)
let result2 = parseInt(generator, 2) * parseInt(scrubber, 2);
console.log('Part 2 Answer:' ,result2);




