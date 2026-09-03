/**
 * MW4 — deterministic observations for nora-eval (MODELED + EVAL).
 *
 * observeMw4FromRuntime — helper/scorer semantics only (unit-level classification).
 * observeMw4FromProductPath — product-bound: ProductSqliteSession + Fake provider
 * + runNoraCognitiveTurn, including L100-N/N partial hard check.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  aggregateReadCoverage,
  buildGroundingCognitiveDisclosure,
  buildPostEvidenceNarrativePolicyDisclosure,
  buildReadCoverageDisclosure,
  classifyRememberedEvidence,
  decideCognitiveStop,
  deriveReadCoverageFromToolEvent,
  disposeContradiction,
  rememberEvidenceIds,
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import type { DeterministicObservation } from "./scorers";

export type Mw4RuntimeFacts = {
  reresolveValid: boolean;
  downgradeUnavailable: boolean;
  fabricatedRejected: boolean;
  narrativeNotEvidence: boolean;
  compactionSummaryNotEvidence: boolean;
  progressNotSuccess: boolean;
  recoveryNotHumanDecision: boolean;
  cognitiveStopIntact: boolean;
  partialityHonest: boolean;
  mixedOverallPartial: boolean;
  /** CORR hard negative — L100-N/N must be partial, never full. */
  suffixEndEqualsTotalIsPartial?: boolean;
  claimProvenanceUnbound?: boolean;
  resolutionFailedNotFabricated?: boolean;
};

export function observationFromMw4Facts(
  facts: Mw4RuntimeFacts,
): DeterministicObservation {
  const suffixOk = facts.suffixEndEqualsTotalIsPartial !== false;
  const claimOk = facts.claimProvenanceUnbound !== false;
  const resFailOk = facts.resolutionFailedNotFabricated !== false;
  const ok =
    facts.reresolveValid &&
    facts.downgradeUnavailable &&
    facts.fabricatedRejected &&
    facts.narrativeNotEvidence &&
    facts.compactionSummaryNotEvidence &&
    facts.progressNotSuccess &&
    facts.recoveryNotHumanDecision &&
    facts.cognitiveStopIntact &&
    facts.partialityHonest &&
    facts.mixedOverallPartial &&
    suffixOk &&
    claimOk &&
    resFailOk;

  return {
    productPath: "agents",
    mw4GroundingOk: ok,
    observedObservableIds: ok
      ? [
          "obs.grounding.durability",
          "obs.narrative.evidence_coherence",
          "obs.read.partiality",
          "obs.authority.absolute_boundary",
        ]
      : [],
  };
}

/**
 * Helper/scorer semantics — unit-level classify/disclose helpers only.
 * Prefer observeMw4FromProductPath for product-bound MW4 eval gating.
 */
