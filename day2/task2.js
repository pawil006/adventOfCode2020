
    
const isValidPasswordRow = (passwordRow) => {
    let firstPosition = parseInt(passwordRow.match(/[0-9]+/g)[0]); 
    let secondPosition = parseInt(passwordRow.match(/[0-9]+/g)[1]); 
    let letter = passwordRow.match(/[a-z]+/g)[0];
    let password = passwordRow.match(/[a-z]+/g)[1];

    return (password[firstPosition - 1] === letter) + (password[secondPosition - 1] === letter) === 1;
}


/**
 * @param data {Array<string>}
 * */
const countValidPasswords = (data) => {
    return data.reduce((acc, row) => {
        if(isValidPasswordRow(row)) return ++acc;
        return acc;
    }, 0)
}

exports.countValidPasswords = countValidPasswords;

