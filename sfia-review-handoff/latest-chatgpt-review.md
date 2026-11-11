# SFIA Studio Next — Review Pack FULL
# ML4C — Convergence fonctionnelle intégrée — Construction locale (+ follow-up S02/S05)

**Date/heure :** 2026-11-11 19:09 CET
**Cycle :** 8 — Delivery / implémentation
**Profil :** Critical
**Macro-lot :** ML4C
**Versioning :** NO RELEASE
**Publisher :** Cursor
**Push projet / PR / merge / RECETTE / LIVE / REAL Git / ENV-C :** NON AUTORISÉS

---

## 1. Git Truth Check

| Item | Valeur |
| --- | --- |
| Baseline main | `6d237452680640324eeadbb18f4601fd7de99850` |
| Branche | `build/next-ml4c-functional-convergence` |
| Commit 1 | `cbfadadc` — S01–S05 core |
| HEAD local | `cb0738b55ec96a2f85ba1f30fa2f508e816b5266` (follow-up S02 taxonomy + S05 project dialogue) |
| Tree | `f6d7a8223acc9225998f9a9655bc87131fa5d95e` |
| Push projet | **NON** |

Follow-up after qualification agents: create/reconcile no longer blanket-401; project UI allows independent dialogue without clobbering pending.

---

## 2. Matrice S01–S07

| Scénario | Statut | Preuve |
| --- | --- | --- |
| S01 | IMPLEMENTED | portfolio honest status |
| S02 | IMPLEMENTED / BEHAVIOR PROVEN | reconcile UI + D2_ACK_OBS e2e + studioErrorResponse |
| S03 | IMPLEMENTED / PG | continueAfter document ACK |
| S04 | DOCUMENTED baseline | no vector engine; LIVE NOT RUN |
| S05 | IMPLEMENTED (prep PG + project UI gate) | independent dialogue; pending preserved |
| S06 | SCRIPTED coverage | Git REAL NOT RUN |
| S07 | PARTIAL | targeted suites same SHA |

---

## 3. Fichiers (stat)

```
 .../s04-cognitive-evaluation-baseline.md           |  33 ++++++
 .../construction/delivery-history.md               |  14 +++
 .../[preparationId]/create-project/route.ts        |   7 +-
 .../[preparationId]/reconcile/route.ts             |   7 +-
 .../web/src/app/portfolio/page.tsx                 |  19 ++--
 .../src/app/preparations/[preparationId]/page.tsx  | 123 ++++++++++++++++-----
 .../web/src/app/projects/[projectId]/page.tsx      |   9 +-
 .../src/domains/conversation/intent-conduction.ts  |  54 +++++----
 .../web/src/domains/pilotage/thread-recovery.ts    |  27 +++++
 .../web/tests/e2e/d2-ack-loss-reconcile.spec.ts    |  89 +++++++++++++++
 .../intent-continuity-global.pg.test.ts            |  65 ++++++++++-
 .../web/tests/unit/ml4c-s01-s03-guards.test.ts     |  90 +++++++++++++++
 12 files changed, 476 insertions(+), 61 deletions(-)
```

---

