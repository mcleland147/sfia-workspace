# SFIA Studio Next — Review Pack FULL
# ML4 PR RESUME VERIFICATION CLOSURE (B4/C2)
# Cycle 8 / CRITICAL / CORRECTIVE / SEF v0.2
# Mode: publish-in-cycle L3 — mono-cycle reset

## 1. Date/heure et GO Morris
2026-11-08 ~18:00 CET Europe/Paris.
GO Morris : « OK GO ».
Source Critical Review : `sfia/review-handoff@c67ec07ff4d292c09f57015529515ba1deaf4c69`
Verdict entrée : NOT READY FOR PRODUCT GIT INTEGRATION.

## 2. Type, profil, contexte et sources
Profil CRITICAL. Typologie INC/CORRECTIVE.
Macro-lot R5/ML4. Correctif unique : reprise dispatchPublication après historique PR.
Sources : SEF/routing Next §4.3.0b ; handoff c67ec07f ; code local dirty.

## 3. Git Truth Check initial/final
### Initial
- Worktree : `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration`
- Branch : `feat/next-git-collaboration-20261108`
- HEAD = origin/main = `c658f59023d44a0e22448c7ee034e3c1dda292a2`
- Handoff tip : `c67ec07f…`
- Product LOCAL DIRTY (~64) préservé ; staged vide

### Final
- HEAD Product inchangé
- Aucun commit/push Product
- Handoff L3 remplacé (SHA after push)
- Dirty Product conservé

## 4. Diagnostic exact du défaut
Dans `dispatchPublication()` :
```ts
const prAlreadyCreated = Boolean(progress.prCreated || progress.prOpened);
if (plan.steps.includes("OPEN_PR") && !prAlreadyCreated) { ... }
```
Si `lost_ack_after_pr` laisse `prCreated=true` puis `prNumber` est perdu et le provider redevient lisible, la reprise sautait OPEN_PR et pouvait COMPLETED sans identité distante de PR → publicationRef incohérente (prNumber null / preuve inventée).

## 5. Correctif de dispatchPublication
- Remplacer le skip par une branche **resume** si `prHistoricallyCreated` :
  1. claim + fencing + D6 (`beforeProviderMutation`)
  2. `getPullRequest` si prNumber connu, sinon `findPullRequest` (marker/head/base/expectedHeadSha)
  3. `assertPrMatchesPlan` (head/base/sha)
  4. persister prNumber + prCurrentState
  5. **jamais** `createPullRequest` sur historique
- Première publication (`!prHistoricallyCreated`) : find puis create at most once (inchangé)
- Gate terminal : `prRemoteVerified` + prNumber + état OPEN|CLOSED|MERGED
- `documentPublicationRefs` : upsert idempotent par `effectAttemptId` (pas de doublon)

## 6. Invariants PR et D8
- `prCreated` = fait historique ≠ preuve distante
- COMPLETED publication ≠ merge eligibility
- CLOSED : COMPLETED création possible ; merge refusé
- UNKNOWN/illisible : AMBIGUOUS ; pas de 2e PR
- 0 match historique : AMBIGUOUS ; pas de createPR
- multi-match : AMBIGUOUS

## 7. Blast radius
effect-service dispatchPublication + tests PG + docs R5 AS-IMPLEMENTED.
B2 fencing / C1 / C3 / Q1 / UX / REAL / migrations : non ouverts.

## 8–10. Fichiers touchés + contenu

- `projects/sfia-studio-next/web/src/domains/execution/effect-service.ts` sha256=`4557f02b40c124dbed91814d50cfd4d61b5d705fe90eb4dd84b1b2ebe199559b`
- `projects/sfia-studio-next/web/src/domains/execution/claim-lease.ts` sha256=`ec520b830173d079bb90be40dbc9b46d0a3da95b306440a15239382294c486f9`
- `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts` sha256=`50e6c78b7fcec896615d08cc79b379f0a31d717cd7e6ca1df39b4798fdc0d6d6`
- `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md` sha256=`bace6b2ad85648aa09d7a19d52fa61c4650ba2e0bed3a7265460e0e78ff0e408` (LOCAL DIRTY vs origin/main)
- `projects/sfia-studio-next/construction/integration-git/specification-technique.md` sha256=`bf55525fa34441409ff53fc74f707ac7224b6b206a00a8dd3cbea73d4a58e178` (LOCAL DIRTY vs origin/main)
- `projects/sfia-studio-next/construction/delivery-history.md` sha256=`28a5f783f164d77b2d930ff0dca36c6b58ab7d3f28a7a1db0cc035e593e37fe0` (LOCAL DIRTY vs origin/main)

## Git Review Index
| Chemin | Statut | Comparaison | Empreinte | Preuve |
|---|---|---|---|---|
| `projects/sfia-studio-next/web/src/domains/execution/effect-service.ts` | LOCAL dirty/untracked | worktree | `4557f02b40c124dbed91814d50cfd4d61b5d705fe90eb4dd84b1b2ebe199559b` | §12 full |
| `projects/sfia-studio-next/web/src/domains/execution/claim-lease.ts` | LOCAL dirty/untracked | worktree | `ec520b830173d079bb90be40dbc9b46d0a3da95b306440a15239382294c486f9` | §12 full |
| `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts` | LOCAL dirty/untracked | worktree | `50e6c78b7fcec896615d08cc79b379f0a31d717cd7e6ca1df39b4798fdc0d6d6` | §12 full |
| `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md` | M LOCAL DIRTY | `git diff origin/main` | `bace6b2ad85648aa09d7a19d52fa61c4650ba2e0bed3a7265460e0e78ff0e408` | §14 diff |
| `projects/sfia-studio-next/construction/integration-git/specification-technique.md` | M LOCAL DIRTY | `git diff origin/main` | `bf55525fa34441409ff53fc74f707ac7224b6b206a00a8dd3cbea73d4a58e178` | §14 diff |
| `projects/sfia-studio-next/construction/delivery-history.md` | M LOCAL DIRTY | `git diff origin/main` | `28a5f783f164d77b2d930ff0dca36c6b58ab7d3f28a7a1db0cc035e593e37fe0` | §14 diff |

## 12. Contenu complet des fichiers code critiques


### FILE `projects/sfia-studio-next/web/src/domains/execution/effect-service.ts`
sha256=`4557f02b40c124dbed91814d50cfd4d61b5d705fe90eb4dd84b1b2ebe199559b`

