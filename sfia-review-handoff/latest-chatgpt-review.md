# SFIA Review Pack Full — Ensemble 05 Réconciliation technique pré-intégration

**Date:** 2026-11-18 20:11 CET  
**Cycle:** 9 — QA / validation  
**Profil:** Standard (+ contrôle ciblé sécurité/ACL)  
**Typologie:** RUN — réconciliation et qualification pré-intégration  
**GO Morris:** EXPLICITE — audit technique read-only + handoff L3  
**Exécution:** lecture seule — **aucune modification produit / RECETTE / DB**  
**Push autorisé:** handoff L3 uniquement  
**CKC:** `pilots/04-qa-validation.md` (guidance expérimentale, non normative)

## Verdict final unique

`ENSEMBLE 05 — TECHNICAL RECONCILIATION PASS WITH RESERVES`

---

## 1. Périmètre et questions tranchées

| # | Question | Réponse courte |
|---|---|---|
| 1 | Candidat Git = code validé RECETTE ? | **OUI** — `5c94c867` / tree `74fbf2b9` / build `IEINNuPl0bHWJOWkh0ZhG` servi |
| 2 | Données/droits RECETTE intègres ? | **État courant cohérent** ; restauration ACL historique **non prouvée indépendamment** → gap de preuve |
| 3 | Preuves tests suffisantes pour périmètre déclaré ? | **OUI pour UAT visuelle 01–08** ; **NON** pour 88 oracles Travail / a11y exhaustif |
| 4 | Docs D1 ↔ réalisation ? | **Cohérents sur les faits UAT/candidat** ; docs absents du tree produit ; `delivery-history` diverge de forme |

Aucun GO automatique de push produit, PR, merge, Gate C, STABLE ou ADOPTED.

---

## 2. Git Truth Check local

```
REPO=mcleland147/sfia-workspace
TOP=/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116
BRANCH=sfia/next-ml4d-ensemble05-composition-recette-candidate
HEAD=1f40fe4fffb8618e3d9cd2e3d34bbf400c7996f2
HEAD_TREE=226600acbdeed0bb56e9920ae69034351a60ef09
ORIGIN_MAIN=997d4c4e8204993de7107552898c8cc08cd3b0ed
CANDIDATE=5c94c86737f0965c71a7e058e3f1e45ff4415024
CANDIDATE_TREE=74fbf2b90f95951d5049efc5a854ad213fb0f47f
CANDIDATE_PARENT=811f9b41b0e0307188f12990654a8325df2cc3f7
DOCS_BRANCH=docs/next-ml4d-registre-revues-20261116@6b556c1753f3e841cd83eecfdd39f2f4df57778f
PRIOR_HANDOFF=dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d
ENV01_BLOB_MAIN=14b61f0d1265cf85fcca09b028dd09bd8c71597f
VERSIONING_BLOB_MAIN=8bc93e0fafac0f981c446e978a37f5f93d183875
MERGE_BASE(main,candidate)=997d4c4e (= origin/main)
main_subset_candidate=YES
candidate_subset_HEAD=YES
commits_on_main_not_in_candidate=0
```

### RECETTE runtime (observé)

```
LaunchAgent=com.sfia.studio.next.recette.ml4d-ux004
program=…/ensemble05-recette-build-5c94c867/start-recette-ensemble05-5c94c867.sh
SOURCE_SHA.txt=5c94c86737f0965c71a7e058e3f1e45ff4415024
BUILD_ID.txt=IEINNuPl0bHWJOWkh0ZhG
HTML_COMMENT=<!--IEINNuPl0bHWJOWkh0ZhG-->
URL=http://127.0.0.1:3200
```

**Correspondance candidat ↔ RECETTE : CONFIRMÉE.**

### Worktree / dirty (non mutés)

- HEAD = candidat + **1 commit docs evidence** (`1f40fe4f`) **non servi** en RECETTE.
- Modifications locales unstaged/untracked : captures `runtime-*.png` + artefacts evidence hors commit — **hors périmètre d'intégration produit**.
- Worktree RECETTE détaché sur `5c94c867`.

