import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  documentRevisions,
  documents,
  effectAttempts,
  humanDecisions,
  integrationAuthorizations,
  observedGitFacts,
  preparationProjectLinks,
  projectGitLinks,
  projects,
} from "@/db/schema";
import { insertHumanDecision } from "@/domains/decisions/service";
import { classifyPublicationPath } from "@/domains/integrations/path-policy";
import {
  resolveConfiguredEffectProviderMode,
  resolveGitHubProvider,
  type PullRequestInfo,
} from "@/domains/integrations/github-provider";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import {
  assertCurrentGitAuthority,
  parseEffectConditionsFingerprint,
} from "./effect-authority";
import {
  ExecutionBarrierRegistry,
  extendClaim,
  isClaimActive,
  mintClaim,
  readClaim,
  releaseClaim,
  writeClaimInto,
  type EffectClaim,
} from "./claim-lease";
import {
  buildUnifiedDiff,
  inspectionFingerprint,
  mergeEffectFingerprint,
  publicationBranchFromCorrelationKey,
  publicationEffectFingerprint,
  revisionContentFingerprint,
} from "./fingerprint";
import type {
  DiffKind,
  InspectionDiff,
  MergePlan,
  PrCurrentState,
  PublicationPlan,
  PublicationProgress,
  PublicationStep,
} from "./types";
import {
  assertPlanPublicationSteps,
  assertPublicationEffectProof,
  qualifyPlanEffectProviderMode,
  resolvePublicationSteps,
} from "./publication-steps";

async function assertProject(pilotId: string, projectId: string) {
  const p = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!p) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

async function loadRepoContext(pilotId: string, projectId: string, repositoryId: string) {
  const link = (
    await db
      .select()
      .from(projectGitLinks)
      .where(
        and(
          eq(projectGitLinks.projectId, projectId),
          eq(projectGitLinks.repositoryId, repositoryId),
          eq(projectGitLinks.pilotId, pilotId),
          eq(projectGitLinks.status, "ATTACHED"),
        ),
      )
      .limit(1)
  )[0];
  if (!link) throw new StudioError("ACCESS_DENIED", "Dépôt non rattaché");

  const repo = (
    await db
      .select()
      .from(authorizedRepositories)
      .where(
        and(
          eq(authorizedRepositories.id, repositoryId),
          eq(authorizedRepositories.pilotId, pilotId),
          eq(authorizedRepositories.status, "ACTIVE"),
        ),
      )
      .limit(1)
  )[0];
  if (!repo) throw new StudioError("ACCESS_DENIED", "Dépôt inactif");

  const authz = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.id, repo.authorizationId),
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      )
      .limit(1)
  )[0];
  if (!authz) throw new StudioError("ACCESS_DENIED", "Intégration non CONNECTED");
  if (!authz.installationId) {
    throw new StudioError("ACCESS_DENIED", "Installation GitHub absente");
  }

  let permissions: Record<string, string> = {};
  try {
    permissions = JSON.parse(repo.permissionsJson || "{}") as Record<string, string>;
  } catch {
    permissions = {};
  }

  return { repo, authz, permissions };
}

