# Review Pack FULL — STUDIO-P6-UNIFIED-INSPECTION-CONTRACT-04

## Horodatage
2026-10-17T12:46:44Z

## Cycle
- ID: STUDIO-P6-UNIFIED-INSPECTION-CONTRACT-04
- Parent: STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03
- Parent handoff: edecdef4bf1c9a27095d9984c9cf9b83ae80d860
- Type: 8 — Delivery / Critical / INC-EVOL Inspection governance
- Milestone: P6 — GLOBAL INTEGRATED PRODUCT QA (Human QA bloquée; Runtime v3 NON ADOPTED; P6 PASS non revendiqué)

## Décision Morris consommée
GO UNIFIED INSPECTION CONTRACT — TARGETED DELIVERY.
Autorise unification des parcours d'inspection, correction attestations implicites, stabilité snapshot, UX locale, tests transversaux, fermeture réserves documentaires.
N'autorise PAS: OA domain change, nouvel EC engine, nouvelle autorité, migration persist, HQA, Cursor REAL, commit/push/PR Product, promotion runtime v3.

## Git Truth Check — initial / final
| Champ | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace (local worktree) |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` (attendu b4c1d862…) |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (attendu 896ff59c…) |
| Handoff tip pré-cycle | edecdef4bf1c9a27095d9984c9cf9b83ae80d860 |
| Staged Product | vide (aucun commit Product) |
| Dirty FP final | `00d004be58d7e35bacc4f639e58a60aae9beaebe3b28da6022dcef02cd8fce04` |
| Dirty FP initial Pass04 | ed595b7af651fe91086e6a03afd9647ab5d5536a11c3e4411f40edf1988576b9 |
| Baseline Pass04 | `.tmp-sfia-review/pass04-baseline/` (copies SHA-frozen des fichiers cibles) |

### Couches dirty préservées (ne pas confondre avec Pass04)
M-HD / MATERIALITY-BLOCK-01 / Delivery A+B / Regularization-02 / Inspection Closure Pass03 / **Pass04 (ce cycle)**.

## Sources consultées
- convergence-build-doctrine, convergence-roadmap
- product-completion/01, product-simplification/03 + 07
- sfia-v3-framing (30–37 applicables)
- prompts/templates/sfia-cycle-execution-template.md
- method routing + CKC cycle 8 synthetic map (carte candidate only)
- Review handoff parent edecdef4
- Figma m4g8j0gNbEzfIuH6S9AZJF session 9ba90356… — frames 150:532 / 150:29 (P3); 412/413/414 CANDIDATE non autoritaires

## Convergence Pre-check
- Capacité: V3-F05 Conversation → décision → exécution
- Dépendances: V3-F02/F06/F11/F12/F14/F15
- KEEP: EC OA, Inspection Attestation OA, InspectionDisclosure, W2 Option1, DTO requiredInspectedFacts, Pass03 Execution exam
- ADAPT: GovernedConfirmationCard, Conversation, Trajectory, Execution snapshot
- RETIRE (ce parcours): inspect-on-prepare, inspect-on-execute, Inspecter-pour-confirmer one-click write
- Gap fermé: trois surfaces → même règle examen explicite puis attestation explicite

## Phase A — Matrice des consommateurs

| Entrée | Surface | Déclencheur | Contrat | Faits affichés | Attestation | Auto-inspect? | Confirm couplé? | Execute couplé? | Pass04 |
|---|---|---|---|---|---|---|---|---|---|
| ExecutionSurface.handleOpenInspection | Exécution | Examiner CTA | continuity active | disclosure+requiredInspectedFacts | handleAttestInspection + inspectedFacts | NON (I07) | NON | NON | KEEP+snapshot |
| ExecutionSurface.handleAttestInspection | Exécution | Attester | snapshot identity | presentedFactIds | W2 inspect write | — | — | — | KEEP |
| useProductConversation.inspectGovernedContract (pré) | Conversation | Inspecter pour confirmer | continuity | aucun panneau | W2 inspect sans facts (server defaults) | OUI implicite | ensuite Confirm | NON | RETIRE → attestGovernedInspection |
| GovernedConfirmationCard.onInspect (pré) | Conversation | bouton | — | résumé scope/impact | délégué parent write | OUI | Confirm si ok | NON | ADAPT open exam |
| Trajectory.inspectPreparedContractId (pré) | Trajectory | post-PREPARE ×5 + Execute-if-insufficient | prepared id | aucun | W2 inspect sans facts | OUI | Execute peut Confirm+Auth | OUI | RETIRE write paths |
| Trajectory.inspect() (pré) | Trajectory | Inspecter le contrat | local contract | aucun | W2 inspect sans facts | OUI one-click | Confirm gated | — | ADAPT open exam |
| Trajectory.executeAsPilot (pré) | Trajectory | Exécuter | local | — | auto-inspect si insuffisant | OUI | Confirm+Auth in-click | OUI | refuse + propose exam |
| W2 inspectExecutionContract | serveur | actions | OA load | — | recordContractInspection | N/A | — | — | KEEP (hors scope OA) |

### Appels implicites inventoriés et corrigés
1. Conversation one-click Inspecter pour confirmer → write — CORRIGÉ
2. Trajectory auto-inspect après PREPARE (5 sites) — CORRIGÉ (close exam only)
3. Trajectory Inspecter one-click write — CORRIGÉ
4. Trajectory Execute auto-inspect — CORRIGÉ (refuse + open exam)
5. PREPARE recovery / proposal — CORRIGÉ

## Contrat commun
A–J respectés: READ-ONLY open → canonical facts → verify restitutable → Pilot exam → Attest distinct → persist only after Attest → inspectionSufficient from OA reread → Confirm/Execute contrôles OA sans auto-inspect.
Aucune attestation ≠ HD / Authorization / Confirmation.

## Mapping facts / disclosure / UI
- Source: `requiredInspectedFactsForContract` via W2 continuity DTO `requiredInspectedFacts`
- Rows: `buildInspectionFactRowsFromDisclosure` / `buildInspectionExamView`
- Shared panel: `ContractInspectionExamPanel` (testIdPrefix: project-execution | governed-confirmation | w2-trajectory)
- Attestation payload = `presentedFactIds` uniquement

## Snapshot stability
Identity: projectId + executionContractId + version + semanticFingerprint.
Invalidation: drift effect + projectId effect on Execution / Conversation card / Trajectory.
Attest refuses if snapshot ≠ live.
Server re-read after attest via existing W2 paths.

## Modifications Pass04 (justification)
### Shared (créé)
- contractInspectionExam.ts — helpers snapshot + exam view (pas de SoT)
- ContractInspectionExamPanel(+css) — présentation commune

### Execution
- Réutilise panel partagé; snapshot freeze; invalidate on drift/project

### Conversation
- GovernedConfirmationCard: Examiner ouvre panel; Attester → onAttestInspection(facts)
- useProductConversation: attestGovernedInspection(inspectedFacts); expose projectId

### Trajectory
- Retire auto-inspect PREPARE/Execute
- Inspecter → openInspectionExam (continuity required facts)
- Attester → attestInspectionExam
- NON INSPECTÉ visible même si inspection state null
- Execute refuse + open exam si insuffisant

## Tests
### Suites PASS (Pass04-relevant)
- p6.uic.unifiedInspectionContract.ui.test.tsx — 10
- governedMomentsInline.ui.test.tsx — 8
- p6.closureRegularization.trajectorySurfaceConsent.ui.test.tsx — 4
- trajectorySurface.ui.test.tsx — 55
- postExecutionTrajectorySurface.ui.test.tsx — 2
- p5.s03.durableExecutionActionContinuity.ui.test.tsx — 7 (E5 open≠write then attest)
- p6.r03.contextFreshness.ui.test.tsx — 7 (CTX01/03/04/07/08 + prior)
- p6.o1.continuityGd4EmptyRefs — 8
- p6.inspectionBindingSelect — 15

### Matrice U01–U22
| ID | Statut | Preuve |
|---|---|---|
| U01 | PASS | ExecutionSurface open sans write |
| U02 | PASS | GovernedConfirmationCard open sans attest |
| U03 | PASS | Trajectory open sans write |
| U04 | PASS | buildInspectionExamView canonical |
| U05 | PASS | presentedFactIds only attested |
| U06 | PASS | missing required blocks |
| U07 | PASS | mission facts conditional in helper test |
| U08 | PASS | facts attested = displayed |
| U09 | PASS | expectedVersion bound |
| U10 | PASS | snapshot id change |
| U11 | PASS | snapshot version change |
| U12 | PASS | snapshot fp change |
| U13 | PASS | project change closes exam |
| U14 | PASS | Confirm gated / no inspect |
| U15 | PASS | Execute gated / Trajectory refuse |
| U16 | PASS | PREPARE no auto-inspect |
| U17 | PASS | recovery/execute no auto-inspect (closure U17 rewritten) |
| U18 | PASS | confirm after sufficient (historical) |
| U19 | PASS | closure U19 no auto-launch |
| U20 | PASS | HD-bound non-regression suites |
| U21 | PASS | G-D4 empty refs suite |
| U22 | PASS | no artificial HD/Attempt in inspect paths |

### Matrice CTX
| ID | Statut |
|---|---|
| CTX01 | PASS — projectId observable + cycle ids |
| CTX03 | PASS — concurrent resolves |
| CTX04/08 | PASS — tab nav sans mutation lifecycle |
| CTX07 | PASS — remount recovery after fail |
| CTX05/02/06 | PASS (préexistants) |

### E5 historique
p5.s03.durableExecutionActionContinuity E5: premier clic = panel sans write; Attester = inspect avec facts. Conservé / compatible panel partagé (mêmes testids).

### TypeScript / Lint
- Pass04 files: lint 0 errors (warnings Trajectory préexistants)
- tsc: seules erreurs restantes préexistantes `p6.o1.executionWorkPresentation.d0.test.ts` (M-HD / Delivery couche) — qualifiées hors Pass04

## Fake/Real
- Mode: DETERMINISTIC / isolated Product tests
- DETERMINISTIC UNIFIED INSPECTION CONTRACT PROVEN sur scénarios exercés
- Hors périmètre: REAL EXECUTION, E2E REAL, P6 PASS, Runtime v3 ADOPTED
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## Figma / Runtime
- Session Figma créée; frames P3 150:532/150:29 consultables; 412–414 CANDIDATE
- Runtime authentifié: non prouvé ce cycle (login session)
- VISUAL NOT PROVEN

## HQA / REAL / Product git
- HQA préservée (aucune écriture)
- Aucune exécution REAL
- Aucune HumanDecision / Attempt artificiels
- Aucun commit/push/PR Product

## Réserves
1. VISUAL NOT PROVEN — runtime login-blocked
2. Trajectory openExam exige continuity active matching — fail-closed si continuity none (tests mis à jour)
3. executeAsPilot conserve Confirm+Authorize couplés **après** inspection suffisante (historique; pas de nouvelle confirmation auto)
4. tsc residual p6.o1.executionWorkPresentation (préexistant M-HD)
5. Frames Figma 412/413/414 non promues

## Dette / Exit
- Dette divergence parcours: FERMÉE déterministe
- Exit: unification prouvée sur surfaces actives
- Capacité suivante: requalification Human QA après revue ChatGPT + GO Morris distinct

## Gates
- No OA domain change
- No Product commit
- No HQA / REAL
- Review Pack FULL + handoff L3

## Verdict
**UNIFIED INSPECTION CONTRACT COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — READY FOR CHATGPT REVIEW**

## Instruction ChatGPT
Lire le Review Handoff distant au SHA publié. Vérifier diffs complets, trois surfaces, absence inspection implicite, snapshot identity/version/fp, contrôles OA, tests exercés, parcours historiques, CTX, absence effets interdits, réserves et gates Morris.

---
## Diffs complets — fichiers modifiés Pass04
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx`
```diff
--- /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/pass04-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_ExecutionSurface.tsx	2026-10-17 14:40:38
+++ /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx	2026-10-17 14:41:41
@@ -17,7 +17,12 @@
 } from "@/features/project-assistant/w2/reconcileContinuePolicy";
 import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
 import {
-  buildInspectionFactRowsFromDisclosure,
+  buildInspectionExamView,
+  sameInspectionExamSnapshot,
+  type InspectionExamSnapshot,
+} from "./contractInspectionExam";
+import { ContractInspectionExamPanel } from "./ContractInspectionExamPanel";
+import {
   presentPilotExecution,
   type PilotExecutionPresentation,
 } from "./pilotExecutionPresentation";
@@ -59,6 +64,9 @@
   const [expandedWork, setExpandedWork] = useState(false);
   /** I07 — opening the panel never writes an attestation. */
   const [inspectionPanelOpen, setInspectionPanelOpen] = useState(false);
+  /** Pass04 — exam identity frozen at open; invalidate on drift. */
+  const [inspectionExamSnapshot, setInspectionExamSnapshot] =
+    useState<InspectionExamSnapshot | null>(null);
   const [loading, setLoading] = useState(true);
   const [busy, setBusy] = useState(false);
   const [error, setError] = useState<string | null>(null);
@@ -297,25 +305,42 @@
       !preExec.contract.inspectionDisclosure
     ) {
       return null;
-    }
-    const required = preExec.requiredInspectedFacts;
-    if (required == null) {
-      return {
-        rows: [] as const,
-        missingRequired: ["INSPECTION_DISCLOSURE_INCOMPLETE"] as const,
-        presentedFactIds: [] as const,
-        disclosureIncomplete: true as const,
-      };
     }
+    return buildInspectionExamView({
+      disclosure: preExec.contract.inspectionDisclosure,
+      requiredInspectedFacts: preExec.requiredInspectedFacts,
+    });
+  }, [preExec]);
+
+  const liveExamSnapshot = useMemo((): InspectionExamSnapshot | null => {
+    const target = resolveActivePreContract();
+    if (!target) return null;
     return {
-      ...buildInspectionFactRowsFromDisclosure({
-        disclosure: preExec.contract.inspectionDisclosure,
-        requiredInspectedFacts: required,
-      }),
-      disclosureIncomplete: false as const,
+      projectId,
+      executionContractId: target.executionContractId,
+      version: target.expectedVersion,
+      semanticFingerprint: target.semanticFingerprint,
     };
-  }, [preExec]);
+  }, [projectId, resolveActivePreContract]);

+  /** Pass04 — close exam when project/contract/version/fingerprint drifts. */
+  useEffect(() => {
+    if (!inspectionPanelOpen || !inspectionExamSnapshot) return;
+    if (!sameInspectionExamSnapshot(inspectionExamSnapshot, liveExamSnapshot)) {
+      setInspectionPanelOpen(false);
+      setInspectionExamSnapshot(null);
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
+      );
+    }
+  }, [inspectionPanelOpen, inspectionExamSnapshot, liveExamSnapshot]);
+
+  /** Inter-project navigation always invalidates an open exam. */
+  useEffect(() => {
+    setInspectionPanelOpen(false);
+    setInspectionExamSnapshot(null);
+  }, [projectId]);
+
   /** I07 — open detail only; no Product write. */
   const handleOpenInspection = useCallback(() => {
     const target = resolveActivePreContract();
@@ -332,8 +357,14 @@
       return;
     }
     setError(null);
+    setInspectionExamSnapshot({
+      projectId,
+      executionContractId: target.executionContractId,
+      version: target.expectedVersion,
+      semanticFingerprint: target.semanticFingerprint,
+    });
     setInspectionPanelOpen(true);
-  }, [resolveActivePreContract, inspectionView]);
+  }, [projectId, resolveActivePreContract, inspectionView]);

   /**
    * I06/I08 — explicit attestation after facts are presented.
@@ -348,9 +379,24 @@
       );
       return;
     }
-    if (!inspectionPanelOpen) {
+    if (!inspectionPanelOpen || !inspectionExamSnapshot) {
       setError(
         "Les faits contractuels doivent être affichés avant attestation.",
+      );
+      return;
+    }
+    if (
+      !sameInspectionExamSnapshot(inspectionExamSnapshot, {
+        projectId,
+        executionContractId: target.executionContractId,
+        version: target.expectedVersion,
+        semanticFingerprint: target.semanticFingerprint,
+      })
+    ) {
+      setInspectionPanelOpen(false);
+      setInspectionExamSnapshot(null);
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
       );
       return;
     }
@@ -391,6 +437,7 @@
         );
       } else {
         setInspectionPanelOpen(false);
+        setInspectionExamSnapshot(null);
       }
       await refreshExecutionContinuity();
       onDurableFactsChanged?.();
@@ -400,6 +447,7 @@
   }, [
     projectId,
     inspectionPanelOpen,
+    inspectionExamSnapshot,
     inspectionView,
     resolveActivePreContract,
     refreshExecutionContinuity,
@@ -704,59 +752,29 @@
         </section>
       ) : null}

-      {inspectionPanelOpen && inspectionView && !inspectionView.disclosureIncomplete ? (
+      {inspectionPanelOpen &&
+      inspectionExamSnapshot &&
+      inspectionView &&
+      !inspectionView.disclosureIncomplete ? (
         <section
           className={styles.section}
-          aria-labelledby="execution-inspection-title"
-          data-testid="project-execution-inspection-panel"
+          aria-label="Examen contractuel"
         >
-          <h3 className={styles.sectionTitle} id="execution-inspection-title">
-            Faits contractuels à examiner
-          </h3>
-          <p className={styles.empty}>
-            Ces faits proviennent de la disclosure durable. L’ouverture de ce
-            panneau n’enregistre aucune attestation.
-          </p>
-          {inspectionView.missingRequired.length > 0 ? (
-            <p
-              className={styles.attention}
-              data-testid="project-execution-inspection-missing"
-              role="alert"
-            >
-              Faits obligatoires non restituables :{" "}
-              {inspectionView.missingRequired.join(", ")}
-            </p>
-          ) : null}
-          <ul className={styles.inspectionList}>
-            {inspectionView.rows.map((row) => (
-              <li
-                key={row.factId}
-                className={styles.inspectionItem}
-                data-testid={`project-execution-inspection-fact-${row.factId}`}
-                data-fact-id={row.factId}
-              >
-                <span className={styles.inspectionLabel}>{row.label}</span>
-                <span className={styles.inspectionValue}>{row.value}</span>
-              </li>
-            ))}
-          </ul>
-          <button
-            type="button"
-            className={styles.primaryButton}
-            data-testid="project-execution-attest"
-            disabled={
-              busy ||
-              inspectionView.missingRequired.length > 0 ||
-              inspectionView.presentedFactIds.length === 0
-            }
-            aria-label="Attester l’examen des faits affichés"
-            title="Atteste uniquement les faits affichés ci-dessus pour cette version."
-            onClick={() => {
+          <ContractInspectionExamPanel
+            testIdPrefix="project-execution"
+            snapshot={inspectionExamSnapshot}
+            rows={inspectionView.rows}
+            missingRequired={inspectionView.missingRequired}
+            presentedFactIds={inspectionView.presentedFactIds}
+            busy={busy}
+            onAttest={() => {
               void handleAttestInspection();
             }}
-          >
-            {busy ? "Attestation…" : "Attester l’examen"}
-          </button>
+            onDismiss={() => {
+              setInspectionPanelOpen(false);
+              setInspectionExamSnapshot(null);
+            }}
+          />
         </section>
       ) : null}


```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx`
```diff
--- /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/pass04-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_GovernedConfirmationCard.tsx	2026-10-17 14:40:38
+++ /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx	2026-10-17 14:41:49
@@ -4,37 +4,55 @@
  * P3 §18 — Governed Confirmation presentation (INLINE in Conversation).
  * Pure projection: applicability / inspection / confirm come from W2 continuity.
  * Does NOT decide that confirmation is required — Studio/domain already did.
+ *
+ * Pass04 — Inspecter opens an exam panel (no write); Attester persists facts.
  */

