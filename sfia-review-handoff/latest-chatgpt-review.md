# ChatGPT Review Pack — P6 HUMAN QA MICRO UI FIX 02 (Composer Autogrow)

- timestamp: 2026-10-08T15:34:30Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- typology: QA / HUMAN PRODUCT VALIDATION / MICRO UI FIX
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: 90a59841a786ec5abd93c8ec4b50250b6010fa9c
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
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
```

## Accumulated P6 Human-QA micro-fixes

1. P6-HQA-UI-01 — Intro message truncation under sticky focus bar = CLOSED
2. P6-HQA-UI-02 — Conversation composer autogrow = CLOSED (this pack)

## P6-HQA-UI-02

# P6-HQA-UI-02 — Conversation composer autogrow

{
  "issueId": "P6-HQA-UI-02",
  "title": "Conversation composer does not auto-grow",
  "timestamp": "2026-10-08T15:34:30Z",
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "rootCause": "composerBox used fixed height equal to min-height + overflow:hidden; textarea had no scrollHeight sync — content stayed visually single-line / constrained",
  "filesChanged": [
    "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
    "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css",
    "projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css"
  ],
  "behaviorBefore": "long prompts stayed horizontally constrained; composer height did not grow with wrap/line breaks",
  "behaviorAfter": "textarea + composerBox autogrow with wrap/newlines; shrink-back on delete; max-height then internal scroll",
  "maxHeight": {
    "desktop": "192px (~8×24px)",
    "compact": "144px",
    "mobile": "96px"
  },
  "runtimeVerification": {
    "desktop1440": {
      "grew": true,
      "shrunk": true,
      "maxCapped": true,
      "scrollsInternally": true,
      "introOverlap": 0,
      "horizontalOverflow": false,
      "sendInViewport": true
    },
    "compact1024": {
      "grew": true,
      "shrunk": true,
      "maxCapped": true,
      "scrollsInternally": true,
      "introOverlap": 0,
      "horizontalOverflow": false,
      "sendInViewport": true
    },
    "mobile390": {
      "grew": true,
      "shrunk": true,
      "maxCapped": true,
      "scrollsInternally": true,
      "introOverlap": 0,
      "horizontalOverflow": false,
      "sendInViewport": true
    }
  },
  "regression": "PASS",
  "previousIntroFixPreserved": true,
  "productSemanticsChanged": false,
  "architectureChanged": false,
  "hq01Verdict": "STILL WAITING HUMAN QA",
  "evidence": [
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/09-composer-autogrow-metrics.json",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/09-composer-long-desktop1440.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/09-composer-long-compact1024.png",
    ".tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/09-composer-long-mobile390.png"
  ],
  "verdict": "WORKSPACE CONVERSATION COMPOSER AUTOGROW = CLOSED"
}


## Runtime verification metrics

```json
{
  "desktop1440": {
    "short": {
      "valueLen": 12,
      "inputH": 48,
      "inputScrollH": 48,
      "inputClientH": 48,
      "inputOverflowY": "auto",
      "inputMaxH": "192px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 118,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "long": {
      "valueLen": 549,
      "inputH": 120,
      "inputScrollH": 120,
      "inputClientH": 120,
      "inputOverflowY": "auto",
      "inputMaxH": "192px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 190,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "multi": {
      "valueLen": 39,
      "inputH": 120,
      "inputScrollH": 120,
      "inputClientH": 120,
      "inputOverflowY": "auto",
      "inputMaxH": "192px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 190,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "shrink": {
      "valueLen": 5,
      "inputH": 48,
      "inputScrollH": 48,
      "inputClientH": 48,
      "inputOverflowY": "auto",
      "inputMaxH": "192px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 118,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "max": {
      "valueLen": 3300,
      "inputH": 192,
      "inputScrollH": 720,
      "inputClientH": 192,
      "inputOverflowY": "auto",
      "inputMaxH": "192px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 262,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "grew": true,
    "shrunk": true,
    "maxCapped": true,
    "scrollsInternally": true
  },
  "compact1024": {
    "short": {
      "valueLen": 12,
      "inputH": 32,
      "inputScrollH": 32,
      "inputClientH": 32,
      "inputOverflowY": "auto",
      "inputMaxH": "144px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 64,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "long": {
      "valueLen": 549,
      "inputH": 113,
      "inputScrollH": 113,
      "inputClientH": 113,
      "inputOverflowY": "auto",
      "inputMaxH": "144px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 139,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "multi": {
      "valueLen": 39,
      "inputH": 81,
      "inputScrollH": 81,
      "inputClientH": 81,
      "inputOverflowY": "auto",
      "inputMaxH": "144px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 107,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "shrink": {
      "valueLen": 5,
      "inputH": 32,
      "inputScrollH": 32,
      "inputClientH": 32,
      "inputOverflowY": "auto",
      "inputMaxH": "144px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 64,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "max": {
      "valueLen": 3300,
      "inputH": 144,
      "inputScrollH": 680,
      "inputClientH": 144,
      "inputOverflowY": "auto",
      "inputMaxH": "144px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 170,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "grew": true,
    "shrunk": true,
    "maxCapped": true,
    "scrollsInternally": true
  },
  "mobile390": {
    "short": {
      "valueLen": 12,
      "inputH": 51,
      "inputScrollH": 51,
      "inputClientH": 51,
      "inputOverflowY": "auto",
      "inputMaxH": "96px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 69,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "long": {
      "valueLen": 549,
      "inputH": 96,
      "inputScrollH": 227,
      "inputClientH": 96,
      "inputOverflowY": "auto",
      "inputMaxH": "96px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 114,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "multi": {
      "valueLen": 39,
      "inputH": 96,
      "inputScrollH": 104,
      "inputClientH": 96,
      "inputOverflowY": "auto",
      "inputMaxH": "96px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 114,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "shrink": {
      "valueLen": 5,
      "inputH": 51,
      "inputScrollH": 51,
      "inputClientH": 51,
      "inputOverflowY": "auto",
      "inputMaxH": "96px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 69,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "max": {
      "valueLen": 3300,
      "inputH": 96,
      "inputScrollH": 1227,
      "inputClientH": 96,
      "inputOverflowY": "auto",
      "inputMaxH": "96px",
      "inputWhiteSpace": "pre-wrap",
      "boxH": 114,
      "toolsVisible": true,
      "sendVisible": true,
      "sendInViewport": true,
      "horizontalOverflow": false,
      "introOverlap": 0,
      "introTitle": "Dites à Nora ce que vous voulez accomplir"
    },
    "grew": true,
    "shrunk": true,
    "maxCapped": true,
    "scrollsInternally": true
  }
}
```

## Environment (still running for Morris)

```json
{
  "timestamp": "2026-10-08T15:06:52Z",
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "git": {
    "branch": "qa/sfia-studio-p6-global-integrated-product-qa",
    "head": "8a196be1a35ffa2d43e52beddc66b51eab56c99c",
    "originMain": "aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1"
  },
  "runtime": {
    "command": "cd projects/sfia-studio/app && npm run dev",
    "pid": "11382",
    "port": 3020,
    "url": "http://localhost:3020",
    "health": {
      "login": 200,
      "studioRedirectsToLoginWithoutSession": true,
      "apiAuthGetSession": 200
    },
    "logs": ".tmp-sfia-review/p6-global-integrated-qa/logs/studio-dev-human-qa.log",
    "leftRunning": true
  },
  "auth": {
    "status": "MORRIS_LOGIN_REQUIRED_IN_BROWSER",
    "playwrightSessionValidated": true,
    "loginUrl": "http://localhost:3020/login",
    "cta": "Continuer avec GitHub"
  },
  "provider": {
    "openaiKeyPresent": true,
    "cursorRealFlag": "1",
    "luna": "ACCESSIBLE (prior P6 snapshot)",
    "sol": "ACCESSIBLE (prior P6 snapshot)",
    "astra": "ACCESSIBLE (prior P6 snapshot)",
    "authorityProfile": "QA_NOMINAL_AUTHORIZED"
  },
  "humanQa": {
    "batchCount": 19,
    "executed": 0,
    "operatorPack": ".tmp-sfia-review/p6-global-integrated-qa/morris-operator-session.md",
    "notProven": [
      {
        "scenarioId": "P6-SC-CM-01",
        "title": "Conversational Recommendation materializes without premature HD",
        "reason": "REAL-boundary scenario not yet individually exercised beyond Phase1/3"
      },
      {
        "scenarioId": "P6-SC-CK-02",
        "title": "Insufficient method context handled honestly",
        "reason": "No direct AUTO mapping this continuation"
      }
    ],
    "cognitiveAdjudicationPack": "PENDING PHASE-6 PREPARATION"
  },
  "hq01": {
    "scenario": "P6-HQ-01 / P6-SC-MIN-03",
    "projectName": "P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05",
    "projectId": "prj:6b1151f7-7369-434a-a967-bbfe88c76f53",
    "cycleId": "cyc:p6-hq01-88c76f53",
    "workspaceUrl": "http://localhost:3020/studio/projects/prj%3A6b1151f7-7369-434a-a967-bbfe88c76f53",
    "startingState": "Project created + Cycle instance acknowledged (not started); required Deliverable NOT declared (Pilote HD deferred to Morris)",
    "screen": "Project workspace / Conversation (after login)",
    "ready": true,
    "humanDecisionTaken": false
  },
  "productRuntimeModified": false,
  "verdict": "READY FOR MORRIS HUMAN QA"
}

```

Studio left running on http://localhost:3020 for Morris to resume P6-HQ-01.

## Anti-claims

- Micro UI fix ≠ HQ-01 PASS
- Composer autogrow ≠ Product lifecycle semantic change
- No push / PR / merge

## Verdict

**WORKSPACE CONVERSATION COMPOSER AUTOGROW = CLOSED**

NEXT MORRIS ACTION = RESUME P6-HQ-01 IN http://localhost:3020

REMOTE_MATCHES_LOCAL: YES (verified after publish against actual final local HEAD `8a196be1a35ffa2d43e52beddc66b51eab56c99c`)