```ts
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  documentRevisions,
  documents,
  effectAttempts,
  integrationAuthorizations,
  observedGitFacts,
  preparationProjectLinks,
  projectGitLinks,
  projects,
} from "@/db/schema";
import { insertHumanDecision } from "@/domains/decisions/service";
import { classifyPublicationPath } from "@/domains/integrations/path-policy";
import {
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
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError("CONFLICT", "Progression refusée — claimToken non propriétaire en base");
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
  steps?: PublicationStep[];
}) {
  await assertProject(input.pilotId, input.projectId);
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

  const publicationBranch = `sfia/pub-${input.correlationKey.slice(0, 12)}`;
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
    steps: input.steps ?? ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
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
    if (row.status === "AUTHORIZED" || row.status === "DISPATCHED" || row.status === "COMPLETED") {
      return { attemptId: row.id, status: row.status, decisionId: row.decisionId, idempotent: true };
    }
    if (row.status !== "PREPARED") {
      throw new StudioError("CONFLICT", `Statut incompatible: ${row.status}`);
    }

    const plan = JSON.parse(row.planJson) as PublicationPlan;
    if (!inspectionAllowsAuthorization(plan.inspection.kind)) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Inspection non autorisable: ${plan.inspection.kind} — lecture distante requalifiée requise`,
        { exposeMessage: true },
      );
    }
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

    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "GIT_EFFECT",
      sourceRef: input.attemptId,
      kind: "GIT_PUBLICATION_MANDATE",
      objectRef: input.attemptId,
      statement: input.statement,
      scope: "PROJECT",
    });

    const conditions = JSON.stringify({
      fingerprint: row.fingerprint,
      inspectionFingerprint: plan.inspection.inspectionFingerprint,
      envelope: {
        documentId: plan.documentId,
        revisionId: plan.revisionId,
        repositoryId: plan.repositoryId,
        targetPath: plan.targetPath,
        steps: plan.steps,
      },
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
        assertPrMatchesPlan(pr, plan, commitSha);
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
          detail: { baseSha: pr.baseSha, htmlUrl: pr.htmlUrl, currentState: pr.state, ...detail },
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

    const now = new Date();
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

    const existingRef = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, row.id))
        .limit(1)
    )[0];

    let pubId: string;
    if (existingRef) {
      if (
        existingRef.projectId !== input.projectId ||
        existingRef.pilotId !== input.pilotId ||
        existingRef.documentId !== plan.documentId ||
        existingRef.repositoryId !== plan.repositoryId
      ) {
        throw new StudioError(
          "CONFLICT",
          "publicationRef existante incompatible avec la tentative",
        );
      }
      pubId = existingRef.id;
      await db
        .update(documentPublicationRefs)
        .set({
          revisionId: plan.revisionId,
          targetPath: plan.targetPath,
          targetBranch: plan.targetBranch,
          baseSha: plan.baseSha,
          headSha: commitSha,
          prNumber,
          status: pubStatus,
          detailJson: JSON.stringify({
            ...JSON.parse(existingRef.detailJson || "{}"),
            publicationBranch: plan.publicationBranch,
            prCurrentState: progress.prCurrentState ?? null,
            prCreatedHistorically: Boolean(progress.prCreated || progress.prOpened),
            resumedVerified: true,
          }),
          updatedAt: now,
        })
        .where(eq(documentPublicationRefs.id, existingRef.id));
    } else {
      pubId = newId("dpr");
      await db.insert(documentPublicationRefs).values({
        id: pubId,
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
        effectAttemptId: row.id,
        detailJson: JSON.stringify({
          publicationBranch: plan.publicationBranch,
          prCurrentState: progress.prCurrentState ?? null,
          prCreatedHistorically: Boolean(progress.prCreated || progress.prOpened),
        }),
        createdAt: now,
        updatedAt: now,
      });
    }

    const released = releaseClaim(readClaim(resultJson));
    const completed = await casOwnedTransition({
      attemptId: row.id,
      claimToken,
      fromStatus: "DISPATCHED",
      toStatus: "COMPLETED",
      resultJson: JSON.stringify({
        commitSha,
        prNumber,
        pubId,
        progress,
        claim: released,
      }),
    });
    if (!completed) {
      throw new StudioError(
        "CONFLICT",
        "Complétion refusée — claimToken non propriétaire (fencing SQL)",
      );
    }

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
    if (code === "TIMEOUT" || code === "AMBIGUOUS") {
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
    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "GIT_EFFECT",
      sourceRef: input.attemptId,
      kind: "GIT_MERGE_MANDATE",
      objectRef: plan.publicationAttemptId,
      statement: input.statement,
    });
    await tx
      .update(effectAttempts)
      .set({
        status: "AUTHORIZED",
        decisionId,
        effectConditions: JSON.stringify({
          fingerprint: row.fingerprint,
          publicationAttemptId: plan.publicationAttemptId,
          prNumber: plan.prNumber,
        }),
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
    if (code === "TIMEOUT" || code === "AMBIGUOUS") {
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

  const provider = resolveGitHubProvider();
  const claim = readClaim(row.resultJson);
  const claimActive = isClaimActive(claim);

  if (row.kind === "GIT_PUBLICATION") {
    const plan = JSON.parse(row.planJson) as PublicationPlan;
    const progress = readProgress(row.resultJson);
    const observed: PublicationProgress = { ...progress };

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
        observed.commitSha = file.sha;
      }
    } catch {
      // File not yet published.
    }

    let remoteReadable = true;
    try {
      if (progress.prNumber != null) {
        const pr = await provider.getPullRequest(
          pilotId,
          plan.repositoryFullName,
          progress.prNumber,
        );
        // C2 — historical creation vs current state.
        observed.prCreated = true;
        observed.prOpened = true; // legacy: created historically
        observed.prNumber = pr.number;
        observed.prCurrentState = mapPrState(pr.state);
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
        } else {
          // Historical local flag without a remote match ⇒ UNKNOWN, never invent ABSENT.
          observed.prCurrentState =
            progress.prCreated || progress.prOpened || progress.prNumber != null
              ? "UNKNOWN"
              : "ABSENT";
        }
      }
    } catch (e) {
      const code =
        e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "";
      if (code === "TIMEOUT" || code === "FORBIDDEN" || code === "AMBIGUOUS") {
        remoteReadable = false;
        observed.prCurrentState = "UNKNOWN";
      } else if (code === "NOT_FOUND") {
        observed.prCurrentState =
          progress.prCreated || progress.prOpened || progress.prNumber != null
            ? "UNKNOWN"
            : "ABSENT";
      }
    }

    // Historical local progress ≠ remote proof. COMPLETED from reconcile requires a
    // re-read PR state (OPEN|CLOSED|MERGED) or no OPEN_PR step — never UNKNOWN alone.
    const prRemoteProven =
      !plan.steps.includes("OPEN_PR") ||
      (remoteReadable &&
        observed.prNumber != null &&
        (observed.prCurrentState === "OPEN" ||
          observed.prCurrentState === "CLOSED" ||
          observed.prCurrentState === "MERGED"));

    const stepsDone =
      (!plan.steps.includes("CREATE_BRANCH") || observed.branchCreated) &&
      (!plan.steps.includes("PUBLISH_FILE") || observed.filePublished) &&
      prRemoteProven;

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

      if (stepsDone) {
        const existingRef = (
          await db
            .select()
            .from(documentPublicationRefs)
            .where(eq(documentPublicationRefs.effectAttemptId, row.id))
            .limit(1)
        )[0];
        if (!existingRef && observed.commitSha) {
          const pubId = newId("dpr");
          const now = new Date();
          const pubStatus =
            observed.prCurrentState === "CLOSED"
              ? "PR_CLOSED"
              : observed.prCurrentState === "MERGED"
                ? "MERGED"
                : observed.prCurrentState === "OPEN"
                  ? "PR_OPEN"
                  : "COMMITTED";
          await db.insert(documentPublicationRefs).values({
            id: pubId,
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
            effectAttemptId: row.id,
            detailJson: JSON.stringify({
              publicationBranch: plan.publicationBranch,
              reconciled: true,
              prCurrentState: observed.prCurrentState ?? null,
              prCreatedHistorically: Boolean(observed.prCreated || observed.prOpened),
            }),
            createdAt: now,
            updatedAt: now,
          });
        }
        const released = releaseClaim(claim);
        const cas = await casLiberateInactiveDispatch({
          attemptId: row.id,
          fromStatus: row.status,
          toStatus: "COMPLETED",
          resultJson: JSON.stringify({
            commitSha: observed.commitSha,
            prNumber: observed.prNumber,
            progress: observed,
            reconciled: true,
            claim: released,
          }),
        });
        nextStatus = cas ? "COMPLETED" : row.status;
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

```


### FILE `projects/sfia-studio-next/web/src/domains/execution/claim-lease.ts`
sha256=`ec520b830173d079bb90be40dbc9b46d0a3da95b306440a15239382294c486f9`

```ts
import { newId } from "@/lib/ids";

/** Lease duration for exclusive DISPATCHED ownership (local fencing, not exactly-once remote). */
export const CLAIM_LEASE_MS = 60_000;

export type EffectClaim = {
  claimToken: string;
  claimedAt: string;
  leaseExpiresAt: string;
  generation: number;
  /** Set when the owning execution releases the claim (completion / controlled abandon). */
  releasedAt?: string | null;
};

export function readClaim(resultJson: string | null | undefined): EffectClaim | null {
  try {
    const j = JSON.parse(resultJson || "{}") as { claim?: EffectClaim };
    const c = j.claim;
    if (!c || typeof c.claimToken !== "string" || typeof c.leaseExpiresAt !== "string") return null;
    return {
      claimToken: c.claimToken,
      claimedAt: c.claimedAt,
      leaseExpiresAt: c.leaseExpiresAt,
      generation: typeof c.generation === "number" ? c.generation : 0,
      releasedAt: c.releasedAt ?? null,
    };
  } catch {
    return null;
  }
}

export function isClaimActive(claim: EffectClaim | null, nowMs = Date.now()): boolean {
  if (!claim) return false;
  if (claim.releasedAt) return false;
  const exp = Date.parse(claim.leaseExpiresAt);
  if (Number.isNaN(exp)) return false;
  return exp > nowMs;
}

export function mintClaim(prev: EffectClaim | null, now = new Date()): EffectClaim {
  return {
    claimToken: newId("claim"),
    claimedAt: now.toISOString(),
    leaseExpiresAt: new Date(now.getTime() + CLAIM_LEASE_MS).toISOString(),
    generation: (prev?.generation ?? 0) + 1,
    releasedAt: null,
  };
}

export function releaseClaim(claim: EffectClaim | null, now = new Date()): EffectClaim | null {
  if (!claim) return null;
  return { ...claim, releasedAt: now.toISOString() };
}

/** Controlled lease renewal for a still-owning execution (memory helper; persist via SQL fence). */
export function extendClaim(claim: EffectClaim, now = new Date()): EffectClaim {
  return {
    ...claim,
    leaseExpiresAt: new Date(now.getTime() + CLAIM_LEASE_MS).toISOString(),
    releasedAt: null,
  };
}

export function writeClaimInto(
  existingResultJson: string,
  claim: EffectClaim | null,
): string {
  let base: Record<string, unknown> = {};
  try {
    base = JSON.parse(existingResultJson || "{}") as Record<string, unknown>;
  } catch {
    base = {};
  }
  if (!claim) {
    const { claim: _drop, ...rest } = base;
    void _drop;
    return JSON.stringify(rest);
  }
  return JSON.stringify({ ...base, claim });
}

/**
 * Test-only deterministic barrier between effect steps.
 * Production keeps this disabled — no external coupling.
 */
type Deferred = { promise: Promise<void>; resolve: () => void };

class ExecutionBarrierRegistryImpl {
  enabled = false;
  private gates = new Map<string, Deferred>();

  arm(step: string) {
    let resolve!: () => void;
    const promise = new Promise<void>((r) => {
      resolve = r;
    });
    this.gates.set(step, { promise, resolve });
    this.enabled = true;
  }

  async before(step: string) {
    if (!this.enabled) return;
    const g = this.gates.get(step);
    if (g) await g.promise;
  }

  release(step: string) {
    const g = this.gates.get(step);
    if (g) {
      g.resolve();
      this.gates.delete(step);
    }
    if (this.gates.size === 0) this.enabled = false;
  }

  clear() {
    for (const g of this.gates.values()) g.resolve();
    this.gates.clear();
    this.enabled = false;
  }
}

export const ExecutionBarrierRegistry = new ExecutionBarrierRegistryImpl();

```


### FILE `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts`
sha256=`50e6c78b7fcec896615d08cc79b379f0a31d717cd7e6ca1df39b4798fdc0d6d6`

```ts
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  documentRevisions,
  documents,
  effectAttempts,
  integrationAuthorizations,
  observedGitFacts,
  pilots,
  preparations,
} from "@/db/schema";
import {
  completeGitHubAuthorization,
  disconnectIntegration,
  getIntegrationStatus,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import { readGitFile } from "@/domains/integrations/resource-service";
import {
  getScriptedMutationCounts,
  resetScriptedMutationCounts,
  resetScriptedStore,
  ScriptedFaultRegistry,
  scriptedAdvancePrBase,
  scriptedAdvancePrHead,
  scriptedClosePr,
} from "@/domains/integrations/scripted-github-provider";
import { classifyPublicationPath } from "@/domains/integrations/path-policy";
import {
  authorizeMerge,
  authorizePublication,
  dispatchMerge,
  dispatchPublication,
  prepareMerge,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { ExecutionBarrierRegistry, readClaim } from "@/domains/execution/claim-lease";
import { insertRestriction, markDecisionState } from "@/domains/decisions/service";
import { qualifyObservedFacts } from "@/domains/proofs/qualify";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { savePreparationDocument } from "@/domains/document/service";
import { newId } from "@/lib/ids";
import { schemaRevision } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import type { PublicationPlan } from "@/domains/execution/types";

async function seedProject(label: string) {
  resetScriptedStore();
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

async function connectAndAttach(pilotId: string, projectId: string) {
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations");
  const status = await completeGitHubAuthorization({ pilotId, state });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, projectId, repoId);
  return { status, repoId };
}

async function availableDoc(pilotId: string, preparationId: string, title = "Pub doc") {
  const saved = await savePreparationDocument(pilotId, preparationId, title, "# Published\n", undefined, {
    correlationKey: newId("ck"),
  });
  expect(saved.status).toBe("AVAILABLE");
  if (!("documentId" in saved) || !saved.documentId) {
    throw new Error("documentId missing after save");
  }
  const documentId = saved.documentId;
  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(and(eq(documentRevisions.documentId, documentId), eq(documentRevisions.status, "AVAILABLE")))
      .limit(1)
  )[0];
  if (!rev) throw new Error("AVAILABLE revision missing");
  return { documentId, revisionId: rev.id };
}

async function authzPub(
  pilotId: string,
  projectId: string,
  prepared: { attemptId: string; plan?: PublicationPlan },
) {
  const plan =
    prepared.plan ??
    (JSON.parse(
      (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!.planJson,
    ) as PublicationPlan);
  return authorizePublication({
    pilotId,
    projectId,
    attemptId: prepared.attemptId,
    statement: "Je mandate la publication documentaire",
    inspectedFingerprint: plan.inspection.inspectionFingerprint,
  });
}

describe("PostgreSQL ML4 git collaboration corrective B1–B8 (SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("schema revision 008", () => {
    expect(schemaRevision).toBe("008_git_collaboration");
  });

  it("AT-01: project works without Git connection", async () => {
    const { pilotId, projectId } = await seedProject("no-git");
    const status = await getIntegrationStatus(pilotId);
    expect(status.status).toBe("DISCONNECTED");
    expect(status.repositories).toHaveLength(0);
    expect(projectId).toBeTruthy();
  });

  it("AT-02/03/04/08/09/11/12 + B6 inspection: connect, hostile read, publish PR without merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-at");
    const { repoId } = await connectAndAttach(pilotId, projectId);

    const hostile = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "main",
    });
    expect(hostile.content).toMatch(/secrets/i);
    expect(hostile.authorityReminder).toMatch(/data/i);

    const { documentId, revisionId } = await availableDoc(pilotId, preparationId);
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/publish.md",
      targetBranch: "main",
      correlationKey: newId("corr"),
    });
    expect(prepared.status).toBe("PREPARED");
    expect(prepared.plan?.inspection.unifiedDiff).toContain("+# Published");
    expect(prepared.plan?.inspection.inspectionFingerprint).toHaveLength(64);

    const authz = await authzPub(pilotId, projectId, prepared);
    expect(authz.status).toBe("AUTHORIZED");

    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.status).toBe("COMPLETED");
    expect(dispatched.prNumber).toBeGreaterThan(0);

    const mergeAttempt = (
      await db
        .select()
        .from(effectAttempts)
        .where(and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.kind, "GIT_MERGE")))
        .limit(1)
    )[0];
    expect(mergeAttempt).toBeUndefined();

    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(eq(observedGitFacts.attemptId, prepared.attemptId));
    const q = qualifyObservedFacts(
      facts.map((f) => ({ factKind: f.factKind, sha: f.sha, prNumber: f.prNumber })),
    );
    expect(q.prOpen).toBe(true);
    expect(q.mergeObserved).toBe(false);
    expect(q.testsPass).toBe(false);
    expect(q.adopted).toBe(false);
  });

  it("B1: revoked decision / restriction blocks dispatch", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b1");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B1");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b1.md",
      targetBranch: "main",
      correlationKey: newId("b1"),
    });
    const authz = await authzPub(pilotId, projectId, prepared);
    await db.transaction(async (tx) => {
      await markDecisionState(tx, authz.decisionId!, "REVOKED");
    });
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });

    const prepared2 = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b1b.md",
      targetBranch: "main",
      correlationKey: newId("b1b"),
    });
    const authz2 = await authzPub(pilotId, projectId, prepared2);
    await db.transaction(async (tx) => {
      await insertRestriction(tx, {
        projectId,
        targetKind: "PILOTAGE_EFFECT",
        targetRef: "*",
        originDecisionId: authz2.decisionId!,
      });
    });
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared2.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("B2: concurrent dispatch claims once — exact SCRIPTED mutation counts", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2.md",
      targetBranch: "main",
      correlationKey: newId("b2"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);

    const results = await Promise.allSettled([
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ]);
    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    const statuses = results.map((r) =>
      r.status === "fulfilled"
        ? (r.value as { status: string }).status
        : (r.reason as StudioError)?.code,
    );
    expect(statuses).toContain("COMPLETED");
    expect(fulfilled.length + rejected.length).toBe(2);
    // Two COMPLETED results do NOT prove uniqueness — mutation counts do.
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(1);
    expect(counts.createPR).toBe(1);
  });

  it("B2: DISPATCHED refuses plain HTTP without reclaim", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2d");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2d");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2d.md",
      targetBranch: "main",
      correlationKey: newId("b2d"),
    });
    await authzPub(pilotId, projectId, prepared);
    await db
      .update(effectAttempts)
      .set({ status: "DISPATCHED", updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));
    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
  });

  it("B2: correlationKey payload mismatch conflicts", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2m");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2m");
    const key = newId("ck");
    await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/a.md",
      targetBranch: "main",
      correlationKey: key,
    });
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/other.md",
        targetBranch: "main",
        correlationKey: key,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("B3/AT-13: merge bound to publication attempt; arbitrary PR refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-merge");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Merge doc");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/merge.md",
      targetBranch: "main",
      correlationKey: newId("corr"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.prNumber).toBeTruthy();

    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toBeInstanceOf(StudioError);

    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("merge"),
    });
    expect(mergePrep.status).toBe("PREPARED");
    expect(mergePrep.plan?.publicationAttemptId).toBe(prepared.attemptId);

    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const mergeAuth = await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "Mandat merge distinct",
    });
    expect(mergeAuth.decisionId).toBeTruthy();
    const merged = await dispatchMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
    });
    expect(merged.status).toBe("COMPLETED");
  });

  it("B4/AT-15: lost ACK after commit reconciles without duplicate PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4.md",
      targetBranch: "main",
      correlationKey: newId("b4"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_commit");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("AMBIGUOUS");
    const progress = JSON.parse(row.resultJson).progress;
    expect(progress.filePublished).toBe(true);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.progress?.filePublished).toBe(true);

    // Resume: should open PR without recreating file blindly
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBeGreaterThan(0);
  });

  it("B4 blocking: lost_ack_after_pr → reconcile → resume → EXACTLY ONE PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4pr");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4PR");
    const corr = newId("b4pr");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4pr.md",
      targetBranch: "main",
      correlationKey: corr,
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(afterLost.status).toBe("AMBIGUOUS");
    expect(JSON.parse(afterLost.resultJson).progress?.prNumber).toBeGreaterThan(0);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    // Either COMPLETED via reconcile or still AMBIGUOUS with PR attached.
    expect(
      reconciled.status === "COMPLETED" || reconciled.progress?.prOpened === true,
    ).toBe(true);

    if (reconciled.status !== "COMPLETED") {
      const resumed = await dispatchPublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
      });
      expect(resumed.status).toBe("COMPLETED");
    }
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
  });

  it("B4: remote unread after lost ACK does not createPR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4ru");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4RU");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4ru.md",
      targetBranch: "main",
      correlationKey: newId("b4ru"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    resetScriptedMutationCounts(pilotId);

    // Keep prCreated=true historically; wipe prNumber to force findPullRequest; remote unreadable.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    const progress = parsed.progress ?? {};
    await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({
          ...parsed,
          progress: {
            ...progress,
            prCreated: true,
            prOpened: false,
            prNumber: null,
            prCurrentState: undefined,
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState ?? "UNKNOWN").toBe("UNKNOWN");
    expect(reconciled.status).not.toBe("COMPLETED");
    ScriptedFaultRegistry.clear();

    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("AT-14: stale HEAD requires requalification", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-stale");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Stale");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/stale.md",
      targetBranch: "main",
      correlationKey: newId("stale"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("stale_head");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
    ScriptedFaultRegistry.clear();
  });

  it("AT-16: shared repo does not share mandates across pilots", async () => {
    const a = await seedProject("pilot-a");
    const b = await seedProject("pilot-b");
    const { repoId: repoA } = await connectAndAttach(a.pilotId, a.projectId);
    const { repoId: repoB } = await connectAndAttach(b.pilotId, b.projectId);
    expect(repoA).not.toBe(repoB);
    await expect(
      attachRepositoryToProject(b.pilotId, b.projectId, repoA),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });

    const { documentId, revisionId } = await availableDoc(a.pilotId, a.preparationId, "Iso");
    const prepared = await preparePublication({
      pilotId: a.pilotId,
      projectId: a.projectId,
      documentId,
      revisionId,
      repositoryId: repoA,
      targetPath: "docs/iso.md",
      targetBranch: "main",
      correlationKey: newId("iso"),
    });
    await authzPub(a.pilotId, a.projectId, prepared);
    await expect(
      dispatchPublication({
        pilotId: b.pilotId,
        projectId: b.projectId,
        attemptId: prepared.attemptId,
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("AT-17/B5: technical and traversal paths refused", async () => {
    const denied = [
      "docs/../src/secret.md",
      "docs/%2e%2e/src/secret.md",
      "docs/secret-notes.md",
      "docs/.env.local.md",
      "docs/x/../../.github/workflows/x.md",
      "docs/Dockerfile.md",
      ".github/workflows/ci.md",
      "src/README.md",
      "README.md",
    ];
    for (const p of denied) {
      expect(classifyPublicationPath(p).allowed, p).toBe(false);
    }
    expect(classifyPublicationPath("docs/architecture.md").allowed).toBe(true);

    const { pilotId, projectId, preparationId } = await seedProject("git-path");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Tech");
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/../src/secret.md",
        targetBranch: "main",
        correlationKey: newId("tech"),
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("B6: authorize without matching inspection fingerprint refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b6.md",
      targetBranch: "main",
      correlationKey: newId("b6"),
    });
    await expect(
      authorizePublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
        statement: "x",
        inspectedFingerprint: "0".repeat(64),
      }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B7: document from other project refused", async () => {
    const a = await seedProject("own-a");
    const b = await seedProject("own-b");
    const { repoId } = await connectAndAttach(a.pilotId, a.projectId);
    const { documentId, revisionId } = await availableDoc(b.pilotId, b.preparationId, "Other");
    await expect(
      preparePublication({
        pilotId: a.pilotId,
        projectId: a.projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/x.md",
        targetBranch: "main",
        correlationKey: newId("x"),
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("AT-22: revoke preserves D4 document", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-rev");
    await connectAndAttach(pilotId, projectId);
    const { documentId } = await availableDoc(pilotId, preparationId, "Keep");
    await disconnectIntegration(pilotId);
    const status = await getIntegrationStatus(pilotId);
    expect(status.status).toBe("REVOKED");
    const doc = (
      await db.select().from(documents).where(eq(documents.id, documentId)).limit(1)
    )[0];
    expect(doc).toBeTruthy();
    expect(projectId).toBeTruthy();
  });

  it("idempotent prepare on same fingerprint", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-idem");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D");
    const key = newId("ck");
    const a = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d.md",
      targetBranch: "main",
      correlationKey: key,
    });
    const b = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d.md",
      targetBranch: "main",
      correlationKey: key,
    });
    expect(a.attemptId).toBe(b.attemptId);
    expect(b.idempotent).toBe(true);
  });

  it("B1 blocking: contents=read refuses documentary write — zero provider mutations", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b1ro");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    await db
      .update(authorizedRepositories)
      .set({
        permissionsJson: JSON.stringify({ contents: "read", pull_requests: "write" }),
      })
      .where(eq(authorizedRepositories.id, repoId));
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "RO");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/ro.md",
      targetBranch: "main",
      correlationKey: newId("ro"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B3: advanced PR base refuses merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b3base");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B3base");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b3base.md",
      targetBranch: "main",
      correlationKey: newId("b3base"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("m3base"),
    });
    await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "merge",
    });
    scriptedAdvancePrBase(pilotId, dispatched.prNumber!, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef");
    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B3: advanced PR head / closed PR refuse merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b3head");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B3head");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b3head.md",
      targetBranch: "main",
      correlationKey: newId("b3head"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("m3head"),
    });
    await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "merge",
    });
    scriptedAdvancePrHead(pilotId, dispatched.prNumber!, "cafebabecafebabecafebabecafebabe0cafe");
    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });

    // Closed PR path on a fresh merge prepare after re-open simulation is skipped —
    // close the PR and ensure prepareMerge refuses.
    scriptedClosePr(pilotId, dispatched.prNumber!);
    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("m3closed"),
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("B6: 403 remote read is FORBIDDEN, not CREATE — authorize refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6f");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6F");
    ScriptedFaultRegistry.setFault("403");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/existing-spec.md",
      targetBranch: "main",
      correlationKey: newId("b6f"),
    });
    ScriptedFaultRegistry.clear();
    // Path docs/spec.md exists at main; with 403 on content read → FORBIDDEN.
    // Using a new path: tip ok, file NOT_FOUND would be CREATE — force 403 on content.
    expect(prepared.plan?.inspection.kind).toBe("FORBIDDEN");
    await expect(
      authorizePublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
        statement: "should fail",
        inspectedFingerprint: prepared.plan!.inspection.inspectionFingerprint,
      }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B6: timeout remote read is TIMEOUT, not CREATE", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6t");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6T");
    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/to.md",
        targetBranch: "main",
        correlationKey: newId("b6t"),
      }),
    ).rejects.toMatchObject({ code: "TIMEOUT" });
    ScriptedFaultRegistry.clear();
  });

  it("B7: actorLogin change requires requalification", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b7");
    const { repoId, status } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B7");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b7.md",
      targetBranch: "main",
      correlationKey: newId("b7"),
    });
    await authzPub(pilotId, projectId, prepared);
    await db
      .update(integrationAuthorizations)
      .set({ accountLogin: "other-actor-now" })
      .where(eq(integrationAuthorizations.id, status.authorizationId));
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B2: reconcile during active dispatch is READ-ONLY — no second dispatch effects", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-barrier");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2bar");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2bar.md",
      targetBranch: "main",
      correlationKey: newId("b2bar"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchPromise = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });

    // Wait until DISPATCHED
    for (let i = 0; i < 50; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("DISPATCHED");
    expect(String(reconciled.note ?? "")).toMatch(/READ-ONLY|claim/i);

    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const done = await dispatchPromise;
    expect(done.status).toBe("COMPLETED");
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(1);
    expect(counts.createPR).toBe(1);
    ExecutionBarrierRegistry.clear();
  });

  it("C1: revoke D6 after CREATE_BRANCH blocks putFileContents", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c1-rev");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C1");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/c1.md",
      targetBranch: "main",
      correlationKey: newId("c1"),
    });
    const authz = await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:PUBLISH_FILE");

    const dispatchPromise = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      const progress = JSON.parse(row.resultJson).progress;
      if (progress?.branchCreated) break;
      await new Promise((r) => setTimeout(r, 20));
    }

    await db.transaction(async (tx) => {
      await markDecisionState(tx, authz.decisionId!, "REVOKED");
    });
    ExecutionBarrierRegistry.release("before:PUBLISH_FILE");
    const outcome = await dispatchPromise;
    expect(outcome).toMatchObject({ code: "ACCESS_DENIED" });
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(0);
    expect(counts.createPR).toBe(0);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(JSON.parse(row.resultJson).progress?.branchCreated).toBe(true);
    ExecutionBarrierRegistry.clear();
  });

  it("C2: historical PR creation vs CLOSED current state — no second PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c2-closed");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C2");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/c2.md",
      targetBranch: "main",
      correlationKey: newId("c2"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.status).toBe("COMPLETED");
    expect(dispatched.prNumber).toBeGreaterThan(0);
    scriptedClosePr(pilotId, dispatched.prNumber!);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("COMPLETED");
    expect(reconciled.prCurrentState).toBe("CLOSED");
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId))
        .limit(1)
    )[0]!;
    expect(ref.status).toBe("PR_CLOSED");
    const detail = JSON.parse(ref.detailJson);
    expect(detail.prCreatedHistorically).toBe(true);
    expect(detail.prCurrentState).toBe("CLOSED");

    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("c2m"),
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("C3: same pilot two repos — isolated contents and PR lookups", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c3");
    const { status } = await connectAndAttach(pilotId, projectId);
    const repoA = status.repositories.find((r) => r.fullName === "acme/docs-projet")!;
    const repoB = status.repositories.find((r) => r.fullName === "acme/shared-docs")!;
    await attachRepositoryToProject(pilotId, projectId, repoB.id);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C3");

    const prepA = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoA.id,
      targetPath: "docs/c3a.md",
      targetBranch: "main",
      correlationKey: newId("c3a"),
    });
    await authzPub(pilotId, projectId, prepA);
    const dispA = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepA.attemptId,
    });

    const prepB = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoB.id,
      targetPath: "docs/c3b.md",
      targetBranch: "main",
      correlationKey: newId("c3b"),
    });
    await authzPub(pilotId, projectId, prepB);
    const dispB = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepB.attemptId,
    });

    expect(dispA.prNumber).toBe(1);
    expect(dispB.prNumber).toBe(1);
    expect(getScriptedMutationCounts(pilotId, "acme/docs-projet").createPR).toBe(1);
    expect(getScriptedMutationCounts(pilotId, "acme/shared-docs").createPR).toBe(1);
  });

  it("B2 fencing: expired lease — old worker cannot overwrite new owner's claim/progress", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-fence");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2f");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2fence.md",
      targetBranch: "main",
      correlationKey: newId("b2fence"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    const claimA = readClaim(mid.resultJson);
    expect(claimA?.claimToken).toBeTruthy();

    // Expire lease in PostgreSQL while A is still suspended (in-flight simulation).
    const expiredJson = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expiredJson.claim = {
      ...expiredJson.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expiredJson), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("AMBIGUOUS");

    // Let B run without hitting A's suspended barrier promise.
    ExecutionBarrierRegistry.enabled = false;
    const doneB = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(doneB.status).toBe("COMPLETED");
    const afterB = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(afterB.status).toBe("COMPLETED");
    const claimB = readClaim(afterB.resultJson);
    expect(claimB?.claimToken).not.toBe(claimA!.claimToken);
    const countsAfterB = getScriptedMutationCounts(pilotId);
    expect(countsAfterB.createBranch).toBe(1);
    expect(countsAfterB.putFileContents).toBe(1);
    expect(countsAfterB.createPR).toBe(1);

    // Wake stale worker A — must not mutate or overwrite B.
    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });

    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    expect(readClaim(final.resultJson)?.claimToken).toBe(claimB?.claimToken);
    const countsFinal = getScriptedMutationCounts(pilotId);
    expect(countsFinal.createBranch).toBe(1);
    expect(countsFinal.putFileContents).toBe(1);
    expect(countsFinal.createPR).toBe(1);
    ExecutionBarrierRegistry.clear();
  });

  it("B2 fencing: stale claimToken CAS affects zero rows against new owner", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-cas0");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2cas");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2cas.md",
      targetBranch: "main",
      correlationKey: newId("b2cas"),
    });
    await authzPub(pilotId, projectId, prepared);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const tokenA = readClaim(mid.resultJson)!.claimToken;

    // Simulate B having replaced the claim while A is suspended.
    const hijacked = JSON.parse(mid.resultJson) as { claim: Record<string, unknown>; progress?: unknown };
    hijacked.claim = {
      claimToken: "claim_attacker_other_owner",
      claimedAt: new Date().toISOString(),
      leaseExpiresAt: new Date(Date.now() + 60_000).toISOString(),
      generation: 99,
      releasedAt: null,
    };
    hijacked.progress = { ...(hijacked.progress as object), poisonedBy: "B" };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(hijacked), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    // Direct SQL fencing probe: A's token must update 0 rows.
    const { sql } = await import("drizzle-orm");
    const cas = await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({ progress: { overwrittenByA: true }, claim: { claimToken: tokenA } }),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(effectAttempts.id, prepared.attemptId),
          eq(effectAttempts.status, "DISPATCHED"),
          sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${tokenA}`,
        ),
      )
      .returning({ id: effectAttempts.id });
    expect(cas).toHaveLength(0);

    const still = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(JSON.parse(still.resultJson).progress?.poisonedBy).toBe("B");
    expect(readClaim(still.resultJson)?.claimToken).toBe("claim_attacker_other_owner");

    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    ExecutionBarrierRegistry.clear();
  });

  it("B4/C2: historical prCreated + remote unread ⇒ UNKNOWN, never COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4unk");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4unk");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4unk.md",
      targetBranch: "main",
      correlationKey: newId("b4unk"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    expect(parsed.progress?.prCreated).toBe(true);

    // Branch/commit may be observable; PR path forced unread + prNumber wiped.
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          ...parsed,
          progress: {
            ...parsed.progress,
            prCreated: true,
            prOpened: true,
            prNumber: null,
            branchCreated: true,
            filePublished: true,
          },
          claim: {
            claimToken: "claim_released",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1000).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    ScriptedFaultRegistry.clear();
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState).toBe("UNKNOWN");
    expect(reconciled.status).not.toBe("COMPLETED");
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1); // only the lost-ack create
  });

  it("B2: two reconcilers cannot degrade COMPLETED to AMBIGUOUS", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-comp");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2c");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2comp.md",
      targetBranch: "main",
      correlationKey: newId("b2comp"),
    });
    await authzPub(pilotId, projectId, prepared);
    const done = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(done.status).toBe("COMPLETED");

    const [r1, r2] = await Promise.all([
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
    ]);
    expect(r1.status).toBe("COMPLETED");
    expect(r2.status).toBe("COMPLETED");
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("COMPLETED");
  });

  it("B4/C2 resume: lost_ack + wipe prNumber + unread → readable → COMPLETED with createPR===1", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-resume");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4res");
    const correlationKey = newId("b4res");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4resume.md",
      targetBranch: "main",
      correlationKey,
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);

    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(afterLost.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    expect(parsed.progress?.prCreated).toBe(true);

    // Simulate lost ACK persistence: keep historical flag, drop prNumber.
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...parsed.progress,
            prCreated: true,
            prOpened: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
            branchCreated: true,
            filePublished: true,
          },
          claim: {
            claimToken: "claim_released_resume",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1000).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    ScriptedFaultRegistry.clear();
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState).toBe("UNKNOWN");

    // Provider readable again — resume must re-identify historical PR, not create a second.
    resetScriptedMutationCounts(pilotId);
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBe(1);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);

    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    const finalProgress = JSON.parse(final.resultJson).progress;
    expect(finalProgress.prNumber).toBe(1);
    expect(finalProgress.prCurrentState).toBe("OPEN");

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(1);
    expect(refs[0]!.prNumber).toBe(1);
    expect(refs[0]!.status).toBe("PR_OPEN");
    expect(refs[0]!.documentId).toBe(documentId);
    expect(refs[0]!.repositoryId).toBe(repoId);

    // Idempotent re-dispatch of COMPLETED.
    const again = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(again.status).toBe("COMPLETED");
    expect(again.idempotent).toBe(true);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B4/C2 resume: still unreadable → AMBIGUOUS, no createPR, no COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-still");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4st");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4still.md",
      targetBranch: "main",
      correlationKey: newId("b4still"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as { progress?: Record<string, unknown> };
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...parsed.progress,
            prCreated: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    resetScriptedMutationCounts(pilotId);
    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).toBe("AMBIGUOUS");
    expect(after.status).not.toBe("COMPLETED");
  });

  it("B4/C2 resume: historical prCreated but zero remote matches → AMBIGUOUS, no createPR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-nomatch");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4nm");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4nomatch.md",
      targetBranch: "main",
      correlationKey: newId("b4nomatch"),
    });
    await authzPub(pilotId, projectId, prepared);
    // Seed progress as if PR existed historically, but never create one remotely.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            branchCreated: true,
            filePublished: true,
            commitSha: "sha_fake",
            prCreated: true,
            prOpened: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
            lastStep: "OPEN_PR",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));
    void row;

    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B4/C2 resume: PR CLOSED after historical create — COMPLETED with PR_CLOSED, no merge, no 2nd PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-closed");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4cl");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4closed.md",
      targetBranch: "main",
      correlationKey: newId("b4closed"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const progress = JSON.parse(afterLost.resultJson).progress as {
      prNumber?: number;
      commitSha?: string;
    };
    expect(progress.prNumber).toBeTruthy();
    scriptedClosePr(pilotId, progress.prNumber!);

    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...JSON.parse(afterLost.resultJson).progress,
            prNumber: null,
            prCreated: true,
            prCurrentState: "UNKNOWN",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    resetScriptedMutationCounts(pilotId);
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBe(progress.prNumber);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);

    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId))
        .limit(1)
    )[0]!;
    expect(ref.status).toBe("PR_CLOSED");
    expect(JSON.parse(ref.detailJson).prCurrentState).toBe("CLOSED");

    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("merge-closed"),
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });
});


```


