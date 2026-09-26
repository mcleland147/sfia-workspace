# NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — FINAL FAIL-CLOSED CORRECTION

- **Date/heure:** 2026-09-26T20:03:40+0200
- **Profil:** Critical
- **Macro:** NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — SAME-MACRO FINAL CORRECTION
- **Verdict of this cycle: READY FOR COMMIT**

## 1. Relation au handoff précédent

Référence obligatoire consommée :
- commit: `06162fa4da573f14a5963433849b8f99862dc42b`
- blob: `8b2505847351a6c01bc3e7150cebe35ccd000ed5`
- verdict précédent: READY FOR COMMIT (avec gap ChatGPT sur ambiguïté)

Ce pack documente **uniquement** la correction fail-closed NONE ≠ AMBIGUOUS.
Le reste du macro (EP1–EP9, EP11–EP20 hors EP10) est inchangé et référencé au handoff `06162fa4`.

## 2. Local Git Truth Check (initial)

| Check | Value |
|---|---|
| branch | `feat/sfia-studio-native-execution-loop-convergence-01` |
| HEAD | `0e68c15339cea90926c7b2f745a5ecf773020aec` |
| origin/main | `0e68c15339cea90926c7b2f745a5ecf773020aec` |
| staged | none |
| continuity | working tree = macro NELC-01 uncommitted ; compatible handoff 06162fa4 |
| actions destructives | aucune (no reset/stash/clean) |

## 3. Gap ChatGPT corrigé

### Avant
`findAcceptanceCriterionForExpectedOutput` retournait `null` pour :
- 0 match (NONE)
- 2+ matches (AMBIGUOUS)

Les ContractResult semantics traitaient `null` comme « pas de critère structuré » → **legacy fallback possible** → PASS potentiel sous fixed grammar.

### Après
Nouveau résolveur discriminé :

```
NONE | UNIQUE { criterion } | AMBIGUOUS { matches }
```

Règles ContractResult (mission + docs_write) :
- **AMBIGUOUS** → `NOT_PROVEN` immédiat ; legacy INTERDIT
- **UNIQUE** → évaluer le criterion ; manual_review → NOT_PROVEN ; pas de fallback
- **NONE** → legacy compatibility préservée

Formellement : **NONE ≠ AMBIGUOUS**.

## 4. Implementation

### Approche
- Ajout `AcceptanceCriterionResolution` + `resolveAcceptanceCriterionForExpectedOutput`
- `findAcceptanceCriterionForExpectedOutput` conserve unique-only (null pour none/ambiguous) pour compat callers non-CR ; documenté
- `missionResultContractResultSemantic` + `docsWriteContractResultSemantic` basculent sur `resolve*`
- Pas de second evaluator / model / persistence / architecture

### Fichiers modifiés (cette correction)
- `lib/oa/execution-contract/domain/contractMissionSemantics.ts`
- `lib/oa/execution-contract/index.ts` (export)
- `lib/oa/evidence-review/application/missionResultContractResultSemantic.ts`
- `lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts`
- `__tests__/oa/execution-contract/nativeExecutionLoopConvergence01.contractSemantics.d0.test.ts`
- **NEW** `__tests__/oa/evidence-review/nativeExecutionLoopConvergence01.acceptanceAmbiguity.d0.test.ts`

## 5. Diff utile complet de la correction

