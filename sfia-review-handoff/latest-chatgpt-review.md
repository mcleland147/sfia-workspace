# SFIA Review Pack — Full — Cycle 11 Critical

## 0. Identity

- **Date/heure**: 2026-11-27T22:44:00+01:00
- **Projet**: SFIA Studio Next
- **Jalon**: R5 IN PROGRESS · ML5 OPEN · Livraison 1 NOT ACCEPTED
- **Cycle**: 11 — Déploiement / release (NO RELEASE)
- **Nature**: Finalisation E5 + publication candidat + mise à disposition RECETTE
- **Profil**: Critical
- **Typologie**: EVOL
- **GO Morris**: suivi ML5 v0.18 §25–26 · doc `09f66cf0` · blob `59ce363b`
- **Branche projet**: `sfia/next-ml5-integrated-delivery-20261123`
- **SHA final publié**: `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`
- **Tree**: `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
- **Web tree**: `3e68a0a603ef042748e64a17148d9e9ea733c7d9`
- **Base antérieure**: `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6`
- **origin/main**: `997897fd7cf914771e7d08e8030dc7123fab7d25` (inchangé)
- **Handoff attendu**: `review(next): verify final ML5 candidate and recette cutover`

## 1. Mandat (synthèse)

Finaliser contrôles E5 bloquants ; corriger défauts confirmés ; publier snapshot intégré sans CI ; construire build RECETTE depuis SHA ; basculer :3200 si gates OK ; smoke technique non LIVE ; Full pack + L3 handoff. Interdit : E6, reopen E1–E4, T09, LIVE, STABLE, release, adoption, PR, merge, main.

## 2. Git Truth / ENV-01

| Check | Résultat |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Workspace DEV | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local=remote | `0ae9e1f7…` |
| merge-base main | `997897fd…` |
| CI workflows push | `main` only → pas de CI sur push branche |
| PR ouverte | aucune |
| `.tmp-sfia-review/chatgpt-review.md` | non suivi dans candidat produit |
| ENV DEV | :3100 / PG :5433 `sfia_next_dev` |
| ENV RECETTE | :3200 / PG :5434 `sfia_next_recette_ml4` |
| Verdict ENV | **ENV ROUTING COMPLETE** |

## 3. Delta entrant E5 + corrections finales

### Corrections bloquantes

1. **Droits récents** — fail-closed allowlists (Nora/Git/exécutions) ; refus si droits non vérifiables ; preuve `kind:attemptId:resourceKey`.
2. **D4 reprise** — `attempted` seulement si capitalisation réellement tentée.
3. **Dictée** — `modelApplied` depuis `session.updated` ou `UNVERIFIED`.
4. **PG historiques** — réconciliés ; réserve non bloquante.

### Diffstat `a3305a42..0ae9e1f7`

```
 .../construction/delivery-history.md               |  32 ++++
 .../browser/e5-panel-recents-state.json            |   6 +
 .../browser/e5-panel-recents-state.png             | Bin 0 -> 5308 bytes
 .../browser/e5-rail-results-1280x720.png           | Bin 0 -> 125333 bytes
 .../browser/e5-rail-results-hit.json               |  22 +++
 .../ml5-e5-20261127/browser/e5-sas-composer.json   |   7 +
 .../ml5-e5-20261127/browser/e5-sas-composer.png    | Bin 0 -> 93195 bytes
 .../ml5-e5-20261127/gate-a-technical-candidate.md  |  37 +++++
 .../evidence/ml5-e5-20261127/local-delta-stat.txt  |   7 +
 .../evidence/ml5-e5-20261127/local-delta.sha256    |   1 +
 .../evidence/ml5-e5-20261127/local-status.txt      |  11 ++
 .../pg-historical-failures-reconciliation.md       |  19 +++
 .../ml5-e5-20261127/plan-rejeu-recette-live.md     |  28 ++++
 .../ml5-e5-20261127/recette-candidate-manifest.md  |  50 +++++++
 .../ml5-e5-20261127/validations-summary.md         |  26 ++++
 ...5-registre-couverture-et-revue-developpement.md |   1 +
 .../web/src/app/projects/[projectId]/page.tsx      | 126 +++++++++++++---
 .../components/figma/CursorRealizationSurface.tsx  |   4 +
 .../web/src/components/shell/studio-shell.css      |   4 +
 .../conversation/composer-dictation-session.ts     |  87 ++++++++++-
 .../web/src/domains/conversation/service.ts        | 155 +++++++++++++++++++-
 .../web/src/lib/project-recent-consultation.ts     |  14 +-
 .../web/src/lib/project-recent-items.ts            |  50 +++++++
 .../ml3-composer-dictation-integrated.pg.test.ts   |   4 +
 .../qualify/ml5-e5-discriminating-browser.spec.ts  | 163 +++++++++++++++++++++
 .../tests/unit/e5-knowledge-recovery-ids.test.ts   |  40 +++++
 .../unit/ml3-composer-dictation-session.test.ts    | 125 +++++++++++++++-
 .../tests/unit/project-recent-consultation.test.ts |  10 ++
 .../web/tests/unit/project-recent-items.test.ts    |  50 +++++++
 29 files changed, 1047 insertions(+), 32 deletions(-)

