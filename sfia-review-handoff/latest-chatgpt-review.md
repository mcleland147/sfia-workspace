# Review Pack FULL — Ensemble 04 Second Cutover RECETTE (Visual Fidelity)

- **Date** : 2026-11-16 22:10 UTC
- **Contrat** : R5 / ML4D — Ensemble 04 — SECOND CUTOVER RECETTE — FIDÉLITÉ VISUELLE
- **GO Morris** : EXPLICITE ET ACCORDÉ
- **Typologie** : RUN — déploiement candidat validé
- **Profil SFIA** : Standard v2.6
- **Review Handoff** : required / publish-in-cycle
- **Code produit** : **AUCUNE MODIFICATION** (aucun commit produit)

## Verdict

**RECETTE ENSEMBLE 04 — VISUAL FIDELITY CANDIDATE DEPLOYED AND SMOKE VERIFIED**

READY FOR MORRIS VISUAL RECETTE

Avec réserves : parcours privés (projets/sas/Travail réel) = **USER RECETTE REQUIRED** (session OAuth Morris).
Les contrôles non destructifs publics sont PASS. SKIP/USER_RECETTE_REQUIRED ≠ PASS.

NO PROJECT PUSH · NO PR · NO MERGE · NO STABLE · GATE C OPEN · ML5 NOT STARTED · NO ADOPTED

## 1. Mandat

Morris autorise la bascule de la RECETTE existante `:3200` vers le candidat correctif de fidélité visuelle :

- SHA autorisé : `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- Parent : `20fb41baa534b5a802a275b6944fc267ccaa2192`
- Validation technique ChatGPT acceptée avec réserves
- Validation visuelle définitive : **exclusivement Morris**

## 2. Git Truth Check

### Initial / Final (identique — pas de commit produit)

| Champ | Valeur |
| --- | --- |
| Worktree produit | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| Parent | `20fb41baa534b5a802a275b6944fc267ccaa2192` |
| Tree candidat | confirmé localement (commit object présent) |
| Remote origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Candidat poussé | **NON** |
| Status | seul `.tmp-sfia-review/chatgpt-review.md` modifié (pack local) |
| Amend / rebase | **non** |
| Ancêtre UX-005 | `bd8e1672` (ligne conservée) |
| Diff 20fb41ba..a30e75c7 migrations | **aucune** (pas de fichier migrat/schema/sql) |

### Worktrees RECETTE

- Ancien (rollback) : `…-ensemble04-recette-build-20fb41ba` @ `20fb41ba` / BUILD `Bdn6zx0xBoavYTjWmiO4x` — **conservé**
- Nouveau (servi) : `…-ensemble04-recette-build-a30e75c7` @ `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre`
- Handoff : `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ `sfia/review-handoff`

## 3. Sources consultées

- Templates / operating model / guardrails SFIA (refs Git applicables)
- `governance/environnements-recette-et-promotions.md` (ENV-01)
- `governance/product-versioning.md` (0.0.0-dev / NO RELEASE)
- Review Handoff correction : commit `93f5bec0` / blob `3204c29d`
- Plan cutover : `web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md` (réutilisé, adapté au SHA a30e75c7)

## 4. RECETTE avant → après

| | Avant | Après |
| --- | --- | --- |
| URL | http://127.0.0.1:3200 | **identique** |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` | **identique (réutilisé)** |
| SHA | `20fb41ba…` | `a30e75c7…` |
| BUILD_ID | `Bdn6zx0xBoavYTjWmiO4x` | `WUqfWdCB7T2rHzDvk-Hre` |
| Mode | next start production | next start production |
| Base PG | `sfia_next_recette_ml4` @ `127.0.0.1:5434` | **inchangée** |
| Tables public | 33 | 33 |

## 5. Préconditions / sauvegarde / rollback

### Sauvegarde (hors Git, droits restrictifs)

Répertoire : `/Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261116-pre-a30e75c7/`

