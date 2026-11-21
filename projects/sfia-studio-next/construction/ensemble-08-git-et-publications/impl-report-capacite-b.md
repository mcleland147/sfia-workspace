## Deliverable — Ensemble 08 Capacité B

### Files changed

| File | Change |
|------|--------|
| `web/src/domains/conversation/conversation-publication-mandate-guards.ts` | **New** — pure guards: refusal phrases, merge-only, mandate ⊆ plan (path/branch) |
| `web/src/domains/conversation/conversation-publication-authority.ts` | **New** — `admitConversationalPublicationMandate` → `authorizePublication` → optional `resumeMissionAfterPublicationAuthorize` |
| `web/src/domains/execution/effect-service.ts` | Optional `sourceMessageId` / `clientTurnKey`; `effectConditions.conversationalProvenance` (panel path unchanged; `sourceRef` stays `attemptId` for `assertCurrentGitAuthority`) |
| `web/src/domains/conversation/service.ts` | After successful `preparePublicationForMission`, admission + mission projection update; `humanDecisionCreated` includes publication mandate |
| `web/tests/unit/conversation-publication-authority.test.ts` | **New** — guard unit tests |
| `web/tests/integration/mission-continuity-accept01.pg.test.ts` | E08-B scenarios + updated ACCEPT-01 / replay expectations |

### Exact flow (same turn)

1. `postUserMessageAndNora` — D4 CREATE when qual allows; Nora mission with `pub:mission:<clientTurnKey>`.
2. `preparePublicationForMission` → attempt `PREPARED`.
3. `admitConversationalPublicationMandate`:
   - Nora mission correlation + `wantsPublishFromQual`
   - No negative / merge-only USER wording
   - `assertPublicationMandateCoversPlan` (fail-closed → `AWAITING_CLARIFICATION` when ambiguous)
   - `authorizePublication` with server `inspectionFingerprint` (fingerprints unchanged)
4. `resumeMissionAfterPublicationAuthorize` (default) → `dispatchPublication` → `assertCurrentGitAuthority` at effect points.
5. Turn returns `humanDecisionCreated: true` when HD is created.

Panel/API `authorize` path is unchanged.

### Test results

- **Unit:** `conversation-publication-authority.test.ts` — **4/4 passed**
- **`tsc --noEmit`** — **passed**
- **PG:** `mission-continuity-accept01.pg.test.ts` — **not run** (no `DATABASE_URL` / `.env.local` in this worktree)

### Residual STOP items

1. **REAL merge** — `mergePullRequest` still hard-blocked in `real-github-provider.ts`; no conversational merge mandate (`admitConversationalMergeMandate` intentionally omitted).
2. **Classic (non–`pub:mission:`) prepares** — still require panel/API authorize (`NOT_CONVERSATIONAL`).
3. **S05 blocking** — unresolved `AWAITING_PILOT_AUTH` from an *older* mission can still block new effect turns; conversational authorize applies on the turn that successfully prepares, not as a retroactive fix for a stuck mission.
4. **`sourceKind`** — remains `GIT_EFFECT`; USER linkage is in `effectConditions.conversationalProvenance.userMessageId` only (strict `sourceRef === attemptId` preserved for dispatch authority).