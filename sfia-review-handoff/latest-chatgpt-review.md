# SFIA Studio Next — Review Pack Full — Cycle 8 / R05 Recovery Fix + RECETTE

**Date UTC :** 2026-11-17
**Mandat :** GO Morris — Correction DEV + tests + déploiement RECETTE conditionnel + plan retest Arnaud
**Typologie :** RUN / INC corrective · Profil Critical
**Exécutant :** Cursor · **Revue :** ChatGPT · **Décideur :** Morris
**Product versioning :** PATCH CANDIDATE · NO RELEASE · NO PRODUCT PUSH

---

## 1. Mandat consommé

Cycle intégré : reprise cognitive UNKNOWN, OBS SDK, tests, docs, candidat figé, bascule RECETTE si gates OK, plan Arnaud, handoff L3.
Hors mandat : LIVE OpenAI Cursor, migration, push/PR/merge, STABLE, clôture E05.

## 2. Git Truth Check initial

| Élément | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD départ | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| origin/main | `997d4c4e…` · ahead 30 |
| Dirty initial | `.tmp-sfia-review/chatgpt-review.md` seulement |
| RECETTE avant | `208aaa40` / BUILD `_xkrsw46qX4QKUC0bBU8i` / PID 48321 |

## 3. Sources et blobs

Diagnostic L3 `de481265` blob `07c536b1…` — verdict `R05 PROVIDER FAILURE IDENTIFIED — RECOVERY UX GAP CONFIRMED`.
ENV-01 / product-versioning / contrats CT-05 / thread-recovery / page reconcile / nora-adapter lus sur candidat local.

## 4. Cause de référence

Reprise : `reconcilePending` → D7 404 → POST même `clientTurnKey` → replay UNKNOWN → `shouldClearThreadPending` refusait UNKNOWN cognitif → boucle.
Fournisseur : `PROVIDER_ERROR` après contact (hors scope correctif causal).

## 5. Blast radius

Client pending UX, GET lecture tour, OBS meta allowlist, copy bannière. Pas D3 schéma, pas SDK version, pas D7 métier, pas migration, pas réparation rows R05-A/B.

## 6. Conception retenue

1. `isDurableCognitiveNoraTerminal` + `shouldClearThreadPending` : UNKNOWN/INTERRUPTED clear **si** `effectAttempted !== true`.
2. GET read-only `/api/preparations/.../turns/by-key/{clientTurnKey}` (`lookupDurableTurnByClientKey`) — vérité durable sans Nora.
3. `reconcilePending` : D7 by-key → durable D3 lookup → POST replay seulement si besoin ACK ; copy « non aboutie », pas de succès inventé ; draft conservé.
4. Hydrate au load : clear stale cognitive pending si lookup le prouve.
5. OBS : `extractProviderErrorDiagnostics` (name/code/http/transport/phase/stream/tools/cause_depth) allowlist — jamais message brut.

## 7–8. Diffs / fichiers

**Commit code :** `e224d6278a050bcfbd369c4008d94af504f81d44` · tree `509c459ca6a9be4a5f9ff28615e778aa6b344cc0`

Fichiers :
- `web/src/domains/pilotage/thread-recovery.ts`
- `web/src/domains/conversation/service.ts` (+ lookup)
- `web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts` (créé)
- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/components/figma/NoraConversation.tsx`
- `web/src/domains/conversation/nora-adapter.ts`
- `web/src/lib/observability.ts`
- tests unit/integration/e2e R05
- `construction/delivery-history.md`
- `web/docs/evidence/ensemble-05-travail-nora/plan-retest-r05-arnaud.md`

**Commit docs pin :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (plan SHA/BUILD) · tree `a0c89cef…`
Runtime RECETTE figé sur **code** `e224d627` (docs pin n’exige pas rebuild).

## 9. Tests exécutés

| Suite | Résultat |
|---|---|
| Vitest `ml3-b13-divergence` + `nora-adapter-corrective` | **36 PASS** (DB DEV `:5433`) |
| Vitest PG `ml2-turn-command.pg.test.ts` | **4 PASS** (incl. R05 lookup/replay) |
| Playwright `ensemble05-r05-cognitive-recovery.spec.ts` | **2 PASS** (hydrate + bouton ; FAKE `:3101`) |
| ESLint fichiers touchés | **0 error** (warnings préexistants) |
| `tsc --noEmit` | **32** erreurs globales préexistantes ; **0** sur sources touchées |
| `next build` | **PASS** (candidat + worktree RECETTE) |

## 10–11. Régressions métier / redaction

D7 UNKNOWN + `effectAttempted:true` → pending conservé (unit).
Redaction : secrets simulés absents de `extractProviderErrorDiagnostics` / `redactDeep` tests PASS.
Catégories `PROVIDER_*` existantes non régressées.

## 12. TypeScript

Baseline 32 (tests integration/unit hors correctif). Delta touched src : 0 après fix TDZ `toolCallsObserved`.

## 13. Build et SHA

| | |
|---|---|
| SHA runtime | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| Tip branche (docs) | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| BUILD_ID RECETTE | `MKmBUvdIXyydv_DpUTGZi` |

## 14. Gate déploiement §9

**PASS** — tous critères satisfaits ; aucun OpenAI ; aucune migration.

## 15–18. RECETTE avant/après

| | Avant | Après |
|---|---|---|
| SOURCE_SHA | `208aaa40` | `e224d627` |
| BUILD_ID | `_xkrsw46qX4QKUC0bBU8i` | `MKmBUvdIXyydv_DpUTGZi` |
| Worktree | `…-208aaa40` | `…-e224d627` (isolé) |
| PID next | 48321 | 95746 |
| Données | 22/117/526/263 | **identiques** ; R05 UNKNOWN rows **préservées** |

Sauvegarde plist : `/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-e224d627`
Rollback : `…/e224d627/ROLLBACK-TO-208aaa40.sh` · ancien WT intact.
Smoke non-LIVE : login 200 ; by-key route 401 sans session (présente) ; **pas** de reconcile sur données Morris ; **pas** d’appel OpenAI.

## 19. Fake / Real Qualification

| Item | |
|---|---|
| Correctif reprise | REAL (code+tests) |
| OBS diagnostics | REAL unit |
| Déploiement RECETTE | REAL runtime |
| LIVE OpenAI post-fix | **NOT EXECUTED** |
| Exception fournisseur R05 originale | **NON CORRIGÉE** (hors scope) |

## 20. Plan de recette Arnaud (complet)

Voir fichier candidat :
`projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/plan-retest-r05-arnaud.md`

**URL :** `http://127.0.0.1:3200` — locale à la machine hôte uniquement.
**SOURCE_SHA / BUILD_ID :** `e224d627…` / `MKmBUvdIXyydv_DpUTGZi`
Séquence 1–8 : relecture UNKNOWN → sortie reprise → brouillon → **GO REAL** composite → refresh → R01–R03 → réserve R04 → R06–R08.
Test 4 = GO REAL distinct. E05 non clos.

## 21. Réserves conservées

R01–R02 PASS ; R03 réserve richesse ; R04 lisibilité ; R05 reprise à retester ; R06–R08 ouverts ; Option A strict:false.

## 22. Décisions Morris suivantes

1. Transmettre plan Arnaud / exécuter retest 1–3 hors LIVE.
2. GO REAL distinct pour retest composite R05 (test 4) si souhaité.
3. Ne pas clôturer E05 / Gate C sur ce seul cycle.
4. Push produit / PR : non autorisés ici.

## 23. Verdict unique

### `R05 RECOVERY FIX VERIFIED — RECETTE DEPLOYED — USER RETEST READY`
