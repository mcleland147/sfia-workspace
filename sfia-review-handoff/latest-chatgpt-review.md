# SFIA Studio Increment E — Review Pack (CycleSummary consistency correction)

- **Date/heure/fuseau :** 2026-07-20 10:57:10 CEST
- **Cycle :** 9 — QA / validation corrective
- **Profil SFIA :** Standard
- **Gate consommé :** G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION
- **Gates toujours fermés :** STAGE, COMMIT, PUSH, PR, MERGE, BRANCH-DELETE, MVP-CLAIM, PRODUCTION-CLAIM

## 1. Truth Check

- Branche : `delivery/sfia-studio-poc-increment-e`
- HEAD : `a766eb3e5f21b1df288bd07e727be2c20fd1a1d7`
- Staged vide · delivery non poussée · 2 appels GPT live (aucun 3e)

```
 M projects/sfia-studio/app/e2e/increment-a.spec.ts
 M projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
 M projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx
 M projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx
 M projects/sfia-studio/harness/src/cli.ts
 M projects/sfia-studio/harness/src/index.ts
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/increment-e.test.tsx
?? projects/sfia-studio/app/e2e/increment-e.spec.ts
?? projects/sfia-studio/app/lib/harness/analysisAction.ts
?? projects/sfia-studio/app/lib/harness/defaultIncEPackBuild.ts
?? projects/sfia-studio/app/lib/harness/incrementEClosureArtifact.ts
?? projects/sfia-studio/harness/src/finops/analysisLimits.ts
?? projects/sfia-studio/harness/src/increment-e/
?? projects/sfia-studio/harness/src/ports/gptAnalysisLive.ts
?? projects/sfia-studio/harness/src/types/evidenceAnalysisPack.ts
?? projects/sfia-studio/harness/src/types/gptVerdictCandidate.ts
?? projects/sfia-studio/harness/src/types/morrisFinalDecision.ts
?? projects/sfia-studio/harness/src/validation/verdictCandidateValidator.ts
?? projects/sfia-studio/harness/tests/increment-e.test.ts

```

## 2. Incohérence initiale

Le CycleSummary recopait en état courant des éléments pré-décision du GptVerdictCandidate :
- notProven : "Increment E completion", "Morris final decision"
- gaps : "No Morris decision recorded in the pack"
- risks : closureAuthorized=false / Candidate proof only — decision still required
- reservations : "Candidate proof only — Morris decision required"

alors que MorrisFinalDecision CLOSE_SLICE était déjà enregistrée.

## 3. Principe de correction

- **candidateSnapshot** : photographie historique inchangée (PARTIALLY_PROVED, candidateOnly, closureAuthorized=false)
- **finalState** : CLOSED_WITH_RESERVATIONS, morrisDecisionRecorded=true, closureAuthorized=true
- **resolvedByMorrisDecision** : éléments levés par CLOSE_SLICE
- **unresolvedReservations** : limites encore ouvertes

## 4. Fichiers modifiés (contenu)

### `harness/src/types/morrisFinalDecision.ts`

```typescript
/**
 * Increment E — MorrisFinalDecision + CycleSummary (distinct from GPT candidate).
 */

export type MorrisFinalAction =
  | "CLOSE_SLICE"
  | "CORRECT"
  | "RELAUNCH_WITH_NEW_GO"
  | "ABANDON";

export interface MorrisFinalDecision {
  schemaVersion: "morris-final-decision-1.0.0";
  decisionId: string;
  verdictId: string;
  requestId: string;
  correlationId: string;
  decidedBy: "Morris";
  decidedAt: string;
  action: MorrisFinalAction;
  rationale?: string;
  acceptedReservations: string[];
  unresolvedReservations: string[];
  consequences: string[];
  requiresNewGo: boolean;
  closureAuthorized: boolean;
  candidateClaimsAccepted: false;
  mvpClaim: false;
  productionReadyClaim: false;
}

/** Historical photograph of the GPT candidate at analysis time (immutable reference). */
export interface CycleSummaryCandidateSnapshot {
  status: string;
  candidateOnly: true;
  closureAuthorized: false;
  morrisDecisionRequired: true;
  notProven: string[];
  gaps: string[];
  risks: string[];
  reservations: string[];
}

export interface CycleSummaryFinalState {
  finalStatus: "CLOSED_WITH_RESERVATIONS";
  morrisDecisionRecorded: true;
  closureAuthorized: true;
  action: "CLOSE_SLICE";
  awaitingMorrisDecision: false;
}

export interface CycleSummary {
  schemaVersion: "cycle-summary-1.0.0";
  summaryId: string;
  /** Present when this summary was regenerated technically from a prior summaryId. */
  previousSummaryId?: string;
  requestId: string;
  correlationId: string;
  verdictId: string;
  decisionId: string;
  finalStatus: "CLOSED_WITH_RESERVATIONS" | string;
  morrisDecisionRecorded: boolean;
  closureAuthorized: boolean;
  markdownArtifact: string;
  executionEvidence: string;
  /** Current post-decision proven facts. */
  proven: string[];
  /** Current open not-proven items (excludes items resolved by CLOSE_SLICE). */
  notProven: string[];
  /** Current open gaps (excludes pre-decision Morris-awaiting gaps). */
  gaps: string[];
  /** Current open risks (excludes pre-decision closure-awaiting risks). */
  risks: string[];
  /** Current open reservations (= unresolvedReservations). */
  reservations: string[];
  unresolvedReservations: string[];
  acceptedReservations: string[];
  resolvedByMorrisDecision: string[];
  candidateSnapshot: CycleSummaryCandidateSnapshot;
  historicalAnalysisContext: string[];
  finalState: CycleSummaryFinalState;
  qualificationFinOps: { calls: number; note: string };
  analysisFinOps: { calls: number; note: string };
  timestamps: { decidedAt: string; summarizedAt: string };
  traceability: {
    analysisRequestId: string;
    executionId: string;
    contractId: string;
    packHash: string;
    increments?: string[];
    trajectory?: Record<string, string>;
  };
  scope: "current-vertical-slice-only";
  mvpClaim: false;
  productionReadyClaim: false;
}

```

### `harness/src/increment-e/morrisDecision.ts`

