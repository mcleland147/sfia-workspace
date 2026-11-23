# ML5 as-built — Cursor realization socle (2026-11-23)

| Champ | Valeur |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Lane | DEV only (`sfia-next-dev-pg` / :5433) — migration 017 appliquée ; RECETTE (:5434/:3200) non touchée |

## Livré (socle vertical)

- Migration additive `017_ml5_cursor_realization.sql` + schéma Drizzle.
- Contrats techniques versionnés hors `replyDraft` (`technical_contracts`).
- Tentatives D7 `CURSOR_EXECUTION` (prepare / authorize / dispatch / stop / reconcile).
- Adaptateur SDK SCRIPTED (défaut) + LIVE (`SFIA_CURSOR_EFFECT_MODE=LIVE`).
- Handoff immuable par tentative + qualification D8 neuf rubriques.
- Activité C1 : table `nora_activity_events` + GET polling.
- B1 : sanitization + `webSearchTool` gated (`SFIA_WEB_SEARCH_ENABLED=1`).
- Investigation A : état cognitif / suffisance (`investigation-state.ts`).
- UI : `ContractViewer`, `RealizationBilan` (fidélité Figma page 12 à compléter L0–F2).
- APIs sous `/api/projects/:id/realization/*` et activity GET.
- Dépendance `@cursor/sdk@1.4.2`.
- Tests unitaires ML5 : 17 PASS (DETERMINISTIC).

## Non livré / réserves

- Intégration LIVE Nora web + preuve non-exfiltration.
- LIVE Cursor SDK end-to-end (entitlement / workspace réel).
- REAL GitHub mutatif (interdit sans GO).
- Fidélité Figma F2 / captures BROWSER page 12.
- Branchement UI complet dans `projects/[projectId]/page.tsx`.
- Wire activité dans `nora-adapter` pendant tools.
- Option Git A/B pour missions Cursor mutatives.
- Worker process séparé production.

## Invariants respectés

- Pas de second moteur D6/D7/D8/Git/cognitif.
- Pas d'admin MCP/Cursor Desktop dans Studio.
- send ≠ observed ; STOP ≠ rollback ; finished ≠ conforme ; missing report ≠ no work.
