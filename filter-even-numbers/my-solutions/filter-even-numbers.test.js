import { filterEvenNumbers } from './filter-even-numbers.js'

describe('filterEvenNumbers', () => {
  // First test
  it('Given an array of one number and return the only one number', () => {
    // Given
    const given = [2]
    // When
    const actual = filterEvenNumbers(given)
    // Then
    expect(actual).toEqual([2])
  })
  // Second test
  it('Given an array of numbers return the highest number', () => {
    // Given
    const given = [4, 5, 6, 7, 8]
    // When
    const actual = filterEvenNumbers(given)
    // Then
    expect(actual).toEqual([4, 6, 8])
  })
})
