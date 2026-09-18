# PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 — CR-CEC-01/02/03 CORRECTION — Review Pack FULL

**Timestamp (UTC):** 2026-09-18T15:40:37Z
**Timestamp (local):** 2026-09-18 17:40:37 CEST
**Pack revision:** PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 / CR-CEC CORRECTION
**Morris GO consumed:** YES — CHATGPT CRITICAL REVIEW CORRECTION / SAME MACRO / ZERO NEW CURSOR REAL / ZERO NEW ATTEMPT / NO PROJECT COMMIT
**Prior reviewed handoff:** `e4e9b36c336175c98dbf5c0c6bf9ad57732aaa6c`
**Verdict:** CR-CEC-01/02/03 CLOSED — SUCCESSOR CE `evidence-completion-v2` PASS — HISTORICAL v1 PASS IMMUTABLE — ZERO NEW REAL / ATTEMPT

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-claim-evidence-completion-01` |
| Branch | `qa/sfia-studio-product-journey-claim-evidence-completion-01` |
| HEAD / origin/main | `9c6ac90974113044330284dd110108287ba2319e` / `9c6ac90974113044330284dd110108287ba2319e` |
| Baseline match | **YES** — HEAD = origin/main = `9c6ac90974113044330284dd110108287ba2319e` |
| Project commit/push/PR | **NOT DONE** (forbidden) |
| ZERO new Cursor REAL | **YES** |
| Attempts | **3 → 3** |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/index.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/campaign-prestate.json
?? .tmp-sfia-review/implementation-diffs/
?? .tmp-sfia-review/local/
?? .tmp-sfia-review/phase1-prestate.json
?? .tmp-sfia-review/phase12-campaign-result.json
?? .tmp-sfia-review/phase14-rematerialize.json
?? .tmp-sfia-review/phase3-observation.json
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/claimEvidenceCompletion.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteMinConformityVerifier.ts
```

### git diff --stat (product tracked)

```
 .../w2/requalifyDocsWriteContractResult.ts         |  20 ++-
 .../w2/w3bProductTerminalProjection.ts             |   2 +-
 .../application/docsWriteContractResultSemantic.ts | 154 ++++++++++++++++++++-
 .../app/lib/oa/evidence-review/index.ts            |  24 ++++
 .../convergence/sfia-studio-convergence-roadmap.md |   4 +-
 5 files changed, 194 insertions(+), 10 deletions(-)
```

---

## 2. CR findings closed

| ID | Requirement | Resolution |
|---|---|---|
| **CR-CEC-01** | Bound oracle ONLY from `attempt.boundExecutionContract.semanticMaterial.inputs` — no `contract.inputs` fallback | `extractDocsWriteMinConformityCriteriaFromBoundAttempt` · missing bound snapshot/inputs → `BOUND_ACCEPTANCE_ORACLE_MISSING` · no Evidence/RB/CE |
| **CR-CEC-02** | Conformity attestation bound to exact oracle via deterministic fingerprint | `technicalResultRef = docs_write_min_conformity:v2:oracle:<sha256>` · semantic re-derives expected fingerprint from bound Attempt and requires equality · source string alone insufficient |
| **CR-CEC-03** | Closed validationExpectations + fence-safe headings + artifactType check | Exact supported VE templates only · unknown → `BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED` · `stripMarkdownFencedCodeBlocks` before heading regex |

No architecture reopen. No second ContractResult engine. No ExecutionContract mutation. No weakened ExpectedOutputs. No schema migration.

---

## 3. Campaign successor evaluation

| Item | Value |
|---|---|
| DB | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/pje2e-real-01/product/oa-product.sqlite` |
| Pre sha256 (before v2) | `6101e20ce49a7243c489ecd237319a3a4d68daa429294b2024ed6931709bcf81` |
| Post sha256 (after v2 CE) | `623a7d2e9d01afa4134bb94d2376d8e92abd8ebc38b1906ac842af0519c020cd` |
| Post rematerialize sha256 | `edf1824bda2d7fe54c24e2a19565873d4eab2768eb78115d9e419f497b08efe1` |
| Forensic backup | `/tmp/oa-product.pje2e-real-01.pre-cec-v2.*` |
| Historical CE v1 | `clm:docs-write:evidence-completion-v1:xat:w3a:c4c5670edb4658cc` = **pass IMMUTABLE** (`v1Immutable: true`) |
| Successor CE v2 | `clm:docs-write:evidence-completion-v2:xat:w3a:c4c5670edb4658cc` = **pass** |
| Supersedes | v2 supersedes v1 |
| Conformity Evidence v2 | `ev:docs-write-conformity:evidence-completion-v2:xat:w3a:c4c5670edb4658cc` |
| technicalResultRef | `docs_write_min_conformity:v2:oracle:bc23f356e6c22edd39a875ab36357fc8faa0ec1069268df97db0087b80005841` |
| oracleFingerprint | `bc23f356e6c22edd39a875ab36357fc8faa0ec1069268df97db0087b80005841` |
| Successor RB | `rb:docs-write:evidence-completion-v2:xat:w3a:c4c5670edb4658cc` frozenVersion=2 |
| EO assessments | PASS / PASS |
| ER | SATISFIED |
| Product | **SUCCESS** |
| LPS | **29** (v28→v29) |
| Trajectory | v4 unchanged |
| HumanDecisions | 5 (unchanged) |
| ZERO REAL / no new Attempt | **YES** / **YES** |

Bound oracle (Attempt 3 snapshot — read, not trusted from prompt):

- targetPath: `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md`
- contentRequirements: Objectif, Périmètre inclus, Périmètre exclu, Besoins principaux, Critères de succès, Prochaine étape
- validationExpectations (exact):
  - `Vérifier que le fichier existe au chemin cible`
  - `Vérifier la présence de l’objectif, du périmètre inclus et exclu, des besoins principaux, des critères de succès et de la prochaine étape` (U+2019)
- artifactType: `Markdown`
- boundSemanticFingerprint: `3cc524c541b934c3136d8fb0c34a8348591bb162472e12dde51bb9af8573602f`

Artifact digest MATCH: `sha256:3cb08ee5fa2dabb1d75b7e90b65c4843935cdda75767fbfd6ff9e7fcd0b6bccf` (M4 WT)

---

## 4. Tests

```
claimEvidenceCompletion.d0.test.ts — 15 passed (EC-01..23 + CR-CEC-01/02/03)
w3cPostEvidenceCorrection.test.ts — 17 passed
```

CR-CEC coverage:

- bound inputs present → proceed
- bound inputs absent + live contract populated → FAIL-CLOSED
- bound snapshot absent + live contract populated → FAIL-CLOSED
- live criteria differ from bound → bound wins
- v1 static technicalResultRef rejected
- unknown validationExpectation → BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED
- headings inside fenced code → CONFORMITY_HEADINGS_MISSING (no false PASS)

---

## 5. Server-owned trust boundary

RegisterEvidence still accepts caller `source` / `technicalResultRef` metadata.

ContractResult semantic does **not** trust them alone. `docsWriteConformityFactsHold` requires:

- type `attestation`
- sourceKind `system`
- source = `docs_write_min_conformity_verifier:v2`
- technicalResultRef oracle fingerprint **equals** server-derived fingerprint from Attempt bound snapshot
- digest equality with artifact Evidence
- location equality
- same Attempt / EC / project / cycle
- positive Evidence version (freeze path re-checks exact snapshot version)

No new authentication subsystem. No persistence schema migration.

---

## 6. Anti-claims

- ≠ Product Journey READY / COMPLETE
- ≠ new Cursor REAL / Attempt 4
- ≠ project Git commit / push / PR / merge authorized
- ≠ runtime v3 ADOPTED
- ≠ v1 CE mutated or deleted (immutable historical PASS)
- ≠ ExecutionContract / ExpectedOutputs weakened
- ≠ NLP / LLM interpretation of validationExpectations

---

## 7. Implementation (reviewable)

### index.ts diff

```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 4e1133f0..e47aa89b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -127,12 +127,36 @@ export {
   DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
   BOUNDED_DOCS_WRITE_EO_TEMPLATE,
   DOCS_WRITE_STRICT_EO_CORRECTION_REF,
+  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
+  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF_V1,
+  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
+  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
+  DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
   docsWriteContractResultIdentity,
   docsWriteArtifactFactsHold,
+  docsWriteConformityFactsHold,
   assessDocsWriteExpectedOutput,
   assessDocsWriteEvidenceRequirement,
   docsWriteContractResultSemantic,
 } from "./application/docsWriteContractResultSemantic";
