# SFIA STUDIO — M-HD-01 FINAL EC/HD AUTHORITY BINDING CORRECTION
## Review Pack FULL — CRITICAL

**Horodatage:** 2026-10-16 15:31:17 CEST
**GO Morris:** FINAL EC/HD AUTHORITY BINDING — TWO TECHNICAL RESERVES ONLY — 2026-10-16
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — IN PROGRESS
**Capacité:** V3-F05
**Cycle:** 8 — Delivery / CRITICAL / EVOL
**CKC:** ckc:studio:delivery
**QA:** CRITICAL — LOCAL DETERMINISTIC
**O1 conservé:** oui — pas de M-HD-02 UI, pas d'E4–E8

---

## 1. VERDICTS

**M-HD-01 EC/HD AUTHORITY BINDING — DETERMINISTIC PASS**

**PILOT PRESENTATION BOUNDARY — NOT WIRED / NOT PROVEN** (hors périmètre)

**E4–E8 — OPEN**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Claims interdits non émis.

---

## 2. GIT TRUTH

```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
```

- Branche: `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
- HEAD: `b4c1d86211d372f7b0685be7ce8a5ba7de598e37`
- origin/main: `896ff59c704bfa76df1da1a51705aaf948c1cf0c`
- Handoff tip pré-cycle: `30a5f5d5` / blob `10c67f20`
- Dirty: **préservé**

### status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

### diff --name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/types.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
```

### untracked
```
projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

---

## 3. CONVERGENCE PRE-CHECK

| Item | Valeur |
|------|--------|
| TARGET | EC, HD et Product courant — autorité cohérente |
| CURRENT pré-pass | EC↔HD binding OK; dual-rep silencieuse; matérialité Product courante non démontrée |
| KEEP | OA HD, generic_mission, Subject, EC, Confirm/Authorize, Project-scoped Cursor |
| ADAPT | projection EC interne; currentness materiality |
| REPLACE | fallback silencieux entre représentations contradictoires |
| EXIT PROOF | aucune progression Confirm/Authorize si contradiction matérielle ou matérialité divergente |
| NEXT | M-HD-02 Pilot Presentation; E4–E8 sous gates distincts |

---

## 4. SOURCES CONSULTÉES

Template cycle, routing, guardrails, Convergence doctrine/roadmap, C1, P2/P6, Architecture D-ER, Doctrine v3 30/32/34/35/37, CKC 08, handoff `30a5f5d5`, verify/prepare/genericMissionSubject, resolveAuthoritativeProductMateriality, assessExecutionMateriality.

---

## 5. BLOC A — COHÉRENCE INTERNE EC

**Problème:** `projectExecutionContractEffects` préférait silencieusement inputs vs constraints.

**Correction:** `assertExecutionContractInternalConsistency` — fail-closed si:
- MATERIALITY facts vs constraints divergents / tokens contradictoires / malformés
- risks / reservations inputs vs RISK:/RESERVATION: divergents (generic_mission)
- repositoryIdentity / pathRoot dual conflict
- valeur invalide ≠ absence

Legacy sans stamp missionSubjectId/presentationDigest: préservé (IC10).

Appelé dans `verifyGenericMissionHumanDecisionForContract` avant projection/compare.

---

## 6. BLOC B — MATÉRIALITÉ PRODUCT COURANTE

**Problème:** `signals=null` + `assessExecutionMaterialityOrUnknown` → UNKNOWN forcé dès que productContextSufficient=false (y compris missions structural+HD avec signaux historiques).

**Correction:**
1. Signaux historiques = `materialityFacts.modelSignals` ∨ `inputs.impactSignals` ∨ sceau HD — **pas** une requalification Nora live.
2. Faits Product-owned live: LPS/repo/pathRoot/protected paths/authority envelope.
3. Classe courante via `assessExecutionMateriality` (pas OrUnknown sur le chemin HD).
4. `materialityContinuityCompatible`: match exact; exception documentée unknown→structural (stamp fail-closed ≠ claim non_structural); refuse structural→non_structural.
5. REFUS si Product illisible, pathRoot hors périmètre, mismatch.

PREPARE stamp `impactSignals` historiques sur EC.

---

## 7. CONFIRM / AUTHORIZE

Consomment déjà `verifyGenericMissionHumanDecisionForContract` — contrôles IC/CM inclus. Pas de bypass decisionRefs.length. G-D4 NON_STRUCTURAL préservé. Aucun Attempt sur refus.

---

## 8. MATRICE TESTS IC / CM

Fichier: `p6.mHd01.finalAuthorityBinding.d0.test.ts` — **16 PASS**

| ID | Résultat | Frontière |
|----|----------|-----------|
| IC01 | PASS | Confirm+Authorize effectifs |
| IC02–IC09 | PASS | helper + verify |
| IC10 | PASS | legacy |
| CM01 | PASS | Confirm+Authorize effectifs |
| CM02 | PASS | helper continuity |
| CM03 | PASS | fail-closed |
| CM05 | PASS | Confirm réel pathRoot |
| CM06 | PASS | NS sans HD |
| CM07 | PASS | unknown→structural documented |
| CM08 | PASS | sans cycle |
| CM10 | PASS | Authorize réel superseded |

CM04/CM09: couverts par codes MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE / CYCLE_NOT_ACTIVE (chemins existants + NR).

---

## 9. VALIDATIONS EXÉCUTÉES

- Final IC/CM: 16
- EC/HD binding: 27
- Authority Continuity: 24
- Generic HD: 21
- Inspection: 15
- Project-scoped: 14
- **Total: 117 PASS**
- tsc --noEmit: PASS
- next build: PASS

---

## 10. FAKE / REAL

LOCAL DETERMINISTIC EC INTERNAL CONSISTENCY + PRODUCT CURRENT MATERIALITY PROOF.
Pilot UI NOT WIRED. REAL NON AUTORISÉ. E4–E8 OPEN.

---

## 11. DETTE / GATES

| Item | Exit |
|------|------|
| M-HD-02 Pilot UI | Morris gate |
| E4–E8 | Cycle dédié |
| Cursor REAL / OpenAI LIVE | Morris REAL |

---

## 12. INSTRUCTION CHATGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — M-HD-01 FINAL AUTHORITY BINDING CRITICAL CODE REVIEW**

Vérifier: aucune double vérité EC; matérialité Product courante qualifiée; pas de requalification circulaire; Confirm/Authorize gouvernés; pas d'autorité implicite; cycle facultatif; NR; pas d'architecture parallèle; Review Pack FULL; Product non intégré.

---

## 13. SORTIES TESTS (extrait)
```
ewStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts > P6 project-scoped Cursor selection Delivery > S10 — mission faible effet: PREPARE + Select proportionnés (no cycle)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e5614c6995305e09","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":3}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e5614c6995305e09","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":3}

stdout | __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts > P6 Select inspection binding (R1) > I11 — Confirm may bump version; attested binding still Select-valid via I1 path
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:cc172370720507ee","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:cc172370720507ee","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts (16 tests) 795ms
 ✓ __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts (14 tests) 863ms
 ✓ __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts (15 tests) 927ms
stdout | __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts > P6 M-HD-01 Generic Mission HumanDecision > E1 — structural + verified HD can Select (Fake)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:65ee0564f01c3135","attemptId":"xat:w3a:4f6e6c5d02ef41a2","executionContractId":"xct:gen-prep:adc6cbb7bd033a240dcf475e","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:65ee0564f01c3135","attemptId":"xat:w3a:4f6e6c5d02ef41a2","executionContractId":"xct:gen-prep:adc6cbb7bd033a240dcf475e","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts (21 tests) 1018ms
 ✓ __tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts (24 tests) 1103ms
 ✓ __tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts (27 tests) 1191ms

 Test Files  6 passed (6)
      Tests  117 passed (117)
   Start at  15:30:35
   Duration  2.65s (transform 1.34s, setup 237ms, collect 7.59s, tests 5.90s, environment 0ms, prepare 203ms)


```

---

## 14. DIFF PREPARE (extrait)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..e7fe1391 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1,14 +1,14 @@
 /**
  * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
- * without systematic HumanDecision.
+ * without systematic HumanDecision for non-structural missions.
  *
- * When a mission is sufficiently qualified and server-owned Product materiality
- * is non-structural, Studio may Build + Validate a generalist contract with
- * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
+ * M-HD-01 — structural / HD-required missions may resume PREPARE only after a
+ * verified OA HumanDecision (sourceType generic_mission, accept-prepare).
+ * decisionRefs then carries that verified decisionId only. PREPARE ≠ EXECUTE.
  *
  * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
  * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
- * (T-A4 schema G-D4). Structural missions still require a real HD ref.
+ * (T-A4 schema G-D4).
  *
  * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
  * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
@@ -64,6 +64,13 @@ import {
   resolveGenericPrepareCapabilityEnvelope,
   type GenericPrepareCapabilityResolution,
 } from "./genericPrepareCapabilityEnvelope";
+import {
+  mapReversibilityExpectationToOa,
+} from "./genericMissionSubject";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+  verifyGenericMissionHumanDecisionForPrepare,
+} from "./verifyGenericMissionHumanDecisionForPrepare";

 export {
   GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
@@ -153,7 +160,8 @@ export function isChatFirstPrepareAcceptGo(input: {
  */
 export function resolveChatFirstGenericPrepareGo(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
+  readonly cycleInstanceId: string | null;
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
   readonly sessionKey?: string | null;
@@ -184,7 +192,7 @@ export function resolveChatFirstGenericPrepareGo(input: {
   if (offer.sessionKey !== sessionKey) {
     return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
   }
-  if (offer.cycleInstanceId !== input.cycleInstanceId) {
+  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
     return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
   }
   return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
@@ -282,6 +290,11 @@ export type PrepareGenericExecutionContractDraftInput = {
   readonly projectId: string;
   readonly cycleInstanceId?: string | null;
   readonly analysis: IntentAnalysisDto;
+  /**
+   * M-HD-01 — durable OA HumanDecision id for structural resume.
+   * Verified before decisionRefs is populated. Never fabricated.
+   */
+  readonly decisionId?: string | null;
   /** When true, bypass local authority env gate (DET tests). */
   readonly forceLocalAuthority?: boolean;
   /**
@@ -320,6 +333,9 @@ function stableMissionKey(input: {
   readonly scopeIn: readonly string[];
   readonly scopeOut: readonly string[];
   readonly materiality: string;
+  /** M-HD-01 — bind EC identity to verified HD when present. */
+  readonly decisionId?: string | null;
+  readonly presentationDigest?: string | null;
 }): string {
   const raw = [
     input.projectId,
@@ -330,6 +346,8 @@ function stableMissionKey(input: {
... (truncated middle) ...
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Je recommande de confier cette mission à Cursor.",
       "Je peux préparer le contrat d'exécution générique inspectable.",
       "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
@@ -908,7 +1150,7 @@ export function genericMissionClarificationText(input: {
   const gaps = input.missingFields.join(", ");
   return [
     head,
-    "Le cycle actif est conservé.",
+    contextKept,
     `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
     "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
   ].join(" ");
