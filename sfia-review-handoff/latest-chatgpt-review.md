# Review Pack FULL — SFIA Studio Next — E1 complément reliquats E1-REL-01…09

## Meta
- **date_local**: 2026-11-27T18:18:00+0100
- **date_utc**: 2026-11-27T17:18:00Z
- **cycle**: 8 — Delivery / Critical / EVOL complément E1
- **profil**: Critical
- **livraison**: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV (même entrée — pas de nouvelle DELIV)
- **mandat**: Macro-lot correctif Ensemble 1/5 — complément neuf reliquats ChatGPT revue E1
- **acquis antérieurs**: handoff `d08fc94e` / blob `7c05e3d5` (58 PASS E1) — préservés
- **E2**: NON ENGAGÉ
- **classe**: NO RELEASE — STABLE NOT AVAILABLE — NOT ADOPTED
- **commit projet**: INTERDIT — handoff L3 uniquement

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree DEV | /Users/morris/Projects/sfia-wt-next-ml5-20261123 |
| Branche | sfia/next-ml5-integrated-delivery-20261123 |
| HEAD local | 58ca9486003805f74e69a0842f2c0792a7184437 |
| Main distant | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Docs tip | 0a877d62e2da8d927e61b4ff572c1f70ff893988 |
| Handoff tip avant | d08fc94e1619c5593fa65188e1e3dd091fa326ba / blob 7c05e3d5 |
| Staged | aucun staged inattendu |
| Worktree | dirty (acquis E1 + complément) — expected |
| RECETTE wt | /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa — préservé |

**Verdict Git**: TRUTH OK — reprise sur dirty attendu ; delta complément distinct des acquis A–D/E1.

## 2. ENV-01

| Surface | État |
| --- | --- |
| DEV app :3100 | HTTP 500 (turbopack / tooling) — inchangé |
| DEV PG :5433 | LISTEN |
| RECETTE :3200 | HTTP 307 (préservée — aucune mutation) |
| RECETTE PG :5434 | LISTEN |
| STUDIO_LANE | DEV |
| LIVE / WEB / embeddings | NON émis |

**Verdict ENV**: ENV ROUTING COMPLETE — preuve DOM DEV reportée (tooling gap).

## 3. Product versioning

- Classe: NO RELEASE
- Entrée complétée: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV
- Section `E1_complément_reliquats` ajoutée (pas de nouvelle livraison)

## 4. Sources (Git Review Index proportionné)

| Source | Ref | Rôle | Statut |
| --- | --- | --- | --- |
| suivi-macro-lot…md | 0a877d62 / blob 538071a9 §9.1 | 9 reliquats | LU — non modifié |
| continuite-cognitive…md | blob 1a5f822f | Contrats | LU — non modifié |
| handoff E1 | d08fc94e | Acquis | RÉFÉRENCÉ |
| e1-continuite-cognitive-as-built.md | local | As-built | MIS À JOUR |
| SEF / product-versioning / ENV-01 | main 997897fd | Gouvernance | LU |

## 5. État d'entrée

- E1 PARTIEL — NOT READY E2 (revue ChatGPT)
- REVIEW HANDOFF INCOMPLETE docs (précédent) — régularisé ici
- 9 reliquats ouverts §9.1
- GO Morris complément DEV + qualification proportionnée

## 6. Matrice E1-REL-01…09

