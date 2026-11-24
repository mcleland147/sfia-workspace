/**
 * C24 — bounded operational smoke (DEV).
 * Exercises: public WEB registry feeding, Nora usage extraction path,
 * D8 isolated verify (no new Function), fencing helpers importable.
 *
 * Usage: npx tsx scripts/c24-mission-smoke.mts
 * Does not push; does not mutate RECETTE/STABLE.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { resolvePublicWebRegistry } from "../src/domains/conversation/public-web-registry.ts";
import { extractProviderUsageFromRunResult } from "../src/domains/conversation/provider-usage.ts";
import { staticEvaluateContentAgainstCriterion } from "../src/domains/proofs/studio-isolated-verify.ts";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "../src/domains/proofs/d8-cognitive-criterion-eval.ts";

const results: Array<{ id: string; ok: boolean; detail: string }> = [];

function check(id: string, ok: boolean, detail: string) {
  results.push({ id, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"} ${id} — ${detail}`);
}

// Mission 1 fragment — WEB registry feeds from catalog on public topic.
{
  const r = resolvePublicWebRegistry({
    haystack:
      "Peux-tu vérifier la version Node.js LTS actuelle sur le site officiel ?",
    env: process.env,
  });
  check(
    "M1-WEB-REGISTRY",
    Boolean(r.topics["node-lts"]),
    `topics=${JSON.stringify(r.topics)} limits=${r.limits.join(",")}`,
  );
}

// Private marker refusal path (negative) — marker present in catalog query.
{
  const r = resolvePublicWebRegistry({
    haystack: "Quelle est la version Node.js LTS ?",
    privateMarkers: ["nodejs.org"],
    env: { ...process.env, STUDIO_LANE: "DEV" },
  });
  const skipped = r.limits.some((l) => /CATALOG_SKIP_PRIVATE_MARKER/.test(l));
  check(
    "M4J-WEB-PRIVATE-MARKER",
    skipped && !r.topics["node-lts"],
    `limits=${r.limits.join(",")}`,
  );
}

// D8 static — no default pass.
{
  const empty = staticEvaluateContentAgainstCriterion(
    "comportement métier correct",
    "export const x = 1",
  );
  check(
    "D8-NO-DEFAULT-PASS",
    empty.ok === false,
    empty.note,
  );
  const ok = staticEvaluateContentAgainstCriterion(
    "src/widget.ts export processWidget",
    "export function processWidget(input: string) { return input; }\n",
  );
  check("D8-STATIC-SYMBOL", ok.ok === true, ok.note);
}

// Cognitive non-upgrade.
{
  const applied = applyCognitiveAssessmentsToEvidence({
    criterionEvidence: {
      c1: { refs: ["a.ts"], verified: false },
    },
    assessments: [
      {
        criterion: "c1",
        judgment: "SUPPORTS",
        rationale: "looks fine",
        piecesConsulted: ["a.ts"],
        provenance: "DETERMINISTIC_HEURISTIC",
      },
    ],
  });
  check(
    "D8-COG-NO-UPGRADE",
    applied.criterionEvidence.c1?.verified === false,
    applied.limits.join(","),
  );
  const h = heuristicCognitiveCriterionAssessments({
    criteria: ["test npm exit=0"],
    criterionEvidence: {
      "test npm exit=0": { refs: [], verified: false },
    },
  });
  check(
    "D8-COG-TEST-INSUFFICIENT",
    h.assessments[0]?.judgment === "INSUFFICIENT",
    h.assessments[0]?.rationale ?? "",
  );
}

// Usage extraction honesty.
{
  const absent = extractProviderUsageFromRunResult({});
  check(
    "NORA-USAGE-ABSENT",
    absent.provenance === "UNAVAILABLE" && absent.inputTokens == null,
    absent.limits.join(","),
  );
  const present = extractProviderUsageFromRunResult({
    state: {
      usage: {
        requests: 1,
        inputTokens: 10,
        outputTokens: 5,
        totalTokens: 15,
        inputTokensDetails: [{ cached_tokens: 2 }],
        outputTokensDetails: [{ reasoning_tokens: 3 }],
      },
    },
  });
  check(
    "NORA-USAGE-SDK",
    present.inputTokens === 10 &&
      present.cachedInputTokens === 2 &&
      present.reasoningTokens === 3,
    `prov=${present.provenance}`,
  );
}

const failed = results.filter((r) => !r.ok);
console.log(
  JSON.stringify(
    {
      cycle: "C24",
      passed: results.length - failed.length,
      failed: failed.length,
      results,
    },
    null,
    2,
  ),
);
process.exit(failed.length ? 1 : 0);
