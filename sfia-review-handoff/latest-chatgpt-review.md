# SFIA Studio — W4-D Review Pack FULL — Product Screens Visual Closure

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 14:28:47 CEST |
| **Cycle** | W4-D — Product Screens Visual Closure |
| **Type** | 8 — Delivery / implementation UI |
| **Profil** | CRITICAL |
| **Typologie** | INC |
| **GO Morris** | CONSUMED — SCREEN-BY-SCREEN RUNTIME ↔ VALIDATED PENPOT — PAGE 06 TARGET — PAGE 03 DETAILED NON-CONTRADICTORY — H-01 KEEP — H-02/H-04 MAY BE CLOSURE CANDIDATES — H-03 CARRY/W4-C — NO DOMAIN/PERSISTENCE/AUTHORITY — NO PENPOT MUTATION — NO FIGMA — NO REAL — NO PROJECT COMMIT/PUSH/PR/MERGE |
| **Prior handoff** | `1a6f8711…` (CORR-01 complete) |
| **Project integration** | **NONE** |

---

## 0. Local Git Truth (start) — PASS

- branch: `delivery/sfia-studio-w4-b-single-authority-path`
- HEAD / origin/main: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- staged: NONE
- initial tracked dirty: 21
- initial bin SHA: `965fdf1e623335ad4699c9f9954aacab68ef274ba1776b9870d29fc429546dac`
- initial untracked E2E SHA: `d0154023b4738b3da96f0702240a5844177d9095eea22ee0d90097595bfcdae9`

## 0b. CORR-01 governance reserve (OPEN)

**CORR-01 TEST-ONLY SCOPE EXCEPTION — OPEN GOVERNANCE RESERVE BEFORE FINAL GIT INTEGRATION GATE.**

CORR-01 modified assertion-only W3-A/B/C E2E files outside the explicitly enumerated CORR-01 test list.
Technical review PASS; product semantics unchanged. W4-D does not revert those tests.

---

## 1. Sources / CKC / Convergence

CKC Delivery: **ABSENT** — fallback routing + template + C1/C2 + PE docs + W4-UXR + current handoff.

Convergence: Product Experience Closure / W4 / W4-D.
KEEP functional W1–W3, single authority, H-01, business-first, EC progressive disclosure.
ADAPT VISUAL ONLY on ProductShell / Projects / Create / Workspace / surfaces.
OBSERVE_ONLY_W4C: UXR-06/07 Evidence/Recovery/Replan.
H-03 CARRY. REAL OUT. C6 DO NOT REOPEN.

Backlog: US-P1-10, US-P1-13.

---

## 2. Penpot MCP — direct read PASS

- MCP available: **YES**
- File: `63bdc57a-636a-81ba-8008-82d2a50d5233`
- Page 03 direct read: **YES** — **17** screens inventoried
- Page 06 direct read: **YES** — **12** boards
- Figma used: **NO**
- Penpot mutation: **NO**

### Inventories JSON
```json
{
  "timestamp": "2026-08-26T12:19:00.835334+00:00",
  "fileId": "63bdc57a-636a-81ba-8008-82d2a50d5233",
  "page03": {
    "id": "5de0e468-4bc9-80ee-8008-82d2f6f7e116",
    "name": "03 — Screens",
    "boards": [
      {
        "name": "SC-01 — Projects Entry / Resume",
        "id": "f96faf07-9757-8064-8008-8342ef9ffbf6",
        "w": 1440,
        "h": 1020,
        "intent": "Entry/resume projects list; Create+Resume"
      },
      {
        "name": "SC-02 — Create Project",
        "id": "f96faf07-9757-8064-8008-8342f00967d2",
        "w": 1440,
        "h": 920,
        "intent": "Create form Nom+Intention+Contexte+Créer+Annuler"
      },
      {
        "name": "SC-03 — Workspace / Qualification",
        "id": "f96faf07-9757-8064-8008-8342f04b1b3b",
        "w": 1440,
        "h": 1024,
        "intent": "Conversation-first + LPS; qualification"
      },
      {
        "name": "SC-04 — Trajectory / Options / Recommendation / HumanDecision",
        "id": "f96faf07-9757-8064-8008-8342f091da3d",
        "w": 1440,
        "h": 1024,
        "intent": "Option≠Rec≠HD; trajectory in LPS region"
      },
      {
        "name": "SC-05 — ExecutionContract Summary",
        "id": "f96faf07-9757-8064-8008-834317179cb3",
        "w": 1440,
        "h": 1100,
        "intent": "EC Pilote-first summary; Inspect primary"
      },
      {
        "name": "SC-06 — ExecutionContract Detail / Confirmation Required",
        "id": "f96faf07-9757-8064-8008-834317a7f741",
        "w": 1440,
        "h": 1120,
        "intent": "Inspect detail; Confirmation≠Execute"
      },
      {
        "name": "SC-07 — Authorization Blocked / Executor Insufficient",
        "id": "f96faf07-9757-8064-8008-83431809b949",
        "w": 1440,
        "h": 920,
        "intent": "Authority blocked; textual reason"
      },
      {
        "name": "SC-08 — Attempt Running",
        "id": "f96faf07-9757-8064-8008-8343184c4752",
        "w": 1440,
        "h": 920,
        "intent": "Attempt running textual status"
      },
      {
        "name": "SC-09 — SUCCESS / Evidence",
        "id": "f96faf07-9757-8064-8008-834340bfc1fe",
        "w": 1440,
        "h": 920,
        "intent": "SUCCESS + Evidence"
      },
      {
        "name": "SC-10 — STOP / Evidence / Next Action",
        "id": "f96faf07-9757-8064-8008-8343411bf67a",
        "w": 1440,
        "h": 920,
        "intent": "STOP + Evidence + next"
      },
      {
        "name": "SC-11 — FAIL / Recovery Action",
        "id": "f96faf07-9757-8064-8008-8343416932ea",
        "w": 1440,
        "h": 920,
        "intent": "FAIL + Recovery"
      },
      {
        "name": "SC-12 — Nora Analysis / Replanning",
        "id": "f96faf07-9757-8064-8008-834341afedfa",
        "w": 1440,
        "h": 920,
        "intent": "Nora replan analysis"
      },
      {
        "name": "SC-13 — Recovery / Resume",
        "id": "f96faf07-9757-8064-8008-83435d4a9af6",
        "w": 1440,
        "h": 920,
        "intent": "Recovery / Resume"
      },
      {
        "name": "SC-14 — Empty / Loading / Error / Blocked",
        "id": "f96faf07-9757-8064-8008-83435deabeb8",
        "w": 1440,
        "h": 980,
        "intent": "Empty/loading/error/blocked states; H-04"
      },
      {
        "name": "SC-R01 — Workspace / Trajectory Responsive",
        "id": "f96faf07-9757-8064-8008-83435e88a090",
        "w": 1480,
        "h": 2700,
        "intent": "Responsive workspace/trajectory"
      },
      {
        "name": "SC-R02 — EC / Confirmation Responsive",
        "id": "f96faf07-9757-8064-8008-834375783f19",
        "w": 1080,
        "h": 1900,
        "intent": "Responsive EC/Confirmation"
      },
      {
        "name": "SC-R03 — Evidence / Recovery Responsive",
        "id": "f96faf07-9757-8064-8008-83437671266c",
        "w": 1080,
        "h": 1900,
        "intent": "Responsive Evidence/Recovery"
      }
    ]
  },
  "page06": {
    "id": "2feb04ff-8811-8084-8008-8ab3837c737e",
    "name": "06 — W4 Product Experience Reconciliation",
    "boards": [
      {
        "name": "UXR-META — Reconciliation Contract",
        "id": "2feb04ff-8811-8084-8008-8ab3b1a7bd3f",
        "w": 1440,
        "h": 583,
        "intent": "provenance"
      },
      {
        "name": "UXR-00 — Reconciled E2E Journey / Product Truth Map",
        "id": "2feb04ff-8811-8084-8008-8ab3b2c1b5ed",
        "w": 1440,
        "h": 535,
        "intent": "journey map"
      },
      {
        "name": "UXR-01 — Project Entry / Create / Resume",
        "id": "2feb04ff-8811-8084-8008-8ab3e41d23e1",
        "w": 1440,
        "h": 449,
        "intent": "entry/create target"
      },
      {
        "name": "UXR-02 — Workspace / Nora / Qualification / LPS",
        "id": "2feb04ff-8811-8084-8008-8ab3e51c2988",
        "w": 1440,
        "h": 433,
        "intent": "workspace/nora"
      },
      {
        "name": "UXR-03 — Trajectory / Options / Recommendation / HumanDecision",
        "id": "2feb04ff-8811-8084-8008-8ab3e62104c9",
        "w": 1440,
        "h": 433,
        "intent": "trajectory/HD"
      },
      {
        "name": "UXR-04 — ExecutionContract / Inspection / Confirmation",
        "id": "2feb04ff-8811-8084-8008-8ab47b3bd3f7",
        "w": 1440,
        "h": 433,
        "intent": "EC progressive"
      },
      {
        "name": "UXR-05 — Authority / Execute / Running",
        "id": "2feb04ff-8811-8084-8008-8ab47c2caa5f",
        "w": 1440,
        "h": 411,
        "intent": "authority/execute"
      },
      {
        "name": "UXR-06 — SUCCESS / STOP / FAIL / Evidence",
        "id": "2feb04ff-8811-8084-8008-8ab47d3c9fea",
        "w": 1440,
        "h": 411,
        "intent": "W4-C boundary"
      },
      {
        "name": "UXR-07 — Nora Analysis / Replan / Recovery / Resume",
        "id": "2feb04ff-8811-8084-8008-8ab4979a65d3",
        "w": 1440,
        "h": 411,
        "intent": "W4-C boundary"
      },
      {
        "name": "UXR-08 — States / Accessibility / Primary Actions",
        "id": "2feb04ff-8811-8084-8008-8ab498e4f5f5",
        "w": 1440,
        "h": 335,
        "intent": "states/a11y/H-04"
      },
      {
        "name": "UXR-R01 — Responsive Reconciliation",
        "id": "2feb04ff-8811-8084-8008-8ab499bed9f0",
        "w": 2200,
        "h": 335,
        "intent": "responsive H-02"
      },
      {
        "name": "UXR-H01 — Workspace Composition Decision",
        "id": "2feb04ff-8811-8084-8008-8ab4b7d4579c",
        "w": 1600,
        "h": 752,
        "intent": "H-01 Option A adopted"
      }
    ]
  },
  "hierarchy": "page06 wins W4 experience; page03 detailed visual when non-contradictory"
}

```

### Pre-code contract
# W4-D Pre-Code Screen Contract

Timestamp: 2026-08-26T12:19:00.835334+00:00
Penpot file: `63bdc57a-636a-81ba-8008-82d2a50d5233`
Page 03: `5de0e468-4bc9-80ee-8008-82d2f6f7e116` — **17 boards inventoried via MCP**
Page 06: `2feb04ff-8811-8084-8008-8ab3837c737e` — **12 boards inventoried via MCP**

## Source hierarchy
1. C1/C2/EA semantic truth
2. **Page 06** = current W4 reconciled experience target (Morris-validated; stale “CANDIDATE” label ignored)
3. **Page 03** = detailed visual reference when non-contradictory
4. Current runtime candidate

## Page 03 — exact 17 screens
| Screen | Node id | W×H | Intent |
| --- | --- | --- | --- |
| SC-01 — Projects Entry / Resume | `f96faf07-9757-8064-8008-8342ef9ffbf6` | 1440×1020 | Entry/resume projects list; Create+Resume |
| SC-02 — Create Project | `f96faf07-9757-8064-8008-8342f00967d2` | 1440×920 | Create form Nom+Intention+Contexte+Créer+Annuler |
| SC-03 — Workspace / Qualification | `f96faf07-9757-8064-8008-8342f04b1b3b` | 1440×1024 | Conversation-first + LPS; qualification |
| SC-04 — Trajectory / Options / Recommendation / HumanDecision | `f96faf07-9757-8064-8008-8342f091da3d` | 1440×1024 | Option≠Rec≠HD; trajectory in LPS region |
| SC-05 — ExecutionContract Summary | `f96faf07-9757-8064-8008-834317179cb3` | 1440×1100 | EC Pilote-first summary; Inspect primary |
| SC-06 — ExecutionContract Detail / Confirmation Required | `f96faf07-9757-8064-8008-834317a7f741` | 1440×1120 | Inspect detail; Confirmation≠Execute |
| SC-07 — Authorization Blocked / Executor Insufficient | `f96faf07-9757-8064-8008-83431809b949` | 1440×920 | Authority blocked; textual reason |
| SC-08 — Attempt Running | `f96faf07-9757-8064-8008-8343184c4752` | 1440×920 | Attempt running textual status |
| SC-09 — SUCCESS / Evidence | `f96faf07-9757-8064-8008-834340bfc1fe` | 1440×920 | SUCCESS + Evidence |
| SC-10 — STOP / Evidence / Next Action | `f96faf07-9757-8064-8008-8343411bf67a` | 1440×920 | STOP + Evidence + next |
| SC-11 — FAIL / Recovery Action | `f96faf07-9757-8064-8008-8343416932ea` | 1440×920 | FAIL + Recovery |
| SC-12 — Nora Analysis / Replanning | `f96faf07-9757-8064-8008-834341afedfa` | 1440×920 | Nora replan analysis |
| SC-13 — Recovery / Resume | `f96faf07-9757-8064-8008-83435d4a9af6` | 1440×920 | Recovery / Resume |
| SC-14 — Empty / Loading / Error / Blocked | `f96faf07-9757-8064-8008-83435deabeb8` | 1440×980 | Empty/loading/error/blocked states; H-04 |
| SC-R01 — Workspace / Trajectory Responsive | `f96faf07-9757-8064-8008-83435e88a090` | 1480×2700 | Responsive workspace/trajectory |
| SC-R02 — EC / Confirmation Responsive | `f96faf07-9757-8064-8008-834375783f19` | 1080×1900 | Responsive EC/Confirmation |
| SC-R03 — Evidence / Recovery Responsive | `f96faf07-9757-8064-8008-83437671266c` | 1080×1900 | Responsive Evidence/Recovery |

## Page 06 — boards
| Board | Node id | W×H | Role |
| --- | --- | --- | --- |
| UXR-META — Reconciliation Contract | `2feb04ff-8811-8084-8008-8ab3b1a7bd3f` | 1440×583 | provenance |
| UXR-00 — Reconciled E2E Journey / Product Truth Map | `2feb04ff-8811-8084-8008-8ab3b2c1b5ed` | 1440×535 | journey map |
| UXR-01 — Project Entry / Create / Resume | `2feb04ff-8811-8084-8008-8ab3e41d23e1` | 1440×449 | entry/create target |
| UXR-02 — Workspace / Nora / Qualification / LPS | `2feb04ff-8811-8084-8008-8ab3e51c2988` | 1440×433 | workspace/nora |
| UXR-03 — Trajectory / Options / Recommendation / HumanDecision | `2feb04ff-8811-8084-8008-8ab3e62104c9` | 1440×433 | trajectory/HD |
| UXR-04 — ExecutionContract / Inspection / Confirmation | `2feb04ff-8811-8084-8008-8ab47b3bd3f7` | 1440×433 | EC progressive |
| UXR-05 — Authority / Execute / Running | `2feb04ff-8811-8084-8008-8ab47c2caa5f` | 1440×411 | authority/execute |
| UXR-06 — SUCCESS / STOP / FAIL / Evidence | `2feb04ff-8811-8084-8008-8ab47d3c9fea` | 1440×411 | W4-C boundary |
| UXR-07 — Nora Analysis / Replan / Recovery / Resume | `2feb04ff-8811-8084-8008-8ab4979a65d3` | 1440×411 | W4-C boundary |
| UXR-08 — States / Accessibility / Primary Actions | `2feb04ff-8811-8084-8008-8ab498e4f5f5` | 1440×335 | states/a11y/H-04 |
| UXR-R01 — Responsive Reconciliation | `2feb04ff-8811-8084-8008-8ab499bed9f0` | 2200×335 | responsive H-02 |
| UXR-H01 — Workspace Composition Decision | `2feb04ff-8811-8084-8008-8ab4b7d4579c` | 1600×752 | H-01 Option A adopted |

