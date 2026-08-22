# SFIA Studio — Cycle 7 — PR #393 Targeted Governance Correction — Review Pack FULL

| Field | Value |
|---|---|
| **Timestamp (Europe/Paris)** | 2026-08-22T15:25:00+02:00 |
| **Cycle** | 7 — Intégration / DevOps |
| **Profil SFIA** | CRITICAL |
| **Typologie** | DOC |
| **Milestone** | PRODUCT COMPLETION — PR #393 TARGETED GOVERNANCE TRUTH FIX |
| **Runtime v3** | NON ADOPTED |
| **Delivery** | NOT AUTHORIZED |
| **REAL** | ZERO |

## GO Morris Consumed

**GO MORRIS — APPLY CHATGPT TARGETED GOVERNANCE CORRECTIONS TO PR #393** — same branch · 2-file fix · commit/push · handoff · KEEP DRAFT · NO MERGE · NO G2 · NO G3.

## Local Git Truth

| Field | Value |
|---|---|
| branch | docs/sfia-studio-product-completion-backlog |
| HEAD before | 2dfca155ba9dc87c187bec93e6b0bf1b41050d09 |
| HEAD after | d8be777333bb885fb670f04dd3d7f7b03bd9ea8b |
| origin/main | aca3dc8ab250ea1d751a833912787751e856c7b6 |

## PR #393 Before

| Field | Value |
|---|---|
| state | OPEN · DRAFT |
| head | 2dfca155 |
| prior CI | run **#272** / **32571367715** SUCCESS *(superseded)* |

## PR #393 After

| Field | Value |
|---|---|
| state | OPEN · DRAFT |
| head | d8be7773 |
| commits | 2 |
| total PR files | 3 (Roadmap unchanged this commit) |
| current-head CI | run **32575458167** SUCCESS @ d8be7773 |

## ChatGPT Findings R1→R4 Applied

| ID | Fix |
|---|---|
| R1 | Backlog §10/§11/footer current truth · G1 IN PROGRESS via PR #393 |
| R2 | W1 gate routing → G3 (+ G2 prerequisite where applicable) |
| R3 | Readiness C6 stale "GO C6 Delivery" → G3 parallel model |
| R4 | fixtures/registry.json → G2-conditional · Option A recommendation only |

## Roadmap

**ZERO modification** this cycle · read-only check PASS · G1/G2/G3 coherent on PR branch.

## G2 Integrity

- G2 = OPEN / NOT YET TAKEN
- packageVersion = NOT DECIDED
- Option A = RECOMMENDATION CANDIDATE only (audit reserve)
- ChatGPT candidate: Option A `lib/oa/doctrine/product/` · version `1.0.0` · fixture quarantine — **≠ Morris decision**

## Actions Not Executed

No Roadmap change · no merge · no ready-for-review · no package · no Delivery · no REAL.

## Verdict

PR #393 TARGETED GOVERNANCE CORRECTIONS COMPLETE — CURRENT-HEAD CI SUCCESS — READY FOR CHATGPT FINAL PR READINESS REVIEW — NO MERGE.

---

## FULL DIFF (2 files)

diff --git a/projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md b/projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md
index 2066acc0..6aa7d525 100644
--- a/projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md
+++ b/projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md
@@ -151,29 +151,29 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D

 | ID exigence | Exigence canonique | Source C1 | Niveau | Owner FA | Refs C2 / CA | Refs UX | Contrainte tech | Contrainte CKC/DP | État déclaré source | Écart restant | Priorité écart | Epic | Vague | Preuve de sortie | Gate Morris |
 |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