```typescript
/**
 * Increment E — MorrisFinalDecision + CycleSummary builders.
 * Live GPT observation stops at AWAITING_MORRIS_FINAL_DECISION until Morris decides.
 * CycleSummary final state must not echo pre-decision awaiting-Morris gaps as current truth.
 */

import { randomUUID } from "node:crypto";
import type { GptVerdictCandidate } from "../types/gptVerdictCandidate.js";
import type { EvidenceAnalysisPack } from "../types/evidenceAnalysisPack.js";
import type {
  CycleSummary,
  CycleSummaryCandidateSnapshot,
  MorrisFinalAction,
  MorrisFinalDecision,
} from "../types/morrisFinalDecision.js";

export interface RecordMorrisDecisionInput {
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  action: MorrisFinalAction;
  rationale?: string;
  acceptedReservations?: string[];
  unresolvedReservations?: string[];
  consequences?: string[];
  requiresNewGo?: boolean;
  decidedAt?: string;
  decisionId?: string;
  /** If a decision was already recorded for this verdictId, block a second concurrent decision. */
  priorDecisionIdForVerdict?: string | null;
  qualificationCalls?: number;
  /** Technical regeneration: reuse summaryId / link previous. */
  summaryId?: string;
  previousSummaryId?: string;
  summarizedAt?: string;
}

export interface RecordMorrisDecisionResult {
  ok: boolean;
  code?: string;
  message: string;
  decision?: MorrisFinalDecision;
  summary?: CycleSummary;
  uiStatus?: string;
}

const DEFAULT_CLOSE_CONSEQUENCES = [
  "Autoriser la génération du CycleSummary",
  "Passer le vertical slice à CLOSED_WITH_RESERVATIONS",
  "Fermer le cycle fonctionnel A–E",
  "Conserver staging/commit/push/PR/merge sous gates séparés",
  "Aucune action Git",
  "Aucun claim MVP ou production",
];

const RESOLVED_BY_CLOSE_SLICE = [
  "Morris final decision enregistrée",
  "Clôture fonctionnelle autorisée",
  "CycleSummary autorisé",
  "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
  "Attente de décision Morris levée",
  "Aucune transformation en claim MVP ou production",
];

/** Items that were awaiting Morris / Increment E completion — not current after CLOSE_SLICE. */
const RESOLVED_NOT_PROVEN = [
  /increment e completion/i,
  /morris final decision/i,
  /cl[oô]ture (du )?slice/i,
  /attente de d[eé]cision morris/i,
];

const RESOLVED_GAPS = [
  /no morris decision recorded/i,
  /morris decision (is )?still required/i,
  /closure (is )?not authorized/i,
  /closureAuthorized\s*=\s*false/i,
  /awaiting.?morris/i,
];

const RESOLVED_RISKS = [
  /closureAuthorized\s*=\s*false/i,
  /completion\/closure cannot be inferred/i,
  /candidate proof only;\s*a higher-level decision is still required/i,
  /higher-level decision is still required/i,
  /morris decision (is )?still required/i,
];

const RESOLVED_RESERVATION = [
  /candidate proof only\s*[—-]\s*morris decision required/i,
  /morris decision required/i,
  /awaiting.?morris/i,
];

function matchesAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((p) => p.test(text));
}

function filterOpen(items: string[], patterns: RegExp[]): string[] {
  return items.filter((item) => !matchesAny(item, patterns));
}

export function recordMorrisFinalDecision(input: RecordMorrisDecisionInput): RecordMorrisDecisionResult {
  const { verdict, pack, action } = input;

  if (input.priorDecisionIdForVerdict) {
    return {
      ok: false,
      code: "DECISION_ALREADY_RECORDED",
      message: `verdict ${verdict.verdictId} already has decision ${input.priorDecisionIdForVerdict}`,
    };
  }

  if (!verdict.candidateOnly || verdict.closureAuthorized !== false) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "invalid candidate for decision" };
  }
  if (!verdict.morrisDecisionRequired) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "candidate does not require Morris decision" };
  }

  if (action === "CLOSE_SLICE") {
    if (pack.reportCompleteness !== "complete" || pack.reviewPackCompleteness !== "complete") {
      return { ok: false, code: "PACK_INCOMPLETE", message: "CLOSE_SLICE requires complete pack" };
    }
    if (verdict.status === "ANALYSIS_INVALID" || verdict.status === "BLOCKED_BY_INCOMPLETE_EVIDENCE") {
      return { ok: false, code: "INVALID_RESPONSE", message: "cannot CLOSE_SLICE on blocked verdict" };
    }
  }

  const requiresNewGo = input.requiresNewGo ?? action === "RELAUNCH_WITH_NEW_GO";
  const closureAuthorized = action === "CLOSE_SLICE";
  const consequences: string[] =
    input.consequences ??
    (action === "CLOSE_SLICE"
      ? DEFAULT_CLOSE_CONSEQUENCES
      : action === "CORRECT"
        ? ["No automatic relaunch", "Evidence/verdict review required", "No Git action"]
        : action === "RELAUNCH_WITH_NEW_GO"
          ? ["New Morris GO required", "Prior Increment D GO not reusable", "No Git action"]
          : ["No positive closure", "No success claim", "No Git action"]);

  const acceptedReservations = input.acceptedReservations ?? [];
  const unresolvedReservations =
    input.unresolvedReservations ??
    verdict.reservations.filter((r) => !acceptedReservations.includes(r));

  const decision: MorrisFinalDecision = {
    schemaVersion: "morris-final-decision-1.0.0",
    decisionId: input.decisionId ?? `dec-inc-e-${randomUUID()}`,
    verdictId: verdict.verdictId,
    requestId: verdict.requestId,
    correlationId: verdict.correlationId,
    decidedBy: "Morris",
    decidedAt: input.decidedAt ?? new Date().toISOString(),
    action,
    rationale: input.rationale,
    acceptedReservations,
    unresolvedReservations,
    consequences,
    requiresNewGo,
    closureAuthorized,
    candidateClaimsAccepted: false,
    mvpClaim: false,
    productionReadyClaim: false,
  };

  if (action === "CLOSE_SLICE") {
    const summary = buildCycleSummary({
      decision,
      verdict,
      pack,
      analysisCalls: verdict.finOps.callNumber,
      qualificationCalls: input.qualificationCalls ?? 0,
      summaryId: input.summaryId,
      previousSummaryId: input.previousSummaryId,
      summarizedAt: input.summarizedAt,
    });
    return {
      ok: true,
      message: "CLOSE_SLICE recorded",
      decision,
      summary,
      uiStatus: "CLOSED_WITH_RESERVATIONS",
    };
  }

  if (action === "ABANDON") {
    return {
      ok: true,
      message: "ABANDON recorded — no positive success",
      decision,
      uiStatus: "ABANDONED",
    };
  }

  return {
    ok: true,
    message: `${action} recorded`,
    decision,
    uiStatus: action === "CORRECT" ? "AWAITING_CORRECTION" : "AWAITING_NEW_GO",
  };
}

/**
 * Technical regeneration of CycleSummary after CLOSE_SLICE without a new Morris decision.
 * Preserves decisionId / decidedAt; may mint a new summaryId linked via previousSummaryId.
 */
export function regenerateCycleSummary(input: {
  decision: MorrisFinalDecision;
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  analysisCalls: number;
  qualificationCalls?: number;
  previousSummaryId?: string;
  summaryId?: string;
}): { ok: true; summary: CycleSummary; message: string } | { ok: false; code: string; message: string } {
  if (input.decision.action !== "CLOSE_SLICE" || !input.decision.closureAuthorized) {
    return { ok: false, code: "INVALID_RESPONSE", message: "regeneration requires CLOSE_SLICE decision" };
  }
  if (input.decision.verdictId !== input.verdict.verdictId) {
    return { ok: false, code: "INVALID_RESPONSE", message: "verdictId mismatch" };
  }
  if (!input.verdict.candidateOnly || input.verdict.closureAuthorized !== false) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "candidate snapshot invariants breached" };
  }
  const summary = buildCycleSummary({
    decision: input.decision,
    verdict: input.verdict,
    pack: input.pack,
    analysisCalls: input.analysisCalls,
    qualificationCalls: input.qualificationCalls ?? 0,
    summaryId: input.summaryId,
    previousSummaryId: input.previousSummaryId,
  });
  return { ok: true, summary, message: "CycleSummary regenerated (technical)" };
}

export function buildCycleSummary(input: {
  decision: MorrisFinalDecision;
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  analysisCalls: number;
  qualificationCalls?: number;
  summaryId?: string;
  previousSummaryId?: string;
  summarizedAt?: string;
}): CycleSummary {
  if (!input.decision.closureAuthorized || input.decision.action !== "CLOSE_SLICE") {
    throw new Error("CycleSummary only after CLOSE_SLICE");
  }

  const candidateSnapshot: CycleSummaryCandidateSnapshot = {
    status: input.verdict.status,
    candidateOnly: true,
    closureAuthorized: false,
    morrisDecisionRequired: true,
    notProven: [...input.verdict.notProven],
    gaps: [...input.verdict.gaps],
    risks: [...input.verdict.risks],
    reservations: [...input.verdict.reservations],
  };

  const historicalAnalysisContext = [
    "Le verdict GPT était candidat uniquement (candidateOnly=true)",
    "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
    "closureAuthorized était false dans le candidat",
    "morrisDecisionRequired était true dans le candidat",
    `Statut candidat historique: ${input.verdict.status}`,
  ];

  const trajectoryProven = [
    "Parcours A→E cohérent",
    "Quatre routes P0 conservées",
    "Studio reste un cockpit dérivé",
    "Harness reste l’autorité technique",
    "GPT produit uniquement des candidats",
    "Morris reste l’autorité de décision",
    "Qualification GPT réelle bornée",
    "Cursor réel exécuté après GO revalidé",
    "Analyse GPT réelle bornée",
    "Contrôles fail-closed fonctionnels",
    "Aucun retry automatique",
    "FinOps séparé",
    "Preuves et IDs corrélés",
    "Décision finale humaine",
    "Clôture slice-only",
    "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
    "Morris final decision enregistrée",
    ...input.verdict.proven,
  ];

  const baseNotProven = [
    "Environnement production",
    "Sandbox OS/réseau forte",
    "Fonctionnement multi-projet",
    "Orchestration industrielle",
    "Disponibilité et résilience de service",
    "Sécurité homologuée",
    "Scalabilité",
    "CI/CD complète",
    "MVP produit",
    "production readiness",
    "industrialisation",
    "Studio complete status",
    ...input.verdict.notProven,
  ];

  const notProven = [...new Set(filterOpen(baseNotProven, RESOLVED_NOT_PROVEN))];
  const gaps = filterOpen([...input.verdict.gaps], RESOLVED_GAPS);
  const risks = filterOpen([...input.verdict.risks], RESOLVED_RISKS);

  const unresolvedReservations = [...input.decision.unresolvedReservations];
  const acceptedReservations = [...input.decision.acceptedReservations];
  // Final open reservations = unresolved only (do not re-echo pre-decision candidate awaits)
  const reservations = unresolvedReservations.filter((r) => !matchesAny(r, RESOLVED_RESERVATION));

  return {
    schemaVersion: "cycle-summary-1.0.0",
    summaryId: input.summaryId ?? `sum-inc-e-${randomUUID()}`,
    previousSummaryId: input.previousSummaryId,
    requestId: input.verdict.requestId,
    correlationId: input.verdict.correlationId,
    verdictId: input.verdict.verdictId,
    decisionId: input.decision.decisionId,
    finalStatus: "CLOSED_WITH_RESERVATIONS",
    morrisDecisionRecorded: true,
    closureAuthorized: true,
    markdownArtifact: input.pack.filesCreated[0] ?? "projects/sfia-studio/.sandbox/increment-d/output.md",
    executionEvidence: input.pack.executionId,
    proven: trajectoryProven,
    notProven,
    gaps,
    risks,
    reservations,
    unresolvedReservations,
    acceptedReservations,
    resolvedByMorrisDecision: [...RESOLVED_BY_CLOSE_SLICE],
    candidateSnapshot,
    historicalAnalysisContext,
    finalState: {
      finalStatus: "CLOSED_WITH_RESERVATIONS",
      morrisDecisionRecorded: true,
      closureAuthorized: true,
      action: "CLOSE_SLICE",
      awaitingMorrisDecision: false,
    },
    qualificationFinOps: {
      calls: input.qualificationCalls ?? 0,
      note: "qualification counter separate from analysis — unchanged by CLOSE_SLICE",
    },
    analysisFinOps: {
      calls: input.analysisCalls,
      note: "analysis phase only — no new GPT call on CLOSE_SLICE",
    },
    timestamps: {
      decidedAt: input.decision.decidedAt,
      summarizedAt: input.summarizedAt ?? new Date().toISOString(),
    },
    traceability: {
      analysisRequestId: input.pack.analysisRequestId,
      executionId: input.pack.executionId,
      contractId: input.pack.contractId,
      packHash: input.pack.packHash,
      increments: ["A", "B", "C", "D", "E"],
      trajectory: {
        A: "Cockpit statique et mapping des dix états sur quatre vues",
        B: "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
        C: "Qualification GPT réelle bornée, fail-closed et FinOps visible",
        D: "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
        E: "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only",
      },
    },
    scope: "current-vertical-slice-only",
    mvpClaim: false,
    productionReadyClaim: false,
  };
}

```

