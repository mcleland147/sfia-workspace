# SFIA Review Pack — FULL

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 13 — PR readiness Option A (Workspace → OPS1 continuity) |
| **Profil SFIA** | Standard |
| **Review pack** | Full |
| **Typologie** | INC — PR readiness (+ governed project push) |
| **GO Morris consommé** | `GO PUSH / PR OPTION A` |
| **Interprétation gouvernée (ce cycle)** | PR readiness uniquement ; si READY → `git push -u origin delivery/sfia-studio-workspace-ops1-continuity` (NO force) ; **PAS** de `gh pr create` ; PAS merge/amend/rebase/reset ; PAS mutation produit/FinOps ; PAS rerun tests/runtime sauf drift |
| **Timestamp CEST** | 2026-08-10 06:47:39 CEST |
| **Timestamp UTC** | 2026-08-10 04:47:39 UTC |
| **Worktree** | `.../worktrees/finops-t2-main` |
| **Branche** | `delivery/sfia-studio-workspace-ops1-continuity` |
| **HEAD** | `93897e4feb8c31d19116fe1177073672f1f61f1d` |
| **HEAD^ / origin/main** | `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| **Working tree** | tracked clean ; `?? .tmp-sfia-review/` only ; staged none |
| **Remote delivery before push** | ABSENT |
| **Remote delivery after push** | `93897e4feb8c31d19116fe1177073672f1f61f1d` |
| **origin/main after push** | unchanged `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| **PR** | **0** (not created) |
| **Merge** | **0** |
| **FinOps** | **0** |
| **Product mutation this cycle** | **0** |
| **Inbound handoff tip** | `8f6bea4a9531dc7a281b2b3832789d210bb626f4` |
| **Inbound handoff blob** | `fb3aa780259b7402d20c37a2a36a3391819b4ff5` (`sfia-review-handoff/latest-chatgpt-review.md`) |
| **Inbound profile** | Profil SFIA Standard ; Review pack Light ; commit `93897e4` ; push/PR/merge **0** |
| **Synthesis-only** | NO |

---

## 0. GO + governed interpretation

**GO:** `GO PUSH / PR OPTION A`

**Interpretation for THIS cycle only:**
1. Execute PR readiness controls.
2. If `READY FOR PR` or `READY FOR PR WITH RESERVES` → push project branch with `git push -u origin delivery/sfia-studio-workspace-ops1-continuity` (NO force).
3. Do **not** create PR (`gh pr create` forbidden).
4. Do **not** merge, amend, rebase, reset, modify product files, FinOps, or rerun Next/tests/runtime unless drift.

---

## 1. Integrity controls (PR readiness)

| Contrôle | Résultat |
|----------|----------|
| `git fetch origin` | PASS |
| Branch | PASS — `delivery/sfia-studio-workspace-ops1-continuity` |
| HEAD | PASS — `93897e4feb8c31d19116fe1177073672f1f61f1d` |
| HEAD^ | PASS — `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| origin/main | PASS — `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| Tracked dirty | PASS — clean |
| Staged | PASS — none |
| Untracked | PASS — `?? .tmp-sfia-review/**` only |
| `ls-remote` delivery before push | PASS — ABSENT |
| Existing PR | PASS — none (`gh pr list --head …` empty) |
| Inbound handoff tip/blob | PASS — tip `8f6bea4` / blob `fb3aa780` matches expected |
| Diff file set | PASS — exact 8 paths (7M+1A) |
| Diff shortstat | PASS — `8 files changed, 333 insertions(+), 3 deletions(-)` |
| `git diff --check origin/main...HEAD` | PASS |
| Markers | PASS — Continuer le pilotage ; projectId encodeURIComponent ; anti-binding disclosure ; `ops1CreateSessionAction({ mode })` only (no projectId) |
| Forbidden paths | PASS — none in diff |
| Secret scan | PASS — no secret values (env var *name* `OPENAI_API_KEY` only in missing-config mock) |
| QA evidence reusable | PASS — transported from validated delivery ; HEAD/base unchanged |
| Project mutation this cycle | PASS — none (push + review pack/handoff only) |

---

## 2. Exact 8-file inventory (`origin/main...HEAD`)

