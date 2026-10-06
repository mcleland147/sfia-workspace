# ChatGPT Review Pack — P5-S06 CP01 Critical Correction (FULL / HANDOFF)

## 1. Timestamp
2026-10-06 09:57:17 CEST

## 2. Repo / worktree
`/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` (sfia-workspace)

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion`

## 4. HEAD / base
- HEAD: `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- origin/main: `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- left-right origin/main...HEAD: 0 0
- staged: VIDE

## 5. Entry git truth
S06 uncommitted candidate preserved then CP01 adapted in same working tree. No reset/stash.

```
M	projects/sfia-studio/app/app/login/login-client.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md

```

```
 .../sfia-studio/app/app/login/login-client.tsx     | 161 ++++---
 .../NewProjectIntentionPage.module.css             | 311 ++++++++-----
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  | 481 +++++++++++----------
 .../pre-m6-product-ui/ProjectsPage.module.css      | 368 +++++++++++-----
 .../features/pre-m6-product-ui/ProjectsPage.tsx    | 283 +++++++++---
 .../surfaces/ConversationSurface.tsx               |  28 +-
 .../convergence/sfia-studio-convergence-roadmap.md |   4 +-
 ...t-product-simplification-integrated-delivery.md | 108 ++++-
 8 files changed, 1129 insertions(+), 615 deletions(-)

```

Untracked product:
```
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
?? projects/sfia-studio/app/app/login/login-client.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
```

## 6. Review Handoff input
- branch `sfia/review-handoff`
- file `sfia-review-handoff/latest-chatgpt-review.md`
- commit `72e412431936ad6d0fd58fe73f146f2d9fb168dc`
- blob `ba72d82dac66a440c2625875e532ae736fc486a2`
- title: ChatGPT Review Pack — P5-S06 Pilot Experience Completion (FULL / HANDOFF)
- SUPERSEDED by this CP01 publication after remote verify

## 7. Morris CP01 authorization
P5-S06 CORRECTION PASS 01 = AUTHORIZED / CONSUMED (2026-10-06).
Allows local CP01 + tests + Figma READ + truth-sync + FULL pack + L3 handoff.
Forbids project git / REAL / new architecture / Figma mutation / P5 COMPLETE / P6 / runtime v3.

## 8. Sources lues
v2.6 template · routing · operating model · guardrails · Build Doctrine · Roadmap (local) · C1 · P1–P5 (P3 §§12–14,28–32,34.1 · P4 §§6.4,9.4,27A,28–29,50–52) · S06 handoff 72e41243 · Product UI/auth/create/list/conversation files · D1 HARVEST only · Figma MCP metadata nodes 63:39, 190:253, 67:39, 190:284, 130:3, 190:551.

## 9. Convergence Pre-check
- Capability: Pilot chat-first entry / Project create / Nora activity honesty / P3 visual
- Milestone: P5
- State: S06 after Critical Review = CORRECTION REQUIRED → CP01 candidate
- KEEP: ProductShell, recents, SQLite Project owner, create/list actions, Better/Auth, workspace, conversation runtime, tokens
- ADAPT: ProjectsPage, NewProject, helpers, Conversation projection, Auth CSS, tests
- HARVEST: D1 concepts only
- FREEZE: Journal/Historique/Deliverable/S05 routing
- No parallel architecture: YES
- Next: S07 NOT STARTED

## 10. Asset classification
See §9.

## 11. Phase 0 discovery COMPLETE

### D0-A Pre-Project semantics
`useProductConversation` requires `projectId`. No pre-Project Nora/runtime seam. D1 is parallel — not used. REAL not required.
**ADAPT:** explicit UI phases only. No regex NLP.

### D0-B Continuity rebound
createProjectRuntimeAction → Project + LPS (name/objective/context) → router.push workspace → getProjectRuntimeAction + projectAssistantConversationContinuityAction with durable projectId.
Minimum-sufficient: durable Project truth, not pre-Project transcript. **No new store.**

### D0-C Cancellation
AbortController exists in OA **execution-run** only — not conversation send (`projectAssistantSendAction` awaits full result). No AbortSignal on Product Nora turn.
**Do not implement fake STOP.** Decision note in §16.

## 12–13. Pre-Project BEFORE / AFTER
BEFORE: first free-text → intention, second → name, NAME_HINT regex, « Ce que Nora a compris ».
AFTER: INTENTION_REQUIRED / NAME_REQUIRED / OPTIONAL_CONTEXT; absorb only asked slot; reopenField explicit; preview « Aperçu du projet / restitution factuelle ».

## 14. Continuity call graph
NewProjectIntentionPage.onCreate
→ createProjectRuntimeAction (canonical)
→ router.push `/studio/projects/` + encodeURIComponent(projectId)
→ ProjectWorkspacePage(projectId)
→ getProjectRuntimeAction
→ useProductConversation with projectId
→ projectAssistantConversationContinuityAction
Fresh Product truth. Ephemeral draft discarded. No auto Cycle.

## 15–16. Cancellation call graph + decision
ConversationSurface → useProductConversation.sendMessage → projectAssistantSendAction → Nora orchestration → provider complete() (no stream, no signal).
A. interruption needed at sendAction/provider complete
B. AbortSignal would need to enter sendAction + provider
C. layers: hook → server action → runtime → provider
D. options: (1) Morris accept P3 STOP gap (2) dedicated cancellation architecture GO
E. tests/provider impact if (2)
F. debt P5-S06-DEBT-NORA-STOP
G. recommend (1) until GO — Cursor must not invent architecture
H. not a Cursor decision

Result: **no stop button implemented**. stopAvailable always false.

## 17. Projects BEFORE/AFTER
BEFORE: « À reprendre » from updatedAt ≤14d.
AFTER: « Projets récents » + hint « pas une prochaine action ». Table Tous: Projet / État / Dernière activité. No Attention column.

## 18. Orientation BEFORE/AFTER
BEFORE: Orientation Nora / Demander à Nora implying general orientation.
AFTER: « Démarrer un nouveau projet avec Nora » / Commencer → `/studio/projects/new`. Explicit non-claim.

## 19. Activity mapping matrix
| Runtime | Observable | P3 | Wording | Test |
| --- | --- | --- | --- | --- |
| SENDING | send started | START | Nora travaille… | yes |
| SOURCE_LOOKUP + busy | tool events path | ACTIVITY | Nora consulte les sources… | yes |
| ASSISTANT_WORKING + busy | pending turn | ACTIVITY | Nora travaille… | yes |
| ANSWERED | turn done | COMPLETE | Réponse prête | yes |
| ERROR_RECOVERABLE | error | ERROR | retry | yes |
| BLOCKED | config missing | blocked | indisponible | yes |
| streaming | NOT OBSERVABLE | — | not projected | — |
| STOPPED | no abort | — | not projected | no fake |

## 20. Figma contract extracted (MCP get_metadata)

### Projects desktop 63:39 1440×1024 EXPLORATORY canonical
Rail 192×1024. App 1224. Header 54. Hero 24,26 1176×74. Orientation 24,120 1176×92. Resume 24,232 1176×248 (2 cards 565×196) — **content not used** (no next-action fact). All projects 24,500 table rows 50h columns Projet 300 / En cours 290 / État 160 / Activité 150 / Attention 276 — Attention/En cours **omitted** (no facts).

### Projects mobile 190:253 390×844 VALIDATED
Topbar 56. Head 16,18 358×48 title + Nouveau 110×38. Search 16,78 358×42. Cards 358×112.

### New Project desktop 67:39 1440×1024
Rail 192. Conversation 820×970 composer at y=775 h=195. Preview 820,0 404×970. CTA Créer in preview.

### New Project mobile 190:284
Head 56+90. Scroll. Draft card with Créer 334×38. Composer must be first-viewport — CP01 sticky/order composer after hero.

### Auth desktop 130:3 VALIDATED
Brand 48,40. Cue 72,380 360×150. Card 760,250 **460×420**. CTA 392×48.

### Auth mobile 190:551
Card 20,210 350×310. CTA 306×38.

## 21–22. Files modified / created
Created: listed below. Modified: code + docs in §5.

## 23. FULL CONTENT — new files
### CREATED `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts`
```ts
/**
 * P5-S06 CP01 — non-authoritative pre-Project collection helpers.
 * Client-only ephemeral state. No Product store. No D1 Intake path.
 * Explicit phases only — ZERO semantic inference / regex slot guessing.
 */

export type PreProjectDraft = {
  name: string;
  intention: string;
  context: string;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
};

/** Ephemeral UI collection phase — not a Product state machine. */
export type CollectPhase =
  | "INTENTION_REQUIRED"
  | "NAME_REQUIRED"
  | "OPTIONAL_CONTEXT";

export type CollectField = "name" | "intention";

const INTENTION_MAX = 4000;
const NAME_MAX = 200;
const CONTEXT_MAX = 4000;

export function emptyDraft(): PreProjectDraft {
  return { name: "", intention: "", context: "" };
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return draft.name.trim().length > 0 && draft.intention.trim().length > 0;
}

export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
  if (!draft.intention.trim()) return "INTENTION_REQUIRED";
  if (!draft.name.trim()) return "NAME_REQUIRED";
  return "OPTIONAL_CONTEXT";
}

function sanitize(raw: string, max: number): string {
  return raw.replace(/\u0000/g, "").trim().slice(0, max);
}

/**
 * Record the Pilot answer for the currently asked slot only.
 * `phase` must be the question Nora just asked — never inferred from text.
 */
export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
  phase: CollectPhase,
): PreProjectDraft {
  const text = sanitize(raw, INTENTION_MAX);
  if (!text) return draft;
  const next = { ...draft };

  switch (phase) {
    case "INTENTION_REQUIRED":
      next.intention = next.intention.trim()
        ? `${next.intention}\n${text}`.slice(0, INTENTION_MAX)
        : text.slice(0, INTENTION_MAX);
      return next;
    case "NAME_REQUIRED":
      next.name = sanitize(text, NAME_MAX);
      return next;
    case "OPTIONAL_CONTEXT":
      next.context = next.context.trim()
        ? `${next.context}\n${text}`.slice(0, CONTEXT_MAX)
        : text.slice(0, CONTEXT_MAX);
      return next;
    default:
      return draft;
  }
}

/** Explicit correction — clears one captured field so Nora re-asks that slot. */
export function reopenField(
  draft: PreProjectDraft,
  field: CollectField,
): PreProjectDraft {
  if (field === "name") return { ...draft, name: "" };
  return { ...draft, intention: "" };
}

export function nextNoraPrompt(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Quel est l’objectif ou l’intention principale de ce projet ? Aucun projet durable n’est créé pour l’instant.";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "Voici les informations que vous avez fournies. Vérifiez l’aperçu, puis créez le projet — ou ajoutez du contexte.";
  }
}

export function composerPlaceholder(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Décrivez l’intention…";
    case "NAME_REQUIRED":
      return "Indiquez le nom du projet…";
    case "OPTIONAL_CONTEXT":
      return "Ajouter du contexte (optionnel)…";
  }
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: nextNoraPrompt("INTENTION_REQUIRED"),
  };
}