### Diff cli/index

```diff
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
index 48c13b5..e1d1172 100644
--- a/projects/sfia-studio/harness/src/cli.ts
+++ b/projects/sfia-studio/harness/src/cli.ts
@@ -1,5 +1,5 @@
 #!/usr/bin/env node
-import { readFileSync, mkdirSync } from "node:fs";
+import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
 import path from "node:path";
 import { fileURLToPath } from "node:url";
 import { Orchestrator, validateContractOnly } from "./orchestrator.js";
@@ -9,6 +9,11 @@ import { resumeSessionFromProofDir } from "./session/resumeSession.js";
 import { verifyProofPack } from "./proof/verifyProofPack.js";
 import { GptQualificationLivePort, runQualificationFixture } from "./ports/gptQualificationLive.js";
 import { runIncrementDSandbox } from "./increment-d/cursorSandboxRunner.js";
+import { GptAnalysisLivePort, runAnalysisFixture } from "./ports/gptAnalysisLive.js";
+import { recordMorrisFinalDecision, regenerateCycleSummary } from "./increment-e/morrisDecision.js";
+import type { GptVerdictCandidate } from "./types/gptVerdictCandidate.js";
+import type { EvidenceAnalysisPack } from "./types/evidenceAnalysisPack.js";
+import type { MorrisFinalAction } from "./types/morrisFinalDecision.js";
 import type {
   ExecutionContract,
   GateDecision,
@@ -17,6 +22,7 @@ import type {
 } from "./types/contracts.js";
 import type { QualificationRequestInput } from "./types/qualificationCandidate.js";
 import type { IncrementDRunInput } from "./increment-d/cursorSandboxRunner.js";
+import type { AnalysisRequestInput } from "./ports/gptAnalysisLive.js";
 import { computeContractHash } from "./hash/contractHash.js";
 
 function usage(): never {
@@ -33,6 +39,10 @@ Commands:
   qualify-fixture <payload.json>    # Increment C qualification fixture (no OpenAI)
   qualify-live <payload.json>       # Increment C live qualification (requires flags + key)
   inc-d-run <payload.json>          # Increment D Cursor sandbox (fixture fake or live)
+  analyse-fixture <payload.json>    # Increment E GPT analysis fixture
+  analyse-live <payload.json>       # Increment E live GPT analysis (requires flags + key)
+  morris-decide <payload.json>      # Increment E record MorrisFinalDecision (+ CycleSummary if CLOSE_SLICE)
+  morris-regenerate-summary <payload.json>  # Technical CycleSummary regen (same decision, no new GPT)
 `);
   process.exit(2);
 }
@@ -166,6 +176,152 @@ async function main(): Promise<void> {
     process.exit(result.ok ? 0 : 1);
   }
 
+  if (cmd === "analyse-fixture" || cmd === "analyse-live") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as AnalysisRequestInput;
+    if (cmd === "analyse-fixture") {
+      const result = runAnalysisFixture(payload);
+      console.log(JSON.stringify(result, null, 2));
+      process.exit(result.ok ? 0 : 1);
+    }
+    const port = new GptAnalysisLivePort();
+    const result = await port.run({ ...payload, live: true });
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
+  if (cmd === "morris-decide") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as {
+      verdict: GptVerdictCandidate;
+      pack: EvidenceAnalysisPack;
+      action: MorrisFinalAction;
+      rationale?: string;
+      acceptedReservations?: string[];
+      unresolvedReservations?: string[];
+      consequences?: string[];
+      requiresNewGo?: boolean;
+      decidedAt?: string;
+      decisionId?: string;
+      proofDir?: string;
+      qualificationCalls?: number;
+    };
+    const proofDir = payload.proofDir;
+    let priorDecisionIdForVerdict: string | null = null;
+    if (proofDir) {
+      mkdirSync(proofDir, { recursive: true });
+      const lockPath = path.join(proofDir, "morris-final-decision.json");
+      if (existsSync(lockPath)) {
+        const prior = JSON.parse(readFileSync(lockPath, "utf8")) as { decisionId?: string; verdictId?: string };
+        if (prior.verdictId === payload.verdict.verdictId && prior.decisionId) {
+          priorDecisionIdForVerdict = prior.decisionId;
+        }
+      }
+    }
+    const result = recordMorrisFinalDecision({
+      verdict: payload.verdict,
+      pack: payload.pack,
+      action: payload.action,
+      rationale: payload.rationale,
+      acceptedReservations: payload.acceptedReservations,
+      unresolvedReservations: payload.unresolvedReservations,
+      consequences: payload.consequences,
+      requiresNewGo: payload.requiresNewGo,
+      decidedAt: payload.decidedAt,
+      decisionId: payload.decisionId,
+      priorDecisionIdForVerdict,
+      qualificationCalls: payload.qualificationCalls,
+    });
+    if (result.ok && proofDir && result.decision) {
+      writeFileSync(
+        path.join(proofDir, "morris-final-decision.json"),
+        `${JSON.stringify(result.decision, null, 2)}\n`,
+        "utf8",
+      );
+      if (result.summary) {
+        writeFileSync(
+          path.join(proofDir, "cycle-summary.json"),
+          `${JSON.stringify(result.summary, null, 2)}\n`,
+          "utf8",
+        );
+      }
+      writeFileSync(
+        path.join(proofDir, "closure-result.json"),
+        `${JSON.stringify(
+          {
+            ok: result.ok,
+            uiStatus: result.uiStatus,
+            message: result.message,
+            gptCallsUnchanged: true,
+            gitActions: false,
+            verdictId: payload.verdict.verdictId,
+            candidateStatusUnchanged: payload.verdict.status,
+          },
+          null,
+          2,
+        )}\n`,
+        "utf8",
+      );
+    }
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
+  if (cmd === "morris-regenerate-summary") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as {
+      verdict: GptVerdictCandidate;
+      pack: EvidenceAnalysisPack;
+      decision: import("./types/morrisFinalDecision.js").MorrisFinalDecision;
+      previousSummaryId?: string;
+      summaryId?: string;
+      proofDir?: string;
+      qualificationCalls?: number;
+    };
+    const result = regenerateCycleSummary({
+      decision: payload.decision,
+      verdict: payload.verdict,
+      pack: payload.pack,
+      analysisCalls: payload.verdict.finOps?.callNumber ?? 0,
+      qualificationCalls: payload.qualificationCalls ?? 0,
+      previousSummaryId: payload.previousSummaryId,
+      summaryId: payload.summaryId,
+    });
+    if (result.ok && payload.proofDir) {
+      mkdirSync(payload.proofDir, { recursive: true });
+      writeFileSync(
+        path.join(payload.proofDir, "cycle-summary.json"),
+        `${JSON.stringify(result.summary, null, 2)}\n`,
+        "utf8",
+      );
+      writeFileSync(
+        path.join(payload.proofDir, "cycle-summary-regen-meta.json"),
+        `${JSON.stringify(
+          {
+            technicalRegeneration: true,
+            previousSummaryId: payload.previousSummaryId ?? null,
+            summaryId: result.summary.summaryId,
+            decisionIdUnchanged: payload.decision.decisionId,
+            decidedAtUnchanged: payload.decision.decidedAt,
+            verdictIdUnchanged: payload.verdict.verdictId,
+            candidateStatusUnchanged: payload.verdict.status,
+            gptCallsUnchanged: true,
+            newMorrisDecision: false,
+            gate: "G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION",
+          },
+          null,
+          2,
+        )}\n`,
+        "utf8",
+      );
+    }
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
   usage();
 }
 
diff --git a/projects/sfia-studio/harness/src/index.ts b/projects/sfia-studio/harness/src/index.ts
index a14c490..661f09c 100644
--- a/projects/sfia-studio/harness/src/index.ts
+++ b/projects/sfia-studio/harness/src/index.ts
@@ -51,3 +51,28 @@ export {
   type IncrementDRunInput,
   type IncrementDRunResult,
 } from "./increment-d/cursorSandboxRunner.js";
+export * from "./types/evidenceAnalysisPack.js";
+export * from "./types/gptVerdictCandidate.js";
+export * from "./types/morrisFinalDecision.js";
+export * from "./finops/analysisLimits.js";
+export {
+  buildEvidenceAnalysisPack,
+  validateEvidenceAnalysisPack,
+} from "./increment-e/evidencePack.js";
+export {
+  recordMorrisFinalDecision,
+  buildCycleSummary,
+  regenerateCycleSummary,
+} from "./increment-e/morrisDecision.js";
+export { sampleIncrementDReport, completePackBuildInput } from "./increment-e/fixtures.js";
+export {
+  validateVerdictModelPayload,
+  assertCandidateAuthority,
+} from "./validation/verdictCandidateValidator.js";
+export {
+  GptAnalysisLivePort,
+  runAnalysisFixture,
+  INC_E_LIVE_FLAG,
+  INC_E_OBSERVE_FLAG,
+  type AnalysisRequestInput,
+} from "./ports/gptAnalysisLive.js";

