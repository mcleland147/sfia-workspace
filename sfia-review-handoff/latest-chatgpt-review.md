# SFIA Review Pack — D-MW5-QA-SHA-02 (clean-checkout SHA test decoupling candidate)

## 1. Timestamp (Europe/Paris)
2026-09-03 23:05:54 CEST

## 2–4. Cycle / Typologie / Profil
- Cycle: **8 — Delivery / implémentation**
- Typologie: **RUN**
- Profil: **CRITICAL**

## 5. GO Morris consumed
GO MORRIS — D-MW5-QA-SHA-02 — REMOVE PERMANENT TEST DEPENDENCY ON LOCAL HISTORICAL REAL-03 .TMP EVIDENCE — REPLACE T5/T6 WITH SELF-CONTAINED TEMP/SYNTHETIC LEGACY-EVIDENCE FIXTURE — PRESERVE SHA-01 BEHAVIOR — ZERO REAL — QA TEST ONLY — REVIEW HANDOFF L3 — NO PRODUCT CHANGE — NO PROJECT COMMIT/PUSH/PR/MERGE — NO MW5 CLOSURE — NO MW6.

## 6–7. Repo / worktree / branch / HEAD
- Repository: `mcleland147/sfia-workspace`
- Worktree: `/Users/morris/Projects/sfia-workspace-nora-mw5-critical-challenge-clarification`
- Branch: `delivery/sfia-studio-nora-mw5-critical-challenge-clarification`
- HEAD: `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- origin/main: `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- merge-base: `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- Project commit: **NONE**
- Staged: **NONE**

## 8. Initial Git truth
Verified before mutation:
- HEAD/origin-main/merge-base = `9b45f0d7700a3127fa28c13f37ffae40432ae05c`
- previous handoff tip = `9702996f8d28f7471569942e2ce8fc8584875a2d`
- previous handoff blob = `3fd490b0a03f0220238ab7a056db6d994a2e72db`
- title = `# SFIA Review Pack — D-MW5-QA-SHA-01 (REAL-03 evidence integrity correction candidate)`
- SHA-01 helper + corrected finalize present
- no staged; no project commit

## 9. Previous handoff
- tip: `9702996f8d28f7471569942e2ce8fc8584875a2d`
- blob: `3fd490b0a03f0220238ab7a056db6d994a2e72db`
- title: `# SFIA Review Pack — D-MW5-QA-SHA-01 (REAL-03 evidence integrity correction candidate)`

## 10. Sources read
Process routing / operating model / guardrails / v2.5 method+map; Build Doctrine / Roadmap / Product Completion; Nora backlog 05; latest SHA-01 handoff; `mw5EvidenceSha.ts`; harness test; `runMw5RealCampaign.ts` (read-only).

## 11. CKC Delivery
**ABSENT** — no invented CKC Delivery. Fallback = Cycle 8 method + template + operating model + guardrails + doctrine + handoff + harness QA.

## 12. Convergence pre-check
- Product Completion COMPLETE/CLOSED
- MW0→MW4 CLOSED
- MW5 LOCAL / NOT INTEGRATED
- DLV-05 CLOSED at deterministic tested scope
- REAL-03 R2 REAL BOUNDARY PROVEN at tested scope
- D-MW5-R2 CLOSED
- D-MW5-QA-SHA-01 CLOSED
- D-MW5-QA-SHA-02 OPEN → CLOSURE CANDIDATE (this pack)
- Cognitive Completion NOT PROVEN; MW5 COMPLETE NOT DECIDED; integration NOT AUTHORIZED; runtime v3 NON ADOPTED; MW6 NOT AUTHORIZED

## 13. D-MW5-QA-SHA-01 at entry
**CLOSED BY CHATGPT CRITICAL REVIEW**

## 14–16. Finding / old coupling / why invalid
**D-MW5-QA-SHA-02 — CLEAN-CHECKOUT REAL-EVIDENCE TEST COUPLING**

Old permanent T5/T6:

```typescript
it("T5/T6 — REAL-03 regularization is read-only on JSON + semantic parity", () => {
  const evidencePath = path.resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/mw5-real-campaign/mw5-r2-real-03-1788466809505.json",
  );
  expect(fs.existsSync(evidencePath)).toBe(true);
  // ... rewriteCompanionOnly(evidencePath) against historical artifact
});
```

Why invalid as permanent dependency:
- generated local historical REAL campaign artifact;
- clean checkout / CI cannot require it;
- conflates one-time SHA-01 regularization provenance with durable regression contract;
- historical REAL-03 proof remains in immutable Review Handoffs (REAL-03 + SHA-01).

## 17–19. Correction design / synthetic fixture / stale companion
KEEP: `mw5EvidenceSha.ts` behavior, corrected finalize, REAL-03 JSON + companion.
ADAPT only: `mw5.realCampaign.harness.test.ts`.

Synthetic fixture under `os.tmpdir()` / `mkdtempSync`:
- `campaign.json` with campaignId/finalVerdict/claimCounts/actualProviderCalls/estimatedSpendUsd/r1/r2a/r2bNatural/r2bClosed/r2bAdversarial/r2c/hardInvariants
- legacy embedded `sha256: "a".repeat(64)` = NON-AUTHORITATIVE LEGACY PRE-FINALIZATION DIGEST
- stale companion `"b".repeat(64)  campaign.json` → `verifyEvidenceCompanion.ok === false`
- `rewriteCompanionOnly` → JSON byte-identical; companion valid; semantics + legacy sha preserved

