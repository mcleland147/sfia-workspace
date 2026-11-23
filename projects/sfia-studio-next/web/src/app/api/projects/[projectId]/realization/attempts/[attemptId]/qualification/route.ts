import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
import {
  buildNoraFinalAnalysisBrief,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";
import { requireStudioSession } from "@/domains/identity/session";
import { newId } from "@/lib/ids";
import { studioErrorResponse, StudioError } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const row = (
      await db
        .select()
        .from(realizationQualifications)
        .where(
          and(
            eq(realizationQualifications.attemptId, attemptId),
            eq(realizationQualifications.projectId, projectId),
            eq(realizationQualifications.pilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
    return NextResponse.json({
      status: row.status,
      qualification: {
        id: row.id,
        verdict: row.verdict,
        rubrics: JSON.parse(row.rubricsJson || "{}"),
        noraAnalysisMarkdown: row.noraAnalysisMarkdown,
        noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
        limits: JSON.parse(row.limitsJson || "[]"),
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      attachNoraAnalysis?: boolean;
    };
    const attempt = await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, attemptId))
        .limit(1)
    )[0];
    const manifest = handoff
      ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
      : null;
    const q = qualifyCursorRealization({
      contractFingerprint: attempt.fingerprint,
      handoffStatus: handoff?.status ?? null,
      reportMarkdown: handoff?.reportMarkdown ?? null,
      manifest,
      terminalStatus: attempt.live.terminalStatus ?? null,
    });
    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
    const noraKind = classifyAttachedNoraPayload(technicalBrief);
    const limits = [
      ...q.limits,
      ...(noraKind === "TECHNICAL_BRIEF"
        ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
        : []),
    ];
    const existing = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, attemptId))
        .limit(1)
    )[0];
    if (existing) {
      throw new StudioError("CONFLICT", "Qualification déjà enregistrée pour cette tentative", {
        exposeMessage: true,
      });
    }
    // Ensure attempt exists for FK
    const efx = (
      await db.select({ id: effectAttempts.id }).from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
    )[0];
    if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");

    const id = newId("rqual");
    const now = new Date();
    await db.insert(realizationQualifications).values({
      id,
      attemptId,
      handoffId: handoff?.id ?? null,
      projectId,
      pilotId: session.pilotId,
      status: "RECORDED",
      rubricsJson: JSON.stringify(q.rubrics),
      verdict: q.verdict,
      noraAnalysisMarkdown: technicalBrief,
      noraAnalysisAt: technicalBrief ? now : null,
      limitsJson: JSON.stringify(limits),
      createdAt: now,
      updatedAt: now,
    });
    return NextResponse.json({
      qualificationId: id,
      verdict: q.verdict,
      rubrics: q.rubrics,
      limits,
      noraAnalysisMarkdown: technicalBrief,
      noraAnalysisKind: noraKind,
      testsPass: q.testsPass,
      conformityProven: q.conformityProven,
      morrisAcceptance: q.morrisAcceptance,
      adopted: q.adopted,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
