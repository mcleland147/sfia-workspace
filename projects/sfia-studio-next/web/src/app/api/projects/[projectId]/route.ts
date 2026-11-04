import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const data = await getOwnedProjectContext(session.pilotId, projectId);
    return NextResponse.json({
      project: data.project,
      preparation: data.preparation,
      conversation: data.conversation,
      link: data.link,
      messages: data.messages,
      documents: data.documents,
    });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    if (code === "SESSION_INVALID") {
      return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
    }
    return NextResponse.json({ error: "INTERNAL" }, { status: 500 });
  }
}
