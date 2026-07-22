# 05 — Test results

| Suite | Résultat |
|-------|----------|
| vitest `__tests__/d1/project-foundation.test.ts` | 7/7 pass |
| playwright `e2e/d1-i1-project-foundation.spec.ts` | 6/6 pass |
| playwright `e2e/p0-smoke.spec.ts` (régression) | 6/6 pass |
| tsc --noEmit | pass (D1) |

## Non exécutés
Suites OPS1 I2–I6 / Control Tower complètes — hors nécessité I1 ; smoke P0 couvre legacy routes.
