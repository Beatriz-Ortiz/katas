import { fizzBuzz } from './fizz-buzz.js'

describe('fizzBuzz', () => {
    it('Should replace 3 by fizz', () => {
        // Given
        const given = 3
        // When
        const actual = fizzBuzz(given)
        // Then
        expect(actual).toEqual([1, 2, 'fizz'])
    })

    it('Should replace 5 by buzz', () => {
        // Given
        const given = 5
        // When
        const actual = fizzBuzz(given)
        // Then
        expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
    })

    it('Should replace 15 (a number divisible between 3 and 5 at the same) by fizzbuzz', () => {
        // Given
        const given = 15
        // When
        const actual = fizzBuzz(given)
        // Then
        expect(actual).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz'
        ])
    })
})