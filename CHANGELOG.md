# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-02-27

### Added
- ✨ Dual ESM/CommonJS support with proper exports
- 📦 Build with tsup for optimized bundles
- 📝 Comprehensive JSDoc documentation
- ✅ Enhanced test coverage with additional edge cases
- 🔧 `.npmignore` for cleaner package distribution
- 📚 Improved README with better examples and documentation

### Changed
- 🔄 **BREAKING**: Package now uses ESM by default with CJS fallback
- 🔄 Migrated from Yarn to pnpm for package management
- 🔄 Replaced Jest with Vitest for faster testing
- 🔄 Refactored code structure: `lib/` → `src/`
- 🔄 Updated TypeScript configuration for modern standards
- 🔄 Simplified and improved code with better type safety

### Removed
- 🗑️ Removed `.travis.yml` (deprecated CI configuration)
- 🗑️ Removed Yarn-specific files (`.yarnrc.yml`, `yarn.lock`)
- 🗑️ Removed Jest configuration

### Fixed
- 🐛 Improved type definitions for better IDE support

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
