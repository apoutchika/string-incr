# Contributing to string-incr

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

### Running Tests

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Linting and Type Checking

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type check
pnpm typecheck
```

### Building

```bash
pnpm build
```

## Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes and ensure:
   - All tests pass (`pnpm test`)
   - Code is properly linted (`pnpm lint`)
   - Types are correct (`pnpm typecheck`)
   - Build succeeds (`pnpm build`)

3. Add tests for new functionality

4. Update documentation if needed

5. Commit your changes using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug"
   git commit -m "docs: update readme"
   ```

## Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure all tests pass and code is properly formatted
3. Update the CHANGELOG.md if making significant changes
4. Submit your pull request with a clear description

## Code Style

- Use TypeScript for all code
- Follow the existing code style
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Write descriptive variable names

## Testing Guidelines

- Write tests for all new features
- Maintain or improve code coverage
- Test edge cases
- Use descriptive test names

## Questions?

Feel free to open an issue for any questions or concerns!