+import { useEffect, useMemo, useState } from "react";
 import type {
   ContractInspectionStateDto,
   CurrentGovernedExecutionContinuityContractDto,
 } from "@/features/project-assistant/w2/types";
 import {
+  buildInspectionExamView,
+  sameInspectionExamSnapshot,
+  type InspectionExamSnapshot,
+} from "./contractInspectionExam";
+import { ContractInspectionExamPanel } from "./ContractInspectionExamPanel";
+import {
   isTechnicalProductRef,
   presentPilotContract,
 } from "./pilotContractPresentation";
 import styles from "./GovernedConfirmationCard.module.css";

 export type GovernedConfirmationCardProps = {
+  readonly projectId: string;
   readonly contract: CurrentGovernedExecutionContinuityContractDto;
   readonly inspection: ContractInspectionStateDto;
+  readonly requiredInspectedFacts: readonly string[] | null;
   readonly busy: boolean;
   readonly error: string | null;
   readonly onConfirm: () => void;
-  readonly onInspect: () => void;
+  /** Explicit attestation with facts actually displayed — never called on open. */
+  readonly onAttestInspection: (inspectedFacts: readonly string[]) => void;
   readonly onCancel?: () => void;
 };

 export function GovernedConfirmationCard({
+  projectId,
   contract,
   inspection,
+  requiredInspectedFacts,
   busy,
   error,
   onConfirm,
-  onInspect,
+  onAttestInspection,
   onCancel,
 }: GovernedConfirmationCardProps) {
+  const [examOpen, setExamOpen] = useState(false);
+  const [examSnapshot, setExamSnapshot] =
+    useState<InspectionExamSnapshot | null>(null);
+
   const pilot = presentPilotContract({
     action: contract.action,
     target: contract.target,
@@ -51,6 +69,43 @@
     contract.status === "confirmation_required" ||
     contract.effectConfirmationRequired === true;

+  const liveSnapshot = useMemo(
+    (): InspectionExamSnapshot => ({
+      projectId,
+      executionContractId: contract.executionContractId,
+      version: contract.version,
+      semanticFingerprint: contract.semanticFingerprint ?? "",
+    }),
+    [
+      projectId,
+      contract.executionContractId,
+      contract.version,
+      contract.semanticFingerprint,
+    ],
+  );
+
+  const examView = useMemo(
+    () =>
+      buildInspectionExamView({
+        disclosure: contract.inspectionDisclosure,
+        requiredInspectedFacts,
+      }),
+    [contract.inspectionDisclosure, requiredInspectedFacts],
+  );
+
+  useEffect(() => {
+    if (!examOpen || !examSnapshot) return;
+    if (!sameInspectionExamSnapshot(examSnapshot, liveSnapshot)) {
+      setExamOpen(false);
+      setExamSnapshot(null);
+    }
+  }, [examOpen, examSnapshot, liveSnapshot]);
+
+  useEffect(() => {
+    setExamOpen(false);
+    setExamSnapshot(null);
+  }, [projectId]);
+
   if (!confirmationRequired) {
     return null;
   }
@@ -64,6 +119,26 @@
   const impactText = pilot.impactLine || pilot.nowTitle;
   const reversibilityText = pilot.reversibilityLabel;

+  const handleOpenExam = () => {
+    if (examView.disclosureIncomplete) return;
+    setExamSnapshot(liveSnapshot);
+    setExamOpen(true);
+  };
+
+  const handleAttest = () => {
+    if (!examOpen || !examSnapshot) return;
+    if (!sameInspectionExamSnapshot(examSnapshot, liveSnapshot)) {
+      setExamOpen(false);
+      setExamSnapshot(null);
+      return;
+    }
+    if (examView.disclosureIncomplete || examView.missingRequired.length > 0) {
+      return;
+    }
+    if (examView.presentedFactIds.length === 0) return;
+    onAttestInspection(examView.presentedFactIds);
+  };
+
   return (
     <section
       className={styles.card}
@@ -110,16 +185,41 @@
         </p>
       ) : null}

+      {examOpen && examSnapshot && !examView.disclosureIncomplete ? (
+        <ContractInspectionExamPanel
+          testIdPrefix="governed-confirmation"
+          snapshot={examSnapshot}
+          rows={examView.rows}
+          missingRequired={examView.missingRequired}
+          presentedFactIds={examView.presentedFactIds}
+          busy={busy}
+          onAttest={handleAttest}
+          onDismiss={() => {
+            setExamOpen(false);
+            setExamSnapshot(null);
+          }}
+        />
+      ) : null}
+
       <div className={styles.actions}>
         {!inspectionOk ? (
           <button
             type="button"
             className={styles.primary}
             data-testid="governed-confirmation-inspect"
-            disabled={busy}
-            onClick={onInspect}
+            disabled={busy || examView.disclosureIncomplete}
+            onClick={handleOpenExam}
+            title={
+              examView.disclosureIncomplete
+                ? "Disclosure d’inspection incomplète — examen impossible."
+                : "Ouvre le détail inspectable — n’enregistre aucune attestation."
+            }
           >
-            {busy ? "Inspection…" : "Inspecter pour confirmer"}
+            {examOpen
+              ? "Réexaminer le contrat"
+              : busy
+                ? "Inspection…"
+                : "Examiner le contrat"}
           </button>
         ) : (
           <button

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
```diff
--- /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/pass04-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_ConversationSurface.tsx	2026-10-17 14:40:38
+++ /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-10-17 14:42:06
@@ -224,6 +224,7 @@
     string | null
   >(null);
   const {
+    projectId,
     listRef,
     messages,
     draft,
@@ -246,7 +247,7 @@
     governedMomentError,
     decideGovernedDirection,
     revealGovernedDecisionAlternate,
-    inspectGovernedContract,
+    attestGovernedInspection,
     confirmGovernedContract,
     genericMissionSubject,
     genericMissionUiState,
@@ -1025,15 +1026,19 @@
           data-testid="governed-confirmation-slot"
         >
           <GovernedConfirmationCard
+            projectId={projectId}
             contract={governedExecutionContinuity.contract}
             inspection={governedExecutionContinuity.inspection}
+            requiredInspectedFacts={
+              governedExecutionContinuity.requiredInspectedFacts
+            }
             busy={governedMomentBusy}
             error={governedMomentError}
             onConfirm={() => {
               void confirmGovernedContract();
             }}
-            onInspect={() => {
-              void inspectGovernedContract();
+            onAttestInspection={(facts) => {
+              void attestGovernedInspection(facts);
             }}
             onCancel={() => {
               const input = document.querySelector(

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
```diff
--- /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/pass04-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_hooks_useProductConversation.ts	2026-10-17 14:40:38
+++ /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts	2026-10-17 14:42:03
@@ -748,7 +748,13 @@
     });
   }

-  async function inspectGovernedContract() {
+  /**
+   * Pass04 — explicit attestation after the confirmation card presented facts.
+   * Opening the exam panel must never call this. Confirm never calls this.
+   */
+  async function attestGovernedInspection(
+    inspectedFacts: readonly string[],
+  ) {
     if (governedMomentBusy) return;
     const continuity = governedExecutionContinuity;
     if (
@@ -759,6 +765,12 @@
     ) {
       return;
     }
+    if (!inspectedFacts || inspectedFacts.length === 0) {
+      setGovernedMomentError(
+        "Aucun fait contractuel présenté — attestation refusée.",
+      );
+      return;
+    }
     setGovernedMomentBusy(true);
     setGovernedMomentError(null);
     try {
@@ -769,11 +781,17 @@
         projectId,
         executionContractId: continuity.contract.executionContractId,
         expectedVersion: continuity.contract.version,
+        inspectedFacts: [...inspectedFacts],
       });
       if (!result.ok) {
         setGovernedMomentError(result.message);
         return;
       }
+      if (!result.inspectionSufficient) {
+        setGovernedMomentError(
+          "Inspection insuffisante — faits attestés incomplets pour cette version.",
+        );
+      }
       await refreshGovernedMoments();
     } catch {
       setGovernedMomentError("Inspection impossible.");
@@ -1558,6 +1576,7 @@
   }

   return {
+    projectId,
     listRef,
     messages,
     draft,
@@ -1582,7 +1601,7 @@
     governedMomentError,
     decideGovernedDirection,
     revealGovernedDecisionAlternate,
-    inspectGovernedContract,
+    attestGovernedInspection,
     confirmGovernedContract,
     refreshGovernedMoments,
     genericMissionSubject,

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
```diff
--- /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/pass04-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_TrajectorySurface.tsx	2026-10-17 14:40:38
+++ /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx	2026-10-17 14:44:31
@@ -13,6 +13,7 @@
   useCallback,
   useEffect,
   useLayoutEffect,
+  useMemo,
   useRef,
   useState,
 } from "react";
@@ -92,11 +93,18 @@
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
 import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
+import {
+  buildInspectionExamView,
+  sameInspectionExamSnapshot,
+  type InspectionExamSnapshot,
+} from "./contractInspectionExam";
+import { ContractInspectionExamPanel } from "./ContractInspectionExamPanel";
 import {
   presentPilotContract,
   type PilotContractPresentation,
 } from "./pilotContractPresentation";
 import styles from "./TrajectorySurface.module.css";
+import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";

 /**
  * Presentation-only labels for ExecutionContractStatus.
@@ -350,6 +358,15 @@
   const [contract, setContract] = useState<PreparedContract | null>(null);
   const [inspection, setInspection] =
     useState<ContractInspectionStateDto | null>(null);
+  /** Pass04 — exam open without write; attestation is a separate gesture. */
+  const [inspectionExamOpen, setInspectionExamOpen] = useState(false);
+  const [inspectionExamSnapshot, setInspectionExamSnapshot] =
+    useState<InspectionExamSnapshot | null>(null);
+  const [examDisclosure, setExamDisclosure] =
+    useState<ExecutionContractInspectionDisclosure | null>(null);
+  const [examRequiredFacts, setExamRequiredFacts] = useState<
+    readonly string[] | null
+  >(null);
   const [authorization, setAuthorization] =
     useState<ExecutionAuthorizationOutcomeDto | null>(null);
   const [amendmentDraft, setAmendmentDraft] = useState("");
@@ -988,29 +1005,170 @@
     rehydrateRecoveryOwnedDecisionContinuity,
   ]);

-  /** FR-04 / CR-P6-02 — Pilote inspection of the exact contract version presented. */
-  const inspectPreparedContractId = useCallback(
-    async (executionContractId: string, expectedVersion?: number) => {
-      const result = await w2InspectExecutionContractAction({
-        projectId,
-        executionContractId,
-        expectedVersion,
+  const closeInspectionExam = useCallback(() => {
+    setInspectionExamOpen(false);
+    setInspectionExamSnapshot(null);
+    setExamDisclosure(null);
+    setExamRequiredFacts(null);
+  }, []);
+
+  const trajectoryExamView = useMemo(
+    () =>
+      buildInspectionExamView({
+        disclosure: examDisclosure,
+        requiredInspectedFacts: examRequiredFacts,
+      }),
+    [examDisclosure, examRequiredFacts],
+  );
+
+  /**
+   * Pass04 — open exam (READ-ONLY). Loads canonical required facts from W2
+   * continuity. Never records an attestation.
+   */
+  const openInspectionExam = useCallback(async () => {
+    if (continuityMutationBlocked) return;
+    if (!contract) return;
+    setBusy("inspection");
+    setError(null);
+    const continuity = await w2ReadCurrentGovernedExecutionContinuityAction({
+      projectId,
+    });
+    setBusy(null);
+    if (!continuity || typeof continuity !== "object" || !continuity.ok) {
+      setError(
+        "Continuité pré-exécution indisponible — examen refusé.",
+      );
+      return;
+    }
+    if (continuity.kind !== "active") {
+      setError(
+        "Aucun contrat courant inspectable — examen refusé.",
+      );
+      return;
+    }
+    if (
+      continuity.contract.executionContractId !== contract.executionContractId
+    ) {
+      setError(
+        "Identité contractuelle incohérente — examen refusé.",
+      );
+      return;
+    }
+    if (
+      continuity.requiredInspectedFacts == null ||
+      !continuity.contract.inspectionDisclosure
+    ) {
+      setError(
+        "Disclosure d’inspection incomplète — examen impossible.",
+      );
+      return;
+    }
+    const snapshot: InspectionExamSnapshot = {
+      projectId,
+      executionContractId: continuity.contract.executionContractId,
+      version: continuity.contract.version,
+      semanticFingerprint: continuity.contract.semanticFingerprint ?? "",
+    };
+    setExamDisclosure(continuity.contract.inspectionDisclosure);
+    setExamRequiredFacts(continuity.requiredInspectedFacts);
+    setInspectionExamSnapshot(snapshot);
+    setInspectionExamOpen(true);
+    // Align local presentation to durable identity without writing attestation.
+    if (
+      contract.version !== continuity.contract.version ||
+      contract.semanticFingerprint !== continuity.contract.semanticFingerprint
+    ) {
+      setContract({
+        ...contract,
+        version: continuity.contract.version,
+        status: continuity.contract.status,
+        semanticFingerprint: continuity.contract.semanticFingerprint,
+        inspectionDisclosure: toInspectionDisclosureView(
+          continuity.contract.inspectionDisclosure,
+        ),
       });
-      if (!result || typeof result !== "object") {
-        return null;
-      }
-      if (!result.ok) {
-        setError(result.message);
-        return null;
+    }
+  }, [continuityMutationBlocked, contract, projectId]);
+
+  /**
+   * Pass04 — explicit attestation of facts currently displayed in the exam.
+   */
+  const attestInspectionExam = useCallback(async () => {
+    if (continuityMutationBlocked) return;
+    if (!contract || !inspectionExamOpen || !inspectionExamSnapshot) {
+      setError(
+        "Les faits contractuels doivent être affichés avant attestation.",
+      );
+      return;
+    }
+    if (trajectoryExamView.disclosureIncomplete) {
+      setError(
+        "Disclosure d’inspection incomplète — attestation refusée.",
+      );
+      return;
+    }
+    if (trajectoryExamView.missingRequired.length > 0) {
+      setError(
+        `Faits obligatoires non restituables (${trajectoryExamView.missingRequired.join(", ")}) — attestation refusée.`,
+      );
+      return;
+    }
+    if (trajectoryExamView.presentedFactIds.length === 0) {
+      setError("Aucun fait contractuel présenté — attestation refusée.");
+      return;
+    }
+    const live: InspectionExamSnapshot = {
+      projectId,
+      executionContractId: contract.executionContractId,
+      version: contract.version,
+      semanticFingerprint: contract.semanticFingerprint ?? "",
+    };
+    if (!sameInspectionExamSnapshot(inspectionExamSnapshot, live)) {
+      closeInspectionExam();
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
+      );
+      return;
+    }
+    setBusy("inspection");
+    setError(null);
+    const result = await w2InspectExecutionContractAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      expectedVersion: contract.version,
+      inspectedFacts: [...trajectoryExamView.presentedFactIds],
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const { ok: _ok, ...state } = result;
+    setInspection(state);
+    setAuthorization(null);
+    if (state.inspectionSufficient) {
+      closeInspectionExam();
+      if (amendmentNotice) {
+        setAmendmentNotice({
+          ...amendmentNotice,
+          statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
+        });
       }
-      const { ok: _ok, ...state } = result;
-      setInspection(state);
-      setAuthorization(null);
-      // Return DTO so callers (Exécuter) bind version/fp without waiting on React state.
-      return state.inspectionSufficient === true ? state : null;
-    },
-    [projectId],
-  );
+    } else {
+      setError(
+        "Inspection insuffisante — faits attestés incomplets pour cette version.",
+      );
+    }
+  }, [
+    continuityMutationBlocked,
+    contract,
+    inspectionExamOpen,
+    inspectionExamSnapshot,
+    trajectoryExamView,
+    projectId,
+    closeInspectionExam,
+    amendmentNotice,
+  ]);

   const decide = useCallback(
     async (selectedOptionRef: string) => {
@@ -1116,7 +1274,7 @@
         setAttemptPhase(null);
         setAttemptStatusLabel(null);
         onDurableFactsChanged?.();
-        await inspectPreparedContractId(prepared.executionContractId);
+        closeInspectionExam();
         return;
       }

@@ -1196,7 +1354,7 @@
         setAttemptPhase(null);
         setAttemptStatusLabel(null);
         onDurableFactsChanged?.();
-        await inspectPreparedContractId(prepared.executionContractId);
+        closeInspectionExam();
       }
     },
     [
@@ -1204,7 +1362,7 @@
       optionSet,
       projectId,
       onDurableFactsChanged,
-      inspectPreparedContractId,
+      closeInspectionExam,
     ],
   );

@@ -1304,14 +1462,14 @@
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
-    // FR-04 — auto-inspect after prepare; never auto-execute.
-    await inspectPreparedContractId(prepared.executionContractId);
+    // Pass04 — PREPARE never records inspection; Pilot must examine explicitly.
+    closeInspectionExam();
   }, [
     continuityMutationBlocked,
     decision,
     projectId,
     onDurableFactsChanged,
-    inspectPreparedContractId,
+    closeInspectionExam,
   ]);

   /**
@@ -1358,14 +1516,15 @@
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
-    await inspectPreparedContractId(prepared.executionContractId);
+    // Pass04 — recovery PREPARE never records inspection.
+    closeInspectionExam();
   }, [
     continuityMutationBlocked,
     recoveryDecisionId,
     projectId,
     showRecoveryDocsWritePrepare,
     onDurableFactsChanged,
-    inspectPreparedContractId,
+    closeInspectionExam,
   ]);

   /**
@@ -1419,14 +1578,15 @@
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
-    await inspectPreparedContractId(prepared.executionContractId);
+    // Pass04 — proposal PREPARE never records inspection.
+    closeInspectionExam();
   }, [
     continuityMutationBlocked,
     decision,
     decisionDefersExecution,
     projectId,
     onDurableFactsChanged,
-    inspectPreparedContractId,
+    closeInspectionExam,
   ]);

   const rematerializeLegacyDocsWriteContract = useCallback(async () => {
@@ -1563,30 +1723,44 @@
     onDurableFactsChanged,
   ]);

+  /** Pass04 — Inspecter opens exam only; attestation is a separate CTA. */
   const inspect = useCallback(async () => {
-    if (continuityMutationBlocked) return;
-    if (!contract) return;
-    setBusy("inspection");
-    setError(null);
-    const result = await w2InspectExecutionContractAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-    });
-    setBusy(null);
-    if (!result.ok) {
-      setError(result.message);
+    await openInspectionExam();
+  }, [openInspectionExam]);
+
+  /** Pass04 — invalidate open exam when contract identity/version/fp drifts. */
+  useEffect(() => {
+    if (!inspectionExamOpen || !inspectionExamSnapshot) return;
+    if (!contract) {
+      closeInspectionExam();
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
+      );
       return;
     }
-    const { ok: _ok, ...state } = result;
-    setInspection(state);
-    setAuthorization(null);
-    if (amendmentNotice && state.inspectionSufficient) {
-      setAmendmentNotice({
-        ...amendmentNotice,
-        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
-      });
+    const live: InspectionExamSnapshot = {
+      projectId,
+      executionContractId: contract.executionContractId,
+      version: contract.version,
+      semanticFingerprint: contract.semanticFingerprint ?? "",
+    };
+    if (!sameInspectionExamSnapshot(inspectionExamSnapshot, live)) {
+      closeInspectionExam();
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
+      );
     }
-  }, [continuityMutationBlocked, contract, projectId, amendmentNotice]);
+  }, [
+    inspectionExamOpen,
+    inspectionExamSnapshot,
+    contract,
+    projectId,
+    closeInspectionExam,
+  ]);
+
+  useEffect(() => {
+    closeInspectionExam();
+  }, [projectId, closeInspectionExam]);

   const amendContract = useCallback(async () => {
     if (continuityMutationBlocked) return;
@@ -1873,17 +2047,15 @@
     setBusy("execute");
     setError(null);

-    // Bind to the inspection DTO actually obtained — not stale React state after await.
-    let inspectionForBinding = inspection;
+    // Pass04 — Execute never creates an attestation. Refuse and open exam.
+    const inspectionForBinding = inspection;
     if (!inspectionForBinding?.inspectionSufficient) {
-      const inspected = await inspectPreparedContractId(
-        contract.executionContractId,
+      setBusy(null);
+      setError(
+        "Inspection suffisante requise avant exécution — examinez le contrat.",
       );
-      if (!inspected) {
-        setBusy(null);
-        return;
-      }
-      inspectionForBinding = inspected;
+      await openInspectionExam();
+      return;
     }

     let status = contract.status;
@@ -1949,7 +2121,7 @@
     contract,
     inspection,
     projectId,
-    inspectPreparedContractId,
+    openInspectionExam,
     onDurableFactsChanged,
     runServerReconcile,
   ]);
@@ -3319,9 +3491,28 @@
               data-testid="w2-inspect-contract"
               onClick={() => void inspect()}
               disabled={busy !== null || governedContinuationBlocked}
+              title="Ouvre le détail inspectable — n’enregistre aucune attestation."
             >
-              Inspecter le contrat
+              {inspectionExamOpen
+                ? "Réexaminer le contrat"
+                : "Inspecter le contrat"}
             </button>
+            {inspectionExamOpen &&
+            inspectionExamSnapshot &&
+            !trajectoryExamView.disclosureIncomplete ? (
+              <ContractInspectionExamPanel
+                testIdPrefix="w2-trajectory"
+                snapshot={inspectionExamSnapshot}
+                rows={trajectoryExamView.rows}
+                missingRequired={trajectoryExamView.missingRequired}
+                presentedFactIds={trajectoryExamView.presentedFactIds}
+                busy={busy === "inspection"}
+                onAttest={() => {
+                  void attestInspectionExam();
+                }}
+                onDismiss={closeInspectionExam}
+              />
+            ) : null}
             {contract.status === "confirmation_required" &&
             !wrongGenericReplaceableByRecoveryPrepare &&
             decisionWorkflowMode === "legacy_cta" ? (
@@ -3368,19 +3559,20 @@
             </button>
           </div>

-          {inspection ? (
-            <p
-              className={styles.inspection}
-              data-testid="w2-inspection-state"
-              role="status"
-            >
-              {inspection.statusLabel}
-              {inspection.reinspectionRequired
-                ? " — l'inspection précédente ne suffit plus"
-                : ""}
-              {" · inspecter n'autorise pas"}
-            </p>
-          ) : null}
+          <p
+            className={styles.inspection}
+            data-testid="w2-inspection-state"
+            role="status"
+          >
+            {inspection
+              ? `${inspection.statusLabel}${
+                  inspection.reinspectionRequired
+                    ? " — l'inspection précédente ne suffit plus"
+                    : ""
+                }`
+              : "NON INSPECTÉ"}
+            {" · inspecter n'autorise pas"}
+          </p>
         </section>
       ) : null}


```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/governedMomentsInline.ui.test.tsx`
(no baseline — full content)

```ts
/**
 * @vitest-environment jsdom
 *
 * S08-4D — P3 inline Governed Decision / Confirmation in Conversation.
 * Presentation + wiring to existing W2 actions; no parallel authority.
 */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import { GovernedDecisionCard } from "@/features/pre-m6-product-ui/surfaces/GovernedDecisionCard";
import { GovernedConfirmationCard } from "@/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { TrajectoryOptionSetDto } from "@/features/project-assistant/w2/types";

const OPTION_SET: TrajectoryOptionSetDto = {
  optionSetRef: "optset:gov-moment",
  cycleTypeId: "cycle:test",
  recommendedProfile: "A",
  decisionSubjectMode: "proposal",
  proposalId: "prop:gov",
  promotesProjectTrajectory: false,
  options: [
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      label: "Conversation principale + contexte progressif",
      intent: "Conserver la conversation comme surface principale.",
      impacts: [],
      reservations: [],
      steps: [],
    },
    {
      kind: "OPTION",
      optionRef: "opt:alternate",
      label: "Contexte persistant",
      intent: "Rendre le contexte plus persistant.",
      impacts: [],
      reservations: [],
      steps: [],
    },
  ],
  recommendation: {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale:
      "Deux directions sont possibles. La première conserve la conversation.",
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: null,
    ckcProvenance: null,
  },
  epistemicRefs: [],
  proposedTrajectory: null,
  phase: "OPTIONS_PROPOSED",
  autoDecisionPerformed: false,
  executionPerformed: false,
  ckcCognitionCompletedBeforeMutation: true,
};

function baseController(
  overrides: Partial<ProductConversationController> = {},
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "Mode démonstration",
    ephemeralNotice: "",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    decisionSubjectContinuity: { status: "pending" },
    governedExecutionContinuity: { status: "pending" },
    decisionAlternateIndex: -1,
    governedMomentBusy: false,
    governedMomentError: null,
    decideGovernedDirection: vi.fn(),
    revealGovernedDecisionAlternate: vi.fn(),
    projectId: "proj:gov-moment",
    attestGovernedInspection: vi.fn(),
    confirmGovernedContract: vi.fn(),
    refreshGovernedMoments: vi.fn(),
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    transcriptAvailability: "empty",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusTurnId: null,
    focusJournalExchanges: [],
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: null,
    qualificationFreshness: null,
    durableOutcomeFreshness: null,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    reservationResolutionProposal: null,
    clearReservationResolutionProposal: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

afterEach(() => {
  cleanup();
});

describe("GovernedDecisionCard presentation", () => {
  it("renders decision label and primary CTA without mutating on alternate reveal", () => {
    const onChoose = vi.fn();
    const onReveal = vi.fn();
    const onAlt = vi.fn();
    render(
      <GovernedDecisionCard
        optionSet={OPTION_SET}
        alternateIndex={-1}
        busy={false}
        error={null}
        onChooseRecommended={onChoose}
        onRevealAlternate={onReveal}
        onChooseAlternate={onAlt}
      />,
    );
    expect(screen.getByTestId("governed-decision-card")).toBeTruthy();
    expect(screen.getByTestId("governed-decision-title")).toHaveTextContent(
      /Choisir la direction/i,
    );
    fireEvent.click(screen.getByTestId("governed-decision-see-alternate"));
    expect(onReveal).toHaveBeenCalledTimes(1);
    expect(onChoose).not.toHaveBeenCalled();
    expect(onAlt).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("governed-decision-choose"));
    expect(onChoose).toHaveBeenCalledTimes(1);
  });
});

function stubDisclosure(
  overrides: Partial<{
    targetPath: string | null;
    targetRepositoryRef: string | null;
  }> = {},
) {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "Interface du projet",
    targetRepositoryRef:
      overrides.targetRepositoryRef === undefined
        ? "mcleland147/sfia-workspace"
        : overrides.targetRepositoryRef,
    targetPath:
      overrides.targetPath === undefined
        ? "projects/sfia-studio/.sandbox/demo.md"
        : overrides.targetPath,
    scopeIn: null,
    scopeOut: null,
    createOrModify: true,
    noDelete: true,
    objective: null,
    artifactType: null,
    artifactBrief: null,
    contentRequirements: null,
    validationExpectations: null,
    expectedOutputs: null,
    sourceGrounding: null,
    acceptanceCriteria: null,
    validationPlan: null,
    reportRequirements: null,
    evidenceRequirements: [] as string[],
    requiredAuthority: "N2",
    requiredCapabilities: [] as string[],
    constraints: [] as string[],
    stopConditions: [] as string[],
    reversibility: "reversible",
    contractVersion: 1,
    executionContractId: "xct:1",
    semanticFingerprint: "fp",
    disclosureComplete: true,
    incompletenessCode: null,
  };
}

