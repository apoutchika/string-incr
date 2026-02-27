import { describe, it, expect } from 'vitest'
import { stringDecr } from './decr'

describe('stringDecr', () => {
  describe('basic decrement', () => {
    it('should decrement numbers in strings', () => {
      expect(stringDecr('hello 42')).toBe('hello 41')
      expect(stringDecr('hello world 42')).toBe('hello world 41')
    })

    it('should add first negative number without separator', () => {
      expect(stringDecr('hello')).toBe('hello -1')
      expect(stringDecr('hello world')).toBe('hello world -1')
    })

    it('should add first number with custom separator', () => {
      expect(stringDecr('hello', '-1')).toBe('hello-1')
      expect(stringDecr('hello', '-2')).toBe('hello-2')
      expect(stringDecr('hello', '-42')).toBe('hello-42')
      expect(stringDecr('hello world', '-42')).toBe('hello world-42')
      expect(stringDecr('hello', 1)).toBe('hello 1')
      expect(stringDecr('hello', 2)).toBe('hello 2')
      expect(stringDecr('hello', -1)).toBe('hello -1')
    })
  })

  describe('numbers with space', () => {
    it('should decrement last number with space', () => {
      expect(stringDecr('toto 2')).toBe('toto 1')
      expect(stringDecr('toto 9')).toBe('toto 8')
      expect(stringDecr('toto 10')).toBe('toto 9')
    })
  })

  describe('numbers without space', () => {
    it('should decrement last number without space', () => {
      expect(stringDecr('toto2')).toBe('toto1')
      expect(stringDecr('toto9')).toBe('toto8')
      expect(stringDecr('toto10')).toBe('toto9')
      expect(stringDecr('toto11')).toBe('toto10')
      expect(stringDecr('toto12')).toBe('toto11')
      expect(stringDecr('toto13')).toBe('toto12')
    })
  })

  describe('multiple numbers', () => {
    it('should only decrement the last number', () => {
      expect(stringDecr('ligne 2 place 1')).toBe('ligne 2 place 0')
      expect(stringDecr('ligne 42 place 42')).toBe('ligne 42 place 41')
    })
  })

  describe('edge cases', () => {
    it('should return "-1" for empty string', () => {
      expect(stringDecr('')).toBe('-1')
    })

    it('should return "-1" for invalid input', () => {
      expect(stringDecr({} as any)).toBe('-1')
      expect(stringDecr(null as any)).toBe('-1')
      expect(stringDecr(undefined as any)).toBe('-1')
    })

    it('should decrement number input', () => {
      expect(stringDecr(3)).toBe('2')
      expect(stringDecr(41)).toBe('40')
      expect(stringDecr(0)).toBe('-1')
      expect(stringDecr(-5)).toBe('-6')
    })
  })

  describe('README examples', () => {
    it('should work with basic examples', () => {
      expect(stringDecr('Hello world')).toBe('Hello world -1')
      expect(stringDecr('Hello world 2')).toBe('Hello world 1')
      expect(stringDecr('Hello world 42')).toBe('Hello world 41')
    })

    it('should work with numbers without spaces', () => {
      expect(stringDecr('Hello world42')).toBe('Hello world41')
      expect(stringDecr('Hello 42 world100')).toBe('Hello 42 world99')
      expect(stringDecr('Hello world-42')).toBe('Hello world-41')
      expect(stringDecr('Hello world-4242')).toBe('Hello world-4241')
    })

    it('should work with custom separators', () => {
      expect(stringDecr('Hello world', '-1')).toBe('Hello world-1')
      expect(stringDecr('Hello world', '-2')).toBe('Hello world-2')
      expect(stringDecr('Hello world', 1)).toBe('Hello world 1')
      expect(stringDecr('Hello world', 42)).toBe('Hello world 42')
      expect(stringDecr('Hello world', '#')).toBe('Hello world#-1')
      expect(stringDecr('Hello world 2', '-2')).toBe('Hello world 1')
    })
  })

  describe('backward compatibility', () => {
    it('should maintain v1.0.0 behavior', () => {
      expect(stringDecr('Hello world 42')).toBe('Hello world 41')
      expect(stringDecr('Hello world')).toBe('Hello world -1')
      expect(stringDecr('Hello world 2')).toBe('Hello world 1')
      expect(stringDecr('Hello world42')).toBe('Hello world41')
      expect(stringDecr('Hello world100')).toBe('Hello world99')
      expect(stringDecr('Hello world-42')).toBe('Hello world-41')
      expect(stringDecr('Hello world-4242')).toBe('Hello world-4241')
      expect(stringDecr('Hello world', '-')).toBe('Hello world--1')
      expect(stringDecr('Hello world 2', '-')).toBe('Hello world 1')
    })
  })

  describe('additional edge cases', () => {
    it('should handle large numbers', () => {
      expect(stringDecr('test 1000000')).toBe('test 999999')
      expect(stringDecr('test1000000')).toBe('test999999')
    })

    it('should handle zero', () => {
      expect(stringDecr('test 0')).toBe('test -1')
      expect(stringDecr('test0')).toBe('test-1')
    })

    it('should handle strings with negative-like patterns', () => {
      // Note: Only the numeric part is extracted, not the minus sign
      expect(stringDecr('test -5')).toBe('test -4')
      expect(stringDecr('test-5')).toBe('test-4')
    })

    it('should handle going from positive to negative', () => {
      expect(stringDecr('test 1')).toBe('test 0')
      expect(stringDecr('test1')).toBe('test0')
    })
  })
})
