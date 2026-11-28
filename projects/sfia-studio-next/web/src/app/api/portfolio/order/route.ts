import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { movePersonalSpace, parseSpaceType } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json()) as {
      spaceType?: string;
      spaceId?: string;
      expectedVersion?: number;
      direction?: "up" | "down";
      beforeSpaceId?: string | null;
      beforeSpaceType?: string | null;
    };
    if (!body.spaceType || !body.spaceId || !Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await movePersonalSpace(session.pilotId, {
      spaceType: parseSpaceType(body.spaceType),
      spaceId: body.spaceId,
      expectedVersion: body.expectedVersion as number,
      direction: body.direction,
      beforeSpaceId: body.beforeSpaceId,
      beforeSpaceType: body.beforeSpaceType ? parseSpaceType(body.beforeSpaceType) : null,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
