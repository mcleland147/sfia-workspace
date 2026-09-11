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
  type CycleServices,
  type FinalizationAssessment,
  type PilotLifecycleResult,
} from "@/lib/oa/cycle";
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
    requireMorrisGate: true,
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
    // Technical OA authority class for structuring Pilot HD — not Morris runtime UX.
    authority: "morris",
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

/** D-LC-03 — explicit Pilote obligation-policy HD (never automatic). */
export async function recordObligationPolicyNoGovernedEffects(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | {
      ok: true;
      decisionId: string;
      assessment: FinalizationAssessment;
    }
  | { ok: false; code: string; message: string; assessment?: FinalizationAssessment }
> {
  const {
    obligationPolicySubjectFor,
    OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
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

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const subject = obligationPolicySubjectFor(input.cycleInstanceId);
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
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    actor: PILOTE,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: auth.evidenceId,
    rationale: "Pilot obligation-policy: no governed effects for this cycle",
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
