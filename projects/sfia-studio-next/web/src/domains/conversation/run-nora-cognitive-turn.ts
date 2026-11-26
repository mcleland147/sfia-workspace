/**
 * C16/C17 — product entry into the adaptive D3 cognitive conductor.
 * generateNoraReply remains the provider adapter; this module orchestrates
 * cognitive work attachment, multi-segment continuation, and investigation merge.
 */

import {
  runCognitiveConductor,
  type ConductorRunResult,
} from "./cognitive-conductor";
import { buildCognitivePolicy } from "./cognitive-policy";
import {
  cognitiveEnvelopeLimits,
  getCognitiveWork,
  listCognitiveWorksForPreparation,
  type CognitiveProductionState,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  canonicalSourcePathKey,
  createEmptyInvestigation,
  evaluateContractReadiness,
  upsertConclusion,
  type DeterminingQuestion,
  type InvestigationState,
} from "./investigation-state";
import {
  generateNoraReply,
  type NoraGenerateInput,
  type NoraGenerateResult,
} from "./nora-adapter";
import { resolvePublicWebRegistry } from "./public-web-registry";
import {
  composeInvestigationPartialRestitution,
  formatInvestigationContinuationContext,
  scaleSegmentCharBudget,
} from "./investigation-continuation";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  unavailableQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";
import {
  consolidateAttachedDossierQuestions,
  isDossierJoinQuestion,
  parseStructuredDossierComposerAttachment,
} from "./dossier-composer-attachment";

export type NoraCognitiveTurnInput = NoraGenerateInput & {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  turnCommandId?: string | null;
  /** Explicit continuation of a prior suspended/open work. */
  workId?: string | null;
  /** When true, always open a new cognitive work (independent request). */
  forceNewWork?: boolean;
  objective?: string;
  expectedOutcome?: string;
  maxSegmentsThisInvocation?: number;
};

export type NoraCognitiveTurnResult = NoraGenerateResult & {
  conductor: {
    workId: string;
    revision: number;
    segmentsRun: number;
    resumed: boolean;
    suspended: boolean;
    suspendReason: string | null;
    investigation: InvestigationState;
    production: CognitiveProductionState;
  };
};

/** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
function usageFromReply(reply: NoraGenerateResult): {
  inputTokens: number | null;
  outputTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
  providerRequests: number | null;
} {
  const u = reply.usage;
  const anyReply = reply as NoraGenerateResult & {
    inputTokens?: number | null;
    outputTokens?: number | null;
  };
  const input = u?.inputTokens ?? anyReply.inputTokens ?? null;
  const output = u?.outputTokens ?? anyReply.outputTokens ?? null;
  return {
    inputTokens: typeof input === "number" ? input : null,
    outputTokens: typeof output === "number" ? output : null,
    reasoningTokens:
      typeof u?.reasoningTokens === "number" ? u.reasoningTokens : null,
    cachedInputTokens:
      typeof u?.cachedInputTokens === "number" ? u.cachedInputTokens : null,
    providerRequests:
      typeof u?.providerRequests === "number" ? u.providerRequests : null,
  };
}

/**
 * C18 — merge determining questions from structured qualification only.
 * Never invent ANSWERED from user prose or absence of clarifications[].
 * C24 — when a structured D8 dossier is already attached in userText, do not
 * leave OPEN determinant questions that only ask to re-attach that dossier.
 */
