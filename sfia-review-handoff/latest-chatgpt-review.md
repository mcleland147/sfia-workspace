# ChatGPT Review Pack — FULL
# SFIA-STUDIO-PRODUCT-PROOF-CORR-QUAL-TO-GOVERNED-CYCLE-01
# Closed-world lifecycle formalization matcher corrective + test harness mock regularization

## 1. Identity
- cycle_id: `SFIA-STUDIO-PRODUCT-PROOF-CORR-QUAL-TO-GOVERNED-CYCLE-01`
- milestone: PRODUCT PROOF — QUALIFICATION TO GOVERNED CYCLE CORRECTIVE
- type: 8 — Delivery / implémentation
- typologie: EVOL
- profile: CRITICAL
- repo: `mcleland147/sfia-workspace`
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle` (**NO PROJECT PUSH**)
- handoff branch: `sfia/review-handoff`
- previous handoff commit: `f9d139eeb255d9f717bc3492fd085d4cbd8b1c9b`
- previous handoff blob: `1eecffbb781834574114c6148fbfc1e1bf502a0d`

## 2. Timestamp
- local (Europe/Paris): `2026-09-09 16:49:28 CEST`
- UTC: `2026-09-09T14:49:28Z`

## 3. Cycle
Mono-cycle corrective continuing the qualification→governed-cycle Delivery candidate.
This pack reviews the **complete amended candidate commit**, not only the micro-delta.

## 4. GO Morris consumed
1. `GO MORRIS — CLOSED-WORLD LIFECYCLE FORMALIZATION MATCHER CORRECTIVE + LOCAL AMEND + REVIEW HANDOFF`
2. `GO MORRIS — TEST HARNESS MOCK REGULARIZATION FOR FULL-SUITE COMPLETION` (scope extension: **one test file only**)

NOT consumed:
- `GO MORRIS — GREENFIELD CORRECTIVE BOUNDED LIVE REPLAY`
- OpenAI REAL / Cursor REAL / project push / PR / merge

## 5. Baseline
- `origin/main`: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- previous candidate HEAD before this corrective: `79b2e65b72324ec500a47e1cc95726ce4fc90d7a`
- **new amended candidate SHA**: `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` (supersedes `79b2e65b72324ec500a47e1cc95726ce4fc90d7a`)

## 6. Branch / worktree
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- remote project branch: **ABSENT / NOT PUSHED**

## 7–9. Local Git Truth
### Before matcher+mock work (contract)
- branch = delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD = `79b2e65b72324ec500a47e1cc95726ce4fc90d7a`
- origin/main = `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- staged = none
- dirty expected: `.tmp-sfia-review/*` only (plus in-progress matcher edits)

### After amend
- HEAD = `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`
- origin/main = `a9f6c310a0826d0e5bd6f7264603382a86564db1` (unchanged)
- staged product files = none after amend
- remaining dirty: `M .tmp-sfia-review/chatgpt-review.md` + `?? .tmp-sfia-review/runtime-captures/` (not staged)

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/runtime-captures/
```

## 10. Sources consumed
Process: sfia-cycle-execution-template; cycle-routing-guide; 02-fifteen-cycles-synthetic-map.
Convergence: build-doctrine; roadmap.
Product Completion: 01-product-completion-cadrage.
Doctrine v3: 32/33/34/35 (runtime v3 NON ADOPTED).
Candidate: prior `79b2e65b72324ec500a47e1cc95726ce4fc90d7a` + previous handoff `f9d139eeb255d9f717bc3492fd085d4cbd8b1c9b`.
Code: qualificationSignalCoherence.ts; qualToGovernedCycle.presentation.d0.test.ts; projectPrincipalAmend.test.tsx (test-only extension).

## 11. Root cause (exact)
Prior fail-closed residual gate still used a lifecycle formalization matcher of the form:

`formalize-token + [\s\S]{0,80} + recommendation-token`

That **arbitrary match span** could swallow substantive business content (e.g. “restructure complètement le périmètre produit”) before residual computation, incorrectly enabling structuralChange dampening.

## 12. Final closed-world property
`lifecycleFormalizationEnvelope = true` ONLY if:
1. a whitelist formalize **verb** AND a whitelist recommendation **object** are both recognized;
2. ONLY whitelist bookkeeping tokens/fillers/decision-handoff clauses are stripped;
3. `stripNonSubstantive(residual) === ""`;
4. **no arbitrary window** deletes unknown text between anchors.

Otherwise: envelope=false, residual non-empty, provider signals preserved.

Forbidden approach (not used): denylist of “dangerous” structural words.

## 13–15. Final sensitive implementations (complete)

### LIFECYCLE closed-world grammar + classifier + reconciler
File: `projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts`

```typescript
/**
 * F2-local closed-world cosmetic guardrail (CORR-MW5-DLV-05).
 * Applied BEFORE QualifyCycleWithCkc. Does not change OA recommendProfile.
 *
 * Safety is positively proven: every substantive span must match a closed
 * allowlist of cosmetic/meta roles. Unknown residual preserves provider signals.
 * A denylist of dangerous words is NOT the safety authority.
 */

import type { F2QualificationSignals } from "./types";

export const CRITICAL_QUALIFICATION_SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
] as const;

export type CriticalQualificationSignalKey =
  (typeof CRITICAL_QUALIFICATION_SIGNAL_KEYS)[number];

export const COSMETIC_SAFE_SIGNALS: F2QualificationSignals = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

export type QualificationSignalCoherenceReason =
  | "not_pure_cosmetic_envelope"
  | "unknown_substantive_residual"
  | "signals_already_safe"
  | "false_critical_neutralized"
  | "safe_cosmetic_envelope_confirmed"
  | "not_lifecycle_formalization_envelope"
  | "genuine_critical_preserved"
  | "false_structural_lifecycle_formalization_neutralized"
  | "lifecycle_formalization_substantive_residual";

export type CosmeticSafeClauseRole =
  | "cycle_meta"
  | "cosmetic_wording"
  | "no_impact"
  | "governance";

export type LifecycleFormalizationClauseRole =
  | "lifecycle_formalize_verb"
  | "lifecycle_rec_object"
  | "lifecycle_bookkeeping_filler"
  | "lifecycle_rec_formalize"
  | "decision_handoff"
  | "no_product_critical_impact"
  | "governance";

/** Neutralize structuralChange only — do not invent lowRiskBounded/Light. */
export const LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS: Pick<
  F2QualificationSignals,
  | "structuralChange"
  | "securityImpact"
  | "architectureImpact"
  | "dataImpact"
  | "irreversible"
> = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
};

export type QualificationSignalCoherenceResult = {
  signals: F2QualificationSignals;
  cosmeticSafeToSuppress: boolean;
  reason: QualificationSignalCoherenceReason;
  residual: string;
  recognizedRoles: Array<CosmeticSafeClauseRole | LifecycleFormalizationClauseRole>;
};

const ARTICLE = "(?:le |la |les |l['’]|the )?";
const DIM =
  `${ARTICLE}(?:comportement|behaviou?r|donn[ée]es|data|architecture|s[ée]curit[ée]|security|autorit[ée]|authority|ex[ée]cution|execution|irr[ée]versibilit[ée]|irr[ée]versible|irreversib(?:ility|le))`;

const CYCLE_META_RE =
  /\bqualifie(?:r)?(?:\s+ce\s+chantier)?\s+en(?:\s+cycle)?\s+delivery\b/i;

