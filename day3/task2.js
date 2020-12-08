const fs = require('fs');

const array = fs
    .readFileSync('./day3/input.txt')
    .toString()
    .split("\n");


const slopes = [
    { horizontalJump : 1, verticalJump : 1},
    { horizontalJump : 3, verticalJump : 1},
    { horizontalJump : 5, verticalJump : 1},
    { horizontalJump : 7, verticalJump : 1},
    { horizontalJump : 1, verticalJump : 2},
]

const getHashesInSlope = (verticalJump, horizontalJump, array) => {
    let counter = 0;

    for (let i = 0; i < array.length; i = i + verticalJump) {
        let horisontalPosition = i * (horizontalJump/verticalJump);
        let element = (array[i][horisontalPosition % array[i].length]);
        if (element === "#") {
            counter ++;
        }
    }
    return counter;
}

let multipliedTreesAmount = slopes
    .map(o => getHashesInSlope(o.verticalJump, o.horizontalJump, array))
    .reduce((a,b) => a*b);

console.log(multipliedTreesAmount);


