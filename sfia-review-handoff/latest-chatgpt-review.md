# Review Pack Full — SFIA Studio Control Tower Fast Track PR Readiness (D1-I1 → D1-C4)

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 22:52:08 CEST
- **Cycle :** PR readiness · Critical · DELIVERY / PR-READINESS / EVOL / QA / SECURITY / DOCUMENTATION
- **Gate consommé :** GO PR READINESS — SFIA STUDIO CONTROL TOWER FAST TRACK D1-I1 TO D1-C4
- **Gate suivant :** GO COMMIT AND PUSH — SFIA STUDIO CONTROL TOWER FAST TRACK
- **Repo :** mcleland147/sfia-workspace
- **Branche :** `delivery/sfia-studio-control-tower-fast-track`
- **HEAD :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **origin/main :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **merge-base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff D1-C4 :** `794f7abc9047a995df98f17aa972d8948b32964e` / blob `32eec8c48e261e1ae462a1094f72b02d6e94c389`
- **Baseline :** SFIA v2.6
- **Statut v3 :** V3-MODELED CANDIDATE

## 2. État Git initial

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/e2e/increment-a.spec.ts
 M projects/sfia-studio/app/e2e/increment-c.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
 M projects/sfia-studio/app/e2e/p0-smoke.spec.ts
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/d1/
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/app/ops1/
?? projects/sfia-studio/app/app/projects/
?? projects/sfia-studio/app/app/workspace/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts
?? projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts
?? projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts
?? projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts
?? projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/features/d1/
?? projects/sfia-studio/app/lib/d1/
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
?? projects/sfia-studio/sfia-v3-delivery/
?? projects/sfia-studio/sfia-v3-design/
?? projects/sfia-studio/sfia-v3-framing/
?? projects/sfia-studio/sfia-v3-modeled/

```

### Diff stat (fichiers déjà tracked/modifiés uniquement)

```
 projects/sfia-studio/README.md                     |  41 ++-
 .../app/__tests__/ops1/Ops1SessionScreen.test.tsx  |  23 ++
 .../__tests__/ops1/conversation-repository.test.ts |   2 +-
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx |  23 ++
 .../sfia-studio/app/app/nouvelle-demande/page.tsx  |  20 +-
 .../app/components/shell/UtilityRail.tsx           |  20 ++
 projects/sfia-studio/app/e2e/increment-a.spec.ts   |   8 +-
 projects/sfia-studio/app/e2e/increment-c.spec.ts   |   8 +-
 .../sfia-studio/app/e2e/ops1-i1-session.spec.ts    |   2 +-
 .../app/e2e/ops1-i2-conversation.spec.ts           |   4 +-
 .../app/e2e/ops1-i2-live-locked-capture.spec.ts    |   2 +-
 .../app/e2e/ops1-i3-action-gate.spec.ts            |   2 +-
 .../sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts  |   2 +-
 .../sfia-studio/app/e2e/ops1-i5-execution.spec.ts  |   2 +-
 .../e2e/ops1-i6-report-and-continuation.spec.ts    |   2 +-
 projects/sfia-studio/app/e2e/p0-smoke.spec.ts      |   9 +-
 .../app/features/ops1/Ops1SessionScreen.tsx        | 360 ++++++++++++++++++++-
 projects/sfia-studio/app/lib/ops1/actions.ts       | 200 +++++++++++-
 .../app/lib/ops1/conversation/fakeProvider.ts      | 123 ++++++-
 .../app/lib/ops1/conversation/openaiProvider.ts    | 124 +++++--
 .../app/lib/ops1/conversation/service.ts           | 315 +++++++++++++++++-
 .../sfia-studio/app/lib/ops1/conversation/types.ts |  51 ++-
 .../app/lib/ops1/executionOrchestrator.ts          |   9 +
 projects/sfia-studio/app/lib/ops1/types.ts         |  33 +-
 projects/sfia-studio/app/playwright.config.ts      |   3 +-
 25 files changed, 1302 insertions(+), 86 deletions(-)

