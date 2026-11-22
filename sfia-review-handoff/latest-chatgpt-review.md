# SFIA Review Pack FULL — E08 Cutover RECETTE Universal Preview Fallback

## 1. Date / heure

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 12:37:32 UTC+01:00 |
| UTC | 2026-11-22 11:37:32 UTC |
| Mandat | GO Morris cutover RECETTE candidat preview 11.17 |
| Classe | **NO RELEASE** · STABLE **NOT AVAILABLE** · E08 **NON ADOPTED** |

## 2. Git Truth initial / final

| Champ | Valeur |
| --- | --- |
| Branche | feat/next-ensemble08-git-publications-nora |
| HEAD / SOURCE | 98118de073e9df5f2446592a281060ddb64369fe |
| TREE | 51694a4dbe160e1caedab53c809e27d67d1cd150 |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| Dirty produit | .tmp-sfia-review only |
| Push projet | NONE |
| HEAD final | identique (aucun commit produit) |

## 3. SOURCE / TREE exacts

- SOURCE servi : 98118de073e9df5f2446592a281060ddb64369fe
- TREE : 51694a4dbe160e1caedab53c809e27d67d1cd150
- Correspondance GO Morris : PASS
- Commit local (non poussé) : object présent ; distant GitHub peut ne pas le connaître — attendu.

## 4. Sources Git consultées

- Gouvernance ENV-01 / SEF / versioning / routing (refs main)
- Handoff accepté 60fef7e6 (preview pack) · cutover référence be76754f
- PV section 19 PREVIEW (docs branch, non modifié)
- as-built / delivery-history sur candidat (lecture)

## 5. Préflight ENV-01

| Contrôle | Résultat |
| --- | --- |
| Service | com.sfia.studio.next.recette.ml4d-ux004 running |
| AVANT HTTP BUILD | qCQGWLYYGb0ZCA4BLfzBi |
| AVANT SOURCE | 24a8fa9e via worktree mandate |
| Listener :3200 | 1 |
| PostgreSQL | sfia_next_recette_ml4 @ sfia-next-recette-pg:5434 |
| GitHub | real / documentary / mcleland147/chantiers360 |
| Smokes /login /portfolio /integrations | 200 |
| Métriques avant | projects=26 · documents=117 · document_revisions=188 · messages=699 · conversations=205 · effect_attempts=7 · document_publication_refs=3 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=6 |
| D8 | PR#19/#20/#21 PR_OPEN |

## 6. Ancien vs nouveau build

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE | 24a8fa9e7ad6cc2fa961496a915f13cea542d4a8 | 98118de073e9df5f2446592a281060ddb64369fe |
| TREE | ece43cdb8c008b855c381d50f112f8b86e5a2207 | 51694a4dbe160e1caedab53c809e27d67d1cd150 |
| BUILD_ID fichier | qCQGWLYYGb0ZCA4BLfzBi | _U3Z92BCd0K_-hiMvgTP9 |
| HTTP marker | qCQGWLYYGb0ZCA4BLfzBi | _U3Z92BCd0K__hiMvgTP9 |
| Worktree | mandate-build-24a8fa9e | preview-build-98118de0 |
| Script | start-recette-ensemble08-mandate-24a8fa9e.sh | start-recette-ensemble08-preview-98118de0.sh |

Note HTTP marker : les commentaires HTML Next ne peuvent pas contenir -- ; le BUILD_ID _U3Z92BCd0K_-hiMvgTP9 (avec tiret) apparaît donc comme _U3Z92BCd0K__hiMvgTP9 (tiret → underscore). Boot log conserve le BUILD_ID fichier exact.

Incident opérationnel : pendant la rédaction initiale du pack, une expansion shell involontaire des backticks a exécuté ROLLBACK-TO-E08-24a8fa9e.sh et a rétabli temporairement qCQGWLYY. Le cutover a été réappliqué immédiatement ; smokes finaux PASS sur le candidat. Aucune donnée mutée.

## 7. Artefact reproductible

- Worktree détaché : /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0 @ 98118de073e9df5f2446592a281060ddb64369fe
- npm ci + tsc --noEmit PASS + next build PASS
- TREE tracked CLEAN après build
- Artefact contient UNPREVIEWABLE, BINARY_CONTENT, FILE_TOO_LARGE, indisponible, Ouvrir sur GitHub
- Aucun commit produit créé pour le build

