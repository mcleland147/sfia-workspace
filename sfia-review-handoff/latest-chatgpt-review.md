# SFIA Studio V3.1-D2-D1 — QA Full Review Pack

## Meta
- Cycle start (GO): 2026-08-04 03:54:00 CEST (+0200)
- Cycle end: 2026-08-04 04:07:07 CEST (+0200)
- Role: Cursor QA (independent, read-only on project package)
- Cycle: Cycle 9 — QA / validation
- Profile: Critical
- Typology: INC — QA indépendante d'un incrément local non versionné
- Review Pack: Full
- Review Handoff: required (publish-in-cycle, L3 bounded)

## Critical justification
- sole D2-D state authority package
- contracts consumed by D2-D2/D2-D3
- schemas gate untrusted input
- persistence guards protect incoherent states
- false PASS would propagate hard-to-reverse debt
- server-only is a security boundary
- D2-D1 conditions the D2-D trajectory

## GO Morris (complete)
GO QA SFIA STUDIO V3.1-D2-D1 dated 2026-08-04 03:54 CEST (+0200).
Authorized: Git read, full local package read, method/project sources, static analysis, existing tests, temporary scripts under `.tmp-sfia-review/**`, hashes, Full Review Pack, L3 handoff publish.
Forbidden: any D2-D1 file/test modification, docs 20–24, project staging/commit/push/PR, main mutation, automatic correction, new dependency, npm install, D2-D2/D3/D4, providers, Cursor verification, D2-C, durable persistence, UI/HTTP/Server Action/D3/CreateCycle/method promotion.

## Independence principle applied
Delivery/Correction verdicts were not accepted as sufficient proof. Code and schemas were read; tests inspected and re-executed; temporary adversarial reproductions under `.tmp-sfia-review/qa/controls/**` actively hunted bypasses. Local code prevails over prior report claims.

## CKC
- researched: yes
- detailed QA pilot candidate found: method/.../cycle-knowledge-contracts/pilots/04-qa-validation.md
- fallback also: 02-fifteen-cycles-synthetic-map.md + project method §4.9
- status: candidate pilot (experimental cognitive guidance only)
- authority: none

## Handoff predecessor
- tip: 5ccf3813943d73a386b500f2a4b250ece304e051
- blob: a22d886553ecafb7a3cd0e1feed6e7e73f5f5ad0
- Note: tip/blob of THIS QA report are computed after publication and reported in the terminal Cursor response (anti self-reference).

## Git Truth initiale
- worktree: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1`
- branch: delivery/sfia-studio-v3-1-d2-d1
- HEAD: df4377249660aab79d764915ad3166608a8a9a7d
- origin/main: df4377249660aab79d764915ad3166608a8a9a7d
- staged: empty
- tracked diff: empty
- remote delivery branch: absent
- PR: absent
```
$ git branch --show-current
delivery/sfia-studio-v3-1-d2-d1

$ git rev-parse HEAD
df4377249660aab79d764915ad3166608a8a9a7d

$ git rev-parse origin/main
df4377249660aab79d764915ad3166608a8a9a7d

$ git status --short
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-run/
?? projects/sfia-studio/app/lib/oa/execution-run/

$ git diff --cached --name-status

$ git diff --name-status
```


## Sources consultées
Method 1–10; docs 21–24; package/lock/tsconfig/vitest/CI; execution-contract/attempt/vertical-slice-runtime (read-only compare); server-only conventions; AJV adapters; import-boundary tests; all 48 local D2-D1 files; correction Full Review Pack predecessor.

## Package snapshot QA immutable
- file count: 48
- package sha256 before: `1f9903c78df9dac3d8c437f7dbefa879f09d5c45169b6780a48b6ce7625ef230`
- package sha256 after validations: `1f9903c78df9dac3d8c437f7dbefa879f09d5c45169b6780a48b6ce7625ef230`
- unchanged during QA: YES
- inventory:
```
projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts	3845	a7788d301db9922c102acb10aead686034c7d30bd52cd9a95bac6f0bc8592320
projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts	3440	65dabd7f2dab4ea8634857f569c75265c3bed08331c212d8e011d818da7c2cd0
projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts	6301	9b9ad9a2c706cc52a4b1850d2318ce6d16e55924fca2cd62bad4bfbeaac4584c
projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts	1520	a6e5d12345b4cfbcd86d44f520f65bf1e8b9507acca036ff384abe40849a60e8
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts	3636	bcf4c973892e79a84920b39bec56165dd5c9fba6353992a377cf472f8ff98202
projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts	5570	69359a7675c82bf86e4092d63788abeb43f9477d9418d72a6716642311b29f64
projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts	3890	479680754ae5d81a2e45010e30b60d3a6f88752ca660d54e376ea39da144625b
projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts	5657	79267673f9c7ca0e013e7607f640f274880b86c9eb1c823fad92a8b805375778
projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts	2487	34137522e68ab29ea5516084a195828e40822dfdfb67774c1d54a752f98e8285
projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts	2316	402de089833ed7999dd440d584956dded292921a4d11a104309b87b092d6ea20
projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts	5884	267d1b6dea51bb4c5b37b67eee0d785fd89b4139c8721d4be5ea64054849fe1d
projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts	2430	db038b585d16f28c63ca25247d265de233f601be06cd43334a5f5a98f4418837
projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts	3514	a98fabf5158bd058be63e15449c377ad829969c9fbfd9fce4665eeaca74a0c1e
projects/sfia-studio/app/lib/oa/execution-run/application/persistExecutionRun.ts	1650	aa6d35349af3368becc28d28f191df9145e4589ce6933f088a50fe258d84a76d
projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts	10564	d6ea29343bcebc8bb61cf5ee4d55e25a578e9ad7db157a6e0aef6a596d010d2a
projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts	472	834e64b77bb9a0d95a21ca0bcc3857968905a38928b02a88babdc24a161f3862
projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts	1790	b82fa2b66d703a1278a999a1bc39afa9114e6a4dee4c32ef69bb23dbe06265de
projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts	3054	803b94670d4b77d8ad75cd67c06bc38ebbc537a00e8a14148e122b2f3e8001e4
projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts	4390	b8d4b2ced9644d03c4bcb3f10e7fcae4e76938fdad568debbed7b5a935c01155
projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts	3280	71dd7b791d82d877026d78b1e540ccecf23e51bc29e31df9bf8bc9bd9f403506
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts	6347	383a319a00d31d9530326d4911f35efaa1eca6f4ec06f0fbd3080ac123a22c0b
projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts	7072	08ceaff616ab9d1d01597dae5da0b6c60a8d9dc86fe7d47ad3519212c75782db
projects/sfia-studio/app/lib/oa/execution-run/index.ts	2348	07e029a5e9c2ab6d4fb38f5d2032f520336a912060dd330d1c2addd6d82928cf
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts	4899	3661388cee0d413d8a64edd9c15ce700c1faf38c66cba50a0728bfc2e72e80f6
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts	196	1fb80fdea26e2ff745963b886101bf199098714fb218d22a64f2c399668571f9
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts	1023	548c06695589cc49289a235ff7c9c3daeef7322d0cd789a8de3bc79bcef59f64
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts	146	12ba9ce92b7001346cb4fc888d1644d55369b66d698023a079c2c777ffcc89a9
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts	550	de9f307963d7579256a88f41ca607e8f76bb7f36bdd0b9f96207bb934bf8abd4
projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts	51	1ee935be91426cc4aaa9564b939f393ca73891be7f119abc6c78bf979615f749
projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts	271	2e8da3f81799a0b8faf579278a541822880f4594bc74f70125e1f3e3d93e1446
projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts	960	f8951453aa9f68b3e0415b8dd325d37861a8a37ebdf57d728ebb4832c241718a
projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts	111	6c2c25ab63a18ba148f97b45262f08335da2811f59720cf26e7d0f6ea7212016
projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json	578	36ca3f266792903d0c73c95745a43472289be0c7bb76700511000463f35c600c
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json	1359	18a973cf08a6869846eecf8fd7f962879c958ca847102261ad5671920ea53b4e
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json	1231	901b0222fa7e974827a7d7aebef584aac2f4360824b03e31ddca65c737dfc939
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json	1230	4f9c940bcf7311d99409852cbb932704ad01f74a4acb5f1e97c41ebc489e1c28
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json	4839	73f906733dde4944bfc25ce8d8d1a3b1bb77ab28919e2eb822c7b6d2dae72941
projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json	1107	b44d0ef53d052ac94d2f5751bddd02b91b34722a72633422f319056d75526375
projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json	738	aa366a8f57434b0c057ea182c9cc4ea61045a63fc5bee301e02444a54231eaa1
projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json	1606	e4ca4c729a70bfab9c3473b526ddb938c1222822b99997e7e9813e1ae3a02bee
projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json	778	f2faced872f8283c89acce59232bb4f2fd0482de61566b5c209679e436818d30
projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json	828	d3290a69899ced9ef159661d439e77241aaa939d3c454f9406d32e9058701114
projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json	1950	16593acb88ae7888417dfb7fa7b919d6472be8e3b258317dc37ba5fffb8fe7aa
projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json	911	058258541c3d6052755d05f6bc67dcf728fe8155325a6ef9772b5dafa74afdf2
projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json	878	0997d39dc8ed797b6a4678938392ec583f7efae367683af9de2a5879c649934b
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts	2511	2c206494e0d399d88b8ebe0a8edd6507634127f382dc51febde0c288e9594ef9
projects/sfia-studio/app/lib/oa/execution-run/server/index.ts	295	e6ced4c5dd902f36f25e93405d4894402bb418e990e242657f825ad548d84fff
projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts	452	e8001369c96d7d555a23b614f42a8628eaa9df35ef29e408df5688c7fa75b527
```


## Contenu complet des 48 fichiers D2-D1

### `projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts`

```ts
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
import { createExecutionRun } from "@/lib/oa/execution-run";
import { getFixture } from "@/lib/oa/execution-run";
import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

function deps(repo: ExecutionRunRepositoryPort) {
  return {
    clock: new FixedClock("2026-08-03T20:00:00.000Z"),
    identity: new SequentialIdentity(),
    repository: repo,
    schemas: new AjvExecutionRunSchemaValidation(schemasDir),
  };
}

