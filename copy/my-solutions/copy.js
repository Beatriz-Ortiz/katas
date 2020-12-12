export function copyArray(...arrays) {
  const result = []
  for (const array of arrays) {
    result.push(...array)
  }
  return result
}
