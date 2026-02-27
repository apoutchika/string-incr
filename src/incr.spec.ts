import { describe, it, expect } from 'vitest'
import { stringIncr } from './incr'

describe('stringIncr', () => {
  describe('basic increment', () => {
    it('should increment numbers in strings', () => {
      expect(stringIncr('hello 42')).toBe('hello 43')
      expect(stringIncr('hello world 42')).toBe('hello world 43')
    })

    it('should add first number without separator', () => {
      expect(stringIncr('hello')).toBe('hello 1')
      expect(stringIncr('hello world')).toBe('hello world 1')
    })

    it('should add first number with custom separator', () => {
      expect(stringIncr('hello', '-1')).toBe('hello-1')
      expect(stringIncr('hello', '-2')).toBe('hello-2')
      expect(stringIncr('hello', '-42')).toBe('hello-42')
      expect(stringIncr('hello world', '-42')).toBe('hello world-42')
      expect(stringIncr('hello', 1)).toBe('hello 1')
      expect(stringIncr('hello', 2)).toBe('hello 2')
    })
  })

  describe('numbers with space', () => {
    it('should increment last number with space', () => {
      expect(stringIncr('toto 1')).toBe('toto 2')
      expect(stringIncr('toto 2')).toBe('toto 3')
      expect(stringIncr('toto 9')).toBe('toto 10')
      expect(stringIncr('toto 10')).toBe('toto 11')
    })
  })

  describe('numbers without space', () => {
    it('should increment last number without space', () => {
      expect(stringIncr('toto1')).toBe('toto2')
      expect(stringIncr('toto2')).toBe('toto3')
      expect(stringIncr('toto9')).toBe('toto10')
      expect(stringIncr('toto10')).toBe('toto11')
    })
  })

  describe('multiple numbers', () => {
    it('should only increment the last number', () => {
      expect(stringIncr('ligne 2 place 1')).toBe('ligne 2 place 2')
      expect(stringIncr('ligne 42 place 42')).toBe('ligne 42 place 43')
    })
  })

  describe('edge cases', () => {
    it('should return "1" for empty string', () => {
      expect(stringIncr('')).toBe('1')
    })

    it('should return "1" for invalid input', () => {
      expect(stringIncr({} as any)).toBe('1')
      expect(stringIncr(null as any)).toBe('1')
      expect(stringIncr(undefined as any)).toBe('1')
    })

    it('should increment number input', () => {
      expect(stringIncr(3)).toBe('4')
      expect(stringIncr(41)).toBe('42')
      expect(stringIncr(0)).toBe('1')
      expect(stringIncr(-5)).toBe('-4')
    })
  })

  describe('README examples', () => {
    it('should work with basic examples', () => {
      expect(stringIncr('Hello world')).toBe('Hello world 1')
      expect(stringIncr('Hello world 1')).toBe('Hello world 2')
      expect(stringIncr('Hello world 2')).toBe('Hello world 3')
      expect(stringIncr('Hello world 42')).toBe('Hello world 43')
    })

    it('should work with numbers without spaces', () => {
      expect(stringIncr('Hello world42')).toBe('Hello world43')
      expect(stringIncr('Hello 42 world99')).toBe('Hello 42 world100')
      expect(stringIncr('Hello world-42')).toBe('Hello world-43')
      expect(stringIncr('Hello world-4242')).toBe('Hello world-4243')
    })

    it('should work with custom separators', () => {
      expect(stringIncr('Hello world', '-1')).toBe('Hello world-1')
      expect(stringIncr('Hello world', '-2')).toBe('Hello world-2')
      expect(stringIncr('Hello world', 1)).toBe('Hello world 1')
      expect(stringIncr('Hello world', 42)).toBe('Hello world 42')
      expect(stringIncr('Hello world', '#')).toBe('Hello world#1')
      expect(stringIncr('Hello world 2', '-2')).toBe('Hello world 3')
    })
  })

  describe('backward compatibility', () => {
    it('should maintain v1.0.0 behavior for existing numbers', () => {
      expect(stringIncr('Hello world 42')).toBe('Hello world 43')
      expect(stringIncr('Hello world 2')).toBe('Hello world 3')
      expect(stringIncr('Hello world42')).toBe('Hello world43')
      expect(stringIncr('Hello world99')).toBe('Hello world100')
      expect(stringIncr('Hello world-42')).toBe('Hello world-43')
      expect(stringIncr('Hello world-4242')).toBe('Hello world-4243')
      expect(stringIncr('Hello world 2', '-')).toBe('Hello world 3')
    })
  })

  describe('additional edge cases', () => {
    it('should handle large numbers', () => {
      expect(stringIncr('test 999999')).toBe('test 1000000')
      expect(stringIncr('test999999')).toBe('test1000000')
    })

    it('should handle zero', () => {
      expect(stringIncr('test 0')).toBe('test 1')
      expect(stringIncr('test0')).toBe('test1')
    })

    it('should handle strings with negative-like patterns', () => {
      // Note: Only the numeric part is extracted, not the minus sign
      expect(stringIncr('test -5')).toBe('test -6')
      expect(stringIncr('test-5')).toBe('test-6')
    })
  })
})