---

## 3. Contrôle A — Intégrité Git / cartographie d'intégration

### 3.1 Chaîne d'ascendance (extrait clé Ensemble 05)

```
origin/main 997d4c4e
  … (UX-003, UX-004, Sas Nora, Ensemble 04) …
  ba1e55ec feat(ensemble05): freeze Nora adaptive composition candidate for RECETTE
  cbfc4577 fix(ensemble05): raise sequence detail limit to 5000 and harden Nora OBS
  90c3e59f / e25416cc UAT-03 build+docs
  bd3854ac / 7f0a403d UX-01–07 fix+docs
  811f9b41 exclusive parallel classification + UX-01 optical
  5c94c867 UAT-07 fixture role fix   ← CANDIDAT RECETTE
  1f40fe4f docs UX-05/01 cutover evidence   ← HEAD local, non servi
```

### 3.2 Commits `origin/main..5c94c867` (40)

```
5c94c867 fix(ensemble05): use text role recommendation in UAT-07 fixture
811f9b41 fix(ensemble05): exclusive parallel classification for UAT-07 and UX-01 optical align
7f0a403d docs(ensemble05): record UX-01–07 RECETTE cutover evidence
bd3854ac fix(ensemble05): apply UX-01–07 composition correctives for RECETTE
e25416cc docs(ensemble05): record UAT-03 fix RECETTE cutover evidence
90c3e59f build(ensemble05): keep UAT-03 evidence artifacts out of Next typecheck
cbfc4577 fix(ensemble05): raise sequence detail limit to 5000 and harden Nora OBS
ba1e55ec feat(ensemble05): freeze Nora adaptive composition candidate for RECETTE
a783f014 docs(e05): pin R05 retest plan to RECETTE e224d627 / MKmBUvdIXyydv_DpUTGZi.
e224d627 fix(nora): clear cognitive UNKNOWN pending without métier reconcile loop.
208aaa40 test(nora): lock D3 structured-output strict schema audit oracles
3f7863ba fix(nora): restore LIVE structured output by typing visualComposition schema
34a5e102 docs(e05): stabilize freeze identity references without self-moving tip SHA
51422a1c docs(e05): align as-built and manifest with freeze tip identity
8775d647 docs(e05): record frozen candidate commit and tree SHAs in RECETTE manifest
1a820ad4 feat(e05): freeze Travail Nora visual composition candidate for RECETTE prep
cb638613 docs(next): fill draft-reconcile tip SHA in RECETTE prep manifest
4ca69c51 docs(next): record draft-reconcile tip SHA in RECETTE prep manifest
383efec9 fix(next): preserve free composer draft across choice reconciliation
2b0d7a78 docs(next): record Ensemble 05 freeze SHA in RECETTE prep manifest
342f0bbb feat(next): freeze Ensemble 05 Travail avec Nora candidate
984d77a3 fix(next): restore pending reconcile geometry and mobile nav proof (Ensemble 04)
351aea96 fix(next): align Travail vertical layout with Figma 652 composition
a30e75c7 fix(next): restore Ensemble 04 project-space visual fidelity to Figma 652
20fb41ba test(next): consolidate Ensemble 04 T13/T16 proofs and RECETTE plan
660ff424 feat(next): converge project space shell to ML4D Figma 652 frames
bd8e1672 fix(next): consolidate Sas Nora R1 durable intention and R2 clarifications
6798219f fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections
ec7405f3 fix(next): restore D2 canCreate as sole Sas create CTA gate
e52cec0d fix(next): align Sas Nora UX composition to Figma 607 frames
16f45a91 docs(next): record Sas Nora RECETTE cutover for cd091385
cd091385 fix(next): consolidate Sas Nora create-name, multi-turn proof, and PATCH honesty
acb5ce65 fix(next): harden Sas Nora PATCH, structured maturation, and multi-turn proof
1dfc79ff fix(next): correct Sas Nora concurrency, projection, maturation, and sas chrome
596718b1 feat(next): integrate ML4D Sas Nora living projection and create continuity
b05dacf4 fix(next): UX-004 D2 honest UNCERTAIN and shared single-flight
fb0ac5c8 fix(next): UX-004 open-preparation action and route-aware breadcrumb
bc878568 feat(next): implement ML4D UX-004 portfolio and personal shell
a77a3a2b fix(next): harden UX-003 entry errors and gate test login for RECETTE
31f23858 feat(next): implement ML4D UX-003 unified Studio entry screens
```

