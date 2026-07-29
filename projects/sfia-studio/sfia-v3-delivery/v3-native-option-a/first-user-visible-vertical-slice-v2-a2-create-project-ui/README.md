# SFIA Studio V2-A2 — Create Project UI

## Cycle record

| Field | Value |
|---|---|
| Date / time / zone | 2026-07-29 23:45 CEST (+0200) |
| Cycle | 8 — Delivery / implementation |
| Profile | Standard |
| Control depth | Standard reinforced |
| Typology | EVOL |
| Project branch | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| Base | `origin/main` at `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| Local status | Implemented locally; not integrated into `main` |

## Gate consumed

`GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE V2-A2 — CREATE PROJECT UI
— REUSE STUDIOSHELL AND V2-A1 RUNTIME — NO IAM PRODUCT PERSISTENCE REAL
AGENT DELIVERY OR CUTOVER`

This gate authorizes bounded local implementation and coherent local commits.
It does not authorize a project-branch push, pull request, merge, Figma write,
product delivery, or cutover.

## Morris decisions consumed

- D-VS-01: retain and adapt `StudioShell`; use `/studio/*`.
- D-VS-02: OA business state remains in memory; local audit is optional.
- D-VS-03: no fixtures, harness, or browser storage in the happy path.
- D-VS-04: Project/T-A0/T-A1 precede recommendation, decision, and dashboard.
- D-V2-01: server-only application runtime exposed by Server Actions.
- D-V2-02: process-local singleton.
- D-V2-03: noop audit by default.
- D-V2-04: `/studio/projects/*` namespace.
- D-V2-05: runtime disclosures are mandatory.

During implementation, Morris explicitly authorized updates to the two
historical route-count assertions in `increment-a.test.tsx` and
`increment-b.test.tsx`. The fixture-only route set remains four; the shared
rail now exposes five entries including V2-A2.

Not selected: D-VS-05/Figma write, IAM, product persistence, real agent
execution, delivery, and cutover. HARD remains OPEN and T-A6 remains
INCOMPLETE.

## Delivered architecture

```text
/studio/projects/new
  StudioShell (flush; tabs hidden; historical primary action hidden)
    RuntimeDisclosureBanner (Server Component)
      → vertical-slice-runtime/disclosures
    CreateProjectForm (Client Component)
      → createProjectRuntimeAction (Server Action)
        → RuntimeApplicationService V2-A1
          → LocalProjectFacade V1
            → T-A0 Project + T-A1 initial LPS
      ← serializable real-local projection rendered inline
```

No API route, `fetch`, browser storage, UI business cache, D1 action, fixture,
harness, agent, recommendation, decision, or dashboard is involved.

## Route and components

- route: `/studio/projects/new`;
- `CreateProjectForm.tsx`: client form, client UX validation, stable
  idempotency key during retry, runtime error mapping, inline success;
- `RuntimeDisclosureBanner.tsx`: server-rendered V2-A1 disclosures;
- `create-project.module.css`: bounded styles using existing `--sfia-*` tokens;
- `StudioShell` / `Topbar`: backward-compatible `showTabs` and
  `primaryAction` options;
- navigation rail: explicit `Créer un projet Studio` entry.

The legacy `StudioRoute` union remains fixture-only because
`vertical-slice/mapping.ts` consumes it exhaustively. `StudioShellRoute`
extends that union with `/studio/projects/new` without modifying the protected
fixture mapping.

## Form contract

- required: name (200 maximum), objective, context;
- perceived criticality: LOW/Faible, STANDARD/Standard, HIGH/Élevée;
- the UI states that perceived criticality is qualification input, not a
  Morris decision;
- constraints: one per line, empty lines removed, 500 maximum each;
- optional short reference: 64 maximum;
- client-generated, non-editable idempotency key, stable across retries and
  renewed only by the explicit post-success reset;
- no email, organization, personal data, secrets, infrastructure data, IAM
  identity, or authority token fields.

Client validation supports usability. The V2-A1 runtime and V1 core remain
authoritative. `INPUT_INVALID` is associated with the corresponding field,
including `perceivedCriticality` → `criticality`.
`DOCTRINE_UNRESOLVED` is presented as a blocking failure without leaking a
local path.

## Success projection

The same route displays:

- Project id, name, optional reference, objective, context summary,
  criticality, and constraints;
- doctrine id, version, digest, and status;
- LPS id, version, and creation date;
- `REAL_LOCAL_CORE`, `fixture=false`, idempotency reuse, and audit status;
- readiness and disclosures;
- an explicit `Créer un autre projet` reset action.

There is no redirect to D1 and no `/studio/projects/[id]` route in this lot.

## Runtime disclosures and anti-claims

Before and after submit, the UI states:

- `LOCAL_PROCESS`;
- `NOT_GUARANTEED`;
- real agent execution `DISABLED`;
- readiness `NOT_READY`;
- IAM and product persistence `NOT_SELECTED`;
- delivery and cutover `NOT_AUTHORIZED`;
- local state is volatile and restart/hot reload can lose it.

This lot does not claim HARD CLOSED, T-A6 COMPLETE, RUN READY, PRODUCT READY,
an authenticated Morris identity, a connected agent, durable persistence,
delivery authorization, or cutover authorization.

## Validation

The component tests cover fields, constraints parsing, criticality, exact
Server Action DTO, retry idempotency, reset renewal, pending state, runtime
error mapping, real-result presentation, shell compatibility, ARIA wiring,
and an automated axe serious/critical scan.

The import-boundary test verifies:

- runtime remains free of React/UI/browser storage/agents;
- V1 core remains independent of runtime;
- the V2-A2 client imports only `runtime/actions`;
- the server disclosure component imports only `runtime/disclosures`;
- V2-A2 imports no internal runtime module, core, D1, fixture, harness, OPS1,
  agent, storage, or network path.

Validation results are recorded in the FULL review pack
`.tmp-sfia-review/chatgpt-review.md`.

## Runtime evidence

Untracked evidence, all at an exact 1440 × 1024 CSS viewport:

- `.tmp-sfia-review/evidence/v2-a2/01-initial.png`;
- `.tmp-sfia-review/evidence/v2-a2/02-validation-errors.png`;
- `.tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png`.

The real success contained `REAL_LOCAL_CORE`, `fixture=false`, Project and LPS
ids, resolved doctrine metadata, `auditStatus=DISABLED`, and honest readiness.

## Visual source and limits

The Git visual contract and existing tokens are authoritative for this lot.
A read-only Figma metadata check covered page `0:1` (`UX-B — P0`) and frame
`19:2` (`P0-00C — Nouvelle demande / Product premium`, 1440 × 1024). There is
no validated V2-A2 frame, no Figma write, no pixel-perfect promise, and no
`FIGMA TO RUNTIME ALIGNED` conclusion.

The existing fixed-width `StudioShell` debt at 390 px remains outside this
lot. Neither `tokens.css` nor `shell.module.css` was changed.

## Protected and unchanged

- `app/lib/vertical-slice-core/**`;
- all V2-A1 runtime contracts and implementations;
- OA, D1, platform, harness, OPS1, and agent implementations;
- API surface, dependencies, lockfiles, schemas, migrations, environment
  files, CI, method, architecture, and Figma.

## Remaining debt and next gate

- consolidate global responsive behavior in a future visual lot;
- decide whether V2-A3 should add a bounded Project overview;
- decide D-VS-05 before any Figma write.

Candidate next gate, explicitly non-automatic:

`GO PR READINESS SFIA STUDIO V2-A2 CREATE PROJECT UI`

A new Morris decision is required before project push, PR creation, merge,
scope expansion, or any product-readiness claim.
