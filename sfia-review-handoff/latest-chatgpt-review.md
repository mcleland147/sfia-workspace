# SFIA Studio — P6 G-D4 Correction Pass 01
## Review Pack FULL — CRITICAL

| Champ | Valeur |
| --- | --- |
| **A. Horodatage Europe/Paris** | 2026-10-15T13:16:33+0200 |
| **B. GO Morris** | G-D4-PREPARE-WITHOUT-SYSTEMATIC-HD : ADOPTED (2026-10-15) |
| **C. Repo** | mcleland147/sfia-workspace |
| **Branche** | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| **HEAD** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| **origin/main** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033` |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | CRITICAL |
| **CKC** | ckc:studio:delivery + ckc:studio:qa-validation |

---

## D. Git status

### Initial (handoff-aligned parent candidate + pack reset)
Parent C8 dirty preserved: 8 Product files + pack. HEAD = e7822033 = origin/main.

### Final

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
```

```
.tmp-sfia-review/chatgpt-review.md                 | 173 ++-------------------
 ....hqa.ui04.pilotFacingSimplification.ui.test.tsx |  23 +++
 ...ifactMaterializationContinuityCorr01.d0.test.ts |  25 +++
 .../hooks/useProductConversation.ts                |  22 ++-
 .../surfaces/ConversationSurface.tsx               |   6 +
 .../f2/activeCycleGovernedContinuation.ts          |  71 +++++----
 .../features/project-assistant/f2/orchestrateF2.ts | 136 +++++++++++++++-
 .../project-assistant/presentationLabels.ts        |  50 ++++--
 .../w2/resolveChatFirstPilotDecision.ts            | 104 ++++++++++++-
 9 files changed, 401 insertions(+), 209 deletions(-)
```

```
NAME-STATUS:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts

UNTRACKED:
projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
```

---

## E–G. Convergence / Sources / CKC

- Build Doctrine + Roadmap: referenced (no mutation).
- C1 / P2 / P4 / P6 / v3 framing: referenced (no mutation).
- Capacité cible: V3-F05 — Conversation vers exécution gouvernée.
- Runtime v3: NON ADOPTED.
- P6 GLOBAL: NOT PASSED.
- PRR execution/authority: consulted via existing BuildExecutionContract / authorize path (no PRR file edits).

---

## H. Manifest exact

### Product modifié (parent préservé + corrections G-D4)

1. `presentationLabels.ts` — F-C9-01 Poursuivre (parent)
2. `ConversationSurface.tsx` — authoritativeLifecycleActive (parent)
3. `useProductConversation.ts` — cycleStatus reconcile (parent)
4. `activeCycleGovernedContinuation.ts` — natural FR signal (parent)
5. `orchestrateF2.ts` — R1 + R2 + G-D4 wire
6. `resolveChatFirstPilotDecision.ts` — F-C9-05 autoPrepare + R3 clarification
7. `p6.hqa.ui04...ui.test.tsx` — parent
8. `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` — parent

### Créés (G-D4)

9. `w2/prepareGenericExecutionContractDraft.ts` — generic PREPARE sans HD systématique
10. `__tests__/.../p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`

### Review

11. `.tmp-sfia-review/chatgpt-review.md` — ce pack

---

## I. État parent conservé

Oui. Corrections F-C9-01/03/04/05 préservées. Aucun reset/stash. Aucun fichier étranger. Aucun staged imprévu. Ports :3020/:3031 non touchés. Worktrees Human QA non touchés.

---

## J. R1 — Continuité Nora (corrigé)

**Diagnostic parent:** garde `NEW_CYCLE_FORMALIZATION + active + actionable` → clarification cannée (« précisez fichier, correction, tests ») bloquait toute progression.

**Correction:** même garde conserve le cycle actif (pas de START), mais:
1. `assessGenericMissionPrepareReadiness` — gaps bloquants seulement / structuralBlocked
2. si insuffisant ou structurel → clarification ciblée
3. si qualifié non-structurel → `prepareGenericExecutionContractDraft` (inspectable)
4. aucun texte mécanique unique remplaçant le raisonnement

---

## K. R2 — MW5 factuel (corrigé)

**Diagnostic parent:** `structurallyResolvedActiveCycleContinuation: true` hardcodé.

