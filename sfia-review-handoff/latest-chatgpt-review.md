# SFIA Studio Next — Review Pack Full
## Ensemble 04 — Cutover RECETTE composition verticale

**Date** : 2026-11-16
**Cycle** : R5 / ML4D — RUN cutover contrôlé
**Mandat** : GO Morris explicite — candidat `351aea9607c5997f7343212a837dd13c0f1e4429`
**Verdict cycle** : **RECETTE CUTOVER — BLOCKED BEFORE MUTATION**

---

## 1. Mandat Morris

Mise à disposition RECETTE existante (`http://127.0.0.1:3200`) du candidat Ensemble 04 vertical layout.

- Aucune nouvelle conception.
- Aucune modification du code produit pendant le cutover.
- Acceptation visuelle Figma/runtime réservée à Morris après mise à disposition.
- Contrôles CP01 (compositeur + reprise) et CP02 (viewports) **obligatoires avant bascule**.

**Décision d’exécution** : STOP avant mutation — CP01 FAIL bloquant (correction candidat requise hors cycle).

---

## 2. Git Truth Check

| Item | Valeur |
|------|--------|
| Repository | `mcleland147/sfia-workspace` (workspace local) |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| Tree | `3bc6f4f3a9a861478a67c9a73a7b678e1a9e5f93` |
| Parent | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| Subject | `fix(next): align Travail vertical layout with Figma 652 composition` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Ascendance parent→HEAD | OK |
| Candidat poussé | Non (local) |
| Amend / rebase | Non |
| Staged produit | Aucun |
| Untracked produit | Aucun en fin de cycle |
| Working tree hors pack | `.tmp-sfia-review/chatgpt-review.md` (pack local) |

**Cohérence revue ChatGPT** : candidat identique au handoff `9f26edaaffc16cdee02d4030f194bdf69ee19524` / blob `00b692b0169c96320c6fae945700163468b50a60`.

**Aucune reconstruction depuis main. Aucune modification du SHA candidat.**

---

## 3. État RECETTE avant (inchangé — aucune mutation)

| Item | Valeur |
|------|--------|
| URL | `http://127.0.0.1:3200` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| ProgramArguments | `…/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/start-recette-ensemble04-a30e75c7.sh` |
| WorkingDirectory | `…/ensemble04-recette-build-a30e75c7/projects/sfia-studio-next/web` |
| Mode | Next.js production / `next start` |
| source_sha servi | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| BUILD_ID | `WUqfWdCB7T2rHzDvk-Hre` (HTML comment `WUqfWdCB7T2rHzDvk_Hre`) |
| HTTP `/login` | 200 |
| Mutation cutover | **Non effectuée** |

---

## 4. Contrôles préalables CP01 / CP02

Preuves locales (hors Git) : `.tmp-sfia-review/cutover-vertical-cp/`

### CP01 — Compositeur en état de reprise — **FAIL**

Scénario DEV déterministe (`STUDIO_FORCE_NORA_FIXTURE=1`, Pilote A) :

1. Projet créé via Sas fixture.
2. Pending injecté en `sessionStorage` (`sfia.thread.pending:<projectId>`).
3. Reload surface Travail — bandeau + bouton réconciliation visibles au DOM.

Mesures viewport **1680×970** (`cp01-geometry.json`) :

| Élément | Observation |
|---------|-------------|
| Composer | `max-height: 160px`, hauteur boîte 160, `overflow: visible` |
| Banner | top≈939, bottom≈1002.6 — déborde sous la boîte composer |
| Reconcile | top≈959, bottom≈1002.6 — **sous le bas viewport 970** |
| Shell ancestors | `project-space-page` / `studio-shell-*` / `html.studio-shell-lock` → **`overflow: hidden`** |
| Document scroll | `scrollHeight == clientHeight` — **pas de scroll page** |
| Chevauchement fil | Non |
| Clip CSS overflowY:hidden sur composer | Non (débordement visible puis clipé par le shell) |

**Probe** (`cp01-probe.json`) : sans `scrollIntoView` artificiel, le bouton de réconciliation s’étend hors du shell clipé ; le document n’est pas scrollable. Contrôle de reprise **partiellement / effectivement inaccessible** pour un utilisateur.

Captures : `cp01-pending-1680x970.png`, `cp01-probe.png`.

**Conclusion CP01** : l’état de reprise rend le contrôle de réconciliation inutilisable de façon fiable sous le layout vertical (`max-height: 160px` + banner dans le composer + shell lock).

→ **STOP — CANDIDATE CORRECTION REQUIRED**
→ **Aucune correction code dans ce cycle.**
→ **Bascule interdite.**

### CP02 — Viewport réduit — **FAIL partiel / non exonérant**

Mesures **sans** pending (baseline layout) — `cp02-only-results.json` :

| Viewport | Composer accessible | Rail visible | Bleed H | Note |
|----------|---------------------|--------------|---------|------|
| 1680×970 | PASS | PASS | 0 | OK |
| 1024×768 | PASS | PASS | 0 | OK |
| 390×844 | Composer PASS | **railVisible=false** | 0 | Navigation rail non détectée — **FAIL critère navigation** |
| 1280×600 | PASS | PASS | 0 | OK |

