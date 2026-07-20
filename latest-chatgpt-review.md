# SFIA Studio Increment E — Review Pack (CLOSE_SLICE)

- **Date/heure/fuseau :** 2026-07-20 10:50:17 CEST
- **Cycle :** 14 — Post-merge / clôture fonctionnelle du vertical slice
- **Profil SFIA :** Critical
- **GO Morris consommés :** G-INCREMENT-E-FINAL-DECISION, G-INCREMENT-E-CLOSE-SLICE
- **Gates toujours fermés :** STAGE, COMMIT, PUSH, PR, MERGE, BRANCH-DELETE, MVP-CLAIM, PRODUCTION-CLAIM

## 1. Truth Check

- Branche : `delivery/sfia-studio-poc-increment-e`
- HEAD / origin/main / merge-base : `a766eb3e5f21b1df288bd07e727be2c20fd1a1d7`
- Staged : vide
- Delivery non poussée
- 2 appels GPT live documentés ; **aucun troisième**
- Verdict candidat live valide disponible

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

## 2. Verdict candidat source (inchangé)

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

Statut candidat : PARTIALLY_PROVED · candidateOnly=true · closureAuthorized=false · morrisDecisionRequired=true  
**Non transformé en APPROVED/VALIDATED.**

## 3. MorrisFinalDecision (complète)

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

## 4. CycleSummary (complet)

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

## 5. Enregistrement CLI

### Résultat

```json
{
  "ok": true,
  "message": "CLOSE_SLICE recorded",
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
  },
  "uiStatus": "CLOSED_WITH_RESERVATIONS"
}

```

### Double décision bloquée

```json
{
  "ok": false,
  "code": "DECISION_ALREADY_RECORDED",
  "message": "verdict verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386 already has decision dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21"
}

```

### Meta clôture

```json
{
  "ok": true,
  "uiStatus": "CLOSED_WITH_RESERVATIONS",
  "message": "CLOSE_SLICE recorded",
  "gptCallsUnchanged": true,
  "gitActions": false,
  "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
  "candidateStatusUnchanged": "PARTIALLY_PROVED"
}

```

## 6. Contrats / code

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

export interface CycleSummary {
  schemaVersion: "cycle-summary-1.0.0";
  summaryId: string;
  requestId: string;
  correlationId: string;
  verdictId: string;
  decisionId: string;
  finalStatus: "CLOSED_WITH_RESERVATIONS" | string;
  markdownArtifact: string;
  executionEvidence: string;
  proven: string[];
  notProven: string[];
  gaps: string[];
  risks: string[];
  reservations: string[];
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
 */

import { randomUUID } from "node:crypto";
import type { GptVerdictCandidate } from "../types/gptVerdictCandidate.js";
import type { EvidenceAnalysisPack } from "../types/evidenceAnalysisPack.js";
import type { CycleSummary, MorrisFinalAction, MorrisFinalDecision } from "../types/morrisFinalDecision.js";

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

export function buildCycleSummary(input: {
  decision: MorrisFinalDecision;
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  analysisCalls: number;
  qualificationCalls?: number;
}): CycleSummary {
  if (!input.decision.closureAuthorized || input.decision.action !== "CLOSE_SLICE") {
    throw new Error("CycleSummary only after CLOSE_SLICE");
  }

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
    ...input.verdict.proven,
  ];

  const trajectoryNotProven = [
    "Environnement production",
    "Sandbox OS/réseau forte",
    "Fonctionnement multi-projet",
    "Orchestration industrielle",
    "Disponibilité et résilience de service",
    "Sécurité homologuée",
    "Scalabilité",
    "CI/CD complète",
    "MVP produit",
    ...input.verdict.notProven,
  ];

  const reservations = [
    ...input.decision.acceptedReservations,
    ...input.decision.unresolvedReservations,
    ...input.verdict.reservations,
    ...input.pack.reservations,
  ];
  const uniqueReservations = [...new Set(reservations)];

