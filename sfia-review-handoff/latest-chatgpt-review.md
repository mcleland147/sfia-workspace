# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND

Timestamp: 2026-08-16 19:08:41 CEST
Level: FULL
Branch: `delivery/sfia-studio-pre-m6-ui-option-a`
HEAD: `0d33478566627a9bf507d5a06323962d349308ee`
origin/main: `0d33478566627a9bf507d5a06323962d349308ee`
Incoming Review Handoff: `caa8b3edb23528253827f6b2523cc006401f273e` (`caa8b3ed…` expected)

---

## 1. Exact GO Morris Consumed

GO MORRIS — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND —
RATIFY BOUNDED F1 READ-SURFACE EXPANSION OVER EXISTING OA PROJECT STORE + VERTICAL-SLICE RUNTIME —
KEEP EXISTING listAll APPROACH —
NO NEW PERSISTENCE / NO MIGRATION / NO PARALLEL ENGINE —
FIX G-UX-10 FRESHNESS SEMANTICS —
FIX LPS/HISTORY DURABLE READBACK —
MAKE F10 RECOVERY CONTEXTUAL —
REMOVE REMAINING FIRST-LEVEL FIXTURE/TECHNICAL COPY WHERE APPLICABLE —
KEEP G-UX-08 DEFERRED —
KEEP G-UX-09 + CONFIRMATION RESERVES —
NO COMMIT —
NO PROJECT PUSH —
NO PR —
NO M6 —
ZERO REAL —
RETURN FOR CHATGPT REVIEW

---

## 2. Cycle / Profile / Typology / CKC

- Cycle: **8** Delivery / implémentation
- Sous-type: **CONTINUATION / AMEND**
- Typologie: **INC**
- Profil SFIA: **Critical**
- CKC détaillé: **ABSENT**
- Fallback: `method/.../02-fifteen-cycles-synthetic-map.md` + méthode cycles SFIA v2.6
- Autorité CKC: **AUCUNE**

---

## 3. Git Truth

| Check | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-pre-m6-ui-option-a` |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `0d33478566627a9bf507d5a06323962d349308ee` |
| Incoming handoff | `caa8b3edb23528253827f6b2523cc006401f273e` |
| REAL | unset / 0 |
| Staged | 0 |
| Project commits this cycle | 0 |
| Project pushes | 0 |
| Candidate dirty | YES (expected) |
| Initial candidate magnitude | 34 modified + 17 created = 51 |
| Post-AMEND created project files | 19 (17 initial + 2 new AMEND tests) |

---

## 4. Convergence Pre-check

- Build Doctrine: VALIDATED — ACTIVE ON MAIN
- Capacity: V3-F05 (+ V3-F02 / F04 / F14 / F15)
- Milestone: PRE-M6 UI DELIVERY OPTION A — AMEND
- Option A ADOPTED; Execution Authorization CONSUMED
- Initial Delivery: IMPLEMENTED CANDIDATE LOCALLY
- ChatGPT review: AMEND REQUIRED → this cycle
- Pre-M6 NON COMPLETE; M6 NOT AUTHORIZED; runtime v3 NON ADOPTED; REAL 0

---

## 5. Build Doctrine Challenge

- Lien capacité: YES — authority/state representation before Cycle 9 E2E
- Utile maintenant: YES — ChatGPT blockers
- Réutilisation: YES — listAll, rehydrate, getProjectRuntimeAction
- Architecture parallèle: INTERDITE / not introduced
- Exit proof: see blockers A–E below
- Dette créée: 0 structurante
- Dette conservée: G-UX-08 OPEN/DEFERRED; G-UX-09 KEEP; Confirmation KEEP; M5-C separate
- Next: Cycle 9 QA — **not executed here**; ChatGPT re-review first

---

## 6. Visual Contract Status

- D-PRE-M6-UX-05 Freeze `uUdLBElF2B4dOefaAYt4QY` unchanged
- Prior visual contract extract remains applicable
- AMEND is semantic / wiring / copy — no design pivot
- MCP Figma: not required for this semantic AMEND; no Figma mutation
- No claim FIGMA TO RUNTIME ALIGNED

---

## 7. Reviewed Candidate Integrity (pre-AMEND)

Incoming handoff `caa8b3ed` described 34+17 candidate files. Local candidate present and dirty on expected branch/HEAD.

### Pre-AMEND snapshot (excerpt)

```
=== PRE-AMEND SNAPSHOT 2026-08-16 19:02:00 CEST ===
BRANCH=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
MAIN=0d33478566627a9bf507d5a06323962d349308ee
HANDOFF=caa8b3edb23528253827f6b2523cc006401f273e

 M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts

M	projects/sfia-studio/app/__tests__/increment-a.test.tsx
M	projects/sfia-studio/app/__tests__/increment-b.test.tsx
M	projects/sfia-studio/app/__tests__/navigation.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
M	projects/sfia-studio/app/app/studio/projects/new/page.tsx
M	projects/sfia-studio/app/components/shell/StudioShell.tsx
M	projects/sfia-studio/app/components/shell/UtilityRail.tsx
M	projects/sfia-studio/app/components/shell/utility-rail.module.css
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
M	projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
M	projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
M	projects/sfia-studio/app/lib/navigation.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
M	projects/sfia-studio/app/styles/shell.module.css
M	projects/sfia-studio/app/styles/tokens.css

 .../sfia-studio/app/__tests__/increment-a.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/increment-b.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/navigation.test.tsx  |  31 +--
 .../ProjectAssistantPanel.test.tsx                 |   5 +-
 .../importBoundaries.test.ts                       |   7 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  24 +--
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  37 ++--
 .../app/app/studio/projects/[id]/page.tsx          |  26 +--
 .../app/app/stu
```

---

## 8. F1 Read-Surface Ratification

**BLOCKER A**

| | |
| --- | --- |
| Avant | lib/oa/** + vertical-slice-runtime/** treated as mutation-forbidden; F1 listAll flagged as scope violation |
| Après | Morris GO **ratifies** existing listAll approach retroactively |
| Code | KEEP `listAll` / `ListProjects` / runtime adapter / `listProjectsRuntimeAction` / `/studio` |
| New persistence | **0** |
| New schema/migration | **0** |
| New repository/store | **0** |
| General OA query architecture | **NOT authorized** — F1 bounded only |

No rollback. No rewrite of listAll. OA/runtime files from initial Delivery remain in candidate unchanged by this AMEND except as already present.

---

## 9. Pre / Post SHA-256 (AMEND targets)

### Pre

```
=== PRE-AMEND SNAPSHOT 2026-08-16 19:02:00 CEST ===
BRANCH=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
MAIN=0d33478566627a9bf507d5a06323962d349308ee
HANDOFF=caa8b3edb23528253827f6b2523cc006401f273e

 M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts

M	projects/sfia-studio/app/__tests__/increment-a.test.tsx
M	projects/sfia-studio/app/__tests__/increment-b.test.tsx
M	projects/sfia-studio/app/__tests__/navigation.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
M	projects/sfia-studio/app/app/studio/projects/new/page.tsx
M	projects/sfia-studio/app/components/shell/StudioShell.tsx
M	projects/sfia-studio/app/components/shell/UtilityRail.tsx
M	projects/sfia-studio/app/components/shell/utility-rail.module.css
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
M	projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
M	projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
M	projects/sfia-studio/app/lib/navigation.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
M	projects/sfia-studio/app/styles/shell.module.css
M	projects/sfia-studio/app/styles/tokens.css

 .../sfia-studio/app/__tests__/increment-a.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/increment-b.test.tsx |   5 +-
 .../sfia-studio/app/__tests__/navigation.test.tsx  |  31 +--
 .../ProjectAssistantPanel.test.tsx                 |   5 +-
 .../importBoundaries.test.ts                       |   7 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  24 +--
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  37 ++--
 .../app/app/studio/projects/[id]/page.tsx          |  26 +--
 .../app/app/studio/projects/new/page.tsx           |  35 ++--
 .../app/components/shell/StudioShell.tsx           |  43 +++--
 .../app/components/shell/UtilityRail.tsx           |  52 ++++-
 .../app/components/shell/utility-rail.module.css   |   4 +
 .../project-assistant/ProjectAssistantPanel.tsx    | 211 ++++++++++++++-------
 .../project-assistant/project-assistant.module.css |  11 ++
 .../vertical-slice-ui/CreateProjectForm.tsx        |  39 ++--
 .../vertical-slice-ui/ProjectWorkspaceView.tsx     |  94 +++------
 .../vertical-slice-ui/RuntimeDisclosureBanner.tsx  |  47 +++--
 .../vertical-slice-ui/create-project.module.css    |  40 ++++
 .../vertical-slice-ui/project-workspace.module.css |  12 ++
 projects/sfia-studio/app/lib/navigation.ts         |  78 ++++++--
 .../sfia-studio/app/lib/oa/project/domain/types.ts |  12 ++
 projects/sfia-studio/app/lib/oa/project/index.ts   |   4 +
 .../infrastructure/memoryProjectRepository.ts      |  12 ++
 .../sqlite/createSqliteProductProjectServices.ts   |   4 +
 .../sqlite/sqliteProjectRepository.ts              |  14 ++
 .../oa/project/ports/projectAuditJournalPort.ts    |  16 ++
 .../lib/oa/project/ports/projectRepositoryPort.ts  |   5 +
 .../app/lib/vertical-slice-runtime/actions.ts      |   5 +
 .../app/lib/vertical-slice-runtime/index.ts        |   5 +
 .../app/lib/vertical-slice-runtime/mapping.ts      |  52 +++++
 .../app/lib/vertical-slice-runtime/service.ts      |  29 +++
 .../app/lib/vertical-slice-runtime/types.ts        |  23 +++
 projects/sfia-studio/app/styles/shell.module.css   |   6 +
 projects/sfia-studio/app/styles/tokens.css         |   4 +
 34 files changed, 680 insertions(+), 317 deletions(-)


=== SHA256 TARGETS ===
0d12ad43a6d52794204a0e1e197942f5c7745d07741dc93d33820babe7ade5a9  projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
e9420fe7a8cf945596e83e8b1dc687b5d04072beb5476620db218496011c5187  projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
3851ba413e86a436c13ebdca7118adc9cab1ec41e5a9773ceb44373aa76bf1c3  projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx
1a1a8c7be987bead823c48180f920757caa358630572f8225f21dece7ba3d89d  projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx
621988f46470f951961d3ffd0063f7dc18c5b98cb07a8d4512257add9e6546b1  projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
583fa58be79436737d3cd88047c381bf3f39cc8c6b50d8b39fb4b655bc3d89a1  projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx
180898b31e658caf215de94fb778886138fe32db2ffc2cebab6c940e0681a75b  projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
ed6262331e8a7c299c0bbff8fa29213255fc08aad39593ef482b87ec02d7eeaa  projects/sfia-studio/app/app/studio/page.tsx
f3481c83f72375fa2c05d2d561d243e57fdd33fa82c3e905c196e2093664e202  projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts

=== CREATED PROJECT FILE COUNT ===
projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
projects/sfia-studio/app/__tests__/studio-projects/studioProjectsHome.test.tsx
projects/sfia-studio/app/app/studio/page.tsx
projects/sfia-studio/app/e2e/studio-option-a.spec.ts
projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx
projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx
projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx
projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
projects/sfia-studio/app/features/studio-projects/StudioProjectsHome.tsx
projects/sfia-studio/app/features/studio-projects/index.ts
projects/sfia-studio/app/features/studio-projects/living-project-state-panel.module.css
projects/sfia-studio/app/features/studio-projects/project-history-panel.module.css
projects/sfia-studio/app/features/studio-projects/project-principal.module.css
projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css
projects/sfia-studio/app/features/studio-projects/studio-projects-home.module.css
projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
      17

```

### Post

```
=== POST-AMEND SHA256 2026-08-16 19:08:06 CEST ===
6481e77794c0c5e19d3480777a828f4f759ab18e7c74e435e9596e20f052de99  projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
03c9abc44ed34fd8c09a070010edf1a40aed8d9397e79cb47fc9bda5f5c01347  projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
7bc666b7b0639877b4269ec386ebad81df882ce8da7e73828813cb55e80532df  projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx
c07caa6d94cc2fe4ab0ab0b0b7f5e6639cfc89b9d34d323c4f81d1f0ce4b245a  projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx
621988f46470f951961d3ffd0063f7dc18c5b98cb07a8d4512257add9e6546b1  projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx
583fa58be79436737d3cd88047c381bf3f39cc8c6b50d8b39fb4b655bc3d89a1  projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx
ae8f35af150988f773f4fe6142dd2de1551e56e59f4e949bf13af6267eaf37b3  projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
856d801960d236991108c9a51e748e7e88295a4f13b8278c169d2a914f0663ff  projects/sfia-studio/app/app/studio/page.tsx
99a11709d3344a20780f8be53b289d34b00ab257776e7454c7cf0320329e55ea  projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
1e78df6faa856aaa929cd2ad1bd76138f442973250b12c8bb6c19f8633d24a56  projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
fd247e345cf6570d886b3db2365010576ea4e15e2db307be5968ccd7e3c5249e  projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalReadback.test.tsx

```

---

## 10. Files Changed by AMEND (this cycle)

Primarily:

1. `features/project-assistant/presentationLabels.ts` — G-UX-10 + `shouldShowProjectRecovery`
2. `features/project-assistant/ProjectAssistantPanel.tsx` — freshness authority restore; durable callbacks; copy
3. `features/studio-projects/ProjectPrincipalClient.tsx` — LPS refresh + History wiring + contextual Recovery
4. `features/studio-projects/ProjectHistoryPanel.tsx` — durableOutcome consumption + product-first anchors
5. `features/vertical-slice-ui/RuntimeDisclosureBanner.tsx` — product-first + details techniques
6. `app/studio/page.tsx` — first-level pills softened
7. `features/vertical-slice-ui/create-project.module.css` — disclosureDetails
8. `features/studio-projects/project-principal.module.css` — durabilityHint
9. `__tests__/project-assistant/presentationLabels.test.ts` — freshness + recovery rules
10. `__tests__/studio-projects/projectPrincipalAmend.test.tsx` — **NEW** Recovery/History
11. `__tests__/studio-projects/projectPrincipalReadback.test.tsx` — **NEW** refresh wiring
12. `__tests__/vertical-slice-ui/createProjectUi.test.tsx` — copy assertions

`ProjectRecoveryBanner.tsx` / `LivingProjectStatePanel.tsx` kept; visibility/ownership fixed in parent.

---

## 11. Full Final Candidate Inventory

```
MODIFIED TRACKED:
projects/sfia-studio/app/__tests__/increment-a.test.tsx
projects/sfia-studio/app/__tests__/increment-b.test.tsx
projects/sfia-studio/app/__tests__/navigation.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
projects/sfia-studio/app/app/studio/projects/new/page.tsx
projects/sfia-studio/app/components/shell/StudioShell.tsx
projects/sfia-studio/app/components/shell/UtilityRail.tsx
projects/sfia-studio/app/components/shell/utility-rail.module.css
projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
projects/sfia-studio/app/lib/navigation.ts
projects/sfia-studio/app/lib/oa/project/domain/types.ts
projects/sfia-studio/app/lib/oa/project/index.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
projects/sfia-studio/app/styles/shell.module.css
projects/sfia-studio/app/styles/tokens.css

UNTRACKED PROJECT:

```

Created project files now include 2 AMEND test files (19 untracked project files total).

---

## 12. BLOCKER B — G-UX-10 Freshness

### Root cause

Prior logic marked STALE whenever session recommendation AND durable outcome coexisted, even without Evidence ID mismatch → **false stale**.

### Final semantics (`deriveRecommendationFreshness`)

```typescript
/**
 * PRE-M6 Option A presentation helpers for ProjectAssistantPanel.
 * No authority/engine changes — labels and freshness only.
 */

export type RecommendationFreshness =
  | { status: "current"; label: "Recommandation à jour" }
  | { status: "stale"; label: "Recommandation périmée" }
  | {
      status: "undetermined";
      label: "Recommandation — actualité non déterminée";
    };

const UNDETERMINED: RecommendationFreshness = {
  status: "undetermined",
  label: "Recommandation — actualité non déterminée",
};

const CURRENT: RecommendationFreshness = {
  status: "current",
  label: "Recommandation à jour",
};

const STALE: RecommendationFreshness = {
  status: "stale",
  label: "Recommandation périmée",
};

/**
 * G-UX-10 — Recommendation freshness is a proven state, not generic caution.
 *
 * Rules:
 * - neither source → undetermined
 * - session + durable with comparable Evidence IDs that match → current
 * - session + durable with comparable Evidence IDs that mismatch → stale
 * - both sources but IDs missing / correlation impossible → undetermined (never default stale)
 * - session only → current (active session recommendation; no invented supersession)
 * - durable only → current (rehydrated durable recommendation is the known durable read)
 *
 * Freshness ≠ HumanDecision and must not invent execution authority.
 */
export function deriveRecommendationFreshness(input: {
  hasSessionRecommendation: boolean;
  hasDurableEvidenceOutcome: boolean;
  sessionEvidenceId?: string | null;
  durableEvidenceIds?: readonly string[];
}): RecommendationFreshness {
  const {
    hasSessionRecommendation,
    hasDurableEvidenceOutcome,
    sessionEvidenceId,
    durableEvidenceIds = [],
  } = input;

  if (!hasSessionRecommendation && !hasDurableEvidenceOutcome) {
    return UNDETERMINED;
  }

  if (hasSessionRecommendation && hasDurableEvidenceOutcome) {
    const sessionId =
      typeof sessionEvidenceId === "string" ? sessionEvidenceId.trim() : "";
    const durableIds = durableEvidenceIds.filter(
      (id): id is string => typeof id === "string" && id.trim().length > 0,
    );

    if (!sessionId || durableIds.length === 0) {
      return UNDETERMINED;
    }

    if (durableIds.includes(sessionId)) {
      return CURRENT;
    }

    return STALE;
  }

  if (hasSessionRecommendation) {
    return CURRENT;
  }

  if (hasDurableEvidenceOutcome) {
    return CURRENT;
  }

  return UNDETERMINED;
}

/**
 * F10 — Recovery is contextual. Nominal project open is not Recovery.
 * Use only signals already available from durable reads / LPS projection.
 */
export function shouldShowProjectRecovery(input: {
  hasDurableEvidenceOutcome: boolean;
  livingStateVersion: number;
  activeCycleInstanceId?: string | null;
}): boolean {
  if (input.hasDurableEvidenceOutcome) return true;
  if (input.livingStateVersion > 1) return true;
  if (
    typeof input.activeCycleInstanceId === "string" &&
    input.activeCycleInstanceId.trim().length > 0
  ) {
    return true;
  }
  return false;
}

/**
 * Map Attempt technical status to French user labels.
 * "bloqué avant exécution" must not invent an Attempt ID (caller responsibility).
 */
export function attemptStatusUserLabel(status: string | null | undefined): {
  label: string;
  blockedBeforeExecution: boolean;
} {
  const normalized = (status ?? "").toLowerCase();
  switch (normalized) {
    case "running":
    case "result_pending":
    case "pending":
      return { label: "en cours", blockedBeforeExecution: false };
    case "failed":
      return { label: "échec", blockedBeforeExecution: false };
    case "timeout":
      return { label: "timeout", blockedBeforeExecution: false };
    case "cancelled":
    case "canceled":
      return { label: "annulé", blockedBeforeExecution: false };
    case "succeeded":
    case "completed":
      return { label: "terminé", blockedBeforeExecution: false };
    case "blocked":
    case "blocked_before_execution":
    case "created":
    case "queued":
    case "prepared":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    case "":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    default:
      return {
        label: status ? String(status) : "bloqué avant exécution",
        blockedBeforeExecution: !status,
      };
  }
}

export const G_UX_08_AMEND_DEFERRED_MESSAGE =
  "Boucle AMEND complète non disponible (G-UX-08 ouvert / différé). Clarifiez dans la conversation, obtenez une nouvelle proposition, puis un nouveau GO — pas d’amendement in-place simulé.";

```

| Case | Result |
| --- | --- |
| no signals | undetermined |
| session+durable, same Evidence IDs | current |
| session+durable, mismatched comparable IDs | stale |
| session+durable, IDs absent / incomparable | undetermined (**never default stale**) |
| session only | current (active session; no invented supersession) |
| durable only | current (known durable rehydrate) |

### Freshness Authority Check

`recommendationIsStale` removed from `canConfirmF3`.

Excerpt:

```typescript
const recommendationFreshness = deriveRecommendationFreshness({
    hasSessionRecommendation: Boolean(f3Execute?.recommendation),
    hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
    sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
    durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
  });

  // Freshness is presentation-only. Do not invent authority via canConfirmF3.
  const canConfirmF3 =
    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;


```

Stale UI notice is informational only (`f3-stale-recommendation-notice`): stale ≠ HumanDecision ≠ implicit GO; confirmation remains governed by existing contract/decision path — **no new authority rule**.

HumanDecision / ExecutionContract / Attempt semantics: **0 changes**.

---

## 13. BLOCKER C — LPS / History Durable Readback

### Before

- `ProjectPrincipalClient` loaded `getProjectRuntimeAction` once on mount
- History rendered without parent `durableOutcome`
- No refresh after durable mutations

### After

Parent owns projection; assistant notifies on durable success:

Durable mutation triggers (success only):
- `projectAssistantDecideAction` (HumanDecision)
- `projectAssistantPrepareF3FixtureAction` (ExecutionContract)
- `projectAssistantPrepareM3Action` (ExecutionContract)
- `projectAssistantConfirmAndExecuteF3FixtureAction` (+ rehydrate Evidence/ReviewBundle)

Not treated as durable: Conversation send, Confirmation as durable claim, Proposal.

```typescript
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectAssistantPanel } from "@/features/project-assistant";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { shouldShowProjectRecovery } from "@/features/project-assistant/presentationLabels";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { LivingProjectStatePanel } from "./LivingProjectStatePanel";
import { ProjectHistoryPanel } from "./ProjectHistoryPanel";
import { ProjectRecoveryBanner } from "./ProjectRecoveryBanner";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import styles from "./project-principal.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;

/**
 * F2/F3 principal layout: conversation-dominant + sticky LPS / drawer.
 * Owns getProjectRuntimeAction projection; refreshes after durable mutations.
 */
