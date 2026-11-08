# SFIA Review Pack FULL — G4 construction convergence UX — 2026-11-08

**Date / fuseau :** 2026-11-08 (Europe/Paris)
**Cycle :** G4 construction (déjà exécuté) — régularisation Review Pack FULL
**Profil :** CRITICAL
**Lane :** DEV only
**STOP respectés :** aucune modification de code, aucun G5, aucun push branche projet / PR / merge / RECETTE.

## 0. Objet

Reconstituer et publier le Review Pack FULL du commit G4 déjà livré localement (`dbaccfda`), pour revue indépendante ChatGPT. Ce document n'introduit pas de nouveau développement.

## 1. Git Truth Check

| Check | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branche | `feat/next-convergence-ux-g4-construction` |
| HEAD complet | `dbaccfdab463b18bd464ea57753865b948b1c089` |
| Parent / base annoncée | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` (`main` PR #668) — **égal** à `dbaccfda^` |
| Tree | `eeec65b75f1c20e4c58cc59c95f530729bcb2aaa` |
| `git merge-base HEAD origin/main` | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Note `main` local | `git merge-base HEAD main` → `4b1a0580…` (main local divergé) — **base normative = origin/main @ f0d59bc8** |
| Worktree ML3 | **non touché** |
| Push branche projet | **NON** |

### `git status -sb`
```
## feat/next-convergence-ux-g4-construction
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/
```

### `git log -1` candidat
```
dbaccfdab463b18bd464ea57753865b948b1c089
feat(next): G4 Pilote–Nora convergence UX (F1/A1/A2) on DEV lane
Morris Cleland <morris@MacBook-Air.local>
2026-11-08T01:52:05+01:00
f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e
```

### Stat commit (tail)
```
 .../web/src/components/shell/studio-rail.ts        |  106 +
 .../web/src/domains/identity/portfolio-cursor.ts   |   31 +
 .../web/src/domains/identity/portfolio-labels.ts   |   14 +
 .../web/src/domains/identity/portfolio.ts          |  135 +-
 .../web/tests/integration/portfolio-a1.pg.test.ts  |  124 +
 .../web/tests/unit/portfolio-cursor.test.ts        |   48 +
 .../web/tests/unit/studio-rail.test.ts             |   35 +
 138 files changed, 80076 insertions(+), 73 deletions(-)
```

## 2. Inventaire exhaustif des fichiers

### 2.1 Code / docs allowlist (hors bulk g2-source)

```
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-construction-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/l3-handoff-g4-2026-11-08.md
M	projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
M	projects/sfia-studio-next/web/src/app/globals.css
M	projects/sfia-studio-next/web/src/app/layout.tsx
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
A	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
A	projects/sfia-studio-next/web/src/domains/identity/portfolio-cursor.ts
A	projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
M	projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
A	projects/sfia-studio-next/web/tests/integration/portfolio-a1.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts
A	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
```

**Créés :** shell F1, portfolio-cursor/labels, tests unit/integration A1, as-built, l3-handoff.
**Modifiés :** layout, globals.css, portfolio page+API, portfolio.ts, project page, documents D4 route.

### 2.2 Pack G2 source (122 chemins ajoutés)

```
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/CONTROL-REPORT.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/README.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/coverage/cu-uxc-coverage-matrix.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/coverage/cu-uxc-coverage.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/indexes/png-export-index.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/indexes/png-export-index.json.sha256
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/indexes/png-files.sha256
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/indexes/raw-files.sha256
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/component-nodes-l2.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/component-nodes-l2.json.sha256
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/l2-manifest.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/l2-manifest.json.sha256
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_init.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_live-nora-verification.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_meta.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_staging/deltas-nora-206-208.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_staging/negatives-28-32-33-41.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/_staging/shell.rail.personnel.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/deltas-nora-206-208.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/document.guided.18.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/document.workspace.04.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/journal.surface.05.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/mobile.216.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/mobile.217.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/negatives-28-32-33-41.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/nora.workzone.03.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.109.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.110.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.205.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.22.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.24.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.40.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.73.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.74.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.89.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.actions.92.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.109.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.110.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.205.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.22.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.24.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.40.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.73.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.74.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.89.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/page.content.92.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/portfolio.content.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/portfolio.empty.64.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/portfolio.list.65.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/sas.surface.02.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/shell.rail.conversation.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/shell.rail.inspection.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/shell.rail.personnel.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/manifests/raw/shell.rail.projet.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/mcp-results/actions-manifest.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-125-33.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-127-106.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-129-72.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-158-264.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-158-336.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-158-912.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-159-145.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-160-175.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-160-391.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-161-216.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-161-288.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-241-385.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-282-468.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-282-492.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-94-135.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-94-214.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-94-370.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-94-50.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-94-515.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/png/frame-97-359.png
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/batch_persist_chunks.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/build-b3-native-raw.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/build-g2-l2-complement.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/conv.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/document.workspace.04.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/journal.surface.05.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/mobile.216.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/mobile.217.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/nora.workzone.03.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/portfolio.content.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/portfolio.empty.64.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/portfolio.list.65.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/shell.rail.conversation.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/shell.rail.inspection.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/shell.rail.personnel.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/embed/shell.rail.projet.json
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/emit_raw_extracts.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/finish_all_embeds.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/flat-extract-template.js
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/ingest_chunk_file.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/ingest_figma_response.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/ingest_mcp_payload.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/ingest_stdin_embed.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/ingest_tmp_chunks.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/join_chunk_payload.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/materialize-raw-extracts.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/materialize_mcp_staging.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/materialize_wrappers.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/mcp_stdin_to_embed.sh
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/merge_split_extract.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_figma_dict.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_mcp_chunk.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_mcp_split.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_mcp_stdin_embed.sh
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_split_parts.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/persist_string_chunks.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/rebuild-raw-index.sh
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_all_tmp_payloads.sh
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_json_payload.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_mcp_batch.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_mcp_cli.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_mcp_embed.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/save_mcp_from_file.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/split_and_save_mcp.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/store_chunk_from_mcp_json.py
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/verify-g2-pack.sh
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/write_embed.py

```

PNG binaires non collés ; présents dans le commit + indexes sha256. `g2-source/scripts/tmp/` **exclu** (untracked local).

## 3. Explication F1 / A1 / A2 / D4

### 3.1 F1
`studio-rail.ts` tokens G2 railEvidence (personnel 246/`#0C101A` ≠ projet 246/`#0C1020` ; conversation 240/`#0D111B` ; inspection 244/`#0C101A`). `StudioShell` + Inter `next/font/google` + CSS vars rail. Variante dérivée de pathname + `surface` query.

### 3.2 A1
Curseur keyset opaque 25 ; prédicat OPEN+non rattaché partagé count/liste ; API additive `?preparationsCursor=` ; UI Reprendre sans POST ; INVALID_CURSOR 400.

### 3.3 A2
Deep-link `?surface=document&documentId=` → inspection lecture seule ; Réviser explicite ; états READING/EDITING/SAVING/CONFLICT/UNKNOWN/FAILED ; correlationKey stable.

### 3.4 D4
Route documents GET/POST : `studioErrorResponse` (fin du 401 fourre-tout).

### 3.5 A3
Pas de nouvelle autorité D5/D6.

## 4. Preuves (rejeu 2026-11-08T01:02Z UTC sur HEAD candidat)

