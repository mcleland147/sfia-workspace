# STUDIO-PRODUCT-CREATE-SERVER-REPO-CONFIG-01
# Cycle 7 — Intégration / DevOps — Standard — INC / runtime configuration
# LOCAL RUNTIME CONFIGURATION VERIFIED
# NO PRODUCT REAL — NO FocusFlow CREATE IN THIS CYCLE

## Date / heure
2026-09-23T20:56:00+02:00 (Europe/Paris)

## Macro-cycle
STUDIO-PRODUCT-CREATE-SERVER-REPO-CONFIG-01

## Objectif
Débloquer Create Project Product sans affaiblir le fail-closed server-owned RepositoryBinding.

## Erreur utilisateur observée
```
PROJECT_CREATION_FAILED
PROJECT_INVALID
"Configuration dépôt server-owned absente (identité et remote URL requises). Création Product refusée — aucun Project partiel."
```
UI: `/studio/projects/new` — aucun Project partiel créé (comportement fail-closed correct).

## Local Git Truth
- Repo: `mcleland147/sfia-workspace`
- origin: `https://github.com/mcleland147/sfia-workspace.git`
- Branch: `fix/sfia-studio-product-real-readiness-pathroot-semantics`
- HEAD: `128f3b7eb49cbba05d7735d5edc41a27822b0dee`
- HEAD tree: `400d608e2a0be9b182925c46cd204a24cb1e0034`
- `origin/main`: `66ffc0d2370d9ed7014348fd25994ce1cda3b3ad` — MATCH qualified
- `origin/main` tree: `400d608e2a0be9b182925c46cd204a24cb1e0034` — MATCH
- staged: empty
- dirty before cycle: `.tmp-sfia-review/chatgpt-review.md` only
- dirty after: `.tmp-sfia-review/chatgpt-review.md` + `projects/sfia-studio/app/.env.example`

## Convergence blobs (origin/main)
All expected anchors MATCH (Build Doctrine, Roadmap, C1, framing 34/36, template, routing).

## Sources lues
- `serverOwnedRepositoryConfig.ts` — resolve + describe gap (fail-closed CORRECT)
- `localProjectComposition.ts` — CR-PWR-04 fail before persistence (CORRECT)
- `createProject.ts` — uses resolveServerOwnedRepositoryConfig
- `.env.example` (pré-correction: 3 clés ABSENTES)
- tests: `projectWorkspaceArtifactRouting.d0.test.ts`, `localProjectComposition.test.ts`
- template / routing / Build Doctrine / Roadmap / C1 / framing 34+36 (blob-verified)

## Runtime diagnostic
- Port 3020 served from: `…/projects/sfia-studio/app` (next-server)
- `.env.local` existed: **yes**
- `.env.local` gitignored: **yes** (`app/.gitignore` → `.env.*`)
- `.env.local` tracked: **no**
- AVANT — trois variables server-owned:
  - IDENTITY: present=no nonempty=no
  - REMOTE_URL: present=no nonempty=no
  - DEFAULT_BRANCH: present=no nonempty=no
- Message UI = exact text de `describeServerOwnedRepositoryConfigGap` quand identity+remote absents

## Root cause
**Configuration runtime locale absente** — pas un défaut Product domain.
`resolveServerOwnedRepositoryConfig` et fail-closed Create sont corrects.
Les clés n'étaient pas dans `.env.local` après rehydration / nouvelle campagne.

## Correction locale (.env.local)
- existed before: yes
- ignored: yes
- modified: yes (upsert des 3 clés uniquement; secrets préservés REDACTED)
- APRÈS:
  - identity configured: **yes** → `mcleland147/sfia-workspace`
  - remote configured: **yes** → `https://github.com/mcleland147/sfia-workspace.git`
  - defaultBranch: **main**
- SECRETS: NEVER printed (BETTER_AUTH_*, GITHUB_CLIENT_SECRET, OPENAI_API_KEY, etc.)

## Runtime restart
- performed: **yes**
- process identified as Studio Next on this repo: **yes**
- port 3020 healthy after restart: **yes** (HTTP 307 → /login)
- cwd: `projects/sfia-studio/app`
- Next loads `.env.local` at boot (not necessarily visible in `ps` environ — expected)

