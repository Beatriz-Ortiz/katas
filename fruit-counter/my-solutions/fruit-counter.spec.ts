import { fruitCounter } from './fruit-counter'

describe('fruitCounter', () => {
  // First test
  it('Return a count of the only one fruit', () => {
    // Given
    const given = ['🍋']
    // When
    const actual = fruitCounter(given)
    // Then
    expect(actual).toEqual({ '🍋': 1 })
  })

  // Second test
  it('Return a count of the only type of fruit', () => {
    // Given
    const given = ['🍋', '🍋', '🍋', '🍋', '🍋', '🍋']
    // When
    const actual = fruitCounter(given)
    // Then
    expect(actual).toEqual({ '🍋': 6 })
  })

  // Thrid test
  it('Return a count of all repeated fruits', () => {
    // Given
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍒', '🍉', '🍒', '🍋']
    // When
    const actual = fruitCounter(given)
    // Then
    expect(actual).toEqual({ '🍋': 4, '🍉': 2, '🍒': 3 })
  })
})