```

### `app/lib/harness/incrementEClosureArtifact.ts`

```typescript
/** Recorded Increment E Morris CLOSE_SLICE artifact (read-only UI). */
export const incrementEClosureArtifact = {
  "uiStatus": "CLOSED_WITH_RESERVATIONS",
  "gatesConsumed": [
    "G-INCREMENT-E-FINAL-DECISION",
    "G-INCREMENT-E-CLOSE-SLICE",
    "G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION"
  ],
  "gatesStillClosed": [
    "G-INCREMENT-E-STAGE",
    "G-INCREMENT-E-COMMIT",
    "G-INCREMENT-E-PUSH",
    "G-INCREMENT-E-PR",
    "G-INCREMENT-E-MERGE",
    "G-BRANCH-DELETE",
    "G-MVP-CLAIM",
    "G-PRODUCTION-CLAIM"
  ],
  "candidateSnapshot": {
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
    "status": "PARTIALLY_PROVED",
    "candidateOnly": true,
    "closureAuthorized": false,
    "morrisDecisionRequired": true,
    "proven": [
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
      "tests passed per pack: harnessPassed, appPassed, e2ePassed",
      "security check passed per pack: secretsScanPassed",
      "reportCompleteness and reviewPackCompleteness marked complete"
    ],
    "notProven": [
      "MVP readiness",
      "production readiness",
      "industrialised status",
      "Studio complete status",
      "Increment E completion",
      "Morris final decision"
    ],
    "gaps": [
      "No Morris decision recorded in the pack",
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
      "Candidate proof only; a higher-level decision is still required",
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized at D time"
    ],
    "evidenceReferences": [
      "cursor-execution-report",
      "increment-d-sandbox-proof",
      "pr-233-merge"
    ],
    "finOps": {
      "inputTokens": 989,
      "outputTokens": 449,
      "totalTokens": 1438,
      "estimatedCostEur": 0.001054,
      "callNumber": 1,
      "costIsEstimate": true,
      "phase": "analyse"
    }
  },
  "decision": {
    "schemaVersion": "morris-final-decision-1.0.0",
    "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "requestId": "req-inc-d-live-1784528437254",
    "correlationId": "corr-inc-d-live-1784528437254",
    "decidedBy": "Morris",
    "decidedAt": "2026-07-20T08:47:24.672742Z",
    "action": "CLOSE_SLICE",
    "rationale": "Le vertical slice POC A–E est techniquement démontré avec réserves. La clôture valide le parcours de preuve et la séparation des autorités, sans constituer un claim MVP, production-ready ou industrialisation.",
    "acceptedReservations": [
      "preuve POC locale",
      "remote=0/network=none ne constitue pas une sandbox OS forte",
      "une première observation GPT a été rejetée fail-closed avant correctif",
      "deux appels GPT live ont été consommés au total",
      "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
      "absence de CI GitHub obligatoire documentée sur certains incréments",
      "code Increment E encore non versionné"
    ],
    "unresolvedReservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "consequences": [
      "Autoriser la génération du CycleSummary",
      "Passer le vertical slice à CLOSED_WITH_RESERVATIONS",
      "Fermer le cycle fonctionnel A–E",
      "Conserver staging/commit/push/PR/merge sous gates séparés"
    ],
    "requiresNewGo": false,
    "closureAuthorized": true,
    "candidateClaimsAccepted": false,
    "mvpClaim": false,
    "productionReadyClaim": false
  },
  "summary": {
    "schemaVersion": "cycle-summary-1.0.0",
    "summaryId": "sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b",
    "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
    "requestId": "req-inc-d-live-1784528437254",
    "correlationId": "corr-inc-d-live-1784528437254",
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
    "finalStatus": "CLOSED_WITH_RESERVATIONS",
    "morrisDecisionRecorded": true,
    "closureAuthorized": true,
    "markdownArtifact": "output.md",
    "executionEvidence": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    "proven": [
      "Parcours A→E cohérent",
      "Quatre routes P0 conservées",
      "Studio reste un cockpit dérivé",
      "Harness reste l’autorité technique",
      "GPT produit uniquement des candidats",
      "Morris reste l’autorité de décision",
      "Qualification GPT réelle bornée",
      "Cursor réel exécuté après GO revalidé",
      "Analyse GPT réelle bornée",
      "Contrôles fail-closed fonctionnels",
      "Aucun retry automatique",
      "FinOps séparé",
      "Preuves et IDs corrélés",
      "Décision finale humaine",
      "Clôture slice-only",
      "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
      "Morris final decision enregistrée",
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
      "tests passed per pack: harnessPassed, appPassed, e2ePassed",
      "security check passed per pack: secretsScanPassed",
      "reportCompleteness and reviewPackCompleteness marked complete"
    ],
    "notProven": [
      "Environnement production",
      "Sandbox OS/réseau forte",
      "Fonctionnement multi-projet",
      "Orchestration industrielle",
      "Disponibilité et résilience de service",
      "Sécurité homologuée",
      "Scalabilité",
      "CI/CD complète",
      "MVP produit",
      "production readiness",
      "industrialisation",
      "Studio complete status",
      "MVP readiness",
      "industrialised status"
    ],
    "gaps": [
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "unresolvedReservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "acceptedReservations": [
      "preuve POC locale",
      "remote=0/network=none ne constitue pas une sandbox OS forte",
      "une première observation GPT a été rejetée fail-closed avant correctif",
      "deux appels GPT live ont été consommés au total",
      "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
      "absence de CI GitHub obligatoire documentée sur certains incréments",
      "code Increment E encore non versionné"
    ],
    "resolvedByMorrisDecision": [
      "Morris final decision enregistrée",
      "Clôture fonctionnelle autorisée",
      "CycleSummary autorisé",
      "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
      "Attente de décision Morris levée",
      "Aucune transformation en claim MVP ou production"
    ],
    "candidateSnapshot": {
      "status": "PARTIALLY_PROVED",
      "candidateOnly": true,
      "closureAuthorized": false,
      "morrisDecisionRequired": true,
      "notProven": [
        "MVP readiness",
        "production readiness",
        "industrialised status",
        "Studio complete status",
        "Increment E completion",
        "Morris final decision"
      ],
      "gaps": [
        "No Morris decision recorded in the pack",
        "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
        "Increment E work evidence is not present; pack evidence is for Increment D"
      ],
      "risks": [
        "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
        "Candidate proof only; a higher-level decision is still required",
        "Remote Git writes were zero, so no evidence of remote write activity"
      ],
      "reservations": [
        "Sandbox Markdown proof succeeded",
        "Remote Git writes: 0",
        "Candidate proof only — Morris decision required",
        "Increment E / GPT analysis not authorized at D time"
      ]
    },
    "historicalAnalysisContext": [
      "Le verdict GPT était candidat uniquement (candidateOnly=true)",
      "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
      "closureAuthorized était false dans le candidat",
      "morrisDecisionRequired était true dans le candidat",
      "Statut candidat historique: PARTIALLY_PROVED"
    ],
    "finalState": {
      "finalStatus": "CLOSED_WITH_RESERVATIONS",
      "morrisDecisionRecorded": true,
      "closureAuthorized": true,
      "action": "CLOSE_SLICE",
      "awaitingMorrisDecision": false
    },
    "qualificationFinOps": {
      "calls": 0,
      "note": "qualification counter separate from analysis — unchanged by CLOSE_SLICE"
    },
    "analysisFinOps": {
      "calls": 1,
      "note": "analysis phase only — no new GPT call on CLOSE_SLICE"
    },
    "timestamps": {
      "decidedAt": "2026-07-20T08:47:24.672742Z",
      "summarizedAt": "2026-07-20T08:55:30.162Z"
    },
    "traceability": {
      "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
      "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
      "contractId": "ctr-inc-d-live-001",
      "packHash": "c22e03ce555c1af37fc251d2399c618a3a7fabe803bde12de76123a73b9eeb1f",
      "increments": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "trajectory": {
        "A": "Cockpit statique et mapping des dix états sur quatre vues",
        "B": "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
        "C": "Qualification GPT réelle bornée, fail-closed et FinOps visible",
        "D": "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
        "E": "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only"
      }
    },
    "scope": "current-vertical-slice-only",
    "mvpClaim": false,
    "productionReadyClaim": false
  },
  "noGitAction": true,
  "noNewGptCall": true,
  "totalLiveGptCalls": 2,
  "cycleSummaryCorrection": true,
  "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c"
} as const;

```

### `app/features/synthese/VsSyntheseScreen.tsx`

```tsx
"use client";

import { useSearchParams } from "next/navigation";
import { StatusPill } from "@/components/ui/StatusPill";
import { HarnessStatusPanel, IdStrip } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { incrementEClosureArtifact } from "@/lib/harness/incrementEClosureArtifact";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

