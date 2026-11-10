# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 8 G1 — REC-11 / REC-07 / REC-08

**Date/heure :** 2026-11-10 01:18:05 +0100 (Europe/Paris)
**Mandat :** GO Morris technique G1 confirmé 2026-11-10 — DEV only
**Profil :** CRITICAL / INC correctif intégré
**Verdict candidat :** G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO

---

## 1. Contrat / GO

- Périmètre : ML4-REC-11 (P0), ML4-REC-07 (P1), ML4-REC-08 (P1)
- REC-10 : non-régression obligatoire (pas de reconstruction)
- Interdits respectés : pas de push Product, PR, merge, déploiement RECETTE, mutation GitHub REAL, STABLE, ML4 ACCEPTED
- Handoff L3 borné : autorisé (publish-in-cycle)

---

## 2. Git Truth Check

### Initial (avant écriture)
| Champ | Valeur |
|---|---|
| pwd | /Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branche | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD | 771844fda083ce3c1858b77b0012e5bf2b801605 |
| tree | 030a9e87064bade155ae3c585f9954d65d52687f |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| staged | (vide) |
| worktree produit | …-next-ml4-git-collaboration @ 771844fd |
| RECETTE worktree | …-next-ml4-recette-build-771844fd @ 771844fd (détaché) |

Préexistants untracked (conservés, non touchés) : manifests ENV-01, scripts qualify, preuves oauth/publication.

### Final (après commit local)
| Champ | Valeur |
|---|---|
| HEAD | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| tree | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| parent | 771844fda083ce3c1858b77b0012e5bf2b801605 |
| branche | fix/next-ml4-chat-first-d4-provenance-20261109 (inchangée) |
| push Product | AUCUN |

---

## 3. Sources consultées (rôle)

- Anomalies RECETTE docs@60f6c046 §10 + REC-07/08/10/11 (registre probatoire)
- Code local 771844fd : git-read-tools, resource-service, effect-service classifyRemoteReadError, document-act ACK, nora-adapter, real mapGitHubHttpError
- Tests existants ml4-chat-first PG + document-act unit
- scripts/sfia/publish-review-handoff.sh + README
- Delivery-history / matrice / specification-technique (sync factuelle)

---

## 4. Diagnostic G0 confirmé sur candidat

### REC-11
- D7 `buildInspection` / `classifyRemoteReadError` : NOT_FOUND → CREATE **déjà présent** — **non modifié**
- D9 REAL : 404 → NOT_FOUND ; 401/403 → ACCESS_DENIED — **inchangé**
- D3 `read_git_file` : catch-all → DENIED — **cause R12-D confirmée** → corrigée

### REC-07
- Production D9 `blobSha`/`commitSha`/`permalink` déjà présente
- Défaut : consommation + risque URL blob — **garde renforcée**

### REC-08
- ACK applicatif déjà autorité
- Formulations « ne peux pas confirmer la sauvegarde » hors TRANSACTIONAL_CLAIM_RE — **étendues**

---

## 5. Macro-lot / résultat utilisateur

Nora peut distinguer AVAILABLE / FILE_ABSENT (tip vérifié) / DENIED / REF_UNRESOLVED / AMBIGUOUS / UNAVAILABLE ; conduire vers préparation D7 CREATE inspectable sans D6 implicite ; citer provenance blob≠commit ; restitution D4 AVAILABLE sans contradiction « ne peux pas confirmer ».

**Hors cycle :** publication Git LIVE, R12/R13/R14 USER, REAL mutations.

---

## 6–8. Corrections par propriétaire

### REC-11 — `resource-service.ts` + `git-read-tools.ts`
- Qualifie FILE_ABSENT seulement après getRefSha réussi
- SHA pin 404 → AMBIGUOUS
- Projet NOT_FOUND / ACCESS_DENIED ≠ FILE_ABSENT
- Classifier outil + guidance anti-autorité

### REC-07 — permalinkOrNull + identities outil + prompt
- Encodage path ; refuse permalink si blob==commit ou non vérifié
- identities blob_content / commit_revision dans payload outil

### REC-08 — document-act TRANSACTIONAL_CLAIM_RE
- Strip « ne peux pas confirmer la sauvegarde » / « impossible de confirmer » si AVAILABLE

### D7
- Aucune modification moteur (tests prouvent CREATE)

---

## 9. Blast radius (fichiers du commit d7f1507a56e50660ea24903c2dc563c249ba9086)

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
M	projects/sfia-studio-next/construction/integration-git/specification-technique.md
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/document-act.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-read-tools.test.ts
```

## 10. Diff stat
```
 .../construction/delivery-history.md               |  17 ++
 .../integration-git/matrice-acceptation.md         |  16 ++
 .../integration-git/specification-technique.md     |  17 +-
 .../web/src/domains/conversation/document-act.ts   |   4 +-
 .../web/src/domains/conversation/git-read-tools.ts | 225 +++++++++++++++++++--
 .../web/src/domains/conversation/nora-adapter.ts   |   3 +-
 .../src/domains/integrations/resource-service.ts   | 109 ++++++++--
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  97 +++++++++
 .../web/tests/unit/document-act.test.ts            |  42 ++++
 .../web/tests/unit/git-read-tools.test.ts          | 115 +++++++++++
 10 files changed, 611 insertions(+), 34 deletions(-)
