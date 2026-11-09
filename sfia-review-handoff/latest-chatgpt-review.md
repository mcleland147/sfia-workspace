# SFIA STUDIO NEXT — R5 / ML4
# REVIEW PACK LIGHT — RECETTE PREPARATION / FUNCTIONAL & ENVIRONMENT READINESS

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 03:58 CET |
| GO Morris | STANDARD — RECETTE PREPARATION ONLY (read-only) |
| Processus | SFIA v2.6 |
| Cycle | 9 — QA / VALIDATION |
| Typologie | QA / READINESS |
| Version | 0.0.0-dev / NO RELEASE |
| Autorisé | Investigations read-only · manifeste DRAFT · parcours Morris · Review Pack Light · L3 |
| Interdit | Code Product · migration · démarrage lane RECETTE · mutation env/secrets · push Product · PR/merge · REAL write · E2E utilisateur |

## 2. Git Truth (observé ce cycle)

| Item | Valeur | Check |
|---|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` | OK |
| Remote | `mcleland147/sfia-workspace` | OK |
| Branche | `feat/next-git-collaboration-20261108` | OK |
| HEAD local = distant | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` | OK |
| Tree | `cdbd7e3763b835db5a58458191d4fb648d184fa0` | OK |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` | OK |
| Handoff L3 parent attendu | `d495f6a4e660d2b54705a7d1b054137ad8e71729` | OK (avant ce handoff) |
| PR Product | aucune | OK |
| Dirty local hors Product | `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, qualify script | exclus / non mutés Product |

Aucun reset/clean/stash/rebase. Product tip **inchangé** par ce cycle.

## 3. Sources Git / refs lues

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (mandat)
- `prompts/templates/sfia-cycle-execution-template.md` (mandat)
- CKC cycle 9 `pilots/04-qa-validation.md` (référencé mandat)
- `governance/environnements-recette-et-promotions.md` @ tip
- SEF / roadmap / product-versioning / naming (gouvernance)
- décision `2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md`
- `construction/integration-git/{contrat,matrice,specification}` @ tip
- `architecture-technique/cadrage-r4.md`, `ux-ui/integration-git-ux-ml4.md`
- `delivery-history.md` @ tip
- Code tip : `github-app-config.ts`, `resource-service.ts` (`listGitRefs`), schema `012`, package `0.0.0-dev`
- Handoff readiness précédent `d495f6a4`

## 4. Qualification candidat `51b0c3b6`

| Champ | Observation |
|---|---|
| SHA / tree distants | Disponibles et alignés local |
| Package | `sfia-studio-web` `0.0.0-dev` · Next 15.5.29 |
| Schema revision code | `012_auth_concurrency_safety` |
| Migrations tip | `001`…`012` présentes (dont `008`–`012` Git/OAuth) |
| Product version officielle | **NOT AVAILABLE** |
| Suites historiques tip | tsc/unit200/int237/build/PW13 rapportées cycles antérieurs — **pas ré-exécutées ce cycle** |
| CI distante tip | NON OBSERVÉE / NON ÉQUIVALENTE |
| Compatibilité ML1–ML3 | Branche = main@c658f590 + ML4 + 2 correctifs ; baseline préservée |

Aucune campagne technique exhaustive lancée (aucun changement source).

## 5. ENV-01 — Lanes observées (sans mutation)

### A. DEV (actif)

| Item | Observation |
|---|---|
| Processus | `next dev --turbopack -p 3100 -H 127.0.0.1` (worktree ML4) |
| Listen | `127.0.0.1:3100` |
| STUDIO_LANE | `DEV` |
| DB | `127.0.0.1:5433` / db `sfia_next_dev` (Docker) |
| BETTER_AUTH_URL | `http://127.0.0.1:3100` |
| GITHUB callback | `http://127.0.0.1:3100/api/integrations/github/callback` |
| Host alignement | **cohérent** `127.0.0.1` (auth + app + callback) |
| Provider | `STUDIO_GITHUB_PROVIDER=real` · `STUDIO_GITHUB_USER_OAUTH=real` |
| Mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (DEV) |
| OpenAI | clé présente (non exposée) |

### B. RECETTE ML4

