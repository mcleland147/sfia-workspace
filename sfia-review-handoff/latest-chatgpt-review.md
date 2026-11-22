# SFIA Review Pack FULL — E08 Cutover RECETTE Documentary REAL Merge

## 1. Date / heure

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 13:11:30 UTC+01:00 |
| UTC | 2026-11-22 12:11:30 UTC |
| Mandat | GO Morris cutover RECETTE candidat merge documentaire REAL |
| Classe | **NO RELEASE** · STABLE **NOT AVAILABLE** · E08 **NON ADOPTED** |

## 2. Git Truth initial / final

| Champ | Valeur |
| --- | --- |
| Branche | feat/next-ensemble08-git-publications-nora |
| HEAD / SOURCE | 10128bdb6bb1020a0fd8d4976b91879bff26c3b3 |
| TREE | be778f1bf461f15acf94bfed6879d43fa6256a0d |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| Push projet | **NONE** |
| Modification code | **NONE** ce cycle |
| Dirty | .tmp-sfia-review only |

## 3. Sources Git vérifiées

- Gouvernance ENV-01 / SEF / versioning (refs main)
- Handoff développement `3b11edd0` (C1/C2/C3)
- Handoff cutover référence `a0bacdcf`
- Candidat local non poussé — attendu

## 4. SOURCE / TREE

- SOURCE servi : 10128bdb6bb1020a0fd8d4976b91879bff26c3b3
- TREE : be778f1bf461f15acf94bfed6879d43fa6256a0d
- Correspondance GO : **PASS**

## 5. Préflight ENV-01

| Contrôle | Résultat |
| --- | --- |
| AVANT HTTP BUILD | <!--_U3Z92BCd0K__hiMvgTP9--> |
| AVANT SOURCE / WT | 98118de0 / preview-build-98118de0 |
| Service | com.sfia.studio.next.recette.ml4d-ux004 running |
| Listener :3200 | 1 |
| PostgreSQL | sfia_next_recette_ml4 @ sfia-next-recette-pg:5434 |
| GitHub | real / documentary / mcleland147/chantiers360 |
| Smokes /login /portfolio /integrations | 200 |
| Métriques avant | projects=26 · documents=117 · document_revisions=188 · messages=699 · conversations=205 · effect_attempts=7 · document_publication_refs=3 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=6 |
| D8 | PR#19/#20/#21 PR_OPEN |

## 6. Ancien vs nouveau BUILD

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE | 98118de073e9df5f2446592a281060ddb64369fe | 10128bdb6bb1020a0fd8d4976b91879bff26c3b3 |
| TREE | 51694a4dbe160e1caedab53c809e27d67d1cd150 | be778f1bf461f15acf94bfed6879d43fa6256a0d |
| BUILD_ID | _U3Z92BCd0K_-hiMvgTP9 | 2uHrYBsQUvf6aii40hMpj |
| HTTP marker | <!--_U3Z92BCd0K__hiMvgTP9--> | <!--2uHrYBsQUvf6aii40hMpj--> |
| Worktree | preview-build-98118de0 | merge-build-10128bdb |
| Script | start-recette-ensemble08-preview-98118de0.sh | start-recette-ensemble08-merge-10128bdb.sh |

HTTP marker = BUILD_ID fichier (pas de tiret à sanitiser).

## 7. Artefact figé

- Worktree détaché : /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb @ 10128bdb6bb1020a0fd8d4976b91879bff26c3b3
- npm ci + tsc --noEmit PASS + next build PASS
- TREE tracked inchangé pendant le build
- Marqueurs : GIT_MERGE_MANDATE, mergePullRequest, C1 UNKNOWN fail-closed, mergeCommitSha, preview indisponible/UNPREVIEWABLE
- Aucun commit produit créé

## 8. Backup / SHA-256 / restore proof

| Champ | Valeur |
| --- | --- |
| Backup | /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/.sfia-recette/backups/ml4d-e08-pre-merge-cutover-20261122T120915Z-from-98118de0.sql.gz |
| Taille | 783K |
| SHA-256 | 9e3db71a939b2c8fab4b1fa89a5b3d9a6d6f0b48ce6962b0b606519573fb7b6a |
| gzip -t | PASS |
| Restore proof | DB temp sfia_next_recette_restore_proof_merge → MATCH → DROP |
| Verdict | **RESTORE_PROOF_PASS** |

## 9. Rollback prêt → 98118de0 / _U3Z92BCd0K_-hiMvgTP9

- Script : /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/ROLLBACK-TO-E08-98118de0.sh
- Plist bak : com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T120915Z.pre-merge-cutover-98118de0.bak
- Cible : **pas** 24a8fa9e
- Exercé volontairement sur RECETTE saine : **NON**

## 10. Service LaunchAgent avant/après

Label inchangé com.sfia.studio.next.recette.ml4d-ux004 · KeepAlive · port 3200 · même DB.

Boot après : SHA=10128bdb6bb1020a0fd8d4976b91879bff26c3b3 BUILD=2uHrYBsQUvf6aii40hMpj LANE=RECETTE PROVIDER=real ALLOW_MUTATIONS=documentary WRITE_ALLOWLIST=mcleland147/chantiers360

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
		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/start-recette-ensemble08-merge-10128bdb.sh</string>
	</array>
	<key>WorkingDirectory</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/projects/sfia-studio-next/web</string>
	<key>RunAtLoad</key>
	<true/>
	<key>KeepAlive</key>
	<true/>
	<key>StandardOutPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/launchd.out.log</string>
	<key>StandardErrorPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/launchd.err.log</string>
	<key>EnvironmentVariables</key>
	<dict>
		<key>PATH</key>
		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
	</dict>