async function assertDocumentForProject(
  pilotId: string,
  projectId: string,
  documentId: string,
): Promise<{ preparationId: string }> {
  const doc = (
    await db
      .select()
      .from(documents)
      .where(and(eq(documents.id, documentId), eq(documents.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!doc) throw new StudioError("NOT_FOUND", "Document introuvable");

  if (doc.projectId && doc.projectId !== projectId) {
    throw new StudioError("ACCESS_DENIED", "Document d'un autre projet");
  }

  if (!doc.projectId) {
    const link = (
      await db
        .select()
        .from(preparationProjectLinks)
        .where(
          and(
            eq(preparationProjectLinks.preparationId, doc.preparationId),
            eq(preparationProjectLinks.projectId, projectId),
          ),
        )
        .limit(1)
    )[0];
    if (!link) {
      throw new StudioError("ACCESS_DENIED", "Document hors périmètre projet/préparation");
    }
  }

  return { preparationId: doc.preparationId };
}

function classifyRemoteReadError(e: unknown): DiffKind {
  const code =
    e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
  if (code === "NOT_FOUND") return "CREATE";
  if (code === "FORBIDDEN") return "FORBIDDEN";
  if (code === "TIMEOUT") return "TIMEOUT";
  if (code === "AMBIGUOUS") return "AMBIGUOUS_READ";
  if (code === "CONFLICT") return "REF_STALE";
  return "INACCESSIBLE";
}

/** Inspection kinds that may proceed to a D6 mandate. */
export function inspectionAllowsAuthorization(kind: DiffKind): boolean {
  return kind === "CREATE" || kind === "MODIFY" || kind === "UNCHANGED";
}

async function buildInspection(input: {
  pilotId: string;
  fullName: string;
  targetPath: string;
  baseRef: string;
  baseSha: string | null;
  revisionId: string;
  revisionFingerprint: string;
  proposedContent: string;
}): Promise<InspectionDiff> {
  const provider = resolveGitHubProvider();
  let baseContent: string | null = null;
  let kind: DiffKind = "CREATE";
  let remoteReadCode: string | null = null;

  if (!input.baseSha) {
    kind = "MISSING_BASE";
  } else {
    // Prefer SHA-pinned read — mobile ref alone is not an immutable envelope.
    const readRef = input.baseSha;
    try {
      // Coherence: tip of baseRef must still equal frozen baseSha.
      const tip = await provider.getRefSha(input.pilotId, input.fullName, input.baseRef);
      if (tip !== input.baseSha) {
        kind = "REF_STALE";
        remoteReadCode = "REF_ADVANCED";
      } else {
        const file = await provider.getFileContent(
          input.pilotId,
          input.fullName,
          input.targetPath,
          readRef,
        );
        baseContent = file.content;
        kind = file.content === input.proposedContent ? "UNCHANGED" : "MODIFY";
      }
    } catch (e) {
      const classified = classifyRemoteReadError(e);
      kind = classified;
      remoteReadCode =
        e && typeof e === "object" && "code" in e
          ? String((e as { code: string }).code)
          : "UNKNOWN";
      // Only a qualified NOT_FOUND may become CREATE (file absent at frozen SHA).
      if (classified === "CREATE") {
        baseContent = null;
      } else {
        baseContent = null;
      }
    }
  }

  const unifiedDiff =
    kind === "FORBIDDEN" ||
    kind === "TIMEOUT" ||
    kind === "AMBIGUOUS_READ" ||
    kind === "INACCESSIBLE" ||
    kind === "REF_STALE"
      ? `# inspection unavailable (${kind})\n`
      : buildUnifiedDiff(input.targetPath, baseContent, input.proposedContent);

  const fp = inspectionFingerprint({
    revisionId: input.revisionId,
    revisionFingerprint: input.revisionFingerprint,
    targetPath: input.targetPath,
    baseSha: input.baseSha,
    baseContent,
    proposedContent: input.proposedContent,
    unifiedDiff,
  });
  return {
    kind,
    basePath: input.targetPath,
    baseSha: input.baseSha,
    baseContent,
    proposedContent: input.proposedContent,
    unifiedDiff,
    inspectionFingerprint: fp,
    remoteReadCode,
  };
}

function readProgress(resultJson: string): PublicationProgress {
  try {
    const j = JSON.parse(resultJson) as { progress?: PublicationProgress };
    return j.progress ?? {};
  } catch {
    return {};
  }
}

function writeProgress(
  existingResultJson: string,
  progress: PublicationProgress,
  claim?: EffectClaim | null,
): string {
  let base: Record<string, unknown> = {};
  try {
    base = JSON.parse(existingResultJson || "{}") as Record<string, unknown>;
  } catch {
    base = {};
  }
  const next: Record<string, unknown> = { ...base, progress };
  if (claim !== undefined) {
    if (claim) next.claim = claim;
    else delete next.claim;
  }
  return JSON.stringify(next);
}

/** SQL: stored claimToken must equal the caller's fence token (atomic ownership). */
function sqlClaimTokenEquals(claimToken: string) {
  return sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${claimToken}`;
}

/**
 * SQL: no active owner — absent claim, released, or lease expired.
 * Expiration ≠ remote effect finished; only permits controlled reclaim after observation.
 */
function sqlClaimInactive() {
  return sql`(
    ${effectAttempts.resultJson}::jsonb->'claim' IS NULL
    OR NULLIF(${effectAttempts.resultJson}::jsonb->'claim'->>'releasedAt', '') IS NOT NULL
    OR (${effectAttempts.resultJson}::jsonb->'claim'->>'leaseExpiresAt')::timestamptz <= now()
  )`;
}

function sqlClaimLeaseActive() {
  return sql`(
    NULLIF(${effectAttempts.resultJson}::jsonb->'claim'->>'releasedAt', '') IS NULL
    AND (${effectAttempts.resultJson}::jsonb->'claim'->>'leaseExpiresAt')::timestamptz > now()
  )`;
}

/**
 * Atomic claim: AUTHORIZED|AMBIGUOUS → DISPATCHED before any provider mutation.
 * Reclaim requires inactive prior claim IN THE SAME SQL predicate (not memory-only).
 */
async function claimAttempt(attemptId: string, fromStatus: "AUTHORIZED" | "AMBIGUOUS") {
  const now = new Date();
  const row = await loadAttemptRow(attemptId);
  if (!row || row.status !== fromStatus) return null;
  const prev = readClaim(row.resultJson);
  // Fast-fail without writing when AMBIGUOUS still has an active lease (defense in depth).
  if (fromStatus === "AMBIGUOUS" && isClaimActive(prev, now.getTime())) {
    return null;
  }
  const claim = mintClaim(prev, now);
  const nextJson = writeClaimInto(row.resultJson, claim);
  const where =
    fromStatus === "AMBIGUOUS"
      ? and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          sqlClaimInactive(),
        )
      : and(eq(effectAttempts.id, attemptId), eq(effectAttempts.status, fromStatus));
  const claimed = await db
    .update(effectAttempts)
    .set({ status: "DISPATCHED", resultJson: nextJson, updatedAt: now })
    .where(where)
    .returning({ id: effectAttempts.id });
  return claimed[0] ? { id: claimed[0].id, claim } : null;
}

async function loadAttemptRow(attemptId: string) {
  return (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0];
}

/**
 * Before each external mutation: renew lease only if this claimToken still owns DISPATCHED
 * with an active lease in PostgreSQL. Stale/expired owners get CONFLICT (0 rows).
 * Re-reads resultJson so a renew cannot clobber fresher progress from the same owner.
 */
async function assertAndTouchOwnership(
  attemptId: string,
  claimToken: string,
  _existingResultJson: string,
): Promise<string> {
  void _existingResultJson;
  const fresh = await loadAttemptRow(attemptId);
  if (!fresh || fresh.status !== "DISPATCHED") {
    throw new StudioError("CONFLICT", "DISPATCHED perdu — mutation refusée");
  }
  const claim = readClaim(fresh.resultJson);
  if (!claim || claim.claimToken !== claimToken || claim.releasedAt) {
    throw new StudioError("CONFLICT", "Claim fence invalide — mutation refusée");
  }
  const renewed = extendClaim(claim);
  const nextJson = writeClaimInto(fresh.resultJson, renewed);
  const updated = await db
    .update(effectAttempts)
    .set({ resultJson: nextJson, updatedAt: new Date() })
    .where(
      and(
        eq(effectAttempts.id, attemptId),
        eq(effectAttempts.status, "DISPATCHED"),
        sqlClaimTokenEquals(claimToken),
        sqlClaimLeaseActive(),
      ),
    )
    .returning({ id: effectAttempts.id, resultJson: effectAttempts.resultJson });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Propriété ou lease perdue — mutation provider refusée (fencing SQL)",
    );
  }
  return updated[0].resultJson;
}

/**
 * Persist progress under ownership. CAS predicate includes claimToken in SQL —
 * never trust a post-UPDATE readback of a token this UPDATE just wrote.
 */
async function persistOwnedProgress(
  attemptId: string,
  claimToken: string,
  existingResultJson: string,
  progress: PublicationProgress,
) {
  const claim = readClaim(existingResultJson);
  if (!claim || claim.claimToken !== claimToken) {
    throw new StudioError("CONFLICT", "Claim fence invalide — progression non écrite");
  }
  const nextJson = writeProgress(existingResultJson, progress, claim);
  const updated = await db
    .update(effectAttempts)
    .set({ resultJson: nextJson, updatedAt: new Date() })
    .where(
      and(
        eq(effectAttempts.id, attemptId),
        eq(effectAttempts.status, "DISPATCHED"),
        sqlClaimTokenEquals(claimToken),
        sqlClaimLeaseActive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Progression refusée — claimToken non propriétaire ou bail inactif (fencing SQL)",
    );
  }
  return nextJson;
}

/** Terminal / status transition only if caller still owns the claimToken in SQL. */
async function casOwnedTransition(input: {
  attemptId: string;
  claimToken: string;
  fromStatus: string;
  toStatus: string;
  resultJson: string;
}): Promise<boolean> {
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.toStatus,
      resultJson: input.resultJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, input.fromStatus),
        sqlClaimTokenEquals(input.claimToken),
        sqlClaimLeaseActive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

/**
 * Reconcile may liberate DISPATCHED only when the stored claim is inactive
 * (expired/released) — never while an active owner still holds the lease.
 */
async function casLiberateInactiveDispatch(input: {
  attemptId: string;
  fromStatus: string;
  toStatus: string;
  resultJson: string;
}): Promise<boolean> {
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.toStatus,
      resultJson: input.resultJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, input.fromStatus),
        sqlClaimInactive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

type PublicationRefWrite = {
  projectId: string;
  pilotId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  targetPath: string;
  targetBranch: string;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  status: string;
  publicationBranch: string;
  prCurrentState: PrCurrentState | null | undefined;
  prCreatedHistorically: boolean;
  extraDetail?: Record<string, unknown>;
};

/**
 * Atomic D7 terminal transition + D8 publicationRef upsert.
 * CAS failure or D8 failure rolls back the whole set — no orphan D8 on lost CAS.
 * Provider I/O must already be complete before this call (no remote calls inside).
 */
async function commitPublicationCompletion(input: {
  attemptId: string;
  mode: "owned" | "liberate_inactive";
  claimToken?: string;
  fromStatus: string;
  terminalResultJson: string;
  pub: PublicationRefWrite;
}): Promise<{ pubId: string }> {
  try {
    return await db.transaction(async (tx) => {
      const now = new Date();
      // Owned terminal CAS: claimToken fence AND active lease (DB now()) — expired lease ⇒ 0 rows.
      // liberate_inactive: only when claim absent/released/expired (reconcile after observation).
      const where =
        input.mode === "owned"
          ? and(
              eq(effectAttempts.id, input.attemptId),
              eq(effectAttempts.status, input.fromStatus),
              sqlClaimTokenEquals(input.claimToken!),
              sqlClaimLeaseActive(),
            )
          : and(
              eq(effectAttempts.id, input.attemptId),
              eq(effectAttempts.status, input.fromStatus),
              sqlClaimInactive(),
            );

      const cas = await tx
        .update(effectAttempts)
        .set({
          status: "COMPLETED",
          resultJson: input.terminalResultJson,
          updatedAt: now,
        })
        .where(where)
        .returning({ id: effectAttempts.id });
      if (!cas[0]) {
        throw new StudioError(
          "CONFLICT",
          "Complétion D7 refusée — CAS terminal 0 rows (fencing)",
        );
      }

      const existing = (
        await tx
          .select()
          .from(documentPublicationRefs)
          .where(eq(documentPublicationRefs.effectAttemptId, input.attemptId))
          .limit(1)
      )[0];

      const detailBase = {
        publicationBranch: input.pub.publicationBranch,
        prCurrentState: input.pub.prCurrentState ?? null,
        prCreatedHistorically: input.pub.prCreatedHistorically,
        ...(input.pub.extraDetail ?? {}),
      };

      if (existing) {
        if (
          existing.projectId !== input.pub.projectId ||
          existing.pilotId !== input.pub.pilotId ||
          existing.documentId !== input.pub.documentId ||
          existing.repositoryId !== input.pub.repositoryId
        ) {
          throw new StudioError(
            "CONFLICT",
            "publicationRef existante incompatible avec la tentative",
          );
        }
        await tx
          .update(documentPublicationRefs)
          .set({
            revisionId: input.pub.revisionId,
            targetPath: input.pub.targetPath,
            targetBranch: input.pub.targetBranch,
            baseSha: input.pub.baseSha,
            headSha: input.pub.headSha,
            prNumber: input.pub.prNumber,
            status: input.pub.status,
            detailJson: JSON.stringify({
              ...JSON.parse(existing.detailJson || "{}"),
              ...detailBase,
            }),
            updatedAt: now,
          })
          .where(eq(documentPublicationRefs.id, existing.id));
        // Rewrite terminal resultJson with stable pubId (same txn).
        await tx
          .update(effectAttempts)
          .set({
            resultJson: rewritePubId(input.terminalResultJson, existing.id),
            updatedAt: now,
          })
          .where(eq(effectAttempts.id, input.attemptId));
        return { pubId: existing.id };
      }

      const pubId = newId("dpr");
      await tx.insert(documentPublicationRefs).values({
        id: pubId,
        projectId: input.pub.projectId,
        pilotId: input.pub.pilotId,
        documentId: input.pub.documentId,
        revisionId: input.pub.revisionId,
        repositoryId: input.pub.repositoryId,
        targetPath: input.pub.targetPath,
        targetBranch: input.pub.targetBranch,
        baseSha: input.pub.baseSha,
        headSha: input.pub.headSha,
        prNumber: input.pub.prNumber,
        status: input.pub.status,
        effectAttemptId: input.attemptId,
        detailJson: JSON.stringify(detailBase),
        createdAt: now,
        updatedAt: now,
      });
      await tx
        .update(effectAttempts)
        .set({
          resultJson: rewritePubId(input.terminalResultJson, pubId),
          updatedAt: now,
        })
        .where(eq(effectAttempts.id, input.attemptId));
      return { pubId };
    });
  } catch (e) {
    if (e instanceof StudioError) throw e;
    const msg = e instanceof Error ? e.message : String(e);
    if (/document_publication_refs_effect_attempt_uidx|unique/i.test(msg)) {
      throw new StudioError(
        "CONFLICT",
        "Conflit UNIQUE publicationRef — aucune double référence (rollback D7)",
      );
    }
    throw e;
  }
}

function rewritePubId(resultJson: string, pubId: string): string {
  try {
    const j = JSON.parse(resultJson) as Record<string, unknown>;
    return JSON.stringify({ ...j, pubId });
  } catch {
    return resultJson;
  }
}

type AuthorityCtx = {
  pilotId: string;
  projectId: string;
  decisionId: string | null;
  expectedKind: "GIT_PUBLICATION_MANDATE" | "GIT_MERGE_MANDATE";
  attemptId: string;
  repositoryId: string;
  authorizationId: string;
  installationId: string;
  expectedActorLogin: string | null;
  fingerprint: string;
  effectConditions: string | null;
};

/** C1 — re-check D6/permissions/identity before every provider mutation (TOCTOU residual acknowledged). */
async function assertStepAuthority(ctx: AuthorityCtx) {
  await assertCurrentGitAuthority({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    decisionId: ctx.decisionId,
    expectedKind: ctx.expectedKind,
    attemptId: ctx.attemptId,
    repositoryId: ctx.repositoryId,
    authorizationId: ctx.authorizationId,
    installationId: ctx.installationId,
    expectedActorLogin: ctx.expectedActorLogin,
    fingerprint: ctx.fingerprint,
    effectConditionsFingerprint: parseEffectConditionsFingerprint(ctx.effectConditions),
    requiredPermissions: [
      { key: "contents", level: "write" },
      { key: "pull_requests", level: "write" },
    ],
  });
}

function mapPrState(remote: string | undefined | null): PrCurrentState {
  if (!remote) return "UNKNOWN";
  const s = remote.toLowerCase();
  if (s === "open") return "OPEN";
  if (s === "closed") return "CLOSED";
  if (s === "merged") return "MERGED";
  return "UNKNOWN";
}

/** Provenance gate for a remotely observed PR against the inspected publication plan. */
function assertPrMatchesPlan(
  pr: PullRequestInfo,
  plan: PublicationPlan,
  expectedHeadSha: string | null | undefined,
) {
  if (pr.headRef !== plan.publicationBranch || pr.baseRef !== plan.targetBranch) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "PR distante incompatible (head/base) avec le plan inspecté",
    );
  }
  if (expectedHeadSha && pr.headSha !== expectedHeadSha) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "HEAD de la PR distante incompatible avec le commit publié",
    );
  }
}

/**
 * Independent publicationMarker check — required even when PR was loaded by number.
 * A PR with matching head/base/SHA but wrong marker must never be attributed.
 */
async function assertPrMarkerProvenance(input: {
  provider: ReturnType<typeof resolveGitHubProvider>;
  pilotId: string;
  plan: PublicationPlan;
  pr: PullRequestInfo;
  publicationMarker: string;
  expectedHeadSha: string | null | undefined;
}) {
  assertPrMatchesPlan(input.pr, input.plan, input.expectedHeadSha);
  let found: Awaited<ReturnType<typeof input.provider.findPullRequest>>;
  try {
    found = await input.provider.findPullRequest({
      pilotId: input.pilotId,
      fullName: input.plan.repositoryFullName,
      head: input.plan.publicationBranch,
      base: input.plan.targetBranch,
      publicationMarker: input.publicationMarker,
      expectedHeadSha: input.expectedHeadSha ?? undefined,
    });
  } catch (e) {
    const code = providerErrorCode(e);
    if (isRemoteUnreadableCode(code)) {
      throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), { code: code || "AMBIGUOUS" });
    }
    throw e;
  }
  if (found.ambiguous || found.matches.length > 1) {
    throw new StudioError(
      "AMBIGUOUS",
      "Plusieurs PR pour le publicationMarker — attribution refusée",
    );
  }
  if (found.matches.length === 0) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "publicationMarker non retrouvé pour la PR candidate — attribution refusée",
    );
  }
  const marked = found.matches[0]!;
  if (marked.number !== input.pr.number) {
    throw new StudioError(
      "CONFLICT",
      "PR par numéro ≠ PR du publicationMarker — provenance incohérente",
    );
  }
}

function providerErrorCode(e: unknown): string {
  return e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
}

function isRemoteUnreadableCode(code: string): boolean {
  return code === "TIMEOUT" || code === "FORBIDDEN" || code === "AMBIGUOUS";
}

export async function preparePublication(input: {
  pilotId: string;
  projectId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  targetPath: string;
  targetBranch: string;
  correlationKey: string;
  steps?: PublicationStep[] | null;
}) {
  await assertProject(input.pilotId, input.projectId);
  const steps = resolvePublicationSteps(input.steps);
  const policy = classifyPublicationPath(input.targetPath);
  if (!policy.allowed || !policy.normalizedPath) {
    throw new StudioError("ACCESS_DENIED", `Chemin refusé: ${policy.reason}`, { exposeMessage: true });
  }
  const targetPath = policy.normalizedPath;

  const prior = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.correlationKey, input.correlationKey),
        ),
      )
      .limit(1)
  )[0];

  const { preparationId } = await assertDocumentForProject(
    input.pilotId,
    input.projectId,
    input.documentId,
  );

  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(
          eq(documentRevisions.id, input.revisionId),
          eq(documentRevisions.documentId, input.documentId),
          eq(documentRevisions.status, "AVAILABLE"),
        ),
      )
      .limit(1)
  )[0];
  if (!rev) throw new StudioError("INVALID_REQUEST", "Révision non AVAILABLE");

  const { repo, authz, permissions } = await loadRepoContext(
    input.pilotId,
    input.projectId,
    input.repositoryId,
  );
  const provider = resolveGitHubProvider();
  const baseSha = await provider.getRefSha(input.pilotId, repo.fullName, input.targetBranch);
  const revisionFp = revisionContentFingerprint(rev.contentMarkdown);
  const inspection = await buildInspection({
    pilotId: input.pilotId,
    fullName: repo.fullName,
    targetPath,
    baseRef: input.targetBranch,
    baseSha,
    revisionId: input.revisionId,
    revisionFingerprint: revisionFp,
    proposedContent: rev.contentMarkdown,
  });

  const publicationBranch = publicationBranchFromCorrelationKey(input.correlationKey);
  const effectProviderMode = resolveConfiguredEffectProviderMode();
  const plan: PublicationPlan = {
    documentId: input.documentId,
    revisionId: input.revisionId,
    preparationId,
    repositoryId: input.repositoryId,
    repositoryFullName: repo.fullName,
    authorizationId: authz.id,
    installationId: authz.installationId!,
    actorLogin: authz.accountLogin,
    permissions,
    targetPath,
    targetBranch: input.targetBranch,
    publicationBranch,
    baseRef: input.targetBranch,
    baseSha,
    revisionFingerprint: revisionFp,
    contentMarkdown: rev.contentMarkdown,
    inspection,
    steps,
    effectProviderMode,
  };
  const fingerprint = publicationEffectFingerprint(plan);

  if (prior) {
    if (prior.fingerprint !== fingerprint) {
      throw new StudioError("CONFLICT", "PAYLOAD_MISMATCH pour correlationKey", {
        exposeMessage: true,
      });
    }
    return {
      attemptId: prior.id,
      status: prior.status,
      idempotent: true as const,
      fingerprint: prior.fingerprint,
      plan: JSON.parse(prior.planJson) as PublicationPlan,
      pathPolicy: policy,
    };
  }

  const attemptId = newId("efx");
  const now = new Date();
  await db.insert(effectAttempts).values({
    id: attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    kind: "GIT_PUBLICATION",
    status: "PREPARED",
    correlationKey: input.correlationKey,
    fingerprint,
    planJson: JSON.stringify(plan),
    resultJson: JSON.stringify({ policy }),
    createdAt: now,
    updatedAt: now,
  });

  return { attemptId, status: "PREPARED" as const, fingerprint, plan, pathPolicy: policy };
}

export async function authorizePublication(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  statement: string;
  inspectedFingerprint: string;
}) {
  return db.transaction(async (tx) => {
    const row = (
      await tx
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, input.attemptId),
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");

    const plan = JSON.parse(row.planJson) as PublicationPlan;
    if (input.inspectedFingerprint !== plan.inspection.inspectionFingerprint) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Empreinte d'inspection non concordante — relire le diff",
        { exposeMessage: true },
      );
    }
    if (publicationEffectFingerprint(plan) !== row.fingerprint) {
      throw new StudioError("CONFLICT", "Plan/fingerprint divergent");
    }

    if (row.status === "AUTHORIZED" || row.status === "DISPATCHED" || row.status === "COMPLETED") {
      if (row.decisionId) {
        const decision = (
          await tx
            .select()
            .from(humanDecisions)
            .where(eq(humanDecisions.id, row.decisionId))
            .limit(1)
        )[0];
        if (!decision || decision.state !== "APPLICABLE") {
          throw new StudioError("ACCESS_DENIED", "Mandat D6 non applicable sur authorize idempotent");
        }
      }
      return { attemptId: row.id, status: row.status, decisionId: row.decisionId, idempotent: true };
    }
    if (row.status !== "PREPARED") {
      throw new StudioError("CONFLICT", `Statut incompatible: ${row.status}`);
    }

    if (!inspectionAllowsAuthorization(plan.inspection.kind)) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Inspection non autorisable: ${plan.inspection.kind} — lecture distante requalifiée requise`,
        { exposeMessage: true },
      );
    }

    const conditions = JSON.stringify({
      fingerprint: row.fingerprint,
      inspectionFingerprint: plan.inspection.inspectionFingerprint,
      envelope: {
        documentId: plan.documentId,
        revisionId: plan.revisionId,
        revisionFingerprint: plan.revisionFingerprint,
        repositoryId: plan.repositoryId,
        repositoryFullName: plan.repositoryFullName,
        targetPath: plan.targetPath,
        targetBranch: plan.targetBranch,
        publicationBranch: plan.publicationBranch,
        baseSha: plan.baseSha,
        steps: plan.steps,
      },
    });

    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "GIT_EFFECT",
      sourceRef: input.attemptId,
      kind: "GIT_PUBLICATION_MANDATE",
      objectRef: input.attemptId,
      statement: input.statement,
      scope: "PROJECT",
      effectConditions: conditions,
    });

    await tx
      .update(effectAttempts)
      .set({
        status: "AUTHORIZED",
        decisionId,
        effectConditions: conditions,
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, row.id));

    return { attemptId: row.id, status: "AUTHORIZED" as const, decisionId };
  });
}

