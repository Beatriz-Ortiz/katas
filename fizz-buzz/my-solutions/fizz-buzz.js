export function fizzBuzz(number) {
    // Start from 1 by passing map function to Array from(), with an object with a length property
    return Array.from({ length: number }, (_, i) => i + 1).map(x =>
        (x % 3 === 0) ? (x % 5 === 0 ? 'fizzbuzz' : 'fizz') : (x % 5 === 0) ? 'buzz' : x
    )
}