-| **REQ-01** | Continuité Project — créer, retrouver, reprendre un Project durable | H Project · J.1 | MUST | FC-01 | A,B · CA-PC-01/02 | S1,S2 · UF-01/07 | OA Native + Product SQLite · no parallel product path | — | PARTIAL | Finition pilotage E2E · contrat reprise honnête | P1 | EPIC-A | W1 | CA-PC-01/02 | GO slice Delivery |
-| **REQ-02** | Living Project State — état métier fiable, prochaine action, blockers | H LPS · J.1 | MUST | FC-05 | G · CA-PC-25 | S5 · SC-03 | SQLite LPS · Nora proposes · Studio persists | — | PARTIAL | État métier utile complet au-delà des ancres | **P0** | EPIC-A | W1 | CA-PC-25 | GO slice Delivery |
-| **REQ-03** | Raisonnement Nora — comprendre, qualifier, analyser, recommander (**propose-only**) | H Nora · J.1 | MUST | FC-04 | C,D,E,F,I,U · CA-PC-03/35 | S3,S4 · UF-02/06 | Process-local conv · no LIVE this cycle | Phase B downstream (REQ-24) | PARTIAL | Continuité sémantique inter-session · pas d'autorité inventée | **P0** | **EPIC-B** *(A/D consomment)* | W1–W3 | CA-PC-03/25/35 | GO slice Delivery |
-| **REQ-04** | Qualification / CKC — couverture cognitive complète du catalogue applicable | H Qualification/CKC · J.1 | MUST | FC-03 | E · CA-PC-31 | S3 · UF-02 | Package-bound resolver ADAPT | D01-NARROW · D02 Option B · D05 NONE · DK-01…07 | OPEN | SoT chemin méthode → index package · fail-closed NONE | **P0** | EPIC-A | W1 | CA-PC-31 · Phase A proof | **GO implémentation DP** |
+| **REQ-01** | Continuité Project — créer, retrouver, reprendre un Project durable | H Project · J.1 | MUST | FC-01 | A,B · CA-PC-01/02 | S1,S2 · UF-01/07 | OA Native + Product SQLite · no parallel product path | — | PARTIAL | Finition pilotage E2E · contrat reprise honnête | P1 | EPIC-A | W1 | CA-PC-01/02 | **G3 W1 Delivery GO** |
+| **REQ-02** | Living Project State — état métier fiable, prochaine action, blockers | H LPS · J.1 | MUST | FC-05 | G · CA-PC-25 | S5 · SC-03 | SQLite LPS · Nora proposes · Studio persists | — | PARTIAL | État métier utile complet au-delà des ancres | **P0** | EPIC-A | W1 | CA-PC-25 | **G3 W1 Delivery GO** |
+| **REQ-03** | Raisonnement Nora — comprendre, qualifier, analyser, recommander (**propose-only**) | H Nora · J.1 | MUST | FC-04 | C,D,E,F,I,U · CA-PC-03/35 | S3,S4 · UF-02/06 | Process-local conv · no LIVE this cycle | Phase B downstream (REQ-24) | PARTIAL | Continuité sémantique inter-session · pas d'autorité inventée | **P0** | **EPIC-B** *(A/D consomment)* | W1–W3 | CA-PC-03/25/35 | **G3 W1 Delivery GO** (W1 slice · W2/W3 downstream) |
+| **REQ-04** | Qualification / CKC — couverture cognitive complète du catalogue applicable | H Qualification/CKC · J.1 | MUST | FC-03 | E · CA-PC-31 | S3 · UF-02 | Package-bound resolver ADAPT | D01-NARROW · D02 Option B · D05 NONE · DK-01…07 | OPEN | SoT chemin méthode → index package · fail-closed NONE | **P0** | EPIC-A | W1 | CA-PC-31 · Phase A proof | **G3 W1 Delivery GO** (after **G2** where package materialization required) |
 | **REQ-05** | Évolutivité Cycle Catalog — nouveau type ≠ nouveau moteur | H Cycle Catalog · J.1 | MUST | FC-03 | E · CA-PC-26 | S3 | Catalog routing ADAPT · no N engines | Package index artifact | PARTIAL | Invariant démontrable post Phase A | P1 | EPIC-A | W3 | CA-PC-26 | GO slice Delivery |
-| **REQ-06** | ProjectTrajectory — `proposed` vs `decided` durable | H ProjectTrajectory · J.1 | MUST | FC-06 | H,V · CA-PC-06/07 | S6 · SC-04 | TD-C6-01/06 **ADOPTED — implement only** | — | OPEN | Mémoire seule → SQLite · pointeur courant explicite | **P0** | EPIC-B | W1 | CA-PC-06/07 | **GO Delivery durabilité C6** |
+| **REQ-06** | ProjectTrajectory — `proposed` vs `decided` durable | H ProjectTrajectory · J.1 | MUST | FC-06 | H,V · CA-PC-06/07 | S6 · SC-04 | TD-C6-01/06 **ADOPTED — implement only** | — | OPEN | Mémoire seule → SQLite · pointeur courant explicite | **P0** | EPIC-B | W1 | CA-PC-06/07 | **G3 W1 Delivery GO** |
 | **REQ-07** | HumanDecision / DecisionBasis — arbitrage Pilote explicite | H HumanDecision · J.1 | MUST | FC-07 | J · CA-PC-08/09/10 | S4,S6 · UF-03 | HD SQLite durable | Recommendation ≠ HD | PARTIAL | UX liaison trajectoire · complétude DecisionBasis | P1 | EPIC-B | W2 | CA-PC-08/10 | GO slice Delivery |
