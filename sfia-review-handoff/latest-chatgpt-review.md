# SFIA Review Pack — F-A6-PM-G01 Reassessment after M1 Rollback & Bypass (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 20:03:47 CEST (+0200)
- cycle: 1 — Cadrage (+ 9 QA, 15 Capitalisation, 14 Post-merge, 10 Sécurité/gouvernance)
- profil SFIA: Capitalization
- profondeur: Critical
- typologie: GOVERNANCE / FINDING / REASSESSMENT / M1 / DECISION PREPARATION
- gate consommé: `GO REEVALUATE F-A6-PM-G01 AFTER M1 ROLLBACK AND BYPASS PROOFS — SFIA STUDIO V3-NATIVE`
- repo: `mcleland147/sfia-workspace`
- workspace: `/Users/morris/Projects/sfia-workspace`
- branche locale: `delivery/sfia-studio-control-tower-fast-track` (lecture seule ; analyse sur `origin/main`)
- main: `df9d9c6e688be367f54aa9376e67543eab80533a`
- HEAD local: `c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf`
- status: untracked `.tmp-sfia-review/` uniquement ; aucune op. Git active
- handoff initial blob: `f74690645ec1116f586a2427b2b29d3df63c61e9`
- mode: **read-only projet** — aucune mutation documentaire/projet

## 1. Documents lus (depuis origin/main)
- `24-ci-and-merge-governance-preparation.md` — 478 lignes — blob `f62ff9c314d0de1b72e681bf0a15c00e6f96b198`
- `33-m1-implementation-and-proofs-rex.md` — 441 lignes — blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e`
- `.github/workflows/sfia-studio-ci.yml`
- ruleset GitHub `19798462`
- PR #268–#278
- handoff bypass initial (blob ci-dessus)

## 2. Contenu F-A6 du document 24 (capitalisation / critères / réserves)

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
```

