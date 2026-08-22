# SFIA Studio — Product Completion — Cycle 5 — Backlog / user stories (amendement verrouillé aux sources)

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 5 — Backlog / user stories — **PASSE D'AMENDEMENT** |
| **Profil SFIA** | STANDARD |
| **Typologie** | DOC |
| **Base Git** | `origin/main` @ `aca3dc8ab250ea1d751a833912787751e856c7b6` |
| **Branche auteur** | `docs/sfia-studio-product-completion-backlog` *(intégration candidate · Draft PR · ≠ main)* |
| **GO Morris consommé (initial)** | DÉMARRAGE CYCLE 5 BACKLOG / USER STORIES |
| **GO Morris consommé (amend)** | **AMENDEMENT CYCLE 5 BACKLOG SOUS CORPUS PRODUIT VERROUILLÉ** |
| **GO Morris consommé (correction)** | **CORRECTION CIBLÉE BACKLOG APRÈS REVUE CHATGPT VERROUILLÉE AUX SOURCES** — appliquer uniquement R1→R8 · préserver 5 Epics · préserver 4 Vagues · CKC Phase A+B explicite · PAS DE CODE · PAS DE DELIVERY · PAS DE REAL |
| **GO Morris consommé (validation)** | **VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 5 — BACKLOG / USER STORIES — SOURCE-LOCKED PRODUCT MODEL — FIVE FUNCTIONAL EPICS — FOUR MACRO WAVES — P0/P1 PRODUCT COMPLETION CUT-LINE — CKC TRACK RESOLVE → CONSUME → INTEGRATE — NON-BLOCKING AUDIT RESERVE R5 ACCEPTED — NO DELIVERY AUTHORIZED BY THIS VALIDATION — RUNTIME V3 NON ADOPTED** *(2026-08-22 · parcours Product Completion)* |
| **Statut** | **VALIDATED BY MORRIS — INTEGRATION CANDIDATE — NOT YET ON MAIN** |
| **Intégration Git** | **INTEGRATION CANDIDATE** — transport via Draft PR `docs/sfia-studio-product-completion-backlog` → `main` · **≠ INTEGRATED ON MAIN** tant que PR non mergée |
| **Modèle validé** | **5 Epics fonctionnels · 4 macro Vagues · cut-line P0+P1 · réserve audit R5 ACCEPTED — NON-BLOCKING** |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NON AUTORISÉE** |
| **REAL** | **ZERO** |

## Anti-affirmations

- **≠** INTEGRATED ON MAIN · **≠** PRÊT POUR DELIVERY · **≠** autorisation de Delivery · **≠** W1 implémentée · **≠** runtime v3 ADOPTED.
- Validation Morris backlog **≠** GO Delivery W1 · **≠** matérialisation DoctrinePackage · **≠** packageVersion choisi.
- Contenu backlog dérivé **UNIQUEMENT** du corpus produit verrouillé (§4 GO amend) — pas Roadmap · pas méthode/v2.6 · pas use-cases historiques.
- Priorité d'écart **≠** niveau C1 MUST/SHOULD/FUTURE · un MUST SATISFIED peut être **N/A**.
- Enabler technique **≠** User Story · Phase A **≠** Phase B · `consumed=true` **≠** preuve sémantique Nora.
- Recommandation de Vague **≠** GO Morris Delivery · packageVersion/matérialisation **DIFFÉRÉS** — gate Morris requise.

---

## 0. Conformité verrouillage des sources

### 0.1 Corpus produit verrouillé (SEULES sources de contenu backlog)

| ID | Document | Rôle |
|---|---|---|
| A | `01-product-completion-cadrage.md` | Cible · périmètre · barre de completion · H+J |
| B | `02-product-completion-conception-fonctionnelle.md` | A→W · CA-PC · ordre d'autorité |
| C | UX EA / Wireframes / Screens | S1→S12 · UF · contrat 17 écrans |
| D | `03-product-completion-architecture-fonctionnelle.md` | FC-01…15 · tranches · pas de parallèle |
| E | `06-product-completion-architecture-technique-delta.md` | TD-C6-01…06 · **CLOSED** |
| F | `sfia-studio-doctrinepackage-runtime-ckc-integration-qualification.md` | D01/D02/D05 · Phase A/B · DK-01…08 |

### 0.2 Sources process-only (PAS contenu backlog)

Build Doctrine · Convergence Roadmap · méthode SFIA · template de cycle · operating model · rules/guardrails — gouvernance/handoff uniquement.

### 0.3 Explicitement exclus du contenu backlog

`05-product-capabilities-and-use-cases.md` · cadrage pré-PC · PRE-M6 comme exigences indépendantes · runtime v2.6 · listes roadmap historiques · invention au niveau fichier runtime · mémoire de conversation.

### 0.4 Synthèse des changements vs candidat précédent

| Problème (prior) | Correction (cette passe) |
|---|---|
| Comptage simpliste « 25/25 MUST §J.1 » | **Registre d'exigences normalisé** depuis C1 §H + §J dé-dupliqué |
| Git/reuse comme story P2 | **REQ-21 SATISFIED** invariant · écart **N/A** |
| Execute HOW en P2 | **REQ-11/12 P1** — clôture MUST mécanisme générique |
| Accessibilité en P2 | **REQ-19 P1** baseline MUST |
| CKC Phase B implicite | **REQ-24 P1** + **US-P1-14** + piste CKC explicite |
| Items C6 comme US | **Enablers techniques** mappés aux US fonctionnelles |
| « Representative set » P1 | **Spécification complète P0/P1** (8 P0 · 15 P1) |
| Micro-vagues de delivery | **Quatre macro-Vagues** W1–W4 + P2 post-Completion |
| Gouvernance dans EPIC-E seulement | **FC-15 transverse** · EPIC-E présente la vérité d'audit |
| UAT réserve passive | **Obligation de sortie UAT** sur les Vagues |

---

## 1. Intention exécutive du backlog produit

Transformer la **Product Completion validée** (corpus verrouillé uniquement) en **cinq macro-Epics fonctionnels**, un **registre d'exigences fidèle aux sources**, des **User Stories P0/P1**, des **Enablers techniques**, une **piste CKC Phase A/B**, et une **roadmap capacitaire en quatre Vagues** — sans ouvrir la Delivery.

**Ordre de raisonnement (obligatoire) :** outcome Pilote → capacité fonctionnelle → Epic → dépendances → priorité d'écart → User Story → acceptation/preuve → mapping technique secondaire.

**N'effectue PAS :** rouvrir C6 · redécider D01/D02/D05 · choisir packageVersion · ouvrir Git Backlog · autoriser REAL/Delivery/runtime v3.

---

## 2. Cinq Epics fonctionnels (préservés)

| Epic | Finalité | FA principal | Périmètre principal |
|---|---|---|---|
| **EPIC-A** — Entrer, reprendre et qualifier le Project | Le Pilote crée/ouvre/reprend un Project et obtient un contexte applicable et une qualification véridiques sans piloter manuellement la mécanique SFIA | FC-01, FC-02, FC-03, FC-05 | Continuité Project · DoctrinePackage applicable · qualification initiale · **CKC Phase A** · LPS/contexte · vérité source/package · prérequis continuité sémantique · prérequis binding/évolutivité catalogue |
| **EPIC-B** — Raisonner, piloter la trajectoire et décider | Le Pilote travaille avec Nora, comprend la trajectoire et prend des décisions structurelles explicites | FC-04, FC-06, FC-07, FC-05 (LPS consumed) | Raisonnement Nora · **consommation sémantique CKC Phase B** · états épistémiques matérialisés · Options · Recommendation · ProjectTrajectory · HumanDecision / DecisionBasis · sémantique replanification |
| **EPIC-C** — Préparer et autoriser l'exécution | Le Pilote comprend l'ExecutionContract et n'autorise que les effets nécessaires | FC-08, FC-09 | EC native · progressive disclosure · inspect · amend/re-inspect · Confirmation si requis · AgentCapability · autorité effective · suffisance exécuteur · autorisation bloquée · preuve audit autorité |
| **EPIC-D** — Exécuter, prouver, reprendre et replanifier | Le Pilote lance une exécution gouvernée, comprend l'issue, voit la preuve et peut reprendre/replanifier honnêtement | FC-10…FC-13, FC-04 post-Evidence | ExecutionAttempt · cycle de vie · SUCCESS/STOP/FAIL · diagnostic lisible métier · Evidence/ReviewBundle · Nora post-Evidence · recovery · **historique minimal Project/Cycle** · boucle requalification/replan |
| **EPIC-E** — Utiliser Studio comme un produit cohérent | Le Pilote vit la boucle Product Completion complète sans exposition à la mécanique SFIA | FC-14 | S1→S12 · contrats Product Experience validés · baseline accessibilité · présentation Evidence business-first · progressive disclosure · états/blocked/error/recovery · présentation historique · absorption méthode · cohérence responsive |

**TRANSVERSE (PAS un Epic) :** FC-15 Gouvernance / audit / provenance / policy / dette / anti-affirmations / discipline Git-reuse. EPIC-E **présente** la vérité d'audit ; FC-15 **possède** la vérité d'audit transverse.

---

## 3. Piste CKC Product Completion (PAS un sixième Epic)

Traverse **EPIC-A → EPIC-B → EPIC-D**. **Pas de second moteur de qualification · pas de second résolveur CKC · pas de second orchestrateur F2/Nora · pas de chemin méthode brut comme SoT runtime.**

### 3.1 Ordre cible

**A1** Qualification initiale → **A2** Résolution CKC boundée au DoctrinePackage → **B** Consommation sémantique Nora → Recommendation optionnelle de requalifier via le mécanisme de qualification existant.

### 3.2 Phase A — MUST / P0 là où ouvert

