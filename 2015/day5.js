const fs = require('fs');
console.log("welcome to the internet");

function readFile(){
    const file = fs.readFileSync('./day5.txt', 'utf-8')
    return file;
}

function vowelCheck(stringArray){
    let counter = 0;
    for (let i = 0; i < stringArray.length; i++){
        const letter = stringArray[i];
        if(letter == "a" || letter == "e" || letter =="i" || letter == "o"|| letter == "u"){
            counter += 1;
        }
    }
    return counter >=3;
}

function repeatCheck(stringArray){

    for (let i =0; i <stringArray.length; i++) {
        const letter = stringArray[i];
        const nextletter = stringArray[i+1];
        if (letter == nextletter){
            return true;
        }
    }
    return false;
}

function disallowedCheck(stringArray){

    for (let i =0; i <stringArray.length; i++) {
        const letter = stringArray[i];
        const nextletter = stringArray[i+1];
        if (letter== 'a' && nextletter =='b'){
            return false
        }
        if (letter == 'c' && nextletter=='d'){
            return false
        }
        if (letter== 'p' && nextletter =='q'){
            return false;
        }
        if (letter== 'x' && nextletter =='y'){
            return false
        }
    }
    return true;
}

function isNice(letters){

    //const letters = stringArray.split('');

    let vowel = vowelCheck(letters)
    let repeat = repeatCheck(letters)
    let disallow = disallowedCheck(letters)
    console.log(vowel, repeat, disallow)
    
    return vowel && repeat && disallow
}

const input = readFile();
//const input = "dvszwmarrgswjxmb"
const inputArray = input.split('\n');
let niceString = 0;
let niceStringsTotal = 0;

for (let i = 0; i < inputArray.length; i++) {
    const isItNice = isNice(inputArray[i]);
    if(isItNice){
        niceStringsTotal += 1;}
}
console.log(niceStringsTotal);