const fs = require('fs');
console.log("welcome to the internet");
// ( means go up +1
// ) means go down -1
function readFile(){
    const file = fs.readFileSync('./day3.txt', 'utf-8')
    return file;

}

const input = readFile();
const inputArray = input.split('');

let houses = new Set();

let rx = 0;
let ry = 0;

let sx = 0;
let sy = 0;

//^ y + 1
//> x + 1
//v y - 1
//< x - 1

for (i = 0; i <inputArray.length; i++){

    if (i/2 % 1){
        if (inputArray[i] === '^'){
            ry += 1
        }
    
        if (inputArray[i] === '>'){
            rx += 1
        }
    
        if (inputArray[i] === 'v'){
            ry -= 1
        }
    
        if (inputArray[i] === '<'){
            rx -= 1
        }
    
        houses.add(`${rx}, ${ry}`)
    }

    else {
        if (inputArray[i] === '^'){
            sy += 1
        }
    
        if (inputArray[i] === '>'){
            sx += 1
        }
    
        if (inputArray[i] === 'v'){
            sy -= 1
        }
    
        if (inputArray[i] === '<'){
            sx -= 1
        }
    
        houses.add(`${sx}, ${sy}`)
    }

    }

const presDrops = houses.size;
console.log(presDrops);

