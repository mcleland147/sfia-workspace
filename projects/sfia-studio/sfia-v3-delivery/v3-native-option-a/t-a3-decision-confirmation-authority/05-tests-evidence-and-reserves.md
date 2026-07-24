# 05 — Tests, evidence and reserves

## Suites

| Suite | Path | Coverage |
|-------|------|----------|
| Foundation | `__tests__/oa/decision/decisionConfirmationAuthority.test.ts` | Record morris · hostile displayName · N3 without Morris gate · project/cycle checks · Critical stays proposed · system_non_structuring · one-accepted · list history · confirmation idempotency · N2/N3 matrix · consume/expire · refuse/cancel · scope mismatch · VerifyAuthority · supersede+OCC · Epistemic DecisionRef · LPS decisionIds |
| Adversarial | `__tests__/oa/decision/adversarialAuthority.test.ts` | Clone-before-validate · immutability · failNextSave rollback · concurrent grant/consume · recommendation ≠ decision · delegated N2 · detail→modeled mapping |
| Anti-legacy | `__tests__/oa/decision/antiLegacy.test.ts` | No ops1/d1/method/sfia-context · public barrels only · resolver ignores displayName/authorityLevel |

## Counts (this delivery)

| Suite | Count |
|-------|-------|
| T-A3 `__tests__/oa/decision` | **38** |
| T-A2 `__tests__/oa/cycle` | **48** |
| T-A1 `__tests__/oa/project` | **30** |
| T-A0 `__tests__/oa/doctrine` | **28** |
| Platform + fixtures | **10** |
| **Total matrix** | **154** |

Also: `tsc --noEmit` · `lint` · `build` — PASS (no errors).

## Reserves

| ID | Reserve | Impact |
|----|---------|--------|
| **B5** (inherited) | T-A1 append still does not carry `reservationIds` / `contradictionIds` / … | OPEN — `decisionIds` added only |
| **R1** (inherited) | No strict cross-store Project↔Cycle atomicity | OPEN |
| **R-T-A3-1** | No public T-A2 Critical acknowledge API | Decision links cycle; status stays `proposed` |
| **R-T-A3-2** | Decision↔LPS / Decision↔Epistemic not single atomic txn | Best-effort post-persist; dual/triple mutex |
| R-T-A3-3 | Authority registry is in-memory only | NOT DATABASE SELECTED |
| R-T-A3-4 | Enum ErrorRecord has no `AUTHORITY_SCOPE_MISMATCH` | Mapped to `AUTHORITY_DENIED` |

## Evidence commands

```bash
npx vitest run __tests__/oa/decision   # 38
npx vitest run __tests__/oa/cycle      # 48
npx vitest run __tests__/oa/project    # 30
npx vitest run __tests__/oa/doctrine   # 28
npx vitest run __tests__/platform __tests__/fixtures.test.ts  # 10
npx tsc --noEmit && npm run lint && npm run build
```
