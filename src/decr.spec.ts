import { describe, it, expect } from 'vitest'
import { stringDecr } from './decr'

describe('stringDecr', () => {
  describe('basic decrement', () => {
    it('should decrement numbers in strings', () => {
      expect(stringDecr('hello 42')).toBe('hello 41')
      expect(stringDecr('hello world 42')).toBe('hello world 41')
      expect(stringDecr('hello 3')).toBe('hello 2')
    })

    it('should remove number when reaching 1 or 0', () => {
      expect(stringDecr('hello 2')).toBe('hello 1')
      expect(stringDecr('hello 1')).toBe('hello')
      expect(stringDecr('hello 0')).toBe('hello')
    })

    it('should return unchanged when no number exists', () => {
      expect(stringDecr('hello')).toBe('hello')
      expect(stringDecr('hello world')).toBe('hello world')
    })

    it('should optionally remove separator when number reaches 1 or 0', () => {
      expect(stringDecr('hello-1')).toBe('hello-')
      expect(stringDecr('hello-1', '-')).toBe('hello')
      expect(stringDecr('hello_1', '_')).toBe('hello')
      expect(stringDecr('hello#1', '#')).toBe('hello')
      expect(stringDecr('hello--1', '--')).toBe('hello')
    })

    it('should NOT remove separator when number is > 1', () => {
      // removeSeparator only applies when number reaches 1 or 0
      expect(stringDecr('hello-42', '-')).toBe('hello-41')
      expect(stringDecr('hello-10', '-')).toBe('hello-9')
      expect(stringDecr('hello-2', '-')).toBe('hello-1')
      expect(stringDecr('hello#42', '#')).toBe('hello#41')
      expect(stringDecr('hello#10', '#')).toBe('hello#9')
      expect(stringDecr('hello_5', '_')).toBe('hello_4')
    })
  })

  describe('numbers with space', () => {
    it('should decrement last number with space', () => {
      expect(stringDecr('toto 10')).toBe('toto 9')
      expect(stringDecr('toto 9')).toBe('toto 8')
      expect(stringDecr('toto 2')).toBe('toto 1')
      expect(stringDecr('toto 1')).toBe('toto')
    })
  })

  describe('numbers without space', () => {
    it('should decrement last number without space', () => {
      expect(stringDecr('toto13')).toBe('toto12')
      expect(stringDecr('toto12')).toBe('toto11')
      expect(stringDecr('toto11')).toBe('toto10')
      expect(stringDecr('toto10')).toBe('toto9')
      expect(stringDecr('toto2')).toBe('toto1')
      expect(stringDecr('toto1')).toBe('toto')
    })
  })

  describe('multiple numbers', () => {
    it('should only decrement the last number', () => {
      expect(stringDecr('ligne 2 place 5')).toBe('ligne 2 place 4')
      expect(stringDecr('ligne 2 place 1')).toBe('ligne 2 place')
      expect(stringDecr('ligne 42 place 42')).toBe('ligne 42 place 41')
    })
  })

  describe('edge cases', () => {
    it('should return unchanged for empty string', () => {
      expect(stringDecr('')).toBe('')
    })

    it('should return string representation for invalid input', () => {
      expect(stringDecr({} as any)).toBe('[object Object]')
      expect(stringDecr(null as any)).toBe('null')
      expect(stringDecr(undefined as any)).toBe('undefined')
    })

    it('should decrement number input (mathematical operation)', () => {
      expect(stringDecr(42)).toBe('41')
      expect(stringDecr(3)).toBe('2')
      expect(stringDecr(1)).toBe('0')
      expect(stringDecr(0)).toBe('-1')
      expect(stringDecr(-5)).toBe('-6')
    })
  })

  describe('README examples', () => {
    it('should work with basic examples', () => {
      expect(stringDecr('Hello world 42')).toBe('Hello world 41')
      expect(stringDecr('Hello world 3')).toBe('Hello world 2')
      expect(stringDecr('Hello world 2')).toBe('Hello world 1')
      expect(stringDecr('Hello world 1')).toBe('Hello world')
      expect(stringDecr('Hello world')).toBe('Hello world')
    })

    it('should work with numbers without spaces', () => {
      expect(stringDecr('Hello world42')).toBe('Hello world41')
      expect(stringDecr('Hello 42 world100')).toBe('Hello 42 world99')
      expect(stringDecr('Hello world-42')).toBe('Hello world-41')
      expect(stringDecr('Hello world-2')).toBe('Hello world-1')
      expect(stringDecr('Hello world-1')).toBe('Hello world-')
      expect(stringDecr('Hello world-1', '-')).toBe('Hello world')
    })
  })

  describe('additional edge cases', () => {
    it('should handle large numbers', () => {
      expect(stringDecr('test 1000000')).toBe('test 999999')
      expect(stringDecr('test1000000')).toBe('test999999')
    })

    it('should remove zero and one', () => {
      expect(stringDecr('test 0')).toBe('test')
      expect(stringDecr('test0')).toBe('test')
      expect(stringDecr('test 1')).toBe('test')
      expect(stringDecr('test1')).toBe('test')
    })

    it('should handle strings with separators', () => {
      expect(stringDecr('test-5')).toBe('test-4')
      expect(stringDecr('test-2')).toBe('test-1')
      expect(stringDecr('test-1')).toBe('test-')
      expect(stringDecr('test-1', '-')).toBe('test')
      expect(stringDecr('test_3')).toBe('test_2')
      expect(stringDecr('test_1')).toBe('test_')
      expect(stringDecr('test_1', '_')).toBe('test')
    })

    it('should handle trailing spaces correctly', () => {
      expect(stringDecr('test 5')).toBe('test 4')
      expect(stringDecr('test 1')).toBe('test')
      expect(stringDecr('test  1')).toBe('test')
    })
  })
})