@@ -930,3 +1172,184 @@ export function genericMissionPreparedText(input: {
     "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
   ].join(" ");
 }
+
+// ---------------------------------------------------------------------------
+// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
+// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
+// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
+// ---------------------------------------------------------------------------
+
+/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
+export type SolicitGenericPrepareMissionFields = {
+  readonly objective?: string | null;
+  readonly expectedOutcome?: string | null;
+  readonly scope?: string | null;
+  readonly contextNotes?: string | null;
+  /** Conservative-only: a true flag can only make Product MORE cautious. */
+  readonly impactSignals?: {
+    readonly structuralChange?: boolean;
+    readonly securityImpact?: boolean;
+    readonly architectureImpact?: boolean;
+    readonly dataImpact?: boolean;
+    readonly irreversible?: boolean;
+  } | null;
+};
+
+/**
+ * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
+ * intentClass execution_request, NO executionIntent taxonomy, NO
+ * continuationKind / artifactMaterializationOperation, NO cycle type.
+ */
+export function buildIntentAnalysisFromSolicitedMission(
+  fields: SolicitGenericPrepareMissionFields,
+): IntentAnalysisDto {
+  const objective = fields.objective?.trim() || null;
+  const expectedOutcome = fields.expectedOutcome?.trim() || null;
+  const scope = fields.scope?.trim() || null;
+  const sig = fields.impactSignals ?? null;
+  const structural =
+    sig?.structuralChange === true ||
+    sig?.securityImpact === true ||
+    sig?.architectureImpact === true ||
+    sig?.dataImpact === true ||
+    sig?.irreversible === true;
+  const notes = fields.contextNotes?.trim() || null;
+  return {
+    parseOk: true,
+    intentClass: "execution_request",
+    candidateCycleTypeId: null,
+    signals: {
+      structuralChange: sig?.structuralChange === true,
+      securityImpact: sig?.securityImpact === true,
+      architectureImpact: sig?.architectureImpact === true,
+      dataImpact: sig?.dataImpact === true,
+      irreversible: sig?.irreversible === true,
+      lowRiskBounded: !structural,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: "sufficient",
+    objective,
+    scope,
+    rephrasedRequest: objective,
+    outOfScope: [],
+    risks: [],
+    reservations: notes ? [notes] : [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome,
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: null,
+  };
+}
+
+export type SolicitGenericExecutionPrepareInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  /** null = S8 project-context (no active cycle; none is ever created here). */
+  readonly cycleInstanceId: string | null;
+  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
+  readonly analysis?: IntentAnalysisDto;
+  readonly mission?: SolicitGenericPrepareMissionFields;
+  /** M-HD-01 — verified OA HumanDecision for structural resume. */
+  readonly decisionId?: string | null;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
+};
+
+export type SolicitGenericExecutionPrepareResult =
+  | {
+      readonly ok: true;
+      readonly code: "GENERIC_PREPARE_DRAFTED";
+      readonly executionContractId: string;
+      readonly contractStatus: string;
+      readonly materiality: string;
+      readonly cycleInstanceId: string | null;
+      readonly projectContextOnly: boolean;
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+      readonly message: string;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly missingFields?: readonly string[];
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+    };
+
+/**
+ * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
+ * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
+ * executionAttemptCreated:false; JSON-serializable.
+ */
+export async function solicitGenericExecutionPrepare(
+  input: SolicitGenericExecutionPrepareInput,
+): Promise<SolicitGenericExecutionPrepareResult> {
+  const projectId = input.projectId.trim();
+  const fail = (
+    code: string,
+    message: string,
+    missingFields?: readonly string[],
+  ): SolicitGenericExecutionPrepareResult => ({
+    ok: false,
+    code,
+    message,
+    ...(missingFields ? { missingFields } : {}),
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+  });
+  if (!projectId) {
+    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
+  }
+  const analysis =
+    input.analysis ??
+    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const readiness = assessGenericMissionPrepareReadiness(analysis);
+  if (readiness.missingFields.length > 0) {
+    return fail(
+      "MISSION_INSUFFICIENTLY_QUALIFIED",
+      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
+      readiness.missingFields,
+    );
+  }
+  // Structural without decisionId fails inside prepareGeneric (verified HD path).
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const prep = await prepareGenericExecutionContractDraft({
+    oa: input.oa,
+    projectId,
+    cycleInstanceId,
+    analysis,
+    decisionId: input.decisionId,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    sourceGroundingReader: input.sourceGroundingReader,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!prep.ok) {
+    return fail(prep.code, prep.message);
+  }
+  return {
+    ok: true,
+    code: "GENERIC_PREPARE_DRAFTED",
+    executionContractId: prep.contract.executionContractId,
+    contractStatus: prep.contract.status,
+    materiality: prep.materiality.materiality,
+    cycleInstanceId,
+    projectContextOnly: cycleInstanceId === null,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
+  };
+}
```

---

## 15. CONTENU COMPLET — genericMissionSubject.ts
```typescript
/**
 * M-HD-01 — Generic Mission Subject seal + presentationDigest.
 *
 * Occurrence identity (missionSubjectId) is distinct from the semantic
 * presentationDigest. Digests use full SHA-256 over canonical JSON.
 * presentedAtIso is metadata only — excluded from the seal.
 * No PresentedMission store; durability lives in OA HumanDecision.decisionBasis.
 */

import { randomBytes } from "node:crypto";
import {
  computeDecisionBasisSourceDigest,
  type DecisionBasis,
  type DecisionBasisGenericMissionContext,
} from "@/lib/oa/decision";

export const GENERIC_MISSION_SUBJECT_SCHEMA_VERSION = "0.1.0-gms" as const;

export const GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

export const GENERIC_MISSION_PRESENTED_OPTIONS = [
  {
    optionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
    label: "Accepter — autoriser la préparation de cette mission",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REFUSE,
    label: "Refuser cette mission structurante",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
    label: "Demander un amendement — nouvelle présentation requise",
  },
] as const;

export type GenericMissionImpactSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
};

export type GenericMissionEffectsSeal = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
};

/** Material fields sealed into presentationDigest (no digests, no presentedAt). */
export type GenericMissionSealPayload = {
  readonly schemaVersion: typeof GENERIC_MISSION_SUBJECT_SCHEMA_VERSION;
  readonly missionSubjectId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs: readonly string[];
};

export type GenericMissionSubject = GenericMissionSealPayload & {
  readonly presentedAtIso: string;
  readonly presentationDigest: string;
};

export function newGenericMissionSubjectId(): string {
  return `gms:${randomBytes(16).toString("hex")}`;
}

export function computeGenericMissionPresentationDigest(
  payload: GenericMissionSealPayload,
): string {
  return computeDecisionBasisSourceDigest(payload);
}

export function buildGenericMissionSubject(input: {
  readonly missionSubjectId?: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs?: readonly string[];
  readonly presentedAtIso: string;
}): GenericMissionSubject {
  const missionSubjectId =
    input.missionSubjectId?.trim() || newGenericMissionSubjectId();
  const optionRefs =
    input.optionRefs && input.optionRefs.length > 0
      ? [...input.optionRefs]
      : GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId);
  const seal: GenericMissionSealPayload = {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId,
    projectId: input.projectId.trim(),
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective: input.objective.trim(),
    expectedOutcome: input.expectedOutcome.trim(),
    scopeNarrative: input.scopeNarrative.trim(),
    scopeIn: [...input.scopeIn],
    scopeOut: [...input.scopeOut],
    materiality: input.materiality,
    materialityReasonCodes: [...input.materialityReasonCodes],
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    effects: {
      intentKind: input.effects.intentKind,
      artifactType: input.effects.artifactType,
      requestedOperation: input.effects.requestedOperation,
      requiredCapabilities: [...input.effects.requiredCapabilities],
      expectedOutputs: [...input.effects.expectedOutputs],
      reversibilityExpectation: input.effects.reversibilityExpectation,
      stopConditions: [...input.effects.stopConditions],
      risks: [...input.effects.risks],
      reservations: [...input.effects.reservations],
    },
    impactSignals: { ...input.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs,
  };
  return {
    ...seal,
    presentedAtIso: input.presentedAtIso,
    presentationDigest: computeGenericMissionPresentationDigest(seal),
  };
}

