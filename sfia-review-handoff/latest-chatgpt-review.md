# SFIA Review Pack — F-A6 Closure PR #279 + CI Review (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 21:05:36 CEST (+0200)
- cycle: 13 PR readiness/review (+9 QA, 7 DevOps, 10 Sécurité, 14 Post-merge, 15 Capitalisation)
- profil: Critical
- typologie: PR-REVIEW / CI / DOC / GOVERNANCE / FINDING / CLOSURE
- gate consommé: `GO REVIEW F-A6-PM-G01 CLOSURE PR AND CI — SFIA STUDIO V3-NATIVE`
- repo: `mcleland147/sfia-workspace`
- worktree: `/Users/morris/Projects/sfia-workspace-fa6-closure`
- branche: `docs/sfia-studio-fa6-closure`
- PR: #279 — https://github.com/mcleland147/sfia-workspace/pull/279
- handoff initial: HANDOFF_BLOB=1f3a27aae9bb63e7d6741228ed3f2816538812b0
- note: whitespace-only lines normalisées pour handoff check

## 1. Truth
```
pwd=/Users/morris/Projects/sfia-workspace-fa6-closure
toplevel=/Users/morris/Projects/sfia-workspace-fa6-closure
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=docs/sfia-studio-fa6-closure
HEAD=77271faac978b65fa10b912986eb9b6687ee6636
origin_head=77271faac978b65fa10b912986eb9b6687ee6636
origin_main=df9d9c6e688be367f54aa9376e67543eab80533a
merge_base=df9d9c6e688be367f54aa9376e67543eab80533a
ahead_behind=0	2
## docs/sfia-studio-fa6-closure...origin/docs/sfia-studio-fa6-closure
diff_stat:
cached:
untracked:
active_ops:
```

## 2. Main courant
```
origin_main=df9d9c6e688be367f54aa9376e67543eab80533a
creation_base=df9d9c6e688be367f54aa9376e67543eab80533a
new_commits_on_main:
doc24_changed_on_main:
workflow_changed:
```
Cas: **main inchangé** vs base de création.

## 3. PR metadata
```json
{
  "additions": 102,
  "assignees": [],
  "author": {
    "id": "U_kgDOEZ3YIw",
    "is_bot": false,
    "login": "mcleland147",
    "name": ""
  },
  "autoMergeRequest": null,
  "baseRefName": "main",
  "baseRefOid": "df9d9c6e688be367f54aa9376e67543eab80533a",
  "changedFiles": 1,
  "comments": [],
  "commits": [
    {
      "authoredDate": "2026-07-27T18:16:22Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-07-27T18:16:22Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "docs(sfia-studio): close F-A6 after M1 governance proofs",
      "oid": "a13759d5420d2e1d9915ab05a4dbb3872d85e8a0"
    },
    {
      "authoredDate": "2026-07-27T18:43:07Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-07-27T18:43:07Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "docs(sfia-studio): align F-A6 branch protection decision status",
      "oid": "77271faac978b65fa10b912986eb9b6687ee6636"
    }
  ],
  "createdAt": "2026-07-27T18:50:42Z",
  "deletions": 39,
  "files": [
    {
      "path": "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md",
      "additions": 102,
      "deletions": 39,
      "changeType": "MODIFIED"
    }
  ],
  "headRefName": "docs/sfia-studio-fa6-closure",
  "headRefOid": "77271faac978b65fa10b912986eb9b6687ee6636",
  "isDraft": false,
  "labels": [],
  "mergeStateStatus": "CLEAN",
  "mergeable": "MERGEABLE",
  "mergedAt": null,
  "number": 279,
  "reviewRequests": [],
  "reviews": [],
  "state": "OPEN",
  "statusCheckRollup": [
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-27T18:50:53Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30295595831/job/90075668233",
      "name": "Detect SFIA Studio changes",
      "startedAt": "2026-07-27T18:50:48Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    },
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-27T18:52:23Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30295595831/job/90075695222",
      "name": "Build and validate SFIA Studio",
      "startedAt": "2026-07-27T18:51:02Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    },
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-27T18:52:28Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30295595831/job/90076087219",
      "name": "SFIA Studio Required Gate",
      "startedAt": "2026-07-27T18:52:26Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    }
  ],
  "title": "docs(sfia-studio): close F-A6 after M1 governance proofs",
  "updatedAt": "2026-07-27T18:50:42Z",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/279"
}
```

### Titre
`docs(sfia-studio): close F-A6 after M1 governance proofs`

### Corps complet
```markdown
## Objectif

Formaliser sur main, via le document canonique 24, la décision Morris de clôture du finding F-A6-PM-G01, avec alignement cohérent du statut Branch protection / required checks au §17.

## Gates Morris

- GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE
- GO CORRECT F-A6-PM-G01 CLOSURE DOCUMENT §17 PROPOSED BULLET THEN RE-RUN PR READINESS — SFIA STUDIO V3-NATIVE
- GO PUBLISH F-A6-PM-G01 CLOSURE BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE

## Problème initial

- merge #267 sans revue PR/CI formelle ;
- absence de CI SFIA Studio observable ;
- absence de contrôle de merge démontré.

## Décision

F-A6-PM-G01 est formalisé :

CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED

Cette clôture concerne exclusivement le problème initial F-A6.

## Critères et preuves

- run GitHub et gouvernance PR réelle prouvés ;
- required check SFIA Studio Required Gate appliqué via ruleset 19798462 ;
- PR invalide bloquée et recovery validée ;
- merges gouvernés et CI post-merge validés ;
- rollback du ruleset restauré à l’identique en 1 seconde ;
- bypass explicite testé via PR #277, sans --admin ;
- revert normal via PR #278 ;
- pollution bornée à 173 secondes ;
- diff net restauré ;
- document REX M1 disponible.

## Correction documentaire §17

Le statut Branch protection / required checks est désormais présenté comme APPLIED via M1.

L’ancien état PROPOSED — NOT APPLIED est conservé uniquement comme état historique supersédé.

## Périmètre

- 1 fichier :
  projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
- 2 commits locaux :
  - a13759d5420d2e1d9915ab05a4dbb3872d85e8a0
  - 77271faac978b65fa10b912986eb9b6687ee6636

## Gouvernance conservée

- hardening loose distinct ;
- Option A non COMPLETE ;
- T-A7 non ouverte ;
- D1–D7 NOT DECIDED ;
- ruleset inchangé ;
- aucune suppression automatique de branche.

## Validations

- PR readiness rejouée : PASS ;
- 0 contradiction réelle ;
- git diff --check conforme ;
- références SHA, runs et ruleset recoupées ;
- worktree propre ;
- HEAD publié exact.

## Stratégie de merge

H2 — squash est recommandée, mais non décidée dans ce cycle.

Un GO Morris de review PR/CI puis un GO de merge distincts sont requis.

## Post-merge

Review post-merge obligatoire.

Aucune suppression de branche ou worktree sans GO Morris séparé.
```
Qualification titre/corps: **conforme**

## 4. Commits / fichiers
- commits: `a13759d5420d2e1d9915ab05a4dbb3872d85e8a0`, `77271faac978b65fa10b912986eb9b6687ee6636`
- changed files: 1
- additions/deletions: 102 / 39
- blob: `7abb5dd9015269c9c57f36019d52094c2c853518`