```

## 11. Diffs complets exploitables

### 11.a git-read-tools.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index a67ba830..af29a4e3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -1,4 +1,12 @@
-import { listGitRefs, listProjectGitSources, readGitFile } from "@/domains/integrations/resource-service";
+import {
+  FILE_ABSENT_AT_VERIFIED_REF,
+  READ_NOT_FOUND_UNQUALIFIED,
+  REF_UNRESOLVED,
+  listGitRefs,
+  listProjectGitSources,
+  readGitFile,
+} from "@/domains/integrations/resource-service";
+import { StudioError, isStudioError, toStudioError } from "@/lib/http-errors";
 import { emitObs } from "@/lib/observability";
 import type { ToolCoverage } from "./d4-read-tools";

@@ -10,12 +18,154 @@ export type GitToolScope = {
   budget: { remainingCalls: number; remainingChars: number };
 };

+/**
+ * Structured read outcomes for Nora — never authority for D6/D7 publication.
+ * FILE_ABSENT means path missing under a verified ref tip; it does not authorize write.
+ */
+export type GitReadToolStatus =
+  | "AVAILABLE"
+  | "FILE_ABSENT"
+  | "DENIED"
+  | "REF_UNRESOLVED"
+  | "AMBIGUOUS"
+  | "UNAVAILABLE"
+  | "INVALID_REQUEST";
+
+export type ClassifiedGitReadFailure = {
+  status: Exclude<GitReadToolStatus, "AVAILABLE">;
+  reason: string;
+  code: string;
+  /** True only for FILE_ABSENT under verified ref — hints CREATE may be preparable via D7, not via this tool. */
+  absenceQualified: boolean;
+  coverage: ToolCoverage;
+  guidance: string;
+};
+
 function chargeBudget(scope: GitToolScope, payload: unknown): number {
   const size = JSON.stringify(payload).length;
   scope.budget.remainingChars = Math.max(0, scope.budget.remainingChars - size);
   return size;
 }

+/**
+ * Map Studio/provider failures to honest tool statuses.
+ * Project NOT_FOUND / ACCESS_DENIED never become FILE_ABSENT.
+ * Generic GitHub 404 without FILE_ABSENT_AT_VERIFIED_REF never becomes FILE_ABSENT.
+ */
+export function classifyReadGitFileFailure(e: unknown): ClassifiedGitReadFailure {
+  const err = isStudioError(e) ? e : toStudioError(e);
+  const msg = err.message ?? "";
+
+  if (err.code === "INVALID_REQUEST") {
+    return {
+      status: "INVALID_REQUEST",
+      reason: msg,
+      code: err.code,
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance: "Fournir une ref Git explicite ; main n'est jamais inventé.",
+    };
+  }
+
+  if (err.code === "ACCESS_DENIED" || err.code === "AUTH_UNAUTHENTICATED" || err.code === "SESSION_INVALID") {
+    return {
+      status: "DENIED",
+      reason: msg,
+      code: err.code,
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance: "Accès refusé — ne pas inférer l'absence du fichier ni proposer CREATE.",
+    };
+  }
+
+  if (err.code === "DEPENDENCY_UNAVAILABLE") {
+    return {
+      status: "UNAVAILABLE",
+      reason: msg,
+      code: err.code,
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance: "Dépendance Git indisponible — aucune conclusion d'absence ni de publication.",
+    };
+  }
+
+  if (err.code === "AMBIGUOUS" || msg.startsWith(READ_NOT_FOUND_UNQUALIFIED)) {
+    return {
+      status: "AMBIGUOUS",
+      reason: msg,
+      code: err.code === "AMBIGUOUS" ? err.code : "AMBIGUOUS",
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance:
+        "404/NOT_FOUND non qualifié — ne pas conclure à l'absence du fichier et ne pas autoriser CREATE.",
+    };
+  }
+
+  if (err.code === "NOT_FOUND") {
+    if (msg.startsWith(FILE_ABSENT_AT_VERIFIED_REF)) {
+      return {
+        status: "FILE_ABSENT",
+        reason: msg,
+        code: err.code,
+        absenceQualified: true,
+        coverage: "COMPLETE",
+        guidance:
+          "Fichier absent à une ref tip vérifiée. Cela peut justifier une préparation D7 CREATE inspectable ; cet outil n'autorise pas D6 ni d'écriture Git.",
+      };
+    }
+    if (msg.startsWith(REF_UNRESOLVED)) {
+      return {
+        status: "REF_UNRESOLVED",
+        reason: msg,
+        code: err.code,
+        absenceQualified: false,
+        coverage: "DENIED",
+        guidance: "Ref introuvable ou inaccessible — ne pas conclure à l'absence du chemin cible.",
+      };
+    }
+    if (/projet introuvable/i.test(msg)) {
+      return {
+        status: "DENIED",
+        reason: msg,
+        code: err.code,
+        absenceQualified: false,
+        coverage: "DENIED",
+        guidance: "Projet introuvable — ce n'est pas une preuve d'absence de fichier Git.",
+      };
+    }
+    // Unqualified NOT_FOUND (legacy / unexpected): never FILE_ABSENT.
+    return {
+      status: "AMBIGUOUS",
+      reason: msg,
+      code: err.code,
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance:
+        "NOT_FOUND non qualifié — ne pas inférer FILE_ABSENT ni CREATE depuis ce seul signal.",
+    };
+  }
+
+  if (err.code === "CONFLICT" || err.code === "REQUIRES_REQUALIFICATION") {
+    return {
+      status: "AMBIGUOUS",
+      reason: msg,
+      code: err.code,
+      absenceQualified: false,
+      coverage: "DENIED",
+      guidance: "État conflictuel / base périmée — requalifier avant toute préparation.",
+    };
+  }
+
+  return {
+    status: "DENIED",
+    reason: e instanceof Error ? e.message : "ACCESS_DENIED",
+    code: err instanceof StudioError ? err.code : "INTERNAL",
+    absenceQualified: false,
+    coverage: "DENIED",
+    guidance: "Lecture refusée — aucune conclusion d'absence ni d'autorisation.",
+  };
+}
+
 export async function buildNoraGitReadTools(scope: GitToolScope) {
   const { tool } = await import("@openai/agents");
   const { z } = await import("zod");
@@ -52,7 +202,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
     tool({
       name: "read_git_file",
       description:
-        "Read a bounded file from an attached Git repo. ref is mandatory — never assume main. Provenance distinguishes blobSha (content) from commitSha (revision); never treat blobSha as a commit.",
+        "Read a bounded file from an attached Git repo. ref is mandatory — never assume main. " +
+        "Statuses: AVAILABLE (content+provenance), FILE_ABSENT (path missing at verified ref tip — not a write grant), " +
+        "DENIED, REF_UNRESOLVED, AMBIGUOUS, UNAVAILABLE. " +
+        "Provenance: blobSha is content id; commitSha is revision; never build /blob/{blobSha}/path URLs.",
       parameters: z.object({
         repositoryId: z.string(),
         path: z.string(),
@@ -73,31 +226,75 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
           });
           const max = Math.min(8000, scope.budget.remainingChars);
           const excerpt = result.content.slice(0, max);
+          const prov = result.provenance;
           const payload = {
-            status: "AVAILABLE",
+            status: "AVAILABLE" as const,
             excerpt,
             provenance: {
-              ...result.provenance,
-              // Explicit aliases for model clarity (same values as typed provenance).
-              blobSha: result.provenance.blobSha,
-              commitSha: result.provenance.commitSha,
-              commitShaVerified: result.provenance.commitShaVerified,
-              permalink: result.provenance.permalink,
+              owner: prov.owner,
+              fullName: prov.fullName,
+              path: prov.path,
+              requestedRef: prov.requestedRef,
+              blobSha: prov.blobSha,
+              commitSha: prov.commitSha,
+              commitShaVerified: prov.commitShaVerified,
+              permalink: prov.permalink,
+              // Explicit typing for the model — never confuse identities.
+              identities: {
+                blobSha: { value: prov.blobSha, kind: "blob_content" as const },
+                commitSha: {
+                  value: prov.commitSha,
+                  kind: "commit_revision" as const,
+                  verified: prov.commitShaVerified,
+                },
+              },
               warning:
-                "blobSha is a content object id — never use it in /blob/{sha}/path as if it were a commit",
+                "blobSha is a content object id — never use it in /blob/{sha}/path as if it were a commit. " +
+                "Use permalink only when commitShaVerified is true; otherwise state that no commit permalink is available.",
             },
             authorityReminder: result.authorityReminder,
             coverage: (excerpt.length < result.content.length ? "PARTIAL" : "COMPLETE") as ToolCoverage,
           };
           const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.read_git_file",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              status: "AVAILABLE",
+              commit_sha_verified: prov.commitShaVerified,
+              chars_charged: charsCharged,
+            },
+          });
           return { ...payload, charsCharged };
         } catch (e) {
-          return {
-            status: "DENIED",
-            reason: e instanceof Error ? e.message : "ACCESS_DENIED",
-            coverage: "DENIED" as ToolCoverage,
+          const classified = classifyReadGitFileFailure(e);
+          const payload = {
+            status: classified.status,
+            reason: classified.reason,
+            code: classified.code,
+            absenceQualified: classified.absenceQualified,
+            coverage: classified.coverage,
+            guidance: classified.guidance,
+            authorityReminder:
+              "Git read tools never authorize D6 HumanDecision or D7/D9 mutation. FILE_ABSENT is not a publication grant.",
             charsCharged: 0,
           };
+          emitObs({
+            event_name: "d3.tool.read_git_file",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: classified.status === "FILE_ABSENT" ? "SUCCESS" : "DENIED",
+            meta: {
+              status: classified.status,
+              absence_qualified: classified.absenceQualified,
+              code: classified.code,
+            },
+          });
+          return payload;
         }
       },
     }),
```