describe("GovernedConfirmationCard presentation", () => {
  const contract = {
    executionContractId: "xct:1",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "Interface du projet",
    requiredAuthority: "N2",
    constraints: [] as string[],
    stopConditions: [] as string[],
    requiredCapabilities: [] as string[],
    reversibility: "reversible",
    semanticFingerprint: "fp",
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N2",
    inspectionDisclosure: stubDisclosure(),
  };

  it("renders scope / impact / reversibility and confirm CTA when inspected", () => {
    const onConfirm = vi.fn();
    render(
      <GovernedConfirmationCard
        projectId="proj:gov-moment"
        contract={contract}
        inspection={{
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "INSPECTÉ",
          inspectionSufficient: true,
          attestationRef: "att:1",
          attestedVersion: 1,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "inspected",
          grantsAuthority: false,
        }}
        requiredInspectedFacts={["action", "target"]}
        busy={false}
        error={null}
        onConfirm={onConfirm}
        onAttestInspection={vi.fn()}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-scope")).toBeTruthy();
    expect(screen.getByTestId("governed-confirmation-impact")).toBeTruthy();
    expect(
      screen.getByTestId("governed-confirmation-reversibility"),
    ).toHaveTextContent(/Réversible/i);
    fireEvent.click(screen.getByTestId("governed-confirmation-confirm"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("does not render when confirmation is not required", () => {
    const { container } = render(
      <GovernedConfirmationCard
        projectId="proj:gov-moment"
        contract={{ ...contract, status: "authorized", effectConfirmationRequired: false }}
        inspection={{
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "INSPECTÉ",
          inspectionSufficient: true,
          attestationRef: "att:1",
          attestedVersion: 1,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "inspected",
          grantsAuthority: false,
        }}
        requiredInspectedFacts={["action", "target"]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={vi.fn()}
      />,
    );
    expect(container.querySelector("[data-testid='governed-confirmation-card']")).toBeNull();
  });

  it("requires exam before confirm when inspection insufficient — open does not attest", () => {
    const onAttest = vi.fn();
    render(
      <GovernedConfirmationCard
        projectId="proj:gov-moment"
        contract={contract}
        inspection={{
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "NON INSPECTÉ",
          inspectionSufficient: false,
          attestationRef: null,
          attestedVersion: null,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "no_attestation",
          grantsAuthority: false,
        }}
        requiredInspectedFacts={[
          "action",
          "target",
          "scope",
          "requiredAuthority",
          "requiredCapabilities",
          "constraints",
          "stopConditions",
          "reversibility",
          "evidenceRequirements",
          "semanticFingerprint",
        ]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-inspect-needed")).toBeTruthy();
    expect(screen.queryByTestId("governed-confirmation-confirm")).toBeNull();
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(onAttest).not.toHaveBeenCalled();
    expect(screen.getByTestId("governed-confirmation-inspection-panel")).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-confirmation-attest"));
    expect(onAttest).toHaveBeenCalledTimes(1);
    expect(onAttest.mock.calls[0][0]).toEqual(
      expect.arrayContaining(["action", "target", "semanticFingerprint"]),
    );
  });
});

describe("ConversationSurface inline governed moments", () => {
  it("renders Decision card only for bound_awaiting_decision and wires decide", () => {
    const decideGovernedDirection = vi.fn();
    const reveal = vi.fn();
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: {
            ok: true,
            kind: "bound_awaiting_decision",
            optionSet: OPTION_SET,
          },
          decideGovernedDirection,
          revealGovernedDecisionAlternate: reveal,
        })}
      />,
    );
    expect(screen.getByTestId("governed-decision-card")).toBeTruthy();
    expect(screen.getByTestId("decision-subject-bound")).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-decision-choose"));
    expect(decideGovernedDirection).toHaveBeenCalledWith(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );
    fireEvent.click(screen.getByTestId("governed-decision-see-alternate"));
    expect(reveal).toHaveBeenCalled();
    expect(decideGovernedDirection).toHaveBeenCalledTimes(1);
  });

  it("does not render Decision from recommendation-only / none subject", () => {
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: { ok: true, kind: "none" },
        })}
      />,
    );
    expect(screen.queryByTestId("governed-decision-card")).toBeNull();
  });

  it("renders Confirmation for confirmation_required continuity", () => {
    const confirmGovernedContract = vi.fn();
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: { ok: true, kind: "none" },
          governedExecutionContinuity: {
            ok: true,
            kind: "active",
            decisionRef: "dec:1",
            contract: {
              executionContractId: "xct:1",
              version: 1,
              status: "confirmation_required",
              action: "cursor.docs_write.apply",
              target: "workspace.isolated.docs_write",
              scope: "Interface du projet",
              requiredAuthority: "N2",
              constraints: [],
              stopConditions: [],
              requiredCapabilities: [],
              reversibility: "reversible",
              semanticFingerprint: "fp",
              effectConfirmationRequired: true,
              inspectionDisclosure: stubDisclosure({
                targetPath: null,
                targetRepositoryRef: null,
              }),
            },
            inspection: {
              executionContractId: "xct:1",
              contractVersion: 1,
              semanticFingerprint: "fp",
              statusLabel: "INSPECTÉ",
              inspectionSufficient: true,
              attestationRef: "att:1",
              attestedVersion: 1,
              staleAttestationRef: null,
              reinspectionRequired: false,
              reason: "inspected",
              grantsAuthority: false,
            },
            requiredInspectedFacts: [
              "action",
              "target",
              "scope",
              "requiredAuthority",
              "requiredCapabilities",
              "constraints",
              "stopConditions",
              "reversibility",
              "evidenceRequirements",
              "semanticFingerprint",
            ],
          },
          confirmGovernedContract,
        })}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-card")).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-confirmation-confirm"));
    expect(confirmGovernedContract).toHaveBeenCalled();
  });

  it("does not enable legacy authority path by default", () => {
    render(<ConversationSurface controller={baseController()} />);
    expect(screen.queryByTestId("project-assistant-proposal")).toBeNull();
    expect(screen.queryByTestId("f2-decide-GO")).toBeNull();
  });
});

```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.closureRegularization.trajectorySurfaceConsent.ui.test.tsx`
(no baseline — full content)

```ts
/**
 * P6 CLOSURE REGULARIZATION — TrajectorySurface Pilot gesture DET proof.
 *
 * Mounts the real TrajectorySurface, fires inspect + Exécuter (or authorize),
 * and asserts Product actions receive attested version/fingerprint.
 *
 * Fake only at action boundary (mocked server actions). ZERO Attempt REAL.
 *
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  inspectMock,
  authorizeMock,
  confirmMock,
  readGovernedExecutionContinuityMock,
  readActiveDecisionSubjectMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  reconcileMock,
} = vi.hoisted(() => ({
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  confirmMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  reconcileMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:p6-ui",
      activeCycleInstanceId: "cyc:p6-ui",
      executionContractId: "xct:gen-prep:ui01",
      executionContractVersion: 1,
      executionContractStatus: "confirmation_required",
      attemptId: null,
      attemptStatus: null,
      stage: "PRE_EXECUTION",
      productOutcome: null,
      evidenceId: null,
      reviewBundleId: null,
      claimEvaluationId: null,
      claimEvaluationStatus: null,
      postEvidencePresent: false,
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi.fn().mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cyc:p6-ui",
    hasCurrentNextCycleRecommendation: false,
  }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn(),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const CONTRACT_ID = "xct:gen-prep:ui01";
const ATTESTED_FP = "fp:attested-ui-01";
const CURRENT_FP = "fp:current-ui-01";

/** Canonical required facts presentable from baseContract disclosure. */
const REQUIRED_INSPECTED_FACTS = [
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "evidenceRequirements",
  "semanticFingerprint",
  "inputs.targetRepositoryRef",
  "inputs.targetPath",
] as const;

async function openExamAndAttest() {
  fireEvent.click(await screen.findByTestId("w2-inspect-contract"));
  expect(
    await screen.findByTestId("w2-trajectory-inspection-panel"),
  ).toBeVisible();
  expect(inspectMock).not.toHaveBeenCalled();
  fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
  await waitFor(() => expect(inspectMock).toHaveBeenCalled());
}

function baseContract(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: CONTRACT_ID,
    version: 1,
    status: "confirmation_required",
    action: "product:workspace.generalist.apply",
    target: "product:project-workspace",
    scope: "Interface du projet — mission générique bornée",
    requiredAuthority: "N1",
    constraints: [
      "MATERIALITY:NON_STRUCTURAL",
      "EFFECT_CLASS:generate-temporary-artifact",
      "NO_CURSOR_REAL",
      "NO_ATTEMPT",
    ],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    requiredCapabilities: ["cap:product-temp-artifact"],
    reversibility: "reversible",
    semanticFingerprint: CURRENT_FP,
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N1",
    inspectionDisclosure: {
      action: "product:workspace.generalist.apply",
      technicalTarget: "product:project-workspace",
      scope: "Interface du projet — mission générique bornée",
      targetRepositoryRef: "acme/p6-ui",
      targetPath: "projects/demo/app/filter.ts",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: [],
      createOrModify: true,
      noDelete: true,
      objective: "Réorganiser les fichiers demo",
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: ["projects/demo/app/filter.ts"],
      evidenceRequirements: [],
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-temp-artifact"],
      constraints: ["MATERIALITY:NON_STRUCTURAL", "NO_CURSOR_REAL"],
      stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
      reversibility: "reversible",
      contractVersion: 1,
      executionContractId: CONTRACT_ID,
      semanticFingerprint: CURRENT_FP,
      disclosureComplete: true,
      incompletenessCode: null,
    },
    ...overrides,
  };
}

function inspectionDto(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: CONTRACT_ID,
    contractVersion: 1,
    semanticFingerprint: CURRENT_FP,
    attestedSemanticFingerprint: ATTESTED_FP,
    statusLabel: "INSPECTÉ" as const,
    inspectionSufficient: true,
    attestationRef: "att:ui-01",
    attestedVersion: 1,
    staleAttestationRef: null,
    reinspectionRequired: false,
    reason: "inspected" as const,
    grantsAuthority: false,
    ...overrides,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  inspectMock.mockReset();
  authorizeMock.mockReset();
  confirmMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();
  reconcileMock.mockReset();

  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  reconcileMock.mockResolvedValue({
    ok: true,
    projection: {
      stage: "PRE_EXECUTION",
      attemptId: null,
      attemptStatus: null,
    },
  });
});

describe("P6 Closure Regularization — TrajectorySurface consent UI", () => {
  it("U01–U12 — inspect then Exécuter binds attested version/fp; AUTHORIZED ≠ EXECUTED; 0 Attempt", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        attestedSemanticFingerprint: null,
        reason: "no_attestation",
      }),
      requiredInspectedFacts: [...REQUIRED_INSPECTED_FACTS],
    });

    inspectMock.mockResolvedValue({
      ok: true,
      ...inspectionDto(),
    });
    confirmMock.mockResolvedValue({ ok: true });
    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: CONTRACT_ID,
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ",
      reasonCode: "authorized",
      reasonText: "Autorisation vérifiée.",
      nextAction: "Lancer uniquement si éligible.",
      inspection: inspectionDto(),
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cfm:ui",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: ["agent:local"],
        sufficientAgentRef: "agent:local",
        reason: "ok",
        statusLabel: "EXÉCUTEUR SUFFISANT",
      },
      authorityReceiptRef: "avr:ui",
      decisionRefs: [],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionEligible: false,
      executionEligibilityReasonCode: "NO_ATTEMPT_IN_CYCLE",
      executionPerformed: false,
      attemptCreated: false,
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-inspect-contract")).toBeEnabled();

    await openExamAndAttest();
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:p6-ui",
      executionContractId: CONTRACT_ID,
      inspectedFacts: expect.arrayContaining(["action", "semanticFingerprint"]),
    });

    expect(await screen.findByTestId("w2-pilot-execute")).toBeVisible();
    expect(screen.getByTestId("w2-pilot-execute")).toHaveTextContent("Exécuter");
    expect(screen.getByTestId("w2-pilot-execute-hint").textContent).toMatch(
      /Confirmation et autorisation/,
    );

    fireEvent.click(screen.getByTestId("w2-pilot-execute"));

    await waitFor(() => expect(confirmMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(authorizeMock).toHaveBeenCalledTimes(1));

    expect(authorizeMock.mock.calls[0]![0]).toEqual({
      projectId: "prj:p6-ui",
      executionContractId: CONTRACT_ID,
      expectedVersion: 1,
      expectedSemanticFingerprint: ATTESTED_FP,
    });

    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    const outcome = screen.getByTestId("w2-authorization-outcome");
    expect(outcome).toHaveAttribute("data-outcome", "AUTHORIZED");
    expect(outcome).toHaveAttribute("data-execution-eligible", "false");
    expect(outcome).toHaveTextContent(/Autorisation vérifiée/);
    // AUTHORIZED ≠ EXECUTED: no launch CTA when ineligible
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    expect(reconcileMock).not.toHaveBeenCalled();
    expect(authorizeMock.mock.calls[0]![0].expectedSemanticFingerprint).not.toBe(
      "deadbeef",
    );
  });

  it("U13/U14 — authorize CTA refuses when action returns fingerprint mismatch", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-adv",
      contract: baseContract(),
      inspection: inspectionDto(),
    });

    authorizeMock.mockResolvedValue({
      ok: false,
      code: "FINGERPRINT_MISMATCH",
      message:
        "Empreinte sémantique différente du contrat inspecté — réinspection requise.",
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="legacy_cta"
        projectId="prj:p6-ui-adv"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));

    await waitFor(() => expect(authorizeMock).toHaveBeenCalledTimes(1));
    expect(authorizeMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:p6-ui-adv",
      executionContractId: CONTRACT_ID,
      expectedVersion: 1,
      expectedSemanticFingerprint: ATTESTED_FP,
    });
    expect(await screen.findByText(/Empreinte sémantique différente/i)).toBeVisible();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("U17 — Exécuter never auto-inspects; open+attest then Exécuter binds returned attestation", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-insp",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        attestedSemanticFingerprint: null,
        reason: "no_attestation",
      }),
      requiredInspectedFacts: [...REQUIRED_INSPECTED_FACTS],
    });

    inspectMock.mockResolvedValue({
      ok: true,
      ...inspectionDto({
        attestedVersion: 1,
        attestedSemanticFingerprint: "fp:from-inspect-return",
      }),
    });
    confirmMock.mockResolvedValue({ ok: true });
    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: CONTRACT_ID,
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ",
      reasonCode: "authorized",
      reasonText: "ok",
      nextAction: "stop",
      inspection: inspectionDto({
        attestedSemanticFingerprint: "fp:from-inspect-return",
      }),
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cfm:x",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: [],
        sufficientAgentRef: "a",
        reason: "ok",
        statusLabel: "OK",
      },
      authorityReceiptRef: "avr:x",
      decisionRefs: [],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionEligible: false,
      executionEligibilityReasonCode: "NO_ATTEMPT",
      executionPerformed: false,
      attemptCreated: false,
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui-insp"
      />,
    );

    // Pass04 — without attestation, Exécuter zone stays hidden; open does not write.
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-pilot-execute")).toBeNull();
    await openExamAndAttest();
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      inspectedFacts: expect.arrayContaining(["action"]),
    });
    expect(await screen.findByTestId("w2-pilot-execute")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-pilot-execute"));

    await waitFor(() => expect(authorizeMock).toHaveBeenCalled());
    expect(authorizeMock.mock.calls[0]![0].expectedSemanticFingerprint).toBe(
      "fp:from-inspect-return",
    );
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("U19 — prepared contract alone does not auto-launch", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-prep",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        reason: "no_attestation",
      }),
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui-prep"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(confirmMock).not.toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});

```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
(no baseline — full content)

