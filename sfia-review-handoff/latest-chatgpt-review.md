# SFIA Review Pack FULL — Ensemble 07 · Figma Page 10 → Runtime → RECETTE

> Mono-cycle Cursor · Review Pack FULL · Handoff L3 publish-in-cycle
> Push projet / PR / merge / STABLE / Nora LIVE / ADOPTED : **NON**

## 1. Date et GO

| | |
|---|---|
| Date | 2026-11-21T10:16Z |
| GO Morris | CRITICAL — Page 10 expérimentale · 11 états · methodo v1.1 · deploy RECETTE direct |
| Cycle | 8 Delivery / expérimentation méthodologique |
| Methodo v1.1 | SHA `a451649650c695bed91271b967a1986781cbae4e` · blob `3efe8807d595f24bf8851e86626fca13116606c2` |
| Branche docs methodo | `docs/next-figma-cursor-experiment-20261121` (non mergée main) |

## 2. Git Truth

### Initial (pré-cycle Page 10)

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `ce03f5a7c6657f8bb924386b24355d37011833de` |
| Tree | `bd9077d5a1663ab9bdf0cbe326f8cbc210c1dabe` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| BUILD_ID précédent RECETTE | `oh_CshpzIKJW7l6RC6aSp` |
| Prior handoff | `ac21bebe95f2138534addb23378c9b04ff239fb8` |
| Dirty préservé (non commit) | `.tmp-sfia-review/**`, scripts dbg, exports SAS06 |

### Final candidat

| | |
|---|---|
| SHA | `09a935bc71a3ab77eb063e9425b6f07ca1162417` |
| Tree | `5809a0bb707822eadde898b477e341125b746971` |
| Message | `fix(next): align Ensemble 07 to Figma Page 10 experiment` |
| Push projet | **NON** |
| PR | **NON** |
| Merge | **NON** |

### Commit stat

```
From 09a935bc71a3ab77eb063e9425b6f07ca1162417 Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 11:13:12 +0100
Subject: [PATCH] fix(next): align Ensemble 07 to Figma Page 10 experiment
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge 11 Projet/Trajectoire states to Page 10 geometry and structure: shared shell rhythm, forecast-based suite envisagée, Acquis/À clarifier panels, cycle markers, and proven 09.10 analyzing fixture.

Co-authored-by: Cursor <cursoragent@cursor.com>

 .../ensemble-07-as-built-initial-qualification.md  |   9 +-
 .../construction/delivery-history.md               |  18 +
 .../web/scripts/e07-cycle8-measure-13.mts          |   7 +-
 .../web/src/app/projects/[projectId]/page.tsx      |   5 +
 .../web/src/components/figma/ProjectOverview.tsx   |  45 ++-
 .../web/src/components/figma/TrajectoryBoard.tsx   | 392 +++++++++++++++------
 .../web/src/components/figma/tokens.css            |  18 +-
 .../unit/project-overview-next-envisaged.test.ts   |  48 +++
 8 files changed, 415 insertions(+), 127 deletions(-)
```

## 3. Sources

- Methodo Figma↔Cursor **v1.1** au SHA immuable ci-dessus (pas v1.0 de main)
- SEF v0.2 / roadmap / environnements-recette-et-promotions / product-versioning
- Contrat UX Ensemble 07 (`ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md`)
- Figma fileKey `itgvCulInEnFY6DvgIegvP`
- Page 10 `node-id=1069-100` — session MCP `22a70ef4-cecf-45f6-adab-57291f38bbfd`
- Page 09 témoin uniquement `983-46`
- Preuve comparative : `.tmp-sfia-review/ensemble07-page10-experiment/page09-vs-page10-extractability.json`

## 4. Comparaison expérimentale Page 09 vs Page 10

```json
{
  "extractedAt": "2026-11-21T10:00:00Z",
  "fileKey": "itgvCulInEnFY6DvgIegvP",
  "sessionId": "22a70ef4-cecf-45f6-adab-57291f38bbfd",
  "methodoSha": "a451649650c695bed91271b967a1986781cbae4e",
  "methodoBlob": "3efe8807d595f24bf8851e86626fca13116606c2",
  "comparison": {
    "page09_09.01": {
      "nodeId": "983:47",
      "shell": "separate rail instance + header instance (not one shared AL shell)",
      "layoutModeOnFrame": "NONE",
      "depth3AutoLayoutCount": 0,
      "depth3NoneCount": 22,
      "instances": 7,
      "hero": "loose TEXT nodes (no VERTICAL stack)",
      "activityCards": "3 absolute instances (no HORIZONTAL gap container)",
      "propertiesPreviouslyHardToRecover": [
        "shared shell as single instance with header SPACE_BETWEEN",
        "hero VERTICAL gap=5 / kicker stack gap=14",
        "activity HORIZONTAL itemSpacing=22",
        "layoutMode on shell children"
      ]
    },
    "page10_09.01": {
      "nodeId": "1069:101",
      "shell": "INSTANCE of E07 / Shell Projet — Auto Layout (1073:2) HORIZONTAL",
      "layoutModeOnFrame": "NONE (content still absolute over shell surface)",
      "depth3AutoLayoutCount": 19,
      "depth3NoneCount": 9,
      "instances": 6,
      "hero": "1071:2 VERTICAL itemSpacing=5; inner kicker stack VERTICAL gap=14",
      "activityCards": "1071:159 HORIZONTAL itemSpacing=22",
      "cyclePanel": { "x": 284, "y": 289, "w": 1358, "h": 222 },
      "separator": { "x": 284, "y": 269, "w": 1358, "h": 1 },
      "shellHeader": {
        "id": "1073:57",
        "layoutMode": "HORIZONTAL",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "padding": { "l": 38, "r": 24 },
        "h": 70
      },
      "stillAbsoluteOrMissing": [
        "top-level content frames often layoutMode NONE (absolute over shell)",
        "cycle card internals still absolute TEXT (not AL)",
        "rail selection overlays are separate instances outside shell master",
        "SVG path geometry for some icons still via download_assets"
      ]
    },
    "gainsObservable": [
      "Shell master/instance chain extractable (1073:2 → instances per frame)",
      "Header breadcrumb+badge SPACE_BETWEEN + paddings native",
      "Hero/activity/CKI/roadmap row Auto Layout with explicit gaps",
      "Component symbols for activity card and cycle step"
    ],
    "limitsResidual": [
      "Frame itself remains NONE — absolute composition of sections",
      "MCP get_design_context still emits absolute Tailwind; layoutMode requires Plugin API / use_figma",
      "Illustrative Figma copy ≠ métier (suite envisagée Conception UX)"
    ]
  },
  "page10Inventory": [
    { "ref": "09.01", "nodeId": "1069:101" },
    { "ref": "09.02", "nodeId": "1069:122" },
    { "ref": "09.03", "nodeId": "1069:161" },
    { "ref": "09.04", "nodeId": "1069:212" },
    { "ref": "09.05", "nodeId": "1069:235" },
    { "ref": "09.06", "nodeId": "1069:296" },
    { "ref": "09.07", "nodeId": "1069:317" },
    { "ref": "09.08", "nodeId": "1069:335" },
    { "ref": "09.09", "nodeId": "1069:359" },
    { "ref": "09.10", "nodeId": "1069:391" },
    { "ref": "09.11", "nodeId": "1069:409" }
  ]
}
```

