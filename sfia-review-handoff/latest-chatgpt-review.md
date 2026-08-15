# SFIA Review Pack — FULL

## 1. Timestamp (Europe/Paris)
2026-08-15 08:57:08 CEST

## 2. GO exact
GO MORRIS — COMMIT / PUSH / DRAFT PR — M5 UI/NORA DURABLE REHYDRATE — CLOSE M5-27/M5-28 DELIVERY ONLY — ZERO REAL — NO M6 — NO ROADMAP SYNC — M5 NOT CLOSED

## 3. Cycle / Profile / Typology
- Cycle: 13 — PR readiness / Git integration
- Profile: Critical
- Typology: EVOL
- Capability: V3-F14 (+ F02/F05/F09)
- Milestone: M5
- M6: NOT AUTHORIZED

## 4. Git Truth (pre-commit)
- Branch: delivery/sfia-studio-m5-ui-rehydrate
- Initial HEAD: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- origin/main: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- Incoming handoff: 400ac350757c172573a7754d40749a1fa09120d2
- Incoming blob: 079a2bc7a15d52d026fb6ee5b5134ccd407bb2e6
- Remote UI branch before: ABSENT
- Candidate identity vs handoff FULL DIFF: IDENTICAL (2 files)
- REAL unset · staged empty before commit

## 5. Commit
- PROJECT_COMMIT_SHA: ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7
- Parent: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- Message: fix(sfia-studio): rehydrate m5 evidence outcome in Nora UI
- Files: exactly 2
- Hook mutation: none

## 6. Push
- Remote: origin/delivery/sfia-studio-m5-ui-rehydrate = ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7
- Force: false

## 7. Draft PR
- PR_NUMBER: 351
- PR_URL: https://github.com/mcleland147/sfia-workspace/pull/351
- state: OPEN · draft: true · base: main · head: delivery/sfia-studio-m5-ui-rehydrate
- head SHA: ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7
- commit count: 1
- changed files: 2 (exact candidate)
- mark-ready: 0 · merge: 0

## 8. CI observation
- Workflow: SFIA Studio CI
- Run id: 31870688767
- Observed: {"conclusion":"","databaseId":31870688767,"event":"pull_request","headSha":"ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7","name":"SFIA Studio CI","status":"in_progress","url":"https://github.com/mcleland147/sfia-workspace/actions/runs/31870688767"}
- Detect: pass (observed) · Build: pending/in_progress at pack time
- rerun: 0

## 9. M5 status
- M5-26: SATISFIED ON MAIN (unchanged)
- M5-27: SATISFIED LOCALLY + PR candidate (≠ SATISFIED ON MAIN)
- M5-28: SATISFIED LOCALLY + PR candidate (≠ SATISFIED ON MAIN)
- Other criteria not reopened
- M5 CLOSED: NO · M6 NOT AUTHORIZED
- Product persistence / W1 / journal / timeout unchanged

## 10. Safety
- REAL=0 · Roadmap=0 · journal=0 · timeout=0 · mark-ready=0 · merge=0 · branch delete=0
- Candidate content changes this cycle: 0

## 11. Reserves
- confirmAndExecute optional productDurablePath: NON-BLOCKING HARDENING
- M5-C KEEP TEMPORARY WITH EXIT
- journal owner: OWNER NOT EXPLICITLY RECORDED
- Roadmap C-DOC-RT stale — NO SYNC THIS CYCLE

## 12. Final local status
```
?? .tmp-sfia-review/
```
HEAD=ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7
origin/main=8f753218e4fff7d68d78c1d57e9c3e8fb7e60943

## 13. Final remote refs
8f753218e4fff7d68d78c1d57e9c3e8fb7e60943	refs/heads/main
ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7	refs/heads/delivery/sfia-studio-m5-ui-rehydrate
400ac350757c172573a7754d40749a1fa09120d2	refs/heads/sfia/review-handoff

## 14. PR body
## Context

- PR #350 delivered M5 Product durability (Option B + W1).
- Cycle 14 post-merge validated M5-01…M5-26 and M5-29…M5-34.
- **M5-27 / M5-28 remained blocking:** durable server readback existed (`projectAssistantRehydrateEvidenceOutcomeAction`) but `ProjectAssistantPanel` did not consume it after reload — ReviewBundle/Recommendation were only shown from session React `f3Execute`.
- Morris authorized **only** closing M5-27/M5-28 via this UI/Nora consumer wiring.

