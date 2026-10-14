/**
 * Thin cancellable transport for Product Nora send.
 * Same canonical application seam as projectAssistantSendAction.
 * No client authority. AbortSignal = request.signal only.
 *
 * Progressive mode (Accept: application/x-ndjson):
 * NDJSON lines `{type:"activity",event}` then `{type:"result",result}`.
 * Classic JSON remains the default / fallback.
 */

import { NextResponse } from "next/server";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";
import {
  terminalLiveActivityFromProductResult,
  type NoraLiveActivityEvent,
} from "@/features/project-assistant/liveActivityEvents";

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

  const accept = request.headers.get("accept") ?? "";
  const wantsProgressive = accept.includes("application/x-ndjson");

  if (!wantsProgressive) {
    const result = await sendProjectAssistantTurn(
      {
        projectId,
        content: parsed.value.content,
        history: parsed.value.history,
        logicalTurnId: parsed.value.logicalTurnId,
        turnRetryKey: parsed.value.turnRetryKey,
        reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
        reservationInteractionContext:
          parsed.value.reservationInteractionContext,
      },
      { signal: request.signal },
    );
    return NextResponse.json(result);
  }

  const encoder = new TextEncoder();
  const stream = new TransformStream<Uint8Array, Uint8Array>();
  const writer = stream.writable.getWriter();
  let seq = 0;
  let writeChain: Promise<void> = Promise.resolve();
  let streamClosed = false;
  let terminalEmitted = false;

  const writeLine = (payload: unknown): Promise<void> => {
    writeChain = writeChain
      .then(async () => {
        if (streamClosed) return;
        await writer.write(encoder.encode(`${JSON.stringify(payload)}\n`));
      })
      .catch((err) => {
        streamClosed = true;
        throw err;
      });
    return writeChain;
  };

  void (async () => {
    try {
      const started: NoraLiveActivityEvent = {
        kind: "mission_started",
        seq: ++seq,
        at: new Date().toISOString(),
        label: "Nora prépare la consultation des sources.",
      };
      await writeLine({ type: "activity", event: started });

      const result = await sendProjectAssistantTurn(
        {
          projectId,
          content: parsed.value.content,
          history: parsed.value.history,
          logicalTurnId: parsed.value.logicalTurnId,
          turnRetryKey: parsed.value.turnRetryKey,
          reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
          reservationInteractionContext:
            parsed.value.reservationInteractionContext,
        },
        {
          signal: request.signal,
          onLiveActivity: (event) => {
            if (terminalEmitted || streamClosed) return;
            const stamped: NoraLiveActivityEvent = {
              ...event,
              seq: ++seq,
            };
            void writeLine({ type: "activity", event: stamped });
          },
        },
      );

      // Drain pending activity writes before terminal so order is preserved.
      await writeChain;

      const transportAbortedWithoutAck =
        request.signal.aborted &&
        !(
          typeof result === "object" &&
          result !== null &&
          "status" in result &&
          (result as { status?: string }).status === "stopped"
        );

      const terminal = terminalLiveActivityFromProductResult({
        result: result as {
          ok?: boolean;
          status?: string;
          executionIncomplete?: boolean;
        },
        runnerStopConfirmed:
          typeof result === "object" &&
          result !== null &&
          "status" in result &&
          (result as { status?: string }).status === "stopped",
        transportAbortedWithoutAck,
      });

      terminalEmitted = true;
      await writeLine({
        type: "activity",
        event: {
          kind: terminal.kind,
          seq: ++seq,
          at: new Date().toISOString(),
          label: terminal.label,
        } satisfies NoraLiveActivityEvent,
      });
      await writeLine({ type: "result", result });
    } catch (error) {
      await writeChain.catch(() => undefined);
      const aborted = request.signal.aborted;
      // Browser/transport abort alone ≠ Runner stop_confirmed (R-EXT-01 / R-EXT-05).
      const terminal = terminalLiveActivityFromProductResult({
        result: {
          ok: false,
          status: aborted ? "provider_unavailable" : "provider_error",
        },
        transportAbortedWithoutAck: aborted,
      });
      terminalEmitted = true;
      try {
        await writeLine({
          type: "activity",
          event: {
            kind: terminal.kind,
            seq: ++seq,
            at: new Date().toISOString(),
            label: terminal.label,
          } satisfies NoraLiveActivityEvent,
        });
        await writeLine({
          type: "result",
          result: {
            ok: false,
            // Transport abort alone ≠ Product status=stopped (Runner stop must be acked).
            status: "provider_unavailable",
            code: aborted
              ? "NORA_TURN_TRANSPORT_INTERRUPTED"
              : "PROGRESSIVE_TRANSPORT_ERROR",
            message: aborted
              ? "Connexion interrompue — arrêt Runner non confirmé dans ce transport."
              : error instanceof Error
                ? error.message
                : "Erreur de flux progressif.",
            mode: "unavailable",
            retryable: !aborted,
          },
        });
      } catch {
        /* writer already failed — fail closed */
      }
    } finally {
      try {
        await writeChain.catch(() => undefined);
        streamClosed = true;
        await writer.close();
      } catch {
        streamClosed = true;
      }
    }
  })();

  return new Response(stream.readable, {
    headers: {
      "content-type": "application/x-ndjson; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
