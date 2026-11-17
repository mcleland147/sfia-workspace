# SFIA Review Pack — Full
## ML4D Ensemble 05 — Audit compatibilité schéma structuré Nora LIVE (strict SO)

**Date :** 2026-11-17 (~19:10 CET)
**GO Morris :** accordé — contrôle déterministe + correction DEV strictement ciblée si incompatibilité démontrée
**Cycle :** 8 — Delivery / implémentation · Typologie RUN/corrective QA · Profil Standard
**Exécutant :** Cursor · **Revue :** ChatGPT · **Autorité :** Morris
**Qualification cycle :** deterministic schema audit (NO REAL API · NO RECETTE DEPLOY · NO PRODUCT PUSH)

---

## 1. Verdict unique

### `NORA LIVE STRICT SCHEMA GAP — MORRIS DECISION REQUIRED`

Compatibilité **Structured Outputs strict (`strict: true`)** : **NON atteinte** (démontrée déterministiquement).

Correctif `3f7863ba` : **conserve** l'élimination du `{}` vide sur `visualComposition` (cause PROVIDER_ERROR initiale).

Chemin de production Agents SDK actuel : sérialisation **`strict: false`** (fallback après échec `zodTextFormat`) — comportement **préexistant** à E05 (champs D3 `.optional()`).

**Pas de HTTP REAL SUCCESS. Pas de Nora LIVE COMPLETE. Pas de R01–R08.**

---

## 2. Git Truth Check

| Contrôle | Résultat |
| --- | --- |
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD audit start | `3f7863ba640b6520ace247dec125e5736508ca75` |
| Parent correctif | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| HEAD final (après oracles) | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Parent tip final | `3f7863ba…` |
| Status fin | clean hors `.tmp-sfia-review/chatgpt-review.md` (pack en cours) |
| Isolation RECETTE | worktree `…-ensemble05-recette-build-34a5e102` @ `34a5e102` ; `:3200` sert BUILD `xKkQienCXTPYIqkFElAuE` |
| Contaminations | aucune réinitialisation ; aucun push produit |

---

## 3. Sources Git et versions SDK

### SDK installés (web/)

| Package | Version installée |
| --- | --- |
| `@openai/agents` | `0.21.0` |
| `@openai/agents-core` | `0.21.0` |
| `openai` | `7.50.0` |
| `zod` | `4.6.7` |

### Conversion réelle

Fonction : `convertAgentOutputTypeToSerializable`
Fichier : `node_modules/@openai/agents-core/dist/utils/tools.mjs`

Flux observé pour `NoraTurnQualificationSchema` :

1. Tentative `zodTextFormat(schema, "output")` (`openai/helpers/zod`) → **throw**
   Message : `Schema field at properties/clarifications uses .optional() without .nullable()…`
2. Fallback `buildJsonSchemaFromZod` → JSON Schema avec **`strict: false`**
3. `prepareOpenAIStrictToolSchema(converted.schema)` → **throw**
   Message : `Cannot convert an anyOf branch containing optional object properties…`
   + open object : `additionalProperties` schema sur `criteria[].values`

Aucune requête réseau.

---

## 4. État initial du candidat `3f7863ba`

- `visualComposition: VisualCompositionAgentOutputSchema.optional()` (plus `z.unknown()`)
- Tests antérieurs : absence de `{}` sur `visualComposition` uniquement
- LIVE après correctif : **NOT PROVEN**
- RECETTE : toujours `34a5e102` / `xKkQienCXTPYIqkFElAuE`

---

## 5. Résultats des contrôles stricts

### Preuve synthèse

```
convert.strict= False
root.type= object
root.additionalProperties= False
root.required= ['schemaVersion', 'status', 'goal', 'projectIntention', 'desiredOutcome', 'initialScope', 'proposedProjectName', 'intents', 'replyDraft']
root.optional_props= ['clarifications', 'continueChoices', 'documentProposal', 'documentSource', 'preparationAssessment', 'preparationAssessmentExplanation', 'resourceReferences', 'visualComposition']
visualComposition.keys= ['additionalProperties', 'properties', 'required', 'type']
blocks.items.keys= ['anyOf']
blocks.anyOf.len= 7
kinds= ['text', 'comparison', 'sequence', 'relations', 'synthesis', 'choices', 'references']
criteria.values= {"type": "object", "additionalProperties": {"type": "string"}}
bytes= 35666
```

### Fragments JSON Schema (sans données métier)

