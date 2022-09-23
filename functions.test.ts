const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array of the same length as the argument', () => {
    test('return an array with same numbers', () => {
        const expected = [1,2,3,4]
        expect(shuffleArray(expected)).toEqual(expect.arrayContaining(expected))
    }),
    test('return an array of same length', () => {
        expect(shuffleArray([1,2,3,4])).toHaveLength(4)
    })
})