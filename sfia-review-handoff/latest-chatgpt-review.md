# SFIA Review Pack — FULL

## Métadonnées
- Date/heure/fuseau : 2026-07-27 12:55:47 CEST (+0200)
- Cycle : 13 — PR readiness (compléments 7 DevOps, 8 Delivery, 9 QA, 15 Capitalisation)
- Profil SFIA : Critical
- Typologie : PR documentaire bornée / intégration finding de gouvernance
- Gate consommé : `GO OPEN PR FOR F-A6-PM-G01 MITIGATED FORMALIZATION — SFIA STUDIO V3-NATIVE`
- Workspace : `/Users/morris/Projects/sfia-workspace`
- Branche : `delivery/sfia-studio-control-tower-fast-track`
- HEAD local/distant : `c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf`
- origin/main : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- Workflow blob : `801a8759bb7440666799b95edf13f9ee6d9332f8`
- Status : `?? .tmp-sfia-review/` ; staged vide ; ops Git aucune ; ahead/behind upstream 0/0
- Handoff initial blob : `a37553384d4c76649d65be837af07066315972eb`
- PR OPEN avec ce head : aucune

## Sources / CKC
- Template / routing / operating model / guardrails
- CKC PR readiness : candidate ou absent — fallback template + handoff push validé
- Limite respectée : aucune PR créée car compare base/head élargi

## A. Contrôle critique du diff base/head

- merge-base : `32e5271842b9a344a7e292614675c27ea8ed941b`
- ahead/behind (`origin/main...head`) left-right : `157	7` (main +157 ; head +7)
- GitHub compare : status=`diverged` ahead_by=7 behind_by=157 total_commits=7
- Fichiers git name-status : 313
- A/M/D : 288/25/0
- GitHub files_count : 300 ; additions≈19102 ; deletions≈86

### Commits propres au head (pas dans main)
```
c895a96 docs(sfia-studio): formalize F-A6 as mitigated after M1
bb3c9e2 docs(sfia-studio): document control tower and D1 delivery
c27af7f test(sfia-studio): cover control tower, OPS1 and D1 workflows
73783cc feat(sfia-studio): add human-confirmed bounded project mutation
bb5e557 feat(sfia-studio): add AI-guided intake proposal and context matching
1fd97e8 feat(sfia-studio): add D1 project workspace and cockpit foundation
18dcf2a feat(sfia-studio): add control tower tools and canonical context engine
```

### Diff stat (fin)
```
 .../schemas/decision/human-decision.schema.json    |  54 ++
 .../schemas/policy/enforcement-rule.schema.json    |  88 +++
 .../schemas/project/project-trajectory.schema.json |  41 ++
 .../schemas/project/project.schema.json            |  70 ++
 .../project/workspace-reference.schema.json        |  19 +
 .../schemas/review/cycle-review-bundle.schema.json | 154 ++++
 .../schemas/review/review-manifest.schema.json     |  56 ++
 313 files changed, 23321 insertions(+), 86 deletions(-)
```

### Name-status (échantillon)
```
A	projects/sfia-studio/66-control-tower-product-framing.md
A	projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
A	projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
A	projects/sfia-studio/69-control-tower-options-and-decision-pack.md
A	projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
A	projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
A	projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
A	projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
A	projects/sfia-studio/74-sfia-canonical-context-engine-report.md
M	projects/sfia-studio/README.md
A	projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx
A	projects/sfia-studio/app/__tests__/d1/intake-c2.test.ts
A	projects/sfia-studio/app/__tests__/d1/intake-c3.test.ts
A	projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
A	projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
M	projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
A	projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
A	projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
M	projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
M	projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
A	projects/sfia-studio/app/__tests__/ops1/sfia/canonicalEngine.test.ts
M	projects/sfia-studio/app/app/nouvelle-demande/page.tsx
A	projects/sfia-studio/app/app/ops1/nouvelle-demande/page.tsx
A	projects/sfia-studio/app/app/projects/[id]/page.tsx
A	projects/sfia-studio/app/app/projects/new/page.tsx
A	projects/sfia-studio/app/app/workspace/page.tsx
M	projects/sfia-studio/app/components/shell/UtilityRail.tsx
A	projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
A	projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts
A	projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts
A	projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts
A	projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts
A	projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
M	projects/sfia-studio/app/e2e/increment-a.spec.ts
M	projects/sfia-studio/app/e2e/increment-c.spec.ts
M	projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
M	projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
M	projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
M	projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
M	projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
```

### Critère single-file
- Attendu : 1 fichier = doc 24 ; delta Capitalisation F-A6 + ligne findings
- Observé : **313 fichiers** (control tower, D1, OPS1, schemas, tests, README, etc.)
- Suppressions `D` vs main dans name-status : 0
- Verdict critère : **FAIL — EXPANDED DIFF**

## B. Contenu F-A6 sur le head (commit valide ; PR non créée)

