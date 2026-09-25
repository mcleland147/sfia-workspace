/**
 * CORR-PROOF-05 — Project Assistant Pilot lifecycle server helpers.
 * Pilot lifecycle authority ≠ Morris construction gate.
 *
 * Static guard: forceEnable must not appear in this Product file.
 * registerLocalPiloteAuthority is env-gated fail-closed (AUTHORITY_NOT_CONFIGURED).
 * Tests may forceEnable only outside this Product path.
 */
import { randomUUID } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  cancelSubjectFor,
  classifyTrajectoryBinding,
  finalizeSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  reservationBelongsToCycle,
  type CycleServices,
  type EpistemicReservationMetadata,
  type FinalizationAssessment,
  type PilotLifecycleResult,
} from "@/lib/oa/cycle";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import type { ProjectServices } from "@/lib/oa/project";

export type PilotLifecycleActionKind =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "ASSESS"
  | "REEVALUATE";

const PILOTE = LOCAL_PILOTE_ACTOR;

async function ensurePiloteAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  nowIso: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; code: string; message: string }> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope: input.scope,
    issuedAt: input.nowIso,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const verified = input.authorityResolver.verify({
    actorId: LOCAL_PILOTE_ACTOR.actorId,
    requiredLevel: "N3",
    scope: input.scope,
    evidenceId: authority.evidenceId,
    requirePilotGate: true,
  });
  if (!verified.ok) {
    const reason = verified.reason ?? "authority_verify_failed";
    const notConfigured =
      reason === "no_evidence" ||
      reason === "evidence_not_found" ||
      reason.includes("not_configured") ||
      reason.includes("not configured");
    return {
      ok: false,
      code: notConfigured ? "AUTHORITY_NOT_CONFIGURED" : "CYCLE_LIFECYCLE_DENIED",
      message: reason,
    };
  }
  return { ok: true, evidenceId: authority.evidenceId };
}

async function recordLifecycleDecision(input: {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  selectedOptionId: string;
  nowIso: string;
  /** Reuse evidence already obtained via ensurePiloteAuthority. */
  authorityEvidenceId?: string;
}): Promise<
  | { ok: true; decisionId: string; evidenceId: string }
  | { ok: false; code: string; message: string }
> {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  let evidenceId = input.authorityEvidenceId;
  if (!evidenceId) {
    const auth = await ensurePiloteAuthority({
      authorityResolver: input.authorityResolver,
      scope,
      nowIso: input.nowIso,
    });
    if (!auth.ok) return auth;
    evidenceId = auth.evidenceId;
  }

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId,
    actor: PILOTE,
    // Runtime Project structuring HumanDecision — Pilot authority class.
    authority: "pilot",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
    rationale: `Pilot lifecycle ${input.subject}`,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }
  return { ok: true, decisionId, evidenceId };
}

export async function executePilotLifecycleAction(input: {
  action: PilotLifecycleActionKind;
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** RESUME only — caller-detected material drift (hint; server owns SoT). */
  materialDriftDetected?: boolean;
  /** START hint only — server assessStartReadiness decides HD requirement. */
  requiresTrajectoryHumanDecision?: boolean;
  /** RESUME hint only — server assessResumeReconciliation decides. */
  requiresReplanHumanDecision?: boolean;
}): Promise<
  | {
      ok: true;
      action: PilotLifecycleActionKind;
      result?: PilotLifecycleResult;
      assessment?: FinalizationAssessment;
      decisionId?: string;
      authorityEvidenceId?: string;
    }
  | {
      ok: false;
      code: string;
      message: string;
      assessment?: FinalizationAssessment;
    }