Captures : `cp02-only-*.png`.

CP02 n’a **pas** été rejoué en état pending (déjà bloqué par CP01). Même en baseline, le viewport étroit ne satisfait pas le critère « navigation consultable » sous le test rail.

**SKIP non applicable** : preuves suffisantes pour qualifier le risque ; cutover déjà interdit par CP01.

---

## 5. Sauvegarde / build / cutover

| Étape | Statut |
|-------|--------|
| Sauvegarde DB RECETTE | **Non exécutée** (STOP avant mutation) |
| Worktree build `351aea96` | **Non créé** |
| Build production | **Non exécuté** |
| Modification LaunchAgent | **Non** |
| Redémarrage :3200 | **Non** |
| Rollback | Non requis — état pré-bascule conservé |

Rollback candidat toujours disponible si une future bascule échoue :

- SHA `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- BUILD_ID `WUqfWdCB7T2rHzDvk-Hre`
- Worktree `…-ensemble04-recette-build-a30e75c7`

---

## 6. Smoke SC01–SC12

**Non exécutés** — aucune bascule. Qualifiés **SKIP** (cutover non réalisé), non assimilables à PASS.

---

## 7. Manifeste ENV-01 (état final cycle)

```text
date:                 2026-11-16 (Europe/Paris)
environnement:        RECETTE ML4D UX004
url:                  http://127.0.0.1:3200
service:              com.sfia.studio.next.recette.ml4d-ux004
repository:           mcleland147/sfia-workspace
branche_source_dev:   feat/next-ml4d-project-space-20261116
candidat_autorise:    351aea9607c5997f7343212a837dd13c0f1e4429
source_sha_servi:     a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
base_main_sha:        997d4c4e8204993de7107552898c8cc08cd3b0ed
build_id_servi:       WUqfWdCB7T2rHzDvk-Hre
version_technique:    0.0.0-dev
schema_revision:      inchangée (aucune migration ce cycle)
données:              préservées (aucune mutation service/DB)
qualité_build_servi:  production next start (build antérieur)
CP01:                 FAIL
CP02:                 FAIL (narrow navigation) + desktop/mid/short baseline OK sans pending
smoke:                SKIP (pas de cutover)
sauvegarde_cycle:     N/A — stop avant mutation
rollback_path:        worktree a30e75c7 / BUILD WUqfWdCB7T2rHzDvk-Hre (toujours servi)
décision_morris:      GO cutover reçu ; exécution STOPPÉE sur CP01
statut_livraison:     NOT DEPLOYED — BLOCKED BEFORE MUTATION
NO RELEASE / NO TAG / NO STABLE / NO ADOPTED
```

---

## 8. Réserves connues (conservées)

- TypeScript workspace : 32 erreurs parent UX-005.
- Résultats et preuves → publication : KNOWN GAP.
- Glyphes Unicode : finition à vérifier par Morris.
- Comportements avancés Nora : Ensemble 05.
- OAuth personnel requis pour certaines preuves RECETTE.
- Figma DEV ≠ acceptation RECETTE.
- **Nouvelle réserve bloquante** : compositeur `max-height: 160px` incompatible avec bandeau de reprise (overflow sous shell `overflow:hidden`, contrôles de réconciliation hors zone utile).

---

## 9. Limites Fake / Real

- CP01/CP02 exécutés en **DEV** avec fixture Nora / login DEV — pas de message Nora LIVE.
- Aucune preuve OAuth Morris RECETTE ce cycle.
- Mesures DEV ne valident pas la RECETTE visuelle Morris.

---

## 10. Incidents

Aucun incident runtime RECETTE. Service `:3200` reste sur `a30e75c7` / `WUqfWdCB7T2rHzDvk-Hre`.

---

## 11. Verdict

```text
RECETTE CUTOVER — BLOCKED BEFORE MUTATION

Cause: CP01 FAIL — reprise compositeur (reconcile hors zone utile / shell overflow:hidden)
Secondaire: CP02 narrow — rail non détecté à ~390px

Candidat 351aea96 NON déployé.
RECETTE inchangée: a30e75c7 / WUqfWdCB7T2rHzDvk-Hre @ :3200
```

### Prochaines décisions Morris

1. Autoriser un cycle **correction candidat** (hors cutover) pour CP01 : géométrie reprise + `max-height` composer (sans nouvelle conception hors cadre Figma).
2. Revalider CP01/CP02 sur le SHA corrigé.
3. Nouveau GO cutover RECETTE uniquement après PASS des deux contrôles.
4. Réception visuelle Figma 652:* inchangée — toujours après mise à disposition réussie.

```text
NO PROJECT PUSH
NO PR
NO MERGE
NO STABLE PROMOTION
GATE C OPEN
ML5 NOT STARTED
NO ADOPTED
```

---

## 12. Review Handoff

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- (complété après publication L3)
