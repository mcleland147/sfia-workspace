# SFIA Studio Next — Review Pack FULL
## ML5 R5 — Nora × Studio capability interactions (integrated corrective)

**Verdict cible :** NORA STUDIO CAPABILITY INTERACTIONS — INTEGRATED CORRECTIVE DELIVERY VERIFIED — READY FOR CHATGPT REVIEW.

**Statut cycle :** ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED · STABLE NOT AVAILABLE.

**Instruction ChatGPT :** Relire ce handoff distant. Vérifier les simplifications effectives, les mécanismes retirés, les contrats, les diffs et la réalité des preuves. Ne pas confondre compréhension / production / exécution / persistance / restitution / acceptation utilisateur. Préparer la bascule RECETTE uniquement après revue favorable et GO Morris distinct.

---

## 1. Git Truth Check

| Item | Valeur |
|---|---|
| Workspace DEV | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Remote | `mcleland147/sfia-workspace` (origin) |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD tip delivery |  |
| HEAD base | `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` |
| Tree base | `9645644ad518040b734cfd5435b84d8c96cdba6f` |
| Web tree base | `99dd2c6b3db728434a452d4f93775e0e2a6e1e0a` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Merge-base HEAD↔origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (= origin/main) |
| local `main` (worktree sfia-workspace) | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Staged | aucun au démarrage ; dirty uncommitted product changes (this delivery) |
| RECETTE tip attendu | `ca0b114c6f7336ba0073d03f8d391fe05182bf86` |
| RECETTE BUILD_ID | `RkthxGW_bZUygxYbwP9Hq` |
| RECETTE URL / PG | `http://127.0.0.1:3200` / `:5434` — **inchangée** |
| DEV URL / PG | `http://127.0.0.1:3100` / `:5433` |
| DEV BUILD_ID | `BMd8qv-bn6m9Hj6YEtdee` |
| DEV DIGEST | `d0fa2be3b6eaed2b687817ceecfb2f0cff2888e60d854db7f6d5f1caa1a2e37d` |
| DEV PID | 4822 |

### Écart main local vs origin/main (qualification)

Le diagnostic AssetTrack signalait un « main local en avance : 4b1a0580… ».

**Réalité observée :** le worktree `/Users/morris/Projects/sfia-workspace` sur branche `main` est à `4b1a058050ae81d56cb6d96b88e8a57380799a86` et est **en retard** de ~1485 commits sur `origin/main` (`997897fd7cf914771e7d08e8030dc7123fab7d25`). `main` est ancêtre de `origin/main` ; `git log origin/main..main` est vide. Il s’agit d’un checkout **périmé / non mis à jour**, pas d’une avance locale de commits produits. **Aucun reset, rebase ni merge de main** n’a été effectué. Les commits locaux non liés à ce delivery n’ont pas été supprimés. La branche produit DEV n’est pas contaminée.

### Status courant (avant commit delivery)

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
 M projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-candidate.ts
 M projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
 M projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts
?? projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
?? projects/sfia-studio-next/construction/as-built-ml5-nora-studio-capability-interactions-20261125.md
?? projects/sfia-studio-next/web/scripts/ml5-capability-interactions-short-live.mjs
?? projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-documentary-prepare.test.ts
```

### Diffstat produit

```
.../construction/delivery-history.md               |  19 ++
 ...5-registre-couverture-et-revue-developpement.md |   1 +
 .../src/app/preparations/[preparationId]/page.tsx  |   4 +-
 .../web/src/components/figma/NoraLiveActivity.tsx  | 194 ++++++++++++---------
 .../components/figma/SasCreateProgressPopup.tsx    |  89 +++++++---
 .../web/src/components/figma/tokens.css            |  76 ++++++++
 .../src/domains/conversation/activity-labels.ts    | 148 +++++++++++++++-
 .../web/src/domains/conversation/document-act.ts   |  27 ++-
 .../src/domains/conversation/document-candidate.ts |   2 +-
 .../web/src/domains/conversation/git-read-tools.ts |  28 +++
 .../web/src/domains/conversation/nora-adapter.ts   |  12 +-
 .../domains/conversation/semantic-qualification.ts | 103 +++++++++--
 .../web/src/domains/conversation/service.ts        |  55 ++++--
 .../web/src/domains/pilotage/forecast-builder.ts   | 183 ++++++++++---------
 .../src/domains/pilotage/initial-qualification.ts  | 150 +++++++++++++++-
 .../tests/unit/ensemble07-forecast-builder.test.ts |  94 ++++++----
 .../web/tests/unit/ml4c-temp-restitution.test.ts   |  43 ++++-
 17 files changed, 954 insertions(+), 274 deletions(-)
