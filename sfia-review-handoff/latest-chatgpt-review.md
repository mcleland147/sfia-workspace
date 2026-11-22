# SFIA Studio Next — Review Pack FULL — E08 GIT-UAT PR READ + Turn Banner

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 08:15 CET (Europe/Paris) |
| Contrat | CRITICAL · INC/QA · consultation PR + lifecycle tour |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Push projet / PR / merge | **NONE** |
| Cutover RECETTE | **NOT EXECUTED** (interdit par contrat) |

## 1. Git Truth

| Objet | Valeur |
| --- | --- |
| HEAD candidat local | `2a607fb0742b2ec1287b5f396d9c51120a95f415` |
| TREE | `76bf9232ad9c7a1de1d89872c8928742c6dbce3d` |
| BUILD_ID (détaché) | `riBCGR6TH5dbajQ1cNyhG` |
| Worktree build | `…/sfia-workspace-next-ml4d-ensemble08-prread-build-2a607fb0` |
| RECETTE encore servie | `c67a6ba8` / `tEiDqhhGWNipSWO_86ZoG` (**inchangée**) |
| Gate restant | **RECETTE GO REQUIRED** pour cutover |

## 2. PV §8–10

Commit documentaire `3a85fecf` — GIT-UAT-01 PARTIAL/FAIL ; bandeau « dernière tentative » ; oracle externe PR #19 OPEN.

## 3. Incident A — diagnostic

### Chaîne causale
USER GIT-UAT-01 → D3 LIVE → toolScope project OK → outils Git exposés = sources/refs/file/dir **seulement** → Nora appelle refs (2 toolCalls) → **pas d'outil PR** → replyDraft « outils ne donnent pas accès aux métadonnées PR » → qualification `UNAVAILABLE` → turn `UNKNOWN`.

### Preuves DB RECETTE (expurgées)
- `tcmd_be190f5c-a772-4edf-940b-e1236a739c6d` status **UNKNOWN**
- assistant `msg_7b32b3e7…` status UNKNOWN — texte PARTIAL
- `toolCallsObserved: 2`, `humanDecisionCreated: false`, `pendingEffectBlocked: false`
- `semanticQualificationStatus: UNAVAILABLE`, `nextTurnKind: INCERTAIN`

### Matrice capacité PR READ
| Couche | État avant | Après correctif |
|---|---|---|
| Provider D9 `getPullRequest` | **EXISTE** REAL+SCRIPTED | inchangé + champs mergeable/commits/changedFiles |
| Service métier | **ABSENT** | `readGitPullRequest` + gates projet/lien |
| Outil Nora | **ABSENT** → `TOOL_NOT_EXPOSED` | `read_git_pull_request` |
| Allowlist cognitive | sans PR | + `read_git_pull_request` |
| Sélection conversation | impossible | consigne adapter |
| Permissions | App `pull_requests` read déjà dans profils | non élargies admin |
| Cause | **TOOL_NOT_EXPOSED** (pas GITHUB_PERMISSION_DENIED prouvé) | corrigé |

### Oracle externe (READ)
`gh api pulls/19` : open, merged=false, head=`sfia/pub-3ab1e0c2eb6b7499`, headSha=`16f9961e…`, mergeable=true, mergeable_state=unstable, commits=1, changed_files=1.

## 4. Incident B — diagnostic

### Composant
`NoraConversation` `data-testid="nora-activity-error"` lorsque `activity==="error"`.

### Déclencheur
`projects/[projectId]/page.tsx` : `setNoraActivity("error")` si `j.status === "UNKNOWN"|"FAILED"|"INTERRUPTED"`.

### Tour exact
Commande UNKNOWN ci-dessus — **même tour** que GIT-UAT-01. Pas une mutation Git ; assistant déjà livré ; zéro effet pending.

### Cause
**RESULT_NOT_PROPAGATED / lifecycle** : qualification UNAVAILABLE ⇒ adapter `status: UNKNOWN` (même avec content) ⇒ UI banner copy « tentative / réconciliez » **sur-interprète** un échec d'effet.

## 5. Corrections

A. `readGitPullRequest` + outil + allowlist + prompt.
B. Copy banner : consolidation cognitive vs mutation ; alerte conservée.

## 6. Création — readGitPullRequest

