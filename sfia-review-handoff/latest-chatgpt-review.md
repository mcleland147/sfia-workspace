# CORR-PROOF-08 — FULL Review Pack
## Bounded F2 LIVE Intent Observability + One Controlled Retest

**Campaign:** SFIA Studio Product Proof — Fresh Project Full Cycle
**Corrective unit:** CORR-PROOF-08 — Bounded F2 LIVE Intent Observability + Controlled Retest
**Type / Profile:** EVOL / CRITICAL
**Runtime v3:** NON ADOPTED
**Product anchor:** `84a36a8d32f7b2632180d789e41521d6e769c681`
**Relationship:** new justified corrective unit inside the SAME Product Proof macro-campaign (after CORR-PROOF-07 CLOSED / MERGED / POST-MERGE VERIFIED).
**Cognitive correction in this run:** NONE (forbidden even if root cause became obvious).

---

## A. Identity / Morris GO

### Morris decision consumed (exact authorization scope)

GO — bounded F2 LIVE intent observability instrumentation + one controlled LIVE retest, no cognitive correction yet.

This GO authorized exactly:

- bounded LOCAL temporary instrumentation of the existing F2 intent-analysis seam;
- local modification of the dogfood tracked file(s) strictly necessary for that instrumentation;
- deterministic validation of the instrumentation without LIVE;
- graceful restart of the existing dogfood runtime with explicit forensic opt-in;
- ONE controlled LIVE Nora turn, manually initiated by Morris;
- read-only forensic analysis of the resulting log/session/Product state;
- restoration of the temporary instrumentation to exact Git main content;
- restart of the clean baseline runtime after restoration;
- FULL Review Pack;
- canonical Review Handoff publication through the bounded sfia/review-handoff publisher.

NOT AUTHORIZED (and not performed): cognitive prompt correction; F2 schema change; executionIntent validation semantic change; transitionReadiness change; CORR-PROOF-07 resolver change; automatic defaulting of docs_write; new classifier/planner; architecture/persistence/schema/migration; Product DB reset/seed/recreate; automatic Nora replay; more than ONE LIVE model turn; Product commit/push/PR/merge; source branch creation; doctrine / Build Doctrine / Roadmap / C1 mutation; runtime v3 promotion.

### Why Critical

- OpenAI LIVE cognitive boundary;
- durable Project/cycle state must be preserved;
- exactly one model turn budgeted;
- evidence must distinguish provider semantic output from server enforcement.

### Incoming forensic gap (CORR-PROOF-07 aftermath)

R1 ∨ R2 ∨ R3 ∨ R4 remained indistinguishable because validated intent was not retained after the prior LIVE turn.

### Target of this unit

Capture enough of the VALIDATED IntentAnalysisDto from ONE fresh LIVE turn to distinguish the actual failure condition without changing Nora cognition.

---

## B. Git / runtime truth (pre-instrumentation)

| Check | Result |
|------|--------|
| Worktree | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` |
| Mode | detached HEAD |
| HEAD | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| origin/main | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Anchor match | OK |
| Product tracked dirty before instrumentation | NONE (only `.tmp-sfia-review/chatgpt-review.md` dirty) |
| Staged Product files | NONE |
| Port 3020 before instrumentation | no listener (prior dogfood had already exited) |
| Product DB | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` |
| Dogfood Product DB path | symlink → workspace Product DB (unchanged) |
| Session DB | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d/projects/sfia-studio/.sfia-exec/product/nora-session.sqlite` |
| `.env.local` | symlink → dogfood-01 `.env.local` (unchanged; forensic flag NOT written there) |

Original `intentAnalysis.ts` SHA-256:

`37cd43ce52aa94fc88cb8a226bea3b7f5f1bac4242658d0d9f572f99cd0f00cb`

---

## C. Instrumentation (TEMPORARY WITH EXIT)

### Path temporarily modified

Exactly one Product tracked file:

`projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

Instrumented SHA-256:

`c8fa8d9bac539fa146d8b80579bf9f2f2ffd422a4d0692d417cce739d344f699`

Diffstat: `1 file changed, 64 insertions(+), 1 deletion(-)`

### Seam

AFTER `validateIntentAnalysisPayload` and server challenge-assessment normalization, BEFORE returning the analysis result.

### Opt-in gate

`SFIA_STUDIO_F2_INTENT_FORENSIC=1`
Default OFF. Enabled only in the forensic launch command. Not written into `.env.local`.

