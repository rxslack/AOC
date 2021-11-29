function fileRead() {
    const fs = require('fs');
    console.log("welcome to the internet");
    function readFile(){
        const file = fs.readFileSync('./day2.txt', 'utf-8')
        return file;
    }
    const input = readFile();
    return input;
}

let data = fileRead()
const inputArray = data.split('\n');

//part 1
let horizontal = 0;
let depth = 0;
for (let i = 0; i < inputArray.length; i++){
    let instruction = inputArray[i].split(' ')
    let direction = instruction[0];
    let distance = parseInt(instruction[1])
        if(direction == 'forward'){
            horizontal += distance
        }
        if(direction == 'down'){
            depth += distance
        }
        if(direction == 'up'){
            depth -= distance
        }
    }
let result = horizontal * depth;
console.log('result part 1: ' +result)

//part 2
let horizontal2 = 0;
let depth2 = 0;
let aim = 0;
for (let i = 0; i < inputArray.length; i++){
    let instruction = inputArray[i].split(' ')
    let direction = instruction[0];
    let distance = parseInt(instruction[1])
        if(direction == 'forward'){
            horizontal2 += distance
            depth2 += (aim*distance)
        }
        if(direction == 'down'){
            aim += distance
        }
        if(direction == 'up'){
           aim -= distance
        }
    }
let result2 = horizontal2 * depth2;
console.log('result part 2: ' +result2)