## 5. Diff distant complet
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
index f62ff9c3..7abb5dd9 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
@@ -12,9 +12,9 @@
 | **Branche delivery** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` (locale, **aucun upstream**) |
 | **Worktree delivery** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
 | **Handoff source** | blob `69257aebdef7e351fb391d25447e5e92504f87ed` · Option F |
-| **Finding capitalisé** | **F-A6-PM-G01** — mitigation **préparée**, **non clos** |
-| **CI GitHub run** | **NON prouvé** |
-| **Branch protection / required checks** | **PROPOSED — NOT APPLIED — MORRIS GO REQUIRED** |
+| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |
+| **CI GitHub run** | **prouvée** (M1 + post-merge ; voir Capitalisation F-A6-PM-G01) |
+| **Branch protection / required checks** | **APPLIED** via ruleset M1 `19798462` (état antérieur de préparation : PROPOSED — supersédé) |
 | **T-A6 COMPLETE** | **NON** |
 | **Option A COMPLETE** | **NON** |
 | **T-A7** | **NON ouvert** |
@@ -288,59 +288,116 @@ Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Stud

 | Champ | Valeur |
 |------|--------|
-| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
-| CLOSED | **NON** |
-| Sévérité initiale | **Major** (gouvernance) — conservée |
-| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
+| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |
+| CLOSED | **OUI** |
+| Sévérité initiale | **Major** (gouvernance) — conservée comme information historique |
+| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — **objet exclusif** de la clôture |
 | Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
-| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
-| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
+| Date/heure clôture | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
+| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |
+| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |
+| Décision Morris de clôture | `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
 | M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
-| Option A COMPLETE | **NON** (D-M1-05) |
-| T-A7 | **NON OUVERTE** (D-M1-06) |
+| Option A COMPLETE | **NON** (D-M1-05) — inchangé |
+| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |

-#### Critères historiques de clôture (conservés — non convertis en CLOSED)
+#### Décision Morris de clôture

