let fs = require('fs');
let finder = require('./elementsFinder.js');

let array = fs
    .readFileSync('./day1/task1/input.txt')
    .toString()
    .split("\n")
    .map(x=>+x)
    .sort((a,b)=>a-b);

console.log(finder
    .findTwoElements(array, 2020)
    .reduce((a,b) => a * b)
);

console.log(finder
    .findThreeElements(array, 2020)
    .reduce((a,b) => a * b)
);