-| **REQ-08** | Confirmation — autorisation proportionnelle quand les effets l'exigent | H Confirmation · J.1 | MUST | FC-09 | M · CA-PC-11/13/30 | S11 · UF-04 · SC-06/07 | TD-C6-02/05 **ADOPTED** · K→L→M→N | — | OPEN | `granted` durable · autorité consommée · pas de confirm avant inspect | **P0** | EPIC-C | W1 | CA-PC-11/13/30 | **GO Delivery durabilité C6** |
+| **REQ-08** | Confirmation — autorisation proportionnelle quand les effets l'exigent | H Confirmation · J.1 | MUST | FC-09 | M · CA-PC-11/13/30 | S11 · UF-04 · SC-06/07 | TD-C6-02/05 **ADOPTED** · K→L→M→N | — | OPEN | `granted` durable · autorité consommée · pas de confirm avant inspect | **P0** | EPIC-C | W1 | CA-PC-11/13/30 | **G3 W1 Delivery GO** |
 | **REQ-09** | ExecutionContract native + inspect + parité canonique | H Native EC · J.1 | MUST | FC-08 | K,L · CA-PC-14/15/16 | S10 · SC-05/06 · UF-04 | EC SQLite · PREPARE projection ADAPT | — | PARTIAL | Parité champs · fidélité progressive disclosure | P1 | EPIC-C/E | W2 | CA-PC-14/15/16 | GO slice Delivery |
 | **REQ-10** | Enveloppe AgentCapability — bornes autorité/gouvernance génériques | H AgentCapability · J.1 | MUST | FC-09 | N · CA-PC-27/32 | S11 · SC-07 | Bounded RO · Gate D patterns · not feature catalog | — | PARTIAL | Enveloppe générique déterminable · UX état bloqué | P1 | EPIC-C | W2 | CA-PC-32 | GO slice Delivery |
 | **REQ-11** | Mécanisme générique EC → agent d'exécution | H Cursor/agent · J.1 | MUST | FC-10 | O,P · CA-PC-17/19 | S12 · UF-05 | Fixture default · REAL gated · one mechanism | — | PARTIAL | Chemin générique productisé · gate REAL séparée | **P1** | EPIC-D | W3 | CA-PC-17/19 | GO slice Delivery · REAL distinct |
 | **REQ-12** | Cycle de vie exécution / Attempt — accepted→running→terminal | H Execution lifecycle · J.1 | MUST | FC-10 | O · CA-PC-17/18 | S12 · WF-06 | Attempt SQLite · scope enforcement | — | PARTIAL | Tous effets autorisés · visibilité cycle de vie | **P1** | EPIC-D | W3 | CA-PC-17/18 | GO slice Delivery |
 | **REQ-13** | SUCCESS / STOP / FAIL — terminaux métier honnêtes | H SUCCESS/STOP/FAIL · J.1 | MUST | FC-11 | Q,R,S · CA-PC-20/21/22 | S12 · SC-08–11 · UF-05 | Terminal mapping ADAPT | A11Y text distinction | PARTIAL | Sémantiques métier distinctes · pas de READY auto | **P1** | EPIC-D | W3 | CA-PC-20/22 | GO slice Delivery |
 | **REQ-14** | Evidence / ReviewBundle — preuve business-first | H Evidence · J.1 | MUST | FC-12 | T · CA-PC-23 | S9 · SC-09/10 · UF-05 | Evidence SQLite · rehydrate | — | PARTIAL | UX hiérarchie business-first | **P1** | EPIC-D/E | W3 | CA-PC-23 | GO slice Delivery |
