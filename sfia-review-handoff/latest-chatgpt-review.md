# SFIA Studio Next — Review Pack FULL — E08 GLOBAL GITHUB CAPABILITY AUDIT

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 08:35 CET (Europe/Paris) |
| Contrat | CRITICAL · INC/EVOL/QA · audit exhaustif capacités GitHub bout-en-bout |
| Branche projet | `feat/next-ensemble08-git-publications-nora` |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Push projet / PR / merge projet | **NONE** |
| Product versioning | **NO RELEASE** · STABLE NOT AVAILABLE |
| E08 ADOPTED | **NON** |

## 1. Git Truth

| Élément | Valeur |
| --- | --- |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche active | `feat/next-ensemble08-git-publications-nora` (ahead 13 de origin/main) |
| SOURCE_SHA (candidat) | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID (worktree détaché) | `hLsmHa3uFYP0PgRtj49Bh` |
| Parent | `2a607fb0742b2ec1287b5f396d9c51120a95f415` |
| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-gitaudit-build-79188f6c` |
| RECETTE servi (inchangé) | SOURCE `c67a6ba8…` · BUILD `tEiDqhhGWNipSWO_86ZoG` · `http://127.0.0.1:3200` · service `ml4d-ux004` |
| Cutover | **NOT EXECUTED** — RECETTE GO REQUIRED sur nouveau triplet |

## 2. Sources / décisions

- SFIA v2.6 Delivery Critical · Fake/Real · Review Pack FULL · Handoff L3
- Contrats E08 fonctionnel + architecture/acceptation ; PV GIT-UAT-01..08
- Décision 12/11/2026 qualification sémantique (pas de verb-list)
- Handoffs antérieurs : `87ca92cf…` (chaîne) · `189f769e…` (PR read)
- Code local effectif primer sur docs

## 3. Objectif & frontières

Nora doit comprendre / déclencher / suivre / vérifier / restituer les opérations Git prévues **sans** nouveau moteur.
D3 qualification+outils READ · D4 docs · D6 autorité · D7 plan · D8 faits · D9 GitHub.
Lecture ≠ écriture ; SCRIPTED ≠ LIVE ; dispatched ≠ completed ; config ≠ comportement prouvé.

## 4. Matrice complète (as-built)

Voir aussi `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md`.

