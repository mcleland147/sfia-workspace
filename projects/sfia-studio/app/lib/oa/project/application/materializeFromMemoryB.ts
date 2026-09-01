/**
 * MW1-S03 / CORR-01 — Governed Memory B → Truth C materialization.
 * Never silent. Class 1–4 + explicit MaterializationBasis.
 * CORR-01: Class2 mechanically-verifiable transition; Class3 Pilote≠Morris + HD target binding;
 * RuntimeOaStack composition (see vertical-slice-runtime/service.ts).
 * CORR-02: Class3 requires explicit same-project decisionBasis.executionBasis.scope;
 * HumanDecision.scope is NOT a structural materialization fallback.
 * Memory B ≠ Truth C. Nora ≠ authority. Morris ≠ Pilote persona.
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import type { AppendLivingProjectStateVersion } from "./appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "./getCurrentLivingProjectState";
import type { GetProject } from "./getProject";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { LivingProjectState } from "../domain/types";
import {
  ProductSqliteSession,
  contentHash,
  extractItemText,
  loadSessionRows,
  truthCRevisionsMatch,
  type TruthCRevision,
} from "@/lib/nora-cognitive-runtime";

export type MaterializationClass = 1 | 2 | 3 | 4;

export type MaterializationBasisKind =
  | "verified_fact_evidence"
  | "valid_runtime_state_transition"
  | "accepted_materialization_policy"
  | "pilote_human_decision"
  | "construction_governance_external";

/** Allowlisted non-structural Class 2 transition — validated against current LPS. */
export type RuntimeStateTransition = {
  kind: "set_next_step";
  projectId: string;
  fromLpsVersion: number;
  targetKind: "nextStep";
  /** Exact nextStep value this transition authorizes. */
  nextStep: string;
};

export type MemoryBSourceReference =
  | {
      kind: "raw";
      sessionKey: string;
      seq: number;
      contentHash: string;
    }
  | {
      kind: "compacted_provenance";
      sessionKey: string;
      generation: number;
      sourceSeq: number;
      contentHash: string;
    };

export type MaterializationTarget =
  | { kind: "evidenceIds"; evidenceId: string }
  | { kind: "nextStep"; nextStep: string }
  | { kind: "scope"; scope: string };

export type MaterializationBasis =
  | {
      kind: "verified_fact_evidence";
      referenceId: string;
    }
  | {
      kind: "valid_runtime_state_transition";
      /** Required concrete transition — naked kind label alone is insufficient. */
      transition?: RuntimeStateTransition;
    }
  | {
      kind: "accepted_materialization_policy";
      referenceId?: string;
    }
  | {
      kind: "pilote_human_decision";
      referenceId: string;
    }
  | {
      kind: "construction_governance_external";
    };

export type MaterializationDetailCode =
  | "MATERIALIZATION_BASIS_REQUIRED"
  | "MATERIALIZATION_BASIS_INCOMPATIBLE"
  | "MATERIALIZATION_POLICY_UNRESOLVED"
  | "MEMORY_B_SOURCE_NOT_FOUND"
  | "MEMORY_B_SOURCE_MISMATCH"
  | "MEMORY_B_SOURCE_STALE"
  | "TARGET_NOT_ALLOWED"
  | "EVIDENCE_INVALID"
  | "HUMAN_DECISION_REQUIRED"
  | "HUMAN_DECISION_INVALID"
  | "HUMAN_DECISION_AUTHORITY_INVALID"
  | "HUMAN_DECISION_TARGET_MISMATCH"
  | "CROSS_PROJECT_BASIS"
  | "LPS_VERSION_CONFLICT"
  | "CLASS4_EXTERNAL_ONLY"
  | "PROJECT_NOT_FOUND"
  | "REQUEST_INVALID";

export type MaterializationRequest = {
  projectId: string;
  materializationClass: MaterializationClass;
  basis: MaterializationBasis | null;
  memoryBSource: MemoryBSourceReference;
  target: MaterializationTarget;
  expectedLpsVersion: number;
  correlationId: string;
  actor: ActorReference;
  /** Absolute path to nora-session.sqlite for this Project. */
  sessionDbPath: string;
};