| Périmètre | Obligation de sortie |
|---|---|
| Vérité DoctrinePackage applicable au Project | Pin + manifest reconstructible |
| Dépendance matérialisation/cutover package produit | **DIFFÉRÉ — gate Morris** (Cursor NE DOIT PAS choisir packageVersion) |
| Manifest package → index CKC interne protégé par digest | DK-01, DK-02 |
| `cycleTypeId` → `ckcId` + `contractVersion` + `sourceDigest` | Resolver ADAPT · fail-closed |
| Provenance + preuve de consommation | DK-03 · CA-PC-33/34 |
| Fail-closed · fallback NONE (premier package produit) | D05 NONE adopted |
| Retirer chemins méthode comme SoT runtime Studio | DK-01…07 selon applicabilité |
| Preuve de résolution **ne peut pas revendiquer usage sémantique Nora** | Anti-affirmation Phase A ≠ Phase B |

**Gate structurelle ouverte :** premier `packageVersion` produit / détails matérialisation restent **DIFFÉRÉS** — dépendance **gate Morris** explicite (DK-04).

**US principale :** US-P0-06 · **Vague :** W1

### 3.3 Phase B — MUST / P1 · owner **EPIC-B**

**Owner primaire :** EPIC-B (raisonnement Nora · consommation sémantique CKC Phase B). **EPIC-D** consomme le raisonnement Nora aval (post-Evidence/replan) — **ne possède pas** Phase B.

**Outcome fonctionnel complet :** le Pilote travaille avec Nora dont clarification/challenge/recommendation est **réellement informé par le CKC applicable résolu** sans exposer la mécanique CKC brute ni créer d'autorité.

**L'acceptation doit prouver :** contenu cognitif CKC résolu atteint le raisonnement Nora · outputs attribuables · Recommendation reste Recommendation · pas de HumanDecision · requalify contrôlé via mécanisme existant · `consumed=true` insuffisant · pas de fallback méthode/v2.6 brut.

**US principale :** US-P1-14 (**EPIC-B**) · **Vague :** W2–W3 · **Gate Morris :** GO Phase B distinct

**Seam bornée Vague 1 :** US-P0-08 (**EPIC-B**) — une preuve cognitive CKC→Nora réelle après Phase A (≠ clôture Phase B complète).

### 3.4 Sortie completion CKC

Tous CKCs applicables résolvables via package · pas d'entrée non couverte silencieuse · pas de SoT chemin méthode · provenance reconstructible · consommation sémantique Nora prouvée · comportement différencié sur cycles représentatifs · évolutivité catalogue · pas de moteur parallèle. **Cible : sortie Vague 3.**

### 3.5 DK-01…DK-08

Voir §8 Enablers techniques. DK-04 → **gate Morris matérialisation package**.

---

## 4. Gouvernance / audit transverse (FC-15)

Transverse aux Epics — EPIC-E présente · FC-15 possède. Inclut provenance DoctrinePackage/CKC · matérialisation épistémique · HD/DecisionBasis · cycle de vie Confirmation · vérification autorité (TE TD-C6-03) · liaison EC/Attempt/Evidence · anti-affirmations · REQ-21 Git/reuse **SATISFIED/N/A**.

---

## 5. Registre des exigences sources Product Completion

> **Règle de couverture :** normalisé depuis C1 §H + §J dé-dupliqué. **Niveau** = classification C1. **Priorité d'écart** = écart restant uniquement (≠ Niveau). **≠** comptage simpliste « 25/25 MUST §J.1 ».

