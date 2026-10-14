/** @vitest-environment node */
/**
 * P6 Nora UX cumulative closure — presentation helpers (DET, ZERO OpenAI).
 * Includes R-UX-01 / R-UX-03 targeted findings.
 */
import { describe, expect, it } from "vitest";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";
import {
  presentActivityEventLabel,
  presentLiveActivityTimeline,
} from "@/features/pre-m6-product-ui/surfaces/presentLiveActivityTimeline";
import {
  CONVERSATION_SOURCES_SCOPE_DISCLAIMER,
  documentaryGroupKey,
  presentConversationSources,
} from "@/features/pre-m6-product-ui/surfaces/presentConversationSources";

const P3 =
  "projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md";
const P4 =
  "projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md";

describe("presentLiveActivityTimeline (R-UX-03)", () => {
  it("UX-01/02/03/04 — labels only, chrono order, collapse duplicates", () => {
    const events: NoraLiveActivityEvent[] = [
      {
        kind: "mission_started",
        seq: 1,
        at: "t1",
        label: "Mission démarrée",
      },
      {
        kind: "tool_started",
        seq: 2,
        at: "t2",
        label: "Consultation…",
        toolName: "git_local_read_file",
        sourcePath: P3,
      },
      {
        kind: "tool_started",
        seq: 3,
        at: "t3",
        label: "Consultation…",
        toolName: "git_local_read_file",
        sourcePath: P3,
      },
      {
        kind: "activity_update",
        seq: 4,
        at: "t4",
        label: "Nora poursuit la comparaison.",
      },
    ];
    const lines = presentLiveActivityTimeline(events);
    expect(lines.map((l) => l.label)).toEqual([
      "Mission démarrée",
      "Nora consulte P3.",
      "Nora poursuit la comparaison.",
    ]);
    expect(lines.every((l) => !/mission_started|tool_started/.test(l.label))).toBe(
      true,
    );
  });

  it("SRC-12 — tool_completed is passage consult, never full-document claim", () => {
    expect(
      presentActivityEventLabel({
        kind: "tool_completed",
        seq: 1,
        at: "t",
        label: "Document consulté",
        toolName: "git_local_read_file",
        sourcePath: P4,
      }),
    ).toBe("Nora a consulté un passage de P4.");
    expect(
      presentActivityEventLabel({
        kind: "tool_completed",
        seq: 1,
        at: "t",
        label: "Document consulté",
        toolName: "git_local_read_file",
        sourcePath: P4,
      }),
    ).not.toMatch(/terminé la lecture|intégralement|entier/i);
  });

  it("SRC-13 — non-documentary tool_completed is not a document read", () => {
    const label = presentActivityEventLabel({
      kind: "tool_completed",
      seq: 1,
      at: "t",
      label: "status ok",
      toolName: "git_local_get_status",
    });
    expect(label).not.toMatch(/passage|lecture de|document/i);
    expect(label).toMatch(/consultation|status ok/i);
  });

  it("tool_failed uses honest impossibility wording", () => {
    expect(
      presentActivityEventLabel({
        kind: "tool_failed",
        seq: 1,
        at: "t",
        label: "fail",
        toolName: "git_local_read_file",
        sourcePath: P3,
      }),
    ).toBe("Impossible de consulter P3.");
  });
});