const COSMETIC_WORDING_RES: readonly RegExp[] = [
  /\bune?\s+correction\s+purement\s+cosm[eé]tique\s+de\s+wording\s+dans\s+un\s+libell[eé]\s+d['’]interface\b/i,
  /\bcorrection\s+purement\s+cosm[eé]tique\s+de\s+wording\s+dans\s+un\s+libell[eé]\s+d['’]interface\b/i,
  /\bmodifie(?:r)?\s+uniquement\s+la\s+formulation\s+d['’]un\s+libell[eé]\s+ui\b/i,
  /\brenomme(?:r)?\s+uniquement\s+le\s+texte\s+affich[eé]\s+dans\s+l['’]interface\b/i,
];

const NO_IMPACT_RE = new RegExp(
  String.raw`\b(?:sans impact(?:\s+sur)?|without impact(?:\s+on)?|aucun impact sur|sans modifier)\s+${DIM}(?:\s*,\s*${DIM})*(?:\s+(?:ou|or|et|and|ni)\s+${DIM})?`,
  "i",
);

const GOVERNANCE_RES: readonly RegExp[] = [
  /\bpr[eé]pare(?:r)?(?:\s+uniquement)?\s+la\s+proposition(?:\s+si\s+le\s+cadre\s+le\s+permet)?\b/i,
  /\bne\s+d[eé]cide(?:r)?\s+pas(?:\s+[aà]\s+ma\s+place)?\b/i,
  /\bn['’]ex[eé]cute(?:r)?\s+rien\b/i,
  /\baucune\s+ex[eé]cution\b/i,
];

/**
 * Closed-world lifecycle formalization grammar.
 * NO arbitrary [\s\S]{0,N} spans — only whitelist tokens may be consumed.
 * Unknown text between anchors must remain as residual.
 */
const LIFECYCLE_FORMALIZE_VERB_RES: readonly RegExp[] = [
  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
];

const LIFECYCLE_REC_OBJECT_RES: readonly RegExp[] = [
  /\brecommandation(?:\s+de\s+prochaine\s+[eé]tape)?\b/i,
  /\bprochaine\s+[eé]tape\b/i,
];

/** Explicitly permitted bookkeeping fillers only — never open windows. */
const LIFECYCLE_BOOKKEEPING_FILLER_RES: readonly RegExp[] = [
  /\bdans\s+studio\b/i,
  /\bmaintenant\b/i,
  /\b(?:cette|la|une|le|les|l['’])\b/i,
];

const DECISION_HANDOFF_RES: readonly RegExp[] = [
  /\b(?:afin|pour)\s+que\s+je\s+(?:puisse\s+)?(?:la\s+)?d[eé]cider\b/i,
  /\bsans\s+(?:cr[eé]er|d[eé]marrer|activer)\s+(?:de\s+|un\s+)?cycle\b/i,
  /\brecommandation\s*(?:n['’]est\s+pas|≠|!=)\s*(?:une\s+)?d[eé]cision\b/i,
];

const NO_PRODUCT_CRITICAL_IMPACT_RES: readonly RegExp[] = [
  /\bsans\s+(?:impact\s+)?(?:s[eé]curit[eé]|security|architecture|donn[eé]es|data|irr[eé]versib)/i,
  /\bwithout\s+(?:security|architecture|data|irreversib)/i,
];

const CONNECTOR_OR_PUNCT_RE =
  /[.,;:!?()[\]«»""''’]+|\b(?:et|and|puis|then|ou|or|ni)\b/gi;

function normalizeRequest(content: string): string {
  return content
    .normalize("NFC")
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function coversRequiredNoImpactDimensions(span: string): boolean {
  const t = span.toLowerCase();
  const behavior = /comportement|behaviou?r/.test(t);
  const data = /donn[ée]es|\bdata\b/.test(t);
  const architecture = /architecture/.test(t);
  const security = /s[ée]curit[ée]|security/.test(t);
  const authorityOrExecution =
    /autorit[ée]|authority|ex[ée]cution|execution/.test(t);
  const irreversibility = /irr[ée]versib/.test(t);
  return (
    behavior &&
    data &&
    architecture &&
    security &&
    authorityOrExecution &&
    irreversibility
  );
}

type SpanSpec = { role: CosmeticSafeClauseRole; re: RegExp };

function spanSpecs(): SpanSpec[] {
  return [
    { role: "cycle_meta", re: CYCLE_META_RE },
    ...COSMETIC_WORDING_RES.map((re) => ({
      role: "cosmetic_wording" as const,
      re,
    })),
    { role: "no_impact", re: NO_IMPACT_RE },
    ...GOVERNANCE_RES.map((re) => ({ role: "governance" as const, re })),
  ];
}

function findLeftmostSafeSpan(
  text: string,
): { start: number; end: number; role: CosmeticSafeClauseRole } | null {
  let best: { start: number; end: number; role: CosmeticSafeClauseRole } | null =
    null;
  for (const { role, re } of spanSpecs()) {
    const copy = new RegExp(re.source, re.flags.replace("g", ""));
    const m = copy.exec(text);
    if (!m || m.index == null) continue;
    if (role === "no_impact" && !coversRequiredNoImpactDimensions(m[0])) {
      continue;
    }
    const start = m.index;
    const end = start + m[0].length;
    if (
      !best ||
      start < best.start ||
      (start === best.start && end - start > best.end - best.start)
    ) {
      best = { start, end, role };
    }
  }
  return best;
}

function stripNonSubstantive(text: string): string {
  let next = text;
  for (let i = 0; i < 8; i += 1) {
    const stripped = next.replace(CONNECTOR_OR_PUNCT_RE, " ").replace(/\s+/g, " ").trim();
    if (stripped === next) return stripped;
    next = stripped;
  }
  return next;
}

/**
 * Closed-world classification of the user request only (no signal mutation).
 */
export function classifyClosedWorldCosmeticRequest(userContent: string): {
  cosmeticSafeToSuppress: boolean;
  reason: QualificationSignalCoherenceReason;
  residual: string;
  recognizedRoles: CosmeticSafeClauseRole[];
} {
  let cursor = normalizeRequest(userContent);
  const recognizedRoles: CosmeticSafeClauseRole[] = [];
  for (let i = 0; i < 32; i += 1) {
    const hit = findLeftmostSafeSpan(cursor);
    if (!hit) break;
    recognizedRoles.push(hit.role);
    cursor = `${cursor.slice(0, hit.start)} ${cursor.slice(hit.end)}`;
    cursor = cursor.replace(/\s+/g, " ").trim();
  }
  const residual = stripNonSubstantive(cursor);
  const hasWording = recognizedRoles.includes("cosmetic_wording");
  const hasNoImpact = recognizedRoles.includes("no_impact");
  if (!hasWording || !hasNoImpact) {
    return {
      cosmeticSafeToSuppress: false,
      reason: "not_pure_cosmetic_envelope",
      residual,
      recognizedRoles,
    };
  }
  if (residual.length > 0) {
    return {
      cosmeticSafeToSuppress: false,
      reason: "unknown_substantive_residual",
      residual,
      recognizedRoles,
    };
  }
  return {
    cosmeticSafeToSuppress: true,
    reason: "safe_cosmetic_envelope_confirmed",
    residual: "",
    recognizedRoles,
  };
}

export function hasCriticalQualificationSignal(
  signals: F2QualificationSignals,
): boolean {
  return CRITICAL_QUALIFICATION_SIGNAL_KEYS.some((key) => signals[key] === true);
}

function signalsAlreadySafe(signals: F2QualificationSignals): boolean {
  return (
    !hasCriticalQualificationSignal(signals) && signals.lowRiskBounded === true
  );
}

/**
 * Neutralize false Critical provider signals only when the request is a
 * positively proven closed-world pure-cosmetic envelope. Otherwise return
 * the exact original provider signals — except a bounded lifecycle-formalization
 * dampener that clears structuralChange alone when a COMPLETE closed-world
 * formalization envelope is proven (recognized clauses only; empty residual).
 */
export function reconcileQualificationSignals(input: {
  userContent: string;
  signals: F2QualificationSignals;
}): QualificationSignalCoherenceResult {
  const classification = classifyClosedWorldCosmeticRequest(input.userContent);
  if (classification.cosmeticSafeToSuppress) {
    if (signalsAlreadySafe(input.signals)) {
      return {
        signals: input.signals,
        cosmeticSafeToSuppress: true,
        reason: "signals_already_safe",
        residual: classification.residual,
        recognizedRoles: classification.recognizedRoles,
      };
    }
    return {
      signals: { ...COSMETIC_SAFE_SIGNALS },
      cosmeticSafeToSuppress: true,
      reason: "false_critical_neutralized",
      residual: classification.residual,
      recognizedRoles: classification.recognizedRoles,
    };
  }

  const lifecycle = classifyLifecycleFormalizationRequest(input.userContent);
  const hasFormalizeClause =
    lifecycle.recognizedRoles.includes("lifecycle_formalize_verb") &&
    lifecycle.recognizedRoles.includes("lifecycle_rec_object");
  const s = input.signals;

  // Formalization clause present but residual remains → fail-closed: never dampen.
  if (hasFormalizeClause && lifecycle.residual.length > 0) {
    if (
      s.securityImpact === true ||
      s.architectureImpact === true ||
      s.dataImpact === true ||
      s.irreversible === true
    ) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "genuine_critical_preserved",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    return {
      signals: s,
      cosmeticSafeToSuppress: false,
      reason: "lifecycle_formalization_substantive_residual",
      residual: lifecycle.residual,
      recognizedRoles: lifecycle.recognizedRoles,
    };
  }

  // Dampen only on positively proven closed-world envelope (empty residual).
  if (lifecycle.lifecycleFormalizationEnvelope) {
    if (
      s.securityImpact === true ||
      s.architectureImpact === true ||
      s.dataImpact === true ||
      s.irreversible === true
    ) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "genuine_critical_preserved",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    if (s.structuralChange !== true) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "signals_already_safe",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    return {
      signals: {
        ...s,
        ...LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS,
        // Preserve caller lowRiskBounded — never invent Light eligibility.
        lowRiskBounded: s.lowRiskBounded,
      },
      cosmeticSafeToSuppress: false,
      reason: "false_structural_lifecycle_formalization_neutralized",
      residual: lifecycle.residual,
      recognizedRoles: lifecycle.recognizedRoles,
    };
  }

  return {
    signals: input.signals,
    cosmeticSafeToSuppress: false,
    reason: classification.reason,
    residual: classification.residual,
    recognizedRoles: classification.recognizedRoles,
  };
}

/**
 * Bounded closed-world classifier: advisory lifecycle recommendation formalization
 * for Pilote decision. Envelope is dampenable ONLY when:
 * - a formalize verb AND a recommendation object are each recognized as whitelist tokens, AND
 * - no substantive residual remains after stripping whitelist spans only.
 * No arbitrary [\s\S]{0,N} windows — unknown text between anchors stays residual.
 */
export function classifyLifecycleFormalizationRequest(userContent: string): {
  lifecycleFormalizationEnvelope: boolean;
  residual: string;
  recognizedRoles: LifecycleFormalizationClauseRole[];
} {
  let cursor = normalizeRequest(userContent);
  const recognizedRoles: LifecycleFormalizationClauseRole[] = [];
  const specs: Array<{
    role: LifecycleFormalizationClauseRole;
    res: readonly RegExp[];
  }> = [
    // Prefer longer object phrases via equal-start length preference in matcher.
    { role: "lifecycle_rec_object", res: LIFECYCLE_REC_OBJECT_RES },
    { role: "lifecycle_formalize_verb", res: LIFECYCLE_FORMALIZE_VERB_RES },
    { role: "lifecycle_bookkeeping_filler", res: LIFECYCLE_BOOKKEEPING_FILLER_RES },
    { role: "decision_handoff", res: DECISION_HANDOFF_RES },
    { role: "no_product_critical_impact", res: NO_PRODUCT_CRITICAL_IMPACT_RES },
    { role: "governance", res: GOVERNANCE_RES },
  ];
  for (let i = 0; i < 32; i += 1) {
    let best: {
      start: number;
      end: number;
      role: LifecycleFormalizationClauseRole;
    } | null = null;
    for (const { role, res } of specs) {
      for (const re of res) {
        const copy = new RegExp(re.source, re.flags.replace("g", ""));
        const m = copy.exec(cursor);
        if (!m || m.index == null) continue;
        const start = m.index;
        const end = start + m[0].length;
        if (
          !best ||
          start < best.start ||
          (start === best.start && end - start > best.end - best.start)
        ) {
          best = { start, end, role };
        }
      }
    }
    if (!best) break;
    recognizedRoles.push(best.role);
    cursor = `${cursor.slice(0, best.start)} ${cursor.slice(best.end)}`;
    cursor = cursor.replace(/\s+/g, " ").trim();
  }
  const residual = stripNonSubstantive(cursor);
  const hasVerb = recognizedRoles.includes("lifecycle_formalize_verb");
  const hasObject = recognizedRoles.includes("lifecycle_rec_object");
  const hasFormalize = hasVerb && hasObject;
  if (hasFormalize) {
    recognizedRoles.push("lifecycle_rec_formalize");
  }
  return {
    lifecycleFormalizationEnvelope: hasFormalize && residual.length === 0,
    residual,
    recognizedRoles,
  };
}

```

### BAR-FC tests (complete file)
File: `projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * QUAL-TO-GOVERNED-CYCLE — deterministic presentation / signal / prompt contracts.
 * ZERO NEW REAL.
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import {
  classifyLifecycleFormalizationRequest,
  reconcileQualificationSignals,
} from "@/features/project-assistant/f2/qualificationSignalCoherence";
import {
  formatNoraAssistantDisplayText,
  profileRationalePiloteLabel,
} from "@/features/project-assistant/presentationLabels";
import {
  formatMw5MachineText,
  formatMw5PiloteText,
  type Mw5PolicyResult,
} from "@/lib/nora-cognitive-runtime/criticalChallengeClarification";

const baseProject = {
  projectId: "prj:test",
  name: "Demo",
  shortReference: null as string | null,
  objective: "Suivre des tâches personnelles",
  contextSummary: "Intention minimale",
  criticality: "standard",
  constraints: [] as string[],
  lpsId: "lps:1",
  lpsVersion: 1,
  lpsCreatedAt: "2026-01-01T00:00:00.000Z",
  doctrineId: "doc:1",
  doctrineVersion: "1",
  doctrineStatus: "active",
  doctrineDigest: "sha256:abc",
  runtimeMode: "product",
  persistence: "sqlite",
  readiness: "ready",
};

function mw5ChallengeResult(): Mw5PolicyResult {
  return {
    disposition: "CHALLENGE",
    challenges: [
      "Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?",
    ],
    structuralChallengeCount: 1,
    questionnaireSuppressed: false,
    clarificationAllowed: false,
    recommendationAllowed: false,
    challengeGateApplicable: true,
    challengeSatisfied: false,
    challengeEvidenceBeforeRecommendation: false,
    bypassAttempted: false,
    bypassBlocked: false,
    synthesizedHumanDecision: false,
    synthesizedGo: false,
    synthesizedConfirmation: false,
    reasonCodes: ["critical_profile_challenge"],
    disclosure: "High-Assurance challenge armed (internal).",
  };
}

describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
  it("F1 prompt authorizes structured LR without Cycle/HD authority", () => {
    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/lifecycleRecommendation/);
    expect(prompt).toMatch(/NEXT_CYCLE/);
    expect(prompt).toMatch(/Pas de règle « après N messages »/);
    expect(prompt).toMatch(/jamais forcé cyc:framing/);
    expect(prompt).not.toMatch(
      /aucune autorité de décision, d'exécution Cursor, d'écriture Git\/GitHub, ni de qualification de cycle SFIA/,
    );
    expect(prompt).toMatch(/ne peux pas l'enregistrer dans Studio/);
  });

  it("intent analysis treats lifecycle formalization as informative effect", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/Formalise maintenant dans Studio/);
    expect(ANALYSIS_SYSTEM).toMatch(
      /PAS le simple fait qu'une[\s\S]*mutation de bookkeeping lifecycle/,
    );
    expect(ANALYSIS_SYSTEM).toMatch(
      /Ne PAS classer actionable uniquement parce que le Pilote demande d'enregistrer/,
    );
  });

  it("BAR-05 — false structural on lifecycle formalization is dampened", () => {
    const content =
      "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
    expect(
      classifyLifecycleFormalizationRequest(content).lifecycleFormalizationEnvelope,
    ).toBe(true);
    const r = reconcileQualificationSignals({
      userContent: content,
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
    });
    expect(r.reason).toBe(
      "false_structural_lifecycle_formalization_neutralized",
    );
    expect(r.signals.structuralChange).toBe(false);
    expect(r.signals.securityImpact).toBe(false);
    expect(r.signals.lowRiskBounded).toBe(false);
  });

  it("BAR-06 — genuine Critical signals are preserved on formalization phrasing", () => {
    const content =
      "Formalise la recommandation de prochaine étape — migration sécurité irréversible des données.";
    const r = reconcileQualificationSignals({
      userContent: content,
      signals: {
        structuralChange: true,
        securityImpact: true,
        architectureImpact: false,
        dataImpact: true,
        irreversible: true,
        lowRiskBounded: false,
      },
    });
    expect(r.reason).toBe("genuine_critical_preserved");
    expect(r.signals.securityImpact).toBe(true);
    expect(r.signals.irreversible).toBe(true);
    expect(r.signals.structuralChange).toBe(true);
  });

  describe("BAR-FC — lifecycle formalization dampener fail-closed", () => {
    const structuralOnly = {
      structuralChange: true,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: false,
    } as const;

    it("BAR-FC-01 — pure closed-world formalization dampens false structuralChange", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
      expect(cl.residual).toBe("");
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
      expect(r.signals.securityImpact).toBe(false);
      expect(r.signals.architectureImpact).toBe(false);
      expect(r.signals.dataImpact).toBe(false);
      expect(r.signals.irreversible).toBe(false);
      expect(r.signals.lowRiskBounded).toBe(false);
    });

    it("BAR-FC-02 — structuralChange-only + substantive residual is preserved", () => {
      const content =
        "Formalise cette recommandation pour que je puisse la décider, et restructure complètement le périmètre produit et le workflow de gouvernance.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.signals).toEqual(structuralOnly);
      expect(r.signals.structuralChange).toBe(true);
    });

    it("BAR-FC-03 — unknown substantive residual never dampens provider signals", () => {
      const content =
        "Formalise la recommandation de prochaine étape — Zorblax multi-region webhook pipeline.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.signals.structuralChange).toBe(true);
      expect(r.residual.length).toBeGreaterThan(0);
    });

    it.each([
      ["BAR-FC-04 security", "securityImpact" as const],
      ["BAR-FC-05 architecture", "architectureImpact" as const],
      ["BAR-FC-06 data", "dataImpact" as const],
      ["BAR-FC-07 irreversible", "irreversible" as const],
    ])(
      "%s preserved with formalization phrasing",
      (_name, key) => {
        const content =
          "Formalise la recommandation pour que je puisse la décider, et ajoute aussi ce chantier critique.";
        const signals = {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
          [key]: true,
        };
        const r = reconcileQualificationSignals({
          userContent: content,
          signals,
        });
        expect(r.reason).toBe("genuine_critical_preserved");
        expect(r.signals[key]).toBe(true);
        expect(r.signals).toEqual(signals);
      },
    );

    it("BAR-FC-08 — lowRiskBounded is never invented by dampener", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const falseCase = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly, lowRiskBounded: false },
      });
      expect(falseCase.signals.lowRiskBounded).toBe(false);
      const trueCase = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly, lowRiskBounded: true },
      });
      expect(trueCase.signals.lowRiskBounded).toBe(true);
      expect(trueCase.signals.structuralChange).toBe(false);
    });

    it("BAR-FC-09 — non-lifecycle request keeps prior (non-dampen) behavior", () => {
      const content =
        "Explique les tensions entre délai et auditabilité pour ce projet.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.signals).toEqual(structuralOnly);
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
    });

    it("BAR-FC-10 — original false-Critical formalization regression remains closed", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
    });

    it("BAR-FC-11 — substantive content inside former match span stays residual", () => {
      const content =
        "Formalise et restructure complètement le périmètre produit dans cette recommandation";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      // Prove unknown non-whitelist text was not swallowed — no semantic understanding required.
      expect(cl.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(true);
      expect(r.signals).toEqual(structuralOnly);
      expect(r.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
    });

    it("BAR-FC-12 — pure permitted connective remains closed-world", () => {
      const content =
        "Formalise dans Studio cette recommandation de prochaine étape afin que je puisse la décider.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
      expect(cl.residual).toBe("");
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
      expect(r.signals.lowRiskBounded).toBe(false);
    });

    it("BAR-FC-13 — unknown vocabulary between verb and object stays residual", () => {
      const content =
        "Formalise Zorblax multi-region webhook pipeline dans cette recommandation";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      expect(cl.residual).toMatch(/Zorblax|webhook|pipeline/i);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.signals.structuralChange).toBe(true);
      expect(r.signals).toEqual(structuralOnly);
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
    });
  });

  it("BAR-07 — Pilote MW5 text hides machine markers; machine text retains them", () => {
    const d = mw5ChallengeResult();
    const pilote = formatMw5PiloteText(d);
    const machine = formatMw5MachineText(d);
    expect(pilote).not.toMatch(/\[MW5/);
    expect(pilote).not.toMatch(/\bMW5\b/);
    expect(pilote).not.toMatch(/\bTruth C\b/i);
    expect(pilote).not.toMatch(/\bcount=\d+/);
    expect(pilote).toMatch(/périmètre|impact/i);
    expect(machine).toMatch(/\[MW5 CHALLENGE/);
    expect(machine).toMatch(/count=/);
  });

  it("BAR-11 — conversation display unescapes presentation artifacts", () => {
    const raw =
      "Ligne 1\\nLigne 2\\n\\*\\*Important\\*\\* [MW5 CHALLENGE] count=3 Truth C";
    const shown = formatNoraAssistantDisplayText(raw);
    expect(shown).toContain("Ligne 1\nLigne 2");
    expect(shown).not.toContain("\\n");
    expect(shown).not.toContain("\\*\\*");
    expect(shown).not.toMatch(/\[MW5/);
    expect(shown).not.toMatch(/\bcount=\d+/);
    expect(shown).toContain("Important");
  });

  it("BAR-12 — Pourquoi maps critical_signal_present to business French", () => {
    const label = profileRationalePiloteLabel(
      "critical_signal_present Guidance cycle applicable.",
    );
    expect(label).not.toMatch(/critical_signal_present/);
    expect(label).toMatch(/impact structurant|sécurité|architecture/i);
  });

  it("BAR-11 — legitimate literal asterisks in code-like text still readable", () => {
    const shown = formatNoraAssistantDisplayText("Glob pattern: file_*.ts");
    expect(shown).toContain("file_*.ts");
  });
});

```

### projectPrincipalAmend mock regularization (complete file)
File: `projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx`

```tsx
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

const {
  getProjectRuntimeActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantRehydrateEvidenceOutcomeAction:
    projectAssistantRehydrateEvidenceOutcomeActionMock,
  projectAssistantDecideAction: vi.fn(),
  projectAssistantSendAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  // Nominal empty Pilot lifecycle projection — no cycle / Recommendation / decision.
  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
    ok: true,
    status: "ok",
    selectedCycleInstanceId: null,
    selectedStatus: null,
    activeCycleInstanceId: null,
    selectionAmbiguous: false,
    cta: {
      canStart: false,
      canPause: false,
      canResume: false,
      canFinalize: false,
      canCancel: false,
    },
  })),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: "AMEND",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:amend",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:amend-1",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