```json
{
  "envelope": {
    "type": "json_schema",
    "name": "output",
    "strict": false
  },
  "root": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "schemaVersion",
      "status",
      "goal",
      "projectIntention",
      "desiredOutcome",
      "initialScope",
      "proposedProjectName",
      "intents",
      "replyDraft"
    ],
    "propertyKeys": [
      "clarifications",
      "continueChoices",
      "desiredOutcome",
      "documentProposal",
      "documentSource",
      "goal",
      "initialScope",
      "intents",
      "preparationAssessment",
      "preparationAssessmentExplanation",
      "projectIntention",
      "proposedProjectName",
      "replyDraft",
      "resourceReferences",
      "schemaVersion",
      "status",
      "visualComposition"
    ]
  },
  "visualComposition": {
    "type": "object",
    "required": [
      "schemaVersion",
      "blocks"
    ],
    "additionalProperties": false,
    "propertyKeys": [
      "blocks",
      "schemaVersion"
    ]
  },
  "blockKinds": [
    "text",
    "comparison",
    "sequence",
    "relations",
    "synthesis",
    "choices",
    "references"
  ],
  "criteriaValues": {
    "type": "object",
    "additionalProperties": {
      "type": "string"
    }
  },
  "comparisonOptionalProps": [
    "criteria",
    "icon",
    "provenance",
    "recommendation",
    "role"
  ]
}
```

### Matrice de contrôle

| # | Contrôle | Résultat | Preuve |
| --- | --- | --- | --- |
| 1 | Racine objet | PASS | `type: object` |
| 2 | `additionalProperties: false` racine + objets fermés | PASS sur objets à `properties` ; **FAIL** sur record ouvert | `criteria.values` = `{type:object, additionalProperties:{type:string}}` |
| 3 | `required` couvre toutes les propriétés (strict) | **FAIL** | 8 props racine hors `required` dont `visualComposition`, `clarifications` ; gaps aussi dans anyOf variants |
| 4 | Optionnalité Zod → nullable SO | **FAIL** | `zodTextFormat` refuse `.optional()` sans `.nullable()` dès `clarifications` |
| 5 | Unions discriminées | Sérialisées en `anyOf` (7 variants) | kinds text…references ; prepareStrict refuse anyOf à props optionnelles |
| 6 | Records `criteria[].values` | **FAIL strict** | `z.record` → open additionalProperties |
| 7 | `$ref` / `$defs` | PASS (aucun cycle problématique observé) | schéma plat / inline |
| 8 | Types / nullabilité | Partiel | certains champs déjà `.nullable().optional()` ; majorité `.optional()` seul |
| 9 | Mots-clés | Pas de `propertyNames`/`if`/`not` observés sur dump | — |
| 10 | Profondeur | PASS vs limite SDK 100 | dump ~11–35 KB sérialisé pretty |
| — | Empty `{}` property | PASS (régression `z.unknown` couverte) | `findEmptyPropertySchemas([])` |
| — | Flag `strict` émis | **`false`** | convert SDK |

### Réserves hors API (REAL only)

- Acceptation fournisseur d'un `json_schema` avec **`strict: false`** pour le modèle cible : **NOT PROVEN** ce cycle (historiquement LIVE Ensemble04 fonctionnait sur le même pattern pre-E05).
- Qualité de génération des blocs graphiques LIVE : **NOT PROVEN**.
- Toute erreur fournisseur non liée au schéma : hors périmètre.

---

## 6. Correction produit

**Aucune.** Incompatibilité strict démontrée, mais résolution minimale dans le périmètre imposerait une **transformation significative** du contrat D3 :

1. Tous les `.optional()` D3 + composition → `.nullable()` (ou nullish) avec `required` complet — impact sémantique **`clarifications` ABSENT vs `[]` vs `null`**.
2. `z.record` → tableau `{key,value}` + normalisation dans `parseVisualComposition`.
3. Props optionnelles dans chaque branche `discriminatedUnion` → required+nullable.

Cela dépasse une correction locale non arbitraire sans arbitrage Morris (STOP contrat §7 / §11).

### Options pour décision Morris

| Option | Description | Blast radius |
| --- | --- | --- |
| **A — Accepter chemin non-strict opérationnel** | Conserver `strict:false` SDK (historique LIVE) ; déployer `208aaa40`/`3f7863ba` en RECETTE ; GO REAL smoke ≤2 | Faible code ; risque fournisseur si non-strict rejeté un jour |
| **B — Hardening strict D3 complet** | optional→nullable ; record→KV ; parser fail-closed inchangé sur forme métier | Élevé : D3 + prompts + fixtures + tests ; risque sémantique clarifications |
| **C — STOP + REAL gate sans deploy tip audit** | Garder RECETTE `34a5e102` ; décider après revue | Status quo RECETTE ; LIVE UNKNOWN persiste |

