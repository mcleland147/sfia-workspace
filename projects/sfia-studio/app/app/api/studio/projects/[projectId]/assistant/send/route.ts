/**
 * Thin cancellable transport for Product Nora send.
 * Same canonical application seam as projectAssistantSendAction.
 * No client authority. AbortSignal = request.signal only.
 */

import { NextResponse } from "next/server";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  context: { params: Promise<{ projectId: string }> },
): Promise<Response> {
  const params = await context.params;
  const projectId =
    typeof params?.projectId === "string" ? params.projectId.trim() : "";
  if (!projectId) {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: "PROJECT_ID_REQUIRED",
        message: "Identifiant projet requis.",
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: "INPUT_INVALID",
        message: "JSON invalide.",
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  const parsed = parseBrowserSafeAssistantSendBody(raw);
  if (!parsed.ok) {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: parsed.code,
        message: parsed.message,
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  const result = await sendProjectAssistantTurn(
    {
      projectId,
      content: parsed.value.content,
      history: parsed.value.history,
      logicalTurnId: parsed.value.logicalTurnId,
      turnRetryKey: parsed.value.turnRetryKey,
      reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
      reservationInteractionContext: parsed.value.reservationInteractionContext,
    },
    { signal: request.signal },
  );
  return NextResponse.json(result);
}
