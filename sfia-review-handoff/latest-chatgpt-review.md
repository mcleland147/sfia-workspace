# SFIA Review Pack — E08 Candidate Freeze & Existing Recette Update

- status: COMPLETE — FULL mono-cycle
- cycle: Ensemble 08 — freeze candidat + évolution RECETTE existante E07
- profile: CRITICAL · Delivery · NO RELEASE
- date_local: 2026-11-21 20:41:11 CET
- date_utc: 2026-11-21T19:41:11Z
- prior_handoff: 19bd009922b1a8b51833896a6e47c2827da6b12f
- cutover: **NOT EXECUTED** — STOP BEFORE MUTATION RECETTE (pas de GO SHA-specific)
- morris_visual_review: DEFERRED_TO_RECETTE_UAT · G5 NOT PROVEN
- verdict: **CANDIDATE FROZEN — RECETTE GO REQUIRED**

---

## 1. Git Truth

| Field | Value |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branch | `feat/next-ensemble08-git-publications-nora` |
| Base origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Code freeze SHA (build source) | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE (freeze) | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| Tip docs bind | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| BUILD_ID candidat | `1xEbvCdTAX6ht262w4oKF` |
| Build worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| Project push/PR/merge | **NONE** |
| Parent freeze | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` (= origin/main) |

### Worktree E08 après freeze

Seul reste local hors commit : `.tmp-sfia-review/chatgpt-review.md` (pack).

---

## 2. RECETTE E07 observée (read-only, avant cutover)

| Field | Observed |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (launchctl PID 75547) |
| Process | next-server v15.5.29 PID 75565 |
| Script | `start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` (HTTP + fichier) |
| Lane | STUDIO_LANE=RECETTE · next start · mutations GitHub OFF |
| PostgreSQL | container `sfia-next-recette-pg` · 127.0.0.1:5434 · DB/rôle `sfia_next_recette_ml4` |
| DEV isolation | `sfia-next-dev-pg` :5433 distinct |
| Après cycle | **Toujours E07 servi** (marker HTTP BtZP6qDx5oAw8jwPQSEhc) |

### Inventaire données (non sensible)

projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2

### Backup frais (pré-cutover)

- Fichier : `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz`
- Emplacement : worktree E07 `.sfia-recette/backups/`
- Taille : ~691K · gzip -t **OK**
- Contenu dump non inclus dans ce pack (secrets/données)

---

## 3. Matrice A/B/S — totaux corrigés

Oracles contractuels §11 **inchangés**. Synthèse recalculée depuis les 41 lignes :

## Synthèse 41/41

| Métrique | Valeur |
| --- | --- |
| Qualifiés | **41/41** |
| BEHAVIOR PROVEN | **12** (frontière DET/unit/PG indiquée par ligne — **≠** E2E REAL) |
| COVERAGE VERIFIED | **17** |
| PARTIAL | **10** (incl. S01 freeze sans cutover) |
| NOT PROVEN | **2** (A15 G5 · B05 REAL WRITE) |
| BLOCKED | 0 |
| N/A | 0 |
| Domaine A (15) | 4 BEHAVIOR · 6 COVERAGE · 4 PARTIAL · 1 NOT PROVEN |
| Domaine B (16) | 6 BEHAVIOR · 6 COVERAGE · 3 PARTIAL · 1 NOT PROVEN |
| Domaine S (10) | 2 BEHAVIOR · 5 COVERAGE · 3 PARTIAL · 0 NOT PROVEN |
| Totaux recalculés | 12 + 17 + 10 + 2 = **41** (lignes A/B/S ; oracles §11 inchangés) |
| Réserves bloquantes GO cutover RECETTE | GO SHA-specific · REAL WRITE/MERGE NOT PROVEN |
| Réserves non bloquantes | G5 différé Morris UAT · Nora LIVE · Playwright étendu · REAL READ |

---

## A01–A15 — Consultation Git / parcours Pilote

**Note BEHAVIOR PROVEN :** frontière DET/unit/PG uniquement — **≠** END-TO-END REAL.

---

## 4. Freeze commit

Message : `feat(next): freeze Ensemble 08 Git publications and Nora candidate`

Stat :

```
 .../unit/github-app-auth-real-provider.test.ts     |    6 +-
 .../web/tests/unit/merge-pull-request-sha.test.ts  |  192 +++
 .../web/tests/unit/path-policy.test.ts             |   28 +-
 .../unit/project-publications-projection.test.ts   |   86 ++
 80 files changed, 9264 insertions(+), 104 deletions(-)