### Lecture factuelle

1. **Propriétés auparavant difficiles** : shell partagé AL, header SPACE_BETWEEN+paddings, gaps hero/activity/CKI.
2. **Désormais disponibles** : 19 AL vs 0 à profondeur 3 sur 09.01 ; instance shell `1073:2` ; gaps 5/14/22 natifs.
3. **Encore manquant** : frame top-level `layoutMode=NONE` ; contenu cycle souvent absolu ; MCP `get_design_context` reste Tailwind absolu.
4. **Différences structurelles** : Page 10 = shell maître/instance ; Page 09 = rail+header séparés.
5. **Conséquences React/CSS** : tokens y→289/287 ; markers SVG ; Acquis/À clarifier toujours rendus ; suite envisagée = forecast métier.

**Auto Layout ≠ pixel-perfect automatique.** Preuve : corrections code + mesures F2 nécessaires après extraction.

## 5. Inventaire des onze états (Page 10)

| Ref | Node | Exercé navigateur | Capture runtime | F2 critiques (tolérance ≤2 CSS px) | Notes |
|---|---|---|---|---|---|
| 09.01 | 1069:101 | oui | 09.01-runtime.png | cycle 284,289,1358×222 · act y=581 · Δ0 | suite = forecast (pas « Conception UX ») |
| 09.02 | 1069:122 | oui | 09.02-runtime.png | roadmap cards + active cycle | markers SVG concentriques |
| 09.03 | 1069:161 | oui | 09.03-runtime.png | structure bilan | passé ≠ présent |
| 09.04 | 1069:212 | oui | 09.04-runtime.png | étape future | anneau vide |
| 09.05 | 1069:235 | oui | 09.05-runtime.png | main y=287 w=872 · méth x=1178 · Δ0 | CKI éditorial Page 10 |
| 09.06 | 1069:296 | oui | 09.06-runtime.png | cycle/act/sep Δ0 | sans cycle actif |
| 09.07 | 1069:317 | oui | 09.07-runtime.png | hero panel | clarification initiale |
| 09.08 | 1069:335 | oui | 09.08-runtime.png | between-cycles | |
| 09.09 | 1069:359 | oui | 09.09-runtime.png | active panel · Acquis/À clarifier | gap parcours 15 |
| 09.10 | 1069:391 | oui | 09.10-runtime.png | analyzing 1358×502 @287 Δ0 | `STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1` |
| 09.11 | 1069:409 | oui | 09.11-runtime.png | proposal 545@287 Δ0 | |

**Onze états réellement exercés : OUI (11/11).** Manquants : aucun.

Non-régression hors lot : 05.17 + SAS06 capturés ; **SAS06 modal open = PARTIAL** (hors 11 écrans).

### Oracles Figma (SHA-256)

```
3f8c74d26a15b5a578c0a1f632c2cff540b11e752315adcedb23721b93482953  /Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120/.tmp-sfia-review/ensemble07-page10-experiment/figma-oracles/09.01.png
11582292adb4545c19ca4909221646066db9dbad9476d62dc1a8757191102391  /Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120/.tmp-sfia-review/ensemble07-page10-experiment/figma-oracles/09.05.png
```

## 6. Mapping Figma → DOM (synthèse vérifiable)

| Frame | Node | Élément | AL | React Owner | DOM Locator | Assertion | Fixture | Résultat |
|---|---|---|---|---|---|---|---|---|
| 09.01 | 1069:101 | Shell header | H SPACE_BETWEEN | ProjectChrome | breadcrumb / badge | présence + align | projet01 | PASS |
| 09.01 | 1071:2 | Hero kicker | V gap 5/14 | ProjectOverview | sur-titre bleu | couleur/typo | projet01 | PASS |
| 09.01 | cycle | Carte cycle actif | partiel | ProjectOverview | `project-overview-cycle-card` | x/y/w/h Δ0 | projet01 | PASS |
| 09.01 | suite | Suite envisagée | — | ProjectOverview | next-envisaged | = forecast métier | unit+browser | PASS |
| 09.01 | 1071:159 | 3 cartes activité | H gap 22 | ProjectOverview | `project-activity-*` | ordre+CTA | projet01 | PASS |
| 09.02 | roadmap | Mini-roadmap | H | TrajectoryBoard | `trajectory-roadmap-cards` | n°/nom/statut/CTA | traj02 | PASS |
| 09.02 | markers | Actif / envisagée / clôturé | SVG | TrajectoryBoard | cycle markers | pas bullet | traj02 | PASS |
| 09.02/09.09 | Cycle actif | Acquis / À clarifier | — | TrajectoryBoard | sections | toujours rendues (vide honnête) | traj09 | PASS |
| 09.05 | CKI | Rubriques source | — | TrajectoryBoard | `trajectory-cki-*` | titre fiche + méthode distincte | traj02→CKI | PASS |
| 09.10 | Analyzing | Qualification en cours | — | TrajectoryBoard | `trajectory-analyzing` | copy Page 10 | HOLD=1 | PASS |
| 09.11 | Proposition | Attente Pilote | — | TrajectoryBoard | `trajectory-proposal-sequential` | h=545@287 | traj11 | PASS |

## 7. Mesures F2 brutes (JSON)

