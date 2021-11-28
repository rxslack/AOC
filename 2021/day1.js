function fileRead() {
    const fs = require('fs');
    console.log("welcome to the internet");
    function readFile(){
        const file = fs.readFileSync('./day1.txt', 'utf-8')
        return file;
    }
    const input = readFile();
    return input;
}

let input = fileRead();
const inputArray = input.split('\n');
let convert = [];
for (let i = 0; i<inputArray.length;i++){
    convert.push(parseInt(inputArray[i]));
}

let array = [];

for (let i = 0; i < convert.length-2; i++){
    let value = convert[i] + convert[i+1] + convert[i+2]
    array.push(value)
}

let p1 = 0;
let p2 = 0;
for (let i = 0; i < convert.length; i++){
    if (convert[i] < convert[i+1]){
        p1 += 1
    }
}
for (let i = 0; i < array.length; i++){
    if (array[i] < array[i+1]){
        p2 += 1
    }
}
console.log('d1p1: ' + p1)
console.log('d1p2: ' + p2)