| ID exigence | Exigence canonique | Source C1 | Niveau | Owner FA | Refs C2 / CA | Refs UX | Contrainte tech | Contrainte CKC/DP | État déclaré source | Écart restant | Priorité écart | Epic | Vague | Preuve de sortie | Gate Morris |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **REQ-01** | Continuité Project — créer, retrouver, reprendre un Project durable | H Project · J.1 | MUST | FC-01 | A,B · CA-PC-01/02 | S1,S2 · UF-01/07 | OA Native + Product SQLite · no parallel product path | — | PARTIAL | Finition pilotage E2E · contrat reprise honnête | P1 | EPIC-A | W1 | CA-PC-01/02 | **G3 W1 Delivery GO** |
| **REQ-02** | Living Project State — état métier fiable, prochaine action, blockers | H LPS · J.1 | MUST | FC-05 | G · CA-PC-25 | S5 · SC-03 | SQLite LPS · Nora proposes · Studio persists | — | PARTIAL | État métier utile complet au-delà des ancres | **P0** | EPIC-A | W1 | CA-PC-25 | **G3 W1 Delivery GO** |
| **REQ-03** | Raisonnement Nora — comprendre, qualifier, analyser, recommander (**propose-only**) | H Nora · J.1 | MUST | FC-04 | C,D,E,F,I,U · CA-PC-03/35 | S3,S4 · UF-02/06 | Process-local conv · no LIVE this cycle | Phase B downstream (REQ-24) | PARTIAL | Continuité sémantique inter-session · pas d'autorité inventée | **P0** | **EPIC-B** *(A/D consomment)* | W1–W3 | CA-PC-03/25/35 | **G3 W1 Delivery GO** (W1 slice · W2/W3 downstream) |
| **REQ-04** | Qualification / CKC — couverture cognitive complète du catalogue applicable | H Qualification/CKC · J.1 | MUST | FC-03 | E · CA-PC-31 | S3 · UF-02 | Package-bound resolver ADAPT | D01-NARROW · D02 Option B · D05 NONE · DK-01…07 | OPEN | SoT chemin méthode → index package · fail-closed NONE | **P0** | EPIC-A | W1 | CA-PC-31 · Phase A proof | **G3 W1 Delivery GO** (after **G2** where package materialization required) |
| **REQ-05** | Évolutivité Cycle Catalog — nouveau type ≠ nouveau moteur | H Cycle Catalog · J.1 | MUST | FC-03 | E · CA-PC-26 | S3 | Catalog routing ADAPT · no N engines | Package index artifact | PARTIAL | Invariant démontrable post Phase A | P1 | EPIC-A | W3 | CA-PC-26 | GO slice Delivery |
| **REQ-06** | ProjectTrajectory — `proposed` vs `decided` durable | H ProjectTrajectory · J.1 | MUST | FC-06 | H,V · CA-PC-06/07 | S6 · SC-04 | TD-C6-01/06 **ADOPTED — implement only** | — | OPEN | Mémoire seule → SQLite · pointeur courant explicite | **P0** | EPIC-B | W1 | CA-PC-06/07 | **G3 W1 Delivery GO** |
| **REQ-07** | HumanDecision / DecisionBasis — arbitrage Pilote explicite | H HumanDecision · J.1 | MUST | FC-07 | J · CA-PC-08/09/10 | S4,S6 · UF-03 | HD SQLite durable | Recommendation ≠ HD | PARTIAL | UX liaison trajectoire · complétude DecisionBasis | P1 | EPIC-B | W2 | CA-PC-08/10 | GO slice Delivery |
| **REQ-08** | Confirmation — autorisation proportionnelle quand les effets l'exigent | H Confirmation · J.1 | MUST | FC-09 | M · CA-PC-11/13/30 | S11 · UF-04 · SC-06/07 | TD-C6-02/05 **ADOPTED** · K→L→M→N | — | OPEN | `granted` durable · autorité consommée · pas de confirm avant inspect | **P0** | EPIC-C | W1 | CA-PC-11/13/30 | **G3 W1 Delivery GO** |
| **REQ-09** | ExecutionContract native + inspect + parité canonique | H Native EC · J.1 | MUST | FC-08 | K,L · CA-PC-14/15/16 | S10 · SC-05/06 · UF-04 | EC SQLite · PREPARE projection ADAPT | — | PARTIAL | Parité champs · fidélité progressive disclosure | P1 | EPIC-C/E | W2 | CA-PC-14/15/16 | GO slice Delivery |
| **REQ-10** | Enveloppe AgentCapability — bornes autorité/gouvernance génériques | H AgentCapability · J.1 | MUST | FC-09 | N · CA-PC-27/32 | S11 · SC-07 | Bounded RO · Gate D patterns · not feature catalog | — | PARTIAL | Enveloppe générique déterminable · UX état bloqué | P1 | EPIC-C | W2 | CA-PC-32 | GO slice Delivery |
| **REQ-11** | Mécanisme générique EC → agent d'exécution | H Cursor/agent · J.1 | MUST | FC-10 | O,P · CA-PC-17/19 | S12 · UF-05 | Fixture default · REAL gated · one mechanism | — | PARTIAL | Chemin générique productisé · gate REAL séparée | **P1** | EPIC-D | W3 | CA-PC-17/19 | GO slice Delivery · REAL distinct |
| **REQ-12** | Cycle de vie exécution / Attempt — accepted→running→terminal | H Execution lifecycle · J.1 | MUST | FC-10 | O · CA-PC-17/18 | S12 · WF-06 | Attempt SQLite · scope enforcement | — | PARTIAL | Tous effets autorisés · visibilité cycle de vie | **P1** | EPIC-D | W3 | CA-PC-17/18 | GO slice Delivery |
| **REQ-13** | SUCCESS / STOP / FAIL — terminaux métier honnêtes | H SUCCESS/STOP/FAIL · J.1 | MUST | FC-11 | Q,R,S · CA-PC-20/21/22 | S12 · SC-08–11 · UF-05 | Terminal mapping ADAPT | A11Y text distinction | PARTIAL | Sémantiques métier distinctes · pas de READY auto | **P1** | EPIC-D | W3 | CA-PC-20/22 | GO slice Delivery |
| **REQ-14** | Evidence / ReviewBundle — preuve business-first | H Evidence · J.1 | MUST | FC-12 | T · CA-PC-23 | S9 · SC-09/10 · UF-05 | Evidence SQLite · rehydrate | — | PARTIAL | UX hiérarchie business-first | **P1** | EPIC-D/E | W3 | CA-PC-23 | GO slice Delivery |
| **REQ-15** | Recovery / continuité sémantique inter-session | H Continuity/recovery · J.1 | MUST | FC-13 | W · CA-PC-25 | S8 · UF-07 · SC-13/14 | Fail-closed resume · no invented state | — | PARTIAL | Boucle replan complète · disclosure honnête | **P0** | EPIC-A/D | W1/W3 | CA-PC-25 | **G3 W1 Delivery GO** (W1 foundation · W3 E2E downstream) |
| **REQ-16** | Traçabilité DoctrinePackage — pin, digest, audit provenance | H DoctrinePackage · J.1 | MUST | FC-02 | D · CA-PC-33/34 | S2 · SC-02 | Pin partial · resolver ADAPT | D01 · DK-03/04 | PARTIAL | Résolution audit complète · preuve consommation | **P0** | EPIC-A | W1 | CA-PC-33/34 · DK-03 | **G3 W1 Delivery GO** (after **G2**) |
| **REQ-17** | Historique minimal Project / Cycle | H Cycle/Project history · J.1 | MUST minimal | FC-01/13 | transverse · CA-PC-34 | S1,S8 | Factual anchors SQLite | — | PARTIAL | Cycles/décisions/attempts/outcomes récupérables | P1 | EPIC-A/D | W2 | CA-PC-34 | GO slice Delivery |
| **REQ-18** | Product Experience — complexité méthode absorbée | H Product Experience · J.1 | MUST | FC-14 | all · CA-PC-35 | S1→S12 · UF-01…07 | Pre-M6 KEEP/ADAPT · SC contract | — | PARTIAL | Alignement contrat PE final · harvest legacy | P1 | EPIC-E | W4 | CA-PC-35 · UF coverage | GO slice Delivery |
| **REQ-19** | Baseline accessibilité (**MUST**) | J.1 accessibility | MUST | FC-14 | §17 · A11Y-PC-01…06 | all SC · F00-05 | Functional a11y · ≠ WCAG claim | — | PARTIAL | Baseline gates/terminaux/Confirmation/Evidence | **P1** | EPIC-E | W4 | A11Y-PC-* | GO slice Delivery |
| **REQ-20** | Gouvernance / audit transverse | H Governance/audit · J.1 | MUST | FC-15 | transverse · CA-PC-12 | S11 blocked · transverse | T-A7 patterns · receipt ≠ authority | — | PARTIAL | Intégration audit autorité · présentation transverse | P1 | **CROSS-CUTTING FC-15** · présentation E · enabler autorité C | W2 | CA-PC-12 · TD-C6-03 | GO slice Delivery |
| **REQ-21** | Invariant Git / reuse — SoT construction externe | J.1 Git/reuse | MUST | FC-15 | transverse · CA-PC-26 | — | Git SoT ext. · repo reuse KEEP | — | **SATISFIED** | Invariant tenu · polish UX gouvernance uniquement | **N/A** | EPIC-A/E | — | CA-PC-26 | N/A (invariant) |
| **REQ-22** | Boucle fermée Evidence → Nora → LPS / Trajectory | J.1 closed loop | MUST | FC-04/06 | U,V · CA-PC-24 | S12 · UF-06 | postEvidenceNoraAnalysis partial | — | PARTIAL | Chaîne replan complète vers HD/trajectory | P1 | EPIC-D | W3 | CA-PC-24 | GO slice Delivery |
| **REQ-23** | CKC Phase A — résolution boundée au package | DP↔CKC workstream | MUST | FC-02/03 | E · CA-PC-31 | S3 | Resolver ADAPT · no parallel engine | D01/D02/D05 · DK-01…07 | OPEN | Binding runtime NON IMPLÉMENTÉ | **P0** | EPIC-A | W1 | Phase A proof schema | **G3 W1 Delivery GO** (after **G2**) |
| **REQ-24** | CKC Phase B — consommation sémantique Nora | DP↔CKC workstream | MUST | FC-04 | E post-qual · CA-PC-35 | S3,S4 | Explicit anti-claim · semantic proof | DK-08 | DEFERRED | `consumed` ≠ sémantique Nora tant que non prouvé | **P1** | **EPIC-B** *(D consommateur aval)* | W2–W3 | DK-08 exit · semantic proof | GO Phase B distinct |
| **SHOULD-01** | Historique riche / capsule recovery | J.2 | SHOULD | FC-13 | W enrich | S7/S8 | Non-blocking Completion | — | OPEN | Capsule riche au-delà des ancres minimales | P2 | EPIC-D | Post-W4 (P2) | — | Post-Completion |
| **SHOULD-02** | Présentation EC avancée (diff, synthèse) | J.2 | SHOULD | FC-08/14 | L extend | S10 · SC-05/06 | Progressive disclosure extension | — | OPEN | UX diff/synthèse | P2 | EPIC-E | Post-W4 (P2) | — | Post-Completion |
| **SHOULD-03** | Intake PJ / sources utilisateur | H Artifacts/PJ · J.2 | SHOULD | FC-02 | — | — | NEW SHOULD · provenance design | — | OPEN | Intake absent produit | P2 | EPIC-A | Post-W4 (P2) | — | Post-Completion |
| **SHOULD-04** | UX Evidence enrichie | J.2 | SHOULD | FC-12/14 | T extend | S9 | After business-first baseline | — | OPEN | Couches enrichissement | P2 | EPIC-E | Post-W4 (P2) | — | Post-Completion |
| **SHOULD-05** | UX AMEND sophistiquée | J.2 | SHOULD | FC-07 | J extend | S4/S6 | G-UX-08 reserve | — | OPEN | Polish boucle AMEND | P2 | EPIC-B | Post-W4 (P2) | — | Post-Completion |
| **SHOULD-06** | Mémoire riche au-delà de l'intégrité | J.2 | SHOULD | FC-05/13 | W extend | S8 | Transcript ≠ continuity MUST | — | OPEN | Historique riche optionnel | P2/P3 | EPIC-D | Post-W4 (P2) | — | Post-Completion |
| **FUTURE-01** | Multi-utilisateur / auth / partage | J.3 | FUTURE | FC-14/15 | — | — | Auth.js/IAM separate | — | DEFERRED | Gate produit post-Completion | P3 | EPIC-E | — | — | Gate Morris explicite |
| **FUTURE-02** | Connecteurs Notion | J.3 | FUTURE | — | — | — | Notion ≠ SoT | — | DEFERRED | Gate produit explicite | P3 | — | — | — | Gate Morris explicite |
| **FUTURE-03** | FinOps / RUN profond | J.3 | FUTURE | — | — | — | FinOps cycle if ever | — | DEFERRED | — | P3 | — | — | — | Gate Morris explicite |
| **FUTURE-04** | Ops GitHub natives Studio | J.3 | FUTURE | FC-15 | — | — | Implementation detail optional | — | DEFERRED | — | P3 | EPIC-A | — | — | Gate Morris explicite |
| **FUTURE-05** | Capitalisation vers méthode globale | J.3 | FUTURE | — | — | — | Gate Morris séparée | — | DEFERRED | — | P3 | — | — | — | Gate Morris séparée |
| **FUTURE-06** | Maturité / adoption au-delà barre Completion | J.3 | FUTURE | — | — | — | Includes runtime v3 ADOPTED | — | DEFERRED | — | P3 | — | — | — | Gate Morris séparée |

---

## 6. User Stories P0 complètes (8)

### US-P0-01 — Reprise honnête du projet

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-01 |
| **Epic** | EPIC-A |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-01, REQ-02, REQ-15 |
| **C2** | A, B, W(entry) · CA-PC-01/02/25 |
| **UX** | S1,S3,S8 · UF-01/07 · SC-01/13/14 |
| **FA** | FC-01, FC-05, FC-13 |
| **Story** | En tant que **Pilote**, je veux **reprendre un projet en voyant immédiatement ce qui est durable, ce qui est perdu et quelle action est requise**, afin de **ne jamais croire à un faux GO ni à une mémoire inventée**. |
| **Valeur métier** | O-01 · O-09 · recovery fail-closed · fondation gates aval |
| **Préconditions** | Project existe en Product SQLite · session/utilisateur actif |
| **IN (périmètre)** | Project/LPS/HD/EC/Attempt/Evidence durable · disclosure explicite non-durable (conversation/proposition) |
| **OUT (hors périmètre)** | Autorité inventée · restauration silencieuse trajectoire décidée · auto-GO |
| **Dépendances** | — (fondation) |
| **Critères d'acceptation** | (1) Reprise montre durable vs non-durable · (2) Conversation perdue → message explicite + CTA requalify · (3) Pas de trajectoire/autorité décidée sans preuve · (4) CA-PC-25 |
| **Preuve / evidence** | Scénarios UAT reprise · copy RecoverySurface · tests intégration fail-closed |
| **Comportement STOP/FAIL** | Project manquant → erreur SC entrée · état ambigu → STOP avec chemin requalify (pas de continue silencieux) |
| **Architecture consommée** | OA Native · G0-A/G0-B · C6 CLOS (pas de réouverture) |
| **Enablers techniques** | — (comportement/UX principal) |
| **Risques** | Fatigue sur-disclosure · sous-disclosure fausse confiance |
| **Gate Morris** | **G3 W1 Delivery GO** |
| **Vague** | W1 |
| **Traçabilité source** | C1 H Project/LPS · J.1 · C2 §15 · UX SC-01/13/14 |

---

