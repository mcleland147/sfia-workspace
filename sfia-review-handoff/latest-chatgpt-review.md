# ChatGPT Review Pack — FULL
## EXECUTION-CONTRACT INSPECTION DISCLOSURE + INSPECTION ATTESTATION FACT COVERAGE

### A. Timestamp
2026-09-16T02:48:36Z (UTC)

### B. Git truth
- Repository: mcleland147/sfia-workspace
- origin/main: `3626e1c115c2b544df8848bf701b4590fe57cb15`
- Remediation worktree: `/Users/morris/Projects/sfia-studio-ec-inspection-disclosure-v2`
- Branch: `fix/sfia-studio-ec-inspection-disclosure-v2`
- HEAD (uncommitted Product candidate on main tip): `3626e1c115c2b544df8848bf701b4590fe57cb15`
- Prior handoff tip expected: `e2ad6dde70517db69941858df171aa19a0e3b4e3`
- Note: first attempted worktree path `/Users/morris/Projects/sfia-studio-ec-inspection-disclosure` was found checked out on `fix/sfia-studio-product-proof-journey-integrity` @ `f51ad142` (diverged). Left untouched (no reset/stash/clean). Delivery continued on clean v2 from exact origin/main.

### C. Morris GO consumed
Local bounded remediation ONLY authorized:
- local Git discovery; dedicated branch/worktree from exact main;
- Product source changes for EC inspection disclosure + attestation coverage;
- deterministic isolated tests; full local validation; FULL Review Pack; Review Handoff L3.
NOT authorized / NOT performed: dogfood Product action, Confirm, Authorize, Execute, OpenAI LIVE, Cursor/docs_write REAL, Product commit/push/PR/merge, DB migration, doctrine edits.

### D. Cycle / profile / convergence
- Cycle: 8 — Delivery
- Typology: RUN
- Profile: Critical
- Why Critical: gates human Confirmation; false inspection sufficiency could record consent without Pilot seeing exact execution effect; Confirmation + effective authority depend on inspection; v3 governed execution critical path.
- Capabilities: V3-F11 (inspectable EC + authority envelope), V3-F12 (effect / reversibility / Confirmation governance)
- Milestone: Product Journey manual reproof — execution-contract governance
- Assets: EC domain KEEP; SQLite KEEP; DecisionBasis KEEP; prepareM3 inputs KEEP; generic target KEEP; exact path in inputs KEEP; Product disclosure ADAPT; InspectionAttestation KEEP model; fact profile / sufficiency ADAPT; Confirmation KEEP; Authority KEEP (consumes corrected sufficiency); Execute KEEP / NOT EXERCISED
- No new architecture; no second contract store; no alternate confirmation engine; no DB migration

### E. Manual campaign blocker evidence
Authenticated manual Product campaign reached:
Proposal → PresentedOptionSet → explicit HumanDecision pursue → linked DecisionBasis → ExecutionContract PREPARE → Inspect
with ZERO REAL, then STOPPED correctly because Pilot could not inspect exact execution target path from EC before Confirmation.

Observed:
- decided path: `projects/sfia-studio/.sandbox/gestion-de-taches.md`
- executionContractId: `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411`
- status: `confirmation_required`
- action: `cursor.docs_write.apply`
- technical target: `workspace.isolated.docs_write`
Exact path existed in durable EC `inputs` but was not projected as inspectable Product truth. InspectionAttestation could become “sufficient” without covering disclosed execution-significant facts.

### F. Root cause A–F — CONFIRMED YES
A. EC domain already carries `inputs?`, `expectedOutputs?`, `evidenceRequirements` — durable truth capable.
B. `prepareM3FromDecision.fieldsFromBasis` stores docs_write exact path in `inputs.targetPath` while `contract.target` remains `workspace.isolated.docs_write`.
C. `F3M3PreparePayload.contract` previously dropped inputs before TrajectorySurface; local `PreparedContract` repeated reduced shape.
D. UI showed action / generic target / scope / status + métier/tech details — no exact path/repo/scopeIn/Out/outputs/evidence.
E. `DEFAULT_INSPECTED_FACTS` omitted `inputs.targetPath`; `evaluateInspectionSufficiency` was fingerprint-only.
F. `confirmExecutionContractForAuthorization` and `evaluateExecutionAuthorization` both call `readContractInspectionState` — corrected sufficiency protects both.

### G. Existing durable EC semantics preserved
- `contract.action`, `contract.target`, `contract.scope`, `contract.inputs`, semanticFingerprint, decisionRefs, confirmationRef, status, version: NOT mutated for presentation
- Generic technical target remains `workspace.isolated.docs_write`
- Exact path remains in `inputs.targetPath`
- No DecisionBasis reread in UI; no Proposal-memory fallback
- Dogfood EC / legacy attestation: NOT deleted, rewritten, migrated, or backfilled

### H. Exact disclosure projection design
New allowlisted projection:
`projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts`
→ `ExecutionContractInspectionDisclosure` + `projectExecutionContractInspectionDisclosure`
- Never exposes raw `inputs` bag
- Fail-closed `INSPECTION_DISCLOSURE_INCOMPLETE` when docs_write lacks `targetPath` or `targetRepositoryRef`
- Wired into M3 PREPARE payload, W3A prepare DTO, amend successor DTO, TrajectorySurface pre-inspect card

### I. Required-inspected-facts design
`requiredInspectedFactsForContract(contract)` derives dynamic profile from durable EC.
Base facts preserved; docs_write adds `inputs.targetPath`, `inputs.targetRepositoryRef`, and present optionals (`scopeIn/Out`, createOrModify, noDelete, contentRequirements, validationExpectations, expectedOutputs).
`inspectExecutionContract` records derived facts (not static DEFAULT fiction).
`GetContractInspectionState` → `evaluateInspectionSufficiency` now requires coverage.

### J. Legacy attestation fail-closed
Same fingerprint + pre-correction fact set →
`inspectionSufficient=false`, `reinspectionRequired=true`,
`reason=inspected_facts_incomplete`,
label `RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS`
No EC supersession to invalidate old inspection.

### K. Confirmation protection
`confirmExecutionContractForAuthorization` refuses incomplete inspection with `REINSPECTION_REQUIRED` / details-required message. No Confirmation created. Policy otherwise unchanged.

### L. Authorization protection
`evaluateExecutionAuthorization` BLOCKED with
`reinspection_required_inspected_facts_incomplete`
(new `AuthorityVerificationBlockedReason`). No Attempt. No execution.

### M. Production diffs
See unified diff sections below.

### N. Test diffs
New: `__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts` (9 tests)
Updated: `trajectorySurface.ui.test.tsx` (pre-inspect UI disclosure assertions)

### O–T. Proofs (deterministic isolated)
O. Durable disclosure projects exact path + repo; technical target preserved; no Proposal reconstruction; missing path/repo fail closed; no raw inputs leak; optionals only when present.
P. TrajectorySurface UI before Inspect shows action, technical target, exact path, repository; Confirm disabled.
Q. Legacy incomplete attestation insufficient.
R. Fresh complete inspection sufficient; grantsAuthority=false; no Attempt.
S. Confirm refuses incomplete; proceeds after fresh complete; executionPerformed=false.
T. Authorize BLOCKED on incomplete; after fresh may progress past inspection gate only.

### U. Amendment/reinspection regression
w2EabcDelivery + amend paths still consume `readContractInspectionState`; successor carries disclosure; material change still requires reinspection.

### V. CORR-PROOF / Lot A-B regression
Focused suites include corrProof07/10, productProofJourneyIntegrity*, proposalSubjectIntegrity, trajectorySurface — all green.