export async function dispatchPublication(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const existing = await loadAttemptRow(input.attemptId);
  if (!existing) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  if (existing.projectId !== input.projectId || existing.pilotId !== input.pilotId) {
    throw new StudioError("NOT_FOUND", "Tentative introuvable");
  }
  if (existing.kind !== "GIT_PUBLICATION") {
    throw new StudioError("CONFLICT", "Kind incompatible");
  }
  if (existing.status === "COMPLETED") {
    return { attemptId: existing.id, status: existing.status, idempotent: true as const };
  }
  // B2 — DISPATCHED is exclusive; plain HTTP must not continue without reclaim via AMBIGUOUS.
  if (existing.status === "DISPATCHED") {
    throw new StudioError(
      "CONFLICT",
      "Exécution déjà DISPATCHED — reconcile puis reprise contrôlée (AMBIGUOUS) requise",
      { exposeMessage: true },
    );
  }
  if (existing.status !== "AUTHORIZED" && existing.status !== "AMBIGUOUS") {
    throw new StudioError("CONFLICT", "Publication non autorisée");
  }

  const claimed = await claimAttempt(existing.id, existing.status);
  if (!claimed) {
    const again = await loadAttemptRow(existing.id);
    if (again?.status === "COMPLETED") {
      return { attemptId: again.id, status: again.status, idempotent: true as const };
    }
    if (again?.status === "DISPATCHED") {
      throw new StudioError("CONFLICT", "Dispatch déjà acquis par une autre exécution");
    }
    throw new StudioError(
      "CONFLICT",
      "Impossible d'acquérir la tentative (claim actif ou transition concurrente)",
    );
  }
  const row = (await loadAttemptRow(existing.id))!;
  let resultJson = row.resultJson;
  const claimToken = claimed.claim.claimToken;

  const plan = JSON.parse(row.planJson) as PublicationPlan;
  const fp = publicationEffectFingerprint(plan);
  if (fp !== row.fingerprint) {
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "CONFLICT",
      resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
    });
    throw new StudioError("CONFLICT", "Empreinte plan modifiée");
  }

  try {
    assertPlanPublicationSteps(plan);
  } catch (e) {
    const released = releaseClaim(readClaim(resultJson));
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "FAILED",
      resultJson: writeClaimInto(resultJson, released),
    });
    throw e;
  }

  const liveEffectMode = resolveConfiguredEffectProviderMode();
  if (plan.effectProviderMode && plan.effectProviderMode !== liveEffectMode) {
    const released = releaseClaim(readClaim(resultJson));
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "REQUIRES_REQUALIFICATION",
      resultJson: writeClaimInto(resultJson, released),
    });
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Mode fournisseur d'effet divergé (plan=${plan.effectProviderMode}, live=${liveEffectMode})`,
    );
  }

  const authCtx: AuthorityCtx = {
    pilotId: input.pilotId,
    projectId: input.projectId,
    decisionId: row.decisionId,
    expectedKind: "GIT_PUBLICATION_MANDATE",
    attemptId: row.id,
    repositoryId: plan.repositoryId,
    authorizationId: plan.authorizationId,
    installationId: plan.installationId,
    expectedActorLogin: plan.actorLogin,
    fingerprint: row.fingerprint,
    effectConditions: row.effectConditions,
  };

  async function haltAuthority(e: unknown): Promise<never> {
    const released = releaseClaim(readClaim(resultJson));
    if (e instanceof StudioError && e.code === "REQUIRES_REQUALIFICATION") {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeProgress(resultJson, progress, released),
      });
    } else if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      // Partial remote effects stay observable — do not invent cancellation.
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "FAILED",
        resultJson: writeProgress(resultJson, progress, released),
      });
    }
    throw e;
  }

  /** C1 + B2: D6 authority and SQL ownership/lease before every provider mutation. */
  async function beforeProviderMutation() {
    resultJson = await assertAndTouchOwnership(row.id, claimToken, resultJson);
    try {
      await assertStepAuthority(authCtx);
    } catch (e) {
      await haltAuthority(e);
    }
  }

  let progress = readProgress(resultJson);

  try {
    await assertStepAuthority(authCtx);
  } catch (e) {
    await haltAuthority(e);
  }

  const policy = classifyPublicationPath(plan.targetPath);
  if (!policy.allowed) throw new StudioError("ACCESS_DENIED", policy.reason);

  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.id, plan.revisionId))
      .limit(1)
  )[0];
  if (!rev || rev.status !== "AVAILABLE") {
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "REQUIRES_REQUALIFICATION",
      resultJson: writeProgress(resultJson, progress, releaseClaim(readClaim(resultJson))),
    });
    throw new StudioError("REQUIRES_REQUALIFICATION", "Révision plus AVAILABLE");
  }
  if (revisionContentFingerprint(rev.contentMarkdown) !== plan.revisionFingerprint) {
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "REQUIRES_REQUALIFICATION",
      resultJson: writeProgress(resultJson, progress, releaseClaim(readClaim(resultJson))),
    });
    throw new StudioError("REQUIRES_REQUALIFICATION", "Contenu révision modifié depuis inspection");
  }
  // Plan snapshot must still match the revision fingerprint pinned at inspection.
  if (revisionContentFingerprint(plan.contentMarkdown) !== plan.revisionFingerprint) {
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "REQUIRES_REQUALIFICATION",
      resultJson: writeProgress(resultJson, progress, releaseClaim(readClaim(resultJson))),
    });
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Contenu plan ≠ empreinte révision — publication refusée",
    );
  }

  const provider = resolveGitHubProvider();

  try {
    const headNow = await provider.getRefSha(input.pilotId, plan.repositoryFullName, plan.baseRef);
    if (plan.baseSha && headNow !== plan.baseSha) {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeProgress(resultJson, progress, releaseClaim(readClaim(resultJson))),
      });
      throw new StudioError("REQUIRES_REQUALIFICATION", "HEAD de base périmé");
    }

    let branchSha = progress.branchSha ?? headNow;
    if (plan.steps.includes("CREATE_BRANCH") && !progress.branchCreated) {
      await ExecutionBarrierRegistry.before("before:CREATE_BRANCH");
      await beforeProviderMutation();
      try {
        const br = await provider.createBranch(
          input.pilotId,
          plan.repositoryFullName,
          plan.publicationBranch,
          headNow,
        );
        branchSha = br.sha;
      } catch (e) {
        const partial =
          e && typeof e === "object" && "partialResult" in e
            ? (e as { partialResult?: { sha: string } }).partialResult
            : undefined;
        if (partial?.sha) {
          branchSha = partial.sha;
          progress = {
            ...progress,
            branchCreated: true,
            branchSha,
            lastStep: "CREATE_BRANCH",
          };
          resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
        }
        throw e;
      }
      progress = {
        ...progress,
        branchCreated: true,
        branchSha,
        lastStep: "CREATE_BRANCH",
      };
      resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
      await recordFact({
        attemptId: row.id,
        pilotId: input.pilotId,
        projectId: input.projectId,
        factKind: "BRANCH",
        repositoryFullName: plan.repositoryFullName,
        refName: plan.publicationBranch,
        sha: branchSha,
        prNumber: null,
        detail: { step: "CREATE_BRANCH" },
      });
    }

    let commitSha = progress.commitSha ?? branchSha;
    if (plan.steps.includes("PUBLISH_FILE") && !progress.filePublished) {
      await ExecutionBarrierRegistry.before("before:PUBLISH_FILE");
      await beforeProviderMutation();
      try {
        const put = await provider.putFileContents({
          pilotId: input.pilotId,
          fullName: plan.repositoryFullName,
          path: plan.targetPath,
          branch: plan.publicationBranch,
          message: `Publication D4 ${plan.documentId}`,
          content: plan.contentMarkdown,
          expectedHeadSha: branchSha,
        });
        commitSha = put.commitSha;
      } catch (e) {
        const partial =
          e && typeof e === "object" && "partialResult" in e
            ? (e as { partialResult?: { commitSha: string } }).partialResult
            : undefined;
        if (partial?.commitSha) {
          commitSha = partial.commitSha;
          progress = {
            ...progress,
            filePublished: true,
            commitSha,
            lastStep: "PUBLISH_FILE",
          };
          resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
          await recordFact({
            attemptId: row.id,
            pilotId: input.pilotId,
            projectId: input.projectId,
            factKind: "COMMIT",
            repositoryFullName: plan.repositoryFullName,
            refName: plan.publicationBranch,
            sha: commitSha,
            prNumber: null,
            detail: { path: plan.targetPath, lostAck: true },
          });
        }
        throw e;
      }
      progress = {
        ...progress,
        filePublished: true,
        commitSha,
        lastStep: "PUBLISH_FILE",
      };
      resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
      await recordFact({
        attemptId: row.id,
        pilotId: input.pilotId,
        projectId: input.projectId,
        factKind: "COMMIT",
        repositoryFullName: plan.repositoryFullName,
        refName: plan.publicationBranch,
        sha: commitSha,
        prNumber: null,
        detail: { path: plan.targetPath },
      });
    }

    let prNumber: number | null = progress.prNumber ?? null;
    /** Historical local flag — never sufficient alone for OPEN_PR completion. */
    const prHistoricallyCreated = Boolean(progress.prCreated || progress.prOpened);
    /** Set only after a successful remote observation in THIS dispatch. */
    let prRemoteVerified = false;

    if (plan.steps.includes("OPEN_PR")) {
      await ExecutionBarrierRegistry.before("before:OPEN_PR");
      await beforeProviderMutation();
      const publicationMarker = row.correlationKey;

      const findMatchingPr = async () => {
        try {
          return await provider.findPullRequest({
            pilotId: input.pilotId,
            fullName: plan.repositoryFullName,
            head: plan.publicationBranch,
            base: plan.targetBranch,
            publicationMarker,
            expectedHeadSha: commitSha ?? undefined,
          });
        } catch (e) {
          const code = providerErrorCode(e);
          if (isRemoteUnreadableCode(code)) {
            throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), { code: code || "AMBIGUOUS" });
          }
          throw e;
        }
      };

      const persistVerifiedPr = async (pr: PullRequestInfo, detail: Record<string, unknown>) => {
        // Marker check is mandatory even when PR was loaded by number.
        await assertPrMarkerProvenance({
          provider,
          pilotId: input.pilotId,
          plan,
          pr,
          publicationMarker,
          expectedHeadSha: commitSha,
        });
        prNumber = pr.number;
        progress = {
          ...progress,
          prCreated: true,
          prOpened: true,
          prNumber,
          prCurrentState: mapPrState(pr.state),
          lastStep: "OPEN_PR",
        };
        resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
        await recordFact({
          attemptId: row.id,
          pilotId: input.pilotId,
          projectId: input.projectId,
          factKind: "PR_OPEN",
          repositoryFullName: plan.repositoryFullName,
          refName: plan.publicationBranch,
          sha: pr.headSha,
          prNumber: pr.number,
          detail: {
            baseSha: pr.baseSha,
            htmlUrl: pr.htmlUrl,
            currentState: pr.state,
            publicationMarker,
            ...detail,
          },
        });
        prRemoteVerified = true;
      };

      if (prHistoricallyCreated) {
        // B4/C2 resume — historical flag forces remote re-identification; never createPR.
        let pr: PullRequestInfo | null = null;
        try {
          if (prNumber != null) {
            try {
              pr = await provider.getPullRequest(
                input.pilotId,
                plan.repositoryFullName,
                prNumber,
              );
            } catch (e) {
              const code = providerErrorCode(e);
              if (isRemoteUnreadableCode(code)) {
                throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), {
                  code: code || "AMBIGUOUS",
                });
              }
              if (code !== "NOT_FOUND") throw e;
              pr = null;
            }
          }
          if (!pr) {
            const found = await findMatchingPr();
            if (found.ambiguous || found.matches.length > 1) {
              progress = { ...progress, prCurrentState: "UNKNOWN" };
              const released = releaseClaim(readClaim(resultJson));
              await casOwnedTransition({
                attemptId: row.id,
                claimToken,
                fromStatus: "DISPATCHED",
                toStatus: "AMBIGUOUS",
                resultJson: writeProgress(resultJson, progress, released),
              });
              throw new StudioError(
                "AMBIGUOUS",
                "Plusieurs PR candidates à la reprise — STOP, pas de createPR",
              );
            }
            if (found.matches.length === 0) {
              progress = { ...progress, prCurrentState: "UNKNOWN" };
              const released = releaseClaim(readClaim(resultJson));
              await casOwnedTransition({
                attemptId: row.id,
                claimToken,
                fromStatus: "DISPATCHED",
                toStatus: "AMBIGUOUS",
                resultJson: writeProgress(resultJson, progress, released),
              });
              throw new StudioError(
                "AMBIGUOUS",
                "PR historique non retrouvée à distance — pas de createPR automatique",
              );
            }
            pr = found.matches[0]!;
          }
          await persistVerifiedPr(pr, { resumed: true, historicallyCreated: true });
        } catch (e) {
          if (e instanceof StudioError) throw e;
          const code = providerErrorCode(e);
          if (isRemoteUnreadableCode(code) || code === "AMBIGUOUS") {
            progress = { ...progress, prCurrentState: "UNKNOWN" };
            throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), { code: code || "AMBIGUOUS" });
          }
          throw e;
        }
      } else {
        // First publication — find then create at most once.
        let found: Awaited<ReturnType<typeof provider.findPullRequest>>;
        try {
          found = await findMatchingPr();
        } catch (e) {
          const code = providerErrorCode(e);
          if (isRemoteUnreadableCode(code)) {
            throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), { code: code || "AMBIGUOUS" });
          }
          throw e;
        }
        if (found.ambiguous || found.matches.length > 1) {
          const released = releaseClaim(readClaim(resultJson));
          await casOwnedTransition({
            attemptId: row.id,
            claimToken,
            fromStatus: "DISPATCHED",
            toStatus: "AMBIGUOUS",
            resultJson: writeProgress(resultJson, progress, released),
          });
          throw new StudioError("AMBIGUOUS", "Plusieurs PR candidates — STOP, pas de createPR");
        }
        let pr = found.matches[0] ?? null;
        if (!pr) {
          try {
            pr = await provider.createPullRequest({
              pilotId: input.pilotId,
              fullName: plan.repositoryFullName,
              title: `Publication document ${plan.documentId}`,
              head: plan.publicationBranch,
              base: plan.targetBranch,
              body: `Publication documentaire ML4 — merge mandat distinct requis\nsfia-publication:${publicationMarker}`,
              publicationMarker,
            });
          } catch (e) {
            const partial =
              e && typeof e === "object" && "partialResult" in e
                ? (e as {
                    partialResult?: {
                      number: number;
                      headSha: string;
                      baseSha: string;
                      htmlUrl?: string;
                      state?: string;
                    };
                  }).partialResult
                : undefined;
            if (partial?.number != null) {
              progress = {
                ...progress,
                prCreated: true,
                prOpened: true,
                prNumber: partial.number,
                prCurrentState: mapPrState(partial.state ?? "open"),
                lastStep: "OPEN_PR",
              };
              resultJson = await persistOwnedProgress(row.id, claimToken, resultJson, progress);
              await recordFact({
                attemptId: row.id,
                pilotId: input.pilotId,
                projectId: input.projectId,
                factKind: "PR_OPEN",
                repositoryFullName: plan.repositoryFullName,
                refName: plan.publicationBranch,
                sha: partial.headSha,
                prNumber: partial.number,
                detail: { baseSha: partial.baseSha, htmlUrl: partial.htmlUrl, lostAck: true },
              });
            }
            throw e;
          }
        }
        await persistVerifiedPr(pr, { createdOrFound: true });
      }
    } else {
      prRemoteVerified = true;
    }

    // Gate: OPEN_PR requires remote proof this dispatch — local prCreated alone is insufficient.
    if (plan.steps.includes("OPEN_PR")) {
      if (
        !prRemoteVerified ||
        prNumber == null ||
        !progress.prCurrentState ||
        progress.prCurrentState === "UNKNOWN" ||
        progress.prCurrentState === "ABSENT"
      ) {
        progress = { ...progress, prCurrentState: progress.prCurrentState ?? "UNKNOWN" };
        const released = releaseClaim(readClaim(resultJson));
        await casOwnedTransition({
          attemptId: row.id,
          claimToken,
          fromStatus: "DISPATCHED",
          toStatus: "AMBIGUOUS",
          resultJson: writeProgress(resultJson, progress, released),
        });
        throw new StudioError(
          "AMBIGUOUS",
          "OPEN_PR non prouvée à distance — COMPLETED refusé",
        );
      }
    }

    try {
      assertPublicationEffectProof({ plan, progress, commitSha });
    } catch (e) {
      const released = releaseClaim(readClaim(resultJson));
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "AMBIGUOUS",
        resultJson: writeProgress(resultJson, progress, released),
      });
      throw e;
    }

    const pubStatus =
      progress.prCurrentState === "CLOSED"
        ? "PR_CLOSED"
        : progress.prCurrentState === "MERGED"
          ? "MERGED"
          : progress.prCurrentState === "OPEN" && prNumber != null
            ? "PR_OPEN"
            : prNumber != null
              ? "PR_OPEN"
              : "COMMITTED";

    const released = releaseClaim(readClaim(resultJson));
    await ExecutionBarrierRegistry.before("before:COMPLETE_PUBLICATION");
    const { pubId } = await commitPublicationCompletion({
      attemptId: row.id,
      mode: "owned",
      claimToken,
      fromStatus: "DISPATCHED",
      terminalResultJson: JSON.stringify({
        commitSha,
        prNumber,
        progress,
        claim: released,
        effectProviderMode: plan.effectProviderMode ?? null,
      }),
      pub: {
        projectId: input.projectId,
        pilotId: input.pilotId,
        documentId: plan.documentId,
        revisionId: plan.revisionId,
        repositoryId: plan.repositoryId,
        targetPath: plan.targetPath,
        targetBranch: plan.targetBranch,
        baseSha: plan.baseSha,
        headSha: commitSha,
        prNumber,
        status: pubStatus,
        publicationBranch: plan.publicationBranch,
        prCurrentState: progress.prCurrentState,
        prCreatedHistorically: Boolean(progress.prCreated || progress.prOpened),
        extraDetail: {
          resumedVerified: prHistoricallyCreated,
          effectProviderMode: plan.effectProviderMode ?? null,
        },
      },
    });

    return {
      attemptId: row.id,
      status: "COMPLETED" as const,
      commitSha,
      prNumber,
      publicationRefId: pubId,
    };
  } catch (e) {
    if (e instanceof StudioError && e.code === "CONFLICT") throw e;
    // Already transitioned in-place (resume qualification) — do not double-CAS.
    if (e instanceof StudioError && e.code === "AMBIGUOUS") throw e;
    if (e instanceof StudioError && e.code === "REQUIRES_REQUALIFICATION") {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeProgress(resultJson, progress, releaseClaim(readClaim(resultJson))),
      });
      throw e;
    }
    const code =
      e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
    if (code === "TIMEOUT" || code === "AMBIGUOUS" || code === "DEPENDENCY_UNAVAILABLE") {
      // Release claim only if we still own it — stale owner must not liberate a newer claim.
      const released = releaseClaim(readClaim(resultJson));
      const ok = await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "AMBIGUOUS",
        resultJson: writeProgress(resultJson, progress, released),
      });
      if (!ok) {
        throw new StudioError(
          "CONFLICT",
          "AMBIGUOUS non écrit — propriété déjà reprise par un autre owner",
        );
      }
      throw new StudioError("AMBIGUOUS", "Effet distant ambigu — relecture requise");
    }
    // Local/proven denials (gate, path, merge hard-block) must not leave DISPATCHED wedged.
    if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      const released = releaseClaim(readClaim(resultJson));
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "FAILED",
        resultJson: writeProgress(resultJson, progress, released),
      });
      throw e;
    }
    if (e instanceof StudioError) throw e;
    const released = releaseClaim(readClaim(resultJson));
    await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "FAILED",
      resultJson: writeProgress(resultJson, progress, released),
    });
    throw e;
  }
}