-| **REQ-15** | Recovery / continuité sémantique inter-session | H Continuity/recovery · J.1 | MUST | FC-13 | W · CA-PC-25 | S8 · UF-07 · SC-13/14 | Fail-closed resume · no invented state | — | PARTIAL | Boucle replan complète · disclosure honnête | **P0** | EPIC-A/D | W1/W3 | CA-PC-25 | GO slice Delivery |
-| **REQ-16** | Traçabilité DoctrinePackage — pin, digest, audit provenance | H DoctrinePackage · J.1 | MUST | FC-02 | D · CA-PC-33/34 | S2 · SC-02 | Pin partial · resolver ADAPT | D01 · DK-03/04 | PARTIAL | Résolution audit complète · preuve consommation | **P0** | EPIC-A | W1 | CA-PC-33/34 · DK-03 | **GO implémentation DP** |
+| **REQ-15** | Recovery / continuité sémantique inter-session | H Continuity/recovery · J.1 | MUST | FC-13 | W · CA-PC-25 | S8 · UF-07 · SC-13/14 | Fail-closed resume · no invented state | — | PARTIAL | Boucle replan complète · disclosure honnête | **P0** | EPIC-A/D | W1/W3 | CA-PC-25 | **G3 W1 Delivery GO** (W1 foundation · W3 E2E downstream) |
+| **REQ-16** | Traçabilité DoctrinePackage — pin, digest, audit provenance | H DoctrinePackage · J.1 | MUST | FC-02 | D · CA-PC-33/34 | S2 · SC-02 | Pin partial · resolver ADAPT | D01 · DK-03/04 | PARTIAL | Résolution audit complète · preuve consommation | **P0** | EPIC-A | W1 | CA-PC-33/34 · DK-03 | **G3 W1 Delivery GO** (after **G2**) |
 | **REQ-17** | Historique minimal Project / Cycle | H Cycle/Project history · J.1 | MUST minimal | FC-01/13 | transverse · CA-PC-34 | S1,S8 | Factual anchors SQLite | — | PARTIAL | Cycles/décisions/attempts/outcomes récupérables | P1 | EPIC-A/D | W2 | CA-PC-34 | GO slice Delivery |
 | **REQ-18** | Product Experience — complexité méthode absorbée | H Product Experience · J.1 | MUST | FC-14 | all · CA-PC-35 | S1→S12 · UF-01…07 | Pre-M6 KEEP/ADAPT · SC contract | — | PARTIAL | Alignement contrat PE final · harvest legacy | P1 | EPIC-E | W4 | CA-PC-35 · UF coverage | GO slice Delivery |
 | **REQ-19** | Baseline accessibilité (**MUST**) | J.1 accessibility | MUST | FC-14 | §17 · A11Y-PC-01…06 | all SC · F00-05 | Functional a11y · ≠ WCAG claim | — | PARTIAL | Baseline gates/terminaux/Confirmation/Evidence | **P1** | EPIC-E | W4 | A11Y-PC-* | GO slice Delivery |
 | **REQ-20** | Gouvernance / audit transverse | H Governance/audit · J.1 | MUST | FC-15 | transverse · CA-PC-12 | S11 blocked · transverse | T-A7 patterns · receipt ≠ authority | — | PARTIAL | Intégration audit autorité · présentation transverse | P1 | **CROSS-CUTTING FC-15** · présentation E · enabler autorité C | W2 | CA-PC-12 · TD-C6-03 | GO slice Delivery |
 | **REQ-21** | Invariant Git / reuse — SoT construction externe | J.1 Git/reuse | MUST | FC-15 | transverse · CA-PC-26 | — | Git SoT ext. · repo reuse KEEP | — | **SATISFIED** | Invariant tenu · polish UX gouvernance uniquement | **N/A** | EPIC-A/E | — | CA-PC-26 | N/A (invariant) |
 | **REQ-22** | Boucle fermée Evidence → Nora → LPS / Trajectory | J.1 closed loop | MUST | FC-04/06 | U,V · CA-PC-24 | S12 · UF-06 | postEvidenceNoraAnalysis partial | — | PARTIAL | Chaîne replan complète vers HD/trajectory | P1 | EPIC-D | W3 | CA-PC-24 | GO slice Delivery |
-| **REQ-23** | CKC Phase A — résolution boundée au package | DP↔CKC workstream | MUST | FC-02/03 | E · CA-PC-31 | S3 | Resolver ADAPT · no parallel engine | D01/D02/D05 · DK-01…07 | OPEN | Binding runtime NON IMPLÉMENTÉ | **P0** | EPIC-A | W1 | Phase A proof schema | **GO implémentation DP** |
+| **REQ-23** | CKC Phase A — résolution boundée au package | DP↔CKC workstream | MUST | FC-02/03 | E · CA-PC-31 | S3 | Resolver ADAPT · no parallel engine | D01/D02/D05 · DK-01…07 | OPEN | Binding runtime NON IMPLÉMENTÉ | **P0** | EPIC-A | W1 | Phase A proof schema | **G3 W1 Delivery GO** (after **G2**) |
 | **REQ-24** | CKC Phase B — consommation sémantique Nora | DP↔CKC workstream | MUST | FC-04 | E post-qual · CA-PC-35 | S3,S4 | Explicit anti-claim · semantic proof | DK-08 | DEFERRED | `consumed` ≠ sémantique Nora tant que non prouvé | **P1** | **EPIC-B** *(D consommateur aval)* | W2–W3 | DK-08 exit · semantic proof | GO Phase B distinct |
 | **SHOULD-01** | Historique riche / capsule recovery | J.2 | SHOULD | FC-13 | W enrich | S7/S8 | Non-blocking Completion | — | OPEN | Capsule riche au-delà des ancres minimales | P2 | EPIC-D | Post-W4 (P2) | — | Post-Completion |
 | **SHOULD-02** | Présentation EC avancée (diff, synthèse) | J.2 | SHOULD | FC-08/14 | L extend | S10 · SC-05/06 | Progressive disclosure extension | — | OPEN | UX diff/synthèse | P2 | EPIC-E | Post-W4 (P2) | — | Post-Completion |