```ts
/**
 * @vitest-environment jsdom
 *
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — these historical W2 authority-path
 * proofs exercise the « Instruire les options » / per-option « Décider »
 * affordances, which are RETIRED from the nominal product path. They now render
 * with `decisionWorkflowMode="legacy_cta"` so the server actions and their
 * fail-closed behaviour stay proven while the nominal surface stays read-only.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  prepareM3Mock,
  resolveLegacyMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  prepareRecoveryDocsWriteMock,
  readPreCycleMock,
  readApprovalMock,
  prepareCycleMock,
  readPreparedCycleMock,
  startPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  prepareM3Mock: vi.fn(),
  resolveLegacyMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  prepareRecoveryDocsWriteMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  prepareCycleMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
  startPreparedCycleMock: vi.fn(),
}));

/**
 * JOURNEY-INTEGRITY Lot A-B — Proposal-backed PREPARE uses the resolved-M3
 * entrypoint (prepareAndResolve → successor), matching TrajectorySurface.
 */
vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
    prepareM3Mock(...args),
  projectAssistantResolveLegacyM3DocsWriteAction: (...args: unknown[]) =>
    resolveLegacyMock(...args),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:mock",
      activeCycleInstanceId: null,
      executionContractId: null,
      executionContractVersion: null,
      executionContractStatus: null,
      attemptId: null,
      attemptStatus: null,
      stage: "PRE_EXECUTION",
      productOutcome: null,
      evidenceId: null,
      reviewBundleId: null,
      claimEvaluationId: null,
      claimEvaluationStatus: null,
      postEvidencePresent: false,
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2PrepareRecoveryDocsWriteAction: (...args: unknown[]) =>
    prepareRecoveryDocsWriteMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: (...args: unknown[]) =>
    prepareCycleMock(...args),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    startPreparedCycleMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
  amendMock.mockReset();
  prepareContractMock.mockReset();
  prepareM3Mock.mockReset();
  resolveLegacyMock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();
  prepareRecoveryDocsWriteMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  prepareCycleMock.mockReset();
  readPreparedCycleMock.mockReset();
  startPreparedCycleMock.mockReset();
  readActiveDecisionSubjectMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readGovernedExecutionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  prepareRecoveryDocsWriteMock.mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:test-active",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:test-active",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("W2 TrajectorySurface", () => {
  it("CORR-PROOF-11 — amend decision hides prepare; shows next-action", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-amend",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:amend",
          label: "Amender le sujet avant d'engager",
          intent: "Modifier",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:amend",
        selectedOptionRef: "opt:proposal-subject:amend",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-amend",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("CORR-PROOF-11 — pursue on proposal subject auto-PREPARE when mock ready", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal-pursue",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-pursue",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:pursue",
        selectedOptionRef: "opt:proposal-subject:pursue",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-pursue",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });
    // Without prepare mock → soft fail keeps resume PREPARE CTA (fallback).
    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
  });

  it("CHECKPOINT-E resume — pursue_prepare_ready rehydrates PREPARE CTA without instruct", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pursue_prepare_ready",
      decision: {
        decisionId: "dec:w2-prop:resume-ui",
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-17T18:36:50.105Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:3b788c52-5139-4b71-b00b-a45a0224b56f",
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-options")).toBeNull();

    prepareM3Mock.mockResolvedValue({
      ok: true,
      text: "Contrat préparé",
      f3: {
        successor: {
          executionContractId: "xct:m3:decw2propresume-ui",
          version: 1,
          status: "validated",
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          scope: "decision:dec:w2-prop:resume-ui",
          requiredAuthority: "MORRIS",
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          requiredCapabilities: ["cap:cursor.docs_write"],
          reversibility: "irreversible",
          semanticFingerprint: "a".repeat(64),
          inspectionDisclosure: {
            action: "cursor.docs_write.apply",
            target: "workspace.isolated.docs_write",
            scope: "decision:dec:w2-prop:resume-ui",
            requiredCapabilities: ["cap:cursor.docs_write"],
            requiredAuthority: "MORRIS",
            constraints: ["PREPARE_ONLY"],
            stopConditions: ["AUTHORITY_DENIED"],
            evidenceRequirements: ["git:local_commit"],
            reversibility: "irreversible",
          },
        },
      },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    await waitFor(() => {
      expect(prepareM3Mock).toHaveBeenCalledWith({
        projectId: "prj:w2-ui",
        decisionId: "dec:w2-prop:resume-ui",
      });
    });
  });

  it("R8 — recovery docs_write binding hides W3-A catalog; PREPARE remains explicit", async () => {
    const TARGET =
      "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-recovery",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Nouvelle tentative gouvernée",
          intent: "Reprendre après FAIL",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:clarify-first",
        rationale: "Diagnostiquer.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-recovery",
        version: 1,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-trj:recovery-ui",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-17T21:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: { trajectoryId: "trj:w2-recovery", version: 3 },
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    readRecoveryExecutionBindingMock.mockResolvedValue({
      ok: true,
      binding: {
        kind: "post_evidence_recovery_execution",
        recovery: {
          kind: "post_evidence_recovery",
          attemptId: "xat:w3a:1f49d8e25e20837a",
          attemptStatus: "failed",
          stopReason: "REAL_PROCESS_NONZERO_EXIT",
          executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
          evidenceId: "ev:w3b:seed",
          reviewBundleId: "rb:w3b:seed",
          productOutcome: "FAIL",
          recommendationKind: "recover",
          requiresHumanDecision: false,
          headline: "Échec",
          rationale: "r",
          nextStep: "recovery_diagnose_or_replan",
          realProcessInvoked: true,
          businessEffectProven: false,
          w3cEpistemicItemId: "epi:w3c-rec:seed",
        },
        sourceExecutionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
        sourceAttemptId: "xat:w3a:1f49d8e25e20837a",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        targetPath: TARGET,
        scope: "studio.gcec.docs_write",
        requiredCapabilities: ["cap:cursor.docs_write"],
        evidenceRequirements: ["evreq:docs_write_artifact"],
        constraints: ["NO_COMMIT", "NO_PUSH"],
        stopConditions: [],
        expectedOutputs: [],
        inputs: { targetPath: TARGET },
        projectId: "prj:w2-ui",
        cycleInstanceId: null,
        sourceSemanticFingerprint: null,
        sourceStatus: "failed",
      },
      recoveryContextPresent: true,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(
      await screen.findByTestId("w2-recovery-docs-write-prepare"),
    ).toBeVisible();
    expect(screen.getByTestId("w2-recovery-docs-write-path")).toHaveTextContent(
      TARGET,
    );
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.getByTestId("w2-prepare-recovery-docs-write")).toBeEnabled();
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("NELC — known recovery + no docs_write binding → generic PREPARE", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-prestart-unresolved",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Recovery",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:governed-gated",
        rationale: "Retry gouverné.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-prestart",
        version: 1,
        status: "proposed",
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-trj:prestart-unresolved",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: { trajectoryId: "trj:w2-prestart", version: 2 },
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    readRecoveryExecutionBindingMock.mockResolvedValue({
      ok: true,
      binding: null,
      recoveryContextPresent: true,
    });
    prepareContractMock.mockResolvedValue({
      ok: true,
      contract: {
        executionContractId: "xct:w3a:nelc-generic",
        version: 1,
        status: "confirmation_required",
        action: "studio.cursor.generalist.execute",
        target: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        requiredAuthority: "N1",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        reversibility: "partially_reversible",
        semanticFingerprint: "fp:nelc",
        effectConfirmationRequired: false,
        effectConfirmationLevel: null,
        inspectionDisclosure: null,
      },
      attemptCreated: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    await waitFor(() => {
      expect(prepareContractMock).toHaveBeenCalledWith({
        projectId: "prj:w2-ui",
        decisionId: "dec:w2-trj:prestart-unresolved",
      });
    });
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-recovery-docs-write-prepare")).toBeNull();
  });

  it("CORR-01 C1-A — EPISTEMIC_READ_FAILED blocks generic PREPARE", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:corr01-ep",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Recovery",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:governed-gated",
        rationale: "Retry.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:corr01-ep",
        version: 1,
        status: "proposed",
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:corr01-ep",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: { trajectoryId: "trj:corr01-ep", version: 2 },
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    readRecoveryExecutionBindingMock.mockResolvedValue({
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: "Lecture épistémique recovery impossible — fail-closed.",
      recoveryContextPresent: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(
      await screen.findByText(/Lecture épistémique recovery impossible/i),
    ).toBeVisible();
    expect(prepareContractMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("CORR-01 C1-B — OA_STACK_UNAVAILABLE blocks generic PREPARE", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:corr01-oa",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Recovery",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:governed-gated",
        rationale: "Retry.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:corr01-oa",
        version: 1,
        status: "proposed",
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:corr01-oa",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: { trajectoryId: "trj:corr01-oa", version: 2 },
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    readRecoveryExecutionBindingMock.mockResolvedValue({
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles — aucune action W2 possible.",
      recoveryContextPresent: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(
      await screen.findByText(/Services OA indisponibles/i),
    ).toBeVisible();
    expect(prepareContractMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("CORR-01 C1-C — malformed/undefined binding read blocks generic PREPARE", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:corr01-mal",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Recovery",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:governed-gated",
        rationale: "Retry.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:corr01-mal",
        version: 1,
        status: "proposed",
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:corr01-mal",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: { trajectoryId: "trj:corr01-mal", version: 2 },
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    readRecoveryExecutionBindingMock.mockResolvedValue(undefined);

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(
      await screen.findByText(/UNKNOWN ≠ absent|Lecture binding recovery indisponible/i),
    ).toBeVisible();
    expect(prepareContractMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("CORR-02 C3 — clone-per-call restart is one-way / finite (no setDecision loop)", async () => {
    const TARGET =
      "projects/sfia-studio/.sandbox/prestart-recovery-ownership.md";
    const recoveryHd = "dec:w2-trj:corr02-stable";
    const binding = {
      kind: "post_evidence_recovery_execution" as const,
      recovery: {
        kind: "post_evidence_recovery" as const,
        attemptId: "xat:w3a:corr02",
        attemptStatus: "failed" as const,
        stopReason:
          "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
        executionContractId: "xct:m3-res:corr02",
        evidenceId: "ev:w3b:corr02",
        reviewBundleId: "rb:w3b:corr02",
        productOutcome: "FAIL" as const,
        recommendationKind: "recover" as const,
        requiresHumanDecision: true,
        headline: "Échec",
        rationale: "r",
        nextStep: "recovery_diagnose_or_replan" as const,
        realProcessInvoked: false,
        businessEffectProven: false,
        w3cEpistemicItemId: "epi:w3c-rec:corr02",
      },
      sourceExecutionContractId: "xct:m3-res:corr02",
      sourceAttemptId: "xat:w3a:corr02",
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      targetPath: TARGET,
      scope: "studio.gcec.docs_write",
      requiredCapabilities: ["cap:cursor.docs_write"],
      evidenceRequirements: ["evreq:docs_write_artifact"],
      constraints: ["NO_COMMIT", "NO_PUSH"],
      stopConditions: [],
      expectedOutputs: [],
      inputs: { targetPath: TARGET },
      projectId: "prj:w2-ui",
      cycleInstanceId: null,
      sourceSemanticFingerprint: null,
      sourceStatus: "confirmed" as const,
    };
    const ownedTemplate = {
      ok: true as const,
      kind: "owned" as const,
      decision: {
        decisionId: recoveryHd,
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote" as const,
        authorityClass: "morris" as const,
        statusLabel: "DÉCISION HUMAINE PRISE" as const,
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true as const,
        reservesText: null,
        proposalId: null,
      },
      trajectory: {
        trajectoryId: "trj:corr02-stable",
        version: 4,
        status: "validated" as const,
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE" as const,
        isCurrent: true as const,
        decidedByDecisionRef: recoveryHd,
        decidedOptionRef: "opt:trajectory:governed-gated",
      },
      recoveryContext: binding.recovery,
      binding,
    };
    // Runtime-like: every Server Action call returns a freshly cloned object.
    readRecoveryOwnedDecisionContinuityMock.mockImplementation(async () =>
      structuredClone(ownedTemplate),
    );
    // loadBinding after setDecision must also resolve the same durable binding.
    readRecoveryExecutionBindingMock.mockImplementation(async () =>
      structuredClone({
        ok: true as const,
        binding,
        recoveryContextPresent: true,
      }),
    );

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    expect(
      await screen.findByTestId("w2-recovery-docs-write-prepare"),
    ).toBeVisible();
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(prepareContractMock).not.toHaveBeenCalled();
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-contract")).toBeNull();

    await waitFor(() => {
      expect(
        readRecoveryOwnedDecisionContinuityMock.mock.calls.length,
      ).toBeGreaterThanOrEqual(1);
    });
    const callsAfterRestore =
      readRecoveryOwnedDecisionContinuityMock.mock.calls.length;
    expect(callsAfterRestore).toBeLessThanOrEqual(3);

    // Additional React settle — call count must remain stable (no loop).
    await waitFor(() => {
      expect(screen.getByTestId("w2-recovery-docs-write-prepare")).toBeVisible();
    });
    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));
    expect(readRecoveryOwnedDecisionContinuityMock.mock.calls.length).toBe(
      callsAfterRestore,
    );
  });

  it("CORR-03 C5 — corrupted GOVERNED continuity fail-closed (no PREPARE / no synthetic HD)", async () => {
    readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
      ok: false,
      code: "RECOVERY_DECISION_CONTINUITY_FAILED",
      message:
        "Claim GOVERNED durable incohérent — lignée recovery fail-closed.",
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    expect(
      await screen.findByText(/lignée recovery fail-closed|Claim GOVERNED/i),
    ).toBeVisible();
    expect(prepareContractMock).not.toHaveBeenCalled();
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-recovery-docs-write-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
    // StudyFlow bug class: continuity FAIL must not leave "Instruire les options".
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("NELC — hard reload owned + binding=null → generic Reprendre la préparation (no docs_write CTA)", async () => {
    const recoveryHd = "dec:w2-trj:nelc-owned-null-binding";
    const recoveryContext = {
      kind: "post_evidence_recovery" as const,
      attemptId: "xat:w3a:nelc-owned",
      attemptStatus: "succeeded" as const,
      stopReason: null,
      executionContractId: "xct:nelc-owned-source",
      evidenceId: "ev:nelc-owned",
      reviewBundleId: "rb:nelc-owned",
      productOutcome: "UNCLAIMED" as const,
      recommendationKind: "recover" as const,
      requiresHumanDecision: true,
      headline: "Résultat technique non encore prouvé",
      rationale: "Attempt succeeded; ClaimEvaluation NOT_PROVEN.",
      nextStep: "recovery_diagnose_or_replan",
      realProcessInvoked: true,
      businessEffectProven: false as const,
      w3cEpistemicItemId: "epi:w3c-rec:nelc-owned",
    };
    readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "owned",
      decision: {
        decisionId: recoveryHd,
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-26T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: null,
      },
      trajectory: {
        trajectoryId: "trj:nelc-owned",
        version: 3,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: recoveryHd,
        decidedOptionRef: "opt:trajectory:governed-gated",
      },
      recoveryContext,
      binding: null,
    });
    prepareContractMock.mockResolvedValue({
      ok: true,
      contract: {
        executionContractId: "xct:w3a:nelc-owned-generic",
        version: 1,
        status: "confirmation_required",
        action: "studio.cursor.generalist.execute",
        target: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        requiredAuthority: "N1",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        reversibility: "partially_reversible",
        semanticFingerprint: "fp:nelc-owned",
        effectConfirmationRequired: false,
        effectConfirmationLevel: null,
        inspectionDisclosure: null,
      },
      attemptCreated: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-recovery-docs-write-prepare")).toBeNull();
    expect(
      await screen.findByTestId("w3a-prepare-execution-from-decision"),
    ).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract-sandbox")).toBeVisible();
    expect(
      screen.getByText(/Reprise secondaire|reprendre sans nouvel arbitrage/i),
    ).toBeVisible();

    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
    await waitFor(() => {
      expect(prepareContractMock).toHaveBeenCalledWith({
        projectId: "prj:w2-ui",
        decisionId: recoveryHd,
      });
    });
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(proposeMock).not.toHaveBeenCalled();
    expect(executeSelectMock).not.toHaveBeenCalled();
    expect(executeStartMock).not.toHaveBeenCalled();
    expect(executeCompleteMock).not.toHaveBeenCalled();
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "studio.cursor.generalist.execute",
    );
  });

  it("RC-05 — before decision options+recommendation primary; after decision history collapsed", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:rc05",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Relance gouvernée",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée pour l'arbitrage.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:rc05",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:rc05",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-25T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:rc05",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:rc05",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:rc05" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getByTestId("w2-recommendation")).toBeVisible();
    expect(screen.queryByTestId("w2-decision-history")).toBeNull();

    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-recorded")).toBeVisible();
    expect(screen.getByTestId("w2-decision-next-step")).toBeVisible();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(screen.queryByTestId("w2-recommendation")).toBeNull();
    const history = screen.getByTestId("w2-decision-history");
    expect(history).toBeInTheDocument();
    expect(history).not.toHaveAttribute("open");
    expect(screen.getByTestId("w2-options-history")).toBeInTheDocument();
    expect(screen.getByTestId("w2-decided-trajectory")).toBeInTheDocument();
  });

  it("RC-06 — structural GOVERNED auto-PREPARE without auto-inspect; no auto-Execute; no nominal PREPARE", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:rc06",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "project_trajectory",
      proposalId: null,
      promotesProjectTrajectory: true,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Relance structurale",
          impacts: ["productOutcome: UNCLAIMED"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:governed-gated",
        rationale: "Recovery structurelle.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:rc06",
        version: 2,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:rc06-gov",
        selectedOptionRef: "opt:trajectory:governed-gated",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-25T12:05:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:rc06",
        version: 2,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:rc06-gov",
        decidedOptionRef: "opt:trajectory:governed-gated",
      },
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });
    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:rc06-gov",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:rc06",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "fp:rc06",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:rc06",
      contractVersion: 1,
      semanticFingerprint: "fp:rc06",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:rc06",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:rc06" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
    );

    await waitFor(() => {
      expect(prepareContractMock).toHaveBeenCalledWith({
        projectId: "prj:rc06",
        decisionId: "dec:rc06-gov",
      });
    });
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    // Pass04 — PREPARE never auto-inspects.
    expect(inspectMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      /NON INSPECTÉ/i,
    );
    expect(screen.getByTestId("w2-decision-prepared-step")).toBeVisible();
    expect(screen.queryByTestId("w3a-prepare-execution-from-decision")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByText("Préparer le contrat d'exécution")).toBeNull();
    expect(screen.queryByTestId("w3a-attempt")).toBeNull();
    expect(executeStartMock).not.toHaveBeenCalled();
    expect(executeSelectMock).not.toHaveBeenCalled();
  });

  it("R10 — restart: decision=null + continuityDecisionRef loads binding; wrong generic current → CTA primary", async () => {
    const TARGET =
      "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
    const recoveryHd = "dec:w2-trj:7e6ca68a-a31b-448c-9ae8-648de8772988";
    const wrongEcId = "xct:w3a:dec:w2-trj:7e6ca68a-a31b-448c-9ae8-648de8772988";

    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: recoveryHd,
      contract: {
        executionContractId: wrongEcId,
        version: 2,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "LOCAL_PILOTE",
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL", "NO_CURSOR_REAL"],
        stopConditions: [],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "fp:wrong",
        effectConfirmationRequired: true,
        effectConfirmationLevel: null,
        inspectionDisclosure: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          scope: "product:temporary-local-artifact",
          constraints: ["NO_REAL"],
          stopConditions: [],
          requiredCapabilities: ["cap:product-temp-artifact"],
          requiredAuthority: "LOCAL_PILOTE",
          reversibility: "reversible",
          evidenceRequirements: ["evreq:generate-temporary-artifact"],
          expectedOutputs: [],
        },
      },
      inspection: {
        executionContractId: wrongEcId,
        contractVersion: 2,
        semanticFingerprint: "fp:wrong",
        statusLabel: "non inspecté",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: true,
        reason: "not_inspected",
        grantsAuthority: false,
      },
    });

    readRecoveryExecutionBindingMock.mockResolvedValue({
      ok: true,
      binding: {
        kind: "post_evidence_recovery_execution",
        recovery: {
          kind: "post_evidence_recovery",
          attemptId: "xat:w3a:1f49d8e25e20837a",
          attemptStatus: "failed",
          stopReason: "REAL_PROCESS_NONZERO_EXIT",
          executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
          evidenceId: "ev:w3b:seed",
          reviewBundleId: "rb:w3b:seed",
          productOutcome: "FAIL",
          recommendationKind: "recover",
          requiresHumanDecision: false,
          headline: "Échec",
          rationale: "r",
          nextStep: "recovery_diagnose_or_replan",
          realProcessInvoked: true,
          businessEffectProven: false,
          w3cEpistemicItemId: "epi:w3c-rec:seed",
        },
        sourceExecutionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
        sourceAttemptId: "xat:w3a:1f49d8e25e20837a",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        targetPath: TARGET,
        scope: "studio.gcec.docs_write",
        requiredCapabilities: ["cap:cursor.docs_write"],
        evidenceRequirements: ["evreq:docs_write_artifact"],
        constraints: ["NO_COMMIT", "NO_PUSH"],
        stopConditions: [],
        expectedOutputs: [],
        inputs: { targetPath: TARGET },
        projectId: "prj:w2-ui",
        cycleInstanceId: null,
        sourceSemanticFingerprint: null,
        sourceStatus: "failed",
      },
      recoveryContextPresent: true,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);

    // T1 — binding loaded with continuity decisionRef (decision client null)
    await waitFor(() => {
      expect(readRecoveryExecutionBindingMock).toHaveBeenCalledWith({
        projectId: "prj:w2-ui",
        decisionId: recoveryHd,
      });
    });

    // T2/T4 — recovery CTA visible as primary; wrong EC still visible; Inspect demoted
    expect(
      await screen.findByTestId("w2-recovery-docs-write-prepare"),
    ).toBeVisible();
    expect(screen.getByTestId("w2-recovery-docs-write-path")).toHaveTextContent(
      TARGET,
    );
    expect(screen.getByTestId("w2-recovery-replaceable-generic-note")).toBeVisible();
    expect(screen.getByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-next-action")).toHaveTextContent(
      /Préparer le contrat recovery/i,
    );
    expect(screen.getByTestId("w2-prepare-recovery-docs-write")).toBeEnabled();
    expect(screen.getByTestId("w2-inspect-contract").className).not.toMatch(
      /primaryAction/,
    );
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.getByTestId("w2-authorize-contract")).toBeDisabled();

    // T3 — no mutation on reload (no prepare/cancel called)
    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();

    // T5 — explicit PREPARE click routes to R8 action
    prepareRecoveryDocsWriteMock.mockResolvedValue({
      ok: true,
      contract: {
        executionContractId: "xct:m3-res:recovery-successor",
        version: 2,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        requiredAuthority: "MORRIS",
        constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
        stopConditions: [],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp:successor",
        supersedesExecutionContractId: null,
        supersessionReason: null,
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          targetPath: TARGET,
          scope: "studio.gcec.docs_write",
          constraints: ["NO_COMMIT"],
          stopConditions: [],
          requiredCapabilities: ["cap:cursor.docs_write"],
          requiredAuthority: "MORRIS",
          reversibility: "reversible",
          evidenceRequirements: ["evreq:docs_write_artifact"],
          expectedOutputs: [],
        },
      },
      decisionId: recoveryHd,
      cancelledWrongGenericContractId: wrongEcId,
      reusedFromIdempotency: false,
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      binding: {},
    });

    fireEvent.click(screen.getByTestId("w2-prepare-recovery-docs-write"));
    await waitFor(() => {
      expect(prepareRecoveryDocsWriteMock).toHaveBeenCalledWith({
        projectId: "prj:w2-ui",
        decisionId: recoveryHd,
      });
    });
    expect(await screen.findByTestId("w2-contract-action")).toHaveTextContent(
      "cursor.docs_write.apply",
    );
  });

  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      proposalId: null,
    });
  });

  it("PJ-REPROOF — primary Recommendation is Pilote-first; Markdown/IDs stay out of primary rationale", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui-pj",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:clarify-first",
          label: "Diagnostiquer / clarifier avant nouvelle tentative",
          intent: "Approfondir le diagnostic",
          impacts: [
            "Aucune préparation d'exécution à ce stade",
            "Attempt succeeded: att:demo",
            "Evidence: evi:demo",
          ],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Préparer une nouvelle tentative gouvernée",
          intent: "Décider puis préparer",
          impacts: ["Décision humaine requise avant préparation"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:clarify-first",
        rationale:
          "Studio recommande de diagnostiquer / clarifier avant toute nouvelle tentative. Votre décision reste nécessaire.",
        cognitiveAnalysis:
          "## Diagnostic\n**Important** : Attempt `att:demo` Evidence `evi:xyz` — analyse secondaire Nora.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
        ckcProvenance: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui-pj",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui-pj" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-recommendation")).toBeVisible();

    const rationale = screen.getByTestId("w2-recommendation-rationale");
    expect(rationale).toHaveTextContent(/diagnostiquer|clarifier/i);
    expect(rationale.textContent ?? "").not.toMatch(/##/);
    expect(rationale.textContent ?? "").not.toContain("**");
    expect(rationale.textContent ?? "").not.toContain("`");
    expect(rationale.textContent ?? "").not.toMatch(/\batt:demo\b/);
    expect(rationale.textContent ?? "").not.toMatch(/\bevi:xyz\b/);
    expect(rationale.textContent ?? "").not.toContain("HumanDecision");
    expect(rationale.textContent ?? "").not.toContain("ProductOutcome");
    expect(rationale.textContent ?? "").not.toContain("ContractResult");
    expect(rationale.textContent ?? "").not.toContain("optionRef");
    expect(rationale.textContent ?? "").not.toMatch(
      /Recommendation\s*≠\s*HumanDecision/i,
    );

    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "Diagnostiquer / clarifier avant nouvelle tentative",
    );
    expect(screen.getByTestId("w2-recommendation-footer")).toHaveTextContent(
      /ne lance aucune action automatiquement/i,
    );
    // Secondary Nora analysis disclosure — not primary WHAT.
    expect(
      screen.getByTestId("w2-recommendation-nora-analysis"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("w2-option-opt:trajectory:clarify-first"),
    ).toHaveTextContent("Recommandée — pas décidée");
    expect(
      screen.getByTestId("w2-option-tech-opt:trajectory:clarify-first"),
    ).toBeInTheDocument();
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:w2-ui" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:w2-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    // PJ-REPROOF-04 — no Pilot-facing technical operation dropdown.
    expect(
      screen.getByTestId("w3a-prepare-execution-from-decision"),
    ).toBeVisible();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(prepareContractMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      decisionId: "dec:w2-ui",
    });
    expect(prepareContractMock.mock.calls[0][0]).not.toHaveProperty(
      "qualifiedOperationKind",
    );
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "product:temporary-local-artifact",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:product-temp-artifact",
    );
    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
      "Confirmation requise",
    );
    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
      "confirmation_required",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    const preparedDisclosure = {
      action: "product:generate-temporary-artifact",
      technicalTarget: "product:project-workspace",
      scope: "product:temporary-local-artifact",
      targetRepositoryRef: null,
      targetPath: null,
      scopeIn: null,
      scopeOut: null,
      createOrModify: null,
      noDelete: null,
      objective: null,
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: null,
      sourceGrounding: null,
      acceptanceCriteria: null,
      validationPlan: null,
      reportRequirements: null,
      evidenceRequirements: [] as string[],
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-temp-artifact"],
      constraints: [
        "PRODUCT_GOVERNED",
        "EFFECT_CLASS:generate-temporary-artifact",
        "EFFECT_CONFIRMATION_REQUIRED:N1",
      ],
      stopConditions: ["EFFECTS_UNRESOLVED"],
      reversibility: "reversible",
      contractVersion: 1,
      executionContractId: "xct:w2-ui",
      semanticFingerprint: "abc123def456",
      disclosureComplete: true,
      incompletenessCode: null,
    };
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:w2-ui",
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
        inspectionDisclosure: preparedDisclosure,
      },
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc123def456",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      requiredInspectedFacts: [
        "action",
        "target",
        "scope",
        "requiredAuthority",
        "requiredCapabilities",
        "constraints",
        "stopConditions",
        "reversibility",
        "evidenceRequirements",
        "semanticFingerprint",
      ],
    });

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    // Pass04 — open exam (no write) then explicit attest.
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(
      await screen.findByTestId("w2-trajectory-inspection-panel"),
    ).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    // Amendment affordance appears only after sufficient inspection.
    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();

    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: true,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: false,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /réinspection requise/i,
    );
    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
      "BORNER LE SLICE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "NON INSPECTÉ",
    );
    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(amendMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      executionContractId: "xct:w2-ui",
      additionalConstraint: "BORNER LE SLICE",
    });

    // R1 — UI consumes application statusLabel (not a hardcoded false required).
    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: false,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:successor",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: true,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });
    // Re-open form by mocking a second inspect-sufficient path isn't needed —
    // call amend again via preparing another inspect cycle: force form by
    // clicking inspect mock first then amend with already-satisfied truth.
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui:amd:deadbeef",
      contractVersion: 1,
      semanticFingerprint: "fff111aaa222",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:successor",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:w2-ui",
      contract: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
        inspectionDisclosure: {
          action: "w2:inspect-only",
          technicalTarget: "studio",
          scope: "w2-ui",
          targetRepositoryRef: null,
          targetPath: null,
          scopeIn: null,
          scopeOut: null,
          createOrModify: null,
          noDelete: null,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: null,
          sourceGrounding: null,
          acceptanceCriteria: null,
          validationPlan: null,
          reportRequirements: null,
          evidenceRequirements: [] as string[],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:f3-fixture-docs"],
          constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
          stopConditions: ["STOP AVANT EXECUTE"],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:w2-ui:amd:deadbeef",
          semanticFingerprint: "fff111aaa222",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      requiredInspectedFacts: [
        "action",
        "target",
        "scope",
        "requiredAuthority",
        "requiredCapabilities",
        "constraints",
        "stopConditions",
        "reversibility",
        "evidenceRequirements",
        "semanticFingerprint",
      ],
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(
      await screen.findByTestId("w2-trajectory-inspection-panel"),
    ).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
      "RÉINSPECTION DÉJÀ SATISFAITE",
    );
    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
      "RÉINSPECTION REQUISE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "Exécution bloquée",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
    // W3-A: BLOCKED must not expose Execute CTA.
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});

describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
  it("shows Préparer le cycle after greenfield decided with no prepared cycle", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:gf-prep" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-cycle")).toHaveTextContent(
      "Préparer le cycle",
    );
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("hides Préparer le cycle when prepareBlockedReason is set", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui-blocked",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui-blocked",
        targetCycleTypeId: "cyc:functional-design",
        catalogLabel: "Conception fonctionnelle",
        completedMatchingCycle: true,
        prepareBlockedReason: "cycle_type_already_completed",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:gf-prep-blocked" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-blocked")).toBeVisible();
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
  });

  it("shows profile + Démarrer le cadrage when prepared; clears CTAs after active", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({
      ok: true,
      prepared: {
        cycleInstanceId: "cyc:trj-prepared",
        cycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
        profile: "Light",
        status: "acknowledged",
        trajectoryId: "trj:gf-ui",
        trajectoryVersion: 1,
        trajectoryStepId: "stp:1",
        ckcResolutionRef: "ckc:m2-x",
        qualificationSignals: null,
        isActive: false,
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:gf-start" />);
    expect(await screen.findByTestId("pre-cycle-prepared-cycle")).toHaveTextContent(
      "profil Light",
    );
    expect(screen.getByTestId("pre-cycle-start-cycle")).toHaveTextContent(
      "Démarrer le cadrage",
    );
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();

    startPreparedCycleMock.mockResolvedValue({
      ok: true,
      cycleInstanceId: "cyc:trj-prepared",
      catalogLabel: "Cadrage",
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    fireEvent.click(screen.getByTestId("pre-cycle-start-cycle"));

    await waitFor(() => {
      expect(startPreparedCycleMock).toHaveBeenCalled();
    });

    // After START refresh: active cycle → no prepare/start CTAs
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cyc:trj-prepared",
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    // Re-render via durableRefreshSignal path: remount
    cleanup();
    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:gf-start" />);
    await waitFor(() => {
      expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
      expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    });
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
  });
});

describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
  it("U01 — multiple pending: ambiguous title, no CTAs, no first-id arbitration", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Plusieurs demandes sont en attente. Studio ne peut pas déterminer laquelle remplacer sans votre choix. Aucune action ne sera exécutée.",
      proposalIds: ["prop:a", "prop:b"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:ambig"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.getByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Plusieurs demandes sont en attente",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:a",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:b",
    );
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
    expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(reformulate).not.toHaveBeenCalled();
  });

  it("U02 — single recoverable: auto-instruct options without free instruct click (FR-01)", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Une proposition attend encore votre instruction. Examinez ses options pour continuer.",
      proposalIds: ["prop:solo"],
      recoverableProposalIds: ["prop:solo"],
    });
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:auto-solo",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:solo",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:recoverable" />);

    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(proposeMock).toHaveBeenCalled();
    expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("U03 — single non-recoverable: Reformulez + sole ID callback", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:lost-only"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:lost"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Reformulez votre demande",
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    // Fail-closed: Reformuler stays disabled until subject + governed EC
    // continuity both leave pending/error (continuityMutationBlocked). Title
    // can paint before EC resolves — wait for enabled, same as READY recover.
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).toHaveBeenCalledTimes(1);
    expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
  });

  it("U04 — primary pending copy excludes engine jargon", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:x"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:jargon" />);
    const body = (await screen.findByTestId("w2-pending-reinstruction-body"))
      .textContent ?? "";
    expect(body).not.toMatch(/fallback/i);
    expect(body).not.toMatch(/process-local/i);
    expect(body).not.toMatch(/ProjectTrajectory/i);
    expect(body).not.toMatch(/\bpending\b/i);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:pending-owns"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:pending-cta" />);
    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
  });

  it("JOURNEY-INTEGRITY — ownership callback: CASE A unrecoverable → OWNED", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:case-a"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:own-a"
        onProposalSubjectOwnershipChange={onOwnership}
        onRequestReformulateWithNora={vi.fn()}
      />,
    );
    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("OWNED");
    });
    expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
  });

  it("JOURNEY-INTEGRITY — ownership callback: kind none → NONE", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:own-none"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("NONE");
    });
  });

  it("JOURNEY-INTEGRITY — ownership callback: read error → UNKNOWN fail-closed", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "READ_FAILED",
      message: "Decision Subject illisible",
    });

    render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:own-err"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
    });
    expect(onOwnership).not.toHaveBeenCalledWith("NONE");
  });
});

describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
  const PROPOSAL_OPTION_SET = {
    ok: true,
    optionSetRef: "optset:cta-exclusivity",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "proposal",
    proposalId: "prop:f2:cta",
    promotesProjectTrajectory: false,
    options: [
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:pursue",
        label: "Poursuivre le sujet proposé",
        intent: "Continuer",
        impacts: [],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:amend",
        label: "Amender le sujet avant d'engager",
        intent: "Modifier",
        impacts: [],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:proposal-subject:pursue",
      rationale: "Continuer.",
      isHumanDecision: false,
      ckcAttribution: false,
    },
    epistemicRefs: [],
    proposedTrajectory: null,
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  } as const;

  it("an OptionSet awaiting the decision hides the generic instruct CTA", async () => {
    proposeMock.mockResolvedValue(PROPOSAL_OPTION_SET);

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:cta-optionset" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");

    // The presented subject owns the next action until the Pilote decides.
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    const surface = screen.getByTestId("w2-trajectory-panel").textContent ?? "";
    expect(surface).not.toMatch(/Réinstruire/i);
    expect(proposeMock).toHaveBeenCalledTimes(1);
  });

  it("no decision subject at all: the generic instruct CTA stays reachable", async () => {
    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:cta-none" />);

    const cta = await screen.findByTestId("w2-propose-options");
    expect(cta).toBeVisible();
    expect(cta).toHaveTextContent("Instruire les options");
    expect(screen.queryByTestId("w2-pending-reinstruction")).toBeNull();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });
});

/**
 * JOURNEY-INTEGRITY Lot A-B final — the Pilot decides the operation ONCE.
 *
 * After pursue on a Proposal decision subject the sealed DecisionBasis already
 * carries targetPath / requestedOperation, so the surface must:
 *  - offer the Proposal-backed PREPARE (never the sandbox op selector), and
 *  - send projectId + decisionId ONLY — the server re-resolves the rest from
 *    durable lineage (same contract as AP23 in
 *    __tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts).
 */
describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", () => {
  function proposalOptionSet(proposalId: string) {
    return {
      ok: true,
      optionSetRef: `optset:${proposalId}`,
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId,
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
          label: "Ne pas poursuivre / refuser",
          intent: "Refuser",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    };
  }

  function proposalDecision(input: {
    decisionId: string;
    proposalId: string;
    selectedOptionRef: string;
  }) {
    return {
      ok: true,
      decision: {
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-15T16:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: input.proposalId,
      },
      trajectory: null,
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    };
  }

  const sealedSuccessor = {
    executionContractId: "xct:sealed-docs-write",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "product:artifact-materialization",
    requiredAuthority: "N3",
    constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
    stopConditions: ["STOP AVANT EXECUTE"],
    requiredCapabilities: ["cap:cursor.docs_write"],
    reversibility: "reversible" as const,
    semanticFingerprint: "sealed0fingerprint",
    inspectionDisclosure: {
      action: "cursor.docs_write.apply",
      technicalTarget: "workspace.isolated.docs_write",
      scope: "product:artifact-materialization",
      targetRepositoryRef: "mcleland147/sfia-workspace",
      targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
      scopeIn: ["projects/sfia-studio/.sandbox/"],
      scopeOut: ["projects/sfia-studio/app/"],
      createOrModify: true,
      noDelete: true,
      objective: "Matérialiser la note",
      artifactType: "markdown",
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: ["note markdown"],
      evidenceRequirements: ["evreq:git-working-tree"],
      requiredAuthority: "N3",
      requiredCapabilities: ["cap:cursor.docs_write"],
      constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
      stopConditions: ["STOP AVANT EXECUTE"],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:sealed-docs-write",
      semanticFingerprint: "sealed0fingerprint",
      disclosureComplete: true,
      incompletenessCode: null,
    },
  };

  /** Resolved-M3 success shape consumed by TrajectorySurface (`result.f3.successor`). */
  const M3_PREPARED = {
    ok: true,
    status: "ok",
    mode: "m3_resolved_fixture",
    presentation: "unconfirmed",
    text: "Contrat résolu — confirmation requise.",
    ephemeralNotice: "",
    project: {
      projectId: "prj:sealed",
      name: "sealed",
      lpsId: "lps:sealed",
      lpsVersion: 1,
      doctrineDigest: "digest:sealed",
      activeCycleInstanceId: null,
      ckcResolutionRef: null,
    },
    f3: {
      turnKind: "f3_m3_resolved",
      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
      decisionId: "dec:sealed-pursue",
      projectId: "prj:sealed",
      prepare: {
        turnKind: "f3_m3_prepare",
        mode: "M3_PREPARE",
        decisionId: "dec:sealed-pursue",
        projectId: "prj:sealed",
        contract: { ...sealedSuccessor, status: "draft" },
        executionPerformed: false,
        attemptCreated: false,
        cursorReal: false,
        executionAllowed: false,
        disclosures: [],
      },
      original: {
        executionContractId: "xct:sealed-docs-write-prepare",
        version: 1,
        status: "draft",
        action: sealedSuccessor.action,
        target: sealedSuccessor.target,
        scope: "decision:dec:sealed-pursue",
        requiredAuthority: "N3",
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT"],
        stopConditions: ["AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible" as const,
        semanticFingerprint: "prepare0fingerprint",
      },
      successor: sealedSuccessor,
      reusedFromIdempotency: false,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
      disclosures: [],
    },
  };

  async function decidePursue(projectId: string, proposalId: string) {
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-pursue",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      }),
    );
    // RC-01 — auto-PREPARE runs in the same decide intention; mock must be ready.
    prepareM3Mock.mockResolvedValue(M3_PREPARED);
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:sealed-docs-write",
      contractVersion: 1,
      semanticFingerprint: "sealed0fingerprint",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:sealed",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId={projectId} />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    await waitFor(() => {
      expect(decideMock).toHaveBeenCalled();
    });
    // Allow microtask flush for RC-01 auto-PREPARE chain.
    await waitFor(
      () => {
        if (prepareM3Mock.mock.calls.length === 0) {
          throw new Error(
            `auto-PREPARE not invoked (decideCalls=${decideMock.mock.calls.length}, optionRef=${JSON.stringify(decideMock.mock.calls[0])})`,
          );
        }
        expect(screen.getByTestId("w2-contract")).toBeVisible();
      },
      { timeout: 3000 },
    );
  }

  it("RC-01 — pursue auto-PREPARE without auto-inspect; no nominal PREPARE click", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");

    expect(decideMock).toHaveBeenCalled();
    expect(prepareM3Mock.mock.calls).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            projectId: "prj:sealed",
            decisionId: "dec:sealed-pursue",
          }),
        ]),
      ]),
    );
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
    // Pass04 — PREPARE never records inspection.
    expect(inspectMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      /NON INSPECTÉ/i,
    );
    // Never auto-execute
    expect(screen.queryByTestId("w3a-attempt")).toBeNull();
  });

  it("PREPARE sends projectId + decisionId only, then maps the sealed contract", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");
    expect(await screen.findByTestId("w2-contract")).toBeVisible();

    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
    expect(prepareM3Mock).toHaveBeenCalledWith({
      projectId: "prj:sealed",
      decisionId: "dec:sealed-pursue",
    });
    // Exact-shape assertion above already forbids extra keys; assert the
    // dangerous ones explicitly so a regression names itself.
    const sent = prepareM3Mock.mock.calls[0]![0] as Record<string, unknown>;
    expect(Object.keys(sent).sort()).toEqual(["decisionId", "projectId"]);
    for (const forbidden of [
      "targetPath",
      "operation",
      "qualifiedOperationKind",
      "requestedOperation",
      "authority",
      "canActAsMorris",
      "claimedAuthorityLevel",
      "real",
      "mode",
      "command",
    ]) {
      expect(sent).not.toHaveProperty(forbidden);
    }
    // The sandbox PREPARE application path was never touched.
    expect(prepareContractMock).not.toHaveBeenCalled();

    // RC-02 — technical codes under details; business headline primary.
    expect(screen.getByTestId("w2-contract-now-title")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target")).toHaveTextContent(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository")).toHaveTextContent(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:cursor.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      "xct:sealed-docs-write",
    );

    // Pass04 — PREPARE done; inspection remains explicit; PREPARE not offered again.
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      /NON INSPECTÉ/i,
    );
    expect(inspectMock).not.toHaveBeenCalled();
  });

  it("refuse on a sealed subject exposes no PREPARE path at all", async () => {
    const proposalId = "prop:f2:sealed-refuse";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-refuse",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      }),
    );

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:sealed-refuse" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_REFUSE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    expect(screen.getByTestId("w2-refuse-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("a Proposal pursue without linked DecisionBasis fails closed (never sandbox)", async () => {
    const proposalId = "prop:f2:unlinked";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    const unlinked = proposalDecision({
      decisionId: "dec:unlinked",
      proposalId,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    decideMock.mockResolvedValue({
      ...unlinked,
      decision: { ...unlinked.decision, decisionBasisLinked: false },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:unlinked" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    // Proposal subject still owns the journey — fail closed, no sandbox fallback.
    expect(screen.getByTestId("w2-proposal-prepare-blocked")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-prepare-blocked").textContent).toMatch(
      /base d.exécution exploitable/i,
    );
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("EC rehydration — fresh mount projects durable EC + incomplete inspection; hides instruct", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contract: {
        executionContractId: "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        version: 2,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        requiredAuthority: "MORRIS",
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp-campaign",
        effectConfirmationRequired: true,
        effectConfirmationLevel: null,
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          createOrModify: true,
          noDelete: true,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          reversibility: "reversible",
          contractVersion: 2,
          executionContractId:
            "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
          semanticFingerprint: "fp-campaign",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        contractVersion: 2,
        semanticFingerprint: "fp-campaign",
        statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: 2,
        staleAttestationRef: "insp:05042f3b6040838e",
        reinspectionRequired: true,
        reason: "inspected_facts_incomplete",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6" />);

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action").textContent).toBe(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target").textContent).toBe(
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-status").textContent).toMatch(
      /Confirmation requise/i,
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
  });

  it("D01 — legacy PREPARE_ONLY EC shows Actualiser CTA; hides generic PREPARE; rematerialize projects successor", async () => {
    const decisionId = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
    const originalId = `xct:m3:${decisionId}`;
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: decisionId,
      contract: {
        executionContractId: originalId,
        version: 3,
        status: "confirmed",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        requiredAuthority: "MORRIS",
        constraints: [
          "PREPARE_ONLY",
          "NO_CURSOR_REAL",
          "NO_ATTEMPT",
          "NO_GATE_D",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "irreversible",
        semanticFingerprint: "fp-legacy",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N3",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          createOrModify: true,
          noDelete: true,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          reversibility: "irreversible",
          contractVersion: 3,
          executionContractId: originalId,
          semanticFingerprint: "fp-legacy",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: originalId,
        contractVersion: 3,
        semanticFingerprint: "fp-legacy",
        statusLabel: "INSPECTÉ · inspecter n'autorise pas",
        inspectionSufficient: true,
        attestationRef: "insp:legacy",
        attestedVersion: 3,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: null,
        grantsAuthority: false,
      },
    });

    resolveLegacyMock.mockResolvedValue({
      ok: true,
      status: "ok",
      mode: "m3_legacy_docs_write_resolved",
      presentation: "unconfirmed",
      text: "ok",
      project: { projectId: "prj:legacy" },
      ephemeralNotice: "notice",
      f3: {
        turnKind: "f3_m3_legacy_docs_write_resolved",
        mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
        decisionId,
        projectId: "prj:legacy",
        original: {
          executionContractId: originalId,
          version: 3,
          status: "superseded",
        },
        successor: {
          executionContractId: `xct:m3-res:${decisionId}`,
          version: 1,
          status: "confirmation_required",
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          scope: "studio.gcec.docs_write",
          requiredAuthority: "MORRIS",
          constraints: ["BOUNDED DOCS-WRITE", "GATE D REQUIRED"],
          stopConditions: ["GATE_D_REQUIRED"],
          requiredCapabilities: ["cap:cursor.docs_write"],
          reversibility: "reversible",
          supersedesExecutionContractId: originalId,
          supersessionReason: "bounded docs-write",
          semanticFingerprint: "fp-successor",
          evidenceRequirements: [],
          inspectionDisclosure: {
            action: "cursor.docs_write.apply",
            technicalTarget: "workspace.isolated.docs_write",
            scope: "studio.gcec.docs_write",
            targetRepositoryRef: "mcleland147/sfia-workspace",
            targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
            scopeIn: ["projects/sfia-studio/.sandbox"],
            scopeOut: [],
            createOrModify: true,
            noDelete: true,
            objective: null,
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            evidenceRequirements: [],
            requiredAuthority: "MORRIS",
            requiredCapabilities: ["cap:cursor.docs_write"],
            constraints: ["BOUNDED DOCS-WRITE"],
            stopConditions: ["GATE_D_REQUIRED"],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: `xct:m3-res:${decisionId}`,
            semanticFingerprint: "fp-successor",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        reusedFromIdempotency: false,
        executionPerformed: false,
        attemptCreated: false,
        confirmationRequired: true,
        realExecution: false,
        disclosures: [],
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:legacy-remat" />);
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(
      await screen.findByTestId("w2-legacy-docs-write-rematerialize"),
    ).toBeVisible();
    expect(
      screen.getByTestId("w2-rematerialize-legacy-docs-write"),
    ).toBeVisible();

    fireEvent.click(screen.getByTestId("w2-rematerialize-legacy-docs-write"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /CONTRAT ACTUALISÉ/i,
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "studio.gcec.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      `xct:m3-res:${decisionId}`,
    );
    expect(screen.queryByTestId("w2-legacy-docs-write-rematerialize")).toBeNull();
    expect(resolveLegacyMock).toHaveBeenCalledWith({
      projectId: "prj:legacy-remat",
      decisionId,
    });
    expect(prepareM3Mock).not.toHaveBeenCalled();
  });

  it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
    let resolveContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValue(
      new Promise((resolve) => {
        resolveContinuity = resolve;
      }),
    );

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:pending-continuity" />);
    await waitFor(() => {
      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();

    resolveContinuity({ ok: true, kind: "none" });
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — continuity error/ambiguity hides instruct and shows fail-closed", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:ambiguous-continuity" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Plusieurs contrats/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("EC rehydration — kind none + subject none still shows Instruire after both resolve", async () => {
    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:none-none" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — bound subject + active EC conflict fails closed", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: {
        optionSetRef: "optset:conflict",
        cycleTypeId: "cyc:framing",
        recommendedProfile: "Light",
        decisionSubjectMode: "proposal",
        proposalId: "prop:f2:conflict",
        promotesProjectTrajectory: false,
        options: [
          {
            kind: "OPTION",
            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
            label: "Poursuivre",
            intent: "Poursuivre le sujet",
            impacts: ["HumanDecision"],
            recommended: true,
          },
        ],
        recommendation: {
          kind: "RECOMMENDATION",
          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          rationale: "test",
        },
        epistemicRefs: [],
        proposedTrajectory: null,
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
        ckcCognitionCompletedBeforeMutation: true,
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:conflict",
      contract: {
        executionContractId: "xct:conflict",
        version: 1,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "s",
        requiredAuthority: "MORRIS",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: [],
        reversibility: "reversible",
        semanticFingerprint: "fp",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "s",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: null,
          scopeOut: null,
          createOrModify: null,
          noDelete: null,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: null,
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: [],
          constraints: [],
          stopConditions: [],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:conflict",
          semanticFingerprint: "fp",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: "xct:conflict",
        contractVersion: 1,
        semanticFingerprint: "fp",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:conflict" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Contradiction/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
  });

  it("EC rehydration micro — subject ERROR does not invoke governed continuity or expose EC actions", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:subject-error-blocks-ec" />);

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });

  it("EC rehydration micro — refresh subject pending disables governed EC mutating actions", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-inspect-contract")).toBeEnabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeEnabled();

    let resolveSubject: (value: unknown) => void = () => {};
    readActiveDecisionSubjectMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubject = resolve;
      }),
    );

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
    });

    expect(screen.getByTestId("w2-inspect-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();

    resolveSubject({ ok: true, kind: "none" });
  });

  it("EC rehydration micro — active then authoritative none clears stale EC card", async () => {
    readGovernedExecutionContinuityMock
      .mockResolvedValueOnce(campaignActiveContinuityResult())
      .mockResolvedValue({ ok: true, kind: "none" });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:active-then-none"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:active-then-none"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-contract")).toBeNull();
    });
    expect(screen.queryByTestId("w2-contract-exact-target")).toBeNull();
    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("final fail-closed — stale OptionSet + subject ERROR blocks Decision mutation", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-opt"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-optionset-subject-error"
        durableRefreshSignal={0}
      />,
    );

    const decideBtn = await screen.findByTestId(
      `w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`,
    );
    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    expect(decideBtn).toBeInTheDocument();

    const continuityCallsBeforeRefresh =
      readGovernedExecutionContinuityMock.mock.calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-optionset-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    // Stale OptionSet may remain visible informationally.
    expect(screen.getByTestId("w2-options")).toBeVisible();
    expect(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeDisabled();
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    // No additional governed continuity read while subject errored.
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsBeforeRefresh,
    );
  });

  it("final fail-closed — stale Decision + subject ERROR blocks Proposal PREPARE", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-dec"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-prop:stale-prepare",
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-16T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:stale-dec",
      },
      trajectory: null,
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-decision-prepare-block"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();
    prepareM3Mock.mockClear();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-decision-prepare-block"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — bound subject + EC continuity pending blocks Decision", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:ec-pending"),
    });
    let resolveContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValue(
      new Promise((resolve) => {
        resolveContinuity = resolve;
      }),
    );

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:bound-ec-pending" />);

    const decideBtn = await screen.findByTestId(
      `w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`,
    );
    expect(decideBtn).toBeDisabled();
    fireEvent.click(decideBtn);
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();

    resolveContinuity({ ok: true, kind: "none" });

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
  });

  it("final fail-closed — stale governed ACTIVE result ignored after newer subject ERROR", async () => {
    let resolveStaleContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveStaleContinuity = resolve;
      }),
    );

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-ec-after-subject-error"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(readGovernedExecutionContinuityMock).toHaveBeenCalledTimes(1);
    });
    const continuityCallsAfterFirst = readGovernedExecutionContinuityMock.mock
      .calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-ec-after-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    // Refresh must NOT start another governed read before subject is ready.
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsAfterFirst,
    );

    resolveStaleContinuity(campaignActiveContinuityResult());

    await waitFor(() => {
      expect(screen.queryByTestId("w2-contract")).toBeNull();
    });
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });

  it("final fail-closed — later READY pass recovers durable EC after subject ERROR", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:recover-after-subject-error"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:recover-after-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );
    expect(screen.getByTestId("w2-inspect-contract")).toBeEnabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — stale lost Reformuler disabled while subject refresh pending", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-pending"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-reformulate-pending"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    const reformulateBtn = await screen.findByTestId("w2-reformulate-with-nora");
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    expect(reformulateBtn).toBeInTheDocument();

    let resolveSubject: (value: unknown) => void = () => {};
    readActiveDecisionSubjectMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubject = resolve;
      }),
    );

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-reformulate-pending"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
    });

    expect(screen.getByTestId("w2-reformulate-with-nora")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();

    resolveSubject({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-pending"],
      recoverableProposalIds: [],
    });
  });

  it("final fail-closed — stale lost Reformuler disabled on subject ERROR", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-error"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-reformulate-error"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    const continuityCallsBeforeRefresh =
      readGovernedExecutionContinuityMock.mock.calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:stale-reformulate-error"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(screen.getByTestId("w2-reformulate-with-nora")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).not.toHaveBeenCalled();
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsBeforeRefresh,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — latest READY lost pass re-enables Reformuler", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:reformulate-recover"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:current-lost"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:reformulate-recover"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).toHaveBeenCalledTimes(1);
    expect(reformulate).toHaveBeenCalledWith("prop:f2:current-lost");
  });

  it("subject-none — stale Proposal OptionSet invalidated before HumanDecision", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-none"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-clears-proposal"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    expect(screen.queryByTestId("w2-decision")).toBeNull();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-clears-proposal"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-options")).toBeNull();
    });
    expect(
      screen.queryByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("subject-none — generic ProjectTrajectory OptionSet preserved", async () => {
    proposeMock.mockResolvedValue(genericTrajectoryOptionSet());
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-keeps-generic"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
      ).toBeEnabled();
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-keeps-generic"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
      ).toBeEnabled();
    });
    expect(proposeMock).toHaveBeenCalledTimes(1);
  });

  it("subject-none — recorded HumanDecision + Proposal PREPARE preserved", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:decided-none"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-prop:decided-none",
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-16T14:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:decided-none",
      },
      trajectory: null,
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-keeps-decision"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-keeps-decision"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decided-option")).toBeVisible();
    expect(screen.getByTestId("w2-decided-option").textContent?.length).toBeGreaterThan(0);
    await waitFor(() => {
      expect(screen.queryByTestId("w2-options")).toBeNull();
    });
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    prepareM3Mock.mockClear();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(decideMock).toHaveBeenCalledTimes(1);
  });

  it("subject-none — successful latest none clears stale subject-read error", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-clears-error"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface decisionWorkflowMode="legacy_cta"
        projectId="prj:subject-none-clears-error"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-error")).toBeNull();
    });
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(inspectMock).not.toHaveBeenCalled();
  });
});

function boundProposalOptionSet(proposalId: string) {
  return {
    optionSetRef: `optset:${proposalId}`,
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "proposal" as const,
    proposalId,
    promotesProjectTrajectory: false,
    options: [
      {
        kind: "OPTION" as const,
        optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        label: "Poursuivre le sujet proposé",
        intent: "Continuer",
        impacts: ["HumanDecision"],
        recommended: true,
      },
      {
        kind: "OPTION" as const,
        optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
        label: "Ne pas poursuivre / refuser",
        intent: "Refuser",
        impacts: [],
        recommended: false,
      },
    ],
    recommendation: {
      kind: "RECOMMENDATION" as const,
      recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      rationale: "Continuer.",
    },
    epistemicRefs: [],
    proposedTrajectory: null,
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  };
}

function genericTrajectoryOptionSet() {
  return {
    ok: true as const,
    optionSetRef: "optset:w2-generic-trajectory",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    decisionSubjectMode: "trajectory" as const,
    proposalId: null,
    promotesProjectTrajectory: true,
    options: [
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:bounded-direct",
        label: "Trajectoire bornée directe",
        intent: "Cadrer un périmètre réversible",
        impacts: ["Chemin plus court"],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:trajectory:bounded-direct",
      rationale: "Aucun signal critique.",
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
    },
    epistemicRefs: [],
    proposedTrajectory: {
      trajectoryId: "trj:w2-generic",
      version: 1,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  };
}

function campaignActiveContinuityResult() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
    contract: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      version: 2,
      status: "confirmation_required",
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY"],
      stopConditions: ["AUTHORITY_DENIED"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      reversibility: "reversible",
      semanticFingerprint: "fp-campaign",
      effectConfirmationRequired: true,
      effectConfirmationLevel: null,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        targetRepositoryRef: "mcleland147/sfia-workspace",
        targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        scopeIn: ["projects/sfia-studio/.sandbox"],
        scopeOut: [],
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: [
          "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        ],
        evidenceRequirements: [],
        requiredAuthority: "MORRIS",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        semanticFingerprint: "fp-campaign",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contractVersion: 2,
      semanticFingerprint: "fp-campaign",
      statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
      inspectionSufficient: false,
      attestationRef: null,
      attestedVersion: 2,
      staleAttestationRef: "insp:05042f3b6040838e",
      reinspectionRequired: true,
      reason: "inspected_facts_incomplete",
      grantsAuthority: false,
    },
  };
}

```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`
(no baseline — full content)