### US-P0-02 — Continuité sémantique inter-session Nora

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-02 |
| **Epic** | EPIC-A |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-03, REQ-15 |
| **C2** | C,D,G,W · CA-PC-25/35 |
| **UX** | S3,S5 · UF-02/07 |
| **FA** | FC-04, FC-05 |
| **Story** | En tant que **Pilote**, je veux **retrouver après reprise le contexte métier utile à Nora (intention, trajectoire, décisions, prochaine action)**, afin de **continuer sans re-expliquer toute la méthode**. |
| **Valeur métier** | O-09 continuité inter-session · crédibilité Nora · friction ré-entrée réduite |
| **Préconditions** | US-P0-01 satisfait · objets durables chargés |
| **IN (périmètre)** | Snapshot LPS · refs HD · pointeur trajectoire effective · écarts explicites |
| **OUT (hors périmètre)** | Transcript comme vérité · HD/trajectoire/autorité inventés · mémoire Nora silencieuse |
| **Dépendances** | US-P0-01 · US-P0-03 · US-P0-06 |
| **Critères d'acceptation** | (1) LPS + décisions + trajectoire effective rechargés · (2) Nora n'invente pas HD/trajectoire/autorité · (3) Écarts explicites · (4) CA-PC-25 |
| **Preuve / evidence** | Suite tests restart · diff snapshot LPS · tests limites prompt Nora |
| **Comportement STOP/FAIL** | Écart sémantique non récupérable → STOP + CTA requalify (fail-closed) |
| **Architecture consommée** | Continuité sémantique MUST · matérialisation sélective TD-C6-04 (aval) |
| **Enablers techniques** | TD-C6-04 (persistance épistémique sélective) |
| **Risques** | Sur-persistance propositions · sous-persistance blockers |
| **Gate Morris** | **G3 W1 Delivery GO** (W1 slice · W2 downstream per wave qualification) |
| **Vague** | W1–W2 |
| **Traçabilité source** | C1 J.1 continuité sémantique · C2 §15.2 · FA FC-04 COMPLETE continuity |

---

### US-P0-03 — Trajectoire durable proposée vs décidée

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-03 |
| **Epic** | EPIC-B |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-06 |
| **C2** | H,V · CA-PC-06/07 |
| **UX** | S6 · SC-04 · UF-03 |
| **FA** | FC-06 |
| **Story** | En tant que **Pilote**, je veux **voir une trajectoire proposée par Nora et une trajectoire que j’ai explicitement décidée**, afin de **comprendre le chemin réel et les dépendances**. |
| **Valeur métier** | O-02 visibilité chemin · O-10 fondation replan · Recommendation ≠ chemin décidé |
| **Préconditions** | Project repris · Nora peut proposer trajectoire |
| **IN (périmètre)** | États `proposed` vs `decided` · pointeur courant explicite · chemin HD seul vers `decided` |
| **OUT (hors périmètre)** | Proposé traité comme courant/décidé · durabilité mémoire seule |
| **Dépendances** | US-P0-01 |
| **Critères d'acceptation** | (1) `proposed` ≠ `decided` · (2) HD seule route vers `decided` · (3) Survit restart · (4) CA-PC-06/07 |
| **Preuve / evidence** | Tests repo trajectoire · région UI S6 · preuve persistance restart |
| **Comportement STOP/FAIL** | Tentative exécution sur proposed-only → bloqué avec raison explicite |
| **Architecture consommée** | TD-C6-01 T-A · TD-C6-06 pointeur courant explicite · **ADOPTÉ — implementer uniquement** |
| **Enablers techniques** | TD-C6-01 (`SqliteTrajectoryRepository`) · TD-C6-06 (pointeur courant) |
| **Risques** | Double Memory+SQLite pendant migration · concurrence sur pointeur courant |
| **Gate Morris** | **G3 W1 Delivery GO** |
| **Vague** | W1 |
| **Traçabilité source** | C1 H ProjectTrajectory · C6 TD-C6-01/06 · C2 §6.7 |

---

### US-P0-04 — Confirmation consommée durable

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-04 |
| **Epic** | EPIC-C |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-08 |
| **C2** | M · CA-PC-11/12/13 |
| **UX** | S11 · SC-06/07 · UF-04 · A11Y-PC-05 |
| **FA** | FC-09 |
| **Story** | En tant que **Pilote**, je veux **qu’une confirmation accordée pour un périmètre donné survive à une reprise et ne soit réutilisable que conformément à sa portée**, afin de **protéger les effets sans re-confirmer à l’infini ni réutiliser un consentement périmé**. |
| **Valeur métier** | O-04 frontière protégée · autorisation proportionnelle · chemin autorité restart-safe |
| **Préconditions** | EC préparé/inspecté si requis · effet protégé identifié |
| **IN (périmètre)** | `granted` durable · `requested` éphémère · consommation CAS · binding scope/contexte |
| **OUT (hors périmètre)** | granted restauré = autorité effective sans revalidation · réutilisation périmée |
| **Dépendances** | qualification EPIC-A · socle EC (C2 K→L) · invariant C2 : Confirmation requise **après** EC inspecté (≠ dépendance story US-P0-05) |
| **Critères d'acceptation** | (1) `granted` durable · (2) `requested` éphémère · (3) consommation CAS · (4) Restauré ≠ effectif sans revalidation · (5) CA-PC-11/13 |
| **Preuve / evidence** | Tests repo Confirmation · chemin autorité restart · tests refus scope-mismatch |
| **Comportement STOP/FAIL** | Confirmation manquante/périmée sur effet protégé → SC-IRR/SC-DEC · pas d'exécution |
| **Architecture consommée** | TD-C6-02 C-A · TD-C6-05 granted-upward · **ADOPTÉ — implementer uniquement** |
| **Enablers techniques** | TD-C6-02 · TD-C6-05 |
| **Risques** | Grants durables trop larges · fatigue UX reconfirm |
| **Gate Morris** | **G3 W1 Delivery GO** |
| **Vague** | W1 |
| **Traçabilité source** | C1 H Confirmation · C6 TD-C6-02/05 · C2 §10.3 |

---

### US-P0-05 — Ordre K→L→M→N respecté

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-05 |
| **Epic** | EPIC-C |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-08, REQ-09, REQ-10 |
| **C2** | K,L,M,N · CA-PC-30 |
| **UX** | S10,S11 · SC-05/06/07 · UF-04 |
| **FA** | FC-08, FC-09 |
| **Story** | En tant que **Pilote**, je veux **inspecter le contrat avant toute confirmation ou exécution**, afin de **ne jamais autoriser un effet sans avoir compris le périmètre**. |
| **Valeur métier** | O-05 · O-04 (ordre autorité) · invariant inspect-before-authorize · visibilité AgentCapability |
| **Préconditions** | Cycle qualifié · EC préparé |
| **IN (périmètre)** | Gate inspect · Confirmation après inspect si requis · états autorité bloqués |
| **OUT (hors périmètre)** | Attempt avant inspect · Confirmation avant inspect · bypass silencieux |
| **Dépendances** | US-P0-04 (capacité Confirmation disponible) · qualification EPIC-A · socle ExecutionContract inspectable |
| **Critères d'acceptation** | (1) Attempt bloqué si EC non inspecté · (2) Confirmation seulement après inspect si requis · (3) Autorité bloquée avec raison explicite · (4) CA-PC-30 |
| **Preuve / evidence** | Tests intégration chaîne actions produit · preuve UX état bloqué |
| **Comportement STOP/FAIL** | EC non inspecté → SC blocked · executor insufficient → SC-CAP |
| **Architecture consommée** | Ordre K→L→M→N · C6 CLOS |
| **Enablers techniques** | — (application ordre dans chemin produit) |
| **Risques** | Routes legacy contournant ordre (D1/OPS1) |
| **Gate Morris** | **G3 W1 Delivery GO** |
| **Vague** | W1 |
| **Traçabilité source** | C2 ordre K→L→M→N · UX WF-05 · FA BR-PC-* |

---

### US-P0-06 — Résolution CKC boundée au DoctrinePackage produit (Phase A)

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-06 |
| **Epic** | EPIC-A (DP↔CKC workstream) |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-04, REQ-16, REQ-23 |
| **C2** | E · CA-PC-31/33 |
| **UX** | S3 · UF-02 · SC-03 |
| **FA** | FC-02, FC-03 |
| **Story** | En tant que **Pilote**, je veux **que la qualification d’un cycle s’appuie sur le package doctrine du projet et non sur des chemins méthode parallèles**, afin de **bénéficier d’une couverture cognitive traçable et évolutive**. |
| **Valeur métier** | O-03/O-11 généricité méthode · auditabilité · bloque écarts catalogue silencieux |
| **Préconditions** | Project avec pin doctrine · catalogue applicable |
| **IN (périmètre)** | Pin → manifest → index → artefact CKC · preuve consommation · catalog ADAPT |
| **OUT (hors périmètre)** | SoT chemin méthode · type non couvert silencieux · fallback synthétique global comme policy |
| **Dépendances** | D01/D02/D05 adoptés · chemin matérialisation |
| **Critères d'acceptation** | (1) Chaîne résolution boundée package · (2) Pas de SoT chemin méthode · (3) Fail-closed D05 NONE · (4) CA-PC-31/33/34 · sorties DK-01…07 |
| **Preuve / evidence** | Schéma preuve consommation Phase A · tests catalog ADAPT · tests fail-closed résolveur |
| **Comportement STOP/FAIL** | Type non couvert + pas de fallback autorisé → SC-FB STOP · source requise périmée → SC-SRC |
| **Architecture consommée** | D01-NARROW · D02 Option B · D05 NONE · **≠ sémantique Nora Phase B** |
| **Enablers techniques** | DK-01…07 · matérialisation/index package |
| **Risques** | Résolveur parallèle · fuite pin fixture (DK-04) |
| **Gate Morris** | **G3 W1 Delivery GO** (after **G2**) |
| **Vague** | W1 |
| **Traçabilité source** | DP↔CKC qualification doc §I/V · C1 J.1 CKC coverage · DP↔CKC §V DK register |

---