```

### CREATED `projects/sfia-studio/app/app/login/login-client.module.css`
```css
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 48px 32px;
  background: var(--pm6-canvas, #fffdf9);
  color: var(--pm6-ink, #1f1a16);
  font-family: var(--pm6-font, Inter, "Segoe UI", sans-serif);
  position: relative;
}

.topBrand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.layout {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 460px;
  gap: 80px;
  align-items: center;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  min-height: 620px;
}

.narrative {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
  justify-self: start;
  margin-left: 24px;
}

.card {
  width: 460px;
  max-width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 35px;
  background: var(--pm6-surface, #fff);
  border: 1px solid var(--pm6-border-soft, #eae2d9);
  border-radius: 16px;
  box-shadow: var(--pm6-shadow-card, 0 8px 24px rgba(31, 26, 22, 0.05));
  justify-self: end;
}

.mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--pm6-forest, #1f1a16);
  color: var(--pm6-forest-ink, #fffdf9);
  font-size: 0.85rem;
  font-weight: 700;
}

.brandText {
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--pm6-ink, #1f1a16);
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pm6-muted, #7f766d);
}

.narrativeTitle {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--pm6-ink, #1f1a16);
}

.narrativeBody {
  margin: 0;
  font-size: 1rem;
  line-height: 1.55;
  color: var(--pm6-muted-strong, #6f665e);
  max-width: 36ch;
}

.title {
  margin: 0;
  font-size: 1.55rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--pm6-ink, #1f1a16);
}

.lead {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--pm6-muted-strong, #6f665e);
}

.error {
  margin: 0;
  padding: 0.75rem 1rem;
  border-radius: var(--pm6-radius-md, 12px);
  background: var(--pm6-danger-tint, #fbeeec);
  border: 1px solid color-mix(in srgb, var(--pm6-danger, #b8432b) 35%, transparent);
  color: var(--pm6-danger, #b8432b);
  font-size: 0.9rem;
  line-height: 1.5;
}

.githubCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  border: 1px solid var(--pm6-forest, #1f1a16);
  border-radius: var(--pm6-radius-md, 12px);
  padding: 0.85rem 1rem;
  background: var(--pm6-forest, #1f1a16);
  color: var(--pm6-forest-ink, #fffdf9);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
}

.githubCta:hover {
  background: var(--pm6-forest-hover, #3a322b);
}

.githubCta:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring, 0 0 0 3px rgba(31, 26, 22, 0.35));
}

.githubIcon {
  flex: 0 0 auto;
  display: block;
}

.note {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--pm6-muted, #7f766d);
  text-align: center;
}

.sessionHint {
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: var(--pm6-radius-md, 12px);
  background: var(--pm6-canvas-raised, #fbf7f2);
  border: 1px solid var(--pm6-border-soft, #eae2d9);
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--pm6-ink-soft, #3d352e);
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    align-items: start;
    min-height: auto;
    gap: 24px;
  }

  .narrative {
    max-width: none;
    margin-left: 0;
  }

  .card {
    width: 100%;
    min-height: 310px;
    justify-self: stretch;
    padding: 27px 23px;
  }
}

@media (max-width: 767px) {
  .page {
    padding: 16px 20px;
  }

  .layout {
    padding-top: 80px;
  }

  .narrativeTitle {
    font-size: 1.55rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .githubCta {
    transition: none;
  }
}

```

### CREATED `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx`
```tsx
/** @vitest-environment jsdom */
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";
import { LoginClient } from "@/app/login/login-client";
import {
  absorbUserTurn,
  collectPhaseOf,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
  reopenField,
} from "@/features/pre-m6-product-ui/newProjectConversation";
import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
  vi.hoisted(() => ({
    listProjectsRuntimeActionMock: vi.fn(),
    createProjectRuntimeActionMock: vi.fn(),
    pushMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
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

afterEach(() => {
  cleanup();
  listProjectsRuntimeActionMock.mockReset();
  createProjectRuntimeActionMock.mockReset();
  pushMock.mockReset();
});

describe("P5-S06 CP01 explicit-phase collection", () => {
  it("records intention only while INTENTION_REQUIRED, never guesses name", () => {
    const d0 = emptyDraft();
    expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
    const extra = "Il faudrait aussi prendre en compte les avenants.";
    const d1 = absorbUserTurn(d0, "Moderniser le reporting", "INTENTION_REQUIRED");
    expect(d1.intention).toContain("Moderniser");
    expect(d1.name).toBe("");
    const stillIntention = absorbUserTurn(d1, extra, "INTENTION_REQUIRED");
    expect(stillIntention.name).toBe("");
    expect(stillIntention.intention).toContain("avenants");
    expect(isMinimumSufficient(stillIntention)).toBe(false);
  });

  it("records name only after NAME_REQUIRED; later turns stay context", () => {
    let d = absorbUserTurn(emptyDraft(), "Suivre les contrats", "INTENTION_REQUIRED");
    expect(collectPhaseOf(d)).toBe("NAME_REQUIRED");
    d = absorbUserTurn(d, "Contrats Q3", "NAME_REQUIRED");
    expect(d.name).toBe("Contrats Q3");
    expect(isMinimumSufficient(d)).toBe(true);
    d = absorbUserTurn(d, "Inclure les avenants", "OPTIONAL_CONTEXT");
    expect(d.name).toBe("Contrats Q3");
    expect(d.context).toContain("avenants");
  });

  it("reopens a captured field explicitly without guessing", () => {
    const d = absorbUserTurn(
      absorbUserTurn(emptyDraft(), "Obj", "INTENTION_REQUIRED"),
      "NomX",
      "NAME_REQUIRED",
    );
    const reopened = reopenField(d, "name");
    expect(reopened.name).toBe("");
    expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
    expect(nextNoraPrompt("NAME_REQUIRED")).toMatch(/nom/i);
  });
});

describe("P5-S06 CP01 ProjectsPage", () => {
  it("shows empty state without inventing projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument(),
    );
    expect(screen.queryByTestId("studio-projects-recent")).toBeNull();
    expect(screen.queryByText("À reprendre")).toBeNull();
  });

  it("treats updatedAt as recent activity, not next action, and searches locally", async () => {
    const recent = new Date().toISOString();
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:a",
          title: "Alpha Reporting",
          name: "Alpha Reporting",
          status: "active",
          objective: "Reporting",
          updatedAt: recent,
        },
        {
          projectId: "prj:b",
          title: "Beta Archive",
          name: "Beta Archive",
          status: "archived",
          objective: "Old",
          updatedAt: "2020-01-01T00:00:00.000Z",
        },
      ],
      disclosures: {},
    });
    const user = userEvent.setup();
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument(),
    );
    expect(screen.queryByText("À reprendre")).toBeNull();
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "Projets récents",
    );
    expect(
      within(screen.getByTestId("studio-projects-recent")).getByText(
        "Alpha Reporting",
      ),
    ).toBeInTheDocument();
    await user.type(screen.getByTestId("studio-projects-search"), "beta");
    expect(screen.getByTestId("studio-projects-list")).toHaveTextContent(
      "Beta Archive",
    );
    expect(screen.getByTestId("studio-projects-ask-nora")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
    expect(screen.getByTestId("studio-projects-orientation")).toHaveTextContent(
      /nouveau projet/i,
    );
    expect(screen.getByTestId("studio-projects-orientation")).not.toHaveTextContent(
      /retrouver un projet/i,
    );
  });
});

describe("P5-S06 CP01 NewProjectIntentionPage", () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000099",
    );
  });

  it("does not create a Project before explicit CTA and asks slots explicitly", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /intention principale/i,
    );

    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-intention")).toHaveTextContent(/contrats/i);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /Quel nom/i,
    );

    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
    expect(screen.getByTestId("create-project-submit")).toBeEnabled();
  });

  it("does not treat a follow-up precision as name before NAME_REQUIRED", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(screen.getByTestId("preview-name")).toHaveTextContent(
      /pas encore précisé/i,
    );
  });

  it("creates exactly one Project via canonical action then opens workspace", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      projectId: "prj:s06-1",
      project: {
        projectId: "prj:s06-1",
        name: "Contrats Q3",
        objective: "Suivre les contrats fournisseurs",
        criticality: "STANDARD",
      },
      livingState: { version: 1 },
      readiness: { status: "NOT_READY" },
      reusedFromIdempotencyKey: false,
    });
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
    );
    const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
    expect(arg.name).toBe("Contrats Q3");
    expect(arg.objective).toMatch(/contrats/i);
    expect(arg.criticality).toBe("STANDARD");
    expect(arg).not.toHaveProperty("cycleId");
    expect(arg).not.toHaveProperty("humanDecision");
    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
  });
});

describe("P5-S06 CP01 Nora activity mapping", () => {
  it("maps observable uiState without STOPPED or fake percent", () => {
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SENDING",
      }),
    ).toMatchObject({ phase: "start", stopAvailable: false });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SOURCE_LOOKUP",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora consulte les sources…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ASSISTANT_WORKING",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora travaille…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ANSWERED",
      }),
    ).toMatchObject({ phase: "complete" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ERROR_RECOVERABLE",
      }),
    ).toMatchObject({ phase: "error" });
    expect(
      projectNoraActivity({
        blocked: true,
        busy: false,
        uiState: "BLOCKED",
      }),
    ).toMatchObject({ phase: "blocked" });
    const idle = projectNoraActivity({
      blocked: false,
      busy: false,
      uiState: "READY",
    });
    expect(idle.phase).not.toBe("stopped" as never);
    expect(JSON.stringify(idle)).not.toMatch(/%|chain of thought|CoT/i);
  });
});

describe("P5-S06 CP01 Auth", () => {
  it("keeps GitHub-only Continuer avec GitHub and existing start href", () => {
    render(<LoginClient fromPath="/studio" />);
    const cta = screen.getByTestId("login-github");
    expect(cta).toHaveTextContent("Continuer avec GitHub");
    expect(cta).toHaveAttribute(
      "href",
      "/api/auth/github-start?from=%2Fstudio",
    );
  });
});

```

### CREATED `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts`
```ts
import type { ProductConversationUiState } from "../hooks/useProductConversation";

export type NoraActivityPhase =
  | "blocked"
  | "start"
  | "activity"
  | "complete"
  | "error"
  | "idle";

export type NoraActivityProjection = {
  phase: NoraActivityPhase;
  label: string;
  stopAvailable: false;
};

/**
 * P3 START/ACTIVITY/COMPLETE projection from Product conversation uiState.
 * STREAMING and STOPPED are not projected — not observable on this path.
 */
export function projectNoraActivity(input: {
  blocked: boolean;
  busy: boolean;
  uiState: ProductConversationUiState;
}): NoraActivityProjection {
  if (input.blocked) {
    return {
      phase: "blocked",
      label: "Assistant indisponible — configuration manquante.",
      stopAvailable: false,
    };
  }
  if (input.uiState === "SENDING") {
    return { phase: "start", label: "Nora travaille…", stopAvailable: false };
  }
  if (input.busy && input.uiState === "SOURCE_LOOKUP") {
    return {
      phase: "activity",
      label: "Nora consulte les sources…",
      stopAvailable: false,
    };
  }
  if (input.busy) {
    return { phase: "activity", label: "Nora travaille…", stopAvailable: false };
  }
  if (input.uiState === "ERROR_RECOVERABLE") {
    return {
      phase: "error",
      label: "Réponse interrompue — vous pouvez réessayer.",
      stopAvailable: false,
    };
  }
  if (input.uiState === "ANSWERED") {
    return { phase: "complete", label: "Réponse prête", stopAvailable: false };
  }
  return { phase: "idle", label: "Prêt", stopAvailable: false };
}

```

## 24. FULL DIFFS — modified code + docs
### MODIFIED `projects/sfia-studio/app/app/login/login-client.tsx`
```diff
diff --git a/projects/sfia-studio/app/app/login/login-client.tsx b/projects/sfia-studio/app/app/login/login-client.tsx
index 9dea8ffa..3be4deca 100644
--- a/projects/sfia-studio/app/app/login/login-client.tsx
+++ b/projects/sfia-studio/app/app/login/login-client.tsx
@@ -1,22 +1,42 @@
 "use client";

 import { useMemo } from "react";
+import "@/features/pre-m6-product-ui/product-tokens.css";
+import styles from "./login-client.module.css";

 const ERROR_MESSAGES: Record<string, string> = {
   github_user_not_allowlisted:
     "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
   github_id_unparseable:
-    "Impossible de vérifier l'identité GitHub (identifiant manquant).",
+    "Impossible de vérifier l'identité GitHub. Réessayez la connexion.",
   ALLOWLIST_DENIED:
-    "Votre identité GitHub n'est plus dans la liste d'autorisation SFIA.",
+    "Votre identité GitHub n'est plus autorisée pour SFIA Studio.",
   NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
   PROVIDER_ACCOUNT_MISSING:
     "Session incomplète — reconnectez-vous avec GitHub.",
   AUTH_CONFIG_ERROR:
-    "Configuration d'authentification indisponible (fail-closed).",
-  provider_not_allowed: "Seul GitHub OAuth est accepté.",
+    "Connexion indisponible pour le moment. Réessayez plus tard.",
+  provider_not_allowed: "Seul GitHub est accepté pour se connecter.",
 };