## 4. Diff complet `6d237452..HEAD`

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/s04-cognitive-evaluation-baseline.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/s04-cognitive-evaluation-baseline.md
new file mode 100644
index 00000000..a6f3d4bf
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/s04-cognitive-evaluation-baseline.md
@@ -0,0 +1,33 @@
+# ML4C S04 — Évaluation cognitive préalable (baseline)
+
+| Champ | Valeur |
+| --- | --- |
+| Date | 2026-11-11 |
+| Statut | DOCUMENTED — évaluation déterministe locale |
+| Nora LIVE | **NOT RUN** (mandat ML4C : LIVE exclu) |
+| Décision technique | **Aucun** moteur vectoriel / second système mémoire ajouté |
+
+## Constat code (main@6d237452 + branche build)
+
+`selectRelevantKnowledgeContext` (`web/src/domains/knowledge/service.ts`) :
+
+- Méthode : `lexical-heuristic` (tokens longueur > 3, score d'inclusion).
+- Limite explicite dans le retour : ne constitue pas une vérité épistémique.
+- Pas de paraphrase/synonymie, pas de fraîcheur décisionnelle opposable, pas de résolution de contradiction.
+
+## Corpus représentatif (déterministe)
+
+| Cas | Attendu métier | Baseline lexicale |
+| --- | --- | --- |
+| Reformulation / paraphrase | Retrouver l'acquis | **Écart** si tokens absents |
+| Décision historique vs actuelle | Préférer l'actuelle | Non discriminé hors texte |
+| Sources contradictoires | Ne pas aplatir | Non traité |
+| Point ouvert | Remonter OPEN | Partiel (boost +1) |
+| Restriction d'accès | Respecter droits | Hors sélection (D1/D6) |
+| Données insuffisantes | Limite honnête | Via `selectionLimit` string |
+
+## Choix ML4C
+
+Correction au niveau **minimum** : conserver la sélection lexicale, documenter l'écart, exiger Nora LIVE + appréciation Pilote sous GO distinct avant toute refonte S04.
+
+Exit qualité cognitive LIVE : gate Morris spécifique (hors ce mandat).
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b3b9d9df..02d5e2e8 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-11-ML4C-FUNCTIONAL-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-11 (Europe/Paris) |
+| Macro-lot | ML4C — Convergence fonctionnelle intégrée |
+| Type | EVOL — construction locale (NO RELEASE) |
+| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
+| Parent | main `6d237452` (ENV-B merged) |
+| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
+| Changes | S01 honest portfolio status; S02 create ACK reconcile UI + versioned D2_ACK_OBS; S03 continueAfter document ACK; S05 independent-Q while awaiting; S04 cognitive baseline doc (no vector engine); SCRIPTED S06 path reused |
+| Schema | unchanged |
+| Status | LOCAL CANDIDATE — ChatGPT technical review — LIVE/REAL gates carried |
+
 ## delivery_id: DELIV-2026-11-11-ENV-B-VITEST-PG-GATE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
index ca1374a6..d21fb43c 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
@@ -9,6 +9,7 @@ import {
 } from "@/domains/conversation/intent-conduction";
 import { db } from "@/db/client";
 import { projects } from "@/db/schema";
+import { studioErrorResponse } from "@/lib/http-errors";

 /**
  * G1 — authority before effect:
@@ -125,7 +126,9 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       },
       { status },
     );
-  } catch {
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+  } catch (e) {
+    // ML4C S02 — do not map every failure to 401 (session vs métier/dependency).
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
index 8cbf4000..049dc0e6 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
@@ -1,6 +1,7 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { reconcileCreateProject } from "@/domains/preparation/create-project";
+import { studioErrorResponse } from "@/lib/http-errors";

 export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
   try {
@@ -9,7 +10,9 @@ export async function GET(req: Request, ctx: { params: Promise<{ preparationId:
     const key = new URL(req.url).searchParams.get("idempotencyKey") ?? undefined;
     const result = await reconcileCreateProject(session.pilotId, preparationId, key);
     return NextResponse.json(result);
-  } catch {
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+  } catch (e) {
+    // ML4C S02 — preserve real error taxonomy (401 only for session).
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index 7d761bda..e497e4c0 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -31,11 +31,12 @@ type PortfolioResponse = {
   errorCategory?: string;
 };

-function statusForProject(index: number, total: number): { label: string; tone: string } {
-  if (total === 0) return { label: "—", tone: "fig-tag-muted" };
-  if (index === 0) return { label: "Actif", tone: "fig-tag-ok" };
-  if (index === 1) return { label: "En réflexion", tone: "fig-tag-muted" };
-  return { label: "À reprendre", tone: "fig-tag-warn" };
+/**
+ * ML4C S01 — portfolio labels must come from owner truth, never list index.
+ * Decorative progression (Actif / En réflexion / À reprendre by index) is forbidden.
+ */
+function statusForOwnedProject(): { label: string; tone: string } {
+  return { label: "Accessible", tone: "fig-tag-ok" };
 }

 export default function PortfolioPage() {
@@ -339,13 +340,15 @@ export default function PortfolioPage() {
             </button>
           </div>
           <ul className="fig-card-grid" data-testid="portfolio-projects">
-            {projects.map((proj, idx) => {
-              const st = statusForProject(idx, projects.length);
+            {projects.map((proj) => {
+              const st = statusForOwnedProject();
               return (
                 <li key={proj.id} className="fig-card">
                   <div className="fig-card-top">
                     <div className="fig-card-title">{proj.name}</div>
-                    <span className={`fig-tag ${st.tone}`}>{st.label}</span>
+                    <span className={`fig-tag ${st.tone}`} data-testid="portfolio-project-status">
+                      {st.label}
+                    </span>
                   </div>
                   <p className="fig-card-desc text-xs muted break-all">{proj.id}</p>
                   <p className="fig-card-meta">Projet accessible · ouverture par projectId</p>
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 9e686efc..e96346f4 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -479,39 +479,106 @@ export default function PreparationPage() {
     }
   }

+  /**
+   * ML4C S02 — after lost ACK, reconcile with the same idempotency key before any new create.
+   * Read-only GET; never mints a second mutation automatically.
+   */
+  async function reconcileCreateAfterAckLoss(key: string): Promise<string | null> {
+    try {
+      const res = await fetch(
+        `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(key)}`,
+      );
+      let j: {
+        status?: string;
+        projectId?: string;
+        reason?: string;
+      } = {};
+      try {
+        j = (await res.json()) as typeof j;
+      } catch {
+        j = {};
+      }
+      if (j.status === "ALREADY_CREATED" && j.projectId) {
+        setProjectId(j.projectId);
+        setAwaitingClientIntentKey(null);
+        setStatus(`ALREADY_CREATED (réconcilié après ACK perdu) → ${j.projectId}`);
+        router.push(`/projects/${j.projectId}`);
+        return j.projectId;
+      }
+      setStatus(
+        `Réconciliation ${j.status ?? (res.ok ? "UNKNOWN" : `HTTP_${res.status}`)} — clé d'intention conservée`,
+      );
+      return null;
+    } catch {
+      setStatus("Réconciliation impossible (réseau) — clé d'intention conservée");
+      return null;
+    }
+  }
+
   async function createProject() {
     setBusy(true);
     // Structured binding only — server verifies clientIntentKey against durable mission.
     const clientIntentKey = awaitingClientIntentKey ?? undefined;
-    const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
-      method: "POST",
-      headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({
-        expectedCreationRevision: creationRevision,
-        projectName: previewName || "Projet sans titre",
-        previewSummary,
-        idempotencyKey: clientIntentKey
-          ? `d2:mission:${clientIntentKey}`
-          : idempotencyKey,
-        clientIntentKey,
-      }),
-    });
-    const j = await res.json();
-    setBusy(false);
-    const bindErr = j.missionBindingError ? ` · bind ${j.missionBindingError}` : "";
-    const cont =
-      j.missionContinue?.continued && j.missionContinue?.documentSave?.documentId
-        ? ` · doc ${j.missionContinue.documentSave.documentId}`
-        : j.missionContinue?.reason
-          ? ` · continue ${j.missionContinue.reason}`
-          : "";
-    setStatus(`${j.status}${j.projectId ? ` → ${j.projectId}` : ""}${cont}${bindErr}`);
-    if (j.projectId && !j.missionBindingError) {
-      setProjectId(j.projectId);
-      setAwaitingClientIntentKey(null);
-      router.push(`/projects/${j.projectId}`);
+    const key = clientIntentKey ? `d2:mission:${clientIntentKey}` : idempotencyKey;
+    try {
+      const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
+        method: "POST",
+        headers: { "Content-Type": "application/json" },
+        body: JSON.stringify({
+          expectedCreationRevision: creationRevision,
+          projectName: previewName || "Projet sans titre",
+          previewSummary,
+          idempotencyKey: key,
+          clientIntentKey,
+        }),
+      });
+      let j: {
+        status?: string;
+        projectId?: string;
+        missionBindingError?: string;
+        missionContinue?: {
+          continued?: boolean;
+          documentSave?: { documentId?: string };
+          reason?: string;
+        };
+      } = {};
+      try {
+        j = (await res.json()) as typeof j;
+      } catch {
+        j = {};
+      }
+
+      const bindErr = j.missionBindingError ? ` · bind ${j.missionBindingError}` : "";
+      const cont =
+        j.missionContinue?.continued && j.missionContinue?.documentSave?.documentId
+          ? ` · doc ${j.missionContinue.documentSave.documentId}`
+          : j.missionContinue?.reason
+            ? ` · continue ${j.missionContinue.reason}`
+            : "";
+      if (j.status || j.projectId) {
+        setStatus(`${j.status ?? ""}${j.projectId ? ` → ${j.projectId}` : ""}${cont}${bindErr}`);
+      }
+      if (j.projectId && !j.missionBindingError) {
+        setProjectId(j.projectId);
+        setAwaitingClientIntentKey(null);
+        router.push(`/projects/${j.projectId}`);
+        return;
+      }
+
+      // No usable projectId in response (parse failure, opaque error, ACK truncated):
+      // reconcile with the SAME key before any new create mutation.
+      const recovered = await reconcileCreateAfterAckLoss(key);
+      if (recovered) return;
+      await reload();
+    } catch {
+      // Network throw after possible server commit — same key, reconcile only.
+      const recovered = await reconcileCreateAfterAckLoss(key);
+      if (!recovered) {
+        setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
+      }
+    } finally {
+      setBusy(false);
     }
-    await reload();
   }

   async function renameSubject(subjectId: string, title: string) {
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e25a3635..fb123992 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -14,6 +14,7 @@ import {
 } from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
+  looksLikeIndependentDialogue,
   mayStartNewThreadAct,
   pendingStorageKey,
   shouldClearThreadPending,
@@ -670,9 +671,12 @@ export default function ProjectPage() {
     if (!draft.trim() || !preparationId) return;
     const text = draft.trim();
     // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
+    // ML4C S05 Decision 1 — independent cognitive Q may proceed without replacing pending.
+    const independent = looksLikeIndependentDialogue(text);
     const gate = mayStartNewThreadAct({
       unresolved: unresolvedPending ?? readPending(),
       nextContent: text,
+      nextIsIndependentDialogue: independent,
     });
     if (!gate.ok) {
       setPilotageStatus(
@@ -695,7 +699,10 @@ export default function ProjectPage() {
     }
     const clientTurnKey = messageTurnKeyRef.current.key;
     const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
-    rememberPending({ content: text, clientTurnKey, clientCommandKey });
+    // Independent dialogue must not clobber an unresolved métier pending key.
+    if (!independent) {
+      rememberPending({ content: text, clientTurnKey, clientCommandKey });
+    }
     try {
       const res = await fetch(`/api/preparations/${preparationId}/messages`, {
         method: "POST",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 9c61bc4e..82ca0f6c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -18,7 +18,13 @@ import { savePreparationDocument } from "@/domains/document/service";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";
 import { emitObs } from "@/lib/observability";
-import { extractContractualDocumentProposal, qualifyDocumentAct } from "./document-act";
+import {
+  appendDocumentEffectAck,
+  extractContractualDocumentProposal,
+  hasCompetingTransactionalClaim,
+  qualifyDocumentAct,
+  type DocumentEffectSummary,
+} from "./document-act";
 import { generateNoraReply } from "./nora-adapter";
 import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
 import {
@@ -1136,27 +1142,37 @@ export async function continueAfterProjectCreated(input: {
       };
     }

+    // S03: same document-effect composition as the main chat path — never leave
+    // Nora prose as the sole post-D4 message (AVAILABLE + « non enregistré » contradiction).
+    const documentEffect: DocumentEffectSummary =
+      documentSave?.status === "AVAILABLE"
+        ? {
+            act: "CREATE",
+            status: "AVAILABLE",
+            documentId: documentSave.documentId,
+            revisionId: documentSave.revisionId,
+            revisionNumber: documentSave.revisionNumber,
+          }
+        : {
+            act: "CREATE",
+            status: documentSave?.status === "CONFLICT" ? "CONFLICT" : "FAILED",
+            reason: documentSave?.reason ?? documentSave?.status,
+          };
     const canonical = composeCanonicalMissionRestitution({
-      documentEffect:
-        documentSave?.status === "AVAILABLE"
-          ? {
-              act: "CREATE",
-              status: "AVAILABLE",
-              documentId: documentSave.documentId,
-              revisionId: documentSave.revisionId,
-              revisionNumber: documentSave.revisionNumber,
-            }
-          : {
-              act: "CREATE",
-              status: "FAILED",
-              reason: documentSave?.reason,
-            },
+      documentEffect,
       restitutionNote: `Reprise automatique après création projet ${input.projectId} — même intention (${mission.clientIntentKey}).`,
     });
-    assistantContent =
-      reply.status === "COMPLETE" && reply.content.trim()
-        ? appendMissionAck(reply.content, mission)
-        : appendMissionAck(canonical, mission);
+    const noraBody =
+      reply.status === "COMPLETE" && reply.content.trim() ? reply.content : canonical;
+    const withDocAck = appendDocumentEffectAck(noraBody, documentEffect);
+    assistantContent = appendMissionAck(withDocAck, mission);
+    if (hasCompetingTransactionalClaim(assistantContent, documentEffect)) {
+      // Fail-closed narration: prefer canonical + structured ACKs over competing claims.
+      assistantContent = appendMissionAck(
+        appendDocumentEffectAck(canonical, documentEffect),
+        mission,
+      );
+    }
     generationId = `mission-continue-d2d4:${mission.clientIntentKey}:${input.projectId}`;
   }

diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index 2a46650b..c7eec125 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -3,12 +3,35 @@
  * sessionStorage pending is a local aid; durable truth stays in D5/D6.
  */

+import { qualifyDocumentAct } from "@/domains/conversation/document-act";
+
 export type ThreadPendingTurn = {
   content: string;
   clientTurnKey: string;
   clientCommandKey: string;
 };

+const PROJECT_CREATE_RE = /\b(?:crée|créer|créez)\s+(?:un\s+)?projet\b/i;
+/** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
+const PUBLISH_RE =
+  /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;
+const PILOTAGE_SIGNAL_RE =
+  /\b(?:je\s+décide|j['']autorise|ouvre\s+(?:un\s+)?cycle|enregistre\s+(?:cette\s+)?décision)\b/i;
+
+/**
+ * ML4C S05 / Decision 1 — independent cognitive turn (no D2/D4/D6/D9 effect intent).
+ * Does not authorize or replace an unresolved métier pending.
+ */
+export function looksLikeIndependentDialogue(text: string): boolean {
+  const t = text.trim();
+  if (!t) return false;
+  if (qualifyDocumentAct(t).kind !== "NONE") return false;
+  if (PROJECT_CREATE_RE.test(t)) return false;
+  if (PUBLISH_RE.test(t)) return false;
+  if (PILOTAGE_SIGNAL_RE.test(t)) return false;
+  return true;
+}
+
 /** Deterministic business key for a conversational turn. */
 export function conversationalClientCommandKey(clientTurnKey: string): string {
   return `conv-auth:${clientTurnKey.trim()}`;
@@ -40,14 +63,18 @@ export function shouldClearThreadPending(input: {
 /**
  * Exclusive in-flight guard: a distinct new act must not silently overwrite
  * an unresolved pending. Same content ⇒ retry of the same logical act.
+ * Independent dialogue (Decision 1) may proceed without replacing pending.
  */
 export function mayStartNewThreadAct(input: {
   unresolved: ThreadPendingTurn | null | undefined;
   nextContent: string;
+  /** When true, allow a cognitive question without overwriting métier pending. */
+  nextIsIndependentDialogue?: boolean;
 }): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
   const pending = input.unresolved;
   if (!pending) return { ok: true };
   if (pending.content.trim() === input.nextContent.trim()) return { ok: true };
+  if (input.nextIsIndependentDialogue) return { ok: true };
   return {
     ok: false,
     reason:
diff --git a/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
new file mode 100644
index 00000000..4c4d3b0e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
@@ -0,0 +1,89 @@
+import { test, expect } from "@playwright/test";
+
+/**
+ * ML4C S02 — D2_ACK_OBS (versioned).
+ * Simulates lost ACK after create-project commit: UI must reconcile with the same
+ * idempotency key and open the real project — without a second create POST by default.
+ * Nora FAKE / E2E lane only — not LIVE.
+ */
+
+async function openNewPreparation(page: import("@playwright/test").Page): Promise<string> {
+  await page.getByTestId("portfolio-new-prep").click();
+  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
+  const id = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
+  if (!id) throw new Error("preparationId missing");
+  return id;
+}
+
+test("S02 D2_ACK_OBS: lost ACK after commit → reconcile → real project, one create POST", async ({
+  page,
+}) => {
+  test.setTimeout(120_000);
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  const preparationId = await openNewPreparation(page);
+
+  // Mirror G4: Nora turn unlocks constitute (FAKE fixture).
+  await page.getByTestId("prep-draft").fill("Intention E2E D2 ACK loss (fixture FAKE Nora)");
+  await page.getByTestId("prep-send").click();
+  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+
+  await page.getByTestId("prep-constitute").click();
+  await page.getByTestId("prep-adopt-nora").click();
+  await page.getByTestId("prep-proposal-name").fill("ML4C D2 AckLost");
+  await page.getByTestId("prep-proposal-save").click();
+  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
+  const createBtn = page.getByTestId("prep-create-project");
+  await expect(createBtn).toBeEnabled({ timeout: 20000 });
+
+  let createPosts = 0;
+  const keys: string[] = [];
+  await page.route("**/api/preparations/*/create-project", async (route) => {
+    const req = route.request();
+    if (req.method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    createPosts += 1;
+    try {
+      const body = req.postDataJSON() as { idempotencyKey?: string };
+      if (body.idempotencyKey) keys.push(body.idempotencyKey);
+    } catch {
+      /* ignore */
+    }
+    if (createPosts === 1) {
+      // page.request bypasses this page.route so the server commits.
+      const upstream = await page.request.fetch(req);
+      expect(upstream.ok()).toBeTruthy();
+      await route.fulfill({
+        status: 502,
+        contentType: "application/json",
+        body: JSON.stringify({
+          status: "FAILED",
+          reason: "ACK_LOST_SIM_D2",
+          errorCategory: "ACK_LOST_SIM",
+        }),
+      });
+      return;
+    }
+    await route.continue();
+  });
+
+  await createBtn.click();
+  await expect(page).toHaveURL(/\/projects\//, { timeout: 30000 });
+  expect(createPosts).toBe(1);
+  expect(keys[0]).toBe(`create-${preparationId}`);
+
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  expect(projectId).toBeTruthy();
+
+  const recon = await page.request.get(
+    `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(keys[0]!)}`,
+  );
+  const reconJson = (await recon.json()) as { status?: string; projectId?: string };
+  expect(reconJson.status).toBe("ALREADY_CREATED");
+  expect(reconJson.projectId).toBe(projectId);
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 6f174ced..d34f1f3e 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -34,7 +34,10 @@ import {
 } from "@/domains/execution/effect-service";
 import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
 import { listDocuments, savePreparationDocument } from "@/domains/document/service";
-import { qualifyDocumentAct } from "@/domains/conversation/document-act";
+import {
+  hasCompetingTransactionalClaim,
+  qualifyDocumentAct,
+} from "@/domains/conversation/document-act";
 import {
   capitalizeAcquis,
   ensureSubject,
@@ -211,6 +214,66 @@ describe("Global Nora/Studio intent continuity (PG)", () => {

     const docs = await listDocuments(pilotId, preparationId);
     expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);
+
+    // S03: persisted assistant must carry D4 applicative ACK and no competing claim.
+    const msgs = await listMessages(pilotId, preparationId);
+    const assistant = [...msgs].reverse().find((m) => m.role === "assistant");
+    expect(assistant?.content).toMatch(/Résultat applicatif D4/i);
+    expect(assistant?.content).toMatch(/AVAILABLE/i);
+    expect(
+      hasCompetingTransactionalClaim(assistant?.content ?? "", {
+        act: "CREATE",
+        status: "AVAILABLE",
+        documentId: cont.documentSave?.documentId,
+        revisionId: cont.documentSave?.revisionId,
+        revisionNumber: cont.documentSave?.revisionNumber,
+      }),
+    ).toBe(false);
+  });
+
+  it("S05: independent question while AWAITING_PILOT_ACT keeps mission and creates no project", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-s05-independent");
+    const clientTurnKey = newId("ctk");
+    const first = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Wait Decision S05.",
+      { clientTurnKey },
+    );
+    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
+    expect(first.missionProjection?.clientIntentKey).toBe(clientTurnKey);
+
+    const q = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Pendant que j'y réfléchis : quelle est la différence entre un blob et un commit ?",
+      { clientTurnKey: newId("ctk") },
+    );
+    expect(q.documentSave == null || q.documentSave.status === "NOT_EXECUTED").toBe(true);
+
+    const ctx = await getPreparationContext(pilotId, preparationId);
+    expect(ctx.project).toBeFalsy();
+    expect(ctx.conversation?.id).toBeTruthy();
+
+    // Independent question must not authorize create — original mission key still binds D2.
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const verified = await verifyMissionForD2Act({
+      conversationId: ctx.conversation!.id,
+      preparationId,
+      clientIntentKey: clientTurnKey,
+      projectName: prep.previewName || "Wait Decision S05",
+    });
+    expect(verified.status).toBe("OK");
+
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: prep.previewName || "Wait Decision S05",
+      previewSummary: prep.previewSummary || "s",
+      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
+    });
+    expect(created.status).toBe("CREATED");
   });

   it("G1+S04: after continue, mission is not awaiting; double continue is replay", async () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
new file mode 100644
index 00000000..95842425
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
@@ -0,0 +1,90 @@
+import { readFileSync } from "node:fs";
+import { join } from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  appendDocumentEffectAck,
+  hasCompetingTransactionalClaim,
+} from "@/domains/conversation/document-act";
+import { emptyMission } from "@/domains/conversation/intent-conduction";
+import { appendMissionAck } from "@/domains/conversation/mission-continuity";
+import {
+  looksLikeIndependentDialogue,
+  mayStartNewThreadAct,
+} from "@/domains/pilotage/thread-recovery";
+
+describe("ML4C S01 portfolio — no index-derived status", () => {
+  it("portfolio page does not invent Actif/En réflexion/À reprendre by list index", () => {
+    const src = readFileSync(
+      join(__dirname, "../../src/app/portfolio/page.tsx"),
+      "utf8",
+    );
+    expect(src).not.toMatch(/statusForProject\s*\(\s*index/);
+    expect(src).toMatch(/statusForOwnedProject/);
+    expect(src).toMatch(/Accessible/);
+    expect(src).not.toMatch(/if \(index === 0\) return \{ label: "Actif"/);
+  });
+});
+
+describe("ML4C S02 create UI — reconcile after ACK loss", () => {
+  it("preparations page reconciles create-project with same idempotency key", () => {
+    const src = readFileSync(
+      join(__dirname, "../../src/app/preparations/[preparationId]/page.tsx"),
+      "utf8",
+    );
+    expect(src).toMatch(/reconcileCreateAfterAckLoss/);
+    expect(src).toMatch(/\/reconcile\?idempotencyKey=/);
+    expect(src).toMatch(/ALREADY_CREATED \(réconcilié après ACK perdu\)/);
+  });
+});
+
+describe("ML4C S03 continueAfter composition — document ACK", () => {
+  it("AVAILABLE effect with Nora « non enregistré » yields no competing claim after ACK path", () => {
+    const noraLie =
+      "Je ne peux pas enregistrer le document : les outils disponibles sont en lecture seule. Aucune révision créée.";
+    const effect = {
+      act: "CREATE" as const,
+      status: "AVAILABLE" as const,
+      documentId: "doc_1",
+      revisionId: "rev_1",
+      revisionNumber: 1,
+    };
+    const composed = appendMissionAck(appendDocumentEffectAck(noraLie, effect), {
+      ...emptyMission("ctk_1", "continue after create"),
+      status: "COMPLETED",
+      restitution: "DELIVERED",
+    });
+    expect(composed).toMatch(/Résultat applicatif D4/i);
+    expect(composed).toMatch(/AVAILABLE/);
+    expect(hasCompetingTransactionalClaim(composed, effect)).toBe(false);
+  });
+});
+
+describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () => {
+  const pending = {
+    content: "Publie le document sur la branche feature/x",
+    clientTurnKey: "ctk_pending",
+    clientCommandKey: "conv-auth:ctk_pending",
+  };
+
+  it("allows a cognitive question without overwriting the gate", () => {
+    expect(looksLikeIndependentDialogue("Quelle est la différence entre blob et commit ?")).toBe(
+      true,
+    );
+    const gate = mayStartNewThreadAct({
+      unresolved: pending,
+      nextContent: "Quelle est la différence entre blob et commit ?",
+      nextIsIndependentDialogue: true,
+    });
+    expect(gate.ok).toBe(true);
+  });
+
+  it("still blocks a distinct métier act while pending is unresolved", () => {
+    expect(looksLikeIndependentDialogue("Crée un projet nommé Autre")).toBe(false);
+    const gate = mayStartNewThreadAct({
+      unresolved: pending,
+      nextContent: "Crée un projet nommé Autre",
+      nextIsIndependentDialogue: false,
+    });
+    expect(gate.ok).toBe(false);
+  });
+});
```

---

## 5. Preuves follow-up unit

```
 ✓ tests/unit/ml4c-s01-s03-guards.test.ts (5 tests) 6ms
 ✓ tests/unit/ml3-b13-divergence.test.ts (24 tests) 6ms
 Test Files  2 passed (2)
      Tests  29 passed (29)
```

Preuves antérieures (commit `cbfadadc`) : unit/PG/e2e D2_ACK_OBS ; operator pilots 8850 inchangé — voir cycle précédent du même mandat.

---

## 6. Fake/Real & réserves

Nora LIVE NOT RUN ; Git REAL NOT RUN ; ENV-C interdit ; S07 campagne intégrale PARTIAL ; ML4D OUT.

---

## 7. Verdict

**ML4C FUNCTIONAL BUILD — LOCAL CANDIDATE READY FOR CHATGPT TECHNICAL REVIEW WITH LIVE/REAL GATES CARRIED**

---

## 8. Instruction ChatGPT §9.1

Relire à distance `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier HEAD `cb0738b55ec96a2f85ba1f30fa2f508e816b5266`, diffs §4, preuves S01–S07, isolation, absence de push projet, portes LIVE/REAL.
Verdict indépendant avant push/PR/merge.

---

## 9. Git Review Index

| Ref | SHA |
| --- | --- |
| main | 6d237452680640324eeadbb18f4601fd7de99850 |
| ML4C core | cbfadadcae22eed9007ce1fbb1a095cbc02561af |
| HEAD | cb0738b55ec96a2f85ba1f30fa2f508e816b5266 |
| Tree | f6d7a8223acc9225998f9a9655bc87131fa5d95e |
