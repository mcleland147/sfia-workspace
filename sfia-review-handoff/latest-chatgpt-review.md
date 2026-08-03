# Full Review Pack — SFIA Studio V3.1-D2-D Backlog Merge + Post-merge (Cycle 14)

## 0. En-tête

| Champ | Valeur |
|-------|--------|
| **Date/heure début** | 2026-08-03 21:57 CEST (+0200) |
| **Date/heure fin** | 2026-08-03 22:01 CEST (+0200) |
| **Rôle Cursor** | Cycle 14 — Merge + post-merge validation documentaire |
| **Cycle** | Cycle 14 — Post-merge |
| **Profil** | Standard |
| **Typologie** | DOC |
| **PR** | https://github.com/mcleland147/sfia-workspace/pull/307 |
| **MERGE_SHA** | `df4377249660aab79d764915ad3166608a8a9a7d` |
| **Parent 1** | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| **Parent 2** | `52c1d753ee890daf04a80ba37b11c6bf077dc307` |
| **Document hash on main** | `4190edb1338fd7e7b1ae2c137de406bacdd2c3c6eac2656e5cc82d3e86d2e0f5` |
| **Package hash** | `d9597e1f1bd5569fe2729b9d6feed6059264cf6038f098bc18d4640acc11acea` |
| **Main CI** | `30848071309` success |
| **PR CI predecessor** | `30846572514` success |

---

## 1. GO Morris

```text
GO MERGE SFIA STUDIO V3.1-D2-D
BACKLOG PUBLICATION PR #307

AUTHORIZE:
- FINAL BASE / HEAD / CI REVALIDATION
- MARK READY IF REQUIRED
- MERGE PR #307
- POST-MERGE VALIDATION

NO DELIVERY
NO CODE
NO CURSOR CAPABILITY VERIFICATION
NO D2-C CORRECTION
NO D2-D4 WRITE
NO METHOD PROMOTION
```

Date/heure GO : 2026-08-03 ~21:57 CEST (+0200)

---

## 2. Pre-merge revalidation

| Check | Résultat |
|-------|----------|
| Branche backlog | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| HEAD / origin/backlog | `52c1d753ee890daf04a80ba37b11c6bf077dc307` |
| origin/main pré-merge | `9231858a82a252c0bea5bdd60256cee480eebb87` |
| Divergence | 0 1 |
| Staged / tracked clean | oui (`.tmp-sfia-review/**` untracked) |
| Handoff predecessor tip | `c81ea7dbfd7079c128648dc80fb4c507d0f3a459` |
| Handoff predecessor blob | `df9d33c77c9eba2beb197e58186626ccc77b1f6c` |
| PR readiness verdict | READY WITH RESERVES / CANDIDATE MERGE DECISION |
| PR state pré-ready | OPEN · Draft · MERGEABLE · CLEAN |
| CI PR | `30846572514` success on exact head |

---

## 3. Mark ready

- `gh pr ready 307` exécuté
- isDraft : false
- base/head inchangés
- mergeable CLEAN avant merge

---

## 4. Merge

- Stratégie : **merge commit** (`gh pr merge --merge`)
- mergedAt : 2026-08-03T19:57:56Z
- state : MERGED
- MERGE_SHA : `df4377249660aab79d764915ad3166608a8a9a7d`
- Parent 1 (main) : `9231858a…`
- Parent 2 (head) : `52c1d753…`
- Message : Merge pull request #307 … docs(sfia-studio): publish V3.1-D2-D backlog
- delete_branch_on_merge : false → source branch **préservée** @ `52c1d753…`

### git show merge

```text
commit df4377249660aab79d764915ad3166608a8a9a7d
Merge: 9231858 52c1d75
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Mon Aug 3 21:57:56 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Mon Aug 3 21:57:56 2026 +0200

    Merge pull request #307 from mcleland147/backlog/sfia-studio-v3-1-d2-d-integration-foundation

    docs(sfia-studio): publish V3.1-D2-D backlog


```

---

## 5. Post-merge document on main

| Champ | Valeur |
|-------|--------|
| origin/main | `df4377249660aab79d764915ad3166608a8a9a7d` |
| Doc path | `…/24-v3-1-d2-d-integration-foundation-backlog.md` |
| SHA-256 | `4190edb1338fd7e7b1ae2c137de406bacdd2c3c6eac2656e5cc82d3e86d2e0f5` |
| Package | `d9597e1f1bd5569fe2729b9d6feed6059264cf6038f098bc18d4640acc11acea` |
| T2 BLG-01…08 ADOPTED | PASS |
| T historique NOT DECIDED | PASS |
| Delivery NOT AUTHORIZED | PASS |
| Réserves OPEN | PASS |
| Cursor UNVERIFIED | PASS |
| D2-D4 hors trajectoire | PASS |

### Document 24 complet sur main

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
| **Backlog arbitration** | `2026-08-03 21:26 CEST (+0200) — D-V3.1-D2D-BLG-01…08 — DECIDED — ADOPTED BY MORRIS` |
| **Publication GO** | `2026-08-03 21:29 CEST (+0200) — GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG` |
| **Decision authority** | `Morris` |
| **Git publication status** | `PUBLICATION CANDIDATE — PENDING PR REVIEW AND MERGE` |
| **Delivery status** | `NOT AUTHORIZED` |
| **Statut** | `D2-D BACKLOG ARBITRATED BY MORRIS — DOCUMENTARY PUBLICATION CANDIDATE — NO DELIVERY AUTHORIZED` |

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

## B2. Règle de lecture post-arbitrage

Le document conserve les marqueurs et fiches produits pendant le cycle
Backlog avant arbitrage Morris.

En conséquence :

1. la section T reste le decision pack historique pré-arbitrage ;
2. les statuts `NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED`
   de cette section décrivent l'état au moment de sa rédaction ;
3. les marqueurs `STORY CANDIDATE — NOT ADOPTED` des sections K, L et M
   sont conservés comme historique de conception ;
4. la section T2 est le record autoritatif de l'arbitrage Morris ;
5. la section T2 prime pour le statut courant des catalogues et stories ;
6. l'adoption dans le backlog ne constitue jamais un GO Delivery ;
7. les gates restent non consommés tant qu'un GO Morris distinct
   ne les a pas explicitement consommés ;
8. les sections U, V, W et X exposent la trajectoire et le statut courants
   après arbitrage.

En cas d'écart temporel :

T2, U, V, W et X priment pour le statut courant.
Les sections historiques restent conservées pour la traçabilité.

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

- **Question :** Adopter le catalogue D2D1-01…09 comme backlog candidat du socle Execution Run Core and Contract Foundation ?
- **Options :**
  - A. Adopter D2D1-01…09 sans modification.
  - B. Adopter un sous-ensemble et demander un redécoupage avant publication.
  - C. Rejeter le catalogue et rouvrir le découpage D2-D1.
- **Recommandation candidate :** Option A — adopter D2D1-01…09 comme catalogue cohérent avec TA-14, sans autoriser la Delivery.
- **Impacts :**
  - établit le périmètre candidat du futur cycle Delivery D2-D1 ;
  - couvre vocabulaire, contrats AJV, transitions, policies, evidence, repository memory, fixtures, composition server-only et pack de preuves ;
  - permet une validation de slice avant toute intégration provider ;
  - ne sélectionne aucun provider, transport D3 ou stockage durable.
- **Risques :**
  - couplage excessif entre vocabulaire, schemas et transitions ;
  - création involontaire d'une seconde autorité d'état ;
  - interprétation erronée du memory adapter comme solution durable ;
  - story D2D1-08 élargie au-delà des frontières de composition autorisées ;
  - verdict D2-D1 utilisé comme claim d'intégration provider.
- **Dette :**
  - dette documentaire faible si le catalogue est adopté tel quel ;
  - dette technique potentielle si les contrats, schemas et fixtures divergent pendant la Delivery ;
  - les chemins de fichiers restent candidats et pourront être affinés repo-first sans redécider l'architecture.
- **Réversibilité :**
  - élevée avant tout GO Delivery ;
  - moyenne après implémentation du core et des contrats ;
  - tout changement structurel après Delivery devra analyser migration, compatibilité des fixtures et autorité d'état.
