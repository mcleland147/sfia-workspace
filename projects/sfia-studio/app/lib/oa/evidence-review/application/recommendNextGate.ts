/**
 * RecommendNextGate — T-A6-D5 bounded coordination (read-only).
 *
 * Reads Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment via RO ports.
 * Never mutates D1–D4. Never consumes a gate. Never creates a Morris decision.
 * Never sets executionAuthority. Never closes a reserve. Never launches T-A7.
 *
 * Delivery: RecommendNextGate L1 · D-T-A6-DEL-03 · D-T-A6-DEL-06 · D-T-A6-10.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import { createCoordinationError } from "../domain/coordinationErrors";
import type {
  AuthorityRequirement,
  AuthorityRequirementLevel,
  CoordinationBlocker,
  CoordinationGap,
  CoordinationResult,
  CoordinationStatus,
  GateRecommendation,
  NextActionRecommendation,
  RecommendNextGateRequest,
  RecommendNextGateResult,
  SourceSnapshot,
  VersionedRef,
} from "../domain/coordinationTypes";
import { containsForbiddenSecret, isOaIdentifier } from "../domain/invariants";
import { isProjectId } from "../domain/maturityAssessmentInvariants";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { Evidence } from "../domain/types";
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentReaderPort } from "../ports/maturityAssessmentReader";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";

function cloneSnapshots(snaps: SourceSnapshot[]): SourceSnapshot[] {
  return snaps.map((s) => ({ ...s }));
}

function cloneBlockers(items: CoordinationBlocker[]): CoordinationBlocker[] {
  return items.map((b) => ({ ...b }));
}

function cloneGaps(items: CoordinationGap[]): CoordinationGap[] {
  return items.map((g) => ({ ...g }));
}

function defensiveResult(result: CoordinationResult): CoordinationResult {
  return {
    ...result,
    sourceSnapshots: cloneSnapshots(result.sourceSnapshots),
    blockers: cloneBlockers(result.blockers),
    gaps: cloneGaps(result.gaps),
    nextAction: result.nextAction ? { ...result.nextAction, reasons: [...result.nextAction.reasons] } : undefined,
    nextGate: result.nextGate
      ? {
          ...result.nextGate,
          reasons: [...result.nextGate.reasons],
          gateConsumed: false,
          decisionCreated: false,
        }
      : undefined,
    authorityRequirement: {
      ...result.authorityRequirement,
      reasons: [...result.authorityRequirement.reasons],
    },
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    kind: "recommendation",
  };
}

function sortRefs(refs: VersionedRef[]): VersionedRef[] {
  return [...refs].sort((a, b) =>
    a.id === b.id ? a.version - b.version : a.id.localeCompare(b.id),
  );
}

function maxAuthority(
  a: AuthorityRequirementLevel,
  b: AuthorityRequirementLevel,
): AuthorityRequirementLevel {
  const rank: Record<AuthorityRequirementLevel, number> = {
    none: 0,
    human: 1,
    n2: 2,
    n3: 3,
    morris: 4,
  };
  return rank[a] >= rank[b] ? a : b;
}

export class RecommendNextGate {
  constructor(
    private readonly evidence: EvidenceReaderPort,
    private readonly reviewBundles: ReviewBundleReaderPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly maturity: MaturityAssessmentReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RecommendNextGateRequest,
  ): Promise<RecommendNextGateResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createCoordinationError>[0]["detailCode"],
      internalCauseRef: string,
      coordination?: CoordinationResult,
    ): RecommendNextGateResult => {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.coordination.operation_rejected",
        ts: timestamp,
        correlationId,
        actorId: request.actor?.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createCoordinationError({
          detailCode,
          timestamp,
          correlationId,
          projectId: request.projectId,
          internalCauseRef,
        }),
        coordination: coordination
          ? defensiveResult(coordination)
          : undefined,
        durationMs,
      };
    };

    try {
      if (!isProjectId(request.projectId)) {
        return fail("COORDINATION_INVALID", "project_id_invalid");
      }
      if (
        request.subjectRef !== undefined &&
        request.subjectRef !== "" &&
        !isOaIdentifier(request.subjectRef)
      ) {
        return fail("COORDINATION_INVALID", "subject_ref_invalid");
      }
      if (
        request.actor?.displayName &&
        containsForbiddenSecret(request.actor.displayName)
      ) {
        return fail("COORDINATION_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (request.attemptAutoLaunchNextCycle === true) {
        return fail("T_A7_AUTO_LAUNCH_FORBIDDEN", "auto_launch_next_cycle");
      }

      const hasMaturity = Boolean(request.maturityAssessmentId);
      const hasClaims = (request.claimEvaluationRefs?.length ?? 0) > 0;
      const hasBundles = (request.reviewBundleRefs?.length ?? 0) > 0;
      const hasEvidence = (request.evidenceRefs?.length ?? 0) > 0;
      if (!hasMaturity && !hasClaims && !hasBundles && !hasEvidence) {
        return fail("COORDINATION_NO_SOURCES", "no_sources");
      }

      const blockers: CoordinationBlocker[] = [];
      const gaps: CoordinationGap[] = [];
      const snapshots: SourceSnapshot[] = [];
      let authorityLevel: AuthorityRequirementLevel = "none";
      const authorityReasons: string[] = [];

      let maturityAssessment: MaturityAssessment | null = null;
      const claimMap = new Map<string, ClaimEvaluation>();
      const bundleMap = new Map<string, ReviewBundle>();
      const evidenceMap = new Map<string, Evidence>();

      // --- Load maturity (exact version) ---
      if (request.maturityAssessmentId) {
        maturityAssessment = await this.maturity.findById(
          request.maturityAssessmentId,
        );
        if (!maturityAssessment) {
          blockers.push({
            code: "source_missing",
            sourceKind: "maturity_assessment",
            sourceId: request.maturityAssessmentId,
          });
        } else {
          if (
            request.maturityAssessmentVersion !== undefined &&
            maturityAssessment.version !== request.maturityAssessmentVersion
          ) {
            blockers.push({
              code: "version_mismatch",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              sourceVersion: maturityAssessment.version,
              detail: `expected_version=${request.maturityAssessmentVersion}`,
            });
          }
          if (maturityAssessment.projectId !== request.projectId) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              detail: "project_mismatch",
            });
          }
          if (
            request.subjectRef &&
            maturityAssessment.subjectRef !== request.subjectRef
          ) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "maturity_assessment",
              sourceId: maturityAssessment.maturityAssessmentId,
              detail: "subject_mismatch",
            });
          }
          snapshots.push({
            kind: "maturity_assessment",
            id: maturityAssessment.maturityAssessmentId,
            version: maturityAssessment.version,
            status: maturityAssessment.status,
            projectId: maturityAssessment.projectId,
            subjectRef: maturityAssessment.subjectRef,
          });
        }
      }

      // Collect claim refs: explicit + from maturity bindings
      const claimRefs: VersionedRef[] = [];
      if (request.claimEvaluationRefs) {
        claimRefs.push(...request.claimEvaluationRefs);
      }
      if (maturityAssessment) {
        for (const b of maturityAssessment.claimBindings) {
          claimRefs.push({
            id: b.claimEvaluationId,
            version: b.claimEvaluationVersion,
          });
        }
      }
      const uniqueClaimRefs = dedupeRefs(sortRefs(claimRefs));

      for (const ref of uniqueClaimRefs) {
        const claim = await this.claims.findById(ref.id);
        if (!claim) {
          blockers.push({
            code: "source_missing",
            sourceKind: "claim_evaluation",
            sourceId: ref.id,
            sourceVersion: ref.version,
          });
          continue;
        }
        if (claim.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        const superseded = await this.claims.isSuperseded(
          claim.claimEvaluationId,
        );
        if (superseded) {
          blockers.push({
            code: "claim_superseded",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
        }
        if (claim.status === "disputed") {
          blockers.push({
            code: "claim_disputed",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
          authorityLevel = maxAuthority(authorityLevel, "human");
          authorityReasons.push("dispute_requires_human");
        }
        if (claim.status === "waived") {
          blockers.push({
            code: "claim_waived",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
        }
        if (
          claim.status === "pass" &&
          claim.criticality !== "non_critical" &&
          !claim.confirmedBy
        ) {
          blockers.push({
            code: "claim_not_confirmed",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
            sourceVersion: claim.version,
          });
          gaps.push({
            code: "claim_confirmation_missing",
            sourceKind: "claim_evaluation",
            sourceId: claim.claimEvaluationId,
          });
          if (claim.criticality === "structural") {
            authorityLevel = maxAuthority(authorityLevel, "morris");
            authorityReasons.push("structural_claim_requires_morris");
          } else {
            authorityLevel = maxAuthority(authorityLevel, "human");
            authorityReasons.push("critical_claim_requires_human");
          }
        }
        if (
          claim.status !== "pass" &&
          claim.status !== "waived" &&
          claim.status !== "disputed"
        ) {
          if (claim.status === "pending" || claim.status === "evaluating") {
            gaps.push({
              code: "claim_confirmation_missing",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              detail: `status=${claim.status}`,
            });
          } else if (claim.status === "fail" || claim.status === "not_proven") {
            blockers.push({
              code: "claim_not_pass",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              sourceVersion: claim.version,
            });
          }
        }

        claimMap.set(claim.claimEvaluationId, claim);
        snapshots.push({
          kind: "claim_evaluation",
          id: claim.claimEvaluationId,
          version: claim.version,
          status: claim.status,
        });
      }

      // Collect review bundle refs
      const bundleRefs: VersionedRef[] = [];
      if (request.reviewBundleRefs) {
        bundleRefs.push(...request.reviewBundleRefs);
      }
      if (maturityAssessment?.reviewBundleRefs) {
        for (const r of maturityAssessment.reviewBundleRefs) {
          bundleRefs.push({ id: r.reviewBundleId, version: r.version });
        }
      }
      for (const claim of claimMap.values()) {
        bundleRefs.push({
          id: claim.reviewBundleId,
          version: claim.reviewBundleVersion,
        });
      }
      const uniqueBundleRefs = dedupeRefs(sortRefs(bundleRefs));

      for (const ref of uniqueBundleRefs) {
        const bundle = await this.reviewBundles.findById(ref.id);
        if (!bundle) {
          blockers.push({
            code: "source_missing",
            sourceKind: "review_bundle",
            sourceId: ref.id,
            sourceVersion: ref.version,
          });
          continue;
        }
        if (bundle.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        if (bundle.projectId !== request.projectId) {
          blockers.push({
            code: "cross_aggregate_inconsistency",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            detail: "project_mismatch",
          });
        }
        if (!bundle.frozenAt) {
          blockers.push({
            code: "review_bundle_not_frozen",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
        }
        if (
          bundle.completeness === "incomplete" ||
          bundle.status === "incomplete"
        ) {
          blockers.push({
            code: "review_bundle_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
          gaps.push({
            code: "review_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
          });
        }
        if (bundle.synthesisOnly) {
          blockers.push({
            code: "review_bundle_synthesis_only",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            sourceVersion: bundle.version,
          });
        }
        if (bundle.status === "draft") {
          gaps.push({
            code: "review_incomplete",
            sourceKind: "review_bundle",
            sourceId: bundle.reviewBundleId,
            detail: "status=draft",
          });
        }

        // Cross-check claim → bundle version binding
        for (const claim of claimMap.values()) {
          if (
            claim.reviewBundleId === bundle.reviewBundleId &&
            claim.reviewBundleVersion !== bundle.version &&
            claim.reviewBundleVersion === ref.version
          ) {
            // claim expects ref.version; bundle loaded may differ — already flagged
          }
          if (
            claim.reviewBundleId === bundle.reviewBundleId &&
            claim.reviewBundleVersion !== bundle.version
          ) {
            blockers.push({
              code: "cross_aggregate_inconsistency",
              sourceKind: "claim_evaluation",
              sourceId: claim.claimEvaluationId,
              detail: `claim_rb_version=${claim.reviewBundleVersion};bundle_version=${bundle.version}`,
            });
          }
        }

        bundleMap.set(bundle.reviewBundleId, bundle);
        snapshots.push({
          kind: "review_bundle",
          id: bundle.reviewBundleId,
          version: bundle.version,
          status: bundle.status,
          projectId: bundle.projectId,
        });
      }

      // Collect evidence refs
      const evidenceRefs: VersionedRef[] = [];
      if (request.evidenceRefs) {
        evidenceRefs.push(...request.evidenceRefs);
      }
      if (maturityAssessment?.evidenceRefs) {
        for (const id of maturityAssessment.evidenceRefs) {
          evidenceRefs.push({ id, version: 0 }); // version 0 = any (id-only from maturity)
        }
      }
      for (const bundle of bundleMap.values()) {
        if (bundle.frozenEvidenceSnapshots?.length) {
          for (const snap of bundle.frozenEvidenceSnapshots) {
            evidenceRefs.push({
              id: snap.evidenceId,
              version: snap.evidenceVersion,
            });
          }
        } else {
          for (const id of bundle.evidenceRefs) {
            evidenceRefs.push({ id, version: 0 });
          }
        }
      }
      for (const claim of claimMap.values()) {
        for (const id of claim.requiredEvidenceRefs) {
          evidenceRefs.push({ id, version: 0 });
        }
        for (const id of claim.providedEvidenceRefs ?? []) {
          evidenceRefs.push({ id, version: 0 });
        }
      }
      const uniqueEvidenceRefs = dedupeEvidenceRefs(sortRefs(evidenceRefs));

      for (const ref of uniqueEvidenceRefs) {
        const evidence = await this.evidence.findById(ref.id);
        if (!evidence) {
          blockers.push({
            code: "source_missing",
            sourceKind: "evidence",
            sourceId: ref.id,
            sourceVersion: ref.version || undefined,
          });
          continue;
        }
        if (ref.version > 0 && evidence.version !== ref.version) {
          blockers.push({
            code: "version_mismatch",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
            detail: `expected_version=${ref.version}`,
          });
        }
        if (
          evidence.status === "unavailable" ||
          evidence.availability === "unavailable"
        ) {
          blockers.push({
            code: "evidence_unavailable",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
          });
          gaps.push({
            code: "evidence_incomplete",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
          });
        } else if (
          evidence.status !== "verified" &&
          evidence.status !== "available"
        ) {
          if (
            evidence.status === "incomplete" ||
            evidence.status === "expected"
          ) {
            gaps.push({
              code: "evidence_incomplete",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              detail: `status=${evidence.status}`,
            });
          }
        }
        if (
          evidence.status !== "verified" &&
          evidence.status !== "unavailable" &&
          evidence.status !== "rejected" &&
          evidence.status !== "superseded"
        ) {
          // available but not verified is a soft gap for positive recommendation
          if (evidence.status === "available") {
            gaps.push({
              code: "evidence_incomplete",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              detail: "not_verified",
            });
            blockers.push({
              code: "evidence_not_verified",
              sourceKind: "evidence",
              sourceId: evidence.evidenceId,
              sourceVersion: evidence.version,
            });
          }
        }
        if (evidence.status === "rejected" || evidence.status === "stale") {
          blockers.push({
            code: "evidence_not_verified",
            sourceKind: "evidence",
            sourceId: evidence.evidenceId,
            sourceVersion: evidence.version,
            detail: `status=${evidence.status}`,
          });
        }

        evidenceMap.set(evidence.evidenceId, evidence);
        snapshots.push({
          kind: "evidence",
          id: evidence.evidenceId,
          version: evidence.version,
          status: evidence.status,
        });
      }

      // Maturity status checks
      if (maturityAssessment) {
        if (maturityAssessment.status === "blocked") {
          blockers.push({
            code: "maturity_blocked",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
            sourceVersion: maturityAssessment.version,
          });
          authorityLevel = maxAuthority(authorityLevel, "morris");
          authorityReasons.push("maturity_blocked_requires_morris");
        }
        if (maturityAssessment.status === "superseded") {
          blockers.push({
            code: "maturity_superseded",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
            sourceVersion: maturityAssessment.version,
          });
        }
        if (maturityAssessment.status === "proposed") {
          gaps.push({
            code: "maturity_confirmation_missing",
            sourceKind: "maturity_assessment",
            sourceId: maturityAssessment.maturityAssessmentId,
          });
          const level = maturityAssessment.proposedLevel;
          if (level === "IMPLEMENTED" || level === "ADOPTED") {
            authorityLevel = maxAuthority(authorityLevel, "morris");
            authorityReasons.push("confirm_maturity_requires_morris");
          } else {
            authorityLevel = maxAuthority(authorityLevel, "human");
            authorityReasons.push("confirm_maturity_requires_human");
          }
        }
        if (
          maturityAssessment.blockingReservationRefs.length > 0 ||
          (request.openHardReservationRefs?.length ?? 0) > 0
        ) {
          const hardRefs = [
            ...maturityAssessment.blockingReservationRefs,
            ...(request.openHardReservationRefs ?? []),
          ];
          for (const ref of [...new Set(hardRefs)].sort()) {
            blockers.push({
              code: "hard_reservation_open",
              sourceId: ref,
              detail: "hard_reservation",
            });
            gaps.push({
              code: "reserve_open",
              sourceId: ref,
            });
            if (ref === "R-M01" || ref.startsWith("R-M01")) {
              gaps.push({ code: "r_m01_open", sourceId: ref });
            }
          }
          authorityLevel = maxAuthority(authorityLevel, "morris");
          authorityReasons.push("hard_reservation_requires_morris");
        }
      }

      // Always note C1–C4 remain not validated (delivery anti-claim)
      gaps.push({
        code: "c1_c4_not_validated",
        detail: "R-T-A6-DEL-C1..C4_NOT_VALIDATED",
      });

      // Deterministic ordering of blockers/gaps/snapshots
      blockers.sort(compareBlockers);
      gaps.sort(compareGaps);
      snapshots.sort(compareSnapshots);

      const hardBlock = blockers.some((b) =>
        [
          "source_missing",
          "version_mismatch",
          "cross_aggregate_inconsistency",
          "hard_reservation_open",
          "maturity_blocked",
          "maturity_superseded",
          "claim_disputed",
          "claim_superseded",
          "t_a7_auto_launch_forbidden",
        ].includes(b.code),
      );

      const positiveBlocked = blockers.length > 0;

      let status: CoordinationStatus;
      let nextAction: NextActionRecommendation | undefined;
      let nextGate: GateRecommendation | undefined;

      if (hardBlock || positiveBlocked) {
        const action = pickNextAction(blockers, gaps, maturityAssessment);
        if (
          blockers.some((b) => b.code === "hard_reservation_open") ||
          blockers.some((b) => b.code === "maturity_blocked") ||
          blockers.some((b) => b.code === "claim_disputed")
        ) {
          status = "blocked";
          authorityLevel = maxAuthority(authorityLevel, "morris");
        } else if (
          gaps.some((g) => g.code === "maturity_confirmation_missing") ||
          gaps.some((g) => g.code === "claim_confirmation_missing")
        ) {
          status = "requires_human_decision";
        } else {
          status = "not_recommended";
        }
        nextAction = action;
        // Never emit a positive gate when blockers exist
        nextGate = undefined;
      } else if (
        maturityAssessment &&
        maturityAssessment.status === "confirmed"
      ) {
        status = "gate_candidate";
        authorityLevel = maxAuthority(authorityLevel, "morris");
        authorityReasons.push("next_cycle_requires_explicit_morris_go");
        nextGate = {
          kind: "recommendation",
          gateCode: "SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE",
          gateConsumed: false,
          decisionCreated: false,
          reasons: [
            "maturity_confirmed",
            "chain_coherent",
            "D-T-A6-10_no_auto_next_cycle",
            "T_A7_AUTO_LAUNCH_FORBIDDEN",
          ],
          authorityRequired: "morris",
        };
        nextAction = {
          kind: "recommendation",
          actionCode: "solicit_morris_go",
          reasons: [
            "maturity_confirmed",
            "explicit_morris_go_required",
            "not_auto_launch",
          ],
          authorityRequired: "morris",
        };
      } else if (
        maturityAssessment &&
        maturityAssessment.status === "proposed"
      ) {
        status = "requires_human_decision";
        const level = maturityAssessment.proposedLevel;
        const morris = level === "IMPLEMENTED" || level === "ADOPTED";
        if (morris) {
          authorityLevel = maxAuthority(authorityLevel, "morris");
        } else {
          authorityLevel = maxAuthority(authorityLevel, "human");
        }
        nextAction = {
          kind: "recommendation",
          actionCode: "confirm_maturity",
          reasons: ["maturity_proposed", "confirmation_required"],
          authorityRequired: morris ? "morris" : "human",
        };
        nextGate = undefined;
      } else if (!maturityAssessment && claimMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "propose_maturity",
          reasons: ["claims_present", "maturity_absent"],
          authorityRequired: "none",
        };
      } else if (!maturityAssessment && bundleMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "evaluate_claim",
          reasons: ["review_bundle_present", "claims_absent"],
          authorityRequired: "none",
        };
      } else if (!maturityAssessment && evidenceMap.size > 0) {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "freeze_review_bundle",
          reasons: ["evidence_present", "review_bundle_absent"],
          authorityRequired: "human",
        };
        authorityLevel = maxAuthority(authorityLevel, "human");
      } else {
        status = "not_recommended";
        nextAction = {
          kind: "recommendation",
          actionCode: "complete_evidence",
          reasons: ["insufficient_chain"],
          authorityRequired: "none",
        };
      }

      const authorityRequirement: AuthorityRequirement = {
        level: authorityLevel,
        morrisRequired: authorityLevel === "morris",
        reasons: [...new Set(authorityReasons)].sort(),
      };

      const coordination: CoordinationResult = defensiveResult({
        kind: "recommendation",
        status,
        projectId: request.projectId,
        subjectRef: request.subjectRef,
        assessedAt: timestamp,
        sourceSnapshots: snapshots,
        blockers,
        gaps,
        nextAction,
        nextGate,
        authorityRequirement,
        executionAuthority: false,
        gateConsumed: false,
        decisionCreated: false,
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event:
          status === "blocked"
            ? "oa.coordination.blocked"
            : status === "gate_candidate"
              ? "oa.coordination.next_gate_recommended"
              : "oa.coordination.next_action_recommended",
        ts: timestamp,
        correlationId,
        actorId: request.actor?.actorId,
        maturityAssessmentId: maturityAssessment?.maturityAssessmentId,
        result: "ok",
        detailCode: status,
        durationMs,
      });

      return { ok: true, coordination, durationMs };
    } catch (err) {
      return fail(
        "COORDINATION_INVALID",
        err instanceof Error ? err.name : "unknown",
      );
    }
  }
}

function dedupeRefs(refs: VersionedRef[]): VersionedRef[] {
  const map = new Map<string, VersionedRef>();
  for (const ref of refs) {
    const key = `${ref.id}@${ref.version}`;
    map.set(key, ref);
  }
  return [...map.values()].sort((a, b) =>
    a.id === b.id ? a.version - b.version : a.id.localeCompare(b.id),
  );
}

/** Prefer exact version when both id-only (0) and versioned refs exist. */
function dedupeEvidenceRefs(refs: VersionedRef[]): VersionedRef[] {
  const byId = new Map<string, VersionedRef>();
  for (const ref of refs) {
    const existing = byId.get(ref.id);
    if (!existing) {
      byId.set(ref.id, ref);
      continue;
    }
    if (existing.version === 0 && ref.version > 0) {
      byId.set(ref.id, ref);
    } else if (
      existing.version > 0 &&
      ref.version > 0 &&
      existing.version !== ref.version
    ) {
      // Keep both via synthetic — handled by returning both versions:
      // store max and let version_mismatch fire if needed; prefer higher for lookup
      byId.set(ref.id, ref.version >= existing.version ? ref : existing);
    }
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function compareBlockers(a: CoordinationBlocker, b: CoordinationBlocker): number {
  return (
    a.code.localeCompare(b.code) ||
    (a.sourceId ?? "").localeCompare(b.sourceId ?? "") ||
    (a.detail ?? "").localeCompare(b.detail ?? "")
  );
}

function compareGaps(a: CoordinationGap, b: CoordinationGap): number {
  return (
    a.code.localeCompare(b.code) ||
    (a.sourceId ?? "").localeCompare(b.sourceId ?? "") ||
    (a.detail ?? "").localeCompare(b.detail ?? "")
  );
}

function compareSnapshots(a: SourceSnapshot, b: SourceSnapshot): number {
  return (
    a.kind.localeCompare(b.kind) ||
    a.id.localeCompare(b.id) ||
    a.version - b.version
  );
}

function pickNextAction(
  blockers: CoordinationBlocker[],
  gaps: CoordinationGap[],
  maturity: MaturityAssessment | null,
): NextActionRecommendation {
  const has = (code: CoordinationBlocker["code"]) =>
    blockers.some((b) => b.code === code);

  if (has("hard_reservation_open") || has("maturity_blocked")) {
    return {
      kind: "recommendation",
      actionCode: "solicit_morris_arbitration",
      reasons: ["hard_blocker"],
      authorityRequired: "morris",
    };
  }
  if (has("claim_disputed")) {
    return {
      kind: "recommendation",
      actionCode: "resolve_dispute",
      reasons: ["claim_disputed"],
      authorityRequired: "human",
    };
  }
  if (has("maturity_superseded")) {
    return {
      kind: "recommendation",
      actionCode: "propose_maturity",
      reasons: ["maturity_superseded"],
      authorityRequired: "none",
    };
  }
  if (gaps.some((g) => g.code === "maturity_confirmation_missing")) {
    const level = maturity?.proposedLevel;
    const morris = level === "IMPLEMENTED" || level === "ADOPTED";
    return {
      kind: "recommendation",
      actionCode: "confirm_maturity",
      reasons: ["maturity_proposed"],
      authorityRequired: morris ? "morris" : "human",
    };
  }
  if (has("claim_not_confirmed") || gaps.some((g) => g.code === "claim_confirmation_missing")) {
    return {
      kind: "recommendation",
      actionCode: "confirm_claim_evaluation",
      reasons: ["claim_confirmation_missing"],
      authorityRequired: "human",
    };
  }
  if (has("claim_waived") || has("claim_not_pass") || has("claim_superseded")) {
    return {
      kind: "recommendation",
      actionCode: "evaluate_claim",
      reasons: ["claim_not_eligible_for_positive"],
      authorityRequired: "none",
    };
  }
  if (
    has("review_bundle_not_frozen") ||
    has("review_bundle_incomplete") ||
    has("review_bundle_synthesis_only")
  ) {
    return {
      kind: "recommendation",
      actionCode: has("review_bundle_not_frozen")
        ? "freeze_review_bundle"
        : "complete_review",
      reasons: ["review_bundle_not_ready"],
      authorityRequired: "human",
    };
  }
  if (has("evidence_unavailable") || has("evidence_not_verified") || has("source_missing")) {
    const missingEvidence = blockers.some(
      (b) => b.code === "source_missing" && b.sourceKind === "evidence",
    );
    return {
      kind: "recommendation",
      actionCode: missingEvidence
        ? "complete_evidence"
        : "verify_evidence_integrity",
      reasons: ["evidence_not_ready"],
      authorityRequired: "none",
    };
  }
  if (has("version_mismatch") || has("cross_aggregate_inconsistency")) {
    return {
      kind: "recommendation",
      actionCode: "downgrade_maturity",
      reasons: ["binding_inconsistency"],
      authorityRequired: "human",
    };
  }
  return {
    kind: "recommendation",
    actionCode: "solicit_morris_arbitration",
    reasons: ["fail_closed_default"],
    authorityRequired: "morris",
  };
}
