# Review Pack FULL — SFIA Studio Next — E1 sécurisation technique finale

## Meta
- **date_local**: 2026-11-27T18:30:00+0100
- **date_utc**: 2026-11-27T17:30:00Z
- **cycle**: 8 — Delivery / Critical / EVOL — E1 final safeguards
- **profil**: Critical
- **livraison**: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV (même entrée)
- **mandat**: 3 contrôles — merge tree integrity ; forecast USER_MESSAGE admission ; pack completeness
- **acquis**: handoff `108044ef` / blob `95ef9e14` — préservés
- **E2**: NON ENGAGÉ
- **classe**: NO RELEASE — NOT ADOPTED
- **commit projet**: INTERDIT — handoff L3 uniquement

## 1. Git Truth

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-wt-next-ml5-20261123 |
| Branche | sfia/next-ml5-integrated-delivery-20261123 |
| HEAD | 58ca9486003805f74e69a0842f2c0792a7184437 |
| Main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Docs tip | 0a877d62e2da8d927e61b4ff572c1f70ff893988 |
| Handoff avant | 108044efaefa80ebb09c6a21153e7d68d4ac53c8 / blob 95ef9e14 |
| Staged | aucun |
| Worktree | dirty attendu |
| RECETTE wt e8e6e069 | préservé |

**Verdict Git**: TRUTH OK

## 2. ENV-01

| Surface | État |
| --- | --- |
| DEV :3100 | HTTP 500 tooling — non rouvert |
| DEV PG :5433 | LISTEN |
| RECETTE :3200 | HTTP 307 — aucune mutation |
| RECETTE PG :5434 | LISTEN |
| LIVE | NON émis |

**Verdict**: ENV ROUTING COMPLETE

## 3. Versioning

NO RELEASE — entrée DELIV… complétée section `E1_final_safeguards`.

## 4. Sources (index)

| Source | Ref | Rôle |
| --- | --- | --- |
| suivi ChatGPT v0.2 | 0a877d62 | REL-01/02/05/09 — LU non modifié |
| continuity contract | 1a5f822f | §6.1 — LU |
| handoff E1r | 108044ef | acquis — RÉFÉRENCÉ |
| as-built E1 | local | MIS À JOUR (final) |

## 5. Contrôles

### Contrôle 1 — Intégrité fusions D4
- **Risque**: CONFIRMÉ — `mergeSubjects` ne réparentait pas les enfants ; parent MERGED orphelinait l'arborescence.
- **Correction**: réparent ACTIVE children → target ; refuse ancêtre→descendant (`CYCLE_OR_INVALID_TREE`) ; event payload `reparentedChildIds`.
- **Fichier**: `knowledge/service.ts`
- **Preuve**: e1-final-safeguards merge children + cycle ; ml2-corrective non-régression

### Contrôle 2 — Admission forecast USER_MESSAGE
- **Risque**: CONFIRMÉ — `mutateCommand` fallback body.forecastJson sans garde sourceKind ; `forecastJson` absent de clientSensitive.
- **Correction**: classify USER_MESSAGE refuse tout body.forecastJson ; mutate n'utilise body que si `sourceKind !== "USER_MESSAGE"` ; absence durable ⇒ null.
- **Fichier**: `pilotage/service.ts`
- **Preuve**: e1-final-safeguards (reject body ; durable persist ; EXPLICIT ok) ; e1-ensemble / e1-reliquats non-régression

### Contrôle 3 — Complétude pack
- Handoff `108044ef` contenait déjà diffs docs + RETAIN expectation dans le pack E1r.
- Présent pack publie **uniquement** le delta final (merge/forecast/tests/docs) + référence SHA immuable `108044ef`.
- Test RETAIN local vérifié présent (proposed=null après retain).

## 6. Validations

| Commande | Exit | Résultat |
| --- | --- | --- |
| vitest e1-final-safeguards.pg | 0 | 5 PASS |
| vitest e1-reliquats-integrity.pg | 0 | 5 PASS |
| vitest e1-ensemble-b5-b6.pg | 0 | 10 PASS |
| vitest ml2-corrective-integrity.pg | 0 | 18 PASS |
| **Total lot** | 0 | **38 PASS** |

## 7. Fake/Real

| Fake | Real | Gap |
| --- | --- | --- |
| Qual injectée + executePilotageCommand | LIVE Nora | autonomie naturelle |
| PG DEV | PG RECETTE | données métier |

Claims: DETERMINISTIC PROVEN (invariants). Interdit: READY FOR REAL / Livraison 1 acceptée.

## 8. Preuves reportées

- R-REC-E1-01 / R-REC-E1-02 conservés (recette naturelle + DOM tooling).
- Pertinence cognitive merge → recette.

## 9. Réserves

| ID | Classe | Exit |
| --- | --- | --- |
| R-E1-LIVE | C | recette |
| R-E1-DOM | E | tooling / qualify:start |
| R-E1-HYBRID | D | E2 |
| R-E1-E3 | D | E3 |

## 10. Review Pack Content Coverage

| Contenu | Présent |
| --- | --- |
| Diff mergeSubjects | OUI |
| Diff forecast admission | OUI |
| Test e1-final-safeguards complet | OUI |
| Docs as-built/delivery/registre delta | OUI |
| Réf handoff 108044ef | OUI |
| RETAIN expectation (réf + extrait local) | OUI |

## 11. Verdict Cursor

**READY FOR REVIEW** — E1 sécurisation finale.

Deux risques maîtrisés. Pack complet. Aucune autre incohérence critique introduite.
Sortie construction E1 possible sous gate Morris ; preuves utilisateur restantes à arbitrer pour la recette.
E2 NON ENGAGÉ. Livraison 1 NOT ACCEPTED.

---

## DIFFS — delta présent mandat

### git diff --stat (cœur)
 .../construction/delivery-history.md               |  37 ++
 ...5-registre-couverture-et-revue-developpement.md |  32 +-
 .../web/src/domains/knowledge/service.ts           | 642 +++++++++++++++++++--
 .../web/src/domains/pilotage/service.ts            |  91 ++-
 4 files changed, 759 insertions(+), 43 deletions(-)