- **Dépendances :** D-CAD-01…12 ; D-FD-01…12 ; D-FA-01…12 ; D-TA-01…14 ; BLG-01 ; DoR §I ; DoD §J ; registre des gates §H.
- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; Cursor reste UNVERIFIED mais n'est pas requis pour le socle fixture-first.
- **Prochaine gate :** Après arbitrage BLG-01…08 : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Aucun GO Delivery D2-D1 avant publication, merge et validation post-merge.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-03 — Catalogue D2-D2

- **Question :** Adopter le catalogue D2D2-01…10, avec D2D2-09 conservée comme external gate link et non comme story Delivery ?
- **Options :**
  - A. Adopter D2D2-01…10 avec D2D2-09 explicitement bloquée.
  - B. Adopter uniquement les wrappers non-Cursor et retirer D2D2-09 du catalogue.
  - C. Rejeter le catalogue et rouvrir le découpage des frontières provider.
- **Recommandation candidate :** Option A — conserver le catalogue complet afin que la dépendance Cursor reste visible, sans présenter Cursor comme compatible ou vérifié.
- **Impacts :**
  - structure les ports provider-independent et leur conformance ;
  - prépare AI-B, GIT-C read-only, SECRET-B et EVENT-B ;
  - formalise async, timeout, cancellation, late results et frontière adversariale ;
  - sépare le contrat sandbox de toute exécution Cursor réelle ;
  - maintient les providers live hors CI par défaut ;
  - n'autorise aucune Delivery D2-D2.
- **Risques :**
  - supposer la compatibilité des plateformes existantes sans contract-fit ;
  - fuite de secrets ou de contenu provider dans events/evidence ;
  - fallback silencieux entre transports Git ;
  - confusion entre contrat sandbox et preuve de sécurité ;
  - intégration Cursor live avant consommation du gate ;
  - dépendance cachée à un provider SDK.
- **Dette :**
  - dette d'adaptation possible si un wrapper échoue aux contract-fit tests ;
  - risque de duplication si les ports D2-D réimplémentent les capacités platform ;
  - conserver D2D2-09 comme gate link ajoute une faible dette documentaire mais évite une dette de gouvernance plus importante.
- **Réversibilité :**
  - élevée avant Delivery ;
  - moyenne après création des adapters ;
  - le targeted rewrite reste autorisé si la réutilisation échoue, sans modifier les contrats D2-D adoptés.
- **Dépendances :** BLG-01 et BLG-02 ; validation complète de D2-D1 ; TA-06 à TA-11 ; D2D2-01 comme conformance harness ; G-D2D-CURSOR-01 pour tout live Cursor ; G-D2D-D2C-01 avant exposition à une frontière externe non validée ; G-D2D-DELIVERY-02.
- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED.
- **Prochaine gate :** Après clôture validée de D2-D1 et après un GO Morris distinct : `GO DELIVERY SFIA STUDIO V3.1-D2-D2`. Le gate Cursor doit être consommé séparément avant toute story ou preuve live qui dépend effectivement de Cursor.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-04 — Catalogue D2-D3

- **Question :** Adopter D2D3-01…07 en conservant D2D3-04 et D2D3-05 comme éléments bloqués par leurs gates respectifs ?
- **Options :**
  - A. Adopter les sept éléments avec D2D3-04/05 explicitement BLOCKED.
  - B. Retirer les éléments bloqués jusqu'à consommation des gates.
  - C. Rejeter le catalogue et rouvrir le périmètre end-to-end.
- **Recommandation candidate :** Option A — maintenir les éléments bloqués afin de rendre visibles les conditions d'un futur niveau de preuve fort.
- **Impacts :**
  - définit la coordination end-to-end read-only ;
  - définit la projection server provider-independent ;
  - formalise evidence, source et truthfulness ;
  - maintient la preuve Cursor sandbox-real conditionnelle ;
  - rend explicites les décisions de persistance/environnement requises avant tout claim restart-safe ou multi-instance ;
  - sépare les niveaux UX exploration, UI Delivery et strong runtime verdict.
- **Risques :**
  - claim strong runtime sans gate Cursor ou persistance ;
  - confusion entre projection D3 et autorisation UI/transport ;
  - fuite de types provider ou d'erreurs brutes vers la projection ;
  - partial result présenté comme succeeded ;
  - preuve fixture présentée comme sandbox-real ou real ;
  - D2D3-04 ou D2D3-05 rendue Ready prématurément.
- **Dette :**
  - dette documentaire faible en gardant les blockers visibles ;
  - retirer les blockers créerait une dette de trajectoire et des dépendances cachées ;
  - dette technique potentielle si D2-D3 est commencé avant stabilisation D2-D1/D2-D2.
- **Réversibilité :**
  - élevée avant Delivery D2-D3 ;
  - moyenne après composition end-to-end ;
  - les niveaux de readiness restent révisables selon les preuves, sans modifier les anti-claims.
- **Dépendances :** BLG-01, BLG-02 et BLG-03 ; D2-D1 validé ; D2-D2 validé ; G-D2D-CURSOR-01 pour D2D3-04 ; G-D2D-PERSIST-01 pour D2D3-05 et tout strong runtime claim concerné ; G-D2D-D2C-01 lorsque la frontière externe concernée l'exige ; G-D2D-DELIVERY-03.
- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED.
- **Prochaine gate :** Après clôture validée de D2-D2 et consommation des gates applicables : `GO DELIVERY SFIA STUDIO V3.1-D2-D3`. Aucun GO D2-D3 n'est autorisé par l'arbitrage backlog seul.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-05 — DoR / DoD globaux

- **Question :** Adopter la Definition of Ready §I et la Definition of Done §J comme socle commun des futurs cycles Delivery D2-D ?
- **Options :**
  - A. Adopter les DoR/DoD globaux avec compléments spécifiques par slice.
  - B. Remplacer les règles globales par une DoR/DoD distincte pour chaque story.
  - C. Réduire la DoR/DoD à une checklist minimale.
- **Recommandation candidate :** Option A — conserver un socle commun et autoriser uniquement des compléments plus restrictifs dans les futurs cycles Delivery.
- **Impacts :**
  - harmonise les conditions de readiness et de clôture ;
  - impose un GO Delivery spécifique avant toute implémentation ;
  - exige critères négatifs, preuves, CI, réserves et anti-claims ;
  - évite de considérer une story comme Done sur la seule base du code ;
  - conserve PR readiness et merge comme cycles distincts.
- **Risques :**
  - usage mécanique sans analyse du contexte de la story ;
  - interprétation de tous les gates comme requis pour toutes les stories ;
  - checklist trop générique si les futurs prompts Delivery n'ajoutent pas les preuves propres à leur slice ;
  - confusion entre Done technique et clôture projet globale.
- **Dette :**
  - faible dette documentaire ;
  - réduit la dette de gouvernance et les écarts de preuve entre slices ;
  - peut nécessiter des compléments lors de l'instanciation de chaque Delivery.
- **Réversibilité :**
  - élevée avant Delivery ;
  - moyenne après plusieurs cycles utilisant ces définitions ;
  - toute évolution doit préserver les décisions déjà adoptées et ne pas lever implicitement une réserve.
- **Dépendances :** catalogues BLG-02…04 ; registre des gates BLG-07 ; décisions CAD/FD/FA/TA ; validation checklist SFIA ; futurs GO Delivery spécifiques.
- **Réserves :** les trois réserves restent ouvertes ; Cursor reste UNVERIFIED ; « gates nécessaires consommées » signifie uniquement les gates applicables à la story concernée.
- **Prochaine gate :** `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG` après arbitrage BLG-01…08. Les DoR/DoD ne deviennent exécutoires pour une slice qu'après son GO Delivery.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-06 — Ordre et dépendances

- **Question :** Adopter la matrice de dépendances §N et l'ordre candidat §O comme séquencement de référence du backlog ?
- **Options :**
  - A. Adopter l'ordre fondé sur les dépendances.
  - B. Autoriser une parallélisation anticipée sans validation de D2-D1.
  - C. Transformer l'ordre en planification par sprints, dates ou charges.