export function VsSyntheseScreen() {
  const searchParams = useSearchParams();
  const showIncEClosure = searchParams.get("closure") === "inc-e";
  const { abandoned, finalAction, harnessView } = useVsDemo();
  const closure = incrementEClosureArtifact;

  if (showIncEClosure) {
    const s = closure.summary;
    return (
      <div className={styles.panel} data-testid="vs-synthese">
        <IdStrip />
        <HarnessStatusPanel />

        <section className={styles.hero} aria-labelledby="vs-close-hero">
          <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
          <h2 id="vs-close-hero" className={styles.heroTitle}>
            CycleSummary — vertical slice A–E
          </h2>
          <p className={styles.heroText}>
            Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
          </p>
        </section>

        <section className={styles.card} data-testid="vs-cycle-summary">
          <div className={styles.actions} aria-label="Badges de clôture">
            <StatusPill tone="blueFlush">POC</StatusPill>
            <StatusPill tone="greenFlush">Slice clôturé avec réserves</StatusPill>
            <p className={styles.muted} data-testid="vs-inc-e-closed-badge">
              CLOSED_WITH_RESERVATIONS
            </p>
            <StatusPill tone="pink">Aucun claim MVP</StatusPill>
            <StatusPill tone="pink">Non production-ready</StatusPill>
          </div>
          <p className={styles.fieldLabel}>Statut final</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-final-status">
            {s.finalStatus}
          </p>
          <p className={styles.fieldLabel}>Décision Morris</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-decision-recorded">
            {closure.decision.action} · enregistrée ·{" "}
            {String(s.morrisDecisionRecorded ?? true)} · awaitingMorris=
            {String(s.finalState?.awaitingMorrisDecision ?? false)}
          </p>
          <p className={styles.fieldLabel}>Candidat GPT (historique inchangé)</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-candidate-historical">
            {closure.candidateSnapshot.status} · candidateOnly ·
            closureAuthorized={String(closure.candidateSnapshot.closureAuthorized)} ·
            (photographie pré-décision)
          </p>
          <p className={styles.fieldLabel}>Parcours A–E</p>
          <ul className={styles.list} data-testid="vs-inc-e-trajectory">
            {Object.entries(s.traceability.trajectory ?? {}).map(([k, v]) => (
              <li key={k}>
                <strong>Increment {k}</strong> — {v}
              </li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Prouvé (état final)</p>
          <ul className={styles.list} data-testid="vs-inc-e-final-proven">
            {s.proven.slice(0, 16).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Non prouvé (état final)</p>
          <ul className={styles.list} data-testid="vs-inc-e-final-not-proven">
            {s.notProven.slice(0, 14).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Résolu par décision Morris</p>
          <ul className={styles.list} data-testid="vs-inc-e-resolved-by-morris">
            {(s.resolvedByMorrisDecision ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Réserves non résolues</p>
          <ul className={styles.list} data-testid="vs-inc-e-summary-reservations">
            {(s.unresolvedReservations ?? s.reservations).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Contexte historique d’analyse</p>
          <ul className={styles.list} data-testid="vs-inc-e-historical-context">
            {(s.historicalAnalysisContext ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>FinOps</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-finops-split">
            Qualification : {s.qualificationFinOps.calls} ({s.qualificationFinOps.note}) ·
            Analyse : {s.analysisFinOps.calls} ({s.analysisFinOps.note})
          </p>
          <p className={styles.fieldLabel}>Preuves</p>
          <p className={styles.fieldValue}>
            {closure.candidateSnapshot.evidenceReferences.join(" · ")} · packHash{" "}
            {s.traceability.packHash.slice(0, 12)}…
          </p>
          <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
            Interdit : MVP · production-ready · Studio complete · industrialisé · mvpClaim=
            {String(s.mvpClaim)} · productionReadyClaim={String(s.productionReadyClaim)}
          </p>
          <p className={styles.muted} data-testid="vs-no-portfolio">
            Hors périmètre : portefeuille multi-projet, autres cycles hors slice. Aucune
            action Git. Aucun nouvel appel GPT.
          </p>
        </section>
      </div>
    );
  }

  const finalStatus = harnessView
    ? `dérivé harness · ${harnessView.canonicalStatus} (${harnessView.mode})`
    : abandoned
      ? "abandonné"
      : vsFixture.summary.finalStatus;

  return (
    <div className={styles.panel} data-testid="vs-synthese">
      <IdStrip />
      <HarnessStatusPanel />

      <section className={styles.hero} aria-labelledby="vs-close-hero">
        <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
        <h2 id="vs-close-hero" className={styles.heroTitle}>
          CycleSummary — vertical slice POC
        </h2>
        <p className={styles.heroText}>
          Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
        </p>
      </section>

      <section className={styles.card} data-testid="vs-cycle-summary">
        <StatusPill tone={abandoned || (harnessView && !harnessView.ok) ? "pink" : "greenFlush"}>
          {finalStatus}
        </StatusPill>
        <p className={styles.fieldLabel}>requestId</p>
        <p className={styles.fieldValue}>{vsFixture.requestId}</p>
        <p className={styles.fieldLabel}>Statut final</p>
        <p className={styles.fieldValue}>
          {abandoned ? "abandonné (fixture)" : vsFixture.summary.finalStatus}
        </p>
        <p className={styles.fieldLabel}>Décision Morris</p>
        <p className={styles.fieldValue}>
          {abandoned
            ? "Abandonner"
            : finalAction === "CLOTURER"
              ? vsFixture.summary.decision
              : finalAction ?? vsFixture.summary.decision}
        </p>
        <p className={styles.fieldLabel}>Fichier Markdown (mock)</p>
        <p className={styles.fieldValue}>{vsFixture.summary.markdownFile}</p>
        <p className={styles.fieldLabel}>Rapport / preuves</p>
        <p className={styles.fieldValue}>
          {vsFixture.summary.reportRef} · {vsFixture.summary.proofRef}
        </p>
        <p className={styles.fieldLabel}>Compteur GPT</p>
        <p className={styles.fieldValue} data-testid="vs-summary-gpt">
          {vsFixture.summary.gptCounter}
        </p>
        <p className={styles.muted} data-testid="vs-inc-e-finops-split">
          Qualification et analyse séparés · slice-only · aucun portfolio
        </p>
        <p className={styles.fieldLabel}>Branche · HEAD · contractHash</p>
        <p className={styles.fieldValue}>
          {vsFixture.branch} · {vsFixture.head} · {vsFixture.contractHash}
        </p>
        <p className={styles.fieldLabel}>Réserves</p>
        <ul className={styles.list}>
          {vsFixture.summary.reserves.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
          Interdit : MVP · production-ready · Studio complete · industrialisé
        </p>
        <p className={styles.muted} data-testid="vs-no-portfolio">
          Hors périmètre affiché : portefeuille multi-projet, autres cycles hors
          slice.
        </p>
      </section>
    </div>
  );
}

```

### Tests harness (complet)

```typescript
import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "path";
import {
  buildEvidenceAnalysisPack,
  validateEvidenceAnalysisPack,
} from "../src/increment-e/evidencePack.js";
import { completePackBuildInput, sampleIncrementDReport } from "../src/increment-e/fixtures.js";
import { runAnalysisFixture } from "../src/ports/gptAnalysisLive.js";
import {
  assertCandidateAuthority,
  validateVerdictModelPayload,
} from "../src/validation/verdictCandidateValidator.js";
import { recordMorrisFinalDecision, regenerateCycleSummary } from "../src/increment-e/morrisDecision.js";
import { resetSessionCallCountForTests } from "../src/finops/qualificationLimits.js";
import { INC_E_SESSION_KEY, getAnalysisSessionCallCount } from "../src/finops/analysisLimits.js";
import { getSessionCallCount } from "../src/finops/qualificationLimits.js";
import { GPT_VERDICT_CANDIDATE_SCHEMA } from "../src/types/gptVerdictCandidate.js";

beforeEach(() => {
  resetSessionCallCountForTests();
});

describe("Increment E — EvidenceAnalysisPack", () => {
  it("complete report → pack valid", () => {
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-1"));
    const v = validateEvidenceAnalysisPack(pack);
    expect(v.ok).toBe(true);
    expect(pack.sanitized).toBe(true);
    expect(pack.closureAuthorized).toBe(false);
  });

  it("identical inputs → deterministic packHash", () => {
    const input = completePackBuildInput("anl-det", {});
    const a = buildEvidenceAnalysisPack({ ...input, generatedAt: "fixed" });
    const b = buildEvidenceAnalysisPack({ ...input, generatedAt: "fixed" });
    expect(a.packHash).toBe(b.packHash);
  });

  it("report missing remoteGitWrites → incomplete", () => {
    const report = sampleIncrementDReport();
    delete (report as { remoteGitWrites?: number }).remoteGitWrites;
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-2"),
      report,
    });
    expect(pack.reportCompleteness).toBe("incomplete");
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });

  it("review pack incomplete → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-3"),
      reviewPackCompleteness: "incomplete",
    });
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });

  it("secret in reservation → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-4"),
      report: sampleIncrementDReport({
        reservations: ["leak OPENAI_API_KEY=sk-abcdefghijklmnopqrstuvwxyz"],
      }),
    });
    // sanitization should redact before validate; if still present, fail
    const blob = JSON.stringify(pack);
    expect(blob).not.toMatch(/sk-abcdefghijklmnopqrstuvwxyz/);
  });

  it("analysisAuthorized false → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-5"),
      analysisAuthorized: false,
    });
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });
});