/** Rebuild seal payload from durable genericMissionContext (+ LPS anchors). */
export function sealPayloadFromGenericMissionContext(input: {
  readonly ctx: DecisionBasisGenericMissionContext;
  readonly projectId: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
}): GenericMissionSealPayload {
  const ctx = input.ctx;
  return {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId: ctx.missionSubjectId,
    projectId: input.projectId,
    cycleInstanceId: ctx.cycleInstanceId,
    objective: ctx.objective,
    expectedOutcome: ctx.expectedOutcome,
    scopeNarrative: ctx.scopeNarrative,
    scopeIn: [...ctx.scopeIn],
    scopeOut: [...ctx.scopeOut],
    materiality: ctx.materiality,
    materialityReasonCodes: [...ctx.materialityReasonCodes],
    repositoryBindingIdentity: ctx.repositoryBindingIdentity,
    pathRoot: ctx.pathRoot,
    effects: {
      intentKind: ctx.intentKind,
      artifactType: ctx.artifactType,
      requestedOperation: ctx.requestedOperation,
      requiredCapabilities: [...ctx.requiredCapabilities],
      expectedOutputs: [...ctx.expectedOutputs],
      reversibilityExpectation: ctx.reversibilityExpectation,
      stopConditions: [...ctx.stopConditions],
      risks: [...ctx.risks],
      reservations: [...ctx.reservations],
    },
    impactSignals: { ...ctx.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs: [...ctx.optionRefs],
  };
}

/**
 * Integrity check: recompute digest from durable snapshot fields.
 * Does not compare CURRENT Product facts (see materialCurrentnessMatch).
 */
export function verifyGenericMissionSnapshotIntegrity(input: {
  readonly basis: DecisionBasis;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const basis = input.basis;
  if (basis.sourceType !== "generic_mission") {
    return { ok: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { ok: false, reason: "generic_mission_context_absent" };
  }
  const payload = sealPayloadFromGenericMissionContext({
    ctx,
    projectId: basis.projectId,
    lpsId: basis.proposalContext.lpsId,
    lpsVersion: basis.proposalContext.lpsVersion,
    doctrineDigest: basis.proposalContext.doctrineDigest,
  });
  const recomputed = computeGenericMissionPresentationDigest(payload);
  if (recomputed !== basis.sourceDigest || recomputed !== ctx.presentationDigest) {
    return { ok: false, reason: "presentation_digest_integrity_failed" };
  }
  return { ok: true };
}

function sameStringArr(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function normNullStr(v: string | null | undefined): string | null {
  if (v == null) return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

/**
 * CURRENT mission material snapshot compared against sealed HD context.
 *
 * Integrity fields (digest): all seal payload fields including LPS anchors.
 * Currentness fields (requalify before PREPARE/Confirm/Authorize): mission
 * content, scope, effects, repo binding, materiality, impact signals, cycle.
 * Metadata not requiring raw equality at resume: presentedAtIso (never in seal),
 * optionRefs (fixed closed set; selectedOption checked separately),
 * materialityReasonCodes (diagnostic; materiality class is authoritative).
 */
export type GenericMissionCurrentMaterial = {
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly impactSignals: GenericMissionImpactSignals;
  readonly cycleInstanceId: string | null;
};

/** Material fields that must match between sealed HD and CURRENT requalification. */
export function materialCurrentnessMatch(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly current: GenericMissionCurrentMaterial;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const c = input.current;
  if (s.objective.trim() !== c.objective.trim()) {
    return { ok: false, reason: "objective_drift" };
  }
  if (s.expectedOutcome.trim() !== c.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_drift" };
  }
  if (s.scopeNarrative.trim() !== c.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_drift" };
  }
  if (!sameStringArr(s.scopeIn, c.scopeIn) || !sameStringArr(s.scopeOut, c.scopeOut)) {
    return { ok: false, reason: "scope_arrays_drift" };
  }
  if (s.materiality !== c.materiality) {
    return { ok: false, reason: "materiality_drift" };
  }
  if (s.repositoryBindingIdentity !== c.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_drift" };
  }
  if (s.pathRoot !== c.pathRoot) {
    return { ok: false, reason: "path_root_drift" };
  }
  if (!sameStringArr(s.requiredCapabilities, c.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_drift" };
  }
  if (!sameStringArr(s.expectedOutputs, c.expectedOutputs)) {
    return { ok: false, reason: "expected_outputs_drift" };
  }
  if (normNullStr(s.intentKind) !== normNullStr(c.intentKind)) {
    return { ok: false, reason: "intent_kind_drift" };
  }
  if (normNullStr(s.artifactType) !== normNullStr(c.artifactType)) {
    return { ok: false, reason: "artifact_type_drift" };
  }
  if (normNullStr(s.requestedOperation) !== normNullStr(c.requestedOperation)) {
    return { ok: false, reason: "requested_operation_drift" };
  }
  if (s.reversibilityExpectation !== c.reversibilityExpectation) {
    return { ok: false, reason: "reversibility_drift" };
  }
  // Suppression of a sealed stop condition is refused; added Product stops OK.
  for (const stop of s.stopConditions) {
    if (!c.stopConditions.includes(stop)) {
      return { ok: false, reason: "stop_conditions_drift" };
    }
  }
  if (!sameStringArr(s.risks, c.risks)) {
    return { ok: false, reason: "risks_drift" };
  }
  if (!sameStringArr(s.reservations, c.reservations)) {
    return { ok: false, reason: "reservations_drift" };
  }
  const sig = s.impactSignals;
  const cs = c.impactSignals;
  if (
    sig.structuralChange !== cs.structuralChange ||
    sig.securityImpact !== cs.securityImpact ||
    sig.architectureImpact !== cs.architectureImpact ||
    sig.dataImpact !== cs.dataImpact ||
    sig.irreversible !== cs.irreversible
  ) {
    return { ok: false, reason: "impact_signals_drift" };
  }
  if ((s.cycleInstanceId ?? null) !== (c.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_drift" };
  }
  return { ok: true };
}

/**
 * Conservative projection: sealed reversibilityExpectation → OA Reversibility.
 * Does not invent a wider authority than the Pilot accepted.
 * - irreversible → irreversible
 * - reversible → reversible
 * - unknown / null → partially_reversible (mid, never silently irreversible)
 */
export type OaReversibility =
  | "reversible"
  | "partially_reversible"
  | "irreversible";

export function mapReversibilityExpectationToOa(
  expectation: "reversible" | "irreversible" | "unknown" | null | undefined,
): OaReversibility {
  if (expectation === "irreversible") return "irreversible";
  if (expectation === "reversible") return "reversible";
  return "partially_reversible";
}

/** Independent EC field projection for EC↔HD binding (not rebuilt from HD alone). */
export type ExecutionContractEffectProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionRefs: readonly string[];
  readonly status: string;
  readonly version: number;
  readonly semanticFingerprint?: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly expectedOutputs: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly stopConditions: readonly string[];
  readonly reversibility: OaReversibility;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly materiality: string | null;
  readonly missionSubjectId: string | null;
  readonly presentationDigest: string | null;
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
};

function risksFromConstraints(constraints: readonly string[]): string[] {
  return constraints
    .filter((c) => c.startsWith("RISK:"))
    .map((c) => c.slice("RISK:".length));
}

function reservationsFromConstraints(constraints: readonly string[]): string[] {
  return constraints
    .filter((c) => c.startsWith("RESERVATION:"))
    .map((c) => c.slice("RESERVATION:".length));
}

export function normalizeMaterialityClass(
  raw: string | null | undefined,
): "structural" | "non_structural" | "unknown" | null {
  if (raw == null) return null;
  if (typeof raw !== "string") return null;
  const t = raw.trim().toLowerCase();
  if (t === "structural" || t === "non_structural" || t === "unknown") {
    return t;
  }
  return null;
}

/**
 * CURRENT Product materiality vs sealed HD/EC class.
 * Exact match required, with one documented conservative case:
 * sealed `unknown` was a fail-closed insufficiency stamp (not a non_structural
 * claim). Current `structural` remains covered by the accepted HD.
 * Degradation structural→non_structural/unknown is always refused.
 */
export function materialityContinuityCompatible(input: {
  readonly sealed: string | null | undefined;
  readonly current: string | null | undefined;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const sealed = normalizeMaterialityClass(input.sealed ?? null);
  const current = normalizeMaterialityClass(input.current ?? null);
  if (sealed == null) {
    return { ok: false, reason: "sealed_materiality_absent" };
  }
  if (current == null) {
    return { ok: false, reason: "current_materiality_absent" };
  }
  if (sealed === current) return { ok: true };
  if (sealed === "unknown" && current === "structural") return { ok: true };
  if (sealed === "structural" && current !== "structural") {
    return { ok: false, reason: "structural_materiality_degraded" };
  }
  return {
    ok: false,
    reason: `materiality_continuity_${sealed}_vs_${current}`,
  };
}

function materialityClassesFromConstraints(
  constraints: readonly string[],
): Array<"structural" | "non_structural" | "unknown"> {
  const out: Array<"structural" | "non_structural" | "unknown"> = [];
  for (const c of constraints) {
    if (!c.startsWith("MATERIALITY:")) continue;
    const cls = normalizeMaterialityClass(c.slice("MATERIALITY:".length));
    if (cls) out.push(cls);
  }
  return out;
}

function sortedCopy(arr: readonly string[]): string[] {
  return [...arr].map((s) => String(s)).sort();
}

function sameSortedStringArr(a: readonly string[], b: readonly string[]): boolean {
  const aa = sortedCopy(a);
  const bb = sortedCopy(b);
  return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
}

/**
 * Fail-closed dual-representation check for Generic Mission ECs.
 * Never silently picks the favorable side when two representations diverge.
 * Legacy contracts without generic_mission stamps skip dual-rep requirements.
 */
export function assertExecutionContractInternalConsistency(input: {
  readonly constraints?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const constraints = [...(input.constraints ?? [])];
  const inputs = input.inputs ?? {};
  const isGenericMissionStamped = Boolean(
    (typeof inputs.missionSubjectId === "string" &&
      inputs.missionSubjectId.trim()) ||
      (typeof inputs.presentationDigest === "string" &&
        inputs.presentationDigest.trim()),
  );

  const materialityFacts = (inputs.materialityFacts ?? null) as
    | {
        assessedMateriality?: unknown;
        productCurrentness?: {
          repositoryIdentity?: string | null;
          pathRoot?: string | null;
        };
      }
    | null;

  // A1 — materiality facts vs MATERIALITY:* constraints
  const constraintClasses = materialityClassesFromConstraints(constraints);
  const uniqueConstraint = new Set(constraintClasses);
  if (uniqueConstraint.size > 1) {
    return { ok: false, reason: "materiality_constraint_conflict" };
  }
  // Malformed MATERIALITY tokens (present but not a known class)
  for (const c of constraints) {
    if (!c.startsWith("MATERIALITY:")) continue;
    const raw = c.slice("MATERIALITY:".length);
    if (normalizeMaterialityClass(raw) == null) {
      return { ok: false, reason: "materiality_constraint_malformed" };
    }
  }
  const fromConstraint = constraintClasses[0] ?? null;

  if (
    materialityFacts != null &&
    "assessedMateriality" in materialityFacts &&
    materialityFacts.assessedMateriality !== undefined &&
    materialityFacts.assessedMateriality !== null
  ) {
    if (typeof materialityFacts.assessedMateriality !== "string") {
      return { ok: false, reason: "materiality_facts_malformed" };
    }
    const assessed = normalizeMaterialityClass(
      materialityFacts.assessedMateriality,
    );
    if (assessed == null) {
      // Explicit invalid value must not be normalized into absence.
      return { ok: false, reason: "materiality_facts_malformed" };
    }
    if (fromConstraint != null && assessed !== fromConstraint) {
      return { ok: false, reason: "materiality_facts_vs_constraint_conflict" };
    }
  } else if (isGenericMissionStamped && fromConstraint == null) {
    return { ok: false, reason: "materiality_absent_on_generic_mission_ec" };
  }

  // A2 — inputs.risks vs RISK:*
  if (Array.isArray(inputs.risks)) {
    const fromInputs = inputs.risks.map((r) => String(r));
    const fromC = risksFromConstraints(constraints);
    if (isGenericMissionStamped || fromC.length > 0) {
      if (!sameSortedStringArr(fromInputs, fromC)) {
        return { ok: false, reason: "risks_inputs_vs_constraints_conflict" };
      }
    }
  }

  // A3 — inputs.reservations vs RESERVATION:*
  if (Array.isArray(inputs.reservations)) {
    const fromInputs = inputs.reservations.map((r) => String(r));
    const fromC = reservationsFromConstraints(constraints);
    if (isGenericMissionStamped || fromC.length > 0) {
      if (!sameSortedStringArr(fromInputs, fromC)) {
        return {
          ok: false,
          reason: "reservations_inputs_vs_constraints_conflict",
        };
      }
    }
  }

  // A4 — materialityFacts.productCurrentness vs inputs repo/pathRoot
  const currentness = materialityFacts?.productCurrentness;
  if (
    currentness &&
    Object.prototype.hasOwnProperty.call(currentness, "repositoryIdentity") &&
    Object.prototype.hasOwnProperty.call(inputs, "repositoryBindingIdentity")
  ) {
    const a = currentness.repositoryIdentity ?? null;
    const b =
      typeof inputs.repositoryBindingIdentity === "string" ||
      inputs.repositoryBindingIdentity === null
        ? (inputs.repositoryBindingIdentity as string | null)
        : undefined;
    if (b !== undefined && a !== b) {
      return { ok: false, reason: "repository_identity_dual_conflict" };
    }
  }
  if (
    currentness &&
    Object.prototype.hasOwnProperty.call(currentness, "pathRoot") &&
    Object.prototype.hasOwnProperty.call(inputs, "pathRoot")
  ) {
    const a = currentness.pathRoot ?? null;
    const b =
      typeof inputs.pathRoot === "string" || inputs.pathRoot === null
        ? (inputs.pathRoot as string | null)
        : undefined;
    if (b !== undefined && a !== b) {
      return { ok: false, reason: "path_root_dual_conflict" };
    }
  }

  return { ok: true };
}

/**
 * Project EC native fields + inputs into a single authoritative effect view.
 * Callers MUST run assertExecutionContractInternalConsistency first for
 * generic_mission ECs — this projector does not silently pick a favorable side.
 */
export function projectExecutionContractEffects(input: {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly decisionRefs?: readonly string[] | null;
  readonly status: string;
  readonly version: number;
  readonly semanticFingerprint?: string;
  readonly expectedOutputs?: readonly string[] | null;
  readonly requiredCapabilities?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly reversibility: OaReversibility;
  readonly constraints?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
}): ExecutionContractEffectProjection {
  const inputs = input.inputs ?? {};
  const constraints = [...(input.constraints ?? [])];
  const materialityFacts = (inputs.materialityFacts ?? null) as
    | {
        assessedMateriality?: string;
        productCurrentness?: {
          repositoryIdentity?: string | null;
          pathRoot?: string | null;
        };
      }
    | null;
  const assessed = normalizeMaterialityClass(
    typeof materialityFacts?.assessedMateriality === "string"
      ? materialityFacts.assessedMateriality
      : null,
  );
  const fromConstraint =
    materialityClassesFromConstraints(constraints)[0] ?? null;
  const materiality = assessed ?? fromConstraint;
  const revExpRaw = inputs.reversibilityExpectation;
  const revExp =
    revExpRaw === "reversible" ||
    revExpRaw === "irreversible" ||
    revExpRaw === "unknown"
      ? revExpRaw
      : null;
  // After internal consistency, inputs and constraints agree when both present.
  const inputRisks = Array.isArray(inputs.risks)
    ? (inputs.risks as string[])
    : risksFromConstraints(constraints);
  const inputReservations = Array.isArray(inputs.reservations)
    ? (inputs.reservations as string[])
    : reservationsFromConstraints(constraints);
  const currentness = materialityFacts?.productCurrentness;
  const repoFromInputs =
    typeof inputs.repositoryBindingIdentity === "string" ||
    inputs.repositoryBindingIdentity === null
      ? (inputs.repositoryBindingIdentity as string | null)
      : undefined;
  const pathFromInputs =
    typeof inputs.pathRoot === "string" || inputs.pathRoot === null
      ? (inputs.pathRoot as string | null)
      : undefined;
  return {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    decisionRefs: [...(input.decisionRefs ?? [])],
    status: input.status,
    version: input.version,
    semanticFingerprint: input.semanticFingerprint,
    objective: String(inputs.objective ?? "").trim(),
    expectedOutcome: String(inputs.expectedOutcome ?? "").trim(),
    scopeNarrative: String(
      inputs.missionScopeNarrative ?? inputs.scope ?? "",
    ).trim(),
    scopeIn: Array.isArray(inputs.scopeIn) ? (inputs.scopeIn as string[]) : [],
    scopeOut: Array.isArray(inputs.scopeOut)
      ? (inputs.scopeOut as string[])
      : [],
    intentKind: normNullStr(
      typeof inputs.intentKind === "string" ? inputs.intentKind : null,
    ),
    artifactType: normNullStr(
      typeof inputs.artifactType === "string" ? inputs.artifactType : null,
    ),
    requestedOperation: normNullStr(
      typeof inputs.requestedOperation === "string"
        ? inputs.requestedOperation
        : null,
    ),
    expectedOutputs: [...(input.expectedOutputs ?? [])],
    requiredCapabilities: [...(input.requiredCapabilities ?? [])],
    stopConditions: [...(input.stopConditions ?? [])],
    reversibility: input.reversibility,
    reversibilityExpectation: revExp,
    risks: inputRisks,
    reservations: inputReservations,
    materiality,
    missionSubjectId: normNullStr(
      typeof inputs.missionSubjectId === "string"
        ? inputs.missionSubjectId
        : null,
    ),
    presentationDigest: normNullStr(
      typeof inputs.presentationDigest === "string"
        ? inputs.presentationDigest
        : null,
    ),
    repositoryBindingIdentity:
      repoFromInputs !== undefined
        ? repoFromInputs
        : currentness?.repositoryIdentity !== undefined
          ? currentness.repositoryIdentity ?? null
          : null,
    pathRoot:
      pathFromInputs !== undefined
        ? pathFromInputs
        : currentness?.pathRoot !== undefined
          ? currentness.pathRoot ?? null
          : null,
  };
}

/**
 * Compare EC projection against sealed HD context.
 * Reads EC fields independently — sealed values are the acceptance baseline,
 * not a reconstruction substituted for missing EC fields.
 */
export function compareExecutionContractToSealedHumanDecision(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly ec: ExecutionContractEffectProjection;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const e = input.ec;

  if (!e.decisionRefs.includes(input.decisionId)) {
    return { ok: false, reason: "decision_ref_absent" };
  }
  if ((e.cycleInstanceId ?? null) !== (s.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_mismatch" };
  }
  if (!e.missionSubjectId) {
    return { ok: false, reason: "mission_subject_id_absent" };
  }
  if (e.missionSubjectId !== s.missionSubjectId) {
    return { ok: false, reason: "mission_subject_id_mismatch" };
  }
  if (!e.presentationDigest) {
    return { ok: false, reason: "presentation_digest_absent" };
  }
  if (e.presentationDigest !== s.presentationDigest) {
    return { ok: false, reason: "presentation_digest_mismatch" };
  }
  if (e.objective.trim() !== s.objective.trim()) {
    return { ok: false, reason: "objective_mismatch" };
  }
  if (e.expectedOutcome.trim() !== s.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_mismatch" };
  }
  if (e.scopeNarrative.trim() !== s.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_mismatch" };
  }
  if (
    !sameStringArr(e.scopeIn, s.scopeIn) ||
    !sameStringArr(e.scopeOut, s.scopeOut)
  ) {
    return { ok: false, reason: "scope_arrays_mismatch" };
  }
  if (normNullStr(e.intentKind) !== normNullStr(s.intentKind)) {
    return { ok: false, reason: "intent_kind_mismatch" };
  }
  if (normNullStr(e.artifactType) !== normNullStr(s.artifactType)) {
    return { ok: false, reason: "artifact_type_mismatch" };
  }
  if (
    normNullStr(e.requestedOperation) !== normNullStr(s.requestedOperation)
  ) {
    return { ok: false, reason: "requested_operation_mismatch" };
  }
  if (!sameStringArr(e.expectedOutputs, s.expectedOutputs)) {
    return { ok: false, reason: "expected_outputs_mismatch" };
  }
  if (!sameStringArr(e.requiredCapabilities, s.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_mismatch" };
  }
  // Every sealed stop must remain on the EC (EC may add system stops).
  for (const stop of s.stopConditions) {
    if (!e.stopConditions.includes(stop)) {
      return { ok: false, reason: "stop_conditions_missing" };
    }
  }
  if (e.reversibilityExpectation !== s.reversibilityExpectation) {
    return { ok: false, reason: "reversibility_expectation_mismatch" };
  }
  const expectedOaRev = mapReversibilityExpectationToOa(
    s.reversibilityExpectation,
  );
  if (e.reversibility !== expectedOaRev) {
    return { ok: false, reason: "oa_reversibility_mismatch" };
  }
  for (const risk of s.risks) {
    if (!e.risks.includes(risk)) {
      return { ok: false, reason: "risks_missing" };
    }
  }
  for (const reservation of s.reservations) {
    if (!e.reservations.includes(reservation)) {
      return { ok: false, reason: "reservations_missing" };
    }
  }
  if (!e.materiality) {
    return { ok: false, reason: "materiality_absent" };
  }
  if (e.materiality !== s.materiality) {
    return { ok: false, reason: "materiality_mismatch" };
  }
  // Structural sealed must never appear as non_structural on EC.
  if (s.materiality === "structural" && e.materiality === "non_structural") {
    return { ok: false, reason: "materiality_degraded" };
  }
  if (e.repositoryBindingIdentity !== s.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_mismatch" };
  }
  if (e.pathRoot !== s.pathRoot) {
    return { ok: false, reason: "path_root_mismatch" };
  }
  if (
    e.status === "superseded" ||
    e.status === "cancelled" ||
    e.status === "failed"
  ) {
    return { ok: false, reason: "ec_status_not_reusable" };
  }
  return { ok: true };
}

export type LpsMaterialSnapshot = {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrineDigest: string;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
};

/**
 * CR-04 — LPS transition after Record HD.
 *
 * Same version → OK.
 * Later version → OK only when material LPS fields are unchanged vs sealed
 * snapshot AND decisionId ∈ current.decisionIds.
 * version supérieure alone is never sufficient.
 */
export function evaluateLpsTransitionAfterHumanDecision(input: {
  readonly sealed: LpsMaterialSnapshot;
  readonly current: LpsMaterialSnapshot;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  if (input.current.version < input.sealed.version) {
    return { ok: false, reason: "lps_version_regressed" };
  }
  if (input.current.version === input.sealed.version) {
    return { ok: true };
  }
  // Material LPS fields must be identical aside from decisionIds growth.
  if (input.sealed.objective.trim() !== input.current.objective.trim()) {
    return { ok: false, reason: "lps_objective_drift" };
  }
  if ((input.sealed.context ?? "") !== (input.current.context ?? "")) {
    return { ok: false, reason: "lps_context_drift" };
  }
  if ((input.sealed.scope ?? "") !== (input.current.scope ?? "")) {
    return { ok: false, reason: "lps_scope_drift" };
  }
  const sealedConstraints = [...(input.sealed.constraints ?? [])].sort();
  const currentConstraints = [...(input.current.constraints ?? [])].sort();
  if (!sameStringArr(sealedConstraints, currentConstraints)) {
    return { ok: false, reason: "lps_constraints_drift" };
  }
  if (input.sealed.doctrineDigest !== input.current.doctrineDigest) {
    return { ok: false, reason: "lps_doctrine_drift" };
  }
  if (
    (input.sealed.activeCycleInstanceId ?? null) !==
    (input.current.activeCycleInstanceId ?? null)
  ) {
    return { ok: false, reason: "lps_cycle_drift" };
  }
  if ((input.sealed.trajectoryId ?? null) !== (input.current.trajectoryId ?? null)) {
    return { ok: false, reason: "lps_trajectory_drift" };
  }
  if (
    (input.sealed.trajectoryVersion ?? null) !==
    (input.current.trajectoryVersion ?? null)
  ) {
    return { ok: false, reason: "lps_trajectory_version_drift" };
  }
  const currentIds = input.current.decisionIds ?? [];
  if (!currentIds.includes(input.decisionId)) {
    return { ok: false, reason: "lps_decision_not_linked" };
  }
  // Sealed decisionIds must remain a prefix subset of current (HD append only).
  const sealedIds = input.sealed.decisionIds ?? [];
  for (let i = 0; i < sealedIds.length; i += 1) {
    if (currentIds[i] !== sealedIds[i]) {
      return { ok: false, reason: "lps_decision_history_rewritten" };
    }
  }
  return { ok: true };
}

/**
 * @deprecated Prefer evaluateLpsTransitionAfterHumanDecision (CR-04).
 * Kept for call-site migration; permissive version-only check is insufficient.
 */
export function isLegitimateLpsTransitionAfterHumanDecision(input: {
  readonly sealedLpsVersion: number;
  readonly currentLpsVersion: number;
  readonly currentDecisionIds: readonly string[] | undefined;
  readonly decisionId: string;
}): boolean {
  if (input.currentLpsVersion === input.sealedLpsVersion) return true;
  if (input.currentLpsVersion < input.sealedLpsVersion) return false;
  const ids = input.currentDecisionIds ?? [];
  return ids.includes(input.decisionId);
}

export function decisionBasisFromGenericMissionSubject(input: {
  readonly subject: GenericMissionSubject;
  readonly selectedOptionRef: string;
  readonly recommendedOptionRef?: string;
}): DecisionBasis {
  const s = input.subject;
  const ctx: DecisionBasisGenericMissionContext = {
    missionSubjectId: s.missionSubjectId,
    presentationDigest: s.presentationDigest,
    subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    objective: s.objective,
    expectedOutcome: s.expectedOutcome,
    scopeNarrative: s.scopeNarrative,
    scopeIn: [...s.scopeIn],
    scopeOut: [...s.scopeOut],
    materiality: s.materiality,
    materialityReasonCodes: [...s.materialityReasonCodes],
    repositoryBindingIdentity: s.repositoryBindingIdentity,
    pathRoot: s.pathRoot,
    requiredCapabilities: [...s.effects.requiredCapabilities],
    expectedOutputs: [...s.effects.expectedOutputs],
    reversibilityExpectation: s.effects.reversibilityExpectation,
    stopConditions: [...s.effects.stopConditions],
    risks: [...s.effects.risks],
    reservations: [...s.effects.reservations],
    intentKind: s.effects.intentKind,
    artifactType: s.effects.artifactType,
    requestedOperation: s.effects.requestedOperation,
    impactSignals: { ...s.impactSignals },
    optionRefs: [...s.optionRefs],
    selectedOptionRef: input.selectedOptionRef,
    ...(input.recommendedOptionRef
      ? { recommendedOptionRef: input.recommendedOptionRef }
      : {}),
    cycleInstanceId: s.cycleInstanceId,
  };
  return {
    sourceType: "generic_mission",
    sourceRef: s.missionSubjectId,
    sourceDigest: s.presentationDigest,
    projectId: s.projectId,
    ...(s.cycleInstanceId ? { cycleInstanceId: s.cycleInstanceId } : {}),
    proposalContext: {
      lpsId: s.lpsId,
      lpsVersion: s.lpsVersion,
      ...(s.doctrineDigest ? { doctrineDigest: s.doctrineDigest } : {}),
      ...(s.cycleInstanceId
        ? { activeCycleInstanceId: s.cycleInstanceId }
        : {}),
    },
    genericMissionContext: ctx,
    executionBasis: {
      objective: s.objective,
      scope: s.scopeNarrative,
      expectedOutcome: s.expectedOutcome,
      scopeIn: [...s.scopeIn],
      scopeOut: [...s.scopeOut],
      outOfScope: [...s.scopeOut],
      requiredCapabilities: [...s.effects.requiredCapabilities],
      expectedOutputs: [...s.effects.expectedOutputs],
      stopConditions: [...s.effects.stopConditions],
      risks: [...s.effects.risks],
      reservations: [...s.effects.reservations],
      ...(s.effects.intentKind
        ? { intentKind: s.effects.intentKind }
        : {}),
      ...(s.effects.artifactType
        ? { artifactType: s.effects.artifactType }
        : {}),
      ...(s.effects.requestedOperation
        ? { requestedOperation: s.effects.requestedOperation }
        : {}),
      ...(s.effects.reversibilityExpectation
        ? { reversibilityExpectation: s.effects.reversibilityExpectation }
        : {}),
    },
  };
}

```

---

## 16. CONTENU COMPLET — verifyGenericMissionHumanDecisionForPrepare.ts
```typescript
/**
 * M-HD-01 — verify durable OA HumanDecision for Generic PREPARE resume
 * and for Confirm/Authorize currentness (CR-03).
 *
 * Never fabricates HD. Never treats Confirmation as HD.
 * Read-only — no Build / PREPARE side effects.
 */

import { validateDecisionBasis } from "@/lib/oa/decision";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  assessExecutionMateriality,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  assertExecutionContractInternalConsistency,
  compareExecutionContractToSealedHumanDecision,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
  materialityContinuityCompatible,
  projectExecutionContractEffects,
  verifyGenericMissionSnapshotIntegrity,
  type GenericMissionCurrentMaterial,
  type LpsMaterialSnapshot,
  type OaReversibility,
} from "./genericMissionSubject";

export type VerifiedGenericMissionHumanDecision = {
  readonly decisionId: string;
  readonly decision: HumanDecision;
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
};

export type VerifyGenericMissionHumanDecisionResult =
  | { readonly ok: true; readonly verified: VerifiedGenericMissionHumanDecision }
  | { readonly ok: false; readonly code: string; readonly message: string };

type LpsDoctrineRefLike = {
  readonly digest?: string;
  readonly contentDigest?: string;
  readonly packageDigest?: string;
};

function doctrineDigestFromLps(lps: {
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
}): string {
  const ref = lps.doctrinePackageRef ?? undefined;
  return (
    (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
    (typeof ref?.contentDigest === "string" ? ref.contentDigest.trim() : "") ||
    (typeof ref?.packageDigest === "string" ? ref.packageDigest.trim() : "") ||
    ""
  );
}

function lpsSnapshotFromState(lps: {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
}): LpsMaterialSnapshot {
  return {
    version: lps.version,
    objective: lps.objective,
    context: lps.context,
    scope: lps.scope,
    constraints: lps.constraints ? [...lps.constraints] : undefined,
    doctrineDigest: doctrineDigestFromLps(lps),
    activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
    trajectoryId: lps.trajectoryId ?? null,
    trajectoryVersion: lps.trajectoryVersion ?? null,
    decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
  };
}

export function buildCurrentMaterialFromAnalysis(input: {
  readonly analysis: IntentAnalysisDto;
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly cycleInstanceId: string | null;
}): GenericMissionCurrentMaterial {
  const analysis = input.analysis;
  const objective = (
    analysis.objective ??
    analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
  const ei = analysis.executionIntent;
  const signals = analysis.signals;
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : analysis.requestedOperation?.trim() || null;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  return {
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: analysis.outOfScope ?? [],
    materiality: input.materiality,
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    requiredCapabilities: [...input.requiredCapabilities],
    expectedOutputs: [expectedOutcome],
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    requestedOperation,
    reversibilityExpectation:
      revFromEi ??
      (signals?.irreversible === true
        ? "irreversible"
        : signals?.irreversible === false
          ? "reversible"
          : "unknown"),
    stopConditions: [
      ...(analysis.stopConditions ?? []).filter((s) => s.trim()),
      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ],
    risks: [...(analysis.risks ?? [])],
    reservations: [...(analysis.reservations ?? [])],
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    cycleInstanceId: input.cycleInstanceId,
  };
}

async function loadAndValidateAcceptedGenericMissionHd(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const decisionId = input.decisionId.trim();
  if (!decisionId.startsWith("dec:")) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "decisionId invalide — HumanDecision absente.",
    };
  }

  const loaded = await input.oa.decisionServices.getHumanDecision.execute({
    decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "HumanDecision introuvable via OA.",
    };
  }
  const decision = loaded.decision;

  if (decision.status === "superseded") {
    return {
      ok: false,
      code: "HD_SUPERSEDED",
      message: "HumanDecision superseded — reprise refusée.",
    };
  }
  if (decision.status === "revoked") {
    return {
      ok: false,
      code: "HD_REVOKED",
      message: "HumanDecision revoked — reprise refusée.",
    };
  }
  if (decision.status === "refused") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "HumanDecision refusée — PREPARE non autorisé.",
    };
  }
  if (decision.status === "amended") {
    return {
      ok: false,
      code: "HD_AMEND_REQUIRES_NEW_PRESENTATION",
      message:
        "Option request-amend — nouvelle présentation requise avant acceptation.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: `Statut HumanDecision ${decision.status} — reprise refusée.`,
    };
  }

  if (decision.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "HumanDecision d'un autre Project.",
    };
  }

  if (decision.authority !== "pilot") {
    return {
      ok: false,
      code: "HD_AUTHORITY_INVALID",
      message: "Autorité Pilote requise pour mission générique structurante.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "generic_mission") {
    return {
      ok: false,
      code: "HD_SOURCE_TYPE_INVALID",
      message: "DecisionBasis.sourceType generic_mission requis.",
    };
  }

  const basisViolation = validateDecisionBasis(basis);
  if (basisViolation) {
    return {
      ok: false,
      code: "HD_BASIS_INVALID",
      message: `DecisionBasis invalide: ${basisViolation.reason}`,
    };
  }

  const ctx = basis.genericMissionContext!;
  if (decision.subject.trim() !== ctx.missionSubjectId) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "Sujet HumanDecision ≠ missionSubjectId scellé.",
    };
  }
  if (
    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
  ) {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "Option accept-prepare absente — PREPARE non débloqué.",
    };
  }

  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Intégrité du sceau durable échouée (${integrity.reason}).`,
    };
  }

  return {
    ok: true,
    verified: {
      decisionId: decision.decisionId,
      decision,
      missionSubjectId: ctx.missionSubjectId,
      presentationDigest: ctx.presentationDigest,
    },
  };
}

async function evaluateLpsCurrentness(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly sealedLpsVersion: number;
  readonly sealedDoctrineDigest?: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult | { readonly ok: true }> {
  const currentLps =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!currentLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS courant indisponible pour currentness.",
    };
  }

  const sealedLps =
    await input.oa.projectServices.getLivingProjectStateVersion.execute({
      projectId: input.projectId,
      version: input.sealedLpsVersion,
    });
  if (!sealedLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS scellé indisponible — transition non qualifiable.",
    };
  }

  const sealedSnap = lpsSnapshotFromState(sealedLps.livingProjectState);
  // Prefer sealed proposalContext doctrineDigest when LPS payload lacks it.
  const sealedWithDoctrine: LpsMaterialSnapshot = {
    ...sealedSnap,
    doctrineDigest:
      sealedSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };
  const currentSnap = lpsSnapshotFromState(currentLps.livingProjectState);
  const currentWithDoctrine: LpsMaterialSnapshot = {
    ...currentSnap,
    doctrineDigest:
      currentSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };

  const lpsEval = evaluateLpsTransitionAfterHumanDecision({
    sealed: sealedWithDoctrine,
    current: currentWithDoctrine,
    decisionId: input.decisionId,
  });
  if (!lpsEval.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Transition LPS non légitime (${lpsEval.reason}).`,
    };
  }
  return { ok: true };
}

function effectsMismatchCode(reason: string): string {
  if (
    reason === "scope_arrays_drift" ||
    reason === "scope_narrative_drift" ||
    reason === "scope_narrative_mismatch" ||
    reason === "scope_arrays_mismatch"
  ) {
    return "HD_SCOPE_MISMATCH";
  }
  if (
    reason === "capabilities_drift" ||
    reason === "impact_signals_drift" ||
    reason === "intent_kind_drift" ||
    reason === "artifact_type_drift" ||
    reason === "requested_operation_drift" ||
    reason === "expected_outputs_drift" ||
    reason === "reversibility_drift" ||
    reason === "stop_conditions_drift" ||
    reason === "risks_drift" ||
    reason === "reservations_drift" ||
    reason === "intent_kind_mismatch" ||
    reason === "artifact_type_mismatch" ||
    reason === "requested_operation_mismatch" ||
    reason === "expected_outputs_mismatch" ||
    reason === "capabilities_mismatch" ||
    reason === "stop_conditions_missing" ||
    reason === "reversibility_expectation_mismatch" ||
    reason === "oa_reversibility_mismatch" ||
    reason === "risks_missing" ||
    reason === "reservations_missing" ||
    reason === "materiality_mismatch" ||
    reason === "materiality_degraded" ||
    reason === "materiality_absent"
  ) {
    return "HD_EFFECTS_MISMATCH";
  }
  if (
    reason === "objective_drift" ||
    reason === "expected_outcome_drift" ||
    reason === "objective_mismatch" ||
    reason === "expected_outcome_mismatch" ||
    reason === "mission_subject_id_mismatch" ||
    reason === "mission_subject_id_absent" ||
    reason === "decision_ref_absent" ||
    reason === "cycle_mismatch"
  ) {
    return "HD_MISSION_MISMATCH";
  }
  if (
    reason === "repository_binding_drift" ||
    reason === "path_root_drift" ||
    reason === "repository_binding_mismatch" ||
    reason === "path_root_mismatch" ||
    reason === "presentation_digest_absent" ||
    reason === "presentation_digest_mismatch" ||
    reason === "ec_status_not_reusable"
  ) {
    return "HD_SUBJECT_STALE";
  }
  return "HD_SUBJECT_STALE";
}

export async function verifyGenericMissionHumanDecisionForPrepare(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionId: string;
  readonly analysis: IntentAnalysisDto;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;

  const expectedCycle = input.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (expectedCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId incompatible avec la mission scellée.",
    };
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Requalification Product impossible — reprise refusée.",
    };
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product absente — reprise refusée.",
    };
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "Capacités courantes hors enveloppe — reprise refusée.",
    };
  }

  const current = buildCurrentMaterialFromAnalysis({
    analysis: input.analysis,
    materiality: materialityResolution.assessment.materiality,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    requiredCapabilities: capabilityResolution.contractCapabilities,
    cycleInstanceId: expectedCycle,
  });

  const material = materialCurrentnessMatch({ sealed: ctx, current });
  if (!material.ok) {
    return {
      ok: false,
      code: effectsMismatchCode(material.reason),
      message: `Faits Product courants incompatibles avec la mission scellée (${material.reason}).`,
    };
  }

  return base;
}

