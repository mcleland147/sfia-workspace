/**
 * Sequence D / D1 — real inspect → apply → reverify → revoke path on DEV PG.
 * Does not inject a pre-built HumanDecision into a helper alone.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { insertHumanDecision } from "@/domains/decisions/service";
import {
  applyWebPublicQueryAuthorityDecision,
  inspectWebPublicQueryAuthorityCandidate,
  reverifyWebPublicQueryAuthorityAtEgress,
} from "@/domains/conversation/web-public-query-authority";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));
const QUERY = "HTTP/3 site:datatracker.ietf.org";
const POLICY = "ml5-cog-policy-v5-provisional-v0.2-20261126";

describe.skipIf(!dockerOk())("ML5 WEB D6 inspect→apply→egress PG", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  it("create via inspect+apply, reverify ok, revoke denies checkpoint reuse", async () => {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      displayName: "D6-WEB",
      githubUserId: `gh-${pilotId}`,
    });
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "D6-WEB-proj", "authority");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id))
    )[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "D6-WEB-proj",
      previewSummary: "authority",
      idempotencyKey: newId("idem"),
    });
    expect(["CREATED", "ALREADY_CREATED"]).toContain(created.status);
    const projectId = created.projectId!;

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const inspected = inspectWebPublicQueryAuthorityCandidate({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "${QUERY}"`,
      projectId,
      pilotId,
      purpose: "public protocol documentation research",
      policyVersion: POLICY,
      expiresAt,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error("inspection failed");

    const applied = await applyWebPublicQueryAuthorityDecision({
      pilotId,
      projectId,
      inspection: inspected.inspection,
      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
      confirmed: true,
      sourceRef: "pg-d6-web-act",
    });
    expect(applied.allowed).toBe(true);
    if (!applied.allowed) throw new Error("apply failed");

    const row = (
      await db
        .select()
        .from(humanDecisions)
        .where(eq(humanDecisions.id, applied.decisionId))
        .limit(1)
    )[0];
    expect(row?.kind).toBe("RECORD_DECISION");
    expect(row?.effectConditions).toContain("expiresAt");
    expect(row?.effectConditions).toContain("public_web_search");

    const ok = await reverifyWebPublicQueryAuthorityAtEgress({
      query: QUERY,
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: applied.decisionId,
    });
    expect(ok.allowed).toBe(true);

    // Checkpoint reuse after revoke must fail closed.
    await db.transaction(async (tx) => {
      await insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "WEB_PUBLIC_QUERY",
        sourceRef: "revoke-act",
        kind: "REVOKE_DECISION",
        objectRef: inspected.inspection.objectRef,
        statement: "revoke WEB query",
        revokesDecisionId: applied.decisionId,
      });
    });

    const denied = await reverifyWebPublicQueryAuthorityAtEgress({
      query: QUERY,
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: applied.decisionId,
    });
    expect(denied.allowed).toBe(false);
    if (denied.allowed) throw new Error("expected deny");
    expect(denied.reasonCode).toBe("REVOKED_OR_SUPERSEDED");

    // Expired binding reuse (synthetic past now).
    const expiredInspect = inspectWebPublicQueryAuthorityCandidate({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "RFC 9110 HTTP semantics"`,
      projectId,
      pilotId,
      purpose: "http semantics",
      policyVersion: POLICY,
      expiresAt: new Date(Date.now() + 30_000).toISOString(),
    });
    expect(expiredInspect.ok).toBe(true);
    if (!expiredInspect.ok) throw new Error("exp inspection failed");
    const expiredApply = await applyWebPublicQueryAuthorityDecision({
      pilotId,
      projectId,
      inspection: expiredInspect.inspection,
      inspectedFingerprint: expiredInspect.inspection.inspectedFingerprint,
      confirmed: true,
      sourceRef: "pg-d6-web-exp",
    });
    expect(expiredApply.allowed).toBe(true);
    if (!expiredApply.allowed) throw new Error("exp apply failed");
    const expiredReverify = await reverifyWebPublicQueryAuthorityAtEgress({
      query: "RFC 9110 HTTP semantics",
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: expiredApply.decisionId,
      now: Date.now() + 60_000,
    });
    expect(expiredReverify.allowed).toBe(false);
    if (expiredReverify.allowed) throw new Error("expected expire");
    expect(expiredReverify.reasonCode).toBe("EXPIRED");

    // Ensure revoke row exists (opposable history).
    const revokeRows = await db
      .select({ id: humanDecisions.id })
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.kind, "REVOKE_DECISION"),
          eq(humanDecisions.revokesDecisionId, applied.decisionId),
        ),
      );
    expect(revokeRows.length).toBeGreaterThanOrEqual(1);
  });
});