| Item | Observation |
|---|---|
| Lane ML4 @ tip `51b0c3b6` | **ABSENTE** |
| Build RECETTE ML4 | **NOT CREATED** |
| URL RECETTE ML4 | **NOT SERVED** |
| Worktrees RECETTE historiques | ml1-c3 @ `0db58be8` ; ml2 @ `54fc4e9c` ; g4 @ `29535d07` — **pas le tip ML4** |
| Port 3200 | **OCCUPÉ** par `next-server` G4 RECETTE (`29535d07`) sur `127.0.0.1:3200` |
| DB 5434 | partagée physiquement entre lanes RECETTE historiques (dbs logiques distinctes) |
| Cookie isolation | **Réserve A ENV-01** : ports différents sur même host `127.0.0.1` ≠ isolation cookies ; mitigation profils navigateur séparés |

Note critique OAuth : historique localhost ≠ 127.0.0.1. Toute future URL RECETTE devra aligner **host app + BETTER_AUTH_URL + callback GitHub App** sans fallback silencieux.

### C. STABLE

**NOT AVAILABLE** — non modifié.

## 6. GitHub App — readiness (non secret)

| Item | Observation |
|---|---|
| App | `sfia-studio-next-dev` (historique) |
| App ID | `5670639` (= expected code) |
| Installation ID | `179935689` (= expected code) |
| Allowlist repo | `mcleland147/chantiers360` |
| Owner | `mcleland147` |
| PEM path | présent · mode `0600` · size 1679 B · **contenu non lu / non reporté** |
| OAuth READ REAL | PROVEN historique |
| Documentary REAL | PROVEN historique · PR #18 OPEN · non rejoué |
| Merge REAL | HARD-BLOCKED |
| MULTI-REPO REAL | NOT PROVEN |
| Nouvelle écriture | **exige GO distinct** — ne pas réutiliser autorisation PR #18 |

## 7. Matrice readiness fonctionnelle ML4-AT-01..22

Légende classe : **A** recettable maintenant (après mise à disposition) · **B** DET seulement · **C** dépend config REAL · **D** indisponible · **E** hors 1er parcours borné.

| AT | Capacité | Classe | Preuve | Fake/Real | Recettable maintenant ? | Prérequis | Réserve | Sévérité |
|---|---|---|---|---|---|---|---|---|
| 01 | Studio sans Git | A/B | DET PASS | DET | Oui après lane | lane RECETTE | USER E2E NOT RUN | basse |
| 02 | OAuth Studio ≠ repo scopes | A/B | DET contrat | DET | Oui | — | — | basse |
| 03 | Intégrations GitHub | C | DET + OAuth REAL hist. | DET+REAL READ | Oui si callback lane aligné | App OAuth URI lane | cookie host | **haute pour delivery** |
| 04 | Dépôt à la carte | C | DET ; REAL attach sandbox | DET+REAL borné | Oui mono-repo | allowlist | multi-repo NOT PROVEN | moyenne |
| 05 | Ajout source depuis Nora | B | PARTIAL DET | DET | Partiel | — | parcours contextuel | moyenne |
| 06 | Org pending | B/E | DET service | DET | Non prioritaire | Org REAL | NOT PROVEN | basse |
| 07 | Disconnect/detach | B | DET | DET | Oui | — | — | basse |
| 08 | Nora lit Git ref/SHA | B/C | DET ; LIVE NOT RUN | DET | Lecture REAL à qualifier | OpenAI+Git REAL | Nora LIVE NOT PROVEN | moyenne |
| 09 | README hostile | B | DET | DET | Oui | — | LIVE adversarial NOT RUN | basse |
| 10 | Document D4 | A/B | DET | DET | Oui | — | USER E2E | basse |
| 11 | Branche+commit | C | DET + REAL hist. | DET+REAL | Oui sous GO write | mutations documentary | mono-repo | haute (GO write) |
| 12 | PR sans merge | C | DET + REAL hist. PR#18 | DET+REAL | Oui sous GO write | idem | — | haute (GO write) |
| 13 | Merge 2e mandat | E | DET ; REAL blocked | DET | Non (1er parcours) | — | MERGE REAL NOT PROVEN | hors scope |
| 14 | HEAD stale | B | DET | DET | Oui | — | — | basse |
| 15 | Timeout/reprise | B | DET + REC-01 | DET | Oui | — | — | basse |
| 16 | Isolation Pilotes | B | DET | DET | Partiel (2 comptes) | 2e identité | — | moyenne |
| 17 | Path policy | B | DET | DET | Oui | — | — | basse |
| 18 | D8 non-conformité | B | DET | DET | Oui | — | — | basse |
| 19 | Intégration future absente | B | DET UI | DET | Oui | — | — | basse |
| 20 | Lien GitHub | B | PARTIAL | DET | Partiel | — | REAL link | basse |
| 21 | Responsive/a11y | B | PARTIAL | DET | Partiel | — | Figma≠runtime | moyenne |
| 22 | Révocation accès | B | DET | DET | Oui | — | REAL revoke | moyenne |

