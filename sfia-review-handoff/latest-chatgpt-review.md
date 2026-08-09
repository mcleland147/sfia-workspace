# SFIA Review Pack — FULL

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 8 Delivery — Workspace → OPS1 continuity |
| **Profil** | Standard |
| **Typologie** | INC — incrément produit borné |
| **GO Morris consommé** | `GO DELIVERY OPTION A — WORKSPACE → OPS1 / CONTROL TOWER` |
| **Timestamp CEST** | 2026-08-10 01:59:34 CEST |
| **Timestamp UTC** | 2026-08-09 23:59:34 UTC |
| **Branche** | `delivery/sfia-studio-workspace-ops1-continuity` |
| **Base SHA / origin/main** | `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| **HEAD projet** | `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` (aucun commit projet) |
| **Working tree avant** | tracked clean ; `?? .tmp-sfia-review/` |
| **Working tree après** | 7 fichiers tracked modifiés + 1 test créé ; non commités |
| **Synthesis-only** | NO |
| **CKC** | fallback `02-fifteen-cycles-synthetic-map.md` + v2.5 §4.8 — method-candidate / aucune autorité |
| **Correction numérotation** | handoff entrant « Cycle 5 » = erreur ; cycle canonique = **8 — Delivery** (handoff entrant non modifié) |

---

## 0. Contrôles d’intégrité

| Contrôle | Résultat |
|----------|----------|
| Base drift | PASS — HEAD = origin/main = `6e851777…` |
| Dirty worktree initial | PASS — tracked clean |
| Branch existence | PASS — créée localement ; absente sur origin |
| Project commit | **0** |
| Project push | **0** |
| PR | **0** |
| Provider OpenAI live | **0** |
| Cursor real | **0** |
| GitHub write | **0** |
| Neon | **0** |
| FinOps development | **0** |
| Migrations | **0** |
| Backend/domain model changes | **0** |
| OPS1 actions/types/repository/db | **0** |
| ExecutionRun changes | **0** |

---

## 1. Sources méthode / produit / handoff entrant

### Méthode
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` (fallback)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` (historique/candidate)

### Handoff entrant
- `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`
- Rôle : Product Restart — Cycle 1 Cadrage
- Base `6e851777…`
- Verdict cadrage : PRODUCT RESTART CADRAGE READY / Option A recommandée

### Produit
- `projects/sfia-studio/66`–`73` Control Tower (metadata 70/73 stale possibles ; code main prime)

---

## 2. Diagnostic technique (avant)

`ProjectWorkspaceView` n’offrait que « Créer un autre projet ».
OPS1 accessible séparément via `/ops1/nouvelle-demande`.
`ops1CreateSessionAction` n’accepte que `mode` — **non modifié**.
Aucun Project ID dans CycleSession.

---

## 3. Design minimal réalisé

1. CTA primaire **Continuer le pilotage** → `/ops1/nouvelle-demande?projectId=<encoded>`
2. CTA secondaire **Créer un autre projet** conservée
3. `NouvelleDemandePageClient` parse/valide `projectId` (préfixe `prj:` + suffixe non vide, max 128, sans whitespace) — **navigation-only**
4. Invalid/absent → comportement OPS1 historique
5. `Ops1SessionScreen` affiche bandeau « Projet Studio courant » + microcopy anti-binding + **Retour au workspace**
6. Aucune création de session implicite
7. Fixture reste le défaut

---

## 4. Fichiers modifiés / créés

### Production (5)
- `projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx`
- `projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css`
- `projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx`
- `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`
- `projects/sfia-studio/app/features/ops1/ops1-session.module.css`

### Tests (3)
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx` (modifié)
- `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx` (modifié)
- `projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx` (**créé**)

**Justification nouveau test :** `globalModeBadge.ui.test.tsx` hardcode `URLSearchParams()` vide ; `Ops1SessionScreen.test.tsx` ne couvre pas le parsing `NouvelleDemandePageClient`.

**Total fichiers tracked touchés :** 8 (≤6 production ; OK)

---

## 5. Critères AC-01…AC-12

