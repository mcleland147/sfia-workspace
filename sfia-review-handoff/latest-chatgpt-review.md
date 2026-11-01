# SFIA STUDIO — FULL REVIEW PACK
# GI-ORION-NORA-COHERENCE-CORR-01 / FINAL-REVIEW-CORR-635 / PR #635

## 1. Timestamp
2026-11-01T11:10:00+01:00 (local generation during CI poll)

## 2. GO Morris exact
FINAL REVIEW CORRECTION — PR #635 — GO MORRIS — GRANTED
Campaign: GI-ORION-NORA-COHERENCE-CORR-01 / FINAL-REVIEW-CORR-635
ONE CURSOR CAMPAIGN · NO NEW PR · NO MERGE · NO NEW LIVE

## 3. Git Truth initial
- worktree: /Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01
- branch: feat/akg-m5-l3s2-orion-nora-coherence-corr-01
- HEAD before correction: 9b51a51c107fc44f6c473e0e2e372f645ea212ca (= prior R24)
- origin/main: cd2020c82ecdcdaa073debd6985ee9c113bfba3e
- prior Product: 9bd22f875d01404989a03de5db2c96e396e6d89c
- prior CI: 41293512880 SUCCESS (not reused for new HEAD)
- dirty: .tmp-sfia-review/chatgpt-review.md only

## 4. Git Truth final
- Product corrective: 998386023e05de338b6dd172671a4a1ac571144f
- R24 corrective / remote HEAD: b0ce841367c441590ef1b6f0a41279e960401fbf
- push FF: 9b51a51c..b0ce8413 origin/feat/akg-m5-l3s2-orion-nora-coherence-corr-01
- PR: https://github.com/mcleland147/sfia-workspace/pull/635

## 5. Convergence pre-check
Read cycle template, routing guide, ChatGPT/Cursor operating model, Studio convergence doctrine/roadmap, product-completion cadrage, M5 trajectory requalification, Doctrine v3 §§33–35, PRR README/03/05/06/07/08/09 + manifest.
Qualification: V3-F05 / L3-S2 OPEN. Source priority Git/code > decisions > PRR > handoff > assumptions. No new architectural reference.

## 6. V3-F05 / L3-S2 trajectory
Correction serves ORION QA-02 / R-LIVE-EMIT trajectory. Does **not** close L3-S2. G-REAL NOT GRANTED. Cursor REAL OFF. Runtime v3 NON ADOPTED.

## 7. R23 architecture
Preserved: Product CURRENT recommendation identity; FramingContinuity catalog hydration; Conception≠Cadrage fallback; exploratoire Framing-only; NAP A1/B; true divergence fail-closed; Memory B persist/rehydrate; typed Studio notices; Recommendation≠HD; PREPARE≠EXECUTE; no silent START; no fabricated authority.
Classes: DOCUMENTED · COVERAGE VERIFIED · BEHAVIOR PROVEN AT TESTED SCOPE · KNOWN GAP (browser UI NOT PROVEN; prior LIVE = historical only).

## 8. Prior PR #635 HEAD
9b51a51c107fc44f6c473e0e2e372f645ea212ca

## 9. Root risk A — content loss
COGNITIVE_DISPOSITION_FOOTER_RE was over-broad: after a marker it consumed following lines until next marker/[Studio]. Mid-answer markers could erase ordinary métier paragraphs silently while still 'fixing' false ORION divergence.

## 10. Reproduction and failing test
Example: Texte principal + mid [CONTRADICTION CANDIDATE] + Paragraphe métier + Conclusion → old strip could return only Texte principal.
Locked by A02/A06/A09 in orionNoraCoherenceCorr01.footerSafety.d0.test.ts (must fail on loss of one métier paragraph).

## 11. Safe extraction correction
TERMINAL_COGNITIVE_DISPOSITION_FOOTER_RE anchored at EOF; optional Evidence/Sources/Next/Suite continuations only; peel loop; fail-closed preserve otherwise.