describe("D2-D1 create boundary validation before metadata", () => {
  it("rejects null/undefined/primitive/array without save or identity", async () => {
    const save = vi.fn();
    const getById = vi.fn();
    const listByCorrelationId = vi.fn();
    const identity = new SequentialIdentity();
    const nextRunId = vi.spyOn(identity, "nextRunId");
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById,
      listByCorrelationId,
    };
    const base = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity,
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    for (const bad of [null, undefined, 42, "x", [], true]) {
      const r = await createExecutionRun(bad, base);
      expect(r.ok).toBe(false);
    }
    expect(save).not.toHaveBeenCalled();
    expect(nextRunId).not.toHaveBeenCalled();
  });

  it("rejects incomplete object and additional properties", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const d = deps(repository);
    expect((await createExecutionRun({ intent: getFixture("nominal").intent }, d)).ok).toBe(
      false,
    );
    expect(
      (
        await createExecutionRun(
          {
            intent: getFixture("nominal").intent,
            context: getFixture("nominal").context,
            extra: true,
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("rejects invalid nested context permissions and capability", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const d = deps(repository);
    const f = getFixture("nominal");
    expect(
      (
        await createExecutionRun(
          {
            intent: f.intent,
            context: {
              ...f.context,
              permissions: { gitRead: true, gitWrite: false } as never,
            },
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(
      (
        await createExecutionRun(
          {
            intent: f.intent,
            context: f.context,
            capability: { ...f.capability!, lane: "openai" as never },
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("does not throw on adversarial payloads", async () => {
    const repository: ExecutionRunRepositoryPort = {
      save: async () => undefined,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    await expect(
      createExecutionRun({ circular: null }, deps(repository)),
    ).resolves.toMatchObject({ ok: false });
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts`

```ts
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
import { transitionExecutionRun, normalizedFailure } from "@/lib/oa/execution-run";
import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

describe("D2-D1 transition boundary validation before metadata", () => {
  it("rejects invalid input before repository lookup", async () => {
    const getById = vi.fn();
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById,
      listByCorrelationId: async () => [],
    };
    const deps = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity: new SequentialIdentity(),
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    for (const bad of [
      null,
      undefined,
      1,
      [],
      {},
      { runId: "r1" },
      { runId: "r1", reason: "not_a_reason" },
      { runId: "r1", reason: "outputs_validated", completeness: "complete" },
      {
        runId: "r1",
        reason: "engaged_operation_failed",
      },
      {
        runId: "r1",
        reason: "intent_valid",
        extra: true,
      },
    ]) {
      const r = await transitionExecutionRun(bad, deps);
      expect(r.ok).toBe(false);
    }
    expect(getById).not.toHaveBeenCalled();
    expect(save).not.toHaveBeenCalled();
  });

  it("rejects invalid externalResult / failure payloads before save", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const deps = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity: new SequentialIdentity(),
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    const badExternal = await transitionExecutionRun(
      {
        runId: "r1",
        reason: "outputs_validated",
        completeness: "complete",
        externalResult: { kind: "success", completeness: "complete" },
      },
      deps,
    );
    expect(badExternal.ok).toBe(false);
    const badFailure = await transitionExecutionRun(
      {
        runId: "r1",
        reason: "engaged_operation_failed",
        failure: {
          family: "validation",
          code: "NOT_A_CODE",
          userMessage: "x",
          technicalDetailsRedacted: true,
          retryable: false,
          correlationId: "c",
        },
      },
      deps,
    );
    expect(badFailure.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("accepts schema-valid failure enum", async () => {
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const failure = normalizedFailure({
      family: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      userMessage: "unavailable",
      retryable: true,
      correlationId: "c1",
    });
    expect((await schemas.validate("normalized-failure", failure)).ok).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts`

```ts
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import {
  createOfficialEvidence,
  createSourceDisclosure,
  getFixture,
  normalizedFailure,
  usageUnavailable,
  EXECUTION_RUN_SCHEMA_VERSION,
} from "@/lib/oa/execution-run";
import type { ExecutionRunSchemaName } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

const ALL: ExecutionRunSchemaName[] = [
  "execution-intent",
  "execution-context",
  "provider-capability-descriptor",
  "validation-outcome",
  "execution-run",
  "external-result",
  "execution-evidence",
  "source-disclosure",
  "human-decision-gate",
  "usage-summary",
  "normalized-failure",
  "create-execution-run-input",
  "transition-execution-run-input",
];

describe("D2-D1 contract-equivalent schemas", () => {
  const validator = new AjvExecutionRunSchemaValidation(schemasDir);

  it("loads and resolves all schemas", () => {
    const ids = validator.listLoadedSchemaIds();
    expect(ids).toHaveLength(ALL.length);
  });

  it("accepts valid fixtures for each core object", async () => {
    const f = getFixture("nominal");
    expect((await validator.validate("execution-intent", f.intent)).ok).toBe(true);
    expect((await validator.validate("execution-context", f.context)).ok).toBe(true);
    expect(
      (await validator.validate("provider-capability-descriptor", f.capability)).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("normalized-failure", normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "bad",
          retryable: true,
          correlationId: "c",
        }))
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate(
          "source-disclosure",
          createSourceDisclosure({ source: "fixture", providerLane: "ai" }),
        )
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate(
          "execution-evidence",
          createOfficialEvidence({
            evidenceId: "e1",
            runId: "r1",
            correlationId: "c1",
            source: "fixture",
            completeness: "complete",
            producedAt: "2026-08-03T20:00:00.000Z",
            summary: "ok",
          }),
        )
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("external-result", {
          kind: "success",
          completeness: "complete",
          redactedSummary: "ok",
          rawPresent: false,
        })
      ).ok,
    ).toBe(true);
    expect(
      (await validator.validate("usage-summary", usageUnavailable("x"))).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("human-decision-gate", {
          gateId: "g1",
          question: "proceed?",
          required: true,
        })
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("validation-outcome", {
          ok: true,
          validatedAt: "2026-08-03T20:00:00.000Z",
        })
      ).ok,
    ).toBe(true);
  });

  it("rejects missing required, wrong type, additional props, bad enums", async () => {
    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
    expect((await validator.validate("execution-intent", 1)).ok).toBe(false);
    expect(
      (
        await validator.validate("execution-intent", {
          ...getFixture("nominal").intent,
          extra: true,
        })
      ).ok,
    ).toBe(false);
    expect(
      (
        await validator.validate("execution-intent", {
          ...getFixture("nominal").intent,
          requestedLane: "openai",
        })
      ).ok,
    ).toBe(false);
    expect(
      (
        await validator.validate("normalized-failure", {
          family: "nope",
          code: "VALIDATION_ERROR",
          userMessage: "x",
          technicalDetailsRedacted: true,
          retryable: false,
          correlationId: "c",
        })
      ).ok,
    ).toBe(false);
  });

  it("validates create and transition boundary schemas", async () => {
    const f = getFixture("nominal");
    expect(
      (
        await validator.validate("create-execution-run-input", {
          intent: f.intent,
          context: f.context,
          capability: f.capability,
        })
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("transition-execution-run-input", {
          runId: "run:1",
          reason: "intent_valid",
        })
      ).ok,
    ).toBe(true);
    expect(
      (
        await validator.validate("transition-execution-run-input", {
          runId: "run:1",
          reason: "outputs_validated",
          completeness: "complete",
          externalResult: {
            kind: "success",
            completeness: "complete",
            redactedSummary: "ok",
            rawPresent: false,
          },
        })
      ).ok,
    ).toBe(true);
  });

  it("execution-run $refs enforce nested contracts and state conditionals", async () => {
    const f = getFixture("nominal");
    const idle: Record<string, unknown> = {
      schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
      runId: "run:1",
      correlationId: f.intent.correlationId,
      state: "idle",
      intent: f.intent,
      context: f.context,
      disclosure: createSourceDisclosure({ source: "fixture", providerLane: "ai" }),
      createdAt: "2026-08-03T20:00:00.000Z",
      updatedAt: "2026-08-03T20:00:00.000Z",
      version: 1,
      usage: usageUnavailable("x"),
      persistence: {
        kind: "memory_process_local",
        durable: false,
        multiInstance: false,
        restartSafe: false,
      },
    };
    expect((await validator.validate("execution-run", idle)).ok).toBe(true);

    const nestedBad = {
      ...idle,
      context: { ...f.context, permissions: { gitRead: true } },
    };
    expect((await validator.validate("execution-run", nestedBad)).ok).toBe(false);

    const succeededBare = { ...idle, state: "succeeded" };
    expect((await validator.validate("execution-run", succeededBare)).ok).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "@/lib/oa/execution-run";

describe("D2-D1 evidence and disclosure", () => {
  it("distinguishes sources honestly", () => {
    expect(assertSourceHonest("fixture", "fixture")).toBe(true);
    expect(assertSourceHonest("fixture", "real")).toBe(false);
  });

  it("partial cannot succeed", () => {
    expect(canSucceed("partial")).toBe(false);
    expect(canSucceed("complete")).toBe(true);
  });

  it("creates official evidence without secrets", () => {
    const e = createOfficialEvidence({
      evidenceId: "evidence:1",
      runId: "run:1",
      correlationId: "corr:1",
      source: "fixture",
      completeness: "complete",
      producedAt: "2026-08-03T20:00:00.000Z",
      summary: "ok",
    });
    expect(e.official).toBe(true);
    expect(JSON.stringify(e)).not.toMatch(/sk-|password/i);
  });

  it("marks process-local disclosure", () => {
    const d = createSourceDisclosure({ source: "fixture", providerLane: "ai" });
    expect(d.processLocalMemory).toBe(true);
  });

  it("usage unavailable when not validated", () => {
    expect(usageUnavailable("missing").status).toBe("unavailable");
  });

  it("validates ISO timestamps", () => {
    expect(isIsoTimestamp("2026-08-03T20:00:00.000Z")).toBe(true);
    expect(isIsoTimestamp("not-a-date")).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`

```ts
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("D2-D1 execution-run import boundaries", () => {
  it("domain stays pure", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application does not import infrastructure, AJV, Node, Next, or providers", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
            line,
          )
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
    const files = listTsFiles(MODULE_ROOT);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
            line,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("root barrel does not export concrete composition", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunMemory/);
    expect(barrel).not.toMatch(/MemoryExecutionRunStore/);
    expect(barrel).not.toMatch(/AjvExecutionRunSchemaValidation/);
  });

  it("server composition lives under server/ with server-only guard", () => {
    const serverDir = path.join(MODULE_ROOT, "server");
    expect(fs.existsSync(serverDir)).toBe(true);
    const compose = fs.readFileSync(
      path.join(serverDir, "composeExecutionRunMemory.ts"),
      "utf8",
    );
    expect(compose).toMatch(/assertServerOnly/);
    expect(compose).toMatch(/infrastructure\//);
    const guard = fs.readFileSync(path.join(serverDir, "serverOnly.ts"), "utf8");
    expect(guard).toMatch(/typeof window/);
  });

  it("application folder no longer hosts concrete composition", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/composeExecutionRun.ts")),
    ).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import {
  canAcceptLateResult,
  EXECUTION_STATES,
  getFixture,
  LATE_RESULT_ELIGIBLE_STATES,
  normalizedFailure,
} from "@/lib/oa/execution-run";

async function runningRun() {
  const c = composeExecutionRunMemory();
  const f = getFixture("nominal");
  const created = await c.createExecutionRun({
    intent: f.intent,
    context: f.context,
    capability: f.capability,
  });
  if (!created.ok) throw new Error("create failed");
  const started = await c.transitionExecutionRun({
    runId: created.run.runId,
    reason: "intent_valid",
  });
  if (!started.ok) throw new Error("start failed");
  return { c, run: started.run };
}

describe("D2-D1 late result eligibility", () => {
  it("documents eligible terminals", () => {
    expect([...LATE_RESULT_ELIGIBLE_STATES].sort()).toEqual(
      ["cancelled", "failed", "timed_out"].sort(),
    );
    for (const s of EXECUTION_STATES) {
      expect(canAcceptLateResult(s)).toBe(
        (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(s),
      );
    }
  });

  it("refuses idle, running, awaiting_human, succeeded, blocked", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;

    const idle = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(idle.ok).toBe(false);

    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const running = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(running.ok).toBe(false);

    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_gate_required",
    });
    const awaiting = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(awaiting.ok).toBe(false);

    // fresh run → succeeded
    const { c: c2, run } = await runningRun();
    const succeeded = await c2.transitionExecutionRun({
      runId: run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "ok",
        rawPresent: false,
      },
    });
    expect(succeeded.ok).toBe(true);
    if (!succeeded.ok) return;
    const lateOnSuccess = await c2.transitionExecutionRun({
      runId: run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(lateOnSuccess.ok).toBe(false);

    // blocked at create
    const c3 = composeExecutionRunMemory();
    const blocked = await c3.createExecutionRun({
      intent: getFixture("mutation_forbidden").intent,
      context: getFixture("mutation_forbidden").context,
      capability: getFixture("mutation_forbidden").capability,
    });
    expect(blocked.run?.state).toBe("blocked");
    if (!blocked.run) return;
    const lateOnBlocked = await c3.transitionExecutionRun({
      runId: blocked.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(lateOnBlocked.ok).toBe(false);
  });

  it("accepts cancelled, timed_out, failed with evidence-only mutation", async () => {
    // cancelled
    const { c, run } = await runningRun();
    await c.transitionExecutionRun({
      runId: run.runId,
      reason: "cancel_accepted",
    });
    const lateCancel = await c.transitionExecutionRun({
      runId: run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_cancel",
    });
    expect(lateCancel.ok).toBe(true);
    if (lateCancel.ok) {
      expect(lateCancel.run.state).toBe("cancelled");
      expect(lateCancel.run.evidence?.at(-1)?.late).toBe(true);
      expect(lateCancel.run.evidence?.at(-1)?.official).toBe(true);
      expect(lateCancel.run.evidence?.at(-1)?.completeness).toBe("partial");
    }

    // timed_out
    const r2 = await runningRun();
    await r2.c.transitionExecutionRun({
      runId: r2.run.runId,
      reason: "time_limit",
    });
    const lateTimeout = await r2.c.transitionExecutionRun({
      runId: r2.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_timeout",
    });
    expect(lateTimeout.ok).toBe(true);
    if (lateTimeout.ok) expect(lateTimeout.run.state).toBe("timed_out");

    // failed
    const r3 = await runningRun();
    const failed = await r3.c.transitionExecutionRun({
      runId: r3.run.runId,
      reason: "engaged_operation_failed",
      failure: normalizedFailure({
        family: "provider_unavailable",
        code: "PROVIDER_UNAVAILABLE",
        userMessage: "down",
        retryable: true,
        correlationId: r3.run.correlationId,
      }),
    });
    expect(failed.ok).toBe(true);
    const lateFailed = await r3.c.transitionExecutionRun({
      runId: r3.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_failed",
    });
    expect(lateFailed.ok).toBe(true);
    if (lateFailed.ok) expect(lateFailed.run.state).toBe("failed");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 fixture lifecycle", () => {
  it("covers required catalogue scenarios", () => {
    const ids = [
      "nominal",
      "validation_failure",
      "auth_failure",
      "provider_unavailable",
      "rate_limit",
      "timeout",
      "cancellation",
      "blocked_gate",
      "protected_path",
      "mutation_forbidden",
      "partial_result",
      "invalid_provider_result",
      "late_result",
      "secret_redaction",
      "source_mismatch",
    ] as const;
    for (const id of ids) {
      expect(getFixture(id).source).toBe("fixture");
    }
  });

  it("runs nominal to succeeded with official evidence", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const started = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    expect(started.ok && started.run.state).toBe("running");
    if (!started.ok) return;
    const done = await c.transitionExecutionRun({
      runId: started.run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "ok",
        rawPresent: false,
      },
    });
    expect(done.ok && done.run.state).toBe("succeeded");
    if (!done.ok) return;
    expect(done.run.evidence?.some((e) => e.official && !e.late)).toBe(true);
  });

  it("never succeeds on partial", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("partial_result");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const done = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "outputs_validated",
      completeness: "partial",
      externalResult: {
        kind: "success",
        completeness: "partial",
        redactedSummary: "partial",
        rawPresent: false,
      },
    });
    expect(done.ok).toBe(false);
  });

  it("records late evidence without state change on cancelled", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("late_result");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "cancel_accepted",
    });
    const late = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_redacted",
    });
    expect(late.ok).toBe(true);
    if (!late.ok) return;
    expect(late.run.state).toBe("cancelled");
    expect(late.run.evidence?.some((e) => e.late)).toBe(true);
  });

  it("blocks mutation intent at create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("mutation_forbidden");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(false);
    if (created.run) expect(created.run.state).toBe("blocked");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts`

```ts
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import {
  persistExecutionRun,
  checkExecutionRunInvariants,
  createSourceDisclosure,
  usageUnavailable,
  EXECUTION_RUN_SCHEMA_VERSION,
  getFixture,
} from "@/lib/oa/execution-run";
import type { ExecutionRun, ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

function baseRun(over: Partial<ExecutionRun> = {}): ExecutionRun {
  const f = getFixture("nominal");
  return {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId: "run:persist:1",
    correlationId: f.intent.correlationId,
    state: "idle",
    intent: f.intent,
    context: f.context,
    disclosure: createSourceDisclosure({
      source: "fixture",
      providerLane: "ai",
      limits: ["test"],
    }),
    createdAt: "2026-08-03T20:00:00.000Z",
    updatedAt: "2026-08-03T20:00:00.000Z",
    version: 1,
    capability: f.capability,
    usage: usageUnavailable("not_provided"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    ...over,
  };
}

describe("D2-D1 persistExecutionRun guards", () => {
  it("saves valid idle run", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRun(baseRun(), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(true);
    expect(save).toHaveBeenCalledOnce();
  });

  it("refuses ninth state before save", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRun(baseRun({ state: "STATE-B" as never }), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses succeeded without external result / evidence", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const noResult = await persistExecutionRun(baseRun({ state: "succeeded" }), {
      repository,
      schemas,
    });
    expect(noResult.ok).toBe(false);
    expect(checkExecutionRunInvariants(baseRun({ state: "succeeded" })).length).toBeGreaterThan(
      0,
    );

    const partial = await persistExecutionRun(
      baseRun({
        state: "succeeded",
        externalResult: {
          kind: "success",
          completeness: "partial",
          redactedSummary: "p",
          rawPresent: false,
        },
        evidence: [
          {
            evidenceId: "e1",
            runId: "run:persist:1",
            correlationId: "c",
            source: "fixture",
            completeness: "complete",
            producedAt: "2026-08-03T20:00:00.000Z",
            summary: "x",
            late: false,
            official: true,
          },
        ],
      }),
      { repository, schemas },
    );
    expect(partial.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses failed without failure and blocked without reason", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    expect(
      (await persistExecutionRun(baseRun({ state: "failed" }), { repository, schemas })).ok,
    ).toBe(false);
    expect(
      (await persistExecutionRun(baseRun({ state: "blocked" }), { repository, schemas })).ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses disclosure source mismatch and durable claim", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const mismatch = baseRun({
      disclosure: createSourceDisclosure({ source: "real", providerLane: "ai" }),
    });
    expect((await persistExecutionRun(mismatch, { repository, schemas })).ok).toBe(false);
    const durable = baseRun({
      persistence: {
        kind: "memory_process_local",
        durable: true as never,
        multiInstance: false,
        restartSafe: false,
      },
    });
    expect((await persistExecutionRun(durable, { repository, schemas })).ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses invalid timestamp format when schema requires date-time", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRun(baseRun({ createdAt: "yesterday" }), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { evaluateReadOnlyPolicy, getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 read-only policy", () => {
  it("denies mutation", () => {
    const f = getFixture("mutation_forbidden");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("MUTATION_FORBIDDEN");
  });

  it("denies protected path", () => {
    const f = getFixture("protected_path");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROTECTED_PATH");
  });

  it("denies auth failure", () => {
    const f = getFixture("auth_failure");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("AUTHORIZATION_ERROR");
  });

  it("denies provider unavailable", () => {
    const f = getFixture("provider_unavailable");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROVIDER_UNAVAILABLE");
  });

  it("denies source mismatch", () => {
    const f = getFixture("source_mismatch");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("SOURCE_MISMATCH");
  });

  it("denies unsatisfied human gate", () => {
    const f = getFixture("blocked_gate");
    const d = evaluateReadOnlyPolicy({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
      gateSatisfied: false,
    });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("HUMAN_GATE_REQUIRED");
  });

  it("accepts nominal", () => {
    const f = getFixture("nominal");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(true);
  });

  it("never exposes secrets in failures", () => {
    const f = getFixture("secret_redaction");
    expect(JSON.stringify(f.expectedFailure)).not.toMatch(/sk-|BEGIN PRIVATE|password/i);
    expect(f.expectedFailure?.technicalDetailsRedacted).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 memory repository via server composition", () => {
  it("saves and loads with defensive copies", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const loaded = await c.getById(created.run.runId);
    expect(loaded?.runId).toBe(created.run.runId);
    expect(loaded).not.toBe(created.run);
  });

  it("lists by correlation deterministically", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    const list = await c.listByCorrelationId(f.intent.correlationId);
    expect(list.length).toBe(1);
  });

  it("returns null for missing", async () => {
    const c = composeExecutionRunMemory();
    expect(await c.getById("missing")).toBeNull();
  });

  it("issues new identity after terminal via new create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const a = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    const b = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(a.ok && b.ok).toBe(true);
    if (a.ok && b.ok) expect(a.run.runId).not.toBe(b.run.runId);
  });

  it("discloses process-local memory only", () => {
    const c = composeExecutionRunMemory();
    expect(c.disclosure).toEqual({
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    });
  });

  it("does not expose raw repository save on composition", () => {
    const c = composeExecutionRunMemory() as Record<string, unknown>;
    expect(c.repository).toBeUndefined();
    expect(c.store).toBeUndefined();
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts`

```ts
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { normalizedFailure } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

describe("D2-D1 AJV adversarial validation", () => {
  const validator = new AjvExecutionRunSchemaValidation(schemasDir);

  it("rejects null and undefined before metadata use", async () => {
    expect((await validator.validate("execution-intent", null)).ok).toBe(false);
    expect((await validator.validate("execution-intent", undefined)).ok).toBe(false);
  });

  it("rejects wrong types and missing fields", async () => {
    expect((await validator.validate("execution-intent", 42)).ok).toBe(false);
    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
    expect(
      (
        await validator.validate("execution-intent", {
          ...getFixture("nominal").intent,
          requestedLane: "openai",
        })
      ).ok,
    ).toBe(false);
  });

  it("rejects empty operation", async () => {
    const f = getFixture("validation_failure");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(false);
  });

  it("accepts nominal intent", async () => {
    const f = getFixture("nominal");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(true);
  });

  it("does not throw raw AJV exceptions", async () => {
    await expect(validator.validate("execution-run", { circular: null })).resolves.toMatchObject({
      ok: false,
    });
  });
});

describe("D2-D1 succeeded / failed / blocked application invariants", () => {
  it("creates official evidence on succeeded", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const done = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "redacted-ok",
        rawPresent: false,
      },
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.run.evidence?.[0]?.summary).toBe("redacted-ok");
    expect(done.run.evidence?.[0]?.official).toBe(true);
    expect(done.run.evidence?.[0]?.late).toBe(false);
  });

  it("refuses succeeded without external result", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const done = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "outputs_validated",
      completeness: "complete",
    });
    expect(done.ok).toBe(false);
  });

  it("requires normalized failure for failed", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const missing = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "engaged_operation_failed",
    });
    expect(missing.ok).toBe(false);
    const ok = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "engaged_operation_failed",
      failure: normalizedFailure({
        family: "rate_limited",
        code: "RATE_LIMITED",
        userMessage: "slow down",
        retryable: true,
        correlationId: created.run.correlationId,
      }),
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.run.failure?.code).toBe("RATE_LIMITED");
  });

  it("requires failure or blockingReason for blocked transition", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: {
        ...f.intent,
        requiresHumanGate: true,
        intentId: "intent:gate",
        correlationId: "corr:gate",
      },
      context: f.context,
      capability: f.capability,
    });
    // may be blocked at create due to unsatisfied gate — use idle path with gate false via capability
    if (!created.ok && created.run?.state === "blocked") {
      expect(created.run.failure || created.run.blockedReason).toBeTruthy();
      return;
    }
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_gate_required",
    });
    const blocked = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_reject_or_unsatisfied",
      blockingReason: "HUMAN_REJECTED",
    });
    expect(blocked.ok).toBe(true);
    if (blocked.ok) {
      expect(blocked.run.state).toBe("blocked");
      expect(blocked.run.blockedReason).toBe("HUMAN_REJECTED");
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts`

```ts
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  decideTransition,
  listAllowedTransitions,
  EXECUTION_STATES,
  isTerminalState,
} from "@/lib/oa/execution-run";

describe("D2-D1 transition authority", () => {
  it("exposes exactly eight states", () => {
    expect(EXECUTION_STATES).toHaveLength(8);
  });

  it("allows documented transitions", () => {
    for (const edge of listAllowedTransitions()) {
      expect(
        decideTransition({
          from: edge.from,
          to: edge.to,
          reason: edge.reason,
          completeness: edge.to === "succeeded" ? "complete" : undefined,
        }).allowed,
      ).toBe(true);
    }
  });

  it("refuses terminal without new run", () => {
    for (const state of ["succeeded", "failed", "cancelled", "timed_out", "blocked"] as const) {
      expect(isTerminalState(state)).toBe(true);
      const d = decideTransition({ from: state, to: "running", reason: "intent_valid" });
      expect(d.allowed).toBe(false);
    }
  });

  it("refuses partial succeeded", () => {
    const d = decideTransition({
      from: "running",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "partial",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses late result state mutation", () => {
    const d = decideTransition({
      from: "cancelled",
      to: "succeeded",
      reason: "late_result_evidence_only",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses idle→succeeded", () => {
    const d = decideTransition({
      from: "idle",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "complete",
    });
    expect(d.allowed).toBe(false);
  });

  it("samples refused transitions per non-terminal state", () => {
    const samples = [
      { from: "idle" as const, to: "failed" as const, reason: "engaged_operation_failed" as const },
      { from: "running" as const, to: "idle" as const, reason: "intent_valid" as const },
      {
        from: "awaiting_human" as const,
        to: "succeeded" as const,
        reason: "outputs_validated" as const,
        completeness: "complete" as const,
      },
    ];
    for (const s of samples) {
      expect(decideTransition(s).allowed).toBe(false);
    }
  });

  it("preserves exactly the adopted allowed edge count", () => {
    expect(listAllowedTransitions()).toHaveLength(11);
  });
});
```

### `projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts`

```ts
import { createSourceDisclosure, usageUnavailable } from "../domain/evidence";
import { evaluateReadOnlyPolicy } from "../domain/policy";
import { normalizedFailure } from "../domain/errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  ExecutionRun,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { EXECUTION_RUN_SCHEMA_VERSION } from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
import { persistExecutionRun } from "./persistExecutionRun";

export type CreateExecutionRunInput = {
  intent: ExecutionIntent;
  context: ExecutionContext;
  capability?: ProviderCapabilityDescriptor;
};

export type CreateExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };

/**
 * Untrusted boundary: validates CreateExecutionRunInput before any metadata access,
 * identity allocation, or persistence.
 */
export async function createExecutionRun(
  input: unknown,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<CreateExecutionRunResult> {
  const boundary = await deps.schemas.validate("create-execution-run-input", input);
  if (!boundary.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Create execution run input failed schema validation",
        retryable: true,
        correlationId: "unknown",
      }),
    };
  }

  const validated = input as CreateExecutionRunInput;
  const now = deps.clock.nowIso();
  const policy = evaluateReadOnlyPolicy({
    intent: validated.intent,
    context: validated.context,
    capability: validated.capability,
    gateSatisfied: validated.intent.requiresHumanGate ? false : undefined,
  });

  const disclosure = createSourceDisclosure({
    source: validated.context.declaredSource,
    providerLane: validated.intent.requestedLane,
    limits: ["d2-d1-fixture-first", "memory-process-local"],
    cursorUnverified: validated.intent.requestedLane === "cursor",
  });

  const runId = deps.identity.nextRunId();
  const base: ExecutionRun = {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId,
    correlationId: validated.intent.correlationId,
    state: policy.ok ? "idle" : "blocked",
    intent: validated.intent,
    context: validated.context,
    disclosure,
    createdAt: now,
    updatedAt: now,
    version: 1,
    capability: validated.capability,
    usage: usageUnavailable("not_provided"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    validation: policy.ok
      ? { ok: true, validatedAt: now }
      : { ok: false, validatedAt: now, failure: policy.failure },
    failure: policy.ok ? undefined : policy.failure,
    blockedReason: policy.ok ? undefined : policy.failure.code,
  };

  const persisted = await persistExecutionRun(base, deps);
  if (!persisted.ok) {
    return { ok: false, failure: persisted.failure };
  }
  if (!policy.ok) {
    return { ok: false, failure: policy.failure, run: base };
  }
  return { ok: true, run: base };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/application/persistExecutionRun.ts`

```ts
/**
 * Unique supported persistence path for D2-D1 ExecutionRun.
 * Invariants then schema validation before repository save.
 */
import { checkExecutionRunInvariants } from "../domain/invariants";
import { normalizedFailure } from "../domain/errors";
import type { ExecutionRun, NormalizedFailure } from "../domain/types";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";

export type PersistExecutionRunResult =
  | { ok: true }
  | { ok: false; failure: NormalizedFailure };

export async function persistExecutionRun(
  run: ExecutionRun,
  deps: {
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<PersistExecutionRunResult> {
  const issues = checkExecutionRunInvariants(run);
  if (issues.length > 0) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: `Run invariants failed: ${issues.map((i) => i.code).join(",")}`,
        retryable: false,
        correlationId: run.correlationId,
      }),
    };
  }

  const schema = await deps.schemas.validate("execution-run", run);
  if (!schema.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution run failed schema validation before persistence",
        retryable: false,
        correlationId: run.correlationId,
      }),
    };
  }

  await deps.repository.save(run);
  return { ok: true };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts`

```ts
import { createOfficialEvidence, canSucceed } from "../domain/evidence";
import { decideTransition, type TransitionReason } from "../domain/transitions";
import { canAcceptLateResult } from "../domain/invariants";
import { normalizedFailure } from "../domain/errors";
import type {
  Completeness,
  ExecutionRun,
  ExternalResult,
  NormalizedFailure,
} from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
import { persistExecutionRun } from "./persistExecutionRun";

export type TransitionExecutionRunInput = {
  runId: string;
  reason: TransitionReason;
  completeness?: Completeness;
  externalResult?: ExternalResult;
  failure?: NormalizedFailure;
  blockingReason?: string;
  lateEvidenceSummary?: string;
};

export type TransitionExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };

function targetForReason(
  reason: TransitionReason,
): ExecutionRun["state"] | null {
  switch (reason) {
    case "intent_valid":
      return "running";
    case "pre_engagement_block":
      return "blocked";
    case "human_gate_required":
      return "awaiting_human";
    case "outputs_validated":
      return "succeeded";
    case "engaged_operation_failed":
      return "failed";
    case "time_limit":
    case "human_gate_expired":
      return "timed_out";
    case "cancel_accepted":
    case "human_cancel":
      return "cancelled";
    case "human_approve":
      return "running";
    case "human_reject_or_unsatisfied":
      return "blocked";
    default:
      return null;
  }
}

/**
 * Untrusted boundary: validates TransitionExecutionRunInput before metadata access
 * or repository lookup.
 */
export async function transitionExecutionRun(
  input: unknown,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<TransitionExecutionRunResult> {
  const boundary = await deps.schemas.validate(
    "transition-execution-run-input",
    input,
  );
  if (!boundary.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Transition execution run input failed schema validation",
        retryable: true,
        correlationId: "unknown",
      }),
    };
  }

  const validated = input as TransitionExecutionRunInput;

  const existing = await deps.repository.getById(validated.runId);
  if (!existing) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution run not found",
        retryable: false,
        correlationId: "unknown",
      }),
    };
  }

  if (validated.reason === "late_result_evidence_only") {
    if (!canAcceptLateResult(existing.state)) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage:
            "Late result evidence accepted only for cancelled, timed_out, or failed runs",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const summary = validated.lateEvidenceSummary ?? "late_result_redacted";
    const evidence = createOfficialEvidence({
      evidenceId: deps.identity.nextEvidenceId(),
      runId: existing.runId,
      correlationId: existing.correlationId,
      source: existing.disclosure.source,
      completeness: "partial",
      producedAt: deps.clock.nowIso(),
      summary,
      late: true,
    });

    const evidenceSchema = await deps.schemas.validate(
      "execution-evidence",
      evidence,
    );
    if (!evidenceSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "Late evidence failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const updated: ExecutionRun = {
      ...existing,
      updatedAt: deps.clock.nowIso(),
      version: existing.version + 1,
      evidence: [...(existing.evidence ?? []), evidence],
    };
    const persisted = await persistExecutionRun(updated, deps);
    if (!persisted.ok) {
      return { ok: false, failure: persisted.failure, run: existing };
    }
    return { ok: true, run: updated };
  }

  const to = targetForReason(validated.reason);
  if (!to) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Unknown transition reason",
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  const decision = decideTransition({
    from: existing.state,
    to,
    reason: validated.reason,
    completeness: validated.completeness,
  });
  if (!decision.allowed) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: decision.message,
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  const now = deps.clock.nowIso();

  if (to === "succeeded") {
    const external = validated.externalResult;
    const externalSchema = await deps.schemas.validate(
      "external-result",
      external,
    );
    if (!externalSchema.ok || !external) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "succeeded requires a valid ExternalResult",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    if (external.kind !== "success" || !canSucceed(external.completeness)) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "Cannot succeed without complete success ExternalResult",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    if (validated.completeness !== "complete") {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "Cannot succeed with partial or missing completeness",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const evidence = createOfficialEvidence({
      evidenceId: deps.identity.nextEvidenceId(),
      runId: existing.runId,
      correlationId: existing.correlationId,
      source: existing.disclosure.source,
      completeness: "complete",
      producedAt: now,
      summary: external.redactedSummary,
      late: false,
    });
    const evidenceSchema = await deps.schemas.validate(
      "execution-evidence",
      evidence,
    );
    if (!evidenceSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "Official evidence failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const updated: ExecutionRun = {
      ...existing,
      state: "succeeded",
      updatedAt: now,
      version: existing.version + 1,
      externalResult: external,
      evidence: [...(existing.evidence ?? []), evidence],
    };
    const persisted = await persistExecutionRun(updated, deps);
    if (!persisted.ok) {
      return { ok: false, failure: persisted.failure, run: existing };
    }
    return { ok: true, run: updated };
  }

  if (to === "failed") {
    if (!validated.failure) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "failed requires NormalizedFailure",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    const failureSchema = await deps.schemas.validate(
      "normalized-failure",
      validated.failure,
    );
    if (!failureSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "NormalizedFailure failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
  }

  if (to === "blocked") {
    const hasFailure = Boolean(validated.failure);
    const hasReason =
      typeof validated.blockingReason === "string" &&
      validated.blockingReason.trim().length > 0;
    if (!hasFailure && !hasReason && !existing.failure && !existing.blockedReason) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "blocked requires NormalizedFailure or blockingReason",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
  }

  const updated: ExecutionRun = {
    ...existing,
    state: to,
    updatedAt: now,
    version: existing.version + 1,
    externalResult: validated.externalResult ?? existing.externalResult,
    failure:
      validated.failure ??
      (to === "failed" || to === "blocked" ? existing.failure : existing.failure),
    blockedReason:
      to === "blocked"
        ? validated.blockingReason ??
          validated.failure?.code ??
          existing.blockedReason ??
          "blocked"
        : existing.blockedReason,
  };

  const persisted = await persistExecutionRun(updated, deps);
  if (!persisted.ok) {
    return { ok: false, failure: persisted.failure, run: existing };
  }
  return { ok: true, run: updated };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts`

```ts
import type { FailureCode, FailureFamily, NormalizedFailure } from "./types";

export function normalizedFailure(input: {
  family: FailureFamily;
  code: FailureCode;
  userMessage: string;
  retryable: boolean;
  correlationId: string;
}): NormalizedFailure {
  return {
    family: input.family,
    code: input.code,
    userMessage: input.userMessage,
    technicalDetailsRedacted: true,
    retryable: input.retryable,
    correlationId: input.correlationId,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts`

```ts
/**
 * Evidence, completeness, source disclosure rules (FD-05/08).
 */
import type {
  Completeness,
  ExecutionEvidence,
  ExecutionSource,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
} from "./types";

export function assertSourceHonest(
  declared: ExecutionSource,
  claimed: ExecutionSource,
): boolean {
  return declared === claimed;
}

export function canSucceed(completeness: Completeness): boolean {
  return completeness === "complete";
}

export function createOfficialEvidence(input: {
  evidenceId: string;
  runId: string;
  correlationId: string;
  source: ExecutionSource;
  completeness: Completeness;
  producedAt: string;
  summary: string;
  late?: boolean;
  digest?: string;
}): ExecutionEvidence {
  return {
    evidenceId: input.evidenceId,
    runId: input.runId,
    correlationId: input.correlationId,
    source: input.source,
    completeness: input.completeness,
    producedAt: input.producedAt,
    digest: input.digest,
    summary: input.summary,
    late: input.late ?? false,
    official: true,
  };
}

export function createSourceDisclosure(input: {
  source: ExecutionSource;
  providerLane: ProviderLane;
  limits?: readonly string[];
  cursorUnverified?: boolean;
}): SourceDisclosure {
  return {
    source: input.source,
    providerLane: input.providerLane,
    limits: input.limits ?? [],
    processLocalMemory: true,
    cursorUnverified: input.cursorUnverified ?? input.providerLane === "cursor",
  };
}

export function usageUnavailable(reason: string): UsageSummary {
  return { status: "unavailable", reason };
}

export function isIsoTimestamp(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
    return false;
  }
  const t = Date.parse(value);
  return Number.isFinite(t);
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts`

```ts
/**
 * Domain late-result eligibility and strengthened persistence invariants.
 */
import type { ExecutionEvidence, ExecutionRun, ExecutionState } from "./types";
import { canSucceed } from "./evidence";

export type InvariantIssue = { readonly code: string; readonly message: string };

/** Terminal states where an external op may have been engaged (FD-05 late evidence). */
export const LATE_RESULT_ELIGIBLE_STATES = [
  "cancelled",
  "timed_out",
  "failed",
] as const satisfies readonly ExecutionState[];

export type LateResultEligibleState = (typeof LATE_RESULT_ELIGIBLE_STATES)[number];

export function canAcceptLateResult(state: ExecutionState): state is LateResultEligibleState {
  return (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(state);
}

function hasOfficialSuccessEvidence(
  evidence: readonly ExecutionEvidence[] | undefined,
  disclosureSource: ExecutionRun["disclosure"]["source"],
): boolean {
  if (!evidence || evidence.length === 0) return false;
  return evidence.some(
    (e) =>
      e.official === true &&
      e.late === false &&
      e.completeness === "complete" &&
      e.source === disclosureSource,
  );
}

export function checkExecutionRunInvariants(run: ExecutionRun): InvariantIssue[] {
  const issues: InvariantIssue[] = [];
  if (run.persistence.kind !== "memory_process_local") {
    issues.push({ code: "PERSISTENCE", message: "Only memory_process_local allowed in D2-D1" });
  }
  if (run.persistence.durable || run.persistence.multiInstance || run.persistence.restartSafe) {
    issues.push({ code: "CLAIM", message: "Durable/multi-instance/restart-safe claims forbidden" });
  }
  if (run.disclosure.source !== run.context.declaredSource) {
    issues.push({ code: "SOURCE", message: "disclosure source mismatch vs declared context source" });
  }

  if (run.state === "succeeded") {
    const external = run.externalResult;
    if (!external || external.kind !== "success") {
      issues.push({
        code: "SUCCEEDED_EXTERNAL_RESULT",
        message: "succeeded requires ExternalResult kind success",
      });
    } else if (!canSucceed(external.completeness)) {
      issues.push({
        code: "PARTIAL_SUCCESS",
        message: "succeeded requires complete external result",
      });
    }
    if (!hasOfficialSuccessEvidence(run.evidence, run.disclosure.source)) {
      issues.push({
        code: "SUCCEEDED_EVIDENCE",
        message: "succeeded requires official complete non-late evidence",
      });
    }
  }

  if (run.state === "failed") {
    if (!run.failure) {
      issues.push({ code: "FAILED_FAILURE", message: "failed requires NormalizedFailure" });
    }
  }

  if (run.state === "blocked") {
    const hasFailure = Boolean(run.failure);
    const hasReason =
      typeof run.blockedReason === "string" && run.blockedReason.trim().length > 0;
    if (!hasFailure && !hasReason) {
      issues.push({
        code: "BLOCKED_REASON",
        message: "blocked requires NormalizedFailure or non-empty blockedReason",
      });
    }
  }

  return issues;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts`

```ts
/**
 * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
 * Operates on contracts only — no FS/Git/provider I/O.
 */
import { normalizedFailure } from "./errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "./types";

export type PolicyInput = {
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gateSatisfied?: boolean;
};

export type PolicyDecision =
  | { readonly ok: true }
  | { readonly ok: false; readonly failure: NormalizedFailure };

export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
  const { intent, context, capability } = input;
  const cid = intent.correlationId;

  if (intent.mutationRequested || context.permissions.gitWrite) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "mutation_forbidden",
        code: "MUTATION_FORBIDDEN",
        userMessage: "Git write or mutation intent is forbidden in D2-D",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.arbitraryCommandRequested) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Arbitrary commands are not permitted",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.targetPath && context.protectedPaths?.length) {
    const hit = context.protectedPaths.some(
      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
    );
    if (hit) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "protected_path",
          code: "PROTECTED_PATH",
          userMessage: "Target path is protected",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (!context.permissions.gitRead && intent.requestedLane === "git") {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "authorization",
        code: "AUTHORIZATION_ERROR",
        userMessage: "Insufficient permission for Git read",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedLane !== "none") {
    if (!capability) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Provider capability descriptor is required",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.available) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Requested provider is unavailable",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.readOnly) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "mutation_forbidden",
          code: "MUTATION_FORBIDDEN",
          userMessage: "Provider must be read-only for D2-D",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    if (intent.requestedLane === "cursor" && !capability.verified) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "sandbox_blocked",
          code: "SANDBOX_BLOCKED",
          userMessage: "Cursor product capabilities remain unverified",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (intent.requiresHumanGate && input.gateSatisfied === false) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "human_gate_required",
        code: "HUMAN_GATE_REQUIRED",
        userMessage: "A structural human gate is required",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedSource !== context.declaredSource) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "source_mismatch",
        code: "SOURCE_MISMATCH",
        userMessage: "Declared source does not match requested source",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  return { ok: true };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts`

```ts
/**
 * Pure eight-state transition authority (FD-02/03/04/06).
 * Sole decision of whether a transition is valid for D2-D.
 */
import type { Completeness, ExecutionState } from "./types";
import { isTerminalState } from "./types";

export type TransitionReason =
  | "intent_valid"
  | "pre_engagement_block"
  | "human_gate_required"
  | "outputs_validated"
  | "engaged_operation_failed"
  | "time_limit"
  | "cancel_accepted"
  | "human_approve"
  | "human_cancel"
  | "human_reject_or_unsatisfied"
  | "human_gate_expired"
  | "late_result_evidence_only"
  | "forbidden";

export type TransitionRequest = {
  readonly from: ExecutionState;
  readonly to: ExecutionState;
  readonly reason: TransitionReason;
  /** Required when to === succeeded */
  readonly completeness?: Completeness;
};

export type TransitionDecision =
  | { readonly allowed: true }
  | { readonly allowed: false; readonly code: string; readonly message: string };

/** Allowed edges from documents 21 §J + FD-06 (awaiting_human → timed_out). */
const ALLOWED: ReadonlyArray<readonly [ExecutionState, ExecutionState, TransitionReason]> = [
  ["idle", "running", "intent_valid"],
  ["idle", "blocked", "pre_engagement_block"],
  ["running", "awaiting_human", "human_gate_required"],
  ["running", "succeeded", "outputs_validated"],
  ["running", "failed", "engaged_operation_failed"],
  ["running", "timed_out", "time_limit"],
  ["running", "cancelled", "cancel_accepted"],
  ["awaiting_human", "running", "human_approve"],
  ["awaiting_human", "cancelled", "human_cancel"],
  ["awaiting_human", "blocked", "human_reject_or_unsatisfied"],
  ["awaiting_human", "timed_out", "human_gate_expired"],
];

export function isAllowedTransition(
  from: ExecutionState,
  to: ExecutionState,
  reason: TransitionReason,
): boolean {
  return ALLOWED.some(([f, t, r]) => f === from && t === to && r === reason);
}

export function decideTransition(req: TransitionRequest): TransitionDecision {
  if (req.reason === "late_result_evidence_only") {
    return {
      allowed: false,
      code: "LATE_RESULT_NO_STATE_MUTATION",
      message: "Late result is evidence-only and must not mutate state",
    };
  }

  if (isTerminalState(req.from)) {
    return {
      allowed: false,
      code: "TERMINAL_REQUIRES_NEW_RUN",
      message: "Terminal state requires a new run identity",
    };
  }

  if (req.to === "succeeded") {
    if (req.completeness === "partial") {
      return {
        allowed: false,
        code: "PARTIAL_NEVER_SUCCEEDED",
        message: "Partial completeness cannot transition to succeeded",
      };
    }
    if (req.completeness !== "complete") {
      return {
        allowed: false,
        code: "SUCCEEDED_REQUIRES_COMPLETE",
        message: "succeeded requires completeness complete",
      };
    }
  }

  if (!isAllowedTransition(req.from, req.to, req.reason)) {
    return {
      allowed: false,
      code: "TRANSITION_FORBIDDEN",
      message: `Transition ${req.from}→${req.to} (${req.reason}) is not allowed`,
    };
  }

  return { allowed: true };
}

export function listAllowedTransitions(): ReadonlyArray<{
  from: ExecutionState;
  to: ExecutionState;
  reason: TransitionReason;
}> {
  return ALLOWED.map(([from, to, reason]) => ({ from, to, reason }));
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts`

```ts
/**
 * D2-D1 Execution Run — canonical domain vocabulary (twelve functional objects).
 * Pure domain: no Next/Node/fs/process/network/SDK/AJV.
 * Authority: sole D2-D technical state authority (TECH-RUN-B).
 */

export const EXECUTION_RUN_SCHEMA_VERSION = "0.1.0-d2d1" as const;

/** Eight persistent states exactly (FD-02). No STATE-B. */
export type ExecutionState =
  | "idle"
  | "running"
  | "awaiting_human"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const EXECUTION_STATES: readonly ExecutionState[] = [
  "idle",
  "running",
  "awaiting_human",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type TerminalExecutionState =
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const TERMINAL_STATES: readonly TerminalExecutionState[] = [
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type ExecutionSource = "fixture" | "sandbox-real" | "real";

export type Completeness = "complete" | "partial";

export type ProviderLane = "ai" | "git" | "cursor" | "none";

export type FailureFamily =
  | "validation"
  | "authentication"
  | "authorization"
  | "provider_unavailable"
  | "rate_limited"
  | "timed_out"
  | "cancelled"
  | "sandbox_blocked"
  | "protected_path"
  | "mutation_forbidden"
  | "human_gate_required"
  | "invalid_provider_result"
  | "internal_normalized_failure"
  | "source_mismatch";

export type FailureCode =
  | "VALIDATION_ERROR"
  | "AUTHENTICATION_ERROR"
  | "AUTHORIZATION_ERROR"
  | "PROVIDER_UNAVAILABLE"
  | "RATE_LIMITED"
  | "TIMED_OUT"
  | "CANCELLED"
  | "SANDBOX_BLOCKED"
  | "PROTECTED_PATH"
  | "MUTATION_FORBIDDEN"
  | "HUMAN_GATE_REQUIRED"
  | "INVALID_PROVIDER_RESULT"
  | "INTERNAL_NORMALIZED_FAILURE"
  | "SOURCE_MISMATCH";

/** 1. ExecutionIntent */
export type ExecutionIntent = {
  readonly intentId: string;
  readonly correlationId: string;
  readonly requestedLane: ProviderLane;
  readonly operation: string;
  readonly requestedSource: ExecutionSource;
  readonly requiresHumanGate: boolean;
  readonly mutationRequested: boolean;
  readonly arbitraryCommandRequested: boolean;
  readonly targetPath?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
};

/** 2. ExecutionContext */
export type ExecutionContext = {
  readonly projectId: string;
  readonly workspaceId?: string;
  readonly actorId: string;
  readonly declaredSource: ExecutionSource;
  readonly allowlistRepos?: readonly string[];
  readonly protectedPaths?: readonly string[];
  readonly permissions: {
    readonly gitRead: boolean;
    readonly gitWrite: boolean;
    readonly providerInvoke: boolean;
  };
};

/** 3. ProviderCapabilityDescriptor — provider-independent */
export type ProviderCapabilityDescriptor = {
  readonly lane: ProviderLane;
  readonly capabilityId: string;
  readonly available: boolean;
  readonly verified: boolean;
  readonly readOnly: boolean;
  readonly supportsCancellation: boolean;
  readonly supportsTimeout: boolean;
};

/** 4. ValidationOutcome */
export type ValidationOutcome =
  | {
      readonly ok: true;
      readonly validatedAt: string;
    }
  | {
      readonly ok: false;
      readonly validatedAt: string;
      readonly failure: NormalizedFailure;
    };

/** 6. ExecutionState — see union above */

/** 7. ExternalResult */
export type ExternalResult =
  | {
      readonly kind: "success";
      readonly completeness: Completeness;
      readonly redactedSummary: string;
      readonly rawPresent: false;
    }
  | {
      readonly kind: "failure";
      readonly failure: NormalizedFailure;
    }
  | {
      readonly kind: "empty";
    };

/** 8. ExecutionEvidence */
export type ExecutionEvidence = {
  readonly evidenceId: string;
  readonly runId: string;
  readonly correlationId: string;
  readonly source: ExecutionSource;
  readonly completeness: Completeness;
  readonly producedAt: string;
  readonly digest?: string;
  readonly summary: string;
  readonly late: boolean;
  readonly official: true;
};

/** 9. SourceDisclosure */
export type SourceDisclosure = {
  readonly source: ExecutionSource;
  readonly providerLane: ProviderLane;
  readonly limits: readonly string[];
  readonly processLocalMemory: boolean;
  readonly cursorUnverified: boolean;
};

/** 10. HumanDecisionGate */
export type HumanDecisionGate = {
  readonly gateId: string;
  readonly question: string;
  readonly required: boolean;
  readonly decision?: "approve" | "reject" | "cancel";
  readonly decidedAt?: string;
  readonly expiresAt?: string;
};

/** 11. UsageSummary */
export type UsageSummary =
  | {
      readonly status: "validated";
      readonly inputTokens?: number;
      readonly outputTokens?: number;
      readonly unit?: string;
    }
  | {
      readonly status: "unavailable";
      readonly reason: string;
    };

/** 12. NormalizedFailure */
export type NormalizedFailure = {
  readonly family: FailureFamily;
  readonly code: FailureCode;
  readonly userMessage: string;
  readonly technicalDetailsRedacted: true;
  readonly retryable: boolean;
  readonly correlationId: string;
};

/** 5. ExecutionRun — aggregate holding state authority fields */
export type ExecutionRun = {
  readonly schemaVersion: typeof EXECUTION_RUN_SCHEMA_VERSION;
  readonly runId: string;
  readonly correlationId: string;
  readonly state: ExecutionState;
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly disclosure: SourceDisclosure;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly version: number;
  readonly validation?: ValidationOutcome;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gate?: HumanDecisionGate;
  readonly externalResult?: ExternalResult;
  readonly evidence?: readonly ExecutionEvidence[];
  readonly usage: UsageSummary;
  readonly failure?: NormalizedFailure;
  readonly blockedReason?: string;
  /** Process-local memory disclosure (STORE-B stage 1). */
  readonly persistence: {
    readonly kind: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
  };
};

export function isTerminalState(state: ExecutionState): state is TerminalExecutionState {
  return (TERMINAL_STATES as readonly string[]).includes(state);
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts`

```ts
/**
 * Deterministic D2-D1 fixture catalogue — source always fixture.
 */
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { normalizedFailure } from "../domain/errors";

export type FixtureScenarioId =
  | "nominal"
  | "validation_failure"
  | "auth_failure"
  | "provider_unavailable"
  | "rate_limit"
  | "timeout"
  | "cancellation"
  | "blocked_gate"
  | "protected_path"
  | "mutation_forbidden"
  | "partial_result"
  | "invalid_provider_result"
  | "late_result"
  | "secret_redaction"
  | "source_mismatch";

export type FixtureScenario = {
  readonly id: FixtureScenarioId;
  readonly source: "fixture";
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly expectedFailure?: NormalizedFailure;
  readonly notes: string;
};

const baseContext = (over: Partial<ExecutionContext> = {}): ExecutionContext => ({
  projectId: "project:d2d1-fixture",
  actorId: "actor:fixture",
  declaredSource: "fixture",
  protectedPaths: [".env", "secrets"],
  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
  ...over,
});

const baseIntent = (over: Partial<ExecutionIntent> = {}): ExecutionIntent => ({
  intentId: "intent:fixture:base",
  correlationId: "corr:fixture:base",
  requestedLane: "ai",
  operation: "summarize_read_only",
  requestedSource: "fixture",
  requiresHumanGate: false,
  mutationRequested: false,
  arbitraryCommandRequested: false,
  ...over,
});

const aiCapability: ProviderCapabilityDescriptor = {
  lane: "ai",
  capabilityId: "ai:fixture",
  available: true,
  verified: true,
  readOnly: true,
  supportsCancellation: true,
  supportsTimeout: true,
};

export const FIXTURE_CATALOGUE: readonly FixtureScenario[] = [
  {
    id: "nominal",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:nominal", correlationId: "corr:fixture:nominal" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Happy path idle→running→succeeded",
  },
  {
    id: "validation_failure",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:validation",
      correlationId: "corr:fixture:validation",
      operation: "",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid operation empty — schema deny",
  },
  {
    id: "auth_failure",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:auth", correlationId: "corr:fixture:auth", requestedLane: "git" }),
    context: baseContext({ permissions: { gitRead: false, gitWrite: false, providerInvoke: false } }),
    capability: { ...aiCapability, lane: "git", capabilityId: "git:fixture" },
    expectedFailure: normalizedFailure({
      family: "authorization",
      code: "AUTHORIZATION_ERROR",
      userMessage: "Insufficient permission for Git read",
      retryable: true,
      correlationId: "corr:fixture:auth",
    }),
    notes: "Authorization deny",
  },
  {
    id: "provider_unavailable",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:unavail", correlationId: "corr:fixture:unavail" }),
    context: baseContext(),
    capability: { ...aiCapability, available: false },
    notes: "Provider unavailable",
  },
  {
    id: "rate_limit",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:rate", correlationId: "corr:fixture:rate" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "rate_limited",
      code: "RATE_LIMITED",
      userMessage: "Provider rate limited",
      retryable: true,
      correlationId: "corr:fixture:rate",
    }),
    notes: "Represents rate limit failure object",
  },
  {
    id: "timeout",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:timeout", correlationId: "corr:fixture:timeout" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→timed_out",
  },
  {
    id: "cancellation",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:cancel", correlationId: "corr:fixture:cancel" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→cancelled",
  },
  {
    id: "blocked_gate",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:gate",
      correlationId: "corr:fixture:gate",
      requiresHumanGate: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Human gate required blocks engagement when unsatisfied",
  },
  {
    id: "protected_path",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:path",
      correlationId: "corr:fixture:path",
      targetPath: ".env/token",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Protected path deny",
  },
  {
    id: "mutation_forbidden",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mutate",
      correlationId: "corr:fixture:mutate",
      mutationRequested: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Mutation forbidden",
  },
  {
    id: "partial_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:partial", correlationId: "corr:fixture:partial" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Partial never succeeded",
  },
  {
    id: "invalid_provider_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:invalid", correlationId: "corr:fixture:invalid" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid provider result → failed",
  },
  {
    id: "late_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:late", correlationId: "corr:fixture:late" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Late result evidence-only",
  },
  {
    id: "secret_redaction",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:secret", correlationId: "corr:fixture:secret" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "authentication",
      code: "AUTHENTICATION_ERROR",
      userMessage: "Credentials unavailable",
      retryable: true,
      correlationId: "corr:fixture:secret",
    }),
    notes: "Failure object never carries secrets",
  },
  {
    id: "source_mismatch",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mismatch",
      correlationId: "corr:fixture:mismatch",
      requestedSource: "real",
    }),
    context: baseContext({ declaredSource: "fixture" }),
    capability: aiCapability,
    notes: "Source mismatch deny",
  },
] as const;

export function getFixture(id: FixtureScenarioId): FixtureScenario {
  const found = FIXTURE_CATALOGUE.find((f) => f.id === id);
  if (!found) throw new Error(`missing_fixture:${id}`);
  return found;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/index.ts`

```ts
/**
 * D2-D1 OA execution-run public barrel.
 * Sole D2-D technical state authority — memory/fixture-first only.
 * Concrete server composition is NOT exported here — use ./server.
 */
export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
export type {
  Completeness,
  ExecutionContext,
  ExecutionEvidence,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  ExecutionState,
  ExternalResult,
  FailureCode,
  FailureFamily,
  HumanDecisionGate,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
  ValidationOutcome,
} from "./domain/types";
export { normalizedFailure } from "./domain/errors";
export {
  decideTransition,
  isAllowedTransition,
  listAllowedTransitions,
} from "./domain/transitions";
export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
export { evaluateReadOnlyPolicy } from "./domain/policy";
export type { PolicyDecision, PolicyInput } from "./domain/policy";
export {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "./domain/evidence";
export {
  canAcceptLateResult,
  checkExecutionRunInvariants,
  LATE_RESULT_ELIGIBLE_STATES,
} from "./domain/invariants";
export { createExecutionRun } from "./application/createExecutionRun";
export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
export { transitionExecutionRun } from "./application/transitionExecutionRun";
export type {
  TransitionExecutionRunInput,
  TransitionExecutionRunResult,
} from "./application/transitionExecutionRun";
export { persistExecutionRun } from "./application/persistExecutionRun";
export type { PersistExecutionRunResult } from "./application/persistExecutionRun";
export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
export type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
} from "./ports/executionRunSchemaValidation";
export type { ClockPort } from "./ports/clockPort";
export type { IdentityPort } from "./ports/identityPort";
export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts`

```ts
/**
 * AJV Draft-07 boundary validation for D2-D1 — infrastructure only.
 * Domain/application must not import this module.
 */
import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";
import type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
  ExecutionRunSchemaValidationResult,
} from "../ports/executionRunSchemaValidation";

const MAX_ERRORS = 20;

const SCHEMA_FILES: Record<ExecutionRunSchemaName, string> = {
  "execution-intent": "execution-intent.schema.json",
  "execution-context": "execution-context.schema.json",
  "provider-capability-descriptor": "provider-capability-descriptor.schema.json",
  "validation-outcome": "validation-outcome.schema.json",
  "execution-run": "execution-run.schema.json",
  "external-result": "external-result.schema.json",
  "execution-evidence": "execution-evidence.schema.json",
  "source-disclosure": "source-disclosure.schema.json",
  "human-decision-gate": "human-decision-gate.schema.json",
  "usage-summary": "usage-summary.schema.json",
  "normalized-failure": "normalized-failure.schema.json",
  "create-execution-run-input": "create-execution-run-input.schema.json",
  "transition-execution-run-input": "transition-execution-run-input.schema.json",
};

const SCHEMA_IDS: Record<ExecutionRunSchemaName, string> = {
  "execution-intent":
    "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
  "execution-context":
    "https://sfia.local/schemas/d2-d1/execution-context.schema.json",
  "provider-capability-descriptor":
    "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json",
  "validation-outcome":
    "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json",
  "execution-run": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
  "external-result":
    "https://sfia.local/schemas/d2-d1/external-result.schema.json",
  "execution-evidence":
    "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
  "source-disclosure":
    "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
  "human-decision-gate":
    "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json",
  "usage-summary": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json",
  "normalized-failure":
    "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
  "create-execution-run-input":
    "https://sfia.local/schemas/d2-d1/create-execution-run-input.schema.json",
  "transition-execution-run-input":
    "https://sfia.local/schemas/d2-d1/transition-execution-run-input.schema.json",
};

/** Deterministic load order: leaves before composites that $ref them. */
const LOAD_ORDER: readonly ExecutionRunSchemaName[] = [
  "normalized-failure",
  "execution-intent",
  "execution-context",
  "provider-capability-descriptor",
  "validation-outcome",
  "external-result",
  "execution-evidence",
  "source-disclosure",
  "human-decision-gate",
  "usage-summary",
  "execution-run",
  "create-execution-run-input",
  "transition-execution-run-input",
];

export class AjvExecutionRunSchemaValidation
  implements ExecutionRunSchemaValidationPort
{
  private readonly ajv: Ajv.Ajv;
  private ready = false;
  private readonly schemasDir: string;

  constructor(schemasDir?: string) {
    this.schemasDir = schemasDir ?? path.join(__dirname, "../schemas");
    this.ajv = new Ajv({
      allErrors: true,
      schemaId: "auto",
      meta: true,
      validateSchema: true,
      format: "full",
      unknownFormats: "ignore",
    });
  }

  private ensureLoaded(): void {
    if (this.ready) return;
    for (const name of LOAD_ORDER) {
      const file = SCHEMA_FILES[name];
      const full = path.join(this.schemasDir, file);
      const raw = JSON.parse(fs.readFileSync(full, "utf8")) as object;
      this.ajv.addSchema(raw);
    }
    this.ready = true;
  }

  /** Test helper: confirms every named schema compiled and resolves. */
  listLoadedSchemaIds(): string[] {
    this.ensureLoaded();
    return LOAD_ORDER.map((name) => SCHEMA_IDS[name]);
  }

  async validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult> {
    try {
      if (value === null || value === undefined) {
        return { ok: false, errors: ["value_null_or_undefined"] };
      }
      this.ensureLoaded();
      const validate = this.ajv.getSchema(SCHEMA_IDS[schema]);
      if (!validate) {
        return { ok: false, errors: ["schema_not_loaded"] };
      }
      const ok = validate(value) as boolean;
      if (ok) return { ok: true };
      const errors = (validate.errors ?? [])
        .slice(0, MAX_ERRORS)
        .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
      return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
    } catch {
      return { ok: false, errors: ["schema_validation_internal_failure"] };
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts`

```ts
import type { ClockPort } from "../ports/clockPort";

export class FixedClock implements ClockPort {
  constructor(private readonly iso: string) {}
  nowIso(): string {
    return this.iso;
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts`

```ts
import type { ExecutionRun } from "../domain/types";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { MemoryExecutionRunStore } from "./memoryExecutionRunStore";

export class MemoryExecutionRunRepository implements ExecutionRunRepositoryPort {
  constructor(private readonly store: MemoryExecutionRunStore) {}

  async save(run: ExecutionRun): Promise<void> {
    this.store.runs.set(run.runId, structuredClone(run));
  }

  async getById(runId: string): Promise<ExecutionRun | null> {
    const found = this.store.runs.get(runId);
    return found ? structuredClone(found) : null;
  }

  async listByCorrelationId(correlationId: string): Promise<ExecutionRun[]> {
    const out: ExecutionRun[] = [];
    for (const run of this.store.runs.values()) {
      if (run.correlationId === correlationId) {
        out.push(structuredClone(run));
      }
    }
    out.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.runId.localeCompare(b.runId));
    return out;
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts`

```ts
import type { ExecutionRun } from "../domain/types";

export class MemoryExecutionRunStore {
  readonly runs = new Map<string, ExecutionRun>();
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts`

```ts
import type { IdentityPort } from "../ports/identityPort";

export class SequentialIdentity implements IdentityPort {
  private run = 0;
  private evidence = 0;
  private intent = 0;

  nextRunId(): string {
    this.run += 1;
    return `executionrun:d2d1:${String(this.run).padStart(4, "0")}`;
  }

  nextEvidenceId(): string {
    this.evidence += 1;
    return `evidence:d2d1:${String(this.evidence).padStart(4, "0")}`;
  }

  nextIntentId(): string {
    this.intent += 1;
    return `intent:d2d1:${String(this.intent).padStart(4, "0")}`;
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts`

```ts
export interface ClockPort {
  nowIso(): string;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts`

```ts
import type { ExecutionRun } from "../domain/types";

export interface ExecutionRunRepositoryPort {
  save(run: ExecutionRun): Promise<void>;
  getById(runId: string): Promise<ExecutionRun | null>;
  listByCorrelationId(correlationId: string): Promise<ExecutionRun[]>;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts`

```ts
export type ExecutionRunSchemaValidationSuccess = { ok: true };
export type ExecutionRunSchemaValidationFailure = {
  ok: false;
  errors: string[];
};
export type ExecutionRunSchemaValidationResult =
  | ExecutionRunSchemaValidationSuccess
  | ExecutionRunSchemaValidationFailure;

export type ExecutionRunSchemaName =
  | "execution-intent"
  | "execution-context"
  | "provider-capability-descriptor"
  | "validation-outcome"
  | "execution-run"
  | "external-result"
  | "execution-evidence"
  | "source-disclosure"
  | "human-decision-gate"
  | "usage-summary"
  | "normalized-failure"
  | "create-execution-run-input"
  | "transition-execution-run-input";

export interface ExecutionRunSchemaValidationPort {
  /**
   * Fail-closed validation before any metadata exploitation.
   * Must not throw raw AJV exceptions to callers.
   */
  validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult>;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts`

```ts
export interface IdentityPort {
  nextRunId(): string;
  nextEvidenceId(): string;
  nextIntentId(): string;
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/create-execution-run-input.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": ["intent", "context"],
  "properties": {
    "intent": {
      "$ref": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json"
    },
    "context": {
      "$ref": "https://sfia.local/schemas/d2-d1/execution-context.schema.json"
    },
    "capability": {
      "$ref": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json"
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-context.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "projectId",
    "actorId",
    "declaredSource",
    "permissions"
  ],
  "properties": {
    "projectId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "workspaceId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "actorId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "declaredSource": {
      "type": "string",
      "enum": ["fixture", "sandbox-real", "real"]
    },
    "allowlistRepos": {
      "type": "array",
      "maxItems": 64,
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 1024
      }
    },
    "protectedPaths": {
      "type": "array",
      "maxItems": 64,
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 1024
      }
    },
    "permissions": {
      "type": "object",
      "additionalProperties": false,
      "required": ["gitRead", "gitWrite", "providerInvoke"],
      "properties": {
        "gitRead": { "type": "boolean" },
        "gitWrite": { "type": "boolean" },
        "providerInvoke": { "type": "boolean" }
      }
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "evidenceId",
    "runId",
    "correlationId",
    "source",
    "completeness",
    "producedAt",
    "summary",
    "late",
    "official"
  ],
  "properties": {
    "evidenceId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "runId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "correlationId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "source": {
      "type": "string",
      "enum": ["fixture", "sandbox-real", "real"]
    },
    "completeness": {
      "type": "string",
      "enum": ["complete", "partial"]
    },
    "producedAt": {
      "type": "string",
      "format": "date-time"
    },
    "digest": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "summary": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2048
    },
    "late": {
      "type": "boolean"
    },
    "official": {
      "type": "boolean",
      "const": true
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "intentId",
    "correlationId",
    "requestedLane",
    "operation",
    "requestedSource",
    "requiresHumanGate",
    "mutationRequested",
    "arbitraryCommandRequested"
  ],
  "properties": {
    "intentId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "correlationId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "requestedLane": {
      "type": "string",
      "enum": ["ai", "git", "cursor", "none"]
    },
    "operation": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "requestedSource": {
      "type": "string",
      "enum": ["fixture", "sandbox-real", "real"]
    },
    "requiresHumanGate": {
      "type": "boolean"
    },
    "mutationRequested": {
      "type": "boolean"
    },
    "arbitraryCommandRequested": {
      "type": "boolean"
    },
    "targetPath": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "metadata": {
      "type": "object"
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
  "allOf": [
    {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "schemaVersion",
        "runId",
        "correlationId",
        "state",
        "intent",
        "context",
        "disclosure",
        "createdAt",
        "updatedAt",
        "version",
        "usage",
        "persistence"
      ],
      "properties": {
        "schemaVersion": {
          "type": "string",
          "const": "0.1.0-d2d1"
        },
        "runId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 256
        },
        "correlationId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 256
        },
        "state": {
          "type": "string",
          "enum": [
            "idle",
            "running",
            "awaiting_human",
            "succeeded",
            "failed",
            "cancelled",
            "timed_out",
            "blocked"
          ]
        },
        "intent": {
          "$ref": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json"
        },
        "context": {
          "$ref": "https://sfia.local/schemas/d2-d1/execution-context.schema.json"
        },
        "disclosure": {
          "$ref": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        },
        "version": {
          "type": "integer",
          "minimum": 1
        },
        "validation": {
          "$ref": "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json"
        },
        "capability": {
          "$ref": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json"
        },
        "gate": {
          "$ref": "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json"
        },
        "externalResult": {
          "$ref": "https://sfia.local/schemas/d2-d1/external-result.schema.json"
        },
        "evidence": {
          "type": "array",
          "maxItems": 64,
          "items": {
            "$ref": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json"
          }
        },
        "usage": {
          "$ref": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json"
        },
        "failure": {
          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
        },
        "blockedReason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 512
        },
        "persistence": {
          "type": "object",
          "additionalProperties": false,
          "required": ["kind", "durable", "multiInstance", "restartSafe"],
          "properties": {
            "kind": { "const": "memory_process_local" },
            "durable": { "const": false },
            "multiInstance": { "const": false },
            "restartSafe": { "const": false }
          }
        }
      }
    },
    {
      "if": {
        "properties": { "state": { "const": "succeeded" } },
        "required": ["state"]
      },
      "then": {
        "required": ["externalResult", "evidence"],
        "properties": {
          "externalResult": {
            "type": "object",
            "additionalProperties": false,
            "required": ["kind", "completeness", "redactedSummary", "rawPresent"],
            "properties": {
              "kind": { "const": "success" },
              "completeness": { "const": "complete" },
              "redactedSummary": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
              },
              "rawPresent": { "const": false }
            }
          },
          "evidence": {
            "type": "array",
            "minItems": 1,
            "maxItems": 64,
            "items": {
              "$ref": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json"
            }
          }
        }
      }
    },
    {
      "if": {
        "properties": { "state": { "const": "failed" } },
        "required": ["state"]
      },
      "then": {
        "required": ["failure"]
      }
    },
    {
      "if": {
        "properties": { "state": { "const": "blocked" } },
        "required": ["state"]
      },
      "then": {
        "anyOf": [
          { "required": ["failure"] },
          {
            "required": ["blockedReason"],
            "properties": {
              "blockedReason": {
                "type": "string",
                "minLength": 1
              }
            }
          }
        ]
      }
    }
  ]
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/external-result.schema.json",
  "oneOf": [
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["kind", "completeness", "redactedSummary", "rawPresent"],
      "properties": {
        "kind": { "const": "success" },
        "completeness": {
          "type": "string",
          "enum": ["complete", "partial"]
        },
        "redactedSummary": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2048
        },
        "rawPresent": { "const": false }
      }
    },
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["kind", "failure"],
      "properties": {
        "kind": { "const": "failure" },
        "failure": {
          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
        }
      }
    },
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["kind"],
      "properties": {
        "kind": { "const": "empty" }
      }
    }
  ]
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": ["gateId", "question", "required"],
  "properties": {
    "gateId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "question": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2048
    },
    "required": { "type": "boolean" },
    "decision": {
      "type": "string",
      "enum": ["approve", "reject", "cancel"]
    },
    "decidedAt": {
      "type": "string",
      "format": "date-time"
    },
    "expiresAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "family",
    "code",
    "userMessage",
    "technicalDetailsRedacted",
    "retryable",
    "correlationId"
  ],
  "properties": {
    "family": {
      "type": "string",
      "enum": [
        "validation",
        "authentication",
        "authorization",
        "provider_unavailable",
        "rate_limited",
        "timed_out",
        "cancelled",
        "sandbox_blocked",
        "protected_path",
        "mutation_forbidden",
        "human_gate_required",
        "invalid_provider_result",
        "internal_normalized_failure",
        "source_mismatch"
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "VALIDATION_ERROR",
        "AUTHENTICATION_ERROR",
        "AUTHORIZATION_ERROR",
        "PROVIDER_UNAVAILABLE",
        "RATE_LIMITED",
        "TIMED_OUT",
        "CANCELLED",
        "SANDBOX_BLOCKED",
        "PROTECTED_PATH",
        "MUTATION_FORBIDDEN",
        "HUMAN_GATE_REQUIRED",
        "INVALID_PROVIDER_RESULT",
        "INTERNAL_NORMALIZED_FAILURE",
        "SOURCE_MISMATCH"
      ]
    },
    "userMessage": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2048
    },
    "technicalDetailsRedacted": {
      "type": "boolean",
      "const": true
    },
    "retryable": {
      "type": "boolean"
    },
    "correlationId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "lane",
    "capabilityId",
    "available",
    "verified",
    "readOnly",
    "supportsCancellation",
    "supportsTimeout"
  ],
  "properties": {
    "lane": {
      "type": "string",
      "enum": ["ai", "git", "cursor", "none"]
    },
    "capabilityId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "available": { "type": "boolean" },
    "verified": { "type": "boolean" },
    "readOnly": { "type": "boolean" },
    "supportsCancellation": { "type": "boolean" },
    "supportsTimeout": { "type": "boolean" }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "source",
    "providerLane",
    "limits",
    "processLocalMemory",
    "cursorUnverified"
  ],
  "properties": {
    "source": {
      "type": "string",
      "enum": ["fixture", "sandbox-real", "real"]
    },
    "providerLane": {
      "type": "string",
      "enum": ["ai", "git", "cursor", "none"]
    },
    "limits": {
      "type": "array",
      "maxItems": 64,
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 256
      }
    },
    "processLocalMemory": {
      "type": "boolean",
      "const": true
    },
    "cursorUnverified": {
      "type": "boolean"
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/transition-execution-run-input.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": ["runId", "reason"],
  "properties": {
    "runId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "reason": {
      "type": "string",
      "enum": [
        "intent_valid",
        "pre_engagement_block",
        "human_gate_required",
        "outputs_validated",
        "engaged_operation_failed",
        "time_limit",
        "cancel_accepted",
        "human_approve",
        "human_cancel",
        "human_reject_or_unsatisfied",
        "human_gate_expired",
        "late_result_evidence_only",
        "forbidden"
      ]
    },
    "completeness": {
      "type": "string",
      "enum": ["complete", "partial"]
    },
    "externalResult": {
      "$ref": "https://sfia.local/schemas/d2-d1/external-result.schema.json"
    },
    "failure": {
      "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
    },
    "blockingReason": {
      "type": "string",
      "minLength": 1,
      "maxLength": 512
    },
    "lateEvidenceSummary": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2048
    }
  },
  "allOf": [
    {
      "if": {
        "properties": { "reason": { "const": "outputs_validated" } },
        "required": ["reason"]
      },
      "then": {
        "required": ["completeness", "externalResult"]
      }
    },
    {
      "if": {
        "properties": { "reason": { "const": "engaged_operation_failed" } },
        "required": ["reason"]
      },
      "then": {
        "required": ["failure"]
      }
    },
    {
      "if": {
        "properties": { "reason": { "const": "late_result_evidence_only" } },
        "required": ["reason"]
      },
      "then": {
        "required": ["lateEvidenceSummary"]
      }
    }
  ]
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json",
  "oneOf": [
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["status"],
      "properties": {
        "status": { "const": "validated" },
        "inputTokens": {
          "type": "integer",
          "minimum": 0
        },
        "outputTokens": {
          "type": "integer",
          "minimum": 0
        },
        "unit": {
          "type": "string",
          "minLength": 1,
          "maxLength": 64
        }
      }
    },
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["status", "reason"],
      "properties": {
        "status": { "const": "unavailable" },
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 512
        }
      }
    }
  ]
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json",
  "oneOf": [
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["ok", "validatedAt"],
      "properties": {
        "ok": { "const": true },
        "validatedAt": {
          "type": "string",
          "format": "date-time",
          "minLength": 1
        }
      }
    },
    {
      "type": "object",
      "additionalProperties": false,
      "required": ["ok", "validatedAt", "failure"],
      "properties": {
        "ok": { "const": false },
        "validatedAt": {
          "type": "string",
          "format": "date-time",
          "minLength": 1
        },
        "failure": {
          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
        }
      }
    }
  ]
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts`

```ts
/**
 * Server-only concrete composition for D2-D1 execution-run.
 * Assembles memory store + AJV + clock + identity. Not exported from root barrel.
 */
import { assertServerOnly } from "./serverOnly";
import { AjvExecutionRunSchemaValidation } from "../infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "../infrastructure/fixedClock";
import { MemoryExecutionRunRepository } from "../infrastructure/memoryExecutionRunRepository";
import { MemoryExecutionRunStore } from "../infrastructure/memoryExecutionRunStore";
import { SequentialIdentity } from "../infrastructure/sequentialIdentity";
import {
  createExecutionRun,
  type CreateExecutionRunResult,
} from "../application/createExecutionRun";
import {
  transitionExecutionRun,
  type TransitionExecutionRunResult,
} from "../application/transitionExecutionRun";
import type { ExecutionRun } from "../domain/types";

assertServerOnly("oa/execution-run/server");

export type ExecutionRunServerComposition = {
  createExecutionRun: (input: unknown) => Promise<CreateExecutionRunResult>;
  transitionExecutionRun: (
    input: unknown,
  ) => Promise<TransitionExecutionRunResult>;
  getById: (runId: string) => Promise<ExecutionRun | null>;
  listByCorrelationId: (correlationId: string) => Promise<ExecutionRun[]>;
  disclosure: {
    persistence: "memory_process_local";
    durable: false;
    multiInstance: false;
    restartSafe: false;
  };
};

/**
 * Concrete memory process-local composition. Read helpers only; writes go through
 * create/transition which enforce invariant + schema guards before save.
 */
export function composeExecutionRunMemory(options?: {
  clockIso?: string;
}): ExecutionRunServerComposition {
  const store = new MemoryExecutionRunStore();
  const clock = new FixedClock(options?.clockIso ?? "2026-08-03T20:00:00.000Z");
  const identity = new SequentialIdentity();
  const repository = new MemoryExecutionRunRepository(store);
  const schemas = new AjvExecutionRunSchemaValidation();
  const deps = { clock, identity, repository, schemas };
  return {
    createExecutionRun: (input) => createExecutionRun(input, deps),
    transitionExecutionRun: (input) => transitionExecutionRun(input, deps),
    getById: (runId) => repository.getById(runId),
    listByCorrelationId: (correlationId) =>
      repository.listByCorrelationId(correlationId),
    disclosure: {
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts`

```ts
/**
 * Explicit server entrypoint for D2-D1 execution-run concrete composition.
 * Client surfaces must not import this module.
 */
export {
  composeExecutionRunMemory,
  type ExecutionRunServerComposition,
} from "./composeExecutionRunMemory";
export { assertServerOnly } from "./serverOnly";
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts`

```ts
/**
 * Lightweight server-only guard without adding a package.json dependency.
 * Mirrors the repository convention used by vertical-slice-runtime without
 * importing that module (D2-D1 facade integration deferred).
 */
export function assertServerOnly(moduleName = "oa/execution-run/server"): void {
  if (typeof window !== "undefined") {
    throw new Error(
      `${moduleName} is server-only and must not run in a browser context.`,
    );
  }
}
```

## Diff final complet (main baseline → package local)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts
@@ -0,0 +1,127 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it, vi } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
+import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
+import { createExecutionRun } from "@/lib/oa/execution-run";
+import { getFixture } from "@/lib/oa/execution-run";
+import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+function deps(repo: ExecutionRunRepositoryPort) {
+  return {
+    clock: new FixedClock("2026-08-03T20:00:00.000Z"),
+    identity: new SequentialIdentity(),
+    repository: repo,
+    schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+  };
+}
+
+describe("D2-D1 create boundary validation before metadata", () => {
+  it("rejects null/undefined/primitive/array without save or identity", async () => {
+    const save = vi.fn();
+    const getById = vi.fn();
+    const listByCorrelationId = vi.fn();
+    const identity = new SequentialIdentity();
+    const nextRunId = vi.spyOn(identity, "nextRunId");
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById,
+      listByCorrelationId,
+    };
+    const base = {
+      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
+      identity,
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    };
+    for (const bad of [null, undefined, 42, "x", [], true]) {
+      const r = await createExecutionRun(bad, base);
+      expect(r.ok).toBe(false);
+    }
+    expect(save).not.toHaveBeenCalled();
+    expect(nextRunId).not.toHaveBeenCalled();
+  });
+
+  it("rejects incomplete object and additional properties", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const d = deps(repository);
+    expect((await createExecutionRun({ intent: getFixture("nominal").intent }, d)).ok).toBe(
+      false,
+    );
+    expect(
+      (
+        await createExecutionRun(
+          {
+            intent: getFixture("nominal").intent,
+            context: getFixture("nominal").context,
+            extra: true,
+          },
+          d,
+        )
+      ).ok,
+    ).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("rejects invalid nested context permissions and capability", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const d = deps(repository);
+    const f = getFixture("nominal");
+    expect(
+      (
+        await createExecutionRun(
+          {
+            intent: f.intent,
+            context: {
+              ...f.context,
+              permissions: { gitRead: true, gitWrite: false } as never,
+            },
+          },
+          d,
+        )
+      ).ok,
+    ).toBe(false);
+    expect(
+      (
+        await createExecutionRun(
+          {
+            intent: f.intent,
+            context: f.context,
+            capability: { ...f.capability!, lane: "openai" as never },
+          },
+          d,
+        )
+      ).ok,
+    ).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("does not throw on adversarial payloads", async () => {
+    const repository: ExecutionRunRepositoryPort = {
+      save: async () => undefined,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    await expect(
+      createExecutionRun({ circular: null }, deps(repository)),
+    ).resolves.toMatchObject({ ok: false });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts
@@ -0,0 +1,111 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it, vi } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
+import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
+import { transitionExecutionRun, normalizedFailure } from "@/lib/oa/execution-run";
+import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+describe("D2-D1 transition boundary validation before metadata", () => {
+  it("rejects invalid input before repository lookup", async () => {
+    const getById = vi.fn();
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById,
+      listByCorrelationId: async () => [],
+    };
+    const deps = {
+      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
+      identity: new SequentialIdentity(),
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    };
+    for (const bad of [
+      null,
+      undefined,
+      1,
+      [],
+      {},
+      { runId: "r1" },
+      { runId: "r1", reason: "not_a_reason" },
+      { runId: "r1", reason: "outputs_validated", completeness: "complete" },
+      {
+        runId: "r1",
+        reason: "engaged_operation_failed",
+      },
+      {
+        runId: "r1",
+        reason: "intent_valid",
+        extra: true,
+      },
+    ]) {
+      const r = await transitionExecutionRun(bad, deps);
+      expect(r.ok).toBe(false);
+    }
+    expect(getById).not.toHaveBeenCalled();
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("rejects invalid externalResult / failure payloads before save", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const deps = {
+      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
+      identity: new SequentialIdentity(),
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    };
+    const badExternal = await transitionExecutionRun(
+      {
+        runId: "r1",
+        reason: "outputs_validated",
+        completeness: "complete",
+        externalResult: { kind: "success", completeness: "complete" },
+      },
+      deps,
+    );
+    expect(badExternal.ok).toBe(false);
+    const badFailure = await transitionExecutionRun(
+      {
+        runId: "r1",
+        reason: "engaged_operation_failed",
+        failure: {
+          family: "validation",
+          code: "NOT_A_CODE",
+          userMessage: "x",
+          technicalDetailsRedacted: true,
+          retryable: false,
+          correlationId: "c",
+        },
+      },
+      deps,
+    );
+    expect(badFailure.ok).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("accepts schema-valid failure enum", async () => {
+    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
+    const failure = normalizedFailure({
+      family: "provider_unavailable",
+      code: "PROVIDER_UNAVAILABLE",
+      userMessage: "unavailable",
+      retryable: true,
+      correlationId: "c1",
+    });
+    expect((await schemas.validate("normalized-failure", failure)).ok).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts
@@ -0,0 +1,221 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import {
+  createOfficialEvidence,
+  createSourceDisclosure,
+  getFixture,
+  normalizedFailure,
+  usageUnavailable,
+  EXECUTION_RUN_SCHEMA_VERSION,
+} from "@/lib/oa/execution-run";
+import type { ExecutionRunSchemaName } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+const ALL: ExecutionRunSchemaName[] = [
+  "execution-intent",
+  "execution-context",
+  "provider-capability-descriptor",
+  "validation-outcome",
+  "execution-run",
+  "external-result",
+  "execution-evidence",
+  "source-disclosure",
+  "human-decision-gate",
+  "usage-summary",
+  "normalized-failure",
+  "create-execution-run-input",
+  "transition-execution-run-input",
+];
+
+describe("D2-D1 contract-equivalent schemas", () => {
+  const validator = new AjvExecutionRunSchemaValidation(schemasDir);
+
+  it("loads and resolves all schemas", () => {
+    const ids = validator.listLoadedSchemaIds();
+    expect(ids).toHaveLength(ALL.length);
+  });
+
+  it("accepts valid fixtures for each core object", async () => {
+    const f = getFixture("nominal");
+    expect((await validator.validate("execution-intent", f.intent)).ok).toBe(true);
+    expect((await validator.validate("execution-context", f.context)).ok).toBe(true);
+    expect(
+      (await validator.validate("provider-capability-descriptor", f.capability)).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("normalized-failure", normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "bad",
+          retryable: true,
+          correlationId: "c",
+        }))
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate(
+          "source-disclosure",
+          createSourceDisclosure({ source: "fixture", providerLane: "ai" }),
+        )
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate(
+          "execution-evidence",
+          createOfficialEvidence({
+            evidenceId: "e1",
+            runId: "r1",
+            correlationId: "c1",
+            source: "fixture",
+            completeness: "complete",
+            producedAt: "2026-08-03T20:00:00.000Z",
+            summary: "ok",
+          }),
+        )
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("external-result", {
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "ok",
+          rawPresent: false,
+        })
+      ).ok,
+    ).toBe(true);
+    expect(
+      (await validator.validate("usage-summary", usageUnavailable("x"))).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("human-decision-gate", {
+          gateId: "g1",
+          question: "proceed?",
+          required: true,
+        })
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("validation-outcome", {
+          ok: true,
+          validatedAt: "2026-08-03T20:00:00.000Z",
+        })
+      ).ok,
+    ).toBe(true);
+  });
+
+  it("rejects missing required, wrong type, additional props, bad enums", async () => {
+    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
+    expect((await validator.validate("execution-intent", 1)).ok).toBe(false);
+    expect(
+      (
+        await validator.validate("execution-intent", {
+          ...getFixture("nominal").intent,
+          extra: true,
+        })
+      ).ok,
+    ).toBe(false);
+    expect(
+      (
+        await validator.validate("execution-intent", {
+          ...getFixture("nominal").intent,
+          requestedLane: "openai",
+        })
+      ).ok,
+    ).toBe(false);
+    expect(
+      (
+        await validator.validate("normalized-failure", {
+          family: "nope",
+          code: "VALIDATION_ERROR",
+          userMessage: "x",
+          technicalDetailsRedacted: true,
+          retryable: false,
+          correlationId: "c",
+        })
+      ).ok,
+    ).toBe(false);
+  });
+
+  it("validates create and transition boundary schemas", async () => {
+    const f = getFixture("nominal");
+    expect(
+      (
+        await validator.validate("create-execution-run-input", {
+          intent: f.intent,
+          context: f.context,
+          capability: f.capability,
+        })
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("transition-execution-run-input", {
+          runId: "run:1",
+          reason: "intent_valid",
+        })
+      ).ok,
+    ).toBe(true);
+    expect(
+      (
+        await validator.validate("transition-execution-run-input", {
+          runId: "run:1",
+          reason: "outputs_validated",
+          completeness: "complete",
+          externalResult: {
+            kind: "success",
+            completeness: "complete",
+            redactedSummary: "ok",
+            rawPresent: false,
+          },
+        })
+      ).ok,
+    ).toBe(true);
+  });
+
+  it("execution-run $refs enforce nested contracts and state conditionals", async () => {
+    const f = getFixture("nominal");
+    const idle: Record<string, unknown> = {
+      schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
+      runId: "run:1",
+      correlationId: f.intent.correlationId,
+      state: "idle",
+      intent: f.intent,
+      context: f.context,
+      disclosure: createSourceDisclosure({ source: "fixture", providerLane: "ai" }),
+      createdAt: "2026-08-03T20:00:00.000Z",
+      updatedAt: "2026-08-03T20:00:00.000Z",
+      version: 1,
+      usage: usageUnavailable("x"),
+      persistence: {
+        kind: "memory_process_local",
+        durable: false,
+        multiInstance: false,
+        restartSafe: false,
+      },
+    };
+    expect((await validator.validate("execution-run", idle)).ok).toBe(true);
+
+    const nestedBad = {
+      ...idle,
+      context: { ...f.context, permissions: { gitRead: true } },
+    };
+    expect((await validator.validate("execution-run", nestedBad)).ok).toBe(false);
+
+    const succeededBare = { ...idle, state: "succeeded" };
+    expect((await validator.validate("execution-run", succeededBare)).ok).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts
@@ -0,0 +1,52 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assertSourceHonest,
+  canSucceed,
+  createOfficialEvidence,
+  createSourceDisclosure,
+  isIsoTimestamp,
+  usageUnavailable,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D1 evidence and disclosure", () => {
+  it("distinguishes sources honestly", () => {
+    expect(assertSourceHonest("fixture", "fixture")).toBe(true);
+    expect(assertSourceHonest("fixture", "real")).toBe(false);
+  });
+
+  it("partial cannot succeed", () => {
+    expect(canSucceed("partial")).toBe(false);
+    expect(canSucceed("complete")).toBe(true);
+  });
+
+  it("creates official evidence without secrets", () => {
+    const e = createOfficialEvidence({
+      evidenceId: "evidence:1",
+      runId: "run:1",
+      correlationId: "corr:1",
+      source: "fixture",
+      completeness: "complete",
+      producedAt: "2026-08-03T20:00:00.000Z",
+      summary: "ok",
+    });
+    expect(e.official).toBe(true);
+    expect(JSON.stringify(e)).not.toMatch(/sk-|password/i);
+  });
+
+  it("marks process-local disclosure", () => {
+    const d = createSourceDisclosure({ source: "fixture", providerLane: "ai" });
+    expect(d.processLocalMemory).toBe(true);
+  });
+
+  it("usage unavailable when not validated", () => {
+    expect(usageUnavailable("missing").status).toBe("unavailable");
+  });
+
+  it("validates ISO timestamps", () => {
+    expect(isIsoTimestamp("2026-08-03T20:00:00.000Z")).toBe(true);
+    expect(isIsoTimestamp("not-a-date")).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -0,0 +1,108 @@
+/**
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.tsx?$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function importsOf(file: string): string[] {
+  return fs
+    .readFileSync(file, "utf8")
+    .split("\n")
+    .map((l) => l.trim())
+    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
+}
+
+describe("D2-D1 execution-run import boundaries", () => {
+  it("domain stays pure", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("application does not import infrastructure, AJV, Node, Next, or providers", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (
+          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
+            line,
+          )
+        ) {
+          hits.push(`${file}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
+    const files = listTsFiles(MODULE_ROOT);
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (
+          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
+            line,
+          )
+        ) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("root barrel does not export concrete composition", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/composeExecutionRunMemory/);
+    expect(barrel).not.toMatch(/MemoryExecutionRunStore/);
+    expect(barrel).not.toMatch(/AjvExecutionRunSchemaValidation/);
+  });
+
+  it("server composition lives under server/ with server-only guard", () => {
+    const serverDir = path.join(MODULE_ROOT, "server");
+    expect(fs.existsSync(serverDir)).toBe(true);
+    const compose = fs.readFileSync(
+      path.join(serverDir, "composeExecutionRunMemory.ts"),
+      "utf8",
+    );
+    expect(compose).toMatch(/assertServerOnly/);
+    expect(compose).toMatch(/infrastructure\//);
+    const guard = fs.readFileSync(path.join(serverDir, "serverOnly.ts"), "utf8");
+    expect(guard).toMatch(/typeof window/);
+  });
+
+  it("application folder no longer hosts concrete composition", () => {
+    expect(
+      fs.existsSync(path.join(MODULE_ROOT, "application/composeExecutionRun.ts")),
+    ).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts
@@ -0,0 +1,177 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
+import {
+  canAcceptLateResult,
+  EXECUTION_STATES,
+  getFixture,
+  LATE_RESULT_ELIGIBLE_STATES,
+  normalizedFailure,
+} from "@/lib/oa/execution-run";
+
+async function runningRun() {
+  const c = composeExecutionRunMemory();
+  const f = getFixture("nominal");
+  const created = await c.createExecutionRun({
+    intent: f.intent,
+    context: f.context,
+    capability: f.capability,
+  });
+  if (!created.ok) throw new Error("create failed");
+  const started = await c.transitionExecutionRun({
+    runId: created.run.runId,
+    reason: "intent_valid",
+  });
+  if (!started.ok) throw new Error("start failed");
+  return { c, run: started.run };
+}
+
+describe("D2-D1 late result eligibility", () => {
+  it("documents eligible terminals", () => {
+    expect([...LATE_RESULT_ELIGIBLE_STATES].sort()).toEqual(
+      ["cancelled", "failed", "timed_out"].sort(),
+    );
+    for (const s of EXECUTION_STATES) {
+      expect(canAcceptLateResult(s)).toBe(
+        (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(s),
+      );
+    }
+  });
+
+  it("refuses idle, running, awaiting_human, succeeded, blocked", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+
+    const idle = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late",
+    });
+    expect(idle.ok).toBe(false);
+
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    const running = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late",
+    });
+    expect(running.ok).toBe(false);
+
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "human_gate_required",
+    });
+    const awaiting = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late",
+    });
+    expect(awaiting.ok).toBe(false);
+
+    // fresh run → succeeded
+    const { c: c2, run } = await runningRun();
+    const succeeded = await c2.transitionExecutionRun({
+      runId: run.runId,
+      reason: "outputs_validated",
+      completeness: "complete",
+      externalResult: {
+        kind: "success",
+        completeness: "complete",
+        redactedSummary: "ok",
+        rawPresent: false,
+      },
+    });
+    expect(succeeded.ok).toBe(true);
+    if (!succeeded.ok) return;
+    const lateOnSuccess = await c2.transitionExecutionRun({
+      runId: run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late",
+    });
+    expect(lateOnSuccess.ok).toBe(false);
+
+    // blocked at create
+    const c3 = composeExecutionRunMemory();
+    const blocked = await c3.createExecutionRun({
+      intent: getFixture("mutation_forbidden").intent,
+      context: getFixture("mutation_forbidden").context,
+      capability: getFixture("mutation_forbidden").capability,
+    });
+    expect(blocked.run?.state).toBe("blocked");
+    if (!blocked.run) return;
+    const lateOnBlocked = await c3.transitionExecutionRun({
+      runId: blocked.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late",
+    });
+    expect(lateOnBlocked.ok).toBe(false);
+  });
+
+  it("accepts cancelled, timed_out, failed with evidence-only mutation", async () => {
+    // cancelled
+    const { c, run } = await runningRun();
+    await c.transitionExecutionRun({
+      runId: run.runId,
+      reason: "cancel_accepted",
+    });
+    const lateCancel = await c.transitionExecutionRun({
+      runId: run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late_cancel",
+    });
+    expect(lateCancel.ok).toBe(true);
+    if (lateCancel.ok) {
+      expect(lateCancel.run.state).toBe("cancelled");
+      expect(lateCancel.run.evidence?.at(-1)?.late).toBe(true);
+      expect(lateCancel.run.evidence?.at(-1)?.official).toBe(true);
+      expect(lateCancel.run.evidence?.at(-1)?.completeness).toBe("partial");
+    }
+
+    // timed_out
+    const r2 = await runningRun();
+    await r2.c.transitionExecutionRun({
+      runId: r2.run.runId,
+      reason: "time_limit",
+    });
+    const lateTimeout = await r2.c.transitionExecutionRun({
+      runId: r2.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late_timeout",
+    });
+    expect(lateTimeout.ok).toBe(true);
+    if (lateTimeout.ok) expect(lateTimeout.run.state).toBe("timed_out");
+
+    // failed
+    const r3 = await runningRun();
+    const failed = await r3.c.transitionExecutionRun({
+      runId: r3.run.runId,
+      reason: "engaged_operation_failed",
+      failure: normalizedFailure({
+        family: "provider_unavailable",
+        code: "PROVIDER_UNAVAILABLE",
+        userMessage: "down",
+        retryable: true,
+        correlationId: r3.run.correlationId,
+      }),
+    });
+    expect(failed.ok).toBe(true);
+    const lateFailed = await r3.c.transitionExecutionRun({
+      runId: r3.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late_failed",
+    });
+    expect(lateFailed.ok).toBe(true);
+    if (lateFailed.ok) expect(lateFailed.run.state).toBe("failed");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts
@@ -0,0 +1,130 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
+import { getFixture } from "@/lib/oa/execution-run";
+
+describe("D2-D1 fixture lifecycle", () => {
+  it("covers required catalogue scenarios", () => {
+    const ids = [
+      "nominal",
+      "validation_failure",
+      "auth_failure",
+      "provider_unavailable",
+      "rate_limit",
+      "timeout",
+      "cancellation",
+      "blocked_gate",
+      "protected_path",
+      "mutation_forbidden",
+      "partial_result",
+      "invalid_provider_result",
+      "late_result",
+      "secret_redaction",
+      "source_mismatch",
+    ] as const;
+    for (const id of ids) {
+      expect(getFixture(id).source).toBe("fixture");
+    }
+  });
+
+  it("runs nominal to succeeded with official evidence", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const started = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    expect(started.ok && started.run.state).toBe("running");
+    if (!started.ok) return;
+    const done = await c.transitionExecutionRun({
+      runId: started.run.runId,
+      reason: "outputs_validated",
+      completeness: "complete",
+      externalResult: {
+        kind: "success",
+        completeness: "complete",
+        redactedSummary: "ok",
+        rawPresent: false,
+      },
+    });
+    expect(done.ok && done.run.state).toBe("succeeded");
+    if (!done.ok) return;
+    expect(done.run.evidence?.some((e) => e.official && !e.late)).toBe(true);
+  });
+
+  it("never succeeds on partial", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("partial_result");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    const done = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "outputs_validated",
+      completeness: "partial",
+      externalResult: {
+        kind: "success",
+        completeness: "partial",
+        redactedSummary: "partial",
+        rawPresent: false,
+      },
+    });
+    expect(done.ok).toBe(false);
+  });
+
+  it("records late evidence without state change on cancelled", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("late_result");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "cancel_accepted",
+    });
+    const late = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: "late_redacted",
+    });
+    expect(late.ok).toBe(true);
+    if (!late.ok) return;
+    expect(late.run.state).toBe("cancelled");
+    expect(late.run.evidence?.some((e) => e.late)).toBe(true);
+  });
+
+  it("blocks mutation intent at create", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("mutation_forbidden");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    expect(created.ok).toBe(false);
+    if (created.run) expect(created.run.state).toBe("blocked");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts
@@ -0,0 +1,183 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it, vi } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import {
+  persistExecutionRun,
+  checkExecutionRunInvariants,
+  createSourceDisclosure,
+  usageUnavailable,
+  EXECUTION_RUN_SCHEMA_VERSION,
+  getFixture,
+} from "@/lib/oa/execution-run";
+import type { ExecutionRun, ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+function baseRun(over: Partial<ExecutionRun> = {}): ExecutionRun {
+  const f = getFixture("nominal");
+  return {
+    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
+    runId: "run:persist:1",
+    correlationId: f.intent.correlationId,
+    state: "idle",
+    intent: f.intent,
+    context: f.context,
+    disclosure: createSourceDisclosure({
+      source: "fixture",
+      providerLane: "ai",
+      limits: ["test"],
+    }),
+    createdAt: "2026-08-03T20:00:00.000Z",
+    updatedAt: "2026-08-03T20:00:00.000Z",
+    version: 1,
+    capability: f.capability,
+    usage: usageUnavailable("not_provided"),
+    persistence: {
+      kind: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+    ...over,
+  };
+}
+
+describe("D2-D1 persistExecutionRun guards", () => {
+  it("saves valid idle run", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const r = await persistExecutionRun(baseRun(), {
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    });
+    expect(r.ok).toBe(true);
+    expect(save).toHaveBeenCalledOnce();
+  });
+
+  it("refuses ninth state before save", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const r = await persistExecutionRun(baseRun({ state: "STATE-B" as never }), {
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    });
+    expect(r.ok).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("refuses succeeded without external result / evidence", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
+    const noResult = await persistExecutionRun(baseRun({ state: "succeeded" }), {
+      repository,
+      schemas,
+    });
+    expect(noResult.ok).toBe(false);
+    expect(checkExecutionRunInvariants(baseRun({ state: "succeeded" })).length).toBeGreaterThan(
+      0,
+    );
+
+    const partial = await persistExecutionRun(
+      baseRun({
+        state: "succeeded",
+        externalResult: {
+          kind: "success",
+          completeness: "partial",
+          redactedSummary: "p",
+          rawPresent: false,
+        },
+        evidence: [
+          {
+            evidenceId: "e1",
+            runId: "run:persist:1",
+            correlationId: "c",
+            source: "fixture",
+            completeness: "complete",
+            producedAt: "2026-08-03T20:00:00.000Z",
+            summary: "x",
+            late: false,
+            official: true,
+          },
+        ],
+      }),
+      { repository, schemas },
+    );
+    expect(partial.ok).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("refuses failed without failure and blocked without reason", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
+    expect(
+      (await persistExecutionRun(baseRun({ state: "failed" }), { repository, schemas })).ok,
+    ).toBe(false);
+    expect(
+      (await persistExecutionRun(baseRun({ state: "blocked" }), { repository, schemas })).ok,
+    ).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("refuses disclosure source mismatch and durable claim", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
+    const mismatch = baseRun({
+      disclosure: createSourceDisclosure({ source: "real", providerLane: "ai" }),
+    });
+    expect((await persistExecutionRun(mismatch, { repository, schemas })).ok).toBe(false);
+    const durable = baseRun({
+      persistence: {
+        kind: "memory_process_local",
+        durable: true as never,
+        multiInstance: false,
+        restartSafe: false,
+      },
+    });
+    expect((await persistExecutionRun(durable, { repository, schemas })).ok).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+
+  it("refuses invalid timestamp format when schema requires date-time", async () => {
+    const save = vi.fn();
+    const repository: ExecutionRunRepositoryPort = {
+      save,
+      getById: async () => null,
+      listByCorrelationId: async () => [],
+    };
+    const r = await persistExecutionRun(baseRun({ createdAt: "yesterday" }), {
+      repository,
+      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
+    });
+    expect(r.ok).toBe(false);
+    expect(save).not.toHaveBeenCalled();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts
@@ -0,0 +1,66 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { evaluateReadOnlyPolicy, getFixture } from "@/lib/oa/execution-run";
+
+describe("D2-D1 read-only policy", () => {
+  it("denies mutation", () => {
+    const f = getFixture("mutation_forbidden");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("MUTATION_FORBIDDEN");
+  });
+
+  it("denies protected path", () => {
+    const f = getFixture("protected_path");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("PROTECTED_PATH");
+  });
+
+  it("denies auth failure", () => {
+    const f = getFixture("auth_failure");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("AUTHORIZATION_ERROR");
+  });
+
+  it("denies provider unavailable", () => {
+    const f = getFixture("provider_unavailable");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("PROVIDER_UNAVAILABLE");
+  });
+
+  it("denies source mismatch", () => {
+    const f = getFixture("source_mismatch");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("SOURCE_MISMATCH");
+  });
+
+  it("denies unsatisfied human gate", () => {
+    const f = getFixture("blocked_gate");
+    const d = evaluateReadOnlyPolicy({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+      gateSatisfied: false,
+    });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("HUMAN_GATE_REQUIRED");
+  });
+
+  it("accepts nominal", () => {
+    const f = getFixture("nominal");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(true);
+  });
+
+  it("never exposes secrets in failures", () => {
+    const f = getFixture("secret_redaction");
+    expect(JSON.stringify(f.expectedFailure)).not.toMatch(/sk-|BEGIN PRIVATE|password/i);
+    expect(f.expectedFailure?.technicalDetailsRedacted).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts
@@ -0,0 +1,73 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
+import { getFixture } from "@/lib/oa/execution-run";
+
+describe("D2-D1 memory repository via server composition", () => {
+  it("saves and loads with defensive copies", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const loaded = await c.getById(created.run.runId);
+    expect(loaded?.runId).toBe(created.run.runId);
+    expect(loaded).not.toBe(created.run);
+  });
+
+  it("lists by correlation deterministically", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    const list = await c.listByCorrelationId(f.intent.correlationId);
+    expect(list.length).toBe(1);
+  });
+
+  it("returns null for missing", async () => {
+    const c = composeExecutionRunMemory();
+    expect(await c.getById("missing")).toBeNull();
+  });
+
+  it("issues new identity after terminal via new create", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const a = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    const b = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    expect(a.ok && b.ok).toBe(true);
+    if (a.ok && b.ok) expect(a.run.runId).not.toBe(b.run.runId);
+  });
+
+  it("discloses process-local memory only", () => {
+    const c = composeExecutionRunMemory();
+    expect(c.disclosure).toEqual({
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    });
+  });
+
+  it("does not expose raw repository save on composition", () => {
+    const c = composeExecutionRunMemory() as Record<string, unknown>;
+    expect(c.repository).toBeUndefined();
+    expect(c.store).toBeUndefined();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts
@@ -0,0 +1,180 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
+import { normalizedFailure } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+describe("D2-D1 AJV adversarial validation", () => {
+  const validator = new AjvExecutionRunSchemaValidation(schemasDir);
+
+  it("rejects null and undefined before metadata use", async () => {
+    expect((await validator.validate("execution-intent", null)).ok).toBe(false);
+    expect((await validator.validate("execution-intent", undefined)).ok).toBe(false);
+  });
+
+  it("rejects wrong types and missing fields", async () => {
+    expect((await validator.validate("execution-intent", 42)).ok).toBe(false);
+    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
+    expect(
+      (
+        await validator.validate("execution-intent", {
+          ...getFixture("nominal").intent,
+          requestedLane: "openai",
+        })
+      ).ok,
+    ).toBe(false);
+  });
+
+  it("rejects empty operation", async () => {
+    const f = getFixture("validation_failure");
+    const r = await validator.validate("execution-intent", f.intent);
+    expect(r.ok).toBe(false);
+  });
+
+  it("accepts nominal intent", async () => {
+    const f = getFixture("nominal");
+    const r = await validator.validate("execution-intent", f.intent);
+    expect(r.ok).toBe(true);
+  });
+
+  it("does not throw raw AJV exceptions", async () => {
+    await expect(validator.validate("execution-run", { circular: null })).resolves.toMatchObject({
+      ok: false,
+    });
+  });
+});
+
+describe("D2-D1 succeeded / failed / blocked application invariants", () => {
+  it("creates official evidence on succeeded", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    const done = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "outputs_validated",
+      completeness: "complete",
+      externalResult: {
+        kind: "success",
+        completeness: "complete",
+        redactedSummary: "redacted-ok",
+        rawPresent: false,
+      },
+    });
+    expect(done.ok).toBe(true);
+    if (!done.ok) return;
+    expect(done.run.evidence?.[0]?.summary).toBe("redacted-ok");
+    expect(done.run.evidence?.[0]?.official).toBe(true);
+    expect(done.run.evidence?.[0]?.late).toBe(false);
+  });
+
+  it("refuses succeeded without external result", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    const done = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "outputs_validated",
+      completeness: "complete",
+    });
+    expect(done.ok).toBe(false);
+  });
+
+  it("requires normalized failure for failed", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    const missing = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "engaged_operation_failed",
+    });
+    expect(missing.ok).toBe(false);
+    const ok = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "engaged_operation_failed",
+      failure: normalizedFailure({
+        family: "rate_limited",
+        code: "RATE_LIMITED",
+        userMessage: "slow down",
+        retryable: true,
+        correlationId: created.run.correlationId,
+      }),
+    });
+    expect(ok.ok).toBe(true);
+    if (ok.ok) expect(ok.run.failure?.code).toBe("RATE_LIMITED");
+  });
+
+  it("requires failure or blockingReason for blocked transition", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun({
+      intent: {
+        ...f.intent,
+        requiresHumanGate: true,
+        intentId: "intent:gate",
+        correlationId: "corr:gate",
+      },
+      context: f.context,
+      capability: f.capability,
+    });
+    // may be blocked at create due to unsatisfied gate — use idle path with gate false via capability
+    if (!created.ok && created.run?.state === "blocked") {
+      expect(created.run.failure || created.run.blockedReason).toBeTruthy();
+      return;
+    }
+    if (!created.ok) return;
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "intent_valid",
+    });
+    await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "human_gate_required",
+    });
+    const blocked = await c.transitionExecutionRun({
+      runId: created.run.runId,
+      reason: "human_reject_or_unsatisfied",
+      blockingReason: "HUMAN_REJECTED",
+    });
+    expect(blocked.ok).toBe(true);
+    if (blocked.ok) {
+      expect(blocked.run.state).toBe("blocked");
+      expect(blocked.run.blockedReason).toBe("HUMAN_REJECTED");
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts
@@ -0,0 +1,86 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  decideTransition,
+  listAllowedTransitions,
+  EXECUTION_STATES,
+  isTerminalState,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D1 transition authority", () => {
+  it("exposes exactly eight states", () => {
+    expect(EXECUTION_STATES).toHaveLength(8);
+  });
+
+  it("allows documented transitions", () => {
+    for (const edge of listAllowedTransitions()) {
+      expect(
+        decideTransition({
+          from: edge.from,
+          to: edge.to,
+          reason: edge.reason,
+          completeness: edge.to === "succeeded" ? "complete" : undefined,
+        }).allowed,
+      ).toBe(true);
+    }
+  });
+
+  it("refuses terminal without new run", () => {
+    for (const state of ["succeeded", "failed", "cancelled", "timed_out", "blocked"] as const) {
+      expect(isTerminalState(state)).toBe(true);
+      const d = decideTransition({ from: state, to: "running", reason: "intent_valid" });
+      expect(d.allowed).toBe(false);
+    }
+  });
+
+  it("refuses partial succeeded", () => {
+    const d = decideTransition({
+      from: "running",
+      to: "succeeded",
+      reason: "outputs_validated",
+      completeness: "partial",
+    });
+    expect(d.allowed).toBe(false);
+  });
+
+  it("refuses late result state mutation", () => {
+    const d = decideTransition({
+      from: "cancelled",
+      to: "succeeded",
+      reason: "late_result_evidence_only",
+    });
+    expect(d.allowed).toBe(false);
+  });
+
+  it("refuses idle→succeeded", () => {
+    const d = decideTransition({
+      from: "idle",
+      to: "succeeded",
+      reason: "outputs_validated",
+      completeness: "complete",
+    });
+    expect(d.allowed).toBe(false);
+  });
+
+  it("samples refused transitions per non-terminal state", () => {
+    const samples = [
+      { from: "idle" as const, to: "failed" as const, reason: "engaged_operation_failed" as const },
+      { from: "running" as const, to: "idle" as const, reason: "intent_valid" as const },
+      {
+        from: "awaiting_human" as const,
+        to: "succeeded" as const,
+        reason: "outputs_validated" as const,
+        completeness: "complete" as const,
+      },
+    ];
+    for (const s of samples) {
+      expect(decideTransition(s).allowed).toBe(false);
+    }
+  });
+
+  it("preserves exactly the adopted allowed edge count", () => {
+    expect(listAllowedTransitions()).toHaveLength(11);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts
@@ -0,0 +1,106 @@
+import { createSourceDisclosure, usageUnavailable } from "../domain/evidence";
+import { evaluateReadOnlyPolicy } from "../domain/policy";
+import { normalizedFailure } from "../domain/errors";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+} from "../domain/types";
+import { EXECUTION_RUN_SCHEMA_VERSION } from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { IdentityPort } from "../ports/identityPort";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
+import { persistExecutionRun } from "./persistExecutionRun";
+
+export type CreateExecutionRunInput = {
+  intent: ExecutionIntent;
+  context: ExecutionContext;
+  capability?: ProviderCapabilityDescriptor;
+};
+
+export type CreateExecutionRunResult =
+  | { ok: true; run: ExecutionRun }
+  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };
+
+/**
+ * Untrusted boundary: validates CreateExecutionRunInput before any metadata access,
+ * identity allocation, or persistence.
+ */
+export async function createExecutionRun(
+  input: unknown,
+  deps: {
+    clock: ClockPort;
+    identity: IdentityPort;
+    repository: ExecutionRunRepositoryPort;
+    schemas: ExecutionRunSchemaValidationPort;
+  },
+): Promise<CreateExecutionRunResult> {
+  const boundary = await deps.schemas.validate("create-execution-run-input", input);
+  if (!boundary.ok) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Create execution run input failed schema validation",
+        retryable: true,
+        correlationId: "unknown",
+      }),
+    };
+  }
+
+  const validated = input as CreateExecutionRunInput;
+  const now = deps.clock.nowIso();
+  const policy = evaluateReadOnlyPolicy({
+    intent: validated.intent,
+    context: validated.context,
+    capability: validated.capability,
+    gateSatisfied: validated.intent.requiresHumanGate ? false : undefined,
+  });
+
+  const disclosure = createSourceDisclosure({
+    source: validated.context.declaredSource,
+    providerLane: validated.intent.requestedLane,
+    limits: ["d2-d1-fixture-first", "memory-process-local"],
+    cursorUnverified: validated.intent.requestedLane === "cursor",
+  });
+
+  const runId = deps.identity.nextRunId();
+  const base: ExecutionRun = {
+    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
+    runId,
+    correlationId: validated.intent.correlationId,
+    state: policy.ok ? "idle" : "blocked",
+    intent: validated.intent,
+    context: validated.context,
+    disclosure,
+    createdAt: now,
+    updatedAt: now,
+    version: 1,
+    capability: validated.capability,
+    usage: usageUnavailable("not_provided"),
+    persistence: {
+      kind: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+    validation: policy.ok
+      ? { ok: true, validatedAt: now }
+      : { ok: false, validatedAt: now, failure: policy.failure },
+    failure: policy.ok ? undefined : policy.failure,
+    blockedReason: policy.ok ? undefined : policy.failure.code,
+  };
+
+  const persisted = await persistExecutionRun(base, deps);
+  if (!persisted.ok) {
+    return { ok: false, failure: persisted.failure };
+  }
+  if (!policy.ok) {
+    return { ok: false, failure: policy.failure, run: base };
+  }
+  return { ok: true, run: base };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/persistExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/persistExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/persistExecutionRun.ts
@@ -0,0 +1,52 @@
+/**
+ * Unique supported persistence path for D2-D1 ExecutionRun.
+ * Invariants then schema validation before repository save.
+ */
+import { checkExecutionRunInvariants } from "../domain/invariants";
+import { normalizedFailure } from "../domain/errors";
+import type { ExecutionRun, NormalizedFailure } from "../domain/types";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
+
+export type PersistExecutionRunResult =
+  | { ok: true }
+  | { ok: false; failure: NormalizedFailure };
+
+export async function persistExecutionRun(
+  run: ExecutionRun,
+  deps: {
+    repository: ExecutionRunRepositoryPort;
+    schemas: ExecutionRunSchemaValidationPort;
+  },
+): Promise<PersistExecutionRunResult> {
+  const issues = checkExecutionRunInvariants(run);
+  if (issues.length > 0) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: `Run invariants failed: ${issues.map((i) => i.code).join(",")}`,
+        retryable: false,
+        correlationId: run.correlationId,
+      }),
+    };
+  }
+
+  const schema = await deps.schemas.validate("execution-run", run);
+  if (!schema.ok) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Execution run failed schema validation before persistence",
+        retryable: false,
+        correlationId: run.correlationId,
+      }),
+    };
+  }
+
+  await deps.repository.save(run);
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts
@@ -0,0 +1,367 @@
+import { createOfficialEvidence, canSucceed } from "../domain/evidence";
+import { decideTransition, type TransitionReason } from "../domain/transitions";
+import { canAcceptLateResult } from "../domain/invariants";
+import { normalizedFailure } from "../domain/errors";
+import type {
+  Completeness,
+  ExecutionRun,
+  ExternalResult,
+  NormalizedFailure,
+} from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { IdentityPort } from "../ports/identityPort";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
+import { persistExecutionRun } from "./persistExecutionRun";
+
+export type TransitionExecutionRunInput = {
+  runId: string;
+  reason: TransitionReason;
+  completeness?: Completeness;
+  externalResult?: ExternalResult;
+  failure?: NormalizedFailure;
+  blockingReason?: string;
+  lateEvidenceSummary?: string;
+};
+
+export type TransitionExecutionRunResult =
+  | { ok: true; run: ExecutionRun }
+  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };
+
+function targetForReason(
+  reason: TransitionReason,
+): ExecutionRun["state"] | null {
+  switch (reason) {
+    case "intent_valid":
+      return "running";
+    case "pre_engagement_block":
+      return "blocked";
+    case "human_gate_required":
+      return "awaiting_human";
+    case "outputs_validated":
+      return "succeeded";
+    case "engaged_operation_failed":
+      return "failed";
+    case "time_limit":
+    case "human_gate_expired":
+      return "timed_out";
+    case "cancel_accepted":
+    case "human_cancel":
+      return "cancelled";
+    case "human_approve":
+      return "running";
+    case "human_reject_or_unsatisfied":
+      return "blocked";
+    default:
+      return null;
+  }
+}
+
+/**
+ * Untrusted boundary: validates TransitionExecutionRunInput before metadata access
+ * or repository lookup.
+ */
+export async function transitionExecutionRun(
+  input: unknown,
+  deps: {
+    clock: ClockPort;
+    identity: IdentityPort;
+    repository: ExecutionRunRepositoryPort;
+    schemas: ExecutionRunSchemaValidationPort;
+  },
+): Promise<TransitionExecutionRunResult> {
+  const boundary = await deps.schemas.validate(
+    "transition-execution-run-input",
+    input,
+  );
+  if (!boundary.ok) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Transition execution run input failed schema validation",
+        retryable: true,
+        correlationId: "unknown",
+      }),
+    };
+  }
+
+  const validated = input as TransitionExecutionRunInput;
+
+  const existing = await deps.repository.getById(validated.runId);
+  if (!existing) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Execution run not found",
+        retryable: false,
+        correlationId: "unknown",
+      }),
+    };
+  }
+
+  if (validated.reason === "late_result_evidence_only") {
+    if (!canAcceptLateResult(existing.state)) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage:
+            "Late result evidence accepted only for cancelled, timed_out, or failed runs",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+
+    const summary = validated.lateEvidenceSummary ?? "late_result_redacted";
+    const evidence = createOfficialEvidence({
+      evidenceId: deps.identity.nextEvidenceId(),
+      runId: existing.runId,
+      correlationId: existing.correlationId,
+      source: existing.disclosure.source,
+      completeness: "partial",
+      producedAt: deps.clock.nowIso(),
+      summary,
+      late: true,
+    });
+
+    const evidenceSchema = await deps.schemas.validate(
+      "execution-evidence",
+      evidence,
+    );
+    if (!evidenceSchema.ok) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "Late evidence failed schema validation",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+
+    const updated: ExecutionRun = {
+      ...existing,
+      updatedAt: deps.clock.nowIso(),
+      version: existing.version + 1,
+      evidence: [...(existing.evidence ?? []), evidence],
+    };
+    const persisted = await persistExecutionRun(updated, deps);
+    if (!persisted.ok) {
+      return { ok: false, failure: persisted.failure, run: existing };
+    }
+    return { ok: true, run: updated };
+  }
+
+  const to = targetForReason(validated.reason);
+  if (!to) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Unknown transition reason",
+        retryable: false,
+        correlationId: existing.correlationId,
+      }),
+      run: existing,
+    };
+  }
+
+  const decision = decideTransition({
+    from: existing.state,
+    to,
+    reason: validated.reason,
+    completeness: validated.completeness,
+  });
+  if (!decision.allowed) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: decision.message,
+        retryable: false,
+        correlationId: existing.correlationId,
+      }),
+      run: existing,
+    };
+  }
+
+  const now = deps.clock.nowIso();
+
+  if (to === "succeeded") {
+    const external = validated.externalResult;
+    const externalSchema = await deps.schemas.validate(
+      "external-result",
+      external,
+    );
+    if (!externalSchema.ok || !external) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "invalid_provider_result",
+          code: "INVALID_PROVIDER_RESULT",
+          userMessage: "succeeded requires a valid ExternalResult",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+    if (external.kind !== "success" || !canSucceed(external.completeness)) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "invalid_provider_result",
+          code: "INVALID_PROVIDER_RESULT",
+          userMessage: "Cannot succeed without complete success ExternalResult",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+    if (validated.completeness !== "complete") {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "invalid_provider_result",
+          code: "INVALID_PROVIDER_RESULT",
+          userMessage: "Cannot succeed with partial or missing completeness",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+
+    const evidence = createOfficialEvidence({
+      evidenceId: deps.identity.nextEvidenceId(),
+      runId: existing.runId,
+      correlationId: existing.correlationId,
+      source: existing.disclosure.source,
+      completeness: "complete",
+      producedAt: now,
+      summary: external.redactedSummary,
+      late: false,
+    });
+    const evidenceSchema = await deps.schemas.validate(
+      "execution-evidence",
+      evidence,
+    );
+    if (!evidenceSchema.ok) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "Official evidence failed schema validation",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+
+    const updated: ExecutionRun = {
+      ...existing,
+      state: "succeeded",
+      updatedAt: now,
+      version: existing.version + 1,
+      externalResult: external,
+      evidence: [...(existing.evidence ?? []), evidence],
+    };
+    const persisted = await persistExecutionRun(updated, deps);
+    if (!persisted.ok) {
+      return { ok: false, failure: persisted.failure, run: existing };
+    }
+    return { ok: true, run: updated };
+  }
+
+  if (to === "failed") {
+    if (!validated.failure) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "failed requires NormalizedFailure",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+    const failureSchema = await deps.schemas.validate(
+      "normalized-failure",
+      validated.failure,
+    );
+    if (!failureSchema.ok) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "NormalizedFailure failed schema validation",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+  }
+
+  if (to === "blocked") {
+    const hasFailure = Boolean(validated.failure);
+    const hasReason =
+      typeof validated.blockingReason === "string" &&
+      validated.blockingReason.trim().length > 0;
+    if (!hasFailure && !hasReason && !existing.failure && !existing.blockedReason) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "blocked requires NormalizedFailure or blockingReason",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+  }
+
+  const updated: ExecutionRun = {
+    ...existing,
+    state: to,
+    updatedAt: now,
+    version: existing.version + 1,
+    externalResult: validated.externalResult ?? existing.externalResult,
+    failure:
+      validated.failure ??
+      (to === "failed" || to === "blocked" ? existing.failure : existing.failure),
+    blockedReason:
+      to === "blocked"
+        ? validated.blockingReason ??
+          validated.failure?.code ??
+          existing.blockedReason ??
+          "blocked"
+        : existing.blockedReason,
+  };
+
+  const persisted = await persistExecutionRun(updated, deps);
+  if (!persisted.ok) {
+    return { ok: false, failure: persisted.failure, run: existing };
+  }
+  return { ok: true, run: updated };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts
@@ -0,0 +1,18 @@
+import type { FailureCode, FailureFamily, NormalizedFailure } from "./types";
+
+export function normalizedFailure(input: {
+  family: FailureFamily;
+  code: FailureCode;
+  userMessage: string;
+  retryable: boolean;
+  correlationId: string;
+}): NormalizedFailure {
+  return {
+    family: input.family,
+    code: input.code,
+    userMessage: input.userMessage,
+    technicalDetailsRedacted: true,
+    retryable: input.retryable,
+    correlationId: input.correlationId,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts
@@ -0,0 +1,74 @@
+/**
+ * Evidence, completeness, source disclosure rules (FD-05/08).
+ */
+import type {
+  Completeness,
+  ExecutionEvidence,
+  ExecutionSource,
+  ProviderLane,
+  SourceDisclosure,
+  UsageSummary,
+} from "./types";
+
+export function assertSourceHonest(
+  declared: ExecutionSource,
+  claimed: ExecutionSource,
+): boolean {
+  return declared === claimed;
+}
+
+export function canSucceed(completeness: Completeness): boolean {
+  return completeness === "complete";
+}
+
+export function createOfficialEvidence(input: {
+  evidenceId: string;
+  runId: string;
+  correlationId: string;
+  source: ExecutionSource;
+  completeness: Completeness;
+  producedAt: string;
+  summary: string;
+  late?: boolean;
+  digest?: string;
+}): ExecutionEvidence {
+  return {
+    evidenceId: input.evidenceId,
+    runId: input.runId,
+    correlationId: input.correlationId,
+    source: input.source,
+    completeness: input.completeness,
+    producedAt: input.producedAt,
+    digest: input.digest,
+    summary: input.summary,
+    late: input.late ?? false,
+    official: true,
+  };
+}
+
+export function createSourceDisclosure(input: {
+  source: ExecutionSource;
+  providerLane: ProviderLane;
+  limits?: readonly string[];
+  cursorUnverified?: boolean;
+}): SourceDisclosure {
+  return {
+    source: input.source,
+    providerLane: input.providerLane,
+    limits: input.limits ?? [],
+    processLocalMemory: true,
+    cursorUnverified: input.cursorUnverified ?? input.providerLane === "cursor",
+  };
+}
+
+export function usageUnavailable(reason: string): UsageSummary {
+  return { status: "unavailable", reason };
+}
+
+export function isIsoTimestamp(value: string): boolean {
+  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
+    return false;
+  }
+  const t = Date.parse(value);
+  return Number.isFinite(t);
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts
@@ -0,0 +1,88 @@
+/**
+ * Domain late-result eligibility and strengthened persistence invariants.
+ */
+import type { ExecutionEvidence, ExecutionRun, ExecutionState } from "./types";
+import { canSucceed } from "./evidence";
+
+export type InvariantIssue = { readonly code: string; readonly message: string };
+
+/** Terminal states where an external op may have been engaged (FD-05 late evidence). */
+export const LATE_RESULT_ELIGIBLE_STATES = [
+  "cancelled",
+  "timed_out",
+  "failed",
+] as const satisfies readonly ExecutionState[];
+
+export type LateResultEligibleState = (typeof LATE_RESULT_ELIGIBLE_STATES)[number];
+
+export function canAcceptLateResult(state: ExecutionState): state is LateResultEligibleState {
+  return (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(state);
+}
+
+function hasOfficialSuccessEvidence(
+  evidence: readonly ExecutionEvidence[] | undefined,
+  disclosureSource: ExecutionRun["disclosure"]["source"],
+): boolean {
+  if (!evidence || evidence.length === 0) return false;
+  return evidence.some(
+    (e) =>
+      e.official === true &&
+      e.late === false &&
+      e.completeness === "complete" &&
+      e.source === disclosureSource,
+  );
+}
+
+export function checkExecutionRunInvariants(run: ExecutionRun): InvariantIssue[] {
+  const issues: InvariantIssue[] = [];
+  if (run.persistence.kind !== "memory_process_local") {
+    issues.push({ code: "PERSISTENCE", message: "Only memory_process_local allowed in D2-D1" });
+  }
+  if (run.persistence.durable || run.persistence.multiInstance || run.persistence.restartSafe) {
+    issues.push({ code: "CLAIM", message: "Durable/multi-instance/restart-safe claims forbidden" });
+  }
+  if (run.disclosure.source !== run.context.declaredSource) {
+    issues.push({ code: "SOURCE", message: "disclosure source mismatch vs declared context source" });
+  }
+
+  if (run.state === "succeeded") {
+    const external = run.externalResult;
+    if (!external || external.kind !== "success") {
+      issues.push({
+        code: "SUCCEEDED_EXTERNAL_RESULT",
+        message: "succeeded requires ExternalResult kind success",
+      });
+    } else if (!canSucceed(external.completeness)) {
+      issues.push({
+        code: "PARTIAL_SUCCESS",
+        message: "succeeded requires complete external result",
+      });
+    }
+    if (!hasOfficialSuccessEvidence(run.evidence, run.disclosure.source)) {
+      issues.push({
+        code: "SUCCEEDED_EVIDENCE",
+        message: "succeeded requires official complete non-late evidence",
+      });
+    }
+  }
+
+  if (run.state === "failed") {
+    if (!run.failure) {
+      issues.push({ code: "FAILED_FAILURE", message: "failed requires NormalizedFailure" });
+    }
+  }
+
+  if (run.state === "blocked") {
+    const hasFailure = Boolean(run.failure);
+    const hasReason =
+      typeof run.blockedReason === "string" && run.blockedReason.trim().length > 0;
+    if (!hasFailure && !hasReason) {
+      issues.push({
+        code: "BLOCKED_REASON",
+        message: "blocked requires NormalizedFailure or non-empty blockedReason",
+      });
+    }
+  }
+
+  return issues;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
@@ -0,0 +1,163 @@
+/**
+ * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
+ * Operates on contracts only — no FS/Git/provider I/O.
+ */
+import { normalizedFailure } from "./errors";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+} from "./types";
+
+export type PolicyInput = {
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly gateSatisfied?: boolean;
+};
+
+export type PolicyDecision =
+  | { readonly ok: true }
+  | { readonly ok: false; readonly failure: NormalizedFailure };
+
+export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
+  const { intent, context, capability } = input;
+  const cid = intent.correlationId;
+
+  if (intent.mutationRequested || context.permissions.gitWrite) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "mutation_forbidden",
+        code: "MUTATION_FORBIDDEN",
+        userMessage: "Git write or mutation intent is forbidden in D2-D",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.arbitraryCommandRequested) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Arbitrary commands are not permitted",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.targetPath && context.protectedPaths?.length) {
+    const hit = context.protectedPaths.some(
+      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
+    );
+    if (hit) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "protected_path",
+          code: "PROTECTED_PATH",
+          userMessage: "Target path is protected",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+  }
+
+  if (!context.permissions.gitRead && intent.requestedLane === "git") {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "authorization",
+        code: "AUTHORIZATION_ERROR",
+        userMessage: "Insufficient permission for Git read",
+        retryable: true,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.requestedLane !== "none") {
+    if (!capability) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "Provider capability descriptor is required",
+          retryable: true,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (!capability.available) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "Requested provider is unavailable",
+          retryable: true,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (!capability.readOnly) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "mutation_forbidden",
+          code: "MUTATION_FORBIDDEN",
+          userMessage: "Provider must be read-only for D2-D",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (intent.requestedLane === "cursor" && !capability.verified) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "sandbox_blocked",
+          code: "SANDBOX_BLOCKED",
+          userMessage: "Cursor product capabilities remain unverified",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+  }
+
+  if (intent.requiresHumanGate && input.gateSatisfied === false) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "human_gate_required",
+        code: "HUMAN_GATE_REQUIRED",
+        userMessage: "A structural human gate is required",
+        retryable: true,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.requestedSource !== context.declaredSource) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "source_mismatch",
+        code: "SOURCE_MISMATCH",
+        userMessage: "Declared source does not match requested source",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts
@@ -0,0 +1,109 @@
+/**
+ * Pure eight-state transition authority (FD-02/03/04/06).
+ * Sole decision of whether a transition is valid for D2-D.
+ */
+import type { Completeness, ExecutionState } from "./types";
+import { isTerminalState } from "./types";
+
+export type TransitionReason =
+  | "intent_valid"
+  | "pre_engagement_block"
+  | "human_gate_required"
+  | "outputs_validated"
+  | "engaged_operation_failed"
+  | "time_limit"
+  | "cancel_accepted"
+  | "human_approve"
+  | "human_cancel"
+  | "human_reject_or_unsatisfied"
+  | "human_gate_expired"
+  | "late_result_evidence_only"
+  | "forbidden";
+
+export type TransitionRequest = {
+  readonly from: ExecutionState;
+  readonly to: ExecutionState;
+  readonly reason: TransitionReason;
+  /** Required when to === succeeded */
+  readonly completeness?: Completeness;
+};
+
+export type TransitionDecision =
+  | { readonly allowed: true }
+  | { readonly allowed: false; readonly code: string; readonly message: string };
+
+/** Allowed edges from documents 21 §J + FD-06 (awaiting_human → timed_out). */
+const ALLOWED: ReadonlyArray<readonly [ExecutionState, ExecutionState, TransitionReason]> = [
+  ["idle", "running", "intent_valid"],
+  ["idle", "blocked", "pre_engagement_block"],
+  ["running", "awaiting_human", "human_gate_required"],
+  ["running", "succeeded", "outputs_validated"],
+  ["running", "failed", "engaged_operation_failed"],
+  ["running", "timed_out", "time_limit"],
+  ["running", "cancelled", "cancel_accepted"],
+  ["awaiting_human", "running", "human_approve"],
+  ["awaiting_human", "cancelled", "human_cancel"],
+  ["awaiting_human", "blocked", "human_reject_or_unsatisfied"],
+  ["awaiting_human", "timed_out", "human_gate_expired"],
+];
+
+export function isAllowedTransition(
+  from: ExecutionState,
+  to: ExecutionState,
+  reason: TransitionReason,
+): boolean {
+  return ALLOWED.some(([f, t, r]) => f === from && t === to && r === reason);
+}
+
+export function decideTransition(req: TransitionRequest): TransitionDecision {
+  if (req.reason === "late_result_evidence_only") {
+    return {
+      allowed: false,
+      code: "LATE_RESULT_NO_STATE_MUTATION",
+      message: "Late result is evidence-only and must not mutate state",
+    };
+  }
+
+  if (isTerminalState(req.from)) {
+    return {
+      allowed: false,
+      code: "TERMINAL_REQUIRES_NEW_RUN",
+      message: "Terminal state requires a new run identity",
+    };
+  }
+
+  if (req.to === "succeeded") {
+    if (req.completeness === "partial") {
+      return {
+        allowed: false,
+        code: "PARTIAL_NEVER_SUCCEEDED",
+        message: "Partial completeness cannot transition to succeeded",
+      };
+    }
+    if (req.completeness !== "complete") {
+      return {
+        allowed: false,
+        code: "SUCCEEDED_REQUIRES_COMPLETE",
+        message: "succeeded requires completeness complete",
+      };
+    }
+  }
+
+  if (!isAllowedTransition(req.from, req.to, req.reason)) {
+    return {
+      allowed: false,
+      code: "TRANSITION_FORBIDDEN",
+      message: `Transition ${req.from}→${req.to} (${req.reason}) is not allowed`,
+    };
+  }
+
+  return { allowed: true };
+}
+
+export function listAllowedTransitions(): ReadonlyArray<{
+  from: ExecutionState;
+  to: ExecutionState;
+  reason: TransitionReason;
+}> {
+  return ALLOWED.map(([from, to, reason]) => ({ from, to, reason }));
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
@@ -0,0 +1,241 @@
+/**
+ * D2-D1 Execution Run — canonical domain vocabulary (twelve functional objects).
+ * Pure domain: no Next/Node/fs/process/network/SDK/AJV.
+ * Authority: sole D2-D technical state authority (TECH-RUN-B).
+ */
+
+export const EXECUTION_RUN_SCHEMA_VERSION = "0.1.0-d2d1" as const;
+
+/** Eight persistent states exactly (FD-02). No STATE-B. */
+export type ExecutionState =
+  | "idle"
+  | "running"
+  | "awaiting_human"
+  | "succeeded"
+  | "failed"
+  | "cancelled"
+  | "timed_out"
+  | "blocked";
+
+export const EXECUTION_STATES: readonly ExecutionState[] = [
+  "idle",
+  "running",
+  "awaiting_human",
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+] as const;
+
+export type TerminalExecutionState =
+  | "succeeded"
+  | "failed"
+  | "cancelled"
+  | "timed_out"
+  | "blocked";
+
+export const TERMINAL_STATES: readonly TerminalExecutionState[] = [
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+] as const;
+
+export type ExecutionSource = "fixture" | "sandbox-real" | "real";
+
+export type Completeness = "complete" | "partial";
+
+export type ProviderLane = "ai" | "git" | "cursor" | "none";
+
+export type FailureFamily =
+  | "validation"
+  | "authentication"
+  | "authorization"
+  | "provider_unavailable"
+  | "rate_limited"
+  | "timed_out"
+  | "cancelled"
+  | "sandbox_blocked"
+  | "protected_path"
+  | "mutation_forbidden"
+  | "human_gate_required"
+  | "invalid_provider_result"
+  | "internal_normalized_failure"
+  | "source_mismatch";
+
+export type FailureCode =
+  | "VALIDATION_ERROR"
+  | "AUTHENTICATION_ERROR"
+  | "AUTHORIZATION_ERROR"
+  | "PROVIDER_UNAVAILABLE"
+  | "RATE_LIMITED"
+  | "TIMED_OUT"
+  | "CANCELLED"
+  | "SANDBOX_BLOCKED"
+  | "PROTECTED_PATH"
+  | "MUTATION_FORBIDDEN"
+  | "HUMAN_GATE_REQUIRED"
+  | "INVALID_PROVIDER_RESULT"
+  | "INTERNAL_NORMALIZED_FAILURE"
+  | "SOURCE_MISMATCH";
+
+/** 1. ExecutionIntent */
+export type ExecutionIntent = {
+  readonly intentId: string;
+  readonly correlationId: string;
+  readonly requestedLane: ProviderLane;
+  readonly operation: string;
+  readonly requestedSource: ExecutionSource;
+  readonly requiresHumanGate: boolean;
+  readonly mutationRequested: boolean;
+  readonly arbitraryCommandRequested: boolean;
+  readonly targetPath?: string;
+  readonly metadata?: Readonly<Record<string, unknown>>;
+};
+
+/** 2. ExecutionContext */
+export type ExecutionContext = {
+  readonly projectId: string;
+  readonly workspaceId?: string;
+  readonly actorId: string;
+  readonly declaredSource: ExecutionSource;
+  readonly allowlistRepos?: readonly string[];
+  readonly protectedPaths?: readonly string[];
+  readonly permissions: {
+    readonly gitRead: boolean;
+    readonly gitWrite: boolean;
+    readonly providerInvoke: boolean;
+  };
+};
+
+/** 3. ProviderCapabilityDescriptor — provider-independent */
+export type ProviderCapabilityDescriptor = {
+  readonly lane: ProviderLane;
+  readonly capabilityId: string;
+  readonly available: boolean;
+  readonly verified: boolean;
+  readonly readOnly: boolean;
+  readonly supportsCancellation: boolean;
+  readonly supportsTimeout: boolean;
+};
+
+/** 4. ValidationOutcome */
+export type ValidationOutcome =
+  | {
+      readonly ok: true;
+      readonly validatedAt: string;
+    }
+  | {
+      readonly ok: false;
+      readonly validatedAt: string;
+      readonly failure: NormalizedFailure;
+    };
+
+/** 6. ExecutionState — see union above */
+
+/** 7. ExternalResult */
+export type ExternalResult =
+  | {
+      readonly kind: "success";
+      readonly completeness: Completeness;
+      readonly redactedSummary: string;
+      readonly rawPresent: false;
+    }
+  | {
+      readonly kind: "failure";
+      readonly failure: NormalizedFailure;
+    }
+  | {
+      readonly kind: "empty";
+    };
+
+/** 8. ExecutionEvidence */
+export type ExecutionEvidence = {
+  readonly evidenceId: string;
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly source: ExecutionSource;
+  readonly completeness: Completeness;
+  readonly producedAt: string;
+  readonly digest?: string;
+  readonly summary: string;
+  readonly late: boolean;
+  readonly official: true;
+};
+
+/** 9. SourceDisclosure */
+export type SourceDisclosure = {
+  readonly source: ExecutionSource;
+  readonly providerLane: ProviderLane;
+  readonly limits: readonly string[];
+  readonly processLocalMemory: boolean;
+  readonly cursorUnverified: boolean;
+};
+
+/** 10. HumanDecisionGate */
+export type HumanDecisionGate = {
+  readonly gateId: string;
+  readonly question: string;
+  readonly required: boolean;
+  readonly decision?: "approve" | "reject" | "cancel";
+  readonly decidedAt?: string;
+  readonly expiresAt?: string;
+};
+
+/** 11. UsageSummary */
+export type UsageSummary =
+  | {
+      readonly status: "validated";
+      readonly inputTokens?: number;
+      readonly outputTokens?: number;
+      readonly unit?: string;
+    }
+  | {
+      readonly status: "unavailable";
+      readonly reason: string;
+    };
+
+/** 12. NormalizedFailure */
+export type NormalizedFailure = {
+  readonly family: FailureFamily;
+  readonly code: FailureCode;
+  readonly userMessage: string;
+  readonly technicalDetailsRedacted: true;
+  readonly retryable: boolean;
+  readonly correlationId: string;
+};
+
+/** 5. ExecutionRun — aggregate holding state authority fields */
+export type ExecutionRun = {
+  readonly schemaVersion: typeof EXECUTION_RUN_SCHEMA_VERSION;
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly state: ExecutionState;
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly disclosure: SourceDisclosure;
+  readonly createdAt: string;
+  readonly updatedAt: string;
+  readonly version: number;
+  readonly validation?: ValidationOutcome;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly gate?: HumanDecisionGate;
+  readonly externalResult?: ExternalResult;
+  readonly evidence?: readonly ExecutionEvidence[];
+  readonly usage: UsageSummary;
+  readonly failure?: NormalizedFailure;
+  readonly blockedReason?: string;
+  /** Process-local memory disclosure (STORE-B stage 1). */
+  readonly persistence: {
+    readonly kind: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+  };
+};
+
+export function isTerminalState(state: ExecutionState): state is TerminalExecutionState {
+  return (TERMINAL_STATES as readonly string[]).includes(state);
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts b/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts
@@ -0,0 +1,238 @@
+/**
+ * Deterministic D2-D1 fixture catalogue — source always fixture.
+ */
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+} from "../domain/types";
+import { normalizedFailure } from "../domain/errors";
+
+export type FixtureScenarioId =
+  | "nominal"
+  | "validation_failure"
+  | "auth_failure"
+  | "provider_unavailable"
+  | "rate_limit"
+  | "timeout"
+  | "cancellation"
+  | "blocked_gate"
+  | "protected_path"
+  | "mutation_forbidden"
+  | "partial_result"
+  | "invalid_provider_result"
+  | "late_result"
+  | "secret_redaction"
+  | "source_mismatch";
+
+export type FixtureScenario = {
+  readonly id: FixtureScenarioId;
+  readonly source: "fixture";
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly expectedFailure?: NormalizedFailure;
+  readonly notes: string;
+};
+
+const baseContext = (over: Partial<ExecutionContext> = {}): ExecutionContext => ({
+  projectId: "project:d2d1-fixture",
+  actorId: "actor:fixture",
+  declaredSource: "fixture",
+  protectedPaths: [".env", "secrets"],
+  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
+  ...over,
+});
+
+const baseIntent = (over: Partial<ExecutionIntent> = {}): ExecutionIntent => ({
+  intentId: "intent:fixture:base",
+  correlationId: "corr:fixture:base",
+  requestedLane: "ai",
+  operation: "summarize_read_only",
+  requestedSource: "fixture",
+  requiresHumanGate: false,
+  mutationRequested: false,
+  arbitraryCommandRequested: false,
+  ...over,
+});
+
+const aiCapability: ProviderCapabilityDescriptor = {
+  lane: "ai",
+  capabilityId: "ai:fixture",
+  available: true,
+  verified: true,
+  readOnly: true,
+  supportsCancellation: true,
+  supportsTimeout: true,
+};
+
+export const FIXTURE_CATALOGUE: readonly FixtureScenario[] = [
+  {
+    id: "nominal",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:nominal", correlationId: "corr:fixture:nominal" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Happy path idle→running→succeeded",
+  },
+  {
+    id: "validation_failure",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:validation",
+      correlationId: "corr:fixture:validation",
+      operation: "",
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Invalid operation empty — schema deny",
+  },
+  {
+    id: "auth_failure",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:auth", correlationId: "corr:fixture:auth", requestedLane: "git" }),
+    context: baseContext({ permissions: { gitRead: false, gitWrite: false, providerInvoke: false } }),
+    capability: { ...aiCapability, lane: "git", capabilityId: "git:fixture" },
+    expectedFailure: normalizedFailure({
+      family: "authorization",
+      code: "AUTHORIZATION_ERROR",
+      userMessage: "Insufficient permission for Git read",
+      retryable: true,
+      correlationId: "corr:fixture:auth",
+    }),
+    notes: "Authorization deny",
+  },
+  {
+    id: "provider_unavailable",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:unavail", correlationId: "corr:fixture:unavail" }),
+    context: baseContext(),
+    capability: { ...aiCapability, available: false },
+    notes: "Provider unavailable",
+  },
+  {
+    id: "rate_limit",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:rate", correlationId: "corr:fixture:rate" }),
+    context: baseContext(),
+    capability: aiCapability,
+    expectedFailure: normalizedFailure({
+      family: "rate_limited",
+      code: "RATE_LIMITED",
+      userMessage: "Provider rate limited",
+      retryable: true,
+      correlationId: "corr:fixture:rate",
+    }),
+    notes: "Represents rate limit failure object",
+  },
+  {
+    id: "timeout",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:timeout", correlationId: "corr:fixture:timeout" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "running→timed_out",
+  },
+  {
+    id: "cancellation",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:cancel", correlationId: "corr:fixture:cancel" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "running→cancelled",
+  },
+  {
+    id: "blocked_gate",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:gate",
+      correlationId: "corr:fixture:gate",
+      requiresHumanGate: true,
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Human gate required blocks engagement when unsatisfied",
+  },
+  {
+    id: "protected_path",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:path",
+      correlationId: "corr:fixture:path",
+      targetPath: ".env/token",
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Protected path deny",
+  },
+  {
+    id: "mutation_forbidden",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:mutate",
+      correlationId: "corr:fixture:mutate",
+      mutationRequested: true,
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Mutation forbidden",
+  },
+  {
+    id: "partial_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:partial", correlationId: "corr:fixture:partial" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Partial never succeeded",
+  },
+  {
+    id: "invalid_provider_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:invalid", correlationId: "corr:fixture:invalid" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Invalid provider result → failed",
+  },
+  {
+    id: "late_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:late", correlationId: "corr:fixture:late" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Late result evidence-only",
+  },
+  {
+    id: "secret_redaction",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:secret", correlationId: "corr:fixture:secret" }),
+    context: baseContext(),
+    capability: aiCapability,
+    expectedFailure: normalizedFailure({
+      family: "authentication",
+      code: "AUTHENTICATION_ERROR",
+      userMessage: "Credentials unavailable",
+      retryable: true,
+      correlationId: "corr:fixture:secret",
+    }),
+    notes: "Failure object never carries secrets",
+  },
+  {
+    id: "source_mismatch",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:mismatch",
+      correlationId: "corr:fixture:mismatch",
+      requestedSource: "real",
+    }),
+    context: baseContext({ declaredSource: "fixture" }),
+    capability: aiCapability,
+    notes: "Source mismatch deny",
+  },
+] as const;
+
+export function getFixture(id: FixtureScenarioId): FixtureScenario {
+  const found = FIXTURE_CATALOGUE.find((f) => f.id === id);
+  if (!found) throw new Error(`missing_fixture:${id}`);
+  return found;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -0,0 +1,65 @@
+/**
+ * D2-D1 OA execution-run public barrel.
+ * Sole D2-D technical state authority — memory/fixture-first only.
+ * Concrete server composition is NOT exported here — use ./server.
+ */
+export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
+export type {
+  Completeness,
+  ExecutionContext,
+  ExecutionEvidence,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  ExecutionState,
+  ExternalResult,
+  FailureCode,
+  FailureFamily,
+  HumanDecisionGate,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+  ProviderLane,
+  SourceDisclosure,
+  UsageSummary,
+  ValidationOutcome,
+} from "./domain/types";
+export { normalizedFailure } from "./domain/errors";
+export {
+  decideTransition,
+  isAllowedTransition,
+  listAllowedTransitions,
+} from "./domain/transitions";
+export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
+export { evaluateReadOnlyPolicy } from "./domain/policy";
+export type { PolicyDecision, PolicyInput } from "./domain/policy";
+export {
+  assertSourceHonest,
+  canSucceed,
+  createOfficialEvidence,
+  createSourceDisclosure,
+  isIsoTimestamp,
+  usageUnavailable,
+} from "./domain/evidence";
+export {
+  canAcceptLateResult,
+  checkExecutionRunInvariants,
+  LATE_RESULT_ELIGIBLE_STATES,
+} from "./domain/invariants";
+export { createExecutionRun } from "./application/createExecutionRun";
+export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
+export { transitionExecutionRun } from "./application/transitionExecutionRun";
+export type {
+  TransitionExecutionRunInput,
+  TransitionExecutionRunResult,
+} from "./application/transitionExecutionRun";
+export { persistExecutionRun } from "./application/persistExecutionRun";
+export type { PersistExecutionRunResult } from "./application/persistExecutionRun";
+export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
+export type {
+  ExecutionRunSchemaName,
+  ExecutionRunSchemaValidationPort,
+} from "./ports/executionRunSchemaValidation";
+export type { ClockPort } from "./ports/clockPort";
+export type { IdentityPort } from "./ports/identityPort";
+export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
+export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts
@@ -0,0 +1,135 @@
+/**
+ * AJV Draft-07 boundary validation for D2-D1 — infrastructure only.
+ * Domain/application must not import this module.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import Ajv from "ajv";
+import type {
+  ExecutionRunSchemaName,
+  ExecutionRunSchemaValidationPort,
+  ExecutionRunSchemaValidationResult,
+} from "../ports/executionRunSchemaValidation";
+
+const MAX_ERRORS = 20;
+
+const SCHEMA_FILES: Record<ExecutionRunSchemaName, string> = {
+  "execution-intent": "execution-intent.schema.json",
+  "execution-context": "execution-context.schema.json",
+  "provider-capability-descriptor": "provider-capability-descriptor.schema.json",
+  "validation-outcome": "validation-outcome.schema.json",
+  "execution-run": "execution-run.schema.json",
+  "external-result": "external-result.schema.json",
+  "execution-evidence": "execution-evidence.schema.json",
+  "source-disclosure": "source-disclosure.schema.json",
+  "human-decision-gate": "human-decision-gate.schema.json",
+  "usage-summary": "usage-summary.schema.json",
+  "normalized-failure": "normalized-failure.schema.json",
+  "create-execution-run-input": "create-execution-run-input.schema.json",
+  "transition-execution-run-input": "transition-execution-run-input.schema.json",
+};
+
+const SCHEMA_IDS: Record<ExecutionRunSchemaName, string> = {
+  "execution-intent":
+    "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
+  "execution-context":
+    "https://sfia.local/schemas/d2-d1/execution-context.schema.json",
+  "provider-capability-descriptor":
+    "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json",
+  "validation-outcome":
+    "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json",
+  "execution-run": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
+  "external-result":
+    "https://sfia.local/schemas/d2-d1/external-result.schema.json",
+  "execution-evidence":
+    "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
+  "source-disclosure":
+    "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
+  "human-decision-gate":
+    "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json",
+  "usage-summary": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json",
+  "normalized-failure":
+    "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
+  "create-execution-run-input":
+    "https://sfia.local/schemas/d2-d1/create-execution-run-input.schema.json",
+  "transition-execution-run-input":
+    "https://sfia.local/schemas/d2-d1/transition-execution-run-input.schema.json",
+};
+
+/** Deterministic load order: leaves before composites that $ref them. */
+const LOAD_ORDER: readonly ExecutionRunSchemaName[] = [
+  "normalized-failure",
+  "execution-intent",
+  "execution-context",
+  "provider-capability-descriptor",
+  "validation-outcome",
+  "external-result",
+  "execution-evidence",
+  "source-disclosure",
+  "human-decision-gate",
+  "usage-summary",
+  "execution-run",
+  "create-execution-run-input",
+  "transition-execution-run-input",
+];
+
+export class AjvExecutionRunSchemaValidation
+  implements ExecutionRunSchemaValidationPort
+{
+  private readonly ajv: Ajv.Ajv;
+  private ready = false;
+  private readonly schemasDir: string;
+
+  constructor(schemasDir?: string) {
+    this.schemasDir = schemasDir ?? path.join(__dirname, "../schemas");
+    this.ajv = new Ajv({
+      allErrors: true,
+      schemaId: "auto",
+      meta: true,
+      validateSchema: true,
+      format: "full",
+      unknownFormats: "ignore",
+    });
+  }
+
+  private ensureLoaded(): void {
+    if (this.ready) return;
+    for (const name of LOAD_ORDER) {
+      const file = SCHEMA_FILES[name];
+      const full = path.join(this.schemasDir, file);
+      const raw = JSON.parse(fs.readFileSync(full, "utf8")) as object;
+      this.ajv.addSchema(raw);
+    }
+    this.ready = true;
+  }
+
+  /** Test helper: confirms every named schema compiled and resolves. */
+  listLoadedSchemaIds(): string[] {
+    this.ensureLoaded();
+    return LOAD_ORDER.map((name) => SCHEMA_IDS[name]);
+  }
+
+  async validate(
+    schema: ExecutionRunSchemaName,
+    value: unknown,
+  ): Promise<ExecutionRunSchemaValidationResult> {
+    try {
+      if (value === null || value === undefined) {
+        return { ok: false, errors: ["value_null_or_undefined"] };
+      }
+      this.ensureLoaded();
+      const validate = this.ajv.getSchema(SCHEMA_IDS[schema]);
+      if (!validate) {
+        return { ok: false, errors: ["schema_not_loaded"] };
+      }
+      const ok = validate(value) as boolean;
+      if (ok) return { ok: true };
+      const errors = (validate.errors ?? [])
+        .slice(0, MAX_ERRORS)
+        .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
+      return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
+    } catch {
+      return { ok: false, errors: ["schema_validation_internal_failure"] };
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts
@@ -0,0 +1,8 @@
+import type { ClockPort } from "../ports/clockPort";
+
+export class FixedClock implements ClockPort {
+  constructor(private readonly iso: string) {}
+  nowIso(): string {
+    return this.iso;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts
@@ -0,0 +1,27 @@
+import type { ExecutionRun } from "../domain/types";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { MemoryExecutionRunStore } from "./memoryExecutionRunStore";
+
+export class MemoryExecutionRunRepository implements ExecutionRunRepositoryPort {
+  constructor(private readonly store: MemoryExecutionRunStore) {}
+
+  async save(run: ExecutionRun): Promise<void> {
+    this.store.runs.set(run.runId, structuredClone(run));
+  }
+
+  async getById(runId: string): Promise<ExecutionRun | null> {
+    const found = this.store.runs.get(runId);
+    return found ? structuredClone(found) : null;
+  }
+
+  async listByCorrelationId(correlationId: string): Promise<ExecutionRun[]> {
+    const out: ExecutionRun[] = [];
+    for (const run of this.store.runs.values()) {
+      if (run.correlationId === correlationId) {
+        out.push(structuredClone(run));
+      }
+    }
+    out.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.runId.localeCompare(b.runId));
+    return out;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts
@@ -0,0 +1,5 @@
+import type { ExecutionRun } from "../domain/types";
+
+export class MemoryExecutionRunStore {
+  readonly runs = new Map<string, ExecutionRun>();
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts
@@ -0,0 +1,22 @@
+import type { IdentityPort } from "../ports/identityPort";
+
+export class SequentialIdentity implements IdentityPort {
+  private run = 0;
+  private evidence = 0;
+  private intent = 0;
+
+  nextRunId(): string {
+    this.run += 1;
+    return `executionrun:d2d1:${String(this.run).padStart(4, "0")}`;
+  }
+
+  nextEvidenceId(): string {
+    this.evidence += 1;
+    return `evidence:d2d1:${String(this.evidence).padStart(4, "0")}`;
+  }
+
+  nextIntentId(): string {
+    this.intent += 1;
+    return `intent:d2d1:${String(this.intent).padStart(4, "0")}`;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts
@@ -0,0 +1,3 @@
+export interface ClockPort {
+  nowIso(): string;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts
@@ -0,0 +1,7 @@
+import type { ExecutionRun } from "../domain/types";
+
+export interface ExecutionRunRepositoryPort {
+  save(run: ExecutionRun): Promise<void>;
+  getById(runId: string): Promise<ExecutionRun | null>;
+  listByCorrelationId(correlationId: string): Promise<ExecutionRun[]>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts
@@ -0,0 +1,34 @@
+export type ExecutionRunSchemaValidationSuccess = { ok: true };
+export type ExecutionRunSchemaValidationFailure = {
+  ok: false;
+  errors: string[];
+};
+export type ExecutionRunSchemaValidationResult =
+  | ExecutionRunSchemaValidationSuccess
+  | ExecutionRunSchemaValidationFailure;
+
+export type ExecutionRunSchemaName =
+  | "execution-intent"
+  | "execution-context"
+  | "provider-capability-descriptor"
+  | "validation-outcome"
+  | "execution-run"
+  | "external-result"
+  | "execution-evidence"
+  | "source-disclosure"
+  | "human-decision-gate"
+  | "usage-summary"
+  | "normalized-failure"
+  | "create-execution-run-input"
+  | "transition-execution-run-input";
+
+export interface ExecutionRunSchemaValidationPort {
+  /**
+   * Fail-closed validation before any metadata exploitation.
+   * Must not throw raw AJV exceptions to callers.
+   */
+  validate(
+    schema: ExecutionRunSchemaName,
+    value: unknown,
+  ): Promise<ExecutionRunSchemaValidationResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts
@@ -0,0 +1,5 @@
+export interface IdentityPort {
+  nextRunId(): string;
+  nextEvidenceId(): string;
+  nextIntentId(): string;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json
@@ -0,0 +1,18 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/create-execution-run-input.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": ["intent", "context"],
+  "properties": {
+    "intent": {
+      "$ref": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json"
+    },
+    "context": {
+      "$ref": "https://sfia.local/schemas/d2-d1/execution-context.schema.json"
+    },
+    "capability": {
+      "$ref": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json"
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json
@@ -0,0 +1,61 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-context.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "projectId",
+    "actorId",
+    "declaredSource",
+    "permissions"
+  ],
+  "properties": {
+    "projectId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "workspaceId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "actorId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "declaredSource": {
+      "type": "string",
+      "enum": ["fixture", "sandbox-real", "real"]
+    },
+    "allowlistRepos": {
+      "type": "array",
+      "maxItems": 64,
+      "items": {
+        "type": "string",
+        "minLength": 1,
+        "maxLength": 1024
+      }
+    },
+    "protectedPaths": {
+      "type": "array",
+      "maxItems": 64,
+      "items": {
+        "type": "string",
+        "minLength": 1,
+        "maxLength": 1024
+      }
+    },
+    "permissions": {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["gitRead", "gitWrite", "providerInvoke"],
+      "properties": {
+        "gitRead": { "type": "boolean" },
+        "gitWrite": { "type": "boolean" },
+        "providerInvoke": { "type": "boolean" }
+      }
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json
@@ -0,0 +1,63 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "evidenceId",
+    "runId",
+    "correlationId",
+    "source",
+    "completeness",
+    "producedAt",
+    "summary",
+    "late",
+    "official"
+  ],
+  "properties": {
+    "evidenceId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "runId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "source": {
+      "type": "string",
+      "enum": ["fixture", "sandbox-real", "real"]
+    },
+    "completeness": {
+      "type": "string",
+      "enum": ["complete", "partial"]
+    },
+    "producedAt": {
+      "type": "string",
+      "format": "date-time"
+    },
+    "digest": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "summary": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 2048
+    },
+    "late": {
+      "type": "boolean"
+    },
+    "official": {
+      "type": "boolean",
+      "const": true
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json
@@ -0,0 +1,58 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "intentId",
+    "correlationId",
+    "requestedLane",
+    "operation",
+    "requestedSource",
+    "requiresHumanGate",
+    "mutationRequested",
+    "arbitraryCommandRequested"
+  ],
+  "properties": {
+    "intentId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "requestedLane": {
+      "type": "string",
+      "enum": ["ai", "git", "cursor", "none"]
+    },
+    "operation": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "requestedSource": {
+      "type": "string",
+      "enum": ["fixture", "sandbox-real", "real"]
+    },
+    "requiresHumanGate": {
+      "type": "boolean"
+    },
+    "mutationRequested": {
+      "type": "boolean"
+    },
+    "arbitraryCommandRequested": {
+      "type": "boolean"
+    },
+    "targetPath": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 1024
+    },
+    "metadata": {
+      "type": "object"
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json
@@ -0,0 +1,178 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
+  "allOf": [
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": [
+        "schemaVersion",
+        "runId",
+        "correlationId",
+        "state",
+        "intent",
+        "context",
+        "disclosure",
+        "createdAt",
+        "updatedAt",
+        "version",
+        "usage",
+        "persistence"
+      ],
+      "properties": {
+        "schemaVersion": {
+          "type": "string",
+          "const": "0.1.0-d2d1"
+        },
+        "runId": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 256
+        },
+        "correlationId": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 256
+        },
+        "state": {
+          "type": "string",
+          "enum": [
+            "idle",
+            "running",
+            "awaiting_human",
+            "succeeded",
+            "failed",
+            "cancelled",
+            "timed_out",
+            "blocked"
+          ]
+        },
+        "intent": {
+          "$ref": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json"
+        },
+        "context": {
+          "$ref": "https://sfia.local/schemas/d2-d1/execution-context.schema.json"
+        },
+        "disclosure": {
+          "$ref": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json"
+        },
+        "createdAt": {
+          "type": "string",
+          "format": "date-time"
+        },
+        "updatedAt": {
+          "type": "string",
+          "format": "date-time"
+        },
+        "version": {
+          "type": "integer",
+          "minimum": 1
+        },
+        "validation": {
+          "$ref": "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json"
+        },
+        "capability": {
+          "$ref": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json"
+        },
+        "gate": {
+          "$ref": "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json"
+        },
+        "externalResult": {
+          "$ref": "https://sfia.local/schemas/d2-d1/external-result.schema.json"
+        },
+        "evidence": {
+          "type": "array",
+          "maxItems": 64,
+          "items": {
+            "$ref": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json"
+          }
+        },
+        "usage": {
+          "$ref": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json"
+        },
+        "failure": {
+          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
+        },
+        "blockedReason": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 512
+        },
+        "persistence": {
+          "type": "object",
+          "additionalProperties": false,
+          "required": ["kind", "durable", "multiInstance", "restartSafe"],
+          "properties": {
+            "kind": { "const": "memory_process_local" },
+            "durable": { "const": false },
+            "multiInstance": { "const": false },
+            "restartSafe": { "const": false }
+          }
+        }
+      }
+    },
+    {
+      "if": {
+        "properties": { "state": { "const": "succeeded" } },
+        "required": ["state"]
+      },
+      "then": {
+        "required": ["externalResult", "evidence"],
+        "properties": {
+          "externalResult": {
+            "type": "object",
+            "additionalProperties": false,
+            "required": ["kind", "completeness", "redactedSummary", "rawPresent"],
+            "properties": {
+              "kind": { "const": "success" },
+              "completeness": { "const": "complete" },
+              "redactedSummary": {
+                "type": "string",
+                "minLength": 1,
+                "maxLength": 2048
+              },
+              "rawPresent": { "const": false }
+            }
+          },
+          "evidence": {
+            "type": "array",
+            "minItems": 1,
+            "maxItems": 64,
+            "items": {
+              "$ref": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json"
+            }
+          }
+        }
+      }
+    },
+    {
+      "if": {
+        "properties": { "state": { "const": "failed" } },
+        "required": ["state"]
+      },
+      "then": {
+        "required": ["failure"]
+      }
+    },
+    {
+      "if": {
+        "properties": { "state": { "const": "blocked" } },
+        "required": ["state"]
+      },
+      "then": {
+        "anyOf": [
+          { "required": ["failure"] },
+          {
+            "required": ["blockedReason"],
+            "properties": {
+              "blockedReason": {
+                "type": "string",
+                "minLength": 1
+              }
+            }
+          }
+        ]
+      }
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json
@@ -0,0 +1,43 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/external-result.schema.json",
+  "oneOf": [
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["kind", "completeness", "redactedSummary", "rawPresent"],
+      "properties": {
+        "kind": { "const": "success" },
+        "completeness": {
+          "type": "string",
+          "enum": ["complete", "partial"]
+        },
+        "redactedSummary": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 2048
+        },
+        "rawPresent": { "const": false }
+      }
+    },
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["kind", "failure"],
+      "properties": {
+        "kind": { "const": "failure" },
+        "failure": {
+          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
+        }
+      }
+    },
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["kind"],
+      "properties": {
+        "kind": { "const": "empty" }
+      }
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json
@@ -0,0 +1,32 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": ["gateId", "question", "required"],
+  "properties": {
+    "gateId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "question": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 2048
+    },
+    "required": { "type": "boolean" },
+    "decision": {
+      "type": "string",
+      "enum": ["approve", "reject", "cancel"]
+    },
+    "decidedAt": {
+      "type": "string",
+      "format": "date-time"
+    },
+    "expiresAt": {
+      "type": "string",
+      "format": "date-time"
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json
@@ -0,0 +1,71 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "family",
+    "code",
+    "userMessage",
+    "technicalDetailsRedacted",
+    "retryable",
+    "correlationId"
+  ],
+  "properties": {
+    "family": {
+      "type": "string",
+      "enum": [
+        "validation",
+        "authentication",
+        "authorization",
+        "provider_unavailable",
+        "rate_limited",
+        "timed_out",
+        "cancelled",
+        "sandbox_blocked",
+        "protected_path",
+        "mutation_forbidden",
+        "human_gate_required",
+        "invalid_provider_result",
+        "internal_normalized_failure",
+        "source_mismatch"
+      ]
+    },
+    "code": {
+      "type": "string",
+      "enum": [
+        "VALIDATION_ERROR",
+        "AUTHENTICATION_ERROR",
+        "AUTHORIZATION_ERROR",
+        "PROVIDER_UNAVAILABLE",
+        "RATE_LIMITED",
+        "TIMED_OUT",
+        "CANCELLED",
+        "SANDBOX_BLOCKED",
+        "PROTECTED_PATH",
+        "MUTATION_FORBIDDEN",
+        "HUMAN_GATE_REQUIRED",
+        "INVALID_PROVIDER_RESULT",
+        "INTERNAL_NORMALIZED_FAILURE",
+        "SOURCE_MISMATCH"
+      ]
+    },
+    "userMessage": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 2048
+    },
+    "technicalDetailsRedacted": {
+      "type": "boolean",
+      "const": true
+    },
+    "retryable": {
+      "type": "boolean"
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json
@@ -0,0 +1,31 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "lane",
+    "capabilityId",
+    "available",
+    "verified",
+    "readOnly",
+    "supportsCancellation",
+    "supportsTimeout"
+  ],
+  "properties": {
+    "lane": {
+      "type": "string",
+      "enum": ["ai", "git", "cursor", "none"]
+    },
+    "capabilityId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "available": { "type": "boolean" },
+    "verified": { "type": "boolean" },
+    "readOnly": { "type": "boolean" },
+    "supportsCancellation": { "type": "boolean" },
+    "supportsTimeout": { "type": "boolean" }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json
@@ -0,0 +1,39 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "source",
+    "providerLane",
+    "limits",
+    "processLocalMemory",
+    "cursorUnverified"
+  ],
+  "properties": {
+    "source": {
+      "type": "string",
+      "enum": ["fixture", "sandbox-real", "real"]
+    },
+    "providerLane": {
+      "type": "string",
+      "enum": ["ai", "git", "cursor", "none"]
+    },
+    "limits": {
+      "type": "array",
+      "maxItems": 64,
+      "items": {
+        "type": "string",
+        "minLength": 1,
+        "maxLength": 256
+      }
+    },
+    "processLocalMemory": {
+      "type": "boolean",
+      "const": true
+    },
+    "cursorUnverified": {
+      "type": "boolean"
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json
@@ -0,0 +1,81 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/transition-execution-run-input.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": ["runId", "reason"],
+  "properties": {
+    "runId": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 256
+    },
+    "reason": {
+      "type": "string",
+      "enum": [
+        "intent_valid",
+        "pre_engagement_block",
+        "human_gate_required",
+        "outputs_validated",
+        "engaged_operation_failed",
+        "time_limit",
+        "cancel_accepted",
+        "human_approve",
+        "human_cancel",
+        "human_reject_or_unsatisfied",
+        "human_gate_expired",
+        "late_result_evidence_only",
+        "forbidden"
+      ]
+    },
+    "completeness": {
+      "type": "string",
+      "enum": ["complete", "partial"]
+    },
+    "externalResult": {
+      "$ref": "https://sfia.local/schemas/d2-d1/external-result.schema.json"
+    },
+    "failure": {
+      "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
+    },
+    "blockingReason": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 512
+    },
+    "lateEvidenceSummary": {
+      "type": "string",
+      "minLength": 1,
+      "maxLength": 2048
+    }
+  },
+  "allOf": [
+    {
+      "if": {
+        "properties": { "reason": { "const": "outputs_validated" } },
+        "required": ["reason"]
+      },
+      "then": {
+        "required": ["completeness", "externalResult"]
+      }
+    },
+    {
+      "if": {
+        "properties": { "reason": { "const": "engaged_operation_failed" } },
+        "required": ["reason"]
+      },
+      "then": {
+        "required": ["failure"]
+      }
+    },
+    {
+      "if": {
+        "properties": { "reason": { "const": "late_result_evidence_only" } },
+        "required": ["reason"]
+      },
+      "then": {
+        "required": ["lateEvidenceSummary"]
+      }
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json
@@ -0,0 +1,40 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json",
+  "oneOf": [
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["status"],
+      "properties": {
+        "status": { "const": "validated" },
+        "inputTokens": {
+          "type": "integer",
+          "minimum": 0
+        },
+        "outputTokens": {
+          "type": "integer",
+          "minimum": 0
+        },
+        "unit": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 64
+        }
+      }
+    },
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["status", "reason"],
+      "properties": {
+        "status": { "const": "unavailable" },
+        "reason": {
+          "type": "string",
+          "minLength": 1,
+          "maxLength": 512
+        }
+      }
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json
@@ -0,0 +1,35 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json",
+  "oneOf": [
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["ok", "validatedAt"],
+      "properties": {
+        "ok": { "const": true },
+        "validatedAt": {
+          "type": "string",
+          "format": "date-time",
+          "minLength": 1
+        }
+      }
+    },
+    {
+      "type": "object",
+      "additionalProperties": false,
+      "required": ["ok", "validatedAt", "failure"],
+      "properties": {
+        "ok": { "const": false },
+        "validatedAt": {
+          "type": "string",
+          "format": "date-time",
+          "minLength": 1
+        },
+        "failure": {
+          "$ref": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json"
+        }
+      }
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts
@@ -0,0 +1,64 @@
+/**
+ * Server-only concrete composition for D2-D1 execution-run.
+ * Assembles memory store + AJV + clock + identity. Not exported from root barrel.
+ */
+import { assertServerOnly } from "./serverOnly";
+import { AjvExecutionRunSchemaValidation } from "../infrastructure/ajvExecutionRunSchemaValidation";
+import { FixedClock } from "../infrastructure/fixedClock";
+import { MemoryExecutionRunRepository } from "../infrastructure/memoryExecutionRunRepository";
+import { MemoryExecutionRunStore } from "../infrastructure/memoryExecutionRunStore";
+import { SequentialIdentity } from "../infrastructure/sequentialIdentity";
+import {
+  createExecutionRun,
+  type CreateExecutionRunResult,
+} from "../application/createExecutionRun";
+import {
+  transitionExecutionRun,
+  type TransitionExecutionRunResult,
+} from "../application/transitionExecutionRun";
+import type { ExecutionRun } from "../domain/types";
+
+assertServerOnly("oa/execution-run/server");
+
+export type ExecutionRunServerComposition = {
+  createExecutionRun: (input: unknown) => Promise<CreateExecutionRunResult>;
+  transitionExecutionRun: (
+    input: unknown,
+  ) => Promise<TransitionExecutionRunResult>;
+  getById: (runId: string) => Promise<ExecutionRun | null>;
+  listByCorrelationId: (correlationId: string) => Promise<ExecutionRun[]>;
+  disclosure: {
+    persistence: "memory_process_local";
+    durable: false;
+    multiInstance: false;
+    restartSafe: false;
+  };
+};
+
+/**
+ * Concrete memory process-local composition. Read helpers only; writes go through
+ * create/transition which enforce invariant + schema guards before save.
+ */
+export function composeExecutionRunMemory(options?: {
+  clockIso?: string;
+}): ExecutionRunServerComposition {
+  const store = new MemoryExecutionRunStore();
+  const clock = new FixedClock(options?.clockIso ?? "2026-08-03T20:00:00.000Z");
+  const identity = new SequentialIdentity();
+  const repository = new MemoryExecutionRunRepository(store);
+  const schemas = new AjvExecutionRunSchemaValidation();
+  const deps = { clock, identity, repository, schemas };
+  return {
+    createExecutionRun: (input) => createExecutionRun(input, deps),
+    transitionExecutionRun: (input) => transitionExecutionRun(input, deps),
+    getById: (runId) => repository.getById(runId),
+    listByCorrelationId: (correlationId) =>
+      repository.listByCorrelationId(correlationId),
+    disclosure: {
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -0,0 +1,9 @@
+/**
+ * Explicit server entrypoint for D2-D1 execution-run concrete composition.
+ * Client surfaces must not import this module.
+ */
+export {
+  composeExecutionRunMemory,
+  type ExecutionRunServerComposition,
+} from "./composeExecutionRunMemory";
+export { assertServerOnly } from "./serverOnly";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts
@@ -0,0 +1,12 @@
+/**
+ * Lightweight server-only guard without adding a package.json dependency.
+ * Mirrors the repository convention used by vertical-slice-runtime without
+ * importing that module (D2-D1 facade integration deferred).
+ */
+export function assertServerOnly(moduleName = "oa/execution-run/server"): void {
+  if (typeof window !== "undefined") {
+    throw new Error(
+      `${moduleName} is server-only and must not run in a browser context.`,
+    );
+  }
+}
```

## Findings (indépendants)

### F-QA-D2D1-01 — CURSOR UNVERIFIED INVARIANT BYPASS
- Severity: **BLOCKING**
- Stop code: `D2-D1 QA BLOCKED — CURSOR UNVERIFIED INVARIANT BYPASS`
- Files:
  - `domain/invariants.ts` (no cursorUnverified / capability.verified anti-claim check)
  - `application/persistExecutionRun.ts` (exports guarded save without Cursor anti-claim)
  - `application/createExecutionRun.ts` + `domain/policy.ts` (allows Cursor capability.verified=true)
  - `index.ts` (exports `persistExecutionRun` on supported public surface)
- Reproduction (temporary QA control, not a project test):
  - `.tmp-sfia-review/qa/controls/cursor-bypass-repro.txt`
  - Path A: `createExecutionRun` with `requestedLane:"cursor"` and `capability.verified:true` → **ok:true**, persists `capability.verified=true` (while global Cursor status remains UNVERIFIED). Disclosure sets `cursorUnverified:true` (contradictory claim pair).
  - Path B: manually constructed run with `disclosure.cursorUnverified:false` + `capability.verified:true` → `checkExecutionRunInvariants` returns `[]`; `persistExecutionRun` → **ok:true** and **save called**.
- Impact: supported persistence surface can materialize a Cursor-verified claim contrary to CAD-07 / global UNVERIFIED reserve; D2-D2 consumers could treat capability.verified as authority.
- Required Morris decision: corrective remediation GO for Cursor anti-claim executable invariant (no auto-fix in this QA cycle).

### F-QA-D2D1-02 — TRANSITION AUTHORITY BYPASS VIA PUBLIC persistExecutionRun
- Severity: **MAJOR**
- Files:
  - `application/persistExecutionRun.ts`
  - `index.ts` (public export)
- Reproduction: `.tmp-sfia-review/qa/controls/transition-bypass-repro.txt`
  - Construct a `state:"succeeded"` run with complete ExternalResult + official evidence without ever calling `decideTransition` / `transitionExecutionRun`.
  - Result: `persistExecutionRun` → **ok:true**, **save called**.
- Impact: structural invariants/schema are enforced, but the eight-state transition matrix is not; a caller of the public barrel can materialize terminal success without the adopted running→succeeded edge.
- Note: server composition does not expose raw repository; bypass is via exported `persistExecutionRun` itself.
- Required Morris decision: whether `persistExecutionRun` must be non-exported / internal-only, or must additionally enforce transition provenance.

## Matrice D2D1-01…09 (QA indépendante)
| Story | Verdict QA | Preuve | Notes |
|---|---|---|---|
| D2D1-01 vocabulary | PASS | types.ts twelve objects; tests | preserved |
| D2D1-02 schemas/AJV | PASS WITH RESERVE | 13 schemas, 0 unknown $ref, adversarial+contract tests green | Cursor anti-claim not in schema/invariants |
| D2D1-03 transitions | PASS WITH MAJOR | 11 edges match adopted matrix; decideTransition pure | public persist bypasses transition authority (F-02) |
| D2D1-04 policy | PASS | policy tests + code | Cursor verified=true allowed by policy (feeds F-01) |
| D2D1-05 evidence | PASS | succeeded creates official evidence; late matrix tests | late eligibility cancelled/timed_out/failed; docs evidence-only, no contradiction found |
| D2D1-06 memory repo | PASS | defensive clones; composition read helpers only | |
| D2D1-07 fixtures | PASS | 15 fixtures; lifecycle coverage | |
| D2D1-08 server-only | PASS | server/compose calls assertServerOnly at load; not in root barrel; app no infra imports | mirrors VSR guard pattern without importing VSR |
| D2D1-09 readiness pack | N/A as delivery claim | QA pack supersedes | |

## Matrice architecture
domain pure ✓ · application ports-only ✓ · infra no business transitions ✓ · server assembles ✓ · no double state machine module ✓ · BUT public persist can write states without transition decision (MAJOR F-02)

## Matrice objets/types/schemas
13 Draft-07 schemas; unique $ids; ExecutionRun $refs nested contracts; NormalizedFailure exact enums; persistence consts; succeeded/failed/blocked conditionals present. Temporary matrix: `.tmp-sfia-review/qa/controls/schema-matrix.json`.

## Matrice create/transition boundary
create/transition accept `unknown`; validate boundary schema before cast/getById; tests observe save+identity (create) and getById+save (transition) not called on invalid input. PASS for validation order on those services.

## Matrice persistence guards
create/transition → persistExecutionRun → invariants → schema → save. Only save call sites: persistExecutionRun + MemoryExecutionRunRepository.store.set. PASS for structural guards; FAIL Cursor anti-claim (F-01); MAJOR transition provenance (F-02).

## Matrice transitions (11)
idle->running:intent_valid
idle->blocked:pre_engagement_block
running->awaiting_human:human_gate_required
running->succeeded:outputs_validated
running->failed:engaged_operation_failed
running->timed_out:time_limit
running->cancelled:cancel_accepted
awaiting_human->running:human_approve
awaiting_human->cancelled:human_cancel
awaiting_human->blocked:human_reject_or_unsatisfied
awaiting_human->timed_out:human_gate_expired


## Matrice succeeded/failed/blocked
Application path enforces ExternalResult+evidence / failure / failure|reason. Structural persist rejects incoherent terminals. Bypass of transition provenance via persist remains MAJOR.

## Matrice late result (8 states)
idle/running/awaiting_human/succeeded/blocked refused; cancelled/timed_out/failed accepted evidence-only — verified by lateResult.test.ts + canAcceptLateResult. Docs: late evidence-only, no alternate eligibility set found → no Morris ambiguity STOP.

## Matrice server-only
compose under server/; assertServerOnly(window) at compose module load; root barrel excludes composition/AJV/store/repo; importBoundaries tests green.

## Matrice Cursor anti-claim
**FAIL (BLOCKING F-01)** — see findings.

## Matrice repository / fixtures / tests
memory process-local, clones, deterministic list; 15 fixtures source=fixture; targeted 12 files/69 tests; full 114/1115; governance 73.

## Commandes et résultats
- targeted vitest execution-run: 12 files, 69 tests PASS
- typecheck: PASS
- lint: PASS (No ESLint warnings or errors)
- build: PASS
- full vitest: 114 files, 1115 tests PASS
- modeled governance: 73 PASS
- diff-check: clean
- secret scan: empty
- package hash unchanged: YES
- package.json/lock unchanged: YES

### Sorties utiles
#### typecheck

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


#### vitest targeted tail
 ✓ __tests__/oa/execution-run/transitions.test.ts > D2-D1 transition authority > refuses partial succeeded 0ms
 ✓ __tests__/oa/execution-run/transitions.test.ts > D2-D1 transition authority > refuses late result state mutation 0ms
 ✓ __tests__/oa/execution-run/transitions.test.ts > D2-D1 transition authority > refuses idle→succeeded 0ms
 ✓ __tests__/oa/execution-run/transitions.test.ts > D2-D1 transition authority > samples refused transitions per non-terminal state 0ms
 ✓ __tests__/oa/execution-run/transitions.test.ts > D2-D1 transition authority > preserves exactly the adopted allowed edge count 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies mutation 1ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies protected path 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies auth failure 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies provider unavailable 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies source mismatch 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > denies unsatisfied human gate 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > accepts nominal 0ms
 ✓ __tests__/oa/execution-run/policy.test.ts > D2-D1 read-only policy > never exposes secrets in failures 0ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > distinguishes sources honestly 1ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > partial cannot succeed 0ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > creates official evidence without secrets 0ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > marks process-local disclosure 0ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > usage unavailable when not validated 0ms
 ✓ __tests__/oa/execution-run/evidence.test.ts > D2-D1 evidence and disclosure > validates ISO timestamps 0ms

 Test Files  12 passed (12)
      Tests  69 passed (69)
   Start at  04:05:26
   Duration  660ms (transform 210ms, setup 760ms, collect 744ms, tests 584ms, environment 1ms, prepare 582ms)

#### vitest full summary
 Test Files  114 passed (114)
      Tests  1115 passed (1115)
#### governance summary
✔ adversarial: bad schemaVersion rejected (5.237625ms)
✔ adversarial: additionalProperties rejected (4.544583ms)
✔ adversarial: supersedes without xct: prefix rejected (3.857208ms)
✔ catalog CancelExecution dual-context ownership is explicit (0.119708ms)
ℹ tests 73
ℹ suites 0
ℹ pass 73
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 174.37775
#### Cursor bypass repro
=== A: createExecutionRun with Cursor capability.verified=true ===
{
  "ok": true,
  "state": "idle",
  "capabilityVerified": true,
  "cursorUnverified": true
}
=== B: persistExecutionRun with cursorUnverified=false + capability.verified=true ===
invariants []
{
  "ok": true,
  "saveCalled": true
}
=== C: createSourceDisclosure default for cursor ===
{
  source: 'fixture',
  providerLane: 'cursor',
  limits: [],
  processLocalMemory: true,
  cursorUnverified: true
}

#### Transition bypass repro
{"ok":true,"saved":true,"note":"succeeded persisted without running→outputs_validated transition"}


## Réserves (transportées, non levées)
- R-QA-REV-01 OPEN NOT LIFTED
- R-QA-REV-02 OPEN NOT LIFTED
- R-QA-D2C-01 OPEN NOT LIFTED
- CURSOR PRODUCT CAPABILITIES — UNVERIFIED

## Claims autorisés
- QA independently revalidated package hash/count
- technical validations green
- BLOCKING/MAJOR findings recorded with reproductions
- no project mutation during QA

## Claims interdits
- QA PASS
- D2-D2 authorized
- Cursor verified
- durable/restart-safe/multi-instance/production/RUN/PR ready
- automatic correction performed

## Git Truth finale
- branch/HEAD/origin/main unchanged
- staged empty; no tracked diff
- package identical (48 / `1f9903c7…`)
- remote delivery branch absent; PR absent
- NO project staging/commit/push/PR
- only remote write: Review Handoff L3 (after this pack)

## Verdict
V3.1-D2-D1 QA BLOCKED —

SOURCE PACKAGE VERIFIED —
QA FINDINGS RECORDED —
NO PROJECT MUTATION —

F-QA-D2D1-01 BLOCKING — CURSOR UNVERIFIED INVARIANT BYPASS —
files: domain/invariants.ts, application/persistExecutionRun.ts, application/createExecutionRun.ts, domain/policy.ts, index.ts —
repro: .tmp-sfia-review/qa/controls/cursor-bypass-repro.txt —
impact: supported surface can persist Cursor verified claims contrary to global UNVERIFIED —

F-QA-D2D1-02 MAJOR — TRANSITION AUTHORITY BYPASS VIA PUBLIC persistExecutionRun —
files: application/persistExecutionRun.ts, index.ts —
repro: .tmp-sfia-review/qa/controls/transition-bypass-repro.txt —
impact: structurally valid succeeded run persistable without adopted transition —

NEXT REQUIRED MORRIS DECISION —
GO CORRECTION SFIA STUDIO V3.1-D2-D1 (Cursor anti-claim + persist surface authority) —

NO AUTOMATIC CORRECTION —
NO STAGING —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-D2 —

TECHNICAL SUITE GREEN DOES NOT OVERRIDE BLOCKING FINDINGS —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED —

READY FOR CHATGPT QA REVIEW

## Prochaine gate candidate
Après correction Morris + re-QA uniquement: reprise éventuelle vers publication.
Ne pas proposer GO PUBLICATION / GO PR READINESS / GO MERGE / GO DELIVERY D2-D2 tant que QA PASS non obtenu.

## Handoff before/after
- before tip/blob: 5ccf3813943d73a386b500f2a4b250ece304e051 / a22d886553ecafb7a3cd0e1feed6e7e73f5f5ad0
- after tip/blob: calculated after publication; reported in terminal Cursor response.
