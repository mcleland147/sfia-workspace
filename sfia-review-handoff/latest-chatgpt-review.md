# SFIA STUDIO NEXT — ML4C Q2 RECETTE DELIVERY — REVIEW PACK FULL

**Date/heure :** 2026-11-14 — Europe/Paris (UTC observations ~16:00–16:05Z)
**GO :** MORRIS Q2 — MISE À DISPOSITION RECETTE
**Profil :** CRITICAL
**Cycle :** 11 — DEPLOYMENT / RECETTE
**Macro-lot :** R5 / ML4C — Convergence fonctionnelle intégrée
**Review Pack :** FULL, mono-cycle
**Review Handoff Git :** REQUIRED / PUBLISH-IN-CYCLE (L3 borné)
**Push produit :** interdit
**Q3 campagne utilisateur :** non exécutée
**Git documentaire REAL WRITE :** non autorisé / barrière inactive

**Verdict Cursor (pré-handoff ; références distantes définitives en fin de rapport après publication) :**
**ML4C Q2 DEPLOYED — PROVIDER READINESS INCOMPLETE**

---

## 1. Git Truth initial et final

### Product worktree (source GO)

```text
Repository: mcleland147/sfia-workspace
Product root: projects/sfia-studio-next/
Worktree: /Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112
Branch: fix/next-semantic-intent-convergence-20261112
HEAD: d936da81ebf7d17eb78cc11da0538df000281a4a
TREE: 276679be1ea139525b2267cde9245b8fb88e9a76
Parent: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
origin/build/next-ml4c-functional-convergence: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
PR #676: OPEN / NOT MERGED (unchanged by Q2)
Dirty (non-product): M .tmp-sfia-review/chatgpt-review.md only
```

### Q1 candidate identity (immutable)

```text
candidate_sha: d936da81ebf7d17eb78cc11da0538df000281a4a
candidate_tree: 276679be1ea139525b2267cde9245b8fb88e9a76
Q1 isolated BUILD_ID (reference): dLmndR07XvR8bViUlUhEW
Q1 last handoff: sfia/review-handoff@2afd7b576785a50ebbf9c0a6106479cad1f79da1
Q1 handoff blob: 7e83a7ecab18c699bc6aab61cf0d1e620b501747
Remote product absence of d936da81: EXPECTED — no fetch/rebase from origin/build or main
```

### RECETTE deploy worktree (Q2)

```text
Path: /Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81
HEAD: d936da81ebf7d17eb78cc11da0538df000281a4a
TREE: 276679be1ea139525b2267cde9245b8fb88e9a76
Detached: yes
Untracked ops only (not product commit): start-recette.sh, rollback-to-67bf6b0b.sh,
  com.sfia.studio.next.recette.ml4.plist, switch-plan.md, ops/recette-manifest-q2.yaml
```

### Previous RECETTE (preserved)

```text
Path: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-67bf6b0b
HEAD: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
BUILD_ID: wYKCZCblBxWLiVsNjIr3e
Status: NOT DELETED — rollback script available
```

---

## 2. Sources et décisions

Lues / appliquées (autorité selon SFIA v2.6 + contrat Q2) :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — Next §4.3.0b, Review Pack, handoff, REAL, ENV-01
- `prompts/templates/sfia-cycle-execution-template.md`
- Gouvernance Studio Next : SEF, roadmap, environnements-recette-et-promotions, product-versioning
- Décisions : 2026-11-11 R5 convergence ; 2026-11-12 qualification sémantique Nora
- Handoff Q1 : `sfia-review-handoff/latest-chatgpt-review.md` @ `2afd7b57…`
- `construction/ml4-integration-git/recette-ml4-historique-et-scenarios-e2e.md`
- `web/README.md`
- Code Q1 (identité) : cognitive-policy, nora-adapter, github-* providers, auth, product-version
- Journal UAT (reprise Q3, non exécuté) : `c4b4209c…` / `journal-recette-utilisateur-ml4c.md` — 17 PASS / 6 FAIL / 30 BLOCKED inchangé