---

## 7. Fichiers modifiés (ce cycle)

1. `projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts` — oracles D3 complets
2. `projects/sfia-studio-next/construction/delivery-history.md` — entrée audit

**SHA candidat local final :** `208aaa40672433e7dd0bd989f96d26e4e24f7798`
**Parent :** `3f7863ba640b6520ace247dec125e5736508ca75`


## 8. Patch exploitable (commit `208aaa40`)

```diff
commit 208aaa40672433e7dd0bd989f96d26e4e24f7798
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 19:02:43 2026 +0100

    test(nora): lock D3 structured-output strict schema audit oracles

    Prove Agents SDK emits non-strict schema for NoraTurnQualificationSchema and document remaining strict SO gaps without changing the D3 product contract.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 273ac017..72e6e816 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,22 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-STRICT-SCHEMA-AUDIT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~19:05 CET |
+| Macro-lot | ML4D Ensemble 05 — audit compatibilité schéma structuré Nora LIVE |
+| Type | Cycle 8 Delivery · Standard · RUN/corrective QA · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Candidat | `3f7863ba` (parent `34a5e102`) — tip prolongé par oracles de non-régression |
+| Constat | Convertisseur Agents SDK `@openai/agents@0.21.0` → `strict:false` ; `zodTextFormat` refuse D3 (`.optional()` sans `.nullable()`) ; `criteria[].values` = `z.record` → `additionalProperties:{type:string}` incompatible strict ; aucun `{}` vide restant |
+| Scope | Tests schéma D3 complets (`nora-live-output-schema.test.ts`) ; journal ; **aucune** modification produit D3/UI |
+| Non-scope | Hardening strict complet ; appel REAL ; déploiement RECETTE ; push produit |
+| Preuves | Vitest schema/E05/adapter/OBS/sem 66 PASS ; PG intégration 484 PASS ; tsc 32 préexistantes / 0 touched src ; build PASS `n6nJl-Rx4-9s9yxwslhIJ` |
+| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
+| Verdict | `NORA LIVE STRICT SCHEMA GAP — MORRIS DECISION REQUIRED` |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-OUTPUT-SCHEMA-PATCH

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
index 471585ef..5a2e94b6 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts
@@ -3,9 +3,15 @@ import { pathToFileURL } from "node:url";
 import path from "node:path";
 import { z } from "zod";
 import { NoraTurnQualificationSchema } from "@/domains/conversation/semantic-qualification";
-import { VisualCompositionAgentOutputSchema } from "@/domains/conversation/visual-composition";
+import {
+  parseVisualComposition,
+  VISUAL_COMPOSITION_SCHEMA,
+  VisualCompositionAgentOutputSchema,
+} from "@/domains/conversation/visual-composition";
 import { categorizeProviderError } from "@/domains/conversation/nora-adapter";

+type JsonSchema = Record<string, unknown>;
+
 async function convert(schema: z.ZodType) {
   const toolsPath = path.resolve(
     process.cwd(),
@@ -14,7 +20,145 @@ async function convert(schema: z.ZodType) {
   const { convertAgentOutputTypeToSerializable } = await import(
     pathToFileURL(toolsPath).href
   );
-  return convertAgentOutputTypeToSerializable(schema);
+  return convertAgentOutputTypeToSerializable(schema) as {
+    type: string;
+    name?: string;
+    strict?: boolean;
+    schema: JsonSchema;
+  };
+}
+
+async function loadStrictHelpers() {
+  const strictPath = path.resolve(
+    process.cwd(),
+    "node_modules/@openai/agents-core/dist/utils/strictToolSchema.mjs",
+  );
+  return import(pathToFileURL(strictPath).href) as Promise<{
+    prepareOpenAIStrictToolSchema: (schema: JsonSchema) => { schema: JsonSchema };
+  }>;
+}
+
+function asObject(node: unknown): JsonSchema | undefined {
+  return node && typeof node === "object" && !Array.isArray(node)
+    ? (node as JsonSchema)
+    : undefined;
+}
+
+/** Collect property schemas that are effectively empty `{}` (the PROVIDER_ERROR root cause). */
+function findEmptyPropertySchemas(
+  node: unknown,
+  path = "$",
+  out: string[] = [],
+): string[] {
+  const obj = asObject(node);
+  if (!obj) return out;
+  const props = asObject(obj.properties);
+  if (props) {
+    for (const [key, value] of Object.entries(props)) {
+      const child = asObject(value);
+      if (child) {
+        const meaningful = Object.keys(child).filter(
+          (k) => k !== "description" && k !== "title",
+        );
+        if (meaningful.length === 0) {
+          out.push(`${path}.properties.${key}`);
+        }
+        findEmptyPropertySchemas(child, `${path}.properties.${key}`, out);
+      }
+    }
+  }
+  for (const key of ["items", "additionalProperties"] as const) {
+    if (key in obj) {
+      findEmptyPropertySchemas(obj[key], `${path}.${key}`, out);
+    }
+  }
+  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
+    const arr = obj[key];
+    if (Array.isArray(arr)) {
+      arr.forEach((item, i) =>
+        findEmptyPropertySchemas(item, `${path}.${key}[${i}]`, out),
+      );
+    }
+  }
+  return out;
+}
+
+function findOpenRecordObjects(
+  node: unknown,
+  path = "$",
+  out: Array<{ path: string; additionalProperties: unknown }> = [],
+): Array<{ path: string; additionalProperties: unknown }> {
+  const obj = asObject(node);
+  if (!obj) return out;
+  if (
+    obj.type === "object" &&
+    obj.additionalProperties !== undefined &&
+    obj.additionalProperties !== false
+  ) {
+    out.push({ path, additionalProperties: obj.additionalProperties });
+  }
+  const props = asObject(obj.properties);
+  if (props) {
+    for (const [key, value] of Object.entries(props)) {
+      findOpenRecordObjects(value, `${path}.properties.${key}`, out);
+    }
+  }
+  for (const key of ["items", "additionalProperties"] as const) {
+    if (key in obj) findOpenRecordObjects(obj[key], `${path}.${key}`, out);
+  }
+  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
+    const arr = obj[key];
+    if (Array.isArray(arr)) {
+      arr.forEach((item, i) =>
+        findOpenRecordObjects(item, `${path}.${key}[${i}]`, out),
+      );
+    }
+  }
+  return out;
+}
+
+function collectObjectRequiredGaps(
+  node: unknown,
+  path = "$",
+  out: Array<{ path: string; missingFromRequired: string[] }> = [],
+): Array<{ path: string; missingFromRequired: string[] }> {
+  const obj = asObject(node);
+  if (!obj) return out;
+  const props = asObject(obj.properties);
+  if (props) {
+    const required = Array.isArray(obj.required)
+      ? (obj.required as string[])
+      : [];
+    const missing = Object.keys(props).filter((k) => !required.includes(k));
+    if (missing.length > 0) {
+      out.push({ path, missingFromRequired: missing });
+    }
+    for (const [key, value] of Object.entries(props)) {
+      collectObjectRequiredGaps(value, `${path}.properties.${key}`, out);
+    }
+  }
+  if ("items" in obj) collectObjectRequiredGaps(obj.items, `${path}.items`, out);
+  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
+    const arr = obj[key];
+    if (Array.isArray(arr)) {
+      arr.forEach((item, i) =>
+        collectObjectRequiredGaps(item, `${path}.${key}[${i}]`, out),
+      );
+    }
+  }
+  return out;
+}
+
+function visualBlockKinds(schema: JsonSchema): string[] {
+  const visual = asObject(asObject(schema.properties)?.visualComposition);
+  const blocks = asObject(visual?.properties)?.blocks;
+  const items = asObject(asObject(blocks)?.items);
+  const anyOf = items?.anyOf;
+  if (!Array.isArray(anyOf)) return [];
+  return anyOf.map((variant) => {
+    const kind = asObject(asObject(asObject(variant)?.properties)?.kind);
+    return String(kind?.const ?? "");
+  });
 }

 describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
@@ -24,10 +168,11 @@ describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
       visualComposition: z.unknown().optional(),
     });
     const serialized = await convert(broken);
-    const visual = (serialized.schema as { properties?: Record<string, unknown> })
-      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    const visual = asObject(serialized.schema.properties)?.visualComposition;
     expect(visual).toBeDefined();
-    expect(Object.keys(visual ?? {}).filter((k) => k !== "description")).toEqual([]);
+    expect(
+      Object.keys(visual ?? {}).filter((k) => k !== "description"),
+    ).toEqual([]);
   });

   it("serializes VisualCompositionAgentOutputSchema without empty property schema", async () => {
@@ -36,8 +181,7 @@ describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
       visualComposition: VisualCompositionAgentOutputSchema.optional(),
     });
     const serialized = await convert(wrapped);
-    const visual = (serialized.schema as { properties?: Record<string, unknown> })
-      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    const visual = asObject(serialized.schema.properties)?.visualComposition;
     expect(visual).toBeDefined();
     expect(Object.keys(visual ?? {}).length).toBeGreaterThan(0);
     expect(JSON.stringify(visual)).not.toBe("{}");
@@ -45,14 +189,143 @@ describe("Nora LIVE structured output schema (E05 visualComposition)", () => {

   it("serializes full NoraTurnQualificationSchema without empty visualComposition", async () => {
     const serialized = await convert(NoraTurnQualificationSchema);
-    const visual = (serialized.schema as { properties?: Record<string, unknown> })
-      ?.properties?.visualComposition as Record<string, unknown> | undefined;
+    const visual = asObject(serialized.schema.properties)?.visualComposition;
     expect(visual).toBeDefined();
-    const keys = Object.keys(visual ?? {}).filter((k) => k !== "description");
+    const keys = Object.keys(visual ?? {}).filter(
+      (k) => k !== "description",
+    );
     expect(keys.length).toBeGreaterThan(0);
     expect(JSON.stringify(visual)).not.toBe("{}");
   });

+  it("full D3 schema has no empty property schemas anywhere", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    expect(findEmptyPropertySchemas(serialized.schema)).toEqual([]);
+  });
+
+  it("full D3 schema is a root object with additionalProperties false", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    expect(serialized.type).toBe("json_schema");
+    expect(serialized.schema.type).toBe("object");
+    expect(serialized.schema.additionalProperties).toBe(false);
+    expect(Array.isArray(serialized.schema.required)).toBe(true);
+  });
+
+  it("serializes all seven visual block variants under anyOf", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    expect(visualBlockKinds(serialized.schema).sort()).toEqual([
+      "choices",
+      "comparison",
+      "references",
+      "relations",
+      "sequence",
+      "synthesis",
+      "text",
+    ]);
+  });
+
+  it("criteria[].values serializes as open record (additionalProperties schema)", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    const opens = findOpenRecordObjects(serialized.schema);
+    const valuesPath =
+      "$.properties.visualComposition.properties.blocks.items.anyOf[1].properties.criteria.items.properties.values";
+    const hit = opens.find((o) => o.path === valuesPath);
+    expect(hit).toBeDefined();
+    expect(hit?.additionalProperties).toEqual({ type: "string" });
+  });
+
+  it("documents Agents SDK convert path: strict=false for full D3 (optional fields)", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    // Production converter falls back when zodTextFormat cannot emit strict SO.
+    expect(serialized.strict).toBe(false);
+    const gaps = collectObjectRequiredGaps(serialized.schema);
+    expect(gaps.some((g) => g.path === "$")).toBe(true);
+    expect(
+      gaps.find((g) => g.path === "$")?.missingFromRequired,
+    ).toEqual(
+      expect.arrayContaining([
+        "clarifications",
+        "continueChoices",
+        "visualComposition",
+      ]),
+    );
+  });
+
+  it("openai zodTextFormat rejects full D3 (optional without nullable)", async () => {
+    const { zodTextFormat } = await import("openai/helpers/zod");
+    expect(() =>
+      zodTextFormat(NoraTurnQualificationSchema as never, "output"),
+    ).toThrow(/optional\(\).*nullable\(\)/);
+  });
+
+  it("Agents SDK prepareOpenAIStrictToolSchema rejects converted D3 schema", async () => {
+    const serialized = await convert(NoraTurnQualificationSchema);
+    const { prepareOpenAIStrictToolSchema } = await loadStrictHelpers();
+    expect(() => prepareOpenAIStrictToolSchema(serialized.schema)).toThrow(
+      /strict mode|additionalProperties|anyOf|optional/i,
+    );
+  });
+
+  it("openai zodTextFormat rejects z.record criteria.values shape", async () => {
+    const { zodTextFormat } = await import("openai/helpers/zod");
+    const recordShape = z.object({
+      values: z.record(z.string(), z.string().max(400)),
+    });
+    expect(() => zodTextFormat(recordShape as never, "output")).toThrow(
+      /additionalProperties: false/,
+    );
+  });
+
+  it("parseVisualComposition remains fail-closed for invalid composition", () => {
+    expect(
+      parseVisualComposition({
+        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
+        blocks: [{ kind: "comparison", id: "c1", title: "t", alternatives: [] }],
+      }),
+    ).toBeNull();
+  });
+
+  it("parseVisualComposition accepts a minimal valid comparison with criteria values record", () => {
+    const parsed = parseVisualComposition({
+      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
+      blocks: [
+        {
+          kind: "comparison",
+          id: "cmp1",
+          title: "Options",
+          textAlternative: "Deux options.",
+          alternatives: [
+            { id: "a", title: "A", summary: "Alpha" },
+            { id: "b", title: "B", summary: "Beta" },
+          ],
+          criteria: [
+            { id: "c1", label: "Effort", values: { a: "Faible", b: "Élevé" } },
+          ],
+        },
+      ],
+    });
+    expect(parsed).not.toBeNull();
+    expect(parsed?.blocks[0]?.kind).toBe("comparison");
+  });
+
+  it("text-only qualification without visualComposition remains valid", () => {
+    const parsed = NoraTurnQualificationSchema.safeParse({
+      schemaVersion: "ml4c-sem-qual-v1",
+      status: "QUALIFIED",
+      goal: "goal",
+      projectIntention: "intention",
+      desiredOutcome: "outcome",
+      initialScope: "scope",
+      proposedProjectName: "",
+      intents: [],
+      replyDraft: "Réponse textuelle seule.",
+    });
+    expect(parsed.success).toBe(true);
+    if (parsed.success) {
+      expect(parsed.data.visualComposition).toBeUndefined();
+    }
+  });
+
   it("categorizes structured-output schema errors distinctly", () => {
     const c = categorizeProviderError(
       new Error("Invalid schema for response_format json_schema: empty object"),
```