**1er parcours utilisateur borné proposé :** AT-01,03,04,08(partiel),10,11,12,15,18 — merge (13) et multi-repo exclus.

## 8. Parcours de recette Morris (à exécuter seulement après GO env + éventuel GO REAL write)

### SCÉNARIO 1 — ENTRÉE
- Geste : ouvrir/créer projet ; Nora sans Git.
- Attendu : usable sans dépôt.
- Captures : projet ID, absence source Git.
- AT : 01 · Prérequis : lane RECETTE · STOP : crash auth · Statut futur : NOT RUN

### SCÉNARIO 2 — INTÉGRATION
- Geste : Paramètres → Intégrations → connecter GitHub.
- Attendu : CONNECTED ; identité App distincte Studio OAuth.
- Captures : status JSON sans secret ; host URL.
- AT : 02/03 · Prérequis : callback App = URL lane · STOP : host mismatch localhost/127.0.0.1

### SCÉNARIO 3 — DÉPÔT
- Geste : rattacher `mcleland147/chantiers360`.
- Attendu : source projet ATTACHED ; autres repos hors allowlist refusés/non listés.
- AT : 04 · Prérequis : installation 179935689 · STOP : multi-repo attendu à tort

### SCÉNARIO 4 — NORA
- Geste : demander lecture fichier Git avec ref explicite.
- Attendu : contenu + ref/SHA ; pas d'invention `main`.
- AT : 08 · Prérequis : OpenAI + Git read · STOP : attribution LIVE à SCRIPTED
- Note : `listGitRefs` borné à `main` (limitation connue)

### SCÉNARIO 5 — DOCUMENT
- Geste : produire/réviser D4 ; recharger.
- Attendu : AVAILABLE persisté.
- AT : 10 · STOP : perte révision

### SCÉNARIO 6 — PUBLICATION (inspection + D6)
- Geste Morris : inspecter diff/acteur ; HumanDecision D6.
- Attendu : mandat APPLICABLE ; pas d'effet avant D6.
- AT : inspection/D6 · **écriture NON automatique**
- STOP : effet sans geste

### SCÉNARIO 7 — EFFET GIT
- **UNIQUEMENT sous GO REAL write ultérieur**
- Attendu : branche → commit → PR ; main intact ; D8.
- AT : 11/12 · Ne pas réutiliser autorisation PR #18
- STOP : merge tenté / hors docs / mauvais repo

### SCÉNARIO 8 — CONTINUITÉ
- Geste : revenir Studio ; retrouver doc/tentative/preuves.
- AT : 15/18 · STOP : états inventés

### SCÉNARIO 9 — LIMITES
- Qualifier non-dispo : merge REAL, multi-repo, Nora LIVE gaps, Figma exhaustif.

Tous statuts PASS/FAIL : **à renseigner seulement en vraie recette** → NOT RUN maintenant.