> {
  const createdBy = {
    actorId: PILOTE.actorId,
    role: PILOTE.role,
    displayName: PILOTE.displayName,
    authorityLevel: PILOTE.authorityLevel,
  };

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const expectedLpsVersion = lps.ok
    ? lps.livingProjectState.version
    : undefined;

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;

  switch (input.action) {
    case "START": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      // CR-START-01B/C — classify before any recordLifecycleDecision.
      const cycle = await input.cycleServices.cycles.findById(
        input.cycleInstanceId,
      );
      if (!cycle || cycle.projectId !== input.projectId) {
        return {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "Cycle instance was not found.",
        };
      }
      const binding = classifyTrajectoryBinding(cycle);
      if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
        return {
          ok: false,
          code: "TRAJECTORY_BINDING_INCOMPLETE",
          message: "Trajectory binding is incomplete.",
        };
      }

      let decisionId: string | undefined;
      if (binding === "COMPLETE_TRAJECTORY_BOUND") {
        // CR-START-01C — never parasite-create start+trajectory HD for greenfield.
        // Ignore requiresTrajectoryHumanDecision hint; do not auto-create HD after.
      } else if (input.requiresTrajectoryHumanDecision) {
        // LEGACY_UNBOUND — preserve historical pre-record behavior.
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: startTrajectorySubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.start({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        requiresTrajectoryHumanDecision:
          binding === "COMPLETE_TRAJECTORY_BOUND"
            ? false
            : input.requiresTrajectoryHumanDecision,
        decisionId:
          binding === "COMPLETE_TRAJECTORY_BOUND" ? undefined : decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "START",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "PAUSE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const result = await input.cycleServices.pilotLifecycle.pause({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "PAUSE",
        result,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "RESUME": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      if (input.requiresReplanHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: resumeReplanSubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.resume({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        materialDriftDetected: input.materialDriftDetected,
        requiresReplanHumanDecision: input.requiresReplanHumanDecision,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "RESUME",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "FINALIZE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: finalizeSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.finalize({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "FINALIZE",
        result,
        assessment: result.assessment,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "CANCEL": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: cancelSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.cancel({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "CANCEL",
        result,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "ASSESS": {
      const assessed = await input.cycleServices.pilotLifecycle.assess({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
      });
      if (!assessed.ok) {
        return {
          ok: false,
          code: assessed.error.detailCode,
          message: assessed.error.message,
        };
      }
      return {
        ok: true,
        action: "ASSESS",
        assessment: assessed.assessment,
      };
    }
    case "REEVALUATE": {
      const result =
        await input.cycleServices.pilotLifecycle.reevaluateAndComplete({
          cycleInstanceId: input.cycleInstanceId,
          projectId: input.projectId,
          createdBy,
          expectedLpsVersion,
        });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "REEVALUATE",
        result,
        assessment: result.assessment,
      };
    }
    default: {
      const _exhaustive: never = input.action;
      void _exhaustive;
      return {
        ok: false,
        code: "CYCLE_LIFECYCLE_DENIED",
        message: "Unknown Pilot lifecycle action.",
      };
    }
  }
}

/** CORR-PROOF-06 — Pilote-selected obligation-policy options (never automatic). */
export type ObligationPolicyKind = "no-governed-effects" | "require-artifact";

type ObligationPolicyRecordResult =
  | {
      ok: true;
      decisionId: string;
      assessment: FinalizationAssessment;
      policyKind: ObligationPolicyKind;
    }
  | {
      ok: false;
      code: string;
      message: string;
      assessment?: FinalizationAssessment;
    };

/** D-LC-03 — explicit Pilote obligation-policy HD (never automatic). */
export async function recordObligationPolicyNoGovernedEffects(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<ObligationPolicyRecordResult> {
  return recordPilotObligationPolicy({
    ...input,
    policyKind: "no-governed-effects",
  });
}

/**
 * CORR-PROOF-06 — explicit Pilote HD that a deliverable (Artifact) is required
 * before finalization. Reuses OBLIGATION_POLICY_REQUIRE_ARTIFACT.
 * Supersedes prior accepted obligation-policy HD for the same subject (default).
 */
export async function recordObligationPolicyRequireArtifact(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<ObligationPolicyRecordResult> {
  return recordPilotObligationPolicy({
    ...input,
    policyKind: "require-artifact",
  });
}

async function recordPilotObligationPolicy(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  policyKind: ObligationPolicyKind;
}): Promise<ObligationPolicyRecordResult> {
  const {
    obligationPolicySubjectFor,
    OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  } = await import("@/lib/oa/cycle");
  const nowIso = input.nowIso();
  const assessedBefore = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessedBefore.ok) {
    return {
      ok: false,
      code: assessedBefore.error.detailCode,
      message: assessedBefore.error.message,
    };
  }

  if (input.policyKind === "no-governed-effects") {
    // Fail-closed: refuse grouped N/A when a governed-effect family is positively APPLICABLE.
    for (const o of assessedBefore.assessment.obligations) {
      if (
        (o.family === "artifact" ||
          o.family === "git_repository" ||
          o.family === "execution_contract" ||
          o.family === "evidence" ||
          o.family === "review_bundle") &&
        o.applicability === "APPLICABLE"
      ) {
        return {
          ok: false,
          code: "OBLIGATION_POLICY_CONTRADICTED",
          message:
            "Des effets gouvernés sont déjà applicables — la confirmation groupée n’est pas disponible.",
          assessment: assessedBefore.assessment,
        };
      }
    }
  }

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const subject = obligationPolicySubjectFor(input.cycleInstanceId);
  const selectedOptionId =
    input.policyKind === "require-artifact"
      ? OBLIGATION_POLICY_REQUIRE_ARTIFACT
      : OBLIGATION_POLICY_NO_GOVERNED_EFFECTS;
  const rationale =
    input.policyKind === "require-artifact"
      ? "Pilot obligation-policy: require artifact/deliverable before finalize"
      : "Pilot obligation-policy: no governed effects for this cycle";

  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject,
    options: [
      {
        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        label: "Aucun effet gouverné requis",
      },
      {
        optionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        label: "Un livrable est requis avant finalisation",
      },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId,
    actor: PILOTE,
    authority: "pilot",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: auth.evidenceId,
    rationale,
    // Default true — supersede prior accepted obligation-policy HD; keep history.
    supersedeExistingAccepted: true,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    decisionId,
    assessment: assessed.assessment,
    policyKind: input.policyKind,
  };
}

/** D-LC-05 — close bound active trajectory step via existing domain step states. */
export async function completeBoundTrajectoryStepAction(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | { ok: true; stepId: string; assessment: FinalizationAssessment }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const closed =
    await input.cycleServices.pilotLifecycle.completeBoundActiveTrajectoryStep({
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      createdBy: PILOTE,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!closed.ok) {
    return {
      ok: false,
      code: closed.error.detailCode,
      message: closed.error.message,
    };
  }
  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    stepId: closed.stepId,
    assessment: assessed.assessment,
  };
}

/** D-LC-05 — resolve blocking Reservation via existing UpdateEpistemicState. */
export async function resolveBlockingReservationAction(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  cycleServices: CycleServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | { ok: true; epistemicItemId: string; assessment: FinalizationAssessment }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const items = await input.cycleServices.epistemic.listByProject(
    input.projectId,
  );
  const target = items.find((i) => i.epistemicItemId === input.epistemicItemId);
  if (!target) {
    return {
      ok: false,
      code: "EPISTEMIC_NOT_FOUND",
      message: "Réserve introuvable.",
    };
  }
  if (target.type !== "Reservation") {
    return {
      ok: false,
      code: "EPISTEMIC_INVALID",
      message: "L’élément n’est pas une réserve.",
    };
  }
  if (target.status !== "active" || target.blocking !== true) {
    return {
      ok: false,
      code: "EPISTEMIC_INVALID",
      message: "La réserve n’est pas une réserve bloquante active.",
    };
  }

  const updated = await input.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: PILOTE,
    items: [
      {
        epistemicItemId: target.epistemicItemId,
        type: "Reservation",
        statement: target.statement,
        source: target.source,
        status: "resolved",
        blocking: false,
        confidence: target.confidence,
        relatedObjects: target.relatedObjects,
        provenance: target.provenance,
      },
    ],
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    epistemicItemId: target.epistemicItemId,
    assessment: assessed.assessment,
  };
}

/** Minimal read seams for resolution-basis validation (fail-closed when absent). */
export type ReservationBasisReaders = {
  /** HumanDecision reader — when absent, human_decision basis fails closed. */
  findDecisionById?: (
    decisionId: string,
  ) => Promise<{ status: string } | null>;
  /** Evidence reader — when absent, evidence basis falls back to relatedObjects. */
  findEvidenceById?: (evidenceId: string) => Promise<unknown | null>;
};

async function loadCycleReservation(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  cycleServices: CycleServices;
}): Promise<
  | { ok: true; target: EpistemicItem }
  | { ok: false; code: string; message: string }
> {
  const items = await input.cycleServices.epistemic.listByProject(
    input.projectId,
  );
  const target = items.find((i) => i.epistemicItemId === input.epistemicItemId);
  if (!target) {
    return {
      ok: false,
      code: "EPISTEMIC_NOT_FOUND",
      message: "Réserve introuvable.",
    };
  }
  if (target.type !== "Reservation") {
    return {
      ok: false,
      code: "EPISTEMIC_INVALID",
      message: "L’élément n’est pas une réserve.",
    };
  }
  if (target.status !== "active") {
    return {
      ok: false,
      code: "RESERVATION_NOT_ACTIVE",
      message: "La réserve n’est plus active.",
    };
  }
  // Legacy project-level Reservations carry no cycle ref — accept them (they gate project-wide).
  const projectCycleIds = new Set(
    (await input.cycleServices.cycles.listByProject(input.projectId)).map(
      (c) => c.cycleInstanceId,
    ),
  );
  const hasCycleRef =
    Boolean(target.provenance?.cycleInstanceId) ||
    (target.relatedObjects ?? []).some((r) => projectCycleIds.has(r));
  if (hasCycleRef && !reservationBelongsToCycle(target, input.cycleInstanceId)) {
    return {
      ok: false,
      code: "RESERVATION_CYCLE_MISMATCH",
      message: "La réserve n’appartient pas au cycle sélectionné.",
    };
  }
  return { ok: true, target };
}

async function validateResolutionBasis(input: {
  target: EpistemicItem;
  proposal: NonNullable<EpistemicReservationMetadata["resolutionProposal"]>;
  readers: ReservationBasisReaders;
}): Promise<{ ok: true } | { ok: false; code: string; message: string }> {
  const refs = input.proposal.basisRefs
    .map((r) => (typeof r === "string" ? r.trim() : ""))
    .filter((r) => r.length > 0);
  if (refs.length === 0) {
    return {
      ok: false,
      code: "RESERVATION_BASIS_MISSING",
      message: "La proposition de levée ne référence aucune base vérifiable.",
    };
  }
  switch (input.proposal.basisType) {
    case "clarification":
      // Clarification basis = transcript turn ids; presence is the pragmatic check.
      return { ok: true };
    case "human_decision": {
      if (!input.readers.findDecisionById) {
        return {
          ok: false,
          code: "RESERVATION_BASIS_UNVERIFIABLE",
          message:
            "Lecteur HumanDecision indisponible — levée refusée (fail-closed).",
        };
      }
      for (const id of refs) {
        const decision = await input.readers.findDecisionById(id);
        if (!decision) {
          return {
            ok: false,
            code: "RESERVATION_BASIS_MISSING",
            message: `Décision ${id} introuvable — la base de levée n’existe plus.`,
          };
        }
        if (decision.status !== "accepted") {
          return {
            ok: false,
            code: "RESERVATION_BASIS_NOT_CURRENT",
            message: `Décision ${id} n’est plus courante (${decision.status}).`,
          };
        }
      }
      return { ok: true };
    }
    case "evidence": {
      for (const id of refs) {
        if (input.readers.findEvidenceById) {
          const evidence = await input.readers.findEvidenceById(id);
          if (!evidence) {
            return {
              ok: false,
              code: "RESERVATION_BASIS_MISSING",
              message: `Evidence ${id} illisible ou introuvable.`,
            };
          }
          continue;
        }
        // Fail-closed fallback: Evidence must at least be linked to the Reservation.
        if (!(input.target.relatedObjects ?? []).includes(id)) {
          return {
            ok: false,
            code: "RESERVATION_BASIS_UNVERIFIABLE",
            message: `Evidence ${id} non vérifiable — levée refusée (fail-closed).`,
          };
        }
      }
      return { ok: true };
    }
    default:
      return {
        ok: false,
        code: "RESERVATION_BASIS_INVALID",
        message: "Type de base de levée inconnu.",
      };
  }
}

/**
 * CYCLE-RESERVATION-PILOTING-01 — Pilot confirms Nora's resolution proposal.
 * Requires active Reservation + reservation.resolutionProposal whose basis still
 * exists. Sets status=resolved / blocking=false; clears deferred; keeps proposal
 * for audit. Never auto-invoked by Nora; must_resolve defer is NOT this action.
 */
export async function confirmReservationResolutionAction(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  cycleServices: CycleServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  basisReaders?: ReservationBasisReaders;
}): Promise<
  | { ok: true; epistemicItemId: string; assessment: FinalizationAssessment }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const loaded = await loadCycleReservation(input);
  if (!loaded.ok) return loaded;
  const target = loaded.target;
  const meta = target.reservation;
  if (!meta?.resolutionProposal) {
    return {
      ok: false,
      code: "RESERVATION_NO_PROPOSAL",
      message:
        "Aucune proposition de levée à confirmer — traitez la réserve avec Nora.",
    };
  }
  const basis = await validateResolutionBasis({
    target,
    proposal: meta.resolutionProposal,
    readers: input.basisReaders ?? {},
  });
  if (!basis.ok) return basis;

  const { deferred: _deferred, ...preserved } = meta;
  void _deferred;
  const reservation: EpistemicReservationMetadata = {
    ...preserved,
    resolutionProposal: structuredClone(meta.resolutionProposal),
  };

  const updated = await input.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: PILOTE,
    items: [
      {
        epistemicItemId: target.epistemicItemId,
        type: "Reservation",
        statement: target.statement,
        source: target.source,
        status: "resolved",
        blocking: false,
        confidence: target.confidence,
        relatedObjects: target.relatedObjects,
        provenance: target.provenance,
        reservation,
      },
    ],
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    epistemicItemId: target.epistemicItemId,
    assessment: assessed.assessment,
  };
}

/** Stable option id for Pilot explicit reservation report (trajectory-relevant). */
export const RESERVATION_DEFER_OPTION_ID = "opt:defer-reservation" as const;

export function reservationDeferSubjectFor(epistemicItemId: string): string {
  return `reservation-defer:${epistemicItemId}`;
}

/**
 * CYCLE-RESERVATION-PILOTING-01 — Pilot defers a nonblocking Reservation to an
 * honest trajectory target. Records a durable HumanDecision first, then stamps
 * reservation.deferred (same Product UoW when store supports nested TX).
 * Nora never auto-defers. must_resolve and missing target are refused.
 */
export async function deferReservationAction(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  rationale?: string;
  /** Required honest target — never invent; caller resolves from trajectory. */
  targetCycleTypeId: string;
  targetLabel?: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | {
      ok: true;
      epistemicItemId: string;
      decisionId: string;
      assessment: FinalizationAssessment;
    }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const targetCycleTypeId = input.targetCycleTypeId.trim();
  if (!targetCycleTypeId) {
    return {
      ok: false,
      code: "RESERVATION_DEFER_NO_TARGET",
      message:
        "Aucune cible aval honnête — report refusé (ne pas inventer un cycle).",
    };
  }

  const loaded = await loadCycleReservation(input);
  if (!loaded.ok) return loaded;
  const target = loaded.target;
  const meta = target.reservation;
  if (!meta) {
    return {
      ok: false,
      code: "RESERVATION_LEGACY_UNQUALIFIED",
      message:
        "Réserve du modèle précédent — à qualifier avec Nora avant tout report.",
    };
  }
  if (meta.finalizationRelevance === "must_resolve") {
    return {
      ok: false,
      code: "RESERVATION_MUST_RESOLVE",
      message:
        "Cette réserve doit être traitée avant finalisation — report refusé.",
    };
  }
  if (meta.deferred) {
    return {
      ok: false,
      code: "RESERVATION_ALREADY_DEFERRED",
      message: "La réserve est déjà reportée.",
    };
  }

  const decisionId = `dec:rsv-defer:${randomUUID()}`;
  const subject = reservationDeferSubjectFor(target.epistemicItemId);
  const targetLabel =
    input.targetLabel?.trim() || targetCycleTypeId;
  const rationale =
    input.rationale?.trim() ||
    `Report explicite de la réserve « ${meta.title} » vers ${targetLabel}.`;

  type PersistOk = { decisionId: string };
  let persisted: PersistOk;

  try {
    persisted = await input.cycleServices.store.runInTransaction(async () => {
      const recorded = await input.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject,
        options: [
          {
            optionId: RESERVATION_DEFER_OPTION_ID,
            label: "Reporter la réserve",
          },
          { optionId: "opt:refuse", label: "Annuler" },
        ],
        selectedOptionId: RESERVATION_DEFER_OPTION_ID,
        actor: PILOTE,
        authority: "pilot",
        status: "accepted",
        reversible: false,
        scope,
        authorityEvidenceId: auth.evidenceId,
        rationale,
        evidenceRefs: [target.epistemicItemId, targetCycleTypeId],
        supersedeExistingAccepted: true,
      });
      if (!recorded.ok) {
        throw Object.assign(new Error(recorded.error.message), {
          detailCode: recorded.error.detailCode,
        });
      }

      const reservation: EpistemicReservationMetadata = {
        ...meta,
        deferred: {
          deferredAt: nowIso,
          humanDecisionId: decisionId,
          targetCycleTypeId,
          rationale,
        },
      };
      const updated = await input.cycleServices.updateEpistemicState.execute({
        projectId: input.projectId,
        createdBy: PILOTE,
        items: [
          {
            epistemicItemId: target.epistemicItemId,
            type: "Reservation",
            statement: target.statement,
            source: target.source,
            status: "active",
            blocking: false,
            confidence: target.confidence,
            relatedObjects: target.relatedObjects,
            provenance: target.provenance,
            reservation,
          },
        ],
      });
      if (!updated.ok) {
        throw Object.assign(new Error(updated.error.message), {
          detailCode: updated.error.detailCode,
        });
      }
      return { decisionId };
    });
  } catch (err) {
    const code =
      err &&
      typeof err === "object" &&
      "detailCode" in err &&
      typeof (err as { detailCode: unknown }).detailCode === "string"
        ? (err as { detailCode: string }).detailCode
        : "PERSISTENCE_FAILURE";
    return {
      ok: false,
      code,
      message:
        err instanceof Error
          ? err.message
          : "Report de réserve impossible (écriture annulée).",
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    epistemicItemId: target.epistemicItemId,
    decisionId: persisted.decisionId,
    assessment: assessed.assessment,
  };
}