@@ -215,7 +215,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | OA Native · G0-A/G0-B · C6 CLOS (pas de réouverture) |
 | **Enablers techniques** | — (comportement/UX principal) |
 | **Risques** | Fatigue sur-disclosure · sous-disclosure fausse confiance |
-| **Gate Morris** | GO slice Delivery (Wave 1 entry) |
+| **Gate Morris** | **G3 W1 Delivery GO** |
 | **Vague** | W1 |
 | **Traçabilité source** | C1 H Project/LPS · J.1 · C2 §15 · UX SC-01/13/14 |

@@ -244,7 +244,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | Continuité sémantique MUST · matérialisation sélective TD-C6-04 (aval) |
 | **Enablers techniques** | TD-C6-04 (persistance épistémique sélective) |
 | **Risques** | Sur-persistance propositions · sous-persistance blockers |
-| **Gate Morris** | GO slice Delivery |
+| **Gate Morris** | **G3 W1 Delivery GO** (W1 slice · W2 downstream per wave qualification) |
 | **Vague** | W1–W2 |
 | **Traçabilité source** | C1 J.1 continuité sémantique · C2 §15.2 · FA FC-04 COMPLETE continuity |

@@ -273,7 +273,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | TD-C6-01 T-A · TD-C6-06 pointeur courant explicite · **ADOPTÉ — implementer uniquement** |
 | **Enablers techniques** | TD-C6-01 (`SqliteTrajectoryRepository`) · TD-C6-06 (pointeur courant) |
 | **Risques** | Double Memory+SQLite pendant migration · concurrence sur pointeur courant |
-| **Gate Morris** | **GO Delivery durabilité C6** |
+| **Gate Morris** | **G3 W1 Delivery GO** |
 | **Vague** | W1 |
 | **Traçabilité source** | C1 H ProjectTrajectory · C6 TD-C6-01/06 · C2 §6.7 |

@@ -302,7 +302,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | TD-C6-02 C-A · TD-C6-05 granted-upward · **ADOPTÉ — implementer uniquement** |
 | **Enablers techniques** | TD-C6-02 · TD-C6-05 |
 | **Risques** | Grants durables trop larges · fatigue UX reconfirm |
-| **Gate Morris** | **GO Delivery durabilité C6** |
+| **Gate Morris** | **G3 W1 Delivery GO** |
 | **Vague** | W1 |
 | **Traçabilité source** | C1 H Confirmation · C6 TD-C6-02/05 · C2 §10.3 |

@@ -331,7 +331,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | Ordre K→L→M→N · C6 CLOS |
 | **Enablers techniques** | — (application ordre dans chemin produit) |
 | **Risques** | Routes legacy contournant ordre (D1/OPS1) |
-| **Gate Morris** | GO slice Delivery |
+| **Gate Morris** | **G3 W1 Delivery GO** |
 | **Vague** | W1 |
 | **Traçabilité source** | C2 ordre K→L→M→N · UX WF-05 · FA BR-PC-* |

@@ -360,7 +360,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | D01-NARROW · D02 Option B · D05 NONE · **≠ sémantique Nora Phase B** |
 | **Enablers techniques** | DK-01…07 · matérialisation/index package |
 | **Risques** | Résolveur parallèle · fuite pin fixture (DK-04) |
-| **Gate Morris** | **GO implémentation DP** (distinct from Delivery) |
+| **Gate Morris** | **G3 W1 Delivery GO** (after **G2**) |
 | **Vague** | W1 |
 | **Traçabilité source** | DP↔CKC qualification doc §I/V · C1 J.1 CKC coverage · DP↔CKC §V DK register |