```

Numstat tracked : 25 files · +1302 / −86
Untracked sous `projects/sfia-studio/` : ~287
LOCAL ONLY `.tmp-sfia-review/` : 127
INCLUDE candidats totaux : 312

HEAD = origin/main = merge-base → **pas de divergence de base**.

## 3. Décisions Morris validées

- D1-I1 fondation conservée
- D1-C1 entrée conversationnelle
- D1-C2 proposition structurée
- D1-C3 matching contextuel
- D1-C4 confirmation + mutation bornée
- Réserve : rattachement intake→Project **absent**
- UX-R04 différée
- GPT live non requis
- v3 candidate, non adoptée

## 4. Périmètre

**Attendu :** Control Tower + OPS1 associé + D1-I1→C4 + docs/tests associés.

**Réel :** conforme. Aucun package.json/lockfile modifié. Aucune migration SQL nouvelle hors schémas embed `lib/d1/db.ts` / `lib/ops1/db.ts` déjà du lot. Aucun secret.

## 5. Classification

### INCLUDE (312 fichiers)

Tous les paths sous `projects/sfia-studio/**` listés dans `.tmp-sfia-review/pr-readiness-artifacts/include-candidates.txt`.

| Path | Verdict |
|------|---------|
| `projects/sfia-studio/66-control-tower-product-framing.md` | INCLUDE |
| `projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md` | INCLUDE |
| `projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md` | INCLUDE |
| `projects/sfia-studio/69-control-tower-options-and-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md` | INCLUDE |
| `projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md` | INCLUDE |
| `projects/sfia-studio/72-control-tower-fast-track-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/73-control-tower-fast-track-delivery-report.md` | INCLUDE |
| `projects/sfia-studio/74-sfia-canonical-context-engine-report.md` | INCLUDE |
| `projects/sfia-studio/README.md` | INCLUDE |
| `projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx` | INCLUDE |
| `projects/sfia-studio/app/__tests__/d1/intake-c2.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/d1/intake-c3.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx` | INCLUDE |
| `projects/sfia-studio/app/__tests__/ops1/sfia/canonicalEngine.test.ts` | INCLUDE |
| `projects/sfia-studio/app/app/nouvelle-demande/page.tsx` | INCLUDE |
| `projects/sfia-studio/app/app/ops1/nouvelle-demande/page.tsx` | INCLUDE |
| `projects/sfia-studio/app/app/projects/[id]/page.tsx` | INCLUDE |
| `projects/sfia-studio/app/app/projects/new/page.tsx` | INCLUDE |
| `projects/sfia-studio/app/app/workspace/page.tsx` | INCLUDE |
| `projects/sfia-studio/app/components/shell/UtilityRail.tsx` | INCLUDE |
| `projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/increment-a.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/increment-c.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/p0-smoke.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts` | INCLUDE |
| `projects/sfia-studio/app/features/d1/Badges.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/ContextualRail.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/D1AppShell.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/NewProjectForm.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/ProjectCockpitView.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/WorkspaceHomeView.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/confirmation/ConfirmationPanel.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/d1-shell.module.css` | INCLUDE |
| `projects/sfia-studio/app/features/d1/intake/ContextMatchPanel.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/intake/IntakeContextRail.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/intake/IntakeView.tsx` | INCLUDE |
| `projects/sfia-studio/app/features/d1/intake/intake.module.css` | INCLUDE |
| `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/actions.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/authz.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/commands.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/actions.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/index.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/summary.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/confirmation/validate.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/actions.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/index.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/matchExistingContext.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/normalize.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/scoring.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/context/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/db.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/domain.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/errors.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/ids.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/index.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/actions.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/index.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/prompt.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/resolveProvider.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intake/validateProposal.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/intakeObservability.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/observability.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/paths.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/repository.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/d1/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/actions.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/conversation/service.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/conversation/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/reportReinjection.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/actionCompiler.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/canonicalPaths.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/contextResolver.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/cursorPromptInstantiator.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/index.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/proposalSchema.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/sessionContext.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/sourceLoader.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/sfia/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/gitLocalReadAdapter.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/githubReadAdapter.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/pathPolicy.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/redaction.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/toolRouter.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/tools/types.ts` | INCLUDE |
| `projects/sfia-studio/app/lib/ops1/types.ts` | INCLUDE |
| `projects/sfia-studio/app/playwright.config.ts` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/01-implemented-scope.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/02-route-and-legacy-transition.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/03-intake-ux-implementation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/04-manual-creation-strategy.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/05-runtime-figma-validation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/06-test-results.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/07-reserves-and-debt.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/08-d1-c1-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/09-ia-cleanup.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/01-implemented-scope.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/02-intent-understanding-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/03-request-routing-proposal-candidate.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/04-gpt-provider-and-prompt-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/05-clarification-state-machine.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/06-security-rgpd-observability.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/07-runtime-figma-validation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/08-test-results.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/09-reserves-and-debt.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/10-d1-c2-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/01-implemented-scope.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/02-context-sources-and-availability.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/03-existing-context-snapshot-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/04-deterministic-matching-engine.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/05-scoring-thresholds-and-explainability.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/06-context-match-result-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/07-c2-hardening.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/08-security-rgpd-performance.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/09-runtime-figma-validation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/10-test-results.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/11-reserves-and-debt.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/12-d1-c3-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/01-implemented-scope.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/02-confirmation-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/03-bounded-mutation-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/04-project-creation-flow.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/05-existing-project-confirmation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/06-idempotence-and-conflicts.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/07-audit-and-observability.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/08-security-rgpd-accessibility.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/09-runtime-validation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/10-test-results.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/11-reserves-and-debt.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/12-d1-c4-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/01-implemented-scope.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/02-technical-implementation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/03-data-and-audit-implementation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/04-ux-runtime-validation.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/05-test-results.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/06-known-reserves-and-debt.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/07-d1-i1-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/01-product-problem-and-rework-rationale.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/02-target-value-proposition.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/03-user-intents-and-routing-scenarios.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/04-ai-guided-intake-journey.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/05-routing-decision-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/06-request-routing-proposal-candidate.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/07-gpt-role-and-guardrails.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/08-project-cycle-resume-action-routing.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/09-method-mode-target-strategy.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/10-user-vs-technical-audit-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/11-conversational-interaction-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/12-information-architecture-update.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/13-ux-screen-contracts.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/14-visual-direction-and-design-principles.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/15-figma-frame-register.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/16-figma-runtime-gap-analysis.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/17-accessibility-and-responsive-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/18-implementation-impact-map.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/19-corrective-backlog-and-slicing.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/20-validation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-conversation-state-flow.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-intake-routing-flow.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-project-cycle-resume-model.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-routing-decision-tree.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/01-design-scope-and-decisions.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/02-target-component-architecture.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/03-application-services-and-responsibilities.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/04-api-and-command-contracts.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/05-persistence-and-transaction-design.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/06-gpt-guided-session-design.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/07-policy-and-gate-orchestration-design.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/08-user-journey-and-screen-contracts.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/09-reviewbundle-and-audit-design.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/10-security-rgpd-and-permission-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/11-observability-run-and-resilience.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/12-test-strategy-and-acceptance-criteria.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/13-delivery-slicing-and-backlog.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/14-dependency-and-technology-decision-record.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/15-d1-implementation-readiness-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-component-diagram.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-container-diagram.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-data-lifecycle.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-decision-transition.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-guided-session.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-project-creation.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/01-current-state-ux-audit.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/02-doctrine-to-information-architecture.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/03-d1-navigation-and-route-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/04-studio-shell-layout-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/05-d1-screen-inventory-and-priorities.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/06-workspace-home-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/07-new-project-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/08-project-cockpit-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/09-project-framing-and-guided-session-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/10-context-reserves-decisions-and-gates-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/11-transition-reviewbundle-and-audit-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/12-responsive-and-breakpoint-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/13-accessibility-and-interaction-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/14-design-tokens-and-component-contract.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/15-figma-frame-register.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/16-figma-runtime-comparison-plan.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/17-d1-ux-acceptance-and-test-matrix.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/18-d1-ux-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-decision-and-gate-flow.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-information-architecture.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-navigation-flow.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-responsive-layout.mmd` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/01-sfia-v3-product-vision-and-positioning.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/02-sfia-v3-principles-and-human-governance.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/03-sfia-v3-roles-and-responsibilities.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/04-sfia-v3-project-and-cycle-domain-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/05-sfia-v3-guided-reasoning-and-conversation-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/06-sfia-v3-cycle-routing-and-transition-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/07-sfia-v3-automation-and-human-decision-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/08-sfia-v3-executable-doctrine-and-contract-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/09-sfia-v3-functional-architecture.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/10-sfia-v3-technical-architecture-candidate.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/12-sfia-v2.6-to-v3-gap-analysis.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/13-sfia-v3-target-vertical-slice.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/14-sfia-v3-roadmap-and-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/15-sfia-v3-studio-native-applicability-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/17-sfia-v3-information-and-artifact-architecture.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/18-sfia-v3-doctrine-to-runtime-projection-matrix.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/19-sfia-v3-canonical-data-and-contract-strategy.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/20-sfia-v2.6-v3-coexistence-and-migration-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/21-sfia-v3-adoption-eligibility-and-gates.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/22-sfia-v3-consolidated-challenge-and-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/23-sfia-v3-reviewbundle-and-review-lifecycle.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/24-sfia-v3-doctrine-source-and-projection-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/25-sfia-v3-doctrine-enforcement-levels.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/26-sfia-v3-transactional-state-and-audit-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/27-sfia-v3-maturity-and-project-eligibility-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/28-sfia-v3-historical-project-policy.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-framing/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/01-modeling-scope-and-conventions.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/02-slice-d1-functional-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/03-slice-d1-state-and-transition-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/04-slice-d1-logical-data-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/05-slice-d1-enforcement-policy-catalog.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/06-slice-d1-event-and-audit-catalog.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/07-slice-d1-reviewbundle-model.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/08-doctrine-to-model-traceability.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/09-validation-and-conformance-plan.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/10-v3-modeled-foundation-decision-pack.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/README.md` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/audit-events.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/context-snapshot.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/cycle-instance.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/cycle-review-bundle.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/decision-request.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/enforcement-rules.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/gate-instance.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/guided-session.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/human-decision.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/project.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/examples/transition-proposal.example.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/audit/audit-event.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/common/actor-reference.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/common/doctrine-reference.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/common/git-reference.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/common/identifier.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/common/timestamp.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/context-snapshot.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/cycle-instance.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/guided-session.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/transition-proposal.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/decision/decision-request.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/decision/gate-instance.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/decision/human-decision.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/policy/enforcement-rule.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/project/project-trajectory.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/project/project.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/project/workspace-reference.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/review/cycle-review-bundle.schema.json` | INCLUDE |
| `projects/sfia-studio/sfia-v3-modeled/schemas/review/review-manifest.schema.json` | INCLUDE |

### LOCAL ONLY (127 fichiers)

Tout `.tmp-sfia-review/**` (captures, review packs, preuves) — **exclure du commit**.

### EXCLUDE

Aucun fichier hors `projects/sfia-studio/` dans le working tree du lot.

### REVIEW

Aucun fichier ambigu restant après classification. Les docs `sfia-v3-framing/modeled/design` sont des artefacts de cadrage du produit Studio candidates → INCLUDE documentaire.

## 6. Analyse par capacité

### Control Tower / OPS1
Tools UI, toolLoop, reportReinjection, allowlist, exécution bornée, routes `/ops1/*`, E2E CT.

### Moteur contexte canonique
`lib/ops1/sfia/**`, tests `canonicalEngine`, E2E `sfia-canonical-context-engine`.

### D1-I1
`lib/d1/**` foundation, Workspace, Cockpit, SQLite local, audit, idempotence.

### D1-C1 + correctif IA
`/nouvelle-demande` conversationnel ; actions limitées ; Reprendre au Workspace.

### D1-C2
Intake provider fake/live-CONFIG, system role, booléens stricts, proposition non exécutable.

### D1-C3
Snapshot Projects réel ; Cycle/Action UNAVAILABLE ; matching déterministe.

### D1-C4
Confirmation explicite ; createProject ; existing = NO_MUTATION + note domaine.

## 7. Architecture / données

Séparation UI / server actions / domain / repository respectée.
Mutations uniquement via confirmation C4.
Schémas SQLite embed (pas de fichier migration versionné séparé).
Pas de nouvelle dépendance npm.

## 8. Sécurité / RGPD / secrets

- Aucun `.env` / sqlite / credential untracked sensible.
- Hits `OPENAI_API_KEY` / `sk-e2e-fake-not-a-real-key` = fixtures/tests uniquement.
- Logs D1/OPS1 structurés sans corps métier complet.
- Allowlists + validation serveur C4.

## 9. Tests exécutés (2026-07-22 22:52:08 CEST)

| Commande | Résultat |
|----------|----------|
| `npx tsc --noEmit` | PASS |
| `npx next lint` | PASS (0 warnings après fix readiness) |
| `npx vitest run __tests__/d1/` | PASS 52/52 |
| `npx vitest run __tests__/ops1/` | PASS 105/105 |
| Playwright D1+CT+canonical+P0 | PASS 50/50 |
| `npx next build` | PASS |

## 10. Corrections readiness réalisées

Suppression de 3 `eslint-disable` inutiles (`no-console`) dans :
- `lib/d1/intakeObservability.ts`
- `lib/d1/intake/resolveProvider.ts`
- `lib/d1/observability.ts`

### Diff readiness

```diff

```

## 11. Stratégie PR / commits

**Recommandation : Option C — une PR unique + commits thématiques.**

Justification : couplage runtime (routes, shell, playwright, OPS1 legacy move, D1 intake). Découper en plusieurs PR créerait des états intermédiaires non fonctionnels.

### Plan de commits proposé (non exécuté)

1. `feat(sfia-studio): add control tower tools and canonical context engine`
2. `feat(sfia-studio): add D1 project workspace and cockpit foundation`
3. `feat(sfia-studio): add AI-guided intake proposal and context matching`
4. `feat(sfia-studio): add human-confirmed bounded project mutation`
5. `test(sfia-studio): cover control tower, OPS1 and D1 workflows`
6. `docs(sfia-studio): document control tower and D1 delivery`

Alternative acceptable : 1–2 commits plus larges si le staging thématique est trop coûteux.

### Plan `git add` proposé (non exécuté)

```bash
# Exclure explicitement
# ne pas ajouter .tmp-sfia-review/

git add projects/sfia-studio/
git status --short
# vérifier absence de .tmp / .env / *.sqlite
```

## 12. Proposition de PR (non créée)

**Titre :** feat(sfia-studio): deliver control tower and AI-guided project intake foundation

**Corps :**

## Summary

This PR delivers the SFIA Studio Control Tower Fast Track product slice together with the D1 AI-guided Project intake foundation (I1–C4).

- Control Tower / OPS1: tools UI, allowlist-bound tool loop, report reinjection, canonical SFIA context engine
- D1-I1: persistent Project foundation (SQLite), Workspace, Project Cockpit, audit, idempotence
- D1-C1: conversational entry at `/nouvelle-demande` (OPS1 legacy moved to `/ops1/nouvelle-demande`)
- D1-C2: intent understanding + structured non-executable proposal (fake provider default)
- D1-C3: deterministic existing Project matching (Cycle/Action UNAVAILABLE, no mutation)
- D1-C4: human confirmation + bounded Project creation; existing Project confirm = NO_MUTATION (no persistence contract)

## Method baseline

- **SFIA v2.6** remains the official method baseline.
- **SFIA v3.0** remains **V3-MODELED CANDIDATE** (not implemented / not adopted).
- Product capabilities are Studio-local candidates, not a method doctrine change.

## Out of scope

- Persistent intake→Project link (domain contract required)
- Cycle / Action creation or resume
- GuidedSession / Decision Center
- GPT live as a release criterion (fake provider validates the lot)
- UX-R04 global visual polish
- New npm dependencies / package.json changes
- New SQL migrations beyond existing embedded D1/OPS1 schemas

## Architecture

UI → Server Actions → domain commands → repositories (D1 SQLite / OPS1 SQLite).
Mutations only after explicit human confirmation (C4). Matching and GPT proposal never mutate.

## Tests

- `npx tsc --noEmit` — pass
- `npx next lint` — pass (0 warnings after readiness fix)
- `npx vitest run __tests__/d1/` — 52/52
- `npx vitest run __tests__/ops1/` — 105/105
- Playwright D1 I1–C4 + Control Tower + canonical context + P0 smoke — 50/50
- `npx next build` — pass

## Risks / reserves

- Existing Project confirmation is local `NO_MUTATION` only — not PROJECT LINKED
- UX-R04 deferred
- Large but coherent single-PR volume; thematic commits recommended
- Propose adding `.tmp-sfia-review/` to root `.gitignore` in a follow-up (not done in this readiness cycle; root config out of authorized readiness edit scope)

## Rollback

Revert the PR / commits on `delivery/sfia-studio-control-tower-fast-track`. D1 SQLite is local app state; no production migration ship.

## Review checklist

- [ ] Anti-claims respected (no V3-ADOPTED/IMPLEMENTED, no PROJECT LINKED, no CYCLE OPENED)
- [ ] `/nouvelle-demande` is D1 intake; OPS1 at `/ops1/nouvelle-demande`
- [ ] No secrets in commit
- [ ] `.tmp-sfia-review/**` excluded from commit
- [ ] Confirmation required before Project create


## 13. Anti-claims

- pas PROJECT LINKED
- pas CYCLE OPENED / ACTION RESUMED
- pas GUIDED SESSION STARTED
- pas D1 COMPLETE
- pas SFIA v3.0 IMPLEMENTED / ADOPTED

## 14. Décisions Morris requises

1. GO COMMIT AND PUSH — SFIA STUDIO CONTROL TOWER FAST TRACK
2. Valider stratégie commits (6 thématiques vs consolidée)
3. Optionnel : ajouter `.tmp-sfia-review/` au `.gitignore` racine
4. Après merge : cadrage produit + éventuel contrat rattachement C5

## 15. Actions non exécutées

- git add / commit / push projet
- gh pr create
- merge
- rebase
- modification method/prompts/.github/scripts
- modification package.json

## 16. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
origin/main=32e5271842b9a344a7e292614675c27ea8ed941b
staged=0
project_commits=0
```

## 17. Verdict

**VERDICT :** PR READY — GO COMMIT AND PUSH REQUIRED