```

---

## 2. Sources réellement consultées

- Diagnostic AssetTrack handoff `ca3d90a90e24197dabb700768b4220986d652ef3` / blob `99e8d96b…` (404 lignes) — causes établies, non re-diagnostiquées.
- PV AssetTrack blob `48288156…` — 12 anomalies ouvertes ; AT-10 retirée.
- SEF / roadmap / product-naming ; décisions R4 / DATA-01.
- Conception : conduite Nora, trajectoire CKI, preparation cognitive, contrat acceptation.
- Architecture : conducteur cognitif.
- Construction : recettes AssetTrack/RoomBooking/Pilotage360 ; allocation FinOps (périmètre distinct, non activé).
- Governance main : ENV-01 blob `14b61f0d…` ; product-versioning blob `8bc93e0f…`.
- CKC map + routing SFIA v2.6 / template cycle execution.
- Branche documentaire candidate `docs/next-ml5-uat-consolidation-20261124@7b9db420…` (référence).
- Schémas fondateurs lus si présents sous vision-cible (pas d’invention de lecture).

---

## 3. Contrat d'interaction avant / après

### Avant (rupture AssetTrack)

1. Nora qualifie PREPARE pour création/révision documentaire.
2. Studio filtre via `effectIntents` (REQUEST_EFFECT only).
3. `documentAct` → NONE → CONFLICT / silence.
4. Nora annonce un résultat documentaire sans matérialisation D4.

### Après

1. Modes distincts : EXPLORE (pas de mutation) · PREPARE (proposition/candidat) · REQUEST_EFFECT (effet sous contrôles).
2. `documentaryMaterializeIntents(PREPARE|REQUEST_EFFECT)` **limité** à `d4.create_document` / `d4.revise_document`.
3. D6/D7/D9 **non** élargis.
4. Restitution alignée sur `documentSave` / `pendingDocumentCandidate` / refus propriétaire.
5. Le Pilote n’a pas à dire « Crée le document D4 ».

Code clé (`documentaryMaterializeIntents`) :

```typescript
export function documentaryMaterializeIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter(
    (i) =>
      DOCUMENTARY_CAPS.has(i.capabilityId) &&
      (i.mode === "REQUEST_EFFECT" || i.mode === "PREPARE"),
  );
}
```

---

## 4. Simplification documentaire (Option B + A + C)

- **Une** représentation canonique du contenu soumis à D4 (corps DOCUMENT consolidé).
- D3 : compréhension / rédaction / révision cognitive / production.
- D4 : identité, versions, candidats, validation, conservation, droits, intégrité.
- Révision adaptative : A = patch ciblé multi-section (RM-03 + R04) ; B = réécriture intégrale si demandée — choix Nora, scope vérifié serveur, **aucun déclencheur lexical**.
- Fence LEGACY : lecture historique seulement.
- Titres `document-part-N` : non utilisés comme titre métier.

### Inventaire KEEP / SIMPLIFY / REMOVE

Voir `construction/as-built-ml5-nora-studio-capability-interactions-20261125.md` § inventaire.

Résumé :

| KEEP | SIMPLIFY | REMOVE |
|---|---|---|
| Conducteur D3, checkpoints, continuity, HumanDecision, CAS/fencing | Fence LEGACY lecture-only ; activité regroupée | `inferPreferredFirstCycle` lexical ; PREPARE documentaire silencieux ; `document-part-N` titres ; PRIOR_ASSISTANT comme canon concurrent |

---

## 5. Diffs des mécanismes critiques (extraits)

### semantic-qualification.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 324a8669..fab93c5f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -517,11 +517,42 @@ export function unavailableQualification(reason: string, replyDraft = ""): NoraT
   };
 }
 
+/**
+ * Protected write intents only. Never widen to PREPARE — D6/D7/D9/publication
+ * must stay REQUEST_EFFECT-gated. Documentary PREPARE is handled separately.
+ */
 export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
   if (q.status !== "QUALIFIED") return [];
   return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
 }
 
+const DOCUMENTARY_CAPS = new Set<StudioCapabilityId>([
+  "d4.create_document",
+  "d4.revise_document",
+]);
+
+/**
+ * D4 create/revise intents that Studio must materialize (write or inspectable
+ * candidate). PREPARE is included here so Nora can prepare a note/revision
+ * without the Pilote saying « Crée le document D4 » / REQUEST_EFFECT.
+ * Does NOT include D6/D7/D9 — those stay on effectIntents only.
+ */
+export function documentaryMaterializeIntents(
+  q: NoraTurnQualification,
+): QualifiedIntentItem[] {
+  if (q.status !== "QUALIFIED") return [];
+  return q.intents.filter(
+    (i) =>
+      DOCUMENTARY_CAPS.has(i.capabilityId) &&
+      (i.mode === "REQUEST_EFFECT" || i.mode === "PREPARE"),
+  );
+}
+
+/** True when effectConditionStatus=OPEN → inspection before conservation. */
+export function documentaryInspectionRequired(intent: QualifiedIntentItem): boolean {
+  return intent.parameters.effectConditionStatus === "OPEN";
+}
+
 export function wantsCapability(
   q: NoraTurnQualification,
   capabilityId: StudioCapabilityId,
@@ -659,11 +690,29 @@ export type SemanticStudioProjection = {
   proposedProjectName: string | null;
   wantsFollowOnDocument: boolean;
   pendingDocumentBrief: string | null;
-  documentAct: { kind: "NONE" } | { kind: "CREATE" } | {
-    kind: "REVISE";
-    documentHint: string | null;
-    sectionHint: string | null;
-  };
+  /**
+   * Documentary act projection. `mode` mirrors the Nora intent:
+   * - REQUEST_EFFECT → owner write path when authorized
+   * - PREPARE → materialize inspectable candidate (revise) or create when
+   *   deliverable is clearly requested without OPEN inspection gate
+   * Never sourced from D6/D7/D9 PREPARE.
+   */
+  documentAct:
+    | { kind: "NONE" }
+    | {
+        kind: "CREATE";
+        mode: "PREPARE" | "REQUEST_EFFECT";
+        inspectionRequired: boolean;
+        intentId: string;
+      }
+    | {
+        kind: "REVISE";
+        mode: "PREPARE" | "REQUEST_EFFECT";
+        inspectionRequired: boolean;
+        intentId: string;
+        documentHint: string | null;
+        sectionHint: string | null;
+      };
   publication: {
     wantsPublish: boolean;
     needsExplicitPath: boolean;
@@ -690,9 +739,23 @@ export type SemanticStudioProjection = {
 
 export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
   const effects = effectIntents(q);
+  // Documentary PREPARE|REQUEST_EFFECT — materialize path (not D6/D7/D9).
+  const documentary = documentaryMaterializeIntents(q);
   const createProject = effects.find((i) => i.capabilityId === "d2.create_project");
-  const createDoc = effects.find((i) => i.capabilityId === "d4.create_document");
-  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
+  // Prefer REQUEST_EFFECT over PREPARE when both present; revise over create.
+  const reviseDoc =
+    documentary.find(
+      (i) => i.capabilityId === "d4.revise_document" && i.mode === "REQUEST_EFFECT",
+    ) ??
+    documentary.find((i) => i.capabilityId === "d4.revise_document");
+  const createDoc =
+    documentary.find(
+      (i) => i.capabilityId === "d4.create_document" && i.mode === "REQUEST_EFFECT",
… (+58 lines)
```