### 4.1 `npm run test:unit`
```
 ✓ tests/unit/studio-rail.test.ts (3 tests) 1ms
 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  19 passed (19)
      Tests  120 passed (120)
   Start at  02:02:19
   Duration  3.60s (transform 184ms, setup 0ms, collect 1.81s, tests 87ms, environment 1ms, prepare 405ms)
```
→ **120 passed** / 19 files.

### 4.2 `npm run test:integration`
```
◇ injected env (0) from .env.local

 ✓ tests/integration/portfolio-a1.pg.test.ts (2 tests) 65ms

 Test Files  11 passed (11)
      Tests  144 passed (144)
   Start at  02:02:27
   Duration  13.97s (transform 217ms, setup 0ms, collect 3.17s, tests 9.78s, environment 1ms, prepare 226ms)
```
→ **144 passed** / 11 files (incl. portfolio-a1.pg).

### 4.3 `npx tsc --noEmit`
```
(no stderr; exit 0)
```
→ exit 0.

### 4.4 `verify-g2-pack.sh`
```
OK RAW manifests/raw/sas.surface.02.json
OK RAW manifests/raw/shell.rail.conversation.json
OK RAW manifests/raw/shell.rail.inspection.json
OK RAW manifests/raw/shell.rail.personnel.json
OK RAW manifests/raw/shell.rail.projet.json
OK nora v2 nodes=129 text_typo=77/77 rootFr.x=240
RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)
VERIFY PASS
```
→ **VERIFY PASS**.

### 4.5 ABSENT (non inventé)
| Preuve | Statut |
|---|---|
| `next build` | **NON EXÉCUTÉ** dans G4 |
| Playwright BROWSER / e2e | **NON EXÉCUTÉ** → G5 |
| F2 ≤2 CSS px / UXC-13 | **NON EXÉCUTÉ** → G5 |
| Push/PR/merge/RECETTE | **NON** |

## 5. Réserves / G5
1. F2 DOM/image multi-viewport. 2. Playwright BROWSER FAKE. 3. Build Next non prouvé. 4. Ouvrir WT G4 pour revue (pas ml3).

## 6. Blobs (extrait)
```
100644 blob 20825fdc7af7f5061883cae3304083afc50cf4ef	projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
100644 blob 7578e24ff13871c1a64475f4661c13aaca21145e	projects/sfia-studio-next/web/src/app/layout.tsx
100644 blob 1ee2d7e53f4f5c9f2750996ed7724fa99d9c1bc9	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
100644 blob 1134595ea1be2a9bd7b30c0f5f5b7410bf441c75	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
100644 blob b16d0c0da8888b82dabd270c4a2a35b2b6445745	projects/sfia-studio-next/web/src/domains/identity/portfolio-cursor.ts
100644 blob e24a457c0dd4097b828ede9a89f88e16fdc2529b	projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
100644 blob 12fbf411acbd451887b395aa695d60445dedb978	projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
```

## 7. Contenu intégral — fichiers CRÉÉS

### CREATE `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`

- blob `1134595ea1be2a9bd7b30c0f5f5b7410bf441c75`

```ts
/**
 * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
 * Discriminant fills are intentional: personnel ≠ projet.
 */

import type { CSSProperties } from "react";

export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

export type StudioRailTokens = {
  variant: StudioRailVariant;
  widthPx: number;
  fill: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  gap: number;
  railComponentId: string;
  sourceNodeId: string;
};

/** Canonical tokens measured in G2 L2 / railEvidence. */
export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> = {
  personnel: {
    variant: "personnel",
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 20,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 10,
    railComponentId: "shell.rail.personnel",
    sourceNodeId: "94:51",
  },
  projet: {
    variant: "projet",
    widthPx: 246,
    fill: "#0C1020",
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    gap: 13,
    railComponentId: "shell.rail.projet",
    sourceNodeId: "160:176",
  },
  conversation: {
    variant: "conversation",
    widthPx: 240,
    fill: "#0D111B",
    paddingTop: 25,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 13,
    railComponentId: "shell.rail.conversation",
    sourceNodeId: "94:215",
  },
  inspection: {
    variant: "inspection",
    widthPx: 244,
    fill: "#0C101A",
    paddingTop: 23,
    paddingRight: 19,
    paddingBottom: 22,
    paddingLeft: 19,
    gap: 11,
    railComponentId: "shell.rail.inspection",
    sourceNodeId: "94:372",
  },
};

export function railStyle(tokens: StudioRailTokens): CSSProperties {
  return {
    width: tokens.widthPx,
    background: tokens.fill,
    paddingTop: tokens.paddingTop,
    paddingRight: tokens.paddingRight,
    paddingBottom: tokens.paddingBottom,
    paddingLeft: tokens.paddingLeft,
    gap: tokens.gap,
  };
}

/** Resolve F1 variant from route + surface query (A2 deep-link aware). */
export function resolveRailVariant(input: {
  pathname: string;
  surface?: string | null;
}): StudioRailVariant {
  const path = input.pathname || "/";
  if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
    return "personnel";
  }
  if (path.startsWith("/preparations/")) {
    return "conversation";
  }
  if (path.startsWith("/projects/")) {
    const surface = (input.surface ?? "").toLowerCase();
    if (surface === "document") return "inspection";
    if (surface === "travail" || surface === "") return "conversation";
    return "projet";
  }
  return "personnel";
}

```

### CREATE `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

- blob `1ee2d7e53f4f5c9f2750996ed7724fa99d9c1bc9`

```ts
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  railStyle,
  resolveRailVariant,
  type StudioRailVariant,
} from "./studio-rail";

type NavItem = { href: string; label: string; match?: (path: string) => boolean };

function navFor(variant: StudioRailVariant): NavItem[] {
  const base: NavItem[] = [
    {
      href: "/portfolio",
      label: "Portefeuille",
      match: (p) => p.startsWith("/portfolio") || p === "/",
    },
  ];
  if (variant === "personnel") {
    return [...base, { href: "/login", label: "Connexion", match: (p) => p.startsWith("/login") }];
  }
  if (variant === "conversation" || variant === "projet" || variant === "inspection") {
    return [
      ...base,
      { href: "#", label: "Travail" },
      { href: "#", label: "Pilotage" },
      { href: "#", label: "Documents" },
      { href: "#", label: "Journal" },
    ];
  }
  return base;
}

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = navFor(variant);

  return (
    <div className="min-h-screen flex studio-shell" data-rail-variant={variant}>
      <aside
        className="hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div>
          <div className="text-lg font-semibold tracking-tight studio-title">SFIA Studio</div>
          <div className="text-xs muted mt-1">
            {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
          </div>
          <div className="text-[10px] muted mt-1 uppercase tracking-wide">{variant}</div>
        </div>
        <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
          {items.map((item) => {
            const active = item.match ? item.match(pathname) : false;
            if (item.href === "#") {
              return (
                <span key={item.label} className="muted" aria-hidden={variant === "personnel"}>
                  {item.label}
                </span>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "font-semibold text-[var(--ink)]" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="text-xs muted mt-auto">
          Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
        </p>
      </aside>

      {/* Mobile: rail hidden — keyboard/accessible substitute */}
      <nav
        className="md:hidden flex gap-3 p-3 border-b border-[var(--line)] text-sm overflow-x-auto"
        aria-label="Navigation Studio mobile"
        data-testid="studio-rail-mobile"
      >
        <Link href="/portfolio">Portefeuille</Link>
        <Link href="/login">Connexion</Link>
      </nav>

      <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
    </div>
  );
}

```

