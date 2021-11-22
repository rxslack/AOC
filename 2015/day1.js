const fs = require('fs');
console.log("welcome to the internet");
// ( means go up +1
// ) means go down -1
function readFile(){
    const file = fs.readFileSync('./day1.txt', 'utf-8')
    return file;
}

const input = readFile();

//console.log(input);
//const input = "()())"
const inputArray = input.split('');
let answer = 0;

    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] === '('){
            answer += 1
        }
        else {
            answer -= 1
        }
        if (answer === -1){
            let result = i+1;
            return console.log('the answer is ' + result);
        }
    }