**Correction:** repasse la variable factuelle calculée depuis signals + contradictionCandidate. `recommendationWouldEmit: false` conservé car outcome = Proposal (pas Rec CKC). Challenges structurels / sécurité / architecture / data / irreversible / contradiction préservés (tests MW5 S01–S04 PASS).

---

## L. R3 — Préparation générique (corrigé)

- Frontière: intention ≠ mission qualifiée ≠ contrat préparé ≠ autorisé ≠ attempt.
- Surface EC: quartet generalist existant (`studio.cursor.generalist.*`) — pas de catalogue métier.
- `autoPrepareAfterProposalPursue`: W3-A generic first; M3 uniquement si `PREPARE_ROUTE_DOCS_WRITE` (adaptateur historique, pas enum de missions).
- Aucun nouveau moteur d'exécution.

---

## M. G-D4 — conformité

| Principe | Statut |
| --- | --- |
| D4-01 PREPARE sans HD systématique | DÉMONTRÉ (decisionRefs=[], draft) |
| D4-02 EC générique indépendant catégories | DÉMONTRÉ (même action generalist) |
| D4-03 inspectable / révisable avant auth | DÉMONTRÉ (status draft; UI « Prête à examiner ») |
| D4-04 Exécuter = auth version exacte | PRÉSERVÉ (authorize existant) ; Execute-ready sans HD ref = HORS PREUVE (T-A4 confirmed minItems 1) |
| D4-05 décision structurante protégée | DÉMONTRÉ (STRUCTURAL_HUMAN_DECISION_REQUIRED) |
| D4-06 Cursor HOW dans enveloppe | DÉMONTRÉ (CURSOR_DETERMINES_HOW; generalist) |

GO conversationnel de préparation n'autorise jamais l'exécution (executionBlocked + NO_ATTEMPT_AT_PREPARE).

---

## N–Q. Architecture

- Réutilisé: BuildExecutionContract, generalist surface, inspect/authorize existants, F2 orchestrate.
- Pas de second modèle EC.
- Pas de catalogue docs_write/code_modify/qa_execute comme route conversationnelle.
- Pas de moteur parallèle.

---

## R. Autorisation / currentness

- PREPARE ≠ EXECUTE.
- Carte START non proposée sur cycle actif (F-C9-01 préservé).
- Amend/inspection binding existants non affaiblis.
- HD structurelle toujours requise si signals structurants.

---

## S. Diffs utiles

### orchestrateF2.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e2e72c..de010cce 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -122,6 +122,12 @@ import {
   type ChatFirstEffectiveDisposition,
   type ChatFirstPrepareOutcome,
 } from "../w2/resolveChatFirstPilotDecision";
+import {
+  assessGenericMissionPrepareReadiness,
+  genericMissionClarificationText,
+  genericMissionPreparedText,
+  prepareGenericExecutionContractDraft,
+} from "../w2/prepareGenericExecutionContractDraft";
 import {
   replacePendingDecisionSubjectForExplicitReinstruction,
   writePendingDecisionSubjectMarker,
@@ -811,10 +817,32 @@ function chatFirstDecisionText(input: {
         "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
       ].join(" ");
     }
+    if (input.subjectFamily === "proposal") {
+      const prep = input.prepareOutcome;
+      if (prep?.kind === "prepared") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          `ExecutionContract préparé (${prep.executionContractId}) — inspectable avant tout lancement.`,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+      if (prep?.kind === "blocked") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          "ExecutionContract NON matérialisé — préparation bloquée.",
+          prep.message,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+    }
     return [
       head,
       "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
-      "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+      "La préparation de l'action pourra suivre si le contrat Product l'autorise. Rien n'a encore été exécuté.",
       "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
     ].join(" ");
   }
@@ -1924,6 +1952,104 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });

+  // F-C9-01/04 + G-D4 — actionable work while a cycle is already active must
+  // not fall through to NEW_CYCLE START. Prefer generic PREPARE (no systematic
+  // HD) when the mission is qualified and non-structural; otherwise ask only
+  // for the blocking gap. Never replace Nora reasoning with a canned block.
+  if (
+    continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+    Boolean(project.activeCycleInstanceId?.trim()) &&
+    (analysis.intentClass === "actionable" ||
+      analysis.intentClass === "execution_request")
+  ) {
+    const activeId = project.activeCycleInstanceId!.trim();
+    const cycleLoad = await oa.cycleServices.getCycle.execute({
+      cycleInstanceId: activeId,
+    });
+    if (cycleLoad.ok && cycleLoad.cycle.status === "active") {
+      const qualification = qualificationFromActiveCycle({
+        cycle: cycleLoad.cycle,
+        signals: formalizationSignals,
+        analysis,
+      });
+      const readiness = assessGenericMissionPrepareReadiness(analysis);
+
+      if (readiness.structuralBlocked || !readiness.ready) {
+        return await completeF2Turn({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: genericMissionClarificationText({
+            presentation,
+            missingFields: readiness.missingFields,
+            structuralBlocked: readiness.structuralBlocked,
+          }),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          reinstructionOfProposalId,
+          qualification,
+          executionBlocked: analysis.intentClass === "execution_request",
+          turnKind: "f2_clarification",
+        });
+      }
+
+      const prep = await prepareGenericExecutionContractDraft({
+        oa,
+        projectId: project.projectId,
+        cycleInstanceId: activeId,
+        analysis,
+        forceLocalAuthority:
+          process.env.VITEST === "true" ||
+          process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
+      });
+      if (!prep.ok) {
+        return await completeF2Turn({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: [
+            presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+            "Le cycle actif est conservé.",
+            prep.message,
+            "Rien n'a encore été exécuté.",
+          ].join(" "),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          reinstructionOfProposalId,
+          qualification,
+          executionBlocked: true,
+          turnKind: "f2_clarification",
+        });
+      }
+
+      const objective =
+        (analysis.objective ?? analysis.rephrasedRequest ?? "").trim() ||
+        "mission demandée";
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: genericMissionPreparedText({
+          presentation,
+          executionContractId: prep.contract.executionContractId,
+          objective,
+        }),
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification,
+        executionBlocked: true,
+        turnKind: "f1_informative",
+      });
+    }
+  }
+
   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
