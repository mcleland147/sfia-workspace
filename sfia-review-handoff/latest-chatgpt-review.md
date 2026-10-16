# SFIA STUDIO — M-HD-01 EC ↔ HUMANDECISION EFFECTS BINDING CORRECTION PASS
## Review Pack FULL — CRITICAL

**Horodatage:** 2026-10-16 15:00:29 CEST
**GO Morris:** TARGETED EC/HD BINDING CORRECTION PASS — 2026-10-16
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Cycle type:** 8 — Delivery / implémentation
**Profil SFIA:** CRITICAL
**Typologie:** EVOL
**CKC:** ckc:studio:delivery (CONTENT VALIDATED BY MORRIS — guidance only)
**QA:** CRITICAL — LOCAL DETERMINISTIC
**Architecture conservée:** M-HD-01 O1 — aucune reconstruction

---

## 1. VERDICTS

**M-HD-01 EC/HD EFFECTS BINDING — DETERMINISTIC PASS**

**PILOT PRESENTATION BOUNDARY — NOT PROVEN**
(OPEN — PILOT UI/SESSION PROOF ; actions serveur présentes, consommateur UI absent)

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Claims interdits non émis: PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED

---

## 2. GIT TRUTH

### Remote
```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
```

- Worktree: `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016`
- Branche: `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
- HEAD: `b4c1d86211d372f7b0685be7ce8a5ba7de598e37`
- origin/main: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (attendu `896ff59c…`)
- Dirty: **préservé**
- Handoff précédent: `33d6a0aa` / blob `d1f2fe24`

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
| TARGET | Confirm/Authorize démontre EC couvert par HD acceptée pour mission exacte |
| CURRENT pré-pass | HD verify à Confirm/Authorize; comparaison EC/HD partielle; Pilote UI non prouvé |
| KEEP | OA HD, DecisionBasis generic_mission, Subject, EC, Inspection, Confirmation, Attempt, Project-scoped Cursor |
| ADAPT | fidélité champs EC; verify read-only EC/HD; tests transitions; qualification consommateur Pilote |
| REPLACE | Comparaison EC/HD partielle |
| Exit proof | Divergence matérielle EC/HD refusée AVANT progression d'autorité / Attempt |
| Capacité suivante | E4–E8 (hors scope) |

---

## 4. SOURCES CONSULTÉES

- Template cycle + routing + guardrails
- Convergence build doctrine / roadmap
- Product Completion C1; P2/P6; Architecture D-ER locale
- Doctrine v3 30/32/34/35/37; CKC 08-delivery
- Handoff `33d6a0aa` / `d1f2fe24` (Authority Continuity)
- OA ExecutionContract types; prepare/verify/record/confirm/authorize; tests M-HD-01

---

## 5. MATRICE CHAMPS EC ↔ HD

| Champ Pilote/sceau | Source Product | Représentation EC | Match | Confirm/Authorize |
|--------------------|----------------|-------------------|-------|-------------------|
| projectId | Project OA | EC.projectId | EXACT | B1 |
| missionSubjectId | HD genericMissionContext | inputs.missionSubjectId | EXACT (requis) | B2 |
| presentationDigest | HD seal | inputs.presentationDigest | EXACT (requis) | B16 |
| cycleInstanceId | Subject | EC.cycleInstanceId | EXACT (null OK) | B4–B5 |
| objective / expectedOutcome / scopeNarrative | analysis→seal | inputs.* | EXACT | B6 |
| scopeIn / scopeOut | seal | inputs.scopeIn/Out | EXACT | B6 |
| intentKind / artifactType | seal | inputs.* | EXACT | B8 |
| requestedOperation | seal | inputs.requestedOperation | EXACT | B7 |
| expectedOutputs | seal | EC.expectedOutputs (natif) | EXACT | B9 |
| requiredCapabilities | envelope→seal | EC.requiredCapabilities | EXACT | B10 |
| stopConditions | seal (+system) | EC.stopConditions | CONSERVATIVE: sealed ⊆ EC | B11 |
| reversibilityExpectation | seal | inputs.reversibilityExpectation | EXACT | B12 |
| reversibility OA | map(expectation) | EC.reversibility | EXACT via mapReversibilityExpectationToOa | B12 |
| risks / reservations | seal | inputs.risks/reservations (+ RISK:/RESERVATION: constraints) | sealed ⊆ EC projection | B13 |
| materiality | assessment | materialityFacts.assessedMateriality | EXACT; structural↛non_structural | B14 |
| repositoryBinding / pathRoot | Product currentness | inputs + live revalidation | EXACT + live | B15 |
| decisionRefs | verified HD | EC.decisionRefs | EXACT includes decisionId | B3 |
| status/version/fingerprint | OA EC | EC.* | status not superseded/cancelled/failed | B17 |
| Confirmation | distinct OA | confirmationRef path | ≠ HD | B19 |
| Cursor access | Project-scoped | n/a | NOT AUTHORITY-BEARING | B20 |

**Justification compatibilité stopConditions:** EC peut ajouter stops système (AUTHORITY_DENIED, CONTEXT_STALE, …) sans supprimer ceux acceptés.
**Justification reversibility map:** irreversible→irreversible; reversible→reversible; unknown/null→partially_reversible (jamais élargissement silencieux vers irreversible).

---

## 6. CORRECTIONS CURRENT → TARGET

### Builder (`prepareGenericExecutionContractDraft.ts`)
- Après HD vérifiée: stamp **depuis sceau HD** (missionSubjectId, presentationDigest, requestedOperation, reversibilityExpectation, risks, reservations, intent/artifact, expectedOutputs, stopConditions, repo/pathRoot).
- `reversibility` OA via `mapReversibilityExpectationToOa` (plus de hardcode `partially_reversible`).

### Verify (`verifyGenericMissionHumanDecisionForContract`)
- Projection indépendante EC: `projectExecutionContractEffects` + `compareExecutionContractToSealedHumanDecision`.
- Refuse si digest/missionSubjectId absents ou divergents; effets mutés; materiality dégradée; stops/risks manquants.
- Currentness Product live pour repo/pathRoot (faits Product, pas reconstruction HD seule comme vérité EC).

### Confirm/Authorize
- Continuent d'appeler `verifyGenericMissionHumanDecisionForContract` (pas de bypass decisionRefs.length).

### Pilote (Bloc E)
- `w2SealGenericMissionAction` / `w2RecordGenericMissionHumanDecisionAction` existent dans `actions.ts`.
- **Aucun** call site dans `ProjectAssistantPanel.tsx` / `ConversationSurface.tsx`.
- Qualification: **PILOT PRESENTATION BOUNDARY — NOT WIRED / NOT PROVEN**.
- Pas de raccordement UX (exigerait gate Morris). Decision Pack ci-dessous.

---

## 7. DECISION PACK — PILOT PRESENTATION (OPEN, non bloquant EC/HD)

| Champ | Valeur |
|-------|--------|
| Invariant bloquant | P2–P5 non démontrables sans surface Pilote |
| Preuve | PB05: Panel/Surface sans w2Seal/w2Record; actions.ts contient les entrypoints |
| Contrat manquant | Liaison UI/session → Seal → option explicite → Record |
| Options bornées | (A) Wire local surfaces existantes sans nouveau contrat; (B) Gate Morris nouvelle surface; (C) Conserver Fake service-level |
| Recommandation | (C) pour ce cycle + gate Morris dédié pour wire Pilote |
| Décision Morris | PILOT PRESENTATION GATE si wire Product réel requis |

EC/HD binding corrigé et testé **indépendamment** (autorisé par GO).

---

## 8. MATRICE TESTS EC / PB

Fichier: `p6.mHd01.ecHdEffectsBinding.d0.test.ts` — **27 PASS** (Fake).

| ID | Résultat | Notes |
|----|----------|-------|
| EC01 | PASS | Confirm/Authorize réels + stamps |
| EC02–EC10 | PASS | Fixture adversariale EC mutée → verify refuse |
| EC12 | PASS | Authorize réel après supersede |
| EC14–EC17 | PASS | autre mission / forged ref / repo / materiality helper |
| EC20/22/23/25/26 | PASS | cycle facultatif / idempotence / NS / no Attempt / inspect |
| PB01–PB04, PB06–PB09, PB12 | PASS | Fake service |
| PB05 | PASS (OPEN claim) | Inspection code: UI NOT WIRED — not synthetic click PASS |

Non exécutés comme Confirm effectifs pour chaque mutation EC (immutabilité OA) — fixtures déclarées; Confirm/Authorize effectifs sur EC01/EC12/EC16/PB08.

---

## 9. VALIDATIONS EXÉCUTÉES

- EC/HD binding: 27 PASS
- M-HD-01 HD: 21 PASS
- Authority Continuity: 24 PASS
- Inspection binding: 15 PASS
- Project-scoped selection: 14 PASS
- **Total batch: 101 PASS**
- tsc --noEmit: PASS
- next build: PASS

---

## 10. FAKE / REAL

| Item | Niveau |
|------|--------|
| EC↔HD effects binding | LOCAL DETERMINISTIC EC ↔ HD EFFECTS BINDING PROOF |
| Pilot UI/session | NOT FULLY PROVEN / NOT WIRED |
| REAL | NON ACCORDÉ |
| Claims interdits | non émis |

---

## 11. DETTE / EXIT / GATES

| Dette | Exit |
|-------|------|
| Pilot UI wire | Morris PILOT PRESENTATION GATE |
| E4–E8 | Cycle dédié |
| Cursor REAL / OpenAI LIVE | Morris REAL |
| SelectionProfile / F2-ACGC | Retire later |

---

## 12. INSTRUCTION CHATGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — M-HD-01 EC ↔ HUMANDECISION CRITICAL EFFECTS BINDING CODE REVIEW**

Vérifier: champs EC indépendants; aucun effet scellé ignoré; pas d'autorité digests seule; currentness Product; Confirm/Authorize effectifs; legacy NR; provenance Pilote (NOT PROVEN); pas de décision synthétique; cycle facultatif; idempotence; Review Pack complet; aucun commit Product.

---

## 13. SORTIES TESTS (extrait)
```
.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:c7763c7f7a2daec7","attemptId":"xat:w3a:b9960aa317e7bcac","executionContractId":"xct:gen-prep:f49b7fd520e551e8457a4419","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":3}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:c7763c7f7a2daec7","attemptId":"xat:w3a:b9960aa317e7bcac","executionContractId":"xct:gen-prep:f49b7fd520e551e8457a4419","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":3}

