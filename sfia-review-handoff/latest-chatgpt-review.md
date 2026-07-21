# Review pack Full — Post-merge PR #248 OPS1 I2

## Métadonnées

- Date / heure / fuseau : 2026-07-21 07:06:24 CEST
- Repo : mcleland147/sfia-workspace
- Cycle : post-merge
- Gate Morris : go merge
- Incrément : OPS1 I2
- Review pack : Full
- Review Handoff Git : required
- Mode handoff : publish-in-cycle

## Décision Morris

Merge autorisé de la PR OPS1 I2 live conversation modes.

## Git

- origin/main avant : `abd0541e23fcbc279196d9f862b7bddc86623eff`
- origin/main après / merge commit : `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- PR : https://github.com/mcleland147/sfia-workspace/pull/248
- État : MERGED
- Merged at : 2026-07-21T05:06:02Z
- Titre : feat(ops1): deliver I2 live conversation modes
- Mode merge : squash

## Métadonnées commit merge

```text
commit ae39a8c0375c2f8980d3ee394fa679dee8b06c0f
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Tue Jul 21 07:06:02 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Tue Jul 21 07:06:02 2026 +0200

    feat(ops1): deliver I2 live conversation modes (#248)

    Co-authored-by: Morris Cleland <morris@macbook-air1.home>
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../app/__tests__/ops1/Ops1SessionScreen.test.tsx  | 185 +++++++----
 .../app/__tests__/ops1/conversation-domain.test.ts | 115 +++++++
 .../__tests__/ops1/conversation-repository.test.ts | 293 ++++++++++++++++++
 .../app/__tests__/ops1/globalModeBadge.test.ts     |  85 +++++
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx | 147 +++++++++
 .../app/__tests__/ops1/openai-provider.test.ts     |  62 ++++
 .../sfia-studio/app/app/nouvelle-demande/page.tsx  |  36 +--
 .../app/components/shell/StudioShell.tsx           |   1 +
 .../sfia-studio/app/components/shell/Topbar.tsx    |  20 +-
 .../sfia-studio/app/e2e/ops1-i1-session.spec.ts    |   7 +-
 .../app/e2e/ops1-i2-conversation.spec.ts           | 175 +++++++++++
 .../app/e2e/ops1-i2-live-locked-capture.spec.ts    |  65 ++++
 projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts | 110 +++++++
 .../nouvelle-demande/NouvelleDemandePageClient.tsx |  95 ++++++
 .../app/features/ops1/Ops1SessionScreen.tsx        | 341 +++++++++++++++++++--
 .../app/features/ops1/ops1-session.module.css      |  73 +++++
 projects/sfia-studio/app/lib/ops1/actions.ts       | 185 ++++++++---
 .../app/lib/ops1/conversation/config.ts            |  42 +++
 .../app/lib/ops1/conversation/fakeProvider.ts      |  50 +++
 .../app/lib/ops1/conversation/openaiProvider.ts    |  73 +++++
 .../app/lib/ops1/conversation/provider.ts          |  25 ++
 .../app/lib/ops1/conversation/service.ts           | 201 ++++++++++++
 .../sfia-studio/app/lib/ops1/conversation/types.ts |  89 ++++++
 projects/sfia-studio/app/lib/ops1/db.ts            | 225 +++++++++++++-
 projects/sfia-studio/app/lib/ops1/errors.ts        |   2 +
 projects/sfia-studio/app/lib/ops1/fixtureReply.ts  |   2 +-
 .../sfia-studio/app/lib/ops1/globalModeBadge.ts    |  76 +++++
 projects/sfia-studio/app/lib/ops1/ids.ts           |   4 +
 projects/sfia-studio/app/lib/ops1/index.ts         |   9 +
 projects/sfia-studio/app/lib/ops1/repository.ts    | 301 +++++++++++++++++-
 projects/sfia-studio/app/lib/ops1/types.ts         |  61 +++-
 projects/sfia-studio/app/lib/ops1/validation.ts    |  19 +-
 projects/sfia-studio/app/package-lock.json         |  33 +-
 projects/sfia-studio/app/package.json              |   1 +
 projects/sfia-studio/app/playwright.config.ts      |  18 +-
 35 files changed, 3029 insertions(+), 197 deletions(-)

```

## Fichiers sur main

```text
projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts
projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
projects/sfia-studio/app/__tests__/ops1/globalModeBadge.test.ts
projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
projects/sfia-studio/app/app/nouvelle-demande/page.tsx
projects/sfia-studio/app/components/shell/StudioShell.tsx
projects/sfia-studio/app/components/shell/Topbar.tsx
projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts
projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
projects/sfia-studio/app/features/ops1/ops1-session.module.css
projects/sfia-studio/app/lib/ops1/actions.ts
projects/sfia-studio/app/lib/ops1/conversation/config.ts
projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
projects/sfia-studio/app/lib/ops1/conversation/provider.ts
projects/sfia-studio/app/lib/ops1/conversation/service.ts
projects/sfia-studio/app/lib/ops1/conversation/types.ts
projects/sfia-studio/app/lib/ops1/db.ts
projects/sfia-studio/app/lib/ops1/errors.ts
projects/sfia-studio/app/lib/ops1/fixtureReply.ts
projects/sfia-studio/app/lib/ops1/globalModeBadge.ts
projects/sfia-studio/app/lib/ops1/ids.ts
projects/sfia-studio/app/lib/ops1/index.ts
projects/sfia-studio/app/lib/ops1/repository.ts
projects/sfia-studio/app/lib/ops1/types.ts
projects/sfia-studio/app/lib/ops1/validation.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
projects/sfia-studio/app/playwright.config.ts
```

## Preuves sur main

- `projects/sfia-studio/app/lib/ops1/globalModeBadge.ts` contient `MODE GPT LIVE` : OK
- `projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts` contient `OpenAIConversationProvider` : OK
- `projects/sfia-studio/app/package.json` contient `"openai"` : OK

## Diff utile complet (squash sur main)

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
index cb9eb9a..579223e 100644
--- a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -1,98 +1,173 @@
-import { render, screen, waitFor } from "@testing-library/react";
+import { cleanup, render, screen, waitFor } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
-import { beforeEach, describe, expect, it, vi } from "vitest";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

 const create = vi.fn();
 const get = vi.fn();
-const append = vi.fn();
+const send = vi.fn();
+const liveConfig = vi.fn();

 vi.mock("@/lib/ops1/actions", () => ({
   ops1CreateSessionAction: (...args: unknown[]) => create(...args),
   ops1GetSessionAction: (...args: unknown[]) => get(...args),
-  ops1AppendUserMessageAction: (...args: unknown[]) => append(...args),
+  ops1SendMessageAction: (...args: unknown[]) => send(...args),
+  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1AppendUserMessageAction: vi.fn(),
 }));

-describe("Ops1SessionScreen", () => {
+const fixtureSession = {
+  sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
+  projectKey: "sfia-studio-ops1",
+  status: "OPEN" as const,
+  createdAt: "2026-07-20T21:00:00+02:00",
+  updatedAt: "2026-07-20T21:00:00+02:00",
+  parentSessionId: null,
+  fixtureMode: true,
+  conversationMode: "fixture" as const,
+};
+
+const liveSession = {
+  ...fixtureSession,
+  fixtureMode: false,
+  conversationMode: "live" as const,
+};
+
+describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
+  afterEach(() => cleanup());
+
   beforeEach(() => {
     vi.clearAllMocks();
     window.sessionStorage.clear();
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: {
+        available: false,
+        missing: ["OPENAI_API_KEY", "OPENAI_MODEL"],
+        testProvider: false,
+      },
+    });
   });

-  it("shows empty state and fixture badge", async () => {
+  it("shows mode selection and live unavailable", async () => {
     render(<Ops1SessionScreen />);
     await waitFor(() => {
       expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
     });
-    expect(screen.getByText("MODE FIXTURE / NON LIVE")).toBeInTheDocument();
-    expect(screen.getByText("Aucune session active")).toBeInTheDocument();
+    expect(screen.getByTestId("ops1-create-mode-selector")).toBeInTheDocument();
+    expect(screen.getByTestId("ops1-badge-live-unavailable")).toBeInTheDocument();
+    expect(screen.getByTestId("ops1-create-mode-live")).toBeDisabled();
   });

-  it("creates OPEN session and shows sessionId", async () => {
+  it("creates fixture session locked and refuses interactive mode change", async () => {
     const user = userEvent.setup();
-    create.mockResolvedValue({
-      ok: true,
-      data: {
-        session: {
-          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
-          projectKey: "sfia-studio-ops1",
-          status: "OPEN",
-          createdAt: "2026-07-20T21:00:00+02:00",
-          updatedAt: "2026-07-20T21:00:00+02:00",
-          parentSessionId: null,
-          fixtureMode: true,
-        },
-      },
-    });
+    create.mockResolvedValue({ ok: true, data: { session: fixtureSession } });
     get.mockResolvedValue({
       ok: true,
       data: {
-        session: {
-          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
-          projectKey: "sfia-studio-ops1",
-          status: "OPEN",
-          createdAt: "2026-07-20T21:00:00+02:00",
-          updatedAt: "2026-07-20T21:00:00+02:00",
-          parentSessionId: null,
-          fixtureMode: true,
-        },
+        session: fixtureSession,
         turns: [],
+        attempts: [],
+        presentation: "fixture",
       },
     });
-
     render(<Ops1SessionScreen />);
     await waitFor(() =>
-      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
-        0,
-      ),
+      expect(
+        screen.getAllByTestId("ops1-create-session").length,
+      ).toBeGreaterThan(0),
     );
     await user.click(screen.getAllByTestId("ops1-create-session")[0]);
+    expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
+      /FIXTURE — verrouillé/,
+    );
+    expect(screen.getByTestId("ops1-mode-fixture")).toBeDisabled();
+    expect(screen.getByTestId("ops1-mode-live")).toBeDisabled();
+    expect(create.mock.calls[0][0]).toEqual({ mode: "fixture" });
+  });
+
+  it("shows test provider badges — never LIVE GPT", async () => {
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [], testProvider: true },
+    });
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: liveSession,
+        turns: [
+          {
+            turnId: "t1",
+            sessionId: liveSession.sessionId,
+            sequence: 1,
+            role: "user",
+            content: "q",
+            fixture: false,
+            createdAt: "t",
+          },
+          {
+            turnId: "t2",
+            sessionId: liveSession.sessionId,
+            sequence: 2,
+            role: "assistant_live",
+            content: "[TEST/FAKE · NON LIVE] reply",
+            fixture: false,
+            createdAt: "t",
+          },
+        ],
+        attempts: [],
+        presentation: "test_provider",
+      },
+    });
+    window.sessionStorage.setItem(
+      "sfia-ops1-i1-active-session",
+      liveSession.sessionId,
+    );
+    render(<Ops1SessionScreen />);
     await waitFor(() => {
-      expect(screen.getByTestId("ops1-session-id")).toHaveTextContent(
-        "ops1-sess-11111111-1111-4111-8111-111111111111",
-      );
+      expect(screen.getByTestId("ops1-badge-test-provider")).toBeInTheDocument();
     });
-    expect(screen.getByTestId("ops1-session-status")).toHaveTextContent("OPEN");
+    expect(screen.queryByTestId("ops1-badge-live")).toBeNull();
+    expect(screen.getByText("TEST / FAKE")).toBeInTheDocument();
+    expect(screen.getByText("Assistant test")).toBeInTheDocument();
+    expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
+      /verrouillé/,
+    );
   });

-  it("shows create error", async () => {
-    const user = userEvent.setup();
-    create.mockResolvedValue({
-      ok: false,
-      code: "PERSISTENCE",
-      message: "Échec de création de la session.",
+  it("shows GPT LIVE badges for real live presentation", async () => {
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [], testProvider: false },
     });
-    render(<Ops1SessionScreen />);
-    await waitFor(() =>
-      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
-        0,
-      ),
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: liveSession,
+        turns: [
+          {
+            turnId: "t2",
+            sessionId: liveSession.sessionId,
+            sequence: 2,
+            role: "assistant_live",
+            content: "hello from openai",
+            fixture: false,
+            createdAt: "t",
+          },
+        ],
+        attempts: [],
+        presentation: "openai_live",
+      },
+    });
+    window.sessionStorage.setItem(
+      "sfia-ops1-i1-active-session",
+      liveSession.sessionId,
     );
-    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
+    render(<Ops1SessionScreen />);
     await waitFor(() => {
-      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
-        "Échec de création de la session.",
-      );
+      expect(screen.getByTestId("ops1-badge-live")).toHaveTextContent("GPT LIVE");
     });
+    expect(screen.queryByText("TEST / FAKE")).toBeNull();
+    expect(screen.getByText("Assistant live")).toBeInTheDocument();
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts b/projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts
new file mode 100644
index 0000000..624d7fb
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts
@@ -0,0 +1,115 @@
+/** @vitest-environment node */
+import { describe, expect, it } from "vitest";
+import {
+  buildProviderMessagesFromJournal,
+} from "@/lib/ops1/conversation/types";
+import { getLiveConversationAvailability } from "@/lib/ops1/conversation/config";
+import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
+import { inferLegacyConversationMode } from "@/lib/ops1/db";
+import type { JournalTurn } from "@/lib/ops1/types";
+import { LEGACY_SESSION_MODE_AMBIGUOUS } from "@/lib/ops1/types";
+import { assertConversationMode, assertTurnRole } from "@/lib/ops1/validation";
+import { Ops1Error } from "@/lib/ops1/errors";
+
+function turn(
+  partial: Pick<JournalTurn, "role" | "content" | "sequence">,
+): JournalTurn {
+  return {
+    turnId: `ops1-turn-${partial.sequence}`,
+    sessionId: "ops1-sess-00000000-0000-4000-8000-000000000001",
+    fixture: partial.role === "assistant_fixture",
+    createdAt: "2026-07-20T22:00:00+02:00",
+    ...partial,
+  };
+}
+
+describe("ops1 conversation domain (immutable mode)", () => {
+  it("builds live context from user + assistant_live only", () => {
+    const messages = buildProviderMessagesFromJournal(
+      [
+        turn({ sequence: 1, role: "user", content: "u1" }),
+        turn({ sequence: 2, role: "assistant_live", content: "a1" }),
+        turn({ sequence: 3, role: "user", content: "u2" }),
+      ],
+      "live",
+    );
+    expect(messages).toEqual([
+      { role: "user", content: "u1" },
+      { role: "assistant", content: "a1" },
+      { role: "user", content: "u2" },
+    ]);
+  });
+
+  it("refuses fixture assistant in live context without filtering", () => {
+    expect(() =>
+      buildProviderMessagesFromJournal(
+        [
+          turn({ sequence: 1, role: "user", content: "u1" }),
+          turn({ sequence: 2, role: "assistant_fixture", content: "bad" }),
+        ],
+        "live",
+      ),
+    ).toThrow(Ops1Error);
+  });
+
+  it("refuses live assistant in fixture context", () => {
+    expect(() =>
+      buildProviderMessagesFromJournal(
+        [
+          turn({ sequence: 1, role: "user", content: "u1" }),
+          turn({ sequence: 2, role: "assistant_live", content: "bad" }),
+        ],
+        "fixture",
+      ),
+    ).toThrow(Ops1Error);
+  });
+
+  it("fake provider returns usage and non-live tagged text", async () => {
+    const provider = new FakeConversationProvider();
+    const result = await provider.complete([
+      { role: "user", content: "bonjour" },
+    ]);
+    expect(result.text).toContain("TEST/FAKE");
+    expect(result.text).toContain("NON LIVE");
+  });
+
+  it("reports missing live config without exposing secrets", () => {
+    const prevKey = process.env.OPENAI_API_KEY;
+    const prevModel = process.env.OPENAI_MODEL;
+    delete process.env.OPENAI_API_KEY;
+    delete process.env.OPENAI_MODEL;
+    const status = getLiveConversationAvailability();
+    expect(status.available).toBe(false);
+    if (prevKey !== undefined) process.env.OPENAI_API_KEY = prevKey;
+    if (prevModel !== undefined) process.env.OPENAI_MODEL = prevModel;
+  });
+
+  it("infers legacy modes and detects ambiguity", () => {
+    expect(inferLegacyConversationMode(["user", "assistant_fixture"], [])).toBe(
+      "fixture",
+    );
+    expect(inferLegacyConversationMode(["user", "assistant_live"], [])).toBe(
+      "live",
+    );
+    expect(inferLegacyConversationMode(["user"], ["openai"])).toBe("live");
+    expect(() =>
+      inferLegacyConversationMode(
+        ["assistant_fixture", "assistant_live"],
+        [],
+      ),
+    ).toThrow(Ops1Error);
+    try {
+      inferLegacyConversationMode(
+        ["assistant_fixture", "assistant_live"],
+        [],
+      );
+    } catch (e) {
+      expect((e as Ops1Error).safeMessage).toBe(LEGACY_SESSION_MODE_AMBIGUOUS);
+    }
+  });
+
+  it("accepts assistant_live role and conversation modes", () => {
+    expect(assertTurnRole("assistant_live")).toBe("assistant_live");
+    expect(assertConversationMode("live")).toBe("live");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts b/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
new file mode 100644
index 0000000..d0125d7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
@@ -0,0 +1,293 @@
+/** @vitest-environment node */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  appendTurn,
+  completeConversationAttemptFailure,
+  createOpenSession,
+  getConversationAttempt,
+  getSession,
+  listConversationAttempts,
+  listTurns,
+  resetOps1DbForTests,
+  startConversationAttempt,
+} from "@/lib/ops1/repository";
+import { openOps1Db, migrateOps1Schema } from "@/lib/ops1/db";
+import { sendConversationMessage } from "@/lib/ops1/conversation/service";
+import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
+import { DatabaseSync } from "node:sqlite";
+import type {
+  ConversationProvider,
+  ProviderChatMessage,
+  ProviderCompletionResult,
+} from "@/lib/ops1/conversation/types";
+import { Ops1Error } from "@/lib/ops1/errors";
+import { LEGACY_SESSION_MODE_AMBIGUOUS } from "@/lib/ops1/types";
+
+describe("ops1 i2 repository + immutable session mode", () => {
+  let tmpRoot: string;
+
+  beforeEach(() => {
+    resetOps1DbForTests();
+    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-"));
+    process.env.OPS1_EXEC_ROOT = tmpRoot;
+  });
+
+  afterEach(() => {
+    resetOps1DbForTests();
+    delete process.env.OPS1_EXEC_ROOT;
+    fs.rmSync(tmpRoot, { recursive: true, force: true });
+  });
+
+  it("creates fixture and live sessions with persisted immutable mode", () => {
+    const f = createOpenSession("fixture");
+    expect(f.session.conversationMode).toBe("fixture");
+    expect(getSession(f.session.sessionId)?.conversationMode).toBe("fixture");
+
+    const l = createOpenSession("live");
+    expect(l.session.conversationMode).toBe("live");
+    expect(getSession(l.session.sessionId)?.conversationMode).toBe("live");
+  });
+
+  it("migrates I1 DB and backfills conversation_mode", () => {
+    const dbPath = path.join(tmpRoot, "legacy.sqlite");
+    const legacy = new DatabaseSync(dbPath);
+    legacy.exec(`
+      PRAGMA foreign_keys = ON;
+      CREATE TABLE cycle_sessions (
+        session_id TEXT PRIMARY KEY NOT NULL,
+        project_key TEXT NOT NULL,
+        status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
+        created_at TEXT NOT NULL,
+        updated_at TEXT NOT NULL,
+        parent_session_id TEXT,
+        fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
+      );
+      CREATE TABLE journal_turns (
+        turn_id TEXT PRIMARY KEY NOT NULL,
+        session_id TEXT NOT NULL,
+        sequence INTEGER NOT NULL,
+        role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
+        content TEXT NOT NULL,
+        fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
+        created_at TEXT NOT NULL,
+        UNIQUE (session_id, sequence),
+        FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+      );
+      INSERT INTO cycle_sessions VALUES (
+        'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
+        'sfia-studio-ops1', 'OPEN', 't', 't', NULL, 1
+      );
+      INSERT INTO journal_turns VALUES (
+        'ops1-turn-1', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
+        1, 'user', 'hello i1', 1, 't'
+      );
+      INSERT INTO journal_turns VALUES (
+        'ops1-turn-2', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
+        2, 'assistant_fixture', 'reply', 1, 't'
+      );
+    `);
+    legacy.close();
+
+    const db = new DatabaseSync(dbPath);
+    migrateOps1Schema(db);
+    const row = db
+      .prepare(
+        `SELECT conversation_mode FROM cycle_sessions WHERE session_id = ?`,
+      )
+      .get("ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa") as {
+      conversation_mode: string;
+    };
+    expect(row.conversation_mode).toBe("fixture");
+    db.close();
+  });
+
+  it("detects ambiguous legacy session on migration", () => {
+    const dbPath = path.join(tmpRoot, "ambiguous.sqlite");
+    const legacy = new DatabaseSync(dbPath);
+    legacy.exec(`
+      PRAGMA foreign_keys = ON;
+      CREATE TABLE cycle_sessions (
+        session_id TEXT PRIMARY KEY NOT NULL,
+        project_key TEXT NOT NULL,
+        status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
+        created_at TEXT NOT NULL,
+        updated_at TEXT NOT NULL,
+        parent_session_id TEXT,
+        fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
+      );
+      CREATE TABLE journal_turns (
+        turn_id TEXT PRIMARY KEY NOT NULL,
+        session_id TEXT NOT NULL,
+        sequence INTEGER NOT NULL,
+        role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
+        content TEXT NOT NULL,
+        fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
+        created_at TEXT NOT NULL,
+        UNIQUE (session_id, sequence),
+        FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+      );
+      INSERT INTO cycle_sessions VALUES (
+        'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
+        'sfia-studio-ops1', 'OPEN', 't', 't', NULL, 1
+      );
+      INSERT INTO journal_turns VALUES (
+        't1', 'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
+        1, 'assistant_fixture', 'a', 1, 't'
+      );
+      INSERT INTO journal_turns VALUES (
+        't2', 'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
+        2, 'assistant_live', 'b', 0, 't'
+      );
+    `);
+    legacy.close();
+    const db = new DatabaseSync(dbPath);
+    expect(() => migrateOps1Schema(db)).toThrow(Ops1Error);
+    try {
+      migrateOps1Schema(db);
+    } catch (e) {
+      expect((e as Ops1Error).safeMessage).toBe(LEGACY_SESSION_MODE_AMBIGUOUS);
+    }
+    db.close();
+  });
+
+  it("persists live multi-turn with ordered history; rejects mode mismatch before write", async () => {
+    const { session } = createOpenSession("live");
+    const provider = new FakeConversationProvider({
+      scripted: ["A1 TEST/FAKE", "A2 TEST/FAKE", "A3 TEST/FAKE"],
+    });
+    const histories: number[] = [];
+    const wrapping: ConversationProvider = {
+      providerId: "fake-test",
+      complete: async (
+        messages: ProviderChatMessage[],
+      ): Promise<ProviderCompletionResult> => {
+        histories.push(messages.length);
+        return provider.complete(messages);
+      },
+    };
+
+    await sendConversationMessage({
+      sessionId: session.sessionId,
+      content: "tour 1",
+      provider: wrapping,
+    });
+    await sendConversationMessage({
+      sessionId: session.sessionId,
+      content: "tour 2",
+      provider: wrapping,
+    });
+    const third = await sendConversationMessage({
+      sessionId: session.sessionId,
+      content: "tour 3",
+      provider: wrapping,
+    });
+
+    expect(histories).toEqual([1, 3, 5]);
+    expect(third.assistantTurn?.role).toBe("assistant_live");
+    expect(listTurns(session.sessionId)).toHaveLength(6);
+
+    const before = listTurns(session.sessionId).length;
+    await expect(
+      sendConversationMessage({
+        sessionId: session.sessionId,
+        content: "should fail",
+        requestedMode: "fixture",
+      }),
+    ).rejects.toBeInstanceOf(Ops1Error);
+    expect(listTurns(session.sessionId)).toHaveLength(before);
+  });
+
+  it("fixture session refuses live requestedMode without provider call", async () => {
+    const { session } = createOpenSession("fixture");
+    let called = false;
+    const provider: ConversationProvider = {
+      providerId: "fake-test",
+      complete: async () => {
+        called = true;
+        return {
+          text: "nope",
+          usage: {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: "x",
+            providerResponseId: "x",
+          },
+        };
+      },
+    };
+    await expect(
+      sendConversationMessage({
+        sessionId: session.sessionId,
+        content: "x",
+        requestedMode: "live",
+        provider,
+      }),
+    ).rejects.toBeInstanceOf(Ops1Error);
+    expect(called).toBe(false);
+    expect(listTurns(session.sessionId)).toHaveLength(0);
+    expect(listConversationAttempts(session.sessionId)).toHaveLength(0);
+  });
+
+  it("keeps user turn and marks attempt failed without fake assistant on provider error", async () => {
+    const { session } = createOpenSession("live");
+    const provider = new FakeConversationProvider({ failOnCall: 1 });
+    const result = await sendConversationMessage({
+      sessionId: session.sessionId,
+      content: "will fail",
+      provider,
+    });
+    expect(result.assistantTurn).toBeNull();
+    expect(listTurns(session.sessionId)).toHaveLength(1);
+    expect(listConversationAttempts(session.sessionId)[0].status).toBe(
+      "failed",
+    );
+  });
+
+  it("fixture mode never creates conversation_attempts or live roles", async () => {
+    const { session } = createOpenSession("fixture");
+    await sendConversationMessage({
+      sessionId: session.sessionId,
+      content: "fixture only",
+    });
+    expect(listTurns(session.sessionId).map((t) => t.role)).toEqual([
+      "user",
+      "assistant_fixture",
+    ]);
+    expect(listConversationAttempts(session.sessionId)).toHaveLength(0);
+  });
+
+  it("start/fail attempt helpers leave no secret fields", () => {
+    const { session } = createOpenSession("live");
+    const { turn } = appendTurn({
+      sessionId: session.sessionId,
+      role: "user",
+      content: "x",
+      fixture: false,
+    });
+    const started = startConversationAttempt({
+      sessionId: session.sessionId,
+      userTurnId: turn.turnId,
+      provider: "fake-test",
+    });
+    const failed = completeConversationAttemptFailure({
+      attemptId: started.attemptId,
+      sessionId: session.sessionId,
+      errorCode: "PROVIDER",
+    });
+    expect(getConversationAttempt(failed.attemptId)?.status).toBe("failed");
+    expect(JSON.stringify(failed)).not.toMatch(/api[_-]?key/i);
+  });
+
+  it("creates fresh schema with conversation_mode", () => {
+    openOps1Db();
+    const db = openOps1Db();
+    const cols = db.prepare(`PRAGMA table_info(cycle_sessions)`).all() as Array<{
+      name: string;
+    }>;
+    expect(cols.map((c) => c.name)).toContain("conversation_mode");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.test.ts b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.test.ts
new file mode 100644
index 0000000..b618d99
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.test.ts
@@ -0,0 +1,85 @@
+import { describe, expect, it } from "vitest";
+import {
+  mapGlobalModeBadge,
+  mapGlobalModeBadgeLabel,
+  resolveGlobalModePresentation,
+} from "@/lib/ops1/globalModeBadge";
+
+describe("globalModeBadge mapping", () => {
+  it("maps fixture presentation", () => {
+    expect(mapGlobalModeBadgeLabel("fixture")).toBe("MODE FIXTURE / NON LIVE");
+    expect(
+      mapGlobalModeBadge({
+        hasSession: true,
+        createMode: "live",
+        presentation: "fixture",
+        testProvider: false,
+        liveAvailable: true,
+      }).label,
+    ).toBe("MODE FIXTURE / NON LIVE");
+  });
+
+  it("maps test provider presentation", () => {
+    expect(mapGlobalModeBadgeLabel("test_provider")).toBe(
+      "TEST PROVIDER / NON LIVE",
+    );
+    expect(
+      mapGlobalModeBadge({
+        hasSession: true,
+        createMode: "live",
+        presentation: "test_provider",
+        testProvider: true,
+        liveAvailable: true,
+      }).label,
+    ).toBe("TEST PROVIDER / NON LIVE");
+  });
+
+  it("maps openai live presentation", () => {
+    expect(mapGlobalModeBadgeLabel("openai_live")).toBe("MODE GPT LIVE");
+    expect(
+      mapGlobalModeBadge({
+        hasSession: true,
+        createMode: "live",
+        presentation: "openai_live",
+        testProvider: false,
+        liveAvailable: true,
+      }).tone,
+    ).toBe("green");
+  });
+
+  it("empty screen uses createMode fixture", () => {
+    expect(
+      resolveGlobalModePresentation({
+        hasSession: false,
+        createMode: "fixture",
+        presentation: "openai_live",
+        testProvider: false,
+        liveAvailable: true,
+      }),
+    ).toBe("fixture");
+  });
+
+  it("empty screen live + real availability → openai_live", () => {
+    expect(
+      resolveGlobalModePresentation({
+        hasSession: false,
+        createMode: "live",
+        presentation: "fixture",
+        testProvider: false,
+        liveAvailable: true,
+      }),
+    ).toBe("openai_live");
+  });
+
+  it("empty screen live + test provider → test_provider", () => {
+    expect(
+      resolveGlobalModePresentation({
+        hasSession: false,
+        createMode: "live",
+        presentation: "fixture",
+        testProvider: true,
+        liveAvailable: true,
+      }),
+    ).toBe("test_provider");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
new file mode 100644
index 0000000..97db07a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
@@ -0,0 +1,147 @@
+import { cleanup, render, screen, waitFor } from "@testing-library/react";
+import userEvent from "@testing-library/user-event";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";
+
+const create = vi.fn();
+const get = vi.fn();
+const send = vi.fn();
+const liveConfig = vi.fn();
+
+vi.mock("next/navigation", () => ({
+  useSearchParams: () => new URLSearchParams(),
+}));
+
+vi.mock("@/lib/ops1/actions", () => ({
+  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
+  ops1GetSessionAction: (...args: unknown[]) => get(...args),
+  ops1SendMessageAction: (...args: unknown[]) => send(...args),
+  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1AppendUserMessageAction: vi.fn(),
+}));
+
+const fixtureSession = {
+  sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
+  projectKey: "sfia-studio-ops1",
+  status: "OPEN" as const,
+  createdAt: "2026-07-20T21:00:00+02:00",
+  updatedAt: "2026-07-20T21:00:00+02:00",
+  parentSessionId: null,
+  fixtureMode: true,
+  conversationMode: "fixture" as const,
+};
+
+describe("global mode badge on nouvelle-demande shell", () => {
+  afterEach(() => cleanup());
+
+  beforeEach(() => {
+    vi.clearAllMocks();
+    window.sessionStorage.clear();
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: {
+        available: false,
+        missing: ["OPENAI_API_KEY", "OPENAI_MODEL"],
+        testProvider: false,
+      },
+    });
+  });
+
+  it("shows MODE FIXTURE on empty screen", async () => {
+    render(<NouvelleDemandePageClient />);
+    await waitFor(() => {
+      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
+        "MODE FIXTURE / NON LIVE",
+      );
+    });
+  });
+
+  it("keeps MODE FIXTURE after fixture session create", async () => {
+    const user = userEvent.setup();
+    create.mockResolvedValue({ ok: true, data: { session: fixtureSession } });
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: fixtureSession,
+        turns: [],
+        attempts: [],
+        presentation: "fixture",
+      },
+    });
+    render(<NouvelleDemandePageClient />);
+    await waitFor(() =>
+      expect(screen.getByTestId("ops1-create-session")).toBeInTheDocument(),
+    );
+    await user.click(screen.getByTestId("ops1-create-session"));
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
+        /FIXTURE — verrouillé/,
+      );
+    });
+    expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
+      "MODE FIXTURE / NON LIVE",
+    );
+    expect(screen.getByTestId("ops1-mode-fixture")).toBeDisabled();
+  });
+
+  it("shows TEST PROVIDER global badge for fake live session", async () => {
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [], testProvider: true },
+    });
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: {
+          ...fixtureSession,
+          fixtureMode: false,
+          conversationMode: "live",
+        },
+        turns: [],
+        attempts: [],
+        presentation: "test_provider",
+      },
+    });
+    window.sessionStorage.setItem(
+      "sfia-ops1-i1-active-session",
+      fixtureSession.sessionId,
+    );
+    render(<NouvelleDemandePageClient />);
+    await waitFor(() => {
+      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
+        "TEST PROVIDER / NON LIVE",
+      );
+    });
+    expect(screen.getByTestId("ops1-badge-test-provider")).toBeInTheDocument();
+  });
+
+  it("shows MODE GPT LIVE for openai presentation", async () => {
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [], testProvider: false },
+    });
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: {
+          ...fixtureSession,
+          fixtureMode: false,
+          conversationMode: "live",
+        },
+        turns: [],
+        attempts: [],
+        presentation: "openai_live",
+      },
+    });
+    window.sessionStorage.setItem(
+      "sfia-ops1-i1-active-session",
+      fixtureSession.sessionId,
+    );
+    render(<NouvelleDemandePageClient />);
+    await waitFor(() => {
+      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
+        "MODE GPT LIVE",
+      );
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
new file mode 100644
index 0000000..b9aa315
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
@@ -0,0 +1,62 @@
+/** @vitest-environment node */
+import { beforeEach, describe, expect, it, vi } from "vitest";
+
+const createMock = vi.fn();
+
+vi.mock("openai", () => ({
+  default: class OpenAI {
+    responses = { create: createMock };
+  },
+}));
+
+describe("OpenAIConversationProvider mapping", () => {
+  beforeEach(() => {
+    vi.clearAllMocks();
+  });
+
+  it("extracts text and usage; requests empty tools", async () => {
+    createMock.mockResolvedValue({
+      id: "resp_123",
+      model: "gpt-test",
+      output_text: "  hello live  ",
+      usage: { input_tokens: 3, output_tokens: 4, total_tokens: 7 },
+    });
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/ops1/conversation/openaiProvider"
+    );
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    const result = await provider.complete([
+      { role: "user", content: "hi" },
+      { role: "assistant", content: "prev" },
+      { role: "user", content: "again" },
+    ]);
+    expect(result.text).toBe("hello live");
+    expect(result.usage).toEqual({
+      inputTokens: 3,
+      outputTokens: 4,
+      totalTokens: 7,
+      model: "gpt-test",
+      providerResponseId: "resp_123",
+    });
+    expect(createMock).toHaveBeenCalledWith(
+      expect.objectContaining({
+        model: "gpt-test",
+        tools: [],
+      }),
+    );
+    const payload = createMock.mock.calls[0][0];
+    expect(payload.input).toHaveLength(3);
+  });
+
+  it("maps provider failures to safe Ops1Error", async () => {
+    createMock.mockRejectedValue(new Error("upstream boom sk-secret"));
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/ops1/conversation/openaiProvider"
+    );
+    const { Ops1Error } = await import("@/lib/ops1/errors");
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    await expect(
+      provider.complete([{ role: "user", content: "x" }]),
+    ).rejects.toBeInstanceOf(Ops1Error);
+  });
+});
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index 5878171..93fdc9a 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -1,37 +1,5 @@
-import { StudioShell } from "@/components/shell/StudioShell";
-import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
+import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

 export default function NouvelleDemandePage() {
-  return (
-    <StudioShell
-      variant="flush"
-      activeRoute="/nouvelle-demande"
-      title="Nouvelle demande"
-      pills={[
-        { label: "MODE FIXTURE / NON LIVE", tone: "orange" },
-        { label: "OPS1 I1", tone: "blueFlush" },
-      ]}
-      copilot={{
-        variant: "flush",
-        name: "Nora · SFIA Copilot",
-        subtitle: "OPS1 I1 — session locale",
-        avatarTone: "blue",
-        levelPill: "L0 humain",
-        summary:
-          "Session CycleSession OPEN et journal fixture. Aucun GPT live, aucun Cursor live, aucune action Markdown.",
-        checklist: [
-          "Créer session OPEN",
-          "Journaliser tours fixture",
-          "Recharger et retrouver le journal",
-          "Aucun effet d’exécution",
-        ],
-        checklistTitle: "Parcours I1",
-        riskTitle: "PÉRIMÈTRE",
-        riskText:
-          "I1 n’ouvre pas I2–I7, la clôture CLOSED, ni la CI. E01-03 hors scope.",
-      }}
-    >
-      <NouvelleDemandeScreen />
-    </StudioShell>
-  );
+  return <NouvelleDemandePageClient />;
 }
diff --git a/projects/sfia-studio/app/components/shell/StudioShell.tsx b/projects/sfia-studio/app/components/shell/StudioShell.tsx
index f7a8721..ef6fbe9 100644
--- a/projects/sfia-studio/app/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio/app/components/shell/StudioShell.tsx
@@ -7,6 +7,7 @@ import shellStyles from "@/styles/shell.module.css";
 interface TopbarPill {
   label: string;
   tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
+  testId?: string;
 }

 interface StudioShellProps {
diff --git a/projects/sfia-studio/app/components/shell/Topbar.tsx b/projects/sfia-studio/app/components/shell/Topbar.tsx
index 7f0e72c..58d7ff5 100644
--- a/projects/sfia-studio/app/components/shell/Topbar.tsx
+++ b/projects/sfia-studio/app/components/shell/Topbar.tsx
@@ -12,6 +12,7 @@ import styles from "./topbar.module.css";
 interface TopbarPill {
   label: string;
   tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
+  testId?: string;
 }

 interface TopbarProps {
@@ -42,9 +43,14 @@ export function Topbar({
             <h1 className={styles.titleFloating}>{title}</h1>
             <div className={styles.pills}>
               {pills.map((pill) => (
-                <StatusPill key={pill.label} tone={pill.tone ?? "orange"}>
-                  {pill.label}
-                </StatusPill>
+                <span
+                  key={pill.label}
+                  data-testid={pill.testId}
+                >
+                  <StatusPill tone={pill.tone ?? "orange"}>
+                    {pill.label}
+                  </StatusPill>
+                </span>
               ))}
             </div>
           </div>
@@ -76,9 +82,11 @@ export function Topbar({
         <h1 className={styles.title}>{title}</h1>
         <div className={styles.pills}>
           {pills.map((pill) => (
-            <StatusPill key={pill.label} tone={pill.tone ?? "blueFlush"}>
-              {pill.label}
-            </StatusPill>
+            <span key={pill.label} data-testid={pill.testId}>
+              <StatusPill tone={pill.tone ?? "blueFlush"}>
+                {pill.label}
+              </StatusPill>
+            </span>
           ))}
           <CtaButton href="/nouvelle-demande">Nouvelle demande</CtaButton>
         </div>
diff --git a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
index c6e97f6..36b868f 100644
--- a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
@@ -20,7 +20,7 @@ test.describe("OPS1 I1 session + journal", () => {
     await page.reload();
     await expect(page.getByTestId("ops1-session-root")).toBeVisible();
     await expect(
-      page.getByTestId("ops1-session-root").getByText("MODE FIXTURE / NON LIVE"),
+      page.getByTestId("ops1-session-root").getByText("FIXTURE / NON LIVE"),
     ).toBeVisible();
     await expect(page.getByTestId("ops1-empty-state")).toBeVisible();

@@ -29,9 +29,12 @@ test.describe("OPS1 I1 session + journal", () => {
       fullPage: true,
     });

+    await page.getByTestId("ops1-create-mode-fixture").check();
     await page.getByTestId("ops1-create-session").click();
     await expect(page.getByTestId("ops1-open-session")).toBeVisible();
-    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "FIXTURE — verrouillé",
+    );
     const sessionId = await page.getByTestId("ops1-session-id").innerText();
     expect(sessionId).toMatch(/^ops1-sess-/);

diff --git a/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts b/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
new file mode 100644
index 0000000..86d2a1b
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
@@ -0,0 +1,175 @@
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/screenshots-ops1-i2",
+);
+
+test.beforeAll(() => {
+  fs.mkdirSync(screenshotDir, { recursive: true });
+});
+
+test.describe("OPS1 I2 immutable mode + signalétique", () => {
+  test("mode selection, fixture locked, reload, no execution", async ({
+    page,
+  }) => {
+    await page.goto("/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
+    await expect(page.getByTestId("ops1-create-mode-selector")).toBeVisible();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-mode-selection.png"),
+      fullPage: true,
+    });
+
+    // Also keep legacy name for unavailable state when applicable
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-live-unavailable.png"),
+      fullPage: true,
+    });
+
+    await page.getByTestId("ops1-create-mode-fixture").check();
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "FIXTURE — verrouillé",
+    );
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "MODE FIXTURE / NON LIVE",
+    );
+    await expect(page.getByTestId("ops1-mode-fixture")).toBeDisabled();
+    await expect(page.getByTestId("ops1-mode-live")).toBeDisabled();
+
+    // Attempt to change mode via click — must remain fixture
+    await page.getByTestId("ops1-mode-live").click({ force: true });
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "FIXTURE — verrouillé",
+    );
+    await expect(page.getByTestId("ops1-mode-fixture")).toBeChecked();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-mode-change-refused.png"),
+      fullPage: true,
+    });
+
+    await page.getByTestId("ops1-message-input").fill("Tour fixture 1");
+    await page.getByTestId("ops1-send-message").click();
+    await page.getByTestId("ops1-message-input").fill("Tour fixture 2");
+    await page.getByTestId("ops1-send-message").click();
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("exécute Cursor maintenant");
+    await page.getByTestId("ops1-send-message").click();
+
+    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);
+    await expect(page.getByTestId("ops1-badge-fixture")).toBeVisible();
+    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "MODE FIXTURE / NON LIVE",
+    );
+    await expect(
+      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
+    ).toHaveCount(0);
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-fixture-locked.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-global-badge-fixture.png"),
+      fullPage: true,
+    });
+
+    const sessionId = await page.getByTestId("ops1-session-id").innerText();
+    await page.reload();
+    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "FIXTURE — verrouillé",
+    );
+    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-after-reload-locked.png"),
+      fullPage: true,
+    });
+  });
+
+  test("test provider path — never presented as GPT live", async ({ page }) => {
+    await page.goto("/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+
+    const liveCreate = page.getByTestId("ops1-create-mode-live");
+    if (!(await liveCreate.isEnabled())) {
+      await page.screenshot({
+        path: path.join(screenshotDir, "ops1-i2-test-provider-non-live.png"),
+        fullPage: true,
+      });
+      test.info().annotations.push({
+        type: "note",
+        description: "Live create disabled — fake provider env not active",
+      });
+      return;
+    }
+
+    await liveCreate.check();
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-mode-locked")).toBeVisible();
+    await expect(page.getByTestId("ops1-badge-test-provider")).toBeVisible();
+    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "TEST PROVIDER / NON LIVE",
+    );
+
+    await page.getByTestId("ops1-message-input").fill("Live fake tour 1");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("ops1-turn").nth(1)).toHaveAttribute(
+      "data-role",
+      "assistant_live",
+    );
+    await expect(page.getByText("TEST / FAKE").first()).toBeVisible();
+    await expect(page.getByText("Assistant test").first()).toBeVisible();
+    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "LIVE TECHNIQUE (TEST)",
+    );
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "TEST PROVIDER / NON LIVE",
+    );
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-test-provider-non-live.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-global-badge-test-provider.png"),
+      fullPage: true,
+    });
+    // legacy alias used by prior pack naming
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-live-ready.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-multiturn.png"),
+      fullPage: true,
+    });
+
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("__OPS1_FORCE_PROVIDER_ERROR__");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("ops1-error")).toBeVisible();
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "verrouillé",
+    );
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-provider-error.png"),
+      fullPage: true,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts b/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
new file mode 100644
index 0000000..bbad761
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
@@ -0,0 +1,65 @@
+/**
+ * Real GPT live UI capture — skipped unless OPS1_ALLOW_LIVE_SMOKE=1
+ * and OPS1_CONVERSATION_PROVIDER is not "fake".
+ * Never prints secrets.
+ */
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/screenshots-ops1-i2",
+);
+
+const allow =
+  process.env.OPS1_ALLOW_LIVE_SMOKE === "1" &&
+  process.env.OPS1_CONVERSATION_PROVIDER !== "fake" &&
+  Boolean(process.env.OPENAI_API_KEY?.trim()) &&
+  Boolean(process.env.OPENAI_MODEL?.trim());
+
+test.describe("OPS1 I2 real live locked capture", () => {
+  test.skip(!allow, "Live capture preconditions missing");
+
+  test("GPT LIVE locked session with real assistant_live", async ({ page }) => {
+    fs.mkdirSync(screenshotDir, { recursive: true });
+    await page.goto("/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+
+    await page.getByTestId("ops1-create-mode-live").check();
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
+      "GPT LIVE — verrouillé",
+    );
+    await expect(page.getByTestId("ops1-badge-live")).toBeVisible();
+    await expect(page.getByTestId("ops1-badge-test-provider")).toHaveCount(0);
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "MODE GPT LIVE",
+    );
+
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("Réponds en une seule phrase courte : ping capture I2.");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("ops1-turn").nth(1)).toHaveAttribute(
+      "data-role",
+      "assistant_live",
+    );
+    await expect(page.getByText("GPT LIVE").first()).toBeVisible();
+    await expect(page.getByText("TEST / FAKE")).toHaveCount(0);
+    await expect(page.getByText("Assistant live").first()).toBeVisible();
+    await expect(page.getByTestId("global-mode-badge")).toHaveText(
+      "MODE GPT LIVE",
+    );
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-live-locked.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i2-global-badge-live.png"),
+      fullPage: true,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts b/projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts
new file mode 100644
index 0000000..17b8d94
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts
@@ -0,0 +1,110 @@
+/**
+ * OPS1 I2 live smoke — NOT part of npm test / default E2E.
+ *
+ * Runs only when ALL are set:
+ * - OPENAI_API_KEY
+ * - OPENAI_MODEL
+ * - OPS1_ALLOW_LIVE_SMOKE=1
+ *
+ * Never prints secrets or full env.
+ *
+ * Usage:
+ *   OPS1_ALLOW_LIVE_SMOKE=1 OPENAI_API_KEY=… OPENAI_MODEL=… \
+ *     npx tsx e2e/ops1-i2-live-smoke.ts
+ *   or: node --import tsx e2e/ops1-i2-live-smoke.ts
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+
+function present(name: string): boolean {
+  return Boolean(process.env[name]?.trim());
+}
+
+async function main(): Promise<void> {
+  const allow = process.env.OPS1_ALLOW_LIVE_SMOKE === "1";
+  const hasKey = present("OPENAI_API_KEY");
+  const hasModel = present("OPENAI_MODEL");
+
+  if (!allow || !hasKey || !hasModel) {
+    console.log(
+      JSON.stringify({
+        ok: false,
+        skipped: true,
+        reason: "LIVE_SMOKE_PRECONDITIONS_MISSING",
+        allow,
+        hasKey,
+        hasModel,
+        // never include values
+      }),
+    );
+    process.exit(0);
+  }
+
+  if (process.env.OPS1_CONVERSATION_PROVIDER === "fake") {
+    console.log(
+      JSON.stringify({
+        ok: false,
+        skipped: true,
+        reason: "FAKE_PROVIDER_FORCED_INCOMPATIBLE_WITH_LIVE_SMOKE",
+      }),
+    );
+    process.exit(1);
+  }
+
+  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-live-smoke-"));
+  process.env.OPS1_EXEC_ROOT = tmpRoot;
+
+  const { resetOps1DbForTests, createOpenSession, listTurns, listConversationAttempts } =
+    await import("../lib/ops1/repository");
+  const { sendConversationMessage } = await import(
+    "../lib/ops1/conversation/service"
+  );
+
+  resetOps1DbForTests();
+  const { session } = createOpenSession("live");
+  const result = await sendConversationMessage({
+    sessionId: session.sessionId,
+    content: "Réponds en une phrase courte : ping OPS1 I2 smoke.",
+  });
+
+  const turns = listTurns(session.sessionId);
+  const attempts = listConversationAttempts(session.sessionId);
+  const assistant = result.assistantTurn;
+
+  const report = {
+    ok: Boolean(assistant && assistant.content.trim() && !result.assistantError),
+    mode: result.mode,
+    assistantRole: assistant?.role ?? null,
+    assistantNonEmpty: Boolean(assistant?.content.trim()),
+    turnsCount: turns.length,
+    attemptStatus: attempts[0]?.status ?? null,
+    usage: result.usage
+      ? {
+          provider: result.usage.provider,
+          model: result.usage.model,
+          inputTokens: result.usage.inputTokens,
+          outputTokens: result.usage.outputTokens,
+          totalTokens: result.usage.totalTokens,
+          durationMs: result.usage.durationMs,
+        }
+      : null,
+    error: result.assistantError,
+  };
+
+  console.log(JSON.stringify(report));
+  resetOps1DbForTests();
+  fs.rmSync(tmpRoot, { recursive: true, force: true });
+  process.exit(report.ok ? 0 : 1);
+}
+
+main().catch((error) => {
+  console.log(
+    JSON.stringify({
+      ok: false,
+      error: "LIVE_SMOKE_INTERNAL",
+      code: error instanceof Error ? error.name : "Error",
+    }),
+  );
+  process.exit(1);
+});
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
new file mode 100644
index 0000000..c1f4fb4
--- /dev/null
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
@@ -0,0 +1,95 @@
+"use client";
+
+import { Suspense, useCallback, useState } from "react";
+import { useSearchParams } from "next/navigation";
+import { StudioShell } from "@/components/shell/StudioShell";
+import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
+import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
+import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";
+import {
+  mapGlobalModeBadge,
+  type GlobalModeContext,
+} from "@/lib/ops1/globalModeBadge";
+
+const COPILOT = {
+  variant: "flush" as const,
+  name: "Nora · SFIA Copilot",
+  subtitle: "OPS1 I2 — conversation live/fixture",
+  avatarTone: "blue" as const,
+  levelPill: "L0 humain",
+  summary:
+    "Conversation multi-tours (fixture ou GPT live serveur). Aucune exécution Cursor, aucun gate d’action.",
+  checklist: [
+    "Créer session OPEN",
+    "Échanger fixture ou live",
+    "Persister journal + usage",
+    "Aucun effet d’exécution depuis le chat",
+  ],
+  checklistTitle: "Parcours I2",
+  riskTitle: "PÉRIMÈTRE",
+  riskText:
+    "I2 n’ouvre pas I3–I7, la clôture CLOSED, ni la CI. Chat ≠ exécution.",
+};
+
+function NouvelleDemandeBody({
+  onGlobalModeContextChange,
+}: {
+  onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
+}) {
+  const params = useSearchParams();
+  const vsMode = params.has("vs");
+
+  if (vsMode) {
+    return (
+      <VsDemoRoot>
+        <VsNouvelleDemandeScreen />
+      </VsDemoRoot>
+    );
+  }
+
+  return (
+    <Ops1SessionScreen
+      onGlobalModeContextChange={onGlobalModeContextChange}
+    />
+  );
+}
+
+/** Client shell: global mode badge tracks OPS1 presentation context. */
+export function NouvelleDemandePageClient() {
+  const [modeCtx, setModeCtx] = useState<GlobalModeContext>({
+    hasSession: false,
+    createMode: "fixture",
+    presentation: "fixture",
+    testProvider: false,
+    liveAvailable: false,
+  });
+
+  const onGlobalModeContextChange = useCallback((ctx: GlobalModeContext) => {
+    setModeCtx(ctx);
+  }, []);
+
+  const badge = mapGlobalModeBadge(modeCtx);
+
+  return (
+    <StudioShell
+      variant="flush"
+      activeRoute="/nouvelle-demande"
+      title="Nouvelle demande"
+      pills={[
+        {
+          label: badge.label,
+          tone: badge.tone,
+          testId: "global-mode-badge",
+        },
+        { label: "OPS1 I2", tone: "blueFlush" },
+      ]}
+      copilot={COPILOT}
+    >
+      <Suspense fallback={null}>
+        <NouvelleDemandeBody
+          onGlobalModeContextChange={onGlobalModeContextChange}
+        />
+      </Suspense>
+    </StudioShell>
+  );
+}
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index bb0d8ee..8189cbf 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -4,12 +4,20 @@ import { useCallback, useEffect, useState, useTransition } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
-  ops1AppendUserMessageAction,
   ops1CreateSessionAction,
+  ops1GetLiveConfigAction,
   ops1GetSessionAction,
+  ops1SendMessageAction,
 } from "@/lib/ops1/actions";
-import type { CycleSession, JournalTurn } from "@/lib/ops1/types";
+import type {
+  ConversationMode,
+  ConversationUsageCounters,
+  CycleSession,
+  JournalTurn,
+  ProviderPresentation,
+} from "@/lib/ops1/types";
 import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
+import type { GlobalModeContext } from "@/lib/ops1/globalModeBadge";
 import styles from "./ops1-session.module.css";

 const STORAGE_KEY = "sfia-ops1-i1-active-session";
@@ -23,14 +31,54 @@ type UiPhase =
   | "error_create"
   | "error_journal";

-export function Ops1SessionScreen() {
+function roleLabel(
+  role: JournalTurn["role"],
+  presentation: ProviderPresentation,
+): string {
+  if (role === "user") return "Vous";
+  if (role === "assistant_fixture") return "Assistant fixture";
+  if (presentation === "test_provider") return "Assistant test";
+  return "Assistant live";
+}
+
+export function Ops1SessionScreen({
+  onGlobalModeContextChange,
+}: {
+  onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
+} = {}) {
   const [phase, setPhase] = useState<UiPhase>("boot");
   const [session, setSession] = useState<CycleSession | null>(null);
   const [turns, setTurns] = useState<JournalTurn[]>([]);
   const [draft, setDraft] = useState("");
   const [error, setError] = useState<string | null>(null);
+  const [createMode, setCreateMode] = useState<ConversationMode>("fixture");
+  const [liveAvailable, setLiveAvailable] = useState(false);
+  const [liveMissing, setLiveMissing] = useState<string[]>([]);
+  const [testProvider, setTestProvider] = useState(false);
+  const [presentation, setPresentation] =
+    useState<ProviderPresentation>("fixture");
+  const [lastUsage, setLastUsage] = useState<ConversationUsageCounters | null>(
+    null,
+  );
   const [pending, startTransition] = useTransition();

+  useEffect(() => {
+    onGlobalModeContextChange?.({
+      hasSession: Boolean(session),
+      createMode,
+      presentation,
+      testProvider,
+      liveAvailable,
+    });
+  }, [
+    session,
+    createMode,
+    presentation,
+    testProvider,
+    liveAvailable,
+    onGlobalModeContextChange,
+  ]);
+
   const loadBundle = useCallback(async (sessionId: string) => {
     const result = await ops1GetSessionAction(sessionId);
     if (!result.ok) {
@@ -45,6 +93,7 @@ export function Ops1SessionScreen() {
     }
     setSession(result.data.session);
     setTurns(result.data.turns);
+    setPresentation(result.data.presentation);
     setError(null);
     setPhase("open");
   }, []);
@@ -52,6 +101,12 @@ export function Ops1SessionScreen() {
   useEffect(() => {
     let cancelled = false;
     (async () => {
+      const cfg = await ops1GetLiveConfigAction();
+      if (!cancelled && cfg.ok) {
+        setLiveAvailable(cfg.data.available);
+        setLiveMissing(cfg.data.missing);
+        setTestProvider(cfg.data.testProvider);
+      }
       const stored =
         typeof window !== "undefined"
           ? window.sessionStorage.getItem(STORAGE_KEY)
@@ -68,10 +123,18 @@ export function Ops1SessionScreen() {
   }, [loadBundle]);

   const onCreate = () => {
+    if (createMode === "live" && !liveAvailable) {
+      setError(
+        `Création live impossible (variables manquantes : ${liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).`,
+      );
+      setPhase("error_create");
+      return;
+    }
     setError(null);
+    setLastUsage(null);
     setPhase("creating");
     startTransition(async () => {
-      const result = await ops1CreateSessionAction();
+      const result = await ops1CreateSessionAction({ mode: createMode });
       if (!result.ok) {
         setError(result.message);
         setPhase("error_create");
@@ -80,6 +143,13 @@ export function Ops1SessionScreen() {
       window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
       setSession(result.data.session);
       setTurns([]);
+      setPresentation(
+        result.data.session.conversationMode === "fixture"
+          ? "fixture"
+          : testProvider
+            ? "test_provider"
+            : "openai_live",
+      );
       setPhase("open");
     });
   };
@@ -89,9 +159,10 @@ export function Ops1SessionScreen() {
     setError(null);
     setPhase("sending");
     startTransition(async () => {
-      const result = await ops1AppendUserMessageAction({
+      const result = await ops1SendMessageAction({
         sessionId: session.sessionId,
         content: draft,
+        mode: session.conversationMode,
       });
       if (!result.ok) {
         setError(result.message);
@@ -99,13 +170,16 @@ export function Ops1SessionScreen() {
         return;
       }
       setDraft("");
+      setLastUsage(result.data.usage);
+      setPresentation(result.data.presentation);
+      await loadBundle(session.sessionId);
       if (result.data.assistantError) {
         setError(result.data.assistantError);
         setPhase("error_journal");
       } else {
+        setError(null);
         setPhase("open");
       }
-      await loadBundle(session.sessionId);
     });
   };

@@ -114,22 +188,76 @@ export function Ops1SessionScreen() {
     setSession(null);
     setTurns([]);
     setError(null);
+    setLastUsage(null);
+    setPresentation("fixture");
     setPhase("idle");
   };

+  const lockedMode = session?.conversationMode;
+  const isFixtureSession = lockedMode === "fixture";
+  const isLiveSession = lockedMode === "live";
+  const isTestPresentation = presentation === "test_provider";
+  const isOpenAiLive = presentation === "openai_live";
+
   return (
     <div className={styles.root} data-testid="ops1-session-root">
       <header className={styles.header}>
-        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I1</p>
+        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I2</p>
         <h2 className={styles.title} id="ops1-session-heading">
           Session OPS1
         </h2>
         <p className={styles.lede}>
-          Ouvrir une CycleSession locale, journaliser des tours fixture, et
-          retrouver le journal après rechargement. Aucun fournisseur live.
+          Conversation multi-tours. Le mode est choisi à la création puis
+          verrouillé. Aucune exécution, aucun gate, aucun Cursor depuis le chat.
         </p>
         <div className={styles.badgeRow} aria-live="polite">
-          <StatusPill tone="orange">MODE FIXTURE / NON LIVE</StatusPill>
+          {!session ? (
+            <>
+              <span data-testid="ops1-badge-fixture">
+                <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
+              </span>
+              {testProvider ? (
+                <span data-testid="ops1-badge-test-provider">
+                  <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
+                </span>
+              ) : null}
+              {!liveAvailable ? (
+                <span data-testid="ops1-badge-live-unavailable">
+                  <StatusPill tone="muted">LIVE INDISPONIBLE</StatusPill>
+                </span>
+              ) : testProvider ? (
+                <span data-testid="ops1-badge-live-ready">
+                  <StatusPill tone="blueFlush">
+                    LIVE TECHNIQUE (TEST)
+                  </StatusPill>
+                </span>
+              ) : (
+                <span data-testid="ops1-badge-live-ready">
+                  <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
+                </span>
+              )}
+            </>
+          ) : null}
+          {session && isFixtureSession ? (
+            <span data-testid="ops1-badge-fixture">
+              <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
+            </span>
+          ) : null}
+          {session && isLiveSession && isTestPresentation ? (
+            <span data-testid="ops1-badge-test-provider">
+              <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
+            </span>
+          ) : null}
+          {session && isLiveSession && isOpenAiLive ? (
+            <span data-testid="ops1-badge-live">
+              <StatusPill tone="green">GPT LIVE</StatusPill>
+            </span>
+          ) : null}
+          {session && isLiveSession && isOpenAiLive ? (
+            <span data-testid="ops1-badge-live-ready">
+              <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
+            </span>
+          ) : null}
           {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
         </div>
       </header>
@@ -150,9 +278,63 @@ export function Ops1SessionScreen() {
             Aucune session active
           </h2>
           <p className={styles.muted}>
-            Projet cible : <strong>sfia-studio-ops1</strong>. La session sera
-            créée en statut OPEN avec journal initialisé.
+            Projet cible : <strong>sfia-studio-ops1</strong>. Choisissez le mode
+            avant de créer la session — il sera ensuite immuable.
           </p>
+
+          <div
+            className={styles.modeRow}
+            role="radiogroup"
+            aria-label="Choix du mode de session"
+            data-testid="ops1-create-mode-selector"
+          >
+            <label className={styles.modeOption}>
+              <input
+                type="radio"
+                name="ops1-create-mode"
+                value="fixture"
+                checked={createMode === "fixture"}
+                data-testid="ops1-create-mode-fixture"
+                onChange={() => setCreateMode("fixture")}
+              />
+              Fixture locale — test non live
+            </label>
+            <label className={styles.modeOption}>
+              <input
+                type="radio"
+                name="ops1-create-mode"
+                value="live"
+                checked={createMode === "live"}
+                data-testid="ops1-create-mode-live"
+                disabled={!liveAvailable}
+                onChange={() => {
+                  if (liveAvailable) setCreateMode("live");
+                }}
+              />
+              GPT live — appel fournisseur réel
+              {testProvider ? " (environnement de test)" : ""}
+            </label>
+          </div>
+
+          {!liveAvailable ? (
+            <p
+              className={styles.warn}
+              data-testid="ops1-live-unavailable-notice"
+            >
+              Configuration live indisponible (
+              {liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).
+              L’option GPT live est désactivée. Aucune valeur secrète n’est
+              affichée.
+            </p>
+          ) : null}
+
+          {testProvider ? (
+            <p className={styles.warn} data-testid="ops1-test-env-notice">
+              Environnement de test — aucun appel OpenAI. Les réponses du
+              provider fake ne sont jamais présentées comme GPT live.
+            </p>
+          ) : null}
+
           {error ? (
             <p className={styles.error} role="alert" data-testid="ops1-error">
               {error}
@@ -160,10 +342,14 @@ export function Ops1SessionScreen() {
           ) : null}
           <CtaButton
             onClick={onCreate}
-            disabled={pending}
+            disabled={pending || (createMode === "live" && !liveAvailable)}
             data-testid="ops1-create-session"
           >
-            Nouvelle session
+            {createMode === "live"
+              ? testProvider
+                ? "Créer session live (test provider)"
+                : "Créer session GPT live"
+              : "Créer session fixture"}
           </CtaButton>
         </section>
       ) : null}
@@ -196,6 +382,62 @@ export function Ops1SessionScreen() {
             </div>
           </dl>

+          <div
+            className={styles.lockedMode}
+            data-testid="ops1-mode-locked"
+            aria-live="polite"
+          >
+            <p className={styles.lockedModeLabel} data-testid="ops1-mode-label">
+              {session.conversationMode === "fixture"
+                ? "Mode de session : FIXTURE — verrouillé"
+                : isTestPresentation
+                  ? "Mode de session : LIVE TECHNIQUE (TEST) — verrouillé"
+                  : "Mode de session : GPT LIVE — verrouillé"}
+            </p>
+            <p className={styles.hint} data-testid="ops1-mode-lock-hint">
+              Le mode ne peut pas être modifié dans cette session. Créez une
+              nouvelle session pour changer de mode.
+            </p>
+            {/* Radios disabled — non-interactive lock proof for E2E */}
+            <div
+              className={styles.modeRow}
+              role="group"
+              aria-label="Mode de session verrouillé"
+              data-testid="ops1-mode-selector"
+            >
+              <label className={styles.modeOption}>
+                <input
+                  type="radio"
+                  name="ops1-mode-locked"
+                  value="fixture"
+                  checked={session.conversationMode === "fixture"}
+                  disabled
+                  data-testid="ops1-mode-fixture"
+                  readOnly
+                />
+                Fixture / non live
+              </label>
+              <label className={styles.modeOption}>
+                <input
+                  type="radio"
+                  name="ops1-mode-locked"
+                  value="live"
+                  checked={session.conversationMode === "live"}
+                  disabled
+                  data-testid="ops1-mode-live"
+                  readOnly
+                />
+                Live GPT
+              </label>
+            </div>
+          </div>
+
+          {isTestPresentation ? (
+            <p className={styles.warn} data-testid="ops1-test-env-notice">
+              Environnement de test — aucun appel OpenAI.
+            </p>
+          ) : null}
+
           <div className={styles.journal} data-testid="ops1-journal">
             <h3 className={styles.journalTitle}>Journal</h3>
             {turns.length === 0 ? (
@@ -215,14 +457,22 @@ export function Ops1SessionScreen() {
                     data-testid="ops1-turn"
                     data-role={turn.role}
                     data-sequence={turn.sequence}
+                    data-fixture={turn.fixture ? "1" : "0"}
                   >
                     <div className={styles.turnMeta}>
                       <span>#{turn.sequence}</span>
-                      <span>
-                        {turn.role === "user" ? "Vous" : "Assistant fixture"}
-                      </span>
-                      {turn.fixture ? (
-                        <span className={styles.fixtureTag}>fixture</span>
+                      <span>{roleLabel(turn.role, presentation)}</span>
+                      {turn.role === "assistant_fixture" ? (
+                        <span className={styles.fixtureTag}>
+                          FIXTURE / NON LIVE
+                        </span>
+                      ) : null}
+                      {turn.role === "assistant_live" &&
+                      isTestPresentation ? (
+                        <span className={styles.testTag}>TEST / FAKE</span>
+                      ) : null}
+                      {turn.role === "assistant_live" && isOpenAiLive ? (
+                        <span className={styles.liveTag}>GPT LIVE</span>
                       ) : null}
                     </div>
                     <p className={styles.turnContent}>{turn.content}</p>
@@ -232,12 +482,43 @@ export function Ops1SessionScreen() {
             )}
           </div>

+          {lastUsage ? (
+            <dl className={styles.usage} data-testid="ops1-usage">
+              <div>
+                <dt>Provider</dt>
+                <dd>{lastUsage.provider}</dd>
+              </div>
+              <div>
+                <dt>Modèle</dt>
+                <dd>{lastUsage.model ?? "—"}</dd>
+              </div>
+              <div>
+                <dt>Tokens in/out/total</dt>
+                <dd>
+                  {lastUsage.inputTokens ?? "—"} /{" "}
+                  {lastUsage.outputTokens ?? "—"} /{" "}
+                  {lastUsage.totalTokens ?? "—"}
+                </dd>
+              </div>
+              <div>
+                <dt>Durée (ms)</dt>
+                <dd>{lastUsage.durationMs ?? "—"}</dd>
+              </div>
+            </dl>
+          ) : null}
+
           {error ? (
             <p className={styles.error} role="alert" data-testid="ops1-error">
               {error}
             </p>
           ) : null}

+          {phase === "sending" ? (
+            <p className={styles.muted} data-testid="ops1-sending">
+              Envoi en cours…
+            </p>
+          ) : null}
+
           <form
             className={styles.composer}
             onSubmit={(e) => {
@@ -246,7 +527,13 @@ export function Ops1SessionScreen() {
             }}
           >
             <label className={styles.label} htmlFor="ops1-message">
-              Message local (fixture)
+              Message (
+              {isFixtureSession
+                ? "fixture locale"
+                : isTestPresentation
+                  ? "test provider / non live"
+                  : "GPT live serveur"}
+              )
             </label>
             <textarea
               id="ops1-message"
@@ -257,7 +544,7 @@ export function Ops1SessionScreen() {
               rows={4}
               disabled={pending || phase === "sending"}
               onChange={(e) => setDraft(e.target.value)}
-              placeholder="Saisir un tour utilisateur local…"
+              placeholder="Saisir un tour utilisateur…"
             />
             <div className={styles.composerActions}>
               <CtaButton
@@ -265,7 +552,11 @@ export function Ops1SessionScreen() {
                 disabled={pending || !draft.trim()}
                 data-testid="ops1-send-message"
               >
-                Envoyer (fixture)
+                {isFixtureSession
+                  ? "Envoyer (fixture)"
+                  : isTestPresentation
+                    ? "Envoyer (test provider)"
+                    : "Envoyer (GPT live)"}
               </CtaButton>
               <CtaButton
                 variant="secondary"
@@ -275,8 +566,10 @@ export function Ops1SessionScreen() {
                 Revenir à l’écran vide
               </CtaButton>
             </div>
-            <p className={styles.hint}>
-              Pas d’action d’exécution, pas de gate, pas de Campus360. Max{" "}
+            <p className={styles.hint} data-testid="ops1-no-execution-hint">
+              L’exécution (Cursor, gate, contrat, Git) nécessite un parcours
+              distinct — non disponible dans I2. Un message du type « exécute
+              Cursor » reste du texte conversationnel. Max{" "}
               {OPS1_MAX_MESSAGE_CHARS} caractères.
             </p>
           </form>
diff --git a/projects/sfia-studio/app/features/ops1/ops1-session.module.css b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
index dec85d4..675dc7c 100644
--- a/projects/sfia-studio/app/features/ops1/ops1-session.module.css
+++ b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
@@ -141,6 +141,79 @@
   font-weight: 600;
 }

+.liveTag {
+  color: var(--sfia-green, #1b7a4e);
+  font-weight: 600;
+}
+
+.testTag {
+  color: var(--sfia-purple, #6b4fbb);
+  font-weight: 600;
+}
+
+.lockedMode {
+  display: flex;
+  flex-direction: column;
+  gap: 0.5rem;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  border: 1px solid var(--sfia-border);
+  background: #f7f8fa;
+}
+
+.lockedModeLabel {
+  margin: 0;
+  font-weight: 600;
+  color: var(--sfia-ink);
+}
+
+.modeRow {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 1rem;
+}
+
+.modeOption {
+  display: inline-flex;
+  align-items: center;
+  gap: 0.4rem;
+  font-size: 0.9rem;
+  color: var(--sfia-ink);
+}
+
+.warn {
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  background: #fff8e8;
+  border: 1px solid #efd39a;
+  color: #7a5a12;
+}
+
+.usage {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
+  gap: 0.65rem 1rem;
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  border: 1px dashed var(--sfia-border);
+  background: #fafafa;
+}
+
+.usage dt {
+  font-size: 0.7rem;
+  text-transform: uppercase;
+  letter-spacing: 0.04em;
+  color: var(--sfia-muted);
+}
+
+.usage dd {
+  margin: 0.15rem 0 0;
+  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
+  font-size: 0.85rem;
+}
+
 .turnContent {
   margin: 0;
   white-space: pre-wrap;
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index 9836fd1..d756c8e 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -1,15 +1,29 @@
 "use server";

 import {
-  appendTurn,
   createOpenSession,
   getSessionBundle,
   listOpenSessions,
 } from "./repository";
-import { buildFixtureAssistantReply } from "./fixtureReply";
 import { Ops1Error, toSafeClientError } from "./errors";
-import { assertMessageContent, assertSessionId } from "./validation";
-import type { CycleSession, JournalTurn } from "./types";
+import {
+  assertConversationMode,
+  assertMessageContent,
+  assertSessionId,
+} from "./validation";
+import {
+  getLiveConversationAvailability,
+  isFakeConversationProviderForced,
+} from "./conversation/config";
+import { sendConversationMessage } from "./conversation/service";
+import type {
+  ConversationAttempt,
+  ConversationMode,
+  ConversationUsageCounters,
+  CycleSession,
+  JournalTurn,
+  ProviderPresentation,
+} from "./types";

 export type Ops1ActionResult<T> =
   | { ok: true; data: T }
@@ -17,16 +31,40 @@ export type Ops1ActionResult<T> =

 function fail(error: unknown): Ops1ActionResult<never> {
   const safe = toSafeClientError(error);
-  console.error("[ops1]", safe.code, safe.message, error);
+  console.error("[ops1]", safe.code, safe.message);
   return { ok: false, code: safe.code, message: safe.message };
 }

-export async function ops1CreateSessionAction(): Promise<
-  Ops1ActionResult<{ session: CycleSession }>
-> {
+function resolvePresentation(
+  mode: ConversationMode,
+): ProviderPresentation {
+  if (mode === "fixture") return "fixture";
+  if (isFakeConversationProviderForced()) return "test_provider";
+  return "openai_live";
+}
+
+export async function ops1CreateSessionAction(input?: {
+  mode?: ConversationMode;
+}): Promise<Ops1ActionResult<{ session: CycleSession }>> {
   try {
-    const { session, event } = createOpenSession();
-    console.info("[ops1] SESSION_OPENED", session.sessionId, event.eventId);
+    const mode = assertConversationMode(input?.mode ?? "fixture");
+    if (mode === "live") {
+      const availability = getLiveConversationAvailability();
+      // Fake provider may satisfy E2E without real secrets when forced.
+      if (!availability.available && !isFakeConversationProviderForced()) {
+        throw new Ops1Error(
+          "CONFIG",
+          `Création live impossible (variables manquantes : ${availability.missing.join(", ")}).`,
+        );
+      }
+    }
+    const { session, event } = createOpenSession(mode);
+    console.info(
+      "[ops1] SESSION_OPENED",
+      session.sessionId,
+      event.eventId,
+      session.conversationMode,
+    );
     return { ok: true, data: { session } };
   } catch (error) {
     return fail(error);
@@ -46,7 +84,12 @@ export async function ops1ListOpenSessionsAction(): Promise<
 export async function ops1GetSessionAction(
   sessionId: string,
 ): Promise<
-  Ops1ActionResult<{ session: CycleSession; turns: JournalTurn[] }>
+  Ops1ActionResult<{
+    session: CycleSession;
+    turns: JournalTurn[];
+    attempts: ConversationAttempt[];
+    presentation: ProviderPresentation;
+  }>
 > {
   try {
     const id = assertSessionId(sessionId);
@@ -54,67 +97,117 @@ export async function ops1GetSessionAction(
     if (!bundle) {
       throw new Ops1Error("NOT_FOUND", "Session introuvable.");
     }
-    return { ok: true, data: bundle };
+    return {
+      ok: true,
+      data: {
+        ...bundle,
+        presentation: resolvePresentation(bundle.session.conversationMode),
+      },
+    };
   } catch (error) {
     return fail(error);
   }
 }

-export async function ops1AppendUserMessageAction(input: {
+/** Availability only — never returns secret values. */
+export async function ops1GetLiveConfigAction(): Promise<
+  Ops1ActionResult<{
+    available: boolean;
+    missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
+    testProvider: boolean;
+  }>
+> {
+  try {
+    const status = getLiveConversationAvailability();
+    const testProvider = isFakeConversationProviderForced();
+    if (status.available || testProvider) {
+      return {
+        ok: true,
+        data: {
+          available: true,
+          missing: status.available ? [] : status.missing,
+          testProvider,
+        },
+      };
+    }
+    return {
+      ok: true,
+      data: { available: false, missing: status.missing, testProvider: false },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+/**
+ * Append user message using the session's immutable mode.
+ * Optional requestedMode must match or the call is rejected before write.
+ */
+export async function ops1SendMessageAction(input: {
   sessionId: string;
   content: string;
+  /** Optional; if provided must equal session.conversationMode. */
+  mode?: ConversationMode;
 }): Promise<
   Ops1ActionResult<{
     userTurn: JournalTurn;
     assistantTurn: JournalTurn | null;
     assistantError: string | null;
+    usage: ConversationUsageCounters | null;
+    mode: ConversationMode;
+    presentation: ProviderPresentation;
   }>
 > {
   try {
     const sessionId = assertSessionId(input.sessionId);
     const content = assertMessageContent(input.content);
+    const requestedMode =
+      input.mode !== undefined ? assertConversationMode(input.mode) : undefined;

-    const { turn: userTurn, event } = appendTurn({
+    const result = await sendConversationMessage({
       sessionId,
-      role: "user",
       content,
-      fixture: true,
+      requestedMode,
     });
-    console.info(
-      "[ops1] TURN_APPENDED",
-      sessionId,
-      userTurn.turnId,
-      event.eventId,
-    );
-
-    let assistantTurn: JournalTurn | null = null;
-    let assistantError: string | null = null;
-    try {
-      const reply = buildFixtureAssistantReply(content);
-      const appended = appendTurn({
-        sessionId,
-        role: "assistant_fixture",
-        content: reply,
-        fixture: true,
-      });
-      assistantTurn = appended.turn;
-      console.info(
-        "[ops1] TURN_APPENDED",
-        sessionId,
-        appended.turn.turnId,
-        appended.event.eventId,
-      );
-    } catch (error) {
-      const safe = toSafeClientError(error);
-      assistantError = safe.message;
-      console.error("[ops1] TURN_PERSISTENCE_FAILED assistant", error);
-    }

     return {
       ok: true,
-      data: { userTurn, assistantTurn, assistantError },
+      data: {
+        userTurn: result.userTurn,
+        assistantTurn: result.assistantTurn,
+        assistantError: result.assistantError,
+        usage: result.usage,
+        mode: result.mode,
+        presentation: resolvePresentation(result.mode),
+      },
     };
   } catch (error) {
     return fail(error);
   }
 }
+
+/** @deprecated I1 name — fixture sessions only. */
+export async function ops1AppendUserMessageAction(input: {
+  sessionId: string;
+  content: string;
+}): Promise<
+  Ops1ActionResult<{
+    userTurn: JournalTurn;
+    assistantTurn: JournalTurn | null;
+    assistantError: string | null;
+  }>
+> {
+  const result = await ops1SendMessageAction({
+    ...input,
+    mode: "fixture",
+  });
+  if (!result.ok) return result;
+  return {
+    ok: true,
+    data: {
+      userTurn: result.data.userTurn,
+      assistantTurn: result.data.assistantTurn,
+      assistantError: result.data.assistantError,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/config.ts b/projects/sfia-studio/app/lib/ops1/conversation/config.ts
new file mode 100644
index 0000000..2f95b69
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/config.ts
@@ -0,0 +1,42 @@
+import { Ops1Error } from "../errors";
+
+export type LiveConfigStatus =
+  | { available: true; modelConfigured: true }
+  | {
+      available: false;
+      missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
+    };
+
+/** Public availability probe — never returns secret values. */
+export function getLiveConversationAvailability(): LiveConfigStatus {
+  const missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL"> = [];
+  if (!process.env.OPENAI_API_KEY?.trim()) missing.push("OPENAI_API_KEY");
+  if (!process.env.OPENAI_MODEL?.trim()) missing.push("OPENAI_MODEL");
+  if (missing.length > 0) {
+    return { available: false, missing };
+  }
+  return { available: true, modelConfigured: true };
+}
+
+/** Server-only resolved config — fail-closed, no silent defaults. */
+export function requireLiveConversationSecrets(): {
+  apiKey: string;
+  model: string;
+} {
+  const availability = getLiveConversationAvailability();
+  if (!availability.available) {
+    throw new Ops1Error(
+      "CONFIG",
+      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
+    );
+  }
+  return {
+    apiKey: process.env.OPENAI_API_KEY!.trim(),
+    model: process.env.OPENAI_MODEL!.trim(),
+  };
+}
+
+/** True when E2E / unit harness forces the fake provider (never live). */
+export function isFakeConversationProviderForced(): boolean {
+  return process.env.OPS1_CONVERSATION_PROVIDER === "fake";
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts b/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
new file mode 100644
index 0000000..4f4cb74
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
@@ -0,0 +1,50 @@
+import type {
+  ConversationProvider,
+  ProviderChatMessage,
+  ProviderCompletionResult,
+} from "./types";
+
+/**
+ * Deterministic fake provider for unit/E2E non-live tests.
+ * Never presented as live GPT; replies are tagged TEST/FAKE.
+ */
+export class FakeConversationProvider implements ConversationProvider {
+  readonly providerId = "fake-test";
+  private callCount = 0;
+  private readonly scripted?: string[];
+  private readonly failOnCall?: number;
+
+  constructor(options?: { scripted?: string[]; failOnCall?: number }) {
+    this.scripted = options?.scripted;
+    this.failOnCall = options?.failOnCall;
+  }
+
+  async complete(
+    messages: ProviderChatMessage[],
+  ): Promise<ProviderCompletionResult> {
+    this.callCount += 1;
+    const lastUser = [...messages].reverse().find((m) => m.role === "user");
+    if (
+      this.failOnCall !== undefined && this.callCount === this.failOnCall
+    ) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    const historyLen = messages.length;
+    const text =
+      this.scripted?.[this.callCount - 1] ??
+      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
+    return {
+      text,
+      usage: {
+        inputTokens: 10 * this.callCount,
+        outputTokens: 5 * this.callCount,
+        totalTokens: 15 * this.callCount,
+        model: "fake-test-model",
+        providerResponseId: `fake-resp-${this.callCount}`,
+      },
+    };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts b/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
new file mode 100644
index 0000000..932124f
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
@@ -0,0 +1,73 @@
+import OpenAI from "openai";
+import { Ops1Error } from "../errors";
+import type {
+  ConversationProvider,
+  ProviderChatMessage,
+  ProviderCompletionResult,
+} from "./types";
+
+/**
+ * OpenAI Responses adapter — server-only.
+ * Domain/UI must not import this module from client components.
+ */
+export class OpenAIConversationProvider implements ConversationProvider {
+  readonly providerId = "openai";
+  private readonly client: OpenAI;
+  private readonly model: string;
+
+  constructor(apiKey: string, model: string) {
+    this.client = new OpenAI({ apiKey });
+    this.model = model;
+  }
+
+  async complete(
+    messages: ProviderChatMessage[],
+  ): Promise<ProviderCompletionResult> {
+    try {
+      const response = await this.client.responses.create({
+        model: this.model,
+        input: messages.map((m) => ({
+          role: m.role,
+          content: m.content,
+        })),
+        // Explicitly no tools — conversation only.
+        tools: [],
+      });
+
+      const text = (response.output_text ?? "").trim();
+      if (!text) {
+        throw new Ops1Error(
+          "PROVIDER",
+          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
+        );
+      }
+
+      const usage = response.usage;
+      const inputTokens = usage?.input_tokens ?? null;
+      const outputTokens = usage?.output_tokens ?? null;
+      const totalTokens =
+        usage?.total_tokens ??
+        (inputTokens != null && outputTokens != null
+          ? inputTokens + outputTokens
+          : null);
+
+      return {
+        text,
+        usage: {
+          inputTokens,
+          outputTokens,
+          totalTokens,
+          model: response.model ?? this.model,
+          providerResponseId: response.id ?? null,
+        },
+      };
+    } catch (error) {
+      if (error instanceof Ops1Error) throw error;
+      throw new Ops1Error(
+        "PROVIDER",
+        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
+        error,
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/provider.ts b/projects/sfia-studio/app/lib/ops1/conversation/provider.ts
new file mode 100644
index 0000000..72e94d6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/provider.ts
@@ -0,0 +1,25 @@
+import {
+  isFakeConversationProviderForced,
+  requireLiveConversationSecrets,
+} from "./config";
+import { FakeConversationProvider } from "./fakeProvider";
+import { OpenAIConversationProvider } from "./openaiProvider";
+import type { ConversationProvider } from "./types";
+
+let providerOverride: ConversationProvider | null = null;
+
+/** Test-only injection — never used by client code. */
+export function setConversationProviderForTests(
+  provider: ConversationProvider | null,
+): void {
+  providerOverride = provider;
+}
+
+export function resolveConversationProvider(): ConversationProvider {
+  if (providerOverride) return providerOverride;
+  if (isFakeConversationProviderForced()) {
+    return new FakeConversationProvider();
+  }
+  const { apiKey, model } = requireLiveConversationSecrets();
+  return new OpenAIConversationProvider(apiKey, model);
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/service.ts b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
new file mode 100644
index 0000000..b88e051
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
@@ -0,0 +1,201 @@
+import { buildFixtureAssistantReply } from "../fixtureReply";
+import { Ops1Error, toSafeClientError } from "../errors";
+import {
+  appendTurn,
+  completeConversationAttemptFailure,
+  completeConversationAttemptSuccess,
+  getSession,
+  listTurns,
+  startConversationAttempt,
+} from "../repository";
+import type {
+  ConversationMode,
+  ConversationUsageCounters,
+  JournalTurn,
+} from "../types";
+import {
+  assertJournalMatchesMode,
+  buildProviderMessagesFromJournal,
+} from "./types";
+import { resolveConversationProvider } from "./provider";
+import type { ConversationProvider } from "./types";
+
+export interface SendMessageResult {
+  userTurn: JournalTurn;
+  assistantTurn: JournalTurn | null;
+  assistantError: string | null;
+  usage: ConversationUsageCounters | null;
+  mode: ConversationMode;
+  providerId: string | null;
+}
+
+function durationMs(startedAt: string, completedAt: string): number | null {
+  const a = Date.parse(startedAt);
+  const b = Date.parse(completedAt);
+  if (Number.isNaN(a) || Number.isNaN(b)) return null;
+  return Math.max(0, b - a);
+}
+
+/**
+ * Orchestrates fixture or live conversation turn using the session's
+ * immutable conversationMode. Optional requestedMode is validated then ignored
+ * if matching; mismatch is rejected before any persistence or provider call.
+ */
+export async function sendConversationMessage(input: {
+  sessionId: string;
+  content: string;
+  /** Optional client hint — must match session mode or be omitted. */
+  requestedMode?: ConversationMode;
+  provider?: ConversationProvider;
+}): Promise<SendMessageResult> {
+  const session = getSession(input.sessionId);
+  if (!session) {
+    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
+  }
+  if (session.status !== "OPEN") {
+    throw new Ops1Error(
+      "CONFLICT",
+      "La session n’accepte plus de tours (statut non OPEN).",
+    );
+  }
+
+  const mode = session.conversationMode;
+
+  if (input.requestedMode && input.requestedMode !== mode) {
+    throw new Ops1Error(
+      "CONFLICT",
+      `Mode refusé : cette session est verrouillée en « ${mode} ». Créez une nouvelle session pour changer de mode.`,
+    );
+  }
+
+  // Defense: refuse mixed journals before any write.
+  assertJournalMatchesMode(listTurns(input.sessionId), mode);
+
+  if (mode === "fixture") {
+    const { turn: userTurn } = appendTurn({
+      sessionId: input.sessionId,
+      role: "user",
+      content: input.content,
+      fixture: true,
+    });
+
+    let assistantTurn: JournalTurn | null = null;
+    let assistantError: string | null = null;
+    try {
+      const reply = buildFixtureAssistantReply(input.content);
+      const appended = appendTurn({
+        sessionId: input.sessionId,
+        role: "assistant_fixture",
+        content: reply,
+        fixture: true,
+      });
+      assistantTurn = appended.turn;
+    } catch (error) {
+      assistantError = toSafeClientError(error).message;
+    }
+
+    return {
+      userTurn,
+      assistantTurn,
+      assistantError,
+      usage: null,
+      mode: "fixture",
+      providerId: null,
+    };
+  }
+
+  // LIVE path — no silent fallback to fixture.
+  const provider = input.provider ?? resolveConversationProvider();
+
+  const { turn: userTurn } = appendTurn({
+    sessionId: input.sessionId,
+    role: "user",
+    content: input.content,
+    fixture: false,
+  });
+
+  const attempt = startConversationAttempt({
+    sessionId: input.sessionId,
+    userTurnId: userTurn.turnId,
+    provider: provider.providerId,
+  });
+
+  console.info(
+    "[ops1] CONVERSATION_ATTEMPT_STARTED",
+    input.sessionId,
+    attempt.attemptId,
+    provider.providerId,
+  );
+
+  try {
+    const history = listTurns(input.sessionId);
+    const messages = buildProviderMessagesFromJournal(history, "live");
+    const completion = await provider.complete(messages);
+
+    const { turn: assistantTurn } = appendTurn({
+      sessionId: input.sessionId,
+      role: "assistant_live",
+      content: completion.text,
+      fixture: false,
+    });
+
+    const finalized = completeConversationAttemptSuccess({
+      attemptId: attempt.attemptId,
+      sessionId: input.sessionId,
+      assistantTurnId: assistantTurn.turnId,
+      providerResponseId: completion.usage.providerResponseId,
+      model: completion.usage.model,
+      inputTokens: completion.usage.inputTokens,
+      outputTokens: completion.usage.outputTokens,
+      totalTokens: completion.usage.totalTokens,
+    });
+
+    console.info(
+      "[ops1] CONVERSATION_ATTEMPT_SUCCEEDED",
+      input.sessionId,
+      attempt.attemptId,
+      finalized.totalTokens,
+    );
+
+    return {
+      userTurn,
+      assistantTurn,
+      assistantError: null,
+      usage: {
+        inputTokens: finalized.inputTokens,
+        outputTokens: finalized.outputTokens,
+        totalTokens: finalized.totalTokens,
+        model: finalized.model,
+        provider: finalized.provider,
+        attemptId: finalized.attemptId,
+        durationMs: durationMs(
+          finalized.requestStartedAt,
+          finalized.requestCompletedAt ?? finalized.requestStartedAt,
+        ),
+      },
+      mode: "live",
+      providerId: provider.providerId,
+    };
+  } catch (error) {
+    const safe = toSafeClientError(error);
+    completeConversationAttemptFailure({
+      attemptId: attempt.attemptId,
+      sessionId: input.sessionId,
+      errorCode: safe.code,
+    });
+    console.error(
+      "[ops1] CONVERSATION_ATTEMPT_FAILED",
+      input.sessionId,
+      attempt.attemptId,
+      safe.code,
+    );
+    return {
+      userTurn,
+      assistantTurn: null,
+      assistantError: safe.message,
+      usage: null,
+      mode: "live",
+      providerId: provider.providerId,
+    };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/types.ts b/projects/sfia-studio/app/lib/ops1/conversation/types.ts
new file mode 100644
index 0000000..ba366f1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/conversation/types.ts
@@ -0,0 +1,89 @@
+import type { ConversationMode, JournalTurn } from "../types";
+import { Ops1Error } from "../errors";
+
+/** Provider-facing roles — domain roles mapped without SDK types. */
+export type ProviderChatRole = "user" | "assistant";
+
+export interface ProviderChatMessage {
+  role: ProviderChatRole;
+  content: string;
+}
+
+export interface ProviderUsage {
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  model: string | null;
+  providerResponseId: string | null;
+}
+
+export interface ProviderCompletionResult {
+  text: string;
+  usage: ProviderUsage;
+}
+
+export interface ConversationProvider {
+  readonly providerId: string;
+  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
+}
+
+/**
+ * Map local journal turns into ordered provider context.
+ * Defense in depth: journal must match the expected session mode.
+ * Never silently filters incompatible roles.
+ */
+export function buildProviderMessagesFromJournal(
+  turns: JournalTurn[],
+  expectedMode: ConversationMode,
+): ProviderChatMessage[] {
+  const out: ProviderChatMessage[] = [];
+  for (const turn of turns) {
+    if (turn.role === "user") {
+      out.push({ role: "user", content: turn.content });
+      continue;
+    }
+    if (turn.role === "assistant_fixture") {
+      if (expectedMode === "live") {
+        throw new Ops1Error(
+          "CONFLICT",
+          "Journal incompatible avec une session live (tour fixture détecté). Aucun appel fournisseur n’a été effectué.",
+        );
+      }
+      out.push({ role: "assistant", content: turn.content });
+      continue;
+    }
+    if (turn.role === "assistant_live") {
+      if (expectedMode === "fixture") {
+        throw new Ops1Error(
+          "CONFLICT",
+          "Journal incompatible avec une session fixture (tour live détecté).",
+        );
+      }
+      out.push({ role: "assistant", content: turn.content });
+      continue;
+    }
+    throw new Ops1Error("VALIDATION", "Rôle de tour inconnu dans le journal.");
+  }
+  return out;
+}
+
+/** Validate journal integrity against session mode without building messages. */
+export function assertJournalMatchesMode(
+  turns: JournalTurn[],
+  mode: ConversationMode,
+): void {
+  for (const turn of turns) {
+    if (mode === "live" && turn.role === "assistant_fixture") {
+      throw new Ops1Error(
+        "CONFLICT",
+        "Journal incompatible avec une session live (tour fixture détecté).",
+      );
+    }
+    if (mode === "fixture" && turn.role === "assistant_live") {
+      throw new Ops1Error(
+        "CONFLICT",
+        "Journal incompatible avec une session fixture (tour live détecté).",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
index 5f6662b..68446e4 100644
--- a/projects/sfia-studio/app/lib/ops1/db.ts
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -1,6 +1,7 @@
 import { DatabaseSync } from "node:sqlite";
 import { resolveOps1SqlitePath } from "./paths";
 import { Ops1Error } from "./errors";
+import { LEGACY_SESSION_MODE_AMBIGUOUS } from "./types";

 const SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -12,14 +13,16 @@ CREATE TABLE IF NOT EXISTS cycle_sessions (
   created_at TEXT NOT NULL,
   updated_at TEXT NOT NULL,
   parent_session_id TEXT,
-  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
+  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1)),
+  conversation_mode TEXT NOT NULL DEFAULT 'fixture'
+    CHECK (conversation_mode IN ('fixture', 'live'))
 );

 CREATE TABLE IF NOT EXISTS journal_turns (
   turn_id TEXT PRIMARY KEY NOT NULL,
   session_id TEXT NOT NULL,
   sequence INTEGER NOT NULL,
-  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
+  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
   content TEXT NOT NULL,
   fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
   created_at TEXT NOT NULL,
@@ -35,13 +38,221 @@ CREATE TABLE IF NOT EXISTS session_events (
   detail TEXT NOT NULL
 );

+CREATE TABLE IF NOT EXISTS conversation_attempts (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  user_turn_id TEXT,
+  assistant_turn_id TEXT,
+  provider TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN ('started', 'succeeded', 'failed')),
+  provider_response_id TEXT,
+  model TEXT,
+  input_tokens INTEGER,
+  output_tokens INTEGER,
+  total_tokens INTEGER,
+  request_started_at TEXT NOT NULL,
+  request_completed_at TEXT,
+  error_code TEXT,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
 CREATE INDEX IF NOT EXISTS idx_turns_session_seq
   ON journal_turns(session_id, sequence);
+
+CREATE INDEX IF NOT EXISTS idx_attempts_session
+  ON conversation_attempts(session_id, request_started_at);
 `;

 let singleton: DatabaseSync | null = null;
 let singletonPath: string | null = null;

+function tableHasColumn(
+  db: DatabaseSync,
+  table: string,
+  column: string,
+): boolean {
+  const rows = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{
+    name: string;
+  }>;
+  return rows.some((r) => r.name === column);
+}
+
+function isRealProvider(provider: string): boolean {
+  return provider !== "fake-test";
+}
+
+/**
+ * Infer immutable conversation mode for a legacy session.
+ * Throws LEGACY_SESSION_MODE_AMBIGUOUS when journal/attempts conflict.
+ */
+export function inferLegacyConversationMode(
+  roles: string[],
+  providers: string[],
+): "fixture" | "live" {
+  const hasFixtureAssistant = roles.includes("assistant_fixture");
+  const hasLiveAssistant = roles.includes("assistant_live");
+  const hasRealAttempt = providers.some(isRealProvider);
+  const hasFakeAttempt = providers.some((p) => p === "fake-test");
+
+  if (hasFixtureAssistant && hasLiveAssistant) {
+    throw new Ops1Error("CONFLICT", LEGACY_SESSION_MODE_AMBIGUOUS);
+  }
+  if (hasRealAttempt && hasFixtureAssistant && !hasLiveAssistant) {
+    throw new Ops1Error("CONFLICT", LEGACY_SESSION_MODE_AMBIGUOUS);
+  }
+  // Real OpenAI attempt + only fixture assistants already caught above.
+  // Fake attempts with live assistant roles → live technical mode.
+  if (hasLiveAssistant || hasRealAttempt) {
+    return "live";
+  }
+  if (hasFakeAttempt && !hasLiveAssistant && !hasFixtureAssistant) {
+    // attempts without assistant turns (all failed) → still live path intent
+    return "live";
+  }
+  return "fixture";
+}
+
+function validateNoAmbiguousLegacySessions(db: DatabaseSync): void {
+  const sessions = db
+    .prepare(`SELECT session_id FROM cycle_sessions`)
+    .all() as Array<{ session_id: string }>;
+
+  for (const { session_id } of sessions) {
+    const roles = (
+      db
+        .prepare(
+          `SELECT DISTINCT role FROM journal_turns WHERE session_id = ?`,
+        )
+        .all(session_id) as Array<{ role: string }>
+    ).map((r) => r.role);
+    const providers = (
+      db
+        .prepare(
+          `SELECT DISTINCT provider FROM conversation_attempts WHERE session_id = ?`,
+        )
+        .all(session_id) as Array<{ provider: string }>
+    ).map((r) => r.provider);
+    // Throws on ambiguity; return value unused — persisted mode already set.
+    inferLegacyConversationMode(roles, providers);
+  }
+}
+
+function backfillConversationModes(db: DatabaseSync): void {
+  const sessions = db
+    .prepare(`SELECT session_id FROM cycle_sessions`)
+    .all() as Array<{ session_id: string }>;
+
+  for (const { session_id } of sessions) {
+    const roles = (
+      db
+        .prepare(
+          `SELECT DISTINCT role FROM journal_turns WHERE session_id = ?`,
+        )
+        .all(session_id) as Array<{ role: string }>
+    ).map((r) => r.role);
+    const providers = (
+      db
+        .prepare(
+          `SELECT DISTINCT provider FROM conversation_attempts WHERE session_id = ?`,
+        )
+        .all(session_id) as Array<{ provider: string }>
+    ).map((r) => r.provider);
+
+    const mode = inferLegacyConversationMode(roles, providers);
+    db.prepare(
+      `UPDATE cycle_sessions
+       SET conversation_mode = ?, fixture_mode = ?
+       WHERE session_id = ?`,
+    ).run(mode, mode === "fixture" ? 1 : 0, session_id);
+  }
+}
+
+/** Idempotent additive migration I1 → I2 (+ conversation_mode immutability). */
+export function migrateOps1Schema(db: DatabaseSync): void {
+  db.exec("PRAGMA foreign_keys = ON;");
+  db.exec(SCHEMA_SQL);
+
+  const turnSqlRow = db
+    .prepare(
+      `SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'journal_turns'`,
+    )
+    .get() as { sql: string } | undefined;
+  const turnSql = turnSqlRow?.sql ?? "";
+
+  if (turnSql && !turnSql.includes("assistant_live")) {
+    db.exec("BEGIN IMMEDIATE");
+    try {
+      db.exec(`
+        CREATE TABLE journal_turns_i2 (
+          turn_id TEXT PRIMARY KEY NOT NULL,
+          session_id TEXT NOT NULL,
+          sequence INTEGER NOT NULL,
+          role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
+          content TEXT NOT NULL,
+          fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
+          created_at TEXT NOT NULL,
+          UNIQUE (session_id, sequence),
+          FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+        );
+        INSERT INTO journal_turns_i2 (
+          turn_id, session_id, sequence, role, content, fixture, created_at
+        )
+        SELECT turn_id, session_id, sequence, role, content, fixture, created_at
+        FROM journal_turns;
+        DROP TABLE journal_turns;
+        ALTER TABLE journal_turns_i2 RENAME TO journal_turns;
+        CREATE INDEX IF NOT EXISTS idx_turns_session_seq
+          ON journal_turns(session_id, sequence);
+      `);
+      db.exec("COMMIT");
+    } catch (error) {
+      try {
+        db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw new Ops1Error(
+        "PERSISTENCE",
+        "Échec de migration schéma journal I2.",
+        error,
+      );
+    }
+  }
+
+  if (!tableHasColumn(db, "cycle_sessions", "conversation_mode")) {
+    db.exec("BEGIN IMMEDIATE");
+    try {
+      db.exec(
+        `ALTER TABLE cycle_sessions ADD COLUMN conversation_mode TEXT NOT NULL DEFAULT 'fixture'`,
+      );
+      backfillConversationModes(db);
+      db.exec("COMMIT");
+    } catch (error) {
+      try {
+        db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      if (error instanceof Ops1Error) throw error;
+      throw new Ops1Error(
+        "PERSISTENCE",
+        "Échec de migration conversation_mode.",
+        error,
+      );
+    }
+  } else {
+    validateNoAmbiguousLegacySessions(db);
+  }
+
+  const integrity = db.prepare("PRAGMA integrity_check").get() as
+    | Record<string, string>
+    | undefined;
+  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
+  if (raw !== "ok") {
+    throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
+  }
+}
+
 export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
   if (singleton && singletonPath === dbPath) {
     return singleton;
@@ -58,15 +269,7 @@ export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {

   try {
     const db = new DatabaseSync(dbPath);
-    db.exec("PRAGMA foreign_keys = ON;");
-    db.exec(SCHEMA_SQL);
-    const integrity = db.prepare("PRAGMA integrity_check").get() as
-      | Record<string, string>
-      | undefined;
-    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
-    if (raw !== "ok") {
-      throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
-    }
+    migrateOps1Schema(db);
     singleton = db;
     singletonPath = dbPath;
     return db;
diff --git a/projects/sfia-studio/app/lib/ops1/errors.ts b/projects/sfia-studio/app/lib/ops1/errors.ts
index 6a32fc8..0420b3e 100644
--- a/projects/sfia-studio/app/lib/ops1/errors.ts
+++ b/projects/sfia-studio/app/lib/ops1/errors.ts
@@ -3,6 +3,8 @@ export type Ops1ErrorCode =
   | "NOT_FOUND"
   | "PERSISTENCE"
   | "CONFLICT"
+  | "CONFIG"
+  | "PROVIDER"
   | "INTERNAL";

 export class Ops1Error extends Error {
diff --git a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
index 11c69ad..8c70d74 100644
--- a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
+++ b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
@@ -3,7 +3,7 @@ export function buildFixtureAssistantReply(userContent: string): string {
   const preview =
     userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
   return [
-    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I1.",
+    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I2.",
     "Aucun fournisseur GPT n’a été appelé.",
     `Echo borné : « ${preview} »`,
   ].join(" ");
diff --git a/projects/sfia-studio/app/lib/ops1/globalModeBadge.ts b/projects/sfia-studio/app/lib/ops1/globalModeBadge.ts
new file mode 100644
index 0000000..eacb145
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/globalModeBadge.ts
@@ -0,0 +1,76 @@
+import type { ConversationMode, ProviderPresentation } from "./types";
+
+export type GlobalModeBadgeTone = "orange" | "purpleFlush" | "green";
+
+export interface GlobalModeBadge {
+  label: string;
+  tone: GlobalModeBadgeTone;
+  presentation: ProviderPresentation;
+}
+
+export interface GlobalModeContext {
+  hasSession: boolean;
+  createMode: ConversationMode;
+  /** Authoritative when a session is active. */
+  presentation: ProviderPresentation;
+  testProvider: boolean;
+  liveAvailable: boolean;
+}
+
+/**
+ * Resolve which presentation drives the global header badge.
+ * Reuses OPS1 ProviderPresentation — no parallel provider logic.
+ */
+export function resolveGlobalModePresentation(
+  ctx: GlobalModeContext,
+): ProviderPresentation {
+  if (ctx.hasSession) {
+    return ctx.presentation;
+  }
+  if (ctx.createMode === "fixture") {
+    return "fixture";
+  }
+  // Live selected before session creation
+  if (ctx.testProvider) {
+    return "test_provider";
+  }
+  if (ctx.liveAvailable) {
+    return "openai_live";
+  }
+  return "fixture";
+}
+
+export function mapGlobalModeBadgeLabel(
+  presentation: ProviderPresentation,
+): string {
+  switch (presentation) {
+    case "fixture":
+      return "MODE FIXTURE / NON LIVE";
+    case "test_provider":
+      return "TEST PROVIDER / NON LIVE";
+    case "openai_live":
+      return "MODE GPT LIVE";
+  }
+}
+
+export function mapGlobalModeBadgeTone(
+  presentation: ProviderPresentation,
+): GlobalModeBadgeTone {
+  switch (presentation) {
+    case "fixture":
+      return "orange";
+    case "test_provider":
+      return "purpleFlush";
+    case "openai_live":
+      return "green";
+  }
+}
+
+export function mapGlobalModeBadge(ctx: GlobalModeContext): GlobalModeBadge {
+  const presentation = resolveGlobalModePresentation(ctx);
+  return {
+    presentation,
+    label: mapGlobalModeBadgeLabel(presentation),
+    tone: mapGlobalModeBadgeTone(presentation),
+  };
+}
diff --git a/projects/sfia-studio/app/lib/ops1/ids.ts b/projects/sfia-studio/app/lib/ops1/ids.ts
index 850458d..45f2b8d 100644
--- a/projects/sfia-studio/app/lib/ops1/ids.ts
+++ b/projects/sfia-studio/app/lib/ops1/ids.ts
@@ -11,3 +11,7 @@ export function createTurnId(): string {
 export function createEventId(): string {
   return `ops1-evt-${randomUUID()}`;
 }
+
+export function createAttemptId(): string {
+  return `ops1-att-${randomUUID()}`;
+}
diff --git a/projects/sfia-studio/app/lib/ops1/index.ts b/projects/sfia-studio/app/lib/ops1/index.ts
index b03b14b..b6ae73e 100644
--- a/projects/sfia-studio/app/lib/ops1/index.ts
+++ b/projects/sfia-studio/app/lib/ops1/index.ts
@@ -2,3 +2,12 @@ export * from "./types";
 export * from "./errors";
 export * from "./validation";
 export * from "./fixtureReply";
+export { buildProviderMessagesFromJournal } from "./conversation/types";
+export { getLiveConversationAvailability } from "./conversation/config";
+export { inferLegacyConversationMode } from "./db";
+export {
+  mapGlobalModeBadge,
+  mapGlobalModeBadgeLabel,
+  mapGlobalModeBadgeTone,
+  resolveGlobalModePresentation,
+} from "./globalModeBadge";
diff --git a/projects/sfia-studio/app/lib/ops1/repository.ts b/projects/sfia-studio/app/lib/ops1/repository.ts
index 5734373..9944057 100644
--- a/projects/sfia-studio/app/lib/ops1/repository.ts
+++ b/projects/sfia-studio/app/lib/ops1/repository.ts
@@ -1,9 +1,17 @@
 import type { DatabaseSync } from "node:sqlite";
-import { createEventId, createSessionId, createTurnId } from "./ids";
+import {
+  createAttemptId,
+  createEventId,
+  createSessionId,
+  createTurnId,
+} from "./ids";
 import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
 import { Ops1Error } from "./errors";
 import {
   OPS1_PROJECT_KEY,
+  type ConversationAttempt,
+  type ConversationAttemptStatus,
+  type ConversationMode,
   type CycleSession,
   type JournalTurn,
   type SessionEvent,
@@ -14,6 +22,9 @@ import {
 export { resetOps1DbForTests };

 function mapSession(row: Record<string, unknown>): CycleSession {
+  const conversationMode =
+    (row.conversation_mode as ConversationMode | undefined) ??
+    (Number(row.fixture_mode) === 1 ? "fixture" : "live");
   return {
     sessionId: String(row.session_id),
     projectKey: String(row.project_key),
@@ -23,7 +34,8 @@ function mapSession(row: Record<string, unknown>): CycleSession {
     parentSessionId: row.parent_session_id
       ? String(row.parent_session_id)
       : null,
-    fixtureMode: Number(row.fixture_mode) === 1,
+    fixtureMode: conversationMode === "fixture",
+    conversationMode,
   };
 }

@@ -39,6 +51,34 @@ function mapTurn(row: Record<string, unknown>): JournalTurn {
   };
 }

+function mapAttempt(row: Record<string, unknown>): ConversationAttempt {
+  return {
+    attemptId: String(row.attempt_id),
+    sessionId: String(row.session_id),
+    userTurnId: row.user_turn_id ? String(row.user_turn_id) : null,
+    assistantTurnId: row.assistant_turn_id
+      ? String(row.assistant_turn_id)
+      : null,
+    provider: String(row.provider),
+    status: row.status as ConversationAttemptStatus,
+    providerResponseId: row.provider_response_id
+      ? String(row.provider_response_id)
+      : null,
+    model: row.model ? String(row.model) : null,
+    inputTokens:
+      row.input_tokens == null ? null : Number(row.input_tokens),
+    outputTokens:
+      row.output_tokens == null ? null : Number(row.output_tokens),
+    totalTokens:
+      row.total_tokens == null ? null : Number(row.total_tokens),
+    requestStartedAt: String(row.request_started_at),
+    requestCompletedAt: row.request_completed_at
+      ? String(row.request_completed_at)
+      : null,
+    errorCode: row.error_code ? String(row.error_code) : null,
+  };
+}
+
 function insertEvent(
   db: DatabaseSync,
   sessionId: string | null,
@@ -54,27 +94,38 @@ function insertEvent(
   return { eventId, sessionId, type, createdAt, detail };
 }

-export function createOpenSession(db = openOps1Db()): {
+export function createOpenSession(
+  mode: ConversationMode = "fixture",
+  db = openOps1Db(),
+): {
   session: CycleSession;
   event: SessionEvent;
 } {
+  if (mode !== "fixture" && mode !== "live") {
+    throw new Ops1Error("VALIDATION", "Mode de session invalide.");
+  }
   const sessionId = createSessionId();
   const createdAt = nowIsoWithOffset();
+  const fixtureMode = mode === "fixture" ? 1 : 0;

   try {
     db.exec("BEGIN IMMEDIATE");
     db.prepare(
       `INSERT INTO cycle_sessions (
          session_id, project_key, status, created_at, updated_at,
-         parent_session_id, fixture_mode
-       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, 1)`,
-    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt);
+         parent_session_id, fixture_mode, conversation_mode
+       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, ?, ?)`,
+    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt, fixtureMode, mode);

     const event = insertEvent(
       db,
       sessionId,
       "SESSION_OPENED",
-      JSON.stringify({ projectKey: OPS1_PROJECT_KEY, fixtureMode: true }),
+      JSON.stringify({
+        projectKey: OPS1_PROJECT_KEY,
+        fixtureMode: mode === "fixture",
+        conversationMode: mode,
+      }),
       createdAt,
     );
     db.exec("COMMIT");
@@ -87,7 +138,8 @@ export function createOpenSession(db = openOps1Db()): {
         createdAt,
         updatedAt: createdAt,
         parentSessionId: null,
-        fixtureMode: true,
+        fixtureMode: mode === "fixture",
+        conversationMode: mode,
       },
       event,
     };
@@ -252,11 +304,240 @@ export function appendTurn(
   }
 }

+export function startConversationAttempt(
+  input: {
+    sessionId: string;
+    userTurnId: string;
+    provider: string;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const session = getSession(input.sessionId, db);
+  if (!session) {
+    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
+  }
+  if (session.status !== "OPEN") {
+    throw new Ops1Error("CONFLICT", "Session non OPEN.");
+  }
+
+  const attemptId = createAttemptId();
+  const startedAt = nowIsoWithOffset();
+
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `INSERT INTO conversation_attempts (
+         attempt_id, session_id, user_turn_id, assistant_turn_id, provider,
+         status, provider_response_id, model, input_tokens, output_tokens,
+         total_tokens, request_started_at, request_completed_at, error_code
+       ) VALUES (?, ?, ?, NULL, ?, 'started', NULL, NULL, NULL, NULL, NULL, ?, NULL, NULL)`,
+    ).run(
+      attemptId,
+      input.sessionId,
+      input.userTurnId,
+      input.provider,
+      startedAt,
+    );
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_STARTED",
+      JSON.stringify({
+        attemptId,
+        userTurnId: input.userTurnId,
+        provider: input.provider,
+      }),
+      startedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec d’enregistrement de la tentative conversationnelle.",
+      error,
+    );
+  }
+
+  return {
+    attemptId,
+    sessionId: input.sessionId,
+    userTurnId: input.userTurnId,
+    assistantTurnId: null,
+    provider: input.provider,
+    status: "started",
+    providerResponseId: null,
+    model: null,
+    inputTokens: null,
+    outputTokens: null,
+    totalTokens: null,
+    requestStartedAt: startedAt,
+    requestCompletedAt: null,
+    errorCode: null,
+  };
+}
+
+export function completeConversationAttemptSuccess(
+  input: {
+    attemptId: string;
+    sessionId: string;
+    assistantTurnId: string;
+    providerResponseId: string | null;
+    model: string | null;
+    inputTokens: number | null;
+    outputTokens: number | null;
+    totalTokens: number | null;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const completedAt = nowIsoWithOffset();
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `UPDATE conversation_attempts SET
+         status = 'succeeded',
+         assistant_turn_id = ?,
+         provider_response_id = ?,
+         model = ?,
+         input_tokens = ?,
+         output_tokens = ?,
+         total_tokens = ?,
+         request_completed_at = ?,
+         error_code = NULL
+       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
+    ).run(
+      input.assistantTurnId,
+      input.providerResponseId,
+      input.model,
+      input.inputTokens,
+      input.outputTokens,
+      input.totalTokens,
+      completedAt,
+      input.attemptId,
+      input.sessionId,
+    );
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_SUCCEEDED",
+      JSON.stringify({
+        attemptId: input.attemptId,
+        assistantTurnId: input.assistantTurnId,
+        model: input.model,
+        totalTokens: input.totalTokens,
+      }),
+      completedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec de finalisation de la tentative (succès).",
+      error,
+    );
+  }
+  const attempt = getConversationAttempt(input.attemptId, db);
+  if (!attempt) {
+    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après succès.");
+  }
+  return attempt;
+}
+
+export function completeConversationAttemptFailure(
+  input: {
+    attemptId: string;
+    sessionId: string;
+    errorCode: string;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const completedAt = nowIsoWithOffset();
+  const safeCode = input.errorCode.slice(0, 64);
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `UPDATE conversation_attempts SET
+         status = 'failed',
+         request_completed_at = ?,
+         error_code = ?
+       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
+    ).run(completedAt, safeCode, input.attemptId, input.sessionId);
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_FAILED",
+      JSON.stringify({
+        attemptId: input.attemptId,
+        errorCode: safeCode,
+      }),
+      completedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec de finalisation de la tentative (échec).",
+      error,
+    );
+  }
+  const attempt = getConversationAttempt(input.attemptId, db);
+  if (!attempt) {
+    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après échec.");
+  }
+  return attempt;
+}
+
+export function getConversationAttempt(
+  attemptId: string,
+  db = openOps1Db(),
+): ConversationAttempt | null {
+  const row = db
+    .prepare(`SELECT * FROM conversation_attempts WHERE attempt_id = ?`)
+    .get(attemptId) as Record<string, unknown> | undefined;
+  return row ? mapAttempt(row) : null;
+}
+
+export function listConversationAttempts(
+  sessionId: string,
+  db = openOps1Db(),
+): ConversationAttempt[] {
+  const rows = db
+    .prepare(
+      `SELECT * FROM conversation_attempts
+       WHERE session_id = ?
+       ORDER BY request_started_at ASC`,
+    )
+    .all(sessionId) as Record<string, unknown>[];
+  return rows.map(mapAttempt);
+}
+
 export function getSessionBundle(
   sessionId: string,
   db = openOps1Db(),
-): { session: CycleSession; turns: JournalTurn[] } | null {
+): {
+  session: CycleSession;
+  turns: JournalTurn[];
+  attempts: ConversationAttempt[];
+} | null {
   const session = getSession(sessionId, db);
   if (!session) return null;
-  return { session, turns: listTurns(sessionId, db) };
+  return {
+    session,
+    turns: listTurns(sessionId, db),
+    attempts: listConversationAttempts(sessionId, db),
+  };
 }
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index 5c42bad..bb2f2fd 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -1,8 +1,27 @@
-/** OPS1 I1 — Session + journal (fixture/local). CLOSED reserved; not mutated in I1. */
+/** OPS1 I1/I2 — Session + journal. CLOSED reserved; not mutated in I1/I2. */

 export type SessionStatus = "OPEN" | "CLOSED";

-export type TurnRole = "user" | "assistant_fixture";
+/** I2 extends roles with assistant_live; fixture role retained for non-live. */
+export type TurnRole = "user" | "assistant_fixture" | "assistant_live";
+
+/** Immutable session conversation mode — chosen at creation, never mixed. */
+export type ConversationMode = "fixture" | "live";
+
+export type ConversationAttemptStatus =
+  | "started"
+  | "succeeded"
+  | "failed";
+
+/**
+ * Runtime presentation kind for UI signalétique.
+ * Distinct from ConversationMode: a live-mode session can still be served
+ * by the fake test provider (TEST / NON LIVE), never as genuine GPT live.
+ */
+export type ProviderPresentation =
+  | "fixture"
+  | "test_provider"
+  | "openai_live";

 export interface CycleSession {
   sessionId: string;
@@ -11,7 +30,10 @@ export interface CycleSession {
   createdAt: string;
   updatedAt: string;
   parentSessionId: string | null;
+  /** @deprecated Prefer conversationMode; kept as mirror of fixture mode. */
   fixtureMode: boolean;
+  /** Immutable conversation mode for the whole session lifetime. */
+  conversationMode: ConversationMode;
 }

 export interface JournalTurn {
@@ -24,11 +46,41 @@ export interface JournalTurn {
   createdAt: string;
 }

+export interface ConversationAttempt {
+  attemptId: string;
+  sessionId: string;
+  userTurnId: string | null;
+  assistantTurnId: string | null;
+  provider: string;
+  status: ConversationAttemptStatus;
+  providerResponseId: string | null;
+  model: string | null;
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  requestStartedAt: string;
+  requestCompletedAt: string | null;
+  errorCode: string | null;
+}
+
+export interface ConversationUsageCounters {
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  model: string | null;
+  provider: string;
+  attemptId: string;
+  durationMs: number | null;
+}
+
 export type SessionEventType =
   | "SESSION_OPENED"
   | "TURN_APPENDED"
   | "SESSION_PERSISTENCE_FAILED"
-  | "TURN_PERSISTENCE_FAILED";
+  | "TURN_PERSISTENCE_FAILED"
+  | "CONVERSATION_ATTEMPT_STARTED"
+  | "CONVERSATION_ATTEMPT_SUCCEEDED"
+  | "CONVERSATION_ATTEMPT_FAILED";

 export interface SessionEvent {
   eventId: string;
@@ -42,3 +94,6 @@ export const OPS1_PROJECT_KEY = "sfia-studio-ops1";

 /** Local input guardrail — not a FinOps decision. */
 export const OPS1_MAX_MESSAGE_CHARS = 4000;
+
+export const LEGACY_SESSION_MODE_AMBIGUOUS =
+  "MORRIS DECISION REQUIRED — LEGACY SESSION MODE AMBIGUOUS";
diff --git a/projects/sfia-studio/app/lib/ops1/validation.ts b/projects/sfia-studio/app/lib/ops1/validation.ts
index 1a7858b..eda1313 100644
--- a/projects/sfia-studio/app/lib/ops1/validation.ts
+++ b/projects/sfia-studio/app/lib/ops1/validation.ts
@@ -1,4 +1,8 @@
-import { OPS1_MAX_MESSAGE_CHARS, type TurnRole } from "./types";
+import {
+  OPS1_MAX_MESSAGE_CHARS,
+  type ConversationMode,
+  type TurnRole,
+} from "./types";
 import { Ops1Error } from "./errors";

 const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;
@@ -28,6 +32,17 @@ export function assertMessageContent(content: unknown): string {
 }

 export function assertTurnRole(role: unknown): TurnRole {
-  if (role === "user" || role === "assistant_fixture") return role;
+  if (
+    role === "user" ||
+    role === "assistant_fixture" ||
+    role === "assistant_live"
+  ) {
+    return role;
+  }
   throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
 }
+
+export function assertConversationMode(mode: unknown): ConversationMode {
+  if (mode === "fixture" || mode === "live") return mode;
+  throw new Ops1Error("VALIDATION", "Mode conversationnel invalide.");
+}
diff --git a/projects/sfia-studio/app/package-lock.json b/projects/sfia-studio/app/package-lock.json
index 5d23e54..239be78 100644
--- a/projects/sfia-studio/app/package-lock.json
+++ b/projects/sfia-studio/app/package-lock.json
@@ -9,6 +9,7 @@
       "version": "0.1.0",
       "dependencies": {
         "next": "^15.3.3",
+        "openai": "^6.48.0",
         "react": "^19.1.0",
         "react-dom": "^19.1.0"
       },
@@ -6035,6 +6036,36 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/openai": {
+      "version": "6.48.0",
+      "resolved": "https://registry.npmjs.org/openai/-/openai-6.48.0.tgz",
+      "integrity": "sha512-KhVp+FyV50QrXNextvL9hIU5l6ox5HYuKQjGVk7lIqprgJol90+dQXWONV6S1lRWsKA1bXjrow8RsUT14M1hNA==",
+      "license": "Apache-2.0",
+      "peerDependencies": {
+        "@aws-sdk/credential-provider-node": ">=3.972.0 <4",
+        "@smithy/hash-node": ">=4.3.0 <5",
+        "@smithy/signature-v4": ">=5.4.0 <6",
+        "ws": "^8.18.0",
+        "zod": "^3.25 || ^4.0"
+      },
+      "peerDependenciesMeta": {
+        "@aws-sdk/credential-provider-node": {
+          "optional": true
+        },
+        "@smithy/hash-node": {
+          "optional": true
+        },
+        "@smithy/signature-v4": {
+          "optional": true
+        },
+        "ws": {
+          "optional": true
+        },
+        "zod": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/optionator": {
       "version": "0.9.4",
       "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
@@ -7952,7 +7983,7 @@
       "version": "8.21.1",
       "resolved": "https://registry.npmjs.org/ws/-/ws-8.21.1.tgz",
       "integrity": "sha512-+0NTnW77fFN/DjQi6k/Sq/Yvk4Sgajw7urW8V+asjXnRgDs9gyGkdb7EzgfhA4goXsRIZKE28fzIXBHEzhuiWw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=10.0.0"
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 0022a01..64b70fe 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -15,6 +15,7 @@
   },
   "dependencies": {
     "next": "^15.3.3",
+    "openai": "^6.48.0",
     "react": "^19.1.0",
     "react-dom": "^19.1.0"
   },
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index a4c1df0..b0eaaaf 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -18,8 +18,22 @@ export default defineConfig({
   webServer: {
     command: "npm run dev -- --hostname 127.0.0.1 --port 3020",
     url: baseURL,
-    // Prefer local reuse: port 3020 is often already served by `npm run dev`.
-    reuseExistingServer: true,
+    reuseExistingServer: false,
     timeout: 180_000,
+    env: {
+      ...process.env,
+      // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
+      // without forcing fake (secrets must already be in the environment).
+      ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"
+        ? {
+            OPS1_CONVERSATION_PROVIDER: "",
+          }
+        : {
+            OPS1_CONVERSATION_PROVIDER: "fake",
+            OPENAI_API_KEY:
+              process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
+            OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
+          }),
+    },
   },
 });

```

## Confirmations

- Aucune suppression de branche demandée / effectuée
- Aucun force push
- Delivery branch locale encore présente (cleanup non demandé)

## Réserves

- Cleanup branche delivery / worktree : non demandé dans ce cycle

## Verdict

`OPS1 I2 — MERGED TO MAIN — READY FOR HANDOFF`