### 11.b resource-service.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index c901d635..43701954 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -6,13 +6,20 @@ import {
   projectGitLinks,
   projects,
 } from "@/db/schema";
-import { StudioError } from "@/lib/http-errors";
+import { StudioError, toStudioError } from "@/lib/http-errors";
 import { resolveGitHubProvider } from "./github-provider";
 import type { GitFileProvenance, GitSourceSummary } from "./types";

 const SHA_RE = /^[0-9a-f]{40}$/i;
 const MAX_REFS = 40;

+/** Prefix on StudioError.message when path absence is proven under a verified ref tip. */
+export const FILE_ABSENT_AT_VERIFIED_REF = "FILE_ABSENT_AT_VERIFIED_REF";
+/** Prefix when a mobile ref could not be resolved to a commit. */
+export const REF_UNRESOLVED = "REF_UNRESOLVED";
+/** Prefix when NOT_FOUND cannot prove file absence (e.g. bare SHA pin). */
+export const READ_NOT_FOUND_UNQUALIFIED = "READ_NOT_FOUND_UNQUALIFIED";
+
 async function gateRead(pilotId: string, projectId: string, repositoryId: string) {
   const project = (
     await db
@@ -111,14 +118,46 @@ export async function listProjectGitSources(
     }));
 }

-function buildPermalink(fullName: string, commitSha: string, path: string): string {
-  const cleanPath = path.replace(/^\/+/, "");
+/**
+ * Permalink to path at a verified commit. Never uses blobSha.
+ * Path segments are percent-encoded (spaces / special chars).
+ */
+export function buildGitFilePermalink(fullName: string, commitSha: string, path: string): string {
+  const cleanPath = path
+    .replace(/^\/+/, "")
+    .split("/")
+    .filter((seg) => seg.length > 0)
+    .map((seg) => encodeURIComponent(seg))
+    .join("/");
   return `https://github.com/${fullName}/blob/${commitSha}/${cleanPath}`;
 }

+/** Refuse any permalink that embeds the blob content id as if it were a commit. */
+export function permalinkOrNull(input: {
+  fullName: string;
+  commitSha: string | null;
+  commitShaVerified: boolean;
+  blobSha: string;
+  path: string;
+}): string | null {
+  if (!input.commitShaVerified || !input.commitSha) return null;
+  if (input.blobSha.toLowerCase() === input.commitSha.toLowerCase()) return null;
+  const url = buildGitFilePermalink(input.fullName, input.commitSha, input.path);
+  // Hard guard: blobSha must never appear as the /blob/{sha}/ segment.
+  if (url.includes(`/blob/${input.blobSha.toLowerCase()}/`)) return null;
+  if (url.includes(`/blob/${input.blobSha}/`)) return null;
+  return url;
+}
+
 /**
  * Read a file with honest blob/commit provenance.
  * Resolves commit first, then reads at that commit pin to avoid head drift.
+ *
+ * Absence qualification:
+ * - FILE_ABSENT_AT_VERIFIED_REF only after a mobile ref resolved to a commit tip
+ *   and Contents returned NOT_FOUND for the path at that tip.
+ * - Bare SHA pins yielding NOT_FOUND stay READ_NOT_FOUND_UNQUALIFIED (no CREATE hint).
+ * - Project/auth/link failures remain gate errors (NOT_FOUND project / ACCESS_DENIED).
  */
 export async function readGitFile(input: {
   pilotId: string;
@@ -141,17 +180,50 @@ export async function readGitFile(input: {
     commitSha = requestedRef.toLowerCase();
     commitShaVerified = false;
   } else {
-    commitSha = (await provider.getRefSha(input.pilotId, repo.fullName, requestedRef)).toLowerCase();
-    commitShaVerified = true;
+    try {
+      commitSha = (await provider.getRefSha(input.pilotId, repo.fullName, requestedRef)).toLowerCase();
+      commitShaVerified = true;
+    } catch (e) {
+      const err = toStudioError(e);
+      if (err.code === "NOT_FOUND") {
+        throw new StudioError(
+          "NOT_FOUND",
+          `${REF_UNRESOLVED}: ref Git inaccessible ou inexistante (${requestedRef})`,
+          { httpStatus: 404, cause: e },
+        );
+      }
+      throw isRethrowableStudio(e) ? e : err;
+    }
   }

   const readRef = commitSha ?? requestedRef;
-  const file = await provider.getFileContent(
-    input.pilotId,
-    repo.fullName,
-    input.path,
-    readRef,
-  );
+  let file: Awaited<ReturnType<typeof provider.getFileContent>>;
+  try {
+    file = await provider.getFileContent(
+      input.pilotId,
+      repo.fullName,
+      input.path,
+      readRef,
+    );
+  } catch (e) {
+    const err = toStudioError(e);
+    if (err.code === "NOT_FOUND") {
+      if (commitShaVerified && commitSha) {
+        throw new StudioError(
+          "NOT_FOUND",
+          `${FILE_ABSENT_AT_VERIFIED_REF}: path=${input.path} commit=${commitSha} requestedRef=${requestedRef} fullName=${repo.fullName}`,
+          { httpStatus: 404, cause: e },
+        );
+      }
+      // SHA pin or unverified tip: 404 does not prove path absence vs bad object.
+      throw new StudioError(
+        "AMBIGUOUS",
+        `${READ_NOT_FOUND_UNQUALIFIED}: absence de fichier non prouvée sous ref non vérifiée (${requestedRef})`,
+        { httpStatus: 409, cause: e },
+      );
+    }
+    throw isRethrowableStudio(e) ? e : err;
+  }
   const blobSha = file.sha.toLowerCase();
   // Defensive: Contents `sha` is a blob. If a provider still returns the commit
   // as `sha`, refuse to treat that value as both blob and commit.
@@ -174,10 +246,13 @@ export async function readGitFile(input: {
     blobSha,
     commitSha,
     commitShaVerified,
-    permalink:
-      commitShaVerified && commitSha
-        ? buildPermalink(repo.fullName, commitSha, input.path)
-        : null,
+    permalink: permalinkOrNull({
+      fullName: repo.fullName,
+      commitSha,
+      commitShaVerified,
+      blobSha,
+      path: input.path,
+    }),
     readAt: readAt.toISOString(),
     permissions: ["read"],
     freshnessLimitAt: freshness.toISOString(),
@@ -190,6 +265,10 @@ export async function readGitFile(input: {
   };
 }

+function isRethrowableStudio(e: unknown): e is StudioError {
+  return e instanceof StudioError;
+}
+
 export async function listGitRefs(input: {
   pilotId: string;
   projectId: string;
```

### 11.c document-act.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index c1a07b3c..2e67f20d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -1083,7 +1083,7 @@ export type DocumentEffectSummary = {

 /** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
 const TRANSACTIONAL_CLAIM_RE =
-  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;
+  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+(?:peux|puis)\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser|confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement|que(?:\s+la)?\s*sauvegarde)?|garantir(?:\s+(?:la\s+)?sauvegarde)?))|(?:impossible|incapable)\s+de\s+confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement))?|ne\s+(?:peux|puis)\s+pas\s+confirmer(?:\s+(?:la\s+)?sauvegarde)?|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;

 /** Nora tool-boundary claims that must not be presented as the cause of an observed Studio D4 effect. */
 const NORA_TOOL_BOUNDARY_CLAIM_RE =
@@ -1250,7 +1250,7 @@ export function hasCompetingTransactionalClaim(
   if (effect.status === "AVAILABLE") {
     return (
       TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
-      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter|appliquer)|non\s+enregistré|outils?\s+disponibles|lecture\s+seule)\b/i.test(
+      /\b(?:aucune\s+révision|ne\s+(?:peux|puis)\s+(?:donc\s+)?pas\s+(?:exécuter|appliquer|confirmer)|impossible\s+de\s+confirmer|non\s+enregistré|outils?\s+disponibles|lecture\s+seule)\b/i.test(
         withoutAck,
       )
     );
```

### 11.d nora-adapter.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 1fc52ed2..3a2e37fe 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -104,7 +104,8 @@ const SYSTEM_INSTRUCTIONS = [
   "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
   "- Contrat proposition D4: place UNIQUEMENT le Markdown documentaire destiné à D4 dans UNE fence dont le tag exact est `sfia-document` (```sfia-document … ``` ou ~~~sfia-document). Les fences `markdown`/`md`/`mdx` illustratives ne sont PAS des propositions D4. Hors fence: explications, compte rendu post-exécution, réserves. Une seule fence `sfia-document` par réponse; elle doit être correctement fermée (un bloc de code interne plus court ne la termine pas).",
   "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
-  "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils.",
+  "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils; n'invente jamais d'URL /blob/{blobSha}/… ; utilise permalink seulement si commitShaVerified=true.",
+  "- Lecture Git: AVAILABLE = contenu; FILE_ABSENT = chemin absent à une ref tip vérifiée (pas une autorisation d'écriture); DENIED/REF_UNRESOLVED/AMBIGUOUS/UNAVAILABLE = aucune conclusion d'absence ni de CREATE.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");

```

### 11.e document-act.test.ts (extrait tests ajoutés)
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index 0408aa25..678b1935 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -625,6 +625,48 @@ describe("document-act ACK coherence (finalisation)", () => {
     ).toBe(false);
   });

+  it("REC-08: cannot-confirm-save negation stripped when AVAILABLE", () => {
+    const cognitive =
+      "Je ne peux pas confirmer la sauvegarde du document.\n\n" +
+      "Impossible de confirmer l'enregistrement pour l'instant.\n\n" +
+      "# RECETTE ML4 — Publication documentaire R12\n\nCorps utile.";
+    const out = composeDocumentTurnMessage(cognitive, {
+      act: "CREATE",
+      status: "AVAILABLE",
+      documentId: "doc_21a9e4ad-8224-4669-8172-2a66e80f65de",
+      revisionId: "drev_7d7c1c6d-79f8-4f64-83b6-bca290961166",
+      revisionNumber: 1,
+    });
+    expect(out).toMatch(/Résultat applicatif D4/);
+    expect(out).toMatch(/AVAILABLE/);
+    expect(out).toContain("doc_21a9e4ad-8224-4669-8172-2a66e80f65de");
+    expect(out).toContain("Corps utile.");
+    expect(out).not.toMatch(/ne peux pas confirmer la sauvegarde/i);
+    expect(out).not.toMatch(/Impossible de confirmer l['’]enregistrement/i);
+    expect(
+      hasCompetingTransactionalClaim(out, {
+        act: "CREATE",
+        status: "AVAILABLE",
+        documentId: "doc_21a9e4ad-8224-4669-8172-2a66e80f65de",
+        revisionNumber: 1,
+      }),
+    ).toBe(false);
+  });
+
+  it("REC-08: cannot-confirm phrases kept when NOT_EXECUTED (no fake success)", () => {
+    const cognitive = "Je ne peux pas confirmer la sauvegarde — aucune écriture n'a été tentée.";
+    const out = composeDocumentTurnMessage(cognitive, {
+      act: "NONE",
+      status: "NOT_EXECUTED",
+      reason: "NO_EXPLICIT_WRITE",
+    });
+    expect(out).toMatch(/NOT_EXECUTED/);
+    expect(out).not.toMatch(/AVAILABLE/);
+    // Pre-effect: strip still removes transactional claim units that match the RE,
+    // but ACK remains the authority — ensure no fabricated AVAILABLE.
+    expect(out).toMatch(/Transaction D4: non tentée/);
+  });
+
   it("removes false success when FAILED", () => {
     const text = reconcileNarrationWithDocumentEffect("J'ai enregistré le document avec succès.", {
       act: "CREATE",
```

### 11.f ml4-chat-first-d4-provenance.pg.test.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 4fcddb4f..04d3dc1a 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -13,7 +13,9 @@ import {
   startGitHubAuthorization,
 } from "@/domains/integrations/authorization-service";
 import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
+import { classifyReadGitFileFailure } from "@/domains/conversation/git-read-tools";
 import {
+  FILE_ABSENT_AT_VERIFIED_REF,
   listGitRefs,
   readGitFile,
 } from "@/domains/integrations/resource-service";
@@ -21,6 +23,11 @@ import {
   getScriptedGitHubProvider,
   resetScriptedStore,
 } from "@/domains/integrations/scripted-github-provider";
+import { StudioError, isStudioError } from "@/lib/http-errors";
+import {
+  inspectionAllowsAuthorization,
+  preparePublication,
+} from "@/domains/execution/effect-service";
 import {
   getDocumentRevision,
   listDocumentRevisions,
@@ -494,6 +501,96 @@ Fin.
     expect(refs.refs.every((r) => r.sha.length === 40)).toBe(true);
   });

+  it("REC-11: missing path at verified main → FILE_ABSENT + D7 CREATE inspectable", async () => {
+    const { pilotId, projectId, preparationId } = await seedProject("ml4-rec11");
+    const sessionId = newId("sid");
+    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
+    const status = await completeGitHubAuthorization({
+      pilotId,
+      state,
+      studioSessionId: sessionId,
+    });
+    const repoId = status.repositories[0]!.id;
+    await attachRepositoryToProject(pilotId, projectId, repoId);
+
+    const absentPath = "docs/recette-studio-next/publication-documentaire.md";
+    let caught: unknown;
+    try {
+      await readGitFile({
+        pilotId,
+        projectId,
+        repositoryId: repoId,
+        path: absentPath,
+        ref: "main",
+      });
+    } catch (e) {
+      caught = e;
+    }
+    expect(caught).toBeTruthy();
+    expect(isStudioError(caught)).toBe(true);
+    expect((caught as StudioError).code).toBe("NOT_FOUND");
+    expect((caught as StudioError).message.startsWith(FILE_ABSENT_AT_VERIFIED_REF)).toBe(true);
+
+    const classified = classifyReadGitFileFailure(caught);
+    expect(classified.status).toBe("FILE_ABSENT");
+    expect(classified.absenceQualified).toBe(true);
+
+    // SHA pin of unknown object → AMBIGUOUS, never FILE_ABSENT
+    let pinCaught: unknown;
+    try {
+      await readGitFile({
+        pilotId,
+        projectId,
+        repositoryId: repoId,
+        path: absentPath,
+        ref: "0123456789abcdef0123456789abcdef01234567",
+      });
+    } catch (e) {
+      pinCaught = e;
+    }
+    const pinClassified = classifyReadGitFileFailure(pinCaught);
+    expect(pinClassified.status).toBe("AMBIGUOUS");
+    expect(pinClassified.absenceQualified).toBe(false);
+
+    // D7 prepare CREATE for same absent path (SCRIPTED — no REAL mutation)
+    const saved = await savePreparationDocument(
+      pilotId,
+      preparationId,
+      "RECETTE ML4 — Publication documentaire R12",
+      "# RECETTE ML4 — Publication documentaire R12\n\n## Contexte\n\nx\n\n## Contenu\n\ny\n\n## Limites\n\nz\n\n## Suite\n\nw\n",
+      undefined,
+      { correlationKey: newId("corr") },
+    );
+    expect(saved.status).toBe("AVAILABLE");
+    if (saved.status !== "AVAILABLE" || !("documentId" in saved) || !saved.documentId) {
+      throw new Error("save failed");
+    }
+    const rev = (
+      await db
+        .select()
+        .from(documentRevisions)
+        .where(eq(documentRevisions.documentId, saved.documentId))
+        .limit(1)
+    )[0];
+    if (!rev) throw new Error("revision missing");
+
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId: saved.documentId,
+      revisionId: rev.id,
+      repositoryId: repoId,
+      targetPath: absentPath,
+      targetBranch: "main",
+      correlationKey: newId("corr"),
+    });
+    expect(prepared.status).toBe("PREPARED");
+    expect(prepared.plan?.inspection.kind).toBe("CREATE");
+    expect(prepared.plan?.inspection.unifiedDiff).toMatch(/^\+/m);
+    expect(inspectionAllowsAuthorization("CREATE")).toBe(true);
+    // No D6/dispatch in this test — prepare only.
+  });
+
   it("R06 oracle: quoted title revise via postUserMessageAndNora (DET fixture)", async () => {
     const title = "Références externes — Enseignements de Chantiers360";
     // Structural twin of RECETTE v1 (numbered ATX + Source 2 + 3.2 + ordered list) — sanitized.
```

### 11.g git-read-tools.test.ts (création complète)
```typescript
import { describe, expect, it } from "vitest";
import { classifyReadGitFileFailure } from "@/domains/conversation/git-read-tools";
import {
  FILE_ABSENT_AT_VERIFIED_REF,
  READ_NOT_FOUND_UNQUALIFIED,
  REF_UNRESOLVED,
  buildGitFilePermalink,
  permalinkOrNull,
} from "@/domains/integrations/resource-service";
import { StudioError } from "@/lib/http-errors";

describe("REC-11 classifyReadGitFileFailure", () => {
  it("maps FILE_ABSENT_AT_VERIFIED_REF to FILE_ABSENT (qualified)", () => {
    const out = classifyReadGitFileFailure(
      new StudioError(
        "NOT_FOUND",
        `${FILE_ABSENT_AT_VERIFIED_REF}: path=docs/x.md commit=abc requestedRef=main fullName=o/r`,
      ),
    );
    expect(out.status).toBe("FILE_ABSENT");
    expect(out.absenceQualified).toBe(true);
    expect(out.guidance).toMatch(/D7 CREATE/i);
  });

  it("never maps project NOT_FOUND to FILE_ABSENT", () => {
    const out = classifyReadGitFileFailure(new StudioError("NOT_FOUND", "Projet introuvable"));
    expect(out.status).toBe("DENIED");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps REF_UNRESOLVED distinctly", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("NOT_FOUND", `${REF_UNRESOLVED}: ref Git inaccessible ou inexistante (ghost)`),
    );
    expect(out.status).toBe("REF_UNRESOLVED");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps ACCESS_DENIED / 403-class to DENIED — never CREATE hint", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("ACCESS_DENIED", "GitHub FORBIDDEN/UNAUTHORIZED (403)", { httpStatus: 403 }),
    );
    expect(out.status).toBe("DENIED");
    expect(out.absenceQualified).toBe(false);
    expect(out.guidance).toMatch(/ne pas inférer l'absence/i);
  });

  it("maps unqualified NOT_FOUND to AMBIGUOUS", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("NOT_FOUND", "GitHub ressource introuvable (404)"),
    );
    expect(out.status).toBe("AMBIGUOUS");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps READ_NOT_FOUND_UNQUALIFIED / AMBIGUOUS to AMBIGUOUS", () => {
    const a = classifyReadGitFileFailure(
      new StudioError("AMBIGUOUS", `${READ_NOT_FOUND_UNQUALIFIED}: absence non prouvée`),
    );
    expect(a.status).toBe("AMBIGUOUS");
    expect(a.absenceQualified).toBe(false);
  });

  it("maps DEPENDENCY_UNAVAILABLE to UNAVAILABLE", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub TIMEOUT", { httpStatus: 503 }),
    );
    expect(out.status).toBe("UNAVAILABLE");
    expect(out.absenceQualified).toBe(false);
  });
});