```markdown
# Matrice capacités Git — chaîne Nora ↔ Studio ↔ GitHub (2026-11-22)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 ≈ 08:30 CET |
| Macro-lot | Audit exhaustif + fiabilisation capacités GitHub bout-en-bout |
| Profil | CRITICAL · NO RELEASE |
| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · HEAD `16f9961e…` · fichier `references-externes-enseignements-chantiers360.md` |
| Oracle live (ce lot) | OPEN · merged=false · base=main · 1 commit · 1 fichier (`gh api`) |

Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · OUT = hors contrat E08 · FIX = corrigé ce lot · BLOQUÉ = gate ouvert

## A. Dépôts et identités

| Capacité | Owner | Service | Accès | Nora / mission | Exposition | Schema | Sélection NL | Identité | Perm GH | Runtime | D6 | D7 | D9 | D8 | Reprise | Restitution | Tests | Preuve | Statut |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Lister dépôts autorisés | D9 | `listProjectGitSources` | REAL/SCRIPTED | `list_project_git_sources` | oui | `{}` | oui | pilot+project | metadata | CONNECTED+ATTACHED | n/a | n/a | gate | — | n/a | tool | unit/PG/e2e | DET/BR | **IN OK** |
| Permissions dépôt | D9 | permissionsJson → sources | REAL | via `list_project_git_sources` | **FIX** champ `permissions` | Record | oui | pilot+project | snapshot Studio | CONNECTED | n/a | n/a | yes | — | n/a | tool | unit | DET | **FIX** |
| Connexion / install App | Int | auth + App | REAL | UI + status | UI 11.06 | — | partiel | OAuth≠App | install | RECETTE | n/a | n/a | yes | — | n/a | UI | e2e 11.06 | BR | OK UAT |
| Rattachement projet | Int | project_git_links | REAL | UI | UI | — | UI | project | — | ATTACHED | n/a | n/a | yes | — | n/a | UI | e2e | BR | OK UAT |
| Branche défaut | D9 | defaultBranch sources | REAL | tool | oui | — | oui | — | metadata | yes | n/a | n/a | yes | — | n/a | tool | DET | DET | OK |
| READ/WRITE séparés | D9 | allowlists | REAL | gate write | config | — | — | App | contents R/W | documentary | mandate | yes | assertWritable | — | — | refus | unit | DET | OK |
| Refus / révocation | Int/D9 | fail-closed | REAL | tools → DENIED | oui | — | — | — | 401/403 | yes | n/a | n/a | yes | — | — | DENIED | unit | DET | OK |

## B. Branches et références

| Capacité | Owner | Service | Nora | D6 | Preuve | Statut |
|---|---|---|---|---|---|---|
| Lister branches | D9 | `listGitRefs` | `list_git_refs` | n/a | DET/RR | **IN OK** |
| HEAD / existence ref | D9 | `getRefSha` + exact resolve | `list_git_refs` | n/a | DET/RR | **IN OK** |
| Comparer refs | D9 | SHAs distincts via tools | tools | n/a | DET | PARTIAL (pas de diff tool dédié) |
| Créer branche | D7/D9 | dispatch publication | mission D6/D7 | mandate | DET/PG | **IN OK** (mission) |
| Supprimer branche | D7/D9 | accepted UAT | mission | mandate | BR hist. | OK UAT — non rejouée |

## C. Fichiers et documents

| Capacité | Owner | Service | Nora | Preuve | Statut |
|---|---|---|---|---|---|
| Arborescence | D9 | `listGitDirectory` | `list_git_directory` | DET/BR | **IN OK** |
| Lire fichier @ ref | D9 | `readGitFile` | `read_git_file` | DET/RR | **IN OK** |
| Présence / absence | D9 | FILE_ABSENT qualifié | tool statuses | DET/RR | **IN OK** |
| Blob vs commit | D9 | permalink rules | tool provenance | DET | **IN OK** |
| Comparer versions | D3/D9 | deux reads | tools | DET | PARTIAL (pas de diff hunk tool) |
| Préparer / publier fichier | D4/D7/D9 | mission publication | mission | DET/PG/RR | **IN OK** (mission) |
| Vérifier contenu publié | D9/D8 | read + D8 | tools+faits | RR PR#19 | **IN OK** |

## D. Commits et publications

| Capacité | Owner | Nora / mission | Preuve | Statut |
|---|---|---|---|---|
| Historique commits | D9 | **OUT/PARTIAL** — pas d’outil `list_commits` E08 | — | **OUT** (pas d’ajout gratuit) |
| Commit précis / diff | D9 | PARTIAL via read+PR files | RR | PARTIAL |
| Créer commit documentaire | D7/D9 | mission | DET/PG/RR | **IN OK** |
| Retrouver SHA / branche | D8/D3 | restitution+tools | DET/RR | **IN OK** (**FIX** restitution antérieure) |
| Publication D7/D8 | D7/D8 | snippets+view | DET/PG | **IN OK** |
| Anti-doublon | D7 | correlation_key | DET/PG | **IN OK** |
| API distant ≠ push local | D9 | GitHub API only | DET | **IN OK** |

## E. Pull requests

| Capacité | AVANT | APRÈS (ce lot) | Owner | Nora | Preuve | Statut |
|---|---|---|---|---|---|---|
| Lire PR par numéro | D9 only → `read_git_pull_request` (lot précédent) | inchangé + token parity install→user | D9 | `read_git_pull_request` | DET/RR | **IN OK** |
| Lister / trouver PR | **GAP** — `findPullRequest` D9 non exposé Nora | **FIX** `list_git_pull_requests` + `listGitPullRequests` | D9 | `list_git_pull_requests` | DET | **FIX** |
| Fichiers modifiés PR | **GAP** — `listPullRequestFilesRemote` non raccordé provider/Nora | **FIX** provider + `list_git_pull_request_files` | D9 | `list_git_pull_request_files` | DET/RR (gh) | **FIX** |
| État / head / base / SHA | oui via read | oui | D9 | tool | RR #19 | **IN OK** |
| Mergeability / compteurs | oui (enrichi) | oui | D9 | tool | DET/RR | **IN OK** |
| Checks/protections | merge path only | inchangé | D9 | mission merge | DET | PARTIAL |
| Ouvrir PR | mission D6/D7 | inchangé | D7/D9 | mission | RR hist. | **IN OK** (mission) |
| Restituer n°/URL | **FIX** restitution antérieure | conservé | D3/D8 | restitution | DET/PG | **IN OK** |

## F. Merge

| Capacité | Statut | Gate |
|---|---|---|
| Identifier PR / cible / HEAD | IN via read tools | — |
| Checks / droits | PARTIAL | provider |
| Mandat D6 **distinct** | IN | PUBLISH ≠ MERGE |
| Exécuter merge | IN code path | **GIT-UAT-08 / REAL effect — BLOQUÉ** ce cycle (pas de GO merge) |
| Constater / restituer | IN sur fait MERGE | — |

## G. Erreurs et reprise

| Cas | Traitement | Preuve |
|---|---|---|
| 403 / 404 | DENIED / AMBIGUOUS / NOT_FOUND classifiés | DET |
| Dépôt non autorisé | ACCESS_DENIED allowlist | DET |
| Ref introuvable | REF_UNRESOLVED | DET |
| Branche protégée | refuse mutation main/master | DET |
| Conflit / stale HEAD | CONFLICT path | DET/PG |
| Token / provider | fail-closed + retry install→user READ | DET (code) |
| Timeout / ACK perdu / UNKNOWN | SCRIPTED faults + UI banner clarifié | DET |
| Double demande / idempotence | correlation_key | DET/PG |
| Reprise conversation | mission continuity + toolScope | DET/PG |
| Résultat obsolète | live re-read ≠ D8 historique | DET/RR |

## Outils Nora exposés (READ) — inventaire runtime

| Outil | Allowlist | Budget | Mutation |
|---|---|---|---|
| `list_project_git_sources` | oui | D4 chars/calls | non |
| `read_git_file` | oui | oui | non |
| `list_git_refs` | oui | oui | non |
| `list_git_directory` | oui | oui | non |
| `read_git_pull_request` | oui | oui | non |
| `list_git_pull_requests` | **FIX oui** | oui | non |
| `list_git_pull_request_files` | **FIX oui** | oui | non |

Écritures : **aucune** via outil LLM direct — uniquement qualification → D6 → D7 → D9 → D8 → restitution D3.

## Chemins mission D6/D7 (écritures)

| Effet | Capability | Mandat | Preuve |
|---|---|---|---|
| Publication documentaire | `d7.publish_*` / publication plan | HumanDecision USER | DET/PG / RR hist. PR#19 |
| Merge | `d7.merge_publication` | mandat **distinct** | DET ; REAL **BLOQUÉ** |
| Create branch / commit / PR | steps plan | sous publication | DET/PG |

## Faits D8 oracle PR#19 (RECETTE DB — non mutés)

| Champ | Valeur |
|---|---|
| Attempt | `efx_cf6763da…` COMPLETED |
| Publication ref | `dpr_7f10c5e4…` PR_OPEN |
| Repo | `mcleland147/chantiers360` |
| PR | #19 |
| HEAD | `16f9961ef2ee6d13235e56059313f691521947fd` |
| Path | `references-externes-enseignements-chantiers360.md` |
| mergeObserved | false |

## Capacités OUT (contrat E08 — non ajoutées)

- Historique commits générique (`list_commits`)
- Diff hunks arbitraires
- Gestion labels/reviewers/assignees PR
- Force-push / protection bypass
- Merge REAL sans GO GIT-UAT-08

## Corrections ce macro-lot

1. `list_git_pull_requests` + resource `listGitPullRequests` + provider `listPullRequests` (head/base optionnels).
2. `list_git_pull_request_files` + resource + provider (raccord `listPullRequestFilesRemote`).
3. `listProjectGitSources.permissions` sanitizé depuis `permissions_json`.
4. REAL PR READ token : installation d’abord, fallback user OAuth sur 401/403 (`withReadToken`).
5. Allowlist cognitive + consigne Nora adapter mises à jour.
6. Tests unit exposition + scripted list/files read-only.

## Gates ouverts

| Gate | Cause | Owner |
|---|---|---|
| REAL WRITE / nouvelle mutation | Mandat : pas de mutation test sans acte | Morris |
| GIT-UAT-08 merge réel | Hors autorisation cycle | Morris |
| Nora LIVE E2E sélection outil | Browser/LIVE post-cutover | Morris UAT |
| Cutover RECETTE nouveau triplet | ENV-01 + GO sur SHA/TREE/BUILD | Morris |
| Product versioning | NO RELEASE / STABLE NOT AVAILABLE | — |

```

## 5. Anomalies AVANT → corrections APRÈS

| # | Anomalie | Cause | Correction | Owner |
| --- | --- | --- | --- | --- |
| P0-1 | Impossible de lister/trouver une PR sans numéro | `findPullRequest` / `listPullRequestsRemote` non exposés Nora | `list_git_pull_requests` + `listGitPullRequests` + provider `listPullRequests` ; head/base optionnels | D3/D9 |
| P0-2 | Fichiers PR non consultables via Nora | `listPullRequestFilesRemote` non raccordé provider/Nora | provider `listPullRequestFiles` + `list_git_pull_request_files` | D9/D3 |
| P0-3 | Permissions dépôt invisibles au Pilote conversationnel | `listProjectGitSources` sans permissions | champ `permissions` sanitizé depuis `permissions_json` | D9 |
| P0-4 | PR READ REAL exigeait user OAuth alors que blob/ref utilisent App | `getPullRequest`/`findPullRequest` user-only | `withReadToken` install→user fallback 401/403 ; mutations restent user-only | D9 |
| Conservé | Écritures via mission D6/D7 | design correct | aucun outil LLM write | D6/D7 |
| OUT | Historique commits générique / diff hunks / merge REAL | hors contrat / GIT-UAT-08 | non ajouté | — |

## 6. Outils Nora exposés (READ)

`list_project_git_sources`, `read_git_file`, `list_git_refs`, `list_git_directory`, `read_git_pull_request`, **`list_git_pull_requests`**, **`list_git_pull_request_files`** — tous allowlistés cognitive-policy.

Écritures : qualification → D6 HumanDecision → D7 plan → D9 → D8 → restitution D3.

## 7. Chaîne d'autorité / D7/D9/D8

- Publication documentaire : mandat USER ; PR#19 attempt `efx_cf6763da…` COMPLETED ; D8 PR_OPEN ; mergeObserved=false
- Merge : capability `d7.merge_publication` mandat **distinct** — **BLOQUÉ** REAL ce cycle
- Idempotence : correlation_key conservée

## 8. Preuves

