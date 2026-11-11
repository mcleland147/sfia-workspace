# SFIA Studio Next — Review Pack FULL
# ML4C — RECETTE LIVE/REAL readiness qualification

**Date/heure :** 2026-11-11 22:14 CET (2026-11-11 21:14 UTC)
**Cycle :** 11 — Déploiement / release (RUN)
**Typologie :** RUN — activation/qualification LIVE/REAL
**Profil :** Critical
**Macro-lot :** R5 / ML4C
**Niveau review pack :** **full**
**PR produit :** https://github.com/mcleland147/sfia-workspace/pull/676 — **inchangée**
**Merge / STABLE / Git write / release :** **NON AUTORISÉS**
**Version :** NO RELEASE / `0.0.0-dev`

---

## 0. Review pack content coverage (§7.5)

| Champ | Valeur |
| --- | --- |
| review pack réinitialisé au démarrage | oui |
| review pack complété | oui |
| niveau | **full** |
| created files full content | **yes** (manifeste mis à jour, preuves JSON smoke) |
| modified product files | **not applicable** (aucun commit produit) |
| useful diff included | **not applicable** |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## 1. Local Git Truth Check

| Contrôle | Observé |
| --- | --- |
| Remote | `mcleland147/sfia-workspace` |
| Branche | `build/next-ml4c-functional-convergence` |
| HEAD / tree | `2416e2ee…` / `88c05766…` |
| main / merge-base | `6d237452…` |
| Handoff tip initial | `bc0ce897` / blob `9b96d7eb` |
| Produit modifié | non |
| RECETTE servie | worktree `...-2416e2ee`, BUILD `qB8JvXfdL7FMOFYMf31kL`, :3200 |

**Verdict Git Truth :** PASS.

---

## 2. Git Review Index (§7.4)

```text
Git Review Index
- base branch : main @ 6d237452…
- HEAD avant/après : 2416e2ee… (inchangé)
- fichiers modifiés (produit) : aucun
- artefacts ops : ops/recette-served-manifest.yaml (complété) ; smokes locaux .tmp-live-smoke/
- commits produit : aucun
- validations : Nora LIVE smoke ; GitHub REAL READ ; negatives ; DB fingerprint
- review pack : full
- Fake/Real applicable : oui
- décisions Morris : scénarios S01–S07 ; OAuth navigateur interactif ; GO écriture documentaire REAL
```

---

## 3. Matrice de preuve LIVE/REAL

| CAPACITÉ | CONFIGURATION OBSERVÉE | FOURNISSEUR CONTACTÉ | EFFET / LECTURE | PREUVE | RÉSULTAT | RÉSERVE |
| --- | --- | --- | --- | --- | --- | --- |
| Nora OpenAI | RECETTE, key PRESENT, fixture ABSENT, TEST_BOUNDARY | YES | 2 réponses COMPLETE | smoke JSON + OBS provider_attempt | **LIVE BEHAVIOR PROVEN** | modelApplied UNVERIFIED (contrat adapter) |
| OAuth Studio identity | Better Auth + GitHub OAuth CONFIGURED | n/a ce cycle | sessions DB `github-oauth`×6 / 2 users | `/api/auth/status` + SQL | **CONFIGURED** + sessions persistées | callback navigateur interactif **NOT RUN** — ACTION MORRIS |
| GitHub App RECETTE | App 5677465 / inst 180092114 / lane RECETTE | YES (installation token) | install repos=1 | REAL provider | **CONFIGURED** | — |
| Git REAL READ | PROVIDER=real | YES | meta+refs+README.md | smoke JSON | **REAL READ PROVEN** | — |
| Git REAL documentary write | ALLOW_MUTATIONS=documentary | n/a | aucun write | flag + gate code | **REAL DOCUMENTARY WRITE CONFIGURED** | **NOT RUN** end-to-end |
| Git merge | hard-block code | n/a | mergePullRequest refused | exception ACCESS_DENIED | **HARD-BLOCKED** | — |
| Fixture hors DEV | FORCE=1 + LANE=RECETTE | NO | boundary FAILED | smoke | **FAILED CLOSED** | parent shell FORCE polluted harness until cleaned |
| Repo non autorisé | REAL READ gate | YES attempt | ACCESS_DENIED | smoke | **BLOCKED** | — |
| PostgreSQL RECETTE | :5434 / sfia_next_recette_ml4 | local | counts stables | SQL | **AVAILABLE** | — |
| ML5 Cursor-in-Studio | — | — | — | — | **NOT IMPLEMENTED / N/A** | — |
| S01–S07 user campaign | — | — | — | — | **NOT RUN** | étape 2 |