```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
index ca8f4c71..1d3f1356 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
@@ -5,6 +5,11 @@ import {
   M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_DOCS_WRITE_CAPABILITY,
 } from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
+import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  parseContractAcceptanceCriteria,
+  resolveAcceptanceCriterionForExpectedOutput,
+} from "@/lib/oa/execution-contract";
 import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
 import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
 import type {
@@ -287,6 +292,42 @@ export function assessDocsWriteExpectedOutput(input: {
   const location = input.evidence.location?.trim() ?? "";
   const expectation = input.expectation.trim();
   if (!expectation) return "NOT_PROVEN";
+
+  // Sealed structured acceptance criteria outrank the fixed EO grammars.
+  // NONE ≠ AMBIGUOUS: ambiguity is fail-closed (no legacy PASS).
+  const resolution = resolveAcceptanceCriterionForExpectedOutput(
+    parseContractAcceptanceCriteria(
+      input.material.inputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
+    ),
+    expectation,
+  );
+  if (resolution.kind === "ambiguous") {
+    return "NOT_PROVEN";
+  }
+  if (resolution.kind === "unique") {
+    const criterion = resolution.criterion;
+    if (criterion.kind === "manual_review") {
+      return "NOT_PROVEN";
+    }
+    if (criterion.kind === "artifact_at_path") {
+      const target =
+        criterion.targetPath ?? boundTargetPath(input.material.inputs);
+      if (target && location.length > 0 && location === target) return "PASS";
+      return "NOT_PROVEN";
+    }
+    if (criterion.kind === "artifact_conformity_attested") {
+      const conformity = pickDocsWriteConformityEvidence(
+        input.evidences ?? [input.evidence],
+        input.attempt,
+        input.evidence,
+        input.material,
+      );
+      if (conformity) return "PASS";
+      return "NOT_PROVEN";
+    }
+    return "NOT_PROVEN";
+  }
+
   if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
     return "PASS";
   }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
index 7d9eb436..42c39db6 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
@@ -7,6 +7,9 @@
  * Attempt succeeded alone is NOT enough — verified Mission Evidence payload required.
  */
 import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  parseContractAcceptanceCriteria,
+  resolveAcceptanceCriterionForExpectedOutput,
   STUDIO_CURSOR_GENERALIST_ACTION,
   STUDIO_CURSOR_GENERALIST_CAPABILITY,
   STUDIO_CURSOR_GENERALIST_SCOPE,
@@ -170,6 +173,8 @@ export function assessMissionResultExpectedOutput(input: {
   ordinal: number;
   attempt: ExecutionAttemptSnapshot;
   evidence: Evidence;
+  /** Sealed contract inputs — structured acceptance criteria when present. */
+  contractInputs?: Record<string, unknown>;
 }): "PASS" | "NOT_PROVEN" | "FAIL" {
   if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
     return "FAIL";
@@ -177,6 +182,50 @@ export function assessMissionResultExpectedOutput(input: {
   if (!missionResultEvidenceFactsHold(input)) return "NOT_PROVEN";
   const payload = loadMissionPayload(input.evidence);
   if (!payload) return "NOT_PROVEN";
+
+  // Sealed structured acceptance criteria outrank the fixed EO templates.
+  // NONE ≠ AMBIGUOUS: ambiguity is fail-closed (no legacy PASS).
+  const resolution = resolveAcceptanceCriterionForExpectedOutput(
+    parseContractAcceptanceCriteria(
+      input.contractInputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
+    ),
+    input.expectation,
+  );
+  if (resolution.kind === "ambiguous") {
+    return "NOT_PROVEN";
+  }
+  if (resolution.kind === "unique") {
+    const criterion = resolution.criterion;
+    if (criterion.kind === "manual_review") {
+      return "NOT_PROVEN";
+    }
+    if (
+      criterion.kind === "mission_diagnostic" &&
+      payload.diagnosticSummary.trim().length > 0
+    ) {
+      return "PASS";
+    }
+    if (
+      criterion.kind === "mission_next_step" &&
+      payload.recommendedNextProductStep.trim().length > 0
+    ) {
+      return "PASS";
+    }
+    if (criterion.kind === "mission_trace") {
+      const trace = payload.inspectedDurableTrace?.trim() ?? "";
+      if (
+        trace.startsWith(MISSION_TRACE_EO_PREFIX) ||
+        trace.includes(input.attempt.attemptId)
+      ) {
+        return "PASS";
+      }
+      return "NOT_PROVEN";
+    }
+    // Unique structured criterion present but not satisfied (or unknown
+    // deterministic kind) — do not fall through to legacy templates.
+    return "NOT_PROVEN";
+  }
+
   if (
     (MISSION_DIAGNOSTIC_EO_TEMPLATES as readonly string[]).includes(
       input.expectation,
@@ -274,6 +323,9 @@ export const missionResultContractResultSemantic: ContractResultSemantic = {
       ordinal: input.ordinal,
       attempt: input.attempt,
       evidence,
+      ...(input.material.inputs
+        ? { contractInputs: input.material.inputs }
+        : {}),
     });
   },
   assessEvidenceRequirement(input) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 0c3f9b75..4079285f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -41,6 +41,39 @@ export {
   STUDIO_CURSOR_GENERALIST_SCOPE,
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "./domain/generalistExecutionSurface";
+export {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,
+  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
+  describeContractAcceptanceCriteria,
+  findAcceptanceCriterionForExpectedOutput,
+  isContractAcceptanceCriterionKind,
+  isDeterministicAcceptanceCriterionKind,
+  parseContractAcceptanceCriteria,
+  parseContractStringListInput,
+  resolveAcceptanceCriterionForExpectedOutput,
+  type AcceptanceCriterionResolution,
+  type ContractAcceptanceCriterion,
+  type ContractAcceptanceCriterionKind,
+} from "./domain/contractMissionSemantics";
+export {
+  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
+  CONTRACT_SOURCE_GROUNDING_MAX_REFS,
+  CONTRACT_SOURCE_GROUNDING_UNREAD_CODE,
+  CONTRACT_SOURCE_GROUNDING_VERSION,
+  assertContractSourceGroundingHonest,
+  buildContractSourceGrounding,
+  contractSourceDocumentPath,
+  describeContractSourceGrounding,
+  isCurrentFullRepositoryRead,
+  isRepositorySourceRef,
+  parseContractSourceGrounding,
+  type ContractSourceGrounding,
+  type ContractSourceGroundingCoverage,
+  type ContractSourceGroundingHonesty,
+  type ContractSourceGroundingOrigin,
+  type ContractSourceGroundingRef,
+} from "./domain/contractSourceGrounding";
 export {
   computeExecutionContractSemanticFingerprint,
   computeExecutionContractSemanticMaterialFingerprint,

```

