import { NextResponse } from "next/server";
import {
  createTechnicalContract,
  listTechnicalContracts,
} from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const contractKey = url.searchParams.get("contractKey") ?? undefined;
    const items = await listTechnicalContracts({
      pilotId: session.pilotId,
      projectId,
      contractKey,
    });
    return NextResponse.json({ contracts: items });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as {
      contractKey?: string;
      preparationId?: string | null;
      body?: TechnicalContractBody;
      sourceTurnCommandId?: string | null;
      supersedesContractId?: string | null;
      /** Explicit promotion — syntax-complete alone never yields READY. */
      markReady?: boolean;
      unknownRestrictions?: string[];
      sourcesSufficient?: boolean;
    };
    if (!body.contractKey || !body.body) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await createTechnicalContract({
      pilotId: session.pilotId,
      projectId,
      contractKey: body.contractKey,
      preparationId: body.preparationId,
      body: body.body,
      sourceTurnCommandId: body.sourceTurnCommandId,
      supersedesContractId: body.supersedesContractId,
      markReady: body.markReady === true,
      unknownRestrictions: body.unknownRestrictions,
      sourcesSufficient: body.sourcesSufficient,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