| AC | Résultat | Preuve |
|----|----------|--------|
| AC-01 Workspace CTA | **PASS** | UI + `projectWorkspaceUi.test.tsx` + runtime screenshot 01 |
| AC-02 Destination encodée | **PASS** | href `?projectId=prj%3A…` |
| AC-03 Secondary CTA | **PASS** | Créer un autre projet → `/studio/projects/new` |
| AC-04 OPS1 contexte | **PASS** | bandeau + tests continuity + screenshot 02 |
| AC-05 Anti-claim | **PASS** | microcopy « navigation uniquement / pas liée ni persistée » |
| AC-06 Retour | **PASS** | lien `/studio/projects/<encoded>` |
| AC-07 OPS1 historique | **PASS** | sans projectId → pas de bandeau |
| AC-08 Query invalide | **PASS** | ignorée ; OPS1 intact |
| AC-09 Pas de session implicite | **PASS** | create non appelé au load ; empty state |
| AC-10 Fixture intacte | **PASS** | session fixture créée volontairement ; screenshot 03 |
| AC-11 Gates intactes | **PASS** | aucun changement actions/gates ; projectId display-only |
| AC-12 Aucune nouvelle autorité | **PASS** | projectId non passé à actions/backend |

---

## 6. Tests & checks

| Check | Résultat |
|-------|----------|
| Targeted vitest (workspace + OPS1 continuity + globalModeBadge) | **PASS** 17/17 |
| `npx vitest run --exclude '__tests__/oa/finops/postgres/**'` | **PASS** 153 files / 1576 tests |
| `npm test` (inclut FinOps postgres) | **FAIL env** — `ECONNREFUSED 127.0.0.1:55479` sur `__tests__/oa/finops/postgres/**` uniquement ; hors scope FinOps ; Docker Postgres non disponible |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |
| Accessibility (axe workspace test existant) | **PASS** (violations = []) |

---

## 7. Runtime fixture

| Champ | Valeur |
|-------|--------|
| Runtime | **YES** — `npm run dev` :3020 ; fixture/local ; no OpenAI/Cursor real |
| Routes | `/studio/projects/new` → workspace → `/ops1/nouvelle-demande?projectId=prj%3A4c24a450-…` |
| Project démo | `prj:4c24a450-85cf-43fe-89cd-ebdf74789427` |
| Session fixture | `ops1-sess-863d5a95-7abe-4c54-92cd-60675d8124cf` ; `projectKey=sfia-studio-ops1` (non relié) |
| Captures | `.tmp-sfia-review/workspace-ops1-continuity/screenshots/01-workspace-cta.png` ; `02-ops1-project-context.png` ; `03-ops1-fixture-session.png` |

Note runtime : clic Next.js Link parfois non navigué par l’automate browser ; destination vérifiée via href déterministe + navigation URL équivalente (même query).

---

## 8. Réserves

1. `npm test` global échoue sur suite FinOps postgres (env) — non introduit par cette slice ; FinOps non rouvert.
2. Automate browser a nécessité navigation directe pour confirmer la route OPS1 (href CTA validé séparément).
3. Overlay Next.js « Issues » visible en dev — hors scope polish.

---

## 9. FULL DIFF — fichiers tracked modifiés

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

## 10. FULL CONTENT — fichier test créé

