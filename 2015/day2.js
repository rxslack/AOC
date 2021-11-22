const fs = require('fs');
function readFile(){
    const file = fs.readFileSync('./day2.txt', 'utf-8')
    return file;
}

function processPresent(presentString){
    const dimensions = presentString.split('x')
    const h = dimensions[0];
    const w = dimensions[1];
    const l = dimensions[2];

    const exactArea = [(2*l*w), (2*w*h), (2*h*l)];
    const small = (Math.min(...exactArea))/2;

    let sum = 0;
    for (let i = 0; i < exactArea.length; i++) {
        sum += exactArea[i];
    }
    let result = sum + small;
    return result;
}

function processRibbon(presentString){
    const dimensions = presentString.split('x')
    const h = parseInt(dimensions[0]);
    const w = parseInt(dimensions[1]);
    const l = parseInt(dimensions[2]);

    const bow = h*w*l;

    const newDimesions = dimensions.sort(function(a, b){return a - b});
    console.log(newDimesions);
    const s1 = newDimesions[0];
    const s2 = newDimesions[1];

    const ribbon = (s1*2) + (s2*2);

    let result = bow + ribbon;
    return result;
}

const input = readFile();

const inputArray = input.split('\n');
//const inputArray = ["2x3x4"];
//2*l*w + 2*w*h + 2*h*l + smallest area
let wrappingPaper = 0;
for (let i = 0; i <inputArray.length; i++){
    const present = processRibbon(inputArray[i]);
    wrappingPaper += present;
}
console.log(wrappingPaper);