describe("Increment E — GPT analysis fixture", () => {
  it("manual confirmation required", () => {
    const r = runAnalysisFixture({
      requestId: "req-e",
      correlationId: "corr-e",
      confirmedByUser: false,
      packBuild: completePackBuildInput("anl-6"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("CONFIRMATION_REQUIRED");
    expect(r.retriesAttempted).toBe(0);
  });

  it("incomplete pack blocks GPT", () => {
    const r = runAnalysisFixture({
      requestId: "req-e",
      correlationId: "corr-e",
      confirmedByUser: true,
      packBuild: {
        ...completePackBuildInput("anl-7"),
        reviewPackCompleteness: "incomplete",
      },
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("PACK_INCOMPLETE");
    expect(r.liveInvoked).toBe(false);
    expect(r.eventsLogged).toContain("gpt.analysis.pack_incomplete_blocked");
  });

  it("fixture produces candidate awaiting Morris", () => {
    const beforeQ = getSessionCallCount("studio-session");
    const r = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-8"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(true);
    expect(r.candidate?.candidateOnly).toBe(true);
    expect(r.candidate?.closureAuthorized).toBe(false);
    expect(r.candidate?.morrisDecisionRequired).toBe(true);
    expect(r.analysisUiState).toBe("AWAITING_MORRIS_FINAL_DECISION");
    expect(r.retriesAttempted).toBe(0);
    expect(getSessionCallCount("studio-session")).toBe(beforeQ);
  });
});

describe("Increment E — verdict validation", () => {
  const base = {
    schemaVersion: GPT_VERDICT_CANDIDATE_SCHEMA,
    analysisRequestId: "a",
    requestId: "r",
    correlationId: "c",
    status: "PROVED_WITH_RESERVATIONS" as const,
    proven: ["remoteGitWrites=0"],
    notProven: [] as string[],
    gaps: [] as string[],
    risks: [] as string[],
    reservations: ["Candidate only"],
    requiredMorrisDecisions: ["CLOSE_SLICE or CORRECT"],
    recommendedNextAction: "AWAIT_MORRIS" as const,
    evidenceReferences: ["cursor-execution-report"],
    confidenceNote: "bounded to pack",
    limitations: ["No OS network proof"],
  };
  const expected = {
    analysisRequestId: "a",
    requestId: "r",
    correlationId: "c",
    allowedEvidenceRefs: ["cursor-execution-report"],
  };

  it("1. affirmative MVP claim → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["This slice is MVP-ready for production"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("2. affirmative production claim → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["this is production-ready", "approved for production"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("2b. the MVP is validated → reject", () => {
    const v = validateVerdictModelPayload({ ...base, proven: ["the MVP is validated"] }, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("3. affirmed Morris decision → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["Morris has approved", "I authorize CLOSE_SLICE now"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("4. affirmed closure → reject", () => {
    const v = validateVerdictModelPayload({ ...base, proven: ["the cycle is closed"] }, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("5–8. prudent negations accepted", () => {
    const v = validateVerdictModelPayload(
      {
        ...base,
        notProven: [
          "not production-ready",
          "no MVP claim is made",
          "this does not prove production readiness",
          "Morris decision is still required",
          "closure is not authorized",
        ],
      },
      expected,
    );
    expect(v.ok).toBe(true);
  });

  it("9. negation + real affirmative claim → reject", () => {
    const v = validateVerdictModelPayload(
      {
        ...base,
        notProven: ["not production-ready"],
        proven: ["this is production-ready"],
      },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("10. casing / punctuation variants of affirmative → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["THIS IS Production-Ready!!!"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("11. invalid JSON object shape → reject", () => {
    const v = validateVerdictModelPayload("not-json-object", expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("12. missing required section → reject", () => {
    const { proven: _p, ...missing } = base;
    const v = validateVerdictModelPayload(missing, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("13. unknown evidence reference → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, evidenceReferences: ["unknown-source-xyz"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("14. candidateOnly=false → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: false,
      closureAuthorized: false,
      morrisDecisionRequired: true,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("15. closureAuthorized=true → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: true,
      closureAuthorized: true,
      morrisDecisionRequired: true,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("16. morrisDecisionRequired=false → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: true,
      closureAuthorized: false,
      morrisDecisionRequired: false,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });
});

describe("Increment E — Morris decision / summary", () => {
  it("CLOSE_SLICE produces CycleSummary; ABANDON is not success claim", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-9"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(analysis.candidate).toBeTruthy();
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-9"));
    const close = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
    });
    expect(close.ok).toBe(true);
    expect(close.summary?.scope).toBe("current-vertical-slice-only");
    expect(close.summary?.mvpClaim).toBe(false);
    expect(close.summary?.productionReadyClaim).toBe(false);
    expect(close.summary?.finalStatus).toBe("CLOSED_WITH_RESERVATIONS");
    expect(close.decision?.closureAuthorized).toBe(true);
    expect(close.decision?.verdictId).toBe(analysis.candidate!.verdictId);
    expect(close.uiStatus).toBe("CLOSED_WITH_RESERVATIONS");
    expect(close.summary?.morrisDecisionRecorded).toBe(true);
    expect(close.summary?.closureAuthorized).toBe(true);
    expect(close.summary?.candidateSnapshot.status).toBe(analysis.candidate!.status);
    expect(close.summary?.candidateSnapshot.closureAuthorized).toBe(false);
    expect(close.summary?.notProven.join(" ")).not.toMatch(/Morris final decision/i);
    expect(close.summary?.notProven.join(" ")).not.toMatch(/Increment E completion/i);
    expect(close.summary?.gaps.join(" ")).not.toMatch(/No Morris decision recorded/i);
    expect(close.summary?.risks.join(" ")).not.toMatch(/closureAuthorized=false/i);
    expect(close.summary?.reservations.join(" ")).not.toMatch(/Morris decision required/i);
    expect(close.summary?.resolvedByMorrisDecision.length).toBeGreaterThan(0);
    expect(close.summary?.finalState.awaitingMorrisDecision).toBe(false);

    const double = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
      priorDecisionIdForVerdict: close.decision!.decisionId,
    });
    expect(double.ok).toBe(false);
    expect(double.code).toBe("DECISION_ALREADY_RECORDED");

    const abandon = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "ABANDON",
    });
    expect(abandon.ok).toBe(true);
    expect(abandon.summary).toBeUndefined();
    expect(abandon.decision?.closureAuthorized).toBe(false);
  });

  it("RELAUNCH requires new GO flag", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-10"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-10"));
    const r = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "RELAUNCH_WITH_NEW_GO",
    });
    expect(r.decision?.requiresNewGo).toBe(true);
    expect(r.summary).toBeUndefined();
  });

  it("CORRECT does not produce summary", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-11"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-11"));
    const r = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CORRECT",
    });
    expect(r.ok).toBe(true);
    expect(r.summary).toBeUndefined();
  });

  it("regenerateCycleSummary keeps decision/candidate and clears pre-decision awaits", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-12"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-12"));
    const close = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
      decisionId: "dec-fixed-regen-1",
      decidedAt: "2026-07-20T08:47:24.672Z",
      unresolvedReservations: ["industrialisation", "validation MVP", "production readiness"],
    });
    expect(close.ok).toBe(true);
    const prevId = close.summary!.summaryId;
    const regen = regenerateCycleSummary({
      decision: close.decision!,
      verdict: analysis.candidate!,
      pack,
      analysisCalls: analysis.candidate!.finOps.callNumber,
      previousSummaryId: prevId,
    });
    expect(regen.ok).toBe(true);
    if (!regen.ok) return;
    expect(regen.summary.decisionId).toBe("dec-fixed-regen-1");
    expect(regen.summary.timestamps.decidedAt).toBe("2026-07-20T08:47:24.672Z");
    expect(regen.summary.previousSummaryId).toBe(prevId);
    expect(regen.summary.verdictId).toBe(analysis.candidate!.verdictId);
    expect(analysis.candidate!.status).toBe("PROVED_WITH_RESERVATIONS"); // fixture default
    expect(regen.summary.candidateSnapshot.closureAuthorized).toBe(false);
    expect(regen.summary.notProven).not.toContain("Morris final decision");
    expect(regen.summary.notProven).not.toContain("Increment E completion");
    expect(regen.summary.gaps.every((g) => !/No Morris decision recorded/i.test(g))).toBe(true);
    expect(regen.summary.risks.every((r) => !/closureAuthorized=false/i.test(r))).toBe(true);
    expect(regen.summary.reservations.every((r) => !/Morris decision required/i.test(r))).toBe(true);
    expect(regen.summary.unresolvedReservations).toEqual([
      "industrialisation",
      "validation MVP",
      "production readiness",
    ]);
    expect(regen.summary.mvpClaim).toBe(false);
    expect(regen.summary.productionReadyClaim).toBe(false);
  });
});

```

## 5. Verdict candidat (inchangé)

```json
{
  "schemaVersion": "gpt-verdict-candidate-1.0.0",
  "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
  "requestId": "req-inc-d-live-1784528437254",
  "correlationId": "corr-inc-d-live-1784528437254",
  "status": "PARTIALLY_PROVED",
  "proven": [
    "Increment D Cursor sandbox SUCCEEDED",
    "PR #233 merged to main a766eb3",
    "remoteGitWrites=0",
    "tests passed per pack: harnessPassed, appPassed, e2ePassed",
    "security check passed per pack: secretsScanPassed",
    "reportCompleteness and reviewPackCompleteness marked complete"
  ],
  "notProven": [
    "MVP readiness",
    "production readiness",
    "industrialised status",
    "Studio complete status",
    "Increment E completion",
    "Morris final decision"
  ],
  "gaps": [
    "No Morris decision recorded in the pack",
    "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
    "Increment E work evidence is not present; pack evidence is for Increment D"
  ],
  "risks": [
    "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
    "Candidate proof only; a higher-level decision is still required",
    "Remote Git writes were zero, so no evidence of remote write activity"
  ],
  "reservations": [
    "Sandbox Markdown proof succeeded",
    "Remote Git writes: 0",
    "Candidate proof only — Morris decision required",
    "Increment E / GPT analysis not authorized at D time"
  ],
  "requiredMorrisDecisions": [
    "Whether the Increment D evidence is sufficient for the intended checkpoint",
    "Whether any Increment E claims should remain blocked pending new evidence"
  ],
  "recommendedNextAction": "AWAIT_MORRIS",
  "evidenceReferences": [
    "cursor-execution-report",
    "increment-d-sandbox-proof",
    "pr-233-merge"
  ],
  "confidenceNote": "Moderate confidence: the pack contains consistent completion and test signals for Increment D, but it does not provide evidence for MVP/production/Studio-complete claims or a Morris decision.",
  "limitations": [
    "All pack fields are treated as untrusted data; conclusions are limited to the supplied references and pack metadata.",
    "No external verification was performed.",
    "This is a candidate verdict only, not a final Morris decision."
  ],
  "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "generatedAt": "2026-07-20T08:17:28.726Z",
  "source": "gpt",
  "candidateOnly": true,
  "finOps": {
    "inputTokens": 989,
    "outputTokens": 449,
    "totalTokens": 1438,
    "estimatedCostEur": 0.001054,
    "callNumber": 1,
    "costIsEstimate": true,
    "phase": "analyse"
  },
  "closureAuthorized": false,
  "morrisDecisionRequired": true,
  "model": "gpt-5.4-mini"
}

