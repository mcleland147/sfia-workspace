# ML5 as-built — Cursor realization consolidation (2026-11-23)

| Champ | Valeur |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| HEAD entrée cycle 2 | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
| Lane | DEV only (`sfia-next-dev-pg` / :5433) — migrations **017+018** sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE non touchée |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |

## Cycle 2 — sécurisation et convergence

### P0 corrigés (DEV / DETERMINISTIC + PG)

| ID | Correctif | Preuve |
|---|---|---|
| P0-01 | Claim atomique AUTHORIZED\|AMBIGUOUS→DISPATCHED ; fencing `claimToken` ; refus redispatch aveugle | `cursor-claim.ts` + `ml5-cursor-dispatch.pg.test.ts` **7 PASS** |
| P0-02 | Workspace serveur sous `SFIA_CURSOR_WORKSPACE_ROOT` ; rejet cwd client absolu ; clé `workspaceKey` | `workspace-resolver.ts` + unit **5 PASS** |
| P0-03 | `webSearchTool` détaché tant que `SFIA_WEB_SEARCH_ISOLATION_PROVEN≠1` | `web-search-tools.ts` + boundary unit |

### P1 consolidés

- Persistance `reversibility_limits_json` + round-trip fingerprint.
- DRAFT ≠ READY : `markReady` / `unknownRestrictions` / route `…/ready`.
- Handoff : provenance, état tentative, inventaire incomplet ≠ succès, secrets → REJECTED.
- Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`).
- LIVE adapter : `waitForTerminal=false` après ACK (HTTP non bloqué sur wait complet).

### Parcours produit

- `CursorRealizationSurface` monté sur `?surface=publication` (shell existant).
- Dialog D6 Oui/Non ; Non = aucun effet.
- Bilan D8 + « En discuter avec Nora » → draft Travail.
- Activité C1 : producteur branché au tour Nora ; séquence sous `FOR UPDATE`.
- Investigation : snapshot durable `preparations.projection_json`.

### Figma page 12

- L0 inventaire 14 frames (cycle 1).
- L1 : metadata native 14 frames + design context **12.02** (session `c2ce3ba7-…`).
- F2 / BROWSER runtime comparison : **NOT PROVEN**.

### Tests exécutés

- Vitest unit ML5 : **29 PASS**.
- Vitest PG `ml5-cursor-dispatch.pg.test.ts` : **7 PASS** (sfia_next_e2e).
- `tsc --noEmit` : PASS après correctifs UI.
- BROWSER parcours : **NOT RUN** (fixture/dev server non exercé ce cycle).
- LIVE SDK / LIVE web : **NOT PROVEN**.

### Git Cursor A/B (recommandation, non ADOPTED)

| Option | Blast radius | Recommandation revue |
|---|---|---|
| A — publication Git directe par Cursor | Droits effectifs Cursor ; gouvernance permissions plus opaque | Déconseillé sans GO |
| **B — Cursor files puis publication D7/D9** | Publication bornée HumanDecision + D9 | **Préférée** — à arbitrer Morris ; **pas ADOPTED** |

### Non livré / réserves ouvertes

- F2 pixel + BROWSER 12.01–12.14.
- Avis Nora cognitif réel sur dossier D8 (run Nora).
- LIVE SDK confined end-to-end.
- Isolation B1 prouvée (gate `ISOLATION_PROVEN`).
- Option Git B ADOPTED.
- Worker production long-run.
- Push projet / PR / merge / RECETTE / STABLE.

## Invariants respectés

- Pas de second moteur D6/D7/D8/D9/MCP.
- Pas d'admin Cursor Desktop dans Studio.
- send ≠ observed ; STOP ≠ rollback ; finished ≠ conforme ; missing report ≠ no work.
- Brief technique ≠ D8 ≠ avis Nora ≠ HumanDecision.
