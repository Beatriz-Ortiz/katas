export function highestNumber(number) {
  // Se usa let ya que el numero mas alto es reasignado
  let largest = 0

  for (let i = 0; i < number.length; i++) {
    const num = number[i]
    if (num > largest) {
      largest = num
    }
  }
  return largest
}
