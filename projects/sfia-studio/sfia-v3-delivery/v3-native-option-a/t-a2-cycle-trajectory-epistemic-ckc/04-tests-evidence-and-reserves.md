# 04 — Tests, evidence and reserves

## Suites

| Suite | Path | Couverture |
|-------|------|------------|
| Foundation | `__tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts` | Qualify Light/Standard/Critical · Critical sans justification · Capitalization · CreateCycle · project absent · traj v1+propose · conflict concurrent · cyclic deps · rollback logique · LPS conflict · size cap · epistemic types + promotion · Observation source · CKC present/absent · Create malgré CKC absent · anti-aliasing |
| Adversarial | `__tests__/oa/cycle/adversarialValidation.test.ts` | B1 TOCTOU clone-first · B3 orphan/self deps · B4 propose status · Hostile CKC · qualification edges · failNextSave rollback · immutabilité epistemic · concurrent TRAJECTORY_VERSION_CONFLICT · Critical stays proposed · same-id promotion · B5 LPS carry probe |
| Anti-legacy | `__tests__/oa/cycle/antiLegacy.test.ts` | Pas ops1/d1/method/sfia-context · barrels publics only · pas executionAuthority true · pas v2.6 |

## Counts

| Suite | Before validation | After validation |
|-------|-------------------|------------------|
| T-A2 `__tests__/oa/cycle` | 26 | **48** |
| T-A1 `__tests__/oa/project` | 30 | 30 |
| T-A0 `__tests__/oa/doctrine` | 28 | 28 |
| Platform + fixtures | 10 | 10 |

## Reserves

| ID | Reserve | Impact |
|----|---------|--------|
| R1 | Pas d’atomicité cross-store stricte Project↔Cycle (deux mutex) | Orphan edge rare si extension future casse l’ordre |
| R2 | Ack Critical / Morris decision hors scope | Critical reste `proposed` |
| R3 | Schema gap Capitalization ≠ profile | Documenté ; cycleTypeId only |
| R4 | Enum ErrorRecord borné | Detail codes + mapping (T-A2-D08) |
| R5 | Pas DB | Mémoire réversible |
| **R6 / B5** | T-A1 append ne porte pas `reservationIds` / ids satellites LPS | OPEN RESERVE — dette T-A1 ; pas de fix T-A2 inventant l’API |

## Validation findings

Voir [07-validation-findings-and-morris-decision-pack.md](./07-validation-findings-and-morris-decision-pack.md).