## 8. Séparation DEV / RECETTE

- RECETTE :3200 uniquement cutover
- DEV :3100 non muté pour ce cycle
- Worktree servi distinct du worktree de développement feature
- Ancien artefact mandate-build-24a8fa9e conservé pour rollback

## 9. Backup / SHA-256 / restore proof

| Champ | Valeur |
| --- | --- |
| Backup | /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/.sfia-recette/backups/ml4d-e08-pre-preview-cutover-20261122T113218Z-from-24a8fa9e.sql.gz |
| SHA-256 | cc58a1ace9158b8bc0781863f515a82fc950f8dd470aea5b558ff328de045e71 |
| gzip -t | PASS |
| Restore proof | DB temp sfia_next_recette_restore_proof_preview → metrics MATCH → DROP |
| Verdict | RESTORE_PROOF_PASS |

## 10. Rollback prêt → 24a8fa9e / qCQGWLYY

- Script : /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/ROLLBACK-TO-E08-24a8fa9e.sh
- Plist bak : com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T113218Z.pre-preview-cutover-24a8fa9e.bak
- Cible : pas 7115e932
- Exercé volontairement sur RECETTE saine : NON (incident shell documenté ci-dessus, puis re-cutover)

## 11. Service LaunchAgent avant/après

Label inchangé com.sfia.studio.next.recette.ml4d-ux004 · KeepAlive · port 3200 · même DB.

Boot après : SHA=98118de073e9df5f2446592a281060ddb64369fe BUILD=_U3Z92BCd0K_-hiMvgTP9 LANE=RECETTE PROVIDER=real ALLOW_MUTATIONS=documentary WRITE_ALLOWLIST=mcleland147/chantiers360

### Plist servi (non secret)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.sfia.studio.next.recette.ml4d-ux004</string>
	<key>ProgramArguments</key>
	<array>
		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/start-recette-ensemble08-preview-98118de0.sh</string>
	</array>
	<key>WorkingDirectory</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/projects/sfia-studio-next/web</string>
	<key>RunAtLoad</key>
	<true/>
	<key>KeepAlive</key>
	<true/>
	<key>StandardOutPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/launchd.out.log</string>
	<key>StandardErrorPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/launchd.err.log</string>
	<key>EnvironmentVariables</key>
	<dict>
		<key>PATH</key>
		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
	</dict>
</dict>
</plist>

```

## 12. PostgreSQL

Métriques avant = après :
```
projects=26
documents=117
document_revisions=188
messages=699
conversations=205
effect_attempts=7
document_publication_refs=3
project_git_links=15
authorized_repositories=27
sessions=125
human_decisions=6
```
PR#19/#20/#21 préservées. Aucune migration.

## 13. Configuration GitHub (sans secrets)

STUDIO_GITHUB_PROVIDER=real · STUDIO_GITHUB_ALLOW_MUTATIONS=documentary · GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360

## 14. Smokes post-cutover

| Path | HTTP | BUILD marker |
| --- | --- | --- |
| /login | 200 | _U3Z92BCd0K__hiMvgTP9 |
| /portfolio | 200 | idem |
| /settings/integrations | 200 | idem |

Listener unique · boot log OK · mécanismes preview présents dans artefact · aucune mutation GitHub · UAT visuelle Figma NON déclarée PASS.

## 15. Fichiers opérationnels créés (hors Git projet)

### start-recette-ensemble08-preview-98118de0.sh
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=98118de073e9df5f2446592a281060ddb64369fe
export SFIA_BUILD_ID=_U3Z92BCd0K_-hiMvgTP9
export STUDIO_LANE=RECETTE
export STUDIO_PORT=3200
export NODE_ENV=production
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset STUDIO_NORA_SIMULATED_PROVIDER || true
export STUDIO_GITHUB_ALLOW_MUTATIONS="${STUDIO_GITHUB_ALLOW_MUTATIONS:-documentary}"
export GITHUB_APP_WRITE_ALLOWED_REPOS="${GITHUB_APP_WRITE_ALLOWED_REPOS:-mcleland147/chantiers360}"
unset STUDIO_DEV_HOLD_INITIAL_QUALIFICATION || true
unset NODE_PATH || true
{
  echo "[sfia-recette-boot] $(date -u +%Y-%m-%dT%H:%M:%SZ) SHA=$SFIA_SOURCE_SHA BUILD=$SFIA_BUILD_ID LANE=$STUDIO_LANE PROVIDER=${STUDIO_GITHUB_PROVIDER:-} ALLOW_MUTATIONS=${STUDIO_GITHUB_ALLOW_MUTATIONS:-} WRITE_ALLOWLIST=${GITHUB_APP_WRITE_ALLOWED_REPOS:-}"
} >&2
exec npx next start -H 127.0.0.1 -p 3200

```