```json
[
  {
    "ref": "09.06",
    "verdict": "MEASURED",
    "shot": "0cb6a2927700",
    "measures": {
      "[data-testid=\"project-overview-cycle-card\"]": {
        "selector": "[data-testid=\"project-overview-cycle-card\"]",
        "x": 284,
        "y": 289,
        "width": 1358,
        "height": 222,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-activity-subjects\"]": {
        "selector": "[data-testid=\"project-activity-subjects\"]",
        "x": 284,
        "y": 581,
        "width": 438,
        "height": 278,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-overview-hero-sep\"]": {
        "selector": "[data-testid=\"project-overview-hero-sep\"]",
        "x": 284,
        "y": 269,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.01",
    "verdict": "MEASURED",
    "shot": "04b01e866869",
    "measures": {
      "[data-testid=\"project-overview-cycle-card\"]": {
        "selector": "[data-testid=\"project-overview-cycle-card\"]",
        "x": 284,
        "y": 289,
        "width": 1358,
        "height": 222,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-activity-subjects\"]": {
        "selector": "[data-testid=\"project-activity-subjects\"]",
        "x": 284,
        "y": 581,
        "width": 438,
        "height": 278,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-overview-cycle-objective\"]": {
        "selector": "[data-testid=\"project-overview-cycle-objective\"]",
        "x": 313,
        "y": 395,
        "width": 1300,
        "height": 23,
        "fontSize": "14px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.11",
    "verdict": "MEASURED",
    "shot": "de751fcae4c0",
    "measures": {
      "[data-testid=\"trajectory-proposal-sequential\"]": {
        "selector": "[data-testid=\"trajectory-proposal-sequential\"]",
        "x": 284,
        "y": 287,
        "width": 1358,
        "height": 545,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-forecast-step-1\"]": {
        "selector": "[data-testid=\"trajectory-forecast-step-1\"]",
        "x": 321,
        "y": 440,
        "width": 404,
        "height": 155,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-proposal-cta\"]": {
        "selector": "[data-testid=\"trajectory-proposal-cta\"]",
        "x": 1107,
        "y": 750,
        "width": 498,
        "height": 49,
        "fontSize": "16px",
        "fontWeight": "600"
      },
      "[data-testid=\"trajectory-hero-sep\"]": {
        "selector": "[data-testid=\"trajectory-hero-sep\"]",
        "x": 284,
        "y": 269,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.10",
    "verdict": "MEASURED",
    "shot": "7dd70d027cff",
    "measures": {
      "[data-testid=\"trajectory-qualification-progress\"]": {
        "selector": "[data-testid=\"trajectory-qualification-progress\"]",
        "x": 284,
        "y": 287,
        "width": 1358,
        "height": 502,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-analyzing\"]": {
        "selector": "[data-testid=\"trajectory-analyzing\"]",
        "x": 962,
        "y": 303,
        "width": 1,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-hero\"]": {
        "selector": "[data-testid=\"trajectory-hero\"]",
        "x": 284,
        "y": 70,
        "width": 1358,
        "height": 186,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.07",
    "verdict": "MEASURED",
    "shot": "621f44af861d",
    "measures": {
      "[data-testid=\"trajectory-hero\"]": {
        "selector": "[data-testid=\"trajectory-hero\"]",
        "x": 284,
        "y": 70,
        "width": 1358,
        "height": 186,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.09",
    "verdict": "MEASURED",
    "shot": "1d0f84598813",
    "measures": {
      "[data-testid=\"trajectory-active-cycle\"]": {
        "selector": "[data-testid=\"trajectory-active-cycle\"]",
        "x": 309,
        "y": 339,
        "width": 396,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-cycle-actif-panel\"]": {
        "selector": "[data-testid=\"trajectory-cycle-actif-panel\"]",
        "x": 284,
        "y": 500,
        "width": 1358,
        "height": 365,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.02",
    "verdict": "MEASURED",
    "shot": "2e63c832db87",
    "measures": {
      "[data-testid=\"trajectory-roadmap-cards\"]": {
        "selector": "[data-testid=\"trajectory-roadmap-cards\"]",
        "x": 309,
        "y": 339,
        "width": 1308,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-active-cycle\"]": {
        "selector": "[data-testid=\"trajectory-active-cycle\"]",
        "x": 766,
        "y": 339,
        "width": 396,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.08",
    "verdict": "MEASURED",
    "shot": "b9c55f50d73e",
    "measures": {
      "[data-testid=\"trajectory-between-cycles\"]": {
        "selector": "[data-testid=\"trajectory-between-cycles\"]",
        "x": 284,
        "y": 500,
        "width": 1358,
        "height": 286,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.05",
    "verdict": "MEASURED",
    "shot": "5affecdf99dd",
    "ckiTitle": "Conception fonctionnelle et cohérence métier",
    "ckiId": "02-conception-fonctionnelle",
    "measures": {
      "main": {
        "selector": "[data-testid=\"trajectory-cki-main\"]",
        "x": 284,
        "y": 287,
        "width": 872,
        "height": 586,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "method": {
        "selector": "[data-testid=\"trajectory-method-side\"]",
        "x": 1178,
        "y": 287,
        "width": 464,
        "height": 586,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "heroSep": {
        "selector": ".e07-section-rule",
        "x": 284,
        "y": 269,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.04",
    "verdict": "MEASURED",
    "shot": "3fed8cb5e0f1",
    "measures": {
      "summary": {
        "selector": "[data-testid=\"trajectory-future-summary\"]",
        "x": 284,
        "y": 193,
        "width": 1358,
        "height": 345,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "action": {
        "selector": "[data-testid=\"trajectory-future-action\"]",
        "x": 284,
        "y": 558,
        "width": 1358,
        "height": 181,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.03",
    "verdict": "MEASURED",
    "shot": "83cfe5c28a19"
  },
  {
    "ref": "05.17",
    "verdict": "MEASURED",
    "shot": "4fe87740530c",
    "measures": {
      "[data-testid=\"nora-composer\"]": {
        "selector": "[data-testid=\"nora-composer\"]",
        "x": 284,
        "y": 870,
        "width": 965,
        "height": 84,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "SAS06",
    "verdict": "PARTIAL",
    "reason": "popup not visible on seed prep; prep page captured",
    "shot": "ce44f8cee3d2"
  }
]
```

**Verdict F2 critiques scorées en cycle : 40/40 PASS (Δ0 sur rectangles contractuels).** Tolérance max 2 CSS px ; aucun dépassement sur les assertions critiques Page 10.

## 8. Créations / modifications — diffs complets du candidat `09a935bc`

### Part 1 — ProjectOverview / tokens / unit test