## 9. Contenu complet — `nora-live-output-schema.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { z } from "zod";
import { NoraTurnQualificationSchema } from "@/domains/conversation/semantic-qualification";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";
import { categorizeProviderError } from "@/domains/conversation/nora-adapter";

type JsonSchema = Record<string, unknown>;

async function convert(schema: z.ZodType) {
  const toolsPath = path.resolve(
    process.cwd(),
    "node_modules/@openai/agents-core/dist/utils/tools.mjs",
  );
  const { convertAgentOutputTypeToSerializable } = await import(
    pathToFileURL(toolsPath).href
  );
  return convertAgentOutputTypeToSerializable(schema) as {
    type: string;
    name?: string;
    strict?: boolean;
    schema: JsonSchema;
  };
}

async function loadStrictHelpers() {
  const strictPath = path.resolve(
    process.cwd(),
    "node_modules/@openai/agents-core/dist/utils/strictToolSchema.mjs",
  );
  return import(pathToFileURL(strictPath).href) as Promise<{
    prepareOpenAIStrictToolSchema: (schema: JsonSchema) => { schema: JsonSchema };
  }>;
}

function asObject(node: unknown): JsonSchema | undefined {
  return node && typeof node === "object" && !Array.isArray(node)
    ? (node as JsonSchema)
    : undefined;
}