## 14. Diffs documentaires B9


### DOC `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`
Statut: M LOCAL DIRTY vs origin/main@c658f590

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index e67c4d98..95904f2d 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -1,6 +1,7 @@
 # R5 ML4 — Matrice de couverture et de preuves candidate
 
-**Statut :** MAPPING UX VALIDATED SPEC / 22 TESTS NOT RUN / NO COVERAGE VERIFIED
+**Statut :** AS-IMPLEMENTED LOCAL (2026-11-08) / DETERMINISTIC COVERAGE PARTIELLE / REAL NOT PROVEN
+**Base construction :** `feat/next-git-collaboration-20261108` @ `origin/main@c658f590` — LOCAL DIRTY, NO COMMIT
 **Base Git :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5` ; qualification v0.2 `docs/next-ml4-git-qualification-20261107@3bb9224`.
 **Figma ML4 VALIDATED SPEC Morris :** 18 écrans 218–235, INDEX 388:425 et [traçabilité native](../../ux-ui/integration-git-ux-ml4.md) ; aucun snapshot PNG immuable sur Git ni comportement navigateur prouvé.
 
@@ -56,3 +57,217 @@ Pour chaque essai réel : **date, lane, identité du Pilote/acteur d'effet, dép
 ## 5. Traçabilité post-revue Figma — 2026-11-07
 
 Les repères A/B/G/H du présent tableau désignent les surfaces candidates historiquement prévues ; les références numériques ajoutées dans chaque ligne constituent **le raccord actuel approuvé**. [Registre de nœuds et parcours](../../ux-ui/integration-git-ux-ml4.md). Les 22 tests demeurent **NOT RUN**, aucune couverture réelle n'est revendiquée.
+
+## 6. Preuves DETERMINISTIC — cycle local 2026-11-08 (AS-IMPLEMENTED)
+
+Niveau plafonné : **IMPLEMENTED LOCAL + DETERMINISTIC COVERAGE VERIFIED** sur les scénarios exécutés.
+**DETERMINISTIC PROVEN ≠ READY FOR REAL.** Aucune preuve GitHub App / commit / PR / merge REAL.
+
+| ID | Résultat local | Preuve | Réserve |
+|---|---|---|---|
+| AT-01 | PASS DET | PG `git-collaboration` + e2e surface git sans source | — |
+| AT-02 | PASS DET (contrat) | OAuth Studio inchangé sans repo scopes ; Intégrations séparées | REAL OAuth+App non exercé |
+| AT-03 | PASS DET | authorize/complete SCRIPTED + UI Intégrations | Consentement GitHub REAL absent |
+| AT-04 | PASS DET | refresh/repos + attach UI | Ajout dépôt via GitHub UI REAL absent |
+| AT-05 | PARTIAL | Demande contextuelle Nora/UI non e2e complète | Fil conversation + authorize contextuel à approfondir |
+| AT-06 | PASS DET (service) | `setPendingApproval` status | Org REAL absent |
+| AT-07 | PASS DET | disconnect vs detach distinctions (service/UI) | — |
+| AT-08 | PASS DET | `readGitFile` ref obligatoire + SHA | Nora LIVE lecture absente |
+| AT-09 | PASS DET | README hostile lu ; aucun D7 auto | Nora LIVE adversarial absent |
+| AT-10 | PASS DET | `document_publication_refs` après dispatch | — |
+| AT-11 | PASS DET (SCRIPTED) | branche+commit+fichier via provider scripted | REAL Contents API absent |
+| AT-12 | PASS DET (SCRIPTED) | PR ouverte ; pas de merge auto | REAL PR absent |
+| AT-13 | PASS DET | merge = 2e HumanDecision `GIT_MERGE_MANDATE` | REAL protections branches absentes |
+| AT-14 | PASS DET | `stale_head` → REQUIRES_REQUALIFICATION | — |
+| AT-15 | PASS DET | timeout → AMBIGUOUS, pas de succès | — |
+| AT-16 | PASS DET | attach cross-pilot refusé | — |
+| AT-17 | PASS DET | path-policy refuse src/.github/README racine | — |
+| AT-18 | PASS DET | D8 qualify : testsPass/conformity/morris/adopted = false | — |
+| AT-19 | PASS DET | UI GitHub seul actionnable | — |
+| AT-20 | PARTIAL | Lien Git scripted HTML URL en faits ; pas d'inférence droits | REAL link non prouvé |
+| AT-21 | PARTIAL | Frames 232–235 + shell responsive ; e2e capture locale | Zoom/clavier/320 px non exhaustifs |
+| AT-22 | PASS DET | revoke conserve document D4 AVAILABLE | — |
+
+Commandes exécutées (web/) : `npm run test:unit` (131) ; `npm run test:integration` (154) ; `npx tsc --noEmit` ; `npm run build` ; `npx playwright test tests/e2e/git-collaboration.spec.ts` (voir rapport cycle).
+
+## 7. Requalification DETERMINISTIC — correctif B1–B9 (2026-11-08)
+
+Référence historique Review Pack : `877b502ad177588be3c9201ee9f670fb8f483183`.
+Plafond inchangé : **DETERMINISTIC ≠ READY FOR REAL**.
+
+| ID | État correctif | Correction | Test exact | Résultat | Niveau | Écart / sortie |
+|---|---|---|---|---|---|---|
+| AT-01 | PASS DET | — | PG AT-01 + e2e projet | PASS | DET | — |
+| AT-02 | PASS DET (contrat) | B7 | OAuth ≠ App (inchangé) | PASS | DET | REAL OAuth |
+| AT-03 | PASS DET | — | authorize SCRIPTED UI | PASS | DET | REAL consent |
+| AT-04 | PASS DET | — | attach UI/e2e | PASS | DET | REAL add repo |
+| AT-05 | PARTIAL | B8 | Pas d'e2e Nora contextuel complet | PARTIAL | DET | E2E fil Nora |
+| AT-06 | PASS DET (service) | — | pending approval | PASS | DET | Org REAL |
+| AT-07 | PASS DET | B1 | disconnect vs detach | PASS | DET | — |
+| AT-08 | PASS DET | — | readGitFile ref+SHA | PASS | DET | Nora LIVE |
+| AT-09 | PASS DET | B8 | hostile README + aucun D7 auto (PG) | PASS | DET | Nora LIVE adversarial |
+| AT-10 | PASS DET | B6/B7 | publication_refs + inspection | PASS | DET | — |
+| AT-11 | PASS DET (SCRIPTED) | B1/B2 | dispatch claim + branch/commit | PASS | DET | REAL Contents |
+| AT-12 | PASS DET (SCRIPTED) | B3 | PR sans merge | PASS | DET | REAL PR |
+| AT-13 | PASS DET | B1/B3 | merge via publicationAttemptId + 2e mandat | PASS | DET | REAL protections |
+| AT-14 | PASS DET | B1 | stale_head | PASS | DET | — |
+| AT-15 | PASS DET | B4 | lost_ack_after_commit + reconcile + resume | PASS | DET | REAL network |
+| AT-16 | PASS DET | B1/B7 | attach + dispatch cross-pilot | PASS | DET | — |
+| AT-17 | PASS DET | B5 | adversarial path unit+PG | PASS | DET | — |
+| AT-18 | PASS DET | — | D8 qualify | PASS | DET | — |
+| AT-19 | PASS DET | — | UI GitHub seul | PASS | DET | — |
+| AT-20 | PARTIAL | B8 | lien scripted ; REAL non prouvé | PARTIAL | DET | GO REAL |
+| AT-21 | PARTIAL | B6/B8 | e2e 320/390/1280 + focus diff ; zoom 200% non exhaustif | PARTIAL | DET | a11y exhaustif |
+| AT-22 | PASS DET | — | revoke conserve D4 | PASS | DET | — |
+
+### Clôture B1–B9
+
+| B | Statut | Preuve |
+|---|---|---|
+| B1 | RESOLVED | `assertCurrentGitAuthority` + tests révocation/restriction |
+| B2 | RESOLVED | claim atomique AUTHORIZED→DISPATCHED ; Promise.all ; payload mismatch |
+| B3 | RESOLVED | `prepareMerge({ publicationAttemptId })` ; PR arbitraire refusée |
+| B4 | RESOLVED | progress partiel + reconcile + resume sans doublon |
+| B5 | RESOLVED | path-policy fail-closed + adversarial unit/PG |
+| B6 | RESOLVED | inspection.diff serveur + `inspectedFingerprint` au authorize |
+| B7 | RESOLVED | fingerprint provenance + assert document/projet/install |
+| B8 | RESOLVED (plafond DET) | matrice requalifiée ; e2e journey étendu |
+| B9 | RESOLVED | Review Pack FULL + package-lock diff inclus |
+
+Commandes correctif : `npm run test:unit` ; `npx vitest run tests/integration/git-collaboration.pg.test.ts` (15) ; `npx tsc --noEmit` ; `npx playwright test tests/e2e/git-collaboration.spec.ts` ; batterie ML1–ML3/G4 : voir rapport.
+
+## 8. Requalification FINAL CORRECTIVE — B1/B2/B3/B4/B6/B7/B8 (2026-11-08)
+
+GO Morris : « OK, GO CORRECTION ». Plafond : **DETERMINISTIC ≠ READY FOR REAL**. B5/B9 préservés (non-régression).
+
+| ID | Verdict | Preuve discriminante | Écart / sortie |
+|---|---|---|---|
+| AT-01 | PASS DET | PG + e2e surface sans source | — |
+| AT-02 | PASS DET (contrat) | OAuth Studio ≠ App | REAL OAuth |
+| AT-03 | PASS DET | authorize SCRIPTED + UI | REAL consent |
+| AT-04 | PASS DET | attach UI/e2e | REAL add repo |
+| AT-05 | PARTIAL | parcours Nora contextuel non e2e | E2E fil Nora |
+| AT-06 | PASS DET (service) | pending approval | Org REAL |
+| AT-07 | PASS DET | disconnect vs detach | — |
+| AT-08 | PASS DET | readGitFile ref+SHA | Nora LIVE |
+| AT-09 | PASS DET (lecture hostile) | README hostile PG ; **Nora LIVE adversarial non prouvé** | Nora LIVE adv. |
+| AT-10 | PASS DET | publication_refs + inspection | — |
+| AT-11 | PASS DET (SCRIPTED) | branch/commit + mutation counts | REAL Contents |
+| AT-12 | PASS DET (SCRIPTED) | PR sans merge auto | REAL PR |
+| AT-13 | PASS DET | head/base/refs + mandat merge distinct + base avancée refusée | REAL protections |
+| AT-14 | PASS DET | stale_head | — |
+| AT-15 | PASS DET | `lost_ack_after_pr` → reconcile → resume ; **createPR===1** ; remote unread → createPR===0 | REAL network |
+| AT-16 | PASS DET | attach + **dispatch** cross-pilot isolés | — |
+| AT-17 | PASS DET | path-policy B5 rejoué | — |
+| AT-18 | PASS DET | D8 qualify prudent | — |
+| AT-19 | PASS DET | UI GitHub seul | — |
+| AT-20 | PARTIAL | REAL non prouvé | GO REAL |
+| AT-21 | PARTIAL | 320/390/1280 ; a11y/zoom incomplets | a11y exhaustif |
+| AT-22 | PASS DET | revoke conserve D4 | — |
+
+### Clôture B1–B9 (final corrective)
+
+| B | Statut | Preuve |
+|---|---|---|
+| B1 | RESOLVED | `permissionSatisfies` read≠write ; fixture `contents=read` → 0 mutations |
+| B2 | RESOLVED | DISPATCHED refuse HTTP ; claim CAS ; compteurs createBranch/putFile/createPR |
+| B3 | RESOLVED | expectedBaseSha/headRef/baseRef au prepare+dispatch ; base/head avancés refusés |
+| B4 | RESOLVED | `findPullRequest` + marker ; lost_ack_after_pr → exactement 1 PR |
+| B5 | PRESERVED | path-policy tests rejoués PASS |
+| B6 | RESOLVED | 403→FORBIDDEN, timeout→TIMEOUT ; authorize refuse (pas CREATE) |
+| B7 | RESOLVED | actorLogin/installation courants vs plan au point d'effet |
+| B8 | RESOLVED (plafond DET) | AT requalifiés ; unit 136 ; git PG 24 ; Playwright full |
+| B9 | PRESERVED | Review Pack FULL réécrit ce cycle |
+
+Commandes final corrective (web/, Europe/Paris 2026-11-08) :
+- `npx tsc --noEmit` PASS
+- `npm run test:unit` → **136 PASS**
+- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **24 PASS**
+- `npm run test:integration` → 167 PASS / 1 FAIL préexistant flaky `portfolio-a1` pagination (hors ML4)
+- `npm run build` PASS
+- `npx playwright test` → voir delivery-history / Review Pack
+
+## 9. Requalification EXECUTION-INVARIANTS — C1/C2/C3/B2/Q1 (2026-11-08)
+
+GO Morris : « OK GO » (stabilisation finale). Source Critical Review handoff `f15a8e99…`.
+Plafond : **DETERMINISTIC ≠ READY FOR REAL**. B1/B3–B9 préservés (non-régression).
+
+| ID | Verdict | Preuve discriminante ce cycle | Écart / sortie |
+|---|---|---|---|
+| AT-01 | PASS DET | PG + e2e surface | — |
+| AT-02 | PASS DET (contrat) | OAuth ≠ App | REAL OAuth |
+| AT-03 | PASS DET | authorize SCRIPTED | REAL consent |
+| AT-04 | PASS DET | attach | REAL add repo |
+| AT-05 | PARTIAL | Nora contextuel non e2e | E2E fil Nora |
+| AT-06 | PASS DET (service) | pending | Org REAL |
+| AT-07 | PASS DET | disconnect/detach | — |
+| AT-08 | PASS DET | readGitFile | Nora LIVE |
+| AT-09 | PASS DET (hostile DET) | README hostile PG | Nora LIVE adv. |
+| AT-10 | PASS DET | publication_refs | — |
+| AT-11 | PASS DET (SCRIPTED) | C1 barrière + compteurs | REAL Contents |
+| AT-12 | PASS DET (SCRIPTED) | C2 historique vs CLOSED | REAL PR |
+| AT-13 | PASS DET | merge mandat + refs (B3) | REAL protections |
+| AT-14 | PASS DET | stale_head | — |
+| AT-15 | PASS DET | B2 barrière dispatch/reconcile ; lost ACK | REAL network |
+| AT-16 | PASS DET | C3 multi-repo + AT-16 multi-pilot | — |
+| AT-17 | PASS DET | path-policy B5 | — |
+| AT-18 | PASS DET | D8 `prCreatedHistorically` ≠ `prCurrentState` | — |
+| AT-19 | PASS DET | UI GitHub seul | — |
+| AT-20 | PARTIAL | REAL non prouvé | GO REAL |
+| AT-21 | PARTIAL | a11y/zoom incomplets | a11y exhaustif |
+| AT-22 | PASS DET | revoke D4 | — |
+
+### Clôture C1/C2/C3/B2/Q1
+
+| Item | Statut | Preuve |
+|---|---|---|
+| C1 | RESOLVED (DET) | `assertStepAuthority` avant chaque mutation ; revoke après `CREATE_BRANCH` → `putFileContents===0` |
+| C2 | RESOLVED (DET) | `prCreatedHistorically` vs `prCurrentState` OPEN/CLOSED/MERGED/UNKNOWN ; no 2e PR |
+| C3 | RESOLVED (DET) | SCRIPTED store `PilotId+fullName` ; unit isolation + PG deux repos |
+| B2 | RESOLVED (DET) | claim lease + fencing ; reconcile READ-ONLY si claim actif ; barrière avant mutation |
+| Q1 | RESOLVED (DET) | cause = keyset ms truncation vs timestamptz µs ; fix tuple `(created_at,id)` + cursor µs ; stress 25/25 ; suite 172/172 |
+
+Commandes stabilisation (web/, Europe/Paris 2026-11-08) :
+- `npx tsc --noEmit` PASS
+- `npm run test:unit` → **140 PASS**
+- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **28 PASS**
+- `npm run test:integration` → **172 PASS** (portfolio-a1 inclus)
+- `npm run build` PASS
+- `npx playwright test` → voir delivery-history / Review Pack
+
+## 10. Requalification FENCING & RECONCILIATION CLOSURE (2026-11-08)
+
+GO Morris : « OK GO ». Source Critical Review handoff `4bcc8e4e…` (NOT READY + Review Pack incomplete B9).
+Plafond : **DETERMINISTIC ≠ READY FOR REAL**.
+
+| Item | Statut | Preuve |
+|---|---|---|
+| B2 SQL fencing | RESOLVED (DET) | `claimToken` dans prédicat SQL (`result_json->claim->>claimToken`) ; persist/touch/transitions CAS ; 0 rows si token périmé |
+| B2 lease expiry + old worker | RESOLVED (DET) | expire lease → reconcile AMBIGUOUS → B COMPLETED → wake A → CONFLICT ; compteurs inchangés |
+| B4/C2 remote unread | RESOLVED (DET) | `prCreated` historique + remote illisible → `prCurrentState=UNKNOWN` ; pas de COMPLETED ; pas de createPR |
+| B9 docs | RESOLVED | diffs complets matrice / specification / delivery-history dans Review Pack |
+| C1/C3/Q1/B1/B3/B5–B7 | PRESERVED | suites rejouées |
+
+Commandes closure (web/, Europe/Paris 2026-11-08 ~17:40) :
+- `npx tsc --noEmit` PASS
+- `npm run test:unit` → **140 PASS**
+- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **32 PASS**
+- `npm run test:integration` → **176 PASS**
+- `npm run build` PASS
+- `npx playwright test` → Review Pack
+
+## 11. Requalification PR RESUME VERIFICATION (2026-11-08)
+
+GO Morris : « OK GO ». Source Critical Review `c67ec07f…` — défaut `prAlreadyCreated` sautant OPEN_PR.
+Plafond : **DETERMINISTIC ≠ READY FOR REAL**.
+
+| Item | Statut | Preuve |
+|---|---|---|
+| B4/C2 resume | RESOLVED (DET) | `prHistoricallyCreated` force relecture get/find ; jamais createPR ; COMPLETED seulement si `prRemoteVerified` |
+| publicationRef | RESOLVED (DET) | upsert idempotent par effectAttemptId ; pas de doublon ; PR_OPEN/CLOSED cohérents |
+| B2 fencing | PRESERVED | touch/CAS inchangés sur reprise |
+| Negatifs | RESOLVED | unread ; zero match ; CLOSED ; idempotent COMPLETED |
+
+Commandes (web/, Europe/Paris 2026-11-08 ~18:00) :
+- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **36 PASS**
+- suites globales → Review Pack

```