### forecast-builder.ts (lexical REMOVE)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts b/projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
index 2c6c8ae0..c48a594a 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
@@ -13,7 +13,7 @@ export type ForecastBuildResult =
   | { kind: "PROPOSE"; steps: ForecastStep[]; orientation: string; summary: string }
   | { kind: "CLARIFICATION"; question: string; missing: string[] };
 
-const CYCLE_LABELS: Record<CycleType, string> = {
+export const CYCLE_LABELS: Record<CycleType, string> = {
   CADRAGE: "cadrage",
   CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
   ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
@@ -31,7 +31,10 @@ const CYCLE_LABELS: Record<CycleType, string> = {
   CAPITALISATION: "capitalisation",
 };
 
-function projectionTextBundle(projection: PreparationProjection | null, previewSummary: string): string {
+export function projectionTextBundle(
+  projection: PreparationProjection | null,
+  previewSummary: string,
+): string {
   const parts: string[] = [];
   if (projection?.intention?.value?.trim()) parts.push(projection.intention.value.trim());
   if (projection?.desiredOutcome?.value?.trim()) parts.push(projection.desiredOutcome.value.trim());
@@ -43,55 +46,24 @@ function projectionTextBundle(projection: PreparationProjection | null, previewS
   return parts.join("\n");
 }
 
-function inferPreferredFirstCycle(
-  projection: PreparationProjection | null,
-  bundle: string,
-): CycleType | null {
-  const explicit = projection?.suggestion?.explanation?.trim() ?? "";
-  const haystack = `${explicit}\n${bundle}`.toLowerCase();
-  for (const type of CYCLE_TYPES) {
-    const label = CYCLE_LABELS[type];
-    const token = type.toLowerCase().replace(/_/g, " ");
-    if (haystack.includes(label) || haystack.includes(token)) {
-      return type;
-    }
-  }
-  if (/\bux\b|interface utilisateur|expérience utilisateur/i.test(haystack)) return "UX_UI";
-  if (/architecture technique|stack technique/i.test(haystack)) return "ARCHITECTURE_TECHNIQUE";
-  if (/backlog|user story|stories/i.test(haystack)) return "BACKLOG";
-  return null;
-}
-
-function followOnCycles(first: CycleType, bundle: string): CycleType[] {
-  const lower = bundle.toLowerCase();
-  const out: CycleType[] = [];
-  const push = (t: CycleType) => {
-    if (t !== first && !out.includes(t)) out.push(t);
-  };
-  if (first === "CADRAGE") {
-    push("CONCEPTION_FONCTIONNELLE");
-    if (/ux|interface|écran/i.test(lower)) push("UX_UI");
-  } else if (first === "CONCEPTION_FONCTIONNELLE") {
-    push("UX_UI");
-  } else if (first === "UX_UI") {
-    push("BACKLOG");
-  } else if (first === "ARCHITECTURE_TECHNIQUE") {
-    push("INTEGRATION_DEVOPS");
-  }
-  return out.slice(0, 2);
-}
-
-export function buildInitialForecast(input: {
+/**
+ * Sufficiency gate only — NEVER chooses a cycle type from lexical matching.
+ * Clarification is legitimate when intention / desired outcome are missing.
+ */
+export function forecastInputSufficiency(input: {
   projection: PreparationProjection | null;
   previewSummary: string;
-}): ForecastBuildResult {
+}): { ok: true; bundle: string } | { ok: false; result: ForecastBuildResult & { kind: "CLARIFICATION" } } {
   const bundle = projectionTextBundle(input.projection, input.previewSummary);
   if (!bundle.trim()) {
     return {
-      kind: "CLARIFICATION",
-      question:
-        "Pour proposer une trajectoire de cycles utile, précisez l'intention du projet et le résultat visé dans le fil de préparation.",
-      missing: ["intention", "résultat visé"],
+      ok: false,
+      result: {
+        kind: "CLARIFICATION",
+        question:
+          "Pour proposer une trajectoire de cycles utile, précise l'intention du projet et le résultat visé dans le fil de préparation.",
+        missing: ["intention", "résultat visé"],
+      },
     };
   }
   const hasIntention =
@@ -99,48 +71,73 @@ export function buildInitialForecast(input: {
     Boolean(input.projection?.desiredOutcome?.value?.trim());
   if (!hasIntention && bundle.length < 24) {
     return {
-      kind: "CLARIFICATION",
-      question:
… (+163 lines)
```

### service.ts (matérialisation + restitution)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 0975cd79..3f831738 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -95,6 +95,7 @@ import {
 } from "./document-act";
 import {
   deriveThreadTurnKind,
+  documentaryMaterializeIntents,
   effectIntents,
   extractKnowledgeProposals,
   summarizeKnowledgeProposals,
@@ -1123,22 +1124,18 @@ export async function postUserMessageAndNora(
     try {
       const { appendActivityEvent } = await import("./activity-projection");
       {
-        const intent = content.trim().replace(/\s+/g, " ").slice(0, 120);
-        const summary = intent
-          ? intent.length >= 40
-            ? `Prise en charge — ${intent}${content.trim().length > 120 ? "…" : ""}`
-            : "Prise en charge de ta demande"
-          : "Prise en charge de ta demande";
+        // AT-01 — métier objective, never echo the Pilote prompt as the activity title.
+        const summary = "Nora engage le travail demandé";
         await appendActivityEvent({
           conversationId: reserved.conversationId,
           turnCommandId: reserved.commandId,
           ownerPilotId: pilotId,
           generationId: null,
-          phase: "nora.generate",
+          phase: "nora.objective",
           nature: "ANNOUNCED",
           status: "RUNNING",
           summary,
-          detail: { objective: intent || null },
+          detail: { objective: summary, kind: "OBJECTIVE" },
           ownerToken: reserved.ownerToken,
         });
       }
@@ -1266,17 +1263,23 @@ export async function postUserMessageAndNora(
         cognitiveWorkId = turn.conductor.workId || null;
       }
       reply = turn;
-      // C20: consolidated cognitive DOCUMENT production is the canonical D4 body
-      // when present — reply documentProposal must not compete with it.
+      // C20 / ML5 Option B: consolidated cognitive DOCUMENT body is the canonical
+      // content when present. Title must stay métier — never document-part-N.
       const consolidated = turn.conductor.production;
       if (
         consolidated?.kind === "DOCUMENT" &&
         consolidated.contentMarkdown?.trim() &&
         reply.qualification
       ) {
+        const fromProposal = reply.qualification.documentProposal?.title?.trim() || "";
+        const fromPart = consolidated.parts[0]?.title?.trim() || "";
+        const partIsSynthetic = /^document-part-\d+$/i.test(fromPart);
+        const h1 =
+          /^#\s+(.+?)(?:\r?\n|$)/.exec(consolidated.contentMarkdown)?.[1]?.trim() || "";
         const title =
-          reply.qualification.documentProposal?.title?.trim() ||
-          consolidated.parts[0]?.title ||
+          (fromProposal && !/^document-part-\d+$/i.test(fromProposal) ? fromProposal : "") ||
+          h1 ||
+          (!partIsSynthetic ? fromPart : "") ||
           "Document";
         reply = {
           ...reply,
@@ -2248,7 +2251,11 @@ export async function postUserMessageAndNora(
           });
         } else {
           try {
-            const createIntents = effectIntents(qualification).filter(
+            // PREPARE|REQUEST_EFFECT create both write (Option B / AssetTrack AT-12).
+            // Natural « Prépare-moi une note » must not require the Pilote to say
+            // « Crée le document D4 ». Inspection-before-conservation remains revise-only
+            // (pendingDocumentCandidate requires an existing documentId — no migration).
+            const createIntents = documentaryMaterializeIntents(qualification).filter(
               (i) => i.capabilityId === "d4.create_document",
             );
             if (createIntents.length > 1) {
@@ -2258,7 +2265,10 @@ export async function postUserMessageAndNora(
                 act: "CREATE",
               };
             } else {
-              const createIntent = createIntents[0];
+              const createIntent =
+                (documentAct.kind === "CREATE" &&
+                  createIntents.find((i) => i.id === documentAct.intentId)) ||
+                createIntents[0];
               if (!createIntent) {
                 documentSave = {
                   status: "NOT_EXECUTED",
@@ -2760,7 +2770,9 @@ export async function postUserMessageAndNora(
                     d4Effect: null,
                   });
                 } else {
-                  const reviseIntents = effectIntents(qualification).filter(
+                  // PREPARE|REQUEST_EFFECT — pending inspect uses either;
+                  // conserve/write further down still requires explicit conserve flag.
+                  const reviseIntents = documentaryMaterializeIntents(qualification).filter(
… (+32 lines)
```

### NoraLiveActivity.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
index cddaa96a..aa532a88 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
@@ -1,9 +1,9 @@
 "use client";
 
+import { useEffect, useState } from "react";
 import {
-  buildActivitySources,
-  buildActivitySteps,
-  projectActivityLabel,
+  buildActivityGroups,
+  projectMissionHeadline,
   type ActivityLabelInput,
 } from "@/domains/conversation/activity-labels";
 
@@ -16,7 +16,8 @@ export type NoraLiveActivityEvent = ActivityLabelInput & {
 };
 
 /**
- * Figma 12.01 / 12.10 — shared LIVE activity card (sas + Travail).
+ * Figma 12.01 / 12.10 — hierarchical LIVE activity (AT-01).
+ * Level 1: mission headline · Level 2: adaptive groups · Level 3: foldable details.
  * Functional projection only — no SDK dumps, no invented percentages.
  */
 export function NoraLiveActivity(props: {
@@ -30,24 +31,28 @@ export function NoraLiveActivity(props: {
 }) {
   const events = props.events ?? [];
   const active = props.active !== false;
-  const steps = buildActivitySteps(events);
-  const sources = buildActivitySources(events);
-  // RB-01 — simple turn: hide card when idle unless a rich multi-step history remains.
+  const groups = buildActivityGroups(events);
+  const [open, setOpen] = useState<Record<string, boolean>>({});
+
+  // Preserve expand state across event refreshes (AT-01).
+  useEffect(() => {
+    setOpen((prev) => {
+      const next = { ...prev };
+      for (const g of groups) {
+        if (!(g.key in next)) next[g.key] = false;
+      }
+      return next;
+    });
+  }, [groups.map((g) => g.key).join("|")]);
+
   if (!active) {
-    const richHistory = steps.filter((s) => s.state === "done" || s.state === "failed").length >= 2;
-    if (!richHistory) return null;
+    const richHistory = groups.filter((g) => g.state === "done" || g.state === "failed").length >= 1;
+    if (!richHistory && groups.length < 2) return null;
   }
-  const lastRich =
-    [...events]
-      .reverse()
-      .find(
-        (e) =>
-          /source\./i.test(e.phase || "") ||
-          /objective|investigation/i.test(e.phase || ""),
-      ) || (events.length ? events[events.length - 1]! : null);
+
   const headline =
     props.headline ||
-    (lastRich ? projectActivityLabel(lastRich) : active ? "Activité en cours" : "Activité");
+    (events.length ? projectMissionHeadline(events) : active ? "Activité en cours" : "Activité");
   const last = events.length ? events[events.length - 1]! : null;
   const badge = !active
     ? last?.status === "FAILED" || last?.nature === "UNCERTAIN"
@@ -59,6 +64,11 @@ export function NoraLiveActivity(props: {
         ? "Partiel"
         : "En cours";
 
+  const lead =
+    groups.find((g) => g.state === "current")?.description ||
+    groups[0]?.description ||
+    (active ? "Les opérations réellement engagées sont présentées au fil du travail." : null);
+
   return (
… (+158 lines)
```

---

## 6. Guidance D5 / CKI

- `buildCognitiveForecast` (Nora) produit la structure ; D5 valide l’appartenance catalogue.
- `buildInitialForecast` : tombstone — **ne choisit plus** de cycle par regex/dictionnaire.
- Pop-up / IQ : outcome-aware — TRAJECTOIRE PRÊTE seulement si proposition réelle (PROPOSED), pas CLARIFICATION.
- Retenir trajectoire ≠ ouvrir un cycle — aucun cycle ouvert automatiquement (prouvé UI : « Aucun cycle ouvert »).

IQ LIVE EquipLoans :

```json
{
  "status": "PROPOSED",
  "forecastSteps": [
    {
      "order": 1,
      "cycleType": "CONCEPTION_FONCTIONNELLE",
      "rationale": "Préciser les parcours des gestionnaires et les règles essentielles de prêt et de retour.",
      "certainty": "QUALIFIED"
    },
    {
      "order": 2,
      "cycleType": "DELIVERY",
      "rationale": "Réaliser une V1 interne qui permet de lister le matériel, de le prêter, de suivre les prêts et d’enregistrer les retours.",
      "certainty": "ENVISIONED"
    },
    {
      "order": 3,
      "cycleType": "QA_VALIDATION",
      "rationale": "Vérifier la V1 sur le parcours complet de prêt et de retour, ainsi que sur les cas d’erreur essentiels.",
      "certainty": "ENVISIONED"
    }
  ]
}
```

---

## 7. Activité LIVE

### Contrat visuel ciblé

Voir `construction/as-built-ml5-activite-live-hierarchisee-20261125.md`.

### Producteurs observés (Git LIVE)

```json
[
  {
    "phase": "nora.objective",
    "status": "RUNNING",
    "summary": "Nora engage le travail demandé"
  },
  {
    "phase": "nora.source.git",
    "status": "RUNNING",
    "summary": "Source Git découverte — mcleland147/chantiers360"
  },
  {
    "phase": "nora.source.git",
    "status": "COMPLETED",
    "summary": "Consultation Git — api-roles.ts"
  },
  {
    "phase": "nora.source.git",
    "status": "COMPLETED",
    "summary": "Consultation Git — DAA - Chantiers360.txt"
  },
  {
    "phase": "nora.source.git",
    "status": "COMPLETED",
    "summary": "Consultation Git — README.md"
  },
  {
    "phase": "nora.generate",
    "status": "COMPLETED",
    "summary": "Réponse Nora disponible"
  }
]
```

### Captures DETERMINISTIC / BROWSER (45 ops)

| Fichier | SHA-256 |
|---|---|
| `.tmp-sfia-review/browser/activity-45-collapsed.png` | `7f8f530f668ac94d10e5d7c9c01ada37a8dcd94058e4ad2c35523cb117264be7` |
| `.tmp-sfia-review/browser/activity-45-expanded.png` | `b7d05a759939c50cb73eefa2406b538aefc3d32342c20ce8b5dfc35f24ae6d5b` |
| `.tmp-sfia-review/browser/equiploans-travail-live.png` | `70a0060e3b9880b4e9947bb720750ef1b9706ec64293cba5b8a63354ff8b4b8e` |

Collapsed prouve : objectif métier + « 45 sources, 38 consultées, 7 partielles » sans checklist plate.
Expanded prouve : détails dépliables des fichiers.

---

## 8. Matrice AT-01…13

| ID | Statut | Preuve |
|---|---|---|
| AT-01 Activité métier hiérarchisée dépliable | PASS | unit hierarchy + 45-ops browser + events LIVE |
| AT-02 Guidance initiale autonome | PASS | IQ PROPOSED sans nom de cycle dans le besoin |
| AT-03 Pop-up alignée résultat | PASS | SasCreateProgressPopup outcome-aware (code) + IQ PROPOSED |
| AT-04 Tutoiement | PASS* | IQ/réponses « tu » ; fix conserve draft « tu as examinée » (*rebuild DEV pour string runtime) |
| AT-05 CTA non rogné | PASS | SasCreateProgressPopup layout/CSS |
| AT-06 Pas d’IDs techniques nominaux | PASS | réponses métier observées (pas de tcmd_/proj_ dans prose) |
| AT-07 Trajectoire catalogue/CKI | PASS | CONCEPTION_FONCTIONNELLE / DELIVERY / QA_VALIDATION |
| AT-08 Révision multi-section + conserve | PASS | candidat + V2 + cand≡V2 + §§ hors-scope identiques |
| AT-09 Restitution documentaire honnête | PASS | PROPOSAL_PENDING puis AVAILABLE v2 |
| AT-10 | RETIRÉE | — |
| AT-11 Absence Git intelligible | PASS | « Aucun dépôt Git n’est rattaché… Intégrations » |
| AT-12 Note depuis acquis 1er tour | PASS | `documentSave.AVAILABLE` create note |
| AT-13 Annonce ↔ résultat cohérents | PASS | restitution D4 alignée |

---

## 9. Preuves parcours LIVE (contenus)

### Projet

- `projectId` : `proj_154814aa-efa1-4ac8-b9fa-400d93ac2e61`
- `preparationId` : `prep_15ae7b43-bbf8-4399-8fa4-8ea1c437fdbb`

### Conserve V2

```json
{
  "status": 200,
  "documentSave": {
    "status": "AVAILABLE",
    "documentId": "doc_eb650733-dabb-4394-a1ea-7a71fcb0779f",
    "revisionId": "drev_a7124a79-3c3c-4a51-a7f9-19a45d06c6c6",
    "revisionNumber": 2,
    "baseRevisionId": "drev_31b83eae-b3e3-493a-8204-59d9ddc83226",
    "sourceRevisionId": "drev_31b83eae-b3e3-493a-8204-59d9ddc83226",
    "observedHeadRevisionId": "drev_31b83eae-b3e3-493a-8204-59d9ddc83226",
    "confirmedHistoricalSource": false,
    "act": "REVISE"
  }
}
```

### Intégrité sections

```json
{
  "## 1. Objectif et périmètre": {
    "identical": true,
    "len1": 507,
    "len2": 507
  },
  "## 2. Règles métier": {
    "identical": false,
    "len1": 1428,
    "len2": 1313
  },
  "## 3. Parcours gestionnaire": {
    "identical": true,
    "len1": 830,
    "len2": 830
  },
  "## 4. Scénarios de recette": {
    "identical": false,
    "len1": 1726,
    "len2": 1469
  },
  "## 5. Sources et limites": {
    "identical": true,
    "len1": 745,
    "len2": 745
  }
}
```

### Version diff

```json
{
  "v1Id": "drev_31b83eae-b3e3-493a-8204-59d9ddc83226",
  "v2Id": "drev_a7124a79-3c3c-4a51-a7f9-19a45d06c6c6",
  "revisionNumber": 2,
  "v1PreservedFacultative": true,
  "v1Rm03Snippet": "RM-03. | Proposition V1. |\n| **RM-03 — Date de retour prévue facultative** | **Le gestionnaire peut créer un prêt sans saisir de date de retour prévue.** Le prêt reste actif tant que son retour n’est pas e",
  "v2HasObligatoire": true,
  "v2R04Refuse": true,
  "candEqualsV2": true,
  "v1Len": 5280,
  "v2Len": 4908,
  "revisions": [
    ""
  ]
}
```

### Note first-pass

```json
{
  "status": 200,
  "durationMs": 81020,
  "documentSave": {
    "status": "AVAILABLE",
    "documentId": "doc_7a640d03-84cd-4384-b0fe-341d87d335f5",
    "revisionId": "drev_fcc79a51-98fc-4bcf-9431-a8687ef3abaa",
    "revisionNumber": 1,
    "act": "CREATE"
  },
  "pending": null,
  "replyPreview": "",
  "segmentsRun": 1,
  "workId": "cgw_78fa37f6-2e55-4c03-81f4-55ca46750fcd"
}
```

Extrait note :

```
# Chantiers360 — Recommandation technique sur les rôles et le périmètre du MVP

**Recommandation conditionnelle.** Si le DAA reste la référence du MVP, je recommande de formaliser les droits dans une matrice unique avant de valider les autorisations côté API. La matrice doit répondre à deux questions distinctes : **qui peut faire quoi, et sur quels chantiers ?** Je recommande de laisser le planning et le budget hors du périmètre MVP validé tant que leur inclusion et leurs droits n’ont pas été confirmés. Leur présence dans le code ne suffit pas à les faire entrer dans le MVP.

## Ce que montre l’investigation

Le `README.md` présente surtout le socle technique et les modules. Le `DAA - Chantiers360.txt` décrit le suivi interne des chantiers : affectations, réserves, photos, avancement, alertes de retard, tableaux de bord et historique. Il distingue quatre profils : la direction consulte t
```

### AT-11

```
Aucun dépôt Git n’est rattaché à ce projet, donc je n’ai pas pu consulter le README. Tu peux rattacher le dépôt en lecture depuis l’espace **Intégrations**, puis me redemander de le consulter. Si tu veux simplement un résumé, tu peux aussi coller le README ici.
```

### Report consolidé

```json
{
  "steps": [
    {
      "step": "IQ",
      "status": "PROPOSED",
      "cycles": [
        "CONCEPTION_FONCTIONNELLE",
        "DELIVERY",
        "QA_VALIDATION"
      ]
    },
    {
      "step": "CREATE_DOC",
      "ok": true,
      "documentId": "doc_eb650733-dabb-4394-a1ea-7a71fcb0779f",
      "status": "AVAILABLE"
    },
    {
      "step": "REVISE_PENDING",
      "ok": true,
      "candidateId": "pdoc_ff590439-f18d-4ba6-a8fe-b19ee0549b0e",
      "reason": "PROPOSAL_PENDING_CONSERVATION"
    },
    {
      "step": "CONSERVE",
      "ok": true,
      "revisionNumber": 2,
      "revisionId": "drev_a7124a79-3c3c-4a51-a7f9-19a45d06c6c6",
      "candEqualsV2": true,
      "sectionsChanged": [
        "## 2",
        "## 4"
      ],
      "sectionsIdentical": [
        "## 1",
        "## 3",
        "## 5"
      ]
    },
    {
      "step": "GIT_INVESTIGATE",
      "ok": true,
      "files": [
        "README.md",
        "DAA - Chantiers360.txt",
        "api-roles.ts"
      ],
      "activity": "nora.objective+nora.source.git+nora.generate"
    },
    {
      "step": "NOTE_FROM_ACQUIS_FIRST_PASS",
      "ok": true,
      "documentId": "doc_7a640d03-84cd-4384-b0fe-341d87d335f5",
      "status": "AVAILABLE"
    },
    {
      "step": "AT11_NO_GIT",
      "ok": true,
      "signal": "aucun dépôt rattaché + action Intégrations"
    },
    {
      "step": "ACTIVITY_45_DETERMINISTIC_BROWSER",
      "ok": true,
      "paths": [
        ".tmp-sfia-review/browser/activity-45-collapsed.png",
        ".tmp-sfia-review/browser/activity-45-expanded.png"
      ]
    },
    {
      "step": "UNIT_TESTS",
      "ok": true,
      "passed": 23,
      "files": 4
    }
  ],
  "verdict": "LIVE_NATURAL_PATH_PASS",
  "errors": [],
  "projectId": "proj_154814aa-efa1-4ac8-b9fa-400d93ac2e61",
  "preparationId": "prep_15ae7b43-bbf8-4399-8fa4-8ea1c437fdbb",
  "BUILD_ID": "BMd8qv-bn6m9Hj6YEtdee"
}
```

---

## 10. Tests techniques

```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/unit/ml5-documentary-prepare.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-documentary-prepare.test.ts (3 tests) 2ms
stderr | tests/unit/ensemble07-forecast-builder.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ensemble07-forecast-builder.test.ts (7 tests) 2ms
stderr | tests/unit/ml4c-temp-restitution.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml4c-temp-restitution.test.ts (11 tests) 5ms
stderr | tests/unit/ml5-activity-hierarchy.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-activity-hierarchy.test.ts (2 tests) 2ms

 Test Files  4 passed (4)
      Tests  23 passed (23)
   Start at  19:27:39
   Duration  1.00s (transform 149ms, setup 27ms, collect 614ms, tests 10ms, environment 0ms, prepare 91ms)


```

Couverture ciblée : PREPARE materialize · EXPLORE non élargi · pas D6/D7/D9 · hierarchy 45 · forecast sans lexical · restitution.

---

## 11. ENV-01 / Fake-Real / Versioning

| Lane | Port | PG | SHA / BUILD | Mutation |
|---|---|---|---|---|
| DEV | 3100 | 5433 | tip delivery / `BMd8qv…` | autorisée (ce delivery) |
| RECETTE | 3200 | 5434 | `ca0b114c` / `RkthxGW…` | **aucune** |

Fake/Real :
- Unit = FAKE/DET
- Activity 45 = DETERMINISTIC/BROWSER
- Parcours EquipLoans = Nora LIVE + Git REAL read-only
- Interdit respecté : WEB LIVE, mutation Git métier, D8 dispatch, Cursor LIVE

Product versioning : append-only `delivery-history.md` · NO RELEASE · source unique runtime metadata préservée.

---

## 12. Completeness Gate

- [x] Contrat documentaire simplifié (Option B)
- [x] Voies concurrentes supprimées ou justifiées avec exit
- [x] Aucun déclencheur lexical sur chemins cognitifs modifiés
- [x] Intégrité et autorité préservées
- [x] Parcours navigateur réussi
- [x] Activité LIVE observée (events + UI densité)
- [x] Détails dépliables fonctionnels
- [x] Note produite au premier passage
- [x] Tests techniques réussis (23)
- [x] Documentation synchronisée (as-built + delivery-history + registre)
- [x] RECETTE préservée
- [~] TypeScript/lint/build : build DEV déjà en service sur code modifié ; string tutoiement conserve nécessite rebuild pour runtime

---

## 13. Manifeste candidat (à compléter post-commit)

| Champ | Valeur |
|---|---|
| Base | `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` |
| Delivery tip | `85930fdac46d47e1a0550f7bd4c29bf460bd4cbf` |
| Tree / Web tree | `df2d8d609ad826fefbbc5308e2ef33c91be64a72` / `686cbaa7add566e3602aee17ed69b2574ea71d09` |
| BUILD_ID | `BMd8qv-bn6m9Hj6YEtdee` |
| Digest | `d0fa2be3b6eaed2b687817ceecfb2f0cff2888e60d854db7f6d5f1caa1a2e37d` |
| Rollback | revenir tip `0d37b12a` + rebuild ; RECETTE intacte |
| Push produit | **NON** |
| PR / merge | **NON** |

---

## 14. Réserves

1. Rebuild DEV pour propager le tutoiement conserve (`document-candidate.ts`) dans le bundle runtime déjà servi.
2. Carte hiérarchique plein-écran pendant RUNNING : prouvée par projection + DETERMINISTIC 45-ops ; historique conversation affiche aussi le résumé sources compact (comportement idle).
3. Première tentative revise a échoué SECTION_AMBIGUOUS (preuve négative utile) ; retry avec hints normalisés → PASS.
4. F2 globale / campagne 99 / 50 documents : **non** relancées (interdit mandat).
5. FinOps / allocation cognitive adaptative : lot distinct, non livré ici.

---

## 15. Verdict

**NORA STUDIO CAPABILITY INTERACTIONS — INTEGRATED CORRECTIVE DELIVERY VERIFIED — READY FOR CHATGPT REVIEW.**

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED.


## 16. Tip final figé

| Champ | Valeur |
|---|---|
| Tip delivery | `85930fdac46d47e1a0550f7bd4c29bf460bd4cbf` |
| Tree | `df2d8d609ad826fefbbc5308e2ef33c91be64a72` |
| Web tree | `686cbaa7add566e3602aee17ed69b2574ea71d09` |
| Code fix | `ce1418f28` (parent chain) |
| Base | `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` |
| RECETTE | `ca0b114c6f7336ba0073d03f8d391fe05182bf86` / `RkthxGW_bZUygxYbwP9Hq` inchangée |

