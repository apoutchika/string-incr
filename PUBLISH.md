# Publication Guide

## Avant de publier

1. Vérifier que tous les tests passent:
   ```bash
   pnpm test
   ```

2. Vérifier le build:
   ```bash
   pnpm build
   ```

3. Vérifier le linting:
   ```bash
   pnpm lint
   ```

4. Vérifier les types:
   ```bash
   pnpm typecheck
   ```

5. Vérifier le contenu du package:
   ```bash
   npm pack --dry-run
   ```

## Publication manuelle

1. S'assurer d'être connecté à npm:
   ```bash
   npm login
   ```

2. Publier:
   ```bash
   pnpm publish --access public
   ```

## Publication automatique (recommandé)

Le workflow GitHub Actions publiera automatiquement le package lorsqu'un tag est poussé:

```bash
git push origin master
git push origin v4.0.0
```

## Après la publication

1. Vérifier sur npmjs.com que le package est bien publié
2. Tester l'installation dans un nouveau projet:
   ```bash
   mkdir test-install
   cd test-install
   npm init -y
   npm install string-incr
   ```

3. Créer une release sur GitHub avec les notes du CHANGELOG

## Checklist de publication

- [ ] Tous les tests passent
- [ ] Le build fonctionne
- [ ] Le linting est OK
- [ ] Les types sont corrects
- [ ] Le CHANGELOG est à jour
- [ ] La version dans package.json est correcte
- [ ] Le tag git est créé
- [ ] Le README est à jour
- [ ] Les exemples fonctionnent
- [ ] La documentation est complète
