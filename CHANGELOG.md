# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-02-27

### Added
- ✨ Dual ESM/CommonJS support with proper exports
- 📦 Build with tsup for optimized bundles
- 📝 Comprehensive JSDoc documentation
- ✅ Enhanced test coverage (35 tests across 3 test files)
- 🔧 `.npmignore` for cleaner package distribution
- 📚 Improved README with better examples and documentation
- 📖 BEHAVIOR.md documenting edge cases and design decisions
- 🧩 Shared `utils.ts` to avoid code duplication

### Changed
- 🔄 **BREAKING**: Package now uses ESM by default with CJS fallback
- 🔄 **BREAKING**: `stringDecr` behavior changed significantly:
  - **Removes the `firstAppend` parameter** (no longer needed)
  - **When number reaches 1 or 0, removes it entirely** instead of going negative
  - `stringDecr('test 1')` now returns `'test'` (was `'test 0'`)
  - `stringDecr('test 0')` now returns `'test'` (was `'test -1'`)
  - `stringDecr('test')` now returns `'test'` unchanged (was `'test -1'`)
  - Number input unchanged: `stringDecr(0)` still returns `'-1'`
- 🔄 Migrated from Yarn to pnpm for package management
- 🔄 Replaced Jest with Vitest for faster testing
- 🔄 Refactored code structure: `lib/` → `src/`
- 🔄 Updated TypeScript configuration for modern standards
- 🔄 Simplified and improved code with better type safety

### Removed
- 🗑️ Removed `.travis.yml` (deprecated CI configuration)
- 🗑️ Removed Yarn-specific files (`.yarnrc.yml`, `yarn.lock`)
- 🗑️ Removed Jest configuration
- 🗑️ **BREAKING**: Removed `firstAppend` parameter from `stringDecr`

### Fixed
- 🐛 Improved type definitions for better IDE support
- 🐛 Clarified behavior with negative numbers and separators

### Migration Guide v3 → v4

#### stringDecr Breaking Changes

**If you used stringDecr with strings:**
```typescript
// v3.x behavior
stringDecr('item 2')  // => 'item 1'
stringDecr('item 1')  // => 'item 0'
stringDecr('item 0')  // => 'item -1'
stringDecr('item')    // => 'item -1'

// v4.0.0 behavior
stringDecr('item 2')  // => 'item 1'
stringDecr('item 1')  // => 'item'      ← CHANGED: removes number
stringDecr('item 0')  // => 'item'      ← CHANGED: removes number
stringDecr('item')    // => 'item'      ← CHANGED: no change
```

**If you used the `firstAppend` parameter:**
```typescript
// v3.x
stringDecr('item', '-1')  // => 'item-1'

// v4.0.0 - parameter removed, use stringIncr instead
stringIncr('item', '-1')  // => 'item-1'
```

**Number input is unchanged:**
```typescript
// Both v3.x and v4.0.0
stringDecr(5)   // => '4'
stringDecr(0)   // => '-1'
stringDecr(-5)  // => '-6'
```

## [3.1.1] - Previous Release

### Fixed
- 📝 Fix typo in readme

## [3.0.0] - Previous Release

### Added
- ✨ Add `stringDecr` function for decrementing strings

## [2.0.0] - Previous Release

### Added
- ✨ TypeScript support

## [1.0.0] - Initial Release

### Added
- ✨ Initial `stringIncr` function

[4.0.0]: https://github.com/apoutchika/string-incr/compare/v3.1.1...v4.0.0
[3.1.1]: https://github.com/apoutchika/string-incr/compare/v3.0.0...v3.1.1
[3.0.0]: https://github.com/apoutchika/string-incr/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/apoutchika/string-incr/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/apoutchika/string-incr/releases/tag/v1.0.0
