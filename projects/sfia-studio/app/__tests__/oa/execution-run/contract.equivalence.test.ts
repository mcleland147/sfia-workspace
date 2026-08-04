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