## 20. Exact modified test source

### FILE: `projects/sfia-studio/app/__tests__/nora-eval/mw5.realCampaign.harness.test.ts`

```typescript
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

```

## 21. Helper diff
**NONE** — `mw5EvidenceSha.ts` unchanged this cycle.

## 22. Runner/finalize diff
**NONE** — `runMw5RealCampaign.ts` unchanged this cycle.

## 23–24. Historical REAL-03 JSON / companion
**NONE** — verified still:
- actualFinalFileSha256 = `6502aadea4bcf20ffba8b4576fa2ca3923d4b6267583817d28ff9ce8ae2ed27e`
- companion parity TRUE
- JSON untouched

## 25–30. T1–T6 results
Targeted harness: **13/13 PASS**
- T1 final JSON hash parity — PASS
- T2 no post-hash mutation — PASS
- T3 no embedded self-hash after corrected finalize — PASS
- T4 mutation invalidates companion parity — PASS
- T5 synthetic legacy rewriteCompanionOnly preserves exact JSON bytes — PASS
- T6 semantics + legacy sha preserved; companion becomes valid — PASS

## 31–32. Clean-checkout source greps
```
rg -n "mw5-r2-real-03-1788466809505|\.tmp-sfia-review/mw5-real-campaign" \
  projects/sfia-studio/app/__tests__/nora-eval/mw5.realCampaign.harness.test.ts
```
Result: **NO MATCH** (CLEAN-01 + CLEAN-02)

All T5/T6 inputs created under `os.tmpdir()` (CLEAN-03 structural independence).

## 33–38. Validation
- `npx tsc --noEmit` PASS
- `npm run lint` PASS
- targeted harness 13/13 PASS
- `npm test` PASS (REAL campaign gated/skipped; `MW5_RUN_REAL` unset)
- `npm run build` PASS

## 39. ZERO REAL
- MW5_RUN_REAL unset
- no OpenAI / no live provider
- `mw5.realCampaign.test.ts` remains gated/skipped

## 40. No product mutation
This cycle modified only the harness test file (+ Review Pack). No product/runtime/UI change.

## 41. diff-check
`git diff --check` PASS

## 42. Final Git truth
```
HEAD=9b45f0d7700a3127fa28c13f37ffae40432ae05c
origin/main=9b45f0d7700a3127fa28c13f37ffae40432ae05c
merge-base=9b45f0d7700a3127fa28c13f37ffae40432ae05c
branch=delivery/sfia-studio-nora-mw5-critical-challenge-clarification
```

status:
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/e2e/studio-option-a.spec.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? .tmp-sfia-review/corr-mw5-artifacts/
?? .tmp-sfia-review/corr-mw5-dlv02-artifacts/
?? .tmp-sfia-review/mw5-real-campaign/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.product-authority.facts.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5.challenge.eval.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5.realCampaign.harness.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5.realCampaign.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5EvidenceSha.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw5RealCallCap.ts
?? projects/sfia-studio/app/__tests__/nora-eval/runMw5RealCampaign.ts
?? projects/sfia-studio/app/__tests__/project-assistant/f2.qualificationSignalCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.analyzeIntent.challenge-context.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.session.store.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw5.cosmetic.qualification.robustness.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts
?? projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
?? projects/sfia-studio/app/features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts.ts
?? projects/sfia-studio/app/lib/nora-eval/mw5CosmeticQualificationFixtures.ts
?? projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
?? test-results/
```

## 43. Project Git actions
**NONE**

## 44. Debt states
- D-MW5-R2: CLOSED BY EVIDENCE AT TESTED MW5 SCOPE
- D-MW5-R2-CALL-BUDGET: CLOSED
- D-MW5-QA-SHA-01: CLOSED
- D-MW5-QA-SHA-02: **CLOSURE CANDIDATE PENDING CHATGPT CRITICAL REVIEW**

## 45. Proof ceiling
May claim: MW5 REAL EVIDENCE SHA REGRESSION TESTING IS CLEAN-CHECKOUT PORTABLE — DETERMINISTIC CANDIDATE.
Must NOT claim: MW5 COMPLETE / INTEGRATED / Cognitive Completion / E2E REAL global / runtime v3 / production ready / READY FOR MERGE / MW6.

## 46. Reserves
- Historical REAL-03 proof remains in prior handoffs only; not a permanent unit-test fixture.
- Trajectory link: last identified QA debt before MW5 Integration / Closure Readiness qualification (not this gate).

## 47. Verdict
**D-MW5-QA-SHA-02 — PASS CANDIDATE**

## 48. Next gate
**CHATGPT CRITICAL REVIEW OF D-MW5-QA-SHA-02 ONLY.**
If ChatGPT closes SHA-02 → next recommended gate = MW5 INTEGRATION / CLOSURE READINESS QUALIFICATION (separate Morris decision). No project Git / no MW5 closure / no MW6.