```

Fichiers (name-status) :

```
A	projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-a-d9.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-contrats-matrice.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/env01-recette-preflight.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/manifeste-l0-l1.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png-oracle-exit/figma-11.04-pubs-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png-oracle-exit/figma-11.07-disconnect-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.01-empty-1093-9.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.02-multi-1094-71.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.03-explorer-1094-172.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.04-pubs-1094-310.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.05-enlarge-1094-422.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.06-connected-1095-339.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.07-disconnect-1095-390.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.13-remove-1096-752.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.14-unavailable-1096-841.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.15-compact-1098-791.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.16-mobile-1098-841.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-integrations-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.07-disconnect-confirm-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.07-dom-measures.json
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-integrations-final-1680x970.png
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/impl-report-capacite-a.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/impl-report-capacite-b.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-couverture-acceptation-a-b-s.md
A	projects/sfia-studio-next/web/public/figma-git-icons/branch.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/chevron.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/expand.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/file.svg
A	projects/sfia-studio-next/web/public/figma-git-icons/folder.svg
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/tree/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
M	projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
M	projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-merge-authority.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
A	projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
M	projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts
A	projects/sfia-studio-next/web/src/domains/integrations/publication-projection-service.ts
A	projects/sfia-studio-next/web/src/domains/integrations/publication-projection.ts
M	projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
M	projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-g5-captures.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
A	projects/sfia-studio-next/web/tests/integration/conversation-merge-security.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversation-merge-authority.test.ts
A	projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-directory-listing.test.ts
M	projects/sfia-studio-next/web/tests/unit/git-file-provenance.test.ts
A	projects/sfia-studio-next/web/tests/unit/git-refs-coverage-s03.test.ts
A	projects/sfia-studio-next/web/tests/unit/github-app-allowed-repos.test.ts
M	projects/sfia-studio-next/web/tests/unit/github-app-auth-real-provider.test.ts
A	projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
M	projects/sfia-studio-next/web/tests/unit/path-policy.test.ts
A	projects/sfia-studio-next/web/tests/unit/project-publications-projection.test.ts
```

Diff vs main (stat tail) :

```
 .../src/domains/conversation/mission-continuity.ts |    9 +-
 .../web/src/domains/conversation/nora-adapter.ts   |    5 +-
 .../domains/conversation/semantic-qualification.ts |   71 ++
 .../web/src/domains/conversation/service.ts        |  237 +++-
 .../web/src/domains/execution/effect-service.ts    |   88 ++
 .../src/domains/integrations/github-app-auth.ts    |  269 ++++-
 .../src/domains/integrations/github-app-config.ts  |   55 +
 .../src/domains/integrations/github-provider.ts    |   37 +-
 .../web/src/domains/integrations/path-policy.ts    |   54 +
 .../integrations/publication-projection-service.ts |  158 +++
 .../domains/integrations/publication-projection.ts |  141 +++
 .../domains/integrations/real-github-provider.ts   |   82 +-
 .../src/domains/integrations/resource-service.ts   |  159 ++-
 .../integrations/scripted-github-provider.ts       |  124 +-
 .../web/tests/e2e/ensemble08-g5-captures.spec.ts   |   53 +
 .../web/tests/e2e/ensemble08-git-surface.spec.ts   |  167 +++
 .../conversation-merge-security.pg.test.ts         |  442 +++++++
 .../tests/integration/git-collaboration.pg.test.ts |    2 +-
 .../mission-continuity-accept01.pg.test.ts         |  131 +-
 .../unit/conversation-merge-authority.test.ts      |  126 ++
 .../conversation-publication-authority.test.ts     |  175 +++
 .../web/tests/unit/git-directory-listing.test.ts   |   79 ++
 .../web/tests/unit/git-file-provenance.test.ts     |    8 +-
 .../web/tests/unit/git-refs-coverage-s03.test.ts   |  234 ++++
 .../tests/unit/github-app-allowed-repos.test.ts    |   40 +
 .../unit/github-app-auth-real-provider.test.ts     |    6 +-
 .../web/tests/unit/merge-pull-request-sha.test.ts  |  192 +++
 .../web/tests/unit/path-policy.test.ts             |   28 +-
 .../unit/project-publications-projection.test.ts   |   86 ++
 80 files changed, 9264 insertions(+), 104 deletions(-)
```

Docs bind tip : `docs(next): bind E08 freeze SHA, BUILD_ID and RECETTE cutover prep` @ `29066442a7fa51b106d9fe45b5c1b05da7f13004`

---

## 5. Diff S03 / provider refs (extrait utile freeze)

```diff
commit 98185598de0d3f3b84af862aecea04b9099217ca
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Nov 21 20:38:29 2026 +0100

    feat(next): freeze Ensemble 08 Git publications and Nora candidate

    Local freeze of multi-repo Git consultation, Studio publications, and
    conversational D6 publication/merge authority on the E08 branch for
    RECETTE cutover preparation (NO RELEASE; no project push).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index e97f3a92..56a6300d 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -315,8 +315,20 @@ export async function fetchRefSha(
   return sha;
 }

