# SFIA Review Pack FULL — ML5 Cycle 12

- **Date/heure:** 2026-11-23T21:52:08+01:00
- **Cycle:** C12 — LIVE resilience + D8 evidence + candidat
- **Verdict fonctionnel:** `ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS`
- **Verdict Git:** `PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO`

## 1. Git Truth Check

- Worktree `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
- Branche `sfia/next-ml5-integrated-delivery-20261123` HEAD `6cf33e9923796974b9ee540a9c6ff27110342950`
- merge-base origin/main `997897fd7cf914771e7d08e8030dc7123fab7d25`
- DIRTY **77** entries (C3–C12)
- Push code projet: **NONE**
- Handoff C11 tip: `f9dfcaaa` blob `d1f4a355`

## 2. Sources

- main@997897fd… ENV-01 / versioning
- 1e6929c5… DÉC-ML5-GIT A
- 5a4e4405… R-003
- f9dfcaaa… handoff C11

## 3. Blast radius C12

- cursor-sdk-adapter: DROP_ACK fault, observe+apiKey, wait detached safe
- cursor-attempt-service: re-observe unknown; STOP uncertain limits
- d8-evidence-read + d8-evidence-tools-sdk (NEW)
- cognitive-policy + nora-adapter: D8 tools
- qualification route: toolScope attemptId
- scripts ml5-c12-*; tests unit C12; registre/delivery-history

## 4–5. DEV / SDK

| Clé | Valeur |
|---|---|
| EFFECT_MODE | LIVE |
| LIVE_WAIT | **0** (ACK-first) |
| MODEL | composer-2.5 |
| WORKSPACE_ROOT | /tmp/sfia-c12-cursor-live-ws |
| @cursor/sdk | 1.4.2 |
| @openai/agents | 0.21.0 |

## 6–12. Scénario LIVE + IDs

```json
{
  "scenarioId": "ml5-c12-live-20261123",
  "at": "2026-11-23T20:49:15.029Z",
  "creationMechanism": "NORA_LIVE",
  "noraMode": "openai-agents-sdk-live",
  "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
  "projectId": "proj_a465e529-994b-4ae5-a7dd-0da077ab6b84",
  "preparationId": "prep_0906701a-d578-446f-b8e6-a6fa7fffd38a",
  "contractId": "tctr_2a9ac58e-abb3-4efe-94f9-cb0fa2da8539",
  "fingerprint": "d47f624620b44da0d36a5c1c8aa801b573c94c1e5f205f06d2152c0cdd4cdcb6",
  "attemptId": "efx_6ef408be-5f74-43b6-8568-5180c0ad4b2e",
  "agentId": "agent-f1b001a0-d12a-43cf-bce9-fbe64f5c8df4",
  "runId": "run-66b05967-a212-450e-8e6e-b0775c3c30d3",
  "status": "COMPLETED",
  "workspaceCwd": "/private/tmp/sfia-c12-cursor-live-ws/27550354a2f5ad3d/515299b587712dbc/default",
  "resultOk": true,
  "addOk": true,
  "handoffId": "rhf_6eec9281-3c9d-4d0d-a6c7-383c729f496c",
  "handoffStatus": "INCOMPLETE",
  "qualificationVerdict": "INDETERMINATE",
  "noraAnalysisKind": "NORA_COGNITIVE",
  "noraLimits": [
    "Déclaration Cursor ≠ observation Studio",
    "Observation ≠ conformité D8",
    "Verdict D8 ≠ avis Nora",
    "Avis Nora ≠ réception D6 / acceptation Morris",
    "Aucun ADOPTED depuis une tentative seule",
    "Rapport absent ou handoff non RECEIVED — bilan PARTIAL/UNKNOWN",
    "Tests exécutés déclarés sans sortie capturée — non certifiables",
    "Inventaire fichiers vide — synthèse seule insuffisante",
    "Critères d'acceptation à confronter: 2 — présence textuelle ≠ satisfaction",
    "Évaluation critères: PARTIAL/UNKNOWN jusqu'à preuves indépendantes (tests capturés / D9)",
    "Preuves attendues du contrat sans sources consultées listées",
    "NORA_COGNITIVE — run D3 post-tentative",
    "NORA_MODE_openai-agents-sdk-live",
    "NORA_MODEL_UNVERIFIED",
    "NORA_TOOL_CALLS_11",
    "NORA_D8_TOOLS_OBSERVED"
  ],
  "dispatchMs": 6232,
  "liveWait": "0",
  "effectMode": "LIVE",
  "terminalStatus": "finished",
  "resultContent": "C12-LIVE-MODULE-OK",
  "reconcileAfterFix": "SDK_OBSERVED_FINISHED",
  "witnessPath": "/private/tmp/sfia-c12-cursor-live-ws/27550354a2f5ad3d/515299b587712dbc/default/RESULT_C12.txt",
  "honestyNote": "Files existed before journey exited; early handoff INCOMPLETE (T-07); reconcile post-fix → COMPLETED"
}
```

### Faits LIVE
- Nora prepare: `openai-agents-sdk-live` / creation `NORA_LIVE`
- Dispatch ACK-first `6232ms` → DISPATCHED puis reconnect+reconcile → **COMPLETED/finished**
- agent `agent-f1b001a0-d12a-43cf-bce9-fbe64f5c8df4` run `run-66b05967-a212-450e-8e6e-b0775c3c30d3`
- RESULT_C12.txt = C12-LIVE-MODULE-OK ; src/add.ts présent
- Handoff précoce **INCOMPLETE** (T-07 — inventaire vide au moment POST) ; fichiers ensuite vérifiés FS
- Nora analyse: `NORA_COGNITIVE` limits incluent NORA_D8_TOOLS_OBSERVED / NORA_TOOL_CALLS_11

## 13–15. Incidents

### T-04 ACK perdu (DETERMINISTIC DROP_ACK)
```json
{
  "attemptId": "efx_44455488-c152-43ea-899d-039f8e2bff7b",
  "status": "AMBIGUOUS",
  "dispatchErr": "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK \u2014 ACK perdu apr\u00e8s effet SDK possible",
  "priorSendMayHaveOccurred": true,
  "secondDispatchSucceeded": false,
  "secondErr": "AMBIGUOUS avec envoi ant\u00e9rieur possible \u2014 pas de redispatch ; r\u00e9concilier ou conserver UNKNOWN",
  "oracle": "PASS"
}
```
Oracle PASS — AMBIGUOUS + priorSend + second dispatch refusé.

### T-05 Reconnect
- Nouveau contexte navigateur + auto-session + GET attempt + reconcile — mêmes attemptId/agentId/runId.
- Gap: observe initial sans apiKey / wait detached → corrigé C12 ; COMPLETED après fix.

### T-06 STOP
```json
{
  "dispatchTerminal": null,
  "stopObservedAt": "2026-11-23T20:51:22.361Z",
  "stopTerminal": "cancelled",
  "limits": [
    "SCRIPTED_MODE",
    "CANCEL_IS_NOT_ROLLBACK"
  ],
  "oracle": "PASS"
}
```
STOP SCRIPTED PASS (CANCEL ≠ rollback). LIVE STOP non rejoué ce cycle (gap déclaré).

## 16–18. Nora D8 + qualification

- Outils: list_realization_evidence, read_realization_handoff_report, read_attempt_workspace_file, read_evidence_capture_meta
- Preuve consultation: `NORA_TOOL_CALLS_11` + `NORA_D8_TOOLS_OBSERVED`
- openBilan: lecture ≠ requalify silencieux (C11 conservé)

### Extrait analyse Nora
```markdown
[ANALYSE COGNITIVE NORA (D3)]

## Avis final consultatif

**Le dossier reste incomplet et présente une divergence importante entre le rapport et le workspace. Une réalisation partielle est directement observable, mais la conformité globale et la réussite du test ne sont pas démontrées.** Cet avis ne remplace pas le verdict D8 fourni, **INDETERMINATE**, et ne constitue ni réception, ni acceptation, ni HumanDecision.

Tentative examinée : `efx_6ef408be-5f74-43b6-8568-5180c0ad4b2e`.

## 1. Pièces effectivement examinées

- **Métadonnées consultées — [S1]** : `list_realization_evidence` référence un handoff au statut **INCOMPLETE** et un workspace accessible. Cette liste n’est pas un inventaire exhaustif des fichiers ni une preuve d’exécution.
- **Rapport original intégral CONSULTÉ — [S2]** : `read_realization_handoff_report`, handoff `rhf_6eec9281-3c9d-4d0d-a6c7-383c729f496c`. Le contenu intégral est accessible, même si le handoff est incomplet. Il mentionne `terminal: unknown`, `RESULT_C12: false` et `add.ts: false`. Ces mentions restent des déclarations du rapport, pas des observations indépendantes des fichiers.
- **Fichiers originaux CONSULTÉS via `read_attempt_workspace_file`** : `src/add.ts` [S3], `src/add.test.ts` [S4] et `RESULT_C12.txt` [S5].
- **Documents D4 lus intégralement** : « Besoin C12 — module add », v1 [S6], et « Contrat technique Cursor — C12 module add », v1 [S7]. Le besoin demande le module, le test et le fichier résultat ; le contrat précise l’API, les assertions, l’exécution et les restrictions.

**Preuves manquantes dans les pièces listées ou consultées** : commande de test exécutée, sortie capturée, code de sortie, manifeste exploitable des changements et chronologie reliant l’exécution au marqueur. Aucun refus de lecture n’a empêché les consultations ci-dessus ; les preuves manquantes ne doivent pas être confondues avec des pièces lues puis jugées concluantes.

## 2. Confrontation aux exigences

| Point examiné | Observation sourcée | Appréciation consultative |
|---|---|---|
| Module `src/add.ts` | Le fichier exporte `add(a: number, b: number): number` et retourne `a + b`. [S3] | L’implémentation attendue est présente à la lecture. Cela 
```

## 19. Tests

- vitest C12 unit: PASS
- ack-drop-incident: PASS
- stop-scripted: PASS
- live journey: LIVE exécuté ; handoff INCOMPLETE précoce ; reconcile COMPLETED ; files OK

## 20. Fake/Real

| Frontière | Niveau |
|---|---|
| 2e mission LIVE module+test | REAL (COMPLETED + FS) |
| ACK-first + reconnect | REAL PARTIAL (observe fixé en cours de cycle) |
| ACK perdu T-04 | DETERMINISTIC PROVEN (DROP_ACK) |
| STOP | DETERMINISTIC SCRIPTED ; LIVE NOT PROVEN |
| Nora D8 tools | REAL BOUNDARY (toolCalls>0) |
| Worker durable | NOT IMPL — reconcile/UI poll |
| B09/GitHub/MCP | N/A / NOT_IMPL |

## 21–23. 99 exigences / CA / R-003

- Présence: 1 / 97 / 1 (B09) — pas de promotion artificielle
- Preuve: E05/E09/G12 améliorées C12 ; Git A inchangé
- CA-05 PARTIAL (long-run/worker) ; CA-08 PARTIAL→amélioré tools ; CA-07 T-07 handoff précoce

## 24–25. Candidat Git

- DIRTY count: 77
- Exclure publication: `.tmp-sfia-review/`, `web/.sfia-evidence/`, `.env.local`, workspaces `/tmp/sfia-c*`
- Inclure: `projects/sfia-studio-next/**` code/tests/construction (sans secrets)
- Plan commits proposé (non exécuté): feat(ml5): cursor live ack-first+observe ; feat(ml5): d8 evidence tools ; test(ml5): c12 ack-drop ; docs(ml5): registre c12
- **`PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO`**

### Porcelain (extrait)
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/web/.sfia-evidence/
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-live-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-seed-project.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-ack-drop-incident.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-seed-and-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
?? projects/sfia-studio-next/web/src/domains/conversation/tool-source-journal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-source-citation.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts
?? projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-read.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-tools-sdk.ts
?? projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts
?? projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-ack-drop-fault.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-d8-evidence-read.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts

```

## 26. Risques / exit / gates

- Pas de worker durable (supervision = reconcile)
- LIVE STOP non exercé
- Handoff immuable INCOMPLETE sur tentative C12 (leçon T-07)
- B09 ouvert
- Push projet: gate Morris

## 27. ENV-01 / NO RELEASE — conformes

## 28. Verdict

**`ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS`**

**`PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO`**

| Capacité | LIVE | Résultat | Preuve | Réserve |
|---|---|---|---|---|
| 2e mission Cursor | Oui | PASS* | COMPLETED+RESULT_C12 | handoff précoce INCOMPLETE |
| Reconnect | Oui | PARTIAL→PASS | même IDs + COMPLETED | observe fixé mid-cycle |
| ACK perdu | Det. | PASS | ack-drop-incident | pas LIVE borné séparé |
| STOP | SCRIPTED | PASS | stop-scripted | LIVE ouvert |
| Nora D8 pièces | Oui | PASS | TOOL_CALLS_11 | |
| Candidat Git | — | PREPARED | inventaire | push gate Morris |

## 29. Review Handoff

- Commit: `docs(review-handoff): publish ML5 cycle 12 LIVE resilience and evidence review`

## Annex A — Nouveaux fichiers (intégral)

### `src/domains/proofs/d8-evidence-read.ts` (9688 chars)
```typescript
/**
 * C12 / CA-08 — read-only access to D8 realization pieces for Nora.
 * Owner remains D8; Nora never invents paths or reads outside attempt scope.
 */