-| État | Qualification historique (doc 24) |
-|------|----------------|
-| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
-| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |
+| Champ | Valeur |
+|------|--------|
+| Décision validée | F-A6-PM-G01 = **CLOSED** |
+| Autorité | Morris — gate `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` |
+| Objet exact | traitement du problème initial (#267 sans review PR/CI formelle ; absence de CI SFIA Studio observable ; absence de contrôle de merge démontré) |
+| Date/heure/fuseau | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
+| Preuves déterminantes | required gate path-aware actif ; #272 hors Studio PASS ; #273 BLOCKED + recovery ; #275/#276 merges + CI post-merge ; rollback ruleset restore identique (1 s) ; #277 bypass explicite REST sans `--admin` ; #278 revert normal + CI post-revert SUCCESS ; pollution 173 s ; diff net vide ; ruleset `19798462` actif inchangé |
+| Condition technique restante | **aucune** pour le problème initial F-A6 |
+| Hardening loose | **distinct** — non absorbé par cette clôture ; aucune décision de durcissement ici |
+| Intégration Git canonique | formalisation **locale** sur branche `docs/sfia-studio-fa6-closure` ; `main` reste inchangé jusqu’à PR/merge futurs |
+
+#### Critères historiques de clôture (tous satisfaits)
+
+| Critère | Statut |
+|---------|--------|
+| Run GitHub prouvé | **satisfait** |
+| Gouvernance appliquée sur PR réelle | **satisfait** |
+| Required checks appliqués | **satisfait** |
+| Blocage d’une PR invalide | **satisfait** |
+| Recovery validée | **satisfait** |
+| Post-merge validé | **satisfait** |
+| Rollback validé | **satisfait** |
+| Bypass qualifié | **satisfait** |
+| Contrôle actif sur `main` | **satisfait** |
+| Documentation et REX disponibles | **satisfait** |
+
+État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.

-#### Preuves factuelles de mitigation (M1)
+#### Preuves factuelles (mitigation M1 + clôture)

 | Preuve | Référence |
 |--------|-----------|
 | P3 intégré sur `main` | PR #270 |
-| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Workflow blob (référence historique M1) | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
 | Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
 | Required check | `SFIA Studio Required Gate` — integration ID `15368` |
 | Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
 | Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
 | Preuve Studio recovery PASS | PR #273 — run `30248480927` |
 | PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
-| Branches et worktrees de preuve | supprimés |
+| Formalisation MITIGATED (antérieure) | PR #274 |
+| Alignement document 32 | PR #275 — squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| REX M1 intégré | PR #276 — squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` — doc `33` blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` |
+| Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
+| Bypass comportemental | PR #277 — run `30290065655` (Trailing whitespace → Required Gate failure) ; merge normal bloqué ; bypass REST explicite acteur ruleset (sans `--admin`) — squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` |
+| Revert normal | PR #278 — run `30290283916` SUCCESS ; squash `df9d9c6e688be367f54aa9376e67543eab80533a` (sans bypass) |
+| CI post-revert | run `30290479092` SUCCESS |
+| Pollution bornée | **173 s** ; diff net `49f2edfa…`…`df9d9c6…` **vide** ; fichier probe absent |
+| État final `main` (au moment de la formalisation) | `df9d9c6e688be367f54aa9376e67543eab80533a` |
 | Preuves GitHub | runs, checks et logs conservés |
-| Bypass | non utilisé |

-#### Réserves conservées
+#### Réserves F-A6 devenues obsolètes (retirées)
+
+Les items suivants **ne sont plus** des réserves ouvertes de F-A6 :
+
+- finding non CLOSED ;
+- document 32 obsolète (corrigé via PR #275) ;
+- capitalisation / REX M1 encore requise (intégré via PR #276) ;
+- rollback non testé (prouvé) ;
+- bypass non testé (prouvé comportementalement).
+
+#### Sujets distincts non bloquants après clôture

-- finding **non CLOSED** ;
-- document 32 obsolète (correction sous gate séparé) ;
-- capitalisation / REX M1 encore requise (gate séparé) ;
-- rollback non testé ;
-- bypass non testé ;
-- F-CI-* inchangés ;
-- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
+Ces sujets **ne rouvrent pas** F-A6. Ils relèvent d’un futur cycle de hardening, d’un backlog, ou d’un finding distinct. **Aucune** décision de durcissement n’est prise ici.
+
+- configuration M1 loose : approvals = `0` ; strict up-to-date = `false` ; conversation resolution = `false` ;
+- bypass actor Morris conservé (mode `pull_request`) — capacité désormais **qualifiée**, non recommandée comme méthode normale ;
+- auditabilité organisationnelle limitée (audit log org non accessible dans les cycles de preuve) ;
+- traces Git permanentes du probe/revert (#277/#278) ;
+- findings F-CI-* inchangés ;
 - Option A non COMPLETE ;
-- T-A7 non ouverte.
+- T-A7 non ouverte ;
+- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).
+
+#### Anti-claims de clôture
+
+- F-A6 CLOSED ≠ Option A COMPLETE ;
+- F-A6 CLOSED ≠ T-A7 OPEN ;
+- F-A6 CLOSED ≠ ruleset hardened ;
+- F-A6 CLOSED ≠ bypass recommandé ;
+- F-A6 CLOSED ≠ production-ready ;
+- F-A6 CLOSED ≠ D1–D7 décidées ;
+- clôture documentaire locale ≠ intégration sur `main` ;
+- commit local ≠ PR ;
+- PR future ≠ merge.

 ---

 ## 12. Proposition branch protection / required checks

-**Statut :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED`
+**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.
+
+**État actuel (post-M1) :** ruleset `19798462` (`SFIA Studio Main Required Gate — M1`) **actif** sur `refs/heads/main` ; required check `SFIA Studio Required Gate` / integration `15368`. La proposition ci-dessous reste la trace du cycle de préparation ; elle ne contredit plus l’application M1 ultérieure.

-Ce cycle **n’a modifié aucun** ruleset / branch protection distant.
+Ce cycle de préparation **n’avait modifié aucun** ruleset / branch protection distant (l’application M1 relève de cycles postérieurs).

 | Élément | Proposition |
 |---------|-------------|
@@ -382,7 +439,7 @@ Ce cycle **n’a modifié aucun** ruleset / branch protection distant.

 | ID | Sévérité | Description | Action ce cycle |
 |----|----------|-------------|-----------------|
-| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
+| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |
 | F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
 | F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
 | F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
@@ -421,7 +478,7 @@ Le workflow CI **ne ferme** aucune réserve métier/architecture · **ne débloq
 - Inclure Vitest global + 3 tests modeled + scans légers.
 - Exclure Playwright e2e de la CI candidate.
 - Documenter gouvernance H1/H2/H3 + stop conditions + anti-claims.
-- Branch protection / required checks : **PROPOSED — NOT APPLIED**.
+- Branch protection / required checks : **APPLIED** via M1 — état historique de préparation `PROPOSED — NOT APPLIED` supersédé.

 ### Candidates (Morris)

@@ -431,13 +488,13 @@ Le workflow CI **ne ferme** aucune réserve métier/architecture · **ne débloq
 - Traiter `npm audit` (cycle deps séparé).
 - Politique review obligatoire / CODEOWNERS.

-### Morris requises (non créées ici)
+### Morris requises (historique de préparation — statut actualisé)

-- GO publish + PR ;
-- GO review PR and CI ;
-- GO apply branch protection / required checks ;
-- GO merge (avec H1/H2/H3 explicite) ;
-- toute fermeture F-A6-PM-G01.
+- GO publish + PR — **consommé** dans les cycles postérieurs de publication CI/gouvernance ;
+- GO review PR and CI — **consommé** dans les cycles postérieurs ;
+- GO apply branch protection / required checks — **consommé** via M1 (ruleset `19798462`) ;
+- GO merge (avec H1/H2/H3 explicite) — **consommé** pour les merges Studio gouvernés postérieurs ;
+- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).

 ---

@@ -475,4 +532,10 @@ Ne pas proposer directement un merge.

 ## 20. Verdict

+Verdict historique du cycle de préparation (conservé) :
+
 `SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO`
+
+Addendum de clôture F-A6 (formalisation locale) :
+
+`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`
```
Comparaison local/distant: **identique**

## 6. Document final complet (head)
```markdown
# 24 — CI and Merge Governance Preparation (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 13:36:48 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps — CI et gouvernance de merge SFIA Studio Option A |
| **Profil** | Critical |
| **Gate** | `GO PREPARE OPTION A CI AND MERGE GOVERNANCE — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **Branche source** | `framing/sfia-studio-v3-native-option-a-after-t-a6` @ `aef7fd6d5a678857cf36e490f1550866d47c8887` |
| **Branche delivery** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` (locale, **aucun upstream**) |
| **Worktree delivery** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Handoff source** | blob `69257aebdef7e351fb391d25447e5e92504f87ed` · Option F |
| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |
| **CI GitHub run** | **prouvée** (M1 + post-merge ; voir Capitalisation F-A6-PM-G01) |
| **Branch protection / required checks** | **APPLIED** via ruleset M1 `19798462` (état antérieur de préparation : PROPOSED — supersédé) |
| **T-A6 COMPLETE** | **NON** |
| **Option A COMPLETE** | **NON** |
| **T-A7** | **NON ouvert** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO` |
| **Gate suivant candidat** | `GO PUBLISH OPTION A CI GOVERNANCE BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Gate consommé

Gate Morris :

`GO PREPARE OPTION A CI AND MERGE GOVERNANCE — SFIA STUDIO V3-NATIVE`

Autorisé : lecture repo/config GitHub, branche locale, workflow candidat sous `.github/workflows/**`, docs CI/gouvernance, validations locales, commits locaux, review pack FULL, handoff L3.

**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve.

---

## 2. Truth Check

| Contrôle | Résultat |
|----------|----------|
| Repo `mcleland147/sfia-workspace` | **PASS** |
| `origin/main` = `910de87…` | **PASS** (inchangé) |
| Branche source = framing after T-A6 @ `aef7fd6…` | **PASS** |
| Merge-base avec `origin/main` | `910de87…` |
| Avance / retard vs `origin/main` | **+2 / −0** (docs 22 + README T-A6 + 23) |
| Contenu source = docs post-merge/cadrage uniquement | **PASS** |
| Pas de workflow SFIA Studio concurrent | **PASS** (seul `interv360-ci.yml`) |
| Pas de PR ouverte workflows / sfia-studio | **PASS** |
| Pas d’opération Git active | **PASS** |
| Worktrees T-A6 / framing / main non checkoutés pour delivery | **PASS** |
| Worktree delivery créé | **PASS** · aucun upstream |

**Verdict Truth Check :** PASS — cycle autorisé à écrire.

---

## 3. Sources

| Source | Usage |
|--------|-------|
| Template cycle · routing · méthode · operating model · garde-fous | méthode |
| Handoff blob `69257aeb…` | recommandation Option F + gate |
| Docs `22` / `23` · finding **F-A6-PM-G01** · PR #267 | constat CI ABSENT |
| `.github/workflows/interv360-ci.yml` | pattern CI repo (paths, Node 20, `npm ci`) |
| `projects/sfia-studio/app/package.json` + `package-lock.json` | scripts / lockfile |
| `projects/sfia-studio/sfia-v3-modeled/**/tests/*.mjs` | non-régression modeled |
| Docs OPS1 Node engines (Cas B) | pin Node Studio **non figé** |
| Harness `engines.node >=20` | borne inférieure tooling, **≠** pin Studio |

**Index Option A racine :** aucun README canonique `v3-native-option-a/README.md` — **non inventé** ; pas de mise à jour d’index.

---

## 4. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| **Contrat trouvé** | **non** (pas de CKC DevOps / intégration dédié) |
| **Path** | n/a |
| **Statut** | **absent** |
| **Pilotes disponibles** | `pilots/01-cadrage.md` … `04-qa-validation.md` uniquement |
| **Usage** | experimental cognitive guidance (QA pilot **périphérique** seulement) |
| **Autorité** | **aucune** autorité d’exécution |
| **Fallback** | méthode cycles + workflow Interv360 + architecture réelle SFIA Studio |
| **Limites** | aucune modification distante GitHub · aucun merge · aucun push projet |

---

## 5. État CI initial

| Élément | Fait |
|---------|------|
| Workflows existants | **1** — `.github/workflows/interv360-ci.yml` |
| Paths Interv360 | `projects/interv360/**` + workflow lui-même |
| Couverture `projects/sfia-studio/**` | **aucune** |
| Checks GitHub PR #267 | **absents** (cause racine de F-A6-PM-G01 côté observabilité CI) |
| Dependabot / CODEOWNERS / templates PR Studio | **absents** sous `.github/` (hors `workflows/`) |

---

## 6. Analyse préalable (architecture réelle)

| Rubrique | Fait |
|----------|------|
| Package manager | **npm** (`package-lock.json` lockfileVersion **3**) |
| Working directory app | `projects/sfia-studio/app` |
| Node Studio pin | **absent** (pas de `.nvmrc` / `.node-version` / `engines` dans `app/package.json`) |
| Node CI retenu | **20** — dérivé du **précédent repo** Interv360 CI + borne harness `>=20` ; **pas** une décision `engines` Studio |
| Node local de validation | **v24.16.0** (écart documenté ; run GitHub **non** prouvé sur 20) |
| Lockfile | présent · `npm ci` **OK** localement |
| Scripts package | `typecheck`, `lint`, `build`, `test` (vitest), `test:e2e` (playwright — **hors** CI candidate) |
| Suites OA ciblées | couvertes par `npm test` (Vitest global) |
| Modeled | `node --test` sur 3 fichiers governance sous `sfia-v3-modeled/v3-native-option-a/tests/` |
| Secrets CI | **aucun** requis |
| Permissions GHA | `contents: read` |
| Réseau | `npm ci` (registry) + Next build — **pas** de service productif Option A |
| Services externes tests | non requis pour les suites retenues (provider live hors scope) |
| Non-déterminisme | aucun observé sur suites retenues |
| Ubuntu | commandes Node/npm standards — **compatibles** ; e2e Playwright **exclu** (coût / deps navigateur) |
| macOS-only | **non** pour les commandes retenues |

### Qualification des commandes

| Commande | Qualification |
|----------|----------------|
| `npm ci` | **obligatoire chaque PR** (paths Studio) |
| `npm run typecheck` | **obligatoire** |
| `npm run lint` | **obligatoire** |
| `npm run build` | **obligatoire** |
| `npm test` | **obligatoire** (runtime Studio + OA T-A3…T-A6 via Vitest) |
| `node --test` modeled (3 fichiers) | **obligatoire** (modeled hors Vitest app) |
| Secret pattern scan (git grep) | **obligatoire** (léger, sans outil externe) |
| `git diff --check` | **obligatoire** sur PR (base…HEAD) |
| `npm run test:e2e` / Playwright | **locale / hors CI** (coût, browsers) |
| `npm audit fix` | **non applicable** ce cycle (interdit de modifier lockfile) |
| Matrice multi-Node | **écartée** (pas de besoin démontré ; pin Studio ouvert) |

---

## 7. Architecture CI retenue

| Champ | Valeur |
|-------|--------|
| Fichier | `.github/workflows/sfia-studio-ci.yml` |
| Nom workflow | `SFIA Studio CI` |
| Jobs | **1** — `validate` / check name **`Build and validate SFIA Studio`** |
| Runner | `ubuntu-latest` |
| Actions | `actions/checkout@v4`, `actions/setup-node@v4` |
| Cache | npm via `cache-dependency-path: projects/sfia-studio/app/package-lock.json` |
| Permissions | `contents: read` |
| Concurrency | `sfia-studio-ci-${{ github.workflow }}-${{ github.event.pull_request.number \|\| github.ref }}` · `cancel-in-progress: true` |
| Timeout | **30** minutes |
| Secrets | **aucun** |
| Déploiement / DB / exécution réelle Option A | **aucun** |

### Paths déclencheurs

- `projects/sfia-studio/**` (inclut `app/**` **et** `sfia-v3-modeled/**`)
- `.github/workflows/sfia-studio-ci.yml`

Événements : `pull_request` (tous branches) + `push` vers `main`, filtrés par paths.

### Alternatives écartées

| Alternative | Motif d’écart |
|-------------|----------------|
| Étendre Interv360 CI | mélange de projets ; chemins / jobs distincts |
| Matrice Node 18/20/22/24 | pin Studio ouvert ; coût sans besoin démontré |
| Job séparé par suite OA | redondant avec `npm test` unique |
| Playwright e2e en CI | hors périmètre ; deps navigateur ; non exigé pour F-A6-PM-G01 |
| Scanner secrets SaaS | dépendance externe non maîtrisée |
| Modifier `engines` / lockfile | **interdit** ce cycle → cycle correctif séparé si Morris l’exige |

---

## 8. Jobs / checks / commandes exactes

**Check GitHub candidat (nom affiché) :** `Build and validate SFIA Studio`

Étapes (cwd app sauf mention) :

1. Checkout (`fetch-depth: 0`)
2. Setup Node **20** + cache npm
3. `npm ci`
4. `npm run typecheck`
5. `npm run lint`
6. `npm run build`
7. `npm test`
8. Modeled (cwd `projects/sfia-studio`) :

```bash
node --test \
  sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs \
  sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs \
  sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs
```

9. Secret pattern scan (workspace) — `BEGIN … PRIVATE KEY` / `AKIA…`
10. Trailing whitespace — `git diff --check` base…HEAD (PR) ou before…HEAD (push)

**Anti-doublon :** pas d’alias séparés T-A3/T-A4/T-A5/T-A6 — Vitest global + modeled dédié.

---

## 9. Validation locale

Formulation obligatoire :

**WORKFLOW LOCALLY VALIDATED — GITHUB ACTIONS RUN NOT YET PROVEN**

| Étape | rc | Durée locale | Résultat |
|-------|-----|--------------|----------|
| `npm ci` | 0 | ~7.3 s | 414 packages |
| `npm run typecheck` | 0 | ~2 s | PASS |
| `npm run lint` | 0 | ~5 s | PASS |
| `npm run build` | 0 | ~9 s | PASS |
| `npm test` | 0 | ~7 s | **71** files · **655** tests PASS |
| modeled `node --test` (3 fichiers) | 0 | <1 s | **73** pass · 0 fail |
| secret scan | 0 | <1 s | aucun match |
| `git diff --check origin/main...HEAD` | 0 | <1 s | PASS |
| YAML parse (`ruby -ryaml`) | 0 | <1 s | **YAML_OK** |
| actionlint | n/a | — | **non disponible** localement · **non installé** (repo non modifié) |

**Host local :** Darwin · Node **v24.16.0** (≠ Node 20 CI).

**npm audit :** 12 high severity signalés après `npm ci` — **Observation** ; correction lockfile **hors** périmètre.

**Skipped inattendus :** aucun.

---

## 10. Limites de validation

- Aucun run GitHub Actions n’a eu lieu.
- Le nom exact du check sur l’UI GitHub doit être **ré-observé** après le premier run avant required status.
- Node 20 CI non exécuté localement (Node 20 absent sur la machine).
- actionlint non exécuté.
- `npm audit` non traité.
- Playwright non inclus.
- Pin `engines.node` Studio reste **OPEN** (Cas B OPS1).

---

## 11. Gouvernance PR / CI / merge (séquence fermée)

Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Studio) :

1. **PR readiness** validé (doc + preuves locales).
2. **GO Morris de publication** explicite.
3. Branche poussée + **PR créée**.
4. Cycle **`GO REVIEW [SCOPE] PR AND CI`** (obligatoire).
5. Checks obligatoires **confirmés** sur le head SHA reviewé.
6. **Stratégie de merge explicitement choisie** :
   - **H1** — merge commit ;
   - **H2** — squash merge ;
   - **H3** — rebase merge (**seulement** si justifié).
7. **GO Morris de merge** exact (texte + SHA + stratégie).
8. Merge exécuté.
9. **Post-merge** review.
10. Suppression de branche **uniquement** sur GO Morris séparé ou règle explicite déjà adoptée.

### Stop conditions

- CI absente ;
- CI en échec ;
- checks incomplets ;
- head SHA modifié après review ;
- base avancée ;
- conflits ;
- finding Critical/Major non traité ;
- review pack incomplet ;
- handoff obsolète ;
- stratégie de merge non décidée ;
- gate merge absent.

### Anti-claims

- PR ouverte ≠ ready to merge ;
- mergeable ≠ validée ;
- CI absente ≠ PASS ;
- tests locaux ≠ CI distante ;
- recommandation H1/H2/H3 ≠ décision Morris ;
- merge ≠ incrément COMPLETE ;
- merge ≠ production ready.

### Capitalisation F-A6-PM-G01

| Champ | Valeur |
|------|--------|
| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |
| CLOSED | **OUI** |
| Sévérité initiale | **Major** (gouvernance) — conservée comme information historique |
| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — **objet exclusif** de la clôture |
| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
| Date/heure clôture | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |
| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |
| Décision Morris de clôture | `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
| Option A COMPLETE | **NON** (D-M1-05) — inchangé |
| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |

#### Décision Morris de clôture

| Champ | Valeur |
|------|--------|
| Décision validée | F-A6-PM-G01 = **CLOSED** |
| Autorité | Morris — gate `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` |
| Objet exact | traitement du problème initial (#267 sans review PR/CI formelle ; absence de CI SFIA Studio observable ; absence de contrôle de merge démontré) |
| Date/heure/fuseau | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Preuves déterminantes | required gate path-aware actif ; #272 hors Studio PASS ; #273 BLOCKED + recovery ; #275/#276 merges + CI post-merge ; rollback ruleset restore identique (1 s) ; #277 bypass explicite REST sans `--admin` ; #278 revert normal + CI post-revert SUCCESS ; pollution 173 s ; diff net vide ; ruleset `19798462` actif inchangé |
| Condition technique restante | **aucune** pour le problème initial F-A6 |
| Hardening loose | **distinct** — non absorbé par cette clôture ; aucune décision de durcissement ici |
| Intégration Git canonique | formalisation **locale** sur branche `docs/sfia-studio-fa6-closure` ; `main` reste inchangé jusqu’à PR/merge futurs |

#### Critères historiques de clôture (tous satisfaits)

| Critère | Statut |
|---------|--------|
| Run GitHub prouvé | **satisfait** |
| Gouvernance appliquée sur PR réelle | **satisfait** |
| Required checks appliqués | **satisfait** |
| Blocage d’une PR invalide | **satisfait** |
| Recovery validée | **satisfait** |
| Post-merge validé | **satisfait** |
| Rollback validé | **satisfait** |
| Bypass qualifié | **satisfait** |
| Contrôle actif sur `main` | **satisfait** |
| Documentation et REX disponibles | **satisfait** |

État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.

#### Preuves factuelles (mitigation M1 + clôture)

| Preuve | Référence |
|--------|-----------|
| P3 intégré sur `main` | PR #270 |
| Workflow blob (référence historique M1) | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
| Formalisation MITIGATED (antérieure) | PR #274 |
| Alignement document 32 | PR #275 — squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| REX M1 intégré | PR #276 — squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` — doc `33` blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` |
| Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
| Bypass comportemental | PR #277 — run `30290065655` (Trailing whitespace → Required Gate failure) ; merge normal bloqué ; bypass REST explicite acteur ruleset (sans `--admin`) — squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` |
| Revert normal | PR #278 — run `30290283916` SUCCESS ; squash `df9d9c6e688be367f54aa9376e67543eab80533a` (sans bypass) |
| CI post-revert | run `30290479092` SUCCESS |
| Pollution bornée | **173 s** ; diff net `49f2edfa…`…`df9d9c6…` **vide** ; fichier probe absent |
| État final `main` (au moment de la formalisation) | `df9d9c6e688be367f54aa9376e67543eab80533a` |
| Preuves GitHub | runs, checks et logs conservés |

#### Réserves F-A6 devenues obsolètes (retirées)

Les items suivants **ne sont plus** des réserves ouvertes de F-A6 :

- finding non CLOSED ;
- document 32 obsolète (corrigé via PR #275) ;
- capitalisation / REX M1 encore requise (intégré via PR #276) ;
- rollback non testé (prouvé) ;
- bypass non testé (prouvé comportementalement).

#### Sujets distincts non bloquants après clôture

Ces sujets **ne rouvrent pas** F-A6. Ils relèvent d’un futur cycle de hardening, d’un backlog, ou d’un finding distinct. **Aucune** décision de durcissement n’est prise ici.

- configuration M1 loose : approvals = `0` ; strict up-to-date = `false` ; conversation resolution = `false` ;
- bypass actor Morris conservé (mode `pull_request`) — capacité désormais **qualifiée**, non recommandée comme méthode normale ;
- auditabilité organisationnelle limitée (audit log org non accessible dans les cycles de preuve) ;
- traces Git permanentes du probe/revert (#277/#278) ;
- findings F-CI-* inchangés ;
- Option A non COMPLETE ;
- T-A7 non ouverte ;
- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).

#### Anti-claims de clôture

- F-A6 CLOSED ≠ Option A COMPLETE ;
- F-A6 CLOSED ≠ T-A7 OPEN ;
- F-A6 CLOSED ≠ ruleset hardened ;
- F-A6 CLOSED ≠ bypass recommandé ;
- F-A6 CLOSED ≠ production-ready ;
- F-A6 CLOSED ≠ D1–D7 décidées ;
- clôture documentaire locale ≠ intégration sur `main` ;
- commit local ≠ PR ;
- PR future ≠ merge.

---

## 12. Proposition branch protection / required checks

**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.

**État actuel (post-M1) :** ruleset `19798462` (`SFIA Studio Main Required Gate — M1`) **actif** sur `refs/heads/main` ; required check `SFIA Studio Required Gate` / integration `15368`. La proposition ci-dessous reste la trace du cycle de préparation ; elle ne contredit plus l’application M1 ultérieure.

Ce cycle de préparation **n’avait modifié aucun** ruleset / branch protection distant (l’application M1 relève de cycles postérieurs).

| Élément | Proposition |
|---------|-------------|
| Check candidat | `Build and validate SFIA Studio` (job `validate`) |
| Required | **seulement après** premier run GitHub observé (nom UI confirmé) |
| Branche à jour | recommandé pour `main` après preuve CI |
| Review | ≥1 review humaine Morris (ou règle CODEOWNERS future) — **candidat** |
| Force-push `main` | **interdire** |
| Suppression branche head | **pas automatique** ; GO Morris séparé |
| Stratégies merge `main` | laisser H1/H2 disponibles ; H3 restreint ; **choix par cycle** |
| Ordre d’activation | (1) publier workflow via PR · (2) obtenir 1er run vert · (3) observer nom check · (4) GO Morris apply required · (5) ensuite seulement exiger sur merges Studio |

**Ne pas** rendre required avant observation du nom réel sur GitHub.

---

## 13. Sécurité

- Permissions minimales `contents: read`.
- Aucun secret projet / token write.
- Aucune écriture GitHub depuis le workflow.
- Scan patterns secrets **local** (git grep) — couverture limitée volontairement.
- Pas d’exécution réelle Option A / provider live.

---

## 14. Coûts / temps raisonnables

| Estimation | Valeur |
|------------|--------|
| Local (ci + suites) | ~**30 s** sur machine de validation |
| CI GitHub attendue | typiquement **2–8 min** (cold cache + Next build) — **non mesurée** |
| Timeout job | 30 min (marge) |
| Concurrency cancel | limite les runs PR obsolètes |

---

## 15. Findings

| ID | Sévérité | Description | Action ce cycle |
|----|----------|-------------|-----------------|
| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |
| F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
| F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
| F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
| F-CI-04 | **Minor** | actionlint non disponible | YAML validé via Ruby · actionlint reporté absent |

**Critical technique bloquant CI :** aucun.

---

## 16. Réserves (inchangées — OPEN)

| Réserve | Statut |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** |
| R-T-A3-2 | **OPEN** |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** |
| U-M02 | **OPEN** |
| C1–C4 | **RECOMMENDED — NOT VALIDATED** |

Le workflow CI **ne ferme** aucune réserve métier/architecture · **ne débloque pas** l’exécution réelle · **ne rend pas** Option A production-ready.

---

## 17. Décisions

### Validées (ce cycle — préparation locale)

- Créer workflow dédié `sfia-studio-ci.yml` (ne pas étendre Interv360).
- Job unique `Build and validate SFIA Studio`.
- Paths limités à `projects/sfia-studio/**` + workflow.
- Node **20** comme version **CI candidate** (précédent repo), sans figer `engines` Studio.
- Inclure Vitest global + 3 tests modeled + scans légers.
- Exclure Playwright e2e de la CI candidate.
- Documenter gouvernance H1/H2/H3 + stop conditions + anti-claims.
- Branch protection / required checks : **APPLIED** via M1 — état historique de préparation `PROPOSED — NOT APPLIED` supersédé.

### Candidates (Morris)

- Publier branche + créer PR CI/gouvernance.
- Après 1er run : activer required check sous GO distinct.
- Choisir pin `engines.node` Studio (cycle config séparé).
- Traiter `npm audit` (cycle deps séparé).
- Politique review obligatoire / CODEOWNERS.

### Morris requises (historique de préparation — statut actualisé)

- GO publish + PR — **consommé** dans les cycles postérieurs de publication CI/gouvernance ;
- GO review PR and CI — **consommé** dans les cycles postérieurs ;
- GO apply branch protection / required checks — **consommé** via M1 (ruleset `19798462`) ;
- GO merge (avec H1/H2/H3 explicite) — **consommé** pour les merges Studio gouvernés postérieurs ;
- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).

---

## 18. Gate suivant candidat

```
GO PUBLISH OPTION A CI GOVERNANCE BRANCH AND CREATE PR
— SFIA STUDIO V3-NATIVE
```

**NOT consumed.**

Ensuite (obligatoire avant merge) :

```
GO REVIEW OPTION A CI GOVERNANCE PR AND CI
— SFIA STUDIO V3-NATIVE
```

Ne pas proposer directement un merge.

---

## 19. Fichiers de ce cycle

| Path | Action |
|------|--------|
| `.github/workflows/sfia-studio-ci.yml` | **créé** |
| `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` | **créé** |
| Index Option A | **non modifié** (absent · non inventé) |

**Non modifiés :** Interv360 workflow · runtime · tests · modeled · T-A0…T-A6 · package.json · lockfiles · tsconfig · lint/test/build config · method · prompts · main · T-A6 worktree.

---

## 20. Verdict

Verdict historique du cycle de préparation (conservé) :

`SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO`

Addendum de clôture F-A6 (formalisation locale) :

`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`
```

## 7. Recherche contradictions / lignes sensibles
### Occurrences clés
```json
[
  {
    "line": 15,
    "pattern": "NOT CLOSED",
    "text": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |"
  },
  {
    "line": 15,
    "pattern": "formalisation locale",
    "text": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |"
  },
  {
    "line": 19,
    "pattern": "Option A COMPLETE",
    "text": "| **Option A COMPLETE** | **NON** |"
  },
  {
    "line": 20,
    "pattern": "T-A7",
    "text": "| **T-A7** | **NON ouvert** |"
  },
  {
    "line": 34,
    "pattern": "T-A7",
    "text": "**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve."
  },
  {
    "line": 298,
    "pattern": "NOT CLOSED",
    "text": "| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |"
  },
  {
    "line": 301,
    "pattern": "Option A COMPLETE",
    "text": "| Option A COMPLETE | **NON** (D-M1-05) — inchangé |"
  },
  {
    "line": 302,
    "pattern": "T-A7",
    "text": "| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |"
  },
  {
    "line": 332,
    "pattern": "NOT CLOSED",
    "text": "État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée."
  },
  {
    "line": 364,
    "pattern": "rollback non testé",
    "text": "- rollback non testé (prouvé) ;"
  },
  {
    "line": 365,
    "pattern": "bypass non testé",
    "text": "- bypass non testé (prouvé comportementalement)."
  },
  {
    "line": 377,
    "pattern": "T-A7",
    "text": "- T-A7 non ouverte ;"
  },
  {
    "line": 378,
    "pattern": "D1–D7",
    "text": "- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6)."
  },
  {
    "line": 382,
    "pattern": "Option A COMPLETE",
    "text": "- F-A6 CLOSED ≠ Option A COMPLETE ;"
  },
  {
    "line": 383,
    "pattern": "T-A7",
    "text": "- F-A6 CLOSED ≠ T-A7 OPEN ;"
  },
  {
    "line": 387,
    "pattern": "D1–D7",
    "text": "- F-A6 CLOSED ≠ D1–D7 décidées ;"
  },
  {
    "line": 396,
    "pattern": "PROPOSED — NOT APPLIED",
    "text": "**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**."
  },
  {
    "line": 481,
    "pattern": "PROPOSED — NOT APPLIED",
    "text": "- Branch protection / required checks : **APPLIED** via M1 — état historique de préparation `PROPOSED — NOT APPLIED` supersédé."
  },
  {
    "line": 497,
    "pattern": "formalisation locale",
    "text": "- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge)."
  },
  {
    "line": 497,
    "pattern": "en attente de PR/merge",
    "text": "- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge)."
  },
  {
    "line": 539,
    "pattern": "formalisation locale",
    "text": "Addendum de clôture F-A6 (formalisation locale) :"
  },
  {
    "line": 541,
    "pattern": "CANONICAL MAIN INTEGRATION PENDING",
    "text": "`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT "
  },
  {
    "line": 541,
    "pattern": "T-A7",
    "text": "`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT "
  }
]
```

### Lignes sensibles post-merge
```
15: | **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |
349: | Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
388: - clôture documentaire locale ≠ intégration sur `main` ;
389: - commit local ≠ PR ;
497: - fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).
539: Addendum de clôture F-A6 (formalisation locale) :
541: `SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`
```

### Blockers post-merge
```json
[
  {
    "line": 497,
    "severity": "Après merge, affirmation factuellement fausse ; section « statut actualisé » non historique gelé",
    "text": "- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge)."
  },
  {
    "line": 497,
    "severity": "Présenté comme statut actualisé de clôture",
    "text": "- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge)."
  },
  {
    "line": 541,
    "severity": "Verdict courant du document devient faux une fois sur main",
    "text": "`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`"
  },
  {
    "line": 15,
    "severity": "PASS WITH RESERVATION — descriptif du mode de formalisation ; moins bloquant si lu comme méthode du GO, mais trompeur comme état courant post-merge",
    "text": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |"
  },
  {
    "line": 388,
    "severity": "PASS WITH RESERVATION — anti-claim de cycle ; après merge l’inégalité disparaît ; acceptable comme trace méthodologique si non lu comme état courant",
    "text": "- clôture documentaire locale ≠ intégration sur `main` ;"
  }
]
```

## 8. Analyse cohérence post-merge (obligatoire)

Question: les formulations « formalisation locale / intégration pending / main en attente » restent-elles valides après merge ?

Réponse: **NON** pour les affirmations de statut courant.

| Ligne | Extrait | Après merge | Décision |
|------:|---------|-------------|----------|
| 497 | intégration `main` en attente de PR/merge (statut actualisé) | faux | **FAIL bloquant** |
| 541 | CANONICAL MAIN INTEGRATION PENDING | faux | **FAIL bloquant** |
| 15 | formalisation locale sous GO CLOSE… | trompeur si lu comme état courant | PASS WITH RESERVATION |
| 349 | main inchangé pendant le test | historique vrai | PASS |
| 388–389 | anti-claims locale ≠ main / commit ≠ PR | trace méthodologique | PASS WITH RESERVATION |

Verdict analyse: `F-A6 PR NOT READY — POST-MERGE DOCUMENTARY STATE CONTRADICTION`

Correction minimale attendue (cycle séparé, hors ce gate) :
- requalifier L497/L541 en état **au moment de la formalisation locale** OU prévoir addendum post-merge immédiat — **avant** GO merge, car sinon le document sur `main` affiche PENDING alors que l’intégration est faite.

## 9. CI run `30295595831`
```json
{
  "id": 30295595831,
  "name": "SFIA Studio CI",
  "path": ".github/workflows/sfia-studio-ci.yml",
  "event": "pull_request",
  "head_sha": "77271faac978b65fa10b912986eb9b6687ee6636",
  "head_branch": "docs/sfia-studio-fa6-closure",
  "status": "completed",
  "conclusion": "success",
  "run_number": 28,
  "run_attempt": 1,
  "created_at": "2026-07-27T18:50:46Z",
  "updated_at": "2026-07-27T18:52:29Z",
  "html_url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30295595831",
  "display_title": "docs(sfia-studio): close F-A6 after M1 governance proofs"
}
```
- event: pull_request
- head SHA: `77271faac978b65fa10b912986eb9b6687ee6636`
- base SHA (PR): `df9d9c6e688be367f54aa9376e67543eab80533a`
- conclusion: **success**
- attempt: 1

### Jobs + steps
```json
[
  {
    "name": "Detect SFIA Studio changes",
    "id": 90075668233,
    "status": "completed",
    "conclusion": "success",
    "started_at": "2026-07-27T18:50:48Z",
    "completed_at": "2026-07-27T18:50:53Z",
    "steps": [
      {
        "number": 1,
        "name": "Set up job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 2,
        "name": "Checkout",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 3,
        "name": "Detect Studio scope",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 6,
        "name": "Post Checkout",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 7,
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      }
    ]
  },
  {
    "name": "Build and validate SFIA Studio",
    "id": 90075695222,
    "status": "completed",
    "conclusion": "success",
    "started_at": "2026-07-27T18:51:02Z",
    "completed_at": "2026-07-27T18:52:23Z",
    "steps": [
      {
        "number": 1,
        "name": "Set up job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 2,
        "name": "Checkout",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 3,
        "name": "Setup Node.js",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 4,
        "name": "Install dependencies",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 5,
        "name": "Typecheck",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 6,
        "name": "Lint",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 7,
        "name": "Build",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 8,
        "name": "Unit tests (Vitest)",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 9,
        "name": "Modeled governance tests",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 10,
        "name": "Secret pattern scan (targeted)",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 11,
        "name": "Trailing whitespace check",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 21,
        "name": "Post Setup Node.js",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 22,
        "name": "Post Checkout",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 23,
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      }
    ]
  },
  {
    "name": "SFIA Studio Required Gate",
    "id": 90076087219,
    "status": "completed",
    "conclusion": "success",
    "started_at": "2026-07-27T18:52:26Z",
    "completed_at": "2026-07-27T18:52:28Z",
    "steps": [
      {
        "number": 1,
        "name": "Set up job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 2,
        "name": "Aggregate required gate",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      },
      {
        "number": 3,
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "continue_on_error": null
      }
    ]
  }
]
```

### Logs utiles (extraits)
```
===== Detect SFIA Studio changes =====
===== Build and validate SFIA Studio =====
===== SFIA Studio Required Gate =====
Detect SFIA Studio changes	Set up job	2026-07-27T18:50:50.0380514Z Complete job name: Detect SFIA Studio changes
Detect SFIA Studio changes	Detect Studio scope	﻿2026-07-27T18:50:51.6445708Z ##[group]Run set -euo pipefail
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6446251Z ^[[36;1mset -euo pipefail^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6446546Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6446792Z ^[[36;1mstudio_changed="false"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6447102Z ^[[36;1mevent_name="pull_request"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6447405Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6447650Z ^[[36;1mis_studio_path() {^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6447939Z ^[[36;1m  case "$1" in^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6448327Z ^[[36;1m    projects/sfia-studio/*|.github/workflows/sfia-studio-ci.yml)^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6448762Z ^[[36;1m      return 0^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6449029Z ^[[36;1m      ;;^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6449266Z ^[[36;1m    *)^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6449510Z ^[[36;1m      return 1^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6450260Z ^[[36;1m      ;;^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6450532Z ^[[36;1m  esac^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6450770Z ^[[36;1m}^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6450993Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6451227Z ^[[36;1mscan_range() {^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6451494Z ^[[36;1m  local base_sha="$1"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6451833Z ^[[36;1m  local head_sha="$2"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6452118Z ^[[36;1m  local file=""^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6452387Z ^[[36;1m  local found="false"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6452653Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6452978Z ^[[36;1m  git rev-parse --verify "${base_sha}^{commit}" >/dev/null^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6453447Z ^[[36;1m  git rev-parse --verify "${head_sha}^{commit}" >/dev/null^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6453812Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6454072Z ^[[36;1m  while IFS= read -r -d '' file; do^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6454428Z ^[[36;1m    if is_studio_path "${file}"; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6454760Z ^[[36;1m      found="true"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6455070Z ^[[36;1m      break^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6455324Z ^[[36;1m    fi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6455650Z ^[[36;1m  done < <(git diff -z --name-only "${base_sha}...${head_sha}")^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6456036Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6456268Z ^[[36;1m  printf '%s' "${found}"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6456549Z ^[[36;1m}^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6456775Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6457044Z ^[[36;1mif [ "${event_name}" = "pull_request" ]; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6457447Z ^[[36;1m  base_sha="df9d9c6e688be367f54aa9376e67543eab80533a"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6457892Z ^[[36;1m  head_sha="77271faac978b65fa10b912986eb9b6687ee6636"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6458311Z ^[[36;1m  if [ -z "${base_sha}" ] || [ -z "${head_sha}" ]; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6458756Z ^[[36;1m    echo "Missing pull_request base/head SHA; fail-closed." >&2^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6459150Z ^[[36;1m    exit 1^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6459395Z ^[[36;1m  fi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6459717Z ^[[36;1m  studio_changed="$(scan_range "${base_sha}" "${head_sha}")"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6460368Z ^[[36;1melif [ "${event_name}" = "push" ]; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6460858Z ^[[36;1m  # Path filters already constrain push triggers to Studio-relevant paths.^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6461410Z ^[[36;1m  # Fail-closed: treat triggered push runs as Studio-in-scope.^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6461938Z ^[[36;1m  # Optionally corroborate with before...sha when resolvable.^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6462354Z ^[[36;1m  before_sha=""^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6462692Z ^[[36;1m  head_sha="303ae986b7005bd56c324a9d957628105c45a30f"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6463085Z ^[[36;1m  studio_changed="true"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6463553Z ^[[36;1m  if [ -n "${before_sha}" ] && [ "${before_sha}" != "0000000000000000000000000000000000000000" ]; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6464166Z ^[[36;1m    if ! git rev-parse --verify "${before_sha}^{commit}" >/dev/null 2>&1; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6464721Z ^[[36;1m      echo "Cannot resolve github.event.before; fail-closed." >&2^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6465133Z ^[[36;1m      exit 1^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6465605Z ^[[36;1m    fi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6465936Z ^[[36;1m    corroborate="$(scan_range "${before_sha}" "${head_sha}")"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6466434Z ^[[36;1m    echo "push corroborate studio_changed=${corroborate}"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6466819Z ^[[36;1m  fi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6467245Z ^[[36;1melse^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6467586Z ^[[36;1m  echo "Unsupported event_name=${event_name}; fail-closed." >&2^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6467993Z ^[[36;1m  exit 1^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6468228Z ^[[36;1mfi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6468451Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6468808Z ^[[36;1mif [ "${studio_changed}" != "true" ] && [ "${studio_changed}" != "false" ]; then^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6469324Z ^[[36;1m  echo "Invalid studio_changed value; fail-closed." >&2^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6469704Z ^[[36;1m  exit 1^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6470113Z ^[[36;1mfi^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6470334Z ^[[36;1m^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6470580Z ^[[36;1mecho "event_name=${event_name}"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6470945Z ^[[36;1mecho "studio_changed=${studio_changed}"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6471381Z ^[[36;1mecho "studio_changed=${studio_changed}" >> "${GITHUB_OUTPUT}"^[[0m
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6522517Z shell: /usr/bin/bash --noprofile --norc -e -o pipefail {0}
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6522983Z ##[endgroup]
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6692998Z event_name=pull_request
Detect SFIA Studio changes	Detect Studio scope	2026-07-27T18:50:51.6693980Z studio_changed=true
Detect SFIA Studio changes	Post Checkout	2026-07-27T18:50:51.6926669Z Post job cleanup.
Detect SFIA Studio changes	Complete job	﻿2026-07-27T18:50:51.9337148Z Evaluate and set job outputs
Detect SFIA Studio changes	Complete job	2026-07-27T18:50:51.9344315Z Set output 'studio_changed'
Detect SFIA Studio changes	Complete job	2026-07-27T18:50:51.9346376Z Cleaning up orphan processes
Detect SFIA Studio changes	Complete job	2026-07-27T18:50:51.9630829Z ##[warning]Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-
Build and validate SFIA Studio	Set up job	2026-07-27T18:51:03.7273928Z Complete job name: Build and validate SFIA Studio
Build and validate SFIA Studio	Typecheck	2026-07-27T18:51:20.7820979Z > tsc --noEmit
Build and validate SFIA Studio	Lint	2026-07-27T18:51:27.4836648Z npx @next/codemod@canary next-lint-to-eslint-cli .
Build and validate SFIA Studio	Build	2026-07-27T18:51:33.0003573Z > next build
Build and validate SFIA Studio	Unit tests (Vitest)	﻿2026-07-27T18:51:59.1004117Z ##[group]Run npm test
Build and validate SFIA Studio	Unit tests (Vitest)	2026-07-27T18:51:59.1004402Z ^[[36;1mnpm test^[[0m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-07-27T18:51:59.2196973Z > vitest run
Build and validate SFIA Studio	Post Setup Node.js	2026-07-27T18:52:20.8765308Z Post job cleanup.
Build and validate SFIA Studio	Post Checkout	2026-07-27T18:52:21.0164631Z Post job cleanup.
Build and validate SFIA Studio	Complete job	﻿2026-07-27T18:52:21.2266135Z Cleaning up orphan processes
Build and validate SFIA Studio	Complete job	2026-07-27T18:52:21.2632481Z ##[warning]Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4. For more information see: https://github.blog/changelog/2025-09
SFIA Studio Required Gate	Set up job	2026-07-27T18:52:27.2393558Z Complete job name: SFIA Studio Required Gate
SFIA Studio Required Gate	Aggregate required gate	﻿2026-07-27T18:52:27.3548776Z ##[group]Run set -euo pipefail
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.3549712Z ^[[36;1mset -euo pipefail^[[0m
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.3550215Z ^[[36;1m^[[0m
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.3550634Z ^[[36;1mdetect_result="success"^[[0m
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.3551162Z ^[[36;1mvalidate_result="success"^[[0m
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.3551700Z ^[[36;1mstudio_changed="true"^[[0m
SFIA Studio Required Gate	Aggregate required gate	2026-07-27T18:52:27.355
```

### Warnings / skips / continue-on-error
- `continue_on_error`: aucun sur les steps
- tests skipped: `skipped 0` (Modeled governance)
- ##[error]: aucun
- fuite secret: non observée

## 10. Checks + ruleset
```json
{
  "runs": [
    {
      "app": "GitHub Actions",
      "conclusion": "success",
      "external_id": "0bab99bd-8374-52f0-b3a4-844385b151d9",
      "id": 90076087219,
      "name": "SFIA Studio Required Gate",
      "status": "completed"
    },
    {
      "app": "GitHub Actions",
      "conclusion": "success",
      "external_id": "f815b458-61af-5368-932c-a261c52055aa",
      "id": 90075695222,
      "name": "Build and validate SFIA Studio",
      "status": "completed"
    },
    {
      "app": "GitHub Actions",
      "conclusion": "success",
      "external_id": "ffd82a6c-3b1e-5fb1-852c-b634473a2ffd",
      "id": 90075668233,
      "name": "Detect SFIA Studio changes",
      "status": "completed"
    }
  ],
  "total": 3
}
```
```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "enforcement": "active",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "required_reviewers": [],
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ]
      }
    }
  ]
}
```
- required check: `SFIA Studio Required Gate` — success — integration `15368`
- ruleset `19798462` active on `refs/heads/main`
- approvals required: 0
- strict up-to-date: false
- conversation resolution: false
- merge methods: merge, squash, rebase
- bypass actor: 295557155 pull_request — **non utilisé**

## 11. Reviews / comments / conversations
- reviews formelles: 0
- inline comments: 0
- issue comments: 0
- review threads unresolved: 0
- Qualification: review humaine absente mais **non exigée** par ruleset ; **≠** validation Morris de merge

## 12. Mergeability
- mergeable: `MERGEABLE`
- mergeStateStatus: `CLEAN`
- autoMergeRequest: null
- mergedAt: null
- mergeable ≠ validée ; CLEAN ≠ merge autorisé

## 13. Stratégies H1/H2/H3
- **H1** merge commit: conserve 2 commits ; moins atomique
- **H2** squash: **recommandé** (titre/body candidats préparés) — **non décidé** ; **non éligible** tant que contradiction post-merge
- **H3** rebase: peu d’intérêt

## 14. Merge pack candidat
```markdown
## Merge pack candidat — NON ÉLIGIBLE tant que NOT READY

- PR: #279 — https://github.com/mcleland147/sfia-workspace/pull/279
- base SHA: df9d9c6e688be367f54aa9376e67543eab80533a
- head SHA: 77271faac978b65fa10b912986eb9b6687ee6636
- stratégie candidate: H2 — squash
- titre squash: docs(sfia-studio): close F-A6 after M1 governance proofs
- body squash:
  Formalise la décision Morris de clôture de F-A6-PM-G01 après preuves complètes M1, rollback et bypass.

  Aligne le statut Branch protection / required checks comme APPLIED via M1, avec l’état historique PROPOSED — NOT APPLIED explicitement supersédé.

  Conserve le hardening loose comme sujet distinct.

  Option A reste non COMPLETE, T-A7 non ouverte et D1–D7 NOT DECIDED.
- CI: run 30295595831 SUCCESS ; Required Gate SUCCESS
- reviews: aucune
- mergeable: MERGEABLE ; mergeStateStatus: CLEAN
- **STOP**: correction documentaire post-merge requise avant GO merge (L497, L541)
- post-merge: obligatoire après futur merge
- aucune suppression automatique
```

## 15. Matrice PR/CI
| Item | Statut | Note |
|------|--------|------|
| PR identity | PASS | #279 OPEN non-draft |
| head | PASS | 77271faac978b65fa10b912986eb9b6687ee6636 |
| base | PASS | main @ df9d9c6… inchangé |
| diff | PASS | 1 fichier 102/39 local≡distant |
| blob | PASS | 7abb5dd9015269c9c57f36019d52094c2c853518 |
| title | PASS | exact |
| body | PASS | sections attendues présentes |
| documentary coherence (branche) | PASS WITH RESERVATION | cohérent tant que non mergé |
| post-merge coherence | FAIL | L497 + L541 PENDING / en attente deviennent faux après merge |
| commit history | PASS | 2 commits attendus |
| CI run | PASS | 30295595831 success |
| jobs | PASS | Detect/Build/Required Gate success |
| steps | PASS | tous success ; skipped 0 ; no continue-on-error |
| required gate | PASS | SFIA Studio Required Gate success / integration 15368 |
| ruleset | PASS | 19798462 active ; approvals 0 ; strict false |
| reviews | PASS WITH RESERVATION | absentes ; non exigées (approvals=0) ≠ décision Morris |
| conversations | PASS | aucune |
| mergeable | PASS | MERGEABLE |
| mergeStateStatus | PASS | CLEAN |
| strategy | PASS | H2 recommandé |
| risks | FAIL | contradiction documentaire post-merge bloquante |
| handoff | PASS | à publier |

**Blockers:** cohérence post-merge L497 + L541

## 16. Réserves
- approvals=0 ≠ décision Morris
- L15/L388 anti-claims à surveiller lors d’un futur addendum post-merge
- loose-config hardening reste distinct

## 17. Actions non exécutées
- aucune modification fichier/PR
- aucun commit/push/rebase
- aucun commentaire/review/approval GitHub
- aucun merge/auto-merge/bypass/--admin
- aucun ruleset/hardening/suppression
- Option A COMPLETE / T-A7 / D1–D7 / Notion/CMP: non

## 18. État main
- `df9d9c6e688be367f54aa9376e67543eab80533a` inchangé
- F-A6 CLOSED **non** sur main

## 19. Gate candidat (NOT CONSUMED)
`GO CORRECT F-A6-PM-G01 CLOSURE DOC POST-MERGE STATE LANGUAGE ON PR #279 THEN RE-REVIEW — SFIA STUDIO V3-NATIVE`

(`GO MERGE F-A6-PM-G01 CLOSURE PR #279 WITH H2 SQUASH — SFIA STUDIO V3-NATIVE` **non éligible**)

## 20. Verdict
`SFIA STUDIO F-A6-PM-G01 CLOSURE PR #279 NOT READY — POST-MERGE DOCUMENTARY CONTRADICTION DETECTED — NO MERGE`

## Anti-claims
- CI verte ≠ merge autorisé
- mergeable/CLEAN ≠ validée
- approvals 0 ≠ décision Morris
- H2 recommandé ≠ H2 décidé
- PR éligible ≠ (ici: **non** éligible)
- F-A6 CLOSED dans PR ≠ CLOSED sur main

## Review Handoff Git
- commit attendu: `docs(review-handoff): record F-A6 PR and CI review`
