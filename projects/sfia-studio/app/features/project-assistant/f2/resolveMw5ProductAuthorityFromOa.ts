/**
 * F2 read-side helper for MW5 product authority facts (CORR-MW5-01 / 01B).
 * Reuses existing OA services only — no new persistence.
 *
 * Consumption = HumanDecision id present on current LPS.decisionIds
 * AND status accepted|amended AND DecisionBasis structured match to claim.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveMw5ProductAuthorityFacts,
  type Mw5ClaimProjection,
  type Mw5ProductAuthorityFacts,
} from "@/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts";

export async function resolveMw5ProductAuthorityFromOa(input: {
  oa: RuntimeOaStack | null | undefined;
  projectId: string;
  claim: Mw5ClaimProjection;
  newContradictionSignalPresent?: boolean;
}): Promise<Mw5ProductAuthorityFacts> {
  if (!input.oa) {
    return resolveMw5ProductAuthorityFacts({
      truthC: null,
      consumedDecisions: [],
      claim: input.claim,
      newContradictionSignalPresent: input.newContradictionSignalPresent,
    });
  }

  const lpsResult =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!lpsResult.ok) {
    return resolveMw5ProductAuthorityFacts({
      truthC: null,
      consumedDecisions: [],
      claim: input.claim,
      newContradictionSignalPresent: input.newContradictionSignalPresent,
    });
  }

  const lps = lpsResult.livingProjectState;
  const linkedIds = new Set(lps.decisionIds ?? []);
  const truthC = {
    objective: lps.objective ?? "",
    context: lps.context ?? "",
    scope: lps.scope ?? "",
    decisionIds: [...linkedIds],
  };

  const history = await input.oa.decisionServices.listDecisionHistory.execute({
    projectId: input.projectId,
  });
  const consumedDecisions = history.ok
    ? history.decisions.map((d) => ({
        decisionId: d.decisionId,
        status: d.status,
        subject: d.subject,
        scope: d.scope,
        rationale: d.rationale,
        linkedToCurrentLps: linkedIds.has(d.decisionId),
        executionObjective: d.decisionBasis?.executionBasis?.objective,
        executionScope: d.decisionBasis?.executionBasis?.scope,
        requestedOperation: d.decisionBasis?.executionBasis?.requestedOperation,
        hasDecisionBasis: d.decisionBasis != null,
      }))
    : [];

  return resolveMw5ProductAuthorityFacts({
    truthC,
    consumedDecisions,
    claim: input.claim,
    newContradictionSignalPresent: input.newContradictionSignalPresent,
  });
}
