# P4 MICRO-CORRECTION PASS 02 — FULL REVIEW PACK

| Métadonnée | Valeur |
| --- | --- |
| **Timestamp Europe/Paris** | 2026-10-05 01:21:17 +0200 |
| **Macro** | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| **Milestone** | P4 — Semantic / Projection / Cognitive Architecture / Technical Delta |
| **Cycle** | 15 — Capitalisation / REX |
| **Profil** | Capitalization · Critical · DOC dans macro EVOL |
| **Niveau pack** | **FULL** |
| **Branche locale** | `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` |
| **HEAD** | `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` |
| **origin/main** | `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` |
| **Previous Review Handoff** | commit `730f5b7fca6329d841f885cd645508a7d46936a2` · blob `411ac2c8e993145f70d7e225a8a9032c0fd82981` |
| **ChatGPT Final Critical Review #2 verdict** | PASS WITH MINOR CORRECTIONS — P4 ARCHITECTURE SUBSTANTIVELY READY |
| **C1–C9 status** | ALL PASS after Final Critical Review #2 — **NOT REOPENED** |
| **This pass** | P4 MICRO-CORRECTION PASS 02 (MC1–MC4 only) |
| **Next** | CHATGPT TARGETED VERIFICATION |
| **Project commit / push / PR / merge** | NONE |

---

## A. Local Git Truth (pre-edit)

```text
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md
```

Verdict : **MATCH**
- branch / HEAD / origin/main exact
- P4 untracked + tmp pack modified expected
- staged empty
- no other project files

---

## B. Previous handoff / FCR #2

Previous remote : `730f5b7fca6329d841f885cd645508a7d46936a2`
Previous blob : `411ac2c8e993145f70d7e225a8a9032c0fd82981`

ChatGPT Final Critical Review #2 :
**PASS WITH MINOR CORRECTIONS — P4 ARCHITECTURE SUBSTANTIVELY READY**

C1–C9 : **ALL PASS** — not reopened this pass.

---

## C. MC1–MC4 Correction Matrix

| ID | Sections | Before semantic problem | Resulting semantic contract | Verdict |
| --- | --- | --- | --- | --- |
| **MC1** | §9.3 | « BRANCH B — indépendante de A » trop fort (efface le gating authority) | Cardinalité orthogonale à HD ; gated by A when applicable authority requires ; HD non requise ≠ always required ; HD requise ⇒ Execution gated | **APPLIED** |
| **MC2** | §12 Confirmation row | Domain owner = « Applicability Studio-resolved » (pas un owner) | Domain owner = Governed Product Confirmation state · applicability Studio-resolved in Currentness/dimension · Pilote = authority source · Studio = writer | **APPLIED** |
| **MC3** | §25 | Reliquat « authority calculation » | « effective-authority resolution & enforcement » + Studio ≠ HD/Confirmation source ≠ authority-by-persistence | **APPLIED** |
| **MC4** | §2 · §19.2–19.3 · §30 · §31 · §32 | CURRENT « may host derived projections » / « Product SQLite Truth C » conflate physical/CURRENT/TARGET | CURRENT = authoritative Product host only · Synthesis NOT IMPLEMENTED CURRENT · TARGET same DB + derived Synthesis ≠ Truth C · Option A preserved | **APPLIED** |

### Direct coherence cleanup caused strictly by MC1–MC4

- Metadata Correction Pass line → Pass 01 COMPLETE/REVIEWED + Pass 02
- §1.4 WP status → micro-corrections pending Targeted Verification
- Claims matrix + footer + Exit run note → Micro-Correction Pass 02 markers

No WP reopened. No architecture decision changed. No new Morris decision.

---

## D. Residual-pattern searches (post-edit)

- `indépendante de A`: NONE
- `independent of A`: NONE
- `authority calculation`: NONE
- `Product SQLite Truth C`: NONE
- `Truth C island`: NONE
- `may host classified derived projections`: NONE
- `Confirmation | Applicability`: NONE

Additional positives confirmed :
- orthogonale en cardinalité / gated par A / CARDINALITY ORTHOGONAL
- Governed Product Confirmation state
- effective-authority resolution & enforcement (no authority calculation)
- NOT IMPLEMENTED CURRENT (Synthesis)
- Product SQLite-backed authoritative Product records (§31)

---

## E. Anti-claims

```text
P4 AUTHORIZED = YES
P4 STARTED = YES
P4 DOCUMENTARY CANDIDATE = YES
P4 TARGETED CORRECTION PASS 01 = COMPLETE / REVIEWED (C1–C9 PASS)
P4 MICRO-CORRECTION PASS 02 = COMPLETE
P4 GLOBAL VALIDATED BY MORRIS = NO
P4 INTEGRATED ON MAIN = NO
P4 CLOSED = NO
P5 AUTHORIZED = NO
P5 STARTED = NO
READY FOR REAL = NO
runtime v3 ADOPTED = NO
Production router IMPLEMENTED = NO
Synthesis Product implementation = NO
Roadmap P4 truth-sync = NO
No Product code changed = YES
Architecture decision reopened = NO
New Morris decision required = NO
```

---

## F. Git validations (post-edit)

```text
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md
```

P4 file lines : **1756**
Tracked diff check : clean (untracked P4 validated by direct inspection)
Staged : empty
Other project files : none beyond expected tmp pack + P4 doc

---

## G. Final Micro-Correction Pass verdict

**READY FOR CHATGPT TARGETED VERIFICATION — P4 MICRO-CORRECTION PASS 02 COMPLETE**

Explicitly NOT :
- P4 VALIDATED
- P4 CLOSED
- READY FOR COMMIT
- READY FOR PR
- P5 AUTHORIZED
- READY FOR REAL
- runtime v3 ADOPTED

---

## H. COMPLETE CORRECTED P4 DOCUMENT

Fichier : `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`
Lines : 1756