```ts
/**
 * CR-PCONT-05 — TrajectorySurface post-execution recovery OptionSet preserves
 * Attempt / ProductOutcome / postEvidence and does not raise a false Proposal
 * conflict for project_trajectory. True Proposal + current EC stays fail-closed.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  reconcileMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  reconcileMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...args: unknown[]) =>
    materializeMock(...args),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:mock",
      activeCycleInstanceId: null,
      executionContractId: null,
      executionContractVersion: null,
      executionContractStatus: null,
      attemptId: null,
      attemptStatus: null,
      stage: "PRE_EXECUTION",
      productOutcome: null,
      evidenceId: null,
      reviewBundleId: null,
      claimEvaluationId: null,
      claimEvaluationStatus: null,
      postEvidencePresent: false,
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const ATTEMPT_ID = "xat:pcont-ui:succeeded";

function recoveryTrajectoryOptionSet() {
  return {
    ok: true as const,
    optionSetRef: "optset:w2-recovery-ui",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "project_trajectory" as const,
    proposalId: null,
    promotesProjectTrajectory: true,
    options: [
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:governed-gated",
        label: "Préparer une nouvelle tentative gouvernée",
        intent: "À partir du STOP durable / arrêt gouverné",
        impacts: ["Attempt succeeded: xat:pcont-ui:succeeded", "productOutcome: UNCLAIMED"],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:bounded-direct",
        label: "Replanifier ou suspendre sans relance immédiate",
        intent: "Conserver le succès technique",
        impacts: ["Pas de relance Execute"],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:clarify-first",
        label: "Diagnostiquer / clarifier avant nouvelle tentative",
        intent: "Approfondir le diagnostic",
        impacts: [],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:trajectory:clarify-first",
      rationale: "Épisode post-Evidence UNCLAIMED — diagnostiquer.",
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
    },
    epistemicRefs: [],
    proposedTrajectory: {
      trajectoryId: "trj:pcont-ui",
      version: 2,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    reconcileMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:pcont-ui",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:pcont-ui",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
  it("preserves Attempt/ProductOutcome/postEvidence after project_trajectory proposeOptions; no false Proposal conflict", async () => {
    proposeMock
      .mockResolvedValueOnce({
        ok: true,
        optionSetRef: "optset:w2-framing",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        decisionSubjectMode: "project_trajectory",
        options: [
          {
            kind: "OPTION",
            optionRef: "opt:trajectory:bounded-direct",
            label: "Trajectoire bornée directe",
            intent: "Cadrer",
            impacts: [],
            reservations: [],
            steps: [],
          },
        ],
        recommendation: {
          label: "RECOMMANDATION — PAS UNE DÉCISION",
          recommendedOptionRef: "opt:trajectory:bounded-direct",
          rationale: "Bornée.",
          isHumanDecision: false,
          promotesTrajectory: false,
          ckcAttribution: null,
        },
        epistemicRefs: [],
        proposedTrajectory: {
          trajectoryId: "trj:pcont-ui",
          version: 1,
          status: "candidate",
          statusLabel: "TRAJECTOIRE PROPOSÉE",
          isCurrent: false,
        },
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
      })
      .mockResolvedValueOnce(recoveryTrajectoryOptionSet());

    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:pcont-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-20T04:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:pcont-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:pcont-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:pcont-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:pcont-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "fp:pcont-ui",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      semanticFingerprint: "fp:pcont-ui",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:pcont-ui",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });

    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      status: "confirmed",
    });

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ — EXÉCUTION ÉLIGIBLE",
      reasonCode: "authorized",
      reasonText: "Autorisé.",
      nextAction: "Exécuter",
      executionEligible: true,
      executionEligibilityReasonCode: "eligible",
      inspection: {
        executionContractId: "xct:pcont-ui",
        contractVersion: 1,
        semanticFingerprint: "fp:pcont-ui",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:pcont-ui",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cnf:pcont-ui",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: ["agent:fixture"],
        sufficientAgentRef: "agent:fixture",
        reason: "ok",
        statusLabel: "SUFFISANT",
      },
      authorityReceiptRef: "avr:pcont-ui",
      decisionRefs: ["dec:pcont-ui"],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionPerformed: false,
      attemptCreated: false,
    });

    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "execute",
      transitionsApplied: [
        "governedExecuteAuthorizedContract",
        "materializeW3bProductTerminal",
      ],
      stoppedReason: "stable",
      projection: {
        projectId: "proj-pcont-ui",
        activeCycleInstanceId: null,
        executionContractId: "xct:pcont-ui",
        executionContractVersion: 1,
        executionContractStatus: "confirmed",
        attemptId: ATTEMPT_ID,
        attemptStatus: "succeeded",
        stage: "POST_EVIDENCE_COMPLETE",
        productOutcome: "NOT_PROVEN",
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        claimEvaluationStatus: "not_proven",
        postEvidencePresent: true,
        nextDeterministicAction: "HUMAN_DECISION_REQUIRED",
        humanDecisionRequired: true,
        recoveryRequired: false,
        reason: "Post-Evidence complete",
        blockingCode: null,
        context: null,
      },
      product: {
        outcome: "UNCLAIMED",
        businessHeadline:
          "Exécution technique réussie — résultat produit non prouvé",
        businessReason: "ClaimEvaluation not_proven",
        claimAllowed: false,
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        claimEvaluationStatus: "not_proven",
        contractResultVerdict: "NOT_PROVEN",
        evidenceStatus: "available",
        evidenceSummary: "Artifact available",
        reviewBundleCompleteness: "partial",
        governedBoundary: "Fake docs_write",
        technicalDetail: {
          attemptId: ATTEMPT_ID,
          attemptStatus: "succeeded",
          resultRef: "res:pcont-ui",
          errorRef: null,
          stopReason: null,
          executionContractId: "xct:pcont-ui",
          executionContractVersion: 1,
        },
        reservations: [],
        antiClaims: {
          ready: false,
          w3Closed: false,
          productCompletionComplete: false,
          runtimeV3Adopted: false,
          realProven: false,
          cycleAutoClosed: false,
          projectAutoArchived: false,
        },
        cycleInstanceClosed: false,
        projectArchived: false,
        noraInvoked: false,
        replanInvoked: false,
        realExecution: false,
      },
      postEvidence: {
        ok: true,
        recommendation: {
          kind: "clarify",
          headline: "Diagnostiquer le gap Evidence",
          rationale: "NOT_PROVEN — diagnostiquer le gap Evidence.",
          nextStep: "Revoir les expectedOutputs",
          requiresHumanDecision: true,
        },
        analysisText: "Analyse post-Evidence",
        noraInvoked: true,
        lpsVersion: 3,
        executionReport: {
          cursorStatus: "succeeded",
          workPerformedSummary: "Wrote functional design",
          artifactsSummary: "créé:docs/x.md",
          validationsSummary: null,
          blockersSummary: null,
          reservationsSummary: null,
          artifactReviewCompleteness: "FULL",
        },
      },
    });

    executeSelectMock.mockResolvedValue({
      ok: true,
      phase: "accepted",
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      attemptId: ATTEMPT_ID,
      attemptStatus: "accepted",
      selectedAgentRef: "agent:fixture",
      adapterId: "fixture",
      selectionProfile: "fixture",
      statusLabel: "AGENT SÉLECTIONNÉ",
      attempt: {
        attemptId: ATTEMPT_ID,
        attemptStatus: "accepted",
        adapterId: "fixture",
        selectedAgentRef: "agent:fixture",
        resultRef: null,
        errorRef: null,
        stopReason: null,
      },
    });

    executeStartMock.mockResolvedValue({
      ok: true,
      phase: "terminal",
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      attemptId: ATTEMPT_ID,
      attemptStatus: "succeeded",
      selectedAgentRef: "agent:fixture",
      adapterId: "fixture",
      selectionProfile: "fixture",
      statusLabel: "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
      attempt: {
        attemptId: ATTEMPT_ID,
        attemptStatus: "succeeded",
        adapterId: "fixture",
        selectedAgentRef: "agent:fixture",
        resultRef: "res:pcont-ui",
        errorRef: null,
        stopReason: null,
      },
    });

    materializeMock.mockResolvedValue({
      ok: true,
      reusedFromIdempotency: false,
      product: {
        outcome: "UNCLAIMED",
        businessHeadline:
          "Exécution technique réussie — résultat produit non prouvé",
        businessReason: "ClaimEvaluation not_proven",
        claimAllowed: false,
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        claimEvaluationStatus: "not_proven",
        contractResultVerdict: "NOT_PROVEN",
        evidenceStatus: "available",
        evidenceSummary: "Artifact available",
        reviewBundleCompleteness: "partial",
        governedBoundary: "Fake docs_write",
        technicalDetail: {
          attemptId: ATTEMPT_ID,
          attemptStatus: "succeeded",
          resultRef: "res:pcont-ui",
          errorRef: null,
          stopReason: null,
          executionContractId: "xct:pcont-ui",
          executionContractVersion: 1,
        },
        reservations: [],
        antiClaims: {
          ready: false,
          w3Closed: false,
          productCompletionComplete: false,
          runtimeV3Adopted: false,
          realProven: false,
          cycleAutoClosed: false,
          projectAutoArchived: false,
        },
        cycleInstanceClosed: false,
        projectArchived: false,
        noraInvoked: false,
        replanInvoked: false,
        realExecution: false,
      },
      postEvidence: {
        ok: true,
        noraInvoked: false,
        replanInvoked: false,
        analysisText: null,
        analysisUnavailableReason: "deterministic_skip",
        analysisProviderId: null,
        recommendation: {
          kind: "recover",
          headline: "Recovery post-Evidence requise",
          rationale: "UNCLAIMED — diagnostiquer avant relance",
          nextStep: "recovery_diagnose_or_replan",
          requiresHumanDecision: true,
          authority: "none",
          gateConsumed: false,
          decisionCreated: false,
          attemptAutoLaunchNextCycle: false,
          recommendNextGateStatus: null,
          nextActionCode: null,
        },
        lpsVersion: 4,
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        productOutcome: "UNCLAIMED",
        executionReport: {
          cursorStatus: "succeeded",
          workPerformedSummary: "Wrote functional design",
          artifactsSummary: "créé:docs/functional-design.md",
          validationsSummary: "file_exists:pass",
          blockersSummary: null,
          reservationsSummary: "claim_only",
          artifactReviewCompleteness: "FULL",
        },
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:pcont-ui" />);

    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    await screen.findByTestId("w2-decision");

    // D2-A — BOUNDED auto-PREPARE (same as GOVERNED); no mandatory sandbox CTA.
    await screen.findByTestId("w2-contract");
    // Pass04 — continuity must expose required facts for exam; PREPARE does not attest.
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:pcont-ui",
      contract: {
        executionContractId: "xct:pcont-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "fp:pcont-ui",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
        inspectionDisclosure: {
          action: "product:generate-temporary-artifact",
          technicalTarget: "product:project-workspace",
          scope: "product:temporary-local-artifact",
          targetRepositoryRef: null,
          targetPath: null,
          scopeIn: null,
          scopeOut: null,
          createOrModify: null,
          noDelete: null,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: null,
          sourceGrounding: null,
          acceptanceCriteria: null,
          validationPlan: null,
          reportRequirements: null,
          evidenceRequirements: [],
          requiredAuthority: "N1",
          requiredCapabilities: ["cap:product-temp-artifact"],
          constraints: ["PRODUCT_GOVERNED"],
          stopConditions: [],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:pcont-ui",
          semanticFingerprint: "fp:pcont-ui",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: "xct:pcont-ui",
        contractVersion: 1,
        semanticFingerprint: "fp:pcont-ui",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      requiredInspectedFacts: [
        "action",
        "target",
        "scope",
        "requiredAuthority",
        "requiredCapabilities",
        "constraints",
        "stopConditions",
        "reversibility",
        "evidenceRequirements",
        "semanticFingerprint",
      ],
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(
      await screen.findByTestId("w2-trajectory-inspection-panel"),
    ).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
    await screen.findByTestId("w2-inspection-state");
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    fireEvent.click(screen.getByTestId("w2-confirm-contract"));
    await waitFor(() => {
      expect(confirmMock).toHaveBeenCalled();
    });
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w3a-governed-execute")).toBeVisible();
    fireEvent.click(screen.getByTestId("w3a-governed-execute"));

    expect(await screen.findByTestId("w3a-attempt")).toBeVisible();
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    await waitFor(() => {
      expect(
        screen.getByTestId("w3a-attempt-technical-status"),
      ).toHaveTextContent("succeeded");
    });
    expect(await screen.findByTestId("w3b-product-outcome")).toBeVisible();
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3b-execution-report")).toBeVisible();
    expect(screen.getByTestId("w3b-execution-report-status")).toHaveTextContent(
      "succeeded",
    );
    expect(screen.getByTestId("w3b-execution-report-work")).toHaveTextContent(
      "Wrote functional design",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(executeCompleteMock).not.toHaveBeenCalled();

    // Post-execution: continuity none (EC not pre-execution current).
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });

    // Canonical recovery CTA (not the generic instruct CTA, which stays hidden
    // while a decided contract still owns the framing subject).
    const recoveryPropose = await screen.findByTestId("w3c-propose-trajectory");
    expect(recoveryPropose).toHaveTextContent(
      "Proposer des options de trajectoire",
    );
    fireEvent.click(recoveryPropose);
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getByTestId("w2-decision-subject-trajectory")).toBeVisible();

    // CR-PCONT-05 — Attempt / ProductOutcome / postEvidence preserved.
    expect(screen.getByTestId("w3a-attempt")).toBeVisible();
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(screen.queryByTestId("w2-error")).toBeNull();
    expect(screen.queryByText(/Contradiction de continuité/)).toBeNull();
    expect(reconcileMock).toHaveBeenCalled();
    expect(executeSelectMock).toHaveBeenCalledTimes(0);
    expect(proposeMock).toHaveBeenCalledTimes(2);
    expect(proposeMock.mock.calls[1]![0]).toEqual(
      expect.objectContaining({ projectId: "prj:pcont-ui" }),
    );
  });

  it("true Proposal decisionSubjectMode=proposal + current pre-execution EC stays fail-closed conflict", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: {
        optionSetRef: "optset:w2-proposal-conflict",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Critical",
        decisionSubjectMode: "proposal",
        proposalId: "prop:f2:conflict",
        promotesProjectTrajectory: false,
        options: [
          {
            kind: "OPTION",
            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
            label: "Poursuivre",
            intent: "Continuer",
            impacts: [],
            reservations: [],
            steps: [],
          },
        ],
        recommendation: {
          label: "RECOMMANDATION — PAS UNE DÉCISION",
          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          rationale: "Proposal.",
          isHumanDecision: false,
          promotesTrajectory: false,
          ckcAttribution: null,
        },
        epistemicRefs: [],
        proposedTrajectory: null,
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:pre-exec",
      contract: {
        executionContractId: "xct:pre-exec",
        version: 1,
        status: "confirmed",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs/",
        requiredAuthority: "N3",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp:pre",
        effectConfirmationRequired: false,
        effectConfirmationLevel: null,
        inspectionDisclosure: null,
      },
      inspection: {
        executionContractId: "xct:pre-exec",
        contractVersion: 1,
        semanticFingerprint: "fp:pre",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:pre",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface decisionWorkflowMode="legacy_cta" projectId="prj:true-proposal-conflict" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /Contradiction de continuité/,
    );
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /Proposal non résolu/,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});

```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r03.contextFreshness.ui.test.tsx`
(no baseline — full content)

```ts
/** @vitest-environment jsdom */
/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03 — R3 CTX async freshness.
 */
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  lifecycleProjectionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/project-assistant/synthesisActions", () => ({
  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
    ok: true,
    synthesis: null,
    count: 0,
  })),
  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  getProductSynthesisAction: vi.fn(),
  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  materializeProductSynthesisFromLineageAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:ctx",
      activeCycleInstanceId: null,
      executionContractId: null,
      executionContractVersion: null,
      executionContractStatus: null,
      attemptId: null,
      attemptStatus: null,
      stage: "PRE_EXECUTION",
      productOutcome: null,
      evidenceId: null,
      reviewBundleId: null,
      claimEvaluationId: null,
      claimEvaluationStatus: null,
      postEvidencePresent: false,
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: vi
    .fn()
    .mockResolvedValue({ ok: true, kind: "none" }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: true,
    history: {
      projectId: "prj:ctx",
      cycle: {
        activeCycleInstanceId: null,
        cycleTypeId: null,
        profile: null,
        status: null,
      },
      trajectory: { versions: [] },
      decisions: [],
      contracts: [],
      absent: [],
    },
  }),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => null,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));
vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);
vi.mock("@/features/pre-m6-product-ui/ProductRailRecents", () => ({
  ProductRailRecents: () => (
    <div data-testid="studio-rail-recents-stub">Projets récents</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ExecutionSurface", () => ({
  ExecutionSurface: () => <div data-testid="execution-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/SynthesesSurface", () => ({
  SynthesesSurface: () => <div data-testid="syntheses-stub" />,
}));

function deferred<T>() {
  let resolve!: (v: T) => void;
  let reject!: (e: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function minimalLifecycleProjection(activeCycleInstanceId: string | null) {
  return {
    activeCycleInstanceId,
    selectedCycleInstanceId: activeCycleInstanceId,
    activeCycle: activeCycleInstanceId
      ? {
          cycleInstanceId: activeCycleInstanceId,
          createdAt: "2026-10-01T00:00:00.000Z",
          status: "active",
        }
      : null,
    pausedCycles: [] as const,
    terminalCycles: [] as const,
    candidateCycles: [] as const,
    cycleReservations: [] as const,
    cycleWorkRecommendations: [] as const,
    cycleDecisions: [] as const,
    reservationSummary: { activeCount: 0 },
  };
}

function runtimeFor(projectId: string) {
  return {
    ok: true as const,
    project: {
      projectId,
      name: `Project ${projectId}`,
      shortReference: "P3",
      objective: "ctx freshness",
      contextSummary: "ctx",
      criticality: "STANDARD",
      constraints: [],
      localMode: true,
      source: "REAL_LOCAL_CORE",
      fixture: false,
      projectWorkspaceKey: null,
      repositoryBinding: null,
    },
    livingState: {
      id: `lps:${projectId}`,
      version: 3,
      createdAt: "2026-10-05T00:00:00.000Z",
      activeCycleInstanceId: null,
    },
    doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
    readiness: {
      status: "NOT_READY",
      hard: "OPEN",
      tA6: "INCOMPLETE",
      iam: "NOT_SELECTED",
      productPersistence: "SQLITE_OA_PRODUCT_STORE",
      realAgentExecution: "DISABLED",
      delivery: "NOT_AUTHORIZED",
      cutover: "NOT_AUTHORIZED",
      runReady: false,
      productReady: false,
    },
    disclosures: {},
  };
}

describe("P6 R03 — context freshness async", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    getProjectRuntimeActionMock.mockImplementation(async (id: string) =>
      runtimeFor(id),
    );
    useProductConversationMock.mockReturnValue({
      listRef: { current: null },
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      toolEvents: [],
      busy: false,
      error: null,
      send: vi.fn(),
      stop: vi.fn(),
      transcriptAvailability: "available",
      journalEntries: [],
      activeProposal: null,
      decisionSubjectContinuity: null,
      governedExecutionContinuity: null,
      refreshConversationContinuity: vi.fn(),
      armReservationInteractionContext: vi.fn(),
      clearReservationResolutionProposal: vi.fn(),
      setActiveView: vi.fn(),
    });
  });

  it("CTX05 — pending load never shows À jour prematurely", async () => {
    const d = deferred<{ ok: true; projection: { activeCycleInstanceId: string } }>();
    lifecycleProjectionMock.mockReturnValue(d.promise);

    render(
      <ProjectWorkspacePage projectId="prj:ctx-a" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /Lecture en cours/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );

    await act(async () => {
      d.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:1") as never,
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX01 — stale resolve for previous project is ignored", async () => {
    const first = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    const second = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();

    lifecycleProjectionMock.mockImplementation(
      ({ projectId }: { projectId: string }) => {
        if (projectId === "prj:ctx-old") return first.promise;
        return second.promise;
      },
    );

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-old" onProjectName={vi.fn()} />,
    );

    rerender(
      <ProjectWorkspacePage projectId="prj:ctx-new" onProjectName={vi.fn()} />,
    );

    await act(async () => {
      second.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:new"),
      });
    });

    await act(async () => {
      first.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:old"),
      });
    });

    await waitFor(() => {
      expect(lifecycleProjectionMock).toHaveBeenCalledWith(
        expect.objectContaining({ projectId: "prj:ctx-new" }),
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX02/CTX06 — failed refresh marks unavailable (not À jour)", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: false,
      code: "UNAVAILABLE",
      message: "fail",
    });

    render(
      <ProjectWorkspacePage projectId="prj:ctx-fail" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /À vérifier/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );
  });

  it("CTX01 — distinguishing projects uses observable cycle ids, not only À jour badge", async () => {
    lifecycleProjectionMock.mockImplementation(
      ({ projectId }: { projectId: string }) =>
        Promise.resolve({
          ok: true as const,
          projection: minimalLifecycleProjection(
            projectId === "prj:ctx-a" ? "cyc:alpha" : "cyc:beta",
          ),
        }),
    );

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-a" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    expect(lifecycleProjectionMock).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: "prj:ctx-a" }),
    );

    rerender(
      <ProjectWorkspacePage projectId="prj:ctx-b" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(lifecycleProjectionMock).toHaveBeenCalledWith(
        expect.objectContaining({ projectId: "prj:ctx-b" }),
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    const calls = lifecycleProjectionMock.mock.calls.map(
      (c) => (c[0] as { projectId: string }).projectId,
    );
    expect(calls).toEqual(expect.arrayContaining(["prj:ctx-a", "prj:ctx-b"]));
  });

  it("CTX03 — concurrent lifecycle resolves do not leave a stuck pending chip", async () => {
    const a = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    const b = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    let n = 0;
    lifecycleProjectionMock.mockImplementation(() => {
      n += 1;
      return n === 1 ? a.promise : b.promise;
    });

    render(
      <ProjectWorkspacePage projectId="prj:ctx-race" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /Lecture en cours/,
      );
    });

    await act(async () => {
      b.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:second"),
      });
      a.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:first"),
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX04/CTX08 — view navigation without Product mutation keeps currentness readable", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: true,
      projection: minimalLifecycleProjection("cyc:nav"),
    });
    render(
      <ProjectWorkspacePage projectId="prj:ctx-nav" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    const before = lifecycleProjectionMock.mock.calls.length;
    // Switching tabs is presentation-only when no durable refresh is forced.
    fireEvent.click(screen.getByTestId("project-tab-execution"));
    fireEvent.click(screen.getByTestId("project-tab-conversation"));
    expect(lifecycleProjectionMock.mock.calls.length).toBe(before);
    expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
      "À jour",
    );
  });

  it("CTX07 — remount after failed lifecycle refresh recovers to À jour", async () => {
    lifecycleProjectionMock
      .mockResolvedValueOnce({
        ok: false,
        code: "UNAVAILABLE",
        message: "fail",
      })
      .mockResolvedValueOnce({
        ok: true,
        projection: minimalLifecycleProjection("cyc:retry"),
      });

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-retry" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /À vérifier/,
      );
    });

    rerender(
      <ProjectWorkspacePage
        projectId="prj:ctx-retry"
        onProjectName={vi.fn()}
        key="retry-2"
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });
});