### 3.3 Diffstat vs main (tail)

```
 .../tests/unit/ux-correctives-ensemble05.test.ts   |  304 ++
 .../web/tests/unit/visual-grammar-c1-c2.test.ts    |  108 +
 .../web/tests/unit/w3-graph-layouts.test.ts        |   25 +
 projects/sfia-studio-next/web/tsconfig.json        |    2 +-
 258 files changed, 35077 insertions(+), 1290 deletions(-)
```

**258 files / +35077 / −1290** (inclut preuves/docs/assets UX-003→E05).

### 3.4 Fichiers produit code/tests/deps

```
M	projects/sfia-studio-next/web/package-lock.json
M	projects/sfia-studio-next/web/package.json
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
A	projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
M	projects/sfia-studio-next/web/src/app/globals.css
M	projects/sfia-studio-next/web/src/app/login/page.tsx
M	projects/sfia-studio-next/web/src/app/page.tsx
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/entry/UnifiedStudioEntry.tsx
A	projects/sfia-studio-next/web/src/components/entry/unified-entry-variant.ts
A	projects/sfia-studio-next/web/src/components/entry/unified-studio-entry.css
A	projects/sfia-studio-next/web/src/components/figma/E2eCompositionThrowProbe.tsx
A	projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
A	projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
A	projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
A	projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
M	projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectUnavailable.tsx
A	projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSequence.tsx
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/editorial-title.ts
A	projects/sfia-studio-next/web/src/components/figma/nora-composition/index.ts
A	projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
A	projects/sfia-studio-next/web/src/components/figma/sas-visual-fixtures.ts
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/shell/ProjectSpaceContext.tsx
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
A	projects/sfia-studio-next/web/src/components/shell/studio-shell.css
A	projects/sfia-studio-next/web/src/db/migrations/013_preparation_projection.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
A	projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/admission.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/derive-text.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/fidelity.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/index.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/topology.ts
A	projects/sfia-studio-next/web/src/domains/conversation/directed-layout/candidate-elk.ts
A	projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
A	projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elkjs-shim.d.ts
A	projects/sfia-studio-next/web/src/domains/conversation/directed-layout/index.ts
A	projects/sfia-studio-next/web/src/domains/conversation/directed-layout/types.ts
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
A	projects/sfia-studio-next/web/src/domains/conversation/provider-simulated-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
A	projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
A	projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
M	projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/src/domains/preparation/projection.ts
M	projects/sfia-studio-next/web/src/domains/preparation/service.ts
A	projects/sfia-studio-next/web/src/hooks/useNoraThreadScroll.ts
M	projects/sfia-studio-next/web/src/lib/auth.ts
M	projects/sfia-studio-next/web/src/lib/observability.ts
A	projects/sfia-studio-next/web/src/lib/open-preparation.ts
M	projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble04-cp01-cp02-correction.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble05-level-b-sim.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble05-live-bounded.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble05-r05-cognitive-recovery.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble05-uat07-ux05.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
M	projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux003-f2-measure.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux003-unified-entry.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux004-f2-measure.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
M	projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
M	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml2-turn-command.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/c2-adversarial-integrity.test.ts
A	projects/sfia-studio-next/web/tests/unit/c2-editorial-integrity-corrective.test.ts
A	projects/sfia-studio-next/web/tests/unit/c2-substance-exhaustiveness.test.ts
A	projects/sfia-studio-next/web/tests/unit/canonical-integrity-a7-a2.test.ts
A	projects/sfia-studio-next/web/tests/unit/canonical-sections-strategy-a.test.ts
A	projects/sfia-studio-next/web/tests/unit/composition-selection-discriminants.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversational-composition-admission.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts
A	projects/sfia-studio-next/web/tests/unit/directed-layout-candidate.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble05-visual-composition.test.ts
A	projects/sfia-studio-next/web/tests/unit/fixture-reply-a4-adapter-boundary.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
A	projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
A	projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
A	projects/sfia-studio-next/web/tests/unit/provider-simulated-level-b.test.ts
A	projects/sfia-studio-next/web/tests/unit/r1-r2-projection-consolidation.test.ts
A	projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
A	projects/sfia-studio-next/web/tests/unit/strategy-a-corrective-a1-a4.test.ts
A	projects/sfia-studio-next/web/tests/unit/studio-entry-capabilities.test.ts
M	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
A	projects/sfia-studio-next/web/tests/unit/uat03-sequence-detail-limit.test.ts
A	projects/sfia-studio-next/web/tests/unit/unified-entry-variant.test.ts
A	projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts
A	projects/sfia-studio-next/web/tests/unit/visual-grammar-c1-c2.test.ts
A	projects/sfia-studio-next/web/tests/unit/w3-graph-layouts.test.ts
```

