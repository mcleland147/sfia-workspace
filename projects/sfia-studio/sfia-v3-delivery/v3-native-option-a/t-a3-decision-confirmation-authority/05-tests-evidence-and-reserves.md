# 05 — Tests, evidence and reserves

## Suites

| Suite | Path | Coverage |
|-------|------|----------|
| Foundation | `__tests__/oa/decision/decisionConfirmationAuthority.test.ts` | Record morris · hostile displayName · N3 without Morris gate · project/cycle checks · Critical stays proposed · system_non_structuring · one-accepted · list history · confirmation idempotency · N2/N3 matrix · consume/expire · refuse/cancel · scope mismatch · VerifyAuthority · supersede+OCC · Epistemic DecisionRef · LPS decisionIds |
| Adversarial (delivery) | `__tests__/oa/decision/adversarialAuthority.test.ts` | Clone-before-validate · immutability · failNextSave rollback · concurrent grant/consume · recommendation ≠ decision · delegated N2 · detail→modeled mapping |
| Adversarial (validation) | `__tests__/oa/decision/validationAdversarial.test.ts` | B1 TOCTOU snapshots · B2 refuse/cancel vs grant · B3 concurrent supersede · B4 LPS link fail-closed + compensate · actor/evidence mismatch · immutable evidence register |
| Anti-legacy | `__tests__/oa/decision/antiLegacy.test.ts` | No ops1/d1/method/sfia-context · public barrels only · resolver ignores displayName/authorityLevel |

## Counts (after validation correction)

| Suite | Count |
|-------|-------|
| T-A3 `__tests__/oa/decision` | **50** (was **38** at delivery HEAD `a71f0b4`) |
| T-A2 `__tests__/oa/cycle` | **48** |
| T-A1 `__tests__/oa/project` | **30** |
| T-A0 `__tests__/oa/doctrine` | **28** |
| Platform + fixtures | **10** |
| **Total matrix** | **166** |

Also: `tsc --noEmit` · `lint` · `build` · `git diff --check` — PASS.

## Reserves

| ID | Reserve | Impact |
|----|---------|--------|
| **B5** (inherited) | T-A1 append still does not carry `reservationIds` / `contradictionIds` / … | OPEN — `decisionIds` added only |
| **R1** (inherited) | No strict cross-store Project↔Cycle atomicity | OPEN |
| **R-T-A3-1** | No public T-A2 Critical acknowledge API | Decision links cycle; status stays `proposed` |
| **R-T-A3-2** | Decision↔LPS / Decision↔Epistemic not single atomic txn | Fail-closed + compensate supersede on link failure; residual if compensate fails |
| R-T-A3-3 | Authority registry is in-memory only | NOT DATABASE SELECTED; evidence register immutable |
| R-T-A3-4 | Enum ErrorRecord has no `AUTHORITY_SCOPE_MISMATCH` | Mapped to `AUTHORITY_DENIED` |

## Evidence commands

```bash
npx vitest run __tests__/oa/decision   # 50
npx vitest run __tests__/oa/cycle      # 48
npx vitest run __tests__/oa/project    # 30
npx vitest run __tests__/oa/doctrine   # 28
npx vitest run __tests__/platform __tests__/fixtures.test.ts  # 10
npx tsc --noEmit && npm run lint && npm run build
git diff --check
```