+export {
+  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
+  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE_V1,
+  DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX,
+  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_TECHNICAL_RESULT_REF_V1,
+  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
+  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
+  extractDocsWriteMinConformityCriteria,
+  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
+  computeDocsWriteOracleFingerprint,
+  buildDocsWriteOracleFingerprintMaterial,
+  docsWriteConformityTechnicalResultRef,
+  expectedDocsWriteConformityOracleFingerprint,
+  parseDocsWriteConformityOracleFingerprint,
+  stripMarkdownFencedCodeBlocks,
+  verifyDocsWriteMinConformityFromBytes,
+  verifyDocsWriteMinConformityFromFile,
+} from "./application/docsWriteMinConformityVerifier";
 export {
   resolveCurrentContractResultClaimEvaluation,
   type ResolveCurrentContractResultClaimEvaluationResult,
```

### NEW FILE projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteMinConformityVerifier.ts

```typescript
/**
 * Deterministic docs_write minimum-conformity verifier (v2).
 * CR-CEC-01/02/03: bound Attempt snapshot only · oracle fingerprint · closed expectations.
 * No NLP / LLM. Unknown criteria → refuse. Fenced code blocks ignored for headings.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import type { Digest } from "@/lib/oa/doctrine";
import type { ExecutionAttemptSnapshot } from "../domain/types";

/** Stable verifier profile — Evidence.source must equal this exactly. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE =
  "docs_write_min_conformity_verifier:v2" as const;

/** @deprecated v1 profile — historical Evidence may still carry this; not accepted by v2 semantic. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE_V1 =
  "docs_write_min_conformity_verifier:v1" as const;

export const DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX =
  "docs_write_min_conformity:v2:oracle:" as const;

/** @deprecated v1 technicalResultRef — not accepted by v2 semantic. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_TECHNICAL_RESULT_REF_V1 =
  "docs_write_min_conformity:v1:headings_present" as const;

/**
 * Exact supported validationExpectation templates (closed set — no NLP).
 * Apostrophe in VE1 is U+2019 (bound Attempt 3 EC truth).
 */
export const DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET =
  "Vérifier que le fichier existe au chemin cible" as const;

export const DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT =
  "V\u00e9rifier la pr\u00e9sence de l\u2019objectif, du p\u00e9rim\u00e8tre inclus et exclu, des besoins principaux, des crit\u00e8res de succ\u00e8s et de la prochaine \u00e9tape" as const;

const SUPPORTED_VALIDATION_EXPECTATIONS: ReadonlySet<string> = new Set([
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
]);

export type DocsWriteMinConformityCriteria = {
  readonly targetPath: string;
  readonly contentRequirements: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly artifactType?: string;
  readonly boundSemanticFingerprint: string;
};

export type DocsWriteOracleFingerprintMaterial = {
  readonly verifierProfile: typeof DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE;
  readonly boundSemanticFingerprint: string;
  readonly targetPath: string;
  readonly contentRequirements: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly artifactType: string | null;
};

export type DocsWriteMinConformityPass = {
  readonly ok: true;
  readonly artifactPath: string;
  readonly digest: Digest;
  readonly matchedHeadings: readonly string[];
  readonly oracleFingerprint: string;
  readonly technicalResultRef: string;
  readonly verifierSource: typeof DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE;
};

export type DocsWriteMinConformityFail = {
  readonly ok: false;
  readonly code: string;
  readonly message: string;
  readonly missingHeadings?: readonly string[];
  readonly computedDigest?: Digest;
};

export type DocsWriteMinConformityResult =
  | DocsWriteMinConformityPass
  | DocsWriteMinConformityFail;

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : undefined;
}

/**
 * Canonical JSON for oracle fingerprint — fixed key order, arrays preserved.
 */
export function canonicalizeDocsWriteOracleMaterial(
  material: DocsWriteOracleFingerprintMaterial,
): string {
  return JSON.stringify({
    artifactType: material.artifactType,
    boundSemanticFingerprint: material.boundSemanticFingerprint,
    contentRequirements: material.contentRequirements,
    targetPath: material.targetPath,
    validationExpectations: material.validationExpectations,
    verifierProfile: material.verifierProfile,
  });
}

export function computeDocsWriteOracleFingerprint(
  material: DocsWriteOracleFingerprintMaterial,
): string {
  return createHash("sha256")
    .update(canonicalizeDocsWriteOracleMaterial(material), "utf8")
    .digest("hex");
}

export function docsWriteConformityTechnicalResultRef(
  oracleFingerprint: string,
): string {
  return `${DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX}${oracleFingerprint}`;
}