const DURABLE_OUTCOME: ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true,
  status: "ok",
  mode: "fixture",
  presentation: "unconfirmed",
  text: "durable",
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: null,
    objective: "Objectif",
    contextSummary: "Contexte",
    criticality: "standard",
    constraints: [],
    lpsId: "lps:1",
    lpsVersion: 2,
    lpsCreatedAt: "2026-08-16T10:00:00.000Z",
    doctrineId: "doc",
    doctrineVersion: "1",
    doctrineDigest: "digest",
    doctrineStatus: "active",
    runtimeMode: "local",
    persistence: "product_sqlite",
    readiness: "NOT_READY",
  },
  ephemeralNotice: "process-local",
  evidence: [
    {
      evidenceId: "ev:1",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:1",
      verified: false,
      mode: "FIXTURE",
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:1",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:1"],
      mode: "FIXTURE",
    },
  ],
  recommendation: {
    kind: "recommendation",
    status: "not_recommended",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    mode: "FIXTURE",
  },
  lpsVersion: 2,
  evidenceIds: ["ev:1"],
  reviewBundleIds: ["rb:1"],
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
  projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
});

describe("ProjectPrincipalClient AMEND readback / recovery", () => {
  it("hides Recovery banner on nominal project without durable advance", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(BASE_PROJECT);
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "rehydrate_error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
    expect(screen.getByTestId("project-durability-hint")).toBeVisible();
    expect(screen.getByTestId("project-history-panel")).toBeVisible();
    expect(
      within(screen.getByTestId("project-history-panel")).queryByText(
        /Evidence|ReviewBundle/,
      ),
    ).toBeNull();
  });

  it("shows Recovery and History durable anchors when outcome rehydrates", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ...BASE_PROJECT,
      livingState: {
        ...BASE_PROJECT.livingState,
        version: 2,
      },
    });
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_OUTCOME,
    );

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-recovery-banner")).toBeVisible();
    });
    expect(screen.getByTestId("recovery-resume-durable")).toBeVisible();
    expect(screen.getByTestId("recovery-requalify")).toBeVisible();

    const history = await screen.findByTestId("project-history-panel");
    await waitFor(() => {
      expect(
        within(history).getByText("RECOMMANDATION — PAS UNE DÉCISION HUMAINE"),
      ).toBeVisible();
    });
    expect(within(history).getByText("Evidence")).toBeVisible();
    expect(within(history).getByText("ReviewBundle")).toBeVisible();
    expect(within(history).getByText("≠ Décision humaine")).toBeVisible();
  });
});

```

## 16. BAR-FC-01…13
- BAR-FC-01 pure formalization → dampen structuralChange
- BAR-FC-02 residual after → preserve
- BAR-FC-03 unknown residual → preserve
- BAR-FC-04…07 genuine critical flags → preserve
- BAR-FC-08 lowRiskBounded never invented
- BAR-FC-09 non-lifecycle unchanged
- BAR-FC-10 original false-Critical formalization still closed
- **BAR-FC-11** substantive inside former span → envelope false, residual keeps non-whitelist tokens, structuralChange true
- **BAR-FC-12** pure permitted connective → envelope true, dampen, lowRiskBounded preserved
- **BAR-FC-13** unknown vocabulary (Zorblax…) between verb/object → residual, preserve
- BAR-FC-14 NOT added (ordering “formalise-la” leaves hyphen residual; grammar not widened)

## 17. Exploitable patches — delta vs previous candidate `79b2e65b72324ec500a47e1cc95726ce4fc90d7a`

### coherence delta
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
index a2a58cc0..bd03d739 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
@@ -47,6 +47,9 @@ export type CosmeticSafeClauseRole =
   | "governance";

 export type LifecycleFormalizationClauseRole =
+  | "lifecycle_formalize_verb"
+  | "lifecycle_rec_object"
+  | "lifecycle_bookkeeping_filler"
   | "lifecycle_rec_formalize"
   | "decision_handoff"
   | "no_product_critical_impact"
@@ -102,10 +105,25 @@ const GOVERNANCE_RES: readonly RegExp[] = [
   /\baucune\s+ex[eé]cution\b/i,
 ];

-/** Effect = record/formalize advisory lifecycle recommendation for Pilote decision. */
-const LIFECYCLE_REC_FORMALIZE_RES: readonly RegExp[] = [
-  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b[\s\S]{0,80}\b(?:recommandation|prochaine\s+[eé]tape)\b/i,
-  /\b(?:recommandation|prochaine\s+[eé]tape)\b[\s\S]{0,80}\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
+/**
+ * Closed-world lifecycle formalization grammar.
+ * NO arbitrary [\s\S]{0,N} spans — only whitelist tokens may be consumed.
+ * Unknown text between anchors must remain as residual.
+ */
+const LIFECYCLE_FORMALIZE_VERB_RES: readonly RegExp[] = [
+  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
+];
+
+const LIFECYCLE_REC_OBJECT_RES: readonly RegExp[] = [
+  /\brecommandation(?:\s+de\s+prochaine\s+[eé]tape)?\b/i,
+  /\bprochaine\s+[eé]tape\b/i,
+];
+
+/** Explicitly permitted bookkeeping fillers only — never open windows. */
+const LIFECYCLE_BOOKKEEPING_FILLER_RES: readonly RegExp[] = [
+  /\bdans\s+studio\b/i,
+  /\bmaintenant\b/i,
+  /\b(?:cette|la|une|le|les|l['’])\b/i,
 ];

 const DECISION_HANDOFF_RES: readonly RegExp[] = [
@@ -287,9 +305,9 @@ export function reconcileQualificationSignals(input: {
   }

   const lifecycle = classifyLifecycleFormalizationRequest(input.userContent);
-  const hasFormalizeClause = lifecycle.recognizedRoles.includes(
-    "lifecycle_rec_formalize",
-  );
+  const hasFormalizeClause =
+    lifecycle.recognizedRoles.includes("lifecycle_formalize_verb") &&
+    lifecycle.recognizedRoles.includes("lifecycle_rec_object");
   const s = input.signals;

   // Formalization clause present but residual remains → fail-closed: never dampen.
@@ -367,9 +385,10 @@ export function reconcileQualificationSignals(input: {

 /**
  * Bounded closed-world classifier: advisory lifecycle recommendation formalization
- * for Pilote decision. Envelope is dampenable ONLY when a formalize clause is
- * recognized AND no substantive residual remains after stripping recognized spans.
- * Presence of "formalise" alone is never sufficient.
+ * for Pilote decision. Envelope is dampenable ONLY when:
+ * - a formalize verb AND a recommendation object are each recognized as whitelist tokens, AND
+ * - no substantive residual remains after stripping whitelist spans only.
+ * No arbitrary [\s\S]{0,N} windows — unknown text between anchors stays residual.
  */
 export function classifyLifecycleFormalizationRequest(userContent: string): {
   lifecycleFormalizationEnvelope: boolean;
@@ -382,7 +401,10 @@ export function classifyLifecycleFormalizationRequest(userContent: string): {
     role: LifecycleFormalizationClauseRole;
     res: readonly RegExp[];
   }> = [
-    { role: "lifecycle_rec_formalize", res: LIFECYCLE_REC_FORMALIZE_RES },
+    // Prefer longer object phrases via equal-start length preference in matcher.
+    { role: "lifecycle_rec_object", res: LIFECYCLE_REC_OBJECT_RES },
+    { role: "lifecycle_formalize_verb", res: LIFECYCLE_FORMALIZE_VERB_RES },
+    { role: "lifecycle_bookkeeping_filler", res: LIFECYCLE_BOOKKEEPING_FILLER_RES },
     { role: "decision_handoff", res: DECISION_HANDOFF_RES },
     { role: "no_product_critical_impact", res: NO_PRODUCT_CRITICAL_IMPACT_RES },
     { role: "governance", res: GOVERNANCE_RES },
@@ -415,7 +437,12 @@ export function classifyLifecycleFormalizationRequest(userContent: string): {
     cursor = cursor.replace(/\s+/g, " ").trim();
   }
   const residual = stripNonSubstantive(cursor);
-  const hasFormalize = recognizedRoles.includes("lifecycle_rec_formalize");
+  const hasVerb = recognizedRoles.includes("lifecycle_formalize_verb");
+  const hasObject = recognizedRoles.includes("lifecycle_rec_object");
+  const hasFormalize = hasVerb && hasObject;
+  if (hasFormalize) {
+    recognizedRoles.push("lifecycle_rec_formalize");
+  }
   return {
     lifecycleFormalizationEnvelope: hasFormalize && residual.length === 0,
     residual,
```