Produit Q1 : référencer le Review Pack Q1 pour le patch 30 fichiers — non recopié ici.

---

## 3. Contrat d'autorisation Q2

**Autorisé :** lecture Git/code/config ; worktree RECETTE depuis `d936da81` ; `npm ci` / build ; préservation ancienne RECETTE ; RO PostgreSQL ; ajustement config locale non secrète ; bascule port 3200 ; smokes HTTP/OAuth/LIVE/REAL bornés ; rollback app ; manifeste ; FULL pack ; handoff L3.

**Interdit :** modification code Q1 ; push produit / PR / merge ; migration DB / reset / purge ; campagne 53 cas ; mutations Git documentaires ; `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` ; STABLE/ADOPTED ; usurpation session Pilote.

---

## 4. Identité Q1 du candidat

| Champ | Valeur | Preuve |
|---|---|---|
| SHA | `d936da81ebf7d17eb78cc11da0538df000281a4a` | `git rev-parse` product + deploy WT |
| Tree | `276679be1ea139525b2267cde9245b8fb88e9a76` | `git rev-parse HEAD^{tree}` |
| Parent | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` | `git rev-parse d936da81^` |
| Mutation Q1 | NONE | aucun commit/rebase/cherry-pick en Q2 |

**STOP Q1 CANDIDATE IDENTITY MISMATCH :** non déclenché.

---

## 5. Inventaire environnements avant intervention (ENV-01)

| Ressource | Observé pré-bascule |
|---|---|
| `127.0.0.1:3200` | PID 28429 `next-server (v15.5.29)` ; CWD `…-ml4-recette-build-67bf6b0b/…/web` |
| launchd | `com.sfia.studio.next.recette.ml4` KeepAlive ; program `…/67bf6b0b/start-recette.sh` |
| Ancienne RECETTE | SHA `67bf6b0b` ; BUILD_ID `wYKCZCblBxWLiVsNjIr3e` |
| `SFIA_SOURCE_SHA` historique | `.env` stale `8ba77730…` ; start script override `67bf6b0b…` (B-03) |
| PostgreSQL | `sfia-next-recette-pg` `127.0.0.1:5434` → `sfia_next_recette_ml4` |
| DEV PG | `sfia-next-dev-pg` `:5433` distinct |
| DEV app `:3100` | non en écoute |
| Secrets | `~/.config/sfia-studio-next/recette/.env.local` mode `600` hors Git |
| OpenAI | clé PRESENT ; `STUDIO_E2E` / `STUDIO_FORCE_NORA_FIXTURE` ABSENT |
| GitHub App | ID `5677465` ; install `180092114` ; repo `mcleland147/chantiers360` ; callback `:3200/.../callback` |
| Flag mutations | **était** `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` → **désactivé pour Q2** |
| Cognitif | `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` |

---

## 6. Contrôles de configuration (sans secrets)

Après alignement Q2 :

```text
STUDIO_LANE=RECETTE
STUDIO_PORT=3200
BETTER_AUTH_URL=http://127.0.0.1:3200
SFIA_SOURCE_SHA=d936da81ebf7d17eb78cc11da0538df000281a4a
STUDIO_GITHUB_PROVIDER=real
STUDIO_GITHUB_ALLOW_MUTATIONS= (empty — documentary DISABLED)
SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY
STUDIO_E2E=ABSENT
STUDIO_FORCE_NORA_FIXTURE=ABSENT
STUDIO_DEV_TEST_LOGIN=ABSENT
OPENAI_API_KEY=PRESENT
GITHUB_APP_ID=5677465
GITHUB_APP_INSTALLATION_ID=180092114
GITHUB_APP_ALLOWED_REPO=mcleland147/chantiers360
GITHUB_APP_CALLBACK_URL=http://127.0.0.1:3200/api/integrations/github/callback
```

Start script Q2 force-export `SFIA_SOURCE_SHA=d936da81…` et `STUDIO_GITHUB_ALLOW_MUTATIONS=` (B-03 + write barrier).

Backup config locale (hors pack) : `/Users/morris/Projects/sfia-recette-backups/ml4c-q2-20261114/env.local.bak`

---

## 7. Compatibilité PostgreSQL

```text
Host: 127.0.0.1:5434
Database: sfia_next_recette_ml4
Container: sfia-next-recette-pg
Migration exécutée Q2: NONE
Schema revision code Q1: 012_auth_concurrency_safety
Observation: tables concurrent-safety présentes (sessions.revoked_at, effect_attempts,
  integration_authorizations, documents, …) — compatible ; pas de journal migrate dédié