---

## 4. Preuves Nora LIVE (contenu exploitable)

```json
{
  "pre": {
    "STUDIO_LANE": "RECETTE",
    "STUDIO_E2E": null,
    "STUDIO_FORCE_NORA_FIXTURE": null,
    "SFIA_COG_PROFILE_TYPE": "TEST_BOUNDARY",
    "keyPresent": true,
    "noraFixtureFlagsOutsideDev": false,
    "mustUseNoraFixture": false
  },
  "exchanges": [
    {
      "generationId": "gen_273b06e0-1706-4092-9052-b79974cea20e",
      "mode": "openai-agents-sdk-live",
      "status": "COMPLETE",
      "modelRequested": "gpt-6.1-sol",
      "modelApplied": "UNVERIFIED",
      "effortRequested": "low",
      "effortApplied": "UNVERIFIED",
      "policyProfileType": "TEST_BOUNDARY",
      "policyProfile": "simple",
      "toolCallsObserved": 0,
      "attempts": [
        {
          "kind": "stream",
          "outcome": "SUCCESS",
          "providerContacted": "YES",
          "notes": "stream_fragments_received"
        }
      ],
      "contentChars": 88,
      "contentExcerptRedacted": "Un blob Git est un objet qui stocke le contenu d’un fichier, sans son nom ni son chemin.",
      "streamingNotes": "stream_fragments_received"
    },
    {
      "generationId": "gen_ad5537f1-4876-4610-aafd-3702cddf1bd4",
      "mode": "openai-agents-sdk-live",
      "status": "COMPLETE",
      "modelRequested": "gpt-6.1-sol",
      "modelApplied": "UNVERIFIED",
      "effortRequested": "low",
      "effortApplied": "UNVERIFIED",
      "policyProfileType": "TEST_BOUNDARY",
      "policyProfile": "simple",
      "toolCallsObserved": 0,
      "attempts": [
        {
          "kind": "stream",
          "outcome": "SUCCESS",
          "providerContacted": "YES",
          "notes": "stream_fragments_received"
        }
      ],
      "contentChars": 51,
      "contentExcerptRedacted": "Je suis en mode conversationnel, sans effet métier.",
      "streamingNotes": "stream_fragments_received"
    }
  ],
  "at": "2026-11-11T21:13:12.618Z"
}
```

## 5. Preuves GitHub REAL READ + negatives