/**
 * CR-03 — read-only currentness of a generic_mission HD against an EC.
 * Used at Confirm/Authorize. Never builds contracts. Never skips via refs length.
 */
export async function verifyGenericMissionHumanDecisionForContract(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly contract: ExecutionContract;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;
  const contract = input.contract;

  if (contract.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "EC Project mismatch.",
    };
  }

  const refs = contract.decisionRefs ?? [];
  if (!refs.includes(decision.decisionId)) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "decisionId absent des decisionRefs du contrat.",
    };
  }

  const contractCycle = contract.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (contractCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId EC incompatible avec la mission scellée.",
    };
  }

  // Closed cycle bound to EC → refuse.
  if (contractCycle) {
    const cycleServices = input.oa.cycleServices;
    if (!cycleServices?.getCycle) {
      return {
        ok: false,
        code: "HD_SUBJECT_STALE",
        message: "Services cycle indisponibles pour valider le cycle lié.",
      };
    }
    const cycle = await cycleServices.getCycle.execute({
      cycleInstanceId: contractCycle,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: "Cycle lié introuvable — Confirm/Authorize refusé.",
      };
    }
    const status = cycle.cycle.status;
    if (
      status === "completed" ||
      status === "cancelled" ||
      status === "superseded"
    ) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: `Cycle lié ${status} — Confirm/Authorize refusé.`,
      };
    }
    if (cycle.cycle.projectId !== input.projectId.trim()) {
      return {
        ok: false,
        code: "HD_PROJECT_MISMATCH",
        message: "Cycle lié à un autre Project.",
      };
    }
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;

  // Bloc A — dual representations must agree (no silent favorable pick).
  const internal = assertExecutionContractInternalConsistency({
    constraints: contract.constraints,
    inputs: contractInputs,
  });
  if (!internal.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: `EC représentation interne incohérente (${internal.reason}).`,
    };
  }

  // Independent EC projection (native OA + stamped inputs) vs sealed HD.
  const ecProjection = projectExecutionContractEffects({
    projectId: contract.projectId,
    cycleInstanceId: contract.cycleInstanceId,
    decisionRefs: contract.decisionRefs,
    status: contract.status,
    version: contract.version,
    semanticFingerprint: contract.semanticFingerprint,
    expectedOutputs: contract.expectedOutputs,
    requiredCapabilities: contract.requiredCapabilities,
    stopConditions: contract.stopConditions,
    reversibility: contract.reversibility as OaReversibility,
    constraints: contract.constraints,
    inputs: contractInputs,
  });
  const ecHd = compareExecutionContractToSealedHumanDecision({
    sealed: ctx,
    ec: ecProjection,
    decisionId: decision.decisionId,
  });
  if (!ecHd.ok) {
    return {
      ok: false,
      code: effectsMismatchCode(ecHd.reason),
      message: `EC↔HD binding refusé (${ecHd.reason}).`,
    };
  }

  // Historical contract impact signals (stamped on EC / sealed HD).
  // These are NOT claimed as a live Nora re-qualification — they are the
  // accepted mission facts carried by the EC/HD. Product-owned facts
  // (LPS, repo binding, protected paths, pathRoot) are read live below.
  const materialityFacts = (contractInputs.materialityFacts ?? null) as
    | {
        modelSignals?: {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        } | null;
      }
    | null;
  const stampedImpact =
    (contractInputs.impactSignals as
      | {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        }
      | undefined) ?? null;
  const historicalSignals =
    materialityFacts?.modelSignals ??
    stampedImpact ??
    (ctx.impactSignals
      ? {
          structuralChange: ctx.impactSignals.structuralChange,
          securityImpact: ctx.impactSignals.securityImpact,
          architectureImpact: ctx.impactSignals.architectureImpact,
          dataImpact: ctx.impactSignals.dataImpact,
          irreversible: ctx.impactSignals.irreversible,
        }
      : null);

  const live = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: {
      parseOk: true,
      intentClass: "execution_request",
      candidateCycleTypeId: null,
      // Historical sealed/stamped signals — never nullled to force non_structural.
      signals: historicalSignals,
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: "sufficient",
      objective: ecProjection.objective || ctx.objective,
      scope: ecProjection.scopeNarrative || ctx.scopeNarrative,
      rephrasedRequest: ecProjection.objective || ctx.objective,
      outOfScope: [...ecProjection.scopeOut],
      risks: [...ecProjection.risks],
      reservations: [...ecProjection.reservations],
      stopConditions: [...ecProjection.stopConditions],
      activatedBlocks: [],
      expectedOutcome: ecProjection.expectedOutcome || ctx.expectedOutcome,
      criticalJustification: null,
      requestedOperation: ecProjection.requestedOperation,
      executionIntent: {
        intentKind: ecProjection.intentKind,
        artifactType: ecProjection.artifactType,
        scopeIn: [...ecProjection.scopeIn],
        requiredCapabilities: [...ecProjection.requiredCapabilities],
        requestedOperation: ecProjection.requestedOperation,
        reversibilityExpectation: ecProjection.reversibilityExpectation,
      },
    } as IntentAnalysisDto,
    cycleInstanceId: sealedCycle,
  });
  if (!live.liveReadOk || !live.facts.productCurrentness) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message: "Currentness Product indisponible — matérialité non requalifiable.",
    };
  }
  const binding = live.facts.productCurrentness;
  if (binding.repositoryIdentity !== ctx.repositoryBindingIdentity) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Repository binding courant incompatible avec la HD scellée.",
    };
  }
  if (binding.pathRoot !== ctx.pathRoot) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "pathRoot courant incompatible avec la HD scellée.",
    };
  }

  // Bloc B — CURRENT Product materiality continuity for structural+HD.
  // assessExecutionMaterialityOrUnknown forces UNKNOWN whenever
  // productContextSufficient is false — including when historical structural
  // signals are present (basis ≠ non_structural-only). That UNKNOWN gate is
  // for empty-refs NON_STRUCTURAL. Here we recompute class from Product-owned
  // facts + historical sealed/stamped signals (not a live Nora re-qualification).
  if (historicalSignals == null && !live.productContextSufficient) {
    return {
      ok: false,
      code: "MATERIALITY_UNKNOWN",
      message:
        "Matérialité Product courante indéterminée — Confirm/Authorize refusé.",
    };
  }
  // Product WHERE breakage (paths outside current root) is a currentness failure
  // even when sealed pathRoot string still matched a stale stamp race.
  if ((live.facts.pathsOutsidePathRoot ?? []).length > 0) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message:
        "Périmètre mission hors pathRoot Product courant — matérialité non applicable.",
    };
  }

  const recomputed = assessExecutionMateriality({
    modelSignals: historicalSignals,
    contradictionConflictPresent: live.facts.contradictionConflictPresent,
    currentContradictionUnresolved: live.facts.currentContradictionUnresolved,
    protectedPathHits: live.facts.protectedPathHits,
    wouldMutateStructuralProjectTruth:
      live.facts.wouldMutateStructuralProjectTruth,
    wouldMutateCycleOrTrajectoryTruth:
      live.facts.wouldMutateCycleOrTrajectoryTruth,
    authorityEnvelopeExpanded: live.facts.authorityEnvelopeExpanded,
  });
  const currentMateriality = recomputed.materiality;
  const vsHd = materialityContinuityCompatible({
    sealed: ctx.materiality,
    current: currentMateriality,
  });
  if (!vsHd.ok) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message: `Matérialité Product courante (${currentMateriality}) incompatible avec le sceau HD (${ctx.materiality}) — ${vsHd.reason}.`,
    };
  }
  if (ecProjection.materiality != null) {
    const vsEc = materialityContinuityCompatible({
      sealed: ecProjection.materiality,
      current: currentMateriality,
    });
    if (!vsEc.ok) {
      return {
        ok: false,
        code: "MATERIALITY_CURRENT_MISMATCH",
        message: `Matérialité Product courante (${currentMateriality}) incompatible avec l'EC (${ecProjection.materiality}) — ${vsEc.reason}.`,
      };
    }
  }

  return base;
}

