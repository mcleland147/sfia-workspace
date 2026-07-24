# 04 — Tests, evidence and reserves

## Suites

| Suite | Path | Couverture |
|-------|------|------------|
| Foundation | `__tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts` | Qualify Light/Standard/Critical · Critical sans justification · Capitalization · CreateCycle · project absent · traj v1+propose · conflict concurrent · cyclic deps · rollback logique · LPS conflict · size cap · epistemic types + promotion · Observation source · CKC present/absent · Create malgré CKC absent · anti-aliasing |
| Anti-legacy | `__tests__/oa/cycle/antiLegacy.test.ts` | Pas ops1/d1/method/sfia-context · barrels publics only · pas executionAuthority true · pas v2.6 |

## Non-régression

| Suite | Attendu |
|-------|---------|
| T-A1 `__tests__/oa/project` | 30 |
| T-A0 `__tests__/oa/doctrine` | 28 |
| Platform + fixtures | 10 |

## Reserves

| ID | Reserve | Impact |
|----|---------|--------|
| R1 | Pas d’atomicité cross-store stricte Project↔Cycle (deux mutex) | Orphan edge rare si extension future casse l’ordre |
| R2 | Ack Critical / Morris decision hors scope | Critical reste `proposed` |
| R3 | Schema gap Capitalization ≠ profile | Documenté ; cycleTypeId only |
| R4 | Enum ErrorRecord borné | Detail codes + mapping (T-A2-D08) |
| R5 | Pas DB | Mémoire réversible |