```markdown
### Capitalisation F-A6-PM-G01

| Champ | Valeur |
|------|--------|
| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
| CLOSED | **NON** |
| Sévérité initiale | **Major** (gouvernance) — conservée |
| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
| Option A COMPLETE | **NON** (D-M1-05) |
| T-A7 | **NON OUVERTE** (D-M1-06) |

#### Critères historiques de clôture (conservés — non convertis en CLOSED)

| État | Qualification historique (doc 24) |
|------|----------------|
| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |

#### Preuves factuelles de mitigation (M1)

| Preuve | Référence |
|--------|-----------|
| P3 intégré sur `main` | PR #270 |
| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
| Branches et worktrees de preuve | supprimés |
| Preuves GitHub | runs, checks et logs conservés |
| Bypass | non utilisé |

#### Réserves conservées

- finding **non CLOSED** ;
- document 32 obsolète (correction sous gate séparé) ;
- capitalisation / REX M1 encore requise (gate séparé) ;
- rollback non testé ;
- bypass non testé ;
- F-CI-* inchangés ;
- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
- Option A non COMPLETE ;
- T-A7 non ouverte.

---
```

### Diff métier fichier 24 seul vs origin/main (contraste)
Delta mono-fichier désiré — **≠** diff PR GitHub `main...head`.

```diff
--- .tmp-sfia-review/m1-fa6-pr/main-doc24.md	2026-07-27 12:55:47
+++ .tmp-sfia-review/m1-fa6-pr/head-doc24.md	2026-07-27 12:55:47
@@ -286,11 +286,54 @@

 ### Capitalisation F-A6-PM-G01

-| État | Qualification |
-|------|----------------|
-| Mitigation | **préparée** (workflow + gouvernance documentée) |
-| Clos | **NON** — exige run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks appliqués sous GO Morris |
+| Champ | Valeur |
+|------|--------|
+| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
+| CLOSED | **NON** |
+| Sévérité initiale | **Major** (gouvernance) — conservée |
+| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
+| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
+| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
+| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
+| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
+| Option A COMPLETE | **NON** (D-M1-05) |
+| T-A7 | **NON OUVERTE** (D-M1-06) |

+#### Critères historiques de clôture (conservés — non convertis en CLOSED)
+
+| État | Qualification historique (doc 24) |
+|------|----------------|
+| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
+| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |
+
+#### Preuves factuelles de mitigation (M1)
+
+| Preuve | Référence |
+|--------|-----------|
+| P3 intégré sur `main` | PR #270 |
+| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
+| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
+| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
+| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
+| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
+| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
+| Branches et worktrees de preuve | supprimés |
+| Preuves GitHub | runs, checks et logs conservés |
+| Bypass | non utilisé |
+
+#### Réserves conservées
+
+- finding **non CLOSED** ;
+- document 32 obsolète (correction sous gate séparé) ;
+- capitalisation / REX M1 encore requise (gate séparé) ;
+- rollback non testé ;
+- bypass non testé ;
+- F-CI-* inchangés ;
+- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
+- Option A non COMPLETE ;
+- T-A7 non ouverte.
+
 ---

 ## 12. Proposition branch protection / required checks
@@ -339,7 +382,7 @@

 | ID | Sévérité | Description | Action ce cycle |
 |----|----------|-------------|-----------------|
-| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | Mitigation **préparée** · **non clos** |
+| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
 | F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
 | F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
 | F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
```

## C. PR existantes
- #254 MERGED (historique)
- Aucune PR OPEN sur le head actuel

## D–E. Création PR
- **NON EXÉCUTÉE**
- Raison : compare base/head produit un diff élargi (historique branche vs main)
- Aucune tentative de rebase/merge/cherry-pick/nouvelle branche/nouveau commit

## G. Checks
- NOT OBSERVED — aucune PR créée

## État final
- PR : non créée
- Branche distante inchangée : `c895a96…`
- Aucun nouveau commit / push projet / merge
- origin/main / workflow / ruleset inchangés ({'enforcement': 'active', 'id': 19798462, 'updated_at': '2026-07-27T09:31:28.849+02:00'})
- F-A6 sur branche : MITIGATED NOT CLOSED
- F-CI / doc32 / Option A / T-A7 : inchangés

## Actions non exécutées
- création PR
- nouveau commit / amend / rebase / merge / cherry-pick / reset / force push
- modification fichier 24 / branche / base
- CLOSED F-A6 ; F-CI ; doc 32 ; REX ; Option A COMPLETE ; T-A7 ; workflow/ruleset

## Réserves / décision Morris requise
- La branche diverge de `main` (behind 157 / ahead 7).
- Une PR vers `main` réexposerait ~300 fichiers, pas seulement F-A6.
- Isolation hors gate : branche neuve depuis `main` + cherry-pick du commit F-A6 — **non autorisé ici**.

## Gates suivants candidats (NOT CONSUMED — arbitrage Morris)
- `GO ASSESS PR READINESS FOR F-A6-PM-G01 MITIGATED FORMALIZATION — SFIA STUDIO V3-NATIVE`
- `GO CORRECT OPTION A DOCUMENT 32 POST-P3 AND M1 — SFIA STUDIO V3-NATIVE`
- `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE`

## Anti-claims
- PR ouverte ≠ PR READY
- diff du commit ≠ nécessairement diff de la PR
- MITIGATED ≠ CLOSED
- push branche ≠ PR
- handoff publié ≠ merge projet

## Verdict
`SFIA STUDIO V3-NATIVE F-A6-PM-G01 PR NOT CREATED — BRANCH HISTORY PRODUCES EXPANDED DIFF — MORRIS DECISION REQUIRED`

## Handoff Git
- décision : required
- mode : publish-in-cycle
- commit attendu : `docs(review-handoff): record F-A6 MITIGATED PR opening`
- note : handoff documente le STOP (aucune PR créée)