## 9. Manifeste RECETTE — DRAFT (non servi)

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-git-collaboration-20261108
base_main_sha: c658f59023d44a0e22448c7ee034e3c1dda292a2
source_sha: 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
source_tree_sha: cdbd7e3763b835db5a58458191d4fb648d184fa0
product_version: NOT AVAILABLE
candidate_version: NOT ATTRIBUTED
build_id: NOT CREATED
build_status: NOT BUILT
served_address: NOT SERVED
schema_revision: 012_auth_concurrency_safety  # code tip ; DB RECETTE ML4 NOT OBSERVED
test_data_revision: NOT OBSERVED
capabilities:
  openai: CONFIG_PRESENT_ON_DEV — RECETTE_NOT_PROVISIONED
  github_read: REAL_SANDBOX_READY_IF_LANE_ALIGNED — HISTORICALLY_PROVEN
  github_documentary_write: REQUIRES_DISTINCT_GO — HISTORICALLY_PROVEN_BOUNDED
  github_merge: HARD_BLOCKED / NOT PROVEN
  cursor: NOT IN ML4 PATH
quality_evidence:
  - historical_det_tip: tsc/unit200/int237/build/pw13 (prior cycles; not re-run this cycle)
  - oauth_read_real: PROVEN_HISTORICAL
  - documentary_real_pr18: PROVEN_HISTORICAL_BOUNDED
known_gaps:
  - no_ml4_recette_lane_or_build_at_tip
  - port_3200_occupied_by_g4_recette_29535d07
  - cookie_isolation_same_host_reserve_A
  - multi_repo_real_not_proven
  - listGitRefs_bounded_to_main
  - merge_real_hard_blocked
  - nora_live_git_not_proven
  - user_e2e_morris_not_run
  - figma_runtime_fidelity_partial
review_decision: AWAITING MORRIS ENVIRONMENT DELIVERY GO
```

## 10. Blockers vs réserves

### Bloque la mise à disposition RECETTE (sans nouveau GO env)
1. **Aucune lane/build RECETTE** servant `51b0c3b6`.
2. **Port 3200 occupé** par build G4 non-ML4 — conflit potentiel d'adresse candidate.
3. **Alignement OAuth callback** pour la future URL lane non provisionné (App settings + env lane).
4. **Secrets/DB RECETTE ML4** non provisionnés / NOT OBSERVED.

### Bloque seulement une fonctionnalité (pas toute la mise à dispo)
- Merge REAL · multi-repo REAL · `listGitRefs` élargi · Nora LIVE exhaustif · AT-05 contextuel complet.

### Relève de la recette Morris (après delivery)
- USER E2E scénarios 1–9 · geste HumanDecision · fidélité Figma/a11y.

### Dette transférable avec exit
- R1–R5 CARRIED · R6 NON ISSUE · R7/R8 corrigés · ML4-REC-01 corrigé distant · Réserve A cookies (exit: isolation host/profil avant STABLE).

## 11. Fake/Real Qualification §6.16

| Capacité | Statut ce cycle |
|---|---|
| Readiness investigation | **QUALIFIED** |
| RECETTE served | NOT SERVED |
| USER E2E | NOT RUN |
| OAuth READ REAL | PROVEN historique |
| Documentary REAL | PROVEN historique borné |
| MULTI-REPO / MERGE REAL | NOT PROVEN |
| Product tip | VERIFIED `51b0c3b6` |
| Product modifié ce cycle | NON |

## 12. Proposition prochain GO borné

**GO Morris — ENVIRONMENT DELIVERY (distinct)** pour tip exact `51b0c3b6` / tree `cdbd7e37` :

1. Créer worktree/artefact RECETTE séparé (pas hot-reload DEV).
2. Build figé `next start` (pas turbopack DEV).
3. DB PostgreSQL logique dédiée + secrets lane distincts.
4. Choisir host/port **explicites** ; aligner BETTER_AUTH_URL + callback App.
5. Décider occupation 3200 (stop G4 hors GO, ou autre port enregistré).
6. Capacités : github_read REAL sandbox ; documentary write **OFF** jusqu'à GO write.
7. Fournir URL + manifeste non secret ; puis Morris exécute scénarios 1–6/8/9.
8. Scénario 7 seulement sous **GO REAL write** ultérieur.

Pas de GO clôture ML4 / ADOPTED / STABLE.

## 13. Verdict unique

**ML4 RECETTE PREPARATION — READINESS QUALIFIED — AWAITING MORRIS ENVIRONMENT DELIVERY GO.**

Claims non avancés : RECETTE STARTED/ACCEPTED · USER E2E PROVEN · MULTI-REPO/MERGE REAL PROVEN · PR/main/STABLE/ADOPTED/ML4 CLOSED.