export type MaterializationResult =
  | {
      ok: true;
      status: "accepted";
      materializationClass: MaterializationClass;
      basisKind: MaterializationBasisKind;
      resultingLpsVersion: number;
      targetKind: MaterializationTarget["kind"];
      sourceKind: MemoryBSourceReference["kind"];
      sourceSeq: number;
      sourceContentHash: string;
      durationMs: number;
    }
  | {
      ok: false;
      status: "rejected" | "external_required";
      detailCode: MaterializationDetailCode;
      message: string;
      durationMs: number;
    };

/** Minimal HD shape required for Class 3 binding (existing DecisionServices fields). */
export type MaterializationHumanDecisionView = {
  projectId: string;
  status: string;
  authority: string;
  subject: string;
  scope?: string;
  actor: { actorId: string; role: string };
  decisionBasis?: {
    projectId?: string;
    executionBasis?: { scope?: string };
  };
};

export type MaterializeFromMemoryBDeps = {
  getProject: GetProject;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  audit: ProjectAuditJournalPort;
  getHumanDecision: {
    execute: (req: {
      decisionId: string;
    }) => Promise<
      | { ok: true; decision: MaterializationHumanDecisionView }
      | { ok: false; error: { detailCode?: string; message?: string } }
    >;
  };
  getEvidenceById: (evidenceId: string) => Promise<{
    evidenceId: string;
    status: string;
    availability?: string;
    freshness?: string;
    bindings: { projectId?: string };
  } | null>;
};

function reject(
  started: number,
  detailCode: MaterializationDetailCode,
  message: string,
  status: "rejected" | "external_required" = "rejected",
): MaterializationResult {
  return {
    ok: false,
    status,
    detailCode,
    message,
    durationMs: Date.now() - started,
  };
}

function classTargetCompatible(
  cls: MaterializationClass,
  basis: MaterializationBasis,
  target: MaterializationTarget,
): boolean {
  if (cls === 1) {
    return (
      basis.kind === "verified_fact_evidence" && target.kind === "evidenceIds"
    );
  }
  if (cls === 2) {
    return (
      (basis.kind === "valid_runtime_state_transition" ||
        basis.kind === "accepted_materialization_policy") &&
      target.kind === "nextStep"
    );
  }
  if (cls === 3) {
    return basis.kind === "pilote_human_decision" && target.kind === "scope";
  }
  if (cls === 4) {
    return basis.kind === "construction_governance_external";
  }
  return false;
}

/**
 * MW1-S03-CORR-02 — Class 3 approved structural scope from explicit DecisionBasis only.
 * HumanDecision.scope is NOT a materialization authorization source.
 *
 * Returns:
 * - { ok: true, scope }
 * - { ok: false, detailCode: CROSS_PROJECT_BASIS } when decisionBasis.projectId mismatches
 * - { ok: false, detailCode: HUMAN_DECISION_TARGET_MISMATCH } when executionBasis.scope absent
 */
export function approvedStructuralScopeFromHd(
  hd: MaterializationHumanDecisionView,
  requestProjectId: string,
):
  | { ok: true; scope: string }
  | { ok: false; detailCode: MaterializationDetailCode; message: string } {
  const basis = hd.decisionBasis;
  if (!basis) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message:
        "HumanDecision has no explicit decisionBasis for requested structural materialization",
    };
  }
  if (!basis.projectId || basis.projectId.trim().length === 0) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message: "HumanDecision.decisionBasis.projectId is required",
    };
  }
  if (basis.projectId !== requestProjectId) {
    return {
      ok: false,
      detailCode: "CROSS_PROJECT_BASIS",
      message:
        "HumanDecision.decisionBasis.projectId belongs to a different Project",
    };
  }
  const fromBasis = basis.executionBasis?.scope?.trim();
  if (!fromBasis) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message:
        "HumanDecision has no explicit decisionBasis.executionBasis.scope for requested structural materialization",
    };
  }
  // Intentionally ignore hd.scope — generic decision/authority scope ≠ LPS structural target.
  return { ok: true, scope: fromBasis };
}