### COMPLETE DIFF — noraAdaptivePresentation.ts (footer section)
commit 998386023e05de338b6dd172671a4a1ac571144f
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:06:32 2026 +0100

    fix(studio): prevent narrative loss and harden live QA harness

    Bound disposition footer peel to trusted terminal Studio format so mid-answer
    markers never erase métier content, and replace the unsafe ORION LIVE helper
    with an explicit opt-in boundary that refuses authority/reset escalation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index 01159e42..be7417fd 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -990,9 +990,14 @@ export const NORA_ADAPTIVE_DIVERGENCE_NOTICE =

 /**
  * ORION-NORA-COHERENCE-CORR-01 — cognitive disposition footers appended to
- * turn.text BEFORE NAP durable composition. They must not poison
- * narrative↔presentation relation classification (false divergent).
+ * turn.text BEFORE NAP durable composition (see runNoraCognitiveTurn).
+ * They must not poison narrative↔presentation classification (false divergent).
  * Keep observable via Studio control notices — never as ordinary métier jargon.
+ *
+ * Extraction contract (fail-closed):
+ * - Only strip a *terminal* Studio footer matching the append format.
+ * - Never consume ordinary paragraphs after a mid-answer marker.
+ * - Preserve quotes, code fences, inline mentions, and ambiguous markers.
  */
 export const COGNITIVE_DISPOSITION_FOOTER_MARKERS = [
   "CONTRADICTION CANDIDATE",
@@ -1000,25 +1005,38 @@ export const COGNITIVE_DISPOSITION_FOOTER_MARKERS = [
   "EVIDENCE-BACKED CONTRADICTION",
 ] as const;

-const COGNITIVE_DISPOSITION_FOOTER_RE =
-  /\n*\s*\[(CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION)\][^\n]*(?:\n(?!\s*\[(?:CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION|Studio)\])[^\n]*)*/giu;
+const DISPOSITION_MARKER_ALT =
+  "CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION";
+
+/** Continuation lines Studio may append under a COGNITIVE STOP footer. */
+const STUDIO_DISPOSITION_CONTINUATION_ALT =
+  "Evidence:|Sources:|Next:|Suite:";
+
+/**
+ * Trusted terminal footer only — anchored at EOF.
+ * Shape: blank-line (or leading) + [MARKER] line + optional Evidence/Next lines.
+ * Does not match mid-narrative markers or arbitrary following métier lines.
+ */
+const TERMINAL_COGNITIVE_DISPOSITION_FOOTER_RE = new RegExp(
+  String.raw`(?:^|(?:\r?\n){1,2})\[(${DISPOSITION_MARKER_ALT})\][^\n]*(?:\r?\n(?:${STUDIO_DISPOSITION_CONTINUATION_ALT})[^\n]*)*\s*$`,
+  "iu",
+);

 export function stripCognitiveDispositionFooters(text: string): {
   readonly core: string;
   readonly strippedMarkers: readonly string[];
 } {
-  const source = text ?? "";
+  let remaining = text ?? "";
   const strippedMarkers: string[] = [];
-  const core = source
-    .replace(COGNITIVE_DISPOSITION_FOOTER_RE, (match) => {
-      const marker = match.match(
-        /\[(CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION)\]/i,
-      )?.[1];
-      if (marker) strippedMarkers.push(marker.toUpperCase());
-      return "";
-    })
-    .trim();
-  return { core, strippedMarkers };
+  // Peel one or more trusted terminal footers; leave all other text intact.
+  for (;;) {
+    const match = remaining.match(TERMINAL_COGNITIVE_DISPOSITION_FOOTER_RE);
+    if (!match || match.index === undefined) break;
+    const marker = match[1]?.toUpperCase();
+    if (marker) strippedMarkers.push(marker);
+    remaining = remaining.slice(0, match.index);
+  }
+  return { core: remaining.trim(), strippedMarkers };
 }

 /** Pilot-intelligible Studio notice — not raw CONTRADICTION CANDIDATE jargon. */

## 12. Marker boundary tests
### NEW FILE COMPLETE — orionNoraCoherenceCorr01.footerSafety.d0.test.ts
/**
 * FINAL-REVIEW-CORR-635 — Blocker A: no silent narrative loss.
 * DETERMINISTIC — ZERO OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
  buildDurableAssistantContentForTurn,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  stripCognitiveDispositionFooters,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { framingContinuityRecommendationReadyTitle } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

const METIER_P1 = "Texte principal du métier ORION.";
const METIER_P2 = "Paragraphe métier important.";
const METIER_P3 = "Conclusion importante.";
const FOOTER_CANDIDATE =
  "[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.";
const FOOTER_STOP_MULTILINE = [
  "[COGNITIVE STOP] Conflicting claims without decisive Evidence.",
  "Evidence: ev:1, ev:2",
  "Next: request_pilot_clarification",
].join("\n");
const FOOTER_EVIDENCE =
  "[EVIDENCE-BACKED CONTRADICTION] Decisive conflict retained with Evidence pointers.";

function orionPresentation() {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: null,
    title: "Cadrage exploratoire ou Conception fonctionnelle ?",
    lead: null,
    blocks: [
      {
        kind: "plain",
        text: "Je clarifie d’abord l’écart : dans le contexte projet, la recommandation en vigueur est la Conception fonctionnelle.",
      },
      {
        kind: "comparison_table",
        title: "La différence pour ORION",
        columns: ["Étape", "Question principale", "Produit"],
        rows: [
          [
            "Cadrage exploratoire",
            "Quel problème traiter ?",
            "Compréhension partagée du besoin.",
          ],
          [
            "Conception fonctionnelle",
            "Comment le service doit-il se comporter ?",
            "Parcours et règles cohérents.",
          ],
        ],
      },
      {
        kind: "recommendation",
        title: "Ma recommandation pour ORION",
        statement:
          "Commencer par la Conception fonctionnelle, en prenant les demandes de matériel, les incidents informatiques et les demandes d’accès comme périmètre proposé.",
        disclaimer:
          "Proposition uniquement — aucune décision du Pilote enregistrée.",
      },
      {
        kind: "section",
        title: "Pourquoi ce choix",
        body: "Les trois catégories de demandes sont déjà assez explicités pour examiner les parcours. Aucune préparation ni aucun démarrage de cycle n’est engagé.",
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: "Pas d'action gouvernée issue de ces blocs de présentation.",
  })!;
}

describe("FINAL-REVIEW-CORR-635 — footer extraction A01–A14", () => {
  it("A01 — valid terminal footer removed; full métier retained", () => {
    const source = `${METIER_P1}\n\n${METIER_P2}\n\n${METIER_P3}\n\n${FOOTER_CANDIDATE}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual(["CONTRADICTION CANDIDATE"]);
    expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}\n\n${METIER_P3}`);
    expect(core).toContain(METIER_P2);
    expect(core).toContain(METIER_P3);
  });

  it("A02 — marker in middle of answer: subsequent paragraphs preserved", () => {
    const source = `${METIER_P1}\n\n${FOOTER_CANDIDATE}\n${METIER_P2}\n\n${METIER_P3}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source.trim());
    expect(core).toContain(METIER_P2);
    expect(core).toContain(METIER_P3);
    expect(core).toContain("CONTRADICTION CANDIDATE");
  });

  it("A03 — marker inside quoted text preserved with explanation", () => {
    const source = [
      METIER_P1,
      "",
      '> Exemple de diagnostic : "[CONTRADICTION CANDIDATE] Note technique."',
      "Cette citation illustre le jargon ; elle n'est pas un footer Studio.",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source);
    expect(core).toContain("Cette citation illustre");
    expect(core).toContain(METIER_P3);
  });

  it("A04 — marker inside fenced code preserved", () => {
    const source = [
      METIER_P1,
      "",
      "```text",
      "[CONTRADICTION CANDIDATE] example footer line",
      "```",
      "",
      "Explication du bloc de code pour le Pilote.",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toContain("```text");
    expect(core).toContain("[CONTRADICTION CANDIDATE] example footer line");
    expect(core).toContain("Explication du bloc de code");
    expect(core).toContain(METIER_P3);
  });

  it("A05 — inline marker within a sentence: no truncation", () => {
    const source =
      "Le jargon [CONTRADICTION CANDIDATE] ne doit pas tronquer cette phrase ni la suite.\n" +
      METIER_P2;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source);
    expect(core).toContain("ni la suite.");
    expect(core).toContain(METIER_P2);
  });

  it("A06 — multiple legitimate paragraphs after marker: no data loss", () => {
    const source = [
      METIER_P1,
      "",
      FOOTER_CANDIDATE,
      METIER_P2,
      "",
      "Second paragraphe après le marqueur.",
      "",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toContain(METIER_P2);
    expect(core).toContain("Second paragraphe après le marqueur.");
    expect(core).toContain(METIER_P3);
    expect(core.split("\n").filter((l) => l.includes("paragraphe") || l === METIER_P2 || l === METIER_P3).length).toBeGreaterThanOrEqual(2);
  });

  it("A07 — multiple disposition types as terminal footers", () => {
    for (const footer of [
      FOOTER_CANDIDATE,
      "[COGNITIVE STOP] Stop reason only.",
      FOOTER_EVIDENCE,
    ]) {
      const source = `${METIER_P1}\n\n${METIER_P2}\n\n${footer}`;
      const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
      expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}`);
      expect(strippedMarkers.length).toBe(1);
      expect(core).not.toMatch(
        /CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION/,
      );
    }
  });

  it("A08 — valid trusted multiline COGNITIVE STOP footer: only documented boundary", () => {
    const source = `${METIER_P1}\n\n${METIER_P2}\n\n${FOOTER_STOP_MULTILINE}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual(["COGNITIVE STOP"]);
    expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}`);
    expect(core).not.toContain("Evidence:");
    expect(core).not.toContain("Next:");
  });

  it("A09 — untrusted/ambiguous marker: fail closed, preserve content", () => {
    const ambiguous = [
      METIER_P1,
      "",
      "[CONTRADICTION CANDIDATE] Note technique.",
      "Paragraphe métier important.",
      "Conclusion importante.",
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(ambiguous);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(ambiguous);
    expect(core).toContain("Paragraphe métier important.");
    expect(core).toContain("Conclusion importante.");
  });

  it("A10 — empty narrative + trusted footer → presentation_only A1 eligible", () => {
    const p = orionPresentation();
    const contaminated = `\n\n${FOOTER_CANDIDATE}`;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: contaminated,
      presentation: p,
    });
    expect(built.relation).toBe("presentation_only");
    expect(built.usedA1).toBe(true);
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("A11 — actual narrative/presentation conflict remains divergent", () => {
    const p = orionPresentation();
    const opposing =
      "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.\n\n" +
      FOOTER_CANDIDATE;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
      conversationGuidanceStatement:
        "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.",
    });
    expect(built.relation).toBe("divergent");
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("Cadrage exploratoire");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("A12 — historical Memory B content not silently rewritten", () => {
    const historical = [
      METIER_P1,
      "",
      "[CONTRADICTION CANDIDATE] Note technique.",
      "Paragraphe métier important.",
      "Conclusion importante.",
    ].join("\n");
    const decision = resolveAdaptiveAssistantRender({
      content: historical,
      presentation: null,
      studioControlNotices: [],
    });
    expect(decision.mode).toBe("plain");
    expect(decision.plainText).toBe(historical);
    expect(decision.plainText).toContain("Paragraphe métier important.");
    expect(decision.plainText).toContain("Conclusion importante.");
  });

  it("A13 — authenticated typed Studio notice deduplicated and Pilot-intelligible", () => {
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).toMatch(/Signal de cohérence/);
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).not.toMatch(
      /CONTRADICTION CANDIDATE/,
    );
    const p = orionPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: `${guidance}\n\n${FOOTER_CANDIDATE}`,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
    // Notice is typed separately — must not be duplicated into contentCore as jargon.
    expect(built.contentCore).not.toContain(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE);
  });

  it("A14 — ORION Conception recommendation and card remain aligned", () => {
    const p = orionPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: `${guidance}\n\n${FOOTER_CANDIDATE}`,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    const cardTitle = framingContinuityRecommendationReadyTitle({
      catalogLabel: "Conception fonctionnelle",
      targetCycleTypeId: "cyc:functional-design",
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(cardTitle).toContain("Conception fonctionnelle");
    expect(cardTitle).not.toMatch(/Cadrage/);
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });
});

## 13. Root risk B — LIVE harness
Hardcoded ORION projectId, absolute /Users/morris paths, campaign proof dir, direct SQLite writes, .env.local force, LOCAL_PILOT/MORRIS authority, SFIA_V2_RUNTIME_ALLOW_RESET=1, redundant script+test.

## 14. Original privileged side effects
See deleted scripts/orion-coherence-corr-01-live-proof.ts and prior live.test.ts before 998386023e05de338b6dd172671a4a1ac571144f.

## 15. Harness correction / removal
KEEP: single Vitest opt-in live.test.ts + orionCoherenceLiveProofBoundary.ts
REMOVE: orion-coherence-corr-01-live-proof.ts (ORION-only redundant helper)

### NEW FILE COMPLETE — orionCoherenceLiveProofBoundary.ts
/**
 * ORION-NORA-COHERENCE-CORR-01 — opt-in LIVE proof boundary (FINAL-REVIEW-CORR-635).
 *
 * Disabled by default. No hardcoded project ids / machine paths.
 * No .env.local parsing. No implicit Pilot/Morris authority. No DB reset flag.
 * Cursor REAL forced OFF when resolving a live config.
 *
 * Accepts either LIVE_PROVIDER_OPT_IN=1 or legacy ORION_COHERENCE_LIVE=1.
 */
import fs from "node:fs";
import path from "node:path";

export const LIVE_PROVIDER_OPT_IN_ENV = "LIVE_PROVIDER_OPT_IN" as const;
export const ORION_COHERENCE_LIVE_LEGACY_ENV = "ORION_COHERENCE_LIVE" as const;

export const LIVE_PROOF_PROJECT_ID_ENV = "TEST_PROJECT_ID" as const;
export const LIVE_PROOF_PRODUCT_DB_ENV = "TEST_PRODUCT_DB_PATH" as const;
export const LIVE_PROOF_NORA_DB_ENV = "TEST_NORA_DB_PATH" as const;
export const LIVE_PROOF_DIR_ENV = "TEST_PROOF_DIR" as const;

/** Legacy aliases already used by Studio product composition. */
export const LIVE_PROOF_PRODUCT_DB_ALIAS_ENV =
  "SFIA_STUDIO_PRODUCT_DB_PATH" as const;
export const LIVE_PROOF_NORA_DB_ALIAS_ENV =
  "SFIA_STUDIO_NORA_SESSION_DB_PATH" as const;

const FORBIDDEN_AUTHORITY_ENVS = [
  "SFIA_STUDIO_LOCAL_PILOT_AUTHORITY",
  "SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY",
  "SFIA_V2_RUNTIME_ALLOW_RESET",
] as const;

export type LiveProofBoundaryFailure = {
  readonly ok: false;
  readonly reason: string;
  readonly code:
    | "opt_in_missing"
    | "project_id_missing"
    | "product_db_missing"
    | "product_db_not_file"
    | "nora_db_missing"
    | "nora_db_not_file"
    | "openai_key_missing"
    | "authority_escalation_present"
    | "cursor_real_forbidden";
};

export type LiveProofBoundaryConfig = {
  readonly ok: true;
  readonly projectId: string;
  readonly productDbPath: string;
  readonly noraDbPath: string;
  readonly proofDir: string | null;
  readonly cursorReal: "0";
};

export type LiveProofBoundaryResult =
  | LiveProofBoundaryConfig
  | LiveProofBoundaryFailure;

/** Loose env map — tests may pass partial objects without ProcessEnv.NODE_ENV. */
export type LiveProofEnv = Readonly<Record<string, string | undefined>>;

function readTrimmed(env: LiveProofEnv, key: string): string | null {
  const v = env[key];
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

export function isLiveProviderOptIn(env: LiveProofEnv = process.env): boolean {
  return (
    readTrimmed(env, LIVE_PROVIDER_OPT_IN_ENV) === "1" ||
    readTrimmed(env, ORION_COHERENCE_LIVE_LEGACY_ENV) === "1"
  );
}

/**
 * Resolve LIVE proof targets. Fail closed before any side effect.
 * Does not create DB files, does not write proofs, does not mutate env.
 */
export function resolveOrionCoherenceLiveProofBoundary(
  env: LiveProofEnv = process.env,
): LiveProofBoundaryResult {
  if (!isLiveProviderOptIn(env)) {
    return {
      ok: false,
      code: "opt_in_missing",
      reason:
        "LIVE provider proof disabled — set LIVE_PROVIDER_OPT_IN=1 (or ORION_COHERENCE_LIVE=1) deliberately.",
    };
  }

  for (const key of FORBIDDEN_AUTHORITY_ENVS) {
    if (readTrimmed(env, key) === "1") {
      return {
        ok: false,
        code: "authority_escalation_present",
        reason: `${key}=1 is incompatible with the LIVE proof boundary — unset it before opt-in execution.`,
      };
    }
  }

  if (readTrimmed(env, "SFIA_STUDIO_CURSOR_REAL") === "1") {
    return {
      ok: false,
      code: "cursor_real_forbidden",
      reason:
        "SFIA_STUDIO_CURSOR_REAL=1 is forbidden for this LIVE proof boundary.",
    };
  }

  const projectId = readTrimmed(env, LIVE_PROOF_PROJECT_ID_ENV);
  if (!projectId) {
    return {
      ok: false,
      code: "project_id_missing",
      reason: `${LIVE_PROOF_PROJECT_ID_ENV} is required when LIVE opt-in is set.`,
    };
  }

  const productDbPath =
    readTrimmed(env, LIVE_PROOF_PRODUCT_DB_ENV) ??
    readTrimmed(env, LIVE_PROOF_PRODUCT_DB_ALIAS_ENV);
  if (!productDbPath) {
    return {
      ok: false,
      code: "product_db_missing",
      reason: `${LIVE_PROOF_PRODUCT_DB_ENV} (or ${LIVE_PROOF_PRODUCT_DB_ALIAS_ENV}) is required.`,
    };
  }
  if (!fs.existsSync(productDbPath) || !fs.statSync(productDbPath).isFile()) {
    return {
      ok: false,
      code: "product_db_not_file",
      reason: `Product DB path is not an existing file: ${productDbPath}`,
    };
  }

  const noraDbPath =
    readTrimmed(env, LIVE_PROOF_NORA_DB_ENV) ??
    readTrimmed(env, LIVE_PROOF_NORA_DB_ALIAS_ENV);
  if (!noraDbPath) {
    return {
      ok: false,
      code: "nora_db_missing",
      reason: `${LIVE_PROOF_NORA_DB_ENV} (or ${LIVE_PROOF_NORA_DB_ALIAS_ENV}) is required.`,
    };
  }
  if (!fs.existsSync(noraDbPath) || !fs.statSync(noraDbPath).isFile()) {
    return {
      ok: false,
      code: "nora_db_not_file",
      reason: `Nora session DB path is not an existing file: ${noraDbPath}`,
    };
  }

  if (!readTrimmed(env, "OPENAI_API_KEY")) {
    return {
      ok: false,
      code: "openai_key_missing",
      reason:
        "OPENAI_API_KEY must already be present in the process environment (not loaded from .env.local by this harness).",
    };
  }

  const proofDirRaw = readTrimmed(env, LIVE_PROOF_DIR_ENV);
  const proofDir = proofDirRaw ? path.resolve(proofDirRaw) : null;

  return {
    ok: true,
    projectId,
    productDbPath: path.resolve(productDbPath),
    noraDbPath: path.resolve(noraDbPath),
    proofDir,
    cursorReal: "0",
  };
}

/**
 * Environment mutations allowed when entering an opted-in LIVE Vitest suite.
 * Never enables reset or local authority switches.
 */
export function applyLiveProofSafeRuntimeEnv(
  config: LiveProofBoundaryConfig,
  env: Record<string, string | undefined> = process.env,
): void {
  env.SFIA_STUDIO_CURSOR_REAL = "0";
  env.SFIA_STUDIO_PRODUCT_DB_PATH = config.productDbPath;
  env.SFIA_STUDIO_NORA_SESSION_DB_PATH = config.noraDbPath;
  delete env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
  delete env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
  // Explicitly refuse privileged escalation even if later code tries to rely on them.
  delete env.SFIA_V2_RUNTIME_ALLOW_RESET;
  delete env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
  delete env.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY;
}

### COMPLETE DIFF — orionNoraCoherenceCorr01.live.test.ts
commit 998386023e05de338b6dd172671a4a1ac571144f
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:06:32 2026 +0100

    fix(studio): prevent narrative loss and harden live QA harness

    Bound disposition footer peel to trusted terminal Studio format so mid-answer
    markers never erase métier content, and replace the unsafe ORION LIVE helper
    with an explicit opt-in boundary that refuses authority/reset escalation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts
index a4cd8ea4..e96506e5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts
@@ -1,7 +1,16 @@
 /**
- * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof (gated).
- * Requires ORION_COHERENCE_LIVE=1 + campaign DBs + OPENAI_API_KEY.
- * Does not rewrite historical turns; emits one new turn.
+ * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof (opt-in only).
+ *
+ * Disabled by default. Default CI never calls OpenAI.
+ * Requires deliberate LIVE_PROVIDER_OPT_IN=1 (or ORION_COHERENCE_LIVE=1) plus:
+ *   TEST_PROJECT_ID, TEST_PRODUCT_DB_PATH, TEST_NORA_DB_PATH, OPENAI_API_KEY
+ * Optional: TEST_PROOF_DIR
+ *
+ * No hardcoded ORION id / machine paths.
+ * No .env.local parsing. No reset flag. No Pilot/Morris authority switches.
+ * Cursor REAL forced OFF. Does not create missing DB files.
+ *
+ * This campaign does NOT execute a new LIVE counter-proof.
  *
  * @vitest-environment node
  */
@@ -11,15 +20,20 @@ import { afterAll, beforeAll, describe, expect, it } from "vitest";
 import { framingContinuityRecommendationReadyTitle } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
 import { projectAssistantReadFramingContinuityAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
 import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";
+import {
+  applyLiveProofSafeRuntimeEnv,
+  isLiveProviderOptIn,
+  resolveOrionCoherenceLiveProofBoundary,
+} from "@/lib/project-assistant-qa/orionCoherenceLiveProofBoundary";
 import {
   getRuntimeApplicationService,
   resetRuntimeApplicationServiceForTests,
 } from "@/lib/vertical-slice-runtime";

-const LIVE = process.env.ORION_COHERENCE_LIVE === "1";
-const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
-const PROOF_DIR =
-  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";
+const LIVE = isLiveProviderOptIn();
+const boundary = LIVE ? resolveOrionCoherenceLiveProofBoundary() : null;
+const RUN_LIVE = Boolean(LIVE && boundary?.ok);
+
 const APP_ROOT = path.resolve(__dirname, "../..");
 const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
 const SCHEMAS = path.resolve(
@@ -27,57 +41,25 @@ const SCHEMAS = path.resolve(
   "../sfia-v3-modeled/v3-native-option-a/schemas",
 );

-function loadDotEnvLocal(forceKeys: readonly string[] = []): void {
-  const envPath = path.join(APP_ROOT, ".env.local");
-  if (!fs.existsSync(envPath)) return;
-  const force = new Set(forceKeys);
-  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
-    const t = line.trim();
-    if (!t || t.startsWith("#")) continue;
-    const i = t.indexOf("=");
-    if (i <= 0) continue;
-    const k = t.slice(0, i).trim();
-    let v = t.slice(i + 1).trim();
-    if (
-      (v.startsWith('"') && v.endsWith('"')) ||
-      (v.startsWith("'") && v.endsWith("'"))
-    ) {
-      v = v.slice(1, -1);
-    }
-    if (force.has(k) || process.env[k] == null || process.env[k] === "") {
-      process.env[k] = v;
-    }
-  }
-}
-
-(LIVE ? describe : describe.skip)(
-  "ORION-NORA-COHERENCE-CORR-01 LIVE counter-proof",
+(RUN_LIVE ? describe : describe.skip)(
+  "ORION-NORA-COHERENCE-CORR-01 LIVE counter-proof (opt-in)",
   () => {
+    const config = boundary && boundary.ok ? boundary : null;
+
     beforeAll(() => {
-      // Vitest setup.ts assigns a temp Nora session DB — force campaign pair.
-      loadDotEnvLocal([
-        "SFIA_STUDIO_PRODUCT_DB_PATH",
-        "SFIA_STUDIO_NORA_SESSION_DB_PATH",
-        "OPENAI_API_KEY",
-        "OPENAI_MODEL",
-      ]);
-      delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
-      delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
-      process.env.SFIA_STUDIO_CURSOR_REAL = "0";
-      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
-      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
-      process.env.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY = "1";
-      fs.mkdirSync(PROOF_DIR, { recursive: true });
-      resetRuntimeApplicationServiceForTests();
-      const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
-      if (!productDb) throw new Error("SFIA_STUDIO_PRODUCT_DB_PATH missing");
-      if (!process.env.OPENAI_API_KEY?.trim()) {
-        throw new Error("OPENAI_API_KEY missing");
+      if (!config) {
+        throw new Error(
+          LIVE && boundary && !boundary.ok
+            ? `LIVE opt-in present but boundary failed: ${boundary.reason}`
+            : "LIVE boundary config missing",
+        );
       }
+      applyLiveProofSafeRuntimeEnv(config);
+      resetRuntimeApplicationServiceForTests();
       getRuntimeApplicationService({
         registryRoot: FIXTURES,
         schemasRoot: SCHEMAS,
-        productDbPath: productDb,
+        productDbPath: config.productDbPath,
         auditMode: "noop",
       });
     });
@@ -87,38 +69,31 @@ function loadDotEnvLocal(forceKeys: readonly string[] = []): void {
     });

     it(
-      "FramingContinuity shows Conception; new LIVE turn is A1 without jargon",
+      "FramingContinuity + one LIVE turn (explicit targets only)",
       async () => {
-        const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
-        expect(sessionDb).toBeTruthy();
+        if (!config) throw new Error("LIVE config missing");

         const before = await projectAssistantReadFramingContinuityAction({
-          projectId: ORION_PROJECT_ID,
+          projectId: config.projectId,
         });
         expect(before.ok).toBe(true);
-        expect(before.continuity?.catalogLabel).toBe("Conception fonctionnelle");
-        expect(before.continuity?.targetCycleTypeId).toBe(
-          "cyc:functional-design",
-        );
+        expect(before.continuity?.catalogLabel).toBeTruthy();
         const beforeTitle = framingContinuityRecommendationReadyTitle({
           catalogLabel: before.continuity?.catalogLabel ?? null,
           targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
         });
-        expect(beforeTitle).toBe(
-          "Commencer par un « Conception fonctionnelle »",
-        );
         expect(beforeTitle).not.toMatch(/Cadrage/);

         const prompt =
-          "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
+          "Contre-épreuve cohérence (opt-in LIVE) : confirme en une restitution " +
           "unique et structurée la différence entre Cadrage exploratoire et Conception " +
-          "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
+          "fonctionnelle, et indique clairement quelle est la recommandation " +
           "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

         const turn = await sendProjectAssistantTurn({
-          projectId: ORION_PROJECT_ID,
+          projectId: config.projectId,
           content: prompt,
-          sessionDbPath: sessionDb!,
+          sessionDbPath: config.noraDbPath,
         });

         expect(turn.ok).toBe(true);
@@ -126,57 +101,65 @@ function loadDotEnvLocal(forceKeys: readonly string[] = []): void {
         expect(turn.presentation).toBe("openai_live");
         expect(turn.text).not.toMatch(/Les versions structurée et narrative/);
         expect(turn.text).not.toMatch(/CONTRADICTION CANDIDATE/);
-        expect(turn.text).toMatch(/Conception fonctionnelle/i);
         expect(turn.text.length).toBeGreaterThan(200);

         const after = await projectAssistantReadFramingContinuityAction({
-          projectId: ORION_PROJECT_ID,
+          projectId: config.projectId,
         });
         expect(after.ok).toBe(true);
-        expect(after.continuity?.catalogLabel).toBe("Conception fonctionnelle");
         const afterTitle = framingContinuityRecommendationReadyTitle({
           catalogLabel: after.continuity?.catalogLabel ?? null,
           targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
         });
         expect(afterTitle).not.toMatch(/Cadrage/);

-        const proof = {
-          at: new Date().toISOString(),
-          framingBefore: {
-            catalogLabel: before.continuity?.catalogLabel,
-            targetCycleTypeId: before.continuity?.targetCycleTypeId,
-            recommendationId: before.continuity?.recommendationId,
-            phase: before.continuity?.phase,
-            title: beforeTitle,
-          },
-          turn: {
-            ok: turn.ok,
-            status: turn.status,
-            presentation: turn.presentation,
-            model: turn.model ?? null,
-            contentLen: turn.text.length,
-            contentHead: turn.text.slice(0, 600),
-            usedAdaptive: Boolean(turn.adaptivePresentation),
-            studioControlNotices: turn.studioControlNotices ?? [],
-          },
-          framingAfter: {
-            catalogLabel: after.continuity?.catalogLabel,
-            targetCycleTypeId: after.continuity?.targetCycleTypeId,
-            recommendationId: after.continuity?.recommendationId,
-            phase: after.continuity?.phase,
-            title: afterTitle,
-          },
-        };
-        fs.writeFileSync(
-          path.join(PROOF_DIR, "live-counterproof.json"),
-          JSON.stringify(proof, null, 2),
-        );
-        fs.writeFileSync(
-          path.join(PROOF_DIR, "live-assistant-content.txt"),
-          turn.text,
-        );
+        if (config.proofDir) {
+          fs.mkdirSync(config.proofDir, { recursive: true });
+          const proof = {
+            at: new Date().toISOString(),
+            projectId: config.projectId,
+            framingBefore: {
+              catalogLabel: before.continuity?.catalogLabel,
+              targetCycleTypeId: before.continuity?.targetCycleTypeId,
+              title: beforeTitle,
+            },
+            turn: {
+              ok: turn.ok,
+              status: turn.status,
+              presentation: turn.presentation,
+              model: turn.model ?? null,
+              contentLen: turn.text.length,
+              contentHead: turn.text.slice(0, 600),
+              studioControlNotices: turn.studioControlNotices ?? [],
+            },
+            framingAfter: {
+              catalogLabel: after.continuity?.catalogLabel,
+              targetCycleTypeId: after.continuity?.targetCycleTypeId,
+              title: afterTitle,
+            },
+          };
+          fs.writeFileSync(
+            path.join(config.proofDir, "live-counterproof.json"),
+            JSON.stringify(proof, null, 2),
+          );
+        }
       },
       180_000,
     );
   },
 );
+
+describe("ORION-NORA-COHERENCE-CORR-01 LIVE harness — default skip contract", () => {
+  it("skips LIVE body when opt-in is absent (CI-safe)", () => {
+    if (!LIVE) {
+      expect(RUN_LIVE).toBe(false);
+      return;
+    }
+    // Opt-in present in this process: boundary must still be explicit/ok to run.
+    expect(boundary).not.toBeNull();
+    if (boundary && !boundary.ok) {
+      expect(RUN_LIVE).toBe(false);
+      expect(boundary.reason.length).toBeGreaterThan(0);
+    }
+  });
+});

### DELETE — orion-coherence-corr-01-live-proof.ts
commit 998386023e05de338b6dd172671a4a1ac571144f
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:06:32 2026 +0100

    fix(studio): prevent narrative loss and harden live QA harness

    Bound disposition footer peel to trusted terminal Studio format so mid-answer
    markers never erase métier content, and replace the unsafe ORION LIVE helper
    with an explicit opt-in boundary that refuses authority/reset escalation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/scripts/orion-coherence-corr-01-live-proof.ts b/projects/sfia-studio/app/scripts/orion-coherence-corr-01-live-proof.ts
deleted file mode 100644
index 2d5ccd94..00000000
--- a/projects/sfia-studio/app/scripts/orion-coherence-corr-01-live-proof.ts
+++ /dev/null
@@ -1,186 +0,0 @@
-/**
- * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof.
- * - Reads FramingContinuity against campaign Product DB.
- * - Emits ONE new Nora turn (does not rewrite historical turns).
- * - Cursor REAL remains OFF.
- *
- * Usage (from app/): npx tsx scripts/orion-coherence-corr-01-live-proof.ts
- */
-import fs from "node:fs";
-import path from "node:path";
-import { framingContinuityRecommendationReadyTitle } from "../features/project-assistant/f2/chatFirstFramingContinuity";
-import { projectAssistantReadFramingContinuityAction } from "../features/project-assistant/preCycleCandidateTrajectoryActions";
-import { sendProjectAssistantTurn } from "../features/project-assistant/sendProjectAssistantTurn";
-import {
-  getRuntimeApplicationService,
-  resetRuntimeApplicationServiceForTests,
-} from "../lib/vertical-slice-runtime";
-
-const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
-const PROOF_DIR =
-  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";
-
-function loadDotEnvLocal(): void {
-  const envPath = path.join(process.cwd(), ".env.local");
-  if (!fs.existsSync(envPath)) return;
-  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
-    const t = line.trim();
-    if (!t || t.startsWith("#")) continue;
-    const i = t.indexOf("=");
-    if (i <= 0) continue;
-    const k = t.slice(0, i).trim();
-    let v = t.slice(i + 1).trim();
-    if (
-      (v.startsWith('"') && v.endsWith('"')) ||
-      (v.startsWith("'") && v.endsWith("'"))
-    ) {
-      v = v.slice(1, -1);
-    }
-    if (process.env[k] == null || process.env[k] === "") {
-      process.env[k] = v;
-    }
-  }
-}
-
-async function main(): Promise<void> {
-  loadDotEnvLocal();
-  delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
-  delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
-  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
-  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
-
-  const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
-  const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
-  if (!productDb || !sessionDb) {
-    throw new Error("Campaign DB paths missing");
-  }
-  if (!process.env.OPENAI_API_KEY?.trim()) {
-    throw new Error("OPENAI_API_KEY missing — LIVE Nora required");
-  }
-
-  fs.mkdirSync(PROOF_DIR, { recursive: true });
-
-  const appRoot = process.cwd();
-  const fixtures = path.join(appRoot, "lib/oa/doctrine/fixtures");
-  const schemas = path.resolve(
-    appRoot,
-    "../sfia-v3-modeled/v3-native-option-a/schemas",
-  );
-
-  resetRuntimeApplicationServiceForTests();
-  const runtime = getRuntimeApplicationService({
-    registryRoot: fixtures,
-    schemasRoot: schemas,
-    productDbPath: productDb,
-    auditMode: "noop",
-  });
-  if (!runtime.oa) throw new Error("OA unavailable");
-
-  const before = await projectAssistantReadFramingContinuityAction({
-    projectId: ORION_PROJECT_ID,
-  });
-  const beforeTitle = before.ok
-    ? framingContinuityRecommendationReadyTitle({
-        catalogLabel: before.continuity?.catalogLabel ?? null,
-        targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
-      })
-    : null;
-
-  const prompt =
-    "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
-    "unique et structurée la différence entre Cadrage exploratoire et Conception " +
-    "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
-    "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";
-
-  const turn = await sendProjectAssistantTurn({
-    projectId: ORION_PROJECT_ID,
-    content: prompt,
-    sessionDbPath: sessionDb,
-  });
-
-  const after = await projectAssistantReadFramingContinuityAction({
-    projectId: ORION_PROJECT_ID,
-  });
-  const afterTitle = after.ok
-    ? framingContinuityRecommendationReadyTitle({
-        catalogLabel: after.continuity?.catalogLabel ?? null,
-        targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
-      })
-    : null;
-
-  const assistantText = turn.ok ? turn.text : "";
-
-  const proof = {
-    cycle: "ORION-NORA-COHERENCE-CORR-01",
-    at: new Date().toISOString(),
-    cursorReal: process.env.SFIA_STUDIO_CURSOR_REAL,
-    projectId: ORION_PROJECT_ID,
-    framingBefore: {
-      ok: before.ok,
-      phase: before.continuity?.phase ?? null,
-      catalogLabel: before.continuity?.catalogLabel ?? null,
-      targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
-      recommendationId: before.continuity?.recommendationId ?? null,
-      title: beforeTitle,
-      message: before.continuity?.message ?? null,
-    },
-    turn: {
-      ok: turn.ok,
-      status: (turn as { status?: string }).status ?? null,
-      code: (turn as { code?: string }).code ?? null,
-      contentHead: assistantText.slice(0, 500),
-      contentLen: assistantText.length,
-      hasDivergenceNotice: assistantText.includes(
-        "Les versions structurée et narrative",
-      ),
-      hasContradictionJargon: /CONTRADICTION CANDIDATE/i.test(assistantText),
-      hasConception: /Conception fonctionnelle/i.test(assistantText),
-      hasCadrageExploratoireTitleOnlyAsComparison:
-        /Cadrage exploratoire/i.test(assistantText),
-    },
-    framingAfter: {
-      ok: after.ok,
-      phase: after.continuity?.phase ?? null,
-      catalogLabel: after.continuity?.catalogLabel ?? null,
-      targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
-      recommendationId: after.continuity?.recommendationId ?? null,
-      title: afterTitle,
-      message: after.continuity?.message ?? null,
-    },
-    checks: {
-      cardNotFakeCadrage:
-        beforeTitle != null &&
-        !/Cadrage/i.test(beforeTitle) &&
-        /Conception fonctionnelle/i.test(beforeTitle ?? ""),
-      cardAlignedAfter:
-        afterTitle != null &&
-        !/Cadrage/i.test(afterTitle) &&
-        /Conception fonctionnelle/i.test(afterTitle ?? ""),
-      turnOk: turn.ok === true,
-      noDivergenceNotice: !assistantText.includes(
-        "Les versions structurée et narrative",
-      ),
-      noContradictionJargon: !/CONTRADICTION CANDIDATE/i.test(assistantText),
-    },
-  };
-
-  const out = path.join(PROOF_DIR, "live-counterproof.json");
-  fs.writeFileSync(out, JSON.stringify(proof, null, 2));
-  fs.writeFileSync(
-    path.join(PROOF_DIR, "live-assistant-content.txt"),
-    assistantText,
-  );
-  console.log(JSON.stringify(proof, null, 2));
-  console.log("PROOF_DIR", PROOF_DIR);
-
-  const failed = Object.entries(proof.checks).filter(([, v]) => v !== true);
-  if (failed.length > 0) {
-    console.error("LIVE CHECKS FAILED", failed.map(([k]) => k));
-    process.exitCode = 2;
-  }
-}
-
-main().catch((err) => {
-  console.error(err);
-  process.exitCode = 1;
-});

## 16. Safety regression tests
### NEW FILE COMPLETE — orionNoraCoherenceLiveProofBoundary.d0.test.ts
/**
 * FINAL-REVIEW-CORR-635 — Blocker B: LIVE proof boundary safety (DET).
 * ZERO OpenAI calls. ZERO DB writes.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  LIVE_PROVIDER_OPT_IN_ENV,
  ORION_COHERENCE_LIVE_LEGACY_ENV,
  applyLiveProofSafeRuntimeEnv,
  isLiveProviderOptIn,
  resolveOrionCoherenceLiveProofBoundary,
  type LiveProofEnv,
} from "@/lib/project-assistant-qa/orionCoherenceLiveProofBoundary";

const SOURCE_PATH = path.resolve(
  __dirname,
  "../../lib/project-assistant-qa/orionCoherenceLiveProofBoundary.ts",
);
const LIVE_TEST_PATH = path.resolve(
  __dirname,
  "orionNoraCoherenceCorr01.live.test.ts",
);
const REMOVED_SCRIPT = path.resolve(
  __dirname,
  "../../scripts/orion-coherence-corr-01-live-proof.ts",
);

const tmpDirs: string[] = [];

afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function makeExistingDbPair(): { product: string; nora: string; dir: string } {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "orion-live-boundary-"));
  tmpDirs.push(dir);
  const product = path.join(dir, "product.sqlite");
  const nora = path.join(dir, "nora.sqlite");
  fs.writeFileSync(product, "");
  fs.writeFileSync(nora, "");
  return { product, nora, dir };
}

describe("FINAL-REVIEW-CORR-635 — LIVE proof boundary B01–B10", () => {
  it("B01/B02 — default CI: opt-in false; no OpenAI required", () => {
    const env: LiveProofEnv = { ...process.env };
    delete (env as Record<string, string | undefined>)[LIVE_PROVIDER_OPT_IN_ENV];
    delete (env as Record<string, string | undefined>)[
      ORION_COHERENCE_LIVE_LEGACY_ENV
    ];
    delete (env as Record<string, string | undefined>).OPENAI_API_KEY;
    expect(isLiveProviderOptIn(env)).toBe(false);
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("opt_in_missing");
  });

  it("B03 — missing required parameters fail closed before side effects", () => {
    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("project_id_missing");
  });

  it("B04 — invalid DB path: no file created or overwritten", () => {
    const ghostDir = path.join(os.tmpdir(), `orion-live-ghost-${Date.now()}`);
    const ghostProduct = path.join(ghostDir, "missing-product.sqlite");
    const ghostNora = path.join(ghostDir, "missing-nora.sqlite");
    expect(fs.existsSync(ghostDir)).toBe(false);

    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: ghostProduct,
      TEST_NORA_DB_PATH: ghostNora,
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("product_db_not_file");
    expect(fs.existsSync(ghostDir)).toBe(false);
    expect(fs.existsSync(ghostProduct)).toBe(false);
  });

  it("B05 — no authority overrides accepted on opt-in", () => {
    const { product, nora } = makeExistingDbPair();
    for (const flag of [
      "SFIA_STUDIO_LOCAL_PILOT_AUTHORITY",
      "SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY",
      "SFIA_V2_RUNTIME_ALLOW_RESET",
    ] as const) {
      const env: LiveProofEnv = {
        [LIVE_PROVIDER_OPT_IN_ENV]: "1",
        TEST_PROJECT_ID: "prj:test-only",
        TEST_PRODUCT_DB_PATH: product,
        TEST_NORA_DB_PATH: nora,
        OPENAI_API_KEY: "sk-test-not-used",
        [flag]: "1",
      };
      const r = resolveOrionCoherenceLiveProofBoundary(env);
      expect(r.ok).toBe(false);
      if (r.ok) return;
      expect(r.code).toBe("authority_escalation_present");
      expect(r.reason).toContain(flag);
    }
  });

  it("B06 — safe runtime apply never enables reset or authority", () => {
    const { product, nora } = makeExistingDbPair();
    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      SFIA_V2_RUNTIME_ALLOW_RESET: "1",
    };
    // Boundary refuses while escalation present.
    expect(resolveOrionCoherenceLiveProofBoundary(env).ok).toBe(false);

    const envClean: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const ok = resolveOrionCoherenceLiveProofBoundary(envClean);
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;

    const mutable: Record<string, string | undefined> = {
      SFIA_V2_RUNTIME_ALLOW_RESET: "1",
      SFIA_STUDIO_LOCAL_PILOT_AUTHORITY: "1",
      SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY: "1",
      SFIA_STUDIO_CURSOR_REAL: "1",
    };
    applyLiveProofSafeRuntimeEnv(ok, mutable);
    expect(mutable.SFIA_V2_RUNTIME_ALLOW_RESET).toBeUndefined();
    expect(mutable.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY).toBeUndefined();
    expect(mutable.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY).toBeUndefined();
    expect(mutable.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(mutable.SFIA_STUDIO_PRODUCT_DB_PATH).toBe(ok.productDbPath);
  });

  it("B07 — no personal absolute path or fixed ORION identifier in harness sources", () => {
    const boundarySrc = fs.readFileSync(SOURCE_PATH, "utf8");
    const liveSrc = fs.readFileSync(LIVE_TEST_PATH, "utf8");
    for (const src of [boundarySrc, liveSrc]) {
      expect(src).not.toMatch(/\/Users\/morris\//);
      expect(src).not.toMatch(/prj:b0883ca8-2411-493d-94ff-e386d176956a/);
      expect(src).not.toMatch(/loadDotEnvLocal/);
      expect(src).not.toMatch(/SFIA_V2_RUNTIME_ALLOW_RESET\s*=\s*["']1["']/);
      expect(src).not.toMatch(/SFIA_STUDIO_LOCAL_PILOT_AUTHORITY\s*=\s*["']1["']/);
      expect(src).not.toMatch(
        /SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY\s*=\s*["']1["']/,
      );
    }
    expect(fs.existsSync(REMOVED_SCRIPT)).toBe(false);
  });

  it("B08 — secrets are not embedded in harness sources", () => {
    const boundarySrc = fs.readFileSync(SOURCE_PATH, "utf8");
    const liveSrc = fs.readFileSync(LIVE_TEST_PATH, "utf8");
    for (const src of [boundarySrc, liveSrc]) {
      expect(src).not.toMatch(/sk-[a-zA-Z0-9]{10,}/);
      expect(src).not.toMatch(/OPENAI_API_KEY\s*=\s*["']sk-/);
    }
  });

  it("B09 — Cursor REAL remains OFF in safe apply / forbidden when already 1", () => {
    const { product, nora } = makeExistingDbPair();
    const envReal: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      SFIA_STUDIO_CURSOR_REAL: "1",
    };
    const denied = resolveOrionCoherenceLiveProofBoundary(envReal);
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.code).toBe("cursor_real_forbidden");
  });

  it("B10 — successful resolve requires explicit targets; legacy opt-in alias works", () => {
    const { product, nora } = makeExistingDbPair();
    const proofDir = path.join(os.tmpdir(), "proof-out-not-created-by-resolve");
    const env: LiveProofEnv = {
      [ORION_COHERENCE_LIVE_LEGACY_ENV]: "1",
      TEST_PROJECT_ID: "prj:explicit-test",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      TEST_PROOF_DIR: proofDir,
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.projectId).toBe("prj:explicit-test");
    expect(r.cursorReal).toBe("0");
    expect(r.productDbPath).toBe(path.resolve(product));
    // resolve must not mkdir proof dir
    expect(fs.existsSync(proofDir)).toBe(false);
  });
});

## 17. Complete changed code diffs
Covered in §§11/15. Full Product commit:
commit 998386023e05de338b6dd172671a4a1ac571144f
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:06:32 2026 +0100

    fix(studio): prevent narrative loss and harden live QA harness

    Bound disposition footer peel to trusted terminal Studio format so mid-answer
    markers never erase métier content, and replace the unsafe ORION LIVE helper
    with an explicit opt-in boundary that refuses authority/reset escalation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...rionNoraCoherenceCorr01.footerSafety.d0.test.ts | 291 +++++++++++++++++++++
 .../orionNoraCoherenceCorr01.live.test.ts          | 193 +++++++-------
 .../orionNoraCoherenceLiveProofBoundary.d0.test.ts | 221 ++++++++++++++++
 .../noraAdaptivePresentation.ts                    |  48 ++--
 .../orionCoherenceLiveProofBoundary.ts             | 197 ++++++++++++++
 .../scripts/orion-coherence-corr-01-live-proof.ts  | 186 -------------
 6 files changed, 830 insertions(+), 306 deletions(-)

## 18. Complete new test files
Covered in §§12/16 (full file contents).

## 19. R24 semantic changes/diffs
commit b0ce841367c441590ef1b6f0a41279e960401fbf
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:07:05 2026 +0100

    docs(studio): align ORION coherence R24 and proof boundaries

    Document bounded terminal footer extraction, safer LIVE opt-in harness
    constraints, and evidence ceiling after FINAL-REVIEW-CORR-635; refresh
    canonical PRR digests against corrective Product commit 99838602.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../03-end-to-end-flow-catalog.md                      |  8 ++++----
 .../05-environments-configuration-and-boundaries.md    | 13 +++++++++++++
 .../06-persistence-restart-and-recovery.md             |  4 +++-
 .../07-authority-invariants-and-failure-modes.md       |  7 ++++---
 .../08-test-proof-and-conformance-map.md               |  8 +++++---
 .../09-known-gaps-reserves-and-current-boundaries.md   |  9 +++++----
 .../sfia-studio/production-runtime-reference/README.md |  9 +++++----
 .../production-runtime-reference.manifest.json         | 18 +++++++++---------
 8 files changed, 48 insertions(+), 28 deletions(-)

commit b0ce841367c441590ef1b6f0a41279e960401fbf
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 11:07:05 2026 +0100

    docs(studio): align ORION coherence R24 and proof boundaries

    Document bounded terminal footer extraction, safer LIVE opt-in harness
    constraints, and evidence ceiling after FINAL-REVIEW-CORR-635; refresh
    canonical PRR digests against corrective Product commit 99838602.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 3c2a228b..3a4816d8 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -6,17 +6,17 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)

-> **Product code ref:** `9bd22f875d01404989a03de5db2c96e396e6d89c` · **≠ CURRENT ON MAIN** until merge.
+> **Product code ref:** corrective Product commit on PR [#635](https://github.com/mcleland147/sfia-workspace/pull/635) (see manifest `lastReviewedCommit`) · **≠ CURRENT ON MAIN** until merge.
 >
 > **F03 / Framing Continuity Card:** phase `recommendation_ready` hydrates `catalogLabel` / `targetCycleTypeId` / `recommendationId` from Product CURRENT NEXT_CYCLE Recommendation when candidate/approval presentation is absent. Pilot title uses catalog label; suffix « exploratoire » only for Framing/`cyc:framing`. Unknown label → neutral title (never invent « Cadrage »).
 >
-> **F04 / NAP durable write:** `buildDurableAssistantContentForTurn` classifies on core **after** stripping cognitive disposition footers (`CONTRADICTION CANDIDATE` / `COGNITIVE STOP` / `EVIDENCE-BACKED CONTRADICTION`). Empty structured narrative prefers coherent narrative string (including empty) over contaminated `turn.text`. True divergence remains fail-closed dual+notice. Candidate contradiction surfaces as typed Studio notice (Pilot-intelligible), not métier jargon in body.
+> **F04 / NAP durable write:** `buildDurableAssistantContentForTurn` classifies on core **after** peeling **trusted terminal** cognitive disposition footers only (`CONTRADICTION CANDIDATE` / `COGNITIVE STOP` / `EVIDENCE-BACKED CONTRADICTION` + documented `Evidence:`/`Next:` continuations). Mid-answer markers, quotes, code fences, and ambiguous markers are **preserved** (fail-closed — no silent métier loss). Empty structured narrative prefers coherent narrative string (including empty) over contaminated `turn.text`. True divergence remains fail-closed dual+notice. Candidate contradiction surfaces as typed Studio notice (Pilot-intelligible), not métier jargon in body.
 >
 > **Memory B:** new turns may persist A1 compose; historical divergent rows are **not** rewritten.
 >
-> **Proof:** `orionNoraCoherenceCorr01.d0.test.ts` · framing/NAP suites · LIVE opt-in `ORION_COHERENCE_LIVE=1` · browser UI capture **NOT PROVEN**.
+> **Proof:** `orionNoraCoherenceCorr01.d0.test.ts` · `orionNoraCoherenceCorr01.footerSafety.d0.test.ts` (A01–A14) · framing/NAP suites · LIVE opt-in via `LIVE_PROVIDER_OPT_IN=1` / `ORION_COHERENCE_LIVE=1` + explicit `TEST_PROJECT_ID` / DB paths (`orionCoherenceLiveProofBoundary`) · browser UI capture **NOT PROVEN**.
 >
-> **Anti-claims:** ≠ MERGED · ≠ auto-START · ≠ HD invent · ≠ Cursor REAL.
+> **Anti-claims:** ≠ MERGED · ≠ auto-START · ≠ HD invent · ≠ Cursor REAL · ≠ new LIVE run in FINAL-REVIEW-CORR-635.

 **Epistemic split (post-merge 2026-10-26) — RepositoryBinding + docs_write Product specialization:** **CURRENT ON MAIN** (`fec4e65d` / PR #618 MERGED): **RepositoryBinding RETIRED**; **docs_write Product admission RETIRED**. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. Sentences below that still describe Binding or docs_write Product admission as live Product behaviour are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**.

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index b83fcf56..92f9648b 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -11,6 +11,19 @@
 | Capability | What an agent *can* do technically |
 | Authority | What a Pilot/Morris *may* authorize |

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 LIVE proof boundary (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+| Item | Status |
+|---|---|
+| Default | LIVE proof **disabled** — CI never calls OpenAI for this harness |
+| Opt-in | `LIVE_PROVIDER_OPT_IN=1` or legacy `ORION_COHERENCE_LIVE=1` |
+| Required targets | `TEST_PROJECT_ID` · `TEST_PRODUCT_DB_PATH` / `SFIA_STUDIO_PRODUCT_DB_PATH` · `TEST_NORA_DB_PATH` / `SFIA_STUDIO_NORA_SESSION_DB_PATH` · existing files only · `OPENAI_API_KEY` already in process env |
+| Optional | `TEST_PROOF_DIR` (created only if LIVE body runs and path set) |
+| Forbidden on opt-in | `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=1` · `SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY=1` · `SFIA_V2_RUNTIME_ALLOW_RESET=1` · `SFIA_STUDIO_CURSOR_REAL=1` |
+| Code | `orionCoherenceLiveProofBoundary.ts` · gated `orionNoraCoherenceCorr01.live.test.ts` |
+| Removed | ORION-only helper `scripts/orion-coherence-corr-01-live-proof.ts` (redundant; hardcoded paths/authority) |
+| Anti-claims | ≠ new LIVE run in FINAL-REVIEW-CORR-635 · ≠ browser E2E · ≠ G-REAL · ≠ CURRENT ON MAIN |
+
 ## Overlay — PR #618 mutating Cursor confinement (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 3ec3b78a..f6056e0b 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -6,10 +6,12 @@

 > **NO schema change.** Memory B columns (`content` / `presentation_json` / `studio_control_json`) unchanged.
 >
-> **Write behaviour (candidate @ `9bd22f87`):** durable `content` built after stripping disposition footers; when A1 admissible, prefer folded/durable presentation for `presentation_json`; contradiction candidate may append typed notice into `studio_control_json` (not raw marker in narrative body).
+> **Write behaviour (candidate — see manifest `lastReviewedCommit`):** durable `content` built after peeling **terminal trusted** disposition footers only; ordinary narrative paragraphs are preserved when markers are mid-answer or ambiguous; when A1 admissible, prefer folded/durable presentation for `presentation_json`; contradiction candidate may append typed notice into `studio_control_json` (not raw marker in narrative body).
 >
 > **Historical preservation:** existing divergent transcript rows (e.g. ORION seq 3) remain as stored; correction applies to **new** turns. Reload rehydrates from durable fields; server process restart **NOT PROVEN** by this cycle.
 >
+> **LIVE proof DB:** opt-in harness requires **existing** Product/Nora DB files (`TEST_*` / Studio path aliases) and never enables `SFIA_V2_RUNTIME_ALLOW_RESET` — no silent historical ORION rewrite via harness defaults.
+>
 > **Anti-claims:** ≠ CURRENT ON MAIN · ≠ R-SRV-RESTART closed · ≠ transcript rewrite migration.

 ## Overlay — CORR-01 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 4f69efb7..25ff807d 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -8,11 +8,12 @@

 | ID / theme | Statement (candidate) | Status |
 |---|---|---|
-| INV-REC-NE-HD | Framing Continuity Card projects Product Recommendation CURRENT; never invents HumanDecision / START | **CANDIDATE** · DET + LIVE seam · ≠ MERGED |
+| INV-REC-NE-HD | Framing Continuity Card projects Product Recommendation CURRENT; never invents HumanDecision / START | **CANDIDATE** · DET + historical LIVE seam · ≠ MERGED |
 | INV-CURRENT-FROM-PRODUCT | Card `catalogLabel` / `targetCycleTypeId` come from Product CURRENT (or later candidate/approval), never from Nora prose alone | **CANDIDATE** |
-| INV-NAP-DISPOSITION-NE-NARRATIVE | Cognitive disposition footers are not narrative substance for A1/B classify; typed Studio notice may disclose candidate contradiction without authority | **CANDIDATE** |
+| INV-NAP-DISPOSITION-NE-NARRATIVE | Only **trusted terminal** Studio disposition footers are peeled from narrative for A1/B classify; mid-answer / quoted / fenced / ambiguous markers are preserved; typed Studio notice may disclose candidate contradiction without authority | **CANDIDATE** · FINAL-REVIEW-CORR-635 |
 | INV-TRUE-DIVERGENCE-FAIL-CLOSED | Material narrative↔presentation conflict still dual+notice; no silent pick | **PRESERVED** (CORR-A1B) |
-| Anti-claims | ≠ CURRENT ON MAIN · ≠ G-REAL · ≠ Cursor REAL · ≠ auto-START | — |
+| INV-LIVE-PROOF-NO-IMPLICIT-AUTH | Opt-in LIVE proof boundary refuses Pilot/Morris local authority flags and `SFIA_V2_RUNTIME_ALLOW_RESET`; Cursor REAL forced OFF; no hardcoded project authority | **CANDIDATE** · B01–B10 |
+| Anti-claims | ≠ CURRENT ON MAIN · ≠ G-REAL · ≠ Cursor REAL · ≠ auto-START · ≠ contradiction → HumanDecision | — |

 ## Overlay — PR #618 effect-based confinement + write-mode without Product Binding (CURRENT ON MAIN — PR #618 MERGED — DET scope — 2026-10-26)

diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index e3e61695..8f2bd6f7 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -11,14 +11,16 @@

 ## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 proof index (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)

-> Product code **`9bd22f87…`**. CI default skips LIVE (`ORION_COHERENCE_LIVE` unset → `describe.skip`).
+> Product code = manifest `lastReviewedCommit` (FINAL-REVIEW-CORR-635 corrective Product). CI default skips LIVE (opt-in unset → `describe.skip`). Prior LIVE counter-proof remains **historical evidence only** — not re-executed in this correction.

 | Suite / artifact | What it proves | Class |
 |---|---|---|
-| `orionNoraCoherenceCorr01.d0.test.ts` | T01–T12 + ORION: A1 equivalence/complementary · true divergent preserved · footer strip · Conception card title · no invent Cadrage | **DETERMINISTIC VERIFIED** · CANDIDATE |
+| `orionNoraCoherenceCorr01.d0.test.ts` | T01–T12 + ORION: A1 equivalence/complementary · true divergent preserved · terminal footer peel · Conception card title · no invent Cadrage | **DETERMINISTIC VERIFIED** · CANDIDATE |
+| `orionNoraCoherenceCorr01.footerSafety.d0.test.ts` | A01–A14: no silent métier loss · mid/quote/code/inline preserve · multiline STOP bound · true divergent · Memory B plain preserve · Conception aligned | **DETERMINISTIC VERIFIED** · CANDIDATE |
+| `orionNoraCoherenceLiveProofBoundary.d0.test.ts` | B01–B10: default skip · fail-closed missing params · no DB create · no authority/reset · no hardcoded ORION/paths · Cursor REAL OFF · script removed | **DETERMINISTIC VERIFIED** · CANDIDATE |
 | `framingContinuityCard.ui.test.tsx` (+ ORION case) | Cadrage keeps exploratoire; Conception does not | **DETERMINISTIC VERIFIED** · jsdom · CANDIDATE |
 | `corrA1b01.secured.d0` / `noraAdaptivePresentation.*` / Framing continuity / LR suites | Non-regression NAP + lifecycle | **DETERMINISTIC VERIFIED** · re-run on candidate |
-| `orionNoraCoherenceCorr01.live.test.ts` | Bounded OpenAI LIVE Product seam on campaign ORION | **OPT-IN LIVE** · requires `ORION_COHERENCE_LIVE=1` · ≠ CI default · ≠ browser screenshot |
+| `orionNoraCoherenceCorr01.live.test.ts` | Bounded OpenAI LIVE Product seam | **OPT-IN LIVE** · `LIVE_PROVIDER_OPT_IN=1` or `ORION_COHERENCE_LIVE=1` + `TEST_PROJECT_ID` + existing DB paths · ≠ CI default · ≠ browser screenshot · ≠ implicit authority |
 | Browser authenticated UI capture | — | **NOT PROVEN** |

 ## Overlay — Nora UX consolidated proof index (GI-NAP-UX-CONSOLIDATED-01 — CURRENT ON MAIN — PR #630 — 2026-10-31)
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 846fa89a..6ec3ba03 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -9,15 +9,16 @@

 | Élément | Statut | Limite |
 |---|---|---|
-| Framing CURRENT catalog hydration | **CANDIDATE** DET + LIVE seam | ≠ MERGED / ≠ CURRENT ON MAIN |
-| NAP disposition footer isolation | **CANDIDATE** DET + LIVE seam | historical divergent rows preserved |
-| Bounded OpenAI LIVE Product seam (ORION) | **OBSERVED** under campaign auth | ≠ R-LIVE-EMIT GLOBAL PASS |
+| Framing CURRENT catalog hydration | **CANDIDATE** DET (+ historical LIVE seam) | ≠ MERGED / ≠ CURRENT ON MAIN |
+| NAP disposition footer isolation | **CANDIDATE** DET A01–A14 | terminal trusted only; mid-answer preserve; historical divergent rows preserved |
+| LIVE proof harness safety | **CANDIDATE** DET B01–B10 | opt-in + explicit targets; no reset/authority escalation; ORION-only script removed |
+| Bounded OpenAI LIVE Product seam (ORION) | **HISTORICAL OBSERVATION** (prior campaign) | ≠ re-proven in FINAL-REVIEW-CORR-635 · ≠ R-LIVE-EMIT GLOBAL PASS |
 | Authenticated browser screenshot ORION | **NOT PROVEN** | auth / Screen Recording gap |
 | Cursor REAL | **OFF** | G-REAL NOT GRANTED |
 | L3-S2 | **OPEN** | supports QA-02 / R-LIVE-EMIT trajectory; does not close |
 | R-STOP-BROWSER / R-SRV-RESTART / EP-S2-08 | **OPEN** | unchanged by this correction |

-Anti-claims: ≠ L3-S2 COMPLETE · ≠ runtime v3 ADOPTED · ≠ G-REAL · digest MATCH ≠ semantic exhaustiveness.
+Anti-claims: ≠ L3-S2 COMPLETE · ≠ runtime v3 ADOPTED · ≠ G-REAL · digest MATCH ≠ semantic exhaustiveness · ≠ new LIVE execution under this Git correction.

 ## Overlay — Nora UX consolidated / GI-NAP-UX-CONSOLIDATED-01 (CURRENT ON MAIN — PR #630 — 2026-10-31)

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 5569fdca..091a31b3 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -70,13 +70,14 @@ Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 —

 | Epistemic class | Element |
 |---|---|
-| **AS-IMPLEMENTED ON PRODUCT PR CANDIDATE** | Branch `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` · Product code **`9bd22f875d01404989a03de5db2c96e396e6d89c`** · **≠ CURRENT ON MAIN** until Morris merge |
+| **AS-IMPLEMENTED ON PRODUCT PR CANDIDATE** | Branch `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` · PR [#635](https://github.com/mcleland147/sfia-workspace/pull/635) · corrective Product **`998386023e05de338b6dd172671a4a1ac571144f`** (prior Product `9bd22f87…`) · **≠ CURRENT ON MAIN** until Morris merge |
 | **Incident (ORION / FRESH-LIVE-QA-01)** | Pilot clarification Cadrage vs Conception · Nora prose Conception · Product CURRENT `cyc:functional-design` · Framing card showed « Cadrage exploratoire » · dual structured/narrative + technical `CONTRADICTION CANDIDATE` footer |
 | **Root cause A** | `recommendation_ready` without candidate/approval left `catalogLabel` null → UI default « Cadrage » + universal « exploratoire » |
 | **Root cause B** | Empty structured `narrative` retained contaminated `turn.text` (disposition footer) → false CORR-A1B divergent |
-| **Candidate Product facts** | CURRENT Rec hydrates Framing snapshot · « exploratoire » only for Framing/`cyc:framing` · disposition footers stripped before NAP classify · typed Studio coherence notice · A1 when complementary/admissible · historical Memory B turns not rewritten |
-| **Proof ceiling** | DET T01–T12 + NAP/Framing/lifecycle suites · bounded OpenAI LIVE Product seam (`ORION_COHERENCE_LIVE=1`) · browser authenticated screenshot **NOT PROVEN** · Cursor REAL **OFF** |
-| **Anti-claims** | ≠ MERGED · ≠ CURRENT ON MAIN · ≠ L3-S2 COMPLETE · ≠ R-LIVE-EMIT GLOBAL PASS · ≠ G-REAL · ≠ runtime v3 ADOPTED |
+| **Review correction (FINAL-REVIEW-CORR-635)** | (1) Footer extraction is **terminal / Studio-format only** — ordinary paragraphs after mid-answer markers are **preserved** (fail-closed). (2) LIVE harness is **opt-in**, explicit project/DB targets, **no** hardcoded ORION id/paths, **no** `.env.local` force, **no** Pilot/Morris authority or `ALLOW_RESET` escalation; redundant ORION-only script **removed**. |
+| **Candidate Product facts** | CURRENT Rec hydrates Framing snapshot · « exploratoire » only for Framing/`cyc:framing` · **bounded** disposition footer peel before NAP classify · typed Studio coherence notice · A1 when complementary/admissible · historical Memory B turns not rewritten · true divergence remains fail-closed |
+| **Proof ceiling** | DET T01–T12 + A01–A14 footer safety + B01–B10 LIVE boundary · NAP/Framing suites · prior bounded LIVE seam = **historical evidence only** (this correction does **not** re-run LIVE) · browser authenticated screenshot **NOT PROVEN** · Cursor REAL **OFF** |
+| **Anti-claims** | ≠ MERGED · ≠ CURRENT ON MAIN · ≠ L3-S2 COMPLETE · ≠ R-LIVE-EMIT GLOBAL PASS · ≠ G-REAL · ≠ runtime v3 ADOPTED · digest MATCH ≠ semantic exhaustiveness |

 **Nora Adaptive Presentation UX consolidated / AKG-M5 L3-S2 — GI-NAP-UX-CONSOLIDATED-01 (CURRENT PRODUCT ON MAIN — PR #630 MERGED — 2026-10-31):**

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index e3acef7d..b6993477 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "9bd22f875d01404989a03de5db2c96e396e6d89c",
-  "lastReviewedAt": "2026-11-01T09:30:00Z",
+  "lastReviewedCommit": "998386023e05de338b6dd172671a4a1ac571144f",
+  "lastReviewedAt": "2026-11-01T11:05:00Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "4f9aec3513102660"
+      "sha256_16": "5e94c006db3d11bc"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "e7f057088f1609eb"
+      "sha256_16": "9428e9267f96dcb5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -27,23 +27,23 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "5190232c2ad6f741"
+      "sha256_16": "732a98c482eb0b25"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "7c919f5ef3d05389"
+      "sha256_16": "b6696419717db23d"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "73a7c5037da358b7"
+      "sha256_16": "92f15b965f397a6a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "d85a16b32269a1ed"
+      "sha256_16": "7130ef7f4ac0a653"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "48be473a592c2e6a"
+      "sha256_16": "96910ae77e6802e5"
     }
   ],
   "components": [

## 20. Manifest verification
lastReviewedCommit=998386023e05de338b6dd172671a4a1ac571144f
check-production-runtime-reference.mjs --write-digests → CONFORMANCE OK
Vitest productionRuntimeReference.conformance.d0 → 5 PASS

## 21. Full QA commands/results
- Targeted A/B + ORION d0 + NAP d0/ui + framing Continuity/card: PASS
- tsc --noEmit: PASS
- eslint changed files: PASS
- next build: PASS
- Global Vitest (CI=true, campaign DB/authority unset): **6384 PASS / 143 SKIP** (LIVE skipped)
- PRR checker: PASS
- Note: shell had SFIA_STUDIO_PRODUCT_DB_PATH / LOCAL_*_AUTHORITY set; clean env required for global green (not product regression).

## 22. LIVE evidence limits
No new OpenAI LIVE under this GO. Prior ORION LIVE counter-proof = historical observation only. Harness remains opt-in.

## 23. Browser evidence limits
Authenticated browser screenshot ORION: **NOT PROVEN**.

## 24. Fake/Real Qualification
DET = Fake/deterministic. LIVE provider path opt-in only (not executed). Cursor REAL OFF. No G-REAL.

## 25. Product commit SHA
998386023e05de338b6dd172671a4a1ac571144f

## 26. R24 commit SHA
b0ce841367c441590ef1b6f0a41279e960401fbf

## 27. Remote branch HEAD
b0ce841367c441590ef1b6f0a41279e960401fbf (verified after FF push)

## 28. PR #635 URL and new HEAD
https://github.com/mcleland147/sfia-workspace/pull/635
HEAD b0ce841367c441590ef1b6f0a41279e960401fbf

## 29. CI run/result
- Run ID: **41296246136**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/41296246136
- headSha: **b0ce841367c441590ef1b6f0a41279e960401fbf**
- Conclusion: **SUCCESS**
- Jobs: Detect PASS · Build and validate PASS · **SFIA Studio Required Gate PASS**
- Prior run 41293512880 is historical only — not reused for this HEAD.
- Verdict: **READY FOR CHATGPT MERGE REVIEW** (no merge in this campaign).

## 30. Git Review Index
| Path | Change | Commit |
|---|---|---|
| noraAdaptivePresentation.ts | footer peel bounded | 998386023e05de338b6dd172671a4a1ac571144f |
| orionCoherenceLiveProofBoundary.ts | NEW LIVE boundary | 998386023e05de338b6dd172671a4a1ac571144f |
| orionNoraCoherenceCorr01.footerSafety.d0.test.ts | NEW A01–A14 | 998386023e05de338b6dd172671a4a1ac571144f |
| orionNoraCoherenceLiveProofBoundary.d0.test.ts | NEW B01–B10 | 998386023e05de338b6dd172671a4a1ac571144f |
| orionNoraCoherenceCorr01.live.test.ts | rewritten safe opt-in | 998386023e05de338b6dd172671a4a1ac571144f |
| orion-coherence-corr-01-live-proof.ts | DELETED | 998386023e05de338b6dd172671a4a1ac571144f |
| PRR README/03/05/06/07/08/09 + manifest | R24 sync | b0ce841367c441590ef1b6f0a41279e960401fbf |

## 31. Remaining debts
- Browser UI ORION screenshot NOT PROVEN
- L3-S2 OPEN; R-LIVE-EMIT / R-STOP-BROWSER / R-SRV-RESTART OPEN
- Prior LIVE not re-executed this cycle

## 32. Morris merge gate
NO AUTO-MERGE. ChatGPT reviews final #635; Morris decides merge.

## 33. Next ORION QA continuation
After merge decision: resume ORION continuity QA (QA-02 / R-LIVE-EMIT trajectory) under separate GO. No merge in this campaign.

---
END OF FULL REVIEW PACK — GI-ORION-NORA-COHERENCE-CORR-01 FINAL-REVIEW-CORR-635
