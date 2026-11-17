# SFIA Review Pack Full — Nora LIVE diagnostic + DEV fix (COMPLETE REPUBLISH)

## 0. Motif de republication

Handoff `ef5d37e7` jugé **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** :
manque du contenu complet du fichier de tests créé, des diffs exploitables des fichiers modifiés,
et des résultats explicites TypeScript / build / intégration.

Le présent pack **remplace** le handoff précédent pour le même correctif local `3f7863ba`.
Aucun nouveau changement produit. Aucun push produit. RECETTE inchangée.

## 1. Date, cycle, profil, GO

- **Date:** 2026-11-17 (CET) — republication pack ~18:50 CET
- **Cycle:** 8 — Delivery / RUN corrective
- **Profil:** Standard (contrôles renforcés LIVE / isolation)
- **GO Morris consommé (cycle correctif):** diagnostic + correctif DEV minimal
- **GO Morris consommé (ce message):** republication Review Pack / handoff L3 complet
- **Non fait:** appel OpenAI REAL, deploy RECETTE, push produit, PR/merge, migration

## 2. Git Truth Check

| Item | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Tip correctif **local** | `3f7863ba640b6520ace247dec125e5736508ca75` |
| Parent | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| Tree tip | `72341135883181021adff0819ad20b71372d97cf` |
| Tree `web/` tip | `963f7f355e48cb30c8f85aa22b36732aa11b1080` |
| Accessibilité GitHub produit | **NON** — commit local only (pas de push produit) |
| Contenu pour revue ChatGPT | **inclus ci-dessous in extenso** |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |

## 3. Cause racine (rappel)

`visualComposition: z.unknown().optional()` dans `NoraTurnQualificationSchema` (`outputType` Agents SDK)
→ sérialisation JSON Schema strict avec propriété `visualComposition: {}`
→ rejet fournisseur rapide → `PROVIDER_ERROR` / UNKNOWN.

Contre-preuve timeline: LIVE COMPLETE jusqu'à 13:47 UTC sous Ensemble04 (sans le champ) ;
UNKNOWN après cutover E05 16:14–16:15 UTC.

## 4. RECETTE

Inchangée : `:3200` · BUILD `xKkQienCXTPYIqkFElAuE` · SOURCE `34a5e102`.

## 5. Validations exécutées pour ce pack

### 5.1 TypeScript (`tsc --noEmit`)

