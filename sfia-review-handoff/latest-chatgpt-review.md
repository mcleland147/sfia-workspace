# SFIA STUDIO — P6 — SINGLE HUMAN EXECUTE
## Governance / Architecture Documentary Synchronization — FULL CRITICAL

**Horodatage UTC :** 2026-10-18T19:45:00Z
**GO Morris consommé :** Option A adoptée · SINGLE HUMAN EXECUTE adopté · synchronisation documentaire des sources autorisées.
**GO non accordés :** Delivery Product · mutation runtime/OA/SQLite/UI · Cursor REAL Execute · Product commit/push/PR/merge · intégration Git de ce sync (gate ultérieur) · modification C1.

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Option B Product dirty | **PRÉSERVÉ** (`orchestrateF2` / `orchestrateTurn` / `prepareGeneric…` + coordinators/tests untracked) |
| Mutation Product ce cycle | **AUCUNE** |
| C1 modifié | **NON** |
| Handoff architecture préalable | `c3095635` / blob `5e2fd1f5` |

`git diff --check` sur les 6 fichiers autorisés : **PASS**.

---

## 2. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 (+ F11/F12) |
| Décision | **D-P6-SHE-01** ADOPTED TARGET |
| Delivery | **NON AUTORISÉ** |
| HQA | bloquée CURRENT ; non reprise |
| runtime v3 | **NON ADOPTED** |
| CURRENT ≠ TARGET | **OUI** |
| Exit Proof documentaire | sources cohérentes · décision attribuée · diff exploitable · 0 Product |

---

## 3. Décision D-P6-SHE-01 formalisée

| Champ | Valeur |
|---|---|
| Identifiant | **D-P6-SHE-01** (documentaire — ≠ objet OA HumanDecision) |
| Libellé | SINGLE HUMAN EXECUTE — OPTION A |
| Statut | **ADOPTED BY MORRIS — TARGET ARCHITECTURE** |
| Date | **2026-10-18** |
| D1–D10 | Option A · PREPARE sans HD préalable · INSPECT · Single Exécuter · Authority auto · No extra CTA · Fail closed · Réutiliser OA · Construction gates distincts · Maturité TARGET≠IMPLEMENTED |

---

## 4. Périmètre modifié (6 fichiers)

1. `convergence/sfia-studio-convergence-build-doctrine.md` — A3
2. `convergence/sfia-studio-convergence-roadmap.md` — tip D-P6-SHE-01
3. `convergence/sfia-studio-generic-execution-review-result-architecture.md` — D-ER-18 amendement
4. `production-runtime-reference/07-authority-invariants-and-failure-modes.md` — CURRENT vs TARGET
5. `sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` — chaîne + V3-F05
6. `sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md` — autorité au clic

**Diff stat :** 6 files, +172 / −65.

---

## 5. Contenu des amendements (synthèse fidèle)

### Build Doctrine A3
- Boucle scindée : HD trajectoire (gates propres) vs Generic Execution SHE.
- Séquence TARGET : PREPARE → INSPECT → EXECUTE → enforcement interne → Cursor si admissible.
- R13–R16 **non modifiés**.
- Référence traçable **D-P6-SHE-01**.
- Construction Morris ≠ autorité Pilote.

### D-ER-18
- Historique 2026-10-16 **préservé** comme trace.
- Amendement 2026-10-18 D-P6-SHE-01 (D1–D10 + modèle TARGET).
- PREPARE ≠ AUTHORIZE ≠ EXECUTE **conservé**.
- Explicitement **≠ CURRENT IMPLEMENTED FACT**.
- D-ER-16/17/19 non réécrits.

### Authority Invariants (vol 07)
- Catalog CURRENT inchangé en substance + tags epistemiques.
- INV-STRUCTURAL-* / EMPTY-REFS PREPARE timing : **CURRENT IMPLEMENTED** + note **superseded for TARGET**.
- Nouveau catalog **INV-SHE-*** TARGET + Exit Proof future.
- Chemins A/B CURRENT préservés ; chemin TARGET unique documenté.
- Dette no-write **OPEN**.

### Doctrine v3 §30
- Chaîne canonique amendée pour Generic Execution seulement.
- V3-F05 : trajectoire KEEP HD ; Generic Execution SHE TARGET.
- Recommendation ≠ Decision · N1–N3 · autonomie bornée **conservés**.

### Doctrine v3 §34
- Clarification : autorité effective au clic Exécuter (TARGET) ; ActionPolicy/N1–N3 ; pas d’élévation ; gates Morris préservés.
- Table AgentCapability / N1–N3 **non supprimée**.