## 6. Helper après correction (extrait)

```typescript
export type AcceptanceCriterionResolution =
  | { readonly kind: "none" }
  | {
      readonly kind: "unique";
      readonly criterion: ContractAcceptanceCriterion;
    }
  | {
      readonly kind: "ambiguous";
      readonly matches: readonly ContractAcceptanceCriterion[];
    };

export function resolveAcceptanceCriterionForExpectedOutput(
  criteria: readonly ContractAcceptanceCriterion[],
  expectation: string,
): AcceptanceCriterionResolution {
  const target = expectation.trim();
  if (!target) return { kind: "none" };
  const matches = criteria.filter((c) => c.expectedOutputRef === target);
  if (matches.length === 0) return { kind: "none" };
  if (matches.length === 1) {
    return { kind: "unique", criterion: matches[0]! };
  }
  return Object.freeze({
    kind: "ambiguous",
    matches: Object.freeze([...matches]),
  });
}

/**
 * Unique match only. Prefer `resolveAcceptanceCriterionForExpectedOutput`
 * when NONE must be distinguished from AMBIGUOUS (ContractResult path).
 * Returns null for both none and ambiguous — callers that need fail-closed
 * ambiguity must use resolve*.
 */
export function findAcceptanceCriterionForExpectedOutput(
  criteria: readonly ContractAcceptanceCriterion[],
  expectation: string,
): ContractAcceptanceCriterion | null {
  const resolved = resolveAcceptanceCriterionForExpectedOutput(
    criteria,
    expectation,
  );
  return resolved.kind === "unique" ? resolved.criterion : null;
}


```

## 7. Tests NONE / UNIQUE / AMBIGUOUS

Fichier complet NEW :