```
M  projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
A  projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx
M  projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M  projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
M  projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
M  projects/sfia-studio/app/features/ops1/ops1-session.module.css
M  projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
M  projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
```

Stat: 8 files changed, 333 insertions(+), 3 deletions(-)

---

## 3. Marker confirmation

- CTA **Continuer le pilotage** → `/ops1/nouvelle-demande?projectId=${encodeURIComponent(...)}`
- `projectId` query parse/validate (navigation-only) in `NouvelleDemandePageClient`
- Anti-binding: « Contexte de navigation uniquement — cette session OPS1 n’est pas liée ni persistée dans le Project Studio. »
- `ops1CreateSessionAction({ mode: createMode })` — **no** `projectId` argument
- No `actions.ts` / domain / DB / migration / FinOps paths in diff

---

## 4. Secret scan

**PASS** — no API keys, tokens, private keys, or credential values in `origin/main...HEAD`.
Note: diff mentions `OPENAI_API_KEY` only as a missing env var *name* in a test/live-config mock (`missing: ["OPENAI_API_KEY", "OPENAI_MODEL"]`), not a secret value.

---

## 5. Validation evidence (transported — not re-run)

Source: validated delivery handoff tip `f2bb406` / blob `6e2177d0` + commit gate tip `8f6bea4` / blob `fb3aa780` ; commit `93897e4` unchanged → evidence reusable.

| Check | Résultat |
|-------|----------|
| Targeted vitest (workspace + OPS1 continuity + globalModeBadge) | **PASS** 17/17 |
| `npx vitest run --exclude '__tests__/oa/finops/postgres/**'` | **PASS** 153 files / 1576 tests |
| `npm test` (inclut FinOps postgres) | **FAIL env** — `ECONNREFUSED 127.0.0.1:55479` on `__tests__/oa/finops/postgres/**` only |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |
| Accessibility (axe) | **PASS** (violations = []) |
| Runtime fixture | **PASS** — screenshots under `.tmp-sfia-review/workspace-ops1-continuity/screenshots/` |

---

## 6. Reserve

1. **Environmental / non-blocking:** `npm test` global fails on FinOps postgres (`ECONNREFUSED`) — Docker Postgres unavailable; not introduced by this slice; FinOps not reopened this cycle.

---

## 7. Project push (governed)