```tsx
/**
 * Workspace → OPS1 navigation continuity.
 *
 * Justification for a dedicated file: existing `globalModeBadge.ui.test.tsx`
 * hardcodes `useSearchParams: () => new URLSearchParams()` with no projectId,
 * and `Ops1SessionScreen.test.tsx` does not exercise NouvelleDemandePageClient
 * query parsing. This file covers AC-04/05/07/08/09 at the page-client boundary.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

const create = vi.fn();
const get = vi.fn();
const liveConfig = vi.fn();
let searchParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useSearchParams: () => searchParams,
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/ops1/actions", () => ({
  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
  ops1GetSessionAction: (...args: unknown[]) => get(...args),
  ops1SendMessageAction: vi.fn(),
  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
  ops1EnsureSfiaContextAction: vi.fn(async () => ({
    ok: true,
    data: { context: null },
  })),
  ops1GetSfiaContextAction: vi.fn(async () => ({
    ok: true,
    data: { context: null },
  })),
  ops1InstantiateCursorPromptAction: vi.fn(),
  ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
    ok: true,
    data: { flagEnabled: false, binPath: null, available: false },
  })),
  ops1AppendUserMessageAction: vi.fn(),
  ops1QualifyActionNotRequiredAction: vi.fn(),
  ops1CreateFixtureActionCandidateAction: vi.fn(),
  ops1RefineActionCandidateAction: vi.fn(),
  ops1RecordGateDecisionAction: vi.fn(),
  ops1RefuseExecutionAction: vi.fn(),
  ops1EvaluateAllowlistAction: vi.fn(),
  ops1CreateExecutionContractAction: vi.fn(),
  ops1RecordExecutionGateAction: vi.fn(),
  ops1RunExecutionAttemptAction: vi.fn(),
  ops1GenerateExecutionReportAction: vi.fn(),
  ops1ResumePostReportChatAction: vi.fn(),
  ops1CloseSessionAction: vi.fn(),
  ops1OpenContinuationAction: vi.fn(),
}));

describe("Workspace → OPS1 navigation continuity", () => {
  afterEach(() => cleanup());

  beforeEach(() => {
    vi.clearAllMocks();
    window.sessionStorage.clear();
    searchParams = new URLSearchParams();
    liveConfig.mockResolvedValue({
      ok: true,
      data: {
        available: false,
        missing: ["OPENAI_API_KEY", "OPENAI_MODEL"],
        testProvider: false,
      },
    });
  });

  it("shows Studio Project navigation context for a valid projectId query", async () => {
    const projectId = "prj:v2-a3-1";
    searchParams = new URLSearchParams({ projectId });
    render(<NouvelleDemandePageClient />);

    await waitFor(() => {
      expect(
        screen.getByTestId("ops1-studio-project-nav-context"),
      ).toBeVisible();
    });
    expect(screen.getByTestId("ops1-studio-project-id")).toHaveTextContent(
      projectId,
    );
    expect(
      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
    ).toHaveTextContent(/Contexte de navigation uniquement/i);
    expect(
      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
    ).toHaveTextContent(/pas liée ni persistée/i);
    expect(
      screen.getByRole("link", { name: "Retour au workspace" }),
    ).toHaveAttribute(
      "href",
      `/studio/projects/${encodeURIComponent(projectId)}`,
    );
    expect(create).not.toHaveBeenCalled();
    expect(
      await screen.findByTestId("ops1-empty-state"),
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: /Créer session fixture/i }),
    ).toBeVisible();
  });

  it("keeps historical OPS1 empty state when projectId is absent", async () => {
    render(<NouvelleDemandePageClient />);

    await waitFor(() => {
      expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
    });
    expect(
      screen.queryByTestId("ops1-studio-project-nav-context"),
    ).toBeNull();
    expect(create).not.toHaveBeenCalled();
  });

  it("ignores invalid or oversized projectId without blocking OPS1", async () => {
    for (const projectId of [
      "not-a-project",
      "prj:",
      `prj:${"x".repeat(200)}`,
      "prj:has space",
    ]) {
      cleanup();
      searchParams = new URLSearchParams({ projectId });
      render(<NouvelleDemandePageClient />);

      await waitFor(() => {
        expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
      });
      expect(
        screen.queryByTestId("ops1-studio-project-nav-context"),
      ).toBeNull();
      expect(create).not.toHaveBeenCalled();
    }
  });
});

```

---

## 11. Verdict

**OPTION A DELIVERY PASS WITH RESERVES — WORKSPACE TO OPS1 CONTINUITY IMPLEMENTED — NO DOMAIN BINDING — NO PROJECT COMMIT — READY FOR CHATGPT VALIDATION**

Prochaine gate Morris candidate uniquement :

**MORRIS GO COMMIT OPTION A**

(non accordée par ce cycle)

---

## 12. Instruction ChatGPT

Lire main + `sfia/review-handoff` + `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier FULL DIFF : fichiers autorisés seulement ; CTA ; encoding ; anti-binding ; 0 domain/actions/db/migration ; 0 session implicite ; fixture défaut ; tests/runtime ; 0 FinOps ; 0 commit/push/PR projet.

Le travail projet reste **non commité** jusqu’au GO Morris commit.
