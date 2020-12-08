const fs = require('fs');

const isValidPassport = (passport) => {
    return passport.includes('hcl:')
    && passport.includes('pid:')
    && passport.includes('ecl:')
    && passport.includes('eyr:')
    && passport.includes('byr:')
    && passport.includes('iyr:')
    && passport.includes('hgt:');
}

const passports = fs
    .readFileSync('./day4/input.txt')
    .toString()
    .split("\n\n")
    .map(o => o.replace(/\n/g, ' '));

console.log(
    passports
        .map(o => isValidPassport(o))
        .filter(Boolean)
        .length
);