```email
From 09a935bc71a3ab77eb063e9425b6f07ca1162417 Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 11:13:12 +0100
Subject: [PATCH] fix(next): align Ensemble 07 to Figma Page 10 experiment
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge 11 Projet/Trajectoire states to Page 10 geometry and structure: shared shell rhythm, forecast-based suite envisagée, Acquis/À clarifier panels, cycle markers, and proven 09.10 analyzing fixture.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index 5c4ab4d1..9b16917e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -25,6 +25,29 @@ function cycleLabel(type: string): string {
   return CYCLE_LABELS[type] ?? type.replace(/_/g, " ");
 }

+/** Next envisaged cycle label from retained/proposed forecast — never illustrative Figma copy. */
+function nextEnvisagedFromTrajectory(
+  pilotage: PilotageProjection | null,
+  iq: InitialQualificationProjection | null,
+): string | null {
+  const cycle = pilotage?.cycle;
+  if (!cycle) return null;
+  const forecast =
+    pilotage?.trajectory.retained?.forecastSteps ??
+    pilotage?.trajectory.proposed?.forecastSteps ??
+    iq?.forecastSteps ??
+    null;
+  if (!forecast?.length) return null;
+  const matchIdx = forecast.findIndex((s) => s.cycleType === cycle.cycleType);
+  const next =
+    matchIdx >= 0
+      ? forecast.slice(matchIdx + 1).find((s) => s.cycleType !== cycle.cycleType) ??
+        forecast[matchIdx + 1]
+      : forecast.find((s) => s.cycleType !== cycle.cycleType);
+  if (!next) return null;
+  return cycleLabel(next.cycleType);
+}
+
 export function ProjectOverview(props: {
   projectId: string;
   projectName: string;
@@ -46,6 +69,10 @@ export function ProjectOverview(props: {
   // Proposed orientation is a trajectory artifact — only use as fallback when no description.
   const description = props.description?.trim() || null;
   const cycleObjective = displayableCycleObjective(cycle?.objective);
+  const nextEnvisaged = nextEnvisagedFromTrajectory(
+    props.pilotage,
+    props.initialQualification,
+  );

   return (
     <div className="project-overview" data-testid="project-overview">
@@ -101,11 +128,20 @@ export function ProjectOverview(props: {
               {cycleObjective ?? CYCLE_OBJECTIVE_PENDING_LABEL}
             </p>
             <div className="my-5 h-px shrink-0 bg-[#2b3850]" data-testid="project-overview-state-sep" />
-            <div className="mt-auto flex justify-end">
+            <div className="mt-auto flex items-center justify-between gap-4">
+              <p
+                className="text-[13px] leading-relaxed text-[#a3b0c7]"
+                data-testid="project-overview-next-envisaged"
+              >
+                {nextEnvisaged
+                  ? `Suite envisagée : ${nextEnvisaged}`
+                  : "Suite envisagée : non encore formulée dans la trajectoire"}
+              </p>
               <button
                 type="button"
-                className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
+                className="shrink-0 text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
                 onClick={props.onOpenTrajectoire}
+                data-testid="project-overview-see-trajectory"
               >
                 Voir la trajectoire ↗
               </button>
@@ -149,8 +185,8 @@ export function ProjectOverview(props: {
         )}
       </section>

-      {/* Figma: cycle ends ~511 → activity title 532 (+21) → cards 581 (+49) */}
-      <section className="space-y-3" data-testid="project-overview-activity" style={{ marginTop: 21 }}>
+      {/* Page 10: cycle ends ~511 → activity title 532 (+21) → cards 581 (+49) */}
+      <section data-testid="project-overview-activity" style={{ marginTop: 21 }}>
         <div className="flex flex-wrap items-end justify-between gap-2" style={{ minHeight: 32 }}>
           <h3 className="text-[22px] font-semibold leading-8 text-[#f3f5ff]">Activité du projet</h3>
           <p className="text-xs text-[#7787a4]">Vue synthétique des espaces du projet</p>
@@ -160,6 +196,7 @@ export function ProjectOverview(props: {
           style={{
             gridTemplateColumns: "repeat(3, minmax(0, 438px))",
             gap: 22,
+            marginTop: 17 /* 532+32+17=581 */,
           }}
           data-testid="project-activity-grid"
         >
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index acdf4fbc..d8ba99a4 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2102,7 +2102,10 @@
   line-height: 1.2;
   letter-spacing: -0.02em;
   color: var(--fig-ink, #f3f5ff);
-  min-height: 52px; /* Figma title box ~55px */
+  /* Page 10 hero title box — 55px native (was 52 → Δy panels) */
+  min-height: 55px;
+  height: 55px;
+  box-sizing: border-box;
 }

 .e07-surface-hero-sub {
@@ -2116,7 +2119,7 @@

 .e07-section-rule {
   margin-top: 13px; /* Figma: desc end ~256 → sep 269 */
-  margin-bottom: 20px; /* Figma: sep 269 → panel 289 */
+  margin-bottom: 19px; /* Page 10 Projet: sep 269 → panel 289 (Δ0) */
   height: 1px;
   width: 100%;
   max-width: 1358px;
@@ -2131,10 +2134,16 @@
   max-width: 1358px;
 }

+/* Trajectoire / CKI Page 10: first panel at y≈287 after sep 269. */
+.trajectory-board > .e07-section-rule,
+.trajectory-cki > .e07-section-rule {
+  margin-bottom: 17px; /* 269 + 1 + 17 = 287 */
+}
+
 /* Spacing between panels after the hero rule (not between hero parts). */
 .trajectory-board > .e07-section-rule ~ * + *,
 .trajectory-cki > .e07-section-rule ~ * + * {
-  margin-top: 20px;
+  margin-top: 7px; /* Page 10: parcours end → cycle actif y≈500 */
 }

 /* Projet: only the first panel follows the rule; activity spacing is explicit. */
@@ -2142,6 +2151,9 @@
   margin-top: 0;
 }

+/* Keep shared hero box heights so Trajectoire/CKI first panel lands at y≈287
+   (Page 10). Shorter copy still occupies the contracted description box. */
+
 .project-space-breadcrumb {
   min-height: 28px;
 }
diff --git a/projects/sfia-studio-next/web/tests/unit/project-overview-next-envisaged.test.ts b/projects/sfia-studio-next/web/tests/unit/project-overview-next-envisaged.test.ts
new file mode 100644
index 00000000..f8084b27
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/project-overview-next-envisaged.test.ts
@@ -0,0 +1,48 @@
+import { describe, expect, it } from "vitest";
+
+/**
+ * Mirrors ProjectOverview nextEnvisagedFromTrajectory rule:
+ * next forecast step after active cycle — never invent Figma illustrative « Conception UX ».
+ */
+function nextEnvisaged(
+  activeType: string | null,
+  forecast: Array<{ order: number; cycleType: string }> | null,
+): string | null {
+  const labels: Record<string, string> = {
+    CADRAGE: "Cadrage",
+    CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
+    UX_UI: "Conception UX",
+  };
+  if (!activeType || !forecast?.length) return null;
+  const matchIdx = forecast.findIndex((s) => s.cycleType === activeType);
+  const next =
+    matchIdx >= 0
+      ? forecast.slice(matchIdx + 1).find((s) => s.cycleType !== activeType) ??
+        forecast[matchIdx + 1]
+      : forecast.find((s) => s.cycleType !== activeType);
+  if (!next) return null;
+  return labels[next.cycleType] ?? next.cycleType;
+}
+
+describe("ProjectOverview suite envisagée from trajectory", () => {
+  it("uses next forecast step after CADRAGE — not illustrative UX", () => {
+    const label = nextEnvisaged("CADRAGE", [
+      { order: 1, cycleType: "CADRAGE" },
+      { order: 2, cycleType: "CONCEPTION_FONCTIONNELLE" },
+      { order: 3, cycleType: "UX_UI" },
+    ]);
+    expect(label).toBe("Conception fonctionnelle");
+    expect(label).not.toBe("Conception UX");
+  });
+
+  it("returns null when no future step exists", () => {
+    expect(
+      nextEnvisaged("CADRAGE", [{ order: 1, cycleType: "CADRAGE" }]),
+    ).toBeNull();
+  });
+
+  it("returns null without active cycle or forecast", () => {
+    expect(nextEnvisaged(null, [{ order: 1, cycleType: "CADRAGE" }])).toBeNull();
+    expect(nextEnvisaged("CADRAGE", null)).toBeNull();
+  });
+});

```

### Part 2 — TrajectoryBoard / page / measure / as-built / delivery-history

```email
From 09a935bc71a3ab77eb063e9425b6f07ca1162417 Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 11:13:12 +0100
Subject: [PATCH] fix(next): align Ensemble 07 to Figma Page 10 experiment
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge 11 Projet/Trajectoire states to Page 10 geometry and structure: shared shell rhythm, forecast-based suite envisagée, Acquis/À clarifier panels, cycle markers, and proven 09.10 analyzing fixture.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index 8b5e0d2d..616d164d 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,9 +1,9 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

-**Statut:** Cycle 8 final — Figma→Runtime qualifié · candidat local figé · déployé RECETTE · NO RELEASE
-**Base Git figée RECETTE antérieure:** `c500df9ce58575783bcb842bf83658e1837990a3` · tree `3794e3443906e144460e3f00ba1e82bb3504fdd3`
+**Statut:** Page 10 experiment — 11/11 F2 critiques PASS · candidat local · RECETTE · NO RELEASE
+**Base Git figée RECETTE antérieure:** `ce03f5a7c6657f8bb924386b24355d37011833de` · tree `bd9077d5a1663ab9bdf0cbe326f8cbc210c1dabe`
 **Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery`
-**Date:** 2026-11-21 (Cycle 8 final — layout F2 + CKI éditorial + finalité cycle + SAS06 assets)
+**Date:** 2026-11-21 (Page 10 Figma `1069:100` · methodo v1.1 `a4516496`)

 ## Architecture retenue

@@ -32,7 +32,8 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif co
 21. **Layout Figma desktop** : `data-project-figma-layout` (padding 0/38) · header projet 70 px · hero natif 37 px · séparateur · panneaux à y≈287.
 22. **Finalité cycle** : `cycle-objective-display.ts` — instructions OPEN non affichées / non persistées comme finalité métier.
 23. **SAS06** : modal 702×726 + SVG Figma sous `web/public/figma/sas06/`.