### Roadmap
- Nouveau tip 2026-10-18 D-P6-SHE-01.
- Tip P6 MACRO CONTINUATION 2026-10-08 → **HISTORICAL / SUPERSEDED AS TIP** (faits campagne VALID/REUSED).
- Gates restants : ChatGPT review → Git Integration GO → Delivery GO → HQA GO → P6 Exit.
- C1 non touché ; référencé comme historique.

---

## 6. Diff exploitable — core (Build Doctrine, D-ER, INV, v3)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
index 99232e45..b7be2435 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -39,7 +39,9 @@ Ce document **n’est pas** :

 Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED). **Pilote** est le rôle runtime fonctionnel générique ; Morris reste l’autorité de construction / gouvernance de SFIA Studio et peut utiliser le produit en tant que Pilote sans devenir un persona runtime spécifique.

-Ordre d’autorité d’exécution aligné sur Product Completion C2 + Functional Architecture (≠ spécification technique) :
+**Amendement d’autorité d’exécution — D-P6-SHE-01** (2026-10-18) — **SINGLE HUMAN EXECUTE / OPTION A** — **TARGET ARCHITECTURE — ADOPTED BY MORRIS**. Cible documentaire ≠ runtime implémenté ; ≠ P6 PASS ; ≠ runtime v3 ADOPTED. Ne confond pas une **HumanDecision de trajectoire** (gates propres) avec l’autorisation d’un **ExecutionContract** générique.
+
+Ordre d’autorité d’exécution aligné sur Product Completion C2 + Functional Architecture, **amendé** par D-P6-SHE-01 (≠ spécification technique) :

 ```text
 Pilote
@@ -49,12 +51,13 @@ Pilote
   → analyse / clarification
   → Living Project State
   → ProjectTrajectory / options / recommandation
-  → HumanDecision du Pilote
-  → ExecutionContract natif préparé
-  → ExecutionContract inspecté par le Pilote
-  → Confirmation si requise par les effets / frontières protégées
-  → vérification / calcul de l’autorité effective + executor sufficiency
-  → Cursor / agent sous contrat
+  → HumanDecision du Pilote (trajectoire / vérité Project structurelle — gates propres)
+  → [Generic Execution — D-P6-SHE-01]
+       Nora/Studio PREPARE ExecutionContract (inspectable ; sans HD préalable obligatoire)
+       → Pilote INSPECT (contrat / effets / réserves)
+       → Pilote EXECUTE (seul clic explicite sur la version inspectée)
+       → Studio : HD / Confirmation applicables (transitions OA internes) + autorité effective
+       → Cursor / agent sous contrat SI admissible ; sinon STOP sans Attempt
   → Evidence / ReviewBundle / Git
   → analyse Nora
   → mise à jour LPS / ProjectTrajectory / replanification
@@ -64,12 +67,18 @@ Pilote

 Clarifications minimales (gouvernance d’exécution — ≠ implémentation) :

+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE** (D-ER-18 conservé ; timing amendé par D-P6-SHE-01) ;
+- PREPARE d’un ExecutionContract générique **n’exige pas** de HumanDecision préalable (structurant ou non) — le contrat peut être **inspectable** sans être **autorisé** ;
+- Inspection ≠ consentement à exécuter ;
+- le clic **Exécuter** est l’acte Pilote explicite sur le **contrat inspecté** (identité / version / empreinte) ;
+- HD / Confirmation applicables restent des **transitions OA distinctes**, consommées **dans** le geste Exécuter lorsque requis — **pas** de CTA humain supplémentaire après ce clic pour le même contrat inspecté ;
 - Confirmation porte sur le **contrat / les effets inspectés** ;
 - Confirmation est **conditionnelle** — jamais une étape obligatoire gratuite ;
 - aucune Confirmation ne précède l’**inspection** du contrat qu’elle autorise ;
-- l’**autorité effective** est résolue **après** les Confirmations requises et **avant** Execute ;
+- l’**autorité effective** est résolue **avant** tout lancement Cursor ; absence d’autorité → STOP sans Attempt ;
 - l’absence de Confirmation requise **n’empêche pas** le calcul d’autorité ;
-- aucune couche ne peut élargir seule l’autorité.
+- aucune couche ne peut élargir seule l’autorité ;
+- gates Morris de **construction** (doctrine, promotion, chemins protégés Studio, push/PR/merge repo Studio) **≠** autorisation runtime Pilote.

 Référence fonctionnelle d’autorité :

diff --git a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
index d59f88d2..e59426ea 100644
--- a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
+++ b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
@@ -7,7 +7,7 @@
 | **Rôle documentaire** | **CURRENT ARCHITECTURE REFERENCE** (cible adoptée + cartographie factuelle du code) |
 | **Chaîne couverte** | `GENERIC EXECUTION → EXECUTION REVIEW → EVIDENCE → NORA → RESULT → PILOT` |
 | **Statut** | **ADOPTED TARGET ARCHITECTURE BY MORRIS** — **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) |
+| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) · **Amendement 2026-10-18** (**D-P6-SHE-01** — SINGLE HUMAN EXECUTE / Option A — amende le séquencement d’autorité de D-ER-18) |
 | **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` (D-ER-01…15) · amendement ancré sur `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (2026-10-16) |
 | **Qualification épistémique** | Assertions étiquetées : `CURRENT IMPLEMENTED FACT` · `REAL OBSERVATION` · `AUDIT INFERENCE` · `TARGET ARCHITECTURE — ADOPTED BY MORRIS` · `TRANSITIONAL DEBT` · `OPEN DESIGN DETAIL` · `FUTURE PROOF` |
 | **runtime v3** | **NON ADOPTED** |
@@ -57,8 +57,9 @@ Ce document fixe la **référence d’architecture Product** pour le circuit gé
 | --- | --- |
 | Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) — **inchangée** |
 | Amendement Nora Tool Invocation D-ER-16…19 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16) — **complète** D-ER-01…15 ; **≠** réécriture historique |
+| Amendement **D-P6-SHE-01** (SINGLE HUMAN EXECUTE / Option A) | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-18) — amende le **séquencement d’autorité** de D-ER-18 ; **≠** réécriture de D-ER-18 historique 2026-10-16 ; **≠** runtime implémenté |
 | Intégration Git de ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| Implémentation de l’amendement | **EN COURS (Delivery local, non fusionné)** — D-ER-16…19 partiellement implémentés sous Delivery GO ; **NON** pour la cible complète (E8–E11 non prouvés bout-en-bout ; S8 persistence/recovery OPEN ; sortie legacy D-ER-19 partielle) — CURRENT ≠ TARGET |
+| Implémentation de l’amendement | **EN COURS (Delivery local, non fusionné)** — D-ER-16…19 partiellement implémentés sous Delivery GO ; **NON** pour la cible complète (E8–E11 non prouvés bout-en-bout ; S8 persistence/recovery OPEN ; sortie legacy D-ER-19 partielle) ; **D-P6-SHE-01 Delivery NON AUTORISÉ** — CURRENT ≠ TARGET |
 | runtime v3 | **NON ADOPTED** |
 | READY FOR REAL (boucle générique cible) | **NO** |
 | Delivery slicing (lots) | **TBD** — **D-ER-15** |
@@ -636,9 +637,9 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 ### D-ER-18 — Autorité : PREPARE ≠ AUTHORIZE ≠ EXECUTE · Morris D3

-**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+**Tag (historique) :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

-**Décision :**
+**Décision historique (2026-10-16) — conservée comme trace ; séquencement d’autorité amendé ci-dessous :**

 - **PREPARE ≠ AUTHORIZE ≠ EXECUTE.**
 - **Même** capacité générique pour missions **non structurantes** et **structurantes**.
@@ -651,6 +652,48 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 **Alignement :** D-ER-11 (Claim / Fact / Analysis / Authority) · P2-D-01…04 (Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next) — sans promotion doctrine.

+#### Amendement D-P6-SHE-01 (2026-10-18) — SINGLE HUMAN EXECUTE / Option A
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-18) — **≠ CURRENT IMPLEMENTED FACT**
+
+**Décision Morris D-P6-SHE-01 (D1–D10) — amende le séquencement d’autorité de D-ER-18 ; ne réécrit pas rétroactivement l’historique 2026-10-16 :**
+
+| ID | Contenu adopté |
+| --- | --- |
+| D1 | **OPTION A** — adapter le pipeline Generic Execution existant (pas de second moteur / taxonomie). |
+| D2 | **PREPARE** — tout contrat suffisamment décrit peut être préparé et inspecté, structurant ou non, **sans HumanDecision préalable**. |
+| D3 | **INSPECT** — le Pilote consulte le contrat, périmètre, effets et réserves. |
+| D4 | **SINGLE EXECUTE** — une seule action explicite **Exécuter** après inspection constitue l’autorisation Pilote pour la **version précise** du contrat présenté. |
+| D5 | **AUTHORITY** — Studio enchaîne automatiquement les vérifications et transitions OA internes nécessaires avant lancement. |
+| D6 | **NO EXTRA HUMAN CTA** — pas de confirmation humaine supplémentaire après Exécuter pour le **même** contrat inspecté. |
+| D7 | **FAIL CLOSED** — contrat obsolète, autorité insuffisante, ou frontière protégée non autorisée → **STOP** sans lancement Cursor. |
+| D8 | **ARCHITECTURE** — réutiliser OA + Generic Execution ; **aucun** système parallèle. |
+| D9 | **CONSTRUCTION GATES** — décisions Morris de construction / permissions / chemins protégés **≠** autorisation Pilote runtime. |
+| D10 | **MATURITÉ** — cible adoptée ≠ runtime implémenté ; P6 PASS non acquis ; runtime v3 **NON ADOPTED**. |
+
+**Modèle TARGET (D-P6-SHE-01) — ≠ CURRENT IMPLEMENTED :**
+
+```text
+NORA / STUDIO PREPARE  →  PILOT INSPECT  →  PILOT EXECUTE
+  →  PRODUCT ENFORCEMENT (HD / Confirmation / Authorization / currentness / scope / capability — transitions OA distinctes)
+  →  CURSOR (si admissible)  →  EVIDENCE / RESULT
+sinon STOP sans ExecutionAttempt
+```
+
+**Précisions d’autorité (TARGET) :**
+
+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE** demeure ;
+- PREPARE **ne consomme aucune autorité** et **n’exige pas** de HD préalable ;
+- le contrat PREPARE est **inspectable** mais **non autorisé** jusqu’au clic Exécuter admissible ;
+- l’autorité structurelle applicable est vérifiée **avant tout lancement** (pas avant PREPARE) ;
+- HumanDecision enregistrée **uniquement** sur action explicite du Pilote (sujet / version / digest du contrat inspecté) — **aucune HD silencieuse** ;
+- Confirmations restent liées aux **effets exacts** inspectés (ActionPolicy / materiality) — pliage server-side dans le geste Exécuter ≠ suppression sémantique ;
+- currentness, scope, AgentCapability et frontiers protégées revalidés avant Attempt ;
+- Cursor lancé **uniquement** si admissible ; sinon **0 Attempt** ;
+- même expérience UX pour STRUCTURAL / NON_STRUCTURAL / Critical / Standard (matérialité ≠ boutons distincts).
+
+**CURRENT IMPLEMENTED FACT (rappel — ne pas falsifier) :** le runtime et les tests mHd01 / DER16 E12 / G-D4 appliquent encore HD-avant-PREPARE pour STRUCTURAL — voir `production-runtime-reference/07-authority-invariants-and-failure-modes.md` (AS_IMPLEMENTED vs TARGET ADOPTED).
+
 ### D-ER-19 — Sortie progressive des admissions spécialisées · Morris D4

 **Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 7f684d28..df142346 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -1,65 +1,107 @@
 # 07 — Authority Invariants & Failure Modes

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
-
-## Invariant catalog
-
-| ID | Statement | Enforcing code (examples) | Tests |
-|---|---|---|---|
-| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests |
-| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests |
-| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests |
-| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests |
-| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions |
-| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 |
-| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests |
-| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests |
-| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety |
-| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 |
-| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review |
-| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity |
-| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests |
-| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity |
-| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B |
-| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 |
-| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests |
-| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 |
-| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus |
-| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 |
-| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 |
-| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
-| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
-| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
-| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
-| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
-| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
-| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
-| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
-| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
-| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |
-
-## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
-
-**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
+**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`** (baseline documentaire historique)
+
+**Amendement documentaire D-P6-SHE-01 (2026-10-18) :** ce volume distingue désormais **CURRENT IMPLEMENTED** (comportement code / tests) et **TARGET ADOPTED** (SINGLE HUMAN EXECUTE / Option A). TARGET ≠ IMPLEMENTED. Aucun test actuel ne prouve les invariants TARGET.
+
+## Invariant catalog — CURRENT IMPLEMENTED
+
+| ID | Statement | Enforcing code (examples) | Tests | Epistemic |
+|---|---|---|---|---|
+| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests | CURRENT IMPLEMENTED |
+| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests | CURRENT IMPLEMENTED |
+| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests | CURRENT IMPLEMENTED |
+| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests | CURRENT IMPLEMENTED |
+| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions | CURRENT IMPLEMENTED |
+| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 | CURRENT IMPLEMENTED |
+| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests | CURRENT IMPLEMENTED |
+| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests | CURRENT IMPLEMENTED |
+| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety | CURRENT IMPLEMENTED |
+| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 | CURRENT IMPLEMENTED |
+| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review | CURRENT IMPLEMENTED |
+| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity | CURRENT IMPLEMENTED |
+| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests | CURRENT IMPLEMENTED |
+| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity | CURRENT IMPLEMENTED |
+| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B | CURRENT IMPLEMENTED |
+| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 | CURRENT IMPLEMENTED |
+| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests | CURRENT IMPLEMENTED |
+| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 | CURRENT IMPLEMENTED |
+| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus | CURRENT IMPLEMENTED |
+| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 | CURRENT IMPLEMENTED |
+| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 | CURRENT IMPLEMENTED |
+| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC | CURRENT IMPLEMENTED |
+| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization | CURRENT IMPLEMENTED |
+| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection | CURRENT IMPLEMENTED |
+| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 (see TARGET catalog) |
+| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 |
+| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 |
+| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 | CURRENT IMPLEMENTED (partial fold Confirm ; TARGET étend le fold) |
+
+## Dual admission paths — CURRENT IMPLEMENTED (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+**Chemin A — STRUCTURAL (CURRENT):** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
 - **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
 - **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
 - **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
 No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