stdout | __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts > P6 project-scoped Cursor selection Delivery > S10 — mission faible effet: PREPARE + Select proportionnés (no cycle)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e0a446479f014077","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e0a446479f014077","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts > P6 Select inspection binding (R1) > I11 — Confirm may bump version; attested binding still Select-valid via I1 path
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:6afd0ae1e7bfd1af","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:6afd0ae1e7bfd1af","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts (14 tests) 756ms
 ✓ __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts (15 tests) 801ms
stdout | __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts > P6 M-HD-01 Generic Mission HumanDecision > E1 — structural + verified HD can Select (Fake)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e5b974c3b368bd22","attemptId":"xat:w3a:b7830c7dcd2d9d1b","executionContractId":"xct:gen-prep:af123b4e70db8588253c36b9","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":3}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e5b974c3b368bd22","attemptId":"xat:w3a:b7830c7dcd2d9d1b","executionContractId":"xct:gen-prep:af123b4e70db8588253c36b9","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":3}

 ✓ __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts (21 tests) 900ms
 ✓ __tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts (24 tests) 991ms
 ✓ __tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts (27 tests) 1083ms

 Test Files  5 passed (5)
      Tests  101 passed (101)
   Start at  14:59:08
   Duration  2.54s (transform 1.23s, setup 175ms, collect 6.31s, tests 4.53s, environment 0ms, prepare 177ms)


