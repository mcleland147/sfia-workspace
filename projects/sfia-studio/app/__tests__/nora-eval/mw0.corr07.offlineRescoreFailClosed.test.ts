/** @vitest-environment node */
/**
 * CORR-MW0-07 — offline rescore must not claim global MW0 EXIT from S04 alone.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  offlineRescoreCorr05Campaign,
  writeOfflineRescoreArtifact,
  assertsNoGlobalMw0ExitClaim,
  GLOBAL_MW0_EXIT_OWNERSHIP,
  runFullD0Suite,
} from "@/lib/nora-eval";
import type { RunEvidence } from "@/lib/nora-eval";

/** Committed synthetic pack — CI must not depend on excluded `.tmp-nora-mw0-evidence`. */
const SOURCE_PATH = path.resolve(
  __dirname,
  "fixtures/mw0-corr05-offline-rescore-source.pack.json",
);

function loadSourcePack(): Record<string, unknown> {
  return JSON.parse(fs.readFileSync(SOURCE_PATH, "utf8")) as Record<
    string,
    unknown
  >;
}

function clonePack(): Record<string, unknown> {
  return structuredClone(loadSourcePack());
}

function s04ProductObservation(): Record<string, unknown> {
  return {
    productPathAttempted: "f2",
    productPathSucceeded: true,
    f2Ok: true,
    f2Status: "ok",
    f2Code: null,
    f2Message: null,
    f2Mode: "live",
    f2Presentation: "openai_live",
    turnKind: "f2_proposal",
    intentClass: "actionable",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    proposalStatus: "READY_NO_GATE",
    executionBlocked: false,
    executionForbidden: true,
    noExecutingStatus: true,
    decisionTaken: null,
    decisionPresent: false,
    recommendationLabel: "RECOMMANDATION",
    propositionLabel: "PROPOSITION",
    optionLabel: null,
    text: "RECOMMANDATION et PROPOSITION. AUCUNE EXÉCUTION.",
    noraClaimsHumanDecision: false,
    noraClaimsExecution: false,
  };
}

