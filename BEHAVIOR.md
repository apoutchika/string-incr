# Behavior Documentation

## Number Extraction

The library extracts only **trailing digits** from strings, not negative signs. This means:

### Current Behavior

```typescript
// The minus sign is treated as a separator, not part of the number
stringIncr('test-5')  // => 'test-6'  (extracts 5, increments to 6)
stringDecr('test-5')  // => 'test-4'  (extracts 5, decrements to 4)

// Space before number
stringIncr('test -5') // => 'test -6' (extracts 5, increments to 6)
stringDecr('test -5') // => 'test -4' (extracts 5, decrements to 4)
```

### Why This Design?

This behavior is intentional and consistent with the library's purpose:
- **Slug generation**: `my-post-1`, `my-post-2`, `my-post-3`
- **File naming**: `file-1.txt`, `file-2.txt`
- **Sequential identifiers**: `item-99`, `item-100`

The minus sign is treated as a **separator**, not a mathematical operator.

### Edge Cases

#### Zero Handling

```typescript
// Decrementing zero
stringDecr('test 0')  // => 'test -1' (0 - 1 = -1, keeps space)
stringDecr('test0')   // => 'test-1'  (0 - 1 = -1, no space)

// Incrementing zero
stringIncr('test 0')  // => 'test 1'  (0 + 1 = 1)
stringIncr('test0')   // => 'test1'   (0 + 1 = 1)
```

#### Number Input vs String Input

```typescript
// Direct number input: mathematical operation
stringDecr(0)   // => '-1'  (correct: 0 - 1 = -1)
stringDecr(-5)  // => '-6'  (correct: -5 - 1 = -6)

// String input: only extracts trailing digits
stringDecr('test-5')  // => 'test-4'  (extracts 5, not -5)
```

### Recommendations

If you need to handle negative numbers in strings:

1. **For mathematical operations**: Convert to number first
   ```typescript
   const num = parseInt(str.match(/-?\d+$/)?.[0] || '0')
   const result = num - 1
   ```

2. **For sequential naming**: Use the library as-is
   ```typescript
   stringIncr('item-1')  // => 'item-2'
   stringDecr('item-2')  // => 'item-1'
   ```

3. **For negative sequences**: Consider a different approach
   ```typescript
   // Instead of: 'item--1', 'item--2'
   // Use: 'item-n1', 'item-n2'
   // Or: 'item_-1', 'item_-2'
   ```

### Consistency Rules

1. Only **trailing digits** are extracted and modified
2. Everything before the trailing digits is preserved
3. The minus sign is **never** part of the extracted number
4. Direct number inputs follow mathematical rules
5. String inputs follow string manipulation rules

This design ensures predictable behavior for the primary use case: generating sequential identifiers.
