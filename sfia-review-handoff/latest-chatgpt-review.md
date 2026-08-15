# SFIA Review Pack — FULL

## 1. Timestamp (Europe/Paris)
2026-08-15 08:39:11 CEST

## 2. GO exact
GO MORRIS — CYCLE 14 POST-MERGE + M5 EXIT PROOF EVALUATION — PR #350 — ZERO REAL — M6 NOT AUTHORIZED — M5 NOT CLOSED

## 3. Cycle / Profile / Typology
- Cycle: 14 — Post-merge (+ bounded M5 exit proof evaluation)
- Profile: Critical
- Typology: EVOL
- Capability: V3-F14 (+ F13/F02/F04/F05/F09/F15)
- Milestone: M5 — Retour de preuve + analyse Nora
- M6: NOT AUTHORIZED
- CKC Cycle 14 detailed: ABSENT → fallback synthetic map + v2.5 cycles method candidate (cognitive guidance only)
- Branch cleanup: SKIPPED BY GOVERNANCE — DELETE NOT AUTHORIZED

## 4. Sync note (local main branch lock)
Sibling worktree already holds branch `main` at another path.
This evaluation worktree used:
`git switch --detach origin/main`
Result: HEAD = origin/main = 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
No reset/hard/rebase/non-FF. Tracked worktree clean.