```
## Contenu intégral — fichiers créés Pass04
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/contractInspectionExam.ts`

```
/**
 * Pass04 — unified inspection exam helpers (presentation only).
 *
 * Source of required facts: OA `requiredInspectedFactsForContract` via W2 DTO.
 * No persistence. No authority. No second required-facts calculator.
 */

import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import {
  buildInspectionFactRowsFromDisclosure,
  type InspectionFactRow,
} from "./pilotExecutionPresentation";

/** Identity of the exam currently open — invalidate if any field changes. */
export type InspectionExamSnapshot = {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly version: number;
  readonly semanticFingerprint: string;
};

export type InspectionExamView = {
  readonly rows: readonly InspectionFactRow[];
  readonly missingRequired: readonly string[];
  readonly presentedFactIds: readonly string[];
  readonly disclosureIncomplete: boolean;
};

export function sameInspectionExamSnapshot(
  a: InspectionExamSnapshot | null | undefined,
  b: InspectionExamSnapshot | null | undefined,
): boolean {
  if (!a || !b) return false;
  return (
    a.projectId === b.projectId &&
    a.executionContractId === b.executionContractId &&
    a.version === b.version &&
    a.semanticFingerprint === b.semanticFingerprint
  );
}

/**
 * Build display rows from canonical disclosure + required fact IDs.
 * Refuses (disclosureIncomplete) when required list is null/absent.
 */
export function buildInspectionExamView(input: {
  readonly disclosure: ExecutionContractInspectionDisclosure | null | undefined;
  readonly requiredInspectedFacts: readonly string[] | null | undefined;
}): InspectionExamView {
  if (
    input.disclosure == null ||
    input.requiredInspectedFacts == null ||
    !Array.isArray(input.requiredInspectedFacts)
  ) {
    return {
      rows: [],
      missingRequired: ["INSPECTION_DISCLOSURE_INCOMPLETE"],
      presentedFactIds: [],
      disclosureIncomplete: true,
    };
  }
  return {
    ...buildInspectionFactRowsFromDisclosure({
      disclosure: input.disclosure,
      requiredInspectedFacts: input.requiredInspectedFacts,
    }),
    disclosureIncomplete: false,
  };
}

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel.tsx`

```
"use client";

/**
 * Pass04 — shared Pilot exam panel for required contract facts.
 *
 * Presentation only: renders canonical disclosure rows and an explicit Attest CTA.
 * Does not compute required facts, persist, or grant authority.
 * Consumers: ExecutionSurface, GovernedConfirmationCard, TrajectorySurface.
 */

import type { InspectionFactRow } from "./pilotExecutionPresentation";
import type { InspectionExamSnapshot } from "./contractInspectionExam";
import styles from "./ContractInspectionExamPanel.module.css";

export type ContractInspectionExamPanelProps = {
  /** Prefix for data-testid (e.g. project-execution, governed-confirmation, w2-trajectory). */
  readonly testIdPrefix: string;
  readonly snapshot: InspectionExamSnapshot;
  readonly rows: readonly InspectionFactRow[];
  readonly missingRequired: readonly string[];
  readonly presentedFactIds: readonly string[];
  readonly busy: boolean;
  readonly onAttest: () => void;
  readonly onDismiss?: () => void;
};

export function ContractInspectionExamPanel({
  testIdPrefix,
  snapshot,
  rows,
  missingRequired,
  presentedFactIds,
  busy,
  onAttest,
  onDismiss,
}: ContractInspectionExamPanelProps) {
  const canAttest =
    missingRequired.length === 0 && presentedFactIds.length > 0 && !busy;

  return (
    <section
      className={styles.panel}
      aria-labelledby={`${testIdPrefix}-inspection-title`}
      data-testid={`${testIdPrefix}-inspection-panel`}
      data-exam-project={snapshot.projectId}
      data-exam-contract={snapshot.executionContractId}
      data-exam-version={String(snapshot.version)}
      data-exam-fingerprint={snapshot.semanticFingerprint}
    >
      <h3
        className={styles.title}
        id={`${testIdPrefix}-inspection-title`}
      >
        Faits contractuels à examiner
      </h3>
      <p className={styles.note}>
        Ces faits proviennent de la disclosure durable. L’ouverture de ce
        panneau n’enregistre aucune attestation.
      </p>
      <p
        className={styles.identity}
        data-testid={`${testIdPrefix}-inspection-identity`}
      >
        Contrat {snapshot.executionContractId} · v{snapshot.version}
      </p>
      {missingRequired.length > 0 ? (
        <p
          className={styles.missing}
          data-testid={`${testIdPrefix}-inspection-missing`}
          role="alert"
        >
          Faits obligatoires non restituables : {missingRequired.join(", ")}
        </p>
      ) : null}
      <ul className={styles.list}>
        {rows.map((row) => (
          <li
            key={row.factId}
            className={styles.item}
            data-testid={`${testIdPrefix}-inspection-fact-${row.factId}`}
            data-fact-id={row.factId}
          >
            <span className={styles.label}>{row.label}</span>
            <span className={styles.value}>{row.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid={`${testIdPrefix}-attest`}
          disabled={!canAttest}
          aria-label="Attester l’examen des faits affichés"
          title="Atteste uniquement les faits affichés ci-dessus pour cette version."
          onClick={onAttest}
        >
          {busy ? "Attestation…" : "Attester l’examen"}
        </button>
        {onDismiss ? (
          <button
            type="button"
            className={styles.secondary}
            data-testid={`${testIdPrefix}-inspection-dismiss`}
            disabled={busy}
            onClick={onDismiss}
          >
            Fermer
          </button>
        ) : null}
      </div>
    </section>
  );
}

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel.module.css`

```
/* Pass04 — shared inspection exam panel (presentation only). */

.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.note {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.45;
  color: var(--pm6-muted);
}

.identity {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--pm6-muted-faint, var(--pm6-muted));
  word-break: break-all;
}

.missing {
  margin: 0;
  font-size: 0.75rem;
  color: var(--pm6-danger, #a33);
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 0;
  border-top: 1px solid var(--pm6-border, #e6ded5);
}

.label {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--pm6-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.value {
  font-size: 0.8125rem;
  color: var(--pm6-ink);
  line-height: 1.4;
  word-break: break-word;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.primary,
.secondary {
  box-sizing: border-box;
  width: 100%;
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
}

.primary {
  border: 0;
  background: #1f1a16;
  color: #fffdf9;
}

.primary:hover:not(:disabled) {
  background: #2a241f;
}

.secondary {
  border: 1px solid #d8cec4;
  background: transparent;
  color: var(--pm6-ink);
}

.primary:disabled,
.secondary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.primary:focus-visible,
.secondary:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring, 0 0 0 2px #1f1a16);
}

```
### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx`

```
/**
 * @vitest-environment jsdom
 *
 * STUDIO-P6-UNIFIED-INSPECTION-CONTRACT-04 — Groupe A/B deterministic proofs.
 * Real React surfaces + shared exam panel. Fake at W2 action boundary.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExecutionSurface } from "@/features/pre-m6-product-ui/surfaces/ExecutionSurface";
import { GovernedConfirmationCard } from "@/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  buildInspectionExamView,
  sameInspectionExamSnapshot,
} from "@/features/pre-m6-product-ui/surfaces/contractInspectionExam";

const {
  inspectMock,
  confirmMock,
  authorizeMock,
  reconcileMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readActiveDecisionSubjectMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
} = vi.hoisted(() => ({
  inspectMock: vi.fn(),
  confirmMock: vi.fn(),
  authorizeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi.fn().mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cyc:uic",
    hasCurrentNextCycleRecommendation: false,
  }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn().mockResolvedValue({
    ok: true,
    prepared: null,
  }),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const REQUIRED = [
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "evidenceRequirements",
  "semanticFingerprint",
  "inputs.targetRepositoryRef",
  "inputs.targetPath",
] as const;

function disclosure(overrides: Record<string, unknown> = {}) {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "docs sandbox",
    targetRepositoryRef: "acme/demo",
    targetPath: "projects/demo/out.md",
    scopeIn: null,
    scopeOut: null,
    createOrModify: true,
    noDelete: true,
    objective: null,
    artifactType: null,
    artifactBrief: null,
    contentRequirements: null,
    validationExpectations: null,
    expectedOutputs: null,
    sourceGrounding: null,
    acceptanceCriteria: null,
    validationPlan: null,
    reportRequirements: null,
    evidenceRequirements: [] as string[],
    requiredAuthority: "N2",
    requiredCapabilities: [] as string[],
    constraints: [] as string[],
    stopConditions: [] as string[],
    reversibility: "reversible",
    contractVersion: 1,
    executionContractId: "xct:uic",
    semanticFingerprint: "fp:uic-1",
    disclosureComplete: true,
    incompletenessCode: null,
    ...overrides,
  };
}

function contractDto(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: "xct:uic",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "docs sandbox",
    requiredAuthority: "N2",
    constraints: [] as string[],
    stopConditions: [] as string[],
    requiredCapabilities: [] as string[],
    reversibility: "reversible",
    semanticFingerprint: "fp:uic-1",
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N2",
    inspectionDisclosure: disclosure(),
    ...overrides,
  };
}

function inspectionInsufficient(): {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string;
  readonly attestedSemanticFingerprint: null;
  readonly statusLabel: "NON INSPECTÉ";
  readonly inspectionSufficient: false;
  readonly attestationRef: null;
  readonly attestedVersion: null;
  readonly staleAttestationRef: null;
  readonly reinspectionRequired: false;
  readonly reason: "no_attestation";
  readonly grantsAuthority: false;
} {
  return {
    executionContractId: "xct:uic",
    contractVersion: 1,
    semanticFingerprint: "fp:uic-1",
    attestedSemanticFingerprint: null,
    statusLabel: "NON INSPECTÉ",
    inspectionSufficient: false,
    attestationRef: null,
    attestedVersion: null,
    staleAttestationRef: null,
    reinspectionRequired: false,
    reason: "no_attestation",
    grantsAuthority: false,
  };
}

function inspectionOk() {
  return {
    executionContractId: "xct:uic",
    contractVersion: 1,
    semanticFingerprint: "fp:uic-1",
    attestedSemanticFingerprint: "fp:uic-1" as string | null,
    statusLabel: "INSPECTÉ" as const,
    inspectionSufficient: true as const,
    attestationRef: "att:uic",
    attestedVersion: 1,
    staleAttestationRef: null,
    reinspectionRequired: false as const,
    reason: "inspected" as const,
    grantsAuthority: false as const,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  inspectMock.mockReset();
  confirmMock.mockReset();
  authorizeMock.mockReset();
  reconcileMock.mockReset();
  deriveContinuityMock.mockReset();
  readCurrentContinuityMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();

  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:uic",
      activeCycleInstanceId: "cyc:uic",
      executionContractId: "xct:uic",
      executionContractVersion: 1,
      executionContractStatus: "confirmation_required",
      attemptId: null,
      attemptStatus: null,
      stage: "PRE_EXECUTION",
      productOutcome: null,
      evidenceId: null,
      reviewBundleId: null,
      claimEvaluationId: null,
      claimEvaluationStatus: null,
      postEvidencePresent: false,
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: null,
      blockingCode: null,
      context: null,
    },
  });
  readCurrentContinuityMock.mockResolvedValue({
    ok: true,
    kind: "active",
    decisionRef: null,
    contract: contractDto(),
    inspection: inspectionInsufficient(),
    requiredInspectedFacts: [...REQUIRED],
  });
  inspectMock.mockResolvedValue({ ok: true, ...inspectionOk() });
});

describe("Pass04 unified inspection — shared helpers (U04/U06/U07)", () => {
  it("U04 — buildInspectionExamView uses only canonical required facts", () => {
    const view = buildInspectionExamView({
      disclosure: disclosure({
        sourceGrounding: { kind: "repo", refs: ["r1"] },
        acceptanceCriteria: [
          { criterionId: "c1", statement: "ok", kind: "must" },
        ],
        validationPlan: ["step-a"],
        reportRequirements: ["report-1"],
      }),
      requiredInspectedFacts: [
        ...REQUIRED,
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ],
    });
    expect(view.disclosureIncomplete).toBe(false);
    expect(view.missingRequired).toEqual([]);
    expect(view.presentedFactIds).toEqual(
      expect.arrayContaining([
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ]),
    );
  });

  it("U06 — missing required fact blocks attestation payload", () => {
    const view = buildInspectionExamView({
      disclosure: disclosure({ targetPath: null }),
      requiredInspectedFacts: [...REQUIRED],
    });
    expect(view.missingRequired).toContain("inputs.targetPath");
    expect(view.presentedFactIds).not.toContain("inputs.targetPath");
  });

  it("U10/U11/U12 — snapshot identity comparison", () => {
    const a = {
      projectId: "p1",
      executionContractId: "x1",
      version: 1,
      semanticFingerprint: "fp1",
    };
    expect(sameInspectionExamSnapshot(a, { ...a })).toBe(true);
    expect(sameInspectionExamSnapshot(a, { ...a, version: 2 })).toBe(false);
    expect(
      sameInspectionExamSnapshot(a, { ...a, semanticFingerprint: "fp2" }),
    ).toBe(false);
    expect(
      sameInspectionExamSnapshot(a, { ...a, executionContractId: "x2" }),
    ).toBe(false);
    expect(sameInspectionExamSnapshot(a, { ...a, projectId: "p2" })).toBe(
      false,
    );
  });
});

describe("Pass04 — ExecutionSurface (U01/U05/U08/U09/U14/U15)", () => {
  it("U01/U08/U09 — open without write; attest presented facts only", async () => {
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-execution-inspect"));
    expect(
      await screen.findByTestId("project-execution-inspection-panel"),
    ).toBeTruthy();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("project-execution-attest"));
    await waitFor(() => expect(inspectMock).toHaveBeenCalledTimes(1));
    const payload = inspectMock.mock.calls[0]![0] as {
      inspectedFacts: string[];
      expectedVersion: number;
    };
    expect(payload.expectedVersion).toBe(1);
    expect(payload.inspectedFacts).toEqual(
      expect.arrayContaining(["action", "inputs.targetPath"]),
    );
    expect(payload.inspectedFacts).not.toContain("inputs.sourceGrounding");
  });

  it("U14 — Confirm without inspection refuses and never inspects", async () => {
    readCurrentContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: null,
      contract: contractDto(),
      inspection: inspectionInsufficient(),
      requiredInspectedFacts: [...REQUIRED],
    });
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    });
    expect(inspectMock).not.toHaveBeenCalled();
    expect(confirmMock).not.toHaveBeenCalled();
  });

  it("U15 — Execute without inspection refuses and never inspects", async () => {
    readCurrentContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: null,
      contract: contractDto({ status: "confirmed" }),
      inspection: inspectionInsufficient(),
      requiredInspectedFacts: [...REQUIRED],
    });
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:uic",
        activeCycleInstanceId: "cyc:uic",
        executionContractId: "xct:uic",
        executionContractVersion: 1,
        executionContractStatus: "confirmed",
        attemptId: null,
        attemptStatus: null,
        stage: "PRE_EXECUTION",
        productOutcome: null,
        evidenceId: null,
        reviewBundleId: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        postEvidencePresent: false,
        nextDeterministicAction: "NONE",
        humanDecisionRequired: false,
        recoveryRequired: false,
        reason: null,
        blockingCode: null,
        context: null,
      },
    });
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    });
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });
});

describe("Pass04 — Conversation GovernedConfirmationCard (U02/U05/U08)", () => {
  it("U02 — Examiner opens panel without attest; Attester sends displayed facts", () => {
    const onAttest = vi.fn();
    render(
      <GovernedConfirmationCard
        projectId="prj:uic"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(onAttest).not.toHaveBeenCalled();
    expect(
      screen.getByTestId("governed-confirmation-inspection-panel"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("governed-confirmation-inspection-fact-action"),
    ).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-confirmation-attest"));
    expect(onAttest).toHaveBeenCalledTimes(1);
    expect(onAttest.mock.calls[0]![0]).toEqual(
      expect.arrayContaining(["action", "semanticFingerprint"]),
    );
  });

  it("U13 — project change closes exam without transferring attestation", () => {
    const onAttest = vi.fn();
    const { rerender } = render(
      <GovernedConfirmationCard
        projectId="prj:a"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(
      screen.getByTestId("governed-confirmation-inspection-panel"),
    ).toBeTruthy();
    rerender(
      <GovernedConfirmationCard
        projectId="prj:b"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    expect(
      screen.queryByTestId("governed-confirmation-inspection-panel"),
    ).toBeNull();
    expect(onAttest).not.toHaveBeenCalled();
  });
});

describe("Pass04 — TrajectorySurface (U03/U16/U15)", () => {
  it("U03 — Inspecter opens exam without write; Attester persists facts", async () => {
    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:uic"
      />,
    );
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(
      await screen.findByTestId("w2-trajectory-inspection-panel"),
    ).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
    await waitFor(() => expect(inspectMock).toHaveBeenCalledTimes(1));
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:uic",
      executionContractId: "xct:uic",
      inspectedFacts: expect.arrayContaining(["action"]),
    });
  });

  it("U16 — active prepared contract does not auto-inspect on mount", async () => {
    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:uic"
      />,
    );
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      /NON INSPECTÉ/i,
    );
  });
});

```
## E5 test file (Pass03-aligned; Pass04 compatibility)
(no Pass04 baseline for E5 — file from Pass03 dirty layer; E5 already open≠write+attest)