</dict>
</plist>

```

## 11. PostgreSQL avant/après

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

PR#19/#20/#21 préservées. Aucune migration. METRICS_STABLE.

## 12. Configuration GitHub (sans secrets)

STUDIO_GITHUB_PROVIDER=real · STUDIO_GITHUB_ALLOW_MUTATIONS=documentary · GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360

## 13. Smokes post-cutover

| Path | HTTP | BUILD marker |
| --- | --- | --- |
| /login | 200 | <!--2uHrYBsQUvf6aii40hMpj--> |
| /portfolio | 200 | idem |
| /settings/integrations | 200 | idem |

Listener unique · boot log OK · capacités merge présentes dans artefact · **aucune** mutation GitHub · **aucun** dispatchMerge / HumanDecision merge.

## 14. Capacités disponibles sans mutation

- Merge documentaire path présent (D6/D7/D9) — **NOT EXERCISED**
- C1/C2/C3 corrections présentes dans artefact servi
- Preview Figma 11.17 présent
- Publication / lecture Git présentes

## 15. Fichiers opérationnels (hors Git projet)

### start-recette-ensemble08-merge-10128bdb.sh
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=10128bdb6bb1020a0fd8d4976b91879bff26c3b3
export SFIA_BUILD_ID=2uHrYBsQUvf6aii40hMpj
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

### ROLLBACK-TO-E08-98118de0.sh
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
PLIST="$HOME/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist"
BAK=$(ls -1t "$HOME/Library/LaunchAgents"/com.sfia.studio.next.recette.ml4d-ux004.plist.*.pre-merge-cutover-98118de0.bak 2>/dev/null | head -1)
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

### manifeste-recette-merge-10128bdb.json
```json
{
  "SOURCE": "10128bdb6bb1020a0fd8d4976b91879bff26c3b3",
  "TREE": "be778f1bf461f15acf94bfed6879d43fa6256a0d",
  "BUILD_ID": "2uHrYBsQUvf6aii40hMpj",
  "base_git": "feat/next-ensemble08-git-publications-nora @ 10128bdb6bb1020a0fd8d4976b91879bff26c3b3 (local, not pushed)",
  "product_stable_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "lane": "RECETTE",
  "url": "http://127.0.0.1:3200",
  "service": "com.sfia.studio.next.recette.ml4d-ux004",
  "postgresql": {
    "database": "sfia_next_recette_ml4",
    "port": 5434,
    "container": "sfia-next-recette-pg"
  },
  "github": {
    "provider": "real",
    "allow_mutations": "documentary",
    "write_allowlist": "mcleland147/chantiers360"
  },
  "capabilities": [
    "git_read",
    "git_preview_unavailable_fallback",
    "github_documentary_publication",
    "github_documentary_merge_path",
    "merge_provider_mode_fail_closed",
    "merge_reconcile_provenance"
  ],
  "qa_proofs": [
    "tsc",
    "next build",
    "artifact markers C1/C2/C3/preview"
  ],
  "reserves": [
    "MERGE REAL NOT PROVEN",
    "Nora LIVE merge NOT EXERCISED",
    "Morris UAT required"
  ],
  "status": "MORRIS MERGE UAT REQUIRED",
  "stable": "NOT AVAILABLE",
  "built_at_utc": "2026-11-22T12:10:34Z",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb",
  "rollback_target": {
    "SOURCE": "98118de073e9df5f2446592a281060ddb64369fe",
    "BUILD_ID": "_U3Z92BCd0K_-hiMvgTP9"
  },
  "backup_sha256": "9e3db71a939b2c8fab4b1fa89a5b3d9a6d6f0b48ce6962b0b606519573fb7b6a"
}

```

## 16. Anti-exécution accidentelle (rapport)

- Review Pack généré via script Python littéral (pas d'expansion shell de backticks dans le markdown).
- Scripts start/rollback écrits via Python Path.write_text.
- Aucune commande opérationnelle déclenchée par la rédaction du rapport.
- Incident historique a0bacdcf (rollback involontaire via backticks) : **non reproduit**.

## 17. SCRIPTED / REAL

| Classe | Statut ce cycle |
| --- | --- |
| Build artefact | PROVEN |
| HTTP smoke | PROVEN |
| REAL GitHub READ config | conservée |
| REAL GitHub WRITE | **NONE** |
| REAL MERGE | **NOT EXERCISED / NOT PROVEN** |
| Nora LIVE merge | **NOT EXERCISED** |

## 18. Réserves

1. Merge REAL sandbox : UAT Morris requis — non exercé.
2. Nora LIVE merge : NOT EXERCISED.
3. Candidat SOURCE non poussé sur GitHub distant — normal.
4. Ne pas déclarer E08 ADOPTED / STABLE / RELEASE.

## 19. Verdict

**RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED**

## 20. Décision Morris suivante

Revue ChatGPT du cutover, puis autorisation explicite d'une unique fusion documentaire REAL via Nora sur PR sandbox éligible.