describe("REC-07 permalink / blob vs commit", () => {
  it("builds commit permalink with encoded path segments", () => {
    const url = buildGitFilePermalink("acme/repo", "a".repeat(40), "docs/recette studio/file.md");
    expect(url).toBe(
      `https://github.com/acme/repo/blob/${"a".repeat(40)}/docs/recette%20studio/file.md`,
    );
    expect(url).not.toMatch(/ /);
  });

  it("permalinkOrNull refuses blobSha-as-commit and unverified commit", () => {
    const blob = "b".repeat(40);
    const commit = "c".repeat(40);
    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: commit,
        commitShaVerified: true,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBe(`https://github.com/acme/repo/blob/${commit}/README.md`);

    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: blob,
        commitShaVerified: true,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBeNull();

    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: commit,
        commitShaVerified: false,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBeNull();
  });
});
```

### 11.h documentation (matrice §35 + spec §14 + delivery)
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index eaf63f64..408e3dad 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1280,3 +1280,20 @@ Append-only logical journal of Cursor product deliveries.
 | RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
 | Push Product | **AUCUN** |
 | Verdict | `CREATE_PLEASE_RE AUTHORITY GAP FIXED — DETERMINISTICALLY VERIFIED LOCALLY — READY FOR CHATGPT REVIEW` |
+
+## delivery_id: DELIV-2026-11-10-ML4-G1-REC11-07-08
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-10 ~01:20 CET |
+| Macro-capacité | R5 / ML4 — G1 correctif intégré REC-11 / REC-07 / REC-08 |
+| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
+| Parent tip | `771844fda083ce3c1858b77b0012e5bf2b801605` |
+| Autorité | Morris GO technique G1 2026-11-10 CRITICAL — DEV only ; push Product / RECETTE / REAL Git **NON inclus** |
+| Cause | R12-D : `read_git_file` → DENIED sur toute exception (y compris absence) ; provenance blob/commit consommée incorrectement ; narration Nora « ne peux pas confirmer » vs ACK AVAILABLE |
+| Changements | Classification D3 `FILE_ABSENT` qualifiée ; garde permalink ; strip REC-08 ; docs matrice/spec/delivery |
+| Validations | unit document-act 94 + git-read-tools 9 PASS ; PG Chat First 19 PASS ; tsc PASS ; lint warnings préexistants ; `NODE_ENV=production` build PASS |
+| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
+| RECETTE | **inchangée** — SHA `771844fd` / BUILD `SmL2kyWbd1Q3kIuwNw0mQ` |
+| Push Product | **AUCUN** |
+| Verdict candidat | `G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 1da277ff..c961fac3 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -665,3 +665,19 @@ Verdict candidat : **READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREA
 | RECETTE | INCHANGÉE | `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |

 Verdict : **CREATE_PLEASE_RE AUTHORITY GAP FIXED — DETERMINISTICALLY VERIFIED LOCALLY — READY FOR CHATGPT REVIEW**.
+
+## 35. Macro-lot G1 — REC-11 / REC-07 / REC-08 (2026-11-10)
+
+GO Morris technique G1 2026-11-10. Branche `fix/next-ml4-chat-first-d4-provenance-20261109`. Push Product / déploiement RECETTE / GitHub REAL **NON AUTORISÉS**.
+
+| Item | Statut | Note |
+|---|---|---|
+| ML4-REC-11 D3 `read_git_file` | CORRIGÉ (DET) | Statuts typés : `AVAILABLE` / `FILE_ABSENT` / `DENIED` / `REF_UNRESOLVED` / `AMBIGUOUS` / `UNAVAILABLE` ; plus de DENIED générique sur toute exception |
+| Qualification d'absence | CORRIGÉ (DET) | `FILE_ABSENT_AT_VERIFIED_REF` seulement après résolution de ref tip ; SHA pin 404 → `AMBIGUOUS` ; projet/403 ≠ absence fichier |
+| D7 prepare CREATE | NON-RÉGRESSION | Moteur `classifyRemoteReadError` inchangé ; PG prouve CREATE inspectable pour chemin absent |
+| ML4-REC-07 | RENFORCÉ (DET) | `permalinkOrNull` + encodage chemin ; identities blob/commit explicites outil ; jamais `/blob/{blobSha}/` |
+| ML4-REC-08 | CORRIGÉ (DET) | Strip « ne peux pas confirmer la sauvegarde » / « impossible de confirmer » lorsque ACK `AVAILABLE` |
+| ML4-REC-10 | NON-RÉGRESSION | CREATE/REVISE D4 + T1–T10 conservés (suite PG Chat First) |
+| USER / RECETTE / REAL Git | NOT RUN | Gate Morris distinct pour bascule + R12/R13/R14 |
+
+Verdict : **G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO**.
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 675831a6..16ef0502 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -3,9 +3,10 @@
 > **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — base `974b0030…` + macro-correctif chat-first D4 / provenance Git sur `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ).
 > Domaines : D3/D4/D9 ; migrations `008`–`012` (aucune migration structurante ce cycle).
 > **ML4-REC-08** : création/révision D4 conversationnelle via `savePreparationDocument` / `reviseDocument` + ACK applicatif corrélé (pas de second moteur Nora).
