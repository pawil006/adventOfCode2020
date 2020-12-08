const fs = require('fs');

const array = fs
    .readFileSync('./day3/input.txt')
    .toString()
    .split("\n");


const horizontalJump = 3;
const verticalJump = 1;

let counter = 0;

for (let i = 0; i < array.length; i = i + verticalJump) {
    let horisontalPosition = i * (horizontalJump/verticalJump);
    let element = (array[i][horisontalPosition % array[i].length]);
    if (element === "#") {
        counter ++
    }
}

console.log(counter);