### BAR-FC test delta
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
index 1d73735f..a965bfe3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
@@ -259,6 +259,62 @@ describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
       );
       expect(r.signals.structuralChange).toBe(false);
     });
+
+    it("BAR-FC-11 — substantive content inside former match span stays residual", () => {
+      const content =
+        "Formalise et restructure complètement le périmètre produit dans cette recommandation";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
+      expect(cl.residual.length).toBeGreaterThan(0);
+      // Prove unknown non-whitelist text was not swallowed — no semantic understanding required.
+      expect(cl.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
+      expect(r.reason).not.toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(true);
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
+    });
+
+    it("BAR-FC-12 — pure permitted connective remains closed-world", () => {
+      const content =
+        "Formalise dans Studio cette recommandation de prochaine étape afin que je puisse la décider.";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
+      expect(cl.residual).toBe("");
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(false);
+      expect(r.signals.lowRiskBounded).toBe(false);
+    });
+
+    it("BAR-FC-13 — unknown vocabulary between verb and object stays residual", () => {
+      const content =
+        "Formalise Zorblax multi-region webhook pipeline dans cette recommandation";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
+      expect(cl.residual.length).toBeGreaterThan(0);
+      expect(cl.residual).toMatch(/Zorblax|webhook|pipeline/i);
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.signals.structuralChange).toBe(true);
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.reason).not.toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+    });
   });

   it("BAR-07 — Pilote MW5 text hides machine markers; machine text retains them", () => {
```

### projectPrincipalAmend mock patch (vs main via candidate)
```diff
commit f35ae52a2fa5004f6b79e5f4db50d1494df8cee0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Sep 9 15:46:35 2026 +0200

    fix(sfia-studio): govern qualification-to-cycle transition

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
index bf6294e4..aac890b6 100644
--- a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
+++ b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
@@ -23,6 +23,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantPrepareF3FixtureAction: vi.fn(),
   projectAssistantPrepareM3Action: vi.fn(),
   projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
+  // Nominal empty Pilot lifecycle projection — no cycle / Recommendation / decision.
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
 }));

 const BASE_PROJECT = {
```

## Full-suite failure cause + harness fix
- Failure file: `projectPrincipalAmend.test.tsx`
- Cause: `vi.mock("@/features/project-assistant/actions")` omitted `projectAssistantPilotLifecycleProjection` while `ProjectAssistantPanel` now calls it → harness exception before History assertions.
- Fix: add deterministic nominal mock matching `ProjectAssistantPanel.test.tsx` / MW3 panel tests:
  - ok:true, status:ok, all cycle ids null, all CTA false
  - no Recommendation / HumanDecision / START fabricated
- **No Product code changed for this fix.** Assertions unchanged.

## 18–19. Validation results (exact current numbers)

### Focused (coherence + presentation)
```
> sfia-studio@0.1.0 test
> vitest run __tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts __tests__/project-assistant/f2.qualificationSignalCoherence.d0.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310/projects/sfia-studio/app

 ✓ __tests__/project-assistant/f2.qualificationSignalCoherence.d0.test.ts (17 tests) 7ms
 ✓ __tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts (21 tests) 10ms

 Test Files  2 passed (2)
      Tests  38 passed (38)
   Start at  16:47:05
   Duration  623ms (transform 269ms, setup 124ms, collect 646ms, tests 17ms, environment 0ms, prepare 61ms)
```
Exact: Test Files **2 passed**; Tests **38 passed**.

### projectPrincipalAmend
```
Test Files  1 passed (1)
Tests  2 passed (2)
```

### Full Vitest
```
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 4081ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  610ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  631ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  611ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  721ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  715ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 9ms

 Test Files  318 passed | 17 skipped (335)
      Tests  3307 passed | 135 skipped (3442)
   Start at  16:47:33
   Duration  28.19s (transform 6.74s, setup 13.21s, collect 102.42s, tests 73.18s, environment 10.79s, prepare 12.67s)
```
Exact: Test Files **318 passed | 17 skipped (335)**; Tests **3307 passed | 135 skipped (3442)**; **0 failed**.

### typecheck / lint / build
- `npm run typecheck` → PASS (`tsc --noEmit`)
- `npm run lint` → PASS (No ESLint warnings or errors)
- `npm run build` → PASS (Next.js 15.5.20 compiled successfully)

## 20. Architecture preservation
- `invariants.ts` / recommendProfile: **UNTOUCHED**
- NO second model / prose parser / migration / package change / UI change in this micro-corrective
- Product files in overall candidate remain the original 14 + this **test-only** 15th file (`projectPrincipalAmend.test.tsx`)
- NEXT_CYCLE Recommendation ≠ Cycle creation; Recommendation ≠ HumanDecision
- Runtime v3 NON ADOPTED
- R2 still OPEN

## 21. ZERO NEW REAL
DETERMINISTIC ONLY. No OpenAI live, Nora live, /studio greenfield live replay, Cursor REAL, Task-App execution in this cycle.

## 22. Diff exact — `git show --stat --name-status` of amended candidate

```
commit f35ae52a2fa5004f6b79e5f4db50d1494df8cee0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Sep 9 15:46:35 2026 +0200

    fix(sfia-studio): govern qualification-to-cycle transition

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
M	projects/sfia-studio/app/e2e/studio-option-a.spec.ts
A	projects/sfia-studio/app/e2e/studio-qual-to-governed-visual.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
```

## 23. Complete candidate patch vs `origin/main` (`a9f6c310a0826d0e5bd6f7264603382a86564db1..f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
index 8071e952..7384e7df 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
@@ -85,7 +85,12 @@ describe("MW5 F2 product path D0", () => {
     expect(result.mw5?.structuralChallengeCount).toBeLessThanOrEqual(
       MW5_MAX_STRUCTURAL_CHALLENGES,
     );
-    expect(result.text).toMatch(/\[MW5 CHALLENGE/);
+    expect(result.text).not.toMatch(/\[MW5 CHALLENGE/);
+    expect(result.text).not.toMatch(/\bMW5\b/);
+    expect(result.text).not.toMatch(/\bTruth C\b/i);
+    expect(result.text).not.toMatch(/\bcount=\d+/);
+    expect(result.text).toMatch(/périmètre|impact|structurant/i);
+    expect(result.mw5?.disposition).toBe("CHALLENGE");
     expect(result.f2?.labels.recommendation).toBeNull();
   });

@@ -256,7 +261,9 @@ describe("MW5 F2 product path D0", () => {
     expect(episodeB.mw5?.structuralChallengeCount).toBeLessThanOrEqual(
       MW5_MAX_STRUCTURAL_CHALLENGES,
     );
-    expect(episodeB.text).toMatch(/\[MW5 CHALLENGE/);
+    expect(episodeB.text).not.toMatch(/\[MW5 CHALLENGE/);
+    expect(episodeB.text).not.toMatch(/\bMW5\b/);
+    expect(episodeB.text).toMatch(/périmètre|impact|structurant/i);
     // Must not inherit A's exhausted quota as immediate escalate.
     expect(episodeB.mw5?.reasonCodes ?? []).not.toContain(
       "challenge_cap_reached_escalate",
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
new file mode 100644
index 00000000..a965bfe3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
@@ -0,0 +1,357 @@
+/** @vitest-environment node */
+/**
+ * QUAL-TO-GOVERNED-CYCLE — deterministic presentation / signal / prompt contracts.
+ * ZERO NEW REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
+import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  classifyLifecycleFormalizationRequest,
+  reconcileQualificationSignals,
+} from "@/features/project-assistant/f2/qualificationSignalCoherence";
+import {
+  formatNoraAssistantDisplayText,
+  profileRationalePiloteLabel,
+} from "@/features/project-assistant/presentationLabels";
+import {
+  formatMw5MachineText,
+  formatMw5PiloteText,
+  type Mw5PolicyResult,
+} from "@/lib/nora-cognitive-runtime/criticalChallengeClarification";
+
+const baseProject = {
+  projectId: "prj:test",
+  name: "Demo",
+  shortReference: null as string | null,
+  objective: "Suivre des tâches personnelles",
+  contextSummary: "Intention minimale",
+  criticality: "standard",
+  constraints: [] as string[],
+  lpsId: "lps:1",
+  lpsVersion: 1,
+  lpsCreatedAt: "2026-01-01T00:00:00.000Z",
+  doctrineId: "doc:1",
+  doctrineVersion: "1",
+  doctrineStatus: "active",
+  doctrineDigest: "sha256:abc",
+  runtimeMode: "product",
+  persistence: "sqlite",
+  readiness: "ready",
+};
+
+function mw5ChallengeResult(): Mw5PolicyResult {
+  return {
+    disposition: "CHALLENGE",
+    challenges: [
+      "Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?",
+    ],
+    structuralChallengeCount: 1,
+    questionnaireSuppressed: false,
+    clarificationAllowed: false,
+    recommendationAllowed: false,
+    challengeGateApplicable: true,
+    challengeSatisfied: false,
+    challengeEvidenceBeforeRecommendation: false,
+    bypassAttempted: false,
+    bypassBlocked: false,
+    synthesizedHumanDecision: false,
+    synthesizedGo: false,
+    synthesizedConfirmation: false,
+    reasonCodes: ["critical_profile_challenge"],
+    disclosure: "High-Assurance challenge armed (internal).",
+  };
+}
+
+describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
+  it("F1 prompt authorizes structured LR without Cycle/HD authority", () => {
+    const prompt = buildProjectSystemPrompt(baseProject);
+    expect(prompt).toMatch(/lifecycleRecommendation/);
+    expect(prompt).toMatch(/NEXT_CYCLE/);
+    expect(prompt).toMatch(/Pas de règle « après N messages »/);
+    expect(prompt).toMatch(/jamais forcé cyc:framing/);
+    expect(prompt).not.toMatch(
+      /aucune autorité de décision, d'exécution Cursor, d'écriture Git\/GitHub, ni de qualification de cycle SFIA/,
+    );
+    expect(prompt).toMatch(/ne peux pas l'enregistrer dans Studio/);
+  });
+
+  it("intent analysis treats lifecycle formalization as informative effect", () => {
+    expect(ANALYSIS_SYSTEM).toMatch(/Formalise maintenant dans Studio/);
+    expect(ANALYSIS_SYSTEM).toMatch(
+      /PAS le simple fait qu'une[\s\S]*mutation de bookkeeping lifecycle/,
+    );
+    expect(ANALYSIS_SYSTEM).toMatch(
+      /Ne PAS classer actionable uniquement parce que le Pilote demande d'enregistrer/,
+    );
+  });
+
+  it("BAR-05 — false structural on lifecycle formalization is dampened", () => {
+    const content =
+      "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
+    expect(
+      classifyLifecycleFormalizationRequest(content).lifecycleFormalizationEnvelope,
+    ).toBe(true);
+    const r = reconcileQualificationSignals({
+      userContent: content,
+      signals: {
+        structuralChange: true,
+        securityImpact: false,
+        architectureImpact: false,
+        dataImpact: false,
+        irreversible: false,
+        lowRiskBounded: false,
+      },
+    });
+    expect(r.reason).toBe(
+      "false_structural_lifecycle_formalization_neutralized",
+    );
+    expect(r.signals.structuralChange).toBe(false);
+    expect(r.signals.securityImpact).toBe(false);
+    expect(r.signals.lowRiskBounded).toBe(false);
+  });
+
+  it("BAR-06 — genuine Critical signals are preserved on formalization phrasing", () => {
+    const content =
+      "Formalise la recommandation de prochaine étape — migration sécurité irréversible des données.";
+    const r = reconcileQualificationSignals({
+      userContent: content,
+      signals: {
+        structuralChange: true,
+        securityImpact: true,
+        architectureImpact: false,
+        dataImpact: true,
+        irreversible: true,
+        lowRiskBounded: false,
+      },
+    });
+    expect(r.reason).toBe("genuine_critical_preserved");
+    expect(r.signals.securityImpact).toBe(true);
+    expect(r.signals.irreversible).toBe(true);
+    expect(r.signals.structuralChange).toBe(true);
+  });
+
+  describe("BAR-FC — lifecycle formalization dampener fail-closed", () => {
+    const structuralOnly = {
+      structuralChange: true,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: false,
+    } as const;
+
+    it("BAR-FC-01 — pure closed-world formalization dampens false structuralChange", () => {
+      const content =
+        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
+      expect(cl.residual).toBe("");
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(false);
+      expect(r.signals.securityImpact).toBe(false);
+      expect(r.signals.architectureImpact).toBe(false);
+      expect(r.signals.dataImpact).toBe(false);
+      expect(r.signals.irreversible).toBe(false);
+      expect(r.signals.lowRiskBounded).toBe(false);
+    });
+
+    it("BAR-FC-02 — structuralChange-only + substantive residual is preserved", () => {
+      const content =
+        "Formalise cette recommandation pour que je puisse la décider, et restructure complètement le périmètre produit et le workflow de gouvernance.";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
+      expect(cl.residual.length).toBeGreaterThan(0);
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.signals.structuralChange).toBe(true);
+    });
+
+    it("BAR-FC-03 — unknown substantive residual never dampens provider signals", () => {
+      const content =
+        "Formalise la recommandation de prochaine étape — Zorblax multi-region webhook pipeline.";
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
+      expect(r.signals.structuralChange).toBe(true);
+      expect(r.residual.length).toBeGreaterThan(0);
+    });
+
+    it.each([
+      ["BAR-FC-04 security", "securityImpact" as const],
+      ["BAR-FC-05 architecture", "architectureImpact" as const],
+      ["BAR-FC-06 data", "dataImpact" as const],
+      ["BAR-FC-07 irreversible", "irreversible" as const],
+    ])(
+      "%s preserved with formalization phrasing",
+      (_name, key) => {
+        const content =
+          "Formalise la recommandation pour que je puisse la décider, et ajoute aussi ce chantier critique.";
+        const signals = {
+          structuralChange: true,
+          securityImpact: false,
+          architectureImpact: false,
+          dataImpact: false,
+          irreversible: false,
+          lowRiskBounded: false,
+          [key]: true,
+        };
+        const r = reconcileQualificationSignals({
+          userContent: content,
+          signals,
+        });
+        expect(r.reason).toBe("genuine_critical_preserved");
+        expect(r.signals[key]).toBe(true);
+        expect(r.signals).toEqual(signals);
+      },
+    );
+
+    it("BAR-FC-08 — lowRiskBounded is never invented by dampener", () => {
+      const content =
+        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
+      const falseCase = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly, lowRiskBounded: false },
+      });
+      expect(falseCase.signals.lowRiskBounded).toBe(false);
+      const trueCase = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly, lowRiskBounded: true },
+      });
+      expect(trueCase.signals.lowRiskBounded).toBe(true);
+      expect(trueCase.signals.structuralChange).toBe(false);
+    });
+
+    it("BAR-FC-09 — non-lifecycle request keeps prior (non-dampen) behavior", () => {
+      const content =
+        "Explique les tensions entre délai et auditabilité pour ce projet.";
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.reason).not.toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+    });
+
+    it("BAR-FC-10 — original false-Critical formalization regression remains closed", () => {
+      const content =
+        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(false);
+    });
+
+    it("BAR-FC-11 — substantive content inside former match span stays residual", () => {
+      const content =
+        "Formalise et restructure complètement le périmètre produit dans cette recommandation";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
+      expect(cl.residual.length).toBeGreaterThan(0);
+      // Prove unknown non-whitelist text was not swallowed — no semantic understanding required.
+      expect(cl.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
+      expect(r.reason).not.toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(true);
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
+    });
+
+    it("BAR-FC-12 — pure permitted connective remains closed-world", () => {
+      const content =
+        "Formalise dans Studio cette recommandation de prochaine étape afin que je puisse la décider.";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
+      expect(cl.residual).toBe("");
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.reason).toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+      expect(r.signals.structuralChange).toBe(false);
+      expect(r.signals.lowRiskBounded).toBe(false);
+    });
+
+    it("BAR-FC-13 — unknown vocabulary between verb and object stays residual", () => {
+      const content =
+        "Formalise Zorblax multi-region webhook pipeline dans cette recommandation";
+      const cl = classifyLifecycleFormalizationRequest(content);
+      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
+      expect(cl.residual.length).toBeGreaterThan(0);
+      expect(cl.residual).toMatch(/Zorblax|webhook|pipeline/i);
+      const r = reconcileQualificationSignals({
+        userContent: content,
+        signals: { ...structuralOnly },
+      });
+      expect(r.signals.structuralChange).toBe(true);
+      expect(r.signals).toEqual(structuralOnly);
+      expect(r.reason).not.toBe(
+        "false_structural_lifecycle_formalization_neutralized",
+      );
+    });
+  });
+
+  it("BAR-07 — Pilote MW5 text hides machine markers; machine text retains them", () => {
+    const d = mw5ChallengeResult();
+    const pilote = formatMw5PiloteText(d);
+    const machine = formatMw5MachineText(d);
+    expect(pilote).not.toMatch(/\[MW5/);
+    expect(pilote).not.toMatch(/\bMW5\b/);
+    expect(pilote).not.toMatch(/\bTruth C\b/i);
+    expect(pilote).not.toMatch(/\bcount=\d+/);
+    expect(pilote).toMatch(/périmètre|impact/i);
+    expect(machine).toMatch(/\[MW5 CHALLENGE/);
+    expect(machine).toMatch(/count=/);
+  });
+
+  it("BAR-11 — conversation display unescapes presentation artifacts", () => {
+    const raw =
+      "Ligne 1\\nLigne 2\\n\\*\\*Important\\*\\* [MW5 CHALLENGE] count=3 Truth C";
+    const shown = formatNoraAssistantDisplayText(raw);
+    expect(shown).toContain("Ligne 1\nLigne 2");
+    expect(shown).not.toContain("\\n");
+    expect(shown).not.toContain("\\*\\*");
+    expect(shown).not.toMatch(/\[MW5/);
+    expect(shown).not.toMatch(/\bcount=\d+/);
+    expect(shown).toContain("Important");
+  });
+
+  it("BAR-12 — Pourquoi maps critical_signal_present to business French", () => {
+    const label = profileRationalePiloteLabel(
+      "critical_signal_present Guidance cycle applicable.",
+    );
+    expect(label).not.toMatch(/critical_signal_present/);
+    expect(label).toMatch(/impact structurant|sécurité|architecture/i);
+  });
+
+  it("BAR-11 — legitimate literal asterisks in code-like text still readable", () => {
+    const shown = formatNoraAssistantDisplayText("Glob pattern: file_*.ts");
+    expect(shown).toContain("file_*.ts");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
index bf6294e4..aac890b6 100644
--- a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
+++ b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
@@ -23,6 +23,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantPrepareF3FixtureAction: vi.fn(),
   projectAssistantPrepareM3Action: vi.fn(),
   projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
+  // Nominal empty Pilot lifecycle projection — no cycle / Recommendation / decision.
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
 }));

 const BASE_PROJECT = {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
index a588daa2..172ae1a3 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
@@ -91,8 +91,13 @@ async function sendStructuring(page: Page) {
   );
   await page.getByTestId("project-assistant-send").click();
   await expect(
-    page.getByTestId("project-assistant-messages").getByText(/\[MW5 CHALLENGE/),
+    page
+      .getByTestId("project-assistant-messages")
+      .getByText(/périmètre|impact|structurant|clarification/i),
   ).toBeVisible({ timeout: 45_000 });
+  await expect(
+    page.getByTestId("project-assistant-messages").getByText(/\[MW5 CHALLENGE/),
+  ).toHaveCount(0);
   await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
   await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);

@@ -438,9 +443,13 @@ test.describe("MW5 — Critical Challenge structuring UX (CORR-MW5-03)", () => {
     await page.getByTestId("project-assistant-send").click();

     const messages = page.getByTestId("project-assistant-messages");
-    await expect(messages.getByText(/\[MW5 CHALLENGE/)).toBeVisible({
+    await expect(
+      messages.getByText(/périmètre|impact|structurant|clarification/i),
+    ).toBeVisible({
       timeout: 45_000,
     });
+    await expect(messages.getByText(/\[MW5 CHALLENGE/)).toHaveCount(0);
+    await expect(messages.getByText(/\bMW5\b/)).toHaveCount(0);
     await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
     await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
     await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
diff --git a/projects/sfia-studio/app/e2e/studio-qual-to-governed-visual.spec.ts b/projects/sfia-studio/app/e2e/studio-qual-to-governed-visual.spec.ts
new file mode 100644
index 00000000..1c382acd
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/studio-qual-to-governed-visual.spec.ts
@@ -0,0 +1,88 @@
+import { test, expect, type Page } from "@playwright/test";
+import fs from "node:fs";
+import path from "node:path";
+import crypto from "node:crypto";
+
+/**
+ * QUAL-TO-GOVERNED-CYCLE — deterministic visual proof (fake provider).
+ * ZERO NEW REAL. Captures under .tmp-sfia-review/runtime-captures/qual-to-governed-cycle/
+ */
+
+const CAPTURE_ROOT = path.resolve(
+  process.cwd(),
+  "../../../.tmp-sfia-review/runtime-captures/qual-to-governed-cycle",
+);
+
+async function capture(page: Page, id: string): Promise<string> {
+  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+  const file = path.join(CAPTURE_ROOT, `${id}.png`);
+  await page.screenshot({ path: file, fullPage: true });
+  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
+}
+
+test.describe("QUAL-TO-GOVERNED visual proof (fake)", () => {
+  test("conversation formatting + MW5 pilote-safe + lifecycle empty-or-rec", async ({
+    page,
+  }) => {
+    await page.setViewportSize({ width: 1440, height: 1024 });
+    await page.addInitScript(() => {
+      (
+        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
+      ).__SFIA_E2E_QA_CONTROL__ = true;
+    });
+
+    const suffix = `qtg-${Date.now().toString(36)}`;
+    await page.goto("/studio/projects/new");
+    await expect(page.getByTestId("create-project-form")).toBeVisible({
+      timeout: 30_000,
+    });
+    await page.locator("#project-name").fill(`QualToGoverned ${suffix}`);
+    await page
+      .locator("#project-objective")
+      .fill("Application personnelle de suivi de tâches quotidiennes");
+    await page
+      .locator("#project-context")
+      .fill(
+        "Intention minimale — fake provider — ZERO REAL — corrective visual proof.",
+      );
+    await page.getByTestId("create-project-submit").click();
+    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
+      timeout: 30_000,
+    });
+    await page.getByTestId("open-project-workspace").click();
+    await expect(page.getByTestId("project-principal")).toBeVisible({
+      timeout: 30_000,
+    });
+
+    const input = page.getByTestId("project-assistant-input");
+    await expect(input).toBeEnabled({ timeout: 15_000 });
+
+    // Early advisory (incomplete intention)
+    await input.fill(
+      "Je voudrais une petite application pour suivre mes tâches du jour.",
+    );
+    await page.getByTestId("project-assistant-send").click();
+    await expect(
+      page.getByTestId("project-assistant-messages").getByText(/Nora|Pilote/i).first(),
+    ).toBeVisible({ timeout: 45_000 });
+    await capture(page, "01-early-advisory");
+
+    // Genuine Critical MW5 — Pilote text must not leak markers
+    await input.fill(
+      "Préparer une proposition d'architecture __F2_STRUCTURING__",
+    );
+    await page.getByTestId("project-assistant-send").click();
+    const messages = page.getByTestId("project-assistant-messages");
+    await expect(
+      messages.getByText(/périmètre|impact|structurant|clarification/i),
+    ).toBeVisible({ timeout: 45_000 });
+    await expect(messages.getByText(/\[MW5 CHALLENGE/)).toHaveCount(0);
+    await expect(messages.getByText(/\bMW5\b/)).toHaveCount(0);
+    await expect(messages.getByText(/\bTruth C\b/)).toHaveCount(0);
+    await capture(page, "02-mw5-pilote-safe");
+
+    // Lifecycle surface present (recommendation may be empty until structured LR)
+    await expect(page.getByTestId("lifecycle-surface")).toBeVisible();
+    await capture(page, "03-lifecycle-surface");
+  });
+});
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 80e253d8..7dfcb6ab 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -1,22 +1,25 @@
 "use client";

-import { useId } from "react";
 import {
   BOUNDED_RUNNING_REFRESH_ACTION,
   BOUNDED_RUNNING_REFRESH_HELP,
   BOUNDED_RUNNING_REFRESH_TITLE,
   G_UX_08_AMEND_DEFERRED_MESSAGE,
+  SFIA_ASSISTANT_ANSWERED_EVENT,
   attemptStatusUserLabel,
   confirmationPathChip,
   contractUserFacingFacts,
   evidenceVerifiedUserLabel,
   executionSemanticKind,
   executionSemanticUserLabel,
+  formatNoraAssistantDisplayText,
   isBoundedRunningAttemptRefreshable,
   postExecutionUserSummary,
+  profileRationalePiloteLabel,
 } from "@/features/project-assistant/presentationLabels";
 import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
+import { useEffect, useId } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import styles from "./ConversationSurface.module.css";

@@ -109,6 +112,13 @@ export function ConversationSurface({
     retryLastUserMessage,
   } = controller;

+  // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
+  useEffect(() => {
+    if (uiState !== "ANSWERED") return;
+    if (typeof window === "undefined") return;
+    window.dispatchEvent(new CustomEvent(SFIA_ASSISTANT_ANSWERED_EVENT));
+  }, [uiState, messages.length]);
+
   const attemptLabel = f3Execute
     ? attemptStatusUserLabel(f3Execute.attempt.status)
     : null;
@@ -248,7 +258,11 @@ export function ConversationSurface({
                 <p className={styles.bubbleAuthor}>
                   {message.role === "user" ? "Pilote" : "Nora"}
                 </p>
-                <p className={styles.bubbleText}>{message.content}</p>
+                <p className={styles.bubbleText}>
+                  {message.role === "assistant"
+                    ? formatNoraAssistantDisplayText(message.content)
+                    : message.content}
+                </p>
               </div>
             </article>
           ))
@@ -309,12 +323,20 @@ export function ConversationSurface({
             </div>
             <div className={styles.factWide}>
               <dt>Pourquoi</dt>
-              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
+              <dd data-testid="f2-rationale">
+                {profileRationalePiloteLabel(f2.qualification.rationale)}
+              </dd>
             </div>
           </dl>
           <details className={styles.details}>
             <summary>Détails techniques</summary>
             <dl className={styles.facts}>
+              <div className={styles.factWide}>
+                <dt>Rationale technique</dt>
+                <dd data-testid="f2-rationale-technical">
+                  {f2.qualification.rationale}
+                </dd>
+              </div>
               <div className={styles.factWide}>
                 <dt>Identifiant de cycle</dt>
                 <dd>{f2.qualification.cycleTypeId}</dd>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index fcf0fe75..3409d00f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -6,6 +6,7 @@ import {
   projectAssistantPilotLifecycleProjection,
 } from "@/features/project-assistant/actions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
+import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
 import {
   lifecycleCtaPresentation,
   lifecycleStatusBadge,
@@ -48,6 +49,16 @@ export function LifecycleSurface({
     void refresh();
   }, [refresh]);

+  useEffect(() => {
+    const onAnswered = () => {
+      void refresh();
+    };
+    window.addEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
+    return () => {
+      window.removeEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
+    };
+  }, [refresh]);
+
   async function runAction(
     action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "REEVALUATE",
     opts?: { requiresReplanHumanDecision?: boolean },
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index feba58f9..512c2f4e 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -7,9 +7,11 @@ import {

 /**
  * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
- * No F2 qualification, no Cursor, no write, no durable persistence claims.
+ * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
+ * Structured lifecycle Recommendation emission is allowed (authority none) via Product turn output.
  * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
  * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
+ * QUAL-TO-GOVERNED-CYCLE — semantic boundary before silent pre-cycle deepening.
  */
 export function buildProjectSystemPrompt(
   project: ProjectAssistantContextDto,
@@ -54,7 +56,11 @@ export function buildProjectSystemPrompt(
   return [
     "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
     "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
-    "Tu n'as aucune autorité de décision, d'exécution Cursor, d'écriture Git/GitHub, ni de qualification de cycle SFIA.",
+    "Tu n'as aucune autorité de décision Pilote, d'exécution Cursor, d'écriture Git/GitHub,",
+    "ni de création / START / HumanDecision / CycleInstance actif.",
+    "Tu PEUX émettre une Recommendation lifecycle structurée SANS autorité (champ lifecycleRecommendation)",
+    "lorsque la frontière sémantique ci-dessous est atteinte — le serveur valide et matérialise ;",
+    "émettre ≠ qualifier formellement un CycleInstance ≠ décider.",
     "Une intention utilisateur n'est jamais une autorisation d'exécution.",
     "",
     "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
@@ -89,6 +95,22 @@ export function buildProjectSystemPrompt(
     "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
     "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
     "",
+    "=== FRONTIÈRE QUALIFICATION → RECOMMANDATION DE CYCLE (sémantique) ===",
+    "Pas de règle « après N messages ». Pas de « toujours Cadrage en premier ».",
+    "Intention naturelle incomplète : reste advisory ; au plus UNE clarification ciblée pertinente.",
+    "Lorsque (1) le besoin est assez compris pour identifier avec confiance le prochain type de cycle,",
+    "(2) continuer approfondir reviendrait à effectuer substantiellement ce cycle,",
+    "(3) aucun cycle actif ne couvre déjà ce travail :",
+    "→ cesse l'approfondissement pré-cycle ; produis narrative + lifecycleRecommendation structurée.",
+    "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
+    "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
+    "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
+    "Si plusieurs cycles sont vraiment plausibles ou le contexte est insuffisant :",
+    "clarification ciblée OU lifecycleRecommendation = null — pas de choix arbitraire.",
+    "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
+    "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
+    "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
+    "",
     "=== LIMITES D'AUTORITÉ (strict) ===",
     "Distingue vérité courante / historique / superseded / réserve ouverte.",
     "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
index f8ec6b31..85368728 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
@@ -330,6 +330,8 @@ export function deriveCkcAttributedRecommendation(input: {
   content: ProductCkcCognitiveContent | null;
   cognitiveRecommendation?: string | null;
 }): string {
+  // Keep engine codes out of primary Pilote Pourquoi — map at presentation.
+  // Prefer cognitive / CKC guidance prose; fall back to base only if no guidance.
   if (!input.content) {
     return input.baseRationale;
   }
@@ -341,7 +343,11 @@ export function deriveCkcAttributedRecommendation(input: {
     input.cognitiveRecommendation?.trim() ?? "",
   );
   if (cognitive) {
-    return `${input.baseRationale} ${cognitive} · ${guidanceText}`;
+    return `${cognitive} · ${guidanceText}`;
+  }
+  // If base is a known engine code, prefer guidance alone for Pilote primary.
+  if (/^[a-z0-9_]+$/i.test(input.baseRationale.trim())) {
+    return guidanceText;
   }
   return `${input.baseRationale} ${guidanceText}`;
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index daaf87d3..fb8c859c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -409,6 +409,9 @@ Exemples informative:
 - « Donne-moi les risques avant que je décide. »
 - « Peux-tu m'aider à créer cette application ? » (avec ou sans détails MVP complets)
 - « J'aimerais créer un outil pour suivre mes contrats » / « tu ferais quoi comme MVP ? »
+- « Quelle est la meilleure prochaine étape méthodologique ? » / « Que me recommandes-tu comme prochain cycle ? »
+- « Formalise maintenant dans Studio la prochaine étape que tu me recommandes, afin que je puisse la décider. »
+  (effet = Recommendation lifecycle advisory pour décision Pilote — PAS création de CycleInstance)
 - Repository READ / résumé / recherche / vérité Git SANS mutation ni qualification de cycle.

 actionable — l'effet demandé est une opération SFIA gouvernée (qualifier/créer/changer un CycleInstance ; créer une proposition F2 parce que l'utilisateur demande une transition de processus ; préparer un changement structurel Project nécessitant une transition d'état ; capturer/préparer un workflow de décision où une qualification de cycle est réellement requise) ET candidateCycleTypeId + signals sont supportables.
@@ -416,6 +419,7 @@ Exemples actionable:
 - « Qualifie ce chantier en cycle Delivery et prépare la proposition. »
 - « Crée le cycle correspondant et prépare le passage au prochain gate. »
 - « Prépare l'ExecutionContract pour cette décision déjà enregistrée. »
+Ne PAS classer actionable uniquement parce que le Pilote demande d'enregistrer / formaliser une Recommendation lifecycle advisory.

 execution_request — uniquement si l'utilisateur demande explicitement une exécution / mutation / action externe franchissant la frontière d'exécution.
 Exemple: « Exécute ce contrat. »
@@ -479,12 +483,19 @@ JAMAIS Truth C, Evidence, HumanDecision, GO, Confirmation ou autorité.
 missing/unknown/insufficient ⇒ le challenge n'est PAS satisfait (fail-closed).
 Ne PAS inventer un challenge absent du message.

-=== Qualification signals (effet réel, pas le label utilisateur) ===
+=== Qualification signals (effet réel du chantier projet, pas le label utilisateur) ===
+Les signals décrivent l'impact matériel réel du travail projet sous-jacent — PAS le simple fait qu'une
+mutation de bookkeeping lifecycle / formalisation de Recommendation / candidate formalization soit durable.
+Formaliser / matérialiser une Recommendation NEXT_CYCLE ou un enregistrement de processus advisory
+sans impact sécurité / architecture / données / irréversibilité / changement structurel produit établi
+⇒ structuralChange, securityImpact, architectureImpact, dataImpact, irreversible = false.
+Ne PAS assimiler « formaliser une Recommendation dans Studio » à « changement structurant du Project ».
 Si la demande est uniquement un wording / libellé d'interface, explicitement sans impact sur le comportement, les données, l'architecture, la sécurité, l'autorité, l'exécution et sans irréversibilité : structuralChange, securityImpact, architectureImpact, dataImpact, irreversible = false ; lowRiskBounded = true lorsqu'établi.
 Un utilisateur qui QUALIFIE verbalement une opération de « cosmétique » ou « wording » ne rend PAS une mutation structurante, de données, d'architecture, de sécurité ou irréversible cosmétique.
 Classifie d'après l'effet réel demandé, pas le label donné par l'utilisateur.
 Le seul mot « cosmétique » ou « wording » ne force aucun signal safe.
 Silence sur sécurité ou irréversibilité n'est PAS une preuve d'absence d'impact.
+Sécurité réelle / architecture structurante / impact données / action irréversible → conserver les signals critiques correspondants.

 === ORIENTATION MÉTHODE (CORR-PROOF-03 E1 — cognitive only) ===
 Pour une demande informative de conseil / méthode projet, lorsque le type de travail courant est raisonnablement
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index e1d69ee6..8069d632 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -37,7 +37,8 @@ import {
   decideCognitiveStrategy,
   decideMw5Disposition,
   deriveMw5FactsFromF2Turn,
-  formatMw5AssistantText,
+  formatMw5MachineText,
+  formatMw5PiloteText,
   mergeCognitiveWorkloadSignals,
   toMw5TurnSurface,
   MW5_TEST_MARKERS,
@@ -349,12 +350,13 @@ async function evaluateF2Mw5(input: {
       priorStructuralChallengeCount: session.priorStructuralChallengeCount,
     }),
   );
-  const text = formatMw5AssistantText(decision);
+  const machineText = formatMw5MachineText(decision);
+  const text = formatMw5PiloteText(decision);
   if (decision.disposition === "CHALLENGE") {
     rememberMw5IssuedChallenge({
       projectId: input.projectId,
       challenges: decision.challenges,
-      challengeText: text,
+      challengeText: machineText,
     });
   } else if (
     decision.recommendationAllowed &&
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
index 17619441..bd03d739 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
@@ -34,7 +34,11 @@ export type QualificationSignalCoherenceReason =
   | "unknown_substantive_residual"
   | "signals_already_safe"
   | "false_critical_neutralized"
-  | "safe_cosmetic_envelope_confirmed";
+  | "safe_cosmetic_envelope_confirmed"
+  | "not_lifecycle_formalization_envelope"
+  | "genuine_critical_preserved"
+  | "false_structural_lifecycle_formalization_neutralized"
+  | "lifecycle_formalization_substantive_residual";

 export type CosmeticSafeClauseRole =
   | "cycle_meta"
@@ -42,12 +46,37 @@ export type CosmeticSafeClauseRole =
   | "no_impact"
   | "governance";

+export type LifecycleFormalizationClauseRole =
+  | "lifecycle_formalize_verb"
+  | "lifecycle_rec_object"
+  | "lifecycle_bookkeeping_filler"
+  | "lifecycle_rec_formalize"
+  | "decision_handoff"
+  | "no_product_critical_impact"
+  | "governance";
+
+/** Neutralize structuralChange only — do not invent lowRiskBounded/Light. */
+export const LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS: Pick<
+  F2QualificationSignals,
+  | "structuralChange"
+  | "securityImpact"
+  | "architectureImpact"
+  | "dataImpact"
+  | "irreversible"
+> = {
+  structuralChange: false,
+  securityImpact: false,
+  architectureImpact: false,
+  dataImpact: false,
+  irreversible: false,
+};
+
 export type QualificationSignalCoherenceResult = {
   signals: F2QualificationSignals;
   cosmeticSafeToSuppress: boolean;
   reason: QualificationSignalCoherenceReason;
   residual: string;
-  recognizedRoles: CosmeticSafeClauseRole[];
+  recognizedRoles: Array<CosmeticSafeClauseRole | LifecycleFormalizationClauseRole>;
 };

 const ARTICLE = "(?:le |la |les |l['’]|the )?";
@@ -76,6 +105,38 @@ const GOVERNANCE_RES: readonly RegExp[] = [
   /\baucune\s+ex[eé]cution\b/i,
 ];

+/**
+ * Closed-world lifecycle formalization grammar.
+ * NO arbitrary [\s\S]{0,N} spans — only whitelist tokens may be consumed.
+ * Unknown text between anchors must remain as residual.
+ */
+const LIFECYCLE_FORMALIZE_VERB_RES: readonly RegExp[] = [
+  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
+];
+
+const LIFECYCLE_REC_OBJECT_RES: readonly RegExp[] = [
+  /\brecommandation(?:\s+de\s+prochaine\s+[eé]tape)?\b/i,
+  /\bprochaine\s+[eé]tape\b/i,
+];
+
+/** Explicitly permitted bookkeeping fillers only — never open windows. */
+const LIFECYCLE_BOOKKEEPING_FILLER_RES: readonly RegExp[] = [
+  /\bdans\s+studio\b/i,
+  /\bmaintenant\b/i,
+  /\b(?:cette|la|une|le|les|l['’])\b/i,
+];
+
+const DECISION_HANDOFF_RES: readonly RegExp[] = [
+  /\b(?:afin|pour)\s+que\s+je\s+(?:puisse\s+)?(?:la\s+)?d[eé]cider\b/i,
+  /\bsans\s+(?:cr[eé]er|d[eé]marrer|activer)\s+(?:de\s+|un\s+)?cycle\b/i,
+  /\brecommandation\s*(?:n['’]est\s+pas|≠|!=)\s*(?:une\s+)?d[eé]cision\b/i,
+];
+
+const NO_PRODUCT_CRITICAL_IMPACT_RES: readonly RegExp[] = [
+  /\bsans\s+(?:impact\s+)?(?:s[eé]curit[eé]|security|architecture|donn[eé]es|data|irr[eé]versib)/i,
+  /\bwithout\s+(?:security|architecture|data|irreversib)/i,
+];
+
 const CONNECTOR_OR_PUNCT_RE =
   /[.,;:!?()[\]«»""''’]+|\b(?:et|and|puis|then|ou|or|ni)\b/gi;

@@ -215,36 +276,176 @@ function signalsAlreadySafe(signals: F2QualificationSignals): boolean {
 /**
  * Neutralize false Critical provider signals only when the request is a
  * positively proven closed-world pure-cosmetic envelope. Otherwise return
- * the exact original provider signals.
+ * the exact original provider signals — except a bounded lifecycle-formalization
+ * dampener that clears structuralChange alone when a COMPLETE closed-world
+ * formalization envelope is proven (recognized clauses only; empty residual).
  */
 export function reconcileQualificationSignals(input: {
   userContent: string;
   signals: F2QualificationSignals;
 }): QualificationSignalCoherenceResult {
   const classification = classifyClosedWorldCosmeticRequest(input.userContent);
-  if (!classification.cosmeticSafeToSuppress) {
+  if (classification.cosmeticSafeToSuppress) {
+    if (signalsAlreadySafe(input.signals)) {
+      return {
+        signals: input.signals,
+        cosmeticSafeToSuppress: true,
+        reason: "signals_already_safe",
+        residual: classification.residual,
+        recognizedRoles: classification.recognizedRoles,
+      };
+    }
     return {
-      signals: input.signals,
-      cosmeticSafeToSuppress: false,
-      reason: classification.reason,
+      signals: { ...COSMETIC_SAFE_SIGNALS },
+      cosmeticSafeToSuppress: true,
+      reason: "false_critical_neutralized",
       residual: classification.residual,
       recognizedRoles: classification.recognizedRoles,
     };
   }
-  if (signalsAlreadySafe(input.signals)) {
+
+  const lifecycle = classifyLifecycleFormalizationRequest(input.userContent);
+  const hasFormalizeClause =
+    lifecycle.recognizedRoles.includes("lifecycle_formalize_verb") &&
+    lifecycle.recognizedRoles.includes("lifecycle_rec_object");
+  const s = input.signals;
+
+  // Formalization clause present but residual remains → fail-closed: never dampen.
+  if (hasFormalizeClause && lifecycle.residual.length > 0) {
+    if (
+      s.securityImpact === true ||
+      s.architectureImpact === true ||
+      s.dataImpact === true ||
+      s.irreversible === true
+    ) {
+      return {
+        signals: s,
+        cosmeticSafeToSuppress: false,
+        reason: "genuine_critical_preserved",
+        residual: lifecycle.residual,
+        recognizedRoles: lifecycle.recognizedRoles,
+      };
+    }
     return {
-      signals: input.signals,
-      cosmeticSafeToSuppress: true,
-      reason: "signals_already_safe",
-      residual: classification.residual,
-      recognizedRoles: classification.recognizedRoles,
+      signals: s,
+      cosmeticSafeToSuppress: false,
+      reason: "lifecycle_formalization_substantive_residual",
+      residual: lifecycle.residual,
+      recognizedRoles: lifecycle.recognizedRoles,
+    };
+  }
+
+  // Dampen only on positively proven closed-world envelope (empty residual).
+  if (lifecycle.lifecycleFormalizationEnvelope) {
+    if (
+      s.securityImpact === true ||
+      s.architectureImpact === true ||
+      s.dataImpact === true ||
+      s.irreversible === true
+    ) {
+      return {
+        signals: s,
+        cosmeticSafeToSuppress: false,
+        reason: "genuine_critical_preserved",
+        residual: lifecycle.residual,
+        recognizedRoles: lifecycle.recognizedRoles,
+      };
+    }
+    if (s.structuralChange !== true) {
+      return {
+        signals: s,
+        cosmeticSafeToSuppress: false,
+        reason: "signals_already_safe",
+        residual: lifecycle.residual,
+        recognizedRoles: lifecycle.recognizedRoles,
+      };
+    }
+    return {
+      signals: {
+        ...s,
+        ...LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS,
+        // Preserve caller lowRiskBounded — never invent Light eligibility.
+        lowRiskBounded: s.lowRiskBounded,
+      },
+      cosmeticSafeToSuppress: false,
+      reason: "false_structural_lifecycle_formalization_neutralized",
+      residual: lifecycle.residual,
+      recognizedRoles: lifecycle.recognizedRoles,
     };
   }
+
   return {
-    signals: { ...COSMETIC_SAFE_SIGNALS },
-    cosmeticSafeToSuppress: true,
-    reason: "false_critical_neutralized",
+    signals: input.signals,
+    cosmeticSafeToSuppress: false,
+    reason: classification.reason,
     residual: classification.residual,
     recognizedRoles: classification.recognizedRoles,
   };
 }
+
+/**
+ * Bounded closed-world classifier: advisory lifecycle recommendation formalization
+ * for Pilote decision. Envelope is dampenable ONLY when:
+ * - a formalize verb AND a recommendation object are each recognized as whitelist tokens, AND
+ * - no substantive residual remains after stripping whitelist spans only.
+ * No arbitrary [\s\S]{0,N} windows — unknown text between anchors stays residual.
+ */
+export function classifyLifecycleFormalizationRequest(userContent: string): {
+  lifecycleFormalizationEnvelope: boolean;
+  residual: string;
+  recognizedRoles: LifecycleFormalizationClauseRole[];
+} {
+  let cursor = normalizeRequest(userContent);
+  const recognizedRoles: LifecycleFormalizationClauseRole[] = [];
+  const specs: Array<{
+    role: LifecycleFormalizationClauseRole;
+    res: readonly RegExp[];
+  }> = [
+    // Prefer longer object phrases via equal-start length preference in matcher.
+    { role: "lifecycle_rec_object", res: LIFECYCLE_REC_OBJECT_RES },
+    { role: "lifecycle_formalize_verb", res: LIFECYCLE_FORMALIZE_VERB_RES },
+    { role: "lifecycle_bookkeeping_filler", res: LIFECYCLE_BOOKKEEPING_FILLER_RES },
+    { role: "decision_handoff", res: DECISION_HANDOFF_RES },
+    { role: "no_product_critical_impact", res: NO_PRODUCT_CRITICAL_IMPACT_RES },
+    { role: "governance", res: GOVERNANCE_RES },
+  ];
+  for (let i = 0; i < 32; i += 1) {
+    let best: {
+      start: number;
+      end: number;
+      role: LifecycleFormalizationClauseRole;
+    } | null = null;
+    for (const { role, res } of specs) {
+      for (const re of res) {
+        const copy = new RegExp(re.source, re.flags.replace("g", ""));
+        const m = copy.exec(cursor);
+        if (!m || m.index == null) continue;
+        const start = m.index;
+        const end = start + m[0].length;
+        if (
+          !best ||
+          start < best.start ||
+          (start === best.start && end - start > best.end - best.start)
+        ) {
+          best = { start, end, role };
+        }
+      }
+    }
+    if (!best) break;
+    recognizedRoles.push(best.role);
+    cursor = `${cursor.slice(0, best.start)} ${cursor.slice(best.end)}`;
+    cursor = cursor.replace(/\s+/g, " ").trim();
+  }
+  const residual = stripNonSubstantive(cursor);
+  const hasVerb = recognizedRoles.includes("lifecycle_formalize_verb");
+  const hasObject = recognizedRoles.includes("lifecycle_rec_object");
+  const hasFormalize = hasVerb && hasObject;
+  if (hasFormalize) {
+    recognizedRoles.push("lifecycle_rec_formalize");
+  }
+  return {
+    lifecycleFormalizationEnvelope: hasFormalize && residual.length === 0,
+    residual,
+    recognizedRoles,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index d02cbf52..e900e92f 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -689,3 +689,71 @@ export function textContainsInternalLpsMarker(text: string | null | undefined):
     text.includes(POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL)
   );
 }
+
+/** OA / engine rationale codes → concise Pilote French (primary Pourquoi). */
+const PROFILE_RATIONALE_PILOTE_LABELS: Record<string, string> = {
+  critical_signal_present:
+    "Un signal d'impact structurant (sécurité, architecture, données ou irréversibilité) est présent.",
+  low_risk_bounded: "Le périmètre est borné et à faible risque.",
+  default_standard: "Approche Standard — aucun signal critique établi.",
+};
+
+/**
+ * Map machine profile rationale to Pilote-facing primary copy.
+ * Unknown free text is lightly scrubbed; engine codes never shown raw.
+ */
+export function profileRationalePiloteLabel(
+  rationale: string | null | undefined,
+): string {
+  const raw = (rationale ?? "").trim();
+  if (!raw) return "Justification non fournie.";
+  const firstToken = raw.split(/\s+/)[0] ?? raw;
+  const mapped = PROFILE_RATIONALE_PILOTE_LABELS[firstToken];
+  if (mapped) {
+    // If CKC guidance was appended after the code, keep a short business remainder.
+    const rest = raw.slice(firstToken.length).trim();
+    if (!rest) return mapped;
+    const scrubbed = scrubPiloteFacingEngineJargon(rest);
+    return scrubbed ? `${mapped} ${scrubbed}` : mapped;
+  }
+  return scrubPiloteFacingEngineJargon(raw) || "Justification métier disponible dans les détails.";
+}
+
+export function scrubPiloteFacingEngineJargon(text: string): string {
+  return text
+    .replace(/\[MW5[^\]]*\]/gi, "")
+    .replace(/\bMW5\b/g, "")
+    .replace(/\bTruth C\b/gi, "contexte projet")
+    .replace(/\bcritical_signal_present\b/g, "")
+    .replace(/\bcount=\d+\b/gi, "")
+    .replace(/\bF1\b/g, "")
+    .replace(/\bF2\b/g, "")
+    .replace(/\bHumanDecision\b/g, "décision Pilote")
+    .replace(/[^\S\n]{2,}/g, " ")
+    .trim();
+}
+
+/**
+ * Normalize Nora assistant presentation text at the UI boundary:
+ * - unescape presentation escapes (\\n → newline, \\*\\* → **)
+ * - strip leaked MW5 machine markers
+ * - neutralize visible markdown emphasis markers without HTML
+ * Does not alter user messages; does not use dangerouslySetInnerHTML.
+ */
+export function formatNoraAssistantDisplayText(text: string | null | undefined): string {
+  if (!text) return "";
+  let out = text;
+  // Only treat \\n / \\t as escapes when they appear as two-char sequences.
+  out = out.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\r/g, "");
+  out = out.replace(/\\\*/g, "*");
+  out = out.replace(/\[MW5[^\]]*\]/gi, "");
+  out = out.replace(/\bcount=\d+\b/gi, "");
+  // Soften markdown emphasis / headings leftovers without rendering HTML.
+  out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
+  out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
+  out = out.replace(/[^\S\n]{2,}/g, " ").replace(/ *\n */g, "\n").trim();
+  return scrubPiloteFacingEngineJargon(out);
+}
+
+/** CustomEvent name: ConversationSurface → LifecycleSurface refresh after answer. */
+export const SFIA_ASSISTANT_ANSWERED_EVENT = "sfia:project-assistant-answered";
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
index ff49cb98..8facac20 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
@@ -114,8 +114,8 @@ export type Mw5TurnSurface = {

 const DEFAULT_STRUCTURAL_CHALLENGES: readonly string[] = [
   "Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?",
-  "Quel périmètre ou impact reste non fondé dans le contexte Truth C disponible ?",
-  "Quelle frontière d'autorité humaine reste ouverte — sans confondre Recommandation et HumanDecision ?",
+  "Quel périmètre ou impact reste non fondé dans le contexte projet disponible ?",
+  "Quelle frontière d'autorité humaine reste ouverte — sans confondre recommandation et décision Pilote ?",
 ];

 const DEFAULT_STRUCTURAL_CLARIFICATIONS: readonly string[] = [
@@ -464,7 +464,7 @@ export function parseIssuedChallengeCount(text: string): number {
   return 0;
 }

-export function formatMw5AssistantText(result: Mw5PolicyResult): string {
+export function formatMw5MachineText(result: Mw5PolicyResult): string {
   const anti =
     "AUCUNE EXÉCUTION. Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.";
   if (result.disposition === "CHALLENGE") {
@@ -499,6 +499,42 @@ export function formatMw5AssistantText(result: Mw5PolicyResult): string {
   return result.disclosure;
 }

+/**
+ * Pilote-facing MW5 copy — business-first; no MW5/Truth C/count=/engine jargon.
+ * Machine markers remain available via formatMw5MachineText for session/audit.
+ */
+export function formatMw5PiloteText(result: Mw5PolicyResult): string {
+  if (result.disposition === "CHALLENGE") {
+    const lines = result.challenges.map((c, i) => `${i + 1}. ${c}`);
+    return [
+      "Avant de formaliser cette recommandation, il me manque encore un élément structurant sur son périmètre ou son impact.",
+      ...lines,
+      "Je ne décide pas à votre place. AUCUNE EXÉCUTION.",
+      "La recommandation n'est pas encore émise.",
+    ].join("\n");
+  }
+  if (result.disposition === "CLARIFY") {
+    const lines = result.challenges.map((c, i) => `${i + 1}. ${c}`);
+    return [
+      "Une clarification structurante est encore nécessaire avant de poursuivre.",
+      ...lines,
+      "Je ne décide pas à votre place. AUCUNE EXÉCUTION.",
+    ].join("\n");
+  }
+  if (result.disposition === "ESCALATE") {
+    return [
+      "Cette situation nécessite une décision Pilote explicite sur le chemin de gouvernance existant.",
+      "Je ne synthétise pas cette décision. AUCUNE EXÉCUTION.",
+    ].join("\n");
+  }
+  return "AUCUNE EXÉCUTION. La recommandation suit les règles de gouvernance Studio.";
+}
+
+/** @deprecated Prefer formatMw5PiloteText for UI; formatMw5MachineText for session. */
+export function formatMw5AssistantText(result: Mw5PolicyResult): string {
+  return formatMw5PiloteText(result);
+}
+
 /**
  * Fail-closed (CORR-MW5-02 / CORR-MW5-02B):
  * server-issued open challenge + explicit sufficient assessment only.
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index d71c0a82..2dadbb9d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -185,6 +185,8 @@ export {
   decideMw5Disposition,
   deriveMw5FactsFromF2Turn,
   formatMw5AssistantText,
+  formatMw5MachineText,
+  formatMw5PiloteText,
   isCriticalProfile,
   isMw5ChallengeSatisfied,
   looksLikeQuestionnaire,
```

## 24. Historical UI provenance (deterministic; NO new capture this cycle)
Captures retained locally under `.tmp-sfia-review/runtime-captures/qual-to-governed-cycle/` from earlier deterministic fixture work in this campaign. **No new REAL / no new visual capture claimed here.**

- `01-presentation-desktop.png` size=140468 sha256=5e352e896d53cd8eaa7a827fc2612369e46e6df9d269322adc07c029334f42f7
- `02-presentation-390.png` size=136921 sha256=9e09235efdaa29efd3f59266f76848cdf6b96df246b3035c212f62f2177072d7
- `fixture-meta.json` size=148 sha256=b6a2e53b3d7bb42c9392544182ff796324179738967e503c252a995297715308
- `fixture.html` size=2575 sha256=da3149501aed82a4e54530f6601535e12838cca8ef96c0278b06b15ec7ff18eb
- `manifest.jsonl` size=325 sha256=a35f64b832a5cd232980ae97799b8ff40e265f0176b10c22159620a199f76dfd

### fixture-meta.json
```json
{
  "displayIncludesLiteralEscapes": false,
  "displayHasLiteralBackslashN": true,
  "displayOk": true,
  "mw5PiloteSafe": true,
  "whySafe": true
}
```

### manifest.jsonl
```
{"id":"01-presentation-desktop","file":"01-presentation-desktop.png","sha256":"5e352e896d53cd8eaa7a827fc2612369e46e6df9d269322adc07c029334f42f7","viewport":{"width":1440,"height":1024},"timestamp":"2026-09-09T13:44:37.647Z","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT","mode":"deterministic-presentation-fixture"}

```

### fixture.html
```html
<!doctype html><html lang="fr"><head><meta charset="utf-8"/><title>QUAL-TO-GOVERNED visual proof</title><style>body{font-family:ui-sans-serif,system-ui;background:#0f1419;color:#e8eef5;margin:0;padding:32px}.card{background:#18212b;border:1px solid #2a3847;border-radius:12px;padding:20px;margin:0 0 20px;max-width:920px}h1{font-size:22px;margin:0 0 8px}h2{font-size:16px;margin:0 0 12px;color:#9fb3c8}.bubble{white-space:pre-wrap;line-height:1.5;background:#101820;padding:14px;border-radius:10px}.meta{color:#8aa0b5;font-size:13px;margin-top:8px}.ok{color:#7ddea5}.bad{color:#ff8f8f;font-size:12px;word-break:break-word}.badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#243141;font-size:12px;margin-right:8px}</style></head><body><h1>QUAL-TO-GOVERNED — deterministic presentation proof</h1><p class="meta">Fake/deterministic · ZERO NEW REAL · provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT</p><div class="card"><h2>Conversation (escaped payload → Pilote display)</h2><div class="bubble">Voici le plan:

Priorité
- saisie minimale
- vue quotidienne</div><p class="meta">Must not show literal \\n or \\*\\*</p></div><div class="card"><h2>MW5 Pilote text</h2><div class="bubble">Avant de formaliser cette recommandation, il me manque encore un élément structurant sur son périmètre ou son impact.
1. Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?
2. Quel périmètre ou impact reste non fondé dans le contexte projet disponible ?
Je ne décide pas à votre place. AUCUNE EXÉCUTION.
La recommandation n'est pas encore émise.</div><p class="ok">No MW5 / Truth C / count= in primary text</p><p class="bad">Machine (audit only, not primary UI): [MW5 CHALLENGE] count=2 Challenge structural requis (plafond 3). Pas un questionnaire d'intake. 1. Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?…</p></div><div class="card"><h2>F2 Pourquoi (business-first)</h2><div class="bubble">Un signal d'impact structurant (sécurité, architecture, données ou irréversibilité) est présent. Guidance cycle applicable.</div><p class="meta">Technical rationale remains under Détails techniques</p></div><div class="card"><h2>Lifecycle Recommendation</h2><span class="badge">CURRENT</span><span class="badge">NEXT CYCLE</span><p><strong>Recommandation Nora</strong></p><p>Consolider le Cadrage pour clarifier usage, saisie minimale et vue quotidienne avant delivery.</p><p class="meta">Recommandation ≠ décision Pilote · n’active pas le cycle</p></div></body></html>
```

## 25. Reserves
- LIVE GREENFIELD REPLAY NOT YET PROVEN
- R2 executor gap STILL OPEN
- RUNTIME V3 NON ADOPTED
- Product Proof NOT COMPLETE
- REAL BOUNDARY / END-TO-END REAL NOT PROVEN
- Next distinct gate only after Critical Review PASS: `GO MORRIS — GREENFIELD CORRECTIVE BOUNDED LIVE REPLAY` (NOT consumed)

## 26. Final verdict
**DETERMINISTIC CORRECTIVE CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW**

Claims:
- CLOSED-WORLD MATCHER CORRECTIVE DETERMINISTICALLY PROVEN AT TESTED SCOPE
- FULL SUITE PASS
- TEST HARNESS REGULARIZED
- ZERO NEW REAL
- LIVE GREENFIELD REPLAY NOT YET PROVEN
- R2 STILL OPEN
- RUNTIME V3 NON ADOPTED

Forbidden claims (explicitly NOT made): READY FOR LIVE REPLAY; REAL proven; Product Proof COMPLETE; runtime v3 ADOPTED.

### Instruction to ChatGPT
Read this canonical handoff and perform a new Critical Review of amended SHA `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`.
If and only if PASS, ChatGPT may recommend the distinct gate:
`GO MORRIS — GREENFIELD CORRECTIVE BOUNDED LIVE REPLAY`
(that gate is NOT consumed by this pack).