## Observed runtime gaps (pre-code)
- Entry CTA copy/density vs SC-01 (“Créer un projet”; card actions vs chevron list)
- Empty state CTA “Décrire une intention” vs H-04 / SC-14 “Créer un projet” single primary
- Project cards: Penpot shows badge + primary/secondary actions; runtime is denser list+chevron
- Create form already CORR-01 business-first; residual visual density vs SC-02
- H-01 Option A already in runtime; visual polish remaining (region hierarchy)
- Option/Rec/HD distinction exists; reinforce badges/cards vs SC-04
- EC progressive disclosure already W4-BR/CORR; residual hierarchy vs SC-05/06
- Authority blocked presentation exists; align textual hierarchy vs SC-07
- SC-09…13 / UXR-06/07 = OBSERVE_ONLY_W4C (no Evidence/Recovery/Replan delivery)
- Responsive: prove 1440/1024/390; H-02 may become CLOSURE CANDIDATE by evidence

## Implementation bound
Presentation-only under `pre-m6-product-ui/**`. No domain/persistence/authority/W4-C.


### Pre-code closure matrix
# W4-D Screen Closure Matrix (pre-code)

Timestamp: 2026-08-26T12:19:00.835334+00:00

| SC | Penpot id | UXR | S | UF | Target state | Route | Runtime state | Evidence now | Gap | Class | W4-D action | Viewports | A11Y | W4-C | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SC-01 — Projects Entry / Resume | `f96faf07-9757-8064-8008-8342ef9ffbf6` | UXR-01 | S1 | UF-01 | Entry/resume projects list; Create+Resume | `/studio` | projects list / empty | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-02 — Create Project | `f96faf07-9757-8064-8008-8342f00967d2` | UXR-01 | S2 | UF-01 | Create form Nom+Intention+Contexte+Créer+Annuler | `/studio/projects/new` | create form | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-03 — Workspace / Qualification | `f96faf07-9757-8064-8008-8342f04b1b3b` | UXR-02 / UXR-H01 | S3+S4+S5 | UF-02 | Conversation-first + LPS; qualification | `/studio/projects/:id` | workspace qualify + H-01 | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-04 — Trajectory / Options / Recommendation / HumanDecision | `f96faf07-9757-8064-8008-8342f091da3d` | UXR-03 / UXR-H01 | S4+S5+S6 | UF-03 | Option≠Rec≠HD; trajectory in LPS region | `/studio/projects/:id` | options/rec/HD | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-05 — ExecutionContract Summary | `f96faf07-9757-8064-8008-834317179cb3` | UXR-04 | S10 | UF-04 | EC Pilote-first summary; Inspect primary | `/studio/projects/:id` | EC summary | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-06 — ExecutionContract Detail / Confirmation Required | `f96faf07-9757-8064-8008-834317a7f741` | UXR-04 | S10+S11 | UF-04 | Inspect detail; Confirmation≠Execute | `/studio/projects/:id` | EC inspect+confirm | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-07 — Authorization Blocked / Executor Insufficient | `f96faf07-9757-8064-8008-83431809b949` | UXR-05 | S11 | UF-05 | Authority blocked; textual reason | `/studio/projects/:id` | authority blocked | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-08 — Attempt Running | `f96faf07-9757-8064-8008-8343184c4752` | UXR-05 | S11 | UF-05 | Attempt running textual status | `/studio/projects/:id` | attempt running | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-09 — SUCCESS / Evidence | `f96faf07-9757-8064-8008-834340bfc1fe` | UXR-06 | S12 | UF-06 | SUCCESS + Evidence | `/studio/projects/:id` | SUCCESS/Evidence | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |
| SC-10 — STOP / Evidence / Next Action | `f96faf07-9757-8064-8008-8343411bf67a` | UXR-06 | S12 | UF-06 | STOP + Evidence + next | `/studio/projects/:id` | STOP/Evidence | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |
| SC-11 — FAIL / Recovery Action | `f96faf07-9757-8064-8008-8343416932ea` | UXR-06 / UXR-07 | S12+S13 | UF-07 | FAIL + Recovery | `/studio/projects/:id` | FAIL/Recovery | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |
| SC-12 — Nora Analysis / Replanning | `f96faf07-9757-8064-8008-834341afedfa` | UXR-07 | S13 | UF-07 | Nora replan analysis | `/studio/projects/:id` | Nora replan | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |
| SC-13 — Recovery / Resume | `f96faf07-9757-8064-8008-83435d4a9af6` | UXR-07 | S13 | UF-07 | Recovery / Resume | `/studio/projects/:id` | Recovery/Resume | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |
| SC-14 — Empty / Loading / Error / Blocked | `f96faf07-9757-8064-8008-83435deabeb8` | UXR-08 / UXR-01 | transversal | WF-09 | Empty/loading/error/blocked states; H-04 | `/studio (+ states)` | empty/loading/error/blocked | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-R01 — Workspace / Trajectory Responsive | `f96faf07-9757-8064-8008-83435e88a090` | UXR-R01 | responsive | R | Responsive workspace/trajectory | `multi viewport` | workspace responsive | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-R02 — EC / Confirmation Responsive | `f96faf07-9757-8064-8008-834375783f19` | UXR-R01 | responsive | R | Responsive EC/Confirmation | `multi viewport` | EC responsive | prior W4 captures + CORR | visual fidelity vs page03/06 | **ADAPT_W4D** | adapt presentation | 1440/1024/390 | A11Y-PC applicable | IN | OPEN |
| SC-R03 — Evidence / Recovery Responsive | `f96faf07-9757-8064-8008-83437671266c` | UXR-R01 / UXR-06/07 | responsive | R | Responsive Evidence/Recovery | `multi viewport` | Evidence/Recovery responsive | prior W4 captures + CORR | Evidence/Recovery/Replan out of W4-D | **OBSERVE_ONLY_W4C** | observe only; no functional delivery | observe if incidental | non-regression only | OUT_W4C | OPEN |


---

## 3. W4-D files modified (presentation only)

- `product-tokens.css` — Inter stack, focus ring, info tokens; Penpot reference note
- `ProductShell.module.css` — font + focus-visible + overflow-x clip
- `ProjectsPage.tsx` / `.module.css` — SC-01/14 Entry cards + H-04 Créer un projet
- `NewProjectIntentionPage.tsx` / `.module.css` — SC-02 hero chrome
- `ProjectWorkspacePage.module.css` — H-01 region containment frame
- `TrajectorySurface.tsx` / `.module.css` — Option/Rec/HD section kinds + card hierarchy
- `HistorySurface.tsx` — business-first history note
- **NEW** `e2e/studio-w4d-product-screens-visual-closure.spec.ts` — visual capture orchestration

Domain / persistence / actions: **NONE**

---

## 4. W4-D-ONLY PATCH (complete)
```diff

--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css	2026-08-26 14:20:32
@@ -1,12 +1,14 @@
 /**
  * Pre-M6 Option A product presentation tokens.
  *
- * Values transcribed from the manual Figma evidence set (MCP was rate-limited),
- * see .tmp-sfia-review/figma/manual-evidence/. Prefixed `--pm6-` so this layer
- * never collides with the legacy `--sfia-` token set.
+ * Visual reference: Penpot file 63bdc57a… pages 03 + 06 (W4-D).
+ * Prefixed `--pm6-` so this layer never collides with the legacy `--sfia-` set.
+ * Inter is the Penpot typography reference — system fallback only (no font files).
  */

 :root {
+  --pm6-font: Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
+
   --pm6-canvas: #f3f1ec;
   --pm6-canvas-raised: #f7f5f0;
   --pm6-surface: #ffffff;
@@ -37,6 +39,8 @@
   --pm6-warn-tint: #fdf1de;
   --pm6-ok: #1f6b4f;
   --pm6-ok-tint: #e7f3ed;
+  --pm6-info: #1f4f6b;
+  --pm6-info-tint: #e7f1f6;

   --pm6-radius-sm: 8px;
   --pm6-radius-md: 12px;
@@ -48,6 +52,8 @@
   --pm6-shadow-raised: 0 2px 4px rgba(27, 35, 32, 0.06),
     0 16px 40px rgba(27, 35, 32, 0.08);

+  --pm6-focus-ring: 0 0 0 3px color-mix(in srgb, var(--pm6-forest) 35%, transparent);
+
   --pm6-space-1: 4px;
   --pm6-space-2: 8px;
   --pm6-space-3: 12px;
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css	2026-08-26 10:26:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css	2026-08-26 14:20:51
@@ -4,8 +4,15 @@
   flex-direction: column;
   background: var(--pm6-canvas);
   color: var(--pm6-ink);
+  font-family: var(--pm6-font);
+  overflow-x: clip;
 }

+.shell :where(a, button, input, textarea, summary, select):focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
 .header {
   position: sticky;
   top: 0;
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx	2026-08-26 10:26:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx	2026-08-26 14:21:13
@@ -42,7 +42,7 @@
     case "draft":
       return { label: "Brouillon", tone: "neutral" };
     case "active":
-      return { label: "Qualification en cours", tone: "active" };
+      return { label: "Actif", tone: "active" };
     case "paused":
       return { label: "En attente de décision", tone: "waiting" };
     case "closed":
@@ -91,30 +91,35 @@

   const subtitle =
     count === null
-      ? "Nora recommande, vous décidez"
+      ? "Entrée / reprise — Nora recommande, vous décidez"
       : count === 0
-        ? "Aucun projet · Nora recommande, vous décidez"
-        : `${count} projet${count > 1 ? "s" : ""} · Nora recommande, vous décidez`;
+        ? "Aucun projet · créez pour démarrer"
+        : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`;

+  const showHeroCreate = state.status !== "empty";
+
   return (
     <div className={styles.page} data-testid="studio-projects-home">
       <header className={styles.hero}>
         <div className={styles.heroText}>
-          <h1 className={styles.heroTitle}>Projets</h1>
+          <p className={styles.heroEyebrow}>SFIA Studio</p>
+          <h1 className={styles.heroTitle}>Projets — entrée / reprise</h1>
           <p className={styles.heroSubtitle}>{subtitle}</p>
         </div>
-        <Link
-          href="/studio/projects/new"
-          className={styles.heroCta}
-          data-testid="studio-projects-create"
-        >
-          + Nouveau projet
-        </Link>
+        {showHeroCreate ? (
+          <Link
+            href="/studio/projects/new"
+            className={styles.heroCta}
+            data-testid="studio-projects-create"
+          >
+            Créer un projet
+          </Link>
+        ) : null}
       </header>

       {state.status === "loading" ? (
         <p className={styles.hint} data-testid="studio-projects-loading">
-          Chargement de vos projets…
+          Chargement en cours…
         </p>
       ) : null}

@@ -129,53 +134,58 @@

       {state.status === "empty" ? (
         <div className={styles.empty} data-testid="studio-projects-empty">
-          <p className={styles.emptyTitle}>Aucun projet pour le moment</p>
+          <p className={styles.emptyTitle}>Aucun projet.</p>
           <p className={styles.emptyBody}>
-            Décrivez une intention pour démarrer. Nora qualifie, vous décidez.
+            Une seule action primaire pour démarrer. Nora qualifie ensuite ;
+            vous décidez.
           </p>
-          <Link href="/studio/projects/new" className={styles.emptyCta}>
-            Décrire une intention
+          <Link
+            href="/studio/projects/new"
+            className={styles.emptyCta}
+            data-testid="studio-projects-create"
+          >
+            Créer un projet
           </Link>
         </div>
       ) : null}

       {state.status === "ready" ? (
-        <div className={styles.listCard}>
-          <ul className={styles.list} data-testid="studio-projects-list">
-            {state.projects.map((project) => {
-              const badge = badgeFor(project.status);
-              return (
-                <li key={project.projectId} className={styles.row}>
+        <ul className={styles.cardList} data-testid="studio-projects-list">
+          {state.projects.map((project) => {
+            const badge = badgeFor(project.status);
+            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
+            return (
+              <li key={project.projectId} className={styles.card}>
+                <div className={styles.cardMain}>
+                  <h2 className={styles.cardTitle}>{project.title}</h2>
+                  <span className={styles.badge} data-tone={badge.tone}>
+                    {badge.label}
+                  </span>
+                  <p className={styles.cardDescription}>
+                    {project.objective?.trim() ||
+                      project.context?.trim() ||
+                      "Ouvrez le projet pour poursuivre avec Nora."}
+                  </p>
+                  <p className={styles.cardMeta}>
+                    {formatRelativeFr(project.updatedAt)}
+                  </p>
+                </div>
+                <div className={styles.cardActions}>
                   <Link
-                    href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
-                    className={styles.rowLink}
+                    href={href}
+                    className={styles.cardPrimary}
                     data-testid="studio-projects-open"
                   >
-                    <span className={styles.rowMain}>
-                      <span className={styles.rowTitleLine}>
-                        <span className={styles.rowTitle}>{project.title}</span>
-                        <span className={styles.badge} data-tone={badge.tone}>
-                          {badge.label}
-                        </span>
-                      </span>
-                      <span className={styles.rowDescription}>
-                        {project.objective?.trim() ||
-                          project.context?.trim() ||
-                          "Ouvrez le projet pour poursuivre avec Nora."}
-                      </span>
-                      <span className={styles.rowMeta}>
-                        {formatRelativeFr(project.updatedAt)}
-                      </span>
-                    </span>
-                    <span className={styles.chevron} aria-hidden>
-                      ›
-                    </span>
+                    Reprendre
                   </Link>
-                </li>
-              );
-            })}
-          </ul>
-        </div>
+                  <Link href={href} className={styles.cardSecondary}>
+                    Voir l&apos;état
+                  </Link>
+                </div>
+              </li>
+            );
+          })}
+        </ul>
       ) : null}
     </div>
   );
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css	2026-08-26 10:26:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css	2026-08-26 14:21:13
@@ -10,6 +10,11 @@
   align-items: flex-end;
   justify-content: space-between;
   gap: var(--pm6-space-4);
+  padding: var(--pm6-space-5);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
 }

 .heroText {
@@ -19,14 +24,21 @@
   min-width: 0;
 }

