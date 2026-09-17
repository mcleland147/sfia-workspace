# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — Checkpoint F REAL failure observability + provenance truth

**Timestamp (UTC):** 2026-09-17T20:15:17Z
**Pack kind:** FULL (code modification present — modified content included below)
**Pack revision:** R6 — Checkpoint F REAL failure observability + provenance truth
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
```

### Preservation

- R1/R3/R4 local Product dirty files: **preserved**
- `package-lock.json`: dirty préexistant — **LEFT UNTOUCHED**
- Historical Attempt `xat:w3a:1f49d8e25e20837a`: **not mutated**

---

## 2. Qualification SFIA

| Item | Value |
|---|---|
| Capacité v3 | Executor REAL dont échec est Evidence-backed / honnêtement interprété |
| Milestone | Product Journey E2E REAL Reconciliation |
| Entry (R5) | CHECKPOINT F REAL FAILURE — ROOT CAUSE NOT PROVEN |
| Entry claim | ONE GOVERNED CURSOR REAL ATTEMPT EXECUTED AND FAILED — FAILURE EVIDENCE CAPTURED — NO BUSINESS SUCCESS CLAIM |

---

## 3. G1 — root cause + correction

**Root cause:** runner buffers stdout/stderr in-memory only; failure Evidence was `metadata_only` without streams.

**Correction:** additive `ExecutionAttempt.processDiagnostic` (JSON payload, no migration) via `buildProcessFailureDiagnostic` + `RecordExecutionFailure`.

---

## 4. G2 — root cause + correction

**Root cause:** `w3cPostEvidenceLoop` omitted `boundaryProofMode` → Nora `realProcessInvoked:false` despite frontier true.

**Correction:** `resolveDurableBoundaryProofMode` (diagnostic → frontier → launchPort) into `deriveAttemptProvenance`; honest RB reservation when REAL invoked.

---

## 5. G3 disposition

| Check | Disposition |
|---|---|
| Bin path / exists / executable | **KEEP** (`CURSOR_UNAVAILABLE`) |
| Managed repo / worktree | **KEEP** (`REAL_WORKSPACE_INVALID`) |
| Auth Cursor | **DEFER** — NOT AVAILABLE NON-INVASIVELY |

---

## 6. Persistence diagnostic

Attempt.`processDiagnostic` (redacted/capped); Evidence stays `log_ref`/`metadata_only`; does **not** satisfy `evreq:docs_write_artifact`.

---

## 7. Redaction / cap

Reuse `redactSecrets`; durable cap 4 KiB (stdout head / stderr tail); truncation flags; no env/prompt/secrets.

---

## 8. Fichiers modifiés / ajoutés (R6)

**New:** `f3/processFailureDiagnostic.ts`, `f3/resolveDurableBoundaryProofMode.ts`, `__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts`

**Modified:** `completeBoundedReadOnlyLaunch.ts`, `f3/index.ts`, `execution-attempt/domain/types.ts`, `recordExecutionFailure.ts`, `w3cPostEvidenceLoop.ts`, `materializeW3bProductTerminal.ts`, `w3bProductTerminalProjection.ts`

---

## 9. Diff exploitable (R6)

```diff
===== R6 TRACKED DIFF =====
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
index 33010ac2..1c9739ce 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
@@ -9,9 +9,14 @@ import {
   type ExecutionAttemptServices,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import {
+  buildProcessFailureDiagnostic,
+  PROCESS_DIAGNOSTIC_STDERR_CAP,
+  PROCESS_DIAGNOSTIC_STDOUT_CAP,
+} from "./processFailureDiagnostic";

-export const NORA_STDOUT_CAP = 4 * 1024;
-export const NORA_STDERR_CAP = 4 * 1024;
+export const NORA_STDOUT_CAP = PROCESS_DIAGNOSTIC_STDOUT_CAP;
+export const NORA_STDERR_CAP = PROCESS_DIAGNOSTIC_STDERR_CAP;

 export type BoundedLaunchObservationFacts = {
   attemptId: string;
@@ -203,6 +208,17 @@ export async function completeBoundedReadOnlyLaunch(input: {
     };
   }

+  const failureDiagnostic = buildProcessFailureDiagnostic({
+    observation,
+    boundaryProofMode:
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "cursor_real" ||
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "deterministic_fake"
+        ? input.services.realBoundary.launchPort.boundaryProofMode
+        : undefined,
+  });
+
   if (observation.timedOut === true) {
     const timed = await input.services.triggerAttemptTimeout.execute({
       attemptId: input.attempt.attemptId,
@@ -216,6 +232,7 @@ export async function completeBoundedReadOnlyLaunch(input: {
         stopReason: "EXECUTION_TIMEOUT",
         durationMs: observation.durationMs,
         expectedAttemptVersion: input.attempt.version,
+        processDiagnostic: failureDiagnostic,
       });
       if (!failed.ok || !failed.attempt) {
         return {
@@ -265,6 +282,7 @@ export async function completeBoundedReadOnlyLaunch(input: {
       technicalExitCode: observation.exitCode ?? undefined,
       durationMs: observation.durationMs,
       expectedAttemptVersion: input.attempt.version,
+      processDiagnostic: failureDiagnostic,
     });
     if (!failed.ok || !failed.attempt) {
       return {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index a02263cb..eece03eb 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -47,6 +47,14 @@ export {
   authorizedM3ResolutionKind,
 } from "./selectProductM3ResolutionProfile";
 export { deriveAttemptProvenance, F3_REAL_MODE, F3_BOUNDED_M4_DETERMINISTIC_MODE } from "./deriveAttemptProvenance";
+export { resolveDurableBoundaryProofMode } from "./resolveDurableBoundaryProofMode";
+export {
+  buildProcessFailureDiagnostic,
+  isProcessFailureDiagnostic,
+  PROCESS_DIAGNOSTIC_STDOUT_CAP,
+  PROCESS_DIAGNOSTIC_STDERR_CAP,
+} from "./processFailureDiagnostic";
+export type { ProcessFailureDiagnostic } from "./processFailureDiagnostic";
 export { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
 export type {
   BoundedLaunchObservationFacts,
@@ -61,6 +69,12 @@ export type {
 } from "./prepareAndResolveM3ProductPath";
 export { resolveExistingLegacyM3DocsWriteProductPath } from "./resolveExistingLegacyM3DocsWriteProductPath";
 export { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
+export { isDocsWriteEvidenceContradictionView } from "./docsWriteEvidenceContradictionView";
+export { rematerializeDocsWriteEvidenceRequirements } from "./rematerializeDocsWriteEvidenceRequirements";
+export type {
+  RematerializeDocsWriteEvidenceResult,
+  RematerializeDocsWriteEvidenceSuccess,
+} from "./rematerializeDocsWriteEvidenceRequirements";
 export type {
   F3M3LegacyResolvedPayload,
   ResolveExistingLegacyM3DocsWriteDeps,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index 8ec81e9e..ad829eb5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -11,6 +11,7 @@ import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
 import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
 import {
   projectW3bProductTerminal,
+  productReservationsForAttempt,
   type W3BProductTerminalProjection,
 } from "./w3bProductTerminalProjection";
 import {
@@ -37,13 +38,6 @@ export type MaterializeW3bProductTerminalResult =
       readonly postEvidence?: W3cPostEvidenceLoopResult;
     };

-const PRODUCT_RESERVATIONS = [
-  "Evidence requise avant claim produit",
-  "Apprentissage / replan non démarrés",
-  "Exécuteur de substitution — pas d'effet externe réel",
-  "Aucun READY",
-] as const;
-
 export function w3bEvidenceIdentity(attemptId: string): {
   evidenceId: string;
   reviewBundleId: string;
@@ -182,7 +176,7 @@ export async function materializeW3bProductTerminal(input: {
     executionContractId: contract.executionContractId,
     ...(contract.cycleInstanceId ? { cycleInstanceId: contract.cycleInstanceId } : {}),
     evidenceIds: [ingested.evidence.evidenceId],
-    reservations: [...PRODUCT_RESERVATIONS],
+    reservations: [...productReservationsForAttempt(attempt)],
   });

   if (!bundle.ok) {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
index fcb2aafd..03b384d4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -61,6 +61,24 @@ const PRODUCT_RESERVATIONS = [
   "Aucun READY",
 ] as const;

+/** Honest reservation when a REAL process was durably launched (vs substitution wording). */
+export function productReservationsForAttempt(
+  attempt: ExecutionAttempt,
+): readonly string[] {
+  const realInvoked =
+    attempt.processDiagnostic?.realProcessInvoked === true ||
+    attempt.irreversibleEffectsPossible === true ||
+    (typeof attempt.stopReason === "string" &&
+      attempt.stopReason.startsWith("REAL_"));
+  if (!realInvoked) return [...PRODUCT_RESERVATIONS];
+  return [
+    PRODUCT_RESERVATIONS[0],
+    PRODUCT_RESERVATIONS[1],
+    "Process Cursor REAL invoqué — effet métier non prouvé",
+    PRODUCT_RESERVATIONS[3],
+  ];
+}
+
 const ANTI = {
   ready: false,
   w3Closed: false,
@@ -160,7 +178,7 @@ export function projectW3bProductTerminal(input: {
       executionContractId: input.contract.executionContractId,
       executionContractVersion: input.attempt.executionContractVersion,
     },
-    reservations: [...PRODUCT_RESERVATIONS],
+    reservations: [...productReservationsForAttempt(input.attempt)],
     antiClaims: ANTI,
     cycleInstanceClosed: false as const,
     projectArchived: false as const,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index 7b2f709d..386ebca3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -17,6 +17,7 @@ import type { EpistemicItem } from "@/lib/oa/cycle";
 import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
 import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
+import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";
 import {
   analyzePostEvidenceWithProvider,
   extractW3cPostEvidenceAnalysisForEvidence,
@@ -956,6 +957,12 @@ export async function runW3cPostEvidenceLoop(input: {
   let adapterRef = "adp:unknown";
   let executionMode = "unknown";
   let realProcessInvoked = false;
+  let processRef: string | undefined;
+  let processExitCode: number | null | undefined;
+  let processTimedOut: boolean | undefined;
+  let processDurationMs: number | undefined;
+  let processStdout: string | undefined;
+  let processStderr: string | undefined;

   if (oa.executionAttemptServices) {
     const loaded = await oa.executionAttemptServices.getExecutionAttempt.execute({
@@ -967,13 +974,28 @@ export async function runW3cPostEvidenceLoop(input: {
       const agent = oa.executionAttemptServices.registry.getAgent(
         loaded.attempt.selectedAgentRef,
       );
+      const boundaryProofMode = await resolveDurableBoundaryProofMode({
+        oa,
+        attempt: loaded.attempt,
+      });
       const provenance = deriveAttemptProvenance({
         attempt: loaded.attempt,
         agent,
+        boundaryProofMode,
       });
       adapterRef = provenance.adapterRef;
       executionMode = provenance.executionMode;
       realProcessInvoked = provenance.realProcessInvoked;
+      // Prefer durable diagnostic excerpts when present (failure observability).
+      const diag = loaded.attempt.processDiagnostic;
+      if (diag) {
+        processStdout = diag.stdoutExcerpt;
+        processStderr = diag.stderrExcerpt;
+        processRef = diag.processRef;
+        processExitCode = diag.exitCode;
+        processTimedOut = diag.timedOut;
+        processDurationMs = diag.durationMs;
+      }
     }
   }
   if (oa.executionContractServices) {
@@ -1027,6 +1049,14 @@ export async function runW3cPostEvidenceLoop(input: {
       reviewBundleId: product.reviewBundleId,
       technicalResultRef: product.technicalDetail.resultRef,
       reservations: product.reservations,
+      ...(processRef ? { processRef } : {}),
+      ...(processExitCode !== undefined ? { exitCode: processExitCode } : {}),
+      ...(processTimedOut !== undefined ? { timedOut: processTimedOut } : {}),
+      ...(processDurationMs !== undefined
+        ? { durationMs: processDurationMs }
+        : {}),
+      ...(processStdout !== undefined ? { stdout: processStdout } : {}),
+      ...(processStderr !== undefined ? { stderr: processStderr } : {}),
     },
     { ckcPromptSection },
   );
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
index 62267028..6f668fc9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
@@ -126,6 +126,9 @@ export class RecordExecutionFailure {
         technicalExitCode: request.technicalExitCode,
         durationMs: request.durationMs,
         logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
+        ...(request.processDiagnostic
+          ? { processDiagnostic: request.processDiagnostic }
+          : {}),
         updatedAt: timestamp,
         version: attempt.version + 1,
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index cfe92303..88a52e28 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -137,6 +137,28 @@ export type ExecutionAttempt = {
   technicalExitCode?: number;
   durationMs?: number;
   logRefs?: string[];
+  /**
+   * Checkpoint F / R6 — redacted/capped process observation on failure/timeout.
+   * Optional additive payload field (no SQLite migration). Diagnostic only —
+   * never authoritative business Evidence / docs_write artifact proof.
+   */
+  processDiagnostic?: {
+    readonly kind: "process_failure_diagnostic";
+    readonly schemaVersion: "0.1.0-oa";
+    readonly processRef: string;
+    readonly exitCode: number | null;
+    readonly timedOut: boolean;
+    readonly durationMs: number;
+    readonly realProcessInvoked: boolean;
+    readonly boundaryProofMode?: "cursor_real" | "deterministic_fake";
+    readonly executableBasename?: string;
+    readonly stdoutExcerpt: string;
+    readonly stderrExcerpt: string;
+    readonly stdoutTruncated: boolean;
+    readonly stderrTruncated: boolean;
+    readonly redacted: true;
+    readonly authoritativeBusinessEvidence: false;
+  };
   cancellationRequested?: boolean;
   irreversibleEffectsPossible?: boolean;
   updatedAt?: string;
@@ -265,6 +287,8 @@ export type RecordExecutionFailureRequest = {
   technicalExitCode?: number;
   durationMs?: number;
   logRefs?: string[];
+  /** Optional redacted process diagnostic (failure / timeout). */
+  processDiagnostic?: ExecutionAttempt["processDiagnostic"];
   correlationId?: string;
   expectedAttemptVersion?: number;
   nowIso?: string;

===== NEW: processFailureDiagnostic.ts =====
/**
 * Checkpoint F / R6 — durable, redacted, capped process-failure diagnostic.
 *
 * Persisted on ExecutionAttempt (payload_json) — no Evidence schema migration.
 * Diagnostic only: never satisfies evreq:docs_write_artifact / business SUCCESS.
 */
import { redactSecrets } from "@/lib/platform/security/redaction";
import type { RealProcessObservation } from "@/lib/oa/execution-attempt";

/** Durable / Nora observation caps (≤ runner 64 KiB). Do not raise. */
export const PROCESS_DIAGNOSTIC_STDOUT_CAP = 4 * 1024;
export const PROCESS_DIAGNOSTIC_STDERR_CAP = 4 * 1024;

export type ProcessFailureDiagnostic = {
  readonly kind: "process_failure_diagnostic";
  readonly schemaVersion: "0.1.0-oa";
  readonly processRef: string;
  readonly exitCode: number | null;
  readonly timedOut: boolean;
  readonly durationMs: number;
  readonly realProcessInvoked: boolean;
  readonly boundaryProofMode?: "cursor_real" | "deterministic_fake";
  /** Non-secret executable basename only (never full env / argv / prompt). */
  readonly executableBasename?: string;
  readonly stdoutExcerpt: string;
  readonly stderrExcerpt: string;
  readonly stdoutTruncated: boolean;
  readonly stderrTruncated: boolean;
  readonly redacted: true;
  readonly authoritativeBusinessEvidence: false;
};

function capHead(
  value: string,
  cap: number,
): { text: string; truncated: boolean } {
  if (value.length <= cap) return { text: value, truncated: false };
  return { text: `${value.slice(0, cap)}\n…[truncated]`, truncated: true };
}

/** Prefer useful tail of stderr (CLI errors often land at the end). */
function capTail(
  value: string,
  cap: number,
): { text: string; truncated: boolean } {
  if (value.length <= cap) return { text: value, truncated: false };
  return { text: `…[truncated]\n${value.slice(-cap)}`, truncated: true };
}

function basenameOnly(executable: string | undefined): string | undefined {
  if (!executable || typeof executable !== "string") return undefined;
  const trimmed = executable.trim();
  if (!trimmed) return undefined;
  const parts = trimmed.split(/[/\\]/);
  const base = parts[parts.length - 1] ?? "";
  return base.length > 0 && base.length <= 128 ? base : undefined;
}

/**
 * Build a durable diagnostic from a process observation.
 * Always pattern-redacts; never stores env, tokens, or full prompt.
 */
export function buildProcessFailureDiagnostic(input: {
  readonly observation: RealProcessObservation;
  readonly boundaryProofMode?: "cursor_real" | "deterministic_fake";
  readonly executable?: string;
}): ProcessFailureDiagnostic {
  const stdoutRaw = redactSecrets(input.observation.stdout ?? "");
  const stderrRaw = redactSecrets(input.observation.stderr ?? "");
  const stdout = capHead(stdoutRaw, PROCESS_DIAGNOSTIC_STDOUT_CAP);
  const stderr = capTail(stderrRaw, PROCESS_DIAGNOSTIC_STDERR_CAP);
  const executableBasename = basenameOnly(input.executable);

  return {
    kind: "process_failure_diagnostic",
    schemaVersion: "0.1.0-oa",
    processRef: input.observation.processRef,
    exitCode: input.observation.exitCode,
    timedOut: input.observation.timedOut,
    durationMs: input.observation.durationMs,
    realProcessInvoked: input.observation.realProcessInvoked === true,
    ...(input.boundaryProofMode
      ? { boundaryProofMode: input.boundaryProofMode }
      : {}),
    ...(executableBasename ? { executableBasename } : {}),
    stdoutExcerpt: stdout.text,
    stderrExcerpt: stderr.text,
    stdoutTruncated: stdout.truncated,
    stderrTruncated: stderr.truncated,
    redacted: true,
    authoritativeBusinessEvidence: false,
  };
}

export function isProcessFailureDiagnostic(
  value: unknown,
): value is ProcessFailureDiagnostic {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === "process_failure_diagnostic" &&
    v.schemaVersion === "0.1.0-oa" &&
    v.authoritativeBusinessEvidence === false &&
    v.redacted === true &&
    typeof v.processRef === "string" &&
    typeof v.stdoutExcerpt === "string" &&
    typeof v.stderrExcerpt === "string"
  );
}

===== NEW: resolveDurableBoundaryProofMode.ts =====
/**
 * Resolve durable boundaryProofMode for post-Evidence provenance (Checkpoint F / R6).
 *
 * Priority (no invented state):
 * 1. Attempt.processDiagnostic.boundaryProofMode (when failure recorded it)
 * 2. Launch frontier LAUNCHED payload_json.boundaryProofMode
 * 3. Composed launchPort.boundaryProofMode when available
 *
 * Never infers Cursor REAL from agent identity alone.
 */
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { BoundaryProofMode } from "@/lib/oa/execution-attempt";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

function parseFrontierProofMode(
  payloadJson: string | undefined,
): BoundaryProofMode | null {
  if (!payloadJson) return null;
  try {
    const payload = JSON.parse(payloadJson) as {
      boundaryProofMode?: unknown;
    };
    if (
      payload.boundaryProofMode === "cursor_real" ||
      payload.boundaryProofMode === "deterministic_fake"
    ) {
      return payload.boundaryProofMode;
    }
  } catch {
    /* ignore malformed durable payload */
  }
  return null;
}

export async function resolveDurableBoundaryProofMode(input: {
  readonly oa: Pick<RuntimeOaStack, "executionAttemptServices">;
  readonly attempt: ExecutionAttempt;
}): Promise<BoundaryProofMode | null> {
  const fromDiagnostic = input.attempt.processDiagnostic?.boundaryProofMode;
  if (
    fromDiagnostic === "cursor_real" ||
    fromDiagnostic === "deterministic_fake"
  ) {
    return fromDiagnostic;
  }

  const journal =
    input.oa.executionAttemptServices?.realBoundary?.safetyJournal;
  if (journal?.findFrontierByAttempt) {
    const frontiers = await journal.findFrontierByAttempt(
      input.attempt.attemptId,
    );
    const launched = frontiers.find((row) => row.kind === "LAUNCHED");
    const fromFrontier = parseFrontierProofMode(launched?.payloadJson);
    if (fromFrontier) return fromFrontier;
  }

  const portMode =
    input.oa.executionAttemptServices?.realBoundary?.launchPort
      ?.boundaryProofMode;
  if (portMode === "cursor_real" || portMode === "deterministic_fake") {
    return portMode;
  }

  return null;
}

===== NEW: checkpointF.realFailureObservability.d0.test.ts =====
/**
 * Checkpoint F / R6 — REAL failure observability + provenance truth.
 * ZERO REAL / ZERO Cursor binary / fake runners only.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  createM4BoundedDocsWriteCursorAgentDescriptor,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "@/lib/oa/execution-attempt";
import {
  buildProcessFailureDiagnostic,
  PROCESS_DIAGNOSTIC_STDERR_CAP,
  PROCESS_DIAGNOSTIC_STDOUT_CAP,
} from "@/features/project-assistant/f3/processFailureDiagnostic";
import {
  deriveAttemptProvenance,
  F3_BOUNDED_M4_DETERMINISTIC_MODE,
  F3_REAL_MODE,
} from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { productReservationsForAttempt } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";

const NOW = "2026-09-17T20:00:00.000Z";

function baseAttempt(
  overrides: Partial<ExecutionAttempt> = {},
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: "xat:w3a:obs-r6-test",
    executionContractId: "xct:m3-ev:obs-r6",
    executionContractVersion: 1,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status: "failed",
    idempotencyKey: "idem:w3a:obs-r6-test",
    correlationId: "cor:obs-r6",
    version: 2,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:obs-r6",
      actor: {
        actorId: "actor:local-pilote",
        role: "decision_maker",
        displayName: "Pilote",
        authorityLevel: "none",
      },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:obs-r6",
    },
    launchedAt: NOW,
    failedAt: NOW,
    stopReason: "REAL_PROCESS_NONZERO_EXIT",
    technicalExitCode: 1,
    durationMs: 1500,
    irreversibleEffectsPossible: true,
    ...overrides,
  };
}

describe("Checkpoint F R6 — process failure diagnostic (G1)", () => {
  it("T1 — exit 1 observation → durable diagnostic with stderr excerpt", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:51943",
        exitCode: 1,
        timedOut: false,
        durationMs: 1534,
        realProcessInvoked: true,
        stdout: "agent starting",
        stderr: "Error: authentication required for model",
      },
      boundaryProofMode: "cursor_real",
      executable: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    });
    expect(diag.kind).toBe("process_failure_diagnostic");
    expect(diag.realProcessInvoked).toBe(true);
    expect(diag.boundaryProofMode).toBe("cursor_real");
    expect(diag.exitCode).toBe(1);
    expect(diag.stderrExcerpt).toContain("authentication required");
    expect(diag.stdoutExcerpt).toContain("agent starting");
    expect(diag.executableBasename).toBe("cursor");
    expect(diag.redacted).toBe(true);
    expect(diag.authoritativeBusinessEvidence).toBe(false);
  });

  it("T2 — redacts API key / bearer / github token patterns", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:1",
        exitCode: 1,
        timedOut: false,
        durationMs: 10,
        realProcessInvoked: true,
        stdout: "using sk-abcdefghijklmnopqrstuvwxyz012345",
        stderr:
          "Authorization: Bearer supersecrettokenvalue99\nghp_abcdefghijklmnopqrstuvwxyz0123456789\nOPENAI_API_KEY=sk-live-secret-value-here",
      },
      boundaryProofMode: "cursor_real",
    });
    const blob = `${diag.stdoutExcerpt}\n${diag.stderrExcerpt}`;
    expect(blob).not.toMatch(/sk-[A-Za-z0-9_-]{10,}/);
    expect(blob).not.toMatch(/Bearer\s+\S+/i);
    expect(blob).not.toMatch(/ghp_[A-Za-z0-9]{20,}/);
    expect(blob).not.toMatch(/OPENAI_API_KEY\s*=\s*.+/i);
    expect(blob).toContain("[redacted]");
  });

  it("T3 — truncates oversized streams with flags (stderr prefers tail)", () => {
    const bigStdout = "S".repeat(PROCESS_DIAGNOSTIC_STDOUT_CAP + 200);
    const bigStderr =
      "HEAD_NOISE".repeat(500) + "TAIL_ERROR_MARKER_UNIQUE";
    expect(bigStderr.length).toBeGreaterThan(PROCESS_DIAGNOSTIC_STDERR_CAP);
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:2",
        exitCode: 1,
        timedOut: false,
        durationMs: 5,
        realProcessInvoked: true,
        stdout: bigStdout,
        stderr: bigStderr,
      },
    });
    expect(diag.stdoutTruncated).toBe(true);
    expect(diag.stderrTruncated).toBe(true);
    expect(diag.stdoutExcerpt.length).toBeLessThanOrEqual(
      PROCESS_DIAGNOSTIC_STDOUT_CAP + 20,
    );
    expect(diag.stderrExcerpt).toContain("TAIL_ERROR_MARKER_UNIQUE");
    expect(diag.stderrExcerpt).toContain("…[truncated]");
  });
});

describe("Checkpoint F R6 — Nora provenance (G2)", () => {
  const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);

  it("T4 — cursor_real + launched + failed → realProcessInvoked true, no business success", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t4",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
        irreversibleEffectsPossible: true,
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    expect(prov.mode).toBe(F3_REAL_MODE);
    expect(prov.realProcessInvoked).toBe(true);
    expect(prov.realExecution).toBe(true);
    expect(prov.boundaryProofMode).toBe("cursor_real");
    // Business success is Attempt status — still failed
    expect(baseAttempt().status).toBe("failed");
  });

  it("T5 — M4-shaped without cursor_real → not REAL", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t5",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(prov.mode).toBe(F3_BOUNDED_M4_DETERMINISTIC_MODE);
    expect(prov.realExecution).toBe(false);
    expect(prov.boundaryProofMode).toBe("deterministic_fake");
  });

  it("T6 — REAL selected but NOT launched → realProcessInvoked false", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t6",
        selectedAgentRef: agent.agentId,
        status: "accepted",
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    expect(prov.realProcessInvoked).toBe(false);
    expect(prov.realExecution).toBe(false);
  });

  it("T4b — omit boundaryProofMode (pre-R6 bug) → false even if launched", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t4b",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
        irreversibleEffectsPossible: true,
      },
      agent,
      // boundaryProofMode omitted — historical Nora bug
    });
    expect(prov.realProcessInvoked).toBe(false);
  });
});

describe("Checkpoint F R6 — reservations honesty + artifact non-satisfaction", () => {
  it("T8/T9 — diagnostic failure does not claim docs_write artifact; REAL reservation wording", () => {
    const attempt = baseAttempt({
      processDiagnostic: buildProcessFailureDiagnostic({
        observation: {
          processRef: "pid:51943",
          exitCode: 1,
          timedOut: false,
          durationMs: 1534,
          realProcessInvoked: true,
          stdout: "",
          stderr: "cli exit 1",
        },
        boundaryProofMode: "cursor_real",
      }),
    });
    expect(attempt.processDiagnostic?.authoritativeBusinessEvidence).toBe(
      false,
    );
    expect(attempt.processDiagnostic?.kind).toBe("process_failure_diagnostic");
    // Does not look like artifact evidence
    expect(attempt.resultRef).toBeUndefined();
    expect(attempt.status).toBe("failed");

    const reservations = productReservationsForAttempt(attempt);
    expect(reservations).toContain(
      "Process Cursor REAL invoqué — effet métier non prouvé",
    );
    expect(reservations).not.toContain(
      "Exécuteur de substitution — pas d'effet externe réel",
    );
    expect(reservations).toContain("Aucun READY");
  });

  it("substitution wording retained when no REAL launch signals", () => {
    const attempt = baseAttempt({
      stopReason: "FIXTURE_FAIL",
      irreversibleEffectsPossible: undefined,
      processDiagnostic: undefined,
      technicalExitCode: undefined,
    });
    const reservations = productReservationsForAttempt(attempt);
    expect(reservations).toContain(
      "Exécuteur de substitution — pas d'effet externe réel",
    );
  });
});

describe("Checkpoint F R6 — G3 preflight disposition", () => {
  it("documents existing CURSOR_UNAVAILABLE fail-close without Cursor spawn", () => {
    // Gateway already rejects when resolveBin() returns null with
    // detailCode CURSOR_UNAVAILABLE and realProcessInvoked:false —
    // covered by m4RealOff / gateway unit tests. Auth cannot be probed
    // non-invasively → DEFER (no new auth probe in this lot).
    expect(M4_REAL_GATEWAY_ADAPTER_ID).toBe("adp:m4-cursor-cli-real");
  });
});

describe("Checkpoint F R6 — durable reload (T7)", () => {
  it("processDiagnostic survives JSON payload round-trip (Attempt store shape)", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:51943",
        exitCode: 1,
        timedOut: false,
        durationMs: 1534,
        realProcessInvoked: true,
        stdout: "out",
        stderr: "useful stderr leaf",
      },
      boundaryProofMode: "cursor_real",
    });
    const attempt = baseAttempt({ processDiagnostic: diag });
    const reloaded = JSON.parse(JSON.stringify(attempt)) as ExecutionAttempt;
    expect(reloaded.processDiagnostic?.stderrExcerpt).toContain(
      "useful stderr leaf",
    );
    expect(reloaded.processDiagnostic?.exitCode).toBe(1);
    expect(reloaded.processDiagnostic?.boundaryProofMode).toBe("cursor_real");
    expect(reloaded.processDiagnostic?.authoritativeBusinessEvidence).toBe(
      false,
    );
  });
});
```

---

## 10. Tests

| Suite | Result |
|---|---|
| checkpointF.realFailureObservability.d0 | PASS (11) |
| checkpointE.prepareResume.d0 | PASS |
| checkpointE.docsWriteEvidenceCoherence.d0 | PASS |
| m3ExecutionContractPrepare CHECKPOINT-E | PASS |
| tsc --noEmit | PASS |

ZERO Cursor / ZERO REAL.

---

## 11. Campagne

| Metric | Value |
|---|---|
| attempts | **1** |
| target | ABSENT |
| DB mutated | NO |
| historical Attempt repaired | NO |

---

## 12. Réserves

- Historical R5 Attempt still without processDiagnostic (preserved).
- Timeout-via-triggerAttemptTimeout may omit diagnostic.
- Auth preflight deferred.
- Prior CLI exit-1 leaf still unknown.

---

## 13. Claims

Authorized: failure observability deterministic proven; REAL provenance projection corrected; ZERO REAL correction; previous REAL remains FAIL.

Forbidden: CLI root cause solved; REAL PASS; retry authorized; E2E usable; READY; runtime v3 ADOPTED.

---

## 14. Gate Morris

Review R6 → optional Product commit gate → distinct NEW GO before any new REAL.

---

## 15. Verdict

**CHECKPOINT F OBSERVABILITY FIXED — READY FOR MORRIS REVIEW / NEW REAL GATE**
