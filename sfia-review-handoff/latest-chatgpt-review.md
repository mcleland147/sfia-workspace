# Full Review Pack — SFIA Studio V3.1-D2-D Integration Foundation — Backlog (Cycle 5)

## 0. En-tête

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-03 21:10 CEST (+0200) |
| **Rôle Cursor** | Exécution Cycle 5 Backlog / user stories — DOC — Standard |
| **Cycle** | Cycle 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Niveau Review Pack** | Full |
| **Document produit** | `24-v3-1-d2-d-integration-foundation-backlog.md` |
| **SHA-256 document 24** | `aaf9f4e3e6d96df71cb301cbdb5c73e5f29036e0dcbe595cf3a8318defd74dae` |
| **Branche locale** | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| **HEAD** | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| **origin/main** | `9231858a82a252c0bea5bdd60256cee480eebb87` |

---

## 1. GO Morris complet

```text
GO BACKLOG SFIA STUDIO V3.1-D2-D1 / D2-D2 / D2-D3
Date/heure du GO : 2026-08-03 20:46 CEST (+0200)
```

### Autorise

- analyse repo-informed des documents 20–23 ;
- création d'une branche locale backlog ;
- création locale du document 24 ;
- découpage des slices en épics, stories et enablers ;
- critères d'acceptation et preuves futures ;
- priorisation découlant des décisions adoptées ;
- dépendances et gates ;
- Full Review Pack ;
- publication L3 bornée du Review Handoff.

### N'autorise pas

- adoption automatique du backlog ;
- staging / commit / push / PR projet ;
- merge ;
- code / tests applicatifs / dépendances / configurations ;
- Delivery D2-D1/D2-D2/D2-D3 ;
- correction D2-C ;
- vérification capacités Cursor ;
- adapter Cursor live ;
- exécution sandbox-real ;
- technologie de persistance durable ;
- cible de déploiement ;
- queue ou worker permanent ;
- UI ou transport D3 ;
- CreateCycle ;
- D2-D4 write ;
- promotion méthode.

### Interprétation Git

- branche locale dédiée : autorisée ;
- document 24 local non tracké : autorisé ;
- index, commit, remote et PR projet : interdits ;
- push du handoff `sfia/review-handoff` : autorisé comme flux L3 distinct.

---

## 2. Interprétation bornée

Ce cycle transforme les décisions CAD/FD/FA/TA adoptées en backlog candidat exploitable.
Il ne redécide pas l'architecture, n'ouvre pas la Delivery, ne lève aucune réserve,
ne vérifie pas Cursor, et ne produit aucun code.

---

## 3. Git Truth initial

| Élément | Valeur |
|---------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Workspace principal | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Baseline | `main@9231858a82a252c0bea5bdd60256cee480eebb87` |
| Merge amont | PR #306 |
| MERGE_SHA | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| Parent 1 | `e273b2afc33445154f63226fdfe8357c75df67f8` |
| Parent 2 | `08d6cd0dd1503a7f261bf1fe527dba782d8f27ed` |
| Handoff tip predecessor | `26b7f0907ed7981fbe4fe57f964a8b23eb1f73c1` |
| Handoff blob predecessor | `08a8f2aee5b478ca3eba9feb007f1d804f6bb448` |
| Branche backlog locale avant | absente |
| Branche distante backlog | absente |
| PR backlog | absente |

---

## 4. Worktree sélectionné