-**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.
+**Chemin B — NON_STRUCTURAL (CURRENT):** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.

-**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
+**Tool-First ordinary CTA (CURRENT):** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.

 **R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
 - **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
 - **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
 Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.

-**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.
+**Separations (KEEP — CURRENT et TARGET):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

 **CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

-## Failure modes (selected)
+---
+
+## TARGET ADOPTED — D-P6-SHE-01 (2026-10-18) — SINGLE HUMAN EXECUTE / Option A
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** · **≠ CURRENT IMPLEMENTED** · **≠ proven by existing tests**
+
+Les invariants CURRENT `INV-STRUCTURAL-NEEDS-VERIFIED-HD`, `INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD`, et la contrainte PREPARE de `INV-EMPTY-REFS-NE-STRUCTURAL` restent la **vérité as-implemented** et la base des tests mHd01 / DER16 / G-D4 jusqu’à Delivery. Pour la **cible adoptée**, leur **timing PREPARE** est superseded comme suit (l’exigence d’autorité structurelle avant **lancement** demeure).
+
+### Target invariant catalog (Exit Proof future — Delivery GO distinct)
+
+| ID | Statement (TARGET) | Future proof owner |
+|---|---|---|
+| INV-SHE-PREPARE-NO-AUTHORITY | PREPARE ne consomme aucune autorité ; ne crée ni Attempt ni Authorization | Delivery SHE + DET A/C |
+| INV-SHE-STRUCTURAL-INSPECTABLE | STRUCTURAL / UNKNOWN n’interdit pas PREPARE ni inspection d’un contrat honnêtement stampé | Delivery SHE + DET C/E |
+| INV-SHE-AUTHORITY-BEFORE-LAUNCH | Autorité structurelle / effective vérifiée **avant** tout lancement Cursor (pas avant PREPARE) | Delivery SHE + DET C/O |
+| INV-SHE-EXECUTE-BINDS-INSPECTED | Le clic Exécuter est lié au contrat inspecté (id + version + semantic fingerprint) | Delivery SHE + DET F |
+| INV-SHE-NO-SILENT-HD | Aucune HumanDecision silencieuse ; HD uniquement sur action Pilote explicite (sujet/version/digest) | Delivery SHE + DET C |
+| INV-SHE-NO-EXEC-WITHOUT-EFFECTIVE-AUTH | Aucune exécution sans autorité effective ; 0 Attempt si gate pré-lancement échoue | Delivery SHE + DET O/Q |
+| INV-SHE-NO-AUTO-ELEVATION | Aucune élévation automatique de capacité / permission / chemin protégé | Delivery SHE + DET I/J |
+| INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE | UNKNOWN / matérialité non admissible interdit l’exécution (fail-closed) | Delivery SHE + DET E/O |
+| INV-SHE-STALE-CONTRACT-BLOCKS | Exécution refusée sur contrat obsolète (version/fp/currentness) | Delivery SHE + DET F/G/H |
+| INV-SHE-IDEMPOTENT-EXECUTE | Double-clic / retry / restart : idempotence Attempt ; pas de second Cursor silencieux | Delivery SHE + DET L/M/N |
+| INV-SHE-SINGLE-UX-PATH | Même parcours UX STRUCTURAL / NON_STRUCTURAL (matérialité ≠ boutons distincts) | Delivery SHE + UI |
+| INV-SHE-NO-EXTRA-HUMAN-CTA | Pas de confirmation humaine supplémentaire après Exécuter pour le même contrat inspecté (Confirm/HD restent transitions OA internes) | Delivery SHE + DET K |
+
+**Chemin TARGET unique (remplace la dualité UX A/B) :**
+
+```text
+PREPARE (inspectable, decisionRefs peuvent être vides en proposition)
+→ INSPECT (attestation)
+→ EXECUTE (seul clic)
+→ HD applicable? + Confirm applicable? + Authorize + launch gates (interne)
+→ Cursor SI admissible
+sinon STOP · 0 Attempt
+```
+
+**Dette OPEN (inchangée) :** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT — non résolue par D-P6-SHE-01.
+
+---
+
+## Failure modes (selected) — CURRENT IMPLEMENTED

 | Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
 |---|---|---|---|---|---|