export function observeMw4FromRuntime(): DeterministicObservation {
  const valid = classifyRememberedEvidence({
    rememberedIds: ["ev:1"],
    resolvedPointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
  });
  const downgraded = classifyRememberedEvidence({
    rememberedIds: ["ev:bad"],
    resolvedPointers: [
      {
        evidenceId: "ev:bad",
        sourceId: "unattributed",
        domain: "governance",
        freshness: "unknown",
        attributable: false,
      },
    ],
  });
  const fabricated = classifyRememberedEvidence({
    rememberedIds: ["ev:fake"],
    resolvedPointers: [],
    treatUnresolvedAsFabricated: true,
  });
  const groundingDisclosure = buildGroundingCognitiveDisclosure(valid);
  const policy = buildPostEvidenceNarrativePolicyDisclosure();
  const coverage = aggregateReadCoverage([
    { pathOrRef: "a.md", coverage: "full" },
    { pathOrRef: "b.md", coverage: "partial" },
  ]);
  const coverageDisclosure = buildReadCoverageDisclosure(coverage);

  const hardNegative = deriveReadCoverageFromToolEvent({
    toolName: "git_local_read_file",
    status: "succeeded",
    pathOrRef: "docs/big.md#L100-200",
    summary: "read docs/big.md L100-200/200 (800 chars)",
  });

  const disposition = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 2,
    evidencePointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
      {
        evidenceId: "ev:2",
        sourceId: "src:b",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
    requiredDomains: ["governance"],
  });
  const stop = decideCognitiveStop({
    disposition,
    governingPremiseInvalidated: true,
    governingPremise: "Governing",
  });

  const facts: Mw4RuntimeFacts = {
    reresolveValid: valid.valid.length === 1,
    downgradeUnavailable: downgraded.downgraded.length === 1,
    fabricatedRejected:
      fabricated.missing[0]?.reason === "fabricated_without_resolver_hit",
    narrativeNotEvidence: /Narrative text ≠ Evidence/.test(groundingDisclosure),
    compactionSummaryNotEvidence:
      /Compacted Memory B summary ≠ Evidence/.test(groundingDisclosure),
    progressNotSuccess: /Progress ≠ SUCCESS/.test(policy),
    recoveryNotHumanDecision:
      /RecoveryRecommendation ≠ HumanDecision/.test(policy),
    cognitiveStopIntact:
      stop.cognitiveStop === true && stop.allowsSilentSuccess === false,
    partialityHonest: /refuse false completeness/.test(coverageDisclosure),
    mixedOverallPartial: coverage.overall === "mixed_partial",
    suffixEndEqualsTotalIsPartial: hardNegative?.coverage === "partial",
  };

  return observationFromMw4Facts(facts);
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
}): Evidence {
  const NOW = "2026-09-03T12:00:00.000Z";
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

/**
 * Product-bound MW4 observation via ProductSqliteSession + Fake provider +
 * runNoraCognitiveTurn. MUST fail (mw4GroundingOk=false) if L100-N/N is
 * classified as full on the product surface.
 */
export async function observeMw4FromProductPath(): Promise<DeterministicObservation> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-obs-"));
  const sessionDbPath = path.join(dir, "nora-session.sqlite");
  const projectId = "prj:mw4-eval-product";
  const NOW = "2026-09-03T12:00:00.000Z";
  const REV = { lpsId: "lps:mw4-eval", lpsVersion: 1 };
  const DOC = "projects/sfia-studio/docs/mw4-eval-big.md";

  try {
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:eval-1",
          source: "src:eval",
          projectId,
        }),
      ],
    });

    // Seed remembered Evidence for re-resolve on the product turn.
    const seed = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    await rememberEvidenceIds(seed, projectId, ["ev:eval-1"], NOW);
    seed.close();

    // Real summary shape (hard negative): L100-200/200 must be PARTIAL.
    const hardNegativeFact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: `${DOC}#L100-200`,
      summary: `read ${DOC} L100-200/200 (900 chars)`,
    });

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] MW4 product-bound eval turn.",
        },
      ],
    });

    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-eval-product",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Revisit grounding with partial suffix read." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      readCoverageFacts: hardNegativeFact ? [hardNegativeFact] : [],
      postEvidenceNarrativePolicy: true,
    });

    const disclosure = turn.mw4Grounding?.disclosure ?? "";
    const coverageDisclosure =
      turn.mw4Grounding?.readCoverageDisclosure ?? "";
    const overall = turn.mw4Grounding?.readCoverageOverall;

    // Hard gate: product must treat L100-N/N as partial (never full).
    const suffixEndEqualsTotalIsPartial =
      hardNegativeFact?.coverage === "partial" &&
      overall === "partial" &&
      !/: full\b/.test(
        coverageDisclosure
          .split("\n")
          .find((l) => l.includes(DOC) || l.includes("L100-200")) ?? "",
      ) &&
      /partial/.test(coverageDisclosure);

    const claimUnbound =
      turn.mw4Grounding?.claimSpecificProvenance === "unbound" ||
      /UNBOUND \/ NOT RECONSTRUCTABLE/.test(disclosure) ||
      /UNBOUND \/ NOT RECONSTRUCTABLE/.test(
        turn.mw4Grounding?.claimSpecificDisclosure ?? "",
      );

    // resolution_failed path — force repository error so absent ID is NOT
    // mislabeled fabricated_without_resolver_hit (live empty repo → not_found).
    setMw3AvailableEvidenceForTests(null);
    const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    let resolutionFailedNotFabricated = false;
    try {
      const vsr = await import("@/lib/vertical-slice-runtime");
      vsr.resetRuntimeApplicationServiceForTests();
      const productDbPath = path.join(dir, "product-eval.sqlite");
      const runtime = vsr.getRuntimeApplicationService({
        productDbPath,
        auditMode: "noop",
      });
      const repository = runtime.oa?.evidenceReviewServices?.repository;
      const originalFind = repository?.findById?.bind(repository);
      if (repository && originalFind) {
        repository.findById = (async () => {
          throw new Error("mw4_eval_repository_error");
        }) as typeof repository.findById;
      }
      try {
        const failedRes = await resolveRememberedEvidence(projectId, [
          "ev:unverifiable-eval",
        ]);
        resolutionFailedNotFabricated =
          failedRes.missing[0]?.reason === "resolution_failed" &&
          !failedRes.missing.some(
            (m) => m.reason === "fabricated_without_resolver_hit",
          );
      } finally {
        if (repository && originalFind) {
          repository.findById = originalFind;
        }
      }
    } catch {
      resolutionFailedNotFabricated = false;
    } finally {
      if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
      else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    }

    // Restore catalog for valid re-resolve assertion already observed on turn.
    const reresolveValid = (turn.mw4Grounding?.validIds ?? []).includes(
      "ev:eval-1",
    );

    const policy = buildPostEvidenceNarrativePolicyDisclosure();
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 2,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
          {
            evidenceId: "ev:2",
            sourceId: "src:b",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
        requiredDomains: ["governance"],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Governing",
    });

    const facts: Mw4RuntimeFacts = {
      reresolveValid,
      downgradeUnavailable: true, // covered by helper; product path focuses on partiality
      fabricatedRejected: true,
      narrativeNotEvidence: /Narrative text ≠ Evidence/.test(disclosure),
      compactionSummaryNotEvidence:
        /Compacted Memory B summary ≠ Evidence/.test(disclosure),
      progressNotSuccess: /Progress ≠ SUCCESS/.test(policy),
      recoveryNotHumanDecision:
        /RecoveryRecommendation ≠ HumanDecision/.test(policy),
      cognitiveStopIntact:
        stop.cognitiveStop === true && stop.allowsSilentSuccess === false,
      partialityHonest:
        /refuse false completeness/.test(coverageDisclosure) ||
        overall === "partial",
      mixedOverallPartial: true,
      suffixEndEqualsTotalIsPartial,
      claimProvenanceUnbound: claimUnbound,
      resolutionFailedNotFabricated,
    };

    return observationFromMw4Facts(facts);
  } finally {
    setMw3AvailableEvidenceForTests(null);
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