/** Collect property schemas that are effectively empty `{}` (the PROVIDER_ERROR root cause). */
function findEmptyPropertySchemas(
  node: unknown,
  path = "$",
  out: string[] = [],
): string[] {
  const obj = asObject(node);
  if (!obj) return out;
  const props = asObject(obj.properties);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      const child = asObject(value);
      if (child) {
        const meaningful = Object.keys(child).filter(
          (k) => k !== "description" && k !== "title",
        );
        if (meaningful.length === 0) {
          out.push(`${path}.properties.${key}`);
        }
        findEmptyPropertySchemas(child, `${path}.properties.${key}`, out);
      }
    }
  }
  for (const key of ["items", "additionalProperties"] as const) {
    if (key in obj) {
      findEmptyPropertySchemas(obj[key], `${path}.${key}`, out);
    }
  }
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        findEmptyPropertySchemas(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function findOpenRecordObjects(
  node: unknown,
  path = "$",
  out: Array<{ path: string; additionalProperties: unknown }> = [],
): Array<{ path: string; additionalProperties: unknown }> {
  const obj = asObject(node);
  if (!obj) return out;
  if (
    obj.type === "object" &&
    obj.additionalProperties !== undefined &&
    obj.additionalProperties !== false
  ) {
    out.push({ path, additionalProperties: obj.additionalProperties });
  }
  const props = asObject(obj.properties);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      findOpenRecordObjects(value, `${path}.properties.${key}`, out);
    }
  }
  for (const key of ["items", "additionalProperties"] as const) {
    if (key in obj) findOpenRecordObjects(obj[key], `${path}.${key}`, out);
  }
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        findOpenRecordObjects(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function collectObjectRequiredGaps(
  node: unknown,
  path = "$",
  out: Array<{ path: string; missingFromRequired: string[] }> = [],
): Array<{ path: string; missingFromRequired: string[] }> {
  const obj = asObject(node);
  if (!obj) return out;
  const props = asObject(obj.properties);
  if (props) {
    const required = Array.isArray(obj.required)
      ? (obj.required as string[])
      : [];
    const missing = Object.keys(props).filter((k) => !required.includes(k));
    if (missing.length > 0) {
      out.push({ path, missingFromRequired: missing });
    }
    for (const [key, value] of Object.entries(props)) {
      collectObjectRequiredGaps(value, `${path}.properties.${key}`, out);
    }
  }
  if ("items" in obj) collectObjectRequiredGaps(obj.items, `${path}.items`, out);
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        collectObjectRequiredGaps(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function visualBlockKinds(schema: JsonSchema): string[] {
  const visual = asObject(asObject(schema.properties)?.visualComposition);
  const blocks = asObject(visual?.properties)?.blocks;
  const items = asObject(asObject(blocks)?.items);
  const anyOf = items?.anyOf;
  if (!Array.isArray(anyOf)) return [];
  return anyOf.map((variant) => {
    const kind = asObject(asObject(asObject(variant)?.properties)?.kind);
    return String(kind?.const ?? "");
  });
}

describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
  it("rejects z.unknown visualComposition as empty JSON Schema property", async () => {
    const broken = z.object({
      replyDraft: z.string(),
      visualComposition: z.unknown().optional(),
    });
    const serialized = await convert(broken);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    expect(
      Object.keys(visual ?? {}).filter((k) => k !== "description"),
    ).toEqual([]);
  });

  it("serializes VisualCompositionAgentOutputSchema without empty property schema", async () => {
    const wrapped = z.object({
      replyDraft: z.string(),
      visualComposition: VisualCompositionAgentOutputSchema.optional(),
    });
    const serialized = await convert(wrapped);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    expect(Object.keys(visual ?? {}).length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("serializes full NoraTurnQualificationSchema without empty visualComposition", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    const keys = Object.keys(visual ?? {}).filter(
      (k) => k !== "description",
    );
    expect(keys.length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("full D3 schema has no empty property schemas anywhere", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(findEmptyPropertySchemas(serialized.schema)).toEqual([]);
  });

  it("full D3 schema is a root object with additionalProperties false", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(serialized.type).toBe("json_schema");
    expect(serialized.schema.type).toBe("object");
    expect(serialized.schema.additionalProperties).toBe(false);
    expect(Array.isArray(serialized.schema.required)).toBe(true);
  });

  it("serializes all seven visual block variants under anyOf", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(visualBlockKinds(serialized.schema).sort()).toEqual([
      "choices",
      "comparison",
      "references",
      "relations",
      "sequence",
      "synthesis",
      "text",
    ]);
  });

  it("criteria[].values serializes as open record (additionalProperties schema)", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const opens = findOpenRecordObjects(serialized.schema);
    const valuesPath =
      "$.properties.visualComposition.properties.blocks.items.anyOf[1].properties.criteria.items.properties.values";
    const hit = opens.find((o) => o.path === valuesPath);
    expect(hit).toBeDefined();
    expect(hit?.additionalProperties).toEqual({ type: "string" });
  });

  it("documents Agents SDK convert path: strict=false for full D3 (optional fields)", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    // Production converter falls back when zodTextFormat cannot emit strict SO.
    expect(serialized.strict).toBe(false);
    const gaps = collectObjectRequiredGaps(serialized.schema);
    expect(gaps.some((g) => g.path === "$")).toBe(true);
    expect(
      gaps.find((g) => g.path === "$")?.missingFromRequired,
    ).toEqual(
      expect.arrayContaining([
        "clarifications",
        "continueChoices",
        "visualComposition",
      ]),
    );
  });

  it("openai zodTextFormat rejects full D3 (optional without nullable)", async () => {
    const { zodTextFormat } = await import("openai/helpers/zod");
    expect(() =>
      zodTextFormat(NoraTurnQualificationSchema as never, "output"),
    ).toThrow(/optional\(\).*nullable\(\)/);
  });

  it("Agents SDK prepareOpenAIStrictToolSchema rejects converted D3 schema", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const { prepareOpenAIStrictToolSchema } = await loadStrictHelpers();
    expect(() => prepareOpenAIStrictToolSchema(serialized.schema)).toThrow(
      /strict mode|additionalProperties|anyOf|optional/i,
    );
  });

  it("openai zodTextFormat rejects z.record criteria.values shape", async () => {
    const { zodTextFormat } = await import("openai/helpers/zod");
    const recordShape = z.object({
      values: z.record(z.string(), z.string().max(400)),
    });
    expect(() => zodTextFormat(recordShape as never, "output")).toThrow(
      /additionalProperties: false/,
    );
  });

  it("parseVisualComposition remains fail-closed for invalid composition", () => {
    expect(
      parseVisualComposition({
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "comparison", id: "c1", title: "t", alternatives: [] }],
      }),
    ).toBeNull();
  });

  it("parseVisualComposition accepts a minimal valid comparison with criteria values record", () => {
    const parsed = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "cmp1",
          title: "Options",
          textAlternative: "Deux options.",
          alternatives: [
            { id: "a", title: "A", summary: "Alpha" },
            { id: "b", title: "B", summary: "Beta" },
          ],
          criteria: [
            { id: "c1", label: "Effort", values: { a: "Faible", b: "Élevé" } },
          ],
        },
      ],
    });
    expect(parsed).not.toBeNull();
    expect(parsed?.blocks[0]?.kind).toBe("comparison");
  });

  it("text-only qualification without visualComposition remains valid", () => {
    const parsed = NoraTurnQualificationSchema.safeParse({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "goal",
      projectIntention: "intention",
      desiredOutcome: "outcome",
      initialScope: "scope",
      proposedProjectName: "",
      intents: [],
      replyDraft: "Réponse textuelle seule.",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.visualComposition).toBeUndefined();
    }
  });

  it("categorizes structured-output schema errors distinctly", () => {
    const c = categorizeProviderError(
      new Error("Invalid schema for response_format json_schema: empty object"),
    );
    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    expect(c.category).not.toContain("Invalid schema");
  });
});
```

## 10. Validations

| Gate | Résultat |
| --- | --- |
| Sérialisation SDK complète | DONE — `/tmp/nora-d3-schema.json` (local evidence) |
| Contrôles stricts récursifs | DONE — gap démontré |
| Vitest focused (schema+E05+adapter+OBS+sem) | **66 PASS** |
| Vitest PG integration | **29 files / 484 PASS** |
| `tsc --noEmit` | **32 errors** (préexistantes) ; **0** dans `semantic-qualification.ts` / `visual-composition.ts` / `nora-adapter.ts` / nouveau test |
| `npm run build` | **PASS** · BUILD_ID `n6nJl-Rx4-9s9yxwslhIJ` |
| `git diff` périmètre | tests + delivery-history uniquement |
| RECETTE | **inchangée** `:3200` / tip `34a5e102` / BUILD `xKkQienCXTPYIqkFElAuE` |

**Ne pas présenter tsc global comme PASS.**

Unitaires hors périmètre ayant échoué sur suite complète `tests/unit` (env GitHub App / cognitive policy lane) : **non attribués** à ce cycle ; surfaces Nora listées ci-dessus = PASS.

---

## 11. Fake / Real Qualification

| Niveau | État |
| --- | --- |
| Empty `{}` initial | DETERMINISTIC PROVEN (régression couverte) |
| Correctif typage `3f7863ba` | UNIT/BUILD/PG VERIFIED (cycle précédent + oracles renforcés) |
| Strict SO full-schema | **DETERMINISTIC GAP PROVEN** |
| LIVE fournisseur post-correctif | **NOT PROVEN** |
| Composition graphique LIVE | **NOT PROVEN** |

Sortie : **gap strict identifié** — pas de STRICT JSON SCHEMA COMPATIBILITY — DETERMINISTIC VERIFIED.

---

## 12. État final

| Item | Valeur |
| --- | --- |
| Branche DEV | `feat/next-ml4d-project-space-20261116` |
| SHA local | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Push produit | **AUCUN** |
| PR/merge/tag | **AUCUN** |
| RECETTE | inchangée |
| STABLE | NOT AVAILABLE |
| Versioning | NO RELEASE · PATCH CANDIDATE audit oracles only |

---

## 13. Blast radius / dette / trajectoire

- **Blast radius ce cycle :** tests + journal uniquement.
- **Dette :** D3 n'est pas strict-SO-compatible ; SDK opère en `strict:false`.
- **Trajectoire :** décision Morris (options A/B/C §6) → ensuite seulement deploy RECETTE + GO REAL smoke ≤2.

---

## 14. Prochain gate Morris

1. Trancher option A / B / C (§6).
2. Si A : GO déploiement RECETTE du tip `208aaa40` (ou `3f7863ba` minimum) puis GO REAL smoke.
3. Si B : GO delivery dédié hardening strict D3 (hors simple audit).
4. Revue ChatGPT de ce pack avant toute action RECETTE.

**Ne pas déployer RECETTE. Ne pas appeler OpenAI. Ne pas déclarer R01–R08. Ne pas rouvrir la grammaire visuelle.**
