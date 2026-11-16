import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
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

    const rev = await updatePreview(
      session.pilotId,
      preparationId,
      b.previewName,
      b.previewSummary,
      b.expectedCreationRevision,
    );
    const data = await getPreparationContext(session.pilotId, preparationId);

    // Re-read after commit: if another writer advanced revision, return coherent current state
    // (same revision + projection pair) rather than mixing an old revision with a newer projection.
    const confirmedRevision = data.preparation.creationRevision;
    if (confirmedRevision !== rev) {
      return NextResponse.json({
        creationRevision: confirmedRevision,
        projection: data.projection,
        preparation: data.preparation,
        reconciled: true,
      });
    }

    return NextResponse.json({
      creationRevision: rev,
      projection: data.projection,
      preparation: data.preparation,
    });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "CONFLICT") {
      return NextResponse.json(
        {
          error: "CONFLICT",
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
        { error: "DEPENDENCY_UNAVAILABLE", errorCategory: "DEPENDENCY_UNAVAILABLE" },
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
