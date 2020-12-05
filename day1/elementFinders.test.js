const {loadNumbersFrom} = require('../commons/testDataLoader');
const {expect} = require('chai');
const {solutionFind2, solutionFind3} = require('./elementsFinder')

describe('[day1] for given data', () => {
    const data = loadNumbersFrom('./day1/input.txt');

    describe('should find 2 numbers [...] and', () => {
        it('should [...] calculate multiplication all of them for given target', () => {
            // given
            const target = 2020;
            // when
            const result = solutionFind2(data, target)
            // then
            expect(357504).to.eq(result)
        })
    })

    describe('should find 3 numbers [...] and', () => {
        it('should [...] calculate multiplication all of them for given target', () => {
            // given
            const target = 2020;
            // when
            const result = solutionFind3(data, target)
            // then
            expect(12747392).to.eq(result)
        })
    })
})