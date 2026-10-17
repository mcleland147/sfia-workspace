/**
 * M-HD-02 — read Generic Mission presentation continuity for Pilot UI.
 *
 * Source = CURRENT pending prepare offer (process-local) → Product seal.
 * No PresentedMission store. Restart without offer → none / stale (fail closed).
 * Decision truth = durable OA HumanDecision only — applicable only when
 * DecisionBasis / presentationDigest match the CURRENT sealed presentation.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  analysisFromPendingGenericPrepareOffer,
  assessGenericMissionPrepareReadiness,
  getCurrentGenericPrepareOffer,
} from "./prepareGenericExecutionContractDraft";
import { resolveProductPrepareOfferSessionKey } from "./pendingGenericPrepareOfferStore";
import {
  GENERIC_MISSION_PRESENTED_OPTIONS,
  evaluateLpsTransitionAfterHumanDecision,
  type GenericMissionSubject,
} from "./genericMissionSubject";
import {
  lpsMaterialSnapshotFromLivingProjectState,
  selectApplicableGenericMissionDecision,
} from "./genericMissionDecisionApplicability";
import { sealGenericMissionForPresentation } from "./recordGenericMissionHumanDecision";

export { lpsMaterialSnapshotFromLivingProjectState } from "./genericMissionDecisionApplicability";

export type GenericMissionPresentedOption = {
  readonly optionId: string;
  readonly label: string;
};

export type GenericMissionDecisionContinuityResult =
  | {
      readonly ok: true;
      readonly kind: "awaiting_decision";
      readonly subject: GenericMissionSubject;
      readonly options: readonly GenericMissionPresentedOption[];
      readonly offerFingerprint: string;
      readonly sessionKey: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "decided";
      readonly subject: GenericMissionSubject;
      readonly decision: {
        readonly decisionId: string;
        readonly status: HumanDecision["status"];
        readonly selectedOptionId: string;
        readonly actorId: string;
        readonly presentationDigest: string;
      };
      readonly options: readonly GenericMissionPresentedOption[];
      readonly offerFingerprint: string;
      readonly sessionKey: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "none";
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "stale_presentation_required";
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

/** Stable occurrence id from CURRENT offer — avoids silent re-occurrence on reread. */
export function missionSubjectIdFromOfferFingerprint(
  offerFingerprint: string,
): string {
  const fp = offerFingerprint.trim();
  const slice = fp.length > 40 ? fp.slice(0, 40) : fp;
  return `gms:offer:${slice}`;
}

function presentedOptions(): readonly GenericMissionPresentedOption[] {
  return GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
    optionId: o.optionId,
    label: o.label,
  }));
}

export {
  assessApplicableGenericMissionDecision,
  selectApplicableGenericMissionDecision,
} from "./genericMissionDecisionApplicability";

/**
 * Seal CURRENT pending offer for Pilot presentation when the mission is
 * structural / HD-required. Non-structural offers stay on chat-first PREPARE.
 */