-> **ML4-REC-07** : provenance lecture Git distingue `blobSha` / `commitSha` (+ `permalink` seulement si commit vérifié) ; `listGitRefs` au-delà de `main`.
+> **ML4-REC-07** : provenance lecture Git distingue `blobSha` / `commitSha` (+ `permalink` seulement si commit vérifié) ; `listGitRefs` au-delà de `main` ; garde anti-`/blob/{blobSha}/` (G1 2026-11-10).
+> **ML4-REC-11** (G1 2026-11-10) : `read_git_file` restitue `FILE_ABSENT` uniquement sous tip vérifié ; 404 ambigu ≠ CREATE.
 > **R1-A / R1-B** refresh lifecycle clos ; **R2** CONFLICT callback accepté.
-> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · Chat-first D4 / provenance DET DEV PROVEN · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
+> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · Chat-first D4 / provenance / FILE_ABSENT DET DEV PROVEN · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
 > Mutations REAL **bornées documentary** si et seulement si `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (aliases refusés ; merge HARD-BLOCKED). Flag ≠ autorité D6.
 > Séquence publication nominale **seule** autorisée : `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (`publication-steps.ts`). Aucun COMPLETED / D8 sans preuve fichier + commitSha ≠ baseSha + PR distante.
 > Provenance d'effet : `plan.effectProviderMode` figé à prepare ; historique sans champ → UNKNOWN ; divergence live → REQUIRES_REQUALIFICATION.