```typescript
export async function readGitPullRequest(input: {
  pilotId: string;
  projectId: string;
  repositoryId: string;
  prNumber: number;
}) {
  if (!Number.isInteger(input.prNumber) || input.prNumber <= 0) {
    throw new StudioError("INVALID_REQUEST", "Numéro de PR invalide", { httpStatus: 400 });
  }
  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
  const provider = resolveGitHubProvider();
  try {
    const pr = await provider.getPullRequest(input.pilotId, repo.fullName, input.prNumber);
    const merged = pr.state === "merged";
    const observedAt = new Date().toISOString();
    return {
      status: "AVAILABLE" as const,
      repositoryFullName: repo.fullName,
      prNumber: pr.number,
      title: pr.title,
      state: pr.state,
      merged,
      headRef: pr.headRef,
      baseRef: pr.baseRef,
      headSha: pr.headSha,
      baseSha: pr.baseSha,
      htmlUrl: pr.htmlUrl,
      mergeable: pr.mergeable ?? null,
      mergeableState: pr.mergeableState ?? null,
      commits: pr.commits ?? null,
      changedFiles: pr.changedFiles ?? null,
      mergeCommitSha: pr.mergeCommitSha ?? null,
      observedAt,
      authorityReminder:
        "Lecture PR live — jamais un mandat D6 ni une autorisation de merge. Ne pas substituer un fait D8 historique à cette observation.",
    };
  } catch (e) {
    const err = toStudioError(e);
    if (err.code === "NOT_FOUND") {
      throw new StudioError(
        "NOT_FOUND",
        `PR introuvable ou inaccessible: #${input.prNumber} sur ${repo.fullName}`,
        { httpStatus: 404, cause: e },
      );
    }
    throw isRethrowableStudio(e) ? e : err;
  }
}

