# SFIA Review Pack FULL — Strategy A V0.6 (A7 intégrité + A2 textAlternative)

**Date/heure :** 2026-11-18T09:30:00+0100
**Cycle :** Critical CORRECTIVE/QA — matrice 06 V0.6
**GO Morris :** contrat Cursor intégrité canonique et convergence UX
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs tip :** `a6d9614ceeb2d15b04a19233cd506cd43e031354` (matrice 06 V0.6)
**Handoff précédent :** `0d912e14ff3ffa29760908658cf3f8d3c64b1601` / blob `c76ac0aab3b5eba4e0a8aa2e0b445dbeecdf67a3`
**Review Pack :** Full — réinitialisé (mono-cycle)
**ENV :** DEV · NO RELEASE · STABLE NOT AVAILABLE · pas push produit
**Fake/Real :** FAKE A7 **PROVEN** · DETERMINISTIC A2 **PROVEN** · T02 **PASS** · PG historique **NOT RUN** · LIVE/REAL **NOT RUN**

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| pwd | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e…` |
| Docs | `a6d9614c…` |
| Handoff WT | `0d912e14` / blob `c76ac0aa…` |
| STOP candidat | **NON** — WT = Strategy A + V0.5/V0.6 correctifs |

---

## 2. Diagnostic A7 — reproductibilité

| Cas | Zod | Parse | Derive | Validate (avant) | Validate (après) | Adapter |
| --- | --- | --- | --- | --- | --- | --- |
| A7-01 narrative-only | OK | n/a | n/a | COMPLETE replyDraft | inchangé | — |
| A7-02 canonical valide | OK | OK | OK | derive | derive | COMPLETE |
| A7-03/06 markdown vide/espaces | OK (string vide) | **null** | — | soft-drop + replyDraft brut | **CANONICAL_COMPOSITION_INVALID** | UNKNOWN |
| A7-05 anchors-only | OK | OK | EMPTY | soft-drop + replyDraft brut | **CANONICAL_COMPOSITION_EMPTY** | UNKNOWN |
| A7-07 unknown schema | SCHEMA_INVALID | — | — | refuse | refuse | — |
| A7-08 projection invalide | OK | null | — | soft-drop legacy | soft-drop legacy | — |
| A7-09 e05 invalide | OK | null | — | soft-drop legacy | soft-drop legacy | — |
| A7-10 divergent + canonical OK | OK | OK | OK | derive | derive | — |

**Branches atteignables non sûres (avant) :** A7-03/04/05/06 — **reproduites**.
**Inatteignables comme soft-path :** A7-07 (Zod envelope).

---

## 3. Correction A7

Politique :
- omission `visualComposition` → narrative OK ;
- legacy parse fail → soft-drop, `replyDraft` autorité ;
- `canonical-v1` parse fail → `CANONICAL_COMPOSITION_INVALID` ;
- `canonical-v1` derive EMPTY → `CANONICAL_COMPOSITION_EMPTY` ;
- overflow → `CANONICAL_REPLY_OVERFLOW` (inchangé) ;
- A4 fail-closed fixture conservé.

### Diff `semantic-qualification.ts` (extrait validate)

```diff
+  // Soft-sanitize visual composition.
+  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
+  // fall back to an independent replyDraft as if the composition validated.
+  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
+  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
   if (q.visualComposition !== undefined) {
+    const rawComp = q.visualComposition as { schemaVersion?: string };
+    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
     const cleaned = parseVisualComposition(q.visualComposition);
     if (cleaned) {
       (q as { visualComposition?: unknown }).visualComposition = cleaned;
+      if (cleaned.contentAuthority === "canonical_sections") {
+        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
+        if (!derived.ok) {
+          if (derived.reason === "CV_DERIVE_OVERFLOW") {
+            return {
+              ok: false,
+              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
+            };
+          }
+          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
+          return {
+            ok: false,
+            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
+          };
+        }
+        (q as { replyDraft: string }).replyDraft = derived.text;
+      }
+    } else if (declaredCanonical) {
+      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
     } else {
       delete (q as { visualComposition?: unknown }).visualComposition;
     }
   }
   return { ok: true, value: q };