## Change

- Reuse existing `projectAssistantRehydrateEvidenceOutcomeAction`
- Call on Panel mount / `projectId` change (read-only)
- Distinct `durableEvidenceOutcome` UI state (not `f3Execute`)
- Cancellation guard on unmount
- `NO_EVIDENCE_OUTCOME_REFS` treated as normal empty state (composer stays usable)
- Bounded fail-closed readback error notice
- Durable Evidence / ReviewBundle / Recommendation rendering
- Durable rendering suppressed when current-session `f3Execute` exists
- No fake Attempt / no `F3ExecutePayload` reconstruction
- No new server action / persistence / schema

## User capability

**Before:** reload → React `f3Execute` lost → ReviewBundle/Recommendation invisible despite durable LPS/Evidence/RB.

**After:** reload/remount → LPS durable refs → existing rehydrate action → Evidence/ReviewBundle → RecommendNextGate → ReviewBundle + Recommendation visible in Nora UI.

## Proof

- Direct mount proof (ReviewBundle + Recommendation + anti-claims)
- Unmount/remount proof (`rehydrate` call count ≥ 2; cards visible on second mount)
- `executionAuthority=false` / `gateConsumed=false` / `decisionCreated=false` / `attemptAutoLaunchNextCycle=false`
- `confirmAndExecute` action not called
- No-outcome composer remains usable
- Fail-closed readback error notice
- `ProjectAssistantPanel` **8 PASS**
- Full Vitest **1725** / 131 skipped · governance **73** PASS
- typecheck / lint / build PASS · `git diff --check` clean
- **ZERO Cursor REAL**

## Scope

Changed files only:

- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

No server action / persistence / schema / Attempt / Evidence-RB repository / W1 / Roadmap / M4 journal / timeout changes.

## M5 status

- Before this PR integration: M5-27 / M5-28 = **SATISFIED LOCALLY**
- **SATISFIED LOCALLY ≠ SATISFIED ON MAIN**
- **M5 CLOSED = NO**
- **M6 NOT AUTHORIZED**

## Anti-claims

- Recommendation ≠ HumanDecision
- Recommendation ≠ gate consumed
- Recommendation ≠ ExecutionAuthority
- rehydrate ≠ execution
- readback ≠ trajectory approval
- local QA PASS ≠ M5 CLOSED
- future merge ≠ automatic M5 closure

## Reserves

- `confirmAndExecuteF3Fixture` optional `productDurablePath` fallback = **NON-BLOCKING HARDENING**
- M5-C technical journal = **KEEP TEMPORARY WITH EXIT**
- journal owner = **OWNER NOT EXPLICITLY RECORDED**
- Roadmap = **C-DOC-RT stale** — **NO ROADMAP SYNC IN THIS PR**

## Next

- ChatGPT PR readiness review
- Morris merge gate (separate GO)
- Post-merge targeted M5-27/M5-28 evaluation
- Only then possible Morris M5 exit acceptance / closure
- M6 remains closed

## Merge

**Merge NOT AUTHORIZED** by this PR creation cycle. Do not mark ready / merge without separate Morris GO.

## Test plan

- [ ] Confirm PR remains Draft / OPEN until Morris GO
- [ ] Confirm exactly 2 changed files
- [ ] Confirm SFIA Studio CI on PR
- [ ] ChatGPT PR readiness review of handoff + GitHub metadata
- [ ] Morris mark-ready / merge only if review passes


