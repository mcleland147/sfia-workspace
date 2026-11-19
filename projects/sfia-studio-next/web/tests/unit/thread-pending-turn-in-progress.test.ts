import { describe, expect, it } from "vitest";
import {
  recoverOrphanPendingFromMessages,
  shouldRememberPendingOnSendHttpError,
} from "@/domains/pilotage/thread-recovery";

describe("TURN_IN_PROGRESS pending hygiene (CampusNova reconcile)", () => {
  it("does not remember pending for 409 TURN_IN_PROGRESS (orphan key)", () => {
    expect(
      shouldRememberPendingOnSendHttpError({
        httpStatus: 409,
        errorCategory: "TURN_IN_PROGRESS",
      }),
    ).toBe(false);
  });

  it("still remembers pending for other failures", () => {
    expect(
      shouldRememberPendingOnSendHttpError({
        httpStatus: 500,
        errorCategory: "PROVIDER_ERROR",
      }),
    ).toBe(true);
    expect(
      shouldRememberPendingOnSendHttpError({
        httpStatus: 409,
        errorCategory: "PAYLOAD_MISMATCH",
      }),
    ).toBe(true);
  });

  it("recovers orphan pending when thread already has terminal assistant after same user text", () => {
    const content = "Nora, correction inventaire Lille…";
    const hit = recoverOrphanPendingFromMessages({
      pendingContent: content,
      messages: [
        { role: "user", content, status: "COMPLETE" },
        { role: "assistant", content: "## Lille…", status: "COMPLETE" },
      ],
    });
    expect(hit).toEqual({ clear: true, noraStatus: "COMPLETE" });
  });

  it("recovers on UNKNOWN assistant after matching user message", () => {
    const content = "même texte";
    const hit = recoverOrphanPendingFromMessages({
      pendingContent: content,
      messages: [
        { role: "user", content, status: "COMPLETE" },
        { role: "assistant", content: "Nora LIVE UNKNOWN…", status: "UNKNOWN" },
      ],
    });
    expect(hit).toEqual({ clear: true, noraStatus: "UNKNOWN" });
  });

  it("does not clear when assistant still missing or non-terminal", () => {
    const content = "en cours";
    expect(
      recoverOrphanPendingFromMessages({
        pendingContent: content,
        messages: [{ role: "user", content, status: "COMPLETE" }],
      }),
    ).toEqual({ clear: false });
    expect(
      recoverOrphanPendingFromMessages({
        pendingContent: content,
        messages: [
          { role: "user", content, status: "COMPLETE" },
          { role: "assistant", content: "…", status: "RUNNING" },
        ],
      }),
    ).toEqual({ clear: false });
  });
});
