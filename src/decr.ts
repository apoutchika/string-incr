import { extractNumber } from './utils'

/**
 * Decrements a string that ends with a number, or appends a negative number if none exists
 * @param str - The string or number to decrement
 * @param firstAppend - The separator/number to use when no number exists (default: ' -1')
 * @returns The decremented string
 * 
 * @example
 * ```ts
 * stringDecr('Hello world 42') // => 'Hello world 41'
 * stringDecr('Hello world') // => 'Hello world -1'
 * stringDecr('Hello world', '-1') // => 'Hello world-1'
 * stringDecr(42) // => '41'
 * ```
 */
export function stringDecr(
  str: string | number,
  firstAppend?: string | number
): string {
  // Handle number input
  if (typeof str === 'number') {
    return String(str - 1)
  }

  // Handle invalid input
  if (typeof str !== 'string') {
    return '-1'
  }

  // Handle empty string
  if (str.length === 0) {
    return '-1'
  }

  // Extract base and number
  const { base, number } = extractNumber(str)

  // If a number exists, decrement it
  if (number !== '') {
    return base + String(Number(number) - 1)
  }

  // No number exists, append first number
  if (typeof firstAppend === 'number') {
    return `${base} ${firstAppend}`
  }

  if (typeof firstAppend !== 'string') {
    return `${base} -1`
  }

  // If firstAppend ends with a digit, use it directly
  if (/\d$/.test(firstAppend)) {
    return base + firstAppend
  }

  // Otherwise append the separator with '-1'
  return `${base}${firstAppend}-1`
}