-24. **Preuves F2** : `.tmp-sfia-review/ensemble07-dip-cycle8-final/`.
+24. **Preuves F2** : `.tmp-sfia-review/ensemble07-dip-cycle8-final/` (cycle 8) ; Page 10 `.tmp-sfia-review/ensemble07-page10-experiment/`.
+25. **Page 10** : shell instance partagé · Acquis/À clarifier toujours rendus · suite envisagée = forecast (pas copy Figma) · markers SVG actif/envisagé/clôturé · 09.10 via `STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1`.

 ## Persistance

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 367367cc..a057d417 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-PAGE10-EXPERIMENT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — Page 10 Figma expérimentation → Runtime → RECETTE |
+| Type | EVOL / UX / QA / DEPLOY · **NO RELEASE** · Gate C OPEN |
+| Parent | `ce03f5a7…` / tree `bd9077d5…` |
+| Methodo | v1.1 `@ a4516496` blob `3efe8807` (docs branch, non mergée main) |
+| Figma | Page 10 `1069:100` · 11 frames · shell instance `1073:2` |
+| Preuves | `.tmp-sfia-review/ensemble07-page10-experiment/` |
+| F2 critiques | **40/40 PASS** (Δ0) · 09.10 analyzing **exercé** (HOLD DEV) |
+| UX | Acquis/À clarifier toujours présents · suite envisagée = forecast · markers SVG |
+| Tests | unit 34 PASS · PG E07 15 PASS · tsc PASS · build PASS |
+| RECETTE | bascule LaunchAgent `ml4d-ux004` (voir handoff) |
+| Push projet | **NONE** |
+| Verdict | **ENSEMBLE 07 — FIGMA PAGE 10 / RUNTIME ALIGNED — 11/11 VERIFIED — RECETTE DEPLOYED — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8-FINAL

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts b/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
index ed3ccda0..b3e959ed 100644
--- a/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
+++ b/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
@@ -8,7 +8,11 @@ import { createHash } from "crypto";
 import { spawnSync } from "child_process";

 const ROOT = resolve(process.cwd(), "../../..");
-const OUT = resolve(ROOT, ".tmp-sfia-review/ensemble07-dip-cycle8-final");
+const OUT = resolve(
+  ROOT,
+  process.env.E07_MEASURE_OUT?.replace(/^.*\.tmp-sfia-review\//, ".tmp-sfia-review/") ||
+    ".tmp-sfia-review/ensemble07-page10-experiment",
+);
 mkdirSync(resolve(OUT, "runtime"), { recursive: true });
 const urlsPath = "/tmp/sfia-e07-shot-urls.json";

@@ -118,6 +122,7 @@ async function main() {
     '[data-testid="trajectory-hero-sep"]',
   ]);
   await visit("09.10", urls.urls.traj10, '[data-testid="trajectory-board"]', [
+    '[data-testid="trajectory-qualification-progress"]',
     '[data-testid="trajectory-analyzing"]',
     '[data-testid="trajectory-hero"]',
   ]);
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 4dd1389e..eebdb16b 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -2778,6 +2778,11 @@ export default function ProjectPage() {
             projectId={params.projectId}
             pilotage={pilotageProjection}
             initialQualification={initialQualification}
+            knowledge={
+              knowledge
+                ? { acquis: knowledge.acquis, openPoints: knowledge.openPoints }
+                : null
+            }
             onOpenTravail={() => selectSurface("travail")}
           />
           {/* E07 — no Pilotage (diagnostic) panel on Trajectoire Figma surfaces. */}
diff --git a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
index 8252474e..e41a4af8 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
@@ -41,10 +41,72 @@ function CkiShortcut(props: { onOpen: () => void }) {
   );
 }