### CREATE `projects/sfia-studio-next/web/src/domains/identity/portfolio-cursor.ts`

- blob `b16d0c0da8888b82dabd270c4a2a35b2b6445745`

```ts
import { StudioError } from "@/lib/http-errors";

export const PREPARATIONS_PAGE_SIZE = 25;

export type CursorPayload = { createdAt: string; id: string };

export function encodePreparationsCursor(row: { createdAt: Date; id: string }): string {
  const payload: CursorPayload = {
    createdAt: row.createdAt.toISOString(),
    id: row.id,
  };
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

export function decodePreparationsCursor(raw: string): CursorPayload {
  try {
    const json = Buffer.from(raw, "base64url").toString("utf8");
    const parsed = JSON.parse(json) as CursorPayload;
    if (
      typeof parsed?.createdAt !== "string" ||
      typeof parsed?.id !== "string" ||
      Number.isNaN(Date.parse(parsed.createdAt)) ||
      !parsed.id
    ) {
      throw new Error("bad cursor shape");
    }
    return parsed;
  } catch {
    throw new StudioError("INVALID_REQUEST", "INVALID_CURSOR", { httpStatus: 400 });
  }
}

```

### CREATE `projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts`

- blob `e24a457c0dd4097b828ede9a89f88e16fdc2529b`

```ts
export type PreparationLabelInput = {
  id: string;
  previewName?: string;
  previewSummary?: string;
};

/** Neutral label when preview fields are empty — never fabricate "recently modified". */
export function preparationDisplayLabel(p: PreparationLabelInput): string {
  const name = p.previewName?.trim();
  if (name) return name;
  const summary = p.previewSummary?.trim();
  if (summary) return summary.slice(0, 80);
  return `Préparation ${p.id.slice(0, 8)}`;
}

```

### CREATE `projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts`

- blob `703534e8dcdea5a7f2b4a13b834d0bf1acb38343`

```ts
import { describe, expect, it } from "vitest";
import {
  STUDIO_RAIL_VARIANTS,
  resolveRailVariant,
} from "@/components/shell/studio-rail";

describe("F1 studio rail variants (G2 railEvidence)", () => {
  it("keeps personnel vs projet fill discriminant", () => {
    expect(STUDIO_RAIL_VARIANTS.personnel.fill.toLowerCase()).toBe("#0c101a");
    expect(STUDIO_RAIL_VARIANTS.projet.fill.toLowerCase()).toBe("#0c1020");
    expect(STUDIO_RAIL_VARIANTS.personnel.fill).not.toBe(STUDIO_RAIL_VARIANTS.projet.fill);
  });

  it("exposes measured widths", () => {
    expect(STUDIO_RAIL_VARIANTS.personnel.widthPx).toBe(246);
    expect(STUDIO_RAIL_VARIANTS.projet.widthPx).toBe(246);
    expect(STUDIO_RAIL_VARIANTS.conversation.widthPx).toBe(240);
    expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(244);
  });

  it("resolves variant from route and surface", () => {
    expect(resolveRailVariant({ pathname: "/portfolio" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/login" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("conversation");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "document" }),
    ).toBe("inspection");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "travail" }),
    ).toBe("conversation");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "pilotage" }),
    ).toBe("projet");
  });
});

```

### CREATE `projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts`

- blob `3f35a4b3423ec4de1381f398be90c67e38be46e8`

```ts
import { describe, expect, it } from "vitest";
import {
  PREPARATIONS_PAGE_SIZE,
  decodePreparationsCursor,
  encodePreparationsCursor,
} from "@/domains/identity/portfolio-cursor";
import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
import { StudioError } from "@/lib/http-errors";

describe("A1 preparations cursor", () => {
  it("round-trips opaque keyset cursor", () => {
    const createdAt = new Date("2026-11-08T10:00:00.000Z");
    const encoded = encodePreparationsCursor({ createdAt, id: "prep-1" });
    const decoded = decodePreparationsCursor(encoded);
    expect(decoded).toEqual({ createdAt: createdAt.toISOString(), id: "prep-1" });
  });

  it("rejects malformed cursor as INVALID_CURSOR (400)", () => {
    expect(() => decodePreparationsCursor("not-a-cursor")).toThrow(StudioError);
    try {
      decodePreparationsCursor("%%%");
    } catch (e) {
      expect(e).toBeInstanceOf(StudioError);
      expect((e as StudioError).httpStatus).toBe(400);
      expect((e as StudioError).message).toBe("INVALID_CURSOR");
    }
  });

  it("uses page size 25", () => {
    expect(PREPARATIONS_PAGE_SIZE).toBe(25);
  });
});

describe("A1 preparation labels", () => {
  it("stays neutral when preview empty", () => {
    expect(preparationDisplayLabel({ id: "abcdefghij" })).toBe("Préparation abcdefgh");
  });

  it("prefers previewName", () => {
    expect(
      preparationDisplayLabel({
        id: "x",
        previewName: "  Sas alpha  ",
        previewSummary: "ignored",
      }),
    ).toBe("Sas alpha");
  });
});

```

### CREATE `projects/sfia-studio-next/web/tests/integration/portfolio-a1.pg.test.ts`

- blob `34df93644d0889ca31db3653837d9265caa267d2`