### US-P0-07 — Recovery → requalification → reprise de boucle

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-07 |
| **Epic** | EPIC-D |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-15, REQ-22 |
| **C2** | W,U,V · CA-PC-24/25 |
| **UX** | S8,S12 · UF-06/07 · SC-11/13 |
| **FA** | FC-13, FC-04 (post-evidence) |
| **Story** | En tant que **Pilote**, je veux **qu’après un échec ou une interruption je puisse reprendre via requalification et replanification honnêtes**, afin de **ne pas rester bloqué ni repartir de zéro**. |
| **Valeur métier** | O-09/O-10 sécurité restart · entrée boucle apprentissage fermée · gestion échec honnête |
| **Préconditions** | Attempt terminal ou interrompu · ancres Evidence durables si existantes |
| **IN (périmètre)** | CTA Recovery · chemin requalify · analyse Nora → recommendation · HD si replan structurel |
| **OUT (hors périmètre)** | Replan inventé · auto-requalify silencieux · Project fermé sur fail récupérable |
| **Dépendances** | US-P0-01…04 · US-P0-06 |
| **Critères d'acceptation** | (1) CTA Recovery → requalify · (2) Analyse Nora → recommendation · (3) HD si replan structurel · (4) CA-PC-24/25 |
| **Preuve / evidence** | Scénario recovery E2E · tests intégration replan |
| **Comportement STOP/FAIL** | Autorité/contexte non récupérable → STOP avec action suivante explicite (pas de GO silencieux) |
| **Architecture consommée** | Recovery fail-closed · Recommendation ≠ HD |
| **Enablers techniques** | — (composition boucle) |
| **Risques** | Replan partiel sans durabilité trajectoire · requalification silencieuse ou replan structurel sans HumanDecision Pilote appropriée / gate produit applicable |
| **Gate Morris** | **G3 W1 Delivery GO** (W1 foundation slice · W3 E2E closure downstream) |
| **Vague** | **W1** (foundation slice : resume/recovery prerequisites) · **W3** (closure E2E après Attempt/Evidence/terminaux) |
| **Traçabilité source** | C1 J.1 recovery + closed loop · C2 §15 · UX UF-06 |

---

### US-P0-08 — Seam Phase B bornée post-Phase A (Vague 1)

| Champ | Valeur |
|---|---|
| **ID US** | US-P0-08 |
| **Epic** | EPIC-B |
| **Priorité écart** | P0 |
| **Exigences C1** | REQ-24 (bounded proof) · REQ-04 |
| **C2** | E post-qual · CA-PC-35 |
| **UX** | S3,S4 · UF-02 |
| **FA** | FC-04 · FC-03 (Phase A prerequisite) |
| **Story** | En tant que **Pilote**, je veux **voir Nora formuler au moins une clarification ou recommandation clairement informée par le CKC résolu**, afin de **prouver que Phase A alimente réellement la cognition sans fermer prématurément Phase B**. |
| **Valeur métier** | O-03 (seam bornée) · empêche fausse sortie Vague 1 plumbing-only · satisfait obligation sortie Vague 1 |
| **Préconditions** | Résolution Phase A US-P0-06 prouvée pour ≥1 type de cycle |
| **IN (périmètre)** | Une preuve consommation sémantique bornée · output attribuable · Recommendation seulement |
| **OUT (hors périmètre)** | Revendiquer clôture Phase B complète · `consumed=true` seul comme preuve · exposition CKC brut au Pilote |
| **Dépendances** | US-P0-06 |
| **Critères d'acceptation** | (1) Contenu CKC résolu atteint raisonnement Nora pour cycle représentatif · (2) Output attribuable à guidance CKC · (3) Pas d'autorité créée · (4) Ne substitue pas sortie Phase B complète US-P1-14 |
| **Preuve / evidence** | Capacité preuve sémantique · comportement différencié vs contrôle sans CKC · preuve partielle DK-08 |
| **Comportement STOP/FAIL** | Phase A incomplète → bloqué · écart sémantique → chemin requalify honnête |
| **Architecture consommée** | Phase A ≠ Phase B · anti-affirmation DK-08 |
| **Enablers techniques** | DK-08 (partiel) |
| **Risques** | Sign-off Phase B prématuré · confusion démo seam avec couverture catalogue entière |
| **Gate Morris** | **G3 W1 Delivery GO** (bounded seam W1) · **GO Phase B distinct** for full closure (US-P1-14) |
| **Vague** | W1 (bornée) · clôture complète W2–W3 |
| **Traçabilité source** | DP↔CKC §V Phase B · amend GO Wave 1 exit · C1 REQ-24 |


---

## 7. User Stories P1 complètes (15)

### US-P1-01 — Options et recommandation sans autorité

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-01 · **Epic** EPIC-B · **Gap priority** P1 · **C1** REQ-03, REQ-07 · **C2** I · CA-PC-09/10 · **UX** S4,S6 · **FA** FC-04, FC-06 |
| **Story** | En tant que **Pilote**, je veux **voir des options de trajectoire et une recommandation Nora clairement distinctes de ma décision**, afin de **comprendre les alternatives sans qu’une suggestion devienne un GO implicite**. |
| **Valeur métier** | O-04 clarté autorité · empêche blanchiment recommendation |
| **Préconditions** | Trajectoire durable (US-P0-03) · contexte Nora qualifié |
| **IN (périmètre)** | Liste Options · badge Recommendation · pas d'état auto-décidé |
| **OUT (hors périmètre)** | Recommendation affichée comme décidée · options cachées |
| **Dépendances** | US-P0-03 |
| **Critères d'acceptation** | (1) Rec ≠ HD · (2) Options visibles · (3) Pas d'exécution sur Rec seule · CA-PC-10 |
| **Preuve / evidence** | Tests distinction UI · alignement wireframes S4/S6 |
| **Comportement STOP/FAIL** | UI Rec/HD ambiguë → échec gate revue UX |
| **Architecture consommée** | Domaine Recommendation · TD-C6-06 |
| **Enablers techniques** | TD-C6-06 |
| **Risques** | Conflation visuelle Rec/HD |
| **Gate Morris** | GO slice Delivery · **Vague** W2 · **Source** C2 §10.1 · UX SC-04 |

---

### US-P1-02 — HumanDecision structurante tracée

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-02 · **Epic** EPIC-B · **Gap priority** P1 · **C1** REQ-07 · **C2** J · CA-PC-08 · **UX** S4,S6 · **FA** FC-07 |
| **Story** | En tant que **Pilote**, je veux **enregistrer un GO/NO_GO/AMEND avec DecisionBasis liée à la trajectoire**, afin de **matérialiser mon arbitrage de façon durable et auditable**. |
| **Valeur métier** | O-04/O-10 autorité Pilote explicite · état trajectoire décidée |
| **Préconditions** | Contexte décision qualifié · trajectoire présente |
| **IN (périmètre)** | HD durable · DecisionBasis · liaison trajectoire |
| **OUT (hors périmètre)** | HD depuis chat non qualifié · HD sans base sur décisions structurelles |
| **Dépendances** | US-P0-03 · US-P1-01 |
| **Critères d'acceptation** | (1) Phrase non qualifiée → pas de HD · (2) HD durable avec base · (3) Liens trajectoire · CA-PC-08 |
| **Preuve / evidence** | Tests repo HD · transition trajectoire décidée |
| **Comportement STOP/FAIL** | Replan structurel sans HD → bloqué |
| **Architecture consommée** | HD SQLite · DecisionBasis |
| **Enablers techniques** | TD-C6-01 (liaison decided) |
| **Risques** | Complexité boucle AMEND (réserve SHOULD-05) |
| **Gate Morris** | GO slice Delivery · **Vague** W2 · **Source** C1 H HumanDecision |

---

### US-P1-03 — EC inspectable progressive disclosure

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-03 · **Epic** EPIC-C/E · **Gap priority** P1 · **C1** REQ-09 · **C2** K,L · CA-PC-14/15/16 · **UX** S10 · SC-05/06 · **FA** FC-08, FC-14 |
| **Story** | En tant que **Pilote**, je veux **lire un résumé EC puis le détail complet avant toute décision**, afin de **comprendre objectif, scope, protections et Evidence attendue**. |
| **Valeur métier** | O-05 EC inspectable · confiance avant autoriser |
| **Préconditions** | EC préparé · ordre US-P0-05 appliqué |
| **IN (périmètre)** | Résumé → détail · marque inspect · amend déclenche re-inspect |
| **OUT (hors périmètre)** | Inspect contourné · écarts parité cachés |
| **Dépendances** | US-P0-05 |
| **Critères d'acceptation** | (1) Champs §11.1 présents · (2) Req vs satisfied distingués · (3) Amend matériel → re-inspect · CA-PC-14/15/16 |
| **Preuve / evidence** | Tests UI EC · checklist parité vs canonique |
| **Comportement STOP/FAIL** | Lancement sans inspect → SC bloqué |
| **Architecture consommée** | Agrégat EC · projection PREPARE ADAPT |
| **Enablers techniques** | — |
| **Risques** | Détail écrasant sans progressive disclosure |
| **Gate Morris** | GO slice Delivery · **Vague** W2 · **Source** C2 §11 · UX SC-05/06 |

---

