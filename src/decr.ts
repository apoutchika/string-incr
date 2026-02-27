import { extractNumber } from './utils'

/**
 * Decrements a string that ends with a number, removing it when reaching 1 or 0
 * @param str - The string or number to decrement
 * @returns The decremented string, or the base string when the number reaches 1 or below
 * 
 * @example
 * ```ts
 * stringDecr('Hello world 42') // => 'Hello world 41'
 * stringDecr('Hello world 2') // => 'Hello world 1'
 * stringDecr('Hello world 1') // => 'Hello world'
 * stringDecr('Hello world 0') // => 'Hello world'
 * stringDecr('Hello world') // => 'Hello world'
 * stringDecr(42) // => '41'
 * stringDecr(0) // => '-1'
 * ```
 */
export function stringDecr(str: string | number): string {
  // Handle number input - pure mathematical operation
  if (typeof str === 'number') {
    return String(str - 1)
  }

  // Handle invalid input - return as-is
  if (typeof str !== 'string') {
    return String(str)
  }

  // Handle empty string - return as-is
  if (str.length === 0) {
    return str
  }

  // Extract base and number
  const { base, number } = extractNumber(str)

  // If no number exists, return as-is
  if (number === '') {
    return str
  }

  const numValue = Number(number)

  // If number is 1 or 0, remove it (return just the base, trimmed)
  if (numValue <= 1) {
    return base.trimEnd()
  }

  // Otherwise, decrement the number
  return base + String(numValue - 1)
}