### W. Focused validation
10 files / 205 passed / 0 failed:
1. ecInspectionDisclosure.d0.test.ts
2. trajectorySurface.ui.test.tsx
3. w2EabcDelivery.test.ts
4. productProofJourneyIntegrity.d0.test.ts
5. productProofJourneyIntegrity.applicationPath.d0.test.ts
6. proposalSubjectIntegrity.d0.test.ts
7. executionContractGovernance.test.ts
8. m3ExecutionContractPrepare.test.ts
9. corrProof10.decisionContextContinuity.d0.test.ts
10. corrProof07.artifactMaterialization.d0.test.ts

### X. Full Vitest
4121 passed | 137 skipped | 0 failed
(baseline before correction stated 4112; +9 from new disclosure suite)

### Y. typecheck / lint / build / diff-check
- typecheck: PASS
- lint: PASS (0 warnings/errors)
- build: PASS
- git diff --check: PASS

### Z–AC. Forbidden actions
- Dogfood mutation: ZERO
- OpenAI LIVE: ZERO
- Cursor/docs_write REAL: ZERO
- Product commit: NONE
- Product push: NONE
- PR: NONE

### AD. Remaining reserve
Authenticated manual reproof must be rerun after integration (Inspect → Confirm path with corrected disclosure).

### AE. Next gate
ChatGPT Critical Review

### AF. Verdict
EXECUTION-CONTRACT-INSPECTION-DISCLOSURE — EXACT DOCS_WRITE TARGET DISCLOSED FROM DURABLE EC BEFORE ATTESTATION — INSPECTED-FACT COVERAGE ENFORCED — LEGACY INCOMPLETE ATTESTATION FAILS CLOSED — CONFIRMATION / AUTHORIZATION PROTECTED — ZERO DOGFOOD MUTATION — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW

---

## Production + test unified diffs