| Artefact | Preuve non secrète |
| --- | --- |
| Dump DB custom | `sfia_next_recette_ml4_pre_a30e75c7.dump` (526036 bytes) |
| SHA-256 | `d936d3f998775b22a378c8b3371e86519355ba566467167271a48b5aedd5deff  /Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261116-pre-a30e75c7/sfia_next_recette_ml4_pre_a30e75c7.dump` |
| TOC | `dump-toc.txt` (250 lignes) |
| Tables | 33 — liste `public-tables.txt` |
| Plist pré-cutover | `com.sfia.studio.next.recette.ml4d-ux004.plist.pre-*` |
| Start script 20fb41ba | copié |
| Identité ancienne | `old-recette-identity.txt` |
| Env keys only | `env-key-inventory-before.txt` (24 clés, **sans valeurs**) |

### Rollback applicatif (conservé)

```
# Rollback applicatif — Ensemble 04 visual fidelity cutover

Target restore:
- SHA: 20fb41baa534b5a802a275b6944fc267ccaa2192
- BUILD_ID: Bdn6zx0xBoavYTjWmiO4x
- Worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba
- Start: .../start-recette-ensemble04-20fb41ba.sh
- LaunchAgent: com.sfia.studio.next.recette.ml4d-ux004

Procedure: unload LaunchAgent → restore plist ProgramArguments/WorkingDirectory to 20fb41ba worktree → load/kickstart → verify SHA/BUILD on :3200.
DB restore is NOT automatic; dump is offline evidence only.

```

Identité rollback :
```
sha=20fb41baa534b5a802a275b6944fc267ccaa2192
build_id=Bdn6zx0xBoavYTjWmiO4x
url=http://127.0.0.1:3200
launchagent=com.sfia.studio.next.recette.ml4d-ux004
worktree=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba
captured_at=2026-11-16T22:04:02Z

```

**Aucune restauration DB dans la base active.** Dump = preuve offline.

### Compatibilité

Diff candidat = présentation UI + preuves + delivery-history — **aucune migration**.

## 6. Build immuable

- Worktree : `git worktree add --detach …-a30e75c7 a30e75c7`
- `npm ci` (deps complètes, hors `NODE_ENV=production` pour install)
- `npx next build` → **PASS**
- BUILD_ID produit : `WUqfWdCB7T2rHzDvk-Hre`
- Tree source worktree : propre (pas de patch code)

## 7. Cutover exécuté

Chrono :
```
2026-11-16T23:06:26+01:00 PRECHECK old build still served
before_build=Bdn6zx0xBoavYTjWmiO4x
2026-11-16T23:06:26+01:00 bootout com.sfia.studio.next.recette.ml4d-ux004
2026-11-16T23:06:28+01:00 port3200_listeners=0
2026-11-16T23:06:28+01:00 bootstrap new plist
2026-11-16T23:06:39+01:00 post_http=200
2026-11-16T23:09:16+01:00 CUTOVER_COMPLETE
served_sha=a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
served_build=WUqfWdCB7T2rHzDvk-Hre
rollback_sha=20fb41baa534b5a802a275b6944fc267ccaa2192
rollback_build=Bdn6zx0xBoavYTjWmiO4x
url=http://127.0.0.1:3200
launchagent=com.sfia.studio.next.recette.ml4d-ux004

```

### Start script servi (complet)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
# Do not force Nora fixture — LIVE path for Morris séances
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
exec npx next start -H 127.0.0.1 -p 3200

```

### LaunchAgent plist actuelle (complet)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.sfia.studio.next.recette.ml4d-ux004</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/start-recette-ensemble04-a30e75c7.sh</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/projects/sfia-studio-next/web</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/launchd.out.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/launchd.err.log</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>

```

### Vérifications runtime

