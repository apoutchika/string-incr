/**
 * Extracts the trailing number from a string
 * @param str - The input string
 * @returns Object with the base string and the number found
 * 
 * @example
 * ```ts
 * extractNumber('hello 42') // => { base: 'hello ', number: '42' }
 * extractNumber('hello') // => { base: 'hello', number: '' }
 * extractNumber('test-5') // => { base: 'test-', number: '5' }
 * ```
 */
export function extractNumber(str: string): { base: string; number: string } {
  const base = str.replace(/\d+$/, '')
  const number = str.slice(base.length)
  return { base, number }
}