@@ -78,3 +120,5 @@ Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write
 | Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.
+
+**Note TARGET :** sous D-P6-SHE-01, certains refus aujourd’hui placés au PREPARE (ex. STRUCTURAL sans HD) doivent devenir refus au **Execute** après proposition inspectable — Exit Proof Delivery, pas claim actuel.
diff --git a/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md b/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
index b2d122e2..a6704209 100644
--- a/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
+++ b/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
@@ -34,15 +34,21 @@ intention utilisateur
 → continuité sémantique inter-session (sans transcript exhaustif requis)
 → ProjectTrajectory (MUST produit ; recommandation jusqu'à validation)
 → options et recommandation
-→ HumanDecision du Pilote
-→ confirmation proportionnée (N1–N3)
-→ Execution Contract
-→ agent / Cursor / Runtime
+→ HumanDecision du Pilote (trajectoire / vérité Project structurelle — gates propres)
+→ [Generic Execution — amendement D-P6-SHE-01 / 2026-10-18 — TARGET]
+     PREPARE ExecutionContract (sans HD préalable obligatoire)
+     → INSPECT
+     → action Exécuter (autorisation Pilote du contrat inspecté)
+     → HD / Confirmation / Authorization internes (transitions OA distinctes, proportionnées N1–N3)
+     → enforcement (autorité effective / currentness / scope / capability)
+     → agent / Cursor / Runtime SI admissible
 → preuves et ReviewBundle
 → mise à jour de l'état
 → replanification ou capitalisation
 ```

+**Amendement D-P6-SHE-01 (2026-10-18) — TARGET ARCHITECTURE — ADOPTED BY MORRIS :** pour **Generic Execution** uniquement, la séquence PREPARE → INSPECT → Exécuter précède l’enregistrement des HD/Confirmations **applicables au contrat**. Cela **n’applique pas** indistinctement aux décisions de trajectoire. Cible ≠ runtime implémenté.
+
 ## 3. V3-F01 — CKC comme couche cognitive canonique (VALIDATED)

 ### Définition
@@ -89,9 +95,11 @@ Alignement **décisions UX validées** (2026-07-23) :
 **Règles :**

 - aucune mutation implicite ;
-- Execution Contract **uniquement** après décisions nécessaires ;
+- **Trajectoire / vérité Project :** HumanDecision explicite lorsque structurante (KEEP) — Recommendation ≠ Decision ;
+- **Generic Execution (D-P6-SHE-01 TARGET) :** PREPARE d’un ExecutionContract inspectable **sans** HD préalable obligatoire ; le clic **Exécuter** sur le contrat inspecté est l’acte explicite du Pilote ; HD/Confirmation/Authorization restent des transitions OA distinctes **avant** lancement ; confirmations N1–N3 proportionnées aux effets (pliables server-side, non supprimées) ; autonomie bornée ; aucune élévation implicite ;
 - phrase conversationnelle ≠ gate ;
-- Composer libre toujours disponible hors modal stricte.
+- Composer libre toujours disponible hors modal stricte ;
+- TARGET ≠ IMPLEMENTED — runtime v3 **NON ADOPTED**.

 ## 5. Architecture doctrinale — 7 couches

diff --git a/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md b/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
index 0d81a361..1a0cda98 100644
--- a/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
+++ b/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
@@ -42,6 +42,8 @@ valid human authorization

 Aucune couche n’élargit seule l’autorité. Un exécuteur insuffisant déclenche `SC-CAP` → STOP / escalation honnête.

+**Amendement D-P6-SHE-01 (2026-10-18) — TARGET (Generic Execution) :** l’autorité effective est évaluée au **clic Exécuter** (après inspection du contrat), pas à PREPARE. ActionPolicy / Confirmations N1–N3 restent liées aux **effets** ; elles peuvent être consommées en transitions OA internes dans le geste Exécuter — **sans** CTA humain redondant et **sans** suppression sémantique. Aucune élévation de capacité. Gates Morris de construction (push/PR/merge/doctrine/baseline) demeurent distincts. TARGET ≠ IMPLEMENTED.
+
 **Interdit :** L5 décisionnel global · décision Morris automatisée · élargissement via CKC · chargement doctrine v2.6 comme capacité de lecture produit.

 ## 2. V3-F12 — Taxonomie des actions et réversibilité (VALIDATED)

```

## 7. Diff exploitable — Roadmap tip (extrait)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index cbc558e8..7885d752 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN CONTINUATION** | 2026-10-08 Europe/Paris — **P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN CONTINUATION / PHASE-1 REQUALIFICATION** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · Phase 1 = **PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES** (fresh SMOKE-01/02/03 · browser QUALIFIED · provider CAPTURED · authority profiles CONTROLLED) · prior Phase 2/3/4 evidence = **VALID / REUSED** · Phase 2 scenario disposition + Phase 3 Router-in-situ/discrimination continuation · Phase 5 Human QA batch = **REGENERATING / NOT YET PRIMARY HANDOFF** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next = exhaust AUTO → **MORRIS HUMAN QA BATCH** · **≠** P6 PASS · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 D-P6-SHE-01 SINGLE HUMAN EXECUTE GOVERNANCE SYNC** | 2026-10-18 Europe/Paris — **P6 — SINGLE HUMAN EXECUTE / OPTION A — GOVERNANCE DOCUMENTARY SYNCHRONIZATION CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Chantier **P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY** · Cycle **3 — Architecture fonctionnelle** · Profile **Critical** · Typologie **DOC / GOVERNANCE / ARCHITECTURE DECISION SYNC** · Decision **D-P6-SHE-01** = **ADOPTED BY MORRIS — TARGET ARCHITECTURE** (2026-10-18) · Option A = **ADOPTED** · SINGLE HUMAN EXECUTE = **ADOPTED** · Sources sync (local candidate) = Build Doctrine A3 · D-ER-18 amendement · Authority Invariants CURRENT/TARGET · V3-F05/F11-F12 clarifications · this Roadmap tip · C1 = **NOT MODIFIED** (historique VALIDATED) · Architecture impact handoff = `c3095635` / blob `5e2fd1f5` · Structural refusal diagnostic = `eebc6e93` · origin/main / Delivery HEAD known **`304e30e8…`** · Option B Product dirty **PRESERVED / NOT THIS CYCLE** · HQA AtelierNova Generic PREPARE **BLOCKED (CURRENT)** · HQA replay = **NOT AUTHORIZED** · Delivery Product = **NOT AUTHORIZED** · Git Integration of this sync = **NOT AUTHORIZED** (gate ChatGPT Critical Review → GO distinct) · P6 GLOBAL PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · CURRENT ≠ TARGET · ADOPTED TARGET ≠ IMPLEMENTED · Trajectoire = V3-F05 → **D-P6-SHE-01** → Generic PREPARE inspectable → Execute orchestration → DET proof → HQA LIVE → P6 Exit · Gates restants = (1) ChatGPT documentary review (2) Git Integration GO (3) Delivery Product GO (4) HQA replay GO (5) P6 Exit / promotion · Dette **TOOL-FIRST-REAL-NOWRITE** = **OPEN** · **≠** Delivery · **≠** runtime implemented · **≠** P6 PASS · **≠** v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN CONTINUATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN CONTINUATION / PHASE-1 REQUALIFICATION *(true then; superseded as tip by D-P6-SHE-01 governance sync 2026-10-18 — campaign facts remain VALID / REUSED)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · Phase 1 = **PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES** (fresh SMOKE-01/02/03 · browser QUALIFIED · provider CAPTURED · authority profiles CONTROLLED) · prior Phase 2/3/4 evidence = **VALID / REUSED** · Phase 2 scenario disposition + Phase 3 Router-in-situ/discrimination continuation · Phase 5 Human QA batch = **REGENERATING / NOT YET PRIMARY HANDOFF** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next was exhaust AUTO → **MORRIS HUMAN QA BATCH** · **≠** P6 PASS · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN EXECUTION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 MACRO CAMPAIGN EXECUTION *(true then; Phase-1 smokes later requalified as CURRENT P6 REAL)* · Phase 1 then claimed PASS with P5.S05 historical SMOKE-01 + DET-only SMOKE-03 · superseded by CONTINUATION / REQUALIFICATION tip · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main baseline **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · P6 STARTED = **YES** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT GIT INTEGRATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — QA CONTRACT ACCEPTANCE & GIT INTEGRATION *(true then; superseded by PR #571 MERGED + CI #713 + GO P6 EXECUTION/REAL consumed)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR readiness / Git Integration** · Profile **Critical** · Typologie **DOC / GOVERNANCE / PR READINESS / GIT INTEGRATION** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · ChatGPT Closure Review = **PASS / CONSUMED** · P6-QA-CONTRACT-01…12 = **CLOSED** · Morris P6 QA Contract Acceptance = **AUTHORIZED / CONSUMED** · Morris P6 QA Contract Git Integration GO = **AUTHORIZED / CONSUMED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6 QA CONTRACT = **MORRIS ACCEPTED / GIT INTEGRATION IN PROGRESS** · Phase 0 = **CONTRACT ACCEPTED / READY FOR GIT INTEGRATION** · Campaign strategy = **REAL-FIRST HYBRID** · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · entry candidate HEAD = **`29e91b348c1476156365c5d10fc3050823987916`** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Project push / Draft PR = **AUTHORIZED THIS CYCLE** · Merge = **NOT AUTHORIZED** · Next then = Draft PR + CI → **MORRIS MERGE REVIEW / MERGE GO** *(superseded by PR #571 MERGED)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED · **≠** merge |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT CORRECTION PASS 02** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — CORRECTION PASS 02 / AUTONOMOUS REVIEW FINDINGS CLOSURE *(true then; superseded by ChatGPT Closure Review PASS + Morris Acceptance + Git Integration GO)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Audit projet** · Profile **Critical** · Typologie **DOC / AUDIT / QA CONTRACT / CAMPAIGN DESIGN** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · Morris CP02 GO = **AUTHORIZED / CONSUMED** · ChatGPT Autonomous Review = **STRUCTURALLY SOUND / TARGETED CORRECTIONS REQUIRED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6-QA-CONTRACT-01 = **CLOSED** · P6-QA-CONTRACT-02…12 = CLOSED CANDIDATE (then) · later CLOSED by Closure Review · Strategy = **REAL-FIRST HYBRID** · proof axes = AUTO/HUMAN × DETERMINISTIC/REAL-BOUNDARY/END-TO-END-REAL (R21) · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · Phase 0 = **CONTRACT CORRECTION COMPLETE CANDIDATE** · Phase 1 = **NOT STARTED** · SMOKE-01/02/03 = mandatory Phase 1 PASS criteria · Human QA Queue · Evidence Ledger contract · Manifest contracts · Router-in-situ vs Controlled Candidate · Cognitive Adjudication · Semantic/CKC coverage · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · Product/runtime/tests = **NONE** · Provider REAL = **NONE** · Project push/PR/merge = **NONE** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Next then = ChatGPT Closure Review *(superseded)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED |

```

---

## 8. Contrôles de cohérence A–O

| Ctrl | Résultat |
|---|---|
| A PREPARE ≠ AUTHORIZE | PASS (D-ER-18 + A3) |
| B Inspect ≠ consentement | PASS |
| C Exécuter = acte explicite contrat | PASS |
| D HD interne = vraie décision liée | PASS (TARGET INV-SHE-NO-SILENT-HD) |
| E Confirmation liée effets | PASS |
| F Morris construction ≠ Pilote Execute | PASS (D9 / A3 / §34) |
| G Pas d’action protégée implicite | PASS |
| H 0 Attempt avant gates | PASS (D7) |
| I Currentness non supprimée | PASS |
| J Dette no-write OPEN | PASS |
| K Pas de 2e moteur | PASS (D8 / Option A) |
| L CURRENT ≠ TARGET | PASS (vol 07 + D-ER) |
| M ADOPTED ≠ IMPLEMENTED | PASS (D10) |
| N DET ≠ REAL | PASS (hors scope) |
| O v3 NON ADOPTED | PASS |

---

## 9. Historique préservé / C1

- C1 `01-product-completion-cadrage.md` : **0 diff**.
- D-ER-18 texte 2026-10-16 : **conservé** sous rubrique historique.
- INV STRUCTURAL PREPARE : **conservés** comme CURRENT + tests associés.
- Roadmap timestamps antérieurs : **non effacés**.

---

## 10. Conflits / réserves résiduels (hors scope — signalés, non modifiés)

- `product-simplification/07-…p6…md` et flow catalogs 03/04 peuvent encore décrire le parcours CURRENT HD-avant-PREPARE — **hors périmètre** de ce GO ; à aligner éventuellement lors Git Integration / Delivery docs.
- Runtime / Option B dirty : toujours CURRENT (blocage HQA) — **attendu**.
- Intégration Git de ce sync : **NON AUTORISÉE** ici.
- Validate OA « STRUCTURAL sans decisionRefs » : gate Delivery (déjà dans architecture review).

---

## 11. Dette / Exit Proof / Gates

| Item | État |
|---|---|
| TOOL-FIRST-REAL-NOWRITE | OPEN |
| Exit Proof documentaire | sources sync · D-P6-SHE-01 · CURRENT/TARGET · 0 Product |
| Gate 1 | ChatGPT Critical Review de ce handoff |
| Gate 2 | Git Integration GO distinct |
| Gate 3 | Delivery Product GO distinct |
| Gate 4 | HQA replay GO distinct |
| Gate 5 | P6 Exit / promotion |

---

## 12. Verdict

**SINGLE HUMAN EXECUTE —
GOVERNANCE SYNCHRONIZATION CANDIDATE COMPLETE —
READY FOR CHATGPT CRITICAL REVIEW.**

≠ intégration Git automatique · ≠ Delivery · ≠ runtime implémenté · ≠ P6 PASS · ≠ v3 ADOPTED.

---

## 13. Instruction ChatGPT

Lire ce handoff. Contrôler fidélité D-P6-SHE-01 ; cohérence Build Doctrine / D-ER / v3 / INV ; absence d’élargissement ; historique conservé ; Current/Target ; 0 Product ; 0 claim runtime fictif ; qualité du pack.

Après PASS documentaire : préparer le gate d’intégration Git.
**Ne pas générer de prompt Delivery** avant intégration gouvernée + GO Morris distinct.