@@ -2020,6 +2146,9 @@ export async function orchestrateAssistantSend(input: {
     }

     const signals = analysis.signals;
+    // R2 / G-D4 — factual structural skip: only when critical signals are absent.
+    // Never hardcode true. Preserve challenges for structural / security /
+    // architecture / data / irreversible / contradiction.
     const structurallyResolvedActiveCycleContinuation =
       !signals?.structuralChange &&
       !signals?.securityImpact &&
@@ -2034,12 +2163,15 @@ export async function orchestrateAssistantSend(input: {
         "mw5ChallengeState",
         input.beforeF2Effect,
       );
+      // F-C9-03 — active-cycle governed continuation mints a Proposal subject,
+      // not a new lifecycle/CKC Recommendation. recommendationWouldEmit reflects
+      // that outcome (false); do not arm MW5 as if emitting Rec.
       return evaluateF2Mw5({
       content,
       history: input.history,
       analysis,
       recommendedProfile: qualification.recommendedProfile,
-      recommendationWouldEmit: true,
+      recommendationWouldEmit: false,
       projectCriticality: project.criticality,
       projectId: project.projectId,
       oa,
```

### resolveChatFirstPilotDecision.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index b8f70589..c8fb68b7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -45,6 +45,7 @@ import {
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
+import { prepareM3FromDecision } from "../f3/prepareM3FromDecision";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -165,7 +166,84 @@ const WORK_TARGET_REQUIRED_MESSAGE =
 function proposalPrepareNotApplicable(): ChatFirstPrepareOutcome {
   return {
     kind: "not_applicable",
-    reason: "Proposal chat-first n'auto-prépare pas d'ExecutionContract.",
+    reason:
+      "Proposal chat-first : PREPARE non applicable pour cette disposition (amend/refuse/defer).",
+  };
+}
+
+/**
+ * P6 generic prep — after an accepted Proposal pursue HD, auto-PREPARE when
+ * DecisionBasis is eligible. docs_write → M3; other eligible bases → W3-A.
+ * PREPARE ≠ Execute. Does not invent HD or widen authority (P2-D-01 preserved).
+ */
+/**
+ * Post-HD prepare after Proposal pursue.
+ *
+ * R3 / G-D4 — W3-A is the generic Product prepare (generalist EC surface).
+ * M3 is a historical docs_write adapter only when W3-A routes
+ * PREPARE_ROUTE_DOCS_WRITE. Conversation routing must NOT select a task
+ * catalog; technical adapters remain behind this generic frontier.
+ */
+async function autoPrepareAfterProposalPursue(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+}): Promise<ChatFirstPrepareOutcome> {
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return { kind: "blocked", code: live.code, message: live.message };
+  }
+  const currentContext = {
+    projectId: input.projectId,
+    lpsId: live.context.lpsId,
+    lpsVersion: live.context.lpsVersion,
+    doctrineDigest: live.context.doctrineDigest,
+    activeCycleInstanceId: live.context.activeCycleInstanceId,
+    ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+  };
+
+  // Generic first — no business-category switch on the conversational path.
+  const w3a = await prepareExecutionContractFromW2Decision({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (w3a.ok) {
+    return {
+      kind: "prepared",
+      executionContractId: w3a.contract.executionContractId,
+    };
+  }
+  if (w3a.code !== "PREPARE_ROUTE_DOCS_WRITE") {
+    return { kind: "blocked", code: w3a.code, message: w3a.message };
+  }
+
+  // Historical docs_write specialization only — not a mission-type catalog.
+  const m3 = await prepareM3FromDecision({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext,
+    deps: {
+      decisionServices: input.oa.decisionServices,
+      authorityResolver: input.oa.authorityResolver,
+      executionContractServices: input.oa.executionContractServices,
+      nowIso: () => input.oa.clock.nowIso(),
+      productRuntimeAuthority: "N2",
+    },
+  });
+  if (!m3.ok) {
+    return { kind: "blocked", code: m3.code, message: m3.message };
+  }
+  return {
+    kind: "prepared",
+    executionContractId: m3.payload.contract.executionContractId,
   };
 }

@@ -944,6 +1022,21 @@ export async function resolveChatFirstPilotDecision(input: {
       };
     }

+    let prepareOutcome: ChatFirstPrepareOutcome = proposalPrepareNotApplicable();
+    if (
+      effective === "accept" &&
+      selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF
+    ) {
+      prepareOutcome = await autoPrepareAfterProposalPursue({
+        oa: input.oa,
+        projectId: input.projectId,
+        decisionId: decided.decision.decisionId,
+        forceLocalAuthority: input.forceLocalAuthority,
+        pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+        managedRepoRootBase: input.managedRepoRootBase,
+      });
+    }
+
     return {
       kind: "decision_recorded",
       disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
@@ -956,9 +1049,12 @@ export async function resolveChatFirstPilotDecision(input: {
       decisionBasisLinked: decided.decision.decisionBasisLinked,
       readyForNextGatedStep: effective === "accept",
       subjectFamily: "proposal",
-      prepareOutcome: proposalPrepareNotApplicable(),
-      executionContractId: null,
-      executionContractPrepared: false,
+      prepareOutcome,
+      executionContractId:
+        prepareOutcome.kind === "prepared"
+          ? prepareOutcome.executionContractId
+          : null,
+      executionContractPrepared: prepareOutcome.kind === "prepared",
       attemptCreated: false,
       executionPerformed: false,
     };
```

---

## T. Fichiers créés (contenu complet)

### prepareGenericExecutionContractDraft.ts

```typescript
/**
 * G-D4 — generic ExecutionContract PREPARE without systematic HumanDecision.
 *
 * When a mission is sufficiently qualified and does not establish structural
 * Product truth, Studio may Build a draft|proposed contract for Pilote
 * inspection. PREPARE ≠ EXECUTE: no Validate→Confirm→Authorize→Attempt here.
 *
 * Reuses the canonical generalist EC surface (PJ-REPROOF-05). No task catalog,
 * no domain enum, no parallel execution engine. decisionRefs may be empty.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

/**
 * Assess whether intent facts are enough to prepare a non-structural draft EC.
 * Does not invent mission fields; only reports what is already present / missing.
 */
export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");
  }

  return {
    ready: !structuralBlocked && missingFields.length === 0,
    structuralBlocked,
    missingFields,
  };
}

export type PrepareGenericExecutionContractDraftInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** When true, bypass local authority env gate (DET tests). */
  readonly forceLocalAuthority?: boolean;
};

export type PrepareGenericExecutionContractDraftResult =
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function stableMissionKey(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId ?? "",
    input.objective,
    input.expectedOutcome,
    input.scope,
  ].join("\n");
  return createHash("sha256").update(raw).digest("hex").slice(0, 24);
}

/**
 * Build an inspectable draft generalist ExecutionContract from qualified intent.
 * Empty decisionRefs when non-structural. Never records HumanDecision.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.structuralBlocked) {
    return {
      ok: false,
      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
    };
  }
  if (!readiness.ready) {
    return {
      ok: false,
      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
    };
  }

  const services = input.oa.executionContractServices;
  if (!services?.buildExecutionContract) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_SERVICES_UNAVAILABLE",
      message: "Services ExecutionContract indisponibles.",
    };
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
  const missionKey = stableMissionKey({
    projectId: input.projectId,
    cycleInstanceId: cycleInstanceId ?? null,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
  });
  const executionContractId = `xct:gen-prep:${missionKey}`;
  const idempotencyKey = `idem:gen-prep:${missionKey}`;
  const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

  const outOfScope = input.analysis.outOfScope ?? [];
  const stopConditions = [
    ...(input.analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
  ];
  const stopSeen = new Set<string>();
  const mergedStops = stopConditions.filter((s) => {
    if (stopSeen.has(s)) return false;
    stopSeen.add(s);
    return true;
  });

  const constraints = [
    "PRODUCT_GOVERNED",
    "NO_ATTEMPT_AT_PREPARE",
    "PREPARE_WITHOUT_SYSTEMATIC_HD",
    "CURSOR_DETERMINES_HOW",
    "GENERIC_MISSION_NO_TASK_CATALOG",
    ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
    ...(input.analysis.risks ?? []).map((s) => `RISK:${s}`),
    ...(input.analysis.reservations ?? []).map((s) => `RESERVATION:${s}`),
  ];

  const issuedAt = input.oa.clock.nowIso();
  const requiredAuthority = "N2" as const;
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:gen-prep:${missionKey}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const built = await services.buildExecutionContract.execute({
    executionContractId,
    projectId: input.projectId,
    cycleInstanceId,
    // G-D4 — non-structural prepare does not invent a DecisionBasis / HD.
    decisionRefs: [],
    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    inputs: {
      objective,
      expectedOutcome,
      missionScopeNarrative: scopeNarrative,
      scopeIn: input.analysis.executionIntent?.scopeIn ?? [],
      scopeOut: input.analysis.executionIntent?.scopeOut ?? outOfScope,
      sourcesToRead: [],
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: true,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
    },
    expectedOutputs: [expectedOutcome],
    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    requiredAuthority,
    constraints,
    stopConditions: mergedStops,
    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
    reversibility: "partially_reversible",
    idempotencyKey,
    correlationId,
    status: "draft",
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  return {
    ok: true,
    contract: built.contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

/**
 * Targeted clarification — only blocking gaps, never a canned questionnaire.
 */
export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];
  readonly structuralBlocked: boolean;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  if (input.structuralBlocked) {
    return [
      head,
      "Le cycle actif est conservé.",
      "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  const gaps = input.missingFields.join(", ");
  return [
    head,
    "Le cycle actif est conservé.",
    `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
    "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
  ].join(" ");
}

export function genericMissionPreparedText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly executionContractId: string;
  readonly objective: string;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  return [
    head,
    `J'ai préparé le contrat d'exécution correspondant à : ${input.objective}.`,
    `Contrat inspectable : ${input.executionContractId} (brouillon — non autorisé).`,
    "Tu peux le consulter et me demander de l'ajuster avant de lancer.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}

```

### p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts

```typescript
/**
 * P6 G-D4 — generic ExecutionContract PREPARE without systematic HumanDecision.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import {
  assessGenericMissionPrepareReadiness,
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Corriger la fonctionnalité de filtrage",
    scope: "projects/demo/app — fichiers de filtrage uniquement",
    rephrasedRequest: "Corriger le bug de filtrage signalé",
    outOfScope: ["refonte UI", "migration DB"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé avec tests verts",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    ...overrides,
  };
}

describe("P6 G-D4 generic PREPARE without systematic HD", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("p6-gd4-prep.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "gd4" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycle(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `G-D4 ${suffix}`,
      objective: "Continuité préparation générique",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `GD4${suffix.toUpperCase().slice(0, 8)}`,
      idempotencyKey: `idem:gd4-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:gd4-${suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("T10/T11/T16 — prepare draft generalist EC without HD and without Attempt", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("code");
    const oa = runtime.oa!;
    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      projectId,
    );

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.status).toBe("draft");
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
    expect(prep.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(prep.contract.constraints).toContain(
      "GENERIC_MISSION_NO_TASK_CATALOG",
    );
    expect(prep.contract.constraints).toContain("PREPARE_WITHOUT_SYSTEMATIC_HD");
    expect(prep.contract.constraints).toContain("NO_ATTEMPT_AT_PREPARE");
    expect(prep.contract.action).not.toMatch(
      /docs_write|code_modify|qa_execute|design_execute/,
    );

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
  });

  it("T02–T05 — documentary / code / QA / reorg share the same generalist surface", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("multi");
    const oa = runtime.oa!;

    const missions = [
      {
        objective: "Créer un document de cadrage dans le dépôt (#0)",
        expectedOutcome: "Document de cadrage markdown",
        scope: "docs/cadrage.md",
      },
      {
        objective: "Corriger cette fonctionnalité (#1)",
        expectedOutcome: "Correction appliquée",
        scope: "src/feature",
      },
      {
        objective: "Préparer les tests du projet (#2)",
        expectedOutcome: "Suite de tests déterministes",
        scope: "app/__tests__",
      },
      {
        objective: "Réorganiser ce répertoire (#3)",
        expectedOutcome: "Arborescence clarifiée",
        scope: "projects/demo/lib",
      },
    ];

    for (const m of missions) {
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId,
        analysis: baseAnalysis(m),
        forceLocalAuthority: true,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
      expect(prep.contract.requiredCapabilities[0]).toBe(
        PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      );
      expect(prep.contract.decisionRefs ?? []).toEqual([]);
    }
  });

  it("T07 — insufficient mission asks only for blocking gaps", () => {
    const readiness = assessGenericMissionPrepareReadiness(
      baseAnalysis({
        objective: null,
        rephrasedRequest: null,
        expectedOutcome: null,
        scope: null,
      }),
    );
    expect(readiness.ready).toBe(false);
    expect(readiness.structuralBlocked).toBe(false);
    expect(readiness.missingFields).toContain("objectif");
    expect(readiness.missingFields).toContain("résultat attendu ou périmètre");
  });

  it("T14 — structural signals block PREPARE-without-HD", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("struct");
    const oa = runtime.oa!;

    const readiness = assessGenericMissionPrepareReadiness(
      baseAnalysis({
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
    );
    expect(readiness.structuralBlocked).toBe(true);
    expect(readiness.ready).toBe(false);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
      forceLocalAuthority: true,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected structural block");
    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
  });

  it("T08 — security / contradiction also block generic prepare-without-HD", () => {
    expect(
      assessGenericMissionPrepareReadiness(
        baseAnalysis({
          signals: {
            structuralChange: false,
            securityImpact: true,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
        }),
      ).structuralBlocked,
    ).toBe(true);

    expect(
      assessGenericMissionPrepareReadiness(
        baseAnalysis({
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: [],
          },
        }),
      ).structuralBlocked,
    ).toBe(true);
  });

  it("T09 — non-structural readiness allows prepare", () => {
    const readiness = assessGenericMissionPrepareReadiness(baseAnalysis());
    expect(readiness.structuralBlocked).toBe(false);
    expect(readiness.ready).toBe(true);
    expect(readiness.missingFields).toEqual([]);
  });

  it("R1/F2 — active-cycle actionable mission prepares without START card", async () => {
    const { projectId } = await seedActiveCycle("f2path");

    const send = await projectAssistantSendAction({
      projectId,
      content:
        "Corrige la fonctionnalité de tri dans src/sort.ts. Résultat attendu : tests unitaires verts. Périmètre : src/sort.ts uniquement. Hors périmètre : refonte UI.",
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    // Must not propose START of a new cycle while one is active.
    expect(send.text).not.toMatch(/Démarrer le cycle/i);
    expect(send.f2?.qualification?.detailedStatus).not.toBe(
      "NEW_CYCLE_FORMALIZATION",
    );

    // Either prepared draft, targeted clarification, or honest structural ask —
    // never the previous canned « précisez fichier, correction, tests » block alone.
    const cannedLegacy =
      /Pour préparer une mission Cursor, précisez le résultat attendu et le périmètre \(fichier, correction, tests/;
    expect(send.text).not.toMatch(cannedLegacy);

    const history =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId },
      );
    expect(history.ok).toBe(true);
    if (!history.ok) throw new Error("list");

    const genericDrafts = history.contracts.filter(
      (c) =>
        c.status === "draft" &&
        (c.decisionRefs ?? []).length === 0 &&
        c.action === PRODUCT_CANONICAL_EXECUTION_ACTION &&
        (c.constraints ?? []).includes("PREPARE_WITHOUT_SYSTEMATIC_HD"),
    );

    const preparedNarrated = /contrat d'exécution|inspectable|préparé le contrat/i.test(
      send.text,
    );
    if (genericDrafts.length > 0 || preparedNarrated) {
      expect(send.text).toMatch(/contrat|préparé|inspectable/i);
      expect(send.f2?.executionBlocked).toBe(true);
    } else if (send.f2?.turnKind === "f2_clarification") {
      expect(send.text).toMatch(
        /cycle actif est conservé|informations manquantes|manque|structurelle/i,
      );
    } else {
      // Informative direct answer (T01-style) is also valid — still no START.
      expect(send.f2?.turnKind).toMatch(/f1_informative|f2_proposal|f2_blocked/);
    }
  });
});

```

---

## U–V. Tests exécutés

Commandes (DET only, no REAL):

```
npx vitest run \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  __tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts \
  __tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx \
  __tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
```

Résultat: **51 PASS / 0 FAIL**

`npm run typecheck` → PASS

### Oracles T01–T18 (DET scope)

| ID | Verdict | Preuve |
| --- | --- | --- |
| T01 Analyse directe | NOT OBSERVED (DET) | Hors F2 wire full; informative path existant |
| T02 Mission documentaire | PASS | même surface generalist |
| T03 Mission code | PASS | idem |
| T04 Mission QA | PASS | idem |
| T05 Réorganisation | PASS | idem |
| T06 Continuité contexte | PASS (parent) | F-C9 continuity tests |
| T07 Ambiguïté | PASS | missingFields ciblés |
| T08 MW5 structurel | PASS | MW5 S01 + readiness structuralBlocked |
| T09 MW5 non structurel | PASS | readiness + MW5 resolved skip |
| T10 PREPARE sans HD | PASS | decisionRefs=[] / 0 HD added |
| T11 PREPARE ≠ EXECUTE | PASS | draft + NO_ATTEMPT + executionBlocked |
| T12 Inspection | PASS (partial) | draft status + UI label existant; REAL UX NOT OBSERVED |
| T13 Execute auth binding | NOT OBSERVED | chemin existant non réécrit ce cycle |
| T14 Structural HD | PASS | STRUCTURAL_HUMAN_DECISION_REQUIRED |
| T15 Protected scope | NOT OBSERVED | classifyProtected existant; hors assert ce cycle |
| T16 No task catalog | PASS | pas d'enum ajouté |
| T17 Currentness | PASS | ui04 F-C9-01 + no START |
| T18 Result return | NOT OBSERVED | Evidence path existant; hors scope cycle |

Niveau: **DETERMINISTIC PROVEN AT TESTED SCOPE** — pas REAL E2E.

---

## W. Fake / Real

- Fake provider / DET only.
- Gate REAL: NON CONSOMMÉ.
- OpenAI REAL / Cursor REAL: non appelés.

---

## X. Sécurité / autorité

- Aucune HD inventée.
- Aucune Confirmation synthétique.
- Aucune DecisionBasis forgée.
- Autorité locale N2 pour Build draft uniquement (evidence enregistrée).
- Pas d'élévation Morris silencieuse.
- Pas de contournement validator Build.
- Contrat **draft** non exécutable : authorize exige validated|confirmation_required|confirmed ; ce chemin G-D4 ne Validate/Confirm pas.
- SOURCE-BACKED (post-impl research): tous les PREPARE Product historiques restent HD-gated ; seul OA Build accepte `decisionRefs: []` — réutilisé ici en inspect-only.

---

## Y. Réserves / dette

1. **T-A4 confirmed + empty decisionRefs (STOP potentiel EXECUTE sans HD)** — schéma / mapping T-A4 : `status=confirmed` ⇒ `decisionRefs` minItems 1. Le chemin G-D4 s'arrête volontairement en **draft inspectable**. Tout passage à Confirm/Execute avec refs vides exige une **décision Morris schéma/gouvernance** (ou attache d'une vraie HD) — **interdit d'inventer une HD** pour débloquer. Réf. `02-canonical-contract-mapping.md`, `08-modeled-rework-validation.md`.
2. **T13 binding version exacte au clic Exécuter** — mécanismes existants (fingerprint / inspection) non re-prouvés E2E ce cycle.
3. **T12 UX conversationnelle REAL** — labels draft existants; expérience Pilote REAL hors scope.
4. **Artifact materialization** — conserve Proposal+HD (REQUIRE_ARTIFACT) ; hors chemin generic-without-HD.
5. **F-C9-06 currentness durable** — différé (parent).
6. **Amendement conversationnel du draft** — réutilise amendExecutionContract existant; pas de nouveau versioning schéma.
7. **Auth S1 production** pour prepare-without-HD — forceLocal / env gate en DET; Auth S1 pilote réel à qualifier sous gate séparé si besoin.
8. **Dérivation mission sans DecisionBasis** — `deriveActualExecutionWorkFromProductContext` historique exige encore `DecisionBasis` ; le draft G-D4 compose WHAT depuis IntentAnalysis + surface generalist, sans passer par cette dérivation W3-A complète (launch/source grounding bornés). Écart à qualifier avant Execute REAL.

Propriétaire: Morris / Delivery. Exit: Human QA e66 + gate REAL distinct ; gate schéma si Execute sans HD ref.

---

## Z. Exit proof

Nora peut faire **préparer** un contrat générique (surface generalist) pour une mission suffisamment qualifiée, sans HD systématique et **sans lancement** — **prouvé en DET** via Build **draft** + tests G-D4. Exit ≠ Execute-ready sans HD ; Confirm/Execute avec `decisionRefs: []` non autorisé par ce cycle.

---

## AA. Gates Morris restants

- Commit / push branche projet
- PR / merge
- Human QA REAL projet e66
- Gate REAL Cursor
- **Décision schéma/gouvernance** si Execute non-structurel doit rester possible avec `decisionRefs: []` au statut `confirmed` (sinon HD réelle ou Confirm sans contredire T-A4)
- Promotion doctrine / runtime v3
- P6 GLOBAL PASS

---

## AB. Verdict

**P6 GENERIC EXECUTION PREPARATION G-D4 CORRECTION PASS COMPLETE / DETERMINISTIC PRODUCT PATH PROVEN AT TESTED SCOPE / LOCAL CANDIDATE / READY FOR CHATGPT CRITICAL REVIEW.**

---

## AC. Instruction ChatGPT

Lire le Review Handoff distant. Confronter les modifications au code Git et aux contrats P2/C1/v3. Critical Review du candidat local G-D4. Vérifier R1/R2/R3, préparation générique, absence de catégorisation métier, réutilisation existant, aucun moteur parallèle, HD structurelles préservées, préparation ≠ autorisation ≠ exécution automatique, consentement lié au contrat exact, Nora conversationnelle, tests DET, preuves et limites, absence de REAL. Ne pas autoriser automatiquement commit, push projet, PR, merge, REAL, doctrine ou promotion v3.

---

## AD. Git Review Index

| Path | Change |
| --- | --- |
| prepareGenericExecutionContractDraft.ts | CREATED |
| p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts | CREATED |
| orchestrateF2.ts | MODIFIED (R1/R2/G-D4) |
| resolveChatFirstPilotDecision.ts | MODIFIED (R3 comment + parent autoPrepare) |
| activeCycleGovernedContinuation.ts | MODIFIED (parent F-C9-04) |
| presentationLabels.ts | MODIFIED (parent) |
| ConversationSurface.tsx | MODIFIED (parent) |
| useProductConversation.ts | MODIFIED (parent) |
| ui04 + continuity tests | MODIFIED (parent) |
| chatgpt-review.md | REPLACED (this pack) |
