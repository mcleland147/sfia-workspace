# 03 — Risques, réserves, guide de revue

## Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Confusion VALIDATED ≠ MERGED / adopted | Fausse readiness globale | Anti-claims explicites |
| T-A1 lu comme autorisé | Delivery prématuré | Gate T-A1 non ouvert |
| Symlink / path escape | Fuite filesystem | realpath containment + tests |
| AJV transitif (historique) | Runtime omit=dev cassé | **Fermé** — dépendance directe |
| Detail codes hors enum modeled | Divergence ErrorRecord | Réserve documentée |

## Réserves maintenues

Enum modeled detail codes · provenance schema vs runtime · digest placeholder example · pas de metrics/DI · non branché sessions · DB/IAM/RGPD ouverts

## Focus revue

1. Fail-closed Resolve/ValidateDoctrinePackage
2. Digest canonique + pin registry
3. AJV direct + omit=dev
4. Symlink/realpath security
5. Anti-legacy / pas de `method/**`
6. Anti-claims : pas merge auto, pas T-A1, pas adoption globale