- **Recommandation candidate :** Option A — adopter l'ordre de dépendance sans calendrier ni estimation.
- **Impacts :**
  - D2-D1 reste le socle obligatoire ;
  - D2-D2 démarre après validation des contrats D2-D1 pertinents ;
  - D2-D3 démarre après validation D2-D1/D2-D2 et gates applicables ;
  - la parallélisation reste possible uniquement entre stories dont les dépendances sont réellement satisfaites ;
  - aucune promesse de date ou de capacité n'est créée.
- **Risques :**
  - séquencement interprété comme strictement sériel alors que certaines stories pourraient être parallélisées ;
  - dépendance manquante révélée pendant la Delivery ;
  - démarrage prématuré d'un adapter avant stabilisation des contrats ;
  - conversion abusive de P0/P1/P2 en priorité calendrier.
- **Dette :**
  - faible dette si la matrice est maintenue lors des évolutions ;
  - dette de rework importante si les dépendances sont ignorées ;
  - aucune dette d'estimation n'est créée dans ce cycle.
- **Réversibilité :**
  - élevée avant Delivery ;
  - toute modification d'ordre reste possible avec analyse d'impact ;
  - moyenne après implémentation des dépendances structurantes.
- **Dépendances :** TA-14 ; BLG-01…05 ; matrice de couverture des décisions §P ; registre des gates §H ; validation des slices précédentes.
- **Réserves :** les réserves sont transportées par chaque slice ; Cursor et la persistance restent des gates, pas des dépendances supposées résolues ; aucune réserve n'est levée par l'adoption de l'ordre.
- **Prochaine gate :** Après publication et post-merge du backlog : `GO DELIVERY SFIA STUDIO V3.1-D2-D1` uniquement. D2-D2 et D2-D3 conservent leurs propres gates ultérieures.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-07 — Registre de gates

- **Question :** Adopter le registre G-D2D-CURSOR-01, G-D2D-D2C-01, G-D2D-PERSIST-01 et G-D2D-DELIVERY-01/02/03 ?
- **Options :**
  - A. Adopter les gates séparés tels que documentés.
  - B. Intégrer les gates comme critères ordinaires dans les stories.
  - C. Reporter leur formalisation aux futurs cycles Delivery.
- **Recommandation candidate :** Option A — maintenir des gates distincts afin de préserver les arbitrages humains et les décisions structurantes.
- **Impacts :**
  - bloque tout Cursor live avant vérification explicite ;
  - maintient la correction D2-C hors du backlog D2-D ;
  - interdit les claims durable/restart-safe/multi-instance sans décision ;
  - impose un GO Delivery séparé pour chaque slice ;
  - évite qu'une story technique consomme implicitement une décision Morris.
- **Risques :**
  - multiplication ou mauvaise compréhension des gates ;
  - gate traité comme simple checklist par la Delivery ;
  - contournement du gate Cursor ou D2-C ;
  - persistance durable sélectionnée implicitement ;
  - confusion entre gate documenté et gate consommé.
- **Dette :**
  - légère dette de gouvernance liée au suivi explicite des gates ;
  - évite une dette structurelle plus forte liée aux arbitrages cachés ;
  - les gates devenus inutiles devront être fermés uniquement par décision Morris.
- **Réversibilité :**
  - moyenne ;
  - un gate peut être modifié ou supprimé avant consommation, mais uniquement après analyse d'impact et décision Morris ;
  - une consommation de gate doit rester traçable dans Git.
- **Dépendances :** TA-04 ; TA-05 ; TA-09 ; TA-13 ; TA-14 ; R-QA-D2C-01 ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; BLG-02…06.
- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; G-D2D-PERSIST-01 reste UNDECIDED.
- **Prochaine gate :** L'adoption de BLG-07 ne consomme aucun gate. La prochaine gate générale reste : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Chaque gate enregistré nécessitera ensuite son GO ou sa décision propre.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

### D-V3.1-D2D-BLG-08 — Trajectoire

- **Question :** Adopter la trajectoire suivante : validation backlog → publication documentaire → PR readiness → merge → validation post-merge → GO Delivery D2-D1 uniquement ?
- **Options :**
  - A. Adopter la trajectoire repo-first et séquentielle.
  - B. Autoriser directement la Delivery D2-D1 après arbitrage backlog.
  - C. Autoriser simultanément les Deliveries D2-D1, D2-D2 et D2-D3.
- **Recommandation candidate :** Option A — préserver la publication Git et le post-merge avant toute autorisation de Delivery.
- **Impacts :**
  - le document 24 devient source de vérité avant implémentation ;
  - le backlog adopté reste traçable par commit, PR et merge ;
  - D2-D1 est la seule slice éligible au premier GO Delivery ;
  - D2-D2 dépend de la clôture D2-D1 ;
  - D2-D3 dépend de la clôture D2-D2 et des gates applicables ;
  - aucune transition automatique n'est créée.
- **Risques :**
  - coût procédural supplémentaire avant le démarrage de la Delivery ;
  - contournement de la publication sous pression de calendrier ;
  - lancement parallèle prématuré de D2-D2 ou D2-D3 ;
  - confusion entre backlog adopté et Delivery autorisée.
- **Dette :**
  - dette documentaire et de gouvernance faible ;
  - une Delivery directe avant publication créerait une divergence entre Git, les décisions Morris et l'implémentation ;
  - la trajectoire réduit le risque de dette d'architecture implicite.
- **Réversibilité :**
  - moyenne ;
  - Morris peut rouvrir la trajectoire avant Delivery avec analyse d'impact ;
  - après démarrage D2-D1, toute modification doit préserver les preuves, dépendances et décisions déjà intégrées.
- **Dépendances :** BLG-01…07 adoptées ; publication du document 24 ; PR readiness documentaire ; merge documentaire ; CI main sur le merge SHA exact ; validation post-merge ChatGPT ; réserves transportées.
- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; D2-D4 write reste hors trajectoire.
- **Prochaine gate :** Après arbitrage BLG-01…08 : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Après publication, merge et validation post-merge uniquement : `GO DELIVERY SFIA STUDIO V3.1-D2-D1`.
- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED

---

## T2. Record autoritatif d'arbitrage Morris

### Autorité et portée

- **Décideur :** Morris.
- **Date/heure :** 2026-08-03 21:26 CEST (+0200).
- **GO consommé :**
  `GO ARBITRATION SFIA STUDIO V3.1-D2-D BACKLOG`.
- **Instruction :**
  `APPLY D-V3.1-D2D-BLG-01…08`.
- **Portée :**
  décisions backlog uniquement.
- **Non-portée :**
  aucune Delivery, aucun code, aucun provider live,
  aucune correction D2-C, aucune vérification Cursor,
  aucun D2-D4 write.

### Décisions adoptées

#### D-V3.1-D2D-BLG-01

**Décision :**

Structure à trois épics adoptée :

- D2-D1 — Execution Run Core and Contract Foundation ;
- D2-D2 — Provider Boundaries and Controlled Read-only Adapters ;
- D2-D3 — End-to-end Read-only Coordination and Strong Evidence.

D2-D4 write reste hors trajectoire.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-02

**Option adoptée :**

Option A — D2D1-01…09 adoptées comme catalogue backlog D2-D1.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-03

**Option adoptée :**

Option A — D2D2-01…10 adoptées, avec D2D2-09 conservée
comme external gate link bloquée et non comme autorisation Cursor live.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-04

**Option adoptée :**

Option A — D2D3-01…07 adoptées, avec D2D3-04 et D2D3-05
maintenues bloquées par leurs gates respectifs.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-05

**Option adoptée :**

Option A — les DoR et DoD globales sont adoptées comme socle commun.
Les futurs cycles Delivery peuvent uniquement ajouter des exigences
plus restrictives et contextualisées.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-06

**Option adoptée :**

Option A — l'ordre et la matrice de dépendances sont adoptés
sans calendrier, story points, charge ou engagement de capacité.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-07

**Option adoptée :**

Option A — le registre des gates séparés est adopté :

- G-D2D-CURSOR-01 ;
- G-D2D-D2C-01 ;
- G-D2D-PERSIST-01 ;
- G-D2D-DELIVERY-01 ;
- G-D2D-DELIVERY-02 ;
- G-D2D-DELIVERY-03.