@@ -389,7 +389,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | Recovery fail-closed · Recommendation ≠ HD |
 | **Enablers techniques** | — (composition boucle) |
 | **Risques** | Replan partiel sans durabilité trajectoire · requalification silencieuse ou replan structurel sans HumanDecision Pilote appropriée / gate produit applicable |
-| **Gate Morris** | GO slice Delivery |
+| **Gate Morris** | **G3 W1 Delivery GO** (W1 foundation slice · W3 E2E closure downstream) |
 | **Vague** | **W1** (foundation slice : resume/recovery prerequisites) · **W3** (closure E2E après Attempt/Evidence/terminaux) |
 | **Traçabilité source** | C1 J.1 recovery + closed loop · C2 §15 · UX UF-06 |

@@ -418,7 +418,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | Phase A ≠ Phase B · anti-affirmation DK-08 |
 | **Enablers techniques** | DK-08 (partiel) |
 | **Risques** | Sign-off Phase B prématuré · confusion démo seam avec couverture catalogue entière |
-| **Gate Morris** | Revue sortie Vague 1 · GO Phase B distinct pour clôture complète |
+| **Gate Morris** | **G3 W1 Delivery GO** (bounded seam W1) · **GO Phase B distinct** for full closure (US-P1-14) |
 | **Vague** | W1 (bornée) · clôture complète W2–W3 |
 | **Traçabilité source** | DP↔CKC §V Phase B · amend GO Wave 1 exit · C1 REQ-24 |

@@ -666,7 +666,7 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D
 | **Architecture consommée** | D01-NARROW · pin partiel aujourd'hui |
 | **Enablers techniques** | DK-03 |
 | **Risques** | Exposition mécanique package interne au-delà besoin métier |
-| **Gate Morris** | GO implémentation DP · GO slice Delivery |
+| **Gate Morris** | **G3 W1 Delivery GO** (after **G2**) · future W2 slice gate |
 | **Vague** | W1–W2 |
 | **Traçabilité source** | C1 J.1 DoctrinePackage · DP↔CKC §I |

@@ -789,19 +789,19 @@ Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance D

 | ID Enabler | Description | Statut | Epic principal | US fonctionnelles servies | Sortie / preuve | Gate Morris |
 |---|---|---|---|---|---|---|