function validateClass2Transition(input: {
  projectId: string;
  lpsVersion: number;
  expectedLpsVersion: number;
  basis: Extract<MaterializationBasis, { kind: "valid_runtime_state_transition" }>;
  target: Extract<MaterializationTarget, { kind: "nextStep" }>;
}): { ok: true; transition: RuntimeStateTransition } | {
  ok: false;
  detailCode: MaterializationDetailCode;
  message: string;
} {
  const t = input.basis.transition;
  if (!t) {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message:
        "Class 2 valid_runtime_state_transition requires concrete transition data; naked kind label is insufficient",
    };
  }
  if (t.kind !== "set_next_step") {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Unsupported Class 2 transition kind",
    };
  }
  if (t.targetKind !== "nextStep") {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Class 2 transition targetKind must be nextStep",
    };
  }
  if (t.projectId !== input.projectId) {
    return {
      ok: false,
      detailCode: "CROSS_PROJECT_BASIS",
      message: "Class 2 transition projectId does not match request project",
    };
  }
  if (t.fromLpsVersion !== input.lpsVersion) {
    return {
      ok: false,
      detailCode: "LPS_VERSION_CONFLICT",
      message: "Class 2 transition fromLpsVersion does not match current LPS",
    };
  }
  if (input.expectedLpsVersion !== input.lpsVersion) {
    return {
      ok: false,
      detailCode: "LPS_VERSION_CONFLICT",
      message: "expectedLpsVersion does not match current LPS",
    };
  }
  if (t.nextStep !== input.target.nextStep) {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Class 2 transition nextStep does not match requested target",
    };
  }
  return { ok: true, transition: t };
}

async function resolveMemoryBSource(input: {
  projectId: string;
  source: MemoryBSourceReference;
  currentTruthC: TruthCRevision;
  sessionDbPath: string;
}): Promise<
  | {
      ok: true;
      seq: number;
      contentHash: string;
      excerpt: string;
    }
  | { ok: false; detailCode: MaterializationDetailCode; message: string }
> {
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath: input.sessionDbPath,
    sessionKey: input.source.sessionKey,
  });
  try {
    const loaded = await loadSessionRows(session);
    const source = input.source;
    if (source.kind === "raw") {
      const row = loaded.conversation.find((r) => r.seq === source.seq);
      if (!row) {
        return {
          ok: false,
          detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
          message: "Raw Memory B seq not found in session",
        };
      }
      const text = extractItemText(row.item);
      const hash = contentHash(text);
      if (hash !== source.contentHash) {
        return {
          ok: false,
          detailCode: "MEMORY_B_SOURCE_MISMATCH",
          message: "Raw Memory B contentHash mismatch",
        };
      }
      return {
        ok: true,
        seq: row.seq,
        contentHash: hash,
        excerpt: text.slice(0, 120),
      };
    }

    if (!loaded.compaction) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
        message: "No compaction record in Memory B session",
      };
    }
    if (
      !truthCRevisionsMatch(
        loaded.compaction.truthCRevision,
        input.currentTruthC,
      )
    ) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_STALE",
        message:
          "Compacted Memory B provenance is stale under current Truth C revision",
      };
    }
    const entry = loaded.compaction.provenance.find(
      (p) =>
        p.kind === "raw" &&
        (p.sourceSeq ?? p.seq) === source.sourceSeq &&
        p.contentHash === source.contentHash &&
        p.generation === source.generation,
    );
    if (!entry) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
        message: "Compacted provenance entry not found or mismatched",
      };
    }
    return {
      ok: true,
      seq: entry.sourceSeq ?? entry.seq,
      contentHash: entry.contentHash,
      excerpt: entry.excerpt,
    };
  } finally {
    session.close();
  }
}

/**
 * Governed materialization of Memory B content into Truth C.
 * Fail-closed; mutates only via AppendLivingProjectStateVersion.
 */
export class MaterializeFromMemoryB {
  constructor(private readonly deps: MaterializeFromMemoryBDeps) {}

