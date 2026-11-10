import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  governanceRestrictions,
  humanDecisions,
  integrationAuthorizations,
  projectGitLinks,
} from "@/db/schema";
import { evaluateCurrentAuthority } from "@/domains/decisions/authority";
import type { AuthorityRestriction } from "@/domains/decisions/types";
import { StudioError } from "@/lib/http-errors";
import {
  assertPermissionMap,
  type RequiredPermission,
} from "./permission-level";

export type CurrentGitAuthorityContext = {
  pilotId: string;
  projectId: string;
  decisionId: string | null;
  expectedKind: "GIT_PUBLICATION_MANDATE" | "GIT_MERGE_MANDATE";
  attemptId: string;
  repositoryId: string;
  authorizationId: string;
  installationId: string;
  /** Actor frozen in the inspected plan — must match current authz. */
  expectedActorLogin: string | null;
  fingerprint: string;
  effectConditionsFingerprint?: string | null;
  requiredPermissions: RequiredPermission[];
};

/**
 * Point-of-effect authority for Git mutations.
 * Reuses D6 HumanDecision + governanceRestrictions — does not create a second engine.
 */
export async function assertCurrentGitAuthority(ctx: CurrentGitAuthorityContext): Promise<{
  decisionId: string;
  actorLogin: string | null;
  permissions: Record<string, string>;
  repositoryFullName: string;
  authorizationId: string;
  installationId: string;
}> {
  if (!ctx.decisionId) {
    throw new StudioError("ACCESS_DENIED", "Mandat D6 absent");
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
  if (decision.kind !== ctx.expectedKind) {
    throw new StudioError("ACCESS_DENIED", "Kind de mandat incompatible");
  }
  if (decision.state !== "APPLICABLE") {
    throw new StudioError("ACCESS_DENIED", `Décision D6 non applicable: ${decision.state}`);
  }
  if (ctx.expectedKind === "GIT_PUBLICATION_MANDATE") {
    // Both bindings required — OR previously allowed a same-project foreign mandate.
    if (decision.sourceRef !== ctx.attemptId || decision.objectRef !== ctx.attemptId) {
      throw new StudioError("ACCESS_DENIED", "Mandat D6 non lié à cette tentative");
    }
  } else if (ctx.expectedKind === "GIT_MERGE_MANDATE") {
    if (decision.sourceRef !== ctx.attemptId) {
      throw new StudioError("ACCESS_DENIED", "Mandat merge D6 non lié à cette tentative");
    }
  }

  const decisionMandateFp = parseEffectConditionsFingerprint(decision.effectConditions);
  const attemptMandateFp = ctx.effectConditionsFingerprint;
  // Prefer decision.effect_conditions (mandate of record); attempt JSON is legacy fallback.
  const mandateFp = decisionMandateFp ?? attemptMandateFp;
  if (!mandateFp || mandateFp.length === 0) {
    throw new StudioError("ACCESS_DENIED", "Conditions d'effet D6 absentes — fail-closed");
  }
  if (mandateFp !== ctx.fingerprint) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Empreinte mandat ≠ plan courant");
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
    effectTargetRef: ctx.repositoryId,
  });
  const gitBlocked = restrictions.some(
    (r) =>
      r.status === "ACTIVE" &&
      (r.targetKind === "PILOTAGE_EFFECT" ||
        r.targetKind === "GIT_EFFECT" ||
        r.targetKind === "EXTERNAL_EFFECT") &&
      (r.targetRef === "*" ||
        r.targetRef === "" ||
        r.targetRef === ctx.repositoryId ||
        r.targetRef === ctx.decisionId ||
        r.targetRef === ctx.attemptId),
  );
  if (!verdict.allowed || gitBlocked) {
    throw new StudioError("ACCESS_DENIED", "Restriction D6 active au point d'effet", {
      exposeMessage: true,
    });
  }

  const authz = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.id, ctx.authorizationId),
          eq(integrationAuthorizations.pilotId, ctx.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!authz || authz.status !== "CONNECTED") {
    throw new StudioError("ACCESS_DENIED", "Intégration GitHub non CONNECTED");
  }
  if (!authz.installationId) {
    throw new StudioError("ACCESS_DENIED", "Installation GitHub non attribuable");
  }
  if (authz.installationId !== ctx.installationId) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Installation GitHub modifiée");
  }
  // B7 — actor frozen at inspection must match current
  if ((authz.accountLogin ?? null) !== (ctx.expectedActorLogin ?? null)) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Acteur GitHub modifié depuis inspection", {
      exposeMessage: true,
    });
  }
  if (ctx.expectedActorLogin == null || ctx.expectedActorLogin.length === 0) {
    throw new StudioError("ACCESS_DENIED", "Acteur GitHub non attribuable pour écriture");
  }

  const link = (
    await db
      .select()
      .from(projectGitLinks)
      .where(
        and(
          eq(projectGitLinks.projectId, ctx.projectId),
          eq(projectGitLinks.repositoryId, ctx.repositoryId),
          eq(projectGitLinks.pilotId, ctx.pilotId),
          eq(projectGitLinks.status, "ATTACHED"),
        ),
      )
      .limit(1)
  )[0];
  if (!link) throw new StudioError("ACCESS_DENIED", "Dépôt non rattaché au projet");

  const repo = (
    await db
      .select()
      .from(authorizedRepositories)
      .where(
        and(
          eq(authorizedRepositories.id, ctx.repositoryId),
          eq(authorizedRepositories.pilotId, ctx.pilotId),
          eq(authorizedRepositories.status, "ACTIVE"),
        ),
      )
      .limit(1)
  )[0];
  if (!repo) throw new StudioError("ACCESS_DENIED", "Dépôt inactif ou retiré");
  if (repo.authorizationId !== ctx.authorizationId) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Autorisation dépôt incohérente");
  }

  let permissions: Record<string, string> = {};
  try {
    permissions = JSON.parse(repo.permissionsJson || "{}") as Record<string, string>;
  } catch {
    throw new StudioError("ACCESS_DENIED", "Permissions dépôt illisibles — fail-closed");
  }

  // REAL path: refuse fixture/unknown permission snapshots (operator env, not a D6 bypass).
  const providerMode = (process.env.STUDIO_GITHUB_PROVIDER ?? "").toLowerCase().trim();
  if (providerMode === "real") {
    if (permissions.source !== "user_token_observed") {
      throw new StudioError(
        "ACCESS_DENIED",
        "Permissions REAL non observées via user token — fail-closed",
        { exposeMessage: true },
      );
    }
  }

  try {
    assertPermissionMap(permissions, ctx.requiredPermissions);
  } catch (e) {
    throw new StudioError(
      "ACCESS_DENIED",
      e instanceof Error ? e.message : "Permission insuffisante",
      { exposeMessage: true },
    );
  }

  return {
    decisionId: decision.id,
    actorLogin: authz.accountLogin,
    permissions,
    repositoryFullName: repo.fullName,
    authorizationId: authz.id,
    installationId: authz.installationId,
  };
}

export function parseEffectConditionsFingerprint(raw: string | null | undefined): string | null {
  if (!raw) return null;
  try {
    const j = JSON.parse(raw) as { fingerprint?: string };
    return typeof j.fingerprint === "string" ? j.fingerprint : null;
  } catch {
    return null;
  }
}
