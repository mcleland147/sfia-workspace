# SFIA Studio V3.1-D1 — Draft PR #296 Remote Review Pack (Full)

**Date/heure/fuseau :** 2026-07-30 23:15:17 CEST (+0200)  
**Cycle :** 13 — PR readiness (Remote draft PR review post-publication)  
**Profil :** Critical  
**Typologie :** EVOL  

## Gate Morris

```
GO REVIEW DRAFT PR SFIA STUDIO V3.1-D1 —
VERIFY REMOTE DIFF CI AND REVIEW COMMENTS —
NO MERGE —
NO D2 —
NO UI —
NO CREATECYCLE
```

Date GO : 2026-07-30 22:42 CEST (+0200)

## CKC

- recherché : oui · cycle 13 · pilote détaillé absent
- fallback : `02-fifteen-cycles-synthetic-map.md` + `sfia-v2.5…` §4.13
- method-candidate · consommation obligatoire · P2/léger
- executionAuthority=false · ne décide ni ready-for-review ni merge

## Handoff publication source

- tip : `89db4b80e3a28364e871d74a01a0415720d12451`
- blob : `7c85d5971a3da16137e38ac47fa66fa789958826`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

## Content coverage checklist

- PR metadata complete : yes
- PR body complete : yes
- all 13 files listed : yes
- remote diff complete : yes
- commit details complete : yes
- per-file review matrix complete : yes
- code review complete : yes
- tests review complete : yes
- documentation review complete : yes
- README condensation preservation matrix complete : yes
- CI runs/jobs/steps complete : yes
- issue comments complete : yes
- inline comments complete : yes
- reviews complete : yes
- security/hygiene complete : yes
- commands evidence complete : yes
- reserves classified : yes
- temporary report full content : yes
- synthesis only : no
- review pack verdict : complete

## Confirmations (this cycle)

- projet modifié : NON
- commit projet : NON
- push Delivery : NON
- commentaire GitHub : NON
- review GitHub : NON
- ready-for-review : NON
- merge : NON
- main modifiée : NON
- D2/D3/resolver/UI/CreateCycle/méthode : NON

## Non-répétition tests locaux 827

Justifiée : HEAD local = HEAD distant Delivery = PR headSha `e2e8984…` ; CI distante completed/success sur ce SHA ; aucun fichier projet modifié. Contrôle local exécuté : `git diff --check origin/main...HEAD` PASS.

---

# SECTION — Temporary report (full)

# PR #296 — Remote Draft PR Review Report (Critical)

## A. Meta

- **Date/heure/fuseau :** 2026-07-30 23:15:17 CEST (+0200)
- **Cycle projet :** 13 — PR readiness
- **Phase :** Remote draft PR review post-publication
- **Profil SFIA :** Critical
- **Typologie :** EVOL
- **Gate Morris consommé :**

```
GO REVIEW DRAFT PR SFIA STUDIO V3.1-D1 —
VERIFY REMOTE DIFF CI AND REVIEW COMMENTS —
NO MERGE —
NO D2 —
NO UI —
NO CREATECYCLE
```

Date GO : 2026-07-30 22:42 CEST (+0200)

- **CKC :**
  - recherché : oui
  - cycle qualifié : 13 — PR readiness
  - pilote détaillé : absent
  - fallback : `02-fifteen-cycles-synthetic-map.md` + `sfia-v2.5-project-cycles-method-candidate.md` §4.13
  - statut : method-candidate
  - consommation : obligatoire
  - niveau : P2 / léger
  - objet : diff et body de PR
  - posture : garde-fous Git
  - `executionAuthority=false`
  - limite : ne décide ni ready-for-review ni merge
- **PR / repository :** `mcleland147/sfia-workspace` · PR **#296** · https://github.com/mcleland147/sfia-workspace/pull/296

---

## B. Git Truth