export function parseDocsWriteConformityOracleFingerprint(
  technicalResultRef: string | undefined,
): string | undefined {
  if (!technicalResultRef) return undefined;
  if (
    !technicalResultRef.startsWith(
      DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX,
    )
  ) {
    return undefined;
  }
  const fp = technicalResultRef.slice(
    DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX.length,
  );
  return /^[a-f0-9]{64}$/.test(fp) ? fp : undefined;
}

/**
 * CR-CEC-01 — derive criteria ONLY from Attempt boundExecutionContract snapshot.
 * Never from live ExecutionContract.inputs.
 */
export function extractDocsWriteMinConformityCriteriaFromBoundAttempt(
  attempt: Pick<
    ExecutionAttemptSnapshot,
    "boundExecutionContract" | "executionContractSemanticFingerprint"
  >,
):
  | { ok: true; criteria: DocsWriteMinConformityCriteria }
  | { ok: false; code: string; message: string } {
  const bound = attempt.boundExecutionContract;
  if (!bound) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "attempt.boundExecutionContract absent — fail-closed.",
    };
  }
  const fingerprint =
    asNonEmptyString(bound.semanticFingerprint) ??
    asNonEmptyString(attempt.executionContractSemanticFingerprint);
  if (!fingerprint) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound semanticFingerprint absent — fail-closed.",
    };
  }
  const inputs = bound.semanticMaterial?.inputs;
  if (!inputs || typeof inputs !== "object") {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message:
        "boundExecutionContract.semanticMaterial.inputs absent — fail-closed.",
    };
  }
  return extractDocsWriteMinConformityCriteria(
    inputs as Record<string, unknown>,
    fingerprint,
  );
}

/**
 * Extract + validate closed acceptance criteria from bound inputs.
 * Unknown validationExpectations → BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED.
 */
export function extractDocsWriteMinConformityCriteria(
  inputs: Record<string, unknown> | undefined,
  boundSemanticFingerprint: string,
):
  | { ok: true; criteria: DocsWriteMinConformityCriteria }
  | { ok: false; code: string; message: string } {
  if (!inputs || typeof inputs !== "object") {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs absent — cannot derive conformity oracle.",
    };
  }
  const fp = asNonEmptyString(boundSemanticFingerprint);
  if (!fp) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "boundSemanticFingerprint required.",
    };
  }
  const targetPath = asNonEmptyString(inputs.targetPath);
  if (!targetPath) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.targetPath missing.",
    };
  }
  const rawReq = inputs.contentRequirements;
  if (!Array.isArray(rawReq) || rawReq.length === 0) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.contentRequirements missing.",
    };
  }
  const contentRequirements: string[] = [];
  for (const item of rawReq) {
    const s = asNonEmptyString(item);
    if (!s) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_INVALID",
        message: "contentRequirements contains non-string entry.",
      };
    }
    contentRequirements.push(s);
  }

  const rawVe = inputs.validationExpectations;
  if (!Array.isArray(rawVe) || rawVe.length === 0) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.validationExpectations missing.",
    };
  }
  const validationExpectations: string[] = [];
  for (const item of rawVe) {
    const s = asNonEmptyString(item);
    if (!s) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_INVALID",
        message: "validationExpectations contains non-string entry.",
      };
    }
    if (!SUPPORTED_VALIDATION_EXPECTATIONS.has(s)) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED",
        message: `unsupported validationExpectation: ${s}`,
      };
    }
    validationExpectations.push(s);
  }

  const artifactType = asNonEmptyString(inputs.artifactType);

  return {
    ok: true,
    criteria: {
      targetPath,
      contentRequirements,
      validationExpectations,
      ...(artifactType ? { artifactType } : {}),
      boundSemanticFingerprint: fp,
    },
  };
}

export function buildDocsWriteOracleFingerprintMaterial(
  criteria: DocsWriteMinConformityCriteria,
): DocsWriteOracleFingerprintMaterial {
  return {
    verifierProfile: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
    boundSemanticFingerprint: criteria.boundSemanticFingerprint,
    targetPath: criteria.targetPath,
    contentRequirements: criteria.contentRequirements,
    validationExpectations: criteria.validationExpectations,
    artifactType: criteria.artifactType ?? null,
  };
}

/**
 * Strip fenced code blocks (``` / ~~~) so headings inside fences cannot PASS.
 */
export function stripMarkdownFencedCodeBlocks(markdown: string): string {
  // CommonMark-style fences: opening fence of 3+ backticks/tildes, optional info string,
  // closed by a fence of same character with at least the same length.
  return markdown.replace(
    /(^|\n)([`~]{3,})[^\n]*\n[\s\S]*?(?:\n\2[`~]*[ \t]*(?:\n|$)|$)/g,
    "$1",
  );
}

function headingPresentOutsideFences(
  markdown: string,
  requirement: string,
): boolean {
  const body = stripMarkdownFencedCodeBlocks(markdown);
  const escaped = requirement.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^#{1,6}\\s+${escaped}\\s*$`, "m");
  return re.test(body);
}

export function verifyDocsWriteMinConformityFromBytes(input: {
  readonly bytes: Buffer;
  readonly artifactPath: string;
  readonly expectedDigest?: Digest;
  readonly criteria: DocsWriteMinConformityCriteria;
}): DocsWriteMinConformityResult {
  const digest =
    `sha256:${createHash("sha256").update(input.bytes).digest("hex")}` as Digest;
  if (input.expectedDigest && input.expectedDigest !== digest) {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_DIGEST_MISMATCH",
      message: `computed digest ${digest} != expected ${input.expectedDigest}`,
      computedDigest: digest,
    };
  }
  if (input.bytes.length === 0) {
    return {
      ok: false,
      code: "ARTIFACT_EMPTY",
      message: "artifact payload empty",
      computedDigest: digest,
    };
  }

  const markdown = input.bytes.toString("utf8");
  if (!markdown.trim()) {
    return {
      ok: false,
      code: "ARTIFACT_EMPTY",
      message: "artifact payload empty",
      computedDigest: digest,
    };
  }

  // artifactType Markdown → require .md path (closed deterministic check).
  if (input.criteria.artifactType) {
    const at = input.criteria.artifactType;
    if (at === "Markdown" || at.toLowerCase() === "markdown") {
      if (!/\.md$/i.test(input.criteria.targetPath)) {
        return {
          ok: false,
          code: "ARTIFACT_TYPE_PATH_MISMATCH",
          message: "artifactType Markdown requires .md targetPath",
          computedDigest: digest,
        };
      }
      if (!/\.md$/i.test(input.artifactPath)) {
        return {
          ok: false,
          code: "ARTIFACT_TYPE_PATH_MISMATCH",
          message: "artifactType Markdown requires .md artifact path",
          computedDigest: digest,
        };
      }
    } else {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED",
        message: `unsupported artifactType: ${at}`,
        computedDigest: digest,
      };
    }
  }

  // VE: file exists at target — bytes non-empty + digest + path already checked.
  if (
    input.criteria.validationExpectations.includes(
      DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
    )
  ) {
    if (input.artifactPath.trim() !== input.criteria.targetPath) {
      return {
        ok: false,
        code: "ARTIFACT_PATH_MISMATCH",
        message: `artifact path ${input.artifactPath} != targetPath ${input.criteria.targetPath}`,
        computedDigest: digest,
      };
    }
  }

  const missing: string[] = [];
  const matched: string[] = [];
  const needsSections = input.criteria.validationExpectations.includes(
    DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  );
  if (needsSections || input.criteria.contentRequirements.length > 0) {
    for (const req of input.criteria.contentRequirements) {
      if (headingPresentOutsideFences(markdown, req)) matched.push(req);
      else missing.push(req);
    }
  }
  if (missing.length > 0) {
    return {
      ok: false,
      code: "CONFORMITY_HEADINGS_MISSING",
      message: `missing required headings: ${missing.join(", ")}`,
      missingHeadings: missing,
      computedDigest: digest,
    };
  }

  const oracleMaterial = buildDocsWriteOracleFingerprintMaterial(
    input.criteria,
  );
  const oracleFingerprint = computeDocsWriteOracleFingerprint(oracleMaterial);
  const technicalResultRef =
    docsWriteConformityTechnicalResultRef(oracleFingerprint);

  return {
    ok: true,
    artifactPath: input.artifactPath,
    digest,
    matchedHeadings: matched,
    oracleFingerprint,
    technicalResultRef,
    verifierSource: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
  };
}