### DOC `projects/sfia-studio-next/construction/integration-git/specification-technique.md`
Statut: M LOCAL DIRTY vs origin/main@c658f590

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 38aafd63..5f4ece01 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -1,5 +1,13 @@
 # R5 — Spécification technique candidate : collaboration Git et intégrations
 
+> **AS-IMPLEMENTED LOCAL + PR RESUME VERIFICATION (2026-11-08)** — `feat/next-git-collaboration-20261108` / baseline `c658f590`.
+> Domaines : `integrations` (D9), `execution` (D7 + `effect-authority` + `permission-level` + `claim-lease`), `proofs` (D8) ; migration `008` (pas de 009).
+> B2 fencing SQL : `claimToken` dans WHERE ; touch lease avant mutation ; liberate reconcile si claim inactive.
+> B4/C2 resume : `prCreated`/`prOpened` = fait historique seulement. Reprise AMBIGUOUS → getPullRequest/findPullRequest + provenance head/base/sha ; **jamais** createPR si historique ; COMPLETED seulement si `prRemoteVerified` (OPEN|CLOSED|MERGED) ; publicationRef upsert idempotent.
+> Limite : PG fencing ≠ exactly-once GitHub. TOCTOU D6↔API résiduel.
+> Provider **SCRIPTED** ; REAL `NOT_CONFIGURED`. **≠ READY FOR REAL.**
+
+
 **Statut :** `DOCUMENTED — DRAFT ARCHITECTURE / NOT VALIDATED SPEC / NOT IMPLEMENTED`
 **Nature :** préparation technique de ML4 sous la source de contrat de macro-lot R5 existante ; **ne remplace pas** les R2/ADR validés, la phase Figma ou le prompt Cursor SFIA v2.6.
 **Baseline :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`, repo `mcleland147/sfia-workspace`.

```