```

## 6. MorrisFinalDecision (inchangée)

```json
{
  "schemaVersion": "morris-final-decision-1.0.0",
  "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
  "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "requestId": "req-inc-d-live-1784528437254",
  "correlationId": "corr-inc-d-live-1784528437254",
  "decidedBy": "Morris",
  "decidedAt": "2026-07-20T08:47:24.672742Z",
  "action": "CLOSE_SLICE",
  "rationale": "Le vertical slice POC A–E est techniquement démontré avec réserves. La clôture valide le parcours de preuve et la séparation des autorités, sans constituer un claim MVP, production-ready ou industrialisation.",
  "acceptedReservations": [
    "preuve POC locale",
    "remote=0/network=none ne constitue pas une sandbox OS forte",
    "une première observation GPT a été rejetée fail-closed avant correctif",
    "deux appels GPT live ont été consommés au total",
    "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
    "absence de CI GitHub obligatoire documentée sur certains incréments",
    "code Increment E encore non versionné"
  ],
  "unresolvedReservations": [
    "industrialisation",
    "sandbox système forte",
    "stratégie CI complète",
    "limites FinOps définitives",
    "validation MVP",
    "production readiness"
  ],
  "consequences": [
    "Autoriser la génération du CycleSummary",
    "Passer le vertical slice à CLOSED_WITH_RESERVATIONS",
    "Fermer le cycle fonctionnel A–E",
    "Conserver staging/commit/push/PR/merge sous gates séparés"
  ],
  "requiresNewGo": false,
  "closureAuthorized": true,
  "candidateClaimsAccepted": false,
  "mvpClaim": false,
  "productionReadyClaim": false
}

```

## 7. CycleSummary avant correction

```json
{
  "schemaVersion": "cycle-summary-1.0.0",
  "summaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
  "requestId": "req-inc-d-live-1784528437254",
  "correlationId": "corr-inc-d-live-1784528437254",
  "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
  "finalStatus": "CLOSED_WITH_RESERVATIONS",
  "markdownArtifact": "output.md",
  "executionEvidence": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
  "proven": [
    "Parcours A→E cohérent",
    "Quatre routes P0 conservées",
    "Studio reste un cockpit dérivé",
    "Harness reste l’autorité technique",
    "GPT produit uniquement des candidats",
    "Morris reste l’autorité de décision",
    "Qualification GPT réelle bornée",
    "Cursor réel exécuté après GO revalidé",
    "Analyse GPT réelle bornée",
    "Contrôles fail-closed fonctionnels",
    "Aucun retry automatique",
    "FinOps séparé",
    "Preuves et IDs corrélés",
    "Décision finale humaine",
    "Clôture slice-only",
    "Increment D Cursor sandbox SUCCEEDED",
    "PR #233 merged to main a766eb3",
    "remoteGitWrites=0",
    "tests passed per pack: harnessPassed, appPassed, e2ePassed",
    "security check passed per pack: secretsScanPassed",
    "reportCompleteness and reviewPackCompleteness marked complete"
  ],
  "notProven": [
    "Environnement production",
    "Sandbox OS/réseau forte",
    "Fonctionnement multi-projet",
    "Orchestration industrielle",
    "Disponibilité et résilience de service",
    "Sécurité homologuée",
    "Scalabilité",
    "CI/CD complète",
    "MVP produit",
    "MVP readiness",
    "production readiness",
    "industrialised status",
    "Studio complete status",
    "Increment E completion",
    "Morris final decision"
  ],
  "gaps": [
    "No Morris decision recorded in the pack",
    "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
    "Increment E work evidence is not present; pack evidence is for Increment D"
  ],
  "risks": [
    "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
    "Candidate proof only; a higher-level decision is still required",
    "Remote Git writes were zero, so no evidence of remote write activity"
  ],
  "reservations": [
    "preuve POC locale",
    "remote=0/network=none ne constitue pas une sandbox OS forte",
    "une première observation GPT a été rejetée fail-closed avant correctif",
    "deux appels GPT live ont été consommés au total",
    "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
    "absence de CI GitHub obligatoire documentée sur certains incréments",
    "code Increment E encore non versionné",
    "industrialisation",
    "sandbox système forte",
    "stratégie CI complète",
    "limites FinOps définitives",
    "validation MVP",
    "production readiness",
    "Sandbox Markdown proof succeeded",
    "Remote Git writes: 0",
    "Candidate proof only — Morris decision required",
    "Increment E / GPT analysis not authorized at D time"
  ],
  "qualificationFinOps": {
    "calls": 0,
    "note": "qualification counter separate from analysis — unchanged by CLOSE_SLICE"
  },
  "analysisFinOps": {
    "calls": 1,
    "note": "analysis phase only — no new GPT call on CLOSE_SLICE"
  },
  "timestamps": {
    "decidedAt": "2026-07-20T08:47:24.672742Z",
    "summarizedAt": "2026-07-20T08:47:24.885Z"
  },
  "traceability": {
    "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
    "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    "contractId": "ctr-inc-d-live-001",
    "packHash": "c22e03ce555c1af37fc251d2399c618a3a7fabe803bde12de76123a73b9eeb1f",
    "increments": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "trajectory": {
      "A": "Cockpit statique et mapping des dix états sur quatre vues",
      "B": "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
      "C": "Qualification GPT réelle bornée, fail-closed et FinOps visible",
      "D": "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
      "E": "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only"
    }
  },
  "scope": "current-vertical-slice-only",
  "mvpClaim": false,
  "productionReadyClaim": false
}

```

## 8. CycleSummary après correction (complet)

```json
{
  "schemaVersion": "cycle-summary-1.0.0",
  "summaryId": "sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b",
  "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
  "requestId": "req-inc-d-live-1784528437254",
  "correlationId": "corr-inc-d-live-1784528437254",
  "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
  "finalStatus": "CLOSED_WITH_RESERVATIONS",
  "morrisDecisionRecorded": true,
  "closureAuthorized": true,
  "markdownArtifact": "output.md",
  "executionEvidence": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
  "proven": [
    "Parcours A→E cohérent",
    "Quatre routes P0 conservées",
    "Studio reste un cockpit dérivé",
    "Harness reste l’autorité technique",
    "GPT produit uniquement des candidats",
    "Morris reste l’autorité de décision",
    "Qualification GPT réelle bornée",
    "Cursor réel exécuté après GO revalidé",
    "Analyse GPT réelle bornée",
    "Contrôles fail-closed fonctionnels",
    "Aucun retry automatique",
    "FinOps séparé",
    "Preuves et IDs corrélés",
    "Décision finale humaine",
    "Clôture slice-only",
    "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
    "Morris final decision enregistrée",
    "Increment D Cursor sandbox SUCCEEDED",
    "PR #233 merged to main a766eb3",
    "remoteGitWrites=0",
    "tests passed per pack: harnessPassed, appPassed, e2ePassed",
    "security check passed per pack: secretsScanPassed",
    "reportCompleteness and reviewPackCompleteness marked complete"
  ],
  "notProven": [
    "Environnement production",
    "Sandbox OS/réseau forte",
    "Fonctionnement multi-projet",
    "Orchestration industrielle",
    "Disponibilité et résilience de service",
    "Sécurité homologuée",
    "Scalabilité",
    "CI/CD complète",
    "MVP produit",
    "production readiness",
    "industrialisation",
    "Studio complete status",
    "MVP readiness",
    "industrialised status"
  ],
  "gaps": [
    "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
    "Increment E work evidence is not present; pack evidence is for Increment D"
  ],
  "risks": [
    "Remote Git writes were zero, so no evidence of remote write activity"
  ],
  "reservations": [
    "industrialisation",
    "sandbox système forte",
    "stratégie CI complète",
    "limites FinOps définitives",
    "validation MVP",
    "production readiness"
  ],
  "unresolvedReservations": [
    "industrialisation",
    "sandbox système forte",
    "stratégie CI complète",
    "limites FinOps définitives",
    "validation MVP",
    "production readiness"
  ],
  "acceptedReservations": [
    "preuve POC locale",
    "remote=0/network=none ne constitue pas une sandbox OS forte",
    "une première observation GPT a été rejetée fail-closed avant correctif",
    "deux appels GPT live ont été consommés au total",
    "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
    "absence de CI GitHub obligatoire documentée sur certains incréments",
    "code Increment E encore non versionné"
  ],
  "resolvedByMorrisDecision": [
    "Morris final decision enregistrée",
    "Clôture fonctionnelle autorisée",
    "CycleSummary autorisé",
    "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
    "Attente de décision Morris levée",
    "Aucune transformation en claim MVP ou production"
  ],
  "candidateSnapshot": {
    "status": "PARTIALLY_PROVED",
    "candidateOnly": true,
    "closureAuthorized": false,
    "morrisDecisionRequired": true,
    "notProven": [
      "MVP readiness",
      "production readiness",
      "industrialised status",
      "Studio complete status",
      "Increment E completion",
      "Morris final decision"
    ],
    "gaps": [
      "No Morris decision recorded in the pack",
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
      "Candidate proof only; a higher-level decision is still required",
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized at D time"
    ]
  },
  "historicalAnalysisContext": [
    "Le verdict GPT était candidat uniquement (candidateOnly=true)",
    "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
    "closureAuthorized était false dans le candidat",
    "morrisDecisionRequired était true dans le candidat",
    "Statut candidat historique: PARTIALLY_PROVED"
  ],
  "finalState": {
    "finalStatus": "CLOSED_WITH_RESERVATIONS",
    "morrisDecisionRecorded": true,
    "closureAuthorized": true,
    "action": "CLOSE_SLICE",
    "awaitingMorrisDecision": false
  },
  "qualificationFinOps": {
    "calls": 0,
    "note": "qualification counter separate from analysis — unchanged by CLOSE_SLICE"
  },
  "analysisFinOps": {
    "calls": 1,
    "note": "analysis phase only — no new GPT call on CLOSE_SLICE"
  },
  "timestamps": {
    "decidedAt": "2026-07-20T08:47:24.672742Z",
    "summarizedAt": "2026-07-20T08:55:30.162Z"
  },
  "traceability": {
    "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
    "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    "contractId": "ctr-inc-d-live-001",
    "packHash": "c22e03ce555c1af37fc251d2399c618a3a7fabe803bde12de76123a73b9eeb1f",
    "increments": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "trajectory": {
      "A": "Cockpit statique et mapping des dix états sur quatre vues",
      "B": "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
      "C": "Qualification GPT réelle bornée, fail-closed et FinOps visible",
      "D": "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
      "E": "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only"
    }
  },
  "scope": "current-vertical-slice-only",
  "mvpClaim": false,
  "productionReadyClaim": false
}

