import { copyArray } from './copy.js'

describe('copyArray', () => {
  it('Receives a array and show it', () => {
    // Given
    const given = [1, 2, 3]
    // When
    const actual = copyArray(...given)
    // Then
    expect(actual).toEqual([1, 2, 3])
  })

  it('Receives n parameters which are arrays and stitches them into a single array', () => {
    // Given
    const given = [
      [1, 2, 3],
      [4, 5, 6]
    ]
    // When
    const actual = copyArray(...given)
    // Then
    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })
})