Fingerprints counts before/after cutover:
  conversations=171 projects=16 users=2 documents=116 messages=428
  preparations=171 sessions=9 — IDENTIQUES (préservation)
```

**Aucune migration, reset, purge.**

---

## 8. Préservation ancienne RECETTE

```text
old_worktree_preserved: YES
old_BUILD_ID: wYKCZCblBxWLiVsNjIr3e
plist_backup: …/ml4c-q2-20261114/com.sfia.studio.next.recette.ml4.plist.bak
start_script_backup: …/ml4c-q2-20261114/start-recette.sh.bak
identity_snapshot: …/ml4c-q2-20261114/old-recette-identity.txt
rollback_script: …/ml4c-recette-build-d936da81/rollback-to-67bf6b0b.sh
rollback_required: NO
rollback_attempted: NO
rollback_result: N/A
previous_build_restored: N/A (still available)
RECETTE_data_preserved: YES
```

---

## 9. Build Q2

```text
worktree: /Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81
source_sha: d936da81ebf7d17eb78cc11da0538df000281a4a
source_tree: 276679be1ea139525b2267cde9245b8fb88e9a76
base_main_sha: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
node_version: v24.16.0
npm_version: 11.13.0
next_version: 15.5.29
package_lock_sha256: 978a1e565454a70b437405a6e4f3c6f8ed6ae47b6ac417799d7960c6378903df
commands: npm ci ; npx tsc --noEmit (via next build typecheck) ; npm run build
BUILD_ID served: n-7E8DgbcVu4g_RJWZoiK
Q1 isolated BUILD_ID (different artefact, same SHA): dLmndR07XvR8bViUlUhEW
distDir: projects/sfia-studio-next/web/.next
build_finished_utc: ~2026-11-14T16:01:46Z
@openai/agents: 0.21.0
```

Lint warnings only (unused vars) — build OK.

---

## 10. Bascule et identité processus

1. `launchctl bootout` ancien job KeepAlive
2. Port 3200 libéré
3. Plist remplacé → `…/d936da81/start-recette.sh`
4. `launchctl bootstrap` + `kickstart`
5. Ready in ~231ms

```text
PID listen: 41282 (next-server v15.5.29)
launchd pid: 41259
CWD: …/sfia-workspace-next-ml4c-recette-build-d936da81/projects/sfia-studio-next/web
Command: next start -H 127.0.0.1 -p 3200 (via start-recette.sh)
BUILD_ID file: n-7E8DgbcVu4g_RJWZoiK
HTML comment identity: <!--n_7E8DgbcVu4g_RJWZoiK-->
```

---

## 11. Manifeste réel ENV-01

Voir aussi artefact local `ops/recette-manifest-q2.yaml` (worktree RECETTE) et backup.

```yaml
lane: RECETTE
deployment_status: DEPLOYED
source_repository: mcleland147/sfia-workspace
source_branch: fix/next-semantic-intent-convergence-20261112
base_main_sha: "6cda86bde4aa450abb1d23eedd370a9004ddcbc1"
candidate_sha: "d936da81ebf7d17eb78cc11da0538df000281a4a"
candidate_tree_sha: "276679be1ea139525b2267cde9245b8fb88e9a76"
build_identifier: "n-7E8DgbcVu4g_RJWZoiK"
product_version: NOT AVAILABLE
candidate_version: NOT ASSIGNED
technical_package_version: 0.0.0-dev
release_tag: N/A
served_address: "http://127.0.0.1:3200"
schema_revision: "012_auth_concurrency_safety"
test_data_revision: "sfia_next_recette_ml4 preserved (conversations=171 documents=116 messages=428 preparations=171 projects=16 users=2 sessions=9)"
capabilities:
  openai: "LIVE configured (OPENAI_API_KEY PRESENT; fixture flags ABSENT; TEST_BOUNDARY) — conversation smoke PENDING USER INTERACTION"
  github: "REAL READ verified via installation-token metadata for mcleland147/chantiers360; Studio user-OAuth path PENDING interactive auth"
  github_write: NOT AUTHORIZED
  cursor: NOT TESTED
