# Publication Guide

## Before Publishing

1. Verify all tests pass:
   ```bash
   pnpm test
   ```

2. Verify the build:
   ```bash
   pnpm build
   ```

3. Verify linting:
   ```bash
   pnpm lint
   ```

4. Verify types:
   ```bash
   pnpm typecheck
   ```

5. Verify package contents:
   ```bash
   npm pack --dry-run
   ```

## Manual Publication

1. Ensure you're logged in to npm:
   ```bash
   npm login
   ```

2. Publish:
   ```bash
   pnpm publish --access public
   ```

## Automatic Publication (Recommended)

The GitHub Actions workflow will automatically publish the package when a tag is pushed:

```bash
git push origin master
git push origin v4.0.0
```

## After Publication

1. Verify on npmjs.com that the package is published
2. Test installation in a new project:
   ```bash
   mkdir test-install
   cd test-install
   npm init -y
   npm install string-incr
   ```

3. Create a GitHub release with CHANGELOG notes

## Publication Checklist

- [ ] All tests pass
- [ ] Build works
- [ ] Linting is OK
- [ ] Types are correct
- [ ] CHANGELOG is up to date
- [ ] Version in package.json is correct
- [ ] Git tag is created
- [ ] README is up to date
- [ ] Examples work
- [ ] Documentation is complete
