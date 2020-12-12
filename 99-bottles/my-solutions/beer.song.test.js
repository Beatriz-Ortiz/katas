import { BeerSong } from './beer-song.js'

describe('BeerSong', () => {
  // First test
  it('Give a verse with number 99', () => {
    // Call class BeerSong()
    const beerSong = new BeerSong()

    // Given
    const given = `99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.`
    // When
    const actual = beerSong.getVerse(99)
    // Then
    expect(actual).toEqual(given)
  })

  // Second test
  it('Give a verse with number 95', () => {
    // Call class BeerSong()
    const beerSong = new BeerSong()

    // Given
    const given = `95 bottles of beer on the wall, 95 bottles of beer. Take one down and pass it around, 94 bottles of beer on the wall.`
    // When
    const actual = beerSong.getVerse(95)
    // Then
    expect(actual).toEqual(given)
  })

  // Third test
  it('Give a verse with number 10 and end in verse with number 9', () => {
    // Call class BeerSong()
    const beerSong = new BeerSong()

    // Given
    const given = `10 bottles of beer on the wall, 10 bottles of beer. Take one down and pass it around, 9 bottles of beer on the wall. 9 bottles of beer on the wall, 9 bottles of beer.
    Take one down and pass it around, 8 bottles of beer on the wall.`
    // When
    const actual = beerSong.getSing(10, 9)
    // Then
    expect(actual).toEqual(given)
  })

  // Third test
  it('Give all verses until the verse 0', () => {
    // Call class BeerSong()
    const beerSong = new BeerSong()

    // Given
    const given = `5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall.`
    // When
    const actual = beerSong.getSing(5)
    // Then
    expect(actual).toEqual(given)
  })
})