```markdown
# SFIA Studio — Chat-First Product Simplification — P4 Pilot–Nora–Studio Semantic, Projection & Cognitive Architecture / Technical Delta

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P4 — PILOT–NORA–STUDIO SEMANTIC, PROJECTION & COGNITIVE ARCHITECTURE / TECHNICAL DELTA** |
| **Cycle projet** | **15 — Capitalisation / REX** |
| **Profil SFIA** | **Capitalization** · profondeur **Critical** |
| **Typologie** | **DOC** dans macro **EVOL** |
| **Base Git** | `origin/main` @ `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` (merge PR **#551** P3 post-merge closure) |
| **Branche locale** | `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Statut P4** | **AUTHORIZED / STARTED** · substance architecturale **CONVERGED IN CHAT** · document = **DOCUMENTARY CANDIDATE** · **≠ GLOBAL VALIDATED** · **≠ INTEGRATED** · **≠ CLOSED** |
| **Product Completion C1** | **VALIDATED / INTEGRATED / CLOSED** (macro Product Completion — distinct de Product Simplification) |
| **Product Simplification P1** | **VALIDATED / INTEGRATED / CLOSED** — Cadrage Chat-First Product Simplification |
| **P2** | **VALIDATED / INTEGRATED / CLOSED** (PR **#549**) |
| **P3** | **VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED** (PR **#550** + closure **#551**) |
| **P5** | **NOT AUTHORIZED** · **NOT STARTED** |
| **runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **Figma** | READ ONLY · contrat P3 préservé · **≠** mutation ce cycle |
| **Roadmap Git tip** | peut encore porter « P4 NOT AUTHORIZED » — **snapshot historique** jusqu’à truth-sync distinct · **≠** annulation des décisions Morris P4 de ce contrat |
| **Langue** | Français (identifiants Product / runtime préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` |
| **Date** | 2026-10-05 · Europe/Paris |
| **Correction Pass** | **01** COMPLETE / REVIEWED (C1–C9 PASS) · **02** MICRO-CORRECTION after Final Critical Review #2 · pending Targeted Verification |

> **Lecture rapide.** P4 = **comment** le monde Product défini par P1/P2/P3 est représenté, projeté, rendu current/durable/searchable et connecté à la cognition Nora — **sans** seconde vérité ni architecture parallèle. Cinq Work Products. Décisions Morris structurantes **consommées** (Synthèse → Product SQLite existant · router Strategy-first borné · cohort GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra · quality floor · escalation ≤1 · REAL-FIRST dès P5). Ce document = **CANDIDAT DOCUMENTAIRE**. **≠ P4 VALIDATED · ≠ P4 CLOSED · ≠ P5 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ code · ≠ Roadmap truth-sync.**

---

## 1. Metadata / Status / Authority

### 1.1 Trajectoire CURRENT (construction)

```text
Product Completion C1 = VALIDATED / INTEGRATED / CLOSED
  ≠ Product Simplification P1
Product Simplification P1 = VALIDATED / INTEGRATED / CLOSED
  (Chat-First Product Simplification Cadrage)
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549)
P3 = VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED
     (PR #550 merge b5fd3b54… · closure PR #551 merge e19f8940…)
P4 = AUTHORIZED / STARTED
P4 documentary candidate = THIS FILE
P4 GLOBAL VALIDATED BY MORRIS = NO
P4 INTEGRATED ON MAIN = NO
P4 CLOSED = NO
P5 = NOT AUTHORIZED / NOT STARTED
runtime v3 = NON ADOPTED
READY FOR REAL = NO
```

### 1.2 Distinction Roadmap Git vs décisions Morris P4

| Source | Statut | Rôle |
| --- | --- | --- |
| Convergence Roadmap tip (Git @ `e19f8940…`) | Peut encore dire **P4 NOT AUTHORIZED / P4 STARTED = NO** | Snapshot **historique** pré–truth-sync |
| Décisions Morris P4 (consommées pendant P4, matérialisées ici) | **P4 AUTHORIZED / STARTED** + arbitrages WP1–WP5 | Autorité de **construction** pour ce contrat documentaire |
| Future Roadmap truth-sync | **DISTINCT** · hors ce cycle | Ne pas modifier la Roadmap ici |

**Règle :** ne pas traiter le tip Roadmap historique comme annulant les décisions Morris plus récentes de ce prompt. Ne pas réécrire la Roadmap dans ce run.

### 1.3 Domaines d’autorité (pas de hiérarchie globale)

Aligné P2 §2.1 / P3 §1.2 — **aucun rang de précédence global** entre domaines.

| Domaine | Autorité | Rôle |
| --- | --- | --- |
| Construction / gouvernance Studio | Décisions Morris · Build Doctrine · Roadmap | Gates, promotions, doctrine de build |
| Runtime Project structural | HumanDecision du Pilote | Décisions structurantes Project |
| CURRENT implementation / proofs | Git courant · runtime evidence qualifiée · PR/CI | Ce qui existe/fonctionne |
| Destination doctrine Product | v3 framing 30–37 | CE QUE Studio doit devenir |
| Product Completion framing | **Product Completion C1** | Cible / scope macro · **≠ Product Simplification P1** |
| Functional Product behavior | P2 | HOW STUDIO FUNCTIONS |
| Experience / Interaction | P3 + Figma (statut frame-by-frame) + décisions Morris P3 | HOW THE PRODUCT IS EXPERIENCED |
| P4 target technical architecture | **Ce document — CANDIDATE** jusqu’à validation Morris globale | HOW P2+P3 sont représentés / projetés / routés cognitivement |
| Processus externe | v2.6 ChatGPT↔Cursor | Operating model d’exécution |
| Cognitive guidance | CKC | Authority **NONE** |
| External OpenAI capabilities | Snapshot CURRENT daté / revalidable | ≠ doctrine permanente |
| Hypothèses / conversation | Aucune | Candidates uniquement |

#### CURRENT vs TARGET RULE

- Git / runtime evidence prime pour **CURRENT**.
- Doctrine / Product Completion C1 / Product Simplification P1 / P2 / P3 / P4 définissent des contrats **TARGET** selon domaine.
- Aucun document TARGET ne prouve qu’une capacité runtime existe déjà.
- Aucun code CURRENT n’annule silencieusement une décision produit cible.
- Conflit CURRENT ↔ TARGET = **gap de convergence**.


### 1.4 WP status after Micro-Correction Pass 02

| WP | Status |
| --- | --- |
| WP1 | architectural substance unchanged after FCR #2 · micro-corrections only · pending Targeted Verification |
| WP2 | architectural substance unchanged after FCR #2 · micro-corrections only · pending Targeted Verification |
| WP3 | architectural substance unchanged after FCR #2 · micro-corrections only · pending Targeted Verification |
| WP4 | architectural substance unchanged after FCR #2 · micro-corrections only · pending Targeted Verification |
| WP5 | architectural substance unchanged after FCR #2 · micro-corrections only · pending Targeted Verification |

Correction Pass 01 (C1–C9) = **COMPLETE / REVIEWED PASS** (Final Critical Review #2).
Micro-Correction Pass 02 (MC1–MC4) = this pass.

**≠** P4 GLOBAL VALIDATED · **≠** P4 Exit Proof satisfied · **≠** P4 CLOSED · **≠** P5 READY.

---

## 2. Executive Summary

P4 matérialise l’architecture technique **sémantique**, de **projection** et de **routing cognitif** nécessaire pour que P5 puisse délivrer, sans réinterprétation silencieuse :

1. **Un seul monde Product** (objets gouvernés + projections dérivées + records d’interaction).
2. **Des projections bornées** Pilote / Nora / Studio / Executor / surfaces P3 — sans SharedKnowledgeStore.
3. **Synthèse** = materialized derived projection durable, rebuildable, searchable — **TARGET** physical persistence = existing Product SQLite (`oa-product.sqlite`) · **CURRENT** Synthesis Product-derived persistence = **NOT IMPLEMENTED** · classe sémantique = derived projection **≠ Truth C** — **≠** ProductSqliteSession — **≠** Artifact owner primaire.
4. **Nora Cognitive Routing** = Strategy-first bounded router **intégré** au runtime Nora existant (même Agents Runner) — cohort cible GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra — quality floor avant FinOps — escalation cognitive ≤ 1 — REAL-FIRST dès P5.

Cinq Work Products structurants (WP1–WP5) forment la substance P4. Ce fichier les capitalise pour revue section-par-section ChatGPT + Morris, puis pour entrée P5 **si et seulement si** gates distincts l’autorisent.

---

## 3. P4 Mission / Scope / Relationship to P1–P3

### 3.1 Mission

Répondre à :

> COMMENT le monde Product défini par P1/P2/P3 est-il représenté techniquement, projeté (Pilote/Nora/Studio/Executor/surfaces), maintenu current, rendu durable lorsque nécessaire, reconstruit après reprise, searchable, et connecté à la cognition Nora — **sans** deuxième vérité ni deuxième architecture ?

### 3.2 Deux axes

| Axe | Contenu |
| --- | --- |
| **A — Product Simplification Architecture** | Semantic world · ownership · currentness · projections · Conversation/Aperçu/Exécution · Journal/Historique/Synthèses · CURRENT→TARGET |
| **B — Nora Cognitive Architecture** | Semantic context · CWP · Strategy · Quality floor · Model×Effort · cohort GPT-6 · bounded escalation · same Runner · observations |

**Cross-cutting :** OBJECT-NATIVE OPERATION — Nora raisonne sur de vrais objets Product / projections gouvernées. Pas d’« agent world » parallèle.

### 3.3 Trajectoire macro

```text
P1 Cadrage → P2 FOM → P3 Workspace/IA → P4 Semantic/Projection/Cognitive (ce document)
→ P5 Delivery (NOT AUTHORIZED) → P6 QA → P7 Fresh Project → P8 Adoption gates
```

### 3.4 Hors scope P4 (ce document)

Code · migrations · schéma SQL final · package · tests · Figma mutation · Roadmap truth-sync · Build Doctrine edit · sélection table routing production figée · P5 GO · REAL proof · runtime v3 adoption · pixel-perfect runtime proof.

---

## 4. Source Domains / Epistemic Labels / Anti-claims

### 4.1 Labels épistémiques

| Label | Usage |
| --- | --- |
| **CURRENT FACT** | Observé dans Git/runtime |
| **VALIDATED INPUT** | Product Simplification P1/P2/P3 · Product Completion C1 · doctrine validés |
| **MORRIS DECISION / CONSUMED** | Arbitrage Morris P4 |
| **DOCTRINE** | v3 / Build Doctrine |
| **P4 TARGET** | Architecture cible P4 (pas encore runtime) |
| **INFERENCE** | Inférence documentaire bornée |
| **OPEN** | Détail volontairement non figé |
| **EXTERNAL CURRENT INPUT** | Capacités OpenAI snapshot |
| **HISTORICAL** | Campagnes/preuves passées immuables |

### 4.2 Anti-claims (état de CE run)

| Claim | Statut |
| --- | --- |
| P2 VALIDATED / INTEGRATED / CLOSED | **YES** (Git) |
| P3 VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED | **YES** (Git) |
| P4 AUTHORIZED / STARTED | **YES** (Morris P4) |
| P4 architectural substance converged in chat | **YES** |
| P4 DOCUMENT = DOCUMENTARY CANDIDATE | **YES** |
| P4 GLOBAL VALIDATED BY MORRIS | **NO** |
| P4 INTEGRATED ON MAIN | **NO** |
| P4 CLOSED | **NO** |
| P5 AUTHORIZED / STARTED | **NO** |
| READY FOR REAL | **NO** |
| runtime v3 ADOPTED | **NO** |
| Cognitive Completion PROVEN | **NO** |
| Production router IMPLEMENTED | **NO** |
| GPT-6 cohort REAL runtime routing PROVEN | **NO** |
| Synthèse Product implementation | **NO** |
| Figma-to-runtime / pixel-perfect runtime PROVEN | **NO** |
| SharedKnowledgeStore | **REJECT** |
| Second Nora / second Product model | **REJECT** |
| Documentary convergence = runtime convergence | **NO** |
| Target architecture = CURRENT implementation | **NO** |
| Morris decision in prompt = Git integration | **NO** |

---

## 5. Inherited P1 Simplification Contracts

**VALIDATED INPUT** — P1 cadrage.

### 5.1 Simplification First · NON GREENFIELD

Studio possède déjà un backbone fort. Problème principal = fuite de complexité interne dans l’expérience Pilote et la cognition Nora. Simplification **ciblée**.

### 5.2 Préserver / réduire

| Préserver (complexité essentielle) | Réduire (complexité accidentelle) |
| --- | --- |
| Gouvernance · autorité · preuve · provenance · réversibilité · fail-closed · auditabilité · reconstructibilité | Objets internes exposés · surfaces concurrentes · vocabulaire technique · micro-confirmations · désambiguïsation imposée · doubles chemins · chemins parallèles historiques |
| Recommendation ≠ HumanDecision · Evidence/Review · Project ≠ Cycle · authority boundaries | |

### 5.3 Chat-first opérationnel

Chat = interaction primaire **effective**. Chat-first ≠ Chat-only. Chat-first presentation ≠ Chat-first operation. Interactions proportionnées à matérialité / effet / risque.

### 5.4 Nora vs Studio (P1)

| Nora (prioritaire) | Studio (prioritaire) |
| --- | --- |
| UNDERSTAND · REASON · CHALLENGE · RECOMMEND | RESOLVE · VALIDATE · MATERIALIZE · ENFORCE |

### 5.5 Cognitive Reliability

Axe Product structurant. Adaptive model/reasoning = **moyen**. OpenAI-native-first (R22) réutilisé. **Pas de second moteur Nora.**

---

## 6. Inherited P2 Functional Contracts

**VALIDATED INPUT** — P2 FOM. P4 **représente** ; **ne rouvre pas**.

### 6.1 P2-D-01…04

| ID | Contrat | Implication P4 |
| --- | --- | --- |
| **P2-D-01** | Recommendation disposition ≠ HumanDecision · phrase utilisateur ≠ HD auto | Projections Rec ≠ HD · object-native propose ≠ decide |
| **P2-D-02** | Cycle close déterministe quand Exit Proof + critères · Execution success ≠ Cycle complete · Artifact ≠ Exit Proof · Result ≠ Evidence | Persistence/qualification séparées · projections honnêtes |
| **P2-D-03** | Confirmation ≠ HD · conditionnelle · après effet inspectable · pas friction gratuite | Confirmation state Studio · ≠ fill missing HD |
| **P2-D-04** | Cycle close ≠ next activation · Project closed distinct · Abandon = HD · ambiguïté fail-closed | Lifecycle Studio · Nora ne self-active pas |

### 6.2 Autres invariants P2 à préserver

Conversation peut produire zéro mutation · Execution branch optionnelle 0/1/N · read-only cognition ≠ execution · intention ≠ EC · EC ≠ authority · launch ≠ permission cognitive · executor claim ≠ fact · Review ≠ Validation · Artifact ≠ deliverable validé · replan signal ≠ replan décidé · recovery résout vérité actuelle avant session · Functional Routes ≠ runtime taxonomy · cognitive escalation ≠ authority escalation · pas de universal Validator Engine · pas de runtime universel CW0–CW3 imposé.

---

## 7. Inherited P3 Workspace / Interaction Contracts

**VALIDATED INPUT** — P3 CLOSED. P4 **ne redesign pas** P3.

### 7.1 North Star (résumé)

Conversation-led · chat-first ≠ chat-only · conversation dominante · minimum Project context · progressive disclosure · Rec/Decision/Confirmation distinctes · Evidence contextuelle · nav globale minimale · journey ≠ rigid workflow · premium/calme/adulte · motion meaningful + reduced motion · FR fonctionnel · internals SFIA masqués.

### 7.2 Navigation / continuité

| Surface | Rôle P3 |
| --- | --- |
| Conversation / Aperçu / Exécution | Nav Project |
| Journal / Historique / Synthèses | Continuité |
| Evidence | Support contextuel Exécution/Synthèses · pas destination principale |

### 7.3 ProjectTrajectory

Past = Terminé · Present = En cours · Future = Proposé.
Future proposed = Recommendation · ≠ next Cycle auto · ≠ decided.

### 7.4 Journal / Historique / Synthèses (expérience)

Journal onglets : Sujets · Réserves · Recommandations · Décisions.
Historique ≠ current truth.
Synthèses : 9 sections · Verdict avant recommendation · full-content search.

### 7.5 Nora activity / Figma fidelity

START · ACTIVITY · STREAMING · COMPLETE · STOPPED · no fake progress · no CoT.
Figma = référence visuelle · **NO INTENTIONAL VISUAL DEVIATION** · 0–1 px target · runtime screenshot + comparison pour verdict fort. P4 **supporte** la fidélité ; **ne redesign pas**.

### 7.6 Réserves P3 routées P4/P5 (non bloquantes architecture)

Create/first Cycle simultané · full-content search mécanique · timings/easing · breakpoints CSS · tokens/components — **OPEN** implémentation · **≠** architecture parallèle.

---

## 8. P4 Architecture Principles

1. **ONE AUTHORITATIVE OWNER PER TRUTH DOMAIN, N PROJECTIONS.**
2. **INFORMATION MAY BE DURABLE WITHOUT BECOMING PRODUCT TRUTH.**
3. **OBJECT-NATIVE** — text → LLM → duplicate UI state **interdit** comme pattern nominal.
4. **PRODUCT TRUTH BEFORE CONVERSATION REPLAY** (recovery).
5. **STALE/DERIVED PROJECTION** may display honestly · **never alone authorize mutation**.
6. **No SharedKnowledgeStore · no second Project model · no second Nora · no global event sourcing by default · no parallel router service.**
7. **R22 OpenAI-native-first** — USE/KEEP → ADAPT → COMBINE → COMPLETE/BUILD → DEFER/REJECT.
8. **Strategy ≠ Model ≠ Effort ≠ SFIA Profile ≠ Criticality.**
9. **Quality floor before FinOps.**
10. **Cognitive escalation ≠ authority escalation.**
11. **REAL-FIRST** for cognition/routing slices when OpenAI boundary accessible (P5+).
12. **Historical evidence immutable** — no GPT-5.6→GPT-6 rewrite.

---

## 9. WP1 — Semantic Connectivity Audit

### 9.1 Objectif WP1

Identifier objets sémantiques partagés · points d’entrée/lecture/écriture · relations · projections · ruptures CURRENT · duplications · gaps · risques de **parallel truth**.

### 9.2 Monde sémantique cible (inventaire)

| Concept | Famille | Notes |
| --- | --- | --- |
| Conversation / Pilot transcript | Interaction record | Durable possible · non autoritatif |
| Project | Authoritative | Product SQLite |
| Living Project State (LPS) | Authoritative | Product |
| Cycle | Authoritative | Studio lifecycle |
| ProjectTrajectory (decided/current) | Authoritative | Durable/reconstructible |
| ProjectTrajectory (proposed future) | Recommendation / candidate | Non autoritatif jusqu’à HD/transition |
| Recommendation | Epistemic / governed | ≠ HD |
| Reservation / Risk / Epistemic items | Epistemic / governed | ≠ blocker auto sauf règles |
| HumanDecision | Authoritative (scope) | Pilote |
| Confirmation | Governed state | ≠ HD |
| ExecutionContract | Authoritative contractual | Studio |
| Execution / Attempt | Execution facts | ≠ business success seul |
| Executor Claim / Report | CLAIM | ≠ Evidence |
| Result | Outcome record | ≠ Evidence |
| Evidence | Governed epistemic | ≠ vérité absolue auto |
| ReviewBundle | Governed review | Review ≠ Validation |
| ClaimEvaluation / Contract Result | Studio qualification | Verdict canonic |
| Product Resolution | Read composition | ≠ second store |
| Journal | Derived projection | ≠ SoT |
| History | Read projection | ≠ History truth |
| Synthesis | Materialized derived projection | ≠ SoT · rebuildable |
| CKC / Method context | Guidance | Authority NONE |
| Nora cognitive context | Cognitive projection | Seed = studioCognitiveContext |
| Routing telemetry / cost observations | Interaction/cognitive records | Durable ≠ authority |

### 9.3 Flow conceptuel (branches — non linéaire)

Un parcours représentatif **≠** workflow séquentiel obligatoire.

```text
Recommendation / intention / current Product state
→ qualification de matérialité / besoin de jugement

BRANCH A — HumanDecision (0 / 1 / N)
  IF structural judgment required:
    → HumanDecision du Pilote
  ELSE:
    → aucune HumanDecision

BRANCH B — Execution (0 / 1 / N) —
  orthogonale en cardinalité à HumanDecision ;
  peut être gated par A lorsque l’autorité applicable l’exige.
  IF exécution nécessaire:
    → action préparée / ExecutionContract
    → inspection
    → Confirmation uniquement si requise/applicable (0 / 1 / N)
    → effective-authority resolution & enforcement (Studio)
    → Execution / Attempt
    → executor Claim / Result
    → Studio verification
    → Evidence / Review
    → Product qualification / Product Resolution
  ELSE:
    → aucune branche execution

Relation BRANCH A ↔ BRANCH B :
  CARDINALITY / EXISTENCE ARE ORTHOGONAL.
  EFFECTIVE AUTHORITY MAY CREATE A DEPENDENCY WHEN APPLICABLE.
  HD non requise → Execution may proceed without HD,
    subject to all other applicable authority / Confirmation / EC / guardrails.
  HD requise → Execution is gated until a valid applicable HumanDecision exists.

AFTER (as applicable):
→ Nora analysis / Recommendation / replan / continuation
→ deterministic Cycle progression where applicable
→ updated Project semantic context
```

**Cardinalités P2 :** HumanDecision = **0 / 1 / N** · Confirmation = **0 / 1 / N** · Execution branch = **0 / 1 / N**.
Conversation peut produire **zéro** mutation.
HumanDecision = seulement lorsqu’un jugement structurel est requis.
Confirmation = conditionnelle.
Execution = optionnelle.
**≠** HumanDecision always required before Execution.
**≠** Execution never depends on HumanDecision.

**Invariant :** une surface UI **ne possède pas** ce graphe — elle le **projette**.

### 9.4 Pre-Project conversation → Project materialization

**CURRENT FACT :**

- `CreateProject` crée atomiquement **Project + LPS v1** (`createProject.ts`).
- Surfaces pre-M6 (`NewProjectIntentionPage` et héritages) exposent encore une création intention/formulaire provisoire.
- **Aucune preuve** que *pre-project conversation + Project + first Cycle* = une transaction globale atomique.

**TARGET conceptuel :**

```text
pre-Project conversational / intention context
→ non-authoritative interaction / intention state
→ Create Project intent
→ Studio resolves doctrine / current requirements
→ materializes Project + LPS
→ interaction continuity rebound / continued against durable projectId
→ fresh Product truth resolved
→ first Cycle qualified / materialized SEPARATELY if applicable
```

**ANTI-CLAIM :**
> CREATE PROJECT CONTINUITY ≠ ATOMIC PROJECT + FIRST CYCLE TRANSACTION.

Simultanéité Create Project / first Cycle reste **OPEN / P5 implementation subject** sauf nouvelle preuve Git.
Ne pas inventer un mécanisme de persistence pre-project conversation non prouvé par CURRENT.

---

## 10. Canonical Semantic World / Object Topology

```text
PRODUCT WORLD (authoritative + governed facts)
        │
        ▼
RESOLUTION / CURRENTNESS /
EFFECTIVE-AUTHORITY RESOLUTION & ENFORCEMENT (Studio)
        │
        ▼
ROLE-AWARE PROJECTIONS
   ├─ Pilote (minimum-sufficient UX)
   ├─ Nora Semantic Context (object-native)
   ├─ Studio internals (deterministic)
   ├─ Executor (EC-bounded)
   └─ UI surfaces (Conversation / Aperçu / Exécution / Journal / Historique / Synthèses)
```

Pas de SharedKnowledgeStore. Pas de UI database. Pas d’agent semantic database.

---

## 11. Authoritative Objects vs Derived Projections vs Interaction Records

### 11.A AUTHORITATIVE / GOVERNED PRODUCT OBJECTS

Project · LPS · Cycle · decided/current Trajectory · HumanDecision · Confirmation · ExecutionContract · Attempt/execution facts · Evidence · ReviewBundle · ClaimEvaluation · autres objets Product selon source CURRENT.

**Nuance :** « authoritative » est **par domaine**. Evidence = objet gouverné ≠ vérité absolue de toute claim. Attempt = fait d’exécution ≠ décision. HD = autoritatif pour son sujet/scope selon statut.

### 11.B MATERIALIZED / DERIVED PROJECTIONS

Cycle Journal · History read model · Execution continuity projection · Pilot Project projection · Nora semantic projection · UI surface projections · **Synthesis materialized projection**.

**Règle :** projection durable ≠ Product truth.

### 11.C INTERACTION / COGNITIVE RECORDS

Pilot transcript · Session / Memory B · logical turn identity · CWP signals · routing telemetry · usage/cost · interaction records.

**Règle :** durable ≠ authoritative.

**INVARIANT :** *INFORMATION MAY BE DURABLE WITHOUT BECOMING PRODUCT TRUTH.*

---

## 12. WP2 — Information Ownership / Authority Matrix

**CORE INVARIANT :**
> STUDIO WRITER / MATERIALIZER ≠ STUDIO HUMAN AUTHORITY.

Dimensions distinctes (ne pas fusionner) :

| Dimension | Sens |
| --- | --- |
| Canonical domain owner | Qui « possède » le type d’objet dans le monde Product |
| Proposal / producer | Qui peut préparer / proposer |
| Decision / authority source | Qui porte le jugement ou l’autorisation humaine lorsque requis |
| Product writer / materializer | Qui persiste / matérialise (souvent Studio) |
| Persistence | Où ça vit physiquement |
| Consumers | Qui consomme la projection |
| Currentness | Comment la fraîcheur est établie |
| Disposition | KEEP / ADAPT / COMPLETE / … |
| Anti-claims | Interdits de lecture |

| Concept | Domain owner | Proposal/producer | Decision/authority source | Writer/materializer | Persistence | Consumers | Currentness | Disp. | Anti-claims |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Project | Product | Pilot via governed flow | Structural change → Pilote HD ; deterministic transitions → Studio rules | Studio | Product SQLite `oa-product` | All | Project id/version | KEEP | Nora ≠ owner · Studio writer ≠ Pilot judgment |
| LPS | Product | Nora may recommend | Structural arbitration → Pilote HD when required ; else Studio rules | Studio materializes | Product SQLite | Pilote/Nora/Studio | LPS version | KEEP | |
| Cycle | Studio lifecycle | Studio | Deterministic lifecycle Studio-owned/enforced ; HD only if structural arbitration required | Studio | Product SQLite | Surfaces | Cycle state | KEEP | No UI-local lifecycle · Nora cannot self-activate |
| Trajectory decided/current | Product | Studio after HD/rules | HD/rules as applicable | Studio | Product SQLite + trajectory repo | Aperçu/Nora | version/fingerprint | KEEP/ADAPT | Display ≠ decide |
| Trajectory proposed | Epistemic Rec | Nora produce · Studio may materialize Rec | HD/transition applicable | Studio materializes Rec | Epistemic/Rec path | Aperçu « Proposé » | Rec basis-currentness (§13.5) | KEEP/ADAPT | ≠ active Cycle |
| Recommendation | Epistemic object | Nora produce | Disposition P2-D-01 (≠ HD) | Studio materializes | Product epistemic path | Journal Rec / Conversation | **basis/currentness** (§13.5) — **≠ id alone** | KEEP | ≠ HD |
| Reservation | Epistemic/governed | Nora/Studio | Rules | Studio | Product | Journal Réserves | | KEEP | ≠ auto-blocker |
| HumanDecision | Pilote | Nora may prepare/request | **Pilote** (judgment source) | **Studio** persists/materializes | Product SQLite | Journal Décisions | HD id/status | KEEP | Studio NEVER author of Pilot judgment · Nora cannot decide |
| Confirmation | Governed Product Confirmation state | Nora may surface/request **only if** Studio resolved Confirmation applicable | **Pilote** against inspected prepared effect when applicable | Studio persists/applies governed state | Product | Conversation/Exec | Applicability = Studio-resolved from effect/boundary/rules | KEEP | ≠ HD · Nora ≠ decide applicability · cannot fill missing intention/HD · Studio writer ≠ Pilot authority |
| ExecutionContract | Studio | Nora may prepare candidate | Inputs/authority basis may include intention, HD, Confirmation, policy, capabilities **as applicable** | Studio materializes contractual object | Product SQLite | Exec/Nora/Executor | EC version | KEEP | **EC alone ≠ effective authority** |
| Attempt | Execution subsystem | Studio/executor path | N/A as human judgment | Studio/executor path | Product SQLite | Exec/Resolution | Attempt id + lifecycle | KEEP | See Attempt semantics below |
| Executor report | Executor | Executor | N/A (claim) | Claim path | Review material / claim path | Resolution | | KEEP | CLAIM ≠ Evidence |
| Result | Product pipeline | Studio | Qualification | Studio | Product | Exec/Synthèses | | KEEP | ≠ Evidence |
| Evidence | Studio epistemic | Pipeline | Status/freshness | Studio | Product SQLite | Nora/Synthèses | Evidence status | KEEP | ≠ automatic truth |
| ReviewBundle | Studio | Pipeline | Supersession | Studio | Product SQLite | Resolution/Synthèses | | KEEP | Review ≠ Validation |
| ClaimEvaluation | Studio | Studio | Correct/supersede | Studio | Product SQLite M8 | Terminal/Resolution | | KEEP | No duplicate verdict truth |
| Product Resolution | Studio read composer | N/A | N/A | Composer (not a store) | **Not a store** | Nora/Exec/Synthèses | Resolve-time | KEEP/COMPLETE | ≠ second aggregate |
| Journal | Derived | Studio projection | Supersession of entries | Studio projection | **Session SQLite** journal tables | Journal UI | Entry lineage | KEEP/ADAPT | ≠ SoT |
| History | Read projection | Composer | N/A | Composer | None dedicated | Historique UI | Resolve-time | HARVEST/ADAPT | No HistoryStore default |
| Synthesis | Derived materialized | Builder from Resolution | Rebuild/successor | Builder | **TARGET: Product SQLite** (physical) · class = derived projection **≠ Truth C** | Synthèses UI/Nora | Source consistency | COMPLETE/BUILD | ≠ SoT · ≠ Session owner · co-location ≠ Truth C |
| Transcript | Interaction | Session | Append | Session | Session SQLite | Nora continuity | Turn refs | KEEP | No authority alone |
| CKC | Method | Guidance | N/A | N/A | DoctrinePackage/method | Nora context | | KEEP | Authority NONE |
| Cognitive routing decision | Server cognitive config | Router policy | Policy version | Router/telemetry | Telemetry | Eval/ops | | COMPLETE | No business authority |

### 12.1 Effective authority (conceptuel)

Effective authority = intersection **as applicable** :

```text
valid human authorization when required
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
∩ required confirmations / constraints
```

Ne fige **pas** une API d’implémentation. Tous les facteurs ne sont pas requis pour chaque action.

### 12.2 Attempt semantics (explicit)

- Attempt a une identité / lineage durable ;
- Attempt status suit les transitions du lifecycle Execution ;
- les faits d’exécution historiques ne doivent **pas** être réinterprétés comme HumanDecisions ;
- Attempt ≠ succès Product / métier ;
- la qualification Product courante se résout via Evidence / Review / ClaimEvaluation lineage.

---

## 13. Currentness / Provenance / Invalidation Contract

### 13.1 Questions de toute projection sensible

1. Quelles sont mes sources ?
2. Quelles versions / fingerprints ?
3. Quand ai-je été dérivée ?
4. Suis-je encore cohérente ?
5. Suis-je historique ?
6. Dois-je être re-résolue avant effet ?

### 13.2 Métadonnées conceptuelles

`sourceRefs` · `sourceVersions` / `semanticFingerprints` · `derivedAt` · `provenance` · `currentness`

### 13.3 Vocabulaire

| Terme | Sens |
| --- | --- |
| **CURRENT** | Sources toujours applicables |
| **HISTORICAL** | Valide pour un passé · pas représentatif du présent |
| **STALE** | Prétend refléter un état invalidé |
| **UNAVAILABLE** | Studio ne peut pas qualifier honnêtement |

**P4 :** sémantique de résolution d’abord — **≠** schéma persistant universel imposé.

### 13.4 Invariant critique

> A STALE OR DERIVED PROJECTION MAY BE DISPLAYED HONESTLY, BUT MUST NEVER ALONE AUTHORIZE A MUTATION.

Avant effet structurant :

```text
projection/ref → resolve current authoritative object → project binding
→ currentness/version → authority → materialize effect
```

Appliquer au moins à : chat cards · Recommendation · Trajectory proposal · Journal · History deep links · Synthesis · Nora semantic context · prepared actions.

---

### 13.5 Recommendation currentness contract

**CURRENT FACT — pattern à HARVEST / GENERALIZE :**

- `trajectoryRecommendationCurrentness.ts`
- `lifecycleRecommendation/currentness.ts`
- `lifecycleRecommendation/basisFingerprint.ts`
- `lifecycleRecommendation/resolveCanonicalBasis.ts`

Pattern observé : material basis refs · `basisFingerprint` · `semanticKey` · current Product facts · HumanDecision / Evidence / blockers / trajectory / LPS / doctrine basis · supersession/disposition · **fail-closed** si basis matériel requis non rebuildable.

**Families :** Lifecycle Recommendation et trajectory Recommendation ont déjà des mécanismes CURRENT. P4 **n’impose pas** un schéma unique concret pour toutes les Recommendations maintenant.

**TARGET principle :**

> REUSE / GENERALIZE CURRENT BASIS-CURRENTNESS PATTERN
> BEFORE BUILDING A SECOND RECOMMENDATION CURRENTNESS MECHANISM.

**Contract :**

Recommendation identity alone **DOES NOT** establish currentness.

Currentness conceptuelle utilise :

```text
semantic subject / key
+ material basis refs
+ basis fingerprint
+ current Product facts
+ disposition / supersession state
+ fail-closed if required basis unreadable
```

---

## 14. ProjectTrajectory Semantics

| Bande P3 | Sémantique | Owner |
| --- | --- | --- |
| **Terminé** (Past) | Cycles/steps completed durables | Product |
| **En cours** (Present) | LPS + active Cycle + decided/current Trajectory | Product |
| **Proposé** (Future) | Recommendation / candidate | Non autoritatif |

Future proposed : affichable sans HD **comme Recommendation** · ≠ decided · ≠ active · ≠ guaranteed · ≠ next Cycle auto.

Versioning Trajectory CURRENT = **KEEP / ADAPT**. Pas de second trajectory engine.

---

## 15. Conversation / Transcript Contract

### 15.1 CURRENT FACT

- `canonicalConversationSession` / `productSqliteSession` / `cycleJournalStore` persistent désormais conversation/session material et Pilot transcript (Session SQLite).
- `features/project-assistant/f2/proposalStore.ts` reste **process-local** (Map in-memory).
- Le notice historique dans `proposalStore.ts` affirme encore en substance que transcript/Proposal sont « mémoire de processus » — **stale disclosure** par rapport à la durabilité transcript actuelle.
- Le **effective decision subject** peut être durable / reconstructible tant qu’il reste valide via Product / Epistemic markers / snapshots / currentness.
- Subject lost / changed / unreadable → **requalification explicite**, jamais d’invention.

### 15.2 TARGET classification

| Record | Class |
| --- | --- |
| Pilot transcript | Interaction record durable (Session) — **≠** Product authority |
| Proposal store | Process-local helper — **≠** second Proposal truth |
| Effective decision subject | Reconstructible depuis ancres Product/Epistemic **while valid** |

**TARGET :**

- no false-memory claim ;
- no mandatory new durable Proposal aggregate unless P5 proves a real gap ;
- reuse Product objects / Epistemic currentness / DecisionBasis / subject integrity mechanisms first.

### 15.3 F2 Proposal / decision-subject continuity (debt)

| | |
| --- | --- |
| CURRENT | Proposal store = process-local · transcript durability evolved beyond old disclosure · subject reconstructible while valid · lost subject → requalify · old process-local transcript wording in proposalStore notice = stale implementation/documentation debt |
| Disposition | **HARVEST / ADAPT** · **TEMPORARY WITH EXIT** where applicable |
| Debt owner | **P5** |
| Exit proof (conceptuel) | no stale disclosure contradicting actual transcript durability · decision subject honestly reconstructible/current or requalified · no second Proposal truth/store without proof |

**Ce cycle :** document only — **ne pas** éditer `proposalStore.ts`.

---

## 16. Journal Architecture

### 16.1 CURRENT FACT

Cycle Journal projection dans Session SQLite : `journalEntryId` · `projectId` · `cycleInstanceId` · `topicOrdinal` · `title` · `currentSummary` · `stabilizedPoints` · `openPoints` · `sourceTurnRefs` · lineage/supersession · etc. Types : « NEVER Truth C / HD / Evidence / Recommendation authority ».

Search CURRENT = filtre in-memory (`searchCycleJournalIndex`) — **pas FTS5**.

### 16.2 TARGET

**Materialized Continuity Projection.** Jamais Product SoT.

### 16.3 Onglets P3 = COMPOSITE PROJECTION (pas aggregate unique)

| Onglet | Projette |
| --- | --- |
| Sujets | Cycle Journal entries |
| Réserves | vrais Reservation/Epistemic objects |
| Recommandations | vrais Recommendation/Epistemic objects |
| Décisions | HumanDecision |

Disposition : **KEEP / ADAPT**.

---

## 17. History Architecture

### 17.1 CURRENT FACT

`projectHistory.ts` = bounded read model — **HARVEST / ADAPT**. Pas de HistoryStore dédié par défaut.

### 17.2 TARGET

History = **read projection** from significant governed Product facts — **≠** event sourcing · **≠** dedicated truth · **≠** full conversation log by default.

**Potential Product sources (as applicable) :**

- Project / LPS anchors
- Cycle lifecycle / transitions
- ProjectTrajectory versions / transitions
- HumanDecisions
- ExecutionContracts
- Attempts
- qualified Result / Product Resolution anchors
- relevant Synthesis references
- other significant governed Product facts as needed

**Important :** Transcript is **NOT** automatically converted into History.

---

## 18. Synthesis Architecture

### 18.1 MORRIS DECISION / CONSUMED

Synthèse = **materialized derived projection** durable, traçable, recherchable.
Synthèse ≠ Product SoT · ≠ ReviewBundle brut · ≠ Artifact générique.
**Rebuildable** depuis sources Product.

### 18.2 Pipeline TARGET (génération / dépendance)

```text
Execution / Attempt / Claim
→ Evidence
→ Review
→ Product qualification / ClaimEvaluation
→ canonical ContractResultVerdict
→ Post-Evidence Recommendation when applicable
→ Product Resolution
→ Synthesis Builder
→ Nora narrative enrichment if useful
→ Materialized Synthesis Projection
→ Product SQLite existing (physical persistence boundary)
→ search / UI / Nora retrieval
```

Jamais d’un Cursor report seul. Jamais de la conversation seule.

**Product Resolution** = governed input boundary for Synthesis.
**Synthesis narrative** = downstream of qualified Product facts.
**Product Recommendation** may already be part of Product Resolution — **MUST NOT** depend on Synthesis narrative.

> VERDICT BEFORE RECOMMENDATION IN P3 SYNTHESIS **PRESENTATION**
> ≠
> SYNTHESIS NARRATIVE BEFORE PRODUCT RECOMMENDATION **GENERATION**.

Synthesis never creates canonical Product verdict.
Synthesis never owns the canonical Recommendation.
Synthesis projects qualified Product information and may narratively consolidate it.

### 18.3 Contenu P3 obligatoire (9 sections — présentation)

1. Résumé
2. Ce qui était prévu
3. Ce qui a été réalisé
4. Évaluation du résultat
5. Écarts, réserves et blocages
6. Impact sur le projet
7. Verdict
8. Recommandation / prochaine étape
9. Éléments vérifiés

Presentation ordering **does not** dictate generation dependency.

### 18.4 Provenance conceptuelle

| Section | Sources typiques |
| --- | --- |
| Prévu | EC / objective / expected outputs |
| Réalisé | Attempt + verified effects / Result |
| Évaluation | ClaimEvaluation / Review |
| Écarts | Review / reservations / blockers |
| Verdict | Studio/Product qualification (canonical ContractResultVerdict) |
| Recommendation | post-Evidence Recommendation **from Product Resolution** when present |
| Narrative | Nora enrichment **après** qualification des faits Product |

**Interdit :** Nora narration → recherche a posteriori de faits.
**Interdit :** Product Recommendation générée depuis le récit Synthèse.

### 18.5 CURRENT FACT — Synthesis UI

`SyntheseScreen.tsx` → `VsDemoRoot` / `VsSyntheseScreen` / fixtures vertical-slice. **REPLACE** cette représentation POC. Disposition : **HARVEST** UX honesty · **REJECT** comme SoT.

---

## 19. Synthesis Persistence Decision

### 19.1 MORRIS DECISION — OPTION A ADOPTED

Persister la projection Synthèse dans le **PRODUCT SQLITE EXISTANT** (`oa-product.sqlite` / `SqliteProductStore`).

| Placement | Statut |
| --- | --- |
| Product SQLite existing (`oa-product`) — **physical boundary** | **ADOPTED TARGET** |
| ProductSqliteSession (`nora-session`) | **FORBIDDEN as primary owner** |
| Artifact filesystem as primary owner | **FORBIDDEN** |
| New DB | **FORBIDDEN** |
| SharedKnowledgeStore | **REJECT** |
| Event store | **REJECT** (absent need) |

### 19.2 PHYSICAL PERSISTENCE BOUNDARY ≠ SEMANTIC / EPISTEMIC CLASS

| Axis | Contract |
| --- | --- |
| **PHYSICAL PERSISTENCE BOUNDARY** | existing Product SQLite / `oa-product.sqlite` |
| **SEMANTIC / EPISTEMIC CLASS (Synthesis)** | materialized derived projection · **NON-AUTHORITATIVE** · **NOT Truth C** |

**INVARIANT :**

> CO-LOCATION IN PRODUCT SQLITE
> DOES NOT PROMOTE A DERIVED PROJECTION
> TO PRODUCT TRUTH.

**Storage location ≠ authority class.**

| Horizon | What Product SQLite hosts |
| --- | --- |
| **CURRENT** | Physical host of current governed / authoritative Product persistence (Truth C objects: Project/LPS/Cycle/HD/EC/Attempt/Evidence/RB/Trajectory/CE…). **Synthesis Product-derived persistence = NOT IMPLEMENTED CURRENT.** |
| **TARGET** | Same physical Product SQLite **additionally** hosts explicitly classified rebuildable Synthesis materialized projections. Those projections remain **NON-AUTHORITATIVE** · **NOT Truth C** · rebuildable from governed Product sources · do **not** gain authority from co-location. |

Synthesis implementation target must preserve :
- explicit projection classification ;
- source bindings / provenance ;
- rebuildability ;
- no independent mutation authority ;
- deletion / rebuild without loss of authoritative Product truth.

### 19.3 CURRENT FACT — deux fichiers SQLite

| Fichier | Rôle CURRENT |
| --- | --- |
| `oa-product.sqlite` | Physical host of current governed/authoritative Product persistence (Truth C objects: Project/LPS/Cycle/HD/EC/Attempt/Evidence/RB/Trajectory/CE…) · **≠** Synthesis derived persistence already implemented |
| `nora-session.sqlite` | Session Agents + transcript + Cycle Journal |

`sessionPaths` **interdit** d’utiliser `oa-product.sqlite` comme session. Ce split est **KEEP**.

**TARGET (Option A ADOPTED) :** COMPLETE tables/ports de projection Synthèse **dans** le même Product SQLite physique — **pas** fusion Session↔Truth C · **pas** promotion Synthesis→Truth C par co-location · Synthesis class remains derived / rebuildable / **NOT Truth C**.

### 19.4 Non-sélectionné (OPEN → P5)

Nom exact de table · schéma SQL final · repository TypeScript exact · FTS5 · embeddings · vector DB.

### 19.5 Test architectural fondamental

> IF ALL SYNTHESIS PROJECTIONS ARE DELETED,
> AUTHORITATIVE PRODUCT TRUTH MUST REMAIN RECONSTRUCTIBLE.

---

## 20. Synthesis Search / Currentness / Supersession

### 20.1 Full-content search (héritage P3)

Couvrir au minimum : title · summary · planned · done · evaluation · gaps/reservations/blockers · impact · verdict · recommendation · verified elements · contenu textuel pertinent.

P4 **n’adopte pas** Elasticsearch / vector DB / embedding store. Prefer minimum-sufficient **local Product DB search** en P5. FTS5 = candidat seulement si besoin. Jump/highlight = détail implémentation.

### 20.2 Currentness Synthèse

Ne pas marquer STALE uniquement parce que le Project continue.

| Distinguer | |
| --- | --- |
| **SOURCE CONSISTENCY** | Lineage encore valide |
| **CONTEXT RELEVANCE** | Pertinence pour le présent |

Incohérence réelle si lineage invalidé : Evidence invalidated/superseded · ReviewBundle replaced · ClaimEvaluation corrected · bindings changed · Product Resolution verdict change.

Alors : conserver historique/audit · produire successor/rebuild · **pas** mutation silencieuse du passé.

### 20.3 Identité conceptuelle (non figée)

`synthesisId` · `projectId` · `cycleInstanceId?` · `subject` · `sourceBindings` · `sourceFingerprint` · `content` · `generatedAt` · `generatedBy` · `cognitiveProvenance?` · `status` · `supersedes?`
**OPEN** schéma TypeScript/SQL final.

---

## 21. WP3 — Role / Agent / Surface Projection Architecture

```text
Authoritative Product World
→ Resolution Layer (currentness / effective-authority resolution & enforcement)
→ bounded role-aware projections
```

**REJECT :** SharedKnowledgeStore · UI database · agent semantic database.

---

## 22. Pilot Projection Contract

Minimum-sufficient (ordre conceptuel Pilote) :

1. **Project identity**
2. **Short objective / intention**
3. current LPS / current Cycle
4. Trajectory Terminé / En cours / Proposé
5. Attention courante (reservations / blockers / decisions required)
6. Current Recommendation
7. Execution continuity when relevant
8. Latest relevant Synthesis

P3 exige que le Pilote comprenne : quel Project ? quelle objective/intention ? quel Cycle/état courant ? qu’est-ce qui compte maintenant ?

**Ne pas exposer en UX nominale :** DecisionBasis · authority envelope · CKC internals · Truth C jargon · ReviewBundle raw · semantic fingerprints · model IDs · reasoning efforts · taxonomies machines · internals.

Les distinctions internes restent dans le domain.

---

## 23. Nora Semantic Projection Contract

### 23.1 CURRENT FACT — seed

`studioCognitiveContext.ts` = composer read-only riche : projectTruth · method · activeCycle · work items · trajectoryDecisionSupport · decisions · evidence · review · trajectory · lifecycleRecommendation · reservation blocks · limits.
Invariants : `truthOutranksConversation` · composer ne score pas maturity · ne sélectionne pas trajectory.
`activeCycleCognitiveContext.ts` composé — KEEP/ADAPT.

### 23.2 TARGET — NoraSemanticContext (conceptuel)

Current Project Truth · LPS · Cycle · Trajectory · Recommendations · Reservations/Risks · HumanDecisions · Relevant Evidence/Review · Relevant Syntheses · Journal continuity · CKC/method guidance · Product Resolution · provenance/currentness · current task/intent · materiality/risk when deterministic.

**MINIMUM-SUFFICIENT CONTEXT** — pas dump exhaustif permanent.

Disposition seed : **KEEP / ADAPT** → object-native Nora Semantic Context.

---

## 24. Nora Object-native Operations / Forbidden Operations

### 24.1 Nora PEUT (cognitif)

READ · RELATE · CHALLENGE · RECOMMEND · PROPOSE CHANGE · PREPARE · REQUEST DECISION · REQUEST CONFIRMATION · OBSERVE

Exemples : lire HD · relier Evidence↔Recommendation · identifier contradiction · recommander trajectoire · préparer EC candidate · demander matérialisation · observer Execution/Result.

**REQUEST CONFIRMATION — borne :**

Nora may explain / surface / request Confirmation **ONLY** against a prepared/inspectable effect for which **Studio has deterministically resolved** that Confirmation is applicable/required.

Nora does **NOT** autonomously decide « this needs a Confirmation ».

| Role | Confirmation |
| --- | --- |
| Studio | Resolves applicability |
| Nora | Communicates / challenges / prepares |
| Pilote | Confirms |
| Studio | Persists / enforces state |

Confirmation still **≠** HumanDecision.

### 24.2 Nora NE PEUT PAS

ACCEPT HUMAN DECISION · CREATE PILOT JUDGMENT · ACTIVATE CYCLE BY JUDGMENT · PROMOTE PROPOSED TRAJECTORY AS DECIDED · GRANT CONFIRMATION · EXECUTE OUTSIDE AUTHORITY · VERIFY EVIDENCE BY ASSERTION · DECLARE PRODUCT PASS WITHOUT PRODUCT QUALIFICATION · CLOSE CYCLE BY COGNITIVE JUDGMENT · ARCHIVE/ABANDON PROJECT STRUCTURALLY

### 24.3 Pattern object-native

```text
Pilot conversational intent
→ Nora resolves semantic subject
→ Nora reasons on actual Product object/projection
→ Nora proposes semantic change
→ Studio resolves current object
→ currentness check → materiality/authority check
→ governed Product materialization
→ all surfaces re-project same world
```

Pas : text → LLM → duplicate UI text state.

---

## 25. Studio Resolution / Materialization Contract

Studio : **RESOLVE · VALIDATE · MATERIALIZE · ENFORCE**

Currentness · identity · membership · subject binding · versioning · **effective-authority resolution & enforcement** · idempotence · persistence · Product qualification · projection building · guardrails.

Studio peut stocker/enforce une HD — **n’est pas** l’auteur du jugement Pilote.
Studio peut vérifier une claim — l’executor ne devient pas authority source.
Studio resolves/enforces authority conditions — **≠** source of HumanDecision · **≠** source of Pilot Confirmation · **≠** gains authority by persisting a record.

CURRENT seams KEEP/COMPLETE : `resolveProductExecutionContext` · `deriveGovernedExecutionContinuityProjection` · `reconcileGovernedExecution` · `w3bProductTerminalProjection`.

Continuity stages (derived, not new persisted SM) : PRE_EXECUTION · ATTEMPT_ACCEPTED · RUNNING · PRODUCT_MATERIALIZATION_PENDING · POST_EVIDENCE_PENDING · POST_EVIDENCE_COMPLETE · RECOVERY_REQUIRED.

---

## 26. Executor Projection / ExecutionContract Boundary

Executor reçoit contexte **borné par ExecutionContract** :

action · target · scope · inputs · expectedOutputs · requiredCapabilities · constraints · stopConditions · evidenceRequirements · reversibility · relevant contextual material.

EC = contractual **scope / context / capability** boundary consumed inside **effective-authority resolution**.

**ExecutionContract alone ≠ effective authority.**

Cursor/agent **n’a pas** besoin d’un dump Project complet.

Executor **ne décide pas** : Cycle complete · Project replan · Rec→HD · Evidence sufficient · Product PASS · runtime promotion.

**Executor report = CLAIM.**

---

## 27. Surface Projection Matrix

| Surface | Projette | Interdit |
| --- | --- | --- |
| **Conversation** | Transcript + Nora + refs objets Product | Local `isAccepted=true` truth |
| **Aperçu** | Project/LPS/Cycle/trajectory decided+proposed/attention/latest Synthesis | Local business model |
| **Exécution** | Continuity projection canonique | Duplicate React business state |
| **Journal** | Composite (Sujets/Réserves/Rec/Décisions) | Aggregate SoT |
| **Historique** | Read from Product history objects | HistoryStore default · event sourcing |
| **Synthèses** | Materialized derived from Resolution lineage | Fixture VsDemo as SoT |
| **Evidence** | Contextual from Exec/Synthèses | Main nav destination |

---

## 28. Deep-link Identity Contract

Deep link = **stable identity**, pas état autoritatif dupliqué.

Conceptuel : `/project/:projectId` · `/decision/:decisionId` · `/execution/:executionContractId` · `/synthesis/:synthesisId` · `/journal/:journalEntryId`

On load : stable id → resolve object → Project binding → current/historical → render projection.

No authority in URL. Exact route naming = **OPEN** si conventions router diffèrent (P5).

---

## 29. Recovery / Rehydration Contract

```text
session/history
→ DO NOT TRUST AS CURRENT PRODUCT TRUTH
→ resolve current Product objects
→ rebuild projections
→ rehydrate interaction continuity
→ build fresh Nora Semantic Context
→ continue conversation
```

**PRODUCT TRUTH BEFORE CONVERSATION REPLAY.**
Transcript aide le sens — n’écrase pas le Product state.

### 29.1 Next Nora turn after significant Product effect / Product Resolution

```text
next Nora cognitive turn
→ re-resolve current Product truth
→ re-evaluate relevant projections / currentness
→ recompose NoraSemanticContext
→ then reason
```

A Product Resolution copied into session must **NOT** become durable current truth merely because it was in conversation/session context.

Use cached/derived context **only while** currentness remains established.

---

## 30. WP4 — CURRENT→TARGET Integration Map

### 30.1 Matrice (actifs structurants)

| Asset | CURRENT role | Evidence | TARGET | Disposition | P5 delta | Exit / preuve | Risks |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product SQLite `oa-product` + `SqliteProductStore` | Physical Product persistence for current governed/authoritative records (Truth C objects) · Synthesis derived persistence **NOT IMPLEMENTED CURRENT** | `db.ts` M1–M8 · paths | Same physical DB + Synthesis as **derived projection** (**class ≠ Truth C**) | **KEEP / COMPLETE** | Synthesis tables/ports | Truth reconstructible w/o syntheses | Don’t merge session · don’t promote Synthesis→Truth C · don’t claim CURRENT Synthesis already stored |
| `productSqliteSession` / `nora-session` | Session + transcript + Journal | NEVER Truth C comments | Session/transcript/journal only | **KEEP** | No Synthesis owner | Collision guards preserved | Expanding into Synthesis = leak |
| `cycleJournalStore` / types | Journal projection | Session DB | Continuity projection | **KEEP / ADAPT** | Composite tabs wiring | Journal ≠ SoT tests | |
| `studioCognitiveContext` | Rich RO composer | F2 | Nora Semantic Context object-native | **KEEP / ADAPT** | Formalize contract | Context minimum-sufficient | |
| `activeCycleCognitiveContext` | Active cycle CKC | F2 | KEEP/ADAPT | **KEEP / ADAPT** | | | |
| CKC cognitive projection | Method guidance | | KEEP | **KEEP** | | Authority NONE | |
| `projectHistory` | Bounded read model | W2 | P3 History surface | **HARVEST / ADAPT** | Enrich projection | No HistoryStore | |
| `resolveProductExecutionContext` | Shared Product Resolution | W2 | KEEP/COMPLETE | **KEEP / COMPLETE** | Synthesis inputs | Not a store | |
| Continuity projection + reconciler | Derived stages + reconcile | W2 | KEEP/COMPLETE | **KEEP / COMPLETE** | UI wording | No second SM | |
| Generic Execution Review Material | FS review payloads | f3 | Execution review only | **KEEP / ADAPT** | Don’t become Product truth | | |
| VerifiedChangeSet / Evidence / RB / CE | Governed pipeline | OA | KEEP | **KEEP** | | | |
| Synthese VsDemo | Fixture UI | synthese/* | Product-derived Synthesis | **REPLACE** | Builder + Product SQLite | Real Synthesis | |
| `cognitiveWorkloadPolicy` | 4 Strategy Classes + envelopes | CWP | KEEP/ADAPT | **KEEP / ADAPT** | Quality floor inputs | UNKNOWN≠LOW | |
| `runNoraCognitiveTurn` | CWP→telemetry→core | F1 | Principal seam for Product-native routing | **KEEP / COMPLETE** | Insert router | REAL R2 | |
| `runNoraAgentsTurn` | Single Runner | F1 | KEEP | **KEEP** | Same path | No second Nora | |
| `reasoningCapability` / `reasoningModelSettings` | Manifest + modelSettings | | KEEP/ADAPT | **KEEP / ADAPT** | Target cohort · mode=standard | No silent coercion | |
| `config.ts` OPENAI_MODEL | Required live model | | Exit nominal Product routing | **RETIRE LATER** (nominal) · TEMP WITH EXIT override | Provenance+telemetry | Exit proof | |
| OPENAI_REASONING_EFFORT | Optional static · F2 provider path | | Exit nominal | **RETIRE LATER** nominal | Align F2 structured calls under SAME Product cognitive routing policy / provenance (wiring = P5) | Dual path risk | |
| `COGNITIVE_STRATEGY_SELECTED` | Telemetry | turn | KEEP + add ROUTING_* | **KEEP / COMPLETE** | New events | No CoT | |
| Turn/Campaign/USD budgets | Safety/FinOps | | KEEP/ADAPT/COMPLETE | **KEEP / COMPLETE** | Cost/task metrics | Budget≠authority | |
| `buildMw0CapabilityManifest` | Eval historical | nora-eval | FREEZE historical | **FREEZE** | New target manifest | Don’t rewrite | |
| Global MR Stage A GPT-5.6 | Eval matrix | | FREEZE/HARVEST | **FREEZE / HARVEST** | Target cohort eval | Immutable history | |
| F2 ProposalStore / decision-subject continuity | Process-local Proposal · durable transcript evolved · stale process-memory disclosure in notice | `proposalStore.ts` · session stores | No false-memory · reuse Product/Epistemic subject integrity · no mandatory new Proposal aggregate without gap | **HARVEST / ADAPT** · TEMP WITH EXIT | Fix stale disclosure · subject integrity | Exit: honest reconstructibility or requalify · no second Proposal truth | Don’t invent Proposal SoT |
| SharedKnowledgeStore | Absent | docs only | REJECT | **REJECT** | | | |
| Parallel router service | Absent | | REJECT | **REJECT** | | | |
| LLM-as-router | Absent | | DEFER/REJECT initial | **REJECT INITIAL** | | | |
| Second Nora / second Project | Absent | | REJECT | **REJECT** | | | |
| FTS5 | Absent | | Candidate only | **OPEN** | If search needs | Don’t default vector DB | |
| Global event sourcing | Absent | | REJECT absent need | **REJECT** | | | |

---

## 31. Asset Classification (rollup)

| Disposition | Exemples |
| --- | --- |
| KEEP | Product SQLite-backed authoritative Product records · Session/Journal · W2 resolution · Runner · CWP classes |
| ADAPT | studioCognitiveContext → NoraSemanticContext · reasoning envelopes → eligible configs · History for P3 |
| COMPLETE | Synthesis Product projection · cognitiveRoutingPolicy · routing telemetry · F2 path alignment |
| HARVEST | VsDemo honesty · old eval evidence · History pattern |
| FREEZE | GPT-5.6 Stage A · mw0 historical manifest semantics |
| RETIRE LATER | OPENAI_MODEL / OPENAI_REASONING_EFFORT as **nominal** Product selectors |
| REPLACE | Synthese fixture as Product Synthesis |
| REJECT | SharedKnowledgeStore · second Nora · router service · Synthesis-in-Session owner · vector DB by default |

---

## 32. Persistence Delta

| Concern | CURRENT | TARGET |
| --- | --- | --- |
| Product truth (authoritative) | `oa-product.sqlite` — physical host of current governed/authoritative Product records | KEEP |
| Synthesis derived projection | **NOT IMPLEMENTED CURRENT** (fixture UI only) | COMPLETE in same physical Product SQLite · **class ≠ Truth C** · co-location ≠ Truth C |
| Session/Journal/Transcript | `nora-session.sqlite` | KEEP · not Synthesis owner |
| History | No dedicated store | Keep as read projection |
| Synthesis UI (CURRENT) | Fixture UI (`VsDemo`) | TARGET: Product SQLite materialized derived projection (**≠ Truth C**) |
| Execution review material | Filesystem | KEEP as review material · ≠ Product SoT |

---

## 33. Cognitive Runtime Delta

### 33.1 CURRENT seam

```text
semantic assessment + factual turn context
→ Cognitive Workload Profile
→ Strategy Class
→ dynamic reasoning effort (Agents path)
→ static OPENAI_MODEL
→ same Agents Runner
```

Telemetry : `COGNITIVE_STRATEGY_SELECTED`.

### 33.2 TARGET seam

```text
Nora Semantic Context + factual task/runtime context
→ Cognitive Workload Assessment
→ Strategy Class
→ Quality Floor
→ eligible Model × Reasoning candidates
→ bounded Cognitive Routing Policy
→ selected model + effort + mode
→ capability validation
→ same Agents Runner
→ observations quality/latency/cost
→ optionally ONE bounded escalation
→ result / honest limitation
```

Router **INSERT INTO** existing path — **ne wrap pas** une plateforme séparée.
Module conceptuel : `cognitiveRoutingPolicy` adjacent à CWP / reasoningCapability / reasoningModelSettings — **OPEN** nom de fichier exact.

### 33.3 Gap CURRENT

F2 `completeStructured` / `OpenAIConversationProvider` peut encore appliquer `OPENAI_REASONING_EFFORT` statique — **second surface**.

**TARGET wording (implementation-neutral) :**

Align F2 structured cognitive calls under the **SAME Product cognitive routing policy / provenance** where applicable.

Objective : **one cognitive selection policy**, not necessarily one function entry point.

P4 does **NOT** decide that every F2 call must literally pass through `runNoraCognitiveTurn`.

Target :
- no silent static `OPENAI_REASONING_EFFORT` competing with Product routing ;
- same capability validation ;
- same routing provenance ;
- same authority separation ;
- same telemetry/accounting semantics where applicable.

Exact wiring = **P5**. Disposition : **ADAPT**.

---

## 34. Provider / Configuration Delta

| Item | Disposition |
| --- | --- |
| Target cohort GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra | **MORRIS DECISION** · EXTERNAL CURRENT INPUT revalidable |
| GPT-5.6 nominal target path | Exit · historical FREEZE |
| OPENAI_MODEL nominal Product selection | RETIRE LATER · TEMP WITH EXIT for dev/test/emergency |
| OPENAI_REASONING_EFFORT nominal | RETIRE LATER · same |
| Current provider capability manifest | ADAPT/BUILD for target cohort + currentness |
| Unsupported model/effort | Fail closed · no silent coercion |
| Account entitlement | NOT PROVEN until REAL |

---

## 35. Evaluation / FinOps Delta

KEEP : turnBudget · campaignBudget · agentsUsdAccounting · nora-eval harness.
ADAPT : campaign budgets / manifests for target cohort.
COMPLETE : cost-per-successful-task metrics · routing observed costs.
FREEZE/HARVEST : Stage A GPT-5.6 cells — **ne pas réécrire**.

PRIMARY METRIC DIRECTION : **COST PER SUCCESSFUL TASK** (pas seulement cost/API call).
Budget ≠ authority. Quality floor avant optimisation.
Target eval harness = **SAME Product cognitive path** — no second eval runtime (§49.1).

---

## 36. WP5 — Nora Cognitive Routing Architecture

### 36.1 MORRIS DECISION — OPTION A ADOPTED

**Strategy-first bounded router** intégré au Nora runtime existant.

| Non-cible | |
| --- | --- |
| Service de routing séparé | REJECT |
| Second Nora / second agent runtime | REJECT |
| LLM-router initial | REJECT INITIAL |
| Nouveau planner | REJECT |
| Deuxième orchestration cognitive | REJECT |
| Fixed Strategy→Model mapping | REJECT as architecture |

---

## 37. Cognitive Workload / Strategy Contract

### 37.1 Signals (KEEP + enhance)

ambiguity · reasoningDepth · sourceBreadth · toolDependency · contradictionRisk · contextSize · verificationNeed · multimodality · latencySensitivity · costBudget · rigorCriticality

**Hard rules CURRENT :** UNKNOWN ≠ LOW · Routine requires sufficient KNOWN-low · tool capability ≠ tool dependency · multimodality from factual workload not availability.

Enhance from Product semantics (verificationNeed ← criticality/materiality/Evidence ; contradictionRisk ← reservations/conflicts ; etc.).

Semantic Nora assessment **MUST NEVER** override authoritative factual signals where factual constraints exist.

### 37.2 Strategy Classes (KEEP)

Routine · Focused · Deep · High-Assurance

**STRATEGY ≠ MODEL.** Strategy définit exigences cognitives — pas un mapping rigide Luna/Sol/Astra.

Enveloppes d’effort CURRENT (illustratives) = **Strategy reasoning-demand envelopes** / **Current policy reasoning envelopes** — **≠** « provider capability envelopes » :

Provider capability validation happens **AFTER** strategy requirements and determines which model×effort combinations are actually eligible.


| Strategy | Effort envelope CURRENT |
| --- | --- |
| Routine | none · low · medium |
| Focused | low · medium · high |
| Deep | medium · high · xhigh |
| High-Assurance | high · xhigh · max |

---

## 38. Strategy-first Bounded Router

Pipeline :

```text
Nora Semantic Context + task context + deterministic runtime constraints
→ CognitiveWorkloadSignals
→ CognitiveStrategyDecision
→ quality requirements / floor
→ eligible model×effort configurations
→ provider capability validation
→ FinOps/latency arbitration among sufficient candidates
→ CognitiveRoutingDecision
→ Nora Agents runtime
```

CognitiveRoutingDecision conceptuel : strategyClass · selectedModel · selectedReasoningEffort · reasoningMode · qualityFloor · toolPolicyRef · sourcePolicyRef · estimatedCostEnvelope · latencyPreference · escalationPolicy · reasonCodes · policyVersion — **OPEN** DTO final.

---

## 39. Target Model Cohort

**MORRIS DECISION / CONSUMED :**

- **GPT-6 Luna**
- **GPT-6.1 Sol**
- **GPT-6 Astra**

GPT-5.6 **sort** du nominal TARGET path.
Preuves historiques GPT-5.6 = **HISTORICAL IMMUTABLE**.
Provider capabilities = **EXTERNAL CURRENT INPUT** — revalidate when claims depend.
Ce document **n’invente pas** pricing/capabilities détaillés non vérifiés.

Eligible envelopes (CANDIDATES ≠ production table) :

| Strategy | Candidate envelope (illustratif) |
| --- | --- |
| Routine | Primarily Luna low-cost configs |
| Focused | Luna broader · Sol if needed |
| Deep | High Luna effort may be evaluated · Sol central · Astra bounded hard cases |
| High-Assurance | Sol high-capability · Astra advanced bounded |

> THESE ARE CANDIDATE ELIGIBILITY ENVELOPES, NOT A PRODUCTION ROUTING TABLE.
> P5/P6 evidence calibrates exact mapping.

---

## 40. Model × Reasoning Independence

**MORRIS DECISION / INVARIANT :**

Model selection **≠** Reasoning effort selection.

Configurations valides conceptuelles : Luna+higher effort · Sol+lower effort · Sol+higher · Astra+medium/high/etc.

Ne pas conflater : Strategy · Model · Effort · SFIA Profile · Project criticality.

---

## 41. Quality Floor

**QUALITY FLOOR** = minimum acceptable cognitive capability for the workload — a **requirements contract**.

**Non-requirement :** Quality Floor is **NOT** necessarily one scalar numeric score.
P4 does **NOT** adopt : `qualityScore` 0–100 · opaque maturity number · black-box single score.

Allowed future representation may be : categorical · rule-based · vector/requirements-based · or another reconstructible bounded policy.

Requirements :
- explainable reason codes ;
- deterministic/factual inputs where available ;
- reconstructible selection ;
- no hidden quality downgrade.

Inputs potentiels : rigorCriticality · verificationNeed · contradictionRisk · ambiguity · reasoningDepth · impact/materiality · challenge requirement · source complexity.

**Selection order :**

1. workload requirements
2. strategy
3. quality floor
4. eliminate insufficient configs
5. among remaining optimize cost/latency
6. select minimum-sufficient

**Hard rule :** BUDGET MUST NOT SILENTLY DOWNGRADE BELOW REQUIRED QUALITY.
Sinon : STOP / limitation / tradeoff explicite.

---

## 42. FinOps / Latency Arbitration

Reuse CURRENT assets — **no new RoutingCostEngine**.

Flow : existing cost estimation → candidate costs → select among cognitively sufficient → runtime → observed accounting.

Metrics cibles : cost/turn · cost/successful task · cost/workload class · by model/effort · escalation cost · latency · tokens · tools · retries · escalation count · outcomes.

---

## 43. Reasoning Mode Policy

**MORRIS DECISION :**

- Nominal P5 target : `reasoning.mode = standard`
- `reasoning.mode = pro` : **evaluation candidate only** until evidence justifies adoption
- Ne pas ouvrir immédiatement une matrice production model × effort × mode

---

## 44. Bounded Escalation

**MORRIS DECISION :** maximum **UNE** escalation cognitive par tâche.

Valide : initial route → execute → explicit insufficiency → one stronger config → result OR honest limitation.
Invalide : Luna→Sol→Astra→… loop.

Escalation peut skip intermédiaires si faits Product le justifient.

Trigger classes conceptuelles : UNRESOLVED_CONTRADICTION · QUALITY_REQUIREMENT_UNMET · REQUIRED_VERIFICATION_UNRESOLVED · CONTEXT_COMPLEXITY_EXCEEDS_ROUTE · TOOL_RESULT_REQUIRES_DEEPER_SYNTHESIS · EVAL_PROVEN_ESCALATION_CASE.

« Model wants smarter model » ≠ preuve d’escalade seule.
Provider failure ≠ cognitive insufficiency.

**Cognitive escalation ≠ authority escalation.** Astra max reste Nora — jamais Pilote/Morris.

### 44.1 Cognitive task / routing correlation identity (P5 requirement)

Il doit exister une identité stable de tâche cognitive / corrélation de routing across :

- model call ;
- tool rounds ;
- retries ;
- escalation.

Conceptuel : `cognitiveTaskId` · `routingCorrelationId` · or equivalent.
Exact identifier/name remains **OPEN**.

**Purpose :** a tool round or internal sub-call must **not** reset the escalation budget and allow accidental multi-escalation.

---

## 45. Tool / Source / Authority Separation

| Concern | Owner |
| --- | --- |
| HOW TO REASON | Cognitive Router |
| WHICH CAPABILITIES REQUIRED | Source Strategy / Tool Policy |
| WHICH ACTIONS ALLOWED | Authority / EC / runtime guardrails |

**Invalid :** Astra ⇒ more tools ⇒ more authority.
Effective authority remains structurally independent of model strength.

---

## 46. Failure Semantics

Séparer explicitement :

| Failure | ≠ |
| --- | --- |
| Provider failure / unavailability | Cognitive task failure auto |
| Budget conflict | Silent downgrade |
| Authority denied | Solvable by stronger model |
| Tool failure | Poor model choice auto |
| Product qualification fail | Provider error |

---

## 47. Telemetry / Observability

KEEP : `COGNITIVE_STRATEGY_SELECTED`.

COMPLETE conceptuel :

**COGNITIVE_ROUTING_SELECTED** — `routingDecisionId` · `cognitiveTaskId` / correlationId · strategyClass · selectedModel · selectedEffort · reasoningMode · qualityFloor · reasonCodes · eligible summary · escalationEligible · cost envelope · budget state · latency preference · provider capability snapshot/version · routing policy version.

**COGNITIVE_ROUTING_OBSERVED** — same correlation ids · initial model/effort/mode · final model/effort/mode · `escalationUsed` · `escalationReason` · actual usage · tokens · latency · tools · retries · estimated/observed cost · `failureClass` where applicable · task outcome linkage.

**DO NOT** expose Chain of Thought / private reasoning.

---

## 48. REAL-FIRST Proof Ladder

**MORRIS DECISION :** REAL-FIRST COGNITIVE DELIVERY — P5 ne ferme pas une slice cognition/routing par Fake/D0 seul lorsque la frontière OpenAI réelle est accessible.

| Step | Contenu |
| --- | --- |
| **D0** | Deterministic policy/invariants · Signals→Strategy→Routing decision · **≠ cognitive proof** |
| **R1** | LIVE provider contract — real calls to target models/configs |
| **R2** | REAL router — real task → assessment → router-selected model/effort → real provider → Nora result · **no manual production pin as principal proof** |
| **R3** | INTEGRATED PRODUCT COGNITIVE PATH — real Project/LPS/Cycle/context/CKC/Journal/Evidence **as applicable to the workload** → Semantic Context → router → real OpenAI → authorized tools → governed Product result · minimum-sufficient semantic context remains invariant |

Fake reste utile pour invariants / substitution d’adapter. Fake ≠ REAL.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

P6 = comparative/global QA · P7 = fresh Project E2E · P8 = promotion/retirement gates.

---

## 49. Historical Eval Harvest / Target Evaluation

HARVEST workloads : W-Routine · W-Clarification · W-Analysis · W-High-Assurance · W-Memory · W-Sources.
Ne pas réutiliser l’ancienne matrice GPT-5.6 comme décision de routing cible.
Target cohort eval : Luna / Sol / Astra.
Historical cells/model IDs : **FREEZE**.

### 49.1 SAME PRODUCT PATH (mandatory)

The target comparative/eval harness must reuse the **SAME Product cognitive path**, not create a second eval runtime.

Target eval path reuses, as applicable :

- same Cognitive Workload policy
- same Cognitive Routing policy
- same Nora runtime
- same provider adapter/runtime
- same Source Strategy
- same Tool Policy
- same authority boundaries
- same telemetry schema
- same accounting semantics

Experimental model/effort pins remain allowed for controlled comparison cells.

But :

> MANUAL MODEL PIN ≠ R2 ROUTER PROOF.

**No :** `EvalRouterRuntime` or separate cognitive implementation.

**Eval dimensions (minimum) :**

quality/task success · grounding · contradiction handling · challenge quality · authority compliance · latency · input/output/reasoning usage where available · tool usage · retries · escalation · estimated/observed cost · cost per successful task.

P6 evaluates TARGET via the same Product path progressively proven in P5.

---

## 50. Debt / Exit Map

| Debt | Owner | Target | Exit proof |
| --- | --- | --- | --- |
| OPENAI_MODEL nominal selection | P5 | Router-selected nominal model | Normal Product path selects model without nominal env dependency |
| OPENAI_REASONING_EFFORT nominal / F2 static path | P5 | Same Product cognitive routing policy / provenance | No silent static override on Product cognitive path |
| GPT-5.6 nominal assumptions in comments/config | P5 | Target cohort naming where current | Historical refs preserved |
| Capability manifest target gap | P5 | Current-target manifest for Luna/Sol/Astra + currentness | Fail-closed unsupported |
| Old eval cohort as routing decision | P6 primarily | Target cohort comparative evidence | Mapping calibrated |
| Synthesis fixture VsDemo | P5 | Product-derived Synthesis in Product SQLite | Rebuildable + searchable semantics |
| History minimal read model | P5 | P3 History surface from Product read projection | No HistoryStore unless gap |
| P3 runtime visual gap | P5/P6 | Screenshots vs canonical Figma | Visual Fidelity Gate |
| Dual LLM surfaces (Agents vs F2 provider) | P5 | Align under Product cognitive policy / provenance | Single policy provenance · not necessarily one function entry |
| F2 Proposal / decision-subject continuity | P5 | Honest subject reconstructibility · no stale transcript disclosure | No second Proposal store without proof |
| `.tmp-sfia-review` historically tracked | Process debt | HORS SCOPE ce cycle | Future process regularization |

Aucune dette « later » sans exit.

---

## 51. P5 Entry Contract

### 51.1 Functional

P5 must integrate : P2 FOM + P3 Workspace/IA + P4 semantic/object projection + P4 cognitive routing.
Same Nora · same Agents path · dynamic Strategy · dynamic model · dynamic reasoning · target cohort · bounded escalation · same authority semantics · real Product objects.

### 51.2 Architecture

No second Nora · no SharedKnowledgeStore · no router service · no second Product model · no parallel persistence · no event-sourcing initiative without demonstrated blocker · no new orchestration platform · no fixed Cycle→model mapping · no architecture pivot without Morris gate.

### 51.3 Observability

Strategy · model · effort · mode · reason codes · escalation · tokens · latency · tool calls · cost estimate · observed usage · task outcome · policy version.

### 51.4 FinOps

Preflight estimate · observed · cost/task success · by workload/model/effort · bounded budget · quality floor before cost optimization · no silent quality downgrade.

### 51.5 Proof

D0 → R1 → R2 → R3 progressively in P5. Cannot claim complete from deterministic-only cognitive tests when OpenAI accessible.

### 51.6 Product / UX

Implement against P3 · real Product object projections · pixel-perfect future requires runtime screenshots vs Figma · no UI-local SoT · no P3 redesign by convenience.

### 51.7 Synthesis / Journal / History

Synthesis Product-derived in Product SQLite · full-content search semantics · rebuildable · no authority.
Journal derived continuity · History read projection · tabs project true objects · no duplicate truth.

### 51.8 Explicit

**P5 AUTHORIZED = NO** jusqu’à GO Morris distinct après requalification.

---

## 52. Recommended P5 Critical-path Convergence

**CORE RULE :**
> COGNITION AND PRODUCT EXPERIENCE CONVERGE EARLY.

**No :** pretty fixture UI program + router laboratory program that only converge at the end.

Trajectoire **convergente** (pas ticket list · pas « finish router then Product UI ») :

1. **Revalidate** target-provider capability boundary.
2. Build **MINIMUM** cognitive routing policy + wire it into existing Nora runtime path.
3. Build **FIRST object-native Product vertical slice early** :
   - REAL Project semantic context ;
   - P3 Conversation ;
   - Nora Semantic Context ;
   - CWP / Strategy ;
   - router-selected model/effort ;
   - real provider call when authorized ;
   - governed Product object/projection ;
   - same object visible through relevant P3 surface(s).
4. Prove **R1 + R2 THROUGH THAT SAME PATH**, not as isolated router demo.
5. Expand object-native projections — Aperçu · Exécution · Journal · Historique · Synthèses — prioritised by critical-path value and reuse.
6. Prove **R3** integrated representative Product path.
7. Continue runtime/Figma visual convergence for implemented surfaces with runtime screenshots and comparison.
8. **P6** comparative/global QA.

### 52.1 First REAL Product Integration (anti-parallel)

Representative journey cible :

```text
REAL Project → P3 Conversation → real Project semantic context
→ Nora Semantic Context → CWP → Strategy → Product router (model/effort)
→ real OpenAI → Nora governed cognitive outcome
→ Studio materializes/updates real Product object when applicable
→ same object in Conversation / Aperçu / Journal / …
→ Evidence / Result / Synthesis as applicable
```

---

## 53. P4 Exit Contract

**P4 ARCHITECTURAL SUBSTANCE CONVERGED ≠ P4 CLOSED.**

Exit ultérieur (gates distincts) :

1. WP1 complete and coherent
2. WP2 ownership/authority complete
3. WP3 projection contracts complete
4. WP4 integration map complete
5. WP5 routing architecture complete
6. Morris structural decisions faithfully recorded
7. No unresolved architecture parallelism
8. No unowned temporary debt
9. P5 Entry Contract complete
10. ChatGPT section-by-section review complete
11. Targeted corrections complete if any
12. Morris global P4 validation distinct
13. Git integration distinct
14. Post-merge verification distinct if/when authorized
15. **Roadmap construction truth-sync** (après validation/intégration P4 globale, avant P5 readiness/GO as applicable) :
    - reflect validated/integrated P4 status ;
    - reflect next capability/milestone/gate ;
    - distinct documentary/governance action ;
    - **no claim P5 authorized** until applicable Morris gate ;
    - **ne pas** modifier la Roadmap dans ce Correction Pass.

**Ce run (Micro-Correction Pass 02) vise uniquement MC1–MC4 — ≠ Exit Proof satisfied · ≠ P4 GLOBAL VALIDATED · ≠ P4 CLOSED · ≠ P5 READY.**

---

## 54. Open Items / Non-blocking Reserves

| Item | Classe |
| --- | --- |
| Exact Synthesis SQL schema / table name / repository ports | OPEN → P5 |
| Exact full-content search implementation / FTS5 need | OPEN → P5 |
| Exact deep-link technical routes | OPEN → P5 |
| Exact production model×effort table | OPEN → P5/P6 evidence |
| Exact per-workload quality thresholds / escalation thresholds | OPEN |
| reasoning.mode=pro value | OPEN eval |
| Current provider pricing/capabilities at implementation date | EXTERNAL CURRENT INPUT |
| Final CSS breakpoints/tokens (P3 reserves) | OPEN → P5/P6 |
| Precise P5 slice decomposition | OPEN after P4 validation |
| REAL/account entitlement | NOT PROVEN |
| Roadmap truth-sync for P4 AUTHORIZED tip | DISTINCT future DOC cycle |

**Aucune nouvelle décision Morris requise** pour ce candidat documentaire, sauf contradiction repo (aucune bloquante identifiée : Option A = COMPLETE dans Product SQLite, cohérent avec split Session/Truth C).

---

## 55. Morris Decisions Consumed During P4

| Décision | Conséquence | N’autorise PAS | Implication P5 |
| --- | --- | --- | --- |
| **Morris GO P4** — AUTHORIZED/STARTED | Analyse/architecture P4 | P5 · Delivery · REAL · runtime v3 | Requalification + GO P5 distinct |
| **P4 framing** — Semantic + Projection + Cognitive / Technical Delta | Scope WP1–WP5 | Redesign P3 · greenfield | Entry contract |
| **Five WP coherent** | Substance P4 | Closure auto | Documentary consolidation |
| **Target cohort** GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra · GPT-5.6 exits nominal | Router eligibility | Rewrite historical GPT-5.6 | Manifest + REAL proofs |
| **Synthesis architecture** — materialized derived projection | Rebuildable searchable | SoT status | Builder + Product SQLite |
| **Synthesis persistence Option A** — existing Product SQLite | Physical placement in Product SQLite · **class ≠ Truth C** | Session owner · new DB · Artifact primary · KnowledgeStore · Truth-C-by-colocation | Schema/ports OPEN |
| **WP3 projection architecture** — one Product world, bounded projections | No SharedKnowledgeStore | Second agent world | Object-native UI |
| **Nora routing Option A** — Strategy-first bounded router in existing runtime | Insert into path | Router service · second Nora · LLM-router initial | cognitiveRoutingPolicy |
| **Model ≠ reasoning effort** | Independent selection | Fixed Strategy→Model | Config pairs |
| **Quality floor before FinOps** | No silent downgrade | Cost-only routing | Thresholds OPEN |
| **Max one cognitive escalation** | Bounded | Multi-escalation loops | Trigger classes OPEN |
| **REAL-FIRST begins P5** | Proof ladder | Fake-only close when OpenAI accessible | D0/R1/R2/R3 |
| **reasoning.mode nominal=standard** · pro=eval candidate | Limit matrix | Full mode matrix now | Eval gate for pro |
| **OPENAI_MODEL/EFFORT exit nominal** | TEMP WITH EXIT overrides | Immediate env deletion | Exit proof |
| **Full-content search semantics** · no vector DB default | Support P3 search | Elastic/vector adoption | Local search first |
| **No SharedKnowledgeStore / no global ES / no second Project / no parallel architecture** | KEEP backbone | Parallel rebuild | Integration map |

Pas d’IDs `D-P4-*` inventés.

---

## 56. Claims / Anti-claims Matrix

| Claim | Status |
| --- | --- |
| P4 documentary candidate (corrected — Micro-Correction Pass 02) | **YES** (this file) |
| P4 TARGETED CORRECTION PASS 01 COMPLETE / REVIEWED | **YES** (C1–C9 PASS at FCR #2) |
| P4 MICRO-CORRECTION PASS 02 COMPLETE | **YES** (pending ChatGPT Targeted Verification) |
| P4 GLOBAL VALIDATED | **NO** |
| P4 CLOSED | **NO** |
| P5 AUTHORIZED | **NO** |
| Production routing selected/implemented | **NO** |
| GPT-6 REAL routing proven | **NO** |
| Synthesis Product implemented | **NO** |
| runtime v3 ADOPTED | **NO** |
| READY FOR REAL | **NO** |
| Cognitive Completion PROVEN | **NO** |
| Pixel-perfect / Figma-runtime proven | **NO** |
| Roadmap truth-synced for P4 GO | **NO** (distinct cycle) |
| Architecture parallelism introduced | **NO** (REJECT list explicit) |

---

## 57. References / Source Map

| Source | Role |
| --- | --- |
| `sfia-studio-convergence-build-doctrine.md` | R4 dispositions · R22 OpenAI-native-first |
| `sfia-studio-convergence-roadmap.md` | Living tip (historical P4 NOT AUTHORIZED until truth-sync) |
| `product-completion/01-…cadrage.md` | **Product Completion C1** |
| `product-simplification/01-…cadrage.md` | **Product Simplification P1** |
| `product-simplification/02-…functional-operating-model.md` | P2 · P2-D-01…04 |
| `product-simplification/03-…workspace-interaction-architecture.md` | P3 · fidelity · P3→P4 input |
| `sfia-v3-framing/30`–`37` | Doctrine destination |
| `nora-cognitive-completion/08-…trajectory.md` | OpenAI-native-first · historical GPT-5.6 |
| `prompts/templates/sfia-cycle-execution-template.md` | Process v2.6 |
| `method/.../sfia-cycle-routing-guide.md` + operating model + guardrails | Process |
| `method/.../02-fifteen-cycles-synthetic-map.md` | Cycle 15 guidance · CKC detailed ABSENT |
| Product SQLite / Session / Journal / W2 / F2 / CWP / Runner / synthese / eval paths | CURRENT FACT audit |

### 57.1 Architecture Parallelism Check

| Question | Answer |
| --- | --- |
| SharedKnowledgeStore? | **NO** |
| Second Product DB? | **NO** |
| Global event sourcing? | **NO** demonstrated need |
| Second Nora? | **NO** |
| Routing service? | **NO** |
| LLM router initial? | **NO** |
| Another Project aggregate? | **NO** |
| New execution orchestration? | **NO** |
| Synthesis in ProductSqliteSession? | **NO** |
| Artifact as Synthesis owner? | **NO** |
| Vector DB merely for full-content search? | **NO** |

### 57.2 R22 Capability Fit Check

| Primitive | Disposition |
| --- | --- |
| Agents / Responses runtime | USE / KEEP |
| Reasoning effort | USE / ADAPT |
| Model selection | COMPLETE with SFIA bounded Product routing policy |
| Tool use | USE / ADAPT + SFIA authority |
| Hosted source capabilities | USE / ADAPT under Source Strategy + authority |
| Provider usage observations | USE / ADAPT FinOps |
| Session/memory primitives | Within SFIA truth boundaries · Session ≠ Truth C |
| Provider-native routing service | Not assumed / not required |
| Internal LLM router | REJECT initial target |
| SFIA delta to BUILD | Workload→quality · strategy-first router · Product semantic inputs · currentness · quality floor · FinOps arbitration · authority separation · bounded escalation · telemetry/eval · object-native integration |

### 57.3 Fake / Real (ce cycle)

Applicable execution : **N/A**. Documentary / repo-informed only.
Future P5 : D0/R1/R2/R3. Claims REAL/READY FOR REAL **interdits** ici.

---

*Fin du document P4 — DOCUMENTARY CANDIDATE CORRECTED (Micro-Correction Pass 02) — AUTHORIZED/STARTED — ≠ GLOBAL VALIDATED — ≠ CLOSED — ≠ P5 AUTHORIZED — ≠ runtime v3 ADOPTED — ZERO CODE — ZERO ROADMAP MUTATION — ZERO REAL — pending ChatGPT Targeted Verification.*

```

---

*End of P4 MICRO-CORRECTION PASS 02 — FULL REVIEW PACK*
