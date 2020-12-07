const fs = require('fs');


/**
 * @param srcPath {string} path to file containing array as new line separated values
 * @return {Array<string>} for given file parsed data as an Array of strings
 * */
const loadRowLinesFrom = (srcPath) => {
    return fs
        .readFileSync(srcPath)
        .toString()
        .split("\n")
}

exports.loadRowLinesFrom = loadRowLinesFrom;

/**
 * @param srcPath {string} path to file containing array as new line separated values
 * @return {Array<Number>} for given file parsed data as an Array of numbers
 * */
exports.loadNumbersFrom = (srcPath) => {
    return loadRowLinesFrom(srcPath)
        .map(s => Number(s));
}