### DOC `projects/sfia-studio-next/construction/delivery-history.md`
Statut: M LOCAL DIRTY vs origin/main@c658f590

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a90dbc44..935468b5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -741,3 +741,115 @@ Append-only logical journal of Cursor product deliveries.
 | Preuves locales | tsc OK ; unit 123 PASS (STUDIO_LANE=DEV) ; PG 144 PASS ; e2e full 12/12 ×2 PASS |
 | DEV 500 | Cause = `next dev --turbopack` font flake sur WT construction ; restore non destructive `next dev` sans turbopack → `/login` 200 ; RECETTE `:3200` inchangée 200 |
 | Verdict attendu | PR/merge conditionnel puis post-merge CI GREEN ; STABLE/ML4 NOT STARTED |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-LOCAL-01
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — Collaborer et publier avec Git |
+| Type | EVOL / FEATURE DELIVERY — construction locale intégrée |
+| Autorité / GO | Morris GO R5/ML4 INTEGRATED LOCAL DELIVERY (2026-11-08) — DEV only |
+| Branche / worktree | `feat/next-git-collaboration-20261108` @ `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
+| Base Git | `origin/main@c658f59023d44a0e22448c7ee034e3c1dda292a2` (PR #670 merged) |
+| État Git Product | **LOCAL DIRTY / NO PROJECT COMMIT / NO PUSH / NO PR** |
+| Architecture | D6→D7→D9→D8 ; domaines `integrations` (D9), `execution` (D7), `proofs` (D8) ; D4 `document_publication_refs` ; Nora lecture Git only |
+| Migration | `008_git_collaboration` additive (DEV/`sfia_next_e2e`) — jamais RECETTE/STABLE |
+| Provider | `STUDIO_GITHUB_PROVIDER=scripted` par défaut ; REAL → `NOT_CONFIGURED` |
+| UX | Paramètres→Intégrations (218–224) ; surface projet git/publication (227–231) ; badge SCRIPTED ; shell G4 réutilisé |
+| Figma | Contrat extrait `.tmp-sfia-review/figma-visual-contract-ml4.md` + captures 218/219/225/227/229/231/233 |
+| Validations locales | unit 131 PASS ; integration PG 154 PASS (dont git-collaboration 10) ; `tsc --noEmit` PASS ; `next build` PASS ; e2e `git-collaboration.spec.ts` **1/1 PASS (15.6s)** SCRIPTED |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Limites Fake/Real | Aucune installation App REAL ; aucun commit/PR/merge GitHub REAL ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT ; GO Git Product ; GO RECETTE + effets REAL ; acceptation Morris ML4 |
+| Verdict candidat | `ML4 INTEGRATED LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-CORRECTIVE-B1-B9
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — correctif Critical B1–B9 |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris GO ML4 CORRECTIVE LOCAL DELIVERY (2026-11-08) |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (même worktree dirty) |
+| Base Git | `origin/main@c658f590…` inchangée ; handoff précédent `877b502a` |
+| Corrections | B1 autorité courante ; B2 claim atomique ; B3 merge lié publication ; B4 reconcile/lost ACK ; B5 path-policy ; B6 diff inspectable ; B7 provenance fingerprint ; B8 matrice ; B9 Review Pack + package-lock |
+| Migration | aucune 009 — progress/claim via colonnes 008 existantes |
+| Validations | unit 132 PASS ; git-collaboration PG 15 PASS ; e2e git corrective PASS ; Playwright **13/13 PASS** (ML1–ML3/G4 + ML4) ; tsc PASS |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-FINAL-CORRECTIVE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — FINAL CORRECTIVE LOCAL (B1/B2/B3/B4/B6/B7/B8) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK, GO CORRECTION » (2026-11-08) |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée ; handoff correctif B1–B9 `253f6bed` |
+| Corrections | B1 niveaux permission read≠write ; B2 exclusivité DISPATCHED + claim ; B3 base/head/refs merge ; B4 lost ACK post-PR + findPullRequest ; B6 taxonomie lecture distante ; B7 acteur/provenance courants ; B8 requal AT + preuves ; B5/B9 préservés |
+| Migration | aucune 009 — claimToken dans `resultJson` (008) |
+| Validations | unit **136 PASS** ; git-collaboration PG **24 PASS** ; `tsc` PASS ; `next build` PASS ; Playwright **13/13 PASS** ; integration globale 167/168 (1 flaky préexistant `portfolio-a1` hors ML4) |
+| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris ; GO RECETTE + effets REAL |
+| Verdict candidat | `ML4 FINAL CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-EXECUTION-INVARIANTS
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — STABILISATION FINALE DES INVARIANTS GIT (C1/C2/C3/B2/Q1) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » (2026-11-08) ; Critical Review entrée `f15a8e99…` NOT READY |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée |
+| Corrections | C1 `assertStepAuthority` inter-mutations ; B2 claim lease/fencing + reconcile READ-ONLY ; C2 PR historique vs courant ; C3 SCRIPTED `PilotId+fullName` ; Q1 keyset portfolio µs |
+| Migration | aucune 009 — lease dans `resultJson` (008) |
+| Validations | unit **140 PASS** ; git PG **28 PASS** ; integration **172 PASS** ; `tsc` PASS ; `build` PASS ; Playwright **13/13 PASS** |
+| Handoff L3 | `sfia/review-handoff@4bcc8e4e4171bf886beab06c52b488e88ff2f308` (parent `f15a8e99…`) — mono-fichier |
+| Q1 | Flake préexistant prouvé (code = main) ; cause truncation JS Date ms ; fix tuple keyset + cursor µs ; stress 25/25 PASS |
+| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris |
+| Verdict candidat | `ML4 EXECUTION-INVARIANTS STABILIZATION — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-FENCING-RECONCILIATION-CLOSURE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — EXECUTION SAFETY FINAL BOUNDED CLOSURE (B2/B4/B9) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » ; Critical Review entrée `4bcc8e4e…` NOT READY + pack incomplete |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée |
+| Corrections | B2 claimToken dans WHERE SQL + touch lease + old-worker CONFLICT ; B4/C2 `prRemoteProven` fail-closed ; B9 diffs docs dans Review Pack |
+| Migration | aucune 009 |
+| Validations | unit **140** ; git PG **32** ; integration **176** ; tsc/build PASS ; Playwright **13/13 PASS** |
+| Handoff L3 | `sfia/review-handoff@c67ec07ff4d292c09f57015529515ba1deaf4c69` (parent `4bcc8e4e…`) — mono-fichier + diffs B9 |
+| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; `0.0.0-dev` |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 FENCING & RECONCILIATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-PR-RESUME-VERIFICATION
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — B4/C2 PR resume verification after lost ACK |
+| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » ; Critical Review `c67ec07f…` NOT READY |
+| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
+| Base Git | `origin/main@c658f590…` |
+| Correction | `prHistoricallyCreated` force relecture distante ; gate `prRemoteVerified` ; upsert publicationRef ; tests resume/unread/nomatch/CLOSED |
+| Validations | unit **140** ; git PG **36** ; integration **180** ; tsc/build PASS ; Playwright **13/13 PASS** |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 PR RESUME VERIFICATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