```ts
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots, preparations, preparationProjectLinks, projects } from "@/db/schema";
import { newId } from "@/lib/ids";
import { loadPortfolio, decodePreparationsCursor } from "@/domains/identity/portfolio";
import { StudioError } from "@/lib/http-errors";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("A1 portfolio preparations projection (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  });

  it("lists only OPEN unattached preparations for owner; excludes other pilots and attached", async () => {
    const a = await seedPilot("A1-owner");
    const b = await seedPilot("A1-other");

    const openA = newId("prep");
    const attachedA = newId("prep");
    const openB = newId("prep");
    await db.insert(preparations).values([
      {
        id: openA,
        ownerPilotId: a,
        status: "OPEN",
        previewName: "Open A",
        previewSummary: "s",
      },
      {
        id: attachedA,
        ownerPilotId: a,
        status: "ATTACHED",
        previewName: "Attached A",
        previewSummary: "s",
      },
      {
        id: openB,
        ownerPilotId: b,
        status: "OPEN",
        previewName: "Open B",
        previewSummary: "s",
      },
    ]);

    const projectId = newId("proj");
    await db.insert(projects).values({
      id: projectId,
      ownerPilotId: a,
      name: "Linked",
    });
    // Also mark a separate OPEN prep as attached via link (status may still be OPEN historically)
    const linkedOpen = newId("prep");
    await db.insert(preparations).values({
      id: linkedOpen,
      ownerPilotId: a,
      status: "OPEN",
      previewName: "Linked Open",
      previewSummary: "s",
    });
    await db.insert(preparationProjectLinks).values({
      preparationId: linkedOpen,
      projectId,
    });

    const portfolio = await loadPortfolio(a);
    expect(portfolio.kind).toBe("ready");
    if (portfolio.kind === "unavailable") throw new Error("unexpected");
    expect(portfolio.openPreparations).toBe(portfolio.preparations.items.length);
    const ids = portfolio.preparations.items.map((p) => p.id);
    expect(ids).toContain(openA);
    expect(ids).not.toContain(attachedA);
    expect(ids).not.toContain(openB);
    expect(ids).not.toContain(linkedOpen);
    expect(portfolio.preparations.items.every((p) => p.status === "OPEN")).toBe(true);
  });

  it("paginates with opaque keyset cursor (25) and rejects bad cursor", async () => {
    const pilotId = await seedPilot("A1-page");
    const rows = Array.from({ length: 27 }, (_, i) => ({
      id: newId("prep"),
      ownerPilotId: pilotId,
      status: "OPEN" as const,
      previewName: `P${String(i).padStart(2, "0")}`,
      previewSummary: "",
      // stagger createdAt via sequential inserts + slight offset not needed; id DESC breaks ties
    }));
    for (const r of rows) {
      await db.insert(preparations).values(r);
    }

    const page1 = await loadPortfolio(pilotId);
    expect(page1.kind).not.toBe("unavailable");
    if (page1.kind === "unavailable") throw new Error("unexpected");
    expect(page1.openPreparations).toBe(27);
    expect(page1.preparations.items).toHaveLength(25);
    expect(page1.preparations.nextCursor).toBeTruthy();

    const page2 = await loadPortfolio(pilotId, {
      preparationsCursor: page1.preparations.nextCursor,
    });
    expect(page2.kind).not.toBe("unavailable");
    if (page2.kind === "unavailable") throw new Error("unexpected");
    expect(page2.preparations.items).toHaveLength(2);
    expect(page2.preparations.nextCursor).toBeNull();

    const overlap = page1.preparations.items
      .map((i) => i.id)
      .filter((id) => page2.preparations.items.some((j) => j.id === id));
    expect(overlap).toHaveLength(0);

    await expect(loadPortfolio(pilotId, { preparationsCursor: "bogus" })).rejects.toBeInstanceOf(
      StudioError,
    );
    expect(() => decodePreparationsCursor("bogus")).toThrow(StudioError);
  });
});

```

### CREATE `projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-construction-2026-11-08.md`

- blob `4eb7077b47f4390eec22f50c3ad8b94e8596c3c3`

```md
# As-built G4 — convergence UX construction (2026-11-08)

**Branch :** `feat/next-convergence-ux-g4-construction`
**Lane :** DEV only
**Base :** `main@f0d59bc8` (+ pack G2 local VERIFY PASS)

## Livré

### F1 shell
- `StudioShell` + `studio-rail.ts` : 4 variantes `personnel|projet|conversation|inspection`
- Tokens G2 `railEvidence` (fills discriminants personnel `#0C101A` ≠ projet `#0C1020`, widths 246/246/240/244)
- Inter via `next/font/google` (pas de dépôt de fichiers fonte)
- Nav mobile accessible quand le rail desktop est caché

### A1 portefeuille
- `GET /api/portfolio?preparationsCursor=` additive
- `portfolio.preparations.{items,nextCursor}` ; `openPreparations` = même prédicat OPEN + non rattaché
- Keyset 25, curseur opaque, `400 INVALID_CURSOR`
- UI : liste + Reprendre (GET/nav only) + Nouvelle préparation (POST) + pagination

### A2 documents
- Deep-link `/projects/{id}?surface=document&documentId=` → inspection lecture seule
- « Réviser » explicite ; machine `READING→EDITING→SAVING→CONFLICT|UNKNOWN|FAILED`
- Même `correlationKey` au retry ; route D4 GET/POST via `studioErrorResponse` (plus de 401 fourre-tout)

### A3
- Pas de nouvelle autorité D5/D6 ; `SafeMarkdown` / PilotagePanel inchangés en doctrine

## Preuves locales
- Unit : 120 passed (dont `studio-rail`, `portfolio-cursor`)
- Integration PG : 144 passed (dont `portfolio-a1.pg`)
- `tsc --noEmit` OK
- G2 pack `verify-g2-pack.sh` → **VERIFY PASS**

## Hors scope (confirmé)
- Push / PR / merge projet
- RECETTE / STABLE
- F2 oracle image calibré G5 (reporté)
- Playwright BROWSER non rejoué dans ce cycle (à enchaîner en G5)

```

### CREATE `projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/l3-handoff-g4-2026-11-08.md`

- blob `09172ec14e9096af5c1eb9199176f85c534a2bf4`

```md
# L3 Handoff — G4 construction convergence UX

**À :** Morris (autorité Git / gates)
**De :** Cursor (intégrateur G4 local)
**Date :** 2026-11-08
**Demande :** revue L3 uniquement — **pas** de push, PR, merge, RECETTE, STABLE.

## Résumé exécutif
Construction locale G4 livrée sur `feat/next-convergence-ux-g4-construction` : shell F1 4 variantes (preuves G2), A1 liste préparations keyset, A2 deep-link document + révision D4, corrections HTTP D4. Pack G2 toujours **VERIFY PASS**. Tests unit + intégration PG verts. E2E Playwright / F2 DOM≤2px = suite G5.

## SHA / worktree
- Worktree : `/Users/morris/Projects/sfia-workspace-next-g4-construction`
- Branche : `feat/next-convergence-ux-g4-construction`
- Parent : `f0d59bc8`
- Agent root Cursor : resté sur evidence WT (move_agent_to_root bloqué par checkout ml3) — travaux via chemins absolus G4

## Fichiers touchés (allowlist)
- `web/src/app/layout.tsx`, `globals.css`
- `web/src/components/shell/*`
- `web/src/app/portfolio/page.tsx`, `api/portfolio/route.ts`
- `web/src/domains/identity/portfolio*.ts`
- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/app/api/preparations/.../documents/[documentId]/route.ts`
- tests unit/integration associés
- pack `g2-source/` copié dans le worktree (preuve construction)
- ce as-built + handoff

## STOP / risques restants
1. **F2 / UXC-13** : comparaison DOM/image ≤2 CSS px non exécutée (G5).
2. **Playwright BROWSER** : non rejoué sur ce SHA candidat.
3. **move_agent_to_root** : Cursor tente encore parfois `sfia/next-ml3-rct02-live-remediation` — ne pas libérer ml3 WT pour « débloquer » ; ouvrir explicitement le WT G4.
4. Contenu g2-source local : ne pas republier hors lane sans GO.

## Décision demandée à Morris
- Accepter le commit local G4 pour revue ChatGPT / gate G5 ?
- Autoriser ensuite uniquement les preuves G5 (BROWSER + F2) sans merge ?

```

## 8. Diffs intégraux — fichiers MODIFIÉS

### `DIFF__projects_sfia-studio-next_web_src_app_api_portfolio_route.ts.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
index 2f5fb675..20825fdc 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
@@ -1,13 +1,24 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { loadPortfolio } from "@/domains/identity/portfolio";
+import { studioErrorResponse } from "@/lib/http-errors";

