# SFIA Studio V2-A3 — Project Workspace UI

## Cycle record

| Field | Value |
|---|---|
| Date / time / zone | 2026-07-30 11:20 CEST (+0200) |
| Cycle | 8 — Delivery / implementation UI |
| Profile | Standard |
| Control depth | Standard reinforced |
| Typology | EVOL |
| Project branch | `delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui` |
| Base | `origin/main` at `d0e498ec1636122246e0de0103c50fb3ccb9fdd7` |
| Local status | Implemented locally; not pushed; not PR'd |

## Gate consumed

`GO CYCLE V2-A3 PROJECT WORKSPACE UI`

This gate authorizes a bounded Project Workspace UI on top of the integrated
V2-A2 Create Project foundation and the unchanged V2-A1 runtime / V1 core.
It does not authorize a project-branch push, pull request, merge, Figma write,
product delivery, or cutover.

## Morris decisions reused

- D-VS-01: retain and adapt `StudioShell`; use `/studio/*`.
- D-VS-02: OA business state remains in memory.
- D-VS-03: no fixtures, harness, or browser storage in the happy path.
- D-VS-04: Project/T-A0/T-A1 precede recommendation, decision, and dashboard.
- D-V2-01: server-only application runtime exposed by Server Actions.
- D-V2-02: process-local singleton.
- D-V2-04: `/studio/projects/*` namespace.
- D-V2-05: runtime disclosures are mandatory.

Not selected: IAM, product persistence, real agent execution, delivery,
cutover, dashboard, recommendation engine. HARD remains OPEN and T-A6 remains
INCOMPLETE.

## Delivered architecture

```text
/studio/projects/new
  CreateProjectForm success → link to /studio/projects/[id]

/studio/projects/[id]
  StudioShell (flush; tabs hidden; historical primary action hidden)
    RuntimeDisclosureBanner (Server Component, surface=workspace)
      → vertical-slice-runtime/disclosures
    ProjectWorkspaceClient (Client Component)
      → getProjectRuntimeAction (Server Action)
        → RuntimeApplicationService V2-A1
          → LocalProjectFacade V1
            → getProjectOverview (Project + Living Project State)
      ← ProjectWorkspaceView serializable local projection
```

The client loader uses the same Server Action entrypoint as Create Project so the
process-local V2-A1 singleton remains reachable without changing V1/V2-A1.

No API route, `fetch`, browser storage, UI business cache, D1 action, fixture,
harness, agent, recommendation, decision, or dashboard is involved.

## Route and components

- route: `/studio/projects/[id]`;
- `ProjectWorkspaceClient.tsx`: client loader via `getProjectRuntimeAction`;
- `ProjectWorkspaceView.tsx`: bounded Project / doctrine / LPS / runtime truth
  projection, plus process-local missing state;
- `project-workspace.module.css`: bounded styles using existing `--sfia-*`
  tokens;
- `RuntimeDisclosureBanner`: optional `surface="workspace"` copy;
- Create Project success: CTA `Ouvrir l’espace de travail`;
- `StudioShellRoute` extended with `/studio/projects/${string}` without adding
  a dedicated rail entry (workspace remains a context view).

## Validation

- UI workspace tests;
- V2-A2 regression (create → workspace link);
- runtime import boundaries including `/studio/projects/[id]`;
- typecheck / lint / build;
- `git diff --check`.

## Anti-claims

This lot does not claim PRODUCT READY, RUN READY, HARD CLOSED, T-A6 COMPLETE,
authenticated Morris identity, durable product persistence, live agent
execution, delivery authorization, or cutover authorization.

## Remaining debt and next gate

- no dedicated V2-A3 Figma frame;
- responsive 390 px outside this lot;
- process-local volatility remains disclosed;
- non-blocking `StudioShellRoute` → `StudioRoute` cast remains.

Candidate next decision (not automatic): PR readiness for V2-A3.