| Champ | Valeur |
|-------|--------|
| MAIN_WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge` |
| Branche avant switch | `main` |
| HEAD vérifié | `9231858a82a252c0bea5bdd60256cee480eebb87` = origin/main |
| Tracked clean | oui (`.tmp-sfia-review/**` éventuel hors MAIN_WT) |

---

## 5. Création branche locale

```text
git switch -c backlog/sfia-studio-v3-1-d2-d-integration-foundation \
  9231858a82a252c0bea5bdd60256cee480eebb87
```

| Vérification | Résultat |
|--------------|----------|
| Branche active | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| HEAD | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| Staged | vide |
| Tracked diff | aucun |
| Push projet | aucun |

---

## 6. Sources consultées

### Méthode (lecture)

1. prompts/templates/sfia-cycle-execution-template.md
2. method/sfia-fast-track/core/sfia-cycle-routing-guide.md
3. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
4. method/sfia-fast-track/core/sfia-rules-and-guardrails.md
5. method/sfia-fast-track/checklists/sfia-validation-checklist.md
6. method/.../cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
7. method/.../cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
8. method/.../sfia-v2.5-project-cycles-method-candidate.md §4.5
9. scripts/sfia/README.md
10. scripts/sfia/publish-review-handoff.sh

### Projet (lecture)

11–14. Documents 20, 21, 22, 23 (immutables)
15. Document 19 — précédent structurel uniquement
16. README framing
17. Conventions backlog existantes

### Code / config (lecture seule)

18–26. execution-contract · execution-attempt · vertical-slice-runtime · platform/ai · repository · observability · security · harness ports · increment-d
27–30. package.json · tsconfig · vitest · CI workflow

**Aucun fichier source modifié. Aucun npm/build/lint/test exécuté.**

---

## 7. CKC fallback et limites

| Champ | Valeur |
|-------|--------|
| Contrat détaillé trouvé | non |
| Fallback | carte synthétique 15 cycles + §4.5 |
| Statut | method-candidate |
| Usage | experimental cognitive guidance |
| Autorité | aucune autorité d'exécution |
| Objet | stories, taille, INVEST, priorités, dépendances, critères |
| Preuve centrale | une story = un résultat vérifiable |
| Risque principal | stories fourre-tout / mélange gates-architecture-Delivery |
| Limite | ne pas inventer de CKC détaillé |

---

## 8. Handoff source (before)

| Champ | Valeur |
|-------|--------|
| tip | `26b7f0907ed7981fbe4fe57f964a8b23eb1f73c1` |
| blob | `08a8f2aee5b478ca3eba9feb007f1d804f6bb448` |
| Contenu vérifié | Cycle 14 Post-merge · PR #306 · MERGE_SHA · docs 20–23 · D-CAD/FD/FA/TA adoptées · réserves OPEN · Cursor UNVERIFIED · CI `30841765663` |

---

## 9. Décisions CAD / FD / FA / TA appliquées

| Pack | Statut |
|------|--------|
| D-CAD-01…12 | ADOPTED — APPLIED |
| D-FD-01…12 | ADOPTED — APPLIED |
| D-FA-01…12 | ADOPTED — APPLIED |
| D-TA-01…14 | ADOPTED — APPLIED |

Aucune décision TA redécidée. Aucune nouvelle décision d'architecture.

---

## 10. Réserves et Cursor

| ID | Statut |
|----|--------|
| R-QA-REV-01 | OPEN NOT LIFTED |
| R-QA-REV-02 | OPEN NOT LIFTED |
| R-QA-D2C-01 | OPEN NOT LIFTED |
| CURSOR PRODUCT CAPABILITIES | UNVERIFIED |

---

## 11. Principes de découpage

Une story = un résultat vérifiable · slice unique · dépendances explicites · gates séparées · fixtures-first · read-only first · evidence before success · partial never succeeded · aucun claim excessif · aucun second runtime · NOT ESTIMATED · pas de dates inventées.

---

## 12. Definition of Ready (globale)

Voir document 24 §I — Ready uniquement si décisions sources, critères, négatifs, dépendances, gates consommées, fichiers candidats, preuves, pas d'archi cachée, réserves non levées, pas de live sans gate, pas d'estimation inventée, scope borné, **GO Delivery spécifique**.

---

## 13. Definition of Done (globale)

Voir document 24 §J — Done uniquement si résultat vérifiable, tests verts, négatifs verts, sécurité, pas de secret/SDK exposé, preuves/disclosures, source explicite, partial≠succeeded, docs, CI, réserves honnêtes, diff borné, review pack, PR readiness/merge = cycles distincts.

---

## 14. Registre gates

| Gate | Statut |
|------|--------|
| G-D2D-CURSOR-01 | REQUIRED — NOT EXECUTED |
| G-D2D-D2C-01 | REQUIRED BEFORE UNVALIDATED EXTERNAL BOUNDARY — NOT EXECUTED |
| G-D2D-PERSIST-01 | UNDECIDED — NOT REQUIRED FOR D2-D1 — REOPEN BEFORE STRONG D2-D3 CLAIM |
| G-D2D-DELIVERY-01 | NOT AUTHORIZED |
| G-D2D-DELIVERY-02 | NOT AUTHORIZED |
| G-D2D-DELIVERY-03 | NOT AUTHORIZED |

---

## 15. Epic D2-D1 — Execution Run Core and Contract Foundation

Objectif : socle pur, local, fixture-first. Memory OK. Pas de provider réel. Pas de Cursor live. Pas de D3 transport.

### Stories D2-D1

| ID | Titre | Type | Statut |
|----|-------|------|--------|
| D2D1-01 | Canonical execution-run domain vocabulary | STORY CANDIDATE | NOT ADOPTED |
| D2D1-02 | Runtime schemas and AJV boundary validation | STORY CANDIDATE | NOT ADOPTED |
| D2D1-03 | Eight-state transition authority | STORY CANDIDATE | NOT ADOPTED |
| D2D1-04 | Read-only policy and normalized failure foundation | STORY CANDIDATE | NOT ADOPTED |
| D2D1-05 | Evidence, completeness and source disclosure | STORY CANDIDATE | NOT ADOPTED |
| D2D1-06 | ExecutionRunRepository memory adapter | STORY CANDIDATE | NOT ADOPTED |
| D2D1-07 | Deterministic contract fixture catalogue | STORY CANDIDATE | NOT ADOPTED |
| D2D1-08 | Server-only composition and import boundaries | STORY CANDIDATE | NOT ADOPTED |
| D2D1-09 | D2-D1 slice evidence and readiness pack | STORY CANDIDATE | NOT ADOPTED |

Détail complet (valeur, décisions, AC, tests, risques, fichiers) : document 24 §K ci-dessous.

---

## 16. Epic D2-D2 — Provider Boundaries and Controlled Read-only Adapters

Précondition : D2-D1 validé. Wrappers read-only. Pas de live CI défaut.

### Stories D2-D2

| ID | Titre | Type | Statut |
|----|-------|------|--------|
| D2D2-01 | Provider port conformance harness | STORY CANDIDATE | NOT ADOPTED |
| D2D2-02 | AI-B platform adapter | STORY CANDIDATE | NOT ADOPTED |
| D2D2-03 | GIT-C read-only adapter | STORY CANDIDATE | NOT ADOPTED |
| D2D2-04 | SECRET-B source boundary | STORY CANDIDATE | NOT ADOPTED |
| D2D2-05 | EVENT-B execution event adapter | STORY CANDIDATE | NOT ADOPTED |
| D2D2-06 | Async, timeout, cancellation and late-result handling | STORY CANDIDATE | NOT ADOPTED |
| D2D2-07 | D2-D adversarial input boundary | STORY CANDIDATE | NOT ADOPTED |
| D2D2-08 | Sandbox and protected-path contract without live Cursor | STORY CANDIDATE | NOT ADOPTED |
| D2D2-09 | Cursor adapter eligibility gate | EXTERNAL GATE LINK | BLOCKED — DISTINCT MORRIS GATE REQUIRED |
| D2D2-10 | D2-D2 slice conformance and evidence pack | STORY CANDIDATE | NOT ADOPTED |

Détail complet : document 24 §L.

---

## 17. Epic D2-D3 — End-to-end Read-only Coordination and Strong Evidence

Préconditions : D2-D1 + D2-D2 validés. D2-D4 hors trajectoire.

### Stories D2-D3

| ID | Titre | Type | Statut |
|----|-------|------|--------|
| D2D3-01 | End-to-end execution coordination | STORY CANDIDATE | NOT ADOPTED |
| D2D3-02 | Provider-independent server projection | STORY CANDIDATE | NOT ADOPTED |
| D2D3-03 | End-to-end evidence and truthfulness | STORY CANDIDATE | NOT ADOPTED |
| D2D3-04 | Cursor sandbox-real proof | BLOCKED ENABLER CANDIDATE | BLOCKED — CURSOR UNVERIFIED |
| D2D3-05 | Strong-runtime environment and persistence gate | EXTERNAL GATE LINK | BLOCKED — G-D2D-PERSIST-01 |
| D2D3-06 | End-to-end negative and resilience scenarios | STORY CANDIDATE | NOT ADOPTED |
| D2D3-07 | D2-D3 strong evidence readiness review | STORY CANDIDATE | NOT ADOPTED |

**D2-D4 :** OUT OF TRAJECTORY — aucune story.

Détail complet : document 24 §M.

---

## 18. Dépendances

Voir document 24 §N. Points clés :

- toutes D2-D2 dépendent des contrats D2-D1 ;
- D2D2-02 → D2D2-01 + D2D1-02/05 + D2D2-04 ;
- D2D2-03 → D2D2-01 + D2D1-04/05 + D2D2-04 ;
- D2D2-05 → D2D1-03/05 ;
- D2D2-06 → D2D1-03/06 ;
- D2D2-07 → D2D1-02/04 ;
- D2D2-09 → G-D2D-CURSOR-01 ;
- D2-D3 → D2-D1 + D2-D2 validés ;
- D2D3-04 → G-D2D-CURSOR-01 ;
- D2D3-05 → décision Morris distincte (G-D2D-PERSIST-01).

---

## 19. Ordre candidat

D2D1-01 → … → D2D1-09 → validation D2-D1 → D2-D2 → validation D2-D2 + gates → D2-D3.
**NOT ESTIMATED.** Aucune date/sprint/story point.

---

## 20. Couverture décisions

Voir document 24 §P — chaque CAD/FD/FA/TA mappée à ≥1 story/gate/critère. TA-01…14 couvertes. D2-D4 sans story.

---

## 21. Couverture risques

Voir document 24 §Q — double runtime, drift, state dupliquée, memory loss, lock-in, secrets, Git mutation, commandes, sandbox, Cursor, events, partial-as-success, races, D3 leakage, multi-instance, live flaky, R-QA-*.

---

## 22. BLG-01…08

Tous : `NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED`

1. Structure 3 épics
2. Catalogue D2-D1
3. Catalogue D2-D2
4. Catalogue D2-D3
5. DoR/DoD
6. Ordre et dépendances
7. Registre gates
8. Trajectoire validation → publication → post-merge → GO Delivery D2-D1 uniquement

---

## 23. Document 24 complet

SHA-256 : `aaf9f4e3e6d96df71cb301cbdb5c73e5f29036e0dcbe595cf3a8318defd74dae`

`````markdown
# 24 — SFIA Studio V3.1-D2-D Integration Foundation — Backlog / user stories

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Document** | `24-v3-1-d2-d-integration-foundation-backlog.md` |
| **Date/heure** | 2026-08-03 21:02 CEST (+0200) |
| **Cycle** | Cycle 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Branche locale** | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| **Base Git** | `main@9231858a82a252c0bea5bdd60256cee480eebb87` |
| **GO Morris** | `GO BACKLOG SFIA STUDIO V3.1-D2-D1 / D2-D2 / D2-D3` (2026-08-03 20:46 CEST) |
| **Documents amont (immutables)** | [20](./20-v3-1-d2-d-integration-foundation-cadrage.md) · [21](./21-v3-1-d2-d-integration-foundation-functional-design.md) · [22](./22-v3-1-d2-d-integration-foundation-functional-architecture.md) · [23](./23-v3-1-d2-d-integration-foundation-technical-architecture.md) |
| **Précédent structure (non copié)** | [19](./19-v3-1-d2-a-b-c-delivery-backlog.md) — conventions de présentation uniquement |
| **CKC** | Fallback `02-fifteen-cycles-synthetic-map.md` + §4.5 — method-candidate — **aucune autorité d'exécution** |
| **Code / tests / config exécutés** | **non** |
| **Statut** | `D2-D BACKLOG COMPLETE LOCALLY — READY FOR MORRIS BACKLOG VALIDATION — NO DELIVERY AUTHORIZED` |

---

## B. Règles de lecture

| Marqueur | Signification |
|----------|---------------|
| **ADOPTED** | Décision Morris CAD/FD/FA/TA déjà adoptée |
| **OBSERVATION** | Fait Git vérifié |
| **STORY CANDIDATE** | Story Delivery proposée — **NOT ADOPTED** |
| **ENABLER CANDIDATE** | Enabler technique proposé — **NOT ADOPTED** |
| **EXTERNAL GATE** | Gate humaine/technique distincte — **NOT CONSUMED** |
| **RESERVE** | Réserve ouverte, non levée |
| **BLOCKED** | Story/enabler non Ready sans gate |
| **READY CANDIDATE** | Peut devenir Ready après DoR + GO Delivery |
| **NOT ESTIMATED** | Aucune charge/date/story point inventée |
| **MORRIS VALIDATION REQUIRED** | Décision backlog BLG non encore prise |

Aucune story candidate n'est un backlog adopté. Aucune Delivery n'est autorisée par ce document.

---

## C. Baseline et décisions héritées

### C.1 Baseline Git (OBSERVATION)

| Élément | Valeur |
|---------|--------|
| main | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| PR amont | #306 MERGED |
| Document 23 | sur main · hash `6dd45467…` · package `c69f1709…` |
| CI main | `30841765663` success |

### C.2 Décisions ADOPTED (appliquées sans réinterprétation)

| Pack | Statut |
|------|--------|
| D-CAD-01…12 | ADOPTED |
| D-FD-01…12 | ADOPTED |
| D-FA-01…12 | ADOPTED |
| D-TA-01…14 | ADOPTED |

### C.3 Contraintes centrales (ADOPTED)

1. Ordre D2-D1 → D2-D2 → D2-D3.
2. D2-D4 write **hors trajectoire**.
3. Core OA `execution-run` = seule autorité technique d'état.
4. `vertical-slice-runtime` = façade/composition server-only.
5. `execution-contract` = gouvernance pré-exécution.
6. Couches domain / application / ports / adapters / server composition.
7. CONTRACT-B : TypeScript compile-time + JSON Schema/AJV runtime.
8. Huit états : `idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled` · `timed_out` · `blocked`.
9. Repository port unique ; memory OK en D2-D1.
10. ASYNC-B pour D2-D1/D2-D2.
11. Wrappers provider REUSE-B ; AI-B ; GIT-C read-only ; CURSOR-B conditionnel ; SECRET-B ; EVENT-B ; D3-TECH-C.
12. Fixtures-first ; validation avant metadata ; pas de live CI par défaut.
13. Aucun SDK/secret vers domaine, events, evidence, fixtures, D3.

### C.4 Réserves et capacités (RESERVE)

| ID | Statut |
|----|--------|
| R-QA-REV-01 MINOR | OPEN NOT LIFTED |
| R-QA-REV-02 MINOR | OPEN NOT LIFTED |
| R-QA-D2C-01 MINOR | OPEN NOT LIFTED |
| CURSOR PRODUCT CAPABILITIES | UNVERIFIED |

---

## D. Finalité du backlog

Transformer les décisions D2-D en unités de Delivery vérifiables, **sans** redécider l'architecture et **sans** ouvrir automatiquement la Delivery.

---

## E. Périmètre et hors périmètre

### Périmètre

Épics · stories · enablers · critères · tests futurs · dépendances · priorités · gates · DoR · DoD · réserves.

### Hors périmètre

Code · configuration · dépendances · CI · provider live · Cursor live · correction D2-C · UI · transport D3 · persistance durable · déploiement · RUN readiness · estimation équipe · publication Git projet · CreateCycle · D2-D4 write · méthode.

---

## F. Principes de découpage

1. Une story = un résultat vérifiable.
2. Slice unique principale.
3. Dépendances explicites.
4. Gates séparées des stories Delivery.
5. Aucun scope caché.
6. Fixtures avant réel.
7. Read-only first.
8. Evidence before success.
9. Partial never succeeded.
10. Aucun claim au-delà des preuves.
11. Aucun fournisseur exposé à D3.
12. Aucun second runtime / double state authority.
13. INVEST pragmatique ; **NOT ESTIMATED**.
14. Pas de dates, sprints, story points ou engagements inventés.

---

## G. Vue d'ensemble

| Slice | Objectif | Priorité candidate | Entrée | Sortie | Dépendances | Gates | Claims autorisés | Claims interdits |
|-------|----------|--------------------|--------|--------|-------------|-------|------------------|------------------|
| **D2-D1** | Socle contrats + core local | P0 | Docs 20–23 ; TA adoptées | Contract foundation verified (candidate) | — | G-D2D-DELIVERY-01 | D2-D1 CONTRACT FOUNDATION VERIFIED | provider integrated · production-ready · multi-instance |
| **D2-D2** | Wrappers et frontières read-only | P1 | D2-D1 validé | Conformance wrappers (candidate) | D2-D1 | G-D2D-DELIVERY-02 · G-D2D-CURSOR-01 (pour live) · G-D2D-D2C-01 | read-only wrappers conformes | Cursor verified · durable store · Git write |
| **D2-D3** | Coordination E2E + preuves fortes | P2 | D2-D1+D2-D2 validés | Strong evidence readiness (candidate) | D2-D2 · gates | G-D2D-DELIVERY-03 · G-D2D-CURSOR-01 · G-D2D-PERSIST-01 | levels de readiness sourcés | production-ready · RUN READY · D3 ready |
| **D2-D4** | Write | **OUT OF TRAJECTORY** | — | — | — | — | **aucune story** | Git write enabled |

P0/P1/P2 = ordre de dépendance uniquement, **pas** un calendrier.

---

## H. Registre des gates externes

### G-D2D-CURSOR-01

| Champ | Valeur |
|-------|--------|
| **Objet** | Cursor capability verification |
| **Statut** | REQUIRED — NOT EXECUTED |
| **EXTERNAL GATE** | oui |
| **Conséquence** | Bloque adapter Cursor live et preuve sandbox-real Cursor ; ne bloque pas contrats/fixtures/policies sans Cursor réel |
| **GO requis** | `GO CURSOR CAPABILITY VERIFICATION SFIA STUDIO V3.1-D2-D` |

### G-D2D-D2C-01

| Champ | Valeur |
|-------|--------|
| **Objet** | Correction bornée R-QA-D2C-01 |
| **Statut** | REQUIRED BEFORE UNVALIDATED EXTERNAL BOUNDARY — NOT EXECUTED |
| **EXTERNAL GATE** | oui |
| **Conséquence** | D2-D valide toujours avant metadata ; correction core D2-C = cycle distinct ; **jamais** intégrée dans une story D2-D |
| **GO requis** | `GO CORRECTION SFIA STUDIO D2-C R-QA-D2C-01` |

### G-D2D-PERSIST-01

| Champ | Valeur |
|-------|--------|
| **Objet** | Persistance durable / environnement cible |
| **Statut** | UNDECIDED — NOT REQUIRED FOR D2-D1 — REOPEN BEFORE STRONG D2-D3 CLAIM |
| **EXTERNAL GATE** | oui |
| **Conséquence** | Memory OK D2-D1 ; aucun claim restart-safe/multi-instance ; décision distincte si D2-D3 l'exige |

### G-D2D-DELIVERY-01 / 02 / 03

| Gate | Objet | Statut |
|------|-------|--------|
| G-D2D-DELIVERY-01 | Delivery D2-D1 | **NOT AUTHORIZED** |
| G-D2D-DELIVERY-02 | Delivery D2-D2 | **NOT AUTHORIZED** |
| G-D2D-DELIVERY-03 | Delivery D2-D3 | **NOT AUTHORIZED** |

Aucun gate n'est consommé par ce cycle.

---

## I. Definition of Ready globale

Une story future est Ready uniquement si :

1. décisions sources identifiées ;
2. valeur et résultat vérifiable définis ;
3. critères d'acceptation complets ;
4. scénarios négatifs définis ;
5. dépendances satisfaites ;
6. gates nécessaires consommées ;
7. fichiers candidats identifiés ;
8. tests et preuves définis ;
9. aucune décision d'architecture ouverte cachée ;
10. aucune réserve présentée comme levée ;
11. aucun provider live requis sans gate ;
12. aucune estimation ou date inventée ;
13. scope Delivery borné ;
14. **GO Delivery spécifique obtenu**.

---

## J. Definition of Done globale

Une story future est Done uniquement si :

1. résultat vérifiable livré ;
2. tests unitaires/contractuels attendus verts ;
3. scénarios négatifs verts ;
4. invariants de sécurité vérifiés ;
5. aucun secret ou type SDK exposé ;
6. preuves et disclosures produits ;
7. source `fixture`/`sandbox-real`/`real` explicite ;
8. partial ne produit jamais `succeeded` ;
9. documentation utile mise à jour ;
10. CI applicable verte ;
11. réserves mises à jour sans levée implicite ;
12. diff borné ;
13. review pack conforme ;
14. PR readiness et merge = cycles distincts.

---

## K. Epic D2-D1 — Execution Run Core and Contract Foundation

| Champ | Valeur |
|-------|--------|
| **Objectif** | Créer le socle pur, local et fixture-first de l'exécution D2-D |
| **Priorité** | P0 |
| **Profil candidat Delivery** | Critical (structurant) — GO Delivery distinct requis |
| **Contraintes** | Aucune intégration fournisseur réelle · aucun SDK dans domain/application · memory uniquement · aucun claim durable/multi-instance · aucun transport D3 · aucun Cursor live |
| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |


#### D2D1-01 — Canonical execution-run domain vocabulary

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les douze objets fonctionnels adoptés disposent de représentations techniques cohérentes dans le core `execution-run`. |
| **Source decisions** | FD-01 · FA-01/02 · TA-01 · TA-02 |
| **Dépendances** | Aucune (premier résultat D2-D1) |
| **Réserves** | R-QA-REV-01/02 transportées (timestamps plus tard) · R-QA-D2C-01 non levée |
| **Fichiers candidats** | `app/lib/oa/execution-run/domain/**` — CANDIDATE DELIVERY SCOPE — NOT AUTHORIZED |
| **Hors périmètre** | Adapters · providers · UI · persistance durable · Server Actions |

**Critères d'acceptation :**

1. Les 12 objets sont représentés : ExecutionIntent, ExecutionContext, ProviderCapabilityDescriptor, ValidationOutcome, ExecutionRun, ExecutionState, ExternalResult, ExecutionEvidence, SourceDisclosure, HumanDecisionGate, UsageSummary, NormalizedFailure.
2. Aucune dépendance Next/Node/SDK/FS/process/réseau dans domain.
3. Aucune donnée secrète dans les objets.
4. Aucun type provider-specific (OpenAI/GitHub/Cursor SDK).
5. Discriminated unions utilisées lorsque pertinent pour l'état et les résultats.
6. Invariants documentés et testables à la compilation.

**Tests / preuves futures :**

- Tests de compilation TypeScript strict.
- Tests d'invariants de forme (guards unitaires).
- Import-boundary smoke (domain n'importe pas adapters).

**Risques :**

- Domaine parallèle / vocabulaire divergent.
- Fuite de types SDK.


#### D2D1-02 — Runtime schemas and AJV boundary validation

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les frontières non fiables valident les contrats avec JSON Schema/AJV existant (CONTRACT-B). |
| **Source decisions** | CAD-01 · FD-09 · TA-03 · TA-13 |
| **Dépendances** | D2D1-01 |
| **Réserves** | R-QA-D2C-01 OPEN — défense frontière D2-D uniquement |
| **Fichiers candidats** | `execution-run` schemas + reuse doctrine AJV — CANDIDATE |
| **Hors périmètre** | Zod · nouvelle lib · correction D2-C core · live providers |

**Critères d'acceptation :**

1. Schemas JSON = autorité runtime aux frontières non fiables.
2. Types TypeScript = représentation compile-time.
3. Validation **avant** lecture de metadata.
4. Fail-closed sur null, undefined, champs invalides, payloads incomplets.
5. Aucune nouvelle dépendance validation.
6. Conformance types/schemas/fixtures vérifiable.
7. Erreurs normalisées (pas d'exception brute vers D3).

**Tests / preuves futures :**

- Tests AJV sur payloads valides/invalides.
- Tests adversariaux null/undefined.
- Tests de drift type/schema/fixture.

**Risques :**

AJV/types drift · validation après metadata


#### D2D1-03 — Eight-state transition authority

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le core possède une autorité unique et pure des transitions d'état. |
| **Source decisions** | FD-02…07 · FA-03 · TA-04 |
| **Dépendances** | D2D1-01 |
| **Réserves** | — |
| **Fichiers candidats** | `execution-run/domain/executionState.ts` · `executionTransitions.ts` — CANDIDATE |
| **Hors périmètre** | Queue · worker · provider adapters |

**Critères d'acceptation :**

1. Exactement huit états persistants listés.
2. Aucun état STATE-B (`created`/`queued`/`validating`).
3. Table transitions autorisées/refusées explicite.
4. Nouveau run + nouvelle identité après terminal.
5. `blocked` vs `failed` discriminés.
6. `awaiting_human` + timeout humain → `timed_out` / gate manquante → `blocked`.
7. Cancellation terminale ; late result evidence-only (n'altère pas l'état).
8. Fonctions de transition pures ; aucune state-machine dependency externe.

**Tests / preuves futures :**

- Matrice complète transitions (unit).
- Tests late-result / cancel / timeout / human gate.

**Risques :**

State authority dupliquée · partial-as-success


#### D2D1-04 — Read-only policy and normalized failure foundation

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Toute intention incompatible avec les politiques D2-D est refusée de manière normalisée. |
| **Source decisions** | CAD-04 · FD-09 · FA-06 · TA-06 · V erreurs |
| **Dépendances** | D2D1-01 · D2D1-02 |
| **Réserves** | R-QA-D2C-01 OPEN |
| **Fichiers candidats** | `execution-run/domain/executionPolicy.ts` · `executionErrors.ts` — CANDIDATE |
| **Hors périmètre** | Git write story · Cursor live · secret manager |

**Critères d'acceptation :**

1. Git write refusé.
2. Commande arbitraire refusée.
3. Provider indisponible / permission insuffisante / protected path / sandbox blocked normalisés.
4. Erreurs brutes non exposées.
5. Classification retryable explicite.
6. Aucun succès partiel.
7. Codes candidats alignés TA (VALIDATION_ERROR, MUTATION_FORBIDDEN, …) sans adoption d'implémentation.

**Tests / preuves futures :**

- Policy deny matrix tests.
- Normalization tests (raw → NormalizedFailure).

**Risques :**

Git mutation · arbitrary command · secret leakage via erreurs


#### D2D1-05 — Evidence, completeness and source disclosure

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les résultats exposent une preuve, une complétude et une source honnêtes. |
| **Source decisions** | FD-05 · FD-08 · FA-04 · TA-11 |
| **Dépendances** | D2D1-01 · D2D1-03 |
| **Réserves** | R-QA-REV-01 OPEN NOT LIFTED |
| **Fichiers candidats** | `executionEvidence.ts` · `executionDisclosure.ts` — CANDIDATE |
| **Hors périmètre** | Provider live · D3 UI |

**Critères d'acceptation :**

1. Sources `fixture` / `sandbox-real` / `real` obligatoires.
2. Fixture jamais présentée comme réel.
3. Completeness complete/partial explicite.
4. Partial **jamais** `succeeded`.
5. Evidence officielle ≠ résultat provider brut.
6. Timestamps ISO validables (lien R-QA-REV-01).
7. Données sensibles exclues.
8. Late evidence sans mutation d'état.

**Tests / preuves futures :**

- Evidence unit tests.
- Partial-never-succeeded tests.
- Source disclosure mismatch tests.

**Risques :**

Partial-as-success · event leakage · timestamp drift


#### D2D1-06 — ExecutionRunRepository memory adapter

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le core dispose d'un repository port unique et d'un adapter memory déterministe (STORE-B stage 1). |
| **Source decisions** | TA-04 · FA-09 |
| **Dépendances** | D2D1-01 · D2D1-03 |
| **Réserves** | — |
| **Fichiers candidats** | `ports/executionRunRepository.ts` · `infrastructure/memoryExecutionRunRepository.ts` — CANDIDATE |
| **Hors périmètre** | SQLite/Postgres sélection · G-D2D-PERSIST-01 consommé |

**Critères d'acceptation :**

1. Port unique ExecutionRunRepository.
2. ExecutionRunId · correlationId.
3. Nouvelle identité après terminal.
4. save/get nécessaires au slice.
5. Aucune seconde autorité d'état.
6. État process-local **divulgué**.
7. Aucun claim restart-safe / multi-instance.
8. Aucun choix durable implicite.

**Tests / preuves futures :**

- Memory repository unit tests.
- Identity-after-terminal tests.
- Disclosure LOCAL_PROCESS tests.

**Risques :**

Memory state loss · multi-instance claim


#### D2D1-07 — Deterministic contract fixture catalogue

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le catalogue de fixtures couvre les contrats et scénarios nécessaires (fixtures-first). |
| **Source decisions** | CAD-06 · FA-02 (Fixture Catalogue) · TA-13 · AE |
| **Dépendances** | D2D1-02 · D2D1-04 · D2D1-05 |
| **Réserves** | — |
| **Fichiers candidats** | `execution-run` fixtures catalog — CANDIDATE |
| **Hors périmètre** | Live providers · sandbox-real Cursor |

**Critères d'acceptation :**

1. Fixtures : nominal · validation failure · auth failure · provider unavailable · rate limit · timeout · cancellation · blocked gate · protected path · mutation forbidden · partial · invalid provider result · late result · secret redaction · source mismatch.
2. Mêmes schemas que futurs adapters réels.
3. Données déterministes.
4. Aucune clé/donnée sensible.
5. Source déclarée `fixture`.
6. Divergence contrat/fixture détectable.

**Tests / preuves futures :**

- Fixture load + schema validate.
- Determinism tests.
- Secret-absence scan on fixtures.

**Risques :**

Flaky fixtures · secret in fixtures


#### D2D1-08 — Server-only composition and import boundaries

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le core peut être composé côté serveur sans créer un second runtime. |
| **Source decisions** | RUNTIME-C · TA-01 · TA-02 · TA-12 · AB |
| **Dépendances** | D2D1-01…06 |
| **Réserves** | — |
| **Fichiers candidats** | `execution-run/index.ts` · composition root server — CANDIDATE |
| **Hors périmètre** | UI · HTTP route · OPS1 Cursor path |

**Critères d'acceptation :**

1. `execution-run` = seule state authority.
2. `vertical-slice-runtime` = façade/composition seulement.
3. `execution-contract` = pré-exécution seulement.
4. Aucun import client-unsafe dans domain.
5. Aucune Server Action ou route choisie (D3-TECH-C).
6. Aucun adapter provider réel.
7. Tests de frontières d'import identifiés.

**Tests / preuves futures :**

- Import-boundary Vitest.
- Composition smoke in-process sans providers.

**Risques :**

Double runtime · client bundle leak


#### D2D1-09 — D2-D1 slice evidence and readiness pack

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D1 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les preuves permettant de décider la clôture D2-D1 sont définies et reproductibles. |
| **Source decisions** | CAD-01 · TA-14 · AK |
| **Dépendances** | D2D1-01…08 |
| **Réserves** | R-QA-REV-01/02 · R-QA-D2C-01 OPEN |
| **Fichiers candidats** | Review pack Delivery futur — CANDIDATE |
| **Hors périmètre** | Merge Delivery sans PR readiness distincte |

**Critères d'acceptation :**

1. Matrice objets/schemas/tests.
2. Matrice complète transitions.
3. Conformance fixtures.
4. Policy deny tests.
5. Redaction tests.
6. Aucune intégration réelle revendiquée.
7. Réserves transportées.
8. Verdict autorisé candidat : `D2-D1 CONTRACT FOUNDATION VERIFIED`.
9. Verdicts interdits : provider integrated · production-ready · multi-instance ready.

**Tests / preuves futures :**

- Pack de preuves documentaire + CI unit/contract.
- Checklist anti-claims.

**Risques :**

Claim excessif · DoD flou


## L. Epic D2-D2 — Provider Boundaries and Controlled Read-only Adapters

| Champ | Valeur |
|-------|--------|
| **Objectif** | Brancher progressivement les capacités externes read-only derrière les contrats D2-D |
| **Priorité** | P1 |
| **Précondition** | D2-D1 validé |
| **Contraintes** | Wrappers uniquement · pas de SDK vers domaine/application/D3 · pas de Git write · pas de Cursor live sans gate · pas de live CI défaut |
| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |


#### D2D2-01 — Provider port conformance harness

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | AI, Git et Cursor peuvent être évalués derrière une même discipline de contrats, erreurs, cancellation, evidence et disclosures. |
| **Source decisions** | FA-05 · TA-06 · REUSE-B |
| **Dépendances** | D2-D1 stable (surtout D2D1-02/04/05) |
| **Réserves** | — |
| **Fichiers candidats** | `ports/aiExecutionPort.ts` · `gitReadPort.ts` · `cursorExecutionPort.ts` — CANDIDATE |
| **Hors périmètre** | Live CI · rewrite non justifié |

**Critères d'acceptation :**

1. Ports provider-independent.
2. Fake et real adapters conformes aux mêmes contrats.
3. Contract-fit observable.
4. Incompatibilité explicite.
5. Targeted rewrite permis si échec.
6. Aucun fallback silencieux.

**Tests / preuves futures :**

- Conformance suite fake ports.
- Contract-fit report format.

**Risques :**

Provider lock-in · silent fallback


#### D2D2-02 — AI-B platform adapter

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | La capacité AI existante est accessible via un wrapper D2-D (AI-B). |
| **Source decisions** | TA-07 · platform AI OBSERVATION |
| **Dépendances** | D2D2-01 · D2D1-02 · D2D1-05 · D2D2-04 |
| **Réserves** | — |
| **Fichiers candidats** | `infrastructure` AI wrapper — CANDIDATE DELIVERY SCOPE |
| **Hors périmètre** | Nouveau SDK · modèle hardcodé · live default CI |

**Critères d'acceptation :**

1. Wrapper autour de platform AI.
2. Modèle configurable (pas hardcodé).
3. Secret server-only.
4. Sortie validée.
5. Usage exposé uniquement si validé.
6. Timeout/cancel normalisés.
7. Aucun prompt/résultat complet dans events/D3.
8. Fake provider pour CI.
9. Live opt-in uniquement.

**Tests / preuves futures :**

- Fake AI conformance.
- Redaction tests.
- Live opt-in hors CI défaut.

**Risques :**

Prompt leakage · live flaky


#### D2D2-03 — GIT-C read-only adapter

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | La Git Truth distante peut être lue derrière un port transport-neutral strictement read-only. |
| **Source decisions** | TA-08 · CAD-04 · CAD-08 |
| **Dépendances** | D2D2-01 · D2D1-04 · D2D1-05 · D2D2-04 |
| **Réserves** | — |
| **Fichiers candidats** | Wrapper `GithubReadPort` — CANDIDATE |
| **Hors périmètre** | Git write · PAT production default · silent REST fallback |

**Critères d'acceptation :**

1. Read-only strict ; aucune méthode write.
2. Repository allowlist.
3. Refs/paths validés.
4. Timeout · rate-limit normalisé · redaction.
5. Transport divulgué.
6. `gh` local/sandbox possible.
7. REST/GitHub App **non sélectionné** sans décision distincte.
8. Aucun fallback silencieux.
9. PAT ≠ défaut production.

**Tests / preuves futures :**

- Allowlist deny tests.
- Transport disclosure tests.
- Write-surface absence tests.

**Risques :**

Git mutation · auth leakage · CLI unavailable


#### D2D2-04 — SECRET-B source boundary

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les adapters obtiennent des secrets via une frontière opaque (SECRET-B). |
| **Source decisions** | TA-10 · CAD-08 |
| **Dépendances** | D2D1-04/05 |
| **Réserves** | — |
| **Fichiers candidats** | `ports/secretSourcePort.ts` · env adapter — CANDIDATE |
| **Hors périmètre** | Secret manager sélection · valeurs dans events |

**Critères d'acceptation :**

1. SecretSourcePort.
2. Adapter env local contrôlé.
3. Aucune valeur sérialisable.
4. Aucune valeur dans domaine/events/evidence/fixtures/D3.
5. Secret absent/expiré/révoqué normalisé.
6. Aucune techno secret manager adoptée.

**Tests / preuves futures :**

- Opaque handle tests.
- Redaction scan.
- Missing-secret failure normalization.

**Risques :**

Secret leakage


#### D2D2-05 — EVENT-B execution event adapter

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les événements D2-D sont adaptés vers l'EventSink existant (EVENT-B). |
| **Source decisions** | TA-11 · FD-10 · CAD-09 |
| **Dépendances** | D2D1-03 · D2D1-05 |
| **Réserves** | R-QA-REV-01 OPEN · R-QA-REV-02 OPEN |
| **Fichiers candidats** | `ports/executionEventSink.ts` · adapter EventSink — CANDIDATE |
| **Hors périmètre** | Nouveau bus · prix inventé · prompt complet |

**Critères d'acceptation :**

1. Sémantique D2-D au port ; transport platform.
2. Champs : correlationId · runId · transitions · validation · gate · cancel · timeout · late result · completeness · source · usage validé.
3. Redaction stricte.
4. Timestamp ISO validé.
5. R-QA-REV-01/02 restent OPEN jusqu'aux preuves.
6. Aucun RUN-ready/SLO.

**Tests / preuves futures :**

- Event schema tests.
- Redaction tests.
- Timestamp validation tests (REV-01).

**Risques :**

Event leakage · timestamp drift · dual catalogues


#### D2D2-06 — Async, timeout, cancellation and late-result handling

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les opérations provider suivent ASYNC-B de manière déterministe. |
| **Source decisions** | TA-05 · FD-07 · Y |
| **Dépendances** | D2D1-03 · D2D1-06 |
| **Réserves** | — |
| **Fichiers candidats** | `application/executionCoordinator.ts` — CANDIDATE |
| **Hors périmètre** | ASYNC-C queue · SLO inventé |

**Critères d'acceptation :**

1. Promise + AbortSignal.
2. Timeout opérationnel et global configurables.
3. Aucune durée production inventée.
4. Cancellation best-effort provider.
5. État terminal local autoritatif.
6. Résultat tardif evidence-only.
7. Retries uniquement sur erreurs classées ; aucun retry infini.
8. Aucune queue ou worker permanent.

**Tests / preuves futures :**

- Cancel/timeout/late-result unit+integration-in-process tests.

**Risques :**

Cancellation race · late result race · queue prématurée


#### D2D2-07 — D2-D adversarial input boundary

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | La frontière D2-D refuse tout payload invalide avant exploitation de metadata. |
| **Source decisions** | CAD-10 · TA-13 · R-C · Z |
| **Dépendances** | D2D1-02 · D2D1-04 |
| **Réserves** | R-QA-D2C-01 OPEN NOT LIFTED |
| **Fichiers candidats** | Policy/validation boundary — CANDIDATE |
| **Hors périmètre** | Story D2-C correction · reserve lift |

**Critères d'acceptation :**

1. Validation avant metadata.
2. null/undefined · payload partiel · enums invalides · tailles hors limites · champs interdits.
3. Aucune exception brute.
4. Aucun résultat partiel exploitable.
5. R-QA-D2C-01 **non levée**.
6. Correction du core D2-C **exclue** (G-D2D-D2C-01).

**Tests / preuves futures :**

- Adversarial suite.
- Metadata-access-order tests.

**Risques :**

R-QA-D2C-01 · partial exploit


#### D2D2-08 — Sandbox and protected-path contract without live Cursor

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les exigences de sandbox et de chemins protégés sont testables sans supposer Cursor compatible. |
| **Source decisions** | CAD-07 · TA-09 · U |
| **Dépendances** | D2D1-04 · D2D2-01 |
| **Réserves** | CURSOR PRODUCT CAPABILITIES UNVERIFIED |
| **Fichiers candidats** | Reuse platform/security + harness patterns — CANDIDATE |
| **Hors périmètre** | Live Cursor · G-D2D-CURSOR-01 consommé |

**Critères d'acceptation :**

1. Allowlist · deny-by-default · protected paths.
2. Aucune commande navigateur.
3. Aucune remote Git mutation.
4. Branch/head anchors.
5. Timeout.
6. Fixture adapter.
7. Aucun claim sandbox secure.
8. Cursor reste UNVERIFIED.

**Tests / preuves futures :**

- Path policy tests.
- Fixture sandbox contract tests.

**Risques :**

Sandbox escape claim · Cursor compatibility claim


#### D2D2-09 — Cursor adapter eligibility gate

| Champ | Valeur |
|-------|--------|
| **Type** | EXTERNAL GATE LINK — NOT A DELIVERY STORY |
| **Slice** | D2-D2 |
| **Statut** | BLOCKED — DISTINCT MORRIS GATE REQUIRED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le backlog identifie les preuves nécessaires avant toute story Cursor live. |
| **Source decisions** | TA-09 · G-D2D-CURSOR-01 |
| **Dépendances** | G-D2D-CURSOR-01 |
| **Réserves** | CURSOR UNVERIFIED |
| **Fichiers candidats** | N/A — gate documentation only |
| **Hors périmètre** | Cursor live adapter Delivery |

**Critères d'acceptation :**

1. Référence G-D2D-CURSOR-01.
2. Capabilities exactes à vérifier.
3. Disponibilité environnement.
4. Process boundary.
5. Cancellation · sandbox · preuves.
6. Aucune implémentation live dans D2-D2 sans GO distinct.

**Tests / preuves futures :**

- Gate checklist (non exécutée dans ce cycle).

**Risques :**

Live without gate


#### D2D2-10 — D2-D2 slice conformance and evidence pack

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D2 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Les wrappers read-only peuvent être évalués sans claim excessif. |
| **Source decisions** | TA-14 · L |
| **Dépendances** | D2D2-01…08 |
| **Réserves** | R-QA-REV-01/02 · R-QA-D2C-01 · Cursor UNVERIFIED |
| **Fichiers candidats** | Evidence pack — CANDIDATE |
| **Hors périmètre** | Cursor live · production-ready |

**Critères d'acceptation :**

1. AI fake conformance.
2. Git read conformance.
3. SecretSource redaction.
4. Events.
5. Timeout/cancel.
6. Adversarial boundary.
7. Sandbox contract.
8. Source disclosure.
9. Aucun live default CI.
10. Réserves visibles · Cursor UNVERIFIED.

**Tests / preuves futures :**

- Slice evidence pack + CI fake suites.

**Risques :**

Claim excessif


## M. Epic D2-D3 — End-to-end Read-only Coordination and Strong Evidence

| Champ | Valeur |
|-------|--------|
| **Objectif** | Prouver une coordination end-to-end read-only et provider-independent |
| **Priorité** | P2 |
| **Préconditions** | D2-D1 et D2-D2 validés |
| **Contraintes** | Aucun Git write · aucun D3 UI · aucun transport D3 sélectionné · Cursor sandbox-real soumis au gate · aucune durabilité/multi-instance sans décision |
| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |


#### D2D3-01 — End-to-end execution coordination

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Une intention validée traverse intake, policy, state, provider boundary, evidence et events jusqu'à un résultat normalisé. |
| **Source decisions** | FA-02/03/04 · TA-01 · TA-14 |
| **Dépendances** | D2-D1 + D2-D2 validés |
| **Réserves** | — |
| **Fichiers candidats** | Coordinator composition — CANDIDATE |
| **Hors périmètre** | UI · write · Cursor live sans gate |

**Critères d'acceptation :**

1. Ordre des autorités respecté.
2. Aucune mutation d'état par provider.
3. Aucune décision Morris automatisée.
4. Fixture nominale.
5. Provider read-only réel seulement si gate applicable.
6. Erreurs normalisées · source explicite · partial jamais succeeded.

**Tests / preuves futures :**

- E2E fixture path.
- Authority-order tests.

**Risques :**

Double runtime · provider mutates state


#### D2D3-02 — Provider-independent server projection

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Une façade application transport-neutral expose une projection D3 provider-independent (D3-TECH-C). |
| **Source decisions** | FD-11 · FA-08 · TA-12 |
| **Dépendances** | D2D3-01 · D2D1-05 |
| **Réserves** | — |
| **Fichiers candidats** | `executionProjection.ts` · server facade — CANDIDATE |
| **Hors périmètre** | UI Delivery · route selection |

**Critères d'acceptation :**

1. Champs : runId · état · source · progression · completeness · result redacted · failure redacted · blocked reason · human gate · evidence summary · usage validé · réserves · readiness.
2. Aucun SDK object · secret · erreur brute · commande · Git write.
3. Aucun Server Action/HTTP transport choisi.

**Tests / preuves futures :**

- Projection shape tests.
- Leakage absence tests.

**Risques :**

D3 provider leakage · transport premature


#### D2D3-03 — End-to-end evidence and truthfulness

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le parcours permet de distinguer sans ambiguïté fixture, sandbox-real et real. |
| **Source decisions** | FD-08 · FA-04 · TA-11 |
| **Dépendances** | D2D3-01 · D2D1-05 · D2D2-05 |
| **Réserves** | R-QA-REV-01 OPEN |
| **Fichiers candidats** | Evidence pipeline — CANDIDATE |
| **Hors périmètre** | Production-ready claim |

**Critères d'acceptation :**

1. Evidence officielle · provider result distinct · digest/id · timestamps validés · completeness · source · late evidence · usage validé.
2. Aucune donnée sensible.
3. Fixture jamais présentée comme réel.

**Tests / preuves futures :**

- Source truthfulness suite.
- Late evidence tests.

**Risques :**

Source spoof · sensitive data leak


#### D2D3-04 — Cursor sandbox-real proof

| Champ | Valeur |
|-------|--------|
| **Type** | BLOCKED ENABLER CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | BLOCKED — CURSOR PRODUCT CAPABILITIES UNVERIFIED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Une exécution Cursor sandbox-real read-only produit une preuve conforme. |
| **Source decisions** | TA-09 · CAD-07 · G-D2D-CURSOR-01 |
| **Dépendances** | G-D2D-CURSOR-01 consommé · sandbox contract · branch/head anchors · aucune remote Git write · gate Morris revalidée |
| **Réserves** | CURSOR PRODUCT CAPABILITIES UNVERIFIED |
| **Fichiers candidats** | CursorExecutionPort adapter — BLOCKED |
| **Hors périmètre** | Live without GO · client import harness |

**Critères d'acceptation :**

1. Préconditions gate listées et satisfaites.
2. Preuve conforme (evidence + source `sandbox-real`).
3. Aucune remote Git write.
4. Pas de claim sandbox secure sans preuve.

**Tests / preuves futures :**

- Opt-in sandbox-real harness (hors CI défaut) — seulement après gate.

**Risques :**

Cursor incompatibility · sandbox escape


#### D2D3-05 — Strong-runtime environment and persistence gate

| Champ | Valeur |
|-------|--------|
| **Type** | EXTERNAL GATE LINK — NOT A DELIVERY STORY |
| **Slice** | D2-D3 |
| **Statut** | BLOCKED — G-D2D-PERSIST-01 |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le backlog rend explicites les décisions nécessaires avant tout claim restart-safe ou multi-instance. |
| **Source decisions** | TA-04 · TA-05 · G-D2D-PERSIST-01 · AC |
| **Dépendances** | G-D2D-PERSIST-01 |
| **Réserves** | — |
| **Fichiers candidats** | N/A — gate documentation |
| **Hors périmètre** | STORE-C adoption · queue worker |

**Critères d'acceptation :**

1. Environnement cible identifié.
2. Process lifetime évalué.
3. ASYNC-B réévalué.
4. Persistance durable décidée si nécessaire.
5. Locking/concurrency · cancellation après restart évalués.
6. Aucune technologie sélectionnée dans ce backlog.

**Tests / preuves futures :**

- Decision pack futur (hors cycle).

**Risques :**

Multi-instance claim · premature durable store


#### D2D3-06 — End-to-end negative and resilience scenarios

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Le parcours end-to-end prouve les comportements d'échec. |
| **Source decisions** | FD-09 · TA-13 · AE |
| **Dépendances** | D2D3-01 · D2D2-06/07 · D2D1-07 |
| **Réserves** | — |
| **Fichiers candidats** | Test suites — CANDIDATE |
| **Hors périmètre** | Live-only negatives |

**Critères d'acceptation :**

1. Couvrir : validation failure · auth failure · provider unavailable · rate limit · timeout · cancellation · blocked gate · invalid result · partial · late result · secret redaction · source mismatch · protected path · mutation forbidden.
2. Chaque scénario : état attendu · evidence · disclosure · pas de succeeded partiel.

**Tests / preuves futures :**

- E2E negative suite (fixtures first).

**Risques :**

Incomplete negative coverage


#### D2D3-07 — D2-D3 strong evidence readiness review

| Champ | Valeur |
|-------|--------|
| **Type** | STORY CANDIDATE |
| **Slice** | D2-D3 |
| **Statut** | STORY CANDIDATE — NOT ADOPTED |
| **Estimation** | NOT ESTIMATED |
| **Valeur / résultat** | Un pack de preuves permet à Morris de distinguer les niveaux de readiness (FD-12). |
| **Source decisions** | FD-12 · CAD-12 · TA-14 |
| **Dépendances** | D2D3-01…03 · D2D3-06 · gates applicables pour niveaux élevés |
| **Réserves** | R-QA-* OPEN · Cursor UNVERIFIED |
| **Fichiers candidats** | Readiness pack — CANDIDATE |
| **Hors périmètre** | D3 Delivery · RUN READY |

**Critères d'acceptation :**

1. Niveaux : UX exploration · UI Delivery · strong runtime verdict.
2. Preuves de chaque niveau.
3. Absence de claim si preuve manquante.
4. Cursor UNVERIFIED si gate non consommé.
5. Persistance/multi-instance non revendiquées sans décision.
6. Réserves transportées.
7. Aucun verdict production-ready ou RUN READY.

**Tests / preuves futures :**

- Readiness matrix document + evidence checklist.

**Risques :**

Premature readiness claim


## N. Matrice de dépendances

| Story | Dépend de |
|-------|-----------|
| D2D1-01 | — |
| D2D1-02 | D2D1-01 |
| D2D1-03 | D2D1-01 |
| D2D1-04 | D2D1-01 · D2D1-02 |
| D2D1-05 | D2D1-01 · D2D1-03 |
| D2D1-06 | D2D1-01 · D2D1-03 |
| D2D1-07 | D2D1-02 · D2D1-04 · D2D1-05 |
| D2D1-08 | D2D1-01…06 |
| D2D1-09 | D2D1-01…08 |
| D2D2-* (toutes) | Stabilité contrats D2-D1 pertinents |
| D2D2-02 | D2D2-01 · D2D1-02/05 · D2D2-04 |
| D2D2-03 | D2D2-01 · D2D1-04/05 · D2D2-04 |
| D2D2-05 | D2D1-03/05 |
| D2D2-06 | D2D1-03/06 |
| D2D2-07 | D2D1-02/04 |
| D2D2-09 | **G-D2D-CURSOR-01** |
| D2D2-10 | D2D2-01…08 |
| D2D3-* | D2-D1 + D2-D2 validés |
| D2D3-04 | **G-D2D-CURSOR-01** |
| D2D3-05 | **G-D2D-PERSIST-01** |
| Strong runtime verdict | D2D3-04/05 si requis par le niveau de claim |

---

## O. Ordre de réalisation candidat

Fondé uniquement sur les dépendances — **NOT ESTIMATED** — aucune date/sprint :

1. D2D1-01
2. D2D1-02
3. D2D1-03
4. D2D1-04
5. D2D1-05
6. D2D1-06
7. D2D1-07
8. D2D1-08
9. D2D1-09
10. **Validation D2-D1** puis D2-D2 (D2D2-01 → … → D2D2-10 ; D2D2-09 reste BLOCKED)
11. **Validation D2-D2** + gates applicables puis D2-D3 (D2D3-01…07 ; 04/05 BLOCKED tant que gates absents)

Toute modification d'ordre doit rester justifiée par les dépendances.

---

## P. Matrice de couverture des décisions

| Décision | Couverture backlog |
|----------|-------------------|
| CAD-01 Minimal Foundation | D2D1-* |
| CAD-04 Read-only / D2-D4 out | D2D1-04 · D2D2-03 · **aucune story D2-D4** |
| CAD-05/FD-02 États | D2D1-03 |
| CAD-06 Fixtures first | D2D1-07 |
| CAD-07 Sandbox / Cursor UNVERIFIED | D2D2-08 · D2D2-09 · D2D3-04 |
| CAD-08 Secrets | D2D2-04 |
| CAD-09 Events | D2D2-05 |
| CAD-10 R-C | D2D2-07 · G-D2D-D2C-01 |
| CAD-11/FA-11/TA-14 Slicing | Épics K/L/M · ordre O |
| FD-01 12 objets | D2D1-01 |
| FD-05 Partial | D2D1-05 · D2D3-06 |
| FD-07 Cancel/late | D2D1-03 · D2D2-06 |
| FD-08 Sources | D2D1-05 · D2D3-03 |
| FD-09 Failures | D2D1-04 · D2D3-06 |
| FD-11/FA-08 D3 indep. | D2D3-02 |
| FD-12 Readiness levels | D2D3-07 |
| FA-03 State authority | D2D1-03 · D2D1-08 |
| FA-04 Evidence authority | D2D1-05 |
| FA-05 Provider boundary | D2D2-01 |
| FA-06 Policy | D2D1-04 |
| FA-09 RUNTIME-C | D2D1-08 |
| FA-10 REUSE-B | D2D2-01…03 |
| TA-01 TECH-RUN-B | D2D1-08 |
| TA-02 Layering | D2D1-01/08 |
| TA-03 CONTRACT-B | D2D1-02 |
| TA-04 STORE-B | D2D1-06 · G-D2D-PERSIST-01 |
| TA-05 ASYNC-B | D2D2-06 |
| TA-06 Wrappers | D2D2-01 |
| TA-07 AI-B | D2D2-02 |
| TA-08 GIT-C | D2D2-03 |
| TA-09 CURSOR-B | D2D2-09 · D2D3-04 |
| TA-10 SECRET-B | D2D2-04 |
| TA-11 EVENT-B | D2D2-05 |
| TA-12 D3-TECH-C | D2D3-02 |
| TA-13 Fixtures/adversarial | D2D1-07 · D2D2-07 |
| TA-14 Slicing | G · O · BLG |

**D2-D4 :** explicitement **sans story**.

---

## Q. Matrice de couverture des risques

| Risque | Stories / gates | Mitigation | Preuve future | Statut |
|--------|-----------------|------------|---------------|--------|
| Double runtime | D2D1-08 | state authority unique | import-boundary | ouvert |
| Type/schema drift | D2D1-02 · D2D1-07 | conformance | CI | ouvert |
| State authority dupliquée | D2D1-03/08 | interdit AB | tests | ouvert |
| Memory state loss | D2D1-06 · G-D2D-PERSIST-01 | disclosures | docs | ouvert |
| Provider lock-in | D2D2-01 | ports | contract-fit | ouvert |
| Secret leakage | D2D2-04 | opaque + redaction | scans | ouvert |
| Git mutation | D2D2-03 · D2D1-04 | read-only surface | tests | ouvert |
| Arbitrary command | D2D1-04 · D2D2-08 | deny-by-default | tests | ouvert |
| Sandbox escape | D2D2-08 · D2D3-04 | allowlist + gate | tests | UNVERIFIED Cursor |
| Cursor incompatibility | D2D2-09 · D2D3-04 | G-D2D-CURSOR-01 | capability GO | UNVERIFIED |
| Event leakage | D2D2-05 | redaction | tests | ouvert |
| Partial-as-success | D2D1-05 · D2D3-06 | Evidence authority | tests | ouvert |
| Timeout/cancel race | D2D2-06 | AbortSignal + terminal local | tests | ouvert |
| Late result race | D2D1-03 · D2D2-06 | evidence-only | tests | ouvert |
| Provider/D3 leakage | D2D3-02 | DTO rules | leakage tests | ouvert |
| Multi-instance claim | D2D1-06 · D2D3-05 | claims bornés | gate | BLOCKED claim |
| Live tests flaky | D2D2-02/10 | live hors CI | policy | ouvert |
| R-QA-D2C-01 | D2D2-07 · G-D2D-D2C-01 | R-C two lines | adversarial | OPEN |
| R-QA-REV-01 | D2D2-05 · D2D1-05 | ISO timestamps | tests | OPEN |
| R-QA-REV-02 | D2D2-05 | conserve | docs | OPEN |

---

## R. Fichiers candidats par story

Référence candidate (non autorisée) :

```text
projects/sfia-studio/app/lib/oa/execution-run/
  domain/
  application/
  ports/
  infrastructure/
  index.ts
```

Wrappers candidats : `platform/ai` · `platform/repository` · `platform/observability` · `platform/security` · `infrastructure` du core · patterns harness (extract/wrapper uniquement).

**Marqueur :** `CANDIDATE DELIVERY SCOPE — NOT AUTHORIZED BY THIS BACKLOG CYCLE.`

Une meilleure réutilisation conforme au repo peut remplacer un chemin candidat en Delivery, sans redécider TA.

---

## S. Critères d'acceptation du backlog (ce cycle)

- [x] Trois épics distincts
- [x] Stories requises présentes
- [x] Une story = un résultat vérifiable
- [x] Critères observables + scénarios négatifs
- [x] Dépendances · gates · réserves · preuves
- [x] DoR/DoD
- [x] Ordre sans dates
- [x] D2-D4 sans story
- [x] Cursor UNVERIFIED
- [x] D2-C correction séparée
- [x] Persistance durable non sélectionnée
- [x] Aucun code · aucune Delivery autorisée
- [x] Aucun claim production-ready
- [x] Aucune décision TA redécidée
- [x] BLG-01…08 NOT DECIDED

---

## T. Decision pack Morris — D-V3.1-D2D-BLG-01…08

> **Statut commun :** `NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED`

### D-V3.1-D2D-BLG-01 — Structure à trois épics

- **Question :** Adopter D2-D1 / D2-D2 / D2-D3 comme structure de backlog ?
- **Options :** (1) trois épics (2) epic unique (3) fusion D1+D2
- **Recommandation candidate :** trois épics (TA-14)
- **Impacts :** clarté des GO Delivery futurs
- **Risques :** sous-estimer dépendances inter-épics
- **Dette / réversibilité :** haute pré-Delivery
- **Dépendances :** TA-14
- **Réserves :** —
- **Gate suivante :** BLG arbitration
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-02 — Catalogue D2-D1

- **Question :** Adopter D2D1-01…09 ?
- **Recommandation candidate :** oui
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-03 — Catalogue D2-D2

- **Question :** Adopter D2D2-01…10 (avec D2D2-09 = gate link) ?
- **Recommandation candidate :** oui
- **Réserves :** Cursor UNVERIFIED
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-04 — Catalogue D2-D3

- **Question :** Adopter D2D3-01…07 (04/05 BLOCKED) ?
- **Recommandation candidate :** oui
- **Gates :** G-D2D-CURSOR-01 · G-D2D-PERSIST-01
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-05 — DoR / DoD globaux

- **Question :** Adopter DoR §I et DoD §J ?
- **Recommandation candidate :** oui
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-06 — Ordre et dépendances

- **Question :** Adopter matrice N et ordre O ?
- **Recommandation candidate :** oui
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-07 — Registre de gates

- **Question :** Adopter G-D2D-CURSOR-01 · G-D2D-D2C-01 · G-D2D-PERSIST-01 · G-D2D-DELIVERY-01/02/03 ?
- **Recommandation candidate :** oui
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-08 — Trajectoire

- **Question :** Adopter trajectoire validation → publication → post-merge → GO Delivery D2-D1 uniquement ?
- **Recommandation candidate :** oui
- **Gate suivante :** après BLG + publication + merge + post-merge : GO Delivery D2-D1
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

---

## U. Trajectoire candidate

1. Validation Morris du backlog (BLG-01…08).
2. Publication documentaire du document 24.
3. PR readiness documentaire.
4. Merge documentaire.
5. Validation post-merge.
6. **GO Delivery D2-D1** distinct.
7. QA et PR readiness D2-D1.
8. **GO Delivery D2-D2** après clôture D2-D1.
9. **GO Delivery D2-D3** après clôture D2-D2 et gates applicables.

Aucune ouverture automatique. Aucun GO Delivery consommé ici.

---

## V. Anti-claims

Ce document **n'autorise pas** et **ne revendique pas** :

- backlog adopted · stories approved · Delivery authorized · D2-D1 ready for implementation
- provider integrated · Cursor compatible · Cursor verified · sandbox secure
- D2-C reserve lifted · durable store selected · restart-safe · multi-instance ready
- production-ready · RUN READY · D3 ready · Git write enabled · CreateCycle enabled · method promoted

---

## W. Verdict documentaire

```text
D2-D BACKLOG COMPLETE LOCALLY WITH RESERVES —

MAIN POST-MERGE BASE VERIFIED —
DOCUMENTS 20 / 21 / 22 / 23 APPLIED —
D-CAD-01…12 APPLIED —
D-FD-01…12 APPLIED —
D-FA-01…12 APPLIED —
D-TA-01…14 APPLIED —

D2-D1 EPIC AND STORIES DOCUMENTED —
D2-D2 EPIC AND STORIES DOCUMENTED —
D2-D3 EPIC AND STORIES DOCUMENTED —
D2-D4 WRITE OUT OF TRAJECTORY —

DEFINITIONS OF READY AND DONE DOCUMENTED —
DEPENDENCIES DOCUMENTED —
GATES DOCUMENTED —
RISKS AND RESERVES TRANSPORTED —
TEST AND EVIDENCE EXPECTATIONS DOCUMENTED —
BLG-01…08 READY FOR MORRIS VALIDATION —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

NO BACKLOG DECISION ADOPTED —
NO DELIVERY AUTHORIZED —
NO CODE —
NO CONFIG —
NO DEPENDENCY CHANGE —
NO PROVIDER LIVE —
NO CURSOR CAPABILITY VERIFICATION —
NO D2-C CORRECTION —
NO UI —
NO D3 DELIVERY —
NO CREATECYCLE —
NO PRODUCT GIT WRITE CAPABILITY —
NO METHOD PROMOTION —

READY FOR MORRIS BACKLOG VALIDATION
```

---

## X. Prochaine gate candidate

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D BACKLOG
APPLY D-V3.1-D2D-BLG-01…08
```

Après arbitrage uniquement :

```text
GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG
```

Ne pas proposer immédiatement : GO DELIVERY D2-D1 / D2-D2 / D2-D3.
`````

## 24. Diff complet (document 24 vs /dev/null)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
new file mode 100644
index 0000000..b179493
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
@@ -0,0 +1,1472 @@
+# 24 — SFIA Studio V3.1-D2-D Integration Foundation — Backlog / user stories
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `24-v3-1-d2-d-integration-foundation-backlog.md` |
+| **Date/heure** | 2026-08-03 21:02 CEST (+0200) |
+| **Cycle** | Cycle 5 — Backlog / user stories |
+| **Profil** | Standard |
+| **Typologie** | DOC |
+| **Branche locale** | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
+| **Base Git** | `main@9231858a82a252c0bea5bdd60256cee480eebb87` |
+| **GO Morris** | `GO BACKLOG SFIA STUDIO V3.1-D2-D1 / D2-D2 / D2-D3` (2026-08-03 20:46 CEST) |
+| **Documents amont (immutables)** | [20](./20-v3-1-d2-d-integration-foundation-cadrage.md) · [21](./21-v3-1-d2-d-integration-foundation-functional-design.md) · [22](./22-v3-1-d2-d-integration-foundation-functional-architecture.md) · [23](./23-v3-1-d2-d-integration-foundation-technical-architecture.md) |
+| **Précédent structure (non copié)** | [19](./19-v3-1-d2-a-b-c-delivery-backlog.md) — conventions de présentation uniquement |
+| **CKC** | Fallback `02-fifteen-cycles-synthetic-map.md` + §4.5 — method-candidate — **aucune autorité d'exécution** |
+| **Code / tests / config exécutés** | **non** |
+| **Statut** | `D2-D BACKLOG COMPLETE LOCALLY — READY FOR MORRIS BACKLOG VALIDATION — NO DELIVERY AUTHORIZED` |
+
+---
+
+## B. Règles de lecture
+
+| Marqueur | Signification |
+|----------|---------------|
+| **ADOPTED** | Décision Morris CAD/FD/FA/TA déjà adoptée |
+| **OBSERVATION** | Fait Git vérifié |
+| **STORY CANDIDATE** | Story Delivery proposée — **NOT ADOPTED** |
+| **ENABLER CANDIDATE** | Enabler technique proposé — **NOT ADOPTED** |
+| **EXTERNAL GATE** | Gate humaine/technique distincte — **NOT CONSUMED** |
+| **RESERVE** | Réserve ouverte, non levée |
+| **BLOCKED** | Story/enabler non Ready sans gate |
+| **READY CANDIDATE** | Peut devenir Ready après DoR + GO Delivery |
+| **NOT ESTIMATED** | Aucune charge/date/story point inventée |
+| **MORRIS VALIDATION REQUIRED** | Décision backlog BLG non encore prise |
+
+Aucune story candidate n'est un backlog adopté. Aucune Delivery n'est autorisée par ce document.
+
+---
+
+## C. Baseline et décisions héritées
+
+### C.1 Baseline Git (OBSERVATION)
+
+| Élément | Valeur |
+|---------|--------|
+| main | `9231858a82a252c0bea5bdd60256cee480eebb87` |
+| PR amont | #306 MERGED |
+| Document 23 | sur main · hash `6dd45467…` · package `c69f1709…` |
+| CI main | `30841765663` success |
+
+### C.2 Décisions ADOPTED (appliquées sans réinterprétation)
+
+| Pack | Statut |
+|------|--------|
+| D-CAD-01…12 | ADOPTED |
+| D-FD-01…12 | ADOPTED |
+| D-FA-01…12 | ADOPTED |
+| D-TA-01…14 | ADOPTED |
+
+### C.3 Contraintes centrales (ADOPTED)
+
+1. Ordre D2-D1 → D2-D2 → D2-D3.
+2. D2-D4 write **hors trajectoire**.
+3. Core OA `execution-run` = seule autorité technique d'état.
+4. `vertical-slice-runtime` = façade/composition server-only.
+5. `execution-contract` = gouvernance pré-exécution.
+6. Couches domain / application / ports / adapters / server composition.
+7. CONTRACT-B : TypeScript compile-time + JSON Schema/AJV runtime.
+8. Huit états : `idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled` · `timed_out` · `blocked`.
+9. Repository port unique ; memory OK en D2-D1.
+10. ASYNC-B pour D2-D1/D2-D2.
+11. Wrappers provider REUSE-B ; AI-B ; GIT-C read-only ; CURSOR-B conditionnel ; SECRET-B ; EVENT-B ; D3-TECH-C.
+12. Fixtures-first ; validation avant metadata ; pas de live CI par défaut.
+13. Aucun SDK/secret vers domaine, events, evidence, fixtures, D3.
+
+### C.4 Réserves et capacités (RESERVE)
+
+| ID | Statut |
+|----|--------|
+| R-QA-REV-01 MINOR | OPEN NOT LIFTED |
+| R-QA-REV-02 MINOR | OPEN NOT LIFTED |
+| R-QA-D2C-01 MINOR | OPEN NOT LIFTED |
+| CURSOR PRODUCT CAPABILITIES | UNVERIFIED |
+
+---
+
+## D. Finalité du backlog
+
+Transformer les décisions D2-D en unités de Delivery vérifiables, **sans** redécider l'architecture et **sans** ouvrir automatiquement la Delivery.
+
+---
+
+## E. Périmètre et hors périmètre
+
+### Périmètre
+
+Épics · stories · enablers · critères · tests futurs · dépendances · priorités · gates · DoR · DoD · réserves.
+
+### Hors périmètre
+
+Code · configuration · dépendances · CI · provider live · Cursor live · correction D2-C · UI · transport D3 · persistance durable · déploiement · RUN readiness · estimation équipe · publication Git projet · CreateCycle · D2-D4 write · méthode.
+
+---
+
+## F. Principes de découpage
+
+1. Une story = un résultat vérifiable.
+2. Slice unique principale.
+3. Dépendances explicites.
+4. Gates séparées des stories Delivery.
+5. Aucun scope caché.
+6. Fixtures avant réel.
+7. Read-only first.
+8. Evidence before success.
+9. Partial never succeeded.
+10. Aucun claim au-delà des preuves.
+11. Aucun fournisseur exposé à D3.
+12. Aucun second runtime / double state authority.
+13. INVEST pragmatique ; **NOT ESTIMATED**.
+14. Pas de dates, sprints, story points ou engagements inventés.
+
+---
+
+## G. Vue d'ensemble
+
+| Slice | Objectif | Priorité candidate | Entrée | Sortie | Dépendances | Gates | Claims autorisés | Claims interdits |
+|-------|----------|--------------------|--------|--------|-------------|-------|------------------|------------------|
+| **D2-D1** | Socle contrats + core local | P0 | Docs 20–23 ; TA adoptées | Contract foundation verified (candidate) | — | G-D2D-DELIVERY-01 | D2-D1 CONTRACT FOUNDATION VERIFIED | provider integrated · production-ready · multi-instance |
+| **D2-D2** | Wrappers et frontières read-only | P1 | D2-D1 validé | Conformance wrappers (candidate) | D2-D1 | G-D2D-DELIVERY-02 · G-D2D-CURSOR-01 (pour live) · G-D2D-D2C-01 | read-only wrappers conformes | Cursor verified · durable store · Git write |
+| **D2-D3** | Coordination E2E + preuves fortes | P2 | D2-D1+D2-D2 validés | Strong evidence readiness (candidate) | D2-D2 · gates | G-D2D-DELIVERY-03 · G-D2D-CURSOR-01 · G-D2D-PERSIST-01 | levels de readiness sourcés | production-ready · RUN READY · D3 ready |
+| **D2-D4** | Write | **OUT OF TRAJECTORY** | — | — | — | — | **aucune story** | Git write enabled |
+
+P0/P1/P2 = ordre de dépendance uniquement, **pas** un calendrier.
+
+---
+
+## H. Registre des gates externes
+
+### G-D2D-CURSOR-01
+
+| Champ | Valeur |
+|-------|--------|
+| **Objet** | Cursor capability verification |
+| **Statut** | REQUIRED — NOT EXECUTED |
+| **EXTERNAL GATE** | oui |
+| **Conséquence** | Bloque adapter Cursor live et preuve sandbox-real Cursor ; ne bloque pas contrats/fixtures/policies sans Cursor réel |
+| **GO requis** | `GO CURSOR CAPABILITY VERIFICATION SFIA STUDIO V3.1-D2-D` |
+
+### G-D2D-D2C-01
+
+| Champ | Valeur |
+|-------|--------|
+| **Objet** | Correction bornée R-QA-D2C-01 |
+| **Statut** | REQUIRED BEFORE UNVALIDATED EXTERNAL BOUNDARY — NOT EXECUTED |
+| **EXTERNAL GATE** | oui |
+| **Conséquence** | D2-D valide toujours avant metadata ; correction core D2-C = cycle distinct ; **jamais** intégrée dans une story D2-D |
+| **GO requis** | `GO CORRECTION SFIA STUDIO D2-C R-QA-D2C-01` |
+
+### G-D2D-PERSIST-01
+
+| Champ | Valeur |
+|-------|--------|
+| **Objet** | Persistance durable / environnement cible |
+| **Statut** | UNDECIDED — NOT REQUIRED FOR D2-D1 — REOPEN BEFORE STRONG D2-D3 CLAIM |
+| **EXTERNAL GATE** | oui |
+| **Conséquence** | Memory OK D2-D1 ; aucun claim restart-safe/multi-instance ; décision distincte si D2-D3 l'exige |
+
+### G-D2D-DELIVERY-01 / 02 / 03
+
+| Gate | Objet | Statut |
+|------|-------|--------|
+| G-D2D-DELIVERY-01 | Delivery D2-D1 | **NOT AUTHORIZED** |
+| G-D2D-DELIVERY-02 | Delivery D2-D2 | **NOT AUTHORIZED** |
+| G-D2D-DELIVERY-03 | Delivery D2-D3 | **NOT AUTHORIZED** |
+
+Aucun gate n'est consommé par ce cycle.
+
+---
+
+## I. Definition of Ready globale
+
+Une story future est Ready uniquement si :
+
+1. décisions sources identifiées ;
+2. valeur et résultat vérifiable définis ;
+3. critères d'acceptation complets ;
+4. scénarios négatifs définis ;
+5. dépendances satisfaites ;
+6. gates nécessaires consommées ;
+7. fichiers candidats identifiés ;
+8. tests et preuves définis ;
+9. aucune décision d'architecture ouverte cachée ;
+10. aucune réserve présentée comme levée ;
+11. aucun provider live requis sans gate ;
+12. aucune estimation ou date inventée ;
+13. scope Delivery borné ;
+14. **GO Delivery spécifique obtenu**.
+
+---
+
+## J. Definition of Done globale
+
+Une story future est Done uniquement si :
+
+1. résultat vérifiable livré ;
+2. tests unitaires/contractuels attendus verts ;
+3. scénarios négatifs verts ;
+4. invariants de sécurité vérifiés ;
+5. aucun secret ou type SDK exposé ;
+6. preuves et disclosures produits ;
+7. source `fixture`/`sandbox-real`/`real` explicite ;
+8. partial ne produit jamais `succeeded` ;
+9. documentation utile mise à jour ;
+10. CI applicable verte ;
+11. réserves mises à jour sans levée implicite ;
+12. diff borné ;
+13. review pack conforme ;
+14. PR readiness et merge = cycles distincts.
+
+---
+
+## K. Epic D2-D1 — Execution Run Core and Contract Foundation
+
+| Champ | Valeur |
+|-------|--------|
+| **Objectif** | Créer le socle pur, local et fixture-first de l'exécution D2-D |
+| **Priorité** | P0 |
+| **Profil candidat Delivery** | Critical (structurant) — GO Delivery distinct requis |
+| **Contraintes** | Aucune intégration fournisseur réelle · aucun SDK dans domain/application · memory uniquement · aucun claim durable/multi-instance · aucun transport D3 · aucun Cursor live |
+| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |
+
+
+#### D2D1-01 — Canonical execution-run domain vocabulary
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les douze objets fonctionnels adoptés disposent de représentations techniques cohérentes dans le core `execution-run`. |
+| **Source decisions** | FD-01 · FA-01/02 · TA-01 · TA-02 |
+| **Dépendances** | Aucune (premier résultat D2-D1) |
+| **Réserves** | R-QA-REV-01/02 transportées (timestamps plus tard) · R-QA-D2C-01 non levée |
+| **Fichiers candidats** | `app/lib/oa/execution-run/domain/**` — CANDIDATE DELIVERY SCOPE — NOT AUTHORIZED |
+| **Hors périmètre** | Adapters · providers · UI · persistance durable · Server Actions |
+
+**Critères d'acceptation :**
+
+1. Les 12 objets sont représentés : ExecutionIntent, ExecutionContext, ProviderCapabilityDescriptor, ValidationOutcome, ExecutionRun, ExecutionState, ExternalResult, ExecutionEvidence, SourceDisclosure, HumanDecisionGate, UsageSummary, NormalizedFailure.
+2. Aucune dépendance Next/Node/SDK/FS/process/réseau dans domain.
+3. Aucune donnée secrète dans les objets.
+4. Aucun type provider-specific (OpenAI/GitHub/Cursor SDK).
+5. Discriminated unions utilisées lorsque pertinent pour l'état et les résultats.
+6. Invariants documentés et testables à la compilation.
+
+**Tests / preuves futures :**
+
+- Tests de compilation TypeScript strict.
+- Tests d'invariants de forme (guards unitaires).
+- Import-boundary smoke (domain n'importe pas adapters).
+
+**Risques :**
+
+- Domaine parallèle / vocabulaire divergent.
+- Fuite de types SDK.
+
+
+#### D2D1-02 — Runtime schemas and AJV boundary validation
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les frontières non fiables valident les contrats avec JSON Schema/AJV existant (CONTRACT-B). |
+| **Source decisions** | CAD-01 · FD-09 · TA-03 · TA-13 |
+| **Dépendances** | D2D1-01 |
+| **Réserves** | R-QA-D2C-01 OPEN — défense frontière D2-D uniquement |
+| **Fichiers candidats** | `execution-run` schemas + reuse doctrine AJV — CANDIDATE |
+| **Hors périmètre** | Zod · nouvelle lib · correction D2-C core · live providers |
+
+**Critères d'acceptation :**
+
+1. Schemas JSON = autorité runtime aux frontières non fiables.
+2. Types TypeScript = représentation compile-time.
+3. Validation **avant** lecture de metadata.
+4. Fail-closed sur null, undefined, champs invalides, payloads incomplets.
+5. Aucune nouvelle dépendance validation.
+6. Conformance types/schemas/fixtures vérifiable.
+7. Erreurs normalisées (pas d'exception brute vers D3).
+
+**Tests / preuves futures :**
+
+- Tests AJV sur payloads valides/invalides.
+- Tests adversariaux null/undefined.
+- Tests de drift type/schema/fixture.
+
+**Risques :**
+
+AJV/types drift · validation après metadata
+
+
+#### D2D1-03 — Eight-state transition authority
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le core possède une autorité unique et pure des transitions d'état. |
+| **Source decisions** | FD-02…07 · FA-03 · TA-04 |
+| **Dépendances** | D2D1-01 |
+| **Réserves** | — |
+| **Fichiers candidats** | `execution-run/domain/executionState.ts` · `executionTransitions.ts` — CANDIDATE |
+| **Hors périmètre** | Queue · worker · provider adapters |
+
+**Critères d'acceptation :**
+
+1. Exactement huit états persistants listés.
+2. Aucun état STATE-B (`created`/`queued`/`validating`).
+3. Table transitions autorisées/refusées explicite.
+4. Nouveau run + nouvelle identité après terminal.
+5. `blocked` vs `failed` discriminés.
+6. `awaiting_human` + timeout humain → `timed_out` / gate manquante → `blocked`.
+7. Cancellation terminale ; late result evidence-only (n'altère pas l'état).
+8. Fonctions de transition pures ; aucune state-machine dependency externe.
+
+**Tests / preuves futures :**
+
+- Matrice complète transitions (unit).
+- Tests late-result / cancel / timeout / human gate.
+
+**Risques :**
+
+State authority dupliquée · partial-as-success
+
+
+#### D2D1-04 — Read-only policy and normalized failure foundation
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Toute intention incompatible avec les politiques D2-D est refusée de manière normalisée. |
+| **Source decisions** | CAD-04 · FD-09 · FA-06 · TA-06 · V erreurs |
+| **Dépendances** | D2D1-01 · D2D1-02 |
+| **Réserves** | R-QA-D2C-01 OPEN |
+| **Fichiers candidats** | `execution-run/domain/executionPolicy.ts` · `executionErrors.ts` — CANDIDATE |
+| **Hors périmètre** | Git write story · Cursor live · secret manager |
+
+**Critères d'acceptation :**
+
+1. Git write refusé.
+2. Commande arbitraire refusée.
+3. Provider indisponible / permission insuffisante / protected path / sandbox blocked normalisés.
+4. Erreurs brutes non exposées.
+5. Classification retryable explicite.
+6. Aucun succès partiel.
+7. Codes candidats alignés TA (VALIDATION_ERROR, MUTATION_FORBIDDEN, …) sans adoption d'implémentation.
+
+**Tests / preuves futures :**
+
+- Policy deny matrix tests.
+- Normalization tests (raw → NormalizedFailure).
+
+**Risques :**
+
+Git mutation · arbitrary command · secret leakage via erreurs
+
+
+#### D2D1-05 — Evidence, completeness and source disclosure
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les résultats exposent une preuve, une complétude et une source honnêtes. |
+| **Source decisions** | FD-05 · FD-08 · FA-04 · TA-11 |
+| **Dépendances** | D2D1-01 · D2D1-03 |
+| **Réserves** | R-QA-REV-01 OPEN NOT LIFTED |
+| **Fichiers candidats** | `executionEvidence.ts` · `executionDisclosure.ts` — CANDIDATE |
+| **Hors périmètre** | Provider live · D3 UI |
+
+**Critères d'acceptation :**
+
+1. Sources `fixture` / `sandbox-real` / `real` obligatoires.
+2. Fixture jamais présentée comme réel.
+3. Completeness complete/partial explicite.
+4. Partial **jamais** `succeeded`.
+5. Evidence officielle ≠ résultat provider brut.
+6. Timestamps ISO validables (lien R-QA-REV-01).
+7. Données sensibles exclues.
+8. Late evidence sans mutation d'état.
+
+**Tests / preuves futures :**
+
+- Evidence unit tests.
+- Partial-never-succeeded tests.
+- Source disclosure mismatch tests.
+
+**Risques :**
+
+Partial-as-success · event leakage · timestamp drift
+
+
+#### D2D1-06 — ExecutionRunRepository memory adapter
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le core dispose d'un repository port unique et d'un adapter memory déterministe (STORE-B stage 1). |
+| **Source decisions** | TA-04 · FA-09 |
+| **Dépendances** | D2D1-01 · D2D1-03 |
+| **Réserves** | — |
+| **Fichiers candidats** | `ports/executionRunRepository.ts` · `infrastructure/memoryExecutionRunRepository.ts` — CANDIDATE |
+| **Hors périmètre** | SQLite/Postgres sélection · G-D2D-PERSIST-01 consommé |
+
+**Critères d'acceptation :**
+
+1. Port unique ExecutionRunRepository.
+2. ExecutionRunId · correlationId.
+3. Nouvelle identité après terminal.
+4. save/get nécessaires au slice.
+5. Aucune seconde autorité d'état.
+6. État process-local **divulgué**.
+7. Aucun claim restart-safe / multi-instance.
+8. Aucun choix durable implicite.
+
+**Tests / preuves futures :**
+
+- Memory repository unit tests.
+- Identity-after-terminal tests.
+- Disclosure LOCAL_PROCESS tests.
+
+**Risques :**
+
+Memory state loss · multi-instance claim
+
+
+#### D2D1-07 — Deterministic contract fixture catalogue
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le catalogue de fixtures couvre les contrats et scénarios nécessaires (fixtures-first). |
+| **Source decisions** | CAD-06 · FA-02 (Fixture Catalogue) · TA-13 · AE |
+| **Dépendances** | D2D1-02 · D2D1-04 · D2D1-05 |
+| **Réserves** | — |
+| **Fichiers candidats** | `execution-run` fixtures catalog — CANDIDATE |
+| **Hors périmètre** | Live providers · sandbox-real Cursor |
+
+**Critères d'acceptation :**
+
+1. Fixtures : nominal · validation failure · auth failure · provider unavailable · rate limit · timeout · cancellation · blocked gate · protected path · mutation forbidden · partial · invalid provider result · late result · secret redaction · source mismatch.
+2. Mêmes schemas que futurs adapters réels.
+3. Données déterministes.
+4. Aucune clé/donnée sensible.
+5. Source déclarée `fixture`.
+6. Divergence contrat/fixture détectable.
+
+**Tests / preuves futures :**
+
+- Fixture load + schema validate.
+- Determinism tests.
+- Secret-absence scan on fixtures.
+
+**Risques :**
+
+Flaky fixtures · secret in fixtures
+
+
+#### D2D1-08 — Server-only composition and import boundaries
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le core peut être composé côté serveur sans créer un second runtime. |
+| **Source decisions** | RUNTIME-C · TA-01 · TA-02 · TA-12 · AB |
+| **Dépendances** | D2D1-01…06 |
+| **Réserves** | — |
+| **Fichiers candidats** | `execution-run/index.ts` · composition root server — CANDIDATE |
+| **Hors périmètre** | UI · HTTP route · OPS1 Cursor path |
+
+**Critères d'acceptation :**
+
+1. `execution-run` = seule state authority.
+2. `vertical-slice-runtime` = façade/composition seulement.
+3. `execution-contract` = pré-exécution seulement.
+4. Aucun import client-unsafe dans domain.
+5. Aucune Server Action ou route choisie (D3-TECH-C).
+6. Aucun adapter provider réel.
+7. Tests de frontières d'import identifiés.
+
+**Tests / preuves futures :**
+
+- Import-boundary Vitest.
+- Composition smoke in-process sans providers.
+
+**Risques :**
+
+Double runtime · client bundle leak
+
+
+#### D2D1-09 — D2-D1 slice evidence and readiness pack
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D1 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les preuves permettant de décider la clôture D2-D1 sont définies et reproductibles. |
+| **Source decisions** | CAD-01 · TA-14 · AK |
+| **Dépendances** | D2D1-01…08 |
+| **Réserves** | R-QA-REV-01/02 · R-QA-D2C-01 OPEN |
+| **Fichiers candidats** | Review pack Delivery futur — CANDIDATE |
+| **Hors périmètre** | Merge Delivery sans PR readiness distincte |
+
+**Critères d'acceptation :**
+
+1. Matrice objets/schemas/tests.
+2. Matrice complète transitions.
+3. Conformance fixtures.
+4. Policy deny tests.
+5. Redaction tests.
+6. Aucune intégration réelle revendiquée.
+7. Réserves transportées.
+8. Verdict autorisé candidat : `D2-D1 CONTRACT FOUNDATION VERIFIED`.
+9. Verdicts interdits : provider integrated · production-ready · multi-instance ready.
+
+**Tests / preuves futures :**
+
+- Pack de preuves documentaire + CI unit/contract.
+- Checklist anti-claims.
+
+**Risques :**
+
+Claim excessif · DoD flou
+
+
+## L. Epic D2-D2 — Provider Boundaries and Controlled Read-only Adapters
+
+| Champ | Valeur |
+|-------|--------|
+| **Objectif** | Brancher progressivement les capacités externes read-only derrière les contrats D2-D |
+| **Priorité** | P1 |
+| **Précondition** | D2-D1 validé |
+| **Contraintes** | Wrappers uniquement · pas de SDK vers domaine/application/D3 · pas de Git write · pas de Cursor live sans gate · pas de live CI défaut |
+| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |
+
+
+#### D2D2-01 — Provider port conformance harness
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | AI, Git et Cursor peuvent être évalués derrière une même discipline de contrats, erreurs, cancellation, evidence et disclosures. |
+| **Source decisions** | FA-05 · TA-06 · REUSE-B |
+| **Dépendances** | D2-D1 stable (surtout D2D1-02/04/05) |
+| **Réserves** | — |
+| **Fichiers candidats** | `ports/aiExecutionPort.ts` · `gitReadPort.ts` · `cursorExecutionPort.ts` — CANDIDATE |
+| **Hors périmètre** | Live CI · rewrite non justifié |
+
+**Critères d'acceptation :**
+
+1. Ports provider-independent.
+2. Fake et real adapters conformes aux mêmes contrats.
+3. Contract-fit observable.
+4. Incompatibilité explicite.
+5. Targeted rewrite permis si échec.
+6. Aucun fallback silencieux.
+
+**Tests / preuves futures :**
+
+- Conformance suite fake ports.
+- Contract-fit report format.
+
+**Risques :**
+
+Provider lock-in · silent fallback
+
+
+#### D2D2-02 — AI-B platform adapter
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | La capacité AI existante est accessible via un wrapper D2-D (AI-B). |
+| **Source decisions** | TA-07 · platform AI OBSERVATION |
+| **Dépendances** | D2D2-01 · D2D1-02 · D2D1-05 · D2D2-04 |
+| **Réserves** | — |
+| **Fichiers candidats** | `infrastructure` AI wrapper — CANDIDATE DELIVERY SCOPE |
+| **Hors périmètre** | Nouveau SDK · modèle hardcodé · live default CI |
+
+**Critères d'acceptation :**
+
+1. Wrapper autour de platform AI.
+2. Modèle configurable (pas hardcodé).
+3. Secret server-only.
+4. Sortie validée.
+5. Usage exposé uniquement si validé.
+6. Timeout/cancel normalisés.
+7. Aucun prompt/résultat complet dans events/D3.
+8. Fake provider pour CI.
+9. Live opt-in uniquement.
+
+**Tests / preuves futures :**
+
+- Fake AI conformance.
+- Redaction tests.
+- Live opt-in hors CI défaut.
+
+**Risques :**
+
+Prompt leakage · live flaky
+
+
+#### D2D2-03 — GIT-C read-only adapter
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | La Git Truth distante peut être lue derrière un port transport-neutral strictement read-only. |
+| **Source decisions** | TA-08 · CAD-04 · CAD-08 |
+| **Dépendances** | D2D2-01 · D2D1-04 · D2D1-05 · D2D2-04 |
+| **Réserves** | — |
+| **Fichiers candidats** | Wrapper `GithubReadPort` — CANDIDATE |
+| **Hors périmètre** | Git write · PAT production default · silent REST fallback |
+
+**Critères d'acceptation :**
+
+1. Read-only strict ; aucune méthode write.
+2. Repository allowlist.
+3. Refs/paths validés.
+4. Timeout · rate-limit normalisé · redaction.
+5. Transport divulgué.
+6. `gh` local/sandbox possible.
+7. REST/GitHub App **non sélectionné** sans décision distincte.
+8. Aucun fallback silencieux.
+9. PAT ≠ défaut production.
+
+**Tests / preuves futures :**
+
+- Allowlist deny tests.
+- Transport disclosure tests.
+- Write-surface absence tests.
+
+**Risques :**
+
+Git mutation · auth leakage · CLI unavailable
+
+
+#### D2D2-04 — SECRET-B source boundary
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les adapters obtiennent des secrets via une frontière opaque (SECRET-B). |
+| **Source decisions** | TA-10 · CAD-08 |
+| **Dépendances** | D2D1-04/05 |
+| **Réserves** | — |
+| **Fichiers candidats** | `ports/secretSourcePort.ts` · env adapter — CANDIDATE |
+| **Hors périmètre** | Secret manager sélection · valeurs dans events |
+
+**Critères d'acceptation :**
+
+1. SecretSourcePort.
+2. Adapter env local contrôlé.
+3. Aucune valeur sérialisable.
+4. Aucune valeur dans domaine/events/evidence/fixtures/D3.
+5. Secret absent/expiré/révoqué normalisé.
+6. Aucune techno secret manager adoptée.
+
+**Tests / preuves futures :**
+
+- Opaque handle tests.
+- Redaction scan.
+- Missing-secret failure normalization.
+
+**Risques :**
+
+Secret leakage
+
+
+#### D2D2-05 — EVENT-B execution event adapter
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les événements D2-D sont adaptés vers l'EventSink existant (EVENT-B). |
+| **Source decisions** | TA-11 · FD-10 · CAD-09 |
+| **Dépendances** | D2D1-03 · D2D1-05 |
+| **Réserves** | R-QA-REV-01 OPEN · R-QA-REV-02 OPEN |
+| **Fichiers candidats** | `ports/executionEventSink.ts` · adapter EventSink — CANDIDATE |
+| **Hors périmètre** | Nouveau bus · prix inventé · prompt complet |
+
+**Critères d'acceptation :**
+
+1. Sémantique D2-D au port ; transport platform.
+2. Champs : correlationId · runId · transitions · validation · gate · cancel · timeout · late result · completeness · source · usage validé.
+3. Redaction stricte.
+4. Timestamp ISO validé.
+5. R-QA-REV-01/02 restent OPEN jusqu'aux preuves.
+6. Aucun RUN-ready/SLO.
+
+**Tests / preuves futures :**
+
+- Event schema tests.
+- Redaction tests.
+- Timestamp validation tests (REV-01).
+
+**Risques :**
+
+Event leakage · timestamp drift · dual catalogues
+
+
+#### D2D2-06 — Async, timeout, cancellation and late-result handling
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les opérations provider suivent ASYNC-B de manière déterministe. |
+| **Source decisions** | TA-05 · FD-07 · Y |
+| **Dépendances** | D2D1-03 · D2D1-06 |
+| **Réserves** | — |
+| **Fichiers candidats** | `application/executionCoordinator.ts` — CANDIDATE |
+| **Hors périmètre** | ASYNC-C queue · SLO inventé |
+
+**Critères d'acceptation :**
+
+1. Promise + AbortSignal.
+2. Timeout opérationnel et global configurables.
+3. Aucune durée production inventée.
+4. Cancellation best-effort provider.
+5. État terminal local autoritatif.
+6. Résultat tardif evidence-only.
+7. Retries uniquement sur erreurs classées ; aucun retry infini.
+8. Aucune queue ou worker permanent.
+
+**Tests / preuves futures :**
+
+- Cancel/timeout/late-result unit+integration-in-process tests.
+
+**Risques :**
+
+Cancellation race · late result race · queue prématurée
+
+
+#### D2D2-07 — D2-D adversarial input boundary
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | La frontière D2-D refuse tout payload invalide avant exploitation de metadata. |
+| **Source decisions** | CAD-10 · TA-13 · R-C · Z |
+| **Dépendances** | D2D1-02 · D2D1-04 |
+| **Réserves** | R-QA-D2C-01 OPEN NOT LIFTED |
+| **Fichiers candidats** | Policy/validation boundary — CANDIDATE |
+| **Hors périmètre** | Story D2-C correction · reserve lift |
+
+**Critères d'acceptation :**
+
+1. Validation avant metadata.
+2. null/undefined · payload partiel · enums invalides · tailles hors limites · champs interdits.
+3. Aucune exception brute.
+4. Aucun résultat partiel exploitable.
+5. R-QA-D2C-01 **non levée**.
+6. Correction du core D2-C **exclue** (G-D2D-D2C-01).
+
+**Tests / preuves futures :**
+
+- Adversarial suite.
+- Metadata-access-order tests.
+
+**Risques :**
+
+R-QA-D2C-01 · partial exploit
+
+
+#### D2D2-08 — Sandbox and protected-path contract without live Cursor
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les exigences de sandbox et de chemins protégés sont testables sans supposer Cursor compatible. |
+| **Source decisions** | CAD-07 · TA-09 · U |
+| **Dépendances** | D2D1-04 · D2D2-01 |
+| **Réserves** | CURSOR PRODUCT CAPABILITIES UNVERIFIED |
+| **Fichiers candidats** | Reuse platform/security + harness patterns — CANDIDATE |
+| **Hors périmètre** | Live Cursor · G-D2D-CURSOR-01 consommé |
+
+**Critères d'acceptation :**
+
+1. Allowlist · deny-by-default · protected paths.
+2. Aucune commande navigateur.
+3. Aucune remote Git mutation.
+4. Branch/head anchors.
+5. Timeout.
+6. Fixture adapter.
+7. Aucun claim sandbox secure.
+8. Cursor reste UNVERIFIED.
+
+**Tests / preuves futures :**
+
+- Path policy tests.
+- Fixture sandbox contract tests.
+
+**Risques :**
+
+Sandbox escape claim · Cursor compatibility claim
+
+
+#### D2D2-09 — Cursor adapter eligibility gate
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | EXTERNAL GATE LINK — NOT A DELIVERY STORY |
+| **Slice** | D2-D2 |
+| **Statut** | BLOCKED — DISTINCT MORRIS GATE REQUIRED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le backlog identifie les preuves nécessaires avant toute story Cursor live. |
+| **Source decisions** | TA-09 · G-D2D-CURSOR-01 |
+| **Dépendances** | G-D2D-CURSOR-01 |
+| **Réserves** | CURSOR UNVERIFIED |
+| **Fichiers candidats** | N/A — gate documentation only |
+| **Hors périmètre** | Cursor live adapter Delivery |
+
+**Critères d'acceptation :**
+
+1. Référence G-D2D-CURSOR-01.
+2. Capabilities exactes à vérifier.
+3. Disponibilité environnement.
+4. Process boundary.
+5. Cancellation · sandbox · preuves.
+6. Aucune implémentation live dans D2-D2 sans GO distinct.
+
+**Tests / preuves futures :**
+
+- Gate checklist (non exécutée dans ce cycle).
+
+**Risques :**
+
+Live without gate
+
+
+#### D2D2-10 — D2-D2 slice conformance and evidence pack
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D2 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Les wrappers read-only peuvent être évalués sans claim excessif. |
+| **Source decisions** | TA-14 · L |
+| **Dépendances** | D2D2-01…08 |
+| **Réserves** | R-QA-REV-01/02 · R-QA-D2C-01 · Cursor UNVERIFIED |
+| **Fichiers candidats** | Evidence pack — CANDIDATE |
+| **Hors périmètre** | Cursor live · production-ready |
+
+**Critères d'acceptation :**
+
+1. AI fake conformance.
+2. Git read conformance.
+3. SecretSource redaction.
+4. Events.
+5. Timeout/cancel.
+6. Adversarial boundary.
+7. Sandbox contract.
+8. Source disclosure.
+9. Aucun live default CI.
+10. Réserves visibles · Cursor UNVERIFIED.
+
+**Tests / preuves futures :**
+
+- Slice evidence pack + CI fake suites.
+
+**Risques :**
+
+Claim excessif
+
+
+## M. Epic D2-D3 — End-to-end Read-only Coordination and Strong Evidence
+
+| Champ | Valeur |
+|-------|--------|
+| **Objectif** | Prouver une coordination end-to-end read-only et provider-independent |
+| **Priorité** | P2 |
+| **Préconditions** | D2-D1 et D2-D2 validés |
+| **Contraintes** | Aucun Git write · aucun D3 UI · aucun transport D3 sélectionné · Cursor sandbox-real soumis au gate · aucune durabilité/multi-instance sans décision |
+| **Statut epic** | EPIC CANDIDATE — NOT ADOPTED |
+
+
+#### D2D3-01 — End-to-end execution coordination
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Une intention validée traverse intake, policy, state, provider boundary, evidence et events jusqu'à un résultat normalisé. |
+| **Source decisions** | FA-02/03/04 · TA-01 · TA-14 |
+| **Dépendances** | D2-D1 + D2-D2 validés |
+| **Réserves** | — |
+| **Fichiers candidats** | Coordinator composition — CANDIDATE |
+| **Hors périmètre** | UI · write · Cursor live sans gate |
+
+**Critères d'acceptation :**
+
+1. Ordre des autorités respecté.
+2. Aucune mutation d'état par provider.
+3. Aucune décision Morris automatisée.
+4. Fixture nominale.
+5. Provider read-only réel seulement si gate applicable.
+6. Erreurs normalisées · source explicite · partial jamais succeeded.
+
+**Tests / preuves futures :**
+
+- E2E fixture path.
+- Authority-order tests.
+
+**Risques :**
+
+Double runtime · provider mutates state
+
+
+#### D2D3-02 — Provider-independent server projection
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Une façade application transport-neutral expose une projection D3 provider-independent (D3-TECH-C). |
+| **Source decisions** | FD-11 · FA-08 · TA-12 |
+| **Dépendances** | D2D3-01 · D2D1-05 |
+| **Réserves** | — |
+| **Fichiers candidats** | `executionProjection.ts` · server facade — CANDIDATE |
+| **Hors périmètre** | UI Delivery · route selection |
+
+**Critères d'acceptation :**
+
+1. Champs : runId · état · source · progression · completeness · result redacted · failure redacted · blocked reason · human gate · evidence summary · usage validé · réserves · readiness.
+2. Aucun SDK object · secret · erreur brute · commande · Git write.
+3. Aucun Server Action/HTTP transport choisi.
+
+**Tests / preuves futures :**
+
+- Projection shape tests.
+- Leakage absence tests.
+
+**Risques :**
+
+D3 provider leakage · transport premature
+
+
+#### D2D3-03 — End-to-end evidence and truthfulness
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le parcours permet de distinguer sans ambiguïté fixture, sandbox-real et real. |
+| **Source decisions** | FD-08 · FA-04 · TA-11 |
+| **Dépendances** | D2D3-01 · D2D1-05 · D2D2-05 |
+| **Réserves** | R-QA-REV-01 OPEN |
+| **Fichiers candidats** | Evidence pipeline — CANDIDATE |
+| **Hors périmètre** | Production-ready claim |
+
+**Critères d'acceptation :**
+
+1. Evidence officielle · provider result distinct · digest/id · timestamps validés · completeness · source · late evidence · usage validé.
+2. Aucune donnée sensible.
+3. Fixture jamais présentée comme réel.
+
+**Tests / preuves futures :**
+
+- Source truthfulness suite.
+- Late evidence tests.
+
+**Risques :**
+
+Source spoof · sensitive data leak
+
+
+#### D2D3-04 — Cursor sandbox-real proof
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | BLOCKED ENABLER CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | BLOCKED — CURSOR PRODUCT CAPABILITIES UNVERIFIED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Une exécution Cursor sandbox-real read-only produit une preuve conforme. |
+| **Source decisions** | TA-09 · CAD-07 · G-D2D-CURSOR-01 |
+| **Dépendances** | G-D2D-CURSOR-01 consommé · sandbox contract · branch/head anchors · aucune remote Git write · gate Morris revalidée |
+| **Réserves** | CURSOR PRODUCT CAPABILITIES UNVERIFIED |
+| **Fichiers candidats** | CursorExecutionPort adapter — BLOCKED |
+| **Hors périmètre** | Live without GO · client import harness |
+
+**Critères d'acceptation :**
+
+1. Préconditions gate listées et satisfaites.
+2. Preuve conforme (evidence + source `sandbox-real`).
+3. Aucune remote Git write.
+4. Pas de claim sandbox secure sans preuve.
+
+**Tests / preuves futures :**
+
+- Opt-in sandbox-real harness (hors CI défaut) — seulement après gate.
+
+**Risques :**
+
+Cursor incompatibility · sandbox escape
+
+
+#### D2D3-05 — Strong-runtime environment and persistence gate
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | EXTERNAL GATE LINK — NOT A DELIVERY STORY |
+| **Slice** | D2-D3 |
+| **Statut** | BLOCKED — G-D2D-PERSIST-01 |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le backlog rend explicites les décisions nécessaires avant tout claim restart-safe ou multi-instance. |
+| **Source decisions** | TA-04 · TA-05 · G-D2D-PERSIST-01 · AC |
+| **Dépendances** | G-D2D-PERSIST-01 |
+| **Réserves** | — |
+| **Fichiers candidats** | N/A — gate documentation |
+| **Hors périmètre** | STORE-C adoption · queue worker |
+
+**Critères d'acceptation :**
+
+1. Environnement cible identifié.
+2. Process lifetime évalué.
+3. ASYNC-B réévalué.
+4. Persistance durable décidée si nécessaire.
+5. Locking/concurrency · cancellation après restart évalués.
+6. Aucune technologie sélectionnée dans ce backlog.
+
+**Tests / preuves futures :**
+
+- Decision pack futur (hors cycle).
+
+**Risques :**
+
+Multi-instance claim · premature durable store
+
+
+#### D2D3-06 — End-to-end negative and resilience scenarios
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Le parcours end-to-end prouve les comportements d'échec. |
+| **Source decisions** | FD-09 · TA-13 · AE |
+| **Dépendances** | D2D3-01 · D2D2-06/07 · D2D1-07 |
+| **Réserves** | — |
+| **Fichiers candidats** | Test suites — CANDIDATE |
+| **Hors périmètre** | Live-only negatives |
+
+**Critères d'acceptation :**
+
+1. Couvrir : validation failure · auth failure · provider unavailable · rate limit · timeout · cancellation · blocked gate · invalid result · partial · late result · secret redaction · source mismatch · protected path · mutation forbidden.
+2. Chaque scénario : état attendu · evidence · disclosure · pas de succeeded partiel.
+
+**Tests / preuves futures :**
+
+- E2E negative suite (fixtures first).
+
+**Risques :**
+
+Incomplete negative coverage
+
+
+#### D2D3-07 — D2-D3 strong evidence readiness review
+
+| Champ | Valeur |
+|-------|--------|
+| **Type** | STORY CANDIDATE |
+| **Slice** | D2-D3 |
+| **Statut** | STORY CANDIDATE — NOT ADOPTED |
+| **Estimation** | NOT ESTIMATED |
+| **Valeur / résultat** | Un pack de preuves permet à Morris de distinguer les niveaux de readiness (FD-12). |
+| **Source decisions** | FD-12 · CAD-12 · TA-14 |
+| **Dépendances** | D2D3-01…03 · D2D3-06 · gates applicables pour niveaux élevés |
+| **Réserves** | R-QA-* OPEN · Cursor UNVERIFIED |
+| **Fichiers candidats** | Readiness pack — CANDIDATE |
+| **Hors périmètre** | D3 Delivery · RUN READY |
+
+**Critères d'acceptation :**
+
+1. Niveaux : UX exploration · UI Delivery · strong runtime verdict.
+2. Preuves de chaque niveau.
+3. Absence de claim si preuve manquante.
+4. Cursor UNVERIFIED si gate non consommé.
+5. Persistance/multi-instance non revendiquées sans décision.
+6. Réserves transportées.
+7. Aucun verdict production-ready ou RUN READY.
+
+**Tests / preuves futures :**
+
+- Readiness matrix document + evidence checklist.
+
+**Risques :**
+
+Premature readiness claim
+
+
+## N. Matrice de dépendances
+
+| Story | Dépend de |
+|-------|-----------|
+| D2D1-01 | — |
+| D2D1-02 | D2D1-01 |
+| D2D1-03 | D2D1-01 |
+| D2D1-04 | D2D1-01 · D2D1-02 |
+| D2D1-05 | D2D1-01 · D2D1-03 |
+| D2D1-06 | D2D1-01 · D2D1-03 |
+| D2D1-07 | D2D1-02 · D2D1-04 · D2D1-05 |
+| D2D1-08 | D2D1-01…06 |
+| D2D1-09 | D2D1-01…08 |
+| D2D2-* (toutes) | Stabilité contrats D2-D1 pertinents |
+| D2D2-02 | D2D2-01 · D2D1-02/05 · D2D2-04 |
+| D2D2-03 | D2D2-01 · D2D1-04/05 · D2D2-04 |
+| D2D2-05 | D2D1-03/05 |
+| D2D2-06 | D2D1-03/06 |
+| D2D2-07 | D2D1-02/04 |
+| D2D2-09 | **G-D2D-CURSOR-01** |
+| D2D2-10 | D2D2-01…08 |
+| D2D3-* | D2-D1 + D2-D2 validés |
+| D2D3-04 | **G-D2D-CURSOR-01** |
+| D2D3-05 | **G-D2D-PERSIST-01** |
+| Strong runtime verdict | D2D3-04/05 si requis par le niveau de claim |
+
+---
+
+## O. Ordre de réalisation candidat
+
+Fondé uniquement sur les dépendances — **NOT ESTIMATED** — aucune date/sprint :
+
+1. D2D1-01
+2. D2D1-02
+3. D2D1-03
+4. D2D1-04
+5. D2D1-05
+6. D2D1-06
+7. D2D1-07
+8. D2D1-08
+9. D2D1-09
+10. **Validation D2-D1** puis D2-D2 (D2D2-01 → … → D2D2-10 ; D2D2-09 reste BLOCKED)
+11. **Validation D2-D2** + gates applicables puis D2-D3 (D2D3-01…07 ; 04/05 BLOCKED tant que gates absents)
+
+Toute modification d'ordre doit rester justifiée par les dépendances.
+
+---
+
+## P. Matrice de couverture des décisions
+
+| Décision | Couverture backlog |
+|----------|-------------------|
+| CAD-01 Minimal Foundation | D2D1-* |
+| CAD-04 Read-only / D2-D4 out | D2D1-04 · D2D2-03 · **aucune story D2-D4** |
+| CAD-05/FD-02 États | D2D1-03 |
+| CAD-06 Fixtures first | D2D1-07 |
+| CAD-07 Sandbox / Cursor UNVERIFIED | D2D2-08 · D2D2-09 · D2D3-04 |
+| CAD-08 Secrets | D2D2-04 |
+| CAD-09 Events | D2D2-05 |
+| CAD-10 R-C | D2D2-07 · G-D2D-D2C-01 |
+| CAD-11/FA-11/TA-14 Slicing | Épics K/L/M · ordre O |
+| FD-01 12 objets | D2D1-01 |
+| FD-05 Partial | D2D1-05 · D2D3-06 |
+| FD-07 Cancel/late | D2D1-03 · D2D2-06 |
+| FD-08 Sources | D2D1-05 · D2D3-03 |
+| FD-09 Failures | D2D1-04 · D2D3-06 |
+| FD-11/FA-08 D3 indep. | D2D3-02 |
+| FD-12 Readiness levels | D2D3-07 |
+| FA-03 State authority | D2D1-03 · D2D1-08 |
+| FA-04 Evidence authority | D2D1-05 |
+| FA-05 Provider boundary | D2D2-01 |
+| FA-06 Policy | D2D1-04 |
+| FA-09 RUNTIME-C | D2D1-08 |
+| FA-10 REUSE-B | D2D2-01…03 |
+| TA-01 TECH-RUN-B | D2D1-08 |
+| TA-02 Layering | D2D1-01/08 |
+| TA-03 CONTRACT-B | D2D1-02 |
+| TA-04 STORE-B | D2D1-06 · G-D2D-PERSIST-01 |
+| TA-05 ASYNC-B | D2D2-06 |
+| TA-06 Wrappers | D2D2-01 |
+| TA-07 AI-B | D2D2-02 |
+| TA-08 GIT-C | D2D2-03 |
+| TA-09 CURSOR-B | D2D2-09 · D2D3-04 |
+| TA-10 SECRET-B | D2D2-04 |
+| TA-11 EVENT-B | D2D2-05 |
+| TA-12 D3-TECH-C | D2D3-02 |
+| TA-13 Fixtures/adversarial | D2D1-07 · D2D2-07 |
+| TA-14 Slicing | G · O · BLG |
+
+**D2-D4 :** explicitement **sans story**.
+
+---
+
+## Q. Matrice de couverture des risques
+
+| Risque | Stories / gates | Mitigation | Preuve future | Statut |
+|--------|-----------------|------------|---------------|--------|
+| Double runtime | D2D1-08 | state authority unique | import-boundary | ouvert |
+| Type/schema drift | D2D1-02 · D2D1-07 | conformance | CI | ouvert |
+| State authority dupliquée | D2D1-03/08 | interdit AB | tests | ouvert |
+| Memory state loss | D2D1-06 · G-D2D-PERSIST-01 | disclosures | docs | ouvert |
+| Provider lock-in | D2D2-01 | ports | contract-fit | ouvert |
+| Secret leakage | D2D2-04 | opaque + redaction | scans | ouvert |
+| Git mutation | D2D2-03 · D2D1-04 | read-only surface | tests | ouvert |
+| Arbitrary command | D2D1-04 · D2D2-08 | deny-by-default | tests | ouvert |
+| Sandbox escape | D2D2-08 · D2D3-04 | allowlist + gate | tests | UNVERIFIED Cursor |
+| Cursor incompatibility | D2D2-09 · D2D3-04 | G-D2D-CURSOR-01 | capability GO | UNVERIFIED |
+| Event leakage | D2D2-05 | redaction | tests | ouvert |
+| Partial-as-success | D2D1-05 · D2D3-06 | Evidence authority | tests | ouvert |
+| Timeout/cancel race | D2D2-06 | AbortSignal + terminal local | tests | ouvert |
+| Late result race | D2D1-03 · D2D2-06 | evidence-only | tests | ouvert |
+| Provider/D3 leakage | D2D3-02 | DTO rules | leakage tests | ouvert |
+| Multi-instance claim | D2D1-06 · D2D3-05 | claims bornés | gate | BLOCKED claim |
+| Live tests flaky | D2D2-02/10 | live hors CI | policy | ouvert |
+| R-QA-D2C-01 | D2D2-07 · G-D2D-D2C-01 | R-C two lines | adversarial | OPEN |
+| R-QA-REV-01 | D2D2-05 · D2D1-05 | ISO timestamps | tests | OPEN |
+| R-QA-REV-02 | D2D2-05 | conserve | docs | OPEN |
+
+---
+
+## R. Fichiers candidats par story
+
+Référence candidate (non autorisée) :
+
+```text
+projects/sfia-studio/app/lib/oa/execution-run/
+  domain/
+  application/
+  ports/
+  infrastructure/
+  index.ts
+```
+
+Wrappers candidats : `platform/ai` · `platform/repository` · `platform/observability` · `platform/security` · `infrastructure` du core · patterns harness (extract/wrapper uniquement).
+
+**Marqueur :** `CANDIDATE DELIVERY SCOPE — NOT AUTHORIZED BY THIS BACKLOG CYCLE.`
+
+Une meilleure réutilisation conforme au repo peut remplacer un chemin candidat en Delivery, sans redécider TA.
+
+---
+
+## S. Critères d'acceptation du backlog (ce cycle)
+
+- [x] Trois épics distincts
+- [x] Stories requises présentes
+- [x] Une story = un résultat vérifiable
+- [x] Critères observables + scénarios négatifs
+- [x] Dépendances · gates · réserves · preuves
+- [x] DoR/DoD
+- [x] Ordre sans dates
+- [x] D2-D4 sans story
+- [x] Cursor UNVERIFIED
+- [x] D2-C correction séparée
+- [x] Persistance durable non sélectionnée
+- [x] Aucun code · aucune Delivery autorisée
+- [x] Aucun claim production-ready
+- [x] Aucune décision TA redécidée
+- [x] BLG-01…08 NOT DECIDED
+
+---
+
+## T. Decision pack Morris — D-V3.1-D2D-BLG-01…08
+
+> **Statut commun :** `NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED`
+
+### D-V3.1-D2D-BLG-01 — Structure à trois épics
+
+- **Question :** Adopter D2-D1 / D2-D2 / D2-D3 comme structure de backlog ?
+- **Options :** (1) trois épics (2) epic unique (3) fusion D1+D2
+- **Recommandation candidate :** trois épics (TA-14)
+- **Impacts :** clarté des GO Delivery futurs
+- **Risques :** sous-estimer dépendances inter-épics
+- **Dette / réversibilité :** haute pré-Delivery
+- **Dépendances :** TA-14
+- **Réserves :** —
+- **Gate suivante :** BLG arbitration
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-02 — Catalogue D2-D1
+
+- **Question :** Adopter D2D1-01…09 ?
+- **Recommandation candidate :** oui
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-03 — Catalogue D2-D2
+
+- **Question :** Adopter D2D2-01…10 (avec D2D2-09 = gate link) ?
+- **Recommandation candidate :** oui
+- **Réserves :** Cursor UNVERIFIED
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-04 — Catalogue D2-D3
+
+- **Question :** Adopter D2D3-01…07 (04/05 BLOCKED) ?
+- **Recommandation candidate :** oui
+- **Gates :** G-D2D-CURSOR-01 · G-D2D-PERSIST-01
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-05 — DoR / DoD globaux
+
+- **Question :** Adopter DoR §I et DoD §J ?
+- **Recommandation candidate :** oui
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-06 — Ordre et dépendances
+
+- **Question :** Adopter matrice N et ordre O ?
+- **Recommandation candidate :** oui
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-07 — Registre de gates
+
+- **Question :** Adopter G-D2D-CURSOR-01 · G-D2D-D2C-01 · G-D2D-PERSIST-01 · G-D2D-DELIVERY-01/02/03 ?
+- **Recommandation candidate :** oui
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-08 — Trajectoire
+
+- **Question :** Adopter trajectoire validation → publication → post-merge → GO Delivery D2-D1 uniquement ?
+- **Recommandation candidate :** oui
+- **Gate suivante :** après BLG + publication + merge + post-merge : GO Delivery D2-D1
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+---
+
+## U. Trajectoire candidate
+
+1. Validation Morris du backlog (BLG-01…08).
+2. Publication documentaire du document 24.
+3. PR readiness documentaire.
+4. Merge documentaire.
+5. Validation post-merge.
+6. **GO Delivery D2-D1** distinct.
+7. QA et PR readiness D2-D1.
+8. **GO Delivery D2-D2** après clôture D2-D1.
+9. **GO Delivery D2-D3** après clôture D2-D2 et gates applicables.
+
+Aucune ouverture automatique. Aucun GO Delivery consommé ici.
+
+---
+
+## V. Anti-claims
+
+Ce document **n'autorise pas** et **ne revendique pas** :
+
+- backlog adopted · stories approved · Delivery authorized · D2-D1 ready for implementation
+- provider integrated · Cursor compatible · Cursor verified · sandbox secure
+- D2-C reserve lifted · durable store selected · restart-safe · multi-instance ready
+- production-ready · RUN READY · D3 ready · Git write enabled · CreateCycle enabled · method promoted
+
+---
+
+## W. Verdict documentaire
+
+```text
+D2-D BACKLOG COMPLETE LOCALLY WITH RESERVES —
+
+MAIN POST-MERGE BASE VERIFIED —
+DOCUMENTS 20 / 21 / 22 / 23 APPLIED —
+D-CAD-01…12 APPLIED —
+D-FD-01…12 APPLIED —
+D-FA-01…12 APPLIED —
+D-TA-01…14 APPLIED —
+
+D2-D1 EPIC AND STORIES DOCUMENTED —
+D2-D2 EPIC AND STORIES DOCUMENTED —
+D2-D3 EPIC AND STORIES DOCUMENTED —
+D2-D4 WRITE OUT OF TRAJECTORY —
+
+DEFINITIONS OF READY AND DONE DOCUMENTED —
+DEPENDENCIES DOCUMENTED —
+GATES DOCUMENTED —
+RISKS AND RESERVES TRANSPORTED —
+TEST AND EVIDENCE EXPECTATIONS DOCUMENTED —
+BLG-01…08 READY FOR MORRIS VALIDATION —
+
+R-QA-REV-01 OPEN NOT LIFTED —
+R-QA-REV-02 OPEN NOT LIFTED —
+R-QA-D2C-01 OPEN NOT LIFTED —
+CURSOR PRODUCT CAPABILITIES UNVERIFIED —
+
+NO BACKLOG DECISION ADOPTED —
+NO DELIVERY AUTHORIZED —
+NO CODE —
+NO CONFIG —
+NO DEPENDENCY CHANGE —
+NO PROVIDER LIVE —
+NO CURSOR CAPABILITY VERIFICATION —
+NO D2-C CORRECTION —
+NO UI —
+NO D3 DELIVERY —
+NO CREATECYCLE —
+NO PRODUCT GIT WRITE CAPABILITY —
+NO METHOD PROMOTION —
+
+READY FOR MORRIS BACKLOG VALIDATION
+```
+
+---
+
+## X. Prochaine gate candidate
+
+```text
+GO ARBITRATION SFIA STUDIO V3.1-D2-D BACKLOG
+APPLY D-V3.1-D2D-BLG-01…08
+```
+
+Après arbitrage uniquement :
+
+```text
+GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG
+```
+
+Ne pas proposer immédiatement : GO DELIVERY D2-D1 / D2-D2 / D2-D3.
```

## 25. Git Truth final (avant publication handoff)

| Champ | Valeur |
|-------|--------|
| Branche | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| HEAD | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| origin/main | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| status --short | |
```
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
```
| staged | `(vide)` |
| tracked diff | `(vide)` |
| untracked | |
```
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
```
| remote backlog branch | `(absente)` |
| PR backlog | `(absente)` |

### Preuves

- staged vide : **oui**
- aucun tracked modifié : **oui**
- aucun commit/push/PR projet : **oui**
- document 24 non tracké uniquement (projet) : **oui**

---

## 26. Handoff before / after

### Before

| Champ | Valeur |
|-------|--------|
| tip | `26b7f0907ed7981fbe4fe57f964a8b23eb1f73c1` |
| blob | `08a8f2aee5b478ca3eba9feb007f1d804f6bb448` |

### After

Le tip et le blob du présent rapport sont calculés après publication.
Ils sont remontés dans le rapport terminal Cursor et vérifiés
indépendamment par ChatGPT afin d'éviter une boucle autoréférentielle.

Placeholders post-publication (remplis après publisher) :

- `D2D_BACKLOG_HANDOFF_TIP` : *(pending publish)*
- `D2D_BACKLOG_HANDOFF_BLOB` : *(pending publish)*
- `D2D_BACKLOG_HANDOFF_PARENT` : *(pending publish)*

---

## 27. Verdict

```text
V3.1-D2-D BACKLOG COMPLETE LOCALLY WITH RESERVES —

MAIN POST-MERGE BASE VERIFIED —
DOCUMENTS 20 / 21 / 22 / 23 APPLIED —
D-CAD-01…12 APPLIED —
D-FD-01…12 APPLIED —
D-FA-01…12 APPLIED —
D-TA-01…14 APPLIED —

D2-D1 EPIC AND STORIES DOCUMENTED —
D2-D2 EPIC AND STORIES DOCUMENTED —
D2-D3 EPIC AND STORIES DOCUMENTED —
D2-D4 WRITE OUT OF TRAJECTORY —

DEFINITIONS OF READY AND DONE DOCUMENTED —
DEPENDENCY MATRIX DOCUMENTED —
EXTERNAL GATES DOCUMENTED —
DECISION COVERAGE DOCUMENTED —
RISK COVERAGE DOCUMENTED —
TEST AND EVIDENCE EXPECTATIONS DOCUMENTED —
D-V3.1-D2D-BLG-01…08 READY FOR MORRIS VALIDATION —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

NO BACKLOG DECISION ADOPTED —
NO DELIVERY AUTHORIZED —
NO CODE —
NO CONFIG —
NO DEPENDENCY CHANGE —
NO PROVIDER LIVE —
NO CURSOR CAPABILITY VERIFICATION —
NO D2-C CORRECTION —
NO UI —
NO D3 DELIVERY —
NO CREATECYCLE —
NO PRODUCT GIT WRITE CAPABILITY —
NO METHOD PROMOTION —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED — (pending publish verification)

READY FOR CHATGPT VALIDATION
READY FOR MORRIS BACKLOG VALIDATION
```

---

## 28. Prochaine gate candidate

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D BACKLOG
APPLY D-V3.1-D2D-BLG-01…08
```

Après arbitrage uniquement :

```text
GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG
```

Après publication, merge et post-merge uniquement :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-D1
```

D2-D2 et D2-D3 nécessiteront ensuite leurs propres GO Delivery.

---

## 29. Instruction ChatGPT finale

Avant toute réponse à Morris, ChatGPT doit lire depuis Git :

`sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

au nouveau `D2D_BACKLOG_HANDOFF_TIP` et `D2D_BACKLOG_HANDOFF_BLOB` remontés par Cursor,
et vérifier indépendamment Cycle 5, GO, main@9231858a…, docs 20–23, document 24 complet,
CKC fallback, trois épics, stories, DoR/DoD, gates, dépendances, ordre, couverture,
BLG-01…08 non décidées, réserves ouvertes, Cursor UNVERIFIED, aucun code/config/dépendance,
aucun staging/commit/push/PR projet, handoff mono-fichier, verdict.