+  // Soft-sanitize visual composition.
+  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
+  // fall back to an independent replyDraft as if the composition validated.
+  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
+  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
   if (q.visualComposition !== undefined) {
+    const rawComp = q.visualComposition as { schemaVersion?: string };
+    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
     const cleaned = parseVisualComposition(q.visualComposition);
     if (cleaned) {
       (q as { visualComposition?: unknown }).visualComposition = cleaned;
+      if (cleaned.contentAuthority === "canonical_sections") {
+        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
+        if (!derived.ok) {
+          if (derived.reason === "CV_DERIVE_OVERFLOW") {
+            return {
+              ok: false,
+              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
+            };
+          }
+          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
+          return {
+            ok: false,
+            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
+          };
+        }
+        (q as { replyDraft: string }).replyDraft = derived.text;
+      }
+    } else if (declaredCanonical) {
+      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
     } else {
       delete (q as { visualComposition?: unknown }).visualComposition;
     }
   }
   return { ok: true, value: q };
 }

 export function unavailableQualification(reason: string, replyDraft = ""): NoraTurnQualification {

```

## 4. A2 textAlternative

**Rôle retenu :** contenu canonique **complémentaire** — conservé s'il n'est pas intégralement inclus dans le corps structuré.
Remplace `body.includes(textAlternative.slice(0,80))` par `mergeTextAlternative(body, alt)`.

```diff

```

## 5. A3 / M1 PG

**HISTORICAL PG REPLAY — NOT RUN** — `127.0.0.1:5433` DOWN ce cycle.
Compat fixtures e05 / projection-v1 / canonical-v1 : PASS (A3 unit + A7-08/09).
Aucune migration.

## 6. A5 / A6 UX

- T02 Playwright : **PASS** (22.7s), e2e isolé `:3101`.
- **VISUAL REVIEW NOT COMPLETED** — captures locales non transportables via handoff MD.
- Topologies / sync / parallel : non régressés (Vitest).

## 7. Tests

| Suite | Résultat |
| --- | --- |
| Vitest ciblés A1–A7 + composition + schema + E05 | **109 PASS** |
| Playwright T02 | **1 PASS** |
| tsc fichiers touchés src | **CLEAN** |
| tsc global | erreurs préexistantes tests (champs intention) — hors périmètre |
| PG historique | **NOT RUN** |
| LIVE | **NOT RUN** |

Commande Vitest :
`npx vitest run tests/unit/canonical-integrity-a7-a2.test.ts tests/unit/strategy-a-corrective-a1-a4.test.ts tests/unit/fixture-reply-a4-adapter-boundary.test.ts tests/unit/canonical-sections-strategy-a.test.ts tests/unit/conversational-composition-admission.test.ts tests/unit/conversational-composition-fidelity.test.ts tests/unit/ensemble05-visual-composition.test.ts tests/unit/nora-live-output-schema.test.ts tests/unit/nora-e2e-fixture.test.ts`

## 8. C-01–C-22 (V0.6 après)

| C | Après |
| --- | --- |
| C-02/04 | A7 sécurisé — pas de bascule silencieuse d'autorité |
| C-07 | narrative-only préservée |
| C-05/06 | tri-version préservé |
| C-17 | textAlternative sans perte de suffixe |
| C-18 | VISUAL NOT COMPLETED |
| C-20 | 109+T02 ; PG NOT RUN |
| C-22 | Gate C non franchi |

Détail : `c-matrix-strategy-a-v06.md`

## 9. Fake/Real / Gates / Verdict

DETERMINISTIC PROVEN ≠ READY FOR REAL.

**READY WITH RESERVES** — réserves : PG historique NOT RUN ; VISUAL REVIEW NOT COMPLETED ; LIVE NOT RUN.

---

## 10. Contenu intégral — fichiers de ce cycle

### Blobs
| Blob | Fichier |
| --- | --- |
| `b4cd20dd3c62264e521c52554717579f431f725a` | semantic-qualification.ts |
| `45ffbd5a15e308c62c34f7b42c3be8e66ce026eb` | admission.ts |
| `6462ce4d4ae67a8c1c0bf0f964dfead9390a8afd` | canonical-integrity-a7-a2.test.ts |

### `validateNoraTurnQualification` composition gate (extrait)
```ts
  // Soft-sanitize visual composition.
  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
  // fall back to an independent replyDraft as if the composition validated.
  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
  if (q.visualComposition !== undefined) {
    const rawComp = q.visualComposition as { schemaVersion?: string };
    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
    const cleaned = parseVisualComposition(q.visualComposition);
    if (cleaned) {
      (q as { visualComposition?: unknown }).visualComposition = cleaned;
      if (cleaned.contentAuthority === "canonical_sections") {
        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
        if (!derived.ok) {
          if (derived.reason === "CV_DERIVE_OVERFLOW") {
            return {
              ok: false,
              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
            };
          }
          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
          return {
            ok: false,
            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
          };
        }
        (q as { replyDraft: string }).replyDraft = derived.text;
      }
    } else if (declaredCanonical) {
      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
    } else {
      delete (q as { visualComposition?: unknown }).visualComposition;
    }
  }
  return { ok: true, value: q };
}

```

### `mergeTextAlternative` + fallback (admission.ts extraits)
```ts
/**
 * Merge structured fallback with textAlternative.
 * Contract A2: textAlternative is complementary canon when not fully redundant.
 * Never decide by prefix-80 heuristic (silent suffix loss).
 * Full inclusion → skip; otherwise append entire alternative (overflow stays explicit upstream).
 */
export function mergeTextAlternative(body: string, textAlternative: string | undefined): string {
  const alt = (textAlternative ?? "").trim();
  const core = body.trim();
  if (!alt) return core;
  if (!core) return alt;
  if (core.includes(alt)) return core;
  return `${core}\n${alt}`;
}

/**
 * Exhaustive human-readable fallback from validated block fields.
 * Never truncates. Prefer this over abbreviated textAlternative alone.
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
```

### `tests/unit/canonical-integrity-a7-a2.test.ts` (intégral)
```ts
/**
 * A7 — canonical invalid/empty integrity + A2 textAlternative exhaustiveness.
 * Adapter-boundary cases use generateNoraReply (not validate alone).
 */
import { afterEach, describe, expect, it } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  buildExhaustiveBlockFallback,
  deriveReplyDraftFromCanonicalSections,
  mergeTextAlternative,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
} from "@/domains/conversation/visual-composition";

