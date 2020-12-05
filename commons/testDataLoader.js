const fs = require('fs');


/**
 * @param srcPath {string} path to file containing array as new line separated values
 * @return {Array<Number>} for given file parsed data as an Array of numbers
 * */
exports.loadArrayFrom = (srcPath) => {
    return fs
        .readFileSync(srcPath)
        .toString()
        .split("\n")
        .map(s => Number(s));
}