```

---

## 14. DIFF PREPARE (Product builder)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..5af37e25 100644
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
     input.scopeIn.join("|"),
     input.scopeOut.join("|"),
     input.materiality,
+    input.decisionId?.trim() || "",
+    input.presentationDigest?.trim() || "",
   ].join("\n");
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }
@@ -368,7 +386,7 @@ export function extractMissionEffectsFromAnalysis(

 function offerFingerprintFor(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
@@ -381,7 +399,7 @@ function offerFingerprintFor(input: {
     .update(
       [
         input.projectId,
-        input.cycleInstanceId,
+        input.cycleInstanceId ?? "",
         input.objective,
         input.expectedOutcome,
         input.scope,
@@ -405,7 +423,7 @@ function offerFingerprintFor(input: {
 /** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
 export function rememberGenericPrepareRecommendation(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly analysis: IntentAnalysisDto;
   readonly offeredAtIso: string;
   readonly sessionKey?: string | null;
@@ -540,21 +558,14 @@ export function getCurrentGenericPrepareOffer(

 /**
  * Build (+ optional Validate) an inspectable generalist ExecutionContract.
- * Empty decisionRefs when non-structural. Never records HumanDecision.
+ * Empty decisionRefs when non-structural. Structural resume requires verified HD.
+ * Never records HumanDecision. Never auto-EXECUTE.
  */
 export async function prepareGenericExecutionContractDraft(
   input: PrepareGenericExecutionContractDraftInput,
 ): Promise<PrepareGenericExecutionContractDraftResult> {
   const readiness = assessGenericMissionPrepareReadiness(input.analysis);
-  if (readiness.structuralBlocked) {
-    return {
-      ok: false,
-      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
-    };
-  }
-  if (!readiness.ready) {
+  if (readiness.missingFields.length > 0) {
     return {
       ok: false,
       code: "MISSION_INSUFFICIENTLY_QUALIFIED",
@@ -562,6 +573,27 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const decisionId = input.decisionId?.trim() || null;
+  let verifiedDecisionRefs: string[] = [];
+  let verifiedPresentationDigest: string | null = null;
+  let verifiedMissionSubjectId: string | null = null;
+  let sealedHdEffects: {
+    readonly requestedOperation: string | null;
+    readonly reversibilityExpectation:
+      | "reversible"
+      | "irreversible"
+      | "unknown"
+      | null;
+    readonly risks: readonly string[];
+    readonly reservations: readonly string[];
+    readonly intentKind: string | null;
+    readonly artifactType: string | null;
+    readonly expectedOutputs: readonly string[];
+    readonly stopConditions: readonly string[];
+    readonly repositoryBindingIdentity: string | null;
+    readonly pathRoot: string | null;
+  } | null = null;
+
   const proposedCapabilities =
     input.analysis.executionIntent?.requiredCapabilities ?? [];
   const capabilityResolution =
@@ -581,19 +613,64 @@ export async function prepareGenericExecutionContractDraft(
     cycleInstanceId: input.cycleInstanceId,
   });
   const materiality = materialityResolution.assessment;
-  if (materiality.humanDecisionRequired) {
-    return {
-      ok: false,
-      code:
-        materiality.materiality === "unknown"
-          ? "MATERIALITY_UNKNOWN"
-          : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        materiality.materiality === "unknown"
-          ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
-          : "Matérialité server-owned structurelle — HumanDecision requise avant préparation sans refs.",
+  const hdRequired =
+    readiness.structuralBlocked || materiality.humanDecisionRequired;
+
+  if (hdRequired) {
+    if (!decisionId) {
+      return {
+        ok: false,
+        code:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "MATERIALITY_UNKNOWN"
+            : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
+        message:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
+            : "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
+      };
+    }
+    const verified = await verifyGenericMissionHumanDecisionForPrepare({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId?.trim() || null,
+      decisionId,
+      analysis: input.analysis,
+    });
+    if (!verified.ok) {
+      return {
+        ok: false,
+        code: verified.code,
+        message: verified.message,
+      };
+    }
+    verifiedDecisionRefs = [verified.verified.decisionId];
+    verifiedPresentationDigest = verified.verified.presentationDigest;
+    verifiedMissionSubjectId = verified.verified.missionSubjectId;
+    const sealedCtx =
+      verified.verified.decision.decisionBasis?.genericMissionContext;
+    if (!sealedCtx) {
+      return {
+        ok: false,
+        code: "HD_BASIS_INVALID",
+        message: "genericMissionContext absent après vérification HD.",
+      };
+    }
+    // Authoritative accepted effects — stamp EC from sealed HD, not a parallel re-derivation.
+    sealedHdEffects = {
+      requestedOperation: sealedCtx.requestedOperation ?? null,
+      reversibilityExpectation: sealedCtx.reversibilityExpectation ?? null,
+      risks: [...sealedCtx.risks],
+      reservations: [...sealedCtx.reservations],
+      intentKind: sealedCtx.intentKind ?? null,
+      artifactType: sealedCtx.artifactType ?? null,
+      expectedOutputs: [...sealedCtx.expectedOutputs],
+      stopConditions: [...sealedCtx.stopConditions],
+      repositoryBindingIdentity: sealedCtx.repositoryBindingIdentity,
+      pathRoot: sealedCtx.pathRoot,
     };
   }
+  // Non-structural: decisionRefs remain empty (no systematic HD).

   const services = input.oa.executionContractServices;
   if (!services?.buildExecutionContract) {
@@ -637,7 +714,10 @@ export async function prepareGenericExecutionContractDraft(
       ? "unresolved_nora_candidate"
       : "not_applicable";
   // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
-  const contractExpectedOutputs = [expectedOutcome];
+  // When HD verified: sealed expectedOutputs are authoritative (already Product-qualified).
+  const contractExpectedOutputs = sealedHdEffects
+    ? [...sealedHdEffects.expectedOutputs]
+    : [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
   const impliesGit = missionImpliesRepositoryWork(input.analysis);
@@ -717,13 +797,23 @@ export async function prepareGenericExecutionContractDraft(
     scopeIn,
     scopeOut: outOfScope,
     materiality: materiality.materiality,
+    decisionId: verifiedDecisionRefs[0] ?? null,
+    presentationDigest: verifiedPresentationDigest,
   });
   const executionContractId = `xct:gen-prep:${missionKey}`;
   const idempotencyKey = `idem:gen-prep:${missionKey}`;
   const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

+  const sealedOrAnalysisStops = sealedHdEffects
+    ? [...sealedHdEffects.stopConditions]
+    : [
+        ...(input.analysis.stopConditions ?? []).filter(
+          (s) => s.trim().length > 0,
+        ),
+        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
+      ];
   const stopConditions = [
-    ...(input.analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
+    ...sealedOrAnalysisStops,
     "AUTHORITY_DENIED",
     "CONTEXT_STALE",
     "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
@@ -736,16 +826,25 @@ export async function prepareGenericExecutionContractDraft(
     return true;
   });

+  const sealedOrAnalysisRisks = sealedHdEffects
+    ? [...sealedHdEffects.risks]
+    : [...(input.analysis.risks ?? [])];
+  const sealedOrAnalysisReservations = sealedHdEffects
+    ? [...sealedHdEffects.reservations]
+    : [...(input.analysis.reservations ?? [])];
+
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
-    "PREPARE_WITHOUT_SYSTEMATIC_HD",
+    verifiedDecisionRefs.length > 0
+      ? "PREPARE_AFTER_VERIFIED_GENERIC_MISSION_HD"
+      : "PREPARE_WITHOUT_SYSTEMATIC_HD",
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
     ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
-    ...(input.analysis.risks ?? []).map((s) => `RISK:${s}`),
-    ...(input.analysis.reservations ?? []).map((s) => `RESERVATION:${s}`),
+    ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
+    ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
   ];

   const issuedAt = input.oa.clock.nowIso();
@@ -771,12 +870,31 @@ export async function prepareGenericExecutionContractDraft(
     assessedMateriality: materiality.materiality,
     reasonCodes: [...materiality.reasonCodes],
   };
+  const currentness = materialityResolution.facts.productCurrentness;
+  // Authoritative EC↔HD effect stamps (M-HD-01 binding). When HD verified,
+  // missionSubjectId + presentationDigest + sealed effects are required on the EC.
+  const stampedRevExpectation =
+    sealedHdEffects?.reversibilityExpectation ??
+    missionEffects.reversibilityExpectation;
+  const stampedRequestedOperation =
+    sealedHdEffects?.requestedOperation ?? missionEffects.requestedOperation;
+  const stampedIntentKind =
+    sealedHdEffects?.intentKind ?? missionEffects.intentKind;
+  const stampedArtifactType =
+    sealedHdEffects?.artifactType ?? missionEffects.artifactType;
+  const stampedRepoIdentity =
+    sealedHdEffects?.repositoryBindingIdentity ??
+    currentness?.repositoryIdentity ??
+    null;
+  const stampedPathRoot =
+    sealedHdEffects?.pathRoot ?? currentness?.pathRoot ?? null;
+  const oaReversibility = mapReversibilityExpectationToOa(stampedRevExpectation);

   const built = await services.buildExecutionContract.execute({
     executionContractId,
     projectId: input.projectId,
     cycleInstanceId,
-    decisionRefs: [],
+    decisionRefs: [...verifiedDecisionRefs],
     action: PRODUCT_CANONICAL_EXECUTION_ACTION,
     target: PRODUCT_CANONICAL_EXECUTION_TARGET,
     scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
@@ -788,14 +906,23 @@ export async function prepareGenericExecutionContractDraft(
       scopeOut: outOfScope,
       sourcesToRead,
       cursorDeterminesHow: true,
-      prepareWithoutSystematicHumanDecision: true,
+      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
+      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
+      missionSubjectId: verifiedMissionSubjectId,
+      presentationDigest: verifiedPresentationDigest,
       humanDecisionCreated: false,
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
-      // Intent fidelity — inspectable mission effects (Pass 02).
-      intentKind: missionEffects.intentKind,
-      artifactType: missionEffects.artifactType,
+      // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
+      intentKind: stampedIntentKind,
+      artifactType: stampedArtifactType,
+      requestedOperation: stampedRequestedOperation,
+      reversibilityExpectation: stampedRevExpectation,
+      risks: sealedOrAnalysisRisks,
+      reservations: sealedOrAnalysisReservations,
+      repositoryBindingIdentity: stampedRepoIdentity,
+      pathRoot: stampedPathRoot,
       artifactBrief: missionEffects.artifactBrief,
       contentRequirements: [...missionEffects.contentRequirements],
       validationExpectations: [...missionEffects.validationExpectations],
@@ -827,7 +954,7 @@ export async function prepareGenericExecutionContractDraft(
       "evreq:generic-prepare-mission-evidence",
       ...missionEffects.evidenceRequirements,
     ],
-    reversibility: "partially_reversible",
+    reversibility: oaReversibility,
     idempotencyKey,
     correlationId,
     status: "draft",
@@ -835,16 +962,104 @@ export async function prepareGenericExecutionContractDraft(
     authorityEvidenceId: authority.evidenceId,
   });

+  let contract;
+  let reusedExisting = false;
   if (!built.ok) {
-    return {
-      ok: false,
-      code: built.error.detailCode,
-      message: built.error.message,
-    };
+    // Idempotent resume: same missionKey / executionContractId already built.
+    if (built.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
+      const existing = await services.getExecutionContract.execute({
+        executionContractId,
+      });
+      const reusableStatuses = new Set([
+        "draft",
+        "validated",
+        "confirmation_required",
+        "confirmed",
+        "authorized",
+      ]);
+      const existingRefs = [...(existing.ok ? existing.contract.decisionRefs ?? [] : [])].sort();
+      const wantedRefs = [...verifiedDecisionRefs].sort();
+      const existingCaps = [
+        ...(existing.ok ? existing.contract.requiredCapabilities ?? [] : []),
+      ];
+      const wantedCaps = [...capabilityResolution.contractCapabilities];
+      const existingInputs = (existing.ok ? existing.contract.inputs ?? {} : {}) as Record<
+        string,
+        unknown
+      >;
+      const sameRefs = JSON.stringify(existingRefs) === JSON.stringify(wantedRefs);
+      const sameCaps = JSON.stringify(existingCaps) === JSON.stringify(wantedCaps);
+      const sameObjective =
+        String(existingInputs.objective ?? "").trim() === objective.trim();
+      const sameScope =
+        String(existingInputs.missionScopeNarrative ?? "").trim() ===
+          scopeNarrative.trim() &&
+        JSON.stringify(existingInputs.scopeIn ?? []) === JSON.stringify(scopeIn) &&
+        JSON.stringify(existingInputs.scopeOut ?? []) === JSON.stringify(outOfScope);
+      const sameMateriality = (existing.ok ? existing.contract.constraints ?? [] : []).includes(
+        materiality.constraintToken,
+      );
+      const sameDigest =
+        !verifiedPresentationDigest ||
+        String(existingInputs.presentationDigest ?? "") ===
+          verifiedPresentationDigest;
+      const statusOk =
+        existing.ok && reusableStatuses.has(existing.contract.status);
+      const notSuperseded =
+        existing.ok && existing.contract.status !== "superseded";
+      if (
+        existing.ok &&
+        existing.contract.projectId === input.projectId &&
+        sameRefs &&
+        sameCaps &&
+        sameObjective &&
+        sameScope &&
+        sameMateriality &&
+        sameDigest &&
+        statusOk &&
+        notSuperseded
+      ) {
+        // When HD resume: re-verify decision still applicable before reuse.
+        if (verifiedDecisionRefs.length > 0) {
+          for (const ref of verifiedDecisionRefs) {
+            const hd = await verifyGenericMissionHumanDecisionForContract({
+              oa: input.oa,
+              projectId: input.projectId,
+              decisionId: ref,
+              contract: existing.contract,
+            });
+            if (!hd.ok) {
+              return {
+                ok: false,
+                code: "CONTRACT_STALE",
+                message: `EC existant non réutilisable — HD courante invalide (${hd.code}).`,
+              };
+            }
+          }
+        }
+        contract = existing.contract;
+        reusedExisting = true;
+      } else {
+        return {
+          ok: false,
+          code: "CONTRACT_STALE",
+          message:
+            "EC existant non réutilisable (statut/scope/effets/decisionRefs/currentness divergents).",
+        };
+      }
+    } else {
+      return {
+        ok: false,
+        code: built.error.detailCode,
+        message: built.error.message,
+      };
+    }
+  } else {
+    contract = built.contract;
   }

-  let contract = built.contract;
-  const shouldValidate = input.validateAfterBuild !== false;
+  const shouldValidate =
+    input.validateAfterBuild !== false && !reusedExisting;
   if (shouldValidate && services.validateExecutionContract) {
     const validated = await services.validateExecutionContract.execute({
       executionContractId: contract.executionContractId,
@@ -884,13 +1099,19 @@ export function genericMissionClarificationText(input: {
   readonly missingFields: readonly string[];
   readonly structuralBlocked: boolean;
   readonly recommendPrepare?: boolean;
+  /** false = S8 project-context (no active cycle, none invented). Default true. */
+  readonly hasActiveCycle?: boolean;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  const contextKept =
+    input.hasActiveCycle === false
+      ? "Contexte projet conservé — aucun cycle artificiel créé."
+      : "Le cycle actif est conservé.";
   if (input.structuralBlocked) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
       "Rien n'a encore été exécuté.",
     ].join(" ");
@@ -898,7 +1119,7 @@ export function genericMissionClarificationText(input: {
   if (input.recommendPrepare) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Je recommande de confier cette mission à Cursor.",
       "Je peux préparer le contrat d'exécution générique inspectable.",
       "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
@@ -908,7 +1129,7 @@ export function genericMissionClarificationText(input: {
   const gaps = input.missingFields.join(", ");
   return [
     head,
-    "Le cycle actif est conservé.",
+    contextKept,
     `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
     "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
   ].join(" ");