L'adoption du registre ne consomme aucun gate.

**Statut :**

DECIDED — ADOPTED BY MORRIS

#### D-V3.1-D2D-BLG-08

**Option adoptée :**

Option A — trajectoire repo-first adoptée :

arbitrage backlog
→ publication documentaire
→ PR readiness
→ merge
→ validation post-merge
→ GO Delivery D2-D1 distinct.

D2-D2 et D2-D3 conservent leurs propres GO Delivery ultérieurs.

**Statut :**

DECIDED — ADOPTED BY MORRIS

### Statut courant des catalogues

| Périmètre | Statut courant |
|-----------|----------------|
| D2D1-01…09 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
| D2D2-01…08 et D2D2-10 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
| D2D2-09 | `EXTERNAL GATE LINK — ADOPTED IN BACKLOG — BLOCKED — CURSOR GATE REQUIRED` |
| D2D3-01…03, D2D3-06 et D2D3-07 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
| D2D3-04 | `BLOCKED ENABLER — ADOPTED IN BACKLOG — CURSOR PRODUCT CAPABILITIES UNVERIFIED` |
| D2D3-05 | `EXTERNAL GATE LINK — ADOPTED IN BACKLOG — PERSISTENCE / ENVIRONMENT DECISION REQUIRED` |
| D2-D4 write | `OUT OF TRAJECTORY — NO STORY — NO AUTHORIZATION` |

### Statut des éléments transverses

- DoR globale : **ADOPTED BY MORRIS**.
- DoD globale : **ADOPTED BY MORRIS**.
- Matrice de dépendances : **ADOPTED BY MORRIS**.
- Ordre de réalisation candidat : **ADOPTED AS DEPENDENCY ORDER**.
- Registre des gates : **ADOPTED — NO GATE CONSUMED**.
- Matrice de couverture des décisions : **ADOPTED AS TRACEABILITY RECORD**.
- Matrice de couverture des risques : **ADOPTED AS TRACEABILITY RECORD**.

### Réserves maintenues

- R-QA-REV-01 : **OPEN NOT LIFTED**.
- R-QA-REV-02 : **OPEN NOT LIFTED**.
- R-QA-D2C-01 : **OPEN NOT LIFTED**.
- CURSOR PRODUCT CAPABILITIES : **UNVERIFIED**.

---

## U. Trajectoire adoptée

> **Statut : DECIDED — ADOPTED BY MORRIS.**
> Cette trajectoire ne consomme aucun GO Delivery.

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

## V. État décisionnel et anti-claims post-arbitrage

### Claims désormais autorisés

Ce document autorise les affirmations documentaires suivantes :

- la structure backlog D2-D1 / D2-D2 / D2-D3 est adoptée ;
- les catalogues D2D1-01…09, D2D2-01…10 et D2D3-01…07
  sont adoptés dans le backlog ;
- les DoR et DoD globales sont adoptées ;
- l'ordre de dépendances est adopté ;
- le registre des gates est adopté ;
- la trajectoire repo-first est adoptée ;
- D2-D4 write est hors trajectoire.

### Distinctions obligatoires

L'adoption du backlog ne signifie pas que :

- la Delivery D2-D1 est autorisée ;
- une story est Ready pour implémentation ;
- les dépendances techniques sont satisfaites ;
- les gates externes sont consommés ;
- Cursor est compatible ou vérifié ;
- la correction D2-C est réalisée ;
- une persistance durable est sélectionnée ;
- D2-D3 peut revendiquer restart-safety ou multi-instance ;
- une UI ou un transport D3 est autorisé ;
- le code existe ;
- le produit est production-ready ou RUN READY.

### Claims toujours interdits

Ce document n'autorise pas et ne revendique pas :

- Delivery authorized ;
- D2-D1 ready for implementation ;
- D2-D2 ready for implementation ;
- D2-D3 ready for implementation ;
- code implemented ;
- provider integrated ;
- live provider validated ;
- Cursor compatible ;
- Cursor verified ;
- sandbox secure ;
- D2-C reserve lifted ;
- durable store selected ;
- target runtime environment selected ;
- restart-safe ;
- multi-instance ready ;
- queue or permanent worker selected ;
- production-ready ;
- RUN READY ;
- D3 UI ready ;
- D3 transport selected ;
- Git write enabled ;
- CreateCycle enabled ;
- D2-D4 write authorized ;
- method promoted.

### Gates toujours non consommés

- G-D2D-CURSOR-01 : REQUIRED — NOT EXECUTED.
- G-D2D-D2C-01 : REQUIRED WHEN APPLICABLE — NOT EXECUTED.
- G-D2D-PERSIST-01 : UNDECIDED.
- G-D2D-DELIVERY-01 : NOT AUTHORIZED.
- G-D2D-DELIVERY-02 : NOT AUTHORIZED.
- G-D2D-DELIVERY-03 : NOT AUTHORIZED.

---

## W. Verdict documentaire

```text
V3.1-D2-D BACKLOG ARBITRATED AND
DOCUMENTARY PUBLICATION CANDIDATE WITH RESERVES —

MAIN POST-MERGE BASE VERIFIED —
DOCUMENTS 20 / 21 / 22 / 23 APPLIED —
D-CAD-01…12 APPLIED —
D-FD-01…12 APPLIED —
D-FA-01…12 APPLIED —
D-TA-01…14 APPLIED —

D-V3.1-D2D-BLG-01…08
DECIDED — ADOPTED BY MORRIS —

D2-D1 EPIC AND STORIES ADOPTED IN BACKLOG —
D2-D2 EPIC AND STORIES ADOPTED IN BACKLOG —
D2-D3 EPIC AND STORIES ADOPTED IN BACKLOG —
D2-D4 WRITE OUT OF TRAJECTORY —

DOR / DOD ADOPTED —
DEPENDENCY ORDER ADOPTED —
EXTERNAL GATE REGISTRY ADOPTED —
NO EXTERNAL GATE CONSUMED —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

NO DELIVERY AUTHORIZED —
NO CODE —
NO CONFIG —
NO DEPENDENCY CHANGE —
NO PROVIDER LIVE —
NO CURSOR CAPABILITY VERIFICATION —
NO D2-C CORRECTION —
NO UI —
NO D3 DELIVERY —
NO D2-D4 WRITE —
NO CREATECYCLE —
NO PRODUCT GIT WRITE CAPABILITY —
NO METHOD PROMOTION —

READY FOR DOCUMENTARY PR VALIDATION
```

---

## X. Prochaine gate

Après publication de la branche, création de la PR Draft et CI verte :

```text
GO PR READINESS SFIA STUDIO V3.1-D2-D
BACKLOG PUBLICATION
```

Le futur PR readiness n'autorise pas le merge.

Après PR readiness validée uniquement :

```text
GO MERGE SFIA STUDIO V3.1-D2-D
BACKLOG PUBLICATION
```

Après merge et validation post-merge uniquement :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-D1
```

Aucune transition automatique vers D2-D2 ou D2-D3.

`````

---

