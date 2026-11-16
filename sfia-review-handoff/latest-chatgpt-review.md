# SFIA Review Pack — ML4D UX-003 INCIDENT RECETTE (ancienne page login)

Date/heure : 2026-11-16 06:51:32 +0100 (2026-11-16T05:51:32Z)
Cycle : Delivery projet — incident environnement RECETTE (pas de changement code)
GO Morris : diagnostic + rétablissement RECETTE UX-003 déjà autorisé ; pas de push projet / PR / merge / STABLE
Profil : Standard · Review Pack : Full · Handoff : publish-in-cycle

## 0. Verdict exécutif

**READY WITH RESERVES — MORRIS UX RECETTE** (environnement rétabli)

Cause racine **prouvée** : le port `127.0.0.1:3200` était occupé par le LaunchAgent KeepAlive
`com.sfia.studio.next.recette.ml4` servant le candidat ML4C `11f7077e` (écran « Connexion Studio » + Pilote A/B),
et non le candidat UX-003 `a77a3a2b` / build `vYeNRRzvLN03N73wmcKkR`.

Aucune modification de code produit. Correction d’environnement uniquement.

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| Worktree DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `feat/next-ml4d-ux003-unified-entry-20261116` |
| HEAD candidat | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Ahead | 2 commits locaux (non poussés) |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9` (detached `a77a3a2bf7b942038d771fdcdd2e7a6410330784`) |
| Dirty DEV | `.tmp-sfia-review/chatgpt-review.md` uniquement (pack) |

## 2. Sources lues / applicables

- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` (ENV-01)
- Contrat candidat UX-003 déjà figé (cycle précédent)
- Processus SFIA v2.6 handoff L3
- LaunchAgents locaux `~/Library/LaunchAgents/com.sfia.studio.next.recette*.plist`
- Aucune réouverture Figma

## 3. Diagnostic avant/après

### Avant (prouvé)

| Élément | Observation |
| --- | --- |
| Listener :3200 | `next-server` PID connus (ex. 19789 puis 32348) |
| cwd | `.../sfia-workspace-next-ml4c-recette-build-11f7077e/projects/sfia-studio-next/web` |
| SFIA_SOURCE_SHA (process) | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| HTML `/login` | `Connexion Studio` ; Pilote A/B ; taille 7130 ; build comment `0mTcR_VTrO_j6sIlW9Wdb` |
| Superviseur | LaunchAgent **`com.sfia.studio.next.recette.ml4`** KeepAlive=true → `start-recette.sh` ML4C |
| Tentative nohup UX-003 | Écrasée en secondes par KeepAlive ML4 (runs≥10, signal Killed:9) |

### Après (prouvé)

| Élément | Observation |
| --- | --- |
| Action | `launchctl bootout` de `com.sfia.studio.next.recette.ml4` (plist + worktree ML4C **préservés**) |
| Agent actif | `com.sfia.studio.next.recette.ml4d-ux003` → `start-recette-ux003.sh` |
| Listener PID | `34237` |
| cwd | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9/projects/sfia-studio-next/web` |
| candidate_sha | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` |
| build_id | `vYeNRRzvLN03N73wmcKkR` |
| HTML head | `<!DOCTYPE html><!--vYeNRRzvLN03N73wmcKkR--><html lang="fr"><head><meta charSet="utf-8"/><m` |
| Markers | `studio-entry`/`unified-studio` présents ; `Connexion Studio`=0 ; `Pilote`=0 ; pas de rail |
| Navigateur | « Bienvenue dans Studio » / « Vos projets avancent. Avec Nora. » / CTA GitHub ; session expirée « Retrouvons votre session » |

## 4. Preuves

Répertoire : `.tmp-sfia-review/evidence-recette-restore-20261116/`

- `runtime-identity.txt`
- `login.html` / `login-session-expired.html` (comment HTML `<!--vYeNRRzvLN03N73wmcKkR-->`)
- `ux003-recette-restore-desktop-login.png`
- `ux003-recette-restore-session-expired.png`

DEV `:3100` reste un `next dev` distinct (`sfia-workspace-next-semantic-intent-20261112`) — ne pas confondre avec RECETTE.

## 5. Manifeste RECETTE (état rétabli)