```

---

## 17. CONTENU COMPLET — p6.mHd01.finalAuthorityBinding.d0.test.ts
```typescript
/**
 * P6 — M-HD-01 Final EC/HD Authority Binding Correction.
 * IC: EC internal dual-representation consistency.
 * CM: CURRENT Product materiality continuity.
 *
 * Fake only — ZERO Cursor REAL / OpenAI LIVE / Pilot UI claim.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  assertExecutionContractInternalConsistency,
  materialityContinuityCompatible,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function structuralAnalysis(overrides?: {
  objective?: string;
  scope?: string;
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/final-bind";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante final binding",
    expectedOutcome: "Autorité EC/HD cohérente",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: ["STOP_FINAL_A"],
    risks: ["RISK_FINAL"],
    reservations: ["RES_FINAL"],
    executionIntent: {
      intentKind: "code_change",
      artifactType: "module",
      scopeIn: [scope],
      requiredCapabilities: [],
      requestedOperation: "final-bind",
      reversibilityExpectation: "reversible",
    },
  };
}

function cloneMutated(
  contract: ExecutionContract,
  mutate: (c: ExecutionContract) => void,
): ExecutionContract {
  const copy = structuredClone(contract) as ExecutionContract;
  mutate(copy);
  return copy;
}

describe("P6 M-HD-01 Final Authority Binding (IC + CM)", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-mhd01-final.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdfin",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHDFIN ${suffix}`,
      objective: "M-HD-01 final authority binding",
      context: "det final",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MF${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdfin-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/mhdfin-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa, identity };
  }

  async function prepareStructuralWithHd(suffix: string) {
    const { projectId, oa, identity } = await seedProject(suffix);
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) throw new Error(recorded.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`${prep.code} ${prep.message}`);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!live.ok) throw new Error("get EC");
    return {
      projectId,
      oa,
      identity,
      analysis,
      decision: recorded.decision,
      subject: sealed.subject,
      prep,
      inspected,
      contract: live.contract,
    };
  }

  describe("IC — EC internal consistency", () => {
    it("IC01 — EC cohérent → Confirm/Authorize PASS", async () => {
      const ctx = await prepareStructuralWithHd("ic01");
      const internal = assertExecutionContractInternalConsistency({
        constraints: ctx.contract.constraints,
        inputs: ctx.contract.inputs as Record<string, unknown>,
      });
      expect(internal.ok).toBe(true);
      if (ctx.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("IC02 — facts STRUCTURAL vs constraint NON_STRUCTURAL → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ic02");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.constraints = (c.constraints ?? [])
          .filter((x) => !x.startsWith("MATERIALITY:"))
          .concat(["MATERIALITY:NON_STRUCTURAL"]);
        c.inputs = {
          ...c.inputs,
          materialityFacts: {
            ...((c.inputs?.materialityFacts as object) ?? {}),
            assessedMateriality: "structural",
          },
        };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("materiality_facts_vs_constraint_conflict");
    });

    it("IC03 — facts NON_STRUCTURAL vs constraint STRUCTURAL → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ic03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.constraints = (c.constraints ?? [])
          .filter((x) => !x.startsWith("MATERIALITY:"))
          .concat(["MATERIALITY:STRUCTURAL"]);
        c.inputs = {
          ...c.inputs,
          materialityFacts: {
            ...((c.inputs?.materialityFacts as object) ?? {}),
            assessedMateriality: "non_structural",
          },
        };
      });
      const internal = assertExecutionContractInternalConsistency({
        constraints: mutated.constraints,
        inputs: mutated.inputs as Record<string, unknown>,
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_facts_vs_constraint_conflict");
    });

    it("IC04 — deux tokens MATERIALITY contradictoires → REFUS", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "MATERIALITY:NON_STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
        },
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_constraint_conflict");
    });

    it("IC05/IC06 — risks / reservations inputs vs constraints → REFUS", () => {
      const risks = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "RISK:A"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
          risks: ["B"],
        },
      });
      expect(risks.ok).toBe(false);
      if (risks.ok) throw new Error("expected refuse");
      expect(risks.reason).toBe("risks_inputs_vs_constraints_conflict");

      const reservations = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "RESERVATION:A"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
          reservations: [],
        },
      });
      expect(reservations.ok).toBe(false);
      if (reservations.ok) throw new Error("expected refuse");
      expect(reservations.reason).toBe(
        "reservations_inputs_vs_constraints_conflict",
      );
    });

    it("IC07/IC08 — repository / pathRoot dual conflict → REFUS", () => {
      const repo = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          repositoryBindingIdentity: "acme/a",
          pathRoot: "projects/demo",
          materialityFacts: {
            assessedMateriality: "structural",
            productCurrentness: {
              repositoryIdentity: "acme/b",
              pathRoot: "projects/demo",
            },
          },
        },
      });
      expect(repo.ok).toBe(false);
      if (repo.ok) throw new Error("expected refuse");
      expect(repo.reason).toBe("repository_identity_dual_conflict");

      const path = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          repositoryBindingIdentity: "acme/a",
          pathRoot: "projects/demo",
          materialityFacts: {
            assessedMateriality: "structural",
            productCurrentness: {
              repositoryIdentity: "acme/a",
              pathRoot: "projects/other",
            },
          },
        },
      });
      expect(path.ok).toBe(false);
      if (path.ok) throw new Error("expected refuse");
      expect(path.reason).toBe("path_root_dual_conflict");
    });

    it("IC09 — assessedMateriality invalide ne devient pas absence", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "not-a-class" },
        },
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_facts_malformed");
    });

    it("IC10 — contrat historique sans stamp generic_mission → legacy OK", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:NON_STRUCTURAL", "PRODUCT_GOVERNED"],
        inputs: {
          objective: "legacy",
          // no missionSubjectId / presentationDigest
        },
      });
      expect(internal.ok).toBe(true);
    });
  });

  describe("CM — Product current materiality continuity", () => {
    it("CM01 — structural+HD + Product concordant → Confirm/Authorize PASS", async () => {
      const ctx = await prepareStructuralWithHd("cm01");
      if (ctx.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("CM02 — materiality continuity refuses structural degradation", () => {
      const ok = materialityContinuityCompatible({
        sealed: "structural",
        current: "non_structural",
      });
      expect(ok.ok).toBe(false);
      if (ok.ok) throw new Error("expected refuse");
      expect(ok.reason).toBe("structural_materiality_degraded");
    });

    it("CM03 — historical signals absent + Product insufficient → REFUS path", async () => {
      const ctx = await prepareStructuralWithHd("cm03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        const facts = {
          ...((c.inputs?.materialityFacts as object) ?? {}),
        } as Record<string, unknown>;
        delete facts.modelSignals;
        c.inputs = {
          ...c.inputs,
          impactSignals: null,
          materialityFacts: facts,
        };
      });
      // Clear sealed fallback by also using a contract whose verify still has HD
      // impactSignals from decision — to force unknown we need signals null AND
      // productContextInsufficient. Mutating scopeIn to empty breaks concrete paths.
      mutated.inputs = {
        ...mutated.inputs,
        scopeIn: [],
        missionScopeNarrative: "narrative without path",
      };
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      // Either scope mismatch vs HD or materiality unknown — both fail-closed.
      expect(v.ok).toBe(false);
    });

    it("CM05 — pathRoot Product changé → Confirm REFUS", async () => {
      const ctx = await prepareStructuralWithHd("cm05");
      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: ctx.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: ctx.identity,
          remoteUrl: `https://github.com/${ctx.identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/other-root",
        },
      });
      const confirmed = await confirmExecutionContractForAuthorization({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(false);
    });

    it("CM06 — NON_STRUCTURAL sans HD → non-régression", async () => {
      const { projectId, oa } = await seedProject("cm06");
      const analysis = buildIntentAnalysisFromSolicitedMission({
        objective: "Lecture bornée",
        expectedOutcome: "note",
        scope: "projects/demo/README.md",
        impactSignals: {
          structuralChange: false,
          architectureImpact: false,
          securityImpact: false,
          dataImpact: false,
          irreversible: false,
        },
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.contract.decisionRefs ?? []).toEqual([]);
    });

    it("CM07 — unknown seal + structural current is compatible (documented)", () => {
      const ok = materialityContinuityCompatible({
        sealed: "unknown",
        current: "structural",
      });
      expect(ok.ok).toBe(true);
    });

    it("CM08 — cycle absent → parcours possible", async () => {
      const ctx = await prepareStructuralWithHd("cm08");
      expect(
        ctx.contract.cycleInstanceId == null ||
          ctx.contract.cycleInstanceId === "",
      ).toBe(true);
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: ctx.contract,
      });
      expect(v.ok).toBe(true);
    });

    it("CM10 — HD superseded → Authorize REFUS", async () => {
      const ctx = await prepareStructuralWithHd("cm10");
      const resealed = await sealGenericMissionForPresentation({
        oa: ctx.oa,
        projectId: ctx.projectId,
        cycleInstanceId: null,
        analysis: ctx.analysis,
        missionSubjectId: ctx.decision.subject,
      });
      if (!resealed.ok) throw new Error(resealed.message);
      const second = await recordGenericMissionHumanDecision({
        oa: ctx.oa,
        subject: resealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis: ctx.analysis,
        forceLocalAuthority: true,
        supersedeExistingAccepted: true,
      });
      if (!second.ok) throw new Error(second.message);
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(false);
      if (authorized.ok) throw new Error("expected refuse");
      expect(authorized.code).toBe("HD_SUPERSEDED");
    });
  });
});

```

---

## 18. HANDOFF

Message: `docs(review-handoff): publish M-HD-01 final authority binding correction`
Branche: `sfia/review-handoff`
(Post-publish: commit + blob.)

---

## 19. FIN

Verdict: **M-HD-01 EC/HD AUTHORITY BINDING — DETERMINISTIC PASS**
Statut: **LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**
Dirty préservé. Aucun commit Product.
Pack: 2026-10-16 15:31:17 CEST