export function ProjectPrincipalClient({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);
  const [durableOutcome, setDurableOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [lpsOpen, setLpsOpen] = useState(false);
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const refreshInFlight = useRef(false);

  const loadProject = useCallback(async () => {
    if (refreshInFlight.current) return;
    refreshInFlight.current = true;
    try {
      const next = await getProjectRuntimeAction(projectId);
      setResult(next);
    } finally {
      refreshInFlight.current = false;
    }
  }, [projectId]);

  useEffect(() => {
    let cancelled = false;
    void getProjectRuntimeAction(projectId).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  function focusConversation() {
    conversationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const input = conversationRef.current?.querySelector(
      "[data-testid='project-assistant-input']",
    );
    if (input instanceof HTMLTextAreaElement) {
      input.focus();
    }
  }

  if (!result) {
    return (
      <p className={styles.loading} data-testid="project-workspace-loading">
        Chargement de l&apos;espace projet…
      </p>
    );
  }

  if (!result.ok) {
    return <ProjectWorkspaceView projectId={projectId} result={result} />;
  }

  const showRecovery = shouldShowProjectRecovery({
    hasDurableEvidenceOutcome: Boolean(durableOutcome),
    livingStateVersion: result.livingState.version,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId,
  });

  return (
    <div className={styles.root} data-testid="project-principal">
      {showRecovery ? (
        <ProjectRecoveryBanner
          onResumeDurable={() => {
            setLpsOpen(true);
            focusConversation();
          }}
          onRequalify={focusConversation}
        />
      ) : (
        <p
          className={styles.durabilityHint}
          data-testid="project-durability-hint"
        >
          Conversation, proposition et confirmation restent process-local et
          peuvent être perdues au rechargement. Les faits durables du projet
          peuvent être relus.
        </p>
      )}

      <div className={styles.layout}>
        <div className={styles.main} ref={conversationRef}>
          <div className={styles.conversationHeader}>
            <div>
              <p className={styles.eyebrow}>Conversation</p>
              <h2 className={styles.title}>Assistant projet</h2>
              <p className={styles.lead}>
                Qualification, proposition et décision humaine — parcours
                principal. L&apos;état vivant reste secondaire.
              </p>
            </div>
            <button
              type="button"
              className={styles.lpsToggle}
              data-testid="lps-drawer-toggle"
              aria-expanded={lpsOpen}
              onClick={() => setLpsOpen((open) => !open)}
            >
              {lpsOpen ? "Fermer l'état vivant" : "Ouvrir l'état vivant"}
            </button>
          </div>

          <div
            className={styles.conversation}
            data-testid="project-conversation-main"
          >
            <ProjectAssistantPanel
              projectId={projectId}
              onDurableFactsChanged={() => {
                void loadProject();
              }}
              onDurableEvidenceOutcomeChange={setDurableOutcome}
            />
          </div>

          <ProjectHistoryPanel
            result={result}
            durableOutcome={durableOutcome}
          />
        </div>

        <div
          className={[
            styles.lpsColumn,
            lpsOpen ? styles.lpsOpen : styles.lpsClosed,
          ].join(" ")}
          data-testid="project-lps-column"
        >
          <div className={styles.lpsSheet}>
            <div className={styles.lpsSheetHeader}>
              <p className={styles.eyebrow}>État vivant</p>
              <button
                type="button"
                className={styles.lpsClose}
                data-testid="lps-drawer-close"
                onClick={() => setLpsOpen(false)}
              >
                Fermer
              </button>
            </div>
            <LivingProjectStatePanel result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

```

History:

```typescript
"use client";

import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import styles from "./project-history-panel.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;

type HistoryAnchor = {
  id: string;
  kind: string;
  label: string;
  detail?: string;
};

function buildAnchors(
  result: GetProjectSuccess,
  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
): HistoryAnchor[] {
  const anchors: HistoryAnchor[] = [
    {
      id: "project",
      kind: "Projet",
      label: result.project.name,
      detail: "Identité projet",
    },
    {
      id: "lps",
      kind: "État vivant",
      label: `Version ${result.livingState.version}`,
      detail: result.livingState.createdAt,
    },
  ];

  if (result.livingState.activeCycleInstanceId) {
    anchors.push({
      id: "cycle",
      kind: "Cycle",
      label: "Référence factuelle de cycle",
      detail: "Cycle distinct du Project",
    });
  }

  if (durableOutcome) {
    for (const evidence of durableOutcome.evidence) {
      anchors.push({
        id: `evidence:${evidence.evidenceId}`,
        kind: "Evidence",
        label: evidence.status,
        detail: "Preuve durable",
      });
    }
    for (const rb of durableOutcome.reviewBundles) {
      anchors.push({
        id: `rb:${rb.reviewBundleId}`,
        kind: "ReviewBundle",
        label: rb.status,
        detail: "Revue durable",
      });
    }
    anchors.push({
      id: "recommendation",
      kind: "Recommendation",
      label: durableOutcome.recommendation.recommendationLabel,
      detail: "≠ Décision humaine",
    });
  }

  return anchors;
}

/**
 * F9 — durable factual anchors only (not a fake conversation transcript).
 * Project IDs stay in secondary detail; conversation/proposal/confirmation
 * are never invented as durable history.
 */
export function ProjectHistoryPanel({
  result,
  durableOutcome = null,
}: {
  result: GetProjectSuccess;
  durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
}) {
  const anchors = buildAnchors(result, durableOutcome);

  return (
    <section
      className={styles.root}
      data-testid="project-history-panel"
      aria-labelledby="project-history-title"
    >
      <h2 id="project-history-title" className={styles.title}>
        Historique durable
      </h2>
      <p className={styles.hint}>
        Ancres factuelles du projet (état vivant, cycle, preuves, revue,
        recommandation lorsqu&apos;elles sont réellement disponibles). Ce
        n&apos;est pas une transcription de conversation. Confirmation et
        proposition process-local n&apos;apparaissent pas ici.
      </p>
      <ul className={styles.list}>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={styles.item}>
            <span className={styles.kind}>{anchor.kind}</span>
            <span className={styles.label}>{anchor.label}</span>
            {anchor.detail ? (
              <span className={styles.detail}>{anchor.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

```

New store / History store / polling / Context business: **0**

---

## 14. BLOCKER D — F10 Recovery Contextual

### Before

`ProjectRecoveryBanner` always rendered on principal.

### After

`shouldShowProjectRecovery` requires real durable advance signal:
- durable evidence outcome present, OR
- LPS version > 1, OR
- activeCycleInstanceId present

Else: secondary durability hint only (not Recovery).

Recovery component (unchanged messaging):

```typescript
"use client";

import styles from "./project-recovery-banner.module.css";

/**
 * F10 — honest recovery messaging: durable vs process-local.
 * CTAs focus conversation / requalify without inventing persistence.
 */
export function ProjectRecoveryBanner({
  onResumeDurable,
  onRequalify,
}: {
  onResumeDurable?: () => void;
  onRequalify?: () => void;
}) {
  return (
    <section
      className={styles.root}
      data-testid="project-recovery-banner"
      aria-labelledby="project-recovery-title"
    >
      <div>
        <h2 id="project-recovery-title" className={styles.title}>
          Reprise après rechargement
        </h2>
        <p className={styles.body}>
          L&apos;état durable du projet (projet, état vivant, décisions et
          contrats déjà enregistrés) peut être relu. La conversation, la
          proposition et la confirmation restent process-local et peuvent être
          perdues au rechargement — aucune durabilité inventée.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid="recovery-resume-durable"
          onClick={onResumeDurable}
        >
          Reprendre depuis l&apos;état durable
        </button>
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          Requalifier
        </button>
      </div>
    </section>
  );
}

```

Fake session inference: **0**

---

## 15. BLOCKER E — First-Level Technical Copy

### Audit / after

| Surface | Change |
| --- | --- |
| `/studio` pills | `Environnement local` / `Non prêt produit` (was MODE LOCAL / NON PRÊT PRODUIT) |
| RuntimeDisclosureBanner | product-first pills + limits; IAM/RUN READY in `<details>` |
| ProjectAssistantPanel F6 | removed FIXTURE/CURSOR REAL/GIT WRITE first-level pills; details techniques; softer CTAs |
| srOnly guards | retained (testids) — safety not removed |

```typescript
import { Card } from "@/components/ui/Card";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "@/lib/vertical-slice-runtime/disclosures";
import styles from "./create-project.module.css";

/**
 * Server component: honesty banner — product-first first level,
 * technical runtime details secondary. Does not hide safety limits.
 */
export function RuntimeDisclosureBanner({
  surface = "create",
}: {
  surface?: "create" | "workspace" | "list";
} = {}) {
  const intro =
    surface === "workspace"
      ? "Cet espace consulte l’état durable du projet lorsqu’il est disponible, et rappelle ce qui reste volatil (conversation, proposition, confirmation)."
      : surface === "list"
        ? "Cette liste lit les projets déjà enregistrés dans cet environnement local. Elle ne crée pas de magasin parallèle."
        : "Cette interface crée un projet localement. Conversation et confirmation restent process-local.";

  return (
    <Card variant="flush" className={styles.disclosure}>
      <div className={styles.disclosureHeader}>
        <div>
          <h2>Environnement local — limites honnêtes</h2>
          <p>{intro}</p>
        </div>
        <div className={styles.pillGroup} aria-label="Limites produit">
          <StatusPill tone="orangeFlush">Environnement local</StatusPill>
          <StatusPill tone="muted">Processus borné</StatusPill>
          <StatusPill tone="orange">
            {RUNTIME_READINESS_NOT_READY.status === "NOT_READY"
              ? "Non prêt produit"
              : RUNTIME_READINESS_NOT_READY.status}
          </StatusPill>
        </div>
      </div>

      <ul className={styles.disclosureList}>
        <li>
          Durable (quand disponible) : projet, état vivant, décisions et
          contrats déjà enregistrés.
        </li>
        <li>
          Process-local (non durable) : conversation, proposition, confirmation
          d&apos;exécution — perdues au rechargement.
        </li>
        <li>Aucune exécution réelle autorisée ici.</li>
      </ul>

      <details className={styles.disclosureDetails}>
        <summary>Détails techniques</summary>
        <ul className={styles.disclosureList}>
          <li>
            IAM {RUNTIME_DISCLOSURES.iam} · livraison{" "}
            {RUNTIME_DISCLOSURES.delivery} · bascule{" "}
            {RUNTIME_DISCLOSURES.cutover}.
          </li>
          <li>Agent non autorisé · RUN READY = false.</li>
        </ul>
      </details>
    </Card>
  );
}

```

```typescript
import { StudioShell } from "@/components/shell/StudioShell";
import { StudioProjectsHome } from "@/features/studio-projects/StudioProjectsHome";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/studio-projects/studio-projects-home.module.css";

export default function StudioHomePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/studio"
      title="Studio — Projets"
      showTabs={false}
      hideCopilot
      primaryAction={{ label: "Créer un projet", href: "/studio/projects/new" }}
      pills={[
        { label: "Environnement local", tone: "orange" },
        { label: "Non prêt produit", tone: "orange" },
      ]}
    >
      <div className={styles.root}>
        <RuntimeDisclosureBanner surface="list" />
        <StudioProjectsHome />
      </div>
    </StudioShell>
  );
}

```

Safety facts hidden: **0** (limits still stated)

---

## 16. Persistence / Migration / Parallel Engine Check

| Counter | Value |
| --- | --- |
| New persistence | 0 |
| Migrations | 0 |
| New business engine | 0 |
| New UI state engine | 0 |
| New History store | 0 |
| New Recovery/session store | 0 |
| OA/runtime expansion beyond ratified F1 | 0 |
| HumanDecision semantics changes | 0 |
| ExecutionContract semantics changes | 0 |
| Attempt semantics changes | 0 |
| G-UX-08 implementation | 0 |
| Figma mutation | 0 |
| REAL | 0 |

---

## 17. G-UX Status

| Item | Status |
| --- | --- |
| G-UX-08 | OPEN / DEFERRED (honest AMEND message only) |
| G-UX-09 | KEEP RESERVE (Conversation/Proposal process-local) |
| Confirmation | KEEP RESERVE (process-local; no restart durability claim) |
| M5-C | KEEP TEMPORARY WITH EXIT / unchanged |
| G-UX-10 | false-stale fixed; presentation-only |
| G-UX-11 | still pending Cycle 9 |

---

## 18. Static Validation / Tests

Commands (from `projects/sfia-studio/app`):

```
npm run typecheck → PASS
npm run lint → PASS (no warnings/errors)
npm test -- --run → 1758 passed / 131 skipped (186 files passed / 13 skipped)
git diff --check → PASS
```

Targeted AMEND proofs:
- `presentationLabels.test.ts` — match/mismatch/undetermined/session-only/durable-only/recovery context
- `projectPrincipalAmend.test.tsx` — Recovery absent/present; History durable anchors
- `projectPrincipalReadback.test.tsx` — getProject reload after callback; no infinite loop

Playwright: not run as G-UX-11 exit proof (Cycle 9). Spec `e2e/studio-option-a.spec.ts` unchanged readiness.

Runtime captures / Figma-runtime: still pending Cycle 9 → **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** for visual alignment (does not block AMEND COMPLETE for ChatGPT re-review).

---

## 19. Targeted AMEND Tests (full)

### presentationLabels.test.ts

```typescript
import { describe, expect, it } from "vitest";
import {
  attemptStatusUserLabel,
  deriveRecommendationFreshness,
  shouldShowProjectRecovery,
} from "@/features/project-assistant/presentationLabels";

describe("G-UX-10 recommendation freshness", () => {
  it("marks CURRENT when session and durable Evidence IDs match", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:same",
      durableEvidenceIds: ["ev:same", "ev:other"],
    });
    expect(freshness.status).toBe("current");
    expect(freshness.label).toBe("Recommandation à jour");
  });

  it("marks STALE when comparable Evidence IDs explicitly mismatch", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:session",
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("stale");
    expect(freshness.label).toBe("Recommandation périmée");
  });

  it("stays UNDETERMINED when both sources exist but IDs are not comparable", () => {
    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: null,
        durableEvidenceIds: ["ev:durable"],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: "ev:session",
        durableEvidenceIds: [],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
      }).status,
    ).toBe("undetermined");
  });

  it("stays undetermined without signals", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: false,
    });
    expect(freshness.status).toBe("undetermined");
    expect(freshness.label).toMatch(/actualité non déterminée/);
  });

  it("treats session-only recommendation as CURRENT (no invented supersession)", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: false,
      sessionEvidenceId: "ev:session",
    });
    expect(freshness.status).toBe("current");
  });

  it("treats durable-only rehydrate as CURRENT", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("current");
  });

  it("never equates freshness labels with HumanDecision", () => {
    for (const status of ["current", "stale", "undetermined"] as const) {
      const freshness = deriveRecommendationFreshness(
        status === "stale"
          ? {
              hasSessionRecommendation: true,
              hasDurableEvidenceOutcome: true,
              sessionEvidenceId: "a",
              durableEvidenceIds: ["b"],
            }
          : status === "current"
            ? {
                hasSessionRecommendation: true,
                hasDurableEvidenceOutcome: false,
              }
            : {
                hasSessionRecommendation: false,
                hasDurableEvidenceOutcome: false,
              },
      );
      expect(freshness.label.toLowerCase()).not.toMatch(/décision humaine/);
      expect(freshness.label.toLowerCase()).not.toMatch(/humandecision/);
    }
  });
});

describe("F10 recovery context", () => {
  it("hides recovery without durable advance signals", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(false);
  });

  it("shows recovery when durable evidence outcome exists", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: true,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
  });

  it("shows recovery when LPS version advanced or cycle ref present", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 2,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: "cycle:1",
      }),
    ).toBe(true);
  });
});

describe("attempt status user labels", () => {
  it("maps lifecycle statuses", () => {
    expect(attemptStatusUserLabel("running").label).toBe("en cours");
    expect(attemptStatusUserLabel("failed").label).toBe("échec");
    expect(attemptStatusUserLabel("timeout").label).toBe("timeout");
    expect(attemptStatusUserLabel("cancelled").label).toBe("annulé");
    expect(attemptStatusUserLabel("succeeded").label).toBe("terminé");
  });

  it("does not invent attempt identity for blocked-before-execution", () => {
    const blocked = attemptStatusUserLabel("");
    expect(blocked.label).toBe("bloqué avant exécution");
    expect(blocked.blockedBeforeExecution).toBe(true);
  });
});

```

### projectPrincipalAmend.test.tsx

```typescript
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

const {
  getProjectRuntimeActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantRehydrateEvidenceOutcomeAction:
    projectAssistantRehydrateEvidenceOutcomeActionMock,
  projectAssistantDecideAction: vi.fn(),
  projectAssistantSendAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: "AMEND",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:amend",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:amend-1",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

const DURABLE_OUTCOME: ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true,
  status: "ok",
  mode: "fixture",
  presentation: "unconfirmed",
  text: "durable",
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: null,
    objective: "Objectif",
    contextSummary: "Contexte",
    criticality: "standard",
    constraints: [],
    lpsId: "lps:1",
    lpsVersion: 2,
    lpsCreatedAt: "2026-08-16T10:00:00.000Z",
    doctrineId: "doc",
    doctrineVersion: "1",
    doctrineDigest: "digest",
    doctrineStatus: "active",
    runtimeMode: "local",
    persistence: "product_sqlite",
    readiness: "NOT_READY",
  },
  ephemeralNotice: "process-local",
  evidence: [
    {
      evidenceId: "ev:1",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:1",
      verified: false,
      mode: "fixture",
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:1",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:1"],
      mode: "fixture",
    },
  ],
  recommendation: {
    kind: "recommendation",
    status: "not_recommended",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: "Recommandation durable",
    mode: "fixture",
  },
  lpsVersion: 2,
  evidenceIds: ["ev:1"],
  reviewBundleIds: ["rb:1"],
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
  projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
});

describe("ProjectPrincipalClient AMEND readback / recovery", () => {
  it("hides Recovery banner on nominal project without durable advance", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(BASE_PROJECT);
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "rehydrate_error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
    expect(screen.getByTestId("project-durability-hint")).toBeVisible();
    expect(screen.getByTestId("project-history-panel")).toBeVisible();
    expect(
      within(screen.getByTestId("project-history-panel")).queryByText(
        /Evidence|ReviewBundle/,
      ),
    ).toBeNull();
  });

  it("shows Recovery and History durable anchors when outcome rehydrates", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ...BASE_PROJECT,
      livingState: {
        ...BASE_PROJECT.livingState,
        version: 2,
      },
    });
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_OUTCOME,
    );

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-recovery-banner")).toBeVisible();
    });
    expect(screen.getByTestId("recovery-resume-durable")).toBeVisible();
    expect(screen.getByTestId("recovery-requalify")).toBeVisible();

    const history = await screen.findByTestId("project-history-panel");
    await waitFor(() => {
      expect(
        within(history).getByText("Recommandation durable"),
      ).toBeVisible();
    });
    expect(within(history).getByText("Evidence")).toBeVisible();
    expect(within(history).getByText("ReviewBundle")).toBeVisible();
    expect(within(history).getByText("≠ Décision humaine")).toBeVisible();
  });
});

```

### projectPrincipalReadback.test.tsx

```typescript
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant", () => ({
  ProjectAssistantPanel: ({
    onDurableFactsChanged,
    onDurableEvidenceOutcomeChange,
  }: {
    projectId: string;
    onDurableFactsChanged?: () => void;
    onDurableEvidenceOutcomeChange?: (outcome: null) => void;
  }) => (
    <div data-testid="project-assistant-panel-stub">
      <button
        type="button"
        data-testid="simulate-durable-mutation"
        onClick={() => {
          onDurableFactsChanged?.();
          onDurableEvidenceOutcomeChange?.(null);
        }}
      >
        Simuler mutation durable
      </button>
    </div>
  ),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-rb",
    name: "Projet readback",
    shortReference: "RB",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:rb",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:rb",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
});

describe("ProjectPrincipalClient durable readback wiring", () => {
  it("reloads getProjectRuntimeAction after durable mutation callback without looping", async () => {
    getProjectRuntimeActionMock
      .mockResolvedValueOnce(BASE_PROJECT)
      .mockResolvedValueOnce({
        ...BASE_PROJECT,
        livingState: {
          ...BASE_PROJECT.livingState,
          version: 4,
        },
      });

    const user = userEvent.setup();
    render(<ProjectPrincipalClient projectId="prj:amend-rb" />);

    await waitFor(() => {
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v1",
      );
    });
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(1);

    await user.click(screen.getByTestId("simulate-durable-mutation"));

    await waitFor(() => {
      expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v4",
      );
    });

    // No automatic re-fire / infinite loop after a single durable callback.
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
  });
});

```

---

## 20. Authority excerpt — durable notify / confirm path

```typescript
function notifyDurableFactsChanged() {
    onDurableFactsChangedRef.current?.();
  }

  function applyDurableEvidenceOutcome(
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) {
    setDurableEvidenceOutcome(outcome);
    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
  }

  async function refreshDurableEvidenceOutcome() {
    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (result.ok) {
      applyDurableEvidenceOutcome(result);
      setDurableRehydrateError(null);
      return;
    }
    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
      applyDurableEvidenceOutcome(null);
      setDurableRehydrateError(null);
      return;
    }
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(
      "Impossible de relire le dernier outcome durable.",
    );
  }


```

```typescript
function confirmAndExecuteF3() {
    if (!canConfirmF3 || !f3Prepare || !activeProposal) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f3Prepare.decisionId,
        executionContractId: f3Prepare.contract.executionContractId,
        expectedContractVersion: f3Prepare.contract.version,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      setUiState("ANSWERED");
      // Attempt / Evidence / ReviewBundle / LPS refs are durable — refresh both.
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }



```

```typescript
F6 · Préparer le contrat</h3>
          <p className={styles.cardMeta}>
            Le GO autorise uniquement la préparation d&apos;un contrat. Confirmation
            process-local — non durable.
          </p>
          <div className={styles.f3Labels} data-testid="f3-prepare-labels">
            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
            <StatusPill tone="muted">Confirmation non durable</StatusPill>
          </div>
          <details className={styles.diagnosticsDetails}>
            <summary>Détails techniques</summary>
            <p className={styles.cardMeta}>
              Démonstration locale · exécution réelle bloquée · aucune écriture
              Git produit.
            </p>
          </details>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-prepare-button"
            disabled={!canPrepareF3}
            onClick={() => prepareF3()}
          >
            Préparer le contrat d&apos;exécution
          </button>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-m3-prepare-button"
            disabled={!canPrepareM3}
            onClick={() => prepareM3()}
          >
            Préparer le contrat depuis la décision durable
          </button>
        </section>
      ) : null}

      {f3M3Prepare && !f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-m3-prepare"
        >
          <h3 className={styles.cardTitle}>F6 · Contrat préparé (décision durable)</h3>
          <div className={styles.f3Labels}>
            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
            <StatusPill tone="muted">Tentative non créée</StatusPill>
          </div>
          <details className={styles.diagnosticsDetails}>
            <summary>Détails techniques</summary>
            <dl className={styles.cardDl}>
              <div>
                <dt>Identifiant contrat</dt>
                <dd data-testid="f3-m3-contract-id">
                  {f3M3Prepare.contract.executionContractId}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd data-testid="f3-m3-fingerprint">
                  {f3M3Prepare.contract.semanticFingerprint}
                </dd>
              </div>
              <div>
                <dt>Action</dt>
                <dd>{f3M3Prepare.contract.action}</dd>
              </div>
            </dl>
          </details>
        </section>
      ) : null}

      {f3Prepare && !f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-contract"
        >
          <h3 className={styles.cardTitle}>F6 · Contrat préparé</h3>
          <div className={styles.f3Labels} data-testid="f3-contract-labels">
            <StatusPill tone="blueFlush">Contrat</StatusPill>
            <StatusPill tone="muted">Confirmation process-local</StatusPill>
            <StatusPill tone="orange">Exécution réelle bloquée</StatusPill>
          </div>
          <details className={styles.diagnosticsDetails}>
            <summary>Détails techniques</summary>
            <dl className={styles.cardDl}>
              <div>
                <dt>Identifiant contrat</dt>
                <dd data-testid="f3-contract-id">
                  {f3Prepare.contract.executionContractId}
                </dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
              </div>
            </dl>
          </details>
          <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
            Tentative non créée — confirmation process-local (non durable).
          </p>
          {recommendationFreshness.status === "stale" ? (
            <p
              className={styles.processLocal}
              data-testid="f3-stale-recommendation-notice"
            >
              Recommandation périmée — ce n&apos;est pas une décision humaine et
              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
              reste gouvernée par le contrat et la décision déjà enregistrés.
            </p>
          ) : null}
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-confirm-execute-button"
            disabled={!canConfirmF3}
            onClick={() => confirmAndExecuteF3()}
          >
            Confirmer et exécuter (process-local)
          </button>
        </section>
      ) : null}

      {f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>
```

Full `ProjectAssistantPanel.tsx` remains in working tree at:
`projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
(too large to duplicate entirely here; AMEND deltas covered above + tracked diff).

---

## 21. Complete New Files Concat

```
===== FILE: projects/sfia-studio/app/lib/oa/project/application/listProjects.ts =====
import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import type { ListProjectsResult } from "../domain/types";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";

/**
 * Thin product list over existing Project persistence (oa_projects / memory).
 * No schema change, no parallel store.
 */
export class ListProjects {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(input: {
    correlationId?: string;
  } = {}): Promise<ListProjectsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = input.correlationId;

    try {
      const projects = await this.projects.listAll();
      this.audit.append({
        event: "oa.project.list",
        ts: timestamp,
        correlationId,
        result: "ok",
        durationMs: Date.now() - started,
        count: projects.length,
      });
      return { ok: true, projects };
    } catch {
      const error = createProjectError({
        detailCode: "PERSISTENCE_FAILURE",
        timestamp,
        correlationId,
        internalCauseRef: "list_exception",
      });
      this.audit.append({
        event: "oa.project.list_failed",
        ts: timestamp,
        correlationId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs: Date.now() - started,
      });
      return { ok: false, error };
    }
  }
}

===== FILE: projects/sfia-studio/app/app/studio/page.tsx =====
import { StudioShell } from "@/components/shell/StudioShell";
import { StudioProjectsHome } from "@/features/studio-projects/StudioProjectsHome";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/studio-projects/studio-projects-home.module.css";

export default function StudioHomePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/studio"
      title="Studio — Projets"
      showTabs={false}
      hideCopilot
      primaryAction={{ label: "Créer un projet", href: "/studio/projects/new" }}
      pills={[
        { label: "Environnement local", tone: "orange" },
        { label: "Non prêt produit", tone: "orange" },
      ]}
    >
      <div className={styles.root}>
        <RuntimeDisclosureBanner surface="list" />
        <StudioProjectsHome />
      </div>
    </StudioShell>
  );
}

===== FILE: projects/sfia-studio/app/features/project-assistant/presentationLabels.ts =====
/**
 * PRE-M6 Option A presentation helpers for ProjectAssistantPanel.
 * No authority/engine changes — labels and freshness only.
 */

export type RecommendationFreshness =
  | { status: "current"; label: "Recommandation à jour" }
  | { status: "stale"; label: "Recommandation périmée" }
  | {
      status: "undetermined";
      label: "Recommandation — actualité non déterminée";
    };

const UNDETERMINED: RecommendationFreshness = {
  status: "undetermined",
  label: "Recommandation — actualité non déterminée",
};

const CURRENT: RecommendationFreshness = {
  status: "current",
  label: "Recommandation à jour",
};

const STALE: RecommendationFreshness = {
  status: "stale",
  label: "Recommandation périmée",
};

/**
 * G-UX-10 — Recommendation freshness is a proven state, not generic caution.
 *
 * Rules:
 * - neither source → undetermined
 * - session + durable with comparable Evidence IDs that match → current
 * - session + durable with comparable Evidence IDs that mismatch → stale
 * - both sources but IDs missing / correlation impossible → undetermined (never default stale)
 * - session only → current (active session recommendation; no invented supersession)
 * - durable only → current (rehydrated durable recommendation is the known durable read)
 *
 * Freshness ≠ HumanDecision and must not invent execution authority.
 */
export function deriveRecommendationFreshness(input: {
  hasSessionRecommendation: boolean;
  hasDurableEvidenceOutcome: boolean;
  sessionEvidenceId?: string | null;
  durableEvidenceIds?: readonly string[];
}): RecommendationFreshness {
  const {
    hasSessionRecommendation,
    hasDurableEvidenceOutcome,
    sessionEvidenceId,
    durableEvidenceIds = [],
  } = input;

  if (!hasSessionRecommendation && !hasDurableEvidenceOutcome) {
    return UNDETERMINED;
  }

  if (hasSessionRecommendation && hasDurableEvidenceOutcome) {
    const sessionId =
      typeof sessionEvidenceId === "string" ? sessionEvidenceId.trim() : "";
    const durableIds = durableEvidenceIds.filter(
      (id): id is string => typeof id === "string" && id.trim().length > 0,
    );

    if (!sessionId || durableIds.length === 0) {
      return UNDETERMINED;
    }

    if (durableIds.includes(sessionId)) {
      return CURRENT;
    }

    return STALE;
  }

  if (hasSessionRecommendation) {
    return CURRENT;
  }

  if (hasDurableEvidenceOutcome) {
    return CURRENT;
  }

  return UNDETERMINED;
}

/**
 * F10 — Recovery is contextual. Nominal project open is not Recovery.
 * Use only signals already available from durable reads / LPS projection.
 */
export function shouldShowProjectRecovery(input: {
  hasDurableEvidenceOutcome: boolean;
  livingStateVersion: number;
  activeCycleInstanceId?: string | null;
}): boolean {
  if (input.hasDurableEvidenceOutcome) return true;
  if (input.livingStateVersion > 1) return true;
  if (
    typeof input.activeCycleInstanceId === "string" &&
    input.activeCycleInstanceId.trim().length > 0
  ) {
    return true;
  }
  return false;
}

/**
 * Map Attempt technical status to French user labels.
 * "bloqué avant exécution" must not invent an Attempt ID (caller responsibility).
 */
export function attemptStatusUserLabel(status: string | null | undefined): {
  label: string;
  blockedBeforeExecution: boolean;
} {
  const normalized = (status ?? "").toLowerCase();
  switch (normalized) {
    case "running":
    case "result_pending":
    case "pending":
      return { label: "en cours", blockedBeforeExecution: false };
    case "failed":
      return { label: "échec", blockedBeforeExecution: false };
    case "timeout":
      return { label: "timeout", blockedBeforeExecution: false };
    case "cancelled":
    case "canceled":
      return { label: "annulé", blockedBeforeExecution: false };
    case "succeeded":
    case "completed":
      return { label: "terminé", blockedBeforeExecution: false };
    case "blocked":
    case "blocked_before_execution":
    case "created":
    case "queued":
    case "prepared":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    case "":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    default:
      return {
        label: status ? String(status) : "bloqué avant exécution",
        blockedBeforeExecution: !status,
      };
  }
}

export const G_UX_08_AMEND_DEFERRED_MESSAGE =
  "Boucle AMEND complète non disponible (G-UX-08 ouvert / différé). Clarifiez dans la conversation, obtenez une nouvelle proposition, puis un nouveau GO — pas d’amendement in-place simulé.";

===== FILE: projects/sfia-studio/app/features/studio-projects/index.ts =====
export { StudioProjectsHome } from "./StudioProjectsHome";
export { LivingProjectStatePanel } from "./LivingProjectStatePanel";
export { ProjectHistoryPanel } from "./ProjectHistoryPanel";
export { ProjectRecoveryBanner } from "./ProjectRecoveryBanner";
export { ProjectPrincipalClient } from "./ProjectPrincipalClient";

===== FILE: projects/sfia-studio/app/features/studio-projects/StudioProjectsHome.tsx =====
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import type { RuntimeProjectListItem } from "@/lib/vertical-slice-runtime";
import styles from "./studio-projects-home.module.css";

type ListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; projects: readonly RuntimeProjectListItem[] };

function statusLabel(status: string): string {
  switch (status) {
    case "draft":
      return "Brouillon";
    case "active":
      return "Actif";
    case "paused":
      return "En pause";
    case "closed":
      return "Clos";
    case "archived":
      return "Archivé";
    default:
      return status;
  }
}

export function StudioProjectsHome() {
  const [state, setState] = useState<ListState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    void listProjectsRuntimeAction().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setState({
          status: "error",
          message:
            result.error.message ||
            "Impossible de charger la liste des projets.",
        });
        return;
      }
      if (result.projects.length === 0) {
        setState({ status: "empty" });
        return;
      }
      setState({ status: "ready", projects: result.projects });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={styles.root} data-testid="studio-projects-home">
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>SFIA Studio</p>
          <h2 className={styles.title}>Projets</h2>
          <p className={styles.lead}>
            Ouvrez un projet existant ou créez-en un nouveau pour démarrer la
            conversation de qualification.
          </p>
        </div>
        <CtaButton
          href="/studio/projects/new"
          variant="primary"
          data-testid="studio-projects-create"
        >
          Créer un projet
        </CtaButton>
      </header>

      {state.status === "loading" ? (
        <p className={styles.hint} data-testid="studio-projects-loading">
          Chargement des projets…
        </p>
      ) : null}

      {state.status === "error" ? (
        <div
          className={styles.error}
          role="alert"
          data-testid="studio-projects-error"
        >
          <p>{state.message}</p>
          <p className={styles.hint}>
            La liste s&apos;appuie sur l&apos;état produit déjà disponible dans
            ce processus. Aucune donnée inventée.
          </p>
        </div>
      ) : null}

      {state.status === "empty" ? (
        <div className={styles.empty} data-testid="studio-projects-empty">
          <p>Aucun projet pour le moment.</p>
          <p className={styles.hint}>
            Créez un premier projet pour ouvrir l&apos;espace de conversation.
          </p>
          <CtaButton href="/studio/projects/new" variant="secondary">
            Créer le premier projet
          </CtaButton>
        </div>
      ) : null}

      {state.status === "ready" ? (
        <ul className={styles.list} data-testid="studio-projects-list">
          {state.projects.map((project) => (
            <li key={project.projectId} className={styles.item}>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{project.title}</h3>
                <p className={styles.itemMeta}>
                  {statusLabel(project.status)}
                  {project.updatedAt ? ` · Mis à jour ${project.updatedAt}` : ""}
                </p>
                {project.objective ? (
                  <p className={styles.itemObjective}>{project.objective}</p>
                ) : null}
              </div>
              <Link
                href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
                className={styles.openLink}
                data-testid="studio-projects-open"
              >
                Ouvrir
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

===== FILE: projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx =====
"use client";

import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./living-project-state-panel.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;

export function LivingProjectStatePanel({
  result,
  compact = false,
}: {
  result: GetProjectSuccess;
  compact?: boolean;
}) {
  return (
    <aside
      className={compact ? styles.panelCompact : styles.panel}
      data-testid="living-project-state-panel"
      aria-label="État vivant du projet"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>État vivant</p>
        <h2 className={styles.title}>{result.project.name}</h2>
        <p className={styles.lead}>
          Vue secondaire du projet — pas un cockpit. La conversation reste le
          parcours principal.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="lps-objective">
        <h3 id="lps-objective">Objectif</h3>
        <p>{result.project.objective}</p>
      </section>

      <section className={styles.section} aria-labelledby="lps-context">
        <h3 id="lps-context">Contexte</h3>
        <p>{result.project.contextSummary || "Aucun résumé de contexte."}</p>
      </section>

      {result.project.constraints.length > 0 ? (
        <section className={styles.section} aria-labelledby="lps-constraints">
          <h3 id="lps-constraints">Contraintes</h3>
          <ul className={styles.list}>
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={styles.section} aria-labelledby="lps-status">
        <h3 id="lps-status">Statut</h3>
        <dl className={styles.facts}>
          <div>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div>
            <dt>Version d&apos;état</dt>
            <dd>v{result.livingState.version}</dd>
          </div>
          <div>
            <dt>Préparation</dt>
            <dd>
              {result.readiness.status === "NOT_READY"
                ? "Non prêt produit"
                : result.readiness.status}
            </dd>
          </div>
        </dl>
      </section>

      <details className={styles.diagnostics} data-testid="lps-diagnostics">
        <summary>Diagnostics techniques</summary>
        <dl className={styles.facts}>
          <div>
            <dt>Identifiant projet</dt>
            <dd className={styles.code}>{result.project.projectId}</dd>
          </div>
          {result.project.shortReference ? (
            <div>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div>
            <dt>Doctrine</dt>
            <dd>
              {result.doctrine.id} · {result.doctrine.version}
            </dd>
          </div>
          <div>
            <dt>Digest</dt>
            <dd className={styles.code}>{result.doctrine.digest}</dd>
          </div>
          <div>
            <dt>Réf. état vivant</dt>
            <dd className={styles.code}>{result.livingState.id}</dd>
          </div>
          {result.livingState.activeCycleInstanceId ? (
            <div>
              <dt>Cycle lié</dt>
              <dd className={styles.code}>
                {result.livingState.activeCycleInstanceId}
              </dd>
            </div>
          ) : null}
          {result.livingState.ckcResolutionRef ? (
            <div>
              <dt>Réf. résolution</dt>
              <dd className={styles.code}>
                {result.livingState.ckcResolutionRef}
              </dd>
            </div>
          ) : null}
          <div>
            <dt>Source technique</dt>
            <dd>{result.project.source}</dd>
          </div>
        </dl>
      </details>
    </aside>
  );
}

===== FILE: projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx =====
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectAssistantPanel } from "@/features/project-assistant";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { shouldShowProjectRecovery } from "@/features/project-assistant/presentationLabels";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { LivingProjectStatePanel } from "./LivingProjectStatePanel";
import { ProjectHistoryPanel } from "./ProjectHistoryPanel";
import { ProjectRecoveryBanner } from "./ProjectRecoveryBanner";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import styles from "./project-principal.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;

/**
 * F2/F3 principal layout: conversation-dominant + sticky LPS / drawer.
 * Owns getProjectRuntimeAction projection; refreshes after durable mutations.
 */
export function ProjectPrincipalClient({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);
  const [durableOutcome, setDurableOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [lpsOpen, setLpsOpen] = useState(false);
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const refreshInFlight = useRef(false);

  const loadProject = useCallback(async () => {
    if (refreshInFlight.current) return;
    refreshInFlight.current = true;
    try {
      const next = await getProjectRuntimeAction(projectId);
      setResult(next);
    } finally {
      refreshInFlight.current = false;
    }
  }, [projectId]);

  useEffect(() => {
    let cancelled = false;
    void getProjectRuntimeAction(projectId).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  function focusConversation() {
    conversationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const input = conversationRef.current?.querySelector(
      "[data-testid='project-assistant-input']",
    );
    if (input instanceof HTMLTextAreaElement) {
      input.focus();
    }
  }

  if (!result) {
    return (
      <p className={styles.loading} data-testid="project-workspace-loading">
        Chargement de l&apos;espace projet…
      </p>
    );
  }

  if (!result.ok) {
    return <ProjectWorkspaceView projectId={projectId} result={result} />;
  }

  const showRecovery = shouldShowProjectRecovery({
    hasDurableEvidenceOutcome: Boolean(durableOutcome),
    livingStateVersion: result.livingState.version,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId,
  });

  return (
    <div className={styles.root} data-testid="project-principal">
      {showRecovery ? (
        <ProjectRecoveryBanner
          onResumeDurable={() => {
            setLpsOpen(true);
            focusConversation();
          }}
          onRequalify={focusConversation}
        />
      ) : (
        <p
          className={styles.durabilityHint}
          data-testid="project-durability-hint"
        >
          Conversation, proposition et confirmation restent process-local et
          peuvent être perdues au rechargement. Les faits durables du projet
          peuvent être relus.
        </p>
      )}

      <div className={styles.layout}>
        <div className={styles.main} ref={conversationRef}>
          <div className={styles.conversationHeader}>
            <div>
              <p className={styles.eyebrow}>Conversation</p>
              <h2 className={styles.title}>Assistant projet</h2>
              <p className={styles.lead}>
                Qualification, proposition et décision humaine — parcours
                principal. L&apos;état vivant reste secondaire.
              </p>
            </div>
            <button
              type="button"
              className={styles.lpsToggle}
              data-testid="lps-drawer-toggle"
              aria-expanded={lpsOpen}
              onClick={() => setLpsOpen((open) => !open)}
            >
              {lpsOpen ? "Fermer l'état vivant" : "Ouvrir l'état vivant"}
            </button>
          </div>

          <div
            className={styles.conversation}
            data-testid="project-conversation-main"
          >
            <ProjectAssistantPanel
              projectId={projectId}
              onDurableFactsChanged={() => {
                void loadProject();
              }}
              onDurableEvidenceOutcomeChange={setDurableOutcome}
            />
          </div>

          <ProjectHistoryPanel
            result={result}
            durableOutcome={durableOutcome}
          />
        </div>

        <div
          className={[
            styles.lpsColumn,
            lpsOpen ? styles.lpsOpen : styles.lpsClosed,
          ].join(" ")}
          data-testid="project-lps-column"
        >
          <div className={styles.lpsSheet}>
            <div className={styles.lpsSheetHeader}>
              <p className={styles.eyebrow}>État vivant</p>
              <button
                type="button"
                className={styles.lpsClose}
                data-testid="lps-drawer-close"
                onClick={() => setLpsOpen(false)}
              >
                Fermer
              </button>
            </div>
            <LivingProjectStatePanel result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

===== FILE: projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx =====
"use client";

import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import styles from "./project-history-panel.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;

type HistoryAnchor = {
  id: string;
  kind: string;
  label: string;
  detail?: string;
};

function buildAnchors(
  result: GetProjectSuccess,
  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
): HistoryAnchor[] {
  const anchors: HistoryAnchor[] = [
    {
      id: "project",
      kind: "Projet",
      label: result.project.name,
      detail: "Identité projet",
    },
    {
      id: "lps",
      kind: "État vivant",
      label: `Version ${result.livingState.version}`,
      detail: result.livingState.createdAt,
    },
  ];

  if (result.livingState.activeCycleInstanceId) {
    anchors.push({
      id: "cycle",
      kind: "Cycle",
      label: "Référence factuelle de cycle",
      detail: "Cycle distinct du Project",
    });
  }

  if (durableOutcome) {
    for (const evidence of durableOutcome.evidence) {
      anchors.push({
        id: `evidence:${evidence.evidenceId}`,
        kind: "Evidence",
        label: evidence.status,
        detail: "Preuve durable",
      });
    }
    for (const rb of durableOutcome.reviewBundles) {
      anchors.push({
        id: `rb:${rb.reviewBundleId}`,
        kind: "ReviewBundle",
        label: rb.status,
        detail: "Revue durable",
      });
    }
    anchors.push({
      id: "recommendation",
      kind: "Recommendation",
      label: durableOutcome.recommendation.recommendationLabel,
      detail: "≠ Décision humaine",
    });
  }

  return anchors;
}

/**
 * F9 — durable factual anchors only (not a fake conversation transcript).
 * Project IDs stay in secondary detail; conversation/proposal/confirmation
 * are never invented as durable history.
 */
export function ProjectHistoryPanel({
  result,
  durableOutcome = null,
}: {
  result: GetProjectSuccess;
  durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
}) {
  const anchors = buildAnchors(result, durableOutcome);

  return (
    <section
      className={styles.root}
      data-testid="project-history-panel"
      aria-labelledby="project-history-title"
    >
      <h2 id="project-history-title" className={styles.title}>
        Historique durable
      </h2>
      <p className={styles.hint}>
        Ancres factuelles du projet (état vivant, cycle, preuves, revue,
        recommandation lorsqu&apos;elles sont réellement disponibles). Ce
        n&apos;est pas une transcription de conversation. Confirmation et
        proposition process-local n&apos;apparaissent pas ici.
      </p>
      <ul className={styles.list}>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={styles.item}>
            <span className={styles.kind}>{anchor.kind}</span>
            <span className={styles.label}>{anchor.label}</span>
            {anchor.detail ? (
              <span className={styles.detail}>{anchor.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

===== FILE: projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx =====
"use client";

import styles from "./project-recovery-banner.module.css";

/**
 * F10 — honest recovery messaging: durable vs process-local.
 * CTAs focus conversation / requalify without inventing persistence.
 */
export function ProjectRecoveryBanner({
  onResumeDurable,
  onRequalify,
}: {
  onResumeDurable?: () => void;
  onRequalify?: () => void;
}) {
  return (
    <section
      className={styles.root}
      data-testid="project-recovery-banner"
      aria-labelledby="project-recovery-title"
    >
      <div>
        <h2 id="project-recovery-title" className={styles.title}>
          Reprise après rechargement
        </h2>
        <p className={styles.body}>
          L&apos;état durable du projet (projet, état vivant, décisions et
          contrats déjà enregistrés) peut être relu. La conversation, la
          proposition et la confirmation restent process-local et peuvent être
          perdues au rechargement — aucune durabilité inventée.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid="recovery-resume-durable"
          onClick={onResumeDurable}
        >
          Reprendre depuis l&apos;état durable
        </button>
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          Requalifier
        </button>
      </div>
    </section>
  );
}

===== FILE: projects/sfia-studio/app/features/studio-projects/studio-projects-home.module.css =====
.root {
  display: grid;
  gap: var(--sfia-space-xl);
  padding-bottom: var(--sfia-space-xl);
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--sfia-space-lg);
  flex-wrap: wrap;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--sfia-blue);
  font-size: var(--sfia-meta-size);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.title {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 28px;
  line-height: 1.2;
}

.lead,
.hint,
.itemMeta,
.itemObjective {
  margin: 8px 0 0;
  color: var(--sfia-muted);
  font-size: 14px;
  line-height: var(--sfia-line-body);
}

.empty,
.error {
  display: grid;
  gap: var(--sfia-space-sm);
  padding: var(--sfia-space-lg);
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-md);
}

.error {
  border-color: #f3c4c4;
  background: #fff8f8;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--sfia-space-md);
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sfia-space-md);
  padding: var(--sfia-space-lg);
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-md);
  box-shadow: var(--sfia-shadow-sm);
}

.itemBody {
  min-width: 0;
}

.itemTitle {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 18px;
  line-height: 1.3;
}

.openLink {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-weight: 650;
  text-decoration: none;
}

@media (max-width: 768px) {
  .item {
    flex-direction: column;
    align-items: stretch;
  }

  .openLink {
    width: 100%;
  }
}

===== FILE: projects/sfia-studio/app/features/studio-projects/living-project-state-panel.module.css =====
.panel,
.panelCompact {
  display: grid;
  gap: var(--sfia-space-md);
  padding: var(--sfia-space-lg);
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-md);
  box-shadow: var(--sfia-shadow-panel);
  align-content: start;
}

.header {
  display: grid;
  gap: 6px;
}

.eyebrow {
  margin: 0;
  color: var(--sfia-blue);
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.title {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 18px;
  line-height: 1.25;
}

.lead,
.section p,
.list,
.facts dd {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.section {
  display: grid;
  gap: 8px;
}

.section h3 {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 13px;
  font-weight: 700;
}

.list {
  padding-left: 1.1rem;
  display: grid;
  gap: 4px;
}

.facts {
  margin: 0;
  display: grid;
  gap: 8px;
}

.facts dt {
  color: var(--sfia-muted);
  font-size: 11px;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.facts dd {
  color: var(--sfia-ink);
}

.code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  word-break: break-all;
}

.diagnostics {
  border-top: 1px solid var(--sfia-border-soft);
  padding-top: var(--sfia-space-sm);
}

.diagnostics summary {
  cursor: pointer;
  color: var(--sfia-muted);
  font-size: 12px;
  font-weight: 650;
}

.diagnostics[open] summary {
  margin-bottom: var(--sfia-space-sm);
}

===== FILE: projects/sfia-studio/app/features/studio-projects/project-principal.module.css =====
.root {
  display: grid;
  gap: var(--sfia-space-md);
  min-height: 0;
}

.loading,
.lead,
.durabilityHint {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.durabilityHint {
  padding: 8px 10px;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 8px;
  background: #fff;
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--sfia-lps-width-1440);
  gap: var(--sfia-space-lg);
  align-items: start;
  min-height: 0;
}

.main {
  display: grid;
  gap: var(--sfia-space-md);
  min-width: 0;
}

.conversationHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--sfia-space-md);
  flex-wrap: wrap;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--sfia-blue);
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.title {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 22px;
  line-height: 1.25;
}

.conversation {
  min-height: 520px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-md);
  box-shadow: var(--sfia-shadow-sm);
  overflow: hidden;
}

.lpsColumn {
  position: sticky;
  top: 12px;
  width: var(--sfia-lps-width-1440);
  max-height: calc(100vh - 140px);
  overflow: auto;
}

.lpsSheetHeader {
  display: none;
}

.lpsToggle {
  display: none;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-weight: 650;
  cursor: pointer;
}

.lpsClose {
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  cursor: pointer;
}

@media (max-width: 1439px) and (min-width: 1025px) {
  .layout {
    grid-template-columns: minmax(0, 1fr) var(--sfia-lps-width-1280);
  }

  .lpsColumn {
    width: var(--sfia-lps-width-1280);
  }
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .lpsToggle {
    display: inline-flex;
    align-items: center;
  }

  .lpsColumn {
    position: fixed;
    inset: 0;
    z-index: 40;
    width: auto;
    max-height: none;
    background: rgba(20, 28, 48, 0.35);
    padding: 24px 16px 16px;
    overflow: auto;
  }

  .lpsClosed {
    display: none;
  }

  .lpsOpen {
    display: block;
  }

  .lpsSheet {
    margin-left: auto;
    width: min(400px, 100%);
    max-height: calc(100vh - 40px);
    overflow: auto;
    background: var(--sfia-bg);
    border-radius: var(--sfia-radius-lg);
    padding: var(--sfia-space-md);
    box-shadow: var(--sfia-shadow-lg);
  }

  .lpsSheetHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--sfia-space-sm);
  }
}

@media (max-width: 768px) {
  .conversation {
    min-height: 420px;
  }

  .conversationHeader {
    flex-direction: column;
    align-items: stretch;
  }

  .lpsToggle,
  .lpsClose {
    width: 100%;
    justify-content: center;
  }

  .lpsSheet {
    width: 100%;
  }
}

===== FILE: projects/sfia-studio/app/features/studio-projects/project-history-panel.module.css =====
.root {
  display: grid;
  gap: var(--sfia-space-sm);
  padding: var(--sfia-space-md);
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-md);
}

.title {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 15px;
}

.hint {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 12px;
  line-height: var(--sfia-line-body);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.item {
  display: grid;
  gap: 2px;
  padding: 8px 10px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 10px;
}

.kind {
  color: var(--sfia-blue);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.label {
  color: var(--sfia-ink);
  font-size: 13px;
}

.detail {
  color: var(--sfia-muted);
  font-size: 11px;
  word-break: break-all;
}

===== FILE: projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css =====
.root {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--sfia-space-md);
  flex-wrap: wrap;
  padding: var(--sfia-space-md) var(--sfia-space-lg);
  background: var(--sfia-orange-soft-00c);
  border: 1px solid #f3d7a3;
  border-radius: var(--sfia-radius-md);
}

.title {
  margin: 0 0 6px;
  color: var(--sfia-ink);
  font-size: 15px;
}

.body {
  margin: 0;
  max-width: 58ch;
  color: var(--sfia-muted);
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.primary,
.secondary {
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 650;
  cursor: pointer;
}

.primary {
  background: var(--sfia-ink);
  color: #fff;
}

.secondary {
  background: #fff;
  color: var(--sfia-ink);
  border-color: var(--sfia-border);
}

@media (max-width: 768px) {
  .actions {
    width: 100%;
  }

  .primary,
  .secondary {
    flex: 1 1 100%;
  }
}

===== FILE: projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts =====
import { describe, expect, it } from "vitest";
import {
  attemptStatusUserLabel,
  deriveRecommendationFreshness,
  shouldShowProjectRecovery,
} from "@/features/project-assistant/presentationLabels";

describe("G-UX-10 recommendation freshness", () => {
  it("marks CURRENT when session and durable Evidence IDs match", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:same",
      durableEvidenceIds: ["ev:same", "ev:other"],
    });
    expect(freshness.status).toBe("current");
    expect(freshness.label).toBe("Recommandation à jour");
  });

  it("marks STALE when comparable Evidence IDs explicitly mismatch", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:session",
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("stale");
    expect(freshness.label).toBe("Recommandation périmée");
  });

  it("stays UNDETERMINED when both sources exist but IDs are not comparable", () => {
    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: null,
        durableEvidenceIds: ["ev:durable"],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: "ev:session",
        durableEvidenceIds: [],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
      }).status,
    ).toBe("undetermined");
  });

  it("stays undetermined without signals", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: false,
    });
    expect(freshness.status).toBe("undetermined");
    expect(freshness.label).toMatch(/actualité non déterminée/);
  });

  it("treats session-only recommendation as CURRENT (no invented supersession)", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: false,
      sessionEvidenceId: "ev:session",
    });
    expect(freshness.status).toBe("current");
  });

  it("treats durable-only rehydrate as CURRENT", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("current");
  });

  it("never equates freshness labels with HumanDecision", () => {
    for (const status of ["current", "stale", "undetermined"] as const) {
      const freshness = deriveRecommendationFreshness(
        status === "stale"
          ? {
              hasSessionRecommendation: true,
              hasDurableEvidenceOutcome: true,
              sessionEvidenceId: "a",
              durableEvidenceIds: ["b"],
            }
          : status === "current"
            ? {
                hasSessionRecommendation: true,
                hasDurableEvidenceOutcome: false,
              }
            : {
                hasSessionRecommendation: false,
                hasDurableEvidenceOutcome: false,
              },
      );
      expect(freshness.label.toLowerCase()).not.toMatch(/décision humaine/);
      expect(freshness.label.toLowerCase()).not.toMatch(/humandecision/);
    }
  });
});

describe("F10 recovery context", () => {
  it("hides recovery without durable advance signals", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(false);
  });

  it("shows recovery when durable evidence outcome exists", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: true,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
  });

  it("shows recovery when LPS version advanced or cycle ref present", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 2,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: "cycle:1",
      }),
    ).toBe(true);
  });
});

describe("attempt status user labels", () => {
  it("maps lifecycle statuses", () => {
    expect(attemptStatusUserLabel("running").label).toBe("en cours");
    expect(attemptStatusUserLabel("failed").label).toBe("échec");
    expect(attemptStatusUserLabel("timeout").label).toBe("timeout");
    expect(attemptStatusUserLabel("cancelled").label).toBe("annulé");
    expect(attemptStatusUserLabel("succeeded").label).toBe("terminé");
  });

  it("does not invent attempt identity for blocked-before-execution", () => {
    const blocked = attemptStatusUserLabel("");
    expect(blocked.label).toBe("bloqué avant exécution");
    expect(blocked.blockedBeforeExecution).toBe(true);
  });
});

===== FILE: projects/sfia-studio/app/__tests__/studio-projects/studioProjectsHome.test.tsx =====
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { StudioProjectsHome } from "@/features/studio-projects/StudioProjectsHome";

const { listProjectsRuntimeActionMock } = vi.hoisted(() => ({
  listProjectsRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
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
});

describe("StudioProjectsHome", () => {
  it("shows empty state when no projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });

    render(<StudioProjectsHome />);

    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument();
    });
    expect(screen.getByTestId("studio-projects-create")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
  });

  it("lists projects and links open to workspace", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:demo-1",
          title: "Projet démo",
          name: "Projet démo",
          status: "active",
          updatedAt: "2026-08-16T10:00:00.000Z",
        },
      ],
      disclosures: {},
    });

    render(<StudioProjectsHome />);

    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument();
    });
    expect(screen.getByText("Projet démo")).toBeInTheDocument();
    expect(screen.getByTestId("studio-projects-open")).toHaveAttribute(
      "href",
      "/studio/projects/prj%3Ademo-1",
    );
  });
});

===== FILE: projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx =====
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

const {
  getProjectRuntimeActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantRehydrateEvidenceOutcomeAction:
    projectAssistantRehydrateEvidenceOutcomeActionMock,
  projectAssistantDecideAction: vi.fn(),
  projectAssistantSendAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: "AMEND",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:amend",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:amend-1",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

const DURABLE_OUTCOME: ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true,
  status: "ok",
  mode: "fixture",
  presentation: "unconfirmed",
  text: "durable",
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: null,
    objective: "Objectif",
    contextSummary: "Contexte",
    criticality: "standard",
    constraints: [],
    lpsId: "lps:1",
    lpsVersion: 2,
    lpsCreatedAt: "2026-08-16T10:00:00.000Z",
    doctrineId: "doc",
    doctrineVersion: "1",
    doctrineDigest: "digest",
    doctrineStatus: "active",
    runtimeMode: "local",
    persistence: "product_sqlite",
    readiness: "NOT_READY",
  },
  ephemeralNotice: "process-local",
  evidence: [
    {
      evidenceId: "ev:1",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:1",
      verified: false,
      mode: "fixture",
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:1",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:1"],
      mode: "fixture",
    },
  ],
  recommendation: {
    kind: "recommendation",
    status: "not_recommended",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: "Recommandation durable",
    mode: "fixture",
  },
  lpsVersion: 2,
  evidenceIds: ["ev:1"],
  reviewBundleIds: ["rb:1"],
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
  projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
});

describe("ProjectPrincipalClient AMEND readback / recovery", () => {
  it("hides Recovery banner on nominal project without durable advance", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(BASE_PROJECT);
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "rehydrate_error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
    expect(screen.getByTestId("project-durability-hint")).toBeVisible();
    expect(screen.getByTestId("project-history-panel")).toBeVisible();
    expect(
      within(screen.getByTestId("project-history-panel")).queryByText(
        /Evidence|ReviewBundle/,
      ),
    ).toBeNull();
  });

  it("shows Recovery and History durable anchors when outcome rehydrates", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ...BASE_PROJECT,
      livingState: {
        ...BASE_PROJECT.livingState,
        version: 2,
      },
    });
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_OUTCOME,
    );

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-recovery-banner")).toBeVisible();
    });
    expect(screen.getByTestId("recovery-resume-durable")).toBeVisible();
    expect(screen.getByTestId("recovery-requalify")).toBeVisible();

    const history = await screen.findByTestId("project-history-panel");
    await waitFor(() => {
      expect(
        within(history).getByText("Recommandation durable"),
      ).toBeVisible();
    });
    expect(within(history).getByText("Evidence")).toBeVisible();
    expect(within(history).getByText("ReviewBundle")).toBeVisible();
    expect(within(history).getByText("≠ Décision humaine")).toBeVisible();
  });
});

===== FILE: projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalReadback.test.tsx =====
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant", () => ({
  ProjectAssistantPanel: ({
    onDurableFactsChanged,
    onDurableEvidenceOutcomeChange,
  }: {
    projectId: string;
    onDurableFactsChanged?: () => void;
    onDurableEvidenceOutcomeChange?: (outcome: null) => void;
  }) => (
    <div data-testid="project-assistant-panel-stub">
      <button
        type="button"
        data-testid="simulate-durable-mutation"
        onClick={() => {
          onDurableFactsChanged?.();
          onDurableEvidenceOutcomeChange?.(null);
        }}
      >
        Simuler mutation durable
      </button>
    </div>
  ),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-rb",
    name: "Projet readback",
    shortReference: "RB",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:rb",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:rb",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
});

describe("ProjectPrincipalClient durable readback wiring", () => {
  it("reloads getProjectRuntimeAction after durable mutation callback without looping", async () => {
    getProjectRuntimeActionMock
      .mockResolvedValueOnce(BASE_PROJECT)
      .mockResolvedValueOnce({
        ...BASE_PROJECT,
        livingState: {
          ...BASE_PROJECT.livingState,
          version: 4,
        },
      });

    const user = userEvent.setup();
    render(<ProjectPrincipalClient projectId="prj:amend-rb" />);

    await waitFor(() => {
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v1",
      );
    });
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(1);

    await user.click(screen.getByTestId("simulate-durable-mutation"));

    await waitFor(() => {
      expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v4",
      );
    });

    // No automatic re-fire / infinite loop after a single durable callback.
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
  });
});

===== FILE: projects/sfia-studio/app/e2e/studio-option-a.spec.ts =====
import { test, expect } from "@playwright/test";

/**
 * PRE-M6 Option A smoke — happy path entry.
 *
 * Cycle 9 negative authority matrix (stubs / comments only — not automated here):
 * - AMEND full loop: OPEN/DEFERRED (honest messaging only)
 * - Conversation/Proposal/Confirmation: process-local KEEP RESERVE
 * - REAL execution: must stay 0
 * - Recommendation must never be treated as HumanDecision
 * - Stale recommendation must be textual ("Recommandation périmée")
 */

test.describe("studio option A", () => {
  test("opens /studio entry (F1)", async ({ page }) => {
    await page.goto("/studio");
    await expect(page.getByTestId("studio-shell")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Studio — Projets", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await expect(page.getByTestId("studio-projects-create")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
  });

  test("primary nav exposes Studio and create project", async ({ page }) => {
    await page.goto("/studio");
    const rail = page.getByTestId("utility-rail");
    await expect(rail.getByTestId("rail-nav-studio-projects")).toBeVisible();
    await expect(rail.getByTestId("rail-nav-studio-create-project")).toBeVisible();
    await expect(rail.getByTestId("rail-d1-workspace")).toHaveAttribute(
      "title",
      /historique/i,
    );
  });
});


```

---

## 22. Focus Delta AMEND (tracked paths overlapping AMEND)

```
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 0fbfcf1..00d4058 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -175,11 +175,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(
       screen.getByText(/entrée de qualification uniquement/i),
     ).toBeVisible();
-    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
-    expect(
-      screen.getAllByText("PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE").length,
-    ).toBeGreaterThan(0);
-    expect(screen.getAllByText(/AGENT DISABLED/).length).toBeGreaterThan(0);
+    expect(screen.getAllByText("Environnement local").length).toBeGreaterThan(0);
+    expect(screen.getAllByText("Processus borné").length).toBeGreaterThan(0);
+    expect(screen.getAllByText(/Non prêt produit/).length).toBeGreaterThan(0);
     expect(screen.queryByLabelText(/email|organisation|token/i)).toBeNull();
     await waitFor(() =>
       expect(screen.getByTestId("idempotency-key")).not.toHaveTextContent(
@@ -326,7 +324,7 @@ describe("V2-A2 Create Project UI", () => {
       "Création locale en cours",
     );
     resolveAction(SUCCESS_RESULT);
-    await screen.findByRole("heading", { name: "Projet créé localement" });
+    await screen.findByRole("heading", { name: "Projet créé" });
   });

   it("maps runtime INPUT_INVALID to its UI field", async () => {
@@ -382,17 +380,13 @@ describe("V2-A2 Create Project UI", () => {
     await user.click(screen.getByTestId("create-project-submit"));

     expect(
-      await screen.findByRole("heading", { name: "Projet créé localement" }),
+      await screen.findByRole("heading", { name: "Projet créé" }),
     ).toBeVisible();
-    expect(screen.getByText("prj:v2-a2-1")).toBeVisible();
-    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("false").length).toBeGreaterThan(0);
+    expect(screen.getByText("prj:v2-a2-1")).toBeInTheDocument();
+    expect(screen.getAllByText("CRÉÉ").length).toBeGreaterThan(0);
     expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
     expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
-    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
-    expect(
-      screen.getAllByText("PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE").length,
-    ).toBeGreaterThan(0);
+    expect(screen.getAllByText(/Non prêt produit|NON PRÊT/).length).toBeGreaterThan(0);
     expect(
       screen.getByRole("link", { name: "Ouvrir l’espace de travail" }),
     ).toHaveAttribute("href", "/studio/projects/prj%3Av2-a2-1");
@@ -487,7 +481,7 @@ describe("V2-A2 Create Project UI", () => {
       screen.queryByRole("navigation", { name: "Navigation cycle" }),
     ).toBeNull();
     expect(
-      screen.getByLabelText("Créer un projet Studio"),
+      screen.getByLabelText("Créer projet"),
     ).toHaveAttribute("href", "/studio/projects/new");
   });

diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 58871d7..e1110db 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -19,6 +19,11 @@ import type {
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
 import type { F3M3PreparePayload } from "./f3/prepareM3FromDecision";
+import {
+  G_UX_08_AMEND_DEFERRED_MESSAGE,
+  attemptStatusUserLabel,
+  deriveRecommendationFreshness,
+} from "./presentationLabels";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -73,7 +78,21 @@ function modeFromResult(result: {
   return "MODE À CONFIRMER";
 }

-export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
+export type ProjectAssistantPanelProps = {
+  projectId: string;
+  /** Fired after a successful durable Product mutation (not process-local). */
+  onDurableFactsChanged?: () => void;
+  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for parent History. */
+  onDurableEvidenceOutcomeChange?: (
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) => void;
+};
+
+export function ProjectAssistantPanel({
+  projectId,
+  onDurableFactsChanged,
+  onDurableEvidenceOutcomeChange,
+}: ProjectAssistantPanelProps) {
   const inputId = useId();
   const liveRegionId = useId();
   const [messages, setMessages] = useState<UiMessage[]>([]);
@@ -83,7 +102,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [error, setError] = useState<string | null>(null);
   const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
-    "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite.",
+    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
@@ -101,6 +120,43 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
+  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
+  const onDurableEvidenceOutcomeChangeRef = useRef(
+    onDurableEvidenceOutcomeChange,
+  );
+  onDurableFactsChangedRef.current = onDurableFactsChanged;
+  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;
+
+  function notifyDurableFactsChanged() {
+    onDurableFactsChangedRef.current?.();
+  }
+
+  function applyDurableEvidenceOutcome(
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) {
+    setDurableEvidenceOutcome(outcome);
+    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
+  }
+
+  async function refreshDurableEvidenceOutcome() {
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId,
+    });
+    if (result.ok) {
+      applyDurableEvidenceOutcome(result);
+      setDurableRehydrateError(null);
+      return;
+    }
+    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
+      applyDurableEvidenceOutcome(null);
+      setDurableRehydrateError(null);
+      return;
+    }
+    applyDurableEvidenceOutcome(null);
+    setDurableRehydrateError(
+      "Impossible de relire le dernier outcome durable.",
+    );
+  }

   useEffect(() => {
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
@@ -108,23 +164,23 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {

   useEffect(() => {
     let cancelled = false;
-    setDurableEvidenceOutcome(null);
+    applyDurableEvidenceOutcome(null);
     setDurableRehydrateError(null);

     void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
       (result) => {
         if (cancelled) return;
         if (result.ok) {
-          setDurableEvidenceOutcome(result);
+          applyDurableEvidenceOutcome(result);
           setDurableRehydrateError(null);
           return;
         }
         if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
-          setDurableEvidenceOutcome(null);
+          applyDurableEvidenceOutcome(null);
           setDurableRehydrateError(null);
           return;
         }
-        setDurableEvidenceOutcome(null);
+        applyDurableEvidenceOutcome(null);
         setDurableRehydrateError(
           "Impossible de relire le dernier outcome durable.",
         );
@@ -134,6 +190,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     return () => {
       cancelled = true;
     };
+    // Parent callbacks are mirrored via refs; projectId is the durable read key.
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount/projectId only
   }, [projectId]);

   useEffect(() => {
@@ -258,10 +316,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         {
           id: nextId("assistant"),
           role: "assistant",
-          content: result.text,
+          content:
+            kind === "AMEND"
+              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
+              : result.text,
         },
       ]);
       setUiState("ANSWERED");
+      // HumanDecision is durable Product write — refresh LPS / History projection.
+      notifyDurableFactsChanged();
     });
   }

@@ -283,11 +346,16 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     !busy &&
     !blocked;

+  const recommendationFreshness = deriveRecommendationFreshness({
+    hasSessionRecommendation: Boolean(f3Execute?.recommendation),
+    hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+    sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
+    durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
+  });
+
+  // Freshness is presentation-only. Do not invent authority via canConfirmF3.
   const canConfirmF3 =
-    Boolean(f3Prepare) &&
-    !f3Execute &&
-    !busy &&
-    !blocked;
+    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

   function prepareF3() {
     if (!canPrepareF3 || !activeProposal || !f2?.decision) return;
@@ -320,6 +388,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // ExecutionContract prepare is durable Product write.
+      notifyDurableFactsChanged();
     });
   }

@@ -352,6 +422,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // M3 ExecutionContract is durable Product write.
+      notifyDurableFactsChanged();
     });
   }
   function confirmAndExecuteF3() {
@@ -385,6 +457,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // Attempt / Evidence / ReviewBundle / LPS refs are durable — refresh both.
+      notifyDurableFactsChanged();
+      void refreshDurableEvidenceOutcome();
     });
   }

@@ -398,15 +473,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
-        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
+        <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1+F2+F3 fixture : analyse · conversation · lecture · qualification ·
-        proposition · gate humain · prepare/confirm fixture. Pas d&apos;exécution Cursor REAL,
-        pas d&apos;écriture Git produit, pas de destination OPS1.
+        Parcours produit : qualification · proposition · décision humaine ·
+        contrat / confirmation · tentative · recommandation. Aucune exécution
+        réelle automatique.
       </p>

       <div
@@ -474,10 +549,17 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-qualification-title"
         >
           <h3 id="f2-qualification-title" className={styles.cardTitle}>
-            RECOMMANDATION
+            F4 · Qualification / Proposition
           </h3>
+          <p className={styles.cardMeta} data-testid="f2-recommendation-freshness">
+            {f2.qualification.recommendationLabel} ·{" "}
+            {deriveRecommendationFreshness({
+              hasSessionRecommendation: true,
+              hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+            }).label}
+          </p>
           <p className={styles.cardMeta}>
-            {f2.qualification.recommendationLabel}
+            Une recommandation n&apos;est pas une décision humaine.
           </p>
           <dl className={styles.cardDl}>
             <div>
@@ -492,7 +574,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             </div>
             {f2.qualification.cycleInstanceId ? (
               <div>
-                <dt>CycleInstance</dt>
+                <dt>Cycle lié</dt>
                 <dd data-testid="f2-cycle-instance">
                   {f2.qualification.cycleInstanceId}
                   {f2.qualification.cycleStatus
@@ -501,29 +583,34 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
                 </dd>
               </div>
             ) : null}
-            {f2.qualification.ckcResolutionRef ? (
-              <div>
-                <dt>CKC ref</dt>
-                <dd data-testid="f2-ckc-ref">
-                  {f2.qualification.ckcResolutionRef}
-                </dd>
-              </div>
-            ) : null}
             <div>
-              <dt>Rationale</dt>
+              <dt>Justification</dt>
               <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
             </div>
-            <div>
-              <dt>Provenance</dt>
-              <dd data-testid="f2-qualification-provenance">
-                catalogue {f2.qualification.catalogVersion} ·{" "}
-                {f2.qualification.detailedStatus}
-                {f2.qualification.capitalizationViaCycleTypeId
-                  ? " · capitalisation via cycleType"
-                  : ""}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Diagnostics techniques</summary>
+            <dl className={styles.cardDl}>
+              {f2.qualification.ckcResolutionRef ? (
+                <div>
+                  <dt>Réf. résolution</dt>
+                  <dd data-testid="f2-ckc-ref">
+                    {f2.qualification.ckcResolutionRef}
+                  </dd>
+                </div>
+              ) : null}
+              <div>
+                <dt>Provenance</dt>
+                <dd data-testid="f2-qualification-provenance">
+                  catalogue {f2.qualification.catalogVersion} ·{" "}
+                  {f2.qualification.detailedStatus}
+                  {f2.qualification.capitalizationViaCycleTypeId
+                    ? " · capitalisation via cycleType"
+                    : ""}
+                </dd>
+              </div>
+            </dl>
+          </details>
         </section>
       ) : null}

@@ -534,11 +621,19 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-proposal-title"
         >
           <h3 id="f2-proposal-title" className={styles.cardTitle}>
-            PROPOSITION
+            Proposition
           </h3>
           <p className={styles.cardMeta} data-testid="f2-proposal-id">
-            {activeProposal.proposalId} · statut {activeProposal.status}
+            Statut {activeProposal.status}
           </p>
+          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f2-amend-deferred-notice"
+            >
+              {G_UX_08_AMEND_DEFERRED_MESSAGE}
+            </p>
+          ) : null}
           <dl className={styles.cardDl}>
             <div>
               <dt>Demande reformulée</dt>
@@ -601,10 +696,10 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-gate-title"
         >
           <h3 id="f2-gate-title" className={styles.cardTitle}>
-            DÉCISION REQUISE
+            F5 · Décision humaine
           </h3>
           <p className={styles.cardMeta}>
-            Décision humaine explicite liée à {activeProposal?.proposalId}
+            Décision humaine explicite — distincte de la recommandation.
           </p>
           <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
             Réserves (obligatoires pour GO WITH RESERVES)
@@ -648,7 +743,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-decision"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <h3 className={styles.cardTitle}>F5 · Décision enregistrée</h3>
           <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
           <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
           {f2.decision.readyForNextGatedStep ? (
@@ -668,15 +763,22 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-prepare"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — PREPARE</h3>
+          <h3 className={styles.cardTitle}>F6 · Préparer le contrat</h3>
           <p className={styles.cardMeta}>
-            Le GO F2 autorise uniquement la préparation d&apos;un contrat fixture.
+            Le GO autorise uniquement la préparation d&apos;un contrat. Confirmation
+            process-local — non durable.
           </p>
           <div className={styles.f3Labels} data-testid="f3-prepare-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            <StatusPill tone="muted">Confirmation non durable</StatusPill>
           </div>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <p className={styles.cardMeta}>
+              Démonstration locale · exécution réelle bloquée · aucune écriture
+              Git produit.
+            </p>
+          </details>
           <button
             type="button"
             className={styles.f3Button}
@@ -684,7 +786,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canPrepareF3}
             onClick={() => prepareF3()}
           >
-            Préparer l&apos;exécution fixture
+            Préparer le contrat d&apos;exécution
           </button>
           <button
             type="button"
@@ -693,7 +795,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canPrepareM3}
             onClick={() => prepareM3()}
           >
-            M3 PREPARE (decision durable)
+            Préparer le contrat depuis la décision durable
           </button>
         </section>
       ) : null}
@@ -703,30 +805,32 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-m3-prepare"
         >
-          <h3 className={styles.cardTitle}>M3 PREPARE — CURSOR PREPARE-ONLY</h3>
+          <h3 className={styles.cardTitle}>F6 · Contrat préparé (décision durable)</h3>
           <div className={styles.f3Labels}>
-            <StatusPill tone="muted">NO CURSOR REAL</StatusPill>
-            <StatusPill tone="muted">NO ATTEMPT</StatusPill>
-            <StatusPill tone="muted">GATE D NOT_CONSUMED</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            <StatusPill tone="muted">Tentative non créée</StatusPill>
           </div>
-          <dl className={styles.cardDl}>
-            <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-m3-contract-id">
-                {f3M3Prepare.contract.executionContractId}
-              </dd>
-            </div>
-            <div>
-              <dt>Fingerprint</dt>
-              <dd data-testid="f3-m3-fingerprint">
-                {f3M3Prepare.contract.semanticFingerprint}
-              </dd>
-            </div>
-            <div>
-              <dt>Action</dt>
-              <dd>{f3M3Prepare.contract.action}</dd>
-            </div>
-          </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd data-testid="f3-m3-contract-id">
+                  {f3M3Prepare.contract.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Empreinte sémantique</dt>
+                <dd data-testid="f3-m3-fingerprint">
+                  {f3M3Prepare.contract.semanticFingerprint}
+                </dd>
+              </div>
+              <div>
+                <dt>Action</dt>
+                <dd>{f3M3Prepare.contract.action}</dd>
+              </div>
+            </dl>
+          </details>
         </section>
       ) : null}

@@ -735,36 +839,48 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-contract"
         >
-          <h3 className={styles.cardTitle}>CONTRAT FIXTURE PRÉPARÉ</h3>
+          <h3 className={styles.cardTitle}>F6 · Contrat préparé</h3>
           <div className={styles.f3Labels} data-testid="f3-contract-labels">
-            <StatusPill tone="blueFlush">FIXTURE</StatusPill>
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
+            <StatusPill tone="blueFlush">Contrat</StatusPill>
+            <StatusPill tone="muted">Confirmation process-local</StatusPill>
+            <StatusPill tone="orange">Exécution réelle bloquée</StatusPill>
           </div>
-          <dl className={styles.cardDl}>
-            <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-contract-id">
-                {f3Prepare.contract.executionContractId}
-              </dd>
-            </div>
-            <div>
-              <dt>Version</dt>
-              <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
-            </div>
-            <div>
-              <dt>Status</dt>
-              <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
-            </div>
-            <div>
-              <dt>Mode</dt>
-              <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
-            </div>
-          </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd data-testid="f3-contract-id">
+                  {f3Prepare.contract.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
+              </div>
+              <div>
+                <dt>Statut</dt>
+                <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
+              </div>
+              <div>
+                <dt>Mode</dt>
+                <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
+              </div>
+            </dl>
+          </details>
           <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
-            attemptCreated: false — AUCUNE ATTEMPT
+            Tentative non créée — confirmation process-local (non durable).
           </p>
+          {recommendationFreshness.status === "stale" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f3-stale-recommendation-notice"
+            >
+              Recommandation périmée — ce n&apos;est pas une décision humaine et
+              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
+              reste gouvernée par le contrat et la décision déjà enregistrés.
+            </p>
+          ) : null}
           <button
             type="button"
             className={styles.f3Button}
@@ -772,7 +888,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canConfirmF3}
             onClick={() => confirmAndExecuteF3()}
           >
-            Confirmer et exécuter la fixture
+            Confirmer et exécuter (process-local)
           </button>
         </section>
       ) : null}
@@ -783,31 +899,42 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-f3-execute"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
+          <h3 className={styles.cardTitle}>F7 · Tentative / F8 · Recommandation</h3>
           <div className={styles.f3Labels} data-testid="f3-execute-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              Recommandation — pas une décision
+            </StatusPill>
+            <StatusPill
+              tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
+            >
+              {recommendationFreshness.label}
             </StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
           </div>

           <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Attempt</h4>
-            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
-            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
-            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
-            <p data-testid="f3-attempt-external-effects">
-              externalEffects: {String(f3Execute.attempt.externalEffects)}
-            </p>
-            <p data-testid="f3-attempt-launch-count">
-              launchCount: {f3Execute.attempt.launchCount}
-            </p>
-            <p data-testid="f3-attempt-reused">
-              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
-            </p>
+            <h4 className={styles.cardTitle}>Tentative</h4>
+            {(() => {
+              const attemptLabel = attemptStatusUserLabel(
+                f3Execute.attempt.status,
+              );
+              return (
+                <>
+                  <p data-testid="f3-attempt-status-label">
+                    {attemptLabel.label}
+                  </p>
+                  {!attemptLabel.blockedBeforeExecution ? (
+                    <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
+                  ) : (
+                    <p data-testid="f3-attempt-id-omitted">
+                      Identifiant de tentative non affiché (bloqué avant
+                      exécution).
+                    </p>
+                  )}
+                  <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
+                </>
+              );
+            })()}
           </div>

           <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
@@ -830,26 +957,28 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           </div>

           <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <h4 className={styles.cardTitle}>F8 · Recommendation</h4>
+            <p
+              className={styles.cardMeta}
+              data-testid="f3-recommendation-freshness"
+            >
+              {recommendationFreshness.label}
+            </p>
             <p data-testid="f3-recommendation-label">
               {f3Execute.recommendation.recommendationLabel}
             </p>
             <p data-testid="f3-recommendation-execution-authority">
-              executionAuthority:{" "}
+              Autorité d&apos;exécution:{" "}
               {String(f3Execute.recommendation.executionAuthority)}
             </p>
             <p data-testid="f3-recommendation-gate-consumed">
-              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
+              Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
             </p>
             <p data-testid="f3-recommendation-decision-created">
-              decisionCreated:{" "}
+              Décision créée:{" "}
               {String(f3Execute.recommendation.decisionCreated)}
             </p>
-            <p data-testid="f3-recommendation-hard-refs">
-              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
-            </p>
             <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
-            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
           </div>
         </section>
       ) : null}
@@ -871,12 +1000,18 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="durable-evidence-outcome"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>OUTCOME DURABLE — RELECTURE LPS</h3>
+          <h3 className={styles.cardTitle}>F8 · Outcome durable (relecture)</h3>
           <div className={styles.f3Labels} data-testid="durable-outcome-labels">
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              RECOMMANDATION — PAS UNE DÉCISION
+            </StatusPill>
+            <StatusPill tone="muted">
+              {deriveRecommendationFreshness({
+                hasSessionRecommendation: false,
+                hasDurableEvidenceOutcome: true,
+              }).label}
             </StatusPill>
-            <StatusPill tone="muted">LECTURE SEULE — AUCUNE EXÉCUTION</StatusPill>
+            <StatusPill tone="muted">LECTURE SEULE</StatusPill>
           </div>
           <p className={styles.cardMeta} data-testid="durable-lps-version">
             LPS v{durableEvidenceOutcome.lpsVersion}
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
index 8b26afc..0bf1b43 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
@@ -7,58 +7,62 @@ import {
 import styles from "./create-project.module.css";

 /**
- * Server component: the disclosure contract is read directly from V2-A1.
- * It must remain visible before and after the client form submits.
+ * Server component: honesty banner — product-first first level,
+ * technical runtime details secondary. Does not hide safety limits.
  */
 export function RuntimeDisclosureBanner({
   surface = "create",
 }: {
-  surface?: "create" | "workspace";
+  surface?: "create" | "workspace" | "list";
 } = {}) {
   const intro =
     surface === "workspace"
-      ? "Cette interface consulte un Project et son LPS dans le processus Node local uniquement."
-      : "Cette interface crée un Project et son LPS dans le processus Node local uniquement.";
+      ? "Cet espace consulte l’état durable du projet lorsqu’il est disponible, et rappelle ce qui reste volatil (conversation, proposition, confirmation)."
+      : surface === "list"
+        ? "Cette liste lit les projets déjà enregistrés dans cet environnement local. Elle ne crée pas de magasin parallèle."
+        : "Cette interface crée un projet localement. Conversation et confirmation restent process-local.";

   return (
     <Card variant="flush" className={styles.disclosure}>
       <div className={styles.disclosureHeader}>
         <div>
-          <h2>Mode local borné</h2>
+          <h2>Environnement local — limites honnêtes</h2>
           <p>{intro}</p>
         </div>
-        <div className={styles.pillGroup} aria-label="Statuts runtime">
-          <StatusPill tone="orangeFlush">
-            {RUNTIME_DISCLOSURES.runtimeMode}
-          </StatusPill>
-          <StatusPill tone="muted">
-            {RUNTIME_DISCLOSURES.persistence}
-          </StatusPill>
-          <StatusPill tone="muted">
-            AGENT {RUNTIME_DISCLOSURES.agentExecution}
-          </StatusPill>
+        <div className={styles.pillGroup} aria-label="Limites produit">
+          <StatusPill tone="orangeFlush">Environnement local</StatusPill>
+          <StatusPill tone="muted">Processus borné</StatusPill>
           <StatusPill tone="orange">
-            {RUNTIME_READINESS_NOT_READY.status}
+            {RUNTIME_READINESS_NOT_READY.status === "NOT_READY"
+              ? "Non prêt produit"
+              : RUNTIME_READINESS_NOT_READY.status}
           </StatusPill>
         </div>
       </div>

       <ul className={styles.disclosureList}>
         <li>
-          État métier volatil : un redémarrage ou hot reload peut perdre les
-          données.
+          Durable (quand disponible) : projet, état vivant, décisions et
+          contrats déjà enregistrés.
         </li>
-        <li>IAM {RUNTIME_DISCLOSURES.iam}.</li>
         <li>
-          PRODUCT PERSISTENCE {RUNTIME_DISCLOSURES.productPersistence}.
-        </li>
-        <li>DELIVERY {RUNTIME_DISCLOSURES.delivery}.</li>
-        <li>CUTOVER {RUNTIME_DISCLOSURES.cutover}.</li>
-        <li>
-          HARD {RUNTIME_READINESS_NOT_READY.hard} · T-A6{" "}
-          {RUNTIME_READINESS_NOT_READY.tA6} · RUN READY = false.
+          Process-local (non durable) : conversation, proposition, confirmation
+          d&apos;exécution — perdues au rechargement.
         </li>
+        <li>Aucune exécution réelle autorisée ici.</li>
       </ul>
+
+      <details className={styles.disclosureDetails}>
+        <summary>Détails techniques</summary>
+        <ul className={styles.disclosureList}>
+          <li>
+            IAM {RUNTIME_DISCLOSURES.iam} · livraison{" "}
+            {RUNTIME_DISCLOSURES.delivery} · bascule{" "}
+            {RUNTIME_DISCLOSURES.cutover}.
+          </li>
+          <li>Agent non autorisé · RUN READY = false.</li>
+        </ul>
+      </details>
     </Card>
   );
 }
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css b/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
index 18a9dae..e21b56b 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
@@ -4,6 +4,46 @@
   padding-bottom: var(--sfia-space-xl);
 }

+.intentHero {
+  display: grid;
+  gap: 8px;
+}
+
+.intentEyebrow {
+  margin: 0;
+  color: var(--sfia-blue);
+  font-size: var(--sfia-meta-size);
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+}
+
+.intentTitle {
+  margin: 0;
+  color: var(--sfia-ink);
+  font-size: 24px;
+  line-height: 1.25;
+}
+
+.intentLead {
+  margin: 0;
+  max-width: 62ch;
+  color: var(--sfia-muted);
+  font-size: 14px;
+  line-height: var(--sfia-line-body);
+}
+
+.diagnosticsDetails {
+  margin-top: var(--sfia-space-md);
+}
+
+.diagnosticsDetails summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .disclosure {
   display: grid;
   gap: var(--sfia-space-md);
@@ -57,6 +97,17 @@
   line-height: var(--sfia-line-body);
 }

+.disclosureDetails {
+  margin-top: 4px;
+}
+
+.disclosureDetails summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .formCard,
 .resultCard {
   display: grid;

```

---

## 23. Full Tracked Candidate Diff

```
diff --git a/projects/sfia-studio/app/__tests__/increment-a.test.tsx b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
index 05fbad0..f2b7f42 100644
--- a/projects/sfia-studio/app/__tests__/increment-a.test.tsx
+++ b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
@@ -50,8 +50,9 @@ beforeEach(() => {
 });

 describe("Increment A — mapping & fixtures", () => {
-  it("keeps four POC routes and exposes the V2-A2 project route in the rail", () => {
-    expect(STUDIO_ROUTES).toHaveLength(5);
+  it("keeps four POC routes and exposes Studio primary product routes in the rail", () => {
+    expect(STUDIO_ROUTES.length).toBeGreaterThanOrEqual(6);
+    expect(STUDIO_ROUTES.map((item) => item.route)).toContain("/studio");
     expect(STUDIO_ROUTES.map((item) => item.route)).toContain(
       "/studio/projects/new",
     );
diff --git a/projects/sfia-studio/app/__tests__/increment-b.test.tsx b/projects/sfia-studio/app/__tests__/increment-b.test.tsx
index 343f764..b59832c 100644
--- a/projects/sfia-studio/app/__tests__/increment-b.test.tsx
+++ b/projects/sfia-studio/app/__tests__/increment-b.test.tsx
@@ -94,8 +94,9 @@ describe("Increment B — adapter mapping (no authority)", () => {
     ).toBe("probe-invalid-head");
   });

-  it("keeps four POC routes while adding one real Studio rail route", () => {
-    expect(STUDIO_ROUTES).toHaveLength(5);
+  it("keeps four POC routes while adding Studio primary product rail routes", () => {
+    expect(STUDIO_ROUTES.length).toBeGreaterThanOrEqual(6);
+    expect(STUDIO_ROUTES.map((item) => item.route)).toContain("/studio");
     expect(STUDIO_ROUTES.map((item) => item.route)).toContain(
       "/studio/projects/new",
     );
diff --git a/projects/sfia-studio/app/__tests__/navigation.test.tsx b/projects/sfia-studio/app/__tests__/navigation.test.tsx
index e0dc0e8..5088408 100644
--- a/projects/sfia-studio/app/__tests__/navigation.test.tsx
+++ b/projects/sfia-studio/app/__tests__/navigation.test.tsx
@@ -1,7 +1,6 @@
 import { cleanup, render, screen, within } from "@testing-library/react";
 import { afterEach, describe, expect, it, vi } from "vitest";
 import { UtilityRail } from "@/components/shell/UtilityRail";
-import { STUDIO_ROUTES } from "@/lib/navigation";

 vi.mock("next/link", () => ({
   default: ({
@@ -21,27 +20,35 @@ vi.mock("next/link", () => ({
 afterEach(cleanup);

 describe("navigation links", () => {
-  it("exposes four primary routes on the rail", () => {
-    render(<UtilityRail variant="flush" activeRoute="/synthese" />);
-
-    for (const route of STUDIO_ROUTES) {
-      expect(screen.getByLabelText(route.label)).toHaveAttribute(
-        "href",
-        route.route,
-      );
-    }
+  it("exposes primary and historical routes on the rail", () => {
+    render(<UtilityRail variant="flush" activeRoute="/studio" />);

+    expect(screen.getByLabelText("Studio / Projets")).toHaveAttribute(
+      "href",
+      "/studio",
+    );
+    expect(screen.getByLabelText("Créer projet")).toHaveAttribute(
+      "href",
+      "/studio/projects/new",
+    );
+    expect(screen.getByLabelText("Vue synthèse (historique)")).toHaveAttribute(
+      "href",
+      "/synthese",
+    );
     expect(screen.getByLabelText("Paramètres (désactivé)")).toBeDisabled();
+    expect(
+      screen.getByTestId("rail-d1-workspace").getAttribute("title") || "",
+    ).toMatch(/historique/i);
   });
 });

 describe("keyboard focus smoke", () => {
   it("renders focusable navigation links", () => {
     const { container } = render(
-      <UtilityRail variant="floating" activeRoute="/nouvelle-demande" />,
+      <UtilityRail variant="floating" activeRoute="/studio" />,
     );
     const nav = within(container).getByRole("navigation");
-    const homeLink = within(nav).getByLabelText("Vue synthèse");
+    const homeLink = within(nav).getByLabelText("Studio / Projets");
     homeLink.focus();
     expect(homeLink).toHaveFocus();
   });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index f7bd36b..1b4fa4b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -260,8 +260,9 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-no-cursor")).toBeInTheDocument();
     expect(screen.getByTestId("project-assistant-no-write")).toBeInTheDocument();
     expect(screen.getByTestId("workspace-primary-assistant-hint")).toBeVisible();
-    expect(screen.getByTestId("workspace-continue-pilotage")).toHaveTextContent(
-      /temporaire/i,
+    expect(screen.getByTestId("workspace-back-to-studio")).toHaveAttribute(
+      "href",
+      "/studio",
     );

     fireEvent.change(screen.getByTestId("project-assistant-input"), {
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 9600439..400dbfd 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -76,6 +76,11 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     const allowed = new Set([
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
+      "features/studio-projects/LivingProjectStatePanel.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/ProjectHistoryPanel.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/ProjectPrincipalClient.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
@@ -93,9 +98,11 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {

   it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
     const roots = [
+      path.join(APP_ROOT, "app/studio"),
       path.join(APP_ROOT, "app/studio/projects/new"),
       path.join(APP_ROOT, "app/studio/projects/[id]"),
       path.join(APP_ROOT, "features/vertical-slice-ui"),
+      path.join(APP_ROOT, "features/studio-projects"),
     ];
     const forbidden =
       /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 0fbfcf1..00d4058 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -175,11 +175,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(
       screen.getByText(/entrée de qualification uniquement/i),
     ).toBeVisible();
-    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
-    expect(
-      screen.getAllByText("PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE").length,
-    ).toBeGreaterThan(0);
-    expect(screen.getAllByText(/AGENT DISABLED/).length).toBeGreaterThan(0);
+    expect(screen.getAllByText("Environnement local").length).toBeGreaterThan(0);
+    expect(screen.getAllByText("Processus borné").length).toBeGreaterThan(0);
+    expect(screen.getAllByText(/Non prêt produit/).length).toBeGreaterThan(0);
     expect(screen.queryByLabelText(/email|organisation|token/i)).toBeNull();
     await waitFor(() =>
       expect(screen.getByTestId("idempotency-key")).not.toHaveTextContent(
@@ -326,7 +324,7 @@ describe("V2-A2 Create Project UI", () => {
       "Création locale en cours",
     );
     resolveAction(SUCCESS_RESULT);
-    await screen.findByRole("heading", { name: "Projet créé localement" });
+    await screen.findByRole("heading", { name: "Projet créé" });
   });

   it("maps runtime INPUT_INVALID to its UI field", async () => {
@@ -382,17 +380,13 @@ describe("V2-A2 Create Project UI", () => {
     await user.click(screen.getByTestId("create-project-submit"));

     expect(
-      await screen.findByRole("heading", { name: "Projet créé localement" }),
+      await screen.findByRole("heading", { name: "Projet créé" }),
     ).toBeVisible();
-    expect(screen.getByText("prj:v2-a2-1")).toBeVisible();
-    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("false").length).toBeGreaterThan(0);
+    expect(screen.getByText("prj:v2-a2-1")).toBeInTheDocument();
+    expect(screen.getAllByText("CRÉÉ").length).toBeGreaterThan(0);
     expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
     expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
-    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
-    expect(
-      screen.getAllByText("PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE").length,
-    ).toBeGreaterThan(0);
+    expect(screen.getAllByText(/Non prêt produit|NON PRÊT/).length).toBeGreaterThan(0);
     expect(
       screen.getByRole("link", { name: "Ouvrir l’espace de travail" }),
     ).toHaveAttribute("href", "/studio/projects/prj%3Av2-a2-1");
@@ -487,7 +481,7 @@ describe("V2-A2 Create Project UI", () => {
       screen.queryByRole("navigation", { name: "Navigation cycle" }),
     ).toBeNull();
     expect(
-      screen.getByLabelText("Créer un projet Studio"),
+      screen.getByLabelText("Créer projet"),
     ).toHaveAttribute("href", "/studio/projects/new");
   });

diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index 7923285..d83a9ab 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -144,33 +144,24 @@ describe("V2-A3 Project Workspace UI", () => {
     );

     expect(
-      screen.getByRole("heading", { name: "Espace de travail projet" }),
+      screen.getByRole("heading", { name: "État du projet" }),
     ).toBeVisible();
     expect(screen.getByTestId("project-workspace-projection")).toBeVisible();
-    expect(screen.getByText("prj:v2-a3-1")).toBeVisible();
+    expect(screen.getByText("prj:v2-a3-1")).toBeInTheDocument();
     expect(screen.getByText("Projet V2-A3")).toBeVisible();
-    expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
-    expect(screen.getByText("lps:v2-a3-1")).toBeVisible();
-    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
-    expect(
-      screen.getAllByText("PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE").length,
-    ).toBeGreaterThan(0);
-    expect(screen.getByText(/AGENT DISABLED/)).toBeVisible();
+    expect(screen.getByText(/pkg:studio-v3-oa/)).toBeInTheDocument();
+    expect(screen.getByText("lps:v2-a3-1")).toBeInTheDocument();
+    expect(screen.getAllByText("PROJET").length).toBeGreaterThan(0);
+    expect(screen.getAllByText("NON PRÊT").length).toBeGreaterThan(0);
     expect(
       within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),
     ).toHaveLength(2);
-    const continuePilotage = screen.getByTestId("workspace-continue-pilotage");
-    expect(continuePilotage).toBeVisible();
-    expect(continuePilotage).toHaveAttribute(
-      "href",
-      `/ops1/nouvelle-demande?projectId=${encodeURIComponent("prj:v2-a3-1")}`,
-    );
-    expect(continuePilotage).toHaveTextContent(/temporaire/i);
     expect(
       screen.getByTestId("workspace-primary-assistant-hint"),
     ).toBeVisible();
+    expect(
+      screen.getByRole("link", { name: "Retour aux projets" }),
+    ).toHaveAttribute("href", "/studio");
     expect(
       screen.getByRole("link", { name: "Créer un autre projet" }),
     ).toHaveAttribute("href", "/studio/projects/new");
@@ -201,14 +192,14 @@ describe("V2-A3 Project Workspace UI", () => {
     expect(screen.getByTestId("project-workspace-missing")).toBeVisible();
     expect(
       screen.getByRole("heading", {
-        name: "Projet introuvable dans ce processus",
+        name: "Projet introuvable",
       }),
     ).toBeVisible();
     expect(screen.getByText("prj:missing")).toBeVisible();
     expect(screen.getByText("PROJECT_NOT_FOUND")).toBeVisible();
     expect(
-      screen.getByRole("link", { name: "Retour à la création" }),
-    ).toHaveAttribute("href", "/studio/projects/new");
+      screen.getByRole("link", { name: "Retour aux projets" }),
+    ).toHaveAttribute("href", "/studio");
   });

   it("keeps workspace disclosures and shell defaults for V2-A3", async () => {
@@ -244,7 +235,9 @@ describe("V2-A3 Project Workspace UI", () => {
       </StudioShell>,
     );

-    expect(screen.getByText(/consulte un Project et son LPS/i)).toBeVisible();
+    expect(
+      screen.getByText(/état durable du projet lorsqu’il est disponible/i),
+    ).toBeVisible();
     expect(screen.queryByTestId("topbar-tabs")).toBeNull();
     expect(
       within(screen.getByTestId("topbar")).queryByRole("link", {
diff --git a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
index 3c19277..fdeb4ab 100644
--- a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
+++ b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
@@ -1,8 +1,7 @@
 import { StudioShell } from "@/components/shell/StudioShell";
-import { ProjectAssistantPanel } from "@/features/project-assistant";
-import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
+import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";
 import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
-import styles from "@/features/vertical-slice-ui/project-workspace.module.css";
+import styles from "@/features/studio-projects/project-principal.module.css";
 import type { StudioShellRoute } from "@/lib/navigation";

 interface ProjectWorkspacePageProps {
@@ -23,25 +22,16 @@ export default async function ProjectWorkspacePage({
       activeRoute={activeRoute}
       title="Espace projet"
       showTabs={false}
-      primaryAction={null}
+      hideCopilot
+      primaryAction={{ label: "Projets", href: "/studio" }}
       pills={[
-        { label: "LOCAL_PROCESS", tone: "orange" },
-        { label: "NOT_READY", tone: "orange" },
+        { label: "MODE LOCAL", tone: "orange" },
+        { label: "NON PRÊT", tone: "orange" },
       ]}
-      copilot={{
-        variant: "flush",
-        name: "Nora · Assistant projet",
-        subtitle: "Analyse · conversation · lecture seule",
-        avatarTone: "purple",
-        levelPill: "F1 · Aucune exécution",
-        summary:
-          "Assistant contextualisé au Project/LPS — sans OPS1, sans Cursor, sans écriture.",
-        interactiveContent: <ProjectAssistantPanel projectId={projectId} />,
-      }}
     >
-      <div className={styles.page}>
+      <div className={styles.root}>
         <RuntimeDisclosureBanner surface="workspace" />
-        <ProjectWorkspaceClient projectId={projectId} />
+        <ProjectPrincipalClient projectId={projectId} />
       </div>
     </StudioShell>
   );
diff --git a/projects/sfia-studio/app/app/studio/projects/new/page.tsx b/projects/sfia-studio/app/app/studio/projects/new/page.tsx
index 0ef84e3..340b1e8 100644
--- a/projects/sfia-studio/app/app/studio/projects/new/page.tsx
+++ b/projects/sfia-studio/app/app/studio/projects/new/page.tsx
@@ -10,31 +10,24 @@ export default function CreateStudioProjectPage() {
       activeRoute="/studio/projects/new"
       title="Créer un projet"
       showTabs={false}
-      primaryAction={null}
+      hideCopilot
+      primaryAction={{ label: "Projets", href: "/studio" }}
       pills={[
-        { label: "LOCAL_PROCESS", tone: "orange" },
-        { label: "NOT_READY", tone: "orange" },
+        { label: "MODE LOCAL", tone: "orange" },
+        { label: "NON PRÊT", tone: "orange" },
       ]}
-      copilot={{
-        variant: "flush",
-        name: "Nora · Project Copilot",
-        subtitle: "Lecture seule · aucune autorité",
-        avatarTone: "purple",
-        levelPill: "Aucune décision",
-        summary:
-          "Je rappelle les limites du mode local. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
-        watchLabel: "GARDE-FOUS",
-        watchItems: [
-          { label: "État process-local volatil", dotColor: "#faa629" },
-          { label: "IAM non sélectionné", dotColor: "#7a4df5" },
-          { label: "Agent réel désactivé", dotColor: "#51607a" },
-        ],
-        riskTitle: "MODE LOCAL UNIQUEMENT",
-        riskText:
-          "Un redémarrage ou hot reload peut perdre le Project et son LPS. Aucune persistance produit, delivery ou cutover.",
-      }}
     >
       <div className={styles.page}>
+        <header className={styles.intentHero}>
+          <p className={styles.intentEyebrow}>Intention</p>
+          <h2 className={styles.intentTitle}>
+            Décrivez le besoin avant la technique
+          </h2>
+          <p className={styles.intentLead}>
+            La conversation de qualification démarre après création. Les champs
+            ci-dessous capturent l&apos;intention — pas un cockpit technique.
+          </p>
+        </header>
         <RuntimeDisclosureBanner />
         <CreateProjectForm />
       </div>
diff --git a/projects/sfia-studio/app/components/shell/StudioShell.tsx b/projects/sfia-studio/app/components/shell/StudioShell.tsx
index 578cb3e..1ecfd2b 100644
--- a/projects/sfia-studio/app/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio/app/components/shell/StudioShell.tsx
@@ -4,10 +4,7 @@ import {
   type TopbarPrimaryAction,
 } from "./Topbar";
 import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
-import type {
-  StudioRoute,
-  StudioShellRoute,
-} from "@/lib/navigation";
+import type { StudioShellRoute } from "@/lib/navigation";
 import shellStyles from "@/styles/shell.module.css";

 interface TopbarPill {
@@ -22,12 +19,14 @@ interface StudioShellProps {
   title: string;
   pills?: TopbarPill[];
   children: React.ReactNode;
-  copilot: CopilotProps;
+  copilot?: CopilotProps | null;
   showTabs?: boolean;
   /**
    * `undefined` preserves the historical CTA; `null` hides it.
    */
   primaryAction?: TopbarPrimaryAction | null;
+  /** When true, canvas uses full width (no copilot column). */
+  hideCopilot?: boolean;
 }

 export function StudioShell({
@@ -39,18 +38,17 @@ export function StudioShell({
   copilot,
   showTabs,
   primaryAction,
+  hideCopilot = false,
 }: StudioShellProps) {
   const isFloating = variant === "floating";
+  const showCopilot = !hideCopilot && copilot != null;

   if (isFloating) {
     return (
       <div className={shellStyles.pageFloating} data-testid="studio-shell">
         <div className={shellStyles.brandAccent} aria-hidden="true" />
         <div className={shellStyles.railFloating}>
-          <UtilityRail
-            variant="floating"
-            activeRoute={activeRoute as StudioRoute}
-          />
+          <UtilityRail variant="floating" activeRoute={activeRoute} />
         </div>
         <div className={shellStyles.workspaceFloating}>
           <Topbar
@@ -65,9 +63,11 @@ export function StudioShell({
             {children}
           </main>
         </div>
-        <div className={shellStyles.copilotFloating}>
-          <CopilotPanel {...copilot} variant="floating" />
-        </div>
+        {showCopilot ? (
+          <div className={shellStyles.copilotFloating}>
+            <CopilotPanel {...copilot} variant="floating" />
+          </div>
+        ) : null}
       </div>
     );
   }
@@ -76,10 +76,7 @@ export function StudioShell({
     <div className={shellStyles.pageFlush} data-testid="studio-shell">
       <div className={shellStyles.brandAccent} aria-hidden="true" />
       <div className={shellStyles.railFlush}>
-        <UtilityRail
-          variant="flush"
-          activeRoute={activeRoute as StudioRoute}
-        />
+        <UtilityRail variant="flush" activeRoute={activeRoute} />
       </div>
       <div className={shellStyles.mainFlush}>
         <Topbar
@@ -92,15 +89,21 @@ export function StudioShell({
         />
         <div className={shellStyles.bodyFlush}>
           <main
-            className={shellStyles.canvasFlush}
+            className={
+              showCopilot
+                ? shellStyles.canvasFlush
+                : shellStyles.canvasFlushWide
+            }
             id="main-content"
             aria-label="Contenu principal"
           >
             {children}
           </main>
-          <div className={shellStyles.copilotFlush}>
-            <CopilotPanel {...copilot} variant="flush" />
-          </div>
+          {showCopilot ? (
+            <div className={shellStyles.copilotFlush}>
+              <CopilotPanel {...copilot} variant="flush" />
+            </div>
+          ) : null}
         </div>
       </div>
     </div>
diff --git a/projects/sfia-studio/app/components/shell/UtilityRail.tsx b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
index 983aa7d..f848d0a 100644
--- a/projects/sfia-studio/app/components/shell/UtilityRail.tsx
+++ b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
@@ -1,17 +1,23 @@
 "use client";

 import Link from "next/link";
-import { STUDIO_ROUTES, type StudioRoute } from "@/lib/navigation";
+import {
+  STUDIO_ROUTES,
+  currentProjectIdFromRoute,
+  isActiveRoute,
+  type StudioShellRoute,
+} from "@/lib/navigation";
 import styles from "./utility-rail.module.css";

 interface UtilityRailProps {
   variant: "floating" | "flush";
-  activeRoute: StudioRoute;
+  activeRoute: StudioShellRoute;
 }

 export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
   const isFloating = variant === "floating";
   const railClass = isFloating ? styles.floating : styles.flush;
+  const currentProjectId = currentProjectIdFromRoute(activeRoute);

   return (
     <nav
@@ -20,7 +26,7 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
       data-testid="utility-rail"
     >
       <Link
-        href="/synthese"
+        href="/studio"
         className={isFloating ? styles.brand : styles.brandFlush}
         aria-label="SFIA Studio"
       >
@@ -28,7 +34,7 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
       </Link>

       {STUDIO_ROUTES.map((item) => {
-        const active = activeRoute === item.route;
+        const active = isActiveRoute(activeRoute, item.route);
         const itemClass = [
           isFloating ? styles.item : styles.itemFlush,
           active
@@ -36,23 +42,49 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
               ? styles.itemActive
               : styles.itemActiveFlush
             : "",
+          item.tier === "historical" ? styles.itemHistorical : "",
         ]
           .filter(Boolean)
           .join(" ");

+        const label =
+          item.tier === "historical"
+            ? `${item.label} (historique)`
+            : item.label;
+
         return (
           <Link
             key={item.id}
             href={item.route}
             className={itemClass}
-            aria-label={item.label}
+            aria-label={label}
+            title={item.historicalHint ?? item.label}
             aria-current={active ? "page" : undefined}
+            data-nav-tier={item.tier}
+            data-testid={`rail-nav-${item.id}`}
           >
             {item.railIcon}
           </Link>
         );
       })}

+      {currentProjectId ? (
+        <Link
+          href={`/studio/projects/${encodeURIComponent(currentProjectId)}`}
+          className={[
+            isFloating ? styles.item : styles.itemFlush,
+            isFloating ? styles.itemActive : styles.itemActiveFlush,
+          ].join(" ")}
+          aria-label={`Projet en cours ${currentProjectId}`}
+          title="Projet ouvert"
+          aria-current="page"
+          data-testid="rail-current-project"
+          data-nav-tier="primary"
+        >
+          ●
+        </Link>
+      ) : null}
+
       <button
         type="button"
         className={isFloating ? styles.itemDisabled : styles.itemFlush}
@@ -69,9 +101,10 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
       <Link
         href="/workspace"
         className={isFloating ? styles.item : styles.itemFlush}
-        aria-label="Workspace D1"
-        title="Workspace D1"
+        aria-label="Workspace D1 (historique / legacy)"
+        title="Workspace D1 — historique / legacy"
         data-testid="rail-d1-workspace"
+        data-nav-tier="historical"
       >
         W
       </Link>
@@ -79,9 +112,10 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
       <Link
         href="/ops1/nouvelle-demande"
         className={isFloating ? styles.item : styles.itemFlush}
-        aria-label="OPS1 legacy"
-        title="OPS1 Nouvelle demande (legacy)"
+        aria-label="OPS1 (historique / legacy)"
+        title="OPS1 Nouvelle demande — historique / legacy"
         data-testid="rail-ops1-legacy"
+        data-nav-tier="historical"
       >
         O
       </Link>
diff --git a/projects/sfia-studio/app/components/shell/utility-rail.module.css b/projects/sfia-studio/app/components/shell/utility-rail.module.css
index a3a5b3f..c980201 100644
--- a/projects/sfia-studio/app/components/shell/utility-rail.module.css
+++ b/projects/sfia-studio/app/components/shell/utility-rail.module.css
@@ -73,6 +73,10 @@
   cursor: not-allowed;
 }

+.itemHistorical {
+  opacity: 0.72;
+}
+
 .spacer {
   flex: 1;
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 58871d7..e1110db 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -19,6 +19,11 @@ import type {
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
 import type { F3M3PreparePayload } from "./f3/prepareM3FromDecision";
+import {
+  G_UX_08_AMEND_DEFERRED_MESSAGE,
+  attemptStatusUserLabel,
+  deriveRecommendationFreshness,
+} from "./presentationLabels";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -73,7 +78,21 @@ function modeFromResult(result: {
   return "MODE À CONFIRMER";
 }

-export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
+export type ProjectAssistantPanelProps = {
+  projectId: string;
+  /** Fired after a successful durable Product mutation (not process-local). */
+  onDurableFactsChanged?: () => void;
+  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for parent History. */
+  onDurableEvidenceOutcomeChange?: (
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) => void;
+};
+
+export function ProjectAssistantPanel({
+  projectId,
+  onDurableFactsChanged,
+  onDurableEvidenceOutcomeChange,
+}: ProjectAssistantPanelProps) {
   const inputId = useId();
   const liveRegionId = useId();
   const [messages, setMessages] = useState<UiMessage[]>([]);
@@ -83,7 +102,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [error, setError] = useState<string | null>(null);
   const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
-    "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite.",
+    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
@@ -101,6 +120,43 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
+  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
+  const onDurableEvidenceOutcomeChangeRef = useRef(
+    onDurableEvidenceOutcomeChange,
+  );
+  onDurableFactsChangedRef.current = onDurableFactsChanged;
+  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;
+
+  function notifyDurableFactsChanged() {
+    onDurableFactsChangedRef.current?.();
+  }
+
+  function applyDurableEvidenceOutcome(
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) {
+    setDurableEvidenceOutcome(outcome);
+    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
+  }
+
+  async function refreshDurableEvidenceOutcome() {
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId,
+    });
+    if (result.ok) {
+      applyDurableEvidenceOutcome(result);
+      setDurableRehydrateError(null);
+      return;
+    }
+    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
+      applyDurableEvidenceOutcome(null);
+      setDurableRehydrateError(null);
+      return;
+    }
+    applyDurableEvidenceOutcome(null);
+    setDurableRehydrateError(
+      "Impossible de relire le dernier outcome durable.",
+    );
+  }

   useEffect(() => {
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
@@ -108,23 +164,23 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {

   useEffect(() => {
     let cancelled = false;
-    setDurableEvidenceOutcome(null);
+    applyDurableEvidenceOutcome(null);
     setDurableRehydrateError(null);

     void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
       (result) => {
         if (cancelled) return;
         if (result.ok) {
-          setDurableEvidenceOutcome(result);
+          applyDurableEvidenceOutcome(result);
           setDurableRehydrateError(null);
           return;
         }
         if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
-          setDurableEvidenceOutcome(null);
+          applyDurableEvidenceOutcome(null);
           setDurableRehydrateError(null);
           return;
         }
-        setDurableEvidenceOutcome(null);
+        applyDurableEvidenceOutcome(null);
         setDurableRehydrateError(
           "Impossible de relire le dernier outcome durable.",
         );
@@ -134,6 +190,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     return () => {
       cancelled = true;
     };
+    // Parent callbacks are mirrored via refs; projectId is the durable read key.
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount/projectId only
   }, [projectId]);

   useEffect(() => {
@@ -258,10 +316,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         {
           id: nextId("assistant"),
           role: "assistant",
-          content: result.text,
+          content:
+            kind === "AMEND"
+              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
+              : result.text,
         },
       ]);
       setUiState("ANSWERED");
+      // HumanDecision is durable Product write — refresh LPS / History projection.
+      notifyDurableFactsChanged();
     });
   }

@@ -283,11 +346,16 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     !busy &&
     !blocked;

+  const recommendationFreshness = deriveRecommendationFreshness({
+    hasSessionRecommendation: Boolean(f3Execute?.recommendation),
+    hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+    sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
+    durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
+  });
+
+  // Freshness is presentation-only. Do not invent authority via canConfirmF3.
   const canConfirmF3 =
-    Boolean(f3Prepare) &&
-    !f3Execute &&
-    !busy &&
-    !blocked;
+    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

   function prepareF3() {
     if (!canPrepareF3 || !activeProposal || !f2?.decision) return;
@@ -320,6 +388,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // ExecutionContract prepare is durable Product write.
+      notifyDurableFactsChanged();
     });
   }

@@ -352,6 +422,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // M3 ExecutionContract is durable Product write.
+      notifyDurableFactsChanged();
     });
   }
   function confirmAndExecuteF3() {
@@ -385,6 +457,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // Attempt / Evidence / ReviewBundle / LPS refs are durable — refresh both.
+      notifyDurableFactsChanged();
+      void refreshDurableEvidenceOutcome();
     });
   }

@@ -398,15 +473,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
-        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
+        <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1+F2+F3 fixture : analyse · conversation · lecture · qualification ·
-        proposition · gate humain · prepare/confirm fixture. Pas d&apos;exécution Cursor REAL,
-        pas d&apos;écriture Git produit, pas de destination OPS1.
+        Parcours produit : qualification · proposition · décision humaine ·
+        contrat / confirmation · tentative · recommandation. Aucune exécution
+        réelle automatique.
       </p>

       <div
@@ -474,10 +549,17 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-qualification-title"
         >
           <h3 id="f2-qualification-title" className={styles.cardTitle}>
-            RECOMMANDATION
+            F4 · Qualification / Proposition
           </h3>
+          <p className={styles.cardMeta} data-testid="f2-recommendation-freshness">
+            {f2.qualification.recommendationLabel} ·{" "}
+            {deriveRecommendationFreshness({
+              hasSessionRecommendation: true,
+              hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+            }).label}
+          </p>
           <p className={styles.cardMeta}>
-            {f2.qualification.recommendationLabel}
+            Une recommandation n&apos;est pas une décision humaine.
           </p>
           <dl className={styles.cardDl}>
             <div>
@@ -492,7 +574,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             </div>
             {f2.qualification.cycleInstanceId ? (
               <div>
-                <dt>CycleInstance</dt>
+                <dt>Cycle lié</dt>
                 <dd data-testid="f2-cycle-instance">
                   {f2.qualification.cycleInstanceId}
                   {f2.qualification.cycleStatus
@@ -501,29 +583,34 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
                 </dd>
               </div>
             ) : null}
-            {f2.qualification.ckcResolutionRef ? (
-              <div>
-                <dt>CKC ref</dt>
-                <dd data-testid="f2-ckc-ref">
-                  {f2.qualification.ckcResolutionRef}
-                </dd>
-              </div>
-            ) : null}
             <div>
-              <dt>Rationale</dt>
+              <dt>Justification</dt>
               <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
             </div>
-            <div>
-              <dt>Provenance</dt>
-              <dd data-testid="f2-qualification-provenance">
-                catalogue {f2.qualification.catalogVersion} ·{" "}
-                {f2.qualification.detailedStatus}
-                {f2.qualification.capitalizationViaCycleTypeId
-                  ? " · capitalisation via cycleType"
-                  : ""}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Diagnostics techniques</summary>
+            <dl className={styles.cardDl}>
+              {f2.qualification.ckcResolutionRef ? (
+                <div>
+                  <dt>Réf. résolution</dt>
+                  <dd data-testid="f2-ckc-ref">
+                    {f2.qualification.ckcResolutionRef}
+                  </dd>
+                </div>
+              ) : null}
+              <div>
+                <dt>Provenance</dt>
+                <dd data-testid="f2-qualification-provenance">
+                  catalogue {f2.qualification.catalogVersion} ·{" "}
+                  {f2.qualification.detailedStatus}
+                  {f2.qualification.capitalizationViaCycleTypeId
+                    ? " · capitalisation via cycleType"
+                    : ""}
+                </dd>
+              </div>
+            </dl>
+          </details>
         </section>
       ) : null}

@@ -534,11 +621,19 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-proposal-title"
         >
           <h3 id="f2-proposal-title" className={styles.cardTitle}>
-            PROPOSITION
+            Proposition
           </h3>
           <p className={styles.cardMeta} data-testid="f2-proposal-id">
-            {activeProposal.proposalId} · statut {activeProposal.status}
+            Statut {activeProposal.status}
           </p>
+          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f2-amend-deferred-notice"
+            >
+              {G_UX_08_AMEND_DEFERRED_MESSAGE}
+            </p>
+          ) : null}
           <dl className={styles.cardDl}>
             <div>
               <dt>Demande reformulée</dt>
@@ -601,10 +696,10 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-gate-title"
         >
           <h3 id="f2-gate-title" className={styles.cardTitle}>
-            DÉCISION REQUISE
+            F5 · Décision humaine
           </h3>
           <p className={styles.cardMeta}>
-            Décision humaine explicite liée à {activeProposal?.proposalId}
+            Décision humaine explicite — distincte de la recommandation.
           </p>
           <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
             Réserves (obligatoires pour GO WITH RESERVES)
@@ -648,7 +743,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-decision"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <h3 className={styles.cardTitle}>F5 · Décision enregistrée</h3>
           <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
           <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
           {f2.decision.readyForNextGatedStep ? (
@@ -668,15 +763,22 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-prepare"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — PREPARE</h3>
+          <h3 className={styles.cardTitle}>F6 · Préparer le contrat</h3>
           <p className={styles.cardMeta}>
-            Le GO F2 autorise uniquement la préparation d&apos;un contrat fixture.
+            Le GO autorise uniquement la préparation d&apos;un contrat. Confirmation
+            process-local — non durable.
           </p>
           <div className={styles.f3Labels} data-testid="f3-prepare-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            <StatusPill tone="muted">Confirmation non durable</StatusPill>
           </div>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <p className={styles.cardMeta}>
+              Démonstration locale · exécution réelle bloquée · aucune écriture
+              Git produit.
+            </p>
+          </details>
           <button
             type="button"
             className={styles.f3Button}
@@ -684,7 +786,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canPrepareF3}
             onClick={() => prepareF3()}
           >
-            Préparer l&apos;exécution fixture
+            Préparer le contrat d&apos;exécution
           </button>
           <button
             type="button"
@@ -693,7 +795,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canPrepareM3}
             onClick={() => prepareM3()}
           >
-            M3 PREPARE (decision durable)
+            Préparer le contrat depuis la décision durable
           </button>
         </section>
       ) : null}
@@ -703,30 +805,32 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-m3-prepare"
         >
-          <h3 className={styles.cardTitle}>M3 PREPARE — CURSOR PREPARE-ONLY</h3>
+          <h3 className={styles.cardTitle}>F6 · Contrat préparé (décision durable)</h3>
           <div className={styles.f3Labels}>
-            <StatusPill tone="muted">NO CURSOR REAL</StatusPill>
-            <StatusPill tone="muted">NO ATTEMPT</StatusPill>
-            <StatusPill tone="muted">GATE D NOT_CONSUMED</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            <StatusPill tone="muted">Tentative non créée</StatusPill>
           </div>
-          <dl className={styles.cardDl}>
-            <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-m3-contract-id">
-                {f3M3Prepare.contract.executionContractId}
-              </dd>
-            </div>
-            <div>
-              <dt>Fingerprint</dt>
-              <dd data-testid="f3-m3-fingerprint">
-                {f3M3Prepare.contract.semanticFingerprint}
-              </dd>
-            </div>
-            <div>
-              <dt>Action</dt>
-              <dd>{f3M3Prepare.contract.action}</dd>
-            </div>
-          </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd data-testid="f3-m3-contract-id">
+                  {f3M3Prepare.contract.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Empreinte sémantique</dt>
+                <dd data-testid="f3-m3-fingerprint">
+                  {f3M3Prepare.contract.semanticFingerprint}
+                </dd>
+              </div>
+              <div>
+                <dt>Action</dt>
+                <dd>{f3M3Prepare.contract.action}</dd>
+              </div>
+            </dl>
+          </details>
         </section>
       ) : null}

@@ -735,36 +839,48 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           className={styles.f3Card}
           data-testid="project-assistant-f3-contract"
         >
-          <h3 className={styles.cardTitle}>CONTRAT FIXTURE PRÉPARÉ</h3>
+          <h3 className={styles.cardTitle}>F6 · Contrat préparé</h3>
           <div className={styles.f3Labels} data-testid="f3-contract-labels">
-            <StatusPill tone="blueFlush">FIXTURE</StatusPill>
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
+            <StatusPill tone="blueFlush">Contrat</StatusPill>
+            <StatusPill tone="muted">Confirmation process-local</StatusPill>
+            <StatusPill tone="orange">Exécution réelle bloquée</StatusPill>
           </div>
-          <dl className={styles.cardDl}>
-            <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-contract-id">
-                {f3Prepare.contract.executionContractId}
-              </dd>
-            </div>
-            <div>
-              <dt>Version</dt>
-              <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
-            </div>
-            <div>
-              <dt>Status</dt>
-              <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
-            </div>
-            <div>
-              <dt>Mode</dt>
-              <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
-            </div>
-          </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd data-testid="f3-contract-id">
+                  {f3Prepare.contract.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
+              </div>
+              <div>
+                <dt>Statut</dt>
+                <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
+              </div>
+              <div>
+                <dt>Mode</dt>
+                <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
+              </div>
+            </dl>
+          </details>
           <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
-            attemptCreated: false — AUCUNE ATTEMPT
+            Tentative non créée — confirmation process-local (non durable).
           </p>
+          {recommendationFreshness.status === "stale" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f3-stale-recommendation-notice"
+            >
+              Recommandation périmée — ce n&apos;est pas une décision humaine et
+              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
+              reste gouvernée par le contrat et la décision déjà enregistrés.
+            </p>
+          ) : null}
           <button
             type="button"
             className={styles.f3Button}
@@ -772,7 +888,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             disabled={!canConfirmF3}
             onClick={() => confirmAndExecuteF3()}
           >
-            Confirmer et exécuter la fixture
+            Confirmer et exécuter (process-local)
           </button>
         </section>
       ) : null}
@@ -783,31 +899,42 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-f3-execute"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
+          <h3 className={styles.cardTitle}>F7 · Tentative / F8 · Recommandation</h3>
           <div className={styles.f3Labels} data-testid="f3-execute-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              Recommandation — pas une décision
+            </StatusPill>
+            <StatusPill
+              tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
+            >
+              {recommendationFreshness.label}
             </StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
           </div>

           <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Attempt</h4>
-            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
-            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
-            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
-            <p data-testid="f3-attempt-external-effects">
-              externalEffects: {String(f3Execute.attempt.externalEffects)}
-            </p>
-            <p data-testid="f3-attempt-launch-count">
-              launchCount: {f3Execute.attempt.launchCount}
-            </p>
-            <p data-testid="f3-attempt-reused">
-              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
-            </p>
+            <h4 className={styles.cardTitle}>Tentative</h4>
+            {(() => {
+              const attemptLabel = attemptStatusUserLabel(
+                f3Execute.attempt.status,
+              );
+              return (
+                <>
+                  <p data-testid="f3-attempt-status-label">
+                    {attemptLabel.label}
+                  </p>
+                  {!attemptLabel.blockedBeforeExecution ? (
+                    <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
+                  ) : (
+                    <p data-testid="f3-attempt-id-omitted">
+                      Identifiant de tentative non affiché (bloqué avant
+                      exécution).
+                    </p>
+                  )}
+                  <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
+                </>
+              );
+            })()}
           </div>

           <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
@@ -830,26 +957,28 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           </div>

           <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <h4 className={styles.cardTitle}>F8 · Recommendation</h4>
+            <p
+              className={styles.cardMeta}
+              data-testid="f3-recommendation-freshness"
+            >
+              {recommendationFreshness.label}
+            </p>
             <p data-testid="f3-recommendation-label">
               {f3Execute.recommendation.recommendationLabel}
             </p>
             <p data-testid="f3-recommendation-execution-authority">
-              executionAuthority:{" "}
+              Autorité d&apos;exécution:{" "}
               {String(f3Execute.recommendation.executionAuthority)}
             </p>
             <p data-testid="f3-recommendation-gate-consumed">
-              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
+              Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
             </p>
             <p data-testid="f3-recommendation-decision-created">
-              decisionCreated:{" "}
+              Décision créée:{" "}
               {String(f3Execute.recommendation.decisionCreated)}
             </p>
-            <p data-testid="f3-recommendation-hard-refs">
-              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
-            </p>
             <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
-            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
           </div>
         </section>
       ) : null}
@@ -871,12 +1000,18 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="durable-evidence-outcome"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>OUTCOME DURABLE — RELECTURE LPS</h3>
+          <h3 className={styles.cardTitle}>F8 · Outcome durable (relecture)</h3>
           <div className={styles.f3Labels} data-testid="durable-outcome-labels">
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              RECOMMANDATION — PAS UNE DÉCISION
+            </StatusPill>
+            <StatusPill tone="muted">
+              {deriveRecommendationFreshness({
+                hasSessionRecommendation: false,
+                hasDurableEvidenceOutcome: true,
+              }).label}
             </StatusPill>
-            <StatusPill tone="muted">LECTURE SEULE — AUCUNE EXÉCUTION</StatusPill>
+            <StatusPill tone="muted">LECTURE SEULE</StatusPill>
           </div>
           <p className={styles.cardMeta} data-testid="durable-lps-version">
             LPS v{durableEvidenceOutcome.lpsVersion}
diff --git a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
index c599fa1..4ceff56 100644
--- a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
+++ b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
@@ -292,6 +292,17 @@
   font-weight: 650;
 }

+.diagnosticsDetails {
+  margin-top: 8px;
+}
+
+.diagnosticsDetails summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .noExecutionBanner {
   color: #7a1f16;
 }
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
index acb8a14..06eaa6d 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
@@ -117,27 +117,25 @@ function ProjectCreationResult({
     <Card variant="flush" className={styles.resultCard}>
       <div className={styles.resultHeader}>
         <div>
-          <h2>Projet créé localement</h2>
+          <h2>Projet créé</h2>
           <p className={styles.resultHint}>
-            Projection réelle du core V1 — aucune fixture et aucune
-            persistance produit.
+            Le projet est disponible dans ce processus. Vous pouvez ouvrir
+            l&apos;espace de conversation.
           </p>
         </div>
         <div className={styles.pillGroup}>
-          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
+          <StatusPill tone="green">CRÉÉ</StatusPill>
           <StatusPill tone="orange">
-            {result.readiness.status}
+            {result.readiness.status === "NOT_READY"
+              ? "NON PRÊT"
+              : result.readiness.status}
           </StatusPill>
         </div>
       </div>

       <section className={styles.resultSection} aria-labelledby="project-data">
-        <h3 id="project-data">Project</h3>
+        <h3 id="project-data">Projet</h3>
         <dl className={styles.definitionGrid}>
-          <div className={styles.definitionItem}>
-            <dt>Project ID</dt>
-            <dd className={styles.valueCode}>{result.projectId}</dd>
-          </div>
           <div className={styles.definitionItem}>
             <dt>Nom</dt>
             <dd>{result.project.name}</dd>
@@ -160,14 +158,6 @@ function ProjectCreationResult({
             <dt>Contexte résumé</dt>
             <dd>{result.project.contextSummary}</dd>
           </div>
-          <div className={styles.definitionItem}>
-            <dt>Source</dt>
-            <dd>{result.project.source}</dd>
-          </div>
-          <div className={styles.definitionItem}>
-            <dt>Fixture</dt>
-            <dd>{String(result.project.fixture)}</dd>
-          </div>
         </dl>
         {result.project.constraints.length > 0 ? (
           <ul className={styles.constraintList} aria-label="Contraintes">
@@ -178,6 +168,19 @@ function ProjectCreationResult({
         ) : (
           <p className={styles.empty}>Aucune contrainte principale.</p>
         )}
+        <details className={styles.diagnosticsDetails}>
+          <summary>Diagnostics techniques</summary>
+          <dl className={styles.definitionGrid}>
+            <div className={styles.definitionItem}>
+              <dt>Identifiant</dt>
+              <dd className={styles.valueCode}>{result.projectId}</dd>
+            </div>
+            <div className={styles.definitionItem}>
+              <dt>Source technique</dt>
+              <dd>{result.project.source}</dd>
+            </div>
+          </dl>
+        </details>
       </section>

       <section className={styles.resultSection} aria-labelledby="doctrine-data">
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
index 52e9521..fca0f0c 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
@@ -23,25 +23,24 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
       <div data-testid="project-workspace-projection">
       <div className={styles.workspaceHeader}>
         <div>
-          <h2>Espace de travail projet</h2>
+          <h2>État du projet</h2>
           <p className={styles.hint}>
-            Vue de contexte locale — projection réelle du core V1 / Product
-            SQLite (Project/LPS/Cycle M2), sans dashboard et sans agent.
+            Vue de contexte — la conversation reste le parcours principal.
           </p>
         </div>
         <div className={styles.pillGroup}>
-          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
-          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
+          <StatusPill tone="green">PROJET</StatusPill>
+          <StatusPill tone="orange">
+            {result.readiness.status === "NOT_READY"
+              ? "NON PRÊT"
+              : result.readiness.status}
+          </StatusPill>
         </div>
       </div>

       <section className={styles.section} aria-labelledby="workspace-project">
-        <h3 id="workspace-project">Project</h3>
+        <h3 id="workspace-project">Projet</h3>
         <dl className={styles.definitionGrid}>
-          <div className={styles.definitionItem}>
-            <dt>Project ID</dt>
-            <dd className={styles.valueCode}>{result.project.projectId}</dd>
-          </div>
           <div className={styles.definitionItem}>
             <dt>Nom</dt>
             <dd>{result.project.name}</dd>
@@ -64,14 +63,6 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
             <dt>Contexte résumé</dt>
             <dd>{result.project.contextSummary}</dd>
           </div>
-          <div className={styles.definitionItem}>
-            <dt>Source</dt>
-            <dd>{result.project.source}</dd>
-          </div>
-          <div className={styles.definitionItem}>
-            <dt>Fixture</dt>
-            <dd>{String(result.project.fixture)}</dd>
-          </div>
         </dl>
         {result.project.constraints.length > 0 ? (
           <ul className={styles.constraintList} aria-label="Contraintes">
@@ -84,17 +75,17 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
         )}
       </section>

-      <section className={styles.section} aria-labelledby="workspace-lps">
-        <h3 id="workspace-lps">Doctrine et Living Project State</h3>
+      <details className={styles.diagnostics} data-testid="workspace-diagnostics">
+        <summary>Diagnostics techniques</summary>
         <dl className={styles.definitionGrid}>
           <div className={styles.definitionItem}>
-            <dt>Doctrine</dt>
-            <dd>{result.doctrine.id}</dd>
+            <dt>Identifiant</dt>
+            <dd className={styles.valueCode}>{result.project.projectId}</dd>
           </div>
           <div className={styles.definitionItem}>
-            <dt>Version / statut</dt>
+            <dt>Doctrine</dt>
             <dd>
-              {result.doctrine.version} · {result.doctrine.status}
+              {result.doctrine.id} · {result.doctrine.version}
             </dd>
           </div>
           <div className={styles.definitionItem}>
@@ -102,18 +93,18 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
             <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
           </div>
           <div className={styles.definitionItem}>
-            <dt>LPS</dt>
+            <dt>État vivant</dt>
             <dd className={styles.valueCode}>{result.livingState.id}</dd>
           </div>
           <div className={styles.definitionItem}>
-            <dt>LPS version / date</dt>
+            <dt>Version / date</dt>
             <dd>
               v{result.livingState.version} · {result.livingState.createdAt}
             </dd>
           </div>
           {result.livingState.activeCycleInstanceId ? (
             <div className={styles.definitionItem}>
-              <dt>CycleInstance actif (lien LPS)</dt>
+              <dt>Cycle lié</dt>
               <dd
                 className={styles.valueCode}
                 data-testid="workspace-active-cycle"
@@ -124,7 +115,7 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
           ) : null}
           {result.livingState.ckcResolutionRef ? (
             <div className={styles.definitionItem}>
-              <dt>CKC resolution ref</dt>
+              <dt>Réf. résolution</dt>
               <dd
                 className={styles.valueCode}
                 data-testid="workspace-ckc-ref"
@@ -134,46 +125,22 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
             </div>
           ) : null}
         </dl>
-      </section>
-
-      <section className={styles.truthBox} aria-labelledby="workspace-truth">
-        <h3 id="workspace-truth">Vérité runtime</h3>
-        <div className={styles.pillGroup}>
-          <StatusPill tone="orangeFlush">
-            {result.disclosures.runtimeMode}
-          </StatusPill>
-          <StatusPill tone="muted">{result.disclosures.persistence}</StatusPill>
-          <StatusPill tone="muted">
-            AGENT {result.disclosures.agentExecution}
-          </StatusPill>
-          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
-        </div>
-        <p className={styles.hint}>
-          IAM {result.disclosures.iam} · PRODUCT PERSISTENCE{" "}
-          {result.disclosures.productPersistence} · DELIVERY{" "}
-          {result.disclosures.delivery} · CUTOVER {result.disclosures.cutover} ·
-          RUN READY = {String(result.readiness.runReady)} · PRODUCT READY ={" "}
-          {String(result.readiness.productReady)}
-        </p>
-      </section>
+      </details>

       <div className={styles.actions}>
         <p
           className={styles.primaryAssistantHint}
           data-testid="workspace-primary-assistant-hint"
         >
-          Parcours principal : Assistant Nora (panneau de droite) — analyse /
-          conversation / lecture seule. OPS1 n&apos;est pas requis.
+          Parcours principal : conversation de qualification.
         </p>
         <div className={styles.secondaryActions}>
           <CtaButton
-            href={`/ops1/nouvelle-demande?projectId=${encodeURIComponent(result.project.projectId)}`}
+            href="/studio"
             variant="secondary"
-            data-testid="workspace-continue-pilotage"
-            title="Escape hatch temporaire vers OPS1 (non lié au Project)"
-            aria-label="Continuer le pilotage via OPS1 (temporaire)"
+            data-testid="workspace-back-to-studio"
           >
-            Continuer le pilotage (OPS1 · temporaire)
+            Retour aux projets
           </CtaButton>
           <CtaButton
             href="/studio/projects/new"
@@ -200,12 +167,11 @@ function MissingProject({
     <Card variant="flush" className={styles.missingCard}>
       <div data-testid="project-workspace-missing">
       <div>
-        <h2>Projet introuvable dans ce processus</h2>
+        <h2>Projet introuvable</h2>
         <p className={styles.hint}>
-          L’identifiant demandé n’est pas disponible dans le Product SQLite
-          ouvert par ce processus. Vérifiez l’identifiant ou créez un projet.
-          Conversation/Proposal F2 restent process-local ; Project/LPS/Cycle
-          durables ne dépendent pas de globalThis.
+          L’identifiant demandé n’est pas disponible dans ce processus.
+          Vérifiez l’identifiant ou créez un projet. Conversation et proposition
+          restent process-local.
         </p>
       </div>
       <dl className={styles.definitionGrid}>
@@ -229,8 +195,8 @@ function MissingProject({
         </div>
       </dl>
       <div className={styles.actions}>
-        <CtaButton href="/studio/projects/new" variant="secondary">
-          Retour à la création
+        <CtaButton href="/studio" variant="secondary">
+          Retour aux projets
         </CtaButton>
       </div>
       </div>
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
index 8b26afc..0bf1b43 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
@@ -7,58 +7,62 @@ import {
 import styles from "./create-project.module.css";

 /**
- * Server component: the disclosure contract is read directly from V2-A1.
- * It must remain visible before and after the client form submits.
+ * Server component: honesty banner — product-first first level,
+ * technical runtime details secondary. Does not hide safety limits.
  */
 export function RuntimeDisclosureBanner({
   surface = "create",
 }: {
-  surface?: "create" | "workspace";
+  surface?: "create" | "workspace" | "list";
 } = {}) {
   const intro =
     surface === "workspace"
-      ? "Cette interface consulte un Project et son LPS dans le processus Node local uniquement."
-      : "Cette interface crée un Project et son LPS dans le processus Node local uniquement.";
+      ? "Cet espace consulte l’état durable du projet lorsqu’il est disponible, et rappelle ce qui reste volatil (conversation, proposition, confirmation)."
+      : surface === "list"
+        ? "Cette liste lit les projets déjà enregistrés dans cet environnement local. Elle ne crée pas de magasin parallèle."
+        : "Cette interface crée un projet localement. Conversation et confirmation restent process-local.";

   return (
     <Card variant="flush" className={styles.disclosure}>
       <div className={styles.disclosureHeader}>
         <div>
-          <h2>Mode local borné</h2>
+          <h2>Environnement local — limites honnêtes</h2>
           <p>{intro}</p>
         </div>
-        <div className={styles.pillGroup} aria-label="Statuts runtime">
-          <StatusPill tone="orangeFlush">
-            {RUNTIME_DISCLOSURES.runtimeMode}
-          </StatusPill>
-          <StatusPill tone="muted">
-            {RUNTIME_DISCLOSURES.persistence}
-          </StatusPill>
-          <StatusPill tone="muted">
-            AGENT {RUNTIME_DISCLOSURES.agentExecution}
-          </StatusPill>
+        <div className={styles.pillGroup} aria-label="Limites produit">
+          <StatusPill tone="orangeFlush">Environnement local</StatusPill>
+          <StatusPill tone="muted">Processus borné</StatusPill>
           <StatusPill tone="orange">
-            {RUNTIME_READINESS_NOT_READY.status}
+            {RUNTIME_READINESS_NOT_READY.status === "NOT_READY"
+              ? "Non prêt produit"
+              : RUNTIME_READINESS_NOT_READY.status}
           </StatusPill>
         </div>
       </div>

       <ul className={styles.disclosureList}>
         <li>
-          État métier volatil : un redémarrage ou hot reload peut perdre les
-          données.
+          Durable (quand disponible) : projet, état vivant, décisions et
+          contrats déjà enregistrés.
         </li>
-        <li>IAM {RUNTIME_DISCLOSURES.iam}.</li>
         <li>
-          PRODUCT PERSISTENCE {RUNTIME_DISCLOSURES.productPersistence}.
-        </li>
-        <li>DELIVERY {RUNTIME_DISCLOSURES.delivery}.</li>
-        <li>CUTOVER {RUNTIME_DISCLOSURES.cutover}.</li>
-        <li>
-          HARD {RUNTIME_READINESS_NOT_READY.hard} · T-A6{" "}
-          {RUNTIME_READINESS_NOT_READY.tA6} · RUN READY = false.
+          Process-local (non durable) : conversation, proposition, confirmation
+          d&apos;exécution — perdues au rechargement.
         </li>
+        <li>Aucune exécution réelle autorisée ici.</li>
       </ul>
+
+      <details className={styles.disclosureDetails}>
+        <summary>Détails techniques</summary>
+        <ul className={styles.disclosureList}>
+          <li>
+            IAM {RUNTIME_DISCLOSURES.iam} · livraison{" "}
+            {RUNTIME_DISCLOSURES.delivery} · bascule{" "}
+            {RUNTIME_DISCLOSURES.cutover}.
+          </li>
+          <li>Agent non autorisé · RUN READY = false.</li>
+        </ul>
+      </details>
     </Card>
   );
 }
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css b/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
index 18a9dae..e21b56b 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
@@ -4,6 +4,46 @@
   padding-bottom: var(--sfia-space-xl);
 }

+.intentHero {
+  display: grid;
+  gap: 8px;
+}
+
+.intentEyebrow {
+  margin: 0;
+  color: var(--sfia-blue);
+  font-size: var(--sfia-meta-size);
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+}
+
+.intentTitle {
+  margin: 0;
+  color: var(--sfia-ink);
+  font-size: 24px;
+  line-height: 1.25;
+}
+
+.intentLead {
+  margin: 0;
+  max-width: 62ch;
+  color: var(--sfia-muted);
+  font-size: 14px;
+  line-height: var(--sfia-line-body);
+}
+
+.diagnosticsDetails {
+  margin-top: var(--sfia-space-md);
+}
+
+.diagnosticsDetails summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .disclosure {
   display: grid;
   gap: var(--sfia-space-md);
@@ -57,6 +97,17 @@
   line-height: var(--sfia-line-body);
 }

+.disclosureDetails {
+  margin-top: 4px;
+}
+
+.disclosureDetails summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .formCard,
 .resultCard {
   display: grid;
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
index c85d603..410817b 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
@@ -53,6 +53,18 @@
   font-size: 15px;
 }

+.diagnostics {
+  display: grid;
+  gap: var(--sfia-space-sm);
+}
+
+.diagnostics summary {
+  cursor: pointer;
+  color: var(--sfia-muted);
+  font-size: 12px;
+  font-weight: 650;
+}
+
 .definitionGrid {
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
diff --git a/projects/sfia-studio/app/lib/navigation.ts b/projects/sfia-studio/app/lib/navigation.ts
index 6677be6..aef2579 100644
--- a/projects/sfia-studio/app/lib/navigation.ts
+++ b/projects/sfia-studio/app/lib/navigation.ts
@@ -7,15 +7,17 @@ export type StudioRoute =
 /**
  * Shell-level routes include the real Studio namespace while preserving the
  * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
- * Dynamic project workspace routes are typed but not added to the rail.
  */
 export type StudioProjectWorkspaceRoute = `/studio/projects/${string}`;

 export type StudioShellRoute =
   | StudioRoute
+  | "/studio"
   | "/studio/projects/new"
   | StudioProjectWorkspaceRoute;

+export type NavTier = "primary" | "historical";
+
 export function isStudioProjectWorkspaceRoute(
   route: StudioShellRoute,
 ): boolean {
@@ -30,6 +32,10 @@ export interface NavItem {
   label: string;
   railIcon: string;
   railKey: "home" | "plus" | "grid" | "diamond" | "project" | "gear";
+  /** Primary product nav vs demoted historical/secondary surfaces. */
+  tier: NavTier;
+  /** aria/title hint for historical links */
+  historicalHint?: string;
 }

 export interface TabItem {
@@ -42,42 +48,67 @@ export interface TabItem {

 export const STUDIO_ROUTES: NavItem[] = [
   {
-    id: "synthese",
-    route: "/synthese",
-    label: "Vue synthèse",
+    id: "studio-projects",
+    route: "/studio",
+    label: "Studio / Projets",
     railIcon: "⌂",
     railKey: "home",
+    tier: "primary",
   },
   {
-    id: "nouvelle-demande",
-    route: "/nouvelle-demande",
-    label: "Nouvelle demande",
+    id: "studio-create-project",
+    route: "/studio/projects/new",
+    label: "Créer projet",
     railIcon: "＋",
     railKey: "plus",
+    tier: "primary",
   },
   {
-    id: "studio-create-project",
-    route: "/studio/projects/new",
-    label: "Créer un projet Studio",
-    railIcon: "◆",
-    railKey: "project",
+    id: "synthese",
+    route: "/synthese",
+    label: "Vue synthèse",
+    railIcon: "◫",
+    railKey: "grid",
+    tier: "historical",
+    historicalHint: "Historique — POC synthèse",
+  },
+  {
+    id: "nouvelle-demande",
+    route: "/nouvelle-demande",
+    label: "Nouvelle demande",
+    railIcon: "◇",
+    railKey: "diamond",
+    tier: "historical",
+    historicalHint: "Historique — POC nouvelle demande",
   },
   {
     id: "cycle-actif",
     route: "/cycle-actif",
     label: "Cycle actif",
-    railIcon: "◫",
-    railKey: "grid",
+    railIcon: "◎",
+    railKey: "gear",
+    tier: "historical",
+    historicalHint: "Historique — POC cycle actif",
   },
   {
     id: "decision",
     route: "/decision",
     label: "Décision Morris",
-    railIcon: "◇",
-    railKey: "diamond",
+    railIcon: "◆",
+    railKey: "project",
+    tier: "historical",
+    historicalHint: "Historique — POC décision",
   },
 ];

+export const STUDIO_PRIMARY_ROUTES = STUDIO_ROUTES.filter(
+  (item) => item.tier === "primary",
+);
+
+export const STUDIO_HISTORICAL_ROUTES = STUDIO_ROUTES.filter(
+  (item) => item.tier === "historical",
+);
+
 export const FLUSH_TABS: TabItem[] = [
   { id: "synthese", route: "/synthese", label: "Synthèse" },
   { id: "demande", route: "/nouvelle-demande", label: "Demande" },
@@ -101,5 +132,20 @@ export function isActiveRoute(
   activeRoute: StudioShellRoute,
   route: StudioShellRoute,
 ): boolean {
+  if (route === "/studio") {
+    return activeRoute === "/studio";
+  }
   return activeRoute === route;
 }
+
+export function currentProjectIdFromRoute(
+  activeRoute: StudioShellRoute,
+): string | null {
+  if (!isStudioProjectWorkspaceRoute(activeRoute)) return null;
+  const encoded = activeRoute.slice("/studio/projects/".length);
+  try {
+    return decodeURIComponent(encoded);
+  } catch {
+    return encoded;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index b3f1951..a3fccaa 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -206,6 +206,18 @@ export type GetProjectFailure = {

 export type GetProjectResult = GetProjectSuccess | GetProjectFailure;

+export type ListProjectsSuccess = {
+  ok: true;
+  projects: Project[];
+};
+
+export type ListProjectsFailure = {
+  ok: false;
+  error: ProjectStructuredError;
+};
+
+export type ListProjectsResult = ListProjectsSuccess | ListProjectsFailure;
+
 export type GetLpsSuccess = {
   ok: true;
   livingProjectState: LivingProjectState;
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index 133a5da..161af92 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -17,6 +17,7 @@ export * from "./ports/projectPersistenceUnitOfWorkPort";

 export { CreateProject } from "./application/createProject";
 export { GetProject } from "./application/getProject";
+export { ListProjects } from "./application/listProjects";
 export { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
 export { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
 export { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";
@@ -59,6 +60,7 @@ import { CreateProject } from "./application/createProject";
 import { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
 import { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
 import { GetProject } from "./application/getProject";
+import { ListProjects } from "./application/listProjects";
 import { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
 import { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
 import { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
@@ -78,6 +80,7 @@ export type ProjectServices = {
   audit: ProjectAuditJournalPort;
   createProject: CreateProject;
   getProject: GetProject;
+  listProjects: ListProjects;
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   getLivingProjectStateVersion: GetLivingProjectStateVersion;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
@@ -115,6 +118,7 @@ export function createInMemoryProjectServices(
       store,
     ),
     getProject: new GetProject(projects, clock, audit),
+    listProjects: new ListProjects(projects, clock, audit),
     getCurrentLivingProjectState: new GetCurrentLivingProjectState(
       projects,
       lps,
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
index 4639dc8..4ac505b 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
@@ -10,6 +10,18 @@ export class MemoryProjectRepository implements ProjectRepositoryPort {
     return found ? structuredClone(found) : null;
   }

+  async listAll(): Promise<Project[]> {
+    const projects = Array.from(this.store.projects.values()).map((project) =>
+      structuredClone(project),
+    );
+    projects.sort((a, b) => {
+      const aKey = a.updatedAt ?? a.createdAt;
+      const bKey = b.updatedAt ?? b.createdAt;
+      return bKey.localeCompare(aKey);
+    });
+    return projects;
+  }
+
   async exists(projectId: string): Promise<boolean> {
     return this.store.projects.has(projectId);
   }
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
index 782f974..7558eca 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
@@ -8,6 +8,7 @@ import { CreateProject } from "../../application/createProject";
 import { GetCurrentLivingProjectState } from "../../application/getCurrentLivingProjectState";
 import { GetLivingProjectStateVersion } from "../../application/getLivingProjectStateVersion";
 import { GetProject } from "../../application/getProject";
+import { ListProjects } from "../../application/listProjects";
 import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../../ports/projectAuditJournalPort";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
@@ -32,6 +33,7 @@ export type SqliteProductProjectServices = {
   audit: ProjectAuditJournalPort;
   createProject: CreateProject;
   getProject: GetProject;
+  listProjects: ListProjects;
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   getLivingProjectStateVersion: GetLivingProjectStateVersion;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
@@ -65,6 +67,7 @@ export function createSqliteProductProjectServices(
       store,
     ),
     getProject: new GetProject(projects, clock, audit),
+    listProjects: new ListProjects(projects, clock, audit),
     getCurrentLivingProjectState: new GetCurrentLivingProjectState(
       projects,
       lps,
@@ -120,6 +123,7 @@ export function createTestSqliteProductProjectServices(
       store,
     ),
     getProject: new GetProject(projects, clock, audit),
+    listProjects: new ListProjects(projects, clock, audit),
     getCurrentLivingProjectState: new GetCurrentLivingProjectState(
       projects,
       lps,
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
index 9cd6935..58c928f 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
@@ -13,6 +13,20 @@ export class SqliteProjectRepository implements ProjectRepositoryPort {
     return structuredClone(JSON.parse(row.payload_json) as Project);
   }

+  async listAll(): Promise<Project[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_projects
+         ORDER BY COALESCE(updated_at, created_at) DESC`,
+      )
+      .all() as Array<{ payload_json?: string }>;
+    return rows
+      .filter((row) => typeof row.payload_json === "string")
+      .map((row) =>
+        structuredClone(JSON.parse(row.payload_json as string) as Project),
+      );
+  }
+
   async exists(projectId: string): Promise<boolean> {
     const row = this.store.db
       .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
diff --git a/projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts b/projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
index 3f76315..3003eb8 100644
--- a/projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
+++ b/projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
@@ -43,6 +43,22 @@ export type ProjectAuditEvent =
       result: "error";
       detailCode?: string;
       durationMs: number;
+    }
+  | {
+      event: "oa.project.list";
+      ts: string;
+      correlationId?: string;
+      result: "ok";
+      durationMs: number;
+      count: number;
+    }
+  | {
+      event: "oa.project.list_failed";
+      ts: string;
+      correlationId?: string;
+      result: "error";
+      detailCode?: string;
+      durationMs: number;
     };

 export interface ProjectAuditJournalPort {
diff --git a/projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts b/projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
index 95ede43..42afe9a 100644
--- a/projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
+++ b/projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
@@ -2,6 +2,11 @@ import type { Project } from "../domain/types";

 export interface ProjectRepositoryPort {
   findById(projectId: string): Promise<Project | null>;
+  /**
+   * Thin product list over existing oa_projects / in-memory store.
+   * No schema change; ordered newest-first when timestamps exist.
+   */
+  listAll(): Promise<Project[]>;
   exists(projectId: string): Promise<boolean>;
   save(project: Project): Promise<void>;
   /**
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
index ab332ea..68a13dc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
@@ -12,6 +12,7 @@ import type {
   CreateProjectRuntimeInput,
   CreateProjectRuntimeResult,
   GetProjectRuntimeResult,
+  ListProjectsRuntimeResult,
 } from "./types";

 export async function createProjectRuntimeAction(
@@ -25,3 +26,7 @@ export async function getProjectRuntimeAction(
 ): Promise<GetProjectRuntimeResult> {
   return getRuntimeApplicationService().getProject(projectId);
 }
+
+export async function listProjectsRuntimeAction(): Promise<ListProjectsRuntimeResult> {
+  return getRuntimeApplicationService().listProjects();
+}
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
index 9112ddc..b6d42fc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
@@ -13,7 +13,10 @@ export {
   toCreateProjectRuntimeSuccess,
   toGetProjectRuntimeFailure,
   toGetProjectRuntimeSuccess,
+  toListProjectsRuntimeFailure,
+  toListProjectsRuntimeSuccess,
   toRuntimeErrorDto,
+  toRuntimeProjectListItem,
   toRuntimeProjectState,
 } from "./mapping";
 export { resolveDefaultVerticalSliceRoots } from "./paths";
@@ -37,9 +40,11 @@ export type {
   CreateProjectRuntimeInput,
   CreateProjectRuntimeResult,
   GetProjectRuntimeResult,
+  ListProjectsRuntimeResult,
   RuntimeCriticality,
   RuntimeDoctrineState,
   RuntimeErrorDto,
   RuntimeLivingProjectState,
+  RuntimeProjectListItem,
   RuntimeProjectState,
 } from "./types";
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
index 74e80b4..b2345aa 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
@@ -4,6 +4,7 @@ import type {
   LocalProjectCreationView,
   LocalProjectError,
 } from "@/lib/vertical-slice-core";
+import type { Project, ProjectStructuredError } from "@/lib/oa/project";
 import {
   RUNTIME_DISCLOSURES,
   RUNTIME_READINESS_NOT_READY,
@@ -12,7 +13,9 @@ import type {
   CreateProjectRuntimeInput,
   CreateProjectRuntimeResult,
   GetProjectRuntimeResult,
+  ListProjectsRuntimeResult,
   RuntimeErrorDto,
+  RuntimeProjectListItem,
   RuntimeProjectState,
 } from "./types";
 import type { LocalAuditStatus } from "@/lib/vertical-slice-core";
@@ -42,6 +45,23 @@ export function toRuntimeErrorDto(error: LocalProjectError): RuntimeErrorDto {
   });
 }

+export function toRuntimeErrorDtoFromProjectError(
+  error: ProjectStructuredError,
+): RuntimeErrorDto {
+  const code =
+    error.detailCode === "PROJECT_NOT_FOUND"
+      ? "PROJECT_NOT_FOUND"
+      : error.detailCode === "DOCTRINE_UNRESOLVED"
+        ? "DOCTRINE_UNRESOLVED"
+        : "PROJECT_CREATION_FAILED";
+  return Object.freeze({
+    code,
+    message: error.message,
+    retryable: error.retryable,
+    projectDetailCode: error.detailCode,
+  });
+}
+
 export function toRuntimeProjectState(
   view: LocalProjectCreationView,
 ): RuntimeProjectState {
@@ -59,6 +79,18 @@ export function toRuntimeProjectState(
   });
 }

+export function toRuntimeProjectListItem(
+  project: Project,
+): RuntimeProjectListItem {
+  return Object.freeze({
+    projectId: project.projectId,
+    title: project.title,
+    name: project.title,
+    status: project.status,
+    updatedAt: project.updatedAt ?? project.createdAt,
+  });
+}
+
 export function toCreateProjectRuntimeSuccess(
   view: LocalProjectCreationView,
   reusedFromIdempotencyKey: boolean,
@@ -111,3 +143,23 @@ export function toGetProjectRuntimeFailure(
     disclosures: RUNTIME_DISCLOSURES,
   });
 }
+
+export function toListProjectsRuntimeSuccess(
+  projects: readonly Project[],
+): Extract<ListProjectsRuntimeResult, { ok: true }> {
+  return Object.freeze({
+    ok: true,
+    projects: Object.freeze(projects.map(toRuntimeProjectListItem)),
+    disclosures: RUNTIME_DISCLOSURES,
+  });
+}
+
+export function toListProjectsRuntimeFailure(
+  error: ProjectStructuredError,
+): Extract<ListProjectsRuntimeResult, { ok: false }> {
+  return Object.freeze({
+    ok: false,
+    error: toRuntimeErrorDtoFromProjectError(error),
+    disclosures: RUNTIME_DISCLOSURES,
+  });
+}
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index c8a60fc..f27faac 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -55,12 +55,15 @@ import {
   toCreateProjectRuntimeSuccess,
   toGetProjectRuntimeFailure,
   toGetProjectRuntimeSuccess,
+  toListProjectsRuntimeFailure,
+  toListProjectsRuntimeSuccess,
 } from "./mapping";
 import { resolveDefaultVerticalSliceRoots } from "./paths";
 import type {
   CreateProjectRuntimeInput,
   CreateProjectRuntimeResult,
   GetProjectRuntimeResult,
+  ListProjectsRuntimeResult,
 } from "./types";

 export type RuntimeAuditMode = "noop" | "memory" | "sqlite";
@@ -293,6 +296,32 @@ export class RuntimeApplicationService {
     }
     return toGetProjectRuntimeSuccess(result.project);
   }
+
+  /**
+   * Thin product list via OA ProjectServices over existing oa_projects.
+   * Requires OA stack (Product SQLite / in-memory); facade-only runtimes fail closed.
+   */
+  async listProjects(): Promise<ListProjectsRuntimeResult> {
+    if (!this.oa) {
+      return toListProjectsRuntimeFailure({
+        code: "STATE_CONFLICT",
+        detailCode: "PERSISTENCE_FAILURE",
+        message: "Project list is unavailable in this runtime composition.",
+        severity: "error",
+        retryable: false,
+        blocking: true,
+        recoverable: false,
+        domain: "C",
+        timestamp: new Date().toISOString(),
+        internalCauseRef: "oa_stack_missing",
+      });
+    }
+    const result = await this.oa.projectServices.listProjects.execute();
+    if (!result.ok) {
+      return toListProjectsRuntimeFailure(result.error);
+    }
+    return toListProjectsRuntimeSuccess(result.projects);
+  }
 }

 export function createRuntimeApplicationService(
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
index 4f58e3b..358a667 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
@@ -98,6 +98,29 @@ export type GetProjectRuntimeResult =
       readonly disclosures: RuntimeDisclosures;
     };

+/** User-facing serializable list row — no SQLite/adapter jargon. */
+export interface RuntimeProjectListItem {
+  readonly projectId: string;
+  readonly title: string;
+  readonly name: string;
+  readonly status: string;
+  readonly objective?: string;
+  readonly context?: string;
+  readonly updatedAt?: string;
+}
+
+export type ListProjectsRuntimeResult =
+  | {
+      readonly ok: true;
+      readonly projects: readonly RuntimeProjectListItem[];
+      readonly disclosures: RuntimeDisclosures;
+    }
+  | {
+      readonly ok: false;
+      readonly error: RuntimeErrorDto;
+      readonly disclosures: RuntimeDisclosures;
+    };
+
 /** @deprecated Prefer LocalProjectCreationView typing via mapping helpers. */
 export type RuntimeProjectView = LocalProjectCreationView;

diff --git a/projects/sfia-studio/app/styles/shell.module.css b/projects/sfia-studio/app/styles/shell.module.css
index 4e82e3e..b6c29fe 100644
--- a/projects/sfia-studio/app/styles/shell.module.css
+++ b/projects/sfia-studio/app/styles/shell.module.css
@@ -114,6 +114,12 @@
   box-sizing: border-box;
 }

