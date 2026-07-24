# 04 — Tests, evidence and reserves

## Suites

| Fichier | Couverture |
|---------|------------|
| `__tests__/oa/doctrine/resolveDoctrinePackage.test.ts` | Succès, fail-closed, traversal, method, v2.6, stale, revoked |
| `__tests__/oa/doctrine/schemaValidation.test.ts` | AJV fixture + example modeled |
| `__tests__/oa/doctrine/antiLegacy.test.ts` | Pas d’imports sfia-context / ops1 / fallback |

## Résultats (exécution locale)

Voir `05-delivery-validation-and-decision-pack.md` pour les commandes et sorties.

## Réserves

1. `ajv` reste dépendance **transitive** (eslint) — promotion directe candidate
2. Codes detail T-A0 non encore dans enum ErrorRecord modeled
3. Provenance requise en sémantique T-A0 alors qu’optionnelle dans schema modeled
4. Example modeled `doctrine-package-manifest.valid.json` conserve un digest placeholder (valide schema, non digéré)
5. Pas de cache ; pas de métriques runtime
6. Module non branché sur les sessions Studio (activation future)
7. META docs UX/modeled hors T-A0 restent éventuellement stale (connu post-merge)

## Dette acceptable T-A0

- Factory locale seulement (pas de DI container)
- Registry filesystem unique adaptateur
- Pas de CLI dédiée

## Suites T-A1 (hors scope)

Project / LivingProjectState pin DoctrinePackageRef — **non autorisé** ici.
