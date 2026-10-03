# SFIA Studio — Chat-First Product Simplification — Cycle 1 Cadrage

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Cycle** | 1 — Cadrage |
| **Profil** | **CRITICAL** |
| **Typologie v2.4** | **EVOL** — évolution du produit existant ; cadrage documentaire sans modification de code |
| **Autorité de trajectoire** | **D-SIMP-01** + **D-SIMP-02** + **D-SIMP-03** + **D-SIMP-04** + **D-SIMP-05** — **CONSUMED** ; politique HD **NON décidée** ; **production model routing NOT SELECTED** |
| **Pass** | **Final Git Integration** (D-SIMP-05 CONSUMED) |
| **Branche documentaire** | `docs/sfia-studio-chat-first-product-simplification-c1` |
| **Base Git** | `main` @ `ac272df5270faae1d1bea6a78cd0cc11886e97f4` (merge PR #547 — chat-first work recommendation continuity ; GE/Review/Result PR **#542 MERGED** on main) |
| **Statut du document** | **C1 VALIDATED BY MORRIS (D-SIMP-05)** — Guided Review §§1–22 **COMPLETE** · Final Documentary Consolidation **COMPLETE** · Final Critical Review #1 historical = NOT READY / CORRECTION REQUIRED · Correction Pass 01 **COMPLETE** · Final Closure Review = **PASS** · **NOT YET INTEGRATED ON MAIN** (Git integration AUTHORIZED / IN PROGRESS) · **≠** P2 AUTHORIZED · **≠** runtime proof |
| **Intégration Git** | **AUTHORIZED / IN PROGRESS** under Morris GO « intégration git complète directe » — **NOT YET INTEGRATED ON MAIN** until merge |
| **Runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **Cycle 2** | **NON AUTORISÉ** (voir §19) |
| **Fichier** | `projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md` |
| **Date de rédaction** | 2026-10-03 · Europe/Paris |

> **Lecture rapide.** Ce cadrage ne change pas le produit. Il fixe le *problème*, les *invariants à ne pas perdre*, la *classification des actifs*, le *Functional Operating Model cible* (P2), le *Workspace chat-first* (P3), la *continuité sémantique Pilote–Nora–Studio* (P4), et les *questions / gates / preuves* aval — pour que le Pilote pilote principalement **par conversation** avec Nora, avec des **interactions proportionnées** à la matérialité / à l’effet / au risque, **sans réduire la gouvernance**. **Chat-first ≠ Chat-only.** D-SIMP-02 y ajoute l’axe **Cognitive Reliability**. **Sans** second moteur Nora, **sans** production model routing, **sans** architecture technique adoptée en C1.

---

## 1. Autorité, sources et épistémologie du document

### 1.1 Décisions consommées

**D-SIMP-01** adopte la **trajectoire** « Studio chat-first product simplification ». Cette décision :

- **adopte** une direction : simplifier l’expérience et la mécanique Pilote ↔ Nora ↔ Studio en s’appuyant sur le backbone existant ;
- **n’adopte pas** de politique détaillée de matérialité HumanDecision (quand une phrase conversationnelle devient une HumanDecision durable, une Confirmation, une simple disposition de Recommendation ou une évolution de LPS) ;
- **n’autorise pas** Cycle 2, Delivery, code, REAL, ni retrait d’actif.

**D-SIMP-02** intègre l’axe **Cognitive Reliability + adaptive model / reasoning strategy** dans *ce même* macro. Cette décision :

- **adopte** : fiabilité cognitive comme axe structurant ; modèle adaptatif selon workload ; séparation règles déterministes Studio / cognition Nora / sélection-configuration cognitive server-owned ; nécessité d’évaluer modèle × reasoning effort ; **absorption** de la trajectoire Nora OpenAI-native-first existante (`nora-cognitive-completion/08-…`) comme actif KEEP / HARVEST / ADAPT ;
- **n’adopte pas** : modèle production définitif ; mapping permanent GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra ; reasoning high global ; matrice de routing définitive ; service/provider permanent ; nouvelle architecture technique ; migration API ; campagne REAL ; Cognitive Completion ; runtime v3 ADOPTED.

**D-SIMP-03** valide les dispositions Guided Review des Sections **13–15** et autorise la consolidation documentaire de la trajectoire **chat-first operating / workspace / semantic architecture**. Cette décision :

- **autorise** : consolidation C1 §§13–15 ; retouches de cohérence bornées (§§6/7/8/12) ; Roadmap tip truth-sync ; Review Pack / Handoff ;
- **n’autorise pas** : C2 / P2→P8 ; UX/Figma ; architecture technique adoptée ; Delivery ; QA réelle ; Product Replay ; REAL ; production routing ; runtime v3 ; intégration Git du candidat.

**D-SIMP-04** valide les dispositions Guided Review des Sections **16–22** et autorise la **Final Documentary Consolidation** du candidat C1. Cette décision :

- **autorise** : consolidation §§16–22 ; cohérence transversale §§1–22 ; Roadmap tip truth-sync ; Review Pack FULL ; Review Handoff L3 ;
- **n’autorise pas** : validation finale C1 ; intégration Git ; P2→P8 ; architecture technique ; persistence/store ; production routing ; REAL ; RETIRE ; runtime v3.

> **Guided Review / Closure / Validation.** Checkpoints 01–03 + Guided Review §§16–22 (**D-SIMP-04**) + Final Closure Review **PASS** + **D-SIMP-05 CONSUMED**. C1 = **VALIDATED BY MORRIS**. C1 = **NOT YET INTEGRATED ON MAIN** until merge completes. Historical fact preserved : Final Critical Review #1 = NOT READY / targeted correction required ; Correction Pass 01 = COMPLETE. **≠** P2 AUTHORIZED · **≠** runtime simplification proven · **≠** runtime v3 ADOPTED.

### 1.2 Hiérarchie d’autorité appliquée

```text
Git courant / preuves runtime
> décisions Morris D-SIMP-01…D-SIMP-05 (trajectoires / consolidations / C1 validation)
> framings v3 30–37          = product doctrine
> Build Doctrine             = construction governance
> D-ER-01…15                 = adopted target architecture
> Roadmap                    = current construction state / trajectory
> trajectoire Nora OpenAI-native-first (08) = actif KEEP/HARVEST/ADAPT (≠ second chemin)
> snapshot fournisseur daté  = EXTERNAL CURRENT INPUT (≠ doctrine)
> hypothèses de ce document
```

Ce cadrage **ne remplace aucune** de ces sources et **ne modifie pas** la trajectoire Nora source. D-SIMP-02 l’**absorbe et la recontextualise** dans la simplification chat-first ; elle ne redécide pas l’historique MW2→MW6.

### 1.3 Sources lues (lecture seule)

| Source | Usage dans ce cadrage |
| --- | --- |
| `convergence/sfia-studio-convergence-build-doctrine.md` | Lois Build Doctrine R1–R22 ; classification KEEP/ADAPT/COMPLETE/HARVEST/REPLACE/FREEZE/RETIRE LATER (Build Doctrine R4) ; Build Doctrine R13/R14 (décision humaine, Nora ne décide pas) ; **Build Doctrine R22 — OpenAI-native-first** |
| `convergence/sfia-studio-convergence-roadmap.md` (en-tête + B10) | Chemin critique, état de construction, anti-claims de maturité |
| `product-completion/01-product-completion-cadrage.md` | Structure, ton, rôle runtime **Pilote**, boucle cible, gouvernance |
| `product-completion/ux-product-experience/01-experience-architecture.md` | Principes d’expérience, modèle mental Pilote, surfaces S1–S12, contrat Option / Recommendation / HumanDecision |
| `sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` | Doctrine HD / CKC / N1–N3 ; V3-F05 = chaîne gouvernée historique (conversation → décision → exécution **when needed**) — C1 target = conversation → understanding → governed materialization → continuity (§14) |
| `sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md` | LPS, ProjectTrajectory, continuité sémantique, replanification gouvernée |
| `convergence/sfia-studio-generic-execution-review-result-architecture.md` (en-tête) | **Adopted target architecture** D-ER : exécution générique, claims vs faits vérifiés, Product Resolution, Result Surface |
| `nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md` | Trajectoire Nora existante VALIDATED / ACTIVE ON MAIN — KEEP / HARVEST / ADAPT ; **pas de second moteur** |

### 1.4 Légende épistémique

Chaque assertion non triviale porte (explicitement ou par section) l’un des statuts suivants :

| Tag | Signification |
| --- | --- |
| **FACT** | Observé dans une source versionnée ou Git (au moment de la rédaction) |
| **DOCTRINE** | Posé par framings v3 ou Build Doctrine (construction governance) |
| **ADOPTED TARGET ARCHITECTURE** | Cible d’architecture adoptée (ex. D-ER-01…15) — **≠** doctrine produit |
| **EXTERNAL CURRENT INPUT** | Snapshot fournisseur daté, à revalider — **≠** doctrine, **≠** routing production |
| **INFERENCE** | Déduit de FACT / DOCTRINE / architecture adoptée — non prouvé sur instance |
| **HYPOTHESIS** | À valider ou invalider en C2 / par preuve |
| **OPEN** | Décision ou information manquante — voir §17 |
| **TARGET** | Direction visée — **≠ implémenté** |

> **Règle éditoriale.** Aucune assertion TARGET n’est présentée comme implémentée. Aucune HYPOTHESIS n’est présentée comme FACT. L’état Git exact (PR, CI, branches) se **résout depuis Git**, pas depuis ce document.

---

## 2. Executive Summary

SFIA Studio dispose déjà d’un **backbone solide** : Project / Living Project State, Nora, décisions et exécution gouvernées, Evidence / Review, reprise, et le backbone Generic Execution → Review → Result. Le problème n’est **pas** l’absence de capacités.

Le problème est que la **complexité interne fuit dans l’expérience** : elle devient problématique lorsqu’elle doit être comprise, manipulée ou compensée par le Pilote ou Nora pour réaliser une interaction qui devrait rester simple. Ce n’est pas « trop de code » en soi — c’est une friction d’orchestration, d’exposition et de cognition.

**D-SIMP-01** traite ce problème par **simplification ciblée, non greenfield** : réutiliser, simplifier, fusionner lorsque pertinent, rendre invisible ce qui n’a pas besoin d’être exposé, et retirer plus tard seulement après preuve et gate.

**D-SIMP-02** ajoute une valeur produit prioritaire : **Nora doit être plus fiable cognitivement**. L’adaptive model / reasoning strategy est un **moyen candidat** pour y parvenir — pas le centre du résumé, et **pas** un mapping production décidé.

Ce Cycle 1 cadre le problème, les invariants, la classification des actifs, la matérialité des décisions (sans politique finale), le budget d’interaction Pilote, et la trajectoire P1→P8. **Seul P1 est en cours.** Ce document n’autorise ni Cycle 2, ni Delivery, ni REAL, ni retrait d’actif, ni runtime v3, ni production model routing.

---

## 3. Problem Statement

### 3.1 Principe : toute complexité n’est pas un défaut

La simplification visée **n’est pas** une réduction de la rigueur. La distinction de travail est :

| Type | Définition | Exemples (SFIA Studio) | Traitement |
| --- | --- | --- | --- |
| **Complexité utile (essential)** | Encode une garantie : gouvernance, autorité, preuve, réversibilité, fail-closed, auditabilité / reconstructibilité | Recommendation ≠ HumanDecision ; HumanDecision structurante provenancée/reconstructible ; autorité effective = intersection ; Evidence / ReviewBundle ; claims ≠ faits vérifiés ; worktree isolé ; Project ≠ Cycle | **À préserver** ; peut être *rendue invisible* au Pilote mais **pas** supprimée seulement pour simplifier l’UX |
| **Complexité accidentelle (accidental)** | Complexité qui doit être comprise ou compensée par le Pilote ou Nora alors qu’elle pourrait rester interne à Studio **sans perte de garantie** ; résulte aussi de l’historique, de doubles chemins, de vocabulaire exposé ou de surfaces mal différenciées | Objets internes exposés comme étapes ; surfaces de pilotage concurrentes ; chemins parallèles ; confirmations à faible matérialité ; désambiguïsation de références imposée au dialogue | **À réduire** de manière gouvernée |
| **Complexité transitoire (debt)** | Pont temporaire **légitime** uniquement s’il a : **raison d’existence**, **cible**, et **condition de sortie**. Sinon ne pas la qualifier automatiquement « transitoire » | Taxonomies de tâche spécialisées (`docs_write`, …) déjà requalifiées *RETIRE FROM PRODUCT MODEL* ; stores process-local pour certains objets | Sortie explicite (voir §20) |

> **INFERENCE.** Une part significative du coût perçu par le Pilote relève de la complexité *accidentelle de présentation et d’interaction*, pas de la complexité *essentielle de gouvernance*. **HYPOTHESIS** à tester en C2 par audit d’interaction (voir §11, OQ-C2-01).

### 3.2 Coût Pilote

Le Pilote (rôle runtime fonctionnel unique, DOCTRINE) subit, à des degrés à mesurer :

- **charge de désambiguïsation** : savoir *quelle* option / recommandation / trajectoire / contrat une phrase vise ;
- **charge de navigation** : alterner entre conversation et autres surfaces comme si elles étaient des postes de commande concurrents ;
- **charge de vocabulaire** : termes internes exposés plus que nécessaire (simplifier le vocabulaire *exposé* ≠ supprimer le modèle sémantique interne utile) ;
- **charge de confirmation** : risque de micro-confirmations ou de gates dont la matérialité est discutable ;
- **charge de reprise** : retrouver « où j’en suis » sans faux souvenir.

**Direction cible.** **Chat = interaction primaire.** Les autres surfaces peuvent exister pour information, inspection, preuve, historique ou résultat — elles ne doivent pas devenir des postes de commande concurrents sans nécessité fonctionnelle.

**Interactions proportionnées.** L’objectif est des interactions **proportionnées à la matérialité / à l’effet / au risque** : éliminer les interactions *inutiles*, **pas** supprimer une interaction protectrice utile. Ce n’est **pas** « minimiser les interactions à tout prix ».

Ces coûts sont des **HYPOTHESIS d’expérience** ; leur quantification relève du **Pilot Interaction Budget** (§11).

### 3.3 Coût Nora

Nora (acteur système cognitif — DOCTRINE) doit principalement porter : **compréhension, cognition, analyse, clarification, challenge, recommandation**.

Elle supporte aujourd’hui, à des degrés à mesurer :

- **charge de contexte** : reconstituer l’état courant et les sujets actifs avant de répondre ;
- **charge de contrat de sortie / binding technique** : produire des références structurées (options, sujets, dispositions, classifications) cohérentes avec les attentes serveur ;
- **charge de frontière** : ne jamais transformer une Recommendation en HumanDecision, tout en restant naturelle en conversation ;
- **charge de régression** : chaque ajustement de continuité chat-first peut exiger de recontrôler plusieurs chemins.

**Direction (TARGET, ≠ architecture technique adoptée).** Nora interprète le **sens**. Studio prépare / résout / valide de façon déterministe, lorsque possible et fiable : currentness, subject binding, membership, identité durable, authority, policy, idempotence, objets runtime techniques.

### 3.4 Coût de maintenance

- **FACT (Git).** Une séquence rapprochée de livraisons (#543 à #547 sur `main`) traite des corrections de continuité sémantique chat-first.
- **INFERENCE.** La *surface de couplage* entre conversation et objets durables est large ; chaque nouveau chemin conversationnel rouvre des points de désambiguïsation.
- **INFERENCE.** Le coût de test croît avec le nombre de chemins / resolvers parallèles.
- **HYPOTHESIS.** Une partie de cette surface peut être réduite par une capture de décision plus uniforme (§10), une matérialité cadrée (§9), et — si prouvé — une orchestration commune (voir §6.2), sans toucher aux garanties.

### 3.5 Énoncé du problème

> SFIA Studio doit permettre au Pilote de piloter principalement **par conversation** avec Nora. La complexité nécessaire à la gouvernance, à la preuve, à l’exécution et à la reprise doit être portée par Studio autant que possible, sans imposer au Pilote ou à Nora de manipuler inutilement les mécanismes internes du runtime. Aujourd’hui, certaines mécaniques internes remontent dans l’expérience et dans la cognition Nora, augmentant friction, fragilité et maintenance **sans valeur proportionnelle**.

---

## 4. Intent / Value

### 4.1 Intention

Faire de la **conversation** la surface de pilotage principale **effective**.

Distinction explicite :

| Notion | Sens |
| --- | --- |
| **Chat-first presentation** | La conversation domine visuellement |
| **Chat-first operation** | Le Pilote **pilote réellement** par conversation |

**Cible = CHAT-FIRST OPERATION**, pas seulement une présentation conversation-dominante.

Le Pilote ne manipule un objet ou geste explicitement que lorsqu’il apporte une valeur réelle de **compréhension, décision, inspection, consentement ou protection**. Les internals (refs, digests, classifications, modes internes) restent absorbés lorsque possible — **sans** second chemin produit ni système parallèle (R6).

### 4.2 Valeur attendue (cible — non prouvée)

| Valeur | Description | Statut |
| --- | --- | --- |
| **Interactions proportionnées** | Moins d’interactions *inutiles* ; interactions restantes proportionnées à la matérialité / à l’effet / au risque — **pas** une réduction quantitative aveugle | TARGET |
| **Continuité de dialogue** | Réponses naturelles (« oui », « go », « la 2 », « vas-y ») interprétées si le binding est sûr ; sinon clarification brève | TARGET |
| **Surfaces avec owner clair** | Une information possède un owner / lieu principal ; plusieurs projections possibles, **pas** plusieurs vérités concurrentes | TARGET |
| **Nora plus simple à intégrer / gouverner** | Contexte mieux préparé ; moins de contrats de sortie fragiles ; moins de binding technique cognitif | TARGET |
| **Nora plus fiable cognitivement** | Meilleure compréhension, raisonnement, challenge, contradictions, reviews ; capacité proportionnée au workload ; évaluation avant promotion. **Valeur produit.** Le model routing est un **moyen candidat**, pas la valeur elle-même | TARGET |
| **Maintenance plus locale** | Une évolution conversationnelle ne doit pas exiger des corrections indépendantes dans plusieurs moteurs / resolvers lorsqu’un invariant commun peut être centralisé — **≠** « moins de code » en soi | TARGET |
| **Garanties de gouvernance préservées ou renforcées** | Les formes peuvent évoluer ; les garanties restent : décision humaine lorsque nécessaire ; Recommendation ≠ HumanDecision ; preuve ; authority ; auditability ; Confirmation applicable ; fail-closed | DOCTRINE (invariant) |

### 4.3 Coût de l’inaction

**Coût mécanique.** Continuer à ajouter des chemins de continuité un par un augmente la dette de couplage : patch local → nouveau chemin → couplage → régression, y compris sur la frontière Recommendation ≠ HumanDecision.

**Coût cognitif.** Sans stratégie proportionnée, Studio risque : cognition insuffisante sur workloads difficiles ; capacité inutilement chère/lente sur workloads simples ; logique interne ajoutée pour compenser une capacité provider déjà disponible.

### 4.4 Lien capacité v3 (Build Doctrine R1)

Ce chantier sert principalement : **conversation gouvernée**, **continuité Project**, **cognition Nora**, **trajectoire**, **exécution fiable**, **preuve**.

IDs de traçabilité : V3-F05 (conversation → décision → exécution **when needed** ; C1 target §14 = materialization → continuity), V3-F02 (LPS), V3-F06 / V3-F09 (ProjectTrajectory / replanification), V3-F01 (CKC / cognition), V3-F04 (épistémologie), V3-F11 (AgentCapability), V3-F12 (execution governance), V3-F14 / F15 (preuve / anti-claims).

---

## 5. Non-goals

Ce cadrage et les trajectoires D-SIMP-01 / D-SIMP-02 **ne sont pas** :

#### A. Pas de refonte globale

| # | Non-goal |
| --- | --- |
| NG-01 | Une **réécriture** ou un redémarrage « greenfield » du produit — **NON-GREENFIELD** ; le backbone est KEEP / ADAPT |
| NG-02 | Une **réécriture de doctrine** (framings `30`–`37`, Build Doctrine, C1 Product Completion) |
| NG-10 | Un choix d’architecture technique (persistence, schémas, APIs) ou une **nouvelle Nora / second moteur cognitif** |

#### B. Pas d’implémentation dans C1

| # | Non-goal |
| --- | --- |
| NG-03 | Du **code**, des tests, des schémas, des migrations, des APIs ou toute modification de `projects/sfia-studio/app/**` |
| NG-04 | Une campagne ou autorisation **REAL** (Cursor, OpenAI, Git distant) — **ZERO REAL** |
| NG-11 | Une autorisation de Cycle 2, de Delivery, de commit / push / PR |

#### C. Pas de décision prématurée

| # | Non-goal |
| --- | --- |
| NG-05 | Un **RETIRE immédiat** d’un actif, d’une surface ou d’une taxonomie |
| NG-07 | La **décision de la politique complète** de matérialité HumanDecision |
| NG-12 | Un **production model routing**, un mapping permanent Luna/Sol/Astra, un reasoning effort global, une campagne REAL d’évaluation, ou Cognitive Completion |

#### D. Pas d’élargissement d’autorité

| # | Non-goal |
| --- | --- |
| NG-06 | Une **adoption runtime v3** (reste **NON ADOPTED**) |
| NG-08 | Un élargissement de l’autonomie : pas de global L5, pas d’auto-escalade, pas de merge autonome |
| NG-09 | Un nouveau rôle runtime : le rôle fonctionnel reste **Pilote** ; Morris reste autorité de construction / gouvernance |

#### E. Pas de disparition des interactions utiles

| # | Non-goal |
| --- | --- |
| NG-13 | **Simplification ≠ disparition de toute interaction explicite.** Les décisions, inspections ou confirmations restent visibles lorsqu’elles apportent une valeur de compréhension, consentement, gouvernance, protection ou auditabilité. Le chantier élimine les interactions *inutiles*, pas les interactions *utiles*. |

---

## 6. Current State

> Les éléments ci-dessous sont **FACT / DOCTRINE / ADOPTED TARGET ARCHITECTURE** sauf mention contraire. Les frictions (§6.5) sont **INFERENCE / HYPOTHESIS** tant qu’un audit d’interaction C2 ne les a pas confirmées.

### 6.1 Backbone produit (KEEP / ADAPT)

**Message central.** Studio dispose déjà de fondations importantes. Ce chantier porte principalement sur **orchestration, exposition, interaction, simplification et cognition** — pas sur la reconstruction du socle.

| Brique | État (résumé) | Source |
| --- | --- | --- |
| **Product Store** | SQLite `node:sqlite` (G0-B ADOPTED) sous OA Native Backbone (G0-A ADOPTED) | Build Doctrine / Roadmap |
| **Project / LPS** | Durables et restart-safe (M1) | Roadmap B10 |
| **Nora contextuelle** | Durable (M2) ; trajectoire cognitive OpenAI-native-first (**Build Doctrine R22**) | Roadmap / Build Doctrine |
| **HumanDecision + provenance décisionnelle + ExecutionContract natif** | HumanDecision durable ; provenance décisionnelle actuelle (dont DecisionBasis sur les chemins qui l’utilisent) ; ExecutionContract natif (M3). **Auditability / reconstructibility = invariant. DecisionBasis universel = NOT DECIDED.** | Roadmap B10 |
| **Attempt / Evidence / ReviewBundle** | Durables (M4/M5) ; REAL historique borné ; REAL default OFF | Roadmap B10 |
| **Product Completion** | COMPLETE / CLOSED BY MORRIS (preuve déterministe intégrée) | Roadmap B10 |
| **Cycle Reservation & gate-aware piloting, Native Execution Loop** | INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #518, #527) | Roadmap B10 |
| **Generic Execution backbone** | Cible D-ER adoptée ; delivery convergence **PR #542 MERGED on main** (`b4547c8c…`) — **INTEGRATED ON MAIN** ; residual seams = P4 AUDIT INPUT (≠ automatic macro scope) | §6.2 |
| **runtime v3** | **NON ADOPTED** | Toutes sources |

### 6.2 Generic Execution → Review → Result

**ADOPTED TARGET ARCHITECTURE (D-ER-01…D-ER-15, adoptées par Morris le 2026-09-29).** D-ER n’est **pas** de la doctrine produit. Hiérarchie : framings v3 = product doctrine · Build Doctrine = construction governance · D-ER = adopted target architecture · Roadmap = current construction state / trajectory.

#### A. Principes architecturaux = KEEP

- **ExecutionContract** sémantique générique (WHAT), incluant exigences de rapport ;
- **Cursor Generalist** (HOW) en **worktree Git isolé** ;
- **CursorExecutionReport** et **Cursor Review End Of** = **CLAIMS** (sorties exécuteur) ;
- **Studio VerifiedChangeSet** = faits vérifiés ;
- **Evidence / ReviewBundle / ClaimEvaluation** ;
- **Product Resolution** unique + **Reconciler** (propriétaire déterministe de la progression) ;
- **Result Surface** destinée au Pilote.

#### B. Détails d’implémentation / bridges / transitions = AUDIT / ADAPT selon preuve

Les taxonomies de tâche Product spécialisées (`docs_write`, `code_write`, `read`, …) restent *RETIRE FROM PRODUCT MODEL* (dette transitoire — pas de retrait dans C1). **Chaque classe ou bridge courant n’est pas automatiquement un invariant D-ER.**

> **CURRENT GIT TRUTH (Final Consolidation).** Generic Execution / Review / Result delivery convergence = **PR #542 MERGED** on `main` (`b4547c8c9b5bada18695aba887e4200d03d51d87`, 2026-10-02) — ancestor of current `origin/main` @ `ac272df5…`. Status = **INTEGRATED ON MAIN**. Residual seams (ex. docs_write bridge, transitional durableLocalWriteSeal, retention/GC, result rehydration, future Git promotion) = **P4 AUDIT INPUT** — **EXISTING DEBT ≠ AUTOMATIC MACRO SCOPE**. Re-resolve from Git at each phase entry.

#### C. Pattern d’orchestration global — CANDIDATE / TARGET (Guided Review Checkpoint 01)

**Disposition Morris (guided-review Sections 1–6) :**

> Generic Execution → Review → Result = **KEEP** + **HARVEST AS GLOBAL ARCHITECTURAL PATTERN CANDIDATE**.

**CANDIDATE ≠ ADOPTED GLOBAL ARCHITECTURE.**

Le point à étudier est le **pattern d’orchestration**, **pas** la transformation de tous les objets en ExecutionContract.

Pattern candidat conceptuel :

```text
input / intention
  → qualification
  → semantic contract / governed intent
  → processing / actor
  → claim / outcome
  → deterministic verification / resolution
  → durable state update
  → presentation / next action
```

**Principe candidat :** *generic orchestration by default ; domain-specific mechanics only where semantics require them.*

En français : réutiliser une mécanique générique de progression et de résolution lorsque les invariants sont réellement communs ; conserver une mécanique spécialisée uniquement lorsqu’une différence métier réelle le justifie.

**Garde-fous sémantiques (non négociables ici) :**

- Recommendation ≠ ExecutionContract ;
- HumanDecision ≠ Result ;
- LPS ≠ Attempt ;
- ProjectTrajectory ≠ Evidence.

On cherche à généraliser la **mécanique d’orchestration commune**, pas les **objets métier**.

**Trajectoire d’évaluation (bornée — détail P2/P4/P5 en §15) :**

| Phase | Responsabilité candidate | Statut |
| --- | --- | --- |
| **P2** | Étudier si un modèle générique de progression / résolution des interactions Studio est tenable, dont Generic Execution → Review → Result est le premier cas fortement éprouvé ; analyser au minimum conversation/clarification, Recommendation, HumanDecision, ProjectTrajectory, EC, execution, Evidence/Result, replanning — quels invariants sont communs, quelles différences sont vraiment métier | **NOT AUTHORIZED** |
| **P4** | Si P2 confirme le fit, étudier un **Canonical Orchestration Spine** *candidate* (Input → Qualify → Resolve current subject → Produce governed intent → Process → Verify → Resolve result → Update durable state → Present next action). **Ne pas** créer automatiquement RecommendationEngine / TrajectoryEngine / DecisionEngine / ExecutionEngine / ResultEngine si ces moteurs ne diffèrent que par orchestration générique. **Aucune abstraction globale adoptée en C1.** | **NOT AUTHORIZED** |
| **P5** | Seulement après validation P2/P4 : convergence progressive des mécanismes spécialisés vers un spine commun **SI PROUVÉ**. Net Complexity Reduction obligatoire. Pas de big-bang. Pas de global engine inventé en C1. | **NOT AUTHORIZED** |

### 6.3 Continuité chat-first de la Work Recommendation (#547)

**FACT (Git).** `main` @ `ac272df5…` = merge de la PR #547 (« complete chat-first work recommendation continuity »), précédée par #543–#546. Ces livraisons ont renforcé la capacité de conserver, de présenter et de disposer une recommandation de travail depuis la conversation.

**INFERENCE.** #547 = **evidence / asset / proof** que la continuité chat-first est faisable, **et** qu’elle exige un travail de contrat non trivial.

**Disposition Guided Review.** #547 **n’impose PAS** de conserver son modèle interne actuel à l’identique. Il peut être **HARVEST / ADAPT / simplifié** dans le respect de ses preuves utiles.

### 6.3A Existing continuity / Journal / semantic assets (KEEP / HARVEST / ADAPT)

> **Checkpoint 03 coherence.** Ces capacités sont des **EXISTING ASSETS TO KEEP / HARVEST / ADAPT**. Elles **ne satisfont pas encore** le target global operating / workspace / semantic (§§13–15).

| Capacité / preuve (Git / Roadmap) | Qualification |
| --- | --- |
| **PROJECT CONVERSATIONAL CONTINUITY & CYCLE JOURNAL** (PR #516) | Durable cycle journal + conversation continuity — **KEEP / HARVEST / ADAPT CORE** |
| **PILOTABILITY & JOURNAL SEMANTIC INTEGRITY** (PR #517) | Pilotability + journal semantic integrity — **KEEP / HARVEST / ADAPT** |
| **PILOT–NORA–STUDIO SEMANTIC CONTINUITY** (tests / seams existants, ex. `pilotNoraStudioSemanticContinuity*`) | Preuve / pattern de continuité sémantique — **HARVEST / EVALUATE** for P4 |
| **PRODUCT-CONTINUITY-SHARED-KNOWLEDGE** (PR #540 historique) | Shared knowledge / continuity evidence — **HARVEST patterns** · **≠** SharedKnowledgeStore à créer |
| **Generic Execution / Review / Result** (+ CP4 harvest : server-owned carrier → HD → EC → verified facts → Nora → Pilot projection) | Architecture proof / continuity pattern — **HARVEST** · **≠** universal Product object model |

### 6.4 UX déjà conversation-first

**DOCTRINE / UX Experience Architecture (CC-D01).**

- Conversation **dominante** + panneau d’état vivant + confirmations structurantes ; pas de stepper principal ; pas de workspace multi-panneaux au MVP ;
- Surfaces S1–S12 candidates ; « un concept Cycle 2 ≠ un écran » ; minimiser fragmentation, navigation, jargon méthode, modales systématiques ;
- Studio « absorbe » cycle type, profil, CKC, lenses, doctrine package, AgentCapability interne — sauf ambiguïté utile à clarifier ;
- Option ≠ Recommendation ≠ HumanDecision ; phrase conversationnelle ≠ gate ; Composer libre toujours disponible hors modal stricte.

**Distinction.** **Chat-first presentation ≠ chat-first operation.** La direction UX historique est **KEEP**. D-SIMP-01 cherche à réduire l’écart entre l’intention conversation-first et le **fonctionnement réel**.

### 6.5 Frictions identifiées (INFERENCE / HYPOTHESIS — à confirmer en C2)

#### A. Pilot-facing

| ID | Friction | Statut |
| --- | --- | --- |
| FR-02 | Matérialité des décisions non explicitement cadrée : risque de sur-confirmation ou de sous-capture | HYPOTHESIS — **central** |
| FR-03 | Réponses brèves (« oui », « go ») dont la portée n’est pas toujours liée à un sujet unique et courant | HYPOTHESIS |
| FR-04 | Surfaces dont l’ownership / le rôle sont insuffisamment différenciés, redondance, ou surfaces de pilotage concurrentes — **≠** « trop de surfaces » en soi | HYPOTHESIS |
| FR-07 | Vocabulaire interne (statuts épistémiques, gates, N1–N3) potentiellement trop exposé | HYPOTHESIS |

#### B. Nora-facing

| ID | Friction | Statut |
| --- | --- | --- |
| FR-01 | Désambiguïsation de références (option, sujet, recommandation, trajectoire) coûteuse pour Pilote et Nora | INFERENCE (série #543–#547) |
| FR-09 | **Cognitive workload adaptation** : la configuration cognitive actuelle peut ne pas être suffisamment proportionnée au workload (qualité, coût, latence, profondeur) | HYPOTHESIS / CURRENT STRATEGY TO AUDIT |
| FR-10 | **Nora technical-binding burden** : Nora porte potentiellement trop de responsabilités de binding technique (refs, subjects, runtime identifiers, classifications, relations d’objets courants) ; une partie peut être absorbée déterministement par Studio | INFERENCE / HYPOTHESIS |

#### C. Architecture / maintenance

| ID | Friction | Statut |
| --- | --- | --- |
| FR-05 | Chemins parallèles (legacy / générique ; taxonomies spécialisées) maintenus en dette | FACT (dette déclarée) |
| FR-06 | Objets process-local (Proposal, Conversation, Confirmation selon l’objet) affectent la reprise — statut exact à **requalifier depuis Git courant** | FACT (C1 Product Completion historique) / OPEN Git |
| FR-08 | Coût de revue/test des macros de continuité chat-first croissant | INFERENCE |

---

## 7. Asset Classification

> **Guided Review Checkpoint 02.** Dispositions Morris Sections 7→12 consolidées. Classification = trajectoire candidate / disposition — **≠** autorisation de code. **Aucun RETIRE immédiat.**

### 7.1 Règles

- Classification R4 : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**.
- **Aucun RETIRE immédiat.** « RETIRE LATER » = candidat conditionnel, avec condition de sortie (§20) et **gate distinct**.
- **BACKBONE = KEEP / ADAPT** (non-greenfield).
- Une classification est un **choix de trajectoire**, pas une autorisation de modification de code.

### 7.2 Product / state family

| # | Actif | Classification | Justification / disposition Guided Review |
| --- | --- | --- | --- |
| 1 | **SQLite Product Store** | **KEEP** | Vérité produit locale |
| 2 | **Project** | **KEEP** | Project ≠ Cycle |
| 3 | **Cycle / CycleInstance** | **ADAPT** | Conserver conceptuellement ; réduire exposition Pilot-facing |
| 4 | **LPS** | **KEEP** (backbone) / **ADAPT** (behavior) | C2 doit distinguer état dérivé de faits/Evidence vs état dérivé d’intention/décision Pilote |
| 5 | **ProjectTrajectory** | **ADAPT** | Durable / important ; **pas** un workflow parallèle au chat |
| 7 | **Observation / Hypothesis / Option / Recommendation** | **KEEP** (distinction) / **ADAPT** (surfacing) | Distinctions épistémiques conservées |
| 8 | **HumanDecision** | **KEEP** | Auditability / reconstructibility = **invariant**. DecisionBasis = mécanisme courant, **≠** invariant universel (**NOT DECIDED / C2**) |
| 9 | **Confirmation** | **ADAPT** | Forme conversationnelle **reste candidate** |
| 10 | **ExecutionContract** | **ADAPT** | Objet **execution-specific** conservé. **HARVEST** possible du principe « semantic contract before governed processing ». **≠** « tout devient EC » |

### 7.3 Doctrine / DoctrinePackage / CKC

La ligne KEEP unique est insuffisante. Séparer :

| Couche | Classification | Sens |
| --- | --- | --- |
| **A. Doctrine v3 corpus / invariants** | **KEEP** | Doctrine produit |
| **B. DoctrinePackage resolution / context assembly** | **KEEP / ADAPT** | Studio assemble le contexte applicable |
| **C. CKC semantic contracts** | **KEEP / COMPLETE / ADAPT** | Guidance cognitive (questions, risks, maturity, evidence expectations, anti-claims, dependencies, stops) |
| **D. Pilot exposure** | **HIDDEN BY DEFAULT / ADAPT CHAT-FIRST PROJECTION** | Le Pilote n’administre pas la méthode |

**Cible (TARGET).** Studio résout silencieusement : Project + current state + trajectory + current work + applicable doctrine + applicable CKC + contraintes/sources pertinentes → construit un **contexte cognitif approprié** pour Nora.

Le Pilote **ne sélectionne pas** : CKC, DoctrinePackage, cycle technique, profil méthodologique, lenses internes.

**Principe :** *Methodology is implicit but effective.* Studio résout et applique ; Nora l’utilise cognitivement ; le Pilote bénéficie du comportement sans administrer la méthode.

**Garde-fou :** **CKC ≠ rigid workflow.** Un CKC guide ; il ne force pas un stepper si l’état du Project ne le justifie pas.

**C2** doit traiter explicitement : *comment* DoctrinePackage + CKC deviennent opérants dans le workflow chat-first.

### 7.4 Generic Execution / Review / Result family

| # | Actif | Classification | Note |
| --- | --- | --- | --- |
| 11 | **AgentCapability** | **KEEP** | Capacité technique ≠ autorité |
| 12 | **Cursor Generalist** | **KEEP** | HOW |
| 13 | **Isolated Git worktree** | **KEEP** | Isolation |
| 14 | **ExecutionAttempt** | **KEEP** | Lifecycle |
| 15 | **CursorExecutionReport** | **KEEP AS CLAIM** | Jamais promu en fait |
| 16 | **Cursor Review End Of** | **KEEP / COMPLETE** (current target) | **AUDIT P4** : vraie sémantique vs mécanique construction/transitoire |
| 17 | **Studio VerifiedChangeSet** | **KEEP TARGET / COMPLETE** selon Git truth | Resolve from Git |
| 18 | **Evidence** | **KEEP** | |
| 19 | **ReviewBundle** | **ADAPT** (presentation) | |
| 20 | **ClaimEvaluation** | **KEEP** | |
| 21 | **Product Resolution** | **KEEP / COMPLETE** selon Git truth | |
| 23 | **Result Surface** | **KEEP TARGET / COMPLETE** | |

### 7.5 Reconciler / Continuity Projection

| # | Actif | Classification | Disposition |
| --- | --- | --- | --- |
| 22 | **Reconciler / Continuity Projection** | **KEEP** + **HARVEST AS GLOBAL ORCHESTRATION PRINCIPLE CANDIDATE** | Dans l’architecture Generic Execution **courante**, Reconciler est l’owner déterministe de la progression. Le composant **n’est pas** déclaré architecture globale éternelle. Principe candidat à HARVEST : **un owner déterministe clair de la progression / résolution**. À étudier avec le futur Canonical Orchestration Spine (P2/P4). |

### 7.6 Generic orchestration asset / pattern

| Actif / pattern | Classification | Disposition |
| --- | --- | --- |
| **Generic Execution orchestration pattern** | **HARVEST / EVALUATE FOR GLOBAL REUSE** | Pattern d’orchestration — **≠** architecture globale adoptée |

**Primitives / invariants candidats :** semantic intent / contract · deterministic context/subject resolution · actor processing · claim vs verified fact · deterministic resolution · durable progression · next action.

**Garde-fou absolu :** *Generalize orchestration, not domain semantics.*

- Recommendation ≠ EC · HumanDecision ≠ Result · Trajectory ≠ Attempt · Evidence ≠ LPS.

### 7.7 Experience family

| # | Actif | Classification | Note |
| --- | --- | --- | --- |
| 24 | **History / Recovery** | **ADAPT** | |
| 25 | **Journal / Cycle Memory core semantic capability** | **KEEP / HARVEST / ADAPT CORE** | PR #516 / #517. Specific redundant controls/presentation = **RETIRE LATER CANDIDATE** subject to P2/P3 proof only. **≠** global Journal retirement. Voir §14.5 |
| 25b | **Role-aware semantic projections** (Pilot / Nora / Studio) | **HARVEST / EVALUATE AS CROSS-CUTTING ARCHITECTURE PRINCIPLE** | P4 concern · **≠** adopted architecture · **≠** SharedKnowledgeStore |
| 26 | **Nora cognitive runtime** | **KEEP CORE / ADAPT** boundary & output contracts | Voir §12 |
| 27 | **PRE-M6 UX** | **HARVEST** | |
| 28 | **Cursor v2.6 template logic** | **HARVEST** functional semantics only | |
| 29 | **Gate/modal pattern for low-materiality decisions** | **ADAPT / REPLACE CANDIDATE — SUBJECT TO C2 MATERIALITY POLICY** | **≠** REPLACE définitif |
| 30 | **Stepper / cockpit / multi-panel workspace** | **FREEZE** | |

### 7.8 Transitional / process-local family

| # | Actif | Classification | Note |
| --- | --- | --- | --- |
| 31 | **Specialized Product task taxonomies** | **RETIRE LATER** (déjà D-ER) | Pas de retrait ce checkpoint |
| 32 | **Process-local stores / objects** (Proposal, Conversation, Confirmation, …) | **ADAPT / COMPLETE AS REQUIRED AFTER CURRENT GIT AUDIT** | **≠** COMPLETE uniforme sans audit Git. Résoudre **objet par objet** depuis Git courant |

### 7.9 Cognitive / provider family

| # | Actif | Classification | Note |
| --- | --- | --- | --- |
| 33 | **Nora OpenAI-native-first trajectory** (`08-…`) | **KEEP / HARVEST / ADAPT** | Pas de duplication ; ≠ Cognitive Completion |
| 34 | **MW0 Model × Reasoning eval contract/evidence** | **HARVEST** | |
| 35 | **GPT-5.6 historical assumptions** | **HARVEST / REQUALIFY** | |
| 36 | **Model selection / reasoning config** | **ADAPT / REQUALIFY** | Mapping **CANDIDATE / EVAL REQUIRED** |
| 37 | **Hardcoded model mappings** (si présents) | **ADAPT / REQUALIFY — P4 AUDIT REQUIRED — NO RETIRE DECIDED** | Classification valide (≠ « AUDIT IN P4 » seul) |
| 38 | **Responses API / Agents SDK seams** | **KEEP / ADAPT** subject to current fit check | |

### 7.10 External inputs affecting asset decisions (NOT product assets)

| Input | Qualification |
| --- | --- |
| **OpenAI provider snapshot GPT-6 (2026-10-03)** | **NOT A PRODUCT ASSET — EXTERNAL CURRENT INPUT** (§12A.3). ≠ doctrine · ≠ production routing · ≠ permanent contract. Revalider avant P2/P4/P5/P6. |

> **Contrôle.** Aucune ligne ne prescrit un RETIRE immédiat. Pas de seconde trajectoire Nora. Pas d’architecture globale adoptée via HARVEST pattern.

---

## 8. Simplification Principles

| ID | Principe | Source / Justification |
| --- | --- | --- |
| **SP-01** | **Simplifier interaction et mécaniques de gouvernance lorsque possible, sans réduire les garanties de gouvernance.** Garanties à préserver : human authority ; evidence ; auditability ; fail-closed ; scope ; Recommendation ≠ Decision ; Confirmation/protection when applicable. Les *formes* peuvent évoluer. | DOCTRINE / Guided Review CP02 |
| **SP-02** | **NON-GREENFIELD.** Backbone = KEEP / ADAPT ; réutiliser l’existant utile (R3). | Build Doctrine R3 |
| **SP-03** | **Recommendation ≠ HumanDecision.** Une acceptation conversationnelle *brute* ≠ HD automatique ; une réponse **qualifiée** peut matérialiser une HD si les garanties applicables sont satisfaites. | V3-F05 / R14 / CP02 |
| **SP-04** | **Les décisions structurantes restent humaines** (Pilote ; Morris pour construction / gates). | R13 |
| **SP-05** | **Chat-first operation** (pas seulement chat-first presentation). **CHAT-FIRST ≠ CHAT-ONLY** : conversation = surface primaire d’interaction ; surfaces de soutien spécialisées restent légitimes (Journal, state, EC, Evidence, Recovery). | CC-D01 / D-SIMP-01 / CP02 / CP03 |
| **SP-06** | **Durable state serves Product continuity and reliable conversation.** LPS, Evidence, HD, EC soutiennent continuité Product **et** conversation fiable — pas seulement le dialogue ; le Pilote n’administre pas les objets runtime. | D-SIMP-01 / CP02 |
| **SP-07** | **Pilot does not administer runtime objects.** | D-SIMP-01 |
| **SP-08** | **Methodology is implicit but effective.** Studio résout current work, DoctrinePackage, CKC, contraintes applicables, et construit le contexte cognitif approprié. Nora consomme/applique cognitivement. Le Pilote n’administre pas les internals méthodologiques. **CKC ≠ rigid workflow.** | UX EA / §7.3 / CP02 |
| **SP-09** | **Materiality before ceremony.** Capture proportionnée à l’effet/risque ; aucune micro-confirmation ; aucune décision implicite. | Doctrine N1–N3 |
| **SP-10** | **Governance proportional to effect/risk.** Fail-closed où autorité/sécurité l’exige ; pas de cérémonie pour l’échange mineur. | D-SIMP-01 |
| **SP-11** | **One semantic owner per truth** + **multiple role-appropriate derived projections may exist.** **SHARED INFORMATION ≠ SHARED AUTHORITY.** Derive/project rather than duplicate authority. | Continuity #543–#547 / R12 / CP03 |
| **SP-12** | **Fail-closed on authoritative / durable / execution consequence.** Ambiguïté avec conséquence autoritaire/durable/exécution ⇒ **aucun effet** jusqu’à résolution. L’ambiguïté conversationnelle ordinaire peut continuer naturellement. | V3-F02 / CP02 |
| **SP-13** | **One authoritative source per truth domain.** Git = repository / construction / doctrine / versioned evidence. Product Store = runtime Product / Project / LPS / HD / EC / …. Nora memory / UI / Journal / cognitive projection = **derived projection / context** — **jamais** SoT autoritaire. | R12 / CP02 / CP03 |
| **SP-14** | **Progressive disclosure.** | MD-C2-03 |
| **SP-15** | **Net Complexity Reduction.** Complexité structurelle / sémantique **>** LOC count. LOC retirées = indicateur secondaire seulement. | D-SIMP-01 / CP02 |
| **SP-16** | **Capacité utilisateur end-to-end avant micro-composants.** | Build Doctrine R8 · **Build Doctrine R18** |
| **SP-17** | **Mesurer proportionnellement avant de simplifier.** Pilot interaction · cognitive load · recovery · Nora burden · architectural duplication · cognitive quality/cost si pertinent. Pas de metrics factory. | R19 / CP02 |
| **SP-18** | **OpenAI-native-first.** Provider-capability revalidation (**Build Doctrine R22**) whenever a material claim depends on current provider capabilities — notably before/during cognitive design and Model × Reasoning evidence. Réutiliser trajectoire Nora existante. | **Build Doctrine R22** / D-SIMP-02 |
| **SP-19** | **No second engine + no parallel global orchestration.** | R6 / CP02 |
| **SP-20** | **Retraits tardifs, gouvernés, réversibles.** Aucun RETIRE immédiat. | R5, R11, R20 |
| **SP-21** | **Aucun claim au-delà de la preuve.** | R19, R21 |
| **SP-22** | **Minimum sufficient cognitive configuration by workload.** | D-SIMP-02 |
| **SP-23** | **CW0 déterministe = NO LLM.** | D-SIMP-02 |
| **SP-24** | **Cognitive escalation ≠ authority escalation.** | D-SIMP-02 |
| **SP-25** | **Model routing is server-owned / policy-owned.** | D-SIMP-02 |
| **SP-26** | **Generic orchestration by default ; domain specialization only where semantics require it.** Lorsque des mécanismes partagent de vrais invariants (qualification, context resolution, progression, validation, resolution, persistence), préférer un mécanisme d’orchestration partagé. Une spécialisation doit être justifiée par une différence sémantique réelle. **≠** collapse des objets métier en un objet générique. | Guided Review CP02 / §6.2 / §7.6 |

> DoctrinePackage/CKC behavior est absorbé dans **SP-08** renforcé. Pas de SP-27 requis.

---

## 9. HumanDecision Materiality Framing

> **Statut : FRAMING UNIQUEMENT.** Aucune politique finale sélectionnée.

### 9.1 Invariants (non négociables — DOCTRINE / CP02)

1. **Recommendation ≠ HumanDecision.**
2. **Aucune décision humaine inventée.**
3. **Une phrase conversationnelle brute / non qualifiée n’acquiert pas automatiquement un gate.** Une réponse conversationnelle **PEUT** matérialiser une décision ou satisfaire un gate applicable **uniquement si** : sujet résolu · currentness valide · intention suffisamment explicite · matérialité/politique compatible · autorité valide · provenance/auditabilité suffisante · contraintes Confirmation applicables satisfaites.
4. **Trajectoire proposée = Recommendation** jusqu’à HD requise.
5. **Confirmation** liée au contrat / effet *inspecté*.
6. **Autorité effective** = intersection ; jamais élargie par une couche seule.
7. **Pas de global L5** / auto-escalade.
8. **Auditability / reconstructibility** = invariant. DecisionBasis universel = **NOT DECIDED**.
9. **Seul le Pilote** émet une HD runtime ; Morris = construction / gates.
10. **HumanDecision ≠ UI ceremony.** Une HD durable **n’exige pas** intrinsèquement modal, bouton séparé, formulaire dédié, ni second geste explicite. Une décision exprimée en conversation peut être matérialisée durablement lorsque les garanties déterministes applicables sont satisfaites.
11. **Le Pilote exprime le sens / la décision. Studio matérialise le mécanisme gouverné approprié.** Le Pilote ne sélectionne jamais M-HD / M-DISP / M-LPS / M-CONF — ce sont des représentations internes gouvernées.

### 9.2 Mécanismes de capture (= outcomes / représentations, ≠ 5 UIs)

| Code | Mécanisme | Description |
| --- | --- | --- |
| **M-LPS** | LPS evolution | **A. Factual / derived LPS update** (Evidence vérifiée, Product result, transition déterministe) — **ne pas** attribuer faussement comme décision Pilote. **B. Pilot intent / scope / context update** — peut dériver d’un input conversationnel Pilote. |
| **M-DISP** | Recommendation disposition | Fort candidat C2 pour disposition non structurante |
| **M-HD** | Durable HumanDecision | Provenance/reconstructibilité proportionnée |
| **M-CONF** | Confirmation | Forme conversationnelle candidate ouverte |
| **M-OTHER** | Autre | Clarification / éphémère / à définir |

### 9.3 Catégories A–J — design / analysis / test cases

> **A–J = cas de conception / analyse / test.** Elles **ne doivent pas** devenir automatiquement une taxonomie runtime persistée, un `DecisionClassifier` enum, ni 10 moteurs spécialisés. Les **dimensions de matérialité** importent davantage que l’identité de catégorie.

| Cat. | Sens | Mécanismes plausibles | Statut |
| --- | --- | --- | --- |
| **A** | Clarification / échange | M-OTHER ; éventuellement M-LPS mineur | **C2** |
| **B** | Préférence mineure | M-OTHER ; M-LPS | **C2** |
| **C** | Acceptation / refus Work Recommendation non structurante | M-DISP ; M-HD ; M-CONF (si effet) | **C2** — central |
| **D** | Choix opérationnel dans trajectoire déjà décidée | M-DISP ; M-HD ; M-OTHER | **C2** |
| **E** | Modification scope / objectif | M-LPS ; M-HD | **C2** — matérialité très variable |
| **F** | Adoption / amendement ProjectTrajectory | M-HD ; M-DISP + M-HD | **C2** — floor fort |
| **G** | Arbitrage structurant | M-HD | **C2** — floor fort |
| **H** | Autorisation effet protégé | M-CONF (forme ouverte) ; M-HD seulement si HD structurante absente | Floor effet protégé ; Confirmation = OPEN / C2 |
| **I1** | **Structural lifecycle action** (FINALIZE / CANCEL / ABANDON / closure important) | M-HD / gate selon politique | **C2** — floor fort |
| **I2** | **Internal methodological requalification** (type de travail/cycle, applicabilité CKC, qualification méthode) | Si **aucun** changement structurel Project/authority/scope : peut être **Studio-derived**, sans cérémonie Pilote séparée | **C2** — central chat-first methodology absorption |
| **J** | **Décision structurante encore requise avant EC** | M-HD si nécessaire | **EC only after necessary decisions.** Si toutes les décisions nécessaires existent déjà, Studio peut préparer l’EC directement. **≠** HD supplémentaire *parce que* la préparation EC commence |

### 9.4 Dimensions de matérialité (précédence conceptuelle)

**Materiality / effect / risk / authority dimensions > rigid category taxonomy.**

Inputs candidats de raisonnement (≠ algorithme final) : subject + effect + scope + reversibility + authority impact + risk + currentness → mécanisme gouverné.

| Dimension | Question |
| --- | --- |
| **Réversibilité** | L’effet peut-il être annulé sans perte ? |
| **Portée** | Project, travail courant, étape, formulation ? |
| **Effet externe / protégé** | Git distant, secrets, REAL, externes ? |
| **Autorité** | Élargissement / délimitation d’autorité ? |
| **Dépendances aval** | Quels objets durables dépendent ? |
| **Coût d’erreur** | Conséquence d’une mauvaise interprétation ? |
| **Auditabilité** | Provenance minimale reconstructible ? |
| **Ambiguïté résiduelle** | Sujet unique, courant, non périmé ? |

### 9.5 Frontière Studio / Nora pour la matérialité

| Rôle | Peut | Ne peut pas |
| --- | --- | --- |
| **Nora** | Interpréter l’intention ; détecter ambiguïté sémantique ; expliquer implications probables ; signaler une matérialité *candidate* | S’auto-autoriser une capture |
| **Studio / policy** | Sujet courant autoritatif ; currentness ; mécanisme autorisé ; politique de matérialité ; autorité ; contraintes d’effet ; matérialisation finale | Laisser un jugement probabiliste non validé produire un effet autoritaire |

**Objectif C2 :** politique simple — **pas** une matrice 10 × 5. A–J restent scénarios de test. Des niveaux de matérialité simplifiés peuvent être explorés ; **aucun modèle de niveaux final en C1**.

### 9.6 Explicitement NON décidé

- mapping définitif catégorie → mécanisme ;
- obligation/forme DecisionBasis pour toutes les HD ;
- forme Confirmation par cas (conversationnelle incluse, ouverte) ;
- seuils numériques d’actes.

---

## 10. Conversational Decision Capture

### 10.1 Objectif

Permettre au Pilote de **décider en conversation** tout en garantissant qu’aucune phrase ambiguë ne produise un effet autoritaire/durable/exécution, et qu’aucune Recommendation ne soit promue implicitement.

### 10.2 Assent contextuel vs intention explicite

| Type | Exemples | Lecture |
| --- | --- | --- |
| **A. Context-dependent assent** | « oui », « go », « ok », « la 2 » | Exige une résolution contextuelle **plus forte** |
| **B. Explicit intent** | « oui, adoptons l’option B » ; « garde cette recommandation pour plus tard » ; « oui, exécute le contrat que tu viens de présenter » | Ambiguïté sémantique plus faible ; validation déterministe **toujours** requise |

**C2** doit évaluer : **intent explicitness + current context** — pas la seule longueur de phrase.

### 10.3 Conditions CD-01…CD-10 — dimensions de sûreté / conception

**≠** taxonomie runtime persistée inflexible par défaut. Regroupement conceptuel utile :

| Groupe | Conditions | Sens |
| --- | --- | --- |
| **A. Subject resolution** | CD-01…CD-04 | Sujet unique/courant, currentness, présentation, proximité *contextuelle* (≠ dernière phrase seule) |
| **B. Intent interpretation** | CD-05 + interprétation cognitive | Absence de conflit / réserve |
| **C. Materiality / effect compatibility** | CD-06 | Mécanisme compatible avec matérialité, effet, autorité, policy, sujet courant — **≠** « catégorie G ⇒ M-HD hardcodé » |
| **D. Safe materialization** | CD-07…CD-10 | Traçabilité, idempotence, pas d’élargissement, fail-closed |

| ID | Contrainte | Description |
| --- | --- | --- |
| **CD-01** | Sujet unique et courant | Exactement un sujet actif applicable |
| **CD-02** | Currentness | Sujet encore valide |
| **CD-03** | Présentation préalable | Sujet effectivement présenté |
| **CD-04** | Continuité contextuelle | Répond au sujet courant **résolu par Studio** — pas seulement adjacence textuelle |
| **CD-05** | Absence de conflit | Pas de désaccord/réserve/question dans le même message pour ce sujet |
| **CD-06** | Compatibilité matérialité / effet / policy | Mécanisme compatible avec matérialité, effet, autorité, policy, sujet courant |
| **CD-07** | Traçabilité | Lien phrase → sujet → disposition/décision auditable |
| **CD-08** | Idempotence | Pas de double disposition / ré-exécution |
| **CD-09** | Pas d’élargissement | Aucun scope additionnel inféré |
| **CD-10** | Fail-closed (effet) | Si condition **requise applicable** échoue ⇒ **aucun effet autoritaire / durable / exécution**. **≠** arrêter la conversation ordinaire |

### 10.4 Fallbacks / edge cases

| Situation | Comportement attendu (cible) |
| --- | --- |
| Plusieurs sujets actifs | Clarification brève |
| Sujet périmé | Re-présentation ; pas d’application |
| « oui mais… » | Conversation ; pas de capture autoritaire |
| Effet protégé | EC inspecté + Confirmation applicable ; « oui » générique / avant inspection / ambigu ≠ Confirmation ; « oui, exécute » lié reste option C2 |
| Aucune présentation préalable | Pas de capture |
| Reprise après interruption | Requalification ; pas de reprise d’un « oui » ancien |
| **Immediate correction / supersession** | « oui, prends la 2 » puis « attends, la 1 » — avant effet irréversible/protégé, la dernière intention explicite valide peut superséder selon politique future ; après effet → requalification / compensation gouvernée. **Aucune implémentation en C1** |
| **Multi-intent message** | « oui pour la trajectoire, mais ne lance pas l’exécution » — intentions indépendantes ; disposition positive sur un sujet **≠** autorisation d’un autre effet |
| **Current subject ≠ last message** | Parenthèse / clarification / side-question puis retour — sujet courant résolu par **état/contexte Studio**, pas adjacence textuelle seule. **Pas** de state machine complexe en C1 |

### 10.5 Modèle conceptuel candidat

```text
UNDERSTAND  →  RESOLVE  →  AUTHORIZE / MATERIALIZE
   Nora          Studio        Studio (policy / materiality / authority / durable state)
```

Simplification conceptuelle — **≠** architecture adoptée en C1. Fit candidat avec le spine d’orchestration générique. **Ne pas** créer par défaut un `ConversationalDecisionEngine` séparé.

### 10.6 Questions C2 (reformulées)

- Quelles propriétés de **matérialité / effet / autorité** autorisent une capture conversationnelle directe, et quels cas A–J **valident** cette politique ?
- Supersession ; messages multi-intent ; validité temporelle ; reprise inter-session ;
- relation sujet courant / LPS / trajectoire ;
- séparation décision vs effet ;
- matérialisation en langage naturel sans exposer le mécanisme interne ;
- forme minimale de présentation préalable prouvable ;
- Nora (interprétation) vs Studio (validation déterministe).

---

## 11. Pilot Interaction Budget

> **PIB = lightweight design heuristic.** PIB **n’est pas** : quota · SLA · KPI target · feature Product runtime · score à optimiser aveuglément. **Aucun seuil numérique en C1.**

### 11.1 Définition

Le PIB mesure l’**effort requis de l’utilisateur (Pilote)**, **pas** le nombre d’objets backend.

Exemple : une réponse conversationnelle → peut créer HD + provenance en interne → **PIB = une interaction Pilote**, pas plusieurs actes backend.

### 11.2 Trois dimensions

| Dimension | Contenu |
| --- | --- |
| **A. Interaction load** | Réponses explicites ; confirmations ; clarifications forcées ; changements de surface |
| **B. Cognitive load** | Jargon ; IDs internes ; concepts runtime SFIA ; mécaniques méthodologiques que le Pilote doit comprendre |
| **C. Recovery load** | Effort pour retrouver l’état, comprendre décisions antérieures / bloqueurs, identifier la prochaine action |

**Indicateur spécifique : Method / runtime administration burden** — sélection manuelle par le Pilote de cycle, CKC, profil, classification, resolver, IDs internes. **Cible :** proche de zéro sur le nominal, **sans** retirer les décisions humaines utiles.

**Clarifications :**

- distinguer clarification *nécessaire* vs *accidentelle* (perte de contexte / faiblesse système) ;
- surface d’inspection nécessaire ≠ défaut UX automatique.

### 11.3 Trois golden journeys candidats

| # | Journey | Séquence cible |
| --- | --- | --- |
| 1 | **Work Recommendation** | Nora recommande → Pilote répond → Studio matérialise |
| 2 | **Project Trajectory** | Proposition/discussion → adoption/amendement si besoin → état durable |
| 3 | **Governed Execution** | Travail décidé → EC → inspection/Confirmation si applicable → exécution → Result |

Utilisables en P2/P3/P6. **≠** workflows immuables obligatoires.

### 11.4 Classification des interactions

| Classe | Sens | Priorité |
| --- | --- | --- |
| **MATERIAL** | Jugement / information / décision Pilote réellement requis | Conserver |
| **PROTECTIVE** | Protège autorité / sécurité / irréversibilité / ambiguïté matérielle | Alléger forme, pas garantir |
| **ACCIDENTAL** | Existe faute d’architecture/UX (contexte perdu, doublon, internals exposés, navigation inutile) | **Retirer en premier** |

### 11.5 Limite Goodhart / claim

Le PIB **ne doit pas** devenir la seule métrique de simplification.

Pour tout slice **prétendant simplifier l’expérience Pilote**, comparer le journey pertinent au baseline PIB.

La simplification globale considère aussi : Net Complexity Reduction · Nora burden · duplication architecturale · maintenabilité · qualité/coût cognitifs · fiabilité.

**Ne pas créer :** PIBEngine · table SQL PIB · dashboard runtime PIB · score numérique permanent — sauf cycle futur distinctement justifié.

---

## 12. Nora Cognitive Boundary

### 12.1 Rôle de Nora

Nora **comprend, analyse, clarifie, challenge, recommande**, distingue les statuts épistémiques, prépare du **contenu sémantique** (trajectoire / contrat proposés), analyse l’Evidence. Nora **ne décide pas**, ne s’auto-élargit pas, n’acquiert pas d’autorité d’exécution.

| Type | Owner | Sens |
| --- | --- | --- |
| **Cognitive qualification** | Nora | Peut interpréter/proposer : type de travail probable, ambiguïté, statut sémantique, risque, recommandation |
| **Authoritative qualification** | Studio | Lorsqu’affecte : runtime state, applicabilité CKC, matérialité, autorité, policy, effet durable |

**« Préparer trajectoire / contrat » :** Nora prépare/propose le **contenu sémantique**. Studio résout refs, valide contraintes, applique policy, matérialise l’objet durable.

### 12.2 Frontière cible

| Responsabilité | Owner | Remarque |
| --- | --- | --- |
| Interprétation d’intention | **Nora** | = *candidate understanding*, ≠ vérité autoritaire |
| Admissibilité de capture | **Studio** déterministe | |
| Décision humaine | **Pilote** exprime ; **Studio** qualifie/matérialise | Éviter langage Pilot-facing « manipuler un objet HumanDecision » |
| **Context resolution** | **Studio** | Voir §12.2.1 |
| Progression | Owner déterministe Studio clair | Aujourd’hui : **Reconciler** dans Generic Execution ; P2/P4 peuvent évaluer la généralisation dans le spine — Reconciler **≠** composant global éternel adopté |
| Analyse post-Evidence | **Nora** | Studio fournit faits vérifiés / contexte Evidence résolu ; ne pas promouvoir silencieusement les claims exécuteur |
| Promotion doctrine / CKC | **Morris** | Hors runtime |

#### 12.2.1 Context resolution + compact cognitive projection

Studio doit résoudre le contexte autoritatif applicable (Project, current work, current subject, LPS, ProjectTrajectory, décisions pertinentes, DoctrinePackage, CKC, sources, Evidence, contraintes/gates, authority/policy), puis construire une :

**COMPACT / MINIMUM SUFFICIENT COGNITIVE PROJECTION** pour Nora.

Nora **ne doit pas** devoir ingérer : dépôt entier · historique LPS complet · transcript exhaustif · toute doctrine · tous CKC · toutes Evidence.

La projection reste un **contexte dérivé**, **≠ source of truth**.

**Principe :** *Minimum sufficient context* — analogue au minimum sufficient cognitive configuration.

**Lien Checkpoint 03 (§13 / §14.5) :** le contexte cognitif compact peut consommer (a) truths Product autoritatives, (b) **projections dérivées Cycle Journal / Memory**, (c) targeted source retrieval — sans que le Journal devienne autoritatif. Nora reçoit une **projection role-aware**, pas les internals Product bruts complets.

#### 12.2.2 Output contract

**Semantic output from Nora / deterministic binding by Studio.**

Nora produit principalement une sortie **sémantique**. Studio possède le binding déterministe lorsque possible : refs · identité durable · currentness · subject binding · membership · classifications techniques · calcul d’autorité · résolution de policy · idempotence · transitions d’état durables.

#### 12.2.3 Probabilistic understanding / deterministic effects

Nora/modèle peut interpréter le sens de façon **probabiliste**. Les effets autoritaires / durables / protégés **ne doivent pas** dépendre uniquement d’une interprétation probabiliste non validée. Studio valide les invariants déterministes applicables.

### 12.3 OpenAI Capability Fit Check (**Build Doctrine R22**)

Provider capabilities **MUST be revalidated whenever a material claim depends on them** (**Build Doctrine R22 — OpenAI-native-first**). Notable cases : P2 if functional cognitive behavior depends on provider capability · P3 only if UX assumptions depend on provider behavior · P4 for technical integration / routing architecture · **P6 for Model × Reasoning / cognitive quality evidence** · later phases if a material claim depends on current provider state. **≠** automatic fit check on every phase when no provider-dependent claim exists.

Le Fit Check s’applique aux **besoins cognitifs / claims dépendants du provider**. Il **ne justifie pas** d’externaliser des invariants déterministes Studio vers le modèle/provider.

OpenAI peut aider : compréhension d’intention · compréhension sémantique de références · résumé · raisonnement · challenge · search · source intelligence · sortie cognitive structurée.

Studio doit toujours garantir le cas échéant : currentness autoritative · identité durable · membership · permissions · idempotence · policy · autorité effective · effets durables.

**Principe :** *OpenAI-native-first ≠ OpenAI-owned Product model.*

> Ce C1 ne réalise pas le fit check et ne choisit aucun mapping production. Snapshot GPT-6 = EXTERNAL CURRENT INPUT (§12A.3).

### 12.4 Anti-claims cognitifs

- Nora ≠ autorité de décision ; recommandation ≠ HD.
- Mémoire / résumé Nora ≠ vérité projet.
- **Compact cognitive projection ≠ source of truth.**
- **Higher cognitive capability ≠ higher authority.**
- Compaction candidate ≠ adoptée (selon Roadmap).
- Cognitive Completion **NOT PROVEN**.
- Production model routing **NOT SELECTED**.
- Snapshot fournisseur GPT-6 = EXTERNAL CURRENT INPUT.

### 12.5 DoctrinePackage / CKC integration (lien §7.3 / SP-08)

```text
Studio → resolve Project/LPS/Trajectory/current work
      → resolve DoctrinePackage/CKC
      → resolve constraints/sources
      → build compact cognitive projection
Nora   → understand / analyze / challenge / recommend
Studio → deterministic binding / policy / materialization
Pilot  → arbitrate when materiality requires
```

Pas de second moteur de contexte. Pas d’administration CKC par le Pilote.

### 12.6 Guided Document Review — candidate workload / capability

> **Disposition Morris (Guided Review §§7–12).** Guided Document Review est un **workload / capacité Nora représentative candidate**.

**Intention utilisateur cible (exemple) :** « Analyse ce document section par section, explique ce qu’il dit, challenge-le, propose les adaptations, et on valide ensemble avant de continuer. »

**Comportement cible candidat :**

1. résoudre document + contexte Project courant ;
2. résoudre la section courante ;
3. résoudre DoctrinePackage / CKC / sources applicables ;
4. construire un contexte cognitif compact ;
5. Nora : expliquer fidèlement · challenger · détecter contradictions · identifier implications · proposer KEEP / ADAPT / REMOVE / ADD ;
6. le Pilote discute / valide ;
7. Studio préserve durablement disposition / progression ;
8. section suivante ;
9. checkpoint documentaire périodique ;
10. pas de réouverture arbitraire des décisions consommées.

**Vérité courante :** Nora possède déjà des capacités cognitives bornées pertinentes (raisonnement contextualisé, challenge/clarification, Evidence/sources, intelligence de sources externes, continuité de contexte). **MAIS : la parité avec la qualité de *cette* Guided Review = NOT PROVEN.**

Donc : Guided Document Review = **REPRESENTATIVE CANDIDATE WORKLOAD** pour conception fonctionnelle + évaluation futures — **≠** claim de capacité complétée.

**Workload cognitif :** revue documentaire gouvernée profonde = candidat probable **CW2** ou **CW3** selon complexité/matérialité. **Aucun mapping permanent.** Assignation modèle/reasoning = **EVAL REQUIRED.** Le Pilote ne sélectionne pas manuellement modèle/reasoning sur le nominal.

**Conséquences P2 / P6 :**

- **P2 :** concevoir Guided Document Review comme workflow chat-first représentatif.
- **P6 :** l’inclure comme scénario représentatif d’évaluation Model × Reasoning.

Dimensions de qualité candidates : fidélité source · continuité section-par-section · détection de contradictions · raisonnement architectural · challenge approprié · respect des décisions consommées · non-invention · grounding · recommandations utiles · mémoire des dispositions acceptées via état Studio · escalade correcte Pilote/Morris · distinction fact / inference / option / decision.

**≠** implémentation de benchmark en C1.

**Lien orchestration générique :** évaluer comme autre cas d’usage candidat du spine partagé :

```text
intent → qualify → resolve state/context/current item
→ build cognitive projection → Nora reasoning → Pilot disposition
→ durable state update → next item
```

**Ne pas** créer par défaut un `SectionBySectionDocumentReviewEngine`.

---
## 12A. Cognitive Reliability & Adaptive Model / Reasoning Strategy

> **Statut : TARGET / FRAMING.** D-SIMP-02 **ADOPTED** comme trajectoire d’axe. **≠** architecture technique. **≠** production routing. **≠** Cognitive Completion. **≠** second moteur Nora.

### 12A.1 Quatre axes non fusionnables

| Axe | Owner | Rôle | Interdit |
| --- | --- | --- | --- |
| **1. Deterministic Product Logic** | SFIA Studio (code / state / policy) | Currentness, membership, cardinalité de sujet, scope, authority, policies, idempotence, lifecycle, protected boundaries, fail-closed | Déléguer à un LLM |
| **2. Cognitive Work** | Nora | Comprendre, analyser, qualifier, challenger, recommander, clarifier | Acquérir une autorité |
| **3. Model / Reasoning Configuration** | Studio policy, **server-owned** | Choisir (candidat) modèle × effort *minimum suffisant* pour le workload | Mapping 1:1 Cycle/Profil → modèle ; auto-attribution par Nora |
| **4. Authority** | Pilote (runtime) / Morris (construction) | HD, consentement, Confirmation, gates | Un modèle plus puissant n’élève pas l’autorité |

**TARGET MODEL (≠ claim runtime actuel) :**

```text
STUDIO PORTE LA VÉRITÉ ET LES RÈGLES.
NORA PORTE L’INTELLIGENCE.
OPENAI FOURNIT LA PUISSANCE COGNITIVE.
LE PILOTE CONSERVE L’AUTORITÉ.

PILOTE     = authority / HumanDecision / consent
NORA       = cognition / understanding / analysis / challenge / recommendation
SFIA STUDIO = durable truth / policy / currentness / deterministic validation /
              materiality / model routing / execution governance
OPENAI     = cognitive primitives / models / reasoning / tools
CURSOR     = technical executor under ExecutionContract
```

### 12A.2 Absorption de la trajectoire Nora existante

Le repo contient déjà `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md` (**VALIDATED — ACTIVE ON MAIN**), qui pose déjà : NORA OPENAI-NATIVE-FIRST ; OpenAI Capability Fit Check ; Strategy Classes ; Model × Reasoning Evaluation ; minimum sufficient cognitive configuration by workload ; provider capabilities = current inputs, not permanent doctrine ; production model routing NOT SELECTED.

D-SIMP-02 :

- **absorbe** cette trajectoire comme actif **KEEP / HARVEST / ADAPT** ;
- la **recontextualise** dans la simplification chat-first (PIB, matérialité HD, Net Complexity Reduction) ;
- **ne la remplace pas** et **ne crée pas** une « Nora Cognitive Architecture » parallèle ;
- **ne redécide pas** l’historique MW2→MW6 ;
- **ne prétend pas** Cognitive Completion.

Noms conceptuels candidats pour P4 (Cognitive Workload Profiler, Cognitive Strategy Policy, Model/Reasoning Router, …) = **rôles**, **pas** obligation de créer 3 nouveaux services. Objectif Delivery : **centraliser / simplifier**, pas ajouter une cascade de routers.

### 12A.3 Provider snapshot — EXTERNAL CURRENT INPUT (2026-10-03)

> **PROVIDER CURRENT INPUT ≠ SFIA DOCTRINE ≠ PRODUCTION ROUTING DECISION ≠ PERMANENT MODEL CONTRACT.**
> Snapshot daté **2026-10-03**, revalidé par ChatGPT depuis la documentation officielle OpenAI.
> Capacités, prix, latences, modalités API et settings supportés = **inputs vivants à REVALIDER** avant P2 / P4 / P5 / P6.
> Ce cadrage **ne modifie aucune** source doctrine avec ce snapshot.
> **Ne pas introduire les prix comme contrat durable.**

**Provenance fournisseur (titre · domaine · canonical path) — revalidable :**

| Titre | Domaine | Canonical path |
| --- | --- | --- |
| OpenAI — Models overview | `developers.openai.com` | `/api/docs/models` |
| OpenAI — GPT-6 Astra Model | `developers.openai.com` | `/api/docs/models/gpt-6-astra` |
| OpenAI — GPT-6.1 Sol Model | `developers.openai.com` | `/api/docs/models/gpt-6.1-sol` |
| OpenAI — GPT-6 Luna Model | `developers.openai.com` | `/api/docs/models/gpt-6-luna` |
| OpenAI — Reasoning models | `developers.openai.com` | `/api/docs/guides/reasoning` |
| OpenAI — Using GPT-6 | `developers.openai.com` | `/api/docs/guides/latest-model` |

| Famille | Model id candidat | Positionnement fournisseur | Reasoning efforts supportés | Default fournisseur | Notes |
| --- | --- | --- | --- | --- | --- |
| **GPT-6 Astra** | `gpt-6-astra` | Most capable / demanding work | low / medium / high / xhigh / max | — | Tool calling selon capability fit courant |
| **GPT-6.1 Sol** | `gpt-6.1-sol` | Near-Astra / lower cost | low / medium / high / xhigh / max | **medium** | `none` / minimal **unsupported** côté fournisseur |
| **GPT-6 Luna** | `gpt-6-luna` | Efficient focused / high-volume | none / low / medium / high / xhigh / max | **medium** | — |

**API.** Responses API = voie nominale **candidate** pour reasoning + tool calling sur cette famille — subject to current fit check ; tool calling Astra/Sol selon capability fit courant ; **≠** migration décidée.

**Anti-claims snapshot.** GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra **ne sont pas** des mappings permanents. Reasoning **high** n’est **pas** une valeur globale. `none` / `xhigh` / `max` ne sont pas des politiques. Prix ≠ contrat durable.

### 12A.4 Classes de workload cognitif candidates CW0–CW3

> **CW0–CW3 ne sont PAS** : niveaux d’autorité, profils SFIA, classes de décision, action policies, cycle profiles, permissions. Ce sont uniquement des **COGNITIVE WORKLOAD CLASSES** candidates.

| Classe | Nature | Owner | LLM | Mapping fournisseur **candidat** | Reasoning **candidat** | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| **CW0 — DETERMINISTIC** | Garanties déterministes : currentness, optionRef membership, cardinalité de sujet actif, durable state, scope, authority, policies, idempotence, lifecycle invariants, protected boundaries, fail-closed | Studio code / state / policy | **NONE** | — | — | **INVARIANT DE TRAJECTOIRE** : ne jamais déléguer à Luna/Sol/Astra ce qui peut et doit être garanti déterministement |
| **CW1 — ROUTINE COGNITIVE** | Tâche cognitive focalisée, faible ambiguïté, faible profondeur, volume potentiel élevé (extraction, classification simple, résumé, reformulation, présentation, petite qualification, préparation non autoritaire) | Nora | Oui | GPT-6 Luna | low / medium | **CANDIDATE — EVAL REQUIRED** |
| **CW2 — STANDARD / SIGNIFICANT REASONING** | Raisonnement Nora nominal significatif (intention complexe, qualification cycle/profil/contexte, analyse Project, Recommendation, comparaison d’options, clarification non triviale, replanification courante, synthèse multi-source) | Nora | Oui | GPT-6.1 Sol | medium / high | **CANDIDATE — EVAL REQUIRED**. Souhait Morris « Sol high comme régime possible de travail courant robuste » = **CANDIDATE STARTING HYPOTHESIS TO EVALUATE**, **≠** production decision |
| **CW3 — DEEP / CRITICAL REASONING** | Workload exigeant, impact important, forte ambiguïté, multi-source complexe, review approfondie (architecture, critical review, code review complexe, contradiction difficile, investigation, decision support à forte exigence) | Nora | Oui | GPT-6 Astra | medium / high ; **xhigh uniquement si eval le justifie** | **CANDIDATE — EVAL REQUIRED** |

### 12A.5 Cognitive escalation (candidate)

Exemple conceptuel : CW2 / Sol → Nora ou Studio détecte contradiction élevée / complexité inattendue / confiance insuffisante / forte profondeur de review / besoin multi-source exigeant → Studio/policy **qualifie** l’escalade → CW3 / Astra → analyse approfondie → **retour dans la même Nora / même Product workflow**.

**Invariant :** **COGNITIVE ESCALATION ≠ AUTHORITY ESCALATION.**

Un modèle plus puissant :

- n’acquiert aucune HumanDecision ;
- n’acquiert aucune permission ;
- ne modifie aucun scope ;
- ne contourne aucune Confirmation ;
- ne change aucun AgentCapability.

Le choix/escalade modèle est **server-owned / policy-owned**. Nora peut produire un **SIGNAL** cognitif ; elle **ne s’auto-attribue pas** Astra ni une autorité supérieure.

### 12A.6 Cognitive Workload Profile — dimensions candidates

Hypothèses de conception pour que P2/P4 qualifient un workload. Objectif P2 : identifier le **MINIMUM** de dimensions réellement prédictives — **pas** une taxonomie énorme.

- cognitive complexity · ambiguity · contradiction level · source count / heterogeneity · expected tool use · code / architecture depth · epistemic sensitivity · criticality · expected quality bar · stability requirement · latency tolerance · cost sensitivity · recovery/retry burden.

### 12A.7 Principe de sélection

**MINIMUM SUFFICIENT COGNITIVE CONFIGURATION BY WORKLOAD.**

Le système ne sélectionne ni le plus gros modèle partout, ni l’effort maximal partout, ni le modèle le moins cher partout. La configuration doit satisfaire le quality bar du workload au coût/latence raisonnables. **Le mapping final se décide sur preuve (P6 → P8).**

### 12A.8 Model × Reasoning Evaluation — obligatoire avant promotion

**P6 doit** produire une matrice d’évaluation représentative **avant** qu’une production routing policy puisse être promue.

Matrice **candidate** (P6 peut l’adapter selon résultats fournisseur et P2/P4) :

- GPT-6 Luna × low / medium
- GPT-6.1 Sol × medium / high
- GPT-6 Astra × medium / high
- xhigh / max : uniquement si besoin démontré

Mesures candidates héritées de MW0 / trajectoire Nora : task success · grounding · completeness · fabricated claim rate · contradiction handling · instruction adherence · epistemic separation · authority / STOP compliance · clarification quality · genericity · narrative ↔ Evidence coherence · stability / variance · latency · token use · cost · tool-call burden · retries · cost per successful task.

Mesures **ajoutées** pour ce macro : Pilot Interaction Budget effect · clarification burden · model escalation rate · wrong-routing rate · unnecessary high-tier usage · quality gain per escalation.

**Aucune production routing policy ne peut être promue sans preuve représentative.**

---

## 13. Data / Durability Boundary

> **Guided Review Checkpoint 03 / D-SIMP-03.** Cadre conceptuel — **pas** d’architecture technique décidée. Aucun schéma, table, API ou format n’est choisi ici.

**Principe de vérité :** *durable* **OU** *reliably reconstructible* selon nature — aligné sur **ONE AUTHORITATIVE SOURCE PER TRUTH DOMAIN** (SP-13).

| Domaine | Source autoritative |
| --- | --- |
| **Git** | repository · construction · doctrine · versioned evidence / artifacts selon contrat |
| **Product Store** | runtime Product / Project state · LPS · decisions · trajectory · execution/runtime state · autres truths Product applicables |

Aucune concurrence entre SoT. Journal / Nora memory / UI / cognitive projection / Recovery / cache = **projections dérivées**, jamais autorités concurrentes.

### 13.1 Quatre classes de données (vue conceptuelle)

#### 1. AUTHORITATIVE DURABLE TRUTH

Exemples : Project · LPS · durable HumanDecision + provenance applicable · validated trajectory / current Product trajectory truth · ExecutionContract · Attempt · verified Evidence / ClaimEvaluation / Product Resolution · gates / accepted reservations selon domaine.

#### 2. DURABLE OR RELIABLY RECONSTRUCTIBLE CONTINUITY STATE

Exemples : active/decided ProjectTrajectory · active Recommendation · current authority boundary · current work · next action · information required for honest resume.

**Principe :** Studio must recover truth **without inventing it**.

#### 3. DERIVED / RECONSTRUCTIBLE PROJECTIONS *(ADD — CP03)*

Exemples : compact cognitive projection Nora · Pilot UI projection · Journal / Cycle Memory projection · Recovery summary · Continuity Projection · presentation summaries.

**Règles :**

- peuvent être recalculées ;
- peuvent éventuellement être cachées/persistées pour raison technique ;
- **ne deviennent jamais** source autoritative ;
- restent liées à leur source/provenance applicable ;
- doivent pouvoir être invalidées/reconstruites quand la truth change.

#### 4. EPHEMERAL COGNITIVE / PROCESS DATA

Exemples : formulation drafts · raw Nora internal reasoning · temporary prompts · non-audit-needed transients.

**Do not persist raw reasoning by default.**

#### Forbidden semantic promotion *(transversal — ≠ storage class)*

| Promotion interdite |
| --- |
| Recommendation → Decision without Pilot |
| Hypothesis → Fact without Evidence |
| Executor Claim → Verified fact without verification |
| Derived projection → source of truth |
| CKC cognitive dimension → Product fact automatically |

### 13.2 Principes de frontière

1. **One authoritative owner / source per truth domain.** Nora memory · Journal · UI · cognitive projection · Recovery projection · cache = **derived projections**, never competing authorities.
2. **Provenance proportionnelle à la matérialité.** Toute décision / mutation autoritative doit conserver une provenance **SUFFISANTE AU REGARD DE SA MATÉRIALITÉ** pour l’audit/reconstruction requis. Si provenance nécessaire absente → fail-closed lorsque l’état/décision ne peut plus être établi de manière fiable. **DecisionBasis universal = NOT DECIDED.**
3. **Simplification ≠ loss of necessary trace.**
4. **Process-local objects — object-by-object.** Do **NOT** assume all process-local objects must become durable. Promote/persist/reconstruct only if required for : continuity · authority · audit · recovery · currentness · exit proof.
5. **No exhaustive transcript required.** Continuity = authoritative/reconstructible truth → minimum sufficient context → Nora.
6. **Retention = C1 non-decision.** P4 concern : audit Evidence / review material / cognitive projections / cache / transcript retention **only if needed**.

### 13.3 Questions ouvertes C2 / P4

- Quelle provenance minimale selon : materiality · effect · authority · reversibility · reconstruction need — avec **A–J comme scénarios de test seulement** (≠ taxonomie runtime) ?
- Quand une projection cognitive/UI peut-elle être recalculée, cachée ou persistée sans devenir deuxième vérité ?
- Que signifie « reliably reconstructible » par type d’état important ?
- Quel minimum durable permet de reconstruire un contexte Nora fiable après nouvelle session/redémarrage ?
- Quelles projections doivent être invalidées sur mutation de truth ?

### 13.4 Verdict Section 13

**KEEP CORE + ADD DERIVED-PROJECTION LAYER + ALIGN DURABILITY WITH TRUTH DOMAINS + MINIMUM-SUFFICIENT CONTEXT.**

---

## 14. Current → Target Conceptual Loop

> **Guided Review Checkpoint 03 / D-SIMP-03.** Conceptuel uniquement. Ni composants, ni flux techniques, ni schémas décidés. **Target ≠ execution-centric.**

### 14.1 Boucle courante (résumé)

> Representative simplified current flow — **not** every actual route.

```text
Pilote
  → conversation avec Nora
  → Nora produit analyse / options / recommandation (références structurées)
  → Pilote clarifie ou désigne une option / un sujet (désambiguïsation fréquente)
  → HumanDecision / disposition (selon objet, parfois via gate/modale)
  → ExecutionContract natif → inspection → Confirmation si requise
  → Exécution Cursor (worktree) → Evidence / ReviewBundle / Result
  → analyse Nora → LPS / trajectoire / replanification
  → Pilote (navigation entre conversation, panneau, trajectoire, historique, résultat)
```

### 14.2 Boucle cible (TARGET) — chat-first Project / Cycle continuity

```text
Pilot ⇄ chat-first interaction

Studio
  → resolve Project / current state / current subject / current work
  → resolve applicable DoctrinePackage / CKC / constraints
  → build minimum-sufficient cognitive projection

Nora
  → UNDERSTAND
  → analyze / clarify / challenge / recommend

Studio
  → RESOLVE semantic outcome against authoritative current state
  → qualify materiality / effect / policy / currentness

Pilot
  → arbitrate ONLY when human judgment / authority is required

Studio
  → MATERIALIZE appropriate governed outcome, which MAY be:
       · no durable mutation
       · factual / derived LPS update
       · Recommendation disposition
       · HumanDecision
       · trajectory evolution
       · reservation / blocker update
       · deliverable expectation
       · Confirmation where applicable
       · ExecutionContract IF execution is required

Then
  → authoritative continuity state updated
  → role projections derived / refreshed
  → next useful action
  → conversation continues
```

#### Execution branch — OPTIONAL / TRANSVERSE

ExecutionContract **n’est pas** l’étape obligatoire après chaque décision. Branche uniquement lorsqu’un effet / artifact / travail technique doit réellement être exécuté.

```text
decided execution intent
  → EC → inspection → Confirmation if applicable
  → governed executor → Claim
  → deterministic verification
  → Evidence / Review / Product Resolution
  → execution Result
  → return to Project / Cycle loop
```

Invocation possible : **zero / one / multiple** times inside one Cycle.

#### CYCLE LIFECYCLE ≠ EXECUTION LIFECYCLE

| Invariant | Sens |
| --- | --- |
| **Cycle Lifecycle ≠ Execution Lifecycle** | Execution may contribute Evidence / artifact / exit proof. Execution does **NOT** own Cycle opening · method progression · finalization · ProjectTrajectory lifecycle. |
| **Execution Result ≠ Cycle Resolution** | A Cycle may complete **without** Execution if applicable exit criteria are satisfied without a technical effect. |

#### Deliverable emergence

Un livrable peut être : proposé par Nora · demandé par le Pilote · identifié depuis methodology/CKC applicable. Le Pilote reste autorité lorsque l’autorisation humaine est requise. **Aucun** workflow dédié « Define a deliverable with Nora » n’est prérequis fonctionnel.

**DELIVERABLE EXPECTED ≠ EXECUTION NOW.** Identification/planification peut différer l’exécution. Contrôle UI dédié existant = **REQUALIFY IN P3** — **≠ RETIRE in C1**.

#### Exit proof / validation

| Invariant | Sens |
| --- | --- |
| **ARTIFACT EXISTS ≠ EXIT PROOF SATISFIED** | Existence ≠ acceptance |
| **EXECUTION SUCCESS ≠ CYCLE COMPLETE** | Succès exécuteur ≠ clôture Cycle |

Pour un livrable requis : required → produced → reviewed/controlled → **VALIDATED** against applicable acceptance / exit criteria → exit proof satisfied.

Si findings bloquants / incohérence / erreurs demeurent : artifact peut exister · executor peut reporter SUCCESS · **Cycle remains OPEN** · correction / re-execution / re-review loop possible. Multiple EC / executions in same Cycle = valides. Cycle closable **only** when applicable exit criteria are satisfied.

#### Cycle transition (candidate)

Nora may recommend maturity / next work elsewhere → Studio resolves gates / exit criteria / blockers → Pilot arbitrates if structural HD required → Studio materializes lifecycle transition. **Pas** d’assumption de bouton FINALIZE comme chemin nominal — P3 requalifie l’affordance.

#### Guardrails transverses (invariants applicables, ≠ stepper obligatoire)

effective authority · fail-closed · policy · idempotence · Confirmation · Evidence requirements — **pas** chaque flux conversationnel n’expose chacune comme étape visible.

#### Product outcome vs Execution outcome

- **Generic Product outcome :** useful authoritative state + clear next action.
- **Execution outcome :** SUCCESS / STOP / FAIL + verified Evidence/Result.
- Execution Result Surface **≠** universal product outcome.

### 14.3 Écarts conceptuels à réduire

| Écart | Direction |
| --- | --- |
| Binding technique / currentness / identity portés par Nora | → deterministic parts → Studio ; Nora garde compréhension |
| Décisions peu matérielles via gates | → capture proportionnée (C2) |
| « One information = one place » | → **ONE SEMANTIC OWNER PER TRUTH** + **MULTIPLE ROLE-APPROPRIATE DERIVED PROJECTIONS MAY EXIST** |
| Reprise coûteuse | → authoritative/reconstructible truth → compact recovery projection |
| Vocabulaire interne exposé | → vocabulaire Pilote ; IDs en secondaire |
| **A. Methodology administration gap** | Studio résout work / method / DoctrinePackage / CKC |
| **B. Object-administration gap** | Pilot expresses meaning ; Studio materializes governed objects |
| **C. Specialized-orchestration gap** | generic orchestration when semantics genuinely align |

### 14.4 Ce qui ne change pas

**Target chain :** conversation → understanding → governed materialization → continuity. Decision and Execution occur **only when needed**.

Preserve : Recommendation ≠ HumanDecision · EC precedes governed execution effects when execution required · Confirmation conditional / proportional · Authority intersection · Evidence-bounded claims · Fail-closed where required · One authoritative source per truth domain · **runtime v3 NON ADOPTED**.

### 14.5 Chat-first Workspace Model

| ID | Principe |
| --- | --- |
| **CF-W01** | **CHAT-FIRST ≠ CHAT-ONLY.** |
| **CF-W02** | Conversation / Nora = **PRIMARY INTERACTION SURFACE**. |
| **CF-W03** | Cycle Journal / Memory = **PRIMARY ORIENTATION / CONTINUITY SURFACE** candidate — « control tower » for current work — **≠** second command cockpit. |
| **CF-W04** | Journal may expose derived projections : Sujets · points stabilisés · points ouverts · Réserves · Work Recommendations · HumanDecisions · relevant progression/currentness. |
| **CF-W05** | Journal / Memory is **NOT** authoritative truth — derives from / links to applicable durable Product truths and conversational sources. |
| **CF-W06** | Same memory/context capability serves **two** consumers : **Pilot** (orientation / comprehension / recovery / inspection) · **Nora/Studio** (bounded contextual reconstruction / minimum-sufficient cognitive context / targeted source retrieval). Do not duplicate truth. |
| **CF-W07** | Nominal Journal actions tend toward : focus · inspect · resume · retrieve source · discuss/treat with Nora. Avoid second business-command cockpit. |
| **CF-W08** | Existing source turns remain targetable/retrievable when needed — without injecting full transcript by default. |
| **CF-W09** | P3 must audit **ALL** Workspace interactions, not only known current pain points. |

**Current Journal asset requalification (Git) :** capacités **PROJECT CONVERSATIONAL CONTINUITY & CYCLE JOURNAL** (PR #516) et **PILOTABILITY & JOURNAL SEMANTIC INTEGRITY** (PR #517) = **EXISTING ASSETS TO KEEP / HARVEST / ADAPT**. **≠** already satisfy global target. **≠** weak / disposable. Core capability = **KEEP / HARVEST / ADAPT**. Specific redundant controls/presentation = **RETIRE LATER candidate** only after P2/P3 proof. **No immediate RETIRE.**

---

## 15. Trajectory P1 → P8

> **Trajectoire adaptative par capacités**, pas waterfall. **Chaque gate est distinct.** **Seul P1 est en cours.** **P2→P8 = NOT AUTHORIZED.** **D-SIMP-01…04 = documentary / trajectory decisions only.**

| Phase | Intitulé | Contenu visé | Gate d’entrée | Gate de sortie | Statut |
| --- | --- | --- | --- | --- | --- |
| **P1** | **Cadrage (ce document, C1)** | Checkpoint 01–03 CONSOLIDATED · Guided Review §§16–22 COMPLETE · Final Consolidation COMPLETE · Final Critical Review #1 historical NOT READY · Correction Pass 01 COMPLETE · Final Closure Review **PASS** · **D-SIMP-05 CONSUMED — C1 VALIDATED BY MORRIS** · **NOT YET INTEGRATED ON MAIN** (Git integration AUTHORIZED / IN PROGRESS) · CW0–CW3 candidates · production routing NOT SELECTED | D-SIMP-01…**05** (consommées) | Git integration complete → distinct **Morris GO P2** | **VALIDATED BY MORRIS — GIT INTEGRATION IN PROGRESS** |
| **P2** | **Conception fonctionnelle / Functional Operating Model** | **HOW STUDIO FUNCTIONS AS A PRODUCT** before UX/tech. Couvre : Project lifecycle (create/resume/interrupt/requalify/terminate) · Cycle lifecycle (proposed work → activation → progression → exit candidate → blockers → close/transition) · work qualification · conversation→Product outcomes · DoctrinePackage/CKC chat-first · materiality/capture · deliverable lifecycle (suggested→…→validated) · Execution branch (optional/transverse ; 0/1/N) · review/correction/validation · exit criteria / exit-proof · Cycle transitions · ProjectTrajectory/replanning · Recovery/resume · Functional Routes · happy + alt/error/recovery paths · Cycle Memory/Journal semantics · Guided Document Review representative flow · generic orchestration invariants vs domain semantics. **NON-GOALS :** no Figma · no UI layout · no React routes · no DB/API/service architecture · no new engine. **OpenAI Capability Fit Check** (**Build Doctrine R22**) whenever a material claim depends on current provider capabilities. | P1 validé + **GO distinct** C2 | Validation Morris politique/operating model | **NOT AUTHORIZED** |
| **P3** | **Chat-first Workspace & Interaction Architecture** | **≠** « make Chat visually dominant ». = **END-TO-END REDESIGN OF THE PILOT WORKSPACE** derived from P2. Audit/requalify **ALL** existing controls/surfaces (buttons, CTAs, gates, modals, panels, cards, nav, lifecycle, « Define deliverable with Nora », finalize/close, state, Recommendations, Decisions, Reservations, Trajectory, prepare/start execution, EC inspect, Confirmation, progress, Evidence, Result, Recovery, History, Journal/Memory, …). Pour chaque : real Pilot job · still needed? · move to conversation? · explicit control justified? · primary/secondary · owner surface · KEEP/ADAPT/HARVEST/REPLACE/FREEZE/RETIRE LATER. Model : **A** Chat/Nora = ACT · **B** Journal/Memory = ORIENT/REMEMBER/RESUME · **C** LPS/Trajectory/Current State = UNDERSTAND · **D** EC = INSPECT intended effect · **E** Evidence/Result/Artifact = INSPECT outcome/proof · **F** History/Recovery = AUDIT/RESUME · **G** Confirmation = explicit only when justified. **PRIMARY INTERACTION UNIQUE + SPECIALIZED SUPPORTING SURFACES.** « Define deliverable… » = requalification candidate ≠ immediate RETIRE. Inclut IA, states, progressive disclosure, responsive, full Figma/runtime visual contract before code. | P2 validé + GO distinct | Validation UX / interaction | **NOT AUTHORIZED** |
| **P4** | **Technical Architecture Delta / Pilot–Nora–Studio Semantic Architecture** | **Core concern :** Pilot · Nora · Studio operate on the **SAME GOVERNED SEMANTIC WORLD** with different responsibilities/representations. **SHARED INFORMATION ≠ SHARED AUTHORITY.** Roles : Pilot (intent/judgment/HD/consent) · Nora (probabilistic understanding/analysis/challenge/recommendation) · Studio (authoritative state/currentness/provenance/binding/method/materiality/policy/authority/materialization/projections) · Cursor = technical executor under EC. **Do NOT create SharedKnowledgeStore by default** — audit gaps on existing truth owners first. Role-aware projections : AUTHORITATIVE TRUTH → Pilot / Nora / Studio views. **Mandatory work products :** (A) Pilot–Nora–Studio Semantic Connectivity Audit · (B) Information Ownership/Authority Matrix · (C) Role Projection Contracts · (D) CURRENT→TARGET integration map (KEEP/ADAPT/HARVEST/COMPLETE/REPLACE/FREEZE/RETIRE LATER). Harvest CP4/GE patterns (server-owned facts → binding → HD preserved → deterministic qualification → verified facts → Nora grounding → Pilot projection) **≠** universalize Execution objects. Canonical Orchestration Spine = **CANDIDATE only**. Invariants : one authoritative owner · same truth / role projections · no reconstructing another role’s known state from incidental UI/text when Studio owns truth · probabilistic understanding / deterministic effects · Execution Result ≠ Cycle Resolution. | P2/P3 validés + GO distinct + fit check courant | Validation architecture delta | **NOT AUTHORIZED** |
| **P5** | **Delivery de simplification** | Incremental · no big bang · reuse existing assets · generic convergence only after P2/P4 fit proven · **Net Complexity Reduction** exit criterion | Conception + architecture validées + **GO Delivery distinct** | Preuve déterministe + validation Morris | **NOT AUTHORIZED** |
| **P6** | **Global Integrated Product QA** | Validate the **WHOLE** integrated Product target from P2/P3/P4/P5 — **≠** list of isolated tests only. Coverage as applicable : Project/Cycle lifecycle · chat-first · Journal/Memory · DoctrinePackage/CKC · materiality/Recommendation/Decision/Confirmation · Trajectory · Deliverables · Execution branch · Evidence/Review/Result · correction/re-execution/re-review · Exit proofs · Recovery · UX contracts · Role projections · Semantic connectivity / no second truths · Governance/fail-closed · Generic orchestration integrity · Cognitive Reliability · Model × Reasoning · Cost/latency/tools · Net Complexity Reduction. **Required scenarios (min) :** (1) Cycle completes with NO Execution · (2) optional artifact/execution not required for exit · (3) required deliverable produced+reviewed+validated → exit proof · (4) Execution SUCCESS + artifact BUT review blockers → exit NOT satisfied · Cycle OPEN · (5) correction → subsequent EC → re-review → validation · (6) interrupted/recovered conversation · (7) Recommendation/Decision/currentness continuity · (8) Journal projection coherence · (9) Guided Document Review as **ONE** representative cognitive scenario. **GDR ≠ full P6 scope.** | P5 + GO distinct | Validation QA | **NOT AUTHORIZED** |
| **P7** | **Fresh Project End-to-End Product Replay** | **≠ HabitFlow by default.** Create a **NEW Project from zero** — no pre-existing Product state · no project-specific fixture used during construction. **Fresh Project ≠ greenfield rebuild of Studio** (construction remains NON-GREENFIELD). **Domain NOT SELECTED now.** Criteria later : realistic · bounded · rich · multiple work/cycle types · ≥1 real deliverable/execution · not permanent fixture. Replay begins **before** first Cycle : no Project → intent → creation → qualification → trajectory/work → first Cycle. Traverse naturally (not forced) : conversational framing · Nora challenge · Journal · Reservation · Cycle without execution · transition · Recommendation · HD if needed · deliverable emergence · Execution branch · artifact · review finding · correction · validation · exit proof · next Cycle · interrupt/resume · subject switch · trajectory change if warranted. **≠ happy-path only.** Evaluate as real Pilot (natural Nora work? method admin burden? Journal useful? Decisions coherent? honest resume? execution only when useful? Cycle close clarity? correction loops? supporting surfaces vs parallel cockpit? cognition quality/cost? authority preserved?). REAL = **DISTINCT Morris GO**. | P6 + GO distinct | Observation / capitalisation | **NOT AUTHORIZED** · REAL = **GO Morris distinct** · Project **NOT SELECTED** |
| **P8** | **Requalification** | Requalifies based on **P6 + P7 evidence**. Morris may decide : Cognitive Routing Policy v1 · mappings · maintien/adaptation · RETIRE LATER · preuve REAL suivante. **No automatic adoption.** | P7 + preuve | Décision Morris | **NOT AUTHORIZED** |

**Règles de trajectoire :**

- L’ordre et le découpage de P2–P8 sont **indicatifs** et peuvent être **réarrangés** sur preuve (Build Doctrine R5 · **Build Doctrine R17**).
- Un *slicing* de Delivery n’est **pas adopté**.
- Toute phase dont un claim matériel dépend des capacités provider courantes est conditionnée à la **revalidation OpenAI Capability Fit Check** (**Build Doctrine R22** · §12.3) — notamment P2/P4/P6, et P3 si UX dépend du provider ; **≠** fit check automatique sans claim provider-dépendant.
- **Aval NOT AUTHORIZED** : aucune activité de P2→P8 sans validation de P1 **et** GO distinct Morris pour la phase.

---

## 16. Risks

> **Guided Review §§16–22 / D-SIMP-04.** KEEP existing useful core · UPDATE stale risks · ADD systemic risks of the chat-first operating model. Related risks MERGED where useful. **≠** exhaustive catalogue.

| ID | Risque | Probabilité / Impact (indicatif) | Mitigation |
| --- | --- | --- | --- |
| **R-01** | **Promotion implicite** Recommendation → HumanDecision | Moyenne / **Critique** | Capture only when **intent + current subject + currentness + materiality + effect + authority** satisfy policy (§9–§10) — **≠** category-only logic ; fail-closed on authoritative effect ; adversarial tests before code |
| **R-02** | **Perte de gouvernance** par sur-simplification | Moyenne / Critique | Floors doctrinaux (§9.1) ; effets protégés non abaissables sous autorité / Confirmation / policy applicables — **Morris** seulement si gate construction/gouvernance Morris ; **Pilote** = autorité HumanDecision runtime ; SP-01 / SP-10 |
| **R-03** | **Goodhart du PIB** : réduire les actes ⇒ décisions implicites | Moyenne / Haute | PIB = heuristic only ; lire avec matérialité / Net Complexity Reduction ; fail-closed |
| **R-04** | **Dérive greenfield / architecture parallèle** | Faible-Moyenne / Haute | NG-01 · SP-02 · SP-19 ; backbone KEEP/ADAPT |
| **R-05** | **Sur-ingénierie cognitive + CONTEXT OVERFEEDING** : mécanisme Nora interne alors qu’OpenAI couvre ; dump LPS+Journal+Trajectory+Doctrine+CKC+Evidence+History+Decisions+transcript | Moyenne / Haute | Fit check (**Build Doctrine R22 — OpenAI-native-first**) · **minimum-sufficient cognitive projection** · targeted retrieval · workload-aware cognition · SP-22 |
| **R-06** | **Loss of continuity / auditability** : état autoritatif ou de continuité non reconstructible ; projections non liées à provenance/currentness | Moyenne / Haute | §13 truth domains · provenance proportionnelle · fail-closed · reconstruction tests (P6) |
| **R-07** | **Ambiguïté conversationnelle** multilingue / implicite | Moyenne / Moyenne | Clarification brève ; tests bilingues en P2/P6 |
| **R-08** | **Régression de continuité Product** across Project / Cycle / Journal / Recommendation / Decision / Trajectory / Execution / Evidence / Recovery | Moyenne / Haute | Assets #543–#547 · Journal / semantic continuity · **P6 Global Integrated Product QA** · **P7 Fresh Project Replay** |
| **R-09** | **Retrait prématuré** d’un actif | Faible / Haute | Aucun RETIRE immédiat ; owner + preuve + gate distinct |
| **R-10** | **Confusion de statut** (trajectoire ≠ politique ≠ phase autorisée ≠ C1 validé) | Moyenne / Moyenne | Anti-claims §21 · verdict §22 · Roadmap tip |
| **R-11** | **Dérive de périmètre** (exécution, REAL, autres macros) | Moyenne / Moyenne | Non-goals · gates distincts · **Build Doctrine R17** / **Build Doctrine R18** |
| **R-12** | **Surcharge de revue** (ChatGPT / Morris) | Moyenne / Moyenne | Document autonome · questions routées par phase · slices par capacité |
| **R-13** | **Fausse simplicité** : complexité déplacée derrière Nora/Studio sans Net Complexity Reduction | Moyenne / Moyenne | PIB + maintenance + SP-15 ; P6/P7 observation |
| **R-14** | **Snapshot fournisseur traité comme permanent** | Moyenne / Moyenne | EXTERNAL CURRENT INPUT ; revalidation whenever claim depends on provider capability (**Build Doctrine R22**) |
| **R-15** | **Cycle / Execution / exit-proof coupling** : Cursor SUCCESS→Cycle COMPLETE ; no EC→Cycle cannot close ; artifact exists→exit proof | Moyenne / **Critique** | Cycle Lifecycle ≠ Execution Lifecycle · Execution Result ≠ Cycle Resolution · Artifact ≠ Exit proof · SUCCESS ≠ Cycle COMPLETE · P6 mandatory scenarios |
| **R-16** | **Routing cognitif transformé en autorité** | Moyenne / **Critique** | SP-24 · escalade ≠ authority · CW0 NO LLM |
| **R-17** | **Second moteur Nora / architecture parallèle** | Faible-Moyenne / Haute | KEEP/HARVEST/ADAPT `08-…` · SP-19 · NG-10 |
| **R-18** | **Mapping fournisseur promu sans preuve** | Moyenne / Haute | P6 Model × Reasoning · P8 Morris · snapshot ≠ permanent |
| **R-19** | **Churn / oscillation de routing** | Moyenne / Moyenne | Policy server-owned · anti-oscillation / anti-flapping behavior designed/evaluated downstream · **hysteresis = CANDIDATE mechanism only** (≠ selected) · **P2** = required functional behavior · **P4** qualifies technical mechanism if needed · **P6** evaluates · §17.4 |
| **R-20** | **Internals fournisseur exposés Pilot-facing** | Moyenne / Moyenne | P3 : modèle/effort non exposés sauf valeur UX démontrée |
| **R-21** | **Coût transformé en autorité** (PIB vs routing) | Moyenne / Haute | Qualité bar d’abord · coût = contrainte ≠ permission |
| **R-22** | **Journal second-truth / second-cockpit** : convenience devient autorité ou duplique commandes métier | Moyenne / Haute | Derived projection only · focus/inspect/resume/treat-with-Nora · P3 audit · P6 coherence |
| **R-23** | **Pilot–Nora–Studio semantic discontinuity** (incl. stale derived projections) : Pilot voit X, Nora raisonne sur Y périmé, Studio possède Z | Moyenne / **Critique** | Semantic Connectivity Audit · ownership/currentness/provenance · projection invalidation/rebuild · P6 cross-role tests |
| **R-24** | **Naive SharedKnowledgeStore / second truth** | Moyenne / Haute | Existing owners first · projection contracts · new persistence only on demonstrated gap + Morris gate |
| **R-25** | **Generic orchestration over-generalization** : mécaniques partagées effacent sens métier | Moyenne / Haute | SP-26 · generalize mechanics not semantics · P2 before P4 |
| **R-26** | **P2 over-specified rigid workflow** : Operating Model = énorme state machine anti chat-first | Moyenne / Haute | Observable functional behavior · minimum semantic states · CKC ≠ rigid workflow · no technical state machine in P2 |
| **R-27** | **P3 cosmetic chat-first** : grand chat, même vieux workflow dessous | Moyenne / Haute | P3 derives from P2 · requalify every control/job |
| **R-28** | **P6 component-green / product-broken** | Moyenne / **Critique** | Global Integrated Product QA · cross-capability scenarios · E2E > components |
| **R-29** | **P7 artificial / contaminated replay** : fixture/history reuse or force every feature | Moyenne / Haute | Fresh Project selected later · realistic+bounded+rich · not happy-path only · natural feature emergence · **≠ HabitFlow final target** |

### 16.1 Verdict Section 16

**KEEP EXISTING CORE + UPDATE STALE RISKS + ADD SYSTEMIC RISKS INTRODUCED BY CHAT-FIRST OPERATING MODEL.**

---

## 17. Open Questions for P2 / Downstream Design

> **Aucune question ici n’est décidée par C1.** P2 peut QUALIFIER / ROUTER une question sans résoudre les concerns P3/P4/P6/P7. **A–J = design / test scenarios ONLY** — **≠** runtime taxonomy. Pas de total artificiel.

### 17.1 Functional Operating Model — P2

- Project lifecycle : creation / resume / interruption / requalification / termination/abandonment where applicable ?
- Cycle lifecycle : opening / activation / progression / blockers / exit candidate / close / transition ?
- What makes a Cycle closable ?
- Can a Cycle close without Execution ? Under which conditions ?
- When does the Product Loop invoke the Execution branch ?
- What is the minimum Functional Route set without creating a rigid workflow ?
- Deliverable distinctions : suggested / expected / execution intent / produced / under review / changes required / corrected / validated / exit proof satisfied ?
- Who/what establishes artifact validation against acceptance/exit criteria ?
- How many executions may occur in one Cycle and how is continuity maintained ?
- Cycle transition : Nora recommendation vs Studio deterministic facts vs Pilot decision ?
- Recovery / resume behavior ?

### 17.2 Materiality / Decision / Confirmation — P2

**Core :** Which combination of materiality · effect · scope · reversibility · authority · risk · currentness · intent explicitness determines the governed materialization mechanism ?

- When is Recommendation disposition enough ?
- When is HumanDecision required ?
- When is LPS update factual/derived vs Pilot intent ?
- DecisionBasis universality vs applicable current paths ?
- Confirmation levels/forms ; conversational linked consent ; prior presentation ?
- Multi-intent ; correction / supersession ; stale/current subject ?
- ProjectTrajectory adoption/amendment ?
- Methodological requalification vs structural trajectory amendment ?
- Cycle closure : always HD ? or HD only when structural human judgment remains ? Distinguish exit-eligible vs closed.

### 17.3 Data / Continuity / Journal — P2 / P4

- Durable vs reliably reconstructible vs derived vs ephemeral ?
- Minimum durable context for honest Nora recovery ?
- Invalidation/rebuild of derived projections ?
- What « reliably reconstructible » means by state type ?
- Journal semantics : Subject ? stabilized/open/superseded/closed ? Subject vs Reservation vs Recommendation vs Decision ? Cycle vs Project scope ? What survives transition ? How Recommendation becomes inactive after disposition/decision ? Source linkage ? Currentness ?
- How targeted source retrieval interacts with Journal projection ?

### 17.4 Cognitive Reliability / OpenAI — P2 / P4 / P6

- Which CW classes are actually useful ? CW0–CW3 granularity ?
- CW0 deterministic boundary ?
- Cognitive escalation signals ; wrong-routing / oscillation ; fallback ?
- Minimum sufficient model × reasoning ; quality / cost / latency / retries ; promotion evidence ?
- **Fit-check :** Which current OpenAI primitives satisfy identified cognitive needs, and what demonstrated gaps justify any additional Studio mechanism ?
- Provider names/configurations remain **candidates only**.

### 17.5 UX / Interaction — routed to P3

- For all current buttons/controls/surfaces : KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER ?
- Which nominal interactions move to conversation ?
- Which explicit interactions remain protective/necessary ?
- How are Chat · Journal · state · Trajectory · EC · Confirmation · Evidence · Result · History · Recovery represented without duplicate workflow ?
- Future role of « Define deliverable with Nora » ? Finalize / close affordance ?
- Product outcome vs Execution Result representation ?
- **Do NOT decide layout/Figma here.**

### 17.6 Semantic / Technical Architecture — routed to P4

- Producer / authority / source / mutator / consumers per truth ?
- Pilot / Nora / Studio projection contracts ?
- Semantic connectivity gaps ; stale projection invalidation ?
- Can current owners satisfy the target without new persistence ? If not, what demonstrated gap ?
- Which common mechanics genuinely fit a Canonical Orchestration Spine candidate ?
- Where must domain semantics remain specialized ?
- Which historical GE/CP4 seams are reusable vs local/transitional ?
- **No architecture selection in §17. No SharedKnowledgeStore assumption.**

### 17.7 Global QA — routed to P6

What Global Integrated Product QA plan proves : P2 operating model + P3 UX contracts + P4 semantic architecture + P5 implementation ?

Required scenario families : no execution · optional execution · required validated deliverable · SUCCESS + invalid artifact · correction/re-execution · recovery · Journal coherence · Recommendation/Decision currentness · role projections · Guided Document Review · cognitive Model×Reasoning · governance/fail-closed.

### 17.8 Fresh Project Replay — routed to P7

- Project selection criteria ?
- How avoid fixture contamination ?
- How avoid artificial feature forcing ?
- What natural situations are sufficient to evaluate the Product ?
- What observations determine replay usefulness ?
- **Project domain remains NOT SELECTED.**

### 17.9 Phase entry requalification *(not a design question)*

At every phase entry resolve from current Git : Roadmap · reusable assets · GE current state · Journal/current continuity · provider capabilities · existing debt/reserves. **Current Git status ≠ persistent Open Question.**

### 17.10 Verdict Section 17

**RESTRUCTURE OPEN QUESTIONS BY P2 / DOWNSTREAM WORKSTREAMS + REMOVE CATEGORY-FIRST FRAMING + ADD GLOBAL OPERATING / MEMORY / SEMANTIC / QA / FRESH-REPLAY QUESTIONS.**

---

## 18. C1 Exit Criteria

> **PASS — C1 VALIDATED BY MORRIS** = documentary / Product framing criterion satisfied and validated under **D-SIMP-05**. It does **NOT** prove runtime behavior, implementation, P2 design, P6/P7, REAL, or adoption.

| ID | Critère (mission C1) | Où traité | Statut |
| --- | --- | --- | --- |
| **C1-01** | Problème et valeur de simplification clairement bornés | §3 ; §4 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-02** | Chantier explicitement **NON-greenfield** | §5 NG-01 ; §6.1 ; SP-02 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-03** | Actifs principaux classifiés (KEEP/ADAPT/…/RETIRE LATER) ; aucun RETIRE immédiat | §7 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-04** | Matérialité HumanDecision centrale **sans** politique finale | §9 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-05** | Comportement conversationnel « oui / go » cadré (ambiguity / fail-closed) | §10 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-06** | Pilot Interaction Budget cadré (heuristic) | §11 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-07** | Frontière Nora cognition / Studio déterministe : authoritative context resolution · minimum-sufficient cognitive projection · provenance/currentness · **projection ≠ truth** (+ OpenAI fit check pour phases cognitives) | §12 ; §13 ; §14.5 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-08** | Cible **Net Complexity Reduction** explicite | SP-15 ; §11 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-09** | Trajectoire P1→P8 distingue clairement : **P2 Functional Operating Model** · **P3 Workspace/Interaction Architecture** · **P4 Technical/Semantic Architecture** · **P6 Global QA** · **P7 Fresh Project Replay** ; aval NOT AUTHORIZED | §15 ; §19 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-10** | Couverture risques alignée §16 (dont Cycle/Execution/exit-proof, Journal, semantic discontinuity, SharedStore, orchestration, P2/P3/P6/P7) | §16 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-11** | Next Product capability identifiable : **P2 — Functional Operating Model** after all C1 gates + distinct GO | §17 ; §19 ; §22 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-12** | Aucune architecture technique / politique runtime présentée comme décidée — inclut explicitement : no SharedKnowledgeStore selected · no Canonical Orchestration Spine adopted · no Pilot–Nora–Studio implementation selected · no Cycle/Execution technical state machine selected | §9.5 ; §14 ; §15 P4 ; §21 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-13** | Cognitive Reliability intégrée comme axe du macro | §12A ; D-SIMP-02 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-14** | Frontière deterministic Studio / cognitive Nora explicite | §12 ; §12A.1 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-15** | CW0–CW3 = classes candidates ; pas de mapping production | §12A.4 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-16** | Snapshot fournisseur GPT-6 daté = EXTERNAL CURRENT INPUT | §12A.3 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-17** | Model × Reasoning evaluation obligatoire avant promotion routing policy | §12A.8 ; P6 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-18** | Cognitive escalation ≠ authority escalation | §12A.5 ; SP-24 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-19** | Trajectoire Nora OpenAI-native-first réutilisée, pas dupliquée | §7 ; §12A.2 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-20** | P1→P8 intègre explicitement l’axe cognition | §15 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-21** | Cycle Lifecycle explicitement séparé d’Execution Lifecycle ; Execution optional/transverse | §14 ; §15 ; R-15 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-22** | Artifact existence / Execution SUCCESS / artifact validation / exit-proof / Cycle completion = distincts | §14 ; R-15 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-23** | Chat-first ≠ Chat-only ; primary interaction + specialized supporting surfaces | §8 SP-05 ; §14.5 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-24** | Cycle Journal / Memory = KEEP/HARVEST/ADAPT continuity asset ; useful Pilot + Nora/Studio ; derived/non-authoritative | §6.3A ; §7 ; §14.5 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-25** | Pilot–Nora–Studio semantic continuity = target concern : same governed semantic world · distinct authority/ownership · role projections ; technical architecture **NOT selected** | §15 P4 ; R-23 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-26** | Downstream proof strategy distinguishes **P6 Global Integrated Product QA** from **P7 Fresh Project End-to-End Product Replay** ; P7 new non-fixture / non-happy-path-only ; distinct gates | §15 ; §17.7–17.8 ; §19 | **PASS — C1 VALIDATED BY MORRIS** |
| **C1-27** | Unresolved questions explicitly routed to competent downstream phase instead of silently decided in C1 | §17 | **PASS — C1 VALIDATED BY MORRIS** |

---

## 19. Gates

> Gates définissent **autorité / preuve**, pas un waterfall administratif. **Aucune phase n’auto-autorise la suivante.**

### 19.A Current C1 completion gates

| Gate | Description | Statut |
| --- | --- | --- |
| **G-SIMP-GR** | Guided Review §§1–22 | **COMPLETE** (Morris dispositions ; D-SIMP-01…05 CONSUMED) |
| **G-SIMP-FC** | Final Documentary Consolidation | **COMPLETE** |
| **G-SIMP-02** | **FINAL ChatGPT Critical / Closure Review C1** | **#1 = NOT READY / CORRECTION REQUIRED** (historical) · Correction Pass 01 **COMPLETE** · Closure Review = **PASS** |
| **G-SIMP-03** | **Morris validation C1** (**D-SIMP-05**) | **CONSUMED — C1 VALIDATED BY MORRIS** |
| **G-SIMP-04** | **Git integration C1** (commit / push / PR / merge / post-merge) | **AUTHORIZED / IN PROGRESS** (Morris GO « intégration git complète directe ») |

> Contenu C1 = **VALIDATED BY MORRIS (D-SIMP-05)** · **NOT YET INTEGRATED ON MAIN** until merge completes. Historical fact preserved : Final Critical Review #1 required targeted documentary corrections.

### 19.B Phase progression gates

| Gate | Description | Statut |
| --- | --- | --- |
| **G-SIMP-P2** | GO P2 Functional Operating Model → P2 validation | **NOT AUTHORIZED** |
| **G-SIMP-P3** | GO P3 Chat-first Workspace & Interaction Architecture → P3 validation | **NOT AUTHORIZED** |
| **G-SIMP-P4** | GO P4 Technical / Pilot–Nora–Studio Semantic Architecture → P4 validation | **NOT AUTHORIZED** |
| **G-SIMP-P5** | GO Delivery P5 → delivery evidence (requires sufficient validated functional/UX/architecture basis) | **NOT AUTHORIZED** |
| **G-SIMP-P6** | GO Global Integrated Product QA → QA validation | **NOT AUTHORIZED** |
| **G-SIMP-P7** | GO Fresh Project End-to-End Product Replay → replay evidence · **P7 GO ≠ GO REAL** | **NOT AUTHORIZED** · Project **NOT SELECTED** |
| **G-SIMP-P8** | P8 requalification → Morris decisions (no auto-promotion) | **NOT AUTHORIZED** |

P2 completion does **NOT** auto-authorize P3/P4. Relationships may adapt on evidence ; no phase self-authorizes.

HumanDecision materiality policy = **P2 exit condition** (not an arbitrary standalone global phase).

### 19.C Cross-cutting governance gates

| Gate | Description | Statut |
| --- | --- | --- |
| **G-SIMP-06** | **OpenAI Capability Fit Check / provider-capability revalidation** (**Build Doctrine R22**) required whenever a phase claim depends on current provider capabilities — notably P2 (if functional cognitive behavior depends on provider) · P3 only if UX depends on provider behavior · P4 technical integration/routing · **P6 Model × Reasoning / cognitive quality** · later phases if material claim depends on provider state. **≠** automatic fit check without provider-dependent claim | **REQUIRED — NOT STARTED** |
| **G-SIMP-ARCH** | Structural architecture / persistence selection | **NOT AUTHORIZED / NOT SELECTED** |
| **G-SIMP-08** | **Construction protected-path / structurally governed repository effect gate** — applicable only where Build Doctrine / protected-path governance requires Morris authority. **≠** Delivery GO (Delivery = **G-SIMP-P5** only) · **≠** runtime HumanDecision authority · **≠** generic protected runtime-effect gate. Runtime protected effects remain governed by applicable Studio policy / authority / Confirmation ; **Pilote** remains runtime HumanDecision authority | **NOT AUTHORIZED** |
| **G-SIMP-09** | **GO REAL** — bound to actual Product/runtime external effect or real-agent execution · **≠** review-handoff L3 · **≠** project Git integration | **NOT AUTHORIZED** |
| **G-SIMP-10** | RETIRE d’un actif | **NOT AUTHORIZED — gate par actif** |
| **G-SIMP-11** | Adoption runtime v3 | **NOT AUTHORIZED / NON ADOPTED** — **DISTINCT MORRIS DECISION** |
| **G-SIMP-12** | Promotion **production model routing policy** | **NOT SELECTED** — requires P6 evidence + P7 observation if relevant + **P8 Morris decision** |

### 19.1 Verdict Section 19

**RESTRUCTURE GATES INTO : C1 COMPLETION + PHASE PROGRESSION + CROSS-CUTTING GOVERNANCE.**

---

## 20. Debt / Exit — Managed register

> **True debt ≠ prerequisite ≠ candidate hypothesis ≠ invariant.** Columns : Debt / Transitional Asset · Evidence / Origin · Treatment Phase · Exit Proof · Morris Gate.

### 20.1 Known managed debt / transitional assets

| Debt / Transitional Asset | Evidence / Origin | Treatment Phase | Exit Proof | Morris Gate |
| --- | --- | --- | --- | --- |
| **Specialized Product taxonomy / compatibility bridges** (ex. `docs_write`) | D-ER RETIRE FROM PRODUCT MODEL ; residual after PR #542 | P4 audit → P5 convergence/replacement if in authorized scope | Covered usages / non-use demonstrated | RETIRE gate (distinct) — **≠ wait arbitrarily until P8** |
| **Process-local continuity gaps** *(candidate only if required info cannot be reliably reconstructed)* | MVP / Product Completion ; **process-local ≠ debt automatically** | P2 continuity requirement → P4 object-by-object audit | P6 recovery/currentness proof | Distinct durability/RETIRE gate if needed |
| **Interaction / surface overlap** *(duplicate actions / competing workflow surfaces)* | Incremental construction ; **Journal core = KEEP/HARVEST/ADAPT — ≠ debt** | P2 jobs → P3 interaction audit → P5 authorized simplification | P6 non-regression | RETIRE gate if removal |
| **Low-materiality legacy gates / modals** | Initial design | P2 materiality policy → P3 interaction design → P5 implementation | P6 proof | Retirement if authorized |
| **Local non-integrated C1 document** | Documentary cycle | Guided Review → Final consolidation → Final ChatGPT Critical Review → Morris C1 validation | Distinct Git integration | G-SIMP-04 |
| **Generic Execution residual seams** (ex. docs_write bridge · durableLocalWriteSeal transitional · retention/GC · result rehydration · future Git promotion · other #542 reserves) | PR #542 MERGED — **INTEGRATED ON MAIN** ; residuals remain | **P4 AUDIT INPUT** ; enter P5 only if materially block approved simplification target | Gap closed or deferred with owner | Distinct Delivery/RETIRE gates · **EXISTING DEBT ≠ AUTOMATIC MACRO SCOPE** |

### 20.2 Revalidation / entry obligations — NOT debt

| Obligation | Nature | When |
| --- | --- | --- |
| Current Git truth / Roadmap / reusable-asset state | Re-resolve at phase entry | Every phase |
| OpenAI Capability Fit Check | Evidence / revalidation obligation (**Build Doctrine R22 — OpenAI-native-first**) | Before / during any phase whose material claim depends on current provider capabilities — notably P2/P4/P6, and P3 if UX depends on provider behavior |
| Provider snapshot GPT-6 (2026-10-03) | Dated **EXTERNAL CURRENT INPUT** (≠ permanent doctrine · ≠ production mapping) | Revalidate whenever a material claim depends on current provider capabilities |
| Luna/Sol/Astra candidate mapping | **Hypothesis**, not debt | P6 proof → P8 Morris |
| Generic Execution current state | Resolve from Git at phase entry — **PR #542 MERGED** as of this consolidation | Phase entry |
| Nora trajectory 08 non-duplication | **Architectural invariant**, not debt | Always |

### 20.3 Debt governance invariants

1. **NO VOLUNTARY DEBT WITHOUT TARGET + EXIT.**
2. **CANDIDATE DEBT ≠ PROVEN DEBT.**
3. **PROCESS-LOCAL ≠ DEBT AUTOMATICALLY.**
4. **EXISTING DEBT ≠ AUTOMATIC MACRO SCOPE.**
5. **RETIRE CLASSIFICATION ≠ RETIRE AUTHORITY.**
6. Temporary mechanism requires : reason · owner/phase · exit proof · gate.
7. C1 creates design / evidence / requalification obligations. **C1 creates NO code debt** (no code modified).

### 20.4 Verdict Section 20

**MANAGED DEBT / EXIT REGISTER + SEPARATE TRUE DEBT FROM REVALIDATION OBLIGATIONS + ALIGN EACH TRANSITION WITH PHASE / EXIT PROOF / MORRIS GATE.**

---

## 21. Explicit Anti-claims

Ce document et les décisions **D-SIMP-01…D-SIMP-05** sont des décisions de **trajectoire / consolidation documentaire / validation C1**. Elles **ne signifient pas** :

1. **P2 AUTHORIZED** — **D-SIMP-05** valide C1 only ; P2 requires a **distinct Morris GO**.
2. **C1 INTEGRATED ON MAIN** — until merge / post-merge verification completes under this Git integration GO.
3. **P2 / P3 / P4 / P5 / P6 / P7 / P8 AUTHORIZED** (except C1 validation already consumed).
4. **READY FOR DELIVERY** — aucune livraison, aucun slicing adopté.
5. **READY FOR REAL** — **NO** ; aucune autorisation REAL.
6. **Runtime v3 ADOPTED** — **NON ADOPTED**.
7. **Politique HumanDecision décidée** — cadrée, **NOT DECIDED**.
8. **Recommendation = HumanDecision** — jamais.
9. **Réécriture / greenfield / architecture parallèle / seconde Nora.**
10. **Réécriture de doctrine** ou mutation Build Doctrine / framings / Product Completion / method / prompts / source trajectoire Nora 08. *(Roadmap tip truth-sync ≠ doctrine rewrite.)*
11. **RETIRE** — aucun retrait autorisé.
12. **Global L5 / auto-escalade / merge autonome.**
13. **Cognitive Completion PROVEN** ; Nora ≠ autorité.
14. **OpenAI fit check réalisé** ou **production model routing SELECTED.**
15. **Simplification runtime PROVEN** — C1 = framing/documentary coherence candidate only.
16. **Remplacement de SFIA v2.6** comme processus externe — v2.6 reste baseline processus d’exécution documentaire externe.
17. **GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra / reasoning high** comme mapping **permanent**.
18. **DecisionBasis universel = doctrine** — auditability = invariant ; forme = downstream.
19. **Confirmation conversationnelle décidée.**
20. **CW0–CW3 = niveaux d’autorité** — classes de workload candidates seulement.
21. **P2 Functional Operating Model DESIGNED** — **NO.**
22. **P3 Workspace UX / Figma SELECTED** — **NO.**
23. **P4 Pilot–Nora–Studio technical architecture ADOPTED** — **NO.**
24. **Cycle Journal = source of truth** — **NO.**
25. **Journal = second business cockpit** — **NO.**
26. **SharedKnowledgeStore REQUIRED / SELECTED** — **NO.**
27. **Canonical Orchestration Spine globally ADOPTED** — **NO** (candidate only).
28. **Generic orchestration erases domain semantics** — **NO.**
29. **ExecutionContract required for every Cycle** — **NO.**
30. **Cursor / Execution SUCCESS closes Cycle** — **NO.**
31. **Artifact existence satisfies exit proof** — **NO.**
32. **Every Cycle must produce an artifact** — **NO.**
33. **P6 Global QA PROVEN** — **NO.**
34. **P7 Fresh Project SELECTED** — **NO.**
35. **P7 Replay STARTED** — **NO.**
36. **HabitFlow retained as final P7 target** — **NO.**
37. **All reusable-asset status frozen in C1** — **NO** ; re-resolve from Git at phase entry (GE current = PR #542 MERGED as of this consolidation).

---

## 22. Verdict / Next Gate

### 22.1 Verdict

> **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION C1 — VALIDATED BY MORRIS (D-SIMP-05) — GIT INTEGRATION IN PROGRESS — P2 NOT AUTHORIZED.**

- Checkpoint 01 : §§1–6 **consolidated**.
- Checkpoint 02 : §§7–12 **consolidated**.
- Checkpoint 03 : §§13–15 **consolidated**.
- Guided Review §§16–22 : **COMPLETE** (**D-SIMP-04**).
- Final Documentary Consolidation : **COMPLETE**.
- Final ChatGPT Critical Review **#1** : **NOT READY / TARGETED CORRECTION REQUIRED** (historical).
- Targeted Correction Pass 01 : **COMPLETE**.
- Final ChatGPT Closure Review : **PASS**.
- **D-SIMP-05** : **CONSUMED** — VALIDATE STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION C1.
- **D-SIMP-01…D-SIMP-05** : **CONSUMED**.
- C1 : **VALIDATED BY MORRIS**.
- C1 : **NOT YET INTEGRATED ON MAIN** (until merge / post-merge verification).
- Critères **C1-01…C1-27** : **PASS — C1 VALIDATED BY MORRIS** (documentary / framing only · **≠** runtime proof).
- Aucun RETIRE ; aucun code Product ; **ZERO REAL**.

### 22.2 Next work

**NEXT IMMEDIATE WORK = COMPLETE GIT INTEGRATION** (commit / push / PR / CI / merge / post-merge verification) under consumed Morris GO.

```text
C1 VALIDATED BY MORRIS (D-SIMP-05)
  → Git Integration GO CONSUMED
  → commit / push / PR / CI / merge / post-merge verification
  → Roadmap / repository truth sync
  → DISTINCT Morris GO P2
  → P2 — Functional Operating Model
```

**NEXT PRODUCT CAPABILITY** (only after distinct Morris GO) :

**P2 — Conception fonctionnelle / Functional Operating Model.**

**P2 remains NOT AUTHORIZED. Do NOT start P2 in this pass.**

### 22.3 Active restrictions

| Élément | Valeur |
| --- | --- |
| Guided Review §§1–22 | **COMPLETE** |
| Final Documentary Consolidation | **COMPLETE** |
| Final ChatGPT Critical Review #1 | **NOT READY / CORRECTION REQUIRED** (historical) |
| Targeted Correction Pass 01 | **COMPLETE** |
| Final ChatGPT Closure Review | **PASS** |
| C1 | **VALIDATED BY MORRIS (D-SIMP-05)** |
| C1 Git integration | **AUTHORIZED / IN PROGRESS** · **NOT YET INTEGRATED ON MAIN** |
| P2 | **NOT AUTHORIZED** |
| P3 | **NOT AUTHORIZED** |
| P4 | **NOT AUTHORIZED** |
| P5 | **NOT AUTHORIZED** |
| P6 | **NOT AUTHORIZED** |
| P7 | **NOT AUTHORIZED / PROJECT NOT SELECTED** |
| P8 | **NOT AUTHORIZED** |
| HumanDecision materiality policy | **NOT DECIDED** |
| Canonical Orchestration Spine | **CANDIDATE ONLY** |
| Pilot–Nora–Studio technical architecture | **NOT ADOPTED** |
| SharedKnowledgeStore | **NOT SELECTED / NOT REQUIRED BY C1** |
| Production model routing | **NOT SELECTED** |
| Cognitive Completion | **NOT PROVEN** |
| REAL | **NOT AUTHORIZED** |
| RETIRE | **NONE AUTHORIZED** |
| runtime v3 | **NON ADOPTED** |

### 22.4 Verdict Section 22

**C1 VALIDATED BY MORRIS (D-SIMP-05). GIT INTEGRATION IN PROGRESS. P2 NOT AUTHORIZED.**
