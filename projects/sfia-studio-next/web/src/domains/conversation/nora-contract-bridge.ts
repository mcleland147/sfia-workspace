/**
 * CA-01 / C14 bridge — after a Nora turn, persist investigation facts and optionally
 * prepare a DRAFT technical contract. Reuses nora-contract-prepare + investigation
 * persistence — no second preparation engine.
 *
 * C14: contract-prepare intent is semantic (qualification intents), never lexical.
 */

import { prepareTechnicalContractFromNora } from "@/domains/execution/nora-contract-prepare";
import type { TechnicalContractBody } from "@/domains/execution/types";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type InvestigationSourceRef,
  type InvestigationState,
} from "./investigation-state";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "./investigation-persistence";
import { appendActivityEvent } from "./activity-projection";
import type { NoraTurnQualification } from "./semantic-qualification";

/** C16 — current observation wins for same ref; history kept as notes, not authority. */
function mergeSourcesPreferCurrent(
  prior: InvestigationSourceRef[],
  observed: InvestigationSourceRef[],
): InvestigationSourceRef[] {
  const byKey = new Map<string, InvestigationSourceRef>();
  for (const s of prior) {
    byKey.set(`${s.kind}:${s.ref}`, { ...s });
  }
  for (const s of observed) {
    const key = `${s.kind}:${s.ref}`;
    const prev = byKey.get(key);
    if (!prev) {
      byKey.set(key, { ...s });
      continue;
    }
    const noteBits = [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
      .filter(Boolean)
      .join("; ");
    byKey.set(key, {
      ...prev,
      ...s,
      notes: noteBits || s.notes,
      versionOrSha: s.versionOrSha ?? prev.versionOrSha,
    });
  }
  return [...byKey.values()];
}


/** C14 — semantic prepare signal from structured qualification (not user-text regex). */
export function semanticWantsCursorContractPrepare(
  qualification: NoraTurnQualification | null | undefined,
): boolean {
  if (!qualification || qualification.status === "UNAVAILABLE") return false;
  return qualification.intents.some(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
  );
}

/** C14 — corrective draft within existing mandate (A04); never implies dispatch. */
export function semanticWantsCorrectiveDraft(
  qualification: NoraTurnQualification | null | undefined,
): boolean {
  if (!qualification || qualification.status === "UNAVAILABLE") return false;
  return qualification.intents.some(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.parameters?.correctiveDraft === "true" ||
        // legacy boolean if ever present in persisted JSON
        (i.parameters as { correctiveDraft?: unknown })?.correctiveDraft === true),
  );
}

/**
 * @deprecated C14 — lexical detectors removed. Kept as always-false stubs so any
 * residual import fails closed (no contract from keywords). Prefer semanticWants*.
 */
export function detectsTechnicalContractIntent(text: string): boolean {
  void text;
  return false;
}

/** @deprecated C14 — see detectsTechnicalContractIntent. */
export function detectsCorrectiveDraftIntent(text: string): boolean {
  void text;
  return false;
}