- Un seul listener `:3200` (node)
- HTTP 200 `/login`
- HTML contient BUILD `WUqfWdCB7T2rHzDvk-Hre` (commentaire Next utilise `_`)
- Process : `SFIA_SOURCE_SHA=a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- `NODE_ENV=production` via start script
- Nora fixture **non** forcée
- Ancien worktree + BUILD `Bdn6zx0x…` toujours présents

## 8. Smoke SC01–SC12

Niveau de preuve : **REAL runtime RECETTE** pour contrôles publics ; **USER RECETTE REQUIRED** pour données privées Morris (pas de PASS via login DEV).

```
SC01: PASS (login + BUILD_ID + static CSS 200)
SC02: PASS (portfolio shell rail 246; DEV test login available — not Morris OAuth)
SC03: USER_RECETTE_REQUIRED (no prep under DEV pilot)
SC04: USER_RECETTE_REQUIRED (no project under DEV pilot)
SC05: PASS_rail_unique_portfolio_no_deep_nav | USER_RECETTE_REQUIRED full nav on real project
SC06: USER_RECETTE_REQUIRED (Travail/Nora private)
SC07: USER_RECETTE_REQUIRED
SC08: USER_RECETTE_REQUIRED (inspector)
SC09: PASS
SC10: PASS rail_w=246 | USER_RECETTE_REQUIRED conversation/aside/send on real Travail
SC11: PASS (public tables=33 unchanged vs pre-cutover; dump present; portfolio reachable)
SC12: PASS build=WUqfWdCB7T2rHzDvk-Hre sha_expected=a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6 url=http://127.0.0.1:3200 | LaunchAgent points to a30e75c7 worktree; SFIA_SOURCE_SHA in process

```

Détail JSON :
```json
{
  "at": "2026-11-16T22:08:53.860Z",
  "build_id": "WUqfWdCB7T2rHzDvk-Hre",
  "source_sha": "a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6",
  "url": "http://127.0.0.1:3200",
  "results": {
    "SC01": "PASS (login + BUILD_ID + static CSS 200)",
    "SC02": "PASS (portfolio shell rail 246; DEV test login available \u2014 not Morris OAuth)",
    "SC03": "USER_RECETTE_REQUIRED (no prep under DEV pilot)",
    "SC04": "USER_RECETTE_REQUIRED (no project under DEV pilot)",
    "SC05": "PASS_rail_unique_portfolio_no_deep_nav | USER_RECETTE_REQUIRED full nav on real project",
    "SC06": "USER_RECETTE_REQUIRED (Travail/Nora private)",
    "SC07": "USER_RECETTE_REQUIRED",
    "SC08": "USER_RECETTE_REQUIRED (inspector)",
    "SC09": "PASS",
    "SC10": "PASS rail_w=246 | USER_RECETTE_REQUIRED conversation/aside/send on real Travail",
    "SC11": "PASS (public tables=33 unchanged vs pre-cutover; dump present; portfolio reachable)",
    "SC12": "PASS build=WUqfWdCB7T2rHzDvk-Hre sha_expected=a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6 url=http://127.0.0.1:3200 | LaunchAgent points to a30e75c7 worktree; SFIA_SOURCE_SHA in process"
  },
  "notes": [
    "SC02 used DEV test login available on RECETTE lane",
    "No project visible under DEV test login \u2014 private Morris projects USER RECETTE",
    "SKIP/USER_RECETTE_REQUIRED \u2260 PASS",
    "Non-destructive public checks executed; private Morris data not claimed via DEV login"
  ]
}
```

### Synthèse

| ID | Résultat |
| --- | --- |
| SC01 Connexion/build | **PASS** |
| SC02 Portefeuille shell | **PASS** (login DEV test ≠ OAuth Morris) |
| SC03 Sas | **USER_RECETTE_REQUIRED** |
| SC04 Espace actif réel | **USER_RECETTE_REQUIRED** |
| SC05 Rail complet projet | partiel PASS (unavailable) + **USER_RECETTE_REQUIRED** |
| SC06 Travail/Nora | **USER_RECETTE_REQUIRED** |
| SC07 Navigation surfaces | **USER_RECETTE_REQUIRED** |
| SC08 Inspecteur | **USER_RECETTE_REQUIRED** |
| SC09 Indisponible | **PASS** |
| SC10 Géométrie | rail 246 PASS ; conversation/aside/send **USER_RECETTE_REQUIRED** |
| SC11 Données | **PASS** (33 tables, dump, portfolio) |
| SC12 Identité | **PASS** |

Aucun message Nora LIVE envoyé. Aucune publication Git.

## 9. Manifeste ENV-01

```yaml
lane: RECETTE
repository: mcleland147/sfia-workspace
project_path: projects/sfia-studio-next/
source_branch: feat/next-ml4d-project-space-20261116
source_sha: a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
parent_sha: 20fb41baa534b5a802a275b6944fc267ccaa2192
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
build_id: WUqfWdCB7T2rHzDvk-Hre
previous_build_id: Bdn6zx0xBoavYTjWmiO4x
address: http://127.0.0.1:3200
launch_agent: com.sfia.studio.next.recette.ml4d-ux004
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7
mode: production (next start)
nora_fixture: not forced (LIVE path)
schema_revision: unchanged (no migration files in candidate diff; public tables=33)
reference_dataset: sfia_next_recette_ml4 @ 127.0.0.1:5434 (docker sfia-next-recette-pg)
capabilities:
  - Ensemble 04 project space shell + visual fidelity correction
  - Ensembles 01-03 preserved
