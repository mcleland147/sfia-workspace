# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, fakeProvider materialization | DETERMINISTIC PROVEN routing/bridge |
| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F01 greenfield | greenfield continuity tests on main | #531 |
| Architecture drift | productionRuntimeReference.conformance | this macro |

## Oracle weaknesses (do not fix here)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | CONFIRMED pattern (campaign) | PocketTasks vs local suites |
| Tests bypass conversation front door (direct resolver/AP seed) | CONFIRMED for many d0 tests | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake synthesizes `note-de-cadrage.md` where REAL may leave filename null | CONFIRMED in Fake code | `fakeProvider.ts` framing cue |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | PROBABLE | test fixtures set `sufficient` |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | OBSERVATION | PocketTasks filename ask vs D-PC-09 |

## Proof levels

- DETERMINISTIC PROVEN
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; not claimed by this corpus

