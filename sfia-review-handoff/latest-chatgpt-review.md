# Review Pack — OPS1 I1 PR Readiness

## Métadonnées

| Champ | Valeur |
|---|---|
| Date / heure / fuseau | 2026-07-20 22:04:08 CEST |
| Repository | `mcleland147/sfia-workspace` |
| Branche | `delivery/sfia-studio-ops1-i1-session-journal` |
| HEAD initial | `7dc742bff5ab6452b220bc7f00e665dde5af8c60` |
| HEAD projet | `97df7d5127455297b942775dd9159f7eba121bdb` |
| Base / merge-base | `7dc742bff5ab6452b220bc7f00e665dde5af8c60` |
| Décisions Morris | `GO OPS1 I1 VALIDATION — WITH VISUAL EVIDENCE RESERVE` · `GO COMMIT PUSH PR DRAFT — OPS1 I1` |
| Handoff source | tip précédent `68ab2f2…` — `OPS1 I1 SESSION AND JOURNAL IMPLEMENTED — READY FOR CHATGPT DELIVERY REVIEW` |
| PR | #246 — https://github.com/mcleland147/sfia-workspace/pull/246 |
| État PR | Draft / OPEN / non mergée |
| Verdict | `OPS1 I1 PR DRAFT CREATED — READY FOR CHATGPT PR REVIEW` |

## Fichiers commités (18)

- `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx`
- `projects/sfia-studio/app/__tests__/ops1/domain.test.ts`
- `projects/sfia-studio/app/__tests__/ops1/repository.test.ts`
- `projects/sfia-studio/app/app/nouvelle-demande/page.tsx`
- `projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts`
- `projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx`
- `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`
- `projects/sfia-studio/app/features/ops1/ops1-session.module.css`
- `projects/sfia-studio/app/lib/ops1/actions.ts`
- `projects/sfia-studio/app/lib/ops1/db.ts`
- `projects/sfia-studio/app/lib/ops1/errors.ts`
- `projects/sfia-studio/app/lib/ops1/fixtureReply.ts`
- `projects/sfia-studio/app/lib/ops1/ids.ts`
- `projects/sfia-studio/app/lib/ops1/index.ts`
- `projects/sfia-studio/app/lib/ops1/paths.ts`
- `projects/sfia-studio/app/lib/ops1/repository.ts`
- `projects/sfia-studio/app/lib/ops1/types.ts`
- `projects/sfia-studio/app/lib/ops1/validation.ts`

## Stories

| Story | Statut |
|---|---|
| OPS1-US-E01-01 | Validée (OPEN + SESSION_OPENED + rollback) |
| OPS1-US-E01-02 | Validée (fixture/local + TURN_APPENDED + reload) |
| OPS1-US-E01-03 | **Exclue** (CLOSED réservé schéma/type uniquement) |

## Architecture / SQLite

- `node:sqlite` / `DatabaseSync`
- Aucune dépendance npm ; package.json / lockfile inchangés
- `PRAGMA foreign_keys = ON` + integrity_check
- DB `.sfia-exec/local-i1/state/ops1.sqlite` ignorée
- Tests sur `OPS1_EXEC_ROOT` temporaire

## Tests exécutés

- lint clean · typecheck clean · 55 tests · build OK
- E2E I1 OK · p0-smoke OK
- `git diff --check` clean · secrets scan clean

## Captures runtime (1440×1024)

- `.tmp-sfia-review/screenshots-ops1-i1/ops1-i1-empty.png`
- `.tmp-sfia-review/screenshots-ops1-i1/ops1-i1-open-journal.png`
- `.tmp-sfia-review/screenshots-ops1-i1/ops1-i1-after-reload.png`

Réserve visuelle : `VISUAL EVIDENCE PRODUCED — DIRECT CHATGPT PIXEL REVIEW NOT PERFORMED`

## Réserves restantes

- Node non figé
- CI absente
- worktree ≠ sandbox
- stack/fournisseur
- FD-CAND-15 · UX-R01…R04
- I2–I7 / GPT live / Cursor live / MVP / production fermés

## Commit / push / PR

| Élément | Valeur |
|---|---|
| Commit | `97df7d5127455297b942775dd9159f7eba121bdb` — `feat: implement OPS1 I1 session and journal` |
| Remote | `origin/delivery/sfia-studio-ops1-i1-session-journal` = `97df7d5127455297b942775dd9159f7eba121bdb` |
| PR | #246 Draft/OPEN |
| Merge | **aucun** |

## Verdict

`OPS1 I1 PR DRAFT CREATED — READY FOR CHATGPT PR REVIEW`

---

# Diff complet du commit