### FULL DIFF — pilotage/service.ts (forecast admission)
6- import { loadCkiEditorialForPin } from "@/domains/pilotage/cki-editorial";
7- import { persistableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
8- import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
9:-import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
10-+import {
11-+  parseForecastJson,
12-+  type ForecastStep,
13:+} from "@/domains/pilotage/forecast-builder";
14- import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
15- import {
16-   buildSourceActionKey,
--
20-
21--type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }>;
22-+type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }> & {
23:+  /** Durable PROPOSE_TRAJECTORY forecast (E1-REL-05). */
24:+  forecastSteps?: ForecastStep[];
25-+};
26-+
27-+type DurablePilotageForecast = {
--
56-     actInstanceId: (body.actInstanceId ?? "").trim() || sourceRef,
57-     objectRef: (qualified.objectRef ?? (!fromDurable ? body.objectRef : undefined) ?? "").trim(),
58-     sourceActionKey: "",
59:+    forecastSteps: fromDurable
60:+      ? qualified.forecastSteps
61:+      : body.forecastJson && body.forecastJson.length > 0
62:+        ? body.forecastJson
63-+        : undefined,
64-   };
65-   if (
--
68-   if (command.operation === "TRANSITION_CYCLE" && (!command.cycleType || !command.toCycleType)) {
69-     return { ok: false, reasonCode: "INVALID", reason: "Transition incomplète", sourceActionKey: "REJECT|INVALID|transition" };
70-   }
71:+  // E1 B.6 — USER_MESSAGE PROPOSE: orientation lives in durable qualification (summary/statement), not body.
72-+  if (command.operation === "PROPOSE_TRAJECTORY" && !command.orientation.trim()) {
73-+    command.orientation = (command.statement || command.objective || "").trim();
74-+  }
--
87-         };
88-       }
89-     }
90:+    // E1 final — USER_MESSAGE must never admit client forecastJson (durable-only or absent).
91:+    if (body.forecastJson && body.forecastJson.length > 0) {
92-+      return {
93-+        ok: false,
94-+        reasonCode: "AMBIGUOUS",
95-+        reason:
96:+          "Champ forecastJson non issu de la qualification durable — refuse (pas de complément body)",
97:+        sourceActionKey: "REJECT|AMBIGUOUS|BODY_FORECASTJSON",
98-+      };
99-+    }
100-
--
104-       semanticSchemaVersion: matched.schemaVersion,
105-       cycleType: tryCanonicalCycleType(matched.cycleType),
106-       toCycleType: tryCanonicalCycleType(matched.toCycleType),
107:+      forecastSteps: normalizeDurableForecastSteps(matched.forecastSteps),
108-     };
109:     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
110-     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
111-@@ -776,6 +836,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
112-     actInstanceId: (body.actInstanceId ?? "").trim(),
113-     objectRef: (body.objectRef ?? "").trim(),
114-     sourceActionKey: "",
115:+    forecastSteps:
116:+      body.forecastJson && body.forecastJson.length > 0 ? body.forecastJson : undefined,
117-   };
118-   command.sourceActionKey = buildSourceActionKey(command);
119-   return { ok: true, command };
--
121-
122-   if (command.operation === "PROPOSE_TRAJECTORY") {
123-     const id = newId("trj");
124:-    const forecastJson =
125:-      input.body.forecastJson && input.body.forecastJson.length > 0
126:+    // E1 final — USER_MESSAGE: durable ClassifiedCommand.forecastSteps only (null if absent/empty).
127:+    // Non-USER paths may still use body.forecastJson when command has no steps.
128:+    const forecastFromCommand =

### FULL DIFF — pilotage/service.ts
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index 77d2f14c..b4c201bf 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -25,7 +25,10 @@ import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@
 import { loadCkiEditorialForPin } from "@/domains/pilotage/cki-editorial";
 import { persistableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
 import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
-import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
+import {
+  parseForecastJson,
+  type ForecastStep,
+} from "@/domains/pilotage/forecast-builder";
 import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import {
   buildSourceActionKey,
@@ -61,7 +64,36 @@ export const pilotageFault: { afterCloseBeforeOpen: null | (() => void) } = {
   afterCloseBeforeOpen: null,
 };

-type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }>;
+type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }> & {
+  /** Durable PROPOSE_TRAJECTORY forecast (E1-REL-05). */
+  forecastSteps?: ForecastStep[];
+};
+
+type DurablePilotageForecast = {
+  order?: number;
+  cycleType: string;
+  rationale?: string;
+  certainty?: "QUALIFIED" | "ENVISIONED" | "HYPOTHESIS";
+};
+
+function normalizeDurableForecastSteps(
+  steps: DurablePilotageForecast[] | undefined,
+): ForecastStep[] | undefined {
+  if (!steps || steps.length === 0) return undefined;
+  const out: ForecastStep[] = [];
+  for (let i = 0; i < steps.length; i++) {
+    const s = steps[i]!;
+    const cycleType = tryCanonicalCycleType(s.cycleType);
+    if (!cycleType || !isCycleType(cycleType)) continue;
+    out.push({
+      order: s.order && s.order >= 1 ? s.order : i + 1,
+      cycleType,
+      rationale: (s.rationale ?? "").trim().slice(0, 500) || `Étape ${cycleType}`,
+      certainty: s.certainty === "QUALIFIED" ? "QUALIFIED" : "ENVISIONED",
+    });
+  }
+  return out.length > 0 ? out : undefined;
+}

 function rejected(reasonCode: string, reason: string): MutateResult {
   return { kind: "REJECTED", reasonCode, reason, persist: true };
@@ -450,6 +482,11 @@ function fromClearIntent(
     actInstanceId: (body.actInstanceId ?? "").trim() || sourceRef,
     objectRef: (qualified.objectRef ?? (!fromDurable ? body.objectRef : undefined) ?? "").trim(),
     sourceActionKey: "",
+    forecastSteps: fromDurable
+      ? qualified.forecastSteps
+      : body.forecastJson && body.forecastJson.length > 0
+        ? body.forecastJson
+        : undefined,
   };
   if (
     (command.operation === "CHOOSE_METHOD" || command.operation === "REPLACE_METHOD") &&
@@ -468,6 +505,18 @@ function fromClearIntent(
   if (command.operation === "TRANSITION_CYCLE" && (!command.cycleType || !command.toCycleType)) {
     return { ok: false, reasonCode: "INVALID", reason: "Transition incomplète", sourceActionKey: "REJECT|INVALID|transition" };
   }
+  // E1 B.6 — USER_MESSAGE PROPOSE: orientation lives in durable qualification (summary/statement), not body.
+  if (command.operation === "PROPOSE_TRAJECTORY" && !command.orientation.trim()) {
+    command.orientation = (command.statement || command.objective || "").trim();
+  }
+  if (command.operation === "PROPOSE_TRAJECTORY" && !command.orientation.trim()) {
+    return {
+      ok: false,
+      reasonCode: "INVALID",
+      reason: "Orientation requise",
+      sourceActionKey: "REJECT|INVALID|propose",
+    };
+  }
   command.sourceActionKey = buildSourceActionKey(command);
   return { ok: true, command };
 }
@@ -560,6 +609,16 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
         };
       }
     }
+    // E1 final — USER_MESSAGE must never admit client forecastJson (durable-only or absent).
+    if (body.forecastJson && body.forecastJson.length > 0) {
+      return {
+        ok: false,
+        reasonCode: "AMBIGUOUS",
+        reason:
+          "Champ forecastJson non issu de la qualification durable — refuse (pas de complément body)",
+        sourceActionKey: "REJECT|AMBIGUOUS|BODY_FORECASTJSON",
+      };
+    }

     // Owner resolves durable targets first. body.decisionId / restrictionId may only echo.
     let decisionId = matched.decisionId;
@@ -655,6 +714,7 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       semanticSchemaVersion: matched.schemaVersion,
       cycleType: tryCanonicalCycleType(matched.cycleType),
       toCycleType: tryCanonicalCycleType(matched.toCycleType),
+      forecastSteps: normalizeDurableForecastSteps(matched.forecastSteps),
     };
     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
@@ -776,6 +836,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
     actInstanceId: (body.actInstanceId ?? "").trim(),
     objectRef: (body.objectRef ?? "").trim(),
     sourceActionKey: "",
+    forecastSteps:
+      body.forecastJson && body.forecastJson.length > 0 ? body.forecastJson : undefined,
   };
   command.sourceActionKey = buildSourceActionKey(command);
   return { ok: true, command };