export function mergeQuestions(
  prior: DeterminingQuestion[],
  qualification: NoraTurnQualification | null | undefined,
  userText?: string | null,
): DeterminingQuestion[] {
  const byId = new Map(prior.map((q) => [q.id, { ...q }]));
  const attached = userText
    ? parseStructuredDossierComposerAttachment(userText)
    : null;
  const structured = qualification?.determiningQuestions;
  if (structured && structured.length > 0) {
    for (const q of structured) {
      const id = q.id.trim();
      if (!id) continue;
      const prev = byId.get(id);
      byId.set(id, {
        id,
        text: q.text.trim() || prev?.text || id,
        status: q.status,
        importance: q.importance,
        answerSummary:
          q.status === "ANSWERED"
            ? q.answerSummary?.trim() || prev?.answerSummary
            : q.answerSummary?.trim() || undefined,
        sourceRefs: q.sourceRefs ?? prev?.sourceRefs,
      });
    }
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  const clarifications =
    qualification && qualification.status !== "UNAVAILABLE"
      ? qualification.clarifications
      : undefined;
  if (clarifications === undefined) {
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  if (clarifications.length === 0) {
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  for (const text of clarifications) {
    const trimmed = text.trim();
    if (!trimmed) continue;
    const existing = [...byId.values()].find((q) => q.text === trimmed);
    if (existing) continue;
    const id = `q-${stableShortId(trimmed)}`;
    // C24: dossier already in composer → do not open a determinant "joindre" question.
    if (attached && isDossierJoinQuestion(trimmed)) {
      byId.set(id, {
        id,
        text: trimmed,
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: `Dossier D8 déjà joint (attemptId=${attached.attemptId})`,
        sourceRefs: [`attempt:${attached.attemptId}`],
      });
      continue;
    }
    byId.set(id, {
      id,
      text: trimmed,
      status: "OPEN",
      importance: "DETERMINANT",
    });
  }
  return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
}

function stableShortId(text: string): string {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 10);
}

function mergeRemainingWork(
  prior: InvestigationState,
  qualification: NoraTurnQualification | null | undefined,
): string[] {
  const items = qualification?.remainingWorkItems;
  if (items && items.length > 0) {
    return items
      .filter((i) => i.status === "OPEN" || i.status === "BLOCKED")
      .map((i) => i.text.trim())
      .filter(Boolean);
  }
  return [...prior.remainingWork];
}

/**
 * C18 — consolidate investigation from structured qualification + observed tools.
 * No lexical criteria extraction. No prose→instruction fallback.
 */
export function mergeInvestigationFromReply(
  prior: InvestigationState,
  reply: NoraGenerateResult,
  userText: string,
): InvestigationState {
  const q = reply.qualification;
  const goal =
    q && q.status !== "UNAVAILABLE" ? q.goal?.trim() || "" : "";
  const outcome =
    q && q.status !== "UNAVAILABLE" ? q.desiredOutcome?.trim() || "" : "";
  const scope =
    q && q.status !== "UNAVAILABLE" ? q.initialScope?.trim() || "" : "";

  const sources = [...prior.sources];
  for (const s of reply.observedToolSources ?? []) {
    const idx = sources.findIndex((p) => p.ref === s.ref && p.kind === s.kind);
    if (idx < 0) sources.push(s);
    else {
      const prev = sources[idx]!;
      sources[idx] = {
        ...prev,
        ...s,
        notes: [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
          .filter(Boolean)
          .join("; "),
      };
    }
  }

  const questions = mergeQuestions(prior.questions, q, userText);
  const remainingWork = mergeRemainingWork(prior, q);

  const constraints = [...prior.constraints];
  if (scope && !constraints.includes(scope)) constraints.push(scope);
  for (const r of q?.restrictions ?? []) {
    const t = r.trim();
    if (t && !constraints.includes(t)) constraints.push(t);
  }

  const contradictions = [
    ...prior.contradictions,
    ...((q?.contradictions ?? []).map((c) => ({
      a: c.a,
      b: c.b,
      detail: c.detail,
    })) as InvestigationState["contradictions"]),
  ].slice(-16);

  // C18: prefer typed tool submission, then intent parameters, then top-level fields.
  const toolProd = reply.cursorContractProduction;
  const prepareIntent = q?.intents?.find(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
  );
  const productionInstruction =
    toolProd?.productionInstruction?.trim() ||
    prepareIntent?.parameters?.productionInstruction?.trim() ||
    q?.productionInstruction?.trim() ||
    prior.productionInstruction ||
    null;
  const fromToolCriteria = toolProd?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const fromIntentCriteria = prepareIntent?.parameters?.acceptanceCriteria
    ?.map((c) => c.trim())
    .filter(Boolean);
  const fromTopCriteria = q?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const acceptanceCriteria =
    fromToolCriteria && fromToolCriteria.length > 0
      ? fromToolCriteria
      : fromIntentCriteria && fromIntentCriteria.length > 0
        ? fromIntentCriteria
        : fromTopCriteria && fromTopCriteria.length > 0
          ? fromTopCriteria
          : [...(prior.acceptanceCriteria ?? [])];
  // Tool submission may also carry desiredOutcome when qualification omitted it.
  const desiredFromTool = toolProd?.desiredOutcome?.trim() || "";

  const profileHint: InvestigationState["profileHint"] =
    q?.cognitiveProfileHint ??
    (q?.status === "NEEDS_CLARIFICATION"
      ? "investigation"
      : prior.profileHint === "simple"
        ? "analyse"
        : prior.profileHint);

  const desiredOutcome = outcome || desiredFromTool || prior.desiredOutcome || "";

  // RB-30 — capitalize answered determinant questions + explicit findings as conclusions.
  // C1 — consolidate near-duplicates; keep real contradictions as separate entries.
  let conclusions = [...(prior.conclusions ?? [])];
  for (const qq of questions) {
    if (qq.status === "ANSWERED" && qq.answerSummary?.trim()) {
      conclusions = upsertConclusion(
        conclusions,
        `${qq.text.slice(0, 120)} → ${qq.answerSummary.trim().slice(0, 400)}`,
      );
    }
  }
  if (desiredOutcome && desiredOutcome.length >= 20) {
    conclusions = upsertConclusion(
      conclusions,
      `Résultat consolidé: ${desiredOutcome.slice(0, 400)}`,
    );
  }
  const draft = (q?.replyDraft ?? reply.content ?? "").trim();
  if (
    draft.length >= 80 &&
    (questions.some((x) => x.status === "ANSWERED") ||
      sources.some((s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED"))
  ) {
    conclusions = upsertConclusion(conclusions, `Synthèse: ${draft.slice(0, 600)}`);
  }

  // B2 — perimeter from prior keys or technical parse of listed paths (not keyword/count).
  // Semantic mode comes from structured qualification — never from "50"/"intégralement".
  const investigationMode =
    q?.investigationMode ?? prior.investigationMode ?? null;
  const listedPaths = [
    ...userText.matchAll(
      /(?:^|\n)\s*([^\n]+?\.(?:md|txt|ts|tsx|js|jsx|json|yml|yaml|sql|prisma|mjs|cjs))\s*(?=\n|$)/gi,
    ),
  ]
    .map((m) => m[1]!.trim())
    .filter((p) => p.length > 2 && !/\s{3,}/.test(p) && !/^https?:/i.test(p));
  const uniqueListedKeys = [
    ...new Set(listedPaths.map((p) => canonicalSourcePathKey(p)).filter(Boolean)),
  ];
  let inventoryKeys = [...(prior.inventoryKeys ?? [])];
  if (inventoryKeys.length === 0 && uniqueListedKeys.length >= 2) {
    inventoryKeys = uniqueListedKeys;
  } else if (
    inventoryKeys.length > 0 &&
    uniqueListedKeys.length > 0 &&
    (investigationMode === "EXHAUSTIVE" || investigationMode === "TARGETED")
  ) {
    // Fixed perimeter: do not silently grow from discoveries; allow explicit listed keys.
    const set = new Set(inventoryKeys);
    for (const k of uniqueListedKeys) if (!set.has(k)) inventoryKeys.push(k);
  }
  const perimeterFixed =
    inventoryKeys.length >= 2 &&
    (investigationMode === "EXHAUSTIVE" ||
      investigationMode === "TARGETED" ||
      (prior.inventoryTotal != null && prior.inventoryKeys != null));
  let inventoryTotal = prior.inventoryTotal ?? null;
  if (perimeterFixed) {
    inventoryTotal = inventoryKeys.length;
  } else if (
    inventoryTotal == null &&
    investigationMode === "OPEN" &&
    sources.filter((s) => s.coverage !== "DISCOVERED").length >= 2
  ) {
    // Open investigation: total tracks distinct content-bearing sources, may grow.
    inventoryTotal = new Set(
      sources
        .filter((s) =>
          ["CONSULTED", "VERIFIED", "PARTIAL", "DENIED"].includes(s.coverage),
        )
        .map((s) => canonicalSourcePathKey(s.ref))
        .filter(Boolean),
    ).size;
  }

  const coverageByKey = new Map<string, InvestigationState["sources"][number]["coverage"]>();
  for (const s of sources) {
    const key = canonicalSourcePathKey(s.ref);
    if (!key) continue;
    const prev = coverageByKey.get(key);
    const rank = (c: string) =>
      c === "VERIFIED" ? 4 : c === "CONSULTED" ? 3 : c === "PARTIAL" ? 2 : c === "DENIED" ? 1 : 0;
    if (!prev || rank(s.coverage) > rank(prev)) coverageByKey.set(key, s.coverage);
  }
  const keysToScore =
    inventoryKeys.length > 0 ? inventoryKeys : [...coverageByKey.keys()];
  let inventoryExamined = 0;
  let inventoryPartial = 0;
  let inventoryDenied = 0;
  for (const key of keysToScore) {
    const c = coverageByKey.get(key);
    if (c === "CONSULTED" || c === "VERIFIED") inventoryExamined += 1;
    else if (c === "PARTIAL") inventoryPartial += 1;
    else if (c === "DENIED") inventoryDenied += 1;
  }
  // Perimeter "resolved" = full read OR honest access denial (not PARTIAL).
  const inventoryResolved = inventoryExamined + inventoryDenied;
  const nextRemaining = [...remainingWork];
  if (
    perimeterFixed &&
    inventoryTotal != null &&
    inventoryResolved < inventoryTotal &&
    q?.investigationSufficiency !== "SUFFICIENT" &&
    q?.workDisposition !== "COMPLETE" &&
    !nextRemaining.some((w) => /couverture périmètre|sources restantes/i.test(w))
  ) {
    const pending = inventoryTotal - inventoryResolved;
    nextRemaining.push(
      `Couverture périmètre ${inventoryResolved}/${inventoryTotal} (${inventoryPartial} partielles, ${pending} restantes) — poursuivre les sources non résolues`,
    );
  }

  const evaluated = evaluateContractReadiness({
    ...prior,
    intentSummary: goal || prior.intentSummary || userText.slice(0, 800),
    desiredOutcome,
    sources,
    questions,
    remainingWork: nextRemaining,
    contradictions,
    constraints,
    profileHint,
    productionInstruction,
    acceptanceCriteria,
    conclusions: conclusions.slice(-24),
    inventoryTotal,
    inventoryExamined,
    inventoryKeys: inventoryKeys.length > 0 ? inventoryKeys : prior.inventoryKeys ?? null,
    inventoryDenied,
    inventoryPartial,
    investigationMode,
  });
  // D1 — Nora's objective sufficiency is distinct from D4 contract READY.
  // Preserve SUFFICIENT for termination even when contract criteria are unmet.
  if (
    q?.investigationSufficiency === "SUFFICIENT" &&
    evaluated.sufficiency !== "BUDGET_EXHAUSTED" &&
    evaluated.sufficiency !== "BLOCKED_BY_UNKNOWN_RESTRICTION"
  ) {
    return { ...evaluated, sufficiency: "SUFFICIENT" };
  }
  if (
    q?.investigationSufficiency === "INSUFFICIENT" &&
    evaluated.sufficiency === "UNKNOWN"
  ) {
    return { ...evaluated, sufficiency: "INSUFFICIENT" };
  }
  return evaluated;
}

/**
 * Resolved perimeter coverage: full reads + honest DENIED access terminals.
 * PARTIAL never counts as resolved.
 */
export function inventoryResolvedCount(investigation: InvestigationState): number {
  const examined = investigation.inventoryExamined ?? 0;
  const denied = investigation.inventoryDenied ?? 0;
  return examined + denied;
}

/**
 * C18 / D3 — continuation by structured disposition + sufficiency.
 * Incomplete coverage must NOT cancel legitimate AWAIT_PILOT / SUSPEND / COMPLETE.
 * No scenario-specific thresholds (removed examined≥50 near-complete exception).
 */
export function semanticContinueWork(
  qualification: NoraTurnQualification | null,
  investigation: InvestigationState,
  reply: NoraGenerateResult,
): boolean {
  if (
    investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
    (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  ) {
    return false;
  }
  // D3 — explicit terminal dispositions always win over inventory gaps.
  const disposition = qualification?.workDisposition;
  if (
    disposition === "COMPLETE" ||
    disposition === "AWAIT_PILOT" ||
    disposition === "SUSPEND"
  ) {
    return false;
  }
  if (qualification?.status === "NEEDS_CLARIFICATION") {
    return false;
  }
  // D1 — Nora-declared sufficiency ends investigation (restitution, not more reads).
  if (
    qualification?.investigationSufficiency === "SUFFICIENT" ||
    investigation.sufficiency === "SUFFICIENT"
  ) {
    return disposition === "CONTINUE";
  }

  const total = investigation.inventoryTotal;
  const resolved = inventoryResolvedCount(investigation);
  const inventoryIncomplete =
    total != null && total > 0 && resolved < total;
  const hasAcquis =
    (reply.observedToolSources?.length ?? 0) > 0 ||
    investigation.sources.some((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL", "DISCOVERED"].includes(s.coverage),
    );

  // Soft provider interrupt with unfinished perimeter — AWAIT/SUSPEND/COMPLETE already returned.
  if (inventoryIncomplete && hasAcquis && reply.status !== "COMPLETE") {
    return true;
  }
  if (reply.status !== "COMPLETE") return false;

  if (disposition === "CONTINUE") return true;

  // Unset disposition + incomplete fixed perimeter → continue useful reads.
  if (
    inventoryIncomplete &&
    (hasAcquis || resolved === 0) &&
    (disposition == null || disposition === "CONTINUE")
  ) {
    return true;
  }

  const openDeterminant = investigation.questions.some(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  if (openDeterminant) {
    return (reply.observedToolSources?.length ?? 0) > 0;
  }
  if (investigation.remainingWork.length > 0) return true;
  return false;
}

/**
 * C18 — semantic attachment: Nora may propose relation/workId; server validates.
 */
export async function resolveCognitiveWorkAttachment(input: {
  pilotId: string;
  preparationId: string;
  workId?: string | null;
  forceNewWork?: boolean;
  userText?: string | null;
  qualification?: NoraTurnQualification | null;
}): Promise<{
  workId?: string | null;
  forceNew: boolean;
  reason: string;
  /** C20 — do not create/claim; await pilot clarification. */
  needsClarify?: boolean;
  /** B4 — prior work id when forking a new envelope that reuses acquis. */
  parentWorkId?: string | null;
}> {
  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  // C2 — pick parent by acquis relevance to this request, not revision count alone.
  const priorWithAcquis = works.filter(
    (w) =>
      (w.state.conclusions?.length ?? 0) > 0 ||
      w.state.sources.some((s) =>
        ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
      ),
  );
  const relevanceQuery = [
    input.userText ?? "",
    input.qualification?.goal ?? "",
    input.qualification?.desiredOutcome ?? "",
  ]
    .join(" ")
    .toLowerCase();
  const scoreParent = (w: (typeof works)[number]): number => {
    let score = 0;
    const intent = (w.state.intentSummary || w.objective || "").toLowerCase();
    const outcome = (w.state.desiredOutcome || w.expectedOutcome || "").toLowerCase();
    if (intent && relevanceQuery.includes(intent.slice(0, 48))) score += 8;
    if (outcome && relevanceQuery.includes(outcome.slice(0, 48))) score += 6;
    // Token overlap on conclusions / objective (cheap, no second LLM).
    const bag = `${intent} ${outcome} ${(w.state.conclusions ?? []).join(" ")}`.toLowerCase();
    const tokens = relevanceQuery
      .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
      .filter((t) => t.length >= 5)
      .slice(0, 24);
    for (const t of tokens) {
      if (bag.includes(t)) score += 1;
    }
    score += Math.min(4, w.state.conclusions?.length ?? 0);
    score += Math.min(
      4,
      w.state.sources.filter((s) =>
        ["CONSULTED", "VERIFIED"].includes(s.coverage),
      ).length,
    );
    // Mild revision tie-break only after relevance.
    score += Math.min(2, Math.floor(w.revision / 10));
    return score;
  };
  const rankedParents = [...priorWithAcquis].sort((a, b) => {
    const d = scoreParent(b) - scoreParent(a);
    return d !== 0 ? d : b.revision - a.revision;
  });
  const provenanceParent = rankedParents[0]?.id ?? null;

  if (input.forceNewWork === true) {
    return {
      forceNew: true,
      reason: "FORCE_NEW_EXPLICIT",
      // B4 — explicit new work still inherits provenance when prior acquis exist.
      parentWorkId: provenanceParent,
    };
  }
  if (input.workId) {
    return { workId: input.workId, forceNew: false, reason: "EXPLICIT_WORK_ID" };
  }

  const relation = input.qualification?.cognitiveWorkRelation;
  const proposed = input.qualification?.proposedCognitiveWorkId?.trim() || null;

  if (relation === "INDEPENDENT" || relation === "MATERIAL_CHANGE" || relation === "UNRELATED") {
    return {
      forceNew: true,
      reason: `SEMANTIC_${relation}`,
      parentWorkId: provenanceParent ?? proposed,
    };
  }

  // RB-31 / RB-27 — new document production after a completed / exhausted analysis
  // is a distinct cognitive work (own envelope). Never auto-continue a saturated work
  // for a create_document effect; Nora may still CONTINUE for true follow-up.
  // A — document-from-prior is driven by structured intents / relation, never lexical regex.
  const wantsCreateDoc = (input.qualification?.intents ?? []).some(
    (i) =>
      i.capabilityId === "d4.create_document" &&
      (i.mode === "REQUEST_EFFECT" || i.mode === "PREPARE"),
  );
  // INDEPENDENT / MATERIAL_CHANGE already returned above; here only create_document fork.
  const semanticNewFromPrior =
    wantsCreateDoc &&
    (relation === "CONTINUE" || relation == null) &&
    priorWithAcquis.length > 0;
  const { maxTokens: envelopeMax } = cognitiveEnvelopeLimits();
  const saturatedFloor = Math.max(190_000, Math.floor(envelopeMax * 0.95));
  const exhausted = works.filter(
    (w) =>
      (w.status === "SUSPENDED" || w.status === "COMPLETE" || w.status === "FAILED") &&
      (w.interruptCause === "GLOBAL_TOKEN_BUDGET_EXHAUSTED" ||
        w.interruptCause === "GLOBAL_SEGMENT_BUDGET_EXHAUSTED" ||
        w.interruptCause === "GLOBAL_BUDGET_EXHAUSTED" ||
        (w.resources.inputTokens ?? 0) + (w.resources.outputTokens ?? 0) >= saturatedFloor),
  );
  const proposedExhausted = proposed ? exhausted.some((w) => w.id === proposed) : false;
  // Fork document production off an exhausted / saturated prior work even when Nora
  // incorrectly marks CONTINUE + proposedCognitiveWorkId toward that envelope.
  if (
    wantsCreateDoc &&
    exhausted.length > 0 &&
    (!relation || relation === "CONTINUE" || proposedExhausted)
  ) {
    const exhaustedRanked = [...exhausted].sort((a, b) => {
      const d = scoreParent(b) - scoreParent(a);
      return d !== 0 ? d : b.revision - a.revision;
    });
    return {
      forceNew: true,
      reason: "NEW_PRODUCTION_FROM_PRIOR_ACQUIS",
      parentWorkId: exhaustedRanked[0]?.id ?? provenanceParent ?? proposed,
    };
  }
  if (semanticNewFromPrior && priorWithAcquis.length > 0) {
    return {
      forceNew: true,
      reason: "NEW_PRODUCTION_FROM_PRIOR_ACQUIS",
      parentWorkId: provenanceParent,
    };
  }
  if (relation === "CONTINUE" && exhausted.length > 0 && !proposed) {
    // Refuse blind resume of a saturated envelope — pilot/Nora must fork or clarify.
    if (exhausted.length === 1 && works.filter((w) => w.status === "OPEN" || w.status === "RUNNING" || w.status === "SUSPENDED").length === 1) {
      return {
        forceNew: false,
        workId: null,
        reason: "EXHAUSTED_WORK_NEEDS_FORK_OR_CLARIFY",
        needsClarify: true,
      };
    }
  }

  if (relation === "CLARIFY") {
    if (proposed && works.some((w) => w.id === proposed)) {
      return { workId: proposed, forceNew: false, reason: "SEMANTIC_CLARIFY_ATTACH" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_CLARIFY_AWAIT",
      needsClarify: true,
    };
  }
  if ((relation === "CONTINUE" || relation === "CLARIFY") && proposed) {
    const hit = works.find((w) => w.id === proposed);
    if (hit) {
      if (exhausted.some((w) => w.id === hit.id)) {
        // Never re-enter a saturated envelope via proposed CONTINUE.
        return {
          forceNew: false,
          workId: null,
          reason: "EXHAUSTED_WORK_NEEDS_FORK_OR_CLARIFY",
          needsClarify: true,
        };
      }
      return { workId: hit.id, forceNew: false, reason: "SEMANTIC_PROPOSED_WORK" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_PROPOSED_UNKNOWN",
      needsClarify: true,
    };
  }

  // C20: technical suspend resume only when Nora explicitly CONTINUEs.
  const segmentSuspended = works.filter(
    (w) =>
      w.status === "SUSPENDED" &&
      (w.interruptCause === "SEGMENT_INVOCATION_LIMIT" ||
        w.interruptCause === "PROCESS_OR_LEASE_INTERRUPT" ||
        (w.interruptCause ?? "").startsWith("SEGMENT")),
  );
  if (relation === "CONTINUE" && segmentSuspended.length === 1 && !proposed) {
    return {
      workId: segmentSuspended[0]!.id,
      forceNew: false,
      reason: "TECHNICAL_SUSPEND_RESUME",
    };
  }

  // C19: never deduce continuation from sole open presence without CONTINUE.
  const open = works.filter(
    (w) => w.status === "OPEN" || w.status === "SUSPENDED" || w.status === "RUNNING",
  );
  if (relation === "CONTINUE") {
    if (proposed) {
      const hit = works.find((w) => w.id === proposed);
      if (hit) return { workId: hit.id, forceNew: false, reason: "SEMANTIC_CONTINUE_PROPOSED" };
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_UNKNOWN_ID",
        needsClarify: true,
      };
    }
    if (open.length === 1) {
      return { workId: open[0]!.id, forceNew: false, reason: "SEMANTIC_CONTINUE_SINGLE" };
    }
    if (open.length > 1) {
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_AMBIGUOUS",
        needsClarify: true,
      };
    }
  }
  if (open.length > 1 && !proposed) {
    return {
      forceNew: false,
      workId: null,
      reason: "AMBIGUOUS_MULTI_OPEN",
      needsClarify: true,
    };
  }
  // Without structured relation, do not auto-attach to an open work.
  return { forceNew: true, reason: "NEW_OR_NEEDS_SEMANTIC_RELATION" };
}

/**
 * C22 — merge document production using structured mergeMode from Nora.
 * Exported for unit tests against the real owner function (not a copy).
 * Never derive SUPERSEDE from heading count or length alone.
 */
export function mergeDocumentProductionBody(input: {
  prevDoc: string;
  incoming: string;
  mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  workDisposition?: string | null;
  continueWork: boolean;
}): { contentMarkdown: string; appliedMode: "APPEND" | "CORRECT" | "SUPERSEDE" | "IDENTITY" } {
  const body = input.incoming.trim();
  const prev = (input.prevDoc ?? "").trim();
  if (!prev) return { contentMarkdown: body, appliedMode: "IDENTITY" };
  if (prev.includes(body) && body.length < prev.length) {
    return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  const explicit = input.mergeMode ?? null;
  // SUPERSEDE only when Nora declares it, or COMPLETE + explicit SUPERSEDE.
  if (explicit === "SUPERSEDE") {
    return { contentMarkdown: body, appliedMode: "SUPERSEDE" };
  }
  if (explicit === "CORRECT") {
    // Correction replaces prior body when disposition is COMPLETE; else append note.
    if (!input.continueWork || input.workDisposition === "COMPLETE") {
      return { contentMarkdown: body, appliedMode: "CORRECT" };
    }
    return {
      contentMarkdown: `${prev}\n\n<!-- correction -->\n\n${body}`.trim(),
      appliedMode: "CORRECT",
    };
  }
  // Default APPEND — mid-work continuity. Avoid duplicating identical prefix dumps.
  if (body.includes(prev.slice(0, Math.min(200, prev.length))) && body.length >= prev.length) {
    // Incoming already contains prior — treat as Nora-provided consolidated body only
    // when mergeMode SUPERSEDE was omitted but workDisposition COMPLETE *and*
    // qualification marked document as superseding via workDisposition alone is insufficient.
    // C22: stay APPEND unless explicit SUPERSEDE — keep prior + novel tail if any.
    if (body === prev) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  if (prev.includes(body)) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  return {
    contentMarkdown: `${prev}\n\n${body}`.trim(),
    appliedMode: "APPEND",
  };
}

/**
 * Cognitive work continuity ≠ documentary production continuity.
 * A completed DOCUMENT body must not be concatenated into a later CREATE/REVISE
 * proposal in the same cognitive work. Mid-work IN_PROGRESS segments still APPEND.
 * Never inferred from heading count — driven by capability intents + prior status.
 */
export function resolveDocumentaryProductionBoundary(input: {
  previous: Pick<CognitiveProductionState, "kind" | "status" | "contentMarkdown"> | null | undefined;
  capabilityIds?: string[] | null;
  explicitMergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
}): { startNew: boolean; reason: string } {
  const prev = input.previous;
  const prevHasBody = Boolean(prev?.contentMarkdown?.trim());
  const prevClosedDoc =
    prev?.kind === "DOCUMENT" &&
    prevHasBody &&
    (prev.status === "COMPLETE" || prev.status === "PARTIAL" || prev.status === "FAILED");
  const caps = new Set((input.capabilityIds ?? []).map((c) => c.trim()).filter(Boolean));
  const isRevise = caps.has("d4.revise_document");
  const isCreate = caps.has("d4.create_document");
  if (input.explicitMergeMode === "SUPERSEDE" && prevHasBody) {
    return { startNew: true, reason: "EXPLICIT_SUPERSEDE" };
  }
  if (prevClosedDoc && isRevise) {
    return { startNew: true, reason: "REVISE_AFTER_PRIOR_DOCUMENT" };
  }
  if (prevClosedDoc && isCreate) {
    return { startNew: true, reason: "CREATE_AFTER_PRIOR_DOCUMENT" };
  }
  return { startNew: false, reason: "CONTINUE_SAME_PRODUCTION" };
}

function documentProductionFromReply(
  work: CognitiveWorkRow,
  reply: NoraGenerateResult,
  segmentIndex: number,
  continueWork: boolean,
): CognitiveProductionState | undefined {
  const prevDoc =
    (work.production as CognitiveProductionState & { contentMarkdown?: string })
      .contentMarkdown ?? "";
  // Soft segment boundaries are conductor control messages — never document body.
  if (
    String(reply.streamingNotes || "").includes("SEGMENT_MAX_TURNS_BOUNDARY") ||
    /^Segment technique atteint/i.test((reply.content || "").trim())
  ) {
    return work.production?.kind === "DOCUMENT" || work.production?.kind === "SYNTHESIS"
      ? { ...work.production, status: continueWork ? "IN_PROGRESS" : work.production.status }
      : undefined;
  }
  // C19: part ids are stable across invocations — never collide on local segmentIndex 0.
  const partId = `gen-${reply.generationId || `seg-${work.revision}-${segmentIndex}`}`;
  const appendPart = (
    parts: CognitiveProductionState["parts"],
    title: string,
    complete: boolean,
  ) => [...parts.filter((p) => p.id !== partId), { id: partId, title, complete }];

  const proposal = reply.qualification?.documentProposal;
  if (proposal?.contentMarkdown?.trim()) {
    const capabilityIds = (reply.qualification?.intents ?? [])
      .map((i) => String(i.capabilityId || ""))
      .filter((id) => id.length > 0);
    const boundary = resolveDocumentaryProductionBoundary({
      previous: work.production,
      capabilityIds,
      explicitMergeMode: proposal.mergeMode ?? null,
    });
    const mergeMode =
      proposal.mergeMode ??
      (boundary.startNew ? ("SUPERSEDE" as const) : null);
    const merged = mergeDocumentProductionBody({
      prevDoc: boundary.startNew ? "" : prevDoc,
      incoming: proposal.contentMarkdown,
      mergeMode,
      workDisposition: reply.qualification?.workDisposition ?? null,
      continueWork,
    });
    // Empty-prev merge reports IDENTITY; stamp SUPERSEDE when we intentionally
    // opened a new documentary production so C20 / observability stay honest.
    const appliedMode =
      boundary.startNew && merged.appliedMode === "IDENTITY"
        ? ("SUPERSEDE" as const)
        : merged.appliedMode;
    const partTitle =
      proposal.title || `document-part-${work.production.parts.length + 1}`;
    const parts = boundary.startNew
      ? [{ id: partId, title: partTitle, complete: !continueWork }]
      : appendPart(work.production.parts, partTitle, !continueWork);
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: boundary.startNew
        ? reply.generationId
        : work.production.objectRef || reply.generationId,
      parts,
      contentMarkdown: merged.contentMarkdown,
      limits: [
        `MERGE_MODE_${appliedMode}`,
        ...(boundary.startNew
          ? [`DOCUMENTARY_PRODUCTION_NEW:${boundary.reason}`]
          : [`DOCUMENTARY_PRODUCTION:${boundary.reason}`]),
      ],
    } as CognitiveProductionState;
  }
  // C19: Markdown fence is transport/legacy only — never authority that replaces
  // structured production. Preserve prior DOCUMENT on resume.
  const extracted = reply.content.match(/```sfia-document\b([\s\S]*?)```/i);
  if (extracted && !prevDoc) {
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: reply.generationId,
      parts: appendPart(
        work.production.parts,
        `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: extracted[1]!.trim(),
      limits: ["MARKDOWN_FENCE_TRANSPORT_ONLY"],
    } as CognitiveProductionState;
  }
  if (work.production.kind === "DOCUMENT" && prevDoc) {
    return {
      ...work.production,
      status: continueWork ? "IN_PROGRESS" : work.production.status,
      parts: appendPart(
        work.production.parts,
        reply.generationId,
        !continueWork,
      ),
    };
  }
  // RB-30 — persist reply body as durable production so restitution / note reuse
  // can recover conclusions even when investigation.questions stayed empty.
  const replyBody = (reply.content || "").trim();
  return {
    kind: "REPLY",
    status: continueWork ? "IN_PROGRESS" : "COMPLETE",
    objectRef: reply.generationId,
    parts: appendPart(work.production.parts, reply.generationId, !continueWork),
    contentMarkdown: replyBody
      ? [prevDoc, replyBody].filter(Boolean).join("\n\n").trim()
      : prevDoc || null,
    limits: continueWork ? ["PRODUCTION_IN_PROGRESS"] : undefined,
  };
}

/**
 * Run Nora through the cognitive conductor for a product turn.
 */
export async function runNoraCognitiveTurn(
  input: NoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const segmentBox: { reply: NoraGenerateResult | null } = { reply: null };

  // C19: expose candidate works so Nora can emit cognitiveWorkRelation / proposed id.
  const candidates = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const candidateSnippet =
    candidates.length === 0
      ? "Travaux cognitifs candidats: (aucun)"
      : [
          "Travaux cognitifs candidats (serveur valide; ne pas inventer d'id):",
          ...candidates.slice(0, 8).map(
            (w) =>
              `- ${w.id} status=${w.status} rev=${w.revision} obj=${(w.objective || "").slice(0, 120)}`,
          ),
          "Émettre cognitiveWorkRelation=CONTINUE|INDEPENDENT|CLARIFY|MATERIAL_CHANGE|UNRELATED et proposedCognitiveWorkId si rattachement.",
        ].join("\n");

  let attachment: Awaited<ReturnType<typeof resolveCognitiveWorkAttachment>>;
  let probeReply: NoraGenerateResult | null = null;
  let probeConsumed = false;

  // C19: when attachment is not forced/explicit, qualify first then resolve with structured fields.
  if (!input.workId && input.forceNewWork !== true) {
    const probePolicy =
      input.policyOverride ??
      buildCognitivePolicy(input.userText, undefined, { profileHint: "analyse" });
    probeReply = await generateNoraReply({
      userText: input.userText,
      contextSnippets: [...input.contextSnippets, candidateSnippet, "attachment=PENDING_SEMANTIC"],
      knowledgeSnippets: input.knowledgeSnippets,
      pilotageSnippets: input.pilotageSnippets,
      levelASignals: input.levelASignals,
      ckiDelivery: input.ckiDelivery,
      onProvisionalChunk: input.onProvisionalChunk,
      toolScope: input.toolScope,
      policyOverride: probePolicy,
    });
    segmentBox.reply = probeReply;
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
      qualification: probeReply.qualification,
    });
  } else {
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
    });
  }

  // C20: ambiguity / clarify — do not invent a new cognitive work; return AWAIT_PILOT.
  if (attachment.needsClarify) {
    const clarifyText =
      "Plusieurs travaux cognitifs sont candidats. Précisez lequel continuer (identifiant) ou confirmez une demande indépendante.";
    const basePolicy = buildCognitivePolicy(input.userText, undefined, {
      profileHint: "analyse",
    });
    const clarify: NoraGenerateResult = probeReply
      ? {
          ...probeReply,
          content: probeReply.content?.trim() || clarifyText,
          status: "COMPLETE",
        }
      : {
          content: clarifyText,
          status: "COMPLETE",
          generationId: `clarify-${Date.now()}`,
          mode: "deterministic-fixture",
          policy: basePolicy,
          modelRequested: basePolicy.modelRequested,
          modelApplied: null,
          effortRequested: basePolicy.effortRequested,
          effortApplied: null,
          attempts: [],
          toolCallsObserved: 0,
          d4CharsReturned: 0,
          observedToolSources: [],
          qualification: unavailableQualification(
            "CLARIFY_COGNITIVE_WORK_ATTACHMENT",
            clarifyText,
          ),
        };
    const q: NoraTurnQualification = {
      ...clarify.qualification,
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION",
      workDisposition: "AWAIT_PILOT",
      cognitiveWorkRelation: "CLARIFY",
      replyDraft:
        clarify.qualification.replyDraft ||
        clarify.content ||
        clarifyText,
    };
    return {
      ...clarify,
      content: clarify.content,
      qualification: q,
      status: "COMPLETE",
      conductor: {
        workId: "",
        revision: 0,
        segmentsRun: probeReply ? 1 : 0,
        resumed: false,
        suspended: false,
        suspendReason: null,
        investigation: {
          ...createEmptyInvestigation(input.userText),
          remainingWork: ["CLARIFY_COGNITIVE_WORK_ATTACHMENT"],
        },
        production: { kind: "REPLY", status: "PARTIAL", parts: [] },
      },
    };
  }

  // Adaptive local segment budget — technical per-invocation cap, not global envelope.
  // A — profile / breadth from structured qualification only (never keyword "50"/exhausti).
  const semanticProfile =
    probeReply?.qualification?.cognitiveProfileHint ??
    (probeReply?.qualification?.investigationMode === "EXHAUSTIVE" ||
    probeReply?.qualification?.investigationMode === "OPEN"
      ? "investigation"
      : undefined);
  const defaultLocalSegments = (() => {
    if (input.maxSegmentsThisInvocation != null) return input.maxSegmentsThisInvocation;
    const seed = input.objective ?? input.userText;
    const hint =
      semanticProfile ?? buildCognitivePolicy(seed).profile;
    if (hint === "investigation") return 40;
    if (hint === "analyse") return 12;
    return 3;
  })();

  const runConductorOnce = (workId: string | null | undefined, forceNew: boolean) =>
    runCognitiveConductor({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective ?? input.userText.slice(0, 2000),
    expectedOutcome: input.expectedOutcome,
    workId,
    forceNewWork: forceNew,
    parentWorkId: attachment.parentWorkId,
    turnCommandId: input.turnCommandId,
    maxSegmentsThisInvocation: defaultLocalSegments,
    resolvePolicy: (work, segmentIndex) => {
      const seed =
        work.state.intentSummary ||
        work.objective ||
        input.userText;
      const hint =
        work.state.profileHint ||
        semanticProfile;
      const reevalActive = (work.resources.limits ?? []).includes("REEVAL_THRESHOLD_1M");
      const restitutionPhase =
        reevalActive ||
        work.state.sufficiency === "SUFFICIENT" ||
        (work.resources.limits ?? []).includes("RESTITUTION_PHASE");
      let base = restitutionPhase
        ? buildCognitivePolicy(seed, undefined, {
            profileHint: hint === "simple" ? "simple" : "analyse",
            effortHint: "medium",
          })
        : segmentIndex > 0 && hint === "investigation"
          ? buildCognitivePolicy(seed, undefined, {
              profileHint: "investigation",
              effortHint: "high",
            })
          : hint === "simple"
            ? buildCognitivePolicy(seed, undefined, {
                profileHint: "simple",
                effortHint: "low",
              })
            : (input.policyOverride ??
              buildCognitivePolicy(seed, undefined, { profileHint: hint }));
      if (reevalActive) {
        base = {
          ...base,
          reasonCodes: [...base.reasonCodes, "STRATEGY_REEVAL_1M"],
        };
      }
      // A2 — reallocate per-segment tool chars from remaining global headroom.
      const used =
        (work.resources.inputTokens ?? 0) + (work.resources.outputTokens ?? 0);
      const scaled = scaleSegmentCharBudget({
        baseChars: base.budgets.maxD4CharsReturned,
        usedTokens: used,
      });
      if (scaled.chars !== base.budgets.maxD4CharsReturned) {
        base = {
          ...base,
          budgets: { ...base.budgets, maxD4CharsReturned: scaled.chars },
          reasonCodes: [...base.reasonCodes, scaled.reasonCode],
        };
      }
      return base;
    },
    runSegment: async ({ work, segmentIndex, policy }) => {
      // Compact acquis whenever prior checkpoint material exists — including
      // segmentIndex 0 of an auto-continued invocation (same work, new lease).
      const hasPriorAcquis =
        work.state.sources.length > 0 ||
        (work.state.conclusions?.length ?? 0) > 0 ||
        work.state.remainingWork.length > 0 ||
        work.revision > 0;
      // B4 — new envelope from prior acquis: inject parent checkpoint context once.
      let parentAcquisBlock = "";
      if (
        attachment.parentWorkId &&
        segmentIndex === 0 &&
        !hasPriorAcquis &&
        attachment.parentWorkId !== work.id
      ) {
        try {
          const parent = await getCognitiveWork({
            pilotId: input.pilotId,
            workId: attachment.parentWorkId,
          });
          parentAcquisBlock = [
            `[Acquis du travail parent ${parent.id} — réutiliser, ne pas tout relire]`,
            formatInvestigationContinuationContext(parent.state, { maxChars: 6500 }),
          ].join("\n");
        } catch {
          parentAcquisBlock = "";
        }
      }
      const useContinuation = segmentIndex > 0 || hasPriorAcquis || Boolean(parentAcquisBlock);
      const acquisBlock = hasPriorAcquis
        ? formatInvestigationContinuationContext(work.state)
        : parentAcquisBlock;
      // B2 — next unresolved perimeter keys (canonical full path, never basename).
      const resolvedKeys = new Set(
        work.state.sources
          .filter((s) =>
            ["CONSULTED", "VERIFIED", "DENIED"].includes(s.coverage),
          )
          .map((s) => canonicalSourcePathKey(s.ref))
          .filter(Boolean),
      );
      const perimeterKeys =
        work.state.inventoryKeys && work.state.inventoryKeys.length > 0
          ? work.state.inventoryKeys
          : [
              ...input.userText.matchAll(
                /(?:^|\n)\s*([^\n]+?\.(?:md|txt|ts|tsx|js|jsx|json|yml|yaml|sql|prisma|mjs|cjs))\s*(?=\n|$)/gi,
              ),
            ].map((m) => canonicalSourcePathKey(m[1]!.trim()));
      const uniqueNext = perimeterKeys
        .filter((k) => k.length > 2 && !resolvedKeys.has(k))
        .slice(0, 12);
      const resolved = inventoryResolvedCount(work.state);
      const reevalActive = (work.resources.limits ?? []).includes(
        "REEVAL_THRESHOLD_1M",
      );
      const sufficiencyHit =
        work.state.sufficiency === "SUFFICIENT" ||
        (segmentBox.reply?.qualification?.investigationSufficiency ===
          "SUFFICIENT");
      const continuationHint = !useContinuation
        ? ""
        : [
              "",
              sufficiencyHit || reevalActive
                ? "[Phase de restitution — consolider et livrer; ne pas relancer une investigation complète]"
                : "[Continuation du même travail cognitif — segment suivant]",
              `workId=${work.id} revision=${work.revision}`,
              `Objectif: ${work.objective}`,
              work.state.intentSummary
                ? `Intention consolidée: ${work.state.intentSummary}`
                : null,
              work.state.desiredOutcome
                ? `Résultat attendu: ${work.state.desiredOutcome}`
                : null,
              work.state.remainingWork.length
                ? `Travail restant précis: ${work.state.remainingWork.join("; ")}`
                : null,
              work.state.questions
                .filter((q) => q.status !== "ANSWERED")
                .map((q) => `Q[${q.importance}]: ${q.text}`)
                .join("\n") || null,
              work.state.constraints.length
                ? `Contraintes: ${work.state.constraints.join("; ")}`
                : null,
              work.state.inventoryTotal != null
                ? `Couverture périmètre: ${resolved}/${work.state.inventoryTotal} (consultées=${work.state.inventoryExamined ?? 0}, partielles=${work.state.inventoryPartial ?? 0}, refus=${work.state.inventoryDenied ?? 0})`
                : null,
              !sufficiencyHit && uniqueNext.length > 0
                ? `Prochaines sources à examiner (chemins complets): ${uniqueNext.join("; ")}`
                : null,
              sufficiencyHit
                ? "Consigne: investigation suffisante — produire la synthèse finale avec références et limites; workDisposition=COMPLETE."
                : reevalActive
                  ? "Consigne: seuil 1M — réévaluer la stratégie; approfondir uniquement le travail restant utile ou restituer; workDisposition=COMPLETE si suffisant."
                  : "Consigne: ne pas relire les sources déjà CONSULTED/VERIFIED; ouvrir les suivantes par chemin complet; si périmètre incomplet et objectif non atteint workDisposition=CONTINUE; si suffisant workDisposition=COMPLETE.",
              acquisBlock || null,
            ]
              .filter(Boolean)
              .join("\n");

      // C24 — feed public WEB registry from prior state + catalog / generic pilot query.
      // pilotText = this-turn Pilote only (P0: no objective/checkpoint URL authority).
      const privateMarkers = [
        input.pilotId,
        input.preparationId,
        input.projectId ?? "",
        input.conversationId ?? "",
        work.id,
      ].filter((m) => m.trim().length >= 4);
      const webRegistry = resolvePublicWebRegistry({
        priorTopics: work.state.registeredPublicTopics,
        priorExactQueries: work.state.authorizedExactWebQueries,
        priorFacts: work.state.registeredPublicFacts,
        pilotText: input.userText,
        privateMarkers,
        haystack: [
          input.userText,
          work.state.intentSummary ?? "",
          work.objective ?? "",
          input.objective ?? "",
        ].join("\n"),
      });

      let reply: NoraGenerateResult;
      if (probeReply && segmentIndex === 0 && !probeConsumed && !hasPriorAcquis) {
        probeConsumed = true;
        reply = probeReply;
      } else {
        reply = await generateNoraReply({
          userText: !useContinuation
              ? input.userText
              : `${input.userText}${continuationHint}`,
          contextSnippets: [
            ...input.contextSnippets,
            candidateSnippet,
            ...(useContinuation
              ? [
                  `Checkpoint cognitif ${work.id} r${work.revision}`,
                  work.state.intentSummary || "",
                  `attachment=${attachment.reason}`,
                ].filter(Boolean)
              : [`attachment=${attachment.reason}`]),
            ...(webRegistry.limits.length
              ? [`publicWebRegistry=${webRegistry.limits.join(",")}`]
              : []),
          ],
          knowledgeSnippets: input.knowledgeSnippets,
          pilotageSnippets: input.pilotageSnippets,
          levelASignals: input.levelASignals,
          ckiDelivery: input.ckiDelivery,
          onProvisionalChunk: input.onProvisionalChunk,
          toolScope: input.toolScope,
          policyOverride: policy,
          publicWebRegistry: {
            topics: webRegistry.topics,
            exactQueries: webRegistry.exactQueries,
            facts: webRegistry.facts,
            pilotProvidedUrls: webRegistry.pilotProvidedUrls,
          },
        });
      }
      segmentBox.reply = reply;
      const investigation = mergeInvestigationFromReply(
        work.state.intentSummary
          ? work.state
          : createEmptyInvestigation(input.userText),
        reply,
        input.userText,
      );
      // Persist registered public WEB provenance on investigation for next segments.
      investigation.registeredPublicTopics = {
        ...(investigation.registeredPublicTopics ?? {}),
        ...webRegistry.topics,
      };
      investigation.authorizedExactWebQueries = [
        ...new Set([
          ...(investigation.authorizedExactWebQueries ?? []),
          ...webRegistry.exactQueries,
        ]),
      ];
      investigation.registeredPublicFacts = [
        ...new Set([
          ...(investigation.registeredPublicFacts ?? []),
          ...webRegistry.facts,
        ]),
      ];
      // Stamp filiation on investigation for READY/DRAFT consumers.
      investigation.cognitiveWorkId = work.id;
      investigation.cognitiveRevision = work.revision;
      const continueWork = semanticContinueWork(
        reply.qualification,
        investigation,
        reply,
      );
      const usage = usageFromReply(reply);
      const production = documentProductionFromReply(
        work,
        reply,
        segmentIndex,
        continueWork,
      );
      return {
        replyText: reply.content,
        qualification: reply.qualification,
        investigation,
        generationId: reply.generationId,
        continueWork,
        resourcesDelta: {
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          reasoningTokens: usage.reasoningTokens,
          // cachedInputTokens in limits only — do not double-count in token budget
          cacheTokens: usage.cachedInputTokens,
          modelRequested: reply.modelRequested,
          modelApplied: reply.modelApplied,
          effortRequested: reply.effortRequested,
          effortApplied: reply.effortApplied,
          webCalls: (reply.observedToolSources ?? []).filter((s) => s.kind === "WEB")
            .length,
          limits: [
            ...(usage.inputTokens == null ? ["USAGE_TOKENS_UNKNOWN"] : []),
            ...(usage.reasoningTokens == null
              ? ["REASONING_TOKENS_UNVERIFIED"]
              : []),
            ...(usage.cachedInputTokens == null
              ? ["CACHED_INPUT_TOKENS_UNVERIFIED"]
              : [`CACHED_INPUT_TOKENS:${usage.cachedInputTokens}`]),
            ...(usage.providerRequests != null
              ? [`PROVIDER_REQUESTS:${usage.providerRequests}`]
              : ["PROVIDER_REQUESTS_UNVERIFIED"]),
            ...(reply.usage?.provenance
              ? [`USAGE_PROVENANCE:${reply.usage.provenance}`]
              : []),
          ],
        },
        production,
      };
    },
  });

  // B3 — server-side auto-continue across local SEGMENT_INVOCATION_LIMIT without
  // requiring a new Pilote message. Same work identity; cumulative resources preserved.
  let conductor: ConductorRunResult = await runConductorOnce(
    attachment.workId,
    attachment.forceNew,
  );
  let totalSegmentsRun = conductor.segmentsRun;
  // Long exhaustive investigations need wall room beyond a single HTTP comfort window;
  // browser observes, server continues. Soft cap still applies via envelope + autoRounds.
  const wallDeadline =
    Date.now() +
    (defaultLocalSegments >= 20 ? 3_000_000 : 1_700_000);
  let autoRounds = 0;
  while (
    conductor.suspended &&
    conductor.suspendReason === "SEGMENT_INVOCATION_LIMIT" &&
    autoRounds < 12 &&
    Date.now() < wallDeadline &&
    (conductor.investigation.remainingWork.length > 0 ||
      conductor.investigation.questions.some(
        (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
      ) ||
      (conductor.investigation.inventoryTotal != null &&
        (conductor.investigation.inventoryExamined ?? 0) <
          conductor.investigation.inventoryTotal))
  ) {
    autoRounds += 1;
    const next = await runConductorOnce(conductor.work.id, false);
    totalSegmentsRun += next.segmentsRun;
    conductor = {
      ...next,
      segmentsRun: totalSegmentsRun,
      resumed: true,
    };
  }

  const lastReply = segmentBox.reply;
  if (!lastReply) {
    throw new Error("CONDUCTOR_NO_SEGMENT");
  }

  // C17: align lifecycle — suspended conductor must not claim COMPLETE reply.
  const alignedStatus: NoraGenerateResult["status"] = conductor.suspended
    ? "INTERRUPTED"
    : lastReply.status;

  let content = conductor.replyText || lastReply.content;
  if (conductor.suspended) {
    // A4 — restitution from durable acquis, not last provider fragment alone.
    content = composeInvestigationPartialRestitution({
      state: {
        ...conductor.investigation,
        cognitiveWorkId: conductor.work.id,
        cognitiveRevision: conductor.work.revision,
      },
      production: conductor.production,
      suspendReason: conductor.suspendReason,
      sourceFallback: lastReply.observedToolSources,
    });
  }

  const reply: NoraGenerateResult = {
    ...lastReply,
    content,
    qualification: conductor.qualification ?? lastReply.qualification,
    status: alignedStatus,
  };

  return {
    ...reply,
    conductor: {
      workId: conductor.work.id,
      revision: conductor.work.revision,
      segmentsRun: conductor.segmentsRun,
      resumed: conductor.resumed,
      suspended: conductor.suspended,
      suspendReason: conductor.suspendReason,
      investigation: {
        ...conductor.investigation,
        cognitiveWorkId: conductor.work.id,
        cognitiveRevision: conductor.work.revision,
      },
      production: conductor.production,
    },
  };
}