### US-P1-04 — Exécution générique sous contrat

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-04 · **Epic** EPIC-D · **Gap priority** P1 · **C1** REQ-11, REQ-12 · **C2** O,P · CA-PC-17/19 · **UX** S12 · UF-05 · **FA** FC-10 |
| **Story** | En tant que **Pilote**, je veux **lancer une tentative conforme au contrat inspecté avec un cycle de vie visible**, afin de **voir le HOW technique s’exécuter sous gouvernance**. |
| **Valeur métier** | O-06 exécution gouvernée · un mécanisme générique |
| **Préconditions** | US-P0-05 satisfait · autorité suffisante |
| **IN (périmètre)** | accepted→running→terminal · chemin fixture par défaut · application scope |
| **OUT (hors périmètre)** | Exécution hors scope · auto-fermeture CycleInstance au terminal |
| **Dépendances** | US-P0-04/05 · US-P1-08 |
| **Critères d'acceptation** | (1) États cycle de vie visibles · (2) Hors scope → STOP/FAIL · (3) Terminal ≠ fermeture auto cycle · CA-PC-17/18/19 |
| **Preuve / evidence** | Tests intégration Attempt · état running S12 |
| **Comportement STOP/FAIL** | SC-CAP · violation scope SC · timeout → terminal_fail |
| **Architecture consommée** | BR-PC-17 un mécanisme · REAL gated séparément |
| **Enablers techniques** | — (fixture prouve mécanisme) |
| **Risques** | Routes harness parallèles · scope creep REAL |
| **Gate Morris** | GO slice Delivery · REAL distinct · **Vague** W3 · **Source** C1 J.1 mécanisme générique EC→agent |

---

### US-P1-05 — Terminaux SUCCESS / STOP / FAIL intelligibles

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-05 · **Epic** EPIC-D · **Gap priority** P1 · **C1** REQ-13 · **C2** Q,R,S · CA-PC-20/21/22 · **UX** S12 · SC-08–11 · **FA** FC-11 |
| **Story** | En tant que **Pilote**, je veux **distinguer succès métier, arrêt gouverné et échec technique**, afin de **ne pas confondre résultat, frontière atteinte et panne**. |
| **Valeur métier** | O-07 outcomes honnêtes · empêche faux READY |
| **Préconditions** | Attempt atteint terminal |
| **IN (périmètre)** | Terminaux distincts · message métier · Evidence avant revendication |
| **OUT (hors périmètre)** | Flag READY auto · FAIL affiché comme SUCCESS |
| **Dépendances** | US-P1-04 |
| **Critères d'acceptation** | (1) SUCCESS pas de READY auto · (2) STOP avec frontière · (3) FAIL ≠ SUCCESS · CA-PC-20/21/22 |
| **Preuve / evidence** | Tests mapping terminal · distinction texte A11Y |
| **Comportement STOP/FAIL** | SC-PROT STOP · terminal_fail avec Evidence |
| **Architecture consommée** | FC-11 ADAPT · A11Y-PC-01/03 |
| **Enablers techniques** | — |
| **Risques** | Effondrement enum statut · distinction couleur seule |
| **Gate Morris** | GO slice Delivery · **Vague** W3 · **Source** C1 H SUCCESS/STOP/FAIL |

---

### US-P1-06 — Evidence business-first

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-06 · **Epic** EPIC-D/E · **Gap priority** P1 · **C1** REQ-14 · **C2** T · CA-PC-23 · **UX** S9 · SC-09/10 · **FA** FC-12, FC-14 |
| **Story** | En tant que **Pilote**, je veux **comprendre le résultat métier avant le détail technique**, afin de **valider la preuve sans devenir ops**. |
| **Valeur métier** | O-08 preuve avant revendication · qualité input analyse Nora |
| **Préconditions** | Terminal avec Evidence produite |
| **IN (périmètre)** | ReviewBundle business-first · détail technique accessible |
| **OUT (hors périmètre)** | Log brut en primaire · revendication sans Evidence |
| **Dépendances** | US-P1-05 |
| **Critères d'acceptation** | (1) Résumé métier d'abord · (2) Technique accessible · (3) Tous terminaux produisent ReviewBundle · CA-PC-23 |
| **Preuve / evidence** | Tests UI Evidence · preuve chemin rehydrate |
| **Comportement STOP/FAIL** | Evidence manquante au terminal → fail-closed |
| **Architecture consommée** | Evidence SQLite · A11Y-PC-06 |
| **Enablers techniques** | — |
| **Risques** | Sous-partage détail technique pour audit |
| **Gate Morris** | GO slice Delivery · **Vague** W3 · **Source** C1 J.1 Evidence métier minimale |

---

### US-P1-07 — Boucle post-evidence Nora → LPS / Trajectory

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-07 · **Epic** EPIC-D · **Gap priority** P1 · **C1** REQ-22 · **C2** U,V · CA-PC-24 · **UX** S12 · UF-06 · **FA** FC-04, FC-06 |
| **Story** | En tant que **Pilote**, je veux **qu’après preuve Nora analyse et propose la prochaine action ou replan**, afin de **fermer la boucle d’apprentissage sans décision implicite**. |
| **Valeur métier** | O-12 boucle fermée · O-10 replan · réduit projets sans issue |
| **Préconditions** | Evidence disponible · chemin recovery US-P0-07 |
| **IN (périmètre)** | Analyse Nora · mise à jour LPS · recommendation trajectoire · HD si structurel |
| **OUT (hors périmètre)** | Auto-replan · mutation trajectoire silencieuse |
| **Dépendances** | US-P1-06 · US-P0-03/07 |
| **Critères d'acceptation** | (1) Analyse post-evidence s'exécute · (2) LPS/trajectoire mis à jour ou Rec émise · (3) Replan structurel exige HD · CA-PC-24 |
| **Preuve / evidence** | Intégration postEvidenceNoraAnalysis · replan E2E |
| **Comportement STOP/FAIL** | Analyse sans Evidence → bloqué |
| **Architecture consommée** | Recommendation ≠ HD · boucle fermée MUST |
| **Enablers techniques** | — |
| **Risques** | Sur-automatisation replan |
| **Gate Morris** | GO slice Delivery · **Vague** W3 · **Source** C1 J.1 boucle fermée |

---

### US-P1-08 — AgentCapability envelope explicite

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-08 · **Epic** EPIC-C · **Gap priority** P1 · **C1** REQ-10 · **C2** N · CA-PC-27/32 · **UX** S11 · SC-07 · **FA** FC-09 |
| **Story** | En tant que **Pilote**, je veux **voir pourquoi l’autorité effective est suffisante ou bloquée**, afin de **comprendre l’enveloppe d’exécution avant lancement**. |
| **Valeur métier** | O-06 effets gouvernés · transparence suffisance exécuteur |
| **Préconditions** | EC préparé · AgentCapability évaluable |
| **IN (périmètre)** | Scope · autonomie · frontières · gates · stops · obligations Evidence · réversibilité |
| **OUT (hors périmètre)** | Catalogue features Cursor · exécuteur insuffisant silencieux |
| **Dépendances** | US-P0-05 |
| **Critères d'acceptation** | (1) Enveloppe déterminable · (2) Insuffisant → UI bloquée SC-CAP · (3) CA-PC-32 |
| **Preuve / evidence** | Tests évaluation AgentCapability · état bloqué S11 |
| **Comportement STOP/FAIL** | SC-CAP · pas d'exécution · Project non fermé |
| **Architecture consommée** | Patterns Gate D · enveloppe générique |
| **Enablers techniques** | — |
| **Risques** | Fuite internes Gate D au Pilote |
| **Gate Morris** | GO slice Delivery · **Vague** W2 · **Source** C2 CA-PC-32 |

---

### US-P1-09 — Catalog evolvability sans nouveau moteur

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-09 · **Epic** EPIC-A · **Gap priority** P1 · **C1** REQ-05 · **C2** E · CA-PC-26 · **UX** S3 · **FA** FC-03 |
| **Story** | En tant que **Pilote**, je veux **qu’un nouveau type de cycle enrichisse attentes métier sans exiger un moteur dédié**, afin de **faire évoluer le catalogue sans refonte**. |
| **Valeur métier** | O-11 évolutivité · cycles futurs à moindre coût |
| **Préconditions** | Phase A US-P0-06 complète |
| **IN (périmètre)** | Catalog ADAPT · index package · routage sans nouveau moteur |
| **OUT (hors périmètre)** | Moteur exécution par type · ajout type silencieux |
| **Dépendances** | US-P0-06 |
| **Critères d'acceptation** | (1) Nouveau type qualifie via chemin package · (2) Pas de nouveau moteur requis par défaut · CA-PC-26 |
| **Preuve / evidence** | Démo Catalog ADAPT · test qualification nouveau type |
| **Comportement STOP/FAIL** | Nouveau type non couvert → fail-closed |
| **Architecture consommée** | CycleTypeCatalog ADAPT |
| **Enablers techniques** | DK-01/02 (sortie) |
| **Risques** | Routage cas spéciaux caché |
| **Gate Morris** | GO slice Delivery · **Vague** W3 · **Source** C1 J.1 évolutivité catalogue |

---

### US-P1-10 — Surfaces S1→S12 cohérentes Completion

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-10 · **Epic** EPIC-E · **Gap priority** P1 · **C1** REQ-18 · **C2** transverse · CA-PC-35 · **UX** S1→S12 · UF-01…07 · **FA** FC-14 |
| **Story** | En tant que **Pilote**, je veux **naviguer le parcours A→W sur surfaces validées sans charge méthode**, afin de **piloter sans orchestrer manuellement CKC/lenses**. |
| **Valeur métier** | O-03 absorption méthode · barre Completion utilisable |
| **Préconditions** | Vérité capacitaire derrière surfaces (Vagues 1–3 en progression) |
| **IN (périmètre)** | Fidélité contrat SC · couverture UF · H-01…H-04 CARRY reconnu |
| **OUT (hors périmètre)** | Wizard par type cycle · routes parallèles legacy comme chemin produit |
| **Dépendances** | Consommateurs surfaces vagues prioritaires |
| **Critères d'acceptation** | (1) UF-01…07 couverts · (2) Pas d'orchestration méthode demandée au Pilote · CA-PC-35 |
| **Preuve / evidence** | Checklist alignement SC-01…SC-14 · harvest routes legacy |
| **Comportement STOP/FAIL** | Surface sans vérité backend → état bloqué honnête |
| **Architecture consommée** | Pre-M6 KEEP/ADAPT · FC-14 |
| **Enablers techniques** | — |
| **Risques** | Polish PE masquant capacités manquantes |
| **Gate Morris** | GO slice Delivery · **Vague** W4 · **Source** UX EA · C1 J.1 PE |