```typescript
// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — FINAL FAIL-CLOSED CORRECTION
 *
 * NONE ≠ AMBIGUOUS for structured acceptance criteria resolution.
 * Ambiguous structured matches must never fall through to legacy PASS.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  digestMissionResultPayload,
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  assessMissionResultExpectedOutput,
  MISSION_RESULT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  assessDocsWriteExpectedOutput,
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  resolveAcceptanceCriterionForExpectedOutput,
} from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";

const NOW = "2026-09-23T10:00:00.000Z";
const DOCS_TARGET = "docs/note-de-cadrage.md";
const ARTIFACT_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";
const LEGACY_DIAGNOSTIC = MISSION_DIAGNOSTIC_EO_TEMPLATES[0]!;

const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("resolveAcceptanceCriterionForExpectedOutput — NONE ≠ AMBIGUOUS", () => {
  it("returns none / unique / ambiguous distinctly", () => {
    const criteria = [
      {
        criterionId: "acc:a",
        statement: "A",
        kind: "mission_diagnostic" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
      {
        criterionId: "acc:b",
        statement: "B",
        kind: "manual_review" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
    ];
    expect(resolveAcceptanceCriterionForExpectedOutput([], "EO")).toEqual({
      kind: "none",
    });
    expect(
      resolveAcceptanceCriterionForExpectedOutput([criteria[0]!], "EO").kind,
    ).toBe("unique");
    const amb = resolveAcceptanceCriterionForExpectedOutput(criteria, "EO");
    expect(amb.kind).toBe("ambiguous");
    if (amb.kind === "ambiguous") expect(amb.matches).toHaveLength(2);
  });
});

describe("mission semantic — NONE / UNIQUE / AMBIGUOUS", () => {
  function missionEvidence(absolutePath: string, digest: string): Evidence {
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:mission-result:xatmission1",
      type: "attestation",
      source: MISSION_RESULT_EVIDENCE_SOURCE,
      sourceKind: "execution_attempt",
      location: absolutePath,
      digest: digest as never,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: "prj:mission",
        executionContractId: "xct:mission:1",
        executionAttemptId: "xat:mission:1",
        cycleInstanceId: "cyc:1",
      },
      containsSecrets: false,
      technicalResultRef: "res:w3a:abc123",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:mission",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:mission",
        projectId: "prj:mission",
      },
      version: 1,
      createdAt: NOW,
    } as unknown as Evidence;
  }

  function preparePayloadEvidence() {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "nelc01-amb-mission-"));
    refsDirs.push(refs);
    const payload: MissionResultPayload = {
      schemaVersion: "oa.mission-result.1",
      reportId: "rpt:cursor:test",
      attemptId: "xat:mission:1",
      executionContractId: "xct:mission:1",
      repositoryRef: "mcleland147/sfia-workspace",
      baseSha: "a".repeat(40),
      status: "succeeded",
      diagnosticSummary: "Blocage identifié: réserve non levée.",
      recommendedNextProductStep: "Lever la réserve avant finalisation.",
      inspectedDurableTrace:
        "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x",
      authorizedEffectsExecuted: [],
    } as MissionResultPayload;
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    if (!persisted.ok) throw new Error("persist");
    expect(digestMissionResultPayload(payload)).toBe(persisted.digest);
    return missionEvidence(persisted.absolutePath, persisted.digest);
  }

  const attempt = {
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    status: "succeeded" as const,
    resultRef: "res:w3a:abc123",
  };

  it("NONE — legacy diagnostic template still PASSes (compatibility)", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {},
      }),
    ).toBe("PASS");
  });

  it("UNIQUE deterministic — structured criterion PASSes", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("PASS");
  });

  it("UNIQUE manual_review — NOT_PROVEN even when legacy grammar would PASS", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS 2+ — NOT_PROVEN; legacy PASS impossible", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS two deterministic kinds — no arbitrary first match; NOT_PROVEN", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:mission-next-step",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_next_step",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });
});

describe("docs_write semantic — NONE / UNIQUE / AMBIGUOUS", () => {
  function docsEvidence(): Evidence {
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat1",
      type: "artifact",
      source: DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
      sourceKind: "execution_attempt",
      location: DOCS_TARGET,
      digest: ARTIFACT_DIGEST as never,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      status: "verified",
      availability: "available",
      freshness: "fresh",
      bindings: {
        projectId: "prj:docs",
        executionAttemptId: "xat:docs:1",
        executionContractId: "xct:docs:1",
      },
    } as unknown as Evidence;
  }

  const attempt = {
    attemptId: "xat:docs:1",
    status: "succeeded" as const,
    executionContractId: "xct:docs:1",
  };

  const materialBase = {
    executionContractId: "xct:docs:1",
    projectId: "prj:docs",
    inputs: { targetPath: DOCS_TARGET },
  };

  it("NONE — legacy BOUNDED template still PASSes (compatibility)", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: materialBase,
      }),
    ).toBe("PASS");
  });

  it("UNIQUE deterministic artifact_at_path — PASS", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:artifact-at-path",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "artifact_at_path",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("PASS");
  });

  it("UNIQUE manual_review — NOT_PROVEN even when legacy BOUNDED would PASS", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:manual-review",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "manual_review",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS 2+ including a kind that would PASS alone — stays NOT_PROVEN", () => {
    expect(
      assessDocsWriteExpectedOutput({
        expectation: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
        ordinal: 1,
        attempt: attempt as never,
        evidence: docsEvidence(),
        material: {
          ...materialBase,
          inputs: {
            targetPath: DOCS_TARGET,
            [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
              {
                criterionId: "acc:01:artifact-at-path",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "artifact_at_path",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
              {
                criterionId: "acc:02:manual-review",
                statement: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                kind: "manual_review",
                expectedOutputRef: BOUNDED_DOCS_WRITE_EO_TEMPLATE,
                targetPath: DOCS_TARGET,
              },
            ],
          },
        },
      }),
    ).toBe("NOT_PROVEN");
  });
});

```