  async execute(request: MaterializationRequest): Promise<MaterializationResult> {
    const started = Date.now();
    const ts = new Date().toISOString();
    const auditReject = (
      detailCode: MaterializationDetailCode,
      message: string,
      status: "rejected" | "external_required" = "rejected",
    ): MaterializationResult => {
      this.deps.audit.append({
        event: "oa.memory.materialization.rejected",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: request.materializationClass,
        basisKind: request.basis?.kind,
        targetKind: request.target.kind,
        result: status === "external_required" ? "external_required" : "rejected",
        detailCode,
        durationMs: Date.now() - started,
      });
      return reject(started, detailCode, message, status);
    };

    if (
      !request.projectId ||
      !request.correlationId ||
      !request.sessionDbPath ||
      !request.memoryBSource ||
      !request.target ||
      !request.actor
    ) {
      return auditReject("REQUEST_INVALID", "Materialization request incomplete");
    }

    const project = await this.deps.getProject.execute({
      projectId: request.projectId,
    });
    if (!project.ok) {
      return auditReject("PROJECT_NOT_FOUND", "Project not found");
    }

    const current = await this.deps.getCurrentLivingProjectState.execute({
      projectId: request.projectId,
    });
    if (!current.ok) {
      return auditReject("PROJECT_NOT_FOUND", "Current LPS not found");
    }
    const lps: LivingProjectState = current.livingProjectState;
    if (lps.version !== request.expectedLpsVersion) {
      return auditReject(
        "LPS_VERSION_CONFLICT",
        `expectedVersion ${request.expectedLpsVersion} != current ${lps.version}`,
      );
    }

    const truthC: TruthCRevision = {
      lpsId: lps.lpsVersionId,
      lpsVersion: lps.version,
    };
    const sourceResolved = await resolveMemoryBSource({
      projectId: request.projectId,
      source: request.memoryBSource,
      currentTruthC: truthC,
      sessionDbPath: request.sessionDbPath,
    });
    if (!sourceResolved.ok) {
      return auditReject(sourceResolved.detailCode, sourceResolved.message);
    }

    if (request.materializationClass === 4) {
      if (
        !request.basis ||
        request.basis.kind !== "construction_governance_external"
      ) {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 4 requires construction_governance_external basis",
        );
      }
      return auditReject(
        "CLASS4_EXTERNAL_ONLY",
        "Class 4 construction/governance is external-only; no Product Truth C mutation",
        "external_required",
      );
    }

    if (!request.basis) {
      return auditReject(
        "MATERIALIZATION_BASIS_REQUIRED",
        "MaterializationBasis is required; Memory B never silently becomes Truth C",
      );
    }

    if (
      !classTargetCompatible(
        request.materializationClass,
        request.basis,
        request.target,
      )
    ) {
      return auditReject(
        "MATERIALIZATION_BASIS_INCOMPATIBLE",
        "Basis/class/target combination not allowed",
      );
    }