---


---


---

### US-P1-11 — Provenance DoctrinePackage inspectable

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-11 |
| **Epic** | EPIC-A |
| **Priorité écart** | P1 |
| **Exigences C1** | REQ-16 |
| **C2** | D · CA-PC-33/34 |
| **UX** | S2 · SC-02 |
| **FA** | FC-02 |
| **Story** | En tant que **Pilote**, je veux **voir quelle doctrine/package s'applique au projet et sa provenance**, afin de **faire confiance à la qualification sans deviner le pin ni le digest**. |
| **Valeur métier** | Traçabilité DoctrinePackage MUST · reconstructibilité audit |
| **Préconditions** | Project with doctrine pin |
| **IN (périmètre)** | Identité pin · ancres package/digest · référence preuve consommation si résolu |
| **OUT (hors périmètre)** | Édition manifest brut · upgrade package silencieux |
| **Dépendances** | US-P0-06 (résolution Phase A) |
| **Critères d'acceptation** | (1) Package applicable visible sur Project · (2) Provenance reconstructible · (3) CA-PC-33/34 · DK-03 |
| **Preuve / evidence** | UAT inspection provenance · échantillon reconstruction audit |
| **Comportement STOP/FAIL** | Source requise périmée/manquante → état bloqué SC-SRC |
| **Architecture consommée** | D01-NARROW · pin partiel aujourd'hui |
| **Enablers techniques** | DK-03 |
| **Risques** | Exposition mécanique package interne au-delà besoin métier |
| **Gate Morris** | **G3 W1 Delivery GO** (after **G2**) · future W2 slice gate |
| **Vague** | W1–W2 |
| **Traçabilité source** | C1 J.1 DoctrinePackage · DP↔CKC §I |

---

### US-P1-13 — Accessibilité baseline MUST

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-13 · **Epic** EPIC-E · **Gap priority** P1 · **C1** REQ-19 · **C2** §17 · A11Y-PC-01…06 · **UX** all SC · F00-05 · **FA** FC-14 (+ FC-09/11/12 semantics) |
| **Story** | En tant que **Pilote**, je veux **des statuts, gates, terminaux, Confirmation et Evidence compréhensibles textuellement**, afin d’**utiliser le produit sans dépendre de la seule couleur ou d’interactions complexes**. |
| **Valeur métier** | Inclusion MUST · réduit mauvaise autorisation · baseline légale/éthique |
| **Préconditions** | Surfaces existent pour gates/terminaux/Evidence |
| **IN (périmètre)** | Exigences fonctionnelles A11Y-PC-01…06 sur chemin produit |
| **OUT (hors périmètre)** | Statut couleur seule · actions protégées inaccessibles · revendication certification WCAG |
| **Dépendances** | US-P1-03/05/06 (owners sémantiques) |
| **Critères d'acceptation** | (1) SUCCESS/STOP/FAIL textuels · (2) Actions protégées identifiables pré-exec · (3) Consentement Confirmation accessible · (4) Evidence primaire lisible · A11Y-PC-* |
| **Preuve / evidence** | Checklist fonctionnelle A11Y · revue contrat SC |
| **Comportement STOP/FAIL** | Gate/terminal échouant A11Y-PC → bloque sign-off Completion |
| **Architecture consommée** | A11Y fonctionnel MUST · ownership FC-14 |
| **Enablers techniques** | — |
| **Risques** | Traiter baseline comme conformité WCAG complète |
| **Gate Morris** | GO slice Delivery · **Vague** W4 · **Source** C1 J.1 accessibilité · C2 §17 |

---