export function draftBodyFromInvestigation(
  inv: InvestigationState,
  opts?: {
    title?: string;
    instructionExtra?: string;
    /** Full assistant prose when available — not silently truncated to a toy budget. */
    instructionFromNora?: string;
    businessCriteria?: string[];
  },
): TechnicalContractBody {
  const title =
    opts?.title?.trim() ||
    inv.desiredOutcome.trim() ||
    inv.intentSummary.trim().slice(0, 120) ||
    "Contrat technique préparé par Nora";
  const consulted = inv.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  const sources = consulted.map((s) => `${s.kind}:${s.ref}`).join(", ");
  const openQs = inv.questions
    .filter((q) => q.status === "OPEN" || q.status === "BLOCKED")
    .map((q) => `[${q.importance}] ${q.text}`)
    .join("\n- ");
  const contradictions = inv.contradictions
    .map((c) => `${c.a} ↔ ${c.b}: ${c.detail}`)
    .join("\n- ");
  // C15: no silent 24k truncation of Nora technical elaboration.
  // Transport/security limits remain elsewhere; business instruction stays integral.
  const noraInstruction =
    opts?.instructionFromNora?.trim() || opts?.instructionExtra?.trim() || "";

  const instruction = [
    `# Instruction technique (issue de l'investigation Nora)`,
    ``,
    `## Mission`,
    inv.intentSummary || "(intention non résumée)",
    inv.desiredOutcome ? `\n## Résultat attendu\n${inv.desiredOutcome}` : null,
    inv.constraints.length
      ? `\n## Contraintes / restrictions\n- ${inv.constraints.join("\n- ")}`
      : null,
    inv.exclusions.length
      ? `\n## Exclusions (OUT)\n- ${inv.exclusions.join("\n- ")}`
      : null,
    inv.risks.length ? `\n## Risques\n- ${inv.risks.join("\n- ")}` : null,
    sources
      ? `\n## Sources consultées (CONSULTED/VERIFIED)\n${sources}`
      : `\n## Sources\nAucune source CONSULTED/VERIFIED au moment de la préparation.`,
    openQs ? `\n## Questions encore ouvertes\n- ${openQs}` : null,
    contradictions ? `\n## Contradictions non résolues\n- ${contradictions}` : null,
    noraInstruction
      ? `\n## Élaboration Nora (contexte technique)\n${noraInstruction}`
      : null,
    `\n## Exécuteur`,
    `Cursor SDK local — aucune publication Git sans mandat D6/D9 distinct.`,
    `Préparer ≠ autoriser. Aucun dispatch sans HumanDecision D6.`,
  ]
    .filter(Boolean)
    .join("\n");

  // C15: keep all business criteria — no artificial cap of 8.
  const businessCriteria =
    opts?.businessCriteria?.filter((c) => c.trim()) ??
    inv.remainingWork.filter((w) => w.trim());

  return {
    title,
    engagements: {
      willDo: inv.desiredOutcome || inv.intentSummary,
      willNotDo: inv.exclusions.join("; ") || "Hors périmètre non listé",
      expectedResult: inv.desiredOutcome || "Livrables conformes au contrat",
      pilotControl: "HumanDecision D6 avant dispatch ; STOP observé ≠ rollback",
    },
    volets: {
      mission: inv.intentSummary,
      perimeter: inv.constraints.join("; ") || "Périmètre à confirmer",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL — permissions effectives uniquement",
      stopConditions:
        "STOP demandé / observé ; interruption → AMBIGUOUS si effet possible",
      proofsSources: sources || "Preuves à établir dans le handoff",
      integrity: "Fingerprint contrat + instruction exacte ; pas de troncature",
    },
    instructionText: instruction,
    risks: inv.risks.length ? inv.risks : ["Effets externes possibles via Cursor"],
    exclusions: inv.exclusions,
    acceptance: {
      criteria: businessCriteria.length
        ? businessCriteria
        : [
            "Comportements métier du résultat attendu vérifiés",
            "Handoff RECEIVED avec inventaire observé (complément, pas substitut métier)",
          ],
      expectedProofs: [
        "rapport markdown",
        "manifeste inventaire (fichiers observés)",
        "sorties de tests capturées lorsque des tests sont annoncés",
      ],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell_test"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP", "claim fence invalid"],
    reversibilityLimits: ["Pas de rollback automatique des effets Cursor"],
    gitScope: null,
  };
}

export type NoraContractBridgeInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  conversationId: string;
  turnCommandId: string;
  ownerToken?: string | null;
  userText: string;
  assistantText?: string;
  /** C14 — structured qualification drives prepare/corrective (required for intent). */
  qualification?: NoraTurnQualification | null;
  observedSources?: InvestigationSourceRef[];
  attemptPrepare?: boolean;
  contractKey?: string;
  sourceTurnCommandId?: string | null;
  /** C17 — exact cognitive work filiation (server-resolved). */
  workId?: string | null;
  workRevision?: number | null;
  investigationOverride?: InvestigationState | null;
  productionInstruction?: string | null;
  acceptanceCriteria?: string[] | null;
};