const BASE = {
  schemaVersion: "ml4c-sem-qual-v1" as const,
  status: "QUALIFIED" as const,
  goal: "a7",
  projectIntention: "",
  desiredOutcome: "",
  initialScope: "",
  proposedProjectName: "",
  intents: [] as [],
  clarifications: [] as string[],
};

describe("A7 — canonical integrity (validate + adapter)", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevForce = process.env.STUDIO_FORCE_NORA_FIXTURE;
  const prevKey = process.env.OPENAI_API_KEY;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevForce === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    else process.env.STUDIO_FORCE_NORA_FIXTURE = prevForce;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
  });

  function forceFixture() {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  }

  it("A7-01 narrative-only: no visualComposition → replyDraft authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Réponse narrative volontaire sans composition.",
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Réponse narrative volontaire sans composition.");
  });

  it("A7-02 canonical-v1 valid → derived text wins", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "DIVERGENT_A_ECRASER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Prose canonique A7-02." }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Prose canonique A7-02.");
    expect(v.value.replyDraft).not.toContain("DIVERGENT");
  });

  it("A7-03/06 canonical empty markdown → CANONICAL_COMPOSITION_INVALID (reachable)", () => {
    // Zod accepts empty markdown; parseText rejects → declared canonical unusable.
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "NE_DOIT_PAS_SURVIVRE_COMME_COMPLETE",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "   " }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("CANONICAL_COMPOSITION_INVALID");
  });

  it("A7-05 canonical anchors-only → CANONICAL_COMPOSITION_EMPTY (reachable)", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "BRUT_INDEPENDANT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          { kind: "choices", id: "ch", choiceIds: ["c1"] },
          { kind: "references", id: "rf", resourceIds: ["r1"] },
        ],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^CANONICAL_COMPOSITION_EMPTY/);
  });

  it("A7-04 canonical text empty after trim via only spaces in multi — invalid", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "x",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "" }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("CANONICAL_COMPOSITION_INVALID");
  });

  it("A7-07 unknown schema → SCHEMA_INVALID at envelope (not soft-path)", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "legacy reply",
      visualComposition: {
        schemaVersion: "unknown-composition-v9",
        blocks: [{ kind: "text", id: "t", markdown: "x" }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^SCHEMA_INVALID/);
  });

  it("A7-08 projection-v1 invalid → soft-drop, replyDraft legacy authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Autorité Strategy B historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t", markdown: "   " }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Autorité Strategy B historique");
  });

  it("A7-09 e05 invalid → soft-drop, replyDraft legacy authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Autorité E05 historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
        blocks: [{ kind: "text", id: "t", markdown: "" }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Autorité E05 historique");
  });

  it("A7-10 divergent replyDraft with valid canonical → overwritten", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "INDEPENDANT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Source unique." }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Source unique.");
  });

  it("A7 adapter: anchors-only canonical → UNKNOWN not COMPLETE", async () => {
    forceFixture();
    const key = `E05_A7_ANCHORS_${Date.now()}`;
    registerFixtureScenario(key, {
      ...BASE,
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "a7",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      replyDraft: "NE_PAS_FINALISER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "choices", id: "ch", choiceIds: ["c1"] }],
      },
    });
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: buildCognitivePolicy(key, "TEST_BOUNDARY"),
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.content).not.toBe("NE_PAS_FINALISER");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
  });

  it("A7 adapter: empty canonical text → UNKNOWN", async () => {
    forceFixture();
    const key = `E05_A7_EMPTY_${Date.now()}`;
    registerFixtureScenario(key, {
      ...BASE,
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "a7",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      replyDraft: "BRUT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "  " }],
      },
    });
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: buildCognitivePolicy(key, "TEST_BOUNDARY"),
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.streamingNotes ?? "").toMatch(/CANONICAL_COMPOSITION/);
  });
});

