import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
import { listMessages } from "@/domains/conversation/service";
import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
import { listDocuments } from "@/domains/document/service";
import { listKnowledge } from "@/domains/knowledge/service";

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
    const code = (e as { code?: string }).code;
    if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      previewName?: string;
      previewSummary?: string;
      expectedCreationRevision?: number;
    };
    const rev = await updatePreview(
      session.pilotId,
      preparationId,
      body.previewName ?? "",
      body.previewSummary ?? "",
      body.expectedCreationRevision,
    );
    const data = await getPreparationContext(session.pilotId, preparationId);
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
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