-export async function GET() {
+export async function GET(req: Request) {
   try {
     const session = await requireStudioSession();
-    const portfolio = await loadPortfolio(session.pilotId);
-    return NextResponse.json({ session: { pilotId: session.pilotId, displayName: session.displayName, authMode: session.authMode }, portfolio });
-  } catch {
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+    const url = new URL(req.url);
+    const preparationsCursor = url.searchParams.get("preparationsCursor");
+    const portfolio = await loadPortfolio(session.pilotId, { preparationsCursor });
+    return NextResponse.json({
+      session: {
+        pilotId: session.pilotId,
+        displayName: session.displayName,
+        authMode: session.authMode,
+      },
+      portfolio,
+    });
+  } catch (e) {
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }

```

### `DIFF__projects_sfia-studio-next_web_src_app_api_preparations__preparationId__documents__documentId__route.ts.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
index 655c2f28..3658f0ca 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
@@ -6,6 +6,7 @@ import {
   listDocumentRevisions,
   reviseDocument,
 } from "@/domains/document/service";
+import { studioErrorResponse } from "@/lib/http-errors";

 export async function GET(
   req: Request,
@@ -40,8 +41,9 @@ export async function GET(
     }
     const list = await listDocumentRevisions(session.pilotId, preparationId, documentId);
     return NextResponse.json(list);
-  } catch {
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+  } catch (e) {
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }

@@ -80,7 +82,8 @@ export async function POST(
     const status =
       result.status === "CONFLICT" ? 409 : result.status === "FAILED" ? 400 : 200;
     return NextResponse.json(result, { status });
-  } catch {
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+  } catch (e) {
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }

```

### `DIFF__projects_sfia-studio-next_web_src_app_globals.css.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/globals.css b/projects/sfia-studio-next/web/src/app/globals.css
index ae6730ef..4c7d7b56 100644
--- a/projects/sfia-studio-next/web/src/app/globals.css
+++ b/projects/sfia-studio-next/web/src/app/globals.css
@@ -3,10 +3,14 @@
 @tailwind utilities;

 :root {
-  /* ML2 visual tokens aligned to Figma itgvCulInEnFY6DvgIegvP (conversation 03 / 94:214) */
+  /* ML2 visual tokens + F1 rail fills from G2 railEvidence (VERIFY PASS) */
   --bg: #0a0e17;
   --panel: #151c29;
   --rail: #0d111b;
+  --rail-personnel: #0c101a;
+  --rail-projet: #0c1020;
+  --rail-conversation: #0d111b;
+  --rail-inspection: #0c101a;
   --ink: #f4f6fc;
   --muted: #94a2bb;
   --accent: #656fe1;
@@ -17,12 +21,19 @@
   --bad: #e35d6a;
   --msg-nora: #1a2130;
   --msg-pilot: #252d40;
+  --font-sans: var(--font-inter), "Inter", ui-sans-serif, system-ui, sans-serif;
 }

 html, body {
   background: radial-gradient(1200px 600px at 10% -10%, #1a2433 0%, var(--bg) 55%);
   color: var(--ink);
   min-height: 100%;
+  font-family: var(--font-sans);
+}
+
+.studio-title {
+  font-family: var(--font-sans);
+  font-weight: 600;
 }

 * { box-sizing: border-box; }

```

### `DIFF__projects_sfia-studio-next_web_src_app_layout.tsx.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/layout.tsx b/projects/sfia-studio-next/web/src/app/layout.tsx
index e3b89f12..7578e24f 100644
--- a/projects/sfia-studio-next/web/src/app/layout.tsx
+++ b/projects/sfia-studio-next/web/src/app/layout.tsx
@@ -1,6 +1,15 @@
 import type { Metadata } from "next";
+import { Inter } from "next/font/google";
+import { Suspense } from "react";
 import "./globals.css";
-import { PRODUCT_VERSIONING } from "@/lib/product-version";
+import { StudioShell } from "@/components/shell/StudioShell";
+
+const inter = Inter({
+  subsets: ["latin"],
+  weight: ["400", "500", "600", "700"],
+  variable: "--font-inter",
+  display: "swap",
+});

 export const metadata: Metadata = {
   title: "SFIA Studio",
@@ -9,30 +18,17 @@ export const metadata: Metadata = {

 export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
-    <html lang="fr">
-      <body>
-        <div className="min-h-screen flex">
-          <aside
-            className="hidden md:flex flex-col gap-4 p-4 border-r border-[var(--line)]"
-            style={{ width: 246, background: "var(--rail)" }}
-            aria-label="Navigation Studio"
-          >
-            <div>
-              <div className="text-lg font-semibold tracking-tight">SFIA Studio</div>
-              <div className="text-xs muted mt-1">
-                {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
-              </div>
+    <html lang="fr" className={inter.variable}>
+      <body className={inter.className}>
+        <Suspense
+          fallback={
+            <div className="min-h-screen flex">
+              <main className="flex-1 p-4 md:p-8">{children}</main>
             </div>
-            <nav className="flex flex-col gap-2 text-sm">
-              <a href="/portfolio">Portefeuille</a>
-              <a href="/login">Connexion</a>
-            </nav>
-            <p className="text-xs muted mt-auto">
-              Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
-            </p>
-          </aside>
-          <main className="flex-1 p-4 md:p-8">{children}</main>
-        </div>
+          }
+        >
+          <StudioShell>{children}</StudioShell>
+        </Suspense>
       </body>
     </html>
   );

```

### `DIFF__projects_sfia-studio-next_web_src_app_portfolio_page.tsx.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index da47abf4..5cee7a30 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -1,13 +1,31 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useCallback, useEffect, useRef, useState } from "react";
 import { useRouter } from "next/navigation";
+import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
+
+type PreparationSummary = {
+  id: string;
+  previewName: string;
+  previewSummary: string;
+  createdAt: string;
+  status: "OPEN";
+};

 type PortfolioResponse = {
   session?: { displayName: string; authMode: string };
   portfolio?:
-    | { kind: "empty"; openPreparations: number }
-    | { kind: "ready"; projects: Array<{ id: string; name: string }>; openPreparations: number }
+    | {
+        kind: "empty";
+        openPreparations: number;
+        preparations: { items: PreparationSummary[]; nextCursor: string | null };
+      }
+    | {
+        kind: "ready";
+        projects: Array<{ id: string; name: string }>;
+        openPreparations: number;
+        preparations: { items: PreparationSummary[]; nextCursor: string | null };
+      }
     | { kind: "unavailable"; reason: string };
   error?: string;
 };
@@ -15,26 +33,83 @@ type PortfolioResponse = {
 export default function PortfolioPage() {
   const router = useRouter();
   const [data, setData] = useState<PortfolioResponse | null>(null);
+  const [items, setItems] = useState<PreparationSummary[]>([]);
+  const [nextCursor, setNextCursor] = useState<string | null>(null);
   const [error, setError] = useState<string>("");
+  const [loadingMore, setLoadingMore] = useState(false);
+  const creatingRef = useRef(false);
+
+  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
+    setData(j);
+    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
+    if (prep) {
+      setItems((prev) => (append ? [...prev, ...prep.items] : prep.items));
+      setNextCursor(prep.nextCursor);
+    } else if (!append) {
+      setItems([]);
+      setNextCursor(null);
+    }
+  }, []);

   useEffect(() => {
     fetch("/api/portfolio")
       .then(async (r) => {
-        const j = await r.json();
+        const j = (await r.json()) as PortfolioResponse;
         if (r.status === 401) {
           router.push("/login");
           return;
         }
-        setData(j);
+        if (r.status === 400) {
+          setError(j.error ?? "INVALID_CURSOR");
+          return;
+        }
+        if (!r.ok) {
+          setError(j.error ?? "portefeuille indisponible");
+          return;
+        }
+        applyPortfolio(j, false);
       })
       .catch((e) => setError(String(e)));
-  }, [router]);
+  }, [router, applyPortfolio]);
+
+  async function loadMore() {
+    if (!nextCursor || loadingMore) return;
+    setLoadingMore(true);
+    try {
+      const res = await fetch(
+        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
+      );
+      const j = (await res.json()) as PortfolioResponse;
+      if (res.status === 400) {
+        setError(j.error ?? "INVALID_CURSOR");
+        return;
+      }
+      if (!res.ok) {
+        setError(j.error ?? "pagination impossible");
+        return;
+      }
+      applyPortfolio(j, true);
+    } finally {
+      setLoadingMore(false);
+    }
+  }

   async function startPreparation() {
-    const res = await fetch("/api/preparations", { method: "POST" });
-    const j = await res.json();
-    if (res.ok) router.push(`/preparations/${j.preparationId}`);
-    else setError(j.error ?? "échec");
+    if (creatingRef.current) return;
+    creatingRef.current = true;
+    try {
+      const res = await fetch("/api/preparations", { method: "POST" });
+      const j = await res.json();
+      if (res.ok) router.push(`/preparations/${j.preparationId}`);
+      else setError(j.error ?? "échec");
+    } finally {
+      creatingRef.current = false;
+    }
+  }
+
+  /** Reprendre = GET only, no POST. */
+  function resumePreparation(id: string) {
+    router.push(`/preparations/${id}`);
   }

   if (error) {
@@ -46,15 +121,15 @@ export default function PortfolioPage() {
   return (
     <div className="space-y-6 max-w-3xl">
       <header className="space-y-1">
-        <h1 className="text-2xl font-semibold">Portefeuille</h1>
+        <h1 className="text-2xl font-semibold studio-title">Portefeuille</h1>
         <p className="muted text-sm">
           {data.session?.displayName} · mode {data.session?.authMode}. Aucune Nora globale ici.
         </p>
       </header>

       <div className="flex gap-2">
-        <button className="btn" onClick={startPreparation}>
-          Ouvrir un sas (sans projet)
+        <button className="btn" onClick={startPreparation} data-testid="portfolio-new-prep">
+          Nouvelle préparation
         </button>
       </div>

@@ -73,7 +148,7 @@ export default function PortfolioPage() {
         </div>
       )}
       {p?.kind === "ready" && (
-        <ul className="space-y-2">
+        <ul className="space-y-2" data-testid="portfolio-projects">
           {p.projects.map((proj) => (
             <li key={proj.id} className="panel p-4 flex justify-between items-center">
               <div>
@@ -87,6 +162,50 @@ export default function PortfolioPage() {
           ))}
         </ul>
       )}
+
+      {(p?.kind === "empty" || p?.kind === "ready") && (
+        <section className="space-y-3" data-testid="portfolio-preparations">
+          <h2 className="text-lg font-semibold">
+            Préparations ouvertes
+            <span className="muted text-sm font-normal ml-2">({p.openPreparations})</span>
+          </h2>
+          {items.length === 0 ? (
+            <p className="text-sm muted">Aucune préparation ouverte non rattachée.</p>
+          ) : (
+            <ul className="space-y-2">
+              {items.map((prep) => (
+                <li key={prep.id} className="panel p-4 flex justify-between items-center gap-3">
+                  <div className="min-w-0">
+                    <div className="font-medium truncate">{preparationDisplayLabel(prep)}</div>
+                    <div className="text-xs muted">
+                      {prep.status} · {new Date(prep.createdAt).toLocaleString("fr-FR")}
+                    </div>
+                  </div>
+                  <button
+                    type="button"
+                    className="btn secondary shrink-0"
+                    data-testid={`resume-prep-${prep.id}`}
+                    onClick={() => resumePreparation(prep.id)}
+                  >
+                    Reprendre
+                  </button>
+                </li>
+              ))}
+            </ul>
+          )}
+          {nextCursor ? (
+            <button
+              type="button"
+              className="btn secondary"
+              disabled={loadingMore}
+              data-testid="portfolio-load-more"
+              onClick={() => void loadMore()}
+            >
+              {loadingMore ? "Chargement…" : "Charger plus"}
+            </button>
+          ) : null}
+        </section>
+      )}
     </div>
   );
 }

```

### `DIFF__projects_sfia-studio-next_web_src_app_projects__projectId__page.tsx.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index c4f26046..d90a9250 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -1,7 +1,7 @@
 "use client";

 import { useEffect, useRef, useState } from "react";
-import { useParams, useRouter } from "next/navigation";
+import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PilotagePanel } from "@/components/PilotagePanel";
 import {
@@ -29,6 +29,14 @@ type Knowledge = {
 };

 type Surface = "travail" | "pilotage" | "journal" | "document";
+type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";
+
+const SURFACES: Surface[] = ["travail", "pilotage", "journal", "document"];
+
+function parseSurface(raw: string | null): Surface | null {
+  if (!raw) return null;
+  return SURFACES.includes(raw as Surface) ? (raw as Surface) : null;
+}

 type PilotageEffectView = {
   attempted?: boolean;
@@ -68,13 +76,14 @@ function formatPilotageEffect(
 export default function ProjectPage() {
   const params = useParams<{ projectId: string }>();
   const router = useRouter();
+  const searchParams = useSearchParams();
   const [messages, setMessages] = useState<Msg[]>([]);
   const [documents, setDocuments] = useState<Doc[]>([]);
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
   const [preparationId, setPreparationId] = useState<string | null>(null);
   const [meta, setMeta] = useState("Chargement…");
   const [error, setError] = useState("");
-  const [surface, setSurface] = useState<Surface>("travail");
+  const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
   const [draft, setDraft] = useState("");
   const [busy, setBusy] = useState(false);
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
@@ -82,8 +91,44 @@ export default function ProjectPage() {
   const [pilotageStatus, setPilotageStatus] = useState("");
   const [decisionSummary, setDecisionSummary] = useState("");
   const [inspect, setInspect] = useState<Doc | null>(null);
+  const [docUi, setDocUi] = useState<DocUiState>("READING");
+  const [reviseDraft, setReviseDraft] = useState("");
+  const [reviseMessage, setReviseMessage] = useState("");
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
+  const reviseCorrelationRef = useRef<string | null>(null);
+  const deepLinkAppliedRef = useRef(false);
+
+  function syncSurfaceUrl(next: Surface, documentId?: string | null) {
+    const q = new URLSearchParams();
+    q.set("surface", next);
+    if (next === "document" && documentId) q.set("documentId", documentId);
+    router.replace(`/projects/${params.projectId}?${q.toString()}`, { scroll: false });
+  }
+
+  function selectSurface(next: Surface) {
+    setSurface(next);
+    if (next !== "document") {
+      setInspect(null);
+      setDocUi("READING");
+      setReviseDraft("");
+      setReviseMessage("");
+      reviseCorrelationRef.current = null;
+      syncSurfaceUrl(next);
+    } else {
+      syncSurfaceUrl(next, inspect?.document.id ?? null);
+    }
+  }
+
+  function openDocumentReadOnly(doc: Doc) {
+    setInspect(doc);
+    setDocUi("READING");
+    setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
+    setReviseMessage("");
+    reviseCorrelationRef.current = null;
+    setSurface("document");
+    syncSurfaceUrl("document", doc.document.id);
+  }

   function rememberPending(pending: ThreadPendingTurn | null) {
     if (typeof sessionStorage === "undefined") return;
@@ -244,14 +289,33 @@ export default function ProjectPage() {
         return;
       }
       const j = await res.json();
+      const docs = (j.documents ?? []) as Doc[];
       setMessages(j.messages ?? []);
-      setDocuments(j.documents ?? []);
+      setDocuments(docs);
       setKnowledge(j.knowledge ?? null);
       setPreparationId(j.preparation?.id ?? null);
       setMeta(
         `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
       );
       setError("");
+
+      // A2 deep-link: open inspection read-only; no mutation on open/refresh/back.
+      if (!deepLinkAppliedRef.current) {
+        deepLinkAppliedRef.current = true;
+        const qSurface = parseSurface(searchParams.get("surface"));
+        const qDocId = searchParams.get("documentId");
+        if (qSurface) setSurface(qSurface);
+        if (qSurface === "document" && qDocId) {
+          const match = docs.find((d) => d.document.id === qDocId);
+          if (match) {
+            setInspect(match);
+            setDocUi("READING");
+            setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
+          }
+          // Foreign/unknown documentId: stay on document surface, no unauthorized open.
+        }
+      }
+
       await refreshDurablePilotage();
       const pending = readPending();
       if (pending) {
@@ -269,6 +333,73 @@ export default function ProjectPage() {
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.projectId, router]);

+  async function saveRevision() {
+    if (!preparationId || !inspect?.latestRevision) return;
+    if (!reviseCorrelationRef.current) {
+      reviseCorrelationRef.current =
+        typeof crypto !== "undefined" && "randomUUID" in crypto
+          ? `rev-${crypto.randomUUID()}`
+          : `rev-${Date.now()}`;
+    }
+    const correlationKey = reviseCorrelationRef.current;
+    setDocUi("SAVING");
+    setReviseMessage("");
+    try {
+      const res = await fetch(
+        `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            action: "revise",
+            baseRevisionId: inspect.latestRevision.id,
+            contentMarkdown: reviseDraft,
+            correlationKey,
+          }),
+        },
+      );
+      const j = await res.json().catch(() => ({}));
+      if (res.status === 409) {
+        setDocUi("CONFLICT");
+        setReviseMessage(
+          String(j.reason ?? j.error ?? "BASE_STALE") +
+            " — relire la version récente avant de choisir.",
+        );
+        const proj = await fetch(`/api/projects/${params.projectId}`);
+        if (proj.ok) {
+          const pj = await proj.json();
+          const docs = (pj.documents ?? []) as Doc[];
+          setDocuments(docs);
+          const fresh = docs.find((d) => d.document.id === inspect.document.id);
+          if (fresh) setInspect(fresh);
+        }
+        return;
+      }
+      if (!res.ok) {
+        setDocUi(res.status === 401 ? "FAILED" : "UNKNOWN");
+        setReviseMessage(String(j.error ?? j.errorCategory ?? "échec révision"));
+        return;
+      }
+      const proj = await fetch(`/api/projects/${params.projectId}`);
+      if (proj.ok) {
+        const pj = await proj.json();
+        const docs = (pj.documents ?? []) as Doc[];
+        setDocuments(docs);
+        const fresh = docs.find((d) => d.document.id === inspect.document.id);
+        if (fresh) {
+          setInspect(fresh);
+          setReviseDraft(fresh.latestRevision?.contentMarkdown ?? reviseDraft);
+        }
+      }
+      reviseCorrelationRef.current = null;
+      setDocUi("READING");
+      setReviseMessage("Révision enregistrée.");
+    } catch {
+      setDocUi("UNKNOWN");
+      setReviseMessage("ACK perdu — même correlationKey conservée pour retry.");
+    }
+  }
+
   async function sendMessage() {
     if (!draft.trim() || !preparationId) return;
     const text = draft.trim();
@@ -383,7 +514,8 @@ export default function ProjectPage() {
               key={id}
               type="button"
               className={`btn ${surface === id ? "" : "secondary"}`}
-              onClick={() => setSurface(id)}
+              onClick={() => selectSurface(id)}
+              data-testid={`surface-${id}`}
             >
               {label}
             </button>
@@ -500,8 +632,11 @@ export default function ProjectPage() {
               <button
                 key={d.document.id}
                 type="button"
-                className="panel p-3 text-left w-full"
-                onClick={() => setInspect(d)}
+                className={`panel p-3 text-left w-full ${
+                  inspect?.document.id === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
+                }`}
+                onClick={() => openDocumentReadOnly(d)}
+                data-testid={`doc-open-${d.document.id}`}
               >
                 <div className="text-xs muted mb-1">
                   {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
@@ -516,18 +651,91 @@ export default function ProjectPage() {
               <p className="text-sm muted">Aucun document D4 pour ce projet.</p>
             ) : null}
           </section>
-          <section className="panel p-4 space-y-2">
-            <h2 className="font-medium">Inspection</h2>
+          <section className="panel p-4 space-y-2" data-testid="document-inspect">
+            <h2 className="font-medium">
+              {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT"
+                ? "Révision"
+                : "Inspection"}
+            </h2>
+            <p className="text-xs muted" data-testid="document-ui-state">
+              État: {docUi}
+            </p>
             {inspect?.latestRevision ? (
               <>
                 <p className="text-xs muted">
                   {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
                   {inspect.latestRevision.status}
                 </p>
-                <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
-                <button type="button" className="btn secondary" onClick={() => setInspect(null)}>
-                  Retour au fil
-                </button>
+                {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT" || docUi === "UNKNOWN" ? (
+                  <>
+                    <textarea
+                      className="textarea"
+                      value={reviseDraft}
+                      onChange={(e) => setReviseDraft(e.target.value)}
+                      disabled={docUi === "SAVING"}
+                      aria-label="Contenu markdown à réviser"
+                      data-testid="document-revise-draft"
+                    />
+                    <div className="flex flex-wrap gap-2">
+                      <button
+                        type="button"
+                        className="btn"
+                        disabled={docUi === "SAVING"}
+                        data-testid="document-revise-save"
+                        onClick={() => void saveRevision()}
+                      >
+                        {docUi === "SAVING" ? "Enregistrement…" : "Enregistrer la révision"}
+                      </button>
+                      <button
+                        type="button"
+                        className="btn secondary"
+                        disabled={docUi === "SAVING"}
+                        onClick={() => {
+                          setDocUi("READING");
+                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
+                          setReviseMessage("");
+                          reviseCorrelationRef.current = null;
+                        }}
+                      >
+                        Annuler
+                      </button>
+                    </div>
+                  </>
+                ) : (
+                  <>
+                    <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
+                    <div className="flex flex-wrap gap-2">
+                      <button
+                        type="button"
+                        className="btn"
+                        data-testid="document-revise-start"
+                        onClick={() => {
+                          setDocUi("EDITING");
+                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
+                          reviseCorrelationRef.current = null;
+                        }}
+                      >
+                        Réviser
+                      </button>
+                      <button
+                        type="button"
+                        className="btn secondary"
+                        onClick={() => {
+                          setInspect(null);
+                          setDocUi("READING");
+                          selectSurface("travail");
+                        }}
+                      >
+                        Retour au fil
+                      </button>
+                    </div>
+                  </>
+                )}
+                {reviseMessage ? (
+                  <p className="text-xs muted" data-testid="document-revise-message">
+                    {reviseMessage}
+                  </p>
+                ) : null}
               </>
             ) : (
               <p className="text-sm muted">Sélectionner un document pour inspecter.</p>

```

### `DIFF__projects_sfia-studio-next_web_src_domains_identity_portfolio.ts.diff`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
index cf3270b2..12fbf411 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
@@ -1,17 +1,119 @@
-import { eq } from "drizzle-orm";
+import { and, desc, eq, isNull, lt, or } from "drizzle-orm";
 import { db } from "@/db/client";
 import { projects, preparations, preparationProjectLinks } from "@/db/schema";
+import { StudioError } from "@/lib/http-errors";
+import {
+  PREPARATIONS_PAGE_SIZE,
+  decodePreparationsCursor,
+  encodePreparationsCursor,
+} from "./portfolio-cursor";
+
+export type PreparationSummary = {
+  id: string;
+  previewName: string;
+  previewSummary: string;
+  createdAt: string;
+  status: "OPEN";
+};
+
+export type PreparationsPage = {
+  items: PreparationSummary[];
+  nextCursor: string | null;
+};

 export type PortfolioState =
-  | { kind: "empty"; projects: []; openPreparations: number }
+  | {
+      kind: "empty";
+      projects: [];
+      openPreparations: number;
+      preparations: PreparationsPage;
+    }
   | {
       kind: "ready";
       projects: Array<{ id: string; name: string; createdAt: Date }>;
       openPreparations: number;
+      preparations: PreparationsPage;
     }
   | { kind: "unavailable"; reason: string };

-export async function loadPortfolio(pilotId: string): Promise<PortfolioState> {
+export { decodePreparationsCursor, encodePreparationsCursor } from "./portfolio-cursor";
+
+/** OPEN + owned + not attached — shared predicate for count and list. */
+function openUnattachedWhere(pilotId: string) {
+  return and(
+    eq(preparations.ownerPilotId, pilotId),
+    eq(preparations.status, "OPEN"),
+    isNull(preparationProjectLinks.preparationId),
+  );
+}
+
+async function countOpenUnattached(pilotId: string): Promise<number> {
+  const rows = await db
+    .select({ id: preparations.id })
+    .from(preparations)
+    .leftJoin(
+      preparationProjectLinks,
+      eq(preparationProjectLinks.preparationId, preparations.id),
+    )
+    .where(openUnattachedWhere(pilotId));
+  return rows.length;
+}
+
+async function loadPreparationsPage(
+  pilotId: string,
+  cursorRaw: string | null | undefined,
+): Promise<PreparationsPage> {
+  const cursor = cursorRaw ? decodePreparationsCursor(cursorRaw) : null;
+  const cursorDate = cursor ? new Date(cursor.createdAt) : null;
+
+  const keyset =
+    cursor && cursorDate
+      ? or(
+          lt(preparations.createdAt, cursorDate),
+          and(eq(preparations.createdAt, cursorDate), lt(preparations.id, cursor.id)),
+        )
+      : undefined;
+
+  const rows = await db
+    .select({
+      id: preparations.id,
+      previewName: preparations.previewName,
+      previewSummary: preparations.previewSummary,
+      createdAt: preparations.createdAt,
+      status: preparations.status,
+    })
+    .from(preparations)
+    .leftJoin(
+      preparationProjectLinks,
+      eq(preparationProjectLinks.preparationId, preparations.id),
+    )
+    .where(
+      keyset
+        ? and(openUnattachedWhere(pilotId), keyset)
+        : openUnattachedWhere(pilotId),
+    )
+    .orderBy(desc(preparations.createdAt), desc(preparations.id))
+    .limit(PREPARATIONS_PAGE_SIZE + 1);
+
+  const hasMore = rows.length > PREPARATIONS_PAGE_SIZE;
+  const page = hasMore ? rows.slice(0, PREPARATIONS_PAGE_SIZE) : rows;
+  const last = page[page.length - 1];
+  return {
+    items: page.map((r) => ({
+      id: r.id,
+      previewName: r.previewName,
+      previewSummary: r.previewSummary,
+      createdAt: r.createdAt.toISOString(),
+      status: "OPEN" as const,
+    })),
+    nextCursor: hasMore && last ? encodePreparationsCursor(last) : null,
+  };
+}
+
+export async function loadPortfolio(
+  pilotId: string,
+  opts?: { preparationsCursor?: string | null },
+): Promise<PortfolioState> {
   try {
     const owned = await db
       .select({
@@ -22,20 +124,27 @@ export async function loadPortfolio(pilotId: string): Promise<PortfolioState> {
       .from(projects)
       .where(eq(projects.ownerPilotId, pilotId));

-    const openPreps = await db
-      .select({ id: preparations.id })
-      .from(preparations)
-      .where(eq(preparations.ownerPilotId, pilotId));
-
-    const attached = await db.select({ preparationId: preparationProjectLinks.preparationId }).from(preparationProjectLinks);
-    const attachedSet = new Set(attached.map((a) => a.preparationId));
-    const openCount = openPreps.filter((p) => !attachedSet.has(p.id)).length;
+    const openCount = await countOpenUnattached(pilotId);
+    const preparationsPage = await loadPreparationsPage(pilotId, opts?.preparationsCursor);

     if (owned.length === 0) {
-      return { kind: "empty", projects: [], openPreparations: openCount };
+      return {
+        kind: "empty",
+        projects: [],
+        openPreparations: openCount,
+        preparations: preparationsPage,
+      };
     }
-    return { kind: "ready", projects: owned, openPreparations: openCount };
+    return {
+      kind: "ready",
+      projects: owned,
+      openPreparations: openCount,
+      preparations: preparationsPage,
+    };
   } catch (e) {
+    if (e instanceof StudioError) throw e;
     return { kind: "unavailable", reason: e instanceof Error ? e.message : "unknown" };
   }
 }
+
+export { preparationDisplayLabel } from "./portfolio-labels";

```

## 9. Complétude Review Pack (pré-publish)

| Critère | Statut |
|---|---|
| Git Truth | OK |
| Inventaire exhaustif | OK |
| Contenu intégral créations | OK (§7) |
| Diffs intégraux modifications | OK (§8) |
| Explications F1/A1/A2/D4 | OK |
| Preuves unit/integration/tsc/G2 | OK |
| Absences déclarées | OK |
| Handoff distant | pending publish |

**Après publish vérifié :** verdict final `G4 REVIEW PACK FULL — READY FOR CHATGPT REVIEW`.

## 10. Publication handoff (vérifiée)

Le Review Pack FULL ci-dessus a été publié sur `sfia/review-handoff` via `scripts/sfia/publish-review-handoff.sh` (mono-fichier `sfia-review-handoff/latest-chatgpt-review.md`, push fast-forward). Les SHA tip/blob **effectifs** sont ceux du tip `origin/sfia/review-handoff` après publication (fournis aussi dans la sortie publisher / réponse Cursor) — non auto-référencés ici pour éviter un blob instable.

| Champ fixe | Valeur |
|---|---|
| Commit G4 candidat | `dbaccfdab463b18bd464ea57753865b948b1c089` |
| Base | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Path canonique | `sfia-review-handoff/latest-chatgpt-review.md` |
| Branche handoff | `sfia/review-handoff` |

**Verdict :** `G4 REVIEW PACK FULL — READY FOR CHATGPT REVIEW`
