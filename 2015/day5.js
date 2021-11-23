const fs = require('fs');
console.log("welcome to the internet");

function readFile(){
    const file = fs.readFileSync('./day5.txt', 'utf-8')
    return file;
}

//const input = readFile();
const input = "ugknbfddgicrmopn"
const inputArray = input.split('\n');
let niceStringsTotal = 0;
let vowels = 0;
let repeats = 0;
function processString(string){

    const strings = string.split('');
    for (let i = 0; i < strings.length; i++){
        if(strings[i] == "a" || strings[i] == "e" || strings[i] =="i" || strings[i] == "o"|| strings[i] == "u"){
            vowels += 1;
        }

        if (strings[i] == strings[i+1]){
            repeats += 1;
        }

    }
}

console.log(inputArray);