Made with [Cursor](https://cursor.com)

## 15. Next Morris gate
1. ChatGPT PR readiness review
2. Morris GO mark-ready/merge if PASS
3. Post-merge targeted M5-27/28 evaluation
4. Then possible M5 exit/closure (+ Roadmap sync separate)
5. M6 remains closed

## 16. Verdict

M5 UI/NORA DURABLE REHYDRATE COMMITTED AND PUSHED — DRAFT PR CREATED — M5-27/M5-28 DELIVERY CANDIDATE PRESERVED — ZERO REAL — NO M6 — NO ROADMAP SYNC — M5 NOT CLOSED — CHATGPT PR READINESS REVIEW REQUIRED

# COMPLETE COMMIT PATCH
commit ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Aug 15 08:56:14 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Aug 15 08:56:14 2026 +0200

    fix(sfia-studio): rehydrate m5 evidence outcome in Nora UI

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../ProjectAssistantPanel.test.tsx                 | 214 +++++++++++++++++++++
 .../project-assistant/ProjectAssistantPanel.tsx    | 144 +++++++++++++-
 2 files changed, 357 insertions(+), 1 deletion(-)

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index e4da344..f7bd36b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -17,11 +17,13 @@ const {
   projectAssistantDecideActionMock,
   projectAssistantPrepareF3FixtureActionMock,
   projectAssistantConfirmAndExecuteF3FixtureActionMock,
+  projectAssistantRehydrateEvidenceOutcomeActionMock,
 } = vi.hoisted(() => ({
   projectAssistantSendActionMock: vi.fn(),
   projectAssistantDecideActionMock: vi.fn(),
   projectAssistantPrepareF3FixtureActionMock: vi.fn(),
   projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/actions", () => ({
@@ -33,6 +35,8 @@ vi.mock("@/features/project-assistant/actions", () => ({
     projectAssistantPrepareF3FixtureActionMock(...args),
   projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
     projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
+  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
+    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -105,12 +109,90 @@ const SUCCESS_RESULT = {
   },
 };

+const NO_EVIDENCE_OUTCOME = {
+  ok: false as const,
+  status: "rehydrate_error" as const,
+  code: "NO_EVIDENCE_OUTCOME_REFS",
+  message: "Aucune référence Evidence/ReviewBundle sur le LPS courant.",
+  mode: "fixture" as const,
+  retryable: false,
+};
+
+const DURABLE_REHYDRATE_SUCCESS = {
+  ok: true as const,
+  status: "ok" as const,
+  mode: "fixture" as const,
+  presentation: "unconfirmed" as const,
+  text: "REHYDRATE EVIDENCE OUTCOME",
+  project: {
+    projectId: "prj:m5-ui",
+    name: "Projet M5 UI",
+    shortReference: "M5UI",
+    objective: "Durable rehydrate UI",
+    contextSummary: "M5-27/M5-28",
+    criticality: "STANDARD",
+    constraints: [] as string[],
+    lpsId: "lps:m5-ui",
+    lpsVersion: 3,
+    lpsCreatedAt: "2026-08-15T12:00:00.000Z",
+    doctrineId: "pkg:studio-v3-oa",
+    doctrineVersion: "1.0.0",
+    doctrineDigest: "digest:m5-ui",
+    doctrineStatus: "RESOLVED",
+    runtimeMode: "LOCAL_PROCESS",
+    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
+    readiness: "NOT_READY",
+  },
+  ephemeralNotice:
+    "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.",
+  evidence: [
+    {
+      evidenceId: "ev:m5-ui",
+      status: "available",
+      sourceKind: "execution_attempt",
+      technicalResultRef: "res:m5-ui",
+      verified: false as const,
+      mode: "fixture" as const,
+    },
+  ],
+  reviewBundles: [
+    {
+      reviewBundleId: "rb:m5-ui",
+      status: "draft",
+      version: 1,
+      evidenceRefs: ["ev:m5-ui"],
+      mode: "fixture" as const,
+    },
+  ],
+  recommendation: {
+    kind: "recommendation" as const,
+    status: "not_recommended",
+    executionAuthority: false as const,
+    gateConsumed: false as const,
+    decisionCreated: false as const,
+    attemptAutoLaunchNextCycle: false as const,
+    openHardReservationRefs: [] as string[],
+    hardBlockers: [] as string[],
+    nextGateCode: null,
+    nextActionCode: null,
+    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS" as const,
+    mode: "fixture" as const,
+  },
+  lpsVersion: 3,
+  evidenceIds: ["ev:m5-ui"],
+  reviewBundleIds: ["rb:m5-ui"],
+};
+
 describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
     projectAssistantDecideActionMock.mockReset();
     projectAssistantPrepareF3FixtureActionMock.mockReset();
     projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
   });

   afterEach(() => {
@@ -344,3 +426,135 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
   });
 });
+
+describe("M5-27/M5-28 durable Nora/UI rehydrate", () => {
+  beforeEach(() => {
+    projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
+    projectAssistantPrepareF3FixtureActionMock.mockReset();
+    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
+  });
+
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("shows durable ReviewBundle + Recommendation after mount without f3Execute", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      DURABLE_REHYDRATE_SUCCESS,
+    );
+
+    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+
+    expect(
+      await screen.findByTestId("durable-evidence-outcome"),
+    ).toBeVisible();
+    expect(projectAssistantRehydrateEvidenceOutcomeActionMock).toHaveBeenCalledWith(
+      { projectId: "prj:m5-ui" },
+    );
+    expect(screen.getByTestId("durable-review-bundle-id")).toHaveTextContent(
+      "rb:m5-ui",
+    );
+    expect(screen.getByTestId("durable-review-bundle-status")).toHaveTextContent(
+      "draft",
+    );
+    expect(screen.getByTestId("durable-recommendation-label")).toHaveTextContent(
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+    );
+    expect(
+      screen.getByTestId("durable-recommendation-execution-authority"),
+    ).toHaveTextContent("executionAuthority: false");
+    expect(
+      screen.getByTestId("durable-recommendation-gate-consumed"),
+    ).toHaveTextContent("gateConsumed: false");
+    expect(
+      screen.getByTestId("durable-recommendation-decision-created"),
+    ).toHaveTextContent("decisionCreated: false");
+    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+
+  it("reloads durable ReviewBundle + Recommendation after unmount/remount", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      DURABLE_REHYDRATE_SUCCESS,
+    );
+
+    const first = render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+    expect(
+      await screen.findByTestId("durable-review-bundle-id"),
+    ).toHaveTextContent("rb:m5-ui");
+    expect(
+      screen.getByTestId("durable-recommendation-label"),
+    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");
+
+    first.unmount();
+
+    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+    expect(
+      await screen.findByTestId("durable-review-bundle-id"),
+    ).toHaveTextContent("rb:m5-ui");
+    expect(
+      screen.getByTestId("durable-recommendation-label"),
+    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");
+    expect(
+      screen.getByTestId("durable-recommendation-execution-authority"),
+    ).toHaveTextContent("executionAuthority: false");
+    expect(
+      projectAssistantRehydrateEvidenceOutcomeActionMock.mock.calls.length,
+    ).toBeGreaterThanOrEqual(2);
+    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+
+  it("keeps composer usable when LPS has no durable outcome refs", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
+
+    render(<ProjectAssistantPanel projectId="prj:m5-empty" />);
+
+    await waitFor(() => {
+      expect(
+        projectAssistantRehydrateEvidenceOutcomeActionMock,
+      ).toHaveBeenCalledWith({ projectId: "prj:m5-empty" });
+    });
+
+    expect(screen.queryByTestId("durable-evidence-outcome")).toBeNull();
+    expect(screen.queryByTestId("durable-review-bundle-card")).toBeNull();
+    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
+    expect(screen.queryByTestId("durable-rehydrate-error")).toBeNull();
+    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
+    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
+    expect(screen.getByTestId("project-assistant-composer")).toBeVisible();
+  });
+
+  it("shows bounded durable rehydrate error without blocking composer", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
+      ok: false,
+      status: "rehydrate_error",
+      code: "EVIDENCE_REF_MISSING",
+      message: "Evidence manquante",
+      mode: "fixture",
+      retryable: false,
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:m5-err" />);
+
+    expect(await screen.findByTestId("durable-rehydrate-error")).toHaveTextContent(
+      /Impossible de relire le dernier outcome durable/,
+    );
+    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
+    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index a02564c..58871d7 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -7,12 +7,14 @@ import {
   projectAssistantDecideAction,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareM3Action,
+  projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
   F2TurnPayload,
+  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
 } from "./types";
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
@@ -91,6 +93,11 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     null,
   );
   const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
+  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
+    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
+  const [durableRehydrateError, setDurableRehydrateError] = useState<
+    string | null
+  >(null);
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
@@ -99,6 +106,36 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);

+  useEffect(() => {
+    let cancelled = false;
+    setDurableEvidenceOutcome(null);
+    setDurableRehydrateError(null);
+
+    void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
+      (result) => {
+        if (cancelled) return;
+        if (result.ok) {
+          setDurableEvidenceOutcome(result);
+          setDurableRehydrateError(null);
+          return;
+        }
+        if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
+          setDurableEvidenceOutcome(null);
+          setDurableRehydrateError(null);
+          return;
+        }
+        setDurableEvidenceOutcome(null);
+        setDurableRehydrateError(
+          "Impossible de relire le dernier outcome durable.",
+        );
+      },
+    );
+
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     const el = listRef.current;
     if (!el || typeof el.scrollTo !== "function") return;
@@ -106,7 +143,17 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error, activeProposal, f2, f3Prepare, f3Execute]);
+  }, [
+    messages,
+    toolEvents,
+    error,
+    activeProposal,
+    f2,
+    f3Prepare,
+    f3Execute,
+    durableEvidenceOutcome,
+    durableRehydrateError,
+  ]);

   const busy =
     isPending ||