| ID | Exigence | Entrée | Constat | Correction | Fichier clé | Mécanisme | Validation | Résultat | Preuve restante | Risque | Next |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E1-REL-01 | Réorganisation | merge/split API only | OK | subjectOrganization→D4 owners | knowledge/service.ts | MERGE/SPLIT/DETACH | PG merge | DET PROVEN | pertinence naturelle | bas | recette |
| E1-REL-02 | Intégrité D4 | risques revue | confirmés puis levés | fail invalid id; conflict; fence; no AVAILABLE mask | knowledge/service.ts journal.ts | assert+fence | PG négatifs | DET PROVEN | — | bas | — |
| E1-REL-03 | Capitalisation | inject-only fear | chaîne extract→D4 réelle | champs étendus + path inspection | semantic-qualification + service | d4.record_knowledge | inspection+E1 | IMPLEMENTED | conversation réelle | moyen | recette |
| E1-REL-04 | Titre OP | editorial trunc | gap | canonicalTitle provenance | project-activity-projection | openPointTitle | PG+unit | DET PROVEN | DOM | bas | recette/E3 |
| E1-REL-05 | Trajectoire | forecastJson absent USER_MESSAGE; RETAIN_VIS | confirmé | forecastSteps durable; supersede PROPOSED | pilotage/service.ts types | ClassifiedCommand.forecastSteps | PG | DET PROVEN | réorientation naturelle | bas | recette |
| E1-REL-06 | D6 | acquis record/revise/revoke | OK | pas de nouvelle autorité; non-régression | e1-ensemble-b5-b6 | D6 owner | PG 10 PASS | DET antérieur | T07 naturel | bas | recette |
| E1-REL-07 | Réutilisation | PREFERRED+omit | OK | tools D4 exposés (inspection) | d4-read-tools | search/read | B.7 PG | VERIFIED | sélection naturelle; hybrid→E2 | moyen | recette/E2 |
| E1-REL-08 | Projections | counters/identity | code OK; DOM 500 | shortTitle+identity vérifiés | project-context | projections | unit+inspection | VERIFIED | DOM tooling | moyen | recette |
| E1-REL-09 | Docs | pack docs manquants | confirmé | as-built+delivery+registre+pack | construction/* as-built | sync | inspection | IMPLEMENTED | — | bas | L3 |

## 7. Fake / Real

| Fake | Real boundary | Parité | Gap | Exercé |
| --- | --- | --- | --- | --- |
| Qualification injectée | LIVE Nora | paramètres typés | autonomie sémantique | DET |
| PG DEV/E2E | PG RECETTE | schéma | données métier | DET |
| Navigateur | :3100 | — | HTTP 500 | NON |

Claims: IMPLEMENTED / COVERAGE VERIFIED / DETERMINISTIC PROVEN ciblé.
Interdits: READY FOR REAL / END-TO-END REAL / Livraison 1 acceptée / ADOPTED.

## 8. Preuves reportées en recette (obligatoire)

### R-REC-E1-01 — Continuité conversationnelle naturelle
- Exigences: E1-REL-03/01/04/05/06/07/08
- Mécanismes disponibles: capitalisation, org, titre, forecast, D6, tools D4, projections
- Vérif technique: DET PG + inspection raccordements
- Raison report: pertinence cognitive non simulable utilement
- Parcours: démarrer projet test → thèmes → sous-sujets → correction acquis → consolidation → merge/reorg → résoudre OP → décision → réorienter trajectoire → reprise → vérifier Journal/Projet/Trajectoire/Travail
- Critère succès: Nora capitalise/sélectionne sans déclencheurs administratifs; Studio persiste; écrans cohérents
- Critère échec: mutation absente/incorrecte; proposition concurrente après retain; titre OP absurde; fuite interprojet
- Gate Morris: OUI avant acceptation Livraison 1
- LIVE isolé: NON proposé (même preuve en recette)

### R-REC-E1-02 — DOM DEV / surfaces
- Exigence: E1-REL-08
- Blocage: :3100 HTTP 500 tooling
- Alternative: qualify:start si Morris le demande
- Ne remplace pas cohérence code (corrigée)

## 9. Réserves

| ID | Classe | Cause | Impact | Action | Responsable | Exit |
| --- | --- | --- | --- | --- | --- | --- |
| R-E1-LIVE | C | autonomie LIVE non exercée | pas READY FOR REAL | recette naturelle | Morris/Pilote | conversation réussie |
| R-E1-DOM | E | :3100 HTTP 500 | pas preuve DOM | tooling ou qualify:start | Cursor/Morris | HTTP 200 + parcours |
| R-E1-HYBRID | D | derivedUsed=false | E2 | E2 | Cursor E2 | mesure E2 |
| R-E1-E3 | D | panneau UX | E3 | E3 | Cursor E3 | F2 E3 |

Aucune réserve acceptée par Cursor. GO proportionné ≠ acceptation.

## 10. Validations exécutées (ce mandat)

| Commande | Env | Exit | Portée |
| --- | --- | --- | --- |
| vitest unit e1-b1 + e1-b5-b6 + e1-b7-b8 + project-activity-projection | DEV | 0 — 32 PASS | units |
| vitest e1-reliquats-integrity.pg | DEV PG | 0 — 5 PASS | complément |
| vitest e1-ensemble-b5-b6.pg | DEV PG | 0 — 10 PASS | non-régression D5/D6 |
| vitest e1-continuity-b7-b8.pg | DEV PG | 0 — 3 PASS | non-régression |
| vitest e1-continuity-integrated.pg | DEV PG | 0 — 1 PASS | chaîne |
| tsc --noEmit | DEV | erreurs antérieures hors delta E1r | delta clean |
| git diff --check (fichiers delta) | local | 0 | whitespace |

## 11. Review Pack Content Coverage

| Contenu | Présent |
| --- | --- |
| Diffs knowledge/service.ts | OUI §DIFFS |
| Diffs semantic-qualification | OUI |
| Diffs pilotage/service+types | OUI |
| Diffs journal reparent fence | OUI |
| Diffs project-activity-projection + project-context | OUI |
| Diffs nora-adapter guidance | OUI |
| Test e1-reliquats nouveau | OUI (fichier complet) |
| Test e1-ensemble retain expectation | OUI |
| Docs as-built / delivery / registre | OUI |
| Matrice 9 reliquats | OUI |
| Recette registry | OUI |

## 12. Verdict Cursor

**READY FOR REVIEW** — complément E1.

Conditions: 9 reliquats réconciliés ; mécanismes construits ; risques critiques maîtrisés ; DET proportionné ; acquis préservés ; preuves recette identifiées ; docs sync ; pack complet.

Ne vaut pas: LIVE, RECETTE mutation, acceptation Livraison 1, E2 GO.

---

## DIFFS — fichiers du complément

### git diff --stat (fichiers cœur)
 .../construction/delivery-history.md               |  32 ++
 ...5-registre-couverture-et-revue-developpement.md |  31 +-
 .../web/src/domains/conversation/nora-adapter.ts   |  10 +-
 .../domains/conversation/semantic-qualification.ts | 152 +++++-
 .../web/src/domains/knowledge/journal.ts           |  12 +-
 .../web/src/domains/knowledge/service.ts           | 557 +++++++++++++++++++--
 .../web/src/domains/pilotage/service.ts            |  79 ++-
 .../web/src/domains/pilotage/types.ts              |   2 +
 .../web/src/domains/preparation/project-context.ts |  31 +-
 9 files changed, 824 insertions(+), 82 deletions(-)

### FULL DIFF — pilotage/types.ts
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
index 12022224..4ba7a403 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
@@ -116,6 +116,8 @@ export type ClassifiedCommand = {
   balanceNote: string;
   actInstanceId: string;
   objectRef: string;
+  /** E1-REL-05 — structured forecast from durable qualification (USER_MESSAGE) or body. */
+  forecastSteps?: ForecastStep[];
 };

 export type TrajectoryView = {

### FULL DIFF — project-context.ts (extrait openPoints)
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index a50bd368..a2a69c2a 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -7,6 +7,13 @@ import { listDocuments } from "@/domains/document/service";
 import { listProjectKnowledge } from "@/domains/knowledge/journal";
 import { getPilotageProjection } from "@/domains/pilotage/service";
 import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  countOpenKnowledgePoints,
+  countProjectLibraryDocuments,
+  filterApplicableHumanDecisions,
+  openPointShortTitle,
+  projectLibraryDocumentExamples,
+} from "@/domains/preparation/project-activity-projection";

 /**
  * Owner-scoped project reopen: durable projectId → linked preparation + same thread + documents.
@@ -66,6 +73,9 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     openPoints: knowledgeBundle.openPoints.map((o) => ({
       id: o.id,
       statement: o.statement,
+      shortTitle: openPointShortTitle(o.statement, 72, {
+        provenanceJson: o.provenanceJson,
+      }),
       status: o.status,
       subjectId: o.subjectId,
     })),
@@ -81,23 +91,17 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       id: humanDecisions.id,
       statement: humanDecisions.statement,
       state: humanDecisions.state,
+      kind: humanDecisions.kind,
       supersedesDecisionId: humanDecisions.supersedesDecisionId,
     })
     .from(humanDecisions)
     .where(eq(humanDecisions.projectId, projectId))
     .orderBy(desc(humanDecisions.createdAt));

-  const supersededIds = new Set(
-    decisionRows.map((d) => d.supersedesDecisionId).filter(Boolean) as string[],
-  );
-  const applicableDecisions = decisionRows.filter(
-    (d) => d.state === "APPLICABLE" && !supersededIds.has(d.id),
-  );
+  const applicableDecisions = filterApplicableHumanDecisions(decisionRows);

   const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
-  const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
-  // FIX-11 — "en cours" = actively writing (SAVING), not FAILED/UNKNOWN/AVAILABLE.
-  const docsInProgress = documents.filter((d) => d.latestRevision?.status === "SAVING");
+  const openPointsCount = countOpenKnowledgePoints(knowledge.openPoints);

   const activity = {
     openSubjects: {
@@ -109,13 +113,10 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
     },
     documentsInProgress: {
-      count: docsInProgress.length,
-      examples: docsInProgress.slice(0, 2).map((d) => ({
-        id: d.document.id,
-        title: d.document.title,
-      })),
+      count: countProjectLibraryDocuments(documents),
+      examples: projectLibraryDocumentExamples(documents),
     },
-    openPointsCount: openPoints.length,
+    openPointsCount,
   };

   return {

### FULL DIFF — journal.ts reparent fence
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
index 51a13963..66364d76 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
@@ -27,6 +27,7 @@ import {
   type ExtendedProvenance,
 } from "@/domains/knowledge/journal-cognition";
 import { extractSourcedMotivationFromMessage } from "@/domains/knowledge/journal-editorial";
+import { buildSupersededDecisionIds } from "@/domains/preparation/project-activity-projection";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";

@@ -805,6 +806,7 @@ export async function reparentSubject(
   projectId: string,
   subjectId: string,
   newParentSubjectId: string | null,
+  turnFence?: import("@/domains/conversation/turn-command").TurnOwnershipFence,
 ) {
   const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
   if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
@@ -824,6 +826,11 @@ export async function reparentSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (turnFence) {
+        const { assertTurnFenceInTx } = await import("@/domains/conversation/turn-command");
+        const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
       );
@@ -1130,9 +1137,10 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
     .where(eq(humanDecisions.projectId, projectId))
     .orderBy(desc(humanDecisions.createdAt));

+  const supersededDecisionIds = buildSupersededDecisionIds(decisionRows);
   const supersededBy = new Map<string, string>();
   for (const d of decisionRows) {
-    if (d.supersedesDecisionId) {
+    if (d.state === "APPLICABLE" && d.supersedesDecisionId) {
       supersededBy.set(d.supersedesDecisionId, d.id);
     }
   }
@@ -1140,7 +1148,7 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
   const decisions = [];
   for (const d of decisionRows) {
     const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
-    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
+    const applicable = d.state === "APPLICABLE" && !supersededDecisionIds.has(d.id);
     const originSources: Array<{
       ownerKind: "decision";
       ownerId: string;

### FULL DIFF — semantic-qualification.ts (reliquat params)
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 71ce7746..ce5a6b51 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -149,6 +149,15 @@ export const QualifiedIntentItemSchema = z.object({
       epistemic: KnowledgeEpistemicSchema.optional(),
       subjectTitle: z.string().max(120).optional(),
       subjectId: z.string().max(120).optional(),
+      /**
+       * Optional parent for SUBJECT hierarchy (sous-sujet).
+       * Accepted forms (Studio resolves, never invents ids):
+       * - existing subject id (subj_*) in the same preparation;
+       * - intent id of another SUBJECT proposal in the same qualification;
+       * - exact subjectTitle of a co-proposed or already ACTIVE parent.
+       * Same-turn parent+child is supported when both are proposed together.
+       */
+      parentSubjectId: z.string().max(120).optional(),
       /** Soft target ~240. */
       continuityReason: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
       /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