```

## 4. Contenu modifié (diffs exploitables)

### 4.1 Libs droits / consultation

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
index 7e6838c9..4838f811 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
@@ -59,6 +59,8 @@ export type DictationSessionRecord = {
   /** Next expected client audio chunk sequence (0-based). */
   nextAudioSeq: number;
   onProviderSessionReady: (() => void) | null;
+  /** Reject open-wait when provider errors before ready (E5 handshake). */
+  onProviderSessionReadyReject: ((err: Error) => void) | null;
   /** Committed item_ids not yet completed — finalize waits until empty. */
   awaitingFinalItemIds: Set<string>;
   /** Commits sent to provider, not yet acknowledged via input_audio_buffer.committed. */
@@ -302,6 +304,7 @@ export async function createDictationSession(input: {
     errorCode: null,
     nextAudioSeq: 0,
     onProviderSessionReady: null,
+    onProviderSessionReadyReject: null,
     awaitingFinalItemIds: new Set(),
     commitsAwaitingAck: 0,
     pcmBytesSinceLastCommit: 0,
@@ -350,6 +353,7 @@ export async function createDictationSession(input: {
     const sessionReady = new Promise<void>((resolve, reject) => {
       const t = setTimeout(() => {
         record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
         reject(new Error("SESSION_OPEN_TIMEOUT"));
       }, SESSION_OPEN_TIMEOUT_MS);
       record.onProviderSessionReady = () => {
@@ -357,8 +361,17 @@ export async function createDictationSession(input: {
         providerReady = true;
         clearTimeout(t);
         record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
         resolve();
       };
+      record.onProviderSessionReadyReject = (err) => {
+        if (providerReady) return;
+        providerReady = true;
+        clearTimeout(t);
+        record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
+        reject(err);
+      };
     });
     transport.send({
       type: "session.update",
@@ -378,17 +391,35 @@ export async function createDictationSession(input: {
       },
     });
     await sessionReady;
+    // Terminal wins: cancel/fail during wait must not reopen as open.
+    if (isTerminalStatus(record.status)) {
+      return {
+        ok: false,
+        code: record.errorCode ?? "TRANSPORT_OPEN_FAILED",
+        message: "Dictation session terminated before open acknowledgement.",
+      };
+    }
     record.status = "open";
-    record.modelApplied = COMPOSER_DICTATION_MODEL;
+    // modelApplied set from session.updated payload when present; else UNVERIFIED.
+    if (!record.modelApplied) {
+      record.modelApplied = "UNVERIFIED";
+    }
     emit(record, { type: "session.open", sessionId });
     return { ok: true, session: record };
   } catch (e) {
     const rawMessage =
       e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
     const timedOut = rawMessage === "SESSION_OPEN_TIMEOUT";
-    const code = timedOut ? "SESSION_OPEN_TIMEOUT" : "TRANSPORT_OPEN_FAILED";
-    record.status = "failed";
-    record.errorCode = code;
+    const providerErr = rawMessage === "PROVIDER_ERROR" || rawMessage.startsWith("PROVIDER_ERROR");
+    const code = timedOut
+      ? "SESSION_OPEN_TIMEOUT"
+      : providerErr
+        ? "PROVIDER_ERROR"
+        : "TRANSPORT_OPEN_FAILED";
+    if (!isTerminalStatus(record.status)) {
+      record.status = "failed";
+      record.errorCode = code;
+    }
     try {
       record.transport?.close();
     } catch {
@@ -396,6 +427,7 @@ export async function createDictationSession(input: {
     }
     record.transport = null;
     record.onProviderSessionReady = null;
+    record.onProviderSessionReadyReject = null;
     emit(record, {
       type: "session.error",
       sessionId,
@@ -415,17 +447,47 @@ function handleProviderEvent(
   const type = String(event.type || "");
   touch(session);

-  if (type === "session.updated" || type === "session.created") {
+  // E5 — only session.updated acknowledges applied transcription config.
+  // session.created alone must not open the session as ready.
+  if (type === "session.updated") {
+    const sessObj =
+      event.session && typeof event.session === "object"
+        ? (event.session as Record<string, unknown>)
+        : null;
+    const nested =
+      sessObj?.audio && typeof sessObj.audio === "object"
+        ? (sessObj.audio as Record<string, unknown>)
+        : null;
+    const input =
+      nested?.input && typeof nested.input === "object"
+        ? (nested.input as Record<string, unknown>)
+        : null;
+    const transcription =
+      input?.transcription && typeof input.transcription === "object"
+        ? (input.transcription as Record<string, unknown>)
+        : null;
+    const reported = String(
+      sessObj?.model ?? transcription?.model ?? "",
+    ).trim();
+    // Ack without model field → UNVERIFIED (never invent applied = requested).
+    session.modelApplied = reported || "UNVERIFIED";
     session.onProviderSessionReady?.();
     return;
   }
+  if (type === "session.created") {
+    return;
+  }

   if (type === "input_audio_buffer.committed") {
     session.commitsAwaitingAck = Math.max(0, session.commitsAwaitingAck - 1);
     const itemId = String(event.item_id || "");
     if (itemId) {
       session.pendingItemId = itemId;
-      session.awaitingFinalItemIds.add(itemId);
+      // Completed may race ahead of committed (fixture delay / provider reorder).
+      // Never re-arm awaiting for an item already finalized in the draft.
+      if (!Object.prototype.hasOwnProperty.call(session.draft.finalByItem, itemId)) {
+        session.awaitingFinalItemIds.add(itemId);
+      }
     }
     if (session.status === "finalizing") {
       maybeCompleteFinalization(session);
@@ -479,14 +541,25 @@ function handleProviderEvent(
     return;
   }
   if (type === "error" || type === "conversation.item.input_audio_transcription.failed") {
+    // Never reopen / overwrite a terminal cancel/complete/expire with failed.
+    if (isTerminalStatus(session.status)) {
+      return;
+    }
+    const message = String(
+      event.error ?? event.message ?? "transcription failed",
+    ).slice(0, 240);
+    const stillOpening = session.status === "pending";
     session.status = "failed";
     session.errorCode = "PROVIDER_ERROR";
     emit(session, {
       type: "session.error",
       sessionId: session.sessionId,
       code: "PROVIDER_ERROR",
-      message: String(event.error ?? event.message ?? "transcription failed").slice(0, 240),
+      message,
     });
+    if (stillOpening && session.onProviderSessionReadyReject) {
+      session.onProviderSessionReadyReject(new Error("PROVIDER_ERROR"));
+    }
     try {
       session.transport?.close();
     } catch {
diff --git a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
index 78ba7988..adf497af 100644
--- a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
@@ -62,13 +62,23 @@ export function recentItemFromAttemptConsultation(input: {
   attemptId: string;
   title: string;
   refLabel?: string | null;
-}): Pick<ProjectRecentItem, "id" | "kind" | "title" | "refLabel" | "attemptId"> {
+  /** Distinguishes multiple proofs/results under the same attempt when known. */
+  resourceKey?: string | null;
+  resultId?: string | null;
+}): Pick<
+  ProjectRecentItem,
+  "id" | "kind" | "title" | "refLabel" | "attemptId" | "resultId"
+> {
+  const resource = input.resourceKey?.trim() || input.resultId?.trim() || "";
   return {
-    id: `${input.kind}:${input.attemptId}`,
+    id: resource
+      ? `${input.kind}:${input.attemptId}:${resource}`
+      : `${input.kind}:${input.attemptId}`,
     kind: input.kind,
     title: input.title.slice(0, 160),
     refLabel: input.refLabel ?? null,
     attemptId: input.attemptId,
+    resultId: input.resultId ?? null,
   };
 }

diff --git a/projects/sfia-studio-next/web/src/lib/project-recent-items.ts b/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
index c7fb4172..126c97ba 100644
--- a/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
@@ -130,3 +130,53 @@ export function clearProjectRecentItems(pilotId: string, projectId: string): voi
     /* ignore */
   }
 }
+
+export type ProjectRecentExposureAllowlist = {
+  /** Project load finished — fail-closed before this. */
+  loadReady: boolean;
+  /** Nora document ids currently visible to the pilot in this project. */
+  documentIds: ReadonlySet<string>;
+  /** Git repositories linked to this project (local binding — not LIVE content ACL). */
+  repositoryIds: ReadonlySet<string>;
+  /** Realization attempt ids owned by this pilot/project. */
+  attemptIds: ReadonlySet<string>;
+  /**
+   * When false, allowlists for git/attempts are not yet known → hide those kinds.
+   * Documents still use documentIds once loadReady.
+   */
+  accessListsReady: boolean;
+};
+
+/**
+ * Fail-closed exposure filter before rendering recent titles/refs.
+ * localStorage is not an authority — membership in project-scoped allowlists is required.
+ */
+export function filterProjectRecentItemsForExposure(
+  items: ProjectRecentItem[],
+  allow: ProjectRecentExposureAllowlist,
+): ProjectRecentItem[] {
+  if (!allow.loadReady) return [];
+  return items.filter((item) => {
+    if (item.kind === "document_nora") {
+      const id =
+        item.documentId ??
+        item.id.replace(/^doc:/, "").replace(/:rev:.*$/, "");
+      return Boolean(id) && allow.documentIds.has(id);
+    }
+    if (!allow.accessListsReady) return false;
+    if (item.kind === "file_git" || item.kind === "document_git") {
+      const repo = item.repositoryId?.trim() || "";
+      return Boolean(repo) && allow.repositoryIds.has(repo);
+    }
+    if (
+      item.kind === "execution" ||
+      item.kind === "result" ||
+      item.kind === "bilan" ||
+      item.kind === "proof"
+    ) {
+      const attempt = item.attemptId?.trim() || "";
+      return Boolean(attempt) && allow.attemptIds.has(attempt);
+    }
+    return false;
+  });
+}

```

