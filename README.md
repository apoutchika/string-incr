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

stringDecr('Hello world 42')
//=> 'Hello world 41'
```

### CommonJS

```javascript
const { stringIncr, stringDecr } = require('string-incr')

stringIncr('Hello world 42')
//=> 'Hello world 43'
```

## API

### `stringIncr(str, firstAppend?)`

Increments a string that ends with a number, or appends a number if none exists.

#### Parameters

- `str` (string | number): The string or number to increment
- `firstAppend` (string | number, optional): The separator/number to use when no number exists (default: `' 2'`)

#### Returns

- `string`: The incremented string

#### Examples

```typescript
// Basic increment
stringIncr('Hello world')
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
//=> 'Hello world#2'

// Number input
stringIncr(41)
//=> '42'

// Edge cases
stringIncr('')
//=> '1'
```

### `stringDecr(str, firstAppend?)`

Decrements a string that ends with a number, or appends a negative number if none exists.

#### Parameters

- `str` (string | number): The string or number to decrement
- `firstAppend` (string | number, optional): The separator/number to use when no number exists (default: `' -1'`)

#### Returns

- `string`: The decremented string

#### Examples

```typescript
// Basic decrement
stringDecr('Hello world')
//=> 'Hello world -1'

stringDecr('Hello world 2')
//=> 'Hello world 1'

stringDecr('Hello world 42')
//=> 'Hello world 41'

// Numbers without spaces
stringDecr('Hello world42')
//=> 'Hello world41'

stringDecr('Hello 42 world100')
//=> 'Hello 42 world99'

// With separators
stringDecr('Hello world-42')
//=> 'Hello world-41'

// Custom first append
stringDecr('Hello world', '-1')
//=> 'Hello world-1'

stringDecr('Hello world', 1)
//=> 'Hello world 1'

stringDecr('Hello world', '#')
//=> 'Hello world#-1'

// Number input
stringDecr(42)
//=> '41'

// Edge cases
stringDecr('')
//=> '-1'
```

## Behavior

- Only the **last number** in the string is incremented/decremented
- If no number exists, a default number is appended (2 for increment, -1 for decrement)
- The `firstAppend` parameter only affects strings without numbers
- Numbers can be with or without spaces/separators
- Handles negative numbers correctly

## Use Cases

- Generating sequential file names: `file.txt` → `file 2.txt` → `file 3.txt`
- Creating unique slugs: `my-post` → `my-post-2` → `my-post-3`
- Versioning identifiers: `version-1` → `version-2`
- Duplicate name handling in any system

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

### 4.0.0 (Upcoming)
- ✨ Dual ESM/CommonJS support
- 🔄 Migrated from Jest to Vitest
- 📦 Migrated from Yarn to pnpm
- 🏗️ Build with tsup for better bundle optimization
- 📝 Improved documentation
- ✅ Enhanced test coverage
- 🧹 Code refactoring for better maintainability

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