## Validation resolve (file → domain)
- `resolveServerOwnedRepositoryConfig(.env.local)` → non-null
- identity / remote / defaultBranch as above
- empty env still returns null + same gap message (fail-closed preserved)

## Gap versionné `.env.example`
- modified: **yes**
- justification: Product Create normal dépend de ces 3 vars; example ne les documentait pas
- placeholders génériques only (`owner/repository`, `https://github.com/owner/repository.git`)
- no `NEXT_PUBLIC_*`
- no hardcoded `mcleland147/sfia-workspace` in example
- **not committed / not pushed** this cycle (project push/PR interdit)

### DIFF: projects/sfia-studio/app/.env.example
```diff
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index 57636a01..9a4854c7 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -16,6 +16,24 @@ GITHUB_CLIENT_SECRET=replace-with-github-oauth-app-client-secret
 # Example placeholders only (not real accounts):
 SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222

+# ---------------------------------------------------------------------------
+# Server-owned Product Create — RepositoryBinding (CR-PWR-04 / D-PC-09)
+# ---------------------------------------------------------------------------
+# Explicit server-owned repository identity for normal Product Project create.
+# Never accept browser/client-supplied binding. Never infer from cwd/origin.
+# Never set NEXT_PUBLIC_* for these keys.
+#
+# Required for Product Create via LocalProjectComposition:
+# - IDENTITY (owner/repo) and REMOTE_URL (https://… or git@…) must both be set
+# - DEFAULT_BRANCH is optional; domain falls back to "main" when blank
+# Absent/invalid identity or remote → fail-closed PROJECT_CREATION_FAILED /
+# PROJECT_INVALID — no partial Project is persisted.
+#
+# Placeholders only (replace with your deployment's server-owned values):
+SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY=owner/repository
+SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL=https://github.com/owner/repository.git
+SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
+
 # ---------------------------------------------------------------------------
 # Server-owned managed repository base (docs_write REAL composition)
 # ---------------------------------------------------------------------------
```

## Code applicatif
- Product domain / createProject / fail-closed: **unchanged** (correct by design)
- No SQL, no FocusFlow create, no architecture change

## Tests
```
npx vitest run \
  __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts \
  __tests__/vertical-slice-core/localProjectComposition.test.ts
```
- Result: **2 files / 39 tests PASSED**

## Invariants
- fail-closed absent-config: **preserved**
- Product Create automatique FocusFlow: **0**
- Product DB project count: **0** (unchanged)
- DB SHA campaign `new-project-campaign-01`: `8cfeaa8751f296206d07fa66f34a96602ae54c04d04851b61a6c1df297b2f3fd` unchanged
- Cursor REAL spawn: **0**
- project push/PR/merge: **0**
- runtime v3: **NON ADOPTED**
- Product Completion/C6: **not reopened**
- Nora Cognitive Completion priority: **preserved**

## Fichiers
| Path | Action |
|------|--------|
| `projects/sfia-studio/app/.env.local` | local upsert (ignored) |
| `projects/sfia-studio/app/.env.example` | versioned content updated (uncommitted) |
| Product source | none |

## Réserves
- `.env.example` reste uncommitted sur la branche courante — livraison Git projet nécessite un GO Delivery séparé si Morris veut versionner le gap.
- Tentative UI FocusFlow **non effectuée** dans ce cycle (réservée à Morris).
- Managed repo base (`SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`) non traitée ici (hors scope Create).

## Actions Morris après PASS
1. Relancer Create Project UI pour `FocusFlow` sur http://localhost:3020/studio/projects/new
2. Décider si commit/PR de `.env.example` (GO Delivery séparé)

## Verdict
**STUDIO-PRODUCT-CREATE-SERVER-REPO-CONFIG-01 — PASS — READY FOR MORRIS UI RETRY**

## Fake / Real
- Niveau preuve: `LOCAL RUNTIME CONFIGURATION VERIFIED`
- Claims interdits: Product Journey complete / REAL proven / runtime v3 ADOPTED — **none claimed**

## CHATGPT REVIEW REQUIRED — READ REMOTE CANONICAL HANDOFF BEFORE VERDICT