@@ -159,6 +168,36 @@ export const QualifiedIntentItemSchema = z.object({
       supersedesAcquisId: z.string().max(120).optional(),
       /** When an ACQUIS factually closes an open point, Nora may cite its id. */
       resolvesOpenPointId: z.string().max(120).optional(),
+      /**
+       * E1-REL-04 — short canonical open-point title (métier), distinct from detailed statement.
+       * Studio persists it; display must not re-derive via LLM.
+       */
+      openPointTitle: z.string().max(120).optional(),
+      /**
+       * E1-REL-01 — organization op on SUBJECT (uses existing D4 merge/split/reparent owners).
+       * MERGE: subjectId=target, mergeSourceSubjectId=source.
+       * SPLIT: subjectId=source, subjectTitle=new title; optional relevantAcquisIds/openPointIds.
+       * DETACH: subjectId existing → parent cleared (root).
+       */
+      subjectOrganization: z.enum(["MERGE", "SPLIT", "DETACH"]).optional(),
+      mergeSourceSubjectId: z.string().max(120).optional(),
+      /**
+       * E1-REL-05 — structured trajectory forecast steps for PROPOSE_TRAJECTORY.
+       * Durable qualification only — never invented from free body.
+       */
+      forecastSteps: z
+        .array(
+          z
+            .object({
+              order: z.number().int().min(1).max(24).optional(),
+              cycleType: z.string().max(64),
+              rationale: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
+              certainty: z.enum(["QUALIFIED", "ENVISIONED", "HYPOTHESIS"]).optional(),
+            })
+            .strict(),
+        )
+        .max(12)
+        .optional(),
       /**
        * C18 — dedicated Cursor technical instruction on prepare_cursor_contract.
        * Prefer this over top-level productionInstruction when emitting the intent.
@@ -624,8 +663,87 @@ export type DurablePilotageBinding = {
   restrictionKindHint?: string;
   restrictionTargetRefHint?: string;
   objective?: string;
+  /** Structured forecast from durable qualification (PROPOSE_TRAJECTORY). */
+  forecastSteps?: Array<{
+    order?: number;
+    cycleType: string;
+    rationale?: string;
+    certainty?: "QUALIFIED" | "ENVISIONED" | "HYPOTHESIS";
+  }>;
 };

+function pilotageBindingFromIntent(
+  intent: QualifiedIntentItem,
+): DurablePilotageBinding | { ambiguous: true; reason: string } {
+  const operation = intent.parameters.pilotageOperation;
+  if (!operation) {
+    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
+  }
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    intentId: intent.id,
+    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
+    operation,
+    cycleType: intent.parameters.cycleType,
+    toCycleType: intent.parameters.toCycleType,
+    methodRef: intent.parameters.methodRef,
+    methodVersion: intent.parameters.methodVersion,
+    decisionId: intent.parameters.decisionId,
+    objectRef: intent.parameters.objectRef,
+    statement: intent.parameters.statement,
+    restrictionKindHint: intent.parameters.restrictionKindHint,
+    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
+    objective: intent.summary,
+    forecastSteps: intent.parameters.forecastSteps,
+  };
+}
+
+/** Stable dependency order among pilotage REQUEST_EFFECT intents (dependsOn within subset). */
+export function orderPilotageEffectIntents(
+  q: NoraTurnQualification,
+  hits: QualifiedIntentItem[],
+): QualifiedIntentItem[] {
+  const subset = new Set(hits.map((h) => h.id));
+  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
+  const visiting = new Set<string>();
+  const visited = new Set<string>();
+  const ordered: string[] = [];
+  const visit = (id: string) => {
+    if (!subset.has(id) || visited.has(id)) return;
+    if (visiting.has(id)) return;
+    visiting.add(id);
+    for (const dep of byId.get(id)?.dependsOn ?? []) {
+      if (subset.has(dep)) visit(dep);
+    }
+    visiting.delete(id);
+    visited.add(id);
+    ordered.push(id);
+  };
+  const stable = [...subset].sort();
+  for (const id of stable) visit(id);
+  return ordered.map((id) => hits.find((h) => h.id === id)!);
+}
+
+/**
+ * MP-09 — every admissible pilotage REQUEST_EFFECT intent on the turn, in dependsOn order.
+ * Never collapses to fail-closed AMBIGUOUS when multiple D5/D6 intents are present.
+ */
+export function listPilotageEffectBindings(q: NoraTurnQualification): Array<
+  DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
+> {
+  if (q.status !== "QUALIFIED") return [];
+  const hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
+  if (hits.length === 0) return [];
+  const ordered = orderPilotageEffectIntents(q, hits);
+  return ordered.map((intent) => {
+    const binding = pilotageBindingFromIntent(intent);
+    if ("ambiguous" in binding) {
+      return { ...binding, intentId: intent.id };
+    }
+    return binding;
+  });
+}
+
 export function extractPilotageBinding(
   q: NoraTurnQualification,
   select?: { intentId?: string; operation?: string },
@@ -653,27 +771,9 @@ export function extractPilotageBinding(
   if (hits.length > 1) {
     return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
   }
-  const intent = hits[0]!;
-  const operation = intent.parameters.pilotageOperation;
-  if (!operation) {
-    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
-  }
-  return {
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
-    intentId: intent.id,
-    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
-    operation,
-    cycleType: intent.parameters.cycleType,
-    toCycleType: intent.parameters.toCycleType,
-    methodRef: intent.parameters.methodRef,
-    methodVersion: intent.parameters.methodVersion,
-    decisionId: intent.parameters.decisionId,
-    objectRef: intent.parameters.objectRef,
-    statement: intent.parameters.statement,
-    restrictionKindHint: intent.parameters.restrictionKindHint,
-    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
-    objective: intent.summary,
-  };
+  const binding = pilotageBindingFromIntent(hits[0]!);
+  if ("ambiguous" in binding) return binding;
+  return binding;
 }

 /** Match a requested operation against durable qualification (owner-side). */
@@ -919,10 +1019,15 @@ export type KnowledgeCapitalisationProposal = {
   epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
   subjectTitle?: string;
   subjectId?: string;
+  parentSubjectId?: string;
   continuityReason?: string;
   supersedesAcquisId?: string;
   resolvesOpenPointId?: string;
   relevantAcquisIds?: string[];
+  relevantOpenPointIds?: string[];
+  openPointTitle?: string;
+  subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
+  mergeSourceSubjectId?: string;
 };

 /**
@@ -950,10 +1055,15 @@ export function extractKnowledgeProposals(
       epistemic: intent.parameters.epistemic ?? "hypothesized",
       subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
       subjectId: intent.parameters.subjectId?.trim() || undefined,
+      parentSubjectId: intent.parameters.parentSubjectId?.trim() || undefined,
       continuityReason: intent.parameters.continuityReason?.trim() || undefined,
       supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
       resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,
       relevantAcquisIds: intent.parameters.relevantAcquisIds?.filter(Boolean),
+      relevantOpenPointIds: intent.parameters.relevantOpenPointIds?.filter(Boolean),
+      openPointTitle: intent.parameters.openPointTitle?.trim() || undefined,
+      subjectOrganization: intent.parameters.subjectOrganization,
+      mergeSourceSubjectId: intent.parameters.mergeSourceSubjectId?.trim() || undefined,
     });
   }
   return out;

### FULL DIFF — pilotage/service.ts
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index 77d2f14c..5b0bf0cd 100644
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
@@ -655,6 +704,7 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       semanticSchemaVersion: matched.schemaVersion,
       cycleType: tryCanonicalCycleType(matched.cycleType),
       toCycleType: tryCanonicalCycleType(matched.toCycleType),
+      forecastSteps: normalizeDurableForecastSteps(matched.forecastSteps),
     };
     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
@@ -776,6 +826,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
     actInstanceId: (body.actInstanceId ?? "").trim(),
     objectRef: (body.objectRef ?? "").trim(),
     sourceActionKey: "",
+    forecastSteps:
+      body.forecastJson && body.forecastJson.length > 0 ? body.forecastJson : undefined,
   };
   command.sourceActionKey = buildSourceActionKey(command);
   return { ok: true, command };
@@ -795,10 +847,13 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie

   if (command.operation === "PROPOSE_TRAJECTORY") {
     const id = newId("trj");
+    // E1-REL-05 — prefer durable ClassifiedCommand.forecastSteps; body only for non-USER paths.
     const forecastJson =
-      input.body.forecastJson && input.body.forecastJson.length > 0
-        ? input.body.forecastJson
-        : null;
+      command.forecastSteps && command.forecastSteps.length > 0
+        ? command.forecastSteps
+        : input.body.forecastJson && input.body.forecastJson.length > 0
+          ? input.body.forecastJson
+          : null;
     await tx.insert(trajectoryRevisions).values({
       id,
       projectId,
@@ -823,6 +878,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
   if (command.operation === "RETAIN_TRAJECTORY") {
     let orientation = command.orientation;
     let retainTargetId = command.trajectoryRevisionId;
+    let retainedForecast: unknown = null;
     if (retainTargetId) {
       const prior = (
         await tx
@@ -833,6 +889,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       )[0];
       if (!prior) return rejected("INVALID_TARGET", "Trajectoire introuvable dans ce projet");
       orientation = orientation || prior.orientation;
+      retainedForecast = prior.forecastJson ?? null;
     } else if (!orientation.trim()) {
       // FIX-08 — conversational GO: resolve current PROPOSED when body has no target
       // (USER_MESSAGE must not carry trajectoryRevisionId / orientation from client).
@@ -852,6 +909,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       if (!proposed) return rejected("INVALID_TARGET", "Aucune trajectoire PROPOSED à retenir");
       retainTargetId = proposed.id;
       orientation = proposed.orientation;
+      retainedForecast = proposed.forecastJson ?? null;
     }
     if (!orientation.trim()) return rejected("INVALID", "Orientation requise");
     const decisionId = await insertHumanDecision(tx, {
@@ -867,6 +925,16 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
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
@@ -877,6 +945,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       sourceKind: command.sourceKind,
       sourceRef: command.sourceRef,
       decisionId,
+      forecastJson: retainedForecast,
       createdAt: now,
     });
     const revision = await bumpRevision(tx, projectId, { id });

### FULL DIFF — nora-adapter.ts (guidance only)
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 4aedc701..2ac1a259 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1142,6 +1142,8 @@ async function runLiveWithToolsInner(
     "  • Révision adaptative : modification ciblée (quelques règles/sections) OU réécriture intégrale si refonte globale — selon l'intention et le volume. Pas de déclencheur lexical.",
     "  • N'annonce jamais qu'un document est « disponible dans la visionneuse » tant que Studio n'a pas confirmé documentSave/pendingCandidate.",
     "- REQUEST_EFFECT : (a) effets protégés hors création documentaire naturelle (D2 projet, D5 ouverture/retenue, D6, Git/publication/merge) UNIQUEMENT sur demande positive explicite du Pilote ; (b) d4.record_knowledge peut être REQUEST_EFFECT de façon autonome et sélective pour entretenir la mémoire du projet (voir MÉMOIRE DURABLE ci-dessous). Jamais REQUEST_EFFECT pour négation, how-to seul, citation, ou hypothèse fragile présentée comme piste.",
+    "- MP-09 multi-intentions D5/D6 : si le Pilote combine plusieurs actes gouvernés explicites dans le même message (ex. ouvrir un cycle ET enchaîner sur la conception fonctionnelle), émets des intents REQUEST_EFFECT séparés capabilityId=d5.pilotage_command (ou d6.human_decision), chacun avec parameters.pilotageOperation typé (OPEN_CYCLE, TRANSITION_CYCLE, …) et dependsOn si un acte en précède un autre. Ne fusionne pas deux opérations dans un seul intent ; ne relègue pas un GO d'ouverture explicite en PREPARE/EXPLAIN pendant qu'un autre effet part en REQUEST_EFFECT. Studio applique chaque binding admissible — pas un seul « gagnant ».",
+    "- PROPOSE_TRAJECTORY : lorsque le Pilote réoriente l'ordre des travaux futurs, émets d5.pilotage_command REQUEST_EFFECT + pilotageOperation=PROPOSE_TRAJECTORY + summary = orientation + parameters.forecastSteps = étapes structurées (cycleType, order, rationale). Studio persiste via D5 — jamais depuis un body client libre. RETAIN_TRAJECTORY uniquement sur GO explicite de retenue.",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Merge documentaire : capabilityId=d7.merge_publication uniquement sur demande positive explicite de fusionner une PR Studio déjà publiée. Renseigner parameters.prNumber ; parameters.repositoryFullName si le Pilote nomme un dépôt. Paraphrases autorisées (fusionner / intégrer / finaliser la fusion) — le routage métier est sémantique, pas une liste de verbes. Jamais d7.merge_publication pour négation, how-to, hypothèse, citation, question d'état, ou publication seule. Publication ≠ merge.",
     "- Contrat technique Cursor : capabilityId=d7.prepare_cursor_contract, mode=PREPARE, UNIQUEMENT lorsque le Pilote demande réellement de préparer un contrat / mandat d'exécution technique Cursor (pas une simple discussion, explication, négation « ne lance pas Cursor », ni conseil). parameters.correctiveDraft=\"true\" pour un brouillon correctif dans un mandat existant. Préparer ≠ autoriser ≠ dispatch. Jamais REQUEST_EFFECT dispatch Cursor ici.",
@@ -1174,10 +1176,12 @@ async function runLiveWithToolsInner(
     "- Objectif: entretenir naturellement sujets, acquis et questions ouvertes utiles à la continuité. Le Pilote n'a pas besoin de dire « mémorise » / « ajoute au Journal ».",
     "- Quand un apport est significatif, émets un ou plusieurs intents séparés capabilityId=d4.record_knowledge, mode=REQUEST_EFFECT, avec parameters.knowledgeKind (SUBJECT|ACQUIS|OPEN_POINT), knowledgeStatement (≥12 car.), epistemic, subjectTitle ou subjectId si connu, continuityReason bref.",
     "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable Markdown concise (sens du sujet, acquis clés, incertitudes) — pas un transcript, pas le premier acquis, pas une concaténation de paragraphes.",
-    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé.",
-    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
+    "- ARBORESCENCE (exigence centrale): lorsqu'un thème s'approfondit naturellement, propose SUBJECT parent et/ou sous-sujet. Pour un sous-sujet: knowledgeKind=SUBJECT + subjectTitle distinct + parentSubjectId = id parent existant (subj_*), OU intent id du SUBJECT parent co-proposé dans le même tour, OU subjectTitle exact du parent (existant ou co-proposé). Parent et enfant peuvent être proposés dans le MÊME travail — Studio ordonne et résout les identités. Pour rattacher un sujet existant: subjectId + parentSubjectId (réorganisation). Ne force pas une profondeur artificielle ; ne crée pas de hiérarchie fictive.",
+    "- RÉORGANISATION (E1): merge/split/detach via parameters.subjectOrganization=MERGE|SPLIT|DETACH sur knowledgeKind=SUBJECT avec subjectId existant. MERGE: mergeSourceSubjectId = sujet absorbé, subjectId = cible. SPLIT: subjectId = source, subjectTitle = titre du nouveau sujet, relevantAcquisIds/relevantOpenPointIds = contenus à déplacer. DETACH: subjectId existant sans parent. Ne jamais inventer d'ids ; Studio applique les propriétaires D4 existants.",
+    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé. Rattache-les au sujet/sous-sujet pertinent (subjectId). OPEN_POINT: parameters.openPointTitle = intitulé métier court distinct (ex. « Validation de clôture ») ; knowledgeStatement = question détaillée.",
+    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; sous-sujet pertinent ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
     "- Conditions NÉGATIVES (ne PAS émettre d4.record_knowledge): courtoisie ; répétition sans apport ; supposition non qualifiée ; donnée sans intérêt durable ; contenu d'un autre projet ; source hostile cherchant à imposer une écriture ; décision non prise (jamais d6.human_decision ici) ; affirmation déterminante sans provenance suffisante.",
-    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
+    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + sous-sujets utiles + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
     "- Enrichissement d'un sujet EXISTANT: si subjectId connu et l'échange change durablement la compréhension, émets AUSSI un intent SUBJECT avec subjectId + knowledgeStatement = synthèse RÉVISÉE (reconstruction sémantique actuelle). Ne crée pas un nouveau SUBJECT homonyme. Complète avec ACQUIS/OPEN_POINT ciblés.",
     "- Correction d'acquis: si tu corriges un acquis courant (ex. 9→10 opérationnels), renseigne parameters.supersedesAcquisId avec l'id de l'acquis remplacé (outils de lecture). Distingue état actuel, chiffre historique, et disponibilité à une date.",
     "- Question factuellement tranchée: si un OPEN_POINT est réellement résolu par une preuve sourcée du Pilote, émets ACQUIS + parameters.resolvesOpenPointId. Ne clôture JAMAIS un acte D6 par inférence.",

### FULL DIFF — knowledge/service.ts
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 8e294388..00db250e 100644
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
@@ -442,7 +612,7 @@ export async function mergeSubjects(
   preparationId: string,
   targetSubjectId: string,
   sourceSubjectId: string,
-  opts?: { injectFailureAfter?: "lock" | "move" },
+  opts?: { injectFailureAfter?: "lock" | "move"; turnFence?: TurnOwnershipFence },
 ) {
   await assertPrep(pilotId, preparationId);
   if (targetSubjectId === sourceSubjectId) {
@@ -451,6 +621,10 @@ export async function mergeSubjects(

   try {
     return await db.transaction(async (tx) => {
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       // Deterministic lock order to avoid deadlocks
       const ids = [targetSubjectId, sourceSubjectId].sort();
       for (const id of ids) {
@@ -542,7 +716,10 @@ export async function splitSubject(
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
@@ -553,6 +730,10 @@ export async function splitSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -1165,9 +1346,16 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1193,6 +1381,21 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1239,9 +1442,45 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1255,6 +1494,175 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1264,7 +1672,7 @@ export async function maybeCapitalizeFromExchange(
           await writeSubjectSummary(
             subjectId,
             p.statement.trim(),
-            check.subject.title.trim(),
+            (p.subjectTitle ?? check.subject.title).trim(),
             p,
           );
           subjectsWithExplicitSummary.add(subjectId);
@@ -1273,7 +1681,17 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1303,44 +1721,113 @@ export async function maybeCapitalizeFromExchange(
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
@@ -1396,7 +1883,7 @@ export async function maybeCapitalizeFromExchange(
       const cap = await capitalizeAcquis(pilotId, preparationId, {
         statement: p.statement,
         kind,
-        subjectId,
+        subjectId: recordSubjectId,
         supersedesAcquisId,
         turnFence: fence,
         provenance: buildExchangeProvenance({
@@ -1436,8 +1923,8 @@ export async function maybeCapitalizeFromExchange(
               ? `SUPERSEDES:${supersedesAcquisId}`
               : undefined,
       });
-      if (cap.status === "AVAILABLE" && subjectId) {
-        subjectsTouchedByAcquis.add(subjectId);
+      if (cap.status === "AVAILABLE" && recordSubjectId) {
+        subjectsTouchedByAcquis.add(recordSubjectId);
       }

       if (p.resolvesOpenPointId && projectId && cap.status === "AVAILABLE") {
@@ -1468,7 +1955,7 @@ export async function maybeCapitalizeFromExchange(
           reason: "reason" in resolved ? String(resolved.reason) : undefined,
           epistemicNote: p.continuityReason,
         });
-        if (subjectId) subjectsTouchedByAcquis.add(subjectId);
+        if (recordSubjectId) subjectsTouchedByAcquis.add(recordSubjectId);
       }
     }
   }

### FULL DIFF — e1-ensemble retain expectation

### FULL DIFF — project-activity-projection unit

### FULL FILE — project-activity-projection.ts (untracked / new in E1)
```typescript
/**
 * ML5 continuity (B.8) — deterministic activity counters for Travail/Projet.
 * One row per document identity; révisions do not inflate the library count.
 */

import { editorialDisplayBullet } from "@/domains/knowledge/journal-editorial";

export type DecisionProjectionRow = {
  id: string;
  state: string;
  statement: string;
  supersedesDecisionId?: string | null;
  kind?: string;
};

/**
 * A decision is superseded only when an APPLICABLE successor carries supersedesDecisionId.
 * Non-APPLICABLE rows (REVISED / FAILED lineage) must not zero activity counters (MaintiPlan).
 */
export function buildSupersededDecisionIds<T extends DecisionProjectionRow>(rows: T[]): Set<string> {
  const out = new Set<string>();
  for (const d of rows) {
    if (d.state === "APPLICABLE" && d.supersedesDecisionId) {
      out.add(d.supersedesDecisionId);
    }
  }
  return out;
}

export function filterApplicableHumanDecisions<T extends DecisionProjectionRow>(
  rows: T[],
  opts?: { kinds?: string[] },
): T[] {
  const superseded = buildSupersededDecisionIds(rows);
  return rows.filter((d) => {
    if (d.state !== "APPLICABLE") return false;
    if (superseded.has(d.id)) return false;
    if (opts?.kinds?.length && d.kind && !opts.kinds.includes(d.kind)) return false;
    return true;
  });
}

/**
 * E3-facing compact label — prefer Nora-qualified canonicalTitle from provenance
 * (E1-REL-04). Fallback editorial truncation for historical rows without title.
 * No LLM call; no schema migration.
 */
export function openPointShortTitle(
  statement: string,
  maxLen = 72,
  opts?: { canonicalTitle?: string | null; provenanceJson?: string | null },
): string {
  const fromOpt = opts?.canonicalTitle?.trim();
  if (fromOpt) return editorialDisplayBullet(fromOpt, maxLen);
  if (opts?.provenanceJson?.trim()) {
    try {
      const parsed = JSON.parse(opts.provenanceJson) as { canonicalTitle?: unknown };
      if (typeof parsed.canonicalTitle === "string" && parsed.canonicalTitle.trim()) {
        return editorialDisplayBullet(parsed.canonicalTitle.trim(), maxLen);
      }
    } catch {
      /* ignore malformed provenance */
    }
  }
  return editorialDisplayBullet(statement, maxLen);
}

export type DocumentListRow = {
  document?: { id: string; title?: string } | null;
};

export function countProjectLibraryDocuments(documents: DocumentListRow[]): number {
  const seen = new Set<string>();
  for (const d of documents) {
    const id = d.document?.id;
    if (id) seen.add(id);
  }
  return seen.size;
}

export function projectLibraryDocumentExamples(
  documents: DocumentListRow[],
  limit = 2,
): Array<{ id: string; title: string }> {
  const seen = new Set<string>();
  const out: Array<{ id: string; title: string }> = [];
  for (const d of documents) {
    const id = d.document?.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push({ id, title: d.document!.title ?? "Sans titre" });
    if (out.length >= limit) break;
  }
  return out;
}

export function openKnowledgePoints<T extends { status: string }>(points: T[]): T[] {
  return points.filter((p) => p.status === "OPEN");
}

export function countOpenKnowledgePoints<T extends { status: string }>(points: T[]): number {
  return openKnowledgePoints(points).length;
}

/** Travail aside — at most five compact titles, same OPEN population as Journal. */
export function travailAsideOpenPoints<T extends { id: string; statement: string; status: string }>(
  points: T[],
  max = 5,
): T[] {
  return openKnowledgePoints(points).slice(0, max);
}```

### FULL FILE — e1-reliquats-integrity.pg.test.ts (nouveau)
```typescript
/**
 * E1 complément — E1-REL-01/02/04/05 deterministic integrity proofs.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjects,
  pilots,
  preparations,
  trajectoryRevisions,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { getPreparationContext } from "@/domains/preparation/service";
import { openPointShortTitle } from "@/domains/preparation/project-activity-projection";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  getPilotageProjection,
  retainTrajectory,
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
  await updatePreview(pilotId, prep.id, label, "e1-reliquats");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-reliquats",
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

describe("E1 reliquats — D4 integrity + org + title + forecast", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL?.includes("5433") && !process.env.DATABASE_URL?.includes("sfia_next")) {
      throw new Error("Expected DEV/E2E DATABASE_URL");
    }
  });

  it("E1-REL-02 invalid subjectId does not create or inherit subject", async () => {
    const world = await seedWorld(`e1r-inv-${Date.now()}`);
    const parent = await ensureSubject(world.pilotId, world.preparationId, "Parc informatique");
    expect(parent.status).toBe("AVAILABLE");
    const before = await db
      .select({ id: knowledgeSubjects.id })
      .from(knowledgeSubjects)
      .where(eq(knowledgeSubjects.preparationId, world.preparationId));

    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "note",
        assistantText: "ok",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-bad-subj",
            kind: "SUBJECT",
            statement: "Synthèse d'un sujet fantôme qui ne doit pas être créé",
            epistemic: "hypothesized",
            subjectId: "subj_does_not_exist_xyz",
            subjectTitle: "Sujet fantôme",
          },
          {
            intentId: "i-bad-acq",
            kind: "ACQUIS",
            statement: "Cet acquis ne doit pas s'attacher à un sujet précédent",
            epistemic: "hypothesized",
            subjectId: "subj_foreign_other_prep",
          },
        ],
      },
    );

    expect(result.capitalisations.some((c) => c.status === "FAILED")).toBe(true);
    expect(
      result.capitalisations.find((c) => c.kind === "subject")?.reason,
    ).toMatch(/FOREIGN|UNKNOWN/);
    expect(
      result.capitalisations.find((c) => c.kind === "acquis")?.status,
    ).toBe("FAILED");

    const after = await db
      .select({ id: knowledgeSubjects.id })
      .from(knowledgeSubjects)
      .where(eq(knowledgeSubjects.preparationId, world.preparationId));
    expect(after.length).toBe(before.length);

    const acquis = await db
      .select()
      .from(knowledgeAcquis)
      .where(eq(knowledgeAcquis.preparationId, world.preparationId));
    expect(acquis).toHaveLength(0);
  });

  it("E1-REL-01 merge via capitalisation preserves target and absorbs source", async () => {
    const world = await seedWorld(`e1r-merge-${Date.now()}`);
    const a = await ensureSubject(world.pilotId, world.preparationId, "Incidents majeurs");
    const b = await ensureSubject(world.pilotId, world.preparationId, "Incidents mineurs");
    expect(a.status).toBe("AVAILABLE");
    expect(b.status).toBe("AVAILABLE");
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "Un incident mineur a été enregistré hier soir sur le site A",
      subjectId: b.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "fusionne les sujets incidents",
        assistantText: "fusion effectuée",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-merge",
            kind: "SUBJECT",
            statement: "Incidents unifiés — majeurs et mineurs dans le même périmètre",
            epistemic: "hypothesized",
            subjectId: a.subjectId!,
            subjectOrganization: "MERGE",
            mergeSourceSubjectId: b.subjectId!,
          },
        ],
      },
    );

    const merge = result.capitalisations.find((c) => c.kind === "subject_merge");
    expect(merge?.status).toBe("AVAILABLE");

    const source = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, b.subjectId!))
        .limit(1)
    )[0];
    expect(source?.status).toBe("MERGED");

    const moved = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, world.preparationId),
          eq(knowledgeAcquis.subjectId, a.subjectId!),
        ),
      );
    expect(moved.length).toBeGreaterThanOrEqual(1);
  });

  it("E1-REL-04 openPointTitle persisted and preferred by shortTitle helper", async () => {
    const world = await seedWorld(`e1r-title-${Date.now()}`);
    const detailed =
      "Quelles catégories d'interventions nécessitent une validation supplémentaire après le compte rendu du technicien ?";
    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: detailed,
        assistantText: "point ouvert",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-op",
            kind: "OPEN_POINT",
            statement: detailed,
            epistemic: "limited",
            openPointTitle: "Validation de clôture",
          },
        ],
      },
    );
    const op = result.capitalisations.find((c) => c.kind === "open_point");
    expect(op?.status).toBe("AVAILABLE");
    expect(op?.id).toBeTruthy();

    const row = (
      await db
        .select()
        .from(knowledgeOpenPoints)
        .where(eq(knowledgeOpenPoints.id, op!.id!))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prov = JSON.parse(row!.provenanceJson) as { canonicalTitle?: string };
    expect(prov.canonicalTitle).toBe("Validation de clôture");
    expect(openPointShortTitle(row!.statement, 72, { provenanceJson: row!.provenanceJson })).toBe(
      "Validation de clôture",
    );
    // Historical fallback without canonical title still works.
    expect(openPointShortTitle(detailed, 40).length).toBeLessThanOrEqual(42);
  });

  it("E1-REL-05 conversational PROPOSE transmits forecastSteps from durable qual", async () => {
    const world = await seedWorld(`e1r-fc-${Date.now()}`);
    const content =
      "Finalement, je préférerais travailler sur les maquettes avant de passer à la validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose trajectory",
      intents: [
        {
          id: "i-propose-fc",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Maquettes UX avant validation QA",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            forecastSteps: [
              {
                order: 1,
                cycleType: "UX_UI",
                rationale: "Maquettes avant validation",
                certainty: "QUALIFIED" as const,
              },
              {
                order: 2,
                cycleType: "QA_VALIDATION",
                rationale: "Validation ensuite",
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
      replyDraft: "Je propose d'avancer les maquettes avant la validation.",
    };

    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });
    if (!stashed.applied) throw new Error("qualification stash failed");

    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: "Maquettes UX avant validation QA",
        statement: "Maquettes UX avant validation QA",
        semanticIntentId: "i-propose-fc",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");

    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);

    // RETAIN_VIS — owner retain clears concurrent PROPOSED (forecast copied onto RETAINED).
    const retain = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: proj.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: proj.trajectory.proposed?.id,
    });
    expect(retain.status).toBe("APPLIED");

    const after = await getPilotageProjection(world.pilotId, world.projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.trajectory.proposed).toBeNull();
    expect(after.trajectory.retained?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);

    const proposedRows = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(
          eq(trajectoryRevisions.projectId, world.projectId),
          eq(trajectoryRevisions.status, "PROPOSED"),
        ),
      );
    expect(proposedRows).toHaveLength(0);
  });

  it("E1-REL-02 subjectId+title conflict refuses acquis write", async () => {
    const world = await seedWorld(`e1r-conflict-${Date.now()}`);
    const s = await ensureSubject(world.pilotId, world.preparationId, "Inventaire campus");
    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "x",
        assistantText: "y",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-conflict",
            kind: "ACQUIS",
            statement: "Douze ordinateurs portables sont recensés sur le campus Nova",
            epistemic: "hypothesized",
            subjectId: s.subjectId!,
            subjectTitle: "Titre totalement différent",
          },
        ],
      },
    );
    expect(result.capitalisations[0]?.status).toBe("FAILED");
    expect(result.capitalisations[0]?.reason).toBe("SUBJECT_ID_TITLE_CONFLICT");
  });
});
```

### FULL FILE — e1-continuite-cognitive-as-built.md
```markdown
# E1 — Continuité cognitive as-built (DEV, 2026-11-27)

Statut : DOCUMENTED as-built — NO RELEASE. Ne remplace pas le contrat fonctionnel
`conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md`.

Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, pas E2.

## Responsabilités

| Domaine | Rôle |
| --- | --- |
| D3 | Qualification, extraction `d4.record_knowledge`, contexte, outils lecture |
| D4 | Sujets, hiérarchie, synthèses, acquis, points ouverts, provenance, merge/split |
| D5 | Trajectoire (propose/retain + forecast), cycles, finalité |
| D6 | Décisions humaines (RECORD/REVISE/REVOKE) — jamais dérivées d'une reco Nora seule |
| Studio | Admission, fence, persistance PG, projections |

## Mécanismes E1

### B.1 Capitalisation

- Gate : `QUALIFIED` + `REQUEST_EFFECT` + `d4.record_knowledge` → `extractKnowledgeProposals`.
- Écriture : `maybeCapitalizeFromExchange` (zéro proposition = zéro mutation).
- Provenance : message USER + message assistant (Nora) constitutifs lorsque fournis.
- Epistemic `established` Nora → D4 refuse FACT sans source indépendante.
- Champs étendus (complément) : `openPointTitle`, `subjectOrganization`, `mergeSourceSubjectId`,
  `relevantOpenPointIds` — extraits depuis la qualification durable, appliqués par D4.

### B.2 Arborescence + réorganisation (E1-REL-01)

- Module : `web/src/domains/knowledge/subject-proposal-batch.ts`
  - `orderSubjectCreatesByDependency` — parents avant enfants ; détection de cycle.
  - `resolveBatchParentRef` — `subj_*` | intent id | titre co-proposé | `lookup_title` DB.
- `precreateBatchSubjects` crée le batch avant le reste.
- Reparent/rename : SUBJECT avec `subjectId` existant + `parentSubjectId` / `subjectTitle`.
- **Complément** : `subjectOrganization=MERGE|SPLIT|DETACH` mobilise les propriétaires
  `mergeSubjects` / `splitSubject` / `reparentSubject(null)` — pas de second moteur métier.
- API Pilote : `POST .../knowledge` action `reparent` (en plus rename/merge/split).
- Nora : guidance adapter — parent+enfant même tour ; merge/split/detach paramétrés.

### Intégrité D4 (E1-REL-02)

- `subjectId` explicite invalide/étranger → **FAILED**, jamais création silencieuse.
- ACQUIS/OPEN_POINT : ref invalide → FAILED (pas d'héritage du `subjectId` de boucle).
- Conflit `subjectId` + `subjectTitle` divergent → `SUBJECT_ID_TITLE_CONFLICT`.
- Titre ambigu (homonymes ACTIVE) → `SUBJECT_TITLE_AMBIGUOUS`.
- Rename échoué → pas de résultat `AVAILABLE` masquant l'échec.
- Fence ownership optionnel sur rename / merge / split / reparent (TX).

### Points ouverts — titre court (E1-REL-04)

- `parameters.openPointTitle` → `provenance.canonicalTitle` (pas de migration schéma).
- `openPointShortTitle(statement, maxLen, { provenanceJson | canonicalTitle })`
  préfère le titre canonique ; fallback éditorial pour données historiques.
- `getOwnedProjectContext` alimente `shortTitle` depuis la provenance.

### B.5 / B.6 Trajectoire (E1-REL-05)

- `applyConversationalAuthority` : PROPOSE/RETAIN sans body objective/orientation client.
- **Complément forecast** : `parameters.forecastSteps` → `DurablePilotageBinding` →
  `ClassifiedCommand.forecastSteps` → persistance `trajectory_revisions.forecast_json`
  (chemin USER_MESSAGE conversationnel).
- **RETAIN_VIS** : RETAIN supersède tous les `PROPOSED` du projet ; projection
  `proposed=null` après retenue ; forecast reporté sur la révision RETAINED.
- OPEN_CYCLE conserve l'objectif contextualisé via `persistableCycleObjective`.

### B.4 / B.8 Projections

- Décisions applicables : `filterApplicableHumanDecisions` — supersede uniquement si
  successeur **APPLICABLE**.
- Documents : `countProjectLibraryDocuments` par identité documentaire (V1+V2 = 1).

### B.7 Réutilisation

- Sélection : `selectRelevantKnowledgeContext` + preferred ids.
- Continuation : `resolveContinuationKnowledgeSnippets` + marqueur d'omit.
- Outils D4 conducteur : `search_project_resources`, `read_project_document_revision`,
  `compare_document_proposal` — info non injectée consultable.

## Limites

- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
- Hybrid embedding `derivedUsed=false` : réserve E2 si impact mesure.
- Pertinence cognitive naturelle merge/split / sélection / finalité : recette utilisateur.
- UX panneau / multi-types : E3.
- Navigateur : `next dev` :3100 HTTP 500 (tooling turbopack/`@cursor/sdk`) — preuve DOM
  reportée ; qualify:start alternatif non imposé ici.

## Preuves

- Suite E1 antérieure (58 PASS rapportés) + complément `e1-reliquats-integrity.pg.test.ts`
  + non-régression B.5/B.6/B.7/B.8 — voir Delivery History et Review Pack complément E1.
```

### DIFF — delivery-history (tête E1 complément)
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d0adfbd..7f2c37ca 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,35 @@
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
+- **statut**: E1 COMPLÉMENT DEV — READY FOR REVIEW (ChatGPT) avant gate E2; Livraison 1 NOT ACCEPTED; NO RELEASE
+
 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

 - **date_utc**: 2026-11-27T10:00Z

### DIFF — ml5-registre (R-E1r + matrice)
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a22275cd..6611c344 100644
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
@@ -428,6 +428,35 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
 | R-PROV-01 | 26/11/2026 | ML5 politique cognitive provisoire v0.1 + qualification intégrée A/B/E/F LIVE | `sfia/next-ml5-integrated-delivery-20261123` · base `4f1bb0f2` · DEV build `-8zagoVhrLvhtuKL7ThVc` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | Politique v0.1 · FinOps WEB attribution · LIVE Terra→Sol · WEB gate dossier | DEV CANDIDATE — PROVISIONAL POLICY QUALIFIED IN DEV — WEB GATE PENDING — C/D différés |
 | R-AT-CAP | 25/11/2026 | ML5 Nora×Studio capability interactions — AssetTrack AT-01…13 (AT-10 retirée) · Option B+A+C | `sfia/next-ml5-integrated-delivery-20261123` · base `0d37b12a` · DEV build `BMd8qv-bn6m9Hj6YEtdee` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | AT-01…13 · PREPARE documentaire · forecast cognitif · LIVE activité · Git REAL RO | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW ; RECETTE `ca0b114c` préservée |
+| R-E1 | 27/11/2026 | E1 Continuité cognitive B.1–B.8 (MP-03/10/12/13 + interfaces) — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty ; no project commit | Review Pack E1 → `sfia/review-handoff` (publish-in-cycle) | B.1–B.8 · oracles 1–18 (E1 niveau) · suite 52 PASS unit/PG | E1 DETERMINISTIC PROVEN partiel ; autonomie LIVE NON PROUVÉE ; embedding residual → E2 ; UX panneau → E3 ; Livraison 1 NOT ACCEPTED |
+| R-E1r | 27/11/2026 | E1 complément neuf reliquats E1-REL-01…09 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1r → `sfia/review-handoff` (publish-in-cycle) | E1-REL-01…09 · e1-reliquats 5 PASS + non-régression B.5–B.8 | E1 COMPLÉMENT — DETERMINISTIC PROVEN ciblé ; preuves naturelles → recette ; LIVE/DOM NON PROUVÉS ; E2 non engagé |
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


## FIN Review Pack E1 complément
Instruction ChatGPT: lire ce fichier sur sfia/review-handoff après publication L3.
