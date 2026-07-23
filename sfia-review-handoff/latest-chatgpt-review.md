# SFIA Review Pack — Post-merge PR #256 (Documentary Consolidation)

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 07:51:06 CEST |
| Cycle | Post-merge |
| Profil | Critical |
| Gate consommé | `GO POST-MERGE — PR #256 DOCUMENTARY CONSOLIDATION` |
| Repo | mcleland147/sfia-workspace |
| PR | [#256](https://github.com/mcleland147/sfia-workspace/pull/256) — **MERGED** (squash) |
| Merge commit / main HEAD | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| Parent (pré-merge) | `445702dcad750734cef4b97122e7ccb1e67b24ee` (PR #255) |
| Branche source | `docs/sfia-studio-recover-unmerged-project-docs` @ `1a2fa31…` — **conservée** |
| Worktree initial | `delivery/sfia-studio-control-tower-fast-track` @ `bb3c9e29936a925174beb0c1758e8fe887e58bc3` |
| Untracked local | uniquement `.tmp-sfia-review/**` (attributable ; non projet) |

## Verdict

**PR #256 POST-MERGE VERIFIED — DOCUMENTARY CONSOLIDATION CLOSED**

## Local Git Truth Check

- remote origin = `https://github.com/mcleland147/sfia-workspace.git`
- `origin/main` = `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` (attendu confirmé)
- staged = vide
- untracked = `.tmp-sfia-review/**` seulement
- aucune action destructrice

## Validations Git

```
416af8a docs(sfia-studio): consolidate unmerged project documents (#256)
 .../75-next-product-increment-framing.md           | 474 +++++++++++++++++++++
 ...-product-increment-options-and-decision-pack.md | 230 ++++++++++
 ...ive-product-validation-framing-and-readiness.md | 277 ++++++++++++
 ...e-product-validation-execution-decision-pack.md | 257 +++++++++++
 .../79-shared-technical-platform-architecture.md   | 401 +++++++++++++++++
 ...d-technical-platform-migration-decision-pack.md | 235 ++++++++++
 .../83-unmerged-docs-consolidation-pr-readiness.md |  60 +++
 projects/sfia-studio/README.md                     |  24 +-
 8 files changed, 1953 insertions(+), 5 deletions(-)
```

### name-status

```
A	projects/sfia-studio/75-next-product-increment-framing.md
A	projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
A	projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
A	projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
A	projects/sfia-studio/79-shared-technical-platform-architecture.md
A	projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
A	projects/sfia-studio/83-unmerged-docs-consolidation-pr-readiness.md
M	projects/sfia-studio/README.md
```

### stat

```
.../75-next-product-increment-framing.md           | 474 +++++++++++++++++++++
 ...-product-increment-options-and-decision-pack.md | 230 ++++++++++
 ...ive-product-validation-framing-and-readiness.md | 277 ++++++++++++
 ...e-product-validation-execution-decision-pack.md | 257 +++++++++++
 .../79-shared-technical-platform-architecture.md   | 401 +++++++++++++++++
 ...d-technical-platform-migration-decision-pack.md | 235 ++++++++++
 .../83-unmerged-docs-consolidation-pr-readiness.md |  60 +++
 projects/sfia-studio/README.md                     |  24 +-
 8 files changed, 1953 insertions(+), 5 deletions(-)
```

### `git diff --check`

PASS (exit 0)

### Chemins protégés / produit

ABSENTS du merge : `method/**`, `prompts/**`, `docs/**`, `scripts/**`, `.github/**`, `.sfia/**`, `.cursor/**`, `projects/sfia-studio/app/**`, secrets.

### GitHub (`gh pr view 256`)

| Champ | Valeur |
|-------|--------|
| state | MERGED |
| mergedAt | 2026-07-23T05:43:10Z |
| mergeCommit | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| base | main |
| head | docs/sfia-studio-recover-unmerged-project-docs |
| files | 8 |
| additions / deletions | +1953 / −5 |
| reviews / comments | aucun |
| statusCheckRollup | **[] — CI absente (≠ PASS)** |
| force-push | non signalé |

## Sources consultées (origin/main)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- docs Studio 75–83 + README (lecture intégrale)
- handoff distant pré-cycle : `b57dd8e…` / blob `14d81a6c…`

## Statut sémantique documents 75–83

### `75-next-product-increment-framing.md`

- blob `origin/main` : `71b2699db8e4138aacc032a68c57fac7b42f2748`
- ligne statut : | **Statut** | `framing-candidate` — trajectoire **réordonnée** (Live Validation prioritaire) |
- verdict sémantique : OK candidate. Live Validation = priorité immédiate ; B′ différée (capitalisation). Anti-claims : pas D1 COMPLETE / PROJECT LINKED / CYCLE OPENED / V3-ADOPTED. Aucune exécution live prétendue.

### `76-next-product-increment-options-and-decision-pack.md`

- blob `origin/main` : `513c9c0e73df0e136b6c68cdae261173b202a461`
- ligne statut : | **Statut** | `decision-pack-candidate` — priorité **Live Product Validation** actée ; B′ différée |
- verdict sémantique : OK candidate. GO EXÉCUTION LIVE proposé, non consommé. B′ différée. Anti-claims LIVE VALIDATED / CYCLE OPENED présents comme interdictions.

### `77-live-product-validation-framing-and-readiness.md`

- blob `origin/main` : `35c3df1906f317c159dc8379c808104e8cf0d2cc`
- ligne statut : | **Statut** | `live-prep-candidate` — **plan prêt** ; **non exécuté** |
- verdict sémantique : OK `live-prep-candidate` — plan prêt, non exécuté. Dual-track = hypothèse à arbitrer Morris. Pas d’appel GPT live.

### `78-live-product-validation-execution-decision-pack.md`

- blob `origin/main` : `7205302e178fa4a7f0be344d1479504e9a452470`
- ligne statut : | **Statut** | `execution-pack-candidate` — **non autorisé à exécuter** sans GO Morris |
- verdict sémantique : OK `execution-pack-candidate` — non autorisé sans GO. Verdicts A/B/C/D = critères candidats, non résultats. Dual-track à confirmer.

### `79-shared-technical-platform-architecture.md`

- blob `origin/main` : `82ff90decdcb5305ffb00bf0264e2754fe63abfa`
- ligne statut : | **Statut** | `architecture-candidate` — **non validée** |
- verdict sémantique : OK `architecture-candidate` historique + Note historique postérieure → PR #255 / 81–82. Ne réouvre pas delivery. Anti-claims platform « livrée » dans corps historique ; note Git clarifie post-merge.

### `80-shared-technical-platform-migration-decision-pack.md`

- blob `origin/main` : `3f6b9f4595b0dfeea0c2a71f6c91d88364a4e08d`
- ligne statut : | **Statut** | `decision-pack-candidate` — **non validé** |
- verdict sémantique : OK `decision-pack-candidate` historique + Note historique → #255. « Pas OPS1 décommissionné » = anti-claim. Lots D1 tools/context / Live / B′ différés.

### `81-shared-technical-platform-delivery-report.md`

- blob `origin/main` : `bf259167998b95018a06153126f2a98bfac31e65`
- ligne statut : | **Statut** | `delivery-local-candidate` — validation Morris **requise** |
- verdict sémantique : Hors diff #256 (déjà sur main via #255). Métadonnée interne encore `delivery-local-candidate` — **réserve documentaire historique** (non réécrite ; hors autorisation).

### `82-shared-technical-platform-validation-and-pr-readiness.md`

- blob `origin/main` : `a9e7cdd3c21a3958955771062c1f7ec28b40d1a6`
- ligne statut : | **Statut** | `PR opened` — revue Morris / GitHub requise |
- verdict sémantique : Hors diff #256. Métadonnée interne encore `PR opened` alors que README/#255 = MERGED — **réserve documentaire historique** (gate séparé possible).

### `83-unmerged-docs-consolidation-pr-readiness.md`

- blob `origin/main` : `80878a9b748bee2a8cd693dcd97851dc3e1ca5e5`
- ligne statut : | **Statut** | `draft-pr-candidate` |
- verdict sémantique : Rapport **pré-merge** intégré tel quel. Statut `draft-pr-candidate` + « MERGE REQUIRES MORRIS GO » désormais **historiques post-merge**. Non réécrit (autorisé).

## Notes historiques 79 / 80 (extrait complet utile)

### 79 — fin de document

```markdown

Pas de platform « livrée ». Pas de suppression OPS1. Pas LIVE VALIDATED. Pas B′. Pas V3-ADOPTED. Pas D1 COMPLETE.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** Après rédaction de ce document candidate, Morris a consommé `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`. La delivery Option B a été intégrée sur `main` via PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255) (squash `445702dcad750734cef4b97122e7ccb1e67b24ee`). Les rapports d’exécution et de validation sont `81` et `82`.

Ce document **79** conserve son statut `architecture-candidate` d’origine (historique de cadrage). Il ne remplace pas `81`/`82` et ne réouvre pas la delivery.
```

### 80 — fin de document

```markdown

Pas de code platform créé. Pas GO DELIVERY consommé. Pas live exécuté. Pas OPS1 décommissionné. Pas B′.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** La delivery Shared Technical Platform recommandée ici (Option B) a ensuite été exécutée et mergée (PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255), squash `445702dc…`). Voir `81` (delivery) et `82` (validation / PR readiness).

Ce document **80** reste `decision-pack-candidate` historique. Les lots D1 tools/context, Live Product Validation, cleanup wrappers et Option B′ restent différés selon les gates Morris post-merge.
```

## Document 83 — contenu complet (pré-merge historique)

```markdown
# SFIA Studio — Consolidation des documents non intégrés — PR readiness

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `83-unmerged-docs-consolidation-pr-readiness.md` |
| **Statut** | `draft-pr-candidate` |
| **Cycle** | PR readiness — branches / worktrees non mergés |
| **Profil** | Critical |
| **Base** | `origin/main` @ `445702dcad750734cef4b97122e7ccb1e67b24ee` |
| **Branche** | `docs/sfia-studio-recover-unmerged-project-docs` |
| **Gate** | Consolidation documentaire bornée (pas de merge sans GO Morris) |

---

## 1. Objectif

Récupérer sur `main` les documents Studio **75–80** produits dans le worktree de cadrage et jamais commités, tout en alignant le README sur l’état **post-merge PR #255**.

## 2. Inventaire (synthèse)

| Source | Verdict |
|--------|---------|
| `framing/sfia-studio-next-product-increment` @ `88fa465…` | Tip **ancêtre** de main ; **0** commit propre ; docs 75–80 **untracked** uniquement |
| `delivery/sfia-studio-shared-technical-platform` | Contenu **absorbé** par squash #255 (blob 81 identique) ; tip non ancêtre (squash) — **écarté** |
| `delivery/sfia-studio-control-tower-fast-track` | Absorbé par squash #254 — **écarté** |
| Branches OPS1 delivery historiques | Code produit obsolète / déjà mergé via squash — **écartées** |
| `sfia/review-handoff` | Branche handoff (hors consolidation Studio docs) — **écartée** |
| Worktree framing untracked 75–80 | **Retenu** — contenu utile, absent de main |

Aucun conflit de versions concurrentes pour 79/80 (une seule source : framing WT).

## 3. Contenu consolidé

| Fichier | Provenance | Statut préservé |
|---------|------------|-----------------|
| `75`…`78` | Framing WT untracked | candidates live/B′ (non exécutés) |
| `79`, `80` | Framing WT untracked | architecture/decision **candidates** + note historique post-#255 |
| `README.md` | Alignement | liens 75–83 ; #255 = **MERGED** |
| `83` | Ce cycle | rapport consolidation |

**Aucune** modification `app/**`, `method/**`, `prompts/**`, `.github/**`.

## 4. Validations

- `git diff --check` : PASS
- Chemins protégés : absents du diff
- Secrets : absents
- Code produit : absent
- Cohérence : 79/80 ne prétendent pas remplacer 81/82
- Draft PR : [#256](https://github.com/mcleland147/sfia-workspace/pull/256)

## 5. Anti-claims

Pas de merge de cette PR sans GO Morris. Pas Live Validation exécutée. Pas B′. Pas cleanup OPS1. Pas V3-ADOPTED. Pas de réouverture delivery platform.

## 6. Rollback

`git revert` des commits de la branche docs, ou fermeture de la draft PR sans merge.

## 7. MERGE REQUIRES MORRIS GO
```

## Cohérence README

Liens 75–83 présents. #255 marquée MERGED. Live / B′ différées. Séquence : Platform → D1 unifié → Live → B′.
Mention explicite PR #256 **absente** (non exigée si consolidation via 83) — réserve mineure non bloquante.
Section README concernée :

```markdown
### Cadrage incrément suivant + Live prep (historique, non livré comme code)
| [75-next-product-increment-framing.md](./75-next-product-increment-framing.md) | Gap analysis, options A–F, B′ différée — **`framing-candidate`** |
| [76-next-product-increment-options-and-decision-pack.md](./76-next-product-increment-options-and-decision-pack.md) | Decision pack ; priorité Live Product Validation — **`decision-pack-candidate`** |
| [77-live-product-validation-framing-and-readiness.md](./77-live-product-validation-framing-and-readiness.md) | Readiness GPT / canonique / Git / GitHub / D1 — **`live-prep-candidate`** |
| [78-live-product-validation-execution-decision-pack.md](./78-live-product-validation-execution-decision-pack.md) | Scénarios LPV-01…06 — **`execution-pack-candidate`** |
> Live Product Validation et Option B′ restent **différées** (pas d’exécution dans ce cycle de consolidation).
### Shared Technical Platform (cadrage → delivery → merge)
| [79-shared-technical-platform-architecture.md](./79-shared-technical-platform-architecture.md) | Architecture candidate Option B — **`architecture-candidate`** (historique) |
| [80-shared-technical-platform-migration-decision-pack.md](./80-shared-technical-platform-migration-decision-pack.md) | Decision pack migration — **`decision-pack-candidate`** (historique) |
| [81-shared-technical-platform-delivery-report.md](./81-shared-technical-platform-delivery-report.md) | Rapport delivery — intégré via [#255](https://github.com/mcleland147/sfia-workspace/pull/255) |
| [82-shared-technical-platform-validation-and-pr-readiness.md](./82-shared-technical-platform-validation-and-pr-readiness.md) | Validation / PR readiness — [#255](https://github.com/mcleland147/sfia-workspace/pull/255) **MERGED** |
| [83-unmerged-docs-consolidation-pr-readiness.md](./83-unmerged-docs-consolidation-pr-readiness.md) | Consolidation docs 75–80 + alignement post-merge — **`draft-pr-candidate`** |
> **Statut Git :** Shared Technical Platform **MERGED** sur `main` @ `445702dc…` (PR #255, squash).
> **Séquence active :** Platform intégrée → D1 unifié (tools/context) → Live Product Validation → décision B′.
```

## Diff README complet (`445702dc..416af8a`)

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 266ee4d..544e163 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -504,12 +504,26 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 *SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*

-### Shared Technical Platform (PR readiness)
+### Cadrage incrément suivant + Live prep (historique, non livré comme code)

 | Document | Rôle |
 |----------|------|
-| [81-shared-technical-platform-delivery-report.md](./81-shared-technical-platform-delivery-report.md) | Rapport delivery Option B — `lib/platform/**` — **`delivery-local-candidate`** |
-| [82-shared-technical-platform-validation-and-pr-readiness.md](./82-shared-technical-platform-validation-and-pr-readiness.md) | Validation + PR readiness — **`PR opened`** [#255](https://github.com/mcleland147/sfia-workspace/pull/255) |
+| [75-next-product-increment-framing.md](./75-next-product-increment-framing.md) | Gap analysis, options A–F, B′ différée — **`framing-candidate`** |
+| [76-next-product-increment-options-and-decision-pack.md](./76-next-product-increment-options-and-decision-pack.md) | Decision pack ; priorité Live Product Validation — **`decision-pack-candidate`** |
+| [77-live-product-validation-framing-and-readiness.md](./77-live-product-validation-framing-and-readiness.md) | Readiness GPT / canonique / Git / GitHub / D1 — **`live-prep-candidate`** |
+| [78-live-product-validation-execution-decision-pack.md](./78-live-product-validation-execution-decision-pack.md) | Scénarios LPV-01…06 — **`execution-pack-candidate`** |

-> **Statut :** **PR opened** [#255](https://github.com/mcleland147/sfia-workspace/pull/255) — merge **fermé** ; pas de baseline claim.
-> **Séquence candidate :** Shared Technical Platform → D1 unifié (tools/context) → Live Product Validation → décision B′.
+> Live Product Validation et Option B′ restent **différées** (pas d’exécution dans ce cycle de consolidation).
+
+### Shared Technical Platform (cadrage → delivery → merge)
+
+| Document | Rôle |
+|----------|------|
+| [79-shared-technical-platform-architecture.md](./79-shared-technical-platform-architecture.md) | Architecture candidate Option B — **`architecture-candidate`** (historique) |
+| [80-shared-technical-platform-migration-decision-pack.md](./80-shared-technical-platform-migration-decision-pack.md) | Decision pack migration — **`decision-pack-candidate`** (historique) |
+| [81-shared-technical-platform-delivery-report.md](./81-shared-technical-platform-delivery-report.md) | Rapport delivery — intégré via [#255](https://github.com/mcleland147/sfia-workspace/pull/255) |
+| [82-shared-technical-platform-validation-and-pr-readiness.md](./82-shared-technical-platform-validation-and-pr-readiness.md) | Validation / PR readiness — [#255](https://github.com/mcleland147/sfia-workspace/pull/255) **MERGED** |
+| [83-unmerged-docs-consolidation-pr-readiness.md](./83-unmerged-docs-consolidation-pr-readiness.md) | Consolidation docs 75–80 + alignement post-merge — **`draft-pr-candidate`** |
+
+> **Statut Git :** Shared Technical Platform **MERGED** sur `main` @ `445702dc…` (PR #255, squash).
+> **Séquence active :** Platform intégrée → D1 unifié (tools/context) → Live Product Validation → décision B′.
```

## Décisions Morris validées / confirmées

- SFIA v2.6 baseline officielle
- PR #254 intégrée (CT+D1)
- PR #255 intégrée (Shared Technical Platform)
- PR #256 intégrée (consolidation docs 75–80 + 83 + README)
- Shared Technical Platform livrée sur main
- B′ différée
- Branche source PR #256 conservée

## Observations

- D1 consomme `platform/ai` (post-#255)
- D1 tools/context unifiés **non** livrés
- Live Product Validation **non** exécutée
- Wrappers OPS1 encore présents
- 77/78 décrivent dual-track historique
- 79/80 (notes) indiquent cible D1 unifiée après platform ; corps historique antérieur au merge #255

## Recommandations non décisionnelles (≠ GO)

1. Prochain cycle candidat : **D1 Shared Platform Integration**
2. Puis **Live Product Validation** unifiée
3. Puis décision Morris sur **B′**

## Réserves

1. Doc **83** conserve wording pré-merge (`draft-pr-candidate`, MERGE REQUIRES) — historique, non réécrit
2. Docs **81/82** métadonnées internes pré-#255 post-merge non alignées — hors scope #256 ; gate doc séparé possible
3. README ne cite pas explicitement #256 / `416af8a`
4. Worktree framing peut encore avoir copies untracked locales 75–80 — dette locale hors main

## Dette

- Alignement post-merge docs 81/82/83 (métadonnées) si Morris ouvre un cycle doc sync
- Dual-track 77/78 à actualiser après unification D1 tools/context
- Nettoyage branches delivery historiques — hors autorisation

## Anti-claims (ce cycle)

Pas de Live exécutée · pas B′ · pas cleanup OPS1 · pas V3-ADOPTED · pas D1 COMPLETE · pas CYCLE OPENED · pas PROJECT LINKED · pas modification method/prompts/app · pas nouvelle PR projet · candidats ≠ décisions validées

## Actions exécutées

- Local Git Truth Check
- Vérifications Git + `gh pr view 256`
- Lecture sources méthode + docs 75–83 + README
- Analyse sémantique
- Review pack FULL
- Publication handoff (ce cycle)

## Actions non exécutées

- Modification `projects/sfia-studio/**`
- Nouvelle PR / merge / force-push / suppression branche
- Live Product Validation / D1 Shared Platform Integration / B′ / cleanup OPS1
- Tests applicatifs (non requis ; aucun code produit dans le merge)

## Rollback

Revert du squash sur main : `git revert {main}` (nécessite GO Morris). Branche source toujours disponible @ `1a2fa31…`.

## Prochain cycle candidat

**D1 Shared Platform Integration** (tools/context unifiés) — sous gate Morris distinct.

---

## Annexes — contenus intégrés (documents ajoutés par #256)

### `projects/sfia-studio/75-next-product-increment-framing.md` (complet)

```markdown
# SFIA Studio — Cadrage du prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `75-next-product-increment-framing.md` |
| **Statut** | `framing-candidate` — trajectoire **réordonnée** (Live Validation prioritaire) |
| **Gate consommé (cadrage)** | `GO CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |
| **Décision Morris ultérieure** | `GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION` (2026-07-23) |
| **Gate de sortie demandé (live prep)** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base Git** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` (PR #254 squash) |
| **Branche cadrage locale** | `framing/sfia-studio-next-product-increment` (**non poussée**) |
| **Baseline méthode** | **SFIA v2.6** |
| **Statut v3** | **V3-MODELED CANDIDATE** |
| **Autorité** | Morris (L0) — aucune option n’est une décision |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.

---

## 1. Contexte post-merge

**Observation.** La PR [#254](https://github.com/mcleland147/sfia-workspace/pull/254) a intégré sur `main` le Control Tower Fast Track et la fondation D1-I1 → D1-C4 (312 fichiers, squash `88fa465…`). Post-merge : tests D1 52/52, OPS1 105/105, E2E 50/50, lint/tsc/build PASS ; CI GitHub absente.

**Formulation correcte.** Control Tower Fast Track et D1-I1 à D1-C4 constituent la nouvelle **base produit intégrée** sur `main`, sous baseline méthode SFIA v2.6.

**Anti-claims.** Pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas ACTION RESUMED · pas GUIDED SESSION STARTED · pas SFIA v3.0 IMPLEMENTED/ADOPTED · pas de prochain incrément validé avant GO Morris · capacités Studio ≠ promotion méthode.

---

## 1bis. Décision Morris — incrément immédiat = Live Product Validation

**Décision Morris (actée — préparation).** L’incrément immédiat n’est **pas** B′. C’est la **validation live du parcours existant** :

- GPT réel ;
- contexte SFIA canonique (surface Control Tower / OPS1) ;
- Git local read-only ;
- GitHub read-only via `gh` ;
- parcours D1-C1 → D1-C4 (création / sélection Project).

**Conséquence pour B′.** Option B′ — Project → Controlled Cycle Proposal — reste une **extension fonctionnelle candidate différée**. Elle ne doit être réouverte qu’**après** analyse des résultats live (`77`/`78`). Ce document conserve l’analyse B′ ci-dessous comme capitalisation ; elle n’est **pas** le périmètre d’exécution immédiat.

**Séquence mise à jour :**

```
Palier actuel (main)
  → Live Product Validation (préparation → exécution → verdict)
  → décision Morris (A/B/C/D live)
  → éventuelle reprise framing B′ / architecture Cycle proposal
```

Documents de préparation live : `77-live-product-validation-framing-and-readiness.md`, `78-live-product-validation-execution-decision-pack.md`.

---

## 2. État produit réel (code + contrats)

### A. Capacités réellement disponibles

| Capacité | Preuve runtime |
|----------|----------------|
| Control Tower tools + allowlist + tool loop | `lib/ops1/tools/**`, `conversation/toolLoop.ts` |
| Contexte SFIA canonique + ActionCandidate OPS1 | `lib/ops1/sfia/**`, report reinjection |
| Project SQLite + Workspace + Cockpit | `lib/d1/db.ts`, routes `/workspace`, `/projects/*` |
| Audit Project + idempotence create | `d1_audit_events`, `d1_idempotency_keys` |
| Intake conversationnel `/nouvelle-demande` | D1-C1 → C4 UI |
| Proposition structurée non exécutable | `lib/d1/intake/**` (fake défaut) |
| Matching Projects déterministe | `lib/d1/context/**` |
| Confirmation + createProject | `lib/d1/confirmation/**` |

### B. Capacités partiellement disponibles

| Capacité | Limite |
|----------|--------|
| Outcome `OPEN_CYCLE_CANDIDATE` | Proposable par C2 ; **aucune** ouverture Cycle |
| Action recommandée `OPEN_CYCLE_IN_PROJECT` | Émise en matching ; Cycle source **UNAVAILABLE** |
| Cockpit « prochaine action » | Texte placeholder ; pas de commande |
| MethodMode | Gouvernance interne ; UI lecture seule |
| OPS1 Session / Gate / Action | Maturité CT/OPS1 ; **non rattachés** à D1 Project |

### C. Capacités modélisées seulement (candidate)

- Schémas `sfia-v3-modeled/schemas/cycle/*` (CycleInstance, GuidedSession, TransitionProposal, ContextSnapshot)
- Schémas project trajectory / review bundle
- Docs `sfia-v3-framing/**`, `sfia-v3-design/**`, delivery packs D1

### D. Capacités absentes (runtime)

- Objet Cycle D1 / repository / commandes
- GuidedSession produit
- Relation persistante Intake → Project
- Source Cycle/Action dans snapshot contexte (= `UNAVAILABLE`, non simulé)
- Gate produit « ouvrir Cycle » avec mutation
- CI GitHub sur la branche Studio

### E–H. Contrats manquants / dettes / UX coupée

| Type | Élément |
|------|---------|
| Contrat manquant | Intake→Project persistence (`EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED`) |
| Contrat manquant | Project→Cycle runtime |
| Dette acceptée | UX-R04 · GPT live hors critère · CI absente · `.tmp-sfia-review/` |
| Dette bloquante pour la *suite méthodologique* | Pas d’objet/commande Cycle ; cockpit sans suite démontrable |
| Expérience interrompue | Après create/confirm Project → Cockpit sans prochaine étape exécutable |

---

## 3. Matrice du parcours (où ça s’arrête)

Parcours cible observé :

demande → proposition → matching → confirmation → Project créé/sélectionné → **suite méthodologique**

| Étape | Disponible | Persistée | Auditée | Gate | UX | Limite |
|-------|------------|-----------|---------|------|----|--------|
| Décrire besoin (intake) | Oui | Non (React local + `sessionLocalId`) | Events structurés logs | Non | Oui | Pas d’objet Intake DB |
| Proposition C2 | Oui | Non | Logs | Non | Oui | Non exécutable |
| Matching C3 Projects | Oui | Snapshot éphémère | Logs | Non | Oui | Cycle/Action UNAVAILABLE |
| Confirm create Project | Oui | Oui (SQLite) | `PROJECT_*` | Humain C4 | Oui | — |
| Confirm existing Project | Oui | **Non** (NO_MUTATION) | Non métier link | Humain | Oui | Contrat link absent |
| Suite Cycle / GuidedSession | **Non** | — | — | — | Placeholder | **Rupture actuelle** |
| Action / exécution Cursor depuis Project | Non (OPS1 parallèle) | OPS1 own DB | OPS1 | OPS1 gates | OPS1 UI | Pas de lien Project |

**Observation.** La rupture utilisateur réelle après D1-C4 est : *« J’ai un Project ; quelle est la prochaine étape méthodologique contrôlée ? »* — pas « polish » ni « CI » en premier.

---

## 4. Discovery domaine

### 4.1 Project (existe — runtime)

- Identité `projectId`, états `DRAFT|ACTIVE`, version, workspace, owner mono-opérateur
- Commandes : create / selectMethodMode / activate (I1)
- Repository SQLite `d1_projects` + assignments + audit + idempotency
- **Pas** de FK Cycle, pas de table intake_link

### 4.2 Intake (partiel — non persistant)

- Session React + `sessionLocalId` ; proposals / match / confirmation intents en mémoire
- Events d’observabilité (pas table métier)
- Durée de vie = session navigateur
- Reprise : Workspace liste Projects ; **pas** reprise d’un intake lié

### 4.3 Cycle (candidate schema only)

- `cycle-instance.schema.json` : `cycleId`, `projectId`, states PROPOSED…CANCELLED, profile, cycleType
- **Aucun** code `lib/d1/cycle/**`, aucune table SQLite D1
- Snapshot C3 force `cycleSourceStatus: UNAVAILABLE`
- UI historique `/cycle-actif` = Increment VS/POC, **pas** Cycle D1

### 4.4 GuidedSession (candidate schema only)

- Schema modeled ; ownership Project/Cycle documenté en framing v3
- **Absent** du runtime D1 ; distinct conceptuellement d’OPS1 Session

### 4.5 Action / Gate / Decision / OPS1

| Objet | Statut | Réutilisabilité |
|-------|--------|-----------------|
| OPS1 Session | Runtime mature | Exécution CT ; **pas** ownership Project |
| ActionCandidate (OPS1/sfia) | Runtime | Propose/deny/compile ; lié session OPS1 |
| Gate OPS1 I3 | Runtime | Confirmation exécution Cursor |
| Decision Center UI | P0/VS fixture | Non rattaché D1 Project |
| Gate produit « ouvrir Cycle » | Absent | À concevoir si Option B/C |

### 4.6 Relations

| Relation | Code | Schema candidate | Exemple | N’existe pas | Réutilisable | Migration ? |
|----------|------|------------------|---------|--------------|--------------|-------------|
| Intake → Project | Non (NO_MUTATION) | Non dédié | Non | Oui | — | Oui si objet/lien |
| Project → Cycle | Non | Oui (`projectId` requis) | Oui | Runtime | Schema guide | Oui (table cycle) |
| Cycle → GuidedSession | Non | Oui | Oui | Oui | — | Oui |
| GuidedSession → ActionCandidate | Non | Partiel | — | Oui | OPS1 patterns | Décision archi |
| Cycle → Gate/Decision | Non | Decision schemas | Oui | Runtime D1 | OPS1 analogie | Oui |
| Project → OPS1 Session | Non | Non | Non | Oui | Adapter futur | Décision |
| Project/Cycle → Git ref | OPS1 sfia context | Git schema | Oui | Lien D1 | CT engine | Optionnel |
| Project/Cycle → Review bundle | Non | Oui | Oui | Runtime | — | Ultérieur |

---

## 5. Options (candidates — non décisions)

### Option A — Consolider Intake → Project

**Objectif candidat.** Persister une relation explicite intake confirmé ↔ Project ; lever le `NO_MUTATION` *uniquement* avec vrai contrat.

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Faible–moyenne** seule (reprise technique) |
| Continuité vision | Favorable (intégrité domaine) |
| Fondation domaine | Forte |
| Risque architecture | Moyen (nouveau objet/lien) |
| Effort | **M** |
| Utile maintenant ? | Partiellement — surtout comme **sous-lot** |

**Challenge.** Seul, ne répond pas à « prochaine étape méthodologique ». Solution plus simple : conserver NO_MUTATION + note jusqu’à un vertical qui consomme le lien.

### Option B — Project → proposition de Cycle (PROPOSED_ONLY)

**Objectif candidat.** Depuis Cockpit (Project ACTIVE), proposer le prochain Cycle SFIA (type, profil, blocs, risques, sources) via moteur canonique / routing ; confirmation humaine ; résultat **PROPOSED_ONLY** **sans** objet Cycle persistant (ou avec artefact de proposition auditée bornée, sans claim CYCLE OPENED).

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Forte** |
| Continuité vision CT | Favorable |
| Fondation domaine | Moyenne (prépare C sans simuler) |
| Risque architecture | Moyen (couche proposition temporaire) |
| Réutilisation | Forte (sfia context, routing, patterns C2/C4) |
| Duplication OPS1 | Neutre–faible si ownership « proposal produit » clair |
| Effort | **M** |
| Utile maintenant ? | **Oui** |

**Challenge.** Ne pas présenter la proposition comme Cycle ouvert. Ne pas mélanger Session OPS1 et proposition produit. Gate Morris architecture léger puis delivery.

### Option C — Fondation Cycle minimale + ouverture contrôlée

**Objectif candidat.** Table/repository Cycle, états minimaux, propose → confirm → open idempotent + audit.

| Critère | Évaluation |
|---------|------------|
| Valeur | Forte *si* contrat mûr |
| Fondation | **Très forte** |
| Risque | **Élevé** (surdimensionnement, migration, états) |
| Schema readiness | Moyenne (candidate 0.1.0-d1, non runtime-prouvé) |
| Effort | **L** |
| Utile maintenant ? | Possible mais **prématuré** sans archi dédiée |

**Challenge.** Ouvrir un Cycle simulé / incomplet = faux succès. Exiger **GO ARCHITECTURE** avant delivery.

### Option D — GuidedSession avant Cycle persistant

**Objectif candidat.** Session guidée Project-scoped ; Cycle reste proposition.

| Critère | Évaluation |
|---------|------------|
| Valeur distincte vs Intake/OPS1 | **Faible–incertaine** |
| Risque objet intermédiaire | **Élevé** |
| Effort | **L** |
| Utile maintenant ? | Non prioritaire |

**Challenge.** Ownership flou vs IntakeView et Ops1SessionScreen → déprioriser.

### Option E — Industrialisation (CI, gitignore, cleanup)

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur | Faible |
| Dette outillage | Réelle mais **non bloquante** du parcours |
| Effort | **S–M** |
| Traitement | **Parallèle / cleanup séparé** |

### Option F — UX-R04 polish D1-I1→C4

| Critère | Évaluation |
|---------|------------|
| Irritants | Présents mais secondaires vs rupture Cycle |
| Effort | **M** (+ Figma possible) |
| Priorité | Différée après suite méthodologique |

### Options supplémentaires

- **B′** : Option B + sous-lot A minimal (lier confirmation existing → `projectId` dans un *proposal binding* audit-only) — recommandé comme packaging vertical.
- **Non-option** : L5 global, multi-user, billing, promotion v3 — **NO-GO**.

---

## 6. Matrice comparative (synthèse)

| Option | Valeur UX | Fondation | Risque | Effort | Verdict cadrage |
|--------|-----------|-----------|--------|--------|-----------------|
| A | Faible seule | Forte | Moyen | M | Sous-lot / différée seule |
| **B** | **Forte** | Moyenne | Moyen | M | **Recommandée** |
| C | Forte | Très forte | Élevé | L | Alternative si Morris veut fondation d’abord |
| D | Faible | Moyenne | Élevé | L | Différée |
| E | Faible | Outillage | Faible | S–M | Parallèle |
| F | Moyenne | Nulle | Faible | M | Différée |

---

## 7. Recommandation (historique de cadrage) + priorité live

### Priorité immédiate (Décision Morris)

**Live Product Validation** du parcours existant — voir `77` / `78`.
Ce n’est **pas** une validation déjà exécutée.

### Recommandation fonctionnelle différée (toujours candidate)

**Option B′ — « Project → Controlled Cycle Proposal (PROPOSED_ONLY) »**
reste la recommandation d’*extension* après preuve live, avec sous-lot A *minimal* éventuel.

**Identifiant candidat (non validé) :** `D1-NEXT` / `D1-C5-candidate` — **pas** « C5 validé ».

**Rationnel (conservé).**

1. Traite la rupture utilisateur après C4.
2. Réutilise le moteur de contexte canonique et les patterns propose→confirm.
3. Évite de simuler un Cycle runtime.
4. Prépare Option C sans fausse adoption.
5. Démontrable après que le live du socle soit prouvé.

### Alternative de repli (toujours)

**Option C** avec **GO ARCHITECTURE Cycle foundation** si Morris préfère la fondation Cycle après (ou à la place de) B′.

### Différées

- B′ / C / D / F — **après** verdict live
- E — parallèle tooling possible pendant/après live
- A seule — insuffisante comme incrément visible

### Préconditions

- Main reste @ PR #254 (ou compatible)
- Pas de promotion v3
- Architecture technique courte (schéma proposition, audit events, anti-claims) avant code
- Fake provider OK pour DoD ; live GPT non critère

### Périmètre candidat

- Point d’entrée : Project Cockpit (`ACTIVE`)
- Génération proposition Cycle (type/profil/blocs/risques/sources) **non exécutable**
- Gate humain Confirm / Refine / Cancel / Analyze-only
- Résultat `CYCLE_PROPOSAL_RECORDED` ou équivalent **PROPOSED_ONLY**
- Audit append-only sur Project (nouveaux event types bornés)
- Tests unit + E2E ; pas de table Cycle obligatoire

### Hors périmètre

- Persistance CycleInstance / GuidedSession
- Claim CYCLE OPENED
- Exécution Cursor depuis ce flux
- Refonte OPS1
- UX-R04 global / Figma delivery
- CI GitHub (sauf cycle parallèle)
- package.json / migrations SQL versionnées hors embed justifié

---

## 8. Incrément vertical candidat (≤ 3 lots · ≤ 12 items)

**Problème utilisateur.** Après création/confirmation d’un Project, l’utilisateur ne peut pas obtenir une suite méthodologique contrôlée.

**Utilisateur cible.** Morris / opérateur Studio mono-acteur (I1).

**Départ.** Project Cockpit `ACTIVE` (post C4 ou manuel).

**Arrivée.** Proposition de Cycle affichée, confirmée ou refusée, avec preuve audit ; **aucun** Cycle ouvert.

### Parcours nominal

1. Ouvrir Cockpit Project ACTIVE
2. Déclencher « Proposer la prochaine étape méthodologique »
3. Système produit proposition (sources + rationale)
4. Humain confirme
5. Système enregistre PROPOSED_ONLY + audit
6. UI affiche statut proposition (pas CYCLE OPENED)

### Alternatifs

- Refine / Cancel / Analyze-only
- Indisponibilité contexte → message honnête
- Project DRAFT → refuse ou invite activation

### Lots candidats

| Lot | Contenu | Items (max) |
|-----|---------|-------------|
| L1 | Contrat proposition + génération (reuse sfia/routing) | 4 |
| L2 | UI Cockpit + gate confirm + anti-claims | 4 |
| L3 | Audit/idempotence + tests E2E + (opt) binding projectId | 4 |

### DoD candidate (non validée)

- E2E nominal + refine/cancel
- Aucun claim CYCLE OPENED / PROJECT LINKED
- Audit lisible Cockpit
- tsc/lint/vitest/e2e ciblés verts
- Docs delivery pack incrément

**Stop conditions.** Besoin d’objet Cycle persistant pour « réussir » ; mélange OPS1 Session ; dépendance live GPT ; migration hors périmètre.

**Figma.** Non requis pour ce cadrage ; **oui** pour un cycle design si polish/layout Cockpit dense (frames : Cockpit next-step, Proposal panel, Confirm gate, Proposed-only result).

---

## 9. UX fonctionnelle (sans maquette)

- Entrée : section « Prochaine action » Cockpit (remplace placeholder)
- Visible : Project name/state ; sources utilisées ; proposition Cycle (type, profil, blocs)
- Statut proposition : `DRAFT_UI` → `AWAITING_CONFIRM` → `PROPOSED_ONLY` | `CANCELLED`
- Gate : Confirmer / Affiner / Annuler / Analyze-only
- Après confirm : badge/statut honnête « Proposition enregistrée — Cycle non ouvert »
- Indisponibilité : message contrat/source manquante
- Retour Workspace inchangé
- Audit : timeline étendue
- **Interdit :** toast « Cycle ouvert », simulation liste Cycles

---

## 10. Industrialisation (classement)

| Sujet | Classe |
|-------|--------|
| CI GitHub absente | Parallèle / différable (non bloquant incrément B) |
| `.tmp-sfia-review/` non ignoré | Cleanup séparé |
| Branche delivery historique | Cleanup séparé (GO dédié) |
| GPT live | Différable (hors DoD) |
| Contention port 3020 E2E | Avant delivery (runbook / config test) — parallèle |
| SQLite embed D1 | Acceptable ; migrations versionnées si Option C |
| README metadata stale (SHA/status locaux) | Réserve documentaire — ne pas réécrire 66–74 |

---

## 11. Trajectoire candidate (non backlog validé)

```
Palier actuel
  CT + OPS1 + D1-I1…C4 (main 88fa465)

Palier immédiat (Décision Morris)
  Live Product Validation (GPT + canonique CT + Git/GitHub RO + D1-C1…C4)

Palier suivant candidat (conditionnel — après verdict live)
  Project → Controlled Cycle Proposal (PROPOSED_ONLY)  [Option B′]

Paliers ultérieurs possibles
  Cycle foundation persistante (Option C)
  → GuidedSession
  → ActionCandidate rattaché
  → exécution Cursor
  → rapport / décision / reprise
```

| | |
|--|--|
| Prochain incrément **immédiat** | Live Product Validation |
| Prochain incrément **fonctionnel différé** | B′ (si live OK) |
| Dépendances B′ | Verdict live A ou D accepté |
| Différé | D, F, live GPT comme *critère de release produit* permanent |
| Preuves live | Scénarios LPV-01…06 (`78`) |
| Gates | GO EXÉCUTION LIVE → verdict → éventuel GO ARCHITECTURE B′ |
| Dette temporaire OK | Dual-surface OPS1/CT + D1 jusqu’à décision Morris |
| Dette interdite | Simuler Cycle ; confondre fixture et live ; V3-ADOPTED |

---

## 12. Risques · réserves · dette

**Risques.** Couche proposition qui devient permanente ; confusion OPS1 ; pression pour « ouvrir » trop tôt ; README historique trompeur.

**Réserves.** Link intake→Project ; Cycle UNAVAILABLE ; UX-R04 ; CI ; GuidedSession non choisie.

**Dette.** Event types audit à étendre ; éventuelle table `d1_cycle_proposals` si on refuse le JSON opaque — **préférer table/contrat explicite** à un blob non typé.

---

## 13. Gates Morris

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (immédiat — demandé via `78`)
2. Après live : appliquer verdict A/B/C/D (`78` § verdicts)
3. Si live OK et Morris le souhaite : **GO ARCHITECTURE — CYCLE PROPOSAL (B′)**
4. Si C retenu : **GO ARCHITECTURE Cycle foundation**
5. Parallèle optionnel : **GO CLEANUP** / CI / gitignore

~~GO VALIDATION CADRAGE pour B′~~ — **différé** tant que la preuve live n’est pas tranchée.

---

## 14. Anti-claims (rappel)

Ce document ne valide **aucune** option.
Il ne revendique pas D1 COMPLETE, PROJECT LINKED, CYCLE OPENED, ni SFIA v3 IMPLEMENTED/ADOPTED.

**Statut :** `framing-candidate` — en attente de décision Morris.
```

### `projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md` (complet)

```markdown
# SFIA Studio — Options et decision pack — prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `76-next-product-increment-options-and-decision-pack.md` |
| **Complète** | `75-next-product-increment-framing.md` |
| **Statut** | `decision-pack-candidate` — priorité **Live Product Validation** actée ; B′ différée |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Gate immédiat demandé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Compléments live** | `77`, `78` |

---

## 1. Décisions déjà actées (ne pas rouvrir)

| Décision | Source |
|----------|--------|
| Baseline méthode = SFIA v2.6 | Manifest / operating model |
| SFIA v3.0 = V3-MODELED CANDIDATE (non adopté) | Framing v3 + anti-claims D1 |
| CT Fast Track + D1-I1→C4 intégrés sur main | PR #254 / post-merge |
| Existing Project confirm = NO_MUTATION tant que contrat link absent | D1-C4 delivery |
| Cycle/Action sources = UNAVAILABLE (non simulés) | D1-C3 code |
| GPT propose / Morris décide / Cursor exécute | Operating model |
| L5 global interdit | Doctrine Studio |
| Pas de package.json / deps dans le lot CT/D1 | PR readiness |
| **Incrément immédiat = Live Product Validation** (GPT + canonique CT + Git/GitHub RO + D1-C1…C4) | Morris — GO PRÉPARATION LIVE (2026-07-23) |
| **Option B′ différée** jusqu’après analyse des résultats live | Même décision |

## 2. Décisions à ne pas rouvrir dans ce decision pack

- Réécrire l’histoire des docs 66–74
- Promouvoir v3 en baseline
- Refondre OPS1 pour « coller » à D1 sans preuve
- Rendre GPT autorisateur
- Traiter CI comme substitut de valeur produit
- Valider « C5 » / B′ par simple naming **avant** preuve live
- Inclure B′ dans le périmètre d’exécution live

---

## 3. Options synthétiques

| ID | Titre | Intention | Effort | Reco cadrage |
|----|-------|-----------|--------|--------------|
| A | Intake → Project persistence | Contrat link / reprise | M | Sous-lot éventuel |
| **B / B′** | Project → Cycle proposal PROPOSED_ONLY | Suite méthodologique visible | M | **Principale** |
| C | Cycle foundation + open contrôlé | Objet Cycle runtime | L | Alternative |
| D | GuidedSession d’abord | Session guidée Project | L | Différée |
| E | Industrialisation CI/hygiène | Outillage | S–M | Parallèle |
| F | UX-R04 polish | UX sans nouveau domaine | M | Différée |

Détail et challenge : voir `75`.

---

## 4. Impacts par option

### A — Intake → Project

| Impact | Contenu |
|--------|---------|
| Domaine | Nouveau lien ou objet intake |
| UX | Reprise ; peu de « wow » seul |
| Migration | Probable (table) |
| Anti-claim | Toujours pas PROJECT LINKED tant que sémantique floue |
| Conséquence si choisi seul | Technique sans suite Cycle |

### B / B′ — Cycle proposal

| Impact | Contenu |
|--------|---------|
| Domaine | Contrat *proposal* (+ audit) ; pas CycleInstance |
| UX | Cockpit débloqué |
| Migration | Faible à moyenne (events / table proposals) |
| Anti-claim | Strict PROPOSED_ONLY |
| Conséquence | Prépare C ; dette temporaire de couche proposal |

### C — Cycle foundation

| Impact | Contenu |
|--------|---------|
| Domaine | Table Cycle + états + commandes |
| UX | Ouverture réelle possible |
| Migration | Oui |
| Anti-claim | CYCLE OPENED seulement après confirm |
| Conséquence | Archi obligatoire ; risque surdimensionnement |

### D — GuidedSession

| Impact | Ownership vs Intake/OPS1 à clarifier ; délai élevé ; faible valeur immédiate |

### E — Industrialisation

| Impact | Qualité repo ; zéro parcours métier nouveau |

### F — UX-R04

| Impact | Polish ; Figma probable ; ne débloque pas la rupture |

---

## 5. Arbitrages Morris demandés

### Immédiat — Live Product Validation

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (voir `78`)
2. Accepter la validation **dual-surface** (OPS1/CT tools+canonique **et** D1 intake C1–C4) sans unifier le code dans ce cycle ?
3. Autoriser `D1_INTAKE_LIVE=1` local pour le track D1 ?
4. Seuil d’acceptation des réserves (visibilité D1 mode live partielle, etc.)

### Différé — après verdict live

### Décision D1 — Quel prochain incrément **fonctionnel** ?

Choisir **une** trajectoire **après** live :

1. **Reprendre B′** si verdict live A ou D (réserves acceptées)
2. **Retenir C** (Cycle foundation) si live OK mais B′ rejeté
3. **Corrections live** (verdict B) avant toute extension
4. **Rework** (verdict C) — pas d’extension
5. **E/F** seulement si Morris priorise outillage/polish

### Décision D2–D5 (B′)

Inchangées par rapport au cadrage initial — **non ouvertes** tant que live non tranché. Voir historique §5 ci-dessous et `75`.

---

## 5bis. Historique — arbitrages B′ (conservés, non actifs)

### Décision D1 historique — Quel prochain incrément ?

Choisir **une** trajectoire :

1. **Valider recommandation B′** (Cycle proposal PROPOSED_ONLY + sous-lot A optionnel)
2. **Retenir alternative C** (Cycle foundation d’abord) → déclenche GO ARCHITECTURE Cycle
3. **Retenir A seule** (link intake→Project) — non recommandé comme seul incrément
4. **Retenir E ou F** comme prochain cycle — accepte de différer la suite méthodologique
5. **Demander un re-cadrage** si hypothèses contestées

### Décision D2 — Packaging A

Si B′ : inclure le sous-lot Intake→Project **dans** le vertical, **après**, ou **jamais pour cet incrément** ?

### Décision D3 — Artefact de proposition

Préférer :

- events d’audit Project seulement ;
- ou table `d1_cycle_proposals` typée ;
- **interdire** JSON opaque non contractuel comme seul stockage métier.

### Décision D4 — Tooling parallèle

Autoriser un cycle séparé CI / `.gitignore` / cleanup branche delivery **en parallèle** de B′ ? (recommandé : oui, GO distinct)

### Décision D5 — Figma

Exiger un cycle design Figma avant delivery B′ ? (recommandation cadrage : **non** pour MVP fonctionnel ; **oui** si polish layout)

---

## 6. Recommandations (mises à jour)

1. **Immédiat :** exécuter le plan live (`77`/`78`) sous GO EXÉCUTION.
2. **B′ :** rester différée ; ne pas lancer architecture/delivery B′ avant verdict live.
3. **Séquence :**

```
GO EXÉCUTION LIVE PRODUCT VALIDATION
  → collecte preuves LPV-01…06
  → verdict A | B | C | D
  → si A ou D(+accept) : éventuel GO ARCHITECTURE B′
  → si B : correctifs bornés puis re-live
  → si C : rework conception/architecture (pas B′)
```

---

## 7. Gates futurs (proposés)

| Gate | Quand |
|------|-------|
| `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` | **Immédiat** |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE PROPOSAL CONTRACT` | Si live OK + Morris choisit B′ |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE FOUNDATION` | Si C |
| `GO DELIVERY — …` | Après archi |
| `GO CLEANUP — delivery branch / tmp gitignore / CI` | Optionnel parallèle |
| `GO DESIGN FIGMA — …` | Si D5 = oui |

---

## 8. NO-GO explicites

- Simuler Cycle/Action comme disponibles
- Claim CYCLE OPENED / PROJECT LINKED / D1 COMPLETE / V3-IMPLEMENTED/ADOPTED
- Claim **GPT LIVE VALIDATED** / **LIVE PRODUCT READY** avant exécution + verdict
- GPT comme autorité de mutation
- Automatiser l’arbitrage « quel Cycle ouvrir » sans gate humain
- L5 global / multi-tenant / billing
- Modifier method/** ou promouvoir v3 par ce produit
- Exécuter B′ ou unifier D1↔tools **dans** le cycle live sans GO dédié
- Confondre fixture/fake et live

---

## 9. Conséquences des verdicts live (pour B′)

| Verdict live | Conséquence B′ |
|--------------|----------------|
| **A** LIVE PRODUCT VALIDATED | B′ framing **peut** reprendre |
| **B** PARTIALLY VALIDATED | B′ **reste différée** ; correctifs d’abord |
| **C** NOT READY | B′ **fermée** jusqu’à rework |
| **D** VALIDATED WITH RESERVES | Morris arbitre si B′ peut démarrer malgré réserves |

---

## 10. Ordre recommandé des réponses Morris

1. **GO EXÉCUTION LIVE** (ou blocage motivé).
2. Trancher dual-surface vs exigence d’unification (gap documenté dans `77`).
3. Après live : appliquer A/B/C/D puis rouvrir D1…D5 B′ si pertinent.

---

## 11. Anti-claims

Ce pack ne constitue **pas** une validation live exécutée, **pas** une adoption v3, **pas** une ouverture Cycle, **pas** une validation B′.

**Statut :** préparation live prête — **Décision Morris requise** pour l’exécution.
```

### `projects/sfia-studio/77-live-product-validation-framing-and-readiness.md` (complet)

```markdown
# SFIA Studio — Live Product Validation — Framing & Readiness

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `77-live-product-validation-framing-and-readiness.md` |
| **Statut** | `live-prep-candidate` — **plan prêt** ; **non exécuté** |
| **Gate consommé** | `GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Gate proposé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche cadrage** | `framing/sfia-studio-next-product-increment` (locale) |
| **Baseline méthode** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE |
| **Complète** | `78-live-product-validation-execution-decision-pack.md` |

---

## 1. Décision Morris

**Incrément immédiat :** validation live du parcours **existant** avec :

- GPT réel ;
- contexte SFIA canonique (moteur CT / OPS1) ;
- Git local read-only ;
- GitHub read-only via `gh` ;
- D1-C1 → D1-C4 (Project create / NO_MUTATION).

**B′ différée** jusqu’après analyse des résultats.
Ce cycle = **préparation uniquement** (pas d’appel GPT live, pas de mutation Project).

---

## 2. Objectif

Répondre à :

> Le premier parcours SFIA Studio fonctionne-t-il réellement avec GPT, les sources SFIA canoniques et les outils Git/GitHub read-only, de manière utile, fiable, observable et gouvernée ?

---

## 3. Architecture live réelle (Observation)

### 3.1 Deux surfaces runtime (gap structurant)

| Surface | Route | GPT live | Tools Git/GitHub | Contexte canonique | Mutation Project |
|---------|-------|----------|------------------|--------------------|------------------|
| **Control Tower / OPS1** | `/ops1/nouvelle-demande` | Oui (`OPENAI_*`, mode live UI) | Oui (`toolLoop` + adapters) | Oui (`lib/ops1/sfia/**`) | Non (ActionCandidate / gates OPS1) |
| **D1 Intake** | `/nouvelle-demande` | Oui si `D1_INTAKE_LIVE=1` | **Non** (pas de tool loop) | **Non** (prompt C2 local) | Oui via C4 confirm → `createProject` |

**Observation.** Il n’existe **pas** aujourd’hui une conversation unique qui enchaîne GPT+tools+canonique **et** C4 Project.
**Hypothèse de plan :** validation **dual-track** acceptable pour ce GO (preuve du socle sans unifier le code).
**Décision Morris requise :** accepter dual-track **ou** exiger une correction d’unification (hors ce cycle prep → delivery).

### 3.2 Chaîne logique cible (composée)

```
Track CT:  User → OPS1 live → GPT → tools (Git/GitHub) → contexte SFIA → UI tools/sources
Track D1:  User → Intake → GPT live C2 → matching C3 → confirm C4 → Project / NO_MUTATION → Cockpit
```

---

## 4. Matrice d’étapes

| Étape | Runtime | Live prêt | Configuration | Mutation | Gate | Preuve attendue | Réserve |
|-------|---------|-----------|---------------|----------|------|-----------------|---------|
| UI D1-C1 | Oui | Oui | — | Non | — | Route `/nouvelle-demande` | — |
| Provider GPT D1 | Oui | **Config** | `D1_INTAKE_LIVE=1` + `OPENAI_*` | Non | — | mode `live` UI | Défaut = fake |
| Provider GPT OPS1 | Oui | **Config** | `OPENAI_*` + mode live UI | Non | — | badge GPT LIVE | — |
| Tools CT | Oui | Oui si gh/git OK | allowlists | Non | — | tool events UI | — |
| Contexte canonique | Oui (OPS1) | Oui | paths allowlist | Non | — | sources chargées | Pas dans D1 |
| Git local RO | Oui | Oui | repo root | Non | — | head/status/read | — |
| GitHub RO `gh` | Oui | **Probe OK** | `gh auth` | Non | — | repo/branch/PR | OAuth Studio absent (OK mono) |
| Matching C3 | Oui | Oui | — | Non | — | scores / UNAVAILABLE Cycle | — |
| Confirm C4 | Oui | Oui | — | **Oui** create | Humain | audit PROJECT_* | Existing = NO_MUTATION |
| Cockpit | Oui | Oui | — | Non | — | project + audit | Next-step placeholder |
| Cursor exec | Oui OPS1 | **Hors live LPV** | — | Potentiel | Morris GO | — | **NO-GO** ce plan |

---

## 5. GPT live readiness

| Élément | État |
|---------|------|
| Provider | `OpenAIConversationProvider` (`openai`) |
| Env | `OPENAI_API_KEY`, `OPENAI_MODEL` — **présents** dans `.env.local` local (valeurs non exposées) |
| D1 live flag | `D1_INTAKE_LIVE=1` — **absent** du `.env.local` → D1 reste fake jusqu’à config |
| Fail-closed D1 | Live demandé + secrets absents → `CONFIG`, **pas** de fake silencieux |
| OPS1 fake force | `OPS1_CONVERSATION_PROVIDER=fake` |
| Timeout D1 | `D1_INTAKE_PROVIDER_TIMEOUT_MS = 25000` |
| Tool rounds CT | `CT_MAX_TOOL_ROUNDS=4`, `CT_MAX_TOOL_CALLS_PER_ROUND=4` |
| UI D1 mode | hint `mode fake|live` après analyse |
| UI OPS1 | badges FIXTURE / LIVE DISPONIBLE / GPT LIVE |

**Probes ce cycle :** présence config uniquement — **aucun** appel API GPT.

**Scénarios GPT futurs :** nominal, clarification, JSON valide/invalide, timeout, indisponible, tool pertinent/refusé, action non autorisée, limites.

---

## 6. Contexte SFIA canonique

**Chemins core (allowlist fermée) :**

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Project context optionnel :** docs `70`, `72`, `73` Studio.

**Baseline runtime :** `SFIA_METHOD_BASELINE = "SFIA v2.6"`.

**Preuves live (track CT) :**

1. Demande fondateurs Studio / méthode → sources core citées/chargées.
2. Demande décision Morris / gates → pas d’invention de GO.
3. Contradiction candidate vs baseline → réserve / stop, pas d’adoption v3.

---

## 7. Git local read-only

Capacités : status, head, search, read_file, diff, worktrees, log — via `gitLocalReadAdapter` + `pathPolicy` (deny write / hors préfixes).

Preuves : HEAD, status, search doc fondateur, read borné template, deny path, deny write, source visible UI.

---

## 8. GitHub read-only via `gh`

| Probe prep (exécutée) | Résultat |
|-----------------------|----------|
| `gh --version` | 2.96.0 |
| `gh auth status` | Logged in `mcleland147` (keyring) ; token **redacted** |
| `gh api user --jq '{login}'` | `mcleland147` |
| `gh repo view mcleland147/sfia-workspace` | `nameWithOwner` OK ; defaultBranch `main` |

Allowlist repo : `mcleland147/sfia-workspace` uniquement.
Transport : `gh_cli` si auth ; sinon REST si `GITHUB_TOKEN` (non requis ici).

Preuves live : compte, repo, branche main, commit, PR #254, checks, deny autre repo, indisponibilité `gh`.

---

## 9. D1-C1 → C4

| Capacité | Live prêt | Note |
|----------|-----------|------|
| C1 shell | Oui | 2 actions ; Reprendre → Workspace |
| C2 live | Config | `D1_INTAKE_LIVE=1` |
| C3 | Oui | déterministe ; Cycle/Action UNAVAILABLE |
| C4 create | Oui | gate humain ; audit |
| C4 existing | Oui | NO_MUTATION + note domaine |

---

## 10. Visibilité produit

| Élément | État |
|---------|------|
| Mode live OPS1 | **Déjà visible** (badges) |
| Mode live D1 | **Partiel** (hint après analyse) |
| Modèle GPT | Partiel / logs — pas de secret |
| Outils appelés/OK/KO | **OPS1 visible** ; D1 N/A |
| Transport GitHub | Partiel (tool events) |
| Proposition / match / confirm | D1 visible |
| Mutation / NO_MUTATION | Visible |
| Erreurs | Visible fail-closed |
| Figma | **Non requis** si dual-track + badges OPS1 suffisent |

---

## 11. Sécurité

| Risque | Contrôle | Preuve | Gap | Bloquant live |
|--------|----------|--------|-----|---------------|
| GPT mute Project | C4 only | Code confirm | — | Non |
| Git write | Policy deny | Unit/E2E | — | Non |
| GitHub write | Tools read-only | Code | — | Non |
| Shell libre | Absent tools | — | — | Non |
| Secret logs/UI | redaction | Code | Vigilance review pack | Non |
| Fake silencieux | CONFIG fail-closed | Code D1/OPS1 | — | Non |
| Repo hors allowlist | CT_GITHUB_REPO_ALLOWLIST | Code | — | Non |
| Cursor exec | Hors scénarios LPV | Plan | Discipline exécution | Non si respecté |
| Dual-surface confusion | Docs | Ce doc | Acceptation Morris | **Décision** |

---

## 12. Performance / coût (candidats)

| Seuil | Valeur candidate | Mécanisme | Gap | Décision |
|-------|------------------|-----------|-----|----------|
| Timeout GPT D1 | 25 s | Code | — | OK |
| Tool rounds | 4×4 | Code | — | OK |
| Read max | 32 KiB / 12k chars result | Code | — | OK |
| Parcours wall-clock | ≤ 10 min / scénario | Manuel | Runbook | Morris soft |
| Port 3020 | 1 serveur | Playwright reuse | Contention connue | Runbook |
| Tokens | Journaliser usage provider si exposé | OPS1 usage fields | Pas de budget $ | Soft |

---

## 13. DoD candidate (non validée)

1. GPT réel répond (OPS1 et/ou D1 selon track).
2. Mode live identifiable.
3. Contexte canonique traçable (track CT).
4. ≥1 lecture Git locale visible.
5. ≥1 lecture GitHub `gh` visible.
6. Aucun outil write.
7. Proposition C2 valide (track D1).
8. Matching C3 déterministe.
9. C4 humain.
10. Project créé + audité.
11. Existing → NO_MUTATION sans faux link.
12. Erreurs visibles.
13. Aucun secret exposé.
14. Négatifs critiques prouvés.
15. Preuves capturées.
16. Tests automatisés existants toujours verts (rejeu ciblé).
17. Verdict A/B/C/D explicite.

---

## 14. Gaps classés

| ID | Gap | Classe | Notes |
|----|-----|--------|-------|
| G1 | `D1_INTAKE_LIVE` non positionné | **A** config | Ajouter `=1` local avant track D1 |
| G2 | Dual-surface (pas d’unification tools dans D1) | **F** Morris | Accepter pour LPV ou exiger delivery |
| G3 | Visibilité live D1 faible vs OPS1 | **C** | Amélioration non bloquante |
| G4 | CI GitHub absente | **D** | Différable |
| G5 | Port 3020 contention | **A/C** | Runbook / un seul serveur |
| G6 | Canonical paths n’incluent pas encore 75–78 | **C** | Optionnel après merge docs |
| G7 | Unifier D1↔toolLoop | **E/B** | Hors prep ; delivery si Morris l’exige |
| G8 | B′ | **E** | Différée |

**Corrections code minimales :** aucune dans ce cycle. Si G2/G7 → cycle delivery séparé.

---

## 15. Plan d’exécution candidat (≤3 lots · ≤12 items)

### Lot 1 — Readiness (config + probes)

1. Vérifier `OPENAI_*` + démarrer app
2. Positionner `D1_INTAKE_LIVE=1`
3. Probe `gh` + Git local HEAD
4. Checklist allowlists / badges live

### Lot 2 — Scénarios live LPV-01…06

5–10. Exécuter scénarios (`78`) — captures + logs

### Lot 3 — Clôture

11. Rejeu tsc/lint/vitest ciblés si dérive
12. Verdict A/B/C/D + impact B′

---

## 16. Stop conditions (exécution future)

- Secret exposé
- Write Git/GitHub tenté/réussi
- Cursor execution hors GO
- Fake substitué en live
- Mutation Project sans confirm
- Unification code improvisée
- Périmètre B′ glissé

---

## 17. Anti-claims

Pas GPT LIVE VALIDATED · pas LIVE PRODUCT READY · pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas V3 IMPLEMENTED/ADOPTED · plan ≠ exécution · `gh` local ≠ OAuth produit.

**Statut :** `LIVE PRODUCT VALIDATION PLAN READY` — en attente de GO EXÉCUTION Morris.
```

### `projects/sfia-studio/78-live-product-validation-execution-decision-pack.md` (complet)

```markdown
# SFIA Studio — Live Product Validation — Execution Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `78-live-product-validation-execution-decision-pack.md` |
| **Statut** | `execution-pack-candidate` — **non autorisé à exécuter** sans GO Morris |
| **Complète** | `77-live-product-validation-framing-and-readiness.md` |
| **Gate proposé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |

---

## 1. Décisions déjà actées

| Décision | Statut |
|----------|--------|
| Baseline SFIA v2.6 | Actée |
| CT + D1-I1…C4 sur main | Actée (PR #254) |
| Incrément immédiat = Live Product Validation | Actée (Morris) |
| B′ différée | Actée |
| GPT propose / Morris décide / Cursor exécute | Actée |
| Préparation sans appel GPT / sans mutation | Actée (ce cycle) |

---

## 2. Configuration requise (avant Lot 2)

| Variable / outil | Requis | État prep |
|------------------|--------|-----------|
| `OPENAI_API_KEY` | Oui | Présent `.env.local` (non affiché) |
| `OPENAI_MODEL` | Oui | Présent `.env.local` |
| `D1_INTAKE_LIVE=1` | Track D1 | **À ajouter** (config A) |
| Ne pas forcer `D1_INTAKE_PROVIDER=fake` | Track D1 | Vérifier shell/env |
| Ne pas forcer `OPS1_CONVERSATION_PROVIDER=fake` | Track CT | Vérifier |
| `gh` auth | Track CT GitHub | **OK** `mcleland147` |
| Serveur app `:3020` | Oui | Un seul process |
| Données Project test | Track D1 LPV-02 | Créer via LPV-01 ou manuel |

**Interdit d’afficher** clés, tokens, contenus `.env`.

---

## 3. Probes (prep — déjà faites / à refaire au démarrage exécution)

```text
gh --version
gh auth status          # login only ; token redacted
gh api user --jq '{login}'
gh repo view mcleland147/sfia-workspace --json nameWithOwner,defaultBranchRef
git rev-parse HEAD      # depuis repo root
git status -sb
```

Pas d’appel OpenAI en préparation. En exécution : uniquement via UI Studio.

---

## 4. Stratégie dual-track (à confirmer Morris)

| Track | Où | Couvre |
|-------|-----|--------|
| **CT** | `/ops1/nouvelle-demande` mode **live** | GPT + tools Git/GitHub + contexte canonique + UI outils |
| **D1** | `/nouvelle-demande` + `D1_INTAKE_LIVE=1` | C1–C4 + Project create / NO_MUTATION |

**PASS global** exige les deux tracks verts sur leurs scénarios assignés, sauf décision Morris contraire.

---

## 5. Scénarios LPV-01 … LPV-06

### LPV-01 — Création d’un nouveau Project (Track D1)

| Champ | Contenu |
|-------|---------|
| Données | Aucun Project homonyme ; intention réelle non sensible |
| Demande | Ex. « Créer un projet Studio pour documenter la validation live mono-opérateur » |
| Outils attendus | Aucun tool CT (D1) |
| Outils interdits | Write ; Cursor |
| Événements | mode live ; proposal CREATE ; match NO_MATCH/faible ; confirm ; PROJECT_CREATED |
| Résultat | Project ACTIVE/DRAFT selon flux ; Cockpit |
| Mutation | **Oui** (après confirm) |
| Audit | `PROJECT_*` visibles |
| Captures | intake → proposal → confirm → cockpit |
| PASS | Project persisté + audit + pas de claim LINKED/CYCLE |
| FAIL | Mutation sans confirm ; fake en live ; erreur opaque |

### LPV-02 — Project existant (Track D1)

| Champ | Contenu |
|-------|---------|
| Données | Project créé en LPV-01 (nom/objectif proches) |
| Demande | Intention référençant ce Project |
| Événements | STRONG/POSSIBLE match ; confirm existing ; **NO_MUTATION** + note domaine |
| Mutation | Non |
| PASS | Navigation Project OK ; note visible ; pas PROJECT LINKED |
| FAIL | Création dupliquée silencieuse ; claim link |

### LPV-03 — Ambiguë (Track D1)

| Champ | Contenu |
|-------|---------|
| Demande | Intention vague (« je veux avancer sur SFIA ») |
| Attendu | Clarification NEED_CLARIFICATION ; pas d’outils CT ; pas mutation |
| PASS | Questions claires ; aucune proposition exécutable prématurée |
| FAIL | Create Project sans clarif ; fake tools |

### LPV-04 — Provider indisponible (Track D1 ou OPS1)

| Champ | Contenu |
|-------|---------|
| Setup | Live demandé + clé retirée temporairement **ou** modèle invalide (sans commit) |
| Attendu | Erreur CONFIG/PROVIDER claire ; **pas** de fallback fake silencieux |
| Mutation | Non |
| PASS | Message actionnable ; reprise après restauration config |
| FAIL | Fake silencieux ; mutation |

### LPV-05 — GitHub indisponible (Track CT)

| Champ | Contenu |
|-------|---------|
| Setup | Session OPS1 live ; simuler indispo `gh` (PATH / logout temporaire) **ou** tool deny |
| Attendu | Erreur transport explicite ; Git local peut réussir ; pas de faux succès GH |
| PASS | UI montre échec GH ; proposition/analyse partielle honnête |
| FAIL | Succès GH inventé ; crash non récupérable |

### LPV-06 — Source canonique / contradiction (Track CT)

| Champ | Contenu |
|-------|---------|
| Demande | Exiger template/routing **et** tenter d’obtenir une « adoption v3 » ou Cycle inventé |
| Attendu | Sources core chargées ; refus d’improviser doctrine ; anti-claims respectés |
| Outils | git_local_read / search sur allowlist |
| PASS | Citations/paths réels ; pas V3-ADOPTED ; pas CYCLE OPENED |
| FAIL | Prompt Cursor inventé ; doctrine hors repo |

### Couverture tools (Track CT — intégrée à LPV-05/06 + smoke)

Ajouter smoke CT en Lot 2 :

- `git_local_get_head` / `git_local_get_status`
- `github_get_repository` ou `github_get_branch`
- deny path hors allowlist

---

## 6. Critères PASS/FAIL globaux

**PASS (verdict A candidate)** si :

- LPV-01, 02, 03 PASS (D1)
- LPV-04 PASS (au moins un track)
- LPV-05, 06 PASS (CT)
- Smoke Git+GitHub PASS
- Aucun secret exposé
- DoD `77` §13 items 1–15 satisfaits

**PARTIEL (B)** si nominal OK mais ≥1 négatif critique flaky/non prouvé, ou visibilité insuffisante.

**NOT READY (C)** si fail-closed cassé, write possible, confusion fixture/live, ou GPT autorise mutation.

**WITH RESERVES (D)** si A sauf réserves documentées acceptables (ex. dual-track, badge D1 minimal).

---

## 7. Corrections candidates (pas dans ce cycle)

| Gap | Classe | Fichier probable | Effort | Gate |
|-----|--------|------------------|--------|------|
| `D1_INTAKE_LIVE` | A | `.env.local` local | S | Aucun (config) |
| Badge live D1 renforcé | C | `IntakeView` / rail | S | Delivery optionnel |
| Unifier tools dans D1 | B/F | intake + toolLoop | L | GO delivery + archi |
| CI | D | `.github` | M | GO tooling |

---

## 8. Lots / items (exécution)

| Lot | Item | Objectif | AC | Effort |
|-----|------|----------|----|--------|
| 1 | R1 | Config OpenAI + D1 live flag | Live D1 possible | S |
| 1 | R2 | Probes gh + git | Auth OK | S |
| 1 | R3 | App up :3020 unique | UI joignable | S |
| 2 | S1 | LPV-01 | PASS table | M |
| 2 | S2 | LPV-02 | PASS | M |
| 2 | S3 | LPV-03 | PASS | S |
| 2 | S4 | LPV-04 | PASS | S |
| 2 | S5 | LPV-05 + smoke GH/Git | PASS | M |
| 2 | S6 | LPV-06 + canonique | PASS | M |
| 3 | V1 | Captures/logs rangés `.tmp-sfia-review/` | Dossier preuves | S |
| 3 | V2 | Verdict A/B/C/D | Doc clôture | S |
| 3 | V3 | Impact B′ | Décision pack update | S |

**Total items : 12.** Pas de B′. Pas de Cursor write/exec.

---

## 9. Risques

- Confusion OPS1 vs D1 (opérateur)
- `.env` exporté dans logs
- Port 3020 double serveur
- Coût tokens OpenAI
- Tentation d’« améliorer » le code mid-flight

---

## 10. Arbitrages Morris (exécution)

1. **GO EXÉCUTION** oui/non
2. Dual-track accepté ?
3. Budget temps / tokens soft ?
4. Qui capture les preuves (Morris / Cursor) ?
5. Autoriser correctif **config only** mid-run ?

---

## 11. Gate d’exécution proposé

```text
GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION
```

Périmètre = ce pack + `77`.
Hors périmètre = B′, GuidedSession, Cycle runtime, writes, OAuth, CI, Figma.

---

## 12. NO-GO

- Claim live validé avant fin Lot 3
- B′ / C5 naming
- Git/GitHub write
- Cursor execution
- Commit/push/PR pendant live
- Secrets dans handoff
- Fallback fake silencieux

---

## 13. Verdicts post-live → B′

| Verdict | Libellé | B′ |
|---------|---------|-----|
| **A** | LIVE PRODUCT VALIDATED — OPTION B′ FRAMING MAY RESUME | Reprise cadrage B′ autorisable |
| **B** | LIVE PRODUCT PARTIALLY VALIDATED — CORRECTIONS REQUIRED | B′ différée ; correctifs |
| **C** | LIVE PRODUCT NOT READY — ARCHITECTURE OR PROVIDER REWORK REQUIRED | B′ fermée |
| **D** | LIVE PRODUCT VALIDATED WITH RESERVES — MORRIS DECISION REQUIRED | Morris tranche B′ |

---

## 14. Anti-claims

Ce document n’autorise pas l’exécution.
Il ne valide pas GPT live ni le produit.
Il ne rouvre pas B′.

**Prochaine action :** Décision Morris sur `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`.
```

### `projects/sfia-studio/79-shared-technical-platform-architecture.md` (complet)

```markdown
# SFIA Studio — Shared Technical Platform — Architecture candidate

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `79-shared-technical-platform-architecture.md` |
| **Statut** | `architecture-candidate` — **non validée** |
| **Gate consommé** | `GO ARCHITECTURE — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche** | `framing/sfia-studio-next-product-increment` (locale) |
| **Baseline méthode** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE |
| **Complète** | `80-shared-technical-platform-migration-decision-pack.md` |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.

---

## 1. Contexte et objectif

**Observation.** Les capacités GPT, tools Git/GitHub, redaction, path policy et contexte SFIA canonique vivent sous `lib/ops1/**`. D1 consomme déjà `ConversationProvider` / `OpenAIConversationProvider` / `config` **via des imports `@/lib/ops1/...`** (`resolveProvider.ts`, `fakeIntakeProvider.ts`). Live Product Validation a documenté un dual-track faute d’unification.

**Objectif.** Extraire une **Shared Technical Platform** minimale pour que :

1. D1 et OPS1 consomment les mêmes fondations techniques ;
2. **D1 ↛ OPS1** (règle cible) ;
3. OPS1 reste consommateur temporaire compatible ;
4. le parcours D1 unifié (GPT + tools + canonique + C2–C4) devient réalisable ;
5. le décommissionnement OPS1 soit préparé sans big-bang ni framework agents.

**Hors cible.** Multi-provider complexe, bus global, RAG, IoC, packages npm internes, OAuth, writes Git/GitHub, Cycle/GuidedSession runtime, B′ delivery, live GPT exécuté.

---

## 2. État actuel — inventaire

### 2.1 Classification des composants `lib/ops1/**`

| Composant | Classe | Destination candidate | Notes |
|-----------|--------|----------------------|-------|
| `conversation/types.ts` (`ConversationProvider`, messages, rounds) | **A** générique (+ **B** couplage `Ops1Error`, journal OPS1) | `platform/ai` | Extraire types purs ; journal helpers restent OPS1 ou deviennent utilitaires mode-agnostic |
| `conversation/openaiProvider.ts` | **A** | `platform/ai` | Déjà réutilisé par D1 |
| `conversation/fakeProvider.ts` | **A** (+ fixtures CT markers) | `platform/ai` | Séparer fake générique vs markers CT OPS1 |
| `conversation/config.ts` | **A** | `platform/ai` | Secrets live |
| `conversation/provider.ts` | **A** | `platform/ai` | Resolve OPS1 ; D1 a son resolve |
| `conversation/toolLoop.ts` | **B** | `platform/tools` | Couplé `session_events` OPS1 DB |
| `conversation/service.ts` | **C** métier OPS1 | rester OPS1 | Session + SFIA ActionCandidate |
| `tools/types.ts` | **A** | `platform/tools` | Noms CT OK comme namespace tools |
| `tools/toolRouter.ts` | **B** | `platform/tools` | Events → OPS1 DB à injecter |
| `tools/gitLocalReadAdapter.ts` | **A** | `platform/repository` | |
| `tools/githubReadAdapter.ts` | **A** | `platform/repository` | |
| `tools/pathPolicy.ts` | **A** | `platform/security` ou `repository` | |
| `tools/redaction.ts` | **A** | `platform/security` | |
| `sfia/canonicalPaths.ts` | **A** | `platform/sfia-context` | |
| `sfia/sourceLoader.ts` | **A** | `platform/sfia-context` | |
| `sfia/contextResolver.ts` | **B** | `platform/sfia-context` | Vérifier champs session OPS1 |
| `sfia/sessionContext.ts` | **C** | OPS1 | Bind session OPS1 |
| `sfia/proposalSchema.ts` | **C** | OPS1 | ActionCandidate |
| `sfia/actionCompiler.ts` | **C** | OPS1 | Compile + persist ActionCandidate |
| `sfia/cursorPromptInstantiator.ts` | **C** | OPS1 | |
| `sfia/types.ts` | **C** (+ fragments A) | Split | Types contexte → platform ; proposal → OPS1 |
| `reportReinjection.ts` / `reportService.ts` | **C** | OPS1 | |
| `db.ts` / `repository.ts` / `sessionLifecycle.ts` | **C** | OPS1 | |
| `execution*` / `actionGate` / `cursorExecutionAdapter` | **C** | OPS1 | |
| `allowlistEvaluation` / `allowlistService` | **C** (action write allowlist) vs pathPolicy **A** | Split | Ne pas confondre |
| `globalModeBadge` / `fixtureReply` / `validation` | **C**/UI | OPS1 | |

### 2.2 Métier D1 (ne pas extraire)

`lib/d1/intake/**` (prompt C2, validateProposal, analyzeIntent) · `context/**` matching · `confirmation/**` · `commands`/`repository` Project · audit Project · UI `features/d1/**`.

### 2.3 Dépendance actuelle critique

```
D1 resolveProvider ──imports──► ops1/conversation/{types,config,openaiProvider}
```

**Observation.** La règle cible « Interdire D1 → OPS1 » est **déjà violée**. L’extraction n’est pas cosmétique : elle régularise un couplage vivant.

OPS1 ↛ D1 : **OK** (aucun import trouvé).

---

## 3. Graphes de dépendances

### 3.1 Actuel

```
UI OPS1 ──► ops1/conversation/service ──► toolLoop ──► toolRouter ──► adapters
                              └──► sfia/sessionContext/actionCompiler
UI D1   ──► d1/intake/analyzeIntent ──► ops1 OpenAI provider (only)
              └──► d1 matching / confirmation / Project DB
```

### 3.2 Cible

```
UI OPS1 ──► ops1/service (métier) ──► platform/{ai,tools,sfia-context}
UI D1   ──► d1/intake (métier)   ──► platform/{ai,tools,sfia-context}
Futurs  ──► domain/*             ──► platform/*

Interdit: D1 → OPS1 | platform → D1 | platform → OPS1 | adapters → Project/Cycle/Session
```

### 3.3 Règles d’import testables (candidats)

| Règle | Mécanisme candidat |
|-------|-------------------|
| `lib/d1/**` n’importe pas `lib/ops1/**` | test ESLint `no-restricted-imports` ou vitest grep CI |
| `lib/platform/**` n’importe pas `lib/d1/**` ni `lib/ops1/**` | idem |
| `lib/ops1/**` peut importer `lib/platform/**` | autorisé |
| Adapters repository sans types D1/OPS1 session | review + test type |

---

## 4. Frontières cibles (modules)

Noms candidats (chemin proposé §8) :

| Module | Contenu | Consommateurs |
|--------|---------|---------------|
| **Studio AI** | `ConversationProvider`, OpenAI, Fake générique, config secrets, validation structured **générique** (hooks) | D1, OPS1 |
| **Studio Tools** | ToolDefinition/Registry/Executor, tool loop, ToolResult, policy | D1 (futur unifié), OPS1 |
| **Studio Repository Access** | GitReadPort, GithubReadPort, transports, path/repo allowlist | Tools |
| **Studio Canonical Context** | SourceLoader, paths, ContextResolver **sans** ActionCandidate | D1, OPS1 |
| **Studio Security** | redaction, limits, denial codes | Tools, AI |
| **Studio Observability** | `TechnicalEventSink` (interface), types événements techniques | Tools/AI ; domaines mappent vers timelines métier |

**Orchestration métier** reste hors platform : `ops1/conversation/service`, `d1/intake/analyzeIntent`.

---

## 5. Contrats candidats (sans code)

| Contrat | Responsabilité | Interdit | Erreurs |
|---------|----------------|----------|---------|
| `ConversationProvider` | complete / completeRound | Connaître Project, Proposal D1, ActionCandidate | TIMEOUT, PROVIDER, CONFIG |
| `StructuredOutputValidator<T>` | parse+validate payload | Règles métier D1/OPS1 spécifiques (restent domaines) | VALIDATION |
| `ToolDefinition` / `ToolCall` / `ToolResult` | schéma & résultat RO | Mutations | POLICY_DENIED, TIMEOUT… |
| `ToolExecutionContext` | workspaceRoot, allowlists, **EventSink** | Session OPS1 id obligatoire | — |
| `ToolExecutionPolicy` | deny-by-default | — | POLICY_DENIED |
| `GitReadPort` / `GithubReadPort` | lectures | Writes, shell | PATH/REPO denied |
| `CanonicalContextRequest/Result` | load+resolve doctrine | Ouvrir Cycle / claim v3 | SOURCE_REJECTED |
| `TechnicalEvent` | TOOL_*, AI_*, SOURCE_* | Secrets, tokens | — |
| `UsageMetrics` | tokens/model id | API keys | — |
| `TechnicalFailure` | code + message safe | Stack avec env | — |

**EventSink (critique pour découplage).** `toolLoop` / `toolRouter` n’écrivent plus directement dans `ops1.session_events` ; ils appellent `sink.emit(event)`. OPS1 fournit un sink SQLite session ; D1 fournit logs structurés / no-op / future table.

---

## 6. Options

### Option A — Extraction minimale services partagés

Déplacer AI + adapters Git/GitHub + pathPolicy + redaction + sourceLoader ; **laisser toolLoop/router dans OPS1** jusqu’à refactor sink.

| | |
|--|--|
| Valeur | Corrige D1→OPS1 provider rapidement |
| Complexité | M |
| Dette | D1 unifié tools encore bloqué ou re-dépend d’OPS1 toolLoop |
| Live unifié | Partiel |
| Effort | **M** |

### Option B — Plateforme conversationnelle technique (recommandée candidate)

A + tool loop/router découplés via EventSink + contexte canonique extrait + types AI purs.

| | |
|--|--|
| Valeur | **Forte** — D1 unifié + OPS1 inchangé fonctionnellement |
| Complexité | M–L |
| Dette | Wrappers `ops1/*` re-export temporaires |
| Live unifié | **Oui** après Lot 3 |
| Effort | **L** (mais incrémental) |

### Option C — Wrappers D1 autour d’OPS1 (**anti-option**)

| | |
|--|--|
| Valeur | Court terme trompeur |
| Dette | **Élevée** — ancre D1→OPS1 |
| Décommission | Empêché |
| Verdict | **Rejeter** |

### Option D — Refonte agent platform globale

Hors cible (framework, multi-agent, RAG…). **NO-GO.**

---

## 7. Recommandation candidate

**Recommandation :** Option **B** (plateforme technique proportionnée + EventSink).

**Alternative :** Option **A** puis B en second delivery si Morris veut un premier vertical plus petit (provider-only).

**Rationnel.**

1. Corrige la dépendance D1→OPS1 existante.
2. Rend le tool loop réutilisable sans ownership OPS1 DB.
3. Prépare Live Product Validation **unifiée** (remplace dual-track).
4. Laisse ActionCandidate / execution / reports dans OPS1.
5. Évite le framework universel.

---

## 8. Structure de fichiers candidate

### Variante 1 (recommandée) — `lib/platform/**`

```
app/lib/platform/
  ai/           # provider, openai, fake, config, types
  tools/        # definitions, router, loop, types
  repository/   # git + github adapters, ports
  sfia-context/ # paths, loader, resolver (sans compiler)
  security/     # redaction, limits helpers
  observability/# TechnicalEvent, EventSink
  index.ts
```

| Avantages | Inconvénients |
|-----------|----------------|
| Ownership clair « platform » | Nouveau préfixe imports |
| Aligné frontière doc | Risque fourre-tout si mal gouverné |
| Testable par règles import | Migration imports large |

### Variante 2 — `lib/studio/{ai,tools,...}`

Même découpage, préfixe `studio`. Moins explicite vs produit « platform ». **Second choix.**

**Ne pas créer** ces dossiers dans ce cycle.

Wrappers temporaires OPS1 :

```
lib/ops1/conversation/openaiProvider.ts → re-export platform/ai
lib/ops1/tools/* → re-export platform/...
```

Marqués `TEMP_OPS1_PLATFORM_WRAPPER — remove after Phase 5`.

---

## 9. Intégration D1 cible

```
D1-C1 UI
  → platform AI (live/fake)
  → platform sfia-context (sources)
  → platform tools (Git/GitHub RO) via tool loop + EventSink D1
  → adapter: raw assistant text/JSON → validateRequestRoutingProposal (D1)
  → D1-C3 matching
  → D1-C4 confirm
  → createProject | NO_MUTATION
```

**D1 reste owner :** proposal C2, matching, confirmation, Project DB/audit.
**Platform owner :** transport GPT, tools, sources, security technique, events techniques.

Point d’adaptation : fonction D1 `toRequestRoutingProposal(providerText)` — déjà `validateProposal` — **pas** dans platform.

---

## 10. Compatibilité OPS1

| Conservé OPS1 | Redirigé vers platform | Wrapper temporaire |
|---------------|----------------------|--------------------|
| service.ts orchestration | AI provider, tools, context | re-exports |
| ActionCandidate compile | consomme context platform | — |
| execution*, reports, db | — | — |
| UI Ops1SessionScreen | events via sink | — |

**Interdit :** nouveaux développements génériques sous `lib/ops1/tools` ou `conversation/openai*` après GO DELIVERY platform.
**Critère retrait wrappers :** plus aucun import interne hors re-export ; D1 n’importe que `platform` ; tests verts ; docs à jour.

---

## 11. Trajectoire de décommissionnement OPS1

| Phase | Contenu | Gate | Succès |
|-------|---------|------|--------|
| **1** | Extraire platform (AI, tools+sink, repo, context, security) | GO DELIVERY platform | Build + tests ; D1 importe platform |
| **2** | OPS1 consomme platform via wrappers | inclus Lot 2 | E2E OPS1 verts |
| **3** | D1 unifié consomme tools+context | Lot 3 | E2E D1 tools ; **plus D1→OPS1** |
| **4** | Live Product Validation unifiée | GO EXÉCUTION LIVE | Verdict A/B/C/D |
| **5** | Migrer/isoler métier OPS1 restant (ou figer) | GO dédié | Périmètre OPS1 clair |
| **6** | Supprimer wrappers + dossiers morts | GO CLEANUP OPS1 | Imports clean |

Ce cycle **n’autorise pas** la suppression OPS1.

---

## 12. Sécurité et observabilité

Conserver : read-only, allowlists, redaction, fail-closed, timeouts, 4×4 tool rounds, C4 humain, **aucune mutation platform**.

Événements techniques génériques : `AI_*`, `TOOL_*`, `SOURCE_*`, `STRUCTURED_OUTPUT_*` — domaines mappent vers UI/audit métier. **Pas de bus global** : EventSink local injecté.

---

## 13. Migration — backlog candidat (≤4 lots · ≤15 items)

### Lot 1 — Fondations platform

1. Créer `lib/platform/ai` (types purs, openai, fake générique, config)
2. Créer security/redaction + repository adapters + pathPolicy
3. Créer sfia-context (paths, loader, resolver sans compiler)
4. Introduire `EventSink` + découpler toolRouter/toolLoop
5. Tests unit platform + règle import « platform ↛ ops1/d1 »

### Lot 2 — OPS1 sans régression

6. Wrappers re-export OPS1
7. Brancher service OPS1 sur platform
8. Vitest OPS1 + E2E CT smoke

### Lot 3 — D1 unifié

9. D1 resolveProvider → platform only
10. Brancher analyzeIntent / intake sur tool loop + context (borné)
11. UI événements tools sur Intake (minimal)
12. Interdire imports D1→OPS1 (test)
13. E2E D1 live-path (fixture tools)

### Lot 4 — Live prep + retrait wrappers (préparation)

14. Runbook Live Product Validation unifié (maj 77/78 ultérieure)
15. Checklist retrait wrappers (exécution suppression = gate séparé)

**Premier vertical minimal (Recommandation) :** items 1–3 + 6–9 (provider extract + D1 découplé) si Morris choisit Alternative A d’abord ; sinon Lots 1–3 complets pour B.

---

## 14. Critères d’architecture (checklist)

- [ ] D1 ↛ OPS1
- [ ] Ownership platform indépendant
- [ ] OPS1 fonctionne via wrappers
- [ ] Pas de duplication GPT/tools/context
- [ ] D1 unifié réalisable
- [ ] Read-only + redaction intactes
- [ ] Fake + tests déterministes possibles
- [ ] Métier D1/OPS1 non mélangé dans platform
- [ ] Décommission préparé
- [ ] Pas de framework universel
- [ ] Migration incrémentale + rollback (wrappers)
- [ ] Imports interdits testables

---

## 15. Risques et dette

| Risque | Mitigation |
|--------|------------|
| Big-bang imports | Wrappers + lots |
| EventSink mal conçu | Interface minimale d’abord |
| Fourre-tout `platform/` | Modules nommés + ownership doc |
| Extraire actionCompiler trop tôt | Rester OPS1 |
| Live reporté encore | Accepter ; platform débloque unifié |

**Dette temporaire acceptable :** wrappers OPS1.
**Dette interdite :** nouveaux features génériques sous OPS1 ; D1→OPS1 maintenu.

---

## 16. Impacts trajectoire produit

| Sujet | Impact |
|-------|--------|
| Live Product Validation | Dual-track **remplacé** par unifié **après** Phase 3 ; prep 77/78 reste historique |
| B′ | Toujours différée ; platform ne l’implémente pas |
| OPS1 | Consommateur temporaire ; pas owner technique |

---

## 17. Décisions Morris requises

1. Valider **Option B** (ou Alternative A) ?
2. Valider structure `lib/platform/**` ?
3. Accepter EventSink comme contrat d’observabilité ?
4. GO DELIVERY — premier vertical (préciser A vs B scope) ?
5. Ordre : Platform delivery **avant** reprise Live Execution ?

---

## 18. Anti-claims

Pas de platform « livrée ». Pas de suppression OPS1. Pas LIVE VALIDATED. Pas B′. Pas V3-ADOPTED. Pas D1 COMPLETE.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** Après rédaction de ce document candidate, Morris a consommé `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`. La delivery Option B a été intégrée sur `main` via PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255) (squash `445702dcad750734cef4b97122e7ccb1e67b24ee`). Les rapports d’exécution et de validation sont `81` et `82`.

Ce document **79** conserve son statut `architecture-candidate` d’origine (historique de cadrage). Il ne remplace pas `81`/`82` et ne réouvre pas la delivery.
```

### `projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md` (complet)

```markdown
# SFIA Studio — Shared Technical Platform — Migration & Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `80-shared-technical-platform-migration-decision-pack.md` |
| **Statut** | `decision-pack-candidate` — **non validé** |
| **Complète** | `79-shared-technical-platform-architecture.md` |
| **Gate consommé** | `GO ARCHITECTURE — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `88fa4658da07156614de270d8172f147535ddbf9` |

---

## 1. Décisions déjà validées (contexte)

| Décision | Statut |
|----------|--------|
| Control Tower + D1 fondation mergés (PR #254) | FAIT |
| Live Product Validation prioritaire vs B′ (cadrage 77/78) | Cadrage ; **exécution live différée** jusqu’à architecture platform |
| OPS1 n’est pas propriétaire cible des capacités techniques | Doctrine Morris (ce gate) |
| D1 ne doit pas dépendre durablement d’OPS1 | Doctrine ; **violation actuelle à corriger** |
| B′ différée | Confirmée |
| Ce cycle = architecture only (pas de code) | En cours |

---

## 2. Options comparées (synthèse)

| Critère | A minimale | **B technique (rec.)** | C wrappers D1→OPS1 | D agent platform |
|---------|------------|------------------------|--------------------|------------------|
| Corrige D1→OPS1 | Oui (provider) | **Oui (complet)** | Non (aggrave) | N/A hors cible |
| D1 unifié tools+context | Non / différé | **Oui** | Faux unifié | Overkill |
| OPS1 non-régression | Facile | Via wrappers | — | Risqué |
| Dette | Moyen | Wrappers temporaires | **Élevée** | Très élevée |
| Effort | M | L incrémental | S trompeur | XL |
| Réversibilité | Haute | Haute (wrappers) | Basse | Basse |
| Live Validation | Dual-track continue | **Unifié après Lot 3** | Dual-track | — |
| Cycle/GS futurs | Partiel | **Oui fondations** | Non | Spéculatif |
| Verdict | Alternative | **Recommandation** | **Rejeter** | **NO-GO** |

---

## 3. Recommandation et alternative

**Recommandation candidate :** Option **B** — Shared Technical Platform (`lib/platform/**`) avec EventSink, tool loop découplé, AI + repository + sfia-context + security.

**Alternative :** Option **A** d’abord (provider + adapters + context sans tool loop) ; B en second GO DELIVERY.

**Anti-option C :** rejetée — maintient D1→OPS1.
**Option D :** hors cible.

---

## 4. Éléments différés

- Exécution Live Product Validation (77/78) jusqu’après Phase 3 ou décision Morris d’exécuter dual-track temporaire.
- Option B′ Project → Controlled Cycle Proposal.
- Suppression physique OPS1 / dossiers.
- Cycle / GuidedSession runtime.
- OAuth GitHub / writes.
- Multi-provider, bus événements global, packages internes npm.

---

## 5. Backlog (4 lots · 15 items)

### Lot 1 — Extraction fondations (effort L)

| # | Objectif | Fichiers candidats | Tests | Acceptation | Rollback | Effort |
|---|----------|-------------------|-------|-------------|----------|--------|
| 1 | `platform/ai` types + openai + fake + config | move from `ops1/conversation/*` | unit AI | D1 peut importer platform | wrappers | M |
| 2 | `platform/security` + `repository` | redaction, pathPolicy, git/github adapters | unit policy | deny-by-default inchangé | wrappers | M |
| 3 | `platform/sfia-context` | canonicalPaths, sourceLoader, resolver | unit loader | sources RO | wrappers | M |
| 4 | EventSink + toolRouter/toolLoop découplés | tools/* | unit sink mock | 0 écriture DB dans platform | garder OPS1 sink | M |
| 5 | Règle import platform ↛ ops1/d1 | test lint/vitest | CI local | FAIL si import | désactiver règle | S |

**Gate :** inclus dans GO DELIVERY platform.
**Risque :** casse imports ; mitigé wrappers.
**Dette :** aucune durable si wrappers planifiés.

### Lot 2 — Migration OPS1 (effort M)

| # | Objectif | Fichiers | Tests | Acceptation | Rollback |
|---|----------|----------|-------|-------------|----------|
| 6 | Wrappers re-export `ops1` | `ops1/conversation`, `ops1/tools`, `ops1/sfia` partiel | — | imports existants compilent | revert wrappers |
| 7 | `service.ts` → platform | ops1 conversation service | vitest OPS1 | sessions CT OK | rebind ancien chemin |
| 8 | Non-régression OPS1 | — | vitest OPS1 + E2E CT | 105+ / E2E verts | revert Lot 2 |

### Lot 3 — Intégration D1 unifiée (effort L)

| # | Objectif | Fichiers | Tests | Acceptation | Rollback |
|---|----------|----------|-------|-------------|----------|
| 9 | `resolveProvider` → platform only | `d1/intake/resolveProvider.ts` | unit | **0 import ops1** | revert import |
| 10 | Brancher tools+context bornés sur intake | analyzeIntent / nouveau orchestrateur D1 | unit + e2e fixture | tools RO dans D1 | feature flag |
| 11 | Timeline tools minimale Intake UI | features/d1 | e2e | events visibles sans secrets | cacher UI |
| 12 | Interdire D1→OPS1 | eslint/test | CI | FAIL import | — |
| 13 | E2E D1 path tools | e2e d1 | e2e | PASS fixture | skip test |

### Lot 4 — Live + préparation retrait (effort S–M)

| # | Objectif | Acceptation | Gate |
|---|----------|-------------|------|
| 14 | Maj runbook live unifié (docs 77/78 ultérieures) | runbook D1-only path | GO EXÉCUTION LIVE |
| 15 | Checklist suppression wrappers | checklist + critères | GO CLEANUP (séparé) |

---

## 6. Premier vertical minimal

**Si GO Option B complet :** Lots 1–2 (platform + OPS1 stable) puis Lot 3 avant live.

**Si GO Alternative A :** items **1–3 + 6 + 9** seulement — D1 découplé du provider OPS1, sans tools encore ; live reste dual-track jusqu’à B.

**Recommandation delivery :** vertical **B Lot 1+2**, puis Lot 3 avant toute Live Execution unifiée.

---

## 7. Fichiers candidats (carte)

### Vers `lib/platform/` (extrait)

- `ops1/conversation/{types (partiel), openaiProvider, fakeProvider, config, toolLoop}`
- `ops1/tools/{types, toolRouter, gitLocalReadAdapter, githubReadAdapter, pathPolicy, redaction}`
- `ops1/sfia/{canonicalPaths, sourceLoader, contextResolver}` (+ types contextuels)

### Restent `lib/ops1/`

- `conversation/service.ts`, journal helpers liés Session
- `sfia/{sessionContext, proposalSchema, actionCompiler, cursorPromptInstantiator}`
- `db`, `repository`, `sessionLifecycle`, `execution*`, `actionGate`, `report*`, `allowlistService` (actions)
- `features/ops1/**`, routes OPS1

### Restent `lib/d1/`

- intake métier, matching, confirmation, Project commands/db, UI D1

### Ne pas toucher ce cycle

`app/**` code, tests, package.json, method, 66–78 (sauf lecture).

---

## 8. Tests et rollback

| Niveau | Contenu |
|--------|---------|
| Unit | platform AI, policy, loader, sink mock |
| Vitest domaine | OPS1 105+ ; D1 52+ |
| E2E | CT smoke ; D1 intake ; (plus tard) D1 tools |
| Import guards | D1↛OPS1 ; platform↛domain |

**Rollback par lot :** wrappers + feature flags D1 tools ; aucun squash force ; revert commit delivery.

---

## 9. Gates

| Gate | Rôle |
|------|------|
| **GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM** | Proposé — **ne pas consommer** ici |
| GO EXÉCUTION — LIVE PRODUCT VALIDATION | Après unifié (ou dual-track si Morris force) |
| GO CLEANUP OPS1 WRAPPERS | Après stabilité + live verdict |
| GO PRODUCT — B′ | Après live verdict A/B/C/D |

---

## 10. Décisions Morris requises

1. **Option B vs Alternative A** pour le premier GO DELIVERY ?
2. Valider chemin **`app/lib/platform/**`** ?
3. Accepter **EventSink** obligatoire pour tool loop partagé ?
4. Confirmer **interdiction** nouveaux génériques sous `lib/ops1` après GO DELIVERY ?
5. Confirmer séquence : **Platform → D1 unifié → Live Product Validation → décision B′** ?
6. GO DELIVERY maintenant ou après relecture ChatGPT ?

### Conséquences GO

- Autorise delivery code platform + wrappers + D1 resolve ; active lots.
- Débloque live unifié après Lot 3.
- OPS1 reste temporaire.

### Conséquences NO-GO

- D1→OPS1 **persiste**.
- Live reste dual-track (77/78).
- Risque duplication future.
- B′ et live restent bloqués ou fragiles.

---

## 11. Impact Live Product Validation

| Avant platform | Après Phase 3 |
|----------------|---------------|
| Dual-track OPS1 live tools vs D1 C2-only | **Un seul** parcours D1 + platform |
| Docs 77/78 décrivent dual-track | À mettre à jour (cycle doc séparé) |
| Verdict live A/B/C/D | Plus représentatif du produit cible |

**Observation.** Exécuter live **avant** Phase 3 valide le dual-track, pas la cible. Morris peut quand même l’exiger pour preuve GPT/config ; architecture recommande d’attendre unifié si possible.

---

## 12. Impact B′

Aucun delivery B′. Platform fournit GPT/tools/context réutilisables pour un futur Cycle proposal **sans** l’implémenter. B′ reste différée.

---

## 13. Impact OPS1

- Phase 1–2 : consommateur platform, comportement CT préservé.
- Phase 5–6 : métier ActionCandidate/execution éventuellement gelé ou retiré sous gates séparés.
- **Pas de suppression dans ce cycle ni dans le premier delivery platform.**

---

## 14. Critères d’acceptation architecture (pour GO Morris)

Voir §14 doc 79. Ce pack est **READY** si Morris peut décider B vs A et la structure sans ambiguïté ownership.

---

## 15. Anti-claims

Pas de code platform créé. Pas GO DELIVERY consommé. Pas live exécuté. Pas OPS1 décommissionné. Pas B′.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** La delivery Shared Technical Platform recommandée ici (Option B) a ensuite été exécutée et mergée (PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255), squash `445702dc…`). Voir `81` (delivery) et `82` (validation / PR readiness).

Ce document **80** reste `decision-pack-candidate` historique. Les lots D1 tools/context, Live Product Validation, cleanup wrappers et Option B′ restent différés selon les gates Morris post-merge.
```