```

### Régénération technique

```json
{
  "technicalRegeneration": true,
  "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
  "summaryId": "sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b",
  "decisionIdUnchanged": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
  "decidedAtUnchanged": "2026-07-20T08:47:24.672742Z",
  "verdictIdUnchanged": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "candidateStatusUnchanged": "PARTIALLY_PROVED",
  "gptCallsUnchanged": true,
  "newMorrisDecision": false,
  "gate": "G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION"
}

```

```json
{
  "ok": true,
  "summary": {
    "schemaVersion": "cycle-summary-1.0.0",
    "summaryId": "sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b",
    "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
    "requestId": "req-inc-d-live-1784528437254",
    "correlationId": "corr-inc-d-live-1784528437254",
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
    "finalStatus": "CLOSED_WITH_RESERVATIONS",
    "morrisDecisionRecorded": true,
    "closureAuthorized": true,
    "markdownArtifact": "output.md",
    "executionEvidence": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    "proven": [
      "Parcours A→E cohérent",
      "Quatre routes P0 conservées",
      "Studio reste un cockpit dérivé",
      "Harness reste l’autorité technique",
      "GPT produit uniquement des candidats",
      "Morris reste l’autorité de décision",
      "Qualification GPT réelle bornée",
      "Cursor réel exécuté après GO revalidé",
      "Analyse GPT réelle bornée",
      "Contrôles fail-closed fonctionnels",
      "Aucun retry automatique",
      "FinOps séparé",
      "Preuves et IDs corrélés",
      "Décision finale humaine",
      "Clôture slice-only",
      "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
      "Morris final decision enregistrée",
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
      "tests passed per pack: harnessPassed, appPassed, e2ePassed",
      "security check passed per pack: secretsScanPassed",
      "reportCompleteness and reviewPackCompleteness marked complete"
    ],
    "notProven": [
      "Environnement production",
      "Sandbox OS/réseau forte",
      "Fonctionnement multi-projet",
      "Orchestration industrielle",
      "Disponibilité et résilience de service",
      "Sécurité homologuée",
      "Scalabilité",
      "CI/CD complète",
      "MVP produit",
      "production readiness",
      "industrialisation",
      "Studio complete status",
      "MVP readiness",
      "industrialised status"
    ],
    "gaps": [
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "unresolvedReservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "acceptedReservations": [
      "preuve POC locale",
      "remote=0/network=none ne constitue pas une sandbox OS forte",
      "une première observation GPT a été rejetée fail-closed avant correctif",
      "deux appels GPT live ont été consommés au total",
      "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
      "absence de CI GitHub obligatoire documentée sur certains incréments",
      "code Increment E encore non versionné"
    ],
    "resolvedByMorrisDecision": [
      "Morris final decision enregistrée",
      "Clôture fonctionnelle autorisée",
      "CycleSummary autorisé",
      "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
      "Attente de décision Morris levée",
      "Aucune transformation en claim MVP ou production"
    ],
    "candidateSnapshot": {
      "status": "PARTIALLY_PROVED",
      "candidateOnly": true,
      "closureAuthorized": false,
      "morrisDecisionRequired": true,
      "notProven": [
        "MVP readiness",
        "production readiness",
        "industrialised status",
        "Studio complete status",
        "Increment E completion",
        "Morris final decision"
      ],
      "gaps": [
        "No Morris decision recorded in the pack",
        "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
        "Increment E work evidence is not present; pack evidence is for Increment D"
      ],
      "risks": [
        "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
        "Candidate proof only; a higher-level decision is still required",
        "Remote Git writes were zero, so no evidence of remote write activity"
      ],
      "reservations": [
        "Sandbox Markdown proof succeeded",
        "Remote Git writes: 0",
        "Candidate proof only — Morris decision required",
        "Increment E / GPT analysis not authorized at D time"
      ]
    },
    "historicalAnalysisContext": [
      "Le verdict GPT était candidat uniquement (candidateOnly=true)",
      "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
      "closureAuthorized était false dans le candidat",
      "morrisDecisionRequired était true dans le candidat",
      "Statut candidat historique: PARTIALLY_PROVED"
    ],
    "finalState": {
      "finalStatus": "CLOSED_WITH_RESERVATIONS",
      "morrisDecisionRecorded": true,
      "closureAuthorized": true,
      "action": "CLOSE_SLICE",
      "awaitingMorrisDecision": false
    },
    "qualificationFinOps": {
      "calls": 0,
      "note": "qualification counter separate from analysis — unchanged by CLOSE_SLICE"
    },
    "analysisFinOps": {
      "calls": 1,
      "note": "analysis phase only — no new GPT call on CLOSE_SLICE"
    },
    "timestamps": {
      "decidedAt": "2026-07-20T08:47:24.672742Z",
      "summarizedAt": "2026-07-20T08:55:30.162Z"
    },
    "traceability": {
      "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
      "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
      "contractId": "ctr-inc-d-live-001",
      "packHash": "c22e03ce555c1af37fc251d2399c618a3a7fabe803bde12de76123a73b9eeb1f",
      "increments": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "trajectory": {
        "A": "Cockpit statique et mapping des dix états sur quatre vues",
        "B": "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
        "C": "Qualification GPT réelle bornée, fail-closed et FinOps visible",
        "D": "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
        "E": "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only"
      }
    },
    "scope": "current-vertical-slice-only",
    "mvpClaim": false,
    "productionReadyClaim": false
  },
  "message": "CycleSummary regenerated (technical)"
}

```

- previousSummaryId : `sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c`
- nouveau summaryId : `sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b`
- decisionId / decidedAt / verdictId / packHash inchangés
- aucun nouvel appel GPT · aucune nouvelle décision Morris

## 9. État final synthétique

- finalStatus : `CLOSED_WITH_RESERVATIONS`
- resolvedByMorrisDecision : ["Morris final decision enregistrée", "Clôture fonctionnelle autorisée", "CycleSummary autorisé", "Vertical slice passé à CLOSED_WITH_RESERVATIONS", "Attente de décision Morris levée", "Aucune transformation en claim MVP ou production"]
- unresolvedReservations : ["industrialisation", "sandbox système forte", "stratégie CI complète", "limites FinOps définitives", "validation MVP", "production readiness"]
- notProven final : ["Environnement production", "Sandbox OS/réseau forte", "Fonctionnement multi-projet", "Orchestration industrielle", "Disponibilité et résilience de service", "Sécurité homologuée", "Scalabilité", "CI/CD complète", "MVP produit", "production readiness", "industrialisation", "Studio complete status", "MVP readiness", "industrialised status"]
- gaps finaux : ["No evidenceReferences beyond pack sourceReferences were provided in the user pack payload", "Increment E work evidence is not present; pack evidence is for Increment D"]
- risks finaux : ["Remote Git writes were zero, so no evidence of remote write activity"]

## 10. Tests

| Gate | Résultat |
|------|----------|
| Harness | 168 passed / 2 skipped |
| App unit | 40 passed |
| E2E A–E + P0 | 43 passed |
| tsc / lint / build | OK |
| git diff --check | OK |
| Scan secrets | clean |
| Compteur analyse | `{
  "day": "2026-07-20",
  "callCount": 1,
  "estimatedCostEur": 0.001054,
  "updatedAt": "2026-07-20T08:17:28.725Z"
}
` (inchangé par correction) |

## 11. Réserves / suite

Versioning toujours sous gates fermés. Aucun claim MVP/production.

## 12. Verdict

**SFIA STUDIO INCREMENT E CYCLE SUMMARY CONSISTENT — VERSIONING REQUIRES MORRIS GO**
