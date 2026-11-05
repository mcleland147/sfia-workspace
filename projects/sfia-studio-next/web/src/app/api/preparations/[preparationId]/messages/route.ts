import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as { content?: string; correlationKey?: string };
    if (!body.content?.trim()) return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    const result = await postUserMessageAndNora(
      session.pilotId,
      preparationId,
      body.content.trim(),
      { correlationKey: body.correlationKey },
    );
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ ...result, messages, humanDecisionCreated: false });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