    // Class 1 — verified Evidence
    if (request.materializationClass === 1) {
      if (request.target.kind !== "evidenceIds") {
        return auditReject("TARGET_NOT_ALLOWED", "Class 1 target must be evidenceIds");
      }
      if (request.basis.kind !== "verified_fact_evidence") {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 1 requires verified_fact_evidence",
        );
      }
      const evidenceId = request.basis.referenceId;
      if (!evidenceId || evidenceId !== request.target.evidenceId) {
        return auditReject(
          "EVIDENCE_INVALID",
          "Class 1 basis referenceId must match target evidenceId",
        );
      }
      const evidence = await this.deps.getEvidenceById(evidenceId);
      if (!evidence) {
        return auditReject("EVIDENCE_INVALID", "Evidence not found");
      }
      if (evidence.bindings.projectId !== request.projectId) {
        return auditReject(
          "CROSS_PROJECT_BASIS",
          "Evidence belongs to a different Project",
        );
      }
      if (evidence.status !== "verified") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is not verified; Memory B text is not Evidence",
        );
      }
      // Reserve: verified alone is not enough if availability/freshness say otherwise.
      if (evidence.availability !== undefined && evidence.availability !== "available") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is verified but not available",
        );
      }
      if (evidence.freshness === "stale") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is verified but freshness is stale",
        );
      }

      const nextEvidenceIds = Array.from(
        new Set([...(lps.evidenceIds ?? []), evidenceId]),
      );
      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: lps.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        evidenceIds: nextEvidenceIds,
        decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
        nextStep: lps.nextStep,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 1,
        basisKind: request.basis.kind,
        basisReferenceId: evidenceId,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "evidenceIds",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 1,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "evidenceIds",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    // Class 2 — non-structural nextStep with mechanically verified transition
    if (request.materializationClass === 2) {
      if (request.target.kind !== "nextStep") {
        return auditReject(
          "TARGET_NOT_ALLOWED",
          "Class 2 may only target non-structural nextStep",
        );
      }
      if (request.basis.kind === "accepted_materialization_policy") {
        // No repo-native accepted materialization policy resolver exists.
        return auditReject(
          "MATERIALIZATION_POLICY_UNRESOLVED",
          "accepted_materialization_policy has no resolvable Product policy asset; fail closed",
        );
      }
      if (request.basis.kind !== "valid_runtime_state_transition") {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 2 requires valid_runtime_state_transition or accepted_materialization_policy",
        );
      }
      const transitionCheck = validateClass2Transition({
        projectId: request.projectId,
        lpsVersion: lps.version,
        expectedLpsVersion: request.expectedLpsVersion,
        basis: request.basis,
        target: request.target,
      });
      if (!transitionCheck.ok) {
        return auditReject(transitionCheck.detailCode, transitionCheck.message);
      }
      const transition = transitionCheck.transition;

      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: lps.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        nextStep: request.target.nextStep,
        evidenceIds: lps.evidenceIds ? [...lps.evidenceIds] : undefined,
        decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 2,
        basisKind: request.basis.kind,
        basisReferenceId: `set_next_step@lps:${transition.fromLpsVersion}:${transition.nextStep}`,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "nextStep",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 2,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "nextStep",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    // Class 3 — structural scope requires existing runtime Pilote HD bound to target
    if (request.materializationClass === 3) {
      if (request.target.kind !== "scope") {
        return auditReject(
          "TARGET_NOT_ALLOWED",
          "Class 3 target must be structural scope",
        );
      }
      if (request.basis.kind !== "pilote_human_decision" || !request.basis.referenceId) {
        return auditReject(
          "HUMAN_DECISION_REQUIRED",
          "Class 3 requires existing Pilote HumanDecision reference",
        );
      }
      const hd = await this.deps.getHumanDecision.execute({
        decisionId: request.basis.referenceId,
      });
      if (!hd.ok) {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision not found",
        );
      }
      if (hd.decision.projectId !== request.projectId) {
        return auditReject(
          "CROSS_PROJECT_BASIS",
          "HumanDecision belongs to a different Project",
        );
      }
      if (
        hd.decision.status === "superseded" ||
        hd.decision.status === "revoked" ||
        hd.decision.status === "refused"
      ) {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision is not current/accepted",
        );
      }
      if (hd.decision.status !== "accepted") {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision must be accepted",
        );
      }
      // Morris construction authority ≠ Pilote runtime HD for Product Class 3.
      if (hd.decision.authority === "morris") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "authority=morris is construction/governance — not a Product Class 3 Pilote basis",
        );
      }
      if (hd.decision.authority === "system_non_structuring") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "system_non_structuring cannot authorize structural Class 3 mutation",
        );
      }
      if (hd.decision.authority !== "delegated") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "Class 3 requires runtime-compatible delegated Pilote HumanDecision authority",
        );
      }
      if (hd.decision.actor.role !== "decision_maker") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "Class 3 requires HumanDecision actor role decision_maker (Pilote runtime)",
        );
      }

      const approved = approvedStructuralScopeFromHd(
        hd.decision,
        request.projectId,
      );
      if (!approved.ok) {
        return auditReject(approved.detailCode, approved.message);
      }
      if (approved.scope !== request.target.scope) {
        return auditReject(
          "HUMAN_DECISION_TARGET_MISMATCH",
          "HumanDecision decisionBasis.executionBasis.scope does not match requested structural target",
        );
      }

      const nextDecisionIds = Array.from(
        new Set([...(lps.decisionIds ?? []), request.basis.referenceId]),
      );
      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: request.target.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        decisionIds: nextDecisionIds,
        evidenceIds: lps.evidenceIds ? [...lps.evidenceIds] : undefined,
        nextStep: lps.nextStep,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 3,
        basisKind: request.basis.kind,
        basisReferenceId: request.basis.referenceId,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "scope",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 3,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "scope",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    return auditReject("REQUEST_INVALID", "Unsupported materialization class");
  }
}

/** Factory from RuntimeOaStack-compatible deps. */
export function createMaterializeFromMemoryB(deps: {
  projectServices: {
    getProject: GetProject;
    getCurrentLivingProjectState: GetCurrentLivingProjectState;
    appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
    audit: ProjectAuditJournalPort;
  };
  getHumanDecision: MaterializeFromMemoryBDeps["getHumanDecision"];
  getEvidenceById: MaterializeFromMemoryBDeps["getEvidenceById"];
}): MaterializeFromMemoryB {
  return new MaterializeFromMemoryB({
    getProject: deps.projectServices.getProject,
    getCurrentLivingProjectState:
      deps.projectServices.getCurrentLivingProjectState,
    appendLivingProjectStateVersion:
      deps.projectServices.appendLivingProjectStateVersion,
    audit: deps.projectServices.audit,
    getHumanDecision: deps.getHumanDecision,
    getEvidenceById: deps.getEvidenceById,
  });
}
