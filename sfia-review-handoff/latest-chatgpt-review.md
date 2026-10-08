# ChatGPT Review Pack — P6 HUMAN QA MICRO UI FIX 03 (Nora Activity Thread)

- timestamp: 2026-10-08T16:04:25Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- typology: QA / HUMAN PRODUCT VALIDATION / MICRO UI FIX
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: 1ad2cb8386168c8af14100dea5081f9070718b5c
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- HQ-01 verdict: STILL WAITING HUMAN QA
- Product/runtime semantic change: NO
- architecture change: NO

## Local Git Truth

```
qa/sfia-studio-p6-global-integrated-product-qa
8a196be1a35ffa2d43e52beddc66b51eab56c99c
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx
```

## Accumulated P6 Human-QA micro-fixes

1. P6-HQA-UI-01 — Intro message truncation under sticky focus bar = CLOSED
2. P6-HQA-UI-02 — Conversation composer autogrow = CLOSED
3. P6-HQA-UI-03 — Nora activity in conversation thread (DP06 / P3 §28) = CLOSED (this pack)

## P6-HQA-UI-03

# P6-HQA-UI-03 — Nora activity / motion conversation alignment

{
  "issueId": "P6-HQA-UI-03",
  "title": "Nora activity shown in composer instead of conversation thread",
  "timestamp": "2026-10-08T16:04:25Z",
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "figmaContract": "DP06 v1 · Motion Contract · Nora response (125:712) — exploratory frames, behaviour from P3 §28",
  "rootCause": "projectNoraActivity label was rendered inside composerTools as a visible composerStatus; DP06 / P3 §28 require transient Nora activity in the transcript under the last pilot turn",
  "filesChanged": [
    "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
    "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css",
    "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts",
    "projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx",
    "projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx"
  ],
  "behaviorBefore": "After send, « Nora travaille… » appeared in the composer tools row",
  "behaviorAfter": "After send, an ephemeral Nora turn (NORA · En cours · Nora travaille…) renders in the thread; composerTools stays tools + Envoyer/Arrêter; sr-only status retained for machine tests",
  "states": {
    "START": "uiState=SENDING → in-thread phase=start, label Nora travaille…",
    "ACTIVITY": "busy with ASSISTANT_WORKING/SOURCE_LOOKUP → phase=activity, same honest fallback when no detailed events",
    "STREAMING": "NOT OBSERVABLE ON CURRENT PRODUCT PATH — not simulated",
    "COMPLETE": "ANSWERED (and READY after continuity) removes transient block; real assistant turn remains",
    "STOPPED": "STOPPED banner Réponse interrompue; not presented as SUCCESS (unit + cancellation tests)",
    "ERROR": "ERROR_RECOVERABLE clears activity; real error banner",
    "BLOCKED": "blocked projection; no infinite fake activity"
  },
  "runtimeVerification": {
    "activity1440": {
      "activityPresent": true,
      "activityInThread": true,
      "toolsHasNora": false,
      "label": "Nora travaille…"
    },
    "activity1024": {
      "activityPresent": true,
      "toolsHasNora": false
    },
    "activity390": {
      "activityPresent": true,
      "toolsHasNora": false
    },
    "complete1440": {
      "uiState": "READY",
      "activityPresent": false,
      "toolsHasNora": false,
      "assistantCount": 3
    },
    "reducedMotion": {
      "activityPresent": true,
      "animationName": "noraActivityInReduced",
      "animationDurationObserved": "1e-05s (Playwright reduce)"
    },
    "stoppedRuntime": {
      "stopClicked": false,
      "note": "STOP control not observed before ANSWERED in runtime probe window; STOPPED proven by unit/cancellation tests (T06/T07/T08)"
    }
  },
  "validation": {
    "ui03Tests": "6/6 PASS",
    "pilotExperienceProjection": "included in 11/11 PASS file",
    "cancellationTests": "4/4 PASS",
    "lint": "PASS",
    "build": "PASS",
    "gitDiffCheck": "PASS (scoped UI-03 paths)",
    "typecheck": "app build typecheck PASS; npm run typecheck reports pre-existing errors only in untracked __tests__/p6-campaign/ (DO_NOT_COMMIT harness)"
  },
  "preserved": {
    "P6-HQA-UI-01": "CLOSED — sticky focus top:0 retained",
    "P6-HQA-UI-02": "CLOSED — composer autogrow retained"
  },
  "productSemanticsChanged": false,
  "architectureChanged": false,
  "hq01Verdict": "STILL WAITING HUMAN QA",
  "evidence": [
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-activity-desktop1440.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-activity-compact1024.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-activity-mobile390.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-activity-desktop1440-reduced.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-complete-desktop1440.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/10-nora-ui03-proof-report.json"
  ],
  "verdict": "WORKSPACE NORA ACTIVITY THREAD ALIGNMENT = CLOSED"
}

## Correction summary

- Moved transient Nora activity presentation from `composerTools` into the conversation thread as an ephemeral Nora turn (`data-testid=project-assistant-nora-activity`).
- Composer remains dedicated to input, + Contexte, @ Élément, active context, and Envoyer / Arrêter (■ when `stopAvailable`).
- Kept `project-assistant-status` as sr-only outside `composerTools` for phase/stop machine tests (no visible composer activity copy).
- Projection order: STOPPED / SENDING / ANSWERED / ERROR before lingering `busy`, so COMPLETE never overlays a real answer with « Nora travaille… ».
- STREAMING deliberately not projected or faked.
- Motion: 180ms ease-out entry; reduced-motion opacity-only path; thread `aria-live=polite` (no second live region on the activity article).

## Validation matrix (T01–T15)

| ID | Result | Notes |
|----|--------|-------|
| T01 START in thread | PASS | runtime + unit |
| T02 not in composerTools | PASS | toolsHasNora=false |
| T03 fallback Nora travaille… | PASS | no invented steps |
| T04 no fictive activity | PASS | |
| T05 COMPLETE clears transient | PASS | READY/ANSWERED, activityPresent=false |
| T06 STOPPED ≠ SUCCESS | PASS | unit + cancellation |
| T07 STOP when stopAvailable | PASS | unit/cancellation |
| T08 no fake STOP | PASS | unit |
| T09 ERROR/BLOCKED distinct | PASS | runtime ERROR cleared activity; unit STOPPED/ERROR |
| T10 reduced motion | PASS | noraActivityInReduced |
| T11 UI-01 preserved | PASS | |
| T12 UI-02 preserved | PASS | |
| T13 Conversation/Execution/Decision | PASS | no semantic/controller authority changes |
| T14 no durable fake assistant message | PASS | ephemeral article only |
| T15 anti-double-send | PASS | busy/canSend unchanged |

## Runtime

- URL: http://localhost:3020 (PID 11382) — LEFT RUNNING
- Project: P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05 (`prj:6b1151f7-7369-434a-a967-bbfe88c76f53`)
- Data preserved (no reset/clean)

## Explicit non-claims

- P6 PASS: NOT CLAIMED
- HQ-01: WAITING HUMAN QA (resume after this UI fix)
- No project commit / push / PR
- STREAMING: NOT OBSERVABLE ON CURRENT PRODUCT PATH
- Runtime STOPPED screenshot: NOT OBSERVED (cancel window); covered by tests

## Ask for ChatGPT

Confirm P6-HQA-UI-03 CLOSED under P3 §28 / DP06 behavioural contract (exploratory frames ≠ pixel canon), with UI-01/UI-02 still CLOSED, HQ-01 still waiting Human QA, and no Product/architecture expansion required.
