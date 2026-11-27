import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import {
  applyPilotApercuCorrection,
  getPreparationContext,
} from "@/domains/preparation/service";
import { classifyPilotPatchWrite } from "@/domains/preparation/projection";
import { listMessages } from "@/domains/conversation/service";
import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
import { listDocuments } from "@/domains/document/service";
import { listKnowledge } from "@/domains/knowledge/service";
import { studioErrorResponse, toStudioError } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const data = await getPreparationContext(session.pilotId, preparationId);
    const msgs = await listMessages(session.pilotId, preparationId);
    const docs = await listDocuments(session.pilotId, preparationId);
    const knowledge = await listKnowledge(session.pilotId, preparationId);
    // Structured awaiting mission — never parse Nora message text for binding.
    const awaitingMission = await getAwaitingMissionForPreparation(
      session.pilotId,
      preparationId,
    );
    return NextResponse.json({
      ...data,
      messages: msgs,
      documents: docs,
      knowledge,
      awaitingMission,
      session: { pilotId: session.pilotId },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

/**
 * Pilot aperçu correction — CAS on expectedCreationRevision required.
 * Never maps DB/conflict failures to SESSION_INVALID.
 */
export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "INVALID_REQUEST", reason: "JSON body required" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "INVALID_REQUEST", reason: "object body required" }, { status: 400 });
    }

    const b = body as {
      previewName?: unknown;
      previewSummary?: unknown;
      expectedCreationRevision?: unknown;
    };

    if (typeof b.expectedCreationRevision !== "number" || !Number.isFinite(b.expectedCreationRevision)) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", reason: "expectedCreationRevision required" },
        { status: 400 },
      );
    }
    if (typeof b.previewName !== "string" || typeof b.previewSummary !== "string") {
      return NextResponse.json(
        { error: "INVALID_REQUEST", reason: "previewName and previewSummary strings required" },
        { status: 400 },
      );
    }

    const applied = await applyPilotApercuCorrection({
      pilotId: session.pilotId,
      preparationId,
      previewName: b.previewName,
      previewSummary: b.previewSummary,
      expectedCreationRevision: b.expectedCreationRevision,
    });

    if (applied.status === "CONFLICT") {
      return NextResponse.json(
        {
          error: "CONFLICT",
          writeStatus: "CONFLICT_NOT_APPLIED" as const,
          actualCreationRevision: applied.actualRevision,
        },
        { status: 409 },
      );
    }
    if (applied.status === "FORBIDDEN") {
      return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    }
    if (applied.status === "UNAVAILABLE") {
      return NextResponse.json(
        {
          error: "DEPENDENCY_UNAVAILABLE",
          errorCategory: "DEPENDENCY_UNAVAILABLE",
          writeStatus: "UNKNOWN" as const,
        },
        { status: 503 },
      );
    }

    // Post-commit observation: distinguish still-current write from a later superseding write.
    const data = await getPreparationContext(session.pilotId, preparationId);
    const appliedRevision = applied.revision;
    const observedRevision = data.preparation.creationRevision;
    const writeStatus = classifyPilotPatchWrite({
      applyStatus: applied.status,
      appliedRevision,
      observedRevision,
    });

    return NextResponse.json({
      writeStatus,
      appliedRevision,
      creationRevision: observedRevision,
      appliedProjection: applied.projection,
      projection: data.projection,
      preparation: data.preparation,
      // Legacy flag: true only when a later write already superseded this one.
      reconciled: writeStatus === "APPLIED_SUPERSEDED",
    });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "CONFLICT") {
      return NextResponse.json(
        {
          error: "CONFLICT",
          writeStatus: "CONFLICT_NOT_APPLIED",
          actualCreationRevision: (e as { actualCreationRevision?: number }).actualCreationRevision,
        },
        { status: 409 },
      );
    }
    // FORBIDDEN on missing/foreign prep → 404 (non-disclosure); UNAVAILABLE → 503; else classified.
    if (code === "FORBIDDEN") {
      return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    }
    if (code === "UNAVAILABLE") {
      return NextResponse.json(
        {
          error: "DEPENDENCY_UNAVAILABLE",
          errorCategory: "DEPENDENCY_UNAVAILABLE",
          writeStatus: "UNKNOWN",
        },
        { status: 503 },
      );
    }
    const mapped = studioErrorResponse(e);
    // Guard: never advertise success/session for persistence failures.
    if (mapped.status === 401 && toStudioError(e).code !== "SESSION_INVALID") {
      return NextResponse.json(
        { error: "INTERNAL", errorCategory: "INTERNAL" },
        { status: 500 },
      );
    }
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