describe("A2 — textAlternative complementary (no prefix-80 drop)", () => {
  it("merge: full redundant skipped; partial/complementary preserved", () => {
    expect(mergeTextAlternative("Alpha vs Beta", "Alpha vs Beta")).toBe("Alpha vs Beta");
    const prefix =
      "Alpha vs Beta — comparaison des options de déploiement pour le portefeuille";
    const alt = `${prefix} ; réserve: dépendances externes non couvertes.`;
    const merged = mergeTextAlternative(prefix, alt);
    expect(merged).toContain("réserve: dépendances externes non couvertes.");
    expect(merged.startsWith(prefix)).toBe(true);
  });

  it("A2 comparison: suffix after shared 80-char prefix is kept in derive", () => {
    const body =
      "Options\nA: rapide\nB: robuste\n" +
      "détail comparatif pour atteindre plus de quatre-vingts caractères utiles.";
    expect(body.length).toBeGreaterThan(80);
    const altLong = `${body} — réserve critique: plafond budgétaire non confirmé.`;
    // Old heuristic would treat alt as redundant because first 80 chars ⊆ body
    expect(body.includes(altLong.slice(0, 80))).toBe(true);
    expect(mergeTextAlternative(body, altLong)).toContain("plafond budgétaire");

    const withReserve = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c2",
          title: "Options",
          alternatives: [
            { id: "a", title: "A", summary: "rapide" },
            { id: "b", title: "B", summary: "robuste" },
          ],
          textAlternative: altLong,
        },
      ],
    });
    expect(withReserve).toBeTruthy();
    const d = deriveReplyDraftFromCanonicalSections(withReserve!);
    expect(d.ok).toBe(true);
    if (d.ok) expect(d.text).toContain("plafond budgétaire non confirmé");
  });

  it("A2 relations/sequence/synthesis: complementary alt preserved", () => {
    const relations = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Deps",
          nodes: [
            { id: "a", label: "A", kind: "fact" },
            { id: "b", label: "B", kind: "finding" },
          ],
          edges: [{ from: "a", to: "b", relation: "depends_on" }],
          textAlternative: "Deps nuance: lien conditionnel non bloquant si contournement.",
        },
      ],
    });
    const sequence = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Traj",
          steps: [
            { id: "s1", title: "Etape 1" },
            { id: "s2", title: "Etape 2" },
          ],
          textAlternative: "Traj reserve temporelle: fenetre S3 uniquement.",
        },
      ],
    });
    const synthesis = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "Synth",
          items: [{ id: "i1", label: "Point", tone: "finding" }],
          textAlternative: "Synth hypothese non tranchee cote metiers.",
        },
      ],
    });
    expect(relations).toBeTruthy();
    expect(sequence).toBeTruthy();
    expect(synthesis).toBeTruthy();
    expect(buildExhaustiveBlockFallback(relations!.blocks[0]!)).toContain("contournement");
    expect(buildExhaustiveBlockFallback(sequence!.blocks[0]!)).toContain("fenetre S3");
    expect(buildExhaustiveBlockFallback(synthesis!.blocks[0]!)).toContain("hypothese non tranchee");
  });

  it("A2 contradictory alt still preserved (no silent drop)", () => {
    const body = "Recommandation A";
    const alt = "Recommandation A est à éviter — privilégier B.";
    expect(mergeTextAlternative(body, alt)).toContain("privilégier B");
  });
});
```

### `admission.ts` (intégral — A2 merge)
```ts
/**
 * Conversational composition — Studio admission & variant selection (CV-*).
 * Deterministic presentation policy only — never invents facts or authority.
 * Consumes validated visual compositions (legacy wire) after fail-closed parse.
 *
 * Body substitution (Strategy B): structural render-completeness only.
 * Never claims replyDraft semantic equivalence from Zod success.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import {
  compositionOwnsBody,
  hasGraphicBlocks,
} from "@/domains/conversation/visual-composition";
import { mayPresentGraphicComposition, maySubstituteNarrative } from "./fidelity";
import { validateRelationsTopology } from "./topology";

export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;

/** Families delivered when wire+layout support them. */
export type CompositionFamily =
  | "narrative"
  | "comparison"
  | "sequence"
  | "dependencies"
  | "decisionPaths"
  | "parallelProcess"
  | "references"
  | "choices";

export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
export type SequenceVariant = "horizontal" | "vertical" | "text";
/** Directed layouts + exhaustive list fallback (no fixed-coordinate SVG). */
export type RelationsVariant = "directed" | "list" | "text";

/**
 * substitute — composition may replace replyDraft body (structural completeness only).
 * complement — keep replyDraft visible; composition is additive.
 * markdown_only — do not render composition as body owner.
 */
export type BodyPresentationPolicy = "substitute" | "complement" | "markdown_only";

export type AdmittedBlock = {
  block: VisualBlock;
  family: CompositionFamily;
  variant: string;
  reasonCodes: string[];
};

export type AdmissionResult = {
  contract: typeof CONVERSATIONAL_COMPOSITION_CONTRACT;
  ownsBody: boolean;
  /** Deterministic body policy — not a semantic equality proof vs replyDraft. */
  bodyPolicy: BodyPresentationPolicy;
  admitted: AdmittedBlock[];
  fallbackReasons: string[];
  capacityNotes: string[];
  containerWidthPx: number | null;
};

export type AdmissionContext = {
  /** Effective Travail conversation column width when known. */
  containerWidthPx?: number | null;
  /** Canonical replyDraft / message content — required for graphic presentation (C-04). */
  canonicalText?: string | null;
};

function labelLen(s: string | undefined): number {
  return (s ?? "").trim().length;
}

function maxOptionTextLen(block: Extract<VisualBlock, { kind: "comparison" }>): number {
  let max = 0;
  for (const o of block.alternatives) {
    max = Math.max(max, labelLen(o.title) + labelLen(o.summary));
    for (const a of o.pros ?? []) max = Math.max(max, labelLen(a));
    for (const c of o.cons ?? []) max = Math.max(max, labelLen(c));
  }
  return max;
}

/**
 * CV-04/05 — comparison variant from cardinality, label density, and width.
 * No dogmatic "N cards" threshold alone.
 */