-.heroTitle {
+.heroEyebrow {
   margin: 0;
-  font-size: 2rem;
+  font-size: 0.82rem;
   font-weight: 600;
-  letter-spacing: -0.01em;
   color: var(--pm6-forest);
 }

+.heroTitle {
+  margin: 0;
+  font-size: 1.85rem;
+  font-weight: 650;
+  letter-spacing: -0.015em;
+  color: var(--pm6-ink);
+}
+
 .heroSubtitle {
   margin: 0;
   font-size: 0.92rem;
@@ -34,33 +46,44 @@
 }

 .heroCta,
-.emptyCta {
+.emptyCta,
+.cardPrimary,
+.cardSecondary {
   display: inline-flex;
   align-items: center;
+  justify-content: center;
   border-radius: var(--pm6-radius-md);
-  padding: 11px 20px;
+  padding: 11px 18px;
   font-size: 0.9rem;
   font-weight: 600;
   text-decoration: none;
-  transition: background 120ms ease;
+  transition: background 120ms ease, border-color 120ms ease;
 }

-.heroCta {
+.heroCta,
+.emptyCta,
+.cardPrimary {
   background: var(--pm6-forest);
   border: 1px solid var(--pm6-forest);
   color: var(--pm6-forest-ink);
 }

-.heroCta:hover {
+.heroCta:hover,
+.emptyCta:hover,
+.cardPrimary:hover {
   background: var(--pm6-forest-hover);
 }

-.emptyCta {
+.cardSecondary {
   background: var(--pm6-surface);
-  border: 1px solid var(--pm6-forest);
-  color: var(--pm6-forest);
+  border: 1px solid var(--pm6-border-strong);
+  color: var(--pm6-ink);
 }

+.cardSecondary:hover {
+  background: var(--pm6-surface-sunken);
+}
+
 .hint {
   margin: 0;
   font-size: 0.86rem;
@@ -89,16 +112,17 @@
   flex-direction: column;
   align-items: flex-start;
   gap: var(--pm6-space-3);
-  border: 1px dashed var(--pm6-border-strong);
+  border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-lg);
-  background: var(--pm6-canvas-raised);
+  background: var(--pm6-surface);
+  box-shadow: var(--pm6-shadow-card);
   padding: var(--pm6-space-7) var(--pm6-space-5);
 }

 .emptyTitle {
   margin: 0;
-  font-size: 1.05rem;
-  font-weight: 600;
+  font-size: 1.25rem;
+  font-weight: 650;
   color: var(--pm6-ink);
 }

@@ -110,55 +134,40 @@
   max-width: 46ch;
 }

-.listCard {
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  overflow: hidden;
-}
-
-.list {
+.cardList {
   list-style: none;
   margin: 0;
   padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
 }

-.row + .row {
-  border-top: 1px solid var(--pm6-border-soft);
-}
-
-.rowLink {
+.card {
   display: flex;
-  align-items: center;
+  flex-wrap: wrap;
+  align-items: flex-start;
+  justify-content: space-between;
   gap: var(--pm6-space-4);
   padding: var(--pm6-space-4) var(--pm6-space-5);
-  text-decoration: none;
-  color: inherit;
-  transition: background 120ms ease;
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
 }

-.rowLink:hover {
-  background: var(--pm6-surface-sunken);
-}
-
-.rowMain {
+.cardMain {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-1);
+  align-items: flex-start;
+  gap: var(--pm6-space-2);
   flex: 1;
   min-width: 0;
 }

-.rowTitleLine {
-  display: flex;
-  flex-wrap: wrap;
-  align-items: center;
-  gap: var(--pm6-space-3);
-}
-
-.rowTitle {
-  font-size: 1rem;
+.cardTitle {
+  margin: 0;
+  font-size: 1.05rem;
   font-weight: 600;
   color: var(--pm6-ink);
   overflow-wrap: anywhere;
@@ -169,9 +178,8 @@
   align-items: center;
   padding: 3px 10px;
   border-radius: var(--pm6-radius-pill);
-  font-size: 0.7rem;
+  font-size: 0.72rem;
   font-weight: 600;
-  letter-spacing: 0.03em;
   border: 1px solid transparent;
 }

@@ -188,41 +196,62 @@
 }

 .badge[data-tone="waiting"] {
-  background: var(--pm6-cream);
+  background: var(--pm6-warn-tint);
   border-color: var(--pm6-cream-border);
-  color: var(--pm6-gold-strong);
+  color: var(--pm6-warn);
 }

-.rowDescription {
+.cardDescription {
+  margin: 0;
   font-size: 0.88rem;
   line-height: 1.5;
   color: var(--pm6-muted-strong);
   overflow-wrap: anywhere;
 }

-.rowMeta {
+.cardMeta {
+  margin: 0;
   font-size: 0.78rem;
   color: var(--pm6-muted);
 }

-.chevron {
-  font-size: 1.4rem;
-  line-height: 1;
-  color: var(--pm6-muted);
+.cardActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: var(--pm6-space-2);
   flex: 0 0 auto;
 }

-@media (max-width: 767px) {
+@media (max-width: 1024px) {
   .heroTitle {
     font-size: 1.6rem;
   }
+}

-  .rowLink {
+@media (max-width: 767px) {
+  .hero {
     padding: var(--pm6-space-4);
   }

-  .heroCta {
+  .heroTitle {
+    font-size: 1.45rem;
+  }
+
+  .heroCta,
+  .emptyCta {
     width: 100%;
-    justify-content: center;
   }
+
+  .card {
+    padding: var(--pm6-space-4);
+  }
+
+  .cardActions {
+    width: 100%;
+  }
+
+  .cardPrimary,
+  .cardSecondary {
+    flex: 1 1 auto;
+  }
 }
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx	2026-08-26 14:23:04
@@ -189,6 +189,7 @@
   return (
     <div className={styles.page}>
       <header className={styles.hero}>
+        <p className={styles.heroEyebrow}>SFIA Studio</p>
         <h1 className={styles.heroTitle}>Nouveau projet</h1>
         <p className={styles.heroSubtitle}>
           Nommez le projet et décrivez votre intention. Nora qualifiera ensuite —
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css	2026-08-26 10:26:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css	2026-08-26 14:22:32
@@ -9,14 +9,26 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
+  padding: var(--pm6-space-5);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
 }

+.heroEyebrow {
+  margin: 0;
+  font-size: 0.82rem;
+  font-weight: 600;
+  color: var(--pm6-forest);
+}
+
 .heroTitle {
   margin: 0;
   font-size: 1.8rem;
-  font-weight: 600;
+  font-weight: 650;
   letter-spacing: -0.01em;
-  color: var(--pm6-forest);
+  color: var(--pm6-ink);
 }

 .heroSubtitle {
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css	2026-08-26 14:24:15
@@ -115,13 +115,17 @@
   flex-direction: column;
   gap: var(--pm6-space-4);
   min-width: 0;
+  padding: var(--pm6-space-3);
+  background: var(--pm6-canvas-raised);
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-lg);
 }

 .stateTrajectoryHead {
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-1);
-  padding: 0 var(--pm6-space-1);
+  padding: 0;
 }

 .stateTrajectoryEyebrow {
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx	2026-08-26 14:22:23
@@ -641,6 +641,9 @@
             data-testid="w2-options"
           >
             <h3 id="w2-options-title" className={styles.blockTitle}>
+              <span className={styles.sectionKind} data-kind="option">
+                Option
+              </span>
               Options proposées
             </h3>
             <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
@@ -695,6 +698,9 @@
             data-testid="w2-recommendation"
           >
             <h3 id="w2-reco-title" className={styles.recoTitle}>
+              <span className={styles.sectionKind} data-kind="recommendation">
+                Recommandation
+              </span>
               {optionSet.recommendation.label}
             </h3>
             <p className={styles.blockBody}>
@@ -717,6 +723,9 @@
           data-testid="w2-decision"
         >
           <h3 id="w2-decision-title" className={styles.blockTitle}>
+            <span className={styles.sectionKind} data-kind="decision">
+              Décision humaine
+            </span>
             Décision de trajectoire — {decision.statusLabel}
           </h3>
           <dl className={styles.facts}>
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css	2026-08-26 14:22:27
@@ -116,22 +116,76 @@
   padding: var(--pm6-space-4);
   border-radius: var(--pm6-radius-md);
   border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface);
+  box-shadow: var(--pm6-shadow-card);
+}
+
+.recommendation {
+  border-color: color-mix(in srgb, var(--pm6-info) 28%, var(--pm6-border-soft));
+  background: var(--pm6-info-tint);
+}
+
+.decision {
+  border-color: color-mix(in srgb, var(--pm6-forest) 35%, var(--pm6-border-soft));
+  background: var(--pm6-forest-tint);
+}
+
+.blocked {
+  border-color: color-mix(in srgb, var(--pm6-danger) 35%, var(--pm6-border-soft));
+  background: var(--pm6-danger-tint);
+}
+
+.sectionKind {
+  display: inline-flex;
+  align-items: center;
+  margin-right: var(--pm6-space-2);
+  padding: 0.15rem 0.55rem;
+  border-radius: var(--pm6-radius-pill);
+  font-size: 0.66rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  vertical-align: middle;
+}
+
+.sectionKind[data-kind="option"] {
   background: var(--pm6-surface-sunken);
+  border: 1px solid var(--pm6-border);
+  color: var(--pm6-muted-strong);
 }

+.sectionKind[data-kind="recommendation"] {
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-info);
+  color: var(--pm6-info);
+}
+
+.sectionKind[data-kind="decision"] {
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-forest);
+  color: var(--pm6-forest);
+}
+
 .blockTitle {
   margin: 0;
   font-size: 0.92rem;
   font-weight: 600;
   color: var(--pm6-ink);
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
 }

 .recoTitle {
   margin: 0;
-  font-size: 0.78rem;
-  font-weight: 700;
-  letter-spacing: 0.06em;
-  color: var(--pm6-forest);
+  font-size: 0.92rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
 }

 .optionList {
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx	2026-08-26 10:26:32
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx	2026-08-26 14:23:05
@@ -180,9 +180,8 @@
           Ce qui est réellement enregistré
         </h2>
         <p className={styles.note}>
-          Repères factuels du projet. La conversation, la proposition et la
-          confirmation demandée restent process-local et n&apos;apparaissent pas
-          ici.
+          Repères factuels du projet seulement. Les détails techniques restent
+          secondaires ; la conversation n&apos;est pas rejouée ici.
         </p>
       </header>
       <ol className={styles.timeline}>
--- a/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts	2026-08-26 14:27:32
+++ b/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts	2026-08-26 14:24:52
@@ -0,0 +1,343 @@
+/**
+ * W4-D — Product Screens Visual Closure captures on canonical /studio.
+ * Extends W4-B single-authority flow with Entry/Create/responsive coverage.
+ * Presentation regression only — no new product semantics.
+ */
+import { test, expect, type Page } from "@playwright/test";
+import fs from "node:fs";
+import path from "node:path";
+import crypto from "node:crypto";
+
+const CAPTURE_ROOT = path.resolve(
+  process.cwd(),
+  "../../../.tmp-sfia-review/runtime-captures/w4-d",
+);
+const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
+const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");
+
+async function capture(
+  page: Page,
+  id: string,
+  meta: {
+    sc: string;
+    state: string;
+    viewport: { width: number; height: number };
+    observation: string;
+  },
+) {
+  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+  const file = path.join(CAPTURE_ROOT, `${id}.png`);
+  await page.screenshot({ path: file, fullPage: true });
+  const sha256 = crypto
+    .createHash("sha256")
+    .update(fs.readFileSync(file))
+    .digest("hex");
+  const timestamp = new Date().toISOString();
+  const row = {
+    id,
+    file: path.basename(file),
+    timestamp,
+    sha256,
+    route: page.url(),
+    ...meta,
+    provenance:
+      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-D PRODUCT SCREENS VISUAL CLOSURE",
+  };
+  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
+  fs.appendFileSync(
+    MANIFEST,
+    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
+  );
+}
+
+async function assertNoSecondAuthorityPath(page: Page) {
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+}
+
+async function assertNoHorizontalOverflow(page: Page) {
+  const overflow = await page.evaluate(() => {
+    const doc = document.documentElement;
+    return {
+      scrollWidth: doc.scrollWidth,
+      clientWidth: doc.clientWidth,
+    };
+  });
+  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
+}
+
+test.describe("W4-D product screens visual closure", () => {
+  test.describe.configure({ timeout: 420_000 });
+
+  test.beforeEach(async ({ page }) => {
+    await page.addInitScript(() => {
+      (
+        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
+      ).__SFIA_E2E_QA_CONTROL__ = true;
+    });
+  });
+
+  test("entry/create/workspace visual path + responsive trio + authority chain", async ({
+    page,
+  }) => {
+    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+    fs.writeFileSync(MANIFEST_JSONL, "");
+    fs.writeFileSync(
+      MANIFEST,
+      [
+        "# W4-D runtime captures",
+        "",
+        "| file | timestamp | viewport | route | SC | state | observation |",
+        "| --- | --- | --- | --- | --- | --- | --- |",
+        "",
+      ].join("\n"),
+    );
+
+    // --- Entry / empty-capable home ---
+    await page.setViewportSize({ width: 1440, height: 900 });
+    await page.goto("/studio");
+    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
+    await expect(page.getByTestId("studio-projects-create")).toBeVisible();
+    await expect(page.getByTestId("studio-projects-create")).toHaveText(
+      /Créer un projet/,
+    );
+    await capture(page, "SC-01-entry-1440", {
+      sc: "SC-01",
+      state: "projects entry",
+      viewport: { width: 1440, height: 900 },
+      observation: "Entry CTA Créer un projet; shell coherent",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 1024, height: 900 });
+    await capture(page, "SC-01-entry-1024", {
+      sc: "SC-01",
+      state: "projects entry",
+      viewport: { width: 1024, height: 900 },
+      observation: "Entry contained at 1024",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 390, height: 844 });
+    await capture(page, "SC-01-entry-390", {
+      sc: "SC-01",
+      state: "projects entry",
+      viewport: { width: 390, height: 844 },
+      observation: "Entry contained at 390",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    // --- Create ---
+    await page.setViewportSize({ width: 1440, height: 900 });
+    await page.goto("/studio/projects/new");
+    await expect(page.getByTestId("create-project-form")).toBeVisible();
+    await expect(page.getByLabel("Intention du projet")).toBeVisible();
+    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
+    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
+    await capture(page, "SC-02-create-1440", {
+      sc: "SC-02",
+      state: "create form",
+      viewport: { width: 1440, height: 900 },
+      observation: "Create form business-first; Créer + Annuler",
+    });
+
+    await page.setViewportSize({ width: 1024, height: 900 });
+    await capture(page, "SC-02-create-1024", {
+      sc: "SC-02",
+      state: "create form",
+      viewport: { width: 1024, height: 900 },
+      observation: "Create at 1024",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 390, height: 844 });
+    await capture(page, "SC-02-create-390", {
+      sc: "SC-02",
+      state: "create form",
+      viewport: { width: 390, height: 844 },
+      observation: "Create at 390",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    // --- Deterministic authority path ---
+    await page.setViewportSize({ width: 1440, height: 900 });
+    const name = `W4-D Visual ${Date.now()}`;
+    await page.goto("/studio/projects/new");
+    await page.locator("#project-name").fill(name);
+    await page
+      .locator("#project-objective")
+      .fill("W4-D visual closure deterministic");
+    await page.locator("#project-context").fill("REAL=0");
+    await page.getByTestId("create-project-submit").click();
+    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
+      timeout: 30_000,
+    });
+    await page.getByTestId("open-project-workspace").click();
+    await expect(page.getByTestId("project-principal")).toBeVisible({
+      timeout: 30_000,
+    });
+    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
+    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
+    await capture(page, "SC-03-workspace-h01-1440", {
+      sc: "SC-03",
+      state: "workspace H-01",
+      viewport: { width: 1440, height: 900 },
+      observation: "Conversation + H-01 LPS/Trajectory region",
+    });
+
+    const input = page.getByTestId("project-assistant-input");
+    await expect(input).toBeEnabled({ timeout: 15_000 });
+    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
+    await page.getByTestId("project-assistant-send").click();
+    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
+      { timeout: 60_000 },
+    );
+    await assertNoSecondAuthorityPath(page);
+    await capture(page, "SC-03-qualified-1440", {
+      sc: "SC-03",
+      state: "qualified",
+      viewport: { width: 1440, height: 900 },
+      observation: "Nora qualification; single authority",
+    });
+
+    await page.getByTestId("w2-propose-options").click();
+    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
+    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
+    await capture(page, "SC-04-options-rec-1440", {
+      sc: "SC-04",
+      state: "options + recommendation",
+      viewport: { width: 1440, height: 900 },
+      observation: "Option ≠ Recommendation visual badges",
+    });
+
+    await page.locator("[data-testid^='w2-decide-']").first().click();
+    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
+    await capture(page, "SC-04-humandecision-1440", {
+      sc: "SC-04",
+      state: "HumanDecision",
+      viewport: { width: 1440, height: 900 },
+      observation: "HumanDecision visually distinct",
+    });
+
+    await page
+      .getByTestId("w3a-operation-kind")
+      .selectOption("generate-temporary-artifact");
+    await page.getByTestId("w2-prepare-contract").click();
+    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
+    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
+      "confirmation_required",
+    );
+    await capture(page, "SC-05-ec-summary-1440", {
+      sc: "SC-05",
+      state: "EC summary",
+      viewport: { width: 1440, height: 900 },
+      observation: "EC business status primary",
+    });
+
+    await page.getByTestId("w2-inspect-contract").click();
+    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
+      timeout: 30_000,
+    });
+    await capture(page, "SC-06-ec-inspect-1440", {
+      sc: "SC-06",
+      state: "EC inspected",
+      viewport: { width: 1440, height: 900 },
+      observation: "Inspection before Confirmation",
+    });
+
+    const confirm = page.getByTestId("w2-confirm-contract");
+    if (await confirm.isVisible()) {
+      await expect(confirm).toBeEnabled();
+      await confirm.click();
+      await expect(page.getByTestId("w2-contract-status")).toHaveText(
+        "Confirmation enregistrée",
+        { timeout: 30_000 },
+      );
+      await capture(page, "SC-06-confirmation-1440", {
+        sc: "SC-06",
+        state: "confirmed",
+        viewport: { width: 1440, height: 900 },
+        observation: "Confirmation ≠ Execute",
+      });
+    }
+
+    await page.getByTestId("w2-authorize-contract").click();
+    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
+      "Autorisation vérifiée",
+      { timeout: 60_000 },
+    );
+    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
+    await capture(page, "SC-07-08-authorized-execute-1440", {
+      sc: "SC-07/08",
+      state: "authorized execute available",
+      viewport: { width: 1440, height: 900 },
+      observation: "Authority allowed; Execute separate",
+    });
+
+    // Responsive workspace + EC
+    await page.setViewportSize({ width: 1024, height: 900 });
+    await capture(page, "SC-R01-workspace-1024", {
+      sc: "SC-R01",
+      state: "workspace+trajectory",
+      viewport: { width: 1024, height: 900 },
+      observation: "H-01 stack at 1024",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 390, height: 844 });
+    await capture(page, "SC-R01-workspace-390", {
+      sc: "SC-R01",
+      state: "workspace+trajectory",
+      viewport: { width: 390, height: 844 },
+      observation: "H-01 stack at 390",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 1024, height: 900 });
+    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
+    await capture(page, "SC-R02-ec-1024", {
+      sc: "SC-R02",
+      state: "EC/authority",
+      viewport: { width: 1024, height: 900 },
+      observation: "EC contained at 1024",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    await page.setViewportSize({ width: 390, height: 844 });
+    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
+    await capture(page, "SC-R02-ec-390", {
+      sc: "SC-R02",
+      state: "EC/authority",
+      viewport: { width: 390, height: 844 },
+      observation: "EC contained at 390",
+    });
+    await assertNoHorizontalOverflow(page);
+
+    // History surface if present
+    await page.setViewportSize({ width: 1440, height: 900 });
+    const history = page.getByTestId("project-history-panel");
+    if (await history.count()) {
+      await history.scrollIntoViewIfNeeded();
+      await capture(page, "SC-history-1440", {
+        sc: "History",
+        state: "history panel",
+        viewport: { width: 1440, height: 900 },
+        observation: "History shell-coherent",
+      });
+    }
+
+    // Execute for running if available
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
+      timeout: 60_000,
+    });
+    await capture(page, "SC-08-attempt-1440", {
+      sc: "SC-08",
+      state: "attempt running/terminal",
+      viewport: { width: 1440, height: 900 },
+      observation: "Attempt state represented",
+    });
+  });
+});

```

---

## 5. Tests

### Unit
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync/projects/sfia-studio/app

 ✓ __tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx (6 tests) 37ms
 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (2 tests) 122ms
 ✓ __tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx (7 tests) 174ms

 Test Files  3 passed (3)
      Tests  15 passed (15)
   Start at  14:24:35
   Duration  886ms (transform 237ms, setup 146ms, collect 634ms, tests 334ms, environment 756ms, prepare 96ms)

```
Result: **15/15 PASS**

### E2E
```

Running 14 tests using 1 worker

(node:5670) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓   1 e2e/studio-w2-g3-correction-runtime.spec.ts:55:7 › W2 final-closure /studio product correction proof › walks Options → Phase-B Reco → HD → EC amend/reinspect → STOP BEFORE EXECUTE (5.1s)
  ✓   2 e2e/studio-w3a-governed-execute-runtime.spec.ts:204:7 › W3-A R09 /studio governed execute product proof › positive: accepted → running → terminal with actual work + N1 Confirmation (2.5s)
  ✓   3 e2e/studio-w3a-governed-execute-runtime.spec.ts:415:7 › W3-A R09 /studio governed execute product proof › blocked: missing actual work — no Prepare / no Execute / no Attempt (1.2s)
  ✓   4 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:222:7 › W3-B /studio Terminal + Evidence (corrected) › A SUCCESS + evidence-pending + reload durability (3.0s)
  ✓   5 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:326:7 › W3-B /studio Terminal + Evidence (corrected) › B GOVERNED STOP via EC stopCondition (armed external) (1.7s)
  ✓   6 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:352:7 › W3-B /studio Terminal + Evidence (corrected) › C FAIL via TestExecutionAdapter (armed external) (1.7s)
  ✓   7 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:152:7 › W3-C /studio Post-Evidence replan › A SUCCESS → continue recommendation (1.7s)
  ✓   8 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:173:7 › W3-C /studio Post-Evidence replan › B STOP → recover + propose available (1.7s)
  ✓   9 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:199:7 › W3-C /studio Post-Evidence replan › C FAIL → recover distinct (1.7s)
  ✓  10 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:218:7 › W3-C /studio Post-Evidence replan › D propose without decide then decide (1.8s)
  ✓  11 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:245:7 › W3-C /studio Post-Evidence replan › E reload restart postEvidence rehydrate (2.0s)
  ✓  12 e2e/studio-w4b-single-authority-path.spec.ts:78:7 › W4-B single authority path /studio › qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path (2.8s)
  ✓  13 e2e/studio-w4b-single-authority-path.spec.ts:311:7 › W4-B single authority path /studio › negative: blocked authorization shows business label and no Attempt (1.0s)
  ✓  14 e2e/studio-w4d-product-screens-visual-closure.spec.ts:82:7 › W4-D product screens visual closure › entry/create/workspace visual path + responsive trio + authority chain (3.3s)

  14 passed (34.1s)
```
Results: W4-D 1/1 · W4-B/BR 2/2 · W2 1/1 · W3-A 2/2 · W3-B 3/3 · W3-C 5/5 → **14/14 PASS**

---

## 6. Runtime captures
Path: `.tmp-sfia-review/runtime-captures/w4-d/`
Config: REAL=0, temp SQLite, fake provider, QA controls.


# W4-D runtime captures

| file | timestamp | viewport | route | SC | state | observation |
| --- | --- | --- | --- | --- | --- | --- |
| SC-01-entry-1440.png | 2026-08-26T12:25:25.003Z | 1440×900 | http://127.0.0.1:3020/studio | SC-01 | projects entry | Entry CTA Créer un projet; shell coherent |
| SC-01-entry-1024.png | 2026-08-26T12:25:25.065Z | 1024×900 | http://127.0.0.1:3020/studio | SC-01 | projects entry | Entry contained at 1024 |
| SC-01-entry-390.png | 2026-08-26T12:25:25.125Z | 390×844 | http://127.0.0.1:3020/studio | SC-01 | projects entry | Entry contained at 390 |
| SC-02-create-1440.png | 2026-08-26T12:25:25.399Z | 1440×900 | http://127.0.0.1:3020/studio/projects/new | SC-02 | create form | Create form business-first; Créer + Annuler |
| SC-02-create-1024.png | 2026-08-26T12:25:25.447Z | 1024×900 | http://127.0.0.1:3020/studio/projects/new | SC-02 | create form | Create at 1024 |
| SC-02-create-390.png | 2026-08-26T12:25:25.495Z | 390×844 | http://127.0.0.1:3020/studio/projects/new | SC-02 | create form | Create at 390 |
| SC-03-workspace-h01-1440.png | 2026-08-26T12:25:26.117Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-03 | workspace H-01 | Conversation + H-01 LPS/Trajectory region |
| SC-03-qualified-1440.png | 2026-08-26T12:25:26.273Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-03 | qualified | Nora qualification; single authority |
| SC-04-options-rec-1440.png | 2026-08-26T12:25:26.427Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-04 | options + recommendation | Option ≠ Recommendation visual badges |
| SC-04-humandecision-1440.png | 2026-08-26T12:25:26.582Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-04 | HumanDecision | HumanDecision visually distinct |
| SC-05-ec-summary-1440.png | 2026-08-26T12:25:26.747Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-05 | EC summary | EC business status primary |
| SC-06-ec-inspect-1440.png | 2026-08-26T12:25:26.900Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-06 | EC inspected | Inspection before Confirmation |
| SC-06-confirmation-1440.png | 2026-08-26T12:25:27.064Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-06 | confirmed | Confirmation ≠ Execute |
| SC-07-08-authorized-execute-1440.png | 2026-08-26T12:25:27.214Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-07/08 | authorized execute available | Authority allowed; Execute separate |
| SC-R01-workspace-1024.png | 2026-08-26T12:25:27.343Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-R01 | workspace+trajectory | H-01 stack at 1024 |
| SC-R01-workspace-390.png | 2026-08-26T12:25:27.438Z | 390×844 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-R01 | workspace+trajectory | H-01 stack at 390 |
| SC-R02-ec-1024.png | 2026-08-26T12:25:27.587Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-R02 | EC/authority | EC contained at 1024 |
| SC-R02-ec-390.png | 2026-08-26T12:25:27.720Z | 390×844 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-R02 | EC/authority | EC contained at 390 |
| SC-history-1440.png | 2026-08-26T12:25:27.846Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | History | history panel | History shell-coherent |
| SC-08-attempt-1440.png | 2026-08-26T12:25:28.013Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Ac1ea9b86-e864-4281-8457-94b05a62693a | SC-08 | attempt running/terminal | Attempt state represented |



---

## 7. Penpot ↔ Runtime matrix

# W4-D Penpot ↔ Runtime Matrix (post-code)

Timestamp: 2026-08-26
Penpot file: `63bdc57a-636a-81ba-8008-82d2a50d5233`
Page 03: `5de0e468-4bc9-80ee-8008-82d2f6f7e116` (17 screens)
Page 06: `2feb04ff-8811-8084-8008-8ab3837c737e` (12 boards)
Hierarchy: page06 wins W4 experience; page03 detailed visual when non-contradictory.
No pixel-perfect claim.

| SCREEN | PENPOT NODE | PAGE06 BOARD | RUNTIME CAPTURE | STRUCTURE | HIERARCHY | TYPO/SPACING | CTA | STATUS | RESPONSIVE | A11Y | VERDICT | RESERVE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SC-01 Projects Entry | f96faf07-…ef9ffbf6 | UXR-01 | SC-01-entry-1440/1024/390 | PASS | PASS | PARTIEL | PASS Créer un projet | PASS textual badges | PASS | PASS | **CONFORME** | card actions simplified vs multi-state Penpot CTAs |
| SC-02 Create | f96faf07-…f00967d2 | UXR-01 | SC-02-create-1440/1024/390 | PASS | PASS | PASS | PASS Créer+Annuler | n/a | PASS | PASS | **CONFORME** | — |
| SC-03 Workspace / Qualif | f96faf07-…f04b1b3b | UXR-02 / H01 | SC-03-workspace-h01 / qualified | PASS H-01 | PASS conversation-first | PARTIEL | PASS | PASS | PASS stack ≤1024 | PASS | **CONFORME** | densité LPS vs SC-03 illustration |
| SC-04 Trajectory / HD | f96faf07-…f091da3d | UXR-03 / H01 | SC-04-options-rec / HD | PASS | PASS Option≠Rec≠HD badges | PASS | PASS | PASS | PASS | PASS | **CONFORME** | — |
| SC-05 EC Summary | f96faf07-…17179cb3 | UXR-04 | SC-05-ec-summary-1440 | PASS | PASS progressive | PASS | PASS Inspect | PASS business label | PASS | PASS | **CONFORME** | — |
| SC-06 EC Detail / Confirm | f96faf07-…17a7f741 | UXR-04 | SC-06-ec-inspect / confirmation | PASS | PASS Confirm≠Execute | PARTIEL vs checkbox mock | PASS | PASS | PASS | PASS A11Y-PC-05 | **CONFORME** | Penpot checkbox consent UI not mirrored (semantics unchanged) |
| SC-07 Auth blocked | f96faf07-…1809b949 | UXR-05 | via W4-B negative + authorized capture | PASS | PASS textual block | PARTIEL | PASS | PASS | PARTIEL | PASS | **PARTIEL** | blocked dedicated W4-D capture relies on W4-B suite |
| SC-08 Attempt running | f96faf07-…184c4752 | UXR-05 | SC-08-attempt-1440 | PASS | PASS | PARTIEL | PASS | PASS textual | PARTIEL | PASS | **PARTIEL** | running progress bar fidelity not pixel-matched |
| SC-09 SUCCESS/Evidence | f96faf07-…40bfc1fe | UXR-06 | W3-B non-reg only | OBSERVE | — | — | — | — | — | non-reg | **OUT_W4C** | H-03 / W4-C |
| SC-10 STOP/Evidence | f96faf07-…411bf67a | UXR-06 | W3-B non-reg | OBSERVE | — | — | — | — | — | non-reg | **OUT_W4C** | H-03 / W4-C |
| SC-11 FAIL/Recovery | f96faf07-…416932ea | UXR-06/07 | W3-B/C non-reg | OBSERVE | — | — | — | — | — | non-reg | **OUT_W4C** | H-03 / W4-C |
| SC-12 Nora Replan | f96faf07-…41afedfa | UXR-07 | W3-C non-reg | OBSERVE | — | — | — | — | — | non-reg | **OUT_W4C** | H-03 / W4-C |
| SC-13 Recovery/Resume | f96faf07-…5d4a9af6 | UXR-07 | W3-C non-reg | OBSERVE | — | — | — | — | — | non-reg | **OUT_W4C** | H-03 / W4-C |
| SC-14 Empty/Loading/Error | f96faf07-…5deabeb8 | UXR-08/01 | SC-01 empty-capable entry | PASS empty CTA | PASS | PASS | PASS single CTA | PASS textual | PASS | PASS | **CONFORME** | multi-alternative empty not forced |
| SC-R01 Workspace responsive | f96faf07-…5e88a090 | UXR-R01 | SC-R01-*-1024/390 | PASS | PASS | PASS | PASS | PASS | PASS no overflow | PASS | **CONFORME** | — |
| SC-R02 EC responsive | f96faf07-…75783f19 | UXR-R01 | SC-R02-ec-1024/390 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **CONFORME** | — |
| SC-R03 Evidence responsive | f96faf07-…7671266c | UXR-R01/06/07 | not adapted | OBSERVE | — | — | — | — | OBSERVE | — | **OUT_W4C** | Evidence/Recovery responsive |

## Aggregate

- IN-SCOPE NON CONFORME: **0**
- IN-SCOPE CONFORME: SC-01,02,03,04,05,06,14,R01,R02 (+ PARTIEL SC-07,08)
- OUT_W4C: SC-09…13, SC-R03
- H-02 disposition: **CLOSURE CANDIDATE — EVIDENCE READY — MORRIS VALIDATION REQUIRED**
- H-03: **CARRY / W4-C**
- H-04 disposition: **CLOSURE CANDIDATE — EVIDENCE READY — MORRIS VALIDATION REQUIRED**



---

## 8. A11Y-PC-01→06 (baseline, no WCAG claim)

| ID | Result |
| --- | --- |
| A11Y-PC-01 textual statuses | PASS |
| A11Y-PC-02 protected/effectful identifiable | PASS |
| A11Y-PC-03 STOP/FAIL not color-only (observed non-reg) | PASS / OUT_W4C Evidence |
| A11Y-PC-04 heading/action hierarchy | PASS |
| A11Y-PC-05 Confirmation understandable | PASS |
| A11Y-PC-06 Evidence business-first | NON-REG only / H-03 CARRY |

focus-visible added on shell interactive controls.

---

## 9. Dispositions

- H-01: **KEEP** (Option A preserved)
- H-02: **CLOSURE CANDIDATE — EVIDENCE READY — MORRIS VALIDATION REQUIRED**
- H-03: **CARRY / W4-C**
- H-04: **CLOSURE CANDIDATE — EVIDENCE READY — MORRIS VALIDATION REQUIRED**
- W4-C: **NOT STARTED**
- REAL: **OUT**
- Single authority: **PASS** (non-reg)

---

## 10. Final Local Git Truth

### status
```
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a.spec.ts
 M projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
?? .tmp-sfia-review/
?? projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
?? projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
```

### diff --stat
```
 .../runningAttemptRefresh.ui.test.tsx              |   8 +-
 .../trajectorySurface.ui.test.tsx                  |  16 +-
 .../uatUxSemanticReserves.ui.test.tsx              |   6 +-
 .../studio-option-a-clean-slate-captures.spec.ts   |   5 +
 ...-option-a-deterministic-cursor-boundary.spec.ts |   5 +
 .../e2e/studio-option-a-negative-states.spec.ts    |   5 +
 .../studio-option-a-new-design-captures.spec.ts    |   5 +
 .../studio-option-a-uat-semantic-reserves.spec.ts  |   5 +
 .../sfia-studio/app/e2e/studio-option-a.spec.ts    |   5 +
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    |  10 +-
 .../studio-w3a-governed-execute-runtime.spec.ts    |  21 +-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  17 +-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  17 +-
 .../NewProjectIntentionPage.module.css             |  16 +-
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  |  22 +-
 .../pre-m6-product-ui/ProductShell.module.css      |   7 +
 .../ProjectWorkspacePage.module.css                |  80 +++++--
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  50 ++++-
 .../pre-m6-product-ui/ProjectsPage.module.css      | 153 ++++++++------
 .../features/pre-m6-product-ui/ProjectsPage.tsx    | 108 +++++-----
 .../features/pre-m6-product-ui/product-tokens.css  |  16 +-
 .../surfaces/ConversationSurface.tsx               |  54 ++++-
 .../pre-m6-product-ui/surfaces/HistorySurface.tsx  |   5 +-
 .../pre-m6-product-ui/surfaces/LpsSurface.tsx      |  11 +-
 .../surfaces/TrajectorySurface.module.css          |  82 +++++++-
 .../surfaces/TrajectorySurface.tsx                 | 229 +++++++++++++++------
 26 files changed, 707 insertions(+), 251 deletions(-)
```

### name-status
```
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
M	projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a.spec.ts
M	projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

### hashes
| Item | SHA-256 |
| --- | --- |
| Final consolidated binary diff | `6c16fc60cdb1e928b824c5282deb6f6db44bff86d24f194efb562057dc2ebfcb` |
| Initial binary (pre-W4-D) | `965fdf1e623335ad4699c9f9954aacab68ef274ba1776b9870d29fc429546dac` |

Tracked file hashes:
```
c699c0b68bc30f517d95e231f11e28c26474a74addc49a7f5f0fd5eee8122bf9  projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
3877de082182027065709d48d77e80b127b4b3dfcc11b398b50eb16e86694bd1  projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
c7ad038be782fc97704bac09f8084d050133675847bd26dd284ee052a007e3ed  projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
8819f32f6d5f828125b79967e27d75db048a5f93fe295c005d5f25ae1df0c680  projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
1ea713414ab98ea9cba1f2c56927e2313b4332cd1dad054b2c71494a833d1573  projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
62832ae05ce6707fb251909e469b2e32c3132b9fc68430bb5df665237e03233f  projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
5d83fd9895df40fa03657b74fd5cc5e5b638df69a08f2dbd7112d0bae8f41312  projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
08e32535ee9652a73d3edea8ed8a6e64e07471f702c4fc56db48e59e0cfe2b7e  projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
1150c277c489c9bbde1d3e99a8e5780c9d56275df3bc0ce202dac6ac8f7df57d  projects/sfia-studio/app/e2e/studio-option-a.spec.ts
762e5f568c627ce371cf683c0c204cbd3761ece5aa4b0e180b0c4207b0c49142  projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
a2730997eb2794209fea9fccb1f6de690ae3d95b133bb15e6532f9982d4d55ac  projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
399251bbf30e1ab8c0dc38e7c07c39963054cb4dc3c8443e778e10779d650cd1  projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
2415a76eb4da0352a362ca9672472ee3b6d5058418e71ee15c72cd76943186ae  projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
bfca0c8c6de64748089247b75ac372e78583f830cf49efc291c04d982eb8d940  projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
7efa2fbad35260220d4daa525650c648258385e7ba9b9c4bbea74fffaa940691  projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
0ed230555f21a051117dd46654b5796f2359b8d643f2f5b878a1f634315bb090  projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
bd352ffdfb8bd6df86162a3aeef8de8f28b01333379fd18edaaf5ed554082bea  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
aa1321b40b361e5eb01dc6a904dfcf85f5a08113088ed35d27fdeaa05a87373b  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
d20896f7c46412552e563d516ea22f9cad27ff05edaa4e7db0ade5d3549b5f0f  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
2eca609523ffeda5b439aa2d050d3a44cee0902916803c7ea4a5e88f34944317  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
3ecf9667948a1f05caaedf6328fcf3622b06c2d8f82cf9a3a2464193a7fd7477  projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
9e3b33c679d076f48974b00544255e762065f0c7fb50b1babfa1c0d221fd0e8a  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
fcd25078db3ce03f73f93c0a0a0a5c853aee19e6fc5776397236fec7e9a99ee9  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
bc1f2b96df7bd3e0f43842c1032f7ce9c4aae43aa4d62e12e4f51d807ab03950  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
65fa2b8a3b25cc1d239daf568edcc070fe82803fd9f5c12559d8bf0a7a2ee25c  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
3ca9814bd01bff195b27944f158d848c6c861e4a602880dac26dc72225b54692  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

Untracked product hashes:
```
d0154023b4738b3da96f0702240a5844177d9095eea22ee0d90097595bfcdae9  projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
57249947baff985e041b614ac0609996c515c8cd4d9f4be8082d958ada72007e  projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
```

HEAD still `1e17367d…`; no project commit.

---

## 11. X-W4D-01→36

All PASS except explicit CARRY dispositions recorded for H-03 and candidate (not closed) for H-02/H-04.
X-W4D-25 H-02 = CLOSURE CANDIDATE (not CLOSED).
X-W4D-26 H-03 = CARRY.
X-W4D-27 H-04 = CLOSURE CANDIDATE (not CLOSED).

---

## 12. Blockers / Reserves

Blockers: NONE

Reserves:
- CORR-01 test-only scope exception OPEN
- SC-07/08 PARTIEL visual fidelity
- H-02/H-04 require Morris validation to close
- H-03 / Evidence-Recovery OUT_W4C
- Option A F2/F3 suite skips RETIRE LATER

---

## 13. Claims / Anti-claims

Claims: IN-scope screens aligned CONFORME/PARTIEL with no NON CONFORME; ready for ChatGPT final review / Morris Git integration gate recommendation.

Anti-claims: not CLOSED BY MORRIS; not integrated; not H-02/03/04 CLOSED; not W4-C started; not REAL; not WCAG; not pixel-perfect; not runtime v3 ADOPTED.

---

## 14. Verdict

**W4-D VISUAL CLOSURE PASS WITH NON-BLOCKING CARRIES — CORE PRODUCT SCREENS ALIGNED — H-02/H-04 DISPOSITION RECORDED — H-03 REMAINS W4-C — READY FOR CHATGPT FINAL REVIEW / MORRIS GIT INTEGRATION GATE**

---

## 15. FULL CONSOLIDATED TRACKED DIFF (all dirty files)
```diff

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
index 9b8af16b..5aa747b0 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
@@ -327,7 +327,7 @@ const RESOLVED_M3 = {

 function Harness() {
   const controller = useProductConversation({ projectId: PROJECT_ID });
-  return <ConversationSurface controller={controller} />;
+  return <ConversationSurface exposeLegacyAuthorityPath controller={controller} />;
 }

 /** findByTestId is presence-only; GO/confirm stay disabled while startTransition keeps busy. */
@@ -368,6 +368,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
@@ -399,6 +400,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("keeps the refresh control when continuation stays running", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute({ reusedExistingAttempt: true }),
@@ -414,6 +416,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("shows Evidence/ReviewBundle and hides refresh after a terminal payload", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: succeededExecute(),
@@ -433,6 +436,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("does not offer refresh on fixture terminal or before Confirmation", () => {
     const { rerender } = render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: fixtureExecute(),
         })}
@@ -443,6 +447,7 @@ describe("Option A running Attempt refresh UI", () => {

     rerender(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           canConfirmResolvedM3: true,
@@ -457,6 +462,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 77fac3c7..186481db 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -251,6 +251,20 @@ describe("W2 TrajectorySurface", () => {
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
       "cap:product-temp-artifact",
     );
+    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
+    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
+      "Confirmation requise",
+    );
+    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
+    );
+    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
+      "confirmation_required",
+    );
+    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
+      "confirmation_required",
+    );
     // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
     expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

@@ -476,7 +490,7 @@ describe("W2 TrajectorySurface", () => {
     fireEvent.click(screen.getByTestId("w2-authorize-contract"));
     expect(await screen.findByTestId("w2-authorization")).toBeVisible();
     expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
-      "BLOQUÉ — ACTION REQUISE",
+      "Exécution bloquée",
     );
     expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
       "arrêt avant exécution",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 7856093b..5bb947a6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -244,6 +244,7 @@ describe("UAT-UX-03 confirmation surface", () => {
   it("shows authoritative user summary and keeps IDs under technical details", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED,
           canConfirmResolvedM3: true,
@@ -285,6 +286,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
   it("T3/T10/T11/T12 — REAL success is not fixture and recommendation stays non-authority", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({ f3Execute: succeededReal() })}
       />,
     );
@@ -312,7 +314,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     const failed = succeededReal();
     failed.attempt.status = "failed";
     render(
-      <ConversationSurface controller={baseController({ f3Execute: failed })} />,
+      <ConversationSurface exposeLegacyAuthorityPath controller={baseController({ f3Execute: failed })} />,
     );
     expect(screen.getByTestId("f3-result-user-summary")).toHaveTextContent(/échec/);
     expect(screen.getByTestId("f3-result-user-summary")).not.toHaveTextContent(
@@ -326,6 +328,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     running.contract.status = "executing";
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: running,
           canRefreshResolvedM3Running: true,
@@ -344,6 +347,7 @@ describe("UAT-UX-08 durable rehydrate", () => {
     const confirm = vi.fn();
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           durableEvidenceOutcome: DURABLE_REAL,
           confirmAndExecuteResolvedM3: confirm,
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
index fa0e23c4..7c2cb33e 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
@@ -94,6 +94,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 clean-slate captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 360_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
index 6ac44381..22f1d132 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
@@ -88,6 +88,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("deterministic Cursor boundary browser tooling", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("B1–B4 running → pending refresh → terminal → reload", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
index 7eab4563..333361d8 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
@@ -73,6 +73,11 @@ async function goToResolvedContract(page: Page, suffix: string) {
 }

 test.describe("QA-PRE-M6-TEST-01 negative-state harness", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
index 8229f574..86fc2fbc 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
@@ -79,6 +79,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 new-design captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 300_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
index b94d4aaa..b379f1a3 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
@@ -46,6 +46,11 @@ async function capture(page: Page, id: string): Promise<string> {
 }

 test.describe("PRE-M6 UAT semantic reserves — deterministic browser", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("A–D confirmation → running → succeeded → reload", async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
index ea63a1a2..7cce2e7d 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
@@ -104,6 +104,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("F1→F11 happy path + History/Recovery + responsive captures", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 378de28d..4b4a524b 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -94,12 +94,14 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     await expect(input).toBeEnabled({ timeout: 15_000 });
     await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
     await page.getByTestId("project-assistant-send").click();
-    await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
       timeout: 60_000,
     });
+    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+    await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
     await capture(page, "02b-qualified-gate", {
       screen: "ConversationSurface",
-      state: "f2_gate_qualified",
+      state: "qualified_no_f2_decision_gate",
     });

     const trajectory = page.getByTestId("w2-trajectory-panel");
@@ -232,7 +234,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "BLOQUÉ",
+      "Exécution bloquée",
     );
     const blockedReason =
       (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
@@ -272,7 +274,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     const outcome = page.getByTestId("w2-authorization-outcome");
     await expect(outcome).toBeVisible();
     const outcomeText = (await outcome.textContent()) ?? "";
-    expect(outcomeText.includes("AUTORISÉ")).toBe(true);
+    expect(outcomeText.includes("Autorisation vérifiée")).toBe(true);
     await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
     await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();

diff --git a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
index 679c6b8e..96b59738 100644
--- a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
@@ -168,9 +168,13 @@ async function openQualifiedStudioProject(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -236,6 +240,13 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       "product:project-workspace",
     );
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
+      "Confirmation requise",
+    );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
+    );
+    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
       "confirmation_required",
     );
     await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
@@ -259,9 +270,13 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {

     await page.getByTestId("w2-confirm-contract").click();
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
-      "confirmed",
+      "Confirmation enregistrée",
       { timeout: 30_000 },
     );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmed",
+    );
     await capture(page, "05-confirmed", {
       screen: "TrajectorySurface",
       state: "effect_confirmation_n1_granted",
@@ -272,7 +287,7 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "AUTORISÉ",
+      "Autorisation vérifiée",
     );
     await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
     await capture(page, "06-authorized", {
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 16adf051..d7fed5e5 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -125,9 +125,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -153,12 +157,15 @@ async function openThroughAuthorized(page: Page, name: string) {
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );

diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index b4b8bc47..7e4f54e7 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -72,9 +72,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -100,12 +104,15 @@ async function openThroughAuthorized(page: Page, name: string) {
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
index f4c3268a..ad57ac05 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
@@ -9,14 +9,26 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
+  padding: var(--pm6-space-5);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
+}
+
+.heroEyebrow {
+  margin: 0;
+  font-size: 0.82rem;
+  font-weight: 600;
+  color: var(--pm6-forest);
 }

 .heroTitle {
   margin: 0;
   font-size: 1.8rem;
-  font-weight: 600;
+  font-weight: 650;
   letter-spacing: -0.01em;
-  color: var(--pm6-forest);
+  color: var(--pm6-ink);
 }

 .heroSubtitle {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index 1a065d28..a9e7eb9c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -19,9 +19,8 @@ function createIdempotencyKey(): string {
 }

 /**
- * PROVISIONAL intention sheet — no dedicated Figma frame exists for creation.
- * See README.md in this folder. Two product fields drive the runtime input:
- * intention becomes the objective, precisions the bounded context.
+ * PROVISIONAL intention sheet — W4-BR aligns labels to UXR-01 (Nom / Intention /
+ * contexte optionnel / Créer + Annuler). Behavior Create/Resume unchanged.
  */
 export function NewProjectIntentionPage() {
   const [name, setName] = useState("");
@@ -190,6 +189,7 @@ export function NewProjectIntentionPage() {
   return (
     <div className={styles.page}>
       <header className={styles.hero}>
+        <p className={styles.heroEyebrow}>SFIA Studio</p>
         <h1 className={styles.heroTitle}>Nouveau projet</h1>
         <p className={styles.heroSubtitle}>
           Nommez le projet et décrivez votre intention. Nora qualifiera ensuite —
@@ -231,7 +231,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-objective">
-            Votre intention
+            Intention du projet
           </label>
           <textarea
             ref={intentionRef}
@@ -265,7 +265,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-context">
-            Précisions utiles <span className={styles.optional}>(optionnel)</span>
+            Contexte optionnel
           </label>
           <textarea
             id="project-context"
@@ -273,12 +273,13 @@ export function NewProjectIntentionPage() {
             className={styles.textarea}
             rows={3}
             value={precisions}
-            placeholder="Contexte, contraintes connues, ce qu'il faut éviter…"
+            placeholder="Ajoutez uniquement le contexte utile au projet."
             aria-describedby="project-context-help"
             onChange={(event) => setPrecisions(event.target.value)}
           />
           <p className={styles.help} id="project-context-help">
-            Sans précision, votre intention sert aussi de contexte.
+            Sans contexte, votre intention suffit pour créer le projet. Vous
+            pourrez préciser la suite avec Nora ensuite.
           </p>
         </div>

@@ -299,6 +300,13 @@ export function NewProjectIntentionPage() {
           >
             {pending ? "Création…" : "Créer le projet"}
           </button>
+          <Link
+            href="/studio"
+            className={styles.quietButton}
+            data-testid="create-project-cancel"
+          >
+            Annuler
+          </Link>
           <span className={styles.status} role="status" aria-live="polite">
             {pending ? "Création en cours…" : ""}
           </span>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
index 331beac2..b64627eb 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
@@ -4,6 +4,13 @@
   flex-direction: column;
   background: var(--pm6-canvas);
   color: var(--pm6-ink);
+  font-family: var(--pm6-font);
+  overflow-x: clip;
+}
+
+.shell :where(a, button, input, textarea, summary, select):focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
 }

 .header {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 1f184474..7e97d515 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -109,6 +109,55 @@
   overflow-y: auto;
 }

+/* H-01 Option A — unified piloting region (LPS + Trajectory presentation) */
+.stateTrajectoryRegion {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+  padding: var(--pm6-space-3);
+  background: var(--pm6-canvas-raised);
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-lg);
+}
+
+.stateTrajectoryHead {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-1);
+  padding: 0;
+}
+
+.stateTrajectoryEyebrow {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.1em;
+  text-transform: uppercase;
+  color: var(--pm6-forest);
+}
+
+.stateTrajectoryTitle {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.stateTrajectoryNote {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.stateTrajectoryStack {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+}
+
 .lpsClose {
   display: none;
   align-self: flex-end;
@@ -128,7 +177,7 @@
   }
 }

-/* ---------- <=1024: project state becomes a drawer ---------- */
+/* ---------- <=1024: stack conversation then État/Trajectoire (H-01) ---------- */

 @media (max-width: 1024px) {
   .layout {
@@ -136,29 +185,28 @@
   }

   .lpsToggle {
-    display: inline-flex;
+    display: none;
   }

   .lpsClose {
-    display: inline-flex;
+    display: none;
   }

   .lpsColumn {
-    position: fixed;
-    top: 0;
-    right: 0;
-    bottom: 0;
-    width: min(420px, 92vw);
-    z-index: 60;
-    background: var(--pm6-canvas-raised);
-    border-left: 1px solid var(--pm6-border);
-    box-shadow: var(--pm6-shadow-raised);
-    padding: var(--pm6-space-4);
-    overflow-y: auto;
+    position: static;
+    top: auto;
+    width: auto;
+    z-index: auto;
+    background: transparent;
+    border-left: none;
+    box-shadow: none;
+    padding: 0;
+    overflow: visible;
   }

-  .lpsClosed {
-    display: none;
+  .lpsClosed,
+  .lpsOpen {
+    display: block;
   }

   .lpsSheet {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 86565b47..4836a276 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -14,7 +14,11 @@ import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

-/** F2/F3 product workspace: conversation dominant, project state alongside. */
+/**
+ * Product workspace: conversation-first, not conversation-only.
+ * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
+ * (presentation composition only; domain objects remain distinct).
+ */
 export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [result, setResult] = useState<GetProjectResult | null>(null);
   const [durableOutcome, setDurableOutcome] =
@@ -122,7 +126,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           aria-expanded={lpsOpen}
           onClick={() => setLpsOpen((open) => !open)}
         >
-          {lpsOpen ? "Masquer l'état du projet" : "État du projet"}
+          {lpsOpen
+            ? "Masquer l'état et la trajectoire"
+            : "État du projet / Trajectoire"}
         </button>
       </header>

@@ -147,13 +153,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />
           </div>
-          <TrajectorySurface
-            projectId={projectId}
-            recoveryProposeSignal={recoveryProposeSignal}
-            onDurableFactsChanged={() => {
-              void loadProject();
-            }}
-          />
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

@@ -172,7 +171,38 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             >
               Fermer
             </button>
-            <LpsSurface result={success} />
+            <section
+              className={styles.stateTrajectoryRegion}
+              data-testid="project-state-trajectory-region"
+              aria-label="État du projet et trajectoire"
+            >
+              <header className={styles.stateTrajectoryHead}>
+                <p className={styles.stateTrajectoryEyebrow}>
+                  Pilotage du projet
+                </p>
+                <h2 className={styles.stateTrajectoryTitle}>
+                  État actuel et trajectoire
+                </h2>
+                <p className={styles.stateTrajectoryNote}>
+                  L&apos;état actuel et la trajectoire sont regroupés ici pour
+                  faciliter le pilotage.
+                </p>
+              </header>
+              <div
+                className={styles.stateTrajectoryStack}
+                data-testid="h01-lps-trajectory-composition"
+              >
+                <LpsSurface result={success} />
+                <TrajectorySurface
+                  projectId={projectId}
+                  composition="lps-embedded"
+                  recoveryProposeSignal={recoveryProposeSignal}
+                  onDurableFactsChanged={() => {
+                    void loadProject();
+                  }}
+                />
+              </div>
+            </section>
           </div>
         </div>
       </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
index 56635b58..62812b9a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
@@ -10,6 +10,11 @@
   align-items: flex-end;
   justify-content: space-between;
   gap: var(--pm6-space-4);
+  padding: var(--pm6-space-5);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
 }

 .heroText {
@@ -19,14 +24,21 @@
   min-width: 0;
 }

-.heroTitle {
+.heroEyebrow {
   margin: 0;
-  font-size: 2rem;
+  font-size: 0.82rem;
   font-weight: 600;
-  letter-spacing: -0.01em;
   color: var(--pm6-forest);
 }

+.heroTitle {
+  margin: 0;
+  font-size: 1.85rem;
+  font-weight: 650;
+  letter-spacing: -0.015em;
+  color: var(--pm6-ink);
+}
+
 .heroSubtitle {
   margin: 0;
   font-size: 0.92rem;
@@ -34,31 +46,42 @@
 }

 .heroCta,
-.emptyCta {
+.emptyCta,
+.cardPrimary,
+.cardSecondary {
   display: inline-flex;
   align-items: center;
+  justify-content: center;
   border-radius: var(--pm6-radius-md);
-  padding: 11px 20px;
+  padding: 11px 18px;
   font-size: 0.9rem;
   font-weight: 600;
   text-decoration: none;
-  transition: background 120ms ease;
+  transition: background 120ms ease, border-color 120ms ease;
 }

-.heroCta {
+.heroCta,
+.emptyCta,
+.cardPrimary {
   background: var(--pm6-forest);
   border: 1px solid var(--pm6-forest);
   color: var(--pm6-forest-ink);
 }

-.heroCta:hover {
+.heroCta:hover,
+.emptyCta:hover,
+.cardPrimary:hover {
   background: var(--pm6-forest-hover);
 }

-.emptyCta {
+.cardSecondary {
   background: var(--pm6-surface);
-  border: 1px solid var(--pm6-forest);
-  color: var(--pm6-forest);
+  border: 1px solid var(--pm6-border-strong);
+  color: var(--pm6-ink);
+}
+
+.cardSecondary:hover {
+  background: var(--pm6-surface-sunken);
 }

 .hint {
@@ -89,16 +112,17 @@
   flex-direction: column;
   align-items: flex-start;
   gap: var(--pm6-space-3);
-  border: 1px dashed var(--pm6-border-strong);
+  border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-lg);
-  background: var(--pm6-canvas-raised);
+  background: var(--pm6-surface);
+  box-shadow: var(--pm6-shadow-card);
   padding: var(--pm6-space-7) var(--pm6-space-5);
 }

 .emptyTitle {
   margin: 0;
-  font-size: 1.05rem;
-  font-weight: 600;
+  font-size: 1.25rem;
+  font-weight: 650;
   color: var(--pm6-ink);
 }

@@ -110,55 +134,40 @@
   max-width: 46ch;
 }

-.listCard {
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  overflow: hidden;
-}
-
-.list {
+.cardList {
   list-style: none;
   margin: 0;
   padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
 }

-.row + .row {
-  border-top: 1px solid var(--pm6-border-soft);
-}
-
-.rowLink {
+.card {
   display: flex;
-  align-items: center;
+  flex-wrap: wrap;
+  align-items: flex-start;
+  justify-content: space-between;
   gap: var(--pm6-space-4);
   padding: var(--pm6-space-4) var(--pm6-space-5);
-  text-decoration: none;
-  color: inherit;
-  transition: background 120ms ease;
-}
-
-.rowLink:hover {
-  background: var(--pm6-surface-sunken);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
 }

-.rowMain {
+.cardMain {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-1);
+  align-items: flex-start;
+  gap: var(--pm6-space-2);
   flex: 1;
   min-width: 0;
 }

-.rowTitleLine {
-  display: flex;
-  flex-wrap: wrap;
-  align-items: center;
-  gap: var(--pm6-space-3);
-}
-
-.rowTitle {
-  font-size: 1rem;
+.cardTitle {
+  margin: 0;
+  font-size: 1.05rem;
   font-weight: 600;
   color: var(--pm6-ink);
   overflow-wrap: anywhere;
@@ -169,9 +178,8 @@
   align-items: center;
   padding: 3px 10px;
   border-radius: var(--pm6-radius-pill);
-  font-size: 0.7rem;
+  font-size: 0.72rem;
   font-weight: 600;
-  letter-spacing: 0.03em;
   border: 1px solid transparent;
 }

@@ -188,41 +196,62 @@
 }

 .badge[data-tone="waiting"] {
-  background: var(--pm6-cream);
+  background: var(--pm6-warn-tint);
   border-color: var(--pm6-cream-border);
-  color: var(--pm6-gold-strong);
+  color: var(--pm6-warn);
 }

-.rowDescription {
+.cardDescription {
+  margin: 0;
   font-size: 0.88rem;
   line-height: 1.5;
   color: var(--pm6-muted-strong);
   overflow-wrap: anywhere;
 }

-.rowMeta {
+.cardMeta {
+  margin: 0;
   font-size: 0.78rem;
   color: var(--pm6-muted);
 }

-.chevron {
-  font-size: 1.4rem;
-  line-height: 1;
-  color: var(--pm6-muted);
+.cardActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: var(--pm6-space-2);
   flex: 0 0 auto;
 }

-@media (max-width: 767px) {
+@media (max-width: 1024px) {
   .heroTitle {
     font-size: 1.6rem;
   }
+}
+
+@media (max-width: 767px) {
+  .hero {
+    padding: var(--pm6-space-4);
+  }

-  .rowLink {
+  .heroTitle {
+    font-size: 1.45rem;
+  }
+
+  .heroCta,
+  .emptyCta {
+    width: 100%;
+  }
+
+  .card {
     padding: var(--pm6-space-4);
   }

-  .heroCta {
+  .cardActions {
     width: 100%;
-    justify-content: center;
+  }
+
+  .cardPrimary,
+  .cardSecondary {
+    flex: 1 1 auto;
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
index 82aac0ec..7424a576 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
@@ -42,7 +42,7 @@ function badgeFor(status: string): Badge {
     case "draft":
       return { label: "Brouillon", tone: "neutral" };
     case "active":
-      return { label: "Qualification en cours", tone: "active" };
+      return { label: "Actif", tone: "active" };
     case "paused":
       return { label: "En attente de décision", tone: "waiting" };
     case "closed":
@@ -91,30 +91,35 @@ export function ProjectsPage() {

   const subtitle =
     count === null
-      ? "Nora recommande, vous décidez"
+      ? "Entrée / reprise — Nora recommande, vous décidez"
       : count === 0
-        ? "Aucun projet · Nora recommande, vous décidez"
-        : `${count} projet${count > 1 ? "s" : ""} · Nora recommande, vous décidez`;
+        ? "Aucun projet · créez pour démarrer"
+        : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`;
+
+  const showHeroCreate = state.status !== "empty";

   return (
     <div className={styles.page} data-testid="studio-projects-home">
       <header className={styles.hero}>
         <div className={styles.heroText}>
-          <h1 className={styles.heroTitle}>Projets</h1>
+          <p className={styles.heroEyebrow}>SFIA Studio</p>
+          <h1 className={styles.heroTitle}>Projets — entrée / reprise</h1>
           <p className={styles.heroSubtitle}>{subtitle}</p>
         </div>
-        <Link
-          href="/studio/projects/new"
-          className={styles.heroCta}
-          data-testid="studio-projects-create"
-        >
-          + Nouveau projet
-        </Link>
+        {showHeroCreate ? (
+          <Link
+            href="/studio/projects/new"
+            className={styles.heroCta}
+            data-testid="studio-projects-create"
+          >
+            Créer un projet
+          </Link>
+        ) : null}
       </header>

       {state.status === "loading" ? (
         <p className={styles.hint} data-testid="studio-projects-loading">
-          Chargement de vos projets…
+          Chargement en cours…
         </p>
       ) : null}

@@ -129,53 +134,58 @@ export function ProjectsPage() {

       {state.status === "empty" ? (
         <div className={styles.empty} data-testid="studio-projects-empty">
-          <p className={styles.emptyTitle}>Aucun projet pour le moment</p>
+          <p className={styles.emptyTitle}>Aucun projet.</p>
           <p className={styles.emptyBody}>
-            Décrivez une intention pour démarrer. Nora qualifie, vous décidez.
+            Une seule action primaire pour démarrer. Nora qualifie ensuite ;
+            vous décidez.
           </p>
-          <Link href="/studio/projects/new" className={styles.emptyCta}>
-            Décrire une intention
+          <Link
+            href="/studio/projects/new"
+            className={styles.emptyCta}
+            data-testid="studio-projects-create"
+          >
+            Créer un projet
           </Link>
         </div>
       ) : null}

       {state.status === "ready" ? (
-        <div className={styles.listCard}>
-          <ul className={styles.list} data-testid="studio-projects-list">
-            {state.projects.map((project) => {
-              const badge = badgeFor(project.status);
-              return (
-                <li key={project.projectId} className={styles.row}>
+        <ul className={styles.cardList} data-testid="studio-projects-list">
+          {state.projects.map((project) => {
+            const badge = badgeFor(project.status);
+            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
+            return (
+              <li key={project.projectId} className={styles.card}>
+                <div className={styles.cardMain}>
+                  <h2 className={styles.cardTitle}>{project.title}</h2>
+                  <span className={styles.badge} data-tone={badge.tone}>
+                    {badge.label}
+                  </span>
+                  <p className={styles.cardDescription}>
+                    {project.objective?.trim() ||
+                      project.context?.trim() ||
+                      "Ouvrez le projet pour poursuivre avec Nora."}
+                  </p>
+                  <p className={styles.cardMeta}>
+                    {formatRelativeFr(project.updatedAt)}
+                  </p>
+                </div>
+                <div className={styles.cardActions}>
                   <Link
-                    href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
-                    className={styles.rowLink}
+                    href={href}
+                    className={styles.cardPrimary}
                     data-testid="studio-projects-open"
                   >
-                    <span className={styles.rowMain}>
-                      <span className={styles.rowTitleLine}>
-                        <span className={styles.rowTitle}>{project.title}</span>
-                        <span className={styles.badge} data-tone={badge.tone}>
-                          {badge.label}
-                        </span>
-                      </span>
-                      <span className={styles.rowDescription}>
-                        {project.objective?.trim() ||
-                          project.context?.trim() ||
-                          "Ouvrez le projet pour poursuivre avec Nora."}
-                      </span>
-                      <span className={styles.rowMeta}>
-                        {formatRelativeFr(project.updatedAt)}
-                      </span>
-                    </span>
-                    <span className={styles.chevron} aria-hidden>
-                      ›
-                    </span>
+                    Reprendre
                   </Link>
-                </li>
-              );
-            })}
-          </ul>
-        </div>
+                  <Link href={href} className={styles.cardSecondary}>
+                    Voir l&apos;état
+                  </Link>
+                </div>
+              </li>
+            );
+          })}
+        </ul>
       ) : null}
     </div>
   );
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 0242e1c0..cdda1f8b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -1,12 +1,14 @@
 /**
  * Pre-M6 Option A product presentation tokens.
  *
- * Values transcribed from the manual Figma evidence set (MCP was rate-limited),
- * see .tmp-sfia-review/figma/manual-evidence/. Prefixed `--pm6-` so this layer
- * never collides with the legacy `--sfia-` token set.
+ * Visual reference: Penpot file 63bdc57a… pages 03 + 06 (W4-D).
+ * Prefixed `--pm6-` so this layer never collides with the legacy `--sfia-` set.
+ * Inter is the Penpot typography reference — system fallback only (no font files).
  */

 :root {
+  --pm6-font: Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
+
   --pm6-canvas: #f3f1ec;
   --pm6-canvas-raised: #f7f5f0;
   --pm6-surface: #ffffff;
@@ -37,6 +39,8 @@
   --pm6-warn-tint: #fdf1de;
   --pm6-ok: #1f6b4f;
   --pm6-ok-tint: #e7f3ed;
+  --pm6-info: #1f4f6b;
+  --pm6-info-tint: #e7f1f6;

   --pm6-radius-sm: 8px;
   --pm6-radius-md: 12px;
@@ -48,6 +52,8 @@
   --pm6-shadow-raised: 0 2px 4px rgba(27, 35, 32, 0.06),
     0 16px 40px rgba(27, 35, 32, 0.08);

+  --pm6-focus-ring: 0 0 0 3px color-mix(in srgb, var(--pm6-forest) 35%, transparent);
+
   --pm6-space-1: 4px;
   --pm6-space-2: 8px;
   --pm6-space-3: 12px;
@@ -56,7 +62,7 @@
   --pm6-space-6: 32px;
   --pm6-space-7: 48px;

-  --pm6-lps-width: 320px;
-  --pm6-lps-width-wide: 380px;
+  --pm6-lps-width: 420px;
+  --pm6-lps-width-wide: 480px;
   --pm6-content-max: 1180px;
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 2907fbf2..b382c576 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -48,14 +48,24 @@ function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {

 export type ConversationSurfaceProps = {
   controller: ProductConversationController;
+  /**
+   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
+   * prepare/confirm-execute affordances. Product `/studio` path must leave this
+   * unset/false so TrajectorySurface remains the sole authority/execute chain.
+   */
+  exposeLegacyAuthorityPath?: boolean;
 };

 /**
- * F2–F8 product conversation surface.
- * Recommendation, HumanDecision and Confirmation stay visually distinct;
- * nothing here grants execution authority or claims durability.
+ * Nora conversation + qualification surface.
+ * Product authority path (HumanDecision / EC / Confirmation / Execute) lives on
+ * TrajectorySurface (W2/W3). Legacy F2/F3 affordances stay behind
+ * `exposeLegacyAuthorityPath` for harvest / RETIRE LATER proofs only.
  */
-export function ConversationSurface({ controller }: ConversationSurfaceProps) {
+export function ConversationSurface({
+  controller,
+  exposeLegacyAuthorityPath = false,
+}: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
   const {
@@ -426,7 +436,30 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {gateOpen ? (
+      {gateOpen && !exposeLegacyAuthorityPath ? (
+        <section
+          className={styles.card}
+          data-testid="product-authority-path-guidance"
+          aria-labelledby={`${fieldId}-authority-guidance`}
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Suite du parcours</p>
+            <h3
+              id={`${fieldId}-authority-guidance`}
+              className={styles.cardTitle}
+            >
+              Décidez la trajectoire ci-dessous
+            </h3>
+            <p className={styles.cardNote}>
+              La qualification est enregistrée. La décision de trajectoire, le
+              contrat, la confirmation et l&apos;exécution se font dans la
+              section « Trajectoire et décision » — un seul chemin d&apos;autorité.
+            </p>
+          </header>
+        </section>
+      ) : null}
+
+      {gateOpen && exposeLegacyAuthorityPath ? (
         <section
           className={styles.decisionCard}
           data-testid="project-assistant-gate"
@@ -475,7 +508,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f2?.decision ? (
+      {exposeLegacyAuthorityPath && f2?.decision ? (
         <section
           className={styles.cardOk}
           data-testid="project-assistant-decision"
@@ -525,7 +558,8 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {canPrepareResolvedM3 || canPrepareLegacyFixture ? (
+      {exposeLegacyAuthorityPath &&
+      (canPrepareResolvedM3 || canPrepareLegacyFixture) ? (
         <section className={styles.card} data-testid="project-assistant-f3-prepare">
           <header className={styles.cardHead}>
             <p className={styles.cardEyebrow}>Étape suivante</p>
@@ -569,7 +603,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3M3Resolved && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3M3Resolved && !f3Execute ? (
         <section
           className={styles.contractCard}
           data-testid="project-assistant-f3-contract"
@@ -726,7 +760,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Prepare && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3Prepare && !f3Execute ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-legacy-contract"
@@ -784,7 +818,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Execute && attemptLabel ? (
+      {exposeLegacyAuthorityPath && f3Execute && attemptLabel ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-execute"
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
index 89a911f8..ab08623d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
@@ -180,9 +180,8 @@ export function HistorySurface({
           Ce qui est réellement enregistré
         </h2>
         <p className={styles.note}>
-          Repères factuels du projet. La conversation, la proposition et la
-          confirmation demandée restent process-local et n&apos;apparaissent pas
-          ici.
+          Repères factuels du projet seulement. Les détails techniques restent
+          secondaires ; la conversation n&apos;est pas rejouée ici.
         </p>
       </header>
       <ol className={styles.timeline}>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
index 0e12f557..a931ef3c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
@@ -20,7 +20,7 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
   const nextAction =
     readiness.status === "NOT_READY"
       ? "Poursuivre la qualification avec Nora, puis décider."
-      : `Préparation ${readiness.status} — poursuivre avec Nora.`;
+      : "Poursuivre avec Nora — la préparation enregistrée reste à décider.";

   return (
     <aside
@@ -62,7 +62,6 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
         <section className={styles.block}>
           <h3 className={styles.blockTitle}>Cycle</h3>
           <p className={styles.blockBody}>Cycle rattaché au projet</p>
-          <p className={styles.blockCode}>{livingState.activeCycleInstanceId}</p>
         </section>
       ) : null}

@@ -80,6 +79,14 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
       <details className={styles.diagnostics} data-testid="lps-diagnostics">
         <summary>Détails techniques</summary>
         <dl className={styles.facts}>
+          {livingState.activeCycleInstanceId ? (
+            <div>
+              <dt>Identifiant de cycle</dt>
+              <dd className={styles.blockCode}>
+                {livingState.activeCycleInstanceId}
+              </dd>
+            </div>
+          ) : null}
           <div>
             <dt>Criticité perçue</dt>
             <dd>{project.criticality}</dd>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 99fbcb4c..61179d4c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -9,6 +9,11 @@
   padding: var(--pm6-space-5);
 }

+.embedded {
+  box-shadow: none;
+  border-color: var(--pm6-border);
+}
+
 .head {
   display: flex;
   flex-direction: column;
@@ -111,7 +116,54 @@
   padding: var(--pm6-space-4);
   border-radius: var(--pm6-radius-md);
   border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface);
+  box-shadow: var(--pm6-shadow-card);
+}
+
+.recommendation {
+  border-color: color-mix(in srgb, var(--pm6-info) 28%, var(--pm6-border-soft));
+  background: var(--pm6-info-tint);
+}
+
+.decision {
+  border-color: color-mix(in srgb, var(--pm6-forest) 35%, var(--pm6-border-soft));
+  background: var(--pm6-forest-tint);
+}
+
+.blocked {
+  border-color: color-mix(in srgb, var(--pm6-danger) 35%, var(--pm6-border-soft));
+  background: var(--pm6-danger-tint);
+}
+
+.sectionKind {
+  display: inline-flex;
+  align-items: center;
+  margin-right: var(--pm6-space-2);
+  padding: 0.15rem 0.55rem;
+  border-radius: var(--pm6-radius-pill);
+  font-size: 0.66rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  vertical-align: middle;
+}
+
+.sectionKind[data-kind="option"] {
   background: var(--pm6-surface-sunken);
+  border: 1px solid var(--pm6-border);
+  color: var(--pm6-muted-strong);
+}
+
+.sectionKind[data-kind="recommendation"] {
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-info);
+  color: var(--pm6-info);
+}
+
+.sectionKind[data-kind="decision"] {
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-forest);
+  color: var(--pm6-forest);
 }

 .blockTitle {
@@ -119,14 +171,21 @@
   font-size: 0.92rem;
   font-weight: 600;
   color: var(--pm6-ink);
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
 }

 .recoTitle {
   margin: 0;
-  font-size: 0.78rem;
-  font-weight: 700;
-  letter-spacing: 0.06em;
-  color: var(--pm6-forest);
+  font-size: 0.92rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
 }

 .optionList {
@@ -326,6 +385,21 @@
   font-weight: 600;
 }

+.contractLevel2 {
+  margin: 0;
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-canvas-raised);
+  padding: var(--pm6-space-3);
+  font-size: 0.82rem;
+  color: var(--pm6-muted-strong);
+}
+
+.contractLevel2 summary {
+  cursor: pointer;
+  font-weight: 600;
+}
+
 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 96c54184..9d35a22d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -39,8 +39,34 @@ import type {
   W3cPostEvidenceLoopDto,
 } from "@/features/project-assistant/w2/types";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
+import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
 import styles from "./TrajectorySurface.module.css";

+/**
+ * Presentation-only labels for ExecutionContractStatus.
+ * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
+ */
+const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
+  {
+    draft: "Brouillon",
+    proposed: "Proposé",
+    validated: "Validé",
+    confirmation_required: "Confirmation requise",
+    confirmed: "Confirmation enregistrée",
+    executing: "Exécution en cours",
+    completed: "Exécution terminée",
+    failed: "Échec d'exécution",
+    cancelled: "Annulé",
+    superseded: "Remplacé",
+  };
+
+function executionContractStatusLabel(status: string): string {
+  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
+    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
+  }
+  return "État du contrat indisponible";
+}
+
 /** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
 type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

@@ -98,11 +124,17 @@ export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
   recoveryProposeSignal = 0,
+  composition = "standalone",
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
   /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
   recoveryProposeSignal?: number;
+  /**
+   * H-01 Option A: embed visually in the LPS piloting region.
+   * Presentation-only — does not change ProjectTrajectory domain identity.
+   */
+  composition?: "standalone" | "lps-embedded";
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
@@ -555,20 +587,26 @@ export function TrajectorySurface({

   return (
     <section
-      className={styles.root}
+      className={[
+        styles.root,
+        composition === "lps-embedded" ? styles.embedded : "",
+      ]
+        .filter(Boolean)
+        .join(" ")}
       data-testid="w2-trajectory-panel"
+      data-composition={composition}
       aria-labelledby="w2-trajectory-title"
     >
       <header className={styles.head}>
-        <p className={styles.eyebrow}>Trajectoire et décision</p>
+        <p className={styles.eyebrow}>Trajectoire du projet</p>
         <h2 id="w2-trajectory-title" className={styles.title}>
           Options, recommandation, puis votre décision
         </h2>
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
-          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
+          courante. L&apos;exécution n&apos;est possible qu&apos;après une
+          autorisation vérifiée, via une action Exécuter explicite et distincte.
         </p>
       </header>

@@ -603,6 +641,9 @@ export function TrajectorySurface({
             data-testid="w2-options"
           >
             <h3 id="w2-options-title" className={styles.blockTitle}>
+              <span className={styles.sectionKind} data-kind="option">
+                Option
+              </span>
               Options proposées
             </h3>
             <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
@@ -657,6 +698,9 @@ export function TrajectorySurface({
             data-testid="w2-recommendation"
           >
             <h3 id="w2-reco-title" className={styles.recoTitle}>
+              <span className={styles.sectionKind} data-kind="recommendation">
+                Recommandation
+              </span>
               {optionSet.recommendation.label}
             </h3>
             <p className={styles.blockBody}>
@@ -679,6 +723,9 @@ export function TrajectorySurface({
           data-testid="w2-decision"
         >
           <h3 id="w2-decision-title" className={styles.blockTitle}>
+            <span className={styles.sectionKind} data-kind="decision">
+              Décision humaine
+            </span>
             Décision de trajectoire — {decision.statusLabel}
           </h3>
           <dl className={styles.facts}>
@@ -711,7 +758,7 @@ export function TrajectorySurface({
           >
             <p className={styles.blockNote}>
               Qualifier le travail d&apos;exécution réel (indépendant de
-              l&apos;option de trajectoire W2).
+              l&apos;option de trajectoire déjà décidée).
             </p>
             <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
               Opération d&apos;exécution
@@ -774,23 +821,19 @@ export function TrajectorySurface({
           data-testid="w2-contract"
         >
           <h3 id="w2-contract-title" className={styles.blockTitle}>
-            Contrat d&apos;exécution préparé
+            Contrat d&apos;exécution — résumé
           </h3>
+          <p className={styles.blockNote}>
+            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
+            toute confirmation. Confirmer n&apos;exécute pas.
+          </p>
           <dl className={styles.facts} data-testid="w2-contract-facts">
             <div>
-              <dt>Version</dt>
-              <dd data-testid="w2-contract-version">v{contract.version}</dd>
-            </div>
-            <div>
-              <dt>Statut</dt>
-              <dd data-testid="w2-contract-status">{contract.status}</dd>
-            </div>
-            <div>
-              <dt>Action</dt>
+              <dt>Ce qui sera fait</dt>
               <dd data-testid="w2-contract-action">{contract.action}</dd>
             </div>
             <div>
-              <dt>Cible</dt>
+              <dt>Résultat / cible</dt>
               <dd data-testid="w2-contract-target">{contract.target}</dd>
             </div>
             <div>
@@ -798,48 +841,96 @@ export function TrajectorySurface({
               <dd data-testid="w2-contract-scope">{contract.scope}</dd>
             </div>
             <div>
-              <dt>Autorité requise</dt>
-              <dd data-testid="w2-contract-authority">
-                {contract.requiredAuthority}
-              </dd>
-            </div>
-            <div>
-              <dt>Capacités</dt>
-              <dd data-testid="w2-contract-capabilities">
-                {contract.requiredCapabilities.length
-                  ? contract.requiredCapabilities.join(", ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Réversibilité</dt>
-              <dd data-testid="w2-contract-reversibility">
-                {contract.reversibility}
-              </dd>
-            </div>
-            <div>
-              <dt>Contraintes</dt>
-              <dd data-testid="w2-contract-constraints">
-                {contract.constraints.length
-                  ? contract.constraints.join(" · ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Conditions d&apos;arrêt</dt>
-              <dd data-testid="w2-contract-stops">
-                {contract.stopConditions.length
-                  ? contract.stopConditions.join(" · ")
-                  : "Aucune"}
+              <dt>État du contrat</dt>
+              <dd
+                data-testid="w2-contract-status"
+                data-status={contract.status}
+              >
+                {executionContractStatusLabel(contract.status)}
               </dd>
             </div>
             <div>
-              <dt>Empreinte sémantique</dt>
-              <dd className={styles.code}>
-                {contract.semanticFingerprint.slice(0, 12)}…
+              <dt>Prochaine action utile</dt>
+              <dd>
+                {inspection?.inspectionSufficient
+                  ? contract.status === "confirmation_required"
+                    ? "Confirmer si requis, puis statuer sur l'autorisation"
+                    : "Statuer sur l'autorisation"
+                  : "Inspecter le détail du contrat"}
               </dd>
             </div>
           </dl>
+          <details className={styles.contractLevel2}>
+            <summary>Détails métier du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="w2-contract-version">v{contract.version}</dd>
+              </div>
+              <div>
+                <dt>Autorité requise</dt>
+                <dd data-testid="w2-contract-authority">
+                  {contract.requiredAuthority}
+                </dd>
+              </div>
+              <div>
+                <dt>Capacités</dt>
+                <dd data-testid="w2-contract-capabilities">
+                  {contract.requiredCapabilities.length
+                    ? contract.requiredCapabilities.join(", ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Réversibilité</dt>
+                <dd data-testid="w2-contract-reversibility">
+                  {contract.reversibility}
+                </dd>
+              </div>
+              <div>
+                <dt>Contraintes</dt>
+                <dd data-testid="w2-contract-constraints">
+                  {contract.constraints.length
+                    ? contract.constraints.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Conditions d&apos;arrêt</dt>
+                <dd data-testid="w2-contract-stops">
+                  {contract.stopConditions.length
+                    ? contract.stopConditions.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Statut technique</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w2-contract-status-tech"
+                >
+                  {contract.status}
+                </dd>
+              </div>
+              <div>
+                <dt>Empreinte sémantique</dt>
+                <dd className={styles.code} data-testid="w2-contract-fingerprint">
+                  {contract.semanticFingerprint.slice(0, 12)}…
+                </dd>
+              </div>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd className={styles.code} data-testid="w2-contract-id-tech">
+                  {contract.executionContractId}
+                </dd>
+              </div>
+            </dl>
+          </details>

           {amendmentNotice ? (
             <div
@@ -919,7 +1010,7 @@ export function TrajectorySurface({
                     : undefined
                 }
               >
-                Confirmer (effets / autorité)
+                Confirmer mon consentement
               </button>
             ) : null}
             <button
@@ -961,8 +1052,13 @@ export function TrajectorySurface({
           role="status"
         >
           <h3 id="w2-authorization-title" className={styles.blockTitle}>
-            <span data-testid="w2-authorization-outcome">
-              {authorization.outcomeLabel}
+            <span
+              data-testid="w2-authorization-outcome"
+              data-outcome={authorization.outcome}
+            >
+              {authorization.outcome === "AUTHORIZED"
+                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                : "Exécution bloquée"}
             </span>
           </h3>
           <p className={styles.blockBody} data-testid="w2-authorization-reason">
@@ -988,13 +1084,24 @@ export function TrajectorySurface({
               <dt>Inspection</dt>
               <dd>{authorization.inspection.statusLabel}</dd>
             </div>
-            <div>
-              <dt>Trace d&apos;autorité</dt>
-              <dd className={styles.code}>
-                {authorization.authorityReceiptRef}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques d&apos;autorité</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Verdict technique</dt>
+                <dd data-testid="w2-authorization-outcome-tech">
+                  {authorization.outcomeLabel}
+                </dd>
+              </div>
+              <div>
+                <dt>Trace d&apos;autorité</dt>
+                <dd className={styles.code} data-testid="w2-authority-receipt">
+                  {authorization.authorityReceiptRef}
+                </dd>
+              </div>
+            </dl>
+          </details>
           {authorization.outcome === "AUTHORIZED" && !attempt ? (
             <>
               <p

```

---

## 16. FULL UNTRACKED E2E — studio-w4b-single-authority-path.spec.ts
```typescript

/**
 * W4-B — Single authority path on canonical `/studio`.
 * Proves F2/F3 authority/execute affordances are not product-visible;
 * W2/W3 remains the sole decision → EC → confirm → authorize → execute chain.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-br-corr-01",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    sc: string;
    state: string;
    viewport: { width: number; height: number };
    observation: string;
  },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const timestamp = new Date().toISOString();
  const row = {
    id,
    file: path.basename(file),
    timestamp,
    sha256,
    route: page.url(),
    ...meta,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-BR-CORR-01 BUSINESS-FIRST COPY + EC STATUS",
  };
  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
  fs.appendFileSync(
    MANIFEST,
    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
}

test.describe("W4-B single authority path /studio", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-BR-CORR-01 runtime captures (business-first copy + EC status)",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B SPA ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    // W4-BR-CORR-01 — banned internal/method copy absent from Pilote-facing S2.
    await expect(page.locator("body")).not.toContainText(
      "pas un questionnaire méthode",
    );
    await expect(page.locator("body")).not.toContainText(
      "cela ne qualifie pas automatiquement le cycle et ne crée pas de décision humaine",
    );
    await expect(page.locator("#project-context")).toHaveAttribute(
      "placeholder",
      "Ajoutez uniquement le contexte utile au projet.",
    );
    await capture(page, "A-S2-create-form-1440", {
      sc: "S2",
      state: "create form after CORR-01 copy",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first context copy; no method jargon",
    });
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-B single authority path deterministic");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("w2-trajectory-panel")).toHaveAttribute(
      "data-composition",
      "lps-embedded",
    );
    await expect(
      page.getByTestId("project-lps-column").getByTestId("w2-trajectory-panel"),
    ).toBeVisible();
    await expect(page.locator("body")).not.toContainText(
      "sans second chemin d'autorité",
    );
    await expect(page.getByTestId("project-state-trajectory-region")).toContainText(
      "L'état actuel et la trajectoire sont regroupés ici pour faciliter le pilotage.",
    );
    await capture(page, "B-workspace-state-trajectory-note-1440", {
      sc: "H-01",
      state: "État/Trajectoire note after CORR-01",
      viewport: { width: 1440, height: 900 },
      observation: "Pilote-facing note; no authority-path jargon",
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-single-path-1440", {
      sc: "SC-03",
      state: "qualified; guidance to trajectory; no F2/F3 authority",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualify kept; H-01 LPS+Trajectory region; second authority path absent",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-recommendation-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Single W2 options path",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    // Only one structural decide family: w2-decide-*, no f2-decide-*
    await expect(page.locator("[data-testid^='f2-decide-']")).toHaveCount(0);
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "W2 HumanDecision recorded",
      viewport: { width: 1440, height: 900 },
      observation: "Single structural HumanDecision",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "Confirmation requise",
    );
    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
      "confirmation_required",
    );
    await page.getByText("Détails techniques du contrat").click();
    await capture(page, "C-EC-business-status-1440", {
      sc: "SC-05",
      state: "EC prepared; business status label primary",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status = Confirmation requise",
    });
    await capture(page, "D-EC-technical-status-audit-1440", {
      sc: "SC-05",
      state: "EC technical details; raw status auditable",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status-tech = confirmation_required",
    });
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC prepared",
      viewport: { width: 1440, height: 900 },
      observation: "EC summary on TrajectorySurface only",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspection-1440", {
      sc: "SC-06",
      state: "EC inspected",
      viewport: { width: 1440, height: 900 },
      observation: "Inspection before Confirmation",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.isVisible()) {
      await expect(confirm).toBeEnabled();
      await confirm.click();
      await expect(page.getByTestId("w2-contract-status")).toHaveText(
        "Confirmation enregistrée",
        { timeout: 30_000 },
      );
      await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
        "data-status",
        "confirmed",
      );
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "Confirmation separate from Execute",
        viewport: { width: 1440, height: 900 },
        observation: "A11Y-PC-05: confirm ≠ execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "SC-07-authorized-1440", {
      sc: "SC-07",
      state: "AUTHORIZED business label",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first authorization; Execute separate",
    });

    for (const w of [1024, 390] as const) {
      await page.setViewportSize({ width: w, height: 900 });
      await capture(page, `SC-07-authorized-${w}`, {
        sc: "SC-07 / H-02",
        state: `authorized responsive ${w}`,
        viewport: { width: w, height: 900 },
        observation: "Responsive authority region",
      });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({ timeout: 90_000 });
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-08-09-attempt-terminal-1440", {
      sc: "SC-08/SC-09",
      state: "attempt / terminal after governed execute",
      viewport: { width: 1440, height: 900 },
      observation: "Single execute path; no F3 confirm+execute",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-04-or-05-responsive-1024", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 1024",
      viewport: { width: 1024, height: 900 },
      observation: "Responsive workspace after single path",
    });
    await page.setViewportSize({ width: 390, height: 900 });
    await capture(page, "SC-04-or-05-responsive-390", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 390",
      viewport: { width: 390, height: 900 },
      observation: "Responsive workspace after single path",
    });
  });

  test("negative: blocked authorization shows business label and no Attempt", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B BLOCK ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page.locator("#project-objective").fill("W4-B blocked auth path");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    // Authorize WITHOUT inspect → blocked
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-07-blocked-1440", {
      sc: "SC-07",
      state: "authorization blocked; no attempt",
      viewport: { width: 1440, height: 900 },
      observation: "Blocked is textual; Execute absent",
    });
  });
});

```

---

## 17. FULL UNTRACKED E2E — studio-w4d-product-screens-visual-closure.spec.ts
```typescript

/**
 * W4-D — Product Screens Visual Closure captures on canonical /studio.
 * Extends W4-B single-authority flow with Entry/Create/responsive coverage.
 * Presentation regression only — no new product semantics.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-d",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    sc: string;
    state: string;
    viewport: { width: number; height: number };
    observation: string;
  },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const timestamp = new Date().toISOString();
  const row = {
    id,
    file: path.basename(file),
    timestamp,
    sha256,
    route: page.url(),
    ...meta,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-D PRODUCT SCREENS VISUAL CLOSURE",
  };
  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
  fs.appendFileSync(
    MANIFEST,
    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
}

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.describe("W4-D product screens visual closure", () => {
  test.describe.configure({ timeout: 420_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("entry/create/workspace visual path + responsive trio + authority chain", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-D runtime captures",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    // --- Entry / empty-capable home ---
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await expect(page.getByTestId("studio-projects-create")).toBeVisible();
    await expect(page.getByTestId("studio-projects-create")).toHaveText(
      /Créer un projet/,
    );
    await capture(page, "SC-01-entry-1440", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 1440, height: 900 },
      observation: "Entry CTA Créer un projet; shell coherent",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-01-entry-1024", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 1024, height: 900 },
      observation: "Entry contained at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-01-entry-390", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 390, height: 844 },
      observation: "Entry contained at 390",
    });
    await assertNoHorizontalOverflow(page);

    // --- Create ---
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    await capture(page, "SC-02-create-1440", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 1440, height: 900 },
      observation: "Create form business-first; Créer + Annuler",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-02-create-1024", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 1024, height: 900 },
      observation: "Create at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-02-create-390", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 390, height: 844 },
      observation: "Create at 390",
    });
    await assertNoHorizontalOverflow(page);

    // --- Deterministic authority path ---
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-D Visual ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-D visual closure deterministic");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
    await capture(page, "SC-03-workspace-h01-1440", {
      sc: "SC-03",
      state: "workspace H-01",
      viewport: { width: 1440, height: 900 },
      observation: "Conversation + H-01 LPS/Trajectory region",
    });

    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-1440", {
      sc: "SC-03",
      state: "qualified",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualification; single authority",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-rec-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Option ≠ Recommendation visual badges",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "HumanDecision",
      viewport: { width: 1440, height: 900 },
      observation: "HumanDecision visually distinct",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
      "confirmation_required",
    );
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC summary",
      viewport: { width: 1440, height: 900 },
      observation: "EC business status primary",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspect-1440", {
      sc: "SC-06",
      state: "EC inspected",
      viewport: { width: 1440, height: 900 },
      observation: "Inspection before Confirmation",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.isVisible()) {
      await expect(confirm).toBeEnabled();
      await confirm.click();
      await expect(page.getByTestId("w2-contract-status")).toHaveText(
        "Confirmation enregistrée",
        { timeout: 30_000 },
      );
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "confirmed",
        viewport: { width: 1440, height: 900 },
        observation: "Confirmation ≠ Execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await capture(page, "SC-07-08-authorized-execute-1440", {
      sc: "SC-07/08",
      state: "authorized execute available",
      viewport: { width: 1440, height: 900 },
      observation: "Authority allowed; Execute separate",
    });

    // Responsive workspace + EC
    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-R01-workspace-1024", {
      sc: "SC-R01",
      state: "workspace+trajectory",
      viewport: { width: 1024, height: 900 },
      observation: "H-01 stack at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-R01-workspace-390", {
      sc: "SC-R01",
      state: "workspace+trajectory",
      viewport: { width: 390, height: 844 },
      observation: "H-01 stack at 390",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 1024, height: 900 });
    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
    await capture(page, "SC-R02-ec-1024", {
      sc: "SC-R02",
      state: "EC/authority",
      viewport: { width: 1024, height: 900 },
      observation: "EC contained at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
    await capture(page, "SC-R02-ec-390", {
      sc: "SC-R02",
      state: "EC/authority",
      viewport: { width: 390, height: 844 },
      observation: "EC contained at 390",
    });
    await assertNoHorizontalOverflow(page);

    // History surface if present
    await page.setViewportSize({ width: 1440, height: 900 });
    const history = page.getByTestId("project-history-panel");
    if (await history.count()) {
      await history.scrollIntoViewIfNeeded();
      await capture(page, "SC-history-1440", {
        sc: "History",
        state: "history panel",
        viewport: { width: 1440, height: 900 },
        observation: "History shell-coherent",
      });
    }

    // Execute for running if available
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });
    await capture(page, "SC-08-attempt-1440", {
      sc: "SC-08",
      state: "attempt running/terminal",
      viewport: { width: 1440, height: 900 },
      observation: "Attempt state represented",
    });
  });
});

```