@@ -183,3 +184,15 @@ Sur candidat `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON
 4. **Observabilité (D)** — événement `d3.turn.document_proposal` : `extract_path`, `fence_count`, `proposal_chars`, `proposal_digest16`, `body_ends_with_nl`, `scope_verdict`, `refuse_code`, `d4_attempted`, `d4_effect` (pas de corps/prompt/secrets).

 Preuve : DETERMINISTIC unit + PG DEV. LIVE Nora / USER RECETTE : NOT RUN.
+
+## 14. Lecture Git D3 — qualification d'absence et provenance (AS-IMPLEMENTED local, 2026-11-10)
+
+Sur candidat `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ) :
+
+1. **`readGitFile` (D9→D3)** — résout d'abord la ref mobile via `getRefSha` ; un `NOT_FOUND` Contents **après tip vérifié** est préfixé `FILE_ABSENT_AT_VERIFIED_REF`. Un 404 sous SHA pin non vérifié reste `READ_NOT_FOUND_UNQUALIFIED` / `AMBIGUOUS` (pas de CREATE implicite). Les erreurs gate (`Projet introuvable`, `ACCESS_DENIED`) restent distinctes.
+2. **Outil Nora `read_git_file`** — projection typée via `classifyReadGitFileFailure` : `AVAILABLE` | `FILE_ABSENT` | `DENIED` | `REF_UNRESOLVED` | `AMBIGUOUS` | `UNAVAILABLE`. `FILE_ABSENT` n'est **pas** une autorisation D6/D7 ; guidance explicite vers préparation inspectable.
+3. **Provenance** — `blobSha` (contenu) ≠ `commitSha` (révision) ; `permalink` seulement si `commitShaVerified` et jamais construit depuis `blobSha` ; segments de chemin percent-encodés.
+4. **D7** — `buildInspection` / `classifyRemoteReadError` inchangés dans ce lot ; CREATE pour absence prouvée déjà couvert ; non-régression PG.
+5. **ACK D4** — `TRANSACTIONAL_CLAIM_RE` étendu aux négations « ne peux pas confirmer la sauvegarde » lorsque le statut applicatif est `AVAILABLE`.
+
+Preuve : DETERMINISTIC unit (`git-read-tools`, `document-act`) + PG DEV (`ml4-chat-first-d4-provenance`). Publication GitHub REAL / USER RECETTE : NOT RUN.
```

## 12. Tests réellement exécutés

| Commande | Résultat | Qualification |
|---|---|---|
| `npx vitest run tests/unit/git-read-tools.test.ts tests/unit/document-act.test.ts` | 103 PASS (94+9) | DET |
| `npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts` | 19 PASS | PG DEV / SCRIPTED |
| `npx tsc --noEmit` | PASS (exit 0) | DET |
| `npx next lint` | exit 0 ; warnings préexistants hors périmètre | DET |
| `NODE_ENV=production npx next build` | PASS | DET |
| `git diff --check` | PASS | DET |
| git-collaboration AT filter isolé | FAIL env OAuth (STUDIO_GITHUB_USER_OAUTH) — **hors régression G1** ; CREATE prepare déjà prouvé dans PG Chat First REC-11 | NOT RUN utile / résidu env |

### Couverture discriminante
- REC-11 FILE_ABSENT tip vérifié + AMBIGUOUS SHA pin + D7 CREATE inspectable (PG)
- REC-11 négatifs classifier : project NOT_FOUND, ACCESS_DENIED, REF_UNRESOLVED, unqualified 404, UNAVAILABLE (unit)
- REC-07 blob≠commit permalink + encode path + refuse blob-as-commit (unit + PG non-régression)
- REC-08 cannot-confirm strip when AVAILABLE (unit)
- REC-10 suite : CREATE/REVISE/NOT_EXECUTED/T1–T10 dans les 19 PG Chat First

## 13. Fake / REAL Qualification

- Preuves G1 : DETERMINISTIC + PostgreSQL DEV SCRIPTED
- REAL GitHub App / Nora LIVE / USER RECETTE : **NOT RUN** ce cycle
- REALISM GAP : mocks ≠ permissions GitHub réelles ≠ rendu Nora LIVE ≠ publication distante
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## 14. ENV-01 / Versioning

| Lane | Observation |
|---|---|
| DEV Postgres | 127.0.0.1:5433 LISTEN (Docker) |
| RECETTE HTTP | 127.0.0.1:3200 LISTEN (node) — **non modifié** |
| RECETTE Postgres | 127.0.0.1:5434 LISTEN — **non modifié** |
| RECETTE SHA/BUILD | 771844fd / SmL2kyWbd1Q3kIuwNw0mQ — **gelé** |
| STABLE | NOT AVAILABLE |
| Version | NO RELEASE / 0.0.0-dev / PATCH candidate |

## 15. Dette / risques / exit

| Item | Impact | Exit |
|---|---|---|
| FILE_ABSENT tip vérifié ≠ preuve Contents 404 vs ACL masquée sur certains tenants GitHub | Résidu théorique | Rejouer R12 LIVE après bascule RECETTE |
| Narration Nora LIVE peut encore formuler hors regex | Résidu modèle | ACK reste autorité ; élargir strip si nouvelle phrase observée |
| R13/R14 NOT RUN | Capacité publication incomplète | Gate Morris après G1 review |
| Untracked manifests/scripts préexistants | Hors lot | Laisser / arbitrer séparément |

## 16. Gates suivants (NON acquis)

1. Revue ChatGPT du handoff distant
2. GO Morris bascule RECETTE nouveau candidat
3. Rejeu R12 préparation Git + D6 + effet documentary
4. R13 / R14
5. Décision ML4

## 17. Actions interdites respectées

- Pas de reset/clean/rebase/amend
- Pas de push Product
- Pas de mutation RECETTE DB/build/LaunchAgent
- Pas d'appel Nora LIVE / GitHub REAL mutatif
- Pas de migration DB
- Pas de second provider / moteur

## 18. Git Review Index

| Ref | SHA |
|---|---|
| Parent | 771844fda083ce3c1858b77b0012e5bf2b801605 |
| Commit G1 | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| Tree G1 | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |

## 19. Instruction ChatGPT

Avant revue : lire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Comparer cycle, profil, branche, HEAD, fichiers, diffs, tests, réserves, gates et SHA handoff.
Si handoff absent/obsolète/incomplet : ne pas valider sur la seule synthèse Cursor.

## 20. Verdict unique

**G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO**