+function GitHubMark({ className }: { className?: string }) {
+  return (
+    <svg
+      className={className}
+      width="20"
+      height="20"
+      viewBox="0 0 16 16"
+      aria-hidden="true"
+      focusable="false"
+    >
+      <path
+        fill="currentColor"
+        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
+      />
+    </svg>
+  );
+}
+
 export function LoginClient({
   errorCode,
   fromPath,
@@ -40,91 +60,60 @@ export function LoginClient({
   const githubStartHref = `/api/auth/github-start?from=${encodeURIComponent(callbackURL)}`;

   return (
-    <div
-      style={{
-        minHeight: "100vh",
-        display: "flex",
-        alignItems: "center",
-        justifyContent: "center",
-        padding: "2rem",
-        background:
-          "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
-        color: "#e2e8f0",
-        fontFamily: "var(--font-inter), system-ui, sans-serif",
-      }}
-    >
-      <main
-        style={{
-          width: "min(28rem, 100%)",
-          border: "1px solid rgba(148, 163, 184, 0.35)",
-          borderRadius: "12px",
-          padding: "2rem",
-          background: "rgba(15, 23, 42, 0.85)",
-        }}
-        data-testid="login-surface"
-      >
-        <p
-          style={{
-            letterSpacing: "0.12em",
-            fontSize: "0.75rem",
-            textTransform: "uppercase",
-            color: "#94a3b8",
-            margin: 0,
-          }}
-        >
-          SFIA Studio
-        </p>
-        <h1 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.75rem" }}>
-          Connexion
-        </h1>
-        <p style={{ margin: "0 0 1.5rem", color: "#cbd5e1", lineHeight: 1.5 }}>
-          Authentifiez-vous avec GitHub. L&apos;accès Studio est réservé aux
-          identités autorisées côté serveur (rôle runtime : Pilote).
-        </p>
+    <div className={styles.page}>
+      <header className={styles.topBrand} aria-hidden="false">
+        <span className={styles.mark} aria-hidden="true">
+          S
+        </span>
+        <span className={styles.brandText}>SFIA Studio</span>
+      </header>

-        {message ? (
-          <p
-            role="alert"
-            data-testid="login-error"
-            style={{
-              margin: "0 0 1.25rem",
-              padding: "0.75rem 1rem",
-              borderRadius: "8px",
-              background: "rgba(127, 29, 29, 0.45)",
-              border: "1px solid rgba(248, 113, 113, 0.45)",
-              color: "#fecaca",
-            }}
-          >
-            {message}
+      <div className={styles.layout}>
+        <section className={styles.narrative} aria-labelledby="login-narrative">
+          <p className={styles.eyebrow}>Espace projet</p>
+          <h1 id="login-narrative" className={styles.narrativeTitle}>
+            Un espace de travail calme, continu et gouverné.
+          </h1>
+          <p className={styles.narrativeBody}>
+            Retrouvez vos projets, leur contexte et votre conversation avec
+            Nora.
           </p>
-        ) : null}
+        </section>

-        {/*
-          Native <a> — OAuth must work even when client chunks fail to hydrate
-          (observed: /_next/.../login/page.js → 404 left a dead <button>).
-          No preventDefault: href always navigates to public /api/auth/github-start.
-        */}
-        <a
-          href={githubStartHref}
-          data-testid="login-github"
-          style={{
-            display: "block",
-            width: "100%",
-            boxSizing: "border-box",
-            border: 0,
-            borderRadius: "8px",
-            padding: "0.85rem 1rem",
-            background: "#f8fafc",
-            color: "#0f172a",
-            fontWeight: 600,
-            cursor: "pointer",
-            textAlign: "center",
-            textDecoration: "none",
-          }}
-        >
-          Se connecter avec GitHub
-        </a>
-      </main>
+        <main className={styles.card} data-testid="login-surface">
+          <h2 className={styles.title}>Bienvenue dans SFIA Studio</h2>
+          <p className={styles.lead}>
+            Connectez-vous pour retrouver vos projets et reprendre votre
+            travail.
+          </p>
+
+          {message ? (
+            <p role="alert" data-testid="login-error" className={styles.error}>
+              {message}
+            </p>
+          ) : null}
+
+          {/*
+            Native <a> — OAuth must work even when client chunks fail to hydrate.
+            No preventDefault: href always navigates to public /api/auth/github-start.
+          */}
+          <a
+            href={githubStartHref}
+            data-testid="login-github"
+            className={styles.githubCta}
+          >
+            <GitHubMark className={styles.githubIcon} />
+            Continuer avec GitHub
+          </a>
+
+          <p className={styles.note}>
+            L&apos;accès est réservé aux comptes autorisés.
+          </p>
+          <p className={styles.sessionHint}>
+            Votre session vous ramène à votre espace de travail.
+          </p>
+        </main>
+      </div>
     </div>
   );
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
index ad57ac05..709199f3 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
@@ -1,149 +1,147 @@
 .page {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) 404px;
+  min-height: calc(100vh - 96px);
+  margin: -8px -8px 0;
+}
+
+.creationColumn {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
-  max-width: 720px;
+  min-width: 0;
+  border-right: 1px solid var(--pm6-border-soft);
 }

 .hero {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
-  padding: var(--pm6-space-5);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
+  gap: 8px;
+  padding: 26px 30px 16px;
 }

 .heroEyebrow {
   margin: 0;
-  font-size: 0.82rem;
-  font-weight: 600;
-  color: var(--pm6-forest);
+  font-size: 0.78rem;
+  color: var(--pm6-muted);
 }

 .heroTitle {
   margin: 0;
-  font-size: 1.8rem;
+  font-size: 1.7rem;
   font-weight: 650;
-  letter-spacing: -0.01em;
+  letter-spacing: -0.02em;
   color: var(--pm6-ink);
 }

 .heroSubtitle {
   margin: 0;
   font-size: 0.92rem;
-  line-height: 1.6;
+  line-height: 1.5;
   color: var(--pm6-muted-strong);
+  max-width: 62ch;
 }

-.card {
+.thread {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  gap: 16px;
+  flex: 1;
+  min-height: 180px;
+  max-height: none;
+  overflow: auto;
+  padding: 8px 30px 16px;
 }

-.field {
+.bubbleUser,
+.bubbleNora {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
+  gap: 4px;
+  max-width: 92%;
 }

-.label {
-  font-size: 0.86rem;
-  font-weight: 600;
-  color: var(--pm6-ink);
+.bubbleUser {
+  align-self: stretch;
 }

-.optional {
-  font-weight: 400;
+.bubbleNora {
+  align-self: stretch;
+}
+
+.bubbleLabel {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
   color: var(--pm6-muted);
 }

-.input,
-.textarea {
-  width: 100%;
-  border-radius: var(--pm6-radius-sm);
-  border: 1px solid var(--pm6-border);
-  background: var(--pm6-surface);
-  color: var(--pm6-ink);
-  padding: 11px var(--pm6-space-3);
+.bubbleText {
+  margin: 0;
   font-size: 0.94rem;
   line-height: 1.55;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
 }

-.textarea {
-  resize: vertical;
-}
-
-.input::placeholder,
-.textarea::placeholder {
-  color: var(--pm6-muted);
+.composer {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+  padding: 15px 24px 20px;
+  border-top: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface);
 }

-.help {
-  margin: 0;
-  font-size: 0.8rem;
+.textarea {
+  width: 100%;
+  min-height: 72px;
+  border-radius: 12px;
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  color: var(--pm6-ink);
+  padding: 12px 14px;
+  font-size: 0.94rem;
   line-height: 1.5;
-  color: var(--pm6-muted);
-}
-
-.fieldError {
-  margin: 0;
-  font-size: 0.82rem;
-  font-weight: 600;
-  color: var(--pm6-danger);
+  resize: vertical;
 }

-.submitError {
-  margin: 0;
-  border-radius: var(--pm6-radius-sm);
-  border: 1px solid color-mix(in srgb, var(--pm6-danger) 32%, transparent);
-  background: var(--pm6-danger-tint);
-  padding: var(--pm6-space-3);
-  font-size: 0.87rem;
-  line-height: 1.55;
-  color: var(--pm6-danger);
+.textarea:focus-visible,
+.primaryButton:focus-visible,
+.quietButton:focus-visible,
+.textButton:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
 }

 .actions {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
-  gap: var(--pm6-space-3);
+  gap: 10px;
 }

 .primaryButton,
-.primaryLink,
 .quietButton {
   display: inline-flex;
   align-items: center;
-  border-radius: var(--pm6-radius-pill);
-  padding: 11px 20px;
-  font-size: 0.9rem;
+  justify-content: center;
+  border-radius: 10px;
+  padding: 9px 16px;
+  min-height: 38px;
+  font-size: 0.88rem;
   font-weight: 600;
   cursor: pointer;
   text-decoration: none;
 }

-.primaryButton,
-.primaryLink {
+.primaryButton {
   background: var(--pm6-forest);
   border: 1px solid var(--pm6-forest);
   color: var(--pm6-forest-ink);
 }

-.primaryButton:hover:not(:disabled),
-.primaryLink:hover {
-  background: var(--pm6-forest-hover);
-}
-
 .primaryButton:disabled {
   opacity: 0.55;
   cursor: not-allowed;
@@ -155,19 +153,59 @@
   color: var(--pm6-ink-soft);
 }

-.status {
-  font-size: 0.82rem;
+.textButton {
+  background: none;
+  border: 0;
+  padding: 0;
+  min-height: 32px;
+  font: inherit;
+  font-size: 0.8rem;
+  font-weight: 600;
+  color: var(--pm6-ink-soft);
+  text-decoration: underline;
+  cursor: pointer;
+}
+
+.help {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted);
+}
+
+.preview {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  padding: 22px;
+  background: var(--pm6-canvas-raised, var(--pm6-surface-sunken));
+  border-left: 1px solid var(--pm6-border-soft);
+}
+
+.previewEyebrow {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
   color: var(--pm6-muted);
 }

-.summary {
+.previewTitle {
+  margin: 0;
+  font-size: 1.15rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.previewList {
   margin: 0;
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-3);
+  gap: 14px;
 }

-.summary dt {
+.previewList dt {
   font-size: 0.7rem;
   font-weight: 700;
   letter-spacing: 0.07em;
@@ -175,46 +213,111 @@
   color: var(--pm6-muted);
 }

-.summary dd {
-  margin: 2px 0 0;
+.previewList dd {
+  margin: 4px 0 0;
   font-size: 0.9rem;
-  line-height: 1.55;
+  line-height: 1.45;
   color: var(--pm6-ink-soft);
   overflow-wrap: anywhere;
 }

-.details {
-  border-top: 1px solid var(--pm6-border-soft);
-  padding-top: var(--pm6-space-3);
-  font-size: 0.85rem;
+.previewHint,
+.previewHintReady {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.45;
+}
+
+.previewHint {
   color: var(--pm6-muted-strong);
 }

-.details > summary {
-  cursor: pointer;
-  font-size: 0.8rem;
+.previewHintReady {
+  color: var(--pm6-ok);
   font-weight: 600;
-  color: var(--pm6-muted);
 }

-.details > * + * {
-  margin-top: var(--pm6-space-3);
+.correctRow {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 12px;
 }

-.code {
+.submitError {
   margin: 0;
-  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
-  font-size: 0.78rem;
-  color: var(--pm6-muted-strong);
-  overflow-wrap: anywhere;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--pm6-danger) 32%, transparent);
+  background: var(--pm6-danger-tint);
+  padding: 10px 12px;
+  font-size: 0.86rem;
+  color: var(--pm6-danger);
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
 }

-@media (max-width: 767px) {
-  .card {
-    padding: var(--pm6-space-4);
+@media (max-width: 1024px) {
+  .page {
+    grid-template-columns: 1fr;
+    min-height: auto;
+    margin: 0;
+  }
+
+  .creationColumn {
+    border-right: 0;
+  }
+
+  .page {
+    display: flex;
+    flex-direction: column;
+  }
+
+  .hero {
+    order: 1;
+    padding: 14px 16px 8px;
+  }
+
+  .composer {
+    order: 2;
+    border-top: 0;
+    border-bottom: 1px solid var(--pm6-border-soft);
+    padding: 12px 16px;
+    position: sticky;
+    bottom: auto;
+    top: 0;
+    z-index: 2;
+  }
+
+  .thread {
+    order: 3;
+    min-height: 120px;
+    max-height: 36vh;
+    padding: 12px 16px;
+  }
+
+  .preview {
+    order: 4;
+    border-left: 0;
+    border-top: 1px solid var(--pm6-border-soft);
+    padding: 16px;
+  }
+
+  .primaryButton,
+  .quietButton {
+    width: 100%;
   }

-  .heroTitle {
-    font-size: 1.5rem;
+  .actions {
+    flex-direction: column;
+    align-items: stretch;
   }
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index a9e7eb9c..a37025a1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -1,77 +1,109 @@
 "use client";

-import { useEffect, useRef, useState, type FormEvent } from "react";
+import { useEffect, useId, useRef, useState, type FormEvent } from "react";
 import Link from "next/link";
+import { useRouter } from "next/navigation";
 import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
+import {
+  absorbUserTurn,
+  collectPhaseOf,
+  composerPlaceholder,
+  emptyDraft,
+  isMinimumSufficient,
+  nextNoraPrompt,
+  openingNoraTurn,
+  reopenField,
+  type ChatTurn,
+  type CollectField,
+  type CollectPhase,
+  type PreProjectDraft,
+} from "./newProjectConversation";
 import styles from "./NewProjectIntentionPage.module.css";

 type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
 type CreateSuccess = Extract<CreateResult, { ok: true }>;

-type FieldErrors = {
-  name?: string;
-  intention?: string;
-};
-
 function createIdempotencyKey(): string {
   const uuid = globalThis.crypto?.randomUUID?.();
   return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
 }

+function turnId(prefix: string): string {
+  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
+}
+
 /**
- * PROVISIONAL intention sheet — W4-BR aligns labels to UXR-01 (Nom / Intention /
- * contexte optionnel / Créer + Annuler). Behavior Create/Resume unchanged.
+ * P5-S06 CP01 — explicit-phase conversational New Project.
+ * Durable create only via createProjectRuntimeAction. No D1, no regex NLP.
  */
 export function NewProjectIntentionPage() {
-  const [name, setName] = useState("");
-  const [intention, setIntention] = useState("");
-  const [precisions, setPrecisions] = useState("");
+  const router = useRouter();
+  const fieldId = useId();
+  const [draft, setDraft] = useState<PreProjectDraft>(() => emptyDraft());
+  const [turns, setTurns] = useState<ChatTurn[]>(() => [openingNoraTurn()]);
+  const [composer, setComposer] = useState("");
   const [idempotencyKey, setIdempotencyKey] = useState("");
-  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
   const [submitError, setSubmitError] = useState<string | null>(null);
   const [pending, setPending] = useState(false);
   const [created, setCreated] = useState<CreateSuccess | null>(null);
+  const threadRef = useRef<HTMLDivElement>(null);

-  const nameRef = useRef<HTMLInputElement>(null);
-  const intentionRef = useRef<HTMLTextAreaElement>(null);
+  const phase: CollectPhase = collectPhaseOf(draft);
+  const ready = isMinimumSufficient(draft);

   useEffect(() => {
     setIdempotencyKey(createIdempotencyKey());
   }, []);

-  async function onSubmit(event: FormEvent<HTMLFormElement>) {
-    event.preventDefault();
-    if (pending) return;
+  useEffect(() => {
+    const el = threadRef.current;
+    if (!el) return;
+    el.scrollTop = el.scrollHeight;
+  }, [turns, draft]);

+  function onSend(event?: FormEvent) {
+    event?.preventDefault();
+    const text = composer.trim();
+    if (!text || pending) return;
+    const asked = phase;
+    const nextDraft = absorbUserTurn(draft, text, asked);
+    const userTurn: ChatTurn = { id: turnId("user"), role: "user", text };
+    const noraTurn: ChatTurn = {
+      id: turnId("nora"),
+      role: "nora",
+      text: nextNoraPrompt(collectPhaseOf(nextDraft)),
+    };
+    setDraft(nextDraft);
+    setTurns((current) => [...current, userTurn, noraTurn]);
+    setComposer("");
     setSubmitError(null);
-    const errors: FieldErrors = {};
-    if (!name.trim()) {
-      errors.name = "Donnez un nom au projet.";
-    } else if (name.trim().length > 200) {
-      errors.name = "Le nom ne peut pas dépasser 200 caractères.";
-    }
-    if (!intention.trim()) {
-      errors.intention = "Décrivez l’intention du projet.";
-    }
-    setFieldErrors(errors);
-    if (errors.name) {
-      nameRef.current?.focus();
-      return;
-    }
-    if (errors.intention) {
-      intentionRef.current?.focus();
-      return;
-    }
+  }
+
+  function onReopen(field: CollectField) {
+    const nextDraft = reopenField(draft, field);
+    setDraft(nextDraft);
+    setTurns((current) => [
+      ...current,
+      {
+        id: turnId("nora"),
+        role: "nora",
+        text: nextNoraPrompt(collectPhaseOf(nextDraft)),
+      },
+    ]);
+  }

+  async function onCreate() {
+    if (pending || !ready) return;
+    setSubmitError(null);
     const stableKey = idempotencyKey || createIdempotencyKey();
     if (!idempotencyKey) setIdempotencyKey(stableKey);
     setPending(true);
     try {
-      const trimmedIntention = intention.trim();
+      const intention = draft.intention.trim();
       const result = await createProjectRuntimeAction({
-        name: name.trim(),
-        objective: trimmedIntention,
-        context: precisions.trim() || trimmedIntention,
+        name: draft.name.trim(),
+        objective: intention,
+        context: draft.context.trim() || intention,
         criticality: "STANDARD",
         constraints: [],
         idempotencyKey: stableKey,
@@ -79,250 +111,231 @@ export function NewProjectIntentionPage() {

       if (result.ok) {
         setCreated(result);
+        router.push(
+          `/studio/projects/${encodeURIComponent(result.projectId)}`,
+        );
         return;
       }

-      if (result.error.code === "INPUT_INVALID") {
-        if (result.error.field === "name") {
-          setFieldErrors({ name: result.error.message });
-          nameRef.current?.focus();
-          return;
-        }
-        setFieldErrors({ intention: result.error.message });
-        intentionRef.current?.focus();
-        return;
-      }
       if (result.error.code === "DOCTRINE_UNRESOLVED") {
         setSubmitError(
           "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
         );
         return;
       }
+      if (result.error.code === "INPUT_INVALID") {
+        setSubmitError(
+          result.error.message ||
+            "Les informations fournies ne permettent pas de créer le projet.",
+        );
+        return;
+      }
       setSubmitError(
         result.error.retryable
-          ? "La création n’a pas abouti. Vous pouvez réessayer : votre saisie est conservée."
-          : "La création n’a pas abouti. Vérifiez votre saisie avant de réessayer.",
+          ? "La création n’a pas abouti. Vous pouvez réessayer : la conversation est conservée."
+          : "La création n’a pas abouti. Précisez encore l’intention ou le nom avant de réessayer.",
       );
     } catch {
       setSubmitError(
-        "Le service local n’a pas répondu. Votre saisie est conservée ; vous pouvez réessayer.",
+        "Le service local n’a pas répondu. La conversation est conservée ; vous pouvez réessayer.",
       );
     } finally {
       setPending(false);
     }
   }

-  function reset() {
-    setName("");
-    setIntention("");
-    setPrecisions("");
-    setFieldErrors({});
-    setSubmitError(null);
-    setCreated(null);
-    setIdempotencyKey(createIdempotencyKey());
-  }
-
   if (created) {
     return (
-      <div className={styles.page}>
+      <div className={styles.page} data-testid="new-project-created">
         <header className={styles.hero}>
           <h1 className={styles.heroTitle}>Projet créé</h1>
           <p className={styles.heroSubtitle}>
-            Nora peut maintenant ouvrir la conversation de qualification. La
-            décision vous appartient toujours.
+            Ouverture du workspace durable. Nora reprend à partir du projet
+            enregistré — pas du brouillon local.
           </p>
         </header>
-
-        <section className={styles.card}>
-          <dl className={styles.summary}>
-            <div>
-              <dt>Nom</dt>
-              <dd>{created.project.name}</dd>
-            </div>
-            <div>
-              <dt>Intention</dt>
-              <dd>{created.project.objective}</dd>
-            </div>
-            <div>
-              <dt>État du projet</dt>
-              <dd>Enregistré · v{created.livingState.version}</dd>
-            </div>
-          </dl>
-          <div className={styles.actions}>
-            <Link
-              href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
-              className={styles.primaryLink}
-              data-testid="open-project-workspace"
-            >
-              Ouvrir le projet
-            </Link>
-            <button type="button" className={styles.quietButton} onClick={reset}>
-              Créer un autre projet
-            </button>
-          </div>
-          <details className={styles.details}>
-            <summary>Détails techniques</summary>
-            <dl className={styles.summary}>
-              <div>
-                <dt>Identifiant projet</dt>
-                <dd className={styles.code}>{created.projectId}</dd>
-              </div>
-              <div>
-                <dt>Criticité perçue</dt>
-                <dd>{created.project.criticality}</dd>
-              </div>
-              <div>
-                <dt>Préparation</dt>
-                <dd>{created.readiness.status}</dd>
-              </div>
-              <div>
-                <dt>Clé de tentative réutilisée</dt>
-                <dd>{String(created.reusedFromIdempotencyKey)}</dd>
-              </div>
-            </dl>
-          </details>
-        </section>
+        <Link
+          href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
+          className={styles.primaryButton}
+          data-testid="open-project-workspace"
+        >
+          Ouvrir le projet
+        </Link>
       </div>
     );
   }

   return (
-    <div className={styles.page}>
-      <header className={styles.hero}>
-        <p className={styles.heroEyebrow}>SFIA Studio</p>
-        <h1 className={styles.heroTitle}>Nouveau projet</h1>
-        <p className={styles.heroSubtitle}>
-          Nommez le projet et décrivez votre intention. Nora qualifiera ensuite —
-          vous gardez la décision.
-        </p>
-      </header>
+    <div
+      className={styles.page}
+      data-testid="create-project-form"
+      data-surface="new-project-chat"
+      data-create-surface="conversational"
+      data-collect-phase={phase}
+    >
+      <div className={styles.creationColumn}>
+        <header className={styles.hero}>
+          <p className={styles.heroEyebrow}>Projets / Nouveau projet</p>
+          <h1 className={styles.heroTitle}>Créer un projet</h1>
+          <p className={styles.heroSubtitle}>
+            Nora pose seulement ce qui est nécessaire. Aucun projet durable
+            n&apos;est créé tant que vous n&apos;avez pas choisi « Créer le
+            projet ».
+          </p>
+        </header>

-      <form
-        className={styles.card}
-        onSubmit={onSubmit}
-        noValidate
-        aria-busy={pending}
-        data-testid="create-project-form"
-      >
-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-name">
-            Nom du projet
-          </label>
-          <input
-            ref={nameRef}
-            id="project-name"
-            name="name"
-            className={styles.input}
-            maxLength={200}
-            value={name}
-            aria-invalid={Boolean(fieldErrors.name)}
-            aria-describedby={fieldErrors.name ? "project-name-error" : undefined}
-            onChange={(event) => {
-              setName(event.target.value);
-              setFieldErrors((current) => ({ ...current, name: undefined }));
-            }}
-          />
-          {fieldErrors.name ? (
-            <p className={styles.fieldError} id="project-name-error">
-              {fieldErrors.name}
-            </p>
-          ) : null}
+        <div
+          className={styles.thread}
+          ref={threadRef}
+          data-testid="new-project-thread"
+          aria-live="polite"
+        >
+          {turns.map((turn) => (
+            <div
+              key={turn.id}
+              className={
+                turn.role === "user" ? styles.bubbleUser : styles.bubbleNora
+              }
+              data-role={turn.role}
+            >
+              <p className={styles.bubbleLabel}>
+                {turn.role === "user" ? "Vous" : "Nora"}
+              </p>
+              <p className={styles.bubbleText}>{turn.text}</p>
+            </div>
+          ))}
         </div>

-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-objective">
-            Intention du projet
+        <form
+          className={styles.composer}
+          onSubmit={onSend}
+          data-testid="new-project-composer"
+        >
+          <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
+            Réponse à Nora
           </label>
           <textarea
-            ref={intentionRef}
-            id="project-objective"
-            name="objective"
+            id={`${fieldId}-composer`}
             className={styles.textarea}
-            rows={4}
-            value={intention}
-            placeholder="Décrivez ce que vous voulez accomplir…"
-            aria-invalid={Boolean(fieldErrors.intention)}
-            aria-describedby={
-              fieldErrors.intention
-                ? "project-objective-error project-objective-help"
-                : "project-objective-help"
-            }
-            onChange={(event) => {
-              setIntention(event.target.value);
-              setFieldErrors((current) => ({ ...current, intention: undefined }));
+            rows={3}
+            value={composer}
+            disabled={pending}
+            placeholder={composerPlaceholder(phase)}
+            data-testid="new-project-input"
+            onChange={(event) => setComposer(event.target.value)}
+            onKeyDown={(event) => {
+              if (event.key === "Enter" && !event.shiftKey) {
+                event.preventDefault();
+                onSend();
+              }
             }}
           />
-          <p className={styles.help} id="project-objective-help">
-            Sans donnée personnelle ni secret. C&apos;est le point de départ de
-            la qualification, pas un engagement d&apos;exécution.
+          <div className={styles.actions}>
+            <button
+              type="submit"
+              className={styles.quietButton}
+              disabled={pending || composer.trim().length === 0}
+              data-testid="new-project-send"
+            >
+              Envoyer
+            </button>
+            <Link
+              href="/studio"
+              className={styles.quietButton}
+              data-testid="create-project-cancel"
+            >
+              Annuler
+            </Link>
+          </div>
+          <p className={styles.help}>
+            Les réponses sont enregistrées telles que vous les écrivez, dans le
+            champ demandé. Aucun projet n&apos;est créé avant le CTA.
           </p>
-          {fieldErrors.intention ? (
-            <p className={styles.fieldError} id="project-objective-error">
-              {fieldErrors.intention}
-            </p>
-          ) : null}
-        </div>
+        </form>
+      </div>

-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-context">
-            Contexte optionnel
-          </label>
-          <textarea
-            id="project-context"
-            name="context"
-            className={styles.textarea}
-            rows={3}
-            value={precisions}
-            placeholder="Ajoutez uniquement le contexte utile au projet."
-            aria-describedby="project-context-help"
-            onChange={(event) => setPrecisions(event.target.value)}
-          />
-          <p className={styles.help} id="project-context-help">
-            Sans contexte, votre intention suffit pour créer le projet. Vous
-            pourrez préciser la suite avec Nora ensuite.
+      <aside
+        className={styles.preview}
+        data-testid="new-project-preview"
+        aria-labelledby={`${fieldId}-preview`}
+      >
+        <p className={styles.previewEyebrow}>Projet en préparation</p>
+        <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
+          Aperçu du projet
+        </h2>
+        <p className={styles.previewHint}>
+          Restitution factuelle de vos réponses — pas une interprétation.
+        </p>
+        <dl className={styles.previewList}>
+          <div>
+            <dt>Nom</dt>
+            <dd data-testid="preview-name">
+              {draft.name.trim() || "Pas encore précisé"}
+            </dd>
+          </div>
+          <div>
+            <dt>Intention</dt>
+            <dd data-testid="preview-intention">
+              {draft.intention.trim() || "Pas encore précisée"}
+            </dd>
+          </div>
+          <div>
+            <dt>Contexte</dt>
+            <dd data-testid="preview-context">
+              {draft.context.trim() || "Optionnel"}
+            </dd>
+          </div>
+        </dl>
+        {ready ? (
+          <div className={styles.correctRow}>
+            <button
+              type="button"
+              className={styles.textButton}
+              data-testid="reopen-intention"
+              onClick={() => onReopen("intention")}
+            >
+              Corriger l&apos;intention
+            </button>
+            <button
+              type="button"
+              className={styles.textButton}
+              data-testid="reopen-name"
+              onClick={() => onReopen("name")}
+            >
+              Corriger le nom
+            </button>
+          </div>
+        ) : null}
+        {!ready ? (
+          <p className={styles.previewHint}>
+            Intention et nom sont requis avant création.
           </p>
-        </div>
-
+        ) : (
+          <p className={styles.previewHintReady}>
+            Prêt à créer — aucun Cycle n&apos;est démarré automatiquement.
+          </p>
+        )}
+        <button
+          type="button"
+          className={styles.primaryButton}
+          disabled={pending || !ready}
+          data-testid="create-project-submit"
+          onClick={() => void onCreate()}
+        >
+          {pending ? "Création…" : "Créer le projet"}
+        </button>
         <div aria-live="assertive" aria-atomic="true">
           {submitError ? (
-            <p className={styles.submitError} role="alert" data-testid="submit-error">
+            <p
+              className={styles.submitError}
+              role="alert"
+              data-testid="submit-error"
+            >
               {submitError}
             </p>
           ) : null}
         </div>
-
-        <div className={styles.actions}>
-          <button
-            type="submit"
-            className={styles.primaryButton}
-            disabled={pending || !idempotencyKey}
-            data-testid="create-project-submit"
-          >
-            {pending ? "Création…" : "Créer le projet"}
-          </button>
-          <Link
-            href="/studio"
-            className={styles.quietButton}
-            data-testid="create-project-cancel"
-          >
-            Annuler
-          </Link>
-          <span className={styles.status} role="status" aria-live="polite">
-            {pending ? "Création en cours…" : ""}
-          </span>
-        </div>
-
-        <details className={styles.details}>
-          <summary>Détails techniques</summary>
-          <p className={styles.help}>
-            Clé de tentative stable pendant les réessais, renouvelée après « Créer
-            un autre projet ».
-          </p>
-          <p className={styles.code} data-testid="idempotency-key">
-            {idempotencyKey || "Génération locale…"}
-          </p>
-        </details>
-      </form>
+      </aside>
     </div>
   );
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
index 62812b9a..c027640d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
@@ -1,7 +1,7 @@
 .page {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
+  gap: 20px;
 }

 .hero {
@@ -9,79 +9,166 @@
   flex-wrap: wrap;
   align-items: flex-end;
   justify-content: space-between;
-  gap: var(--pm6-space-4);
-  padding: var(--pm6-space-5);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
+  gap: 16px;
+  min-height: 74px;
 }

 .heroText {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
+  gap: 6px;
   min-width: 0;
 }

-.heroEyebrow {
-  margin: 0;
-  font-size: 0.82rem;
-  font-weight: 600;
-  color: var(--pm6-forest);
-}
-
 .heroTitle {
   margin: 0;
-  font-size: 1.85rem;
+  font-size: 1.7rem;
   font-weight: 650;
-  letter-spacing: -0.015em;
+  letter-spacing: -0.02em;
   color: var(--pm6-ink);
 }

 .heroSubtitle {
   margin: 0;
-  font-size: 0.92rem;
+  font-size: 0.9rem;
   color: var(--pm6-muted-strong);
 }

+.heroActions {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 10px;
+}
+
 .heroCta,
 .emptyCta,
-.cardPrimary,
-.cardSecondary {
+.quietCta,
+.orientationCta,
+.recentOpen {
   display: inline-flex;
   align-items: center;
   justify-content: center;
-  border-radius: var(--pm6-radius-md);
-  padding: 11px 18px;
-  font-size: 0.9rem;
+  border-radius: 10px;
+  padding: 8px 14px;
+  min-height: 36px;
+  font-size: 0.86rem;
   font-weight: 600;
   text-decoration: none;
-  transition: background 120ms ease, border-color 120ms ease;
 }

 .heroCta,
-.emptyCta,
-.cardPrimary {
+.emptyCta {
   background: var(--pm6-forest);
   border: 1px solid var(--pm6-forest);
   color: var(--pm6-forest-ink);
 }

-.heroCta:hover,
-.emptyCta:hover,
-.cardPrimary:hover {
-  background: var(--pm6-forest-hover);
+.quietCta,
+.orientationCta,
+.recentOpen {
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-strong);
+  color: var(--pm6-ink);
+}
+
+.heroCta:focus-visible,
+.emptyCta:focus-visible,
+.quietCta:focus-visible,
+.orientationCta:focus-visible,
+.search:focus-visible,
+.rowTitle:focus-visible,
+.recentTitle:focus-visible,
+.recentOpen:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
 }

-.cardSecondary {
-  background: var(--pm6-surface);
+.orientation {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: 16px;
+  min-height: 92px;
+  padding: 15px 17px;
+  background: var(--pm6-cream);
+  border: 1px solid var(--pm6-cream-border);
+  border-radius: 12px;
+}
+
+.orientationText {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  min-width: 0;
+  flex: 1;
+}
+
+.orientationBody {
+  margin: 0;
+  font-size: 0.88rem;
+  line-height: 1.4;
+  color: var(--pm6-ink-soft);
+  max-width: 68ch;
+}
+
+.section,
+.tableSection {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.sectionHead,
+.tableHead {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: flex-end;
+  justify-content: space-between;
+  gap: 12px;
+}
+
+.sectionTitle {
+  margin: 0;
+  font-size: 1rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.sectionHint {
+  margin: 0;
+  font-size: 0.78rem;
+  color: var(--pm6-muted);
+}
+
+.searchWrap {
+  flex: 1 1 210px;
+  max-width: 280px;
+}
+
+.search {
+  width: 100%;
+  min-height: 34px;
   border: 1px solid var(--pm6-border-strong);
+  border-radius: 10px;
+  padding: 7px 11px;
+  font: inherit;
+  font-size: 0.86rem;
   color: var(--pm6-ink);
+  background: var(--pm6-surface);
 }

-.cardSecondary:hover {
-  background: var(--pm6-surface-sunken);
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
 }

 .hint {
@@ -93,11 +180,11 @@
 .error {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
-  border-radius: var(--pm6-radius-md);
+  gap: 8px;
+  border-radius: 12px;
   border: 1px solid color-mix(in srgb, var(--pm6-danger) 32%, transparent);
   background: var(--pm6-danger-tint);
-  padding: var(--pm6-space-4);
+  padding: 16px;
 }

 .errorTitle {
@@ -111,17 +198,16 @@
   display: flex;
   flex-direction: column;
   align-items: flex-start;
-  gap: var(--pm6-space-3);
+  gap: 12px;
   border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
+  border-radius: 16px;
   background: var(--pm6-surface);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-7) var(--pm6-space-5);
+  padding: 28px 20px;
 }

 .emptyTitle {
   margin: 0;
-  font-size: 1.25rem;
+  font-size: 1.2rem;
   font-weight: 650;
   color: var(--pm6-ink);
 }
@@ -129,56 +215,137 @@
 .emptyBody {
   margin: 0;
   font-size: 0.9rem;
-  line-height: 1.6;
+  line-height: 1.55;
   color: var(--pm6-muted-strong);
   max-width: 46ch;
 }

-.cardList {
+.recentGrid {
   list-style: none;
   margin: 0;
   padding: 0;
+  display: grid;
+  grid-template-columns: repeat(2, minmax(0, 1fr));
+  gap: 16px;
+}
+
+.recentCard {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-3);
+  gap: 10px;
+  min-height: 112px;
+  padding: 14px 16px;
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: 12px;
 }

-.card {
+.recentTop {
   display: flex;
-  flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-between;
-  gap: var(--pm6-space-4);
-  padding: var(--pm6-space-4) var(--pm6-space-5);
-  background: var(--pm6-surface);
+  gap: 8px;
+}
+
+.recentTitle {
+  font-size: 0.95rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+  text-decoration: none;
+  overflow-wrap: anywhere;
+}
+
+.recentOpen {
+  align-self: flex-start;
+  min-height: 32px;
+  padding: 4px 12px;
+  font-size: 0.8rem;
+}
+
+.cardMeta {
+  margin: 0;
+  font-size: 0.76rem;
+  color: var(--pm6-muted);
+}
+
+.tableSection {
   border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
+  border-radius: 12px;
+  background: var(--pm6-surface);
+  padding: 12px 0 8px;
 }

-.cardMain {
-  display: flex;
-  flex-direction: column;
-  align-items: flex-start;
-  gap: var(--pm6-space-2);
-  flex: 1;
-  min-width: 0;
+.tableHead {
+  padding: 0 16px 8px;
+}
+
+.tableHeaderRow {
+  display: grid;
+  grid-template-columns: minmax(0, 1.6fr) 140px 160px;
+  gap: 8px;
+  padding: 8px 16px;
+  border-top: 1px solid var(--pm6-border-soft);
+  border-bottom: 1px solid var(--pm6-border-soft);
+  font-size: 0.72rem;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--pm6-muted);
 }

-.cardTitle {
+.rowList {
+  list-style: none;
   margin: 0;
-  font-size: 1.05rem;
+  padding: 0;
+}
+
+.row {
+  display: grid;
+  grid-template-columns: minmax(0, 1.6fr) 140px 160px;
+  gap: 8px;
+  align-items: center;
+  min-height: 50px;
+  padding: 8px 16px;
+  border-bottom: 1px solid var(--pm6-border-soft);
+}
+
+.row:last-child {
+  border-bottom: 0;
+}
+
+.rowProject {
+  min-width: 0;
+}
+
+.rowTitle {
+  font-size: 0.92rem;
   font-weight: 600;
   color: var(--pm6-ink);
+  text-decoration: none;
   overflow-wrap: anywhere;
 }

+.rowDescription {
+  margin: 2px 0 0;
+  font-size: 0.78rem;
+  color: var(--pm6-muted-strong);
+  overflow-wrap: anywhere;
+}
+
+.rowMeta {
+  margin: 0;
+  font-size: 0.8rem;
+  color: var(--pm6-muted);
+}
+
 .badge {
   display: inline-flex;
   align-items: center;
-  padding: 3px 10px;
-  border-radius: var(--pm6-radius-pill);
-  font-size: 0.72rem;
+  justify-content: center;
+  width: fit-content;
+  padding: 3px 9px;
+  border-radius: 999px;
+  font-size: 0.7rem;
   font-weight: 600;
   border: 1px solid transparent;
 }
@@ -191,67 +358,64 @@

 .badge[data-tone="active"] {
   background: var(--pm6-forest-tint);
-  border-color: var(--pm6-forest-tint);
   color: var(--pm6-forest);
 }

 .badge[data-tone="waiting"] {
   background: var(--pm6-warn-tint);
-  border-color: var(--pm6-cream-border);
   color: var(--pm6-warn);
 }

-.cardDescription {
-  margin: 0;
-  font-size: 0.88rem;
-  line-height: 1.5;
-  color: var(--pm6-muted-strong);
-  overflow-wrap: anywhere;
-}
-
-.cardMeta {
-  margin: 0;
-  font-size: 0.78rem;
-  color: var(--pm6-muted);
-}
-
-.cardActions {
-  display: flex;
-  flex-wrap: wrap;
-  gap: var(--pm6-space-2);
-  flex: 0 0 auto;
-}
-
 @media (max-width: 1024px) {
-  .heroTitle {
-    font-size: 1.6rem;
+  .recentGrid {
+    grid-template-columns: 1fr;
   }
 }

 @media (max-width: 767px) {
-  .hero {
-    padding: var(--pm6-space-4);
-  }
-
   .heroTitle {
     font-size: 1.45rem;
   }

-  .heroCta,
-  .emptyCta {
+  .heroActions {
     width: 100%;
+    justify-content: flex-end;
   }

-  .card {
-    padding: var(--pm6-space-4);
+  .searchWrap {
+    max-width: none;
+    flex-basis: 100%;
   }

-  .cardActions {
-    width: 100%;
+  .tableHeaderRow {
+    display: none;
+  }
+
+  .row {
+    grid-template-columns: 1fr auto;
+    grid-template-areas: "title badge" "desc desc" "meta meta";
+    min-height: 112px;
+    align-items: start;
+    padding: 13px;
+  }
+
+  .rowProject {
+    grid-area: title;
+  }
+
+  .badge {
+    grid-area: badge;
+  }
+
+  .rowDescription {
+    grid-area: desc;
+  }
+
+  .rowMeta {
+    grid-area: meta;
   }

-  .cardPrimary,
-  .cardSecondary {
-    flex: 1 1 auto;
+  .recentCard {
+    min-height: 112px;
   }
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
index 54bf9c47..2277f8ab 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import Link from "next/link";
 import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import styles from "./ProjectsPage.module.css";
@@ -16,10 +16,12 @@ type ListState =

 type Badge = { label: string; tone: "neutral" | "active" | "waiting" };

-function formatRelativeFr(iso: string | undefined): string {
-  if (!iso) return "Projet disponible";
+const RECENT_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;
+
+function formatRelativeFr(iso: string | undefined): string | null {
+  if (!iso) return null;
   const ts = Date.parse(iso);
-  if (Number.isNaN(ts)) return "Projet disponible";
+  if (Number.isNaN(ts)) return null;
   const deltaMs = Date.now() - ts;
   const minutes = Math.floor(deltaMs / 60_000);
   if (minutes < 1) return "À l’instant";
@@ -29,7 +31,7 @@ function formatRelativeFr(iso: string | undefined): string {
     const d = new Date(ts);
     const hh = String(d.getHours()).padStart(2, "0");
     const mm = String(d.getMinutes()).padStart(2, "0");
-    return hours < 18 ? `Aujourd’hui, ${hh}h${mm}` : `Hier, ${hh}h${mm}`;
+    return `Aujourd’hui, ${hh}h${mm}`;
   }
   const days = Math.floor(hours / 24);
   if (days === 1) return "Hier";
@@ -44,7 +46,7 @@ function badgeFor(status: string): Badge {
     case "active":
       return { label: "Actif", tone: "active" };
     case "paused":
-      return { label: "En attente de décision", tone: "waiting" };
+      return { label: "En attente", tone: "waiting" };
     case "closed":
       return { label: "Clos", tone: "neutral" };
     case "archived":
@@ -54,9 +56,61 @@ function badgeFor(status: string): Badge {
   }
 }

-/** F1 — Projects entry point. Nora recommends, the Pilote decides. */
+function matchesQuery(project: ProjectRow, query: string): boolean {
+  const q = query.trim().toLowerCase();
+  if (!q) return true;
+  const hay = [
+    project.title,
+    project.name,
+    project.objective,
+    project.context,
+    project.status,
+  ]
+    .filter(Boolean)
+    .join(" ")
+    .toLowerCase();
+  return hay.includes(q);
+}
+
+/** Recent activity only — not a next-action / « À reprendre » claim. */
+function isRecentlyUpdated(project: ProjectRow): boolean {
+  if (project.status === "closed" || project.status === "archived") return false;
+  if (!project.updatedAt) return false;
+  const ts = Date.parse(project.updatedAt);
+  if (Number.isNaN(ts)) return false;
+  return Date.now() - ts <= RECENT_WINDOW_MS;
+}
+
+function ProjectRowView({ project }: { project: ProjectRow }) {
+  const badge = badgeFor(project.status);
+  const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
+  const activity = formatRelativeFr(project.updatedAt);
+  const description =
+    project.objective?.trim() || project.context?.trim() || null;
+  return (
+    <li className={styles.row} data-testid="studio-projects-card">
+      <div className={styles.rowProject}>
+        <Link href={href} className={styles.rowTitle} data-testid="studio-projects-open">
+          {project.title}
+        </Link>
+        {description ? (
+          <p className={styles.rowDescription}>{description}</p>
+        ) : null}
+      </div>
+      <span className={styles.badge} data-tone={badge.tone}>
+        {badge.label}
+      </span>
+      <p className={styles.rowMeta} data-testid="studio-projects-activity">
+        {activity ?? "—"}
+      </p>
+    </li>
+  );
+}
+
+/** F1 — Projects entry point. */
 export function ProjectsPage() {
   const [state, setState] = useState<ListState>({ status: "loading" });
+  const [query, setQuery] = useState("");

   useEffect(() => {
     let cancelled = false;
@@ -82,6 +136,23 @@ export function ProjectsPage() {
     };
   }, []);

+  const filtered = useMemo(() => {
+    if (state.status !== "ready") return [];
+    return state.projects.filter((p) => matchesQuery(p, query));
+  }, [state, query]);
+
+  const recentProjects = useMemo(() => {
+    if (state.status !== "ready") return [];
+    return [...state.projects]
+      .filter(isRecentlyUpdated)
+      .sort((a, b) => {
+        const ta = Date.parse(a.updatedAt ?? "") || 0;
+        const tb = Date.parse(b.updatedAt ?? "") || 0;
+        return tb - ta;
+      })
+      .slice(0, 4);
+  }, [state]);
+
   const count =
     state.status === "ready"
       ? state.projects.length
@@ -89,33 +160,63 @@ export function ProjectsPage() {
         ? 0
         : null;

-  const subtitle =
-    count === null
-      ? "Entrée / reprise — Nora recommande, vous décidez"
-      : count === 0
-        ? "Aucun projet · créez pour démarrer"
-        : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`;
-
-  const showHeroCreate = state.status !== "empty";
-
   return (
     <div className={styles.page} data-testid="studio-projects-home">
       <header className={styles.hero}>
         <div className={styles.heroText}>
-          <p className={styles.heroEyebrow}>SFIA Studio</p>
-          <h1 className={styles.heroTitle}>Projets — entrée / reprise</h1>
-          <p className={styles.heroSubtitle}>{subtitle}</p>
+          <h1 className={styles.heroTitle}>Projets</h1>
+          <p className={styles.heroSubtitle}>
+            {count === null
+              ? "Ouvrir un projet ou en créer un nouveau."
+              : count === 0
+                ? "Aucun projet pour le moment."
+                : `${count} projet${count > 1 ? "s" : ""}`}
+          </p>
         </div>
-        {showHeroCreate ? (
+        {state.status !== "empty" ? (
+          <div className={styles.heroActions}>
+            <Link
+              href="/studio/projects/new"
+              className={styles.quietCta}
+              data-testid="studio-projects-ask-nora"
+            >
+              Nouveau avec Nora
+            </Link>
+            <Link
+              href="/studio/projects/new"
+              className={styles.heroCta}
+              data-testid="studio-projects-create"
+            >
+              + Nouveau projet
+            </Link>
+          </div>
+        ) : null}
+      </header>
+
+      {state.status === "ready" ? (
+        <section
+          className={styles.orientation}
+          data-testid="studio-projects-orientation"
+          aria-label="Démarrer un nouveau projet avec Nora"
+        >
+          <div className={styles.orientationText}>
+            <h2 className={styles.sectionTitle}>
+              Démarrer un nouveau projet avec Nora
+            </h2>
+            <p className={styles.orientationBody}>
+              Nora clarifie l&apos;intention et le nom avant toute création
+              durable. Ce bloc n&apos;oriente pas entre vos projets existants.
+            </p>
+          </div>
           <Link
             href="/studio/projects/new"
-            className={styles.heroCta}
-            data-testid="studio-projects-create"
+            className={styles.orientationCta}
+            data-testid="studio-projects-start-new"
           >
-            Créer un projet
+            Commencer
           </Link>
-        ) : null}
-      </header>
+        </section>
+      ) : null}

       {state.status === "loading" ? (
         <p className={styles.hint} data-testid="studio-projects-loading">
@@ -124,7 +225,11 @@ export function ProjectsPage() {
       ) : null}

       {state.status === "error" ? (
-        <div className={styles.error} role="alert" data-testid="studio-projects-error">
+        <div
+          className={styles.error}
+          role="alert"
+          data-testid="studio-projects-error"
+        >
           <p className={styles.errorTitle}>{state.message}</p>
           <p className={styles.hint}>
             Réessayez dans un instant. Aucune donnée n&apos;est inventée.
@@ -134,58 +239,112 @@ export function ProjectsPage() {

       {state.status === "empty" ? (
         <div className={styles.empty} data-testid="studio-projects-empty">
-          <p className={styles.emptyTitle}>Aucun projet.</p>
+          <p className={styles.emptyTitle}>Aucun projet pour commencer</p>
           <p className={styles.emptyBody}>
-            Créez un projet pour commencer avec Nora. Vous pourrez ensuite
-            préciser votre besoin et décider de la suite.
+            Créez votre premier projet. Nora demandera l&apos;intention puis le
+            nom avant toute matérialisation durable.
           </p>
           <Link
             href="/studio/projects/new"
             className={styles.emptyCta}
             data-testid="studio-projects-create"
           >
-            Créer un projet
+            + Nouveau projet
           </Link>
         </div>
       ) : null}

-      {state.status === "ready" ? (
-        <ul className={styles.cardList} data-testid="studio-projects-list">
-          {state.projects.map((project) => {
-            const badge = badgeFor(project.status);
-            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
-            return (
-              <li key={project.projectId} className={styles.card}>
-                <div className={styles.cardMain}>
-                  <h2 className={styles.cardTitle}>{project.title}</h2>
-                  <span className={styles.badge} data-tone={badge.tone}>
-                    {badge.label}
-                  </span>
-                  <p className={styles.cardDescription}>
-                    {project.objective?.trim() ||
-                      project.context?.trim() ||
-                      "Ouvrez le projet pour poursuivre avec Nora."}
-                  </p>
-                  <p className={styles.cardMeta}>
-                    {formatRelativeFr(project.updatedAt)}
-                  </p>
-                </div>
-                <div className={styles.cardActions}>
+      {state.status === "ready" && recentProjects.length > 0 ? (
+        <section
+          className={styles.section}
+          data-testid="studio-projects-recent"
+          aria-labelledby="projects-recent-heading"
+        >
+          <div className={styles.sectionHead}>
+            <h2 id="projects-recent-heading" className={styles.sectionTitle}>
+              Projets récents
+            </h2>
+            <p className={styles.sectionHint}>
+              Dernière activité connue — pas une prochaine action.
+            </p>
+          </div>
+          <ul className={styles.recentGrid}>
+            {recentProjects.map((project) => (
+              <li key={`recent-${project.projectId}`} className={styles.recentCard}>
+                <div className={styles.recentTop}>
                   <Link
-                    href={href}
-                    className={styles.cardPrimary}
-                    data-testid="studio-projects-open"
+                    href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
+                    className={styles.recentTitle}
                   >
-                    Reprendre
-                  </Link>
-                  <Link href={href} className={styles.cardSecondary}>
-                    Voir l&apos;état
+                    {project.title}
                   </Link>
+                  <span className={styles.badge} data-tone={badgeFor(project.status).tone}>
+                    {badgeFor(project.status).label}
+                  </span>
                 </div>
+                <p className={styles.cardMeta} data-testid="studio-projects-activity">
+                  {formatRelativeFr(project.updatedAt) ?? "Activité inconnue"}
+                </p>
+                <Link
+                  href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
+                  className={styles.recentOpen}
+                >
+                  Ouvrir
+                </Link>
               </li>
-            );
-          })}
-        </ul>
+            ))}
+          </ul>
+        </section>
+      ) : null}
+
+      {state.status === "ready" ? (
+        <section
+          className={styles.tableSection}
+          data-testid="studio-projects-all"
+          aria-labelledby="projects-all-heading"
+        >
+          <div className={styles.tableHead}>
+            <div>
+              <h2 id="projects-all-heading" className={styles.sectionTitle}>
+                Tous les projets
+              </h2>
+              <p className={styles.sectionHint}>
+                {count} projet{count === 1 ? "" : "s"}
+              </p>
+            </div>
+            <div className={styles.searchWrap}>
+              <label className={styles.srOnly} htmlFor="projects-local-search">
+                Rechercher dans vos projets
+              </label>
+              <input
+                id="projects-local-search"
+                className={styles.search}
+                type="search"
+                value={query}
+                onChange={(event) => setQuery(event.target.value)}
+                placeholder="Rechercher…"
+                data-testid="studio-projects-search"
+                autoComplete="off"
+              />
+            </div>
+          </div>
+          <div className={styles.tableHeaderRow} aria-hidden="true">
+            <span>Projet</span>
+            <span>État</span>
+            <span>Dernière activité</span>
+          </div>
+          {filtered.length === 0 ? (
+            <p className={styles.hint} data-testid="studio-projects-search-empty">
+              Aucun projet ne correspond à « {query.trim()} ».
+            </p>
+          ) : (
+            <ul className={styles.rowList} data-testid="studio-projects-list">
+              {filtered.map((project) => (
+                <ProjectRowView key={project.projectId} project={project} />
+              ))}
+            </ul>
+          )}
+        </section>
       ) : null}
     </div>
   );

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index a423ec48..36cd07fa 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -26,6 +26,7 @@ import {
   presentSynthesisVerdictLabel,
   synthesisSummaryExcerpt,
 } from "./synthesisPresentation";
+import { projectNoraActivity } from "./noraActivityProjection";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -242,6 +243,7 @@ export function ConversationSurface({
     executeKind !== "deterministic_test" &&
     executionSemanticKind(durableSemanticFacts) !== "cursor_real" &&
     executionSemanticKind(durableSemanticFacts) !== "durable_read";
+  const noraActivity = projectNoraActivity({ blocked, busy, uiState });

   return (
     <section
@@ -1477,15 +1479,15 @@ export function ConversationSurface({
             className={styles.composerStatus}
             aria-live="polite"
             data-testid="project-assistant-status"
+            data-nora-phase={noraActivity.phase}
+            data-nora-stop={noraActivity.stopAvailable ? "available" : "unavailable"}
           >
-            {busy
-              ? uiState === "SOURCE_LOOKUP"
-                ? "Consultation des sources en cours…"
-                : "Nora rédige sa réponse…"
-              : blocked
-                ? "Assistant indisponible — configuration manquante."
-                : "Prêt"}
+            {noraActivity.label}
           </span>
+          {/*
+            P3 composer ↑ / ■ / ↑ — STOPPED requires a real Abort/cancel seam.
+            CURRENT Product path has no cancelable in-flight turn; do not fake ■.
+          */}
           <button
             type="submit"
             className={styles.sendButton}
@@ -1496,16 +1498,22 @@ export function ConversationSurface({
               blocked
                 ? "Assistant indisponible"
                 : busy
-                  ? "Envoi en cours"
+                  ? "Nora travaille — arrêt non disponible sur ce chemin"
                   : draft.trim().length === 0
                     ? "Saisissez un message"
                     : "Envoyer le message"
             }
             aria-label={
-              canSend ? "Envoyer le message à Nora" : "Envoi indisponible"
+              canSend
+                ? "Envoyer le message à Nora"
+                : busy
+                  ? "Nora travaille"
+                  : "Envoi indisponible"
             }
           >
-            <span className={styles.sendLabelFull}>Envoyer</span>
+            <span className={styles.sendLabelFull}>
+              {busy ? "Nora travaille…" : "Envoyer"}
+            </span>
             <span className={styles.sendLabelCompact} aria-hidden="true">
               ↑
             </span>

```

### MODIFIED `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 3b89bbcf..32b39416 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,9 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CORRECTION PASS 01 — LOCAL CANDIDATE / STOP ARCHITECTURE DELTA ON NORA STOP** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP01** · Morris P5-S06 CP01 GATE = **AUTHORIZED / CONSUMED** · prior S06 DELIVERY CONSUMED · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · A New Project **explicit phases / no regex NLP** · continuity **Project+LPS rebound via workspace projectId** · B Projects **récents ≠ À reprendre** · Orientation **honest new-project only** · C Activity **mapping proven** · STOP **ABSENT / no fake STOPPED** · D visual **structure improved / not Visual PASS** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Critical Re-Review CP01** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — LOCAL CANDIDATE *(true then; superseded by P5-S06 CP01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Standard** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 DELIVERY GATE = **AUTHORIZED / CONSUMED** (2026-10-06) · slicing P5 restant **S06/S07/S08** = **ADOPTED** · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · P5-S05 = **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment = **CLOSED ON MAIN** · R3 = **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** · Axes S06 : A Projects **ADAPT** · B Nouveau projet chat-first **ADAPT** (ephemeral client · createProjectRuntimeAction · D1 NOT nominal) · C Nora Activity **PARTIAL** (labels honnêtes · **STOP/■ absent** — no fake STOPPED) · D Auth GitHub visual **ADAPT** (backend KEEP) · E responsive/a11y touched surfaces · ZERO REAL · full npm test **5278 PASS / 139 skipped** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Review de S06** → gate Morris distinct si PASS · S07 = **NOT STARTED** · **≠** INTEGRATED · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 INTEGRATED via PR #560 then by P5-S06 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 01 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP02 tip after residual B1 F1 model semantics + B2 R3-19 observation)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP01** · Morris P5-S05 CP01 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 gate remains **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · A1 CKC = **N_A** · A2 accounting = **BOUNDED** · A3 effort = **SELECTED→DISPATCH CONFIG PROVEN** · campaign `p5-s05-r3-cp01-1791245552722` · productFP `35f31263…` · harnessFP `fd10646b…` · Critical Review residual = **CORRECTION REQUIRED** (B1 F1 usage.model ≠ provider-returned; B2 R3-19 stale observation) · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 R3 + F2 ROUTING ALIGNMENT — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP01 tip after Critical Review A1/A2/A3 correction)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Morris P5-S05 DELIVERY + REAL/R3 GATE = **AUTHORIZED / CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** (PR **#559** POST-S04 TRUTH-SYNC merge · CI **#686** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · F2 routing alignment = **EXIT PROOF PASS — LOCAL CANDIDATE** · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE** · campaign `p5-s05-r3-1791242959473` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` · F2 `gpt-6-luna/low` → actual match · F1 `gpt-6-luna/high` → actual match · journal tools `cycle_journal_search` + `get_entry` + `get_sources` · HD=0 · R1/R2 PASS historical · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED** · Critical Review = **CORRECTION REQUIRED** (A1/A2/A3) · **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC *(true then; superseded by P5-S05 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |

```

### MODIFIED `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`
```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 5f23603b..c3266054 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,40 +5,46 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S04** (integrated) + **P5-S05** (local candidate) |
-| **Pass** | **P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** |
+| **Slice** | **P5-S01**…**P5-S05** (integrated) + **P5-S06** (local candidate) |
+| **Pass** | **P5-S06 CORRECTION PASS 01 — LOCAL CANDIDATE** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `79a0e48a69c8dd634a8cecf972199bea8a4daeec` (PR **#559** POST-S04 TRUTH-SYNC · CI **#686** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S05** | `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` (local · **NOT committed**) |
+| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` (local · **NOT committed**) |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
+| **P5 COMPLETE** | **NO** |
+| **P6 READY** | **NO** |
 | **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
 | **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
-| **P5-S05** | **LOCAL CANDIDATE PASS AFTER CP02** — F2 routing EXIT PROOF · R3 PASS AT TESTED SCOPE |
-| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE — LOCAL CANDIDATE (CP02)** |
-| **ZERO REAL** | **NO for S05 R3** (bounded REAL OpenAI) · S04 ZERO REAL preserved historically |
-| **READY FOR REAL** | **R3 CP02 executed under Morris S05 + CP01 + CP02 gates** |
+| **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
+| **P5-S06** | **CP01 LOCAL CANDIDATE** — A/B PASS · C Activity proven / STOP **BLOCKED** · D visual PARTIEL · **≠ COMPLETE** |
+| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** |
+| **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
+| **P5 slicing restant** | **S06 / S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** |
+| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
+| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S05)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
-| **Next** | **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS |
-| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP01** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP02** | **AUTHORIZED / CONSUMED** |
+| **Git (S06)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
+| **Next** | **ChatGPT Critical Re-Review of P5-S06 CP01** · Git integration **NOT AUTHORIZED** · S07 **NOT STARTED** |
+| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
+| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
+| **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
+| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S04 **intégrés**. P5-S05 CP02 = **LOCAL CANDIDATE PASS** (B1 F1 selected→dispatch · B2 R3-19 scan observation · CKC N_A · accounting borné). **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S05 **intégrés**. P5-S06 CP01 = **LOCAL CANDIDATE** (A/B semantic PASS · Activity proven · STOP architecture-blocked · visual PARTIEL). **≠ S06 COMPLETE** · **≠ INTEGRATED** · **≠ P5 COMPLETE**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -972,4 +978,74 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01/S02/S03/S04 INTEGRATED / POST-MERGE VERIFIED · S05 CP02 LOCAL CANDIDATE PASS · R3 PASS AT TESTED SCOPE LOCAL · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+---
+
+## 39. P5-S06 — Pilot Experience Completion — LOCAL CANDIDATE (truth-sync)
+
+> **Qualification.** Enregistrement factuel de la Delivery locale P5-S06 sous GO Morris DELIVERY consommé le 2026-10-06. **≠ INTEGRATED** · **≠ P5 COMPLETE** · project Git **NOT AUTHORIZED**.
+
+### 39.1 Git / gates
+
+| Item | Valeur |
+| --- | --- |
+| Base / HEAD | `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` = `origin/main` |
+| Branche | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` |
+| P5-S05 | **INTEGRATED / POST-MERGE VERIFIED** — PR **#560** · CI Studio **#688** SUCCESS |
+| F2 routing | **CLOSED ON MAIN** |
+| R3 | **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
+| Morris S06 DELIVERY | **CONSUMED** |
+| Slicing restant | **S06 / S07 / S08** ADOPTED · S07/S08 **NOT STARTED** |
+| ZERO REAL (S06) | **YES** |
+| runtime v3 | **NON ADOPTED** |
+| P5 COMPLETE / P6 READY | **NO** / **NO** |
+
+### 39.2 Axes livrés (honnêteté)
+
+| Axe | Statut | Notes |
+| --- | --- | --- |
+| A Projects | **ADAPT** | Recherche locale · À reprendre depuis `updatedAt` ≤14j · Orientation → `/studio/projects/new` · empty state · pas d’attention inventée |
+| B Nouveau projet | **ADAPT** | Conversation pré-Project éphémère client · `createProjectRuntimeAction` au CTA · D1 Intake **NOT** nominal · pas de store / pas d’auto-Cycle |
+| C Nora Activity / STOP | **PARTIAL** | Phases START/ACTIVITY/COMPLETE projetées depuis `uiState` réel · **■ STOP absent** (pas de seam Abort Product) — **pas de faux STOPPED** |
+| D Auth GitHub visual | **ADAPT** | Split narrative+card · « Continuer avec GitHub » · mark SVG · backend Better/Auth **KEEP** |
+| E Responsive / a11y | **ADAPT** (surfaces touchées) | Labels · focus · targets · reduced-motion conservé côté conversation |
+
+### 39.3 Preuves
+
+| Porte | Résultat |
+| --- | --- |
+| `p5.s06.pilotExperience.d0.test.tsx` | **6 PASS** |
+| Auth unit tests ciblés | **PASS** |
+| typecheck / lint / build | **PASS** |
+| full `npm test` | **5278 PASS / 139 skipped** |
+| Visual runtime | Auth + Projects `/studio` + New Project capturés sous `.tmp-sfia-review/p5-s06-visual/runtime/` vs Figma refs sous `…/figma/` — **pas de claim Visual PASS global** |
+
+### 39.4 Réserves
+
+| Classe | Réserve |
+| --- | --- |
+| **BLOCKING** (avant S06 COMPLETE) | P3 STOP/■ non satisfait sans architecture cancellation — décision Morris : accepter PARTIAL ou autoriser delta |
+| **NON-BLOCKING** | Écarts Class B Projects/New Project vs frames Figma EXPLORATORY (table Attention, quick-replies, layout 3-col) · STREAMING non projeté (non observable) · D1 HARVEST only |
+
+### 39.5 Next
+
+**ChatGPT Review de S06** → gate Morris distinct. **S07** reste **NOT STARTED**.
+
+---
+
+## 40. P5-S06 CP01 — Correction Pass 01 (truth-sync)
+
+> **Qualification.** Delivery S06 Critical Review = CORRECTION REQUIRED. CP01 = local candidate after semantic/visual correction. STOP Nora remains architecture-blocked. **≠ S06 COMPLETE** · **≠ INTEGRATED**.
+
+| Axe | Statut CP01 |
+| --- | --- |
+| A New Project | **PASS** — explicit phases INTENTION/NAME/OPTIONAL_CONTEXT · no NAME_HINT · factual preview · CTA unique |
+| A2 Continuity | **PASS min-sufficient** — createProjectRuntimeAction writes Project+LPS · router `/studio/projects/:id` · workspace `getProject` + `useProductConversation(projectId)` · no transcript store |
+| B Projects | **PASS** — « Projets récents » from updatedAt · no « À reprendre » as next-action · local search KEEP |
+| B2 Orientation | **PASS** — wording = start new project only · href `/studio/projects/new` |
+| C Activity | **PASS proven** — `projectNoraActivity` mapping + tests |
+| C2 STOP | **BLOCKED** — no Product conversation Abort seam · no fake ■/STOPPED |
+| D Visual | **PARTIEL** — structure closer to 63:39 / 67:39 / 130:3 / mobile 190:* · composer mobile first · no Attention invented · **≠ Visual PASS** |
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S05 INTEGRATED · S06 CP01 LOCAL CANDIDATE · STOP architecture delta remaining · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*

```

## 25. P5/Roadmap
See diffs above. Tip CP01 added. Historical S06 Delivery tip SUPERSEDED AS TIP. Section 40 CP01 recorded.

## 26. Targeted tests
`npx vitest run __tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx`
**10 PASS**

## 27. Full tests
`npm test` → Test Files 475 passed | 19 skipped · **Tests 5282 passed | 139 skipped** · failed 0 · ~74s

## 28. typecheck / lint / build
`npm run typecheck` PASS · `npm run lint` PASS · `npm run build` PASS

## 29. git diff --check
PASS (re-run at pack time)

## 30. Visual hashes CP01
| path | bytes | sha256 |
| --- | --- | --- |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/auth-desktop-130-3.png` | 45665 | `22657f8b80e1b60fb2edfafbc90abc7042238d7e98937d07c6b6ee7e17532cc4` |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/auth-mobile-190-551.png` | 13112 | `b8a534cfcaa9b8d0f445c6c987e590c2eab7d6fc513e63aa4d4824d3d0838627` |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/new-project-desktop-67-39.png` | 148342 | `85138e214c38cc026e166e5bc77d222a4a0e89f53df0151e951d68f6d428a78e` |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/new-project-mobile-190-284.png` | 30336 | `8cd0279c620cc485a76c3bd5424f66f7fbc382ccbecf06af2df1d69b4f4dea3c` |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/projects-desktop-63-39.png` | 105461 | `e00814d68e3a78eba909b8ad77d63a1e57e67300a1082d1116540daa9c40d375` |
| `.tmp-sfia-review/p5-s06-visual/cp01/figma/projects-mobile-190-253.png` | 24023 | `e22753393234cff1c56249a8edd13f843032015e2e8d6423dda11ad818a22731` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/auth-desktop-1440x1024.png` | 66369 | `2b4b343c187308f693528ba90cb6cab5ee2f43049daf4d494aa7ab7ddb220181` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/auth-mobile-390x844.png` | 50283 | `ccba366710d9220fd1853905ec18dea5e8834b2ef8051fb01ec0a4684f656948` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/new-project-desktop-1440x1024.png` | 118542 | `54d36c5b70767cf65414e8631c4c9334adea6f1db34cc6f1b1616c84403c5529` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/new-project-mobile-390x844.png` | 57332 | `0e4300dae2fdbc81d5c0ba22c87bb43fda70130e722f7eb73eedec8820be1cf7` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/projects-desktop-1440x1024.png` | 136552 | `e8e61b2c6c716e26fc23d2867e6e998c78f521096b63f986a1ae6c5113122854` |
| `.tmp-sfia-review/p5-s06-visual/cp01/runtime/projects-mobile-390x844.png` | 53452 | `488e89a39b97411f3f0a3b351ff4aa17382b64c12c53b770608aa9bd3fda2ae0` |

## 31. Figma/runtime comparison
| Surface | SHELL | GEOMETRY | CONTENT | Verdict |
| --- | --- | --- | --- | --- |
| Projects 63:39 | rail KEEP | table+recent closer | no Attention/next-action | PARTIEL |
| Projects 190:253 | topbar KEEP | denser cards | recent honest | PARTIEL |
| New Project 67:39 | 820/404 split | composer in column | factual preview | PARTIEL |
| New Project 190:284 | composer first viewport | PASS chat-first | same semantics | PARTIEL/improved |
| Auth 130:3 | split | card 460 min-height 420 | GitHub CTA | PARTIEL |
| Auth 190:551 | stack | card centered | GitHub-only | PARTIEL |

No global Visual PASS. No intentional fake facts.

## 32. Visual before/after
S06 Delivery: stacked huge cards, form-like chat, Auth card too small. CP01: table, split create, Auth 460px card.

## 33. a11y / responsive
Labels, focus-visible, 36–38px targets, reduced-motion untouched on conversation, mobile composer order.

## 34–35. Fake/Real · ZERO REAL
Deterministic only. OPS1 fake for captures. No OpenAI.

## 36. No parallel architecture
No new store/Nora/router/D1 nominal/persistence/auth authority.

## 37. Debt/exit
| Debt | Owner | Target | Exit |
| --- | --- | --- | --- |
| P5-S06-DEBT-NORA-STOP | runtime | Morris gate | Abort architecture GO or accept P3 STOP gap |
| Visual Class B remainder | frontend | S06 CP/S08 | geometry polish without invented facts |

## 38. Reserves
BLOCKING for S06 COMPLETE: Nora STOP architecture.
NON-BLOCKING: Attention column absent; Figma resume focus box absent; STREAMING N/A; quick-replies not added (would look like recommendations); Auth green-dot not added (not a real session metric).

## 39. Morris decisions
1. Accept CP01 LOCAL CANDIDATE with STOP blocked **or** authorize cancellation architecture
2. Visual PARTIEL acceptable?
3. Git Integration later — not this pass
4. S07 remains NOT STARTED

## 40. Anti-claims
≠ INTEGRATED · ≠ S06 COMPLETE · ≠ P5 COMPLETE · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ Visual PASS · ≠ REAL proven · ≠ fake STOPPED

## 41. Project Git effects
NO add/commit/push/PR/merge. Staged empty.

## 42. Handoff publication evidence
Filled after publisher.

## 43. Unique readiness
**STOP — S06 NORA STOP ARCHITECTURE DELTA REQUIRED** (A/B/Activity/visual-in-scope otherwise CP01-corrected)

## 44. Verdict
**STOP — S06 NORA STOP ARCHITECTURE DELTA REQUIRED**

A/B PASS. C Activity PASS. C2 STOP BLOCKED. D PARTIEL. Tests 5282 PASS. ZERO REAL. Pack FULL. Project git untouched.
