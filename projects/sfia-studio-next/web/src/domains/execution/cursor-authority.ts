import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { governanceRestrictions, humanDecisions } from "@/db/schema";
import { evaluateCurrentAuthority } from "@/domains/decisions/authority";
import type { AuthorityRestriction } from "@/domains/decisions/types";
import { StudioError } from "@/lib/http-errors";
import { parseEffectConditionsFingerprint } from "./effect-authority";

export type CurrentCursorAuthorityContext = {
  pilotId: string;
  projectId: string;
  decisionId: string | null;
  attemptId: string;
  fingerprint: string;
  effectConditionsFingerprint?: string | null;
};

/**
 * Point-of-effect authority for Cursor execution.
 * Reuses D6 HumanDecision + governanceRestrictions — no second engine.
 */
export async function assertCurrentCursorAuthority(
  ctx: CurrentCursorAuthorityContext,
): Promise<{ decisionId: string }> {
  if (!ctx.decisionId) {
    throw new StudioError("ACCESS_DENIED", "Mandat D6 Cursor absent");
  }

  const decision = (
    await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.id, ctx.decisionId))
      .limit(1)
  )[0];
  if (!decision) throw new StudioError("ACCESS_DENIED", "Décision D6 introuvable");
  if (decision.pilotId !== ctx.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Décision D6 d'un autre Pilote");
  }
  if (decision.projectId !== ctx.projectId) {
    throw new StudioError("ACCESS_DENIED", "Décision D6 d'un autre projet");
  }
  if (decision.kind !== "CURSOR_EXECUTION_MANDATE") {
    throw new StudioError("ACCESS_DENIED", "Kind de mandat incompatible");
  }
  if (decision.state !== "APPLICABLE") {
    throw new StudioError("ACCESS_DENIED", `Décision D6 non applicable: ${decision.state}`);
  }
  if (decision.sourceRef !== ctx.attemptId || decision.objectRef !== ctx.attemptId) {
    throw new StudioError("ACCESS_DENIED", "Mandat D6 non lié à cette tentative Cursor");
  }

  const decisionMandateFp = parseEffectConditionsFingerprint(decision.effectConditions);
  const attemptMandateFp = ctx.effectConditionsFingerprint;
  const mandateFp = decisionMandateFp ?? attemptMandateFp;
  if (!mandateFp || mandateFp.length === 0) {
    throw new StudioError("ACCESS_DENIED", "Conditions d'effet D6 absentes — fail-closed");
  }
  if (mandateFp !== ctx.fingerprint) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Empreinte mandat ≠ contrat courant");
  }
  if (decisionMandateFp && attemptMandateFp && decisionMandateFp !== attemptMandateFp) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Conditions d'effet décision ≠ tentative",
    );
  }

  const restrictionRows = await db
    .select()
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, ctx.projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );
  const restrictions: AuthorityRestriction[] = restrictionRows.map((r) => ({
    id: r.id,
    targetKind: r.targetKind,
    targetRef: r.targetRef,
    status: r.status,
  }));

  const verdict = evaluateCurrentAuthority({
    operation: "PILOTAGE_EFFECT",
    restrictions,
    effectTargetRef: ctx.attemptId,
  });
  if (!verdict.allowed) {
    throw new StudioError("ACCESS_DENIED", `Restriction D6 active: ${verdict.reason ?? "BLOCK"}`);
  }

  const cursorBlocked = restrictions.some(
    (r) =>
      r.status === "ACTIVE" &&
      (r.targetKind === "CURSOR" ||
        r.targetKind === "EFFECT" ||
        r.targetKind === "*" ||
        r.targetRef === "*" ||
        r.targetRef === ctx.attemptId),
  );
  if (cursorBlocked) {
    throw new StudioError("ACCESS_DENIED", "Restriction Cursor active");
  }

  return { decisionId: decision.id };
}
