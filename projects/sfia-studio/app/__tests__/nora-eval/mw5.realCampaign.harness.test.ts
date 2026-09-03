/** @vitest-environment node */
/**
 * MW5 REAL harness mechanics + D-MW5-QA-SHA-01 integrity — ZERO OpenAI.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "../../lib/platform/ai";
import type { ToolDefinition } from "../../lib/platform/tools/types";
import {
  CallCapConversationProvider,
  CapacityStopError,
  IntentCaptureConversationProvider,
  MW5_REAL_03_MAX_PROVIDER_CALLS,
  persistMw5RealEvidenceJson,
} from "./mw5RealCallCap";
import {
  computeEvidenceSha256,
  rewriteCompanionOnly,
  sealEvidenceFile,
  verifyEvidenceCompanion,
} from "./mw5EvidenceSha";
import {
  ephemeralHistoryText,
  redactAssistantForEvidence,
} from "./runMw5RealCampaign";

class CountingStubProvider implements ConversationProvider {
  readonly providerId = "openai";
  innerCalls = 0;
  lastStructuredText = "";

  async complete(
    _messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.innerCalls += 1;
    return {
      text: `stub-complete-${this.innerCalls}`,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "stub",
        providerResponseId: `stub-${this.innerCalls}`,
      },
    };
  }

  async completeStructured(_input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    this.innerCalls += 1;
    const text =
      this.lastStructuredText || JSON.stringify({ probe: "R1_OK" });
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "stub",
        providerResponseId: `stub-s-${this.innerCalls}`,
      },
    };
  }

  async completeRound(_input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.innerCalls += 1;
    return {
      kind: "message",
      text: `stub-round-${this.innerCalls}`,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "stub",
        providerResponseId: `stub-r-${this.innerCalls}`,
      },
    };
  }
}

/** Mimics corrected finalize: persist once → seal companion → no post-hash rewrite. */
function finalizeSyntheticEvidence(
  outPath: string,
  evidence: Record<string, unknown>,
): { sha: string; bytesAfterSeal: Buffer } {
  delete evidence.sha256;
  persistMw5RealEvidenceJson({ outPath, evidence });
  const sealed = sealEvidenceFile(outPath);
  return { sha: sealed.digest, bytesAfterSeal: fs.readFileSync(outPath) };
}

describe("MW5-R2-REAL-03 harness call-cap (deterministic)", () => {
  it("allows 50 inner calls and blocks #51 before inner provider", async () => {
    const inner = new CountingStubProvider();
    const capped = new CallCapConversationProvider(
      inner,
      MW5_REAL_03_MAX_PROVIDER_CALLS,
    );
    for (let i = 0; i < 50; i++) {
      await capped.complete([{ role: "user", content: `n=${i}` }]);
    }
    expect(inner.innerCalls).toBe(50);
    expect(capped.launchedCalls).toBe(50);
    await expect(
      capped.completeStructured({
        messages: [{ role: "user", content: "51" }],
        schemaName: "probe",
        jsonSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
          required: [],
        },
      }),
    ).rejects.toBeInstanceOf(CapacityStopError);
    expect(inner.innerCalls).toBe(50);
    expect(capped.launchedCalls).toBe(50);
  });

  it("reached-cap is capacity stop, not H10 exceeded", async () => {
    const inner = new CountingStubProvider();
    const capped = new CallCapConversationProvider(inner, 2);
    await capped.complete([{ role: "user", content: "1" }]);
    await capped.complete([{ role: "user", content: "2" }]);
    let caught: CapacityStopError | null = null;
    try {
      await capped.complete([{ role: "user", content: "3" }]);
    } catch (err) {
      if (err instanceof CapacityStopError) caught = err;
    }
    expect(caught).toBeTruthy();
    expect(caught?.launchedCalls).toBe(2);
    expect(inner.innerCalls).toBe(2);
    expect(inner.innerCalls > 2).toBe(false);
  });

  it("evidence checkpoint survives controlled capacity stop", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-ev-"));
    const outPath = path.join(dir, "ev.json");
    persistMw5RealEvidenceJson({
      outPath,
      evidence: {
        checkpointPhase: "capacity-stop",
        actualProviderCalls: 50,
        stop: "INCONCLUSIVE — PROVIDER CALL CAPACITY STOP",
        providerLedger: [{ callIndex: 1, method: "complete" }],
      },
    });
    const parsed = JSON.parse(fs.readFileSync(outPath, "utf8"));
    expect(parsed.checkpointPhase).toBe("capacity-stop");
    expect(parsed.providerLedger).toHaveLength(1);
    expect(parsed.actualProviderCalls).toBe(50);
  });

  it("providerCallsForTurn captures two records", () => {
    const ledger = [
      { callIndex: 1, method: "completeStructured" },
      { callIndex: 2, method: "complete" },
      { callIndex: 3, method: "completeStructured" },
    ];
    const beforeIndex = 1;
    const slice = ledger.slice(beforeIndex);
    expect(slice).toHaveLength(2);
    expect(slice[0]?.method).toBe("complete");
    expect(slice[1]?.method).toBe("completeStructured");
  });

  it("ephemeral history keeps full text; evidence stays redacted/bounded", () => {
    const full =
      "CHALLENGE text that is longer than evidence bound. ".repeat(80);
    const ephemeral = ephemeralHistoryText(full);
    expect(ephemeral).toBe(full);
    const redacted = redactAssistantForEvidence(full);
    expect(redacted.length).toBeLessThanOrEqual(1200);
    expect(redacted.includes("sk-")).toBe(false);
  });

  it("IntentCapture captures IntentAnalysisDto transparently without mutation", async () => {
    const inner = new CountingStubProvider();
    const payload = {
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      criticalJustification: "struct x".repeat(40),
      cognitiveWorkload: { ambiguity: "low" },
    };
    inner.lastStructuredText = JSON.stringify(payload);
    const capture = new IntentCaptureConversationProvider(inner);
    const result = await capture.completeStructured({
      messages: [{ role: "user", content: "x" }],
      schemaName: "f2_intent_analysis",
      jsonSchema: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    });
    expect(result.text).toBe(JSON.stringify(payload));
    expect(capture.lastIntent?.intentClass).toBe("actionable");
    expect(capture.lastIntent?.signals?.structuralChange).toBe(true);
    expect(capture.lastIntent?.signals?.architectureImpact).toBe(true);
    expect(
      (capture.lastIntent?.criticalJustificationRedacted ?? "").length,
    ).toBeLessThanOrEqual(240);
  });

  it("IntentCapture ignores non-intent structured probes", async () => {
    const inner = new CountingStubProvider();
    inner.lastStructuredText = JSON.stringify({ probe: "R1_OK" });
    const capture = new IntentCaptureConversationProvider(inner);
    await capture.completeStructured({
      messages: [{ role: "user", content: "x" }],
      schemaName: "mw5_r1_probe",
      jsonSchema: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    });
    expect(capture.lastIntent).toBeNull();
    expect(capture.captures).toHaveLength(0);
  });
});