### Sink / format

One single-line stdout JSON record per `analyzeIntent` call while flag ON:

Prefix: `[SFIA_F2_INTENT_FORENSIC]`

### Fields logged (only)

- event / version
- timestamp
- providerId
- presentation
- model
- userContentSha256 (SHA-256 of exact UTF-8 userContent)
- userContentLength
- parseOk
- intentClass
- candidateCycleTypeId
- signals
- continuationKind
- requestedOperation (analysis surface)
- executionIntentPresent
- executionIntent.{intentKind, requestedOperation, requiredCapabilities, targetPath, reversibilityExpectation}

### Fields explicitly NOT logged

rawText; userContent plaintext; system prompt; projectSummary; canonical conversation; CKC text; artifactBrief; contentRequirements; expectedOutputs; scope arrays; evidenceRequirements; credentials; API keys; auth headers; cookies; session tokens; full OpenAI response; chain of thought.

No Product DB persistence. No Session DB diagnostic persistence. No network telemetry. No new file writer.

### Complete useful diff (as applied during the LIVE window)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 798cfad3..b1ae8a39 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -4,6 +4,7 @@
  * CORR-MW2-REAL-01: optional INTERNAL semantic CWP assessment on same call.
  */

+import { createHash } from "node:crypto";
 import {
   resolveConversationProvider,
   TechnicalError,
@@ -689,10 +690,22 @@ export async function analyzeIntent(input: {
     analysis.challengeResponseAssessment = null;
   }

+  const model = completion.usage?.model ?? null;
+
+  // CORR-PROOF-08 — TEMPORARY WITH EXIT: opt-in validated-intent forensic only.
+  // Never logs rawText / prompts / user plaintext / secrets. Default OFF.
+  emitF2IntentForensicIfEnabled({
+    providerId: provider.providerId,
+    presentation,
+    model,
+    userContent: input.userContent,
+    analysis,
+  });
+
   return {
     analysis,
     presentation,
-    model: completion.usage?.model ?? null,
+    model,
     rawText: completion.text,
     ...(evalControl
       ? {
@@ -702,3 +715,53 @@ export async function analyzeIntent(input: {
       : {}),
   };
 }
+
+/**
+ * CORR-PROOF-08 — bounded LIVE/intent forensic (TEMPORARY WITH EXIT).
+ * Opt-in: SFIA_STUDIO_F2_INTENT_FORENSIC=1
+ * Sink: process stdout one-line JSON after stable prefix.
+ * Does not alter analysis semantics.
+ */
+function emitF2IntentForensicIfEnabled(input: {
+  providerId: string;
+  presentation: "test_provider" | "openai_live";
+  model: string | null;
+  userContent: string;
+  analysis: IntentAnalysisDto;
+}): void {
+  if (process.env.SFIA_STUDIO_F2_INTENT_FORENSIC?.trim() !== "1") {
+    return;
+  }
+  const ei = input.analysis.executionIntent;
+  const userContentUtf8 = Buffer.from(input.userContent, "utf8");
+  const record = {
+    event: "SFIA_F2_INTENT_FORENSIC",
+    version: 1,
+    ts: new Date().toISOString(),
+    providerId: input.providerId,
+    presentation: input.presentation,
+    model: input.model,
+    userContentSha256: createHash("sha256")
+      .update(userContentUtf8)
+      .digest("hex"),
+    userContentLength: userContentUtf8.length,
+    parseOk: input.analysis.parseOk,
+    intentClass: input.analysis.intentClass,
+    candidateCycleTypeId: input.analysis.candidateCycleTypeId,
+    signals: input.analysis.signals,
+    continuationKind: input.analysis.continuationKind ?? null,
+    requestedOperation: input.analysis.requestedOperation ?? null,
+    executionIntentPresent: ei != null,
+    executionIntent: ei
+      ? {
+          intentKind: ei.intentKind ?? null,
+          requestedOperation: ei.requestedOperation ?? null,
+          requiredCapabilities: ei.requiredCapabilities ?? null,
+          targetPath: ei.targetPath ?? null,
+          reversibilityExpectation: ei.reversibilityExpectation ?? null,
+        }
+      : null,
+  };
+  // Single-line diagnostic — no rawText / prompts / plaintext user content.
+  console.info(`[SFIA_F2_INTENT_FORENSIC] ${JSON.stringify(record)}`);
+}
```

### Forbidden semantic surfaces — verified untouched

ANALYSIS_SYSTEM_BASE; F2_INTENT_JSON_SCHEMA; F2_EXECUTION_INTENT_JSON_SCHEMA; validateIntentAnalysisPayload; validateExecutionIntentPayload semantics; resolveTransitionReadiness; hasCompatibleDocsWriteMaterializationEffect; resolveActiveCycleGovernedContinuation; enrichExecutionIntentFromBinding; canonical docs_write operation/capability; provider model/reasoning configuration; Session context; repository binding; HumanDecision state.

### Deterministic validation (before LIVE)

| Step | Result |
|------|--------|
| `git diff --check` | clean |
| `npm run typecheck` | PASS |
| `SFIA_STUDIO_F2_INTENT_FORENSIC=1 npm test -- __tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts` | 32/32 PASS; ≥15 forensic lines; valid one-line JSON after prefix; analysis fields present |
| Privacy on forensic lines | no rawText / user plaintext / prompt / credentials |
| Flag OFF retest | 0 forensic lines |

Deterministic instrumentation proof ≠ LIVE proof.

---

## D. LIVE budget

| Item | Value |
|------|--------|
| LIVE model turns authorized | 1 |
| LIVE model turns consumed | 1 |
| Automated POST / browser automation by Cursor | NONE |
| Manual actor | Morris |
| Exact user text | `Matérialise ce livrable.` |
| Correlation SHA-256 (UTF-8) | `b852aeb18ea11a9cbd1e200f3eac6240c5d110cd5a549634a0cac0a4ead50c3b` |
| userContentLength | 25 |
| Forensic timestamp | `2026-09-14T17:36:40.098Z` |
| providerId | `openai` |
| presentation | `openai_live` |
| model | `gpt-5.6-luna` |
| Forensic runtime log | `/tmp/sfia-studio-product-proof-corr08-intent-forensic.log` |
| Forensic env | `SFIA_STUDIO_F2_INTENT_FORENSIC=1` |
| Duplicate send | NONE (Morris confirmed EXACTLY ONE SEND — NO RETRY) |
| openai_live forensic event count matching hash | **1** |

---

## E. Captured validated DTO fields (exact forensic JSON line)

```
[SFIA_F2_INTENT_FORENSIC] {"event":"SFIA_F2_INTENT_FORENSIC","version":1,"ts":"2026-09-14T17:36:40.098Z","providerId":"openai","presentation":"openai_live","model":"gpt-5.6-luna","userContentSha256":"b852aeb18ea11a9cbd1e200f3eac6240c5d110cd5a549634a0cac0a4ead50c3b","userContentLength":25,"parseOk":true,"intentClass":"execution_request","candidateCycleTypeId":"cyc:framing","signals":{"structuralChange":false,"securityImpact":false,"architectureImpact":false,"dataImpact":false,"irreversible":false,"lowRiskBounded":true},"continuationKind":"active_cycle_artifact_materialization","requestedOperation":"docs_write","executionIntentPresent":true,"executionIntent":{"intentKind":"docs_write","requestedOperation":"Matérialiser le livrable documentaire requis du cycle actif","requiredCapabilities":["docs_write"],"targetPath":null,"reversibilityExpectation":"reversible"}}
```

### Extracted fields

| Field | Value |
|------|--------|
| parseOk | true |
| intentClass | execution_request |
| candidateCycleTypeId | cyc:framing |
| signals | structuralChange=false, securityImpact=false, architectureImpact=false, dataImpact=false, irreversible=false, lowRiskBounded=true |
| continuationKind | active_cycle_artifact_materialization |
| analysis.requestedOperation | `docs_write` |
| executionIntentPresent | true |
| executionIntent.intentKind | docs_write |
| executionIntent.requestedOperation | `Matérialiser le livrable documentaire requis du cycle actif` |
| executionIntent.requiredCapabilities | `["docs_write"]` |
| executionIntent.targetPath | null |
| executionIntent.reversibilityExpectation | reversible |

---

## F. Product outcome (read-only)

### Project / session continuity

| Item | Value |
|------|--------|
| Project | Gestion de tâches |
| project id | `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6` |
| New user seq | **16** — `Matérialise ce livrable.` |
| New assistant seq | **17** |
| Prior blocked pair (CORR-07 aftermath) | seq 14/15 same symptom text |
| Max session seq after turn | 17 |

### Exact Nora response (seq 17)

> [LIVE] Continuation Artifact signalée, mais l'intention d'effet docs_write compatible est absente. Cycle concerné: cyc:trj-0a9c5104b7b6a3debe95eb8d. Aucune proposition de matérialisation. Aucun nouveau CycleInstance créé. Recommendation ≠ HumanDecision ≠ Execution — AUCUNE EXÉCUTION.

Server reason surface: `incompatible_execution_intent` (mapped to the LIVE blocked Artifact-continuation message).

### Cycle / Proposal / HD / EC

| Item | Observation |
|------|-------------|
| Active cycle | `cyc:trj-0a9c5104b7b6a3debe95eb8d` (`cyc:framing`, status `active`) |
| CycleInstance count for project | **2** (unchanged during this turn): active + pre-existing parasite `cyc:f2-7e5684ad5ffa42db` (`acknowledged`, created earlier 2026-09-14T07:08:15.838Z) |
| New CycleInstance during CORR-08 LIVE turn | **NO** |
| Materialization Proposal | **NO** |
| New HumanDecision from this turn | **NO** (3 pre-existing HD; latest REQUIRE_ARTIFACT `dec:pilot-life:ab3cf493-64e1-42fe-9ee0-38f18e25ff32` accepted 2026-09-14T06:56:45.421Z) |
| ExecutionContract | **0** for project |
| Pilote decision / PREPARE / docs_write execution | **NOT performed** (forbidden in this unit) |

### LIVE outcome class

**Outcome A** — same BLOCKED response as prior symptom.

Verdict class: **LIVE ROOT CAUSE CAPTURED — SERVER FAIL-CLOSED CONFIRMED**

---

## G. Root-cause classification (CORR-PROOF-07 predicate applied to captured DTO)

Canonical operation expected by CR-07-06: `cursor.docs_write.apply`

### Predicate evaluation against captured validated DTO

| Class | Condition | Observed |
|------|-----------|----------|
| **R1** | `executionIntent === null` | **FALSE** — executionIntent present |
| **R2** | `executionIntent.requestedOperation` non-empty and ≠ `cursor.docs_write.apply` | **TRUE** — value = `Matérialiser le livrable documentaire requis du cycle actif` |
| **R3** | `analysis.requestedOperation` non-empty and ≠ `cursor.docs_write.apply` | **TRUE** — value = `docs_write` |
| **R4** | intentKind ≠ docs_write AND neither operation surface supplies canonical docs-write op | **FALSE** — intentKind is `docs_write` |

### First fail-closed check by code order (`hasCompatibleDocsWriteMaterializationEffect`)

OBSERVED + CODE-PROVEN:

1. `parseOk` true — pass
2. `intentClass` in {actionable, execution_request} — pass (`execution_request`)
3. `executionIntent` present — pass
4. `isBlankOrCanonicalDocsWriteOperation(ei.requestedOperation)` — **FAIL**
   - first failing predicate
   - returns false immediately
5. (not reached) analysis.requestedOperation canonical check — would also fail (R3)
6. (not reached) intentKind === docs_write short-circuit

Then `resolveActiveCycleGovernedContinuation`:

1. `hasExplicitArtifactContinuationKind` — true (`active_cycle_artifact_materialization`)
2. `hasCompatibleDocsWriteMaterializationEffect` — false → **`blocked("incompatible_execution_intent")`**
3. durable getCycle / REQUIRE_ARTIFACT / assess path — **not reached**

### Evidence grades

| Claim | Grade |
|------|--------|
| Validated LIVE DTO fields as logged | **OBSERVED** |
| R2 and R3 both true on this retest | **OBSERVED** |
| First failing check is `ei.requestedOperation` non-canonical | **CODE-PROVEN** against local main@84a36a8d + OBSERVED DTO |
| Server returned incompatible_execution_intent / blocked LIVE text | **OBSERVED** |
| No new CycleInstance / no Proposal / no HD/EC from this turn | **OBSERVED** |
| Exact root cause of the *prior* lost CORR-07 LIVE raw payload | **INFERRED only as likely same class** — not mathematically recovered |

### Additional provider-shape notes (observed, not separate R-classes)

- `requiredCapabilities`: `["docs_write"]` rather than canonical `["cap:cursor.docs_write"]`
- `targetPath`: null
- `analysis.requestedOperation`: capability-like token `docs_write` instead of operation id `cursor.docs_write.apply`
- `executionIntent.requestedOperation`: natural-language French phrase instead of operation id

These reinforce provider semantic/contract mismatch vs CR-07-06 canonical operation surfaces; the gate failed on requestedOperation before enrichment.

---

## H. Anti-claims (forbidden / not claimed)

This pack does **not** claim:

- general Nora reliability;
- global Artifact materialization correctness;
- a permanent fix;
- certainty about the exact raw payload of the previous lost CORR-07 LIVE turn;
- multi-run reproducibility;
- cognitive correction validated;
- end-to-end docs_write proven;
- ExecutionContract proof;
- runtime v3 ADOPTED;
- that R2 alone or R3 alone was the only possible prior cause without this retest.

Authorized claim framing:

> The controlled retest captured the validated DTO for **this** LIVE turn. It reproduced the same Product symptom with concrete R2+R3 violations and first-fail on `executionIntent.requestedOperation`. That strongly localizes the likely prior cause class but does not recover the lost prior raw payload.

---

## I. Exit proof (TEMPORARY WITH EXIT completed)

| Step | Result |
|------|--------|
| Forensic runtime stopped | yes (port free before restore/restart) |
| `git restore --source=HEAD -- projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts` | done |
| Restored SHA-256 | `37cd43ce52aa94fc88cb8a226bea3b7f5f1bac4242658d0d9f572f99cd0f00cb` = original |
| Helper `emitF2IntentForensicIfEnabled` present after restore | NO |
| Product Git porcelain (tracked Product code) | CLEAN |
| Remaining dirty | `.tmp-sfia-review/chatgpt-review.md` only (non-Product) |
| Clean runtime restart | `npm run dev` on 3020 **without** `SFIA_STUDIO_F2_INTENT_FORENSIC` |
| Forensic flag in clean process env | ABSENT |
| Clean `/login` | HTTP 200 |
| Product DB path continuity | same workspace DB via symlink |
| Session DB continuity | same dogfood-local nora-session.sqlite (mtime reflects LIVE turn) |
| No DB reset / seed / migrate / vacuum | confirmed |
| No second Nora turn after restore | confirmed |

---

## J. Recommendations — OPTIONS ONLY (no decision consumed)

No cognitive correction applied in CORR-PROOF-08.
Recommendation ≠ Morris decision. Do not auto-start the next correction.

Given OBSERVED provider output on this retest (continuationKind correct; intentKind docs_write; but non-canonical / NL requestedOperation on both surfaces), future OPTIONS for a later Morris GO + R22 OpenAI Capability Fit Check before any implementation:

1. **Prompt clarification** — strengthen structured-output contract so `requestedOperation` must be the exact operation id `cursor.docs_write.apply` (and capabilities the canonical cap id), not NL / capability aliases.
2. **Schema / structured-output contract adjustment** — constrain enum/const for docs_write materialization operation fields in the OpenAI-native schema (still no second classifier).
3. **Server derivation from trusted lifecycle context** — if/when authorized: after explicit continuationKind + docs_write intentKind, derive canonical operation/capabilities server-side only under a new explicit GO (this would be a semantic change relative to current CR-07-06 fail-closed posture — not done here).
4. **Model / reasoning adjustment** — evaluate whether a different model/effort improves adherence to the operation-id contract (R22 first).
5. **Other minimal OpenAI-native adaptation** — only if R22 shows fit; no new planner/classifier.

**Do not choose among these in this pack.** Await ChatGPT / Morris decision.

---

## Safety ledger

- ONE LIVE call only
- No cognitive correction
- No Product commit / push / PR / merge
- No DB reset / migration
- Temporary instrumentation fully exited
- Runtime v3 NON ADOPTED
- No Pilote decision / PREPARE / docs_write execution

---

## Unique verdict

**CORR-PROOF-08 LIVE OBSERVABILITY PROOF COMPLETE — ROOT CAUSE CAPTURED — NO COGNITIVE CORRECTION APPLIED — AWAITING CHATGPT/MORRIS DECISION**

Primary captured cause on this retest: **R2 + R3**, first fail-closed check = non-canonical `executionIntent.requestedOperation`.
Server fail-closed behavior under CORR-PROOF-07 confirmed. No new CycleInstance. No Proposal. No HD/EC mutation from the turn.
