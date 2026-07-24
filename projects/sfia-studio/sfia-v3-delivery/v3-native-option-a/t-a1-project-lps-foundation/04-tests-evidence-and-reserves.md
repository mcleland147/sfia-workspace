# 04 — Tests, evidence and reserves

## Suites

| Fichier | Couverture |
|---------|------------|
| `__tests__/oa/project/projectLpsFoundation.test.ts` | Create nominal, invalid id, duplicate, idempotency, doctrine unresolved/digest mismatch, atomic rollback (create project/LPS fail, append LPS/project fail), UTF-8 size limit-1/limit/limit+1 + Unicode, aliasing immutability, historical immutability, proto safety, get project/current/historical, append, conflict high/low expectedVersion, concurrent double-append, non-monotonic, absent project, pin mismatch, provenance |
| `__tests__/oa/project/antiLegacy.test.ts` | Pas d’imports ops1 / sfia-context / method / filesystem doctrine dans domain |

## Résultats

Voir `05-delivery-validation-and-decision-pack.md`.

## Réserves

1. Persistance mémoire seulement — pas DATABASE SELECTED
2. Detail codes T-A1 non encore dans enum ErrorRecord modeled
3. Mapping NOT_FOUND / INVALID → `STATE_CONFLICT` (approximation modeled ; `retryable=false` pour NOT_FOUND/INVALID — clients doivent lire `detailCode`)
4. Pas de métriques Prometheus ; audit mémoire/console
5. Module non branché sur sessions / UI Studio
6. Pas de re-verify digest à l’append (égalité pin vs Ref projet) — Option A pin-compare only
7. Volumétrie historique non bornée en mémoire (profondeur 50–200 = hypothese AT, non appliquée)
8. Enum modeled sans `NOT_FOUND` / `INVALID` dédiés — extension schema = dette T-A1-D08

## Dette acceptable T-A1

- Factory in-memory seulement
- Pas de IdGeneratorPort dédié (crypto local)
- Pas de CLI
- Pas d’outbox / event sourcing
- `CONTEXT_STALE` non utilisé pour version conflict (reste `STATE_CONFLICT` via detail `LPS_VERSION_CONFLICT`)

## Hors scope (T-A2+)

Cycle / Trajectory / Epistemic / CKC · Decision · Confirmation · Execution · Evidence