@@ -795,10 +857,17 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie

   if (command.operation === "PROPOSE_TRAJECTORY") {
     const id = newId("trj");
-    const forecastJson =
-      input.body.forecastJson && input.body.forecastJson.length > 0
+    // E1 final — USER_MESSAGE: durable ClassifiedCommand.forecastSteps only (null if absent/empty).
+    // Non-USER paths may still use body.forecastJson when command has no steps.
+    const forecastFromCommand =
+      command.forecastSteps && command.forecastSteps.length > 0 ? command.forecastSteps : null;
+    const forecastFromBody =
+      command.sourceKind !== "USER_MESSAGE" &&
+      input.body.forecastJson &&
+      input.body.forecastJson.length > 0
         ? input.body.forecastJson
         : null;
+    const forecastJson = forecastFromCommand ?? forecastFromBody;
     await tx.insert(trajectoryRevisions).values({
       id,
       projectId,
@@ -823,6 +892,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
   if (command.operation === "RETAIN_TRAJECTORY") {
     let orientation = command.orientation;
     let retainTargetId = command.trajectoryRevisionId;
+    let retainedForecast: unknown = null;
     if (retainTargetId) {
       const prior = (
         await tx
@@ -833,6 +903,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       )[0];
       if (!prior) return rejected("INVALID_TARGET", "Trajectoire introuvable dans ce projet");
       orientation = orientation || prior.orientation;
+      retainedForecast = prior.forecastJson ?? null;
     } else if (!orientation.trim()) {
       // FIX-08 — conversational GO: resolve current PROPOSED when body has no target
       // (USER_MESSAGE must not carry trajectoryRevisionId / orientation from client).
@@ -852,6 +923,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       if (!proposed) return rejected("INVALID_TARGET", "Aucune trajectoire PROPOSED à retenir");
       retainTargetId = proposed.id;
       orientation = proposed.orientation;
+      retainedForecast = proposed.forecastJson ?? null;
     }
     if (!orientation.trim()) return rejected("INVALID", "Orientation requise");
     const decisionId = await insertHumanDecision(tx, {
@@ -867,6 +939,16 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       .update(trajectoryRevisions)
       .set({ status: "SUPERSEDED" })
       .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "RETAINED")));
+    // E1-REL-05 R-E1-RETAIN-VIS — supersede PROPOSED source(s) so they do not remain concurrent.
+    await tx
+      .update(trajectoryRevisions)
+      .set({ status: "SUPERSEDED" })
+      .where(
+        and(
+          eq(trajectoryRevisions.projectId, projectId),
+          eq(trajectoryRevisions.status, "PROPOSED"),
+        ),
+      );
     const id = newId("trj");
     await tx.insert(trajectoryRevisions).values({
       id,
@@ -877,6 +959,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       sourceKind: command.sourceKind,
       sourceRef: command.sourceRef,
       decisionId,
+      forecastJson: retainedForecast,
       createdAt: now,
     });
     const revision = await bumpRevision(tx, projectId, { id });

### FULL DIFF — knowledge/service.ts (merge tree — excerpt via full diff of file; focus mergeSubjects)
239-+ * ACTIVE parent chain (owner/prep scoped). Used to refuse ancestor→descendant merges.
240-+ */
241:+async function isSubjectUnderAncestor(
242-+  pilotId: string,
243-+  preparationId: string,
--
261-+
262- /** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
263: export async function mergeSubjects(
264-   pilotId: string,
265-   preparationId: string,
--
271-   await assertPrep(pilotId, preparationId);
272-   if (targetSubjectId === sourceSubjectId) {
273:@@ -451,7 +646,11 @@ export async function mergeSubjects(
274-
275-   try {
--
284-       for (const id of ids) {
285-         await tx.execute(
286:@@ -479,6 +678,52 @@ export async function mergeSubjects(
287-         return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
288-       }
--
290-+      // Refuse merging an ancestor into its descendant (cycle if children reparent to target).
291-+      if (
292:+        await isSubjectUnderAncestor(
293-+          pilotId,
294-+          preparationId,
--
298-+        )
299-+      ) {
300:+        return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
301-+      }
302-+
303:+      // E1 final — reparent ACTIVE children of absorbed source onto target so they
304-+      // do not remain under a MERGED parent (invisible / orphaned in the living tree).
305-+      const children = await tx
--
337-         .update(knowledgeAcquis)
338-         .set({ subjectId: targetSubjectId, updatedAt: new Date() })
339:@@ -516,9 +761,17 @@ export async function mergeSubjects(
340-         ownerPilotId: pilotId,
341-         subjectId: targetSubjectId,
--
344-+        payloadJson: JSON.stringify({
345-+          absorbed: sourceSubjectId,
346:+          reparentedChildIds: childIds,
347-+        }),
348-       });
--
352-+        targetSubjectId,
353-+        absorbedSubjectId: sourceSubjectId,
354:+        reparentedChildIds: childIds,
355-+      };
356-     });
--
483-+              continue;
484-+            }
485:+            const merged = await mergeSubjects(

### FULL DIFF — knowledge/service.ts
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 8e294388..489fcb77 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -25,6 +25,11 @@ export type Provenance = {
   /** Extra constitutive message ids (Pilot/Nora) — never invent ids. */
   relatedMessageIds?: string[];
   contributionKind?: "pilot_fact" | "nora_analysis" | "pilot_confirmation" | "mixed";
+  /**
+   * E1-REL-04 — short canonical open-point title from Nora qualification.
+   * Display prefers this over editorial truncation of the statement.
+   */
+  canonicalTitle?: string;
 };

 export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
@@ -49,6 +54,11 @@ import {
   editorialCompactKnowledgeStatement,
   composeSubjectSummaryFromCurrentKnowledge,
 } from "./journal-editorial";
+import {
+  orderSubjectCreatesByDependency,
+  resolveBatchParentRef,
+  type SubjectCreateProposal,
+} from "./subject-proposal-batch";

 function provenanceString(p: Provenance): string {
   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
@@ -99,6 +109,155 @@ async function assertSubjectRef(
   return { subject: row };
 }

+/** Resolve an ACTIVE subject by exact title within the preparation (owner-scoped). */
+async function findActiveSubjectByTitle(
+  pilotId: string,
+  preparationId: string,
+  title: string,
+): Promise<{ id: string } | null> {
+  const cleaned = title.trim().slice(0, 200);
+  if (!cleaned) return null;
+  const rows = await db
+    .select({ id: knowledgeSubjects.id })
+    .from(knowledgeSubjects)
+    .where(
+      and(
+        eq(knowledgeSubjects.preparationId, preparationId),
+        eq(knowledgeSubjects.ownerPilotId, pilotId),
+        eq(knowledgeSubjects.title, cleaned),
+        eq(knowledgeSubjects.status, "ACTIVE"),
+      ),
+    )
+    .limit(2);
+  if (rows.length !== 1) return null;
+  return rows[0] ?? null;
+}
+
+async function precreateBatchSubjects(
+  pilotId: string,
+  preparationId: string,
+  proposals: Array<{
+    intentId: string;
+    kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
+    statement: string;
+    subjectTitle?: string;
+    subjectId?: string;
+    parentSubjectId?: string;
+    subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
+  }>,
+  fence: TurnOwnershipFence | undefined,
+): Promise<{
+  createdByIntentId: Map<string, string>;
+  failedByIntentId: Map<string, string>;
+  ownershipLost: boolean;
+}> {
+  const createdByIntentId = new Map<string, string>();
+  const failedByIntentId = new Map<string, string>();
+  const specs: SubjectCreateProposal[] = [];
+
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    if (p.subjectId?.trim()) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check?.subject) continue;
+      // E1-REL-02 — explicit unknown/foreign subjectId must not silently create another subject.
+      failedByIntentId.set(
+        p.intentId,
+        check && "error" in check ? check.error : "SUBJECT_FOREIGN_OR_UNKNOWN",
+      );
+      continue;
+    }
+    // Organization ops (MERGE/SPLIT/DETACH) require an existing subjectId — never precreate.
+    if (p.subjectOrganization) {
+      failedByIntentId.set(p.intentId, "SUBJECT_ORG_REQUIRES_SUBJECT_ID");
+      continue;
+    }
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length < 3) continue;
+    const parentRef =
+      p.parentSubjectId && p.parentSubjectId !== p.subjectId
+        ? p.parentSubjectId.trim()
+        : undefined;
+    specs.push({ intentId: p.intentId, title, parentRef });
+  }
+
+  if (specs.length === 0) {
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  const ordering = orderSubjectCreatesByDependency(specs);
+  if (!("ordered" in ordering)) {
+    if (ordering.reason === "SUBJECT_BATCH_CYCLE") {
+      for (const s of specs) {
+        failedByIntentId.set(s.intentId, ordering.reason);
+      }
+    } else {
+      failedByIntentId.set(ordering.error, ordering.reason);
+    }
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  for (const spec of ordering.ordered) {
+    const parentResolved = spec.parentRef
+      ? resolveBatchParentRef(spec.parentRef, {
+          self: spec,
+          batch: ordering.ordered,
+          createdByIntentId,
+        })
+      : ({ kind: "root" } as const);
+
+    let parentSubjectId: string | null = null;
+    if (parentResolved.kind === "error") {
+      failedByIntentId.set(spec.intentId, parentResolved.reason);
+      continue;
+    }
+    if (parentResolved.kind === "pending_batch") {
+      failedByIntentId.set(spec.intentId, "SUBJECT_BATCH_ORDER");
+      continue;
+    }
+    if (parentResolved.kind === "resolved") {
+      parentSubjectId = parentResolved.parentSubjectId;
+      if (parentSubjectId.startsWith("subj_")) {
+        const check = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
+        if (check && "error" in check) {
+          failedByIntentId.set(spec.intentId, check.error ?? "SUBJECT_FOREIGN_OR_UNKNOWN");
+          continue;
+        }
+      }
+    }
+    if (parentResolved.kind === "lookup_title") {
+      const found = await findActiveSubjectByTitle(
+        pilotId,
+        preparationId,
+        parentResolved.title,
+      );
+      if (!found) {
+        failedByIntentId.set(spec.intentId, "PARENT_NOT_FOUND");
+        continue;
+      }
+      parentSubjectId = found.id;
+    }
+
+    const s = await ensureSubject(
+      pilotId,
+      preparationId,
+      spec.title,
+      parentSubjectId,
+      fence,
+    );
+    if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+      return { createdByIntentId, failedByIntentId, ownershipLost: true };
+    }
+    if (s.status === "AVAILABLE" && s.subjectId) {
+      createdByIntentId.set(spec.intentId, s.subjectId);
+    } else if (s.status === "FAILED" && "reason" in s) {
+      failedByIntentId.set(spec.intentId, String(s.reason));
+    }
+  }
+
+  return { createdByIntentId, failedByIntentId, ownershipLost: false };
+}
+
 /** Selective capitalisation — never invents D6 decisions. */
 export async function capitalizeAcquis(
   pilotId: string,
@@ -251,6 +410,8 @@ export async function openPoint(
     subjectId?: string | null;
     provenance: Provenance;
     turnFence?: TurnOwnershipFence;
+    /** Short canonical title (E1-REL-04) — stored in provenance, no schema migration. */
+    canonicalTitle?: string;
   },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
@@ -265,6 +426,7 @@ export async function openPoint(
       return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
     }
   }
+  const canonicalTitle = input.canonicalTitle?.trim().slice(0, 120) || undefined;
   const id = newId("opn");
   const write = await db.transaction(async (tx) => {
     if (input.turnFence) {
@@ -281,7 +443,10 @@ export async function openPoint(
       subjectId: input.subjectId ?? null,
       statement,
       status: "OPEN",
-      provenanceJson: provenanceString(input.provenance),
+      provenanceJson: provenanceString({
+        ...input.provenance,
+        ...(canonicalTitle ? { canonicalTitle } : {}),
+      }),
     });
     return { status: "OK" as const };
   });
@@ -400,6 +565,7 @@ export async function renameSubject(
   preparationId: string,
   subjectId: string,
   newTitle: string,
+  turnFence?: TurnOwnershipFence,
 ) {
   await assertPrep(pilotId, preparationId);
   const title = newTitle.trim().slice(0, 200);
@@ -407,6 +573,10 @@ export async function renameSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -436,13 +606,38 @@ export async function renameSubject(
   }
 }

+/**
+ * True when `maybeDescendantId` is the same as or under `ancestorId` in the
+ * ACTIVE parent chain (owner/prep scoped). Used to refuse ancestor→descendant merges.
+ */
+async function isSubjectUnderAncestor(
+  pilotId: string,
+  preparationId: string,
+  ancestorId: string,
+  maybeDescendantId: string,
+  tx: Tx,
+): Promise<boolean> {
+  if (ancestorId === maybeDescendantId) return true;
+  let current: string | null = maybeDescendantId;
+  const visited = new Set<string>();
+  while (current) {
+    if (current === ancestorId) return true;
+    if (visited.has(current)) return true;
+    visited.add(current);
+    const row = await loadOwnedSubject(pilotId, preparationId, current, tx);
+    if (!row) return true;
+    current = row.parentSubjectId;
+  }
+  return false;
+}
+
 /** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
 export async function mergeSubjects(
   pilotId: string,
   preparationId: string,
   targetSubjectId: string,
   sourceSubjectId: string,
-  opts?: { injectFailureAfter?: "lock" | "move" },
+  opts?: { injectFailureAfter?: "lock" | "move"; turnFence?: TurnOwnershipFence },
 ) {
   await assertPrep(pilotId, preparationId);
   if (targetSubjectId === sourceSubjectId) {
@@ -451,7 +646,11 @@ export async function mergeSubjects(

   try {
     return await db.transaction(async (tx) => {
-      // Deterministic lock order to avoid deadlocks
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
+      // Deterministic lock order to avoid deadlocks — lock source+target first, then children.
       const ids = [targetSubjectId, sourceSubjectId].sort();
       for (const id of ids) {
         await tx.execute(
@@ -479,6 +678,52 @@ export async function mergeSubjects(
         return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
       }

+      // Refuse merging an ancestor into its descendant (cycle if children reparent to target).
+      if (
+        await isSubjectUnderAncestor(
+          pilotId,
+          preparationId,
+          sourceSubjectId,
+          targetSubjectId,
+          tx as Tx,
+        )
+      ) {
+        return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
+      }
+
+      // E1 final — reparent ACTIVE children of absorbed source onto target so they
+      // do not remain under a MERGED parent (invisible / orphaned in the living tree).
+      const children = await tx
+        .select({ id: knowledgeSubjects.id })
+        .from(knowledgeSubjects)
+        .where(
+          and(
+            eq(knowledgeSubjects.ownerPilotId, pilotId),
+            eq(knowledgeSubjects.preparationId, preparationId),
+            eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
+            eq(knowledgeSubjects.status, "ACTIVE"),
+          ),
+        );
+      const childIds = children.map((c) => c.id).sort();
+      for (const childId of childIds) {
+        await tx.execute(
+          sql`select id from knowledge_subjects where id = ${childId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
+        );
+      }
+      if (childIds.length > 0) {
+        await tx
+          .update(knowledgeSubjects)
+          .set({ parentSubjectId: targetSubjectId, updatedAt: new Date() })
+          .where(
+            and(
+              eq(knowledgeSubjects.ownerPilotId, pilotId),
+              eq(knowledgeSubjects.preparationId, preparationId),
+              eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
+              eq(knowledgeSubjects.status, "ACTIVE"),
+            ),
+          );
+      }
+
       await tx
         .update(knowledgeAcquis)
         .set({ subjectId: targetSubjectId, updatedAt: new Date() })
@@ -516,9 +761,17 @@ export async function mergeSubjects(
         ownerPilotId: pilotId,
         subjectId: targetSubjectId,
         eventType: "MERGED",
-        payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
+        payloadJson: JSON.stringify({
+          absorbed: sourceSubjectId,
+          reparentedChildIds: childIds,
+        }),
       });
-      return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
+      return {
+        status: "AVAILABLE" as const,
+        targetSubjectId,
+        absorbedSubjectId: sourceSubjectId,
+        reparentedChildIds: childIds,
+      };
     });
   } catch (e) {
     return {
@@ -542,7 +795,10 @@ export async function splitSubject(
     acquisIds: string[];
     openPointIds: string[];
   },
-  opts?: { injectFailureAfter?: "validate" | "create" | "move" },
+  opts?: {
+    injectFailureAfter?: "validate" | "create" | "move";
+    turnFence?: TurnOwnershipFence;
+  },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
   const newTitle = input.newTitle.trim().slice(0, 200);
@@ -553,6 +809,10 @@ export async function splitSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -1165,9 +1425,16 @@ export async function maybeCapitalizeFromExchange(
       epistemic: "hypothesized" | "recommended" | "established" | "limited";
       subjectTitle?: string;
       subjectId?: string;
+      /** Existing parent subject for hierarchical SUBJECT creation. */
+      parentSubjectId?: string;
       continuityReason?: string;
       supersedesAcquisId?: string;
       resolvesOpenPointId?: string;
+      relevantAcquisIds?: string[];
+      relevantOpenPointIds?: string[];
+      openPointTitle?: string;
+      subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
+      mergeSourceSubjectId?: string;
     }>;
   },
 ) {
@@ -1193,6 +1460,21 @@ export async function maybeCapitalizeFromExchange(
   let subjectId: string | null = null;
   const ctx = await assertPrep(pilotId, preparationId);
   const projectId = ctx.project?.id ?? null;
+  const batchSubjects = await precreateBatchSubjects(
+    pilotId,
+    preparationId,
+    proposals,
+    fence,
+  );
+  if (batchSubjects.ownershipLost) {
+    return {
+      capitalisations: results,
+      selectionMethod: "semantic-proposals" as const,
+      selectionLimit: "OWNERSHIP_LOST",
+      humanDecisionCreated: false as const,
+      ownershipLost: true as const,
+    };
+  }
   /** Subjects that already received an explicit SUBJECT summary this turn. */
   const subjectsWithExplicitSummary = new Set<string>();
   /** Subjects that gained significant CURRENT acquis this turn (may need synthesis). */
@@ -1239,9 +1521,45 @@ export async function maybeCapitalizeFromExchange(
     });
   }