quality_evidence:
  - "Q1 candidate d936da81 / tree 276679be / isolated BUILD_ID dLmndR07XvR8bViUlUhEW"
  - "Q2 served BUILD_ID n-7E8DgbcVu4g_RJWZoiK"
  - "HTTP /login 200; /api/auth/status CONFIGURED; /api/dev/login 403; /api/portfolio 401"
  - "GitHub App RO smoke HTTP 200 full_name=mcleland147/chantiers360"
known_gaps:
  - "Nora LIVE conversation smoke PENDING USER INTERACTION"
  - "Studio user-OAuth Git READ not E2E without interactive consent"
  - "Login UI still shows DEV test login chrome; API refuses"
  - "TEST_BOUNDARY ceilings on RECETTE"
  - "documentary mutations disabled for Q2"
review_decision: AWAITING CHATGPT REVIEW AND MORRIS Q3
```

---

## 12. Smokes HTTP

| Route | Résultat |
|---|---|
| `GET /login` | 200 ; BUILD_ID HTML `n-7E8DgbcVu4g_RJWZoiK` ; GitHub OAuth CTA présent |
| `GET /` | 307 → `/portfolio` |
| `GET /portfolio` (page) | 200 (CSR shell) |
| `GET /api/portfolio` | **401** `SESSION_INVALID` — protection session OK |
| `GET /settings/integrations` (page) | 200 (CSR shell) |
| `GET /api/integrations/status` | **401** `SESSION_INVALID` |
| `GET /api/auth/status` | 200 `configured:true` provider github-oauth-studio-identity-only |
| `POST /api/auth/sign-in/social` | 200 + URL `github.com/login/oauth/authorize` (client_id présent ; redirect `127.0.0.1:3200/api/auth/callback/github`) |
| `POST /api/dev/login` | **403** `DEV_TEST_LOGIN_DISABLED` |

**Réserve UI :** la page `/login` affiche toujours le panneau « DEV test login » côté client ; l’API refuse. Pas de contournement OAuth observé.

---

## 13. Nora LIVE — configuration, appels, limites

### Configuration

```text
STUDIO_LANE=RECETTE
OPENAI_API_KEY=PRESENT
STUDIO_E2E=ABSENT
STUDIO_FORCE_NORA_FIXTURE=ABSENT
fixtureFlagsRequested=false
SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY
Model requested (code): gpt-6.1-sol (NORA_STUDY_MODEL)
@openai/agents: 0.21.0
OPERATIONAL_PROVISIONAL: interdit hors DEV (confirmé cognitive-policy.ts @ d936da81)
OPERATIONAL_VALIDATED: non disponible
```

### Smoke conversation LIVE

```text
Nora provider actually contacted: NO (conversation path)
Mode observed: UNKNOWN (not exercised)
Response received: NO
Effective cognitive profile: TEST_BOUNDARY (configured)
Model requested: gpt-6.1-sol (NORA_STUDY_MODEL)
Model applied: N/A
Provider error: N/A
Tool calls observed: N/A
D2/D4/D5/D6 effects: 0
Status: PENDING USER INTERACTION — session Pilote légitime requise ; usurpation interdite
LIVE PROVEN: NO (clé présente ≠ preuve conversation)
```

---

## 14. GitHub REAL READ — configuration, appels, limites

### Configuration App RECETTE

```text
App: sfia-studio-next-recette (expected)
App ID: 5677465 — MATCH code GITHUB_APP_LANE_PROFILES.RECETTE
Installation: 180092114 — MATCH
Repository allowlist: mcleland147/chantiers360 — MATCH
Callback: http://127.0.0.1:3200/api/integrations/github/callback — MATCH
STUDIO_GITHUB_PROVIDER=real
STUDIO_GITHUB_USER_OAUTH=real (env present)
```

### Smoke READ (installation token — borné, 0 write)

```text
Git provider: REAL
GitHub App lane: RECETTE
Installation match: YES
Repository allowlist match: YES
User OAuth state: PENDING (Studio-mediated path not interactively completed in Q2)
REAL READ: VERIFIED (installation-token GET /repos/mcleland147/chantiers360 → 200)
  full_name: mcleland147/chantiers360
  default_branch: main
  pushed_at: 2026-11-08T23:18:12Z