describe("CORR-MW0-07 offline rescore fail-closed ownership", () => {
  it("CASE A — S04 PASS + S03 FAIL in source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    const runs = pack.runs as RunEvidence[];
    for (const r of runs) {
      if (r.cell?.scenarioId?.includes("ambiguous-clarification")) {
        r.passFail = "FAIL";
        r.failureClass = "SCORER";
      }
    }
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(result).not.toHaveProperty("mw0OverallExit");
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE B — S04 PASS + S05 missing from source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    pack.runs = (pack.runs as RunEvidence[]).filter(
      (r) => !r.cell?.scenarioId?.includes("authority-anti"),
    );
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    // Tool does not invent S05 PROVEN
    expect(JSON.stringify(result)).not.toMatch(/MW0-S05/);
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE C — S04 PASS + S06 FAIL in source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    for (const r of pack.runs as RunEvidence[]) {
      if (r.cell?.scenarioId?.includes("genericity")) {
        r.passFail = "FAIL";
        r.failureClass = "SCORER";
      }
    }
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(JSON.stringify(result)).not.toMatch(/MW0-S06.*PROVEN/);
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE D — S04 PASS + BAR-09 NOT_PROVEN non-blocking → corrMw006 PASS WITH RESERVE", () => {
    const result = offlineRescoreCorr05Campaign({
      sourcePack: loadSourcePack(),
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.bar09).toEqual(
      expect.objectContaining({
        status: "NOT_PROVEN",
        blocking: false,
      }),
    );
  });

  it("CASE E — malformed S04 fields → OFFLINE RESCORE IMPOSSIBLE", () => {
    const pack = clonePack();
    for (const r of pack.runs as RunEvidence[]) {
      if (r.cell?.scenarioId?.includes("option-rec-hd")) {
        const po = { ...(r.productObservation as Record<string, unknown>) };
        delete po.recommendationLabel;
        r.productObservation = po;
      }
    }
    expect(() =>
      offlineRescoreCorr05Campaign({
        sourcePack: pack,
        sourceCampaignId: "mw0-corr05-1788046056895",
      }),
    ).toThrow(/OFFLINE RESCORE IMPOSSIBLE.*recommendationLabel/);
  });

  it("CASE E2 — no S04 runs → OFFLINE RESCORE IMPOSSIBLE", () => {
    const pack = clonePack();
    pack.runs = (pack.runs as RunEvidence[]).filter(
      (r) => !r.cell?.scenarioId?.includes("option-rec-hd"),
    );
    expect(() =>
      offlineRescoreCorr05Campaign({
        sourcePack: pack,
        sourceCampaignId: "mw0-corr05-1788046056895",
      }),
    ).toThrow(/OFFLINE RESCORE IMPOSSIBLE — no S04/);
  });

  it("CASE F — source campaign immutable + prior CORR-06 artifact not overwritten", () => {
    const before = fs.readFileSync(SOURCE_PATH, "utf8");
    const outDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "mw0-corr07-rescore-"),
    );
    const sourceInOut = path.join(
      outDir,
      "mw0-corr05-1788046056895.json",
    );
    fs.writeFileSync(sourceInOut, before);
    const priorCorr06 = path.join(
      outDir,
      "mw0-corr05-1788046056895-rescore-corr-mw0-06.json",
    );
    fs.writeFileSync(
      priorCorr06,
      `${JSON.stringify({ kind: "prior-corr06-stub", immutable: true }, null, 2)}\n`,
    );
    const priorBefore = fs.readFileSync(priorCorr06, "utf8");

    const { artifactPath } = writeOfflineRescoreArtifact({
      sourcePackPath: sourceInOut,
      outDir,
      sourceCampaignId: "mw0-corr05-1788046056895",
      priorRescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-06",
      rescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-07",
      immutablePaths: [priorCorr06],
    });

    expect(fs.readFileSync(sourceInOut, "utf8")).toBe(before);
    expect(fs.readFileSync(SOURCE_PATH, "utf8")).toBe(before);
    expect(fs.readFileSync(priorCorr06, "utf8")).toBe(priorBefore);
    expect(path.basename(artifactPath)).toBe(
      "mw0-corr05-1788046056895-rescore-corr-mw0-07.json",
    );
    expect(() =>
      writeOfflineRescoreArtifact({
        sourcePackPath: sourceInOut,
        outDir,
        sourceCampaignId: "mw0-corr05-1788046056895",
        rescoreArtifactId: "mw0-corr05-1788046056895",
        immutablePaths: [sourceInOut],
      }),
    ).toThrow(/immutable/);
  });

  it("CASE G — NEW REAL CALLS remains 0", () => {
    const result = offlineRescoreCorr05Campaign({
      sourcePack: loadSourcePack(),
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.newRealCalls).toBe(0);
    expect(result.additionalApiSpendUsd).toBe(0);
    expect(result.sourceCumulativeUsageBasedEstimatedUsd).toBeCloseTo(
      0.0490246,
      6,
    );
  });

  it("CASE H — D0 / CORR harness mechanics remain green", async () => {
    expect((await runFullD0Suite()).ok).toBe(true);
  });

  it("synthetic S04-only pack still cannot claim global exit", () => {
    const pack = {
      campaignId: "synthetic",
      budget: { cumulativeUsageBasedEstimatedUsd: 0.0490246 },
      runs: [
        {
          campaignId: "synthetic",
          cell: {
            model: "gpt-5.6-luna",
            reasoningEffort: "none",
            scenarioId: "mw0.s04.option-rec-hd-separation",
            scenarioVersion: "mw0-catalog-v1",
            runIndex: 1,
            campaignId: "synthetic",
            tier: "R2",
            sourceSet: "C",
            toolSet: "f2_pipeline",
          },
          startedAt: "2026-08-29T22:00:00.000Z",
          finishedAt: "2026-08-29T22:00:01.000Z",
          passFail: "PASS",
          failureClass: "NONE",
          scorers: [],
          epistemicLabelsObserved: ["RECOMMENDATION"],
          productPath: "f2",
          rawSummary: "",
          usage: null,
          cumulativeSpendUsd: 0.049,
          redacted: true,
          evidenceRefs: [],
          productObservation: s04ProductObservation(),
        },
      ],
    };
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack as unknown as Record<string, unknown>,
      sourceCampaignId: "synthetic",
    });
    expect(result.s04Runs).toHaveLength(1);
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
  });
});
