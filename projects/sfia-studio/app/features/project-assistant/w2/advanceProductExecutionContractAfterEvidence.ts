/**
 * D-MORRIS-PCONT-01 Option A — Product-path wiring for EC completion.
 *
 * After Artifact Evidence is registered/updated for a governed Attempt,
 * qualify via advanceExecutionContractCompletion(). Never invents completed:
 * available ≠ verified; Attempt succeeded ≠ EC completed.
 *
 * CR-PCONT-04 — Product code is agnostic of EvidencePayloadPort concrete type.
 * NEVER imports Fake adapters, NEVER scripts payload probes, NEVER mints
 * observed digests. Verify uses the configured port as-is.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { advanceExecutionContractCompletion } from "@/lib/oa/execution-attempt";
import type { Evidence } from "@/lib/oa/evidence-review";

export type AdvanceProductExecutionContractAfterEvidenceInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly cycleInstanceId?: string | null;
  /**
   * Optional correlation only — MUST NOT be used to configure Fake payload
   * scripts or echo Evidence.digest into the verifier.
   */
  readonly freshlyIngestedEvidenceId?: string;
};

export type AdvanceProductExecutionContractAfterEvidenceResult =
  | {
      readonly ok: true;
      readonly status: string;
      readonly complete: boolean;
      readonly advanced: boolean;
      readonly verifiedEvidenceIds: readonly string[];
    }
  | { readonly ok: false; readonly reason: string };

function evidenceBoundToContract(
  evidence: Evidence,
  executionContractId: string,
): boolean {
  return evidence.bindings?.executionContractId === executionContractId;
}

export async function advanceProductExecutionContractAfterEvidence(
  input: AdvanceProductExecutionContractAfterEvidenceInput,
): Promise<AdvanceProductExecutionContractAfterEvidenceResult> {
  const { oa, projectId, executionContractId } = input;
  void input.freshlyIngestedEvidenceId;
  const attemptServices = oa.executionAttemptServices;
  if (!attemptServices) {
    return { ok: false, reason: "execution_attempt_services_unavailable" };
  }

  const listed =
    await oa.evidenceReviewServices.repository.listByProject(projectId);
  const bound = listed.filter((e) =>
    evidenceBoundToContract(e, executionContractId),
  );

  const verifiedEvidenceIds: string[] = [];
  const evidenceForQualify: Evidence[] = [];

  for (const item of bound) {
    if (item.status === "verified") {
      evidenceForQualify.push(item);
      verifiedEvidenceIds.push(item.evidenceId);
      continue;
    }
    if (item.status !== "available" || !item.digest) {
      evidenceForQualify.push(item);
      continue;
    }
    // Port-agnostic verify — success only if configured payload probe observes
    // an independent digest match. Product never scripts Fake adapters.
    const verified =
      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: item.evidenceId,
        expectedVersion: item.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    if (verified.ok && verified.evidence) {
      evidenceForQualify.push(verified.evidence);
      verifiedEvidenceIds.push(verified.evidence.evidenceId);
    } else {
      evidenceForQualify.push(item);
    }
  }

  const advanced = await advanceExecutionContractCompletion({
    executionContractId,
    contracts: oa.executionContractServices.contracts,
    contractStatusWriter: attemptServices.contractStatusWriter,
    evidence: evidenceForQualify,
    cycleInstanceId: input.cycleInstanceId ?? undefined,
    clock: oa.clock,
  });

  if (!advanced.ok) {
    return { ok: false, reason: advanced.reason };
  }

  return {
    ok: true,
    status: advanced.status,
    complete: advanced.complete,
    advanced: advanced.advanced,
    verifiedEvidenceIds,
  };
}
