const fs = require('fs');

const array = fs
    .readFileSync('./day2/input.txt')
    .toString()
    .split("\n");
    
const isValidPasswordRow = (passwordRow) => {
    let minimialRequired = passwordRow.match(/[0-9]+/g)[0]; 
    let maxRequired = passwordRow.match(/[0-9]+/g)[1]; 
    let letter = passwordRow.match(/[a-z]+/g)[0];
    let password = passwordRow.match(/[a-z]+/g)[1];
    
    let letterOccurenciesAmmount = [...password].filter(o => o === letter).length;

    if(letterOccurenciesAmmount <= maxRequired && letterOccurenciesAmmount >= minimialRequired) {
        return true;
    }
    return false;
}

let numberOfValidPasswords = 0;

array.forEach(o => {
    if(isValidPasswordRow(o)) numberOfValidPasswords++
});

console.log(numberOfValidPasswords);
