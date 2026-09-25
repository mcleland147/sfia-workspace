/**
 * Rematerialize docs_write evidenceRequirements when a durable confirmation_required
 * EC lists Git lifecycle proofs that its own NO_* constraints forbid.
 *
 * Reuses: supersedeExecutionContract → validateExecutionContract.
 * Does NOT Confirm / Authorize / StartExecution / REAL spawn.
 * Does NOT mutate SQLite outside OA services.
 */

import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { readContractInspectionState } from "../w2/inspectExecutionContract";
import type { ContractInspectionStateDto } from "../w2/types";
import {
  DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON,
  docsWriteEvidenceContradictsConstraints,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
} from "./boundedDocsWriteM3ResolutionProfile";

export type RematerializeDocsWriteEvidenceInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export type RematerializeDocsWriteEvidenceSuccess = {
  ok: true;
  priorExecutionContractId: string;
  priorContractVersion: number;
  successor: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: string[];
    stopConditions: string[];
    requiredCapabilities: string[];
    reversibility: string;
    semanticFingerprint: string;
    evidenceRequirements: string[];
    supersedesExecutionContractId: string | null;
    supersessionReason: string | null;
    inspectionDisclosure: ReturnType<
      typeof projectExecutionContractInspectionDisclosure
    >["disclosure"];
  };
  materialAmendment: true;
  priorInspectionDoesNotCoverSuccessor: true;
  reinspectionRequired: true;
  statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION";
  successorInspection: ContractInspectionStateDto;
  evidenceRequirements: string[];
  executionPerformed: false;
  attemptCreated: false;
  confirmationGranted: false;
  authorityGranted: false;
  humanDecisionCreated: false;
  replayed: boolean;
};

export type RematerializeDocsWriteEvidenceResult =
  | RematerializeDocsWriteEvidenceSuccess
  | { ok: false; code: string; message: string };

function fail(code: string, message: string): RematerializeDocsWriteEvidenceResult {
  return { ok: false, code, message };
}

function rematerializeDigest(
  priorId: string,
  evidenceRequirements: readonly string[],
): string {
  return createHash("sha256")
    .update(
      canonicalizeJson({
        kind: "docs_write_evidence_rematerialize",
        priorId,
        evidenceRequirements: [...evidenceRequirements],
      }),
    )
    .digest("hex")
    .slice(0, 16);
}

function successorIdFor(digest: string): string {
  return `xct:m3-ev:${digest}`;
}

function idempotencyKeyFor(digest: string): string {
  return `idem:m3-docs-write-ev-remat:${digest}`;
}

function toSuccessorView(contract: ExecutionContract) {
  const disclosure = projectExecutionContractInspectionDisclosure(contract);
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    constraints: [...(contract.constraints ?? [])],
    stopConditions: [...(contract.stopConditions ?? [])],
    requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
    reversibility: contract.reversibility ?? "non précisée",
    semanticFingerprint: contract.semanticFingerprint ?? "",
    evidenceRequirements: [...contract.evidenceRequirements],
    supersedesExecutionContractId:
      contract.supersedesExecutionContractId ?? null,
    supersessionReason: contract.supersessionReason ?? null,
    inspectionDisclosure: disclosure.disclosure,
  };
}

async function successFromSuccessor(input: {
  prior: ExecutionContract;
  successor: ExecutionContract;
  corrected: string[];
  oa: RuntimeOaStack;
  replayed: boolean;
}): Promise<RematerializeDocsWriteEvidenceResult> {
  const inspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: input.successor.executionContractId,
  });
  if (!inspection.ok) return inspection;
  return {
    ok: true,
    priorExecutionContractId: input.prior.executionContractId,
    priorContractVersion: input.prior.version,
    successor: toSuccessorView(input.successor),
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired: true,
    statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
    successorInspection: inspection,
    evidenceRequirements: [...input.corrected],
    executionPerformed: false,
    attemptCreated: false,
    confirmationGranted: false,
    authorityGranted: false,
    humanDecisionCreated: false,
    replayed: input.replayed,
  };
}