export async function prepareMerge(input: {
  pilotId: string;
  projectId: string;
  publicationAttemptId: string;
  correlationKey: string;
}) {
  await assertProject(input.pilotId, input.projectId);

  const prior = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.correlationKey, input.correlationKey),
        ),
      )
      .limit(1)
  )[0];

  const pubAttempt = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.publicationAttemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.kind, "GIT_PUBLICATION"),
        ),
      )
      .limit(1)
  )[0];
  if (!pubAttempt || pubAttempt.status !== "COMPLETED") {
    throw new StudioError("INVALID_REQUEST", "Publication documentaire ML4 non COMPLETED");
  }

  const pubRef = (
    await db
      .select()
      .from(documentPublicationRefs)
      .where(
        and(
          eq(documentPublicationRefs.effectAttemptId, pubAttempt.id),
          eq(documentPublicationRefs.projectId, input.projectId),
          eq(documentPublicationRefs.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!pubRef || pubRef.prNumber == null) {
    throw new StudioError("INVALID_REQUEST", "PR documentaire ML4 absente");
  }

  const pubPlan = JSON.parse(pubAttempt.planJson) as PublicationPlan;
  const { repo, authz } = await loadRepoContext(
    input.pilotId,
    input.projectId,
    pubRef.repositoryId,
  );
  if (repo.fullName !== pubPlan.repositoryFullName) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Dépôt publication modifié");
  }

  const provider = resolveGitHubProvider();
  const pr = await provider.getPullRequest(input.pilotId, repo.fullName, pubRef.prNumber);
  if (pr.state !== "open") {
    throw new StudioError("CONFLICT", `PR non ouverte: ${pr.state}`);
  }
  if (pubRef.headSha && pr.headSha !== pubRef.headSha) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "HEAD PR a changé depuis la publication");
  }
  if (pr.headRef !== pubPlan.publicationBranch) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "headRef PR inattendu");
  }
  if (pr.baseRef !== pubPlan.targetBranch && pr.baseRef !== pubRef.targetBranch) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "baseRef PR inattendue");
  }

  const plan: MergePlan = {
    repositoryId: pubRef.repositoryId,
    repositoryFullName: repo.fullName,
    authorizationId: authz.id,
    installationId: authz.installationId!,
    actorLogin: authz.accountLogin,
    publicationAttemptId: pubAttempt.id,
    publicationRefId: pubRef.id,
    documentId: pubRef.documentId,
    revisionId: pubRef.revisionId,
    targetPath: pubRef.targetPath,
    prNumber: pubRef.prNumber,
    expectedHeadSha: pr.headSha,
    expectedBaseSha: pr.baseSha,
    expectedHeadRef: pr.headRef,
    expectedBaseRef: pr.baseRef,
    publicationBranch: pubPlan.publicationBranch,
  };
  const fingerprint = mergeEffectFingerprint(plan);

  if (prior) {
    if (prior.fingerprint !== fingerprint) {
      throw new StudioError("CONFLICT", "PAYLOAD_MISMATCH pour correlationKey merge", {
        exposeMessage: true,
      });
    }
    return {
      attemptId: prior.id,
      status: prior.status,
      idempotent: true as const,
      plan: JSON.parse(prior.planJson) as MergePlan,
      fingerprint: prior.fingerprint,
    };
  }

  const attemptId = newId("efx");
  const now = new Date();
  await db.insert(effectAttempts).values({
    id: attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    kind: "GIT_MERGE",
    status: "PREPARED",
    correlationKey: input.correlationKey,
    fingerprint,
    planJson: JSON.stringify(plan),
    resultJson: "{}",
    createdAt: now,
    updatedAt: now,
  });
  return { attemptId, status: "PREPARED" as const, plan, fingerprint };
}

