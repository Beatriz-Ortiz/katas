import { highestNumber } from './highest-number.js'

describe('highestNumber', () => {
  // First test
  it('Given an array of one number and return the only one number', () => {
    // Given
    const given = [99]
    // When
    const actual = highestNumber(given)
    // Then
    expect(actual).toBe(99)
  })
  // Second test
  it('Given an array of numbers return the highest number', () => {
    // Given
    const given = [3, 6, 2, 56, 77, 15, 26, 32, 5, 89, 32, 99]
    // When
    const actual = highestNumber(given)
    // Then
    expect(actual).toBe(99)
  })
})