REAL WRITE calls: 0
Branches created: 0
Commits created: 0
PR created: 0
Merge: 0
Note: proves App/installation/repo visibility; not a Studio UI user-OAuth READ proof
```

Artefact : `…/ml4c-q2-20261114/github-app-ro-smoke.json`

---

## 15. Barrière Git WRITE

```text
STUDIO_GITHUB_ALLOW_MUTATIONS empty ≠ documentary → mutationsAllowed=false
Code gate (real-github-provider.ts): only value "documentary" opens barrier
Q2 action: commented out prior documentary value in local env; start script forces empty
chantiers360 mutations: 0
PR sandbox #18: not touched
```

---

## 16. Sessions / cookies

```text
Lane-scoped cookie name pattern: sfia_studio_session__RECETTE
Better Auth via BETTER_AUTH_URL=http://127.0.0.1:3200
Active DB sessions (unrevoked, unexpired): 9 (preserved; not reset)
DEV login adapter: API 403 on RECETTE
Cross-lane: DEV :3100 idle ; distinct PG :5433
```

---

## 17. Contrôle DEV / STABLE

```text
DEV port 3100: unchanged / not listening
DEV database :5433: not used by RECETTE process
STABLE: no intervention
main / PR #676: no push, no merge
Product candidate commit: local only, unmodified
```

---

## 18. Rollback

```text
rollback_required: NO
rollback_attempted: NO
rollback_result: N/A
previous_build_restored: N/A — previous available
RECETTE_data_preserved: YES
Procedure ready: rollback-to-67bf6b0b.sh (application-only; not a data rollback)
```

---

## 19. Matrice Q2-01…16

| ID | Critère | Verdict | Preuve |
|---|---|---|---|
| Q2-01 | Commit source exact | **PASS** | `d936da81` local product + deploy WT |
| Q2-02 | Tree exact | **PASS** | `276679be` |
| Q2-03 | Worktree isolé | **PASS** | dedicated `…-recette-build-d936da81` |
| Q2-04 | Build figé | **PASS** | `n-7E8DgbcVu4g_RJWZoiK` served |
| Q2-05 | Source affichée cohérente | **PASS** | SHA/tree/env/start script/BUILD_ID aligned (B-03 corrected) |
| Q2-06 | Port 3200 next start | **PASS** | PID 41282 CWD new WT |
| Q2-07 | PostgreSQL RECETTE | **PASS** | `sfia_next_recette_ml4@5434` schema 012-compatible |
| Q2-08 | Données préservées | **PASS** | counts identical |
| Q2-09 | Sessions / OAuth | **PASS** (config) | OAuth URL + DEV login 403 ; interactive login not completed |
| Q2-10 | Nora LIVE | **BLOCKED** / PENDING USER INTERACTION | configured LIVE ; conversation smoke not run |
| Q2-11 | GitHub REAL READ | **PASS** (App/install READ) ; Studio user path PENDING | installation metadata 200 |
| Q2-12 | Git REAL WRITE | **PASS** | barrier inactive ; 0 mutations |
| Q2-13 | DEV | **PASS** | unchanged |
| Q2-14 | STABLE | **PASS** | no intervention |
| Q2-15 | Rollback | **PASS** | old WT + script preserved |
| Q2-16 | Manifeste | **PASS** | `ops/recette-manifest-q2.yaml` + this pack |

---

## 20. Réserves et risques Q3

Six FAIL prioritaires (journal `c4b4209c…`) inchangés — non rejoués :

- S03-01, S04-01, S04-02, S04-04, S04-06, S07-06

BLOCKED dépendants D4 / HumanDecision / Git WRITE : S03-02…07, S06-02…06, S06-11, S07-01 — à réévaluer en Q3 après premier D4 réel + GO WRITE distinct.

Préconditions Q3 :

1. Pilote se reconnecte OAuth sur `:3200` (sessions Better Auth peuvent nécessiter re-login après bascule).
2. Nora LIVE conversation smoke sous session réelle avant scénarios S03/S04.
3. Consentement GitHub App user OAuth si requis pour lectures Studio-mediated.
4. `TEST_BOUNDARY` peut plafonner continuité longue — ne pas confondre avec perf opérationnelle.
5. WRITE documentaire toujours OFF jusqu’à GO Q4 borné.

---

## 21. Absence de campagne utilisateur

Aucun des 53 cas du journal n’a été exécuté ni verdict modifié.

---

## 22. Gates Morris non consommés

- Q3 campagne utilisateur
- Q4 Git REAL WRITE / HumanDecision publication
- OPERATIONAL_VALIDATED / calibration cognitive
- STABLE / merge / release / ADOPTED
- Push produit / merge PR #676

---

## 23. Nouveaux artefacts non secrets (cycle Q2)

```text
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/start-recette.sh
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/rollback-to-67bf6b0b.sh
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/com.sfia.studio.next.recette.ml4.plist
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/switch-plan.md
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/ops/recette-manifest-q2.yaml
/Users/morris/Projects/sfia-recette-backups/ml4c-q2-20261114/* (identity, fingerprints, smoke JSON, env key inventory)
LaunchAgents plist updated → new start script
Local env: SFIA_SOURCE_SHA aligned ; STUDIO_GITHUB_ALLOW_MUTATIONS cleared
```

Aucun secret dans ces artefacts de rapport.

---

## 24. Handoff distant et preuve de relecture

**État au moment de la rédaction de ce pack (avant publication L3) :**

```text
Publication: EN ATTENTE — scripts/sfia/publish-review-handoff.sh
Branche cible: sfia/review-handoff
Fichier: sfia-review-handoff/latest-chatgpt-review.md
Parent tip courant: 2afd7b576785a50ebbf9c0a6106479cad1f79da1
```

**Le rapport final Cursor post-publish doit distinguer cet instantané des SHA/blob distants définitifs après readback.**

Ne pas affirmer de relecture distante avant exécution.

---

## 25. Verdict

**ML4C Q2 DEPLOYED — PROVIDER READINESS INCOMPLETE**

Justification :

- Candidat Q1 exact servi (`d936da81` / `276679be` / BUILD `n-7E8DgbcVu4g_RJWZoiK`)
- Base/schéma compatibles ; données préservées
- Environnement isolé ; B-03 corrigé ; write barrier inactive
- HTTP / OAuth config / DEV login refuse PASS
- GitHub App REAL READ metadata VERIFIED
- Nora LIVE conversation **non** prouvée (PENDING USER INTERACTION)
- Studio user-OAuth Git READ path PENDING
- Rollback disponible ; pas de campagne Q3

**Ne pas autoriser automatiquement Q3 pour scénarios dépendant d’une preuve Nora LIVE conversationnelle non obtenue.**

---

## Instruction §9.1 — relecture Git destinée à ChatGPT

Après publication L3, ChatGPT doit relire **uniquement** le blob distant du handoff :

1. Branche `sfia/review-handoff`
2. Fichier `sfia-review-handoff/latest-chatgpt-review.md`
3. Utiliser le **commit SHA** et **blob SHA** définitifs reportés dans le rapport final Cursor post-publish (section HANDOFF / REMOTE READBACK)
4. Ne pas se fier à un pack local `.tmp-sfia-review/` ni à un instantané « publication en attente »

*(Les identifiants définitifs seront complétés immédiatement après `publish-review-handoff.sh`.)*

---

*Fin Review Pack FULL — ML4C Q2 — instantané pré-publication L3*