- Commande: `npx tsc --noEmit -p tsconfig.json`
- Exit: **1**
- Erreurs totales: **32**
- Erreurs dans fichiers src touchés (`visual-composition.ts`, `semantic-qualification.ts`, `nora-adapter.ts`, `observability.ts`): **0**
- Nature des erreurs restantes: **préexistantes** (fixtures de tests d'intégration/unit assignant des objets partiels `NoraTurnQualification` sans `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` — champs `.default("")` déjà présents avant ce correctif)
- Exemples (5 premières):

```
tests/integration/create-project.pg.test.ts(290,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(299,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(306,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(312,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/ml4c-prior-proposal.pg.test.ts(171,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProp...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED" | "NEEDS_CLARIFICATION" | "UNAVAILABLE"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
```

### 5.2 Build Next (`npm run build`)

- Exit: **0**
- `✓ Compiled successfully in 7.9s`
- `✓ Generating static pages (18/18)`
- BUILD_ID produit par ce build local candidat: **`V61t3IVGeGYtbTmrgblDJ`**
- Note: distinct du BUILD RECETTE servi (`xKkQienCXTPYIqkFElAuE`) — attendu (lanes séparées)

### 5.3 Tests unitaires (périmètre correctif + E05 + semantic)

```
vitest: nora-live-output-schema + nora-adapter-corrective + ensemble05-visual-composition + semantic-qualification
→ Test Files 4 passed · Tests 50 passed
```

### 5.4 Tests d'intégration PG (D3 / corrective)

Cible: `sfia_next_e2e` via gate Vitest (operator `.env.local` DEV `:5433` réécrit in-process).

```
vitest: ml2-turn-command.pg + ml2-corrective-integrity.pg + ml2-critical-corrective.pg
→ Test Files 3 passed · Tests 30 passed
```

### 5.5 Hors portée

- REAL OpenAI: NOT EXECUTED
- Playwright E05: NOT RE-RUN (rendu graphique non modifié)
- Redeploy RECETTE: NOT DONE

## 6. Fake / Real

| Frontière | Niveau |
|---|---|
| Cause schéma | DETERMINISTIC PROVEN |
| Correctif + unit | VERIFIED |
| Intégration D3 PG | VERIFIED (30 PASS) |
| Build Next candidat | VERIFIED (`V61t3IVGeGYtbTmrgblDJ`) |
| LIVE HTTP | NOT RE-PROVEN |
| RECETTE | UNCHANGED |

## 7. Verdict

**`NORA LIVE DEV FIX VERIFIED — RECETTE DEPLOY GO REQUIRED`**

(Republication pack: contenu complet joint. Verdict technique inchangé.)

## 8. Prochain gate Morris

1. GO deploy RECETTE de `3f7863ba`
2. GO REAL smoke ≤2
3. UAT R01–R08

---

## 9. CONTENU COMPLET DES MODIFICATIONS (git show 3f7863ba)

Le bloc suivant est le patch unifié intégral du commit local (tous fichiers créés/modifiés).

````diff
commit 3f7863ba640b6520ace247dec125e5736508ca75
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Tue Nov 17 18:41:45 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Tue Nov 17 18:41:45 2026 +0100

    fix(nora): restore LIVE structured output by typing visualComposition schema
    
    Replace z.unknown() on D3 outputType (serialized to empty {}) with a concrete
    Agents-compatible VisualComposition schema, and emit provider error_category in OBS.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 64ace500..273ac017 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,23 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
 
+## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-OUTPUT-SCHEMA-PATCH
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~18:40 CET |
+| Macro-lot | ML4D Ensemble 05 — diagnostic + correctif DEV Nora LIVE |
+| Type | Cycle 8 Delivery · Standard · RUN/corrective · **PATCH CANDIDATE** · **NO RELEASE** · **NO DEPLOY** |
+| Parent tip | `34a5e102` |
+| Cause | `visualComposition: z.unknown()` → JSON Schema `{}` sous `outputType` strict → rejet fournisseur (`PROVIDER_ERROR` / UNKNOWN) |
+| Scope | `VisualCompositionAgentOutputSchema` ; branchement enveloppe D3 ; OBS `error_category` ; tests schéma |
+| Non-scope | Appel REAL ; déploiement RECETTE ; push produit ; grammaire visuelle runtime ; migration |
+| Preuves | Vitest schema+adapter+E05 30 PASS ; REAL LIVE NOT EXECUTED |
+| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
+| Push produit | **AUCUN** (commit local autorisé) |
+| Verdict | `NORA LIVE DEV FIX VERIFIED — RECETTE DEPLOY GO REQUIRED` |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-RECETTE-CANDIDATE-FREEZE
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 68dfd858..ce731ee0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -156,7 +156,13 @@ export function categorizeProviderError(err: unknown): {
     ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
   let category = "PROVIDER_ERROR";
   if (interrupted) category = "PROVIDER_INTERRUPTED";
-  else if (/model|not found|does not exist|unauthorized|insufficient|entitlement/i.test(msg)) {
+  else if (
+    /json.?schema|invalid schema|structured output|response_format|output_type|unsupported.*schema/i.test(
+      msg,
+    )
+  ) {
+    category = "PROVIDER_SCHEMA_OR_OUTPUT";
+  } else if (/model|not found|does not exist|unauthorized|insufficient|entitlement/i.test(msg)) {
     category = "PROVIDER_MODEL_OR_ENTITLEMENT";
   } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
   return { category, interrupted, preContactLikely };
@@ -592,6 +598,29 @@ async function runLiveWithTools(
         providerContacted: contact,
       });
 
+      const errName =
+        streamErr instanceof Error && /^[A-Za-z][A-Za-z0-9_.]{0,80}$/.test(streamErr.name)
+          ? streamErr.name
+          : "Error";
+      emitObs({
+        event_name: "d3.nora.provider_attempt",
+        component: "d3.nora_adapter",
+        operation_id: input.toolScope?.operationId,
+        generation_id: generationId,
+        attempt_id: streamAttemptId,
+        outcome: cat.interrupted ? "INTERRUPTED" : "UNKNOWN",
+        error_category: cat.category,
+        policy_version: policy.policyVersion,
+        profile_type:
+          policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
+        meta: {
+          kind: "stream",
+          model_requested: NORA_STUDY_MODEL,
+          provider_contacted: contact,
+          error_name: errName,
+        },
+      });
+
       const status = cat.interrupted ? ("INTERRUPTED" as const) : ("UNKNOWN" as const);
       return {
         generationId,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 4d17bc00..3a2a2875 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -8,7 +8,10 @@ import {
   type PilotageOperation,
 } from "@/domains/pilotage/types";
 import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
-import { parseVisualComposition } from "./visual-composition";
+import {
+  parseVisualComposition,
+  VisualCompositionAgentOutputSchema,
+} from "./visual-composition";
 
 export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;
 
@@ -197,8 +200,10 @@ export const NoraTurnQualificationSchema = z.object({
   /**
    * Ensemble 05 / T02 — optional visual composition (structured blocks).
    * Omission = text-only reply. Never HTML/JS. Studio re-validates before persist/render.
+   * Must be a concrete Zod object (not z.unknown): empty `{}` JSON Schema breaks
+   * OpenAI strict structured outputs and surfaces as PROVIDER_ERROR / UNKNOWN.
    */
-  visualComposition: z.unknown().optional(),
+  visualComposition: VisualCompositionAgentOutputSchema.optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;
 
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 39d24e86..7a6c2abf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -11,6 +11,8 @@
  * Studio resolves against canonical turn references.
  */
 
+import { z } from "zod";
+
 export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;
 
 export type VisualBlockKind =
@@ -251,6 +253,193 @@ export type VisualComposition = {
   blocks: VisualBlock[];
 };
 
+/**
+ * Agents SDK / OpenAI structured-output schema for visualComposition.
+ * MUST NOT use z.unknown()/z.any() — those serialize to empty `{}` under
+ * strict json_schema and the provider rejects the request (PROVIDER_ERROR).
+ * Runtime authority remains parseVisualComposition (fail-closed sanitize).
+ */
+const VisualProvenanceAgentSchema = z.object({
+  label: z.string().max(200),
+  note: z.string().max(240).optional(),
+  kind: z.enum(["document", "git", "external"]).optional(),
+  resourceId: z.string().max(128).optional(),
+  revisionId: z.string().max(128).optional(),
+  repositoryId: z.string().max(128).optional(),
+  path: z.string().max(400).optional(),
+  ref: z.string().max(120).optional(),
+  commit: z.string().max(64).optional(),
+  href: z.string().max(800).optional(),
+});
+
+const VisualRoleAgentSchema = z.enum([
+  "information",
+  "observation",
+  "fact",
+  "hypothesis",
+  "risk",
+  "recommendation",
+  "decision",
+  "dependency",
+  "step",
+  "source",
+]);
+
+const VisualIconAgentSchema = z.enum([
+  "info",
+  "observe",
+  "fact",
+  "hypothesis",
+  "risk",
+  "recommend",
+  "decision",
+  "link",
+  "step",
+  "source",
+]);
+
+export const VisualCompositionAgentOutputSchema = z.object({
+  schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
+  blocks: z
+    .array(
+      z.discriminatedUnion("kind", [
+        z.object({
+          kind: z.literal("text"),
+          id: z.string().max(64),
+          markdown: z.string().max(4000),
+          role: VisualRoleAgentSchema.optional(),
+          icon: VisualIconAgentSchema.optional(),
+        }),
+        z.object({
+          kind: z.literal("comparison"),
+          id: z.string().max(64),
+          title: z.string().max(160),
+          textAlternative: z.string().max(2000),
+          alternatives: z
+            .array(
+              z.object({
+                id: z.string().max(64),
+                title: z.string().max(160),
+                summary: z.string().max(400),
+                pros: z.array(z.string().max(200)).max(4).optional(),
+                cons: z.array(z.string().max(200)).max(4).optional(),
+              }),
+            )
+            .max(5),
+          criteria: z
+            .array(
+              z.object({
+                id: z.string().max(64),
+                label: z.string().max(200),
+                values: z.record(z.string(), z.string().max(400)),
+              }),
+            )
+            .max(6)
+            .optional(),
+          recommendation: z.string().max(800).nullable().optional(),
+          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
+          role: VisualRoleAgentSchema.optional(),
+          icon: VisualIconAgentSchema.optional(),
+        }),
+        z.object({
+          kind: z.literal("sequence"),
+          id: z.string().max(64),
+          title: z.string().max(160),
+          textAlternative: z.string().max(2000),
+          steps: z
+            .array(
+              z.object({
+                id: z.string().max(64),
+                title: z.string().max(160),
+                detail: z.string().max(400).optional(),
+                dependsOn: z.array(z.string().max(64)).max(8).optional(),
+                dateLabel: z.string().max(80).nullable().optional(),
+                role: VisualRoleAgentSchema.optional(),
+              }),
+            )
+            .max(8),
+          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
+          role: VisualRoleAgentSchema.optional(),
+          icon: VisualIconAgentSchema.optional(),
+        }),
+        z.object({
+          kind: z.literal("relations"),
+          id: z.string().max(64),
+          title: z.string().max(160),
+          textAlternative: z.string().max(2000),
+          nodes: z
+            .array(
+              z.object({
+                id: z.string().max(64),
+                label: z.string().max(200),
+                kind: z.enum([
+                  "fact",
+                  "hypothesis",
+                  "unknown",
+                  "cause",
+                  "finding",
+                  "observation",
+                ]),
+              }),
+            )
+            .max(10),
+          edges: z
+            .array(
+              z.object({
+                from: z.string().max(64),
+                to: z.string().max(64),
+                label: z.string().max(200).optional(),
+              }),
+            )
+            .max(16),
+          preferListFallback: z.boolean().optional(),
+          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
+          role: VisualRoleAgentSchema.optional(),
+          icon: VisualIconAgentSchema.optional(),
+        }),
+        z.object({
+          kind: z.literal("synthesis"),
+          id: z.string().max(64),
+          title: z.string().max(160),
+          textAlternative: z.string().max(2000),
+          items: z
+            .array(
+              z.object({
+                id: z.string().max(64),
+                label: z.string().max(200),
+                detail: z.string().max(400).optional(),
+                tone: z.enum([
+                  "priority",
+                  "finding",
+                  "risk",
+                  "watch",
+                  "observation",
+                  "hypothesis",
+                ]),
+                role: VisualRoleAgentSchema.optional(),
+                icon: VisualIconAgentSchema.optional(),
+              }),
+            )
+            .max(8),
+          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
+          role: VisualRoleAgentSchema.optional(),
+          icon: VisualIconAgentSchema.optional(),
+        }),
+        z.object({
+          kind: z.literal("choices"),
+          id: z.string().max(64),
+          choiceIds: z.array(z.string().max(64)).max(12).optional(),
+        }),
+        z.object({
+          kind: z.literal("references"),
+          id: z.string().max(64),
+          resourceIds: z.array(z.string().max(128)).max(12).optional(),
+        }),
+      ]),
+    )
+    .max(10),
+});
+
 export type ParseVisualCompositionResult =
   | { ok: true; value: VisualComposition }
   | { ok: false; reason: string };
diff --git a/projects/sfia-studio-next/web/src/lib/observability.ts b/projects/sfia-studio-next/web/src/lib/observability.ts
index 10f8ee04..ddc6911b 100644
--- a/projects/sfia-studio-next/web/src/lib/observability.ts
+++ b/projects/sfia-studio-next/web/src/lib/observability.ts
@@ -106,6 +106,9 @@ const META_ALLOWLIST = new Set([
   "qualification_kind",
   "qualification_reason",
   "documentary_intent_signal",
+  // Provider attempt diagnostics — codes/names only, never raw exception text.
+  "provider_contacted",
+  "error_name",
 ]);
 
 const SECRET_VALUE =
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
new file mode 100644
index 00000000..471585ef
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
@@ -0,0 +1,63 @@
+import { describe, expect, it } from "vitest";
+import { pathToFileURL } from "node:url";
+import path from "node:path";
+import { z } from "zod";
+import { NoraTurnQualificationSchema } from "@/domains/conversation/semantic-qualification";
+import { VisualCompositionAgentOutputSchema } from "@/domains/conversation/visual-composition";
+import { categorizeProviderError } from "@/domains/conversation/nora-adapter";
+
+async function convert(schema: z.ZodType) {
+  const toolsPath = path.resolve(
+    process.cwd(),
+    "node_modules/@openai/agents-core/dist/utils/tools.mjs",
+  );
+  const { convertAgentOutputTypeToSerializable } = await import(
+    pathToFileURL(toolsPath).href
+  );
+  return convertAgentOutputTypeToSerializable(schema);
+}
+
+describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
+  it("rejects z.unknown visualComposition as empty JSON Schema property", async () => {
+    const broken = z.object({
+      replyDraft: z.string(),
+      visualComposition: z.unknown().optional(),
+    });
+    const serialized = await convert(broken);
+    const visual = (serialized.schema as { properties?: Record<string, unknown> })
+      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    expect(visual).toBeDefined();
+    expect(Object.keys(visual ?? {}).filter((k) => k !== "description")).toEqual([]);
+  });
+
+  it("serializes VisualCompositionAgentOutputSchema without empty property schema", async () => {
+    const wrapped = z.object({
+      replyDraft: z.string(),
+      visualComposition: VisualCompositionAgentOutputSchema.optional(),
+    });
+    const serialized = await convert(wrapped);
+    const visual = (serialized.schema as { properties?: Record<string, unknown> })
+      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    expect(visual).toBeDefined();
+    expect(Object.keys(visual ?? {}).length).toBeGreaterThan(0);
+    expect(JSON.stringify(visual)).not.toBe("{}");
+  });
+
+  it("serializes full NoraTurnQualificationSchema without empty visualComposition", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    const visual = (serialized.schema as { properties?: Record<string, unknown> })
+      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    expect(visual).toBeDefined();
+    const keys = Object.keys(visual ?? {}).filter((k) => k !== "description");
+    expect(keys.length).toBeGreaterThan(0);
+    expect(JSON.stringify(visual)).not.toBe("{}");
+  });
+
+  it("categorizes structured-output schema errors distinctly", () => {
+    const c = categorizeProviderError(
+      new Error("Invalid schema for response_format json_schema: empty object"),
+    );
+    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
+    expect(c.category).not.toContain("Invalid schema");
+  });
+});

````

```

## 10. Inventaire fichiers du commit

| Path | Action |
|---|---|
| `projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts` | modified (+189) |
| `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` | modified |
| `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts` | modified |
| `projects/sfia-studio-next/web/src/lib/observability.ts` | modified |
| `projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts` | **created** |
| `projects/sfia-studio-next/construction/delivery-history.md` | modified |

Diffstat: `6 files changed, 309 insertions(+), 3 deletions(-)`.

FIN DU REVIEW PACK COMPLET.