export function selectComparisonVariant(
  block: Extract<VisualBlock, { kind: "comparison" }>,
  widthPx: number | null,
): { variant: ComparisonVariant; reasonCodes: string[] } {
  const n = block.alternatives.length;
  const density = maxOptionTextLen(block);
  const criteria = block.criteria?.length ?? 0;
  const reasons: string[] = [];

  if (n < 2) {
    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 18) {
    reasons.push("CV_COMPARISON_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }

  const narrow = widthPx != null && widthPx < 560;
  const medium = widthPx != null && widthPx < 900;

  if (n >= 5 || criteria >= 3 || (n >= 4 && density > 220)) {
    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
    // Narrow: stacked keeps all substance without horizontal table pressure.
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  if (narrow || (n >= 3 && density > 280)) {
    reasons.push(narrow ? "CV_COMPARISON_NARROW_STACK" : "CV_COMPARISON_LONG_COPY_STACK");
    return { variant: "stacked", reasonCodes: reasons };
  }
  if (medium && n >= 3) {
    reasons.push("CV_COMPARISON_MEDIUM_CARDS");
    return { variant: "cards", reasonCodes: reasons };
  }
  reasons.push("CV_COMPARISON_CARDS");
  return { variant: "cards", reasonCodes: reasons };
}

export function selectSequenceVariant(
  block: Extract<VisualBlock, { kind: "sequence" }>,
  widthPx: number | null,
): { variant: SequenceVariant; reasonCodes: string[] } {
  const n = block.steps.length;
  const long = block.steps.some((s) => labelLen(s.title) + labelLen(s.detail) > 160);
  const reasons: string[] = [];
  if (n === 0) {
    reasons.push("CV_SEQUENCE_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 12) {
    reasons.push("CV_SEQUENCE_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }
  const narrow = widthPx != null && widthPx < 720;
  if (narrow || n >= 5 || long) {
    reasons.push(narrow ? "CV_SEQUENCE_NARROW_VERTICAL" : "CV_SEQUENCE_VERTICAL_DENSITY");
    return { variant: "vertical", reasonCodes: reasons };
  }
  reasons.push("CV_SEQUENCE_HORIZONTAL");
  return { variant: "horizontal", reasonCodes: reasons };
}

/**
 * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
 * Fixed-coordinate SVG remains forbidden.
 */
export function selectRelationsVariant(
  block: Extract<VisualBlock, { kind: "relations" }>,
  widthPx: number | null,
): { variant: RelationsVariant; reasonCodes: string[] } {
  const nodes = block.nodes.length;
  const edges = block.edges.length;
  const reasons: string[] = [];
  if (nodes === 0) {
    reasons.push("CV_RELATIONS_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  const ids = new Set(block.nodes.map((n) => n.id));
  const orphan = block.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
  if (orphan) {
    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.preferListFallback) {
    reasons.push("CV_RELATIONS_PREFER_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  // F2 — structural topology before claiming directed layout.
  if (block.layoutHint || edges > 0) {
    const topo = validateRelationsTopology(
      block.layoutHint
        ? block
        : { ...block, layoutHint: "dependencies" },
    );
    reasons.push(...topo.reasonCodes);
    if (!topo.ok || topo.mode === "list") {
      reasons.push("CV_RELATIONS_TOPOLOGY_LIST_FALLBACK");
      return { variant: "list", reasonCodes: reasons };
    }
  }
  const dense = nodes > 10 || edges > 14;
  const narrow = widthPx != null && widthPx < 520;
  const longLabels = block.nodes.some((n) => (n.label?.length ?? 0) > 80);
  if (dense || narrow || longLabels) {
    reasons.push(
      dense
        ? "CV_RELATIONS_DENSE_LIST"
        : narrow
          ? "CV_RELATIONS_NARROW_LIST"
          : "CV_RELATIONS_LONG_LABEL_LIST",
    );
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.layoutHint || edges > 0) {
    reasons.push("CV_RELATIONS_DIRECTED_LAYOUT");
    return { variant: "directed", reasonCodes: reasons };
  }
  reasons.push("CV_RELATIONS_STRUCTURED_LIST");
  return { variant: "list", reasonCodes: reasons };
}

function familyFor(block: VisualBlock): CompositionFamily {
  switch (block.kind) {
    case "comparison":
      return "comparison";
    case "sequence":
      return "sequence";
    case "relations":
      if (block.layoutHint === "decisionTree") return "decisionPaths";
      if (block.layoutHint === "parallelProcess") return "parallelProcess";
      return "dependencies";
    case "synthesis":
    case "text":
      return "narrative";
    case "choices":
      return "choices";
    case "references":
      return "references";
    default:
      return "narrative";
  }
}

/**
 * Merge structured fallback with textAlternative.
 * Contract A2: textAlternative is complementary canon when not fully redundant.
 * Never decide by prefix-80 heuristic (silent suffix loss).
 * Full inclusion → skip; otherwise append entire alternative (overflow stays explicit upstream).
 */
export function mergeTextAlternative(body: string, textAlternative: string | undefined): string {
  const alt = (textAlternative ?? "").trim();
  const core = body.trim();
  if (!alt) return core;
  if (!core) return alt;
  if (core.includes(alt)) return core;
  return `${core}\n${alt}`;
}

/**
 * Exhaustive human-readable fallback from validated block fields.
 * Never truncates. Prefer this over abbreviated textAlternative alone.
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "comparison") {
    const parts: string[] = [block.title];
    for (const a of block.alternatives) {
      parts.push(`${a.title}: ${a.summary}`);
      if (a.pros?.length) parts.push(`Avantages — ${a.pros.join("; ")}`);
      if (a.cons?.length) parts.push(`Limites — ${a.cons.join("; ")}`);
    }
    if (block.criteria?.length) {
      for (const c of block.criteria) {
        const vals = block.alternatives
          .map((a) => `${a.title}: ${c.values[a.id] ?? "—"}`)
          .join(" ; ");
        parts.push(`${c.label} — ${vals}`);
      }
    }
    if (block.recommendation) parts.push(`Recommandation: ${block.recommendation}`);
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "sequence") {
    const parts: string[] = [block.title];
    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
    block.steps.forEach((s, i) => {
      let line = `${i + 1}. ${s.title}`;
      if (s.role) line += ` {${s.role}}`;
      if (s.detail) line += ` — ${s.detail}`;
      if (s.dependsOn?.length) {
        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
      }
      if (s.dateLabel) line += ` [${s.dateLabel}]`;
      parts.push(line);
    });
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "relations") {
    const parts: string[] = [block.title];
    if (block.layoutHint) parts.push(`Disposition: ${block.layoutHint}`);
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    for (const n of block.nodes) {
      let line = `Élément: ${n.label}`;
      if (n.kind) line += ` [${n.kind}]`;
      if (n.laneId) line += ` (voie: ${n.laneId})`;
      if (n.detail) line += ` — ${n.detail}`;
      parts.push(line);
    }
    for (const e of block.edges) {
      const from = titleById.get(e.from) ?? e.from;
      const to = titleById.get(e.to) ?? e.to;
      const rel = e.relation ?? "flow";
      // Keep wire direction from→to; annotate relation without inventing inverse sense.
      const sense =
        rel === "condition_true"
          ? `Si oui (${from}) → ${to}`
          : rel === "condition_false"
            ? `Si non (${from}) → ${to}`
            : rel === "sync"
              ? `${from} synchronise vers ${to}`
              : rel === "depends_on"
                ? `${from} → ${to} (depends_on)`
                : `${from} → ${to}`;
      const withLabel = e.label ? `${sense} (${e.label})` : sense;
      parts.push(`${withLabel} · relation=${rel}`);
    }
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "synthesis") {
    const parts: string[] = [block.title];
    for (const it of block.items) {
      let line = it.detail ? `${it.label}: ${it.detail}` : it.label;
      if (it.tone) line += ` [${it.tone}]`;
      if (it.role) line += ` {${it.role}}`;
      parts.push(line);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  return "";
}

/**
 * Structural completeness of projection fields that the renderer will expose visibly.
 * Does NOT prove equivalence with replyDraft.
 */
export function projectionSubstanceRenderComplete(composition: VisualComposition): boolean {
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      if (!block.markdown.trim()) return false;
      continue;
    }
    if (block.kind === "comparison") {
      if (block.alternatives.length < 2) return false;
      for (const a of block.alternatives) {
        if (!a.title.trim() || !a.summary.trim()) return false;
      }
      if (!block.textAlternative.trim() && !buildExhaustiveBlockFallback(block).trim()) {
        return false;
      }
      continue;
    }
    if (block.kind === "sequence") {
      if (block.steps.length < 1) return false;
      for (const s of block.steps) {
        if (!s.title.trim()) return false;
      }
      continue;
    }
    if (block.kind === "relations") {
      if (block.nodes.length < 1) return false;
      for (const n of block.nodes) {
        if (!n.label.trim()) return false;
      }
      continue;
    }
    if (block.kind === "synthesis") {
      if (block.items.length < 1) return false;
      for (const it of block.items) {
        if (!it.label.trim()) return false;
      }
    }
  }
  return composition.blocks.some(
    (b) => b.kind !== "choices" && b.kind !== "references",
  );
}

/**
 * C-04 — graphic compositions never substitute the canonical body.
 * They may complement only when deterministic anchor alignment passes.
 * Otherwise markdown_only (visual refused — no misleading dual presentation).
 */
function decideBodyPolicy(
  composition: VisualComposition,
  ownsBody: boolean,
  _admitted: AdmittedBlock[],
  fallbackReasons: string[],
  canonicalText: string | null | undefined,
): BodyPresentationPolicy {
  if (!ownsBody) return "markdown_only";

  // Strategy A — single semantic authority: sections own substance; body policy is identity-based.
  if (composition.contentAuthority === "canonical_sections") {
    if (!projectionSubstanceRenderComplete(composition)) {
      fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
      return "markdown_only";
    }
    if (!hasGraphicBlocks(composition)) {
      fallbackReasons.push("CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE");
      return "substitute";
    }
    fallbackReasons.push("CV_BODY_CANONICAL_GRAPHIC_COMPLEMENT");
    return "complement";
  }

  const narrativeOnly = fallbackReasons.includes("CV_NARRATIVE_ONLY");
  if (narrativeOnly && !hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  if (!projectionSubstanceRenderComplete(composition)) {
    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
    return "markdown_only";
  }

  if (!hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  const fidelity = mayPresentGraphicComposition(composition, canonicalText);
  fallbackReasons.push(...fidelity.reasonCodes);
  if (!fidelity.ok) {
    return "markdown_only";
  }
  // Legacy dual-author: aligned graphics complement replyDraft (never mask).
  fallbackReasons.push("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  return "complement";
}

/**
 * Admit a fail-closed-parsed composition into presentable blocks with variants.
 * CV-10: callers must isolate render errors per block.
 */
export function admitConversationalComposition(
  composition: VisualComposition | null | undefined,
  ctx: AdmissionContext = {},
): AdmissionResult {
  const width = ctx.containerWidthPx ?? null;
  const fallbackReasons: string[] = [];
  const capacityNotes: string[] = [];

  if (!composition) {
    return {
      contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
      ownsBody: false,
      bodyPolicy: "markdown_only",
      admitted: [],
      fallbackReasons: ["CV_NO_COMPOSITION"],
      capacityNotes,
      containerWidthPx: width,
    };
  }

  const ownsBody = compositionOwnsBody(composition);
  if (!ownsBody) {
    fallbackReasons.push("CV_COMPOSITION_DOES_NOT_OWN_BODY");
  }
  if (!hasGraphicBlocks(composition) && composition.blocks.every((b) => b.kind === "text")) {
    fallbackReasons.push("CV_NARRATIVE_ONLY");
  }

  capacityNotes.push("CV_WIRE_MAX_ALTS_12");
  capacityNotes.push("CV_SCHEMA_READ_E05_PROJECTION_V1_CANONICAL_V1");
  capacityNotes.push("CV_SCHEMA_WRITE_CANONICAL_V1_ONLY");

  const admitted: AdmittedBlock[] = [];
  for (const block of composition.blocks) {
    const family = familyFor(block);
    if (block.kind === "comparison") {
      const sel = selectComparisonVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "sequence") {
      const sel = selectSequenceVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "relations") {
      const sel = selectRelationsVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    admitted.push({
      block,
      family,
      variant: block.kind === "synthesis" ? "callout" : "default",
      reasonCodes: ["CV_DEFAULT_VARIANT"],
    });
  }

  const bodyPolicy = decideBodyPolicy(
    composition,
    ownsBody,
    admitted,
    fallbackReasons,
    ctx.canonicalText,
  );

  return {
    contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
    ownsBody,
    bodyPolicy,
    admitted,
    fallbackReasons,
    capacityNotes,
    containerWidthPx: width,
  };
}
```

### `c-matrix-strategy-a-v06.md`
```md
# Matrice A7/A2/A3/A5 — Strategy A (06 V0.6)

**Candidat :** `sfia/next-ml4d-composition-adaptative` @ `a783f014` (+ WT)
**Date :** 2026-11-18 · Lane DEV · NO RELEASE

| ID | Avant (V0.6 entrée) | Après | Preuve | Exit |
| --- | --- | --- | --- | --- |
| **A7 / P0** | `CV_DERIVE_EMPTY` / parse-null → soft-drop + `replyDraft` indépendant | Canonical déclaré inutilisable → `CANONICAL_COMPOSITION_*` refuse ; narrative-only OK ; legacy soft-drop OK | `canonical-integrity-a7-a2` + adapter UNKNOWN | **CLOSED** |
| **A2 / P1** | heuristique `slice(0,80)` | `mergeTextAlternative` : inclusion totale ou append intégral | A2 unit + derive | **CLOSED** |
| **A3 / M1** | fixtures tri-version | inchangé ; PG historique | fixtures A3 ; PG 5433 DOWN | **HISTORICAL PG REPLAY — NOT RUN** |
| **A4** | fail-closed V0.5 | conservé | fixture-reply-a4 | **PRESERVED** |
| **A5/A6** | T02 + PNG locaux | T02 re-PASS ; handoff sans PNG | T02 | **VISUAL REVIEW NOT COMPLETED** |

## Fake / Real

| Niveau | Statut |
| --- | --- |
| FAKE A7 adapter | **PROVEN** |
| DETERMINISTIC A2 | **PROVEN** |
| BROWSER T02 | **PASS** |
| PG historique | **NOT RUN** |
| LIVE/REAL | **NOT RUN** |
```

### Diff complet semantic-qualification.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 3a2a2875..b4cd20dd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -10,8 +10,27 @@ import {
 import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
 import {
   parseVisualComposition,
+  VISUAL_COMPOSITION_SCHEMA,
+  VISUAL_COMPOSITION_SCHEMA_LEGACY,
+  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
   VisualCompositionAgentOutputSchema,
 } from "./visual-composition";
+import { deriveReplyDraftFromCanonicalSections } from "./conversational-composition/derive-text";
+
+/**
+ * READ/validate envelope — accepts historical e05 + projection-v1 + canonical-v1.
+ * Reuses concrete block union (no empty `{}` JSON Schema). Runtime authority remains
+ * parseVisualComposition. LIVE Agent outputType = NoraTurnQualificationAgentSchema.
+ */
+const VisualCompositionPersistedSchema = z.object({
+  schemaVersion: z.enum([
+    VISUAL_COMPOSITION_SCHEMA,
+    VISUAL_COMPOSITION_SCHEMA_PROJECTION,
+    VISUAL_COMPOSITION_SCHEMA_LEGACY,
+  ]),
+  blocks: VisualCompositionAgentOutputSchema.shape.blocks,
+});
+

 export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

@@ -198,15 +217,19 @@ export const NoraTurnQualificationSchema = z.object({
   documentProposal: DocumentProposalSchema.optional(),
   documentSource: DocumentSourceSchema.optional(),
   /**
-   * Ensemble 05 / T02 — optional visual composition (structured blocks).
-   * Omission = text-only reply. Never HTML/JS. Studio re-validates before persist/render.
-   * Must be a concrete Zod object (not z.unknown): empty `{}` JSON Schema breaks
-   * OpenAI strict structured outputs and surfaces as PROVIDER_ERROR / UNKNOWN.
+   * Optional visual / canonical composition.
+   * READ path accepts e05 + projection-v1 + canonical-v1; Studio re-validates via parseVisualComposition.
+   * LIVE WRITE uses NoraTurnQualificationAgentSchema (canonical-v1 only — no empty `{}` schema).
    */
-  visualComposition: VisualCompositionAgentOutputSchema.optional(),
+  visualComposition: VisualCompositionPersistedSchema.optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

+/** Agents SDK outputType — WRITE canonical-v1 only (A3). */
+export const NoraTurnQualificationAgentSchema = NoraTurnQualificationSchema.extend({
+  visualComposition: VisualCompositionAgentOutputSchema.optional(),
+});
+
 export type QualificationValidation =
   | { ok: true; value: NoraTurnQualification }
   | { ok: false; reason: string };
@@ -278,11 +301,36 @@ export function validateNoraTurnQualification(raw: unknown): QualificationValida
   for (const id of ids) {
     if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
   }
-  // T02 — soft-sanitize visual composition; never fail the whole qualification on bad visuals.
+  // Soft-sanitize visual composition.
+  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
+  // fall back to an independent replyDraft as if the composition validated.
+  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
+  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
   if (q.visualComposition !== undefined) {
+    const rawComp = q.visualComposition as { schemaVersion?: string };
+    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
     const cleaned = parseVisualComposition(q.visualComposition);
     if (cleaned) {
       (q as { visualComposition?: unknown }).visualComposition = cleaned;
+      if (cleaned.contentAuthority === "canonical_sections") {
+        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
+        if (!derived.ok) {
+          if (derived.reason === "CV_DERIVE_OVERFLOW") {
+            return {
+              ok: false,
+              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
+            };
+          }
+          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
+          return {
+            ok: false,
+            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
+          };
+        }
+        (q as { replyDraft: string }).replyDraft = derived.text;
+      }
+    } else if (declaredCanonical) {
+      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
     } else {
       delete (q as { visualComposition?: unknown }).visualComposition;
     }
```

### Diff complet admission.ts
```diff
```

### Modules Strategy A toujours présents (hash-object)
- 1e305f704fd78b5b16e9fdde23f5521a49c6ec4e  projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/derive-text.ts
- 7d6998e40e748a6f1ac79377acc9cdabc56731a5  projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/topology.ts
- 7c1c7561062cf104d74d416812c41ee4fd6a06ac  projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/fidelity.ts
- be83778a2da0ccb89348fb33181a19cc87b388c1  projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
- 22e1eddd719d8c84f3ed167d981ecba17f240801  projects/sfia-studio-next/web/tests/unit/fixture-reply-a4-adapter-boundary.test.ts

### derive-text.ts (intégral)
```ts
/**
 * Deterministic text derivation from canonical semantic sections (Strategy A / C-01–C-04).
 * Preserves narrative prose from text blocks; appends exhaustive structured fallbacks
 * for graphic sections so no substance is dropped.
 * Never invents facts. Never calls an LLM.
 * Never silently truncates (A1) — overflow is an explicit fail.
 */

import { buildExhaustiveBlockFallback } from "./admission";
import type { VisualComposition } from "@/domains/conversation/visual-composition";
import { compositionOwnsBody } from "@/domains/conversation/visual-composition";

/** Envelope limit aligned with replyDraft Zod max — not raised arbitrarily. */
export const REPLY_DRAFT_MAX_CHARS = 12000;

export type DeriveReplyDraftResult =
  | { ok: true; text: string; length: number }
  | { ok: false; reason: "CV_DERIVE_EMPTY" }
  | { ok: false; reason: "CV_DERIVE_OVERFLOW"; length: number; max: number };

/**
 * Derive Pilote-facing Markdown from a composition that owns message substance.
 * Overflow → explicit failure (no slice). Caller must not present FINAL incomplete.
 */
export function deriveReplyDraftFromCanonicalSections(
  composition: VisualComposition,
): DeriveReplyDraftResult {
  if (!compositionOwnsBody(composition)) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  const parts: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      const md = block.markdown.trim();
      if (md) parts.push(md);
      continue;
    }
    const fb = buildExhaustiveBlockFallback(block).trim();
    if (fb) parts.push(fb);
  }
  const joined = parts.join("\n\n").trim();
  if (!joined) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  if (joined.length > REPLY_DRAFT_MAX_CHARS) {
    return {
      ok: false,
      reason: "CV_DERIVE_OVERFLOW",
      length: joined.length,
      max: REPLY_DRAFT_MAX_CHARS,
    };
  }
  return { ok: true, text: joined, length: joined.length };
}
```

---

## 11. Instruction ChatGPT

Avant réponse à Morris : relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` ; vérifier commit/blob ; confronter à **matrice 06 V0.6** ; distinguer FAKE proven vs PG/VISUAL/LIVE non prouvés.

**Fin Review Pack Full — Strategy A V0.6.**
