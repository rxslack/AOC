const fs = require('fs');

function fileRead() {
    const file = fs.readFileSync('./day1.txt', 'utf-8')
    const inputArray = file.split('\n');
    return inputArray;
}

let inputArray = fileRead();
//---------------part 1---------------
function calcFrequency(inputArray){
    let currentFrequency = 0;
    let frequencyArray = [];
    for (let i=0; i<inputArray.length; i++){
        let frequency = parseInt(inputArray[i],10)
        currentFrequency += frequency;
        frequencyArray.push(currentFrequency);
    }
}

//---------------part 2---------------
function calcRepeat(inputArray){
    let frequencyArray = [];
    frequencyArray.push(currentFrequency);
}
console.log("Part 1:" ,calcFrequency(inputArray))