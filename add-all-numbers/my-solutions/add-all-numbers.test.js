
import {getTotal} from './add-all-numbers.js'

describe('addAllNumbers', () => {
    it('Should add all numbers', () => {
        // Given
        const given = [1, 2, 3]
        // When
        const actual = getTotal(given)
        // Then
        expect(actual).toBe(6)
    })
})