### ROLLBACK-TO-E08-24a8fa9e.sh
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
PLIST="$HOME/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist"
BAK=$(ls -1t "$HOME/Library/LaunchAgents"/com.sfia.studio.next.recette.ml4d-ux004.plist.*.pre-preview-cutover-24a8fa9e.bak 2>/dev/null | head -1)
test -n "$BAK"
echo "Using bak=$BAK"
launchctl bootout "gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004" 2>/dev/null || true
sleep 2
cp "$BAK" "$PLIST"
launchctl bootstrap "gui/$(id -u)" "$PLIST"
launchctl kickstart -k "gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004"
sleep 3
curl -s http://127.0.0.1:3200/login | grep -oE "<!--[A-Za-z0-9_-]+-->" | head -1

```

### manifeste-recette-preview-98118de0.json
```json
{
  "SOURCE": "98118de073e9df5f2446592a281060ddb64369fe",
  "TREE": "51694a4dbe160e1caedab53c809e27d67d1cd150",
  "BUILD_ID": "_U3Z92BCd0K_-hiMvgTP9",
  "base_git": "feat/next-ensemble08-git-publications-nora @ 98118de073e9df5f2446592a281060ddb64369fe (local, not pushed)",
  "product_stable_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "lane": "RECETTE",
  "url": "http://127.0.0.1:3200",
  "service": "com.sfia.studio.next.recette.ml4d-ux004",
  "postgresql": {"database": "sfia_next_recette_ml4", "port": 5434, "container": "sfia-next-recette-pg"},
  "github": {"provider": "real", "allow_mutations": "documentary", "write_allowlist": "mcleland147/chantiers360"},
  "capabilities": ["git_read", "git_preview_unavailable_fallback", "github_open_url"],
  "qa_proofs": ["unit git-preview", "tsc", "e2e preview unavailable", "next build"],
  "reserves": ["PREVIEW-02/03/05/06/07/11 PARTIAL", "Nora LIVE NOT PROVEN", "visual UAT Morris required"],
  "status": "UAT MORRIS REQUIRED",
  "built_at_utc": "2026-11-22T11:34:29Z",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-preview-build-98118de0"
}

```

Aucun fichier source suivi Git modifié dans ce cycle.

## 16. DETERMINISTIC / BROWSER / LIVE / REAL

| Classe | Statut ce cycle |
| --- | --- |
| DETERMINISTIC | build/tsc artefact PROVEN |
| BROWSER HTTP smoke | PROVEN |
| LIVE Nora | NOT EXERCISED |
| REAL GitHub READ smoke | config conservée ; pas de campagne WRITE |
| REAL mutation | NONE |
| SCRIPTED/dev proofs | antérieures ; non converties en REAL |

## 17. Réserves / gates

1. PREVIEW-02/03/05/06/07/11 restent PARTIAL (handoff 60fef7e6) — non transformés en PASS.
2. UAT visuelle/fonctionnelle Morris REQUIRED sur RECETTE.
3. Merge REAL Nora : hors mandat.
4. BUILD_ID HTML sanitization tiret→underscore documentée.
5. Candidat SOURCE non poussé sur GitHub distant — normal.
6. Incident rollback involontaire via backticks shell pendant rédaction pack — corrigé ; smokes finaux OK.

## 18. Verdict

**RECETTE AVAILABLE — E08 UNIVERSAL PREVIEW BUILD SERVED — MORRIS UAT REQUIRED**
