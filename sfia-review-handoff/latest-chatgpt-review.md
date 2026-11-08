# Review Pack FULL — G4 publication PR + CI — 2026-11-08 (Europe/Paris)

**Verdict :** `G4 PR OPEN — CI GREEN — READY FOR MORRIS MERGE DECISION WITH RESERVES`
**Merge :** NON effectué — GO Morris distinct requis
**NO STABLE / NO RELEASE / NO ADOPTION / F2/G5 NOT PROVEN**

## 1. Git Truth

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branch | `feat/next-convergence-ux-g4-construction` |
| HEAD (PR tip) | `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` |
| origin/main (base) | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| merge-base | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| RECETTE frozen SHA (product UX éprouvé) | `29535d07e9c14077b422020e25fbf54a98affe25` |
| RECETTE tree | `3f8038ceab95344acef9e3676dd294663a00f2cf` |
| RECETTE build | `U2HrgAwriuzf6f1YI0rRK` @ `http://127.0.0.1:3200` PID 74165 |
| Knowledge contract cycle 13 | Guidance §5.9 in routing guide — dedicated contract file ABSENT — FALLBACK SFIA v2.6 ROUTING/TEMPLATE |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/

```

### Commits since main

```
ee6d11e9 fix(next): drop Google font fetch so CI next build is network-stable
3b5f400c chore(next): strip trailing whitespace blocking G4 CI gate
277d513e fix(next): stabilize E2E webServer without turbopack on CI
122dd0eb fix(next): align legacy e2e with G4 chat-first sas for CI
3206e15f docs(next): G4 RECETTE ENV-01 manifest and PR readiness with UX reserves
29535d07 feat(next): rebuild G4 sas as chat-first proposal flow with real workspaces
c2af05cb feat(next): transpose G2 Figma UX surfaces into navigable G4 React views
d45f0962 fix(next): G4 B1–B4 shell nav, deep-link history, D4 revise ACK, A1 create uncertainty
dbaccfda feat(next): G4 Pilote–Nora convergence UX (F1/A1/A2) on DEV lane

```

### Tip vs RECETTE

- Product UX candidate RECETTE remains **`29535d07`** (chat-first).
- Tip `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` adds docs + CI/test hardening after RECETTE: e2e chat-first alignment, create-intent-key observability, e2e webServer without turbopack, trailing whitespace, **no Google font fetch**.
- Do **not** re-label the frozen RECETTE build as proof of tip SHA; tip changes are CI/compat, not a new visual candidate.

## 2. Sources (origin/main blobs)

| Path | blob |
|---|---|
| governance/SEF.md | `ef85ba1eda6ce5eaddd75eca3ca299a10cd05ad4` |
| governance/roadmap.md | `4c06833c805d6f57edd52fd4cb694c846129dce7` |
| governance/environnements-recette-et-promotions.md | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| governance/product-versioning.md | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| decisions/2026-11-07-convergence-ux-arbitrages.md | `04403f567241168c8cbdad4705408936118cd757` |
| method/.../sfia-cycle-routing-guide.md | `3315bbae4757ad42255d16cba47d9e32be2a7842` |
| .github/workflows/sfia-studio-next-ci.yml | `cca2c8efda22932e5b7a3d3eecf4fcfd7841f065` |

## 3. PR

| | |
|---|---|
| URL | https://github.com/mcleland147/sfia-workspace/pull/669 |
| Number | **#669** |
| Base | `main` @ `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Head | `feat/next-convergence-ux-g4-construction` @ `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` |
| mergeable | MERGEABLE |
| mergeStateStatus | CLEAN |
| Conflicts | none |

### Excluded from PR / untracked

- `g2-source/scripts/tmp/` (EXCLUDE — untracked)
- `.tmp-sfia-review/` (never)

### Diffstat

154+ files initially; tip includes CI fixes. File list count: 159

<details><summary>name-status (full)</summary>

```
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-chat-first-reprise-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-construction-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/env01-recette-manifest-g4-29535d07-2026-11-08.md
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
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/l3-handoff-g4-2026-11-08.md
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/pr-readiness-g4-29535d07-2026-11-08.md
M	projects/sfia-studio-next/web/scripts/e2e-web-server.sh
M	projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
M	projects/sfia-studio-next/web/src/app/globals.css
M	projects/sfia-studio-next/web/src/app/layout.tsx
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
A	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
A	projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
A	projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
A	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
A	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
A	projects/sfia-studio-next/web/src/domains/identity/portfolio-cursor.ts
A	projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
M	projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
A	projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
A	projects/sfia-studio-next/web/tests/integration/portfolio-a1.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts
A	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts

```

</details>

## 4. CI (observable finals)

Run Next CI tip: https://github.com/mcleland147/sfia-workspace/actions/runs/42475102674

| Check | Result |
|---|---|
| Detect SFIA Studio Next changes | PASS |
| Build and validate SFIA Studio Next | PASS |
| SFIA Studio Next Required Gate | PASS |
| Detect SFIA Studio changes | PASS |
| Build and validate SFIA Studio | SKIPPED (out of scope) |
| SFIA Studio Required Gate | PASS |

### CI failures fixed in-cycle (bounded)

1. Playwright: legacy ML1–ML3 still used removed CTA `Ouvrir un sas…` / permanent form — aligned to chat-first (`122dd0eb`).
2. E2E webServer turbopack + Google font flake timed out — webpack e2e server (`277d513e`).
3. `git diff --check` trailing whitespace on as-builts — stripped (`3b5f400c`).
4. `next/font/google` intermittent webpack null on Build Next — removed Google fetch (`ee6d11e9`).

## 5. Fake / Real

| Item | Class |
|---|---|
| Login RECETTE / CI | FAKE `dev-test-login` |
| OAuth GitHub | NOT CONFIGURED |
| Nora LIVE | NOT CONFIGURED — fixture fail-closed |
| D1/D2/D4/ownership RECETTE | REAL isolated DB `sfia_next_recette_g4` |
| Playwright | BROWSER FAKE E2E lane — not F2/G5 |

## 6. Réserves (explicit)

- F2 / G5 visual Morris: **NOT PROVEN / NOT RUN** — proceed WITH RESERVES only
- Figma gaps Nora/Documents/Journal; empty ≠ fed; portfolio finitions
- Tip font stack no longer fetches Google Inter (CI-stable); RECETTE build still older SHA with previous font wiring
- Large G2 pack footprint
- M4 NOT opened

## 7. Décision Morris unique demandée

**Autoriser le merge de PR #669 vers `main` ?** (GO distinct ; pas d'auto-merge.)
STABLE / RELEASE / adoption restent hors périmètre.

## 8. Rollback

Revert merge commit on `main` if needed; DEV/RECETTE lanes independent.