export async function authorizeMerge(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  statement: string;
}) {
  return db.transaction(async (tx) => {
    const row = (
      await tx
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, input.attemptId),
            eq(effectAttempts.kind, "GIT_MERGE"),
            eq(effectAttempts.pilotId, input.pilotId),
            eq(effectAttempts.projectId, input.projectId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) throw new StudioError("NOT_FOUND", "Tentative merge introuvable");
    if (row.status !== "PREPARED") {
      return { attemptId: row.id, status: row.status, decisionId: row.decisionId, idempotent: true };
    }
    const plan = JSON.parse(row.planJson) as MergePlan;
    const conditions = JSON.stringify({
      fingerprint: row.fingerprint,
      publicationAttemptId: plan.publicationAttemptId,
      prNumber: plan.prNumber,
    });
    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "GIT_EFFECT",
      sourceRef: input.attemptId,
      kind: "GIT_MERGE_MANDATE",
      objectRef: plan.publicationAttemptId,
      statement: input.statement,
      effectConditions: conditions,
    });
    await tx
      .update(effectAttempts)
      .set({
        status: "AUTHORIZED",
        decisionId,
        effectConditions: conditions,
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, row.id));
    return { attemptId: row.id, status: "AUTHORIZED" as const, decisionId };
  });
}