+  /** Map subjectTitle (normalized) → id for subjects created in this batch. */
+  const batchTitleToId = new Map<string, string>();
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    const created = batchSubjects.createdByIntentId.get(p.intentId);
+    if (!created) continue;
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length >= 3) {
+      batchTitleToId.set(title.trim().replace(/\s+/g, " ").toLowerCase(), created);
+    }
+  }
+
   for (const p of proposals) {
     if (p.kind === "SUBJECT") {
-      // Prefer explicit subjectId for synthesis revision on an existing subject.
+      const batchFailed = batchSubjects.failedByIntentId.get(p.intentId);
+      if (batchFailed) {
+        results.push({
+          kind: "subject",
+          status: "FAILED",
+          reason: batchFailed,
+          epistemicNote: p.continuityReason,
+        });
+        continue;
+      }
+      const batchCreated = batchSubjects.createdByIntentId.get(p.intentId);
+      if (batchCreated) {
+        subjectId = batchCreated;
+        results.push({
+          kind: "subject",
+          id: batchCreated,
+          status: "AVAILABLE",
+          epistemicNote: p.continuityReason,
+        });
+        const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+        await writeSubjectSummary(batchCreated, p.statement.trim(), title.trim(), p);
+        subjectsWithExplicitSummary.add(batchCreated);
+        continue;
+      }
+      // Prefer explicit subjectId for synthesis revision / reparent / org on an existing subject.
       if (p.subjectId) {
         const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
         if (check && "error" in check) {
@@ -1255,6 +1573,175 @@ export async function maybeCapitalizeFromExchange(
         }
         if (check?.subject) {
           subjectId = check.subject.id;
+          // E1-REL-01 — organization via existing D4 owners (no second engine).
+          if (p.subjectOrganization === "MERGE") {
+            const sourceId = p.mergeSourceSubjectId?.trim();
+            if (!sourceId) {
+              results.push({
+                kind: "subject_merge",
+                id: subjectId,
+                status: "FAILED",
+                reason: "MERGE_SOURCE_REQUIRED",
+                epistemicNote: p.continuityReason,
+              });
+              continue;
+            }
+            const merged = await mergeSubjects(
+              pilotId,
+              preparationId,
+              subjectId,
+              sourceId,
+              { turnFence: fence },
+            );
+            results.push({
+              kind: "subject_merge",
+              id: subjectId,
+              status: merged.status,
+              reason: "reason" in merged ? String(merged.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (merged.status !== "AVAILABLE") continue;
+            await writeSubjectSummary(
+              subjectId,
+              p.statement.trim(),
+              (p.subjectTitle ?? check.subject.title).trim(),
+              p,
+            );
+            subjectsWithExplicitSummary.add(subjectId);
+            continue;
+          }
+          if (p.subjectOrganization === "SPLIT") {
+            const newTitle = (p.subjectTitle ?? "").trim();
+            if (newTitle.length < 3) {
+              results.push({
+                kind: "subject_split",
+                id: subjectId,
+                status: "FAILED",
+                reason: "SPLIT_TITLE_REQUIRED",
+                epistemicNote: p.continuityReason,
+              });
+              continue;
+            }
+            const split = await splitSubject(
+              pilotId,
+              preparationId,
+              subjectId,
+              {
+                newTitle,
+                acquisIds: p.relevantAcquisIds ?? [],
+                openPointIds: p.relevantOpenPointIds ?? [],
+              },
+              { turnFence: fence },
+            );
+            results.push({
+              kind: "subject_split",
+              id: "newSubjectId" in split ? split.newSubjectId : subjectId,
+              status: split.status,
+              reason: "reason" in split ? String(split.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (split.status === "AVAILABLE" && "newSubjectId" in split && split.newSubjectId) {
+              subjectId = split.newSubjectId;
+              await writeSubjectSummary(split.newSubjectId, p.statement.trim(), newTitle, p);
+              subjectsWithExplicitSummary.add(split.newSubjectId);
+            }
+            continue;
+          }
+          if (p.subjectOrganization === "DETACH" && projectId) {
+            const { reparentSubject } = await import("@/domains/knowledge/journal");
+            const det = await reparentSubject(pilotId, projectId, subjectId, null, fence);
+            results.push({
+              kind: "subject_detach",
+              id: subjectId,
+              status: det.status,
+              reason: "reason" in det ? String(det.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (det.status !== "AVAILABLE") continue;
+          }
+          // B.2 — reparent when Nora cites an existing subject + new parent.
+          if (
+            projectId &&
+            p.subjectOrganization !== "DETACH" &&
+            p.parentSubjectId &&
+            p.parentSubjectId !== check.subject.id
+          ) {
+            let newParentId: string | null = p.parentSubjectId;
+            if (!p.parentSubjectId.startsWith("subj_")) {
+              const fromBatch = batchSubjects.createdByIntentId.get(p.parentSubjectId);
+              const byTitle =
+                fromBatch ??
+                batchTitleToId.get(
+                  p.parentSubjectId.trim().replace(/\s+/g, " ").toLowerCase(),
+                ) ??
+                (await findActiveSubjectByTitle(pilotId, preparationId, p.parentSubjectId))
+                  ?.id;
+              newParentId = byTitle ?? null;
+              if (!newParentId) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: "PARENT_NOT_FOUND",
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            } else {
+              const parentCheck = await assertSubjectRef(
+                pilotId,
+                preparationId,
+                p.parentSubjectId,
+              );
+              if (parentCheck && "error" in parentCheck) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: parentCheck.error,
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            }
+            if (newParentId && newParentId !== check.subject.parentSubjectId) {
+              const { reparentSubject } = await import("@/domains/knowledge/journal");
+              const rep = await reparentSubject(
+                pilotId,
+                projectId,
+                subjectId,
+                newParentId,
+                fence,
+              );
+              results.push({
+                kind: "subject_reparent",
+                id: subjectId,
+                status: rep.status,
+                reason: "reason" in rep ? String(rep.reason) : undefined,
+                epistemicNote: p.continuityReason,
+              });
+              if (rep.status !== "AVAILABLE") continue;
+            }
+          }
+          // Optional rename when subjectTitle differs from current title.
+          if (p.subjectTitle && p.subjectTitle.trim() !== check.subject.title.trim()) {
+            const renamed = await renameSubject(
+              pilotId,
+              preparationId,
+              subjectId,
+              p.subjectTitle,
+              fence,
+            );
+            results.push({
+              kind: "subject_rename",
+              id: subjectId,
+              status: renamed.status,
+              reason: "reason" in renamed ? String(renamed.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            // E1-REL-02 — do not mask a failed rename with a subsequent AVAILABLE subject result.
+            if (renamed.status !== "AVAILABLE") continue;
+          }
           results.push({
             kind: "subject",
             id: subjectId,
@@ -1264,7 +1751,7 @@ export async function maybeCapitalizeFromExchange(
           await writeSubjectSummary(
             subjectId,
             p.statement.trim(),
-            check.subject.title.trim(),
+            (p.subjectTitle ?? check.subject.title).trim(),
             p,
           );
           subjectsWithExplicitSummary.add(subjectId);
@@ -1273,7 +1760,17 @@ export async function maybeCapitalizeFromExchange(
       }
       const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
       if (title.length < 3) continue;
-      const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+      const parentForCreate =
+        p.parentSubjectId && p.parentSubjectId !== p.subjectId
+          ? p.parentSubjectId
+          : undefined;
+      const s = await ensureSubject(
+        pilotId,
+        preparationId,
+        title,
+        parentForCreate?.startsWith("subj_") ? parentForCreate : undefined,
+        fence,
+      );
       if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
           kind: "subject",
@@ -1303,44 +1800,113 @@ export async function maybeCapitalizeFromExchange(
       continue;
     }

-    if (p.subjectTitle) {
-      const title = p.subjectTitle.trim().slice(0, 120);
-      if (title.length >= 3) {
-        const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
-        if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+    // Resolve subject for ACQUIS/OPEN_POINT: prefer batch ids, then subjectId, then title.
+    // E1-REL-02 — never silently inherit a prior loop subjectId when an explicit ref fails.
+    let recordSubjectId: string | null = null;
+    let subjectRefFailed = false;
+    if (p.subjectId) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check && "error" in check) {
+        results.push({
+          kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
+          status: "FAILED",
+          reason: check.error,
+          epistemicNote: p.continuityReason,
+        });
+        subjectRefFailed = true;
+      } else if (check?.subject) {
+        recordSubjectId = check.subject.id;
+        // Conflict: explicit subjectId + subjectTitle that does not match owned title.
+        if (
+          p.subjectTitle &&
+          p.subjectTitle.trim().toLowerCase() !== check.subject.title.trim().toLowerCase()
+        ) {
           results.push({
-            kind: "subject",
+            kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
             status: "FAILED",
-            reason: "TURN_OWNERSHIP_LOST",
+            reason: "SUBJECT_ID_TITLE_CONFLICT",
             epistemicNote: p.continuityReason,
           });
-          return {
-            capitalisations: results,
-            selectionMethod: "semantic-proposals" as const,
-            selectionLimit: "OWNERSHIP_LOST",
-            humanDecisionCreated: false as const,
-            ownershipLost: true as const,
-          };
+          subjectRefFailed = true;
         }
-        if (s.status === "AVAILABLE" && s.subjectId) {
-          subjectId = s.subjectId;
-          results.push({
-            kind: "subject",
-            id: s.subjectId,
-            status: s.status,
-            epistemicNote: p.continuityReason,
-          });
+      }
+    }
+    if (subjectRefFailed) continue;
+    if (!recordSubjectId && p.subjectTitle) {
+      const title = p.subjectTitle.trim().slice(0, 120);
+      const norm = title.replace(/\s+/g, " ").toLowerCase();
+      const fromBatch = batchTitleToId.get(norm);
+      if (fromBatch) {
+        recordSubjectId = fromBatch;
+      } else if (title.length >= 3) {
+        // Title-only: require unique ACTIVE match — never invent a target under ambiguous homonyms.
+        const unique = await findActiveSubjectByTitle(pilotId, preparationId, title);
+        if (unique) {
+          recordSubjectId = unique.id;
+        } else {
+          const existingHomonyms = (
+            await db
+              .select({ id: knowledgeSubjects.id })
+              .from(knowledgeSubjects)
+              .where(
+                and(
+                  eq(knowledgeSubjects.preparationId, preparationId),
+                  eq(knowledgeSubjects.ownerPilotId, pilotId),
+                  eq(knowledgeSubjects.title, title.trim().slice(0, 200)),
+                  eq(knowledgeSubjects.status, "ACTIVE"),
+                ),
+              )
+              .limit(2)
+          ).length;
+          if (existingHomonyms > 1) {
+            results.push({
+              kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
+              status: "FAILED",
+              reason: "SUBJECT_TITLE_AMBIGUOUS",
+              epistemicNote: p.continuityReason,
+            });
+            continue;
+          }
+          const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+          if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+            results.push({
+              kind: "subject",
+              status: "FAILED",
+              reason: "TURN_OWNERSHIP_LOST",
+              epistemicNote: p.continuityReason,
+            });
+            return {
+              capitalisations: results,
+              selectionMethod: "semantic-proposals" as const,
+              selectionLimit: "OWNERSHIP_LOST",
+              humanDecisionCreated: false as const,
+              ownershipLost: true as const,
+            };
+          }
+          if (s.status === "AVAILABLE" && s.subjectId) {
+            recordSubjectId = s.subjectId;
+            results.push({
+              kind: "subject",
+              id: s.subjectId,
+              status: s.status,
+              epistemicNote: p.continuityReason,
+            });
+          }
         }
       }
     }
-
-    if (p.subjectId) subjectId = p.subjectId;
+    if (!recordSubjectId && !p.subjectId && !p.subjectTitle) {
+      // Same-turn continuity: attach to last successfully resolved subject only when no explicit ref.
+      recordSubjectId = subjectId;
+    }
+    if (recordSubjectId) subjectId = recordSubjectId;

     if (p.kind === "OPEN_POINT") {
       const op = await openPoint(pilotId, preparationId, {
         statement: p.statement,
-        subjectId,
+        subjectId: recordSubjectId,
         turnFence: fence,
+        canonicalTitle: p.openPointTitle,
         provenance: buildExchangeProvenance({
           userMessageId: input.userMessageId,
           assistantMessageId: input.assistantMessageId,
@@ -1396,7 +1962,7 @@ export async function maybeCapitalizeFromExchange(
       const cap = await capitalizeAcquis(pilotId, preparationId, {
         statement: p.statement,
         kind,
-        subjectId,
+        subjectId: recordSubjectId,
         supersedesAcquisId,
         turnFence: fence,
         provenance: buildExchangeProvenance({
@@ -1436,8 +2002,8 @@ export async function maybeCapitalizeFromExchange(
               ? `SUPERSEDES:${supersedesAcquisId}`
               : undefined,
       });
-      if (cap.status === "AVAILABLE" && subjectId) {
-        subjectsTouchedByAcquis.add(subjectId);
+      if (cap.status === "AVAILABLE" && recordSubjectId) {
+        subjectsTouchedByAcquis.add(recordSubjectId);
       }

       if (p.resolvesOpenPointId && projectId && cap.status === "AVAILABLE") {
@@ -1468,7 +2034,7 @@ export async function maybeCapitalizeFromExchange(
           reason: "reason" in resolved ? String(resolved.reason) : undefined,
           epistemicNote: p.continuityReason,
         });
-        if (subjectId) subjectsTouchedByAcquis.add(subjectId);
+        if (recordSubjectId) subjectsTouchedByAcquis.add(recordSubjectId);
       }
     }
   }

### FULL FILE — e1-final-safeguards.pg.test.ts
```typescript
/**
 * E1 final — merge tree integrity + USER_MESSAGE forecast admission.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { knowledgeSubjects, pilots, preparations, trajectoryRevisions } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  mergeSubjects,
} from "@/domains/knowledge/service";
import { openOrCreatePreparation, updatePreview, getPreparationContext } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  executePilotageCommand,
  getPilotageProjection,
} from "@/domains/pilotage/service";
import { clearPilotagePreQualified } from "../helpers/semantic-fixture-envelopes";

async function seedWorld(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`create failed: ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId!,
    conversationId: ctx.conversation!.id,
  };
}

describe("E1 final safeguards — merge tree + forecast admission", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
  });

  it("merge reparents ACTIVE children of absorbed source onto target", async () => {
    const world = await seedWorld(`e1f-merge-child-${Date.now()}`);
    const target = await ensureSubject(world.pilotId, world.preparationId, "Parc campus");
    const source = await ensureSubject(world.pilotId, world.preparationId, "Parc satellites");
    const child = await ensureSubject(
      world.pilotId,
      world.preparationId,
      "Salle serveur satellite",
      source.subjectId!,
    );
    expect(child.status).toBe("AVAILABLE");
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "Le satellite dispose de trois baies actives recensées",
      subjectId: source.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "La salle serveur satellite reste climatisée en permanence",
      subjectId: child.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const merged = await mergeSubjects(
      world.pilotId,
      world.preparationId,
      target.subjectId!,
      source.subjectId!,
    );
    expect(merged.status).toBe("AVAILABLE");
    if (merged.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    expect(merged.reparentedChildIds).toContain(child.subjectId!);

    const sourceRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, source.subjectId!))
        .limit(1)
    )[0];
    expect(sourceRow.status).toBe("MERGED");

    const childRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, child.subjectId!))
        .limit(1)
    )[0];
    expect(childRow.status).toBe("ACTIVE");
    expect(childRow.parentSubjectId).toBe(target.subjectId!);
  });

  it("merge refuses absorbing an ancestor into its descendant (cycle)", async () => {
    const world = await seedWorld(`e1f-merge-cycle-${Date.now()}`);
    const parent = await ensureSubject(world.pilotId, world.preparationId, "Racine incidents");
    const child = await ensureSubject(
      world.pilotId,
      world.preparationId,
      "Sous-arbre incidents",
      parent.subjectId!,
    );
    const refused = await mergeSubjects(
      world.pilotId,
      world.preparationId,
      child.subjectId!,
      parent.subjectId!,
    );
    expect(refused.status).toBe("FAILED");
    if (refused.status !== "FAILED") throw new Error("expected FAILED");
    expect(refused.reason).toBe("CYCLE_OR_INVALID_TREE");

    const parentRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, parent.subjectId!))
        .limit(1)
    )[0];
    expect(parentRow.status).toBe("ACTIVE");
  });

  it("USER_MESSAGE rejects client body.forecastJson (durable absent)", async () => {
    const world = await seedWorld(`e1f-fc-body-${Date.now()}`);
    const content = "Propose une trajectoire avec UX avant QA.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose",
      intents: [
        {
          id: "i-propose-no-fc",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "UX avant validation",
          parameters: { pilotageOperation: "PROPOSE_TRAJECTORY" as const },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Proposition.",
    };
    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-body-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });

    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const rejected = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: reserved.userMessageId,
      operation: "PROPOSE_TRAJECTORY",
      forecastJson: [
        {
          order: 1,
          cycleType: "UX_UI",
          rationale: "client forgery",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(rejected.status).toBe("REJECTED");
    expect(String(rejected.reason ?? "")).toMatch(/forecastJson|qualification durable/i);

    const forged = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, world.projectId));
    expect(forged).toHaveLength(0);
  });

  it("USER_MESSAGE durable forecastSteps persist; client body cannot replace them", async () => {
    const world = await seedWorld(`e1f-fc-dur-${Date.now()}`);
    const content = "Je préfère les maquettes avant la validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose",
      intents: [
        {
          id: "i-propose-dur",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Maquettes avant validation",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            forecastSteps: [
              {
                order: 1,
                cycleType: "UX_UI",
                rationale: "Maquettes",
                certainty: "QUALIFIED" as const,
              },
              {
                order: 2,
                cycleType: "QA_VALIDATION",
                rationale: "Validation",
                certainty: "ENVISIONED" as const,
              },
            ],
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "OK.",
    };
    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-dur-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });

    // Direct execute with USER_MESSAGE + body.forecastJson contradictory → must reject.
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const rejected = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: reserved.userMessageId,
      operation: "PROPOSE_TRAJECTORY",
      forecastJson: [
        {
          order: 1,
          cycleType: "BACKLOG",
          rationale: "forged",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(rejected.status).toBe("REJECTED");
    expect(String(rejected.reason ?? "")).toMatch(/forecastJson|qualification durable/i);

    // Conversational authority without body forecast — durable steps persist.
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: "Maquettes avant validation",
        statement: "Maquettes avant validation",
        semanticIntentId: "i-propose-dur",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);
  });

  it("direct EXPLICIT_INTERACTION forecastJson remains admitted", async () => {
    const world = await seedWorld(`e1f-fc-direct-${Date.now()}`);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire directe légitime",
      forecastJson: [
        {
          order: 1,
          cycleType: "CADRAGE",
          rationale: "Cadrer",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(applied.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.[0]?.cycleType).toBe("CADRAGE");

    const rows = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(
          eq(trajectoryRevisions.projectId, world.projectId),
          eq(trajectoryRevisions.status, "PROPOSED"),
        ),
      );
    expect(rows).toHaveLength(1);
  });
});
```

### EXTRAIT local — e1-ensemble RETAIN_VIS (attendu proposed=null)
```typescript
344:  it("B.6 retain distinguishes envisaged vs retained", async () => {
345-    const world = await seedOwnedProject(`e1-b6-retain-${Date.now()}`);
346-    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
347-    const proposed = await executePilotageCommand(world.pilotId, world.projectId, {
348-      clientCommandKey: newId("ck"),
349-      expectedRevision: rev,
350-      sourceKind: "COGNITIVE_PROPOSAL",
```

### DIFF docs (as-built / delivery / registre) — têtes
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d0adfbd..fc0b5bf6 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,40 @@
+## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV
+
+- **date_local**: 2026-11-27 (Europe/Paris)
+- **lane**: DEV only — macro-lot correctif intégré (17 MP + continuité Morris)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `58ca9486003805f74e69a0842f2c0792a7184437`
+- **tree/diff**: worktree dirty (construction in progress) — NOT identical to HEAD commit
+- **schema_revision**: unchanged (no migration)
+- **build_DEV**: `next dev` :3100 (Turbopack) — not an immutable release build
+- **portée**: axes A–D — allocation Option C env-gated ; multi-intent command keys ; context efficiency ; work terminalisation ; FinOps projections ; parentSubjectId capitalisation ; shared composer + prep dictation ; panneau droit Repères ; rail settings ; restitution naturelle ; typographie ; spinner
+- **tests**: 88+ focused unit PASS (policy, FinOps, terminal, composer, dictation session, MP-09 keys/bindings, recent items, restitution, A.4)
+- **browser_DEV**: sas — Paramètres menu + mic « Dicter un message » visibles (auto-session)
+- **réserves**: LIVE OpenAI non autorisé (allocation réelle, dictée Realtime, autonomie hiérarchie naturelle, réutilisation cognitive LIVE) ; embedding hybrid derivedUsed=false → E2 ; UX panneau → E3 ; RECETTE inchangée ; NO project commit
+- **classe**: NO RELEASE
+- **E1_périmètre** (2026-11-27, ensemble Continuité cognitive B.1–B.8 uniquement):
+  - même tour parent+enfant (`subject-proposal-batch` + `precreateBatchSubjects`);
+  - reparent/rename via capitalisation SUBJECT existant;
+  - PROPOSE_TRAJECTORY USER_MESSAGE sans body objective (gate durable);
+  - compteurs décisions applicables (supersede uniquement si successeur APPLICABLE);
+  - `openPointShortTitle` pour E3; B.7 PREFERRED + omit marker;
+  - suite E1 focalisée: **52 PASS** (unit+PG B.1–B.8) puis **58 PASS** rapportés handoff `d08fc94e`
+- **E1_complément_reliquats** (2026-11-27, E1-REL-01…09 — même livraison, pas de nouvelle DELIV):
+  - E1-REL-01: merge/split/detach raccordés via `subjectOrganization` → propriétaires D4;
+  - E1-REL-02: refus subjectId invalide/étranger ; conflit id/titre ; fence rename/merge/split/reparent ; rename fail non masqué;
+  - E1-REL-04: `openPointTitle` → `provenance.canonicalTitle` + shortTitle projection;
+  - E1-REL-05: `forecastSteps` durable → ClassifiedCommand → PG ; RETAIN supersède PROPOSED (RETAIN_VIS);
+  - E1-REL-03/06/07/08: raccordements vérifiés ; preuves naturelles → registre recette ; DOM :3100 HTTP 500 tooling;
+  - E1-REL-09: as-built + registre + delivery-history synchronisés;
+  - tests complément: `e1-reliquats-integrity.pg.test.ts` **5 PASS** + non-régression B.5/B.6 (**10 PASS**) + B.7/B.8 PG (**3 PASS**) + units E1/projection;
+  - état testé: DETERMINISTIC PROVEN ciblé ; LIVE/navigateur NON PROUVÉS ; RECETTE préservée
+- **E1_final_safeguards** (2026-11-27, 3 contrôles — même livraison):
+  - merge: réparent enfants ACTIVE + refus cycle ancêtre→descendant ;
+  - forecast USER_MESSAGE: refuse body.forecastJson ; mutate ignore body hors chemins directs ;
+  - tests: `e1-final-safeguards.pg.test.ts` **5 PASS** + non-régression reliquats/ensemble/ml2-corrective (**38 PASS** lot) ;
+  - Review Pack régularisé (RETAIN + fichiers delta)
+- **statut**: E1 SÉCURISATION FINALE DEV — READY FOR REVIEW (ChatGPT) avant gate E2; Livraison 1 NOT ACCEPTED; NO RELEASE
+
 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

 - **date_utc**: 2026-11-27T10:00Z
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a22275cd..9a4912c3 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.29 candidate — 27 novembre 2026 : **RECETTE operational activation A1–A6** (`e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · PG password rotated · flags LIVE · index borné 10 chunks · WEB/Admin OFF) — **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING** ; v0.28 : cutover ; v0.27 : dictation nominal path final DEV ; … |
+| Version | v0.30 candidate — 27 novembre 2026 : **DEV macro-lot correctif intégré continuité/fiabilité** (17 MP MaintiPlan + arbitrages Morris) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` — Option C env-gated ; multi-intent bindings ; shared composer + prep dictation ; panneau Repères ; rail settings ; restitution naturelle ; FinOps/A.4/A.5 DET — **CONSTRUCTION DEV — READY WITH RESERVES (LIVE gates ouverts)** ; v0.29 : RECETTE operational activation A1–A6 ; v0.28 : cutover ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
@@ -428,6 +428,36 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
 | R-PROV-01 | 26/11/2026 | ML5 politique cognitive provisoire v0.1 + qualification intégrée A/B/E/F LIVE | `sfia/next-ml5-integrated-delivery-20261123` · base `4f1bb0f2` · DEV build `-8zagoVhrLvhtuKL7ThVc` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | Politique v0.1 · FinOps WEB attribution · LIVE Terra→Sol · WEB gate dossier | DEV CANDIDATE — PROVISIONAL POLICY QUALIFIED IN DEV — WEB GATE PENDING — C/D différés |
 | R-AT-CAP | 25/11/2026 | ML5 Nora×Studio capability interactions — AssetTrack AT-01…13 (AT-10 retirée) · Option B+A+C | `sfia/next-ml5-integrated-delivery-20261123` · base `0d37b12a` · DEV build `BMd8qv-bn6m9Hj6YEtdee` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | AT-01…13 · PREPARE documentaire · forecast cognitif · LIVE activité · Git REAL RO | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW ; RECETTE `ca0b114c` préservée |
+| R-E1 | 27/11/2026 | E1 Continuité cognitive B.1–B.8 (MP-03/10/12/13 + interfaces) — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty ; no project commit | Review Pack E1 → `sfia/review-handoff` (publish-in-cycle) | B.1–B.8 · oracles 1–18 (E1 niveau) · suite 52 PASS unit/PG | E1 DETERMINISTIC PROVEN partiel ; autonomie LIVE NON PROUVÉE ; embedding residual → E2 ; UX panneau → E3 ; Livraison 1 NOT ACCEPTED |
+| R-E1r | 27/11/2026 | E1 complément neuf reliquats E1-REL-01…09 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1r → `sfia/review-handoff` (publish-in-cycle) | E1-REL-01…09 · e1-reliquats 5 PASS + non-régression B.5–B.8 | E1 COMPLÉMENT — DETERMINISTIC PROVEN ciblé ; preuves naturelles → recette ; LIVE/DOM NON PROUVÉS ; E2 non engagé |
+| R-E1f | 27/11/2026 | E1 sécurisation finale — merge enfants + forecast USER_MESSAGE + pack | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1f → `sfia/review-handoff` | merge reparent/cycle · BODY_FORECASTJSON refuse · e1-final-safeguards 5 PASS | E1 FINAL SAFEGUARDS — DET PROVEN ; R-REC-E1-01/02 conservés ; E2 non engagé |
+
+### E1 — lignes de couverture (2026-11-27)
+
+| Capacité | Niveau E1 | Preuve | Reliquat |
+| --- | --- | --- | --- |
+| B.1 Capitalisation sélective | RACCORDÉ DET | extractKnowledgeProposals + maybeCapitalize ; unit e1-b1 | Autonomie qualification LIVE |
+| B.2 Arborescence | RACCORDÉ DET | same-turn parent/child PG ; reparent capitalisation+API ; **merge/split/detach via subjectOrganization** (E1-REL-01) | Pertinence cognitive naturelle → recette |
+| B.3 Synthèses/acquis | EXISTANT+EXERCÉ | summarize/capitalize/supersede paths ; intégrité refs (E1-REL-02) | Consolidation CampusNova-like → recette |
+| B.4 Points ouverts | RACCORDÉ DET | open/resolve PG ; **canonicalTitle** + shortTitle (E1-REL-04) | Accès UX E3 |
+| B.5 Décisions durables | RACCORDÉ DET | e1-ensemble-b5-b6 PG (record/revise/revoke/négatifs) | Reconnaissance naturelle → recette |
+| B.6 Trajectoire vivante | RACCORDÉ DET | propose/retain/open ; **forecastSteps conversationnel + RETAIN_VIS** (E1-REL-05) | Orientation naturelle → recette |
+| B.7 Réutilisation | RACCORDÉ DET | PREFERRED + omit marker PG ; outils D4 exposés | Mesure T08 / hybrid embedding → E2+recette |
+| B.8 Projections | RACCORDÉ DET | filterApplicableDecisions + library identity + shortTitle | DOM :3100 HTTP 500 tooling ; E3 multi-types |
+
+### E1-REL — matrice complément (2026-11-27)
+
+| ID | Exigence | État | Validation | Preuve restante |
+| --- | --- | --- | --- | --- |
+| E1-REL-01 | Réorganisation complète | IMPLEMENTED + DET PROVEN (merge) | e1-reliquats merge | Pertinence naturelle merge/split → recette |
+| E1-REL-02 | Intégrité D4 | IMPLEMENTED + DET PROVEN | invalid id, conflict, fence | — |
+| E1-REL-03 | Capitalisation réelle | IMPLEMENTED + VERIFIED BY INSPECTION | chaîne extract→D4 ; tests E1 | Conversation réelle → recette |
+| E1-REL-04 | Titre point ouvert | IMPLEMENTED + DET PROVEN | canonicalTitle PG + unit | Affichage DOM → recette/E3 |
+| E1-REL-05 | Trajectoire forecast+retain | IMPLEMENTED + DET PROVEN | forecast USER_MESSAGE ; RETAIN_VIS | Réorientation naturelle → recette |
+| E1-REL-06 | D6 complémentaire | VERIFIED BY INSPECTION + DET antérieur | e1-ensemble-b5-b6 | Actes naturels T07 → recette |
+| E1-REL-07 | Réutilisation D4 tools | VERIFIED BY INSPECTION + DET B.7 | tools exposés ; PREFERRED | Sélection naturelle → recette |
+| E1-REL-08 | Projections | VERIFIED BY INSPECTION | counters/identity/shortTitle code | DOM DEV bloqué tooling |
+| E1-REL-09 | Documentation | IMPLEMENTED | as-built + delivery + registre | Review Pack L3 |

 Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.


## FIN Review Pack E1 final safeguards
ChatGPT: lire sfia/review-handoff après L3. Acquis E1r: 108044ef / 95ef9e14.