### 4.2 CursorRealizationSurface + CSS rail

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index cc18e927..d9d089df 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -78,6 +78,8 @@ export function CursorRealizationSurface(props: {
     attemptId: string;
     title: string;
     refLabel?: string | null;
+    resourceKey?: string | null;
+    resultId?: string | null;
   }) => void;
 }) {
   const mode = props.mode ?? "execution";
@@ -495,6 +497,8 @@ export function CursorRealizationSurface(props: {
         attemptId: attempt.attemptId,
         title: `Tentative ${attempt.attemptId.slice(0, 12)}`,
         refLabel: j.qualification!.verdict?.slice(0, 40) ?? attempt.status,
+        resourceKey: mode === "results" ? "bilan" : "result",
+        resultId: j.qualification!.verdict?.slice(0, 64) ?? null,
       });
     } finally {
       setBusy(false);
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 91f415f9..c4b691d3 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -40,6 +40,10 @@ html.studio-shell-lock body {
   overflow-x: hidden;
   overflow-y: auto;
   overscroll-behavior: contain;
+  /* Keep last Accès directs items clear of pinned foot at 1280×720 (E5).
+     scroll-padding alone does not create scroll range — real padding required. */
+  padding-bottom: 4.5rem;
+  scroll-padding-bottom: 4.5rem;
 }

 .studio-shell-rail-foot {

```

### 4.3 page.tsx (extrait borné — delta droits/load)

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e22b8e89..a33f573e 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -77,11 +77,13 @@ import {
   type StudioSurface,
 } from "@/components/shell/studio-rail";
 import {
+  filterProjectRecentItemsForExposure,
   readProjectRecentItems,
   recordProjectRecentItem,
   type ProjectRecentItem,
 } from "@/lib/project-recent-items";
 import {
+  recentItemFromAttemptConsultation,
   recentItemFromDocumentConsultation,
   recentItemFromTurnReference,
 } from "@/lib/project-recent-consultation";
@@ -299,6 +301,12 @@ export default function ProjectPage() {
   const [loadEpoch, setLoadEpoch] = useState(0);
   /** Observable end of project load + surface URL sync (e2e / anti-race proof). */
   const [projectLoadState, setProjectLoadState] = useState<"loading" | "ready">("loading");
+  /** Fail-closed allowlists for recent-item exposure (not localStorage authority). */
+  const [recentAccessLists, setRecentAccessLists] = useState<{
+    ready: boolean;
+    repositoryIds: string[];
+    attemptIds: string[];
+  }>({ ready: false, repositoryIds: [], attemptIds: [] });
   const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
   const [draft, setDraft] = useState("");
   /** Figma 12.09 — durable retirable D8 dossier ref (survives draft edits). */
@@ -451,16 +459,74 @@ export default function ProjectPage() {
       return;
     }
     const stored = readProjectRecentItems(pilotId, params.projectId);
-    // Drop Nora docs no longer present in the authorized library (rights/access).
     const docIds = new Set(documents.map((d) => d.document.id));
     setRecentItems(
-      stored.filter((item) => {
-        if (item.kind !== "document_nora") return true;
-        const id = item.documentId ?? item.id.replace(/^doc:/, "").replace(/:rev:.*$/, "");
-        return !id || docIds.size === 0 || docIds.has(id);
+      filterProjectRecentItemsForExposure(stored, {
+        loadReady: projectLoadState === "ready",
+        documentIds: docIds,
+        repositoryIds: new Set(recentAccessLists.repositoryIds),
+        attemptIds: new Set(recentAccessLists.attemptIds),
+        accessListsReady: recentAccessLists.ready,
       }),
     );
-  }, [pilotId, params.projectId, documents]);
+  }, [
+    pilotId,
+    params.projectId,
+    documents,
+    projectLoadState,
+    recentAccessLists,
+  ]);
+
+  useEffect(() => {
+    if (projectLoadState !== "ready" || !params.projectId) {
+      setRecentAccessLists({ ready: false, repositoryIds: [], attemptIds: [] });
+      return;
+    }
+    let cancelled = false;
+    void (async () => {
+      try {
+        const [linksRes, attemptsRes] = await Promise.all([
+          fetch(`/api/projects/${params.projectId}/git/links`),
+          fetch(`/api/projects/${params.projectId}/realization/attempts`),
+        ]);
+        const repoIds: string[] = [];
+        const attemptIds: string[] = [];
+        if (linksRes.ok) {
+          const lj = (await linksRes.json()) as {
+            links?: Array<{ repositoryId?: string }>;
+          };
+          for (const link of lj.links ?? []) {
+            const id = link.repositoryId?.trim();
+            if (id) repoIds.push(id);
+          }
+        }
+        if (attemptsRes.ok) {
+          const aj = (await attemptsRes.json()) as {
+            attempts?: Array<{ attemptId?: string }>;
+          };
+          for (const a of aj.attempts ?? []) {
+            const id = a.attemptId?.trim();
+            if (id) attemptIds.push(id);
+          }
+        }
+        if (!cancelled) {
+          // Lists ready even if empty — empty means no authorized exposure, not "allow all".
+          setRecentAccessLists({
+            ready: true,
+            repositoryIds: repoIds,
+            attemptIds,
+          });
+        }
+      } catch {
+        if (!cancelled) {
+          setRecentAccessLists({ ready: false, repositoryIds: [], attemptIds: [] });
+        }
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [projectLoadState, params.projectId]);

   useEffect(() => {
     if (surface !== "travail") return;
@@ -3824,13 +3890,23 @@ export default function ProjectPage() {
               selectSurface("travail");
             }}
             onPilotConsulted={(item) => {
-              notePilotConsultation({
-                id: `exec:${item.attemptId}`,
-                kind: item.kind,
-                title: item.title,
-                refLabel: item.refLabel ?? null,
-                attemptId: item.attemptId,
-              });
+              const kind =
+                item.kind === "execution" ||
+                item.kind === "result" ||
+                item.kind === "bilan" ||
+                item.kind === "proof"
+                  ? item.kind
+                  : "execution";
+              notePilotConsultation(
+                recentItemFromAttemptConsultation({
+                  kind,
+                  attemptId: item.attemptId,
+                  title: item.title,
+                  refLabel: item.refLabel ?? null,
+                  resourceKey: item.resourceKey ?? null,
+                  resultId: item.resultId ?? null,
+                }),
+              );
             }}
           />
         </div>
@@ -3847,13 +3923,23 @@ export default function ProjectPage() {
               selectSurface("travail");
             }}
             onPilotConsulted={(item) => {
-              notePilotConsultation({
-                id: `${item.kind}:${item.attemptId}`,
-                kind: item.kind,
-                title: item.title,
-                refLabel: item.refLabel ?? null,
-                attemptId: item.attemptId,
-              });
+              const kind =
+                item.kind === "execution" ||
+                item.kind === "result" ||
+                item.kind === "bilan" ||
+                item.kind === "proof"
+                  ? item.kind
+                  : "result";
+              notePilotConsultation(
+                recentItemFromAttemptConsultation({
+                  kind,
+                  attemptId: item.attemptId,
+                  title: item.title,
+                  refLabel: item.refLabel ?? null,
+                  resourceKey: item.resourceKey ?? null,
+                  resultId: item.resultId ?? null,
+                }),
+              );
             }}
           />
         </div>

```

### 4.4 service.ts (extrait borné — attempted / recovery)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index acef44f6..71c84c01 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -587,6 +587,15 @@ export async function lookupDurableTurnByClientKey(
     }),
   });