@@ -807,6 +854,101 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </section>
       ) : null}

+      {!f3Execute && durableRehydrateError ? (
+        <section
+          className={styles.f3Card}
+          data-testid="durable-rehydrate-error"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>Outcome durable</h3>
+          <p className={styles.cardMeta}>{durableRehydrateError}</p>
+        </section>
+      ) : null}
+
+      {!f3Execute && durableEvidenceOutcome ? (
+        <section
+          className={styles.f3Card}
+          data-testid="durable-evidence-outcome"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>OUTCOME DURABLE — RELECTURE LPS</h3>
+          <div className={styles.f3Labels} data-testid="durable-outcome-labels">
+            <StatusPill tone="blueFlush">
+              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+            </StatusPill>
+            <StatusPill tone="muted">LECTURE SEULE — AUCUNE EXÉCUTION</StatusPill>
+          </div>
+          <p className={styles.cardMeta} data-testid="durable-lps-version">
+            LPS v{durableEvidenceOutcome.lpsVersion}
+          </p>
+          <p className={styles.cardMeta} data-testid="durable-ephemeral-notice">
+            {durableEvidenceOutcome.ephemeralNotice}
+          </p>
+
+          <div data-testid="durable-evidence-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>Evidence</h4>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>IDs</dt>
+                <dd data-testid="durable-evidence-ids">
+                  {durableEvidenceOutcome.evidenceIds.join(", ") || "—"}
+                </dd>
+              </div>
+              {durableEvidenceOutcome.evidence.map((ev) => (
+                <div key={ev.evidenceId}>
+                  <dt>{ev.evidenceId}</dt>
+                  <dd data-testid={`durable-evidence-status-${ev.evidenceId}`}>
+                    {ev.status}
+                  </dd>
+                </div>
+              ))}
+            </dl>
+          </div>
+
+          {durableEvidenceOutcome.reviewBundles.map((rb) => (
+            <div
+              key={rb.reviewBundleId}
+              data-testid="durable-review-bundle-card"
+              className={styles.f3Subcard}
+            >
+              <h4 className={styles.cardTitle}>ReviewBundle</h4>
+              <p data-testid="durable-review-bundle-id">{rb.reviewBundleId}</p>
+              <p data-testid="durable-review-bundle-status">{rb.status}</p>
+            </div>
+          ))}
+
+          <div
+            data-testid="durable-recommendation-card"
+            className={styles.f3Subcard}
+          >
+            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <p data-testid="durable-recommendation-label">
+              {durableEvidenceOutcome.recommendation.recommendationLabel}
+            </p>
+            <p data-testid="durable-recommendation-execution-authority">
+              executionAuthority:{" "}
+              {String(
+                durableEvidenceOutcome.recommendation.executionAuthority,
+              )}
+            </p>
+            <p data-testid="durable-recommendation-gate-consumed">
+              gateConsumed:{" "}
+              {String(durableEvidenceOutcome.recommendation.gateConsumed)}
+            </p>
+            <p data-testid="durable-recommendation-decision-created">
+              decisionCreated:{" "}
+              {String(durableEvidenceOutcome.recommendation.decisionCreated)}
+            </p>
+            <p data-testid="durable-recommendation-auto-launch">
+              attemptAutoLaunchNextCycle:{" "}
+              {String(
+                durableEvidenceOutcome.recommendation.attemptAutoLaunchNextCycle,
+              )}
+            </p>
+          </div>
+        </section>
+      ) : null}
+
       <section
         className={styles.sources}
         aria-labelledby="project-assistant-sources-title"