known_gaps:
  - R01 TypeScript workspace 32 parent fixture errors
  - R02 Résultats et preuves → publication KNOWN GAP
  - R03 Unicode rail icons
  - R04 Ensemble 05 not started
  - R05 OAuth Morris required for private project smoke
  - R06 DEV captures ≠ Morris visual acceptance
  - R07 cookie isolation across localhost ports not guaranteed
quality_evidence:
  - candidate review handoff 93f5bec0 / blob 3204c29d
  - next build PASS in immutable worktree
  - smoke-merged.json (PASS / USER_RECETTE_REQUIRED)
rollback:
  sha: 20fb41baa534b5a802a275b6944fc267ccaa2192
  build_id: Bdn6zx0xBoavYTjWmiO4x
  worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba
  start_script: start-recette-ensemble04-20fb41ba.sh
cutover_at: 2026-11-16T23:06:28+01:00
morris_decision: GO EXPLICITE second cutover fidelity
recette_status: DEPLOYED_SMOKE_VERIFIED_WITH_USER_RECETTE_GAPS
product_version: 0.0.0-dev
stable: NOT AVAILABLE
release: NO RELEASE

```

## 10. Réserves maintenues (R01–R07)

Inchangées : tsc 32 parent ; mapping Résultats/preuves ; icônes Unicode ; Ensemble 05 ; OAuth Morris ; preuves DEV ≠ acceptation ; cookies localhost.

## 11. Contenu / diffs

**Aucun diff code produit** dans ce cycle.
Fichiers opérationnels créés hors Git (backup + worktree build + LaunchAgent).

Commandes clés (sans secrets) :
1. `git worktree add --detach …-a30e75c7 a30e75c7`
2. `npm ci` + `npx next build` dans worktree
3. `docker exec sfia-next-recette-pg pg_dump …` → backup
4. `launchctl bootout` → rewrite plist → `bootstrap` / `kickstart`
5. Playwright smoke public + qualification USER_RECETTE

## 12. État final

- RECETTE : **déployée** sur `a30e75c7` / `WUqfWdCB7T2rHzDvk-Hre`
- URL : http://127.0.0.1:3200
- Rollback : prêt vers `20fb41ba` / `Bdn6zx0xBoavYTjWmiO4x`
- Produit local HEAD : `a30e75c7` (inchangé ce cycle)
- Push projet : **aucun**

## 13. Instructions Morris

1. Ouvrir http://127.0.0.1:3200 avec **session OAuth personnelle**.
2. Revue visuelle Figma 652:* ↔ application (rail 2 lignes, icônes, conversation dominante, flèche, inspecteur, sticky header).
3. Parcourir un projet réel (Travail / Projet / Journal / Trajectoire).
4. Décider acceptation visuelle — **seule autorité**.
5. Ne pas traiter ce cutover comme ADOPTED / STABLE.

## 14. Review Handoff

- À publier via `scripts/sfia/publish-review-handoff.sh`
- Branche exclusive `sfia/review-handoff`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Commit/blob : _(après publish)_