```yaml
lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-ux003-unified-entry-20261116
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
candidate_sha: a77a3a2bf7b942038d771fdcdd2e7a6410330784
build_id: vYeNRRzvLN03N73wmcKkR
served_address: http://127.0.0.1:3200
login_url: http://127.0.0.1:3200/login
session_expired_url: http://127.0.0.1:3200/login?reason=session_expired
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9
start_script: start-recette-ux003.sh
launch_agent: com.sfia.studio.next.recette.ml4d-ux003
product_version: NOT AVAILABLE
status: NO RELEASE
oauth: CONFIGURED — LIVE callback non exigé ici
test_login: gated (STUDIO_DEV_TEST_LOGIN selon env recette)
decision_recette: EN ATTENTE MORRIS
verified_at_utc: 2026-11-16T05:51:32Z
```

## 6. Restauration du précédent candidat ML4C

Worktree intact : `/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e`

```bash
launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux003
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
launchctl kickstart -k gui/$(id -u)/com.sfia.studio.next.recette.ml4
```

Voir aussi `RESTORE-PREVIOUS-ML4C-RECETTE.txt` dans le worktree UX-003 RECETTE.

## 7. Réserves

1. Collision cookies multi-ports sur `127.0.0.1` (ENV-01 réserve A) — profil navigateur dédié.
2. Plusieurs LaunchAgents historiques RECETTE existent ; seul UX-003 est chargé maintenant sur :3200.
3. Cache navigateur possible si un onglet a figé l’ancien HTML — hard refresh / profil dédié recommandé.
4. OAuth LIVE callback non rejoué dans cet incident.
5. Aucun push projet ; candidat toujours local-only.

## 8. Fake/Real Qualification

| Affirmation | Qualif |
| --- | --- |
| Ancien HTML ML4C servi sur :3200 | **REAL** (cwd + SHA process + hash HTML = login.html ML4C) |
| KeepAlive LaunchAgent ml4 | **REAL** (`launchctl print`) |
| UX-003 rétabli | **REAL** (cwd + BUILD_ID HTML + screenshots navigateur) |
| Modification code | **NONE** |
| OAuth LIVE | **NOT CLAIMED** |

## 9. Verdict A–E

### A. Corrections UX-003 code
**N/A ce cycle** (incident env) — candidat code inchangé `a77a3a2bf7b942038d771fdcdd2e7a6410330784`

### B. Candidat
SHA `a77a3a2bf7b942038d771fdcdd2e7a6410330784` · build `vYeNRRzvLN03N73wmcKkR` · inchangé

### C. Environnement RECETTE
**SERVED AND VERIFIED** / **READY WITH RESERVES — MORRIS UX RECETTE**

### D. Handoff
**HANDOFF UPDATED — REMOTE VERIFIED**

### E. Gates
- GO recette locale : déjà accordé ; rétablissement conforme
- push projet / PR / merge / STABLE / ADOPTED / ML4D global / Gate C : **NON** / **OPEN**

## 10. Accès Morris

1. URL : **http://127.0.0.1:3200/login**
2. SHA : `a77a3a2bf7b942038d771fdcdd2e7a6410330784`
3. Build : `vYeNRRzvLN03N73wmcKkR`
4. Session expirée : http://127.0.0.1:3200/login?reason=session_expired
5. Hard refresh ou profil dédié si ancien écran encore en cache
6. Ne pas utiliser :3100 pour cette recette UX-003

## 11. Contenu fichiers créés (ops)

### LaunchAgent `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux003.plist`
Programme : `.../start-recette-ux003.sh` · KeepAlive true · port 3200

### `RESTORE-PREVIOUS-ML4C-RECETTE.txt`
Procédure restore ML4C ci-dessus.

## 12. Publication handoff L3

Publisher : `scripts/sfia/publish-review-handoff.sh`

Statut : **REMOTE VERIFIED** — tip `877f8b4da7d5d35183fa782fe8bf45e9bf97c82b` · blob `e0b59a2fd8ab69cdc2e72e5fe1759f6c6e16bfe1`

| Champ | Valeur |
| --- | --- |
| Tip | `877f8b4da7d5d35183fa782fe8bf45e9bf97c82b` |
| Blob | `e0b59a2fd8ab69cdc2e72e5fe1759f6c6e16bfe1` |