# COMPLETE PR PATCH
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index e4da344c..f7bd36b5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -17,11 +17,13 @@ const {
   projectAssistantDecideActionMock,
   projectAssistantPrepareF3FixtureActionMock,
   projectAssistantConfirmAndExecuteF3FixtureActionMock,
+  projectAssistantRehydrateEvidenceOutcomeActionMock,
 } = vi.hoisted(() => ({
   projectAssistantSendActionMock: vi.fn(),
   projectAssistantDecideActionMock: vi.fn(),
   projectAssistantPrepareF3FixtureActionMock: vi.fn(),
   projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/actions", () => ({
@@ -33,6 +35,8 @@ vi.mock("@/features/project-assistant/actions", () => ({
     projectAssistantPrepareF3FixtureActionMock(...args),
   projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
     projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
+  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
+    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -105,12 +109,90 @@ const SUCCESS_RESULT = {
   },
 };

+const NO_EVIDENCE_OUTCOME = {
+  ok: false as const,
+  status: "rehydrate_error" as const,
+  code: "NO_EVIDENCE_OUTCOME_REFS",
+  message: "Aucune référence Evidence/ReviewBundle sur le LPS courant.",
+  mode: "fixture" as const,
+  retryable: false,
+};
+
+const DURABLE_REHYDRATE_SUCCESS = {
+  ok: true as const,
+  status: "ok" as const,
+  mode: "fixture" as const,
+  presentation: "unconfirmed" as const,
+  text: "REHYDRATE EVIDENCE OUTCOME",
+  project: {
+    projectId: "prj:m5-ui",
+    name: "Projet M5 UI",
+    shortReference: "M5UI",
+    objective: "Durable rehydrate UI",
+    contextSummary: "M5-27/M5-28",
+    criticality: "STANDARD",
+    constraints: [] as string[],
+    lpsId: "lps:m5-ui",
+    lpsVersion: 3,
+    lpsCreatedAt: "2026-08-15T12:00:00.000Z",
+    doctrineId: "pkg:studio-v3-oa",
+    doctrineVersion: "1.0.0",
+    doctrineDigest: "digest:m5-ui",
+    doctrineStatus: "RESOLVED",
+    runtimeMode: "LOCAL_PROCESS",
+    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
+    readiness: "NOT_READY",
+  },
+  ephemeralNotice:
+    "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.",
+  evidence: [
+    {
+      evidenceId: "ev:m5-ui",
+      status: "available",
+      sourceKind: "execution_attempt",
+      technicalResultRef: "res:m5-ui",
+      verified: false as const,
+      mode: "fixture" as const,
+    },
+  ],
+  reviewBundles: [
+    {
+      reviewBundleId: "rb:m5-ui",
+      status: "draft",
+      version: 1,
+      evidenceRefs: ["ev:m5-ui"],
+      mode: "fixture" as const,
+    },
+  ],
+  recommendation: {
+    kind: "recommendation" as const,
+    status: "not_recommended",
+    executionAuthority: false as const,
+    gateConsumed: false as const,
+    decisionCreated: false as const,
+    attemptAutoLaunchNextCycle: false as const,
+    openHardReservationRefs: [] as string[],
+    hardBlockers: [] as string[],
+    nextGateCode: null,
+    nextActionCode: null,
+    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS" as const,
+    mode: "fixture" as const,
+  },
+  lpsVersion: 3,
+  evidenceIds: ["ev:m5-ui"],
+  reviewBundleIds: ["rb:m5-ui"],
+};
+
 describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
     projectAssistantDecideActionMock.mockReset();
     projectAssistantPrepareF3FixtureActionMock.mockReset();
     projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
   });

   afterEach(() => {
@@ -344,3 +426,135 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
   });
 });
+
+describe("M5-27/M5-28 durable Nora/UI rehydrate", () => {
+  beforeEach(() => {
+    projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
+    projectAssistantPrepareF3FixtureActionMock.mockReset();
+    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
+  });
+
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("shows durable ReviewBundle + Recommendation after mount without f3Execute", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      DURABLE_REHYDRATE_SUCCESS,
+    );
+
+    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+
+    expect(
+      await screen.findByTestId("durable-evidence-outcome"),
+    ).toBeVisible();
+    expect(projectAssistantRehydrateEvidenceOutcomeActionMock).toHaveBeenCalledWith(
+      { projectId: "prj:m5-ui" },
+    );
+    expect(screen.getByTestId("durable-review-bundle-id")).toHaveTextContent(
+      "rb:m5-ui",
+    );
+    expect(screen.getByTestId("durable-review-bundle-status")).toHaveTextContent(
+      "draft",
+    );
+    expect(screen.getByTestId("durable-recommendation-label")).toHaveTextContent(
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+    );
+    expect(
+      screen.getByTestId("durable-recommendation-execution-authority"),
+    ).toHaveTextContent("executionAuthority: false");
+    expect(
+      screen.getByTestId("durable-recommendation-gate-consumed"),
+    ).toHaveTextContent("gateConsumed: false");
+    expect(
+      screen.getByTestId("durable-recommendation-decision-created"),
+    ).toHaveTextContent("decisionCreated: false");
+    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+
+  it("reloads durable ReviewBundle + Recommendation after unmount/remount", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      DURABLE_REHYDRATE_SUCCESS,
+    );
+
+    const first = render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+    expect(
+      await screen.findByTestId("durable-review-bundle-id"),
+    ).toHaveTextContent("rb:m5-ui");
+    expect(
+      screen.getByTestId("durable-recommendation-label"),
+    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");
+
+    first.unmount();
+
+    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
+    expect(
+      await screen.findByTestId("durable-review-bundle-id"),
+    ).toHaveTextContent("rb:m5-ui");
+    expect(
+      screen.getByTestId("durable-recommendation-label"),
+    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");
+    expect(
+      screen.getByTestId("durable-recommendation-execution-authority"),
+    ).toHaveTextContent("executionAuthority: false");
+    expect(
+      projectAssistantRehydrateEvidenceOutcomeActionMock.mock.calls.length,
+    ).toBeGreaterThanOrEqual(2);
+    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+
+  it("keeps composer usable when LPS has no durable outcome refs", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
+
+    render(<ProjectAssistantPanel projectId="prj:m5-empty" />);
+
+    await waitFor(() => {
+      expect(
+        projectAssistantRehydrateEvidenceOutcomeActionMock,
+      ).toHaveBeenCalledWith({ projectId: "prj:m5-empty" });
+    });
+
+    expect(screen.queryByTestId("durable-evidence-outcome")).toBeNull();
+    expect(screen.queryByTestId("durable-review-bundle-card")).toBeNull();
+    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
+    expect(screen.queryByTestId("durable-rehydrate-error")).toBeNull();
+    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
+    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
+    expect(screen.getByTestId("project-assistant-composer")).toBeVisible();
+  });
+
+  it("shows bounded durable rehydrate error without blocking composer", async () => {
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
+      ok: false,
+      status: "rehydrate_error",
+      code: "EVIDENCE_REF_MISSING",
+      message: "Evidence manquante",
+      mode: "fixture",
+      retryable: false,
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:m5-err" />);
+
+    expect(await screen.findByTestId("durable-rehydrate-error")).toHaveTextContent(
+      /Impossible de relire le dernier outcome durable/,
+    );
+    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
+    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
+    expect(
+      projectAssistantConfirmAndExecuteF3FixtureActionMock,
+    ).not.toHaveBeenCalled();
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index a02564cd..58871d7a 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -7,12 +7,14 @@ import {
   projectAssistantDecideAction,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareM3Action,
+  projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
   F2TurnPayload,
+  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
 } from "./types";
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
@@ -91,6 +93,11 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     null,
   );
   const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
+  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
+    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
+  const [durableRehydrateError, setDurableRehydrateError] = useState<
+    string | null
+  >(null);
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
@@ -99,6 +106,36 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);

+  useEffect(() => {
+    let cancelled = false;
+    setDurableEvidenceOutcome(null);
+    setDurableRehydrateError(null);
+
+    void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
+      (result) => {
+        if (cancelled) return;
+        if (result.ok) {
+          setDurableEvidenceOutcome(result);
+          setDurableRehydrateError(null);
+          return;
+        }
+        if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
+          setDurableEvidenceOutcome(null);
+          setDurableRehydrateError(null);
+          return;
+        }
+        setDurableEvidenceOutcome(null);
+        setDurableRehydrateError(
+          "Impossible de relire le dernier outcome durable.",
+        );
+      },
+    );
+
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     const el = listRef.current;
     if (!el || typeof el.scrollTo !== "function") return;
@@ -106,7 +143,17 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error, activeProposal, f2, f3Prepare, f3Execute]);
+  }, [
+    messages,
+    toolEvents,
+    error,
+    activeProposal,
+    f2,
+    f3Prepare,
+    f3Execute,
+    durableEvidenceOutcome,
+    durableRehydrateError,
+  ]);

   const busy =
     isPending ||