export async function rematerializeDocsWriteEvidenceRequirements(
  input: RematerializeDocsWriteEvidenceInput,
): Promise<RematerializeDocsWriteEvidenceResult> {
  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, "Contrat d'exécution introuvable.");
  }

  const prior = loaded.contract;
  if (prior.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Le contrat n'appartient pas au projet demandé.",
    );
  }
  if (prior.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
    return fail(
      "NOT_DOCS_WRITE_CONTRACT",
      "Rematérialisation evidence réservée aux contrats docs_write.",
    );
  }
  if (prior.target !== M4_BOUNDED_DOCS_WRITE_TARGET) {
    return fail(
      "NOT_DOCS_WRITE_CONTRACT",
      "Cible technique docs_write attendue.",
    );
  }
  if (
    prior.status === "superseded" ||
    prior.status === "cancelled" ||
    prior.status === "executing" ||
    prior.status === "completed" ||
    prior.status === "failed"
  ) {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Le contrat (statut ${prior.status}) ne peut pas être rematérialisé.`,
    );
  }

  const corrected = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
    fromPrepare: prior.evidenceRequirements ?? [],
    constraints: prior.constraints ?? [],
  });

  if (
    !docsWriteEvidenceContradictsConstraints({
      evidenceRequirements: prior.evidenceRequirements ?? [],
      constraints: prior.constraints ?? [],
    })
  ) {
    return fail(
      "EVIDENCE_ALREADY_COHERENT",
      "Les evidenceRequirements sont déjà cohérents avec les contraintes — aucune rematérialisation.",
    );
  }

  const digest = rematerializeDigest(prior.executionContractId, corrected);
  const newExecutionContractId = successorIdFor(digest);
  const idempotencyKey = idempotencyKeyFor(digest);

  const existing =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: newExecutionContractId,
    });
  if (existing.ok) {
    const successor = existing.contract;
    if (successor.supersedesExecutionContractId !== prior.executionContractId) {
      return fail(
        "SUCCESSOR_GOVERNANCE_MISMATCH",
        "Successeur déterministe déjà présent avec un lignage incorrect.",
      );
    }
    if (
      [...successor.evidenceRequirements].join("\0") !==
      [...corrected].join("\0")
    ) {
      return fail(
        "SUCCESSOR_GOVERNANCE_MISMATCH",
        "Successeur déterministe déjà présent avec des evidenceRequirements différents.",
      );
    }

    if (successor.status === "draft" || successor.status === "proposed") {
      const authority = registerLocalAuthorityForExecutionClass({
        authorityResolver: input.oa.authorityResolver,
        scope: prior.scope,
        issuedAt: input.oa.clock.nowIso(),
        requiredAuthority: prior.requiredAuthority,
        evidenceId: `evd:m3-ev-remat:${digest}`,
        forceEnable: input.forceLocalAuthority === true,
      });
      if (!authority.ok) {
        return fail(authority.code, authority.message);
      }
      const validated =
        await input.oa.executionContractServices.validateExecutionContract.execute(
          {
            executionContractId: successor.executionContractId,
            actor: LOCAL_PILOTE_ACTOR,
            authorityEvidenceId: authority.evidenceId,
          },
        );
      if (!validated.ok) {
        return fail(validated.error.detailCode, validated.error.message);
      }
      return successFromSuccessor({
        prior,
        successor: validated.contract,
        corrected,
        oa: input.oa,
        replayed: true,
      });
    }

    return successFromSuccessor({
      prior,
      successor,
      corrected,
      oa: input.oa,
      replayed: true,
    });
  }

  const priorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: prior.executionContractId,
  });
  if (!priorInspection.ok) return priorInspection;
  if (!priorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_REQUIRED_BEFORE_REMATERIALIZE",
      "Le contrat doit être inspecté avant une rematérialisation matérielle des evidenceRequirements.",
    );
  }

  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: prior.scope,
    issuedAt: input.oa.clock.nowIso(),
    requiredAuthority: prior.requiredAuthority,
    evidenceId: `evd:m3-ev-remat:${digest}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId,
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: prior.version,
      evidenceRequirements: [...corrected],
      idempotencyKey,
      correlationId: `cor:m3-ev-remat:${digest}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced =
        await input.oa.executionContractServices.getExecutionContract.execute({
          executionContractId: newExecutionContractId,
        });
      if (!raced.ok) {
        return fail(
          "REMATERIALIZE_RECOVERY_FAILED",
          "Course supersession: successeur déterministe introuvable.",
        );
      }
      const validatedRace =
        await input.oa.executionContractServices.validateExecutionContract.execute(
          {
            executionContractId: raced.contract.executionContractId,
            actor: LOCAL_PILOTE_ACTOR,
            authorityEvidenceId: authority.evidenceId,
          },
        );
      if (!validatedRace.ok) {
        return fail(validatedRace.error.detailCode, validatedRace.error.message);
      }
      return successFromSuccessor({
        prior,
        successor: validatedRace.contract,
        corrected,
        oa: input.oa,
        replayed: true,
      });
    }
    return fail(
      superseded.error.detailCode,
      `Rematérialisation refusée (${superseded.error.detailCode}).`,
    );
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return fail(validated.error.detailCode, validated.error.message);
  }

  const successorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: validated.contract.executionContractId,
  });
  if (!successorInspection.ok) return successorInspection;
  if (successorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_INVARIANT_VIOLATED",
      "Le successeur ne doit pas hériter d'une inspection suffisante — arrêt fail-closed.",
    );
  }

  return {
    ok: true,
    priorExecutionContractId: prior.executionContractId,
    priorContractVersion: prior.version,
    successor: toSuccessorView(validated.contract),
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired: true,
    statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
    successorInspection,
    evidenceRequirements: [...corrected],
    executionPerformed: false,
    attemptCreated: false,
    confirmationGranted: false,
    authorityGranted: false,
    humanDecisionCreated: false,
    replayed: false,
  };
}
