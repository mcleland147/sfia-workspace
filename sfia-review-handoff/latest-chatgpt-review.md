# SFIA Review Pack — Unmerged branches consolidation (docs 75–80)

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 07:39:15 CEST |
| Cycle | PR readiness — consolidation documents Studio non intégrés |
| Profil | Critical — agrégation multi-branches + push + draft PR |
| Repo | mcleland147/sfia-workspace |
| Base origin/main | `445702dcad750734cef4b97122e7ccb1e67b24ee` (PR #255 squash merge — inchangé depuis référence connue) |
| Branche consolidation | `docs/sfia-studio-recover-unmerged-project-docs` |
| HEAD final | `1a2fa31fab6343bdd0eab7211febb3bcc5326c33` |
| Draft PR | [#256](https://github.com/mcleland147/sfia-workspace/pull/256) (draft, OPEN) |
| Worktree exécution | `/Users/morris/Projects/sfia-workspace-docs-recover` |
| Source docs | Untracked files dans worktree framing `/Users/morris/Projects/sfia-workspace-framing-next-increment` (branche tip ancêtre de main, 0 commits propres) |

## Verdict

**UNMERGED BRANCHES CONSOLIDATED — DRAFT PR READY FOR MORRIS REVIEW**

## État Git final (worktree consolidation)

```
## docs/sfia-studio-recover-unmerged-project-docs...origin/docs/sfia-studio-recover-unmerged-project-docs
```

## Commits origin/main..HEAD

```
1a2fa31 (HEAD -> docs/sfia-studio-recover-unmerged-project-docs, origin/docs/sfia-studio-recover-unmerged-project-docs) docs(sfia-studio): record draft PR #256 on consolidation report
7534adf docs(sfia-studio): align README post-merge and add consolidation report
3557be3 docs(sfia-studio): recover shared platform architecture candidates
42190d4 docs(sfia-studio): recover next-increment and live-prep framing docs
```

## Diff name-status

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

## Diff stat

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

## Blobs fichiers consolidés

- `projects/sfia-studio/75-next-product-increment-framing.md` → `71b2699db8e4138aacc032a68c57fac7b42f2748`
- `projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md` → `513c9c0e73df0e136b6c68cdae261173b202a461`
- `projects/sfia-studio/77-live-product-validation-framing-and-readiness.md` → `35c3df1906f317c159dc8379c808104e8cf0d2cc`
- `projects/sfia-studio/78-live-product-validation-execution-decision-pack.md` → `7205302e178fa4a7f0be344d1479504e9a452470`
- `projects/sfia-studio/79-shared-technical-platform-architecture.md` → `82ff90decdcb5305ffb00bf0264e2754fe63abfa`
- `projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md` → `3f6b9f4595b0dfeea0c2a71f6c91d88364a4e08d`
- `projects/sfia-studio/83-unmerged-docs-consolidation-pr-readiness.md` → `80878a9b748bee2a8cd693dcd97851dc3e1ca5e5`
- `projects/sfia-studio/README.md` → `544e1634839a99b07e2e7786c77f87db92b3a997`

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (origin/main)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/sfia-studio/README.md` (pre/post)
- `projects/sfia-studio/81-shared-technical-platform-delivery-report.md`
- `projects/sfia-studio/82-shared-technical-platform-validation-and-pr-readiness.md`
- Handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (pré-cycle)
- PR #255 merge `445702dc…` vérifié = `origin/main`

## Inventaire branches

### Règle d'écartement

- Tip ancêtre de main → absorbé
- Contenu squash-équivalent (ex. 81 blob identique delivery ↔ main) → absorbé
- Produit OPS1 / platform / method / prompts hors scope → écarté
- Seule source utile : fichiers **untracked** framing WT (75–80)

### Branches / tips retenus

| Source | SHA tip | Rôle |
|--------|---------|------|
| Worktree framing untracked 75–80 | N/A (jamais commités) | Restauration ciblée |
| Nouvelle branche consolidation depuis origin/main | `1a2fa31fab6343bdd0eab7211febb3bcc5326c33` | Porte la draft PR #256 |

### Branches Studio / delivery pertinentes écartées

| Branche | Motif |
|---------|--------|
| `delivery/sfia-studio-shared-technical-platform` | Squash #255 ; tip non ancêtre mais contenu absorbé |
| `delivery/sfia-studio-control-tower-fast-track` | Squash #254 |
| `framing/sfia-studio-next-product-increment` @ `88fa465` | Tip ancêtre ; 0 commits propres ; docs seulement untracked |
| `sfia/review-handoff` | Hors consolidation docs Studio |
| Autres delivery/design/backlog Studio historiques | Code/docs déjà mergés via squash ou obsolètes / hors périmètre docs 75–80 |

### Inventaire local (tips non-ancêtres)

```
=== local branches not ancestor of main (sample) ===
architecture/interv360-product-roadmap-after-persistence|572d061|2026-07-01 22:29:16 +0200|Morris Cleland|ahead=1|behind=529
backlog/sfia-studio-ops1|4032c25|2026-07-20 20:53:09 +0200|Morris Cleland|ahead=1|behind=12
backlog/sfia-studio-poc-vertical-slice|b4b26b2|2026-07-19 23:06:24 +0200|Morris Cleland|ahead=1|behind=27
capitalization/sfia-studio-p0-status-sync|e97e083|2026-07-19 12:14:47 +0200|Morris Cleland|ahead=1|behind=38
capitalization/sfia-studio-poc-framing-post-merge|18d2151|2026-07-19 13:15:19 +0200|Morris Cleland|ahead=2|behind=36
consolidation/interv360-application-rex|dc4c971|2026-07-03 13:48:32 +0200|Morris Cleland|ahead=1|behind=354
consolidation/interv360-current-app-audit|8099a96|2026-07-03 13:30:01 +0200|Morris Cleland|ahead=1|behind=356
consolidation/sfia-documentation-review|45e4498|2026-07-03 14:50:43 +0200|Morris Cleland|ahead=1|behind=350
consolidation/sfia-global-capitalization|b11b318|2026-07-03 14:20:55 +0200|Morris Cleland|ahead=2|behind=352
cycle/chantiers360-v2-design-figma|5fa9fcb|2026-07-06 02:05:08 +0200|Morris Cleland|ahead=4|behind=296
cycle/chantiers360-v2-detailed-framing|4546d88|2026-07-05 15:20:37 +0200|Morris Cleland|ahead=1|behind=301
cycle/chantiers360-v2-figma-fidelity-spike|6d44882|2026-07-06 07:58:44 +0200|Morris Cleland|ahead=2|behind=293
cycle/chantiers360-v2-functional-architecture|934be03|2026-07-05 16:13:33 +0200|Morris Cleland|ahead=2|behind=300
cycle/chantiers360-v2-light-architecture|55b2f0c|2026-07-06 07:14:58 +0200|Morris Cleland|ahead=3|behind=295
cycle/chantiers360-v2-mvp-backlog|9babc8c|2026-07-05 18:49:16 +0200|Morris Cleland|ahead=2|behind=298
cycle/chantiers360-v2-ux-ui|be9b2f3|2026-07-05 17:40:06 +0200|Morris Cleland|ahead=1|behind=299
decision/chantiers360-v2-architecture-arbitrages|9d425dd|2026-07-06 07:35:24 +0200|Morris Cleland|ahead=3|behind=294
delivery/chantiers360-v2-inc-01|e65a4d2|2026-07-06 10:37:37 +0200|Morris Cleland|ahead=5|behind=289
delivery/chantiers360-v2-inc-02|c4cc4dc|2026-07-06 17:21:29 +0200|Morris Cleland|ahead=2|behind=282
delivery/chantiers360-v2-inc-03|6583ddf|2026-07-06 18:43:22 +0200|Morris Cleland|ahead=2|behind=278
delivery/chantiers360-v2-inc-04|406a883|2026-07-06 19:53:25 +0200|Morris Cleland|ahead=2|behind=275
delivery/chantiers360-v2-inc-05|bcc6d37|2026-07-07 06:01:46 +0200|Morris Cleland|ahead=3|behind=272
delivery/sfia-studio-control-tower-fast-track|bb3c9e2|2026-07-22 23:00:53 +0200|Morris Cleland|ahead=6|behind=2
delivery/sfia-studio-ops1-i1-session-journal|97df7d5|2026-07-20 22:04:54 +0200|Morris Cleland|ahead=1|behind=10
delivery/sfia-studio-ops1-i3-action-gate|3607a3a|2026-07-21 14:13:23 +0200|Morris Cleland|ahead=1|behind=7
delivery/sfia-studio-poc-increment-a|89cb756|2026-07-19 23:52:50 +0200|Morris Cleland|ahead=1|behind=26
delivery/sfia-studio-poc-increment-b|8316f26|2026-07-20 06:17:45 +0200|Morris Cleland|ahead=1|behind=25
delivery/sfia-studio-poc-increment-c|96bb808|2026-07-20 07:54:22 +0200|Morris Cleland|ahead=1|behind=24
delivery/sfia-studio-poc-increment-d|41b9c46|2026-07-20 08:36:12 +0200|Morris Cleland|ahead=1|behind=23
delivery/sfia-studio-shared-technical-platform|08c282a|2026-07-23 07:12:24 +0200|Morris Cleland|ahead=8|behind=1
design/sfia-studio-ops1-scenario|d248b9d|2026-07-20 18:43:23 +0200|Morris Cleland|ahead=1|behind=15
design/sfia-studio-ops1-technical-architecture|b495a56|2026-07-20 20:09:13 +0200|Morris Cleland|ahead=1|behind=13
design/sfia-studio-poc-vertical-slice|58fb275|2026-07-19 22:39:25 +0200|Morris Cleland|ahead=3|behind=28
devops/sfia-studio-ops1-foundation|04a3b45|2026-07-20 21:28:53 +0200|Morris Cleland|ahead=1|behind=11
docs/chantiers360-v0-vs-sfia-v2-comparison|158bdf0|2026-07-07 10:06:32 +0200|Morris Cleland|ahead=1|behind=261
docs/chantiers360-v0-vs-v2-post-merge|2e68166|2026-07-07 10:13:01 +0200|Morris Cleland|ahead=1|behind=260
docs/chantiers360-v2-design-coverage-post-merge|bbd54bf|2026-07-07 07:28:27 +0200|Morris Cleland|ahead=1|behind=267
docs/chantiers360-v2-final-pilot-rex|438b3bb|2026-07-07 10:51:32 +0200|Morris Cleland|ahead=1|behind=259
docs/chantiers360-v2-inc-01-closure|09204fc|2026-07-06 10:59:42 +0200|Morris Cleland|ahead=1|behind=287
docs/chantiers360-v2-inc-01-qa-g4|94f71f2|2026-07-06 10:46:52 +0200|Morris Cleland|ahead=1|behind=288
docs/chantiers360-v2-inc-02-closure|e461c6f|2026-07-06 18:08:44 +0200|Morris Cleland|ahead=3|behind=280
docs/chantiers360-v2-inc-02-qa-g4|ec073f6|2026-07-06 17:30:30 +0200|Morris Cleland|ahead=1|behind=281
docs/chantiers360-v2-inc-03-closure|1d795fc|2026-07-06 19:13:19 +0200|Morris Cleland|ahead=1|behind=276
docs/chantiers360-v2-inc-03-qa-g4|f136c33|2026-07-06 18:52:32 +0200|Morris Cleland|ahead=1|behind=277
docs/chantiers360-v2-inc-04-closure|eb174d0|2026-07-06 21:40:52 +0200|Morris Cleland|ahead=1|behind=273
docs/chantiers360-v2-inc-04-qa-g4|96bd25e|2026-07-06 21:15:08 +0200|Morris Cleland|ahead=1|behind=274
docs/chantiers360-v2-inc-05-closure|9987df6|2026-07-07 06:33:02 +0200|Morris Cleland|ahead=1|behind=270
docs/chantiers360-v2-inc-05-qa-g4|d30ca72|2026-07-07 06:14:56 +0200|Morris Cleland|ahead=1|behind=271
docs/chantiers360-v2-post-capitalization-alignment|314794a|2026-07-06 11:33:45 +0200|Morris Cleland|ahead=1|behind=285
docs/chantiers360-v2-post-spike-alignment|fe93090|2026-07-06 08:11:01 +0200|Morris Cleland|ahead=1|behind=292
docs/chantiers360-v2-readme-post-closure|d672317|2026-07-06 18:13:37 +0200|Morris Cleland|ahead=1|behind=279
docs/chantiers360-v2-technical-architecture-post-merge|9e7bcb3|2026-07-07 07:52:39 +0200|Morris Cleland|ahead=1|behind=265
docs/sfia-studio-pr226-post-merge-sync|ed33044|2026-07-19 20:59:50 +0200|Morris Cleland|ahead=1|behind=29
docs/sfia-studio-recover-unmerged-project-docs|1a2fa31|2026-07-23 07:38:35 +0200|Morris Cleland|ahead=4|behind=0
docs/sfia-v231-final-status|2bddced|2026-07-07 08:35:47 +0200|Morris Cleland|ahead=1|behind=262
docs/sfia-v2x-versioning-post-merge|c0a4a74|2026-07-07 08:24:28 +0200|Morris Cleland|ahead=1|behind=263
fix/chantiers360-v2-rqa02-status-alignment|1ef4d67|2026-07-06 12:39:55 +0200|Morris Cleland|ahead=1|behind=283
method/chantiers360-v2-inc-01-capitalization|5b5758f|2026-07-06 11:12:28 +0200|Morris Cleland|ahead=1|behind=286
method/chantiers360-v2-mvp-capitalization|adcda83|2026-07-07 07:02:57 +0200|Morris Cleland|ahead=2|behind=269
method/interv360-final-capitalization|8763417|2026-07-03 13:04:12 +0200|Morris Cleland|ahead=1|behind=360
method/sfia-consolidation-roadmap|10cb8c0|2026-07-03 13:16:26 +0200|Morris Cleland|ahead=1|behind=358
method/sfia-v2-automation-levels|80aac9c|2026-07-05 09:26:19 +0200|Morris Cleland|ahead=2|behind=306
method/sfia-v2-automation-vision|1398a46|2026-07-05 08:30:21 +0200|Morris Cleland|ahead=1|behind=307
method/sfia-v2-delivery-qa-test-standard|2645df2|2026-07-06 09:57:15 +0200|Morris Cleland|ahead=2|behind=290
method/sfia-v2-design-coverage-rules|bc697d8|2026-07-07 07:16:12 +0200|Morris Cleland|ahead=1|behind=268
method/sfia-v2-figma-design-cycle|1bb55f0|2026-07-05 19:09:27 +0200|Morris Cleland|ahead=1|behind=297
method/sfia-v2-figma-fidelity-gate-standard|672d72b|2026-07-06 08:20:51 +0200|Morris Cleland|ahead=1|behind=291
method/sfia-v2-pilot-selection-decision|7282317|2026-07-05 10:49:12 +0200|Morris Cleland|ahead=1|behind=304
method/sfia-v2-pilot-selection-scoring|22d8dcf|2026-07-05 14:10:43 +0200|Morris Cleland|ahead=2|behind=303
method/sfia-v2-project-bootstrap-standard|cbba66b|2026-07-05 10:12:18 +0200|Morris Cleland|ahead=1|behind=305
method/sfia-v2-prompt-routing-alignment|1bc9f3a|2026-07-06 11:58:19 +0200|Morris Cleland|ahead=1|behind=284
method/sfia-v2-technical-architecture-decision-standard|d8f4377|2026-07-07 07:42:37 +0200|Morris Cleland|ahead=1|behind=266
method/sfia-v2.4-consolidation-operating-efficiency|d96dfce|2026-07-07 11:18:06 +0200|Morris Cleland|ahead=1|behind=258
method/sfia-v2.4-reference-documentation-alignment|e79a440|2026-07-07 12:11:16 +0200|Morris Cleland|ahead=3|behind=257
method/sfia-v2.4.1-documentation-status-promotion|ecaf416|2026-07-08 03:15:58 +0200|Morris Cleland|ahead=2|behind=256
method/sfia-v2x-method-versioning-standard|a76c3f8|2026-07-07 08:13:44 +0200|Morris Cleland|ahead=1|behind=264
notion/pause-notion-publication-track|c79992b|2026-07-04 21:18:33 +0200|Morris Cleland|ahead=1|behind=309
project/chantiers360-v2-bootstrap|774beed|2026-07-05 15:13:53 +0200|Morris Cleland|ahead=2|behind=302
project/sfia-studio-poc-orchestration-framing|3b162ec|2026-07-19 12:47:55 +0200|Morris Cleland|ahead=1|behind=37
prompts/create-templates-context-pack|b6d9a88|2026-07-04 22:13:11 +0200|Morris Cleland|ahead=1|behind=308
recovery/campus360-detailed-framing|32690b6|2026-07-19 02:42:53 +0200|Morris Cleland|ahead=1|behind=39
recovery/sfia-studio-functional-architecture-sync|a5ad0c0|2026-07-19 02:43:27 +0200|Morris Cleland|ahead=1|behind=39
sfia/review-handoff|bb226b1|2026-07-23 07:22:13 +0200|Morris Cleland|ahead=369|behind=946
spike/sfia-studio-openai-gpt-adapter|056c97f|2026-07-19 20:48:07 +0200|Morris Cleland|ahead=2|behind=30
tooling/review-handoff-canonical-publisher|14d58fe|2026-07-21 13:32:09 +0200|Morris Cleland|ahead=1|behind=7

```

### Inventaire remote (extrait généré)

```
=== remote branches tips not ancestor (truncated useful) ===
ABSORBED_TIP|origin|445702d|2026-07-23 07:15:59 +0200
ABSORBED_TIP|origin/architecture/interv360-backend-persistence-decision|4ee36ee|2026-07-01 21:50:26 +0200
ABSORBED_TIP|origin/architecture/interv360-product-industrialization-framing|bf01af0|2026-07-01 21:39:03 +0200
ABSORBED_TIP|origin/architecture/interv360-product-roadmap-after-role-simulation|70a1110|2026-07-02 00:42:39 +0200
ABSORBED_TIP|origin/architecture/interv360-product-roadmap-next|69b8246|2026-07-02 00:00:50 +0200
ABSORBED_TIP|origin/architecture/interv360-role-simulation-review|733cbff|2026-07-02 03:48:53 +0200
ABSORBED_TIP|origin/archive/sfia-v2.6-lot-0-completion|2830efd|2026-07-12 05:59:41 +0200
ABSORBED_TIP|origin/archive/sfia-v2.6-lot-0-inventories|6cf7d36|2026-07-12 05:04:23 +0200
ABSORBED_TIP|origin/archive/sfia-v2.6-lot-c-v3-mcp|d4401c3|2026-07-12 17:09:44 +0200
ABSORBED_TIP|origin/audit/sfia-v2.6-lot-0-qualification|e200689|2026-07-12 04:26:14 +0200
ABSORBED_TIP|origin/audit/sfia-v2.6-repository-cartography|4ae75a9|2026-07-11 20:52:32 +0200
NOT_ANCESTOR|origin/backlog/sfia-studio-poc-vertical-slice|b4b26b2|2026-07-19 23:06:24 +0200|ahead=1
ABSORBED_TIP|origin/cadrage/sfia-v2.6-lot-h|d54c952|2026-07-13 06:56:56 +0200
ABSORBED_TIP|origin/cadrage/task-tracker-light|b763a31|2026-07-13 17:45:49 +0200
NOT_ANCESTOR|origin/capitalization/sfia-studio-p0-status-sync|e97e083|2026-07-19 12:14:47 +0200|ahead=1
NOT_ANCESTOR|origin/capitalization/sfia-studio-poc-framing-post-merge|18d2151|2026-07-19 13:15:19 +0200|ahead=2
ABSORBED_TIP|origin/capitalization/sfia-v2.6-repository-rationalization|40b6f00|2026-07-13 12:02:03 +0200
ABSORBED_TIP|origin/cleanup/sfia-v2.6-lot-j|c4cc0b0|2026-07-13 11:30:15 +0200
ABSORBED_TIP|origin/conception/sfia-notion-product-space|f7f2e18|2026-07-13 13:02:14 +0200
NOT_ANCESTOR|origin/consolidation/interv360-application-rex|dc4c971|2026-07-03 13:48:32 +0200|ahead=1
NOT_ANCESTOR|origin/consolidation/interv360-current-app-audit|8099a96|2026-07-03 13:30:01 +0200|ahead=1
NOT_ANCESTOR|origin/consolidation/sfia-documentation-review|45e4498|2026-07-03 14:50:43 +0200|ahead=1
NOT_ANCESTOR|origin/consolidation/sfia-global-capitalization|b11b318|2026-07-03 14:20:55 +0200|ahead=2
NOT_ANCESTOR|origin/cycle/chantiers360-v2-design-figma|5fa9fcb|2026-07-06 02:05:08 +0200|ahead=4
NOT_ANCESTOR|origin/cycle/chantiers360-v2-detailed-framing|4546d88|2026-07-05 15:20:37 +0200|ahead=1
NOT_ANCESTOR|origin/cycle/chantiers360-v2-figma-fidelity-spike|6d44882|2026-07-06 07:58:44 +0200|ahead=2
NOT_ANCESTOR|origin/cycle/chantiers360-v2-functional-architecture|934be03|2026-07-05 16:13:33 +0200|ahead=2
NOT_ANCESTOR|origin/cycle/chantiers360-v2-light-architecture|55b2f0c|2026-07-06 07:14:58 +0200|ahead=3
NOT_ANCESTOR|origin/cycle/chantiers360-v2-mvp-backlog|9babc8c|2026-07-05 18:49:16 +0200|ahead=2
NOT_ANCESTOR|origin/cycle/chantiers360-v2-ux-ui|be9b2f3|2026-07-05 17:40:06 +0200|ahead=1
NOT_ANCESTOR|origin/decision/chantiers360-v2-architecture-arbitrages|9d425dd|2026-07-06 07:35:24 +0200|ahead=3
ABSORBED_TIP|origin/delivery/chantiers360-r-qa-04-dashboard-real-data|824883c|2026-07-09 21:04:45 +0200
NOT_ANCESTOR|origin/delivery/chantiers360-v2-inc-01|e65a4d2|2026-07-06 10:37:37 +0200|ahead=5
NOT_ANCESTOR|origin/delivery/chantiers360-v2-inc-02|c4cc4dc|2026-07-06 17:21:29 +0200|ahead=2
NOT_ANCESTOR|origin/delivery/chantiers360-v2-inc-03|6583ddf|2026-07-06 18:43:22 +0200|ahead=2
NOT_ANCESTOR|origin/delivery/chantiers360-v2-inc-04|406a883|2026-07-06 19:53:25 +0200|ahead=2
NOT_ANCESTOR|origin/delivery/chantiers360-v2-inc-05|bcc6d37|2026-07-07 06:01:46 +0200|ahead=3
ABSORBED_TIP|origin/delivery/interv360-api-demo-hardening|7ef233a|2026-07-01 22:23:00 +0200
ABSORBED_TIP|origin/delivery/interv360-api-product-hardening|0418305|2026-07-02 19:42:12 +0200
ABSORBED_TIP|origin/delivery/interv360-api-product-validation|69a33ed|2026-07-01 23:11:19 +0200
ABSORBED_TIP|origin/delivery/interv360-audit-trail|87662a2|2026-07-02 16:33:13 +0200
ABSORBED_TIP|origin/delivery/interv360-auth-user-switcher|be10f7a|2026-07-02 09:53:32 +0200
ABSORBED_TIP|origin/delivery/interv360-backend-minimal-prototype|a310850|2026-07-01 18:54:40 +0200
ABSORBED_TIP|origin/delivery/interv360-backend-persistence|f39adb8|2026-07-01 22:03:04 +0200
ABSORBED_TIP|origin/delivery/interv360-backend-users-session|1c0311d|2026-07-02 13:58:27 +0200
ABSORBED_TIP|origin/delivery/interv360-batch-01-demo-credibility|12efbb6|2026-07-01 10:56:00 +0200
ABSORBED_TIP|origin/delivery/interv360-batch-02-demo-control-scenario|a6eb49d|2026-07-01 12:36:06 +0200
ABSORBED_TIP|origin/delivery/interv360-batch-03-demo-readiness-package|4d6e465|2026-07-01 13:16:59 +0200
ABSORBED_TIP|origin/delivery/interv360-batch-04-demo-presentation-package|bfa5e28|2026-07-01 16:24:21 +0200
ABSORBED_TIP|origin/delivery/interv360-connected-ux-productization|6f8c72b|2026-07-01 23:37:15 +0200
ABSORBED_TIP|origin/delivery/interv360-demo-feedback-review|5febd0f|2026-07-01 19:41:43 +0200
ABSORBED_TIP|origin/delivery/interv360-demo-mvp-closure|091eebb|2026-07-01 21:21:19 +0200
ABSORBED_TIP|origin/delivery/interv360-demo-polish|d8394b7|2026-07-01 20:47:41 +0200
ABSORBED_TIP|origin/delivery/interv360-demo-presentation-feedback|5481b74|2026-07-01 20:24:07 +0200
ABSORBED_TIP|origin/delivery/interv360-demo-presentation-review|4a6c7b7|2026-07-01 19:51:48 +0200
ABSORBED_TIP|origin/delivery/interv360-end-to-end-demo-hardening|ed2c0f4|2026-07-01 19:31:07 +0200
ABSORBED_TIP|origin/delivery/interv360-frontend-api-connection|a23cefc|2026-07-01 19:18:28 +0200
ABSORBED_TIP|origin/delivery/interv360-inc-01-push-and-pr|06751ad|2026-07-01 08:59:39 +0200
ABSORBED_TIP|origin/delivery/interv360-inc-02-pr-preparation|82c7823|2026-07-01 09:59:52 +0200
ABSORBED_TIP|origin/delivery/interv360-inc-03-pr-preparation|69325d0|2026-07-01 10:21:48 +0200
ABSORBED_TIP|origin/delivery/interv360-inc-04-list-filtering-local-summary|d306054|2026-07-01 10:41:29 +0200
ABSORBED_TIP|origin/delivery/interv360-product-demo-consolidation|1b44bc1|2026-07-01 23:52:00 +0200
ABSORBED_TIP|origin/delivery/interv360-product-industrialization|3bba55b|2026-07-02 21:30:57 +0200
ABSORBED_TIP|origin/delivery/interv360-product-ux-finalization|e106d91|2026-07-02 20:48:03 +0200
ABSORBED_TIP|origin/delivery/interv360-request-model-finalization|b3bd01f|2026-07-02 18:54:52 +0200
ABSORBED_TIP|origin/delivery/interv360-request-model-productization|6dded20|2026-07-01 22:49:06 +0200
ABSORBED_TIP|origin/delivery/interv360-role-simulation|1547ff5|2026-07-02 00:29:44 +0200
ABSORBED_TIP|origin/delivery/interv360-workflow-light-extension|5cd2b4e|2026-07-02 07:40:27 +0200
ABSORBED_TIP|origin/delivery/interv360-workflow-requalification|a830842|2026-07-02 09:02:13 +0200
NOT_ANCESTOR|origin/delivery/sfia-studio-control-tower-fast-track|bb3c9e2|2026-07-22 23:00:53 +0200|ahead=6
NOT_ANCESTOR|origin/delivery/sfia-studio-ops1-i3-action-gate|3607a3a|2026-07-21 14:13:23 +0200|ahead=1
NOT_ANCESTOR|origin/delivery/sfia-studio-poc-increment-a|89cb756|2026-07-19 23:52:50 +0200|ahead=1
NOT_ANCESTOR|origin/delivery/sfia-studio-poc-increment-b|8316f26|2026-07-20 06:17:45 +0200|ahead=1
NOT_ANCESTOR|origin/delivery/sfia-studio-poc-increment-c|96bb808|2026-07-20 07:54:22 +0200|ahead=1
NOT_ANCESTOR|origin/delivery/sfia-studio-poc-increment-d|41b9c46|2026-07-20 08:36:12 +0200|ahead=1
NOT_ANCESTOR|origin/delivery/sfia-studio-shared-technical-platform|08c282a|2026-07-23 07:12:24 +0200|ahead=8
ABSORBED_TIP|origin/delivery/sfia-v2.6-lot-e1-link-fixes|7885903|2026-07-12 20:43:19 +0200
ABSORBED_TIP|origin/delivery/sfia-v2.6-lot-h|694fedc|2026-07-13 10:44:03 +0200
NOT_ANCESTOR|origin/design/sfia-studio-ops1-scenario|d248b9d|2026-07-20 18:43:23 +0200|ahead=1
NOT_ANCESTOR|origin/design/sfia-studio-poc-vertical-slice|58fb275|2026-07-19 22:39:25 +0200|ahead=3
ABSORBED_TIP|origin/docs/chantiers360-close-r-qa-04|662f1c3|2026-07-09 21:15:01 +0200
NOT_ANCESTOR|origin/docs/chantiers360-v0-vs-sfia-v2-comparison|158bdf0|2026-07-07 10:06:32 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v0-vs-v2-post-merge|2e68166|2026-07-07 10:13:01 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-design-coverage-post-merge|bbd54bf|2026-07-07 07:28:27 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-final-pilot-rex|438b3bb|2026-07-07 10:51:32 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-01-closure|09204fc|2026-07-06 10:59:42 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-01-qa-g4|94f71f2|2026-07-06 10:46:52 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-02-closure|e461c6f|2026-07-06 18:08:44 +0200|ahead=3
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-02-qa-g4|ec073f6|2026-07-06 17:30:30 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-03-closure|1d795fc|2026-07-06 19:13:19 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-03-qa-g4|f136c33|2026-07-06 18:52:32 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-04-closure|eb174d0|2026-07-06 21:40:52 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-04-qa-g4|96bd25e|2026-07-06 21:15:08 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-05-closure|9987df6|2026-07-07 06:33:02 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-inc-05-qa-g4|d30ca72|2026-07-07 06:14:56 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-post-capitalization-alignment|314794a|2026-07-06 11:33:45 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-post-spike-alignment|fe93090|2026-07-06 08:11:01 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-readme-post-closure|d672317|2026-07-06 18:13:37 +0200|ahead=1
NOT_ANCESTOR|origin/docs/chantiers360-v2-technical-architecture-post-merge|9e7bcb3|2026-07-07 07:52:39 +0200|ahead=1
ABSORBED_TIP|origin/docs/close-lot-d1-status|8815f0f|2026-07-12 18:16:56 +0200
ABSORBED_TIP|origin/docs/close-lot-d2-status|c0fc4b2|2026-07-12 18:41:00 +0200
ABSORBED_TIP|origin/docs/close-lot-d3-status|6cdda92|2026-07-12 19:30:58 +0200
ABSORBED_TIP|origin/docs/fix-lot-d-plan-status|af5d9a2|2026-07-12 17:50:55 +0200
NOT_ANCESTOR|origin/docs/sfia-studio-pr226-post-merge-sync|ed33044|2026-07-19 20:59:50 +0200|ahead=1
NOT_ANCESTOR|origin/docs/sfia-studio-recover-unmerged-project-docs|1a2fa31|2026-07-23 07:38:35 +0200|ahead=4
ABSORBED_TIP|origin/docs/sfia-v2.6-lot-e-closure|0ae4bb3|2026-07-12 21:07:05 +0200
NOT_ANCESTOR|origin/docs/sfia-v231-final-status|2bddced|2026-07-07 08:35:47 +0200|ahead=1
NOT_ANCESTOR|origin/docs/sfia-v2x-versioning-post-merge|c0a4a74|2026-07-07 08:24:28 +0200|ahead=1
ABSORBED_TIP|origin/documentation/sfia-discovery-act-02-editorial|153c50b|2026-07-14 20:45:13 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-act-03-novabuild-editorial|6fcc76a|2026-07-14 23:20:58 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-acts-04-05-editorial|7e65429|2026-07-15 10:47:17 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-acts-06-07-editorial|a25cb1c|2026-07-15 17:31:29 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-legacy-migration-plan|4021502|2026-07-16 07:59:27 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-pd-08-qa|f934a3c|2026-07-16 12:07:08 +0200
ABSORBED_TIP|origin/documentation/sfia-discovery-pd-09-capitalization|28966a8|2026-07-16 12:32:43 +0200
ABSORBED_TIP|origin/evol/chantiers360-post-mvp-framing|8b40a0b|2026-07-09 14:19:04 +0200
NOT_ANCESTOR|origin/fix/chantiers360-v2-rqa02-status-alignment|1ef4d67|2026-07-06 12:39:55 +0200|ahead=1
ABSORBED_TIP|origin/fix/remove-controlled-delivery-broken-link|b8eb945|2026-07-12 11:49:05 +0200
NOT_ANCESTOR|origin/method/chantiers360-v2-inc-01-capitalization|5b5758f|2026-07-06 11:12:28 +0200|ahead=1
NOT_ANCESTOR|origin/method/chantiers360-v2-mvp-capitalization|adcda83|2026-07-07 07:02:57 +0200|ahead=2
ABSORBED_TIP|origin/method/delivery-acceleration-level-3-rex|008dbff|2026-07-01 11:36:20 +0200
NOT_ANCESTOR|origin/method/interv360-final-capitalization|8763417|2026-07-03 13:04:12 +0200|ahead=1
ABSORBED_TIP|origin/method/interv360-mvp-delivery-capitalization|2ef34cb|2026-07-02 23:00:23 +0200
ABSORBED_TIP|origin/method/sfia-3-exploration-closure|f2a822e|2026-07-08 12:37:02 +0200
NOT_ANCESTOR|origin/method/sfia-consolidation-roadmap|10cb8c0|2026-07-03 13:16:26 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-automation-levels|80aac9c|2026-07-05 09:26:19 +0200|ahead=2
NOT_ANCESTOR|origin/method/sfia-v2-automation-vision|1398a46|2026-07-05 08:30:21 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-delivery-qa-test-standard|2645df2|2026-07-06 09:57:15 +0200|ahead=2
NOT_ANCESTOR|origin/method/sfia-v2-design-coverage-rules|bc697d8|2026-07-07 07:16:12 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-figma-design-cycle|1bb55f0|2026-07-05 19:09:27 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-figma-fidelity-gate-standard|672d72b|2026-07-06 08:20:51 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-pilot-selection-decision|7282317|2026-07-05 10:49:12 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-pilot-selection-scoring|22d8dcf|2026-07-05 14:10:43 +0200|ahead=2
NOT_ANCESTOR|origin/method/sfia-v2-project-bootstrap-standard|cbba66b|2026-07-05 10:12:18 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-prompt-routing-alignment|1bc9f3a|2026-07-06 11:58:19 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2-technical-architecture-decision-standard|d8f4377|2026-07-07 07:42:37 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2.4-consolidation-operating-efficiency|d96dfce|2026-07-07 11:18:06 +0200|ahead=1
NOT_ANCESTOR|origin/method/sfia-v2.4-reference-documentation-alignment|e79a440|2026-07-07 12:11:16 +0200|ahead=3
NOT_ANCESTOR|origin/method/sfia-v2.4.1-documentation-status-promotion|ecaf416|2026-07-08 03:15:58 +0200|ahead=2
ABSORBED_TIP|origin/method/sfia-v2.5-cycle-1-mvp|4e3947f|2026-07-08 18:22:56 +0200
ABSORBED_TIP|origin/method/sfia-v2.5-project-plan|7751855|2026-07-08 16:13:07 +0200
ABSORBED_TIP|origin/method/sfia-v2.5-review-pack-reset|a5497ef|2026-07-09 13:58:28 +0200
ABSORBED_TIP|origin/method/sfia-v2.6-repository-standard-decisions|56ce850|2026-07-11 14:21:45 +0200
NOT_ANCESTOR|origin/method/sfia-v2x-method-versioning-standard|a76c3f8|2026-07-07 08:13:44 +0200|ahead=1
ABSORBED_TIP|origin/migration/sfia-v2.6-lot-a-core|d630c6c|2026-07-12 16:54:06 +0200
ABSORBED_TIP|origin/migration/sfia-v2.6-lot-d1-naming|930d5a2|2026-07-12 18:06:16 +0200
ABSORBED_TIP|origin/migration/sfia-v2.6-lot-d2-naming|f56c768|2026-07-12 18:27:53 +0200
ABSORBED_TIP|origin/migration/sfia-v2.6-lot-d3-naming|093c91a|2026-07-12 18:53:35 +0200
NOT_ANCESTOR|origin/notion/pause-notion-publication-track|c79992b|2026-07-04 21:18:33 +0200|ahead=1
ABSORBED_TIP|origin/notion/provisioning-engine-design|38b91eb|2026-07-04 20:30:43 +0200
ABSORBED_TIP|origin/notion/sfia-live-export-audit|a7b22ec|2026-07-04 14:22:03 +0200
ABSORBED_TIP|origin/product/interv360-mvp-final-roadmap|14cadbe|2026-07-02 10:14:54 +0200
ABSORBED_TIP|origin/project/campus360-opportunity-framing|4275a60|2026-07-17 13:15:24 +0200
NOT_ANCESTOR|origin/project/chantiers360-v2-bootstrap|774beed|2026-07-05 15:13:53 +0200|ahead=2
ABSORBED_TIP|origin/project/sfia-studio-functional-architecture|4f4e7cf|2026-07-18 22:18:29 +0200
ABSORBED_TIP|origin/project/sfia-studio-functional-design|cf64fdd|2026-07-18 18:20:05 +0200
NOT_ANCESTOR|origin/project/sfia-studio-poc-orchestration-framing|3b162ec|2026-07-19 12:47:55 +0200|ahead=1
ABSORBED_TIP|origin/project/sfia-studio-pre-framing|18c6427|2026-07-18 17:20:52 +0200
ABSORBED_TIP|origin/project/sfia-studio-ux-ui-reconciliation|7bdabdc|2026-07-19 01:06:23 +0200
NOT_ANCESTOR|origin/prompts/create-templates-context-pack|b6d9a88|2026-07-04 22:13:11 +0200|ahead=1
ABSORBED_TIP|origin/qualification/sfia-v2.6-lot-d-naming|3a6d1e7|2026-07-12 17:37:59 +0200
ABSORBED_TIP|origin/qualification/sfia-v2.6-lot-e-global-controls|b87413b|2026-07-12 20:13:38 +0200
ABSORBED_TIP|origin/qualification/sfia-v2.6-lot-f-superseded|2f89afd|2026-07-12 22:04:10 +0200
ABSORBED_TIP|origin/qualification/sfia-v2.6-lot-f2-f005|7d87331|2026-07-13 05:39:38 +0200
ABSORBED_TIP|origin/release/interv360-mvp-release-readiness|dfc6430|2026-07-02 22:43:41 +0200
NOT_ANCESTOR|origin/sfia/review-handoff|bb226b1|2026-07-23 07:22:13 +0200|ahead=369
NOT_ANCESTOR|origin/spike/sfia-studio-openai-gpt-adapter|056c97f|2026-07-19 20:48:07 +0200|ahead=2
ABSORBED_TIP|origin/tooling/penpot-mcp-self-host-feedback|16fe9c3|2026-06-28 21:59:56 +0200
NOT_ANCESTOR|origin/tooling/review-handoff-canonical-publisher|14d58fe|2026-07-21 13:32:09 +0200|ahead=1
ABSORBED_TIP|origin/validation/sfia-v2.6-lot-e2-validation|477fe55|2026-07-12 20:58:32 +0200
ABSORBED_TIP|origin/validation/sfia-v2.6-lot-f1a-f1b|15185f3|2026-07-13 05:03:15 +0200

```

## Décisions Morris appliquées

- Consolidation documentaire bornée uniquement
- Statuts candidates 75–80 préservés
- Notes historiques non décisionnelles sur 79/80 (post-#255)
- Pas de merge PR ; pas de suppression de branches ; pas de force-push
- Pas de modification method/prompts/app/lib
- Live / B′ / cleanup OPS1 non ouverts

## Validations

| Contrôle | Résultat |
|----------|----------|
| `git diff --check` | PASS |
| Chemins protégés (method/prompts/docs/scripts/.github/.sfia/.cursor/app/lib/*) | ABSENTS |
| Secrets / .env / sqlite | ABSENTS |
| Code produit `app/**` | ABSENT |
| Numéro doc 83 | Premier libre après 82 sur origin/main |
| Liens README 75–83 | Présents |
| Draft PR | #256 ouverte |

## Risques / réserves / dette

- Copies framing WT restent untracked localement (dette locale hors PR)
- Trailing whitespace strip vs framing (diff whitespace-only sur 75/77/78)
- Branches historiques non nettoyées (hors autorisation)
- Doc 82 texte interne peut encore dire « PR opened » — non modifié dans ce cycle (hors stricte nécessité)

## Actions non exécutées

- Merge PR #256
- Suppression branches
- Force-push / reset / stash
- Live Product Validation
- Option B′
- Cleanup OPS1
- Modification method/prompts

## Rollback

Fermer draft PR #256 ou `git revert` des commits `42190d4..1a2fa31` sur la branche.

## Diff README (complet)

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

## Contenu complet des documents créés / restaurés

### `projects/sfia-studio/75-next-product-increment-framing.md`

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

### `projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md`

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

### `projects/sfia-studio/77-live-product-validation-framing-and-readiness.md`

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

### `projects/sfia-studio/78-live-product-validation-execution-decision-pack.md`

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

### `projects/sfia-studio/79-shared-technical-platform-architecture.md`

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

### `projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md`

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

### `projects/sfia-studio/83-unmerged-docs-consolidation-pr-readiness.md`

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