```json
{
  "at": "2026-11-11T21:10:08.662Z",
  "config": {
    "STUDIO_LANE": "RECETTE",
    "resolveStudioGithubAppLane": "RECETTE",
    "STUDIO_GITHUB_PROVIDER": "real",
    "STUDIO_GITHUB_ALLOW_MUTATIONS": "documentary",
    "STUDIO_GITHUB_USER_OAUTH": "real",
    "isBoundedRealMutationAllowed": true,
    "resolvedMode": "REAL",
    "appId": "5677465",
    "installationId": "180092114",
    "allowedFullName": "mcleland147/chantiers360",
    "expectedOwner": "mcleland147"
  },
  "realRead": {
    "installationReposCount": 1,
    "installationIncludesAllowed": true,
    "meta": {
      "fullName": "mcleland147/chantiers360",
      "defaultBranch": "main",
      "headShaPrefix": "8c398c494dd9",
      "private": false,
      "installationRepos": [
        "mcleland147/chantiers360"
      ],
      "tokenPermissionKeys": [
        "contents",
        "metadata",
        "pull_requests"
      ],
      "tokenExpiresAt": "2026-11-11T22:10:07Z"
    },
    "refsSample": [
      {
        "name": "cursor/evol-001-upload-photos-lot-1.1-a",
        "shaPrefix": "9837ad856b53"
      },
      {
        "name": "dependabot/npm_and_yarn/backend/eslint-10.6.0",
        "shaPrefix": "62d4251ce200"
      },
      {
        "name": "dependabot/npm_and_yarn/backend/eslint/js-10.0.1",
        "shaPrefix": "1578f01ec2de"
      },
      {
        "name": "dependabot/npm_and_yarn/backend/types/node-26.0.1",
        "shaPrefix": "f210bf27d5e0"
      },
      {
        "name": "dependabot/npm_and_yarn/backend/typescript-6.0.3",
        "shaPrefix": "10b88845cd39"
      }
    ],
    "fileRead": {
      "path": "README.md",
      "encoding": "utf-8",
      "shaPrefix": "91b85b76c9fa",
      "contentChars": 3610,
      "refUsed": "cursor/evol-001-upload-photos-lot-1.1-a",
      "headShaPrefix": "9837ad856b53"
    }
  },
  "negatives": {
    "deniedRepo": {
      "ok": false,
      "message": "Dépôt hors périmètre REAL READ (mcleland147/not-authorized-repo-smoke)"
    },
    "mergeBlocked": {
      "blocked": true,
      "message": "Mutation GitHub REAL interdite (mergePullRequest) — STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary ou merge hors périmètre"
    },
    "wrongInstallation": {
      "blocked": true,
      "message": "Installation ID hors mandat REAL READ"
    }
  }
}
```

## 6. Capacités internes (non destructif)

```json
{
  "db": "sfia_next_recette_ml4",
  "schemaRevisionCode": "012_auth_concurrency_safety",
  "counts": {
    "pilots": 168,
    "projects": 15,
    "documents": 116,
    "document_revisions": 186,
    "human_decisions": 0,
    "project_cycles": 0,
    "github_oauth_sessions": 6,
    "distinct_oauth_users": 2
  },
  "sampleProj": [
    {
      "id": "proj_b6dc56af-2b00-4671-89a3-46ea2c00c5c1",
      "name": "git-at"
    },
    {
      "id": "proj_dbb72351-4dab-4c74-9d17-df9932179eba",
      "name": "ml4-rec11"
    },
    {
      "id": "proj_baf667d0-6af4-4a06-9089-9359a9eb8d97",
      "name": "ml4-prov"
    }
  ]
}
```

## 7. Contrôles négatifs

- `STUDIO_FORCE_NORA_FIXTURE=1` hors DEV → `NORA_FIXTURE_LANE_FORBIDDEN` / FAILED (pas de FAKE usable).
- Parent shell avait `STUDIO_FORCE_NORA_FIXTURE=1` (pollution harness) ; **absent** de `~/.config/.../recette/.env.local` et du runtime LaunchAgent attendu.
- Dépôt hors allowlist → ACCESS_DENIED.
- Installation ID faux → ACCESS_DENIED.
- `mergePullRequest` → ACCESS_DENIED (hors périmètre même si documentary).
- Aucune branche/commit/PR créée ce cycle.
- Login DEV non utilisé comme preuve.

---

## 8. Manifeste effectif (complet)

