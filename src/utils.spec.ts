import { describe, it, expect } from 'vitest'
import { extractNumber } from './utils'

describe('extractNumber', () => {
  it('should extract trailing numbers', () => {
    expect(extractNumber('hello 42')).toEqual({ base: 'hello ', number: '42' })
    expect(extractNumber('test123')).toEqual({ base: 'test', number: '123' })
    expect(extractNumber('file-99')).toEqual({ base: 'file-', number: '99' })
  })

  it('should return empty number when no trailing digits', () => {
    expect(extractNumber('hello')).toEqual({ base: 'hello', number: '' })
    expect(extractNumber('test-')).toEqual({ base: 'test-', number: '' })
  })

  it('should only extract trailing digits, not negative signs', () => {
    // This is the current behavior - minus sign is part of the base
    expect(extractNumber('test -5')).toEqual({ base: 'test -', number: '5' })
    expect(extractNumber('test-5')).toEqual({ base: 'test-', number: '5' })
  })

  it('should handle edge cases', () => {
    expect(extractNumber('')).toEqual({ base: '', number: '' })
    expect(extractNumber('123')).toEqual({ base: '', number: '123' })
  })
})
