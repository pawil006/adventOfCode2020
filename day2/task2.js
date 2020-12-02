const fs = require('fs');

const array = fs
    .readFileSync('./day2/input.txt')
    .toString()
    .split("\n");
    
const isValidPasswordRow = (passwordRow) => {
    let firstPosition = parseInt(passwordRow.match(/[0-9]+/g)[0]); 
    let secondPosition = parseInt(passwordRow.match(/[0-9]+/g)[1]); 
    let letter = passwordRow.match(/[a-z]+/g)[0];
    let password = passwordRow.match(/[a-z]+/g)[1];
    
    if((password[firstPosition - 1] == letter) + (password[secondPosition - 1] == letter) == 1) {
        return true;
    }
    return false;
}

let numberOfValidPasswords = 0;

array.forEach(o => {
    if(isValidPasswordRow(o)) numberOfValidPasswords++
});

console.log(numberOfValidPasswords);
