# SFIA Review Pack — FULL

## 1. Timestamp (Europe/Paris)
2026-08-15 08:48:46 CEST

## 2. GO exact
GO MORRIS — M5 UI/NORA DURABLE REHYDRATE DELIVERY — CLOSE M5-27/M5-28 ONLY — ZERO REAL — NO M6 — NO ROADMAP SYNC — M5 NOT CLOSED

## 3. Cycle / Profile / Typology
- Cycle: 8 — Delivery / implementation (bounded correction after Cycle 14)
- Profile: Critical
- Typology: EVOL
- Capability: V3-F14 (+ F02/F05/F09)
- Milestone: M5
- M6: NOT AUTHORIZED
- CKC Cycle 8 detailed: ABSENT → synthetic map fallback

## 4. Git Truth
- Branch: delivery/sfia-studio-m5-ui-rehydrate (created from origin/main)
- HEAD: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- origin/main: 8f753218e4fff7d68d78c1d57e9c3e8fb7e60943
- Incoming handoff: 958dad4c0f50956320240d3efe25697e03214475
- Remote delivery/sfia-studio-m5-ui-rehydrate: ABSENT
- Historical Delivery retained: delivery/sfia-studio-m5-evidence-return @ 17461dad…
- staged: empty
- REAL env: unset
- Project commit/push/PR: 0

## 5. Incoming Cycle 14 finding
- M5-26 SATISFIED ON MAIN (server rehydrate)
- M5-27/M5-28 NOT SATISFIED — Panel did not consume rehydrate; cards only from session f3Execute

## 6. Architecture / reuse
- Reused existing projectAssistantRehydrateEvidenceOutcomeAction (no new server action)
- Distinct UI state durableEvidenceOutcome (success DTO) — no F3ExecutePayload reconstruction / no fake Attempt
- Mount useEffect(projectId) read-only call + cancelled flag
- Durable cards shown only when !f3Execute
- NO_EVIDENCE_OUTCOME_REFS = silent normal (composer usable)
- Other rehydrate errors = bounded notice, no Recommendation inventée

## 7. Files modified (exactly 2)
- projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
- projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx

## 8. Implementation summary
- Import + call projectAssistantRehydrateEvidenceOutcomeAction on projectId mount/change
- Clear prior durable state on projectId change
- Render durable Evidence / ReviewBundle / Recommendation / LPS version / Product notice / anti-claims
- Fail-closed durable-rehydrate-error notice
- Tests: mount success, unmount/remount callCount>=2, NO_EVIDENCE path, EVIDENCE_REF_MISSING fail-closed
- Existing F1 tests default rehydrate mock = NO_EVIDENCE_OUTCOME_REFS

## 9. QA
- ProjectAssistantPanel.test.tsx: 8 PASS
- m5C1C2DisclosureAndRehydrateAction: PASS (preserved)
- rehydrateEvidenceOutcomeFromLps: PASS
- m5RestartProcessProof: PASS
- recommendation-vs-decision: PASS
- __tests__/project-assistant: PASS
- typecheck / lint / build: PASS
- full Vitest: 1725 passed / 131 skipped
- modeled governance: 73 PASS
- git diff --check: clean
- REAL=0

## 10. M5 matrix delta
- M5-27: NOT SATISFIED → **SATISFIED LOCALLY** (remount ReviewBundle visible; rehydrate called)
- M5-28: NOT SATISFIED → **SATISFIED LOCALLY** (remount Recommendation + anti-claims visible)
- Other criteria: not reopened
- SATISFIED LOCALLY ≠ SATISFIED ON MAIN / ≠ M5 CLOSED

## 11. Reserves preserved
- confirmAndExecute optional productDurablePath: NON-BLOCKING HARDENING
- M5-C journal KEEP TEMPORARY WITH EXIT
- Roadmap C-DOC-RT stale — NO SYNC THIS CYCLE
- Journal owner: OWNER NOT EXPLICITLY RECORDED

## 12. Final git status
```
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
?? .tmp-sfia-review/
```
branch=delivery/sfia-studio-m5-ui-rehydrate
HEAD=8f753218e4fff7d68d78c1d57e9c3e8fb7e60943

## 13. Next Morris gate
1. ChatGPT QA review of this handoff
2. If PASS → Morris GO commit/push/Draft PR UI rehydrate
3. PR readiness → merge gate
4. Post-merge re-evaluate M5-27/28 on main
5. If M5-01…34 satisfied → Morris M5 exit/closure gate (+ Roadmap sync separate)
6. M6 remains closed

## 14. Verdict

M5 UI/NORA DURABLE REHYDRATE DELIVERY COMPLETE — M5-27/M5-28 SATISFIED LOCALLY — DURABLE REVIEWBUNDLE + RECOMMENDATION VISIBLE AFTER REMOUNT — EXISTING M5 PROOFS PRESERVED — ZERO REAL — NO M6 — NO ROADMAP SYNC — M5 NOT CLOSED — READY FOR CHATGPT QA REVIEW

# FULL DIFF
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