## 6. Diff post-merge (parent1 → MERGE_SHA)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
new file mode 100644
index 0000000..3293fe7
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/24-v3-1-d2-d-integration-foundation-backlog.md
@@ -0,0 +1,1926 @@
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
+| **Backlog arbitration** | `2026-08-03 21:26 CEST (+0200) — D-V3.1-D2D-BLG-01…08 — DECIDED — ADOPTED BY MORRIS` |
+| **Publication GO** | `2026-08-03 21:29 CEST (+0200) — GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG` |
+| **Decision authority** | `Morris` |
+| **Git publication status** | `PUBLICATION CANDIDATE — PENDING PR REVIEW AND MERGE` |
+| **Delivery status** | `NOT AUTHORIZED` |
+| **Statut** | `D2-D BACKLOG ARBITRATED BY MORRIS — DOCUMENTARY PUBLICATION CANDIDATE — NO DELIVERY AUTHORIZED` |
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
+## B2. Règle de lecture post-arbitrage
+
+Le document conserve les marqueurs et fiches produits pendant le cycle
+Backlog avant arbitrage Morris.
+
+En conséquence :
+
+1. la section T reste le decision pack historique pré-arbitrage ;
+2. les statuts `NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED`
+   de cette section décrivent l'état au moment de sa rédaction ;
+3. les marqueurs `STORY CANDIDATE — NOT ADOPTED` des sections K, L et M
+   sont conservés comme historique de conception ;
+4. la section T2 est le record autoritatif de l'arbitrage Morris ;
+5. la section T2 prime pour le statut courant des catalogues et stories ;
+6. l'adoption dans le backlog ne constitue jamais un GO Delivery ;
+7. les gates restent non consommés tant qu'un GO Morris distinct
+   ne les a pas explicitement consommés ;
+8. les sections U, V, W et X exposent la trajectoire et le statut courants
+   après arbitrage.
+
+En cas d'écart temporel :
+
+T2, U, V, W et X priment pour le statut courant.
+Les sections historiques restent conservées pour la traçabilité.
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
+- **Question :** Adopter le catalogue D2D1-01…09 comme backlog candidat du socle Execution Run Core and Contract Foundation ?
+- **Options :**
+  - A. Adopter D2D1-01…09 sans modification.
+  - B. Adopter un sous-ensemble et demander un redécoupage avant publication.
+  - C. Rejeter le catalogue et rouvrir le découpage D2-D1.
+- **Recommandation candidate :** Option A — adopter D2D1-01…09 comme catalogue cohérent avec TA-14, sans autoriser la Delivery.
+- **Impacts :**
+  - établit le périmètre candidat du futur cycle Delivery D2-D1 ;
+  - couvre vocabulaire, contrats AJV, transitions, policies, evidence, repository memory, fixtures, composition server-only et pack de preuves ;
+  - permet une validation de slice avant toute intégration provider ;
+  - ne sélectionne aucun provider, transport D3 ou stockage durable.
+- **Risques :**
+  - couplage excessif entre vocabulaire, schemas et transitions ;
+  - création involontaire d'une seconde autorité d'état ;
+  - interprétation erronée du memory adapter comme solution durable ;
+  - story D2D1-08 élargie au-delà des frontières de composition autorisées ;
+  - verdict D2-D1 utilisé comme claim d'intégration provider.
+- **Dette :**
+  - dette documentaire faible si le catalogue est adopté tel quel ;
+  - dette technique potentielle si les contrats, schemas et fixtures divergent pendant la Delivery ;
+  - les chemins de fichiers restent candidats et pourront être affinés repo-first sans redécider l'architecture.
+- **Réversibilité :**
+  - élevée avant tout GO Delivery ;
+  - moyenne après implémentation du core et des contrats ;
+  - tout changement structurel après Delivery devra analyser migration, compatibilité des fixtures et autorité d'état.
+- **Dépendances :** D-CAD-01…12 ; D-FD-01…12 ; D-FA-01…12 ; D-TA-01…14 ; BLG-01 ; DoR §I ; DoD §J ; registre des gates §H.
+- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; Cursor reste UNVERIFIED mais n'est pas requis pour le socle fixture-first.
+- **Prochaine gate :** Après arbitrage BLG-01…08 : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Aucun GO Delivery D2-D1 avant publication, merge et validation post-merge.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-03 — Catalogue D2-D2
+
+- **Question :** Adopter le catalogue D2D2-01…10, avec D2D2-09 conservée comme external gate link et non comme story Delivery ?
+- **Options :**
+  - A. Adopter D2D2-01…10 avec D2D2-09 explicitement bloquée.
+  - B. Adopter uniquement les wrappers non-Cursor et retirer D2D2-09 du catalogue.
+  - C. Rejeter le catalogue et rouvrir le découpage des frontières provider.
+- **Recommandation candidate :** Option A — conserver le catalogue complet afin que la dépendance Cursor reste visible, sans présenter Cursor comme compatible ou vérifié.
+- **Impacts :**
+  - structure les ports provider-independent et leur conformance ;
+  - prépare AI-B, GIT-C read-only, SECRET-B et EVENT-B ;
+  - formalise async, timeout, cancellation, late results et frontière adversariale ;
+  - sépare le contrat sandbox de toute exécution Cursor réelle ;
+  - maintient les providers live hors CI par défaut ;
+  - n'autorise aucune Delivery D2-D2.
+- **Risques :**
+  - supposer la compatibilité des plateformes existantes sans contract-fit ;
+  - fuite de secrets ou de contenu provider dans events/evidence ;
+  - fallback silencieux entre transports Git ;
+  - confusion entre contrat sandbox et preuve de sécurité ;
+  - intégration Cursor live avant consommation du gate ;
+  - dépendance cachée à un provider SDK.
+- **Dette :**
+  - dette d'adaptation possible si un wrapper échoue aux contract-fit tests ;
+  - risque de duplication si les ports D2-D réimplémentent les capacités platform ;
+  - conserver D2D2-09 comme gate link ajoute une faible dette documentaire mais évite une dette de gouvernance plus importante.
+- **Réversibilité :**
+  - élevée avant Delivery ;
+  - moyenne après création des adapters ;
+  - le targeted rewrite reste autorisé si la réutilisation échoue, sans modifier les contrats D2-D adoptés.
+- **Dépendances :** BLG-01 et BLG-02 ; validation complète de D2-D1 ; TA-06 à TA-11 ; D2D2-01 comme conformance harness ; G-D2D-CURSOR-01 pour tout live Cursor ; G-D2D-D2C-01 avant exposition à une frontière externe non validée ; G-D2D-DELIVERY-02.
+- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED.
+- **Prochaine gate :** Après clôture validée de D2-D1 et après un GO Morris distinct : `GO DELIVERY SFIA STUDIO V3.1-D2-D2`. Le gate Cursor doit être consommé séparément avant toute story ou preuve live qui dépend effectivement de Cursor.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-04 — Catalogue D2-D3
+
+- **Question :** Adopter D2D3-01…07 en conservant D2D3-04 et D2D3-05 comme éléments bloqués par leurs gates respectifs ?
+- **Options :**
+  - A. Adopter les sept éléments avec D2D3-04/05 explicitement BLOCKED.
+  - B. Retirer les éléments bloqués jusqu'à consommation des gates.
+  - C. Rejeter le catalogue et rouvrir le périmètre end-to-end.
+- **Recommandation candidate :** Option A — maintenir les éléments bloqués afin de rendre visibles les conditions d'un futur niveau de preuve fort.
+- **Impacts :**
+  - définit la coordination end-to-end read-only ;
+  - définit la projection server provider-independent ;
+  - formalise evidence, source et truthfulness ;
+  - maintient la preuve Cursor sandbox-real conditionnelle ;
+  - rend explicites les décisions de persistance/environnement requises avant tout claim restart-safe ou multi-instance ;
+  - sépare les niveaux UX exploration, UI Delivery et strong runtime verdict.
+- **Risques :**
+  - claim strong runtime sans gate Cursor ou persistance ;
+  - confusion entre projection D3 et autorisation UI/transport ;
+  - fuite de types provider ou d'erreurs brutes vers la projection ;
+  - partial result présenté comme succeeded ;
+  - preuve fixture présentée comme sandbox-real ou real ;
+  - D2D3-04 ou D2D3-05 rendue Ready prématurément.
+- **Dette :**
+  - dette documentaire faible en gardant les blockers visibles ;
+  - retirer les blockers créerait une dette de trajectoire et des dépendances cachées ;
+  - dette technique potentielle si D2-D3 est commencé avant stabilisation D2-D1/D2-D2.
+- **Réversibilité :**
+  - élevée avant Delivery D2-D3 ;
+  - moyenne après composition end-to-end ;
+  - les niveaux de readiness restent révisables selon les preuves, sans modifier les anti-claims.
+- **Dépendances :** BLG-01, BLG-02 et BLG-03 ; D2-D1 validé ; D2-D2 validé ; G-D2D-CURSOR-01 pour D2D3-04 ; G-D2D-PERSIST-01 pour D2D3-05 et tout strong runtime claim concerné ; G-D2D-D2C-01 lorsque la frontière externe concernée l'exige ; G-D2D-DELIVERY-03.
+- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED.
+- **Prochaine gate :** Après clôture validée de D2-D2 et consommation des gates applicables : `GO DELIVERY SFIA STUDIO V3.1-D2-D3`. Aucun GO D2-D3 n'est autorisé par l'arbitrage backlog seul.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-05 — DoR / DoD globaux
+
+- **Question :** Adopter la Definition of Ready §I et la Definition of Done §J comme socle commun des futurs cycles Delivery D2-D ?
+- **Options :**
+  - A. Adopter les DoR/DoD globaux avec compléments spécifiques par slice.
+  - B. Remplacer les règles globales par une DoR/DoD distincte pour chaque story.
+  - C. Réduire la DoR/DoD à une checklist minimale.
+- **Recommandation candidate :** Option A — conserver un socle commun et autoriser uniquement des compléments plus restrictifs dans les futurs cycles Delivery.
+- **Impacts :**
+  - harmonise les conditions de readiness et de clôture ;
+  - impose un GO Delivery spécifique avant toute implémentation ;
+  - exige critères négatifs, preuves, CI, réserves et anti-claims ;
+  - évite de considérer une story comme Done sur la seule base du code ;
+  - conserve PR readiness et merge comme cycles distincts.
+- **Risques :**
+  - usage mécanique sans analyse du contexte de la story ;
+  - interprétation de tous les gates comme requis pour toutes les stories ;
+  - checklist trop générique si les futurs prompts Delivery n'ajoutent pas les preuves propres à leur slice ;
+  - confusion entre Done technique et clôture projet globale.
+- **Dette :**
+  - faible dette documentaire ;
+  - réduit la dette de gouvernance et les écarts de preuve entre slices ;
+  - peut nécessiter des compléments lors de l'instanciation de chaque Delivery.
+- **Réversibilité :**
+  - élevée avant Delivery ;
+  - moyenne après plusieurs cycles utilisant ces définitions ;
+  - toute évolution doit préserver les décisions déjà adoptées et ne pas lever implicitement une réserve.
+- **Dépendances :** catalogues BLG-02…04 ; registre des gates BLG-07 ; décisions CAD/FD/FA/TA ; validation checklist SFIA ; futurs GO Delivery spécifiques.
+- **Réserves :** les trois réserves restent ouvertes ; Cursor reste UNVERIFIED ; « gates nécessaires consommées » signifie uniquement les gates applicables à la story concernée.
+- **Prochaine gate :** `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG` après arbitrage BLG-01…08. Les DoR/DoD ne deviennent exécutoires pour une slice qu'après son GO Delivery.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-06 — Ordre et dépendances
+
+- **Question :** Adopter la matrice de dépendances §N et l'ordre candidat §O comme séquencement de référence du backlog ?
+- **Options :**
+  - A. Adopter l'ordre fondé sur les dépendances.
+  - B. Autoriser une parallélisation anticipée sans validation de D2-D1.
+  - C. Transformer l'ordre en planification par sprints, dates ou charges.
+- **Recommandation candidate :** Option A — adopter l'ordre de dépendance sans calendrier ni estimation.
+- **Impacts :**
+  - D2-D1 reste le socle obligatoire ;
+  - D2-D2 démarre après validation des contrats D2-D1 pertinents ;
+  - D2-D3 démarre après validation D2-D1/D2-D2 et gates applicables ;
+  - la parallélisation reste possible uniquement entre stories dont les dépendances sont réellement satisfaites ;
+  - aucune promesse de date ou de capacité n'est créée.
+- **Risques :**
+  - séquencement interprété comme strictement sériel alors que certaines stories pourraient être parallélisées ;
+  - dépendance manquante révélée pendant la Delivery ;
+  - démarrage prématuré d'un adapter avant stabilisation des contrats ;
+  - conversion abusive de P0/P1/P2 en priorité calendrier.
+- **Dette :**
+  - faible dette si la matrice est maintenue lors des évolutions ;
+  - dette de rework importante si les dépendances sont ignorées ;
+  - aucune dette d'estimation n'est créée dans ce cycle.
+- **Réversibilité :**
+  - élevée avant Delivery ;
+  - toute modification d'ordre reste possible avec analyse d'impact ;
+  - moyenne après implémentation des dépendances structurantes.
+- **Dépendances :** TA-14 ; BLG-01…05 ; matrice de couverture des décisions §P ; registre des gates §H ; validation des slices précédentes.
+- **Réserves :** les réserves sont transportées par chaque slice ; Cursor et la persistance restent des gates, pas des dépendances supposées résolues ; aucune réserve n'est levée par l'adoption de l'ordre.
+- **Prochaine gate :** Après publication et post-merge du backlog : `GO DELIVERY SFIA STUDIO V3.1-D2-D1` uniquement. D2-D2 et D2-D3 conservent leurs propres gates ultérieures.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-07 — Registre de gates
+
+- **Question :** Adopter le registre G-D2D-CURSOR-01, G-D2D-D2C-01, G-D2D-PERSIST-01 et G-D2D-DELIVERY-01/02/03 ?
+- **Options :**
+  - A. Adopter les gates séparés tels que documentés.
+  - B. Intégrer les gates comme critères ordinaires dans les stories.
+  - C. Reporter leur formalisation aux futurs cycles Delivery.
+- **Recommandation candidate :** Option A — maintenir des gates distincts afin de préserver les arbitrages humains et les décisions structurantes.
+- **Impacts :**
+  - bloque tout Cursor live avant vérification explicite ;
+  - maintient la correction D2-C hors du backlog D2-D ;
+  - interdit les claims durable/restart-safe/multi-instance sans décision ;
+  - impose un GO Delivery séparé pour chaque slice ;
+  - évite qu'une story technique consomme implicitement une décision Morris.
+- **Risques :**
+  - multiplication ou mauvaise compréhension des gates ;
+  - gate traité comme simple checklist par la Delivery ;
+  - contournement du gate Cursor ou D2-C ;
+  - persistance durable sélectionnée implicitement ;
+  - confusion entre gate documenté et gate consommé.
+- **Dette :**
+  - légère dette de gouvernance liée au suivi explicite des gates ;
+  - évite une dette structurelle plus forte liée aux arbitrages cachés ;
+  - les gates devenus inutiles devront être fermés uniquement par décision Morris.
+- **Réversibilité :**
+  - moyenne ;
+  - un gate peut être modifié ou supprimé avant consommation, mais uniquement après analyse d'impact et décision Morris ;
+  - une consommation de gate doit rester traçable dans Git.
+- **Dépendances :** TA-04 ; TA-05 ; TA-09 ; TA-13 ; TA-14 ; R-QA-D2C-01 ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; BLG-02…06.
+- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; G-D2D-PERSIST-01 reste UNDECIDED.
+- **Prochaine gate :** L'adoption de BLG-07 ne consomme aucun gate. La prochaine gate générale reste : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Chaque gate enregistré nécessitera ensuite son GO ou sa décision propre.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+### D-V3.1-D2D-BLG-08 — Trajectoire
+
+- **Question :** Adopter la trajectoire suivante : validation backlog → publication documentaire → PR readiness → merge → validation post-merge → GO Delivery D2-D1 uniquement ?
+- **Options :**
+  - A. Adopter la trajectoire repo-first et séquentielle.
+  - B. Autoriser directement la Delivery D2-D1 après arbitrage backlog.
+  - C. Autoriser simultanément les Deliveries D2-D1, D2-D2 et D2-D3.
+- **Recommandation candidate :** Option A — préserver la publication Git et le post-merge avant toute autorisation de Delivery.
+- **Impacts :**
+  - le document 24 devient source de vérité avant implémentation ;
+  - le backlog adopté reste traçable par commit, PR et merge ;
+  - D2-D1 est la seule slice éligible au premier GO Delivery ;
+  - D2-D2 dépend de la clôture D2-D1 ;
+  - D2-D3 dépend de la clôture D2-D2 et des gates applicables ;
+  - aucune transition automatique n'est créée.
+- **Risques :**
+  - coût procédural supplémentaire avant le démarrage de la Delivery ;
+  - contournement de la publication sous pression de calendrier ;
+  - lancement parallèle prématuré de D2-D2 ou D2-D3 ;
+  - confusion entre backlog adopté et Delivery autorisée.
+- **Dette :**
+  - dette documentaire et de gouvernance faible ;
+  - une Delivery directe avant publication créerait une divergence entre Git, les décisions Morris et l'implémentation ;
+  - la trajectoire réduit le risque de dette d'architecture implicite.
+- **Réversibilité :**
+  - moyenne ;
+  - Morris peut rouvrir la trajectoire avant Delivery avec analyse d'impact ;
+  - après démarrage D2-D1, toute modification doit préserver les preuves, dépendances et décisions déjà intégrées.
+- **Dépendances :** BLG-01…07 adoptées ; publication du document 24 ; PR readiness documentaire ; merge documentaire ; CI main sur le merge SHA exact ; validation post-merge ChatGPT ; réserves transportées.
+- **Réserves :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED ; R-QA-D2C-01 OPEN NOT LIFTED ; CURSOR PRODUCT CAPABILITIES — UNVERIFIED ; D2-D4 write reste hors trajectoire.
+- **Prochaine gate :** Après arbitrage BLG-01…08 : `GO DOCUMENTARY PUBLICATION SFIA STUDIO V3.1-D2-D BACKLOG`. Après publication, merge et validation post-merge uniquement : `GO DELIVERY SFIA STUDIO V3.1-D2-D1`.
+- **Statut :** NOT DECIDED — MORRIS BACKLOG VALIDATION REQUIRED
+
+---
+
+## T2. Record autoritatif d'arbitrage Morris
+
+### Autorité et portée
+
+- **Décideur :** Morris.
+- **Date/heure :** 2026-08-03 21:26 CEST (+0200).
+- **GO consommé :**
+  `GO ARBITRATION SFIA STUDIO V3.1-D2-D BACKLOG`.
+- **Instruction :**
+  `APPLY D-V3.1-D2D-BLG-01…08`.
+- **Portée :**
+  décisions backlog uniquement.
+- **Non-portée :**
+  aucune Delivery, aucun code, aucun provider live,
+  aucune correction D2-C, aucune vérification Cursor,
+  aucun D2-D4 write.
+
+### Décisions adoptées
+
+#### D-V3.1-D2D-BLG-01
+
+**Décision :**
+
+Structure à trois épics adoptée :
+
+- D2-D1 — Execution Run Core and Contract Foundation ;
+- D2-D2 — Provider Boundaries and Controlled Read-only Adapters ;
+- D2-D3 — End-to-end Read-only Coordination and Strong Evidence.
+
+D2-D4 write reste hors trajectoire.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-02
+
+**Option adoptée :**
+
+Option A — D2D1-01…09 adoptées comme catalogue backlog D2-D1.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-03
+
+**Option adoptée :**
+
+Option A — D2D2-01…10 adoptées, avec D2D2-09 conservée
+comme external gate link bloquée et non comme autorisation Cursor live.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-04
+
+**Option adoptée :**
+
+Option A — D2D3-01…07 adoptées, avec D2D3-04 et D2D3-05
+maintenues bloquées par leurs gates respectifs.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-05
+
+**Option adoptée :**
+
+Option A — les DoR et DoD globales sont adoptées comme socle commun.
+Les futurs cycles Delivery peuvent uniquement ajouter des exigences
+plus restrictives et contextualisées.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-06
+
+**Option adoptée :**
+
+Option A — l'ordre et la matrice de dépendances sont adoptés
+sans calendrier, story points, charge ou engagement de capacité.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-07
+
+**Option adoptée :**
+
+Option A — le registre des gates séparés est adopté :
+
+- G-D2D-CURSOR-01 ;
+- G-D2D-D2C-01 ;
+- G-D2D-PERSIST-01 ;
+- G-D2D-DELIVERY-01 ;
+- G-D2D-DELIVERY-02 ;
+- G-D2D-DELIVERY-03.
+
+L'adoption du registre ne consomme aucun gate.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+#### D-V3.1-D2D-BLG-08
+
+**Option adoptée :**
+
+Option A — trajectoire repo-first adoptée :
+
+arbitrage backlog
+→ publication documentaire
+→ PR readiness
+→ merge
+→ validation post-merge
+→ GO Delivery D2-D1 distinct.
+
+D2-D2 et D2-D3 conservent leurs propres GO Delivery ultérieurs.
+
+**Statut :**
+
+DECIDED — ADOPTED BY MORRIS
+
+### Statut courant des catalogues
+
+| Périmètre | Statut courant |
+|-----------|----------------|
+| D2D1-01…09 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
+| D2D2-01…08 et D2D2-10 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
+| D2D2-09 | `EXTERNAL GATE LINK — ADOPTED IN BACKLOG — BLOCKED — CURSOR GATE REQUIRED` |
+| D2D3-01…03, D2D3-06 et D2D3-07 | `BACKLOG STORIES — ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED` |
+| D2D3-04 | `BLOCKED ENABLER — ADOPTED IN BACKLOG — CURSOR PRODUCT CAPABILITIES UNVERIFIED` |
+| D2D3-05 | `EXTERNAL GATE LINK — ADOPTED IN BACKLOG — PERSISTENCE / ENVIRONMENT DECISION REQUIRED` |
+| D2-D4 write | `OUT OF TRAJECTORY — NO STORY — NO AUTHORIZATION` |
+
+### Statut des éléments transverses
+
+- DoR globale : **ADOPTED BY MORRIS**.
+- DoD globale : **ADOPTED BY MORRIS**.
+- Matrice de dépendances : **ADOPTED BY MORRIS**.
+- Ordre de réalisation candidat : **ADOPTED AS DEPENDENCY ORDER**.
+- Registre des gates : **ADOPTED — NO GATE CONSUMED**.
+- Matrice de couverture des décisions : **ADOPTED AS TRACEABILITY RECORD**.
+- Matrice de couverture des risques : **ADOPTED AS TRACEABILITY RECORD**.
+
+### Réserves maintenues
+
+- R-QA-REV-01 : **OPEN NOT LIFTED**.
+- R-QA-REV-02 : **OPEN NOT LIFTED**.
+- R-QA-D2C-01 : **OPEN NOT LIFTED**.
+- CURSOR PRODUCT CAPABILITIES : **UNVERIFIED**.
+
+---
+
+## U. Trajectoire adoptée
+
+> **Statut : DECIDED — ADOPTED BY MORRIS.**
+> Cette trajectoire ne consomme aucun GO Delivery.
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
+## V. État décisionnel et anti-claims post-arbitrage
+
+### Claims désormais autorisés
+
+Ce document autorise les affirmations documentaires suivantes :
+
+- la structure backlog D2-D1 / D2-D2 / D2-D3 est adoptée ;
+- les catalogues D2D1-01…09, D2D2-01…10 et D2D3-01…07
+  sont adoptés dans le backlog ;
+- les DoR et DoD globales sont adoptées ;
+- l'ordre de dépendances est adopté ;
+- le registre des gates est adopté ;
+- la trajectoire repo-first est adoptée ;
+- D2-D4 write est hors trajectoire.
+
+### Distinctions obligatoires
+
+L'adoption du backlog ne signifie pas que :
+
+- la Delivery D2-D1 est autorisée ;
+- une story est Ready pour implémentation ;
+- les dépendances techniques sont satisfaites ;
+- les gates externes sont consommés ;
+- Cursor est compatible ou vérifié ;
+- la correction D2-C est réalisée ;
+- une persistance durable est sélectionnée ;
+- D2-D3 peut revendiquer restart-safety ou multi-instance ;
+- une UI ou un transport D3 est autorisé ;
+- le code existe ;
+- le produit est production-ready ou RUN READY.
+
+### Claims toujours interdits
+
+Ce document n'autorise pas et ne revendique pas :
+
+- Delivery authorized ;
+- D2-D1 ready for implementation ;
+- D2-D2 ready for implementation ;
+- D2-D3 ready for implementation ;
+- code implemented ;
+- provider integrated ;
+- live provider validated ;
+- Cursor compatible ;
+- Cursor verified ;
+- sandbox secure ;
+- D2-C reserve lifted ;
+- durable store selected ;
+- target runtime environment selected ;
+- restart-safe ;
+- multi-instance ready ;
+- queue or permanent worker selected ;
+- production-ready ;
+- RUN READY ;
+- D3 UI ready ;
+- D3 transport selected ;
+- Git write enabled ;
+- CreateCycle enabled ;
+- D2-D4 write authorized ;
+- method promoted.
+
+### Gates toujours non consommés
+
+- G-D2D-CURSOR-01 : REQUIRED — NOT EXECUTED.
+- G-D2D-D2C-01 : REQUIRED WHEN APPLICABLE — NOT EXECUTED.
+- G-D2D-PERSIST-01 : UNDECIDED.
+- G-D2D-DELIVERY-01 : NOT AUTHORIZED.
+- G-D2D-DELIVERY-02 : NOT AUTHORIZED.
+- G-D2D-DELIVERY-03 : NOT AUTHORIZED.
+
+---
+
+## W. Verdict documentaire
+
+```text
+V3.1-D2-D BACKLOG ARBITRATED AND
+DOCUMENTARY PUBLICATION CANDIDATE WITH RESERVES —
+
+MAIN POST-MERGE BASE VERIFIED —
+DOCUMENTS 20 / 21 / 22 / 23 APPLIED —
+D-CAD-01…12 APPLIED —
+D-FD-01…12 APPLIED —
+D-FA-01…12 APPLIED —
+D-TA-01…14 APPLIED —
+
+D-V3.1-D2D-BLG-01…08
+DECIDED — ADOPTED BY MORRIS —
+
+D2-D1 EPIC AND STORIES ADOPTED IN BACKLOG —
+D2-D2 EPIC AND STORIES ADOPTED IN BACKLOG —
+D2-D3 EPIC AND STORIES ADOPTED IN BACKLOG —
+D2-D4 WRITE OUT OF TRAJECTORY —
+
+DOR / DOD ADOPTED —
+DEPENDENCY ORDER ADOPTED —
+EXTERNAL GATE REGISTRY ADOPTED —
+NO EXTERNAL GATE CONSUMED —
+
+R-QA-REV-01 OPEN NOT LIFTED —
+R-QA-REV-02 OPEN NOT LIFTED —
+R-QA-D2C-01 OPEN NOT LIFTED —
+CURSOR PRODUCT CAPABILITIES UNVERIFIED —
+
+NO DELIVERY AUTHORIZED —
+NO CODE —
+NO CONFIG —
+NO DEPENDENCY CHANGE —
+NO PROVIDER LIVE —
+NO CURSOR CAPABILITY VERIFICATION —
+NO D2-C CORRECTION —
+NO UI —
+NO D3 DELIVERY —
+NO D2-D4 WRITE —
+NO CREATECYCLE —
+NO PRODUCT GIT WRITE CAPABILITY —
+NO METHOD PROMOTION —
+
+READY FOR DOCUMENTARY PR VALIDATION
+```
+
+---
+
+## X. Prochaine gate
+
+Après publication de la branche, création de la PR Draft et CI verte :
+
+```text
+GO PR READINESS SFIA STUDIO V3.1-D2-D
+BACKLOG PUBLICATION
+```
+
+Le futur PR readiness n'autorise pas le merge.
+
+Après PR readiness validée uniquement :
+
+```text
+GO MERGE SFIA STUDIO V3.1-D2-D
+BACKLOG PUBLICATION
+```
+
+Après merge et validation post-merge uniquement :
+
+```text
+GO DELIVERY SFIA STUDIO V3.1-D2-D1
+```
+
+Aucune transition automatique vers D2-D2 ou D2-D3.