| Champ | Valeur |
|-------|--------|
| Command | `git push -u origin delivery/sfia-studio-workspace-ops1-continuity` |
| Force | NO |
| Remote before | ABSENT |
| Remote after SHA | `93897e4feb8c31d19116fe1177073672f1f61f1d` |
| Match HEAD | YES |
| origin/main | unchanged `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| PR create | **NOT DONE** (explicitly out of scope) |

---

## 8. Draft PR title (NOT created)

```
feat(sfia-studio): connect project workspace to OPS1 continuity
```

---

## 9. Draft PR body (NOT created)

## Summary

- Connects the Studio project workspace to OPS1 via a navigation-only continuity path: primary CTA **Continuer le pilotage** opens `/ops1/nouvelle-demande?projectId=<encoded>`.
- OPS1 shows a Studio Project context banner (id + anti-binding disclosure + return link) when a valid `projectId` query is present; absent/invalid query preserves historical OPS1 empty-state behaviour.
- Exact 8-file UI/test slice (7M+1A); no domain binding, no session create-on-load, no FinOps.

## Product intent

Close the product gap between Project Studio workspace and OPS1 Continuity Control Tower with **navigation context only** — not a persisted Project↔OPS1 session link.

## Guardrails

- `projectId` is query/display only; never passed to `ops1CreateSessionAction` (create remains `{ mode }` only).
- Anti-binding microcopy: « Contexte de navigation uniquement — cette session OPS1 n’est pas liée ni persistée dans le Project Studio. »
- No changes under actions/types/repository/db/sfia/oa/vertical-slice-core/runtime/migrations/.github/method/prompts/FinOps.
- Fixture/default OPS1 create path unchanged; no implicit session creation on load.

## Validation

Transported from validated delivery (commit `93897e4`); **not re-run** this cycle (no HEAD/base drift):

| Check | Result |
|-------|--------|
| Targeted vitest (workspace + OPS1 continuity + globalModeBadge) | PASS 17/17 |
| `npx vitest run --exclude '__tests__/oa/finops/postgres/**'` | PASS 153 files / 1576 tests |
| `npm run typecheck` / `lint` / `build` | PASS |
| `git diff --check` | PASS |
| Accessibility (axe workspace) | PASS (violations = []) |
| Runtime fixture screenshots | PASS (workspace CTA → OPS1 context → fixture session) |
| `npm test` (includes FinOps postgres) | FAIL env — `ECONNREFUSED 127.0.0.1:55479` on `__tests__/oa/finops/postgres/**` only |

## Reserve

1. **Environmental / non-blocking for this PR:** global `npm test` fails on FinOps postgres suite (`ECONNREFUSED`) — Docker Postgres unavailable; not introduced by this slice; FinOps not reopened.

## Scope

**In:** 8 files under `projects/sfia-studio/app` (features vertical-slice-ui, nouvelle-demande, ops1 + matching tests).

**Out:** domain/actions/DB/migrations, FinOps, push/PR/merge gates beyond this readiness, OpenAI/Cursor live calls.


---

## 10. FULL DIFF — `origin/main...HEAD`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
index b21a56a..597484e 100644
--- a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -8,6 +8,21 @@ const get = vi.fn();
 const send = vi.fn();
 const liveConfig = vi.fn();

+vi.mock("next/link", () => ({
+  default: ({
+    children,
+    href,
+    ...props
+  }: {
+    children: React.ReactNode;
+    href: string;
+  }) => (
+    <a href={href} {...props}>
+      {children}
+    </a>
+  ),
+}));
+
 vi.mock("@/lib/ops1/actions", () => ({
   ops1CreateSessionAction: (...args: unknown[]) => create(...args),
   ops1GetSessionAction: (...args: unknown[]) => get(...args),
@@ -104,6 +119,32 @@ describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
     expect(screen.getByTestId("ops1-create-mode-selector")).toBeInTheDocument();
     expect(screen.getByTestId("ops1-badge-live-unavailable")).toBeInTheDocument();
     expect(screen.getByTestId("ops1-create-mode-live")).toBeDisabled();
+    expect(
+      screen.queryByTestId("ops1-studio-project-nav-context"),
+    ).toBeNull();
+  });
+
+  it("renders navigation-only Studio Project context without creating a session", async () => {
+    const projectId = "prj:continuity-1";
+    render(
+      <Ops1SessionScreen
+        projectNavigationContext={{ projectId }}
+      />,
+    );
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
+    });
+    expect(screen.getByTestId("ops1-studio-project-nav-context")).toBeVisible();
+    expect(screen.getByTestId("ops1-studio-project-id")).toHaveTextContent(
+      projectId,
+    );
+    expect(
+      screen.getByRole("link", { name: "Retour au workspace" }),
+    ).toHaveAttribute(
+      "href",
+      `/studio/projects/${encodeURIComponent(projectId)}`,
+    );
+    expect(create).not.toHaveBeenCalled();
   });

   it("creates fixture session locked and refuses interactive mode change", async () => {
diff --git a/projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx b/projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx
new file mode 100644
index 0000000..f1066da
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx
@@ -0,0 +1,154 @@
+/**
+ * Workspace → OPS1 navigation continuity.
+ *
+ * Justification for a dedicated file: existing `globalModeBadge.ui.test.tsx`
+ * hardcodes `useSearchParams: () => new URLSearchParams()` with no projectId,
+ * and `Ops1SessionScreen.test.tsx` does not exercise NouvelleDemandePageClient
+ * query parsing. This file covers AC-04/05/07/08/09 at the page-client boundary.
+ */
+import { cleanup, render, screen, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";
+
+const create = vi.fn();
+const get = vi.fn();
+const liveConfig = vi.fn();
+let searchParams = new URLSearchParams();
+
+vi.mock("next/navigation", () => ({
+  useSearchParams: () => searchParams,
+}));
+
+vi.mock("next/link", () => ({
+  default: ({
+    children,
+    href,
+    ...props
+  }: {
+    children: React.ReactNode;
+    href: string;
+  }) => (
+    <a href={href} {...props}>
+      {children}
+    </a>
+  ),
+}));
+
+vi.mock("@/lib/ops1/actions", () => ({
+  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
+  ops1GetSessionAction: (...args: unknown[]) => get(...args),
+  ops1SendMessageAction: vi.fn(),
+  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1EnsureSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: { context: null },
+  })),
+  ops1GetSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: { context: null },
+  })),
+  ops1InstantiateCursorPromptAction: vi.fn(),
+  ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
+    ok: true,
+    data: { flagEnabled: false, binPath: null, available: false },
+  })),
+  ops1AppendUserMessageAction: vi.fn(),
+  ops1QualifyActionNotRequiredAction: vi.fn(),
+  ops1CreateFixtureActionCandidateAction: vi.fn(),
+  ops1RefineActionCandidateAction: vi.fn(),
+  ops1RecordGateDecisionAction: vi.fn(),
+  ops1RefuseExecutionAction: vi.fn(),
+  ops1EvaluateAllowlistAction: vi.fn(),
+  ops1CreateExecutionContractAction: vi.fn(),
+  ops1RecordExecutionGateAction: vi.fn(),
+  ops1RunExecutionAttemptAction: vi.fn(),
+  ops1GenerateExecutionReportAction: vi.fn(),
+  ops1ResumePostReportChatAction: vi.fn(),
+  ops1CloseSessionAction: vi.fn(),
+  ops1OpenContinuationAction: vi.fn(),
+}));
+
+describe("Workspace → OPS1 navigation continuity", () => {
+  afterEach(() => cleanup());
+
+  beforeEach(() => {
+    vi.clearAllMocks();
+    window.sessionStorage.clear();
+    searchParams = new URLSearchParams();
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
+  it("shows Studio Project navigation context for a valid projectId query", async () => {
+    const projectId = "prj:v2-a3-1";
+    searchParams = new URLSearchParams({ projectId });
+    render(<NouvelleDemandePageClient />);
+
+    await waitFor(() => {
+      expect(
+        screen.getByTestId("ops1-studio-project-nav-context"),
+      ).toBeVisible();
+    });
+    expect(screen.getByTestId("ops1-studio-project-id")).toHaveTextContent(
+      projectId,
+    );
+    expect(
+      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
+    ).toHaveTextContent(/Contexte de navigation uniquement/i);
+    expect(
+      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
+    ).toHaveTextContent(/pas liée ni persistée/i);
+    expect(
+      screen.getByRole("link", { name: "Retour au workspace" }),
+    ).toHaveAttribute(
+      "href",
+      `/studio/projects/${encodeURIComponent(projectId)}`,
+    );
+    expect(create).not.toHaveBeenCalled();
+    expect(
+      await screen.findByTestId("ops1-empty-state"),
+    ).toBeVisible();
+    expect(
+      screen.getByRole("button", { name: /Créer session fixture/i }),
+    ).toBeVisible();
+  });
+
+  it("keeps historical OPS1 empty state when projectId is absent", async () => {
+    render(<NouvelleDemandePageClient />);
+
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
+    });
+    expect(
+      screen.queryByTestId("ops1-studio-project-nav-context"),
+    ).toBeNull();
+    expect(create).not.toHaveBeenCalled();
+  });
+
+  it("ignores invalid or oversized projectId without blocking OPS1", async () => {
+    for (const projectId of [
+      "not-a-project",
+      "prj:",
+      `prj:${"x".repeat(200)}`,
+      "prj:has space",
+    ]) {
+      cleanup();
+      searchParams = new URLSearchParams({ projectId });
+      render(<NouvelleDemandePageClient />);
+
+      await waitFor(() => {
+        expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
+      });
+      expect(
+        screen.queryByTestId("ops1-studio-project-nav-context"),
+      ).toBeNull();
+      expect(create).not.toHaveBeenCalled();
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index fde151e..25f100c 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -151,12 +151,25 @@ describe("V2-A3 Project Workspace UI", () => {
     expect(
       within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),
     ).toHaveLength(2);
+    const continuePilotage = screen.getByRole("link", {
+      name: "Continuer le pilotage",
+    });
+    expect(continuePilotage).toBeVisible();
+    expect(continuePilotage).toHaveAttribute(
+      "href",
+      `/ops1/nouvelle-demande?projectId=${encodeURIComponent("prj:v2-a3-1")}`,
+    );
+    expect(screen.getByTestId("workspace-continue-pilotage")).toBe(
+      continuePilotage,
+    );
     expect(
       screen.getByRole("link", { name: "Créer un autre projet" }),
     ).toHaveAttribute("href", "/studio/projects/new");
     expect(screen.queryByText(/\brecommendation engine\b/i)).toBeNull();
     expect(screen.queryByText(/\borchestrateur\b/i)).toBeNull();
     expect(screen.queryByRole("heading", { name: /dashboard/i })).toBeNull();
+    expect(screen.queryByText(/Project lié à OPS1/i)).toBeNull();
+    expect(screen.queryByText(/Workspace connecté/i)).toBeNull();
   });

   it("loads the workspace through getProjectRuntimeAction", async () => {
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
index bc5642a..404cfdb 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
@@ -11,6 +11,21 @@ import {
   type GlobalModeContext,
 } from "@/lib/ops1/globalModeBadge";

+/** Navigation-only Studio Project id — never trusted as OPS1 domain input. */
+const STUDIO_PROJECT_NAV_ID_MAX_LEN = 128;
+
+function parseStudioProjectNavigationId(
+  raw: string | null,
+): string | null {
+  if (raw == null) return null;
+  const value = raw.trim();
+  if (!value) return null;
+  if (value.length > STUDIO_PROJECT_NAV_ID_MAX_LEN) return null;
+  // Require non-empty Studio Project suffix after the canonical prefix.
+  if (!/^prj:[^\s]+$/.test(value)) return null;
+  return value;
+}
+
 const COPILOT = {
   variant: "flush" as const,
   name: "Nora · SFIA Copilot",
@@ -38,6 +53,9 @@ function NouvelleDemandeBody({
 }) {
   const params = useSearchParams();
   const vsMode = params.has("vs");
+  const projectNavigationId = parseStudioProjectNavigationId(
+    params.get("projectId"),
+  );

   if (vsMode) {
     return (
@@ -50,6 +68,11 @@ function NouvelleDemandeBody({
   return (
     <Ops1SessionScreen
       onGlobalModeContextChange={onGlobalModeContextChange}
+      projectNavigationContext={
+        projectNavigationId
+          ? { projectId: projectNavigationId }
+          : undefined
+      }
     />
   );
 }
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index 194e8a3..3012e76 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -1,5 +1,6 @@
 "use client";

+import Link from "next/link";
 import { useCallback, useEffect, useState, useTransition } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
@@ -169,10 +170,18 @@ function gateAvailable(candidate: ActionCandidate): boolean {
   );
 }

+export type Ops1ProjectNavigationContext = {
+  /** Studio Project id for navigation continuity only — not a session binding. */
+  projectId: string;
+};
+
 export function Ops1SessionScreen({
   onGlobalModeContextChange,
+  projectNavigationContext,
 }: {
   onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
+  /** Optional Studio Project navigation context — display only, never domain input. */
+  projectNavigationContext?: Ops1ProjectNavigationContext;
 } = {}) {
   const [phase, setPhase] = useState<UiPhase>("boot");
   const [session, setSession] = useState<CycleSession | null>(null);
@@ -920,6 +929,41 @@ export function Ops1SessionScreen({
         </div>
       </header>

+      {projectNavigationContext ? (
+        <aside
+          className={styles.studioNavContext}
+          data-testid="ops1-studio-project-nav-context"
+          aria-labelledby="ops1-studio-project-nav-title"
+        >
+          <h3
+            id="ops1-studio-project-nav-title"
+            className={styles.studioNavContextTitle}
+          >
+            Projet Studio courant
+          </h3>
+          <p
+            className={styles.studioNavContextId}
+            data-testid="ops1-studio-project-id"
+          >
+            {projectNavigationContext.projectId}
+          </p>
+          <p
+            className={styles.studioNavContextDisclaimer}
+            data-testid="ops1-studio-project-nav-disclaimer"
+          >
+            Contexte de navigation uniquement — cette session OPS1 n’est pas
+            liée ni persistée dans le Project Studio.
+          </p>
+          <Link
+            className={styles.studioNavContextReturn}
+            href={`/studio/projects/${encodeURIComponent(projectNavigationContext.projectId)}`}
+            data-testid="ops1-studio-project-return"
+          >
+            Retour au workspace
+          </Link>
+        </aside>
+      ) : null}
+
       {phase === "boot" || (pending && phase === "creating") ? (
         <p className={styles.muted} data-testid="ops1-loading">
           {phase === "creating" ? "Création de la session…" : "Chargement…"}
diff --git a/projects/sfia-studio/app/features/ops1/ops1-session.module.css b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
index ddb3d6d..d31caf9 100644
--- a/projects/sfia-studio/app/features/ops1/ops1-session.module.css
+++ b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
@@ -39,6 +39,50 @@
   margin-top: 0.25rem;
 }

+.studioNavContext {
+  display: flex;
+  flex-direction: column;
+  gap: 0.45rem;
+  padding: 0.9rem 1rem;
+  border: 1px solid var(--sfia-border);
+  border-radius: 12px;
+  background: #f7f9fc;
+}
+
+.studioNavContextTitle {
+  margin: 0;
+  font-size: 0.95rem;
+  color: var(--sfia-ink);
+}
+
+.studioNavContextId {
+  margin: 0;
+  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
+  font-size: 0.85rem;
+  color: var(--sfia-ink);
+  overflow-wrap: anywhere;
+}
+
+.studioNavContextDisclaimer {
+  margin: 0;
+  font-size: 0.85rem;
+  line-height: 1.4;
+  color: var(--sfia-muted);
+}
+
+.studioNavContextReturn {
+  align-self: flex-start;
+  color: var(--sfia-blue);
+  font-size: 0.85rem;
+  font-weight: 650;
+  text-decoration: none;
+}
+
+.studioNavContextReturn:focus-visible {
+  outline: 3px solid var(--sfia-blue-soft);
+  outline-offset: 2px;
+}
+
 .panel {
   background: var(--sfia-surface);
   border: 1px solid var(--sfia-border);
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
index 43b42ed..e34949a 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
@@ -1,4 +1,3 @@
-import Link from "next/link";
 import { Card } from "@/components/ui/Card";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
@@ -128,9 +127,19 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
       </section>

       <div className={styles.actions}>
-        <Link className={styles.navLink} href="/studio/projects/new">
+        <CtaButton
+          href={`/ops1/nouvelle-demande?projectId=${encodeURIComponent(result.project.projectId)}`}
+          data-testid="workspace-continue-pilotage"
+        >
+          Continuer le pilotage
+        </CtaButton>
+        <CtaButton
+          href="/studio/projects/new"
+          variant="secondary"
+          data-testid="workspace-create-another-project"
+        >
           Créer un autre projet
-        </Link>
+        </CtaButton>
       </div>
       </div>
     </Card>
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
index 0b0dbd9..12cfe3c 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
@@ -112,6 +112,8 @@

 .actions {
   justify-content: flex-end;
+  align-items: center;
+  gap: var(--sfia-space-md);
   padding-top: var(--sfia-space-xs);
   border-top: 1px solid var(--sfia-border-soft);
 }
```

---

## 11. Stop-condition scan (template §8 items 1–37 relevant)

No blocking stop triggered for base/commit drift, dirty tracked tree, unexpected remote SHA, existing PR, diff mismatch, forbidden paths, secrets, non-reusable QA, or product mutation.
Items 24–37 Review Handoff: handled via publish-in-cycle after this pack (see Cursor report).

---

## 12. Verdict

**READY FOR PR WITH RESERVES — WORKSPACE TO OPS1 CONTINUITY — EXACT 8-FILE DIFF — NAVIGATION-ONLY — NO DOMAIN BINDING — BRANCH PUSHED AT `93897e4` — NO PR CREATED — FINOPS POSTGRES ENV RESERVE NON-BLOCKING**

### Next gate

**GO CREATE PR OPTION A — NOT GRANTED**

### Not done / not authorized this gate

- `gh pr create`
- Merge
- Any product file mutation
- FinOps reopen / postgres suite remediation
- Force push / amend / rebase / reset