@@ -807,6 +854,101 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </section>
       ) : null}

+      {!f3Execute && durableRehydrateError ? (
+        <section
+          className={styles.f3Card}
+          data-testid="durable-rehydrate-error"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>Outcome durable</h3>
+          <p className={styles.cardMeta}>{durableRehydrateError}</p>
+        </section>
+      ) : null}
+
+      {!f3Execute && durableEvidenceOutcome ? (
+        <section
+          className={styles.f3Card}
+          data-testid="durable-evidence-outcome"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>OUTCOME DURABLE — RELECTURE LPS</h3>
+          <div className={styles.f3Labels} data-testid="durable-outcome-labels">
+            <StatusPill tone="blueFlush">
+              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+            </StatusPill>
+            <StatusPill tone="muted">LECTURE SEULE — AUCUNE EXÉCUTION</StatusPill>
+          </div>
+          <p className={styles.cardMeta} data-testid="durable-lps-version">
+            LPS v{durableEvidenceOutcome.lpsVersion}
+          </p>
+          <p className={styles.cardMeta} data-testid="durable-ephemeral-notice">
+            {durableEvidenceOutcome.ephemeralNotice}
+          </p>
+
+          <div data-testid="durable-evidence-card" className={styles.f3Subcard}>
+            <h4 className={styles.cardTitle}>Evidence</h4>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>IDs</dt>
+                <dd data-testid="durable-evidence-ids">
+                  {durableEvidenceOutcome.evidenceIds.join(", ") || "—"}
+                </dd>
+              </div>
+              {durableEvidenceOutcome.evidence.map((ev) => (
+                <div key={ev.evidenceId}>
+                  <dt>{ev.evidenceId}</dt>
+                  <dd data-testid={`durable-evidence-status-${ev.evidenceId}`}>
+                    {ev.status}
+                  </dd>
+                </div>
+              ))}
+            </dl>
+          </div>
+
+          {durableEvidenceOutcome.reviewBundles.map((rb) => (
+            <div
+              key={rb.reviewBundleId}
+              data-testid="durable-review-bundle-card"
+              className={styles.f3Subcard}
+            >
+              <h4 className={styles.cardTitle}>ReviewBundle</h4>
+              <p data-testid="durable-review-bundle-id">{rb.reviewBundleId}</p>
+              <p data-testid="durable-review-bundle-status">{rb.status}</p>
+            </div>
+          ))}
+
+          <div
+            data-testid="durable-recommendation-card"
+            className={styles.f3Subcard}
+          >
+            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <p data-testid="durable-recommendation-label">
+              {durableEvidenceOutcome.recommendation.recommendationLabel}
+            </p>
+            <p data-testid="durable-recommendation-execution-authority">
+              executionAuthority:{" "}
+              {String(
+                durableEvidenceOutcome.recommendation.executionAuthority,
+              )}
+            </p>
+            <p data-testid="durable-recommendation-gate-consumed">
+              gateConsumed:{" "}
+              {String(durableEvidenceOutcome.recommendation.gateConsumed)}
+            </p>
+            <p data-testid="durable-recommendation-decision-created">
+              decisionCreated:{" "}
+              {String(durableEvidenceOutcome.recommendation.decisionCreated)}
+            </p>
+            <p data-testid="durable-recommendation-auto-launch">
+              attemptAutoLaunchNextCycle:{" "}
+              {String(
+                durableEvidenceOutcome.recommendation.attemptAutoLaunchNextCycle,
+              )}
+            </p>
+          </div>
+        </section>
+      ) : null}
+
       <section
         className={styles.sources}
         aria-labelledby="project-assistant-sources-title"
