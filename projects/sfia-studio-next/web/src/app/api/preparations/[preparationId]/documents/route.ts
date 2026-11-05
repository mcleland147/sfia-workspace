import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const documents = await listDocuments(session.pilotId, preparationId);
    return NextResponse.json({ documents });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      title?: string;
      contentMarkdown?: string;
      documentId?: string;
      correlationKey?: string;
    };
    if (typeof body.contentMarkdown !== "string") {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await savePreparationDocument(
      session.pilotId,
      preparationId,
      body.title ?? "Document du sas",
      body.contentMarkdown,
      body.documentId,
      { correlationKey: body.correlationKey },
    );
    const http =
      result.status === "AVAILABLE"
        ? 200
        : result.status === "CONFLICT"
          ? 409
          : result.status === "FAILED"
            ? 400
            : 500;
    return NextResponse.json(result, { status: http });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
