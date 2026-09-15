# CORR-PROOF-10 — Decision Context Continuity — Review Pack FULL

**Timestamp (UTC):** 2026-09-15T01:05:26Z
**Verdict:** CORR-PROOF-10 DECISION CONTINUITY — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-studio-corr-proof-10-decision-context-continuity |
| Branch | fix/sfia-studio-corr-proof-10-decision-context-continuity |
| HEAD | 93ac1aea1af6b2094c158c5068bec1602d863ca7 |
| origin/main (SoT) | 93ac1aea1af6b2094c158c5068bec1602d863ca7 |
| Match SoT before code | YES |
| Dogfood worktree | /Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d @ 93ac1aea — **untouched by this cycle** (no Product DB / Session / sandbox mutation) |
| Project commit | NOT performed |
| Project push / PR / merge | NOT performed |

---

## 2. Sources read (imposed)

Process/governance skimmed as required for Cycle 8 Critical delivery. Code SoT for design:

- f2: types, proposalStore, recordDecision, activeCycleGovernedContinuation, executionIntentSchema
- w2: actions, qualificationInputs, trajectoryOptions, proposeTrajectoryOptions, presentedOptionSet, decideTrajectory, prepareExecutionContractFromW2Decision
- UI: TrajectorySurface, ProjectWorkspacePage, useProductConversation / ConversationSurface
- Tests: corrProof07, corrProof09, w2Harness, w2EabcDelivery (Track A sample)

R22 check: **PASS** — correction is context binding / orchestration only. No new cognitive engine. Provider cognition KEEP.

---

## 3. Diagnostic (root cause CONFIRMED)

**Loss point:** `TrajectorySurface.proposeOptions` → `w2ProposeTrajectoryOptionsAction({ projectId })` only.

- Nora/F2 creates Proposal with `executionIntent.targetPath` / `requestedOperation` (process-local ProposalStore).
- Canonical `/studio` decision surface is W2 TrajectorySurface.
- W2 `resolveW2QualificationInputs` rebuilds cycle/LPS inputs and `deriveTrajectoryOptions` always emits the generic trio (governed / bounded / clarify).
- **Zero `getProposal` on the W2 propose path** — Proposal A never becomes the instructed subject.
- HD/EC therefore can arbitrate a different semantic object than the Nora Proposal.

Architecture parallel / new persistence: **NOT required**.

---

## 4. Design retained (smallest bridge)

1. Client may pass opaque `proposalId` only (hostile objective/path/operation ignored).
2. Server `resolveProposalDecisionSubject` via ProposalStore + contextMatches.
3. If `DECISION_REQUIRED` Proposal exists and client omits `proposalId` → `ACTIVE_PROPOSAL_SUBJECT_REQUIRED` (no silent generic fallback).
4. Subject options derived generically from sealed Proposal fields (`opt:proposal-subject:pursue|amend|refuse`) — **not** hardcoded for gestion-de-taches.md.
5. Seal `proposalId` + `proposalSubjectDigest` + `sealedExecutionBasis` + `promotesProjectTrajectory:false` into existing PresentedOptionSet Observation.
6. `decideTrajectory`: Proposal subject → HD with `sourceType:"proposal"` + sealed executionBasis; **skip** `promoteDecidedTrajectory`.
7. True trajectory path (no proposalId / no active DECISION_REQUIRED) unchanged.
8. EC lineage: DecisionBasis carries exact targetPath/requestedOperation; PREPARE via existing `prepareM3FromDecision` for proposal-sourced HD.

**No new table / migration / DecisionSubject aggregate / event bus.**

---

## 5. Files modified (KEEP / ADAPT / COMPLETE)

| File | Class | Why |
|---|---|---|
| f2/proposalStore.ts | ADAPT | `listProposalsForProject` for active-subject gate |
| w2/resolveProposalDecisionSubject.ts | COMPLETE | Server resolve/validate/seal |
| w2/proposalSubjectOptions.ts | COMPLETE | Subject-scoped Options/Recommendation |
| w2/presentedOptionSet.ts | ADAPT | Seal proposal subject fields on binding |
| w2/proposeTrajectoryOptions.ts | ADAPT | Branch subject vs trajectory |
| w2/decideTrajectory.ts | ADAPT | HD without promotion for proposal subjects |
| w2/prepareExecutionContractFromW2Decision.ts | ADAPT | Resolve optionSetRef when sourceType=proposal |
| w2/actions.ts | ADAPT | Accept opaque proposalId; ignore hostile fields |
| w2/types.ts | ADAPT | DTO fields for subject / non-promotion |
| TrajectorySurface.tsx | ADAPT | Pass proposalId; show decision subject |
| ProjectWorkspacePage.tsx | ADAPT | Thread activeProposalId from conversation |
| corrProof10.decisionContextContinuity.d0.test.ts | COMPLETE | T01–T20 coverage |