export async function readGenericMissionDecisionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  /**
   * When client held a presentationDigest but server has no reconstitutable
   * offer — declare stale (Figma 414:2).
   */
  readonly clientPresentationDigest?: string | null;
}): Promise<GenericMissionDecisionContinuityResult> {
  const fail = (
    code: string,
    message: string,
  ): GenericMissionDecisionContinuityResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });

  const offer = getCurrentGenericPrepareOffer(projectId, {
    sessionKey,
  });

  if (!offer) {
    if (input.clientPresentationDigest?.trim()) {
      return {
        ok: true,
        kind: "stale_presentation_required",
        message:
          "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
        humanDecisionCreated: false,
        executionAttemptCreated: false,
      };
    }
    return {
      ok: true,
      kind: "none",
      message: "Aucune mission générique présentée pour ce projet.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (offer.projectId !== projectId) {
    return fail(
      "MISSION_OFFER_PROJECT_MISMATCH",
      "Offre Product hors Project demandé — lecture refusée.",
    );
  }
  if (offer.sessionKey !== sessionKey) {
    return fail(
      "MISSION_OFFER_SESSION_MISMATCH",
      "Offre Product hors session serveur — lecture refusée.",
    );
  }

  const analysis = analysisFromPendingGenericPrepareOffer(offer);
  const readiness = assessGenericMissionPrepareReadiness(analysis);
  const structural =
    readiness.structuralBlocked ||
    offer.signalStructuralChange ||
    offer.signalArchitectureImpact ||
    offer.signalSecurityImpact ||
    offer.signalIrreversible;

  if (!structural) {
    return {
      ok: true,
      kind: "none",
      message:
        "Offre courante non structurante — parcours chat-first PREPARE inchangé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (readiness.missingFields.length > 0) {
    return {
      ok: true,
      kind: "stale_presentation_required",
      message:
        "Mission insuffisamment qualifiée pour décision — nouvelle présentation requise.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const missionSubjectId = missionSubjectIdFromOfferFingerprint(
    offer.offerFingerprint,
  );
  const sealed = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId,
    cycleInstanceId: offer.cycleInstanceId,
    analysis,
    missionSubjectId,
  });
  if (!sealed.ok) {
    return fail(sealed.code, sealed.message);
  }

  const clientDigest = input.clientPresentationDigest?.trim() || "";
  const sealedDigest = sealed.subject.presentationDigest;
  const digestMismatch = Boolean(clientDigest && clientDigest !== sealedDigest);

  // Post-Record path: OA history + LPS currentness BEFORE client-digest stale.
  // A legitimate HD→LPS bump changes the sealed digest (D0→D1) while the Pilote
  // UI still holds D0 — that must not become stale_presentation_required.
  const history = await input.oa.decisionServices.listDecisionHistory.execute({
    projectId,
    subject: sealed.subject.missionSubjectId,
  });
  if (!history.ok) {
    return fail(
      "OA_DECISION_HISTORY_UNREADABLE",
      "Historique OA illisible — aucune décision présentée comme applicable.",
    );
  }

  const lpsNow = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  // C — LPS fail-closed: never invent a "current" snapshot from the sealed subject.
  if (!lpsNow.ok) {
    return fail(
      "LPS_CURRENT_UNREADABLE",
      "État Living Project courant illisible — aucune décision présentée comme applicable.",
    );
  }
  const currentLps = lpsMaterialSnapshotFromLivingProjectState(
    lpsNow.livingProjectState,
  );

  const selected = selectApplicableGenericMissionDecision({
    decisions: history.decisions,
    subject: sealed.subject,
    currentLps,
  });
  if (!selected.ok) {
    return fail(selected.code, selected.message);
  }

  if (selected.decision) {
    const d = selected.decision;
    const ctx = d.decisionBasis?.genericMissionContext;
    const sealedLpsVersion = d.decisionBasis?.proposalContext.lpsVersion;

    // Material LPS currentness (existing CR-04 policy) when version advanced.
    if (
      d.status === "accepted" &&
      typeof sealedLpsVersion === "number" &&
      currentLps.version > sealedLpsVersion
    ) {
      const sealedLps = await input.oa.projectServices.getLivingProjectStateVersion.execute(
        {
          projectId,
          version: sealedLpsVersion,
        },
      );
      if (!sealedLps.ok) {
        return fail(
          "LPS_SEALED_UNREADABLE",
          "LPS scellé illisible — transition non qualifiable; aucune décision présentée comme applicable.",
        );
      }
      const sealedSnap = lpsMaterialSnapshotFromLivingProjectState(
        sealedLps.livingProjectState,
      );
      const sealedWithDoctrine = {
        ...sealedSnap,
        doctrineDigest:
          sealedSnap.doctrineDigest ||
          d.decisionBasis?.proposalContext.doctrineDigest?.trim() ||
          "",
      };
      const lpsEval = evaluateLpsTransitionAfterHumanDecision({
        sealed: sealedWithDoctrine,
        current: currentLps,
        decisionId: d.decisionId,
      });
      if (!lpsEval.ok) {
        // Case B — material / unlinked LPS drift: not a current GO.
        if (digestMismatch) {
          return {
            ok: true,
            kind: "stale_presentation_required",
            message:
              "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
            humanDecisionCreated: false,
            executionAttemptCreated: false,
          };
        }
        return {
          ok: true,
          kind: "awaiting_decision",
          subject: sealed.subject,
          options: presentedOptions(),
          offerFingerprint: offer.offerFingerprint,
          sessionKey,
          humanDecisionCreated: false,
          executionAttemptCreated: false,
        };
      }
    }

    // Case A — applicable durable HD (incl. after legitimate LPS bump / D0 client digest).
    // When UI held D0, prefer returning the historically presented digest on the decision.
    return {
      ok: true,
      kind: "decided",
      subject: sealed.subject,
      decision: {
        decisionId: d.decisionId,
        status: d.status,
        selectedOptionId: d.selectedOptionId,
        actorId: d.actor.actorId,
        presentationDigest:
          ctx?.presentationDigest ?? sealed.subject.presentationDigest,
      },
      options: presentedOptions(),
      offerFingerprint: offer.offerFingerprint,
      sessionKey,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  // No applicable durable HD — client digest divergence means stale presentation.
  if (digestMismatch) {
    return {
      ok: true,
      kind: "stale_presentation_required",
      message:
        "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  return {
    ok: true,
    kind: "awaiting_decision",
    subject: sealed.subject,
    options: presentedOptions(),
    offerFingerprint: offer.offerFingerprint,
    sessionKey,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}
