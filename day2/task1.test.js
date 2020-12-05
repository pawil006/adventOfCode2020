const {loadRowLinesFrom} = require('../commons/testDataLoader');
const {expect} = require('chai');
const {countValidPasswordsCheckLetters} = require('./task1')
const {countValidPasswords} = require('./task2')

describe('[day2] for given data', () => {
    const data = loadRowLinesFrom('./day2/input.txt');

    describe('should parse each row and', () => {
        it('should count valid passwords and check if contain minimal occurrences of given letter', () => {
            // when
            const result = countValidPasswordsCheckLetters(data)
            // then
        })
    })

    describe('should parse each row and', () => {
        it('should count valid passwords and does not check letter occurrences', () => {
            // when
            const result = countValidPasswords(data)
            // then
            expect(result).to.eq(489)
        })
    })
})