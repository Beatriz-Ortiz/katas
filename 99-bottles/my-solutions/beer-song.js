export class BeerSong {
  /**
   * Get the verse associate with de number
   * @param {int} number
   */
  getVerse(number) {
    switch (number) {
      // Special cases
      case 2:
        return '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.'
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.'
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer. Take one down and pass it around, ${
          number - 1
        } bottles of beer on the wall.`
    }
  }

  /**
   *
   * @param {int} start_verse
   * @param {int} end_verse
   */
  getSing(start_verse, end_verse) {
    const verses = []
    // Sing must have the start verse number until the end verse number
    for (let i = start_verse; i >= end_verse; i--) {
      verses.push(this.getVerse(i))
    }
    return verses
  }
}