### New file: inspectionDisclosure.ts
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
new file mode 100644
index 00000000..4657781e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
@@ -0,0 +1,211 @@
+/**
+ * Canonical Product inspection disclosure — allowlisted projection from durable
+ * ExecutionContract truth. Never reconstructs paths from Proposal/client text.
+ *
+ * Generic `contract.target` (execution channel) and exact `inputs.targetPath`
+ * (effect target) remain distinct semantics.
+ */
+
+import type { ExecutionContract } from "../domain/types";
+
+export const DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+export const DOCS_WRITE_TECHNICAL_TARGET = "workspace.isolated.docs_write" as const;
+
+export type ExecutionContractInspectionDisclosure = {
+  readonly action: string;
+  readonly technicalTarget: string;
+  readonly scope: string;
+  readonly targetRepositoryRef: string | null;
+  readonly targetPath: string | null;
+  readonly scopeIn: readonly string[] | null;
+  readonly scopeOut: readonly string[] | null;
+  readonly createOrModify: boolean | null;
+  readonly noDelete: boolean | null;
+  readonly objective: string | null;
+  readonly artifactType: string | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[] | null;
+  readonly validationExpectations: readonly string[] | null;
+  readonly expectedOutputs: readonly string[] | null;
+  readonly evidenceRequirements: readonly string[];
+  readonly requiredAuthority: string;
+  readonly requiredCapabilities: readonly string[];
+  readonly constraints: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly reversibility: string;
+  readonly contractVersion: number;
+  readonly executionContractId: string;
+  readonly semanticFingerprint: string | null;
+  /** docs_write contracts missing mandatory effect targets are incomplete. */
+  readonly disclosureComplete: boolean;
+  readonly incompletenessCode: "INSPECTION_DISCLOSURE_INCOMPLETE" | null;
+};
+
+export type InspectionDisclosureProjectionResult =
+  | {
+      readonly ok: true;
+      readonly disclosure: ExecutionContractInspectionDisclosure;
+    }
+  | {
+      readonly ok: false;
+      readonly code: "INSPECTION_DISCLOSURE_INCOMPLETE";
+      readonly disclosure: ExecutionContractInspectionDisclosure;
+      readonly message: string;
+    };
+
+function asNonEmptyString(value: unknown): string | null {
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
+function asStringArray(value: unknown): readonly string[] | null {
+  if (!Array.isArray(value)) return null;
+  const out = value
+    .filter((v): v is string => typeof v === "string")
+    .map((v) => v.trim())
+    .filter((v) => v.length > 0);
+  return out.length > 0 ? out : null;
+}
+
+function asBoolean(value: unknown): boolean | null {
+  return typeof value === "boolean" ? value : null;
+}
+
+export function isDocsWriteExecutionContract(
+  contract: Pick<ExecutionContract, "action" | "target">,
+): boolean {
+  return (
+    contract.action === DOCS_WRITE_ACTION ||
+    contract.target === DOCS_WRITE_TECHNICAL_TARGET
+  );
+}
+
+/**
+ * Allowlisted execution-significant facts for Product inspection disclosure.
+ * Does not expose the raw `inputs` bag.
+ */
+export function projectExecutionContractInspectionDisclosure(
+  contract: ExecutionContract,
+): InspectionDisclosureProjectionResult {
+  const inputs = contract.inputs ?? {};
+  const targetPath = asNonEmptyString(inputs.targetPath);
+  const targetRepositoryRef =
+    asNonEmptyString(inputs.targetRepositoryRef) ??
+    asNonEmptyString(inputs.repositoryRef) ??
+    asNonEmptyString(inputs.repositoryIdentity);
+  const scopeIn = asStringArray(inputs.scopeIn) ?? asStringArray(inputs.pathAllowlist);
+  const scopeOut = asStringArray(inputs.scopeOut);
+  const contentRequirements = asStringArray(inputs.contentRequirements);
+  const validationExpectations = asStringArray(inputs.validationExpectations);
+  const inputExpectedOutputs = asStringArray(inputs.expectedOutputs);
+  const expectedOutputs =
+    contract.expectedOutputs && contract.expectedOutputs.length > 0
+      ? [...contract.expectedOutputs]
+      : inputExpectedOutputs;
+  const objective = asNonEmptyString(inputs.objective);
+  const artifactType = asNonEmptyString(inputs.artifactType);
+  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
+  const createOrModify = asBoolean(inputs.createOrModify);
+  const noDelete = asBoolean(inputs.noDelete);
+
+  const docsWrite = isDocsWriteExecutionContract(contract);
+  const disclosureComplete =
+    !docsWrite || (targetPath !== null && targetRepositoryRef !== null);
+
+  const disclosure: ExecutionContractInspectionDisclosure = {
+    action: contract.action,
+    technicalTarget: contract.target,
+    scope: contract.scope,
+    targetRepositoryRef,
+    targetPath,
+    scopeIn,
+    scopeOut,
+    createOrModify,
+    noDelete,
+    objective,
+    artifactType,
+    artifactBrief,
+    contentRequirements,
+    validationExpectations,
+    expectedOutputs,
+    evidenceRequirements: [...contract.evidenceRequirements],
+    requiredAuthority: contract.requiredAuthority,
+    requiredCapabilities: [...contract.requiredCapabilities],
+    constraints: [...contract.constraints],
+    stopConditions: [...contract.stopConditions],
+    reversibility: contract.reversibility,
+    contractVersion: contract.version,
+    executionContractId: contract.executionContractId,
+    semanticFingerprint: contract.semanticFingerprint ?? null,
+    disclosureComplete,
+    incompletenessCode: disclosureComplete
+      ? null
+      : "INSPECTION_DISCLOSURE_INCOMPLETE",
+  };
+
+  if (!disclosureComplete) {
+    return {
+      ok: false,
+      code: "INSPECTION_DISCLOSURE_INCOMPLETE",
+      disclosure,
+      message:
+        "Disclosure d'inspection incomplète — cible exacte docs_write absente du contrat durable.",
+    };
+  }
+
+  return { ok: true, disclosure };
+}
+
+/**
+ * Stable fact identifiers the Pilot must have inspected for this contract.
+ * Optional contract fields that are absent are not invented.
+ * Mandatory docs_write effect facts fail closed when absent (empty profile
+ * is never returned for incomplete docs_write — callers must refuse).
+ */
+export function requiredInspectedFactsForContract(
+  contract: ExecutionContract,
+): readonly string[] | { incomplete: true; code: "INSPECTION_DISCLOSURE_INCOMPLETE" } {
+  const projected = projectExecutionContractInspectionDisclosure(contract);
+  if (!projected.ok) {
+    return { incomplete: true, code: "INSPECTION_DISCLOSURE_INCOMPLETE" };
+  }
+  const d = projected.disclosure;
+  const facts: string[] = [
+    "action",
+    "target",
+    "scope",
+    "requiredAuthority",
+    "requiredCapabilities",
+    "constraints",
+    "stopConditions",
+    "reversibility",
+    "evidenceRequirements",
+    "semanticFingerprint",
+  ];
+
+  if (isDocsWriteExecutionContract(contract)) {
+    facts.push("inputs.targetRepositoryRef");
+    facts.push("inputs.targetPath");
+    if (d.scopeIn) facts.push("inputs.scopeIn");
+    if (d.scopeOut) facts.push("inputs.scopeOut");
+    if (d.createOrModify !== null) facts.push("inputs.createOrModify");
+    if (d.noDelete !== null) facts.push("inputs.noDelete");
+    if (d.contentRequirements) facts.push("inputs.contentRequirements");
+    if (d.validationExpectations) facts.push("inputs.validationExpectations");
+  }
+
+  if (d.expectedOutputs && d.expectedOutputs.length > 0) {
+    facts.push("expectedOutputs");
+  }
+
+  return Object.freeze([...facts]);
+}
+
+export function attestationCoversRequiredFacts(input: {
+  readonly inspectedFacts: readonly string[];
+  readonly requiredFacts: readonly string[];
+}): boolean {
+  const present = new Set(input.inspectedFacts);
+  return input.requiredFacts.every((fact) => present.has(fact));
+}

### New file: ecInspectionDisclosure.d0.test.ts
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts
new file mode 100644
index 00000000..b7b8df95
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts
@@ -0,0 +1,456 @@
+/**
+ * EC inspection disclosure + inspected-fact coverage.
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  computeInspectionFingerprint,
+  projectExecutionContractInspectionDisclosure,
+  requiredInspectedFactsForContract,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { readContractInspectionState } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
+import {
+  baseBuildRequest,
+  buildStack,
+  MORRIS_ACTOR,
+  registerMorris,
+  seedAcceptedDecision,
+  seedProject,
+} from "../oa/execution-contract/helpers";
+
+const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
+const TARGET_REPO = "mcleland147/sfia-workspace";
+const TECH_TARGET = "workspace.isolated.docs_write";
+const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
+
+const LEGACY_INSPECTED_FACTS = [
+  "action",
+  "target",
+  "scope",
+  "requiredAuthority",
+  "requiredCapabilities",
+  "constraints",
+  "stopConditions",
+  "reversibility",
+  "semanticFingerprint",
+] as const;
+
+function docsWriteBuildOverrides(
+  overrides: {
+    targetPath?: string | null;
+    targetRepositoryRef?: string | null;
+    includeOptional?: boolean;
+    extraInputs?: Record<string, unknown>;
+  } = {},
+) {
+  const includePath = overrides.targetPath !== null;
+  const includeRepo = overrides.targetRepositoryRef !== null;
+  const targetPath =
+    overrides.targetPath === null
+      ? undefined
+      : (overrides.targetPath ?? TARGET_PATH);
+  const targetRepositoryRef =
+    overrides.targetRepositoryRef === null
+      ? undefined
+      : (overrides.targetRepositoryRef ?? TARGET_REPO);
+
+  const inputs: Record<string, unknown> = {
+    objective: "Matérialiser la note de gestion de tâches",
+    ...(targetPath ? { targetPath } : {}),
+    ...(targetRepositoryRef
+      ? {
+          targetRepositoryRef,
+          repositoryRef: targetRepositoryRef,
+          repositoryIdentity: targetRepositoryRef,
+        }
+      : {}),
+    scopeIn: ["projects/sfia-studio/.sandbox/"],
+    scopeOut: ["projects/sfia-studio/app/"],
+    createOrModify: true,
+    noDelete: true,
+    ...(overrides.includeOptional
+      ? {
+          contentRequirements: ["structure claire"],
+          validationExpectations: ["markdown valide"],
+          expectedOutputs: ["note markdown"],
+        }
+      : {}),
+    ...overrides.extraInputs,
+  };
+
+  return {
+    action: DOCS_WRITE_ACTION,
+    target: TECH_TARGET,
+    scope: "product:artifact-materialization",
+    inputs,
+    expectedOutputs: overrides.includeOptional
+      ? ["note markdown"]
+      : undefined,
+    evidenceRequirements: ["evreq:git-working-tree", "evreq:path-allowlist"],
+    requiredCapabilities: ["cap:cursor.docs_write"],
+    requiredAuthority: "MORRIS" as const,
+    constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT"],
+    stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
+    reversibility: "reversible" as const,
+    includePath,
+    includeRepo,
+  };
+}
+
+async function buildValidatedDocsWrite(
+  overrides: Parameters<typeof docsWriteBuildOverrides>[0] = {},
+) {
+  const stack = buildStack();
+  await seedProject(stack.projects);
+  registerMorris(stack.decisions.authority, "product:artifact-materialization");
+  await seedAcceptedDecision(stack, {
+    subject: "docs_write inspection disclosure",
+  });
+
+  const shaped = docsWriteBuildOverrides(overrides);
+  const built = await stack.execution.buildExecutionContract.execute(
+    baseBuildRequest({
+      executionContractId: "xct:insp-disclosure-docs",
+      action: shaped.action,
+      target: shaped.target,
+      scope: shaped.scope,
+      inputs: shaped.inputs,
+      expectedOutputs: shaped.expectedOutputs,
+      evidenceRequirements: shaped.evidenceRequirements,
+      requiredCapabilities: shaped.requiredCapabilities,
+      requiredAuthority: shaped.requiredAuthority,
+      constraints: shaped.constraints,
+      stopConditions: shaped.stopConditions,
+      reversibility: shaped.reversibility,
+      authorityEvidenceId: "evd:morris-n3",
+      actor: MORRIS_ACTOR,
+    }),
+  );
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build failed");
+
+  const validated = await stack.execution.validateExecutionContract.execute({
+    executionContractId: built.contract.executionContractId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: "evd:morris-n3",
+  });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate failed");
+
+  return { stack, contract: validated.contract as ExecutionContract };
+}
+
+describe("EC inspection disclosure projection (D1–D7)", () => {
+  it("D1/D2/D3 — projects exact path + repo from durable inputs; technical target preserved", () => {
+    const contract = {
+      action: DOCS_WRITE_ACTION,
+      target: TECH_TARGET,
+      scope: "product:artifact-materialization",
+      inputs: {
+        targetPath: TARGET_PATH,
+        targetRepositoryRef: TARGET_REPO,
+        secretBag: "must-not-leak",
+        arbitraryBag: { nested: true },
+      },
+      expectedOutputs: ["note"],
+      evidenceRequirements: ["evreq:git"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      requiredAuthority: "MORRIS",
+      constraints: ["PREPARE_ONLY"],
+      stopConditions: ["AUTHORITY_DENIED"],
+      reversibility: "reversible",
+      version: 1,
+      executionContractId: "xct:d1",
+      semanticFingerprint: "fp-d1",
+    } as unknown as ExecutionContract;
+
+    const result = projectExecutionContractInspectionDisclosure(contract);
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.disclosure.action).toBe(DOCS_WRITE_ACTION);
+    expect(result.disclosure.technicalTarget).toBe(TECH_TARGET);
+    expect(result.disclosure.targetPath).toBe(TARGET_PATH);
+    expect(result.disclosure.targetRepositoryRef).toBe(TARGET_REPO);
+    expect(result.disclosure.disclosureComplete).toBe(true);
+    // D3 — no Proposal text reconstruction; only durable inputs.
+    expect(JSON.stringify(result.disclosure)).not.toContain("secretBag");
+    expect(JSON.stringify(result.disclosure)).not.toContain("arbitraryBag");
+    // D6 — no raw inputs bag.
+    expect(result.disclosure).not.toHaveProperty("inputs");
+  });
+
+  it("D4 — missing docs_write targetPath fails closed", () => {
+    const contract = {
+      action: DOCS_WRITE_ACTION,
+      target: TECH_TARGET,
+      scope: "s",
+      inputs: { targetRepositoryRef: TARGET_REPO },
+      evidenceRequirements: [],
+      requiredCapabilities: [],
+      requiredAuthority: "MORRIS",
+      constraints: [],
+      stopConditions: [],
+      reversibility: "irreversible",
+      version: 1,
+      executionContractId: "xct:d4",
+    } as unknown as ExecutionContract;
+    const result = projectExecutionContractInspectionDisclosure(contract);
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
+    expect(result.disclosure.targetPath).toBeNull();
+    expect(result.disclosure.disclosureComplete).toBe(false);
+  });
+
+  it("D5 — missing docs_write targetRepositoryRef fails closed", () => {
+    const contract = {
+      action: DOCS_WRITE_ACTION,
+      target: TECH_TARGET,
+      scope: "s",
+      inputs: { targetPath: TARGET_PATH },
+      evidenceRequirements: [],
+      requiredCapabilities: [],
+      requiredAuthority: "MORRIS",
+      constraints: [],
+      stopConditions: [],
+      reversibility: "irreversible",
+      version: 1,
+      executionContractId: "xct:d5",
+    } as unknown as ExecutionContract;
+    const result = projectExecutionContractInspectionDisclosure(contract);
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
+  });
+
+  it("D7 — optional fields appear only when present; generic contracts skip targetPath", () => {
+    const generic = {
+      action: "publish-modeled-pack",
+      target: "sfia-v3-modeled",
+      scope: "docs",
+      evidenceRequirements: ["evreq:schemas"],
+      requiredCapabilities: ["cap:git-docs"],
+      requiredAuthority: "N3",
+      constraints: ["no-sql"],
+      stopConditions: ["AUTHORITY_DENIED"],
+      reversibility: "partially_reversible",
+      version: 1,
+      executionContractId: "xct:generic",
+    } as unknown as ExecutionContract;
+    const projected = projectExecutionContractInspectionDisclosure(generic);
+    expect(projected.ok).toBe(true);
+    if (!projected.ok) return;
+    expect(projected.disclosure.targetPath).toBeNull();
+    expect(projected.disclosure.createOrModify).toBeNull();
+    expect(projected.disclosure.contentRequirements).toBeNull();
+
+    const facts = requiredInspectedFactsForContract(generic);
+    expect(Array.isArray(facts)).toBe(true);
+    if (!Array.isArray(facts)) return;
+    expect(facts).not.toContain("inputs.targetPath");
+    expect(facts).toContain("action");
+    expect(facts).toContain("evidenceRequirements");
+  });
+});
+
+function stubOa(stack: Awaited<ReturnType<typeof buildValidatedDocsWrite>>["stack"], nowIso: string) {
+  return {
+    executionContractServices: stack.execution,
+    decisionServices: stack.decisions,
+    authorityResolver: stack.decisions.authority,
+    clock: { nowIso: () => nowIso },
+    projectServices: stack.projects,
+    executionAttemptServices: {
+      registry: {
+        listAgents: () => [],
+        findCandidates: () => [],
+      },
+    },
+  } as unknown as Parameters<typeof inspectExecutionContract>[0]["oa"];
+}
+
+describe("EC inspection fact coverage — legacy / fresh / confirm / auth", () => {
+  it("legacy fingerprint-matching attestation without docs_write facts is insufficient", async () => {
+    const { stack, contract } = await buildValidatedDocsWrite({
+      includeOptional: true,
+    });
+
+    const required = requiredInspectedFactsForContract(contract);
+    expect(Array.isArray(required)).toBe(true);
+    if (!Array.isArray(required)) return;
+    expect(required).toContain("inputs.targetPath");
+    expect(required).toContain("inputs.targetRepositoryRef");
+
+    const fingerprint = computeInspectionFingerprint(contract);
+    await stack.execution.inspectionAttestations.append({
+      schemaVersion: "0.1.0-oa",
+      attestationId: "insp:legacy-incomplete",
+      executionContractId: contract.executionContractId,
+      contractVersion: contract.version,
+      inspectionFingerprint: fingerprint,
+      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
+      projectId: contract.projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      inspectedAt: "2026-09-15T12:00:00.000Z",
+      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
+      grantsAuthority: false,
+      isConfirmation: false,
+    });
+
+    const oa = stubOa(stack, "2026-09-15T12:05:00.000Z");
+
+    const state = await readContractInspectionState({
+      oa,
+      executionContractId: contract.executionContractId,
+    });
+    expect(state.ok).toBe(true);
+    if (!state.ok) return;
+    expect(state.inspectionSufficient).toBe(false);
+    expect(state.reinspectionRequired).toBe(true);
+    expect(state.reason).toBe("inspected_facts_incomplete");
+    expect(state.statusLabel).toBe(
+      "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
+    );
+    expect(state.grantsAuthority).toBe(false);
+  });
+
+  it("fresh complete inspection covers docs_write facts and is sufficient (no authority)", async () => {
+    const { stack, contract } = await buildValidatedDocsWrite({
+      includeOptional: true,
+    });
+    const oa = stubOa(stack, "2026-09-15T12:10:00.000Z");
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) return;
+    expect(inspected.inspectionSufficient).toBe(true);
+    expect(inspected.grantsAuthority).toBe(false);
+    expect(inspected.reason).toBe("inspected");
+
+    const trail = await stack.execution.inspectionAttestations.listByContract(
+      contract.executionContractId,
+    );
+    expect(trail.length).toBe(1);
+    const facts = trail[0]!.inspectedFacts;
+    expect(facts).toContain("inputs.targetPath");
+    expect(facts).toContain("inputs.targetRepositoryRef");
+    expect(facts).toContain("inputs.scopeIn");
+    expect(facts).toContain("inputs.createOrModify");
+    expect(facts).toContain("inputs.noDelete");
+    expect(facts).toContain("inputs.contentRequirements");
+    expect(facts).toContain("expectedOutputs");
+  });
+
+  it("incomplete legacy inspection refuses Confirmation and blocks Authorization", async () => {
+    const { stack, contract } = await buildValidatedDocsWrite();
+    const fingerprint = computeInspectionFingerprint(contract);
+    await stack.execution.inspectionAttestations.append({
+      schemaVersion: "0.1.0-oa",
+      attestationId: "insp:legacy-cfm-block",
+      executionContractId: contract.executionContractId,
+      contractVersion: contract.version,
+      inspectionFingerprint: fingerprint,
+      semanticFingerprint: contract.semanticFingerprint ?? fingerprint,
+      projectId: contract.projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      inspectedAt: "2026-09-15T12:00:00.000Z",
+      inspectedFacts: [...LEGACY_INSPECTED_FACTS],
+      grantsAuthority: false,
+      isConfirmation: false,
+    });
+
+    const oa = stubOa(stack, "2026-09-15T12:20:00.000Z");
+
+    const confirmed = await confirmExecutionContractForAuthorization({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(confirmed.ok).toBe(false);
+    if (confirmed.ok) return;
+    expect(confirmed.code).toBe("REINSPECTION_REQUIRED");
+    expect(confirmed.message).toMatch(/détails d'exécution requis/i);
+
+    const authorized = await evaluateExecutionAuthorization({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(authorized.ok).toBe(true);
+    if (!authorized.ok) return;
+    expect(authorized.outcome).toBe("BLOCKED");
+    expect(authorized.reasonCode).toBe(
+      "reinspection_required_inspected_facts_incomplete",
+    );
+    expect(authorized.attemptCreated).toBe(false);
+    expect(authorized.executionPerformed).toBe(false);
+  });
+
+  it("fresh complete inspection then Confirmation may proceed; still no Attempt", async () => {
+    const { stack, contract } = await buildValidatedDocsWrite();
+    const oa = stubOa(stack, "2026-09-15T12:30:00.000Z");
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) return;
+    expect(inspected.inspectionSufficient).toBe(true);
+
+    const confirmed = await confirmExecutionContractForAuthorization({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(confirmed.ok).toBe(true);
+    if (!confirmed.ok) return;
+    expect(confirmed.executionPerformed).toBe(false);
+
+    const authorized = await evaluateExecutionAuthorization({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(authorized.ok).toBe(true);
+    if (!authorized.ok) return;
+    // May still be BLOCKED by capability/authority gates — must not be inspection.
+    expect(authorized.reasonCode).not.toMatch(/inspection/i);
+    expect(authorized.attemptCreated).toBe(false);
+  });
+
+  it("incomplete disclosure refuses inspect recording", async () => {
+    const { stack, contract } = await buildValidatedDocsWrite({
+      targetPath: null,
+    });
+    expect(contract.action).toBe(DOCS_WRITE_ACTION);
+    const projected = projectExecutionContractInspectionDisclosure(contract);
+    expect(projected.ok).toBe(false);
+
+    const oa = stubOa(stack, "2026-09-15T12:40:00.000Z");
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+    });
+    expect(inspected.ok).toBe(false);
+    if (inspected.ok) return;
+    expect(inspected.code).toBe("INSPECTION_DISCLOSURE_INCOMPLETE");
+  });
+});

### Modified files unified diff (against origin/main / HEAD)
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 23de0373..9f3673ff 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -1236,9 +1236,9 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
       contract: {
         executionContractId: "xct:sealed-docs-write",
         version: 1,
-        status: "proposed",
+        status: "confirmation_required",
         action: "cursor.docs_write.apply",
-        target: "docs/livrable-cycle.md",
+        target: "workspace.isolated.docs_write",
         scope: "product:artifact-materialization",
         requiredAuthority: "N3",
         constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
@@ -1246,6 +1246,34 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
         requiredCapabilities: ["cap:cursor.docs_write"],
         reversibility: "reversible",
         semanticFingerprint: "sealed0fingerprint",
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "product:artifact-materialization",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: ["projects/sfia-studio/.sandbox/"],
+          scopeOut: ["projects/sfia-studio/app/"],
+          createOrModify: true,
+          noDelete: true,
+          objective: "Matérialiser la note",
+          artifactType: "markdown",
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: ["note markdown"],
+          evidenceRequirements: ["evreq:git-working-tree"],
+          requiredAuthority: "N3",
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
+          stopConditions: ["STOP AVANT EXECUTE"],
+          reversibility: "reversible",
+          contractVersion: 1,
+          executionContractId: "xct:sealed-docs-write",
+          semanticFingerprint: "sealed0fingerprint",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
       },
       executionPerformed: false,
       attemptCreated: false,
@@ -1321,7 +1349,13 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
       "cursor.docs_write.apply",
     );
     expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
-      "docs/livrable-cycle.md",
+      "workspace.isolated.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-exact-target")).toHaveTextContent(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(screen.getByTestId("w2-contract-repository")).toHaveTextContent(
+      "mcleland147/sfia-workspace",
     );
     expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
@@ -1331,8 +1365,12 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
       "xct:sealed-docs-write",
     );

-    // Inspect owns the next action; PREPARE is not offered again.
+    // Pre-inspection: exact path + repo visible BEFORE Inspect click.
     expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();
+
+    // Inspect owns the next action; PREPARE is not offered again.
     expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 8f711b54..0641b7c0 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -92,9 +92,66 @@ function executionContractStatusLabel(status: string): string {
   return "État du contrat indisponible";
 }

+function toInspectionDisclosureView(
+  disclosure:
+    | {
+        readonly action: string;
+        readonly technicalTarget: string;
+        readonly scope: string;
+        readonly targetRepositoryRef: string | null;
+        readonly targetPath: string | null;
+        readonly scopeIn: readonly string[] | null;
+        readonly scopeOut: readonly string[] | null;
+        readonly createOrModify: boolean | null;
+        readonly noDelete: boolean | null;
+        readonly contentRequirements: readonly string[] | null;
+        readonly validationExpectations: readonly string[] | null;
+        readonly expectedOutputs: readonly string[] | null;
+        readonly evidenceRequirements: readonly string[];
+        readonly disclosureComplete: boolean;
+      }
+    | null
+    | undefined,
+): InspectionDisclosureView | null {
+  if (!disclosure) return null;
+  return {
+    action: disclosure.action,
+    technicalTarget: disclosure.technicalTarget,
+    scope: disclosure.scope,
+    targetRepositoryRef: disclosure.targetRepositoryRef,
+    targetPath: disclosure.targetPath,
+    scopeIn: disclosure.scopeIn,
+    scopeOut: disclosure.scopeOut,
+    createOrModify: disclosure.createOrModify,
+    noDelete: disclosure.noDelete,
+    contentRequirements: disclosure.contentRequirements,
+    validationExpectations: disclosure.validationExpectations,
+    expectedOutputs: disclosure.expectedOutputs,
+    evidenceRequirements: [...disclosure.evidenceRequirements],
+    disclosureComplete: disclosure.disclosureComplete,
+  };
+}
+
 /** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
 type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

+type InspectionDisclosureView = {
+  readonly action: string;
+  readonly technicalTarget: string;
+  readonly scope: string;
+  readonly targetRepositoryRef: string | null;
+  readonly targetPath: string | null;
+  readonly scopeIn: readonly string[] | null;
+  readonly scopeOut: readonly string[] | null;
+  readonly createOrModify: boolean | null;
+  readonly noDelete: boolean | null;
+  readonly contentRequirements: readonly string[] | null;
+  readonly validationExpectations: readonly string[] | null;
+  readonly expectedOutputs: readonly string[] | null;
+  readonly evidenceRequirements: readonly string[];
+  readonly disclosureComplete: boolean;
+};
+
 type PreparedContract = {
   readonly executionContractId: string;
   readonly version: number;
@@ -110,6 +167,7 @@ type PreparedContract = {
   readonly semanticFingerprint: string;
   readonly effectConfirmationRequired?: boolean;
   readonly effectConfirmationLevel?: string | null;
+  readonly inspectionDisclosure?: InspectionDisclosureView | null;
 };

 type AmendmentNotice = {
@@ -605,6 +663,9 @@ export function TrajectorySurface({
       semanticFingerprint: prepared.semanticFingerprint,
       effectConfirmationRequired: prepared.effectConfirmationRequired,
       effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
+      inspectionDisclosure: toInspectionDisclosureView(
+        prepared.inspectionDisclosure,
+      ),
     });
     setInspection(null);
     setAuthorization(null);
@@ -652,6 +713,9 @@ export function TrajectorySurface({
       requiredCapabilities: [...prepared.requiredCapabilities],
       reversibility: prepared.reversibility,
       semanticFingerprint: prepared.semanticFingerprint,
+      inspectionDisclosure: toInspectionDisclosureView(
+        prepared.inspectionDisclosure,
+      ),
     });
     setInspection(null);
     setAuthorization(null);
@@ -720,6 +784,9 @@ export function TrajectorySurface({
       requiredCapabilities: [...amended.successor.requiredCapabilities],
       reversibility: amended.successor.reversibility,
       semanticFingerprint: amended.successor.semanticFingerprint,
+      inspectionDisclosure: toInspectionDisclosureView(
+        amended.successor.inspectionDisclosure,
+      ),
     });
     setInspection(amended.successorInspection);
     setAuthorization(null);
@@ -1651,9 +1718,25 @@ export function TrajectorySurface({
               <dd data-testid="w2-contract-action">{contract.action}</dd>
             </div>
             <div>
-              <dt>Résultat / cible</dt>
+              <dt>Cible technique</dt>
               <dd data-testid="w2-contract-target">{contract.target}</dd>
             </div>
+            {contract.inspectionDisclosure?.targetPath ? (
+              <div>
+                <dt>Cible exacte</dt>
+                <dd data-testid="w2-contract-exact-target">
+                  {contract.inspectionDisclosure.targetPath}
+                </dd>
+              </div>
+            ) : null}
+            {contract.inspectionDisclosure?.targetRepositoryRef ? (
+              <div>
+                <dt>Repository</dt>
+                <dd data-testid="w2-contract-repository">
+                  {contract.inspectionDisclosure.targetRepositoryRef}
+                </dd>
+              </div>
+            ) : null}
             <div>
               <dt>Périmètre</dt>
               <dd data-testid="w2-contract-scope">{contract.scope}</dd>
@@ -1705,6 +1788,74 @@ export function TrajectorySurface({
                   {contract.reversibility}
                 </dd>
               </div>
+              {contract.inspectionDisclosure?.scopeIn ? (
+                <div>
+                  <dt>Périmètre IN</dt>
+                  <dd data-testid="w2-contract-scope-in">
+                    {contract.inspectionDisclosure.scopeIn.join(" · ")}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.scopeOut ? (
+                <div>
+                  <dt>Périmètre OUT</dt>
+                  <dd data-testid="w2-contract-scope-out">
+                    {contract.inspectionDisclosure.scopeOut.join(" · ")}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.createOrModify !== null &&
+              contract.inspectionDisclosure?.createOrModify !== undefined ? (
+                <div>
+                  <dt>Mutation</dt>
+                  <dd data-testid="w2-contract-mutation">
+                    {contract.inspectionDisclosure.createOrModify
+                      ? "Création / modification"
+                      : "Sans création / modification"}
+                    {contract.inspectionDisclosure.noDelete
+                      ? " · aucune suppression"
+                      : ""}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.expectedOutputs ? (
+                <div>
+                  <dt>Sorties attendues</dt>
+                  <dd data-testid="w2-contract-expected-outputs">
+                    {contract.inspectionDisclosure.expectedOutputs.join(" · ")}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.contentRequirements ? (
+                <div>
+                  <dt>Exigences de contenu</dt>
+                  <dd data-testid="w2-contract-content-requirements">
+                    {contract.inspectionDisclosure.contentRequirements.join(
+                      " · ",
+                    )}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.validationExpectations ? (
+                <div>
+                  <dt>Attentes de validation</dt>
+                  <dd data-testid="w2-contract-validation-expectations">
+                    {contract.inspectionDisclosure.validationExpectations.join(
+                      " · ",
+                    )}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.evidenceRequirements.length ? (
+                <div>
+                  <dt>Preuves requises</dt>
+                  <dd data-testid="w2-contract-evidence-requirements">
+                    {contract.inspectionDisclosure.evidenceRequirements.join(
+                      " · ",
+                    )}
+                  </dd>
+                </div>
+              ) : null}
               <div>
                 <dt>Contraintes</dt>
                 <dd data-testid="w2-contract-constraints">
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 2e0ed226..f1b4a1dc 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -15,9 +15,13 @@ import {
 /** W2: Pilote is the product decision-maker; Morris remains authority CLASS only. */
 import type {
   CursorPrepareOnlyProjection,
+  ExecutionContractInspectionDisclosure,
   ExecutionContractServices,
 } from "@/lib/oa/execution-contract";
-import { projectCursorPrepareOnly } from "@/lib/oa/execution-contract";
+import {
+  projectCursorPrepareOnly,
+  projectExecutionContractInspectionDisclosure,
+} from "@/lib/oa/execution-contract";
 import type { F2ContextSnapshot } from "../f2/types";
 import {
   isProposalSubjectOptionRef,
@@ -51,6 +55,8 @@ export type F3M3PreparePayload = {
     requiredCapabilities: string[];
     reversibility: string;
     semanticFingerprint: string;
+    /** Allowlisted execution-significant facts for pre-inspection Product disclosure. */
+    inspectionDisclosure: ExecutionContractInspectionDisclosure;
   };
   cursorProjection: CursorPrepareOnlyProjection;
   executionPerformed: false;
@@ -395,6 +401,7 @@ export async function prepareM3FromDecision(input: {
   }

   const contract = validated.contract;
+  const disclosureResult = projectExecutionContractInspectionDisclosure(contract);
   const cursorProjection = projectCursorPrepareOnly(contract);
   if (
     cursorProjection.executionAllowed !== false ||
@@ -429,6 +436,7 @@ export async function prepareM3FromDecision(input: {
         requiredCapabilities: [...contract.requiredCapabilities],
         reversibility: contract.reversibility,
         semanticFingerprint: contract.semanticFingerprint ?? cursorProjection.fingerprint,
+        inspectionDisclosure: disclosureResult.disclosure,
       },
       cursorProjection,
       executionPerformed: false,
@@ -441,6 +449,9 @@ export async function prepareM3FromDecision(input: {
         "NO ATTEMPT",
         "GATE D NOT_CONSUMED",
         "NO FIXTURE F3_ACTION CONSTANTS",
+        ...(disclosureResult.ok
+          ? []
+          : ["INSPECTION_DISCLOSURE_INCOMPLETE — inspection will fail closed"]),
       ],
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
index 7feb2269..7a63e4ad 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
@@ -20,6 +20,7 @@ import {
 } from "@/lib/oa/decision";
 import {
   assertUserAmendableExecutionConstraint,
+  projectExecutionContractInspectionDisclosure,
   type ExecutionContract,
 } from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
@@ -248,6 +249,7 @@ export function verifyGovernedAmendmentSuccessor(input: {
 }

 function toContractDto(contract: ExecutionContract): AmendedExecutionContractDto {
+  const disclosure = projectExecutionContractInspectionDisclosure(contract);
   return {
     executionContractId: contract.executionContractId,
     version: contract.version,
@@ -263,6 +265,7 @@ function toContractDto(contract: ExecutionContract): AmendedExecutionContractDto
     semanticFingerprint: contract.semanticFingerprint ?? "",
     supersedesExecutionContractId: contract.supersedesExecutionContractId ?? null,
     supersessionReason: contract.supersessionReason ?? null,
+    inspectionDisclosure: disclosure.disclosure,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 6e24c796..959bbec9 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -203,6 +203,18 @@ const BLOCKED_TEXT: Record<
       "Le contrat a changé de manière matérielle depuis la dernière inspection.",
     nextAction: "Réinspecter la version courante du contrat.",
   },
+  reinspection_required_inspected_facts_incomplete: {
+    reasonText:
+      "L'attestation d'inspection ne couvre pas les détails d'exécution requis.",
+    nextAction:
+      "Réinspecter le contrat après lecture des détails d'exécution exacts.",
+  },
+  inspection_disclosure_incomplete: {
+    reasonText:
+      "La disclosure d'inspection du contrat est incomplète.",
+    nextAction:
+      "Corriger le contrat durable avant toute inspection ou autorisation.",
+  },
   confirmation_required: {
     reasonText: "Une confirmation requise est manquante.",
     nextAction: "Obtenir la confirmation requise après inspection.",
@@ -377,11 +389,17 @@ export async function evaluateExecutionAuthorization(

   // 1. Inspection must be sufficient for the exact current contract version.
   if (!inspection.inspectionSufficient) {
+    const authReason =
+      inspection.reason === "inspected_facts_incomplete"
+        ? "reinspection_required_inspected_facts_incomplete"
+        : inspection.reason === "inspection_disclosure_incomplete"
+          ? "inspection_disclosure_incomplete"
+          : inspection.reinspectionRequired
+            ? "reinspection_required_material_change"
+            : "inspection_required";
     return finish(
       "BLOCKED",
-      inspection.reinspectionRequired
-        ? "reinspection_required_material_change"
-        : "inspection_required",
+      authReason,
       null,
       inspection.reason,
     );
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index 3bfa7eea..a4b4a2be 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -98,6 +98,22 @@ export async function confirmExecutionContractForAuthorization(
     return inspection;
   }
   if (!inspection.inspectionSufficient) {
+    if (inspection.reason === "inspected_facts_incomplete") {
+      return {
+        ok: false,
+        code: "REINSPECTION_REQUIRED",
+        message:
+          "L'attestation d'inspection ne couvre pas les détails d'exécution requis — réinspecter avant de confirmer.",
+      };
+    }
+    if (inspection.reason === "inspection_disclosure_incomplete") {
+      return {
+        ok: false,
+        code: "INSPECTION_DISCLOSURE_INCOMPLETE",
+        message:
+          "Disclosure d'inspection incomplète — confirmation refusée.",
+      };
+    }
     return {
       ok: false,
       code: inspection.reinspectionRequired
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts
index f32e5ed5..4319ee5d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts
@@ -6,6 +6,10 @@
  * no ExecutionContract status and grants no authority: after a material
  * semantic amendment the prior attestation is reported as stale and
  * re-inspection is required before authorization.
+ *
+ * Inspected facts are derived from the durable contract (allowlisted
+ * disclosure profile). A fingerprint-matching attestation that omits required
+ * execution-significant facts is insufficient.
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
@@ -13,6 +17,10 @@ import type {
   InspectionInsufficiencyReason,
   InspectionSufficiency,
 } from "@/lib/oa/execution-contract";
+import {
+  projectExecutionContractInspectionDisclosure,
+  requiredInspectedFactsForContract,
+} from "@/lib/oa/execution-contract";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type {
   ContractInspectionStateDto,
@@ -29,9 +37,29 @@ function mapInsufficiencyReason(
       return "contract_fingerprint_absent";
     case "material_change":
       return "semantic_fingerprint_changed";
+    case "inspected_facts_incomplete":
+      return "inspected_facts_incomplete";
+    case "inspection_disclosure_incomplete":
+      return "inspection_disclosure_incomplete";
   }
 }

+function statusLabelForInsufficiency(
+  reason: InspectionInsufficiencyReason,
+  hasStale: boolean,
+): ContractInspectionStateDto["statusLabel"] {
+  if (reason === "inspected_facts_incomplete") {
+    return "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS";
+  }
+  if (reason === "inspection_disclosure_incomplete") {
+    return "INSPECTION IMPOSSIBLE — DISCLOSURE INCOMPLÈTE";
+  }
+  if (hasStale || reason === "material_change") {
+    return "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ";
+  }
+  return "NON INSPECTÉ";
+}
+
 function toStateDto(input: {
   executionContractId: string;
   contractVersion: number;
@@ -59,14 +87,15 @@ function toStateDto(input: {
     executionContractId: input.executionContractId,
     contractVersion: input.contractVersion,
     semanticFingerprint: input.semanticFingerprint,
-    statusLabel: stale
-      ? "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ"
-      : "NON INSPECTÉ",
+    statusLabel: statusLabelForInsufficiency(sufficiency.reason, stale !== null),
     inspectionSufficient: false,
     attestationRef: null,
     attestedVersion: stale?.contractVersion ?? null,
     staleAttestationRef: stale?.attestationId ?? null,
-    reinspectionRequired: stale !== null,
+    reinspectionRequired:
+      stale !== null ||
+      sufficiency.reason === "inspected_facts_incomplete" ||
+      sufficiency.reason === "inspection_disclosure_incomplete",
     reason: mapInsufficiencyReason(sufficiency.reason),
     grantsAuthority: false,
   };
@@ -109,18 +138,6 @@ export type InspectExecutionContractInput = {
   readonly expectedVersion?: number;
 };

-const DEFAULT_INSPECTED_FACTS: readonly string[] = Object.freeze([
-  "action",
-  "target",
-  "scope",
-  "requiredAuthority",
-  "requiredCapabilities",
-  "constraints",
-  "stopConditions",
-  "reversibility",
-  "semanticFingerprint",
-]);
-
 export async function inspectExecutionContract(
   input: InspectExecutionContractInput,
 ): Promise<InspectExecutionContractResult> {
@@ -144,11 +161,36 @@ export async function inspectExecutionContract(
     };
   }

+  const disclosure = projectExecutionContractInspectionDisclosure(
+    loaded.contract,
+  );
+  if (!disclosure.ok) {
+    return {
+      ok: false,
+      code: disclosure.code,
+      message: disclosure.message,
+    };
+  }
+
+  const requiredFacts = requiredInspectedFactsForContract(loaded.contract);
+  if (!Array.isArray(requiredFacts)) {
+    return {
+      ok: false,
+      code: "INSPECTION_DISCLOSURE_INCOMPLETE",
+      message:
+        "Disclosure d'inspection incomplète — impossible d'attester l'inspection.",
+    };
+  }
+
+  const inspectedFacts = input.inspectedFacts
+    ? [...input.inspectedFacts]
+    : [...requiredFacts];
+
   const recorded =
     await input.oa.executionContractServices.recordContractInspection.execute({
       executionContractId: input.executionContractId,
       actor: LOCAL_PILOTE_ACTOR,
-      inspectedFacts: [...(input.inspectedFacts ?? DEFAULT_INSPECTED_FACTS)],
+      inspectedFacts,
       inspectionReserves: input.inspectionReserves
         ? [...input.inspectionReserves]
         : undefined,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 94176d35..006de271 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -16,6 +16,10 @@ import {
 import { S1_MAX_TTL_SECONDS } from "@/lib/auth/constants";
 import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
 import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
+import {
+  projectExecutionContractInspectionDisclosure,
+  type ExecutionContractInspectionDisclosure,
+} from "@/lib/oa/execution-contract";
 import type { F2ContextSnapshot } from "../f2/types";
 import { loadPresentedOptionSet, parsePresentedOptionSetStatement } from "./presentedOptionSet";
 import {
@@ -48,6 +52,7 @@ export type PreparedExecutionContractDto = {
   readonly effectClass: string;
   readonly effectConfirmationRequired: boolean;
   readonly effectConfirmationLevel: string | null;
+  readonly inspectionDisclosure: ExecutionContractInspectionDisclosure;
 };

 export type PrepareExecutionContractFromW2DecisionResult =
@@ -541,6 +546,9 @@ export async function prepareExecutionContractFromW2Decision(input: {
     };
   }

+  const disclosureResult = projectExecutionContractInspectionDisclosure(contract);
+  // Incomplete docs_write disclosure is attached honestly; inspection fails closed.
+
   return {
     ok: true,
     contract: {
@@ -561,6 +569,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       effectClass: envelope.effects.effectClass,
       effectConfirmationRequired: envelope.effectConfirmationRequired,
       effectConfirmationLevel: envelope.effectConfirmationLevel,
+      inspectionDisclosure: disclosureResult.disclosure,
     },
     decisionId: decision.decisionId,
     executionPerformed: false,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index f21eddff..05ef3e80 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -126,7 +126,9 @@ export type ContractInspectionStateDto = {
   readonly statusLabel:
     | "NON INSPECTÉ"
     | "INSPECTÉ"
-    | "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ";
+    | "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ"
+    | "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS"
+    | "INSPECTION IMPOSSIBLE — DISCLOSURE INCOMPLÈTE";
   readonly inspectionSufficient: boolean;
   readonly attestationRef: string | null;
   readonly attestedVersion: number | null;
@@ -137,7 +139,9 @@ export type ContractInspectionStateDto = {
     | "inspected"
     | "contract_version_changed"
     | "semantic_fingerprint_changed"
-    | "contract_fingerprint_absent";
+    | "contract_fingerprint_absent"
+    | "inspected_facts_incomplete"
+    | "inspection_disclosure_incomplete";
   /** Structural denial — inspecting is never authorizing. */
   readonly grantsAuthority: false;
 };
@@ -260,6 +264,7 @@ export type AmendedExecutionContractDto = {
   readonly semanticFingerprint: string;
   readonly supersedesExecutionContractId: string | null;
   readonly supersessionReason: string | null;
+  readonly inspectionDisclosure?: import("@/lib/oa/execution-contract").ExecutionContractInspectionDisclosure;
 };

 export type AmendExecutionContractSuccess = {
@@ -313,6 +318,7 @@ export type PreparedExecutionContractResult =
         readonly effectClass?: string;
         readonly effectConfirmationRequired?: boolean;
         readonly effectConfirmationLevel?: string | null;
+        readonly inspectionDisclosure?: import("@/lib/oa/execution-contract").ExecutionContractInspectionDisclosure;
       };
       readonly decisionId: string;
       readonly f3SemanticOverwrite: false;
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts
index f1e53a0d..f4996350 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts
@@ -11,6 +11,7 @@ import { isTa5Status } from "../domain/invariants";
 import type { ActorReference, ExecutionContract } from "../domain/types";
 import type { InspectionAttestationRepositoryPort } from "../ports/inspectionAttestationRepository";
 import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
+import { requiredInspectedFactsForContract } from "../projection/inspectionDisclosure";

 export type RecordContractInspectionRequest = {
   executionContractId: string;
@@ -164,6 +165,11 @@ export class GetContractInspectionState {
     const trail = await this.attestations.listByContract(
       contract.executionContractId,
     );
+    const requiredFacts = requiredInspectedFactsForContract(contract);
+    const disclosureIncomplete =
+      !Array.isArray(requiredFacts) &&
+      "incomplete" in requiredFacts &&
+      requiredFacts.incomplete === true;
     return {
       ok: true,
       contract: structuredClone(contract),
@@ -172,6 +178,10 @@ export class GetContractInspectionState {
         attestations: trail,
         executionContractId: contract.executionContractId,
         currentInspectionFingerprint: computeInspectionFingerprint(contract),
+        requiredInspectedFacts: Array.isArray(requiredFacts)
+          ? requiredFacts
+          : undefined,
+        disclosureIncomplete,
       }),
       attestations: trail,
     };
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts
index c2cec0d2..e1bd2c48 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts
@@ -23,6 +23,8 @@ export type AuthorityVerificationBlockedReason =
   | "contract_not_found"
   | "inspection_required"
   | "reinspection_required_material_change"
+  | "reinspection_required_inspected_facts_incomplete"
+  | "inspection_disclosure_incomplete"
   | "confirmation_required"
   | "contract_not_confirmed"
   | "decision_not_current"
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts
index e2188648..8dd62255 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts
@@ -60,7 +60,9 @@ export type InspectionAttestation = {
 export type InspectionInsufficiencyReason =
   | "no_attestation"
   | "material_change"
-  | "contract_fingerprint_absent";
+  | "contract_fingerprint_absent"
+  | "inspected_facts_incomplete"
+  | "inspection_disclosure_incomplete";

 export type InspectionSufficiency =
   | { sufficient: true; attestation: InspectionAttestation }
@@ -89,17 +91,38 @@ export function computeInspectionFingerprint(
 /**
  * Deny-by-default sufficiency check against the contract as it exists now.
  * A contract whose fingerprint cannot be resolved can never be proved inspected.
+ *
+ * Fingerprint match alone is not enough: the attestation must also cover the
+ * required inspected-fact profile derived from the durable contract. A legacy
+ * attestation that matches the fingerprint but omits execution-significant
+ * facts (e.g. docs_write `inputs.targetPath`) is insufficient.
  */
 export function evaluateInspectionSufficiency(input: {
   attestations: readonly InspectionAttestation[];
   executionContractId: string;
   currentInspectionFingerprint: string | undefined;
+  /**
+   * Required fact identifiers for the current durable contract.
+   * When omitted, fingerprint match alone decides (legacy callers / tests).
+   * Product path always supplies the dynamic profile.
+   */
+  requiredInspectedFacts?: readonly string[];
+  /** Fail closed when the contract cannot disclose mandatory inspection facts. */
+  disclosureIncomplete?: boolean;
 }): InspectionSufficiency {
   const relevant = input.attestations
     .filter((a) => a.executionContractId === input.executionContractId)
     .slice()
     .sort((a, b) => (a.inspectedAt < b.inspectedAt ? 1 : -1));

+  if (input.disclosureIncomplete === true) {
+    return {
+      sufficient: false,
+      reason: "inspection_disclosure_incomplete",
+      staleAttestation: relevant[0],
+    };
+  }
+
   if (relevant.length === 0) {
     return { sufficient: false, reason: "no_attestation" };
   }
@@ -114,13 +137,27 @@ export function evaluateInspectionSufficiency(input: {
   const match = relevant.find(
     (a) => a.inspectionFingerprint === input.currentInspectionFingerprint,
   );
-  if (match) {
-    return { sufficient: true, attestation: match };
+  if (!match) {
+    return {
+      sufficient: false,
+      reason: "material_change",
+      staleAttestation: relevant[0]!,
+    };
+  }
+
+  if (input.requiredInspectedFacts && input.requiredInspectedFacts.length > 0) {
+    const present = new Set(match.inspectedFacts);
+    const covers = input.requiredInspectedFacts.every((fact) =>
+      present.has(fact),
+    );
+    if (!covers) {
+      return {
+        sufficient: false,
+        reason: "inspected_facts_incomplete",
+        staleAttestation: match,
+      };
+    }
   }

-  return {
-    sufficient: false,
-    reason: "material_change",
-    staleAttestation: relevant[0]!,
-  };
+  return { sufficient: true, attestation: match };
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index f9fcbdcb..1fc7d1b9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -86,6 +86,16 @@ export {
   projectCursorPrepareOnly,
   type CursorPrepareOnlyProjection,
 } from "./projection/cursorPrepareOnlyProjection";
+export {
+  projectExecutionContractInspectionDisclosure,
+  requiredInspectedFactsForContract,
+  attestationCoversRequiredFacts,
+  isDocsWriteExecutionContract,
+  DOCS_WRITE_ACTION,
+  DOCS_WRITE_TECHNICAL_TARGET,
+  type ExecutionContractInspectionDisclosure,
+  type InspectionDisclosureProjectionResult,
+} from "./projection/inspectionDisclosure";

 export { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
 export { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
