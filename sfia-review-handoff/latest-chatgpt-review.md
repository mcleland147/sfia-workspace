# SFIA Studio Next — ML4C Navigation Fix + Documentary Closure PR #678 — Review Pack FULL

**Date / heure :** 2026-11-15 ~20:00 CET
**Mandat Morris :** GO correctif navigation + tests + sync doc + push FF PR #678 + CI + readiness (15/11/2026)
**Type :** INC / PATCH · STANDARD · **NO RELEASE**
**Review Pack :** FULL — mono-cycle
**Handoff :** required / publish-in-cycle

---

## 0. Verdict

**ML4C NAVIGATION FIXED — PR #678 READY FOR MORRIS MERGE GO**

| Condition | État |
| --- | --- |
| Correctif intent surface | **implémenté** |
| Preuve discriminante concurrence | **PASS** (e2e + unit) |
| Oracle G4 B1–B4 inchangé | **PASS** |
| Non-régression locale | tsc/build/unit368/PG471/pw30 **PASS** |
| Publié FF sur `docs/next-ml4c-closure-20261115` | **oui** |
| PR #678 titre/corps actualisés | **oui** |
| CI HEAD final | **SUCCESS** [43749279172](https://github.com/mcleland147/sfia-workspace/actions/runs/43749279172) |
| Required gates | Next + Studio **PASS** |
| MERGEABLE / CLEAN | **oui** |
| Merge effectué | **NON** (GO Morris) |

---

## 1. GO Morris consommé

Autorisé et réalisé dans ce cycle : investigation, code navigation borné, tests, itérations locales, as-built + delivery-history, commits, push FF #678, update PR, CI, corrections WS docs pour `git diff --check`, pack FULL + handoff L3.

**Non réalisé :** merge #678 · push main · force/rebase · STABLE · ML4D · mutation RECETTE · altération D2 métier.

---

## 2. Git Truth Check

### Initial
| Champ | Valeur |
| --- | --- |
| `origin/main` | `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| PR #678 HEAD | `968ea252fb46732d0862e3809390b1a36e6f991b` |
| Tree web | `f2427adcd31b044115f85cdc48cfb6dd157d9551` (= cand ML4C) |
| Worktree isolé | `/Users/morris/Projects/sfia-workspace-next-ml4c-closure-678-navfix` |

### Final
| Champ | Valeur |
| --- | --- |
| Branche | `docs/next-ml4c-closure-20261115` |
| HEAD distant | `69aa8b1d477fd3add7ca038815c7157b9b467f7e` |
| Tree repo | `59bdbc4fe9902eeb7f825c1183e4b06cf92edcb6` |
| Tree web | `787537cb344cc2c13dc3cd20c43e8572d52249af` |
| Parents tip | `69aa8b1d` ← `1a657684` ← `968ea252` ← … ← `main@05e71a71` |
| Produit WT | `fix/…@11f7077e` restauré (commit erroné local non poussé, rejoué via `am` sur docs) |

---

## 3. Diagnostic et causalité

**Cause prouvée :** `StudioShell` naviguait via `<Link>` sans poser d’intention ; `ProjectPage.load()` pouvait `router.replace(?surface=travail)` si l’URL n’avait pas encore de surface valide, écrasant Pilotage.

**Preuve discriminante :** e2e retarde le GET `/api/projects/{id}`, clique `nav-pilotage`, puis libère le GET → URL reste `surface=pilotage`.

---

## 4. Design du correctif

1. Intent **transitoire** unique dans `studio-rail.ts` : `note` / `peek` / `clear` + `resolveProjectLoadSurface`.
2. `StudioShell` : `onClick` sur Links surface (desktop, mobile, accès directs).
3. `selectSurface` : note la même intent.
4. `load()` : utilise `resolveProjectLoadSurface` ; normalise vers la surface **effective** (pending ou URL), jamais un downgrade silencieux vers travail si pending=pilotage.
5. Pas de second store durable, pas de timeout, oracle non assoupli.

---

## 5. Fichiers touchés (exhaustif)

| Fichier | Action |
| --- | --- |
| `web/src/components/shell/studio-rail.ts` | intent + resolve |
| `web/src/components/shell/StudioShell.tsx` | onClick note intent |
| `web/src/app/projects/[projectId]/page.tsx` | load/selectSurface wire |
| `web/tests/unit/studio-rail.test.ts` | tests NAV |
| `web/tests/e2e/project-surface-nav-intent.spec.ts` | **créé** |
| `construction/.../as-built-g4-correctifs-b1-b4-2026-11-08.md` | addendum 2026-11-15 |
| `construction/delivery-history.md` | DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT |
| `construction/.../cadrage-correctif-continuite-pilote-nora-documents.md` | strip trailing WS only |
| `construction/.../journal-recette-utilisateur-ml4c.md` | strip trailing WS only |

### Contenu créé — `project-surface-nav-intent.spec.ts`

Deux tests Playwright : (1) GET projet gate + clic pilotage ; (2) switches rapides travail/pilotage/journal/document.

### Diff utile (résumé)

**studio-rail.ts** — ajout ~48 lignes : module intent + `resolveProjectLoadSurface({ rawSurface, pendingIntent })`.

**StudioShell.tsx** — `onClick` → `noteProjectSurfaceNavIntent(parseStudioSurface(item.key))` sur nav Links.

**page.tsx** — `selectSurface` note intent ; `load()` remplace la logique ad hoc par `resolveProjectLoadSurface` ; clear intent quand URL catch-up.

---

## 6. Invariants / blast radius

Préservés : NAV-01…10 · push/replace · deep-link · documentId/UI doc · reprise · rail F1 widths · pas d’autorité D1–D9.
Blast : surfaces projet au premier load ; rail global désormais aligné sur chrome.

---

## 7. Tests exacts

| Suite | Commande / contexte | Résultat |
| --- | --- | --- |
| tsc | `npx tsc --noEmit` | PASS |
| ESLint | `npx next lint` | warnings préexistants |
| Build | `npx next build` | PASS |
| Unit | `vitest run tests/unit` | **368 PASS** |
| PG | `vitest run tests/integration` | **471 PASS** |
| PW ciblé | g4-b1-b4 + nav-intent | **3 PASS** |
| PW all | `playwright test` | **30 PASS** |
| CI PW | run 43749279172 | **30 passed** |

Preuve concurrence : test « delayed project load » PASS localement et inclus dans les 30 CI.

---

## 8. Trees web

| | SHA |
| --- | --- |
| ML4C initial (accepté) | `f2427adcd31b044115f85cdc48cfb6dd157d9551` |
| Correctif | `787537cb344cc2c13dc3cd20c43e8572d52249af` |

Diff attendu (navigation + tests).

---

## 9. Commits distants PR #678

1. `d7f7cb70` / `968ea252` — docs clôture (préexistants)
2. `1a657684` — `fix(next): preserve project surface intent across async load`
3. `69aa8b1d` — `chore(next): strip trailing whitespace in ML4C closure docs`

---

## 10. PR #678 avant / après

| | Avant | Après |
| --- | --- | --- |
| Titre | docs(next): close ML4C… | **fix(next): stabilize project navigation and finalize ML4C closure** |
| HEAD | `968ea252` | `69aa8b1d` |
| Périmètre | docs-only | correctif + docs |
| CI | FAIL Playwright / puis WS | **SUCCESS** |
| mergeable | — | **MERGEABLE / CLEAN** |

URL : https://github.com/mcleland147/sfia-workspace/pull/678

---

## 11. CI GitHub (HEAD final)

| Run | SHA | Conclusion |
| --- | --- | --- |
| Next [43749279172](https://github.com/mcleland147/sfia-workspace/actions/runs/43749279172) | `69aa8b1d` | **success** (Detect/Build/Required Gate) |
| Studio [43749279165](https://github.com/mcleland147/sfia-workspace/actions/runs/43749279165) | `69aa8b1d` | **success** (Required Gate) |
| Historique rouge | `968ea252` / `1a657684` | incident nav ; puis WS — corrigés |

---

## 12. Réserves / limites

Réserves ML4C historiques **ouvertes** (S05-06/08, TTL, ENV-R09, Git REAL, LIVE).
Preuve FAKE/BROWSER ; LIVE/REAL hors scope.
D2 documentaire conditionnelle au merge + relecture distante.
ML4C **not** CLOSED ; ML4D **NOT STARTED** ; Gate C **OPEN** ; STABLE **NOT AVAILABLE**.

---

## 13. ENV / versioning

Lane DEV / E2E `:3101` / PG isolé. RECETTE non mutée. NO RELEASE. delivery-history entry ajoutée.

---

## 14. Gate Morris

**GO MERGE PR #678 — REQUESTED**

Cursor **ne merge pas**.

---

## 15. Review Handoff L3

| Champ | Valeur |
| --- | --- |
| Message | `docs(review-handoff): ML4C navigation fix PR678 ready for merge go` |
| Worktree | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` |

*(SHAs après publish.)*

---

## 16. Verdict final

**ML4C NAVIGATION FIXED — PR #678 READY FOR MORRIS MERGE GO**