| Contrôle | Attendu | Observé | Statut |
|---|---|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` | conforme | PASS |
| Repo | `mcleland147/sfia-workspace` | conforme | PASS |
| Branche locale | Delivery V3.1-D1 | conforme | PASS |
| HEAD local | `e2e898405c0a555573187e04dd6c3de777595f19` | conforme | PASS |
| HEAD distant Delivery | idem | conforme | PASS |
| origin/main | `3e8a4374405dce98866e35fb60c5c7329701f191` | conforme | PASS |
| vs main | 0 behind / 2 ahead | 0 / 2 | PASS |
| vs remote Delivery | 0 / 0 | 0 / 0 | PASS |
| Working tree | aucun projet modifié ; staged vide ; `.tmp` OK | `?? .tmp-sfia-review/` | PASS |
| Handoff publication tip | `89db4b80…` | conforme | PASS |
| Handoff publication blob | `7c85d597…` | conforme | PASS |

---

## C. PR metadata

| Champ | Valeur |
|---|---|
| number | 296 |
| url | https://github.com/mcleland147/sfia-workspace/pull/296 |
| title | `feat(sfia-studio): add V3.1-D1 cycle type catalog contract` |
| state | OPEN |
| isDraft | true |
| merged | false |
| mergeable | MERGEABLE |
| baseRefName | main |
| baseRefOid | `3e8a4374405dce98866e35fb60c5c7329701f191` |
| headRefName | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| headRefOid | `e2e898405c0a555573187e04dd6c3de777595f19` |
| commits | 2 |
| files | 13 |
| additions | 3667 |
| deletions | 155 |
| reviewDecision | (vide) |
| reviewRequests | [] |
| reviews | 0 |
| issue comments | 0 |
| inline comments | 0 |

Body : conforme au package approuvé ; section **Minor documentation reserve** présente ; `Merge is not authorized by this PR creation cycle.` présent ; `Remote CI checks completed` non cochée (écart mineur documentaire — CI distante prouvée verte) ; `Morris merge GO` non cochée.

---

## D. Package distant

Exactement **13 fichiers** — correspondance 1:1 avec le package approuvé.

| # | Path | Change | +/− |
|---|---|---|---|
| 1 | `…/cycleTypeCatalog.test.ts` | ADDED | +720/−0 |
| 2 | `…/cycleTypeCatalog.ts` | ADDED | +643/−0 |
| 3 | `…/oa/cycle/index.ts` | MODIFIED | +1/−0 |
| 4 | framing `08-…` | MODIFIED | +49/−35 |
| 5 | framing `12-…` | ADDED | +460/−0 |
| 6 | framing `13-…` | ADDED | +478/−0 |
| 7 | framing `14-…` | ADDED | +403/−0 |
| 8 | framing `README.md` | MODIFIED | +23/−120 |
| 9 | D1 `01-qa-validation-report.md` | ADDED | +277/−0 |
| 10 | D1 `02-corrective-delivery-report.md` | ADDED | +110/−0 |
| 11 | D1 `03-qa-revalidation-report.md` | ADDED | +135/−0 |
| 12 | D1 `04-pr-readiness-report.md` | ADDED | +218/−0 |
| 13 | D1 `README.md` | ADDED | +150/−0 |

Aucun `.tmp` · aucun hors package · listes `git diff` et `gh pr diff --name-only` **identiques**.

Correspondance base/head/additions/deletions démontrée dans `.tmp-sfia-review/pr-296-diff-correspondence.txt`.

---

## E. Commits

### Commit 1 — `91232520440b77fe8200427f3321c7ff0454ad24`

Message : `feat(sfia-studio): add V3.1-D1 cycle type catalog contract`

Fichiers exacts (3) :
- A `cycleTypeCatalog.test.ts`
- A `cycleTypeCatalog.ts`
- M `index.ts` (+1 ligne : `export * from "./domain/cycleTypeCatalog"`)

### Commit 2 — `e2e898405c0a555573187e04dd6c3de777595f19`

Message : `docs(sfia-studio): document V3.1-D1 catalog design and QA evidence`

Fichiers exacts (10) : framing README, 08, 12, 13, 14 + D1 README + 01–04.

Cohérence : granularité code/tests puis docs — conforme au plan PR readiness.

---

## F. Revue code

### Contrat runtime (`cycleTypeCatalog.ts`)

| Exigence | Verdict |
|---|---|
| version `0.1.0-v3.1-d1` | PASS |
| 15 entrées | PASS |
| 15 IDs `cyc:*` + `cyc:capitalization` | PASS |
| `canonicalKey` ≠ `cycleTypeId` | PASS (données) ; pas de règle validator explicite (mineur) |
| methodCycleNumber / displayOrder 1…15 exact | PASS |
| lifecycleStatus `active` | PASS |
| 4 detailed + 11 synthetic | PASS |
| mandatory / executionAuthority=false / method-candidate / fail-closed | PASS |
| detailed → synthetic_map fallback ; synthetic → none | PASS |
| deep freeze ; list non mutante ; lookup ID only | PASS |
| no I/O / no Markdown parse / no method/** import | PASS |
| no profile/gate/Morris decision in entries | PASS |
| validateur R-QA-01…09 | PASS |
| alias vs ID / ambigus | PASS |
| pas de D2/UI/CreateCycle dans le **nouveau** code | PASS |

Note : `index.ts` exportait déjà `CreateCycle`/`QualifyCycle` **avant** cette PR ; le diff n’ajoute que le re-export catalogue.

### Validateur

- Déterministe, retourne des issues (ne throw pas sur entrées bien formées).
- Gap mineur : structures runtime fortement malformées (`null` entry, `aliases` non itérable) peuvent throw plutôt qu’émettre une issue — hors modèle de données D1 typé.

### Findings code

- Bloquante : aucune
- Majeure : aucune
- Mineure : robustesse validator sur shapes pathologiques ; quelques codes secondaires non couverts négativement ; assertions négatives parfois soft sur message

---

## G. Revue tests

- **46** tests (`it(`/`test(`) ; pas de skip/only/todo ; pas de réseau
- Nominal / négatif / bornes / immutabilité / chemins CKC / version / lifecycle / doctrine / fail-closed / synthetic fallback / ensembles 1…15 / alias
- `cloneCatalog` utilisé pour mutations de test sans masquer le catalogue production
- Preuve : cas connus couverts ; **pas** de garantie d’absence totale de bug (anti-claim)

Finding mineur : gaps négatifs sur codes secondaires (`LABEL_EMPTY`, etc.) — non bloquant pour D1.

---

## H. Revue documentaire

| Doc | Verdict fichier |
|---|---|
| 14 | PASS — CAT-01…08, mapping 15 IDs, CKC obligatoire, D1/D2/D3, QA-G3 PASS, D2 pending, method-candidate ≠ baseline. Note mineure : quelques formulations « pending » historiques coexistent avec preuve D1 implemented. |
| 12 | PASS — cadrage ; reco ≠ décision ; pas de claim D2 ; IDs cohérents |
| 13 | PASS — qualification profil ; séparation type/profil ; pas CreateCycle ; pas décision auto |
| 08 | PASS — lots futurs ; D1 ≠ D2/D3 ; gates futurs ; pas d’ouverture V3.2+ |
| D1 README | PASS — synthèse fidèle ; index rapports ; statut non contradictoire |
| 01 | PASS — FAIL historique conservé |
| 02 | PASS — correctif validator-only conservé |
| 03 | PASS — revalidation PASS conservée |
| 04 | PASS — readiness + réserve mineure conservée |

Aucune réécriture rétroactive des rapports FAIL→PASS.

---

## I. Condensation framing README

Comparaison : main 134 lignes → PR 37 lignes (−120 / +23).

| # | Contenu supprimé / condensé | Conservation | Statut | Sévérité |
|---|---|---|---|---|
| A1 | Meta historique framing/V1 | `11` + living meta | PARTIALLY PRESERVED | Mineure |
| A2 | Objectif / slogan journey | `02`, `12`/`13` | PARTIALLY PRESERVED | Mineure |
| A3 | Synthèse stacks / OA gap | `01`, `03`, `06` | PRESERVED | — |
| A4 | Scope / hors scope | `02` | PRESERVED | — |
| A5 | Parcours 7 steps | `02` J1–J7 | PRESERVED | — |
| A6 | Architecture + UI non-autorité | `03`, `06` | PRESERVED | — |
| A7 | Figma / D-VS-05 | `05`, `11`, `12`/`13` | PRESERVED | — |
| A8 | Backlog V1→V6 | `08` living | PRESERVED | — |
| A9 | Décisions D-VS-01…05 | `11` (ADOPTED) | PRESERVED | Mineure hygiène |
| A10 | Statut exécution V1 | `11` | PRESERVED | — |
| A11 | Anti-claims bullets | `11`, `14`, D1 | PARTIALLY PRESERVED | Mineure |
| A12 | Index pack 01–11 | Artifacts présents ; hub index retiré | PARTIALLY PRESERVED | Mineure discoverabilité |
| A13 | Gate candidat V1/V2 | Remplacé par gate D1 living | PRESERVED | — |
| A14 | Verdict framing-era | `11` + living D1 | PRESERVED | — |

**Aucune décision Morris unique perdue.**  
**Verdict réserve :** mineure — **ACCEPTABLE et explicite** dans le body PR.  
Ne bloque pas READY TO MARK READY FOR REVIEW.

---

## J. Body PR

- Titre exact : PASS
- Summary / Morris decisions / QA-G3 / R-QA CLOSED : PASS
- Scope + limites D1/D2/D3 : PASS
- Réserve README explicite + docs 12/13/14 + rapports 01–04 : PASS
- Test plan exact : PASS
- Checklist : `No D2 or D3` coché ; `Remote CI checks completed` **non cochée** alors que CI distante est verte ; `Morris merge GO` non cochée
- Merge non autorisé : PASS
- Pas de placeholder / claim baseline / promesse D2-D3 : PASS

**Écart checkbox CI :** mineur documentaire — ne pas modifier le body dans ce cycle ; ne pas confondre avec CI manquante.

---

## K. CI distante

| Champ | Valeur |
|---|---|
| Workflow | SFIA Studio CI |
| Run ID | **30577786752** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752 |
| status | completed |
| conclusion | **success** |
| headSha | `e2e898405c0a555573187e04dd6c3de777595f19` (= PR head) |
| event | pull_request |
| Autres runs head | un seul run pertinent |

### Jobs

1. Detect SFIA Studio changes — **success**
2. Build and validate SFIA Studio — **success**
3. SFIA Studio Required Gate — **success**

### Steps Build and validate

Checkout · Setup Node.js · Install dependencies · Typecheck · Lint · Build · Unit tests Vitest · Modeled governance tests · Secret pattern scan targeted · Trailing whitespace check — **tous success**.

### Non-répétition locale 827 tests

Justifiée : head local = head distant = PR head inchangé ; CI distante complète et verte ; aucun fichier projet local modifié. Exécuté néanmoins : `git diff --check origin/main...HEAD` → PASS.

---

## L. Reviews / comments

| Canal | Count | Contenu |
|---|---|---|
| Issue comments | 0 | — |
| Inline review comments | 0 | — |
| Review submissions | 0 | — |
| Requested reviewers | 0 | — |
| reviewDecision | vide | — |

Aucun élément actionable.  
**Absence de commentaire ≠ approval externe** (anti-claim).

---

## M. Sécurité / hygiène

| Scan | Résultat |
|---|---|
| Secrets | NO_SECRETS |
| Chemins absolus | NO_ABS |
| TODO/FIXME/HACK/XXX | seule mention documentaire hygiène dans rapport 04 |
| `executionAuthority=true` | uniquement test négatif (cast) + mention QA 01 |
| Import method/** runtime | NO |
| CreateCycle/QualifyCycle/React/UI dans **nouveau** code | NO (re-exports préexistants hors diff utile) |
| D2/D3 implémentés | NON — mentions documentaires/limites seulement |

---

## N. Réserves

### Bloquantes
Aucune.

### Majeures
Aucune.

### Mineures
1. Condensation framing README (index vivant) — déjà explicite ; conservation décisions OK.
2. Checkbox body `Remote CI checks completed` non cochée alors que CI verte.
3. Robustesse validator sur shapes pathologiques / quelques codes négatifs secondaires.
4. Discoverabilité : index pack 01–11 retiré du hub ; formulations « pending » historiques dans doc 14 living.

### Environnementales
Aucune.

---

## O. Décision proposée

**READY TO MARK READY FOR REVIEW WITH RESERVES**

Réserves mineures explicites (documentation README + checkbox CI body + hygiène validator/docs).  
Aucune réserve majeure/bloquante.

Le passage ready-for-review exige un **GO Morris distinct**.  
Merge **non autorisé**.

---

## P. Anti-claims

- remote review ≠ merge
- CI verte ≠ absence de bug
- mergeable=true ≠ merge autorisé
- absence de commentaire ≠ approval externe
- draft PR ≠ merge-ready
- D1 ≠ D2
- mapping CKC ≠ resolver
- aucun gate implicite ready-for-review / merge / D2

---

## Q. Gate suivant candidat

```
GO MARK PR #296 READY FOR REVIEW SFIA STUDIO V3.1-D1 —
REMOTE DIFF AND CI VERIFIED —
MINOR DOCUMENTATION RESERVE ACCEPTED —
NO MERGE —
NO D2 —
NO UI —
NO CREATECYCLE
```

---

## R. Verdict

```
V3.1-D1 DRAFT PR REMOTE REVIEW COMPLETE —
REMOTE DIFF VERIFIED —
REMOTE CI PASS —
NO ACTIONABLE REVIEW COMMENTS —
MINOR DOCUMENTATION RESERVE ACCEPTABLE AND EXPLICIT —
READY FOR MORRIS DECISION TO MARK PR READY FOR REVIEW —
MERGE NOT AUTHORIZED —
D2/D3 NOT AUTHORIZED
```

**Statut :** READY FOR MORRIS DECISION TO MARK PR READY FOR REVIEW — MERGE NOT AUTHORIZED

---

## Matrice exhaustive des 13 fichiers

| # | Fichier | Rôle | Statut | Cohérence D1 | Hors scope | Réserve | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | `cycleTypeCatalog.ts` | Contrat runtime 15 types + CKC + validator | A | Oui | Non | Mineure (robustesse shapes) | PASS |
| 2 | `index.ts` | Barrel export catalogue (+1) | M | Oui | Non (CreateCycle préexistant) | — | PASS |
| 3 | `cycleTypeCatalog.test.ts` | 46 tests contractuels | A | Oui | Non | Mineure (gaps négatifs secondaires) | PASS |
| 4 | framing README | Index vivant condensé | M | Oui | Non | Mineure (condensation) | PASS WITH RESERVE |
| 5 | backlog 08 | Lots / gates futurs | M | Oui | Non | — | PASS |
| 6 | doc 12 | Cadrage V3 cycles | A | Oui | Non | — | PASS |
| 7 | doc 13 | Qualification profil | A | Oui | Non | — | PASS |
| 8 | doc 14 | Architecture catalogue CAT-01…08 | A | Oui | Non | Mineure (wording pending) | PASS |
| 9 | D1 README | Synthèse livraison | A | Oui | Non | — | PASS |
| 10 | rapport 01 | QA FAIL historique | A | Oui | Non | — | PASS |
| 11 | rapport 02 | Correctif validator | A | Oui | Non | — | PASS |
| 12 | rapport 03 | Revalidation PASS | A | Oui | Non | — | PASS |
| 13 | rapport 04 | PR readiness + réserve | A | Oui | Non | — | PASS |

---

# SECTION — PR body (complete)

## Summary

This draft PR adds the SFIA Studio V3.1-D1 runtime contract for the fifteen project cycle types and their mandatory Cycle Knowledge Contract mapping.

It includes:
- the immutable fifteen-entry cycle type catalog;
- stable `cyc:*` identifiers adopted by Morris;
- mandatory CKC metadata with four detailed mappings and eleven synthetic mappings;
- fail-closed catalog validation;
- nominal, negative, boundary and immutability tests;
- the functional, architectural, delivery and QA evidence for V3.1-D1.

## Morris decisions

- D-V3.1-CAT-01 to D-V3.1-CAT-08 are adopted.
- QA-G3 is accepted as PASS.
- R-QA-01 to R-QA-09 are CLOSED.
- This PR does not authorize or implement V3.1-D2 or V3.1-D3.

## Scope

Code and tests:
- `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`

Functional and architectural contracts:
- framing README and backlog;
- documents 12, 13 and 14.

Delivery and QA evidence:
- V3.1-D1 README;
- initial QA FAIL report;
- corrective delivery report;
- QA revalidation PASS report;
- PR readiness report.

## Runtime contract

- Catalog version: `0.1.0-v3.1-d1`
- Exactly fifteen stable `cycleTypeId` values
- `cyc:capitalization` preserved
- Four detailed CKC mappings
- Eleven synthetic CKC mappings
- `mandatory=true`
- `executionAuthority=false`
- `doctrineStatus=method-candidate`
- `unavailableBehavior=fail-closed`
- Pure read-only catalog operations
- No runtime Markdown parsing or filesystem I/O

## QA evidence

The first Critical QA campaign identified incomplete runtime validation and correctly returned FAIL.

A validator-only corrective delivery addressed R-QA-01 to R-QA-09 without changing catalog data, public APIs or tests.

The independent QA revalidation then passed:

- catalog tests: 46/46
- OA cycle suite: 94/94
- full test suite: 827/827
- typecheck: PASS
- lint: PASS
- build: PASS
- `git diff --check`: PASS

QA-G3 was accepted by Morris as PASS.

## Boundaries

This PR does not include:
- V3.1-D2;
- orchestrated CKC resolution;
- a QualifyCycle bridge;
- vertical-slice runtime exposure;
- UI;
- Figma changes;
- CreateCycle;
- CycleInstance persistence;
- Project or LPS mutation;
- method or CKC source changes;
- dependency or migration changes.

## Risks and reserves

### Minor documentation reserve

The framing README was intentionally condensed so that it operates as a living index rather than duplicating the complete historical framing.

The detailed history and decisions remain preserved in:
- documents 12, 13 and 14;
- V3.1-D1 reports 01, 02, 03 and 04.

Reviewers should verify that this condensation does not remove a decision that is unavailable elsewhere in the versioned documentation.

### Remaining trajectory boundaries

- V3.1-D2 remains required for orchestrated CKC resolution and the QualifyCycle bridge.
- V3.1-D3 remains a separate UI increment with the existing Figma reserve.
- CKC doctrine remains `method-candidate`, while its consumption is mandatory inside the candidate product mechanism.

## Test plan

Run from `projects/sfia-studio/app`:

- `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts`
- `npm test -- __tests__/oa/cycle/`
- `npm test`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

Run from the repository root:

- `git diff --check origin/main...HEAD`

## Review guidance

Recommended review order:

1. `14-v3-1-cycle-type-catalog-functional-architecture.md`
2. `cycleTypeCatalog.ts`
3. `cycleTypeCatalog.test.ts`
4. `index.ts`
5. V3.1-D1 reports 01 to 04
6. framing README, backlog 08 and documents 12/13

## Checklist

- [x] Exactly fifteen cycle type IDs
- [x] `cyc:capitalization` preserved
- [x] Mandatory CKC mapping
- [x] Four detailed and eleven synthetic mappings
- [x] Fail-closed validator
- [x] R-QA-01 to R-QA-09 closed
- [x] QA-G3 PASS recorded
- [x] No secrets detected
- [x] No dependency or migration change
- [x] No D2 or D3
- [x] No UI or CreateCycle
- [x] Minor framing README reserve explicit
- [ ] Remote CI checks completed
- [ ] Morris merge GO granted

Merge is not authorized by this PR creation cycle.

---

# SECTION — Commits (fuller)

=== COMMIT 1 ===
commit 91232520440b77fe8200427f3321c7ff0454ad24
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Thu Jul 30 22:06:49 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Thu Jul 30 22:06:49 2026 +0200

    feat(sfia-studio): add V3.1-D1 cycle type catalog contract
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
A	projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
=== COMMIT 2 ===
commit e2e898405c0a555573187e04dd6c3de777595f19
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Thu Jul 30 22:06:54 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Thu Jul 30 22:06:54 2026 +0200

    docs(sfia-studio): document V3.1-D1 catalog design and QA evidence
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md

---

# SECTION — PR metadata JSON

{"additions":3667,"baseRefName":"main","baseRefOid":"3e8a4374405dce98866e35fb60c5c7329701f191","body":"## Summary\n\nThis draft PR adds the SFIA Studio V3.1-D1 runtime contract for the fifteen project cycle types and their mandatory Cycle Knowledge Contract mapping.\n\nIt includes:\n- the immutable fifteen-entry cycle type catalog;\n- stable `cyc:*` identifiers adopted by Morris;\n- mandatory CKC metadata with four detailed mappings and eleven synthetic mappings;\n- fail-closed catalog validation;\n- nominal, negative, boundary and immutability tests;\n- the functional, architectural, delivery and QA evidence for V3.1-D1.\n\n## Morris decisions\n\n- D-V3.1-CAT-01 to D-V3.1-CAT-08 are adopted.\n- QA-G3 is accepted as PASS.\n- R-QA-01 to R-QA-09 are CLOSED.\n- This PR does not authorize or implement V3.1-D2 or V3.1-D3.\n\n## Scope\n\nCode and tests:\n- `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`\n- `projects/sfia-studio/app/lib/oa/cycle/index.ts`\n- `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`\n\nFunctional and architectural contracts:\n- framing README and backlog;\n- documents 12, 13 and 14.\n\nDelivery and QA evidence:\n- V3.1-D1 README;\n- initial QA FAIL report;\n- corrective delivery report;\n- QA revalidation PASS report;\n- PR readiness report.\n\n## Runtime contract\n\n- Catalog version: `0.1.0-v3.1-d1`\n- Exactly fifteen stable `cycleTypeId` values\n- `cyc:capitalization` preserved\n- Four detailed CKC mappings\n- Eleven synthetic CKC mappings\n- `mandatory=true`\n- `executionAuthority=false`\n- `doctrineStatus=method-candidate`\n- `unavailableBehavior=fail-closed`\n- Pure read-only catalog operations\n- No runtime Markdown parsing or filesystem I/O\n\n## QA evidence\n\nThe first Critical QA campaign identified incomplete runtime validation and correctly returned FAIL.\n\nA validator-only corrective delivery addressed R-QA-01 to R-QA-09 without changing catalog data, public APIs or tests.\n\nThe independent QA revalidation then passed:\n\n- catalog tests: 46/46\n- OA cycle suite: 94/94\n- full test suite: 827/827\n- typecheck: PASS\n- lint: PASS\n- build: PASS\n- `git diff --check`: PASS\n\nQA-G3 was accepted by Morris as PASS.\n\n## Boundaries\n\nThis PR does not include:\n- V3.1-D2;\n- orchestrated CKC resolution;\n- a QualifyCycle bridge;\n- vertical-slice runtime exposure;\n- UI;\n- Figma changes;\n- CreateCycle;\n- CycleInstance persistence;\n- Project or LPS mutation;\n- method or CKC source changes;\n- dependency or migration changes.\n\n## Risks and reserves\n\n### Minor documentation reserve\n\nThe framing README was intentionally condensed so that it operates as a living index rather than duplicating the complete historical framing.\n\nThe detailed history and decisions remain preserved in:\n- documents 12, 13 and 14;\n- V3.1-D1 reports 01, 02, 03 and 04.\n\nReviewers should verify that this condensation does not remove a decision that is unavailable elsewhere in the versioned documentation.\n\n### Remaining trajectory boundaries\n\n- V3.1-D2 remains required for orchestrated CKC resolution and the QualifyCycle bridge.\n- V3.1-D3 remains a separate UI increment with the existing Figma reserve.\n- CKC doctrine remains `method-candidate`, while its consumption is mandatory inside the candidate product mechanism.\n\n## Test plan\n\nRun from `projects/sfia-studio/app`:\n\n- `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts`\n- `npm test -- __tests__/oa/cycle/`\n- `npm test`\n- `npm run typecheck`\n- `npm run lint`\n- `npm run build`\n\nRun from the repository root:\n\n- `git diff --check origin/main...HEAD`\n\n## Review guidance\n\nRecommended review order:\n\n1. `14-v3-1-cycle-type-catalog-functional-architecture.md`\n2. `cycleTypeCatalog.ts`\n3. `cycleTypeCatalog.test.ts`\n4. `index.ts`\n5. V3.1-D1 reports 01 to 04\n6. framing README, backlog 08 and documents 12/13\n\n## Checklist\n\n- [x] Exactly fifteen cycle type IDs\n- [x] `cyc:capitalization` preserved\n- [x] Mandatory CKC mapping\n- [x] Four detailed and eleven synthetic mappings\n- [x] Fail-closed validator\n- [x] R-QA-01 to R-QA-09 closed\n- [x] QA-G3 PASS recorded\n- [x] No secrets detected\n- [x] No dependency or migration change\n- [x] No D2 or D3\n- [x] No UI or CreateCycle\n- [x] Minor framing README reserve explicit\n- [ ] Remote CI checks completed\n- [ ] Morris merge GO granted\n\nMerge is not authorized by this PR creation cycle.\n","commits":[{"authoredDate":"2026-07-30T20:06:49Z","authors":[{"email":"morris@macbook-air1.home","id":"","login":"","name":"Morris Cleland"},{"email":"cursoragent@cursor.com","id":"U_kgDOC972lw","login":"cursoragent","name":"Cursor"}],"committedDate":"2026-07-30T20:06:49Z","messageBody":"Co-authored-by: Cursor <cursoragent@cursor.com>","messageHeadline":"feat(sfia-studio): add V3.1-D1 cycle type catalog contract","oid":"91232520440b77fe8200427f3321c7ff0454ad24"},{"authoredDate":"2026-07-30T20:06:54Z","authors":[{"email":"morris@macbook-air1.home","id":"","login":"","name":"Morris Cleland"},{"email":"cursoragent@cursor.com","id":"U_kgDOC972lw","login":"cursoragent","name":"Cursor"}],"committedDate":"2026-07-30T20:06:54Z","messageBody":"Co-authored-by: Cursor <cursoragent@cursor.com>","messageHeadline":"docs(sfia-studio): document V3.1-D1 catalog design and QA evidence","oid":"e2e898405c0a555573187e04dd6c3de777595f19"}],"deletions":155,"files":[{"path":"projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts","additions":720,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts","additions":643,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/app/lib/oa/cycle/index.ts","additions":1,"deletions":0,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md","additions":49,"deletions":35,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md","additions":460,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md","additions":478,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md","additions":403,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md","additions":23,"deletions":120,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md","additions":277,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md","additions":110,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md","additions":135,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md","additions":218,"deletions":0,"changeType":"ADDED"},{"path":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md","additions":150,"deletions":0,"changeType":"ADDED"}],"headRefName":"delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime","headRefOid":"e2e898405c0a555573187e04dd6c3de777595f19","isDraft":true,"latestReviews":[],"mergeable":"MERGEABLE","number":296,"reviewDecision":"","reviewRequests":[],"reviews":[],"state":"OPEN","statusCheckRollup":[{"__typename":"CheckRun","completedAt":"2026-07-30T20:07:35Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990269446","name":"Detect SFIA Studio changes","startedAt":"2026-07-30T20:07:29Z","status":"COMPLETED","workflowName":"SFIA Studio CI"},{"__typename":"CheckRun","completedAt":"2026-07-30T20:09:06Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990298425","name":"Build and validate SFIA Studio","startedAt":"2026-07-30T20:07:40Z","status":"COMPLETED","workflowName":"SFIA Studio CI"},{"__typename":"CheckRun","completedAt":"2026-07-30T20:09:17Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990665639","name":"SFIA Studio Required Gate","startedAt":"2026-07-30T20:09:15Z","status":"COMPLETED","workflowName":"SFIA Studio CI"}],"title":"feat(sfia-studio): add V3.1-D1 cycle type catalog contract","url":"https://github.com/mcleland147/sfia-workspace/pull/296"}

---

# SECTION — CI checks text

Build and validate SFIA Studio	pass	1m26s	https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990298425	
Detect SFIA Studio changes	pass	6s	https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990269446	
SFIA Studio Required Gate	pass	2s	https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990665639	

---

# SECTION — CI run JSON

{"conclusion":"success","createdAt":"2026-07-30T20:07:27Z","displayTitle":"feat(sfia-studio): add V3.1-D1 cycle type catalog contract","event":"pull_request","headSha":"e2e898405c0a555573187e04dd6c3de777595f19","jobs":[{"completedAt":"2026-07-30T20:07:35Z","conclusion":"success","databaseId":90990269446,"name":"Detect SFIA Studio changes","startedAt":"2026-07-30T20:07:29Z","status":"completed","steps":[{"completedAt":"2026-07-30T20:07:31Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-07-30T20:07:30Z","status":"completed"},{"completedAt":"2026-07-30T20:07:33Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-07-30T20:07:31Z","status":"completed"},{"completedAt":"2026-07-30T20:07:33Z","conclusion":"success","name":"Detect Studio scope","number":3,"startedAt":"2026-07-30T20:07:33Z","status":"completed"},{"completedAt":"2026-07-30T20:07:33Z","conclusion":"success","name":"Post Checkout","number":6,"startedAt":"2026-07-30T20:07:33Z","status":"completed"},{"completedAt":"2026-07-30T20:07:34Z","conclusion":"success","name":"Complete job","number":7,"startedAt":"2026-07-30T20:07:33Z","status":"completed"}],"url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990269446"},{"completedAt":"2026-07-30T20:09:06Z","conclusion":"success","databaseId":90990298425,"name":"Build and validate SFIA Studio","startedAt":"2026-07-30T20:07:40Z","status":"completed","steps":[{"completedAt":"2026-07-30T20:07:41Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-07-30T20:07:40Z","status":"completed"},{"completedAt":"2026-07-30T20:07:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-07-30T20:07:41Z","status":"completed"},{"completedAt":"2026-07-30T20:07:47Z","conclusion":"success","name":"Setup Node.js","number":3,"startedAt":"2026-07-30T20:07:43Z","status":"completed"},{"completedAt":"2026-07-30T20:08:01Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-07-30T20:07:47Z","status":"completed"},{"completedAt":"2026-07-30T20:08:08Z","conclusion":"success","name":"Typecheck","number":5,"startedAt":"2026-07-30T20:08:01Z","status":"completed"},{"completedAt":"2026-07-30T20:08:13Z","conclusion":"success","name":"Lint","number":6,"startedAt":"2026-07-30T20:08:08Z","status":"completed"},{"completedAt":"2026-07-30T20:08:39Z","conclusion":"success","name":"Build","number":7,"startedAt":"2026-07-30T20:08:13Z","status":"completed"},{"completedAt":"2026-07-30T20:09:04Z","conclusion":"success","name":"Unit tests (Vitest)","number":8,"startedAt":"2026-07-30T20:08:39Z","status":"completed"},{"completedAt":"2026-07-30T20:09:04Z","conclusion":"success","name":"Modeled governance tests","number":9,"startedAt":"2026-07-30T20:09:04Z","status":"completed"},{"completedAt":"2026-07-30T20:09:04Z","conclusion":"success","name":"Secret pattern scan (targeted)","number":10,"startedAt":"2026-07-30T20:09:04Z","status":"completed"},{"completedAt":"2026-07-30T20:09:04Z","conclusion":"success","name":"Trailing whitespace check","number":11,"startedAt":"2026-07-30T20:09:04Z","status":"completed"},{"completedAt":"2026-07-30T20:09:05Z","conclusion":"success","name":"Post Setup Node.js","number":21,"startedAt":"2026-07-30T20:09:04Z","status":"completed"},{"completedAt":"2026-07-30T20:09:05Z","conclusion":"success","name":"Post Checkout","number":22,"startedAt":"2026-07-30T20:09:05Z","status":"completed"},{"completedAt":"2026-07-30T20:09:05Z","conclusion":"success","name":"Complete job","number":23,"startedAt":"2026-07-30T20:09:05Z","status":"completed"}],"url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990298425"},{"completedAt":"2026-07-30T20:09:17Z","conclusion":"success","databaseId":90990665639,"name":"SFIA Studio Required Gate","startedAt":"2026-07-30T20:09:15Z","status":"completed","steps":[{"completedAt":"2026-07-30T20:09:16Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-07-30T20:09:16Z","status":"completed"},{"completedAt":"2026-07-30T20:09:16Z","conclusion":"success","name":"Aggregate required gate","number":2,"startedAt":"2026-07-30T20:09:16Z","status":"completed"},{"completedAt":"2026-07-30T20:09:16Z","conclusion":"success","name":"Complete job","number":3,"startedAt":"2026-07-30T20:09:16Z","status":"completed"}],"url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752/job/90990665639"}],"status":"completed","updatedAt":"2026-07-30T20:09:18Z","url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30577786752","workflowName":"SFIA Studio CI"}

---

# SECTION — Issue comments JSON

[]
---

# SECTION — Inline comments JSON

[]
---

# SECTION — Reviews JSON

[]
---

# SECTION — Diff correspondence

baseOid=3e8a4374405dce98866e35fb60c5c7329701f191
headOid=e2e898405c0a555573187e04dd6c3de777595f19
pr_base=3e8a4374405dce98866e35fb60c5c7329701f191
pr_head=e2e898405c0a555573187e04dd6c3de777595f19
local_stat:
 .../__tests__/oa/cycle/cycleTypeCatalog.test.ts    | 720 +++++++++++++++++++++
 .../app/lib/oa/cycle/domain/cycleTypeCatalog.ts    | 643 ++++++++++++++++++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   1 +
 .../08-implementation-backlog-and-slicing.md       |  84 ++-
 .../12-v3-cycle-recommendation-cadrage.md          | 460 +++++++++++++
 ...v3-1-profile-qualification-functional-design.md | 478 ++++++++++++++
 ...1-cycle-type-catalog-functional-architecture.md | 403 ++++++++++++
 .../README.md                                      | 143 +---
 .../01-qa-validation-report.md                     | 277 ++++++++
 .../02-corrective-delivery-report.md               | 110 ++++
 .../03-qa-revalidation-report.md                   | 135 ++++
 .../04-pr-readiness-report.md                      | 218 +++++++
 .../README.md                                      | 150 +++++
 13 files changed, 3667 insertions(+), 155 deletions(-)
pr_additions_deletions: 3667/155

---

# SECTION — Framing README main (pre-condensation)

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING HISTORICAL — D-VS-01→04 ADOPTED — V1 EXECUTED LOCALLY — V2 NOT AUTHORIZED` |
| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
| **Profil** | Standard |
| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
| **Branche framing** | `framing/sfia-studio-first-user-visible-vertical-slice` @ `c1955179a36079e060c41a845c2a1950084966c8` |
| **Branche V1 locale** | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
| **Code applicatif framing** | **aucune modification** |
| **Exécution V1** | facade headless T-A0/T-A1, OA mémoire, projection et audit optionnel — voir `11` |
| **Push / PR / merge projet V1** | **non autorisés, non exécutés** |

## Objectif

Cadrer le premier parcours **réellement visible et compréhensible** :

**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**

en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

## Synthèse

Trois stacks UI coexistent aujourd’hui et **ne sont pas unifiées** :

1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).

Le cœur Option A (`lib/oa/**`) est **complet jusqu’à T-A6** (+ fondations T-A7) mais **aucune route UI n’importe `@/lib/oa/**` aujourd’hui**.

Le framing propose une **facade applicative locale** au-dessus des use cases OA + lecture T-A7, en **adaptant StudioShell** et en **séparant strictement** fixture / local / produit.

## Scope / hors scope

**Dans le scope (cible produit local borné)** : création Project/LPS réelle · doctrine T-A0 · qualification cycle T-A2 · décision locale T-A3 honnête · dashboard readiness T-A6/T-A7 · historique borné F13.4.

**Hors scope** : IAM · Critical ack réel · agent/shell Cursor réel · harness BeB comme happy path · persistance produit · API HTTP obligatoire · delivery/cutover · fermeture HARD/T-A6/B5/R1/R-M01 · T-A7 COMPLETE · nouveau design system.

## Parcours cible (résumé)

1. Arrivée — disclosure mode local · CTA Créer un projet
2. Création — champs minimaux → T-A0+T-A1
3. Fiche projet — LPS, cycle, blockers
4. Recommandation — T-A2 (≠ décision)
5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
6. Readiness dashboard — anti-claims honnêtes
7. Historique borné

## Architecture (résumé)

```text
UI (StudioShell + screens)
  → VerticalSliceFacade (application composition)
    → ports T-A0…T-A7 use cases
      → adapters mémoire OA (+ audit SQLite optionnel)
        → UI projections read-only
```

Aucun composant React ne décide Critical / HARD closed / preuve suffisante / autorité / gate.

## Figma

| Item | Valeur |
|------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
| Page listée | `0:1` — **UX-B — P0** |
| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
| Contrat visuel | **Git** — voir `05` |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |

## Backlog recommandé

V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.

## Décisions Morris

| ID | Statut | Décision |
|----|--------|----------|
| D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
| D-VS-02 | `DECIDED — ADOPTED BY MORRIS` | mémoire OA + audit SQLite local optionnel |
| D-VS-03 | `DECIDED — ADOPTED BY MORRIS` | fixtures hors happy path |
| D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

## Statut d'exécution V1

V1 est exécuté localement sur une branche descendante du commit de framing. La facade compose la résolution Doctrine T-A0 et la création atomique Project/LPS v1 T-A1, puis expose une projection read-only reconstruite depuis T-A1. Les fixtures et le storage navigateur sont hors de cette surface.

Validations : 16 nouveaux tests ; régressions ciblées 109/109 ; suite complète 752/752 ; typecheck, lint et build green. Aucun fichier UI, OA existant, schéma SQLite, package ou lockfile n'est modifié.

V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est implémenté.

## Anti-claims

- Framing ≠ produit ready ≠ MVP validé
- UI POC ≠ cœur OA branché
- Décision locale ≠ autorité IAM
- Local SQLite ≠ persistance produit
- Recommandation ≠ décision Morris
- HARD/T-A6 restent ouverts

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01` | Inventaire UI + cœur |
| `02` | Journey et scope |
| `03` | Mapping T-A0→T-A7 ↔ UI |
| `04` | IA & navigation |
| `05` | Contrat visuel & Figma |
| `06` | Données locales & composition |
| `07` | A11y / responsive / erreurs |
| `08` | Backlog & slicing |
| `09` | Plan validation / preuves |
| `10` | Risques & decision pack Morris |
| `11` | Exécution locale V1 — Project core composition |

## Gate candidat suivant

`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Après intégration distincte de V1 : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`.

Aucun gate automatique.

## Verdict

`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED`

---

# SECTION — Framing README PR (condensed)

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
| **Cycle courant** | 13 — PR readiness V3.1-D1 |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
| **QA-G3** | **PASS Morris** |
| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.

## Gate candidat suivant

`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`

## Verdict

`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`

---

# SECTION — Remote PR diff (complete — all 13 files)

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
new file mode 100644
index 00000000..0102fc02
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
@@ -0,0 +1,720 @@
+/**
+ * V3.1-D1 — Cycle Type Catalog contract tests.
+ * @vitest-environment node
+ */
+import { existsSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  ADOPTED_CYCLE_TYPE_IDS,
+  CAPITALIZATION_CYCLE_TYPE_ID,
+  CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
+  CKC_PILOT_CADRAGE_PATH,
+  CKC_PILOT_CONCEPTION_PATH,
+  CKC_PILOT_QA_VALIDATION_PATH,
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_VERSION,
+  getCycleTypeById,
+  isKnownCycleTypeId,
+  listCycleTypes,
+  validateCycleTypeCatalog,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+const EXPECTED_IDS = [
+  "cyc:framing",
+  "cyc:functional-design",
+  "cyc:functional-architecture",
+  "cyc:ux-ui",
+  "cyc:backlog",
+  "cyc:technical-architecture",
+  "cyc:integration-devops",
+  "cyc:delivery",
+  "cyc:qa-validation",
+  "cyc:security",
+  "cyc:release",
+  "cyc:observability",
+  "cyc:pr-readiness",
+  "cyc:post-merge",
+  "cyc:capitalization",
+] as const;
+
+const DETAILED_IDS = new Set([
+  "cyc:framing",
+  "cyc:functional-design",
+  "cyc:technical-architecture",
+  "cyc:qa-validation",
+]);
+
+const WORKSPACE_ROOT = path.resolve(__dirname, "../../../../../../");
+
+function cloneCatalog(
+  mutate: (entries: CycleTypeDefinition[]) => CycleTypeDefinition[],
+): CycleTypeCatalog {
+  const entries = mutate(
+    CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+      ...entry,
+      ckc: { ...entry.ckc },
+      aliases: [...entry.aliases],
+    })),
+  );
+  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
+}
+
+describe("V3.1-D1 cycle type catalog", () => {
+  it("exposes catalog version and exactly fifteen entries", () => {
+    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
+    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(15);
+    expect(ADOPTED_CYCLE_TYPE_IDS).toEqual([...EXPECTED_IDS]);
+  });
+
+  it("lists exact adopted cycleTypeId set in order", () => {
+    expect(listCycleTypes().map((e) => e.cycleTypeId)).toEqual([
+      ...EXPECTED_IDS,
+    ]);
+  });
+
+  it("enforces uniqueness of ids, canonical keys, numbers and orders", () => {
+    const ids = CYCLE_TYPE_CATALOG.entries.map((e) => e.cycleTypeId);
+    const keys = CYCLE_TYPE_CATALOG.entries.map((e) => e.canonicalKey);
+    const numbers = CYCLE_TYPE_CATALOG.entries.map((e) => e.methodCycleNumber);
+    const orders = CYCLE_TYPE_CATALOG.entries.map((e) => e.displayOrder);
+    expect(new Set(ids).size).toBe(15);
+    expect(new Set(keys).size).toBe(15);
+    expect(new Set(numbers).size).toBe(15);
+    expect(new Set(orders).size).toBe(15);
+    expect(numbers.sort((a, b) => a - b)).toEqual([
+      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
+    ]);
+    expect(orders.sort((a, b) => a - b)).toEqual([
+      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
+    ]);
+  });
+
+  it("uses OA cyc: identifiers and preserves cyc:capitalization", () => {
+    for (const id of EXPECTED_IDS) {
+      expect(id.startsWith("cyc:")).toBe(true);
+      expect(isKnownCycleTypeId(id)).toBe(true);
+    }
+    expect(CAPITALIZATION_CYCLE_TYPE_ID).toBe("cyc:capitalization");
+    expect(getCycleTypeById("cyc:capitalization")?.cycleTypeId).toBe(
+      "cyc:capitalization",
+    );
+  });
+
+  it("requires non-empty french labels/descriptions and active lifecycle", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.label.trim().length).toBeGreaterThan(0);
+      expect(entry.shortDescription.trim().length).toBeGreaterThan(0);
+      expect(entry.methodReference.trim().length).toBeGreaterThan(0);
+      expect(entry.lifecycleStatus).toBe("active");
+    }
+  });
+
+  it("maps mandatory CKC for all fifteen with executionAuthority false", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.ckc.mandatory).toBe(true);
+      expect(entry.ckc.executionAuthority).toBe(false);
+      expect(entry.ckc.doctrineStatus).toBe("method-candidate");
+      expect(entry.ckc.unavailableBehavior).toBe("fail-closed");
+      expect(entry.ckc.primaryReference.length).toBeGreaterThan(0);
+    }
+  });
+
+  it("has exactly four detailed and eleven synthetic CKC mappings", () => {
+    const detailed = CYCLE_TYPE_CATALOG.entries.filter(
+      (e) => e.ckc.primaryLevel === "detailed",
+    );
+    const synthetic = CYCLE_TYPE_CATALOG.entries.filter(
+      (e) => e.ckc.primaryLevel === "synthetic",
+    );
+    expect(detailed).toHaveLength(4);
+    expect(synthetic).toHaveLength(11);
+    expect(detailed.map((e) => e.cycleTypeId).sort()).toEqual(
+      [...DETAILED_IDS].sort(),
+    );
+  });
+
+  it("requires synthetic fallback for detailed pilots", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      if (entry.ckc.primaryLevel === "detailed") {
+        expect(entry.ckc.fallbackPolicy).toBe("synthetic_map");
+        expect(entry.ckc.fallbackReference).toBe(CKC_SYNTHETIC_MAP_PATH);
+      } else {
+        expect(entry.ckc.primaryReference).toBe(CKC_SYNTHETIC_MAP_PATH);
+      }
+    }
+  });
+
+  it("uses canonical Git CKC paths for pilots and synthetic map", () => {
+    expect(getCycleTypeById("cyc:framing")?.ckc.primaryReference).toBe(
+      CKC_PILOT_CADRAGE_PATH,
+    );
+    expect(
+      getCycleTypeById("cyc:functional-design")?.ckc.primaryReference,
+    ).toBe(CKC_PILOT_CONCEPTION_PATH);
+    expect(
+      getCycleTypeById("cyc:technical-architecture")?.ckc.primaryReference,
+    ).toBe(CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH);
+    expect(getCycleTypeById("cyc:qa-validation")?.ckc.primaryReference).toBe(
+      CKC_PILOT_QA_VALIDATION_PATH,
+    );
+
+    for (const rel of [
+      CKC_SYNTHETIC_MAP_PATH,
+      CKC_PILOT_CADRAGE_PATH,
+      CKC_PILOT_CONCEPTION_PATH,
+      CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
+      CKC_PILOT_QA_VALIDATION_PATH,
+    ]) {
+      expect(existsSync(path.join(WORKSPACE_ROOT, rel))).toBe(true);
+    }
+  });
+
+  it("looks up by cycleTypeId only — never label or canonicalKey", () => {
+    expect(getCycleTypeById("cyc:delivery")?.label).toBe(
+      "Delivery / implémentation",
+    );
+    expect(getCycleTypeById("delivery-implementation")).toBeUndefined();
+    expect(getCycleTypeById("Delivery / implémentation")).toBeUndefined();
+    expect(getCycleTypeById("cadrage")).toBeUndefined();
+    expect(isKnownCycleTypeId("unknown")).toBe(false);
+    expect(getCycleTypeById("cyc:unknown")).toBeUndefined();
+  });
+
+  it("returns a non-mutating list copy", () => {
+    const listed = listCycleTypes();
+    listed.pop();
+    expect(listCycleTypes()).toHaveLength(15);
+    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(15);
+  });
+
+  it("contains no profile, gate or morris decision fields", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      const keys = Object.keys(entry);
+      expect(keys).not.toContain("profile");
+      expect(keys).not.toContain("recommendedProfile");
+      expect(keys).not.toContain("gate");
+      expect(keys).not.toContain("isMorrisDecision");
+      expect(keys).not.toContain("Light");
+      expect(entry.ckc.executionAuthority).toBe(false);
+    }
+  });
+
+  it("passes production catalog validation", () => {
+    expect(validateCycleTypeCatalog(CYCLE_TYPE_CATALOG)).toEqual([]);
+  });
+
+  it("starts with empty aliases (controlled aliases supported, none required)", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.aliases).toEqual([]);
+    }
+  });
+});
+
+describe("V3.1-D1 cycle type catalog negatives", () => {
+  it("rejects duplicate cycleTypeId", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[1] = { ...entries[1], cycleTypeId: entries[0].cycleTypeId };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some((i) => i.code === "ID_DUPLICATE"),
+    ).toBe(true);
+  });
+
+  it("rejects duplicate displayOrder", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[1] = { ...entries[1], displayOrder: entries[0].displayOrder };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "DISPLAY_ORDER_DUPLICATE",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects duplicate methodCycleNumber", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[1] = {
+        ...entries[1],
+        methodCycleNumber: entries[0].methodCycleNumber,
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "METHOD_NUMBER_DUPLICATE",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects invalid OA pattern", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], cycleTypeId: "not-an-oa-id" };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "ID_PATTERN" || i.code === "ID_PREFIX",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects missing capitalization id", () => {
+    const catalog = cloneCatalog((entries) =>
+      entries.filter((e) => e.cycleTypeId !== "cyc:capitalization"),
+    );
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CAPITALIZATION_MISSING" || i.code === "COUNT",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects missing CKC mapping", () => {
+    const catalog = cloneCatalog((entries) => {
+      const { ckc: _ckc, ...rest } = entries[0];
+      entries[0] = rest as CycleTypeDefinition;
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some((i) => i.code === "CKC_MISSING"),
+    ).toBe(true);
+  });
+
+  it("rejects executionAuthority true", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          executionAuthority: true as unknown as false,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CKC_EXECUTION_AUTHORITY",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects detailed without synthetic fallback", () => {
+    const catalog = cloneCatalog((entries) => {
+      const framing = entries.find((e) => e.cycleTypeId === "cyc:framing")!;
+      const idx = entries.indexOf(framing);
+      entries[idx] = {
+        ...framing,
+        ckc: {
+          ...framing.ckc,
+          fallbackPolicy: "none",
+          fallbackReference: undefined,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CKC_DETAILED_FALLBACK",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects synthetic without synthetic map reference", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find(
+        (e) => e.cycleTypeId === "cyc:delivery",
+      )!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          primaryReference: "method/invented.md",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CKC_SYNTHETIC_REF",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects ambiguous aliases", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], aliases: ["alias:dup", "alias:dup"] };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "ALIAS_AMBIGUOUS",
+      ),
+    ).toBe(true);
+  });
+});
+
+/**
+ * QA Critical reinforcement (V3.1-D1 cycle 9).
+ * Uses local clones only — never mutates production catalog.
+ * Failures against validateCycleTypeCatalog indicate validator gaps (not silent PASS).
+ */
+describe("V3.1-D1 QA reinforcement — production data & immutability", () => {
+  it("keeps all fifteen production entries lifecycleStatus active", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.lifecycleStatus).toBe("active");
+    }
+  });
+
+  it("freezes catalog, entries, each entry, each ckc and each aliases", () => {
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries)).toBe(true);
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(Object.isFrozen(entry)).toBe(true);
+      expect(Object.isFrozen(entry.ckc)).toBe(true);
+      expect(Object.isFrozen(entry.aliases)).toBe(true);
+    }
+  });
+
+  it("rejects deep mutation attempts against the registry", () => {
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    const originalId = first.cycleTypeId;
+    const originalLabel = first.label;
+    const originalPrimary = first.ckc.primaryReference;
+    expect(() => {
+      (CYCLE_TYPE_CATALOG as { version: string }).version = "tampered";
+    }).toThrow();
+    expect(() => {
+      (first as { label: string }).label = "TAMPERED";
+    }).toThrow();
+    expect(() => {
+      (first.ckc as { primaryReference: string }).primaryReference =
+        "method/tampered.md";
+    }).toThrow();
+    expect(() => {
+      (first.aliases as string[]).push("alias:tampered");
+    }).toThrow();
+    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
+    expect(first.cycleTypeId).toBe(originalId);
+    expect(first.label).toBe(originalLabel);
+    expect(first.ckc.primaryReference).toBe(originalPrimary);
+    expect(first.aliases).toEqual([]);
+    expect(getCycleTypeById(originalId)?.label).toBe(originalLabel);
+  });
+
+  it("binds methodReference to §4.1 … §4.15 in method cycle order", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.methodReference).toContain(
+        `§4.${entry.methodCycleNumber}`,
+      );
+      expect(entry.methodReference).toContain(
+        "sfia-v2.5-project-cycles-method-candidate.md",
+      );
+    }
+  });
+
+  it("confirms Git paths exist for four detailed pilots and synthetic map", () => {
+    for (const rel of [
+      CKC_SYNTHETIC_MAP_PATH,
+      CKC_PILOT_CADRAGE_PATH,
+      CKC_PILOT_CONCEPTION_PATH,
+      CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
+      CKC_PILOT_QA_VALIDATION_PATH,
+    ]) {
+      expect(existsSync(path.join(WORKSPACE_ROOT, rel))).toBe(true);
+    }
+  });
+
+  it("uses exact catalog version 0.1.0-v3.1-d1", () => {
+    expect(CYCLE_TYPE_CATALOG_VERSION).toBe("0.1.0-v3.1-d1");
+    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
+  });
+
+  it("keeps synthetic fallbackPolicy none without fallbackReference", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      if (entry.ckc.primaryLevel === "synthetic") {
+        expect(entry.ckc.fallbackPolicy).toBe("none");
+        expect(entry.ckc.fallbackReference).toBeUndefined();
+      }
+    }
+  });
+});
+
+describe("V3.1-D1 QA reinforcement — validator negatives & edges", () => {
+  it("detects invalid lifecycleStatus", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        lifecycleStatus: "bogus" as CycleTypeDefinition["lifecycleStatus"],
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "LIFECYCLE_STATUS_INVALID" ||
+          i.message.toLowerCase().includes("lifecycle"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects doctrineStatus other than method-candidate", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          doctrineStatus: "baseline" as "method-candidate",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_DOCTRINE_STATUS" ||
+          i.message.toLowerCase().includes("doctrine"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unavailableBehavior other than fail-closed", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          unavailableBehavior: "soft-fail" as "fail-closed",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_UNAVAILABLE_BEHAVIOR" ||
+          i.message.toLowerCase().includes("fail-closed") ||
+          i.message.toLowerCase().includes("unavailable"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects synthetic mapping with incoherent fallbackPolicy", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackPolicy: "synthetic_map",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_POLICY" ||
+          i.message.toLowerCase().includes("synthetic") &&
+            i.message.toLowerCase().includes("fallback"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects synthetic mapping with contradictory fallbackReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
+          (i.message.toLowerCase().includes("fallback") &&
+            i.message.toLowerCase().includes("synthetic")),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects methodCycleNumber unique but outside 1…15", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], methodCycleNumber: 16 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "METHOD_NUMBER_RANGE" ||
+          i.code === "METHOD_NUMBER_SET" ||
+          i.message.toLowerCase().includes("methodcyclenumber"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects displayOrder unique but outside 1…15", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], displayOrder: 0 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "DISPLAY_ORDER_RANGE" ||
+          i.code === "DISPLAY_ORDER_SET" ||
+          i.message.toLowerCase().includes("displayorder"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incomplete methodCycleNumber set (unique but not exact 1…15)", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], methodCycleNumber: 16 };
+      return entries;
+    });
+    // Unique still holds for 2..15 + 16; exact set 1..15 must fail.
+    const issues = validateCycleTypeCatalog(catalog);
+    expect(
+      issues.some(
+        (i) =>
+          i.code === "METHOD_NUMBER_SET" ||
+          i.code === "METHOD_NUMBER_RANGE" ||
+          i.message.includes("1") && i.message.includes("15"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incomplete displayOrder set (unique but not exact 1…15)", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[14] = { ...entries[14], displayOrder: 99 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "DISPLAY_ORDER_SET" ||
+          i.code === "DISPLAY_ORDER_RANGE" ||
+          i.message.toLowerCase().includes("displayorder"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects alias collision between two entries", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], aliases: ["alias:shared"] };
+      entries[1] = { ...entries[1], aliases: ["alias:shared"] };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "ALIAS_AMBIGUOUS",
+      ),
+    ).toBe(true);
+  });
+
+  it("detects alias equal to another entry cycleTypeId", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[1] = { ...entries[1], aliases: [entries[0].cycleTypeId] };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "ALIAS_AMBIGUOUS" ||
+          i.code === "ALIAS_COLLIDES_WITH_ID" ||
+          i.message.toLowerCase().includes("alias"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incorrect catalog version", () => {
+    const catalog = {
+      version: "9.9.9-wrong" as typeof CYCLE_TYPE_CATALOG_VERSION,
+      entries: CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CATALOG_VERSION" ||
+          i.message.toLowerCase().includes("version"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unknown primaryLevel", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          primaryLevel: "unknown" as "detailed",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_PRIMARY_LEVEL" ||
+          i.code === "DETAILED_COUNT" ||
+          i.code === "SYNTHETIC_COUNT" ||
+          i.message.toLowerCase().includes("primary"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unauthorized fallbackReference on synthetic", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
+          i.message.toLowerCase().includes("fallback"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects empty primaryReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: { ...entries[0].ckc, primaryReference: "   " },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CKC_PRIMARY_REF",
+      ),
+    ).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
new file mode 100644
index 00000000..9968f040
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
@@ -0,0 +1,643 @@
+/**
+ * V3.1-D1 — Cycle Type Catalog runtime contract (pure domain).
+ *
+ * Immutable projection of the fifteen Morris-adopted cycle types and their
+ * mandatory CKC mapping metadata. No I/O, no resolver orchestration, no UI.
+ *
+ * Decisions: D-V3.1-CAT-01…08 (see framing doc 14).
+ */
+
+import { isOaIdentifier } from "./invariants";
+import { CAPITALIZATION_CYCLE_TYPE_ID } from "./types";
+
+/** Contract version of the static catalog snapshot. */
+export const CYCLE_TYPE_CATALOG_VERSION = "0.1.0-v3.1-d1" as const;
+
+/** Canonical Git path of the fifteen-cycles synthetic CKC map. */
+export const CKC_SYNTHETIC_MAP_PATH =
+  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md" as const;
+
+/** Method candidate document used for doctrinal provenance. */
+export const METHOD_CYCLES_DOC_PATH =
+  "method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md" as const;
+
+export const CKC_PILOT_CADRAGE_PATH =
+  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md" as const;
+
+export const CKC_PILOT_CONCEPTION_PATH =
+  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md" as const;
+
+export const CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH =
+  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md" as const;
+
+export const CKC_PILOT_QA_VALIDATION_PATH =
+  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md" as const;
+
+export type CycleTypeLifecycleStatus =
+  | "active"
+  | "deprecated"
+  | "unavailable";
+
+/** Primary CKC resolution level for catalog mapping (D1 static contract). */
+export type CycleTypeCkcPrimaryLevel = "detailed" | "synthetic";
+
+/**
+ * Mandatory CKC mapping carried by each catalog entry.
+ * Orchestrated resolution remains D2 — this is static contract metadata only.
+ */
+export type CycleTypeCkcMapping = {
+  /** Always true for V3.1 catalog entries. */
+  mandatory: true;
+  primaryLevel: CycleTypeCkcPrimaryLevel;
+  /** Git-relative path of the primary CKC source. */
+  primaryReference: string;
+  /**
+   * Fallback policy:
+   * - synthetic_map: use fifteen-cycles synthetic map
+   * - none: synthetic primary with no further fallback (fail-closed if invalid)
+   */
+  fallbackPolicy: "synthetic_map" | "none";
+  /** Present when primaryLevel is detailed (mandatory synthetic fallback). */
+  fallbackReference?: typeof CKC_SYNTHETIC_MAP_PATH;
+  /** CKC never holds execution authority. */
+  executionAuthority: false;
+  /** Candidate doctrine maturity — not optional, not global baseline. */
+  doctrineStatus: "method-candidate";
+  /** Expected product behaviour when no valid source can be resolved. */
+  unavailableBehavior: "fail-closed";
+};
+
+export type CycleTypeDefinition = {
+  cycleTypeId: string;
+  /** Harness/method slug for traceability — never used as cycleTypeId. */
+  canonicalKey: string;
+  label: string;
+  shortDescription: string;
+  displayOrder: number;
+  lifecycleStatus: CycleTypeLifecycleStatus;
+  methodCycleNumber: number;
+  methodReference: string;
+  ckc: CycleTypeCkcMapping;
+  /** Controlled aliases (1→1). Empty in D1 — no initial aliases. */
+  aliases: readonly string[];
+};
+
+export type CycleTypeCatalog = {
+  version: typeof CYCLE_TYPE_CATALOG_VERSION;
+  entries: readonly CycleTypeDefinition[];
+};
+
+export type CycleTypeCatalogValidationIssue = {
+  code: string;
+  message: string;
+};
+
+function detailedCkc(primaryReference: string): CycleTypeCkcMapping {
+  return {
+    mandatory: true,
+    primaryLevel: "detailed",
+    primaryReference,
+    fallbackPolicy: "synthetic_map",
+    fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+    executionAuthority: false,
+    doctrineStatus: "method-candidate",
+    unavailableBehavior: "fail-closed",
+  };
+}
+
+function syntheticCkc(): CycleTypeCkcMapping {
+  return {
+    mandatory: true,
+    primaryLevel: "synthetic",
+    primaryReference: CKC_SYNTHETIC_MAP_PATH,
+    fallbackPolicy: "none",
+    executionAuthority: false,
+    doctrineStatus: "method-candidate",
+    unavailableBehavior: "fail-closed",
+  };
+}
+
+function methodRef(section: string): string {
+  return `${METHOD_CYCLES_DOC_PATH} ${section}`;
+}
+
+/**
+ * Immutable catalog entries — Morris-adopted CAT-I1 IDs.
+ * Order is displayOrder / methodCycleNumber 1…15.
+ */
+const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
+  Object.freeze({
+    cycleTypeId: "cyc:framing",
+    canonicalKey: "cadrage",
+    label: "Cadrage",
+    shortDescription: "Clarifier intention, périmètre, contraintes",
+    displayOrder: 1,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 1,
+    methodReference: methodRef("§4.1"),
+    ckc: Object.freeze(detailedCkc(CKC_PILOT_CADRAGE_PATH)),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:functional-design",
+    canonicalKey: "conception-fonctionnelle",
+    label: "Conception fonctionnelle",
+    shortDescription: "Usages, règles, objets métier",
+    displayOrder: 2,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 2,
+    methodReference: methodRef("§4.2"),
+    ckc: Object.freeze(detailedCkc(CKC_PILOT_CONCEPTION_PATH)),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:functional-architecture",
+    canonicalKey: "architecture-fonctionnelle",
+    label: "Architecture fonctionnelle",
+    shortDescription: "Structure, flux, découpage",
+    displayOrder: 3,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 3,
+    methodReference: methodRef("§4.3"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:ux-ui",
+    canonicalKey: "ux-ui",
+    label: "UX/UI",
+    shortDescription: "Expérience et interface",
+    displayOrder: 4,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 4,
+    methodReference: methodRef("§4.4"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:backlog",
+    canonicalKey: "backlog-user-stories",
+    label: "Backlog / user stories",
+    shortDescription: "Stories testables",
+    displayOrder: 5,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 5,
+    methodReference: methodRef("§4.5"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:technical-architecture",
+    canonicalKey: "architecture-technique",
+    label: "Architecture technique",
+    shortDescription: "Stack, patterns, ADR",
+    displayOrder: 6,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 6,
+    methodReference: methodRef("§4.6"),
+    ckc: Object.freeze(detailedCkc(CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH)),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:integration-devops",
+    canonicalKey: "integration-devops",
+    label: "Intégration / DevOps",
+    shortDescription: "CI/CD, environnements",
+    displayOrder: 7,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 7,
+    methodReference: methodRef("§4.7"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:delivery",
+    canonicalKey: "delivery-implementation",
+    label: "Delivery / implémentation",
+    shortDescription: "Implémentation bornée",
+    displayOrder: 8,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 8,
+    methodReference: methodRef("§4.8"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:qa-validation",
+    canonicalKey: "qa-validation",
+    label: "QA / validation",
+    shortDescription: "Preuves et réserves",
+    displayOrder: 9,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 9,
+    methodReference: methodRef("§4.9"),
+    ckc: Object.freeze(detailedCkc(CKC_PILOT_QA_VALIDATION_PATH)),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:security",
+    canonicalKey: "securite-rssi",
+    label: "Sécurité / RSSI",
+    shortDescription: "Menaces et contrôles",
+    displayOrder: 10,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 10,
+    methodReference: methodRef("§4.10"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:release",
+    canonicalKey: "deploiement-release",
+    label: "Déploiement / release",
+    shortDescription: "Release contrôlée",
+    displayOrder: 11,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 11,
+    methodReference: methodRef("§4.11"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:observability",
+    canonicalKey: "observabilite-run-readiness",
+    label: "Observabilité / RUN readiness",
+    shortDescription: "Exploitabilité mesurable",
+    displayOrder: 12,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 12,
+    methodReference: methodRef("§4.12"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:pr-readiness",
+    canonicalKey: "pr-readiness",
+    label: "PR readiness",
+    shortDescription: "Branche prête à PR",
+    displayOrder: 13,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 13,
+    methodReference: methodRef("§4.13"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: "cyc:post-merge",
+    canonicalKey: "post-merge",
+    label: "Post-merge",
+    shortDescription: "Clôture après merge",
+    displayOrder: 14,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 14,
+    methodReference: methodRef("§4.14"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+  Object.freeze({
+    cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
+    canonicalKey: "capitalisation-rex",
+    label: "Capitalisation / REX",
+    shortDescription: "Apprentissage réutilisable",
+    displayOrder: 15,
+    lifecycleStatus: "active" as const,
+    methodCycleNumber: 15,
+    methodReference: methodRef("§4.15"),
+    ckc: Object.freeze(syntheticCkc()),
+    aliases: Object.freeze([] as string[]),
+  }),
+]) as readonly CycleTypeDefinition[];
+
+/** Immutable catalog singleton (read-only contract). */
+export const CYCLE_TYPE_CATALOG: CycleTypeCatalog = Object.freeze({
+  version: CYCLE_TYPE_CATALOG_VERSION,
+  entries: CYCLE_TYPE_ENTRIES,
+});
+
+const BY_ID: ReadonlyMap<string, CycleTypeDefinition> = new Map(
+  CYCLE_TYPE_ENTRIES.map((entry) => [entry.cycleTypeId, entry]),
+);
+
+/** Adopted contractual IDs in method order. */
+export const ADOPTED_CYCLE_TYPE_IDS: readonly string[] = Object.freeze(
+  CYCLE_TYPE_ENTRIES.map((entry) => entry.cycleTypeId),
+);
+
+/**
+ * List active catalog entries in display order.
+ * Returns a shallow copy so callers cannot mutate the registry.
+ */
+export function listCycleTypes(): CycleTypeDefinition[] {
+  return CYCLE_TYPE_ENTRIES.filter(
+    (entry) => entry.lifecycleStatus === "active",
+  ).map((entry) => entry);
+}
+
+/** Exact lookup by cycleTypeId — no label/canonicalKey fallback. */
+export function getCycleTypeById(
+  cycleTypeId: string,
+): CycleTypeDefinition | undefined {
+  return BY_ID.get(cycleTypeId);
+}
+
+/** Pure membership check for catalog IDs. */
+export function isKnownCycleTypeId(cycleTypeId: string): boolean {
+  return BY_ID.has(cycleTypeId);
+}
+
+const ALLOWED_LIFECYCLE_STATUSES: ReadonlySet<string> = new Set([
+  "active",
+  "deprecated",
+  "unavailable",
+]);
+
+const ALLOWED_PRIMARY_LEVELS: ReadonlySet<string> = new Set([
+  "detailed",
+  "synthetic",
+]);
+
+const CANONICAL_ONE_TO_FIFTEEN: readonly number[] = Object.freeze([
+  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
+]);
+
+/** Exact membership of the closed set {1…15}. */
+function isExactOneToFifteen(values: ReadonlySet<number>): boolean {
+  if (values.size !== 15) {
+    return false;
+  }
+  for (const n of CANONICAL_ONE_TO_FIFTEEN) {
+    if (!values.has(n)) {
+      return false;
+    }
+  }
+  return true;
+}
+
+function isIntegerInOneToFifteen(value: number): boolean {
+  return Number.isInteger(value) && value >= 1 && value <= 15;
+}
+
+/**
+ * Pure validation of a catalog snapshot (used by tests / future governance).
+ * Does not mutate production data. Returns issues — never throws on invalid entries.
+ */
+export function validateCycleTypeCatalog(
+  catalog: CycleTypeCatalog,
+): CycleTypeCatalogValidationIssue[] {
+  const issues: CycleTypeCatalogValidationIssue[] = [];
+  const entries = catalog.entries;
+
+  if (catalog.version !== CYCLE_TYPE_CATALOG_VERSION) {
+    issues.push({
+      code: "CATALOG_VERSION",
+      message: `catalog version mismatch: expected ${CYCLE_TYPE_CATALOG_VERSION}, got ${String(catalog.version)}`,
+    });
+  }
+
+  if (entries.length !== 15) {
+    issues.push({
+      code: "COUNT",
+      message: `expected 15 entries, got ${entries.length}`,
+    });
+  }
+
+  // Collect all cycleTypeIds first for alias↔id collision checks.
+  const allCycleTypeIds = new Set<string>();
+  for (const entry of entries) {
+    allCycleTypeIds.add(entry.cycleTypeId);
+  }
+
+  const ids = new Set<string>();
+  const keys = new Set<string>();
+  const numbers = new Set<number>();
+  const orders = new Set<number>();
+  let detailedCount = 0;
+  let syntheticCount = 0;
+
+  for (const entry of entries) {
+    if (!isOaIdentifier(entry.cycleTypeId)) {
+      issues.push({
+        code: "ID_PATTERN",
+        message: `invalid OA identifier: ${entry.cycleTypeId}`,
+      });
+    }
+    if (!entry.cycleTypeId.startsWith("cyc:")) {
+      issues.push({
+        code: "ID_PREFIX",
+        message: `missing cyc: prefix: ${entry.cycleTypeId}`,
+      });
+    }
+    if (ids.has(entry.cycleTypeId)) {
+      issues.push({
+        code: "ID_DUPLICATE",
+        message: `duplicate cycleTypeId: ${entry.cycleTypeId}`,
+      });
+    }
+    ids.add(entry.cycleTypeId);
+
+    if (keys.has(entry.canonicalKey)) {
+      issues.push({
+        code: "CANONICAL_KEY_DUPLICATE",
+        message: `duplicate canonicalKey: ${entry.canonicalKey}`,
+      });
+    }
+    keys.add(entry.canonicalKey);
+
+    if (numbers.has(entry.methodCycleNumber)) {
+      issues.push({
+        code: "METHOD_NUMBER_DUPLICATE",
+        message: `duplicate methodCycleNumber: ${entry.methodCycleNumber}`,
+      });
+    }
+    numbers.add(entry.methodCycleNumber);
+    if (!isIntegerInOneToFifteen(entry.methodCycleNumber)) {
+      issues.push({
+        code: "METHOD_NUMBER_RANGE",
+        message: `methodCycleNumber out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
+      });
+    }
+
+    if (orders.has(entry.displayOrder)) {
+      issues.push({
+        code: "DISPLAY_ORDER_DUPLICATE",
+        message: `duplicate displayOrder: ${entry.displayOrder}`,
+      });
+    }
+    orders.add(entry.displayOrder);
+    if (!isIntegerInOneToFifteen(entry.displayOrder)) {
+      issues.push({
+        code: "DISPLAY_ORDER_RANGE",
+        message: `displayOrder out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
+      });
+    }
+
+    if (!ALLOWED_LIFECYCLE_STATUSES.has(entry.lifecycleStatus as string)) {
+      issues.push({
+        code: "LIFECYCLE_STATUS_INVALID",
+        message: `invalid lifecycleStatus for ${entry.cycleTypeId}: ${String(entry.lifecycleStatus)}`,
+      });
+    }
+
+    if (!entry.label.trim()) {
+      issues.push({
+        code: "LABEL_EMPTY",
+        message: `empty label for ${entry.cycleTypeId}`,
+      });
+    }
+    if (!entry.shortDescription.trim()) {
+      issues.push({
+        code: "DESCRIPTION_EMPTY",
+        message: `empty description for ${entry.cycleTypeId}`,
+      });
+    }
+    if (!entry.methodReference.trim()) {
+      issues.push({
+        code: "METHOD_REF_EMPTY",
+        message: `empty methodReference for ${entry.cycleTypeId}`,
+      });
+    }
+
+    if (!entry.ckc || entry.ckc.mandatory !== true) {
+      issues.push({
+        code: "CKC_MISSING",
+        message: `CKC mapping missing/non-mandatory for ${entry.cycleTypeId}`,
+      });
+      continue;
+    }
+    if (entry.ckc.executionAuthority !== false) {
+      issues.push({
+        code: "CKC_EXECUTION_AUTHORITY",
+        message: `executionAuthority must be false for ${entry.cycleTypeId}`,
+      });
+    }
+    if (entry.ckc.doctrineStatus !== "method-candidate") {
+      issues.push({
+        code: "CKC_DOCTRINE_STATUS",
+        message: `doctrineStatus must be method-candidate for ${entry.cycleTypeId}`,
+      });
+    }
+    if (entry.ckc.unavailableBehavior !== "fail-closed") {
+      issues.push({
+        code: "CKC_UNAVAILABLE_BEHAVIOR",
+        message: `unavailableBehavior must be fail-closed for ${entry.cycleTypeId}`,
+      });
+    }
+    if (!entry.ckc.primaryReference?.trim()) {
+      issues.push({
+        code: "CKC_PRIMARY_REF",
+        message: `missing primaryReference for ${entry.cycleTypeId}`,
+      });
+    }
+
+    const primaryLevel = entry.ckc.primaryLevel as string;
+    if (!ALLOWED_PRIMARY_LEVELS.has(primaryLevel)) {
+      issues.push({
+        code: "CKC_PRIMARY_LEVEL",
+        message: `unknown primaryLevel for ${entry.cycleTypeId}: ${String(entry.ckc.primaryLevel)}`,
+      });
+    } else if (entry.ckc.primaryLevel === "detailed") {
+      detailedCount += 1;
+      if (
+        entry.ckc.fallbackPolicy !== "synthetic_map" ||
+        entry.ckc.fallbackReference !== CKC_SYNTHETIC_MAP_PATH
+      ) {
+        issues.push({
+          code: "CKC_DETAILED_FALLBACK",
+          message: `detailed entry requires synthetic_map fallback: ${entry.cycleTypeId}`,
+        });
+      }
+    } else if (entry.ckc.primaryLevel === "synthetic") {
+      syntheticCount += 1;
+      if (entry.ckc.primaryReference !== CKC_SYNTHETIC_MAP_PATH) {
+        issues.push({
+          code: "CKC_SYNTHETIC_REF",
+          message: `synthetic entry must reference synthetic map: ${entry.cycleTypeId}`,
+        });
+      }
+      if (entry.ckc.fallbackPolicy !== "none") {
+        issues.push({
+          code: "CKC_SYNTHETIC_FALLBACK_POLICY",
+          message: `synthetic entry requires fallbackPolicy none: ${entry.cycleTypeId}`,
+        });
+      }
+      if (entry.ckc.fallbackReference !== undefined) {
+        issues.push({
+          code: "CKC_SYNTHETIC_FALLBACK_REF",
+          message: `synthetic entry must not carry fallbackReference: ${entry.cycleTypeId}`,
+        });
+      }
+    }
+
+    const aliasSet = new Set<string>();
+    for (const alias of entry.aliases) {
+      if (aliasSet.has(alias)) {
+        issues.push({
+          code: "ALIAS_AMBIGUOUS",
+          message: `duplicate alias on ${entry.cycleTypeId}: ${alias}`,
+        });
+      }
+      aliasSet.add(alias);
+      if (allCycleTypeIds.has(alias)) {
+        issues.push({
+          code: "ALIAS_COLLIDES_WITH_ID",
+          message: `alias collides with cycleTypeId (${alias}) on ${entry.cycleTypeId}`,
+        });
+      }
+    }
+  }
+
+  if (!isExactOneToFifteen(numbers)) {
+    issues.push({
+      code: "METHOD_NUMBER_SET",
+      message: "methodCycleNumber set must be exactly 1…15",
+    });
+  }
+  if (!isExactOneToFifteen(orders)) {
+    issues.push({
+      code: "DISPLAY_ORDER_SET",
+      message: "displayOrder set must be exactly 1…15",
+    });
+  }
+
+  if (!ids.has(CAPITALIZATION_CYCLE_TYPE_ID)) {
+    issues.push({
+      code: "CAPITALIZATION_MISSING",
+      message: `missing ${CAPITALIZATION_CYCLE_TYPE_ID}`,
+    });
+  } else if (CAPITALIZATION_CYCLE_TYPE_ID !== "cyc:capitalization") {
+    issues.push({
+      code: "CAPITALIZATION_MODIFIED",
+      message: "cyc:capitalization value changed",
+    });
+  }
+
+  if (detailedCount !== 4) {
+    issues.push({
+      code: "DETAILED_COUNT",
+      message: `expected 4 detailed CKC mappings, got ${detailedCount}`,
+    });
+  }
+  if (syntheticCount !== 11) {
+    issues.push({
+      code: "SYNTHETIC_COUNT",
+      message: `expected 11 synthetic CKC mappings, got ${syntheticCount}`,
+    });
+  }
+
+  // Cross-entry alias collisions (shared alias between two entries).
+  const aliasOwners = new Map<string, string>();
+  for (const entry of entries) {
+    for (const alias of entry.aliases) {
+      const owner = aliasOwners.get(alias);
+      if (owner && owner !== entry.cycleTypeId) {
+        issues.push({
+          code: "ALIAS_AMBIGUOUS",
+          message: `alias ${alias} owned by both ${owner} and ${entry.cycleTypeId}`,
+        });
+      }
+      aliasOwners.set(alias, entry.cycleTypeId);
+    }
+  }
+
+  return issues;
+}
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 78aea885..3daf5757 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -9,6 +9,7 @@ export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/qualification";
+export * from "./domain/cycleTypeCatalog";
 
 export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index 2cb96a4b..c138afcf 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -1,54 +1,68 @@
 # 08 — Implementation backlog and slicing
 
-## Stratégie de livraison (recommandation, non décision)
+## Stratégie
 
-**Plusieurs PR** (V1…V5), chacune mergeable ; commits atomiques 1–3.
-Branche framing docs séparée. Pas de big-bang unique.
+Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.
 
-## Lot V1 — Composition locale Project
+## Lot V1 / V2
 
-**Statut au 2026-07-29** : `EXECUTED LOCALLY — TESTS GREEN — PROJECT BRANCH NOT PUSHED`. Voir `11-v1-local-project-core-composition.md`. Ce statut d'exécution complète le backlog historique sans autoriser V2.
+**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).
 
-| Item | Contenu |
-|------|---------|
-| Objectif | Facade + CreateProject/LPS + doctrine resolve + tests |
-| Fichiers probables | `app/lib/studio-vertical-slice/**` (nouveau), tests |
-| Dépendances | T-A0/T-A1 memory factories |
-| Tests | unit facade, idempotency, doctrine fail |
-| Captures | non (pas UI obligatoire) |
-| Stop | IAM, HTTP, package.json sans GO |
-| Dette | facade initiale |
-| Gate | `GO IMPLEMENT … LOT V1 …` |
-| Verdict attendu | V1 COMPLETE — NO UI REQUIRED OR MINIMAL HOOK |
+## Lot V3 — Cycle Recommendation
 
-## Lot V2 — Parcours Create Project
+**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).
 
-**Statut** : `NOT AUTHORIZED`.
+## Lot V3.1 — Profile Qualification (conception)
 
-| Item | Contenu |
-|------|---------|
-| Objectif | Écran create + validation + navigation overview |
-| UI | StudioShell + form |
-| Tests | component + parcours |
-| Captures | desktop create + error |
-| Gate | distinct après V1 |
+**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).
 
-## Lot V3 — Cycle Recommendation
+## Lot V3.1 — Cycle Type Catalog (architecture + adoption)
+
+**DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).
+
+## Lot V3.1-D1 — Catalogue runtime + mapping CKC
+
+**Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.
+
+**Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).
+
+**Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).
+
+**Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).
+
+**QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).
+
+**Statut PR readiness :** `READY FOR PR` — [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) — commit/push/draft PR **soumis à GO**.
+
+Docs :
+- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
+- rapports `01` / `02` / `03` / `04`
 
-T-A2 qualify/create + projection + bandeau ≠ décision.
+| Preuve | Résultat |
+|--------|----------|
+| 15 IDs / mapping CKC | conformes |
+| Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
+| QA-G2 | vert |
+| QA-G3 | **PASS Morris** |
+| PR readiness | **READY FOR PR** · package 13 fichiers · PR **non créée** |
+| D2 / D3 | **non ouverts** |
 
-## Lot V4 — Morris Decision
+### Slicing CAT-08
 
-T-A3 record + LOCAL DEMO mode + Critical blocked + history.
+| Lot | Contenu | Statut |
+|-----|---------|--------|
+| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + QA-G3 PASS · **PR readiness READY** · Git pending GO |
+| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
+| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |
 
-## Lot V5 — Readiness Dashboard
+### Réserves QA
 
-T-A6/T-A7 projections + anti-claims + blockers.
+R-QA-01…09 **CLOSED**. QA-G3 PASS. PR readiness ≠ autorisation commit/push/PR.
 
-## Lot V6 — Consolidation visuelle
+### Réserves D2
 
-Responsive, a11y, captures, Figma page compare, REX.
+Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit.
 
-## D-VS-04 recommandation
+## Lot V3.2 / V4 / V5 / V6
 
-Commencer par **V1 only** (composition). Ne pas livrer V1–V5 d’un coup.
+**NOT AUTHORIZED.**
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
new file mode 100644
index 00000000..82be657c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
@@ -0,0 +1,460 @@
+# 12 — Lot V3 Cycle Recommendation — Cadrage
+
+## A. Meta et cycle record
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 18:52:00 CEST (+0200) |
+| **Cycle** | 1 — Cadrage (phase arbitrage / validation) |
+| **Profil** | Standard |
+| **Typologie** | DOC |
+| **Profondeur** | Standard |
+| **Gate cadrage** | `GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION` (consommé) |
+| **Gate arbitrage (normalisé)** | voir Decision record Morris |
+| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **Commit V2-A3 intégré** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (via merge `3e8a437…`) |
+| **CKC Cadrage** | `pilots/01-cadrage.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
+| **Statut documentaire** | `ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED` |
+| **Commit / push / PR projet** | **non** |
+
+## B. Résumé exécutif
+
+L’utilisateur local (Morris en démonstrateur) dispose désormais d’un Project Workspace process-local (`/studio/projects/[id]`) après Create Project. Le parcours historique prévoit ensuite une **recommandation de cycle**.
+
+**Écart structurant :** le runtime T-A2 (`QualifyCycle`) recommande un **profil** (`Light` \| `Standard` \| `Critical`) à partir de signaux structurés. Il **ne recommande pas** un `cycleTypeId`. `CreateCycle` **exige** un `cycleTypeId` déjà fourni. Afficher honnêtement « cycle recommandé » sans arbitrage Morris sur la **source du type** serait une sur-promesse.
+
+Ce cadrage formalise la promesse, les options, les frontières T-A2 et le decision pack D-V3 — **sans** implémentation ni sélection implicite.
+
+## C. Intention vs solution
+
+### Problème
+
+Après création et consultation d’un Project + LPS, l’utilisateur doit comprendre **quel type de travail SFIA** engager ensuite et sous **quel profil de contrôle**, sans confondre recommandation et décision Morris.
+
+### Ce que « Cycle Recommendation » peut signifier
+
+1. Recommander un **profil** (déjà supporté par T-A2 QualifyCycle).
+2. Recommander un **type de cycle** (`cycleTypeId`) — **non supporté** aujourd’hui par QualifyCycle.
+3. Préparer / créer un `CycleInstance` — CreateCycle, mutation explicite.
+4. Persister un `EpistemicItem` de type Recommendation — option épistémique distincte.
+5. Lier le cycle comme actif dans le LPS — `linkAsActiveCycle`, option mutation distincte.
+
+### Solutions non présélectionnées
+
+Aucune architecture, aucun moteur parallèle, aucune dépendance LLM, aucune frame Figma V3 ne sont retenus ici.
+
+## D. Bénéficiaire et autorité
+
+| Élément | Position |
+|---------|----------|
+| Bénéficiaire | Morris local — opérateur du démonstrateur Studio |
+| Identité | **aucune** authentification IAM |
+| Autorité Critical réelle | **absente** — Critical reste `proposed` |
+| Stakeholder inventé | **interdit** |
+| Décision Morris | Lot **V4** / T-A3 — hors V3 |
+
+## E. État actuel repo-informed
+
+| Élément | État |
+|---------|------|
+| V1 composition Project/LPS | intégré (fondation) |
+| V2-A1 runtime bridge | intégré · create/get Project only |
+| V2-A2 Create Project UI | intégré · `/studio/projects/new` |
+| V2-A3 Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 MERGED |
+| Singleton process-local | `globalThis` · volatil |
+| Contrats T-A2 | présents sous `lib/oa/cycle/**` |
+| Runtime vertical-slice | **n’expose pas** QualifyCycle / CreateCycle |
+| Workspace UI | projection Project/LPS · CTA « Créer un autre projet » uniquement |
+| Agent / LLM live | indisponible |
+| Figma V3 | **non validé** comme source d’exécution · D-VS-05 non consommée |
+
+## F. Écart fonctionnel majeur
+
+```text
+Promesse produit historique (J4) :
+  « Affiche : cycle recommandé, profil, justification… »
+
+Contrat T-A2 réel :
+  QualifyCycle  → recommendedProfile (+ rationale, flags)
+                  cycleTypeId optionnel (capitalization hint only)
+  CreateCycle   → cycleTypeId OBLIGATOIRE
+                  status Critical=proposed | Light/Standard=acknowledged
+                  isMorrisDecision toujours false sur qualification
+```
+
+**Conséquence :** le produit ne peut pas afficher honnêtement « cycle (type) recommandé » sans décision Morris sur D-V3-01 / D-V3-02. Il peut déjà, en principe, afficher « profil recommandé » si V3 se borne à QualifyCycle + saisie des signaux + `cycleTypeId` fourni autrement.
+
+## G. Définitions fonctionnelles distinctes
+
+| Terme | Définition |
+|-------|------------|
+| **Type de cycle** | Identifiant `cycleTypeId` (ex. catalogue méthode) — entrée de CreateCycle |
+| **Profil** | `Light` \| `Standard` \| `Critical` — sortie de QualifyCycle |
+| **Signaux** | Booléens structurés : structuralChange, securityImpact, architectureImpact, dataImpact, irreversible, lowRiskBounded |
+| **Recommandation** | Sortie QualifyCycle · `isMorrisDecision=false` |
+| **CycleInstance** | Entité persistée process-local via CreateCycle |
+| **proposed** | Statut Critical à la création — pas d’ack auto |
+| **acknowledged** | Statut Light/Standard à la création — **≠** décision Morris |
+| **activeCycleInstanceId** | Champ LPS — liaison optionnelle `linkAsActiveCycle` |
+| **EpistemicItem Recommendation** | Type épistémique modélisé — persistance **optionnelle** et séparée |
+| **Décision Morris** | Acte humain V4/T-A3 — hors V3 |
+
+## H. Parcours utilisateur candidat
+
+Depuis `/studio/projects/[id]` :
+
+1. Consulter le contexte Project + LPS (V2-A3).
+2. Ouvrir une surface « préparation / recommandation » (route ou section — **non décidée**).
+3. Fournir ou confirmer les entrées (signaux, éventuellement type, justification Critical).
+4. Obtenir une **qualification** (profil + rationale + réserves).
+5. Comprendre que **recommandation ≠ décision Morris**.
+6. Éventuellement, via CTA explicite (si option retenue), **créer** un CycleInstance.
+7. Ne **jamais** activer Critical, consommer un gate, ni simuler une autorité IAM.
+
+## I. Entrées candidates
+
+| Entrée | Rôle | Note |
+|--------|------|------|
+| projectId | contexte | depuis workspace |
+| objectif / scope | narration UI | non scorés implicitement |
+| cycleTypeId | selon D-V3-02 | requis pour CreateCycle |
+| structuralChange | signal | booléen explicite |
+| securityImpact | signal | booléen explicite |
+| architectureImpact | signal | booléen explicite |
+| dataImpact | signal | booléen explicite |
+| irreversible | signal | booléen explicite |
+| lowRiskBounded | signal | booléen explicite |
+| requestedProfile | optionnel | peut être ajusté par règles |
+| justification Critical | obligatoire si Critical | CreateCycle |
+
+**Interdit :** score implicite, analyse IA live, scraping navigateur, déduction silencieuse de signaux.
+
+## J. Sorties candidates
+
+| Sortie | Source |
+|--------|--------|
+| recommendedProfile | QualifyCycle |
+| rationale | QualifyCycle |
+| criticalSignalsPresent | QualifyCycle |
+| requiresJustificationForCritical | QualifyCycle |
+| isMorrisDecision=false | QualifyCycle (toujours) |
+| capitalizationViaCycleTypeId | si cycleTypeId fourni |
+| état CKC (detailed/synthetic/absent/unavailable) | ResolveCKC — guidance only |
+| réserves process-local / B5 / R1 | disclosures |
+| CycleInstance | **uniquement** après CreateCycle explicite si option validée |
+
+## K. Options de promesse produit
+
+### Option V3-A — Type sélectionné + profil recommandé *(compatible T-A2 actuel)*
+
+- L’utilisateur **sélectionne** explicitement un `cycleTypeId` (catalogue guidé, non inventé dans React).
+- QualifyCycle recommande le **profil**.
+- CTA explicite éventuel → CreateCycle.
+
+### Option V3-B — Type + profil tous deux recommandés
+
+- Nécessite une **conception** (et probablement architecture) pour produire `cycleTypeId` de façon déterministe.
+- Risque : moteur parallèle / duplication de la méthode.
+- Hors « simple bridge » runtime.
+
+### Option V3-C — Agent / LLM live
+
+- **Hors trajectoire actuelle** : agent réel indisponible, pas d’autorité d’exécution, pas de dépendance réseau autorisée pour ce démonstrateur.
+
+**Arbitrage :** option **V3-A** retenue (D-V3-01/02 = 1). V3-B et V3-C non retenues pour ce lot.
+
+## L. Options de mutation
+
+| Option | Description | Note |
+|--------|-------------|------|
+| L1 | Qualification **read-only** | aucune CreateCycle |
+| L2 | Qualification puis **CTA explicite** de création | recommandé comme candidate |
+| L3 | Création **automatique** après qualify | **non recommandée** — création implicite |
+| L4a | Ne **pas** lier LPS actif dans V3 | |
+| L4b | Lier LPS actif **après CTA** (`linkAsActiveCycle`) | |
+| L5a | Recommandation **non persistée** épistémiquement | |
+| L5b | Persister `Recommendation` EpistemicItem après action explicite | |
+
+Chaque axe (L1–L3, L4, L5) est un arbitrage **séparé** (D-V3-03…05).
+
+## M. Critical
+
+Contraintes **déjà imposées** par T-A2 (à confirmer / rappeler, pas à inventer) :
+
+- signaux Critical → profil Critical ;
+- justification **obligatoire** à la création ;
+- status **`proposed`** uniquement ;
+- **aucun** acknowledgement Critical dans T-A2 ;
+- **aucun** gate Morris consommé ;
+- UI attendue : état **blocked / Morris decision required** → Lot **V4** ;
+- fail-closed.
+
+## N. CKC
+
+| Règle | Position |
+|-------|----------|
+| Statut | candidate / guidance |
+| detailed / synthetic / absent | informatif |
+| unavailable | **ne pas** inventer d’autorité |
+| executionAuthority | **false** |
+| Visibilité UI V3 | **à décider** (détail technique vs bandeau utilisateur) |
+
+## O. États UI candidats
+
+| État | Description |
+|------|-------------|
+| initial | workspace projet, pas encore de qualification |
+| saisie | formulaire signaux / type |
+| qualification en cours | loading |
+| recommandation disponible | profil + rationale + disclosures |
+| Critical proposé / bloqué | proposed · CTA V4 · pas d’activation |
+| cycle déjà existant | conflit id / navigation |
+| projet introuvable | PROJECT_NOT_FOUND process-local |
+| conflit LPS | LPS_VERSION_CONFLICT |
+| erreur de persistance | PERSISTENCE_FAILURE |
+| CKC unavailable | guidance absente, qualify/create non bloqués par CKC |
+| état local perdu | restart / hot reload |
+
+## P. Erreurs et recovery
+
+| Code | Comportement utilisateur attendu |
+|------|----------------------------------|
+| CYCLE_INVALID | corriger les champs ; message clair |
+| CYCLE_ALREADY_EXISTS | afficher l’existant ou demander autre id |
+| CYCLE_CRITICAL_JUSTIFICATION_REQUIRED | bloquer create ; saisir justification |
+| PROJECT_NOT_FOUND | retour création / recommencer process-local |
+| CKC_UNAVAILABLE | continuer sans autorité inventée ; disclosure |
+| LPS_VERSION_CONFLICT | recharger LPS ; retenter lien actif si applicable |
+| CONTEXT_STALE | rafraîchir projection workspace |
+| STATE_CONFLICT | message borné ; pas de retry silencieux destructif |
+| PERSISTENCE_FAILURE | état process-local ; proposer recommencer |
+
+Aucune implémentation n’est spécifiée ici.
+
+## Q. Scope
+
+### Pourrait inclure (futur, si décisions favorables)
+
+- surface UI sur workspace ;
+- bridge Server Action → QualifyCycle (± CreateCycle) ;
+- disclosures et bandeau ≠ décision ;
+- états loading / error / Critical blocked ;
+- tests boundaries + preuves captures.
+
+### Hors scope V3
+
+- IAM · décision Critical réelle · agent live · dashboard V5 · delivery/cutover · fermeture HARD/T-A6/B5/R1 · moteur LLM · Figma write · logique domaine React · création automatique · push/PR sans GO.
+
+## R. Critères de succès (cycles suivants)
+
+- profil recommandé compris ;
+- justification / rationale lisible ;
+- distinction recommandation / décision explicite ;
+- aucun cycle créé sans action explicite **si** L2 retenu ;
+- aucun Critical activé ;
+- aucune fixture happy path ;
+- aucune règle T-A2 dupliquée dans React ;
+- anti-claims visibles ;
+- preuves : tests unit/composant + captures runtime définies au delivery.
+
+## S. Slicing (D-V3-08 = option 1 adoptée)
+
+| Option | Contenu | Statut |
+|--------|---------|--------|
+| **S1 — V3.1 puis V3.2** | A: UI + Qualify read-only · B: Create + options LPS/épistémiques | **retenu** |
+| **S2 — lot unique borné** | Qualify + Create explicite + disclosures | non retenu |
+| **S3 — recadrage** | si type recommandé (V3-B) | non applicable (V3-A retenu) |
+
+## T. Risques et réserves
+
+1. Promesse « cycle recommandé » > contrat QualifyCycle.
+2. Duplication de la méthode / scoring dans React.
+3. Création implicite (L3).
+4. Confusion `acknowledged` ≠ décision Morris.
+5. Critical overclaim.
+6. Volatilité process-local / singleton.
+7. LPS conflict (R1) · B5 ouvert.
+8. CKC candidate.
+9. Absence de Figma V3 validé (D-VS-05 / D-V3-07).
+10. Framing pack historique encore partiellement stale sur V2 (corrigé par ce cadrage / README).
+
+## U. Decision pack Morris
+
+### Decision record Morris
+
+| Champ | Valeur |
+|-------|--------|
+| **Formulation réelle (Morris)** | « ok pour les différents choix, on continue et on avance » |
+| **Date/heure/fuseau** | 2026-07-30 vers 18:46 CEST (+0200) |
+| **Interprétation** | Acceptation explicite des recommandations du cadrage V3 (D-V3-01…08) |
+| **Formulation normalisée (traçabilité)** | `GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION — D-V3-01=1 — D-V3-02=1 — D-V3-03=2 — D-V3-04=1 — D-V3-05=1 — D-V3-06=CONFIRM CRITICAL FAIL-CLOSED — D-V3-07=1 WITH FIGMA REASSESSMENT RESERVE — D-V3-08=1` |
+| **Note** | La formulation normalisée trace la décision ; elle ne remplace pas la citation réelle ci-dessus. |
+
+| ID | Option retenue | Conséquence | Réserve | Statut |
+|----|----------------|-------------|---------|--------|
+| D-V3-01 | **1** — type sélectionné + profil T-A2 | Promesse = sélection type + recommandation profil | — | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-02 | **1** — sélection explicite catalogue | Pas de recommandation auto du `cycleTypeId` | catalogue contrôlé, non inventé dans React | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-03 | **2** — CTA explicite de création | Pas de création automatique | création hors 1er incrément read-only | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-04 | **1** — pas de lien LPS actif au 1er incrément | `linkAsActiveCycle` hors V3.1 | réévaluer en V3.2+ | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-05 | **1** — reco non persistée | Pas d’EpistemicItem Recommendation au 1er incrément | réévaluer en V3.2+ | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-06 | **CONFIRM CRITICAL FAIL-CLOSED** | proposed · justification · pas d’activation/ack/gate | bascule V4 | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-07 | **1** + réserve Figma | Contrat Git temporaire | réévaluer Figma avant UI substantielle / fidélité | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-08 | **1** — slicing progressif | V3.1 read-only puis V3.2 create explicite | — | `DECIDED — ADOPTED BY MORRIS` |
+
+### D-V3-01 — Promesse fonctionnelle
+
+Options initiales :
+
+1. Cycle type **sélectionné** + profil **recommandé** (V3-A).
+2. Type de cycle **et** profil **recommandés** (V3-B).
+3. Autre.
+
+Recommandation historique (cadrage) : option **1**.
+
+**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : l’utilisateur sélectionne le type ; T-A2 recommande le profil.
+
+### D-V3-02 — Source du cycleTypeId
+
+Options initiales :
+
+1. Sélection explicite utilisateur.
+2. Règles déterministes à concevoir.
+3. Agent / LLM live.
+4. Autre.
+
+Recommandation historique : option **1** (3 hors trajectoire).
+
+**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : catalogue contrôlé · aucune recommandation automatique du type.
+
+### D-V3-03 — Mutation
+
+Options initiales :
+
+1. Qualification read-only.
+2. CTA explicite de création.
+3. Création automatique.
+
+Recommandation historique : option **2** · **3 non recommandée**.
+
+**Décision : option 2 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : création uniquement via CTA ; jamais automatique. Le 1er incrément (V3.1) reste read-only ; la création relève du 2e incrément (V3.2).
+
+### D-V3-04 — Liaison au LPS
+
+Options initiales :
+
+1. Ne pas lier comme actif dans V3.
+2. Lier uniquement après CTA explicite.
+3. Autre.
+
+Recommandation historique : option **1** au premier incrément.
+
+**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : pas de `linkAsActiveCycle` dans V3.1.
+
+### D-V3-05 — Épistémologie
+
+Options initiales :
+
+1. Recommandation calculée **non persistée**.
+2. `Recommendation` EpistemicItem persisté après action explicite.
+3. Autre.
+
+Recommandation historique : option **1** au premier incrément.
+
+**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : pas de persistance EpistemicItem Recommendation en V3.1.
+
+### D-V3-06 — Critical
+
+Contrainte T-A2 réaffirmée : `proposed` · justification obligatoire · aucune activation / ack / gate auto · bascule V4.
+
+**Décision : CONFIRM CRITICAL FAIL-CLOSED — DECIDED — ADOPTED BY MORRIS.**
+
+### D-V3-07 — UX / Figma
+
+Options initiales :
+
+1. Contrat Git temporaire.
+2. Cycle Figma dédié avant delivery.
+3. Autre.
+
+Recommandation historique : option **1** pour démarrer.
+
+**Décision : option 1 WITH FIGMA REASSESSMENT RESERVE — DECIDED — ADOPTED BY MORRIS.**
+Conséquence : contrat Git temporaire · **D-VS-05 reste NOT DECIDED / NOT CONSUMED** · réévaluer un cycle Figma avant toute UI substantielle ou revendication de fidélité visuelle.
+
+### D-V3-08 — Slicing
+
+Options initiales :
+
+1. V3-A puis V3-B (S1) — read-only puis création.
+2. Lot unique borné (S2).
+3. Recadrage (S3).
+
+Recommandation historique : option **1**.
+
+**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
+Conséquence :
+
+- **V3.1** — conception puis delivery (gates distincts) : qualification **read-only** (type sélectionné + profil recommandé).
+- **V3.2** — création explicite CycleInstance (± options LPS/épistémiques ultérieures si nouveaux GO).
+
+## V. Recommandation ChatGPT/Cursor — **ARBITRÉE**
+
+La recommandation de cadrage ci-dessous a été **présentée** puis **acceptée** par Morris (formulation réelle du Decision record). Elle n’est plus « à arbitrer » ; la **source de décision** est Morris, pas la recommandation elle-même.
+
+Recommandation historique (consommée) :
+
+1. D-V3-01/02 → Option V3-A.
+2. D-V3-03 → L2 (CTA explicite ; rejeter L3).
+3. D-V3-04 → L4a au 1er incrément.
+4. D-V3-05 → L5a au 1er incrément.
+5. D-V3-06 → Critical fail-closed.
+6. D-V3-07 → contrat Git + réserve Figma.
+7. D-V3-08 → S1 (read-only puis create).
+
+**Réserves maintenues (non levées par l’arbitrage) :**
+
+- réévaluation Figma avant UI substantielle (D-V3-07) ;
+- D-VS-05 non consommée ;
+- B5 / R1 ouverts ;
+- volatilité process-local ;
+- pas d’implémentation sans GO delivery distinct.
+
+## W. Transition candidate
+
+| Étape | Statut |
+|-------|--------|
+| Arbitrage D-V3 | **fait** |
+| Prochain cycle candidat | **Conception fonctionnelle V3.1** — profile qualification UI · type sélectionné · profil T-A2 · **read-only** · pas de CreateCycle |
+| Architecture moteur type recommandé | **non requise** (D-V3-01/02 = sélection explicite) |
+| Delivery / implémentation | **non autorisée** tant que GO conception puis GO delivery absents |
+| V3.2 CreateCycle explicite | après V3.1 · GO distinct |
+
+Gate candidat suivant (non ouvert) :
+
+`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`
+
+## X. Anti-claims
+
+- Cadrage / arbitrage ≠ conception validée ≠ delivery autorisé
+- Recommandation historique ≠ source de décision (Morris décide)
+- Profil recommandé ≠ type de cycle recommandé
+- `acknowledged` ≠ autorité Morris
+- Cycle créé ≠ cycle actif si non lié
+- CKC ≠ autorité d’exécution
+- V3 framing ≠ V3 implementation
+- Tests futurs ≠ PRODUCT READY / RUN READY
+- Pas IAM / agent / delivery / cutover / HARD CLOSED / T-A6 COMPLETE
+
+## Y. Verdict et prochain gate candidat
+
+**V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED**
+
+Prochain gate candidat (non ouvert) :
+
+`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
new file mode 100644
index 00000000..3ecb0256
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
@@ -0,0 +1,478 @@
+# 13 — V3.1 Profile Qualification UI — Conception fonctionnelle
+
+## A. Meta et cycle record
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 19:09:00 CEST (+0200) |
+| **Cycle** | 2 — Conception fonctionnelle |
+| **Profil** | Standard |
+| **Typologie** | DOC |
+| **Profondeur** | Standard |
+| **GO Morris consommé** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE` |
+| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **CKC** | `pilots/02-conception-fonctionnelle.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
+| **Document d’arbitrage hérité** | `12-v3-cycle-recommendation-cadrage.md` (**lecture seule** — non modifié) |
+| **Architecture catalogue** | `14` — décisions D-V3.1-CAT **adoptées** · CKC obligatoire intégré · runtime **non** implémenté |
+| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
+| **Commit / push / PR projet** | **non** |
+| **Code / tests / Figma** | **non modifiés** |
+
+## B. Décisions d’entrée (D-V3)
+
+| ID | Décision | Conséquence exacte sur V3.1 |
+|----|----------|------------------------------|
+| D-V3-01 = 1 | Type sélectionné · profil T-A2 | L’UI exige une sélection de type ; QualifyCycle produit uniquement le profil |
+| D-V3-02 = 1 | Catalogue contrôlé | Aucun moteur de recommandation du type ; pas de saisie libre |
+| D-V3-03 = 2 | CTA create (cible globale) | **Hors V3.1** : aucun CreateCycle, aucun CTA create actif |
+| D-V3-04 = 1 | Pas de lien LPS actif | Aucun `linkAsActiveCycle` |
+| D-V3-05 = 1 | Reco non persistée | Aucun EpistemicItem Recommendation |
+| D-V3-06 | Critical fail-closed | Résultat Critical informatif ; pas d’activation / ack / gate |
+| D-V3-07 = 1 + réserve | Contrat Git temporaire | Aucune frame Figma baseline ; réévaluation avant UI substantielle |
+| D-V3-08 = 1 | Slicing progressif | V3.1 = read-only · V3.2 = create explicite |
+
+**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · runtime catalogue / resolver **pending** (contrat + arbitrage résolus — voir `14`).
+
+## C. Objectif fonctionnel et valeur
+
+### Problème
+
+Après Create Project et Project Workspace, l’opérateur local doit préparer un cycle en comprenant **quel profil de contrôle** T-A2 recommande, sans confondre cela avec une décision Morris ni avec la création d’un CycleInstance.
+
+### Valeur
+
+- Rendre **observable** la qualification de profil à partir de réponses explicites.
+- Afficher une **justification compréhensible** et des **réserves honnêtes**.
+- Préparer V3.2 (create) sans anticiper la mutation.
+
+### Résultat observable
+
+Une surface où l’utilisateur sélectionne un type, répond aux six signaux, lance la qualification, et lit un profil Light / Standard / Critical avec explications — **sans** création, lien LPS, ni persistance épistémique.
+
+### Ce que V3.1 ne fait pas
+
+CreateCycle · linkAsActiveCycle · EpistemicItem · décision Morris · recommandation auto du type · requestedProfile · agent/LLM · IAM · Figma write · delivery.
+
+## D. Usager, rôle et autorité
+
+| Élément | Position |
+|---------|----------|
+| Usager | Morris local — opérateur du démonstrateur Studio |
+| Rôle | Lecture contexte projet + qualification read-only |
+| IAM | **aucune** |
+| Autorité Critical réelle | **absente** |
+| Stakeholder inventé | **interdit** |
+
+## E. Glossaire fonctionnel
+
+| Terme | Définition V3.1 |
+|-------|-----------------|
+| Projet | Agrégat Project process-local créé en V2 |
+| LPS | Living Project State — contexte read-only ; non muté |
+| Type de cycle | Entrée catalogue contrôlée (identité stable + label) |
+| cycleTypeId | Identifiant technique de l’entrée catalogue |
+| Signal | Réponse Oui/Non explicite mappée vers T-A2 |
+| Profil recommandé | Light \| Standard \| Critical — sortie QualifyCycle |
+| Rationale | Code interne T-A2 — **non affiché brut** ; mappé en texte utilisateur |
+| Recommandation | Sortie QualifyCycle · `isMorrisDecision=false` |
+| Décision Morris | Acte humain (V4) — hors V3.1 |
+| CycleInstance | Entité créée par CreateCycle — **absente** de V3.1 |
+
+## F. Périmètre fonctionnel
+
+### Inclus
+
+- Entrée depuis Project Workspace.
+- Sélection type (catalogue contrôlé).
+- Six signaux explicites.
+- Appel fonctionnel à QualifyCycle (contrat T-A2).
+- Affichage profil + justification + disclosures.
+- États, erreurs read-only, critères d’acceptation, a11y, plan de preuves.
+
+### Hors périmètre
+
+CreateCycle · CTA create · LPS link · EpistemicItem · UpdateEpistemicState · V4 · V3.2 · moteur type · scoring · LLM · Figma · architecture technique · code.
+
+### Préconditions
+
+- Un Project process-local accessible via `projectId`.
+- Runtime capable de lire le projet (existant V2).
+- Catalogue contrôlé **résolu** pour delivery (voir réserve).
+- Contrat T-A2 QualifyCycle inchangé.
+
+### Résultat de sortie
+
+Projection volatile de recommandation de profil + contexte sélectionné — **non persistée**.
+
+## G. Position dans le parcours
+
+**Départ :** `/studio/projects/[id]` (Project Workspace V2-A3).
+
+**Entrée recommandée (fonctionnelle, non décision d’architecture) :**
+
+- CTA / lien sémantique **« Préparer un cycle »** depuis la zone d’actions du workspace (aujourd’hui : lien « Créer un autre projet » uniquement).
+- Placement candidat le plus simple : **même namespace** `/studio/projects/[id]/…` (section ou sous-route) — *recommandation de placement*, pas choix technique figé.
+
+**Retour :** lien « Retour à l’espace projet » vers `/studio/projects/[id]`.
+
+**Interdit :** CTA CreateCycle, activation, décision Morris, redirection auto V4.
+
+## H. Parcours nominal
+
+1. Consulter le Project Workspace (projet + LPS + disclosures runtime).
+2. Ouvrir « Préparer un cycle ».
+3. Voir le contexte projet (objectif, résumé) en **lecture seule**, avec mention qu’il **n’influence pas** l’algorithme de qualification actuel.
+4. Sélectionner un type de cycle dans le catalogue (obligatoire, non libre).
+5. Répondre **explicitement** Oui ou Non aux **six** signaux (aucun précoché).
+6. Activer « Qualifier le profil » (désactivé ou refusé si incomplet).
+7. Obtenir le profil recommandé + explication + signaux contributeurs + disclosures.
+8. Modifier les réponses et re-qualifier si besoin.
+9. Revenir au workspace.
+10. **Aucun** CycleInstance créé · **aucune** mutation LPS · **aucune** persistance épistémique.
+
+## I. Contrat du catalogue des types de cycle
+
+### Exigences fonctionnelles
+
+| Règle | Position |
+|-------|----------|
+| Sélection | **Obligatoire** avant qualification |
+| Saisie libre | **Interdite** |
+| Champs par entrée | `cycleTypeId` stable · label · description courte |
+| Recommandation du type | **Interdite** |
+| Influence sur le profil | **Aucune** (le type ne détermine pas Light/Standard/Critical) |
+| Capitalization | Si `cycleTypeId = cyc:capitalization`, l’indicateur `capitalizationViaCycleTypeId` peut être vrai — **ce n’est pas un profil** |
+
+### Comportements
+
+| Situation | Comportement |
+|-----------|--------------|
+| Catalogue en chargement | État dédié · pas de qualification |
+| Catalogue indisponible / vide | État bloquant · message clair · pas de fallback inventé |
+| ID inconnu / invalide | Refus · message · pas de QualifyCycle |
+| Refresh | Resélection requise si état volatile perdu |
+
+### Investigation repo (constat)
+
+| Source | Contenu | Statut pour V3.1 runtime |
+|--------|---------|--------------------------|
+| `CAPITALIZATION_CYCLE_TYPE_ID = cyc:capitalization` | Un seul ID OA runtime explicite | Partiel |
+| `SFIA_CYCLE_LABELS` (harness Increment C) | 15 labels slugs (`cadrage`, …) **sans** préfixe `cyc:` | Labels UI hors contrat OA — **non catalogue runtime** |
+| Méthode — 15 cycles (`02-fifteen-cycles-synthetic-map.md`) | Noms canoniques 1…15 | Documentaire méthode — **non IDs runtime** |
+| Schema CycleType modélisé | Entité citée ; **pas** de registry runtime des 15 | Absent |
+| D1 intake `proposedCycleType` | Valeurs ad hoc (ex. `FRAMING`) | Stack legacy — **hors** vertical-slice |
+
+### Réserve catalogue (requalifiée)
+
+**R-V3.1-CATALOG-01**
+
+| Aspect | État |
+|--------|------|
+| Constat runtime | Registry des 15 **toujours absente** (non implémentée) |
+| Contrat + arbitrage | **RESOLVED** — D-V3.1-CAT-01…08 adoptées (`14`) |
+| IDs | Quinze CAT-I1 **adoptés contractuellement** · non implémentés |
+| CKC | **Obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` |
+| Delivery D1 | **Non autorisé** — GO distinct requis |
+
+- L’UI ne hardcode pas de liste d’autorité.
+- Le résultat de QualifyCycle n’est **contractuellement exploitable** dans le parcours produit qu’avec une résolution CKC **valide** (detailed ou synthetic fallback).
+- Les règles de qualification, CA et scénarios ci-dessous restent inchangés.
+
+## J. Contrat des signaux
+
+Tous les signaux : réponse **Oui / Non obligatoire** · **aucune** valeur précochée · absence ≠ `false`.
+
+| Signal T-A2 | Libellé utilisateur | Aide contextuelle | Mapping |
+|-------------|---------------------|-------------------|---------|
+| `structuralChange` | Changement structurel | Ce travail modifie-t-il durablement la structure du produit, de la méthode ou du dépôt ? | `true`/`false` explicite |
+| `securityImpact` | Impact sécurité | Ce travail touche-t-il à la sécurité, aux secrets, aux contrôles d’accès ou à une surface d’attaque ? | idem |
+| `architectureImpact` | Impact architecture | Ce travail engage-t-il un choix ou une modification d’architecture significative ? | idem |
+| `dataImpact` | Impact données | Ce travail affecte-t-il des données sensibles, des migrations ou des pertes potentielles ? | idem |
+| `irreversible` | Caractère difficilement réversible | Une erreur serait-elle difficile ou coûteuse à annuler ? | idem |
+| `lowRiskBounded` | Risque faible et borné | Le périmètre est-il clairement limité et le risque faible **en l’absence** de signaux critiques ? | idem |
+
+### Règles UI
+
+1. Les six réponses doivent être présentes avant QualifyCycle.
+2. Une réponse absente **bloque** la qualification (pas d’envoi de `undefined` assimilé à false).
+3. Les contradictions restent visibles (ex. Critical + lowRiskBounded) ; le moteur applique la priorité Critical.
+4. Aucun score implicite depuis objectif / scope / contexte.
+
+## K. Données de contexte
+
+| Donnée | Usage V3.1 |
+|--------|------------|
+| `projectId` | Précondition · navigation |
+| Objectif projet | Affichage read-only · **n’influence pas** QualifyCycle actuel |
+| Scope / contexte résumé | Affichage read-only · idem |
+| LPS (id, version) | Affichage contextuel · **non muté** |
+| `requestedProfile` | **Non exposé** |
+| Justification Critical | **Non collectée / non persistée** ; info future V3.2 uniquement |
+| `cycleTypeId` | Sélection catalogue · passé à QualifyCycle (hint capitalization) |
+
+## L. Règles de qualification (contrat T-A2 exact)
+
+Source : `recommendProfile` / `hasCriticalSignals` (`lib/oa/cycle/domain/invariants.ts`).
+
+1. Si **un** parmi `structuralChange`, `securityImpact`, `architectureImpact`, `dataImpact`, `irreversible` vaut `true` → profil **Critical** · rationale `critical_signal_present`.
+2. Sinon, si `lowRiskBounded === true` → profil **Light** · rationale `low_risk_bounded_no_critical_signals`.
+3. Sinon → profil **Standard** · rationale `default_standard` (parcours V3.1 sans `requestedProfile`).
+4. **Critical gagne toujours** sur `lowRiskBounded` (règle 1 avant règle 2).
+5. `cycleTypeId` **ne détermine pas** le profil.
+6. `capitalizationViaCycleTypeId` = true seulement si `cycleTypeId === cyc:capitalization` — indicateur, **pas** un profil Capitalization.
+7. `isMorrisDecision` est **toujours** `false`.
+8. Aucun gate Morris consommé.
+9. Rationales hors parcours V3.1 (car `requestedProfile` non exposé) : `default_standard_light_requires_low_risk_bounded`, `requested_critical_without_signals`.
+
+## M. Sortie fonctionnelle
+
+### Afficher
+
+- Type sélectionné (label + id).
+- Profil recommandé (texte : Light / Standard / Critical — compréhensible **sans** couleur).
+- Explication utilisateur (mapping N).
+- Liste des signaux Oui ayant conduit au résultat (et mention des Non si utile à la compréhension).
+- Disclosure : **« Ceci est une recommandation, pas une décision Morris. »**
+- Disclosure : résultat **process-local / non persisté** · un refresh peut le perdre.
+- Si Critical : indication fail-closed + « une justification sera requise lors d’une future création (V3.2) » — **sans** formulaire de justification.
+- Prochaine étape **informative** uniquement (ex. « La création explicite du cycle relèvera d’un prochain incrément »).
+
+### Ne pas afficher
+
+- Codes rationale bruts.
+- Statut `acknowledged` / `proposed` de CycleInstance (aucune instance).
+- Faux score / pourcentage de confiance.
+- CTA CreateCycle / activation / décision.
+- Claim d’autorité humaine ou IAM.
+
+## N. Mapping des rationales → contenus utilisateurs
+
+| Code T-A2 | Texte utilisateur (V3.1) |
+|-----------|-------------------------|
+| `critical_signal_present` | « Au moins un signal de criticité est positif. Le profil recommandé est Critical. Aucune activation n’est effectuée. » |
+| `low_risk_bounded_no_critical_signals` | « Aucun signal de criticité n’est positif et le risque est déclaré faible et borné. Le profil recommandé est Light. » |
+| `default_standard` | « Aucun signal de criticité n’est positif et le risque n’est pas déclaré faible et borné. Le profil recommandé est Standard. » |
+| `default_standard_light_requires_low_risk_bounded` | Hors parcours V3.1 (`requestedProfile` non exposé). |
+| `requested_critical_without_signals` | Hors parcours V3.1. |
+
+## O. États fonctionnels
+
+| État | Description |
+|------|-------------|
+| initial | Surface ouverte · pas encore de saisie |
+| contexte projet chargé | Project/LPS affichés |
+| catalogue en chargement | Attente catalogue |
+| catalogue indisponible | Bloqué · pas de qualify |
+| formulaire incomplet | Type et/ou signaux manquants · action refuse |
+| prêt à qualifier | Type + 6 réponses · CTA actif |
+| qualification en cours | Attente résultat |
+| résultat Light | Affichage Light + disclosures |
+| résultat Standard | Affichage Standard + disclosures |
+| résultat Critical | Affichage Critical fail-closed + info V3.2 |
+| erreur technique | Bridge/runtime/qualification inattendue |
+| projet introuvable | Contexte perdu · recovery vers création |
+| état local perdu après refresh | Message volatilité · reprise |
+| retour / nouvelle qualification | Re-saisie ou modification puis re-qualify |
+
+## P. Critical
+
+- Résultat Critical **clairement identifiable** (texte + structure, pas seulement couleur).
+- QualifyCycle **non bloqué** par Critical.
+- Aucune création · aucune activation · aucun acknowledgement · aucun gate.
+- Information : justification **requise à la création future** (V3.2).
+- Aucune autorité simulée · aucune redirection automatique V4.
+- Fail-closed respecté.
+
+## Q. Exceptions et recovery V3.1
+
+### Pertinentes (read-only)
+
+| Situation | Comportement |
+|-----------|--------------|
+| Projet introuvable / contexte perdu | Message + CTA retour création projet |
+| Catalogue indisponible | Bloquer qualify · message · pas d’IDs inventés |
+| cycleTypeId invalide / inconnu | Refus · corriger la sélection |
+| Formulaire incomplet | CTA désactivé ou refus explicite + résumé d’erreurs |
+| Runtime / bridge QualifyCycle indisponible | Erreur technique · retry · disclosure process-local |
+| Qualification inattendue | Message borné · pas de mutation |
+| Refresh / hot reload | Perte possible du résultat · reprendre |
+
+### Explicitement **non applicables** en V3.1
+
+- `CYCLE_ALREADY_EXISTS`
+- `LPS_VERSION_CONFLICT`
+- `PERSISTENCE_FAILURE` liée à CreateCycle
+- Erreurs d’activation / lien LPS
+- Erreurs épistémiques de persistance (`EPISTEMIC_*`)
+- `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED` (création uniquement)
+
+## R. Permissions et visibilité
+
+Opérateur local unique · aucune gestion de rôles · aucune authentification · aucune autorisation Critical · aucun masquage présenté comme sécurité.
+
+## S. Intégrations fonctionnelles (quoi, pas comment)
+
+| Intégration | Rôle |
+|-------------|------|
+| Project Workspace | Contexte projet / LPS read-only |
+| Catalogue contrôlé (contrat `14`) | Type id/label/description + métadonnées CKC |
+| CKC Resolver | Résolution obligatoire · consommation orchestration · `executionAuthority=false` |
+| T-A2 QualifyCycle | Recommandation de profil (domaine) |
+| UI | Projection volatile · état CKC sans contrat brut |
+
+**Aucune** mutation projet, cycle, trajectoire, LPS ou épistémique.
+
+Le parcours produit ne présente pas le résultat de qualification comme contractuellement exploitable sans CKC valide.
+
+**Non défini ici :** Server Action · classes · fichiers · protocole · stockage.
+
+## T. Accessibilité
+
+1. Navigation clavier complète de tous les contrôles.
+2. Ordre de focus cohérent : contexte → type → signaux → CTA → résultat.
+3. Groupe de questions signaux correctement labellisé (`fieldset` / équivalent sémantique).
+4. Chaque Oui / Non accessible **sans dépendre de la couleur** (texte visible).
+5. Erreurs associées aux champs concernés.
+6. Résumé d’erreur annoncé (région appropriée).
+7. Changement de résultat annoncé via région live appropriée.
+8. Titres hiérarchisés (h1/h2/h3 cohérents avec StudioShell).
+9. Texte du profil compréhensible sans badge coloré.
+10. État Critical compréhensible sans couleur.
+11. CTA « Qualifier le profil » — libellé explicite.
+12. Aucun verdict de conformité a11y sans tests futurs.
+
+## U. Critères d’acceptation (observables)
+
+| ID | Critère |
+|----|---------|
+| CA-01 | Depuis un projet existant, l’opérateur ouvre la surface de qualification. |
+| CA-02 | La sélection d’un type de cycle est obligatoire ; aucune saisie libre. |
+| CA-03 | Les six signaux exigent chacun une réponse Oui/Non explicite. |
+| CA-04 | Si type ou signal manquant, l’action de qualification est désactivée ou refusée avec message. |
+| CA-05 | `structuralChange=Oui` (seuls les autres Non) → profil Critical. |
+| CA-06 | `securityImpact=Oui` → Critical. |
+| CA-07 | `architectureImpact=Oui` → Critical. |
+| CA-08 | `dataImpact=Oui` → Critical. |
+| CA-09 | `irreversible=Oui` → Critical. |
+| CA-10 | Tous Critical Non + `lowRiskBounded=Oui` → Light. |
+| CA-11 | Tous Non (y compris lowRiskBounded) → Standard. |
+| CA-12 | Au moins un Critical Oui + `lowRiskBounded=Oui` → Critical (Critical gagne). |
+| CA-13 | Le type sélectionné (label) est visible dans le résultat. |
+| CA-14 | Profil + justification utilisateur visibles. |
+| CA-15 | Aucun code rationale brut visible. |
+| CA-16 | Disclosure « recommandation ≠ décision Morris » visible. |
+| CA-17 | Aucune création de CycleInstance observable. |
+| CA-18 | Aucune persistance EpistemicItem Recommendation observable. |
+| CA-19 | Aucun lien LPS / `linkAsActiveCycle` observable. |
+| CA-20 | Aucun contrôle `requestedProfile` exposé. |
+| CA-21 | Après refresh, le résultat peut être perdu ; message/état cohérent. |
+| CA-22 | Catalogue indisponible : qualification impossible + message clair. |
+| CA-23 | Parcours clavier complet sans piège au clavier. |
+
+## V. Scénarios fonctionnels
+
+| ID | Scénario | Attendu |
+|----|----------|---------|
+| S-01 | Nominal Light | lowRiskBounded Oui · 5 Critical Non → Light |
+| S-02 | Nominal Standard | 6 Non → Standard |
+| S-03 | Critical structural | structuralChange Oui → Critical |
+| S-04 | Critical security | securityImpact Oui → Critical |
+| S-05 | Critical architecture | architectureImpact Oui → Critical |
+| S-06 | Critical data | dataImpact Oui → Critical |
+| S-07 | Critical irreversible | irreversible Oui → Critical |
+| S-08 | Contradiction Critical + lowRiskBounded | Critical |
+| S-09 | Formulaire incomplet | Refus · pas d’appel qualify |
+| S-10 | Catalogue absent | État bloquant |
+| S-11 | Project missing | Recovery création |
+| S-12 | Retry après erreur technique | Reprise sans mutation |
+| S-13 | Nouvelle qualification après modification | Nouveau résultat cohérent |
+
+## W. Plan de preuves futur
+
+- Tests unitaires des règles (déjà T-A2) + mapping UI textes.
+- Tests composant états / formulaire / a11y.
+- Tests boundary : **aucun** CreateCycle · **aucune** mutation LPS/épistémique.
+- Captures desktop + responsive.
+- **Aucune preuve exécutée dans ce cycle documentaire.**
+
+## X. Contrat UX temporaire et réserve Figma
+
+### Hiérarchie fonctionnelle des zones
+
+1. Bandeau disclosures runtime (réutiliser le langage V2).
+2. Titre « Préparer un cycle » + rappel read-only.
+3. Contexte projet (compact).
+4. Sélection type.
+5. Signaux (groupe unique).
+6. CTA qualification.
+7. Zone résultat + réserves.
+8. Navigation retour.
+
+### Priorités de contenu
+
+Profil + type + justification + disclosure décision > détails techniques.
+
+### Figma
+
+- Source design : **contrat Git temporaire**.
+- Aucune frame V3 baseline.
+- D-VS-05 **NOT CONSUMED**.
+- Réévaluer un cycle UX/UI + Figma **avant** delivery si la surface est jugée substantielle ou si une fidélité visuelle est revendiquée.
+- Recommandation non décisionnelle : un cycle UX/UI dédié est **probable** avant un delivery UI dense ; **Morris décide**.
+
+## Y. Risques et réserves
+
+| ID | Risque / réserve | Sévérité |
+|----|------------------|----------|
+| R-V3.1-CATALOG-01 | Contrat+arbitrage résolus · runtime pending | Delivery D1 bloqué jusqu’à GO |
+| R-V3.1-02 | Duplication méthode / scoring dans React | Haute — interdite |
+| R-V3.1-03 | Exposition codes rationale bruts | Moyenne |
+| R-V3.1-04 | Fausse influence objectif/scope | Haute |
+| R-V3.1-05 | `undefined` assimilé à false | Haute — UI doit bloquer |
+| R-V3.1-06 | Critical overclaim / autorité simulée | Haute |
+| R-V3.1-07 | `requestedProfile` prématuré | Moyenne |
+| R-V3.1-08 | Confusion recommandation / décision | Haute |
+| R-V3.1-09 | Volatilité process-local | Acceptée · disclosure |
+| R-V3.1-10 | D-VS-05 / Figma | Maintenue |
+| R-V3.1-11 | B5 / R1 | Hors périmètre |
+| R-V3.1-12 | Absence de preuve visuelle ce cycle | Acceptée |
+
+## Z. Slicing et transition
+
+| Étape | Statut |
+|-------|--------|
+| V3 cadrage + arbitrage | Terminé (`12`) |
+| V3.1 conception fonctionnelle | Terminée (`13`) |
+| V3.1 architecture + adoption catalogue | Terminée (`14`) · D-V3.1-CAT adoptées · CKC obligatoire |
+| V3.1-D1 catalogue runtime + CKC mapping | **Candidat** · non ouvert |
+| V3.1-D2 projection + resolver + QualifyCycle bridge | Après D1 |
+| V3.1-D3 UI | Après D2 · réserve Figma |
+| V3.2 CreateCycle | Non ouvert |
+| V4 décision Morris | Non ouvert |
+
+Aucun cycle suivant ouvert automatiquement.
+
+## AA. Anti-claims
+
+- Conception fonctionnelle ≠ implémentation.
+- IDs adoptés ≠ registry runtime.
+- CKC obligatoire ≠ baseline méthode globale ≠ autorité d’exécution.
+- Candidate ≠ optionnel (produit candidate).
+- Profil recommandé ≠ type recommandé automatiquement.
+- Recommandation ≠ décision Morris.
+- Read-only ≠ CycleInstance créé.
+- Résultat Critical ≠ autorisation.
+- Contrat Git ≠ Figma validé.
+- Tests planifiés ≠ tests exécutés.
+- Aucun PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.
+
+## AB. Verdict
+
+**V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**
+
+Prochain gate candidat (non ouvert) :
+
+`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`
+
+**Précondition D1 :** GO delivery distinct · respect contrat `14` · pas d’élargissement D2/D3/V3.2.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md
new file mode 100644
index 00000000..24c9583e
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md
@@ -0,0 +1,403 @@
+# 14 — V3.1 Cycle Type Catalog — Architecture fonctionnelle
+
+## A. Meta et cycle record
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 20:29:00 CEST (+0200) |
+| **Cycle** | 3 — Architecture fonctionnelle (phase arbitrage / adoption / correction) |
+| **Profil** | **Critical** |
+| **Typologie** | DOC |
+| **GO architecture (historique)** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG — RESOLVE R-V3.1-CATALOG-01 — CONTRACT ONLY — NO IMPLEMENTATION` (consommé) |
+| **GO adoption (consommé)** | voir Decision record Morris |
+| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **CKC (ce cycle)** | Pilote détaillé **absent** · fallback carte synthétique + méthode §4.3 · `method-candidate` · **consommation obligatoire** · **executionAuthority=false** |
+| **Entrées héritées** | `12` (lecture seule) · `13` (conception V3.1) |
+| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME VALIDATED — QA-G3 PASS — PR READINESS READY FOR PR — D2/D3 NOT AUTHORIZED` |
+| **Commit / push / PR projet** | **non** |
+| **Code / registry / resolver / Figma** | **non** |
+
+## Decision record Morris
+
+| Champ | Valeur |
+|-------|--------|
+| **Clarification Morris** | « par contre le CKC doit faire partie intégrante du mécanisme, c'est candidate parce que le projet lui meme est candidate mais c'est la base de la doctrine de ce produit, donc toute la doctrine meme si elle est candidate doit faire partie intégrante de la solution, de sa conception a sa réalisation, jusqu'a que la solution soit en production » |
+| **Confirmation Morris** | « pour le reste des décisions c'est ok » |
+| **GO formel** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG — D-V3.1-CAT-01=CAT-S1 — D-V3.1-CAT-02=CAT-I1 — D-V3.1-CAT-03=MINIMAL_WITH_MANDATORY_CKC_CORE — D-V3.1-CAT-04=CONTROLLED_ALIASES — D-V3.1-CAT-05=MORRIS_FOR_STRUCTURAL_CHANGES — D-V3.1-CAT-06=NEUTRAL_ID_LOCALIZED_LABELS — D-V3.1-CAT-07=INTEGRATED_MANDATORY_CKC_MECHANISM — D-V3.1-CAT-08=D1_THEN_D2_THEN_D3` |
+| **Date/heure/fuseau GO** | 2026-07-30 20:23 CEST (+0200) |
+
+| ID | Décision adoptée | Conséquence | Réserve | Statut |
+|----|------------------|-------------|---------|--------|
+| D-V3.1-CAT-01 | **CAT-S1** | Contrat Git catalogue = projection opérationnelle des 15 cycles méthode | Runtime non implémenté | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-02 | **CAT-I1** | Quinze IDs `cyc:<english-slug>` adoptés · `cyc:capitalization` inchangé | Runtime pending | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-03 | **MINIMAL_WITH_MANDATORY_CKC_CORE** | Noyau minimal **+** socle CKC obligatoire | Pas de sur-modélisation TS | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-04 | **CONTROLLED_ALIASES** | Alias 1→1 gouvernés · pas de recyclage | Alias initiaux absents OK | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-05 | **MORRIS_FOR_STRUCTURAL_CHANGES** | Gate Morris sur changements structurants | Labels non structurants : revue proportionnée | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-06 | **NEUTRAL_ID_LOCALIZED_LABELS** | ID neutre · labels FR · futur multi | Fallback label explicite | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-07 | **INTEGRATED_MANDATORY_CKC_MECHANISM** | CKC obligatoire dans le mécanisme produit · candidate ≠ optionnel | Candidate ≠ baseline méthode globale · `executionAuthority=false` | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-08 | **D1_THEN_D2_THEN_D3** | Trois incréments séparés adoptés | Delivery non ouvert | `DECIDED — ADOPTED BY MORRIS` |
+
+**Décision produit SFIA Studio :** le CKC est obligatoire de la conception à la production dans le produit candidate. Cela **ne** promeut **pas** les documents CKC en baseline officielle de la méthode SFIA globale.
+
+## B. Problème et objectif
+
+### R-V3.1-CATALOG-01 (historique → requalifiée)
+
+Historique : aucune source runtime canonique des quinze types.
+
+**État actuel :** résolue au **niveau contrat fonctionnel et arbitrage Morris**. Runtime / delivery D1 **pending** (GO distinct).
+
+### Contrat ≠ implémentation
+
+Ce document enregistre l’adoption. Il ne crée aucun registre, constante, enum, resolver, bridge ni UI.
+
+## C. Décisions d’entrée (D-V3 — inchangées)
+
+D-V3-01…08 restent adoptées (`12`). `cyc:capitalization` immuable. Type sélectionné · profil T-A2 · V3.1 read-only · pas CreateCycle / LPS / epistemic.
+
+## D. Inventaire repo-informed
+
+*(inchangé dans le constat)* — registry runtime 15 **toujours absente** · harness non autorité · méthode = autorité conceptuelle · `cyc:capitalization` seul ID OA domaine explicite préexistant · fixtures test ≠ catalogue.
+
+**Post-adoption :** les quinze IDs CAT-I1 sont **contractuels** (adoptés) mais **pas encore implémentés**.
+
+## E. Principes d’architecture fonctionnelle
+
+1. Méthode = autorité conceptuelle des 15 cycles.
+2. Contrat catalogue = projection opérationnelle traçable (**CAT-S1**).
+3. Projection runtime = consommation du contrat.
+4. UI = sélection contrôlée · aucune liste d’autorité hardcodée.
+5. T-A2 = reçoit un `cycleTypeId` validé · ne recommande pas le type.
+6. Identité ≠ label.
+7. Type ≠ profil.
+8. Catalogue ≠ moteur de recommandation.
+9. Recommandation ≠ décision Morris.
+10. Git = source de vérité contractuelle.
+11. Fail-closed unknown / unavailable / CKC invalid sans fallback.
+12. Pas de parsing runtime Markdown méthode.
+13. **CKC obligatoire** dans l’orchestration produit (candidate ≠ optionnel).
+14. **CKC `executionAuthority=false`** · ne décide pas · ne consomme pas de gate.
+15. Candidate doctrine ≠ baseline méthode globale.
+
+## F. Vue fonctionnelle des composants
+
+| Composant | Responsabilité |
+|-----------|----------------|
+| **SFIA Method Cycle Reference** | 15 cycles conceptuels (méthode Git) |
+| **Cycle Type Catalog Contract** | IDs adoptés · labels · lifecycle · **métadonnées CKC obligatoires** |
+| **Cycle Type Catalog Projection** | Exposition read-only post-D1 |
+| **CKC Resolver** | Résout doctrine (detailed → synthetic → fail-closed) · `executionAuthority=false` · **consommation obligatoire** dans l’orchestration |
+| **Orchestration produit** | Exige résolution CKC valide avant résultat contractuellement exploitable / executable / ready |
+| **Profile Qualification UI** | Sélection type · signaux · profil · disclosures · **état CKC** (sans contrat brut) |
+| **T-A2 QualifyCycle** | Profil depuis signaux · indépendant du type · domaine |
+| **Futur CreateCycle** | Hors V3.1 · ID catalogue validé |
+| **Gouvernance Morris** | Changements structurants |
+
+## G. Flux fonctionnel (corrigé)
+
+```text
+Méthode (15 cycles)
+  → Cycle Type Catalog Contract (CAT-S1)
+    → Cycle Type Catalog Projection
+      → sélection cycleTypeId (validé)
+        → résolution CKC obligatoire (detailed → synthetic fallback → fail-closed)
+          → validation résolution CKC
+            → signaux explicites
+              → QualifyCycle (domaine)
+                → résultat read-only (exploitable seulement si CKC valide)
+                  → futurs delivery / QA / readiness avec preuve CKC tracée
+```
+
+Aucun flux inverse ne crée une décision Morris, un gate, ni un CycleInstance en V3.1.
+
+## H. Contrat conceptuel CycleTypeDefinition
+
+### H.1 Noyau minimal **avec socle CKC obligatoire** (CAT-03 adopté)
+
+| Champ | Rôle | Obl. | Mutable | Consommateur |
+|-------|------|------|---------|--------------|
+| `cycleTypeId` | Identité stable | oui | **non** | UI · T-A2 · CKC · instances |
+| `canonicalKey` | Clé stable non localisée (traçabilité harness/méthode) | oui | non* | Sync · gouvernance |
+| `label` | Libellé FR initial | oui | oui | UI |
+| `shortDescription` | Aide courte | oui | oui | UI |
+| `displayOrder` | Ordre affichage | oui | oui | UI |
+| `lifecycleStatus` | active \| deprecated \| unavailable | oui | gouverné | UI · validate |
+| `methodCycleNumber` | 1…15 | oui | non* | Traçabilité |
+| `methodReference` / provenance | Pointeur doctrinal | oui | oui | Audit |
+| `ckcLevel` | detailed \| synthetic \| … | oui | gouverné | Resolver · orchestration |
+| `ckcReference` / clé résolution | Cible pilote ou clé stable | oui | gouverné | Resolver |
+| `ckcFallbackPolicy` | Politique fallback (ex. synthetic map) | oui | gouverné | Resolver |
+| Exigences statut résolution | Règles valid / invalid / unavailable | oui | gouverné | Orchestration |
+
+\* = gate Morris + migration.
+
+**Historique :** la recommandation initiale « CKC en extension » est **corrigée** par Morris → CKC dans le noyau obligatoire.
+
+### H.2 Extension optionnelle (hors noyau)
+
+`category` · `aliases` · `deprecatedAt` / `replacedBy` · `availability` — selon CAT-04/lifecycle. Pas de profil/gate/décision/autorité.
+
+**Contrat fonctionnel ≠ structure TypeScript** : choix de fichiers/classes/stockage = delivery futur.
+
+## I. Contrat conceptuel CycleTypeCatalog
+
+Opérations inchangées conceptuellement + exigences :
+
+- `validateCycleTypeId` fail-closed unknown/deprecated.
+- Métadonnées CKC présentes pour chaque entrée active.
+- Fingerprint / version catalogue.
+- Unavailable → bloque sélection · pas de texte libre.
+
+## J. Invariants
+
+1–16 (précédents) conservés, **plus** :
+
+17. Métadonnées CKC **obligatoires** par type actif.
+18. Pilote détaillé **prioritaire** s’il existe.
+19. Fallback synthétique **obligatoire** sinon.
+20. Invalid/unavailable **sans** fallback valide → **stop** fail-closed.
+21. Aucun cycle déclaré executable / ready for delivery / QA / production **sans** CKC résolu et consommé.
+22. `executionAuthority=false` toujours.
+23. Identité du type **indépendante** du statut CKC (l’identité reste ; l’exploitabilité produit est bloquée).
+24. Quinze `cycleTypeId` CAT-I1 **adoptés contractuellement**.
+
+## K. Options de source de vérité
+
+Options historiques CAT-S1…S4 conservées.
+
+Recommandation historique : CAT-S1.
+
+**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.** (aligne la recommandation)
+
+## L. Options de stratégie d’identifiants
+
+Options historiques CAT-I1…I4 conservées.
+
+Recommandation historique : CAT-I1.
+
+**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.**
+
+## M. Mapping des quinze IDs — **ADOPTÉ**
+
+**Stratégie :** CAT-I1. Exactement quinze entrées.
+Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1`**.
+`cyc:capitalization` : valeur et sens **inchangés**.
+
+| # | Nom canonique | cycleTypeId | Label FR | Description courte | Ordre | CKC path | Source |
+|---|---------------|-------------|---------|--------------------|-------|----------|--------|
+| 1 | Cadrage | `cyc:framing` | Cadrage | Clarifier intention, périmètre, contraintes | 1 | pilot detailed | §4.1 |
+| 2 | Conception fonctionnelle | `cyc:functional-design` | Conception fonctionnelle | Usages, règles, objets métier | 2 | pilot detailed | §4.2 |
+| 3 | Architecture fonctionnelle | `cyc:functional-architecture` | Architecture fonctionnelle | Structure, flux, découpage | 3 | synthetic fallback | §4.3 |
+| 4 | UX/UI | `cyc:ux-ui` | UX/UI | Expérience et interface | 4 | synthetic | §4.4 |
+| 5 | Backlog / user stories | `cyc:backlog` | Backlog / user stories | Stories testables | 5 | synthetic | §4.5 |
+| 6 | Architecture technique | `cyc:technical-architecture` | Architecture technique | Stack, patterns, ADR | 6 | pilot detailed | §4.6 |
+| 7 | Intégration / DevOps | `cyc:integration-devops` | Intégration / DevOps | CI/CD, environnements | 7 | synthetic | §4.7 |
+| 8 | Delivery / implémentation | `cyc:delivery` | Delivery / implémentation | Implémentation bornée | 8 | synthetic | §4.8 |
+| 9 | QA / validation | `cyc:qa-validation` | QA / validation | Preuves et réserves | 9 | pilot detailed | §4.9 |
+| 10 | Sécurité / RSSI | `cyc:security` | Sécurité / RSSI | Menaces et contrôles | 10 | synthetic | §4.10 |
+| 11 | Déploiement / release | `cyc:release` | Déploiement / release | Release contrôlée | 11 | synthetic | §4.11 |
+| 12 | Observabilité / RUN readiness | `cyc:observability` | Observabilité / RUN readiness | Exploitabilité mesurable | 12 | synthetic | §4.12 |
+| 13 | PR readiness | `cyc:pr-readiness` | PR readiness | Branche prête à PR | 13 | synthetic | §4.13 |
+| 14 | Post-merge | `cyc:post-merge` | Post-merge | Clôture après merge | 14 | synthetic | §4.14 |
+| 15 | Capitalisation / REX | `cyc:capitalization` | Capitalisation / REX | Apprentissage réutilisable | 15 | synthetic | §4.15 · **préexistant OA** |
+
+`canonicalKey` harness (`cadrage` … `capitalisation-rex`) = **traçabilité uniquement**, jamais `cycleTypeId`.
+
+## N. Gouvernance et cycle de vie (CAT-04 / CAT-05)
+
+| Événement | Règle |
+|-----------|-------|
+| Ajout type / ID / dépréciation / remplacement / alias structurant / mapping doctrinal / impact instances | **Gate Morris** |
+| Label / description non structurants | Revue documentaire proportionnée |
+| Alias | 1→1 · pas d’ambiguïté · pas de recyclage · `replacedBy` valide |
+| Alias initiaux | Absents OK tant qu’aucune migration |
+| Suppression | Interdite si référencé |
+| Rewrite silencieux instances | **Interdit** |
+
+## O. Localisation (CAT-06)
+
+ID neutre · labels FR · futur multi · jamais de traduction dans l’ID · fallback label explicite · changement de label sans changement d’identité.
+
+## P. Relation avec T-A2
+
+- QualifyCycle reste une fonction de domaine (profil depuis signaux).
+- Le **parcours produit** ne présente pas le résultat comme contractuellement exploitable / executable tant que la résolution CKC obligatoire n’est pas valide.
+- `capitalizationViaCycleTypeId` inchangé pour `cyc:capitalization`.
+- CreateCycle hors V3.1.
+- **Aucun changement code T-A2 dans ce cycle.**
+
+## Q. Relation avec CKC (CAT-07 corrigé)
+
+**Historique :** recommandation « résolution séparée / métadonnée informative » — **corrigée** par Morris.
+
+| Règle | Position |
+|-------|----------|
+| CKC dans le mécanisme produit | **Obligatoire** |
+| Candidate | Maturité projet/doctrine · **≠ optionnel** · **≠ baseline méthode globale** |
+| Chemin de résolution | Obligatoire pour tout type |
+| Priorité | Pilote détaillé si existant |
+| Fallback | Synthétique obligatoire sinon |
+| Fail-closed | Invalid/unavailable sans fallback valide |
+| Ready / executable / delivery / QA / production | Exige CKC résolu et consommé |
+| Traçabilité | Conception → prompt → delivery → QA → readiness → production |
+| `executionAuthority` | **false** |
+| Décision / gate Morris | **Non** |
+| Remplace routing/template/guardrails | **Non** |
+| Resolver | Responsabilité distincte possible · **consommation obligatoire** |
+| UI | État de résolution pertinent · **pas** questionnaire CKC brut |
+| Identité type | Indépendante du statut CKC |
+
+## R. Relation avec l’UI
+
+Liste contrôlée · pas de hardcode · labels du catalogue · états loading/unavailable/unknown · état CKC · pas de moteur de type · ID masquable.
+
+## S. Erreurs et recovery
+
+Ajouts CKC :
+
+| Situation | Comportement |
+|-----------|--------------|
+| CKC invalid / unavailable sans fallback | Stop fail-closed · pas d’exploitabilité produit |
+| Fallback synthétique manquant | Stop · corriger contrat catalogue |
+| CKC non consommé / non tracé | Cycle non ready |
+
+Autres erreurs catalogue (unavailable, unknown, duplicate, alias, drift, capitalization mismatch) inchangées · pas de fallback silencieux.
+
+## T. Compatibilité et migration
+
+Fenêtre pré-persistance · IDs adoptés contractuellement · runtime pending · alias/`replacedBy` post-persistance · fixtures ≠ catalogue.
+
+## U. Slicing delivery (CAT-08 adopté — non ouvert)
+
+| Lot | Contenu | Statut |
+|-----|---------|--------|
+| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC · validateur | **QA-G3 PASS** · **PR readiness READY** · Git pending Morris GO |
+| **V3.1-D2** | Projection · validate ID · résolution CKC obligatoire · QualifyCycle bridge read-only | Adopté · non commencé |
+| **V3.1-D3** | UI Profile Qualification · type/profil/justification/disclosures/état CKC | Adopté · non commencé · réserve Figma |
+
+Pas de CreateCycle en V3.1 · V3.2 = create explicite futur.
+Fusion D1/D2/D3 = nouvel arbitrage Morris.
+
+## V. Decision pack Morris — détail
+
+### D-V3.1-CAT-01 — Source de vérité
+
+Options : CAT-S1…S4. Recommandation historique : CAT-S1.
+**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.**
+
+### D-V3.1-CAT-02 — Identifiants
+
+Options : CAT-I1…I4. Recommandation historique : CAT-I1.
+**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.** Mapping §M adopté.
+
+### D-V3.1-CAT-03 — Noyau métadonnées
+
+Options historiques : minimal / étendu. Recommandation historique : minimal sans CKC obligatoire.
+**Décision : MINIMAL_WITH_MANDATORY_CKC_CORE — DECIDED — ADOPTED BY MORRIS.**
+**Enrichit** la recommandation initiale (CKC dans le noyau).
+
+### D-V3.1-CAT-04 — Alias
+
+Options : sans / contrôlés / migration forcée. Recommandation : contrôlés.
+**Décision : CONTROLLED_ALIASES — DECIDED — ADOPTED BY MORRIS.**
+
+### D-V3.1-CAT-05 — Gouvernance
+
+Recommandation : Morris structural.
+**Décision : MORRIS_FOR_STRUCTURAL_CHANGES — DECIDED — ADOPTED BY MORRIS.**
+
+### D-V3.1-CAT-06 — Localisation
+
+Recommandation : ID neutre + labels.
+**Décision : NEUTRAL_ID_LOCALIZED_LABELS — DECIDED — ADOPTED BY MORRIS.**
+
+### D-V3.1-CAT-07 — CKC
+
+Recommandation historique : résolution séparée / référence optionnelle.
+**Décision : INTEGRATED_MANDATORY_CKC_MECHANISM — DECIDED — ADOPTED BY MORRIS.**
+**Corrige** la recommandation initiale.
+
+### D-V3.1-CAT-08 — Slicing
+
+Recommandation : D1→D2→D3.
+**Décision : D1_THEN_D2_THEN_D3 — DECIDED — ADOPTED BY MORRIS.**
+
+## W. Recommandation historique — **ARBITRÉE / CONSOMMÉE**
+
+La recommandation §W initiale a été acceptée pour CAT-01/02/04/05/06/08, **enrichie** pour CAT-03, **corrigée** pour CAT-07. Source de décision = Morris.
+
+## X. Résolution de la réserve
+
+| Aspect | État |
+|--------|------|
+| Source / IDs / métadonnées / CKC / gouvernance / slicing | **Décidés** |
+| R-V3.1-CATALOG-01 | **RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL** |
+| Runtime catalogue / mapping CKC | **IMPLEMENTED BY V3.1-D1** |
+| Résolution orchestrée / resolver consommation | **Pending D2** |
+| Delivery D2/D3 | **Not authorized** |
+
+### Évidence V3.1-D1
+
+- Contrat runtime : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
+- Quinze IDs CAT-I1 : **ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1**
+- Mapping CKC statique obligatoire : 4 detailed + 11 synthetic · `executionAuthority=false`
+- Distinction : **mapping statique (D1)** ≠ **résolution orchestrée (D2)**
+- Doc lot : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`
+- Historique des décisions Morris (Decision record) : **conservé** ci-dessus
+
+### Evidence QA V3.1-D1
+
+- Rapport : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md` (**historique FAIL — inchangé**)
+- Données prod + freezes + 15 IDs + mapping CKC : **conformes**
+- Gaps `validateCycleTypeCatalog` R-QA-01…09 documentés
+
+### Evidence corrective V3.1-D1
+
+- Rapport : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md` (**historique — inchangé**)
+- Validateur renforcé : version · lifecycle · doctrine · fail-closed · primaryLevel · synthetic fallback · ensembles 1…15 · alias↔IDs
+- Données catalogue / version / API / tests QA : **inchangés**
+
+### Evidence QA revalidation V3.1-D1
+
+- Rapport : `…/03-qa-revalidation-report.md` (**historique PASS — inchangé**)
+- R-QA-01…09 : **CLOSED BY REVALIDATION**
+
+### Evidence QA-G3 Morris
+
+- Gate : `GO QA-G3 ACCEPT … PASS — R-QA-01 TO R-QA-09 CLOSED — PR READINESS NEXT` (2026-07-30 21:36 CEST)
+- Décision : **QA-G3 = PASS** · findings CLOSED · D2/D3 non autorisés · commit/push/PR non autorisés par QA-G3
+
+### Evidence PR readiness V3.1-D1
+
+- Rapport : `…/04-pr-readiness-report.md`
+- Package 13 fichiers · une PR · 2 commits planifiés · **aucun** staging/commit/push/PR
+- Verdict Cursor : **READY FOR PR**
+- Distinction : **contrat adopté** · **runtime D1** · **validateur** · **QA-G3** · **PR readiness** · **publication Git** (pending GO) · **D2 orchestration** (pending)
+- R-V3.1-CATALOG-01 : contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**
+
+## Y. Risques et réserves
+
+Runtime D1 validé · QA-G3 PASS · PR readiness READY · publication Git pending · orchestration D2 absente · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.
+
+## Z. Anti-claims
+
+- Adoption contractuelle ≠ implémentation runtime (historique) · **D1 a implémenté le contrat runtime**.
+- Mapping CKC D1 ≠ résolution orchestrée D2.
+- IDs implémentés dans le catalogue ≠ CycleInstance créés.
+- CKC obligatoire ≠ baseline méthode globale.
+- CKC obligatoire ≠ autorité d’exécution.
+- Candidate ≠ optionnel (dans le produit candidate).
+- Type ≠ profil · catalogue ≠ moteur · recommandation ≠ décision.
+- D2/D3 **non** autorisés.
+- Pas PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.
+
+## AA. Verdict
+
+**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME VALIDATED — QA-G3 PASS — PR READINESS READY FOR PR — D2/D3 NOT AUTHORIZED**
+
+Prochain gate candidat (non ouvert) :
+
+`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
+
+Statut : **READY FOR MORRIS COMMIT/PUSH/PR DECISION**
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index dae31b5d..23b6c6f5 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -2,133 +2,36 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING HISTORICAL — D-VS-01→04 ADOPTED — V1 EXECUTED LOCALLY — V2 NOT AUTHORIZED` |
-| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
-| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
-| **Profil** | Standard |
-| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
-| **Branche framing** | `framing/sfia-studio-first-user-visible-vertical-slice` @ `c1955179a36079e060c41a845c2a1950084966c8` |
-| **Branche V1 locale** | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
-| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
-| **Code applicatif framing** | **aucune modification** |
-| **Exécution V1** | facade headless T-A0/T-A1, OA mémoire, projection et audit optionnel — voir `11` |
-| **Push / PR / merge projet V1** | **non autorisés, non exécutés** |
-
-## Objectif
-
-Cadrer le premier parcours **réellement visible et compréhensible** :
-
-**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**
-
-en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.
+| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
+| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
+| **Cycle courant** | 13 — PR readiness V3.1-D1 |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
+| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
+| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
+| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |
 
 ## Synthèse
 
-Trois stacks UI coexistent aujourd’hui et **ne sont pas unifiées** :
-
-1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
-2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
-3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).
-
-Le cœur Option A (`lib/oa/**`) est **complet jusqu’à T-A6** (+ fondations T-A7) mais **aucune route UI n’importe `@/lib/oa/**` aujourd’hui**.
-
-Le framing propose une **facade applicative locale** au-dessus des use cases OA + lecture T-A7, en **adaptant StudioShell** et en **séparant strictement** fixture / local / produit.
-
-## Scope / hors scope
-
-**Dans le scope (cible produit local borné)** : création Project/LPS réelle · doctrine T-A0 · qualification cycle T-A2 · décision locale T-A3 honnête · dashboard readiness T-A6/T-A7 · historique borné F13.4.
-
-**Hors scope** : IAM · Critical ack réel · agent/shell Cursor réel · harness BeB comme happy path · persistance produit · API HTTP obligatoire · delivery/cutover · fermeture HARD/T-A6/B5/R1/R-M01 · T-A7 COMPLETE · nouveau design system.
-
-## Parcours cible (résumé)
-
-1. Arrivée — disclosure mode local · CTA Créer un projet
-2. Création — champs minimaux → T-A0+T-A1
-3. Fiche projet — LPS, cycle, blockers
-4. Recommandation — T-A2 (≠ décision)
-5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
-6. Readiness dashboard — anti-claims honnêtes
-7. Historique borné
-
-## Architecture (résumé)
-
-```text
-UI (StudioShell + screens)
-  → VerticalSliceFacade (application composition)
-    → ports T-A0…T-A7 use cases
-      → adapters mémoire OA (+ audit SQLite optionnel)
-        → UI projections read-only
-```
-
-Aucun composant React ne décide Critical / HARD closed / preuve suffisante / autorité / gate.
-
-## Figma
+| Lot | État |
+|-----|------|
+| V1 / V2 | intégrés `main` |
+| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
+| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
+| **QA-G3** | **PASS Morris** |
+| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
+| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
+| V3.2 / V4–V6 | non autorisés |
 
-| Item | Valeur |
-|------|--------|
-| FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
-| Page listée | `0:1` — **UX-B — P0** |
-| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
-| Contrat visuel | **Git** — voir `05` |
-| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |
-
-## Backlog recommandé
-
-V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.
-
-Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.
-
-## Décisions Morris
-
-| ID | Statut | Décision |
-|----|--------|----------|
-| D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
-| D-VS-02 | `DECIDED — ADOPTED BY MORRIS` | mémoire OA + audit SQLite local optionnel |
-| D-VS-03 | `DECIDED — ADOPTED BY MORRIS` | fixtures hors happy path |
-| D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
-| D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |
-
-## Statut d'exécution V1
-
-V1 est exécuté localement sur une branche descendante du commit de framing. La facade compose la résolution Doctrine T-A0 et la création atomique Project/LPS v1 T-A1, puis expose une projection read-only reconstruite depuis T-A1. Les fixtures et le storage navigateur sont hors de cette surface.
-
-Validations : 16 nouveaux tests ; régressions ciblées 109/109 ; suite complète 752/752 ; typecheck, lint et build green. Aucun fichier UI, OA existant, schéma SQLite, package ou lockfile n'est modifié.
-
-V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est implémenté.
-
-## Anti-claims
-
-- Framing ≠ produit ready ≠ MVP validé
-- UI POC ≠ cœur OA branché
-- Décision locale ≠ autorité IAM
-- Local SQLite ≠ persistance produit
-- Recommandation ≠ décision Morris
-- HARD/T-A6 restent ouverts
-
-## Index du pack
-
-| Doc | Sujet |
-|-----|-------|
-| `01` | Inventaire UI + cœur |
-| `02` | Journey et scope |
-| `03` | Mapping T-A0→T-A7 ↔ UI |
-| `04` | IA & navigation |
-| `05` | Contrat visuel & Figma |
-| `06` | Données locales & composition |
-| `07` | A11y / responsive / erreurs |
-| `08` | Backlog & slicing |
-| `09` | Plan validation / preuves |
-| `10` | Risques & decision pack Morris |
-| `11` | Exécution locale V1 — Project core composition |
+**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.
 
 ## Gate candidat suivant
 
-`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`
-
-Après intégration distincte de V1 : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`.
-
-Aucun gate automatique.
+`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
 
 ## Verdict
 
-`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED`
+`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md
new file mode 100644
index 00000000..2c74966f
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md
@@ -0,0 +1,277 @@
+# V3.1-D1 — QA / Validation Report (Critical)
+
+## A. Meta
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 21:10:00 CEST (+0200) |
+| **Cycle** | 9 — QA / validation |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **GO Morris consommé** | `GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE` (2026-07-30 20:52 CEST) |
+| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · ahead/behind `0/0` |
+| **CKC QA** | `method/.../pilots/04-qa-validation.md` · candidate · v0.1.0 · consommation obligatoire · `executionAuthority=false` |
+| **Handoff pré-cycle** | tip `a47487d…` · blob `c521ba64…` |
+| **Statut** | `V3.1-D1 QA FAIL — BLOCKING OR MAJOR CONTRACT FINDINGS — CORRECTIVE DELIVERY REQUIRED — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED` |
+| **Décision Morris QA-G3** | **non consommée** — proposition Cursor uniquement |
+
+## B. Objet à valider
+
+- Contrat runtime D1 (`cycleTypeCatalog.ts`) : quinze IDs, métadonnées, opérations pures, immuabilité.
+- Mapping CKC obligatoire (4 detailed / 11 synthetic, fallback, fail-closed metadata).
+- Frontières D1/D2 : aucun resolver orchestré, aucun bridge QualifyCycle, aucune UI, aucun CreateCycle.
+- Capacité de `validateCycleTypeCatalog` à détecter les violations contractuelles (gouvernance / clones).
+
+## C. Référentiel
+
+- Décisions D-V3.1-CAT-01…08 + document `14`.
+- README D1 Delivery.
+- Quinze IDs CAT-I1 exacts.
+- Invariants identité / CKC / immuabilité / alias du GO QA.
+- CKC pilot QA + checklist validation + standard QA v2 + méthode §4.9.
+- Principe : **tests verts Delivery ≠ validation Morris**.
+
+## D. Stratégie
+
+1. Conformité statique (lecture contrat, exports, chemins, absence D2/I/O).
+2. Baseline tests Delivery (avant renforcement).
+3. Renforcement QA négatif / bords / immuabilité (clones locaux uniquement).
+4. Non-régression suite `oa/cycle` + typecheck + lint + build.
+5. Classification stricte des écarts (bloquante / majeure / mineure / environnementale).
+6. Aucune correction production dans ce cycle.
+
+## E. État initial
+
+### Hashes before-qa
+
+| Artefact | Hash |
+|----------|------|
+| `cycleTypeCatalog.ts` | `1674243863d015411c602848404e2e41c046afa7` |
+| `cycleTypeCatalog.test.ts` (Delivery) | `77be87c793ebb278e63ee22f6427bdf33aa8ce89` |
+| `index.ts` | `3daf57578e528878ef8a9298813019bb3b86af3c` |
+| docs 12 / 13 | `82be657c…` / `3ecb0256…` |
+
+### Tests Delivery existants (avant renforcement)
+
+| Commande | Résultat | Durée |
+|----------|----------|-------|
+| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` | **24/24 PASS** | ~0.88s |
+| `npm test -- __tests__/oa/cycle/` | **72/72 PASS** | ~0.62s |
+
+## F. Matrice de couverture
+
+| ID | Invariant | Source | Preuve | Résultat | Réserve |
+|----|-----------|--------|--------|----------|---------|
+| INV-01 | Exactement 15 IDs adoptés | CAT-I1 | tests Delivery + QA | **PASS** | — |
+| INV-02 | Unicité id/key/number/order | GO QA | tests Delivery | **PASS** | — |
+| INV-03 | Pattern OA + `cyc:` + capitalization | CAT-I1 | tests Delivery | **PASS** | — |
+| INV-04 | Labels/descriptions/methodRef non vides | GO QA | tests Delivery | **PASS** | — |
+| INV-05 | lifecycleStatus production = active | GO QA | QA reinforcement | **PASS** (données) | — |
+| INV-06 | CKC mandatory + execAuth false + doctrine + fail-closed (données) | CAT-07 | tests Delivery | **PASS** | — |
+| INV-07 | 4 detailed / 11 synthetic + fallback | CAT-07 | tests Delivery | **PASS** | — |
+| INV-08 | Chemins Git CKC existent | GO QA | existsSync suite | **PASS** | — |
+| INV-09 | Lookup id-only · pas label/key | CAT-02 | tests Delivery | **PASS** | — |
+| INV-10 | listCycleTypes non mutante | GO QA | tests Delivery | **PASS** | — |
+| INV-11 | Object.isFrozen catalogue/entries/ckc/aliases | GO QA | QA reinforcement | **PASS** | — |
+| INV-12 | Mutation profonde rejetée | GO QA | QA reinforcement | **PASS** | — |
+| INV-13 | methodReference §4.1…§4.15 | méthode | QA reinforcement | **PASS** | — |
+| INV-14 | Pas profil/gate/Morris dans entrées | GO QA | tests Delivery | **PASS** | — |
+| INV-15 | Pas fs / import method runtime | GO QA | static search | **PASS** | — |
+| INV-16 | Validator détecte lifecycle invalide | GO QA | QA négatif | **FAIL** | R-QA-01 majeure |
+| INV-17 | Validator détecte doctrineStatus invalide | GO QA | QA négatif | **FAIL** | R-QA-02 majeure |
+| INV-18 | Validator détecte unavailableBehavior invalide | GO QA | QA négatif | **FAIL** | R-QA-03 majeure |
+| INV-19 | Validator détecte fallbackPolicy synthetic incohérente | GO QA | QA négatif | **FAIL** | R-QA-04 majeure |
+| INV-20 | Validator détecte fallbackReference synthetic contradictoire | GO QA | QA négatif | **FAIL** | R-QA-05 majeure |
+| INV-21 | Validator détecte methodCycleNumber hors 1…15 / set inexact | GO QA | QA négatif | **FAIL** | R-QA-06 majeure |
+| INV-22 | Validator détecte displayOrder hors 1…15 / set inexact | GO QA | QA négatif | **FAIL** | R-QA-07 majeure |
+| INV-23 | Validator détecte alias = autre cycleTypeId | GO QA | QA négatif | **FAIL** | R-QA-08 majeure |
+| INV-24 | Validator détecte version catalogue incorrecte | GO QA | QA négatif | **FAIL** | R-QA-09 majeure |
+| INV-25 | Collision alias inter-entrées | GO QA | QA négatif | **PASS** | — |
+| INV-26 | primaryLevel inconnu | GO QA | via DETAILED/SYNTHETIC_COUNT | **PASS** | — |
+| INV-27 | primaryReference vide | GO QA | QA négatif | **PASS** | — |
+
+## G. Tests existants (avant renforcement)
+
+- Catalog Delivery : **24 PASS** (2026-07-30 21:07:47 CEST).
+- Suite `oa/cycle` : **72 PASS**.
+- Couverture Delivery : nominale + négatifs de base (doublons, pattern, CKC missing, execAuth, detailed sans fallback, synthetic sans map, alias dupliqués locaux).
+
+## H. Tests QA ajoutés
+
+| # | Scénario | Justification | Résultat |
+|---|----------|---------------|----------|
+| 1 | lifecycleStatus production active | INV-05 | **PASS** |
+| 2 | Object.isFrozen (catalogue/entries/ckc/aliases) | INV-11 | **PASS** |
+| 3 | Mutation profonde | INV-12 | **PASS** |
+| 4 | methodReference §4.n | INV-13 | **PASS** |
+| 5 | Chemins Git existent | INV-08 | **PASS** |
+| 6 | Version exacte | INV-24 données | **PASS** |
+| 7 | Synthetic sans fallbackReference | INV-07 données | **PASS** |
+| 8 | lifecycleStatus invalide → validator | INV-16 | **FAIL** |
+| 9 | doctrineStatus ≠ method-candidate | INV-17 | **FAIL** |
+| 10 | unavailableBehavior ≠ fail-closed | INV-18 | **FAIL** |
+| 11 | synthetic fallbackPolicy incohérente | INV-19 | **FAIL** |
+| 12 | synthetic fallbackReference contradictoire | INV-20 | **FAIL** |
+| 13 | methodCycleNumber hors plage | INV-21 | **FAIL** |
+| 14 | displayOrder hors plage | INV-22 | **FAIL** |
+| 15 | set methodCycleNumber inexact | INV-21 | **FAIL** |
+| 16 | set displayOrder inexact | INV-22 | **FAIL** |
+| 17 | collision alias inter-entrées | INV-25 | **PASS** |
+| 18 | alias = autre cycleTypeId | INV-23 | **FAIL** |
+| 19 | version incorrecte | INV-24 | **FAIL** |
+| 20 | primaryLevel inconnu | INV-26 | **PASS** |
+| 21 | fallbackReference unauthorized (synthetic) | INV-20 | **FAIL** |
+| 22 | primaryReference vide | INV-27 | **PASS** |
+
+**Total renforcé :** 46 tests · **34 PASS** · **12 FAIL**.
+
+## I. Résultats techniques
+
+| Commande | Répertoire | Code | Résultat | Durée approx. |
+|----------|------------|------|----------|---------------|
+| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` (avant) | `app/` | 0 | 24/24 PASS | 0.88s |
+| `npm test -- __tests__/oa/cycle/` (avant) | `app/` | 0 | 72/72 PASS | 0.62s |
+| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` (après) | `app/` | 1 | 34 PASS / 12 FAIL | 0.78s |
+| `npm test -- __tests__/oa/cycle/` (après) | `app/` | 1 | 82 PASS / 12 FAIL (94) | 0.63s |
+| `npm run typecheck` | `app/` | 0 | PASS | 1.07s |
+| `npm run lint` | `app/` | 0 | PASS | 1.62s |
+| `npm run build` | `app/` | 0 | PASS | 7.23s |
+| `git diff --check` | repo | 0 | PASS | — |
+
+## J. Analyse des écarts
+
+### R-QA-01 — Validator n’émet pas sur lifecycleStatus invalide
+
+- **Attendu :** issue dédiée.
+- **Observé :** `validateCycleTypeCatalog` silencieux (`[]` pour ce champ).
+- **Reproductibilité :** clone local `lifecycleStatus: "bogus"`.
+- **Sévérité :** **majeure** (données prod actives, contrôle gouvernance absent).
+- **Impact :** snapshot invalide pourrait passer validation pure.
+- **Recommandation :** Delivery correctif — valider enum `active|deprecated|unavailable`.
+- **Gate :** GO DELIVERY CORRECTIVE.
+
+### R-QA-02 — doctrineStatus non contrôlé
+
+- **Attendu :** rejet si ≠ `method-candidate`.
+- **Observé :** silencieux.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-03 — unavailableBehavior non contrôlé
+
+- **Attendu :** rejet si ≠ `fail-closed`.
+- **Observé :** silencieux.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-04 — fallbackPolicy synthetic incohérente non détectée
+
+- **Attendu :** synthetic ⇒ `fallbackPolicy=none` (ou équivalent explicite).
+- **Observé :** `synthetic_map` accepté sur entrée synthetic.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-05 — fallbackReference unauthorized / contradictoire sur synthetic
+
+- **Attendu :** absence de `fallbackReference` (ou rejet).
+- **Observé :** `fallbackReference` accepté.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-06 — methodCycleNumber hors 1…15 / set inexact non détecté
+
+- **Attendu :** ensemble exact `{1…15}`.
+- **Observé :** unicité seule ; `16` unique accepté.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-07 — displayOrder hors 1…15 / set inexact non détecté
+
+- **Attendu :** ensemble exact `{1…15}`.
+- **Observé :** unicité seule ; `0` / `99` acceptés.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-08 — alias égal au cycleTypeId d’une autre entrée non détecté
+
+- **Attendu :** `ALIAS_AMBIGUOUS` / collision id.
+- **Observé :** silencieux (collision alias↔alias OK ; alias↔id d’une autre entrée non).
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+### R-QA-09 — version catalogue incorrecte non contrôlée
+
+- **Attendu :** rejet si ≠ `0.1.0-v3.1-d1`.
+- **Observé :** silencieux.
+- **Sévérité :** **majeure**.
+- **Gate :** Delivery correctif.
+
+**Note :** les données de production actuelles restent conformes aux invariants nominaux (15 IDs, freezes, CKC mapping, chemins Git). Les écarts portent sur la **complétude du validateur pur** utilisé comme garde-fou contractuel.
+
+## K. Frontières
+
+| Contrôle | Preuve |
+|----------|--------|
+| `cycleTypeCatalog.ts` inchangé | hash `16742438…` avant = après |
+| `index.ts` inchangé | hash `3daf5757…` avant = après |
+| docs 12 / 13 inchangés | hashes + `cmp` |
+| D2 / resolver / QualifyCycle bridge | absents du diff QA |
+| UI / CreateCycle / React dans test QA | absents |
+| package/lockfile | inchangés |
+| method/** import runtime | uniquement string paths |
+
+## L. Réserves
+
+### Bloquantes
+
+Aucune (aucune corruption des données de production, aucun `executionAuthority=true`, aucun ID incorrect, aucune mutation du registre).
+
+### Majeures
+
+R-QA-01 … R-QA-09 (validator incomplet sur invariants contractuels — données prod conformes).
+
+### Mineures
+
+Aucune.
+
+### Environnementales
+
+Aucune.
+
+### Aucune réserve cachée
+
+Tous les échecs QA renforcés sont listés ci-dessus.
+
+## M. Anti-claims
+
+- Tests Delivery verts ≠ catalogue sans défaut de gouvernance.
+- QA Cursor ≠ décision Morris QA-G3.
+- Catalogue D1 ≠ résolution CKC orchestrée.
+- Mapping ≠ production / PR ready.
+- typecheck/lint/build PASS ≠ QA-G3 PASS.
+- Aucune validation D2/D3.
+- Aucun GO implicite · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.
+
+## N. QA-Gates
+
+| Gate | État |
+|------|------|
+| **QA-G2** | Tests automatisés implémentés — **OUI** (Delivery + renforcement QA) ; suite renforcée **non verte** (12 FAIL intentionnels / preuves d’écart). |
+| **QA-G3** | Preuves complètes + réserves classées — **proposition Cursor : FAIL** ; **décision Morris attendue**. |
+
+## O. Verdict
+
+```
+V3.1-D1 QA FAIL —
+BLOCKING OR MAJOR CONTRACT FINDINGS —
+CORRECTIVE DELIVERY REQUIRED —
+PR READINESS NOT AUTHORIZED —
+D2/D3 NOT AUTHORIZED
+```
+
+**Gate suivant candidat (non ouvert) :**
+
+`GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE`
+
+**Statut attendu Morris :** décision QA-G3 (NO-GO QA / accept FAIL → corrective) — **pas** PR readiness.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md
new file mode 100644
index 00000000..b287899b
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md
@@ -0,0 +1,110 @@
+# V3.1-D1 — Corrective Delivery Report
+
+## A. Meta
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 21:22:00 CEST (+0200) |
+| **Cycle** | 8 — Delivery / implémentation (correctif post-QA) |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **GO Morris consommé** | `GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE` (2026-07-30 21:14 CEST) |
+| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · 0/0 |
+| **CKC Delivery** | carte synthétique + méthode §4.8 · method-candidate · obligatoire · `executionAuthority=false` |
+| **Handoff QA source** | tip `a2e2e1a…` · blob `9de8a7f…` |
+| **Statut** | `V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED — QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED — READY FOR QA REVALIDATION DECISION — PR READINESS AND D2/D3 NOT AUTHORIZED` |
+
+## B. Contexte
+
+QA Critical (cycle 9) a produit **FAIL** : données de production nominales conformes, mais `validateCycleTypeCatalog` incomplet → **12 tests** QA en échec / **9 réserves majeures** R-QA-01…09. Rapport historique inchangé : [`01-qa-validation-report.md`](./01-qa-validation-report.md).
+
+## C. Périmètre
+
+| Autorisé | Réalisé |
+|----------|---------|
+| `cycleTypeCatalog.ts` — `validateCycleTypeCatalog` + helpers privés | **oui** |
+| Tests QA | **inchangés** (oracle) |
+| `index.ts` / données / version / API / mapping | **inchangés** |
+| D2 / D3 / UI / CreateCycle | **absents** |
+
+## D. Findings
+
+| Finding | Invariant | Sévérité QA | Contrôle ajouté | Code | Test oracle | Résultat |
+|---------|-----------|-------------|-----------------|------|-------------|----------|
+| R-QA-01 | lifecycleStatus fermé | majeure | enum `active\|deprecated\|unavailable` | `LIFECYCLE_STATUS_INVALID` | detects invalid lifecycleStatus | **PASS** |
+| R-QA-02 | doctrineStatus | majeure | `=== method-candidate` | `CKC_DOCTRINE_STATUS` | detects doctrineStatus… | **PASS** |
+| R-QA-03 | unavailableBehavior | majeure | `=== fail-closed` | `CKC_UNAVAILABLE_BEHAVIOR` | detects unavailableBehavior… | **PASS** |
+| R-QA-04 | synthetic fallbackPolicy | majeure | `=== none` | `CKC_SYNTHETIC_FALLBACK_POLICY` | incoherent fallbackPolicy | **PASS** |
+| R-QA-05 | synthetic fallbackReference | majeure | must be `undefined` | `CKC_SYNTHETIC_FALLBACK_REF` | contradictory / unauthorized fallbackReference | **PASS** |
+| R-QA-06 | methodCycleNumber 1…15 | majeure | range + exact set | `METHOD_NUMBER_RANGE` / `METHOD_NUMBER_SET` | hors plage + set inexact | **PASS** |
+| R-QA-07 | displayOrder 1…15 | majeure | range + exact set | `DISPLAY_ORDER_RANGE` / `DISPLAY_ORDER_SET` | hors plage + set inexact | **PASS** |
+| R-QA-08 | alias ↔ cycleTypeId | majeure | collect IDs puis collision | `ALIAS_COLLIDES_WITH_ID` | alias = autre cycleTypeId | **PASS** |
+| R-QA-09 | catalog.version | majeure | `=== CYCLE_TYPE_CATALOG_VERSION` | `CATALOG_VERSION` | incorrect catalog version | **PASS** |
+
+Également : `CKC_PRIMARY_LEVEL` pour primaryLevel inconnu (déjà couvert via counts + code dédié).
+
+## E. Implémentation
+
+Helpers privés purs :
+- `isExactOneToFifteen`
+- `isIntegerInOneToFifteen`
+- sets fermés `ALLOWED_LIFECYCLE_STATUSES` / `ALLOWED_PRIMARY_LEVELS`
+
+Ordre déterministe : version → COUNT → collecte IDs → boucle entrées → ensembles 1…15 → capitalization → cardinalité CKC → alias globaux.
+
+Pas d’I/O · pas de throw sur entrée invalide · liste d’issues · multi-issues.
+
+## F. Non-modifications
+
+- Quinze entrées statiques · IDs · labels · mapping 4/11 · aliases vides · `CYCLE_TYPE_CATALOG_VERSION=0.1.0-v3.1-d1`
+- Types / opérations / exports publics
+- `cycleTypeCatalog.test.ts` (hash inchangé)
+- `index.ts` · `01-qa-validation-report.md` · docs 12/13
+
+## G. Preuves avant
+
+| Commande | Résultat |
+|----------|----------|
+| catalog test | 34 PASS / **12 FAIL** (46) |
+| suite oa/cycle | 82 PASS / 12 FAIL (94) |
+
+## H. Preuves après
+
+| Commande | Répertoire | Code | Résultat | Durée |
+|----------|------------|------|----------|-------|
+| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` | `app/` | 0 | **46/46 PASS** | ~0.57s |
+| `npm test -- __tests__/oa/cycle/` | `app/` | 0 | **94/94 PASS** | ~0.71s |
+| `npm test` | `app/` | 0 | **827/827 PASS** (90 files) | ~7.23s |
+| `npm run typecheck` | `app/` | 0 | PASS | ~1.47s |
+| `npm run lint` | `app/` | 0 | PASS | ~1.66s |
+| `npm run build` | `app/` | 0 | PASS | ~7.44s |
+| `git diff --check` | repo | 0 | PASS | — |
+
+## I. Compatibilité
+
+15 IDs CAT-I1 · `cyc:capitalization` · 4 detailed / 11 synthetic · `executionAuthority=false` · fail-closed · Object.freeze inchangé · signature `validateCycleTypeCatalog` préservée.
+
+## J. Réserves
+
+- R-QA-01…09 **corrigés** dans le validateur.
+- QA-G3 **non** accepté — **revalidation QA** obligatoire.
+- Orchestration CKC / resolver / QualifyCycle bridge = **D2** (non autorisé).
+- PR readiness **fermée**.
+
+## K. Anti-claims
+
+Correctif vert ≠ QA-G3 · delivery correctif ≠ PR ready · D1 ≠ resolver D2 · mapping ≠ orchestration · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE · D2/D3 non autorisés.
+
+## L. Verdict
+
+```
+V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED —
+QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED —
+READY FOR QA REVALIDATION DECISION —
+PR READINESS AND D2/D3 NOT AUTHORIZED
+```
+
+**Gate suivant candidat (non ouvert) :**
+
+`GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md
new file mode 100644
index 00000000..1337157b
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md
@@ -0,0 +1,135 @@
+# V3.1-D1 — QA Revalidation Report (Critical)
+
+## A. Meta
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 21:32:00 CEST (+0200) |
+| **Cycle** | 9 — QA / validation (revalidation post-correctif) |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **GO Morris consommé** | `GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE` (2026-07-30 21:26 CEST) |
+| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · 0/0 |
+| **CKC QA** | `method/.../pilots/04-qa-validation.md` · candidate · v0.1.0 · obligatoire · `executionAuthority=false` |
+| **Handoff correctif** | tip `2d52ac6…` · blob `d40e8f24…` |
+| **Statut** | `V3.1-D1 QA REVALIDATION EVIDENCE COMPLETE — PASS — R-QA-01 TO R-QA-09 CLOSED BY REVALIDATION — READY FOR MORRIS QA-G3 DECISION — PR READINESS AND D2/D3 NOT AUTHORIZED` |
+| **Décision Morris QA-G3** | **non consommée** — proposition Cursor uniquement |
+
+## B. Historique
+
+1. **Delivery D1** — contrat runtime + mapping CKC (15 IDs).
+2. **QA Critical** — FAIL · 12 tests négatifs · R-QA-01…09 · rapport [`01`](./01-qa-validation-report.md).
+3. **Delivery correctif** — `validateCycleTypeCatalog` renforcé · rapport [`02`](./02-corrective-delivery-report.md).
+4. **Revalidation** — ce rapport · production et tests **figés**.
+
+## C. Référentiel
+
+- Décisions D-V3.1-CAT-01…08 · document `14`.
+- Quinze IDs CAT-I1 · version `0.1.0-v3.1-d1`.
+- Rapport QA 01 (FAIL historique) · correctif 02.
+- Oracle : `cycleTypeCatalog.test.ts` hash `0102fc02…` **inchangé**.
+- Invariants identité / CKC / immuabilité / alias / fail-closed.
+
+## D. Protections
+
+| Artefact | Hash | Pendant revalidation |
+|----------|------|----------------------|
+| `cycleTypeCatalog.ts` | `9968f040…` | **inchangé** |
+| `cycleTypeCatalog.test.ts` | `0102fc02…` | **inchangé** |
+| `index.ts` | `3daf5757…` | **inchangé** |
+| `01-qa-validation-report.md` | `2c74966f…` | **inchangé** |
+| `02-corrective-delivery-report.md` | `b287899b…` | **inchangé** |
+| document 12 | `82be657c…` | **inchangé** |
+| document 13 | `3ecb0256…` | **inchangé** |
+
+Aucune correction technique · aucun test modifié · package/lockfile/config inchangés.
+
+## E. Stratégie
+
+Conformité statique → exécution oracle complète (nominal + négatifs + bords) → non-régression suite domaine + applicative → typecheck/lint/build → matrice fermeture R-QA → classification réserves → proposition QA-G3 (Morris).
+
+## F. Matrice R-QA-01 à R-QA-09
+
+| Finding | Invariant | Test oracle | Code | Avant correctif | Correctif | Revalidation | Statut |
+|---------|-----------|-------------|------|-----------------|-----------|--------------|--------|
+| R-QA-01 | lifecycle fermé | detects invalid lifecycleStatus | `LIFECYCLE_STATUS_INVALID` | FAIL | enum check | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-02 | doctrineStatus | detects doctrineStatus… | `CKC_DOCTRINE_STATUS` | FAIL | exact match | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-03 | unavailableBehavior | detects unavailableBehavior… | `CKC_UNAVAILABLE_BEHAVIOR` | FAIL | fail-closed | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-04 | synthetic fallbackPolicy | incoherent fallbackPolicy | `CKC_SYNTHETIC_FALLBACK_POLICY` | FAIL | `=== none` | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-05 | synthetic fallbackReference | contradictory / unauthorized | `CKC_SYNTHETIC_FALLBACK_REF` | FAIL | must be undefined | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-06 | methodCycleNumber 1…15 | hors plage + set inexact | `METHOD_NUMBER_RANGE` / `SET` | FAIL | range + set | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-07 | displayOrder 1…15 | hors plage + set inexact | `DISPLAY_ORDER_RANGE` / `SET` | FAIL | range + set | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-08 | alias ↔ cycleTypeId | alias = autre cycleTypeId | `ALIAS_COLLIDES_WITH_ID` | FAIL | IDs first | **PASS** | **CLOSED BY REVALIDATION** |
+| R-QA-09 | catalog.version | incorrect catalog version | `CATALOG_VERSION` | FAIL | version check | **PASS** | **CLOSED BY REVALIDATION** |
+
+Conditions de fermeture : test oracle PASS · code présent en production · tests non modifiés · production inchangée pendant revalidation · pas de régression.
+
+## G. Catalogue nominal
+
+| Contrôle | Résultat |
+|----------|----------|
+| Version `0.1.0-v3.1-d1` | **PASS** |
+| Exactement 15 IDs CAT-I1 ordre 1…15 | **PASS** |
+| Unicité id/key/number/order · ensembles 1…15 | **PASS** |
+| `cyc:capitalization` exact | **PASS** |
+| Labels/descriptions/methodRef non vides · lifecycle active | **PASS** |
+| CKC mandatory · execAuth false · doctrine · fail-closed | **PASS** |
+| 4 detailed / 11 synthetic · fallbacks | **PASS** |
+| Chemins Git existent · pas d’I/O runtime | **PASS** |
+| Object.isFrozen profond · list non mutante · lookup id-only | **PASS** |
+| Pas profil/gate/Morris dans entrées | **PASS** |
+
+## H. Résultats techniques
+
+| Commande | Répertoire | Date | Code | Résultat | Durée |
+|----------|------------|------|------|----------|-------|
+| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` | `app/` | 2026-07-30 21:31:19 CEST | 0 | **46/46 PASS** | ~0.73s |
+| `npm test -- __tests__/oa/cycle/` | `app/` | 2026-07-30 21:31:24 CEST | 0 | **94/94 PASS** | ~0.72s |
+| `npm test` | `app/` | 2026-07-30 21:31:25 CEST | 0 | **827/827 PASS** (90 files) | ~6.63s |
+| `npm run typecheck` | `app/` | suite | 0 | PASS | ~0.89s |
+| `npm run lint` | `app/` | suite | 0 | PASS | ~1.65s |
+| `npm run build` | `app/` | suite | 0 | PASS | ~7.00s |
+| `git diff --check` | repo | post | 0 | PASS | — |
+
+Toutes les commandes **rejouées** dans ce cycle (aucun PASS réutilisé d’une exécution antérieure).
+
+## I. Analyse des écarts
+
+Aucun écart technique. Aucun finding R-QA restant ouvert. Aucune régression. Aucune réserve cachée.
+
+## J. QA-Gates
+
+| Gate | État |
+|------|------|
+| **QA-G2** | Tests automatisés implémentés — suite renforcée **verte** (46/46 · 94/94 · 827/827). |
+| **QA-G3** | **PASS proposé** — décision Morris **attendue**. |
+
+## K. Frontières
+
+Resolver / QualifyCycle bridge / vertical-slice / UI / CreateCycle / persistance / D2 / D3 : **absents** de ce cycle. Production et tests **non modifiés**.
+
+## L. Anti-claims
+
+- Revalidation PASS ≠ sans bug absolu.
+- Revalidation PASS ≠ QA-G3 Morris accepté.
+- QA-G3 ≠ PR readiness automatique.
+- Catalogue D1 ≠ resolver D2.
+- Mapping CKC ≠ orchestration CKC.
+- Build PASS ≠ production ready.
+- D2/D3 non validés.
+- Aucun GO implicite · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.
+
+## M. Verdict
+
+```
+V3.1-D1 QA REVALIDATION EVIDENCE COMPLETE —
+PASS —
+R-QA-01 TO R-QA-09 CLOSED BY REVALIDATION —
+READY FOR MORRIS QA-G3 DECISION —
+PR READINESS AND D2/D3 NOT AUTHORIZED
+```
+
+**Gate suivant candidat (non ouvert) :**
+
+`GO QA-G3 ACCEPT SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — PASS — R-QA-01 TO R-QA-09 CLOSED — PR READINESS NEXT — NO D2 — NO UI — NO CREATECYCLE`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md
new file mode 100644
index 00000000..6583f2d4
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md
@@ -0,0 +1,218 @@
+# V3.1-D1 — PR Readiness Report (Critical)
+
+## A. Meta
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 21:45:00 CEST (+0200) |
+| **Cycle** | 13 — PR readiness |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **GO QA-G3** | `GO QA-G3 ACCEPT … PASS — R-QA-01 TO R-QA-09 CLOSED — PR READINESS NEXT` (2026-07-30 21:36 CEST) |
+| **GO PR readiness** | `GO PR READINESS SFIA STUDIO V3.1-D1 … REVIEW SCOPE DIFF TESTS RISKS AND PR PACKAGE` (2026-07-30 21:37 CEST) |
+| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · 0/0 |
+| **CKC** | fallback carte synthétique + méthode §4.13 · method-candidate · obligatoire · `executionAuthority=false` |
+| **Handoff QA** | tip `95df108…` · blob `c344dc88…` |
+| **Statut** | `V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
+
+## B. Gates Morris
+
+| Gate | Effet |
+|------|-------|
+| QA-G3 ACCEPT PASS | R-QA-01…09 CLOSED · D1 QA accepté · PR readiness autorisée |
+| PR READINESS | revue package · **aucun** commit/push/PR autorisé par ce gate |
+| D2/D3 | **interdits** |
+
+## C. Historique
+
+Cadrage `12` · conception `13` · architecture catalogue `14` (CAT-01…08) → Delivery D1 → QA FAIL (`01`) → correctif (`02`) → revalidation PASS (`03`) → **QA-G3 PASS Morris** → PR readiness (`04`).
+
+## D. Git Truth
+
+| Contrôle | Valeur |
+|----------|--------|
+| Branche | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| HEAD / origin/main | `3e8a437…` |
+| Ahead/behind | 0/0 |
+| Remote Delivery | **absente** |
+| Staged | **aucun** |
+| Commit/push/PR projet | **non** |
+
+## E. Package prospectif (13 fichiers)
+
+| # | Path | Statut | Catégorie | Justification |
+|---|------|--------|-----------|---------------|
+| 1 | `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` | A | code | Contrat + mapping + validateur |
+| 2 | `app/lib/oa/cycle/index.ts` | M | code | Export D1 |
+| 3 | `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts` | A | test | Oracle 46 tests |
+| 4 | `…/framing/README.md` | M | docs | Trajectoire vivante |
+| 5 | `…/framing/08-….md` | M | docs | Backlog D1/QA/PR |
+| 6 | `…/framing/12-….md` | A | arch | Cadrage V3 (traçabilité) |
+| 7 | `…/framing/13-….md` | A | arch | Conception Profile Qualification |
+| 8 | `…/framing/14-….md` | A | arch | Architecture catalogue + CAT |
+| 9 | `…/v3-1-d1-…/README.md` | A | qa | Synthèse lot D1 |
+| 10 | `…/01-qa-validation-report.md` | A | qa | FAIL historique |
+| 11 | `…/02-corrective-delivery-report.md` | A | qa | Correctif |
+| 12 | `…/03-qa-revalidation-report.md` | A | qa | Revalidation PASS |
+| 13 | `…/04-pr-readiness-report.md` | A | qa | Ce rapport |
+
+`.tmp-sfia-review/**` : **exclu**.
+
+## F. Diff prospectif
+
+| Segment | Fichiers | +lignes | −lignes |
+|---------|----------|---------|---------|
+| Tracked (`git diff`) | 3 | 73 | 155 |
+| Untracked package (hors 04) | 9 | 3359 | 0 |
+| Rapport 04 (ce fichier) | 1 | ~220 | 0 |
+| **Combiné estimé** | **13** | **~3652** | **155** |
+
+Plus gros fichiers : test (~720) · catalog (~643) · 13 (~478) · 12 (~460) · 14 (~394).
+
+Aucun staging · reconstruction via `git diff` + `git diff --no-index /dev/null <file>`.
+
+## G. Scope review
+
+**Une seule PR cohérente** recommandée : résultat utile unique = contrat runtime catalogue + CKC + validateur + preuves/docs D1.
+
+Inclus : D1 runtime · tests · CAT/architecture · preuves QA.
+Exclus : D2 resolver · QualifyCycle bridge · UI/D3 · CreateCycle · persistance · méthode · deps.
+
+12/13/14 nécessaires à la traçabilité arbitrage → D1.
+01/02/03 preuves historiques non réécrites.
+Condensation framing README : intentionnelle (statut vivant) ; décisions CAT conservées dans `14`.
+
+## H. Code review
+
+- 15 IDs CAT-I1 · `cyc:capitalization` · version `0.1.0-v3.1-d1`
+- 4 detailed / 11 synthetic · mandatory · `executionAuthority=false` · fail-closed
+- Freezes profonds · ops pures · pas d’I/O · pas d’import `method/**`
+- Validateur R-QA-01…09 · multi-issues · pas de throw
+- `index.ts` : +1 export catalogue uniquement
+
+## I. Test review
+
+46 tests (nominal/négatif/bords/freezes/paths) · aucun skip/todo/only.
+Historique FAIL → correctif → revalidation PASS.
+Rejeu readiness : **46/46** · **94/94** · **827/827**.
+
+## J. Documentation review
+
+12/13 inchangés pendant readiness · 14 CAT-01…08 + évidence QA/PR · README/08 cohérents · 01/02/03 historiques intacts · 04 readiness.
+
+## K. Security and hygiene
+
+Aucun secret · pas de TODO/FIXME · pas de chemin absolu · pas de `.tmp` dans package · pas de binaire >1M · UTF-8 texte · package/lockfile/config inchangés.
+
+## L. Risks and reserves
+
+| Classe | Contenu |
+|--------|---------|
+| Bloquantes | **aucune** |
+| Majeures | **aucune** |
+| Mineures | condensation framing README (intentionnelle ; décisions dans 14) |
+| Environnementales | **aucune** |
+| Hors D1 | D2 orchestration CKC · D3/Figma · CI distante non encore exécutée |
+
+## M. Git granularity
+
+**1 PR** · **2 commits** recommandés (non exécutés) :
+
+1. `feat(sfia-studio): add V3.1-D1 cycle type catalog contract` — catalog.ts · index.ts · test
+2. `docs(sfia-studio): document V3.1-D1 catalog design and QA evidence` — framing + dossier D1
+
+## N. PR package
+
+**Titre :** `feat(sfia-studio): add V3.1-D1 cycle type catalog contract`
+**Base :** `main` · **Head :** `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime`
+**Type :** draft PR recommandée.
+
+### Body (prêt à copier)
+
+```markdown
+## Summary
+- Runtime catalogue of the fifteen Morris-adopted SFIA Studio cycle types (`cyc:*`).
+- Mandatory CKC mapping (4 detailed pilots + 11 synthetic) with fail-closed metadata.
+- Pure-domain validator covering contractual invariants (R-QA-01…09).
+- Framing/architecture docs and Delivery/QA evidence for V3.1-D1.
+
+## Morris decisions
+- D-V3.1-CAT-01…08 adopted (see framing doc 14).
+- QA-G3 ACCEPT PASS (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED.
+- PR readiness reviewed — commit/push/PR require a distinct Morris GO.
+- D2/D3 not authorized by this PR.
+
+## Scope
+- Code: `cycleTypeCatalog.ts`, `index.ts` export.
+- Tests: `cycleTypeCatalog.test.ts` (46).
+- Docs: framing README, backlog 08, docs 12/13/14, D1 README + QA reports 01–04.
+
+## Runtime contract
+- Version `0.1.0-v3.1-d1`.
+- Fifteen IDs in method order; `cyc:capitalization` unchanged.
+- Ops: `listCycleTypes`, `getCycleTypeById`, `isKnownCycleTypeId`, `validateCycleTypeCatalog`.
+- CKC: mandatory, `executionAuthority=false`, `doctrineStatus=method-candidate`, `unavailableBehavior=fail-closed`.
+
+## QA evidence
+- Initial QA FAIL (report 01) → corrective validator-only (02) → revalidation PASS (03).
+- Local proofs re-run at readiness: 46/46, oa/cycle 94/94, full suite 827/827, typecheck/lint/build PASS.
+
+## Boundaries
+- No D2 CKC resolver orchestration.
+- No QualifyCycle bridge.
+- No UI / CreateCycle / persistence / method changes / dependency changes.
+
+## Risks and reserves
+- D2 still required for orchestrated CKC resolution.
+- D3 / Figma reserved separately.
+- Method-candidate CKC is mandatory in the candidate product, not a global method baseline.
+- No D1 blocking/major reserves for this package.
+
+## Test plan
+```bash
+cd projects/sfia-studio/app
+npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts
+npm test -- __tests__/oa/cycle/
+npm test
+npm run typecheck
+npm run lint
+npm run build
+```
+
+## Review guidance
+1. Doc 14 (CAT decisions + CKC)
+2. `cycleTypeCatalog.ts`
+3. `cycleTypeCatalog.test.ts`
+4. `index.ts`
+5. D1 reports 01→04
+6. Framing README / 08 / 12 / 13
+
+## Checklist
+- [x] QA-G3 PASS recorded
+- [x] No secrets / no dependency / no migration
+- [x] No D2/D3 in package
+- [ ] Commit/push/draft PR — require Morris GO
+- [ ] Merge — require distinct Morris GO after CI/review
+```
+
+## O. Gates suivants
+
+`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
+
+Merge = GO distinct après CI/review.
+
+## P. Anti-claims
+
+READY FOR PR ≠ PR créée · tests locaux ≠ CI distante · QA-G3 ≠ merge · D1 ≠ D2 · mapping ≠ resolver · draft ≠ merge-ready · aucun GO Git implicite · pas PRODUCT/RUN/IAM/AGENT READY · pas HARD CLOSED / T-A6 COMPLETE.
+
+## Q. Verdict
+
+```
+V3.1-D1 PR READINESS COMPLETE —
+READY FOR PR —
+QA-G3 PASS RECORDED —
+PR PACKAGE COMPLETE —
+COMMIT PUSH AND PR REQUIRE MORRIS GO —
+D2/D3 NOT AUTHORIZED
+```
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md
new file mode 100644
index 00000000..1480ed08
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md
@@ -0,0 +1,150 @@
+# V3.1-D1 — Cycle Type Catalog Runtime Contract
+
+## A. Meta
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-30 20:48:00 CEST (+0200) |
+| **Cycle** | 8 — Delivery / implémentation |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL |
+| **GO Morris consommé** | `GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE` (2026-07-30 20:35 CEST) |
+| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **CKC Delivery** | fallback carte synthétique + méthode §4.8 · method-candidate · consommation obligatoire · `executionAuthority=false` |
+| **Statut Delivery** | `V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED` |
+| **Statut QA (historique)** | FAIL → correctif → revalidation — [`01`](./01-qa-validation-report.md) · [`02`](./02-corrective-delivery-report.md) · [`03`](./03-qa-revalidation-report.md) |
+| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
+| **Statut PR readiness** | `READY FOR PR` — [`04`](./04-pr-readiness-report.md) — commit/push/PR **requièrent GO Morris** |
+| **Commit / push / PR projet** | **non** (pas encore autorisés) |
+
+## B. Objectif
+
+Produire le **contrat runtime pur** des quinze types de cycle adoptés et leur **mapping CKC obligatoire**, sans orchestration resolver, sans bridge QualifyCycle, sans UI, sans CreateCycle.
+
+## C. Décisions Morris consommées
+
+D-V3.1-CAT-01…08 adoptées — voir [`14`](../first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md).
+
+Quinze IDs CAT-I1 : `cyc:framing` … `cyc:capitalization` (inchangé).
+
+## D. Implémentation
+
+| Fichier | Rôle |
+|---------|------|
+| `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` | Types + données immuables + opérations pures + validation |
+| `app/lib/oa/cycle/index.ts` | Export public du contrat |
+| `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts` | Preuves positives / négatives |
+
+**Version catalogue :** `0.1.0-v3.1-d1`
+
+**Opérations publiques :** `listCycleTypes` · `getCycleTypeById` · `isKnownCycleTypeId` · `validateCycleTypeCatalog` · constantes/paths CKC · `CYCLE_TYPE_CATALOG` · `ADOPTED_CYCLE_TYPE_IDS`
+
+**CycleTypeDefinition :** id · canonicalKey · label · shortDescription · displayOrder · lifecycleStatus · methodCycleNumber · methodReference · ckc · aliases
+
+**CycleTypeCkcMapping :** mandatory · primaryLevel · primaryReference · fallbackPolicy · fallbackReference? · executionAuthority=false · doctrineStatus · unavailableBehavior
+
+Aucun I/O · aucun fs runtime · aucun React · aucun singleton mutable.
+
+## E. Mapping complet
+
+| # | cycleTypeId | Label | CKC |
+|---|-------------|-------|-----|
+| 1 | `cyc:framing` | Cadrage | detailed → pilots/01 + synthetic fallback |
+| 2 | `cyc:functional-design` | Conception fonctionnelle | detailed → pilots/02 + synthetic fallback |
+| 3 | `cyc:functional-architecture` | Architecture fonctionnelle | synthetic map |
+| 4 | `cyc:ux-ui` | UX/UI | synthetic map |
+| 5 | `cyc:backlog` | Backlog / user stories | synthetic map |
+| 6 | `cyc:technical-architecture` | Architecture technique | detailed → pilots/03 + synthetic fallback |
+| 7 | `cyc:integration-devops` | Intégration / DevOps | synthetic map |
+| 8 | `cyc:delivery` | Delivery / implémentation | synthetic map |
+| 9 | `cyc:qa-validation` | QA / validation | detailed → pilots/04 + synthetic fallback |
+| 10 | `cyc:security` | Sécurité / RSSI | synthetic map |
+| 11 | `cyc:release` | Déploiement / release | synthetic map |
+| 12 | `cyc:observability` | Observabilité / RUN readiness | synthetic map |
+| 13 | `cyc:pr-readiness` | PR readiness | synthetic map |
+| 14 | `cyc:post-merge` | Post-merge | synthetic map |
+| 15 | `cyc:capitalization` | Capitalisation / REX | synthetic map |
+
+Synthetic map path : `method/.../02-fifteen-cycles-synthetic-map.md`
+
+## F. Invariants
+
+Exactement 15 · IDs/keys/numbers/orders uniques · pattern OA `cyc:` · `cyc:capitalization` exact · labels/descriptions non vides · CKC mandatory · `executionAuthority=false` · 4 detailed + 11 synthetic · detailed ⇒ fallback synthétique · type ≠ profil · immuabilité · fail-closed metadata · pas de parsing Markdown runtime.
+
+## G. Tests
+
+```bash
+cd projects/sfia-studio/app
+npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts
+npm test -- __tests__/oa/cycle/
+npm run typecheck
+npm run lint
+npm run build
+```
+
+Résultats Delivery (2026-07-30) : catalog 24/24 PASS · suite oa/cycle 72/72 PASS · typecheck PASS · lint PASS · build PASS.
+
+### QA Critical (cycle 9 — 2026-07-30)
+
+- Tests renforcés ajoutés dans `cycleTypeCatalog.test.ts` (immutabilité, bornes, doctrine, alias, version).
+- Après renforcement (avant correctif) : **34 PASS / 12 FAIL**.
+- Rapport historique : [`01-qa-validation-report.md`](./01-qa-validation-report.md) (**inchangé**).
+
+### Delivery correctif (cycle 8 — 2026-07-30)
+
+- `validateCycleTypeCatalog` renforcé (R-QA-01…09) — données/API/tests **inchangés**.
+- Après correctif : catalog **46/46 PASS** · suite oa/cycle **94/94** · `npm test` **827/827**.
+- Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).
+
+### QA revalidation (cycle 9 — 2026-07-30)
+
+- Production + tests **figés** (rejeu indépendant des preuves).
+- Résultats rejoués : **46/46** · **94/94** · **827/827** · typecheck/lint/build **PASS**.
+- R-QA-01…09 : **CLOSED BY REVALIDATION**.
+- Rapport : [`03-qa-revalidation-report.md`](./03-qa-revalidation-report.md).
+
+### QA-G3 Morris (2026-07-30 21:36 CEST)
+
+- **PASS** — R-QA-01…09 CLOSED — PR readiness next — D2/D3 non autorisés.
+
+### PR readiness (cycle 13 — 2026-07-30)
+
+- Package prospectif 13 fichiers · une PR · 2 commits planifiés · **aucun** staging/commit/push/PR exécuté.
+- Rapport : [`04-pr-readiness-report.md`](./04-pr-readiness-report.md).
+- Verdict Cursor : **READY FOR PR** — actions Git soumises à GO Morris.
+
+## H. Frontières
+
+- Resolver opérationnel : **NON** (D2)
+- Bridge QualifyCycle : **NON** (D2)
+- Vertical-slice runtime : **NON**
+- UI / CreateCycle / LPS / epistemic : **NON**
+- method/** import runtime : **NON**
+
+## I. Risques et réserves
+
+D2 requis pour résolution orchestrée · D3 réserve Figma · process-local hors D1 · aucune CycleInstance · pas de preuve produit end-to-end.
+
+## J. Anti-claims
+
+Registry D1 ≠ mécanisme CKC complet · mapping ≠ résolution · export domaine ≠ exposition vertical-slice · tests unitaires ≠ validation produit · implementation ≠ PR readiness · D2/D3 non ouverts · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.
+
+## K. Verdict
+
+**Delivery / QA / correctif / revalidation :** historiques dans 01–03.
+
+**QA-G3 Morris :** PASS.
+
+**PR readiness (Cursor) :**
+
+```
+V3.1-D1 PR READINESS COMPLETE —
+READY FOR PR —
+QA-G3 PASS RECORDED —
+PR PACKAGE COMPLETE —
+COMMIT PUSH AND PR REQUIRE MORRIS GO —
+D2/D3 NOT AUTHORIZED
+```
+
+READY FOR PR ≠ PR créée. D2/D3 **non autorisés**.

---

# SECTION — Final verdict (pack)

```
V3.1-D1 DRAFT PR REMOTE REVIEW COMPLETE —
REMOTE DIFF VERIFIED —
REMOTE CI PASS —
NO ACTIONABLE REVIEW COMMENTS —
MINOR DOCUMENTATION RESERVE ACCEPTABLE AND EXPLICIT —
READY FOR MORRIS DECISION TO MARK PR READY FOR REVIEW —
MERGE NOT AUTHORIZED —
D2/D3 NOT AUTHORIZED
```

Gate suivant candidat :

```
GO MARK PR #296 READY FOR REVIEW SFIA STUDIO V3.1-D1 —
REMOTE DIFF AND CI VERIFIED —
MINOR DOCUMENTATION RESERVE ACCEPTED —
NO MERGE —
NO D2 —
NO UI —
NO CREATECYCLE
```

État Git final attendu / observé :
- branche Delivery · HEAD `e2e898405c0a555573187e04dd6c3de777595f19`
- origin/main `3e8a4374405dce98866e35fb60c5c7329701f191`
- 0 behind / 2 ahead
- working tree : `?? .tmp-sfia-review/` only
- PR #296 : OPEN draft=true merged=false · titre/body inchangés · aucun commentaire/review Cursor

Review pack verdict : **complete**