export async function dispatchMerge(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const existing = await loadAttemptRow(input.attemptId);
  if (!existing) throw new StudioError("NOT_FOUND", "Tentative merge introuvable");
  if (existing.projectId !== input.projectId || existing.pilotId !== input.pilotId) {
    throw new StudioError("NOT_FOUND", "Tentative merge introuvable");
  }
  if (existing.kind !== "GIT_MERGE") throw new StudioError("CONFLICT", "Kind incompatible");
  if (existing.status === "COMPLETED") {
    return { attemptId: existing.id, status: existing.status, idempotent: true as const };
  }
  if (existing.status === "DISPATCHED") {
    throw new StudioError(
      "CONFLICT",
      "Merge déjà DISPATCHED — reconcile puis reprise contrôlée requise",
      { exposeMessage: true },
    );
  }
  if (existing.status !== "AUTHORIZED" && existing.status !== "AMBIGUOUS") {
    throw new StudioError("CONFLICT", "Merge non autorisé");
  }

  const claimed = await claimAttempt(existing.id, existing.status);
  if (!claimed) {
    const again = await loadAttemptRow(existing.id);
    if (again?.status === "COMPLETED") {
      return { attemptId: again.id, status: again.status, idempotent: true as const };
    }
    throw new StudioError("CONFLICT", "Dispatch merge déjà acquis");
  }
  const row = (await loadAttemptRow(existing.id))!;
  let resultJson = row.resultJson;
  const claimToken = claimed.claim.claimToken;
  const plan = JSON.parse(row.planJson) as MergePlan;

  const mergeAuthCtx: AuthorityCtx = {
    pilotId: input.pilotId,
    projectId: input.projectId,
    decisionId: row.decisionId,
    expectedKind: "GIT_MERGE_MANDATE",
    attemptId: row.id,
    repositoryId: plan.repositoryId,
    authorizationId: plan.authorizationId,
    installationId: plan.installationId,
    expectedActorLogin: plan.actorLogin,
    fingerprint: row.fingerprint,
    effectConditions: row.effectConditions,
  };

  try {
    resultJson = await assertAndTouchOwnership(row.id, claimToken, resultJson);
    await assertStepAuthority(mergeAuthCtx);
  } catch (e) {
    if (e instanceof StudioError && e.code === "REQUIRES_REQUALIFICATION") {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
      });
    }
    throw e;
  }

  // Re-verify publication provenance at point of effect.
  const pubRef = (
    await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.id, plan.publicationRefId))
      .limit(1)
  )[0];
  if (!pubRef || pubRef.projectId !== input.projectId || pubRef.pilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Référence publication absente");
  }
  if (pubRef.prNumber !== plan.prNumber || pubRef.effectAttemptId !== plan.publicationAttemptId) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Provenance publication incohérente");
  }

  const provider = resolveGitHubProvider();
  try {
    await ExecutionBarrierRegistry.before("before:MERGE");
    resultJson = await assertAndTouchOwnership(row.id, claimToken, resultJson);
    await assertStepAuthority(mergeAuthCtx);
    const pr = await provider.getPullRequest(input.pilotId, plan.repositoryFullName, plan.prNumber);
    if (pr.state !== "open") {
      throw new StudioError("CONFLICT", `PR non fusionnable: ${pr.state}`);
    }
    if (pr.headSha !== plan.expectedHeadSha) {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
      });
      throw new StudioError("REQUIRES_REQUALIFICATION", "HEAD PR périmé");
    }
    if (plan.expectedBaseSha != null && pr.baseSha !== plan.expectedBaseSha) {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
      });
      throw new StudioError("REQUIRES_REQUALIFICATION", "BASE PR avancée depuis inspection");
    }
    if (pr.headRef !== plan.expectedHeadRef) {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
      });
      throw new StudioError("REQUIRES_REQUALIFICATION", "headRef inattendu au merge");
    }
    if (pr.baseRef !== plan.expectedBaseRef) {
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "REQUIRES_REQUALIFICATION",
        resultJson: writeClaimInto(resultJson, releaseClaim(readClaim(resultJson))),
      });
      throw new StudioError("REQUIRES_REQUALIFICATION", "baseRef inattendue au merge");
    }
    // Re-touch immediately before merge mutation (ownership + D6).
    resultJson = await assertAndTouchOwnership(row.id, claimToken, resultJson);
    await assertStepAuthority(mergeAuthCtx);
    const merged = await provider.mergePullRequest({
      pilotId: input.pilotId,
      fullName: plan.repositoryFullName,
      prNumber: plan.prNumber,
      expectedHeadSha: plan.expectedHeadSha,
      expectedBaseSha: plan.expectedBaseSha,
    });
    await recordFact({
      attemptId: row.id,
      pilotId: input.pilotId,
      projectId: input.projectId,
      factKind: "MERGE",
      repositoryFullName: plan.repositoryFullName,
      refName: pr.baseRef,
      sha: merged.sha,
      prNumber: plan.prNumber,
      detail: { merged: merged.merged, publicationRefId: plan.publicationRefId },
    });
    await db
      .update(documentPublicationRefs)
      .set({ status: "MERGED", headSha: merged.sha, updatedAt: new Date() })
      .where(eq(documentPublicationRefs.id, plan.publicationRefId));
    const released = releaseClaim(readClaim(resultJson));
    const ok = await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "COMPLETED",
      resultJson: JSON.stringify({ merged: true, sha: merged.sha, claim: released }),
    });
    if (!ok) {
      throw new StudioError("CONFLICT", "Complétion merge refusée — fencing SQL");
    }
    return { attemptId: row.id, status: "COMPLETED" as const, sha: merged.sha };
  } catch (e) {
    if (e instanceof StudioError && e.code === "CONFLICT") throw e;
    const code =
      e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
    if (code === "TIMEOUT" || code === "AMBIGUOUS" || code === "DEPENDENCY_UNAVAILABLE") {
      const released = releaseClaim(readClaim(resultJson));
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "AMBIGUOUS",
        resultJson: writeClaimInto(resultJson, released),
      });
      throw new StudioError("AMBIGUOUS", "Merge distant ambigu — relecture requise");
    }
    if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      const released = releaseClaim(readClaim(resultJson));
      await casOwnedTransition({
        attemptId: row.id,
        claimToken,
        fromStatus: "DISPATCHED",
        toStatus: "FAILED",
        resultJson: writeClaimInto(resultJson, released),
      });
      throw e;
    }
    throw e;
  }
}