+/** Studio UI bound — truncation happens here with an honest incompleteness flag (E08-S03). */
+export const FETCH_MATCHING_REFS_UI_BOUND = 40;
+
+export type FetchMatchingRefsResult = {
+  refs: Array<{ name: string; sha: string }>;
+  /** True when more matching refs were observed than returned after the UI bound. */
+  incompleteCoverage: boolean;
+  matchedCount: number;
+};
+
 /**
- * List matching git refs (branches by default). Bounded; never invents refs.
+ * List matching git refs (branches by default). Never invents refs.
+ * GitHub `GET .../git/matching-refs/{ref}` returns matching refs; Studio applies a UI bound
+ * and signals incompleteness when matchedCount exceeds that bound.
  * @see GET /repos/{owner}/{repo}/git/matching-refs/{ref}
  */
 export async function fetchMatchingRefs(
@@ -324,7 +336,7 @@ export async function fetchMatchingRefs(
   fullName: string,
   refPrefix: string | undefined,
   fetchImpl: GitHubFetch = fetch,
-): Promise<Array<{ name: string; sha: string }>> {
+): Promise<FetchMatchingRefsResult> {
   const { owner, name } = parseFullName(fullName);
   const rawPrefix = (refPrefix ?? "heads/").replace(/^refs\//, "");
   const prefix = rawPrefix.startsWith("heads/") || rawPrefix.startsWith("tags/")
@@ -341,14 +353,108 @@ export async function fetchMatchingRefs(
   if (!Array.isArray(raw)) {
     throw new StudioError("AMBIGUOUS", "Liste de refs GitHub illisible", { httpStatus: 409 });
   }
-  return raw
+  const mapped = raw
     .map((r) => {
       const refName = (r.ref ?? "").replace(/^refs\/heads\//, "").replace(/^refs\//, "");
       const sha = r.object?.sha ?? "";
       return { name: refName, sha };
     })
-    .filter((r) => r.name && /^[0-9a-f]{40}$/i.test(r.sha))
-    .slice(0, 40);
+    .filter((r) => r.name && /^[0-9a-f]{40}$/i.test(r.sha));
+  const matchedCount = mapped.length;
+  const incompleteCoverage = matchedCount > FETCH_MATCHING_REFS_UI_BOUND;
+  return {
+    refs: mapped.slice(0, FETCH_MATCHING_REFS_UI_BOUND),
+    incompleteCoverage,
+    matchedCount,
+  };
+}
+
+const MAX_DIRECTORY_ENTRIES = 200;
+
+export type GitHubDirectoryEntry = {
+  name: string;
+  path: string;
+  type: "file" | "dir";
+  sha: string;
+  size?: number;
+};
+
+type GitHubContentsItem = {
+  name?: string;
+  path?: string;
+  sha?: string;
+  size?: number;
+  type?: string;
+};
+
+function contentsApiPath(fullName: string, path: string): string {
+  const { owner, name } = parseFullName(fullName);
+  const trimmed = path.replace(/^\/+/, "").replace(/\/+$/, "");
+  const encoded = trimmed
+    ? trimmed.split("/").filter(Boolean).map((seg) => encodeURIComponent(seg)).join("/")
+    : "";
+  const segment = encoded ? `/${encoded}` : "";
+  return `/repos/${owner}/${name}/contents${segment}`;
+}
+
+/** List immediate children of a directory via GitHub Contents API (non-recursive). */
+export async function fetchDirectoryListing(
+  installationToken: string,
+  fullName: string,
+  path: string,
+  ref: string,
+  fetchImpl: GitHubFetch = fetch,
+): Promise<GitHubDirectoryEntry[]> {
+  const q = new URLSearchParams({ ref });
+  const raw = await ghJson<GitHubContentsItem | GitHubContentsItem[]>(
+    fetchImpl,
+    `${contentsApiPath(fullName, path)}?${q}`,
+    {
+      method: "GET",
+      headers: { Authorization: `Bearer ${installationToken}` },
+    },
+  );
+  if (Array.isArray(raw)) {
+    const entries: GitHubDirectoryEntry[] = [];
+    for (const item of raw) {
+      if (!item.name || !item.path || !item.sha) continue;
+      if (item.type === "file") {
+        entries.push({
+          name: item.name,
+          path: item.path,
+          type: "file",
+          sha: item.sha,
+          size: typeof item.size === "number" ? item.size : undefined,
+        });
+      } else if (item.type === "dir") {
+        entries.push({
+          name: item.name,
+          path: item.path,
+          type: "dir",
+          sha: item.sha,
+        });
+      }
+    }
+    entries.sort((a, b) => a.name.localeCompare(b.name));
+    if (entries.length > MAX_DIRECTORY_ENTRIES) {
+      throw new StudioError(
+        "AMBIGUOUS",
+        `Répertoire trop volumineux (${entries.length} entrées, max ${MAX_DIRECTORY_ENTRIES})`,
+        { httpStatus: 409 },
+      );
+    }
+    return entries;
+  }
+  if (raw.type === "file") {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      `NOT_A_DIRECTORY: path=${raw.path ?? path} est un fichier, pas un répertoire`,
+      { httpStatus: 400 },
+    );
+  }
+  throw new StudioError("AMBIGUOUS", "Contenu GitHub non qualificable comme répertoire", {
+    httpStatus: 409,
+  });
 }

 export async function fetchFileContentUtf8(
@@ -357,7 +463,14 @@ export async function fetchFileContentUtf8(
   path: string,
   ref: string,
   fetchImpl: GitHubFetch = fetch,
-): Promise<{ path: string; ref: string; sha: string; content: string }> {
+): Promise<{
+  path: string;
+  ref: string;
+  sha: string;
+  content: string;
+  encoding: "utf-8" | "binary";
+  contentKind: "markdown" | "text" | "binary" | "too_large";
+}> {
   const { owner, name } = parseFullName(fullName);
   const q = new URLSearchParams({ ref });
   const raw = await ghJson<{
@@ -373,8 +486,47 @@ export async function fetchFileContentUtf8(
   if (raw.type !== "file" || raw.encoding !== "base64" || !raw.content || !raw.sha) {
     throw new StudioError("AMBIGUOUS", "Contenu fichier GitHub non qualificable", { httpStatus: 409 });
   }
-  const content = Buffer.from(raw.content.replace(/\n/g, ""), "base64").toString("utf8");
-  return { path: raw.path ?? path, ref, sha: raw.sha, content };
+  const buf = Buffer.from(raw.content.replace(/\n/g, ""), "base64");
+  const MAX_READ_BYTES = 512 * 1024;
+  if (buf.length > MAX_READ_BYTES) {
+    return {
+      path: raw.path ?? path,
+      ref,
+      sha: raw.sha,
+      content: "",
+      encoding: "binary" as const,
+      contentKind: "too_large" as const,
+    };
+  }
+  // NUL or high ratio of non-text bytes ⇒ binary — never decode as Markdown/UTF-8 prose.
+  if (buf.includes(0)) {
+    return {
+      path: raw.path ?? path,
+      ref,
+      sha: raw.sha,
+      content: "",
+      encoding: "binary" as const,
+      contentKind: "binary" as const,
+    };
+  }
+  const sample = buf.subarray(0, Math.min(buf.length, 8192));
+  let weird = 0;
+  for (const b of sample) {
+    if (b < 7 || (b > 13 && b < 32)) weird += 1;
+  }
+  if (sample.length > 0 && weird / sample.length > 0.3) {
+    return {
+      path: raw.path ?? path,
+      ref,
+      sha: raw.sha,
+      content: "",
+      encoding: "binary" as const,
+      contentKind: "binary" as const,
+    };
+  }
+  const content = buf.toString("utf8");
+  const contentKind = /\.md$/i.test(raw.path ?? path) ? ("markdown" as const) : ("text" as const);
+  return { path: raw.path ?? path, ref, sha: raw.sha, content, encoding: "utf-8" as const, contentKind };
 }

 /** Create a git ref (branch). Caller must ensure branch ≠ protected base. */
@@ -627,6 +779,8 @@ export async function fetchPullRequestRemote(input: {
   headRef: string;
   baseRef: string;
   merged: boolean;
+  /** Observed merge commit SHA when GitHub reports one — never invent from head. */
+  mergeCommitSha: string | null;
 }> {
   const fetchImpl = input.fetchImpl ?? fetch;
   const { owner, name } = parseFullName(input.fullName);
@@ -636,12 +790,17 @@ export async function fetchPullRequestRemote(input: {
     state: string;
     html_url: string;
     merged?: boolean;
+    merge_commit_sha?: string | null;
     head?: { sha?: string; ref?: string };
     base?: { sha?: string; ref?: string };
   }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}`, {
     method: "GET",
     headers: { Authorization: `Bearer ${input.token}` },
   });
+  const mergeCommitSha =
+    typeof raw.merge_commit_sha === "string" && /^[0-9a-f]{40}$/i.test(raw.merge_commit_sha)
+      ? raw.merge_commit_sha
+      : null;
   return {
     number: raw.number,
     title: raw.title,
@@ -652,9 +811,93 @@ export async function fetchPullRequestRemote(input: {
     headRef: raw.head?.ref ?? "",
     baseRef: raw.base?.ref ?? "",
     merged: Boolean(raw.merged),
+    mergeCommitSha,
   };
 }

+/**
+ * Merge a pull request with GitHub SHA precondition.
+ * Caller must enforce D6/D7 mandate and documentary path policy separately.
+ * @see PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge
+ */
+export async function mergePullRequestRemote(input: {
+  token: string;
+  fullName: string;
+  prNumber: number;
+  expectedHeadSha: string;
+  expectedBaseSha?: string | null;
+  commitTitle?: string;
+  mergeMethod?: "merge" | "squash" | "rebase";
+  fetchImpl?: GitHubFetch;
+}): Promise<{ merged: boolean; sha: string }> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const { owner, name } = parseFullName(input.fullName);
+  if (!/^[0-9a-f]{40}$/i.test(input.expectedHeadSha)) {
+    throw new StudioError("INVALID_REQUEST", "expectedHeadSha invalide pour merge", {
+      httpStatus: 400,
+    });
+  }
+  // Re-read PR before merge — refuse drift / already merged / closed.
+  const current = await fetchPullRequestRemote({
+    token: input.token,
+    fullName: input.fullName,
+    prNumber: input.prNumber,
+    fetchImpl,
+  });
+  if (current.merged) {
+    // Idempotent already-merged path: never treat source HEAD as the merge commit SHA (P0-02).
+    if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
+      throw new StudioError("CONFLICT", "PR déjà mergée avec HEAD divergent", { httpStatus: 409 });
+    }
+    if (current.mergeCommitSha) {
+      return { merged: true, sha: current.mergeCommitSha };
+    }
+    throw new StudioError(
+      "AMBIGUOUS",
+      "PR déjà mergée — commit de fusion non observé (merge_commit_sha absent)",
+      { httpStatus: 409 },
+    );
+  }
+  if (current.state !== "open") {
+    throw new StudioError("CONFLICT", `PR non ouverte (state=${current.state})`, { httpStatus: 409 });
+  }
+  if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
+    throw new StudioError("CONFLICT", "HEAD de PR périmé avant merge", { httpStatus: 409 });
+  }
+  if (
+    input.expectedBaseSha &&
+    current.baseSha &&
+    current.baseSha.toLowerCase() !== input.expectedBaseSha.toLowerCase()
+  ) {
+    throw new StudioError("CONFLICT", "Base de PR périmée avant merge", { httpStatus: 409 });
+  }
+
+  const raw = await ghJson<{
+    merged?: boolean;
+    sha?: string;
+    message?: string;
+  }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}/merge`, {
+    method: "PUT",
+    headers: {
+      Authorization: `Bearer ${input.token}`,
+      "Content-Type": "application/json",
+    },
+    body: JSON.stringify({
+      sha: input.expectedHeadSha,
+      merge_method: input.mergeMethod ?? "merge",
+      ...(input.commitTitle ? { commit_title: input.commitTitle } : {}),
+    }),
+  });
+  if (!raw.merged || !raw.sha || !/^[0-9a-f]{40}$/i.test(raw.sha)) {
+    throw new StudioError(
+      "AMBIGUOUS",
+      raw.message ?? "Réponse merge GitHub non qualificable",
+      { httpStatus: 409 },
+    );
+  }
+  return { merged: true, sha: raw.sha };
+}
+
 /** Orchestrate App JWT → identity → installation → restricted token (no mutations). */
 export async function authenticateInstallationReadOnly(
   creds: GitHubAppLoadedCredentials,
@@ -701,14 +944,16 @@ export async function authenticateInstallationReadOnly(
   }

   const access = await createInstallationAccessToken(creds, jwt, fetchImpl);
-  const allowed = access.repositories.some(
-    (r) => r.fullName.toLowerCase() === creds.allowedFullName.toLowerCase(),
-  );
+  const allow = creds.allowedFullNames?.length
+    ? creds.allowedFullNames
+    : [creds.allowedFullName];
+  const allowSet = new Set(allow.map((n) => n.toLowerCase()));
+  const allowed = access.repositories.some((r) => allowSet.has(r.fullName.toLowerCase()));
   // GitHub may omit repositories array on some responses — verify via list endpoint next.
   if (access.repositories.length > 0 && !allowed) {
     throw new StudioError(
       "ACCESS_DENIED",
-      `Dépôt ${creds.allowedFullName} absent du jeton restreint`,
+      `Aucun dépôt allowlist (${allow.join(", ")}) absent du jeton restreint`,
       { httpStatus: 403 },
     );
   }
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 0c686422..84c92740 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -15,6 +15,22 @@ export type InstallationRepo = {

 export type RefInfo = { name: string; sha: string };

+/** UI / API bound for branch listing — never present a truncated list as exhaustive. */
+export const GIT_REFS_UI_BOUND = 40;
+
+/**
+ * Honest refs listing. When `incompleteCoverage` is true, more matching refs existed
+ * than were returned; callers must not claim completeness.
+ */
+export type ListRefsResult = {
+  refs: RefInfo[];
+  incompleteCoverage: boolean;
+  /** Matching refs observed before applying GIT_REFS_UI_BOUND (may exceed refs.length). */
+  matchedCount: number;
+};
+
+export type FileContentKind = "markdown" | "text" | "binary" | "too_large";
+
 export type FileContentResult = {
   path: string;
   ref: string;
@@ -22,8 +38,18 @@ export type FileContentResult = {
    * Blob object SHA (GitHub Contents API). Must not be treated as a commit SHA.
    */
   sha: string;
+  /** Empty when contentKind is binary or too_large — never invent fallback text. */
   content: string;
```

---

## 6. Test S03 complet (création au freeze)

Path: `web/tests/unit/git-refs-coverage-s03.test.ts`

```typescript
/**
 * E08-S03 — honest incompleteness for Git refs listing.
 * REAL-shaped via fetch mock; SCRIPTED parity for bound/coverage semantics.
 * Does NOT prove GitHub REAL BOUNDARY.
 */
import { describe, expect, it, vi } from "vitest";
import {
  FETCH_MATCHING_REFS_UI_BOUND,
  fetchMatchingRefs,
} from "@/domains/integrations/github-app-auth";
import { GIT_REFS_UI_BOUND } from "@/domains/integrations/github-provider";
import {
  getScriptedGitHubProvider,
  ScriptedFaultRegistry,
} from "@/domains/integrations/scripted-github-provider";
import { StudioError } from "@/lib/http-errors";

const SHA = (n: number) => n.toString(16).padStart(40, "0");

function matchingRefsBody(names: string[]) {
  return names.map((name) => ({
    ref: `refs/heads/${name}`,
    object: { sha: SHA(name.length + name.charCodeAt(0)) },
  }));
}

function mockFetch(body: unknown, status = 200) {
  return vi.fn(async () =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

describe("E08-S03 fetchMatchingRefs REAL-shaped", () => {
  it("0 matching refs → empty, complete", async () => {
    const fetchImpl = mockFetch([]);
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toEqual([]);
    expect(r.matchedCount).toBe(0);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("1 matching ref → complete", async () => {
    const fetchImpl = mockFetch(matchingRefsBody(["main"]));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(1);
    expect(r.refs[0]!.name).toBe("main");
    expect(r.matchedCount).toBe(1);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("39 refs → complete, all returned", async () => {
    const names = Array.from({ length: 39 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(39);
    expect(r.matchedCount).toBe(39);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("40 refs → complete at bound", async () => {
    const names = Array.from({ length: 40 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(FETCH_MATCHING_REFS_UI_BOUND);
    expect(r.matchedCount).toBe(40);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("41 refs → truncated with incompleteCoverage=true", async () => {
    const names = Array.from({ length: 41 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(41);
    expect(r.incompleteCoverage).toBe(true);
    // Must not claim completeness from truncated list length alone
    expect(r.refs.length === 40 && !r.incompleteCoverage).toBe(false);
  });

  it(">100 refs → incomplete, matchedCount preserved, UI bound applied", async () => {
    const names = Array.from({ length: 120 }, (_, i) => `branch-${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(120);
    expect(r.incompleteCoverage).toBe(true);
  });

  it(">40 results sharing a prefix → incompleteCoverage", async () => {
    const names = Array.from({ length: 55 }, (_, i) => `feat/doc-${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", "feat/", fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(55);
    expect(r.incompleteCoverage).toBe(true);
    const firstUrl = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(firstUrl).toContain("/repos/acme/docs/git/matching-refs/heads/feat/");
  });

  it("branch beyond first 40 still counted in matchedCount", async () => {
    const names = [
      ...Array.from({ length: 40 }, (_, i) => `aaa-${i}`),
      "zzz/exact-target",
    ];
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs.map((x) => x.name)).not.toContain("zzz/exact-target");
    expect(r.matchedCount).toBe(41);
    expect(r.incompleteCoverage).toBe(true);
  });

  it("exact prefix path embeds owner/repo — no repo swap", async () => {
    const fetchImpl = mockFetch(matchingRefsBody(["main"]));
    await fetchMatchingRefs("tok", "owner-a/repo-a", "heads/main", fetchImpl);
    const url = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(url).toContain("/repos/owner-a/repo-a/git/matching-refs/heads/main");
    expect(url).not.toContain("owner-b");
  });

  it("malformed/ambiguous prefix still scoped to heads/ under same repo", async () => {
    const fetchImpl = mockFetch([]);
    await fetchMatchingRefs("tok", "acme/docs", "../evil", fetchImpl);
    const url = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(url).toContain("/repos/acme/docs/git/matching-refs/heads/");
    expect(url).toContain("../evil");
  });

  it("provider fault 403 → throws StudioError", async () => {
    const fetchImpl = mockFetch({ message: "Forbidden" }, 403);
    await expect(
      fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError);
  });

  it("non-array provider body → AMBIGUOUS", async () => {
    const fetchImpl = mockFetch({ unexpected: true });
    await expect(
      fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
  });

  it("invalid sha entries filtered — never invents refs", async () => {
    const fetchImpl = mockFetch([
      { ref: "refs/heads/good", object: { sha: SHA(1) } },
      { ref: "refs/heads/bad", object: { sha: "not-a-sha" } },
      { ref: "", object: { sha: SHA(2) } },
    ]);
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(1);
    expect(r.refs[0]!.name).toBe("good");
    expect(r.matchedCount).toBe(1);
    expect(r.incompleteCoverage).toBe(false);
  });
});

describe("E08-S03 SCRIPTED listRefs parity", () => {
  const pilotId = "pilot-s03-refs";
  const fullName = "acme/docs-s03";

  async function seedBranches(count: number, prefix = "b") {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < count; i += 1) {
      await provider.createBranch(pilotId, fullName, `${prefix}${i}`, mainSha);
    }
    return provider;
  }

  it("0 extra branches → main only, complete", async () => {
    const provider = getScriptedGitHubProvider();
    const listed = await provider.listRefs(pilotId, `${fullName}-empty`);
    // default scripted repo has main
    expect(listed.refs.length).toBeGreaterThanOrEqual(1);
    expect(listed.incompleteCoverage).toBe(false);
    expect(listed.matchedCount).toBe(listed.refs.length);
  });

  it("39 extra + main may stay ≤40 complete; 41 total → incomplete", async () => {
    const provider = await seedBranches(40, "x"); // + main ≈ 41
    const listed = await provider.listRefs(pilotId, fullName);
    expect(listed.matchedCount).toBeGreaterThan(GIT_REFS_UI_BOUND);
    expect(listed.refs).toHaveLength(GIT_REFS_UI_BOUND);
    expect(listed.incompleteCoverage).toBe(true);
  });

  it("prefix with >40 matches → incompleteCoverage", async () => {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < 50; i += 1) {
      await provider.createBranch(pilotId, fullName, `feat/shared-${i}`, mainSha);
    }
    const listed = await provider.listRefs(pilotId, fullName, "feat/shared");
    expect(listed.matchedCount).toBe(50);
    expect(listed.refs).toHaveLength(40);
    expect(listed.incompleteCoverage).toBe(true);
  });

  it("exact getRefSha still resolves branch outside first page", async () => {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < 45; i += 1) {
      await provider.createBranch(pilotId, fullName, `aaa-${i}`, mainSha);
    }
    await provider.createBranch(pilotId, fullName, "zzz/late", mainSha);
    const listed = await provider.listRefs(pilotId, fullName);
    expect(listed.incompleteCoverage).toBe(true);
    expect(listed.refs.map((r) => r.name)).not.toContain("zzz/late");
    const sha = await provider.getRefSha(pilotId, fullName, "zzz/late");
    expect(sha).toMatch(/^[0-9a-f]{40}$/i);
  });

  it("inexistent branch → getRefSha fails; list empty for unique prefix", async () => {
    const provider = getScriptedGitHubProvider();
    await expect(
      provider.getRefSha(pilotId, fullName, "does-not-exist-ever"),
    ).rejects.toThrow(/REF_NOT_FOUND|NOT_FOUND/i);
    const listed = await provider.listRefs(pilotId, fullName, "does-not-exist-ever");
    expect(listed.refs).toHaveLength(0);
    expect(listed.incompleteCoverage).toBe(false);
  });

  it("provider fault 403 on listRefs", async () => {
    ScriptedFaultRegistry.setFault("403");
    try {
      const provider = getScriptedGitHubProvider();
      await expect(provider.listRefs(pilotId, fullName)).rejects.toThrow(/403|FORBIDDEN/i);
    } finally {
      ScriptedFaultRegistry.setFault("none");
    }
  });
});
```

---

## 7. Build détaché @ freeze SHA

| Step | Result |
| --- | --- |
| worktree add --detach @ 98185598 | OK |
| npm ci | OK |
| tsc --noEmit | PASS |
| unit S03/directory/auth (avec DATABASE_URL DEV pour import) | 31 PASS |
| other unit E08 (authority/path/pubs/…) sur DEV WT pré-freeze | 72 PASS |
| conversation-merge-security.pg @ freeze WT | **5/5 PASS** |
| next build | PASS → **BUILD_ID=1xEbvCdTAX6ht262w4oKF** |
| Migrations E08 vs E07 | **aucune migration drizzle additionnelle observée** dans l’arbre web |
| Playwright E08/E07 | NOT RUN ce cycle (smoke post-cutover) |
| Nora LIVE | NOT PROVEN |
| GitHub REAL WRITE | NOT PROVEN / OFF |

Build a requis `DATABASE_URL` (collect routes) — source **DEV** `.env.local` pour compilation uniquement ; **pas** de mutation RECETTE.

---

## 8. Manifeste cutover (création complète — cutover non exécuté)

# Manifeste ENV-01 — Cutover RECETTE E07 + E08 (préparé, non exécuté)

| Champ | Valeur |
| --- | --- |
| Date préparation | 2026-11-21 (Europe/Paris) |
| Classe | **NO RELEASE** |
| Lane cible | **RECETTE existante E07** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **NOT EXECUTED** — GO Morris SHA-specific requis |
| STABLE | NOT AVAILABLE / non modifié |

## Runtime actuellement servi (avant cutover) — observé

| Champ | Valeur observée |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| PID node | 75565 (`next-server` v15.5.29) |
| Script | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` (HTTP `<!--BtZP6qDx5oAw8jwPQSEhc-->` + fichier `.next/BUILD_ID`) |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · `NODE_ENV=production` · pas de hot reload |
| GitHub mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS` unset/vide |
| Nora fixture force | unset (LIVE possible selon secrets lane — non requalifié ici) |

## PostgreSQL RECETTE (observé, non muté)

| Champ | Valeur |
| --- | --- |
| Container | `sfia-next-recette-pg` Up · `127.0.0.1:5434→5432` |
| DB / rôle | `sfia_next_recette_ml4` |
| Isolation | DEV PG distinct `sfia-next-dev-pg` :5433 |
| Inventaire non sensible | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
| Schéma drizzle migrations table | **non observée** dans cette DB (pas de `drizzle.__drizzle_migrations`) |
| Restauration auto | **INTERDITE** — ne pas recréer DB vide ni restaurer dump en écrasement |

## Candidat E08 (à renseigner après freeze + build)

| Champ | Valeur |
| --- | --- |
| Branche source | `feat/next-ensemble08-git-publications-nora` |
| Base main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| SHA candidat | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE candidat | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID candidat | `1xEbvCdTAX6ht262w4oKF` |
| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| Script démarrage préparé | `start-recette-ensemble08-98185598.sh` (non branché LaunchAgent) |

## Capacités réellement disponibles après cutover (prévision)

| Capacité | Mode attendu |
| --- | --- |
| E01–E07 | Conservées (même DB + nouveau code) |
| Consultation Git multi-dépôts | Code E08 ; provider selon config RECETTE |
| Nora conduite documentaire | Selon secrets lane ; SCRIPTED ≠ LIVE |
| GitHub REAL WRITE/MERGE | **OFF** sauf GO sandbox explicite |
| G5 visuelle | **NOT PROVEN** — Morris UAT |

## Backup / rollback (préparation)

| Élément | Statut |
| --- | --- |
| Ancien worktree E07 | Disponible `@5ad8fa57` |
| Ancien BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Script rollback | Relancer plist/script E07 `start-recette-ensemble07-5ad8fa57.sh` |
| Backup PG frais | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` (691K, gzip OK) |
| Rollback DB | Code rollback ≠ DB rollback ; pas de drop/truncate |

## Procédure cutover (exécutable seulement après GO)

1. Confirmer SHA/BUILD_ID cibles = GO Morris.
2. Confirmer backup PG lisible.
3. Arrêter `com.sfia.studio.next.recette.ml4d-ux004`.
4. Appliquer migrations **seulement si nécessaires et non destructives**.
5. Pointer LaunchAgent vers worktree/build E08 figé (même label/port/DB).
6. Relancer service ; vérifier health + identité HTTP BUILD_ID.
7. Vérifier inventaire données ≈ avant.
8. Smoke E07 + E08 ; consigner manifeste final.

## Gate

**GO SHA-SPECIFIC REQUIRED.** Sans GO : **STOP BEFORE MUTATION RECETTE.**

---

## 9. ENV-01 préflight mis à jour

# ENV-01 — Préflight mise à disposition RECETTE (E08)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Applicabilité | **REQUIRED** — préparation uniquement |
| Environnement autorisé ce cycle | **DEV local isolé** |
| RECETTE | **PROTÉGÉE** — aucun déploiement |
| STABLE | **NOT AVAILABLE** |
| Classe versioning | **NO RELEASE** |
| Revue visuelle | Différée en RECETTE (arbitrage Morris) — G5 NOT PROVEN en DEV |

## Identité Git du candidat

| Champ | Valeur |
| --- | --- |
| Source repository | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| HEAD actuel (local) | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` (aligné main ; worktree dirty) |
| État worktree | **DIRTY + untracked** (E08 complet non figé) |
| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` |
| Build identifier | `1xEbvCdTAX6ht262w4oKF` (worktree build détaché) |
| Lane cible | **RECETTE E07 existante** (réutilisation exclusive — pas de 2e lane) |
| Runtime actuel | E07 `@5ad8fa57` / BUILD `BtZP6qDx5oAw8jwPQSEhc` encore servi sur :3200 |
| Cutover | **STOP** sans GO Morris SHA-specific |
| STOP | Ne pas présenter cutover comme fait tant que runtime ≠ SHA candidat |

## Validations nécessaires au freeze

1. Commit projet unique (GO Morris) incluant code E08 + tests + docs construction E08.
2. `tsc --noEmit`, unit, PG pertinents, build, Playwright smoke verts sur SHA figé.
3. Manifeste ENV-01 / paramètres lane RECETTE renseignés.
4. Aucun secret dans le commit / pack.
5. Review Pack + handoff synchronisés au SHA figé (republication L3 si delta).

## Risques d’intégration vs main

- Base = HEAD main actuel ; dérive `origin/main` à re-vérifier au freeze.
- Volume E08 large (UI Git, Nora merge/pub, D9 multi-repo) — revue d’intégration avant PR.
- Ne pas merger sans GO ; pas de push projet dans ce cycle.

## Lane RECETTE — paramètres à isoler

| Domaine | À préparer |
| --- | --- |
| DB | Instance RECETTE distincte ; migrations applicables ; pas de partage DEV |
| Rôles / Pilote | Identités RECETTE dédiées |
| Cookies / sessions | Domaine/callback RECETTE ; pas de cookie DEV |
| Secrets | Vault RECETTE ; rotation distincte DEV |
| GitHub App | Installation sandbox ; allowlist repos test ; **pas** prod |
| Nora / OpenAI | Clé + budget DEV/RECETTE bornés ; mode explicite |
| Volumes / storage | Séparés |
| Callbacks OAuth | URLs RECETTE uniquement |

## Dataset synthétique prévu

- Projet(s) test sans données prod.
- 1–2 dépôts sandbox documentaires allowlistés.
- Branches/PR documentaires dédiées (préfixe Studio).
- Documents Markdown de publication test.
- Aucune donnée personnelle réelle.

## Providers & capacités exercées (état actuel)

| Provider | Exercé ce cycle | Pour RECETTE |
| --- | --- | --- |
| SCRIPTED GitHub | Oui (DET/e2e) | Autorisé pour smoke ; **≠** preuve REAL |
| REAL GitHub READ | NOT PROVEN | Préflight read-only si GO |
| REAL GitHub WRITE/MERGE | **NON AUTORISÉ** ce mandat | GO sandbox distinct |
| Nora fixture/DET | Oui | Corpus discriminant |
| Nora LIVE | NOT PROVEN | Borné DEV/RECETTE si budget OK |
| PostgreSQL local | Suites existantes | DB RECETTE isolée |

## Protocole futur REAL sandbox (sans mutation ce cycle)

1. Dépôt sandbox exact + installation App + permissions.
2. Allowlist `GITHUB_APP_ALLOWED_REPOS` bornée.
3. Branches/PR documentaires dédiées ; protections branch.
4. Pilote + identité RECETTE.
5. Scénario : lecture → publication → merge sous mandats D6 distincts.
6. Contrôles D7/D8 ; reprise ; rollback (close PR / delete branch test).
7. **Aucun** dépôt production.

## Scénarios Pilote à examiner en RECETTE (hors G5 pixel)

- A01 sans Git ; A06/A08 navigation tree ; A12 publications.
- B01/B03/B06/B07 conduite Nora ; B14 refus.
- S05 absence secrets ; S07 meta provider visible.
- Points d’observation Git : ref tip, PR number, merge SHA, D8 facts.

## Réserves & gates Morris

| Gate | Motif |
| --- | --- |
| GO freeze commit | Candidate SHA manquant |
| GO mise à disposition RECETTE | Objet Git/build identifiable |
| GO REAL sandbox WRITE | Mutations externes |
| GO Nora LIVE budget | Si test sémantique LIVE requis |
| UAT visuelle Morris | G5 différé — ne pas annoncer PASS G5 |

## Rollback / exit

- Pas de déploiement effectué → exit = conserver DEV dirty isolé.
- Après futur déploiement RECETTE : revert build + DB restore + désactiver App sandbox.

## Verdict préflight

**PREFLIGHT ONLY — NOT READY FOR RECETTE DEPLOYMENT.**
Candidat techniquement avancé ; freeze Git + gates Morris requis avant toute mise à disposition.

---

## 10. Fake / Real

| Frontière | Niveau |
| --- | --- |
| DET / unit @ freeze | DETERMINISTIC PROVEN |
| PG merge-security @ freeze | INTEGRATION PROVEN |
| Browser / Playwright | NOT RUN ce cycle |
| Nora LIVE | NOT PROVEN |
| GitHub REAL | NOT PROVEN · mutations OFF en RECETTE |
| Runtime RECETTE E08 | **NOT SERVED** (cutover non fait) |
| G5 | NOT PROVEN — Morris UAT |

---

## 11. Gate Morris SHA-specific

**GO cutover demandé sur :**

- SHA code build : `98185598de0d3f3b84af862aecea04b9099217ca`
- TREE : `1c70839facb7fbc799980c585ce8bfba51cdb5d6`
- BUILD_ID : `1xEbvCdTAX6ht262w4oKF`
- Lane : RECETTE existante E07 (port 3200, même DB)
- Script prêt : `start-recette-ensemble08-98185598.sh` (**non branché**)
- Rollback : worktree E07 + BUILD `BtZP6qDx5oAw8jwPQSEhc` + backup gzip

**Sans ce GO : STOP — aucune mutation LaunchAgent / runtime / DB RECETTE.**

---

## 12. Cutover

**NOT EXECUTED.** Runtime toujours E07.

---

## 13. Réserves / gates

1. GO SHA-specific cutover RECETTE
2. Smoke E07+E08 après bascule
3. UAT visuelle Morris (G5)
4. GO éventuel REAL sandbox WRITE
5. Push/PR projet (hors ce cycle)

---

## 14. Verdict

**CANDIDATE FROZEN — RECETTE GO REQUIRED**

Pas RECETTE AVAILABLE · pas STABLE · pas ADOPTED · pas END-TO-END REAL PROVEN.

---

## 15. Instruction ChatGPT

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier SHA/BUILD, runtime E07 intact, backup, matrice, absence de cutover, gates.
Revue indépendante avant GO cutover / intégration Git.