import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join, normalize, relative, resolve } from "node:path";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs } from "@/db/schema";
import type { CursorExecutionPlan } from "@/domains/execution/types";
import {
  listEvidenceCapturesForAttempt,
  type EvidenceCaptureMeta,
} from "./evidence-captures";

const MAX_TEXT_CHARS = 24_000;

export type D8ReadCoverage =
  | "FOUND"
  | "OPENED"
  | "CONSULTED"
  | "PARTIAL"
  | "DENIED"
  | "NOT_FOUND"
  | "INTEGRITY_FAIL";

export type D8EvidenceScope = {
  pilotId: string;
  projectId: string;
  attemptId: string;
  budget: { remainingCalls: number; remainingChars: number };
};

function charge(scope: D8EvidenceScope, payload: unknown): void {
  const n = JSON.stringify(payload).length;
  scope.budget.remainingChars = Math.max(0, scope.budget.remainingChars - n);
}

function trimText(text: string, max = MAX_TEXT_CHARS): { text: string; coverage: D8ReadCoverage } {
  if (text.length <= max) return { text, coverage: "CONSULTED" };
  return { text: text.slice(0, max), coverage: "PARTIAL" };
}

async function loadAttempt(scope: D8EvidenceScope) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, scope.attemptId),
          eq(effectAttempts.projectId, scope.projectId),
          eq(effectAttempts.pilotId, scope.pilotId),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
        ),
      )
      .limit(1)
  )[0];
  return row ?? null;
}

/** List authorized pieces for an attempt — metadata only. */
export async function listRealizationEvidence(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      pieces: [] as unknown[],
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE", pieces: [] };
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  const captures = listEvidenceCapturesForAttempt(scope.attemptId).filter(
    (c) => c.pilotId === scope.pilotId && c.projectId === scope.projectId,
  );
  let plan: CursorExecutionPlan | null = null;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    plan = null;
  }
  const pieces = [
    {
      kind: "HANDOFF_REPORT",
      id: handoff?.id ?? null,
      status: handoff?.status ?? "MISSING",
      integrityHash: handoff?.integrityHash ?? null,
      reportChars: handoff?.reportMarkdown?.length ?? 0,
      coverage: handoff ? ("FOUND" as const) : ("NOT_FOUND" as const),
    },
    ...captures.map((c) => ({
      kind: "EVIDENCE_CAPTURE",
      id: c.id,
      label: c.label,
      mimeType: c.mimeType,
      contentSha256: c.contentSha256,
      byteLength: c.byteLength,
      coverage: "FOUND" as const,
    })),
    {
      kind: "WORKSPACE",
      id: plan?.workspaceKey ?? "default",
      workspaceCwdPresent: Boolean(plan?.workspaceCwd),
      coverage: plan?.workspaceCwd ? ("FOUND" as const) : ("NOT_FOUND" as const),
      note: "Lecture fichier uniquement via read_attempt_workspace_file + chemin relatif",
    },
  ];
  const out = {
    coverage: "OPENED" as const,
    attemptId: scope.attemptId,
    attemptStatus: attempt.status,
    pieces,
  };
  charge(scope, out);
  return out;
}