export type NoraContractBridgeResult = {
  intentDetected: boolean;
  correctiveIntent: boolean;
  investigation: InvestigationState | null;
  prepared: {
    contractId: string;
    contractKey: string;
    version: number;
    fingerprint: string;
    status: string;
  } | null;
  blockedReason: string | null;
  cursorRedispatch: false;
};

/**
 * Persist investigation progress and optionally prepare a DRAFT contract.
 * READY is never granted here. A04 corrective drafts never dispatch Cursor.
 */
export async function bridgeNoraTurnToContractPreparation(
  input: NoraContractBridgeInput,
): Promise<NoraContractBridgeResult> {
  const intentDetected =
    semanticWantsCursorContractPrepare(input.qualification) ||
    // C18: structured production (tool / qualification / investigation) is
    // an observed prepare signal — never replyDraft prose scrape.
    Boolean(
      input.productionInstruction?.trim() &&
        (input.acceptanceCriteria?.filter((c) => c.trim()).length ?? 0) > 0,
    );
  const correctiveIntent = semanticWantsCorrectiveDraft(input.qualification);
  if (!intentDetected && !correctiveIntent && !(input.observedSources?.length)) {
    return {
      intentDetected: false,
      correctiveIntent: false,
      investigation: null,
      prepared: null,
      blockedReason: null,
      cursorRedispatch: false,
    };
  }

  const prior =
    input.investigationOverride ??
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.userText,
      workId: input.workId,
    })) ??
    createEmptyInvestigation(input.userText);

  const q = input.qualification;
  const merged: InvestigationState = {
    ...prior,
    intentSummary:
      (q?.goal?.trim() || prior.intentSummary || input.userText).slice(0, 800),
    desiredOutcome:
      (q?.desiredOutcome?.trim() || prior.desiredOutcome || "").slice(0, 800),
    sources: mergeSourcesPreferCurrent(prior.sources, input.observedSources ?? []),
    constraints: correctiveIntent
      ? [
          ...prior.constraints.filter((c) => !c.startsWith("A04:")),
          "A04: brouillon correctif dans mandat existant — aucun nouveau dispatch Cursor",
        ]
      : prior.constraints,
    exclusions: prior.exclusions,
    profileHint:
      prior.profileHint === "simple" && (intentDetected || correctiveIntent)
        ? "investigation"
        : prior.profileHint === "simple"
          ? "analyse"
          : prior.profileHint,
  };
  const evaluated = evaluateContractReadiness({
    ...merged,
    cognitiveWorkId: input.workId ?? merged.cognitiveWorkId ?? null,
    cognitiveRevision: input.workRevision ?? merged.cognitiveRevision ?? null,
    productionInstruction:
      input.productionInstruction?.trim() ||
      merged.productionInstruction ||
      null,
    acceptanceCriteria:
      input.acceptanceCriteria?.filter((c) => c.trim()) ??
      merged.acceptanceCriteria ??
      [],
  });
  evaluated.cognitiveWorkId = input.workId ?? evaluated.cognitiveWorkId ?? null;
  evaluated.cognitiveRevision = input.workRevision ?? evaluated.cognitiveRevision ?? null;
  const persisted = await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
    workId: input.workId,
    projectId: input.projectId,
    conversationId: input.conversationId,
  });
  // Contract filiation uses the immutable checkpoint revision actually written.
  // Do not re-save solely to rewrite cognitiveRevision inside state_json (would bump again).
  evaluated.cognitiveWorkId = persisted.workId;
  evaluated.cognitiveRevision = persisted.revision;

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.investigation",
      nature: "OBSERVED",
      status: evaluated.contractReady ? "COMPLETED" : "LIMITED",
      summary: evaluated.contractReady
        ? "Investigation suffisante pour préparer un contrat DRAFT"
        : evaluated.contractReadyBlockedReason ?? "Investigation en cours",
      detail: {
        sufficiency: evaluated.sufficiency,
        sourceCount: evaluated.sources.length,
        contractReady: evaluated.contractReady,
        semanticPrepare: intentDetected,
        semanticCorrective: correctiveIntent,
      },
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  // C16: DRAFT may be prepared incomplete (inspectable). READY stays blocked elsewhere.
  // remainingWork is NOT acceptance criteria — never slice(0,8) into businessCriteria.
  if (!input.attemptPrepare || !intentDetected) {
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: null,
      blockedReason: null,
      cursorRedispatch: false,
    };
  }
  const hasConsultedSource = evaluated.sources.some(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );

  // C18: acceptanceCriteria / productionInstruction only from structured production.
  // No generic fallback criteria that could become READY. DRAFT may be incomplete.
  const structuredCriteria =
    (evaluated.acceptanceCriteria?.filter((c) => c.trim()).length
      ? evaluated.acceptanceCriteria.filter((c) => c.trim())
      : null) ??
    (input.acceptanceCriteria?.filter((c) => c.trim()).length
      ? input.acceptanceCriteria.filter((c) => c.trim())
      : null);
  const acceptanceCriteria = structuredCriteria ?? [];
  const productionInstruction =
    evaluated.productionInstruction?.trim() ||
    input.productionInstruction?.trim() ||
    "";
  evaluated.acceptanceCriteria = acceptanceCriteria;
  evaluated.productionInstruction =
    productionInstruction || evaluated.productionInstruction || null;
  // Never invent desiredOutcome — READY requires an explicit outcome from Nora.
  const draftIncomplete =
    !evaluated.contractReady ||
    !hasConsultedSource ||
    !productionInstruction ||
    acceptanceCriteria.length === 0;
  const body = draftBodyFromInvestigation(evaluated, {
    instructionFromNora: productionInstruction || undefined,
    instructionExtra: undefined,
    businessCriteria:
      acceptanceCriteria.length > 0
        ? acceptanceCriteria
        : ["DRAFT_INCOMPLETE — critères d'acceptation structurés absents"],
  });
  if (draftIncomplete) {
    body.exclusions = [
      ...body.exclusions,
      "DRAFT_INCOMPLETE — qualification positive non établie; READY interdit",
      ...(!hasConsultedSource
        ? ["DRAFT_INCOMPLETE — aucune source CONSULTED/VERIFIED au moment du brouillon"]
        : []),
      ...(!productionInstruction
        ? ["DRAFT_INCOMPLETE — productionInstruction structurée absente"]
        : []),
      ...(acceptanceCriteria.length === 0
        ? ["DRAFT_INCOMPLETE — acceptanceCriteria structurés absents"]
        : []),
    ];
  }
  const key =
    input.contractKey ??
    `nora-${input.preparationId.slice(-8)}-${Date.now().toString(36)}`;

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.contract.prepare",
      nature: "ANNOUNCED",
      status: "RUNNING",
      summary: "Nora prépare un contrat technique DRAFT",
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  try {
    const created = await prepareTechnicalContractFromNora({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contractKey: key,
      body,
      sourceTurnCommandId: input.sourceTurnCommandId ?? input.turnCommandId,
      investigationOverride: evaluated,
      cognitiveWorkId: evaluated.cognitiveWorkId ?? input.workId ?? null,
      cognitiveRevision: evaluated.cognitiveRevision ?? input.workRevision ?? null,
    });
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: `Contrat DRAFT ${created.contractKey} v${created.version} préparé`,
        sourceRef: created.contractId,
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: {
        contractId: created.contractId,
        contractKey: created.contractKey,
        version: created.version,
        fingerprint: created.fingerprint,
        status: created.status,
      },
      blockedReason: null,
      cursorRedispatch: false,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Préparation contrat refusée";
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "UNCERTAIN",
        status: "FAILED",
        summary: msg.slice(0, 200),
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: null,
      blockedReason: msg,
      cursorRedispatch: false,
    };
  }
}
