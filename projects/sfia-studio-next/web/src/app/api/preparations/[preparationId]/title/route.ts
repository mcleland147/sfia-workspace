import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { renamePreparation } from "@/domains/preparation/space-naming";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      title?: unknown;
      expectedRevision?: unknown;
      intentionKey?: unknown;
    };
    if (typeof body.title !== "string" || typeof body.expectedRevision !== "number" || typeof body.intentionKey !== "string") {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "Titre, version et intention sont requis." }, { status: 400 });
    }
    const result = await renamePreparation({
      pilotId: session.pilotId,
      preparationId,
      title: body.title,
      expectedRevision: body.expectedRevision,
      intentionKey: body.intentionKey,
    });
    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
