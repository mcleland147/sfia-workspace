# 04 — Description de PR

| Champ | Valeur |
|-------|--------|
| **Title** | `feat(sfia-studio): add v3-native T-A0 Doctrine Foundation` |
| **Base** | `main` |
| **Head** | `delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation` |
| **Draft** | non |
| **Auto-merge** | non |
| **Merge** | **interdit** dans ce cycle |

## Body

```markdown
## Summary

Adds the SFIA Studio v3-native **T-A0 Doctrine Foundation**: a fail-closed, local-registry DoctrinePackage resolve/validate runtime (`app/lib/oa/doctrine`), tests, and delivery docs. Morris decisions **T-A0-D01…D08** are recorded as **VALIDATED** with reserves. AJV is a direct runtime dependency; registry paths use realpath containment against symlink escape.

## Included

- Domain/application/ports/infrastructure for DoctrinePackage pin resolution
- Filesystem allowlisted registry + SHA-256 digest verification + AJV Draft-07 schema validation
- OA doctrine tests (28) + platform/fixtures (10)
- Delivery pack under `sfia-v3-delivery/.../t-a0-doctrine-foundation/`
- Direct dependency `ajv@^6.15.0` (lock `6.15.0`)
- Symlink security (realpath must stay under registry root)

## Key decisions (VALIDATED with reserves)

- T-A0-D01 module layout under `lib/oa/doctrine`
- T-A0-D02 registry format (path ≠ business id)
- T-A0-D03 canonical SHA-256 digest
- T-A0-D04 AJV Draft-07 on modeled `0.1.0-oa` schemas
- T-A0-D05 semantic validation / anti-v2.6
- T-A0-D06 error mapping to `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE`
- T-A0-D07 no cache
- T-A0-D08 foundation-only readiness (no global runtime adoption)

## Validation

- `npx vitest run __tests__/oa/doctrine` — 28/28 PASS
- `npx vitest run __tests__/platform __tests__/fixtures.test.ts` — 10/10 PASS
- `npx tsc --noEmit` — PASS
- `npx next lint --dir lib/oa --dir __tests__/oa` — PASS
- `npx next build` — PASS
- `git diff --check origin/main...HEAD` — PASS
- `npm ci` + `npm ci --omit=dev` — `ajv@6.15.0` present under omit=dev
- Symlink escape / method / dir-symlink refused; internal in-registry symlink allowed

## Reservations

- Modeled ErrorRecord detail-code enum not yet extended
- Provenance required at runtime vs optional in modeled schema
- Modeled example digest placeholder
- No session wiring / no T-A1 LPS pin
- DB / IAM / Evidence retention open

## Explicit exclusions

- No T-A1
- No `method/**` changes
- No global doctrine adoption / cutover
- No MethodMode / OPS1 retirement
- No merge authorization in this cycle (review only)

## Review focus

- Fail-closed resolution paths
- AJV direct dependency + prod install
- Symlink/realpath containment
- Anti-legacy isolation
- Status: VALIDATED foundation ≠ MERGED ≠ globally adopted
```
