import { extractNumber } from './utils'

/**
 * Increments a string that ends with a number, or appends a number if none exists
 * @param str - The string or number to increment
 * @param firstAppend - The separator/number to use when no number exists (default: ' 2')
 * @returns The incremented string
 * 
 * @example
 * ```ts
 * stringIncr('Hello world 42') // => 'Hello world 43'
 * stringIncr('Hello world') // => 'Hello world 2'
 * stringIncr('Hello world', '-1') // => 'Hello world-1'
 * stringIncr(42) // => '43'
 * ```
 */
export function stringIncr(
  str: string | number,
  firstAppend?: string | number
): string {
  // Handle number input
  if (typeof str === 'number') {
    return String(str + 1)
  }

  // Handle invalid input
  if (typeof str !== 'string') {
    return '1'
  }

  // Handle empty string
  if (str.length === 0) {
    return '1'
  }

  // Extract base and number
  const { base, number } = extractNumber(str)

  // If a number exists, increment it
  if (number !== '') {
    return base + String(Number(number) + 1)
  }

  // No number exists, append first number
  if (typeof firstAppend === 'number') {
    return `${base} ${firstAppend}`
  }

  if (typeof firstAppend !== 'string') {
    return `${base} 2`
  }

  // If firstAppend ends with a digit, use it directly
  if (/\d$/.test(firstAppend)) {
    return base + firstAppend
  }

  // Otherwise append the separator with '2'
  return `${base}${firstAppend}2`
}