```yaml
# ENV-01 §6 — manifeste non secret de mise à disposition RECETTE
# Secrets: NEVER included. Statuses only.

lane: RECETTE
version_policy: NO_RELEASE
package_version: 0.0.0-dev
candidate_sha: 2416e2ee25662821b015407346c64ec204f67488
tree: 88c05766afa04355f5fbb63dcda603686a3f11a6
build_identifier: qB8JvXfdL7FMOFYMf31kL
previous_candidate_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
previous_build_identifier: 8vZjme4-KnnPkAqm_QxMz
served_address: 'http://127.0.0.1:3200'
served_worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee
service_label: com.sfia.studio.next.recette.ml4
service_launcher: LaunchAgent macOS (existing label reused)
start_script: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/start-recette.sh
database:
  host: 127.0.0.1
  port: 5434
  name: sfia_next_recette_ml4
  role: sfia_next_recette_ml4
  container: sfia-next-recette-pg
schemaRevision: 012_auth_concurrency_safety
migrations_applied_this_cycle: false
migrations_reason: identical 001→012 vs previous served build; no schema write
dataset_preserved: true
document_root: /Users/morris/.config/sfia-studio-next/recette/documents
document_root_files: 0
configuration_file: ~/.config/sfia-studio-next/recette/.env.local
configuration_statuses:
  STUDIO_LANE: RECETTE
  STUDIO_PORT: 3200
  STUDIO_GITHUB_PROVIDER: real
  STUDIO_GITHUB_ALLOW_MUTATIONS: documentary
  STUDIO_GITHUB_USER_OAUTH: real
  SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
  OPENAI_API_KEY: PRESENT
  GITHUB_APP_ID: '5677465'
  GITHUB_APP_INSTALLATION_ID: '180092114'
  GITHUB_APP_EXPECTED_OWNER: mcleland147
  GITHUB_APP_ALLOWED_REPO: mcleland147/chantiers360
  GITHUB_APP_CALLBACK_URL: http://127.0.0.1:3200/api/integrations/github/callback
  BETTER_AUTH_URL: http://127.0.0.1:3200
  GITHUB_APP_PRIVATE_KEY_PATH_FILE: PRESENT
identity_callbacks: PRESERVED
github_app: sfia-studio-next-recette / App ID 5677465 / Installation 180092114
functions_available:
  - HTTP login page
  - GitHub OAuth studio identity endpoint CONFIGURED
  - existing RECETTE dataset read path
functions_blocked_this_cycle:
  - Nora LIVE voluntary calls (NOT RUN — separate GO required)
  - Git REAL write mutations (NOT RUN — documentary flag preserved, no write)
  - STABLE promotion
  - merge PR #676
backup_path: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee
rollback_strategy: restore LaunchAgent plist from backup and bootstrap previous start-recette.sh; DB dump conservative only — no DROP/TRUNCATE
ci_reference: '43093786931 SUCCESS on candidate SHA (not a LIVE user-recette proof)'
pr: 'https://github.com/mcleland147/sfia-workspace/pull/676'
smoke:
  http_login: 200
  build_id_served: qB8JvXfdL7FMOFYMf31kL
  cwd_match_new_worktree: true
  db_counts_stable: true
  dev_3100_untouched: true
  single_listener_3200: true
ml4c_scenarios_prepared:
  S01: NOT_RUN
  S02: NOT_RUN
  S03: NOT_RUN
  S04: NOT_RUN
  S05: NOT_RUN
  S06: NOT_RUN
  S07: NOT_RUN
reserves:
  - cookie isolation same-host 3100/3200 (ENV-01 réserve A) carried
  - S04 DOCUMENTED/INCOMPLETE
  - S07 PARTIAL until global proof
  - Nora LIVE / Git REAL require distinct GO
  - 6 sessions unexpired at switch (brief restart; no data wipe)

# --- LIVE/REAL readiness qualification (2026-11-11T21:14:36Z) ---
live_real_qualification:
  cycle: "11 RUN activation/qualification"
  candidate_sha: 2416e2ee25662821b015407346c64ec204f67488
  build_identifier: qB8JvXfdL7FMOFYMf31kL
  openai:
    key_status: PRESENT
    fixture_flags_in_recette_env: ABSENT
    SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
    mode_observed: openai-agents-sdk-live
    providerContacted: YES
    status: COMPLETE
    exchanges: 2
    model_requested: gpt-6.1-sol
    model_applied: UNVERIFIED
    streamingNotes: stream_fragments_received
    result: LIVE_BEHAVIOR_PROVEN
    note: "Adapter smoke with empty context snippets; no métier project/document created"
  github_oauth_studio_identity:
    /api/auth/status: CONFIGURED
    persisted_sessions_auth_mode: github-oauth
    live_sessions: 6
    distinct_users: 2
    interactive_browser_callback_this_cycle: NOT_RUN
    raw_db_token_cookie_replay: NOT_PROVEN
    action_morris: "Interactive OAuth browser login may be required for user campaign S01+"
    result: CONFIGURED_AND_PERSISTED_SESSIONS_OBSERVED
  github_app:
    lane_profile: RECETTE
    app_id: "5677465"
    installation_id: "180092114"
    allowed_repo: mcleland147/chantiers360
    result: CONFIGURED
  github_real_read:
    provider_mode: REAL
    installation_repos: 1
    includes_allowed: true
    default_branch: main
    head_sha_prefix: 8c398c494dd9
    file_read: README.md
    result: REAL_READ_PROVEN
  github_real_documentary_write:
    STUDIO_GITHUB_PROVIDER: real
    STUDIO_GITHUB_ALLOW_MUTATIONS: documentary
    isBoundedRealMutationAllowed: true
    end_to_end_publication: NOT_RUN
    result: REAL_DOCUMENTARY_WRITE_CONFIGURED
  github_merge:
    result: HARD_BLOCKED
  negatives:
    fixture_force_outside_dev: FAILED_CLOSED
    denied_repo_read: ACCESS_DENIED
    wrong_installation_id: ACCESS_DENIED
    no_git_write_this_cycle: true
  open_actions_morris:
    - interactive_oauth_browser_for_campaign
    - scenario_design_S01_S07
    - explicit_GO_before_any_REAL_documentary_write
```

