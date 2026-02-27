# Behavior Documentation

## Number Extraction

The library extracts only **trailing digits** from strings, not negative signs. This means:

### Current Behavior

```typescript
// The minus sign is treated as a separator, not part of the number
stringIncr('test-5')  // => 'test-6'  (extracts 5, increments to 6)
stringDecr('test-5')  // => 'test-4'  (extracts 5, decrements to 4)
stringDecr('test-1')  // => 'test-'   (extracts 1, removes it)

// Space before number
stringIncr('test 5')  // => 'test 6'  (extracts 5, increments to 6)
stringDecr('test 5')  // => 'test 4'  (extracts 5, decrements to 4)
stringDecr('test 1')  // => 'test'    (extracts 1, removes it)
```

### Why This Design?

This behavior is intentional and consistent with the library's purpose:
- **Slug generation**: `my-post-1`, `my-post-2`, `my-post-3`
- **File naming**: `file-1.txt`, `file-2.txt`
- **Sequential identifiers**: `item-99`, `item-100`
- **Countdown sequences**: `item-5` → `item-4` → ... → `item-1` → `item`

The minus sign is treated as a **separator**, not a mathematical operator.

## stringDecr Behavior (v4.0.0+)

### Key Feature: Auto-removal at 1 or 0

When decrementing, if the number reaches **1 or 0**, the number is **removed entirely**:

```typescript
stringDecr('test 5')  // => 'test 4'
stringDecr('test 4')  // => 'test 3'
stringDecr('test 3')  // => 'test 2'
stringDecr('test 2')  // => 'test 1'
stringDecr('test 1')  // => 'test'     ← number removed
stringDecr('test 0')  // => 'test'     ← number removed
stringDecr('test')    // => 'test'     ← no change
```

### Why Remove at 1?

This design makes countdown sequences intuitive:
- `item-3` → `item-2` → `item-1` → `item` (clean!)
- No awkward `item-0` or `item--1`
- The base string represents "no number" or "default state"

### Edge Cases

#### Zero and One Handling

```typescript
// Decrementing 1 or 0 removes the number
stringDecr('test 1')   // => 'test'
stringDecr('test 0')   // => 'test'
stringDecr('test-1')   // => 'test-'
stringDecr('test-0')   // => 'test-'

// No number means no change
stringDecr('test')     // => 'test'
stringDecr('test-')    // => 'test-'
```

#### Number Input vs String Input

```typescript
// Direct number input: mathematical operation (unchanged)
stringDecr(5)    // => '4'
stringDecr(1)    // => '0'
stringDecr(0)    // => '-1'  ← mathematical operation
stringDecr(-5)   // => '-6'

// String input: removes number at 1 or 0
stringDecr('test 1')  // => 'test'   ← removes number
stringDecr('test 0')  // => 'test'   ← removes number
```

#### Separators

```typescript
// With space separator
stringDecr('test 2')   // => 'test 1'
stringDecr('test 1')   // => 'test'      ← space removed automatically

// With dash separator - keeps separator by default
stringDecr('test-2')   // => 'test-1'
stringDecr('test-1')   // => 'test-'     ← dash kept

// With dash separator - remove with parameter (ONLY when number ≤ 1)
stringDecr('test-42', '-')  // => 'test-41'  ← separator NOT removed (42 > 1)
stringDecr('test-2', '-')   // => 'test-1'   ← separator NOT removed (2 > 1)
stringDecr('test-1', '-')   // => 'test'     ← separator removed (1 ≤ 1)

// With underscore separator
stringDecr('test_2')        // => 'test_1'
stringDecr('test_1')        // => 'test_'     ← underscore kept
stringDecr('test_1', '_')   // => 'test'      ← underscore removed
```

The library automatically trims trailing spaces but keeps other separators unless explicitly removed with the `removeSeparator` parameter. **Important**: `removeSeparator` only applies when the number reaches 1 or 0, not during normal decrements.

## stringIncr Behavior

### Consistent Incrementing

```typescript
stringIncr('test')     // => 'test 1'    (default: space + 1)
stringIncr('test 1')   // => 'test 2'
stringIncr('test 2')   // => 'test 3'
stringIncr('test 99')  // => 'test 100'

// Custom first append
stringIncr('test', '-1')  // => 'test-1'
stringIncr('test', 1)     // => 'test 1'
stringIncr('test', '#')   // => 'test#1'
```

### Symmetry with stringDecr

```typescript
// Increment always adds/increases
stringIncr('test')     // => 'test 1'
stringIncr('test 1')   // => 'test 2'
stringIncr('test 0')   // => 'test 1'

// Decrement removes at 1 or 0
stringDecr('test 2')   // => 'test 1'
stringDecr('test 1')   // => 'test'
stringDecr('test 0')   // => 'test'
stringDecr('test')     // => 'test'
```

## Recommendations

### For Sequential Naming

Use the library as-is - it's designed for this:

```typescript
// Perfect for slugs
stringIncr('my-post')     // => 'my-post-1'
stringIncr('my-post-1')   // => 'my-post-2'

// Perfect for countdown
stringDecr('item-5')      // => 'item-4'
stringDecr('item-1')      // => 'item'
```

### For Mathematical Operations

Use number input for pure math:

```typescript
stringIncr(5)    // => '6'
stringIncr(-5)   // => '-4'
stringDecr(5)    // => '4'
stringDecr(0)    // => '-1'
```

### For Negative Sequences

If you need negative numbers in strings, consider alternatives:

```typescript
// Instead of: 'item--1', 'item--2'
// Use: 'item-n1', 'item-n2'
// Or: 'item_-1', 'item_-2'
// Or: handle with number input and format separately
```

## Breaking Changes in v4.0.0

### stringIncr Changes

**Before (v3.x):**
```typescript
stringIncr('test')   // => 'test 2'
```

**After (v4.0.0):**
```typescript
stringIncr('test')   // => 'test 1'  ← starts at 1 instead of 2
```

**Migration - To keep v3.x behavior:**
```typescript
// Use the firstAppend parameter to start at 2
stringIncr('test', 2)  // => 'test 2'  ← same as v3.x default
```

### stringDecr Changes

**Before (v3.x):**
```typescript
stringDecr('test 1')   // => 'test 0'
stringDecr('test 0')   // => 'test -1'
stringDecr('test')     // => 'test -1'
```

**After (v4.0.0):**
```typescript
stringDecr('test 1')   // => 'test'      ← removes number
stringDecr('test 0')   // => 'test'      ← removes number
stringDecr('test')     // => 'test'      ← no change
```

**Removed:**
- `firstAppend` parameter (no longer needed)
- Negative number generation for strings

### Migration Guide

If you relied on the old behavior:

```typescript
// Old code
stringDecr('test')  // => 'test -1'

// New equivalent (if you need negative)
const result = stringDecr('test')
if (result === 'test') {
  result = 'test -1'  // manually add if needed
}

// Or use number input
stringDecr(0)  // => '-1'
```

## Consistency Rules

1. Only **trailing digits** are extracted and modified
2. Everything before the trailing digits is preserved
3. The minus sign is **never** part of the extracted number
4. Direct number inputs follow mathematical rules
5. String inputs follow string manipulation rules
6. **stringDecr removes numbers at 1 or 0** (v4.0.0+)
7. Trailing spaces are trimmed when removing numbers

This design ensures predictable behavior for the primary use case: generating sequential identifiers and countdown sequences.