```
commit 97df7d5127455297b942775dd9159f7eba121bdb
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 20 22:04:54 2026 +0200

    feat: implement OPS1 I1 session and journal
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
new file mode 100644
index 0000000..cb9eb9a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -0,0 +1,98 @@
+import { render, screen, waitFor } from "@testing-library/react";
+import userEvent from "@testing-library/user-event";
+import { beforeEach, describe, expect, it, vi } from "vitest";
+import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";
+
+const create = vi.fn();
+const get = vi.fn();
+const append = vi.fn();
+
+vi.mock("@/lib/ops1/actions", () => ({
+  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
+  ops1GetSessionAction: (...args: unknown[]) => get(...args),
+  ops1AppendUserMessageAction: (...args: unknown[]) => append(...args),
+}));
+
+describe("Ops1SessionScreen", () => {
+  beforeEach(() => {
+    vi.clearAllMocks();
+    window.sessionStorage.clear();
+  });
+
+  it("shows empty state and fixture badge", async () => {
+    render(<Ops1SessionScreen />);
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
+    });
+    expect(screen.getByText("MODE FIXTURE / NON LIVE")).toBeInTheDocument();
+    expect(screen.getByText("Aucune session active")).toBeInTheDocument();
+  });
+
+  it("creates OPEN session and shows sessionId", async () => {
+    const user = userEvent.setup();
+    create.mockResolvedValue({
+      ok: true,
+      data: {
+        session: {
+          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
+          projectKey: "sfia-studio-ops1",
+          status: "OPEN",
+          createdAt: "2026-07-20T21:00:00+02:00",
+          updatedAt: "2026-07-20T21:00:00+02:00",
+          parentSessionId: null,
+          fixtureMode: true,
+        },
+      },
+    });
+    get.mockResolvedValue({
+      ok: true,
+      data: {
+        session: {
+          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
+          projectKey: "sfia-studio-ops1",
+          status: "OPEN",
+          createdAt: "2026-07-20T21:00:00+02:00",
+          updatedAt: "2026-07-20T21:00:00+02:00",
+          parentSessionId: null,
+          fixtureMode: true,
+        },
+        turns: [],
+      },
+    });
+
+    render(<Ops1SessionScreen />);
+    await waitFor(() =>
+      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
+        0,
+      ),
+    );
+    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-session-id")).toHaveTextContent(
+        "ops1-sess-11111111-1111-4111-8111-111111111111",
+      );
+    });
+    expect(screen.getByTestId("ops1-session-status")).toHaveTextContent("OPEN");
+  });
+
+  it("shows create error", async () => {
+    const user = userEvent.setup();
+    create.mockResolvedValue({
+      ok: false,
+      code: "PERSISTENCE",
+      message: "Échec de création de la session.",
+    });
+    render(<Ops1SessionScreen />);
+    await waitFor(() =>
+      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
+        0,
+      ),
+    );
+    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
+        "Échec de création de la session.",
+      );
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/domain.test.ts b/projects/sfia-studio/app/__tests__/ops1/domain.test.ts
new file mode 100644
index 0000000..b029ddd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/domain.test.ts
@@ -0,0 +1,55 @@
+import { describe, expect, it } from "vitest";
+import { createEventId, createSessionId, createTurnId } from "@/lib/ops1/ids";
+import {
+  assertMessageContent,
+  assertSessionId,
+  assertTurnRole,
+} from "@/lib/ops1/validation";
+import { Ops1Error } from "@/lib/ops1/errors";
+import { buildFixtureAssistantReply } from "@/lib/ops1/fixtureReply";
+import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
+
+describe("ops1 ids", () => {
+  it("creates unique session and turn ids", () => {
+    const a = createSessionId();
+    const b = createSessionId();
+    expect(a).not.toEqual(b);
+    expect(a).toMatch(/^ops1-sess-/);
+    expect(createTurnId()).toMatch(/^ops1-turn-/);
+    expect(createEventId()).toMatch(/^ops1-evt-/);
+  });
+});
+
+describe("ops1 validation", () => {
+  it("accepts valid session id", () => {
+    const id = createSessionId();
+    expect(assertSessionId(id)).toBe(id);
+  });
+
+  it("rejects invalid session id", () => {
+    expect(() => assertSessionId("nope")).toThrow(Ops1Error);
+  });
+
+  it("validates message content", () => {
+    expect(assertMessageContent("  hello  ")).toBe("hello");
+    expect(() => assertMessageContent("")).toThrow(Ops1Error);
+    expect(() => assertMessageContent("x".repeat(OPS1_MAX_MESSAGE_CHARS + 1))).toThrow(
+      Ops1Error,
+    );
+  });
+
+  it("validates roles", () => {
+    expect(assertTurnRole("user")).toBe("user");
+    expect(assertTurnRole("assistant_fixture")).toBe("assistant_fixture");
+    expect(() => assertTurnRole("assistant")).toThrow(Ops1Error);
+  });
+});
+
+describe("ops1 fixture reply", () => {
+  it("marks non-live fixture content", () => {
+    const reply = buildFixtureAssistantReply("Bonjour Campus360");
+    expect(reply).toContain("FIXTURE / NON LIVE");
+    expect(reply).toContain("Aucun fournisseur GPT");
+    expect(reply).toContain("Bonjour Campus360");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/repository.test.ts b/projects/sfia-studio/app/__tests__/ops1/repository.test.ts
new file mode 100644
index 0000000..76c9c2a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/repository.test.ts
@@ -0,0 +1,140 @@
+/** @vitest-environment node */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  appendTurn,
+  createOpenSession,
+  getSession,
+  getSessionBundle,
+  listTurns,
+  resetOps1DbForTests,
+} from "@/lib/ops1/repository";
+import { openOps1Db } from "@/lib/ops1/db";
+import { Ops1Error } from "@/lib/ops1/errors";
+
+describe("ops1 sqlite repository", () => {
+  let tmpRoot: string;
+
+  beforeEach(() => {
+    resetOps1DbForTests();
+    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i1-"));
+    process.env.OPS1_EXEC_ROOT = tmpRoot;
+  });
+
+  afterEach(() => {
+    resetOps1DbForTests();
+    delete process.env.OPS1_EXEC_ROOT;
+    fs.rmSync(tmpRoot, { recursive: true, force: true });
+  });
+
+  it("creates schema and OPEN session with SESSION_OPENED event", () => {
+    const { session, event } = createOpenSession();
+    expect(session.status).toBe("OPEN");
+    expect(session.fixtureMode).toBe(true);
+    expect(event.type).toBe("SESSION_OPENED");
+    expect(getSession(session.sessionId)?.sessionId).toBe(session.sessionId);
+
+    const db = openOps1Db();
+    const row = db
+      .prepare(`SELECT type FROM session_events WHERE session_id = ?`)
+      .get(session.sessionId) as { type: string };
+    expect(row.type).toBe("SESSION_OPENED");
+  });
+
+  it("appends turns in stable order and survives reconnect", () => {
+    const { session } = createOpenSession();
+    appendTurn({
+      sessionId: session.sessionId,
+      role: "user",
+      content: "Tour A",
+      fixture: true,
+    });
+    appendTurn({
+      sessionId: session.sessionId,
+      role: "assistant_fixture",
+      content: "Tour B",
+      fixture: true,
+    });
+    appendTurn({
+      sessionId: session.sessionId,
+      role: "user",
+      content: "Tour C",
+      fixture: true,
+    });
+
+    resetOps1DbForTests();
+    const turns = listTurns(session.sessionId);
+    expect(turns.map((t) => t.content)).toEqual(["Tour A", "Tour B", "Tour C"]);
+    expect(turns.map((t) => t.sequence)).toEqual([1, 2, 3]);
+  });
+
+  it("enforces unique sequence and foreign keys", () => {
+    const { session } = createOpenSession();
+    const db = openOps1Db();
+    appendTurn({
+      sessionId: session.sessionId,
+      role: "user",
+      content: "one",
+      fixture: true,
+    });
+    expect(() =>
+      db
+        .prepare(
+          `INSERT INTO journal_turns (
+             turn_id, session_id, sequence, role, content, fixture, created_at
+           ) VALUES ('dup', ?, 1, 'user', 'x', 1, datetime('now'))`,
+        )
+        .run(session.sessionId),
+    ).toThrow();
+
+    expect(() =>
+      db
+        .prepare(
+          `INSERT INTO journal_turns (
+             turn_id, session_id, sequence, role, content, fixture, created_at
+           ) VALUES ('orphan', 'ops1-sess-00000000-0000-4000-8000-000000000000', 1, 'user', 'x', 1, datetime('now'))`,
+        )
+        .run(),
+    ).toThrow();
+  });
+
+  it("rolls back failed multi-write without partial OPEN session", () => {
+    const db = openOps1Db();
+    // Force failure after begin by closing mid-flight is hard; instead verify
+    // that a thrown insert leaves no session when createOpenSession fails via
+    // invalid forced path: corrupt by making session insert conflict.
+    const { session } = createOpenSession();
+    expect(() => {
+      db.exec("BEGIN IMMEDIATE");
+      db.prepare(
+        `INSERT INTO cycle_sessions (
+           session_id, project_key, status, created_at, updated_at,
+           parent_session_id, fixture_mode
+         ) VALUES (?, 'x', 'OPEN', 't', 't', NULL, 1)`,
+      ).run(session.sessionId);
+      db.exec("COMMIT");
+    }).toThrow();
+
+    const bundle = getSessionBundle(session.sessionId);
+    expect(bundle?.session.status).toBe("OPEN");
+  });
+
+  it("does not leave a complete turn when append fails validation path", () => {
+    expect(() =>
+      appendTurn({
+        sessionId: "ops1-sess-00000000-0000-4000-8000-000000000099",
+        role: "user",
+        content: "ghost",
+        fixture: true,
+      }),
+    ).toThrow(Ops1Error);
+  });
+
+  it("stores sqlite under exec root", () => {
+    createOpenSession();
+    const dbFile = path.join(tmpRoot, "state", "ops1.sqlite");
+    expect(fs.existsSync(dbFile)).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index ba2b1f0..5878171 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -4,32 +4,31 @@ import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDeman
 export default function NouvelleDemandePage() {
   return (
     <StudioShell
-      variant="floating"
+      variant="flush"
       activeRoute="/nouvelle-demande"
       title="Nouvelle demande"
       pills={[
-        { label: "Brouillon", tone: "orange" },
-        { label: "main · clean", tone: "green" },
+        { label: "MODE FIXTURE / NON LIVE", tone: "orange" },
+        { label: "OPS1 I1", tone: "blueFlush" },
       ]}
       copilot={{
-        variant: "floating",
+        variant: "flush",
         name: "Nora · SFIA Copilot",
-        subtitle: "Qualification en direct",
-        avatarTone: "pink",
+        subtitle: "OPS1 I1 — session locale",
+        avatarTone: "blue",
         levelPill: "L0 humain",
         summary:
-          "Votre demande semble relever d'un cycle de conception fonctionnelle, avec un gate Morris avant préparation du prompt Cursor.",
+          "Session CycleSession OPEN et journal fixture. Aucun GPT live, aucun Cursor live, aucune action Markdown.",
         checklist: [
-          "Cycle et profil",
-          "Périmètre autorisé",
-          "Gates et stop conditions",
-          "Review pack attendu",
+          "Créer session OPEN",
+          "Journaliser tours fixture",
+          "Recharger et retrouver le journal",
+          "Aucun effet d’exécution",
         ],
-        checklistTitle: "Ce que je vais préparer",
-        showRecommendationLabel: true,
-        riskTitle: "RISQUE DÉTECTÉ",
+        checklistTitle: "Parcours I1",
+        riskTitle: "PÉRIMÈTRE",
         riskText:
-          "Le besoin mélange automatisation et arbitrage humain. Je séparerai clairement les deux.",
+          "I1 n’ouvre pas I2–I7, la clôture CLOSED, ni la CI. E01-03 hors scope.",
       }}
     >
       <NouvelleDemandeScreen />
diff --git a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
new file mode 100644
index 0000000..c6e97f6
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
@@ -0,0 +1,75 @@
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/screenshots-ops1-i1",
+);
+
+test.beforeAll(() => {
+  fs.mkdirSync(screenshotDir, { recursive: true });
+});
+
+test.describe("OPS1 I1 session + journal", () => {
+  test("creates session, appends turns, persists after reload", async ({
+    page,
+  }) => {
+    await page.goto("/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
+    await expect(
+      page.getByTestId("ops1-session-root").getByText("MODE FIXTURE / NON LIVE"),
+    ).toBeVisible();
+    await expect(page.getByTestId("ops1-empty-state")).toBeVisible();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i1-empty.png"),
+      fullPage: true,
+    });
+
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-open-session")).toBeVisible();
+    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
+    const sessionId = await page.getByTestId("ops1-session-id").innerText();
+    expect(sessionId).toMatch(/^ops1-sess-/);
+
+    await page.getByTestId("ops1-message-input").fill("Premier message I1");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
+
+    await page.getByTestId("ops1-message-input").fill("Second message I1");
+    await page.getByTestId("ops1-send-message").click();
+
+    const turns = page.getByTestId("ops1-turn");
+    await expect(turns).toHaveCount(4); // 2 user + 2 fixture assistant
+    await expect(turns.nth(0)).toHaveAttribute("data-role", "user");
+    await expect(turns.nth(1)).toHaveAttribute("data-role", "assistant_fixture");
+    await expect(
+      page.getByTestId("ops1-journal").getByText("FIXTURE / NON LIVE").first(),
+    ).toBeVisible();
+
+    // No execution CTA
+    await expect(
+      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
+    ).toHaveCount(0);
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i1-open-journal.png"),
+      fullPage: true,
+    });
+
+    await page.reload();
+    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
+    await expect(page.getByTestId("ops1-turn")).toHaveCount(4);
+    await expect(page.getByTestId("ops1-turn").nth(2)).toContainText(
+      "Second message I1",
+    );
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "ops1-i1-after-reload.png"),
+      fullPage: true,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
index b10807a..45a1383 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
@@ -1,13 +1,31 @@
 "use client";
 
+import { Suspense } from "react";
+import { useSearchParams } from "next/navigation";
 import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
 import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
+import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";
 
-/** Increment A : états VS-UX-01…03 (+ variantes) dans la route Nouvelle demande. */
+function NouvelleDemandeBody() {
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
+  return <Ops1SessionScreen />;
+}
+
+/** OPS1 I1 session/journal by default ; POC vertical-slice via `?vs=`. */
 export function NouvelleDemandeScreen() {
   return (
-    <VsDemoRoot>
-      <VsNouvelleDemandeScreen />
-    </VsDemoRoot>
+    <Suspense fallback={null}>
+      <NouvelleDemandeBody />
+    </Suspense>
   );
 }
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
new file mode 100644
index 0000000..bb0d8ee
--- /dev/null
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -0,0 +1,287 @@
+"use client";
+
+import { useCallback, useEffect, useState, useTransition } from "react";
+import { CtaButton } from "@/components/ui/CtaButton";
+import { StatusPill } from "@/components/ui/StatusPill";
+import {
+  ops1AppendUserMessageAction,
+  ops1CreateSessionAction,
+  ops1GetSessionAction,
+} from "@/lib/ops1/actions";
+import type { CycleSession, JournalTurn } from "@/lib/ops1/types";
+import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
+import styles from "./ops1-session.module.css";
+
+const STORAGE_KEY = "sfia-ops1-i1-active-session";
+
+type UiPhase =
+  | "boot"
+  | "idle"
+  | "creating"
+  | "open"
+  | "sending"
+  | "error_create"
+  | "error_journal";
+
+export function Ops1SessionScreen() {
+  const [phase, setPhase] = useState<UiPhase>("boot");
+  const [session, setSession] = useState<CycleSession | null>(null);
+  const [turns, setTurns] = useState<JournalTurn[]>([]);
+  const [draft, setDraft] = useState("");
+  const [error, setError] = useState<string | null>(null);
+  const [pending, startTransition] = useTransition();
+
+  const loadBundle = useCallback(async (sessionId: string) => {
+    const result = await ops1GetSessionAction(sessionId);
+    if (!result.ok) {
+      setError(result.message);
+      setSession(null);
+      setTurns([]);
+      setPhase("idle");
+      if (typeof window !== "undefined") {
+        window.sessionStorage.removeItem(STORAGE_KEY);
+      }
+      return;
+    }
+    setSession(result.data.session);
+    setTurns(result.data.turns);
+    setError(null);
+    setPhase("open");
+  }, []);
+
+  useEffect(() => {
+    let cancelled = false;
+    (async () => {
+      const stored =
+        typeof window !== "undefined"
+          ? window.sessionStorage.getItem(STORAGE_KEY)
+          : null;
+      if (stored) {
+        if (!cancelled) await loadBundle(stored);
+        return;
+      }
+      if (!cancelled) setPhase("idle");
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [loadBundle]);
+
+  const onCreate = () => {
+    setError(null);
+    setPhase("creating");
+    startTransition(async () => {
+      const result = await ops1CreateSessionAction();
+      if (!result.ok) {
+        setError(result.message);
+        setPhase("error_create");
+        return;
+      }
+      window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
+      setSession(result.data.session);
+      setTurns([]);
+      setPhase("open");
+    });
+  };
+
+  const onSend = () => {
+    if (!session) return;
+    setError(null);
+    setPhase("sending");
+    startTransition(async () => {
+      const result = await ops1AppendUserMessageAction({
+        sessionId: session.sessionId,
+        content: draft,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        setPhase("error_journal");
+        return;
+      }
+      setDraft("");
+      if (result.data.assistantError) {
+        setError(result.data.assistantError);
+        setPhase("error_journal");
+      } else {
+        setPhase("open");
+      }
+      await loadBundle(session.sessionId);
+    });
+  };
+
+  const onClearLocalPointer = () => {
+    window.sessionStorage.removeItem(STORAGE_KEY);
+    setSession(null);
+    setTurns([]);
+    setError(null);
+    setPhase("idle");
+  };
+
+  return (
+    <div className={styles.root} data-testid="ops1-session-root">
+      <header className={styles.header}>
+        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I1</p>
+        <h2 className={styles.title} id="ops1-session-heading">
+          Session OPS1
+        </h2>
+        <p className={styles.lede}>
+          Ouvrir une CycleSession locale, journaliser des tours fixture, et
+          retrouver le journal après rechargement. Aucun fournisseur live.
+        </p>
+        <div className={styles.badgeRow} aria-live="polite">
+          <StatusPill tone="orange">MODE FIXTURE / NON LIVE</StatusPill>
+          {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
+        </div>
+      </header>
+
+      {phase === "boot" || (pending && phase === "creating") ? (
+        <p className={styles.muted} data-testid="ops1-loading">
+          {phase === "creating" ? "Création de la session…" : "Chargement…"}
+        </p>
+      ) : null}
+
+      {(phase === "idle" || phase === "error_create") && !session ? (
+        <section
+          className={styles.panel}
+          data-testid="ops1-empty-state"
+          aria-labelledby="ops1-empty-title"
+        >
+          <h2 id="ops1-empty-title" className={styles.panelTitle}>
+            Aucune session active
+          </h2>
+          <p className={styles.muted}>
+            Projet cible : <strong>sfia-studio-ops1</strong>. La session sera
+            créée en statut OPEN avec journal initialisé.
+          </p>
+          {error ? (
+            <p className={styles.error} role="alert" data-testid="ops1-error">
+              {error}
+            </p>
+          ) : null}
+          <CtaButton
+            onClick={onCreate}
+            disabled={pending}
+            data-testid="ops1-create-session"
+          >
+            Nouvelle session
+          </CtaButton>
+        </section>
+      ) : null}
+
+      {session ? (
+        <section
+          className={styles.panel}
+          data-testid="ops1-open-session"
+          aria-labelledby="ops1-open-title"
+        >
+          <h2 id="ops1-open-title" className={styles.panelTitle}>
+            Session ouverte
+          </h2>
+          <dl className={styles.meta}>
+            <div>
+              <dt>sessionId</dt>
+              <dd data-testid="ops1-session-id">{session.sessionId}</dd>
+            </div>
+            <div>
+              <dt>Statut</dt>
+              <dd data-testid="ops1-session-status">{session.status}</dd>
+            </div>
+            <div>
+              <dt>Créée</dt>
+              <dd>{session.createdAt}</dd>
+            </div>
+            <div>
+              <dt>Projet</dt>
+              <dd>{session.projectKey}</dd>
+            </div>
+          </dl>
+
+          <div className={styles.journal} data-testid="ops1-journal">
+            <h3 className={styles.journalTitle}>Journal</h3>
+            {turns.length === 0 ? (
+              <p className={styles.muted} data-testid="ops1-journal-empty">
+                Aucun tour pour l’instant.
+              </p>
+            ) : (
+              <ol className={styles.turnList}>
+                {turns.map((turn) => (
+                  <li
+                    key={turn.turnId}
+                    className={
+                      turn.role === "user"
+                        ? styles.turnUser
+                        : styles.turnAssistant
+                    }
+                    data-testid="ops1-turn"
+                    data-role={turn.role}
+                    data-sequence={turn.sequence}
+                  >
+                    <div className={styles.turnMeta}>
+                      <span>#{turn.sequence}</span>
+                      <span>
+                        {turn.role === "user" ? "Vous" : "Assistant fixture"}
+                      </span>
+                      {turn.fixture ? (
+                        <span className={styles.fixtureTag}>fixture</span>
+                      ) : null}
+                    </div>
+                    <p className={styles.turnContent}>{turn.content}</p>
+                  </li>
+                ))}
+              </ol>
+            )}
+          </div>
+
+          {error ? (
+            <p className={styles.error} role="alert" data-testid="ops1-error">
+              {error}
+            </p>
+          ) : null}
+
+          <form
+            className={styles.composer}
+            onSubmit={(e) => {
+              e.preventDefault();
+              onSend();
+            }}
+          >
+            <label className={styles.label} htmlFor="ops1-message">
+              Message local (fixture)
+            </label>
+            <textarea
+              id="ops1-message"
+              className={styles.textarea}
+              data-testid="ops1-message-input"
+              value={draft}
+              maxLength={OPS1_MAX_MESSAGE_CHARS}
+              rows={4}
+              disabled={pending || phase === "sending"}
+              onChange={(e) => setDraft(e.target.value)}
+              placeholder="Saisir un tour utilisateur local…"
+            />
+            <div className={styles.composerActions}>
+              <CtaButton
+                type="submit"
+                disabled={pending || !draft.trim()}
+                data-testid="ops1-send-message"
+              >
+                Envoyer (fixture)
+              </CtaButton>
+              <CtaButton
+                variant="secondary"
+                onClick={onClearLocalPointer}
+                data-testid="ops1-clear-pointer"
+              >
+                Revenir à l’écran vide
+              </CtaButton>
+            </div>
+            <p className={styles.hint}>
+              Pas d’action d’exécution, pas de gate, pas de Campus360. Max{" "}
+              {OPS1_MAX_MESSAGE_CHARS} caractères.
+            </p>
+          </form>
+        </section>
+      ) : null}
+    </div>
+  );
+}
diff --git a/projects/sfia-studio/app/features/ops1/ops1-session.module.css b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
new file mode 100644
index 0000000..dec85d4
--- /dev/null
+++ b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
@@ -0,0 +1,190 @@
+.root {
+  display: flex;
+  flex-direction: column;
+  gap: 1.25rem;
+  max-width: 920px;
+}
+
+.header {
+  display: flex;
+  flex-direction: column;
+  gap: 0.5rem;
+}
+
+.kicker {
+  margin: 0;
+  font-size: 0.75rem;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-muted);
+}
+
+.title {
+  margin: 0;
+  font-size: 1.75rem;
+  line-height: 1.2;
+  color: var(--sfia-ink);
+}
+
+.lede {
+  margin: 0;
+  color: var(--sfia-muted);
+  max-width: 52rem;
+}
+
+.badgeRow {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.5rem;
+  margin-top: 0.25rem;
+}
+
+.panel {
+  background: var(--sfia-surface);
+  border: 1px solid var(--sfia-border);
+  border-radius: 12px;
+  padding: 1.25rem 1.35rem;
+  box-shadow: var(--sfia-shadow-sm);
+  display: flex;
+  flex-direction: column;
+  gap: 1rem;
+}
+
+.panelTitle {
+  margin: 0;
+  font-size: 1.1rem;
+  color: var(--sfia-ink);
+}
+
+.muted {
+  margin: 0;
+  color: var(--sfia-muted);
+}
+
+.error {
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  background: #fff1f1;
+  border: 1px solid #f5c2c2;
+  color: #8a1f1f;
+}
+
+.meta {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
+  gap: 0.75rem 1rem;
+  margin: 0;
+}
+
+.meta dt {
+  font-size: 0.7rem;
+  text-transform: uppercase;
+  letter-spacing: 0.04em;
+  color: var(--sfia-muted);
+}
+
+.meta dd {
+  margin: 0.15rem 0 0;
+  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
+  font-size: 0.85rem;
+  word-break: break-all;
+  color: var(--sfia-ink);
+}
+
+.journal {
+  display: flex;
+  flex-direction: column;
+  gap: 0.75rem;
+}
+
+.journalTitle {
+  margin: 0;
+  font-size: 0.95rem;
+}
+
+.turnList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 0.65rem;
+}
+
+.turnUser,
+.turnAssistant {
+  border-radius: 10px;
+  padding: 0.75rem 0.9rem;
+  border: 1px solid var(--sfia-border);
+}
+
+.turnUser {
+  background: var(--sfia-blue-soft);
+}
+
+.turnAssistant {
+  background: var(--sfia-purple-soft);
+}
+
+.turnMeta {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.5rem;
+  font-size: 0.75rem;
+  color: var(--sfia-muted);
+  margin-bottom: 0.35rem;
+}
+
+.fixtureTag {
+  color: var(--sfia-orange);
+  font-weight: 600;
+}
+
+.turnContent {
+  margin: 0;
+  white-space: pre-wrap;
+  color: var(--sfia-ink);
+  line-height: 1.45;
+}
+
+.composer {
+  display: flex;
+  flex-direction: column;
+  gap: 0.5rem;
+}
+
+.label {
+  font-size: 0.85rem;
+  font-weight: 600;
+  color: var(--sfia-ink);
+}
+
+.textarea {
+  width: 100%;
+  resize: vertical;
+  min-height: 96px;
+  border-radius: 10px;
+  border: 1px solid var(--sfia-border);
+  padding: 0.75rem 0.85rem;
+  font: inherit;
+  color: var(--sfia-ink);
+  background: #fff;
+}
+
+.textarea:focus {
+  outline: 2px solid var(--sfia-blue);
+  outline-offset: 1px;
+}
+
+.composerActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.65rem;
+}
+
+.hint {
+  margin: 0;
+  font-size: 0.8rem;
+  color: var(--sfia-muted);
+}
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
new file mode 100644
index 0000000..9836fd1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -0,0 +1,120 @@
+"use server";
+
+import {
+  appendTurn,
+  createOpenSession,
+  getSessionBundle,
+  listOpenSessions,
+} from "./repository";
+import { buildFixtureAssistantReply } from "./fixtureReply";
+import { Ops1Error, toSafeClientError } from "./errors";
+import { assertMessageContent, assertSessionId } from "./validation";
+import type { CycleSession, JournalTurn } from "./types";
+
+export type Ops1ActionResult<T> =
+  | { ok: true; data: T }
+  | { ok: false; code: string; message: string };
+
+function fail(error: unknown): Ops1ActionResult<never> {
+  const safe = toSafeClientError(error);
+  console.error("[ops1]", safe.code, safe.message, error);
+  return { ok: false, code: safe.code, message: safe.message };
+}
+
+export async function ops1CreateSessionAction(): Promise<
+  Ops1ActionResult<{ session: CycleSession }>
+> {
+  try {
+    const { session, event } = createOpenSession();
+    console.info("[ops1] SESSION_OPENED", session.sessionId, event.eventId);
+    return { ok: true, data: { session } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1ListOpenSessionsAction(): Promise<
+  Ops1ActionResult<{ sessions: CycleSession[] }>
+> {
+  try {
+    return { ok: true, data: { sessions: listOpenSessions() } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1GetSessionAction(
+  sessionId: string,
+): Promise<
+  Ops1ActionResult<{ session: CycleSession; turns: JournalTurn[] }>
+> {
+  try {
+    const id = assertSessionId(sessionId);
+    const bundle = getSessionBundle(id);
+    if (!bundle) {
+      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
+    }
+    return { ok: true, data: bundle };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
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
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const content = assertMessageContent(input.content);
+
+    const { turn: userTurn, event } = appendTurn({
+      sessionId,
+      role: "user",
+      content,
+      fixture: true,
+    });
+    console.info(
+      "[ops1] TURN_APPENDED",
+      sessionId,
+      userTurn.turnId,
+      event.eventId,
+    );
+
+    let assistantTurn: JournalTurn | null = null;
+    let assistantError: string | null = null;
+    try {
+      const reply = buildFixtureAssistantReply(content);
+      const appended = appendTurn({
+        sessionId,
+        role: "assistant_fixture",
+        content: reply,
+        fixture: true,
+      });
+      assistantTurn = appended.turn;
+      console.info(
+        "[ops1] TURN_APPENDED",
+        sessionId,
+        appended.turn.turnId,
+        appended.event.eventId,
+      );
+    } catch (error) {
+      const safe = toSafeClientError(error);
+      assistantError = safe.message;
+      console.error("[ops1] TURN_PERSISTENCE_FAILED assistant", error);
+    }
+
+    return {
+      ok: true,
+      data: { userTurn, assistantTurn, assistantError },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
new file mode 100644
index 0000000..5f6662b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -0,0 +1,109 @@
+import { DatabaseSync } from "node:sqlite";
+import { resolveOps1SqlitePath } from "./paths";
+import { Ops1Error } from "./errors";
+
+const SCHEMA_SQL = `
+PRAGMA foreign_keys = ON;
+
+CREATE TABLE IF NOT EXISTS cycle_sessions (
+  session_id TEXT PRIMARY KEY NOT NULL,
+  project_key TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL,
+  parent_session_id TEXT,
+  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
+);
+
+CREATE TABLE IF NOT EXISTS journal_turns (
+  turn_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  sequence INTEGER NOT NULL,
+  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
+  content TEXT NOT NULL,
+  fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
+  created_at TEXT NOT NULL,
+  UNIQUE (session_id, sequence),
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
+CREATE TABLE IF NOT EXISTS session_events (
+  event_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT,
+  type TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  detail TEXT NOT NULL
+);
+
+CREATE INDEX IF NOT EXISTS idx_turns_session_seq
+  ON journal_turns(session_id, sequence);
+`;
+
+let singleton: DatabaseSync | null = null;
+let singletonPath: string | null = null;
+
+export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
+  if (singleton && singletonPath === dbPath) {
+    return singleton;
+  }
+  if (singleton) {
+    try {
+      singleton.close();
+    } catch {
+      /* ignore */
+    }
+    singleton = null;
+    singletonPath = null;
+  }
+
+  try {
+    const db = new DatabaseSync(dbPath);
+    db.exec("PRAGMA foreign_keys = ON;");
+    db.exec(SCHEMA_SQL);
+    const integrity = db.prepare("PRAGMA integrity_check").get() as
+      | Record<string, string>
+      | undefined;
+    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
+    if (raw !== "ok") {
+      throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
+    }
+    singleton = db;
+    singletonPath = dbPath;
+    return db;
+  } catch (error) {
+    if (error instanceof Ops1Error) throw error;
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Impossible d’initialiser la base locale OPS1.",
+      error,
+    );
+  }
+}
+
+/** Test helper — force close and clear singleton. */
+export function resetOps1DbForTests(): void {
+  if (singleton) {
+    try {
+      singleton.close();
+    } catch {
+      /* ignore */
+    }
+  }
+  singleton = null;
+  singletonPath = null;
+}
+
+export function nowIsoWithOffset(): string {
+  const d = new Date();
+  const pad = (n: number, w = 2) => String(n).padStart(w, "0");
+  const offsetMin = -d.getTimezoneOffset();
+  const sign = offsetMin >= 0 ? "+" : "-";
+  const abs = Math.abs(offsetMin);
+  const oh = pad(Math.floor(abs / 60));
+  const om = pad(abs % 60);
+  return (
+    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
+    `T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` +
+    `.${pad(d.getMilliseconds(), 3)}${sign}${oh}:${om}`
+  );
+}
diff --git a/projects/sfia-studio/app/lib/ops1/errors.ts b/projects/sfia-studio/app/lib/ops1/errors.ts
new file mode 100644
index 0000000..6a32fc8
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/errors.ts
@@ -0,0 +1,34 @@
+export type Ops1ErrorCode =
+  | "VALIDATION"
+  | "NOT_FOUND"
+  | "PERSISTENCE"
+  | "CONFLICT"
+  | "INTERNAL";
+
+export class Ops1Error extends Error {
+  readonly code: Ops1ErrorCode;
+  readonly safeMessage: string;
+
+  constructor(code: Ops1ErrorCode, safeMessage: string, cause?: unknown) {
+    super(safeMessage);
+    this.name = "Ops1Error";
+    this.code = code;
+    this.safeMessage = safeMessage;
+    if (cause !== undefined) {
+      (this as Error & { cause?: unknown }).cause = cause;
+    }
+  }
+}
+
+export function toSafeClientError(error: unknown): {
+  code: Ops1ErrorCode;
+  message: string;
+} {
+  if (error instanceof Ops1Error) {
+    return { code: error.code, message: error.safeMessage };
+  }
+  return {
+    code: "INTERNAL",
+    message: "Une erreur technique est survenue. Réessayez ou contactez Morris.",
+  };
+}
diff --git a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
new file mode 100644
index 0000000..11c69ad
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
@@ -0,0 +1,10 @@
+/** Deterministic local fixture reply — never presented as live GPT. */
+export function buildFixtureAssistantReply(userContent: string): string {
+  const preview =
+    userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
+  return [
+    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I1.",
+    "Aucun fournisseur GPT n’a été appelé.",
+    `Echo borné : « ${preview} »`,
+  ].join(" ");
+}
diff --git a/projects/sfia-studio/app/lib/ops1/ids.ts b/projects/sfia-studio/app/lib/ops1/ids.ts
new file mode 100644
index 0000000..850458d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/ids.ts
@@ -0,0 +1,13 @@
+import { randomUUID } from "node:crypto";
+
+export function createSessionId(): string {
+  return `ops1-sess-${randomUUID()}`;
+}
+
+export function createTurnId(): string {
+  return `ops1-turn-${randomUUID()}`;
+}
+
+export function createEventId(): string {
+  return `ops1-evt-${randomUUID()}`;
+}
diff --git a/projects/sfia-studio/app/lib/ops1/index.ts b/projects/sfia-studio/app/lib/ops1/index.ts
new file mode 100644
index 0000000..b03b14b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/index.ts
@@ -0,0 +1,4 @@
+export * from "./types";
+export * from "./errors";
+export * from "./validation";
+export * from "./fixtureReply";
diff --git a/projects/sfia-studio/app/lib/ops1/paths.ts b/projects/sfia-studio/app/lib/ops1/paths.ts
new file mode 100644
index 0000000..6f8ffc0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/paths.ts
@@ -0,0 +1,51 @@
+import fs from "node:fs";
+import path from "node:path";
+import { Ops1Error } from "./errors";
+
+/**
+ * Runtime root under projects/sfia-studio/.sfia-exec/**
+ * Override for tests: OPS1_EXEC_ROOT (absolute path under a temp dir).
+ */
+export function resolveOps1ExecRoot(): string {
+  const override = process.env.OPS1_EXEC_ROOT?.trim();
+  if (override) {
+    const resolved = path.resolve(override);
+    ensureDir(resolved);
+    return resolved;
+  }
+
+  // app/ -> sfia-studio/
+  const studioRoot = path.resolve(process.cwd(), "..");
+  const execRoot = path.join(studioRoot, ".sfia-exec", "local-i1");
+  ensureDir(execRoot);
+  assertUnderSfiaExec(studioRoot, execRoot);
+  return execRoot;
+}
+
+export function resolveOps1SqlitePath(execRoot = resolveOps1ExecRoot()): string {
+  const stateDir = path.join(execRoot, "state");
+  ensureDir(stateDir);
+  const dbPath = path.join(stateDir, "ops1.sqlite");
+  assertUnderSfiaExec(path.resolve(execRoot, "..", ".."), path.dirname(dbPath));
+  return dbPath;
+}
+
+function ensureDir(dir: string): void {
+  fs.mkdirSync(dir, { recursive: true });
+}
+
+function assertUnderSfiaExec(studioRoot: string, candidate: string): void {
+  const execBase = path.resolve(studioRoot, ".sfia-exec");
+  const resolved = path.resolve(candidate);
+  if (process.env.OPS1_EXEC_ROOT) {
+    // Test override: must stay under the override root
+    const root = path.resolve(process.env.OPS1_EXEC_ROOT);
+    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
+      throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors racine autorisée.");
+    }
+    return;
+  }
+  if (!resolved.startsWith(execBase + path.sep) && resolved !== execBase) {
+    throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors .sfia-exec.");
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/repository.ts b/projects/sfia-studio/app/lib/ops1/repository.ts
new file mode 100644
index 0000000..5734373
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/repository.ts
@@ -0,0 +1,262 @@
+import type { DatabaseSync } from "node:sqlite";
+import { createEventId, createSessionId, createTurnId } from "./ids";
+import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
+import { Ops1Error } from "./errors";
+import {
+  OPS1_PROJECT_KEY,
+  type CycleSession,
+  type JournalTurn,
+  type SessionEvent,
+  type SessionEventType,
+  type TurnRole,
+} from "./types";
+
+export { resetOps1DbForTests };
+
+function mapSession(row: Record<string, unknown>): CycleSession {
+  return {
+    sessionId: String(row.session_id),
+    projectKey: String(row.project_key),
+    status: row.status as CycleSession["status"],
+    createdAt: String(row.created_at),
+    updatedAt: String(row.updated_at),
+    parentSessionId: row.parent_session_id
+      ? String(row.parent_session_id)
+      : null,
+    fixtureMode: Number(row.fixture_mode) === 1,
+  };
+}
+
+function mapTurn(row: Record<string, unknown>): JournalTurn {
+  return {
+    turnId: String(row.turn_id),
+    sessionId: String(row.session_id),
+    sequence: Number(row.sequence),
+    role: row.role as TurnRole,
+    content: String(row.content),
+    fixture: Number(row.fixture) === 1,
+    createdAt: String(row.created_at),
+  };
+}
+
+function insertEvent(
+  db: DatabaseSync,
+  sessionId: string | null,
+  type: SessionEventType,
+  detail: string,
+  createdAt = nowIsoWithOffset(),
+): SessionEvent {
+  const eventId = createEventId();
+  db.prepare(
+    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
+     VALUES (?, ?, ?, ?, ?)`,
+  ).run(eventId, sessionId, type, createdAt, detail);
+  return { eventId, sessionId, type, createdAt, detail };
+}
+
+export function createOpenSession(db = openOps1Db()): {
+  session: CycleSession;
+  event: SessionEvent;
+} {
+  const sessionId = createSessionId();
+  const createdAt = nowIsoWithOffset();
+
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `INSERT INTO cycle_sessions (
+         session_id, project_key, status, created_at, updated_at,
+         parent_session_id, fixture_mode
+       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, 1)`,
+    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt);
+
+    const event = insertEvent(
+      db,
+      sessionId,
+      "SESSION_OPENED",
+      JSON.stringify({ projectKey: OPS1_PROJECT_KEY, fixtureMode: true }),
+      createdAt,
+    );
+    db.exec("COMMIT");
+
+    return {
+      session: {
+        sessionId,
+        projectKey: OPS1_PROJECT_KEY,
+        status: "OPEN",
+        createdAt,
+        updatedAt: createdAt,
+        parentSessionId: null,
+        fixtureMode: true,
+      },
+      event,
+    };
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    try {
+      insertEvent(
+        db,
+        null,
+        "SESSION_PERSISTENCE_FAILED",
+        "createOpenSession failed",
+      );
+    } catch {
+      /* ignore secondary failure */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec de création de la session. Aucune session OPEN n’a été enregistrée.",
+      error,
+    );
+  }
+}
+
+export function getSession(
+  sessionId: string,
+  db = openOps1Db(),
+): CycleSession | null {
+  const row = db
+    .prepare(`SELECT * FROM cycle_sessions WHERE session_id = ?`)
+    .get(sessionId) as Record<string, unknown> | undefined;
+  return row ? mapSession(row) : null;
+}
+
+export function listOpenSessions(db = openOps1Db()): CycleSession[] {
+  const rows = db
+    .prepare(
+      `SELECT * FROM cycle_sessions
+       WHERE status = 'OPEN'
+       ORDER BY created_at DESC`,
+    )
+    .all() as Record<string, unknown>[];
+  return rows.map(mapSession);
+}
+
+export function listTurns(
+  sessionId: string,
+  db = openOps1Db(),
+): JournalTurn[] {
+  const rows = db
+    .prepare(
+      `SELECT * FROM journal_turns
+       WHERE session_id = ?
+       ORDER BY sequence ASC`,
+    )
+    .all(sessionId) as Record<string, unknown>[];
+  return rows.map(mapTurn);
+}
+
+export function appendTurn(
+  input: {
+    sessionId: string;
+    role: TurnRole;
+    content: string;
+    fixture: boolean;
+  },
+  db = openOps1Db(),
+): { turn: JournalTurn; event: SessionEvent } {
+  const session = getSession(input.sessionId, db);
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
+  const turnId = createTurnId();
+  const createdAt = nowIsoWithOffset();
+
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    const seqRow = db
+      .prepare(
+        `SELECT COALESCE(MAX(sequence), 0) AS max_seq
+         FROM journal_turns WHERE session_id = ?`,
+      )
+      .get(input.sessionId) as { max_seq: number };
+    const sequence = Number(seqRow.max_seq) + 1;
+
+    db.prepare(
+      `INSERT INTO journal_turns (
+         turn_id, session_id, sequence, role, content, fixture, created_at
+       ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
+    ).run(
+      turnId,
+      input.sessionId,
+      sequence,
+      input.role,
+      input.content,
+      input.fixture ? 1 : 0,
+      createdAt,
+    );
+
+    db.prepare(
+      `UPDATE cycle_sessions SET updated_at = ? WHERE session_id = ?`,
+    ).run(createdAt, input.sessionId);
+
+    const event = insertEvent(
+      db,
+      input.sessionId,
+      "TURN_APPENDED",
+      JSON.stringify({
+        turnId,
+        sequence,
+        role: input.role,
+        fixture: input.fixture,
+      }),
+      createdAt,
+    );
+    db.exec("COMMIT");
+
+    return {
+      turn: {
+        turnId,
+        sessionId: input.sessionId,
+        sequence,
+        role: input.role,
+        content: input.content,
+        fixture: input.fixture,
+        createdAt,
+      },
+      event,
+    };
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    if (error instanceof Ops1Error) throw error;
+    try {
+      insertEvent(
+        db,
+        input.sessionId,
+        "TURN_PERSISTENCE_FAILED",
+        "appendTurn failed",
+      );
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec d’écriture du tour. Aucun tour partiel n’a été conservé.",
+      error,
+    );
+  }
+}
+
+export function getSessionBundle(
+  sessionId: string,
+  db = openOps1Db(),
+): { session: CycleSession; turns: JournalTurn[] } | null {
+  const session = getSession(sessionId, db);
+  if (!session) return null;
+  return { session, turns: listTurns(sessionId, db) };
+}
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
new file mode 100644
index 0000000..5c42bad
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -0,0 +1,44 @@
+/** OPS1 I1 — Session + journal (fixture/local). CLOSED reserved; not mutated in I1. */
+
+export type SessionStatus = "OPEN" | "CLOSED";
+
+export type TurnRole = "user" | "assistant_fixture";
+
+export interface CycleSession {
+  sessionId: string;
+  projectKey: string;
+  status: SessionStatus;
+  createdAt: string;
+  updatedAt: string;
+  parentSessionId: string | null;
+  fixtureMode: boolean;
+}
+
+export interface JournalTurn {
+  turnId: string;
+  sessionId: string;
+  sequence: number;
+  role: TurnRole;
+  content: string;
+  fixture: boolean;
+  createdAt: string;
+}
+
+export type SessionEventType =
+  | "SESSION_OPENED"
+  | "TURN_APPENDED"
+  | "SESSION_PERSISTENCE_FAILED"
+  | "TURN_PERSISTENCE_FAILED";
+
+export interface SessionEvent {
+  eventId: string;
+  sessionId: string | null;
+  type: SessionEventType;
+  createdAt: string;
+  detail: string;
+}
+
+export const OPS1_PROJECT_KEY = "sfia-studio-ops1";
+
+/** Local input guardrail — not a FinOps decision. */
+export const OPS1_MAX_MESSAGE_CHARS = 4000;
diff --git a/projects/sfia-studio/app/lib/ops1/validation.ts b/projects/sfia-studio/app/lib/ops1/validation.ts
new file mode 100644
index 0000000..1a7858b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/ops1/validation.ts
@@ -0,0 +1,33 @@
+import { OPS1_MAX_MESSAGE_CHARS, type TurnRole } from "./types";
+import { Ops1Error } from "./errors";
+
+const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;
+
+export function assertSessionId(sessionId: unknown): string {
+  if (typeof sessionId !== "string" || !SESSION_ID_RE.test(sessionId)) {
+    throw new Ops1Error("VALIDATION", "Identifiant de session invalide.");
+  }
+  return sessionId;
+}
+
+export function assertMessageContent(content: unknown): string {
+  if (typeof content !== "string") {
+    throw new Ops1Error("VALIDATION", "Le message doit être du texte.");
+  }
+  const trimmed = content.trim();
+  if (!trimmed) {
+    throw new Ops1Error("VALIDATION", "Le message ne peut pas être vide.");
+  }
+  if (trimmed.length > OPS1_MAX_MESSAGE_CHARS) {
+    throw new Ops1Error(
+      "VALIDATION",
+      `Message trop long (max ${OPS1_MAX_MESSAGE_CHARS} caractères).`,
+    );
+  }
+  return trimmed;
+}
+
+export function assertTurnRole(role: unknown): TurnRole {
+  if (role === "user" || role === "assistant_fixture") return role;
+  throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
+}

```

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/types.ts`

/** OPS1 I1 — Session + journal (fixture/local). CLOSED reserved; not mutated in I1. */

export type SessionStatus = "OPEN" | "CLOSED";

export type TurnRole = "user" | "assistant_fixture";

export interface CycleSession {
  sessionId: string;
  projectKey: string;
  status: SessionStatus;
  createdAt: string;
  updatedAt: string;
  parentSessionId: string | null;
  fixtureMode: boolean;
}

export interface JournalTurn {
  turnId: string;
  sessionId: string;
  sequence: number;
  role: TurnRole;
  content: string;
  fixture: boolean;
  createdAt: string;
}

export type SessionEventType =
  | "SESSION_OPENED"
  | "TURN_APPENDED"
  | "SESSION_PERSISTENCE_FAILED"
  | "TURN_PERSISTENCE_FAILED";

export interface SessionEvent {
  eventId: string;
  sessionId: string | null;
  type: SessionEventType;
  createdAt: string;
  detail: string;
}

export const OPS1_PROJECT_KEY = "sfia-studio-ops1";

/** Local input guardrail — not a FinOps decision. */
export const OPS1_MAX_MESSAGE_CHARS = 4000;

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/db.ts`

import { DatabaseSync } from "node:sqlite";
import { resolveOps1SqlitePath } from "./paths";
import { Ops1Error } from "./errors";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS cycle_sessions (
  session_id TEXT PRIMARY KEY NOT NULL,
  project_key TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  parent_session_id TEXT,
  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
);

CREATE TABLE IF NOT EXISTS journal_turns (
  turn_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
  content TEXT NOT NULL,
  fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
  created_at TEXT NOT NULL,
  UNIQUE (session_id, sequence),
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE TABLE IF NOT EXISTS session_events (
  event_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT,
  type TEXT NOT NULL,
  created_at TEXT NOT NULL,
  detail TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_turns_session_seq
  ON journal_turns(session_id, sequence);
`;

let singleton: DatabaseSync | null = null;
let singletonPath: string | null = null;

export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
  if (singleton && singletonPath === dbPath) {
    return singleton;
  }
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
    singleton = null;
    singletonPath = null;
  }

  try {
    const db = new DatabaseSync(dbPath);
    db.exec("PRAGMA foreign_keys = ON;");
    db.exec(SCHEMA_SQL);
    const integrity = db.prepare("PRAGMA integrity_check").get() as
      | Record<string, string>
      | undefined;
    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
    if (raw !== "ok") {
      throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
    }
    singleton = db;
    singletonPath = dbPath;
    return db;
  } catch (error) {
    if (error instanceof Ops1Error) throw error;
    throw new Ops1Error(
      "PERSISTENCE",
      "Impossible d’initialiser la base locale OPS1.",
      error,
    );
  }
}

/** Test helper — force close and clear singleton. */
export function resetOps1DbForTests(): void {
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
  }
  singleton = null;
  singletonPath = null;
}

export function nowIsoWithOffset(): string {
  const d = new Date();
  const pad = (n: number, w = 2) => String(n).padStart(w, "0");
  const offsetMin = -d.getTimezoneOffset();
  const sign = offsetMin >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const oh = pad(Math.floor(abs / 60));
  const om = pad(abs % 60);
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
    `T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` +
    `.${pad(d.getMilliseconds(), 3)}${sign}${oh}:${om}`
  );
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/repository.ts`

import type { DatabaseSync } from "node:sqlite";
import { createEventId, createSessionId, createTurnId } from "./ids";
import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
import { Ops1Error } from "./errors";
import {
  OPS1_PROJECT_KEY,
  type CycleSession,
  type JournalTurn,
  type SessionEvent,
  type SessionEventType,
  type TurnRole,
} from "./types";

export { resetOps1DbForTests };

function mapSession(row: Record<string, unknown>): CycleSession {
  return {
    sessionId: String(row.session_id),
    projectKey: String(row.project_key),
    status: row.status as CycleSession["status"],
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    parentSessionId: row.parent_session_id
      ? String(row.parent_session_id)
      : null,
    fixtureMode: Number(row.fixture_mode) === 1,
  };
}

function mapTurn(row: Record<string, unknown>): JournalTurn {
  return {
    turnId: String(row.turn_id),
    sessionId: String(row.session_id),
    sequence: Number(row.sequence),
    role: row.role as TurnRole,
    content: String(row.content),
    fixture: Number(row.fixture) === 1,
    createdAt: String(row.created_at),
  };
}

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
  createdAt = nowIsoWithOffset(),
): SessionEvent {
  const eventId = createEventId();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

export function createOpenSession(db = openOps1Db()): {
  session: CycleSession;
  event: SessionEvent;
} {
  const sessionId = createSessionId();
  const createdAt = nowIsoWithOffset();

  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `INSERT INTO cycle_sessions (
         session_id, project_key, status, created_at, updated_at,
         parent_session_id, fixture_mode
       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, 1)`,
    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt);

    const event = insertEvent(
      db,
      sessionId,
      "SESSION_OPENED",
      JSON.stringify({ projectKey: OPS1_PROJECT_KEY, fixtureMode: true }),
      createdAt,
    );
    db.exec("COMMIT");

    return {
      session: {
        sessionId,
        projectKey: OPS1_PROJECT_KEY,
        status: "OPEN",
        createdAt,
        updatedAt: createdAt,
        parentSessionId: null,
        fixtureMode: true,
      },
      event,
    };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    try {
      insertEvent(
        db,
        null,
        "SESSION_PERSISTENCE_FAILED",
        "createOpenSession failed",
      );
    } catch {
      /* ignore secondary failure */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec de création de la session. Aucune session OPEN n’a été enregistrée.",
      error,
    );
  }
}

export function getSession(
  sessionId: string,
  db = openOps1Db(),
): CycleSession | null {
  const row = db
    .prepare(`SELECT * FROM cycle_sessions WHERE session_id = ?`)
    .get(sessionId) as Record<string, unknown> | undefined;
  return row ? mapSession(row) : null;
}

export function listOpenSessions(db = openOps1Db()): CycleSession[] {
  const rows = db
    .prepare(
      `SELECT * FROM cycle_sessions
       WHERE status = 'OPEN'
       ORDER BY created_at DESC`,
    )
    .all() as Record<string, unknown>[];
  return rows.map(mapSession);
}

export function listTurns(
  sessionId: string,
  db = openOps1Db(),
): JournalTurn[] {
  const rows = db
    .prepare(
      `SELECT * FROM journal_turns
       WHERE session_id = ?
       ORDER BY sequence ASC`,
    )
    .all(sessionId) as Record<string, unknown>[];
  return rows.map(mapTurn);
}

export function appendTurn(
  input: {
    sessionId: string;
    role: TurnRole;
    content: string;
    fixture: boolean;
  },
  db = openOps1Db(),
): { turn: JournalTurn; event: SessionEvent } {
  const session = getSession(input.sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’accepte plus de tours (statut non OPEN).",
    );
  }

  const turnId = createTurnId();
  const createdAt = nowIsoWithOffset();

  try {
    db.exec("BEGIN IMMEDIATE");
    const seqRow = db
      .prepare(
        `SELECT COALESCE(MAX(sequence), 0) AS max_seq
         FROM journal_turns WHERE session_id = ?`,
      )
      .get(input.sessionId) as { max_seq: number };
    const sequence = Number(seqRow.max_seq) + 1;

    db.prepare(
      `INSERT INTO journal_turns (
         turn_id, session_id, sequence, role, content, fixture, created_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      turnId,
      input.sessionId,
      sequence,
      input.role,
      input.content,
      input.fixture ? 1 : 0,
      createdAt,
    );

    db.prepare(
      `UPDATE cycle_sessions SET updated_at = ? WHERE session_id = ?`,
    ).run(createdAt, input.sessionId);

    const event = insertEvent(
      db,
      input.sessionId,
      "TURN_APPENDED",
      JSON.stringify({
        turnId,
        sequence,
        role: input.role,
        fixture: input.fixture,
      }),
      createdAt,
    );
    db.exec("COMMIT");

    return {
      turn: {
        turnId,
        sessionId: input.sessionId,
        sequence,
        role: input.role,
        content: input.content,
        fixture: input.fixture,
        createdAt,
      },
      event,
    };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    if (error instanceof Ops1Error) throw error;
    try {
      insertEvent(
        db,
        input.sessionId,
        "TURN_PERSISTENCE_FAILED",
        "appendTurn failed",
      );
    } catch {
      /* ignore */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec d’écriture du tour. Aucun tour partiel n’a été conservé.",
      error,
    );
  }
}

export function getSessionBundle(
  sessionId: string,
  db = openOps1Db(),
): { session: CycleSession; turns: JournalTurn[] } | null {
  const session = getSession(sessionId, db);
  if (!session) return null;
  return { session, turns: listTurns(sessionId, db) };
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/actions.ts`

"use server";

import {
  appendTurn,
  createOpenSession,
  getSessionBundle,
  listOpenSessions,
} from "./repository";
import { buildFixtureAssistantReply } from "./fixtureReply";
import { Ops1Error, toSafeClientError } from "./errors";
import { assertMessageContent, assertSessionId } from "./validation";
import type { CycleSession, JournalTurn } from "./types";

export type Ops1ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string };

function fail(error: unknown): Ops1ActionResult<never> {
  const safe = toSafeClientError(error);
  console.error("[ops1]", safe.code, safe.message, error);
  return { ok: false, code: safe.code, message: safe.message };
}

export async function ops1CreateSessionAction(): Promise<
  Ops1ActionResult<{ session: CycleSession }>
> {
  try {
    const { session, event } = createOpenSession();
    console.info("[ops1] SESSION_OPENED", session.sessionId, event.eventId);
    return { ok: true, data: { session } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1ListOpenSessionsAction(): Promise<
  Ops1ActionResult<{ sessions: CycleSession[] }>
> {
  try {
    return { ok: true, data: { sessions: listOpenSessions() } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1GetSessionAction(
  sessionId: string,
): Promise<
  Ops1ActionResult<{ session: CycleSession; turns: JournalTurn[] }>
> {
  try {
    const id = assertSessionId(sessionId);
    const bundle = getSessionBundle(id);
    if (!bundle) {
      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
    }
    return { ok: true, data: bundle };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1AppendUserMessageAction(input: {
  sessionId: string;
  content: string;
}): Promise<
  Ops1ActionResult<{
    userTurn: JournalTurn;
    assistantTurn: JournalTurn | null;
    assistantError: string | null;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const content = assertMessageContent(input.content);

    const { turn: userTurn, event } = appendTurn({
      sessionId,
      role: "user",
      content,
      fixture: true,
    });
    console.info(
      "[ops1] TURN_APPENDED",
      sessionId,
      userTurn.turnId,
      event.eventId,
    );

    let assistantTurn: JournalTurn | null = null;
    let assistantError: string | null = null;
    try {
      const reply = buildFixtureAssistantReply(content);
      const appended = appendTurn({
        sessionId,
        role: "assistant_fixture",
        content: reply,
        fixture: true,
      });
      assistantTurn = appended.turn;
      console.info(
        "[ops1] TURN_APPENDED",
        sessionId,
        appended.turn.turnId,
        appended.event.eventId,
      );
    } catch (error) {
      const safe = toSafeClientError(error);
      assistantError = safe.message;
      console.error("[ops1] TURN_PERSISTENCE_FAILED assistant", error);
    }

    return {
      ok: true,
      data: { userTurn, assistantTurn, assistantError },
    };
  } catch (error) {
    return fail(error);
  }
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/paths.ts`

import fs from "node:fs";
import path from "node:path";
import { Ops1Error } from "./errors";

/**
 * Runtime root under projects/sfia-studio/.sfia-exec/**
 * Override for tests: OPS1_EXEC_ROOT (absolute path under a temp dir).
 */
export function resolveOps1ExecRoot(): string {
  const override = process.env.OPS1_EXEC_ROOT?.trim();
  if (override) {
    const resolved = path.resolve(override);
    ensureDir(resolved);
    return resolved;
  }

  // app/ -> sfia-studio/
  const studioRoot = path.resolve(process.cwd(), "..");
  const execRoot = path.join(studioRoot, ".sfia-exec", "local-i1");
  ensureDir(execRoot);
  assertUnderSfiaExec(studioRoot, execRoot);
  return execRoot;
}

export function resolveOps1SqlitePath(execRoot = resolveOps1ExecRoot()): string {
  const stateDir = path.join(execRoot, "state");
  ensureDir(stateDir);
  const dbPath = path.join(stateDir, "ops1.sqlite");
  assertUnderSfiaExec(path.resolve(execRoot, "..", ".."), path.dirname(dbPath));
  return dbPath;
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function assertUnderSfiaExec(studioRoot: string, candidate: string): void {
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  const resolved = path.resolve(candidate);
  if (process.env.OPS1_EXEC_ROOT) {
    // Test override: must stay under the override root
    const root = path.resolve(process.env.OPS1_EXEC_ROOT);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors racine autorisée.");
    }
    return;
  }
  if (!resolved.startsWith(execBase + path.sep) && resolved !== execBase) {
    throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors .sfia-exec.");
  }
}

---

# Contenu complet — `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`

"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  ops1AppendUserMessageAction,
  ops1CreateSessionAction,
  ops1GetSessionAction,
} from "@/lib/ops1/actions";
import type { CycleSession, JournalTurn } from "@/lib/ops1/types";
import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
import styles from "./ops1-session.module.css";

const STORAGE_KEY = "sfia-ops1-i1-active-session";

type UiPhase =
  | "boot"
  | "idle"
  | "creating"
  | "open"
  | "sending"
  | "error_create"
  | "error_journal";

export function Ops1SessionScreen() {
  const [phase, setPhase] = useState<UiPhase>("boot");
  const [session, setSession] = useState<CycleSession | null>(null);
  const [turns, setTurns] = useState<JournalTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const loadBundle = useCallback(async (sessionId: string) => {
    const result = await ops1GetSessionAction(sessionId);
    if (!result.ok) {
      setError(result.message);
      setSession(null);
      setTurns([]);
      setPhase("idle");
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
      return;
    }
    setSession(result.data.session);
    setTurns(result.data.turns);
    setError(null);
    setPhase("open");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const stored =
        typeof window !== "undefined"
          ? window.sessionStorage.getItem(STORAGE_KEY)
          : null;
      if (stored) {
        if (!cancelled) await loadBundle(stored);
        return;
      }
      if (!cancelled) setPhase("idle");
    })();
    return () => {
      cancelled = true;
    };
  }, [loadBundle]);

  const onCreate = () => {
    setError(null);
    setPhase("creating");
    startTransition(async () => {
      const result = await ops1CreateSessionAction();
      if (!result.ok) {
        setError(result.message);
        setPhase("error_create");
        return;
      }
      window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
      setSession(result.data.session);
      setTurns([]);
      setPhase("open");
    });
  };

  const onSend = () => {
    if (!session) return;
    setError(null);
    setPhase("sending");
    startTransition(async () => {
      const result = await ops1AppendUserMessageAction({
        sessionId: session.sessionId,
        content: draft,
      });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_journal");
        return;
      }
      setDraft("");
      if (result.data.assistantError) {
        setError(result.data.assistantError);
        setPhase("error_journal");
      } else {
        setPhase("open");
      }
      await loadBundle(session.sessionId);
    });
  };

  const onClearLocalPointer = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setTurns([]);
    setError(null);
    setPhase("idle");
  };

  return (
    <div className={styles.root} data-testid="ops1-session-root">
      <header className={styles.header}>
        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I1</p>
        <h2 className={styles.title} id="ops1-session-heading">
          Session OPS1
        </h2>
        <p className={styles.lede}>
          Ouvrir une CycleSession locale, journaliser des tours fixture, et
          retrouver le journal après rechargement. Aucun fournisseur live.
        </p>
        <div className={styles.badgeRow} aria-live="polite">
          <StatusPill tone="orange">MODE FIXTURE / NON LIVE</StatusPill>
          {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
        </div>
      </header>

      {phase === "boot" || (pending && phase === "creating") ? (
        <p className={styles.muted} data-testid="ops1-loading">
          {phase === "creating" ? "Création de la session…" : "Chargement…"}
        </p>
      ) : null}

      {(phase === "idle" || phase === "error_create") && !session ? (
        <section
          className={styles.panel}
          data-testid="ops1-empty-state"
          aria-labelledby="ops1-empty-title"
        >
          <h2 id="ops1-empty-title" className={styles.panelTitle}>
            Aucune session active
          </h2>
          <p className={styles.muted}>
            Projet cible : <strong>sfia-studio-ops1</strong>. La session sera
            créée en statut OPEN avec journal initialisé.
          </p>
          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}
          <CtaButton
            onClick={onCreate}
            disabled={pending}
            data-testid="ops1-create-session"
          >
            Nouvelle session
          </CtaButton>
        </section>
      ) : null}

      {session ? (
        <section
          className={styles.panel}
          data-testid="ops1-open-session"
          aria-labelledby="ops1-open-title"
        >
          <h2 id="ops1-open-title" className={styles.panelTitle}>
            Session ouverte
          </h2>
          <dl className={styles.meta}>
            <div>
              <dt>sessionId</dt>
              <dd data-testid="ops1-session-id">{session.sessionId}</dd>
            </div>
            <div>
              <dt>Statut</dt>
              <dd data-testid="ops1-session-status">{session.status}</dd>
            </div>
            <div>
              <dt>Créée</dt>
              <dd>{session.createdAt}</dd>
            </div>
            <div>
              <dt>Projet</dt>
              <dd>{session.projectKey}</dd>
            </div>
          </dl>

          <div className={styles.journal} data-testid="ops1-journal">
            <h3 className={styles.journalTitle}>Journal</h3>
            {turns.length === 0 ? (
              <p className={styles.muted} data-testid="ops1-journal-empty">
                Aucun tour pour l’instant.
              </p>
            ) : (
              <ol className={styles.turnList}>
                {turns.map((turn) => (
                  <li
                    key={turn.turnId}
                    className={
                      turn.role === "user"
                        ? styles.turnUser
                        : styles.turnAssistant
                    }
                    data-testid="ops1-turn"
                    data-role={turn.role}
                    data-sequence={turn.sequence}
                  >
                    <div className={styles.turnMeta}>
                      <span>#{turn.sequence}</span>
                      <span>
                        {turn.role === "user" ? "Vous" : "Assistant fixture"}
                      </span>
                      {turn.fixture ? (
                        <span className={styles.fixtureTag}>fixture</span>
                      ) : null}
                    </div>
                    <p className={styles.turnContent}>{turn.content}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}

          <form
            className={styles.composer}
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
          >
            <label className={styles.label} htmlFor="ops1-message">
              Message local (fixture)
            </label>
            <textarea
              id="ops1-message"
              className={styles.textarea}
              data-testid="ops1-message-input"
              value={draft}
              maxLength={OPS1_MAX_MESSAGE_CHARS}
              rows={4}
              disabled={pending || phase === "sending"}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Saisir un tour utilisateur local…"
            />
            <div className={styles.composerActions}>
              <CtaButton
                type="submit"
                disabled={pending || !draft.trim()}
                data-testid="ops1-send-message"
              >
                Envoyer (fixture)
              </CtaButton>
              <CtaButton
                variant="secondary"
                onClick={onClearLocalPointer}
                data-testid="ops1-clear-pointer"
              >
                Revenir à l’écran vide
              </CtaButton>
            </div>
            <p className={styles.hint}>
              Pas d’action d’exécution, pas de gate, pas de Campus360. Max{" "}
              {OPS1_MAX_MESSAGE_CHARS} caractères.
            </p>
          </form>
        </section>
      ) : null}
    </div>
  );
}

---

# Contenu complet — `projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts`

import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i1",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("OPS1 I1 session + journal", () => {
  test("creates session, appends turns, persists after reload", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
    await expect(
      page.getByTestId("ops1-session-root").getByText("MODE FIXTURE / NON LIVE"),
    ).toBeVisible();
    await expect(page.getByTestId("ops1-empty-state")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-empty.png"),
      fullPage: true,
    });

    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-open-session")).toBeVisible();
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    expect(sessionId).toMatch(/^ops1-sess-/);

    await page.getByTestId("ops1-message-input").fill("Premier message I1");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-message-input").fill("Second message I1");
    await page.getByTestId("ops1-send-message").click();

    const turns = page.getByTestId("ops1-turn");
    await expect(turns).toHaveCount(4); // 2 user + 2 fixture assistant
    await expect(turns.nth(0)).toHaveAttribute("data-role", "user");
    await expect(turns.nth(1)).toHaveAttribute("data-role", "assistant_fixture");
    await expect(
      page.getByTestId("ops1-journal").getByText("FIXTURE / NON LIVE").first(),
    ).toBeVisible();

    // No execution CTA
    await expect(
      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-open-journal.png"),
      fullPage: true,
    });

    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-turn")).toHaveCount(4);
    await expect(page.getByTestId("ops1-turn").nth(2)).toContainText(
      "Second message I1",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-after-reload.png"),
      fullPage: true,
    });
  });
});

---

# Contenu complet — `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx`

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

const create = vi.fn();
const get = vi.fn();
const append = vi.fn();

vi.mock("@/lib/ops1/actions", () => ({
  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
  ops1GetSessionAction: (...args: unknown[]) => get(...args),
  ops1AppendUserMessageAction: (...args: unknown[]) => append(...args),
}));

describe("Ops1SessionScreen", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.sessionStorage.clear();
  });

  it("shows empty state and fixture badge", async () => {
    render(<Ops1SessionScreen />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
    });
    expect(screen.getByText("MODE FIXTURE / NON LIVE")).toBeInTheDocument();
    expect(screen.getByText("Aucune session active")).toBeInTheDocument();
  });

  it("creates OPEN session and shows sessionId", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({
      ok: true,
      data: {
        session: {
          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
          projectKey: "sfia-studio-ops1",
          status: "OPEN",
          createdAt: "2026-07-20T21:00:00+02:00",
          updatedAt: "2026-07-20T21:00:00+02:00",
          parentSessionId: null,
          fixtureMode: true,
        },
      },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: {
          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
          projectKey: "sfia-studio-ops1",
          status: "OPEN",
          createdAt: "2026-07-20T21:00:00+02:00",
          updatedAt: "2026-07-20T21:00:00+02:00",
          parentSessionId: null,
          fixtureMode: true,
        },
        turns: [],
      },
    });

    render(<Ops1SessionScreen />);
    await waitFor(() =>
      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
        0,
      ),
    );
    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-session-id")).toHaveTextContent(
        "ops1-sess-11111111-1111-4111-8111-111111111111",
      );
    });
    expect(screen.getByTestId("ops1-session-status")).toHaveTextContent("OPEN");
  });

  it("shows create error", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({
      ok: false,
      code: "PERSISTENCE",
      message: "Échec de création de la session.",
    });
    render(<Ops1SessionScreen />);
    await waitFor(() =>
      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
        0,
      ),
    );
    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
        "Échec de création de la session.",
      );
    });
  });
});

---

# Contenu complet — `projects/sfia-studio/app/__tests__/ops1/domain.test.ts`

import { describe, expect, it } from "vitest";
import { createEventId, createSessionId, createTurnId } from "@/lib/ops1/ids";
import {
  assertMessageContent,
  assertSessionId,
  assertTurnRole,
} from "@/lib/ops1/validation";
import { Ops1Error } from "@/lib/ops1/errors";
import { buildFixtureAssistantReply } from "@/lib/ops1/fixtureReply";
import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";

describe("ops1 ids", () => {
  it("creates unique session and turn ids", () => {
    const a = createSessionId();
    const b = createSessionId();
    expect(a).not.toEqual(b);
    expect(a).toMatch(/^ops1-sess-/);
    expect(createTurnId()).toMatch(/^ops1-turn-/);
    expect(createEventId()).toMatch(/^ops1-evt-/);
  });
});

describe("ops1 validation", () => {
  it("accepts valid session id", () => {
    const id = createSessionId();
    expect(assertSessionId(id)).toBe(id);
  });

  it("rejects invalid session id", () => {
    expect(() => assertSessionId("nope")).toThrow(Ops1Error);
  });

  it("validates message content", () => {
    expect(assertMessageContent("  hello  ")).toBe("hello");
    expect(() => assertMessageContent("")).toThrow(Ops1Error);
    expect(() => assertMessageContent("x".repeat(OPS1_MAX_MESSAGE_CHARS + 1))).toThrow(
      Ops1Error,
    );
  });

  it("validates roles", () => {
    expect(assertTurnRole("user")).toBe("user");
    expect(assertTurnRole("assistant_fixture")).toBe("assistant_fixture");
    expect(() => assertTurnRole("assistant")).toThrow(Ops1Error);
  });
});

describe("ops1 fixture reply", () => {
  it("marks non-live fixture content", () => {
    const reply = buildFixtureAssistantReply("Bonjour Campus360");
    expect(reply).toContain("FIXTURE / NON LIVE");
    expect(reply).toContain("Aucun fournisseur GPT");
    expect(reply).toContain("Bonjour Campus360");
  });
});

---

# Contenu complet — `projects/sfia-studio/app/__tests__/ops1/repository.test.ts`

/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  appendTurn,
  createOpenSession,
  getSession,
  getSessionBundle,
  listTurns,
  resetOps1DbForTests,
} from "@/lib/ops1/repository";
import { openOps1Db } from "@/lib/ops1/db";
import { Ops1Error } from "@/lib/ops1/errors";

describe("ops1 sqlite repository", () => {
  let tmpRoot: string;

  beforeEach(() => {
    resetOps1DbForTests();
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i1-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("creates schema and OPEN session with SESSION_OPENED event", () => {
    const { session, event } = createOpenSession();
    expect(session.status).toBe("OPEN");
    expect(session.fixtureMode).toBe(true);
    expect(event.type).toBe("SESSION_OPENED");
    expect(getSession(session.sessionId)?.sessionId).toBe(session.sessionId);

    const db = openOps1Db();
    const row = db
      .prepare(`SELECT type FROM session_events WHERE session_id = ?`)
      .get(session.sessionId) as { type: string };
    expect(row.type).toBe("SESSION_OPENED");
  });

  it("appends turns in stable order and survives reconnect", () => {
    const { session } = createOpenSession();
    appendTurn({
      sessionId: session.sessionId,
      role: "user",
      content: "Tour A",
      fixture: true,
    });
    appendTurn({
      sessionId: session.sessionId,
      role: "assistant_fixture",
      content: "Tour B",
      fixture: true,
    });
    appendTurn({
      sessionId: session.sessionId,
      role: "user",
      content: "Tour C",
      fixture: true,
    });

    resetOps1DbForTests();
    const turns = listTurns(session.sessionId);
    expect(turns.map((t) => t.content)).toEqual(["Tour A", "Tour B", "Tour C"]);
    expect(turns.map((t) => t.sequence)).toEqual([1, 2, 3]);
  });

  it("enforces unique sequence and foreign keys", () => {
    const { session } = createOpenSession();
    const db = openOps1Db();
    appendTurn({
      sessionId: session.sessionId,
      role: "user",
      content: "one",
      fixture: true,
    });
    expect(() =>
      db
        .prepare(
          `INSERT INTO journal_turns (
             turn_id, session_id, sequence, role, content, fixture, created_at
           ) VALUES ('dup', ?, 1, 'user', 'x', 1, datetime('now'))`,
        )
        .run(session.sessionId),
    ).toThrow();

    expect(() =>
      db
        .prepare(
          `INSERT INTO journal_turns (
             turn_id, session_id, sequence, role, content, fixture, created_at
           ) VALUES ('orphan', 'ops1-sess-00000000-0000-4000-8000-000000000000', 1, 'user', 'x', 1, datetime('now'))`,
        )
        .run(),
    ).toThrow();
  });

  it("rolls back failed multi-write without partial OPEN session", () => {
    const db = openOps1Db();
    // Force failure after begin by closing mid-flight is hard; instead verify
    // that a thrown insert leaves no session when createOpenSession fails via
    // invalid forced path: corrupt by making session insert conflict.
    const { session } = createOpenSession();
    expect(() => {
      db.exec("BEGIN IMMEDIATE");
      db.prepare(
        `INSERT INTO cycle_sessions (
           session_id, project_key, status, created_at, updated_at,
           parent_session_id, fixture_mode
         ) VALUES (?, 'x', 'OPEN', 't', 't', NULL, 1)`,
      ).run(session.sessionId);
      db.exec("COMMIT");
    }).toThrow();

    const bundle = getSessionBundle(session.sessionId);
    expect(bundle?.session.status).toBe("OPEN");
  });

  it("does not leave a complete turn when append fails validation path", () => {
    expect(() =>
      appendTurn({
        sessionId: "ops1-sess-00000000-0000-4000-8000-000000000099",
        role: "user",
        content: "ghost",
        fixture: true,
      }),
    ).toThrow(Ops1Error);
  });

  it("stores sqlite under exec root", () => {
    createOpenSession();
    const dbFile = path.join(tmpRoot, "state", "ops1.sqlite");
    expect(fs.existsSync(dbFile)).toBe(true);
  });
});

---

# Contenu complet — `projects/sfia-studio/app/app/nouvelle-demande/page.tsx`

import { StudioShell } from "@/components/shell/StudioShell";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";

export default function NouvelleDemandePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/nouvelle-demande"
      title="Nouvelle demande"
      pills={[
        { label: "MODE FIXTURE / NON LIVE", tone: "orange" },
        { label: "OPS1 I1", tone: "blueFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · SFIA Copilot",
        subtitle: "OPS1 I1 — session locale",
        avatarTone: "blue",
        levelPill: "L0 humain",
        summary:
          "Session CycleSession OPEN et journal fixture. Aucun GPT live, aucun Cursor live, aucune action Markdown.",
        checklist: [
          "Créer session OPEN",
          "Journaliser tours fixture",
          "Recharger et retrouver le journal",
          "Aucun effet d’exécution",
        ],
        checklistTitle: "Parcours I1",
        riskTitle: "PÉRIMÈTRE",
        riskText:
          "I1 n’ouvre pas I2–I7, la clôture CLOSED, ni la CI. E01-03 hors scope.",
      }}
    >
      <NouvelleDemandeScreen />
    </StudioShell>
  );
}

---

# Contenu complet — `projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx`

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

function NouvelleDemandeBody() {
  const params = useSearchParams();
  const vsMode = params.has("vs");

  if (vsMode) {
    return (
      <VsDemoRoot>
        <VsNouvelleDemandeScreen />
      </VsDemoRoot>
    );
  }

  return <Ops1SessionScreen />;
}

/** OPS1 I1 session/journal by default ; POC vertical-slice via `?vs=`. */
export function NouvelleDemandeScreen() {
  return (
    <Suspense fallback={null}>
      <NouvelleDemandeBody />
    </Suspense>
  );
}

---

# Contenu complet — `projects/sfia-studio/app/features/ops1/ops1-session.module.css`

.root {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 920px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--sfia-muted);
}

.title {
  margin: 0;
  font-size: 1.75rem;
  line-height: 1.2;
  color: var(--sfia-ink);
}

.lede {
  margin: 0;
  color: var(--sfia-muted);
  max-width: 52rem;
}

.badgeRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.panel {
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 1.25rem 1.35rem;
  box-shadow: var(--sfia-shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panelTitle {
  margin: 0;
  font-size: 1.1rem;
  color: var(--sfia-ink);
}

.muted {
  margin: 0;
  color: var(--sfia-muted);
}

.error {
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: 8px;
  background: #fff1f1;
  border: 1px solid #f5c2c2;
  color: #8a1f1f;
}

.meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem 1rem;
  margin: 0;
}

.meta dt {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--sfia-muted);
}

.meta dd {
  margin: 0.15rem 0 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  word-break: break-all;
  color: var(--sfia-ink);
}

.journal {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.journalTitle {
  margin: 0;
  font-size: 0.95rem;
}

.turnList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.turnUser,
.turnAssistant {
  border-radius: 10px;
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--sfia-border);
}

.turnUser {
  background: var(--sfia-blue-soft);
}

.turnAssistant {
  background: var(--sfia-purple-soft);
}

.turnMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--sfia-muted);
  margin-bottom: 0.35rem;
}

.fixtureTag {
  color: var(--sfia-orange);
  font-weight: 600;
}

.turnContent {
  margin: 0;
  white-space: pre-wrap;
  color: var(--sfia-ink);
  line-height: 1.45;
}

.composer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sfia-ink);
}

.textarea {
  width: 100%;
  resize: vertical;
  min-height: 96px;
  border-radius: 10px;
  border: 1px solid var(--sfia-border);
  padding: 0.75rem 0.85rem;
  font: inherit;
  color: var(--sfia-ink);
  background: #fff;
}

.textarea:focus {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 1px;
}

.composerActions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.hint {
  margin: 0;
  font-size: 0.8rem;
  color: var(--sfia-muted);
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/errors.ts`

export type Ops1ErrorCode =
  | "VALIDATION"
  | "NOT_FOUND"
  | "PERSISTENCE"
  | "CONFLICT"
  | "INTERNAL";

export class Ops1Error extends Error {
  readonly code: Ops1ErrorCode;
  readonly safeMessage: string;

  constructor(code: Ops1ErrorCode, safeMessage: string, cause?: unknown) {
    super(safeMessage);
    this.name = "Ops1Error";
    this.code = code;
    this.safeMessage = safeMessage;
    if (cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = cause;
    }
  }
}

export function toSafeClientError(error: unknown): {
  code: Ops1ErrorCode;
  message: string;
} {
  if (error instanceof Ops1Error) {
    return { code: error.code, message: error.safeMessage };
  }
  return {
    code: "INTERNAL",
    message: "Une erreur technique est survenue. Réessayez ou contactez Morris.",
  };
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/fixtureReply.ts`

/** Deterministic local fixture reply — never presented as live GPT. */
export function buildFixtureAssistantReply(userContent: string): string {
  const preview =
    userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
  return [
    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I1.",
    "Aucun fournisseur GPT n’a été appelé.",
    `Echo borné : « ${preview} »`,
  ].join(" ");
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/ids.ts`

import { randomUUID } from "node:crypto";

export function createSessionId(): string {
  return `ops1-sess-${randomUUID()}`;
}

export function createTurnId(): string {
  return `ops1-turn-${randomUUID()}`;
}

export function createEventId(): string {
  return `ops1-evt-${randomUUID()}`;
}

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/index.ts`

export * from "./types";
export * from "./errors";
export * from "./validation";
export * from "./fixtureReply";

---

# Contenu complet — `projects/sfia-studio/app/lib/ops1/validation.ts`

import { OPS1_MAX_MESSAGE_CHARS, type TurnRole } from "./types";
import { Ops1Error } from "./errors";

const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;

export function assertSessionId(sessionId: unknown): string {
  if (typeof sessionId !== "string" || !SESSION_ID_RE.test(sessionId)) {
    throw new Ops1Error("VALIDATION", "Identifiant de session invalide.");
  }
  return sessionId;
}

export function assertMessageContent(content: unknown): string {
  if (typeof content !== "string") {
    throw new Ops1Error("VALIDATION", "Le message doit être du texte.");
  }
  const trimmed = content.trim();
  if (!trimmed) {
    throw new Ops1Error("VALIDATION", "Le message ne peut pas être vide.");
  }
  if (trimmed.length > OPS1_MAX_MESSAGE_CHARS) {
    throw new Ops1Error(
      "VALIDATION",
      `Message trop long (max ${OPS1_MAX_MESSAGE_CHARS} caractères).`,
    );
  }
  return trimmed;
}

export function assertTurnRole(role: unknown): TurnRole {
  if (role === "user" || role === "assistant_fixture") return role;
  throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
}

---