-| **TD-C6-01** | Durabilité SQLite trajectoire (T-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-02 · US-P1-07 | CA-PC-06/07 · tests persistance repo | GO Delivery durabilité C6 |
-| **TD-C6-02** | Scope SQLite Confirmation (C-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | CA-PC-11/13 · tests autorité restart | GO Delivery durabilité C6 |
-| **TD-C6-03** | AuthorityVerificationReceipt (A-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C/E | US-P1-16 · REQ-20 | CA-PC-12 · receipt ≠ preuve autorité | GO Delivery durabilité C6 |
-| **TD-C6-04** | Persistance épistémique sélective (E-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-A/B | US-P0-02 · US-P1-01 | CA-PC-25 · tests règles matérialisation | GO Delivery durabilité C6 |
-| **TD-C6-05** | Confirmation durable depuis `granted` upward | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | granted survit restart · requested éphémère | GO Delivery durabilité C6 |
-| **TD-C6-06** | Pointeur trajectoire courante explicite | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-07 | pas de proposed-as-current · tests pointeur | GO Delivery durabilité C6 |
-| **DK-01** | Retirer chemins méthode catalogue comme SoT | OPEN | EPIC-A | US-P0-06 · US-P1-09 | index package remplace 6 refs méthode | GO implémentation DP |
-| **DK-02** | Remplacer méthode `CKC_REFERENCE_MANIFEST` | OPEN | EPIC-A | US-P0-06 | artefact index interne package | GO implémentation DP |
-| **DK-03** | Preuve consommation avec identité package | OPEN | EPIC-A | US-P0-06 · REQ-16 | schéma preuve COMPLETE · CA-PC-33 | GO implémentation DP |
-| **DK-04** | Fuite pin fixture par défaut vers UX démo | OPEN/DEFERRED | EPIC-A | US-P0-06 (materialization) | cutover package produit · quarantaine fixture | gate matérialisation package |
-| **DK-05** | `doctrineStatus=method-candidate` hardcoded | OPEN | EPIC-A | US-P0-06 | décision statut package-aware | GO implémentation DP |
-| **DK-06** | Chemins dual A/B non joints (composition) | OPEN | EPIC-A | US-P0-06 | composition service/F2 ADAPT | GO implémentation DP |
-| **DK-07** | Fallback méthode synthétique comme policy globale | OPEN | EPIC-A | US-P0-06 | policy locale package ou none · D05 NONE | GO implémentation DP |
+| **TD-C6-01** | Durabilité SQLite trajectoire (T-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-02 · US-P1-07 | CA-PC-06/07 · tests persistance repo | **G3 W1 Delivery GO** |
+| **TD-C6-02** | Scope SQLite Confirmation (C-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | CA-PC-11/13 · tests autorité restart | **G3 W1 Delivery GO** |
+| **TD-C6-03** | AuthorityVerificationReceipt (A-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C/E | US-P1-16 · REQ-20 | CA-PC-12 · receipt ≠ preuve autorité | **G3 W1 Delivery GO** (optional W1 scope) |
+| **TD-C6-04** | Persistance épistémique sélective (E-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-A/B | US-P0-02 · US-P1-01 | CA-PC-25 · tests règles matérialisation | **G3 W1 Delivery GO** |
+| **TD-C6-05** | Confirmation durable depuis `granted` upward | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | granted survit restart · requested éphémère | **G3 W1 Delivery GO** |
+| **TD-C6-06** | Pointeur trajectoire courante explicite | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-07 | pas de proposed-as-current · tests pointeur | **G3 W1 Delivery GO** |
+| **DK-01** | Retirer chemins méthode catalogue comme SoT | OPEN | EPIC-A | US-P0-06 · US-P1-09 | index package remplace 6 refs méthode | **G3 W1 Delivery GO** (after **G2**) |
+| **DK-02** | Remplacer méthode `CKC_REFERENCE_MANIFEST` | OPEN | EPIC-A | US-P0-06 | artefact index interne package | **G3 W1 Delivery GO** (after **G2**) |
+| **DK-03** | Preuve consommation avec identité package | OPEN | EPIC-A | US-P0-06 · REQ-16 | schéma preuve COMPLETE · CA-PC-33 | **G3 W1 Delivery GO** (after **G2**) |
+| **DK-04** | Fuite pin fixture par défaut vers UX démo | OPEN/DEFERRED | EPIC-A | US-P0-06 (materialization) | cutover package produit · quarantaine fixture | **G2** · **G3 W1 Delivery GO** after G2 |
+| **DK-05** | `doctrineStatus=method-candidate` hardcoded | OPEN | EPIC-A | US-P0-06 | décision statut package-aware | **G3 W1 Delivery GO** (after **G2**) |
+| **DK-06** | Chemins dual A/B non joints (composition) | OPEN | EPIC-A | US-P0-06 | composition service/F2 ADAPT | **G3 W1 Delivery GO** (after **G2**) |
+| **DK-07** | Fallback méthode synthétique comme policy globale | OPEN | EPIC-A | US-P0-06 | policy locale package ou none · D05 NONE | **G3 W1 Delivery GO** (after **G2**) |
 | **DK-08** | Sur-interprétation résolution `consumed` comme sémantique Nora | OPEN | **EPIC-B** *(D aval)* | US-P1-14 · US-P0-08 · REQ-24 | anti-affirmation explicite + preuve sémantique · sortie Phase B | GO Phase B distinct |

 **Règles :** C6 **CLOS — NE PAS ROUVRIR** · enablers **implement-only** · sorties DK **≠** autorisées par adoption architecture seule · productisation REAL et runtime v3 restent **gates Morris séparées**.
@@ -832,15 +832,27 @@ Post-W4 : P2 SHOULD · P3 FUTURE. **UAT/e2e requis par sortie de Vague** — SUC
 | **P3** | FUTURE-01…06 |
 | **N/A** | REQ-21 Git/reuse SATISFIED |

-**NON AUTORISÉ :** Delivery · REAL · runtime v3 · choix packageVersion · intégration Git Backlog.
+**NON AUTORISÉ :** Delivery · REAL · runtime v3 adoption · packageVersion selection / package implementation.
+
+**Backlog Git integration :** **IN PROGRESS** via G1 / Draft PR #393 · **≠ integrated on main until merge**.

-**Prochaine gate :** REVUE CHATGPT VERROUILLÉE AUX SOURCES → VALIDATION BACKLOG MORRIS → readiness Vague 1 (GO distinct).
+**CURRENT :** Backlog **VALIDATED BY MORRIS** · W1 readiness **CHATGPT QUALIFIED** · **G1 IN PROGRESS** via PR #393
+
+**NEXT :** G1 merge/main truth → **G2** Morris Product DoctrinePackage Materialization Decision → **G3** Morris W1 Delivery GO.

 ---

-## 11. Gates Morris restantes
+## 11. Gates Morris restantes (modèle actif pré-W1)
+
+| Gate | But | État |
+|---|---|---|
+| **G1** | Product Completion Git truth — backlog · readiness · roadmap sur **main** | **IN PROGRESS** via Draft PR #393 · ≠ main until merge |
+| **G2** | Product DoctrinePackage materialization — `packageVersion` · root · cutover · fixture exit | **OPEN** |
+| **G3** | Morris W1 Delivery GO — umbrella Tracks A–E (C6 · DP Phase A · bounded seam · product proof) | **NOT AUTHORIZED** |
+
+**Downstream distinct (hors G3) :** full Phase B (US-P1-14) · REAL · future W2/W3/W4 Delivery gates · runtime v3 adoption · future Git transport/merge gates par tranche.

-Validation backlog Morris · GO implémentation DP · matérialisation package/packageVersion (DK-04) · GO Phase B distinct · GO Delivery durabilité C6 · GO slice Delivery par Vague · gate REAL (distinct de REQ-11) · runtime v3 PAS ce cycle.
+**Historical / absorbed into G3 :** validation backlog Morris *(satisfied)* · GO implémentation DP · GO Delivery durabilité C6 · GO slice Delivery micro-gates W1.

 ---

@@ -880,4 +892,4 @@ Validation backlog Morris · GO implémentation DP · matérialisation package/p

 ---

-*Corrigé 2026-08-22 13:08 UTC+02:00 · Corrections ciblées R1→R8 · Delivery NON AUTORISÉE · validation Morris requise.*
+*Validated by Morris 2026-08-22 · integration candidate via Draft PR #393 · G1 in progress · G2 OPEN · G3 NOT AUTHORIZED · Delivery NO · REAL ZERO · runtime v3 NON ADOPTED.*
diff --git a/projects/sfia-studio/product-completion/07-product-completion-wave-1-delivery-readiness.md b/projects/sfia-studio/product-completion/07-product-completion-wave-1-delivery-readiness.md
index a72cd1a2..b7579906 100644
--- a/projects/sfia-studio/product-completion/07-product-completion-wave-1-delivery-readiness.md
+++ b/projects/sfia-studio/product-completion/07-product-completion-wave-1-delivery-readiness.md
@@ -369,7 +369,7 @@ Décision requise :

 **Schema :** une migration additive sur `lib/oa/project/infrastructure/sqlite/db.ts` suffit (M5 pattern).

-**Parallélisation B vs A :** B1–B3 peuvent démarrer **en parallèle** de A2–A4 **après** GO C6 Delivery · B5 (schema) doit coordonner migrations · **A1 (matérialisation) bloque A** mais **ne bloque pas** B1–B3 techniquement.
+**Parallélisation B vs A :** Track B / B1–B3 peuvent démarrer sous **G3 W1 Delivery GO**, **en parallèle** de Track A selon les dépendances **G2** applicables, avec coordination du schema B5 · **A1 (matérialisation) bloque A** mais **ne bloque pas** B1–B3 techniquement une fois G3 ouvert.

 **Pas de réouverture C6.**

@@ -419,8 +419,9 @@ Décision requise :
 | `lib/oa/cycle/infrastructure/ckcReferenceManifest.ts` | A3 replace |
 | `lib/oa/cycle/domain/cycleTypeCatalog.ts` | A3 ADAPT |
 | `lib/oa/cycle/domain/ckcConsumptionProof.ts` | A5 |
-| `lib/vertical-slice-core/localProjectComposition.ts` | A1 pin/registry |
-| `lib/oa/doctrine/fixtures/registry.json` | A1 |
+| `lib/vertical-slice-core/localProjectComposition.ts` | A1 pin/registry (G2-dependent root) |
+| Product DoctrinePackage registry/materialization (G2-dependent) | **LIKELY under recommended Option A candidate:** `lib/oa/doctrine/product/` — registry + package tree · **CREATE** under G3 after G2 |
+| `lib/oa/doctrine/fixtures/registry.json` | **CONDITIONAL ONLY** — transitional/quarantine handling if explicitly required · **NOT target product registry** · **NOT guaranteed future modification** |
 | `features/project-assistant/f2/orchestrateF2.ts` | C/D |
 | `features/project-assistant/f2/qualify.ts` | C |
 | `features/pre-m6-product-ui/surfaces/RecoverySurface.tsx` | E |
