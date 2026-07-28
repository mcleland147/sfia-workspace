# 10 — T-A7 first bounded development lot (O3)

| Champ | Valeur |
|-------|--------|
| **Gate** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
| **Décision** | **O3** — `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date/heure/fuseau** | 2026-07-28 21:19:12 CEST (+0200) |
| **Parent commit** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **Delivery / cutover** | `NOT AUTHORIZED` |

## Scope exact

| Inclus | Exclu |
|--------|-------|
| MethodMode hold (évaluation) | Migration / schéma DB |
| F11.2 readiness read-only interne | Route HTTP / UI admin |
| F13.4 fondation historique RO | Vue runtime complète / ACL / IAM |
| Tests + docs pack | `method/**` · OPS1 fonctionnel · delivery |

## Architecture minimale

```
lib/d1/methodModeHold.ts                 → hold + gate selectMethodMode (product)
lib/d1/methodModeHold.types.ts           → types only
lib/d1/methodModeHold.store.ts           → override slot (internal; not barrel-exported)
lib/d1/methodModeHold.test-only.ts       → set/reset TEST ONLY (not barrel-exported)
lib/d1/operationalReadiness.ts           → F11.2 query (compose hold + history)
lib/d1/commands.ts                       → assert hold before transition
lib/platform/t-a7/boundedHistoryRead.ts  → F13.4 provider documentary/Git refs
```

Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.

## MethodMode hold

- Défaut **ACTIVE** avec raisons : B5 · R1 · R-M01 · HARD · T-A7 lot · F11 incomplete · F13 incomplete.
- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`), y compris `active=true` avec raisons vides.
- Overrides **TEST ONLY** via `methodModeHold.test-only.ts` — **non réexportés** par `lib/d1/index.ts`.
- Frontière statique : `__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts`.
- Anti-claim : hold ≠ blockers fermés · ≠ IAM.

## F11.2

- `queryOperationalReadiness()` snapshot frozen · `mutable/adminUi/writeCommands=false`.
- Expose hold, blockers, deps canoniques, migration NOT_STARTED, health SIMULATED, history summary.
- Verdict surface : `F11.2 READINESS FOUNDATION IMPLEMENTED — READ-ONLY — NO ADMIN UI — NOT CUTOVER COMPLETE`

## F13.4

- Provider documentary seed + unavailable provider.
- Max 50 items · immutable · `gitCanonical=true`.
- Verdict surface : `F13.4 READ-ONLY FOUNDATION IMPLEMENTED — GIT REMAINS CANONICAL — NO MIGRATION OR FINAL RUNTIME VIEW`

## Sécurité / données

- Pas de PII · métadonnées packs/Git seulement · pas d’élargissement path-policy · path-policy ≠ IAM.

## Tests

- hold · readiness · history · boundaries override · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
- **99 passed** (suite d1 + probes ciblés après harden) · typecheck OK · lint OK · build OK

## Limitations / blockers restants

- B5/R1/R-M01/HARD OPEN
- Pas d’API HTTP F11 · pas de vue finale F13 · pas de hold persistant DB
- P06–P11 non SATISFIED remplacement OA
- F03.3 reste partielle

## Rollback

`git revert` du commit lot 1.

## Anti-claims

- T-A7 borné ≠ fully open · lot ≠ delivery · hold ≠ fermeture réserves · F11/F13 fondations ≠ finales.

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD · F11.2 · F13.4 FOUNDATIONS — TESTS PASS — NO DELIVERY OR CUTOVER`