```

## 7. Diffs code

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index c5f42c54..d2e5f295 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -366,8 +366,9 @@ export function NoraConversation(props: {
           ) : null}
           {props.activity === "error" ? (
             <div className="fig-alert" role="alert" data-testid="nora-activity-error">
-              La dernière tentative n&apos;a pas abouti clairement. Le texte saisi est conservé ;
-              réessayez ou réconciliez si une intention reste ouverte.
+              La dernière réponse n&apos;a pas pu être consolidée entièrement. Le texte saisi est
+              conservé. Aucune mutation n&apos;est relancée automatiquement — reformulez, ou
+              réconciliez seulement si une intention d&apos;effet reste ouverte.
             </div>
           ) : null}
         </div>
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index f4ae3eca..c98f7321 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -91,6 +91,7 @@ export type CognitivePolicy = {
     | "read_git_file"
     | "list_git_refs"
     | "list_git_directory"
+    | "read_git_pull_request"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -217,6 +218,7 @@ export function buildCognitivePolicy(
     "read_git_file",
     "list_git_refs",
     "list_git_directory",
+    "read_git_pull_request",
   ];
 
   return {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index f245d47b..63565c83 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -7,6 +7,7 @@ import {
   listGitRefs,
   listProjectGitSources,
   readGitFile,
+  readGitPullRequest,
 } from "@/domains/integrations/resource-service";
 import { StudioError, isStudioError, toStudioError } from "@/lib/http-errors";
 import { emitObs } from "@/lib/observability";
@@ -384,5 +385,80 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         }
       },
     }),
+    tool({
+      name: "read_git_pull_request",
+      description:
+        "Read live pull-request metadata from an attached GitHub repository (READ only). " +
+        "Returns current state (open/closed/merged), head/base refs and SHAs, htmlUrl, " +
+        "mergeability when provided by GitHub, commit/file counts when available. " +
+        "Never merges. Never substitutes historical Studio D8 facts for this live observation. " +
+        "Use after list_project_git_sources to obtain repositoryId.",
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
+          const result = await readGitPullRequest({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            prNumber: args.prNumber,
+          });
+          const payload = { ...result, coverage: "COMPLETE" as ToolCoverage };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.read_git_pull_request",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              pr_number: result.prNumber,
+              state: result.state,
+              merged: result.merged,
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
+                : err.code === "DEPENDENCY_UNAVAILABLE"
+                  ? ("UNAVAILABLE" as const)
+                  : ("DENIED" as const);
+          const payload = {
+            status,
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance:
+              err.code === "NOT_FOUND"
+                ? "PR introuvable ou inaccessible — ne pas inventer open/merged."
+                : "Lecture PR refusée — ne pas substituer un historique Studio au statut live.",
+            authorityReminder:
+              "Git PR read never authorizes D6 HumanDecision or merge. Historical D8 ≠ live PR state.",
+            charsCharged: 0,
+          };
+          emitObs({
+            event_name: "d3.tool.read_git_pull_request",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "DENIED",
+            meta: { status, code: err.code },
+          });
+          return payload;
+        }
+      },
+    }),
   ];
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 85457b5f..afb4bf19 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -129,6 +129,7 @@ const SYSTEM_INSTRUCTIONS = [
   "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils; n'invente jamais d'URL /blob/{blobSha}/… ; utilise permalink seulement si commitShaVerified=true.",
   "- Lecture Git: AVAILABLE = contenu; FILE_ABSENT = chemin absent à une ref tip vérifiée (pas une autorisation d'écriture); DENIED/REF_UNRESOLVED/AMBIGUOUS/UNAVAILABLE = aucune conclusion d'absence ni de CREATE.",
+  "- Consultation PR: utiliser `read_git_pull_request` (après `list_project_git_sources`) pour le statut live open/closed/merged, branches, HEAD/base SHA, mergeability et compteurs. Ne jamais affirmer que les outils ne permettent pas de lire une PR si cet outil est disponible. Ne jamais fusionner via un outil de lecture. Un fait D8 historique ne remplace pas une observation live.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");
 
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 56a6300d..29a8c688 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -781,6 +781,10 @@ export async function fetchPullRequestRemote(input: {
   merged: boolean;
   /** Observed merge commit SHA when GitHub reports one — never invent from head. */
   mergeCommitSha: string | null;
+  mergeable: boolean | null;
+  mergeableState: string | null;
+  commits: number | null;
+  changedFiles: number | null;
 }> {
   const fetchImpl = input.fetchImpl ?? fetch;
   const { owner, name } = parseFullName(input.fullName);
@@ -790,6 +794,10 @@ export async function fetchPullRequestRemote(input: {
     state: string;
     html_url: string;
     merged?: boolean;
+    mergeable?: boolean | null;
+    mergeable_state?: string | null;
+    commits?: number;
+    changed_files?: number;
     merge_commit_sha?: string | null;
     head?: { sha?: string; ref?: string };
     base?: { sha?: string; ref?: string };
@@ -812,6 +820,54 @@ export async function fetchPullRequestRemote(input: {
     baseRef: raw.base?.ref ?? "",
     merged: Boolean(raw.merged),
     mergeCommitSha,
+    mergeable: typeof raw.mergeable === "boolean" ? raw.mergeable : null,
+    mergeableState:
+      typeof raw.mergeable_state === "string" && raw.mergeable_state.trim()
+        ? raw.mergeable_state.trim()
+        : null,
+    commits: typeof raw.commits === "number" ? raw.commits : null,
+    changedFiles: typeof raw.changed_files === "number" ? raw.changed_files : null,
+  };
+}
+
+/** Bounded PR changed-files listing (READ). Never authorizes merge. */
+export async function listPullRequestFilesRemote(input: {
+  token: string;
+  fullName: string;
+  prNumber: number;
+  /** Hard cap — incompleteCoverage when truncated. */
+  bound?: number;
+  fetchImpl?: GitHubFetch;
+}): Promise<{
+  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+  incompleteCoverage: boolean;
+  matchedCount: number;
+}> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const bound = Math.max(1, Math.min(input.bound ?? 40, 100));
+  const { owner, name } = parseFullName(input.fullName);
+  const raw = await ghJson<
+    Array<{
+      filename?: string;
+      status?: string;
+      additions?: number;
+      deletions?: number;
+    }>
+  >(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}/files?per_page=${bound + 1}`, {
+    method: "GET",
+    headers: { Authorization: `Bearer ${input.token}` },
+  });
+  const matchedCount = Array.isArray(raw) ? raw.length : 0;
+  const slice = (Array.isArray(raw) ? raw : []).slice(0, bound);
+  return {
+    files: slice.map((f) => ({
+      filename: f.filename ?? "",
+      status: f.status ?? "unknown",
+      additions: typeof f.additions === "number" ? f.additions : 0,
+      deletions: typeof f.deletions === "number" ? f.deletions : 0,
+    })),
+    incompleteCoverage: matchedCount > bound,
+    matchedCount,
   };
 }
 
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 84c92740..036659ee 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -55,12 +55,22 @@ export type DirectoryEntry = {
 export type PullRequestInfo = {
   number: number;
   title: string;
+  /**
+   * Normalized: `open` | `closed` | `merged` (merged wins over closed when GitHub reports merged).
+   */
   state: string;
   headSha: string;
   baseSha: string;
   headRef: string;
   baseRef: string;
   htmlUrl: string;
+  /** Live mergeability from GitHub when provided; null/undefined = not observed. */
+  mergeable?: boolean | null;
+  mergeableState?: string | null;
+  commits?: number | null;
+  changedFiles?: number | null;
+  /** Observed merge commit SHA when GitHub reports one — never invent from head. */
+  mergeCommitSha?: string | null;
 };
 
 export interface GitHubProvider {
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
index c9e9d941..5fcbfa45 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
@@ -465,6 +465,11 @@ export class RealGitHubReadProvider implements GitHubProvider {
       headRef: pr.headRef,
       baseRef: pr.baseRef,
       htmlUrl: pr.htmlUrl,
+      mergeable: pr.mergeable,
+      mergeableState: pr.mergeableState,
+      commits: pr.commits,
+      changedFiles: pr.changedFiles,
+      mergeCommitSha: pr.mergeCommitSha,
     };
   }
 
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index 16673b65..858e77e3 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -441,3 +441,57 @@ export async function listGitRefs(input: {
           : "Liste bornée aux refs réellement retournées par le fournisseur — aucune ref inventée",
   };
 }
+
+
+/**
+ * Live PR consultation (READ). Uses D9 getPullRequest after project/repo gates.
+ * Never authorizes merge or mutation. Historical D8 must not be substituted for this result.
+ */
+export async function readGitPullRequest(input: {
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
+    const pr = await provider.getPullRequest(input.pilotId, repo.fullName, input.prNumber);
+    const merged = pr.state === "merged";
+    const observedAt = new Date().toISOString();
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      prNumber: pr.number,
+      title: pr.title,
+      state: pr.state,
+      merged,
+      headRef: pr.headRef,
+      baseRef: pr.baseRef,
+      headSha: pr.headSha,
+      baseSha: pr.baseSha,
+      htmlUrl: pr.htmlUrl,
+      mergeable: pr.mergeable ?? null,
+      mergeableState: pr.mergeableState ?? null,
+      commits: pr.commits ?? null,
+      changedFiles: pr.changedFiles ?? null,
+      mergeCommitSha: pr.mergeCommitSha ?? null,
+      observedAt,
+      authorityReminder:
+        "Lecture PR live — jamais un mandat D6 ni une autorisation de merge. Ne pas substituer un fait D8 historique à cette observation.",
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

```

## 8. Diffs tests/docs

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c1546c33..e6845581 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UAT-PR-READ
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 08:15 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — GIT-UAT-01 PR READ + bandeau tour |
+| Type | INC / QA · CRITICAL · **NO RELEASE** |
+| Cause A | `TOOL_NOT_EXPOSED` — D9 `getPullRequest` non outillé Nora |
+| Cause B | UI `activity=error` sur turn `UNKNOWN` (qual UNAVAILABLE) avec copy « tentative/réconciliez » |
+| Fix | `read_git_pull_request` + allowlist + banner copy |
+| Preuves | unit policy/tools/banner/scripted PR read · tsc · REAL READ oracle PR#19 (gh) |
+| Cutover | **NOT EXECUTED** — CANDIDATE FROZEN · RECETTE GO REQUIRED |
+| Push projet | **NONE** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-CUTOVER
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 92de32be..95a467cd 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -80,6 +80,13 @@
 - Matrice : `matrice-capacites-git-chaine-2026-11-22.md`
 - PUBLISH ≠ MERGE conservé (`mergeObserved` uniquement sur fait MERGE).
 
+### GIT-UAT-01 PR READ + bandeau tour (2026-11-22)
+- **Incident A** : `getPullRequest` existait en D9 (REAL+SCRIPTED) mais **non exposé** à Nora (`TOOL_NOT_EXPOSED`). Tour LIVE `tcmd_be190f5c…` : 2 toolCalls (branches) ; qualification `UNAVAILABLE` → status `UNKNOWN` ; Nora affirme à tort l’absence d’outil PR.
+- **Correction A** : `readGitPullRequest` (resource-service) + outil `read_git_pull_request` + allowlist cognitive + consigne adapter ; enrichissement live mergeable/commits/changedFiles.
+- **Incident B** : bandeau `nora-activity-error` dès `j.status === UNKNOWN` — copy « dernière tentative / réconciliez » inadaptée à un tour READ informationnel (assistant livré, zéro effet).
+- **Correction B** : copy UI distinguant consolidation cognitive vs mutation ; conserve l’alerte sans masquer l’anomalie.
+- **Cutover** : **NON** ce contrat — candidat local figé ; GO Morris requis pour RECETTE.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
index 4bc540ec..2ca8a586 100644
--- a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
@@ -81,14 +81,26 @@ describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
     expect(p.toolAllowlist).toContain("read_conversation_messages");
   });
 
+  it("toolAllowlist includes live PR read tool", () => {
+    const p = buildCognitivePolicy("Consulte le statut de la PR #19", "TEST_BOUNDARY");
+    expect(p.toolAllowlist).toContain("read_git_pull_request");
+  });
+
   it("maxTurns follows policy budget without silent hard cap of 12", () => {
-    const p = buildCognitivePolicy("x".repeat(601), "OPERATIONAL_PROVISIONAL");
-    expect(maxTurnsForPolicy(p)).toBe(p.budgets.maxProviderCalls);
-    expect(maxTurnsForPolicy(p)).toBeGreaterThan(12);
-    // Lot D5: short messages keep analyse tools — never tool-less maxTurns=1.
-    const s = buildCognitivePolicy("Merci", "TEST_BOUNDARY");
-    expect(s.profile).toBe("analyse");
-    expect(s.toolAllowlist.length).toBeGreaterThan(0);
-    expect(maxTurnsForPolicy(s)).toBeGreaterThanOrEqual(2);
+    const prevLane = process.env.STUDIO_LANE;
+    process.env.STUDIO_LANE = "DEV";
+    try {
+      const p = buildCognitivePolicy("x".repeat(601), "OPERATIONAL_PROVISIONAL");
+      expect(maxTurnsForPolicy(p)).toBe(p.budgets.maxProviderCalls);
+      expect(maxTurnsForPolicy(p)).toBeGreaterThan(12);
+      // Lot D5: short messages keep analyse tools — never tool-less maxTurns=1.
+      const s = buildCognitivePolicy("Merci", "TEST_BOUNDARY");
+      expect(s.profile).toBe("analyse");
+      expect(s.toolAllowlist.length).toBeGreaterThan(0);
+      expect(maxTurnsForPolicy(s)).toBeGreaterThanOrEqual(2);
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+    }
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-activity-error-banner.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-activity-error-banner.test.ts
new file mode 100644
index 00000000..7188c4a6
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/nora-activity-error-banner.test.ts
@@ -0,0 +1,19 @@
+import { describe, expect, it } from "vitest";
+import { readFileSync } from "node:fs";
+import { join } from "node:path";
+
+describe("Nora activity error banner copy", () => {
+  it("does not imply a failed mutation for informational UNKNOWN turns", () => {
+    const src = readFileSync(
+      join(process.cwd(), "src/components/figma/NoraConversation.tsx"),
+      "utf8",
+    );
+    expect(src).toMatch(/nora-activity-error/);
+    expect(src).toMatch(/Aucune mutation n&apos;est relancée automatiquement/);
+    expect(src).toMatch(/intention d&apos;effet reste ouverte/);
+    // Old mutation-centric wording must not remain as the sole message.
+    expect(src).not.toMatch(
+      /La dernière tentative n&apos;a pas abouti clairement\. Le texte saisi est conservé ;\s*réessayez ou réconciliez si une intention reste ouverte\./,
+    );
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts b/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
new file mode 100644
index 00000000..a8f2967e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/read-git-pull-request.test.ts
@@ -0,0 +1,64 @@
+import { describe, expect, it, afterEach } from "vitest";
+import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
+import { buildNoraGitReadTools } from "@/domains/conversation/git-read-tools";
+import {
+  getScriptedGitHubProvider,
+  resetScriptedMutationCounts,
+} from "@/domains/integrations/scripted-github-provider";
+
+describe("read_git_pull_request exposure", () => {
+  const prevLane = process.env.STUDIO_LANE;
+  const prevProfile = process.env.SFIA_COG_PROFILE_TYPE;
+
+  afterEach(() => {
+    resetScriptedMutationCounts();
+    if (prevLane === undefined) delete process.env.STUDIO_LANE;
+    else process.env.STUDIO_LANE = prevLane;
+    if (prevProfile === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
+    else process.env.SFIA_COG_PROFILE_TYPE = prevProfile;
+  });
+
+  it("cognitive policy allowlists read_git_pull_request", () => {
+    const p = buildCognitivePolicy("Consulte la PR #19 en lecture seule", "TEST_BOUNDARY");
+    expect(p.toolAllowlist).toContain("read_git_pull_request");
+    expect(p.toolAllowlist).toContain("list_project_git_sources");
+  });
+
+  it("buildNoraGitReadTools exposes read_git_pull_request tool name", async () => {
+    const tools = await buildNoraGitReadTools({
+      pilotId: "pilot_test",
+      projectId: "proj_test",
+      operationId: "op_test",
+      generationId: "gen_test",
+      budget: { remainingCalls: 10, remainingChars: 50_000 },
+    });
+    const names = tools.map((t) => (t as { name?: string }).name);
+    expect(names).toContain("read_git_pull_request");
+    expect(names).toContain("list_git_refs");
+    expect(names).not.toContain("merge_pull_request");
+  });
+
+  it("scripted getPullRequest is read-only (no merge counter bump)", async () => {
+    const provider = getScriptedGitHubProvider();
+    const pilotId = `pilot_pr_read_${Date.now()}`;
+    const fullName = "acme/docs-projet";
+    resetScriptedMutationCounts(pilotId, fullName);
+    await provider.createBranch(pilotId, fullName, "sfia/pub-pr-read", "a".repeat(40)).catch(() => {
+      /* branch may already exist in shared scripted store */
+    });
+    const created = await provider.createPullRequest({
+      pilotId,
+      fullName,
+      title: "UAT PR read",
+      head: "sfia/pub-pr-read",
+      base: "main",
+      body: "read-only test",
+    });
+    const before = provider.getMutationCounts?.(pilotId, fullName);
+    const pr = await provider.getPullRequest(pilotId, fullName, created.number);
+    const after = provider.getMutationCounts?.(pilotId, fullName);
+    expect(pr.number).toBe(created.number);
+    expect(pr.htmlUrl).toBeTruthy();
+    expect(after?.mergePR ?? 0).toBe(before?.mergePR ?? 0);
+  });
+});

```

## 9. Tests / Fake-Real

| Suite | Résultat |
| --- | --- |
| tsc | PASS |
| unit PR tool + policy + banner | PASS |
| REAL READ oracle gh PR#19 | REAL BOUNDARY PROVEN |
| Nora LIVE GIT-UAT-01 sur nouveau build | **NOT PROVEN** (pas de cutover) |
| Mutation GitHub | **NONE** |

## 10. Verdicts

- **DIAGNOSTIC COMPLETE — ROOT CAUSES IDENTIFIED**
- **CORRECTIONS IMPLEMENTED — DETERMINISTIC/BROWSER PROVEN** (unit + banner source)
- **REAL READ PR VERIFIED — NORA CAPABILITY PROVEN** → **NON** (outil prêt ; LIVE sur RECETTE après GO)
- **CANDIDATE FROZEN — RECETTE GO REQUIRED**
- E08 non ADOPTÉ

### Reprise Morris
1. GO cutover `2a607fb0` / `riBCGR6TH5dbajQ1cNyhG`
2. Rejouer GIT-UAT-01 (puis 02–03) en lecture seule sur PR #19
3. Vérifier absence du bandeau mutation-style si tour COMPLETE

---
FIN Review Pack FULL — GIT-UAT PR READ
