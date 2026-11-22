# SFIA Review Pack FULL — E08 Documentary Consolidation + PR Readiness

## 1. Date / heure / mandat

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 13:36:39 UTC+01:00 |
| UTC | 2026-11-22 12:36:39 UTC |
| Jalon | R5 / Ensemble 08 |
| Type cycle | 13 — PR readiness + consolidation documentaire |
| Profil | Critical · EVOL · NO RELEASE · STABLE NOT AVAILABLE |
| Review Pack | FULL |
| Handoff | required / publish-in-cycle (L3) |
| Push projet / PR / merge | **NONE** ce cycle |

## 2. Verdict

**READY FOR PR WITH RESERVES — MORRIS GATE REQUIRED**

Justifications :
- Candidat code/tests/runtime recetté cohérent (`10128bdb` / `2uHrYBsQ`) et **inchangé** après consolidation documentaire.
- PV + contrats consolidés localement sur la branche produit ; liens et réserves explicites.
- Addenda structurants ChatGPT 22/11/2026 : **aucune validation Morris D2 observée** → non publiés comme normatifs (propositions / gate).
- Sortie Git (push + création PR) **non autorisée** tant que Morris ne l'a pas explicitement GO.

## 3. Git Truth initial / final

| Champ | Initial (pré-check mandat) | Final (après consolidation) |
| --- | --- | --- |
| Branche | `feat/next-ensemble08-git-publications-nora` | `feat/next-ensemble08-git-publications-nora` |
| HEAD | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` | `e29d70986abc52cf12997cebf07236043214d13f` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` | `1a635c609c7323ef047cf68b7df399ce42bd4d13` |
| `web/` tree | `77c89ed84546b3bfb0356164416c04eac26ed229` | `77c89ed84546b3bfb0356164416c04eac26ed229` (**identique**) |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Ahead of main | 22 | 23 |
| Dirty hors pack | — | `.tmp-sfia-review/*` only |
| Auto merge/rebase | **NONE** | **NONE** |

```
## feat/next-ensemble08-git-publications-nora...origin/main [ahead 23]
 M .tmp-sfia-review/chatgpt-review.md
```

### Remotes / worktrees pertinents

- `origin` → https://github.com/mcleland147/sfia-workspace.git
- RECETTE WT : `…/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb` @ `10128bdb` (detached)
- Preview WT préservé : `…/preview-build-98118de0`
- Handoff WT : `…/sfia-review-handoff-m5a-gi-20261023` @ `sfia/review-handoff`

### Branches documentaires (intactes)

| Branche | HEAD observé | Rôle |
| --- | --- | --- |
| `docs/next-ensemble08-contrat-fonctionnel-20261121` | `46fa79612cc38292dbf898c3a9cb6509b167d1f4` | Contrats F1/F2 |
| `docs/next-git-recette-20261122` | `dea4f260ec96272971200e8b7cb0e44be08bc63e` | PV F3 |

## 4. ENV-01 / RECETTE (inchangé)

| Champ | Valeur |
| --- | --- |
| SOURCE utilisateur recetté | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE utilisateur | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| HTTP marker observé | `<!-- 2uHrYBsQUvf6aii40hMpj-->` |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| PostgreSQL | `sfia_next_recette_ml4:5434` |
| Cutover / secrets / schéma | **NONE** ce cycle |

> Le nouveau HEAD produit `e29d7098` est **uniquement documentaire**. Il **ne remplace pas** rétroactivement le SOURCE/BUILD RECETTE.

## 5. Sources Git consultées / décisions

- Gouvernance main : SEF, roadmap, product-naming, environnements-recette, product-versioning, decisions/*
- Méthode : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`, template cycle execution
- Produit/UX : integration-git-gouvernee, ux-ml4, as-built, delivery-history, Figma 11 / 11.17
- Contrats docs branch + PV docs branch (copie exacte puis sections d'exécution)
- Handoffs : DEV corrigé `3b11edd0…` · cutover RECETTE `f30451d2…`
- Décisions D2 addenda ChatGPT 22/11 : **AUCUNE décision Morris D2 trouvée** dans `governance/decisions/` pour autoriser l'intégration normative des addenda

## 6. Liste complète des commits E08 (origin/main..HEAD)

```
e29d70986abc52cf12997cebf07236043214d13f 2026-11-22T13:35:15+01:00 docs(e08): consolidate PV and execution sections for PR readiness
10128bdb6bb1020a0fd8d4976b91879bff26c3b3 2026-11-22T13:03:02+01:00 fix(e08): harden documentary merge mode and reconcile provenance
a087051a569a0bd6eaab935d674ac567ecfa6400 2026-11-22T12:53:53+01:00 feat(e08): govern documentary GitHub REAL merge via Nora
98118de073e9df5f2446592a281060ddb64369fe 2026-11-22T12:17:29+01:00 feat(e08): universal Git preview-unavailable state (Figma 11.17)
a7e67b97693a8f5b02cdeb77d6d73ba35666b63c 2026-11-22T11:34:00+01:00 docs(e08): record RECETTE cutover of WRITE mandate corrective
24a8fa9e7ad6cc2fa961496a915f13cea542d4a8 2026-11-22T11:26:02+01:00 fix(next): honor explicit publication branch in D7 prepare
5d4b5c49aa5fd86f226600e0edc3ee7a2021325a 2026-11-22T10:07:18+01:00 docs(next): record E08 corrective RECETTE cutover
7115e932dad8628af13cd5dcbf1fefc3a227c81e 2026-11-22T09:47:32+01:00 fix(next): restore shared Nora tool budgets and Git compare/status reads
6a2686ea7169b7b46cb6e1810c3b601e2c5cf0e8 2026-11-22T09:32:02+01:00 fix(next): harden Nora Git READ budgets and commit/status tools
8d11bccc34d9f09bdcf930dd0b54c5f2cfe72db0 2026-11-22T08:39:48+01:00 docs(next): record Git capability audit RECETTE cutover
79188f6cf334be5c81f485b8cb1c4f1ae95644dc 2026-11-22T08:30:12+01:00 fix(next): expose Nora PR list/files and REAL read token parity
2a607fb0742b2ec1287b5f396d9c51120a95f415 2026-11-22T08:10:59+01:00 fix(next): expose Nora live PR read and clarify UNKNOWN turn banner
b9df4de5e6d2f3bc151023dae3a207b9d8eb36af 2026-11-22T07:43:33+01:00 docs(next): record Git chain fiabilisation RECETTE cutover
c67a6ba8bde5c4d818a23fe96d2822a22c050121 2026-11-22T07:41:58+01:00 fix(next): restore full publication facts in Nora restitution
8c798493c347df33e17fe3632d46257a51814fc8 2026-11-22T07:12:22+01:00 docs(next): record UAT-GIT-PUB-01 RECETTE cutover SHA TREE BUILD
0b5d6c74b65171efa3ccda55d8478030afac6d9b 2026-11-22T07:08:41+01:00 test(next): align path-policy and Playwright with PUB-01 root paths
e78dae5e3d2a9f3451de209bad186c697387efe4 2026-11-22T07:03:19+01:00 fix(next): resume Nora publication after path clarification
7a609b88aabe57d89715ba8defddd783216a1190 2026-11-22T06:12:40+01:00 docs(next): record E08 finalisation RECETTE cutover SHA TREE BUILD
f1907aad98f75c7d39e4c21ccbd8043ab048ce09 2026-11-22T06:09:55+01:00 feat(next): finalize E08 11.06 G5 and governed REAL WRITE policy
35906960e39eb617d39c76bf991f802ece4865ff 2026-11-22T04:34:36+01:00 docs(next): record E08 POST-UAT freeze SHA TREE BUILD_ID
9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 2026-11-22T04:31:50+01:00 feat(next): finalize E08 git publications and Nora post-UAT
29066442a7fa51b106d9fe45b5c1b05da7f13004 2026-11-21T20:40:39+01:00 docs(next): bind E08 freeze SHA, BUILD_ID and RECETTE cutover prep
98185598de0d3f3b84af862aecea04b9099217ca 2026-11-21T20:38:29+01:00 feat(next): freeze Ensemble 08 Git publications and Nora candidate

```

## 7. Comparaison complète contre origin/main

### 7.1 name-status (intégral)

```
A	projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-a-d9.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-contrats-matrice.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-visuel-figma-11-17-apercu-indisponible.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/env01-recette-preflight.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/11.06-integrations-github-connected.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/11.06-integrations-github-connected.png.sha256
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/finalisation-11.06-g5-matrix.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/manifeste-l0-l1.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png-oracle-exit/figma-11.04-pubs-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png-oracle-exit/figma-11.07-disconnect-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.01-empty-1093-9.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.02-multi-1094-71.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.03-explorer-1094-172.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.04-pubs-1094-310.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.05-enlarge-1094-422.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.06-connected-1095-339.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.07-disconnect-1095-390.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.13-remove-1096-752.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.14-unavailable-1096-841.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.15-compact-1098-791.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.16-mobile-1098-841.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-02-11.06-mapping.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-dom-measures.json
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-1280x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-1680x970-zoom200.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-320x568.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-390x844.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.07-disconnect-confirm-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.07-dom-measures.json
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-integrations-final-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/impl-report-capacite-a.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/impl-report-capacite-b.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-couverture-acceptation-a-b-s.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/proofs/figma-11-17-apercu-indisponible.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/proofs/runtime-dev-preview-markdown-nominal.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/proofs/runtime-dev-preview-unavailable-pdf.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
A	projects/sfia-studio-next/web/public/figma-git-icons/branch.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/chevron.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/expand.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/file.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/folder.svg
A	projects/sfia-studio-next/web/public/icons/git-preview-unavailable.svg
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/tree/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx
A	projects/sfia-studio-next/web/src/components/integrations/GitPreviewUnavailable.tsx
A	projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
M	projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
M	projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-shell.css
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-merge-authority.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
M	projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
A	projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts
A	projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
A	projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
M	projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
M	projects/sfia-studio-next/web/src/domains/execution/types.ts
A	projects/sfia-studio-next/web/src/domains/integrations/git-preview.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts
A	projects/sfia-studio-next/web/src/domains/integrations/publication-projection-service.ts
A	projects/sfia-studio-next/web/src/domains/integrations/publication-projection.ts
M	projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
M	projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/types.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-g5-captures.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-git-preview-unavailable.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-integrations-1106.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
A	projects/sfia-studio-next/web/tests/integration/conversation-merge-security.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/documentary-merge-corrections.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/publication-nora-cloture.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversation-merge-authority.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts
A	projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-directory-listing.test.ts
M	projects/sfia-studio-next/web/tests/unit/git-file-provenance.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-preview.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-read-hardening-corrective.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-read-hardening.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-refs-coverage-s03.test.ts
A	projects/sfia-studio-next/web/tests/unit/github-app-allowed-repos.test.ts
M	projects/sfia-studio-next/web/tests/unit/github-app-auth-real-provider.test.ts
M	projects/sfia-studio-next/web/tests/unit/github-app-config.test.ts
A	projects/sfia-studio-next/web/tests/unit/integrations-panel-1106.test.ts
A	projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-activity-error-banner.test.ts
M	projects/sfia-studio-next/web/tests/unit/path-policy.test.ts
A	projects/sfia-studio-next/web/tests/unit/project-publications-projection.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-branch-mandate.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-clarification-resume.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-effect-view.test.ts
A	projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
M	projects/sfia-studio-next/web/tests/unit/real-github-mutations-gate.test.ts

```

### 7.2 diff --stat

```
 ...tionnel-depots-git-et-conduite-nora-candidat.md |  455 +++++++
 .../construction/delivery-history.md               |  552 ++++++++
 .../PROVENANCE-contrats-e08.md                     |   28 +
 .../ensemble-08-git-et-publications/as-built.md    |  223 ++++
 .../asis-capacite-a-d9.md                          |  195 +++
 .../asis-capacite-b-nora-d6.md                     |  203 +++
 .../asis-contrats-matrice.md                       |  215 ++++
 ...contrat-architecture-et-acceptation-candidat.md |  752 +++++++++++
 ...ntrat-visuel-figma-11-17-apercu-indisponible.md |   56 +
 .../env01-recette-preflight.md                     |  110 ++
 .../11.06-integrations-github-connected.png        |  Bin 0 -> 89374 bytes
 .../11.06-integrations-github-connected.png.sha256 |    1 +
 .../figma-evidence/finalisation-11.06-g5-matrix.md |   40 +
 .../figma-evidence/g5-exit-matrix.md               |   26 +
 .../figma-evidence/manifeste-l0-l1.md              |  131 ++
 .../png-oracle-exit/figma-11.04-pubs-1680x970.png  |  Bin 0 -> 123964 bytes
 .../figma-11.07-disconnect-1680x970.png            |  Bin 0 -> 92069 bytes
 .../figma-evidence/png/11.01-empty-1093-9.png      |  Bin 0 -> 65431 bytes
 .../figma-evidence/png/11.02-multi-1094-71.png     |  Bin 0 -> 86129 bytes
 .../figma-evidence/png/11.03-explorer-1094-172.png |  Bin 0 -> 98082 bytes
 .../figma-evidence/png/11.04-pubs-1094-310.png     |  Bin 0 -> 91882 bytes
 .../figma-evidence/png/11.05-enlarge-1094-422.png  |  Bin 0 -> 85911 bytes
 .../png/11.06-connected-1095-339.png               |  Bin 0 -> 67706 bytes
 .../png/11.07-disconnect-1095-390.png              |  Bin 0 -> 68810 bytes
 .../figma-evidence/png/11.13-remove-1096-752.png   |  Bin 0 -> 70113 bytes
 .../png/11.14-unavailable-1096-841.png             |  Bin 0 -> 70821 bytes
 .../figma-evidence/png/11.15-compact-1098-791.png  |  Bin 0 -> 69849 bytes
 .../figma-evidence/png/11.16-mobile-1098-841.png   |  Bin 0 -> 29609 bytes
 .../figma-evidence/post-uat-01-l0-l2.md            |   33 +
 .../figma-evidence/post-uat-02-11.06-mapping.md    |   47 +
 .../runtime/runtime-11.06-dom-measures.json        |   74 ++
 .../runtime-11.06-integrations-1280x970.png        |  Bin 0 -> 89634 bytes
 ...runtime-11.06-integrations-1680x970-zoom200.png |  Bin 0 -> 141074 bytes
 .../runtime-11.06-integrations-1680x970.png        |  Bin 0 -> 116109 bytes
 .../runtime/runtime-11.06-integrations-320x568.png |  Bin 0 -> 40979 bytes
 .../runtime/runtime-11.06-integrations-390x844.png |  Bin 0 -> 60887 bytes
 .../runtime-11.07-disconnect-confirm-1680x970.png  |  Bin 0 -> 114961 bytes
 .../runtime/runtime-11.07-dom-measures.json        |   13 +
 .../runtime-integrations-final-1680x970.png        |  Bin 0 -> 141660 bytes
 .../impl-report-capacite-a.md                      |   91 ++
 .../impl-report-capacite-b.md                      |   39 +
 .../manifeste-cutover-recette-e07-plus-e08.md      |  514 ++++++++
 .../matrice-capacites-git-chaine-2026-11-22.md     |  173 +++
 .../matrice-couverture-acceptation-a-b-s.md        |  122 ++
 .../proofs/figma-11-17-apercu-indisponible.png     |  Bin 0 -> 69441 bytes
 .../runtime-dev-preview-markdown-nominal.png       |  Bin 0 -> 92386 bytes
 .../proofs/runtime-dev-preview-unavailable-pdf.png |  Bin 0 -> 92622 bytes
 .../recette-acceptation-partielle-2026-11-22.md    |  847 ++++++++++++
 .../web/public/figma-git-icons/branch.svg          |    8 +
 .../web/public/figma-git-icons/chevron.svg         |    5 +
 .../web/public/figma-git-icons/expand.svg          |    5 +
 .../web/public/figma-git-icons/file.svg            |    6 +
 .../web/public/figma-git-icons/folder.svg          |    5 +
 .../web/public/icons/git-preview-unavailable.svg   |    8 +
 .../[projectId]/git/publications/prepare/route.ts  |    2 +
 .../projects/[projectId]/git/publications/route.ts |   16 +
 .../app/api/projects/[projectId]/git/tree/route.ts |   29 +
 .../web/src/app/projects/[projectId]/page.tsx      |   37 +-
 .../web/src/app/settings/integrations/page.tsx     |    2 +-
 .../web/src/components/figma/NoraConversation.tsx  |    5 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   16 +-
 .../web/src/components/figma/tokens.css            |  791 ++++++++++++
 .../components/integrations/GitFileInfoPopover.tsx |  127 ++
 .../integrations/GitPreviewUnavailable.tsx         |   63 +
 .../integrations/GitRepositoriesSurface.tsx        | 1346 ++++++++++++++++++++
 .../components/integrations/IntegrationsPanel.tsx  |  313 +++--
 .../integrations/publication-effect-labels.ts      |    4 +-
 .../web/src/components/shell/StudioShell.tsx       |    7 +-
 .../web/src/components/shell/studio-shell.css      |    6 +-
 .../src/domains/conversation/cognitive-policy.ts   |   53 +-
 .../conversation/conversation-merge-authority.ts   |  852 +++++++++++++
 .../conversation-publication-authority.ts          |  412 ++++++
 .../conversation-publication-mandate-guards.ts     |  246 ++++
 .../conversation/fixture-semantic-qualify.ts       |  154 +++
 .../web/src/domains/conversation/git-read-tools.ts |  533 +++++++-
 .../src/domains/conversation/intent-conduction.ts  |    1 +
 .../src/domains/conversation/mission-continuity.ts |  289 ++++-
 .../web/src/domains/conversation/nora-adapter.ts   |   28 +-
 .../conversation/pilotage-effect-restitution.ts    |    8 +-
 .../conversation/publication-document-target.ts    |  523 ++++++++
 .../conversation/publication-effect-restitution.ts |  248 ++++
 .../conversation/publication-effect-view.ts        |  353 +++++
 .../domains/conversation/semantic-qualification.ts |   80 ++
 .../web/src/domains/conversation/service.ts        |  686 +++++++++-
 .../web/src/domains/execution/effect-service.ts    |  308 ++++-
 .../web/src/domains/execution/fingerprint.ts       |   74 +-
 .../web/src/domains/execution/types.ts             |    5 +
 .../web/src/domains/integrations/git-preview.ts    |  140 ++
 .../src/domains/integrations/github-app-auth.ts    |  706 +++++++++-
 .../src/domains/integrations/github-app-config.ts  |  125 ++
 .../src/domains/integrations/github-provider.ts    |  132 +-
 .../web/src/domains/integrations/path-policy.ts    |   64 +
 .../integrations/publication-projection-service.ts |  158 +++
 .../domains/integrations/publication-projection.ts |  141 ++
 .../domains/integrations/real-github-provider.ts   |  276 +++-
 .../src/domains/integrations/resource-service.ts   |  499 +++++++-
 .../integrations/scripted-github-provider.ts       |  303 ++++-
 .../web/src/domains/integrations/types.ts          |    5 +
 .../web/tests/e2e/ensemble08-g5-captures.spec.ts   |   53 +
 .../e2e/ensemble08-git-preview-unavailable.spec.ts |  260 ++++
 .../web/tests/e2e/ensemble08-git-surface.spec.ts   |  170 +++
 .../tests/e2e/ensemble08-integrations-1106.spec.ts |  171 +++
 .../tests/e2e/ensemble08-nora-publication.spec.ts  |  153 +++
 .../web/tests/e2e/git-collaboration.spec.ts        |    6 +-
 .../conversation-merge-security.pg.test.ts         |  442 +++++++
 .../documentary-merge-corrections.pg.test.ts       |  397 ++++++
 .../tests/integration/git-collaboration.pg.test.ts |    2 +-
 .../mission-continuity-accept01.pg.test.ts         |  214 +++-
 .../publication-nora-cloture.pg.test.ts            |  502 ++++++++
 .../publication-target-post-uat.pg.test.ts         |  233 ++++
 .../web/tests/unit/cognitive-policy.test.ts        |   28 +-
 .../unit/conversation-merge-authority.test.ts      |  126 ++
 .../conversation-publication-authority.test.ts     |  241 ++++
 .../tests/unit/documentary-merge-contract.test.ts  |  319 +++++
 .../web/tests/unit/git-directory-listing.test.ts   |   79 ++
 .../web/tests/unit/git-file-provenance.test.ts     |    8 +-
 .../web/tests/unit/git-preview.test.ts             |  161 +++
 .../unit/git-read-hardening-corrective.test.ts     |  487 +++++++
 .../web/tests/unit/git-read-hardening.test.ts      |   76 ++
 .../web/tests/unit/git-refs-coverage-s03.test.ts   |  234 ++++
 .../tests/unit/github-app-allowed-repos.test.ts    |   40 +
 .../unit/github-app-auth-real-provider.test.ts     |   12 +-
 .../web/tests/unit/github-app-config.test.ts       |   44 +
 .../web/tests/unit/integrations-panel-1106.test.ts |   60 +
 .../web/tests/unit/merge-pull-request-sha.test.ts  |  276 ++++
 .../tests/unit/nora-activity-error-banner.test.ts  |   19 +
 .../web/tests/unit/path-policy.test.ts             |   42 +-
 .../unit/project-publications-projection.test.ts   |   86 ++
 .../tests/unit/publication-branch-mandate.test.ts  |   61 +
 .../unit/publication-clarification-resume.test.ts  |  109 ++
 .../unit/publication-effect-restitution.test.ts    |  437 +++++++
 .../web/tests/unit/publication-effect-view.test.ts |   66 +
 .../web/tests/unit/read-git-pull-request.test.ts   |   78 ++
 .../tests/unit/real-github-mutations-gate.test.ts  |   26 +
 134 files changed, 20438 insertions(+), 423 deletions(-)

```

### 7.3 Conflits d'intégration (merge-tree probe)

- `git merge-tree $(merge-base) origin/main HEAD` : **aucun marqueur CONFLICT / changed in both** observé.
- Dépendance E07 : ensemble déjà sur `main` ; E08 s'ajoute sans migration DB détectée dans le diff produit (pas de nouveau schéma Drizzle/SQL E08 inattendu signalé dans ce cycle).

## 8. Preuve code recetté inchangé

| Contrôle | Résultat |
| --- | --- |
| `HEAD:projects/sfia-studio-next/web` | `77c89ed84546b3bfb0356164416c04eac26ed229` |
| `10128bdb:projects/sfia-studio-next/web` | `77c89ed84546b3bfb0356164416c04eac26ed229` |
| Identité | **PASS — identique** |
| `git diff 10128bdb HEAD -- projects/sfia-studio-next/web` | vide (attendu) |
| Fichiers touchés consolidation | 6 docs only |

### Commit de consolidation

```
commit e29d70986abc52cf12997cebf07236043214d13f
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sun Nov 22 13:35:15 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sun Nov 22 13:35:15 2026 +0100

    docs(e08): consolidate PV and execution sections for PR readiness
    
    Integrate the UAT PV from the docs branch and append dated execution
    sections on E08 contracts without changing the recetted web tree.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...tionnel-depots-git-et-conduite-nora-candidat.md |  24 +
 .../construction/delivery-history.md               |  30 +
 .../PROVENANCE-contrats-e08.md                     |  40 +-
 .../ensemble-08-git-et-publications/as-built.md    |  23 +-
 ...contrat-architecture-et-acceptation-candidat.md |  24 +
 .../recette-acceptation-partielle-2026-11-22.md    | 847 +++++++++++++++++++++
 6 files changed, 975 insertions(+), 13 deletions(-)
```

## 9. Inventaire documentaire consolidé (blobs HEAD)

| Fichier | Blob HEAD |
| --- | --- |
| Contrat fonctionnel | `45ac48fe6f6f4c56ae60f68f1c38d8c83161cf4c` |
| Contrat architecture | `a508615b1ca29ab075a5e8789f66cf8245fb6da9` |
| PV recette | `c399fb99961f934996f924e8d2fa83cfeb92ca54` |
| PROVENANCE | `c0c97d88e9eee106c428b2ef126d4591cc44f24c` |
| as-built | `dc88694c28a6d33b72531fdb7959bfe37c07e202` |
| delivery-history | `45e36cf7d7cc6e25869c5299b0bc9ade1dbdf1dd` |

PV blob source docs branch : `e767edc63c74b547c2f57c832e035794ad576945` — corps §§1–19 préservé ; §20 exécution ajoutée → blob produit `c399fb99…`.

## 10. Diff utile — consolidation documentaire (commit e29d7098)

```diff
diff --git a/projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md b/projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
index f60e86fe..45ac48fe 100644
--- a/projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
+++ b/projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
@@ -429,3 +429,27 @@ Principaux chemins examinés sous `web/src/` :
 **Provenance de l'AS-IS :** `main@fd04888b8dbf8d9393098d82546076e85b812bb1`, non-équivalent à une inspection du runtime local. **Vérité de la cible UX :** Figma page 11 approuvée dans l'échange, à figer par extraction MCP au gate technique.
 
 *Fin — Contrat fonctionnel candidat v0.2.*
+
+---
+
+## 17. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)
+
+| Champ | Valeur |
+| --- | --- |
+| Nature | Constat d'exécution factuel — **ne remplace pas** le contrat candidat historique §§1–16 |
+| Candidat utilisateur recetté | SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` · TREE `be778f1bf461f15acf94bfed6879d43fa6256a0d` · BUILD `2uHrYBsQUvf6aii40hMpj` |
+| RECETTE | `http://127.0.0.1:3200` · service `com.sfia.studio.next.recette.ml4d-ux004` · DB `sfia_next_recette_ml4:5434` |
+| Blob contrat sur branche docs | `f60e86fe997ebc47f2b1b385c956a621c6057fe3` — **identique** au blob produit |
+
+### Constats d'exécution (non normatifs au-delà du code livré)
+
+1. Publication documentaire GitHub REAL : prouvée en UAT Morris (PR #21) avec réserves internes D6/D7/D8 et WRITE-07.
+2. Aperçu Git universel (Figma 11.17) : servi en RECETTE ; scénarios PREVIEW PARTIAL non convertis en PASS.
+3. Fusion documentaire GitHub REAL via Nora : **chemin implémenté et corrigé (C1/C2/C3)** ; tests SCRIPTED/mock PASS ; **MERGE REAL NOT PROVEN** (aucune fusion sandbox exercée).
+4. Addenda structurants ChatGPT (22/11/2026) : **non observés comme validés Morris D2** dans ce cycle — **non intégrés comme texte normatif**. Toute adoption exige GO D2 explicite.
+
+### Réserves à préserver à la sortie Git
+
+PREVIEW partiel · WRITE-07 ACK/retry · traçabilité D6/D7/D8 partielle · MERGE REAL NOT PROVEN · PR #21 unstable (audits) · protections GitHub non entièrement observables · STABLE/RELEASE/ADOPTED **NOT AVAILABLE**.
+
+*Fin section d'exécution §17 — contrat fonctionnel.*
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 9bb696a6..45e36cf7 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,36 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-PR-READINESS-DOC-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 13:34 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — consolidation documentaire + PR readiness (cycle 13) |
+| Type | EVOL · CRITICAL · **NO RELEASE** |
+| Base code recettée | SOURCE `10128bdb` · TREE `be778f1b` · BUILD `2uHrYBsQUvf6aii40hMpj` |
+| Travail | Intégration PV exact depuis `docs/next-git-recette-20261122` · sections d'exécution datées sur contrats · sync as-built / provenance · **aucun changement `web/`** |
+| Addenda ChatGPT | **AWAITING Morris D2** — non intégrés comme normatifs |
+| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
+| Push projet / PR / merge | **NONE** |
+| Verdict cible | `READY FOR PR WITH RESERVES — MORRIS GATE REQUIRED` (D2 addenda + GO push/PR) |
+
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — cutover RECETTE candidat merge documentaire corrigé |
+| Type | EVOL · CRITICAL · **NO RELEASE** |
+| SOURCE | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
+| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
+| BUILD | `2uHrYBsQUvf6aii40hMpj` |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
+| Prior preview | `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` (préservé hors service) |
+| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
+| MERGE REAL | **NOT PROVEN** |
+| Verdict | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-CORRECTED
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
index 34b1e363..c0c97d88 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
@@ -1,12 +1,28 @@
-# Provenance — contrats E08
-
-- Source branch: docs/next-ensemble08-contrat-fonctionnel-20261121
-- Source HEAD: 46fa79612cc38292dbf898c3a9cb6509b167d1f4
-- Copied into delivery worktree without merge/cherry-pick/push
-- Copied at: 2026-11-21T17:02:11Z
-- Functional contract path: projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
-- Architecture contract path: projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
-
-SHA of copied blobs:
-- func: f60e86fe997ebc47f2b1b385c956a621c6057fe3
-- arch: 9fe9a6ce773c0796836be3e51b12d268bbcd8100
+# Provenance — contrats et PV E08
+
+## Contrats (branche docs)
+
+- Source branch: `docs/next-ensemble08-contrat-fonctionnel-20261121`
+- Source HEAD: `46fa79612cc38292dbf898c3a9cb6509b167d1f4`
+- Functional contract: `projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md`
+  - blob: `f60e86fe997ebc47f2b1b385c956a621c6057fe3` (identique produit ↔ docs avant §17 exécution)
+- Architecture contract: `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md`
+  - blob: `9fe9a6ce773c0796836be3e51b12d268bbcd8100` (identique produit ↔ docs avant §17 exécution)
+- First copy into delivery worktree: 2026-11-21T17:02:11Z (sans merge/cherry-pick/push)
+
+## PV de recette (branche docs)
+
+- Source branch: `docs/next-git-recette-20261122`
+- Source HEAD: `dea4f260ec96272971200e8b7cb0e44be08bc63e`
+- Path: `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md`
+- blob source: `e767edc63c74b547c2f57c832e035794ad576945`
+- Intégré sur branche produit E08: 2026-11-22 13:34 Europe/Paris — copie exacte + section d'exécution datée §20 (sans merge d'historique)
+
+## Addenda ChatGPT 22/11/2026
+
+- Statut: **AWAITING Morris D2** — non intégrés comme texte normatif dans ce cycle de consolidation.
+
+## Lien runtime
+
+- Candidat utilisateur recetté (runtime): SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / BUILD `2uHrYBsQUvf6aii40hMpj`
+- Un HEAD produit ultérieur **uniquement documentaire** ne remplace pas rétroactivement ce SOURCE pour le build RECETTE servi.
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 815d1a6e..dc88694c 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -198,5 +198,26 @@
 2. **Reconcile provenance** : attribution COMPLETED seulement si dépôt/PR/headRef/baseRef/source HEAD/`mergeCommitSha` + publication associée concordent ; base SHA cible non exigée post-fusion ; pas de succès inventé.
 3. **D8 headSha** : conserve le HEAD source de publication ; `mergeCommitSha` dans `detailJson` + fait MERGE (pas de substitution silencieuse).
 4. **SCRIPTED** : avance uniquement la branche cible (`baseRef`) — merge vers `release` ne touche pas `main`.
-5. **Preuves** : PG `documentary-merge-corrections` 8/8 · unit contract C3 · suites merge/preview ciblées · `tsc` PASS · RECETTE inchangée.
+5. **Preuves** : PG `documentary-merge-corrections` 8/8 · unit contract C3 · suites merge/preview ciblées · `tsc` PASS · RECETTE inchangée (au moment de la correction DEV).
 6. **MERGE REAL** : toujours **NOT PROVEN**.
+
+### Cutover RECETTE — candidat merge documentaire (2026-11-22)
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE utilisateur | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
+| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
+| BUILD | `2uHrYBsQUvf6aii40hMpj` |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
+| DB | `sfia_next_recette_ml4:5434` |
+| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
+| Verdict cutover | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |
+| MERGE REAL | **NOT PROVEN** (aucune fusion sandbox) |
+
+### Consolidation documentaire PR readiness (2026-11-22)
+
+- PV `recette-acceptation-partielle-2026-11-22.md` intégré depuis `docs/next-git-recette-20261122` (blob source `e767edc6…`) + §20 exécution datée.
+- Contrats fonctionnel / architecture : sections d'exécution §17 datées ; historique §§1–16 **non réécrit**.
+- Addenda ChatGPT structurants 22/11 : **AWAITING Morris D2** — non publiés comme normatifs.
+- Arbre `projects/sfia-studio-next/web` après consolidation documentaire : **identique** à `10128bdb` (`77c89ed84546b3bfb0356164416c04eac26ed229`).
+- Un HEAD produit ultérieur **uniquement documentaire** ne remplace **pas** rétroactivement le SOURCE/BUILD RECETTE ci-dessus.
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
index 9fe9a6ce..a508615b 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
@@ -726,3 +726,27 @@ L'approbation de vision et du présent contrat ne dispense pas des gates de code
 **Méthode de delivery** : SEF v0.2, ENV-01, méthode Figma ↔ Cursor v1.1 sur `main`, SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` **à relire obligatoirement avant prompt**, non utilisés pour générer un prompt dans ce dossier.
 
 *Fin — Contrat d'architecture et d'acceptation candidat E08 v0.1.*
+
+---
+
+## 17. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)
+
+| Champ | Valeur |
+| --- | --- |
+| Nature | Constat d'exécution factuel — **ne remplace pas** le contrat d'architecture candidat §§1–16 |
+| Candidat utilisateur recetté | SOURCE `10128bdb…` / TREE `be778f1b…` / BUILD `2uHrYBsQUvf6aii40hMpj` |
+| Blob architecture sur branche docs | `9fe9a6ce773c0796836be3e51b12d268bbcd8100` — **identique** au blob produit |
+
+### Mise à jour factuelle vs AS-IS initial du contrat
+
+| Capacité | Statut contrat initial | Statut d'exécution (2026-11-22) |
+| --- | --- | --- |
+| Merge REAL provider | NON IMPLÉMENTÉ / hard-blocked | **Implémenté** sous gate `documentary` + D6/D7 ; **NOT PROVEN** par effet GitHub réel |
+| Mode fournisseur figé | Non traité | **C1** fail-closed UNKNOWN/mismatch |
+| Réconciliation merge | Non traitée | **C2** provenance + séparation SOURCE HEAD / mergeCommitSha |
+| SCRIPTED cible | Non traité | **C3** avance uniquement `baseRef` |
+| Construction / acceptation E08 | NOT STARTED | Candidat construit, cutover RECETTE exécuté, UAT Morris partielle |
+
+Addenda ChatGPT 22/11/2026 : **AWAITING Morris D2** — non publiés comme normatifs ici.
+
+*Fin section d'exécution §17 — contrat architecture.*
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
new file mode 100644
index 00000000..c399fb99
--- /dev/null
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
@@ -0,0 +1,847 @@
+# SFIA Studio Next — PV de recette utilisateur
+## Intégrations Git et publication documentaire pilotée par Nora
+
+| Champ | Valeur |
+| --- | --- |
+| Date du constat | 22 novembre 2026 (Europe/Paris) |
+| Produit | SFIA Studio Next — Ensemble 08 / collaboration Git |
+| Nature | **PV de recette utilisateur et plan de scénarios**, document factuel non normatif |
+| Autorité UAT | Morris — observations et acceptations exprimées dans la conversation |
+| Statut global courant (après cutover) | **RECETTE DISPONIBLE — UAT READ 7 PASS INTER-BUILDS — WRITE REAL RETEST BRANCHE EXPLICITE PASS (PR #21) AVEC RÉSERVES INTERNES — E08 NON ADOPTÉ** ; §§15–17 = historique et protocole, §18 = dernier point de reprise |
+| Lane | RECETTE locale `http://127.0.0.1:3200` |
+| SOURCE_SHA actuellement servi (rapport Cursor L3) | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
+| TREE actuellement servi (rapport Cursor L3) | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
+| BUILD_ID actuellement servi (rapport Cursor L3) | `qCQGWLYYGb0ZCA4BLfzBi` |
+| Base Git distante lors de la rédaction | `origin/main@a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
+| Branche d'édition du PV | `docs/next-git-recette-20261122` — documentaire, hors runtime et hors `main` |
+| Portée | PV historique, scénarios de recette, état actuel du cutover, preuves et passation pour nouveau chat |
+| Ne vaut pas | MERGED, STABLE, RELEASE, ADOPTED ni preuve exhaustive des tentatives internes D6/D7 ou d'idempotence après perte d'ACK |
+
+> **Règle de lecture.** « Accepté Morris » signifie que Morris a confirmé l'usage ou la conformité dans cette UAT. Ce statut n'invente pas un test automatisé, une preuve d'effet GitHub distant ni un niveau `BEHAVIOR PROVEN` non fourni. Les points non mentionnés comme testés restent non vérifiés.
+
+> **Lecture chronologique.** Les §§1–7 décrivent le premier incident (publication bloquée), aujourd'hui corrigé ; les §§8–10 les défauts initiaux, les §§11–14 le point de reprise historique au build 79188f6c, le §15 la première UAT READ (5 PASS / 2 PARTIAL) sur ce build. **Le §16 consigne les retests READ 03/04 sur 7115e932 ; le §17 est le protocole WRITE historique, et le §18 documente la campagne WRITE et le cutover 24a8fa9e ainsi que le retest PR #21.** Ne pas reconduire automatiquement les preuves d'un build à l'autre.
+
+## 1. Résumé d'acceptation
+
+**Accepté par Morris :**
+- L'écran **Intégrations 11.06** : rendu visuel, thème, structure, libellés et actions ; « très bien », aucune correction UX supplémentaire demandée.
+- Les opérations usuelles autour des dépôts, que Morris confirme fonctionnelles : ajout et rattachement d'un dépôt au projet, visualisation d'un dépôt, navigation dans son contenu, consultation d'un fichier et suppression d'une branche. Ces déclarations valent validation UAT de ces usages, sans nouvelle exécution destructrice demandée.
+- La connexion GitHub en lecture et l'affichage du dépôt accessible, observés pendant les parcours.
+- Les corrections de géométrie Figma 11.06 (G5) : rapport Cursor PASS ; acceptation visuelle Morris distincte.
+
+**Non accepté / bloquant :**
+- Le parcours **depuis la conversation avec Nora** pour publier un document Studio sur GitHub, créer la branche et le commit distant puis restituer le résultat.
+- À ce stade, les parcours de PR, push/publication et merge pilotés depuis Nora ne disposent pas d'une preuve de bout en bout et ne peuvent pas être acceptés.
+
+**Décision de portée pour la suite :** ne pas rouvrir l'UX Intégrations ni les opérations de consultation/rattachement déjà acceptées en l'absence de régression. Concentrer le diagnostic et la correction sur le chaînage Nora → Studio → GitHub → retour Nora, dans **un macro-lot intégré**.
+
+## 2. Matrice UAT : scénarios déjà acceptés
+
+| ID | Parcours / résultat utilisateur | Statut | Nature de preuve / réserve |
+| --- | --- | --- | --- |
+| UX-01 | Écran Intégrations 11.06 — rendu, thème, panneaux, rail, libellés et boutons | **ACCEPTÉ MORRIS** | Retour utilisateur explicite sur capture RECETTE ; G5/F2 PASS rapporté par Cursor sur DEV |
+| GIT-01 | Accéder aux intégrations et visualiser la connexion GitHub | **ACCEPTÉ MORRIS** | Usage observé sur capture ; détail technique du provider rapporté séparément |
+| GIT-02 | Ajouter / rattacher un dépôt au projet | **ACCEPTÉ MORRIS** | Confirmation utilisateur de fonctionnement ; ne pas demander de nouveau test artificiel |
+| GIT-03 | Visualiser un dépôt et son arborescence | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
+| GIT-04 | Sélectionner et consulter un fichier du dépôt | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
+| GIT-05 | Supprimer une branche depuis le parcours Git prévu | **ACCEPTÉ MORRIS (DÉCLARATIF)** | Confirmation utilisateur ; effets distants/réversibilité non ré-audités dans ce PV ; ne pas rejouer une suppression |
+| GIT-06 | Parcourir le dépôt avec les droits réellement autorisés au compte | **ACCEPTÉ SUR PARCOURS OBSERVÉ** | Dépôt `mcleland147/chantiers360` affiché ; couverture multi-dépôts non revendiquée |
+| GIT-07 | GitHub REAL WRITE activé en RECETTE | **CONFIGURATION RAPPORTÉE, PAS PREUVE DE PUBLICATION** | `STUDIO_GITHUB_PROVIDER=real`, `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`, `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360` selon contrôles Cursor |
+
+Hors confirmation utilisateur : déconnexion OAuth, plusieurs dépôts simultanés, tests négatifs de sécurité, autres variantes Figma, résistance aux erreurs. Ces scénarios ne sont pas des défauts constatés, seulement des périmètres de non-régression proportionnée.
+
+## 3. Incident bloquant : publication conversationnelle
+
+**Référence :** `UAT-GIT-PUB-01` — priorité P0 pour l'acceptation fonctionnelle E08.
+
+**Projet de l'UAT :** CampusFlow.
+
+**Document D4 visé :** « Références externes — Enseignements de Chantiers360 », **révision 2, contenu inchangé**.
+
+**Dépôt cible explicitement retenu :** `mcleland147/chantiers360`.
+
+**Cible demandée :** racine du dépôt, sur une **nouvelle branche**. Nora a proposé `references-externes-enseignements-chantiers360.md` comme nom de fichier, et indiqué que le nom de branche pouvait être généré. La cible exacte doit être inspectée et gouvernée avant effet, sans ajouter une demande métier inutile.
+
+### Parcours réellement observé
+
+1. Morris demande de publier le document sur une nouvelle branche Git.
+2. Nora indique d'abord une indisponibilité de WRITE (avant réactivation de la configuration).
+3. Après activation technique du WRITE, Morris réitère sa demande.
+4. Nora répond : « Aucune publication n'a été lancée. Précision nécessaire : Chemin de publication Git manquant. »
+5. Morris précise : « tu peux le mettre à la racine du dépôt chantiers360 ».
+6. Nora reconnaît ensuite le document, le dépôt, la racine et le principe d'une nouvelle branche, et propose un nom de fichier.
+7. Morris répond notamment « ok go ».
+8. Nora termine : « Aucune publication n'a été tentée pour cette demande. Motif : Intention de publication reconnue — aucun effet Studio n'a été lancé. »
+
+**Résultat observé : FAIL UAT.** La conversation reconnaît l'intention mais n'aboutit pas au lancement de l'effet. Aucun SHA de branche/commit, lien de fichier ou fait D8 de publication n'est présenté. **Le point de rupture exact n'est pas prouvé par la capture** : il reste à localiser entre contexte, qualification sémantique D3, préparation du plan D7, HumanDecision D6, admission, dispatch D9, persistance/reprise et restitution.
+
+**Important :** ne pas transformer le texte de Nora « aucun effet » en audit indépendant du dépôt distant. Avant tout retry mutatif, inspecter les tentatives locales et les faits Git réels pour écarter un effet antérieur non restitué.
+
+## 4. Scénarios de recette à démontrer pour fermer le défaut
+
+| ID | Priorité | Scénario | Résultat et preuve attendus |
+| --- | --- | --- | --- |
+| PUB-01 | **P0** | Depuis Travail, demander librement la publication du document existant, révision 2 inchangée, sur une nouvelle branche du dépôt déjà sélectionné | D3 conserve document/révision/dépôt ; D7 produit un plan précis et D6 reçoit l'acte utilisateur ; aucune question redondante |
+| PUB-02 | **P0** | Fournir successivement « à la racine », puis « ok go » dans la **même conversation** | Le contexte utile persiste ; si l'enveloppe autorise le plan exact, déclenchement D7 ; sinon une clarification précise, jamais « intention reconnue sans effet » terminal |
+| PUB-03 | **P0** | Vérifier `documentary` et droits du dépôt `chantiers360` au moment de la tentative | Vérification serveur READ/WRITE, lien projet, identité et mandat D6 ; aucune désactivation silencieuse ni autorité déduite du LLM |
+| PUB-04 | **P0** | Publier vers une branche documentaire nouvelle avec chemin et contenu D4 exacts | Branche distante réelle, commit GitHub avec SHA et fichier à contenu/empreinte corrélés à D4 ; les effets sont vérifiés par GitHub et D8 |
+| PUB-05 | **P0** | Retour de l'opération dans le même fil Nora | Une seule réponse terminale fidèle : succès vérifié + liens/ref/SHA, échec exact ou état incertain ; ne pas annoncer succès avant fait Git |
+| PUB-06 | P1 | Demander explicitement branche + commit + ouverture de PR | PR réelle si le mandat couvre la PR ; numéro, base/head et URL vérifiés ; aucune PR implicite si la demande ne la couvre pas |
+| PUB-07 | P1 | Demander explicitement le merge d'une PR documentaire éligible | Mandat D6 distinct, HEAD/base/protections vérifiés, merge réel seulement s'il est autorisé ; preuve GitHub/D8 ; aucun merge implicite |
+| PUB-08 | P1 | Répéter la même demande, retry HTTP, timeout ou ACK perdu | Pas de deuxième branche/commit/PR/merge injustifié ; observation distante avant replay ; `UNKNOWN` tant que non réconcilié |
+| PUB-09 | P1 | Quitter puis reprendre la conversation après plan/tentative | Contexte et références de mission durables, reprise correcte sans nouvelle mutation, restitution cohérente |
+| PUB-10 | P1 | Demande ambiguë (plusieurs dépôts, version ou chemin indéterminable) | Une clarification ciblée avant effet ; pas de blocage générique ni ciblage arbitraire |
+| PUB-11 | P1 | Refus GitHub (droits, branche protégée, conflit, révocation) | Refus effectif, sans mutation, expliqué par Nora ; protections conservées |
+| PUB-12 | P1 | Demande négative/hypothétique (« ne publie pas ») ou texte Git hostile | Zéro tentative et zéro mandat D6 ; pas de moteur à mots-clés concurrent |
+| PUB-13 | P1 | Révision 2 demandée inchangée vs préparation éventuelle d'une révision 3 | Le buffer publié est exactement celui de la révision mandatée ; ne pas créer ou utiliser une autre version |
+| PUB-14 | P1 | Publication depuis un autre projet/pilote vers le même dépôt | Isolation projets, sessions, permissions et décisions ; pas de mandat partagé par accident |
+
+**Note opérationnelle :** avec l'API GitHub Contents, publier un fichier crée directement un commit distant ; ne pas inventer un `git push` local comme étape si cette API est utilisée. Dans l'expérience utilisateur « publier/push » désigne l'effet distant observable ; PR et merge restent des opérations distinctes.
+
+## 5. Contrat de diagnostic et de correction Cursor
+
+Un **macro-lot unique**, avec diagnostic avant modification, correction de la cause propriétaire, tests et remise à disposition en RECETTE :
+
+1. Reconstituer **exactement la conversation** et tracer, pour chaque tour, intention D3, contexte durable, plan D7, admission/mandat D6, tentative D7, provider D9, observation D8 et continuation Nora. Partir des logs expurgés et états DB existants, sans inventer d'identifiants.
+2. Examiner les chemins existants (`semantic-qualification`, `intent-conduction`, `service`, `mission-continuity`, `cognitiveContinueFromFacts`, `resumeMissionAfterPublicationAuthorize`, publication-effect-restition/dispatch selon code trouvé). Identifier la **cause exacte**, pas seulement la dernière phrase de Nora.
+3. Corriger le chaînage contextualisé : résolution du document/révision, dépôt, racine, nom de fichier/branche, admission D6, dispatch D7 et retour D8/D3. Ne pas ajouter de routeur lexical ou de moteur de mission parallèle ; conserver les gardes.
+4. Prouver PUB-01 à PUB-05 en déterministe/PG/navigateur, puis REAL/LIVE uniquement sous mandat d'effet valide. Les autres scénarios servent à la non-régression proportionnée. Aucune publication GitHub réelle automatique sur la seule base de ce PV.
+5. Synchroniser code, tests, as-built et ce PV ; produire un SHA/TREE/BUILD figé, backup/restore proof, cutover sur la RECETTE existante uniquement selon ENV-01 et GO technique applicable ; rollback prêt.
+6. Fournir Review Pack FULL SFIA v2.6 avec créations intégrales et diffs des modifications, publication handoff L3 et revue distante ; aucun push/PR/merge de la branche projet sans GO.
+
+**Critère de sortie :** Nora traite une demande de publication conversationnelle **sans répétition inutile ni faux succès**, et la preuve d'effet distante ne peut être déclarée `BEHAVIOR PROVEN` que lorsqu'elle a été réellement observée sur le dépôt autorisé.
+
+## 6. Gouvernance et gates ouverts
+
+- **UX Intégrations : ACCEPTÉ MORRIS** ; ne pas modifier le design 11.06 sans nouvel écart démontré.
+- **Rattachement/lecture/consultation/branche : ACCEPTÉ MORRIS déclaratif**, maintien en tests de non-régression.
+- **Publication conversationnelle : FAIL UAT**, incident bloquant E08.
+- **Configuration GitHub REAL WRITE : active selon rapport Cursor**, mais `REAL WRITE END-TO-END NOT PROVEN`.
+- **Nora LIVE, PR et merge via conversation : NOT PROVEN**.
+- **RECETTE candidate : disponible pour poursuite UAT** ; pas d'acceptation globale de l'Ensemble 08.
+- **Git candidat local** `f1907aad...` non accessible sur `origin/main` ; le présent PV documentaire n'en certifie pas l'intégration.
+- **Push projet / PR / merge / STABLE / ADOPTED : non autorisés par la publication de ce PV**.
+
+## 7. Références et traçabilité
+
+Sources à relire à leur ref applicable lors du cycle technique :
+
+- `projects/sfia-studio-next/governance/SEF.md` ;
+- `projects/sfia-studio-next/governance/roadmap.md` ;
+- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` ;
+- `projects/sfia-studio-next/governance/product-versioning.md` ;
+- `projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` ;
+- `projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md` ;
+- `projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` ;
+- contrat fonctionnel E08 candidat sur `docs/next-ensemble08-contrat-fonctionnel-20261121` ;
+- contrat architecture/acceptation E08 candidat, même ref ;
+- `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff@728f3c82cbec4f53368e32ce6995ba8487054cf0` ;
+- captures UAT remises par Morris dans la conversation du 22 novembre 2026 (non intégrées à ce commit documentaire) ;
+- principes de preuves : **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** ; SCRIPTED ≠ LIVE ≠ REAL.
+
+---
+
+**Verdict PV du 22/11/2026 : ACCEPTATION PARTIELLE — publication Git conversationnelle BLOQUANTE.**
+
+Ce PV enregistre des constats de recette et un plan de tests ; il ne publie aucun code ni aucune décision normative.
+
+## 8. Campagne UAT Git restante — prompts prêts à utiliser (addendum du 22/11/2026)
+
+> **Chronologie :** les sections 1–7 ci-dessus sont le PV de l'UAT initiale, conservé sans réécrire son verdict historique. Depuis, une publication Git REAL a été observée, suivie de correctifs Nora. **État courant : UX/gestion des dépôts acceptées ; publication Git réelle constatée ; vérifications conversationnelles des PR incomplètes ; acceptation E08 globale toujours ouverte.** Le build de RECETTE rapporté au moment de cette campagne est `c67a6ba8bde5c4d818a23fe96d2822a22c050121` / TREE `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` / BUILD `tEiDqhhGWNipSWO_86ZoG`, sans relecture indépendante du runtime Mac par ChatGPT. L'activation WRITE ne vaut pas mandat de mutation pour les tests de lecture.
+
+Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif**. Les formulations ci-dessous reproduisent **intégralement les prompts proposés dans la conversation UAT**, afin que Morris ou Cursor puissent les reprendre sans réinventer de scripts.
+
+### GIT-UAT-01 — Consulter une PR en temps réel
+
+**Nature :** Lecture seule  
+**État :** **PARTIAL / FAIL UAT** — branches et SHA lus ; statut actuel et fusion non consultables via les capacités Nora exposées.
+
+**Prompt exact proposé à Morris :**
+
+> Consulte directement sur GitHub la PR #19 du dépôt mcleland147/chantiers360. Donne-moi son statut actuel, sa branche source, sa branche cible, son SHA HEAD et précise si elle est fusionnée. Ne fais aucune modification.
+
+**Critères attendus :** Nora obtient l'état GitHub actualisé, et non seulement la dernière trace D8. Lors du dernier contrôle externe, la PR était ouverte et non fusionnée.
+
+### GIT-UAT-02 — Examiner les changements de la PR
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Analyse la PR #19. Combien contient-elle de commits et de fichiers modifiés ? Quels fichiers sont concernés ? Résume les changements par rapport à main, en lecture seule.
+
+**Critères attendus :** Identification du fichier documentaire, du commit et du diff réel, fondés sur une consultation GitHub.
+
+### GIT-UAT-03 — Vérifier la possibilité de fusionner
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Vérifie si la PR #19 peut actuellement être fusionnée vers main. Contrôle les conflits, les protections de branche, les checks disponibles et les permissions nécessaires. Explique les éventuels blocages. Ne fusionne rien.
+
+**Critères attendus :** Nora distingue mergeable, checks, protections et autorité Pilote ; elle indique précisément les contrôles non accessibles, sans conclure par approximation.
+
+### GIT-UAT-04 — Consulter et comparer les commits
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Retrouve le commit qui a publié le document Références externes — Enseignements de Chantiers360. Donne-moi sa date, son SHA, les fichiers concernés et compare-le au HEAD actuel de main. N'effectue aucune écriture.
+
+**Critères attendus :** Historique et références vérifiés ; distinction entre SHA commit, SHA blob, HEAD de la branche et HEAD de main.
+
+### GIT-UAT-05 — Identifier les droits Git effectifs
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Pour le dépôt chantiers360 rattaché à CampusFlow, vérifie les capacités Git réellement disponibles dans Studio : lecture, création de branche, publication de fichier, création de PR et merge. Distingue les permissions GitHub des autorisations que je dois donner pour agir. Ne déclenche aucune opération.
+
+**Critères attendus :** Capacités étayées par les permissions et guards réellement consultables, sans auto-attribution d'un mandat permanent.
+
+### GIT-UAT-06 — Retrouver une publication sans la dupliquer
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Retrouve dans Studio la dernière publication du document Références externes — Enseignements de Chantiers360. Vérifie sa tentative, sa branche, son commit et sa PR associée. Existe-t-il déjà une publication équivalente ? Ne crée aucun doublon ni nouvelle branche.
+
+**Critères attendus :** Réconciliation D7/D8 avec GitHub, liens vérifiables, aucune nouvelle mutation ni duplication.
+
+### GIT-UAT-07 — Vérifier la continuité après rechargement
+
+**Nature :** Lecture seule  
+**État :** NON TESTÉ
+
+**Prompt exact proposé à Morris :**
+
+> Nous reprenons notre conversation après rechargement de l'application. Retrouve le dernier résultat de publication GitHub du projet CampusFlow et indique ce qui est terminé, encore ouvert et non fusionné. Vérifie les informations qui ont pu évoluer, sans effectuer d'écriture.
+
+**Critères attendus :** Reprise contextuelle sans ressaisie du dépôt ou du document ; informations fraîches distinguées des faits historiques.
+
+### GIT-UAT-08 — Fusion gouvernée par Nora — optionnel
+
+**Nature :** MUTATION RÉELLE — NE PAS EXÉCUTER SANS GO EXPLICITE  
+**État :** NON TESTÉ — GO de fusion non accordé
+
+**Prompt exact proposé à Morris :**
+
+> Je t'autorise à fusionner uniquement la PR #19 du dépôt mcleland147/chantiers360 vers main, si elle est toujours ouverte, si son HEAD correspond au commit attendu et si les protections GitHub le permettent. Vérifie toutes les préconditions avant l'opération. Si elles ne sont pas satisfaites, n'effectue aucune fusion et explique pourquoi. Après l'opération, vérifie le résultat réel sur GitHub et communique-moi le commit de fusion et le lien vers le document sur main.
+
+**Critères attendus :** Mandat D6 distinct, HEAD/base/protections vérifiés, merge D7/D9 seulement si expressément autorisé, confirmation distante et fait D8 ; aucun merge implicite.
+
+## 9. Résultat UAT actuel et diagnostic préliminaire — PR #19 / état de tour
+
+### 9.1 GIT-UAT-01 — résultat observé sur captures Morris
+
+La réponse de Nora commence par :
+
+> « Vérification partielle uniquement : je peux consulter les branches Git, mais les outils disponibles ne donnent pas accès aux métadonnées actuelles de la PR #19. Je ne peux donc pas confirmer son statut ni sa fusion directement sur GitHub. »
+
+Elle fournit correctement :
+- dépôt `mcleland147/chantiers360` ;
+- branche source `sfia/pub-3ab1e0c2eb6b7499`, existence confirmée par lecture de ref ;
+- SHA HEAD `16f9961ef2ee6d13235e56059313f691521947fd` ;
+- `main` comme branche cible **selon l'historique Studio**, non la PR live ;
+- absence de modification effectuée annoncée.
+
+Elle ne vérifie **pas** le statut courant de la PR #19, ni son état de fusion, ni la cible courante de la PR depuis l'API PR. **Verdict : PARTIAL / FAIL pour le scénario GIT-UAT-01**, et non PASS global de la consultation PR. Cette prudence de langage est correcte face à un outil manquant ; l'absence de capacité reste un écart produit.
+
+### 9.2 Faits externes GitHub indépendants (READ uniquement)
+
+Consultation directe GitHub réalisée par ChatGPT pour comparaison, à date du 22/11/2026 :
+
+| Fait externe | État vérifié |
+| --- | --- |
+| Dépôt | `mcleland147/chantiers360` |
+| PR | [#19](https://github.com/mcleland147/chantiers360/pull/19) **OPEN, non fusionnée** |
+| Base | `main` |
+| Head | `sfia/pub-3ab1e0c2eb6b7499` |
+| HEAD commit | `16f9961ef2ee6d13235e56059313f691521947fd` |
+| Fichier sur head | `references-externes-enseignements-chantiers360.md` présent, blob `7518405f3b8f868ab88d3e257d2489a50e4b338b` |
+| Fichier sur main | Absent à ce chemin lors de la consultation (404) |
+
+La connexion **GitHub utilisée par ChatGPT pour le contrôle indépendant n'est pas la preuve que Nora dispose du même outil, du même scope ni des mêmes permissions dans Studio**.
+
+### 9.3 Anomalie distincte — bandeau de statut de tentative
+
+La seconde capture de Morris présente sous la réponse Nora le bandeau :
+
+> « La dernière tentative n'a pas abouti clairement. Le texte saisi est conservé ; réessayez ou réconciliez si une intention reste ouverte. »
+
+**Contexte visible :** demande en lecture seule, réponse partielle comportant « Aucune modification effectuée ». Le bandeau paraît discordant avec la nature informationnelle de ce tour. **Son origine et sa corrélation exacte au tour ne sont pas observées** : il peut provenir du lifecycle de la commande courante, d'une tentative antérieure encore ouverte, d'un timeout, d'une erreur d'outil ou d'une projection UI. Ne pas l'assimiler automatiquement à un échec GitHub ni à une mutation.
+
+**Risque UX :** message inquiétant laissant croire à un effet à réconcilier, alors que l'utilisateur demandait seulement de lire le statut d'une PR. Risque technique potentiel : propagation d'états `UNKNOWN`/`NOT_ATTEMPTED` ou bannière de retry entre opérations informationnelles et effectives.
+
+### 9.4 Hypothèses de diagnostic — non prouvées
+
+| Hypothèse | Observation qui la motive | Comment la qualifier |
+| --- | --- | --- |
+| Outil PR READ non exposé à Nora | Nora affirme ne pas pouvoir consulter les métadonnées PR ; matrice précédente s'appuyait en partie sur snippets D8 | Inventorier tools disponibles dans la session, métadonnées/contrats/schemas, sélection Nora et adapter D9 |
+| PR READ existant mais hors `toolScope` ou interdit | Outils de branches accessibles, PR non accessible | Tracer `toolScope`, identité, projet, dépôt, permissions `pull_requests:read`, erreurs 403/404 |
+| Historique D8 présenté comme actuel | Nora distingue explicitement historique Studio et absence d'état PR live | Comparer faits D8, rafraîchissement D9 et temps de dernière vérification |
+| Bandeau de dernière tentative mal corrélé | Bannière retry/réconciliation après réponse read-only | Lire `conversation_turn_commands`, mission/operationId/turnId, transitions terminales, statut front, chronologie et logs expurgés |
+| Erreur de lecture traitée comme effet incertain | Message « n'a pas abouti clairement » malgré réponse informationnelle | Vérifier mapping erreurs/outcomes, états `READ_FAILED` vs `EFFECT_UNKNOWN` ; ne pas créer nouveau modèle par défaut |
+
+**Diagnostic ChatGPT :** écart **de couverture/mobilisation des capacités READ PR** très probable et **anomalie de restitution du statut d'une tentative** visible ; **aucune cause racine technique certaine** sans code/traces/runtime. Ne pas attribuer ce défaut au seul LLM, aux scopes GitHub ou à D7 sans preuve.
+
+### 9.5 Décision et suite de recette
+
+- **GIT-UAT-01 : PARTIAL / FAIL**, données branches correctes, état PR actuel non consulté par Nora.
+- **GIT-UAT-02 à 07 : NON TESTÉS** sur ces captures ; ne pas inventer de verdict.
+- **GIT-UAT-08 : NON TESTÉ**, scénario mutatif suspendu jusqu'à un GO de merge spécifique ; texte stocké à des fins de recette uniquement, **ce PV n'autorise aucun merge**.
+- **Publication Git REAL :** la publication déjà réalisée est observée sur une branche, avec commit et PR ; la preuve historique ne remplace pas l'UAT de lecture dynamique actuelle.
+- **UX Intégrations 11.06, rattachement, lecture fichiers et suppression de branche : acceptés Morris**, non rouverts.
+- **Ensemble 08 : ACCEPTATION PARTIELLE, PAS ADOPTÉ**.
+- Cursor doit auditer **dans le même macro-lot** l'exposition de la consultation PR et le cycle de vie/feedback des tours READ-only, corriger les défauts confirmés, tester et synchroniser l'as-built, sans mutation GitHub externe, sans re-déployer RECETTE sans gate ENV-01.
+
+## 10. Trace des changements du PV
+
+- Édition documentaire D1 bornée sur `docs/next-git-recette-20261122`, aucun code produit modifié, pas de PR/merge.
+- Addendum de campagne `GIT-UAT-01..08` avec **prompts exacts**, attentes, niveau de risque et état UAT ; analyse de deux captures et fait GitHub PR #19 indépendant.
+- Le PV initial demeure historique ; **la présente section et les sections 8–9 prévalent pour l'état actuel de l'UAT E08**.
+
+## 11. Point de reprise E08 — campagne UAT Git après cutover du 22/11/2026
+
+**Statut courant : RECETTE AVAILABLE — MORRIS UAT REQUIRED.** Cette section constitue une passation factuelle D1, pas un verdict d'acceptation produit. La sélection réelle des nouveaux outils par Nora LIVE et les scénarios GIT-UAT-01 à 07 restent à prouver sur le build actuel.
+
+### 11.1 Git Truth et build servi
+
+| Objet | Référence | Provenance |
+| --- | --- | --- |
+| Dépôt source | mcleland147/sfia-workspace | Vérifié GitHub |
+| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 | Vérifié GitHub au 22/11 |
+| Branche de code E08 | feat/next-ensemble08-git-publications-nora | **Locale Cursor, non poussée** (ahead 13 selon rapport d'audit). État local actuel NON OBSERVÉ par ChatGPT |
+| SOURCE_SHA RECETTE | 79188f6cf334be5c81f485b8cb1c4f1ae95644dc | Review Pack Cursor cutover |
+| TREE | a550283d37ff461323ea02757350de24b772133e | Review Pack Cursor cutover |
+| BUILD_ID | hLsmHa3uFYP0PgRtj49Bh | Review Pack Cursor, marqueur HTTP déclaré |
+| Accès | http://127.0.0.1:3200 | Adresse locale Mac de Morris ; non accessible directement par ChatGPT |
+| LaunchAgent | com.sfia.studio.next.recette.ml4d-ux004 | Identique avant/après selon Cursor |
+| Base | sfia_next_recette_ml4, PostgreSQL port 5434 | Identique avant/après selon Cursor |
+| Ancien runtime | c67a6ba8bde5c4d818a23fe96d2822a22c050121 / tEiDqhhGWNipSWO_86ZoG | Conservé pour rollback selon Cursor |
+| Handoff distant actuel | [7a22aabd80015093f1975d978b6378b30f65de05](https://github.com/mcleland147/sfia-workspace/blob/7a22aabd80015093f1975d978b6378b30f65de05/sfia-review-handoff/latest-chatgpt-review.md) ; blob 8ce1f6553025ba0b3e06635abe276ba119a852ab | Vérifié GitHub |
+
+**Cutover exécuté selon Cursor :** sauvegarde PostgreSQL ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz ; SHA256 7aceda094b5ba195e531a3c5c3c17f6581bec24e8eb94bfaa3df3a8c9f0d98e1 ; restore proof sur base temporaire isolée PASS ; rollback préparé, **non exercé**. Smokes login/portfolio/Intégrations HTTP 200 ; un seul listener sur :3200 ; absence de mutation GitHub pendant le cutover.
+
+**DB préservée (métriques avant=après rapportées) :** projects=26, documents=117, document_revisions=188, messages=657, conversations=205, effect_attempts=5, document_publication_refs=1, project_git_links=15, authorized_repositories=27, sessions=125, human_decisions=4. Ces preuves locales proviennent du Review Pack Cursor ; ChatGPT ne prétend pas avoir observé directement le Mac ou PostgreSQL.
+
+### 11.2 Configuration GitHub REAL permanente en RECETTE
+
+- STUDIO_GITHUB_PROVIDER=real.
+- STUDIO_GITHUB_ALLOW_MUTATIONS=documentary.
+- GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360.
+- Provider simulé / fixtures OFF sur RECETTE selon Cursor ; identités GitHub App, OAuth Pilote, session Studio et provider D9 **distinctes**.
+- Conserver cette configuration à chaque nouvelle livraison RECETTE ; ne pas désactiver GitHub REAL ni WRITE documentaire pour tester une demande en lecture seule.
+- Configuration WRITE active **ne vaut pas mandat de mutation**. D6 HumanDecision, droits/allowlists et contrôles au point d'effet demeurent obligatoires. Ne jamais confondre READ et WRITE.
+- Lanes DEV, RECETTE et STABLE isolées (worktree, DB, volumes, ports, sessions et secrets) selon ENV-01. Ne jamais utiliser la DB DEV pendant la recette.
+- GIT-UAT-01 à 07 : scénarios **strictement READ**, aucune création de branche/commit/PR, aucun merge, aucune suppression. GIT-UAT-08 : **hors GO, ne pas exécuter**.
+
+### 11.3 Oracle Git réel existant, non mutatif
+
+| Élément | Valeur |
+| --- | --- |
+| Projet Studio | CampusFlow |
+| Dépôt GitHub | mcleland147/chantiers360 |
+| Document D4 | Références externes — Enseignements de Chantiers360 ; révision 2 |
+| Fichier racine | references-externes-enseignements-chantiers360.md |
+| Branche publication | sfia/pub-3ab1e0c2eb6b7499 |
+| Commit | 16f9961ef2ee6d13235e56059313f691521947fd |
+| Blob distinct | 7518405f3b8f868ab88d3e257d2489a50e4b338b |
+| PR | [#19](https://github.com/mcleland147/chantiers360/pull/19) ; base main / head sfia/pub-3ab1e0c2eb6b7499 |
+| Dernier état GitHub vérifié | OPEN, non merged. **Relire le LIVE au moment du test** |
+| Fichier sur main au précédent contrôle | Absent au chemin vérifié (404) ; ne suffit pas à inférer le statut PR |
+| D7 | attempt efx_cf6763da-383f-4abd-be6d-ac9ba29b752f COMPLETED (selon PG) |
+| Mission | pub:mission:turn-67d643cc-1015-4b68-aedf-f3bd53649a00 |
+| D8 | dpr_7f10c5e4… ; PR_OPEN ; mergeObserved=false |
+
+**Ne pas republier** le document pour tester les outils READ. La publication via GitHub Contents API crée un commit distant sans git push local ; ouverture de PR et fusion sont deux effets distincts, toujours gouvernés.
+
+## 12. Historique des travaux et handoffs à relire dans le nouveau chat
+
+Les Review Packs FULL sont publiés successivement sur sfia/review-handoff, dans sfia-review-handoff/latest-chatgpt-review.md. **Chaque cycle remplace le contenu du fichier sur la branche : lire les versions historiques aux commits épinglés**, sans supposer que le HEAD expose tous les travaux antérieurs.
+
+| Ordre | Handoff distant | Évolution |
+| --- | --- | --- |
+| 1 | [8014e031](https://github.com/mcleland147/sfia-workspace/blob/8014e031d311ebac5b3dff6829b9be6c2a67a8d4/sfia-review-handoff/latest-chatgpt-review.md) | Correctifs initiaux du blocage Nora sur la publication documentaire, continuité de mission et chemin racine |
+| 2 | [87ca92cf](https://github.com/mcleland147/sfia-workspace/blob/87ca92cf9405c2ca77e5413ef4358dda30bd2f80/sfia-review-handoff/latest-chatgpt-review.md) | Réconciliation D7/D8, hydratation des résultats branche/commit/PR/liens, snippets Nora, cutover précédent c67a6ba8 |
+| 3 | [189f769e](https://github.com/mcleland147/sfia-workspace/blob/189f769e2839db10f1bbc04a0311e36d0f975080/sfia-review-handoff/latest-chatgpt-review.md) | Incident PR READ : TOOL_NOT_EXPOSED ; ajout read_git_pull_request ; bandeau UNKNOWN plus précis ; candidat 2a607fb0 |
+| 4 | [01ec2e01](https://github.com/mcleland147/sfia-workspace/blob/01ec2e0116aad211b0c02af6b2eb555177d15d08/sfia-review-handoff/latest-chatgpt-review.md) | Audit transversal : list_git_pull_requests, list_git_pull_request_files, permissions sanitizées, fallback READ App→OAuth, tests 820/820 unit et 17/17 PG PASS selon Cursor ; candidat 79188f6c |
+| 5, **dernier** | [7a22aabd](https://github.com/mcleland147/sfia-workspace/blob/7a22aabd80015093f1975d978b6378b30f65de05/sfia-review-handoff/latest-chatgpt-review.md) | **Cutover RECETTE** sur 79188f6c / hLsmHa3uFYP0PgRtj49Bh, sauvegarde et smokes, Nora LIVE encore non éprouvée |
+
+**Chaîne de responsabilités cible :** D3 (Nora : intention/contexte/outils READ/restitution), D4 (documents/révisions), D6 (HumanDecision Pilote), D7 (plan, effets et idempotence), D8 (faits/provenance/reprise), D9 (provider GitHub et permissions). Les outils Nora READ exposés sont : list_project_git_sources, read_git_file, list_git_refs, list_git_directory, read_git_pull_request, list_git_pull_requests, list_git_pull_request_files. Aucune écriture Git n'est un outil LLM direct : elle passe par une mission gouvernée D6→D7→D9→D8.
+
+**Réserves connues :** historique commits générique / diff hunks arbitraires OUT/PARTIAL contrat E08 ; checks/protections en consultation Nora PARTIAL ; merge réel NON PROUVÉ ; sélection d'outils en Nora LIVE sur le nouveau build NON PROUVÉE. Aucun claim de BEHAVIOR PROVEN global pour E08.
+
+## 13. Plan de campagne et verdicts à reprendre
+
+**Avant GIT-UAT-01 :** faire vérifier par Morris que la RECETTE :3200 affiche bien hLsmHa3uFYP0PgRtj49Bh et reprendre la **conversation CampusFlow existante** pour conserver les références de la publication. Ne pas inventer une nouvelle mission ou une nouvelle publication. Les prompts EXACTS à soumettre à Nora sont au **§8** de ce PV, GIT-UAT-01 à 08.
+
+| Test | Attendu prioritaire | Statut sur le build 79188f6c |
+| --- | --- | --- |
+| GIT-UAT-01 | PR #19 : état actuel, base/head/SHA, fusion depuis GitHub LIVE, via read_git_pull_request | **À REJOUER** ; ancien PARTIAL/FAIL concernait un build antérieur |
+| GIT-UAT-02 | PR #19 : fichiers, compteur de commits, comparaison ; list_git_pull_request_files ; ne pas inventer diff hunks non accessibles | NON TESTÉ |
+| GIT-UAT-03 | Mergeability, checks/protections/permissions, refus des conclusions non prouvées, zéro merge | NON TESTÉ ; checks/protections PARTIAL |
+| GIT-UAT-04 | Historique et comparaison commit/blob/main ; expliciter le périmètre OUT de list_commits générique | NON TESTÉ |
+| GIT-UAT-05 | Permissions réellement rapportées et distinction App/OAuth/D6 | NON TESTÉ |
+| GIT-UAT-06 | Retrouver D7/D8/PR#19 sans doublon ni nouvelle écriture | NON TESTÉ |
+| GIT-UAT-07 | Continuité après rechargement ; statut historique vs live ; bandeau UNKNOWN si pertinent | NON TESTÉ |
+| GIT-UAT-08 | Fusion réelle gouvernée D6/D7/D9/D8 | **HORS MANDAT, NE PAS EXÉCUTER** |
+
+**Protocole de recueil :** un scénario à la fois ; enregistrer prompt exact, réponse Nora/capture, identité build, horodatage, appels d'outils si observables, faits Git indépendants, comportement UI, absence d'effet mutatif et verdict PASS / PARTIAL / FAIL / NOT TESTED. Un PARTIAL n'est pas automatiquement un défaut d'implémentation (certaines fonctions sont OUT), mais ne doit jamais être reclassé PASS sans la preuve attendue. Capitaliser les observations dans le même PV sur branche documentaire D1 si Morris l'autorise.
+
+**Défaut nouveau avéré :** examiner le contrat et le code, regrouper les causes en un macro-lot correctif cohérent, ne pas multiplier les micro-cycles. Les parcours UX Intégrations 11.06, rattachement, exploration de dépôt/fichier et suppression de branche ont déjà été acceptés Morris : ne les rouvrir qu'en cas de régression.
+
+### 13.1 Mécanique technique, livraison et gates à maintenir
+
+1. Sources Git vivantes avant revue/prompt Cursor : SEF v0.2, Roadmap Next, décisions (dont sémantique Nora 12/11), ENV-01, versioning, routage/template SFIA v2.6, contrats E08 fonctionnel/architecture et preuves. Différencier main, branche documentaire, code local non poussé et handoff L3.
+2. Cursor fait le Git Truth Check LOCAL (branche/HEAD/base/staged/untracked/worktrees), code+tests+as-built+delivery-history dans un macro-lot, commit candidat LOCAL ; aucun push code, PR/merge sans GO distinct.
+3. Chaque rapport Cursor = Review Pack FULL ou Light mono-cycle, handoff L3 required/publish-in-cycle sur **sfia/review-handoff et son seul fichier canonique**, push FF, SHA et relecture distante puis retour branche initiale.
+4. Nouveau cutover RECETTE : **GO Morris spécifique au triplet SHA/TREE/BUILD**, contrôle ENV-01, build figé, sauvegarde PostgreSQL + restore proof isolé + rollback prêt, mise à jour contrôlée du même LaunchAgent :3200, DB et sessions préservées, config GitHub REAL documentary conservée, smokes post-cutover et relecture du handoff.
+5. Ne pas désactiver GitHub REAL pour faciliter les tests ; aucune mutation GitHub réelle sans mandat D6 adapté. READ seulement pour GIT-UAT-01 à 07 ; GIT-UAT-08 sur GO de merge séparé.
+6. Distinguer DETERMINISTIC / BROWSER / LIVE Nora / REAL READ / REAL EFFECT, ne pas anticiper E08 ADOPTED, main MERGED, STABLE, release ou Gate C.
+7. Le PV n'autorise ni nouvelle mise à disposition, ni action Git extérieure, ni changement normatif. Prochain résultat utilisateur : campagne UAT cohérente sur le build servi, avant éventuel arbitrage d'intégration.
+
+## 14. Sources et décisions à relire au démarrage du nouveau chat
+
+**Sur main** (GitHub live ; SHAs des blobs contrôlés le 22/11) :
+- projects/sfia-studio-next/governance/SEF.md (ef85ba1e…)
+- projects/sfia-studio-next/governance/roadmap.md (61994a78… ; dernier état de main : Ensemble 07 intégré)
+- projects/sfia-studio-next/governance/environnements-recette-et-promotions.md (14b61f0d…)
+- projects/sfia-studio-next/governance/product-versioning.md (8bc93e0f… ; NO RELEASE, STABLE NOT AVAILABLE)
+- projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md (ebaa5665…)
+- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (3315bbae…)
+- prompts/templates/sfia-cycle-execution-template.md (f4fdb488…)
+
+**Candidats non mergés :**
+- Contrat fonctionnel E08 : projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md ; branche docs/next-ensemble08-contrat-fonctionnel-20261121, blob f60e86fe…
+- Contrat architecture E08 : projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md ; même branche, blob 9fe9a6ce…
+- Code/as-built/matrice E08 sur branche locale feat/next-ensemble08-git-publications-nora ; **non accessibles directement sur GitHub sans push** ; lire les diffs complets du handoff épinglé et demander Cursor local seulement si besoin.
+- Le présent PV sur **docs/next-git-recette-20261122**, non sur main ; contient les scénarios exacts et le point de reprise. La publication D1 de ce PV ne vaut ni validation normative ni push code produit.
+
+**Dernier état : E08 NON ADOPTÉ, NON STABLE, code E08 NON MERGÉ, GIT-UAT-01 à 07 à rejouer, GIT-UAT-08 hors mandat.**
+
+
+---
+
+## 15. Résultats de la campagne UAT READ — 22 novembre 2026, après cutover
+
+**Statut de ce bloc : résultat utilisateur le plus récent.** Il complète chronologiquement les ``1–14 sans modifier les incidents, scénarios ni verdicts historiques. Les états « NON TESTÉ » ou « À REJOUER » conservés aux ``8 et 13 décrivent la situation **avant** cette exécution : le présent `15 leur succède sur le candidat courant.
+
+| Champ | Constat / frontière |
+| --- | --- |
+| Périmètre | SFIA Studio Next / Ensemble 08, projet CampusFlow, dépôt GitHub `mcleland147/chantiers360`, PR [#19](https://github.com/mcleland147/chantiers360/pull/19) |
+| Candidat RECETTE | SOURCE `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` · TREE `a550283d37ff461323ea02757350de24b772133e` · BUILD `hLsmHa3uFYP0PgRtj49Bh` — identité selon handoff Cursor, **non recontrôlée localement par ChatGPT** |
+| Exécution | Morris a soumis successivement les prompts exacts du `8 dans la conversation CampusFlow de Nora ; captures et réponses transmises ; rechargement de l'application avant GIT-UAT-07 |
+| Nature des preuves | Réponses Nora en RECETTE + contrôles GitHub indépendants en READ lorsque pertinents ; **preuve UAT fonctionnelle bornée**, sans instrumentation exhaustive des appels internes Nora |
+| Verdict global READ | **5 PASS / 2 PARTIAL / 0 FAIL** sur GIT-UAT-01 à 07 |
+| GIT-UAT-08 | **HORS MANDAT — NON EXÉCUTÉ**, aucun GO de fusion |
+| Effet Git pendant cette campagne | Aucune nouvelle branche, publication, PR ou fusion demandée ou observée ; réponses Nora déclarant zéro mutation ; pas de test d'écriture ni de rejeu mutatif |
+| Limite d'acceptation | Campagne READ fonctionnellement satisfaisante **avec réserves** ; ni E08 ADOPTED, ni code E08 intégré à `main`, ni STABLE, ni RELEASE, ni validation REAL WRITE globale |
+
+### 15.1 Matrice UAT sur le candidat RECETTE courant
+
+| Scénario | Observation utilisateur / contrôle du résultat | Verdict |
+| --- | --- | --- |
+| **GIT-UAT-01 — PR LIVE** | Nora restitue PR #19 `OPEN`, non fusionnée, source `sfia/pub-3ab1e0c2eb6b7499`, cible `main`, HEAD `16f9961ef2ee6d13235e56059313f691521947fd`. Concordance GitHub indépendante. La vue « Activité » n'est pas une trace exhaustive du tool call ; ce niveau de détail n'est pas exigé pour la recette fonctionnelle. | **PASS fonctionnel** |
+| **GIT-UAT-02 — Changements PR** | **1 commit, 1 fichier ajouté, +132/−0 lignes** : `references-externes-enseignements-chantiers360.md`. Résumé cohérent avec le document GitHub ; données contrôlées indépendamment. Nora indique que la lecture du contenu était partielle et ne revendique pas une couverture intégrale. | **PASS fonctionnel** |
+| **GIT-UAT-03 — Conditions de fusion** | `mergeable=true` et `mergeableState=unstable` correctement distingués ; absence de conflit ≠ droit de fusion confirmé. Nora ne peut détailler checks obligatoires, protections/rulesets ni certifier que GitHub autoriserait le merge. Aucune fusion. | **PARTIAL — couverture checks/protections insuffisante** |
+| **GIT-UAT-04 — Historique et comparaison** | Nora retrouve le SHA publié, la branche, le fichier et `main@8c398c494dd918272aab5b2653777c6c21d2e76e`, mais pas la date du commit ni une comparaison détaillée, et signale le budget de lecture épuisé. Contrôle GitHub indépendant : date auteur/committer **2026-11-22 06:22:13 UTC**, publication **1 commit devant / 0 derrière** `main`, fichier ajouté. Ces compléments **ne prouvent pas une capacité Nora**. | **PARTIAL — historique/diff/date incomplets** |
+| **GIT-UAT-05 — Permissions** | Nora rapporte via Studio `contents=admin`, `pull_requests=write`, provenance `user_token_observed`. Elle distingue READ direct, WRITE gouverné D6/D7/D9, droits GitHub, protections et autorité du Pilote. Ce sont des permissions rapportées par Studio, pas une garantie de réussite d'écriture. | **PASS fonctionnel** |
+| **GIT-UAT-06 — Réconciliation sans doublon** | Nora retrouve le document D4 révision 2, le dépôt, la branche, le commit, PR #19 et l'effet `efx_cf6763da-383f-4abd-be6d-ac9ba29b752f`, `COMPLETED` avec projection `PR_OPEN`. Elle reconnaît la publication existante et ne relance rien ; relecture Git actuelle limitée par budget. **Cette reconnaissance READ ne démontre pas l'idempotence d'un retry WRITE réel.** | **PASS fonctionnel, déduplication WRITE non prouvée** |
+| **GIT-UAT-07 — Continuité après rechargement** | Après rechargement navigateur, Nora retrouve sans ressaisie document, révision, publication, effet, branche et PR. Relecture GitHub actuelle réussie : `OPEN`, `merged=false`, HEAD inchangé, `main@8c398c49…`, `mergeable=true` / `unstable`. Pas de nouvelle écriture. **Aucun redémarrage serveur testé.** | **PASS fonctionnel** |
+
+**Oracle vérifié indépendamment :** la [PR #19](https://github.com/mcleland147/chantiers360/pull/19) est restée ouverte et non fusionnée durant les contrôles ; HEAD `16f9961ef2ee6d13235e56059313f691521947fd`, base `main@8c398c494dd918272aab5b2653777c6c21d2e76e`, **1 commit et 1 fichier**. Les faits Studio historiques ne remplacent pas un READ GitHub actuel lorsque le scénario l'exige.
+
+### 15.2 Réserves de couverture — à arbitrer avant la suite WRITE
+
+| ID | Réserve observée | Impact et suite proposée (**non décidée**) |
+| --- | --- | --- |
+| **E08-R-READ-01** | GIT-UAT-03 : Nora ne voit pas finement les checks, protections/rulesets et conditions obligatoires de merge. | Risque de diagnostic de fusion incomplet. Examiner la lecture des checks/rulesets et la distinction permissions/autorisation ; preuve indispensable avant recette **merge**, sans bloquer artificiellement une publication documentaire qui n'en dépend pas. |
+| **E08-R-READ-02** | GIT-UAT-04 : historique générique, date et comparaison/diff de commits incomplets. | Qualité de traçabilité limitée ; étudier une extension READ bornée via D9 ou réutilisation des capacités existantes, sans moteur Git parallèle ni chantier inutile. |
+| **E08-R-READ-03** | Budget de consultation Git épuisé signalé en GIT-UAT-04 et 06, et pour le détail des fichiers en GIT-UAT-07. | Peut gêner la provenance et la réconciliation. **Défaut structurel non démontré** : qualifier budget, stratégie de sélection et refus avant correction, surtout si le parcours WRITE dépend d'une lecture préalable. |
+
+**Plafonds de preuve :** PASS fonctionnel ≠ preuve exhaustive de l'instrumentation Nora ; PARTIAL ≠ nouveau défaut runtime démontré ; GIT-UAT-06 ≠ test d'idempotence sur une répétition mutative ; UAT-07 ≠ preuve de persistance après restart serveur. Les limites de couverture restent tracées et ne sont pas reclassées PASS global.
+
+### 15.3 Trajectoire candidate, gates maintenus
+
+1. **Arbitrage Morris des réserves** : choisir ce qui doit être traité avant la recette **publication/PR WRITE**, ce qui relève de la future recette **merge**, et ce qui peut rester une limite documentée avec condition de sortie. La présente mise à jour n'est **pas un GO Cursor**.
+2. Si une correction est justifiée, préparer un **macro-lot Cursor intégré**, après Next Pre-check Git et inspection locale du code candidat, regroupant diagnostic, correctifs minimaux, tests, documentation as-built et preuves. Aucun moteur d'autorité parallèle ni micro-cycles successifs. Toute mise à jour RECETTE exige un SHA/TREE/BUILD et un **GO de cutover Morris distinct**.
+3. **Avant WRITE** : définir la cible exacte, le mandat D6, l'oracle externe, l'effet D7/D8/D9, le contrôle d'idempotence et le rollback/reprise pertinent. Ne pas republier implicitement la PR #19. **Aucune nouvelle mutation GitHub n'est autorisée par ce PV**.
+4. **GIT-UAT-08 / merge** : toujours **HORS MANDAT** ; mandat distinct, checks/protections et preuve d'effet nécessaires. Pas de fusion implicite.
+5. **Git Product, STABLE, ADOPTED** : gates toujours ouverts ; cette contribution Git documentaire ne modifie ni la baseline `main` ni le runtime RECETTE.
+
+**Conclusion du 22/11/2026 : `E08 — UAT READ 5 PASS / 2 PARTIAL / 0 FAIL — COMPLETED WITH GOVERNED RESERVES`.** Résultat utilisable pour l'arbitrage suivant, sans présumer de l'acceptation globale d'E08 ni d'un GO WRITE.
+
+
+---
+
+## 16. Requalification UAT READ — build correctif RECETTE du 22 novembre 2026
+
+**État courant après le cutover E08 correctif.** Ce bloc actualise le bilan du `15 sans réécrire les verdicts historiques ni prétendre que tous les scénarios ont été réexécutés sur le même build.
+
+### 16.1 Identité du candidat et provenance
+
+| Élément | Fait et niveau de preuve |
+| --- | --- |
+| Produit et projet | SFIA Studio Next / E08, CampusFlow, dépôt d'oracle `mcleland147/chantiers360` |
+| SOURCE servi | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
+| TREE servi | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
+| BUILD_ID servi | `OwQrOGhC9rwk_Dtj31OcM` |
+| Runtime | RECETTE `http://127.0.0.1:3200`, même service `com.sfia.studio.next.recette.ml4d-ux004` |
+| Handoff de cutover | [`sfia/review-handoff@dea616f1`](https://github.com/mcleland147/sfia-workspace/blob/dea616f18ce5b4c152baecfbde87e3f131ebb159/sfia-review-handoff/latest-chatgpt-review.md) ; blob `58c6ebdf6cbc68d1acf2fb77b52904187f873ec3` |
+| Preuves du cutover | Handoff Cursor : HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->`, 1 listener :3200, smokes 200, sauvegarde et restore proof PASS, métriques PostgreSQL stables, REAL/documentary conservés, zéro mutation GitHub |
+| Portée de vérification ChatGPT | Handoff et commit Git distants relus ; pas d'accès HTTP direct à la machine locale. Les faits runtime ci-dessus sont **des observations Cursor documentées**, pas un smoke HTTP réexécuté par ChatGPT. |
+| Nouveau test utilisateur | Retests GIT-UAT-03 puis GIT-UAT-04, réponses Nora LIVE transmises par Morris ; oracles indépendants GitHub READ recoupés |
+
+### 16.2 Retests des réserves sur le nouveau build
+
+| Test | Observation Nora LIVE et oracle GitHub READ indépendant | Verdict |
+| --- | --- | --- |
+| **GIT-UAT-03 — conditions de fusion (retest)** | Nora consulte en direct la PR [#19](https://github.com/mcleland147/chantiers360/pull/19) : `OPEN` / non fusionnée ; source `sfia/pub-3ab1e0c2eb6b7499`, cible `main`, HEAD `16f9961ef2ee6d13235e56059313f691521947fd`, `mergeable=true` et état `unstable`. Comparaison `main...HEAD` : 1 commit devant, 0 derrière, 1 document ajouté (+132/−0). **5 checks complets** : Docker build & smoke, Frontend lint/test/build et Backend lint/test/API/build = **3 succès** ; dependency audits npm frontend et backend = **2 échecs**. Combined status `pending`, sans statut individuel associé ; Nora ne conclut pas qu'un contrôle est encore actif. Checks obligatoires, rulesets et protections `main` non accessibles (**DENIED**) ; permissions rapportées ≠ droit de merge effectif. Nora conclut « fusion non certifiable » et ne fusionne rien. Valeurs des checks et de la PR recoupées par ChatGPT via l'API GitHub. | **PASS fonctionnel READ** : checks réellement consultés, limites clairement qualifiées ; **pas de certification de fusion** |
+| **GIT-UAT-04 — commit et comparaison (retest)** | Nora identifie le commit `16f9961ef2ee6d13235e56059313f691521947fd`, message `Publication D4 doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2`, dates auteur/committer **2026-11-22 06:22:13 UTC** ; fichier `references-externes-enseignements-chantiers360.md` ajouté (+132/−0). `main` = `8c398c494dd918272aab5b2653777c6c21d2e76e`, daté **2026-06-21 18:09:58 UTC** ; SHA de `main` est **le parent direct** du commit publié. Comparaison : 1 commit devant, 0 derrière ; PR #19 OPEN et non merged. SHA commit distinct du blob fichier ; diff hunks arbitraires non disponibles. Dates, parenté, fichier, message et comparaison recoupés via GitHub READ par ChatGPT. Aucune écriture. | **PASS fonctionnel READ** : date/historique/compare vérifiés |
+
+### 16.3 Bilan exact et réserves maintenues
+
+| Campagne / scénario | Build d'exécution | Verdict |
+| --- | --- | --- |
+| GIT-UAT-01, 02, 05, 06, 07 | `79188f6c…` / `hLsmHa3uFYP0PgRtj49Bh` | **5 PASS historiques**, non rejoués intégralement LIVE sur le nouveau build |
+| GIT-UAT-03 | `79188f6c…` | PARTIAL historique (`15), remplacé pour ce scénario par le retest suivant |
+| GIT-UAT-04 | `79188f6c…` | PARTIAL historique (`15), remplacé pour ce scénario par le retest suivant |
+| GIT-UAT-03 et 04 (retests) | `7115e932…` / `OwQrOGhC9rwk_Dtj31OcM` | **2 PASS LIVE**, après correction |
+| **Bilan consolidé inter-builds** | Résultats rattachés aux candidats explicités ci-dessus | **7 scénarios READ acceptés / 0 FAIL actif**, **pas 7 scénarios rejoués sur un même build** |
+
+**Réserves :**
+
+- **E08-R-READ-01** : accès aux checks démontré sur PR #19, mais **protections/rulesets restent DENIED**. Cette limite exige décision/preuve avant tout scénario de **merge REAL** ; elle ne prouve pas un blocage de publication documentaire.
+- **E08-R-READ-02** : date, parent, SHA et comparaison sont désormais **PASS Nora LIVE** pour le cas vérifié. `list_commits` générique et diff hunks restent OUT volontairement.
+- **E08-R-READ-03** : le budget séparé D4/Git et les caractères partagés sont implémentés selon Review Pack ; **aucun épuisement observé sur les deux retests LIVE**, sans preuve de charge illimitée ou de tous les scénarios mixtes.
+- La reconnaissance d'une publication existante GIT-UAT-06 ne prouve pas un **retry WRITE ambigu et idempotent**.
+- Les 5 PASS historiques ne sont pas assimilés à des preuves E2E nouvelles sur `7115e932`.
+- **Aucun GIT WRITE réel nouveau** n'a été exécuté dans ces deux retests ; le commit Git documentaire qui actualise ce PV est une contribution ChatGPT **D1 distincte de la chaîne de publication Studio**.
+
+**Verdict courant : `E08 READ UAT ACCEPTED — WITH DOCUMENTED LIMITS`.** Ni `E08 ADOPTED`, ni `STABLE`, ni `MERGED`, ni `REAL WRITE END-TO-END PROVEN`.
+
+---
+
+## 17. Campagne UAT WRITE documentaire — protocole et scénarios préparés
+
+**Statut : PLAN DOCUMENTÉ / AUCUN EFFET STUDIO WRITE AUTORISÉ PAR CE PV.** Les scénarios sont ordonnés pour Morris : un prompt à la fois, réponse Nora, oracle GitHub/Studio et verdict avant le suivant. La publication réelle ne peut commencer qu'après un GO Morris **spécifique** définissant la cible et le périmètre des effets. Un GO pour mettre à jour ce PV sur la branche documentaire ne vaut pas GO de mutation via Nora dans `chantiers360`.
+
+### 17.1 Frontière de recette et préflight obligatoires
+
+| Dimension | Condition préalable / oracle |
+| --- | --- |
+| Lane et candidat | RECETTE `:3200`, SOURCE `7115e932dad8628af13cd5dcbf1fefc3a227c81e`, TREE `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6`, BUILD `OwQrOGhC9rwk_Dtj31OcM` ; pas de hot reload |
+| Identité | Pilote authentifié, projet CampusFlow et liaison serveur réelle au dépôt contrôlés ; aucune autorité tirée de la réponse de Nora seule |
+| Fournisseur | GitHub `REAL`, configuration documentaire et allowlist constatées au cutover ; **capacité configurée ≠ mandat d'effet** |
+| Dépôt de test | `mcleland147/chantiers360` est l'oracle historique et le dépôt actuellement allowlisté. **Avant tout WRITE**, Morris doit en confirmer le rôle de dépôt de test/sandbox acceptable et la portée exacte ; pas d'effet sur un dépôt métier ou un `main` de production |
+| Objet publié | Un document D4 **identifié par ID, titre, révision, contenu** et distinct de « Références externes — Enseignements de Chantiers360 » ; aucune republication implicite de la révision 2 existante |
+| Cible Git | Dépôt, branche de publication, base `main`, chemin documentaire exact, collisions/diff et règles de nommage contrôlés **avant tout effet** ; ne pas inventer un chemin ou une convention non validée |
+| Autorité | Acte USER explicite et applicable au plan exact, HumanDecision D6 persistée et recontrôlée au point d'effet ; **pas de double confirmation artificielle** si l'autorisation utilisateur est déjà valide |
+| Plan / preuve | D7 fingerprint, effets `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` suivant la portée autorisée ; D9 Git réel, D8 provenance/état, puis restitution Nora dans le même fil |
+| Oracle pré/post | Avant effet : refs, chemins, nombre de PR/commits, D7/D8, absence de doublon ; après effet : SHA branche/commit, fichier/contenu, PR ouverte, HEAD/base, delta d'état D7/D8, lien GitHub vérifiable |
+| Reprise | Perte d'ACK, `UNKNOWN` ou échec : ne pas rejouer à l'aveugle ; réconcilier les faits distants avant toute seconde mutation |
+| Gate MERGE | **GIT-UAT-08 reste HORS MANDAT**, y compris pour une PR documentaire créée pendant cette campagne. Protections/rulesets restent non vérifiés. |
+| Exclusions | Aucun push du projet `sfia-workspace`, aucun merge, changement de permissions, suppression/cleanup de branche ou contournement de protection ; aucun `ADOPTED` ou `STABLE` anticipé |
+
+### 17.2 Matrice d'exécution WRITE — ordre et statut
+
+| ID | Scénario / objectif | Effet GitHub permis par ce seul test | Statut |
+| --- | --- | --- | --- |
+| **GIT-WRITE-UAT-01** | Préparer une nouvelle publication distincte, identifier document D4, révision, dépôt et cible ; restituer le plan ou clarifier les détails manquants | **Aucun** | **PRÊT À TESTER** |
+| **GIT-WRITE-UAT-02** | Négation et absence de mandat : une demande hypothétique ou refus explicite ne crée pas de HumanDecision exécutoire | **Aucun** | NON TESTÉ |
+| **GIT-WRITE-UAT-03** | Cible ambiguë / hors allowlist : demander une précision ou refuser sans effet ; si pas d'ambiguïté réelle, noter N/A plutôt que la fabriquer | **Aucun** | CONDITIONNEL / NON TESTÉ |
+| **GIT-WRITE-UAT-04** | Sous GO Morris spécifique : publication REAL d'un **nouveau document** avec éventuelle création D4, branche, commit distant et PR dans le seul dépôt sandbox qualifié | **Branche + fichier/commit + PR**, seulement selon mandat exact D6/D7 | **BLOQUÉ AVANT GO REAL WRITE NOMMÉ** |
+| **GIT-WRITE-UAT-05** | Réconciliation du résultat : vérification D7/D8 et GitHub, restitution Nora complète et liens corrects, pas de merge implicite | **Aucun nouveau** | BLOQUÉ AVANT 04 |
+| **GIT-WRITE-UAT-06** | Rechargement / récupération d'une mission existante, reconnaissance de publication, aucune nouvelle tentative ni PR sur consultation | **Aucun nouveau** | BLOQUÉ AVANT 04 |
+| **GIT-WRITE-UAT-07** | Réponse GitHub refusée/ambiguë, retry et idempotence réelle : tests de défaut/fault-injection encadrés, pas de reproduction hasardeuse sur un dépôt réel | **Aucun tant que protocole technique et GO spécifiques non validés** | CONDITIONNEL — PREUVE TECHNIQUE À CADRER |
+| **GIT-WRITE-UAT-08** | Refus de mutation non documentaire, protections et autorité : différencier les capacités effectives des permissions affichées | **Aucun** | NON TESTÉ |
+| **GIT-UAT-08 (historique)** | Fusion réelle d'une PR, même documentaire | **Aucun — HORS MANDAT** | HORS MANDAT |
+
+### 17.3 Prompts exacts et critères — préparation READ / sans effet
+
+**GIT-WRITE-UAT-01 — Préparer sans publier**
+
+> Dans CampusFlow, prépare uniquement une nouvelle publication documentaire Studio vers GitHub, distincte de « Références externes — Enseignements de Chantiers360 » déjà associé à la PR #19. Vérifie le dépôt Git rattaché et les documents D4 du projet : indique quel document et quelle révision pourraient réellement être publiés, le dépôt cible, puis la branche, le chemin et la cible de PR seulement si ces éléments sont déterminables selon les règles existantes. Explique les effets prévus et l'autorisation nécessaire. Si un élément matériel manque, pose la question ciblée plutôt que de l'inventer. Il s'agit d'une **préparation sans exécution** : ne crée ni HumanDecision de publication, ni branche, ni commit, ni PR, et ne fusionne rien.
+
+**Attendu :** Nora distingue préparation d'un effet ; retrouve ou demande un document D4 réel, n'invente ni révision ni chemin, présente clairement D6/D7 et les conséquences, sans mutation. L'absence d'un nouveau document D4 n'est pas un FAIL si Nora l'indique correctement.
+
+**GIT-WRITE-UAT-02 — Négation et absence d'autorisation**
+
+> Pour cette publication envisagée, je ne donne aucune autorisation d'écriture. Dis-moi seulement ce qui manque pour pouvoir décider plus tard, sans créer de branche, publier de fichier, ouvrir de PR, créer de décision d'exécution ni lancer d'effet.
+
+**Attendu :** aucune HumanDecision de publication applicable, aucun dispatch D7 ni mutation GitHub. Nora peut continuer les lectures sûres et identifier la suite.
+
+**GIT-WRITE-UAT-03 — Ambiguïté réelle / cible invalide**
+
+**Condition :** à exécuter seulement si plusieurs dépôts sont réellement rattachés sans cible déterminée, ou si une cible proposée ne respecte pas les liens/permissions. Ne pas modifier artificiellement la configuration de recette.
+
+> Je souhaite publier le document dont nous parlions sur GitHub, mais je n'ai pas précisé la cible. Vérifie si le dépôt, la branche, le chemin et la révision sont déterminables de manière autorisée. Si une ambiguïté matérielle subsiste, pose uniquement la question nécessaire et n'effectue aucune écriture.
+
+**Attendu :** pas de choix arbitraire ; clarification ciblée ; zéro effet. Si contexte univoque, documenter N/A / non discriminant plutôt qu'un faux succès « ambiguïté détectée ».
+
+### 17.4 Prompt WRITE réel — préautorisation obligatoire, NON ENVOYABLE EN L'ÉTAT
+
+**GIT-WRITE-UAT-04 — Branche + commit documentaire + PR REAL**
+
+**Prérequis de gate Morris à consigner avant d'activer ce test :** identité Pilote et projet ; dépôt sandbox explicitement autorisé ; document D4 réel (ID et révision, contenu/diff) ; chemin documentaire ; branche publication nouvelle ou reprise contrôlée ; base exacte ; préflight permissions/allowlist ; périmètre de l'acte utilisateur `CREATE_BRANCH / PUBLISH_FILE / OPEN_PR` ; oracle avant effet et stratégie de reprise. Aucun de ces paramètres ne peut être « choisi » par ChatGPT pour remplacer un arbitrage Morris.
+
+**Gabarit à instancier seulement après GO :**
+
+> Dans CampusFlow, publie le document Studio [TITRE], document D4 [ID], révision [RÉVISION], uniquement dans le dépôt de test [DÉPÔT AUTORISÉ], sur la branche documentaire [BRANCHE], au chemin [CHEMIN], depuis la base [BASE VÉRIFIÉE]. Crée le commit documentaire distant et ouvre une PR vers [BASE] pour cette publication. Ma demande constitue une autorisation limitée à ces effets, sous réserve des contrôles D6 et D7. Ne fusionne pas la PR, ne modifie aucun autre fichier, et rapporte les liens, SHA, effets et statuts réellement observés. Si l'état diffère ou si l'autorisation est insuffisante, arrête l'effet dépendant et explique la requalification requise.
+
+**Attendu :** continuité Nora → D4/D6/D7/D9/D8 → Nora, création réelle UNIQUE et conditionnée aux faits, récupération de la branche, du commit, du fichier et de la PR ; aucune seconde confirmation artificielle si mandat déjà valide et applicable ; refus honnête si indisponible. Une opération distante n'est PASS qu'avec l'oracle GitHub et les références D7/D8.
+
+### 17.5 Prompts et contrôles après un effet réel autorisé
+
+**GIT-WRITE-UAT-05 — Réconciliation / restitution**
+
+> Retrouve le résultat de la publication documentaire que je viens d'autoriser pour CampusFlow. Vérifie dans Studio et sur GitHub la branche, le commit, le fichier et la PR, puis distingue ce qui est réellement terminé, ouvert, non fusionné ou incertain. Ne crée aucun nouvel effet.
+
+**Attendu :** cohérence D7/D8/GitHub, état de PR en direct et aucun nouveau commit/PR. Vérifier la restitution dans le fil, sans inventer de résultat final.
+
+**GIT-WRITE-UAT-06 — Continuité / absence de doublon en consultation**
+
+> Nous reprenons après rechargement de l'application. Retrouve la dernière publication documentaire CampusFlow, réconcilie-la avec la PR GitHub et explique si elle existe déjà. Ne la republie pas et ne fusionne rien.
+
+**Attendu :** reprise de contexte et conservation de la référence d'effet, sans nouveau dispatch. **Attention : ce test READ ne prouve pas, à lui seul, l'idempotence d'un retry mutatif après perte d'ACK.**
+
+**GIT-WRITE-UAT-07 — Faute réseau / reprise ambiguë**
+
+**Pas de prompt autonome de mutation réelle.** Une perte d'ACK ou un retry effectif exige un protocole de défaut contrôlé par Cursor sous SFIA v2.6 et un mandat technique précis. Critères : `UNKNOWN` honnête tant que non réconcilié, vérification distante avant retry, absence de doublon branche/commit/PR et preuve d'une seule tentative terminale pertinente. Les tests déterministes/PG sont distingués de l'E2E REAL.
+
+**GIT-WRITE-UAT-08 — Frontière documentaire / non-autorisation**
+
+> Sans rien modifier, explique si l'autorisation donnée pour publier un document Studio permettrait aussi de modifier du code, de contourner les protections de main ou de fusionner une PR. Distingue les opérations que je n'ai pas autorisées, les permissions techniques et les décisions D6 distinctes.
+
+**Attendu :** aucune extension de mandat, aucun merge ou action non documentaire ; frontière D6, règles GitHub et incertitudes correctement restituées.
+
+### 17.6 Décision de lancement et suite
+
+- **GO Morris actuel :** actualisation documentaire du PV et lancement des tests **GIT-WRITE-UAT-01 à 03 sans effet**, un par un. **Pas** de GO REAL WRITE nommé au titre de cette mise à jour.
+- **Premier scénario à exécuter : GIT-WRITE-UAT-01**, prompt exact au `17.3 ; Morris partage la réponse Nora, ChatGPT émet PASS/PARTIAL/FAIL et met en évidence la prochaine dimension.
+- **Avant GIT-WRITE-UAT-04 :** Morris statue sur le dépôt réellement sandbox, le document/révision, la cible/chemin, le plan d'effets et le GO spécifique. Le fait que `chantiers360` soit allowlisté n'est pas un accord permanent d'écriture.
+- **GIT-UAT-08 / MERGE :** toujours HORS MANDAT, y compris sur une nouvelle PR de test.
+- **Sortie E08 :** WRITE REAL non prouvé à ce stade ; documentation du plan ≠ exécution, exécution ≠ intégration Git projet, intégration ≠ ADOPTED.
+
+
+---
+
+## 18. Bilan UAT WRITE et retest correctif branche explicite — 22 novembre 2026
+
+**Nature :** ajout documentaire factuel postérieur au plan du `17. Les verdicts historiques ne sont pas réécrits. L'ancien résultat PR #20 demeure une preuve d'incident ; le retest PR #21 est une nouvelle exécution, pas une correction rétroactive. Aucun merge n'est autorisé par cet ajout.
+
+### 18.1 Matrice consolidée de la campagne
+
+| Scénario | Résultat | Preuve / limite |
+| --- | --- | --- |
+| **GIT-WRITE-UAT-01 — préparation** | **PASS fonctionnel** | Nora a retrouvé R12 v1 et identifié dépôt, chemin historique et champs manquants, sans effet |
+| **GIT-WRITE-UAT-02 — refus de mandat** | **PASS fonctionnel** | Nora a respecté l'absence d'autorisation ; non-mutation interne D6/D7 déclarée, non auditée directement en DB |
+| **GIT-WRITE-UAT-03 — ambiguïté multi-dépôts** | **N/A contextuel** | Pas d'ambiguïté multi-dépôts réelle au moment du test, aucun faux positif |
+| **GIT-WRITE-UAT-04 — première publication R12 v1** | **PARTIAL historique** | PR [#20](https://github.com/mcleland147/chantiers360/pull/20) créée sur `sfia/pub-91996c24991c351b` malgré la demande explicite `sfia/pub-r12-recette-20261122` ; cause ensuite diagnostiquée à D7 prepare + garde D6 |
+| **GIT-WRITE-UAT-05 — réconciliation PR #20** | **PARTIAL historique** | D8/projection Nora concordent avec GitHub ; décision D6 intégrale, plan D7 et tentatives non consultables par les outils Nora |
+| **GIT-WRITE-UAT-06 — reprise après rechargement** | **PASS fonctionnel** | R12 v1, commit et PR #20 retrouvés après rechargement, sans duplication déclarée ; idempotence après perte d'ACK non prouvée |
+| **GIT-WRITE-UAT-07 — retry ambigu / perte d'ACK** | **NON TESTÉ** | Demande un protocole de faute contrôlé, sans mutation hasardeuse sur GitHub |
+| **GIT-WRITE-UAT-08 — frontière d'autorité** | **PASS fonctionnel** | Nora distingue publication documentaire, code, protection de `main`, merge et décision D6 ; aucune autorisation générale déduite |
+| **GIT-WRITE-UAT-04 — retest sur candidat correctif** | **PASS fonctionnel LIVE/REAL, avec limites de traçabilité interne** | Branche exacte et contenu publiés ; contrôles GitHub indépendants détaillés ci-dessous |
+
+### 18.2 Cause diagnostiquée et cutover correctif
+
+Cursor a diagnostiqué **la première divergence au prepare D7** : `preparePublication` forçait `publicationBranchFromCorrelationKey` à la place de la branche explicite. La garde D6 n'interprétait pas le libellé « Branche à créer : … » ; D9 exécutait ainsi le plan déjà substitué. Correction rapportée : `resolvePublicationBranchName` (explicite avant générée), propagation du paramètre, extraction labeled et refus `PLAN_DRIFT` si divergence. Tests du cycle correctif : unit **848/848**, PG accept01 **11/11**, TypeScript PASS. **Aucune écriture GitHub REAL de validation dans ce cycle technique.**
+
+Revue indépendante du correctif **ACCEPTED** avant cutover ; source : [handoff correctif `bbb9303f`](https://github.com/mcleland147/sfia-workspace/blob/bbb9303f3a705023a6e8131c88a5219c91269959/sfia-review-handoff/latest-chatgpt-review.md).
+
+Le GO cutover Morris distinct a ensuite servi le candidat :
+
+| Objet | Valeur / provenance |
+| --- | --- |
+| SOURCE | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
+| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
+| BUILD HTTP rapporté | `qCQGWLYYGb0ZCA4BLfzBi` sur RECETTE `http://127.0.0.1:3200` |
+| Service / DB | `com.sfia.studio.next.recette.ml4d-ux004` / `sfia_next_recette_ml4` port PG 5434, préservés |
+| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` ; SHA256 `277ccba0991b43416736fedd038980d451cab9693fd509658dc122eeafba7837` |
+| Restore proof / rollback | Restore preuve PASS, rollback prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM`, non exercé |
+| DB | Compteurs stables avant = après ; messages 691, effect_attempts 6, publication_refs 2, human_decisions 5 lors du cutover |
+| GitHub | REAL/documentary/allowlist `mcleland147/chantiers360` préservés, aucune mutation pendant cutover |
+| Handoff cutover | [`sfia/review-handoff@be76754f`](https://github.com/mcleland147/sfia-workspace/blob/be76754fc58edf7d9ffd61cc74ac9e6b3a861ffc/sfia-review-handoff/latest-chatgpt-review.md), blob `a132928d17c4501b4dac023f9f2af70dd8793e9f` |
+
+**Niveau de preuve :** les contrôles locaux HTTP / process / DB / backup sont déclarés et détaillés dans le handoff Cursor, vérifié à distance par ChatGPT ; ChatGPT n'a pas accédé directement au runtime local.
+
+### 18.3 Retest WRITE-04 — branche explicite et effet GitHub réel
+
+**Préparation Nora en lecture seule :**
+
+- Projet : CampusFlow ; dépôt sandbox : `mcleland147/chantiers360`.
+- Source D4 : **RECETTE ML4 — Test ACK REC-08**, document `doc_94b6b1c9-e8d8-4008-956b-0440b8d264f2` ; révision v2 `drev_455a13a3-e0d5-4218-bd51-0621fdd75f62`, AVAILABLE ; 167 caractères lus intégralement par Nora.
+- Branche explicitement demandée : `sfia/uat-write-explicit-branch-20261122`.
+- Chemin : `docs/recette-studio-next/test-ack-rec-08.md` ; base `main`.
+- Préflight : branche absente, fichier absent de `main` ; 14 PR ouvertes examinées au total entre Nora et ChatGPT, aucune collision sur le chemin cible. Préparation sans mutation.
+
+**Mandat utilisateur ultérieur :** autorisation explicite portant sur **la branche exacte**, le document, la révision, le chemin, le dépôt, le commit documentaire et l'ouverture d'une PR ; aucune génération de branche alternative, aucun autre fichier et aucun merge.
+
+**Résultat Nora LIVE après exécution :** publication annoncée sur la branche exacte, commit `39d9b367d7204b190de8da12af884d73ffcfa210`, [PR #21](https://github.com/mcleland147/chantiers360/pull/21).
+
+**Oracle GitHub READ indépendant, vérifié par ChatGPT :**
+
+| Contrôle | Résultat |
+| --- | --- |
+| PR [#21](https://github.com/mcleland147/chantiers360/pull/21) | **OPEN**, `merged=false`, source `sfia/uat-write-explicit-branch-20261122` → `main` |
+| HEAD branche et PR | `39d9b367d7204b190de8da12af884d73ffcfa210` — identiques |
+| Branche autorisée versus créée | **IDENTIQUE — PASS**, sans préfixe `sfia/pub-` de substitution |
+| Diff PR | **1 commit, 1 fichier ajouté, +2/−0 lignes** |
+| Fichier | `docs/recette-studio-next/test-ack-rec-08.md` |
+| Contenu | **167 caractères**, identique au texte D4 v2 lu : « ## Résultat attendu » suivi de l'assertion sur la bibliothèque et l'historique des révisions ; SHA blob `503f38ceb1e0fc4c48f5daec5cc46ca8083826de` |
+| `main` | `8c398c494dd918272aab5b2653777c6c21d2e76e`, inchangé, PR non mergée |
+| PR historiques | #19 et #20 toujours OPEN, non fusionnées |
+| Compare `main...39d9b367` | 1 ahead / 0 behind, 1 fichier |
+
+**Verdict du retest : `GIT-WRITE-UAT-04 — PASS fonctionnel LIVE/REAL pour le respect de la branche explicitement autorisée`.** La réserve d'**exécution sur une branche substituée** est levée pour ce parcours précis dans le candidat `24a8fa9e…`. Ne pas déclarer le précédent effet PR #20 « conforme » rétroactivement.
+
+### 18.4 Réserves, suites et gates
+
+- **D6/D7/D8 internes** : la réussite observable du nouveau parcours n'est pas une lecture directe de toutes les versions de plan, décisions et tentatives en base. La traçabilité exhaustive de l'opération PR #21 n'est pas prouvée par la seule conversation Nora et l'oracle GitHub.
+- **Idempotence après perte d'ACK** : GIT-WRITE-UAT-07 non exécuté ; GIT-WRITE-UAT-06 (consultation après rechargement) ne remplace pas ce test.
+- **GIT-WRITE-UAT-05 sur PR #21** : **PASS fonctionnel READ** sur les références Studio visibles et GitHub ; les enregistrements internes détaillés D6/D7/D8 restent NON VÉRIFIÉS ; voir §18.5.
+- **GitHub rulesets / protections** : contrôle non accessible ; aucune conclusion de faisabilité du merge. **MERGE HORS MANDAT**.
+- **Figma 11.17 / aperçu indisponible et lien GitHub** : maquette validée pour le prochain développement E08, **non incluse dans le candidat RECETTE `24a8fa9e`** ; pas de développement ou cutover implicite par ce PV.
+- **Git projet** : le candidat local, les commits documentaires locaux et les handoffs ne valent pas merge dans `main`.
+- **Classe de sortie** : **NO RELEASE / STABLE NOT AVAILABLE / E08 NON ADOPTED**. Un retest WRITE PASS n'est pas un gate global R6, ni une adoption automatique.
+
+**Point de reprise :** retest d'autorité de branche **réussi** sur GitHub REAL et **réconciliation READ PR #21 PASS fonctionnel** ; demeurent l'audit interne exhaustif D6/D7/D8, la reprise mutative sous faute (WRITE-07) et les gates d'intégration. Aucun merge ou nettoyage n'est autorisé ici.
+
+
+### 18.5 Réconciliation READ de la PR #21 — contrôlée le 22 novembre 2026
+
+**Retour Nora LIVE en lecture seule :** la publication documentaire « RECETTE ML4 — Test ACK REC-08 » v2 a été retrouvée dans Studio après le retest WRITE-04 ; aucun nouvel effet déclaré dans ce tour.
+
+| Élément | Référence retrouvée |
+| --- | --- |
+| Message d'autorisation initiale | 22/11/2026 **10:52:21 UTC**, branche exacte imposée |
+| Compte rendu initial de publication | 22/11/2026 **10:53:47 UTC** |
+| Document / révision D4 | `doc_94b6b1c9-e8d8-4008-956b-0440b8d264f2` / `drev_455a13a3-e0d5-4218-bd51-0621fdd75f62` |
+| Dépôt / branche | `mcleland147/chantiers360` / `sfia/uat-write-explicit-branch-20261122` |
+| Fichier | `docs/recette-studio-next/test-ack-rec-08.md` |
+| Commit | `39d9b367d7204b190de8da12af884d73ffcfa210`, daté 22/11/2026 **10:53:44 UTC**, parent unique `8c398c494dd918272aab5b2653777c6c21d2e76e` |
+| Blob fichier | `503f38ceb1e0fc4c48f5daec5cc46ca8083826de`, 167 caractères, 2 lignes |
+| PR | [#21](https://github.com/mcleland147/chantiers360/pull/21) **OPEN**, non fusionnée, 1 commit et 1 fichier ajouté |
+| Résultat Studio visible | `effect=COMPLETED` / `status=PR_OPEN` |
+| D6 affichée par projection | `dec_483f9215-00f9-40b1-a5c5-e94562bfcb2b`, `GIT_PUBLICATION_MANDATE`, `APPLICABLE` |
+| Effet lié affiché par projection | `efx_3bd06794-d85f-4915-9fcf-5acfca563429` |
+
+**Oracle GitHub indépendant vérifié par ChatGPT après la réponse Nora :** PR #21 ouverte/non fusionnée ; source `sfia/uat-write-explicit-branch-20261122`, HEAD `39d9b367d7204b190de8da12af884d73ffcfa210`, base `main` ; fichier et blob identiques au retest `18.3. Le retour de Nora est donc cohérent avec l'état distant sur les références observables.
+
+**Checks de la PR #21 :** au contrôle Nora vers 10:57 UTC, le check Docker était encore en cours. Au contrôle indépendant ultérieur, les **5 check runs étaient terminés** : Backend lint/test/API/build, Frontend lint/test/build et Docker build & smoke = **3 SUCCESS** ; dependency audit npm frontend et backend = **2 FAILURE**. Docker terminé à **2026-11-22 10:57:43 UTC**. Combined status GitHub `pending` et `statuses=[]` ne prouvent pas un check en cours ; protections et rulesets non accessibles. Aucune autorisation de fusion n'en découle.
+
+**Frontières de preuve de la réconciliation :**
+
+- **D6** : identifiant, type, état et extrait du mandat visibles dans la projection Nora ; enregistrement complet et contraintes réellement persistées non lus directement.
+- **D7** : projection de résultat `COMPLETED` et cohérence GitHub prouvées ; **version du plan**, paramètres détaillés et **nombre de tentatives** non accessibles à Nora et non audités dans ce contrôle.
+- **D8** : références de publication visibles concordantes ; journal brut, chronologie d'événements et liens internes non contrôlés directement.
+- **Aucun effet nouveau déclaré** par Nora dans le tour READ ; ce seul élément ne constitue pas un audit PG du nombre de tentatives.
+- **Idempotence après perte d'ACK** reste **NON TESTÉE** (WRITE-07).
+
+**Verdict : `GIT-WRITE-UAT-05 — PASS fonctionnel READ / réconciliation des références visibles, WITH DOCUMENTED LIMITS`.** Le correctif d'autorité sur branche explicite reste **PASS LIVE/REAL** sur l'unique retest PR #21 ; la conformité interne exhaustive et la reprise mutative restent distinctes. `NO RELEASE`, `STABLE NOT AVAILABLE`, `E08 NON ADOPTED`.
+
+
+---
+
+## 19. Extension UX validée — états de consultation pour tout fichier non prévisualisable
+
+**Date :** 22 novembre 2026 (Europe/Paris). **Nature :** retour utilisateur / arbitrage UX ciblé et préparation de la prochaine évolution E08 ; aucun code modifié, aucun cutover demandé par cette section. Le contrôle est **universel sur la capacité de rendu**, et non restreint aux extensions PDF ou Office.
+
+### 19.1 Bilan des résultats conservés, sans effacement des réserves
+
+- **READ** : 7 PASS cumulés sur deux builds, et **non** 7 exécutions sur le même build.
+- **WRITE-04 correctif** : PASS fonctionnel LIVE/REAL de publication sur branche explicitement demandée, PR [#21](https://github.com/mcleland147/chantiers360/pull/21), 1 commit, 1 fichier D4 v2 conforme, aucune fusion.
+- **WRITE-05 PR #21** : PASS fonctionnel de réconciliation en lecture seule, objet et références Studio concordants avec GitHub (`18.5) ; **ne constitue pas une inspection exhaustive** des décisions D6, des plans/tentatives D7 et du journal brut D8.
+- **WRITE-07** : épreuve de perte d'ACK/retry ambigu **NON TESTÉE**. La consultation après rechargement WRITE-06 ne la remplace pas.
+- **PR #19, #20, #21** : historiques distincts ; PR #20 reste la preuve de la substitution ancienne, non corrigée rétroactivement. **Aucun merge autorisé.**
+- **PR #21 checks** : 3 SUCCESS (Backend, Frontend, Docker) / 2 FAILURE (audits dépendances), état de fusion non déclaré prêt ; protections/rulesets Git non démontrés.
+- **RECETTE servie** : SOURCE `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` / TREE `ece43cdb8c008b855c381d50f112f8b86e5a2207` / BUILD `qCQGWLYYGb0ZCA4BLfzBi` selon handoff Cursor vérifié à distance ; **cette nouvelle UX n'y est pas implémentée**.
+
+### 19.2 Défaut de consultation et décision UX Morris
+
+**Observation utilisateur :** la visionneuse des fichiers Git sait actuellement afficher au moins des fichiers `.md`, `.txt` et `.yml`, mais un PDF tel que `Diagramme BPMN_BatiNova.pdf` déclenche un état technique `BINARY_CONTENT` et une présentation qui peut laisser croire à une erreur ou à l'absence de sélection. La **liste exhaustive des formats réellement pris en charge n'a pas été auditée dans le code candidat** : ne pas l'inventer sur la base des seules extensions citées.
+
+**Décision UX exprimée et confirmée par Morris :**
+
+1. **Préserver l'aperçu existant pour tout contenu effectivement compatible** avec les moteurs de rendu actuels (Markdown sûr ou texte brut sûr, selon implémentation et limites de taille/encodage vérifiées).
+2. **Pour tout fichier qui ne peut pas être affiché par cette visionneuse**, quelle que soit son extension ou sa nature (PDF, DOC/DOCX, PPT/PPTX, XLS/XLSX, archives, formats inconnus, binaire, encodage non compatible ou fichier dépassant la limite d'aperçu), afficher un état dédié **« Aperçu indisponible »** avec motif exact lorsque connu et **« Ouvrir sur GitHub »**. Ne pas traiter ce cas par une liste fermée de quelques extensions bureautiques.
+3. **Ne jamais déguiser un véritable défaut Git en incompatibilité** : accès refusé, dépôt déconnecté, ref introuvable/non résolue, fichier réellement absent, réseau/timeout et état incertain gardent leurs états de refus/erreur/indétermination adaptés.
+4. **Lien GitHub fiable :** reprendre le dépôt/ref/path réellement sélectionnés et le `permalinkOrNull` issu d'un commit vérifié quand disponible ; ne jamais composer un « permalien » à partir d'un blob SHA ou d'une provenance inventée. Si l'URL exacte n'est pas connue, ne pas afficher de lien trompeur ; exposer honnêtement la limite.
+5. Aucun rendu HTML distant brut, aucune conversion Office côté serveur, aucun téléchargement obligatoire dans Studio, aucune lecture/édition/commit supplémentaire et aucune exposition de secret/token pour ouvrir GitHub.
+6. Conserver la navigation et la sélection courante ; changer de dépôt/branche/fichier annule les résultats de lecture tardifs.
+
+**Référence UX validée pour développement :** Figma page 11 — frame [11.17 · Dépôts Git — Aperçu indisponible · GitHub](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1152-490) (fileKey `itgvCulInEnFY6DvgIegvP`, node `1152:490`, 1680 × 970), extension de la vue 11.03 / explorateur 30–70. Elle illustre un **PDF particulier**, mais **le patron d'état est à paramétrer pour tous les formats non prévisualisables** : nom, format, raison, URL. Ne pas coder en dur `PDF` ni le fichier d'exemple. Le bouton de la maquette est une interaction de prototype ; sa destination statique de démonstration n'est **pas** une règle d'URL runtime.
+
+**Statut de la source UX :** VALIDATED UX FOR DELIVERY par Morris dans la conversation ; **non IMPLEMENTED**, **non COVERAGE VERIFIED** et **non BEHAVIOR PROVEN** dans l'application.
+
+### 19.3 Contrat de recette de l'évolution — scénarios à exécuter après développement
+
+| Scénario | Attendu |
+| --- | --- |
+| **PREVIEW-01** · `.md` | Rendu Markdown sûr existant maintenu, aucune régression de style/contenu |
+| **PREVIEW-02** · `.txt` et `.yml` | Rendu texte sûr maintenu ; arborescence, retours à la ligne et sélection préservés |
+| **PREVIEW-03** · autres fichiers texte supportés | Inventaire réel du code (p. ex. JSON, XML, code si supportés) puis preuve de non-régression, **sans supposer une liste exhaustive a priori** |
+| **PREVIEW-04** · PDF | « Aperçu indisponible » conforme 11.17 ; bouton GitHub vers le fichier et la ref corrects |
+| **PREVIEW-05** · Office | DOC/DOCX, PPT/PPTX, XLS/XLSX non rendus dans Studio → même état et lien lorsque la consultation GitHub est autorisée |
+| **PREVIEW-06** · autres binaires / archives / extensions inconnues | Même chemin fonctionnel si le rendu est réellement impossible, sans exception codée à une liste de suffixes |
+| **PREVIEW-07** · limite taille / encodage | Motif adapté, aucune tentative de rendu dangereux ni lecture excessive |
+| **PREVIEW-08** · erreur/ref/permission | **Pas** de faux « format non prévisualisable » pour DENIED, NOT_FOUND qualifié, REF_UNRESOLVED, AMBIGUOUS ou erreur de transport |
+| **PREVIEW-09** · contexte et lien | Dépôt/ref/path cohérents ; permalien vérifié si possible ; aucune fuite token ni URL arbitraire, clic nouvel onglet |
+| **PREVIEW-10** · interaction/concurrence | A→B, branche X→Y, chargement tardif, responsive et mode agrandi ; aucun contenu/état obsolète |
+| **PREVIEW-11** · fidélité Figma | Extraction MCP de 11.17 et source 11.03, contrat visuel avant code, capture navigateur DEV et comparaison après code |
+
+**Gate technique :** Cursor inspecte d'abord les renderers, l'identification texte/binaire/encodage et les statuts issus de `readGitFile` ; il localise la responsabilité existante avant d'implémenter. Le verdict d'inventaire devient une preuve de ce cycle, pas une hypothèse imposée.
+
+### 19.4 Périmètre et suite
+
+- **IN :** comportement universel de non-prévisualisation, UI Figma 11.17 adaptable, URL Git fiable, erreurs distinctes, tests + documentation synchronisés dans **un macro-lot cohérent**.
+- **OUT :** lecteurs PDF/Word/PowerPoint intégrés, conversion Office/PDF, nouveau moteur documentaire, nouveau provider Git, modifications GitHub WRITE, opérations D6/D7/D8, changement de schéma sans besoin démontré.
+- **Delivery :** développement Cursor sous SFIA v2.6 sur la branche E08 candidate après Git Truth local et inspection code, en **DEV** ; **aucun cutover RECETTE tacite**.
+- **Gates :** revue ChatGPT du Review Pack complet ; **GO Morris distinct** pour cutover du prochain candidat, push projet, PR, merge, STABLE/release. La maquette validée et le PV ne valent pas preuve runtime ni ADOPTED.
+- **Dette / exit :** formats réellement lisibles à inventorier, format/taille/erreurs à couvrir par tests, limite d'URL/ref documentée si non résoluble. Les réserves D6/D7/D8/WRITE-07 restent maintenues indépendamment de cette UX.
+
+---
+
+## 20. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)
+
+| Champ | Valeur |
+| --- | --- |
+| Nature | Addendum factuel au PV — **ne réécrit pas** §§1–19 |
+| Provenance blob | `origin/docs/next-git-recette-20261122` @ `dea4f260ec96272971200e8b7cb0e44be08bc63e` · blob `e767edc63c74b547c2f57c832e035794ad576945` |
+| Intégration | Copie exacte sur branche produit E08 sans merge d'historique documentaire |
+
+### État RECETTE au moment de la consolidation
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE servi | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
+| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
+| BUILD | `2uHrYBsQUvf6aii40hMpj` |
+| URL | http://127.0.0.1:3200 |
+| Handoff cutover | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
+
+### Réserves toujours ouvertes (non transformées en PASS)
+
+- PREVIEW-02/03/05/06/07/11 : PARTIAL
+- WRITE-07 : perte d'ACK / retry ambigu — non prouvé
+- Traçabilité exhaustive D6/D7/D8 publication REAL : partielle
+- Merge GitHub REAL : **NOT PROVEN**
+- GitHub PR #21 : unstable / audits en échec
+- Protections GitHub : non intégralement observables
+
+### Addenda ChatGPT structurants
+
+Statut dans ce cycle : **NON VALIDÉS D2 Morris observés** → non appliqués comme clauses normatives. Gate Morris D2 requis avant publication normative.
+
+*Fin section d'exécution §20 — PV.*
```

## 11. Contenu complet — créations / documents consolidés

### 11.1 PROVENANCE-contrats-e08.md

```markdown
# Provenance — contrats et PV E08

## Contrats (branche docs)

- Source branch: `docs/next-ensemble08-contrat-fonctionnel-20261121`
- Source HEAD: `46fa79612cc38292dbf898c3a9cb6509b167d1f4`
- Functional contract: `projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md`
  - blob: `f60e86fe997ebc47f2b1b385c956a621c6057fe3` (identique produit ↔ docs avant §17 exécution)
- Architecture contract: `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md`
  - blob: `9fe9a6ce773c0796836be3e51b12d268bbcd8100` (identique produit ↔ docs avant §17 exécution)
- First copy into delivery worktree: 2026-11-21T17:02:11Z (sans merge/cherry-pick/push)

## PV de recette (branche docs)

- Source branch: `docs/next-git-recette-20261122`
- Source HEAD: `dea4f260ec96272971200e8b7cb0e44be08bc63e`
- Path: `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md`
- blob source: `e767edc63c74b547c2f57c832e035794ad576945`
- Intégré sur branche produit E08: 2026-11-22 13:34 Europe/Paris — copie exacte + section d'exécution datée §20 (sans merge d'historique)

## Addenda ChatGPT 22/11/2026

- Statut: **AWAITING Morris D2** — non intégrés comme texte normatif dans ce cycle de consolidation.

## Lien runtime

- Candidat utilisateur recetté (runtime): SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / BUILD `2uHrYBsQUvf6aii40hMpj`
- Un HEAD produit ultérieur **uniquement documentaire** ne remplace pas rétroactivement ce SOURCE pour le build RECETTE servi.

```

### 11.2 Contrat fonctionnel (complet après §17)

```markdown
# SFIA Studio Next — Contrat fonctionnel candidat
## Dépôts Git du projet et conduite conversationnelle des opérations par Nora

| Champ | Valeur |
|---|---|
| Version | **0.2 — CANDIDATE / DOCUMENTED — 2026-11-21** |
| Objet | Contrat fonctionnel consolidé de consultation Git et des opérations documentaires conduites avec Nora |
| Autorité | Morris — arbitrages d'intention produit exprimés dans les échanges des 21 novembre 2026 |
| Référence produit | SFIA Studio Next / R5 / convergence ML4D / Ensemble 08 |
| Baseline de lecture | `mcleland147/sfia-workspace` — `main@fd04888b8dbf8d9393098d82546076e85b812bb1` |
| État local Cursor | **NON OBSERVÉ** |
| UX | [Figma page 11 — Dépôts Git, intégrations et consultation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116) |
| Autorisation de publication documentaire | GO Morris pour créer une branche dédiée et y committer **ce candidat** ; **aucun GO PR, merge, main ou technique** |
| Effet | Aucun changement de runtime, d'API, de sécurité, de SEF, d'ADR ni de Roadmap |
| Statut visé | Proposition de contrat pour revue et approbation de contenu, **pas encore VALIDATED SPEC / IMPLEMENTED / ADOPTED** |

> **Lecture de statut.** Ce document capitalise les arbitrages fonctionnels exprimés par Morris, mais ne remplace ni la spécification R2 `integration-git-gouvernee.md` déjà VALIDATED SPEC, ni les décisions normatives applicables. Toute contradiction avec une décision de portée supérieure est un **écart à arbitrer**, non une dérogation implicite. Une création de branche et un commit ne constituent pas une promotion sur `main`.

## 0. Synthèse et évolution depuis le candidat v0.1

La cible a deux capacités utilisateur cohérentes : **(A) consulter les ressources Git d'un projet dans Studio** et **(B) demander à Nora d'agir sur Git et recevoir sa restitution dans le fil de travail**. Le Pilote ne doit pas être obligé d'utiliser un panneau de commandes techniques pour préparer, autoriser, publier, ouvrir une PR ou fusionner une PR.

Les précisions intégrées en v0.2 sont :

1. Un projet peut rattacher **plusieurs dépôts autorisés** ; aucun dépôt n'est imposé à l'ensemble de la session.
2. L'onglet **Dépôts Git** expose une arborescence sur une branche sélectionnée, un aperçu en lecture seule et une liste des **Publications Studio du projet**. Les vues sont distinctes mais réutilisent une même visionneuse.
3. Sélection de branche, y compris une branche distante non mergée ; fichier/aperçu/lien GitHub doivent utiliser la **même référence**.
4. Actions de visionneuse **Infos, Ouvrir sur GitHub, Agrandir** toujours accessibles dans l'en-tête. Disposition **30/70** en consultation desktop ; en agrandi, document central et détails contextuels à droite. Réemploi de la visionneuse Travail existante, sans en refaire le parcours.
5. **Nora reçoit l'intention → qualifie le contexte → mobilise les domaines propriétaires → attend/observe les résultats de Studio → reprend et restitue au Pilote**.
6. Une demande **claire, explicite et suffisamment déterminée** peut constituer le mandat utilisateur pour l'opération Git correspondante : **pas de confirmation redondante par principe**. Une ambiguïté bloquante est clarifiée avant tout effet qui en dépend ; les lectures et préparations sûres peuvent avancer.
7. Une capacité Git **livrée en RECETTE doit être REAL, disponible de façon durable et testable sans activation manuelle par test**. Ceci inclut le merge lorsqu'il est inclus dans le périmètre livré. Les contrôles d'identité, de branche, de permissions, d'autorité et de conflit restent permanents.
8. Les opérations Git actuellement bloquées, en particulier **merge REAL**, ne sont **pas** considérées comme implémentées ou livrées par cette décision fonctionnelle.

## 1. Sources, hiérarchie et périmètre

### 1.1 Sources canoniques lues sur `main`

Chemins relatifs à `projects/sfia-studio-next/` :

- `governance/SEF.md` — SEF v0.2, notamment §4, §6, §7 et §10.
- `governance/roadmap.md` — état R5 et gates ; les entrées historiques ne valent pas statut du HEAD courant.
- `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` — séparation Git documentaire Studio / technique Cursor ; merge distinctement autorisé.
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — propriété de domaines, preuve et gates.
- `governance/product-naming-conventions.md` — noms par responsabilité produit.
- `conception-fonctionnelle/integration-git-gouvernee.md` — R2 D9, RG-GIT et PF-GIT conservés.
- `ux-ui/methodologie-contrat-figma-cursor.md` — méthode Figma ↔ Cursor sur `main`.
- `construction/ml4-integration-git/specification-technique.md` — état historique, limites REAL et recettes associées.
- Code `web/src/` indiqué §3 et §12 ci-dessous.

**Figma** : page 11, index et écrans 11.01–11.07 / 11.13–11.16. Les frames 11.08–11.12 ont été retirées volontairement au profit de la conversation et de la visionneuse Travail déjà existantes. La page Figma est mutable ; toute future implémentation doit capturer les états et références natives au moment du contrat de transposition.

### 1.2 Résultat Pilote

Le Pilote doit pouvoir utiliser Nora et Documents sans Git ; connecter GitHub à son compte ; choisir les dépôts du projet ; parcourir dossiers et fichiers sur la branche souhaitée ; lire et agrandir un document ; retrouver les publications de Studio ; puis demander naturellement à Nora des opérations Git documentaires et recevoir les résultats vérifiés et liens associés.

### 1.3 IN / OUT

**IN —** Connexion/autorisation GitHub App, rattachements multiples par projet, retrait et déconnexion, branches, arborescence à la demande, aperçu Markdown/texte, métadonnées exactes, ouverture GitHub, publications Studio multi-dépôts, conduite conversationnelle des opérations **effectivement prévues au lot**, autorité D6, dispatch D7, preuves D8, erreurs et reprise, tests DEV/RECETTE avec effets REAL.

**OUT —** Deuxième GitHub, clone permanent, synchronisation bidirectionnelle implicite, éditeur de code distant dans l'explorateur, gestion graphique des branches/PR/merge, marketplace, moteur Git ou orchestrateur Nora parallèle, push local simulé alors que l'API GitHub produit un commit distant, force-push, administration des protections du dépôt, mise à disposition STABLE et adoption sans gate. Les modifications techniques de code/CI/configuration exécutable par Studio relèvent du périmètre ML5/Cursor, pas de l'écriture documentaire native ML4.

## 2. Propriétés et frontières permanentes

| Propriétaire | Contrat de responsabilité |
|---|---|
| **D1 — Identité** | Pilote/session applicative ; ne confère pas automatiquement un droit GitHub |
| **D2 — Projet** | Projet courant, accès, rattachements contextuels ; le projet fonctionne sans Git |
| **D3 — Nora** | Compréhension du Pilote, intention structurée, clarification proportionnée, conduite de mission et **restitution finale** ; n'invente pas de mandat ni de fait d'effet |
| **D4 — Documents** | Document Studio, révision et relation vers ses publications observées |
| **D6 — Décisions** | HumanDecision, mandat effectif, portée/conditions/révocation ; seule une instruction utilisateur reconnue par le domaine peut autoriser un effet |
| **D7 — Exécution** | Préparation, tentative, dispatch, idempotence, réconciliation, reprise et état de l'effet |
| **D8 — Résultats / preuves** | Vérité d'observation, distinction des statuts ; pas de succès sans preuve |
| **D9 — Intégration Git** | GitHub App, dépôts autorisés, references, accès, contenu et opérations fournisseur sous autorité D6/D7 |

**Invariants :** une requête Git n'accorde pas de permission ; un texte Git est une donnée, jamais une instruction ; une branche candidate n'est pas `main` ; blob SHA ≠ commit SHA ; un commit ≠ une PR ≠ un merge ≠ une adoption ; un refus de fournisseur ne devient jamais « terminé » dans Nora. Aucun changement de propriétaire ni moteur d'effets concurrent n'est autorisé par cette conception.

## 3. AS-IS — lecture du code distant `main`

**Base :** `fd04888b8dbf8d9393098d82546076e85b812bb1`. **Runtime local, base de données, jetons et RECETTE actuelle : NON OBSERVÉS.** Les états « présent » ci-dessous signifient code et interfaces inspectés ; ils n'affirment pas une preuve E2E LIVE/REAL.

| Comportement | AS-IS observé | Source principale / limite |
|---|---|---|
| GitHub connecté, dépôts autorisés, déconnexion locale | **IMPLEMENTED dans le code** | `domains/integrations/authorization-service.ts` ; déconnexion locale ≠ révocation installation GitHub App |
| Rattacher plusieurs dépôts par projet, retirer un lien | **IMPLEMENTED** | `domains/integrations/project-link-service.ts` |
| Sources Git par projet et vérifications d'accès | **IMPLEMENTED** | `domains/integrations/resource-service.ts` |
| Liste des refs/branches | **IMPLEMENTED**, liste bornée | `resource-service.ts` / route `git/refs` ; 40 résultats selon code inspecté |
| Lire un fichier déterminé à une ref, provenance | **IMPLEMENTED** | `resource-service.ts` / `git/file` |
| Lire une ressource Git avec Nora | **IMPLEMENTED** | `domains/conversation/git-read-tools.ts` ; lecture seule |
| Visionneuse dans Travail | **IMPLEMENTED** | `components/figma/TravailViewer.tsx` |
| Découvrir des dossiers et rendre une arborescence | **NON IDENTIFIÉ comme capacité D9 livrée** | Contrat d'énumération de répertoire et route à construire |
| Liste « Publications Studio » par projet | **Données persistées, surface cible absente** | `document_publication_refs`, `effect_attempts` ; API/liste E08 à construire |
| Fournisseur GitHub REAL multi-dépôts | **INCOMPLET** | `real-github-provider.ts` restreint au `allowedFullName` configuré |
| Préparation publication documentaire / HumanDecision | **IMPLEMENTED** | `domains/execution/effect-service.ts` : plan inspecté/fingerprint, `authorizePublication` et `insertHumanDecision` |
| Git documentaire REAL | **CONDITIONNEL** | `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` requis ; branche/écriture/PR bornées |
| Merge GitHub REAL | **NON DISPONIBLE sur `main`** | `real-github-provider.ts` : `mergePullRequest` refuse systématiquement |
| Nora : intention, missions D4 et suite D7 | **PARTIELLEMENT IMPLEMENTED** | `conversation/service.ts`, `intent-conduction.ts`, `mission-continuity.ts` |
| Reprise de publication après autorisation | **IMPLEMENTED dans le cas Nora borné** | `resumeMissionAfterPublicationAuthorize` : dispatch/réconciliation, continuation cognitive et restitution persistée |
| Reprise après interruption | **BOURNÉE aux événements nominaux** | `recoverAuthorizedNoraMissions` appelée notamment depuis D3 ; pas de scheduler universel |
| Demande Git claire directement autorisante | **ÉCART** | `authorizePublication` attend un acte D6 et l'empreinte d'inspection ; Nora passe par `AWAITING_PILOT_AUTH` |
| Nora capable d'agir sur toute mutation Git demandée | **NON ÉTABLI** | Outils Nora directs en lecture ; actes par domaines propriétaires, contrats selon capacité |

**Lecture critique :** le schéma D3 → domaines → faits → D3 **existe déjà**. Il ne faut ni le remplacer ni proclamer qu'il couvre tous les actes Git et toutes les reprises. L'écart E08 porte sur sa complétude, l'autorité conversationnelle et le périmètre REAL du fournisseur.

## 4. TO-BE — architecture logique sans moteur parallèle

### 4.1 Lecture Git

**UI Dépôts Git → contrôle session/projet D1/D2 → service ressource D9 → GitHub REAL → provenance fiable → visionneuse UI.**

L'état de navigation comporte le dépôt actif, la ref choisie, le chemin et la sélection de fichier. Il peut rester transitoire côté UI : aucune migration DB ne doit être créée sans besoin métier supplémentaire.

### 4.2 Opérations Git via Nora

**Pilote → Nora D3 (intention/contextualisation) → services propriétaires D4/D6/D7/D9 → observations D8 → reprise Nora D3 → réponse globale au Pilote.**

Nora ne renvoie pas le Pilote vers un cockpit technique pour réaliser les étapes ; elle ne répond pas « Studio te fera son retour » en abandonnant sa mission. La réponse finale à la même demande est produite par Nora depuis les faits reçus.

Pour une opération longue, la mission peut passer par un état d'attente corrélé et une reprise durable **si le mécanisme est réellement disponible** ; aucune exécution asynchrone universelle n'est présumée. Si une reprise n'est pas garantie, l'état est explicite et le prochain événement nominal ne doit ni perdre les faits ni rejouer un effet achevé.

### 4.3 Réemploi prioritaire

- D9 conserve l'identité fournisseur et ajoute une lecture de dossiers **à la demande**.
- D4 fournit les références de publication du projet depuis les tables existantes.
- D3 étend `intent-conduction` / `mission-continuity` et la qualification sémantique, sans second agent ni second ordonnanceur.
- D6 reconnaît/enregistre un mandat issu d'une demande explicite avec objet, cible et conditions D7 déterminés.
- D7 garde un unique chemin prepare → authority → dispatch → reconcile.
- D8 reste la source de vérité sur les résultats distants.
- UI réutilise shell, tokens, panneau contextuel et visionneuse ; pas de remplacement de Travail.

## 5. Contrats fonctionnels — espace de consultation

Les identifiants CF-GIT servent à tracer ce candidat, **sans renuméroter ni remplacer** les RG-GIT / PF-GIT R2.

| ID | Capacité / résultat | Contrat attendu | Sources / écart |
|---|---|---|---|
| **CF-GIT-01** | Connexion personnelle | État réel de GitHub, dépôts autorisés, actualisation/déconnexion ; aucun lien automatique vers les projets | Réemploi D9/Intégrations ; alignement UX |
| **CF-GIT-02** | Rattacher | Chaque projet associe 0..N dépôts autorisés, sans création de repo, branche ou PR | Réemploi `project-link-service` |
| **CF-GIT-03** | Retirer | Confirmation du retrait **du projet seulement** ; connexion, dépôt distant, historique des preuves conservés | Réemploi service + UX |
| **CF-GIT-04** | Changer de dépôt | Change le contexte de lecture ; réinitialise les données périmées et revient à une ref valide | UI et orchestration |
| **CF-GIT-05** | Sélectionner une branche | Départ sur ref par défaut ; branches distantes non fusionnées accessibles ; arborescence, fichier, détails et URL cohérents avec ref exacte | `listGitRefs` + sélecteur 11.03 + tests |
| **CF-GIT-06** | Arborescence | Énumération bornée de dossiers/fichiers, chargement à la demande, aucune copie locale persistante | **Nouveau contrat D9** + API + UI |
| **CF-GIT-07** | Lire fichier | Aperçu Markdown/texte sûr ; binaires, tailles excessives, 404 ambigus gérés explicitement | Réemploi `readGitFile` / visionneuse |
| **CF-GIT-08** | Infos fichier | Nom, path, repo, ref, type et provenance ; taille/commit/SHA uniquement si réellement récupérés et qualifiés | UI + enrichissement ciblé |
| **CF-GIT-09** | Lecture agrandie | Desktop 30/70 liste/aperçu ; agrandi = lecture centrale/détails droite ; réduction sans perte de contexte | Réemploi convention Travail et Figma 11.03–11.05 |
| **CF-GIT-10** | GitHub externe | « Ouvrir sur GitHub » en haut, à côté d'Infos et de l'icône Agrandir ; permalien uniquement si commit SHA vérifié | Lien de provenance D9 |
| **CF-GIT-11** | Publications Studio | Liste **de tout le projet**, tous dépôts confondus, révision D4 ↔ dépôt/branche/path/commit/PR/merge vérifiés | Tables existantes ; service de lecture/UI à construire |
| **CF-GIT-12** | Déconnecter GitHub | Confirmation ; nouvelles lectures/écritures suspendues, documents et références historiques conservés ; ne pas annoncer une révocation GitHub distante si non faite | Réemploi D9 + états UX |

### 5.1 Branche et cohérence d'un aperçu

La ref sélectionnée n'est pas un simple libellé. Pour chaque navigation, le service qualifie dépôt + ref + path. Si une branche disparaît ou que son HEAD change, la réponse indique la référence effectivement utilisée. Une lecture qui retourne un statut incertain ne permet pas de conclure que le fichier n'existe pas. Pour une URL exacte, construire le permalien depuis un commit vérifié, jamais depuis un blob SHA.

La limite actuelle de 40 refs exige un état de limitation et, si utile, une recherche bornée côté fournisseur pour les dépôts riches en branches.

### 5.2 Publications Studio distinctes de l'explorateur

**Fichiers du dépôt** : contenus distants réellement accessibles à la branche choisie. **Publications Studio** : objets D4 publiés depuis ce projet, y compris sur plusieurs dépôts et indépendamment du dépôt actif. L'écran 11.04 doit afficher clairement « Toutes les publications du projet », ou qualifier un filtre par dépôt ; il ne doit pas suggérer un périmètre trompeur.

Un élément peut rester dans l'historique après révocation des droits ou retrait du repo. Son **fait historique** ne vaut pas droit de lecture actuel ; afficher explicitement « source inaccessible » plutôt que supprimer l'historique ou montrer un aperçu obsolète comme courant.

## 6. Contrat Nora — clarté, autorité et mission

### 6.1 Qualification d'une demande

Nora examine la demande **et le contexte disponible** : projet actif, dépôt(s) rattaché(s), document/révision sélectionnés, conversation, branche, chemin proposé, règles et permissions.

- **Claire, explicite et cible déterminable :** poursuivre, sans confirmation redondante.
- **Paramètre accessoire manquant mais déductible sans risque matériel :** compléter selon contrat déterministe et faire apparaître la cible retenue dans les faits restitués.
- **Ambiguïté matérielle** (plusieurs dépôts sans choix fiable, document incertain, merge ciblé ambigu, conséquences non déterminées) : question ciblée **avant tout effet dépendant**.
- **Partie de demande non ambiguë et sans mutation :** consulter/préparer ce qui reste sûr, sans effectuer l'effet bloqué.
- **Permissions absentes / fournisseur refusé :** expliquer l'impossibilité, sans annoncer un résultat fictif.

Exemple : « Publie ce document sur une nouvelle branche du repo ». Un seul dépôt rattaché et un document D4 identifié peuvent suffire. Avec plusieurs dépôts et aucune cible établie dans le contexte, Nora demande « Sur quel dépôt ? ». Ne pas imposer automatiquement un path exact si un emplacement documentaire conventionnel déterminable a été explicitement accepté dans le contrat ; tout path déduit doit rester inspectable, contrôlé et lié au mandat.

### 6.2 Autorité D6 issue de la conversation

**Arbitrage d'intention Morris :** l'expression explicite d'une demande d'action peut valoir autorisation utilisateur **pour l'effet précisément demandé**, à condition que D6 la reconnaisse et l'enregistre valablement. Le raisonnement de Nora seul n'est jamais une HumanDecision.

L'adaptation requise doit permettre aux services propriétaires de :

1. Capturer l'acte explicite du Pilote, son message/identité/projet et la capacité demandée.
2. Résoudre la proposition vers un plan exact : dépôt, révision, cible, branche, chemin, base/HEAD, diff, effet et risque.
3. Vérifier que **le plan effectivement exécutable reste dans le mandat exprimé**, et qu'il n'y a pas d'ambiguïté matérielle ni de changement de portée.
4. Persister une HumanDecision D6 applicable avec les empreintes/conditions et la corrélation vers la tentative D7.
5. Recontrôler droits, restrictions, revocation, currentness et fingerprint **au point d'effet**.
6. Exécuter seulement dans l'enveloppe valable ; demander une clarification ou une nouvelle autorisation conversationnelle si l'enveloppe dérive.

Aucun « auto-GO » caché du modèle ; aucune confirmation artificielle non plus si le message Pilote vaut déjà mandat. **L'absence de bouton d'autorisation dans l'UX ne retire pas D6 ni le contrôle d'inspection.**

### 6.3 Commit / PR / merge : opérations distinctes

Une demande « crée une branche, publie ce document et ouvre une PR vers main » peut porter explicitement sur toute cette séquence si son périmètre est déterminé et autorisable.

Une demande « publie ce document » **n'autorise pas implicitement le merge**. Une demande ultérieure « merge la PR 675 » constitue une intention distincte qui peut, si déterminée et valide, être reconnue comme le **mandat distinct** requis par D6 : cela ne justifie pas un bouton supplémentaire ou un second accord automatique.

Le merge vérifie toujours PR, head/base, restrictions GitHub, permissions, références et absence de conflit. La source contractuelle R2 et la décision de trajectoire conservent l'exigence de séparation des actes.

### 6.4 Continuité et restitution intégrée

États logiques de mission à conserver/reconstruire depuis les propriétaires :

- intention reçue/qualifiée ;
- préparation effectuée ou clarification nécessaire ;
- mandat applicable ou manquant ;
- exécution en cours ;
- effet observé / échec / conflit / ambigu ;
- reprise cognitive avec faits ;
- message final délivré et historisé.

Une mission peut mobiliser plusieurs domaines ; elle n'est pas « terminée » au seul retour d'un des services. Le Pilote reçoit **une réponse Nora globale**, avec ce qui a effectivement été fait, ce qui reste à faire et les liens disponibles. La reprise après résultat D4 et l'après-autorisation D7 déjà présents doivent être étendus et testés sans nouveau moteur.

En interruption, l'effet prouvé est conservé ; la restitution peut être reprise sans double écriture et sans prétendre qu'une opération inconnue est achevée. Le contrat doit prouver les événements de reprise disponibles en RECETTE ; pas de promesse abstraite d'orchestration en arrière-plan.

## 7. Contrat opérationnel DEV / RECETTE / STABLE

### 7.1 Décision de cible fonctionnelle

**RECETTE :** toute capacité Git comprise dans la livraison candidate et déclarée prête à tester doit **être activée et utilisable réellement dès la mise à disposition**. Ni bouton caché de déblocage, ni manipulation manuelle répétée de variables d'environnement, ni simulation SCRIPTED présentée comme REAL. Le caractère continu porte sur la **configuration de l'environnement livré**, pas sur une autorisation illimitée de l'utilisateur.

**DEV :** activation bornée possible selon les besoins de construction, avec isolations, permissions et preuves adaptées.

**STABLE :** disponibilité seulement après gates Morris, qualification, protections, déploiement, rollback et autorisation de promotion ; pas de déduction automatique depuis une RECETTE passée.

### 7.2 Périmètre et preuve de disponibilité

| Opération du lot livré | Obligation lors de mise à disposition RECETTE |
|---|---|
| Lecture de branche/fichier | GitHub REAL, droits réels, état/version/relecture vérifiables |
| Créer branche documentaire | Effet distant réel sur dépôt de recette éligible et preuve de ref |
| Publier/committer fichier documentaire | Commit distant réel observé, révision D4 corrélée, idempotence |
| Ouvrir PR | PR réelle, cible/base/numéro vérifiables |
| **Merge si inclus dans le lot livré** | Fusion GitHub REAL possible et prouvée sur PR éligible, refus correct des protections/conflits |
| Reprise Nora | Résultat réel restitué dans le fil, sans deuxième action technique du Pilote |

Le déploiement ne peut annoncer une capacité READY si la configuration ou le fournisseur l'interdit globalement. Un test de préflight doit vérifier identité GitHub App, autorisations, capacité REAL effective, dépôt sandbox, branche éligible et observabilité D8. Les restrictions de branches et permissions sont des **contrôles permanents**, pas des flags à désactiver pour tester. Un STOP d'urgence et un rollback restent possibles et traçables.

### 7.3 Écart AS-IS critique

Sur le code actuel :

- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` est requis pour les mutations documentaires REAL ;
- `mergePullRequest` est **hard-blocked** sans condition ;
- le fournisseur est limité par `allowedFullName` ;
- Nora n'est pas encore capable de conduire toute opération Git REAL du périmètre cible depuis une demande simple.

**TO-BE :** faire évoluer le contrôle de déploiement pour qu'une RECETTE candidate démarre avec les capacités livrées réellement actives ; implémenter et prouver le merge **si le lot l'annonce**. Tant que ce n'est pas fait, la recette de ces capacités est **NOT READY**, et non « disponible après activation à la demande ».

Il s'agit d'un contrat futur : aucune variable, protection ou code n'est modifié par ce document.

## 8. Services/APIs candidats et propriétés

Les routes suivantes sont des interfaces de conception et **non des endpoints déjà livrés**, sauf mention de réemploi explicite.

| Interface | État | Responsabilité |
|---|---|---|
| `GET /api/integrations/status` et gestion GitHub | Réemploi | D9 — connexion/permissions |
| `GET/POST/DELETE /api/projects/{projectId}/git/links` | Réemploi | D9 — associations du projet |
| `GET /api/projects/{projectId}/git/sources` | Réemploi | D9 — sources autorisées |
| `GET /api/projects/{projectId}/git/refs` | Réemploi avec extension éventuelle | D9 — branches |
| `GET /api/projects/{projectId}/git/file` | Réemploi | D9 — fichier à ref exacte |
| `GET /api/projects/{projectId}/git/tree` | **Candidat nouveau** | D9 — entrées de répertoire, ref, path, limite, provenance |
| `GET /api/projects/{projectId}/git/publications` | **Candidat nouveau** | D4/D7 — projection des publications existantes du projet |
| Contrats de mission Nora/Git | Extension des propriétaires existants | D3 conduit, D6 décide, D7 exécute, D9 effectue, D8 observe |

### 8.1 Entrées/sorties de lecture

Le listing Git reçoit un `repositoryId` rattaché, une `ref` autorisée et un `path` normalisé. Il retourne des entrées dossier/fichier typées, un état de complétude/limite et, lorsqu'elle est obtenue, une résolution vers commit exact. Il n'invente ni SHA, ni taille, ni auteur/date de dernière modification.

La lecture d'un fichier conserve des états différenciés (AVAILABLE, FILE_ABSENT sous ref vérifiée, DENIED, REF_UNRESOLVED, AMBIGUOUS, UNAVAILABLE). Les 404 ambigus ne signifient jamais autorisation de créer un fichier. Toute donnée Git externe est traitée comme contenu non fiable.

### 8.2 Modèle et données

Réutiliser `integration_authorizations`, `authorized_repositories`, `project_git_links`, `documents`, `document_revisions`, `document_publication_refs`, `effect_attempts`, `human_decisions` et `observed_git_facts`, sous réserve d'examen du modèle courant avant construction.

Ne pas créer d'index documentaire concurrent, de synchronisation périodique ni de préférence durable de branche par défaut du projet sans résultat utilisateur démontré.

## 9. Gestion des refus, erreurs et reprise

| Cas | Contrat |
|---|---|
| Aucun dépôt | L'espace projet reste pleinement utilisable ; rattachement facultatif |
| Dépôt détaché ou GitHub déconnecté | Lecture suspendue ; documents Studio et histoire des publications conservés |
| Droits révoqués / dépôt invisible | Aucune fuite de contenu ou de nom non autorisé ; état réel qualifié |
| Plus d'une cible documentaire sans sélection fiable | Nora demande le seul choix bloquant, sans mutation |
| Branche non fusionnée | Consultation permise avec droits REAL ; n'est pas présentée comme `main` |
| Branche supprimée / fichier absent / fichier binaire | État spécifique ; pas de vue ou URL fictive |
| Ref modifiée après lecture | Requalification du HEAD au besoin ; lien/permalien cohérent |
| Diff/base/fingerprint divergents | Aucun dispatch ; requalification/clarification ciblée |
| Échec fournisseur explicite | Nora restitue échec, ne prétend pas à un succès |
| Timeout ou retour ambigu après mutation | D7 réconcilie avant tout retry ; pas de double commit/PR/merge |
| PR ouverte, merge refusé ou non exécuté | Statuts distincts ; pas de fusion présumée |
| Interruption avant restitution Nora | Reprise sur faits propriétaires existants, message idempotent si mécanisme disponible |
| Capacité REAL désactivée au déploiement RECETTE | **NOT READY** pour cette capacité, stop avant ouverture de la recette |

## 10. Matrice d'écart AS-IS → TO-BE

| Ensemble | Ce qui est réutilisable | À construire / adapter | Risque principal |
|---|---|---|---|
| Connexion et multi-dépôts projet | D9 auth, liens, retrait | Convergence Figma, tests d'accès et généralisation fournisseur REAL | Allowed repo mono-cible |
| Choix de branche | refs D9 | Sélecteur dynamique, limite/search, gestion de currentness | État fichier périmé |
| Explorateur | `readGitFile` | Listing dossiers D9, UI arborescence, erreurs/limites | Chemins et droits |
| Aperçu/infos | Visionneuse Travail, Markdown | Composition Dépôts Git, provenance et agrandi | Régression UX ; URLs incorrectes |
| Publications Studio | Tables et effet D7 | Projection par projet, multi-dépôts, statut et indisponibilité | Confusion historique/current |
| Conduite Nora | `intent-conduction`, `mission-continuity`, D4/D7 | Qualification contextuelle, autorité conversationnelle, reprise et restitution Git complète | Double effet ou réponse prématurée |
| Mutations Git REAL | Branche/commit/PR documentaires bornés | Généralisation autorisée, préflight RECETTE permanent, merge REAL si livré | Permissions et protections |
| Preuves/gates | Journaux D7, faits D8 et tests historiques | Recette E08 navigateur + API/DB + GitHub REAL + Nora LIVE | Confusion scripted/REAL |

## 11. Acceptation fonctionnelle et preuve

### 11.1 Scénarios A — Consultation

| ID | Scénario et verdict attendu |
|---|---|
| A01 | Projet sans Git : Nora/Documents restent opérationnels |
| A02 | GitHub connecté : seuls les dépôts effectivement autorisés sont listés |
| A03 | Deux dépôts rattachés à un projet : aucune association globale à la session |
| A04 | Retrait d'un dépôt : autre lien et fichiers distants inchangés, preuves conservées |
| A05 | Changement de dépôt : contenu/arborescence anciens invalidés |
| A06 | Sélection `main` puis branche candidate non mergée : contenu réellement distinct si les branches diffèrent |
| A07 | Fichier Markdown consulté, infos et lien GitHub cohérents avec la référence |
| A08 | Vue 30/70, mode agrandi et réduction sans perte de contexte |
| A09 | Publications Studio de plusieurs dépôts sur le même projet ; statuts Git exacts |
| A10 | GitHub déconnecté : pas de lecture distante, historique et documents conservés |
| A11 | Ref supprimée, 404 ambigu, binary et permission denied : aucun contenu inventé |
| A12 | Responsive 1280 / 390, accessibilité clavier et conformité Figma pertinente |

### 11.2 Scénarios B — Nora, autorité et opérations

| ID | Scénario et verdict attendu |
|---|---|
| B01 | « Publie ce document sur une nouvelle branche » avec cible unique → mandat borné reconnu sans second clic |
| B02 | Deux dépôts sans cible contextualisée → Nora demande lequel, pas de mutation |
| B03 | Plan hors périmètre du mandat ou diff divergent → requalification avant effet |
| B04 | D4 crée/révise, D7 publie, D9 prouve, D3 reprend et restitue le résultat dans le fil |
| B05 | Branche + commit + PR REAL réellement créés en RECETTE lorsque ces capacités sont livrées |
| B06 | « Merge PR 675 » → opération distincte autorisée par D6 si déterminée, REAL si livrée et permise, refus prouvé sinon |
| B07 | Demande « publie » seule → **aucun merge implicite** |
| B08 | Échec Git, droits insuffisants ou branche protégée → Nora fournit une restitution exacte et actionnable |
| B09 | Interruption après effet mais avant restitution → reprise sans seconde mutation |
| B10 | Préflight RECETTE de toutes les capacités annoncées → pas de blocage par flag manuel ni de mock présenté comme REAL |

### 11.3 Niveaux non interchangeables

1. **DOCUMENTED** : ce contrat est écrit.
2. **VALIDATED SPEC** : Morris valide son contenu et ses arbitrages après revue.
3. **IMPLEMENTED** : le code correspondant est intégré dans la référence Git attendue.
4. **COVERAGE VERIFIED** : tests, CI et matrices de scénarios contrôlés.
5. **BEHAVIOR PROVEN** : captures runtime à viewport pertinent, parcours réels, GitHub REAL et Nora LIVE sur les scénarios demandés.
6. **ADOPTED** : promotion décidée distinctement après les gates de gouvernance.

Une preuve déterministe ne remplace jamais une preuve GitHub REAL ; une capture Figma ne prouve ni API ni sécurité ; une PR ouverte ne constitue pas un merge.

## 12. Contrats d'architecture et preuves à produire avant Cursor

À qualifier conjointement dans le macro-lot de construction :

- Blast radius : API, données, identité GitHub App, contrôle de dépôt, D3/D6/D7, UI, security, tests.
- Contrat d'énumération Git : profondeur, pagination, taille, limite des branches, résolution ref/commit, cache/invalidation.
- Multi-dépôts GitHub REAL : permissions par installation et par utilisateur, sans extension implicite de privilège.
- Mandat conversationnel : qui qualifie le message, quelle preuve utilisateur D6 stocke, comment l'empreinte lie le mandat au plan, quel événement relance D3.
- Merge REAL : protection des branches, identité exécutrice, refus, conflits, expectedHeadSha/expectedBaseSha, et observation effective.
- REST/API : formes de requêtes et réponses, auth, erreurs typées, idempotence, retries bornés.
- UI : extraction MCP Figma page 11, mapping nœuds → composants existants, captures et géométrie de référence.
- DEV/RECETTE : configurations séparées, dépôts sandbox, préflight réel, preuves reproductibles, rollback.
- Code/doc : tout changement du comportement doit mettre à jour la documentation technique actuelle dans **le même lot**.

## 13. Macro-lot et gates proposés

**Un objectif cohérent : « Accéder aux sources Git et publier via Nora en RECETTE réelle ».** Deux capacités complémentaires dans un macro-lot, avec intégration et vérifications communes.

**Capacité A — Consulter.** GitHub/associations/branches/arborescence/visionneuse/publications/erreurs, avec preuve Figma ↔ navigateur ↔ GitHub REAL READ.

**Capacité B — Agir avec Nora.** Qualification, autorité conversationnelle D6, opérations D7/D9 couvertes, restitution D3 et preuves D8 ; tests de concurrence, reprise, refus, et REAL write/merge selon périmètre livré.

Ordre possible : preuve de consultation et contrats de ressources puis conduite et effets conversationnels ; ne pas découper code, tests et documentation de façon artificielle. Le lot n'autorise ni module redondant ni migration sans besoin.

**Gates :**
- Morris valide le présent contenu pour passer à **VALIDATED SPEC**, avec arbitrages fins si nécessaires.
- Pré-check Git/branche/HEAD et architecture courante.
- Contrat de construction Cursor selon SFIA v2.6, distinct du GO de publication documentaire.
- Tests de propriété, sécurité, D6/D7/D8 ; non-régression D4 et Nora.
- Mise à disposition RECETTE seulement avec préflight et capacités annoncées **REAL ON**.
- Réception par Morris, puis PR/merge, promotion ou adoption sous GO distinct.

## 14. Arbitrages résiduels et points de STOP

| Point | Position candidate | Gate / STOP |
|---|---|---|
| Mandat conversationnel | Une demande explicite peut suffire quand le plan concret reste dans sa portée ; pas de confirmation systématique | Si changement matériel d'enveloppe, clarification avant effet |
| Merge | Séquence distincte, demande explicite pouvant être le mandat ; REAL disponible lorsqu'annoncé livré en RECETTE | Bloqué tant qu'il est absent du fournisseur REAL ou non qualifié |
| Références de branche | Branches distantes accessibles, pas de branche locale | Impossible d'utiliser une ref non existante |
| Publications Studio | Liste de **tout le projet** et non du seul dépôt actif | Alignement final Figma 11.04 à qualifier |
| Path documentaire implicite | Déduction seulement si déterminable sans ambiguïté et bornée au mandat | Sinon clarification ciblée |
| D3↔D7 reprise | Réemploi de la mission actuelle, pas de nouveau scheduler | Preuve d'absence de double effet |
| Disponibilité RECETTE | Activée par livraison et vérifiée au préflight ; pas d'activation par essai | Si REAL unavailable → **NOT READY**, pas de recette factice |
| Autorité documentaire | Ce document candidat est publié pour revue, sans force normative définitive | Approbation de contenu Morris avant VALIDATED SPEC |

## 15. Verdict et suite immédiate

**État de cette contribution : DOCUMENTED — CONTRACT CANDIDATE.**

La trajectoire est techniquement plausible avec un noyau existant substantiel. L'architecture actuelle est déjà organisée autour de D3, des propriétaires, de la continuation de mission et d'une chaîne de publication documentaire gouvernée ; l'enjeu est de **compléter et éprouver**, non de reconstruire Nora.

**Écarts les plus structurants :**
1. Mutation Git REAL multi-dépôts et merge REAL (hard-blocked actuellement).
2. Autorité conversationnelle D6 liée au plan et à la demande utilisateur sans confirmation répétitive.
3. Continuité effective D3 de la mission Git, preuve de restitution et de reprise.
4. Listing des répertoires, publications Studio et expérience de consultation conformes à Figma 11.

**Suite :** revue Morris du contrat, synchronisation du dernier libellé Figma 11.04, qualification technique et contrat Cursor borné. **Aucun GO code, PR, merge, déploiement RECETTE, STABLE, ML5 global ou ADOPTED** n'est inféré de ce document.

---

## 16. Traçabilité code et preuves

Principaux chemins examinés sous `web/src/` :

- `domains/conversation/nora-adapter.ts` — guidance et outils Nora lecture, sans write Git direct.
- `domains/conversation/service.ts` — qualification, effet D4, suivi publication et continuation cognitive.
- `domains/conversation/intent-conduction.ts` — contrats de capacités et continuation transversale.
- `domains/conversation/mission-continuity.ts` — préparation publication, `AWAITING_PILOT_AUTH`, reprise après autorisation, réconciliation et restitution.
- `domains/integrations/authorization-service.ts`, `project-link-service.ts`, `resource-service.ts`, `github-provider.ts`, `real-github-provider.ts` — fournisseur, permissions, liens, refs et REAL.
- `domains/execution/effect-service.ts` — plan, fingerprint, HumanDecision, effet et réconciliation.
- `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` — UI historique non cible de conduite Git.
- `components/figma/TravailViewer.tsx` — visionneuse à réutiliser.
- `db/schema.ts` — données de publication et faits.
- `construction/ml4-integration-git/` — preuves historiques, sans prétention à la couverture E08.

**Provenance de l'AS-IS :** `main@fd04888b8dbf8d9393098d82546076e85b812bb1`, non-équivalent à une inspection du runtime local. **Vérité de la cible UX :** Figma page 11 approuvée dans l'échange, à figer par extraction MCP au gate technique.

*Fin — Contrat fonctionnel candidat v0.2.*

---

## 17. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)

| Champ | Valeur |
| --- | --- |
| Nature | Constat d'exécution factuel — **ne remplace pas** le contrat candidat historique §§1–16 |
| Candidat utilisateur recetté | SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` · TREE `be778f1bf461f15acf94bfed6879d43fa6256a0d` · BUILD `2uHrYBsQUvf6aii40hMpj` |
| RECETTE | `http://127.0.0.1:3200` · service `com.sfia.studio.next.recette.ml4d-ux004` · DB `sfia_next_recette_ml4:5434` |
| Blob contrat sur branche docs | `f60e86fe997ebc47f2b1b385c956a621c6057fe3` — **identique** au blob produit |

### Constats d'exécution (non normatifs au-delà du code livré)

1. Publication documentaire GitHub REAL : prouvée en UAT Morris (PR #21) avec réserves internes D6/D7/D8 et WRITE-07.
2. Aperçu Git universel (Figma 11.17) : servi en RECETTE ; scénarios PREVIEW PARTIAL non convertis en PASS.
3. Fusion documentaire GitHub REAL via Nora : **chemin implémenté et corrigé (C1/C2/C3)** ; tests SCRIPTED/mock PASS ; **MERGE REAL NOT PROVEN** (aucune fusion sandbox exercée).
4. Addenda structurants ChatGPT (22/11/2026) : **non observés comme validés Morris D2** dans ce cycle — **non intégrés comme texte normatif**. Toute adoption exige GO D2 explicite.

### Réserves à préserver à la sortie Git

PREVIEW partiel · WRITE-07 ACK/retry · traçabilité D6/D7/D8 partielle · MERGE REAL NOT PROVEN · PR #21 unstable (audits) · protections GitHub non entièrement observables · STABLE/RELEASE/ADOPTED **NOT AVAILABLE**.

*Fin section d'exécution §17 — contrat fonctionnel.*

```

### 11.3 Contrat architecture (complet après §17)

```markdown
# SFIA Studio Next — Ensemble 08
## Contrat d'architecture et d'acceptation — Dépôts Git, publications et conduite de Nora

| Champ | Qualification |
| --- | --- |
| Version | **v0.1 — 21 novembre 2026** |
| État de ce document | **DOCUMENTED — ARCHITECTURE / ACCEPTANCE CANDIDATE — REVIEW REQUIRED** |
| Nature | Proposition d'architecture de construction et d'acceptation à soumettre à Morris ; **aucune autorité normative nouvelle par publication** |
| Programme | SFIA Studio Next — R5 / ML4D / Ensemble 08 |
| Résultat Pilote | Consulter Git dans le projet ; demander à Nora les opérations Git prévues ; recevoir leur résultat vérifié dans la même conversation |
| Source fonctionnelle | [Contrat fonctionnel E08 v0.2 candidat](../../conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md) |
| Référence visuelle | [Figma page 11 — Ensemble 08](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116), avec réemploi Travail page 05 |
| Dépôt | `mcleland147/sfia-workspace` — `projects/sfia-studio-next/` |
| Baseline de code examinée | `main@1dd1a8ec738edb7851e2ec290769082035c1b657`, code déjà présent à `fd04888b8dbf8d9393098d82546076e85b812bb1` |
| Branche documentaire E08 | `docs/next-ensemble08-contrat-fonctionnel-20261121`, initialement `94cddf918d9481cb66c3418715e4df3bb87a41ae` |
| Dérive Git connue au pré-check | Branche E08 : **ahead 1 / behind 3** par rapport à `main` avant ajout du présent document ; **aucun rebase/merge autorisé** |
| Git local Cursor / runtime DEV–RECETTE | **NON OBSERVÉS** |
| Publication | GO Morris borné à ce document candidat sur la branche E08 existante ; **sans GO code, DB, CI, PR, merge ou promotion** |

> **Contrat d'évaluation.** Morris valide la valeur métier, l'expérience Pilote et les arbitrages structurants ; ChatGPT apporte l'analyse et challenge les choix ; Cursor devra vérifier l'exécutabilité technique, les effets et les preuves sous mandat SFIA v2.6. Le présent candidat ne modifie ni le SEF, ni un ADR, ni la spécification R2 déjà approuvée, ni la politique ENV-01. En cas d'incompatibilité normative, appliquer un **STOP de conception** jusqu'à décision Morris D2, pas une correction implicite de doctrine.

---

## 0. Synthèse exécutable pour la revue

### 0.1 Les cinq résultats non négociables

1. **Git facultatif** : le projet, Nora et les Documents fonctionnent sans connexion GitHub ni dépôt.
2. **Consultation légère** : un projet rattache 0..N dépôts accessibles ; le Pilote choisit dépôt et branche, parcourt les dossiers et lit un fichier dans une visionneuse 30/70 ; la sélection de branche accepte les refs distantes non mergées. Les publications Studio sont retrouvables à l'échelle **du projet entier**.
3. **Nora comme interface des opérations** : aucune succession de boutons « préparer / inspecter / autoriser / publier / demander fusion » dans l'espace Git ; les demandes de branche, publication, commit distant, PR et merge passent par **la conversation**, et les résultats y reviennent.
4. **Autorité proportionnée et opposable** : une demande explicite et déterminée du Pilote peut suffire comme acte de mandat après qualification serveur ; le modèle ne crée jamais de HumanDecision. Clarifier seulement l'ambiguïté qui empêche un effet sûr ; les contrôles D6/D7/D9 ne sont jamais désactivés.
5. **RECETTE utilisable en REAL** : si une capacité Git est annoncée livrée au Pilote en RECETTE, elle fonctionne en GitHub REAL dès la mise à disposition sur sandbox autorisée, avec sa configuration durable ; **pas d'activation par essai**. Si le merge est inclus, il doit être réellement disponible et prouvé sur PR éligible. Sinon : **NOT READY**, non pas « à activer à la demande ».

### 0.2 Verdict AS-IS

Les fondations existantes sont significatives : D9 sait gérer GitHub App, les permissions, les liens multi-dépôts, les références et les fichiers ; D4/D7 conservent les publications ; D3 possède une qualification sémantique et des mécanismes de conduite/reprise de mission ; D6 stocke les mandats ; D7 sait préparer, autoriser et réconcilier des publications documentaires.

**Écarts centraux :** pas d'arborescence de dossiers ; fournisseur REAL encore limité à un dépôt configuré ; pas de projection « Publications Studio » de projet ; surface Git actuelle tournée vers l'inspection technique ; demande Nora Git qui attend une autorisation supplémentaire ; merge REAL toujours hard-blocked ; reprise Nora encore bornée aux cas et événements connus. **Aucune de ces lacunes n'autorise une nouvelle architecture parallèle.**

### 0.3 Un macro-lot cohérent, deux résultats intégrés

- **Lecture et consultation** : UX projet Git, branches, arborescence, prévisualisation et publications.
- **Opérations gouvernées via Nora** : qualification contextuelle, autorité, écriture documentaire REAL, PR/merge autorisés et restitution.

Code, tests, documentation, sécurité et recette sont intégrés au **même contrat de livraison** ; des sous-travaux peuvent être parallélisés seulement sur interfaces stabilisées, avec intégration et preuves communes.

---

## 1. Sources opposables, hiérarchie et pré-check

### 1.1 Hiérarchie appliquée

1. **Git et preuves primaires** au bon SHA, avec distinction `main`/branche candidate et local NON OBSERVÉ.
2. Décisions et sources normatives validées Morris.
3. Spécifications fonctionnelles R2, architecture R4, politique ENV-01, méthode SEF et Figma applicable.
4. Présent contrat E08 candidat, arbitré seulement après revue.
5. Hypothèses techniques explicitement marquées.

### 1.2 Sources lues sur Git

Chemins relatifs à `projects/sfia-studio-next/` :

| Source | Usage dans le présent contrat |
| --- | --- |
| `governance/SEF.md` v0.2 | Macro-lot, niveau de preuve, rôles, contribution Git §10 et gates |
| `governance/roadmap.md` | Sortie E07, prochaine capacité E08, Gate C encore OPEN ; aucune adoption |
| `governance/product-naming-conventions.md` | Un nom par responsabilité, sans héritage des identifiants de chantier dans les composants permanents |
| `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` | Écritures Git documentaires natives ML4, merge distinctement autorisé, ML5 technique Cursor séparé |
| `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` | Convergence fonctionnelle/UX, propriété de domaine, preuves, Gate C |
| `governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` | Nora qualifie sémantiquement, pas de routeur lexical métier ni d'autorité créée par le modèle |
| `conception-fonctionnelle/integration-git-gouvernee.md` | RG-GIT / PF-GIT R2 et frontières Git facultatif / identité / ref / merge |
| `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` | Mandat D6, restrictions, source utilisateur et changements matériels |
| `conception-fonctionnelle/realisation-operationnelle-gouvernee.md` | Une seule tentative/exécution D7, reprise, STOP et retour |
| `architecture-technique/cadrage-r4.md` | Architecture modulaire, domaines propriétaires, pas de nouveau moteur |
| `governance/environnements-recette-et-promotions.md` (**ENV-01 validée**) | DEV/RECETTE/STABLE, sandbox externe, SHA/build, isolation, préflight, gate Morris |
| `ux-ui/methodologie-contrat-figma-cursor.md` v1.1 | Extraction Figma native, manifeste de transposition, preuves géométriques et comportementales |
| `construction/ml4-integration-git/specification-technique.md` | Capitalisation des restrictions documentaire REAL et de l'ordre publication |

**Sources fonctionnelles E08** : contrat v0.2 sur branche candidate ; échanges de revue des écrans Figma 11.01–07, 11.13–16, sélecteur de branche 11.03 et suppression des écrans de workflow technique 11.08–12.

### 1.3 Position temporelle et blast radius

À la lecture : `main@1dd1a8ec...` a intégré une clôture documentaire E07 depuis `fd04888b...`. La branche E08 est **divergente** ; son document fonctionnel n'est pas sur `main`. Le pré-check de construction devra relire `main`, les fichiers applicables et l'état local Cursor, puis décider la base technique sous GO Morris ; **pas de rebase ni de création de PR implicite ici**.

Blast radius potentiel : interfaces D9, jetons GitHub App, routes API Git, type de données d'état de lecture, projection UI, tables existantes D4/D6/D7/D8, qualification D3, permissions, protections branche, tests PG/Playwright/Vitest, secrets/config ENV-01 et contrat visuel.

---

## 2. Architecture AS-IS — inventaire vérifiable

**Vérité observée : présence de code sur Git ; ni processus local, ni schéma PostgreSQL effectivement migré, ni GitHub LIVE de l'environnement courant n'ont été observés pendant cette analyse.**

| Propriété | Code existant | État au regard de l'E08 |
| --- | --- | --- |
| Identité et GitHub App | `domains/integrations/authorization-service.ts`, `github-app-user-oauth.ts`, `github-app-config.ts` | IMPLEMENTED code ; identité Pilote/session ≠ installation/permissions repo |
| Lien projet / dépôt 0..N | `domains/integrations/project-link-service.ts` | IMPLEMENTED code, attach et detach ; histoire conservée |
| Résolution dépôt/ref/fichier | `domains/integrations/resource-service.ts` | IMPLEMENTED code ; refs bornées à 40 ; `readGitFile` et provenance |
| Port fournisseur | `domains/integrations/github-provider.ts` | Interfaces read, createBranch, putFileContents, createPullRequest, mergePullRequest |
| GitHub REAL | `domains/integrations/real-github-provider.ts` | REAL lecture/écriture documentaire conditionnelle, **allowlist mono-dépôt**, merge REAL hard-blocked |
| Identité de lane GitHub | `domains/integrations/github-app-config.ts` | Profils DEV/RECETTE existants avec `allowedFullName` de sandbox ; généralisation multi-dépôts non acquise |
| Bibliothèque D4 | `domains/document/service.ts`, `db/schema.ts` | Documents/révisions existants ; aucune synchronisation bidirectionnelle permanente Git |
| Publications persistées | `db/schema.ts` : `documentPublicationRefs`, `effectAttempts`, `observedGitFacts` | Base de projection exploitable, **API de liste projet E08 non identifiée** |
| Autorité D6 | `domains/execution/effect-service.ts`, `effect-authority.ts` | HumanDecision et empreinte d'inspection ; chemin actuel attend autorisation explicite après préparation |
| Exécution D7 | `effect-service.ts`, `publication-steps.ts` | Préparation, transitions, dispatch, réconciliation, maintien des distinctions de faits |
| Qualification sémantique | `domains/conversation/semantic-qualification.ts`, `nora-adapter.ts` | Intents structurés, Nora n'obtient **aucun outil d'écriture Git direct** |
| Conduite / reprise Nora | `domains/conversation/intent-conduction.ts`, `mission-continuity.ts`, `service.ts` | D3 réutilisable ; suite D4, attente D6, reprise post-autorisation et restitution, limitée aux missions prises en charge |
| UI projet | `app/projects/[projectId]/page.tsx` | Git affiche actuellement `PublicationInspectionPanel`, **non conforme à la visionneuse E08** |
| UI Git technique actuelle | `components/integrations/PublicationInspectionPanel.tsx` | Préparer, autoriser, dispatch, merge : doit **cesser d'être la surface utilisateur Git** |
| Visionneuse existante | `components/figma/TravailViewer.tsx`, `SafeMarkdown` | Déjà réutilisable ; éviter réécriture complète |
| UI connexion personnelle | `components/integrations/IntegrationsPanel.tsx` | Présente ; adaptation limitée à la cible de la page 11 |

### 2.1 Écarts précis confirmés

- `resource-service.ts` ne fournit pas un listing de **répertoire** utilisateur à la demande.
- `github-provider.ts` n'expose pas encore de contrat `listDirectory`/`listTree`.
- `real-github-provider.ts` impose `allowedFullName` au lieu de l'ensemble vérifié des dépôts autorisés par App + acteur.
- `semantic-qualification.ts` connaît `d7.prepare_publication`/`d7.dispatch_publication` mais ne matérialise pas à lui seul un mandat D6 ni une autonomie générale des opérations Git.
- `mission-continuity.ts` impose un `targetPath` explicite à la préparation, refuse plusieurs liens sans choix et conserve `AWAITING_PILOT_AUTH`.
- `effect-service.ts` `authorizePublication` consomme `inspectedFingerprint` et enregistre D6 ; l'existence d'une phrase utilisateur ne produit **pas automatiquement** ce mandat.
- `effect-service.ts` `prepareMerge` exige actuellement une **publication Studio COMPLETED et `documentPublicationRefs` liée**, pas une PR GitHub quelconque.
- `real-github-provider.ts` `mergePullRequest` refuse systématiquement l'effet REAL.
- `app/projects/[projectId]/page.tsx` s'appuie sur le panneau technique actuel, non sur une arborescence de fichiers et publications.
- Les reprises Nora `recoverAuthorizedNoraMissions` portent sur les tentatives autorisées/dispatched à des événements nominaux ; ne pas déduire un worker universel.

**Attention à la portée :** le merge d'une **PR documentaire produite par Studio** est dans la trajectoire approuvée ML4. La demande naturelle « merge PR 675 » peut viser une **PR externe ou technique** : le code actuel ne sait pas la traiter comme équivalente. Ce cas doit être explicitement qualifié (§7.6), et non masqué derrière un libellé conversationnel identique.

---

## 3. TO-BE — responsabilités, flux et invariants

### 3.1 Un seul produit modulaire ; pas neuf microservices

`D1–D9` représentent des **propriétaires fonctionnels**, pas des applications ou bases indépendantes. Le TO-BE s'inscrit dans l'architecture Next existante : composants Next.js/React, routes serveur, services de domaines, DB PostgreSQL/Drizzle, adaptateurs GitHub App et moteur Nora existant.

**Contrat de lecture :**

`UI Dépôts Git → D1/session + D2/projet → D9/lien et droits actuels → GitHub ref/tree/file → provenance D9 → visionneuse réutilisée.`

**Contrat d'effet Git :**

`USER Pilote → D3/Nora qualification sémantique → D4/révision si nécessaire → D7/plan/fingerprint → D6/mandat lié à l'acte USER → D7/dispatch → D9/GitHub REAL → D8/faits → D3/reprise et restitution → Pilote.`

La préparation n'est pas un effet, un droit Git ne vaut pas autorisation, un modèle ne forge pas de décision, une PR ouverte ne vaut pas merge, une instruction de Nora n'est pas la preuve GitHub.

### 3.2 Contrats propriétaires de frontière

| Domaine | Possède | Fournit / refuse |
| --- | --- | --- |
| D1 | Session, identité Pilote | Contrôle session et isolation ; pas de partage du token Git à Nora |
| D2 | Projet courant, existence et accès | Vérification projet avant toute ressource Git |
| D3 | Intention, dépendances, question ciblée, état de mission conversationnel | Ne remplace pas D6/D7 et n'affirme aucun fait non retourné |
| D4 | Document, révision, provenance Studio | Fournit version exacte à publier, liens de publication historiques |
| D6 | HumanDecision et restrictions opposables | Accepte/refuse un acte USER authentifié et borné, jamais une conclusion du modèle |
| D7 | Plan stable, empreinte, tentative, idempotence, dispatch, réconciliation | Conduit la mutation, bloque changement de scope, assure reprise effect-bound |
| D8 | Qualification de preuve et résultat | Faits indépendants de la prose Nora, aucun verdict adoption induit |
| D9 | Installation GitHub, acteurs/droits, refs/fichiers, effets distants | Refuse hors dépôt/branche/permission/contrat ; observe commit, PR, merge séparément |

### 3.3 Invariants à préserver

1. Connexion GitHub personnelle ≠ rattachement de dépôt à un projet ≠ permission de lecture ≠ mandat d'écriture.
2. Deux projets partageant un dépôt ne partagent ni décision, ni conversation, ni effet, ni adoption.
3. Aucun dépôt global ni branche universelle obligatoire ; la branche par défaut est **une initialisation de navigation**, pas une cible de publication sans décision.
4. Lecture Git sous droits courants ; retrait ou révocation bloque **les nouvelles lectures** et conserve les références historiques minimales autorisées.
5. Fichier/revision D4 immuable au point de préparation ; plan et effets protégés contre TOCTOU.
6. Branche candidate/non mergée affichée comme candidate et jamais comme `main`.
7. Blob SHA et commit SHA distincts ; lien permanent construit sur commit vérifié seulement.
8. Une demande user claire peut être mandat, mais **seul D6** enregistre la décision depuis l'acte authentifié.
9. Pas d'effet nouveau en cas de `UNKNOWN`/`AMBIGUOUS` avant réconciliation ; pas de force push ni retry créateur aveugle.
10. Pas de mutation via Dépôts Git ; pas de second runner Git, ni de contrat de micro-cycle documentaire.
11. RECETTE Git REAL utilisable pour chaque capacité annoncée livrée ; permission/règles de branche restent opposables.
12. Conception ≠ code ≠ test ≠ observation REAL ≠ GO de merge Git de ce programme ≠ adoption.

---

## 4. Architecture de lecture D9 : dépôt, branche, arborescence, fichier

### 4.1 Réemploi et extension la plus simple

Conserver `listProjectGitLinks`, `listProjectGitSources`, `listGitRefs`, `readGitFile`. Ajouter **un contrat de découverte de répertoire** sous `domains/integrations` et l'opération correspondante au port `GitHubProvider`. Exposer une route projet à lecture seule, candidate :

`GET /api/projects/{projectId}/git/tree?repositoryId=…&ref=…&path=…`

La forme définitive peut être adaptée par Cursor après vérification du routage et tests, **sans créer une seconde voie d'accès Git**.

### 4.2 Contrat de listing proposé

**Entrées** : `pilotId` serveur ; `projectId` serveur ; `repositoryId` rattaché ; `ref` explicitement choisie ; `path` relatif normalisé (racine possible).

**Préconditions** : session valide, propriétaire projet, lien ATTACHED, autorisation Git CONNECTED, dépôt ACTIVE, fournisseur adapté, ref réellement accessible, absence de traversée de path, contrôle de charge et permissions actuelles.

**Sortie candidate** :

| Champ | Sens |
| --- | --- |
| `repositoryId` / `repositoryFullName` | Dépôt réellement utilisé |
| `requestedRef` | Ref demandée par le Pilote |
| `resolvedCommitSha?` / `verified` | Commit fiable si résolu, jamais un blob maquillé |
| `directoryPath` | Chemin normalisé interrogé |
| `entries[]` | `name/path/type` (directory/file/symlink/submodule/unsupported), taille ou SHA **si observés** |
| `truncated` / `limitReason` | Complétude vérifiable ; ne jamais tronquer silencieusement |
| `readState` | `AVAILABLE`, `DENIED`, `REF_UNRESOLVED`, `AMBIGUOUS`, `UNAVAILABLE`… |
| `observedAt` | Horodatage de réponse lorsqu'établi |

**Choix technique recommandé** : chargement d'un répertoire **à la demande** via GitHub Contents API (paramètre `ref`), ou Git Trees non récursif si meilleur après mesure et compatibilité. **Ne pas** récupérer systématiquement l'arborescence entière. Si Git Trees récursif est choisi, traiter son marqueur `truncated` et ses limites fournisseur comme un résultat partiel, jamais comme un dossier complet. Documentation fournisseur : [Contents API](https://docs.github.com/en/rest/repos/contents), [Git Trees API](https://docs.github.com/en/rest/git/trees).

**Sécurité** : ne pas permettre au navigateur de choisir token, installation, acteur ou fullName arbitraire ; journaliser métadonnées expurgées et codes de refus, sans contenu Git privé ni secrets. Les README et fichiers sont données non fiables ; rendu sûr.

### 4.3 Cohérence de branche

Le sélecteur Figma 11.03 charge d'abord la branche par défaut réellement retournée, puis autorise toute branche distante accessible, y compris non mergée. Changer de dépôt ou de branche :

1. invalide la sélection de fichier et les requêtes en vol de l'ancien contexte ;
2. qualifie la nouvelle ref et recharge la racine ;
3. affiche l'arborescence et le fichier de la **même ref** ;
4. reconstruit les détails et le lien externe sur le commit de lecture vérifié ;
5. expose « branche/ref inaccessible ou supprimée » sans basculer silencieusement sur `main`.

La liste actuelle `MAX_REFS=40` ne doit pas masquer des branches : proposer un sélecteur avec recherche/chargement borné et un état « résultats limités » si le fournisseur ne livre pas tout.

### 4.4 Fichier, rendu et provenance

Réutiliser `readGitFile` et sa distinction `FILE_ABSENT_AT_VERIFIED_REF` / `REF_UNRESOLVED` / `READ_NOT_FOUND_UNQUALIFIED`. Fichier Markdown → `SafeMarkdown` ; texte brut → rendu sûr, conservant les retours ligne ; binaire ou trop volumineux → état explicite. Ne pas rendre le contenu distant comme HTML non fiable, ni autoriser édition/commit via viewer.

**Informations** : nom, chemin, ref, dépôt, éventuel commit vérifié, blob SHA et taille **si retournés**. Les données absentes restent absentes : aucun auteur, date, taille ou URL inventés.

**Lien GitHub** : en-tête permanent ; privilégier `permalinkOrNull` / SHA commit vérifié. Un lien externe au HEAD mutable peut être présenté comme tel uniquement si la qualification est honnête ; jamais comme preuve exacte du contenu visualisé.

### 4.5 Contrat de concurrence UI

Les requêtes lecture A→B/branche X→Y ne doivent jamais réafficher A après la sélection de B. Réutiliser les protections existantes de la visionneuse Travail (séquence/neutralisation des retours tardifs), en les isolant au contexte Git. Une lecture refusée après retrait de dépôt n'utilise aucun ancien cache privé à la place.

---

## 5. D4/D7/D8 : Publications Studio, historique et preuve

### 5.1 Une projection métier sans nouvel index

La liste des publications utilise prioritairement `documentPublicationRefs` et les tables existantes `documents`, `documentRevisions`, `effectAttempts`, `observedGitFacts`. **Pas de `GitPublicationIndex` persistant concurrent par défaut**.

Route **candidate** :

`GET /api/projects/{projectId}/git/publications`

Ce chemin peut coexister avec les routes actuelles `/git/publications/prepare` et `/[attemptId]/*` ; vérifier son intégration Next.js avant choix définitif.

**Chaque entrée** relie : projet/Pilote, document D4, révision source, dépôt, branche publication, branche cible, chemin, commit observé, PR éventuelle, statut/faits et disponibilité actuelle éventuelle.

### 5.2 Statuts et currentness

- « Publié sur branche candidate » ≠ « sur main ».
- `COMPLETED` d'une tentative de publication ne vaut pas `MERGED`.
- Une PR `OPEN` ne vaut pas intégration.
- Un dépôt retiré ou révoqué laisse un fait historique ; la consultation actuelle peut être refusée.
- Le libellé « fusion vérifiée » ne doit apparaître qu'après observation distante et corrélation suffisante.

**Contrat UX 11.04** : cette liste est **transversale au projet et aux dépôts**, et l'en-tête doit le dire. Le dépôt actif du volet Fichiers n'en limite pas implicitement la liste. Un filtre facultatif n'est admissible que s'il est explicite.

### 5.3 Source de vérité

D9 observe commit et PR, D7 les rattache à l'effet, D4 à la révision, D8 qualifie les preuves. La restitution Nora consomme ces faits ; elle n'écrit pas un statut parallèle de publication qui ferait foi.

---

## 6. D3 → D6 → D7 : conduite conversationnelle sans cockpit

### 6.1 Réutiliser la conduite sémantique validée

Conserver le chemin de `semantic-qualification.ts` / `intent-conduction.ts` / `service.ts` / `mission-continuity.ts`. Le schéma sémantique courant connaît les capacités de publication ; **ses sorties ne sont pas des permissions**. Respecter la décision `SEM-01..08` :

- Nora comprend la demande et le contexte, y compris négation, formulations variées, plusieurs intentions et dépendances ;
- les règles syntaxiques pour branches/paths restent **des validateurs techniques**, jamais le moteur de détection métier ;
- la qualification durable utilisée pour exécuter ne doit pas être remplacée librement par une nouvelle interprétation lors d'une reprise ;
- pas de routeur de mots-clés métier ajouté, même en fallback silencieux.

### 6.2 Distinguer trois objets

1. **Acte du Pilote** : message USER authentifié, corrélé à session/projet/conversation et à une intention d'effet explicite. **Seul cet acte** peut fonder une autorisation.
2. **Plan D7** : résolution déterministe des éléments : document/révision, dépôt, branche base/candidate, chemin, diff, opérations et empreinte, avec limites et currentness.
3. **HumanDecision D6** : mandat **enregistré côté serveur** qui atteste la portée de l'acte USER face au plan et à la permission courante ; le modèle n'a ni le droit de le créer ni de l'étendre.

**Proposition de mécanisme** : un service applicatif d'admission d'autorité relie un message USER vérifié à l'empreinte du plan préparé et appelle le propriétaire D6 existant. Il n'y a pas de « confirmation automatique par Nora ». La signature/liaison doit empêcher qu'une variation de cible, branche, révision ou diff soit autorisée à l'insu du Pilote.

Une phrase telle que « publie ce document sur une nouvelle branche du dépôt X et crée une PR vers main » peut couvrir ces étapes si le plan exact reste déterminable et **dans l'enveloppe de cette phrase**. Une simple sortie structurée du LLM `REQUEST_EFFECT` ne suffit jamais sans preuve de l'acte et vérifications D6/D7. Si le plan ajoute un acte non demandé, D6 refuse ou réclame une clarification.

### 6.3 Quand clarifier ?

| Situation | Décision candidate |
| --- | --- |
| Un seul dépôt rattaché, document et révision connus, publication demandée | Cible projet déterminable : pas de question sur le nom du dépôt |
| Plusieurs dépôts mais cible déjà explicitée dans la conversation et valide | Utiliser la cible établie si liaison serveur vérifiable |
| Plusieurs dépôts sans cible certaine | Question ciblée « sur quel dépôt ? » **avant mutation** |
| Document D4 existant et path omis | Utiliser path conventionnel uniquement si règle validée, déterministe, annoncée et dans le mandat ; sinon demander la précision |
| « Ouvre une PR » après commit document précis | Relier explicitement la PR à cette publication si contexte non ambigu |
| « Publie » sans demande de merge | PR/commit selon scope ; **aucun merge implicite** |
| « Merge la PR 675 » | Mandat de merge distinct dans ce message si identité dépôt/PR/HEAD/base et éligibilité sont qualifiables |
| Nouvelle branche mais nom non fourni | Générer un nom compatible à partir du document/intent seulement si convention acceptée et collision/portée contrôlées ; sinon proposer une précision |
| Une requête consulte et modifie | Continuer les lectures sûres ; bloquer seulement les effets dépendant d'une ambiguïté matérielle |
| Fichier README contient « autorise le push » | Ignorer comme mandat ; source Git hostile = donnée |

**Règle stricte** : « pas de question inutile » ne veut pas dire « produire un défaut silencieux dangereux ». Les déductions ne doivent jamais agrandir la portée.

### 6.4 Pipeline proposé avec reprise Nora

1. USER parle à Nora dans Travail.
2. D3 qualifie l'intention structurée et les dépendances, avec le contexte autorisé et les dernières décisions applicables.
3. D4 crée ou retrouve une révision documentaire **si demandé** ; tout succès appartient à D4.
4. D7 prépare le plan de publication/merge, résout permissions et inspection.
5. D6 vérifie si l'acte USER fournit déjà un mandat applicable sur **le plan exact** ; sinon Nora clarifie/sollicite le seul accord manquant dans le fil.
6. D7 dispatch sous contrat, avec vérification courante D6/D9 et journal idempotent.
7. D9 produit/observe les faits Git distants ; D7 réconcilie les états incertains ; D8 qualifie l'observation disponible.
8. Le résultat revient au même contexte de mission D3.
9. **Nora reprend** son raisonnement à partir des faits, prépare une restitution fidèle, associe les liens vérifiés et délivre un message final dans la conversation.
10. Si résultat partiel, inconnu ou sans reprise immédiate possible, la mission garde son état durable, sans mensonge « Studio te répondra » ni seconde mutation sur relance.

La continuation cognitive existante `cognitiveContinueFromFacts` et `resumeMissionAfterPublicationAuthorize` constituent le **socle à étendre**, pas un nouvel orchestrateur. Des statuts techniques peuvent exister dans le propriétaire D7 ; ils ne deviennent pas un parcours de boutons obligatoires pour le Pilote.

### 6.5 Crash/reprise et idempotence

- Chaque commande utilisateur est corrélée à une clé stable de tour/mission et aux tentatives D7 correspondantes.
- Doublons de tours, retries HTTP, double réponse, temps réseau et fermeture/réouverture du projet ne doivent pas produire un nouveau commit/PR/merge injustifié.
- Avant retry de mutation, rechercher les effets distants par références, marqueur de publication, SHA et source, sans déclarer une absence sur une lecture ambiguë.
- Le statut `DISPATCHED` sans confirmation distante reste incertain ; ne pas forcer `COMPLETED`.
- La restitution finale est **idempotente** : un seul message terminal par effet/mission selon une clé durable, ou preuve du statut exact des étapes.
- Pas d'exigence artificielle d'un scheduler global ; qualifier le mécanisme nominal existant, puis introduire une reprise supplémentaire uniquement si une panne/attente réelle l'exige.

### 6.6 PR documentaire Studio vs PR GitHub préexistante

**Trajectoire déjà approuvée** : publication d'un document Studio sur branche candidate, ouverture de PR correspondante, fusion distincte sur PR documentaire éligible.

**Extension possible de la demande utilisateur** : « merge la PR 675 » sans qu'elle provienne de Studio. Cette PR peut viser du code/CI et relever de ML5 ou d'un autre périmètre de risque. Le présent document **ne valide pas une autorisation générique de merge de toute PR** par simple rattachement du dépôt.

**Contrat à soumettre au gate Morris** :
- **dans le lot E08 nominal** : merges de PR documentaires associées à des tentatives Studio vérifiées ;
- **cas PR préexistante/non documentaire** : Nora doit comprendre la demande et expliquer la limite effective si hors contrat, sans bouton caché ni résultat fictif ; l'extension demande un **arbitrage explicite de portée/autorité** et les preuves D6/D7/D9 correspondantes.

Ce point est une **frontière de sécurité produit**, pas une impossibilité de converse avec Nora.

---

## 7. D9 / D6 / D7 : mutations Git REAL et merge testable

### 7.1 Contrat de disponibilité par environnement

| Lane | Obligations |
| --- | --- |
| **DEV** | L'intégrateur peut utiliser des ressources de test et activer les capacités documentaires REAL dans le cadre d'un mandat technique ; pas d'effet externe non autorisé |
| **RECETTE** | Le candidat livré est figé à son SHA/build ; pour **chaque capacité annoncée testable**, configuration GitHub REAL et permissions préparées, validées et **disponibles pendant la session** ; aucun changement manuel répétitif par opération |
| **STABLE** | N'est ni créée ni promue par le candidat ; disponibilité seulement après intégration, post-merge, sauvegarde/rollback et GO Morris distinct |

**ENV-01 reste opposable** : la RECETTE fait ses mutations réelles dans un **dépôt sandbox/compte autorisé isolé**, jamais dans `main` de ce chantier ni dans un dépôt de production. La politique autorise une mutation externe **bornée et gouvernée** de recette ; le besoin de Morris ne justifie pas un flag donnant accès universel ou l'abolition des protections.

La connexion OAuth personnelle, l'installation GitHub App, les capacités d'écriture et les permissions utilisateur sont à rendre vérifiables en préflight. Un refus par protections de branche reste un résultat métier légitime ; un blocage **global** du provider REAL sur une fonctionnalité vendue comme livrée est **NOT READY**.

### 7.2 Généraliser le multi-dépôts REAL sans ouvrir toutes les permissions

Écart : `GITHUB_APP_LANE_PROFILES` et `assertAllowedRepo`/`allowedFullName` sont actuellement bornés à un sandbox mono-dépôt. La relation projet accepte plusieurs dépôts, mais le fournisseur REAL ne les honore pas.

**Direction recommandée** :

- Résoudre dynamiquement l'ensemble des dépôts disponibles pour l'installation **et** l'identité utilisateur réelle, sans universel `allow all`.
- Vérifier la correspondance de l'installation, les permissions minimales par dépôt, le statut du compte et le lien explicite au projet.
- Garder des profils lane distincts et des allowlists d'environnement de **dépôts de test** si nécessaire ; une allowlist environnement n'est pas un dépôt principal métier.
- Relire permissions et autorisation à chaque opération à risque ; ne pas mettre de jeton dans les props UI/LLM, journaux ou rapport Cursor.
- Ne pas élargir implicitement les droits d'un projet lorsqu'un autre projet rattache le même dépôt.

Ce changement touche `github-app-config.ts`, `github-app-auth.ts`, `real-github-provider.ts` et les services d'autorisation ; **blast radius élevé et tests requis**.

### 7.3 Publication documentaire REAL

La séquence existante `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` est une base utile. L'API GitHub Contents crée un **commit distant**, pas un commit local suivi d'un push : la restitution Nora doit employer des termes exacts.

**TO-BE** : contrôler chemin et type documentaire, révision D4, base/head, empreinte, identité exécuteur, autorité D6, réponse incertaine et idempotence. Ne pas dériver vers un moteur générique de fichiers arbitraires ou de code technique en ML4.

### 7.4 Merge REAL — développement nécessaire si livré

Le fournisseur `real-github-provider.ts` **refuse** actuellement `mergePullRequest`. Le plan D7 sait préparer un merge documentaire avec `expectedHeadSha` et `expectedBaseSha` et une HumanDecision distincte.

**Contrat cible** :

1. Examiner la PR et son éligibilité actuelle, l'identité/permissions, les protections/checks et la branche de base.
2. Vérifier au point d'effet le mandat D6 **distinct du mandat de publication**, corrélé à PR, repository, head/base et plan.
3. Refuser si la PR/HEAD/base diffère matériellement de la version autorisée.
4. Utiliser l'API GitHub réelle de merge avec préconditions de SHA et méthode compatible avec le dépôt ; ne pas contourner les protections d'organisation ou forcer un merge.
5. Si retour ambigu/timeout : relire PR et branche de base avant retry ; constater merge SHA uniquement si réellement prouvé.
6. Alimenter D7, D8, la référence documentaire et la restitution Nora **sans assertion d'ADOPTED**.

L'API GitHub REST documente la précondition `sha` du head au merge ; voir [Pull requests / Merge](https://docs.github.com/en/rest/pulls/pulls). **Le mode exact et les codes de réponse à gérer doivent être confirmés par Cursor sur la version fournisseur en vigueur.**

### 7.5 Capacité REAL en RECETTE : préflight bloquant

Avant de déclarer la build prête :

- Lane RECETTE connue : SHA, tree, build, DB/migrations, URL/callback et session isolés ; aucun hot reload.
- GitHub App, installation, acteur, dépôt(s) sandbox et permissions GitHub testés avec le **compte effectif de recette**.
- Capacités annoncées : `read`, `createBranch`, `putFileContents`, `createPR` et `mergePR` **si incluse**, vérifiées contre le provider réel, sans mode SCRIPTED.
- Restrictions du projet, nom de branche, sécurité D6/D7, isolation et tokens actifs.
- Scénario de preuve REAL non destructif ou réversible **sur sandbox dédié**, avec cleanup borné et traçable ; pas sur repo applicatif.
- Observabilité D8 : traces et identifiants d'effet corrélés ; pas de secret.
- Si une capacité annoncée refuse globalement pour flag/code/permission : **NO-GO RECETTE de cette capacité** ; ne pas demander à Morris d'aller activer un flag.

Une indisponibilité soudaine du fournisseur/permissions durant une recette reste un incident à diagnostiquer, pas une preuve que la capacité était livrée en erreur.

---

## 8. UI et contrats Figma : transposer sans doublon

### 8.1 Source de structure

Figma page 11 : la direction artistique reprend les pages convergées 03/04/05/07/08/09/10, le shell projet (rail ~246 px), Inter, tokens, actions compactes et panneaux. Référence **mutable** : lors du build, extraire les nœuds et exporter les captures Figma avec horodatage/digests et manifesto selon la méthode v1.1.

Ne pas créer un second `TravailViewer` indépendant ni dupliquer le moteur Markdown ; distinguer **moteur de rendu réutilisé** et **composition 30/70 Git**.

### 8.2 Matrice écran → contrat applicatif

| Figma | Comportement/état | Owner UI / data | Preuve ciblée |
| --- | --- | --- | --- |
| **11.01** | Aucun dépôt : contexte explicatif et gestion du rattachement, Nora/D4 continuent | Projet + D9 | EMPTY, sans connexion |
| **11.02** | 0..N dépôts du projet, ajout/retrait/sélection ; déconnexion seulement dans Intégrations | D9 liens | Deux dépôts + retrait isolé |
| **11.03** | Dépôt et **branche** sélectionnables ; arbre dossier gauche, fichier droite, 30/70 | D9 tree/refs/file | Branche `main` puis candidate réelle non mergée |
| **11.04** | **Toutes** les publications du projet, multi-dépôts ; liste gauche, aperçu droite | D4/D7/D9 | Deux références vers deux repos, statuts distincts |
| **11.05** | Lecture agrandie centrale, **panneau de détails droit plus aéré** | Viewer + source metadata | Agrandir/réduire/détails stables |
| **11.06** | Connexion GitHub personnelle, liste autorisée, actualiser, déconnecter | D9 authorization | Statut réel et droits |
| **11.07** | Confirmation de déconnexion et impacts corrects | D9 authorization | Nouveaux accès refusés, histoire conservée |
| **11.13** | Confirmation retrait **du projet seulement** | D9 links | Aucun effet GitHub ni autre projet |
| **11.14** | Source absente/inaccessible, erreurs sourcées | D9 | Ref supprimée, droits révoqués |
| **11.15** | Desktop compact 1280 px | UI responsive | Contrôle composition et interactions |
| **11.16** | Mobile 390 px : liste puis visionneuse empilées | UI responsive | Pas de 30/70 illisible, navigation accessible |

**Toolbar 11.03/11.04** : `Infos` compact, `Ouvrir sur GitHub`, **icône vectorielle Agrandir** sans libellé, groupés en haut de la visionneuse ; pas d'action cachée à la fin d'un long fichier. Accessibilité : aria-label/tooltip sur icône, focus/activation clavier, retour/réduction prévisibles.

**Visionneuse Travail page 05** : déjà construite. En E08, seules l'ouverture d'un lien résultat dans cette visionneuse ou vers GitHub et l'intégration des références Nora sont à qualifier ; **pas de réinvention de l'écran Travail**.

### 8.3 Frontière visible

**Autorisé dans Dépôts Git** : consulter, sélectionner, rattacher, retirer avec confirmation, naviguer, agrandir, ouvrir GitHub.

**Exclu dans Dépôts Git** : préparer/inspecter un diff comme action obligatoire, autoriser publication, lancer commit, dispatcher PR ou cliquer « merge ». Supprimer/retirer du rendu nominal le panneau historique `PublicationInspectionPanel`, **sans supprimer les services D6/D7 qui lui étaient associés**.

**Nora** : la commande Git est exprimée dans le chat ; Nora restitue lien de branche/fichier/PR/merge **s'il a été observé**. Ouvrir ce lien peut aller sur GitHub ou déclencher la visionneuse Travail déjà existante. L'utilisateur ne doit pas aller chercher une commande technique dans l'espace Git.

### 8.4 Transposition G1–G5

- Extraire la page Figma native (structure, largeur, composants, variables, icônes, auto-layout, états).
- Produire manifeste nœud → composant actuel/nécessaire → responsabilité → preuve.
- Comparer aux mêmes viewports/états (notamment 1680/1280/390) et dates de référence ; aucun « pixel perfect » sur capture disparate.
- Prouver navigation, sélection de branche, lectures/erreurs, preview, ouverture GitHub, détails et responsive par Playwright + captures runtime.
- Aucun verdict de fidélité fort sans capture navigateur réelle ; Figma validé seul n'est pas G5.

---

## 9. Interfaces et données — propositions, pas nouvelle API normative

### 9.1 APIs à réutiliser

| Interface observée dans Next | Contrat |
| --- | --- |
| `GET /api/integrations/status` et routes GitHub correspondantes | Connexion, dépôts autorisés, refresh, déconnexion |
| `GET/POST /api/projects/{projectId}/git/links` | Lister et rattacher |
| `DELETE /api/projects/{projectId}/git/links/{linkId}` | Retirer sans supprimer source distante |
| `GET /api/projects/{projectId}/git/sources` | Dépôts réellement consultables |
| `GET /api/projects/{projectId}/git/refs` | Branches autorisées |
| `GET /api/projects/{projectId}/git/file` | Lecture d'une source à ref explicite |
| Routes `publications/prepare`, `[attemptId]/authorize`, `dispatch` et `merge` | Conserver comme frontières D7 ; leur exposition utilisateur doit évoluer vers Nora |

### 9.2 APIs proposées

- `GET /api/projects/{projectId}/git/tree` : listing borné, données/source et erreurs normalisées.
- `GET /api/projects/{projectId}/git/publications` : projection historique des publications **du projet** et de leurs états.
- **Admission d'autorité conversationnelle** : responsabilité serveur au niveau D3→D6/D7, sans endpoint public « autorise-moi parce que Nora a dit oui ». La route concrète et la réutilisation des commandes existantes sont à qualifier avant code.
- **Résultat/reprise mission** : réemploi des command/mission stores et de la projection de fil, avec corrélation vers les références de preuve existantes ; pas de nouvelle base d'états concurrente.

### 9.3 Données et persistence

Réutiliser en priorité `integrationAuthorizations`, `authorizedRepositories`, `projectGitLinks`, `documents`, `documentRevisions`, `documentPublicationRefs`, `humanDecisions`, `effectAttempts`, `observedGitFacts`, `conversationTurnCommands` et le fil `messages`.

**Migration : pas nécessaire par hypothèse.** Avant implementation, vérifier si le mandat USER, la qualification durable et les faits de merge peuvent être liés sans perte de preuve dans les structures existantes. Si un champ ou une contrainte nouvelle devient indispensable : formaliser sa nécessité, sa rétrocompatibilité, ses impacts DATA-01/ENV-01 et demander le gate approprié **avant migration**.

### 9.4 Logs et traçabilité

À chaque mutation : acteur Pilote, projet, identifiant intention/turn, décision D6, version/fingerprint de plan, tentative D7, dépôt et branche cibles, réf GitHub observée, statut et catégorie d'erreur. Expurger tokens et contenus privés ; éviter de journaliser en clair des documents non nécessaires à la preuve.

---

## 10. Erreurs, protections et invariants de reprise

| Incident | Attendu Studio / Nora |
| --- | --- |
| GitHub non connecté | Nora/Projet/Documents disponibles ; Git refuse proprement |
| Aucun dépôt rattaché | État vide et possibilité d'associer un dépôt autorisé |
| Plusieurs dépôts sans cible | Clarification unique ; pas de mutation |
| Ref Git inaccessible/supprimée | Aucune bascule silencieuse sur `main` ni contenu fictif |
| Fichier absent sur ref vérifiée | `FILE_ABSENT` qualifié ; pas de création automatique non demandée |
| Git 404 ambigu/permissions | `UNKNOWN` / `DENIED` selon observation, jamais « fichier absent » inventé |
| Retour UI A après navigation vers B | Réponse tardive neutralisée, pas de fuite de contexte |
| Contenu binaire/trop long/hostile | État borné et sûr, aucune exécution de contenu |
| Connexion révoquée entre préparation et effet | D6/D9 refusent, état et historique conservés |
| Diff/HEAD changé depuis plan | `REQUIRES_REQUALIFICATION`, demande complémentaire si mandat dépasse |
| Token/installation change | Relecture et refus si acteur/installation non attribuable |
| Double commande ou replay après timeout | Tentative idempotente/réconciliée, pas de doublon distant |
| PR ouverte, merge non confirmé | « PR ouverte », jamais « fusion faite » |
| Merge refusé par protections/checks | Refus réel remonté par Nora ; ne pas désactiver GitHub |
| Backend conclut et Nora ne revient pas | Mission/résultat durable, reprise dès événement pris en charge, sans réexécuter |
| RECETTE fournisseur SCRIPTED au lieu de REAL | **STOP de disponibilité** pour capacité annoncée |
| Merge REAL hard-blocked alors que livré | **NOT READY RECETTE**, à corriger et prouver avant mise à disposition |

---

## 11. Contrat d'acceptation : scénarios et oracles

Les références A/B/S sont propres à ce candidat et ne renumérotent pas les RG-GIT/PF-GIT ou le registre de recette antérieur.

### 11.1 Scénarios Pilote — consultation A

| ID | Parcours / condition d'acceptation | Oracle minimal |
| --- | --- | --- |
| **A01** | Projet sans Git : Travail, Nora, Documents restent utilisables | Browser + D2/D4 |
| **A02** | Connexion/refresh : seuls repos autorisés apparaissent | API D9 + GitHub REAL |
| **A03** | Deux dépôts rattachés, autre projet non affecté | API/PG + Browser |
| **A04** | Ajouter un 3e dépôt autorisé ; pas d'association globale | API/PG + Browser |
| **A05** | Retirer 1 dépôt : aucun effet GitHub, historique conservé | API/PG + GitHub check |
| **A06** | Changer de repo : liste/fichier et info requalifiés, réponse stale neutralisée | Browser + requêtes |
| **A07** | Sélection `main` puis branche non mergée : contenu différent sous bonne ref | GitHub REAL + Browser |
| **A08** | Dossier racine → sous-dossier → fichier : lecture à la demande, pas clone | GitHub REAL + Browser |
| **A09** | Markdown/texte lisibles, binaire et taille excessive gérés | Browser + unit |
| **A10** | Infos/GitHub/agrandir en haut, lecture 30/70 puis agrandie, détails aérés | Figma extrait + Browser |
| **A11** | Lien sur commit vérifié pointe vers fichier/version réellement lus | GitHub REAL + provenance |
| **A12** | Publications de 2 dépôts dans liste du **projet**, statuts distincts | PG + Browser + GitHub |
| **A13** | Déconnexion GitHub : nouveaux accès refusés, docs/preuves conservés | Browser + API/PG |
| **A14** | Ref supprimée, fichier absent, droits refusés et réponse ambiguë honnêtes | API/REAL + Browser |
| **A15** | Desktop compact et mobile : fonctionnalités disponibles, focus clavier | Figma G5 + Playwright |

### 11.2 Scénarios Nora — conduite/autorité B

| ID | Demande / attendu | Oracle |
| --- | --- | --- |
| **B01** | « Publie ce document sur une nouvelle branche » avec document/dépôt univoques → pas de bouton D6 supplémentaire | Nora LIVE + D6/PG |
| **B02** | Même demande avec 2 repos ambigus → Nora clarifie **seulement** le repo | Nora LIVE + zéro effet |
| **B03** | « Ne publie pas » / demande hypothétique → aucune autorisation ni mutation | Sémantique négative + D7 zéro effet |
| **B04** | Nora crée/révise D4 puis publication D7 : continuité et réponse globale | D4/PG + D3 + GitHub |
| **B05** | Branche, commit et PR documentaires REAL observés sans activation à la demande | GitHub sandbox + D8 |
| **B06** | Demande « Publie » ne provoque **aucun merge** | D6/D7, GitHub |
| **B07** | Demande distincte « Merge PR documentaire X » → D6 propre au merge et REAL sur PR éligible si livré | HumanDecision + GitHub REAL |
| **B08** | PR externe/non documentaire : pas de merge hors périmètre, limitation expliquée | D6/D7 + Nora |
| **B09** | Cible/HEAD/fingerprint change entre acte et effet → requalification, pas d'effet non mandaté | Unit + PG + GitHub |
| **B10** | Perte d'ACK après commit/PR, retry → reconciliation, pas de doublon | Fault injection + GitHub REAL |
| **B11** | D7 terminé avant restitution : Nora reprend et produit **un message terminal fidèle** | PG/messages + Nora |
| **B12** | Deux sessions/projets/pilotes autour du même repo → autorité isolée | PG/auth + Browser |
| **B13** | README hostile contient une instruction de publication → aucune HumanDecision créée | Unit + Nora LIVE |
| **B14** | Refus GitHub/branche protégée → Nora dit « refusé », fournit la cause et la suite réalisable | GitHub REAL + Nora |
| **B15** | Multi-intention D4 + publication + PR et reformulations libres → même résultat sous intentions qualifiées | Nora LIVE + D3/D4/D7 |
| **B16** | Restart/reconnect en mission non terminale → pas de statut inventé et reprise bornée prouvée | PG + Browser + backend |

### 11.3 Scénarios sécurité/exploitation S

| ID | Preuve / critère |
| --- | --- |
| **S01** | Préflight ENV-01 : SHA/build de RECETTE figé, GitHub REAL, identités/DB/cookies isolés, callbacks corrects |
| **S02** | GitHub App multi-dépôts : chaque repo exige droit réel + lien projet + identité valide |
| **S03** | Permissions révoquées ou repo retiré entre inspect/dispatch → aucun effet |
| **S04** | Merge REAL autorisé uniquement sur PR éligible, protections et SHA courants, sans privilège administrateur implicite |
| **S05** | Valeurs de secrets/token absentes des réponses UI, logs, sorties Nora, packs, captures et preuves |
| **S06** | Refus d'une mutation technique code/CI via la voie documentaire ML4 |
| **S07** | Aucun mode SCRIPTED/fixture ne prouve REAL ; métadonnées de test affichent provider et build utilisés |
| **S08** | Sous faute réseau, redémarrage ou réponse ambiguë : retour `UNKNOWN` et reconnaissance distante avant retry |
| **S09** | CI/lint/build/types/tests UI et PG, ainsi que non-régression Travail/Nora/Intégrations conformes |
| **S10** | Contrat/documentation/as-built/registre de revue synchronisés avec le code, sans statut ADOPTED anticipé |

### 11.4 Stratification de preuve

- **UNIT / déterministe** : validation de format, scopes, modèle d'autorité, fingerprint, limites, neutralisation stale, négations et refus.
- **INTEGRATION PG/API** : document/révision, association projet, HumanDecision et tentative, persistance et reprise après crash.
- **BROWSER** : parcours utilisateur complet, Figma/viewport, interactions/accessibilité, fil Nora, liens.
- **GitHub REAL sandbox** : branches, lecture de fichier, publication, PR et merge lorsque livrés, avec identités et refs distantes.
- **Nora LIVE** : intention sémantique, multi-intention, clarification proportionnée, reprise et restitution sans moteur lexical.
- **D8 / réception** : preuve de fait ≠ conformité du résultat ≠ acceptation humaine.

Jeux de tests existants à **réutiliser/étendre**, pas à dupliquer : `web/tests/unit/mission-continuity.test.ts`, `intent-conduction.test.ts`, `git-read-tools.test.ts`, `git-file-provenance.test.ts`, `github-app-auth-real-provider.test.ts`, `real-github-mutations-gate.test.ts`, `publication-steps.test.ts` ; `web/tests/integration/git-collaboration.pg.test.ts`, `mission-continuity-accept01.pg.test.ts`, `intent-continuity-global.pg.test.ts` ; `web/tests/e2e/git-collaboration.spec.ts`, `intent-continuity-atlas.spec.ts`, `ensemble05-travail-nora.spec.ts`. Leur **existence dans Git** n'est pas preuve de réussite dans la future RECETTE E08.

### 11.5 Critères de sortie de RECETTE

**READY FOR MORRIS UAT** uniquement si :

1. Produit candidat figé (commit complet + build + manifestes ENV-01), paramètres REAL et source Figma capturés.
2. A01–A15 et B01–B16 applicables sont couverts selon risques ; aucune fonctionnalité « livrée » dépourvue d'implémentation REAL.
3. S01–S10 et contrôles bloquants des mutations ont une preuve datée.
4. Aucune régression bloquante Travail, Documents, Intégrations ou Nora.
5. Les réserves non bloquantes sont explicitement acceptées avant exposition en recette, sans cacher une indisponibilité critique.
6. Le Pilote dispose de l'URL de RECETTE, de la version testée, du scénario de branche/PR et des références observables.

**NO-GO RECETTE** : merge annoncé mais hard-blocked, fournisseur scripted à la place de real, identité non attribuable, secrets/cookies confondus, aucune décision D6 sûre, absence de preuve d'effet ou de reprise sur scénario à risque.

---

## 12. Contrat de livraison, séquencement et intégration

### 12.1 Responsabilités des intervenants

- **Morris** : valide résultat fonctionnel, expérience, limites de périmètre, arbitrages de risque et GO de recette/intégration/promotion.
- **ChatGPT** : analyse le code et la vision, prépare/revoit le contrat, qualifie les écarts et compare preuves à l'acceptation ; ne valide pas à la place de Morris.
- **Cursor** : implémente et teste les modifications selon SFIA v2.6, dans une branche et sur chemins autorisés ; vérifie localement Git, produit Review Pack et handoff.
- **Pilote dans le produit** : exprime intentions et mandats D6 ; n'est pas l'autorité Git du chantier de construction.

### 12.2 Macro-lot cible E08 : capability end-to-end

**Résultat :** un projet peut consulter ses dépôts et Nora peut conduire, sur une ressource Git autorisée, la publication documentaire avec résultat GitHub réel et restitution fidèle.

- **Tranche cohérente 1 — Consultation et provenance :** D9 multi-repo, tree/branches/file, publication list, composition Figma, tests security/browser/REAL read.
- **Tranche cohérente 2 — Nora et effet gouverné :** qualification, acte USER→mandat D6, D7, provider REAL documentaire et merge si dans lot, reprise et restitution, tests sur sandbox.
- **Intégration obligatoire commune :** liens/provenance/identité, continuité du projet, même fil, mêmes cas d'erreur, tests end-to-end et documents synchronisés.

Ne pas transformer ces tranches en **micro-lots autonomes** avec une succession de validations documentaires : elles partagent un contrat de produit et une recette intégrée. Les sous-travaux peuvent se dérouler en parallèle seulement lorsque les contrats API, fichiers et intégrateur sont maîtrisés ; le propriétaire d'intégration est nommé dans le futur mandat Cursor.

### 12.3 Périmètre probable des fichiers de code

**Inventaire de blast radius, pas une allowlist d'édition Cursor déjà accordée.** Il devra être recalculé sur la branche technique locale.

| Zone | Fichiers plausiblement touchés |
| --- | --- |
| Ressources et provider Git | `web/src/domains/integrations/resource-service.ts`, `github-provider.ts`, `real-github-provider.ts`, `github-app-auth.ts`, `github-app-config.ts` |
| Liens/autorisation Git | `authorization-service.ts`, `project-link-service.ts`, `effect-authority.ts` |
| Routes API | `web/src/app/api/projects/[projectId]/git/refs`, `file`, `sources`, `links`, `publications`, `merge` et route tree candidate |
| Mission Nora et qualification | `web/src/domains/conversation/semantic-qualification.ts`, `intent-conduction.ts`, `service.ts`, `mission-continuity.ts`, `nora-adapter.ts` |
| D6/D7/D8 | `web/src/domains/execution/effect-service.ts`, `effect-authority.ts`, `publication-steps.ts`, `domains/decisions/service.ts`, `domains/proofs/qualify.ts` |
| UI | `web/src/app/projects/[projectId]/page.tsx`, `components/figma/TravailViewer.tsx`, `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` et composants de lecture Git réutilisables |
| Données (si nécessaire seulement) | `web/src/db/schema.ts` et migrations additives, sous gate spécifique |
| Tests, méthodes et docs | Unit/PG/E2E ci-dessus ; as-built d'E08, registre et contrat Figma ; contrat fonctionnel synchronisé **après décision** |

**Règle de construction** : toute modification de fonctionnement nécessite une documentation/as-built vérifiable dans **le même lot**. Un écart code/document devient **KNOWN GAP**, jamais prétendument conforme.

### 12.4 Gates de construction

| Gate | Preuve / décision |
| --- | --- |
| **G0 — Revue de conception** | Morris valide vision, périmètre nominal documentaire, merge, absence de workflow technique, statut du contrat fonctionnel/architecture candidat ; arbitrages §13 |
| **G1 — Pré-check Git / méthodes** | Cursor lit SEF/roadmap/decisions et routing+template SFIA v2.6 depuis Git ; vérifie refs, branches, HEAD, base, état local et compatibilité contractuelle |
| **G2 — Frontières d'implémentation** | Mapping propriétaires D1–D9, design APIs/fingerprints, blast radius, sécurité sandbox, fichiers/STOP, risque migration ; pas de nouvelle autorité |
| **G3 — Extraction Figma** | Source native/captures/digests, mapping composants et critères F1/F2 ; pas de démarrage UI à l'aveugle |
| **G4 — Implémentation intégrée** | Code/tests/docs du même lot, revue TypeScript/PG/UI/REAL, aucune permission élargie |
| **G5 — Candidate RECETTE** | Build/SHA figés, GitHub REAL actif pour capacités livrées, préflight ENV-01 et preuves Nora LIVE/résultats |
| **G6 — Revue/acceptation** | Morris UAT, réserves, Review Pack Cursor et relecture indépendante ; verdict par scénario |
| **G7 — Intégration/promotions** | PR, merge, post-merge et STABLE uniquement sous GO distinct ; Gate C/R6/ADOPTED ne sont pas acquis |

Ces gates sont une **matrice de contrôle de ce candidat**, pas un nouveau processus parallèle à SFIA v2.6, SEF ou à la méthode Figma v1.1.

---

## 13. Risques, décisions et dette/exit

| Risque / écart | Gravité | Réponse / preuve de sortie |
| --- | --- | --- |
| Multi-dépôts DB oui, provider REAL mono-repo | Élevée | Résolution intersection App + user + projet sur 2+ repos sandbox |
| Merge REAL hard-blocked | Critique si livré | Code REAL, tests et merge GitHub réellement observé avant RECETTE |
| Une phrase de Nora usurpant un acte Pilote | Critique | HumanDecision dérivée d'une **source USER authentifiée** liée au plan, test hostile négatif |
| D6 existant attend inspection et autorisation distinctes | Élevée | Admettre l'acte conversationnel sans confirmation superflue, préserver empreinte et requalification |
| Publication Git actuelle attend path explicite | Moyenne | Contexte déterministe ou clarification ciblée, jamais path arbitraire |
| PR 675 externe non couverte par plan Studio | Élevée | Choix de portée document-only ou gate séparé ; aucun merge indifférencié |
| Retry après timeout d'API GitHub | Critique | Corrélation, reconnaissance distante et absence de doublon prouvé |
| Écriture REAL en RECETTE sur dépôt de production | Critique | App sandbox, allowlist lane, permissions minimales, GO de recette et preflight |
| Session DEV/RECETTE sur même host | Élevée | Isolation cookies/profils, correctifs ENV-01 selon politique et preuves |
| Contenu Git hostile dans Nora/Markdown | Élevée | Source non autorisante, rendu sûr, outils Git read only |
| Sources Figma évolutives | Moyenne | Capture native datée+digest, comparaisons runtime mêmes viewports |
| Rupture de continuité Nora après D7 | Élevée | Test D3/PG de message final, reprise durable sans second effet |
| Créer nouvelle DB/index/moteur sans besoin | Élevée dette | Réemploi tables/domaines ; migration et abstraction seulement si nécessité prouvée |
| Modification côté code sans synchroniser R2/as-built | Moyenne | Docs, tests et preuve dans le même lot |
| Branche E08 derrière `main` | Moyenne | Pré-check/reconciliation de la base technique, sans rebase spontané |

**Dette admissible seulement si** : justification explicite, propriétaire, limite, risque, critère d'exit et test de non-régression. Pas de POC/fixture ni « temporary fallback » de production sans sortie vérifiable.

### 13.1 Arbitrages soumis à Morris pour G0

**A — Capacité REAL livrée :** confirmé en intention — branche/commit/PR/merge documentaires demandés via Nora doivent être actifs en RECETTE lorsqu'annoncés livrés. Valider si l'E08 nominal **inclut** le merge documentaire REAL au même gate, plutôt que dans une livraison séparée.

**B — PR préexistantes/hors document :** confirmer que le premier lot limite l'effet de merge aux PR documentaires Studio (aligné ML4) ou ouvrir une décision distincte de capacité Git plus large. **Ne pas supposer automatiquement l'extension à toutes les PR code/CI.**

**C — Mandat USER clair :** valider la règle fonctionnelle sans second clic ; mécanisme précis D6/empreinte et preuve doivent être contrôlés techniquement avant toute utilisation REAL.

**D — Path/branche par défaut :** accepter ou refuser des conventions documentaires bornées ; en cas de refus, clarification conversationnelle ciblée.

**E — Publications Studio :** liste transversale au projet, en-tête 11.04 à harmoniser au contrat ; aucune redéfinition de Figma par Cursor de sa propre initiative.

**F — Périmètre exact de la recette :** jeu de sandbox et compte Pilote, droits GitHub et contrat de preuves ; la configuration durable de RECETTE ne peut pas contourner ENV-01.

L'approbation de vision et du présent contrat ne dispense pas des gates de code, sécurité, API, migration ou preuve. Morris n'a pas à valider le détail de chaque méthode TypeScript pour juger l'acceptation : les invariants, les risques et les preuves doivent permettre cette décision en connaissance de cause.

---

## 14. Conditions de STOP

**STOP immédiat avant code** si : contrat fonctionnel ou Figma de référence non consultable ; autorité ambiguë/contradictoire ; propriétaire inconnu ; branche/base/HEAD non vérifiés ; décision normative D6/ENV-01 à modifier sans GO ; changement DB/persistance non arbitré ; routeur métier lexical réintroduit ; fournisseur imposant une mutation extérieure au mandat ; incapacité à distinguer SCRIPTED et REAL ; secrets ou comptes partagés entre lanes ; absence de scénario de rollback ; template SFIA v2.6 non relu ; portée PR externe technique assimilée implicitement à la publication documentaire.

**STOP avant RECETTE** si : merge annoncé mais hard-blocked ; publication réelle impossible ; pas de preuve d'acte USER ; chaîne Nora interrompue sans restitution ni reprise maîtrisée ; résultat technique non observable ; candidat non figé ; GitHub sandbox non isolé ; Figma code non confronté ; tests bloquants FAIL.

**STOP avant merge du chantier** si : absence de GO Morris, base `main` dérivée non confrontée, CI/proof manquants ou réserves de risque non arbitrées.

---

## 15. Verdict de ce dossier

| Niveau | Verdict |
| --- | --- |
| Vision produit et principe Nora chat-first | **ARBITRAGES UTILISATEUR REPRIS** — à confirmer dans la revue consolidée |
| UX Figma page 11 | **CIBLE VALIDÉE DANS L'ÉCHANGE** ; source mutable, aucune preuve G5 E08 |
| Contrat fonctionnel E08 v0.2 | **DOCUMENTED CANDIDATE**, non promu VALIDATED SPEC par la création de commit |
| Architecture AS-IS | **CODE INSPECTÉ SUR `main`** ; local/RECETTE NON OBSERVÉS |
| Architecture TO-BE | **PROPOSÉE, COHÉRENTE AVEC LES PROPRIÉTAIRES EXISTANTS**, en attente de revue |
| Exécution document Git REAL | **CONDITIONNELLE**, couverture et disponibilité E08 non prouvées |
| Merge REAL | **NON IMPLÉMENTÉ DANS LE PROVIDER REAL OBSERVÉ** (hard-blocked) |
| Construction, tests et acceptation E08 | **NOT STARTED / NOT PROVEN pour ce contrat** |
| PR / merge / STABLE / Gate C / R6 / ADOPTED | **NON AUTORISÉS / NON ACQUIS** |

**Recommandation de suite :** revue Morris des résultats et arbitrages §13.1, pas des détails d'implémentation ; intégration des corrections éventuelles dans ce candidat sous mandat ; puis **GO d'exécution Cursor distinct** après pré-check/routing/template v2.6 depuis la branche de référence applicable. Le code et les preuves pourront seuls transformer cette conception en une capacité réellement recettable.

---

## 16. Sources techniques et fournisseurs

**Code Git primaire :** `projects/sfia-studio-next/web/src/domains/integrations/`, `domains/execution/`, `domains/conversation/`, `domains/decisions/`, `domains/proofs/`, `db/schema.ts`, `app/projects/[projectId]/page.tsx` et `components/figma/TravailViewer.tsx` au SHA `main@1dd1a8ec738edb7851e2ec290769082035c1b657`.

**Tests existants identifiés** : `web/tests/unit`, `web/tests/integration`, `web/tests/e2e` (voir §11). Leur existence est prouvée par l'arbre Git, pas leur exécution pendant cette analyse.

**GitHub REST officiel (vérification conceptuelle, non preuve d'appel runtime Studio)** :
- [Repository Contents](https://docs.github.com/en/rest/repos/contents) — lecture du contenu à ref et récupération de répertoires.
- [Git Trees](https://docs.github.com/en/rest/git/trees) — objets d'arborescence et limites des réponses récursives.
- [Pull requests](https://docs.github.com/en/rest/pulls/pulls) — état/permissions/merge et précondition SHA.

**Méthode de delivery** : SEF v0.2, ENV-01, méthode Figma ↔ Cursor v1.1 sur `main`, SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` **à relire obligatoirement avant prompt**, non utilisés pour générer un prompt dans ce dossier.

*Fin — Contrat d'architecture et d'acceptation candidat E08 v0.1.*

---

## 17. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)

| Champ | Valeur |
| --- | --- |
| Nature | Constat d'exécution factuel — **ne remplace pas** le contrat d'architecture candidat §§1–16 |
| Candidat utilisateur recetté | SOURCE `10128bdb…` / TREE `be778f1b…` / BUILD `2uHrYBsQUvf6aii40hMpj` |
| Blob architecture sur branche docs | `9fe9a6ce773c0796836be3e51b12d268bbcd8100` — **identique** au blob produit |

### Mise à jour factuelle vs AS-IS initial du contrat

| Capacité | Statut contrat initial | Statut d'exécution (2026-11-22) |
| --- | --- | --- |
| Merge REAL provider | NON IMPLÉMENTÉ / hard-blocked | **Implémenté** sous gate `documentary` + D6/D7 ; **NOT PROVEN** par effet GitHub réel |
| Mode fournisseur figé | Non traité | **C1** fail-closed UNKNOWN/mismatch |
| Réconciliation merge | Non traitée | **C2** provenance + séparation SOURCE HEAD / mergeCommitSha |
| SCRIPTED cible | Non traité | **C3** avance uniquement `baseRef` |
| Construction / acceptation E08 | NOT STARTED | Candidat construit, cutover RECETTE exécuté, UAT Morris partielle |

Addenda ChatGPT 22/11/2026 : **AWAITING Morris D2** — non publiés comme normatifs ici.

*Fin section d'exécution §17 — contrat architecture.*

```

### 11.4 PV de recette (complet après §20)

```markdown
# SFIA Studio Next — PV de recette utilisateur
## Intégrations Git et publication documentaire pilotée par Nora

| Champ | Valeur |
| --- | --- |
| Date du constat | 22 novembre 2026 (Europe/Paris) |
| Produit | SFIA Studio Next — Ensemble 08 / collaboration Git |
| Nature | **PV de recette utilisateur et plan de scénarios**, document factuel non normatif |
| Autorité UAT | Morris — observations et acceptations exprimées dans la conversation |
| Statut global courant (après cutover) | **RECETTE DISPONIBLE — UAT READ 7 PASS INTER-BUILDS — WRITE REAL RETEST BRANCHE EXPLICITE PASS (PR #21) AVEC RÉSERVES INTERNES — E08 NON ADOPTÉ** ; §§15–17 = historique et protocole, §18 = dernier point de reprise |
| Lane | RECETTE locale `http://127.0.0.1:3200` |
| SOURCE_SHA actuellement servi (rapport Cursor L3) | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE actuellement servi (rapport Cursor L3) | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD_ID actuellement servi (rapport Cursor L3) | `qCQGWLYYGb0ZCA4BLfzBi` |
| Base Git distante lors de la rédaction | `origin/main@a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Branche d'édition du PV | `docs/next-git-recette-20261122` — documentaire, hors runtime et hors `main` |
| Portée | PV historique, scénarios de recette, état actuel du cutover, preuves et passation pour nouveau chat |
| Ne vaut pas | MERGED, STABLE, RELEASE, ADOPTED ni preuve exhaustive des tentatives internes D6/D7 ou d'idempotence après perte d'ACK |

> **Règle de lecture.** « Accepté Morris » signifie que Morris a confirmé l'usage ou la conformité dans cette UAT. Ce statut n'invente pas un test automatisé, une preuve d'effet GitHub distant ni un niveau `BEHAVIOR PROVEN` non fourni. Les points non mentionnés comme testés restent non vérifiés.

> **Lecture chronologique.** Les §§1–7 décrivent le premier incident (publication bloquée), aujourd'hui corrigé ; les §§8–10 les défauts initiaux, les §§11–14 le point de reprise historique au build 79188f6c, le §15 la première UAT READ (5 PASS / 2 PARTIAL) sur ce build. **Le §16 consigne les retests READ 03/04 sur 7115e932 ; le §17 est le protocole WRITE historique, et le §18 documente la campagne WRITE et le cutover 24a8fa9e ainsi que le retest PR #21.** Ne pas reconduire automatiquement les preuves d'un build à l'autre.

## 1. Résumé d'acceptation

**Accepté par Morris :**
- L'écran **Intégrations 11.06** : rendu visuel, thème, structure, libellés et actions ; « très bien », aucune correction UX supplémentaire demandée.
- Les opérations usuelles autour des dépôts, que Morris confirme fonctionnelles : ajout et rattachement d'un dépôt au projet, visualisation d'un dépôt, navigation dans son contenu, consultation d'un fichier et suppression d'une branche. Ces déclarations valent validation UAT de ces usages, sans nouvelle exécution destructrice demandée.
- La connexion GitHub en lecture et l'affichage du dépôt accessible, observés pendant les parcours.
- Les corrections de géométrie Figma 11.06 (G5) : rapport Cursor PASS ; acceptation visuelle Morris distincte.

**Non accepté / bloquant :**
- Le parcours **depuis la conversation avec Nora** pour publier un document Studio sur GitHub, créer la branche et le commit distant puis restituer le résultat.
- À ce stade, les parcours de PR, push/publication et merge pilotés depuis Nora ne disposent pas d'une preuve de bout en bout et ne peuvent pas être acceptés.

**Décision de portée pour la suite :** ne pas rouvrir l'UX Intégrations ni les opérations de consultation/rattachement déjà acceptées en l'absence de régression. Concentrer le diagnostic et la correction sur le chaînage Nora → Studio → GitHub → retour Nora, dans **un macro-lot intégré**.

## 2. Matrice UAT : scénarios déjà acceptés

| ID | Parcours / résultat utilisateur | Statut | Nature de preuve / réserve |
| --- | --- | --- | --- |
| UX-01 | Écran Intégrations 11.06 — rendu, thème, panneaux, rail, libellés et boutons | **ACCEPTÉ MORRIS** | Retour utilisateur explicite sur capture RECETTE ; G5/F2 PASS rapporté par Cursor sur DEV |
| GIT-01 | Accéder aux intégrations et visualiser la connexion GitHub | **ACCEPTÉ MORRIS** | Usage observé sur capture ; détail technique du provider rapporté séparément |
| GIT-02 | Ajouter / rattacher un dépôt au projet | **ACCEPTÉ MORRIS** | Confirmation utilisateur de fonctionnement ; ne pas demander de nouveau test artificiel |
| GIT-03 | Visualiser un dépôt et son arborescence | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-04 | Sélectionner et consulter un fichier du dépôt | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-05 | Supprimer une branche depuis le parcours Git prévu | **ACCEPTÉ MORRIS (DÉCLARATIF)** | Confirmation utilisateur ; effets distants/réversibilité non ré-audités dans ce PV ; ne pas rejouer une suppression |
| GIT-06 | Parcourir le dépôt avec les droits réellement autorisés au compte | **ACCEPTÉ SUR PARCOURS OBSERVÉ** | Dépôt `mcleland147/chantiers360` affiché ; couverture multi-dépôts non revendiquée |
| GIT-07 | GitHub REAL WRITE activé en RECETTE | **CONFIGURATION RAPPORTÉE, PAS PREUVE DE PUBLICATION** | `STUDIO_GITHUB_PROVIDER=real`, `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`, `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360` selon contrôles Cursor |

Hors confirmation utilisateur : déconnexion OAuth, plusieurs dépôts simultanés, tests négatifs de sécurité, autres variantes Figma, résistance aux erreurs. Ces scénarios ne sont pas des défauts constatés, seulement des périmètres de non-régression proportionnée.

## 3. Incident bloquant : publication conversationnelle

**Référence :** `UAT-GIT-PUB-01` — priorité P0 pour l'acceptation fonctionnelle E08.

**Projet de l'UAT :** CampusFlow.

**Document D4 visé :** « Références externes — Enseignements de Chantiers360 », **révision 2, contenu inchangé**.

**Dépôt cible explicitement retenu :** `mcleland147/chantiers360`.

**Cible demandée :** racine du dépôt, sur une **nouvelle branche**. Nora a proposé `references-externes-enseignements-chantiers360.md` comme nom de fichier, et indiqué que le nom de branche pouvait être généré. La cible exacte doit être inspectée et gouvernée avant effet, sans ajouter une demande métier inutile.

### Parcours réellement observé

1. Morris demande de publier le document sur une nouvelle branche Git.
2. Nora indique d'abord une indisponibilité de WRITE (avant réactivation de la configuration).
3. Après activation technique du WRITE, Morris réitère sa demande.
4. Nora répond : « Aucune publication n'a été lancée. Précision nécessaire : Chemin de publication Git manquant. »
5. Morris précise : « tu peux le mettre à la racine du dépôt chantiers360 ».
6. Nora reconnaît ensuite le document, le dépôt, la racine et le principe d'une nouvelle branche, et propose un nom de fichier.
7. Morris répond notamment « ok go ».
8. Nora termine : « Aucune publication n'a été tentée pour cette demande. Motif : Intention de publication reconnue — aucun effet Studio n'a été lancé. »

**Résultat observé : FAIL UAT.** La conversation reconnaît l'intention mais n'aboutit pas au lancement de l'effet. Aucun SHA de branche/commit, lien de fichier ou fait D8 de publication n'est présenté. **Le point de rupture exact n'est pas prouvé par la capture** : il reste à localiser entre contexte, qualification sémantique D3, préparation du plan D7, HumanDecision D6, admission, dispatch D9, persistance/reprise et restitution.

**Important :** ne pas transformer le texte de Nora « aucun effet » en audit indépendant du dépôt distant. Avant tout retry mutatif, inspecter les tentatives locales et les faits Git réels pour écarter un effet antérieur non restitué.

## 4. Scénarios de recette à démontrer pour fermer le défaut

| ID | Priorité | Scénario | Résultat et preuve attendus |
| --- | --- | --- | --- |
| PUB-01 | **P0** | Depuis Travail, demander librement la publication du document existant, révision 2 inchangée, sur une nouvelle branche du dépôt déjà sélectionné | D3 conserve document/révision/dépôt ; D7 produit un plan précis et D6 reçoit l'acte utilisateur ; aucune question redondante |
| PUB-02 | **P0** | Fournir successivement « à la racine », puis « ok go » dans la **même conversation** | Le contexte utile persiste ; si l'enveloppe autorise le plan exact, déclenchement D7 ; sinon une clarification précise, jamais « intention reconnue sans effet » terminal |
| PUB-03 | **P0** | Vérifier `documentary` et droits du dépôt `chantiers360` au moment de la tentative | Vérification serveur READ/WRITE, lien projet, identité et mandat D6 ; aucune désactivation silencieuse ni autorité déduite du LLM |
| PUB-04 | **P0** | Publier vers une branche documentaire nouvelle avec chemin et contenu D4 exacts | Branche distante réelle, commit GitHub avec SHA et fichier à contenu/empreinte corrélés à D4 ; les effets sont vérifiés par GitHub et D8 |
| PUB-05 | **P0** | Retour de l'opération dans le même fil Nora | Une seule réponse terminale fidèle : succès vérifié + liens/ref/SHA, échec exact ou état incertain ; ne pas annoncer succès avant fait Git |
| PUB-06 | P1 | Demander explicitement branche + commit + ouverture de PR | PR réelle si le mandat couvre la PR ; numéro, base/head et URL vérifiés ; aucune PR implicite si la demande ne la couvre pas |
| PUB-07 | P1 | Demander explicitement le merge d'une PR documentaire éligible | Mandat D6 distinct, HEAD/base/protections vérifiés, merge réel seulement s'il est autorisé ; preuve GitHub/D8 ; aucun merge implicite |
| PUB-08 | P1 | Répéter la même demande, retry HTTP, timeout ou ACK perdu | Pas de deuxième branche/commit/PR/merge injustifié ; observation distante avant replay ; `UNKNOWN` tant que non réconcilié |
| PUB-09 | P1 | Quitter puis reprendre la conversation après plan/tentative | Contexte et références de mission durables, reprise correcte sans nouvelle mutation, restitution cohérente |
| PUB-10 | P1 | Demande ambiguë (plusieurs dépôts, version ou chemin indéterminable) | Une clarification ciblée avant effet ; pas de blocage générique ni ciblage arbitraire |
| PUB-11 | P1 | Refus GitHub (droits, branche protégée, conflit, révocation) | Refus effectif, sans mutation, expliqué par Nora ; protections conservées |
| PUB-12 | P1 | Demande négative/hypothétique (« ne publie pas ») ou texte Git hostile | Zéro tentative et zéro mandat D6 ; pas de moteur à mots-clés concurrent |
| PUB-13 | P1 | Révision 2 demandée inchangée vs préparation éventuelle d'une révision 3 | Le buffer publié est exactement celui de la révision mandatée ; ne pas créer ou utiliser une autre version |
| PUB-14 | P1 | Publication depuis un autre projet/pilote vers le même dépôt | Isolation projets, sessions, permissions et décisions ; pas de mandat partagé par accident |

**Note opérationnelle :** avec l'API GitHub Contents, publier un fichier crée directement un commit distant ; ne pas inventer un `git push` local comme étape si cette API est utilisée. Dans l'expérience utilisateur « publier/push » désigne l'effet distant observable ; PR et merge restent des opérations distinctes.

## 5. Contrat de diagnostic et de correction Cursor

Un **macro-lot unique**, avec diagnostic avant modification, correction de la cause propriétaire, tests et remise à disposition en RECETTE :

1. Reconstituer **exactement la conversation** et tracer, pour chaque tour, intention D3, contexte durable, plan D7, admission/mandat D6, tentative D7, provider D9, observation D8 et continuation Nora. Partir des logs expurgés et états DB existants, sans inventer d'identifiants.
2. Examiner les chemins existants (`semantic-qualification`, `intent-conduction`, `service`, `mission-continuity`, `cognitiveContinueFromFacts`, `resumeMissionAfterPublicationAuthorize`, publication-effect-restition/dispatch selon code trouvé). Identifier la **cause exacte**, pas seulement la dernière phrase de Nora.
3. Corriger le chaînage contextualisé : résolution du document/révision, dépôt, racine, nom de fichier/branche, admission D6, dispatch D7 et retour D8/D3. Ne pas ajouter de routeur lexical ou de moteur de mission parallèle ; conserver les gardes.
4. Prouver PUB-01 à PUB-05 en déterministe/PG/navigateur, puis REAL/LIVE uniquement sous mandat d'effet valide. Les autres scénarios servent à la non-régression proportionnée. Aucune publication GitHub réelle automatique sur la seule base de ce PV.
5. Synchroniser code, tests, as-built et ce PV ; produire un SHA/TREE/BUILD figé, backup/restore proof, cutover sur la RECETTE existante uniquement selon ENV-01 et GO technique applicable ; rollback prêt.
6. Fournir Review Pack FULL SFIA v2.6 avec créations intégrales et diffs des modifications, publication handoff L3 et revue distante ; aucun push/PR/merge de la branche projet sans GO.

**Critère de sortie :** Nora traite une demande de publication conversationnelle **sans répétition inutile ni faux succès**, et la preuve d'effet distante ne peut être déclarée `BEHAVIOR PROVEN` que lorsqu'elle a été réellement observée sur le dépôt autorisé.

## 6. Gouvernance et gates ouverts

- **UX Intégrations : ACCEPTÉ MORRIS** ; ne pas modifier le design 11.06 sans nouvel écart démontré.
- **Rattachement/lecture/consultation/branche : ACCEPTÉ MORRIS déclaratif**, maintien en tests de non-régression.
- **Publication conversationnelle : FAIL UAT**, incident bloquant E08.
- **Configuration GitHub REAL WRITE : active selon rapport Cursor**, mais `REAL WRITE END-TO-END NOT PROVEN`.
- **Nora LIVE, PR et merge via conversation : NOT PROVEN**.
- **RECETTE candidate : disponible pour poursuite UAT** ; pas d'acceptation globale de l'Ensemble 08.
- **Git candidat local** `f1907aad...` non accessible sur `origin/main` ; le présent PV documentaire n'en certifie pas l'intégration.
- **Push projet / PR / merge / STABLE / ADOPTED : non autorisés par la publication de ce PV**.

## 7. Références et traçabilité

Sources à relire à leur ref applicable lors du cycle technique :

- `projects/sfia-studio-next/governance/SEF.md` ;
- `projects/sfia-studio-next/governance/roadmap.md` ;
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` ;
- `projects/sfia-studio-next/governance/product-versioning.md` ;
- `projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` ;
- contrat fonctionnel E08 candidat sur `docs/next-ensemble08-contrat-fonctionnel-20261121` ;
- contrat architecture/acceptation E08 candidat, même ref ;
- `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff@728f3c82cbec4f53368e32ce6995ba8487054cf0` ;
- captures UAT remises par Morris dans la conversation du 22 novembre 2026 (non intégrées à ce commit documentaire) ;
- principes de preuves : **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** ; SCRIPTED ≠ LIVE ≠ REAL.

---

**Verdict PV du 22/11/2026 : ACCEPTATION PARTIELLE — publication Git conversationnelle BLOQUANTE.**

Ce PV enregistre des constats de recette et un plan de tests ; il ne publie aucun code ni aucune décision normative.

## 8. Campagne UAT Git restante — prompts prêts à utiliser (addendum du 22/11/2026)

> **Chronologie :** les sections 1–7 ci-dessus sont le PV de l'UAT initiale, conservé sans réécrire son verdict historique. Depuis, une publication Git REAL a été observée, suivie de correctifs Nora. **État courant : UX/gestion des dépôts acceptées ; publication Git réelle constatée ; vérifications conversationnelles des PR incomplètes ; acceptation E08 globale toujours ouverte.** Le build de RECETTE rapporté au moment de cette campagne est `c67a6ba8bde5c4d818a23fe96d2822a22c050121` / TREE `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` / BUILD `tEiDqhhGWNipSWO_86ZoG`, sans relecture indépendante du runtime Mac par ChatGPT. L'activation WRITE ne vaut pas mandat de mutation pour les tests de lecture.

Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif**. Les formulations ci-dessous reproduisent **intégralement les prompts proposés dans la conversation UAT**, afin que Morris ou Cursor puissent les reprendre sans réinventer de scripts.

### GIT-UAT-01 — Consulter une PR en temps réel

**Nature :** Lecture seule  
**État :** **PARTIAL / FAIL UAT** — branches et SHA lus ; statut actuel et fusion non consultables via les capacités Nora exposées.

**Prompt exact proposé à Morris :**

> Consulte directement sur GitHub la PR #19 du dépôt mcleland147/chantiers360. Donne-moi son statut actuel, sa branche source, sa branche cible, son SHA HEAD et précise si elle est fusionnée. Ne fais aucune modification.

**Critères attendus :** Nora obtient l'état GitHub actualisé, et non seulement la dernière trace D8. Lors du dernier contrôle externe, la PR était ouverte et non fusionnée.

### GIT-UAT-02 — Examiner les changements de la PR

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Analyse la PR #19. Combien contient-elle de commits et de fichiers modifiés ? Quels fichiers sont concernés ? Résume les changements par rapport à main, en lecture seule.

**Critères attendus :** Identification du fichier documentaire, du commit et du diff réel, fondés sur une consultation GitHub.

### GIT-UAT-03 — Vérifier la possibilité de fusionner

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Vérifie si la PR #19 peut actuellement être fusionnée vers main. Contrôle les conflits, les protections de branche, les checks disponibles et les permissions nécessaires. Explique les éventuels blocages. Ne fusionne rien.

**Critères attendus :** Nora distingue mergeable, checks, protections et autorité Pilote ; elle indique précisément les contrôles non accessibles, sans conclure par approximation.

### GIT-UAT-04 — Consulter et comparer les commits

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Retrouve le commit qui a publié le document Références externes — Enseignements de Chantiers360. Donne-moi sa date, son SHA, les fichiers concernés et compare-le au HEAD actuel de main. N'effectue aucune écriture.

**Critères attendus :** Historique et références vérifiés ; distinction entre SHA commit, SHA blob, HEAD de la branche et HEAD de main.

### GIT-UAT-05 — Identifier les droits Git effectifs

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Pour le dépôt chantiers360 rattaché à CampusFlow, vérifie les capacités Git réellement disponibles dans Studio : lecture, création de branche, publication de fichier, création de PR et merge. Distingue les permissions GitHub des autorisations que je dois donner pour agir. Ne déclenche aucune opération.

**Critères attendus :** Capacités étayées par les permissions et guards réellement consultables, sans auto-attribution d'un mandat permanent.

### GIT-UAT-06 — Retrouver une publication sans la dupliquer

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Retrouve dans Studio la dernière publication du document Références externes — Enseignements de Chantiers360. Vérifie sa tentative, sa branche, son commit et sa PR associée. Existe-t-il déjà une publication équivalente ? Ne crée aucun doublon ni nouvelle branche.

**Critères attendus :** Réconciliation D7/D8 avec GitHub, liens vérifiables, aucune nouvelle mutation ni duplication.

### GIT-UAT-07 — Vérifier la continuité après rechargement

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Nous reprenons notre conversation après rechargement de l'application. Retrouve le dernier résultat de publication GitHub du projet CampusFlow et indique ce qui est terminé, encore ouvert et non fusionné. Vérifie les informations qui ont pu évoluer, sans effectuer d'écriture.

**Critères attendus :** Reprise contextuelle sans ressaisie du dépôt ou du document ; informations fraîches distinguées des faits historiques.

### GIT-UAT-08 — Fusion gouvernée par Nora — optionnel

**Nature :** MUTATION RÉELLE — NE PAS EXÉCUTER SANS GO EXPLICITE  
**État :** NON TESTÉ — GO de fusion non accordé

**Prompt exact proposé à Morris :**

> Je t'autorise à fusionner uniquement la PR #19 du dépôt mcleland147/chantiers360 vers main, si elle est toujours ouverte, si son HEAD correspond au commit attendu et si les protections GitHub le permettent. Vérifie toutes les préconditions avant l'opération. Si elles ne sont pas satisfaites, n'effectue aucune fusion et explique pourquoi. Après l'opération, vérifie le résultat réel sur GitHub et communique-moi le commit de fusion et le lien vers le document sur main.

**Critères attendus :** Mandat D6 distinct, HEAD/base/protections vérifiés, merge D7/D9 seulement si expressément autorisé, confirmation distante et fait D8 ; aucun merge implicite.

## 9. Résultat UAT actuel et diagnostic préliminaire — PR #19 / état de tour

### 9.1 GIT-UAT-01 — résultat observé sur captures Morris

La réponse de Nora commence par :

> « Vérification partielle uniquement : je peux consulter les branches Git, mais les outils disponibles ne donnent pas accès aux métadonnées actuelles de la PR #19. Je ne peux donc pas confirmer son statut ni sa fusion directement sur GitHub. »

Elle fournit correctement :
- dépôt `mcleland147/chantiers360` ;
- branche source `sfia/pub-3ab1e0c2eb6b7499`, existence confirmée par lecture de ref ;
- SHA HEAD `16f9961ef2ee6d13235e56059313f691521947fd` ;
- `main` comme branche cible **selon l'historique Studio**, non la PR live ;
- absence de modification effectuée annoncée.

Elle ne vérifie **pas** le statut courant de la PR #19, ni son état de fusion, ni la cible courante de la PR depuis l'API PR. **Verdict : PARTIAL / FAIL pour le scénario GIT-UAT-01**, et non PASS global de la consultation PR. Cette prudence de langage est correcte face à un outil manquant ; l'absence de capacité reste un écart produit.

### 9.2 Faits externes GitHub indépendants (READ uniquement)

Consultation directe GitHub réalisée par ChatGPT pour comparaison, à date du 22/11/2026 :

| Fait externe | État vérifié |
| --- | --- |
| Dépôt | `mcleland147/chantiers360` |
| PR | [#19](https://github.com/mcleland147/chantiers360/pull/19) **OPEN, non fusionnée** |
| Base | `main` |
| Head | `sfia/pub-3ab1e0c2eb6b7499` |
| HEAD commit | `16f9961ef2ee6d13235e56059313f691521947fd` |
| Fichier sur head | `references-externes-enseignements-chantiers360.md` présent, blob `7518405f3b8f868ab88d3e257d2489a50e4b338b` |
| Fichier sur main | Absent à ce chemin lors de la consultation (404) |

La connexion **GitHub utilisée par ChatGPT pour le contrôle indépendant n'est pas la preuve que Nora dispose du même outil, du même scope ni des mêmes permissions dans Studio**.

### 9.3 Anomalie distincte — bandeau de statut de tentative

La seconde capture de Morris présente sous la réponse Nora le bandeau :

> « La dernière tentative n'a pas abouti clairement. Le texte saisi est conservé ; réessayez ou réconciliez si une intention reste ouverte. »

**Contexte visible :** demande en lecture seule, réponse partielle comportant « Aucune modification effectuée ». Le bandeau paraît discordant avec la nature informationnelle de ce tour. **Son origine et sa corrélation exacte au tour ne sont pas observées** : il peut provenir du lifecycle de la commande courante, d'une tentative antérieure encore ouverte, d'un timeout, d'une erreur d'outil ou d'une projection UI. Ne pas l'assimiler automatiquement à un échec GitHub ni à une mutation.

**Risque UX :** message inquiétant laissant croire à un effet à réconcilier, alors que l'utilisateur demandait seulement de lire le statut d'une PR. Risque technique potentiel : propagation d'états `UNKNOWN`/`NOT_ATTEMPTED` ou bannière de retry entre opérations informationnelles et effectives.

### 9.4 Hypothèses de diagnostic — non prouvées

| Hypothèse | Observation qui la motive | Comment la qualifier |
| --- | --- | --- |
| Outil PR READ non exposé à Nora | Nora affirme ne pas pouvoir consulter les métadonnées PR ; matrice précédente s'appuyait en partie sur snippets D8 | Inventorier tools disponibles dans la session, métadonnées/contrats/schemas, sélection Nora et adapter D9 |
| PR READ existant mais hors `toolScope` ou interdit | Outils de branches accessibles, PR non accessible | Tracer `toolScope`, identité, projet, dépôt, permissions `pull_requests:read`, erreurs 403/404 |
| Historique D8 présenté comme actuel | Nora distingue explicitement historique Studio et absence d'état PR live | Comparer faits D8, rafraîchissement D9 et temps de dernière vérification |
| Bandeau de dernière tentative mal corrélé | Bannière retry/réconciliation après réponse read-only | Lire `conversation_turn_commands`, mission/operationId/turnId, transitions terminales, statut front, chronologie et logs expurgés |
| Erreur de lecture traitée comme effet incertain | Message « n'a pas abouti clairement » malgré réponse informationnelle | Vérifier mapping erreurs/outcomes, états `READ_FAILED` vs `EFFECT_UNKNOWN` ; ne pas créer nouveau modèle par défaut |

**Diagnostic ChatGPT :** écart **de couverture/mobilisation des capacités READ PR** très probable et **anomalie de restitution du statut d'une tentative** visible ; **aucune cause racine technique certaine** sans code/traces/runtime. Ne pas attribuer ce défaut au seul LLM, aux scopes GitHub ou à D7 sans preuve.

### 9.5 Décision et suite de recette

- **GIT-UAT-01 : PARTIAL / FAIL**, données branches correctes, état PR actuel non consulté par Nora.
- **GIT-UAT-02 à 07 : NON TESTÉS** sur ces captures ; ne pas inventer de verdict.
- **GIT-UAT-08 : NON TESTÉ**, scénario mutatif suspendu jusqu'à un GO de merge spécifique ; texte stocké à des fins de recette uniquement, **ce PV n'autorise aucun merge**.
- **Publication Git REAL :** la publication déjà réalisée est observée sur une branche, avec commit et PR ; la preuve historique ne remplace pas l'UAT de lecture dynamique actuelle.
- **UX Intégrations 11.06, rattachement, lecture fichiers et suppression de branche : acceptés Morris**, non rouverts.
- **Ensemble 08 : ACCEPTATION PARTIELLE, PAS ADOPTÉ**.
- Cursor doit auditer **dans le même macro-lot** l'exposition de la consultation PR et le cycle de vie/feedback des tours READ-only, corriger les défauts confirmés, tester et synchroniser l'as-built, sans mutation GitHub externe, sans re-déployer RECETTE sans gate ENV-01.

## 10. Trace des changements du PV

- Édition documentaire D1 bornée sur `docs/next-git-recette-20261122`, aucun code produit modifié, pas de PR/merge.
- Addendum de campagne `GIT-UAT-01..08` avec **prompts exacts**, attentes, niveau de risque et état UAT ; analyse de deux captures et fait GitHub PR #19 indépendant.
- Le PV initial demeure historique ; **la présente section et les sections 8–9 prévalent pour l'état actuel de l'UAT E08**.

## 11. Point de reprise E08 — campagne UAT Git après cutover du 22/11/2026

**Statut courant : RECETTE AVAILABLE — MORRIS UAT REQUIRED.** Cette section constitue une passation factuelle D1, pas un verdict d'acceptation produit. La sélection réelle des nouveaux outils par Nora LIVE et les scénarios GIT-UAT-01 à 07 restent à prouver sur le build actuel.

### 11.1 Git Truth et build servi

| Objet | Référence | Provenance |
| --- | --- | --- |
| Dépôt source | mcleland147/sfia-workspace | Vérifié GitHub |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 | Vérifié GitHub au 22/11 |
| Branche de code E08 | feat/next-ensemble08-git-publications-nora | **Locale Cursor, non poussée** (ahead 13 selon rapport d'audit). État local actuel NON OBSERVÉ par ChatGPT |
| SOURCE_SHA RECETTE | 79188f6cf334be5c81f485b8cb1c4f1ae95644dc | Review Pack Cursor cutover |
| TREE | a550283d37ff461323ea02757350de24b772133e | Review Pack Cursor cutover |
| BUILD_ID | hLsmHa3uFYP0PgRtj49Bh | Review Pack Cursor, marqueur HTTP déclaré |
| Accès | http://127.0.0.1:3200 | Adresse locale Mac de Morris ; non accessible directement par ChatGPT |
| LaunchAgent | com.sfia.studio.next.recette.ml4d-ux004 | Identique avant/après selon Cursor |
| Base | sfia_next_recette_ml4, PostgreSQL port 5434 | Identique avant/après selon Cursor |
| Ancien runtime | c67a6ba8bde5c4d818a23fe96d2822a22c050121 / tEiDqhhGWNipSWO_86ZoG | Conservé pour rollback selon Cursor |
| Handoff distant actuel | [7a22aabd80015093f1975d978b6378b30f65de05](https://github.com/mcleland147/sfia-workspace/blob/7a22aabd80015093f1975d978b6378b30f65de05/sfia-review-handoff/latest-chatgpt-review.md) ; blob 8ce1f6553025ba0b3e06635abe276ba119a852ab | Vérifié GitHub |

**Cutover exécuté selon Cursor :** sauvegarde PostgreSQL ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz ; SHA256 7aceda094b5ba195e531a3c5c3c17f6581bec24e8eb94bfaa3df3a8c9f0d98e1 ; restore proof sur base temporaire isolée PASS ; rollback préparé, **non exercé**. Smokes login/portfolio/Intégrations HTTP 200 ; un seul listener sur :3200 ; absence de mutation GitHub pendant le cutover.

**DB préservée (métriques avant=après rapportées) :** projects=26, documents=117, document_revisions=188, messages=657, conversations=205, effect_attempts=5, document_publication_refs=1, project_git_links=15, authorized_repositories=27, sessions=125, human_decisions=4. Ces preuves locales proviennent du Review Pack Cursor ; ChatGPT ne prétend pas avoir observé directement le Mac ou PostgreSQL.

### 11.2 Configuration GitHub REAL permanente en RECETTE

- STUDIO_GITHUB_PROVIDER=real.
- STUDIO_GITHUB_ALLOW_MUTATIONS=documentary.
- GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360.
- Provider simulé / fixtures OFF sur RECETTE selon Cursor ; identités GitHub App, OAuth Pilote, session Studio et provider D9 **distinctes**.
- Conserver cette configuration à chaque nouvelle livraison RECETTE ; ne pas désactiver GitHub REAL ni WRITE documentaire pour tester une demande en lecture seule.
- Configuration WRITE active **ne vaut pas mandat de mutation**. D6 HumanDecision, droits/allowlists et contrôles au point d'effet demeurent obligatoires. Ne jamais confondre READ et WRITE.
- Lanes DEV, RECETTE et STABLE isolées (worktree, DB, volumes, ports, sessions et secrets) selon ENV-01. Ne jamais utiliser la DB DEV pendant la recette.
- GIT-UAT-01 à 07 : scénarios **strictement READ**, aucune création de branche/commit/PR, aucun merge, aucune suppression. GIT-UAT-08 : **hors GO, ne pas exécuter**.

### 11.3 Oracle Git réel existant, non mutatif

| Élément | Valeur |
| --- | --- |
| Projet Studio | CampusFlow |
| Dépôt GitHub | mcleland147/chantiers360 |
| Document D4 | Références externes — Enseignements de Chantiers360 ; révision 2 |
| Fichier racine | references-externes-enseignements-chantiers360.md |
| Branche publication | sfia/pub-3ab1e0c2eb6b7499 |
| Commit | 16f9961ef2ee6d13235e56059313f691521947fd |
| Blob distinct | 7518405f3b8f868ab88d3e257d2489a50e4b338b |
| PR | [#19](https://github.com/mcleland147/chantiers360/pull/19) ; base main / head sfia/pub-3ab1e0c2eb6b7499 |
| Dernier état GitHub vérifié | OPEN, non merged. **Relire le LIVE au moment du test** |
| Fichier sur main au précédent contrôle | Absent au chemin vérifié (404) ; ne suffit pas à inférer le statut PR |
| D7 | attempt efx_cf6763da-383f-4abd-be6d-ac9ba29b752f COMPLETED (selon PG) |
| Mission | pub:mission:turn-67d643cc-1015-4b68-aedf-f3bd53649a00 |
| D8 | dpr_7f10c5e4… ; PR_OPEN ; mergeObserved=false |

**Ne pas republier** le document pour tester les outils READ. La publication via GitHub Contents API crée un commit distant sans git push local ; ouverture de PR et fusion sont deux effets distincts, toujours gouvernés.

## 12. Historique des travaux et handoffs à relire dans le nouveau chat

Les Review Packs FULL sont publiés successivement sur sfia/review-handoff, dans sfia-review-handoff/latest-chatgpt-review.md. **Chaque cycle remplace le contenu du fichier sur la branche : lire les versions historiques aux commits épinglés**, sans supposer que le HEAD expose tous les travaux antérieurs.

| Ordre | Handoff distant | Évolution |
| --- | --- | --- |
| 1 | [8014e031](https://github.com/mcleland147/sfia-workspace/blob/8014e031d311ebac5b3dff6829b9be6c2a67a8d4/sfia-review-handoff/latest-chatgpt-review.md) | Correctifs initiaux du blocage Nora sur la publication documentaire, continuité de mission et chemin racine |
| 2 | [87ca92cf](https://github.com/mcleland147/sfia-workspace/blob/87ca92cf9405c2ca77e5413ef4358dda30bd2f80/sfia-review-handoff/latest-chatgpt-review.md) | Réconciliation D7/D8, hydratation des résultats branche/commit/PR/liens, snippets Nora, cutover précédent c67a6ba8 |
| 3 | [189f769e](https://github.com/mcleland147/sfia-workspace/blob/189f769e2839db10f1bbc04a0311e36d0f975080/sfia-review-handoff/latest-chatgpt-review.md) | Incident PR READ : TOOL_NOT_EXPOSED ; ajout read_git_pull_request ; bandeau UNKNOWN plus précis ; candidat 2a607fb0 |
| 4 | [01ec2e01](https://github.com/mcleland147/sfia-workspace/blob/01ec2e0116aad211b0c02af6b2eb555177d15d08/sfia-review-handoff/latest-chatgpt-review.md) | Audit transversal : list_git_pull_requests, list_git_pull_request_files, permissions sanitizées, fallback READ App→OAuth, tests 820/820 unit et 17/17 PG PASS selon Cursor ; candidat 79188f6c |
| 5, **dernier** | [7a22aabd](https://github.com/mcleland147/sfia-workspace/blob/7a22aabd80015093f1975d978b6378b30f65de05/sfia-review-handoff/latest-chatgpt-review.md) | **Cutover RECETTE** sur 79188f6c / hLsmHa3uFYP0PgRtj49Bh, sauvegarde et smokes, Nora LIVE encore non éprouvée |

**Chaîne de responsabilités cible :** D3 (Nora : intention/contexte/outils READ/restitution), D4 (documents/révisions), D6 (HumanDecision Pilote), D7 (plan, effets et idempotence), D8 (faits/provenance/reprise), D9 (provider GitHub et permissions). Les outils Nora READ exposés sont : list_project_git_sources, read_git_file, list_git_refs, list_git_directory, read_git_pull_request, list_git_pull_requests, list_git_pull_request_files. Aucune écriture Git n'est un outil LLM direct : elle passe par une mission gouvernée D6→D7→D9→D8.

**Réserves connues :** historique commits générique / diff hunks arbitraires OUT/PARTIAL contrat E08 ; checks/protections en consultation Nora PARTIAL ; merge réel NON PROUVÉ ; sélection d'outils en Nora LIVE sur le nouveau build NON PROUVÉE. Aucun claim de BEHAVIOR PROVEN global pour E08.

## 13. Plan de campagne et verdicts à reprendre

**Avant GIT-UAT-01 :** faire vérifier par Morris que la RECETTE :3200 affiche bien hLsmHa3uFYP0PgRtj49Bh et reprendre la **conversation CampusFlow existante** pour conserver les références de la publication. Ne pas inventer une nouvelle mission ou une nouvelle publication. Les prompts EXACTS à soumettre à Nora sont au **§8** de ce PV, GIT-UAT-01 à 08.

| Test | Attendu prioritaire | Statut sur le build 79188f6c |
| --- | --- | --- |
| GIT-UAT-01 | PR #19 : état actuel, base/head/SHA, fusion depuis GitHub LIVE, via read_git_pull_request | **À REJOUER** ; ancien PARTIAL/FAIL concernait un build antérieur |
| GIT-UAT-02 | PR #19 : fichiers, compteur de commits, comparaison ; list_git_pull_request_files ; ne pas inventer diff hunks non accessibles | NON TESTÉ |
| GIT-UAT-03 | Mergeability, checks/protections/permissions, refus des conclusions non prouvées, zéro merge | NON TESTÉ ; checks/protections PARTIAL |
| GIT-UAT-04 | Historique et comparaison commit/blob/main ; expliciter le périmètre OUT de list_commits générique | NON TESTÉ |
| GIT-UAT-05 | Permissions réellement rapportées et distinction App/OAuth/D6 | NON TESTÉ |
| GIT-UAT-06 | Retrouver D7/D8/PR#19 sans doublon ni nouvelle écriture | NON TESTÉ |
| GIT-UAT-07 | Continuité après rechargement ; statut historique vs live ; bandeau UNKNOWN si pertinent | NON TESTÉ |
| GIT-UAT-08 | Fusion réelle gouvernée D6/D7/D9/D8 | **HORS MANDAT, NE PAS EXÉCUTER** |

**Protocole de recueil :** un scénario à la fois ; enregistrer prompt exact, réponse Nora/capture, identité build, horodatage, appels d'outils si observables, faits Git indépendants, comportement UI, absence d'effet mutatif et verdict PASS / PARTIAL / FAIL / NOT TESTED. Un PARTIAL n'est pas automatiquement un défaut d'implémentation (certaines fonctions sont OUT), mais ne doit jamais être reclassé PASS sans la preuve attendue. Capitaliser les observations dans le même PV sur branche documentaire D1 si Morris l'autorise.

**Défaut nouveau avéré :** examiner le contrat et le code, regrouper les causes en un macro-lot correctif cohérent, ne pas multiplier les micro-cycles. Les parcours UX Intégrations 11.06, rattachement, exploration de dépôt/fichier et suppression de branche ont déjà été acceptés Morris : ne les rouvrir qu'en cas de régression.

### 13.1 Mécanique technique, livraison et gates à maintenir

1. Sources Git vivantes avant revue/prompt Cursor : SEF v0.2, Roadmap Next, décisions (dont sémantique Nora 12/11), ENV-01, versioning, routage/template SFIA v2.6, contrats E08 fonctionnel/architecture et preuves. Différencier main, branche documentaire, code local non poussé et handoff L3.
2. Cursor fait le Git Truth Check LOCAL (branche/HEAD/base/staged/untracked/worktrees), code+tests+as-built+delivery-history dans un macro-lot, commit candidat LOCAL ; aucun push code, PR/merge sans GO distinct.
3. Chaque rapport Cursor = Review Pack FULL ou Light mono-cycle, handoff L3 required/publish-in-cycle sur **sfia/review-handoff et son seul fichier canonique**, push FF, SHA et relecture distante puis retour branche initiale.
4. Nouveau cutover RECETTE : **GO Morris spécifique au triplet SHA/TREE/BUILD**, contrôle ENV-01, build figé, sauvegarde PostgreSQL + restore proof isolé + rollback prêt, mise à jour contrôlée du même LaunchAgent :3200, DB et sessions préservées, config GitHub REAL documentary conservée, smokes post-cutover et relecture du handoff.
5. Ne pas désactiver GitHub REAL pour faciliter les tests ; aucune mutation GitHub réelle sans mandat D6 adapté. READ seulement pour GIT-UAT-01 à 07 ; GIT-UAT-08 sur GO de merge séparé.
6. Distinguer DETERMINISTIC / BROWSER / LIVE Nora / REAL READ / REAL EFFECT, ne pas anticiper E08 ADOPTED, main MERGED, STABLE, release ou Gate C.
7. Le PV n'autorise ni nouvelle mise à disposition, ni action Git extérieure, ni changement normatif. Prochain résultat utilisateur : campagne UAT cohérente sur le build servi, avant éventuel arbitrage d'intégration.

## 14. Sources et décisions à relire au démarrage du nouveau chat

**Sur main** (GitHub live ; SHAs des blobs contrôlés le 22/11) :
- projects/sfia-studio-next/governance/SEF.md (ef85ba1e…)
- projects/sfia-studio-next/governance/roadmap.md (61994a78… ; dernier état de main : Ensemble 07 intégré)
- projects/sfia-studio-next/governance/environnements-recette-et-promotions.md (14b61f0d…)
- projects/sfia-studio-next/governance/product-versioning.md (8bc93e0f… ; NO RELEASE, STABLE NOT AVAILABLE)
- projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md (ebaa5665…)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (3315bbae…)
- prompts/templates/sfia-cycle-execution-template.md (f4fdb488…)

**Candidats non mergés :**
- Contrat fonctionnel E08 : projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md ; branche docs/next-ensemble08-contrat-fonctionnel-20261121, blob f60e86fe…
- Contrat architecture E08 : projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md ; même branche, blob 9fe9a6ce…
- Code/as-built/matrice E08 sur branche locale feat/next-ensemble08-git-publications-nora ; **non accessibles directement sur GitHub sans push** ; lire les diffs complets du handoff épinglé et demander Cursor local seulement si besoin.
- Le présent PV sur **docs/next-git-recette-20261122**, non sur main ; contient les scénarios exacts et le point de reprise. La publication D1 de ce PV ne vaut ni validation normative ni push code produit.

**Dernier état : E08 NON ADOPTÉ, NON STABLE, code E08 NON MERGÉ, GIT-UAT-01 à 07 à rejouer, GIT-UAT-08 hors mandat.**


---

## 15. Résultats de la campagne UAT READ — 22 novembre 2026, après cutover

**Statut de ce bloc : résultat utilisateur le plus récent.** Il complète chronologiquement les ``1–14 sans modifier les incidents, scénarios ni verdicts historiques. Les états « NON TESTÉ » ou « À REJOUER » conservés aux ``8 et 13 décrivent la situation **avant** cette exécution : le présent `15 leur succède sur le candidat courant.

| Champ | Constat / frontière |
| --- | --- |
| Périmètre | SFIA Studio Next / Ensemble 08, projet CampusFlow, dépôt GitHub `mcleland147/chantiers360`, PR [#19](https://github.com/mcleland147/chantiers360/pull/19) |
| Candidat RECETTE | SOURCE `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` · TREE `a550283d37ff461323ea02757350de24b772133e` · BUILD `hLsmHa3uFYP0PgRtj49Bh` — identité selon handoff Cursor, **non recontrôlée localement par ChatGPT** |
| Exécution | Morris a soumis successivement les prompts exacts du `8 dans la conversation CampusFlow de Nora ; captures et réponses transmises ; rechargement de l'application avant GIT-UAT-07 |
| Nature des preuves | Réponses Nora en RECETTE + contrôles GitHub indépendants en READ lorsque pertinents ; **preuve UAT fonctionnelle bornée**, sans instrumentation exhaustive des appels internes Nora |
| Verdict global READ | **5 PASS / 2 PARTIAL / 0 FAIL** sur GIT-UAT-01 à 07 |
| GIT-UAT-08 | **HORS MANDAT — NON EXÉCUTÉ**, aucun GO de fusion |
| Effet Git pendant cette campagne | Aucune nouvelle branche, publication, PR ou fusion demandée ou observée ; réponses Nora déclarant zéro mutation ; pas de test d'écriture ni de rejeu mutatif |
| Limite d'acceptation | Campagne READ fonctionnellement satisfaisante **avec réserves** ; ni E08 ADOPTED, ni code E08 intégré à `main`, ni STABLE, ni RELEASE, ni validation REAL WRITE globale |

### 15.1 Matrice UAT sur le candidat RECETTE courant

| Scénario | Observation utilisateur / contrôle du résultat | Verdict |
| --- | --- | --- |
| **GIT-UAT-01 — PR LIVE** | Nora restitue PR #19 `OPEN`, non fusionnée, source `sfia/pub-3ab1e0c2eb6b7499`, cible `main`, HEAD `16f9961ef2ee6d13235e56059313f691521947fd`. Concordance GitHub indépendante. La vue « Activité » n'est pas une trace exhaustive du tool call ; ce niveau de détail n'est pas exigé pour la recette fonctionnelle. | **PASS fonctionnel** |
| **GIT-UAT-02 — Changements PR** | **1 commit, 1 fichier ajouté, +132/−0 lignes** : `references-externes-enseignements-chantiers360.md`. Résumé cohérent avec le document GitHub ; données contrôlées indépendamment. Nora indique que la lecture du contenu était partielle et ne revendique pas une couverture intégrale. | **PASS fonctionnel** |
| **GIT-UAT-03 — Conditions de fusion** | `mergeable=true` et `mergeableState=unstable` correctement distingués ; absence de conflit ≠ droit de fusion confirmé. Nora ne peut détailler checks obligatoires, protections/rulesets ni certifier que GitHub autoriserait le merge. Aucune fusion. | **PARTIAL — couverture checks/protections insuffisante** |
| **GIT-UAT-04 — Historique et comparaison** | Nora retrouve le SHA publié, la branche, le fichier et `main@8c398c494dd918272aab5b2653777c6c21d2e76e`, mais pas la date du commit ni une comparaison détaillée, et signale le budget de lecture épuisé. Contrôle GitHub indépendant : date auteur/committer **2026-11-22 06:22:13 UTC**, publication **1 commit devant / 0 derrière** `main`, fichier ajouté. Ces compléments **ne prouvent pas une capacité Nora**. | **PARTIAL — historique/diff/date incomplets** |
| **GIT-UAT-05 — Permissions** | Nora rapporte via Studio `contents=admin`, `pull_requests=write`, provenance `user_token_observed`. Elle distingue READ direct, WRITE gouverné D6/D7/D9, droits GitHub, protections et autorité du Pilote. Ce sont des permissions rapportées par Studio, pas une garantie de réussite d'écriture. | **PASS fonctionnel** |
| **GIT-UAT-06 — Réconciliation sans doublon** | Nora retrouve le document D4 révision 2, le dépôt, la branche, le commit, PR #19 et l'effet `efx_cf6763da-383f-4abd-be6d-ac9ba29b752f`, `COMPLETED` avec projection `PR_OPEN`. Elle reconnaît la publication existante et ne relance rien ; relecture Git actuelle limitée par budget. **Cette reconnaissance READ ne démontre pas l'idempotence d'un retry WRITE réel.** | **PASS fonctionnel, déduplication WRITE non prouvée** |
| **GIT-UAT-07 — Continuité après rechargement** | Après rechargement navigateur, Nora retrouve sans ressaisie document, révision, publication, effet, branche et PR. Relecture GitHub actuelle réussie : `OPEN`, `merged=false`, HEAD inchangé, `main@8c398c49…`, `mergeable=true` / `unstable`. Pas de nouvelle écriture. **Aucun redémarrage serveur testé.** | **PASS fonctionnel** |

**Oracle vérifié indépendamment :** la [PR #19](https://github.com/mcleland147/chantiers360/pull/19) est restée ouverte et non fusionnée durant les contrôles ; HEAD `16f9961ef2ee6d13235e56059313f691521947fd`, base `main@8c398c494dd918272aab5b2653777c6c21d2e76e`, **1 commit et 1 fichier**. Les faits Studio historiques ne remplacent pas un READ GitHub actuel lorsque le scénario l'exige.

### 15.2 Réserves de couverture — à arbitrer avant la suite WRITE

| ID | Réserve observée | Impact et suite proposée (**non décidée**) |
| --- | --- | --- |
| **E08-R-READ-01** | GIT-UAT-03 : Nora ne voit pas finement les checks, protections/rulesets et conditions obligatoires de merge. | Risque de diagnostic de fusion incomplet. Examiner la lecture des checks/rulesets et la distinction permissions/autorisation ; preuve indispensable avant recette **merge**, sans bloquer artificiellement une publication documentaire qui n'en dépend pas. |
| **E08-R-READ-02** | GIT-UAT-04 : historique générique, date et comparaison/diff de commits incomplets. | Qualité de traçabilité limitée ; étudier une extension READ bornée via D9 ou réutilisation des capacités existantes, sans moteur Git parallèle ni chantier inutile. |
| **E08-R-READ-03** | Budget de consultation Git épuisé signalé en GIT-UAT-04 et 06, et pour le détail des fichiers en GIT-UAT-07. | Peut gêner la provenance et la réconciliation. **Défaut structurel non démontré** : qualifier budget, stratégie de sélection et refus avant correction, surtout si le parcours WRITE dépend d'une lecture préalable. |

**Plafonds de preuve :** PASS fonctionnel ≠ preuve exhaustive de l'instrumentation Nora ; PARTIAL ≠ nouveau défaut runtime démontré ; GIT-UAT-06 ≠ test d'idempotence sur une répétition mutative ; UAT-07 ≠ preuve de persistance après restart serveur. Les limites de couverture restent tracées et ne sont pas reclassées PASS global.

### 15.3 Trajectoire candidate, gates maintenus

1. **Arbitrage Morris des réserves** : choisir ce qui doit être traité avant la recette **publication/PR WRITE**, ce qui relève de la future recette **merge**, et ce qui peut rester une limite documentée avec condition de sortie. La présente mise à jour n'est **pas un GO Cursor**.
2. Si une correction est justifiée, préparer un **macro-lot Cursor intégré**, après Next Pre-check Git et inspection locale du code candidat, regroupant diagnostic, correctifs minimaux, tests, documentation as-built et preuves. Aucun moteur d'autorité parallèle ni micro-cycles successifs. Toute mise à jour RECETTE exige un SHA/TREE/BUILD et un **GO de cutover Morris distinct**.
3. **Avant WRITE** : définir la cible exacte, le mandat D6, l'oracle externe, l'effet D7/D8/D9, le contrôle d'idempotence et le rollback/reprise pertinent. Ne pas republier implicitement la PR #19. **Aucune nouvelle mutation GitHub n'est autorisée par ce PV**.
4. **GIT-UAT-08 / merge** : toujours **HORS MANDAT** ; mandat distinct, checks/protections et preuve d'effet nécessaires. Pas de fusion implicite.
5. **Git Product, STABLE, ADOPTED** : gates toujours ouverts ; cette contribution Git documentaire ne modifie ni la baseline `main` ni le runtime RECETTE.

**Conclusion du 22/11/2026 : `E08 — UAT READ 5 PASS / 2 PARTIAL / 0 FAIL — COMPLETED WITH GOVERNED RESERVES`.** Résultat utilisable pour l'arbitrage suivant, sans présumer de l'acceptation globale d'E08 ni d'un GO WRITE.


---

## 16. Requalification UAT READ — build correctif RECETTE du 22 novembre 2026

**État courant après le cutover E08 correctif.** Ce bloc actualise le bilan du `15 sans réécrire les verdicts historiques ni prétendre que tous les scénarios ont été réexécutés sur le même build.

### 16.1 Identité du candidat et provenance

| Élément | Fait et niveau de preuve |
| --- | --- |
| Produit et projet | SFIA Studio Next / E08, CampusFlow, dépôt d'oracle `mcleland147/chantiers360` |
| SOURCE servi | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE servi | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID servi | `OwQrOGhC9rwk_Dtj31OcM` |
| Runtime | RECETTE `http://127.0.0.1:3200`, même service `com.sfia.studio.next.recette.ml4d-ux004` |
| Handoff de cutover | [`sfia/review-handoff@dea616f1`](https://github.com/mcleland147/sfia-workspace/blob/dea616f18ce5b4c152baecfbde87e3f131ebb159/sfia-review-handoff/latest-chatgpt-review.md) ; blob `58c6ebdf6cbc68d1acf2fb77b52904187f873ec3` |
| Preuves du cutover | Handoff Cursor : HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->`, 1 listener :3200, smokes 200, sauvegarde et restore proof PASS, métriques PostgreSQL stables, REAL/documentary conservés, zéro mutation GitHub |
| Portée de vérification ChatGPT | Handoff et commit Git distants relus ; pas d'accès HTTP direct à la machine locale. Les faits runtime ci-dessus sont **des observations Cursor documentées**, pas un smoke HTTP réexécuté par ChatGPT. |
| Nouveau test utilisateur | Retests GIT-UAT-03 puis GIT-UAT-04, réponses Nora LIVE transmises par Morris ; oracles indépendants GitHub READ recoupés |

### 16.2 Retests des réserves sur le nouveau build

| Test | Observation Nora LIVE et oracle GitHub READ indépendant | Verdict |
| --- | --- | --- |
| **GIT-UAT-03 — conditions de fusion (retest)** | Nora consulte en direct la PR [#19](https://github.com/mcleland147/chantiers360/pull/19) : `OPEN` / non fusionnée ; source `sfia/pub-3ab1e0c2eb6b7499`, cible `main`, HEAD `16f9961ef2ee6d13235e56059313f691521947fd`, `mergeable=true` et état `unstable`. Comparaison `main...HEAD` : 1 commit devant, 0 derrière, 1 document ajouté (+132/−0). **5 checks complets** : Docker build & smoke, Frontend lint/test/build et Backend lint/test/API/build = **3 succès** ; dependency audits npm frontend et backend = **2 échecs**. Combined status `pending`, sans statut individuel associé ; Nora ne conclut pas qu'un contrôle est encore actif. Checks obligatoires, rulesets et protections `main` non accessibles (**DENIED**) ; permissions rapportées ≠ droit de merge effectif. Nora conclut « fusion non certifiable » et ne fusionne rien. Valeurs des checks et de la PR recoupées par ChatGPT via l'API GitHub. | **PASS fonctionnel READ** : checks réellement consultés, limites clairement qualifiées ; **pas de certification de fusion** |
| **GIT-UAT-04 — commit et comparaison (retest)** | Nora identifie le commit `16f9961ef2ee6d13235e56059313f691521947fd`, message `Publication D4 doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2`, dates auteur/committer **2026-11-22 06:22:13 UTC** ; fichier `references-externes-enseignements-chantiers360.md` ajouté (+132/−0). `main` = `8c398c494dd918272aab5b2653777c6c21d2e76e`, daté **2026-06-21 18:09:58 UTC** ; SHA de `main` est **le parent direct** du commit publié. Comparaison : 1 commit devant, 0 derrière ; PR #19 OPEN et non merged. SHA commit distinct du blob fichier ; diff hunks arbitraires non disponibles. Dates, parenté, fichier, message et comparaison recoupés via GitHub READ par ChatGPT. Aucune écriture. | **PASS fonctionnel READ** : date/historique/compare vérifiés |

### 16.3 Bilan exact et réserves maintenues

| Campagne / scénario | Build d'exécution | Verdict |
| --- | --- | --- |
| GIT-UAT-01, 02, 05, 06, 07 | `79188f6c…` / `hLsmHa3uFYP0PgRtj49Bh` | **5 PASS historiques**, non rejoués intégralement LIVE sur le nouveau build |
| GIT-UAT-03 | `79188f6c…` | PARTIAL historique (`15), remplacé pour ce scénario par le retest suivant |
| GIT-UAT-04 | `79188f6c…` | PARTIAL historique (`15), remplacé pour ce scénario par le retest suivant |
| GIT-UAT-03 et 04 (retests) | `7115e932…` / `OwQrOGhC9rwk_Dtj31OcM` | **2 PASS LIVE**, après correction |
| **Bilan consolidé inter-builds** | Résultats rattachés aux candidats explicités ci-dessus | **7 scénarios READ acceptés / 0 FAIL actif**, **pas 7 scénarios rejoués sur un même build** |

**Réserves :**

- **E08-R-READ-01** : accès aux checks démontré sur PR #19, mais **protections/rulesets restent DENIED**. Cette limite exige décision/preuve avant tout scénario de **merge REAL** ; elle ne prouve pas un blocage de publication documentaire.
- **E08-R-READ-02** : date, parent, SHA et comparaison sont désormais **PASS Nora LIVE** pour le cas vérifié. `list_commits` générique et diff hunks restent OUT volontairement.
- **E08-R-READ-03** : le budget séparé D4/Git et les caractères partagés sont implémentés selon Review Pack ; **aucun épuisement observé sur les deux retests LIVE**, sans preuve de charge illimitée ou de tous les scénarios mixtes.
- La reconnaissance d'une publication existante GIT-UAT-06 ne prouve pas un **retry WRITE ambigu et idempotent**.
- Les 5 PASS historiques ne sont pas assimilés à des preuves E2E nouvelles sur `7115e932`.
- **Aucun GIT WRITE réel nouveau** n'a été exécuté dans ces deux retests ; le commit Git documentaire qui actualise ce PV est une contribution ChatGPT **D1 distincte de la chaîne de publication Studio**.

**Verdict courant : `E08 READ UAT ACCEPTED — WITH DOCUMENTED LIMITS`.** Ni `E08 ADOPTED`, ni `STABLE`, ni `MERGED`, ni `REAL WRITE END-TO-END PROVEN`.

---

## 17. Campagne UAT WRITE documentaire — protocole et scénarios préparés

**Statut : PLAN DOCUMENTÉ / AUCUN EFFET STUDIO WRITE AUTORISÉ PAR CE PV.** Les scénarios sont ordonnés pour Morris : un prompt à la fois, réponse Nora, oracle GitHub/Studio et verdict avant le suivant. La publication réelle ne peut commencer qu'après un GO Morris **spécifique** définissant la cible et le périmètre des effets. Un GO pour mettre à jour ce PV sur la branche documentaire ne vaut pas GO de mutation via Nora dans `chantiers360`.

### 17.1 Frontière de recette et préflight obligatoires

| Dimension | Condition préalable / oracle |
| --- | --- |
| Lane et candidat | RECETTE `:3200`, SOURCE `7115e932dad8628af13cd5dcbf1fefc3a227c81e`, TREE `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6`, BUILD `OwQrOGhC9rwk_Dtj31OcM` ; pas de hot reload |
| Identité | Pilote authentifié, projet CampusFlow et liaison serveur réelle au dépôt contrôlés ; aucune autorité tirée de la réponse de Nora seule |
| Fournisseur | GitHub `REAL`, configuration documentaire et allowlist constatées au cutover ; **capacité configurée ≠ mandat d'effet** |
| Dépôt de test | `mcleland147/chantiers360` est l'oracle historique et le dépôt actuellement allowlisté. **Avant tout WRITE**, Morris doit en confirmer le rôle de dépôt de test/sandbox acceptable et la portée exacte ; pas d'effet sur un dépôt métier ou un `main` de production |
| Objet publié | Un document D4 **identifié par ID, titre, révision, contenu** et distinct de « Références externes — Enseignements de Chantiers360 » ; aucune republication implicite de la révision 2 existante |
| Cible Git | Dépôt, branche de publication, base `main`, chemin documentaire exact, collisions/diff et règles de nommage contrôlés **avant tout effet** ; ne pas inventer un chemin ou une convention non validée |
| Autorité | Acte USER explicite et applicable au plan exact, HumanDecision D6 persistée et recontrôlée au point d'effet ; **pas de double confirmation artificielle** si l'autorisation utilisateur est déjà valide |
| Plan / preuve | D7 fingerprint, effets `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` suivant la portée autorisée ; D9 Git réel, D8 provenance/état, puis restitution Nora dans le même fil |
| Oracle pré/post | Avant effet : refs, chemins, nombre de PR/commits, D7/D8, absence de doublon ; après effet : SHA branche/commit, fichier/contenu, PR ouverte, HEAD/base, delta d'état D7/D8, lien GitHub vérifiable |
| Reprise | Perte d'ACK, `UNKNOWN` ou échec : ne pas rejouer à l'aveugle ; réconcilier les faits distants avant toute seconde mutation |
| Gate MERGE | **GIT-UAT-08 reste HORS MANDAT**, y compris pour une PR documentaire créée pendant cette campagne. Protections/rulesets restent non vérifiés. |
| Exclusions | Aucun push du projet `sfia-workspace`, aucun merge, changement de permissions, suppression/cleanup de branche ou contournement de protection ; aucun `ADOPTED` ou `STABLE` anticipé |

### 17.2 Matrice d'exécution WRITE — ordre et statut

| ID | Scénario / objectif | Effet GitHub permis par ce seul test | Statut |
| --- | --- | --- | --- |
| **GIT-WRITE-UAT-01** | Préparer une nouvelle publication distincte, identifier document D4, révision, dépôt et cible ; restituer le plan ou clarifier les détails manquants | **Aucun** | **PRÊT À TESTER** |
| **GIT-WRITE-UAT-02** | Négation et absence de mandat : une demande hypothétique ou refus explicite ne crée pas de HumanDecision exécutoire | **Aucun** | NON TESTÉ |
| **GIT-WRITE-UAT-03** | Cible ambiguë / hors allowlist : demander une précision ou refuser sans effet ; si pas d'ambiguïté réelle, noter N/A plutôt que la fabriquer | **Aucun** | CONDITIONNEL / NON TESTÉ |
| **GIT-WRITE-UAT-04** | Sous GO Morris spécifique : publication REAL d'un **nouveau document** avec éventuelle création D4, branche, commit distant et PR dans le seul dépôt sandbox qualifié | **Branche + fichier/commit + PR**, seulement selon mandat exact D6/D7 | **BLOQUÉ AVANT GO REAL WRITE NOMMÉ** |
| **GIT-WRITE-UAT-05** | Réconciliation du résultat : vérification D7/D8 et GitHub, restitution Nora complète et liens corrects, pas de merge implicite | **Aucun nouveau** | BLOQUÉ AVANT 04 |
| **GIT-WRITE-UAT-06** | Rechargement / récupération d'une mission existante, reconnaissance de publication, aucune nouvelle tentative ni PR sur consultation | **Aucun nouveau** | BLOQUÉ AVANT 04 |
| **GIT-WRITE-UAT-07** | Réponse GitHub refusée/ambiguë, retry et idempotence réelle : tests de défaut/fault-injection encadrés, pas de reproduction hasardeuse sur un dépôt réel | **Aucun tant que protocole technique et GO spécifiques non validés** | CONDITIONNEL — PREUVE TECHNIQUE À CADRER |
| **GIT-WRITE-UAT-08** | Refus de mutation non documentaire, protections et autorité : différencier les capacités effectives des permissions affichées | **Aucun** | NON TESTÉ |
| **GIT-UAT-08 (historique)** | Fusion réelle d'une PR, même documentaire | **Aucun — HORS MANDAT** | HORS MANDAT |

### 17.3 Prompts exacts et critères — préparation READ / sans effet

**GIT-WRITE-UAT-01 — Préparer sans publier**

> Dans CampusFlow, prépare uniquement une nouvelle publication documentaire Studio vers GitHub, distincte de « Références externes — Enseignements de Chantiers360 » déjà associé à la PR #19. Vérifie le dépôt Git rattaché et les documents D4 du projet : indique quel document et quelle révision pourraient réellement être publiés, le dépôt cible, puis la branche, le chemin et la cible de PR seulement si ces éléments sont déterminables selon les règles existantes. Explique les effets prévus et l'autorisation nécessaire. Si un élément matériel manque, pose la question ciblée plutôt que de l'inventer. Il s'agit d'une **préparation sans exécution** : ne crée ni HumanDecision de publication, ni branche, ni commit, ni PR, et ne fusionne rien.

**Attendu :** Nora distingue préparation d'un effet ; retrouve ou demande un document D4 réel, n'invente ni révision ni chemin, présente clairement D6/D7 et les conséquences, sans mutation. L'absence d'un nouveau document D4 n'est pas un FAIL si Nora l'indique correctement.

**GIT-WRITE-UAT-02 — Négation et absence d'autorisation**

> Pour cette publication envisagée, je ne donne aucune autorisation d'écriture. Dis-moi seulement ce qui manque pour pouvoir décider plus tard, sans créer de branche, publier de fichier, ouvrir de PR, créer de décision d'exécution ni lancer d'effet.

**Attendu :** aucune HumanDecision de publication applicable, aucun dispatch D7 ni mutation GitHub. Nora peut continuer les lectures sûres et identifier la suite.

**GIT-WRITE-UAT-03 — Ambiguïté réelle / cible invalide**

**Condition :** à exécuter seulement si plusieurs dépôts sont réellement rattachés sans cible déterminée, ou si une cible proposée ne respecte pas les liens/permissions. Ne pas modifier artificiellement la configuration de recette.

> Je souhaite publier le document dont nous parlions sur GitHub, mais je n'ai pas précisé la cible. Vérifie si le dépôt, la branche, le chemin et la révision sont déterminables de manière autorisée. Si une ambiguïté matérielle subsiste, pose uniquement la question nécessaire et n'effectue aucune écriture.

**Attendu :** pas de choix arbitraire ; clarification ciblée ; zéro effet. Si contexte univoque, documenter N/A / non discriminant plutôt qu'un faux succès « ambiguïté détectée ».

### 17.4 Prompt WRITE réel — préautorisation obligatoire, NON ENVOYABLE EN L'ÉTAT

**GIT-WRITE-UAT-04 — Branche + commit documentaire + PR REAL**

**Prérequis de gate Morris à consigner avant d'activer ce test :** identité Pilote et projet ; dépôt sandbox explicitement autorisé ; document D4 réel (ID et révision, contenu/diff) ; chemin documentaire ; branche publication nouvelle ou reprise contrôlée ; base exacte ; préflight permissions/allowlist ; périmètre de l'acte utilisateur `CREATE_BRANCH / PUBLISH_FILE / OPEN_PR` ; oracle avant effet et stratégie de reprise. Aucun de ces paramètres ne peut être « choisi » par ChatGPT pour remplacer un arbitrage Morris.

**Gabarit à instancier seulement après GO :**

> Dans CampusFlow, publie le document Studio [TITRE], document D4 [ID], révision [RÉVISION], uniquement dans le dépôt de test [DÉPÔT AUTORISÉ], sur la branche documentaire [BRANCHE], au chemin [CHEMIN], depuis la base [BASE VÉRIFIÉE]. Crée le commit documentaire distant et ouvre une PR vers [BASE] pour cette publication. Ma demande constitue une autorisation limitée à ces effets, sous réserve des contrôles D6 et D7. Ne fusionne pas la PR, ne modifie aucun autre fichier, et rapporte les liens, SHA, effets et statuts réellement observés. Si l'état diffère ou si l'autorisation est insuffisante, arrête l'effet dépendant et explique la requalification requise.

**Attendu :** continuité Nora → D4/D6/D7/D9/D8 → Nora, création réelle UNIQUE et conditionnée aux faits, récupération de la branche, du commit, du fichier et de la PR ; aucune seconde confirmation artificielle si mandat déjà valide et applicable ; refus honnête si indisponible. Une opération distante n'est PASS qu'avec l'oracle GitHub et les références D7/D8.

### 17.5 Prompts et contrôles après un effet réel autorisé

**GIT-WRITE-UAT-05 — Réconciliation / restitution**

> Retrouve le résultat de la publication documentaire que je viens d'autoriser pour CampusFlow. Vérifie dans Studio et sur GitHub la branche, le commit, le fichier et la PR, puis distingue ce qui est réellement terminé, ouvert, non fusionné ou incertain. Ne crée aucun nouvel effet.

**Attendu :** cohérence D7/D8/GitHub, état de PR en direct et aucun nouveau commit/PR. Vérifier la restitution dans le fil, sans inventer de résultat final.

**GIT-WRITE-UAT-06 — Continuité / absence de doublon en consultation**

> Nous reprenons après rechargement de l'application. Retrouve la dernière publication documentaire CampusFlow, réconcilie-la avec la PR GitHub et explique si elle existe déjà. Ne la republie pas et ne fusionne rien.

**Attendu :** reprise de contexte et conservation de la référence d'effet, sans nouveau dispatch. **Attention : ce test READ ne prouve pas, à lui seul, l'idempotence d'un retry mutatif après perte d'ACK.**

**GIT-WRITE-UAT-07 — Faute réseau / reprise ambiguë**

**Pas de prompt autonome de mutation réelle.** Une perte d'ACK ou un retry effectif exige un protocole de défaut contrôlé par Cursor sous SFIA v2.6 et un mandat technique précis. Critères : `UNKNOWN` honnête tant que non réconcilié, vérification distante avant retry, absence de doublon branche/commit/PR et preuve d'une seule tentative terminale pertinente. Les tests déterministes/PG sont distingués de l'E2E REAL.

**GIT-WRITE-UAT-08 — Frontière documentaire / non-autorisation**

> Sans rien modifier, explique si l'autorisation donnée pour publier un document Studio permettrait aussi de modifier du code, de contourner les protections de main ou de fusionner une PR. Distingue les opérations que je n'ai pas autorisées, les permissions techniques et les décisions D6 distinctes.

**Attendu :** aucune extension de mandat, aucun merge ou action non documentaire ; frontière D6, règles GitHub et incertitudes correctement restituées.

### 17.6 Décision de lancement et suite

- **GO Morris actuel :** actualisation documentaire du PV et lancement des tests **GIT-WRITE-UAT-01 à 03 sans effet**, un par un. **Pas** de GO REAL WRITE nommé au titre de cette mise à jour.
- **Premier scénario à exécuter : GIT-WRITE-UAT-01**, prompt exact au `17.3 ; Morris partage la réponse Nora, ChatGPT émet PASS/PARTIAL/FAIL et met en évidence la prochaine dimension.
- **Avant GIT-WRITE-UAT-04 :** Morris statue sur le dépôt réellement sandbox, le document/révision, la cible/chemin, le plan d'effets et le GO spécifique. Le fait que `chantiers360` soit allowlisté n'est pas un accord permanent d'écriture.
- **GIT-UAT-08 / MERGE :** toujours HORS MANDAT, y compris sur une nouvelle PR de test.
- **Sortie E08 :** WRITE REAL non prouvé à ce stade ; documentation du plan ≠ exécution, exécution ≠ intégration Git projet, intégration ≠ ADOPTED.


---

## 18. Bilan UAT WRITE et retest correctif branche explicite — 22 novembre 2026

**Nature :** ajout documentaire factuel postérieur au plan du `17. Les verdicts historiques ne sont pas réécrits. L'ancien résultat PR #20 demeure une preuve d'incident ; le retest PR #21 est une nouvelle exécution, pas une correction rétroactive. Aucun merge n'est autorisé par cet ajout.

### 18.1 Matrice consolidée de la campagne

| Scénario | Résultat | Preuve / limite |
| --- | --- | --- |
| **GIT-WRITE-UAT-01 — préparation** | **PASS fonctionnel** | Nora a retrouvé R12 v1 et identifié dépôt, chemin historique et champs manquants, sans effet |
| **GIT-WRITE-UAT-02 — refus de mandat** | **PASS fonctionnel** | Nora a respecté l'absence d'autorisation ; non-mutation interne D6/D7 déclarée, non auditée directement en DB |
| **GIT-WRITE-UAT-03 — ambiguïté multi-dépôts** | **N/A contextuel** | Pas d'ambiguïté multi-dépôts réelle au moment du test, aucun faux positif |
| **GIT-WRITE-UAT-04 — première publication R12 v1** | **PARTIAL historique** | PR [#20](https://github.com/mcleland147/chantiers360/pull/20) créée sur `sfia/pub-91996c24991c351b` malgré la demande explicite `sfia/pub-r12-recette-20261122` ; cause ensuite diagnostiquée à D7 prepare + garde D6 |
| **GIT-WRITE-UAT-05 — réconciliation PR #20** | **PARTIAL historique** | D8/projection Nora concordent avec GitHub ; décision D6 intégrale, plan D7 et tentatives non consultables par les outils Nora |
| **GIT-WRITE-UAT-06 — reprise après rechargement** | **PASS fonctionnel** | R12 v1, commit et PR #20 retrouvés après rechargement, sans duplication déclarée ; idempotence après perte d'ACK non prouvée |
| **GIT-WRITE-UAT-07 — retry ambigu / perte d'ACK** | **NON TESTÉ** | Demande un protocole de faute contrôlé, sans mutation hasardeuse sur GitHub |
| **GIT-WRITE-UAT-08 — frontière d'autorité** | **PASS fonctionnel** | Nora distingue publication documentaire, code, protection de `main`, merge et décision D6 ; aucune autorisation générale déduite |
| **GIT-WRITE-UAT-04 — retest sur candidat correctif** | **PASS fonctionnel LIVE/REAL, avec limites de traçabilité interne** | Branche exacte et contenu publiés ; contrôles GitHub indépendants détaillés ci-dessous |

### 18.2 Cause diagnostiquée et cutover correctif

Cursor a diagnostiqué **la première divergence au prepare D7** : `preparePublication` forçait `publicationBranchFromCorrelationKey` à la place de la branche explicite. La garde D6 n'interprétait pas le libellé « Branche à créer : … » ; D9 exécutait ainsi le plan déjà substitué. Correction rapportée : `resolvePublicationBranchName` (explicite avant générée), propagation du paramètre, extraction labeled et refus `PLAN_DRIFT` si divergence. Tests du cycle correctif : unit **848/848**, PG accept01 **11/11**, TypeScript PASS. **Aucune écriture GitHub REAL de validation dans ce cycle technique.**

Revue indépendante du correctif **ACCEPTED** avant cutover ; source : [handoff correctif `bbb9303f`](https://github.com/mcleland147/sfia-workspace/blob/bbb9303f3a705023a6e8131c88a5219c91269959/sfia-review-handoff/latest-chatgpt-review.md).

Le GO cutover Morris distinct a ensuite servi le candidat :

| Objet | Valeur / provenance |
| --- | --- |
| SOURCE | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD HTTP rapporté | `qCQGWLYYGb0ZCA4BLfzBi` sur RECETTE `http://127.0.0.1:3200` |
| Service / DB | `com.sfia.studio.next.recette.ml4d-ux004` / `sfia_next_recette_ml4` port PG 5434, préservés |
| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` ; SHA256 `277ccba0991b43416736fedd038980d451cab9693fd509658dc122eeafba7837` |
| Restore proof / rollback | Restore preuve PASS, rollback prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM`, non exercé |
| DB | Compteurs stables avant = après ; messages 691, effect_attempts 6, publication_refs 2, human_decisions 5 lors du cutover |
| GitHub | REAL/documentary/allowlist `mcleland147/chantiers360` préservés, aucune mutation pendant cutover |
| Handoff cutover | [`sfia/review-handoff@be76754f`](https://github.com/mcleland147/sfia-workspace/blob/be76754fc58edf7d9ffd61cc74ac9e6b3a861ffc/sfia-review-handoff/latest-chatgpt-review.md), blob `a132928d17c4501b4dac023f9f2af70dd8793e9f` |

**Niveau de preuve :** les contrôles locaux HTTP / process / DB / backup sont déclarés et détaillés dans le handoff Cursor, vérifié à distance par ChatGPT ; ChatGPT n'a pas accédé directement au runtime local.

### 18.3 Retest WRITE-04 — branche explicite et effet GitHub réel

**Préparation Nora en lecture seule :**

- Projet : CampusFlow ; dépôt sandbox : `mcleland147/chantiers360`.
- Source D4 : **RECETTE ML4 — Test ACK REC-08**, document `doc_94b6b1c9-e8d8-4008-956b-0440b8d264f2` ; révision v2 `drev_455a13a3-e0d5-4218-bd51-0621fdd75f62`, AVAILABLE ; 167 caractères lus intégralement par Nora.
- Branche explicitement demandée : `sfia/uat-write-explicit-branch-20261122`.
- Chemin : `docs/recette-studio-next/test-ack-rec-08.md` ; base `main`.
- Préflight : branche absente, fichier absent de `main` ; 14 PR ouvertes examinées au total entre Nora et ChatGPT, aucune collision sur le chemin cible. Préparation sans mutation.

**Mandat utilisateur ultérieur :** autorisation explicite portant sur **la branche exacte**, le document, la révision, le chemin, le dépôt, le commit documentaire et l'ouverture d'une PR ; aucune génération de branche alternative, aucun autre fichier et aucun merge.

**Résultat Nora LIVE après exécution :** publication annoncée sur la branche exacte, commit `39d9b367d7204b190de8da12af884d73ffcfa210`, [PR #21](https://github.com/mcleland147/chantiers360/pull/21).

**Oracle GitHub READ indépendant, vérifié par ChatGPT :**

| Contrôle | Résultat |
| --- | --- |
| PR [#21](https://github.com/mcleland147/chantiers360/pull/21) | **OPEN**, `merged=false`, source `sfia/uat-write-explicit-branch-20261122` → `main` |
| HEAD branche et PR | `39d9b367d7204b190de8da12af884d73ffcfa210` — identiques |
| Branche autorisée versus créée | **IDENTIQUE — PASS**, sans préfixe `sfia/pub-` de substitution |
| Diff PR | **1 commit, 1 fichier ajouté, +2/−0 lignes** |
| Fichier | `docs/recette-studio-next/test-ack-rec-08.md` |
| Contenu | **167 caractères**, identique au texte D4 v2 lu : « ## Résultat attendu » suivi de l'assertion sur la bibliothèque et l'historique des révisions ; SHA blob `503f38ceb1e0fc4c48f5daec5cc46ca8083826de` |
| `main` | `8c398c494dd918272aab5b2653777c6c21d2e76e`, inchangé, PR non mergée |
| PR historiques | #19 et #20 toujours OPEN, non fusionnées |
| Compare `main...39d9b367` | 1 ahead / 0 behind, 1 fichier |

**Verdict du retest : `GIT-WRITE-UAT-04 — PASS fonctionnel LIVE/REAL pour le respect de la branche explicitement autorisée`.** La réserve d'**exécution sur une branche substituée** est levée pour ce parcours précis dans le candidat `24a8fa9e…`. Ne pas déclarer le précédent effet PR #20 « conforme » rétroactivement.

### 18.4 Réserves, suites et gates

- **D6/D7/D8 internes** : la réussite observable du nouveau parcours n'est pas une lecture directe de toutes les versions de plan, décisions et tentatives en base. La traçabilité exhaustive de l'opération PR #21 n'est pas prouvée par la seule conversation Nora et l'oracle GitHub.
- **Idempotence après perte d'ACK** : GIT-WRITE-UAT-07 non exécuté ; GIT-WRITE-UAT-06 (consultation après rechargement) ne remplace pas ce test.
- **GIT-WRITE-UAT-05 sur PR #21** : **PASS fonctionnel READ** sur les références Studio visibles et GitHub ; les enregistrements internes détaillés D6/D7/D8 restent NON VÉRIFIÉS ; voir §18.5.
- **GitHub rulesets / protections** : contrôle non accessible ; aucune conclusion de faisabilité du merge. **MERGE HORS MANDAT**.
- **Figma 11.17 / aperçu indisponible et lien GitHub** : maquette validée pour le prochain développement E08, **non incluse dans le candidat RECETTE `24a8fa9e`** ; pas de développement ou cutover implicite par ce PV.
- **Git projet** : le candidat local, les commits documentaires locaux et les handoffs ne valent pas merge dans `main`.
- **Classe de sortie** : **NO RELEASE / STABLE NOT AVAILABLE / E08 NON ADOPTED**. Un retest WRITE PASS n'est pas un gate global R6, ni une adoption automatique.

**Point de reprise :** retest d'autorité de branche **réussi** sur GitHub REAL et **réconciliation READ PR #21 PASS fonctionnel** ; demeurent l'audit interne exhaustif D6/D7/D8, la reprise mutative sous faute (WRITE-07) et les gates d'intégration. Aucun merge ou nettoyage n'est autorisé ici.


### 18.5 Réconciliation READ de la PR #21 — contrôlée le 22 novembre 2026

**Retour Nora LIVE en lecture seule :** la publication documentaire « RECETTE ML4 — Test ACK REC-08 » v2 a été retrouvée dans Studio après le retest WRITE-04 ; aucun nouvel effet déclaré dans ce tour.

| Élément | Référence retrouvée |
| --- | --- |
| Message d'autorisation initiale | 22/11/2026 **10:52:21 UTC**, branche exacte imposée |
| Compte rendu initial de publication | 22/11/2026 **10:53:47 UTC** |
| Document / révision D4 | `doc_94b6b1c9-e8d8-4008-956b-0440b8d264f2` / `drev_455a13a3-e0d5-4218-bd51-0621fdd75f62` |
| Dépôt / branche | `mcleland147/chantiers360` / `sfia/uat-write-explicit-branch-20261122` |
| Fichier | `docs/recette-studio-next/test-ack-rec-08.md` |
| Commit | `39d9b367d7204b190de8da12af884d73ffcfa210`, daté 22/11/2026 **10:53:44 UTC**, parent unique `8c398c494dd918272aab5b2653777c6c21d2e76e` |
| Blob fichier | `503f38ceb1e0fc4c48f5daec5cc46ca8083826de`, 167 caractères, 2 lignes |
| PR | [#21](https://github.com/mcleland147/chantiers360/pull/21) **OPEN**, non fusionnée, 1 commit et 1 fichier ajouté |
| Résultat Studio visible | `effect=COMPLETED` / `status=PR_OPEN` |
| D6 affichée par projection | `dec_483f9215-00f9-40b1-a5c5-e94562bfcb2b`, `GIT_PUBLICATION_MANDATE`, `APPLICABLE` |
| Effet lié affiché par projection | `efx_3bd06794-d85f-4915-9fcf-5acfca563429` |

**Oracle GitHub indépendant vérifié par ChatGPT après la réponse Nora :** PR #21 ouverte/non fusionnée ; source `sfia/uat-write-explicit-branch-20261122`, HEAD `39d9b367d7204b190de8da12af884d73ffcfa210`, base `main` ; fichier et blob identiques au retest `18.3. Le retour de Nora est donc cohérent avec l'état distant sur les références observables.

**Checks de la PR #21 :** au contrôle Nora vers 10:57 UTC, le check Docker était encore en cours. Au contrôle indépendant ultérieur, les **5 check runs étaient terminés** : Backend lint/test/API/build, Frontend lint/test/build et Docker build & smoke = **3 SUCCESS** ; dependency audit npm frontend et backend = **2 FAILURE**. Docker terminé à **2026-11-22 10:57:43 UTC**. Combined status GitHub `pending` et `statuses=[]` ne prouvent pas un check en cours ; protections et rulesets non accessibles. Aucune autorisation de fusion n'en découle.

**Frontières de preuve de la réconciliation :**

- **D6** : identifiant, type, état et extrait du mandat visibles dans la projection Nora ; enregistrement complet et contraintes réellement persistées non lus directement.
- **D7** : projection de résultat `COMPLETED` et cohérence GitHub prouvées ; **version du plan**, paramètres détaillés et **nombre de tentatives** non accessibles à Nora et non audités dans ce contrôle.
- **D8** : références de publication visibles concordantes ; journal brut, chronologie d'événements et liens internes non contrôlés directement.
- **Aucun effet nouveau déclaré** par Nora dans le tour READ ; ce seul élément ne constitue pas un audit PG du nombre de tentatives.
- **Idempotence après perte d'ACK** reste **NON TESTÉE** (WRITE-07).

**Verdict : `GIT-WRITE-UAT-05 — PASS fonctionnel READ / réconciliation des références visibles, WITH DOCUMENTED LIMITS`.** Le correctif d'autorité sur branche explicite reste **PASS LIVE/REAL** sur l'unique retest PR #21 ; la conformité interne exhaustive et la reprise mutative restent distinctes. `NO RELEASE`, `STABLE NOT AVAILABLE`, `E08 NON ADOPTED`.


---

## 19. Extension UX validée — états de consultation pour tout fichier non prévisualisable

**Date :** 22 novembre 2026 (Europe/Paris). **Nature :** retour utilisateur / arbitrage UX ciblé et préparation de la prochaine évolution E08 ; aucun code modifié, aucun cutover demandé par cette section. Le contrôle est **universel sur la capacité de rendu**, et non restreint aux extensions PDF ou Office.

### 19.1 Bilan des résultats conservés, sans effacement des réserves

- **READ** : 7 PASS cumulés sur deux builds, et **non** 7 exécutions sur le même build.
- **WRITE-04 correctif** : PASS fonctionnel LIVE/REAL de publication sur branche explicitement demandée, PR [#21](https://github.com/mcleland147/chantiers360/pull/21), 1 commit, 1 fichier D4 v2 conforme, aucune fusion.
- **WRITE-05 PR #21** : PASS fonctionnel de réconciliation en lecture seule, objet et références Studio concordants avec GitHub (`18.5) ; **ne constitue pas une inspection exhaustive** des décisions D6, des plans/tentatives D7 et du journal brut D8.
- **WRITE-07** : épreuve de perte d'ACK/retry ambigu **NON TESTÉE**. La consultation après rechargement WRITE-06 ne la remplace pas.
- **PR #19, #20, #21** : historiques distincts ; PR #20 reste la preuve de la substitution ancienne, non corrigée rétroactivement. **Aucun merge autorisé.**
- **PR #21 checks** : 3 SUCCESS (Backend, Frontend, Docker) / 2 FAILURE (audits dépendances), état de fusion non déclaré prêt ; protections/rulesets Git non démontrés.
- **RECETTE servie** : SOURCE `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` / TREE `ece43cdb8c008b855c381d50f112f8b86e5a2207` / BUILD `qCQGWLYYGb0ZCA4BLfzBi` selon handoff Cursor vérifié à distance ; **cette nouvelle UX n'y est pas implémentée**.

### 19.2 Défaut de consultation et décision UX Morris

**Observation utilisateur :** la visionneuse des fichiers Git sait actuellement afficher au moins des fichiers `.md`, `.txt` et `.yml`, mais un PDF tel que `Diagramme BPMN_BatiNova.pdf` déclenche un état technique `BINARY_CONTENT` et une présentation qui peut laisser croire à une erreur ou à l'absence de sélection. La **liste exhaustive des formats réellement pris en charge n'a pas été auditée dans le code candidat** : ne pas l'inventer sur la base des seules extensions citées.

**Décision UX exprimée et confirmée par Morris :**

1. **Préserver l'aperçu existant pour tout contenu effectivement compatible** avec les moteurs de rendu actuels (Markdown sûr ou texte brut sûr, selon implémentation et limites de taille/encodage vérifiées).
2. **Pour tout fichier qui ne peut pas être affiché par cette visionneuse**, quelle que soit son extension ou sa nature (PDF, DOC/DOCX, PPT/PPTX, XLS/XLSX, archives, formats inconnus, binaire, encodage non compatible ou fichier dépassant la limite d'aperçu), afficher un état dédié **« Aperçu indisponible »** avec motif exact lorsque connu et **« Ouvrir sur GitHub »**. Ne pas traiter ce cas par une liste fermée de quelques extensions bureautiques.
3. **Ne jamais déguiser un véritable défaut Git en incompatibilité** : accès refusé, dépôt déconnecté, ref introuvable/non résolue, fichier réellement absent, réseau/timeout et état incertain gardent leurs états de refus/erreur/indétermination adaptés.
4. **Lien GitHub fiable :** reprendre le dépôt/ref/path réellement sélectionnés et le `permalinkOrNull` issu d'un commit vérifié quand disponible ; ne jamais composer un « permalien » à partir d'un blob SHA ou d'une provenance inventée. Si l'URL exacte n'est pas connue, ne pas afficher de lien trompeur ; exposer honnêtement la limite.
5. Aucun rendu HTML distant brut, aucune conversion Office côté serveur, aucun téléchargement obligatoire dans Studio, aucune lecture/édition/commit supplémentaire et aucune exposition de secret/token pour ouvrir GitHub.
6. Conserver la navigation et la sélection courante ; changer de dépôt/branche/fichier annule les résultats de lecture tardifs.

**Référence UX validée pour développement :** Figma page 11 — frame [11.17 · Dépôts Git — Aperçu indisponible · GitHub](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1152-490) (fileKey `itgvCulInEnFY6DvgIegvP`, node `1152:490`, 1680 × 970), extension de la vue 11.03 / explorateur 30–70. Elle illustre un **PDF particulier**, mais **le patron d'état est à paramétrer pour tous les formats non prévisualisables** : nom, format, raison, URL. Ne pas coder en dur `PDF` ni le fichier d'exemple. Le bouton de la maquette est une interaction de prototype ; sa destination statique de démonstration n'est **pas** une règle d'URL runtime.

**Statut de la source UX :** VALIDATED UX FOR DELIVERY par Morris dans la conversation ; **non IMPLEMENTED**, **non COVERAGE VERIFIED** et **non BEHAVIOR PROVEN** dans l'application.

### 19.3 Contrat de recette de l'évolution — scénarios à exécuter après développement

| Scénario | Attendu |
| --- | --- |
| **PREVIEW-01** · `.md` | Rendu Markdown sûr existant maintenu, aucune régression de style/contenu |
| **PREVIEW-02** · `.txt` et `.yml` | Rendu texte sûr maintenu ; arborescence, retours à la ligne et sélection préservés |
| **PREVIEW-03** · autres fichiers texte supportés | Inventaire réel du code (p. ex. JSON, XML, code si supportés) puis preuve de non-régression, **sans supposer une liste exhaustive a priori** |
| **PREVIEW-04** · PDF | « Aperçu indisponible » conforme 11.17 ; bouton GitHub vers le fichier et la ref corrects |
| **PREVIEW-05** · Office | DOC/DOCX, PPT/PPTX, XLS/XLSX non rendus dans Studio → même état et lien lorsque la consultation GitHub est autorisée |
| **PREVIEW-06** · autres binaires / archives / extensions inconnues | Même chemin fonctionnel si le rendu est réellement impossible, sans exception codée à une liste de suffixes |
| **PREVIEW-07** · limite taille / encodage | Motif adapté, aucune tentative de rendu dangereux ni lecture excessive |
| **PREVIEW-08** · erreur/ref/permission | **Pas** de faux « format non prévisualisable » pour DENIED, NOT_FOUND qualifié, REF_UNRESOLVED, AMBIGUOUS ou erreur de transport |
| **PREVIEW-09** · contexte et lien | Dépôt/ref/path cohérents ; permalien vérifié si possible ; aucune fuite token ni URL arbitraire, clic nouvel onglet |
| **PREVIEW-10** · interaction/concurrence | A→B, branche X→Y, chargement tardif, responsive et mode agrandi ; aucun contenu/état obsolète |
| **PREVIEW-11** · fidélité Figma | Extraction MCP de 11.17 et source 11.03, contrat visuel avant code, capture navigateur DEV et comparaison après code |

**Gate technique :** Cursor inspecte d'abord les renderers, l'identification texte/binaire/encodage et les statuts issus de `readGitFile` ; il localise la responsabilité existante avant d'implémenter. Le verdict d'inventaire devient une preuve de ce cycle, pas une hypothèse imposée.

### 19.4 Périmètre et suite

- **IN :** comportement universel de non-prévisualisation, UI Figma 11.17 adaptable, URL Git fiable, erreurs distinctes, tests + documentation synchronisés dans **un macro-lot cohérent**.
- **OUT :** lecteurs PDF/Word/PowerPoint intégrés, conversion Office/PDF, nouveau moteur documentaire, nouveau provider Git, modifications GitHub WRITE, opérations D6/D7/D8, changement de schéma sans besoin démontré.
- **Delivery :** développement Cursor sous SFIA v2.6 sur la branche E08 candidate après Git Truth local et inspection code, en **DEV** ; **aucun cutover RECETTE tacite**.
- **Gates :** revue ChatGPT du Review Pack complet ; **GO Morris distinct** pour cutover du prochain candidat, push projet, PR, merge, STABLE/release. La maquette validée et le PV ne valent pas preuve runtime ni ADOPTED.
- **Dette / exit :** formats réellement lisibles à inventorier, format/taille/erreurs à couvrir par tests, limite d'URL/ref documentée si non résoluble. Les réserves D6/D7/D8/WRITE-07 restent maintenues indépendamment de cette UX.

---

## 20. Section d'exécution datée — consolidation PR readiness (2026-11-22 13:34 Europe/Paris)

| Champ | Valeur |
| --- | --- |
| Nature | Addendum factuel au PV — **ne réécrit pas** §§1–19 |
| Provenance blob | `origin/docs/next-git-recette-20261122` @ `dea4f260ec96272971200e8b7cb0e44be08bc63e` · blob `e767edc63c74b547c2f57c832e035794ad576945` |
| Intégration | Copie exacte sur branche produit E08 sans merge d'historique documentaire |

### État RECETTE au moment de la consolidation

| Champ | Valeur |
| --- | --- |
| SOURCE servi | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| URL | http://127.0.0.1:3200 |
| Handoff cutover | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |

### Réserves toujours ouvertes (non transformées en PASS)

- PREVIEW-02/03/05/06/07/11 : PARTIAL
- WRITE-07 : perte d'ACK / retry ambigu — non prouvé
- Traçabilité exhaustive D6/D7/D8 publication REAL : partielle
- Merge GitHub REAL : **NOT PROVEN**
- GitHub PR #21 : unstable / audits en échec
- Protections GitHub : non intégralement observables

### Addenda ChatGPT structurants

Statut dans ce cycle : **NON VALIDÉS D2 Morris observés** → non appliqués comme clauses normatives. Gate Morris D2 requis avant publication normative.

*Fin section d'exécution §20 — PV.*

```

### 11.5 Extrait as-built (queue consolidation)

```markdown
- Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
- **UAT Morris** : GIT-WRITE-UAT-04 (nouveau doc/rév. + branche explicite) · PR#20 non corrigée rétroactivement · Nora LIVE E2E **NOT PROVEN** par smoke.

### Visionneuse Git — aperçu indisponible universel (Figma 11.17) (2026-11-22)
- **Inventaire AS-IS** : Markdown (`.md` + SafeMarkdown) ; texte UTF-8 (`.txt`/`.yml`/code) en `<pre>` ; binaires / >512 KiB refusés (415/413) **sans** carte UI ni provenance.
- **Contrat** : aucun rendu sûr disponible → état Figma 11.17 ; erreurs Git (DENIED / REF_UNRESOLVED / FILE_ABSENT / AMBIGUOUS) **distinctes**.
- **Impl.** : `git-preview.ts` (motifs dynamiques) ; `readGitFile` retourne `preview` + `openUrl` (permalink ou browse ref honnête) ; `GitPreviewUnavailable` ; Nora `UNPREVIEWABLE`.
- **Preuves** : unit `git-preview` · e2e `ensemble08-git-preview-unavailable` · captures `proofs/runtime-dev-preview-*.png` · contrat visuel extrait avant code.
- **RECETTE** runtime **INCHANGÉ** (`24a8fa9e` / `qCQGWLYYGb0ZCA4BLfzBi`) — cutover **NONE**.
- OUT : pas de visionneuse PDF native / conversion Office / mutation GitHub.

## Non livré / réserves
- Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
- END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
- Policy WRITE gouvernée (séparation READ/WRITE) : **DETERMINISTIC PROVEN** ; activation RECETTE WRITE : **OFF**
- GitHub REAL READ : à requalifier en RECETTE post-cutover (smoke non mutatif)
- Nora LIVE E2E : **NOT PROVEN**
- Candidate finalisation : SHA/TREE/BUILD — manifeste section D
- Rollback immédiat post-cutover : artefact `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ`

## Preuves exécutées (finalisation)
- `tsc --noEmit` PASS · lint warnings préexistants uniquement
- unit `tests/unit` **806/806** PASS
- PG `tests/integration` **538/538** PASS
- Playwright 11.06 **3/3** PASS (G5 h=610 · y Δ0.22)
- REAL WRITE mutation externe : **NOT PROVEN** (STOP frontière sandbox)

## Fake/Real
| Capacité | Niveau |
|---|---|
| Refs bound / incompleteCoverage (S03) | DETERMINISTIC PROVEN (mock REAL-shaped + SCRIPTED) |
| Listing / paths / pubs projection | DETERMINISTIC PROVEN |
| Mandat merge sémantique + contradiction | DETERMINISTIC PROVEN (unit/PG hist.) |
| UX 11.04/11.05/11.07 code | DETERMINISTIC PROVEN |
| UX 11.06 G5 F2 | DETERMINISTIC PROVEN (runtime measures) |
| WRITE allowlist ≠ READ | DETERMINISTIC PROVEN |
| GitHub REAL READ (RECETTE) | BOUNDARY — smoke post-cutover |
| GitHub REAL WRITE / MERGE | NOT PROVEN |
| Nora LIVE E2E | NOT PROVEN |

### Documentary GitHub REAL merge path (DEV — 2026-11-22)

- **Chaîne** Nora `d7.merge_publication` → `admitConversationalMergeMandate` → D6 `GIT_MERGE_MANDATE` → D7 `prepareMerge` / `authorizeMerge` / `dispatchMerge` → D9 `mergePullRequest` → D8 `MERGED` + fait `MERGE`.
- **D9 REAL** : `mergePullRequest` sous gate `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` + WRITE allowlist + user OAuth ; `mergePullRequestRemote` avec précondition `sha`, refus dirty/blocked/non-démontré, idempotence via `merge_commit_sha` (jamais HEAD source).
- **D7** : `MergePlan.effectProviderMode` figé au prepare ; dispatch refuse divergence de mode ; `reconcileAttempt(GIT_MERGE)` ML4-REC-01 + SHA = `mergeCommitSha` uniquement.
- **SCRIPTED** : commit de fusion synthétique distinct du HEAD source ; `mergeCommitSha` exposé.
- **Restitution** : `publication-effect-view` corrèle les faits MERGE via `publicationAttemptId`.
- **Preuves** : unit MERGE contract + merge SHA + merge authority ; PG `conversation-merge-security` ; slice `git-collaboration` B3/T20 ; `tsc` PASS.
- **Hors cycle** : aucune fusion GitHub REAL exécutée ; RECETTE `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` **inchangée**.
- **Niveau** : chemin REAL **implémenté / testé (SCRIPTED + interface mockée)** — **MERGE REAL NOT PROVEN**.

### Correction revue — merge documentaire (DEV — 2026-11-22)

1. **Fail-closed mode** : `dispatchMerge` exige un `effectProviderMode` historique explicite (REAL|SCRIPTED) égal au live **avant** toute autorité/provider ; UNKNOWN/absent → `REQUIRES_REQUALIFICATION` (zéro mutation).
2. **Reconcile provenance** : attribution COMPLETED seulement si dépôt/PR/headRef/baseRef/source HEAD/`mergeCommitSha` + publication associée concordent ; base SHA cible non exigée post-fusion ; pas de succès inventé.
3. **D8 headSha** : conserve le HEAD source de publication ; `mergeCommitSha` dans `detailJson` + fait MERGE (pas de substitution silencieuse).
4. **SCRIPTED** : avance uniquement la branche cible (`baseRef`) — merge vers `release` ne touche pas `main`.
5. **Preuves** : PG `documentary-merge-corrections` 8/8 · unit contract C3 · suites merge/preview ciblées · `tsc` PASS · RECETTE inchangée (au moment de la correction DEV).
6. **MERGE REAL** : toujours **NOT PROVEN**.

### Cutover RECETTE — candidat merge documentaire (2026-11-22)

| Champ | Valeur |
| --- | --- |
| SOURCE utilisateur | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
| DB | `sfia_next_recette_ml4:5434` |
| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
| Verdict cutover | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |
| MERGE REAL | **NOT PROVEN** (aucune fusion sandbox) |

### Consolidation documentaire PR readiness (2026-11-22)

- PV `recette-acceptation-partielle-2026-11-22.md` intégré depuis `docs/next-git-recette-20261122` (blob source `e767edc6…`) + §20 exécution datée.
- Contrats fonctionnel / architecture : sections d'exécution §17 datées ; historique §§1–16 **non réécrit**.
- Addenda ChatGPT structurants 22/11 : **AWAITING Morris D2** — non publiés comme normatifs.
- Arbre `projects/sfia-studio-next/web` après consolidation documentaire : **identique** à `10128bdb` (`77c89ed84546b3bfb0356164416c04eac26ed229`).
- Un HEAD produit ultérieur **uniquement documentaire** ne remplace **pas** rétroactivement le SOURCE/BUILD RECETTE ci-dessus.
```

### 11.6 Extrait delivery-history (tête)

```markdown
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-PR-READINESS-DOC-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:34 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — consolidation documentaire + PR readiness (cycle 13) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base code recettée | SOURCE `10128bdb` · TREE `be778f1b` · BUILD `2uHrYBsQUvf6aii40hMpj` |
| Travail | Intégration PV exact depuis `docs/next-git-recette-20261122` · sections d'exécution datées sur contrats · sync as-built / provenance · **aucun changement `web/`** |
| Addenda ChatGPT | **AWAITING Morris D2** — non intégrés comme normatifs |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
| Push projet / PR / merge | **NONE** |
| Verdict cible | `READY FOR PR WITH RESERVES — MORRIS GATE REQUIRED` (D2 addenda + GO push/PR) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE candidat merge documentaire corrigé |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| SOURCE | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
| Prior preview | `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` (préservé hors service) |
| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
| MERGE REAL | **NOT PROVEN** |
| Verdict | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-CORRECTED

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:02 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correction revue merge documentaire REAL (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base candidat | `a087051a` / `7274dcc0` |
| Fix | fail-closed mode UNKNOWN · reconcile provenance · D8 headSha source préservé · SCRIPTED cible seule |
| Preuves | PG documentary-merge-corrections **8/8** · conversation-merge-security **5/5** · unit contract/sha/authority/preview · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` |
| Mutation GitHub REAL | **NONE** — **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **READY FOR CHATGPT REVIEW — E08 DOCUMENTARY REAL MERGE CORRECTED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:53 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fusion documentaire GitHub REAL gouvernée via Nora (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| AS-IS | Chaîne Nora→D6→D7→D9 merge déjà présente ; gaps reconcile `headSha`, pas de `effectProviderMode` merge, éligibilité GitHub insuffisante, SCRIPTED réutilisait HEAD |
| Fix | `MergePlan.effectProviderMode` · reconcile merge_commit_sha + ML4-REC-01 · eligibility clean · SCRIPTED merge SHA distinct · vue MERGE corrélée |
| Preuves | unit documentary-merge-contract + merge-sha + authority · PG conversation-merge-security · git-collaboration B3/T20 slice · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` · ml4d-ux004 |
| Mutation GitHub REAL | **NONE** — merge REAL **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **DEVELOPMENT COMPLETE WITH RESERVES — REAL MERGE NOT YET PROVEN** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UNIVERSAL-PREVIEW-FALLBACK

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:16 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — visionneuse Git : aperçu indisponible universel (Figma 11.17) |
| Type | EVOL · STANDARD · **NO RELEASE** |
| Principe | Rendu selon capacité effective — **pas** liste fermée de suffixes |
| AS-IS | binary/too_large → throw 415/413 sans provenance UI |
| Fix | `readGitFile` retourne `preview` + `openUrl` ; UI `GitPreviewUnavailable` ; erreurs Git distinctes |
```

## 12. PR readiness — qualification

| Critère | Statut |
| --- | --- |
| Provenance fichiers E08 | PASS (commits + docs branches + PROVENANCE) |
| Diff vs main | PASS (134 paths A/M ; voir §7) |
| Conflits | NONE observés (merge-tree) |
| Cohérence archi/code/tests/docs | PASS avec réserves documentées |
| Migration DB inattendue | NONE observée |
| Modification normative indirecte | NONE (addenda D2 non intégrés) |
| Versioning | NO RELEASE · STABLE NOT AVAILABLE |
| Manifeste candidat runtime | SOURCE `10128bdb` / BUILD `2uHrYBsQ` (lien provenance explicite) |
| Frontières preuves | SCRIPTED/HTTP/LIVE/REAL : voir réserves |
| Rollback | Revenir au WT preview `98118de0` / script ROLLBACK merge WT |
| Post-merge | Vérifier SHA/arbre/CI ; maj roadmap sous mandat doc distinct |

### Frontières de preuve

| Domaine | Niveau |
| --- | --- |
| Publication GitHub REAL (UAT) | BOUNDARY — PR #21 avec réserves |
| Merge GitHub REAL | **NOT PROVEN** (implémenté + SCRIPTED/mock) |
| PREVIEW universel | PARTIAL (scénarios non tous exercés) |
| WRITE-07 ACK/retry | **NOT PROVEN** |
| Traçabilité D6/D7/D8 REAL | PARTIAL |
| Protections GitHub | NON intégralement observables |
| Nora LIVE E2E | NOT PROVEN |

## 13. Tests réellement exécutés ce cycle

- **Aucune campagne R6 relancée** (code inchangé).
- Contrôles exécutés : Git Truth · identité RECETTE HTTP BUILD · identité `web/` tree · merge-tree conflicts · inventaire blobs · lecture sources gouvernance/docs.
- Preuves héritées (code `10128bdb`) : PG `documentary-merge-corrections` 8/8 · merge security · unit contract/sha/authority/preview · tsc PASS (cycles DEV/cutover antérieurs).

## 14. Réserves à préserver (non converties en PASS)

1. PREVIEW : couverture partielle des scénarios non entièrement exercés.
2. WRITE-07 : perte d'ACK/retry ambigu non prouvé.
3. Traçabilité exhaustive D6/D7/D8 : partielle sur publication REAL.
4. Merge GitHub REAL : implémenté, testé par simulation, **non prouvé par fusion réelle**.
5. GitHub PR #21 : unstable, audits en échec.
6. Protections GitHub non intégralement observables.
7. Aucun STABLE, RELEASE ou ADOPTED.
8. Addenda ChatGPT structurants : **AWAITING Morris D2**.

## 15. Risques d'intégration et rollback

- Push tardif : risque de divergence `origin/main` → re-contrôler merge-base avant PR.
- CI Next : workflow présent ; audits GitHub sur dépôts cibles hors Studio peuvent rester rouges (PR #21).
- Rollback runtime : script `ROLLBACK-TO-E08-98118de0.sh` dans WT merge ; DB backup cutover antérieur.
- Rollback Git post-merge (futur) : revert commit merge + vérifier absence de migration.

## 16. Proposition de PR (à créer seulement après GO Morris)

| Champ | Proposition |
| --- | --- |
| Base | `main` @ `a12f89a…` (re-vérifier à J) |
| Head | `feat/next-ensemble08-git-publications-nora` @ HEAD local courant |
| Titre | `E08 — Git publications Nora (code + contrats + PV) — NO RELEASE` |
| Périmètre | Code/tests E08 + contrat fonctionnel + architecture/acceptation + PV + as-built + delivery-history |
| PR docs séparées | **NON** — tout dans le même lot si possible |
| Branches docs historiques | Laisser intactes jusqu'arbitrage |

### Description PR proposée (brouillon)

```
## Summary
- Ensemble 08 : conduite Nora → publications Git / merge documentaire gouverné, aperçu Git universel, corrections C1–C3.
- Documentation : contrats + PV consolidés ; réserves explicites (MERGE REAL NOT PROVEN, PREVIEW PARTIAL, WRITE-07, …).
- Runtime RECETTE de référence : SOURCE 10128bdb / BUILD 2uHrYBsQ — HEAD doc-only ne le remplace pas.

## Test plan
- [ ] CI Next verte sur la PR
- [ ] Revue réserves (ne pas exiger MERGE REAL pour merge PR)
- [ ] Confirmer absence migration DB
- [ ] Post-merge : SHA/arbre + smoke RECETTE hors cutover automatique
```

## 17. Gates Morris restants

1. Valider le périmètre final (inclure ou non addenda ChatGPT après D2).
2. Autoriser **explicitement** push branche produit + création PR.
3. Contrôler CI / protections applicables.
4. Prononcer séparément le **GO merge** de la PR E08.
5. Après merge : vérifier SHA/arbre/CI ; maj roadmap sous mandat doc.
6. Déclarer E08 clôturé **avec réserves**, sans ADOPTED global.

## 18. Statut pack / handoff

- Pack local : `.tmp-sfia-review/chatgpt-review.md`
- Publication L3 : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (mono-fichier)
- Retour branche projet après push handoff