Protected paths (convergence/doctrine/method/prompts/.github/dogfood DBs): **NOT modified**.

---

## 6. Tests & commands

```bash
cd projects/sfia-studio/app
npx vitest run __tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
# → 12 passed
npx vitest run __tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts \
  __tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
# → 59 passed (15+32+12 across files when combined with corr10 earlier)
npx vitest run __tests__/project-assistant/w2EabcDelivery.test.ts -t "Track A"
# → 22 passed | 17 skipped
npm run typecheck  # PASS (tsc --noEmit)
npm run lint       # PASS
npm run build      # PASS
```

Full Vitest suite: **NOT RUN** (cost/time) — declared honestly. Targeted Critical regressions + W2 Track A + typecheck/lint/build PASS.

ZERO REAL / ZERO OpenAI LIVE / ZERO dogfood Product mutation.

---

## 7. Invariants matrix T01–T20

| ID | Result | Evidence |
|---|---|---|
| T01 | PASS | Subject options include sealed targetPath |
| T02 | PASS | Not generic governed/bounded/clarify |
| T03 | PASS | Recommendation on same subject |
| T04 | PASS | No HD at propose |
| T05 | PASS | HD sourceRef = proposalId |
| T06 | PASS | DecisionBasis.targetPath exact |
| T07 | PASS | DecisionBasis.requestedOperation exact |
| T08 | PASS | PROJECT_MISMATCH |
| T09 | PASS | PROPOSAL_STALE |
| T10 | PASS | OPTION_NOT_PRESENTED cross-wire |
| T11 | PASS | Hostile path/op ignored |
| T12 | PASS | promotesProjectTrajectory=false; status candidate |
| T13 | PASS | True trajectory path still promotes |
| T14 | PASS | Same activeCycleInstanceId |
| T15 | PASS | No EC before HD |
| T16 | PASS | prepareM3FromDecision keeps cursor.docs_write.apply |
| T17 | PASS | PROPOSAL_NOT_FOUND + ACTIVE_PROPOSAL_SUBJECT_REQUIRED |
| T18 | PASS | CORR-PROOF-09 green |
| T19 | PASS | fake provider / no live key |
| T20 | PASS | temp sqlite only |

---

## 8. Fake / Real Qualification

- Fake/mock: OPS1_CONVERSATION_PROVIDER=fake; isolated Product sqlite harness.
- REAL boundary: OpenAI LIVE + dogfood — **NOT in this cycle**.
- Parity: subject binding / lineage / DecisionBasis independent of provider prose.
- Claim level: **DETERMINISTIC PROVEN** for local correction scope.
- Forbidden claims: REAL PROVEN CORR-PROOF-10, Product Proof complete, runtime v3 ADOPTED.

---

## 9. Réserves / dette temporaire

1. ProposalStore remains **process-local** until OptionSet binding seals subject — restart before propose still loses Proposal (fail-closed; no invented reconstruction). Exit: future durable Proposal binding if Morris GO.
2. W2 `prepareExecutionContractFromW2Decision` still trajectory-envelope oriented; proposal-sourced PREPARE proven via existing `prepareM3FromDecision`. Exit: optional thin adapter later — not required for CORR-PROOF-10 binding.
3. Candidate ProjectTrajectory version may still be created as OptionSet anchor for proposal subjects but is **not promoted** on HD.

---

## 10. Morris decisions

- GO local correction: CONSUMED (« ok go alors » / prior GO).
- Architecture/persistence new: NOT taken (not needed).
- REAL / dogfood: NOT authorized.
- Project commit/push/PR/merge: NOT requested.

---

## 11. git status / diffstat (candidate — uncommitted)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
?? projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts

 .tmp-sfia-review/chatgpt-review.md                 | 330 ---------------------
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   5 +
 .../surfaces/TrajectorySurface.tsx                 |  32 +-
 .../features/project-assistant/f2/proposalStore.ts |  11 +
 .../app/features/project-assistant/w2/actions.ts   |  14 +
 .../project-assistant/w2/decideTrajectory.ts       | 275 +++++++++++++----
 .../w2/prepareExecutionContractFromW2Decision.ts   |  49 ++-
 .../project-assistant/w2/presentedOptionSet.ts     |  32 ++
 .../w2/proposeTrajectoryOptions.ts                 | 121 +++++++-
 .../app/features/project-assistant/w2/types.ts     |  16 +-
 10 files changed, 479 insertions(+), 406 deletions(-)
```

---

## 12. Verdict

**CORR-PROOF-10 DECISION CONTINUITY — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

STOP. No project commit. No project push. No PR. No merge. No dogfood reproof.

Instruction ChatGPT: lire `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md` après publication distante et vérifier cycle, branche, HEAD/base, fichiers, contenu exploitable, tests, réserves, décisions Morris et verdict avant tout GO projet.