## 9. Fake / Real Qualification (§6.16)

| Capacité | Mode | Statut |
| --- | --- | --- |
| Nora | LIVE openai-agents-sdk-live | **PROVEN** (2 échanges) |
| GitHub read | REAL installation | **PROVEN** |
| GitHub write documentary | REAL gate configured | **CONFIGURED / NOT RUN** |
| GitHub merge | blocked | **HARD-BLOCKED** |
| OAuth | real identity configured | **CONFIGURED** ; interactive callback NOT RUN |
| SCRIPTED/FAKE as LIVE proof | — | **NOT USED** |

---

## 10. Risques / réserves / exits

- OAuth navigateur interactif non rejoué ce cycle (cookies Better Auth non rejouables depuis token SQL brut) → **ACTION MORRIS REQUIRED** pour campagne utilisateur.
- Cookie isolation same-host DEV/RECETTE (ENV-01 A) portée.
- `modelApplied=UNVERIFIED` malgré COMPLETE — conforme au contrat adapter.
- REAL documentary write end-to-end exige GO Morris distinct + HumanDecision/cible/idempotence.
- S01–S07 non acceptés ici.

---

## 11. Décisions Morris restantes

1. Concevoir le cahier de scénarios ML4C S01–S07 (étape séparée).
2. Eventuel login OAuth navigateur interactif sur :3200.
3. GO distinct avant toute publication Git REAL documentaire.
4. Aucun merge / STABLE.

---

## 12. Verdict

**ML4C RECETTE — LIVE/REAL READINESS VERIFIED
READY FOR TEST SCENARIO DESIGN**

Explicitement : **REAL DOCUMENTARY WRITE NOT RUN**.

- URL : http://127.0.0.1:3200
- SHA / BUILD : `2416e2ee` / `qB8JvXfdL7FMOFYMf31kL`
- Nora LIVE : PROVEN
- GitHub REAL READ : PROVEN
- OAuth : CONFIGURED (+ sessions persistées) ; callback interactif NOT RUN
- Produit/PR : inchangés