  return {
    schemaVersion: "cycle-summary-1.0.0",
    summaryId: `sum-inc-e-${randomUUID()}`,
    requestId: input.verdict.requestId,
    correlationId: input.verdict.correlationId,
    verdictId: input.verdict.verdictId,
    decisionId: input.decision.decisionId,
    finalStatus: "CLOSED_WITH_RESERVATIONS",
    markdownArtifact: input.pack.filesCreated[0] ?? "projects/sfia-studio/.sandbox/increment-d/output.md",
    executionEvidence: input.pack.executionId,
    proven: trajectoryProven,
    notProven: trajectoryNotProven,
    gaps: [...input.verdict.gaps],
    risks: [...input.verdict.risks],
    reservations: uniqueReservations,
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
      summarizedAt: new Date().toISOString(),
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

### Diff `cli.ts`

```diff
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
index 48c13b5..42c52c0 100644
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
+import { recordMorrisFinalDecision } from "./increment-e/morrisDecision.js";
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
@@ -33,6 +39,9 @@ Commands:
   qualify-fixture <payload.json>    # Increment C qualification fixture (no OpenAI)
   qualify-live <payload.json>       # Increment C live qualification (requires flags + key)
   inc-d-run <payload.json>          # Increment D Cursor sandbox (fixture fake or live)
+  analyse-fixture <payload.json>    # Increment E GPT analysis fixture
+  analyse-live <payload.json>       # Increment E live GPT analysis (requires flags + key)
+  morris-decide <payload.json>      # Increment E record MorrisFinalDecision (+ CycleSummary if CLOSE_SLICE)
 `);
   process.exit(2);
 }
@@ -166,6 +175,99 @@ async function main(): Promise<void> {
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
   usage();
 }
 

```

### Artefact UI

### `app/lib/harness/incrementEClosureArtifact.ts`

```typescript
/** Recorded Increment E Morris CLOSE_SLICE artifact (read-only UI). */
export const incrementEClosureArtifact = {
  "uiStatus": "CLOSED_WITH_RESERVATIONS",
  "gatesConsumed": [
    "G-INCREMENT-E-FINAL-DECISION",
    "G-INCREMENT-E-CLOSE-SLICE"
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
  },
  "noGitAction": true,
  "noNewGptCall": true,
  "totalLiveGptCalls": 2
} as const;

```

### `VsDecisionScreen.tsx` (contenu complet)

```tsx
"use client";

import { useSearchParams } from "next/navigation";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  HarnessStatusPanel,
  IdStrip,
  VariantBanner,
} from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { incrementEClosureArtifact } from "@/lib/harness/incrementEClosureArtifact";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import type { VsFinalAction, VsGateAction } from "@/lib/vertical-slice/types";
import styles from "@/components/vertical-slice/vs-panels.module.css";

const gateOptions: {
  action: VsGateAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "GO",
    title: "GO",
    subtitle: "Autoriser l'exécution fixture — revalidation GO côté harness",
  },
  {
    action: "NO-GO",
    title: "NO-GO",
    subtitle: "Refuser l'exécution — refus harness, pas de faux succès",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Retour qualification — nouvelle consommation FinOps visible",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Action destructive — conséquence : cycle abandonné",
    danger: true,
  },
];

const finalOptions: {
  action: VsFinalAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "CLOTURER",
    title: "Accepter et clôturer",
    subtitle: "Clôture slice-only — aucun claim MVP",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Revoir le verdict candidat",
  },
  {
    action: "RELANCER",
    title: "Relancer sous nouveau GO",
    subtitle: "Ré-exécution uniquement avec nouveau GO — GO D non réutilisable",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Fin du cycle sans clôture positive",
    danger: true,
  },
];