+type TrajectoryKnowledge = {
+  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
+  openPoints: Array<{ id: string; statement: string; status: string }>;
+};
+
+/** Page 10 — active cycle: concentric ring + focal point (not a bullet). */
+function CycleMarkerActive() {
+  return (
+    <span
+      className="absolute"
+      style={{ right: 14, top: 14, width: 33, height: 33 }}
+      aria-hidden
+      data-testid="trajectory-marker-active"
+    >
+      <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
+        <circle cx="16.5" cy="16.5" r="15" stroke="#7477ed" strokeWidth="2" />
+        <circle cx="16.5" cy="16.5" r="5.5" fill="#7477ed" />
+      </svg>
+    </span>
+  );
+}
+
+/** Page 10 — envisaged step: empty ring. */
+function CycleMarkerEnvisaged() {
+  return (
+    <span
+      className="absolute"
+      style={{ right: 14, top: 14, width: 32, height: 32 }}
+      aria-hidden
+      data-testid="trajectory-marker-envisaged"
+    >
+      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
+        <circle cx="16" cy="16" r="14.5" stroke="#7787a4" strokeWidth="1.5" />
+      </svg>
+    </span>
+  );
+}
+
+/** Page 10 — closed cycle: green emblem + check. */
+function CycleMarkerClosed() {
+  return (
+    <span
+      className="absolute"
+      style={{ right: 14, top: 14, width: 32, height: 32 }}
+      aria-hidden
+      data-testid="trajectory-marker-closed"
+    >
+      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
+        <circle cx="16" cy="16" r="15" fill="#17382f" stroke="#6cdbba" strokeWidth="1.5" />
+        <path
+          d="M10 16.5L14 20.5L22 12"
+          stroke="#6cdbba"
+          strokeWidth="2"
+          strokeLinecap="round"
+          strokeLinejoin="round"
+        />
+      </svg>
+    </span>
+  );
+}
+
 export function TrajectoryBoard(props: {
   projectId: string;
   pilotage: PilotageProjection | null;
   initialQualification: InitialQualificationProjection | null;
+  knowledge?: TrajectoryKnowledge | null;
   onOpenTravail: () => void;
 }) {
   const [detail, setDetail] = useState<DetailView>({ kind: "main" });
@@ -246,6 +308,7 @@ export function TrajectoryBoard(props: {
           cycle={cycle ?? null}
           forecast={forecast}
           method={props.pilotage?.method ?? null}
+          knowledge={props.knowledge ?? null}
           onOpenBilan={(cycleId) => setDetail({ kind: "bilan", cycleId })}
           onOpenFuture={(cycleType, rationale) =>
             setDetail({ kind: "future", cycleType, rationale })
@@ -270,21 +333,26 @@ function AnalyzingCard(props: { uiStep: number; onOpenTravail: () => void }) {
   const step = Math.min(3, Math.max(1, props.uiStep));
   return (
     <section
-      className="fig-panel border border-[#7477ed44] space-y-4 py-10 text-center mx-auto"
+      className="fig-panel space-y-3 py-10 text-center mx-auto"
       data-testid="trajectory-qualification-progress"
+      data-analyzing="1"
       data-step={step}
-      style={{ width: "100%", maxWidth: 1358, minHeight: 502, background: "#151D2C" }}
+      style={{
+        width: "100%",
+        maxWidth: 1358,
+        minHeight: 502,
+        background: "#151D2C",
+        borderColor: "#2B3850",
+      }}
     >
+      <span className="sr-only" data-testid="trajectory-analyzing" />
+      {/* Page 10 09.10 — same empty-panel shell as 09.07; copy = qualification en cours. */}
       <div
-        className="mx-auto flex items-center justify-center rounded-full"
-        style={{
-          width: 92,
-          height: 92,
-          background: "radial-gradient(circle, #7477ed55 0%, #7477ed11 70%)",
-        }}
+        className="mx-auto flex items-center justify-center rounded-full border border-[#2b3850]"
+        style={{ width: 92, height: 92, background: "#0c101a" }}
         aria-hidden
       >
-        <span className="text-3xl font-semibold text-[#a8adff]">✦</span>
+        <span className="text-3xl text-[#a3b0c7]">○</span>
       </div>
       <p className="fig-kicker text-[#7477ed]">QUALIFICATION EN COURS</p>
       <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
@@ -294,27 +362,32 @@ function AnalyzingCard(props: { uiStep: number; onOpenTravail: () => void }) {
         Elle confronte les éléments du SAS aux cycles pertinents pour proposer une progression
         adaptée.
       </p>
-      <div className="mx-auto h-px max-w-md" style={{ background: "#2B3850", width: 806 }} />
-      <ol className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#a3b0c7] pt-2">
-        <li className={step >= 1 ? "text-[#6CDBBA]" : ""}>
+      <div className="mx-auto h-px" style={{ background: "#2B3850", width: 806 }} />
+      <p className="text-sm text-[#a3b0c7] pt-1" data-testid="trajectory-analyzing-status-line">
+        <span className={step >= 1 ? "text-[#6CDBBA]" : ""}>
           {step > 1 ? "✓" : "●"} Projet créé
-        </li>
-        <li className={step === 2 ? "text-[#f3f5ff]" : step > 2 ? "text-[#6CDBBA]" : ""}>
-          {step > 2 ? "✓" : step === 2 ? "●" : "○"} Identification des cycles · {Math.min(step, 2)}{" "}
-          / 3
-        </li>
-        <li className={step >= 3 ? "text-[#f3f5ff]" : ""}>
+        </span>
+        <span className="mx-3"> </span>
+        <span className={step === 2 ? "text-[#f3f5ff]" : step > 2 ? "text-[#6CDBBA]" : ""}>
+          {step > 2 ? "✓" : step === 2 ? "●" : "○"} Identification des cycles · {Math.min(step, 2)} / 3
+        </span>
+        <span className="mx-3"> </span>
+        <span className={step >= 3 ? "text-[#f3f5ff]" : ""}>
           {step >= 3 ? "●" : "○"} Réponse de Nora à venir
-        </li>
-      </ol>
+        </span>
+      </p>
       <button
         type="button"
         className="btn primary mt-4"
         onClick={props.onOpenTravail}
         style={{ minWidth: 552, minHeight: 47 }}
       >
-        Revenir au travail avec Nora ↗
+        Revenir à Travail ↗
       </button>
+      <p className="text-xs text-[#7787a4] max-w-2xl mx-auto pt-2">
+        L&apos;état s&apos;actualise ici dès que la qualification progresse. Aucun cycle n&apos;est
+        encore ouvert.
+      </p>
     </section>
   );
 }
@@ -431,6 +504,7 @@ function ParcoursPrincipal(props: {
   cycle: PilotageProjection["cycle"];
   forecast: ForecastStep[] | null;
   method: PilotageProjection["method"] | null;
+  knowledge?: TrajectoryKnowledge | null;
   onOpenBilan: (cycleId: string) => void;
   onOpenFuture: (cycleType: string, rationale?: string | null) => void;
   onOpenCki: () => void;
@@ -500,52 +574,78 @@ function ParcoursPrincipal(props: {

   const closedCount = props.closed.length;
   const activeCount = props.cycle ? 1 : 0;
+  const cycleCount = cards.length;
+  const acquisItems = (props.knowledge?.acquis ?? [])
+    .filter((a) => a.status === "ACTIVE" || a.status === "CONFIRMED" || !a.status)
+    .slice(0, 2);
+  const clarifierItems = (props.knowledge?.openPoints ?? [])
+    .filter((o) => o.status === "OPEN")
+    .slice(0, 2);
+  const acquisExtra = Math.max(
+    0,
+    (props.knowledge?.acquis ?? []).filter(
+      (a) => a.status === "ACTIVE" || a.status === "CONFIRMED" || !a.status,
+    ).length - acquisItems.length,
+  );
+  const clarifierExtra = Math.max(
+    0,
+    (props.knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length -
+      clarifierItems.length,
+  );

   return (
-    <div className="space-y-5" data-testid="trajectory-roadmap">
-      <section className="space-y-3">
-        <div className="flex flex-wrap items-end justify-between gap-2">
-          <div>
-            <p className="fig-kicker">PARCOURS DU PROJET</p>
-            <p className="text-xs text-[#7787a4] mt-1">
-              {activeCount} CYCLE ACTIF · {closedCount} CLÔTURÉ{closedCount > 1 ? "S" : ""}
-            </p>
-          </div>
+    <div className="flex flex-col gap-[15px]" data-testid="trajectory-roadmap">
+      <section
+        className="fig-panel relative overflow-hidden"
+        data-testid="trajectory-parcours-panel"
+        style={{
+          width: "100%",
+          maxWidth: 1358,
+          minHeight: 198,
+          padding: "15px 24px 16px",
+          background: "#151D2C",
+          borderColor: "#2B3850",
+        }}
+      >
+        <div className="flex flex-wrap items-start justify-between gap-2">
+          <p className="text-[13px] font-semibold text-[#f3f5ff]">Parcours du projet</p>
+          <p className="text-[13px] text-[#7787a4]" data-testid="trajectory-cycle-indicator">
+            {cycleCount} CYCLE{cycleCount > 1 ? "S" : ""}
+            {activeCount ? ` · ${activeCount} ACTIF` : ""}
+            {closedCount ? ` · ${closedCount} CLÔTURÉ${closedCount > 1 ? "S" : ""}` : ""}
+          </p>
         </div>

         {cards.length === 0 ? (
-          <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-no-active-cycle">
+          <p className="text-sm text-[#a3b0c7] mt-4" data-testid="trajectory-no-active-cycle">
             Aucun cycle actif — la trajectoire reste une proposition tant qu&apos;un GO n&apos;est
             pas exprimé.
           </p>
         ) : (
           <div
-            className="flex flex-nowrap items-stretch overflow-x-auto"
-            style={{ gap: 49 }}
+            className="relative mt-4 flex flex-nowrap items-stretch overflow-x-auto"
+            style={{ gap: 61 }}
             data-testid="trajectory-roadmap-cards"
           >
             {cards.map((card, idx) => (
-              <div key={card.key} className="flex flex-none items-stretch" style={{ gap: 16 }}>
+              <div key={card.key} className="relative flex flex-none items-stretch">
                 <article
-                  className="fig-panel relative space-y-2 overflow-hidden"
+                  className="fig-panel relative overflow-hidden"
                   style={{
                     width: 396,
+                    height: 128,
                     minHeight: 128,
-                    padding: "16px 18px",
-                    borderColor:
-                      card.status === "closed"
-                        ? "#6cdbba55"
-                        : card.status === "active"
-                          ? "#7477ed88"
-                          : "#2b3850",
+                    padding: "14px 18px 16px",
+                    background: "#1b2639",
+                    borderColor: "#2b3850",
                     borderLeftWidth:
-                      card.status === "closed" ? 5 : card.status === "active" ? 7 : 4,
+                      card.status === "closed" ? 5 : card.status === "active" ? 7 : 1,
                     borderLeftColor:
                       card.status === "closed"
                         ? "#6cdbba"
                         : card.status === "active"
                           ? "#7477ed"
-                          : "#3a4660",
+                          : "#2b3850",
                   }}
                   data-testid={
                     card.status === "active"
@@ -555,44 +655,39 @@ function ParcoursPrincipal(props: {
                         : "trajectory-future-cycle"
                   }
                 >
-                  <div className="flex items-start justify-between gap-2">
-                    <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
-                      {card.order} {card.title}
-                    </p>
-                    <span
-                      className="text-xs font-semibold whitespace-nowrap"
-                      style={{
-                        color:
-                          card.status === "closed"
-                            ? "#6cdbba"
-                            : card.status === "active"
-                              ? "#a8adff"
-                              : "#a3b0c7",
-                      }}
+                  {card.status === "active" ? <CycleMarkerActive /> : null}
+                  {card.status === "envisioned" ? <CycleMarkerEnvisaged /> : null}
+                  {card.status === "closed" ? <CycleMarkerClosed /> : null}
+                  <div className="flex flex-col gap-[5px] pr-10">
+                    <p
+                      className="text-[12px] font-semibold text-[#7477ed]"
+                      data-testid="trajectory-cycle-order"
                     >
-                      {card.status === "closed"
-                        ? "✓ "
-                        : card.status === "active"
-                          ? "● "
-                          : "○ "}
-                      {card.statusLabel}
-                    </span>
+                      {card.order}
+                    </p>
+                    <p className="text-[19px] font-semibold leading-tight text-[#f3f5ff]">
+                      {card.title}
+                    </p>
+                  </div>
+                  <div className="absolute bottom-4 left-[18px] right-[18px] flex items-end justify-between gap-2">
+                    <p className="text-[13px] text-[#a3b0c7]">{card.statusLabel}</p>
+                    {card.onAction && card.actionLabel ? (
+                      <button
+                        type="button"
+                        className="text-[13px] font-semibold text-[#7477ed] hover:underline whitespace-nowrap"
+                        onClick={card.onAction}
+                      >
+                        {card.actionLabel}
+                      </button>
+                    ) : null}
                   </div>
-                  {card.subtitle ? (
-                    <p className="text-sm text-[#f3f5ff]">{card.subtitle}</p>
-                  ) : null}
-                  {card.onAction && card.actionLabel ? (
-                    <button
-                      type="button"
-                      className="text-sm font-semibold text-[#7477ed] hover:underline"
-                      onClick={card.onAction}
-                    >
-                      {card.actionLabel}
-                    </button>
-                  ) : null}
                 </article>
                 {idx < cards.length - 1 ? (
-                  <span className="self-center text-[#7787a4] text-2xl" aria-hidden>
+                  <span
+                    className="pointer-events-none absolute text-[#7787a4] text-2xl"
+                    style={{ right: -38, top: 54 }}
+                    aria-hidden
+                  >
                     →
                   </span>
                 ) : null}
@@ -600,61 +695,128 @@ function ParcoursPrincipal(props: {
             ))}
           </div>
         )}
-
-        {!props.cycle && closedCount > 0 ? (
-          <section
-            className="fig-panel space-y-3"
-            data-testid="trajectory-between-cycles"
-            style={{ minHeight: 286, background: "#151D2C", borderColor: "#2B3850" }}
-          >
-            <p className="fig-kicker text-[#7477ED]">AUCUN CYCLE ACTIF</p>
-            <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
-              Entre deux cycles
-            </h3>
-            <p className="text-sm text-[#a3b0c7]">
-              Le dernier cycle est clôturé. Une suite peut être envisagée ; son ouverture reste un
-              GO du Pilote.
-            </p>
-            <button type="button" className="btn primary" onClick={props.onOpenTravail}>
-              Reprendre avec Nora ↗
-            </button>
-          </section>
-        ) : null}
       </section>

-      {props.cycle ? (
+      {!props.cycle && closedCount > 0 ? (
         <section
           className="fig-panel space-y-3"
+          data-testid="trajectory-between-cycles"
+          style={{ minHeight: 286, background: "#151D2C", borderColor: "#2B3850" }}
+        >
+          <p className="fig-kicker text-[#7477ED]">AUCUN CYCLE ACTIF</p>
+          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">Entre deux cycles</h3>
+          <p className="text-sm text-[#a3b0c7]">
+            Le dernier cycle est clôturé. Une suite peut être envisagée ; son ouverture reste un GO
+            du Pilote.
+          </p>
+          <button type="button" className="btn primary" onClick={props.onOpenTravail}>
+            Reprendre avec Nora ↗
+          </button>
+        </section>
+      ) : null}
+
+      {props.cycle ? (
+        <section
+          className="fig-panel"
           data-testid="trajectory-cycle-actif-panel"
-          style={{ borderColor: "#7477ed44" }}
+          style={{
+            borderColor: "#7477ed44",
+            minHeight: 365,
+            padding: "18px 24px 20px",
+            background: "#151D2C",
+          }}
         >
           <p className="fig-kicker text-[#7477ed]">CYCLE ACTIF</p>
-          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
+          <h3 className="mt-1 text-[1.45rem] font-semibold text-[#f3f5ff]">
             {labelCycle(props.cycle.cycleType)}
           </h3>
           <p
-            className="text-sm text-[#a3b0c7]"
+            className="mt-2 text-sm text-[#a3b0c7]"
             data-testid="trajectory-cycle-objective"
           >
             {displayableCycleObjective(props.cycle.objective) ??
               CYCLE_OBJECTIVE_PENDING_LABEL}
           </p>
-          <div className="flex flex-wrap gap-4 pt-1">
-            <Link
-              href={`/projects/${props.projectId}?surface=journal`}
-              className="text-sm font-semibold text-[#7477ed] hover:underline"
+
+          {/* Page 10 — Acquis / À clarifier remain present even when empty (honest empty state). */}
+          <div
+            className="mt-4 grid"
+            style={{ gridTemplateColumns: "640fr 646fr", gap: 24 }}
+            data-testid="trajectory-cycle-knowledge-row"
+          >
+            <div
+              className="rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
+              style={{ minHeight: 157 }}
+              data-testid="trajectory-acquis"
             >
-              Consulter le Journal ↗
-            </Link>
-            <button
-              type="button"
-              className="text-sm font-semibold text-[#7477ed] hover:underline"
-              data-testid="trajectory-open-cki"
-              onClick={props.onOpenCki}
+              <p className="text-[14px] font-semibold text-[#f3f5ff]">Acquis identifiés</p>
+              {acquisItems.length === 0 ? (
+                <p className="mt-3 text-[13px] text-[#a3b0c7]" data-testid="trajectory-acquis-empty">
+                  Aucun acquis capitalisé pour ce cycle pour le moment.
+                </p>
+              ) : (
+                <ul className="mt-3 space-y-[6px]">
+                  {acquisItems.map((a) => (
+                    <li key={a.id} className="text-[13px] text-[#f3f5ff] truncate">
+                      {a.statement}
+                    </li>
+                  ))}
+                  {acquisExtra > 0 ? (
+                    <li className="text-[12px] text-[#a3b0c7]">+ {acquisExtra} autre{acquisExtra > 1 ? "s" : ""}</li>
+                  ) : null}
+                </ul>
+              )}
+              <Link
+                href={`/projects/${props.projectId}?surface=journal`}
+                className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
+              >
+                Consulter le Journal ↗
+              </Link>
+            </div>
+            <div
+              className="rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
+              style={{ minHeight: 157 }}
+              data-testid="trajectory-a-clarifier"
             >
-              Accès CKI et méthode
-            </button>
+              <p className="text-[14px] font-semibold text-[#f3f5ff]">À clarifier</p>
+              {clarifierItems.length === 0 ? (
+                <p
+                  className="mt-3 text-[13px] text-[#a3b0c7]"
+                  data-testid="trajectory-a-clarifier-empty"
+                >
+                  Aucun point ouvert à clarifier pour le moment.
+                </p>
+              ) : (
+                <ul className="mt-3 space-y-[6px]">
+                  {clarifierItems.map((o) => (
+                    <li key={o.id} className="text-[13px] text-[#f3f5ff] truncate">
+                      {o.statement}
+                    </li>
+                  ))}
+                  {clarifierExtra > 0 ? (
+                    <li className="text-[12px] text-[#a3b0c7]">
+                      + {clarifierExtra} autre{clarifierExtra > 1 ? "s" : ""}
+                    </li>
+                  ) : null}
+                </ul>
+              )}
+              <Link
+                href={`/projects/${props.projectId}?surface=journal`}
+                className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
+              >
+                Consulter le Journal ↗
+              </Link>
+            </div>
           </div>
+
+          <button
+            type="button"
+            className="mt-4 text-sm font-semibold text-[#7477ed] hover:underline"
+            data-testid="trajectory-open-cki"
+            onClick={props.onOpenCki}
+          >
+            Accès CKI et méthode
+          </button>
         </section>
       ) : null}


```

## 9. Tests

| Suite | Résultat |
|---|---|
| TypeScript `tsc` | PASS |
| Unitaires E07 + CKI + envisaged + durable | **34 PASS / 9 files** |
| PostgreSQL `ensemble07-initial-qualification` | **15 PASS** |
| Browser measure-13 (11 états + HOLD 09.10) | **PASS** — 09.10 `trajectory-analyzing` présent |
| Build production (`.next` clean) | **PASS** · BUILD_ID `hozYzI7kSbmBl8DsewZY7` |
| Nora LIVE | **NOT RUN** (hors scope) |
| Fake/Real | Fixtures déterministes DEV ; smoke REAL préservé RECETTE |

## 10. RECETTE (ENV-01)

| | |
|---|---|
| Déploiement | **OUI** |
| URL | http://127.0.0.1:3200 |
| SHA servi | `09a935bc71a3ab77eb063e9425b6f07ca1162417` |
| BUILD_ID | `hozYzI7kSbmBl8DsewZY7` (présent dans HTML login) |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` → WT `…-recette-build-09a935bc` · pid actif |
| Base | `sfia_next_recette_ml4` @ PostgreSQL `5434` |
| Backup | `~/.config/sfia-studio-next/recette/backups/ml4d-e07-20261121T101323Z-pre-09a935bc.sql.gz` |
| Rollback | `ROLLBACK-TO-ce03f5a7.sh` + plist `.09a935bc.pre-cutover.bak` |
| Smoke | login/portfolio **200** ; BUILD_ID cohérent |
| Equip'Campus | **intact** · 1 cycle ACTIVE CADRAGE unique |
| Nora LIVE métier | non |

Classe versioning : **NO RELEASE** (candidat technique RECETTE uniquement).

## 11. Capitalisation méthodologique (Page 09 → Page 10)

| Dimension | Avant page 09 | Après page 10 | Preuve |
|---|---|---|---|
| Structure native | rail+header séparés | shell INSTANCE AL `1073:2` | MCP / use_figma |
| Auto Layout | depth3 AL = 0 | depth3 AL = 19 | extractability.json |
| Composants | instances loose | shell + activity + cycle step | Figma |
| Tokens | absents / hardcodés | variables + paddings header | extraction |
| Mapping DOM | rectangles parents | descendants + markers + acquis | matrice §6 |
| Contrôles F2 | y drift historique 12–14 px | Δ0 critiques | f2-measures-13.json |
| Différences visuelles | bullets, suite illustrative, acquis absents | corrigés avant RECETTE | ce cycle |
| Couverture navigateur | 09.10 NOT PROVEN | 09.10 exercé (HOLD) | runtime 09.10 |

### Anomalies détectées par le nouveau protocole *avant* RECETTE

1. Suite envisagée illustrative « Conception UX » ≠ forecast Equip'Campus.
2. Markers cycle remplacés par bullets insuffisants.
3. Rubriques Acquis / À clarifier omises quand objectif vide.
4. 09.10 non reproductible sans HOLD DEV.
5. Rythme y panels hors cible sans tokens hero/sep.

### Limites résiduelles

- Frames top-level encore `NONE` (composition absolue).
- MCP code-gen absolu ; layoutMode via Plugin API.
- Angles CKI corpus ≠ labels courts Figma (arbitrage produit).
- SAS06 hors lot 11 = PARTIAL.
- Methodo v1.1 non mergée sur main.

### Recommandations pour Morris (ne pas adopter sans décision)

1. Exiger shell maître AL + gaps critiques dans toute page source avant delivery.
2. Imposer matrice Figma→DOM avec assertions descendants (pas seulement cadres).
3. Gate 09.xx : fixture déterministe obligatoire pour chaque état (dont HOLD documenté).
4. Conserver preuve comparative page témoin vs page structurée dans le Review Pack.
5. Ne pas promouvoir methodo v1.1 globale avant UAT Morris de ce cycle.

**La nouvelle méthode fonctionne-t-elle mieux ?** Oui sur extractibilité AL/shell et sur détection d'écarts structurels avant RECETTE — preuves §4–§7. Pas de conclusion ADOPTED.

## 12. Réserves

| # | Réserve | Sortie |
|---|---|---|
| R1 | SAS06 modal open PARTIAL | UAT optionnel |
| R2 | Labels angles CKI ≠ Figma courts | arbitrage produit |
| R3 | 09.10 nécessite HOLD=1 en DEV | documenté ; absent RECETTE |
| R4 | Methodo v1.1 hors main | décision docs Morris |
| R5 | Acceptation UX = UAT Morris | obligatoire |

## 13. Handoff L3 (ce cycle)

| | |
|---|---|
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Worktree | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` |
| Parent distant | `ac21bebe95f2138534addb23378c9b04ff239fb8` |
| SHA L3 | *(renseigné après publish)* |
| Blob | *(renseigné après publish)* |

## 14. Verdict

**`ENSEMBLE 07 — FIGMA PAGE 10 / RUNTIME ALIGNED — 11/11 VERIFIED — RECETTE DEPLOYED — MORRIS UAT REQUIRED`**

## Annexe — Instruction ChatGPT

Relire ce pack FULL depuis Git (`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`) : vérifier GO Page 10, preuve comparative 09/10, F2 40/40, exercice 09.10, candidat `09a935bc` / BUILD `hozYzI7kSbmBl8DsewZY7`, backup/rollback, Equip'Campus intact, capitalisation méthode sans ADOPTED, puis émettre le verdict de revue indépendant pour Morris.
