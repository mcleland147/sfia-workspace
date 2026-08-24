/**
 * E2E-ONLY W3-B external-boundary arming.
 * Arms TestExecutionAdapter fail OR a post-start governed cancel reason.
 * Never creates Product Outcome. Opaque 404 when gates fail.
 */

import { NextResponse } from "next/server";
import {
  armW3bBoundary,
  clearW3bBoundaryArm,
  isW3bBoundaryControlEnabled,
  type W3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";

export const dynamic = "force-dynamic";

function opaqueNotFound(): NextResponse {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return opaqueNotFound();
  }

  if (!isW3bBoundaryControlEnabled()) {
    return opaqueNotFound();
  }

  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") {
    return opaqueNotFound();
  }

  const action = body.action;
  if (action === "clear") {
    clearW3bBoundaryArm();
    return NextResponse.json({ ok: true, cleared: true });
  }

  if (action !== "arm") {
    return NextResponse.json(
      { ok: false, code: "UNKNOWN_ACTION", message: "action must be arm|clear" },
      { status: 400 },
    );
  }

  const kind = body.kind;
  let arm: W3bBoundaryArm;
  if (kind === "adapter_fail") {
    const reason =
      typeof body.reason === "string" && body.reason.trim().length > 0
        ? body.reason.trim()
        : "e2e_adapter_fail";
    arm = { kind: "adapter_fail", reason };
  } else if (kind === "governed_stop") {
    const stopCondition =
      typeof body.stopCondition === "string" ? body.stopCondition.trim() : "";
    if (!stopCondition) {
      return NextResponse.json(
        {
          ok: false,
          code: "STOP_CONDITION_REQUIRED",
          message: "stopCondition required for governed_stop",
        },
        { status: 400 },
      );
    }
    arm = { kind: "governed_stop", stopCondition };
  } else {
    return NextResponse.json(
      {
        ok: false,
        code: "UNKNOWN_KIND",
        message: "kind must be adapter_fail|governed_stop",
      },
      { status: 400 },
    );
  }

  try {
    armW3bBoundary(arm);
  } catch {
    return opaqueNotFound();
  }

  return NextResponse.json({
    ok: true,
    armed: true,
    kind: arm.kind,
    detail:
      "Armed for next product Exécuter — outcome via existing Attempt path only.",
  });
}
