# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — Checkpoint E PREPARE blocker

**Timestamp (UTC):** 2026-09-17T18:47:06Z
**Pack kind:** FULL (code modification present — modified content included below)
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES (`HEAD == origin/main == 26478b1ea5b010c625f0c6039c969fac5c135cf5`) |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typology | EVOL (minimal mapping fix) |
| Profil | CRITICAL |
| Capability | Pilote: sealed HumanDecision → native inspectable ExecutionContract PREPARE |
| Milestone | Product Journey E2E REAL Reconciliation |

### git status --short (at pack time)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
```

---

## 2. Observed failure (preserved)

- Project: `prj:e3fe8a45-5c9e-4651-bd2c-bde1cdf77c38` — SFIA Studio — Golden Journey REAL Acceptance 01
- Proposal: `prop:f2:3b788c52-5139-4b71-b00b-a45a0224b56f`
- HumanDecision: `dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693`
- Selected option: `opt:proposal-subject:pursue` (Continuer)
- requestedOperation: `cursor.docs_write.apply`
- targetPath: `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md`
- UI after Pilote "Préparer le contrat d’exécution": **`Execution contract input is invalid.`**
- No Execute; no REAL.

---

## 3. Exact validator / invalid fields

| Item | Value |
|---|---|
| Handler path | TrajectorySurface → `projectAssistantPrepareResolvedM3Action` → `prepareAndResolveM3ProductPath` → **`prepareM3FromDecision`** → `buildExecutionContract` |
| Validator | `validateBuildFields` → `validateIdentifierArray(..., "evidence")` in `lib/oa/execution-contract/domain/invariants.ts` |
| Detail code | `CONTRACT_INVALID` |
| Internal reason | **`evidence_id_invalid`** |
| Safe UI message | `SAFE_MESSAGES.CONTRACT_INVALID` = **"Execution contract input is invalid."** (`domain/errors.ts`) |
| Invalid field | `evidenceRequirements` (ExecutionContract build input) |
| Received | `["Résultat de l’écriture du fichier", "Résultat de la vérification du contenu"]` (Nora free-text on DecisionBasis.executionBasis) |
| Expected | OA identifiers matching `/^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/` e.g. `git:local_commit`, `evreq:…` |
| Provenance | DecisionBasis.executionBasis.evidenceRequirements (sealed from Proposal/Nora) blindly copied by `fieldsFromBasis` into EC field |

**Reproduction (read-only):** campaign DecisionBasis dumped from SQLite; `isOaIdentifier` false on both strings; `validateBuildFields` returns `{ detailCode: "CONTRACT_INVALID", reason: "evidence_id_invalid" }`. Same fields with `BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS` validate clean.

---

## 4. Root cause

**Classification: B — Mapping / wiring / validation local**

`fieldsFromBasis` treated Nora prose `evidenceRequirements` as EC identifier SoT whenever the array was non-empty. Empty arrays already fell back to `BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS`. Non-empty free-text therefore **regressed** the docs_write PREPARE path that works when Nora omits the field.

Not A (user can fill nothing more — Decision already sealed).
Not D (no new architecture / schema).
Not E (cause isolated).

---

## 5. Correctif effectué

Minimal coerce in `prepareM3FromDecision.ts`:

- If all `evidenceRequirements` are OA identifiers → keep them.
- Else if docs_write intent → use `BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS` (identical default as empty).
- Nora free-text remains in `inputs.evidenceRequirements` for disclosure (already copied earlier in `fieldsFromBasis`).
- Valid OA IDs still preserved (regression test).

### Modified function (complete)

```typescript
function resolveEvidenceRequirementsForContract(input: {
  docsWriteIntent: boolean;
  raw: string[] | undefined;
}): string[] | undefined {
  const raw = input.raw;
  if (raw && raw.length > 0 && raw.every(isOaIdentifier)) {
    return [...raw];
  }
  if (input.docsWriteIntent) {
    return [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
  }
  if (raw && raw.length > 0) {
    const valid = raw.filter(isOaIdentifier);
    return valid.length > 0 ? valid : undefined;
  }
  return undefined;
}
```

---

## 6. Fichiers lus (diagnostic)

- `features/project-assistant/f3/prepareM3FromDecision.ts`
- `features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts`
- `lib/oa/execution-contract/domain/invariants.ts` (`validateIdentifierArray`, `validateBuildFields`, `isOaIdentifier`)
- `lib/oa/execution-contract/domain/errors.ts` (SAFE_MESSAGES)
- Campaign DB read-only: `projects/sfia-studio/.sfia-exec/pje2e-real-01/product/oa-product.sqlite`
- Tests: `m3ExecutionContractPrepare.test.ts`, `productJourneyGovernedDocsWriteWiring.d0.test.ts` (prepare filter)
- Method/doctrine sources referenced by campaign brief (routing / operating model / build doctrine / product completion / v3 framings) — no doctrine edits

## 7. Fichiers modifiés

1. `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`
2. `projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts`

**Not modified:** Build Doctrine, Roadmap, framings, method, schema/migrations, campaign DB, UI copy.

---

## 8. Diff exploitable (complete)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
index 7406435e..141704a2 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
@@ -534,6 +534,83 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
     expect(prepared.code).toBe("DECISION_NOT_CURRENT");
   });

+  it("CHECKPOINT-E — docs_write Nora free-text evidenceRequirements coerce to OA identifiers (not CONTRACT_INVALID)", async () => {
+    const noraProse = [
+      "Résultat de l’écriture du fichier",
+      "Résultat de la vérification du contenu",
+    ];
+    const result = await recordAndPrepare(
+      "ckpt-e-nora-evidence.sqlite",
+      {
+        objective:
+          "Matérialiser la fiche Markdown requise par le cycle actif dans le dépôt lié.",
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        scopeOut: ["Tout autre fichier"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: noraProse,
+        expectedOutputs: [
+          "Le fichier Markdown matérialisé au chemin cible",
+          "Vérification de l’existence et de la conformité minimale du fichier",
+        ],
+        reversibilityExpectation: "unknown",
+      },
+      "dec:m3:ckpt-e-nora-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.prepared.mode).toBe("M3_PREPARE");
+    expect(result.prepared.executionPerformed).toBe(false);
+    expect(result.prepared.cursorReal).toBe(false);
+    expect(result.contract.action).toBe("cursor.docs_write.apply");
+    expect(result.contract.target).toBe("workspace.isolated.docs_write");
+    // Contract field must be OA identifiers — Nora prose must not leak here.
+    for (const id of result.contract.evidenceRequirements) {
+      expect(id).toMatch(/^[a-z][a-z0-9]*:/);
+    }
+    expect(result.contract.evidenceRequirements).toEqual([
+      "git:local_commit",
+      "git:remote_push",
+      "git:pull_request",
+      "git:ci_status",
+      "git:review_status",
+      "git:merge",
+      "git:post_merge_verification",
+    ]);
+    // Free-text preserved in inputs for disclosure (not EC identifier SoT).
+    expect(result.contract.inputs?.evidenceRequirements).toEqual(noraProse);
+  });
+
+  it("CHECKPOINT-E regression — docs_write with valid OA evidenceRequirements preserves them", async () => {
+    const result = await recordAndPrepare(
+      "ckpt-e-valid-evidence.sqlite",
+      {
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: [
+          "evreq:file-write-result",
+          "evreq:content-verification",
+        ],
+      },
+      "dec:m3:ckpt-e-valid-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.contract.evidenceRequirements).toEqual([
+      "evreq:file-write-result",
+      "evreq:content-verification",
+    ]);
+  });
+
   it("L — critical safety negatives", () => {
     const projection = projectCursorPrepareOnly({
       schemaVersion: "0.2.0-oa",
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index f1b4a1dc..3441de6c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -22,6 +22,7 @@ import {
   projectCursorPrepareOnly,
   projectExecutionContractInspectionDisclosure,
 } from "@/lib/oa/execution-contract";
+import { isOaIdentifier } from "@/lib/oa/execution-contract/domain/invariants";
 import type { F2ContextSnapshot } from "../f2/types";
 import {
   isProposalSubjectOptionRef,
@@ -29,6 +30,31 @@ import {
 } from "../w2/proposalSubjectOptions";
 import { BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";

+/**
+ * EC.evidenceRequirements must be OA identifiers (`prefix:value`).
+ * Nora DecisionBasis often carries free-text validation expectations here —
+ * those belong in inputs, not as contract identifier SoT.
+ * For docs_write, fall back to the canonical bounded git evidence set
+ * (same default as when the basis omits the field entirely).
+ */
+function resolveEvidenceRequirementsForContract(input: {
+  docsWriteIntent: boolean;
+  raw: string[] | undefined;
+}): string[] | undefined {
+  const raw = input.raw;
+  if (raw && raw.length > 0 && raw.every(isOaIdentifier)) {
+    return [...raw];
+  }
+  if (input.docsWriteIntent) {
+    return [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
+  }
+  if (raw && raw.length > 0) {
+    const valid = raw.filter(isOaIdentifier);
+    return valid.length > 0 ? valid : undefined;
+  }
+  return undefined;
+}
+
 export type PrepareM3Deps = {
   decisionServices: DecisionServices;
   authorityResolver: MemoryAuthorityResolver;
@@ -209,12 +235,13 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       : eb.expectedOutcome
         ? [eb.expectedOutcome]
         : undefined;
-  const evidenceRequirements =
-    eb.evidenceRequirements && eb.evidenceRequirements.length > 0
-      ? [...eb.evidenceRequirements]
-      : docsWriteIntent
-        ? [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS]
-        : undefined;
+  const evidenceRequirements = resolveEvidenceRequirementsForContract({
+    docsWriteIntent,
+    raw:
+      eb.evidenceRequirements && eb.evidenceRequirements.length > 0
+        ? [...eb.evidenceRequirements]
+        : undefined,
+  });
   return {
     action,
     target,

```

---

## 9. Tests et résultats

| Suite | Result |
|---|---|
| `m3ExecutionContractPrepare.test.ts` (15 tests incl. 2 CHECKPOINT-E) | **PASS** |
| `productJourneyGovernedDocsWriteWiring.d0.test.ts -t prepare` (2 matched) | **PASS** |
| `tsc --noEmit -p tsconfig.json` | **PASS** (exit 0) |

No REAL campaign launched. No Execute.

---

## 10. État DB campagne (sans secrets)

| Item | Value |
|---|---|
| Absolute DB | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/pje2e-real-01/product/oa-product.sqlite` |
| mtime/size | Sep 17 20:37:38 2026 577536 (unchanged by this lot) |
| oa_execution_attempts | **0** |
| oa_execution_contracts | **0** |
| HumanDecision | `dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693 | accepted | opt:proposal-subject:pursue | prop:f2:3b788c52-5139-4b71-b00b-a45a0224b56f` |
| Manual SQLite mutation | **NONE** |

Studio restarted on port 3020 with same `SFIA_STUDIO_PRODUCT_DB_PATH`. Project GET returns auth redirect 307 (expected); DB untouched. **PREPARE not clicked** (Morris gate).

---

## 11. Cursor REAL spawn count

**0** for this campaign (attempts=0, contracts=0, no Execute). IDE `cursor-agent` workers for other/local worktrees are not campaign REAL spawns.

---

## 12. Réserves / dettes

- Coerce reuses existing git evidence identifier set for docs_write PREPARE when Nora prose is present — same as empty-field default; resolve/M4 path may still refine successor evidence later.
- Nora still writes free-text into DecisionBasis.evidenceRequirements (cognitive debt); this lot only fixes EC mapping at PREPARE.
- Continuity / truncated Nora replies / Instruction Options cognitive gap **out of scope** (not cause of CONTRACT_INVALID).

---

## 13. Décisions / gates Morris

1. **Morris MAY retry** UI "Préparer le contrat d’exécution" on the same Project / same DB / same HumanDecision.
2. Do **not** re-qualify / do not fabricate Decision / do not mutate DB.
3. After successful PREPARE: inspection / Confirmation / authority — then future REAL only under existing Morris gate.
4. **No** project commit/push/PR/merge in this lot (candidate remains local dirty).

---

## 14. Verdict

**CHECKPOINT E BLOCKER FIXED — MORRIS MAY RETRY PREPARE**