export function VsDecisionScreen() {
  const searchParams = useSearchParams();
  const showIncEClosure = searchParams.get("closure") === "inc-e";
  const {
    stateId,
    gateAction,
    selectGateAction,
    abandonConfirmOpen,
    closeAbandonConfirm,
    confirmAbandon,
    confirmGate,
    gateConfirmed,
    abandoned,
    selectFinalAction,
    finalAction,
    setStateId,
  } = useVsDemo();

  const isFinal = stateId === "VS-UX-09";
  const isGoInvalid = stateId === "VS-UX-VAR-GO-INVALID";
  const isGate = stateId === "VS-UX-04" || isGoInvalid;
  const closure = incrementEClosureArtifact;
  const decisionLocked = showIncEClosure && isFinal;

  return (
    <div className={styles.panel} data-testid="vs-decision">
      <IdStrip />
      <HarnessStatusPanel />

      {isGoInvalid ? (
        <VariantBanner tone="warn" title="GO invalide — ancrage divergé">
          <p>
            HEAD fixture courant : <code>{vsFixture.headInvalidated.slice(0, 12)}…</code> ≠
            HEAD ancré : <code>{vsFixture.head.slice(0, 12)}…</code>
          </p>
          <p>
            contractHash / branche / allowlist doivent être revalidés. Nouveau gate
            requis. Ceci n&apos;est <strong>pas</strong> un Abandonner ni un NO-GO.
          </p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-04")}>
              Rouvrir le gate
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-decision-hero">
        <p className={styles.heroEyebrow}>
          {isFinal ? "DÉCISION MORRIS FINALE" : "GATE MORRIS · EXÉCUTION"}
        </p>
        <h2 id="vs-decision-hero" className={styles.heroTitle}>
          {isFinal
            ? "Décider de la clôture avec le verdict candidat"
            : "Décider avec le dossier d'ancrage — quatre actions distinctes"}
        </h2>
        <p className={styles.heroText}>
          STOP ≠ NO-GO ≠ Abandonner. Timeout ≠ GO. Aucune action Git distante.
        </p>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="vs-dossier-title">
          <p className={styles.fieldLabel}>DOSSIER DE DÉCISION (fixture)</p>
          <h2 id="vs-dossier-title" className={styles.cardTitle}>
            Ancrage GO — requestId / contrat / Git
          </h2>
          <p className={styles.fieldLabel}>requestId</p>
          <p className={styles.fieldValue}>{vsFixture.requestId}</p>
          <p className={styles.fieldLabel}>contractId / hash</p>
          <p className={styles.fieldValue}>
            {vsFixture.contractId} · {vsFixture.contractHash}
          </p>
          <p className={styles.fieldLabel}>Branche · HEAD</p>
          <p className={styles.fieldValue}>
            {vsFixture.branch} · {vsFixture.head}
          </p>
          <p className={styles.fieldLabel}>Allowlist</p>
          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
          <p className={styles.fieldLabel}>Autorité</p>
          <p className={styles.fieldValue}>{vsFixture.authority}</p>
          <p className={styles.fieldLabel}>Horodatage</p>
          <p className={styles.fieldValue}>
            {vsFixture.timestamp} ({vsFixture.timezone})
          </p>
          <p className={styles.muted}>Timeout ≠ GO (rappel affiché).</p>
          {!isFinal ? (
            <div className={styles.actions}>
              <CtaButton
                variant="secondary"
                onClick={() => setStateId("VS-UX-VAR-GO-INVALID")}
                data-testid="vs-simulate-go-invalid"
              >
                Simuler GO invalide
              </CtaButton>
            </div>
          ) : null}
        </section>

        <section
          className={styles.card}
          aria-labelledby="vs-morris-actions-title"
          data-testid="vs-morris-actions"
        >
          <p className={styles.fieldLabel}>Décision Morris — autorité humaine</p>
          <h2 id="vs-morris-actions-title" className={styles.cardTitle}>
            {isFinal ? "Décision finale" : "Quatre actions du gate"}
          </h2>

          {isGate ? (
            <div className={styles.optionGrid} role="group" aria-label="Actions gate Morris">
              {gateOptions.map((opt) => {
                const selected = gateAction === opt.action;
                const className = opt.danger
                  ? selected
                    ? styles.optionDangerSelected
                    : styles.optionDanger
                  : selected
                    ? styles.optionSelected
                    : styles.option;
                return (
                  <button
                    key={opt.action}
                    type="button"
                    className={className}
                    aria-pressed={selected}
                    data-testid={`vs-gate-${opt.action}`}
                    aria-label={
                      opt.action === "ABANDONNER"
                        ? "Abandonner le cycle"
                        : opt.title
                    }
                    onClick={() => selectGateAction(opt.action)}
                  >
                    <StatusPill tone={opt.danger ? "pink" : "blueFlush"}>
                      {opt.title}
                    </StatusPill>
                    <p className={styles.optionTitle}>{opt.title}</p>
                    <p className={styles.optionSub}>{opt.subtitle}</p>
                  </button>
                );
              })}
            </div>
          ) : null}

          {isFinal ? (
            <>
              {decisionLocked ? (
                <section
                  className={styles.card}
                  data-testid="vs-inc-e-morris-decision"
                  aria-labelledby="vs-inc-e-decision-title"
                >
                  <StatusPill tone="greenFlush">CLOSE_SLICE · Morris</StatusPill>
                  <h2 id="vs-inc-e-decision-title" className={styles.cardTitle}>
                    Décision finale enregistrée
                  </h2>
                  <p className={styles.fieldLabel}>decisionId</p>
                  <p className={styles.fieldValue}>{closure.decision.decisionId}</p>
                  <p className={styles.fieldLabel}>verdictId (candidat inchangé)</p>
                  <p className={styles.fieldValue}>
                    {closure.decision.verdictId} · {closure.candidateSnapshot.status}
                  </p>
                  <p className={styles.fieldLabel}>Décidé par · date</p>
                  <p className={styles.fieldValue} data-testid="vs-inc-e-decided-at">
                    {closure.decision.decidedBy} · {closure.decision.decidedAt}
                  </p>
                  <p className={styles.fieldLabel}>Justification</p>
                  <p className={styles.fieldValue}>{closure.decision.rationale}</p>
                  <p className={styles.fieldLabel}>Réserves acceptées</p>
                  <ul className={styles.list} data-testid="vs-inc-e-accepted-reservations">
                    {closure.decision.acceptedReservations.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className={styles.fieldLabel}>Réserves non résolues</p>
                  <ul className={styles.list} data-testid="vs-inc-e-unresolved-reservations">
                    {closure.decision.unresolvedReservations.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className={styles.fieldLabel}>Conséquences</p>
                  <ul className={styles.list}>
                    {closure.decision.consequences.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <p className={styles.forbidden}>
                    Aucune action Git · mvpClaim=false · productionReadyClaim=false ·
                    seconde décision bloquée
                  </p>
                  <div className={styles.actions}>
                    <CtaButton
                      onClick={() => setStateId("VS-UX-10")}
                      data-testid="vs-inc-e-open-summary"
                    >
                      Ouvrir la synthèse slice-only
                    </CtaButton>
                  </div>
                </section>
              ) : (
                <div className={styles.optionGrid} role="group" aria-label="Actions décision finale">
                  {finalOptions.map((opt) => {
                    const selected = finalAction === opt.action;
                    const className = opt.danger
                      ? selected
                        ? styles.optionDangerSelected
                        : styles.optionDanger
                      : selected
                        ? styles.optionSelected
                        : styles.option;
                    return (
                      <button
                        key={opt.action}
                        type="button"
                        className={className}
                        aria-pressed={selected}
                        data-testid={`vs-final-${opt.action}`}
                        aria-label={
                          opt.action === "ABANDONNER"
                            ? "Abandonner le cycle"
                            : opt.title
                        }
                        onClick={() => selectFinalAction(opt.action)}
                      >
                        <StatusPill tone={opt.danger ? "pink" : "greenFlush"}>
                          {opt.title}
                        </StatusPill>
                        <p className={styles.optionTitle}>{opt.title}</p>
                        <p className={styles.optionSub}>{opt.subtitle}</p>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          ) : null}

          {abandonConfirmOpen ? (
            <div
              className={styles.confirmBox}
              role="dialog"
              aria-modal="true"
              aria-labelledby="vs-abandon-confirm-title"
              data-testid="vs-abandon-confirm"
            >
              <p id="vs-abandon-confirm-title" className={styles.optionTitle}>
                Confirmer l&apos;abandon du cycle
              </p>
              <p className={styles.optionSub}>
                Conséquence explicite : état <strong>abandonné</strong>. Aucune
                écriture Git distante. Action destructive (danger textuel + visuel).
              </p>
              <div className={styles.actions}>
                <CtaButton
                  variant="danger"
                  onClick={confirmAbandon}
                  data-testid="vs-abandon-confirm-yes"
                  aria-label="Confirmer abandonner le cycle"
                >
                  Confirmer — Abandonner le cycle
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={closeAbandonConfirm}
                  data-testid="vs-abandon-confirm-no"
                >
                  Annuler
                </CtaButton>
              </div>
            </div>
          ) : null}

          {isGate && gateAction && gateAction !== "ABANDONNER" ? (
            <div className={styles.actions}>
              <CtaButton
                onClick={confirmGate}
                disabled={!gateAction}
                data-testid="vs-gate-confirm"
              >
                Confirmer {gateAction}
              </CtaButton>
            </div>
          ) : null}

          {gateConfirmed || abandoned ? (
            <p className={styles.muted} data-testid="vs-gate-result">
              {abandoned
                ? "Résultat fixture : cycle abandonné"
                : `Résultat fixture : ${gateAction} confirmé`}
            </p>
          ) : null}

          <p className={styles.muted}>
            Simulation Increment A — aucun effet Git / Cursor / GPT live.
          </p>
        </section>
      </div>
    </div>
  );
}

```

### `VsSyntheseScreen.tsx` (contenu complet)

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
          <p className={styles.fieldValue}>
            {closure.decision.action} · {closure.decision.decisionId}
          </p>
          <p className={styles.fieldLabel}>Candidat GPT (inchangé)</p>
          <p className={styles.fieldValue}>
            {closure.candidateSnapshot.status} · candidateOnly ·
            closureAuthorized={String(closure.candidateSnapshot.closureAuthorized)}
          </p>
          <p className={styles.fieldLabel}>Parcours A–E</p>
          <ul className={styles.list} data-testid="vs-inc-e-trajectory">
            {Object.entries(s.traceability.trajectory ?? {}).map(([k, v]) => (
              <li key={k}>
                <strong>Increment {k}</strong> — {v}
              </li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Prouvé</p>
          <ul className={styles.list}>
            {s.proven.slice(0, 16).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Non prouvé</p>
          <ul className={styles.list}>
            {s.notProven.slice(0, 12).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Réserves</p>
          <ul className={styles.list} data-testid="vs-inc-e-summary-reservations">
            {s.reservations.map((r) => (
              <li key={r}>{r}</li>
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

## 7. UI

- `/decision?vs=VS-UX-09&closure=inc-e` : CLOSE_SLICE, date fuseau, justification, réserves acceptées/non résolues, conséquences, seconde décision désactivée, pas d’action Git
- `/synthese?vs=VS-UX-10&closure=inc-e` : CLOSED_WITH_RESERVATIONS, parcours A–E, prouvé/non prouvé/réserves, FinOps séparé, badges POC / Slice clôturé avec réserves / Aucun claim MVP / Non production-ready
- Synthèse sans `closure=inc-e` reste fixture démo (pas d’auto-clôture)

## 8. Tests

| Gate | Résultat |
|------|----------|
| Harness | 167 passed / 2 skipped |
| App unit | 40 passed |
| E2E A–E + P0 | 43 passed |
| tsc / lint / build | OK |
| git diff --check | OK |
| Scan secrets | clean |
| Nouvel appel GPT | **non** (live files = 2) |
| Compteur analyse | inchangé par CLOSE_SLICE (`{
  "day": "2026-07-20",
  "callCount": 1,
  "estimatedCostEur": 0.001054,
  "updatedAt": "2026-07-20T08:17:28.725Z"
}
`) |

## 9. Réserves

Acceptées et non résolues telles que dans MorrisFinalDecision. Pas de reformulation optimiste. Pas de claim MVP/production.

## 10. Décision Morris suivante attendue

Versioning (stage/commit/push/PR) sous gates séparés encore fermés. Aucun claim MVP.

## 11. Verdict

**SFIA STUDIO VERTICAL SLICE A–E CLOSED WITH RESERVATIONS — VERSIONING REQUIRES MORRIS GO**