describe("presentConversationSources (R-UX-01)", () => {
  it("SRC-01/02/03 — #Lx-y ranges collapse to one P3 group; P4 distinct; ranges kept", () => {
    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-240`,
        summary: `read ${P3} L1-240/780 returned L1-240 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L241-500`,
        summary: `read ${P3} L241-500/780 returned L241-500 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L501-780`,
        summary: `read ${P3} L501-780/780 returned L501-780 (ok) documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P4}#L1-100`,
        summary: `read ${P4} L1-100/400 returned L1-100 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
    ];

    expect(documentaryGroupKey(events[0]!)).toBe(`doc:${P3}`);
    expect(documentaryGroupKey(events[1]!)).toBe(`doc:${P3}`);
    expect(documentaryGroupKey(events[2]!)).toBe(`doc:${P3}`);

    const groups = presentConversationSources(events);
    expect(groups).toHaveLength(2);
    const p3 = groups.find((g) => g.title.includes("P3"));
    const p4 = groups.find((g) => g.title.includes("P4"));
    expect(p3?.eventCount).toBe(3);
    expect(p3?.detailEvents.map((e) => e.pathOrRef)).toEqual([
      `${P3}#L1-240`,
      `${P3}#L241-500`,
      `${P3}#L501-780`,
    ]);
    expect(p3?.qualification).toMatch(/passages|Extraits/i);
    expect(p3?.qualification).not.toMatch(/\bFULL\b|^Document lu en entier/i);
    expect(p4?.eventCount).toBe(1);
  });

  it("SRC-04/05 — REAL summary path groups with bare path", () => {
    const bare: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: P3,
      summary: `read ${P3} L1-40/200 returned L1-40 (ok) hasMore documentHasMore`,
      errorCode: null,
      readOnly: true,
    };
    const ranged: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: `${P3}#L41-80`,
      summary: `read ${P3} L41-80/200 returned L41-80 (ok) hasMore documentHasMore`,
      errorCode: null,
      readOnly: true,
    };
    expect(documentaryGroupKey(bare)).toBe(documentaryGroupKey(ranged));
    const groups = presentConversationSources([bare, ranged]);
    expect(groups).toHaveLength(1);
    expect(groups[0]!.eventCount).toBe(2);
  });

  it("SRC-06 — distinct versioned identities are not merged", () => {
    const a: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/P3.md@abc123",
      summary: "read docs/P3.md@abc123 L1-10/10 returned L1-10 (ok)",
      errorCode: null,
      readOnly: true,
    };
    const b: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/P3.md@def456",
      summary: "read docs/P3.md@def456 L1-10/10 returned L1-10 (ok)",
      errorCode: null,
      readOnly: true,
    };
    expect(documentaryGroupKey(a)).not.toBe(documentaryGroupKey(b));
    expect(presentConversationSources([a, b])).toHaveLength(2);
  });

  it("SRC-07/08/09/11 — search ≠ read; deny≠success; mixed incidents; documentHasMore≠FULL", () => {
    expect(CONVERSATION_SOURCES_SCOPE_DISCLAIMER).toMatch(/cette conversation/i);

    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-40`,
        summary: `read ${P3} L1-40/200 returned L1-40 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: `${P3}#L180-200`,
        summary: "PATH_NOT_ALLOWED",
        errorCode: "PATH_NOT_ALLOWED",
        readOnly: true,
      },
      {
        toolName: "search_files",
        status: "succeeded",
        pathOrRef: null,
        summary: "3 matches",
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: ".env",
        summary: "PATH_NOT_ALLOWED",
        errorCode: "PATH_NOT_ALLOWED",
        readOnly: true,
      },
    ];

    const groups = presentConversationSources(events);
    const p3 = groups.find((g) => g.title.includes("P3"));
    expect(p3?.qualification).toMatch(/passages|Extraits/i);
    expect(p3?.qualification).toMatch(/incident/i);
    expect(p3?.qualification).not.toMatch(/^Lecture refusée$/);
    expect(p3?.detailEvents.some((e) => e.status === "denied")).toBe(true);
    expect(p3?.qualification).not.toMatch(/\bFULL\b/i);

    const search = groups.find((g) => g.title === "search_files");
    expect(search?.qualification).toMatch(/Recherche/i);

    const denied = groups.find((g) => g.title === ".env");
    expect(denied?.qualification).toMatch(/refus/i);
    expect(denied?.detailEvents[0]?.errorCode).toBe("PATH_NOT_ALLOWED");
  });

  it("SRC-10 — FULL only with proven full coverage fact", () => {
    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: "docs/short.md",
        summary:
          "read docs/short.md L1-3/3 returned L1-3 (ok)",
        errorCode: null,
        readOnly: true,
      },
    ];
    const [group] = presentConversationSources(events);
    expect(group!.qualification).not.toBe("FULL");
    expect(group!.qualification).not.toMatch(/^FULL$/);
    if (/entier/i.test(group!.qualification)) {
      expect(group!.qualification).toMatch(/preuve/i);
    }
  });
});