### Sections F-A6 élargies
```markdown
## 1. Gate consommé

Gate Morris :

`GO PREPARE OPTION A CI AND MERGE GOVERNANCE — SFIA STUDIO V3-NATIVE`

Autorisé : lecture repo/config GitHub, branche locale, workflow candidat sous `.github/workflows/**`, docs CI/gouvernance, validations locales, commits locaux, review pack FULL, handoff L3.

**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve.

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


## 5. État CI initial

| Élément | Fait |
|---------|------|
| Workflows existants | **1** — `.github/workflows/interv360-ci.yml` |
| Paths Interv360 | `projects/interv360/**` + workflow lui-même |
| Couverture `projects/sfia-studio/**` | **aucune** |
| Checks GitHub PR #267 | **absents** (cause racine de F-A6-PM-G01 côté observabilité CI) |
| Dependabot / CODEOWNERS / templates PR Studio | **absents** sous `.github/` (hors `workflows/`) |

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


## 15. Findings

| ID | Sévérité | Description | Action ce cycle |
|----|----------|-------------|-----------------|
| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
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
- Branch protection / required checks : **PROPOSED — NOT APPLIED**.

### Candidates (Morris)

- Publier branche + créer PR CI/gouvernance.
- Après 1er run : activer required check sous GO distinct.
- Choisir pin `engines.node` Studio (cycle config séparé).
- Traiter `npm audit` (cycle deps séparé).
- Politique review obligatoire / CODEOWNERS.

### Morris requises (non créées ici)

- GO publish + PR ;
- GO review PR and CI ;
- GO apply branch protection / required checks ;
- GO merge (avec H1/H2/H3 explicite) ;
- toute fermeture F-A6-PM-G01.

---


```

## 3. Sections utiles document 33

### Matrice des preuves (§5 extrait)
```markdown
## 5. Matrice des preuves

| # | Scénario | Branche / PR | Head SHA | Run ID | Detect | Build | Required Gate | Comportement GitHub | Résultat | Limite |
|---|----------|--------------|----------|--------|--------|-------|---------------|---------------------|----------|--------|
| 1 | PR hors Studio | `qa/sfia-studio-m1-controlled-non-studio-proof` / **#272** CLOSED non mergée | `09a2c093427b60234256355bdb7c3521e1e2ae01` | `30248284607` | success `89920211552` | **skipped** `89920245972` | success `89920245604` | Gate PASS sans validation lourde | **PASS** hors Studio | Pas un merge vers main ; PR fermée sans merge |
| 2 | PR Studio en échec | `qa/sfia-studio-m1-controlled-studio-proof` / **#273** | `dd4a083d8e86d06b99dbdcca43f3ec9f24752da0` | `30248328467` | success `89920352750` | **failure** `89920382756` | **failure** `89920627798` | Required check rouge | **BLOCKED** | Échec volontaire contrôlé |
| 3 | Recovery Studio | même PR **#273** | `1b8ea24afc33502b596c564f7daa911d9dc3e995` | `30248480927` | success `89920826448` | success `89920863525` | success `89921140417` | Required check vert | **RECOVERY PASS** | PR ensuite fermée sans merge |
| 4 | PR documentaire Studio | `docs/sfia-studio-doc32-post-p3-m1-correction` / **#275** MERGED | `dd2a68c6a1e45fee1e1f397cb644c2c082a3d877` | `30277076735` | success `90013737560` | success `90013783710` | success `90014180221` | Merge squash autorisé après CLEAN | **PASS** + merge | Contenu doc seulement |
| 5 | Push post-merge `main` | `main` après #275 | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | `30278533761` | success `90018681920` | success `90018732641` | success `90019119514` | CI push complète | **PASS** post-merge | N’équivaut pas à test rollback/bypass |

### Preuve préparatoire complémentaire (hors matrice obligatoire)

| Scénario | PR | Run | Résultat |
|----------|----|-----|----------|
```

### §7 Non-preuves (état REX, avant rollback/bypass tests)
```markdown
## 7. Ce que M1 ne prouve pas

| Non-preuve | Qualification |
|------------|---------------|
| Rollback du ruleset | **non testé** |
| Bypass du ruleset | **non testé** (bypass non utilisé sur #272–#275) |
| Comportement multi-acteurs | **non testé** |
| Résilience aux indisponibilités GitHub Actions | **non testée** |
| Gouvernance de modification future du ruleset | **non éprouvée** |
| Configuration bypass / approvals « loose » | **inchangée** — **réserve** |
| M1 COMPLETE ⇒ Option A COMPLETE | **faux** — anti-claim |
| M1 COMPLETE ⇒ F-A6 CLOSED | **faux** — anti-claim |
| M1 ⇒ ouverture T-A7 | **faux** — anti-claim |
| CI success ⇒ industrialisation / production ready | **faux** — anti-claim |
```

### §10 État F-A6
```markdown
## 10. État de F-A6-PM-G01

### État obligatoire

`MITIGATED — NOT CLOSED`

Source canonique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` (post PR #274).

### Critères couverts (mitigation)

| Critère | Couverture |
|---------|------------|
| Workflow CI Studio sur `main` | **couvert** (#268–#270) |
| Required check stable | **couvert** |
| Ruleset actif sur `main` | **couvert** (`19798462`) |
| Preuve hors Studio PASS | **couvert** (#272) |
| Preuve Studio FAIL puis recovery | **couvert** (#273) |
| Formalisation documentaire MITIGATED | **couvert** (#274) |
| Alignement doc POC `32` | **couvert** (#275) |

### Preuves disponibles

Voir §5 et chronologie §3.

### Critères historiques restant ouverts (empêchant clôture automatique)

| Critère ouvert | Commentaire |
|----------------|-------------|
| Décision Morris explicite de CLOSED | **NOT DECIDED** — D-M1-03 conserve NOT CLOSED |
| Rollback ruleset | non testé |
| Bypass | non testé |
| Durcissement config loose | non décidé |
| REX M1 versionné sur `main` | ce document est **draft local** jusqu’à gate de commit |

### Raisons empêchant la clôture automatique

1. La formalisation #274 a explicitement séparé MITIGATED et CLOSED.
2. Des non-preuves critiques (§7) restent ouvertes.
3. Aucun gate Morris de clôture n’a été consommé.
4. Ce REX **recommandera** éventuellement une réévaluation, sans la décider.

**Interdit dans ce document :** présenter `F-A6 CLOSED` comme verdict.
```

### §11 Réserves
```markdown
## 11. Réserves et risques résiduels

| Réserve / risque | Qualification |
|------------------|---------------|
| REX M1 produit dans ce cycle, **non encore versionné** | **Réserve** (commit projet = gate séparé) |
| Rollback non testé | **Réserve** |
| Bypass non testé | **Réserve** |
| Configuration M1 loose (approvals 0, strict false, bypass PR mode) | **Réserve / risque résiduel** |
| Findings F-CI éventuels non rouverts ici | **Observation** — hors mutation |
| Branches/worktrees résiduels (doc32, F-A6, preuves QA) | **Réserve** de cleanup |
| Dette de maintenance du ruleset | **Risque résiduel** |
| Dérive documentaire future (POC `32` vs Option A `32-path-aware`) | **Risque résiduel** de confusion de chemins |
| Option A non COMPLETE | **Réserve trajectoire** |
| T-A7 non ouverte | **Réserve trajectoire** |
```

### §15 Verdict capitalisation REX
```markdown
## 15. Verdict de capitalisation

`M1 IMPLEMENTATION AND BEHAVIORAL PROOFS CAPITALIZED — F-A6 MITIGATED NOT CLOSED — ROLLBACK AND BYPASS UNTESTED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — MORRIS DECISION REQUIRED FOR NEXT TRAJECTORY STEP`

### Anti-claims (rappel)

- capitalisation M1 ≠ F-A6 CLOSED
- capitalisation M1 ≠ Option A COMPLETE
- capitalisation M1 ≠ ouverture T-A7
- CI success ≠ rollback/bypass testés
- REX draft local ≠ REX versionné sur `main`
- recommandation ≠ décision Morris

---
```

## 4. Problème initial F-A6-PM-G01
- événement: merge PR **#267** sans revue PR/CI formelle et sans CI SFIA Studio observable
- sévérité: **Major — gouvernance**
- risque initial: intégration de changements Studio sans contrôle démontré
- cause: absence de required gate / CI Studio path-aware sur `main`
- mitigation: M1 (workflow + ruleset + required check + preuves comportementales)
- statut canonique actuel (inchangé par ce cycle): `MITIGATED — NOT CLOSED`

## 5. Décisions Morris déjà prises (conservées)
- D-M1-01: M1 techniquement et comportementalement COMPLETE
- D-M1-02: formalisation F-A6 MITIGATED
- D-M1-03: F-A6 **non CLOSED**
- D-M1-05: Option A non COMPLETE
- D-M1-06: T-A7 non ouverte
- Gates techniques consommés ensuite: REX #276, rollback test, bypass #277/#278
- D1–D7 du REX restent formellement `NOT DECIDED` dans les docs (aucune mutation ici) ; les questions techniques sous-jacentes à D1/D2 sont désormais **éprouvées**, sans trancher D3–D7

## 6. Matrice complète des preuves

### A. Mise en place du contrôle
| Preuve | Source | ID/SHA | Résultat | Démontre | Ne démontre pas |
|--------|--------|--------|----------|----------|-----------------|
| Workflow CI | PR #268 | merge `508ef7c4619e` | MERGED | CI Studio existe | gate path-aware final |
| Path-aware required gate | PR #270 | merge `4e2d5cf2f7e6` | MERGED | Detect+Gate | rollback/bypass |
| Ruleset actif | GitHub | `19798462` | active | required check sur main | durcissement approvals |
| Required check | ruleset | `SFIA Studio Required Gate` / `15368` | présent | nom stable | multi-acteur |

### B. Comportements normaux
| Preuve | Source | ID | Résultat | Démontre | Ne démontre pas |
|--------|--------|-----|----------|----------|-----------------|
| Hors Studio PASS | PR #272 | run `30248284607` | Gate success, Build skipped | non-blocage hors Studio | merge main |
| Studio invalide BLOCKED | PR #273 | run `30248328467` | Gate failure | blocage gate rouge | bypass behavior |
| Recovery PASS | PR #273 | run `30248480927` | Gate success | recovery | rollback |
| Studio valide merge | PR #275 | run `30277076735` + squash `ae61c3ed…` | CLEAN merge | merge si gate vert | bypass |
| Post-merge SUCCESS | main | run `30278533761` | success | CI push post-merge | ruleset restore |

### C. Documentation / capitalisation
| Preuve | Source | ID | Résultat | Démontre | Ne démontre pas |
|--------|--------|-----|----------|----------|-----------------|
| Formalisation MITIGATED | PR #274 | `b89065fa92d8` | MERGED | statut documenté | CLOSED |
| Alignement doc 32 | PR #275 | `ae61c3ed48d4` | MERGED | sync POC | finding closed |
| REX M1 complet | PR #276 | squash `49f2edfa5adc` · blob `6c87cf4…` · 441 lignes | post-merge validated | capitalisation | CLOSED |

### D. Rollback
| Preuve | Source | ID | Résultat | Démontre | Ne démontre pas |
|--------|--------|-----|----------|----------|-----------------|
| Disable+restore | handoff rollback | ruleset `19798462` · 1s | `RULESET_RESTORED_IDENTICALLY` | réversibilité exacte | usage bypass |
| Main inchangé pendant rollback | main | `49f2edfa…` | OK | pas de pollution | — |

### E. Bypass comportemental
| Preuve | Source | ID | Résultat | Démontre | Ne démontre pas |
|--------|--------|-----|----------|----------|-----------------|
| Gate rouge déterministe | PR #277 | run `30290065655` · Trailing whitespace only | BLOCKED | failure contrôlée | — |
| Merge normal bloqué | `gh pr merge` sans admin | exit 1 | policy prohibits | blocage normal | — |
| Bypass explicite | REST PUT merge | squash `17840f45f74b` | merged malgré gate rouge | bypass actor effectif | désirabilité du bypass |
| Absence `--admin` | `viewerCanMergeAsAdmin=false` + REST sans admin | — | OK | bypass ≠ admin | — |
| Revert normal | PR #278 | run `30290283916` + squash `df9d9c6e688b` | SUCCESS sans bypass | neutralisation | absence de traces Git |
| Post-revert CI | main | run `30290479092` | SUCCESS | main healthy | — |
| Diff net vide | `49f2edfa…`…`df9d9c6…` | empty | OK | artefact retiré | cleanup branches |
| Pollution | 173 s | < 900 | OK | fenêtre bornée | — |

### PR #268–#278
```json

[
  {
    "number": 268,
    "title": "ci(sfia-studio): add project validation workflow and merge governance",
    "state": "MERGED",
    "mergedAt": "2026-07-26T20:30:39Z",
    "merge": "508ef7c4619e27b664d087fd97d53afe74ea93cc",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/268"
  },
  {
    "number": 269,
    "title": "docs(sfia-studio): publish CI governance post-merge reviews",
    "state": "MERGED",
    "mergedAt": "2026-07-26T21:55:55Z",
    "merge": "60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/269"
  },
  {
    "number": 270,
    "title": "ci(sfia-studio): add path-aware required gate preparation",
    "state": "MERGED",
    "mergedAt": "2026-07-27T05:02:16Z",
    "merge": "4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/270"
  },
  {
    "number": 271,
    "title": "test(ci): prove SFIA Studio required gate on non-Studio PR",
    "state": "CLOSED",
    "mergedAt": null,
    "merge": null,
    "url": "https://github.com/mcleland147/sfia-workspace/pull/271"
  },
  {
    "number": 272,
    "title": "test(ci): verify M1 ruleset on non-Studio PR",
    "state": "CLOSED",
    "mergedAt": null,
    "merge": null,
    "url": "https://github.com/mcleland147/sfia-workspace/pull/272"
  },
  {
    "number": 273,
    "title": "test(ci): verify M1 ruleset on Studio failure and recovery",
    "state": "CLOSED",
    "mergedAt": null,
    "merge": null,
    "url": "https://github.com/mcleland147/sfia-workspace/pull/273"
  },
  {
    "number": 274,
    "title": "docs(sfia-studio): formalize F-A6 as mitigated after M1",
    "state": "MERGED",
    "mergedAt": "2026-07-27T12:38:16Z",
    "merge": "b89065fa92d823843f1eb1014c304e7d13233556",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/274"
  },
  {
    "number": 275,
    "title": "docs(sfia-studio): align document 32 after P3 and M1",
    "state": "MERGED",
    "mergedAt": "2026-07-27T15:08:15Z",
    "merge": "ae61c3ed48d4d1c9fe751eddd73617ba15480734",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/275"
  },
  {
    "number": 276,
    "title": "docs(sfia-studio): capitalize M1 implementation and proofs",
    "state": "MERGED",
    "mergedAt": "2026-07-27T16:35:20Z",
    "merge": "49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/276"
  },
  {
    "number": 277,
    "title": "qa(sfia-studio): controlled M1 bypass probe — DO NOT KEEP",
    "state": "MERGED",
    "mergedAt": "2026-07-27T17:40:01Z",
    "merge": "17840f45f74bbae702bd1a18acb9723b149a6ea0",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/277"
  },
  {
    "number": 278,
    "title": "revert(sfia-studio): remove controlled M1 bypass probe",
    "state": "MERGED",
    "mergedAt": "2026-07-27T17:42:54Z",
    "merge": "df9d9c6e688be367f54aa9376e67543eab80533a",
    "url": "https://github.com/mcleland147/sfia-workspace/pull/278"
  }
]

```

## 7. Matrice des critères historiques de clôture

| Critère | Statut | Preuve | Confiance | Réserve | Obligatoire historique ? |
|---------|--------|--------|-----------|---------|--------------------------|
| Run GitHub prouvé | **satisfait** | #268–#278 / runs | haute | aucune | oui (doc 24) |
| Gouvernance appliquée sur PR réelle | **satisfait** | #270–#278 + séquence GO | haute | aucune | oui |
| Required checks appliqués | **satisfait** | ruleset `19798462` + `15368` | haute | loose config | oui |
| Blocage PR invalide | **satisfait** | #273 + #277 | haute | aucune | oui |
| Recovery validée | **satisfait** | #273 recovery | haute | aucune | oui |
| Post-merge validé | **satisfait** | #275/#276/#278 CI | haute | aucune | oui |
| Rollback validé | **satisfait** | disable/restore 1s | haute | aucune | ouvert REX §10 → comblé |
| Bypass qualifié | **satisfait** | #277/#278 | haute | bypass loose | ouvert REX §10 → comblé |
| Contrôle actif sur main | **satisfait** | ruleset active | haute | aucune | oui |
| Documentation et REX | **satisfait** | docs 24/33 sur main | haute | docs non réécrits post-bypass | oui |

**Note:** la décision Morris explicite de CLOSED reste un **gate séparé**, pas un critère technique manquant.

## 8. Risques résiduels

| Risque | Qualification | Bloquant clôture F-A6 ? | Nature |
|--------|---------------|-------------------------|--------|
| approvals = 0 | loose | **non** | durcissement distinct |
| strict up-to-date = false | loose | **non** | durcissement distinct |
| conversation resolution false | loose | **non** | durcissement distinct |
| bypass actor Morris conservé | démontré effectif | **non** pour problème initial | hardening / ops |
| bypass comportementalement prouvé | surface réelle | **non** si documenté | connaissance de risque |
| audit log org inaccessible | observabilité | **non** | limite d’observation |
| traces permanentes probe/revert | historique Git | **non** | dette de trace acceptée |
| merge/squash/rebase tous autorisés | policy | **non** | choix process |
| admin unique bypass actor | SPOF humain | **non** pour F-A6 initial | hardening |
| procédure ops hors REX | formalisation | **non** | backlog runbook |

### Question structurante — configuration loose

> La configuration M1 loose remet-elle en cause le traitement du problème initial de F-A6, ou constitue-t-elle une amélioration de maturité distincte ?

**Réponse:** amélioration de maturité **distincte**.

Justification:
- le problème initial était l’**absence** de contrôle CI Studio démontré (#267) ;
- M1 instaure un required gate path-aware qui bloque les merges Studio gate-rouge en chemin normal ;
- la config loose (approvals 0, bypass actor) n’est pas la cause du finding ; elle module une surface résiduelle ;
- le REX (§13 Option 3) traite le durcissement comme trajectoire séparée de la séquence rollback/bypass → réévaluation (Option 2) ;
- maintenir F-A6 ouvert uniquement pour suivre le hardening créerait une **dette artificielle** de finding.

## 9. Options de statut

### Option S1 — MAINTAIN MITIGATED NOT CLOSED (sans éligibilité)
Si critère historique non satisfait / preuve insuffisante / risque lié au problème initial.
**Évaluation:** non retenue.

### Option S2 — ELIGIBLE FOR MORRIS CLOSURE DECISION
Si critères satisfaits, contrôles démontrés, rollback/bypass prouvés, réserves = améliorations distinctes.
**Évaluation:** **retenue**.

### Option S3 — CLOSURE CONDITION REMAINS
Si condition finale objective bornée restante.
**Évaluation:** non retenue — exiger le durcissement comme condition serait une prudence générique non documentée comme critère historique de clôture F-A6.

## 10. Challenge anti-dette
- **Utile maintenant ?** oui — éviter un finding Major ouvert sans critère technique restant.
- **Dette si maintien artificiel ?** oui — F-A6 devient backlog de hardening déguisé.
- **Dette si clôture prématurée ?** était réelle avant rollback/bypass ; désormais le risque principal est d’oublier le hardening (cycle séparé).
- **Durcissement dans F-A6 ou nouveau cycle ?** **nouveau cycle / backlog / éventuellement nouveau finding**.
- **Plus simple ?** recommander éligibilité à clôture Morris ; garder statut NOT CLOSED jusqu’au GO CLOSE.
- **Répétable / arbitrage ?** arbitrage Morris obligatoire pour CLOSED.
- **Gate Morris requis ?** oui — `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (NOT CONSUMED).

## 11. Recommandation
`ELIGIBLE FOR MORRIS CLOSURE DECISION`

### Justification
Les critères historiques documentés sont satisfaits ; les non-preuves rollback/bypass du REX §10 sont comblées ; `main` est net (`df9d9c6…`) ; ruleset actif ; les risques loose-config sont des concerns de hardening séparés.

### Preuves déterminantes
- M1 required gate + #272/#273/#275
- REX #276
- rollback restore identique
- bypass #277 + revert #278 (173s, diff net vide, sans `--admin`)

### Réserves non bloquantes
- approvals 0 / strict false / conversation resolution false
- bypass actor conservé (désormais connu et testé)
- audit log org non accessible
- traces Git probe/revert
- docs 24/33 non encore réécrits post-bypass (hors autorisation de ce gate)

### Conditions restantes pour CLOSED
- **uniquement** consommation d’un gate Morris de clôture explicite
- pack documentaire de clôture (ex. update doc 24) éventuel **sous ce gate de clôture**, pas ici

### Impacts / dette évitée
- évite de garder un Major ouvert sans défaut initial restant
- évite de coupler hardening et clôture

### Prochaine décision Morris
- `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` — NOT CONSUMED
- en parallèle possible (non requis pour clôture): gate durcissement ruleset ; cleanup ; cadrage T-A7

## 12. Gouvernance obligatoire (inchangée)
- **F-A6 = MITIGATED — NOT CLOSED**
- Option A non COMPLETE
- T-A7 non ouverte
- D1–D7 NOT DECIDED (formellement)
- ruleset inchangé
- branches/worktrees conservés
- `ELIGIBLE FOR MORRIS CLOSURE DECISION ≠ CLOSED`

## 13. Ruleset final (lecture)
```json

{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
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
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "node_id": "RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4",
  "created_at": "2026-07-27T09:31:28.759+02:00",
  "updated_at": "2026-07-27T19:27:23.150+02:00",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "current_user_can_bypass": "pull_requests_only",
  "_links": {
    "self": {
      "href": "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"
    },
    "html": {
      "href": "https://github.com/mcleland147/sfia-workspace/rules/19798462"
    }
  }
}

```

## 14. Actions non exécutées
- modification docs 24/33 / workflow / ruleset
- déclaration F-A6 CLOSED / Option A COMPLETE / T-A7
- décision durcissement
- commit/push/PR/merge projet
- suppression branches/worktrees
- Notion/CMP

## 15. Anti-claims
- eligible for closure ≠ CLOSED
- rollback/bypass prouvés ≠ ruleset hardened
- F-A6 CLOSED éventuel ≠ Option A COMPLETE / T-A7 OPEN
- clôture ≠ suppression traces Git
- durcissement ≠ exigence implicite de clôture sans preuve

## 16. Verdict
`SFIA STUDIO F-A6-PM-G01 REASSESSMENT COMPLETE — HISTORICAL CLOSURE CRITERIA SATISFIED — ROLLBACK AND BYPASS BEHAVIOR PROVEN — RESIDUAL LOOSE-CONFIG RISKS QUALIFIED AS SEPARATE HARDENING CONCERNS — F-A6 ELIGIBLE FOR MORRIS CLOSURE DECISION — CURRENT STATUS REMAINS MITIGATED NOT CLOSED`

## Review Handoff Git
- commit attendu: `docs(review-handoff): record F-A6 reassessment`
