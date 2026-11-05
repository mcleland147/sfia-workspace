import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import {
  compareDocumentRevisions,
  getDocumentRevision,
  listDocumentRevisions,
  reviseDocument,
} from "@/domains/document/service";

export async function GET(
  req: Request,
  ctx: { params: Promise<{ preparationId: string; documentId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, documentId } = await ctx.params;
    const url = new URL(req.url);
    const revisionId = url.searchParams.get("revisionId");
    const left = url.searchParams.get("left");
    const right = url.searchParams.get("right");

    if (left && right) {
      const cmp = await compareDocumentRevisions(
        session.pilotId,
        preparationId,
        documentId,
        left,
        right,
      );
      return NextResponse.json(cmp);
    }
    if (revisionId) {
      const rev = await getDocumentRevision(
        session.pilotId,
        preparationId,
        documentId,
        revisionId,
      );
      return NextResponse.json(rev);
    }
    const list = await listDocumentRevisions(session.pilotId, preparationId, documentId);
    return NextResponse.json(list);
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ preparationId: string; documentId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, documentId } = await ctx.params;
    const body = (await req.json()) as {
      action?: "revise";
      baseRevisionId?: string;
      contentMarkdown?: string;
      correlationKey?: string;
      scope?: string;
      sectionHint?: string;
    };
    if (
      body.action !== "revise" ||
      !body.baseRevisionId ||
      !body.contentMarkdown ||
      !body.correlationKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await reviseDocument(session.pilotId, preparationId, {
      documentId,
      baseRevisionId: body.baseRevisionId,
      contentMarkdown: body.contentMarkdown,
      correlationKey: body.correlationKey,
      scope: body.scope,
      sectionHint: body.sectionHint,
      provenance: { sourceKind: "pilot", via: "api-revise" },
    });
    const status =
      result.status === "CONFLICT" ? 409 : result.status === "FAILED" ? 400 : 200;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