export async function reconcileAttempt(pilotId: string, projectId: string, attemptId: string) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.projectId, projectId),
          eq(effectAttempts.pilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");

  const facts = await db
    .select()
    .from(observedGitFacts)
    .where(eq(observedGitFacts.attemptId, attemptId));

  const claim = readClaim(row.resultJson);
  const claimActive = isClaimActive(claim);

  if (row.kind === "GIT_PUBLICATION") {
    const plan = JSON.parse(row.planJson) as PublicationPlan;
    const progress = readProgress(row.resultJson);
    const observed: PublicationProgress = { ...progress };

    // ML4-REC-01 — bind reconcile observations to the attempt's frozen provider mode
    // BEFORE selecting any Git provider. Wrong-provider observations are never D7/D8 proof.
    const historicalMode = qualifyPlanEffectProviderMode(plan);
    const liveMode = resolveConfiguredEffectProviderMode();
    const providerMismatch =
      (historicalMode === "REAL" || historicalMode === "SCRIPTED") &&
      historicalMode !== liveMode;
    const provenanceUnknown = historicalMode === "UNKNOWN";

    if (providerMismatch || provenanceUnknown) {
      const note = providerMismatch
        ? `ML4-REC-01: mode fournisseur divergé (plan=${historicalMode}, live=${liveMode}) — observation refusée`
        : "ML4-REC-01: provenance fournisseur UNKNOWN — aucune attribution D7/D8 depuis le provider live";

      // D: COMPLETED historique — ne pas rétrograder ni réécrire D8 depuis le mauvais provider.
      if (row.status === "COMPLETED") {
        return {
          attemptId,
          status: "COMPLETED" as const,
          progress: observed,
          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
          facts,
          prCurrentState: observed.prCurrentState ?? null,
          note: `${note} — COMPLETED historique préservé`,
        };
      }

      // A: DISPATCHED + claim actif — ownership préservé, aucune libération.
      if (row.status === "DISPATCHED" && claimActive) {
        return {
          attemptId,
          status: "DISPATCHED" as const,
          progress: observed,
          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
          facts,
          prCurrentState: observed.prCurrentState ?? null,
          note: `READ-ONLY: claim/lease actif — ${note}`,
        };
      }

      // Known mismatch → REQUIRES_REQUALIFICATION when CAS liberation is applicable.
      // UNKNOWN → leave non-requalified (AMBIGUOUS), never invent REAL / never COMPLETED.
      const toStatus = providerMismatch ? "REQUIRES_REQUALIFICATION" : "AMBIGUOUS";
      if (row.status === "AMBIGUOUS" || row.status === "DISPATCHED") {
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus,
          resultJson: writeProgress(row.resultJson, observed, released),
        });
        return {
          attemptId,
          status: cas ? toStatus : row.status,
          progress: observed,
          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
          facts,
          prCurrentState: observed.prCurrentState ?? null,
          note,
        };
      }

      return {
        attemptId,
        status: row.status,
        progress: observed,
        remoteHead: observed.branchSha ?? progress.branchSha ?? null,
        facts,
        prCurrentState: observed.prCurrentState ?? null,
        note,
      };
    }

    // Modes match (known REAL|SCRIPTED) — provider may observe.
    const provider = resolveGitHubProvider();
    if (provider.mode !== liveMode) {
      // Fail-closed: never silently fall back to a different provider identity.
      throw new StudioError(
        "DEPENDENCY_UNAVAILABLE",
        `Fournisseur Git résolu incohérent (attendu ${liveMode}, obtenu ${provider.mode})`,
        { httpStatus: 503 },
      );
    }

    // Historical malformed plans: never COMPLETED / D8 from reconcile.
    let planStepsValid = true;
    try {
      assertPlanPublicationSteps(plan);
    } catch {
      planStepsValid = false;
    }

    // Observation always allowed (read-only against remote).
    try {
      const branchSha = await provider.getRefSha(
        pilotId,
        plan.repositoryFullName,
        plan.publicationBranch,
      );
      observed.branchCreated = true;
      observed.branchSha = branchSha;
    } catch {
      // Branch may be absent.
    }

    try {
      const file = await provider.getFileContent(
        pilotId,
        plan.repositoryFullName,
        plan.targetPath,
        plan.publicationBranch,
      );
      if (file.content === plan.contentMarkdown) {
        observed.filePublished = true;
        // Contents API `sha` is the blob SHA — commit SHA is the branch tip after publish.
        observed.commitSha = observed.branchSha ?? progress.branchSha ?? undefined;
        observed.contentBlobSha = file.sha;
      }
    } catch {
      // File not yet published.
    }

    let remoteReadable = true;
    /** Marker provenance must hold even when PR was loaded by known prNumber. */
    let prMarkerProven = !plan.steps.includes("OPEN_PR");
    try {
      if (progress.prNumber != null) {
        const pr = await provider.getPullRequest(
          pilotId,
          plan.repositoryFullName,
          progress.prNumber,
        );
        // C2 — historical creation vs current state (not yet COMPLETED attribution).
        observed.prCreated = true;
        observed.prOpened = true; // legacy: created historically
        observed.prNumber = pr.number;
        observed.prCurrentState = mapPrState(pr.state);
        if (plan.steps.includes("OPEN_PR")) {
          try {
            await assertPrMarkerProvenance({
              provider,
              pilotId,
              plan,
              pr,
              publicationMarker: row.correlationKey,
              expectedHeadSha: observed.commitSha ?? progress.commitSha ?? null,
            });
            prMarkerProven = true;
          } catch (provErr) {
            prMarkerProven = false;
            if (provErr instanceof StudioError) {
              // Fail-closed: do not COMPLETED on foreign/wrong/absent marker.
              observed.prCurrentState = "UNKNOWN";
              if (row.status === "DISPATCHED" && claimActive) {
                return {
                  attemptId,
                  status: row.status,
                  progress: observed,
                  remoteHead: observed.branchSha ?? null,
                  facts,
                  prCurrentState: observed.prCurrentState,
                  note: `READ-ONLY: claim actif — provenance PR refusée (${provErr.code})`,
                };
              }
              const released = releaseClaim(claim);
              const toStatus =
                provErr.code === "AMBIGUOUS" ? "AMBIGUOUS" : "REQUIRES_REQUALIFICATION";
              const liberated = await casLiberateInactiveDispatch({
                attemptId: row.id,
                fromStatus: row.status,
                toStatus,
                resultJson: writeProgress(row.resultJson, observed, released),
              });
              return {
                attemptId,
                status: liberated ? toStatus : row.status,
                progress: observed,
                remoteHead: observed.branchSha ?? null,
                facts,
                prCurrentState: observed.prCurrentState,
                note: `Provenance PR (marker) refusée — ${provErr.code}, pas de COMPLETED`,
              };
            }
            throw provErr;
          }
        }
      } else if (plan.steps.includes("OPEN_PR")) {
        const found = await provider.findPullRequest({
          pilotId,
          fullName: plan.repositoryFullName,
          head: plan.publicationBranch,
          base: plan.targetBranch,
          publicationMarker: row.correlationKey,
          expectedHeadSha: observed.commitSha ?? undefined,
        });
        if (found.ambiguous || found.matches.length > 1) {
          observed.prCurrentState = "UNKNOWN";
          prMarkerProven = false;
          // B2: if DISPATCHED with active claim — observation only, do not free ownership.
          if (row.status === "DISPATCHED" && claimActive) {
            return {
              attemptId,
              status: row.status,
              progress: observed,
              remoteHead: observed.branchSha ?? null,
              facts,
              prCurrentState: observed.prCurrentState,
              note: "READ-ONLY: claim actif — plusieurs PR candidates observées, statut non libéré",
            };
          }
          const released = releaseClaim(claim);
          const liberated = await casLiberateInactiveDispatch({
            attemptId: row.id,
            fromStatus: row.status,
            toStatus: "AMBIGUOUS",
            resultJson: writeProgress(row.resultJson, observed, released),
          });
          return {
            attemptId,
            status: liberated ? ("AMBIGUOUS" as const) : row.status,
            progress: observed,
            remoteHead: observed.branchSha ?? null,
            facts,
            prCurrentState: observed.prCurrentState,
            note: "Plusieurs PR candidates — AMBIGUOUS, aucun createPR",
          };
        }
        if (found.matches.length === 1) {
          const pr = found.matches[0]!;
          observed.prCreated = true;
          observed.prOpened = true;
          observed.prNumber = pr.number;
          observed.prCurrentState = mapPrState(pr.state);
          // findPullRequest already filtered by marker — still verify head/base/SHA plan.
          assertPrMatchesPlan(pr, plan, observed.commitSha ?? progress.commitSha ?? null);
          prMarkerProven = true;
        } else {
          // Historical local flag without a remote match ⇒ UNKNOWN, never invent ABSENT.
          prMarkerProven = false;
          observed.prCurrentState =
            progress.prCreated || progress.prOpened || progress.prNumber != null
              ? "UNKNOWN"
              : "ABSENT";
        }
      }
    } catch (e) {
      const code =
        e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
      if (e instanceof StudioError) {
        // Plan mismatch after findPullRequest, etc.
        remoteReadable = true;
        prMarkerProven = false;
        observed.prCurrentState = "UNKNOWN";
        if (row.status === "DISPATCHED" && claimActive) {
          return {
            attemptId,
            status: row.status,
            progress: observed,
            remoteHead: observed.branchSha ?? null,
            facts,
            prCurrentState: observed.prCurrentState,
            note: `READ-ONLY: claim actif — ${e.code}`,
          };
        }
        const released = releaseClaim(claim);
        const toStatus =
          e.code === "AMBIGUOUS" ? "AMBIGUOUS" : "REQUIRES_REQUALIFICATION";
        const liberated = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus,
          resultJson: writeProgress(row.resultJson, observed, released),
        });
        return {
          attemptId,
          status: liberated ? toStatus : row.status,
          progress: observed,
          remoteHead: observed.branchSha ?? null,
          facts,
          prCurrentState: observed.prCurrentState,
          note: `Provenance/plan PR refusée — ${e.code}`,
        };
      }
      if (code === "TIMEOUT" || code === "FORBIDDEN" || code === "AMBIGUOUS") {
        remoteReadable = false;
        prMarkerProven = false;
        observed.prCurrentState = "UNKNOWN";
      } else if (code === "NOT_FOUND") {
        prMarkerProven = false;
        observed.prCurrentState =
          progress.prCreated || progress.prOpened || progress.prNumber != null
            ? "UNKNOWN"
            : "ABSENT";
      }
    }

    // Historical local progress ≠ remote proof. COMPLETED from reconcile requires
    // re-read PR state + independent marker provenance (even if prNumber was known).
    // Empty/invalid steps never vacuously succeed — assertPublicationEffectProof is fail-closed.
    let effectProofOk = false;
    if (planStepsValid) {
      try {
        assertPublicationEffectProof({
          plan,
          progress: observed,
          commitSha: observed.commitSha,
        });
        // PR remote provenance still required beyond progress flags.
        const prRemoteProven =
          !plan.steps.includes("OPEN_PR") ||
          (remoteReadable &&
            prMarkerProven &&
            observed.prNumber != null &&
            (observed.prCurrentState === "OPEN" ||
              observed.prCurrentState === "CLOSED" ||
              observed.prCurrentState === "MERGED"));
        effectProofOk = prRemoteProven;
      } catch {
        effectProofOk = false;
      }
    }
    const stepsDone = effectProofOk;

    // B2 — DISPATCHED with active lease: READ-ONLY. Never liberate status.
    if (row.status === "DISPATCHED" && claimActive) {
      return {
        attemptId,
        status: "DISPATCHED" as const,
        progress: observed,
        remoteHead: observed.branchSha ?? null,
        facts,
        prCurrentState: observed.prCurrentState ?? null,
        note: "READ-ONLY: claim/lease actif — aucune mutation de statut",
      };
    }

    // COMPLETED historical: refresh current PR state without inventing OPEN or creating a new PR.
    if (row.status === "COMPLETED") {
      const existingRef = (
        await db
          .select()
          .from(documentPublicationRefs)
          .where(eq(documentPublicationRefs.effectAttemptId, row.id))
          .limit(1)
      )[0];
      if (existingRef && observed.prCurrentState) {
        const nextPubStatus =
          observed.prCurrentState === "MERGED"
            ? "MERGED"
            : observed.prCurrentState === "CLOSED"
              ? "PR_CLOSED"
              : observed.prCurrentState === "OPEN"
                ? "PR_OPEN"
                : existingRef.status;
        await db
          .update(documentPublicationRefs)
          .set({
            status: nextPubStatus,
            detailJson: JSON.stringify({
              ...JSON.parse(existingRef.detailJson || "{}"),
              prCurrentState: observed.prCurrentState,
              prCreatedHistorically: true,
              reconciledCurrent: true,
            }),
            updatedAt: new Date(),
          })
          .where(eq(documentPublicationRefs.id, existingRef.id));
      }
      return {
        attemptId,
        status: "COMPLETED" as const,
        progress: observed,
        remoteHead: observed.branchSha ?? null,
        facts,
        prCurrentState: observed.prCurrentState ?? null,
        note: "COMPLETED historique — état courant PR requalifié sans nouvelle création",
      };
    }

    let nextStatus = row.status;
    if (row.status === "AMBIGUOUS" || row.status === "DISPATCHED") {
      // DISPATCHED here ⇒ claim must be inactive in SQL before liberation.
      if (!remoteReadable) {
        if (row.status === "DISPATCHED" && claimActive) {
          return {
            attemptId,
            status: row.status,
            progress: observed,
            facts,
            prCurrentState: "UNKNOWN" as const,
            note: "Remote illisible — claim actif, statut conservé",
          };
        }
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus: "AMBIGUOUS",
          resultJson: writeProgress(row.resultJson, observed, released),
        });
        nextStatus = cas ? "AMBIGUOUS" : row.status;
        return {
          attemptId,
          status: nextStatus,
          progress: observed,
          remoteHead: observed.branchSha ?? null,
          facts,
          prCurrentState: observed.prCurrentState ?? "UNKNOWN",
          note: "Remote illisible — fail-closed AMBIGUOUS (pas de COMPLETED, pas de createPR)",
        };
      }

      if (stepsDone && observed.commitSha) {
        const pubStatus =
          observed.prCurrentState === "CLOSED"
            ? "PR_CLOSED"
            : observed.prCurrentState === "MERGED"
              ? "MERGED"
              : observed.prCurrentState === "OPEN"
                ? "PR_OPEN"
                : "COMMITTED";
        const released = releaseClaim(claim);
        try {
          await commitPublicationCompletion({
            attemptId: row.id,
            mode: "liberate_inactive",
            fromStatus: row.status,
            terminalResultJson: JSON.stringify({
              commitSha: observed.commitSha,
              prNumber: observed.prNumber,
              progress: observed,
              reconciled: true,
              claim: released,
              effectProviderMode: plan.effectProviderMode ?? null,
            }),
            pub: {
              projectId,
              pilotId,
              documentId: plan.documentId,
              revisionId: plan.revisionId,
              repositoryId: plan.repositoryId,
              targetPath: plan.targetPath,
              targetBranch: plan.targetBranch,
              baseSha: plan.baseSha,
              headSha: observed.commitSha,
              prNumber: observed.prNumber ?? null,
              status: pubStatus,
              publicationBranch: plan.publicationBranch,
              prCurrentState: observed.prCurrentState,
              prCreatedHistorically: Boolean(observed.prCreated || observed.prOpened),
              extraDetail: {
                reconciled: true,
                effectProviderMode: plan.effectProviderMode ?? null,
              },
            },
          });
          nextStatus = "COMPLETED";
        } catch (e) {
          if (e instanceof StudioError && e.code === "CONFLICT") {
            // Losing reconciler — no D8 orphan (txn rolled back).
            nextStatus = row.status;
          } else {
            throw e;
          }
        }
      } else if (stepsDone) {
        // Proven steps but missing commitSha — fail-closed AMBIGUOUS.
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus: "AMBIGUOUS",
          resultJson: writeProgress(row.resultJson, observed, released),
        });
        nextStatus = cas ? "AMBIGUOUS" : row.status;
      } else {
        // Historical prCreated without remote proof stays AMBIGUOUS / UNKNOWN.
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus: "AMBIGUOUS",
          resultJson: writeProgress(row.resultJson, observed, released),
        });
        nextStatus = cas ? "AMBIGUOUS" : row.status;
      }
    }

    return {
      attemptId,
      status: nextStatus,
      progress: observed,
      remoteHead: observed.branchSha ?? null,
      facts,
      prCurrentState: observed.prCurrentState ?? null,
      note:
        nextStatus === "COMPLETED"
          ? "Réconciliation: étapes historiques observées (état courant PR séparé)"
          : "Réconciliation: effet partiel — AMBIGUOUS si reprise exclusive possible",
    };
  }

  if (row.kind === "GIT_MERGE") {
    const plan = JSON.parse(row.planJson) as MergePlan;
    if (row.status === "DISPATCHED" && claimActive) {
      return {
        attemptId,
        status: row.status,
        facts,
        note: "READ-ONLY: claim merge actif",
      };
    }
    const provider = resolveGitHubProvider();
    try {
      const pr = await provider.getPullRequest(pilotId, plan.repositoryFullName, plan.prNumber);
      if (pr.state === "merged" && (row.status === "AMBIGUOUS" || row.status === "DISPATCHED")) {
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus: "COMPLETED",
          resultJson: JSON.stringify({
            merged: true,
            sha: pr.headSha,
            reconciled: true,
            claim: released,
          }),
        });
        if (cas) {
          await db
            .update(documentPublicationRefs)
            .set({ status: "MERGED", headSha: pr.headSha, updatedAt: new Date() })
            .where(eq(documentPublicationRefs.id, plan.publicationRefId));
        }
        return {
          attemptId,
          status: cas ? "COMPLETED" : row.status,
          prState: pr.state,
          facts,
        };
      }
      return {
        attemptId,
        status: row.status,
        prState: pr.state,
        prCurrentState: mapPrState(pr.state),
        facts,
      };
    } catch {
      return {
        attemptId,
        status: row.status,
        prState: null,
        prCurrentState: "UNKNOWN" as const,
        facts,
        note: "PR illisible — statut conservé",
      };
    }
  }

  return { attemptId, status: row.status, facts };
}

async function recordFact(input: {
  attemptId: string;
  pilotId: string;
  projectId: string;
  factKind: string;
  repositoryFullName: string;
  refName: string;
  sha: string;
  prNumber: number | null;
  detail: Record<string, unknown>;
}) {
  await db.insert(observedGitFacts).values({
    id: newId("ogf"),
    attemptId: input.attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    factKind: input.factKind,
    repositoryFullName: input.repositoryFullName,
    refName: input.refName,
    sha: input.sha,
    prNumber: input.prNumber,
    observedAt: new Date(),
    detailJson: JSON.stringify(input.detail),
    createdAt: new Date(),
  });
}
