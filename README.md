# string-incr

> Increment or decrement strings with numbers

[![npm version](https://img.shields.io/npm/v/string-incr.svg)](https://www.npmjs.com/package/string-incr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, zero-dependency utility for incrementing and decrementing strings that contain numbers. Perfect for generating sequential names, slugs, or identifiers.

## Features

- 🚀 Zero dependencies
- 📦 Dual ESM/CommonJS support
- 🔒 Fully typed with TypeScript
- ✅ Comprehensive test coverage
- 🪶 Lightweight (~1KB minified)

## Installation

```bash
npm install string-incr
# or
yarn add string-incr
# or
pnpm add string-incr
```

## Usage

### ESM

```typescript
import { stringIncr, stringDecr } from 'string-incr'

stringIncr('Hello world 42')
//=> 'Hello world 43'

stringIncr('Hello world')
//=> 'Hello world 1'

stringDecr('Hello world 42')
//=> 'Hello world 41'

stringDecr('Hello world 1')
//=> 'Hello world'
```

### CommonJS

```javascript
const { stringIncr, stringDecr } = require('string-incr')

stringIncr('Hello world 42')
//=> 'Hello world 43'

stringDecr('Hello world 2')
//=> 'Hello world 1'

stringDecr('Hello world 1')
//=> 'Hello world'
```

## API

### `stringIncr(str, firstAppend?)`

Increments a string that ends with a number, or appends a number if none exists.

#### Parameters

- `str` (string | number): The string or number to increment
- `firstAppend` (string | number, optional): The separator/number to use when no number exists (default: `' 1'`)

#### Returns

- `string`: The incremented string

#### Examples

```typescript
// Basic increment
stringIncr('Hello world')
//=> 'Hello world 1'

stringIncr('Hello world 1')
//=> 'Hello world 2'

stringIncr('Hello world 2')
//=> 'Hello world 3'

stringIncr('Hello world 42')
//=> 'Hello world 43'

// Numbers without spaces
stringIncr('Hello world42')
//=> 'Hello world43'

stringIncr('Hello 42 world99')
//=> 'Hello 42 world100'

// With separators
stringIncr('Hello world-42')
//=> 'Hello world-43'

// Custom first append
stringIncr('Hello world', '-1')
//=> 'Hello world-1'

stringIncr('Hello world', 1)
//=> 'Hello world 1'

stringIncr('Hello world', '#')
//=> 'Hello world#1'

// Number input
stringIncr(41)
//=> '42'

// Edge cases
stringIncr('')
//=> '1'
```

### `stringDecr(str, removeSeparator?)`

Decrements a string that ends with a number. When the number reaches 1 or 0, it removes the number entirely.

#### Parameters

- `str` (string | number): The string or number to decrement
- `removeSeparator` (string, optional): Separator to remove when number reaches ≤ 1

#### Returns

- `string`: The decremented string, or the base string when number reaches ≤ 1

#### Examples

```typescript
// Basic decrement
stringDecr('Hello world 42')
//=> 'Hello world 41'

stringDecr('Hello world 3')
//=> 'Hello world 2'

stringDecr('Hello world 2')
//=> 'Hello world 1'

// Removes number when reaching 1 or 0
stringDecr('Hello world 1')
//=> 'Hello world'

stringDecr('Hello world 0')
//=> 'Hello world'

// No change when no number exists
stringDecr('Hello world')
//=> 'Hello world'

// Numbers without spaces
stringDecr('Hello world42')
//=> 'Hello world41'

stringDecr('Hello 42 world100')
//=> 'Hello 42 world99'

// With separators - keeps separator by default
stringDecr('Hello world-42')
//=> 'Hello world-41'

stringDecr('Hello world-1')
//=> 'Hello world-'

// With separators - remove separator when specified
stringDecr('Hello world-1', '-')
//=> 'Hello world'

stringDecr('Hello world#1', '#')
//=> 'Hello world'

stringDecr('Hello_world_1', '_')
//=> 'Hello_world'

// Number input (mathematical operation)
stringDecr(42)
//=> '41'

stringDecr(0)
//=> '-1'
```

## Behavior

### stringIncr

- Increments the **last number** in the string
- If no number exists, appends a default number (default: `' 1'`)
- The `firstAppend` parameter controls what to append when no number exists
- Numbers can be with or without spaces/separators

### stringDecr

- Decrements the **last number** in the string
- **When the number reaches 1 or 0, it removes the number entirely**
- If no number exists, returns the string unchanged
- Numbers can be with or without spaces/separators

### Important Notes

- Only trailing **digits** are extracted, not minus signs
  - `stringIncr('test-5')` → `'test-6'` (the `-` is a separator, not part of the number)
  - `stringDecr('test-5')` → `'test-4'` (extracts `5`, decrements to `4`)
  - `stringDecr('test-1')` → `'test-'` (removes the `1`)
- For mathematical operations on negative numbers, use number input:
  - `stringIncr(-5)` → `'-4'`
  - `stringDecr(-5)` → `'-6'`

See [BEHAVIOR.md](./BEHAVIOR.md) for detailed edge cases and design decisions.

## Use Cases

- Generating sequential file names: `file.txt` → `file 1.txt` → `file 2.txt`
- Creating unique slugs: `my-post` → `my-post-1` → `my-post-2`
- Versioning identifiers: `version-1` → `version-2`
- Duplicate name handling in any system
- Countdown sequences: `item-5` → `item-4` → `item-3` → `item-2` → `item-1` → `item`

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

```typescript
import { stringIncr, stringDecr } from 'string-incr'

// Full type safety
const result: string = stringIncr('test 1')
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Build
pnpm build

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## Changelog

### 4.0.0 (Current)
- ✨ Dual ESM/CommonJS support
- 🔄 **BREAKING**: `stringIncr` now starts at 1 instead of 2
  - `stringIncr('test')` → `'test 1'` (was `'test 2'`)
  - To keep v3.x behavior: `stringIncr('test', 2)` → `'test 2'`
- 🔄 **BREAKING**: `stringDecr` removes numbers at 1 or 0
  - `stringDecr('test 1')` → `'test'` (was `'test 0'`)
  - Removed `firstAppend` parameter
- 🔄 Migrated from Jest to Vitest
- 📦 Build with tsup for better optimization
- 📝 Enhanced documentation

See [CHANGELOG.md](./CHANGELOG.md) for full details and migration guide.

### 3.1.1
- 📝 Fix typo in readme

### 3.0.0
- ✨ Add decrement function

### 2.0.0
- ✨ TypeScript support

## License

MIT © [apoutchika](https://github.com/apoutchika)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