### 3.5 À intégrer vs exclure / arbitrer

| Objet | Recommandation |
|---|---|
| Tree produit `5c94c867` | **Cible d'intégration produit** (= RECETTE) |
| Commit `1f40fe4f` | Optionnel docs-only ; non requis runtime |
| Branche docs `6b556c17` (11 fichiers D1) | Intégration documentaire **séparée** |
| Untracked/unstaged evidence locaux | **Exclure** |
| 40 commits UX-003…E05 | **Arbitrage Morris** : stack complète vs découpe |

### 3.6 Dépendances / conflits

- Ajout `elkjs@^0.10.2`.
- `origin/main` ancêtre strict → 0 commits main manquants.
- Risque = taille PR + dette ESLint/TS préexistante + divergence `delivery-history`.

---

## 4. Contrôle B — ACL / données RECETTE (READ ONLY)

### Méthode

`BEGIN READ ONLY;` + `SELECT` via docker exec — **aucune écriture**.

### État courant (objets UAT-07)

| Objet | owner | label |
|---|---|---|
| project `proj_d3b5272f-…` | `pilot_98a7a89e-…` | mcleland147 |
| conversation `conv_f9b3bf1d-…` | idem | mcleland147 |
| preparation `prep_b79f8c62-…` | idem | mcleland147 |
| turn_commands (16) | 100% idem | mcleland147 |
| residual Pilot A (DEV) | **0** | — |

Liens projet↔conversation↔préparation cohérents.

### Compteurs

projects 23 · messages 560 · conversations 196 · turn_commands 280.

### Verdict ACL

`ACL INTEGRITY NOT FULLY PROVEN — EVIDENCE GAP`

1. État **courant** cohérent (Morris, residual DEV=0).  
2. Manipulation temporaire déclarée (`05-smoke-acl-note.md`, handoff `dc9fd0ba`).  
3. Pas de snapshot owners pré-manipulation dans backups `ml4d-e05-*` inspectés.  
4. Restauration historique **non démontrée indépendamment** ; intégrité actuelle **vérifiée**.

Non bloquant pour une **revue** d'intégration si Morris accepte la réserve.

---

## 5. Contrôle C — Matrice des preuves (inventaire)

| Famille | Contexte | Résultat | Preuve |
|---|---|---|---|
| UNIT | candidat / suites E05 | PASS rapportés | vitest UX/ELK/UAT03/admission |
| Level-A fixtures | DEV/e2e | PASS | fixtures + e2e UAT07 |
| Level-B | campagnes antérieures | PASS rapporté | handoffs Level-B |
| BROWSER | DEV :3101 | PASS | ensemble05-uat07-ux05 |
| LIVE | borné historique | historiques | uat03-rootcause / live-bounded |
| RECETTE runtime | `5c94c867`/`IEINNu…` | PASS reload UAT-07 | post-cutover screenshots/json |
| Morris | RECETTE | Accepté avec réserves | registre v0.16 |

