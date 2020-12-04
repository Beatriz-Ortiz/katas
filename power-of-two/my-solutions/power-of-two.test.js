import { powerOfTwo } from './power-of-two.js'

describe('powerOfTwo', () => {
  // First test
  it('Given a simple array with one number and return the same array', () => {
    // Given
    const given = [1]
    // When
    const actual = powerOfTwo(given)
    // Then
    expect(actual).toEqual([1])
  })

  // Second test
  it('Given an array numbers and return an array with the powers of 2', () => {
    // Given
    const given = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // When
    const actual = powerOfTwo(given)
    // Then
    expect(actual).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
  })
})