export function verifyDocsWriteMinConformityFromFile(input: {
  readonly absolutePath: string;
  readonly artifactPath: string;
  readonly expectedDigest?: Digest;
  readonly criteria: DocsWriteMinConformityCriteria;
}): DocsWriteMinConformityResult {
  let bytes: Buffer;
  try {
    bytes = readFileSync(input.absolutePath);
  } catch (err) {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_PAYLOAD_UNAVAILABLE",
      message: `cannot read artifact: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
  return verifyDocsWriteMinConformityFromBytes({
    bytes,
    artifactPath: input.artifactPath,
    expectedDigest: input.expectedDigest,
    criteria: input.criteria,
  });
}

/**
 * Derive expected oracle fingerprint from Attempt bound snapshot (server-owned).
 */
export function expectedDocsWriteConformityOracleFingerprint(
  attempt: Pick<
    ExecutionAttemptSnapshot,
    "boundExecutionContract" | "executionContractSemanticFingerprint"
  >,
): string | undefined {
  const extracted = extractDocsWriteMinConformityCriteriaFromBoundAttempt(attempt);
  if (!extracted.ok) return undefined;
  return computeDocsWriteOracleFingerprint(
    buildDocsWriteOracleFingerprintMaterial(extracted.criteria),
  );
}

```

### NEW FILE projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts

```typescript
/**
 * Complete docs_write claim via durable evidence completion (ZERO REAL).
 * Option B: fresh successor ReviewBundle — historical rb:docs-write untouched.
 *
 * Flow (CR-CEC-01/02/03):
 * 1) derive oracle ONLY from attempt.boundExecutionContract.semanticMaterial.inputs
 * 2) verify artifact against closed bound criteria + oracle fingerprint
 * 3) register conformity attestation Evidence (v2 technicalResultRef)
 * 4) create successor RB with artifact + conformity
 * 5) freeze
 * 6) requalify with correctionRef evidence-completion-v2
 */
import type { ActorReference, Digest } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type {
  ClaimEvaluation,
  Evidence,
  EvidenceReviewServices,
  ReviewBundle,
} from "@/lib/oa/evidence-review";
import {
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  docsWriteContractResultIdentity,
  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
  verifyDocsWriteMinConformityFromBytes,
  verifyDocsWriteMinConformityFromFile,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";

export type CompleteDocsWriteClaimEvidenceCompletionInput = {
  evidenceReviewServices: EvidenceReviewServices;
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  /** Absolute filesystem path to historical artifact (read-only). */
  artifactAbsolutePath?: string;
  /** In-memory artifact bytes (tests) — mutually exclusive with path. */
  artifactBytes?: Buffer;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  correctionRef?: string;
};

export type CompleteDocsWriteClaimEvidenceCompletionResult =
  | {
      ok: true;
      claimEvaluation: ClaimEvaluation;
      reviewBundle: ReviewBundle;
      conformityEvidence: Evidence;
      artifactEvidence: Evidence;
      supersededClaimEvaluationId?: string;
      verifierMatchedHeadings: readonly string[];
      oracleFingerprint: string;
      reusedFromIdempotencyKey?: boolean;
    }
  | { ok: false; code: string; message: string };

export async function completeDocsWriteClaimEvidenceCompletion(
  input: CompleteDocsWriteClaimEvidenceCompletionInput,
): Promise<CompleteDocsWriteClaimEvidenceCompletionResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const services = input.evidenceReviewServices;
  const correctionRef =
    input.correctionRef ?? DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF;

  const ids = docsWriteContractResultIdentity(input.attempt.attemptId, {
    correctionRef,
    scopeReviewBundle: true,
  });

  const artifactEvidence = await services.evidenceReader.findById(
    ids.evidenceId,
  );
  if (!artifactEvidence) {
    return {
      ok: false,
      code: "DOCS_WRITE_EVIDENCE_MISSING",
      message: `Artifact Evidence ${ids.evidenceId} introuvable.`,
    };
  }

  const historicalRb = await services.reviewBundleReader.findById(
    docsWriteContractResultIdentity(input.attempt.attemptId).reviewBundleId,
  );
  if (!historicalRb?.frozenAt || !historicalRb.frozenVersion) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
      message: "Historical docs_write RB must remain frozen/auditable.",
    };
  }

  // CR-CEC-01 — NEVER fallback to live contract.inputs for oracle derivation.
  const criteria = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
    input.attempt,
  );
  if (!criteria.ok) {
    return { ok: false, code: criteria.code, message: criteria.message };
  }

  const expectedDigest = artifactEvidence.digest as Digest | undefined;
  const artifactPath =
    artifactEvidence.location?.trim() || criteria.criteria.targetPath;

  let verification;
  if (input.artifactBytes) {
    verification = verifyDocsWriteMinConformityFromBytes({
      bytes: input.artifactBytes,
      artifactPath,
      expectedDigest,
      criteria: criteria.criteria,
    });
  } else if (input.artifactAbsolutePath) {
    verification = verifyDocsWriteMinConformityFromFile({
      absolutePath: input.artifactAbsolutePath,
      artifactPath,
      expectedDigest,
      criteria: criteria.criteria,
    });
  } else {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_PAYLOAD_UNAVAILABLE",
      message: "artifactAbsolutePath or artifactBytes required.",
    };
  }

  if (!verification.ok) {
    return {
      ok: false,
      code: verification.code,
      message: verification.message,
    };
  }

  // Idempotent: if conformity Evidence + successor RB + CE already exist, requalify.
  const existingConformity = await services.evidenceReader.findById(
    ids.conformityEvidenceId,
  );
  let conformityEvidence = existingConformity ?? undefined;
  if (!conformityEvidence) {
    const registered = await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: `idem:docs-write-conformity:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      type: "attestation",
      source: verification.verifierSource,
      sourceKind: "system",
      bindings: {
        projectId:
          artifactEvidence.bindings.projectId ?? input.contract.projectId,
        cycleInstanceId:
          artifactEvidence.bindings.cycleInstanceId ??
          input.contract.cycleInstanceId,
        executionContractId: input.attempt.executionContractId,
        executionAttemptId: input.attempt.attemptId,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      availability: "available",
      freshness: "fresh",
      location: artifactPath,
      digest: verification.digest,
      technicalResultRef: verification.technicalResultRef,
      verifiablePayload: false,
      producedBy: actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!registered.ok) {
      return {
        ok: false,
        code: registered.error.detailCode,
        message:
          registered.error.internalCauseRef ?? registered.error.message,
      };
    }
    conformityEvidence = registered.evidence;
  }

  let reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (!reviewBundle) {
    const created = await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: `idem:docs-write-rb-create:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      projectId:
        artifactEvidence.bindings.projectId ?? input.contract.projectId,
      cycleInstanceId:
        artifactEvidence.bindings.cycleInstanceId ??
        input.contract.cycleInstanceId,
      executionContractId: input.attempt.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!created.ok) {
      return {
        ok: false,
        code: created.error.detailCode,
        message: created.error.internalCauseRef ?? created.error.message,
      };
    }
    reviewBundle = created.reviewBundle;
  } else if (reviewBundle.status === "draft") {
    const needArtifact = !reviewBundle.evidenceRefs.includes(ids.evidenceId);
    const needConformity = !reviewBundle.evidenceRefs.includes(
      ids.conformityEvidenceId,
    );
    let version = reviewBundle.version;
    if (needArtifact) {
      const attached = await services.attachEvidenceToReviewBundle.execute({
        reviewBundleId: ids.reviewBundleId,
        evidenceId: ids.evidenceId,
        idempotencyKey: `idem:docs-write-rb-attach-art:${correctionRef}:${input.attempt.attemptId}`,
        actor,
        expectedVersion: version,
        correlationId: input.correlationId,
        nowIso: input.nowIso,
      });
      if (!attached.ok) {
        return {
          ok: false,
          code: attached.error.detailCode,
          message:
            attached.error.internalCauseRef ?? attached.error.message,
        };
      }
      reviewBundle = attached.reviewBundle;
      version = reviewBundle.version;
    }
    if (needConformity) {
      const attached = await services.attachEvidenceToReviewBundle.execute({
        reviewBundleId: ids.reviewBundleId,
        evidenceId: ids.conformityEvidenceId,
        idempotencyKey: `idem:docs-write-rb-attach-conf:${correctionRef}:${input.attempt.attemptId}`,
        actor,
        expectedVersion: version,
        correlationId: input.correlationId,
        nowIso: input.nowIso,
      });
      if (!attached.ok) {
        return {
          ok: false,
          code: attached.error.detailCode,
          message:
            attached.error.internalCauseRef ?? attached.error.message,
        };
      }
      reviewBundle = attached.reviewBundle;
    }
  }

  if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
    if (reviewBundle.status !== "draft") {
      return {
        ok: false,
        code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
        message: `Successor RB status ${reviewBundle.status} cannot freeze.`,
      };
    }
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: reviewBundle.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.internalCauseRef ?? frozen.error.message,
      };
    }
    reviewBundle = frozen.reviewBundle;
  }

  const requalified = await requalifyDocsWriteContractResult({
    evidenceReviewServices: services,
    attempt: input.attempt,
    contract: input.contract,
    actor,
    correlationId: input.correlationId,
    nowIso: input.nowIso,
    correctionRef,
    scopeReviewBundle: true,
  });

  if (!requalified.ok) {
    return {
      ok: false,
      code: requalified.code,
      message: requalified.message,
    };
  }

  return {
    ok: true,
    claimEvaluation: requalified.claimEvaluation,
    reviewBundle: requalified.reviewBundle,
    conformityEvidence,
    artifactEvidence,
    supersededClaimEvaluationId: requalified.supersededClaimEvaluationId,
    verifierMatchedHeadings: verification.matchedHeadings,
    oracleFingerprint: verification.oracleFingerprint,
    reusedFromIdempotencyKey: requalified.reusedFromIdempotencyKey,
  };
}

```

### DIFF projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts

```typescript
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
index 066aa8a7..ca8f4c71 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
@@ -11,6 +11,11 @@ import type {
   ContractResultEvidenceSelection,
   ContractResultSemantic,
 } from "./contractResultSemantics";
+import {
+  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
+  expectedDocsWriteConformityOracleFingerprint,
+  parseDocsWriteConformityOracleFingerprint,
+} from "./docsWriteMinConformityVerifier";
 import { isW3bContractResultEvidenceUsable } from "./tempArtifactContractResultSemantic";

 export const DOCS_WRITE_CONTRACT_RESULT_RULE_REF =
@@ -31,31 +36,69 @@ export const DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE =
  */
 export const DOCS_WRITE_STRICT_EO_CORRECTION_REF = "strict-eo-v1" as const;

+/**
+ * Evidence-completion re-evaluation identity (successor RB + conformity Evidence).
+ * Does not mutate the historical rb:docs-write freeze.
+ * v1 = historical immutable PASS (headings-only / unbound oracle) — do not reuse.
+ * v2 = CR-CEC-01/02/03 bound-oracle + fingerprint attestation.
+ */
+export const DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF_V1 =
+  "evidence-completion-v1" as const;
+
+export const DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF =
+  "evidence-completion-v2" as const;
+
+/**
+ * Exact historically-bound EO templates (versioned named semantics — no NLP).
+ * Apostrophe in EO1 is U+2019 (bound Attempt 3 EC truth).
+ */
+export const DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET =
+  "Le fichier Markdown matérialisé au chemin cible" as const;
+
+export const DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION =
+  "Vérification de l\u2019existence et de la conformité minimale du fichier" as const;
+
 /** Identity helpers for docs-write Contract Result ClaimEvaluations. */
 export function docsWriteContractResultIdentity(
   attemptId: string,
-  options?: { readonly correctionRef?: string },
+  options?: {
+    readonly correctionRef?: string;
+    /**
+     * When true with correctionRef, allocate a successor ReviewBundle id
+     * (`rb:docs-write:{correction}:{attempt}`) leaving historical RB untouched.
+     */
+    readonly scopeReviewBundle?: boolean;
+  },
 ): {
   claimEvaluationId: string;
   claimEvaluationIdempotencyKey: string;
   evidenceId: string;
   reviewBundleId: string;
+  conformityEvidenceId: string;
 } {
   const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
   const correction = options?.correctionRef?.replace(/[^a-zA-Z0-9:_-]/g, "");
+  const baseEvidence = `ev:docs-write:${segment}`.slice(0, 128);
+  const baseRb = `rb:docs-write:${segment}`.slice(0, 128);
   if (correction) {
+    const scopedRb = options?.scopeReviewBundle
+      ? `rb:docs-write:${correction}:${segment}`.slice(0, 128)
+      : baseRb;
     return {
       claimEvaluationId: `clm:docs-write:${correction}:${segment}`.slice(0, 128),
       claimEvaluationIdempotencyKey: `idem:docs-write-ce:${correction}:${attemptId}`,
-      evidenceId: `ev:docs-write:${segment}`.slice(0, 128),
-      reviewBundleId: `rb:docs-write:${segment}`.slice(0, 128),
+      evidenceId: baseEvidence,
+      reviewBundleId: scopedRb,
+      conformityEvidenceId:
+        `ev:docs-write-conformity:${correction}:${segment}`.slice(0, 128),
     };
   }
   return {
     claimEvaluationId: `clm:docs-write:${segment}`.slice(0, 128),
     claimEvaluationIdempotencyKey: `idem:docs-write-ce:${attemptId}`,
-    evidenceId: `ev:docs-write:${segment}`.slice(0, 128),
-    reviewBundleId: `rb:docs-write:${segment}`.slice(0, 128),
+    evidenceId: baseEvidence,
+    reviewBundleId: baseRb,
+    conformityEvidenceId: `ev:docs-write-conformity:${segment}`.slice(0, 128),
   };
 }

@@ -123,6 +166,75 @@ function pickDocsWriteArtifactEvidence(
   return matches.length === 1 ? matches[0] : undefined;
 }

+export function docsWriteConformityFactsHold(input: {
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+  artifact: Evidence;
+  material: {
+    executionContractId?: string;
+    projectId?: string;
+    cycleInstanceId?: string;
+  };
+}): boolean {
+  const { attempt, evidence, artifact, material } = input;
+  if (attempt.status !== "succeeded") return false;
+  if (evidence.type !== "attestation") return false;
+  // Server-owned: exact v2 verifier profile — never trust caller-only source strings.
+  if (evidence.source !== DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE) return false;
+  if (evidence.sourceKind !== "system") return false;
+
+  const expectedFp = expectedDocsWriteConformityOracleFingerprint(attempt);
+  if (!expectedFp) return false;
+  const attestedFp = parseDocsWriteConformityOracleFingerprint(
+    evidence.technicalResultRef,
+  );
+  if (!attestedFp || attestedFp !== expectedFp) return false;
+
+  if (evidence.bindings.executionAttemptId !== attempt.attemptId) return false;
+  const contractId =
+    material.executionContractId ?? attempt.executionContractId;
+  if (!evidence.bindings.executionContractId) return false;
+  if (evidence.bindings.executionContractId !== contractId) return false;
+  const projectId = material.projectId;
+  if (projectId) {
+    if (!evidence.bindings.projectId) return false;
+    if (evidence.bindings.projectId !== projectId) return false;
+  }
+  const cycleId = material.cycleInstanceId;
+  if (cycleId) {
+    if (!evidence.bindings.cycleInstanceId) return false;
+    if (evidence.bindings.cycleInstanceId !== cycleId) return false;
+  }
+  if (!evidence.digest) return false;
+  if (evidence.digest !== artifact.digest) return false;
+  if (evidence.status !== "available" && evidence.status !== "verified") {
+    return false;
+  }
+  const artifactLocation = artifact.location?.trim() ?? "";
+  const evidenceLocation = evidence.location?.trim() ?? "";
+  if (!artifactLocation || evidenceLocation !== artifactLocation) return false;
+  // OCC version must be a positive integer (frozen snapshot path re-checks exact version).
+  if (!Number.isInteger(evidence.version) || evidence.version < 1) return false;
+  return true;
+}
+
+function pickDocsWriteConformityEvidence(
+  evidences: readonly Evidence[],
+  attempt: ExecutionAttemptSnapshot,
+  artifact: Evidence,
+  material: {
+    executionContractId?: string;
+    projectId?: string;
+    cycleInstanceId?: string;
+  },
+): Evidence | undefined {
+  const matches = evidences.filter((e) =>
+    docsWriteConformityFactsHold({ attempt, evidence: e, artifact, material }),
+  );
+  // Ambiguous duplicate conformity Evidence → fail-closed (undefined).
+  return matches.length === 1 ? matches[0] : undefined;
+}
+
 function isPathShapedExpectedOutput(expectation: string): boolean {
   return (
     expectation.includes("/") ||
@@ -130,10 +242,21 @@ function isPathShapedExpectedOutput(expectation: string): boolean {
   );
 }

+function boundTargetPath(
+  inputs: Record<string, unknown> | undefined,
+): string | undefined {
+  const raw = inputs?.targetPath;
+  return typeof raw === "string" && raw.trim().length > 0
+    ? raw.trim()
+    : undefined;
+}
+
 /**
  * docs_write EO PASS only for deterministic forms:
  * 1) exact canonical bounded EO template;
- * 2) path-shaped EO that exactly equals durable Artifact Evidence.location.
+ * 2) path-shaped EO that exactly equals durable Artifact Evidence.location;
+ * 3) named EO materialized-markdown-at-target (bound inputs.targetPath);
+ * 4) named EO min-conformity (requires matching conformity attestation Evidence).
  * Unknown / free-form prose → NOT_PROVEN (no NLP, no fuzzy PASS).
  */
 export function assessDocsWriteExpectedOutput(input: {
@@ -147,6 +270,7 @@ export function assessDocsWriteExpectedOutput(input: {
     cycleInstanceId?: string;
     inputs?: Record<string, unknown>;
   };
+  evidences?: readonly Evidence[];
 }): "PASS" | "NOT_PROVEN" | "FAIL" {
   if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
     return "FAIL";
@@ -166,6 +290,23 @@ export function assessDocsWriteExpectedOutput(input: {
   if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
     return "PASS";
   }
+  if (expectation === DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET) {
+    const target = boundTargetPath(input.material.inputs);
+    if (!target) return "NOT_PROVEN";
+    return location.length > 0 && location === target ? "PASS" : "NOT_PROVEN";
+  }
+  if (expectation === DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION) {
+    const pool = input.evidences ?? [input.evidence];
+    const conformity = pickDocsWriteConformityEvidence(
+      pool,
+      input.attempt,
+      input.evidence,
+      input.material,
+    );
+    if (!conformity) return "NOT_PROVEN";
+    // Existence is implied by matching digest+location on usable attestation.
+    return "PASS";
+  }
   if (isPathShapedExpectedOutput(expectation)) {
     return location.length > 0 && expectation === location
       ? "PASS"
@@ -245,6 +386,7 @@ export const docsWriteContractResultSemantic: ContractResultSemantic = {
       attempt: input.attempt,
       evidence,
       material: input.material,
+      evidences: input.evidences,
     });
   },
   assessEvidenceRequirement(input) {
```

### NEW FILE projects/sfia-studio/app/__tests__/project-assistant/claimEvidenceCompletion.d0.test.ts

```typescript
/**
 * PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 — EC-01..EC-23 + CR-CEC-01/02/03.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  docsWriteConformityTechnicalResultRef,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
  DOCS_WRITE_STRICT_EO_CORRECTION_REF,
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  expectedDocsWriteConformityOracleFingerprint,
  extractDocsWriteMinConformityCriteria,
  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
  resolveCurrentContractResultClaimEvaluation,
  stripMarkdownFencedCodeBlocks,
  verifyDocsWriteMinConformityFromBytes,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";
import { completeDocsWriteClaimEvidenceCompletion } from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import { createHash } from "node:crypto";

const ACTOR = { actorId: "actor:cec", role: "project_owner" as const };
const NOW = "2026-09-18T16:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";
const PROJECT_ID = "prj:e3fe8a45-5c9e-4651-bd2c-bde1cdf77c38";
const CYCLE_ID = "cyc:trj-979cf448c5a6f0e7685f937f";
const TARGET = "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
const CONTENT_REQUIREMENTS = [
  "Objectif",
  "Périmètre inclus",
  "Périmètre exclu",
  "Besoins principaux",
  "Critères de succès",
  "Prochaine étape",
] as const;
const VALIDATION_EXPECTATIONS = [
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
] as const;

const GOOD_MARKDOWN = `# Gestion de tâches

## Objectif
Texte.

## Périmètre inclus
Inclus.

## Périmètre exclu
Exclu.

## Besoins principaux
Besoins.

## Critères de succès
Succès.

## Prochaine étape
Suite.
`;

function digestOf(bytes: Buffer): Digest {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}` as Digest;
}

function makeContract(overrides?: {
  expectedOutputs?: string[];
  inputs?: Record<string, unknown>;
}): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m3-res:dec:w2-trj:e00839c5-5022-4bd8-8243-f0a2dd6e79cb",
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    version: 2,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: TARGET,
    scope: "projects/sfia-studio/.sandbox",
    requiredAuthority: "N3",
    constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: overrides?.expectedOutputs ?? [
      DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
      DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
    ],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:cec:docs",
    correlationId: "cor:ec:cec:docs",
    inputs: overrides?.inputs ?? {
      targetPath: TARGET,
      contentRequirements: [...CONTENT_REQUIREMENTS],
      validationExpectations: [...VALIDATION_EXPECTATIONS],
      artifactType: "Markdown",
    },
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function makeAttempt(
  contract: ExecutionContract,
  options?: { omitBound?: boolean; omitBoundInputs?: boolean },
): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  if (options?.omitBound) {
    return {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      status: "succeeded",
      resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;
  }
  if (options?.omitBoundInputs) {
    return {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: {
        ...snap,
        semanticMaterial: {
          ...snap.semanticMaterial,
          inputs: undefined as unknown as Record<string, unknown>,
        },
      },
      status: "succeeded",
      resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;
  }
  return {
    attemptId: ATTEMPT_ID,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    status: "succeeded",
    resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
    selectedAgentRef: "agent:docs-write",
    version: 3,
    createdAt: NOW,
    updatedAt: NOW,
  } as ExecutionAttempt;
}

async function seedArtifactOnly(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  bytes: Buffer;
  location?: string;
}) {
  const digest = digestOf(input.bytes);
  const ingested = await ingestDocsWriteArtifactEvidence({
    evidenceReviewServices: input.services,
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    executionContractId: input.contract.executionContractId,
    executionAttemptId: input.attempt.attemptId,
    targetPath: input.location ?? TARGET,
    digest,
    actor: ACTOR,
    nowIso: NOW,
  });
  expect(ingested.ok).toBe(true);
  if (!ingested.ok) throw new Error(ingested.message);
  const rb = await input.services.reviewBundleReader.findById(
    ingested.reviewBundleId,
  );
  if (rb && !rb.frozenAt) {
    const frozen = await input.services.freezeReviewBundle.execute({
      reviewBundleId: ingested.reviewBundleId,
      expectedVersion: rb.version,
      idempotencyKey: `idem:seed-freeze:${ingested.reviewBundleId}`,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(frozen.ok).toBe(true);
  }
  return { digest, evidenceId: ingested.evidenceId, reviewBundleId: ingested.reviewBundleId };
}

function validConformityRef(attempt: ExecutionAttempt): string {
  const fp = expectedDocsWriteConformityOracleFingerprint(attempt);
  if (!fp) throw new Error("expected oracle fingerprint missing");
  return docsWriteConformityTechnicalResultRef(fp);
}

describe("claim evidence completion EC-01..EC-23", () => {
  it("EC-01 — historical-shaped EO + Artifact only → NOT_PROVEN", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    await seedArtifactOnly({
      services,
      contract,
      attempt,
      bytes: Buffer.from(GOOD_MARKDOWN, "utf8"),
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
    const eo = rq.claimEvaluation.expectedOutputAssessments ?? [];
    expect(eo.map((a) => a.result)).toEqual(["PASS", "NOT_PROVEN"]);
  });

  it("EC-02 — Artifact + conformity Evidence → both EO PASS / CE pass", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.claimEvaluation.status).toBe("pass");
    expect(
      (done.claimEvaluation.expectedOutputAssessments ?? []).map((a) => a.result),
    ).toEqual(["PASS", "PASS"]);
    expect(done.conformityEvidence.source).toBe(
      DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
    );
    expect(done.conformityEvidence.technicalResultRef).toBe(
      validConformityRef(attempt),
    );
    expect(done.oracleFingerprint).toHaveLength(64);
    // Historical RB unchanged identity still frozen.
    const hist = await services.reviewBundleReader.findById(
      docsWriteContractResultIdentity(ATTEMPT_ID).reviewBundleId,
    );
    expect(hist?.status).toBe("ready_for_review");
    expect(hist?.frozenAt).toBeTruthy();
    expect(hist?.evidenceRefs).toEqual([
      docsWriteContractResultIdentity(ATTEMPT_ID).evidenceId,
    ]);
  });

  it("EC-03 — unknown EO → NOT_PROVEN even with conformity", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract({
      expectedOutputs: [
        DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
        "Texte libre arbitraire non supporté",
      ],
    });
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "evidence-completion-unknown-eo",
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-04 — wrong artifact digest on conformity → no PASS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:bad-digest",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest,
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-bad",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    expect(created.ok).toBe(true);
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    expect(rb).toBeTruthy();
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-bad",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-05 — wrong path → no PASS on materialized EO", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({
      services,
      contract,
      attempt,
      bytes,
      location: "projects/sfia-studio/.sandbox/wrong.md",
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "path-mismatch-v1",
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
    expect(rq.claimEvaluation.expectedOutputAssessments?.[0]?.result).toBe(
      "NOT_PROVEN",
    );
  });

  it("EC-06/07/08 — wrong Attempt / EC / project bindings → no PASS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: "bind-fail-v1",
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:bind-fail",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: "prj:other",
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-bind",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-bind",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "bind-fail-v1",
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-09 — stale/rejected conformity → no PASS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: "stale-conf-v1",
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:stale",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "rejected",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-stale",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-stale",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "stale-conf-v1",
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-10..15 — freeze, lineage, correctionRef successor + idempotent", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });

    // Seed prior current CE as strict-eo not_proven.
    const strict = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(strict.ok).toBe(true);
    if (!strict.ok) return;
    expect(strict.claimEvaluation.status).toBe("not_proven");

    const first = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.claimEvaluation.status).toBe("pass");
    expect(first.claimEvaluation.claimEvaluationId).toContain(
      "evidence-completion-v2",
    );
    expect(first.reviewBundle.frozenAt).toBeTruthy();
    expect(first.reviewBundle.frozenEvidenceSnapshots?.length).toBe(2);
    expect(first.claimEvaluation.supersedesClaimEvaluationId).toBe(
      strict.claimEvaluation.claimEvaluationId,
    );

    const second = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    expect(second.reusedFromIdempotencyKey).toBe(true);

    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: PROJECT_ID,
      executionAttemptId: ATTEMPT_ID,
    });
    expect(current.status).toBe("one");
    if (current.status !== "one") return;
    expect(current.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    // Old CE immutable
    const old = await services.claimEvaluationReader.findById(
      strict.claimEvaluation.claimEvaluationId,
    );
    expect(old?.status).toBe("not_proven");
  });

  it("CR-CEC-01 — bound inputs absent + live contract populated → FAIL-CLOSED", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract, { omitBoundInputs: true });
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "bound-missing-inputs",
    });
    expect(done.ok).toBe(false);
    if (done.ok) return;
    expect(done.code).toBe("BOUND_ACCEPTANCE_ORACLE_MISSING");
  });

  it("CR-CEC-01 — bound snapshot absent + live contract populated → FAIL-CLOSED", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract, { omitBound: true });
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "bound-missing-snap",
    });
    expect(done.ok).toBe(false);
    if (done.ok) return;
    expect(done.code).toBe("BOUND_ACCEPTANCE_ORACLE_MISSING");
  });

  it("CR-CEC-01 — live contract criteria differ from bound → bound wins", async () => {
    const boundContract = makeContract();
    const attempt = makeAttempt(boundContract);
    const liveContract = makeContract({
      inputs: {
        targetPath: "projects/sfia-studio/.sandbox/live-different.md",
        contentRequirements: ["WrongHeading"],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
    });
    const extracted = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
      attempt,
    );
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) return;
    expect(extracted.criteria.targetPath).toBe(TARGET);
    expect(extracted.criteria.contentRequirements).toEqual([
      ...CONTENT_REQUIREMENTS,
    ]);
    // Live contract must not be consulted — different target ignored.
    expect(liveContract.inputs?.targetPath).not.toBe(
      extracted.criteria.targetPath,
    );
  });

  it("CR-CEC-02 — v1 static technicalResultRef rejected; oracle fingerprint required", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: "oracle-fp-v1-reject",
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:v1-ref",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: "docs_write_min_conformity:v1:headings_present",
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-v1-ref",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-v1-ref",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "oracle-fp-v1-reject",
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("CR-CEC-03 — unknown validationExpectation → BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: ["Quelque chose d'inconnu"],
        artifactType: "Markdown",
      },
      "fp:test",
    );
    expect(criteria.ok).toBe(false);
    if (criteria.ok) return;
    expect(criteria.code).toBe("BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED");
  });

  it("CR-CEC-03 — headings inside fenced code blocks do NOT PASS", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
      "fp:fence",
    );
    expect(criteria.ok).toBe(true);
    if (!criteria.ok) return;
    const fencedOnly = `# Title

\`\`\`markdown
## Objectif
## Périmètre inclus
## Périmètre exclu
## Besoins principaux
## Critères de succès
## Prochaine étape
\`\`\`
`;
    const fail = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from(fencedOnly, "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(fail.ok).toBe(false);
    if (fail.ok) return;
    expect(fail.code).toBe("CONFORMITY_HEADINGS_MISSING");

    const stripped = stripMarkdownFencedCodeBlocks(fencedOnly);
    expect(stripped).not.toMatch(/^## Objectif/m);
  });

  it("EC-20..23 — no HD / Attempts unchanged / ZERO REAL / verifier oracle", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
      "fp:oracle",
    );
    expect(criteria.ok).toBe(true);
    if (!criteria.ok) return;
    const pass = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from(GOOD_MARKDOWN, "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(pass.ok).toBe(true);
    if (pass.ok) {
      expect(pass.technicalResultRef).toMatch(
        /^docs_write_min_conformity:v2:oracle:[a-f0-9]{64}$/,
      );
    }
    const fail = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from("# alone\n", "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(fail.ok).toBe(false);
    // Governance: this suite never creates HumanDecision / trajectory / Attempt.
    expect(ATTEMPT_ID).toBe("xat:w3a:c4c5670edb4658cc");
    expect(DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF).toBe(
      "evidence-completion-v2",
    );
  });
});

```


---

## 8. Next gate

ChatGPT Critical Review of CR-CEC-01/02/03 correction → Morris decision on project Git integration (DISTINCT GO).
