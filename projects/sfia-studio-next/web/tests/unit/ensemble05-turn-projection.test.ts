import { describe, expect, it } from "vitest";
import {
  buildTurnProjection,
  parseTurnProjection,
  resolveActionableProjections,
  TURN_PROJECTION_SCHEMA,
} from "@/domains/conversation/turn-projection";
import {
  clearDraftAfterAck,
  composerDraftStorageKey,
  purgeAllComposerDraftsInTab,
  purgeComposerDraftsForPilot,
  readComposerDraft,
  writeComposerDraft,
} from "@/domains/conversation/composer-draft";

describe("ensemble05 turn projection (M1 / P1-A)", () => {
  it("does NOT build continue choices from clarifications", () => {
    const p = buildTurnProjection({
      messageId: "msg-a",
      status: "COMPLETE",
      finalized: true,
      continueChoices: null,
      toolCallsObserved: 2,
    });
    expect(p.schemaVersion).toBe(TURN_PROJECTION_SCHEMA);
    expect(p.choices).toHaveLength(0);
    expect(p.activity?.kind).toBe("sources_consulted");
  });

  it("builds continue choices only from typed continueChoices", () => {
    const p = buildTurnProjection({
      messageId: "msg-a",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [
        {
          id: "b",
          label: "Approfondir B",
          transmitText: "Approfondissons l'option B.",
        },
        {
          id: "autre",
          label: "Autre approche",
          transmitText: "Explore une autre approche.",
        },
      ],
    });
    expect(p.choices).toHaveLength(2);
    expect(p.choices[0]?.transmitText).toContain("option B");
    expect(p.choices[0]?.label).not.toEqual(p.choices[0]?.transmitText);
  });

  it("ignores malformed continueChoices safely", () => {
    const p = buildTurnProjection({
      messageId: "m",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [
        { id: "", label: "x", transmitText: "y" },
        { id: "ok", label: "OK", transmitText: "Transmettre OK" },
      ],
    });
    expect(p.choices).toHaveLength(1);
    expect(p.choices[0]?.id).toBe("ok");
  });

  it("marks only the latest finalized Nora group actionable", () => {
    const messages = [
      { id: "u1", role: "user" },
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
      { id: "a2", role: "assistant" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "x", label: "Ancien", transmitText: "Ancien" }],
      }),
      buildTurnProjection({
        messageId: "a2",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "y", label: "Nouveau", transmitText: "Nouveau" }],
      }),
    ];
    const views = resolveActionableProjections({ messages, projections });
    expect(views.find((v) => v.messageId === "a1")?.actionable).toBe(false);
    expect(views.find((v) => v.messageId === "a2")?.actionable).toBe(true);
  });

  it("expires choices after a later pilot turn and suspends on UNKNOWN freeze", () => {
    const messages = [
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "x", label: "X", transmitText: "X" }],
      }),
    ];
    expect(
      resolveActionableProjections({ messages, projections })[0]?.actionable,
    ).toBe(false);
    expect(
      resolveActionableProjections({
        messages: [{ id: "a1", role: "assistant" }],
        projections,
        suspendActions: true,
      })[0]?.actionable,
    ).toBe(false);
  });

  it("round-trips parseTurnProjection and rejects foreign schema", () => {
    const built = buildTurnProjection({
      messageId: "m",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [{ id: "g", label: "Go", transmitText: "Go ahead" }],
    });
    expect(parseTurnProjection(built)?.choices[0]?.label).toBe("Go");
    expect(parseTurnProjection({ schemaVersion: "other" })).toBeNull();
  });
});

describe("ensemble05 composer draft (M3 / P2-B)", () => {
  function mockSessionStorage() {
    const store = new Map<string, string>();
    const sessionStorageMock = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      removeItem: (k: string) => {
        store.delete(k);
      },
      clear: () => store.clear(),
      key: (i: number) => [...store.keys()][i] ?? null,
      get length() {
        return store.size;
      },
    };
    Object.defineProperty(globalThis, "sessionStorage", {
      value: sessionStorageMock,
      configurable: true,
    });
    return store;
  }

  it("isolates by pilot+project and refuses late ACK wipe of newer draft", () => {
    const store = mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "brouillon A",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      })?.text,
    ).toBe("brouillon A");
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj2",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3200",
      }),
    ).toBeNull();

    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 1,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(false);
    expect(
      store.has(
        composerDraftStorageKey({
          pilotId: "p1",
          projectId: "proj1",
          lane: "host:127.0.0.1:3100",
        }),
      ),
    ).toBe(true);

    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 2,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(true);
  });

  it("purges all drafts for a pilot on logout/identity change", () => {
    mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "secret A",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj2",
      lane: "host:127.0.0.1:3100",
      text: "secret B",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p2",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "other pilot",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    purgeComposerDraftsForPilot("p1");
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      })?.text,
    ).toBe("other pilot");
  });

  it("C3 — purgeAllComposerDraftsInTab clears every draft key in the tab", () => {
    mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "keep-secret",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p2",
      projectId: "proj9",
      lane: "host:127.0.0.1:3100",
      text: "other",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    purgeAllComposerDraftsInTab();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj9",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
  });
});