### US-P1-14 — CKC Phase B — consommation sémantique Nora

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-14 |
| **Epic** | EPIC-B |
| **Priorité écart** | P1 |
| **Exigences C1** | REQ-24 |
| **C2** | E post-qual · CA-PC-35 |
| **UX** | S3,S4 |
| **FA** | FC-04 |
| **Story** | En tant que **Pilote**, je veux **que les clarifications, challenges et recommandations de Nora soient adaptés au type de travail réellement qualifié**, afin de **bénéficier de la connaissance spécifique du cycle sans manipuler le CKC ni la méthode**. |
| **Valeur métier** | O-03 · O-12 (prérequis boucle) · clôt DK-08 · distinct de résolution Phase A |
| **Préconditions** | Phase A US-P0-06 complète · preuve consommation disponible |
| **IN (périmètre)** | Comportement Nora différencié selon cycle qualifié · Recommendation · requalify recommandée via mécanisme existant |
| **OUT (hors périmètre)** | UI CKC brute · autorité créée · requalify silencieuse · fallback méthode/v2.6 |
| **Dépendances** | US-P0-06 · US-P0-02 |
| **Critères d'acceptation** | (1) Contenu cognitif CKC résolu atteint raisonnement Nora · (2) Outputs attribuables à guidance CKC applicable · (3) Recommendation reste Recommendation · pas de HumanDecision · (4) `consumed=true` resolver seul **≠** preuve Phase B · (5) Sortie DK-08 · CA-PC-35 |
| **Preuve / evidence** | Capacité preuve sémantique Phase B · tests limites Nora · comportement différencié sur cycles matériellement différents |
| **Comportement STOP/FAIL** | Écart sémantique → Nora propose requalify via mécanisme existant (n'invente pas contexte) |
| **Architecture consommée** | DK-08 · Phase B aval Phase A · EPIC-D consommateur aval post-Evidence |
| **Enablers techniques** | DK-08 |
| **Risques** | Confusion Phase A/B · Delivery prématurée sans preuve Phase A |
| **Gate Morris** | **GO Phase B distinct** (≠ GO DP Phase A) |
| **Vague** | W2–W3 |
| **Traçabilité source** | DP↔CKC §V DK-08 · C1 G.1 O-03 |

---

### US-P1-15 — Historique minimal Project / Cycle

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-15 |
| **Epic** | EPIC-A/D |
| **Priorité écart** | P1 |
| **Exigences C1** | REQ-17 |
| **C2** | transverse · CA-PC-34 |
| **UX** | S1,S8 · SC-01/13 · UF-07 |
| **FA** | FC-01, FC-13 |
| **Story** | En tant que **Pilote**, je veux **inspecter un historique minimal fiable du projet**, afin de **comprendre et reprendre sans seconde vérité ni transcript exhaustif**. |
| **Valeur métier** | Confiance reprise · continuité audit · clôt MUST historique minimal |
| **Préconditions** | Project durable avec cycles/décisions/attempts antérieurs |
| **IN (périmètre)** | CycleInstances · HumanDecisions majeures · Attempts · résultats terminaux · ancres Evidence · info continuité/recovery |
| **OUT (hors périmètre)** | Transcript exhaustif · capsule riche (SHOULD-01 P2) |
| **Dépendances** | US-P0-01 · US-P0-03 |
| **Critères d'acceptation** | (1) Cycles/décisions/attempts/outcomes récupérables · (2) Ancres Evidence liées · (3) Pas d'historique inventé · CA-PC-34 |
| **Preuve / evidence** | UAT inspection historique · tests reconstruction restart |
| **Comportement STOP/FAIL** | Ancres manquantes → disclosure honnête écart |
| **Architecture consommée** | Ancres factuelles SQLite · minimal ≠ riche |
| **Enablers techniques** | — |
| **Risques** | Confusion minimal avec SHOULD riche |
| **Gate Morris** | GO slice Delivery |
| **Vague** | W2–W3 |
| **Traçabilité source** | C1 J.1 minimal history · UX S7 carry · FA FC-13 |

---

### US-P1-16 — Vérité gouvernance / audit intelligible

| Champ | Valeur |
|---|---|
| **ID US** | US-P1-16 |
| **Epic** | EPIC-E (presentation) · FC-15 (ownership) |
| **Priorité écart** | P1 |
| **Exigences C1** | REQ-20 |
| **C2** | transverse · CA-PC-12 |
| **UX** | S11 · SC-07 · blocked states |
| **FA** | FC-15 · FC-14 presentation |
| **Story** | En tant que **Pilote**, je veux **comprendre pourquoi une action est bloquée ou quelle provenance s'applique**, afin de **faire confiance aux gates sans mécanismes SFIA exposés**. |
| **Valeur métier** | Gouvernance transverse MUST · anti-affirmations · présentation audit |
| **Préconditions** | Événements autorisation/gouvernance survenus |
| **IN (périmètre)** | Raisons bloquées lisibles métier · ancres provenance si applicable · distinction receipt ≠ autorité en présentation |
| **OUT (hors périmètre)** | Dumps audit bruts · receipt remplaçant Confirmation |
| **Dépendances** | US-P0-04/05 · TE TD-C6-03 |
| **Critères d'acceptation** | (1) États bloqués expliquent écart autorité · (2) Provenance visible où C1 l'exige · (3) CA-PC-12 |
| **Preuve / evidence** | UAT état bloqué · checklist présentation audit |
| **Comportement STOP/FAIL** | Bloc silencieux → invalide |
| **Architecture consommée** | FC-15 transverse · TE TD-C6-03 |
| **Enablers techniques** | TD-C6-03 (AuthorityVerificationReceipt) |
| **Risques** | Sur-exposition des internes |
| **Gate Morris** | GO slice Delivery |
| **Vague** | W2 |
| **Traçabilité source** | C1 J.1 governance · FA FC-15 |

---

> **Reclassifiés (PAS des User Stories) :** mécanisme AuthorityVerificationReceipt → **TE TD-C6-03** sert US-P1-16 · persistance épistémique sélective → **TE TD-C6-04** sert US-P0-02/US-P1-01.


## 8. Cartographie des Enablers techniques

> C6 CLOS — implementer uniquement. Pas des User Stories.

| ID Enabler | Description | Statut | Epic principal | US fonctionnelles servies | Sortie / preuve | Gate Morris |
|---|---|---|---|---|---|---|
| **TD-C6-01** | Durabilité SQLite trajectoire (T-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-02 · US-P1-07 | CA-PC-06/07 · tests persistance repo | **G3 W1 Delivery GO** |
| **TD-C6-02** | Scope SQLite Confirmation (C-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | CA-PC-11/13 · tests autorité restart | **G3 W1 Delivery GO** |
| **TD-C6-03** | AuthorityVerificationReceipt (A-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C/E | US-P1-16 · REQ-20 | CA-PC-12 · receipt ≠ preuve autorité | **G3 W1 Delivery GO** (optional W1 scope) |
| **TD-C6-04** | Persistance épistémique sélective (E-A) | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-A/B | US-P0-02 · US-P1-01 | CA-PC-25 · tests règles matérialisation | **G3 W1 Delivery GO** |
| **TD-C6-05** | Confirmation durable depuis `granted` upward | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-C | US-P0-04 · US-P0-05 | granted survit restart · requested éphémère | **G3 W1 Delivery GO** |
| **TD-C6-06** | Pointeur trajectoire courante explicite | ADOPTÉ · NON IMPLÉMENTÉ | EPIC-B | US-P0-03 · US-P1-01 · US-P1-07 | pas de proposed-as-current · tests pointeur | **G3 W1 Delivery GO** |
| **DK-01** | Retirer chemins méthode catalogue comme SoT | OPEN | EPIC-A | US-P0-06 · US-P1-09 | index package remplace 6 refs méthode | **G3 W1 Delivery GO** (after **G2**) |
| **DK-02** | Remplacer méthode `CKC_REFERENCE_MANIFEST` | OPEN | EPIC-A | US-P0-06 | artefact index interne package | **G3 W1 Delivery GO** (after **G2**) |
| **DK-03** | Preuve consommation avec identité package | OPEN | EPIC-A | US-P0-06 · REQ-16 | schéma preuve COMPLETE · CA-PC-33 | **G3 W1 Delivery GO** (after **G2**) |
| **DK-04** | Fuite pin fixture par défaut vers UX démo | OPEN/DEFERRED | EPIC-A | US-P0-06 (materialization) | cutover package produit · quarantaine fixture | **G2** · **G3 W1 Delivery GO** after G2 |
| **DK-05** | `doctrineStatus=method-candidate` hardcoded | OPEN | EPIC-A | US-P0-06 | décision statut package-aware | **G3 W1 Delivery GO** (after **G2**) |
| **DK-06** | Chemins dual A/B non joints (composition) | OPEN | EPIC-A | US-P0-06 | composition service/F2 ADAPT | **G3 W1 Delivery GO** (after **G2**) |
| **DK-07** | Fallback méthode synthétique comme policy globale | OPEN | EPIC-A | US-P0-06 | policy locale package ou none · D05 NONE | **G3 W1 Delivery GO** (after **G2**) |
| **DK-08** | Sur-interprétation résolution `consumed` comme sémantique Nora | OPEN | **EPIC-B** *(D aval)* | US-P1-14 · US-P0-08 · REQ-24 | anti-affirmation explicite + preuve sémantique · sortie Phase B | GO Phase B distinct |

**Règles :** C6 **CLOS — NE PAS ROUVRIR** · enablers **implement-only** · sorties DK **≠** autorisées par adoption architecture seule · productisation REAL et runtime v3 restent **gates Morris séparées**.


---

## 9. Quatre macro-Vagues fonctionnelles (recommandation uniquement)

| Vague | Objectif | Workstreams principaux | Preuve de sortie |
|---|---|---|---|
| **W1 — Vérité, contexte et continuité** | Fondations restart-safe véridiques + démarrage chemin runtime CKC | EPIC-A/B · **US-P0-01…06 + US-P0-08** · foundation slice **US-P0-07** · Phase A · TE TD-C6-01/02/04/06 | Vérité reconstructible · CKC Phase A résolu · autorité non inventée · **seam CKC→Nora bornée (US-P0-08)** · **≠ closure complète US-P0-07** |
| **W2 — Cognition, trajectoire et décision humaine** | Boucle Nora / trajectoire / décision / préparation autorisation | EPIC-B/C · Phase B start · HD · EC inspect · US-P1-15/16 | Nora informé CKC · Recommendation ≠ Decision · préparer/autoriser contrat |
| **W3 — Exécuter, prouver et replanifier** | Boucle retour exécution · **piste CKC CLOSED** · **closure US-P0-07** | EPIC-D · US-P0-07 (closure E2E) · US-P1-04…07 · historique · évolutivité | Evidence → Nora/LPS/Trajectory · requalify/replan E2E prouvés · prochaine décision informée |
| **W4 — Clôture Product Experience** | Produit cohérent et utilisable | EPIC-E · S1→S12 · A11Y · UAT | Boucle MUST utilisable · gouvernée · restart-safe · prouvée |

Post-W4 : P2 SHOULD · P3 FUTURE. **UAT/e2e requis par sortie de Vague** — SUCCESS technique ≠ Product Completion.

---

## 10. Ligne de coupe Delivery (recommandation uniquement)

| Niveau | Règle |
|---|---|
| **P0** | 8 US (US-P0-01…08) — bloqueurs structurels |
| **P1** | 15 US (US-P1-01…11, 13…16) — écarts MUST restants |
| **P2** | SHOULD-01…06 post-Completion |
| **P3** | FUTURE-01…06 |
| **N/A** | REQ-21 Git/reuse SATISFIED |

**NON AUTORISÉ :** Delivery · REAL · runtime v3 adoption · packageVersion selection / package implementation.

**Backlog Git integration :** **IN PROGRESS** via G1 / Draft PR #393 · **≠ integrated on main until merge**.

**CURRENT :** Backlog **VALIDATED BY MORRIS** · W1 readiness **CHATGPT QUALIFIED** · **G1 IN PROGRESS** via PR #393

**NEXT :** G1 merge/main truth → **G2** Morris Product DoctrinePackage Materialization Decision → **G3** Morris W1 Delivery GO.

---

## 11. Gates Morris restantes (modèle actif pré-W1)

| Gate | But | État |
|---|---|---|
| **G1** | Product Completion Git truth — backlog · readiness · roadmap sur **main** | **IN PROGRESS** via Draft PR #393 · ≠ main until merge |
| **G2** | Product DoctrinePackage materialization — `packageVersion` · root · cutover · fixture exit | **OPEN** |
| **G3** | Morris W1 Delivery GO — umbrella Tracks A–E (C6 · DP Phase A · bounded seam · product proof) | **NOT AUTHORIZED** |

**Downstream distinct (hors G3) :** full Phase B (US-P1-14) · REAL · future W2/W3/W4 Delivery gates · runtime v3 adoption · future Git transport/merge gates par tranche.

**Historical / absorbed into G3 :** validation backlog Morris *(satisfied)* · GO implémentation DP · GO Delivery durabilité C6 · GO slice Delivery micro-gates W1.

---

## 12. Vue d'atterrissage des outcomes (O-01…O-12)

> **Autorité C1 §G.1 uniquement.** Product Experience (REQ-18/19) et historique minimal (REQ-17) sont MUST transverses via EPIC-E / EPIC-A·D — **≠** remplacement de O-12.

| Outcome | Signification C1 (canonique) | Epic(s) | Vague | Exigences liées |
|---|---|---|---|---|
| **O-01** | Créer, trouver, comprendre et reprendre un Project | A | W1 | REQ-01, REQ-15 |
| **O-02** | Voir le chemin réel : done, active, proposed, blocked et dépendances | B | W1–2 | REQ-02, REQ-06 |
| **O-03** | Travailler avec Nora sans piloter manuellement la méthode | B *(A qualifie · D post-Evidence)* | W1–3 | REQ-03, REQ-04, REQ-24 |
| **O-04** | Distinguer clairement Nora Recommendation, HumanDecision, Confirmation et résultat agent | B/C | W1–2 | REQ-07, REQ-08, REQ-10 |
| **O-05** | Inspecter un ExecutionContract natif intelligible avant autorisation | C | W2 | REQ-09 |
| **O-06** | Faire exécuter le HOW technique du cycle dans une enveloppe gouvernée | D/C | W3 | REQ-11, REQ-12 |
| **O-07** | Comprendre SUCCESS / STOP / FAIL sans succès silencieux | D | W3 | REQ-13 |
| **O-08** | Comprendre Evidence d'abord au niveau métier, avec profondeur technique accessible | D/E | W3 | REQ-14 |
| **O-09** | Reprendre entre sessions avec contexte sémantique suffisant et sans mémoire inventée | A | W1 | REQ-02, REQ-03, REQ-15 |
| **O-10** | Replanifier la ProjectTrajectory à partir des décisions et preuves | B/D | W2–3 | REQ-06, REQ-07, REQ-22 |
| **O-11** | Ajouter / faire évoluer des types de cycle sans créer par défaut un nouveau moteur | A | W3 | REQ-05 |
| **O-12** | Fermer Evidence → Nora → LPS / Trajectory / Recommendation | D | W3 | REQ-22 |

---

## 13. Validations documentaires (§21)

| Contrôle | Résultat |
|---|---|
| A Verrouillage sources | RÉUSSI |
| B Couverture C1 | RÉUSSI |
| C C2 | RÉUSSI |
| D UX | RÉUSSI |
| E FA | RÉUSSI |
| F C6 | RÉUSSI |
| G CKC | RÉUSSI |
| H Qualité backlog | RÉUSSI |

---

*Validated by Morris 2026-08-22 · integration candidate via Draft PR #393 · G1 in progress · G2 OPEN · G3 NOT AUTHORIZED · Delivery NO · REAL ZERO · runtime v3 NON ADOPTED.*