Couverture :
| Cas | Mission | DocsWrite |
|---|---|---|
| NONE → legacy OK | PASS (diagnostic template) | PASS (BOUNDED template) |
| UNIQUE deterministic | PASS | PASS (artifact_at_path) |
| UNIQUE manual_review | NOT_PROVEN (legacy blocked) | NOT_PROVEN (legacy blocked) |
| AMBIGUOUS 2+ | NOT_PROVEN | NOT_PROVEN |
| AMBIGUOUS mixed det+manual | NOT_PROVEN | (covered as 2+) |
| resolve helper NONE/UNIQUE/AMBIGUOUS | directe | — |

## 8. Validations

| Commande | Résultat |
|---|---|
| NELC + ambiguity + recovery (#526) targeted | **9 files / 88 tests PASS** |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` (full) | **438 passed / 17 skipped** files ; **4859 passed / 137 skipped** tests |
| `git diff --check` | PASS (app) |

## 9. Exit Proof EP10-A→J

| EP | Verdict |
|---|---|
| EP10-A NONE ≠ AMBIGUOUS | PASS |
| EP10-B UNIQUE sole authority | PASS |
| EP10-C 2+ → AMBIGUOUS | PASS |
| EP10-D AMBIGUOUS never legacy PASS | PASS |
| EP10-E manual_review NOT_PROVEN | PASS |
| EP10-F legacy only for NONE | PASS |
| EP10-G docs_write + mission same rule | PASS |
| EP10-H no second evaluator | PASS |
| EP10-I EP1–EP9 / EP11–EP20 non-regressed | PASS (full suite + NELC) |
| EP10-J #526 vert | PASS |

## 10. Requalification EP1–EP20 (synthèse)

Tous PASS comme au handoff `06162fa4`, avec EP10 désormais **structurellement** clos (ambiguïté discriminée).

EP20 D1 : BRIDGE ACCEPTABLE AS GOVERNED DEBT — inchangé.

## 11. Fake / Real

DETERMINISTIC ONLY. Aucun REAL. Claims interdits absents.

## 12. Dettes restantes (inchangées)

- D1 first-class optional
- mid-turn SHA stamp optional
- future REAL — distinct Morris GO

## 13. Décisions Morris

- **GO COMMIT** maintenant recommandable après revue ChatGPT de ce handoff
- GO COMMIT pas encore consommé dans ce cycle (pas de commit projet)

## 14. Verdict

**READY FOR COMMIT**

READY FOR COMMIT ≠ autorisation de commit.