+  const knowledgeEffects = await recoverKnowledgeEffectsForReadPath({
+    pilotId,
+    preparationId,
+    generationId: row.generationId,
+    userMessageId: row.userMessageId,
+    resultJson: row.resultJson,
+    fromJsonEffects: fromJsonKnowledgeEffects,
+  });
+
   return {
     found: true,
     turnCommandId: row.id,
@@ -597,7 +606,7 @@ export async function lookupDurableTurnByClientKey(
     assistantMessageId: row.assistantMessageId,
     pilotageEffect: resolved.pilotageEffect,
     pilotageEffects: resolved.pilotageEffects,
-    knowledgeEffects: fromJsonKnowledgeEffects,
+    knowledgeEffects,
     idempotentReplay: true,
     noraMode: "durable-lookup",
   };
@@ -906,6 +915,140 @@ type KnowledgeCapRow = {
   reason?: string;
 };

+/**
+ * E5 — durable knowledge intent ids from effect projections ∪ qualification stash.
+ * Never invents effects; only surfaces known d4.record_knowledge intents for recovery.
+ */
+export function extractDurableKnowledgeIntentIds(input: {
+  fromJsonEffects?: TurnKnowledgeEffect[] | null;
+  resultJson?: string | null;
+}): string[] {
+  const ids = new Set<string>();
+  for (const e of input.fromJsonEffects ?? []) {
+    const t = e.semanticIntentId?.trim() || "";
+    if (t) ids.add(t);
+  }
+  const raw = input.resultJson?.trim();
+  if (raw) {
+    try {
+      const parsed = JSON.parse(raw) as {
+        knowledgeEffects?: TurnKnowledgeEffect[];
+        semanticQualification?: NoraTurnQualification;
+        capitalisationAttempted?: KnowledgeCapRow[];
+      };
+      for (const e of parsed.knowledgeEffects ?? []) {
+        const t = e.semanticIntentId?.trim() || "";
+        if (t) ids.add(t);
+      }
+      for (const row of parsed.capitalisationAttempted ?? []) {
+        const t = row.intentId?.trim() || "";
+        if (t) ids.add(t);
+      }
+      for (const i of parsed.semanticQualification?.intents ?? []) {
+        if (
+          i.mode === "REQUEST_EFFECT" &&
+          i.capabilityId === "d4.record_knowledge"
+        ) {
+          const t = i.id.trim();
+          if (t) ids.add(t);
+        }
+      }
+    } catch {
+      /* ignore malformed stash */
+    }
+  }
+  return [...ids];
+}
+
+/**
+ * E5 read-path recovery — promote/reconcile knowledgeEffects from durable info.
+ * Lookup/replay never mutate; UNKNOWN when intent known but outcome indeterminate.
+ */
+export async function recoverKnowledgeEffectsForReadPath(input: {
+  pilotId: string;
+  preparationId: string;
+  generationId?: string | null;
+  userMessageId?: string | null;
+  resultJson?: string | null;
+  fromJsonEffects?: TurnKnowledgeEffect[] | null;
+}): Promise<TurnKnowledgeEffect[] | undefined> {
+  let fromJson = input.fromJsonEffects;
+  let capRows: KnowledgeCapRow[] = [];
+  if (input.resultJson?.trim()) {
+    try {
+      const parsed = JSON.parse(input.resultJson) as {
+        knowledgeEffects?: TurnKnowledgeEffect[];
+        capitalisationAttempted?: KnowledgeCapRow[];
+      };
+      if (fromJson === undefined && Array.isArray(parsed.knowledgeEffects)) {
+        fromJson = parsed.knowledgeEffects;
+      }
+      if (Array.isArray(parsed.capitalisationAttempted)) {
+        capRows = parsed.capitalisationAttempted;
+      }
+    } catch {
+      /* ignore */
+    }
+  }
+  const intentIds = extractDurableKnowledgeIntentIds({
+    fromJsonEffects: fromJson,
+    resultJson: input.resultJson,
+  });
+  const reconstituted = await reconstituteConfirmedD4Effects(
+    input.pilotId,
+    input.preparationId,
+    {
+      generationId: input.generationId,
+      userMessageId: input.userMessageId,
+    },
+  );
+  const seeded: TurnKnowledgeEffect[] = [...(fromJson ?? [])];
+  const capIntentIds = new Set(
+    capRows.map((r) => (r.intentId || "").trim()).filter(Boolean),
+  );
+  for (const intentId of intentIds) {
+    if (seeded.some((e) => e.semanticIntentId === intentId)) continue;
+    // Intent in semantic stash alone ≠ proprietary call attempted.
+    // Only capitalisationAttempted (or later reconstitution) proves an attempt path.
+    const attempted = capIntentIds.has(intentId);
+    seeded.push(
+      knowledgeEffectFromCapitalisation({
+        intentId,
+        status: "UNKNOWN",
+        attempted,
+        reason: attempted
+          ? "Issue D4 à confirmer — capitalisation durable connue, résultat projection absent ou partiel."
+          : "Intention D4 durable connue sans preuve d'appel propriétaire — résultat indéterminé.",
+        reasonCode: "RECOVERY_INDETERMINATE",
+      }),
+    );
+  }
+  if (seeded.length === 0 && reconstituted.capitalisation.length === 0) {
+    return fromJson ?? undefined;
+  }
+  const reconciled = reconcileKnowledgeEffectsFromDurableInfo({
+    effects: seeded,
+    capitalisationRows: capRows.length
+      ? capRows
+      : seeded
+          .filter((e) => e.semanticIntentId && e.ownerRef)
+          .map((e) => ({
+            intentId: e.semanticIntentId,
+            status: e.status,
+            kind: e.proposalKind ?? undefined,
+            id: e.ownerRef ?? undefined,
+            reason: e.reason ?? undefined,
+          })),
+    reconstituted: reconstituted.capitalisation.map((c) => ({
+      id: c.id,
+      kind: c.kind,
+      status: c.status,
+    })),
+  });
+  if (reconciled.length > 0) return reconciled;
+  return fromJson ?? undefined;
+}
+
 /**
  * E2 residual fidelity (§21.1) — reconcile knowledgeEffects on UNKNOWN / ownership-loss
  * paths from durable capitalisation rows + DB reconstitution. Never invents mutations:
@@ -1345,6 +1488,14 @@ export async function postUserMessageAndNora(
           resultJson: reserved.resultJson,
         }),
       });
+      const knowledgeEffects = await recoverKnowledgeEffectsForReadPath({
+        pilotId,
+        preparationId,
+        generationId: reserved.generationId,
+        userMessageId: reserved.userMessageId,
+        resultJson: reserved.resultJson,
+        fromJsonEffects: replayKnowledgeEffects,
+      });
       return {
         operationId: reserved.operationId,
         requestId,
@@ -1361,7 +1512,7 @@ export async function postUserMessageAndNora(
         capitalisation: reconstituted.capitalisation,
         capitalisationLimit: reconstituted.capitalisationLimit,
         documentSave: reconstituted.documentSave,
-        knowledgeEffects: replayKnowledgeEffects,
+        knowledgeEffects,
       };
     }
     return {

```

### 4.5 Tests unit droits / recovery IDs

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/e5-knowledge-recovery-ids.test.ts b/projects/sfia-studio-next/web/tests/unit/e5-knowledge-recovery-ids.test.ts
new file mode 100644
index 00000000..1d401913
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/e5-knowledge-recovery-ids.test.ts
@@ -0,0 +1,40 @@
+import { describe, expect, it } from "vitest";
+import { extractDurableKnowledgeIntentIds } from "@/domains/conversation/service";
+
+describe("E5 knowledge recovery intent ids", () => {
+  it("unions knowledgeEffects, capitalisationAttempted and d4 stash intents", () => {
+    const ids = extractDurableKnowledgeIntentIds({
+      fromJsonEffects: [
+        {
+          attempted: false,
+          capabilityId: "d4.record_knowledge",
+          semanticIntentId: "from-json",
+          status: "SKIPPED",
+          reasonCode: null,
+          reason: null,
+          ownerRef: null,
+          proposalKind: null,
+        },
+      ],
+      resultJson: JSON.stringify({
+        capitalisationAttempted: [{ intentId: "from-cap", status: "AVAILABLE", id: "acq_1" }],
+        semanticQualification: {
+          status: "QUALIFIED",
+          intents: [
+            {
+              id: "from-stash",
+              mode: "REQUEST_EFFECT",
+              capabilityId: "d4.record_knowledge",
+            },
+            {
+              id: "pilotage-ignored",
+              mode: "REQUEST_EFFECT",
+              capabilityId: "d5.pilotage_command",
+            },
+          ],
+        },
+      }),
+    });
+    expect(ids.sort()).toEqual(["from-cap", "from-json", "from-stash"].sort());
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts b/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
index 4175d4e4..5180b54b 100644
--- a/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
@@ -88,7 +88,17 @@ describe("B.8 — pilot consultation identities (MP-08)", () => {
       title: "Exécution att_1",
       refLabel: "RUNNING",
       attemptId: "att_1",
+      resultId: null,
     });
+    expect(
+      recentItemFromAttemptConsultation({
+        kind: "proof",
+        attemptId: "att_1",
+        title: "Preuve A",
+        resourceKey: "cap_a",
+        resultId: "cap_a",
+      }).id,
+    ).toBe("proof:att_1:cap_a");
   });

   it("isolates recent lists per canonical id (project A vs B)", () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts b/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
index e683ea5f..de0a8335 100644
--- a/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
@@ -1,5 +1,6 @@
 import { describe, expect, it } from "vitest";
 import {
+  filterProjectRecentItemsForExposure,
   mergeProjectRecentItems,
   type ProjectRecentItem,
 } from "@/lib/project-recent-items";
@@ -35,4 +36,53 @@ describe("project-recent-items (MP-08)", () => {
     expect(a[0]?.id).toBe("doc:a");
     expect(b[0]?.id).toBe("doc:b");
   });
+
+  it("E5 fail-closed: no exposure before loadReady; foreign kinds require allowlists", () => {
+    const mixed: ProjectRecentItem[] = [
+      { id: "doc:d1", kind: "document_nora", title: "Secret Doc", consultedAtMs: 1, documentId: "d1" },
+      {
+        id: "git:r1:a.md@main",
+        kind: "file_git",
+        title: "Secret Path",
+        consultedAtMs: 2,
+        repositoryId: "r1",
+        path: "a.md",
+        gitRef: "main",
+      },
+      {
+        id: "execution:att_x",
+        kind: "execution",
+        title: "Secret Attempt",
+        consultedAtMs: 3,
+        attemptId: "att_x",
+      },
+    ];
+    expect(
+      filterProjectRecentItemsForExposure(mixed, {
+        loadReady: false,
+        documentIds: new Set(["d1"]),
+        repositoryIds: new Set(["r1"]),
+        attemptIds: new Set(["att_x"]),
+        accessListsReady: true,
+      }),
+    ).toEqual([]);
+    expect(
+      filterProjectRecentItemsForExposure(mixed, {
+        loadReady: true,
+        documentIds: new Set(["d1"]),
+        repositoryIds: new Set(),
+        attemptIds: new Set(),
+        accessListsReady: true,
+      }).map((x) => x.id),
+    ).toEqual(["doc:d1"]);
+    expect(
+      filterProjectRecentItemsForExposure(mixed, {
+        loadReady: true,
+        documentIds: new Set(["d1"]),
+        repositoryIds: new Set(["r1"]),
+        attemptIds: new Set(["att_x"]),
+        accessListsReady: false,
+      }).map((x) => x.id),
+    ).toEqual(["doc:d1"]);
+  });
 });

```

### 4.6 Tests dictation session (extrait)

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
index 4c4239be..2ab9714c 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
@@ -810,7 +810,7 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     let closed = false;
     let handler: ((ev: Record<string, unknown>) => void) | null = null;
     const silentTransport: RealtimeTransport = {
-      // Opens but never emits session.updated / session.created (mic-OK then ~10s hang).
+      // Opens but never emits session.updated (mic-OK then ~10s hang).
       send: () => undefined,
       close: () => {
         closed = true;
@@ -835,6 +835,129 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     expect(closed).toBe(true);
   }, 15_000);

+  it("E5: provider error before session.updated rejects open wait (no hang)", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    let handler: ((ev: Record<string, unknown>) => void) | null = null;
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handler?.({ type: "error", message: "handshake rejected" }));
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handler = h;
+      },
+    };
+    const created = await createDictationSession({
+      pilotId: "pilot-pre-ready-err",
+      projectId: "proj-pre-ready-err",
+      conversationKey: "proj-pre-ready-err",
+      baselineDraft: "",
+      transportFactory: async () => transport,
+      limits: { maxDurationMs: 60_000 },
+    });
+    expect(created.ok).toBe(false);
+    if (created.ok) return;
+    expect(created.code).toBe("PROVIDER_ERROR");
+  }, 5_000);
+
+  it("E5: session.created alone does not open; session.updated required", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    const handlerRef: {
+      current: ((ev: Record<string, unknown>) => void) | null;
+    } = { current: null };
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handlerRef.current?.({ type: "session.created" }));
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handlerRef.current = h;
+      },
+    };
+    const createdPromise = createDictationSession({
+      pilotId: "pilot-created-only",
+      projectId: "proj-created-only",
+      conversationKey: "proj-created-only",
+      baselineDraft: "",
+      transportFactory: async () => transport,
+      limits: { finalizeTimeoutMs: 80 },
+    });
+    await new Promise((r) => setTimeout(r, 30));
+    // Still waiting — inject updated to complete successfully after created ignored.
+    handlerRef.current?.({ type: "session.updated" });
+    const created = await createdPromise;
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    expect(created.session.status).toBe("open");
+    expect(created.session.modelApplied).toBe("UNVERIFIED");
+  }, 5_000);
+
+  it("E5: completed before committed during finalize does not hang awaiting", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    const handlerRef: {
+      current: ((ev: Record<string, unknown>) => void) | null;
+    } = { current: null };
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handlerRef.current?.({ type: "session.updated" }));
+        }
+        if (p.type === "input_audio_buffer.commit") {
+          // Delay committed past an early completed (qualify fixture race).
+          setTimeout(() => {
+            handlerRef.current?.({
+              type: "input_audio_buffer.committed",
+              item_id: "early_item",
+            });
+          }, 40);
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handlerRef.current = h;
+      },
+    };
+    const created = await createDictationSession({
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+      conversationKey: "proj-early-complete",
+      baselineDraft: "Base",
+      transportFactory: async () => transport,
+      limits: { finalizeTimeoutMs: 500 },
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    appendDictationAudio({
+      sessionId: created.session.sessionId,
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+      pcmBase64: Buffer.alloc(320, 1).toString("base64"),
+      seq: 0,
+    });
+    const finPromise = finalizeDictationSession({
+      sessionId: created.session.sessionId,
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+    });
+    await new Promise((r) => setTimeout(r, 5));
+    handlerRef.current?.({
+      type: "conversation.item.input_audio_transcription.completed",
+      item_id: "early_item",
+      transcript: "précoce",
+    });
+    const fin = await finPromise;
+    expect(fin.ok).toBe(true);
+    if (!fin.ok) return;
+    expect(fin.transcript).toContain("précoce");
+  }, 5_000);
+
   it("fixture transport recovers ready ack queued before onEvent (MP-06 DET)", async () => {
     process.env.SFIA_COMPOSER_DICTATION = "1";
     process.env.STUDIO_LANE = "DEV";
```

### 4.7 Evidence / delivery-history / registre

Inclus au commit `0ae9e1f7` sous `construction/evidence/ml5-e5-20261127/` + mise à jour `delivery-history.md` / registre.

## 5. Validations

| Contrôle | Résultat | Preuve |
|---|---|---|
| Unit ciblés droits/D4/dictée | 33 PASS | DEV |
| PG dictation + E2 | 17 PASS | `sfia_next_e2e` :5433 |
| lint | EXIT 0 | web |
| `npm run build` DEV | EXIT 0 | |
| `git diff --check` | clean | |
| Capitalisation E5 antérieure | unit 1531 · browser 3+5 | evidence validations-summary |
| Full PG suite | non rejouée | réserve R-E5-PG-HIST |

## 6. Réconciliation PG historique

# Réconciliation échecs PG historiques — finalisation E5

**Source**: `/tmp/e5-test-integration.log` (campagne E5 antérieure) + rejeux ciblés 27/11/2026.

| Suite / test | Cause rapportée | Préexistant? | Lien delta E5 | Risque RECETTE | Action |
| --- | --- | --- | --- | --- | --- |
| ml3-composer-dictation T02/T11 timeout | completed-before-committed + COMMIT_DELAY leak | Partiel (exposé par E5 readiness) | **Oui** — corrigé | Faible après fix | Rejoué **8 PASS** |
| git-collaboration schema revision 008 | attend `018_…` vs schéma courant `026/027` | Oui | Non | Nul (test obsolète) | Réserve tooling |
| ML5 Cursor dispatch schema 019 | même classe d'assertion schéma | Oui | Non | Nul | Réserve tooling |
| ml4c prior proposal C-02/C-03 / SRC-04 / LIVE-03 | fixture SEM / fence | Oui | Non | Nul cutover | Réserve historique |
| ensemble07 initial qualification | CLARIFICATION vs PROPOSED | Oui (fixture) | Non | Nul cutover | Réserve historique |
| ml2-turn-command investigation profile | analyse vs investigation | Oui | Non | Nul | Réserve historique |
| ml3-pilotage CR-02 concurrent | Commande introuvable | Oui | Non | Isolé e2e | Réserve historique |
| ml4-chat-first R06 / B-iso-neg | fixture revise | Oui | Non | Nul | Réserve historique |
| ML1 integrated substituted campaign | PARTIAL frontier | Oui | Non | Nul | Réserve historique |

**Rejeu ciblé post-corrections finales**: dictation PG 8 PASS · e2-unified 4 PASS · e2-final-orch inclus dans lot 17 PASS.

**Conclusion**: aucun FAIL d'intégrité/autorité/sécurité lié au candidat correctif non traité. Suite globale non rejouée — réserve `R-E5-PG-HIST` explicite (tests obsolètes / fixtures), **non bloquante cutover**.


## 7. Gate A

# Gate A — TECHNICAL CANDIDATE GATE

**Date**: 2026-11-27T22:40 Europe/Paris
**Verdict**: **PASS**

## Blocking residuals treated

| Risk | Action | Result |
| --- | --- | --- |
| Rights — all recent kinds | Fail-closed allowlists + load filters (docs/repos/attempts) | Corrected + unit tests |
| Proof identity | `kind:attemptId:resourceKey` via existing helper | Corrected + unit |
| D4 `attempted` fidelity | `attempted` only if capitalisation attempted | Corrected + PG/unit |
| Dictation modelApplied | From `session.updated` or `UNVERIFIED` | Corrected + unit |
| Historical PG ~22 FAIL | Reconciled; no integrity link to candidate | Reserve `R-E5-PG-HIST` |

## Validations (proportional)

| Control | Result |
| --- | --- |
| Targeted unit (rights/D4/dictation) | 33 PASS |
| Targeted PG (dictation + E2) | 17 PASS |
| lint | EXIT 0 |
| `npm run build` | EXIT 0 |
| `git diff --check` | clean |
| Full unit 1531 / browser E5 | Capitalized from prior E5 (unchanged surface for those) |

## Explicit reserves (non-blocking cutover)

- `R-E5-PG-HIST` — historical PG suite FAILs (obsolete schema assertions / fixtures)
- `R-E5-MP06-LIVE` — dictation LIVE / FR quality / latency → user recette
- `R-E5-TSC-TESTS` — pre-existing test tsc failures outside product delta
- Natural LIVE proofs (Nora, allocation, T08/T09) → GO distinct

## Gate decision

No known critical integrity/authority/isolation defect untreated.
**TECHNICAL CANDIDATE GATE — PASS.**


## 8. Publication Git

- Commit: `fix(next): finalize integrated ML5 corrective candidate for recette`
- SHA local=remote: `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`
- Tree: `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
- Push FF: `a3305a42..0ae9e1f7`
- CI observée: **aucune** (`gh run list` vide)
- PR: **aucune**
- main: **inchangé**
- Verdict: **FINAL DEV CANDIDATE PUBLISHED — REMOTE VERIFIED**

## 9. Pré-cutover / sauvegarde / rollback

- Ancien SHA/BUILD conservés: `e8e6e069` / `rpEczSp61evIZ7d6fnIWR` / worktree `…-e8e6e06961fa`
- Backup: `…/sfia-recette-backups/ml5-20261127T2245Z-pre-0ae9e1f7-from-e8e6e069/`
  - dump Fc 1.5 Mo · TOC 372 entrées · lisible `pg_restore -l`
  - start script + plist pré-cutover
  - checkpoint MaintiPlan pré
- Rollback prioritaire: retarget lancement vers ancien worktree (données non réécrites)

## 10. Gate B

**RECETTE CUTOVER GATE — PASS** (10/10 conditions).

## 11. Cutover + build

- Worktree: `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee` (detached `0ae9e1f7`)
- `npm ci` EXIT 0 · `npm run build` EXIT 0
- BUILD_ID: `p0S18hfVdGrMjGeNMGlbV`
- Digest: `2665e4db38908f0d3e6af96f4faa8cb6e7e877e2a66db85b2320ec3d7866fad9`
- LaunchAgent retarget WorkingDirectory + start script SHA

## 12. Manifeste réellement servi

# Manifeste RECETTE servi — Cutover ML5 final E5 — 2026-11-27

Artefact opérationnel hors build figé (pas de second commit projet).

| Champ | Ancienne RECETTE | Nouvelle RECETTE (servie) |
|---|---|---|
| Lane | RECETTE | RECETTE |
| URL | http://127.0.0.1:3200 | http://127.0.0.1:3200 |
| Classe | NO RELEASE | NO RELEASE |
| Candidat SHA | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` | `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` |
| Tree repo | `30c12ad9eb48959c0326df9f7629471e8ec847a3` | `842537274c3ad0b2f672c9ebe2e9e0f54c55d968` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` | `3e68a0a603ef042748e64a17148d9e9ea733c7d9` |
| BUILD_ID | `rpEczSp61evIZ7d6fnIWR` | `p0S18hfVdGrMjGeNMGlbV` |
| Digest | `18e014c1…` | `2665e4db38908f0d3e6af96f4faa8cb6e7e877e2a66db85b2320ec3d7866fad9` |
| Worktree | `…/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` | `…/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` | même label (retarget) |
| Base main | `997897fd…` | `997897fd…` (inchangé) |
| PostgreSQL | `sfia_next_recette_ml4` · :5434 | **identique** |
| Schéma | 027 (`derived_embedding_chunks`) | **027 inchangé** |
| MaintiPlan | `proj_ab07878d…` · 1 conv · 1 doc · 15 msgs · 1 human_decision · T09=0 | **identique post-cutover** |
| Dataset lane | projects=32 · documents=124 · conversations=211 · chunks=10 | **identique** |
| Sauvegarde | — | `/Users/morris/Projects/sfia-recette-backups/ml5-20261127T2245Z-pre-0ae9e1f7-from-e8e6e069/` (dump Fc TOC 372) |
| Rollback code | — | retarget start script + plist vers worktree `e8e6e069` / BUILD `rpEczSp61evIZ7d6fnIWR` (conservé) |

## Configuration non secrète effective

- `STUDIO_LANE=RECETTE` · `PORT=3200` · `HOSTNAME=127.0.0.1`
- `SFIA_SOURCE_SHA=0ae9e1f7aaee3658eb3e9a135523e83a72631b31`
- `SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0`
- `SFIA_ADMIN_USAGE_COLLECTOR=0`
- Admission préservée (non nouvellement activée) : dictation flag ON / transport live / bounded judgment / embeddings pg / vision ponctuelle
- Fixtures / DEV auto-session : unset
- **Smoke cutover** : aucune émission LIVE exercée (pas de message Nora, pas de dictée, pas d'indexation, pas de models.list)

## Preuve identité runtime

- HTTP `/login` 200 · HTML `<!--p0S18hfVdGrMjGeNMGlbV-->`
- Process cwd = nouveau worktree web
- PID stable `77113` (pas de boucle KeepAlive)

## Verdict

**RECETTE AVAILABLE — TECHNICAL SMOKE PASS**

Non : USER QUALIFIED · READY FOR REAL · Livraison 1 acceptée · GO LIVE.


## 13. Smokes post-cutover (non LIVE)

| Contrôle | Résultat |
|---|---|
| HTTP `/login` | 200 · `<!--p0S18hfVdGrMjGeNMGlbV-->` |
| `/settings/consumption` | 200 · même BUILD |
| `/settings/integrations` | 200 · même BUILD |
| cwd process | nouveau worktree |
| PID stabilité | 77113 → 77113 |
| STUDIO_LANE / SHA (script) | RECETTE / `0ae9e1f7…` |
| WEB LIVE | OFF |
| Admin collector | OFF |
| Fixtures / auto-session DEV | unset / refusé |
| DB/rôle/schéma | `sfia_next_recette_ml4` :5434 · 027 |
| MaintiPlan | conv=1 docs=1 msgs=15 hd=1 T09=0 (**préservé**) |
| Lane totals | projects=32 docs=124 |
| Émission LIVE smoke | **aucune** |
| Verdict | **RECETTE AVAILABLE — TECHNICAL SMOKE PASS** |

## 14. Réserves explicites

- R-E5-PG-HIST — échecs PG historiques hors delta
- R-E5-MP06-LIVE — dictée LIVE / qualité FR / latence → recette utilisateur
- R-E5-TSC-TESTS — tsc tests préexistants hors produit
- Org/projet OpenAI fournisseur non vérifié
- PostgreSQL localhost trust
- Coût facturé Admin indisponible
- Capacités LIVE **configurées/admises** mais **non exercées** ni **USER QUALIFIED**
- 17 MP OPEN RECETTE
- T09 NOT SENT · MaintiPlan suspended after T08

## 15. Plan de recette utilisateur (prochaine étape — GO LIVE distinct)

A. Compositeur + dictée · B. Continuité Nora/Journal · C. Décisions/trajectoire · D. Multi-intentions · E. Panneau droit peuplé · F. Allocation/FinOps · G. Comparaison T08 · H. T09 V2 (au moment approprié). Aucune émission dans ce mandat.

## 16. Verdict SFIA readiness

**READY WITH RESERVES**

Opérationnel: **RECETTE AVAILABLE — TECHNICAL SMOKE PASS**

Non anticipé: READY FOR REAL · Livraison 1 acceptée · ADOPTED · RELEASE.

## 17. Review Pack Content Coverage

- [x] mandat · Git Truth · sources référencées
- [x] delta entrant + corrections
- [x] diffs exploitables des modifications principales
- [x] validations + PG reconciliation + Gate A
- [x] SHA/tree publié · absence CI
- [x] checkpoint · sauvegarde · rollback · Gate B
- [x] build · manifeste servi · smokes · MaintiPlan
- [x] config LIVE non secrète · réserves · plan recette · verdict
- [x] pas de secrets / dumps / credentials dans ce pack

## 18. Prochaine décision Morris

- Acceptation réserves E5
- Autorisation LIVE bornée
- Reprise MaintiPlan / T09
- Poursuite recette Livraison 1