+.canvasFlushWide {
+  composes: canvasFlush;
+  width: 100%;
+  max-width: calc(100vw - var(--sfia-rail-width) - 48px);
+}
+
 .copilotFlush {
   padding: 0;
   margin-top: 0;
diff --git a/projects/sfia-studio/app/styles/tokens.css b/projects/sfia-studio/app/styles/tokens.css
index eec18ab..2f76f39 100644
--- a/projects/sfia-studio/app/styles/tokens.css
+++ b/projects/sfia-studio/app/styles/tokens.css
@@ -114,4 +114,8 @@
   --sfia-radius-md: 16px;
   --sfia-radius-lg: 20px;
   --sfia-radius-xl: 24px;
+
+  /* PRE-M6 Option A — LPS sticky widths (D-PRE-M6-UX-05) */
+  --sfia-lps-width-1440: 380px;
+  --sfia-lps-width-1280: 320px;
 }

```

---

## 24. Safety Counters

| Counter | Value |
| --- | --- |
| Initial candidate files | 51 |
| AMEND files changed | 12 |
| New project files during AMEND | 2 |
| New persistence | 0 |
| Migrations | 0 |
| New business engine | 0 |
| New UI state engine | 0 |
| New History store | 0 |
| New Recovery/session store | 0 |
| OA/runtime expansion beyond ratified F1 | 0 |
| HumanDecision semantics changes | 0 |
| ExecutionContract semantics changes | 0 |
| Attempt semantics changes | 0 |
| G-UX-08 implementation | 0 |
| Figma mutation | 0 |
| REAL | 0 |
| Project staging | 0 |
| Project commits | 0 |
| Project pushes | 0 |
| Project PR | 0 |
| Project merge | 0 |
| Branch delete | 0 |
| Review Handoff | 1 bounded L3 (this publish) |

---

## 25. Final Verdict

PRE-M6 UI DELIVERY OPTION A —
CYCLE 8 AMEND COMPLETE —
F1 READ-SURFACE EXPANSION RATIFIED AND BOUNDED —
EXISTING listAll APPROACH PRESERVED —
G-UX-10 FALSE-STALE SEMANTICS FIXED —
RECOMMENDATION FRESHNESS DOES NOT CREATE EXECUTION AUTHORITY —
LPS / HISTORY DURABLE READBACK FIXED —
F10 RECOVERY CONTEXTUAL —
FIRST-LEVEL TECHNICAL COPY CLEANED WITHOUT HIDING SAFETY LIMITS —
M1→M5 PRESERVED —
NO NEW PERSISTENCE —
NO MIGRATION —
NO PARALLEL ENGINE —
G-UX-08 OPEN / DEFERRED —
G-UX-09 + CONFIRMATION KEEP RESERVE —
G-UX-11 STILL PENDING CYCLE 9 —
FIGMA/RUNTIME FINAL VERDICT STILL PENDING CYCLE 9 —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
NO M6 —
RUNTIME V3 NON ADOPTED —
ZERO REAL —
READY FOR CHATGPT RE-REVIEW

Anti-claims honored: AMEND ≠ Cycle 9; engineering PASS ≠ G-UX-11; History refresh ≠ persistence; Recovery ≠ conversation restored; stale ≠ HumanDecision invalidated; Option A amended ≠ Pre-M6 COMPLETE.

---

## 26. Recommended Next Step (DO NOT EXECUTE HERE)

ChatGPT re-reviews this amended candidate.

Only if PASS → Cycle 9 QA / validation (browser E2E F1→F11, negatives, runtime captures, Figma/runtime compare, then Morris UAT / Pre-M6 acceptance).

M6 remains out of scope.
