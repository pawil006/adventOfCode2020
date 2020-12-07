

const isValidPasswordRow = (passwordRow) => {
    const minimalRequired = passwordRow.match(/[0-9]+/g)[0];
    const maxRequired = passwordRow.match(/[0-9]+/g)[1];
    const letter = passwordRow.match(/[a-z]+/g)[0];
    const password = passwordRow.match(/[a-z]+/g)[1];
    const letterOccurrencesAmount = [...password].filter(o => o === letter).length;

    return letterOccurrencesAmount <= maxRequired && letterOccurrencesAmount >= minimalRequired;
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

exports.countValidPasswordsCheckLetters = countValidPasswords;