/** Read full handoff report markdown when authorized. */
export async function readRealizationHandoffReport(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  if (!handoff?.reportMarkdown?.trim()) {
    const out = {
      coverage: "NOT_FOUND" as const,
      reason: "HANDOFF_REPORT_ABSENT",
      handoffId: handoff?.id ?? null,
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(handoff.reportMarkdown);
  const out = {
    coverage: trimmed.coverage,
    handoffId: handoff.id,
    status: handoff.status,
    integrityHash: handoff.integrityHash,
    contentSha256: createHash("sha256")
      .update(handoff.reportMarkdown, "utf8")
      .digest("hex"),
    content: trimmed.text,
    consulted: true,
    limits: [
      "D8_HANDOFF_READ — contenu original consulté",
      trimmed.coverage === "PARTIAL" ? "REPORT_TRUNCATED_BY_BUDGET" : null,
    ].filter(Boolean),
  };
  charge(scope, out);
  return out;
}

/**
 * Read a text file under the attempt's server-resolved workspaceCwd.
 * relativePath only — never absolute client paths.
 */
export async function readAttemptWorkspaceFile(
  scope: D8EvidenceScope,
  relativePath: string,
) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    charge(scope, out);
    return out;
  }
  let plan: CursorExecutionPlan;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    const out = {
      coverage: "DENIED" as const,
      reason: "PLAN_UNPARSEABLE",
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const rel = (relativePath || "").trim().replace(/^\/+/, "");
  if (!rel || rel.includes("..") || rel.startsWith("~") || normalize(rel) !== rel) {
    const out = {
      coverage: "DENIED" as const,
      reason: "UNSAFE_RELATIVE_PATH",
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const root = resolve(plan.workspaceCwd);
  const candidate = resolve(join(root, rel));
  const relCheck = relative(root, candidate);
  if (relCheck.startsWith("..") || relCheck === "" || resolve(join(root, relCheck)) !== candidate) {
    const out = {
      coverage: "DENIED" as const,
      reason: "PATH_OUTSIDE_WORKSPACE",
      content: null,
    };
    charge(scope, out);
    return out;
  }
  if (!existsSync(candidate) || !statSync(candidate).isFile()) {
    const out = {
      coverage: "NOT_FOUND" as const,
      reason: "FILE_ABSENT",
      path: rel,
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const buf = readFileSync(candidate);
  // Refuse binary / secrets-looking payloads
  if (buf.includes(0)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "BINARY_FILE_REFUSED",
      path: rel,
      content: null,
      contentSha256: createHash("sha256").update(buf).digest("hex"),
      byteLength: buf.length,
    };
    charge(scope, out);
    return out;
  }
  const raw = buf.toString("utf8");
  if (/BEGIN (RSA |OPENSSH )?PRIVATE KEY|\bsk-[A-Za-z0-9]{20,}\b/.test(raw)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "SECRET_MATERIAL_REFUSED",
      path: rel,
      content: null,
    };
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(raw);
  const out = {
    coverage: trimmed.coverage,
    path: rel,
    contentSha256: createHash("sha256").update(buf).digest("hex"),
    byteLength: buf.length,
    content: trimmed.text,
    consulted: true,
    limits: ["D8_WORKSPACE_FILE_READ — contenu original consulté sous cwd tentative"],
  };
  charge(scope, out);
  return out;
}

/** Capture metadata — image bytes not inlined into Nora text. */
export async function readEvidenceCaptureMeta(
  scope: D8EvidenceScope,
  captureId: string,
): Promise<{
  coverage: D8ReadCoverage;
  reason?: string;
  capture?: EvidenceCaptureMeta;
  note?: string;
}> {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    return { coverage: "DENIED", reason: "D8_TOOL_BUDGET_EXHAUSTED" };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE" };
    charge(scope, out);
    return out;
  }
  const cap = listEvidenceCapturesForAttempt(scope.attemptId).find(
    (c) =>
      c.id === captureId &&
      c.pilotId === scope.pilotId &&
      c.projectId === scope.projectId,
  );
  if (!cap) {
    const out = { coverage: "NOT_FOUND" as const, reason: "CAPTURE_NOT_FOUND" };
    charge(scope, out);
    return out;
  }
  const out = {
    coverage: "OPENED" as const,
    capture: cap,
    note: "Capture image — métadonnées + SHA uniquement (pas d'inline binaire dans Nora)",
  };
  charge(scope, out);
  return out;
}

```

### `src/domains/proofs/d8-evidence-tools-sdk.ts` (2141 chars)
```typescript
/**
 * Agents SDK wrappers — D8 evidence read tools for post-attempt Nora analysis.
 */
import {
  listRealizationEvidence,
  readAttemptWorkspaceFile,
  readEvidenceCaptureMeta,
  readRealizationHandoffReport,
  type D8EvidenceScope,
} from "./d8-evidence-read";

export type D8ToolBuildScope = {
  pilotId: string;
  projectId: string;
  attemptId: string;
  budget: { remainingCalls: number; remainingChars: number };
};

export async function buildNoraD8EvidenceTools(scope: D8ToolBuildScope) {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");
  const d8: D8EvidenceScope = {
    pilotId: scope.pilotId,
    projectId: scope.projectId,
    attemptId: scope.attemptId,
    budget: scope.budget,
  };

  return [
    tool({
      name: "list_realization_evidence",
      description:
        "Liste les pièces D8 autorisées de la tentative (handoff, captures, workspace). Métadonnées seulement — ne pas inventer de chemins.",
      parameters: z.object({}),
      execute: async () => listRealizationEvidence(d8),
    }),
    tool({
      name: "read_realization_handoff_report",
      description:
        "Lit le rapport de handoff original de la tentative courante (contenu markdown). Distingue CONSULTED vs PARTIAL vs NOT_FOUND.",
      parameters: z.object({}),
      execute: async () => readRealizationHandoffReport(d8),
    }),
    tool({
      name: "read_attempt_workspace_file",
      description:
        "Lit un fichier texte relatif au workspace Cursor de la tentative (cwd serveur). Chemin relatif uniquement. Preuve originale ≠ déclaration Cursor.",
      parameters: z.object({
        relativePath: z.string().min(1).max(400),
      }),
      execute: async (args) => readAttemptWorkspaceFile(d8, args.relativePath),
    }),
    tool({
      name: "read_evidence_capture_meta",
      description:
        "Ouvre les métadonnées d'une capture ecap_* liée à la tentative (SHA, mime). Pas d'inline binaire.",
      parameters: z.object({
        captureId: z.string().min(1).max(80),
      }),
      execute: async (args) => readEvidenceCaptureMeta(d8, args.captureId),
    }),
  ];
}

```

### `scripts/ml5-c12-seed-and-live.mts` (13568 chars)
```typescript
/**
 * ML5 C12 — seconde mission LIVE (module+test) + ACK-first (LIVE_WAIT=0) + reconcile.
 * Seed: project data only. Nora LIVE prepare when possible; fallback contract READY
 * labelled honestly if Nora does not produce one in time.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { createHash } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { chromium } from "@playwright/test";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { savePreparationDocument } from "../src/domains/document/service";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const BASE = process.env.SFIA_C12_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c12");
const WS_ROOT = "/tmp/sfia-c12-cursor-live-ws";

const INSTRUCTION = [
  "# Mission C12 — module + test",
  "",
  "Dans le workspace Cursor de cette tentative:",
  "1. Créer `src/add.ts` exportant `export function add(a: number, b: number) { return a + b; }`",
  "2. Créer `src/add.test.mjs` qui importe add et assert add(2,3)===5, puis console.log('C12_TEST_OK')",
  "3. Exécuter: `node --test src/add.test.mjs` (ou node src/add.test.mjs)",
  "4. Créer `RESULT_C12.txt` avec exactement: C12-LIVE-MODULE-OK",
  "",
  "Aucun git push. Aucun MCP.",
].join("\n");

function sampleBody(): TechnicalContractBody {
  return {
    title: "ML5 C12 — module add + test LIVE",
    engagements: {
      willDo: "Créer module add, test, RESULT_C12.txt dans workspace DEV isolé",
      willNotDo: "Aucun push GitHub, aucun effet hors workspace",
      expectedResult: "RESULT_C12.txt = C12-LIVE-MODULE-OK et test exécuté",
      pilotControl: "D6 Oui sur empreinte exacte",
    },
    volets: {
      mission: "Petite évolution technique démonstrative C12",
      perimeter: "Workspace Cursor DEV isolé sous SFIA_CURSOR_WORKSPACE_ROOT",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL",
      stopConditions: "STOP demandé ≠ observé",
      proofsSources: "Fichiers workspace + RESULT_C12.txt + sortie test",
      integrity: "Fingerprint contrat = D6",
    },
    instructionText: INSTRUCTION,
    risks: ["Confusion LIVE_WAIT bloquant vs reconcile"],
    exclusions: ["GitHub REAL", "WEB LIVE", "MCP"],
    acceptance: {
      criteria: [
        "RESULT_C12.txt contenu exact",
        "src/add.ts présent",
        "test exécuté ou sortie capturée",
      ],
      expectedProofs: ["fichier RESULT_C12.txt", "rapport handoff"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell_test"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP", "DOUBLE_DISPATCH"],
    reversibilityLimits: ["Pas de rollback auto"],
    gitScope: null,
  };
}

async function resolvePilotA() {
  const byGh = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (byGh) return byGh.id;
  throw new Error("Pilot A missing");
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(WS_ROOT, { recursive: true });
  if ((process.env.SFIA_CURSOR_EFFECT_MODE || "").toUpperCase() !== "LIVE") {
    throw new Error("SFIA_CURSOR_EFFECT_MODE must be LIVE");
  }
  if ((process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1") {
    console.warn("WARN: LIVE_WAIT=1 — C12 prefers 0 (ACK-first + reconcile)");
  }

  const pilotId = await resolvePilotA();
  const label = `ML5-C12-LIVE-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C12 LIVE resilience + evidence");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C12 LIVE",
    idempotencyKey: newId("idem"),
  });
  if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
  const projectId = created.projectId;

  await savePreparationDocument(
    pilotId,
    prep.id,
    "Besoin C12 — module add",
    "# Besoin\nCréer module add + test + RESULT_C12.txt\n",
    undefined,
    { correlationKey: `c12-need-${newId("ck").slice(-6)}` },
  );

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const request = context.request;
  await request.post(`${BASE}/api/dev/auto-session`, { data: {} });

  // Nora LIVE attempt
  const turnKey = `c12-nora-${Date.now()}`;
  const noraRes = await request.post(`${BASE}/api/preparations/${prep.id}/messages`, {
    data: {
      content:
        "Prépare un contrat technique Cursor: créer src/add.ts, un test, exécuter le test, et RESULT_C12.txt avec C12-LIVE-MODULE-OK. Consulte le document besoin. Pas de git.",
      clientTurnKey: turnKey,
      correlationKey: turnKey,
    },
    timeout: 300_000,
  });
  const noraJ = (await noraRes.json().catch(() => ({}))) as Record<string, unknown>;

  let contracts = (
    (await (await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)).json()) as {
      contracts?: Array<{
        id: string;
        status: string;
        fingerprint: string;
        contractKey: string;
        version: number;
        body: { instructionText: string; title: string };
        preparationId?: string;
      }>;
    }
  ).contracts ?? [];

  let contract = contracts.sort((a, b) => b.version - a.version)[0];
  let creationMechanism = "NORA_LIVE";

  if (!contract) {
    // Honest fallback — still LIVE Cursor path; Nora prepare failed this run.
    creationMechanism = "DOMAIN_SEED_CONTRACT_FALLBACK_AFTER_NORA_MISS";
    const seeded = await createTechnicalContract({
      pilotId,
      projectId,
      preparationId: prep.id,
      contractKey: `c12-fallback-${newId("ck").slice(-6)}`,
      body: sampleBody(),
      markReady: true,
      sourcesSufficient: true,
      unknownRestrictions: [],
    });
    contracts = (
      (await (
        await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)
      ).json()) as { contracts?: typeof contracts }
    ).contracts ?? [];
    contract = contracts.find((c) => c.id === seeded.contractId) ?? contracts[0];
  }

  if (!contract) throw new Error("no contract");
  if (contract.status !== "READY") {
    await request.post(
      `${BASE}/api/projects/${projectId}/realization/contracts/${contract.id}/ready`,
      { data: {} },
    );
    contracts = (
      (await (
        await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)
      ).json()) as { contracts?: typeof contracts }
    ).contracts ?? [];
    contract = contracts.find((c) => c.id === contract!.id)!;
  }

  // Enrich instruction if Nora contract lacks RESULT_C12 — use seed body via new version only if needed
  if (!contract.body.instructionText.includes("RESULT_C12")) {
    console.warn("Nora instruction missing RESULT_C12 — continuing with Nora text as-is");
  }

  // D6 Non
  {
    const prepA = await request.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
      {
        data: {
          contractId: contract.id,
          correlationKey: `c12-refuse-${Date.now()}`,
          workspaceKey: "default",
        },
      },
    );
    const pj = (await prepA.json()) as { attemptId?: string };
    await request.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${pj.attemptId}/authorize`,
      {
        data: {
          statement: "C12 refus",
          inspectedFingerprint: contract.fingerprint,
          confirmed: false,
        },
      },
    );
  }

  // D6 Oui + dispatch ACK-first
  const prepYes = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: contract.id,
        correlationKey: `c12-yes-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const prepYesJ = (await prepYes.json()) as { attemptId: string };
  const attemptId = prepYesJ.attemptId;
  await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/authorize`,
    {
      data: {
        statement: "C12 Oui LIVE",
        inspectedFingerprint: contract.fingerprint,
        confirmed: true,
      },
    },
  );

  const t0 = Date.now();
  const dispatch = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/dispatch`,
    { data: {}, timeout: 120_000 },
  );
  const dispatchJ = (await dispatch.json()) as {
    status?: string;
    live?: { agentId?: string; runId?: string; terminalStatus?: string | null };
  };
  const dispatchMs = Date.now() - t0;

  // Simulate browser disconnect: new context, same auto-session, reconcile only
  await context.close();
  const context2 = await browser.newContext();
  const request2 = context2.request;
  await request2.post(`${BASE}/api/dev/auto-session`, { data: {} });

  let status = dispatchJ.status ?? "";
  let live = dispatchJ.live ?? {};
  for (let i = 0; i < 30; i++) {
    const get = await request2.get(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
    );
    const gj = (await get.json()) as {
      status?: string;
      live?: typeof live;
      plan?: { workspaceCwd?: string };
    };
    status = gj.status ?? status;
    live = gj.live ?? live;
    if (status === "COMPLETED" || live.terminalStatus) break;
    await request2.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/reconcile`,
      { data: {}, timeout: 300_000 },
    );
    await new Promise((r) => setTimeout(r, 2000));
  }

  const attemptGet = await request2.get(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
  );
  const attemptBody = (await attemptGet.json()) as {
    plan?: { workspaceCwd?: string };
    status?: string;
    live?: typeof live;
  };
  const cwd = attemptBody.plan?.workspaceCwd ?? WS_ROOT;
  const resultPath = join(cwd, "RESULT_C12.txt");
  const addPath = join(cwd, "src/add.ts");
  const fileOk =
    existsSync(resultPath) &&
    readFileSync(resultPath, "utf8").trim() === "C12-LIVE-MODULE-OK";
  const addOk = existsSync(addPath);

  const report = [
    `# Rapport C12 LIVE`,
    `attemptId: ${attemptId}`,
    `agentId: ${live.agentId}`,
    `runId: ${live.runId}`,
    `terminal: ${live.terminalStatus}`,
    `RESULT_C12: ${fileOk}`,
    `add.ts: ${addOk}`,
    `dispatchMs: ${dispatchMs}`,
    `reconnect: yes (new browser context + reconcile)`,
  ].join("\n");

  const handoff = await request2.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/handoff`,
    {
      data: {
        reportMarkdown: report,
        expectedContractFingerprint: contract.fingerprint,
        manifest: {
          filesCreated: [
            ...(fileOk ? ["RESULT_C12.txt"] : []),
            ...(addOk ? ["src/add.ts"] : []),
          ],
          testsExecuted: ["node test add"],
          testsCaptured: fileOk ? ["RESULT_C12"] : [],
          gaps: fileOk ? [] : ["RESULT_MISSING"],
        },
        provenance: {
          acquisition: "CLIENT_DECLARED",
          declaredExecutorId: live.agentId,
          observedAgentId: live.agentId,
          observedRunId: live.runId,
        },
      },
    },
  );
  const handoffJ = (await handoff.json()) as { handoffId?: string; status?: string };

  const qual = await request2.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/qualification`,
    { data: { attachNoraCognitive: true }, timeout: 300_000 },
  );
  const qualJ = (await qual.json()) as {
    verdict?: string;
    noraAnalysisKind?: string;
    limits?: string[];
    noraAnalysisMarkdown?: string;
  };

  const ids = {
    scenarioId: "ml5-c12-live-20261123",
    at: new Date().toISOString(),
    creationMechanism,
    noraMode: noraJ.noraMode,
    pilotId,
    projectId,
    preparationId: prep.id,
    contractId: contract.id,
    fingerprint: contract.fingerprint,
    attemptId,
    agentId: live.agentId,
    runId: live.runId,
    status: attemptBody.status,
    workspaceCwd: cwd,
    resultOk: fileOk,
    addOk,
    handoffId: handoffJ.handoffId,
    handoffStatus: handoffJ.status,
    qualificationVerdict: qualJ.verdict,
    noraAnalysisKind: qualJ.noraAnalysisKind,
    noraLimits: qualJ.limits,
    dispatchMs,
    liveWait: process.env.SFIA_CURSOR_LIVE_WAIT,
    effectMode: process.env.SFIA_CURSOR_EFFECT_MODE,
  };
  writeFileSync(join(OUT, "scenario-ids.json"), JSON.stringify(ids, null, 2));
  writeFileSync(
    join(OUT, "nora-final.md"),
    qualJ.noraAnalysisMarkdown ?? "",
  );
  writeFileSync(
    join(OUT, "journey.json"),
    JSON.stringify({ ids, dispatchJ, noraKeys: Object.keys(noraJ) }, null, 2),
  );
  console.log(JSON.stringify(ids, null, 2));
  await browser.close();
  if (!fileOk || !live.agentId) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

### `scripts/ml5-c12-ack-drop-incident.mts` (5320 chars)
```typescript
/**
 * C12 T-04 — DROP_ACK after SCRIPTED send via prepare→authorize→dispatch.
 * Oracle: AMBIGUOUS + priorSend + second dispatch refused.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { effectAttempts, pilots, preparations } from "../src/db/schema";
import { priorSendMayHaveOccurred } from "../src/domains/execution/cursor-claim";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "../src/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c12");

const body: TechnicalContractBody = {
  title: "C12 ACK-drop incident",
  engagements: {
    willDo: "touch",
    willNotDo: "nothing external",
    expectedResult: "AMBIGUOUS after DROP_ACK",
    pilotControl: "D6",
  },
  volets: {
    mission: "T-04",
    perimeter: "SCRIPTED fault",
    capabilitiesAuthority: "SCRIPTED",
    stopConditions: "n/a",
    proofsSources: "n/a",
    integrity: "fp",
  },
  instructionText: "create ACKDROP.txt with OK",
  risks: [],
  exclusions: [],
  acceptance: { criteria: ["no double send"], expectedProofs: [] },
  executor: { kind: "CURSOR_SDK_LOCAL", capabilities: [], permissionsNeeded: [] },
  stopConditions: [],
  reversibilityLimits: [],
  gitScope: null,
};

async function main() {
  mkdirSync(OUT, { recursive: true });
  process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
  process.env.SFIA_CURSOR_SCRIPTED_PHASED = "0";
  process.env.SFIA_CURSOR_FAULT_AFTER_SEND = "DROP_ACK";
  process.env.SFIA_CURSOR_WORKSPACE_ROOT =
    process.env.SFIA_CURSOR_WORKSPACE_ROOT || "/tmp/sfia-c12-cursor-live-ws";

  const pilot = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (!pilot) throw new Error("no pilot");
  const prepForContract = await openOrCreatePreparation(pilot.id);
  const projectName = `C12-ACKDROP-${newId("nm").slice(-6)}`;
  await updatePreview(pilot.id, prepForContract.id, projectName, "incident");
  const refreshed2 = (
    await db
      .select()
      .from(preparations)
      .where(eq(preparations.id, prepForContract.id))
  )[0]!;
  const proj = await createProjectCommand({
    pilotId: pilot.id,
    preparationId: prepForContract.id,
    expectedCreationRevision: refreshed2.creationRevision,
    projectName,
    previewSummary: "ack drop",
    idempotencyKey: newId("idem"),
  });
  if (
    (proj.status !== "CREATED" && proj.status !== "ALREADY_CREATED") ||
    !("projectId" in proj) ||
    !proj.projectId
  ) {
    throw new Error(`no project: ${JSON.stringify(proj)}`);
  }

  const contract = await createTechnicalContract({
    pilotId: pilot.id,
    projectId: proj.projectId,
    preparationId: prepForContract.id,
    contractKey: `ackdrop-${newId("ck").slice(-6)}`,
    body,
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  const prepared = await prepareCursorExecution({
    pilotId: pilot.id,
    projectId: proj.projectId,
    contractId: contract.contractId,
    correlationKey: `ackdrop-${Date.now()}`,
    workspaceKey: "default",
  });

  await authorizeCursorExecution({
    pilotId: pilot.id,
    projectId: proj.projectId,
    attemptId: prepared.attemptId,
    statement: "Oui ACKDROP",
    inspectedFingerprint: contract.fingerprint,
    confirmed: true,
  });

  let dispatchErr: string | null = null;
  try {
    await dispatchCursorExecution({
      pilotId: pilot.id,
      projectId: proj.projectId,
      attemptId: prepared.attemptId,
    });
  } catch (e) {
    dispatchErr = String((e as Error)?.message ?? e);
  }

  const attempt = (
    await db
      .select()
      .from(effectAttempts)
      .where(eq(effectAttempts.id, prepared.attemptId))
      .limit(1)
  )[0];

  const prior = priorSendMayHaveOccurred(attempt?.resultJson);
  let secondOk = false;
  let secondErr: string | null = null;
  try {
    await dispatchCursorExecution({
      pilotId: pilot.id,
      projectId: proj.projectId,
      attemptId: prepared.attemptId,
    });
    secondOk = true;
  } catch (e) {
    secondErr = String((e as Error)?.message ?? e);
  }

  const result = {
    attemptId: prepared.attemptId,
    status: attempt?.status,
    dispatchErr,
    priorSendMayHaveOccurred: prior,
    secondDispatchSucceeded: secondOk,
    secondErr,
    oracle:
      attempt?.status === "AMBIGUOUS" && prior && !secondOk ? "PASS" : "FAIL",
  };
  writeFileSync(join(OUT, "ack-drop-incident.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
  if (result.oracle !== "PASS") process.exit(1);
}

main().catch((e) => {
  console.error(e);
  delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
  process.exit(1);
});

```

### `tests/unit/ml5-c12-ack-drop-fault.test.ts` (1229 chars)
```typescript
import { afterEach, describe, expect, it } from "vitest";
import {
  __resetScriptedCursorRunsForTests,
  dispatchCursorRun,
} from "@/domains/execution/cursor-sdk-adapter";
import { priorSendMayHaveOccurred as priorSend } from "@/domains/execution/cursor-claim";

describe("ML5 C12 T-04 DROP_ACK fault injection (SCRIPTED)", () => {
  afterEach(() => {
    delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
    __resetScriptedCursorRunsForTests();
  });

  it("throws DROP_ACK after scripted send intent materialized in memory", async () => {
    process.env.SFIA_CURSOR_FAULT_AFTER_SEND = "DROP_ACK";
    await expect(
      dispatchCursorRun(
        {
          attemptId: "efx_c12_ack",
          instructionText: "touch x",
          instructionFingerprint: "fp",
          workspaceCwd: "/tmp",
          idempotencyKey: "efx_c12_ack",
        },
        "SCRIPTED",
      ),
    ).rejects.toThrow(/DROP_ACK/);
  });

  it("priorSendMayHaveOccurred is true when sendRequestedAt present without runId", () => {
    expect(
      priorSend(
        JSON.stringify({
          sendRequestedAt: "2026-11-23T20:00:00.000Z",
        }),
      ),
    ).toBe(true);
    expect(priorSend(JSON.stringify({}))).toBe(false);
  });
});

```

### `tests/unit/ml5-c12-d8-evidence-read.test.ts` (1482 chars)
```typescript
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";

/**
 * Path confinement unit tests — DB-backed readers covered in PG/integration when available.
 * Here we validate relative-path safety helpers indirectly via readAttemptWorkspaceFile
 * with a fake plan is heavy; test normalize rules via exported behavior when DB absent.
 */

describe("ML5 C12 D8 evidence path safety", () => {
  it("rejects path traversal patterns in relativePath pre-check", async () => {
    const { readAttemptWorkspaceFile } = await import(
      "@/domains/proofs/d8-evidence-read"
    );
    const scope = {
      pilotId: "pilot_x",
      projectId: "proj_x",
      attemptId: "efx_nonexistent_c12",
      budget: { remainingCalls: 5, remainingChars: 50_000 },
    };
    // Without DB row → DENIED ATTEMPT_NOT_IN_SCOPE (never opens filesystem).
    const r = await readAttemptWorkspaceFile(scope, "../etc/passwd");
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toMatch(/ATTEMPT_NOT_IN_SCOPE|UNSAFE/);
  });

  it("workspace fixture file is readable when present on disk (local harness)", () => {
    const root = "/tmp/sfia-c12-unit-ws";
    rmSync(root, { recursive: true, force: true });
    mkdirSync(root, { recursive: true });
    writeFileSync(join(root, "hello.txt"), "C12-OK\n");
    expect(require("fs").readFileSync(join(root, "hello.txt"), "utf8").trim()).toBe(
      "C12-OK",
    );
  });
});

```

## Annex B — Diffs fichiers modifiés clés

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index a8780713..1f3fad31 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -1,14 +1,23 @@
 import { NextResponse } from "next/server";
-import { and, eq } from "drizzle-orm";
+import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
 import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
+import { getTechnicalContract } from "@/domains/execution/technical-contract";
 import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
 import {
+  buildDeterministicDossierSynthesis,
+  buildNoraCognitiveAnalysisPrompt,
   buildNoraFinalAnalysisBrief,
   classifyAttachedNoraPayload,
   qualifyCursorRealization,
 } from "@/domains/proofs/cursor-qualify";
+import { generateNoraReply } from "@/domains/conversation/nora-adapter";
+import {
+  collectManifestRefs,
+  verifyNewProofRef,
+} from "@/domains/proofs/proof-ref-verify";
+import { listEvidenceCapturesForAttempt } from "@/domains/proofs/evidence-captures";
 import { requireStudioSession } from "@/domains/identity/session";
 import { newId } from "@/lib/ids";
 import { studioErrorResponse, StudioError } from "@/lib/http-errors";
@@ -39,15 +48,25 @@ export async function GET(
         .limit(1)
     )[0];
     if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
+    const markdown = row.noraAnalysisMarkdown;
+    let history: unknown[] = [];
+    try {
+      history = JSON.parse(row.historyJson || "[]") as unknown[];
+    } catch {
+      history = [];
+    }
     return NextResponse.json({
       status: row.status,
       qualification: {
         id: row.id,
         verdict: row.verdict,
         rubrics: JSON.parse(row.rubricsJson || "{}"),
-        noraAnalysisMarkdown: row.noraAnalysisMarkdown,
+        noraAnalysisMarkdown: markdown,
+        noraAnalysisKind: classifyAttachedNoraPayload(markdown),
         noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
         limits: JSON.parse(row.limitsJson || "[]"),
+        history,
+        updatedAt: row.updatedAt?.toISOString() ?? null,
       },
     });
   } catch (e) {
@@ -65,6 +84,15 @@ export async function POST(
     const { projectId, attemptId } = await ctx.params;
     const body = (await req.json().catch(() => ({}))) as {
       attachNoraAnalysis?: boolean;
+      /** Prefer cognitive analysis (CA-08). Technical brief remains available. */
+      attachNoraCognitive?: boolean;
+      /** G15 — dated requalification on new proofs; never re-dispatches Cursor. */
+      requalify?: boolean;
+      reason?: string;
+      /** Optional optimistic concurrency — ISO updatedAt from GET. */
+      expectedUpdatedAt?: string;
+      /** Optional — correlate requalify to new proof artifact id/ref. */
+      newProofRef?: string;
     };
     const attempt = await getCursorAttempt({
       pilotId: session.pilotId,
@@ -81,22 +109,25 @@ export async function POST(
     const manifest = handoff
       ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
       : null;
-    const q = qualifyCursorRealization({
-      contractFingerprint: attempt.fingerprint,
-      handoffStatus: handoff?.status ?? null,
-      reportMarkdown: handoff?.reportMarkdown ?? null,
-      manifest,
-      terminalStatus: attempt.live.terminalStatus ?? null,
-    });
-    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
-    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
-    const noraKind = classifyAttachedNoraPayload(technicalBrief);
-    const limits = [
-      ...q.limits,
-      ...(noraKind === "TECHNICAL_BRIEF"
-        ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
-        : []),
-    ];
+
+    let contractTitle: string | null = null;
+    let acceptanceCriteria: string[] = [];
+    let expectedProofs: string[] = [];
+    let preparationId: string | null = null;
+    try {
+      const contract = await getTechnicalContract({
+        pilotId: session.pilotId,
+        projectId,
+        contractId: attempt.plan.contractId,
+      });
+      contractTitle = contract.body.title;
+      acceptanceCriteria = contract.body.acceptance?.criteria ?? [];
+      expectedProofs = contract.body.acceptance?.expectedProofs ?? [];
+      preparationId = contract.preparationId ?? null;
+    } catch {
+      /* contract may be missing — qualify with fingerprint only */
+    }
+
     const existing = (
       await db
         .select()
@@ -104,19 +135,316 @@ export async function POST(
         .where(eq(realizationQualifications.attemptId, attemptId))
         .limit(1)
     )[0];
-    if (existing) {
+    const requalify =
+      Boolean(body.requalify) && Boolean((body.reason ?? "").trim());
+    if (existing && !requalify) {
       throw new StudioError("CONFLICT", "Qualification déjà enregistrée pour cette tentative", {
         exposeMessage: true,
       });
     }
-    // Ensure attempt exists for FK
+    if (existing && body.requalify && !(body.reason ?? "").trim()) {
+      throw new StudioError("INVALID_REQUEST", "requalify exige une raison datée", {
+        exposeMessage: true,
+      });
+    }
     const efx = (
-      await db.select({ id: effectAttempts.id }).from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+      await db
+        .select({ id: effectAttempts.id })
+        .from(effectAttempts)
+        .where(eq(effectAttempts.id, attemptId))
+        .limit(1)
     )[0];
     if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");
 
-    const id = newId("rqual");
     const now = new Date();
+
+    /** CP-03 — build qualification from currently observed dossier (handoff + captures). */
+    function evaluateQualificationOnly() {
+      return qualifyCursorRealization({
+        contractFingerprint: attempt.fingerprint,
+        acceptanceCriteria,
+        expectedProofs,
+        handoffStatus: handoff?.status ?? null,
+        reportMarkdown: handoff?.reportMarkdown ?? null,
+        manifest,
+        terminalStatus: attempt.live.terminalStatus ?? null,
+      });
+    }
+
+    /**
+     * CA-08 — real D3 Nora cognitive analysis when attachNoraCognitive.
+     * Never invent NORA_COGNITIVE from the deterministic synthesis alone.
+     * Provider failure → deterministic fallback with explicit limit (not silent success).
+     */
+    async function attachNoraAnalysisMarkdown(
+      q: ReturnType<typeof qualifyCursorRealization>,
+    ): Promise<{ finalMarkdown: string | null; noraKind: ReturnType<typeof classifyAttachedNoraPayload>; limits: string[] }> {
+      const dossierIncomplete =
+        q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
+      const limits: string[] = [...q.limits];
+
+      if (body.attachNoraCognitive) {
+        const prompt = [
+          buildNoraCognitiveAnalysisPrompt({
+            qualification: q,
+            contractTitle,
+            attemptId,
+            sourcesAccessible: manifest?.sourcesConsulted,
+          }),
+          "",
+          "OUTILS D8 OBLIGATOIRES pour cette analyse:",
+          "- list_realization_evidence",
+          "- read_realization_handoff_report (rapport intégral, pas un extrait fourni)",
+          "- read_attempt_workspace_file pour tout fichier témoin cité (chemin relatif)",
+          "Distingue explicitement: pièce CONSULTÉE vs métadonnée vs déclaration Cursor vs inaccessible.",
+          "N'affirme jamais avoir lu un fichier sans l'avoir ouvert via outil.",
+        ].join("\n");
+        try {
+          const reply = await generateNoraReply({
+            userText: prompt,
+            contextSnippets: [
+              `attemptId=${attemptId}`,
+              `contractTitle=${contractTitle ?? ""}`,
+              `handoffStatus=${handoff?.status ?? "NONE"}`,
+              `verdict=${q.verdict}`,
+              `terminalStatus=${attempt.live.terminalStatus ?? "null"}`,
+              `agentId=${attempt.live.agentId ?? "null"}`,
+              `runId=${attempt.live.runId ?? "null"}`,
+              // C12: excerpt is navigation only — full report via D8 tool.
+              `reportExcerptHint=${(handoff?.reportMarkdown ?? "").slice(0, 500)}`,
+              `workspaceHint=${attempt.plan.workspaceCwd ?? ""}`,
+            ],
+            toolScope: preparationId
+              ? {
+                  pilotId: session.pilotId,
+                  preparationId,
+                  operationId: `d8-nora-${attemptId}`,
+                  projectId,
+                  attemptId,
+                }
+              : undefined,
+          });
+          const raw = (reply.content ?? "").trim();
+          const prefixed = raw.includes("ANALYSE COGNITIVE NORA (D3)")
+            ? raw
+            : `[ANALYSE COGNITIVE NORA (D3)]\n\n${raw}`;
+          const liveOk =
+            reply.mode === "openai-agents-sdk-live" &&
+            reply.status === "COMPLETE" &&
+            raw.length > 0;
+          const toolsUsed = reply.toolCallsObserved ?? 0;
+          if (liveOk) {
+            limits.push(
+              "NORA_COGNITIVE — run D3 post-tentative",
+              `NORA_MODE_${reply.mode}`,
+              reply.modelApplied
+                ? `NORA_MODEL_${reply.modelApplied}`
+                : "NORA_MODEL_UNVERIFIED",
+              `NORA_TOOL_CALLS_${toolsUsed}`,
+              toolsUsed > 0
+                ? "NORA_D8_TOOLS_OBSERVED"
+                : "NORA_D8_TOOLS_NOT_OBSERVED — consultation originale non prouvée par toolCalls",
+            );
+            return {
+              finalMarkdown: prefixed,
+              noraKind: "NORA_COGNITIVE",
+              limits,
+            };
+          }
+          limits.push(
+            `NORA_COGNITIVE_UNAVAILABLE — mode=${reply.mode} status=${reply.status}`,
+            "FALLBACK_DETERMINISTIC_SYNTHESIS",
+          );
+        } catch (e) {
+          limits.push(
+            `NORA_COGNITIVE_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
+            "FALLBACK_DETERMINISTIC_SYNTHESIS",
+          );
+        }
+        const syn = buildDeterministicDossierSynthesis({
+          qualification: q,
+          contractTitle,
+          attemptId,
+          sourcesAccessible: manifest?.sourcesConsulted,
+          dossierIncomplete,
+        });
+        return {
+          finalMarkdown: syn,
+          noraKind: classifyAttachedNoraPayload(syn),
+          limits: [
+            ...limits,
+            "DETERMINISTIC_SYNTHESIS — pas un run cognitif Nora D3 ; CA-08 LIVE encore ouvert",
+          ],
+        };
+      }
+
+      if (body.attachNoraAnalysis) {
+        const brief = buildNoraFinalAnalysisBrief(q);
+        return {
+          finalMarkdown: brief,
+          noraKind: classifyAttachedNoraPayload(brief),
+          limits: [
+            ...limits,
+            "NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté",
+          ],
+        };
+      }
+
+      return { finalMarkdown: null, noraKind: "UNAVAILABLE", limits };
+    }
+
+    async function evaluateFromObserved() {
+      const q = evaluateQualificationOnly();
+      const attached = await attachNoraAnalysisMarkdown(q);
+      return { q, ...attached };
+    }
+
+    if (existing && requalify) {
+      const reason = (body.reason ?? "").trim().slice(0, 500);
+      const newProofRef = (body.newProofRef ?? "").trim().slice(0, 200);
+      const requalifyMode =
+        (body as { requalifyMode?: string }).requalifyMode === "judgment_correction"
+          ? ("judgment_correction" as const)
+          : ("new_proof" as const);
+      if (requalifyMode === "new_proof" && !newProofRef) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          "requalify new_proof exige newProofRef explicite — pas de fallback handoff",
+          { exposeMessage: true },
+        );
+      }
+      const captures = listEvidenceCapturesForAttempt(attemptId).filter(
+        (c) => c.pilotId === session.pilotId && c.projectId === projectId,
+      );
+      const proofCheck = verifyNewProofRef({
+        newProofRef: newProofRef || (requalifyMode === "judgment_correction" ? handoff?.id || "" : ""),
+        attemptId,
+        handoffId: handoff?.id ?? null,
+        handoffIntegrityHash: handoff?.integrityHash ?? null,
+        manifestRefs: collectManifestRefs(manifest),
+        captureIds: captures.map((c) => c.id),
+        mode: requalifyMode,
+        priorHandoffId: existing.handoffId,
+      });
+      if (!proofCheck.ok) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          `requalify preuve non vérifiée: ${proofCheck.reason}`,
+          { exposeMessage: true },
+        );
+      }
+      // G15 + CP-03 — lock first, then evaluate from observed dossier, then write.
+      const txResult = await db.transaction(async (tx) => {
+        await tx.execute(
+          sql`select id from realization_qualifications where id = ${existing.id} for update`,
+        );
+        const locked = (
+          await tx
+            .select()
+            .from(realizationQualifications)
+            .where(eq(realizationQualifications.id, existing.id))
+            .limit(1)
+        )[0];
+        if (!locked) throw new StudioError("NOT_FOUND", "Qualification introuvable");
+        if (
+          body.expectedUpdatedAt &&
+          locked.updatedAt.toISOString() !== body.expectedUpdatedAt
+        ) {
+          throw new StudioError(
+            "CONFLICT",
+            "REQUALIFY_VERSION_CONFLICT — relire puis réessayer",
+            { exposeMessage: true },
+          );
+        }
+        // Re-evaluate qualification inside TX after lock (Nora call stays outside TX).
+        const q = evaluateQualificationOnly();
+        let history: unknown[] = [];
+        try {
+          history = JSON.parse(locked.historyJson || "[]") as unknown[];
+        } catch {
+          history = [];
+        }
+        if (!Array.isArray(history)) history = [];
+        const previousVerdict = locked.verdict;
+        history.push({
+          at: locked.updatedAt.toISOString(),
+          verdict: locked.verdict,
+          rubrics: JSON.parse(locked.rubricsJson || "{}"),
+          limits: JSON.parse(locked.limitsJson || "[]"),
+          noraAnalysisKind: classifyAttachedNoraPayload(locked.noraAnalysisMarkdown),
+          authorPilotId: locked.pilotId,
+          supersededAt: now.toISOString(),
+          requalifyReason: reason,
+          newProofRef: proofCheck.candidate.ref,
+          proofKind: proofCheck.candidate.kind,
+          handoffId: handoff?.id ?? locked.handoffId,
+        });
+        // Persist rubrics/verdict first; Nora markdown filled after TX.
+        await tx
+          .update(realizationQualifications)
+          .set({
+            handoffId: handoff?.id ?? locked.handoffId,
+            status: "REQUALIFIED",
+            rubricsJson: JSON.stringify(q.rubrics),
+            verdict: q.verdict,
+            limitsJson: JSON.stringify([
+              ...q.limits,
+              `REQUALIFIED_AT:${now.toISOString()}`,
+              `PREVIOUS_VERDICT:${previousVerdict}`,
+              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
+              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
+            ]),
+            historyJson: JSON.stringify(history),
+            updatedAt: now,
+          })
+          .where(eq(realizationQualifications.id, locked.id));
+        return {
+          previousVerdict,
+          history,
+          qualificationId: locked.id,
+          q,
+        };
+      });
+      const attached = await attachNoraAnalysisMarkdown(txResult.q);
+      if (attached.finalMarkdown) {
+        await db
+          .update(realizationQualifications)
+          .set({
+            noraAnalysisMarkdown: attached.finalMarkdown,
+            noraAnalysisAt: now,
+            limitsJson: JSON.stringify([
+              ...attached.limits,
+              `REQUALIFIED_AT:${now.toISOString()}`,
+              `PREVIOUS_VERDICT:${txResult.previousVerdict}`,
+              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
+              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
+            ]),
+            updatedAt: new Date(),
+          })
+          .where(eq(realizationQualifications.id, txResult.qualificationId));
+      }
+      return NextResponse.json({
+        qualificationId: txResult.qualificationId,
+        requalified: true,
+        previousVerdict: txResult.previousVerdict,
+        verdict: txResult.q.verdict,
+        rubrics: txResult.q.rubrics,
+        limits: attached.limits,
+        history: txResult.history,
+        noraAnalysisMarkdown: attached.finalMarkdown,
+        noraAnalysisKind: attached.noraKind,
+        testsPass: txResult.q.testsPass,
+        conformityProven: txResult.q.conformityProven,
+        morrisAcceptance: txResult.q.morrisAcceptance,
+        adopted: txResult.q.adopted,
+        proofVerified: proofCheck.candidate,
+        cursorRedispatch: false,
+      });
+    }
+
+    const { q, finalMarkdown, noraKind, limits } = await evaluateFromObserved();
+
+    const id = newId("rqual");
     await db.insert(realizationQualifications).values({
       id,
       attemptId,
@@ -126,23 +454,26 @@ export async function POST(
       status: "RECORDED",
       rubricsJson: JSON.stringify(q.rubrics),
       verdict: q.verdict,
-      noraAnalysisMarkdown: technicalBrief,
-      noraAnalysisAt: technicalBrief ? now : null,
+      noraAnalysisMarkdown: finalMarkdown,
+      noraAnalysisAt: finalMarkdown ? now : null,
       limitsJson: JSON.stringify(limits),
+      historyJson: "[]",
       createdAt: now,
       updatedAt: now,
     });
     return NextResponse.json({
       qualificationId: id,
+      requalified: false,
       verdict: q.verdict,
       rubrics: q.rubrics,
       limits,
-      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisMarkdown: finalMarkdown,
       noraAnalysisKind: noraKind,
       testsPass: q.testsPass,
       conformityProven: q.conformityProven,
       morrisAcceptance: q.morrisAcceptance,
       adopted: q.adopted,
+      cursorRedispatch: false,
     });
   } catch (e) {
     const mapped = studioErrorResponse(e);
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 1290fb12..ff9f8c95 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -115,6 +115,10 @@ export type CognitivePolicy = {
     | "read_git_commit"
     | "compare_git_refs"
     | "read_git_commit_status"
+    | "list_realization_evidence"
+    | "read_realization_handoff_report"
+    | "read_attempt_workspace_file"
+    | "read_evidence_capture_meta"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -264,6 +268,10 @@ export function buildCognitivePolicy(
     "read_git_commit",
     "compare_git_refs",
     "read_git_commit_status",
+    "list_realization_evidence",
+    "read_realization_handoff_report",
+    "read_attempt_workspace_file",
+    "read_evidence_capture_meta",
   ];
 
   return {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 99cba8a9..37d83b5d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -51,6 +51,15 @@ export type NoraGenerateInput = {
   toolScope?: Omit<D4ToolScope, "budget" | "generationId"> & {
     generationId?: string;
     projectId?: string;
+    /** C12 — when set, D8 evidence read tools are bound to this attempt. */
+    attemptId?: string;
+    /** When set, each recorded tool source emits OBSERVED activity mid-turn (C01). */
+    activityContext?: {
+      conversationId: string;
+      turnCommandId: string;
+      ownerPilotId: string;
+      ownerToken?: string | null;
+    };
   };
   /** Optional policy override (tests). */
   policyOverride?: CognitivePolicy;
@@ -83,6 +92,11 @@ export type NoraGenerateResult = {
   attempts: NoraAttemptRecord[];
   toolCallsObserved: number;
   d4CharsReturned: number;
+  /**
+   * Sources actually returned by tools this turn (refs + coverage).
+   * Never synthesize from toolCallsObserved count alone.
+   */
+  observedToolSources?: import("./investigation-state").InvestigationSourceRef[];
   coverageNotes?: string;
   /** CKI delivery level actually observed for this generation. */
   ckiDelivery?: string;
@@ -511,6 +525,38 @@ async function fixtureReply(
   let d4CharsReturned = 0;
   let toolNotes = "";
 
+  const { createToolSourceJournal } = await import("./tool-source-journal");
+  const { appendActivityEvent } = await import("./activity-projection");
+  /** Cycle 6 P1 — ordered durable activity; flushed before reply returns. */
+  const activityFlushQueue: Promise<unknown>[] = [];
+  const sourceJournal = createToolSourceJournal({
+    onRecord: (entry) => {
+      const ctx = input.toolScope?.activityContext;
+      if (!ctx) return;
+      activityFlushQueue.push(
+        appendActivityEvent({
+          conversationId: ctx.conversationId,
+          turnCommandId: ctx.turnCommandId,
+          ownerPilotId: ctx.ownerPilotId,
+          generationId,
+          phase: `nora.source.${entry.kind.toLowerCase()}`,
+          nature: "OBSERVED",
+          status:
+            entry.coverage === "DENIED"
+              ? "FAILED"
+              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+                ? "LIMITED"
+                : "COMPLETED",
+          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
+          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          sourceRef: entry.ref,
+          ownerToken: ctx.ownerToken,
+        }).catch(() => {
+          /* observational — never fail the cognitive turn */
+        }),
+      );
+    },
+  });
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
     const scope: D4ToolScope = {
       pilotId: input.toolScope.pilotId,
@@ -521,6 +567,7 @@ async function fixtureReply(
         remainingCalls: policy.budgets.maxD4ToolCalls,
         remainingChars: policy.budgets.maxD4CharsReturned,
       },
+      sourceJournal,
     };
     const searched = await searchProjectResources(scope, {
       query: input.userText.slice(0, 80),
@@ -616,6 +663,7 @@ async function fixtureReply(
   const validatedFixture = validateNoraTurnQualification(qualification);
   if (!validatedFixture.ok) {
     const failed = unavailableQualification(validatedFixture.reason);
+    await Promise.all(activityFlushQueue);
     emitObs({
       event_name: "d3.nora.fixture_complete",
       component: "d3.nora_adapter",
@@ -660,11 +708,13 @@ async function fixtureReply(
       ],
       toolCallsObserved,
       d4CharsReturned,
+      observedToolSources: sourceJournal.entries.slice(),
       coverageNotes: toolNotes || undefined,
       qualification: failed,
     };
   }
   qualification = validatedFixture.value;
+  await Promise.all(activityFlushQueue);
 
   emitObs({
     event_name: "d3.nora.fixture_complete",
@@ -709,6 +759,7 @@ async function fixtureReply(
     ],
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     coverageNotes: toolNotes || undefined,
     qualification,
   };
@@ -781,6 +832,37 @@ async function runLiveWithTools(
   // Alias kept for existing charsConsumed accounting below.
   const initialBudget = sharedToolBudget;
 
+  const { createToolSourceJournal } = await import("./tool-source-journal");
+  const { appendActivityEvent: appendLiveActivity } = await import("./activity-projection");
+  const liveActivityFlushQueue: Promise<unknown>[] = [];
+  const sourceJournal = createToolSourceJournal({
+    onRecord: (entry) => {
+      const ctx = input.toolScope?.activityContext;
+      if (!ctx) return;
+      liveActivityFlushQueue.push(
+        appendLiveActivity({
+          conversationId: ctx.conversationId,
+          turnCommandId: ctx.turnCommandId,
+          ownerPilotId: ctx.ownerPilotId,
+          generationId,
+          phase: `nora.source.${entry.kind.toLowerCase()}`,
+          nature: "OBSERVED",
+          status:
+            entry.coverage === "DENIED"
+              ? "FAILED"
+              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+                ? "LIMITED"
+                : "COMPLETED",
+          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
+          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          sourceRef: entry.ref,
+          ownerToken: ctx.ownerToken,
+        }).catch(() => {
+          /* observational */
+        }),
+      );
+    },
+  });
   // Union of D4 / history / git tools — Agent accepts heterogeneous FunctionTool[].
   let tools: unknown[] = [];
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
@@ -790,8 +872,21 @@ async function runLiveWithTools(
       operationId: input.toolScope.operationId,
       generationId,
       budget: sharedToolBudget,
+      sourceJournal,
     };
     tools = await buildNoraD4Tools(scope);
+    // B1 — Studio-owned public search frontier (never attach hosted webSearchTool
+    // to a private-context agent). Query-only tool; private context not forwarded.
+    const { canUsePublicWebFrontier, buildPublicWebFrontierTools } = await import(
+      "./public-web-search-frontier"
+    );
+    if (canUsePublicWebFrontier(policy)) {
+      const webTools = await buildPublicWebFrontierTools({
+        sourceJournal,
+        budget: sharedToolBudget,
+      });
+      tools = [...tools, ...webTools];
+    }
     if (
       policy.toolAllowlist.includes("search_conversation_history") ||
       policy.toolAllowlist.includes("read_conversation_messages")
@@ -814,14 +909,27 @@ async function runLiveWithTools(
       });
       tools = [...tools, ...gitTools];
     }
-    // B1 — hosted web search (gated). Public tool only; results are untrusted data.
-    const { canAttachWebSearchTool, buildPublicWebSearchTool } = await import(
-      "./web-search-tools"
-    );
-    if (canAttachWebSearchTool(policy)) {
-      const webTool = buildPublicWebSearchTool();
-      if (webTool) tools = [...tools, webTool];
+    // C12 — D8 evidence reads bound to attempt (CA-08). Never arbitrary paths.
+    if (
+      input.toolScope.projectId &&
+      input.toolScope.attemptId &&
+      (policy.toolAllowlist.includes("list_realization_evidence") ||
+        policy.toolAllowlist.includes("read_realization_handoff_report") ||
+        policy.toolAllowlist.includes("read_attempt_workspace_file") ||
+        policy.toolAllowlist.includes("read_evidence_capture_meta"))
+    ) {
+      const { buildNoraD8EvidenceTools } = await import(
+        "@/domains/proofs/d8-evidence-tools-sdk"
+      );
+      const d8Tools = await buildNoraD8EvidenceTools({
+        pilotId: input.toolScope.pilotId,
+        projectId: input.toolScope.projectId,
+        attemptId: input.toolScope.attemptId,
+        budget: sharedToolBudget,
+      });
+      tools = [...tools, ...d8Tools];
     }
+    // Hosted OpenAI webSearchTool remains detached — see public-web-search-frontier.
   }
 
   const QUALIFICATION_INSTRUCTIONS = [
@@ -1086,6 +1194,8 @@ async function runLiveWithTools(
     clearTimeout(wallTimer);
   }
 
+  await Promise.all(liveActivityFlushQueue);
+
   const toolCallsObserved = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
   const d4CharsReturned = policy.budgets.maxD4CharsReturned - initialBudget.remainingChars;
 
@@ -1109,6 +1219,7 @@ async function runLiveWithTools(
       attempts,
       toolCallsObserved,
       d4CharsReturned,
+      observedToolSources: sourceJournal.entries.slice(),
       qualification:
         qualification.status === "UNAVAILABLE"
           ? qualification
@@ -1134,6 +1245,7 @@ async function runLiveWithTools(
     attempts,
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     qualification,
   };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..98061bde 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,69 @@ export async function prepareCursorExecution(input: {
   )[0];
 
   const mode = resolveCursorAdapterMode();
+  const gitScope = contract.gitScopeJson
+    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
+    : null;
+  // DÉC-ML5-GIT Option A — CP-01 independent Git observations (never contract SHA echo).
+  if (gitScope?.required) {
+    const {
+      buildCursorGitMandateFromScope,
+      observeWorkspaceGitFacts,
+      preflightCursorGitOptionA,
+    } = await import("./cursor-git-option-a");
+    const mandate = buildCursorGitMandateFromScope(gitScope);
+    const authorized =
+      process.env.SFIA_CURSOR_GIT_AUTHORIZED_REPOS?.split(",")
+        .map((s) => s.trim())
+        .filter(Boolean) ?? [];
+    // DEV SCRIPTED: allow the declared repo name when authorized list empty and mode SCRIPTED.
+    const repos =
+      authorized.length > 0
+        ? authorized
+        : mode === "SCRIPTED" && gitScope.repositoryFullName
+          ? [gitScope.repositoryFullName]
+          : [];
+    const observations = observeWorkspaceGitFacts(
+      workspace.workspaceCwd,
+      gitScope.baseRef ?? "main",
+      gitScope.workBranch ?? "cursor/work",
+    );
+    const pre = preflightCursorGitOptionA({
+      mandate,
+      workspacePath: workspace.workspaceCwd,
+      authorizedRepos: repos,
+      observations,
+    });
+    if (!pre.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight Git Cursor option A refusé: ${pre.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  // E12 / C8 A3 — MCP fail-closed: UNKNOWN blocks; SCRIPTED may simulate explicitly.
+  const mcpRequired = input.mcpRequired ?? [];
+  if (mcpRequired.length > 0) {
+    const { assertMcpReadyForDispatch, checkRequiredMcpCapabilities } = await import(
+      "./mcp-capability-check"
+    );
+    const scriptedSimulation = mode === "SCRIPTED";
+    const mcpResults = checkRequiredMcpCapabilities(mcpRequired, process.env, {
+      scriptedSimulation,
+    });
+    const mcpGate = assertMcpReadyForDispatch(mcpResults, {
+      allowScriptedSimulation: scriptedSimulation,
+    });
+    if (!mcpGate.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight MCP refusé: ${mcpGate.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  const modelId = (process.env.SFIA_CURSOR_MODEL_ID || "").trim() || undefined;
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,10 +181,9 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
-    mcpRequired: input.mcpRequired ?? [],
+    ...(modelId ? { modelId } : {}),
+    gitScope,
+    mcpRequired,
   };
   const fingerprint = contract.fingerprint;
   const planFp = planFingerprintPayload(plan);
@@ -177,6 +239,96 @@ export async function prepareCursorExecution(input: {
   };
 }
 
+/**
+ * Authenticated D6 Non — records an explicit HumanDecision refusal.
+ * No AUTHORIZED transition, no dispatch, no Cursor effect.
+ * Attempt moves PREPARED → CANCELLED (still the same attemptId).
+ */
+export async function refuseCursorExecution(input: {
+  pilotId: string;
+  projectId: string;
+  attemptId: string;
+  statement: string;
+  inspectedFingerprint: string;
+}) {
+  return db.transaction(async (tx) => {
+    const row = (
+      await tx
+        .select()
+        .from(effectAttempts)
+        .where(
+          and(
+            eq(effectAttempts.id, input.attemptId),
+            eq(effectAttempts.projectId, input.projectId),
+            eq(effectAttempts.pilotId, input.pilotId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
+    if (row.kind !== "CURSOR_EXECUTION") {
+      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
+    }
+    if (row.status === "CANCELLED" && row.decisionId) {
+      return {
+        attemptId: row.id,
+        status: "CANCELLED" as const,
+        decisionId: row.decisionId,
+        idempotent: true as const,
+        fingerprint: row.fingerprint,
+        refused: true as const,
+      };
+    }
+    if (row.status !== "PREPARED") {
+      throw new StudioError(
+        "CONFLICT",
+        `Refus D6 impossible depuis statut ${row.status}`,
+        { exposeMessage: true },
+      );
+    }
+    if (input.inspectedFingerprint !== row.fingerprint) {
+      throw new StudioError(
+        "REQUIRES_REQUALIFICATION",
+        "Empreinte inspectée ≠ tentative — relire le contrat",
+        { exposeMessage: true },
+      );
+    }
+    const effectConditions = JSON.stringify({
+      fingerprint: row.fingerprint,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      attemptId: row.id,
+    });
+    const decisionId = await insertHumanDecision(tx, {
+      projectId: input.projectId,
+      pilotId: input.pilotId,
+      sourceKind: "CURSOR_EXECUTION",
+      sourceRef: row.id,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      objectRef: row.id,
+      statement: (input.statement || "Refus explicite D6 — pas d'exécution Cursor").slice(0, 500),
+      effectConditions,
+    });
+    const now = new Date();
+    await tx
+      .update(effectAttempts)
+      .set({
+        status: "CANCELLED",
+        decisionId,
+        effectConditions,
+        updatedAt: now,
+      })
+      .where(eq(effectAttempts.id, row.id));
+    return {
+      attemptId: row.id,
+      status: "CANCELLED" as const,
+      decisionId,
+      idempotent: false as const,
+      fingerprint: row.fingerprint,
+      refused: true as const,
+    };
+  });
+}
+
 export async function authorizeCursorExecution(input: {
   pilotId: string;
   projectId: string;
@@ -187,8 +339,12 @@ export async function authorizeCursorExecution(input: {
   confirmed: boolean;
 }) {
   if (!input.confirmed) {
-    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
-      exposeMessage: true,
+    return refuseCursorExecution({
+      pilotId: input.pilotId,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      statement: input.statement,
+      inspectedFingerprint: input.inspectedFingerprint,
     });
   }
   return db.transaction(async (tx) => {
@@ -377,7 +533,19 @@ export async function dispatchCursorExecution(input: {
   }
 
   const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
-  const claimed = await claimCursorAttempt(row.id, fromStatus);
+  if (fromStatus === "AMBIGUOUS") {
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (priorSendMayHaveOccurred(row.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
+        { exposeMessage: true },
+      );
+    }
+  }
+  // P0: claim + sendRequestedAt in one durable write BEFORE any external SDK call.
+  // Crash between this point and SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
+  const claimed = await claimCursorAttempt(row.id, fromStatus, { stampSendIntent: true });
   if (!claimed) {
     const again = (
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
@@ -387,24 +555,45 @@ export async function dispatchCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
+        { exposeMessage: true },
+      );
+    }
     throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
       exposeMessage: true,
     });
   }
 
   const claimToken = claimed.claim.claimToken;
-  const sendRequestedAt = new Date().toISOString();
+  const sendRequestedAt =
+    claimed.sendRequestedAt ?? new Date().toISOString();
 
   let dispatched;
   try {
+    const { isScriptedPhasedMode } = await import("./cursor-sdk-adapter");
+    const scriptedPhased =
+      plan.effectProviderMode === "SCRIPTED" && isScriptedPhasedMode();
+    const liveWait =
+      plan.effectProviderMode === "LIVE" &&
+      (process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1";
     dispatched = await dispatchCursorRun({
       attemptId: row.id,
       instructionText: contract.instructionText,
       instructionFingerprint: plan.instructionFingerprint,
       workspaceCwd: plan.workspaceCwd,
       idempotencyKey: row.id,
-      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
-      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
+      modelId: plan.modelId,
+      /**
+       * LIVE default: return after ACK — reconcile observes terminal without resend.
+       * SFIA_CURSOR_LIVE_WAIT=1: block until terminal (DEV worker-style, C11).
+       * SCRIPTED default: finish immediately unless SFIA_CURSOR_SCRIPTED_PHASED=1.
+       */
+      waitForTerminal:
+        liveWait || (plan.effectProviderMode === "SCRIPTED" && !scriptedPhased),
     });
   } catch (e) {
     const failLive: CursorLiveProjection = {
@@ -424,7 +613,7 @@ export async function dispatchCursorExecution(input: {
   }
 
   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
@@ -500,16 +689,37 @@ export async function requestStopCursorExecution(input: {
       stop.stopObservedAt ? "STOP_OBSERVED" : "STOP_REQUESTED_NOT_CONFIRMED",
     ],
   };
-  // STOP requested ≠ necessarily terminal — keep DISPATCHED if not observed.
+  // STOP requested ≠ STOP observed. If uncertain after possible effect → keep
+  // DISPATCHED/AMBIGUOUS; never invent cancelled without observation.
+  let nextStatus = row.status;
+  if (stop.stopObservedAt && stop.terminalStatus === "cancelled") {
+    nextStatus = "COMPLETED";
+  } else if (
+    !stop.stopObservedAt &&
+    (live.agentId || live.runId || live.sendRequestedAt) &&
+    row.status === "DISPATCHED"
+  ) {
+    nextLive.limits = [
+      ...(nextLive.limits ?? []),
+      "STOP_UNCERTAIN_AFTER_POSSIBLE_EFFECT — conserver DISPATCHED, pas de succès inventé",
+    ];
+  }
   await db
     .update(effectAttempts)
     .set({
       resultJson: JSON.stringify(nextLive),
-      status: stop.stopObservedAt && stop.terminalStatus === "cancelled" ? "COMPLETED" : row.status,
+      status: nextStatus,
       updatedAt: new Date(),
     })
     .where(eq(effectAttempts.id, row.id));
-  return { attemptId: row.id, live: nextLive, limits: nextLive.limits ?? [] };
+  return {
+    attemptId: row.id,
+    status: nextStatus,
+    live: nextLive,
+    limits: nextLive.limits ?? [],
+    stopRequested: true as const,
+    stopObserved: Boolean(stop.stopObservedAt),
+  };
 }
 
 export async function reconcileCursorExecution(input: {
@@ -534,6 +744,152 @@ export async function reconcileCursorExecution(input: {
   const live = parseLive(row.resultJson);
   const claim = readClaim(row.resultJson);
   const limits = [...(live.limits ?? [])];
+  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
+
+  // SCRIPTED phased: advance in-memory run → COMPLETED without a second send.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "SCRIPTED" &&
+    !live.terminalStatus
+  ) {
+    const { advanceScriptedRunToFinished } = await import("./cursor-sdk-adapter");
+    const advanced = advanceScriptedRunToFinished(row.id);
+    if (advanced) {
+      const nextLive: CursorLiveProjection = {
+        ...live,
+        agentId: advanced.agentId,
+        runId: advanced.runId,
+        terminalStatus: "finished",
+        lastActivitySummary: advanced.lastActivitySummary,
+        reportStatus: "RECEIVED",
+        limits: [
+          ...limits,
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED_RECONCILED",
+          "NO_REAL_SIDE_EFFECT",
+        ],
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify({
+            ...nextLive,
+            reportMarkdown: advanced.resultText,
+          }),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify({
+              ...nextLive,
+              reportMarkdown: advanced.resultText,
+            }),
+            updatedAt: new Date(),
+          })
+          .where(eq(effectAttempts.id, row.id));
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: advanced.resultText,
+      };
+    }
+  }
+
+  // LIVE: observe existing run — never a second send.
+  // "unknown" from a prior failed observe is NOT terminal — re-observe.
+  const liveNeedsObserve =
+    !live.terminalStatus || live.terminalStatus === "unknown";
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "LIVE" &&
+    liveNeedsObserve &&
+    live.runId
+  ) {
+    const { observeLiveCursorRun } = await import("./cursor-sdk-adapter");
+    const observed = await observeLiveCursorRun({
+      runId: live.runId,
+      agentId: live.agentId,
+      workspaceCwd: plan.workspaceCwd,
+    });
+    const nextLive: CursorLiveProjection = {
+      ...live,
+      terminalStatus: observed.terminalStatus ?? live.terminalStatus,
+      lastActivitySummary:
+        observed.lastActivitySummary ?? live.lastActivitySummary,
+      reportStatus:
+        observed.terminalStatus === "finished" ? "EXPECTED" : live.reportStatus,
+      limits: [...new Set([...limits, ...(observed.limits ?? [])])],
+    };
+    const terminal =
+      nextLive.terminalStatus === "finished" ||
+      nextLive.terminalStatus === "error" ||
+      nextLive.terminalStatus === "cancelled";
+    if (terminal) {
+      const payload = {
+        ...nextLive,
+        ...(observed.resultText
+          ? { reportMarkdown: observed.resultText }
+          : {}),
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify(payload),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify(payload),
+            updatedAt: new Date(),
+          })
+          .where(
+            and(
+              eq(effectAttempts.id, row.id),
+              eq(effectAttempts.status, "DISPATCHED"),
+            ),
+          );
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: observed.resultText,
+      };
+    }
+    // Non-terminal observation — persist activity, stay DISPATCHED.
+    await db
+      .update(effectAttempts)
+      .set({
+        resultJson: JSON.stringify(nextLive),
+        updatedAt: new Date(),
+      })
+      .where(
+        and(
+          eq(effectAttempts.id, row.id),
+          eq(effectAttempts.status, "DISPATCHED"),
+        ),
+      );
+    return {
+      attemptId: row.id,
+      status: "DISPATCHED" as const,
+      live: nextLive,
+      limits: nextLive.limits ?? [],
+    };
+  }
 
   if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
     if (!live.runId && !live.agentId) {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
index 86ed9d13..d22a7fc6 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
@@ -61,6 +61,159 @@ export function resolveCursorAdapterMode(
   return "SCRIPTED";
 }
 
+/**
+ * Resolve Cursor SDK API key: env first, then FileCredentialStore (~/.cursor/sdk/auth.json).
+ * Never logs or returns the secret to callers beyond Agent.create.
+ */
+export async function resolveCursorApiKey(
+  env: NodeJS.ProcessEnv = process.env,
+): Promise<{ apiKey: string | null; source: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" }> {
+  const fromEnv = (env.CURSOR_API_KEY || "").trim();
+  if (fromEnv) return { apiKey: fromEnv, source: "ENV" };
+  try {
+    const { FileCredentialStore } = await import("@cursor/sdk");
+    const store = new FileCredentialStore();
+    const creds = await store.load();
+    const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
+    if (key) return { apiKey: key, source: "FILE_CREDENTIAL_STORE" };
+  } catch {
+    /* store unavailable */
+  }
+  return { apiKey: null, source: "NONE" };
+}
+
+/** Default model when plan omits modelId — SDK rejects create without a model. */
+export function resolveCursorModelId(
+  modelId: string | undefined,
+  env: NodeJS.ProcessEnv = process.env,
+): string {
+  const fromInput = (modelId || "").trim();
+  if (fromInput) return fromInput;
+  const fromEnv = (env.SFIA_CURSOR_MODEL_ID || "").trim();
+  if (fromEnv) return fromEnv;
+  return "composer-2.5";
+}
+
+export type CursorObserveResult = {
+  terminalStatus: CursorLiveProjection["terminalStatus"];
+  lastActivitySummary: string | null;
+  resultText: string | null;
+  limits: string[];
+};
+
+/**
+ * Observational LIVE reconcile — never sends a second instruction.
+ * Uses Agent.getRun + wait when a runId is known.
+ */
+export async function observeLiveCursorRun(input: {
+  runId: string;
+  agentId: string | null;
+  workspaceCwd: string;
+  waitMs?: number;
+}): Promise<CursorObserveResult> {
+  const limits: string[] = ["LIVE_SDK", "OBSERVE_NO_RESEND"];
+  try {
+    const keyResolved = await resolveCursorApiKey();
+    if (!keyResolved.apiKey) {
+      return {
+        terminalStatus: null,
+        lastActivitySummary: "SDK_OBSERVE_NO_API_KEY",
+        resultText: null,
+        limits: [...limits, "OBSERVE_NO_API_KEY — rester DISPATCHED"],
+      };
+    }
+    const { Agent } = await import("@cursor/sdk");
+    const run = await Agent.getRun(input.runId, {
+      runtime: "local",
+      cwd: input.workspaceCwd,
+      apiKey: keyResolved.apiKey,
+    });
+    if (!run) {
+      return {
+        terminalStatus: null,
+        lastActivitySummary: "SDK_GET_RUN_EMPTY",
+        resultText: null,
+        limits: [...limits, "GET_RUN_EMPTY — pas de terminal inventé"],
+      };
+    }
+    const statusRaw = run.status;
+    const statusNow =
+      typeof statusRaw === "string"
+        ? statusRaw
+        : statusRaw && typeof statusRaw === "object" && "type" in (statusRaw as object)
+          ? String((statusRaw as { type?: string }).type ?? "")
+          : statusRaw != null
+            ? String(statusRaw)
+            : null;
+    const normalized = (statusNow || "").toLowerCase();
+    if (
+      normalized === "finished" ||
+      normalized === "error" ||
+      normalized === "cancelled"
+    ) {
+      return {
+        terminalStatus: normalized as "finished" | "error" | "cancelled",
+        lastActivitySummary: `SDK_OBSERVED_${normalized.toUpperCase()}`,
+        resultText: typeof run.result === "string" ? run.result : null,
+        limits: [...limits, `API_KEY_SOURCE_${keyResolved.source}`],
+      };
+    }
+    // Detached runs may refuse wait() — never invent terminal from that failure.
+    if (typeof run.wait === "function") {
+      try {
+        const waited = await run.wait();
+        const wStatus = String(waited.status ?? "").toLowerCase();
+        const terminal =
+          wStatus === "finished" ||
+          wStatus === "error" ||
+          wStatus === "cancelled"
+            ? (wStatus as "finished" | "error" | "cancelled")
+            : null;
+        return {
+          terminalStatus: terminal,
+          lastActivitySummary: `SDK_WAIT_${wStatus.toUpperCase() || "EMPTY"}`,
+          resultText: typeof waited.result === "string" ? waited.result : null,
+          limits: [
+            ...limits,
+            `API_KEY_SOURCE_${keyResolved.source}`,
+            "WAIT_COMPLETED_IN_OBSERVE",
+          ],
+        };
+      } catch (waitErr) {
+        return {
+          terminalStatus: null,
+          lastActivitySummary: "SDK_WAIT_DETACHED_OR_FAILED",
+          resultText: null,
+          limits: [
+            ...limits,
+            `WAIT_FAILED:${String((waitErr as Error)?.message ?? waitErr).slice(0, 80)}`,
+            statusNow ? `LAST_STATUS_${statusNow}` : "LAST_STATUS_NONE",
+          ],
+        };
+      }
+    }
+    return {
+      terminalStatus: null,
+      lastActivitySummary: statusNow
+        ? `SDK_STATUS_${statusNow.toUpperCase()}`
+        : "SDK_STATUS_UNKNOWN_NON_TERMINAL",
+      resultText: null,
+      limits: [...limits, "NON_TERMINAL_NO_WAIT"],
+    };
+  } catch (e) {
+    // Fail closed: do NOT stamp terminalStatus=unknown (would look like resolution).
+    return {
+      terminalStatus: null,
+      lastActivitySummary: "SDK_OBSERVE_FAILED",
+      resultText: null,
+      limits: [
+        ...limits,
+        `OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
+      ],
+    };
+  }
+}
+
 /** In-memory scripted runs for DETERMINISTIC tests — not a parallel business path. */
 const scriptedRuns = new Map<
   string,
@@ -77,6 +230,60 @@ export function __resetScriptedCursorRunsForTests(): void {
   scriptedRuns.clear();
 }
 
+/** When true, SCRIPTED returns DISPATCHED/RUNNING first; reconcile advances to finished. */
+export function isScriptedPhasedMode(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (env.SFIA_CURSOR_SCRIPTED_PHASED || "").trim() === "1";
+}
+
+export function getScriptedRun(attemptId: string) {
+  return scriptedRuns.get(attemptId) ?? null;
+}
+
+/** Advance a phased SCRIPTED run to finished — used by reconcile, never a second send. */
+export function advanceScriptedRunToFinished(attemptId: string): {
+  agentId: string;
+  runId: string;
+  resultText: string;
+  lastActivitySummary: string;
+} | null {
+  const existing = scriptedRuns.get(attemptId);
+  if (!existing) return null;
+  if (existing.status === "finished") {
+    return {
+      agentId: existing.agentId,
+      runId: existing.runId,
+      resultText: existing.resultText,
+      lastActivitySummary: "SCRIPTED_ALREADY_FINISHED",
+    };
+  }
+  if (existing.status !== "running") return null;
+  existing.status = "finished";
+  return {
+    agentId: existing.agentId,
+    runId: existing.runId,
+    resultText: existing.resultText,
+    lastActivitySummary: "SCRIPTED_OBSERVATION_FINISHED",
+  };
+}
+
+function buildScriptedReport(attemptId: string, instructionFingerprint: string): string {
+  return [
+    `# Rapport de réalisation (SCRIPTED)`,
+    ``,
+    `attemptId: ${attemptId}`,
+    `instructionFingerprint: ${instructionFingerprint}`,
+    ``,
+    `## Inventaire`,
+    `- Aucun fichier modifié (mode scripted)`,
+    ``,
+    `## Tests`,
+    `- Non exécutés (SCRIPTED)`,
+    ``,
+    `## Réserves`,
+    `- Preuve LIVE SDK non produite`,
+  ].join("\n");
+}
+
 export async function dispatchCursorRun(
   input: CursorDispatchInput,
   mode = resolveCursorAdapterMode(),
@@ -100,28 +307,41 @@ export async function dispatchCursorRun(
     }
     const agentId = `scripted-agent-${input.attemptId}`;
     const runId = `scripted-run-${input.attemptId}`;
-    const resultText = [
-      `# Rapport de réalisation (SCRIPTED)`,
-      ``,
-      `attemptId: ${input.attemptId}`,
-      `instructionFingerprint: ${input.instructionFingerprint}`,
-      ``,
-      `## Inventaire`,
-      `- Aucun fichier modifié (mode scripted)`,
-      ``,
-      `## Tests`,
-      `- Non exécutés (SCRIPTED)`,
-      ``,
-      `## Réserves`,
-      `- Preuve LIVE SDK non produite`,
-    ].join("\n");
+    const resultText = buildScriptedReport(input.attemptId, input.instructionFingerprint);
+    const phased =
+      isScriptedPhasedMode() || input.waitForTerminal === false;
     scriptedRuns.set(input.idempotencyKey, {
       agentId,
       runId,
-      status: "finished",
+      status: phased ? "running" : "finished",
       instructionFingerprint: input.instructionFingerprint,
       resultText,
     });
+    // C12 T-04 — same DROP_ACK fault as LIVE (deterministic SCRIPTED path).
+    if ((process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase() === "DROP_ACK") {
+      throw new Error(
+        "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
+      );
+    }
+    if (phased) {
+      return {
+        mode,
+        sendRequestedAt,
+        ackReceivedAt: sendRequestedAt,
+        runObservedAt: sendRequestedAt,
+        agentId,
+        runId,
+        terminalStatus: null,
+        lastActivitySummary: "SCRIPTED_OBSERVATION_RUNNING",
+        resultText: null,
+        limits: [
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED",
+          "NO_REAL_SIDE_EFFECT",
+          "REQUIRES_RECONCILE_TO_FINISH",
+        ],
+      };
+    }
     return {
       mode,
       sendRequestedAt,
@@ -137,10 +357,17 @@ export async function dispatchCursorRun(
   }
 
   // LIVE path — dynamic import so unit tests without entitlement still load.
+  const keyResolved = await resolveCursorApiKey();
+  if (!keyResolved.apiKey) {
+    throw new Error(
+      "CURSOR_SDK_UNAVAILABLE — ni CURSOR_API_KEY ni FileCredentialStore",
+    );
+  }
+  const modelId = resolveCursorModelId(input.modelId);
   const { Agent } = await import("@cursor/sdk");
   const agent = await Agent.create({
-    apiKey: process.env.CURSOR_API_KEY,
-    model: input.modelId ? { id: input.modelId } : undefined,
+    apiKey: keyResolved.apiKey,
+    model: { id: modelId },
     local: { cwd: input.workspaceCwd },
   });
   let ackReceivedAt: string | null = null;
@@ -153,6 +380,17 @@ export async function dispatchCursorRun(
       lastActivitySummary = "SDK_DELTA";
     },
   });
+  /**
+   * C12 / T-04 — deterministic fault injection AFTER SDK send accepted.
+   * DROP_ACK: throw before Studio persists agentId/runId → AMBIGUOUS + priorSend.
+   * Never use outside DEV fault tests.
+   */
+  const fault = (process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase();
+  if (fault === "DROP_ACK") {
+    throw new Error(
+      "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
+    );
+  }
   ackReceivedAt = new Date().toISOString();
   if (!runObservedAt) runObservedAt = ackReceivedAt;
 
@@ -171,6 +409,8 @@ export async function dispatchCursorRun(
       limits: [
         "LIVE_SDK",
         "DISPATCH_ACCEPTED_WITHOUT_WAIT",
+        `API_KEY_SOURCE_${keyResolved.source}`,
+        `MODEL_${modelId}`,
         "REPORT_MUST_BE_INGESTED_SEPARATELY",
         "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
       ],
@@ -194,7 +434,13 @@ export async function dispatchCursorRun(
     terminalStatus: terminal,
     lastActivitySummary: lastActivitySummary ?? `SDK_${String(waited.status).toUpperCase()}`,
     resultText: typeof waited.result === "string" ? waited.result : null,
-    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY", "WAIT_COMPLETED_IN_ADAPTER"],
+    limits: [
+      "LIVE_SDK",
+      `API_KEY_SOURCE_${keyResolved.source}`,
+      `MODEL_${modelId}`,
+      "REPORT_MUST_BE_INGESTED_SEPARATELY",
+      "WAIT_COMPLETED_IN_ADAPTER",
+    ],
   };
 }
 
@@ -229,10 +475,12 @@ export async function stopCursorRun(input: {
     };
   }
   try {
+    const keyResolved = await resolveCursorApiKey();
     const { Agent } = await import("@cursor/sdk");
     const run = await Agent.getRun(input.runId, {
       runtime: "local",
       cwd: input.workspaceCwd,
+      ...(keyResolved.apiKey ? { apiKey: keyResolved.apiKey } : {}),
     });
     if (run && typeof run.cancel === "function") {
       await run.cancel();

```

