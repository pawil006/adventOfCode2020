const fs = require('fs');

const isValidByr = (byr) => {
    return parseInt(byr) >= 1920 && parseInt(byr) <= 2002;
}

const isValidIyr = (iyr) => {
    return parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020;
}

const isValidEyr = (eyr) => {
    return parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030;
}

const isValidHgt = (hgt) => {
    if (hgt == undefined) return false;
    const number = hgt.match(/[0-9]+/g);
    const unit = hgt.match(/[a-z]+/g);
    if (unit == 'cm') {
        return parseInt(number) >= 150 && parseInt(number) <= 193;
    } else if (unit == 'in') {
        return parseInt(number) >= 59 && parseInt(number) <= 76;
    }
    return false;
}

const isValidHcl = (hcl) => {
    return /^#[a-f0-9]{6}$/g.test(hcl);
}

const isValidEcl = (ecl) => { 
    const validEcls = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    return validEcls.includes(ecl);
}

const isValidPid = (pid) => {
    return /^[0-9]{9}$/g.test(pid);
}

const isValidPassport = (passport) => {
    console.log(passport);
    

    const testStr =  '{' + passport + '}';
    const jsonString = testStr
        .replace(/ /g, ', ')
        .replace(/(['"])?([a-z0-9A-Z_#]+)(['"])?/g, '"$2"')

    let obj = JSON.parse(jsonString);
    let isValid = isValidByr(obj.byr)
        && isValidIyr(obj.iyr)
        && isValidEyr(obj.eyr)
        && isValidHgt(obj.hgt)
        && isValidHcl(obj.hcl)
        && isValidEcl(obj.ecl)
        && isValidPid(obj.pid);

    console.log(isValid);
    
    return isValid;
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