```


## 11. Tests négatifs discriminants
- `B4/C2 resume: lost_ack + wipe prNumber + unread → readable → COMPLETED with createPR===1`
- still unreadable → AMBIGUOUS
- zero remote matches → AMBIGUOUS, createPR===0
- CLOSED → COMPLETED + PR_CLOSED ; prepareMerge refuse
- COMPLETED re-dispatch idempotent

## 12b. Compteurs SCRIPTED
Resume succès : createPR total cycle = 1 (lost ack) puis resume createPR===0 ; branch/put===0 sur resume.

## 13. Résultats suites (2026-11-08 ~18:00 CET, lane DEV + e2e SCRIPTED)
| Commande | Résultat |
|---|---|
| `npx tsc --noEmit` | PASS |
| `npm run test:unit` | **140 PASS** |
| `npx vitest run tests/integration/git-collaboration.pg.test.ts` | **36 PASS** |
| `npm run test:integration` | **180 PASS** |
| `npm run build` | PASS |
| `npx playwright test` | **13/13 PASS** (~1.1m) |

Historique 140/32/176/13 ≠ preuve de ce delivery.

## 15. Non-régression
B1–B3, B5–B7, B2 fencing, C1, C3, Q1, B9 : PRESERVED. B4/C2 resume : RESOLVED.

## 16. Matrice AT-01..22
Voir matrice §9–§11. PARTIAL : AT-05, AT-09 LIVE, AT-20, AT-21.

## 17. ENV-01 / versioning
ENV ROUTING COMPLETE (DEV/e2e). CORRECTIVE / NO RELEASE / 0.0.0-dev / STABLE NOT AVAILABLE.

## 18. Fake/Real
SCRIPTED BEHAVIOR PROVEN sur scénarios DET. REAL NOT_CONFIGURED. DETERMINISTIC ≠ READY FOR REAL.

## 19. Dette / risques / exit
TOCTOU externe ; fencing ≠ exactly-once ; AT PARTIAL ; Product non committé.

## 20. Gates Morris
Critical Review ChatGPT ; GO Product Git ; GO REAL/RECETTE distinct ; ML5 non autorisé.

## 21. Verdict
**ML4 PR RESUME VERIFICATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY.**

NE PAS CONCLURE : GITHUB REAL PROVEN / RECETTE ACCEPTED / ML4 ADOPTED / R5 CLOSED / STABLE AVAILABLE.

---
FIN REVIEW PACK FULL