@@ -930,3 +1151,184 @@ export function genericMissionPreparedText(input: {
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

function materialityFromConstraints(
  constraints: readonly string[],
): string | null {
  const token = constraints.find((c) => c.startsWith("MATERIALITY:"));
  if (!token) return null;
  return token.slice("MATERIALITY:".length).trim() || null;
}

/**
 * Project EC native fields + inputs into a single authoritative effect view.
 * Prefer native OA fields for expectedOutputs / stopConditions / reversibility /
 * requiredCapabilities; prefer stamped inputs for mission-specific effects.
 * Dual representations must not diverge (checked by compare).
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
    | { assessedMateriality?: string; productCurrentness?: {
        repositoryIdentity?: string | null;
        pathRoot?: string | null;
      } }
    | null;
  const assessed =
    typeof materialityFacts?.assessedMateriality === "string"
      ? materialityFacts.assessedMateriality.trim()
      : null;
  const revExpRaw = inputs.reversibilityExpectation;
  const revExp =
    revExpRaw === "reversible" ||
    revExpRaw === "irreversible" ||
    revExpRaw === "unknown"
      ? revExpRaw
      : null;
  const inputRisks = Array.isArray(inputs.risks)
    ? (inputs.risks as string[])
    : risksFromConstraints(constraints);
  const inputReservations = Array.isArray(inputs.reservations)
    ? (inputs.reservations as string[])
    : reservationsFromConstraints(constraints);
  const currentness = materialityFacts?.productCurrentness;
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
    materiality: assessed || materialityFromConstraints(constraints),
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
      currentness?.repositoryIdentity !== undefined
        ? currentness.repositoryIdentity ?? null
        : typeof inputs.repositoryBindingIdentity === "string"
          ? inputs.repositoryBindingIdentity
          : null,
    pathRoot:
      currentness?.pathRoot !== undefined
        ? currentness.pathRoot ?? null
        : typeof inputs.pathRoot === "string"
          ? inputs.pathRoot
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
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  compareExecutionContractToSealedHumanDecision,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
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
    inputs: (contract.inputs ?? {}) as Record<string, unknown>,
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

  // Live Product repository/pathRoot currentness — Product facts, not HD rebuild.
  const live = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: {
      parseOk: true,
      intentClass: "execution_request",
      candidateCycleTypeId: null,
      signals: null,
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
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product indisponible à Confirm/Authorize.",
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

  return base;
}

```

---

## 17. CONTENU COMPLET — p6.mHd01.ecHdEffectsBinding.d0.test.ts
```typescript
/**
 * P6 — M-HD-01 EC ↔ HumanDecision Effects Binding Correction Pass.
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 * Confirms Confirm/Authorize refuse material EC/HD divergence.
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
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
  compareExecutionContractToSealedHumanDecision,
  mapReversibilityExpectationToOa,
  projectExecutionContractEffects,
} from "@/features/project-assistant/w2/genericMissionSubject";
import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";
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
import { readFileSync } from "node:fs";
import { join } from "node:path";

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
  intentKind?: string;
  artifactType?: string;
  requestedOperation?: string | null;
  stopConditions?: string[];
  risks?: string[];
  reservations?: string[];
  reversibility?: "reversible" | "irreversible" | "unknown";
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/echd";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante EC/HD binding",
    expectedOutcome: overrides?.expectedOutcome ?? "Effets EC couverts par HD",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: overrides?.stopConditions ?? ["STOP_EC_HD_A"],
    risks: overrides?.risks ?? ["RISK_MATERIAL"],
    reservations: overrides?.reservations ?? ["RES_BLOCKING"],
    executionIntent: {
      intentKind: overrides?.intentKind ?? "code_change",
      artifactType: overrides?.artifactType ?? "module",
      scopeIn: [scope],
      requiredCapabilities: [],
      requestedOperation: overrides?.requestedOperation ?? "bind-effects",
      reversibilityExpectation: overrides?.reversibility ?? "reversible",
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

describe("P6 M-HD-01 EC ↔ HD Effects Binding", () => {
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
    sessionDbPath = tempProductDbPath("p6-mhd01-echd.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdechd",
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
      name: `MHDECHD ${suffix}`,
      objective: "M-HD-01 EC/HD binding",
      context: "det echd",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ME${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdechd-${suffix}`,
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
    const identity = `acme/mhdechd-${suffix}`;
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
    return { projectId, oa };
  }

  async function sealAccept(projectId: string, analysis: IntentAnalysisDto) {
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(`seal ${sealed.code}`);
    const recorded = await recordGenericMissionHumanDecision({
      oa: runtime.oa!,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) throw new Error(`record ${recorded.code}`);
    return { subject: sealed.subject, decision: recorded.decision };
  }

  async function prepareStructuralWithHd(suffix: string) {
    const { projectId, oa } = await seedProject(suffix);
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAccept(projectId, analysis);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
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
      analysis,
      decision,
      subject,
      prep,
      inspected,
      contract: live.contract,
    };
  }

  async function confirmIfNeeded(ctx: {
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    projectId: string;
    contract: ExecutionContract;
  }) {
    if (ctx.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        forceLocalAuthority: true,
      });
      return confirmed;
    }
    return { ok: true as const };
  }

  describe("EC01–EC10 — Confirm/Authorize + adversarial EC fixture", () => {
    it("EC01 — EC inchangé + HD valide → Confirm/Authorize OK", async () => {
      const ctx = await prepareStructuralWithHd("ec01");
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
      // Stamps present on new generic_mission EC.
      expect(ctx.contract.inputs?.missionSubjectId).toBe(ctx.subject.missionSubjectId);
      expect(ctx.contract.inputs?.presentationDigest).toBe(
        ctx.subject.presentationDigest,
      );
      expect(ctx.contract.inputs?.requestedOperation).toBe("bind-effects");
      expect(ctx.contract.reversibility).toBe("reversible");
    });

    it("EC02 — requestedOperation EC mutée → REFUS (verify + Confirm)", async () => {
      const ctx = await prepareStructuralWithHd("ec02");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, requestedOperation: "other-op" };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_EFFECTS_MISMATCH");
      expect(v.message).toContain("requested_operation_mismatch");
    });

    it("EC03 — expectedOutputs EC divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.expectedOutputs = ["unauthorized-output"];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("expected_outputs_mismatch");
    });

    it("EC04 — stopConditions scellées supprimées → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec04");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.stopConditions = c.stopConditions.filter((s) => s !== "STOP_EC_HD_A");
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("stop_conditions_missing");
    });

    it("EC05 — reversibility incompatible → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec05");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.reversibility = "irreversible";
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("oa_reversibility_mismatch");
    });

    it("EC06 — requiredCapabilities élargies → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec06");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.requiredCapabilities = [
          ...c.requiredCapabilities,
          "cap:unauthorized-elevated",
        ];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("capabilities_mismatch");
    });

    it("EC07 — scopeIn/scopeOut divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec07");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, scopeIn: ["projects/demo/src/other"] };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_SCOPE_MISMATCH");
    });

    it("EC08 — intentKind / artifactType divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec08");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, intentKind: "docs_write", artifactType: "doc" };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toMatch(/intent_kind_mismatch|artifact_type_mismatch/);
    });

    it("EC09 — risks / reservations matériellement affaiblis → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec09");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, risks: [], reservations: [] };
        c.constraints = (c.constraints ?? []).filter(
          (x) => !x.startsWith("RISK:") && !x.startsWith("RESERVATION:"),
        );
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toMatch(/risks_missing|reservations_missing/);
    });

    it("EC10 — presentationDigest absent ou divergent → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec10");
      const absent = cloneMutated(ctx.contract, (c) => {
        const next = { ...c.inputs };
        delete next.presentationDigest;
        c.inputs = next;
      });
      const v1 = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: absent,
      });
      expect(v1.ok).toBe(false);
      if (v1.ok) throw new Error("expected refuse");
      expect(v1.message).toContain("presentation_digest_absent");

      const divergent = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, presentationDigest: "sha256:forged" };
      });
      const v2 = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: divergent,
      });
      expect(v2.ok).toBe(false);
      if (v2.ok) throw new Error("expected refuse");
      expect(v2.message).toContain("presentation_digest_mismatch");
    });
  });

  describe("EC11–EC17 — authority transitions", () => {
    it("EC12 — HD superseded entre PREPARE et AUTHORIZE → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec12");
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

    it("EC14 — EC avec décision d'une autre mission → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec14");
      const otherAnalysis = structuralAnalysis({
        objective: "Autre mission",
        expectedOutcome: "Autre outcome",
        scope: "projects/demo/src/other-mission",
      });
      const other = await sealAccept(ctx.projectId, otherAnalysis);
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.decisionRefs = [other.decision.decisionId];
        c.inputs = {
          ...c.inputs,
          verifiedGenericMissionHumanDecisionId: other.decision.decisionId,
          missionSubjectId: other.subject.missionSubjectId,
          presentationDigest: other.subject.presentationDigest,
        };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: other.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
    });

    it("EC15 — EC avec decisionRef forgée → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec15");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.decisionRefs = ["dec:forged-not-real"];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: "dec:forged-not-real",
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_ABSENT");
    });

    it("EC16 — Repository binding divergent → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec16");
      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: ctx.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdechd-ec16",
          remoteUrl: "https://github.com/acme/mhdechd-ec16.git",
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

    it("EC17 — helper refuse materiality degraded on projection", () => {
      const sealed: DecisionBasisGenericMissionContext = {
        missionSubjectId: "gms:x",
        presentationDigest: "sha256:abc",
        subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: ["a"],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: "acme/x",
        pathRoot: "projects/demo",
        requiredCapabilities: ["cap:studio.product.canonical-execution"],
        expectedOutputs: ["e"],
        reversibilityExpectation: "reversible",
        stopConditions: ["STOP"],
        risks: [],
        reservations: [],
        intentKind: "code_change",
        artifactType: "module",
        requestedOperation: "op",
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      };
      const ec = projectExecutionContractEffects({
        projectId: "prj:x",
        status: "draft",
        version: 1,
        reversibility: "reversible",
        expectedOutputs: ["e"],
        requiredCapabilities: ["cap:studio.product.canonical-execution"],
        stopConditions: ["STOP", "AUTHORITY_DENIED"],
        decisionRefs: ["dec:1"],
        constraints: ["MATERIALITY:NON_STRUCTURAL"],
        inputs: {
          objective: "o",
          expectedOutcome: "e",
          missionScopeNarrative: "s",
          scopeIn: ["a"],
          scopeOut: [],
          intentKind: "code_change",
          artifactType: "module",
          requestedOperation: "op",
          reversibilityExpectation: "reversible",
          missionSubjectId: "gms:x",
          presentationDigest: "sha256:abc",
          materialityFacts: { assessedMateriality: "non_structural" },
          repositoryBindingIdentity: "acme/x",
          pathRoot: "projects/demo",
          risks: [],
          reservations: [],
        },
      });
      const cmp = compareExecutionContractToSealedHumanDecision({
        sealed,
        ec,
        decisionId: "dec:1",
      });
      expect(cmp.ok).toBe(false);
      if (cmp.ok) throw new Error("expected refuse");
      expect(cmp.reason).toMatch(/materiality/);
    });
  });

  describe("EC18–EC26 — cycle / idempotence / NR / Attempt", () => {
    it("EC20 — mission Project indépendante d'un cycle clos → OK", async () => {
      const ctx = await prepareStructuralWithHd("ec20");
      expect(ctx.contract.cycleInstanceId == null || ctx.contract.cycleInstanceId === "").toBe(
        true,
      );
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
    });

    it("EC22 — même mission / même HD / EC CURRENT → idempotence", async () => {
      const ctx = await prepareStructuralWithHd("ec22");
      const again = await prepareGenericExecutionContractDraft({
        oa: ctx.oa,
        projectId: ctx.projectId,
        cycleInstanceId: null,
        analysis: ctx.analysis,
        decisionId: ctx.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(again.ok).toBe(true);
      if (!again.ok) throw new Error(again.message);
      expect(again.contract.executionContractId).toBe(
        ctx.contract.executionContractId,
      );
    });

    it("EC23 — NON_STRUCTURAL sans HD → non-régression", async () => {
      const { projectId, oa } = await seedProject("ec23");
      const analysis = buildIntentAnalysisFromSolicitedMission({
        objective: "Lecture bornée non structurante",
        expectedOutcome: "Synthèse locale",
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

    it("EC25 — aucun Attempt sur chemin refusé", async () => {
      const ctx = await prepareStructuralWithHd("ec25");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, requestedOperation: "mutated" };
      });
      const before = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      const beforeCount = before.ok ? before.attempts.length : 0;
      await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      const after = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      const afterCount = after.ok ? after.attempts.length : 0;
      expect(afterCount).toBe(beforeCount);
    });

    it("EC26 — Inspection préservée après PREPARE structural+HD", async () => {
      const ctx = await prepareStructuralWithHd("ec26");
      expect(ctx.inspected.ok).toBe(true);
      expect(ctx.inspected.semanticFingerprint).toBeTruthy();
    });
  });

  describe("PB — Pilot presentation provenance qualification", () => {
    it("PB01 — Seal Product réel: sujet et options qualifiés", async () => {
      const { projectId } = await seedProject("pb01");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) throw new Error(sealed.message);
      expect(sealed.subject.optionRefs).toContain(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);
      expect(/^[a-f0-9]{64}$/.test(sealed.subject.presentationDigest)).toBe(true);
    });

    it("PB02 — Payload sujet falsifié → Record refusé", async () => {
      const { projectId } = await seedProject("pb02");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const forged = {
        ...sealed.subject,
        objective: "Forged objective",
        presentationDigest: sealed.subject.presentationDigest,
      };
      const recorded = await recordGenericMissionHumanDecision({
        oa: runtime.oa!,
        subject: forged,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(recorded.ok).toBe(false);
    });

    it("PB04 — Autorité Pilote absente → Record refusé", async () => {
      const { projectId, oa } = await seedProject("pb04");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const prev = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      const prevLegacy = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: false,
      });
      if (prev === undefined) delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      else process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = prev;
      if (prevLegacy === undefined) {
        delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      } else {
        process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = prevLegacy;
      }
      expect(recorded.ok).toBe(false);
      if (recorded.ok) throw new Error("expected refuse");
      expect(recorded.code).toBe("AUTHORITY_NOT_CONFIGURED");
    });

    it("PB05 — OPEN: aucun consommateur UI Product pour Seal/Record actions", () => {
      // Code inspection — not a synthetic UI click proof.
      const panel = readFileSync(
        join(
          process.cwd(),
          "features/project-assistant/ProjectAssistantPanel.tsx",
        ),
        "utf8",
      );
      const surface = readFileSync(
        join(
          process.cwd(),
          "features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
        ),
        "utf8",
      );
      expect(panel).not.toContain("w2SealGenericMissionAction");
      expect(panel).not.toContain("w2RecordGenericMissionHumanDecisionAction");
      expect(surface).not.toContain("w2SealGenericMissionAction");
      expect(surface).not.toContain("w2RecordGenericMissionHumanDecisionAction");
      // Actions exist as server entrypoints (P1) but are NOT WIRED to Pilot UI (P2–P5).
      const actions = readFileSync(
        join(process.cwd(), "features/project-assistant/w2/actions.ts"),
        "utf8",
      );
      expect(actions).toContain("w2SealGenericMissionAction");
      expect(actions).toContain("w2RecordGenericMissionHumanDecisionAction");
    });

    it("PB06/PB07 — refuse / request-amend n'autorisent pas PREPARE", async () => {
      const { projectId, oa } = await seedProject("pb06");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const refused = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(refused.ok).toBe(true);
      if (!refused.ok) throw new Error(refused.message);
      const prepRefuse = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: refused.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepRefuse.ok).toBe(false);

      const sealed2 = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed2.ok) throw new Error(sealed2.message);
      const amended = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed2.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
        analysis,
        forceLocalAuthority: true,
      });
      expect(amended.ok).toBe(true);
      if (!amended.ok) throw new Error(amended.message);
      const prepAmend = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: amended.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepAmend.ok).toBe(false);
    });

    it("PB08/PB09 — Confirmation ≠ HD; Record crée aucun Attempt", async () => {
      const ctx = await prepareStructuralWithHd("pb08");
      const attempts = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      expect(attempts.ok ? attempts.attempts.length : 0).toBe(0);
      // Confirmation path is distinct — Confirm still requires HD binding for structural.
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
    });

    it("PB12 — mapReversibilityExpectationToOa is conservative (no silent irreversible)", () => {
      expect(mapReversibilityExpectationToOa("reversible")).toBe("reversible");
      expect(mapReversibilityExpectationToOa("irreversible")).toBe("irreversible");
      expect(mapReversibilityExpectationToOa("unknown")).toBe("partially_reversible");
      expect(mapReversibilityExpectationToOa(null)).toBe("partially_reversible");
    });
  });
});

```

---

## 18. HANDOFF PUBLICATION

Branche: `sfia/review-handoff`
Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
Message: `docs(review-handoff): publish M-HD-01 EC-HD effects binding correction review`
Publisher: `scripts/sfia/publish-review-handoff.sh`
(Post-publish: commit + blob.)

---

## 19. FIN DU REVIEW PACK

Verdicts:
- **M-HD-01 EC/HD EFFECTS BINDING — DETERMINISTIC PASS**
- **PILOT PRESENTATION BOUNDARY — NOT PROVEN**
- **LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Dirty candidate préservé. Aucun commit Product.
Pack generated: 2026-10-16 15:00:29 CEST