| Suite | Résultat | Niveau |
| --- | --- | --- |
| `tsc --noEmit` | PASS | DET |
| unit `tests/unit` | **820/820 PASS** (env GitHub shell nettoyé ; .env.local 5433) | DET |
| PG mission-continuity + publication-nora-cloture + publication-target-post-uat | **17/17 PASS** | DET/PG |
| REAL READ `gh api` PR#19 | OPEN · merged=false · head `16f9961e…` · base main · 1 commit · 1 fichier `references-externes…md` | RR |
| Browser/Playwright Nora LIVE sélection outils | **NOT PROVEN** ce lot | — |
| REAL WRITE / merge | **NOT** (gates) | — |
| Cutover RECETTE | **NOT** | — |

Commandes unit :

```bash
cd projects/sfia-studio-next/web
env -u DATABASE_URL -u GITHUB_APP_ID -u GITHUB_APP_INSTALLATION_ID npx vitest run tests/unit
```

## 9. Diffs complets (macro-lot `2a607fb0..79188f6c`)

### Stat

```
 .../construction/delivery-history.md               |  14 ++
 .../ensemble-08-git-et-publications/as-built.md    |  11 ++
 .../matrice-capacites-git-chaine-2026-11-22.md     | 206 +++++++++++++++------
 .../src/domains/conversation/cognitive-policy.ts   |   4 +
 .../web/src/domains/conversation/git-read-tools.ts | 123 ++++++++++++
 .../web/src/domains/conversation/nora-adapter.ts   |   2 +-
 .../src/domains/integrations/github-app-auth.ts    |  29 ++-
 .../src/domains/integrations/github-provider.ts    |  25 +++
 .../domains/integrations/real-github-provider.ts   | 125 +++++++++++--
 .../src/domains/integrations/resource-service.ts   | 121 +++++++++++-
 .../integrations/scripted-github-provider.ts       |  66 +++++++
 .../web/src/domains/integrations/types.ts          |   5 +
 .../web/tests/unit/read-git-pull-request.test.ts   |  20 +-
 13 files changed, 655 insertions(+), 96 deletions(-)

```

### Code (`web/src`)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index c98f7321..1e09a0bd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -92,6 +92,8 @@ export type CognitivePolicy = {
     | "list_git_refs"
     | "list_git_directory"
     | "read_git_pull_request"
+    | "list_git_pull_requests"
+    | "list_git_pull_request_files"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -219,6 +221,8 @@ export function buildCognitivePolicy(
     "list_git_refs",
     "list_git_directory",
     "read_git_pull_request",
+    "list_git_pull_requests",
+    "list_git_pull_request_files",
   ];
 
   return {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index 63565c83..76fe8e6d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -4,6 +4,8 @@ import {
   READ_NOT_FOUND_UNQUALIFIED,
   REF_UNRESOLVED,
   listGitDirectory,
+  listGitPullRequestFiles,
+  listGitPullRequests,
   listGitRefs,
   listProjectGitSources,
   readGitFile,
@@ -460,5 +462,126 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         }
       },
     }),