```

---

## 7. Main CI

| Champ | Valeur |
|-------|--------|
| Run ID | `30848071309` |
| Name | SFIA Studio CI |
| Event | push |
| Head SHA | `df4377249660aab79d764915ad3166608a8a9a7d` |
| Status | completed |
| Conclusion | **success** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30848071309 |

Jobs:
- Detect SFIA Studio changes: success
- Build and validate SFIA Studio: success
- SFIA Studio Required Gate: success

---

## 8. Réserves et gates (transportés, non levés)

| ID | Statut |
|----|--------|
| R-QA-REV-01 | OPEN NOT LIFTED |
| R-QA-REV-02 | OPEN NOT LIFTED |
| R-QA-D2C-01 | OPEN NOT LIFTED |
| CURSOR PRODUCT CAPABILITIES | UNVERIFIED |
| G-D2D-CURSOR-01 | NOT EXECUTED |
| G-D2D-D2C-01 | NOT EXECUTED |
| G-D2D-PERSIST-01 | UNDECIDED |
| G-D2D-DELIVERY-01/02/03 | NOT AUTHORIZED |

---

## 9. Anti-claims post-merge

Ce merge **n'autorise pas** :
- Delivery D2-D1/D2-D2/D2-D3
- code / config / dépendances
- Cursor verified
- D2-C reserve lifted
- D2-D4 write
- production-ready / RUN READY
- method promotion

Le backlog est **intégré sur main** ; la Delivery reste soumise à un GO distinct.

---

## 10. Git Truth finale

| Champ | Valeur |
|-------|--------|
| Branche active | `backlog/sfia-studio-v3-1-d2-d-integration-foundation` |
| HEAD (backlog) | `52c1d753ee890daf04a80ba37b11c6bf077dc307` |
| origin/main | `df4377249660aab79d764915ad3166608a8a9a7d` |
| local main ref | `df4377249660aab79d764915ad3166608a8a9a7d` |
| origin/backlog | `52c1d753ee890daf04a80ba37b11c6bf077dc307` |
| status | |
```
?? .tmp-sfia-review/
```
| staged | `(vide)` |
| tracked diff | `(vide)` |

PR #307 : MERGED · mergeCommit `df4377249660aab79d764915ad3166608a8a9a7d` · mergedAt `2026-08-03T19:57:56Z`

---

## 11. Handoff before / after

### Before

| tip | `c81ea7dbfd7079c128648dc80fb4c507d0f3a459` |
| blob | `df9d33c77c9eba2beb197e58186626ccc77b1f6c` |

### After

Le tip et le blob du présent rapport sont calculés après publication.
Ils sont remontés dans le rapport terminal Cursor et vérifiés
indépendamment par ChatGPT afin d'éviter une boucle autoréférentielle.

- `D2D_BACKLOG_MERGE_HANDOFF_TIP` : *(pending publish)*
- `D2D_BACKLOG_MERGE_HANDOFF_BLOB` : *(pending publish)*
- `D2D_BACKLOG_MERGE_HANDOFF_PARENT` : *(pending publish)*

---

## 12. Verdict

```text
V3.1-D2-D BACKLOG MERGE AND POST-MERGE COMPLETE WITH RESERVES —