## 5. Git Truth
- Repo: mcleland147/sfia-workspace
- Evaluation HEAD: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- origin/main: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- Remote main: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943	refs/heads/main
- Remote Delivery: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11	refs/heads/delivery/sfia-studio-m5-evidence-return
- Remote handoff (incoming expected a7b9940…): a7b9940fea0bc5c79cba4f5ed7dd8619903e1fd1	refs/heads/sfia/review-handoff
- Merge commit show:
```
8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
129570dfd44af5b4d466cc3dc0c166d928d26ef5 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
Merge pull request #350 from mcleland147/delivery/sfia-studio-m5-evidence-return
```
- Parents: 129570dfd44af5b4d466cc3dc0c166d928d26ef5 + 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- Ancestor check: 17461da ∈ origin/main — OK
- `git diff --exit-code 17461da 8f75321` — EMPTY (head tree == merge tree)
- REAL env: unset
- Initial untracked only: .tmp-sfia-review/**

## 6. PR #350 post-merge metadata
- state: MERGED (CLOSED/merged)
- draft: false
- base: main
- head: delivery/sfia-studio-m5-evidence-return
- head SHA: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- merge commit: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- changedFiles: 44
- commits: 1
- mergedAt: 2026-08-15T06:28:09Z
- URL: https://github.com/mcleland147/sfia-workspace/pull/350

## 7. CI
### PR CI #184
- run id: 31869335131
- run_number: 184
- event: pull_request
- headSha: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- status: completed / conclusion: success
- jobs: Detect SUCCESS · Build SUCCESS · Required Gate SUCCESS
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/31869335131

### Post-merge CI #185
- run id: 31869518657
- run_number: 185
- event: push
- headBranch: main
- headSha: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- status: completed / conclusion: success
- jobs: Detect SUCCESS · Build SUCCESS · Required Gate SUCCESS
- Build steps SUCCESS: Typecheck, Lint, Build, Unit tests (Vitest), FinOps T1 migrate, FinOps PostgreSQL tests, Modeled governance, Secret scan, Trailing whitespace
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/31869518657
- rerun: 0

## 8. Architecture decisions (preserved)
- M5-A OPTION B — Product SQLite Attempt/Evidence/ReviewBundle
- M5-B W1 — factual LPS evidenceIds/reviewBundleIds
- M5-C KEEP TEMPORARY WITH EXIT — M4 technical journal

## 9. Roadmap stale contradiction (observation only)
Roadmap on main still states (examples):
- M5 Delivery NOT AUTHORIZED / NOT IMPLEMENTED
- Attempt/Evidence/RB CURRENT Memory
- NEXT GATE = M5 DELIVERY AUTHORIZATION
Git SoT: PR #350 merged; Option B + W1 implemented on main; CI #185 SUCCESS.
Classification: **C-DOC-RT** (living roadmap document stale relative to Git SoT).
Impact:
- A. Technical/functional exit proof: does **not** by itself falsify Product durability proofs.
- B. Governance closure readiness: **sync required** before/at Morris closure gate.
NO Roadmap edit this cycle.

## 10. Targeted QA on main (REAL unset)
Commands + results (all PASS):
```
npm test -- \
  __tests__/oa/project/m5ProductSchemaMigration.test.ts \
  __tests__/oa/execution-attempt/m5AttemptDurability.test.ts \
  __tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts \
  __tests__/oa/project/m5W1LpsAppend.test.ts \
  __tests__/oa/project/m5RestartProcessProof.test.ts \
  __tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts \
  __tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts \
  __tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts \
  __tests__/recommendation-vs-decision.test.tsx
```
Result: Test Files 9 passed · Tests 24 passed · Duration ~1.3s
Full-stack CI proof: post-merge #185 SUCCESS (not re-run locally).

## 11. M5 Exit Matrix (M5-01 → M5-34)

| ID | Criterion | Status | Proof |
|---|---|---|---|
| M5-01 | Product schema M5 additive on main | SATISFIED ON MAIN | `PRODUCT_SCHEMA_VERSION = "m5-0.1.0"` in db.ts; m5ProductSchemaMigration.test.ts PASS |
| M5-02 | ExecutionAttempt durable Product SQLite | SATISFIED ON MAIN | sqliteExecutionAttemptRepository + m5AttemptDurability PASS |
| M5-03 | terminal Attempt + resultRef survive restart | SATISFIED ON MAIN | m5RestartProcessProof A→B: succeeded + same resultRef |
| M5-04 | Evidence durable linked to Attempt/EC | SATISFIED ON MAIN | restart proof evidence.sourceKind=execution_attempt + bindings |
| M5-05 | Evidence.technicalResultRef == Attempt.resultRef | SATISFIED ON MAIN | restart proof both = res:m5-proc-fixture |
| M5-06 | ReviewBundle durable | SATISFIED ON MAIN | m5EvidenceReviewDurability + restart same rb id |
| M5-07 | RB reopen/supersede atomic | SATISFIED ON MAIN | m5EvidenceReviewDurability reopen + concurrent reopen tests PASS |
| M5-08 | OCC Attempt/Evidence/RB atomic | SATISFIED ON MAIN | m5AttemptDurability OCC + evidence/RB concurrent tests PASS |
| M5-09 | active Attempt uniqueness | SATISFIED ON MAIN | m5AttemptDurability active reservation PASS |
| M5-10 | result-recording budget durable | SATISFIED ON MAIN | oa_execution_attempt_result_budget + durability test PASS |
| M5-11 | W1 LPS N+1 factual | SATISFIED ON MAIN | m5W1LpsAppend.test.ts PASS |
| M5-12 | evidenceIds/RB ids carry-forward/dedup/restart-safe | SATISFIED ON MAIN | W1 + restart LPS refs identical |
| M5-13 | W1 provenance system/authority none | SATISFIED ON MAIN | SFIA_STUDIO_SYSTEM_FACTUAL_WRITER role=system authorityLevel=none |
| M5-14 | factual LPS ≠ HD/trajectory/gate | SATISFIED ON MAIN | anti-claims in rehydrate + recommendation tests |
| M5-15 | process A→B same Attempt/resultRef/Ev/RB/LPS | SATISFIED ON MAIN | m5RestartProcessProof PASS |
| M5-16 | RecommendNextGate recomputable after restart | SATISFIED ON MAIN | restart worker + rehydrateEvidenceOutcomeFromLps PASS |
| M5-17 | Recommendation.kind=recommendation | SATISFIED ON MAIN | restart + C2 action assertions |
| M5-18 | executionAuthority=false | SATISFIED ON MAIN | same |
| M5-19 | gateConsumed=false | SATISFIED ON MAIN | same |
| M5-20 | decisionCreated=false | SATISFIED ON MAIN | same |
| M5-21 | attemptAutoLaunchNextCycle=false | SATISFIED ON MAIN | same |
| M5-22 | no implicit HumanDecision | SATISFIED ON MAIN | recommendation-vs-decision + C2 |
| M5-23 | no automatic execution | SATISFIED ON MAIN | rehydrate read-only; no StartExecution |
| M5-24 | ZERO unauthorized REAL | SATISFIED ON MAIN | env unset; PR paths no REAL launch; CI no REAL |
| M5-25 | Product/Memory disclosure coherent | SATISFIED ON MAIN | C1 Product + Memory prepare tests PASS; required productDurablePath |
| M5-26 | durable Nora/product-facing readback after restart | SATISFIED ON MAIN | projectAssistantRehydrateEvidenceOutcomeAction + rehydrateFromLps + C2/restart tests |
| M5-27 | ReviewBundle visible via Nora/UI after restart | **NOT SATISFIED** | UI holds RB only in React `f3Execute` state; no call to rehydrate action on mount/reload |
| M5-28 | Recommendation visible via Nora/UI after restart | **NOT SATISFIED** | same — cards render only when `f3Execute` set from in-session execute |
| M5-29 | post-merge main tree == reviewed candidate | SATISFIED ON MAIN | diff 17461da↔8f75321 empty; 44 files |
| M5-30 | post-merge CI success | SATISFIED ON MAIN | CI #185 SUCCESS |
| M5-31 | M4 technical journal unchanged/distinct | SATISFIED ON MAIN | memoryLaunchSafetyJournal not in PR; journal ≠ Product Attempt store; technicalStore only result budget facade |
| M5-32 | M5-C KEEP explicit; no retirement | SATISFIED ON MAIN | journal present; no retirement code; disposition KEEP |
| M5-33 | no parallel architecture | SATISFIED ON MAIN | Option B reuse of Product SQLite backbone |
| M5-34 | M6 work = 0 | SATISFIED ON MAIN | no M6 scope in PR #350 |

## 12. Restart proof detail
m5RestartProcessProof: process A create via real UCs → process B rehydrate same dbPath.
Asserts same attemptId, resultRef, evidenceId, reviewBundleId, EC id, technicalResultRef, recommendation anti-claim flags.

## 13. Nora readback vs UI readback (critical distinction)

### Server / product read-model (M5-26)
- `actions.ts` exports `projectAssistantRehydrateEvidenceOutcomeAction`
- Uses `rehydrateEvidenceOutcomeFromLps` → LPS refs → Evidence/RB → RecommendNextGate
- Proven by m5C1C2DisclosureAndRehydrateAction.test.ts + rehydrateEvidenceOutcomeFromLps.test.ts + restart worker

### UI consumer (M5-27 / M5-28)
`rg projectAssistantRehydrateEvidenceOutcomeAction` hits ONLY:
- actions.ts (definition)
- m5C1C2DisclosureAndRehydrateAction.test.ts (tests)

ProjectAssistantPanel imports (NO rehydrate):
```
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareM3Action,
  projectAssistantSendAction,
} from "./actions";
```

UI state + display gated on session `f3Execute`:
```
        </section>
      ) : null}

      {f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
          <div className={styles.f3Labels} data-testid="f3-execute-labels">
            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
            <StatusPill tone="blueFlush">
              RECOMMANDATION — PAS UNE DÉCISION MORRIS
            </StatusPill>
            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
          </div>

          <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Attempt</h4>
            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
            <p data-testid="f3-attempt-external-effects">
              externalEffects: {String(f3Execute.attempt.externalEffects)}
            </p>
            <p data-testid="f3-attempt-launch-count">
              launchCount: {f3Execute.attempt.launchCount}
            </p>
            <p data-testid="f3-attempt-reused">
              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
            </p>
          </div>

          <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Evidence</h4>
            <p data-testid="f3-evidence-id">{f3Execute.evidence.evidenceId}</p>
            <p data-testid="f3-evidence-status">{f3Execute.evidence.status}</p>
            <p data-testid="f3-evidence-verified">
              verified: {String(f3Execute.evidence.verified)}
            </p>
          </div>

          <div data-testid="f3-review-bundle-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>ReviewBundle</h4>
            <p data-testid="f3-review-bundle-id">
              {f3Execute.reviewBundle.reviewBundleId}
            </p>
            <p data-testid="f3-review-bundle-status">
              {f3Execute.reviewBundle.status}
            </p>
          </div>

          <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Recommendation</h4>
            <p data-testid="f3-recommendation-label">
              {f3Execute.recommendation.recommendationLabel}
            </p>
            <p data-testid="f3-recommendation-execution-authority">
              executionAuthority:{" "}
              {String(f3Execute.recommendation.executionAuthority)}
            </p>
            <p data-testid="f3-recommendation-gate-consumed">
              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
            </p>
            <p data-testid="f3-recommendation-decision-created">
              decisionCreated:{" "}
              {String(f3Execute.recommendation.decisionCreated)}
            </p>
            <p data-testid="f3-recommendation-hard-refs">
              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
            </p>
            <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
          </div>
        </section>
      ) : null}

      <section
```

useEffect on mount only sets READY — does not rehydrate.
No component/Playwright existing test proves post-reload UI visibility.
→ M5-27/M5-28 **NOT SATISFIED** (capability gap, not mere incomplete sampling).

## 14. confirmAndExecuteF3Fixture reserve
Optional `productDurablePath?` + `??` fallback remains at helper boundary.
Product server action passes flag explicitly; prepareF3Fixture requires boolean.
Assessment: does not falsify Product path disclosures on current action surface.
**NON-BLOCKING HARDENING RESERVE**

## 15. M5-C temporary debt
- Target: technical CREATED/LAUNCHED journal
- Exit condition (doctrine): durable Attempt + safety equivalence + dedicated Morris GO
- Status: KEEP; retirement = 0
- Owner: **OWNER NOT EXPLICITLY RECORDED**
- Impact governance: document in future closure/sync; not a technical exit falsifier under M5-C KEEP

## 16. M4 / REAL regression safety
PR path delta for REAL/GateD/journal/gateway runners: (none)
triggerAttemptTimeout.ts only widened store port type to ExecutionAttemptTechnicalStorePort (not 60000 policy change).
REAL=0 · Gate D grant=0 · REAL retry=0 · M4 remains CLOSED.

## 17. Technical / Functional Exit Verdict
**NOT SATISFIED**

Rationale: durable Product path + restart + W1 + server rehydrate PASS on main, but canonical criteria M5-27 and M5-28 (Nora/UI exploitable visibility of ReviewBundle and Recommendation after restart/reload) are NOT SATISFIED. Milestone includes analyse Nora; UI remains process-local React state for those cards.

## 18. Governance Closure Readiness Verdict
**NOT READY — BLOCKING GAP**

Blocking: UI/Nora post-restart visibility gap (M5-27/M5-28).
Also: Roadmap C-DOC-RT stale (governance sync required even after functional fix).

## 19. PROPOSED ROADMAP DELTA — NOT APPLIED
Recommended updates for a future governed Roadmap sync cycle (do not apply now):
1. Snapshot Git: main = 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
2. Intégration: PR #350 merged; head 17461dad…; merge 8f753218…
3. CI: PR #184 SUCCESS; post-merge #185 SUCCESS
4. M5-A OPTION B: IMPLEMENTED ON MAIN (Attempt/Evidence/RB Product SQLite)
5. M5-B W1: IMPLEMENTED ON MAIN (factual LPS evidenceIds/reviewBundleIds + system writer)
6. M5-C: KEEP TEMPORARY WITH EXIT unchanged; journal not retired; OWNER NOT EXPLICITLY RECORDED
7. M5 exit evaluation: TECHNICAL/FUNCTIONAL **NOT SATISFIED** — blocking UI post-reload visibility gap (M5-27/M5-28); durable server rehydrate SATISFIED (M5-26)
8. Reserves: confirmAndExecute optional productDurablePath fallback (non-blocking); Roadmap sync debt
9. NEXT GATE: bounded UI/Nora durable readback wiring correction cycle OR Morris review of gap severity — then re-evaluate exit
10. M5 CLOSED = NO · M6 NOT AUTHORIZED · REAL=0 · runtime v3 NON ADOPTED

## 20. Branch cleanup
BRANCH CLEANUP — SKIPPED BY GOVERNANCE — DELETE NOT AUTHORIZED
Remote still: delivery/sfia-studio-m5-evidence-return @ 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11

## 21. Final Git status
```
?? .tmp-sfia-review/
```
HEAD=8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
origin/main=8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
tracked clean · staged empty · project commit/push/PR/merge this cycle = 0

## 22. Reserves
| Reserve | Class |
|---|---|
| UI does not consume rehydrate after reload (M5-27/28) | **BLOCKING** for M5 exit closure |
| Roadmap stale vs Git (C-DOC-RT) | Governance sync required |
| confirmAndExecute optional productDurablePath | NON-BLOCKING HARDENING |
| M5-C journal KEEP; owner not explicit | NON-BLOCKING under KEEP (record at closure sync) |

## 23. Next Morris gate
1. ChatGPT reviews this handoff + GitHub SoT.
2. Qualify bounded correction cycle: wire ProjectAssistantPanel (or Nora surface) to projectAssistantRehydrateEvidenceOutcomeAction on project load/reload — **without** M6 / REAL / journal retirement.
3. Re-run Cycle 14-style exit evaluation after fix.
4. Only then: possible Morris GO ACCEPT M5 EXIT + CLOSE M5 (+ Roadmap sync).
5. M6 remains closed until explicit future GO after M5 CLOSED.

## 24. Final Verdict

M5 POST-MERGE EXIT PROOF NOT SATISFIED — BLOCKING CAPABILITY GAP IDENTIFIED — M5 NOT CLOSED — M6 NOT AUTHORIZED — ZERO REAL

Blocking gap: Nora/UI post-restart/reload visibility of ReviewBundle + Recommendation (M5-27/M5-28) despite durable server readback (M5-26 SATISFIED ON MAIN).

## 25. Key command outputs appendix
### rg rehydrate usages
```
projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts:10:  projectAssistantRehydrateEvidenceOutcomeAction,
projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts:95:describe("C2 projectAssistantRehydrateEvidenceOutcomeAction", () => {
projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts:175:    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts:235:    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
projects/sfia-studio/app/features/project-assistant/actions.ts:526:export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
```

### PR changed files count
44 (matches reviewed candidate)

### Merge tree equality
git diff --exit-code 17461dad… 8f753218… → exit 0 EMPTY
