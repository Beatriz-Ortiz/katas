export function powerOfTwo(number) {
  const array_pow = []
  for (let i = 0; i < number.length; i++) {
    array_pow.push(Math.pow(number[i], 2))
  }
  return array_pow
}
