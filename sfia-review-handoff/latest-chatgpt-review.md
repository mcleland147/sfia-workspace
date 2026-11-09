# SFIA STUDIO NEXT — ML4
# REVIEW PACK LIGHT — RESTORE SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 13:19 CET |
| Processus | SFIA v2.6 |
| Cycle | 11 — Déploiement RECETTE |
| Profil | STANDARD |
| Type | RUN / Correction de configuration |
| GO | Morris — restore TEST_BOUNDARY only |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Candidat servi | 974b0030a94469bef05496151792e8c35a9a83e9 |
| Tree | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 |
| BUILD_ID | RzpCuGMK6SnwfucphK7Qa |
| Remote Product | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b (inchangé) |
| main | 6667a43858a5421e391b7441246536daad148bd6 |
| L3 parent entrée | 4df64a6185c7f392c25afaf6a1d4e0dc3d0de560 |
| Worktree | …/sfia-workspace-next-ml4-recette-build-974b0030 |
| PID | 75778 |
| Code Product | **AUCUN changement** |

## 3. Configuration avant / après

| Variable | Avant | Après |
|---|---|---|
| SFIA_COG_PROFILE_TYPE | **ABSENT** | **TEST_BOUNDARY** |
| STUDIO_LANE | RECETTE | RECETTE (inchangé) |
| OPENAI_API_KEY | présente | inchangée |
| Autres secrets / App / DB | présents | **inchangés** |
| STUDIO_E2E / FIXTURE / MUTATIONS | absents | absents |

Source historique confirmée : ML3 RECETTE `…-ml3-recette-build-61fe295b` avait déjà `TEST_BOUNDARY`.
Backup local hors Git : `~/.config/sfia-studio-next/recette/backups/.env.local.bak-before-cog-restore-*`

## 4. Redémarrage

- Arrêt propre du seul next-server ML4 sur :3200.
- Relance même worktree / SHA / BUILD_ID / DB.
- HTTP `/login` `/portfolio` `/settings/integrations` → 200.
- `/api/auth/status` → configured=true.
- App RECETTE identity inchangée ; mutations bloquées.

## 5. Smoke Nora

| Check | Résultat |
|---|---|
| resolveProfileType() | TEST_BOUNDARY |
| policy.profileType | TEST_BOUNDARY |
| mode | openai-agents-sdk-live (pas de fixture) |
| STUDIO_E2E / FORCE_FIXTURE | absents |
| status | **UNKNOWN** |
| streamingNotes | PROVIDER_ERROR |
| providerContacted | UNCERTAIN |
| modelRequested | gpt-6.1-sol (inchangé code) |
| content | non vide mais message d'erreur fournisseur (non dumpé) |
| CampusFlow | **non modifié** |

**LIVE COMPLETE non obtenu.** Chemin LIVE ouvert (fail-closed COG levé) ; erreur fournisseur hors périmètre config-only.

## 6. Réserve conservée OPEN

TEST_BOUNDARY = profil de test à budgets artificiels. Profil opérationnel RECETTE à définir/calibrer plus tard. **KNOWN GAP / OPEN** — non CLOSED.

## 7. Fake/Real §6.16

| Item | Statut |
|---|---|
| Config TEST_BOUNDARY | RESTORED |
| Profil cognitif runtime | PASS |
| Nora LIVE COMPLETE | **NOT PROVEN** |
| Fixture FAKE | NON utilisée |
| USER R01 | NOT RUN |

## 8. Verdict

**ML4 RECETTE — TEST_BOUNDARY RESTORED — NORA PROFILE PASS — LIVE PROVIDER SMOKE NOT PROVEN (PROVIDER_ERROR / UNKNOWN) — READY FOR MORRIS R01 RETEST / DIAGNOSIS.**

SHA/build inchangés. Aucun push Product. Aucun code modifié.
