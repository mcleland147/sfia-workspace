# 04 — Description de PR

| Champ | Valeur |
|-------|--------|
| **Title** | `feat(sfia-studio): add v3-native T-A1 Project and LPS foundation` |
| **Base** | `main` |
| **Head** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **Draft** | non |
| **Auto-merge** | non |
| **Merge** | **interdit** dans ce cycle |

## Body

```markdown
## Summary

Adds the SFIA Studio v3-native **T-A1 Project and LivingProjectState foundation**: fail-closed create/append/get under `app/lib/oa/project`, optimistic concurrency, DoctrinePackage pin via T-A0, in-memory ports, invariant tests, and delivery docs. Morris status: **T-A1 TECHNICALLY VALIDATED BY MORRIS — PR READINESS AUTHORIZED** (with reserves). Concurrent double-append was fixed in `861ca76` (mutex + expectedVersion re-check + structuredClone).

## Included

- Domain/application/ports/infrastructure for Project + LPS versioning
- Atomic create (project + LPS v1) and append with optimistic concurrency
- Doctrine pin: resolve on create; Option A pin-compare on append
- UTF-8 snapshot size limit (256_000 bytes)
- OA project tests (≥30) + doctrine regression (28) + platform/fixtures (10)
- Delivery pack under `sfia-v3-delivery/.../t-a1-project-lps-foundation/`

## Key decisions (VALIDATED with reserves)

- T-A1-D01 module layout under `lib/oa/project`
- T-A1-D02 identity prefixes + LPS v1
- T-A1-D03 versioned snapshot + minimal audit
- T-A1-D04 optimistic concurrency (`expectedVersion`) + mutex txn
- T-A1-D05 Doctrine pin (resolve create / pin-compare append)
- T-A1-D06 in-memory repos + ports (no DATABASE SELECTED)
- T-A1-D07 minimal audit journal
- T-A1-D08 error mapping to `STATE_CONFLICT` / `DOCTRINE_UNRESOLVED`
- T-A1-D09 UTF-8 size limit
- T-A1-D10 foundation-only readiness (no UI / T-A2)

## Validation

- `npx vitest run __tests__/oa/project` — 30/30 PASS
- `npx vitest run __tests__/oa/doctrine` — 28/28 PASS
- `npx vitest run __tests__/platform __tests__/fixtures.test.ts` — 10/10 PASS
- `npx tsc --noEmit` — PASS
- `npx next lint` on oa/project — PASS
- `npx next build` — PASS
- `git diff --check origin/main...HEAD` — PASS

## Reservations

- In-memory only — DATABASE SELECTED open
- Modeled ErrorRecord detail-code enum not extended
- NOT_FOUND / INVALID mapped to `STATE_CONFLICT` (read `detailCode`)
- No session/UI wiring; no T-A2
- Append uses Option A pin-compare only (no digest re-verify)
- Historical depth not bounded in memory

## Explicit exclusions

- No T-A2
- No `method/**` / OPS1 / sfia-context changes
- No modeled schema edits / no `package.json` / no SQL
- No UI / cutover / MethodMode retirement
- No merge authorization in this cycle (review only)

## Review focus

- Mutex / transaction serialization
- Concurrent double-append (single winner)
- Atomic rollback on create/append failure
- structuredClone immutability (no aliasing)
- Doctrine pin create vs Option A pin-compare append
- UTF-8 snapshot limit
- Error mapping + detail codes
- Legacy isolation (anti-ops1 / anti-method)
- Status: TECHNICALLY VALIDATED ≠ MERGED ≠ T-A2 authorized
```