PR #307 MERGED —
MERGE_SHA df4377249660aab79d764915ad3166608a8a9a7d —
PARENTS 9231858a… + 52c1d753… —
DOCUMENT 24 ON MAIN HASH VERIFIED —
PACKAGE HASH VERIFIED —

D-V3.1-D2D-BLG-01…08
DECIDED — ADOPTED BY MORRIS — ON MAIN —

SOURCE BRANCH PRESERVED —
MAIN CI 30848071309 SUCCESS —
REQUIRED GATE SUCCESS —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

NO DELIVERY —
NO CODE —
NO CURSOR CAPABILITY VERIFICATION —
NO D2-C CORRECTION —
NO D2-D4 WRITE —
NO METHOD PROMOTION —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED — (pending publish verification)

READY FOR CHATGPT VALIDATION —

POST-MERGE VALIDATED —
CANDIDATE NEXT GATE:
GO DELIVERY SFIA STUDIO V3.1-D2-D1
```

---

## 13. Prochaine gate candidate

Après validation ChatGPT uniquement :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-D1
```

D2-D2 et D2-D3 restent hors autorisation jusqu'à leurs GO Delivery distincts.

---

## 14. Instruction ChatGPT

Lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au nouveau tip/blob
remontés par Cursor et vérifier indépendamment : merge #307, MERGE_SHA, parents,
document 24 sur main, hashes, BLG adoptées, CI main, branche source préservée,
réserves ouvertes, Cursor UNVERIFIED, absence Delivery, handoff, verdict.