Ciblés : detail.max(5000) CONFORME · OBS CONFORME · 8 UAT USER ACCEPTED · parallèle BEHAVIOR PROVEN borné · reload borné · PG historique NON EXHAUSTIF.

**Aucun LIVE / redéploiement dans ce cycle.**

---

## 6. Contrôle D — Code / documentation D1

| Document D1 | docs@6b556c17 | candidat `5c94c867` |
|---|---|---|
| registre v0.16 + grammaire 01–05 + matrice v0.10 + dossier v0.2 + conception + contrat technique | OUI | **ABSENT** |
| delivery-history.md | OUI (rétrospective D1) | OUI (journal Cursor) — **formes divergentes** |

| Thème | Classification |
|---|---|
| D3 / admission / canonique / projection / React-ELK / classifyLanes / detail 5000 / OBS | CONFORME |
| C-01…C-22 hors UAT visuelle / 88 oracles | KNOWN GAP |
| Docs absents du tree produit | DOCUMENTATION GAP |
| delivery-history divergence | DOCUMENTATION GAP |
| ACL restore historique | NOT VERIFIED (hist.) / CONFORME (courant) |
| Responsive/a11y / PG historique | KNOWN GAP |

---

## 7. Registre des écarts

| ID | Sévérité | Bloquant intégration ? | Exit |
|---|---|---|---|
| R-01 ACL restore historique | M | Non (avec réserve) | Audit owners RO **ou** acceptation gap ; interdiction ACL temporaire RECETTE |
| R-02 Scope 40 commits | M | Arbitrage | Stack ML4D vs découpe E05 |
| R-03 Docs D1 hors produit | M | Non | Merge docs sous GO distinct |
| R-04 delivery-history diverge | L | Non | Consolider journal |
| R-05 a11y/responsive PARTIEL | M | Non pour UAT visu | Campagne ultérieure |
| R-06 PG historique NON EXHAUSTIF | M | Non si pas migration | Jeux historiques RO |
| R-07 Claims 88 oracles | H (claims) | **Oui pour claims globaux** | Réception bornée UAT |
| R-08 Dirty WT evidence | L | Non | Exclure du PR |
| R-09 HEAD `1f40fe4f` > candidat | L | Non | Intégrer `5c94c867` |
| R-10 Dette ESLint/TS | L | Non | Hors cycle |

UX-02…04/06/07 non rouverts.

---

## 8. Conditions de sortie / décisions Morris

1. Intégrer SHA **`5c94c867`**.  
2. Exclure dirt local.  
3. Accepter R-01 **ou** audit RO complémentaire.  
4. Trancher scope PR (R-02).  
5. Docs D1 séparés (R-03).  
6. Claims limités au corpus UAT visuelle — pas Gate C / ADOPTED / 88 oracles.

Décisions encore nécessaires : GO push/PR distinct ; scope ; ACL gap ; fusion docs ; non-confusion clôture globale.

---

## 9. Recommandation

**Proposer la revue d'intégration Git du candidat `5c94c867`**, réserves R-01…R-10 qualifiées, **sans** GO automatique de merge.

---

## 10. Absence de mutation (ce cycle)

Code non modifié · RECETTE non redéployée (`5c94c867` / `IEINNuPl0bHWJOWkh0ZhG`) · DB SELECT only · push L3 only.

---

## Ledger

| Contrôle | Résultat |
|---|---|
| Git Truth | PASS |
| Candidat = RECETTE | PASS |
| ACL courant | PASS |
| ACL restore historique | NOT FULLY PROVEN |
| Preuves UAT visuelle | PASS (inventaire) |
| Docs D1 | PASS WITH GAPS |
| Review Pack Full | THIS |
| L3 | NEXT |