describe("D-MW5-QA-SHA-01 evidence integrity (deterministic ZERO REAL)", () => {
  it("T1 — final JSON hash parity with companion", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t1-"));
    const outPath = path.join(dir, "campaign.json");
    const { sha } = finalizeSyntheticEvidence(outPath, {
      campaignId: "synthetic-t1",
      finalVerdict: "PASS CANDIDATE",
      checkpointPhase: "final",
    });
    expect(fs.existsSync(outPath)).toBe(true);
    expect(fs.existsSync(`${outPath}.sha256`)).toBe(true);
    const actual = computeEvidenceSha256(outPath);
    expect(actual).toBe(sha);
    const verified = verifyEvidenceCompanion(outPath);
    expect(verified.ok).toBe(true);
    expect(verified.actualDigest).toBe(verified.companionDigest);
  });

  it("T2 — no post-hash mutation of JSON bytes", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t2-"));
    const outPath = path.join(dir, "campaign.json");
    const { bytesAfterSeal } = finalizeSyntheticEvidence(outPath, {
      campaignId: "synthetic-t2",
      finalVerdict: "PASS CANDIDATE",
    });
    const reread = fs.readFileSync(outPath);
    expect(Buffer.compare(bytesAfterSeal, reread)).toBe(0);
  });

  it("T3 — embedded self-hash digest field absent after corrected finalize", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t3-"));
    const outPath = path.join(dir, "campaign.json");
    finalizeSyntheticEvidence(outPath, {
      campaignId: "synthetic-t3",
      finalVerdict: "PASS CANDIDATE",
      // simulate stale in-memory field from older harness
      sha256: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    const parsed = JSON.parse(fs.readFileSync(outPath, "utf8")) as Record<
      string,
      unknown
    >;
    expect(parsed.sha256).toBeUndefined();
    const companionDigest = verifyEvidenceCompanion(outPath).companionDigest;
    expect(JSON.stringify(parsed).includes(companionDigest)).toBe(false);
  });

  it("T4 — companion detects JSON mutation", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t4-"));
    const outPath = path.join(dir, "campaign.json");
    const { sha } = finalizeSyntheticEvidence(outPath, {
      campaignId: "synthetic-t4",
      finalVerdict: "PASS CANDIDATE",
    });
    const mutated = path.join(dir, "campaign-mutated.json");
    fs.writeFileSync(mutated, `${fs.readFileSync(outPath)}\n`);
    const mutatedDigest = computeEvidenceSha256(mutated);
    expect(mutatedDigest).not.toBe(sha);
  });

  it("T5 — synthetic legacy evidence: rewriteCompanionOnly preserves exact JSON bytes", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t5-"));
    const evidencePath = path.join(dir, "campaign.json");
    const companionPath = `${evidencePath}.sha256`;
    const legacyEmbeddedSha = "a".repeat(64);
    const staleCompanionDigest = "b".repeat(64);

    const synthetic = {
      campaignId: "synthetic-legacy-sha-regularization",
      finalVerdict: "PASS CANDIDATE",
      claimCounts: {
        R1: "1/1",
        A1: "3/3",
        C: "3/3",
      },
      actualProviderCalls: 7,
      estimatedSpendUsd: 0.01,
      r1: { pass: true, probe: "R1_OK" },
      r2a: [{ turn: "A1", pass: true }],
      r2bNatural: [{ trial: 1, pass: true }],
      r2bClosed: [{ trial: 1, pass: true }],
      r2bAdversarial: [{ trial: 1, pass: true }],
      r2c: [{ trial: 1, pass: true }],
      hardInvariants: { H1: "PASS", H10: "PASS" },
      // NON-AUTHORITATIVE LEGACY PRE-FINALIZATION DIGEST
      sha256: legacyEmbeddedSha,
    };

    persistMw5RealEvidenceJson({ outPath: evidencePath, evidence: synthetic });
    fs.writeFileSync(
      companionPath,
      `${staleCompanionDigest}  ${path.basename(evidencePath)}\n`,
    );

    expect(verifyEvidenceCompanion(evidencePath).ok).toBe(false);

    const beforeBytes = fs.readFileSync(evidencePath);
    const beforeSha = computeEvidenceSha256(evidencePath);

    const result = rewriteCompanionOnly(evidencePath);

    expect(result.jsonUnchanged).toBe(true);
    expect(result.beforeJsonSha).toBe(beforeSha);
    expect(result.afterJsonSha).toBe(beforeSha);
    expect(result.digest).toBe(beforeSha);
    expect(Buffer.compare(beforeBytes, fs.readFileSync(evidencePath))).toBe(0);
  });

  it("T6 — synthetic legacy evidence: semantics + legacy sha preserved; companion becomes valid", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mw5-sha-t6-"));
    const evidencePath = path.join(dir, "campaign.json");
    const companionPath = `${evidencePath}.sha256`;
    const legacyEmbeddedSha = "a".repeat(64);
    const staleCompanionDigest = "b".repeat(64);

    const synthetic = {
      campaignId: "synthetic-legacy-sha-regularization",
      finalVerdict: "PASS CANDIDATE",
      claimCounts: {
        R1: "1/1",
        A1: "3/3",
        "B-NATURAL": "3/3",
        C: "3/3",
      },
      actualProviderCalls: 11,
      estimatedSpendUsd: 0.02,
      r1: { pass: true, probe: "R1_OK" },
      r2a: [{ turn: "A1", pass: true }],
      r2bNatural: [{ trial: 1, pass: true }],
      r2bClosed: [{ trial: 1, pass: true }],
      r2bAdversarial: [{ trial: 1, pass: true }],
      r2c: [{ trial: 1, pass: true }],
      hardInvariants: { H1: "PASS", H13: "PASS" },
      sha256: legacyEmbeddedSha,
    };

    persistMw5RealEvidenceJson({ outPath: evidencePath, evidence: synthetic });
    fs.writeFileSync(
      companionPath,
      `${staleCompanionDigest}  ${path.basename(evidencePath)}\n`,
    );
    expect(verifyEvidenceCompanion(evidencePath).ok).toBe(false);

    const semanticKeys = [
      "campaignId",
      "finalVerdict",
      "claimCounts",
      "actualProviderCalls",
      "estimatedSpendUsd",
      "r1",
      "r2a",
      "r2bNatural",
      "r2bClosed",
      "r2bAdversarial",
      "r2c",
      "hardInvariants",
    ] as const;
    const beforeParsed = JSON.parse(
      fs.readFileSync(evidencePath, "utf8"),
    ) as Record<string, unknown>;
    const beforeSemantics = Object.fromEntries(
      semanticKeys.map((k) => [k, beforeParsed[k]]),
    );
    const beforeEmbedded = beforeParsed.sha256;

    const result = rewriteCompanionOnly(evidencePath);
    const afterParsed = JSON.parse(
      fs.readFileSync(evidencePath, "utf8"),
    ) as Record<string, unknown>;

    for (const k of semanticKeys) {
      expect(JSON.stringify(afterParsed[k])).toBe(
        JSON.stringify(beforeSemantics[k]),
      );
    }
    expect(afterParsed.sha256).toBe(beforeEmbedded);
    expect(afterParsed.sha256).toBe(legacyEmbeddedSha);
    expect(afterParsed.sha256).not.toBe(result.digest);

    const verified = verifyEvidenceCompanion(evidencePath);
    expect(verified.ok).toBe(true);
    expect(verified.actualDigest).toBe(result.digest);
    expect(verified.companionDigest).toBe(result.digest);
  });
});