+    tool({
+      name: "list_git_pull_requests",
+      description:
+        "List or find live pull requests on an attached GitHub repository (READ only, bounded). " +
+        "Optional head/base filters (branch names). Default state=open. " +
+        "Use when the PR number is unknown (e.g. find PR for a publication branch). " +
+        "Then call read_git_pull_request for full metadata on a specific number. Never merges.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        head: z.string().nullable().optional(),
+        base: z.string().nullable().optional(),
+        state: z.enum(["open", "closed", "all"]).nullable().optional(),
+      }),
+      execute: async (args) => {
+        if (scope.budget.remainingCalls <= 0) {
+          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        }
+        scope.budget.remainingCalls -= 1;
+        try {
+          const result = await listGitPullRequests({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            head: args.head ?? undefined,
+            base: args.base ?? undefined,
+            state: args.state ?? "open",
+          });
+          const payload = {
+            ...result,
+            coverage: (result.incompleteCoverage ? "PARTIAL" : "COMPLETE") as ToolCoverage,
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.list_git_pull_requests",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              matched_count: result.matchedCount,
+              incomplete: result.incompleteCoverage,
+              chars_charged: charsCharged,
+            },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          const payload = {
+            status: "DENIED" as const,
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance: "Liste PR refusée — ne pas inventer de numéros de PR.",
+            authorityReminder: "list_git_pull_requests never authorizes merge.",
+            charsCharged: 0,
+          };
+          return payload;
+        }
+      },
+    }),
+    tool({
+      name: "list_git_pull_request_files",
+      description:
+        "List changed files for a live pull request (READ only, bounded). " +
+        "Returns filename/status/additions/deletions. Never merges. " +
+        "Use after read_git_pull_request or list_git_pull_requests when file paths are required.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        prNumber: z.number().int().positive(),
+      }),
+      execute: async (args) => {
+        if (scope.budget.remainingCalls <= 0) {
+          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        }
+        scope.budget.remainingCalls -= 1;
+        try {
+          const result = await listGitPullRequestFiles({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            prNumber: args.prNumber,
+          });
+          const payload = {
+            ...result,
+            coverage: (result.incompleteCoverage ? "PARTIAL" : "COMPLETE") as ToolCoverage,
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.list_git_pull_request_files",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              pr_number: result.prNumber,
+              file_count: result.files.length,
+              chars_charged: charsCharged,
+            },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          const status =
+            err.code === "NOT_FOUND"
+              ? ("AMBIGUOUS" as const)
+              : err.code === "INVALID_REQUEST"
+                ? ("INVALID_REQUEST" as const)
+                : ("DENIED" as const);
+          const payload = {
+            status,
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance: "Fichiers PR inaccessibles — ne pas inventer de chemins.",
+            authorityReminder: "list_git_pull_request_files never authorizes merge.",
+            charsCharged: 0,
+          };
+          return payload;
+        }
+      },
+    }),
   ];
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index afb4bf19..81daf52d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -129,7 +129,7 @@ const SYSTEM_INSTRUCTIONS = [
   "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils; n'invente jamais d'URL /blob/{blobSha}/… ; utilise permalink seulement si commitShaVerified=true.",
   "- Lecture Git: AVAILABLE = contenu; FILE_ABSENT = chemin absent à une ref tip vérifiée (pas une autorisation d'écriture); DENIED/REF_UNRESOLVED/AMBIGUOUS/UNAVAILABLE = aucune conclusion d'absence ni de CREATE.",
-  "- Consultation PR: utiliser `read_git_pull_request` (après `list_project_git_sources`) pour le statut live open/closed/merged, branches, HEAD/base SHA, mergeability et compteurs. Ne jamais affirmer que les outils ne permettent pas de lire une PR si cet outil est disponible. Ne jamais fusionner via un outil de lecture. Un fait D8 historique ne remplace pas une observation live.",
+  "- Consultation PR: `list_project_git_sources` → `list_git_pull_requests` (trouver par branche head/base si numéro inconnu) → `read_git_pull_request` (statut live open/closed/merged, HEAD/base SHA, mergeability) → `list_git_pull_request_files` (chemins modifiés). Ne jamais affirmer que les outils ne permettent pas de lire/lister une PR si ces outils sont disponibles. Ne jamais fusionner via un outil de lecture. Un fait D8 historique ne remplace pas une observation live. `list_project_git_sources` expose aussi les permissions Studio sanitizées du dépôt (sans secrets).",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");
 
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 29a8c688..1c85d9b7 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -709,9 +709,11 @@ export async function createPullRequestRemote(input: {
 export async function listPullRequestsRemote(input: {
   token: string;
   fullName: string;
-  head: string;
-  base: string;
+  /** Optional — when omitted, lists repo PRs by state only (bounded). */
+  head?: string;
+  base?: string;
   state?: "open" | "closed" | "all";
+  perPage?: number;
   fetchImpl?: GitHubFetch;
 }): Promise<
   Array<{
@@ -728,15 +730,20 @@ export async function listPullRequestsRemote(input: {
 > {
   const fetchImpl = input.fetchImpl ?? fetch;
   const { owner, name } = parseFullName(input.fullName);
-  const headShort = input.head.replace(/^refs\/heads\//, "");
-  const baseShort = input.base.replace(/^refs\/heads\//, "");
-  // GitHub expects head as owner:branch for cross-fork; same-repo uses owner:branch too.
+  const perPage = Math.max(1, Math.min(input.perPage ?? 10, 30));
   const q = new URLSearchParams({
     state: input.state ?? "open",
-    head: `${owner}:${headShort}`,
-    base: baseShort,
-    per_page: "10",
+    per_page: String(perPage),
   });
+  // GitHub expects head as owner:branch for cross-fork; same-repo uses owner:branch too.
+  if (input.head?.trim()) {
+    const headShort = input.head.replace(/^refs\/heads\//, "");
+    q.set("head", `${owner}:${headShort}`);
+  }
+  if (input.base?.trim()) {
+    const baseShort = input.base.replace(/^refs\/heads\//, "");
+    q.set("base", baseShort);
+  }
   const raw = await ghJson<
     Array<{
       number: number;
@@ -751,6 +758,8 @@ export async function listPullRequestsRemote(input: {
     method: "GET",
     headers: { Authorization: `Bearer ${input.token}` },
   });
+  const headFallback = input.head?.replace(/^refs\/heads\//, "") ?? "";
+  const baseFallback = input.base?.replace(/^refs\/heads\//, "") ?? "";
   return (raw ?? []).map((p) => ({
     number: p.number,
     title: p.title,
@@ -758,8 +767,8 @@ export async function listPullRequestsRemote(input: {
     htmlUrl: p.html_url,
     headSha: p.head?.sha ?? "",
     baseSha: p.base?.sha ?? "",
-    headRef: p.head?.ref ?? headShort,
-    baseRef: p.base?.ref ?? baseShort,
+    headRef: p.head?.ref ?? headFallback,
+    baseRef: p.base?.ref ?? baseFallback,
     body: p.body ?? "",
   }));
 }
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 036659ee..fd7f1958 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -137,6 +137,31 @@ export interface GitHubProvider {
     expectedBaseSha?: string | null;
   }): Promise<{ merged: boolean; sha: string }>;
   getPullRequest(pilotId: string, fullName: string, prNumber: number): Promise<PullRequestInfo>;
+  /**
+   * Bounded list of PRs for a repository (READ). head/base optional filters.
+   * Never authorizes merge.
+   */
+  listPullRequests(input: {
+    pilotId: string;
+    fullName: string;
+    head?: string;
+    base?: string;
+    state?: "open" | "closed" | "all";
+  }): Promise<{
+    matches: PullRequestInfo[];
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }>;
+  /** Bounded PR changed-files listing (READ). */
+  listPullRequestFiles(
+    pilotId: string,
+    fullName: string,
+    prNumber: number,
+  ): Promise<{
+    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }>;
   /** Deterministic mutation counters for SCRIPTED concurrency proofs (optionally per repo). */
   getMutationCounts?(
     pilotId?: string,
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
index 5fcbfa45..14ccd302 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
@@ -14,6 +14,7 @@ import {
   fetchRefSha,
   fetchRepositoryMetadata,
   listInstallationRepositories,
+  listPullRequestFilesRemote,
   listPullRequestsRemote,
   mergePullRequestRemote,
   type GitHubFetch,
@@ -180,6 +181,33 @@ export class RealGitHubReadProvider implements GitHubProvider {
     return access.token;
   }
 
+  /**
+   * READ token strategy: prefer installation-to-server (same as blob/ref reads),
+   * fall back to user OAuth when installation lacks PR pull permission (403/401).
+   * Mutations must keep using userAccessToken exclusively.
+   */
+  private async withReadToken<T>(
+    pilotId: string,
+    run: (token: string) => Promise<T>,
+  ): Promise<T> {
+    try {
+      const install = await this.installationToken();
+      return await run(install);
+    } catch (e) {
+      const err = e instanceof StudioError ? e : null;
+      const status = err?.httpStatus;
+      const code = err?.code;
+      const retryable =
+        code === "ACCESS_DENIED" ||
+        status === 401 ||
+        status === 403 ||
+        (typeof err?.message === "string" && /FORBIDDEN|UNAUTHORIZED|403|401/i.test(err.message));
+      if (!retryable) throw e;
+      const user = await this.userAccessToken(pilotId);
+      return await run(user);
+    }
+  }
+
   async listInstallationRepos(
     _pilotId: string,
     installationId: string,
@@ -382,15 +410,16 @@ export class RealGitHubReadProvider implements GitHubProvider {
     expectedHeadSha?: string;
   }): Promise<{ matches: PullRequestInfo[]; ambiguous: boolean }> {
     assertAllowedRepo(this.creds, input.fullName);
-    const token = await this.userAccessToken(input.pilotId);
-    const listed = await listPullRequestsRemote({
-      token,
-      fullName: input.fullName,
-      head: input.head,
-      base: input.base,
-      state: "open",
-      fetchImpl: this.fetchImpl,
-    });
+    const listed = await this.withReadToken(input.pilotId, (token) =>
+      listPullRequestsRemote({
+        token,
+        fullName: input.fullName,
+        head: input.head,
+        base: input.base,
+        state: "open",
+        fetchImpl: this.fetchImpl,
+      }),
+    );
     let matches = listed.map((p) => ({
       number: p.number,
       title: p.title,
@@ -422,6 +451,69 @@ export class RealGitHubReadProvider implements GitHubProvider {
     return { matches, ambiguous: matches.length > 1 };
   }
 
+  async listPullRequests(input: {
+    pilotId: string;
+    fullName: string;
+    head?: string;
+    base?: string;
+    state?: "open" | "closed" | "all";
+  }): Promise<{
+    matches: PullRequestInfo[];
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }> {
+    assertAllowedRepo(this.creds, input.fullName);
+    const bound = 20;
+    const listed = await this.withReadToken(input.pilotId, (token) =>
+      listPullRequestsRemote({
+        token,
+        fullName: input.fullName,
+        head: input.head,
+        base: input.base,
+        state: input.state ?? "open",
+        perPage: bound + 1,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
+    const matchedCount = listed.length;
+    const slice = listed.slice(0, bound);
+    return {
+      matches: slice.map((p) => ({
+        number: p.number,
+        title: p.title,
+        state: p.state,
+        headSha: p.headSha,
+        baseSha: p.baseSha,
+        headRef: p.headRef,
+        baseRef: p.baseRef,
+        htmlUrl: p.htmlUrl,
+      })),
+      incompleteCoverage: matchedCount > bound,
+      matchedCount,
+    };
+  }
+
+  async listPullRequestFiles(
+    pilotId: string,
+    fullName: string,
+    prNumber: number,
+  ): Promise<{
+    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }> {
+    assertAllowedRepo(this.creds, fullName);
+    return this.withReadToken(pilotId, (token) =>
+      listPullRequestFilesRemote({
+        token,
+        fullName,
+        prNumber,
+        bound: 40,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
+  }
+
   async mergePullRequest(input: {
     pilotId: string;
     fullName: string;
@@ -449,13 +541,14 @@ export class RealGitHubReadProvider implements GitHubProvider {
     prNumber: number,
   ): Promise<PullRequestInfo> {
     assertAllowedRepo(this.creds, fullName);
-    const token = await this.userAccessToken(pilotId);
-    const pr = await fetchPullRequestRemote({
-      token,
-      fullName,
-      prNumber,
-      fetchImpl: this.fetchImpl,
-    });
+    const pr = await this.withReadToken(pilotId, (token) =>
+      fetchPullRequestRemote({
+        token,
+        fullName,
+        prNumber,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
     return {
       number: pr.number,
       title: pr.title,
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index 858e77e3..ebecfd2f 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -99,6 +99,7 @@ export async function listProjectGitSources(
       attachedAt: projectGitLinks.attachedAt,
       repoStatus: authorizedRepositories.status,
       authStatus: integrationAuthorizations.status,
+      permissionsJson: authorizedRepositories.permissionsJson,
     })
     .from(projectGitLinks)
     .innerJoin(authorizedRepositories, eq(projectGitLinks.repositoryId, authorizedRepositories.id))
@@ -110,13 +111,25 @@ export async function listProjectGitSources(
 
   return rows
     .filter((r) => r.repoStatus === "ACTIVE" && r.authStatus === "CONNECTED")
-    .map((r) => ({
-      linkId: r.linkId,
-      repositoryId: r.repositoryId,
-      fullName: r.fullName,
-      defaultBranch: r.defaultBranch,
-      attachedAt: r.attachedAt.toISOString(),
-    }));
+    .map((r) => {
+      let permissions: Record<string, string> = {};
+      try {
+        const raw = JSON.parse(r.permissionsJson || "{}") as Record<string, unknown>;
+        for (const [k, v] of Object.entries(raw)) {
+          if (typeof v === "string" && v.trim()) permissions[k] = v.trim();
+        }
+      } catch {
+        permissions = {};
+      }
+      return {
+        linkId: r.linkId,
+        repositoryId: r.repositoryId,
+        fullName: r.fullName,
+        defaultBranch: r.defaultBranch,
+        attachedAt: r.attachedAt.toISOString(),
+        permissions,
+      };
+    });
 }
 
 /**
@@ -495,3 +508,97 @@ export async function readGitPullRequest(input: {
     throw isRethrowableStudio(e) ? e : err;
   }
 }
+
+/**
+ * Bounded live PR listing / find (READ). head/base optional.
+ * Never authorizes merge. Does not invent PRs beyond provider results.
+ */
+export async function listGitPullRequests(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  head?: string;
+  base?: string;
+  state?: "open" | "closed" | "all";
+}) {
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  const provider = resolveGitHubProvider();
+  try {
+    const listed = await provider.listPullRequests({
+      pilotId: input.pilotId,
+      fullName: repo.fullName,
+      head: input.head?.trim() || undefined,
+      base: input.base?.trim() || undefined,
+      state: input.state ?? "open",
+    });
+    const observedAt = new Date().toISOString();
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      pulls: listed.matches.map((p) => ({
+        prNumber: p.number,
+        title: p.title,
+        state: p.state,
+        merged: p.state === "merged",
+        headRef: p.headRef,
+        baseRef: p.baseRef,
+        headSha: p.headSha,
+        baseSha: p.baseSha,
+        htmlUrl: p.htmlUrl,
+      })),
+      incompleteCoverage: listed.incompleteCoverage,
+      matchedCount: listed.matchedCount,
+      observedAt,
+      authorityReminder:
+        "Liste PR live bornée — jamais un mandat de merge. Corréler ensuite avec read_git_pull_request si un numéro précis est requis.",
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
+
+/**
+ * Bounded PR changed-files listing (READ). Never authorizes mutation.
+ */
+export async function listGitPullRequestFiles(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  prNumber: number;
+}) {
+  if (!Number.isInteger(input.prNumber) || input.prNumber <= 0) {
+    throw new StudioError("INVALID_REQUEST", "Numéro de PR invalide", { httpStatus: 400 });
+  }
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  const provider = resolveGitHubProvider();
+  try {
+    const listed = await provider.listPullRequestFiles(
+      input.pilotId,
+      repo.fullName,
+      input.prNumber,
+    );
+    const observedAt = new Date().toISOString();
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      prNumber: input.prNumber,
+      files: listed.files,
+      incompleteCoverage: listed.incompleteCoverage,
+      matchedCount: listed.matchedCount,
+      observedAt,
+      authorityReminder:
+        "Fichiers PR live — lecture seule. Ne pas traiter comme preuve de merge ni mandat D6.",
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    if (err.code === "NOT_FOUND") {
+      throw new StudioError(
+        "NOT_FOUND",
+        `PR introuvable ou inaccessible: #${input.prNumber} sur ${repo.fullName}`,
+        { httpStatus: 404, cause: e },
+      );
+    }
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index ca61dfd8..a23cf3b8 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -578,6 +578,72 @@ class ScriptedGitHubProvider implements GitHubProvider {
     if (!pr) throw Object.assign(new Error("PR_NOT_FOUND"), { code: "NOT_FOUND" });
     return pr;
   }
+
+  async listPullRequests(input: {
+    pilotId: string;
+    fullName: string;
+    head?: string;
+    base?: string;
+    state?: "open" | "closed" | "all";
+  }): Promise<{
+    matches: PullRequestInfo[];
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }> {
+    if (ScriptedFaultRegistry.current(input.pilotId, input.fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(input.pilotId, input.fullName);
+    }
+    ScriptedFaultRegistry.assertOk(input.pilotId, input.fullName);
+    const s = repoStore(input.pilotId, input.fullName);
+    const state = input.state ?? "open";
+    let matches = s.prs.filter((p) => {
+      if (state !== "all" && p.state !== state && !(state === "closed" && p.state === "merged")) {
+        if (state === "open" && p.state !== "open") return false;
+        if (state === "closed" && p.state === "open") return false;
+      }
+      if (input.head && p.headRef !== input.head.replace(/^refs\/heads\//, "")) return false;
+      if (input.base && p.baseRef !== input.base.replace(/^refs\/heads\//, "")) return false;
+      return true;
+    });
+    const bound = 20;
+    const matchedCount = matches.length;
+    matches = matches.slice(0, bound);
+    return {
+      matches,
+      incompleteCoverage: matchedCount > bound,
+      matchedCount,
+    };
+  }
+
+  async listPullRequestFiles(
+    pilotId: string,
+    fullName: string,
+    prNumber: number,
+  ): Promise<{
+    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+    incompleteCoverage: boolean;
+    matchedCount: number;
+  }> {
+    if (ScriptedFaultRegistry.current(pilotId, fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    }
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    const s = repoStore(pilotId, fullName);
+    const pr = s.prs.find((p) => p.number === prNumber);
+    if (!pr) throw Object.assign(new Error("PR_NOT_FOUND"), { code: "NOT_FOUND" });
+    const paths = Object.keys(s.files).filter((p) => p.startsWith("docs/") || p.endsWith(".md"));
+    const files = (paths.length > 0 ? paths : ["docs/publication.md"]).slice(0, 40).map((filename) => ({
+      filename,
+      status: "added" as const,
+      additions: 1,
+      deletions: 0,
+    }));
+    return {
+      files,
+      incompleteCoverage: false,
+      matchedCount: files.length,
+    };
+  }
 }
 
 export function getScriptedGitHubProvider(): GitHubProvider {
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/types.ts b/projects/sfia-studio-next/web/src/domains/integrations/types.ts
index ebc1bd2a..147b44d2 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/types.ts
@@ -54,4 +54,9 @@ export type GitSourceSummary = {
   fullName: string;
   defaultBranch: string | null;
   attachedAt: string;
+  /**
+   * Sanitized GitHub permission snapshot from Studio persistence (e.g. contents/pull_requests).
+   * Never includes tokens/secrets. Empty when unknown.
+   */
+  permissions?: Record<string, string>;
 };

```

### Tests + construction

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e6845581..acaead3f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CAPABILITY-AUDIT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 08:30 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — audit exhaustif + fiabilisation capacités GitHub |
+| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
+| Gaps P0 | list/find PR ; fichiers PR ; permissions sources ; token parity READ PR |
+| Fix | `list_git_pull_requests` · `list_git_pull_request_files` · permissions · `withReadToken` |
+| Preuves | unit policy/tools/scripted · gh REAL READ PR#19 · matrice A–G |
+| REAL WRITE / merge | **NOT** (gates ouverts) |
+| Cutover | **NOT EXECUTED** — CANDIDATE FROZEN · RECETTE GO REQUIRED |
+| Push projet | **NONE** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UAT-PR-READ
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 95a467cd..9b01ef48 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -87,6 +87,17 @@
 - **Correction B** : copy UI distinguant consolidation cognitive vs mutation ; conserve l’alerte sans masquer l’anomalie.
 - **Cutover** : **NON** ce contrat — candidat local figé ; GO Morris requis pour RECETTE.
 
+### Audit exhaustif capacités Git + fiabilisation (2026-11-22)
+- **Périmètre** : matrice A–G complète (`matrice-capacites-git-chaine-2026-11-22.md`) ; frontières D3–D9 conservées ; pas de nouveau moteur.
+- **Gaps P0 corrigés** :
+  1. `list_git_pull_requests` / `listGitPullRequests` / provider `listPullRequests` (filtres head/base optionnels ; `listPullRequestsRemote` assoupli).
+  2. `list_git_pull_request_files` / `listGitPullRequestFiles` / provider `listPullRequestFiles` (raccord `listPullRequestFilesRemote`).
+  3. `listProjectGitSources` expose `permissions` sanitizées (pas de secrets).
+  4. REAL READ PR : `withReadToken` — installation d’abord, fallback user OAuth sur 401/403 (mutations restent user-only).
+- **OUT** : historique commits générique, diff hunks, merge REAL (GIT-UAT-08).
+- **Oracle RR** : PR #19 toujours OPEN / non merged / HEAD `16f9961e…` / 1 fichier (gh api) — corrélation D8 RECETTE inchangée ; aucune nouvelle mutation Cursor.
+- **Cutover** : freeze candidat ce lot ; GO Morris sur nouveau triplet requis avant :3200.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
index 8a2f8ff5..af66f6dc 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
@@ -2,67 +2,155 @@
 
 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-22 ≈ 07:45 CET |
-| Macro-lot | Fiabilisation transverse chaîne Git |
+| Date | 2026-11-22 ≈ 08:30 CET |
+| Macro-lot | Audit exhaustif + fiabilisation capacités GitHub bout-en-bout |
 | Profil | CRITICAL · NO RELEASE |
-| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · commit `16f9961e…` · blob `7518405f…` |
-
-Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · GAP = écart ouvert · FIX = corrigé ce lot
-
-## Lecture
-
-| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime obs. | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
-|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
-| Dépôts autorisés | D9/Int | `listProjectGitSources` | `list_project_git_sources` | metadata | CONNECTED+ATTACHED | n/a | n/a | provider | — | tool | unit/PG/e2e | DET/BR | OK UAT |
-| Permissions dépôt | D9 | App install + allowlist | via sources | metadata | App + OAuth distincts | n/a | n/a | gate | — | status | unit | DET | OK |
-| Branches / HEAD | D9 | `listGitRefs` / `getRefSha` | `list_git_refs` | contents:read | REAL | n/a | n/a | yes | — | tool | S03 unit | DET/RR | OK |
-| Arbre fichiers | D9 | `listDirectory` | `list_git_directory` | contents:read | REAL | n/a | n/a | yes | — | tool | e2e | DET/BR | OK |
-| Lecture fichier/ref | D9 | `readGitFile` | `read_git_file` | contents:read | REAL ; ref **explicite** | n/a | n/a | yes | — | tool | unit | DET/RR | OK — main 404 ≠ absence sur branche pub |
-| Recherche présence | D9 | read + list | tools | contents:read | REAL | n/a | n/a | yes | — | tool+contexte | RR PR#19 | RR | OK |
-| Historique commits | D9 | provider | (si exposé) | contents:read | PARTIAL | n/a | n/a | yes | facts | — | — | PARTIAL | hors P0 si non exposé outil |
-| PR base/head/status | D9/D8 | provider + `document_publication_refs` | tools + snippets | pull_requests:read | REAL | n/a | n/a | yes | PR_OPEN | snippets+restitution | RR+DET | RR | **FIX** snippets owner |
-| Checks/protections | D9 | provider | — | checks | PARTIAL | n/a | gate merge | yes | — | refus merge | unit merge | DET | merge path only |
-| Fichier sur main | D9 | `read_git_file` ref=main | tool | contents:read | REAL 404 PR#19 | n/a | n/a | yes | mergeObserved=false | faits owner + tool | RR | RR | **FIX** contexte + restitution « aucune fusion vers main » |
-
-## Écriture
-
-| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
-|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
-| Création branche | D7/D9 | `dispatchPublication` | via mission | contents:write | documentary+allowlist | mandate | guards | CREATE_BRANCH | BRANCH | restitution | PG SCRIPTED | DET/PG | OK |
-| Publication fichier | D7/D9 | PUT contents | mission | contents:write | REAL RECETTE | mandate | guards | COMMIT | COMMIT | **complet** | PG+unit | DET/PG | **FIX** path/SHA/PR/liens |
-| Création PR | D7/D9 | open PR | mission | pull_requests:write | REAL | mandate envelope | yes | OPEN_PR | PR_OPEN | PR # + URL | RR+PG | RR | PR#19 corrélée mission ; **FIX** restitution |
-| Merge documentaire | D6/D7/D9 | merge mandate | mission | contents+PR | REAL | **séparé** | guards | MERGE | MERGE | mergeObserved | unit/PG | DET | PUBLISH≠MERGE |
-| Post-effet verify | D8/D3 | reconcile + facts | snippets+tools | read | REAL | n/a | reconcile | read | facts | fidèle | unit | DET | **FIX** |
-| Idempotence | D7 | correlation_key | — | — | — | — | yes | — | — | — | PG | DET | OK |
-
-## Gestion
-
-| Capacité | Owner | Statut |
+| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · HEAD `16f9961e…` · fichier `references-externes-enseignements-chantiers360.md` |
+| Oracle live (ce lot) | OPEN · merged=false · base=main · 1 commit · 1 fichier (`gh api`) |
+
+Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · OUT = hors contrat E08 · FIX = corrigé ce lot · BLOQUÉ = gate ouvert
+
+## A. Dépôts et identités
+
+| Capacité | Owner | Service | Accès | Nora / mission | Exposition | Schema | Sélection NL | Identité | Perm GH | Runtime | D6 | D7 | D9 | D8 | Reprise | Restitution | Tests | Preuve | Statut |
+|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
+| Lister dépôts autorisés | D9 | `listProjectGitSources` | REAL/SCRIPTED | `list_project_git_sources` | oui | `{}` | oui | pilot+project | metadata | CONNECTED+ATTACHED | n/a | n/a | gate | — | n/a | tool | unit/PG/e2e | DET/BR | **IN OK** |
+| Permissions dépôt | D9 | permissionsJson → sources | REAL | via `list_project_git_sources` | **FIX** champ `permissions` | Record | oui | pilot+project | snapshot Studio | CONNECTED | n/a | n/a | yes | — | n/a | tool | unit | DET | **FIX** |
+| Connexion / install App | Int | auth + App | REAL | UI + status | UI 11.06 | — | partiel | OAuth≠App | install | RECETTE | n/a | n/a | yes | — | n/a | UI | e2e 11.06 | BR | OK UAT |
+| Rattachement projet | Int | project_git_links | REAL | UI | UI | — | UI | project | — | ATTACHED | n/a | n/a | yes | — | n/a | UI | e2e | BR | OK UAT |
+| Branche défaut | D9 | defaultBranch sources | REAL | tool | oui | — | oui | — | metadata | yes | n/a | n/a | yes | — | n/a | tool | DET | DET | OK |
+| READ/WRITE séparés | D9 | allowlists | REAL | gate write | config | — | — | App | contents R/W | documentary | mandate | yes | assertWritable | — | — | refus | unit | DET | OK |
+| Refus / révocation | Int/D9 | fail-closed | REAL | tools → DENIED | oui | — | — | — | 401/403 | yes | n/a | n/a | yes | — | — | DENIED | unit | DET | OK |
+
+## B. Branches et références
+
+| Capacité | Owner | Service | Nora | D6 | Preuve | Statut |
+|---|---|---|---|---|---|---|
+| Lister branches | D9 | `listGitRefs` | `list_git_refs` | n/a | DET/RR | **IN OK** |
+| HEAD / existence ref | D9 | `getRefSha` + exact resolve | `list_git_refs` | n/a | DET/RR | **IN OK** |
+| Comparer refs | D9 | SHAs distincts via tools | tools | n/a | DET | PARTIAL (pas de diff tool dédié) |
+| Créer branche | D7/D9 | dispatch publication | mission D6/D7 | mandate | DET/PG | **IN OK** (mission) |
+| Supprimer branche | D7/D9 | accepted UAT | mission | mandate | BR hist. | OK UAT — non rejouée |
+
+## C. Fichiers et documents
+
+| Capacité | Owner | Service | Nora | Preuve | Statut |
+|---|---|---|---|---|---|
+| Arborescence | D9 | `listGitDirectory` | `list_git_directory` | DET/BR | **IN OK** |
+| Lire fichier @ ref | D9 | `readGitFile` | `read_git_file` | DET/RR | **IN OK** |
+| Présence / absence | D9 | FILE_ABSENT qualifié | tool statuses | DET/RR | **IN OK** |
+| Blob vs commit | D9 | permalink rules | tool provenance | DET | **IN OK** |
+| Comparer versions | D3/D9 | deux reads | tools | DET | PARTIAL (pas de diff hunk tool) |
+| Préparer / publier fichier | D4/D7/D9 | mission publication | mission | DET/PG/RR | **IN OK** (mission) |
+| Vérifier contenu publié | D9/D8 | read + D8 | tools+faits | RR PR#19 | **IN OK** |
+
+## D. Commits et publications
+
+| Capacité | Owner | Nora / mission | Preuve | Statut |
+|---|---|---|---|---|
+| Historique commits | D9 | **OUT/PARTIAL** — pas d’outil `list_commits` E08 | — | **OUT** (pas d’ajout gratuit) |
+| Commit précis / diff | D9 | PARTIAL via read+PR files | RR | PARTIAL |
+| Créer commit documentaire | D7/D9 | mission | DET/PG/RR | **IN OK** |
+| Retrouver SHA / branche | D8/D3 | restitution+tools | DET/RR | **IN OK** (**FIX** restitution antérieure) |
+| Publication D7/D8 | D7/D8 | snippets+view | DET/PG | **IN OK** |
+| Anti-doublon | D7 | correlation_key | DET/PG | **IN OK** |
+| API distant ≠ push local | D9 | GitHub API only | DET | **IN OK** |
+
+## E. Pull requests
+
+| Capacité | AVANT | APRÈS (ce lot) | Owner | Nora | Preuve | Statut |
+|---|---|---|---|---|---|---|
+| Lire PR par numéro | D9 only → `read_git_pull_request` (lot précédent) | inchangé + token parity install→user | D9 | `read_git_pull_request` | DET/RR | **IN OK** |
+| Lister / trouver PR | **GAP** — `findPullRequest` D9 non exposé Nora | **FIX** `list_git_pull_requests` + `listGitPullRequests` | D9 | `list_git_pull_requests` | DET | **FIX** |
+| Fichiers modifiés PR | **GAP** — `listPullRequestFilesRemote` non raccordé provider/Nora | **FIX** provider + `list_git_pull_request_files` | D9 | `list_git_pull_request_files` | DET/RR (gh) | **FIX** |
+| État / head / base / SHA | oui via read | oui | D9 | tool | RR #19 | **IN OK** |
+| Mergeability / compteurs | oui (enrichi) | oui | D9 | tool | DET/RR | **IN OK** |
+| Checks/protections | merge path only | inchangé | D9 | mission merge | DET | PARTIAL |
+| Ouvrir PR | mission D6/D7 | inchangé | D7/D9 | mission | RR hist. | **IN OK** (mission) |
+| Restituer n°/URL | **FIX** restitution antérieure | conservé | D3/D8 | restitution | DET/PG | **IN OK** |
+
+## F. Merge
+
+| Capacité | Statut | Gate |
 |---|---|---|
-| Rattachement / détachement | Int/D9 | UAT accepté — non rejoué |
-| OAuth / App / révocation | Int | UAT accepté — non requalifié sans régression |
-| Suppression branche | D7/D9 | UAT accepté — **non rejouée** |
+| Identifier PR / cible / HEAD | IN via read tools | — |
+| Checks / droits | PARTIAL | provider |
+| Mandat D6 **distinct** | IN | PUBLISH ≠ MERGE |
+| Exécuter merge | IN code path | **GIT-UAT-08 / REAL effect — BLOQUÉ** ce cycle (pas de GO merge) |
+| Constater / restituer | IN sur fait MERGE | — |
+
+## G. Erreurs et reprise
+
+| Cas | Traitement | Preuve |
+|---|---|---|
+| 403 / 404 | DENIED / AMBIGUOUS / NOT_FOUND classifiés | DET |
+| Dépôt non autorisé | ACCESS_DENIED allowlist | DET |
+| Ref introuvable | REF_UNRESOLVED | DET |
+| Branche protégée | refuse mutation main/master | DET |
+| Conflit / stale HEAD | CONFLICT path | DET/PG |
+| Token / provider | fail-closed + retry install→user READ | DET (code) |
+| Timeout / ACK perdu / UNKNOWN | SCRIPTED faults + UI banner clarifié | DET |
+| Double demande / idempotence | correlation_key | DET/PG |
+| Reprise conversation | mission continuity + toolScope | DET/PG |
+| Résultat obsolète | live re-read ≠ D8 historique | DET/RR |
+
+## Outils Nora exposés (READ) — inventaire runtime
+
+| Outil | Allowlist | Budget | Mutation |
+|---|---|---|---|
+| `list_project_git_sources` | oui | D4 chars/calls | non |
+| `read_git_file` | oui | oui | non |
+| `list_git_refs` | oui | oui | non |
+| `list_git_directory` | oui | oui | non |
+| `read_git_pull_request` | oui | oui | non |
+| `list_git_pull_requests` | **FIX oui** | oui | non |
+| `list_git_pull_request_files` | **FIX oui** | oui | non |
+
+Écritures : **aucune** via outil LLM direct — uniquement qualification → D6 → D7 → D9 → D8 → restitution D3.
+
+## Chemins mission D6/D7 (écritures)
+
+| Effet | Capability | Mandat | Preuve |
+|---|---|---|---|
+| Publication documentaire | `d7.publish_*` / publication plan | HumanDecision USER | DET/PG / RR hist. PR#19 |
+| Merge | `d7.merge_publication` | mandat **distinct** | DET ; REAL **BLOQUÉ** |
+| Create branch / commit / PR | steps plan | sous publication | DET/PG |
+
+## Faits D8 oracle PR#19 (RECETTE DB — non mutés)
+
+| Champ | Valeur |
+|---|---|
+| Attempt | `efx_cf6763da…` COMPLETED |
+| Publication ref | `dpr_7f10c5e4…` PR_OPEN |
+| Repo | `mcleland147/chantiers360` |
+| PR | #19 |
+| HEAD | `16f9961ef2ee6d13235e56059313f691521947fd` |
+| Path | `references-externes-enseignements-chantiers360.md` |
+| mergeObserved | false |
+
+## Capacités OUT (contrat E08 — non ajoutées)
+
+- Historique commits générique (`list_commits`)
+- Diff hunks arbitraires
+- Gestion labels/reviewers/assignees PR
+- Force-push / protection bypass
+- Merge REAL sans GO GIT-UAT-08
+
+## Corrections ce macro-lot
+
+1. `list_git_pull_requests` + resource `listGitPullRequests` + provider `listPullRequests` (head/base optionnels).
+2. `list_git_pull_request_files` + resource + provider (raccord `listPullRequestFilesRemote`).
+3. `listProjectGitSources.permissions` sanitizé depuis `permissions_json`.
+4. REAL PR READ token : installation d’abord, fallback user OAuth sur 401/403 (`withReadToken`).
+5. Allowlist cognitive + consigne Nora adapter mises à jour.
+6. Tests unit exposition + scripted list/files read-only.
 
-## Identités (constat)
+## Gates ouverts
 
-| Id | Rôle | Constat |
+| Gate | Cause | Owner |
 |---|---|---|
-| A Pilote Studio | session RECETTE | actif |
-| B OAuth Pilote | user connection | distinct App |
-| C GitHub App | installation | REAL |
-| D Provider D9 | App credentials lane | REAL |
-| E–F Dépôts / perms | allowlist READ + WRITE ⊂ READ | `chantiers360` WRITE |
-| G Rattachement | CampusFlow ↔ chantiers360 | présent |
-| H–I Allowlists | READ vs WRITE | séparées |
-| J Lane RECETTE | documentary WRITE ON | boot log |
-| K–L D6/D7 | mandate `dec_aa4db4e0…` / attempt `efx_cf6763da…` | COMPLETED |
-| M Protections | PR open non merged | RR |
-| N Révocation | fail-closed | DET préexistant |
-
-## Incident restitution — chaîne causale
-
-1. Effet REAL COMPLETED avec D8 complet (branche, path, SHA, PR #19).
-2. Same-turn `publicationEffectView` hydraté uniquement avec title/revision/hint → **sparse**.
-3. `terminalFacts` COMPLETED n’émettait path/SHA/PR/liens.
-4. Follow-up Nora sans snippets D8 → pas d’ancrage pour READ `main` vs branche pub.
-5. **Correction** : `buildPublicationEffectViewFromAttempt` + restitution enrichie + snippets owner + toolScope resume.
+| REAL WRITE / nouvelle mutation | Mandat : pas de mutation test sans acte | Morris |
+| GIT-UAT-08 merge réel | Hors autorisation cycle | Morris |
+| Nora LIVE E2E sélection outil | Browser/LIVE post-cutover | Morris UAT |
+| Cutover RECETTE nouveau triplet | ENV-01 + GO sur SHA/TREE/BUILD | Morris |
+| Product versioning | NO RELEASE / STABLE NOT AVAILABLE | — |
diff --git a/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts b/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
index a8f2967e..b65d848f 100644
--- a/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
@@ -18,13 +18,15 @@ describe("read_git_pull_request exposure", () => {
     else process.env.SFIA_COG_PROFILE_TYPE = prevProfile;
   });
 
-  it("cognitive policy allowlists read_git_pull_request", () => {
+  it("cognitive policy allowlists PR read/list tools", () => {
     const p = buildCognitivePolicy("Consulte la PR #19 en lecture seule", "TEST_BOUNDARY");
     expect(p.toolAllowlist).toContain("read_git_pull_request");
+    expect(p.toolAllowlist).toContain("list_git_pull_requests");
+    expect(p.toolAllowlist).toContain("list_git_pull_request_files");
     expect(p.toolAllowlist).toContain("list_project_git_sources");
   });
 
-  it("buildNoraGitReadTools exposes read_git_pull_request tool name", async () => {
+  it("buildNoraGitReadTools exposes PR read/list tool names", async () => {
     const tools = await buildNoraGitReadTools({
       pilotId: "pilot_test",
       projectId: "proj_test",
@@ -34,11 +36,13 @@ describe("read_git_pull_request exposure", () => {
     });
     const names = tools.map((t) => (t as { name?: string }).name);
     expect(names).toContain("read_git_pull_request");
+    expect(names).toContain("list_git_pull_requests");
+    expect(names).toContain("list_git_pull_request_files");
     expect(names).toContain("list_git_refs");
     expect(names).not.toContain("merge_pull_request");
   });
 
-  it("scripted getPullRequest is read-only (no merge counter bump)", async () => {
+  it("scripted getPullRequest / listPullRequests / listPullRequestFiles are read-only", async () => {
     const provider = getScriptedGitHubProvider();
     const pilotId = `pilot_pr_read_${Date.now()}`;
     const fullName = "acme/docs-projet";
@@ -56,9 +60,19 @@ describe("read_git_pull_request exposure", () => {
     });
     const before = provider.getMutationCounts?.(pilotId, fullName);
     const pr = await provider.getPullRequest(pilotId, fullName, created.number);
+    const listed = await provider.listPullRequests({
+      pilotId,
+      fullName,
+      head: "sfia/pub-pr-read",
+      base: "main",
+      state: "open",
+    });
+    const files = await provider.listPullRequestFiles(pilotId, fullName, created.number);
     const after = provider.getMutationCounts?.(pilotId, fullName);
     expect(pr.number).toBe(created.number);
     expect(pr.htmlUrl).toBeTruthy();
+    expect(listed.matches.some((m) => m.number === created.number)).toBe(true);
+    expect(files.files.length).toBeGreaterThan(0);
     expect(after?.mergePR ?? 0).toBe(before?.mergePR ?? 0);
   });
 });

```

## 10. Risques / protections / limitations

- Aucun secret/token dans ce pack
- Pas de mutation GitHub Cursor sur chantiers360
- RECETTE :3200 conserve DB/sessions/conversations/REAL config
- Nouveau candidat **non servi** tant que GO Morris absent sur triplet `79188f6c` / `a550283d` / `hLsmHa3uFYP0PgRtj49Bh`
- Nora LIVE sélection d'outil : à requalifier UAT post-cutover (GIT-UAT-01..07) ; GIT-UAT-08 merge hors mandat

## 11. Verdict unique

**CORRECTIONS IMPLEMENTED — REAL EFFECT GATES REMAIN**

et

**CANDIDATE FROZEN — RECETTE GO REQUIRED**

(Triplet : SOURCE `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` · TREE `a550283d37ff461323ea02757350de24b772133e` · BUILD `hLsmHa3uFYP0PgRtj49Bh`)

Pas E08 ADOPTED · Pas STABLE · Pas UAT globale ACCEPTÉE · Pas merge projet.
