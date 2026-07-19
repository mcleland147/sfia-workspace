# SFIA Review Pack — Cycle 8+9 Geometry Polish P0 (polish-2)

- **Date / heure :** 2026-07-19 10:55:02 CEST (+0200)
- **Cycle principal :** 8 — Delivery / implémentation corrective
- **Sous-cycle :** 9 — QA / validation visuelle
- **Profil :** Standard
- **Typologie :** EVOL corrective
- **Branche :** `project/sfia-studio-delivery-p0-implementation`
- **HEAD :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9` (inchangé — **aucun commit projet**)
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Push projet / PR / merge :** aucun
- **Décision Morris consommée :** GO polish géométrique transversal runtime ↔ Figma

## 1. État Git initial et final

### Initial / Final (identique sur HEAD)
- Branche : `project/sfia-studio-delivery-p0-implementation`
- HEAD = origin/main = `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- Aucun staged ; aucun commit projet
- Working tree : `projects/sfia-studio/app/**` + `.tmp-sfia-review/**` uniquement

## 2. Sources Git consultées (origin/main)

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/14-ux-ui-contract.md`
- `projects/sfia-studio/15-ux-ui-flows-and-screens.md`
- `projects/sfia-studio/16-ux-ui-decision-pack.md`
- `projects/sfia-studio/18-technical-architecture.md`
- `projects/sfia-studio/19-technical-architecture-decision-pack.md`
- Handoff canonique : `sfia-review-handoff/latest-chatgpt-review.md` (polish-1)

## 3. Références Figma

- fileKey : `lrjA1WEyRpL05vKR8k29LO`
- Frames : P0-00C `19:2` · P0-01C `22:2` · P0-02C `22:133` · P0-03C `22:270`
- Dimensions : **1440 × 1024**
- Outils : MCP `get_metadata` + `get_design_context` (P0-01C)
- Mesures détaillées : `.tmp-sfia-review/geometry/figma-measures.md`
- **Figma non modifié**

### Mesures Figma structurantes (flush P0-01C)

| Zone | X | Y | W | H |
|---|---:|---:|---:|---:|
| Rail | 0 | 0 | 64 | 1024 |
| Topbar | 64 | 0 | 1376 | 116 |
| Hero | 92 | 148 | 972 | 152 |
| Metrics (×3) | 92/328/564 | 310 | 220 | 122 |
| Metric wide | 800 | 310 | 264 | 122 |
| Portfolio | 92 | 456 | 626 | 510 |
| Gates | 742 | 456 | 322 | 244 |
| Activity | 742 | 718 | 322 | 248 |
| Copilot | 1100 | 116 | 340 | 908 |
| Gap canvas→copilot | — | — | **36** | — |

### Floating P0-00C

| Zone | X | Y | W | H |
|---|---:|---:|---:|---:|
| Pad | 18 | 18 | — | — |
| Rail | 18 | 18 | 64 | 988 |
| Workspace | 100 | 18 | 968 | 988 |
| Copilot | 1088 | 18 | 334 | 988 |
| Gap ws→copilot | — | — | **20** | — |
| Hero | 24* | 166* | 920 | 132 |
| Form / Preview | 24* / 646* | 322* | 600 / 298 | 638 |

## 4. Diagnostic géométrique (avant polish-2)

Mesures Playwright 1440×1024 DPR1 — voir `geometry/runtime-before.json`.

| Élément | Figma | Runtime polish-1 | Delta px | Delta % | Cause | Correction |
|---|---:|---:|---:|---:|---|---|
| Canvas flush W | 972 | 1008 | +36 | +3.7% | `1fr` + padding 24px | colonnes fixes 972+36+340 |
| Hero synthèse W×H | 972×152 | 984×183 | +12 / +31 | +8% / +20% | padding + min-height content | height fixe 152 + line-height |
| Copilot inner W | 340 | 316 | −24 | −7% | shell padding 16/8 | padding shell 0 |
| Metrics Y | 310 | 349 | +39 | — | hero trop haut | hero 152 + gap 10 |
| Page synthèse H | 1024 | 1051 | +27 | — | contenu débordant | overflow hidden + heights |
| Hero 00C H | 132 | 172 | +40 | +30% | padding + min-height | height 132 fixe |
| Copilot 00C X | 1088 | 1086 | −2 | — | gap uniforme 18 | gutters 18/20 |

## 5. Corrections transversales

### Tokens (`styles/tokens.css`)
- Ajout tokens géométriques : canvas 972, gap copilot 36, top canvas 32, hero heights, metric widths, portfolio/side/work/inspector/evidence/decision widths, col-gap 24, tab-gap 64, underline 3×78
- line-height body/meta ramenés à 1.4 ; `--sfia-line-hero: 1.22`

### Shell (`styles/shell.module.css`)
- Flush : grille `972 + 36 + 340`, canvas offset 92, hauteur page/body 1024/908, **plus de padding horizontal canvas/copilot**
- Floating : colonnes explicites `64 | 18 | 968 | 20 | 334`, hauteur 1024, overflow hidden
- workspaceInner padding `0 24px 24px`

### Navigation (`topbar.module.css`)
- Tab gap flush → 64px
- Underline restauré à **3px** (Figma)

### Copilot (`copilot-panel.module.css` + JSX mineur)
- Header flush 116 / floating 88
- Avatar flush 46 ; body padding 20 ; watch items H 46
- Composer floating 116 / flush 110
- Badge L0 positionné bas-droite (flush) via wrapper JSX

## 6. Corrections par écran

### P0-01C Synthèse
- Hero 152×972 @ y=148 ; metrics grid `220×3 + 264` gap 16 @ y=310 ; lower 626+322 gap 24 @ y=456
- Gates 244 / Activity 248 ; side gap 18

### P0-02C Cycle
- Hero 138 ; stepper 92 ; lower 632+316 gap 24 @ y=418 ; cards H 548

### P0-03C Décision
- Hero 128 ; content 580+368 gap 24 @ y=302 ; panels H 664 ; options H 106

### P0-00C Nouvelle demande
- Hero 132 ; form/preview 600+298 gap 22 H 638 ; floating copilot X 1088

## 7. Runtime après (Playwright)

```json
{
  "synthese": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "canvas": {
      "x": 92,
      "y": 116,
      "w": 972,
      "h": 908
    },
    "copilot": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "panel": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "hero": {
      "x": 92,
      "y": 148,
      "w": 972,
      "h": 152
    },
    "metrics": {
      "x": 92,
      "y": 310,
      "w": 972,
      "h": 122
    },
    "lower": {
      "x": 92,
      "y": 456,
      "w": 972,
      "h": 510
    },
    "scrollH": 1024
  },
  "nouvelle": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "canvas": {
      "x": 101,
      "y": 161,
      "w": 966,
      "h": 844
    },
    "copilot": {
      "x": 1088,
      "y": 18,
      "w": 334,
      "h": 988
    },
    "panel": {
      "x": 1089,
      "y": 19,
      "w": 332,
      "h": 986
    },
    "hero": {
      "x": 125,
      "y": 185,
      "w": 918,
      "h": 132
    },
    "metrics": null,
    "lower": {
      "x": 125,
      "y": 341,
      "w": 918,
      "h": 638
    },
    "scrollH": 1024
  },
  "cycle": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "canvas": {
      "x": 92,
      "y": 116,
      "w": 972,
      "h": 908
    },
    "copilot": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "panel": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "hero": {
      "x": 92,
      "y": 148,
      "w": 972,
      "h": 138
    },
    "metrics": null,
    "lower": {
      "x": 92,
      "y": 418,
      "w": 972,
      "h": 548
    },
    "scrollH": 1024
  },
  "decision": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "canvas": {
      "x": 92,
      "y": 116,
      "w": 972,
      "h": 908
    },
    "copilot": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "panel": {
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "hero": {
      "x": 92,
      "y": 148,
      "w": 972,
      "h": 128
    },
    "metrics": null,
    "lower": {
      "x": 92,
      "y": 302,
      "w": 972,
      "h": 664
    },
    "scrollH": 1024
  }
}
```

### Deltas finaux vs Figma (principaux)

| Zone | Figma | Polish-2 | Delta | Verdict |
|---|---:|---:|---:|---|
| Canvas W | 972 | 972 | 0 | CONFORME |
| Copilot flush | 340@1100 | 340@1100 | 0 | CONFORME |
| Hero synthèse | 972×152@148 | 972×152@148 | 0 | CONFORME |
| Metrics Y | 310 | 310 | 0 | CONFORME |
| Lower Y | 456 | 456 | 0 | CONFORME |
| Cycle lower Y | 418 | 418 | 0 | CONFORME |
| Decision content Y | 302 | 302 | 0 | CONFORME |
| Copilot 00C X | 1088 | 1088 | 0 | CONFORME |
| Hero 00C H | 132 | 132 | 0 | CONFORME |
| Hero 00C W | 920 | 918 | −2 | ÉCART MINEUR JUSTIFIÉ (border workspace) |
| Scroll | 1024 | 1024 | 0 | CONFORME |

## 8. Tests

| Suite | Résultat |
|---|---|
| `npm run lint` | ✔ No ESLint warnings or errors |
| `npm run typecheck` | ✔ |
| `npm test` (Vitest) | ✔ 9/9 |
| `npm run build` | ✔ |
| `npm run test:e2e` | ✔ 10 passed / 4 skipped (polish-1 gated) |
| Viewport | 1440×1024 · DPR 1 |
| Zoom | 100 % (référence) |

## 9. Captures

| Série | Chemin |
|---|---|
| Avant (runtime initial) | `.tmp-sfia-review/screenshots/before/` |
| Polish-1 | **écrasé** par e2e avant gating — voir README dans `screenshots/polish/` ; preuves textuelles handoff `bfb30c0` |
| Polish-2 | `.tmp-sfia-review/screenshots/polish-2/p0-0{0..3}c-*-polish-2.png` |

## 10. Accessibilité

- Contraste muted conservé (polish-1)
- Focus visible inchangé
- Tab order inchangé
- Reduced motion conservé
- Typo Figma 10px gates timing conservée (méta)
- **Verdict max :** a11y smoke conforme (axe-core critique OK)

## 11. Écarts résiduels

1. Hero 00C largeur 918 vs 920 (−2 px, border box) — justifié
2. Copilot floating panel inner 332 vs 334 (−2, border) — justifié
3. Captures polish-1 binaires non récupérées — documenté ; `before/` + mesures + handoff précédent
4. Rail flush soft-active (choix polish-1) ≠ fill solide Figma — inchangé justifié (navigation dual-signal)
5. Non pixel-perfect micro-typo / ombres

Aucun écart majeur.

## 12. Garde-fous

- Pas de `transform: scale`
- Pas de dépendance ajoutée
- Pas de route / fixture / Figma / docs 01–19
- Pas de commit / push / PR / merge projet
- JSX limité (Copilot pill wrapper + Synthese panel class names)

## 13. Décisions Morris requises

- Validation visuelle finale runtime
- GO commit / push / PR / merge projet
- GO cleanup

## 14. Verdict

**GEOMETRY POLISH COMPLETE — READY FOR MORRIS FINAL VISUAL REVIEW**

---

## Annexe A — Contenu des fichiers modifiés

### `styles/tokens.css`

```css
/**
 * SFIA Studio design tokens — extracted from Figma fileKey lrjA1WEyRpL05vKR8k29LO
 * get_variable_defs returned empty; hex values documented from get_design_context.
 */

:root {
  /* Flush palette (P0-01/02/03 — primary) */
  --sfia-bg: #f6f9ff;
  --sfia-ink: #141c30;
  --sfia-blue: #3863f5;
  --sfia-purple: #7a4df5;
  --sfia-green: #21c28a;
  --sfia-orange: #faa629;
  /* Secondary text: darkened slightly vs Figma #636e85 for WCAG AA readability on white */
  --sfia-muted: #51607a;
  --sfia-border: #e0e5f5;
  --sfia-border-soft: #e6eaf2;
  --sfia-navy: #0f172e;
  --sfia-pink: #f25794;
  --sfia-blue-soft: #edf2ff;
  --sfia-purple-soft: #f5ebff;
  --sfia-surface: #fbfcff;
  --sfia-hero-synthese: #141f47;
  --sfia-hero-cycle: #121f4a;
  --sfia-hero-decision: #121a38;

  /* Floating palette (P0-00C variants) */
  --sfia-bg-00c: #f6f9fe;
  --sfia-ink-00c: #131729;
  --sfia-blue-00c: #2e6bf2;
  --sfia-purple-00c: #8c47f2;
  --sfia-green-00c: #14b87a;
  --sfia-orange-00c: #ffad2e;
  /* Secondary text P0-00C: darkened slightly vs Figma #6e7894 */
  --sfia-muted-00c: #5a657c;
  --sfia-border-00c: #e3e8f5;
  --sfia-blue-soft-00c: #e8f2ff;
  --sfia-purple-soft-00c: #f5edff;
  --sfia-green-soft-00c: #e5faf2;
  --sfia-orange-soft-00c: #fff7e0;
  --sfia-accent-pink-00c: #f552a3;

  /* Brand accent gradient */
  --sfia-gradient-brand-start: #5b5ce2;
  --sfia-gradient-brand-mid: #8b5cf6;
  --sfia-gradient-brand-end: #06b6d4;

  /* Shadows (Figma) */
  --sfia-shadow-sm: 0 6px 9px rgba(43, 56, 115, 0.08);
  --sfia-shadow-md: 0 8px 12px rgba(23, 37, 84, 0.1);
  --sfia-shadow-lg: 0 8px 24px rgba(36, 46, 89, 0.08);
  --sfia-shadow-xl: 0 10px 14px rgba(43, 56, 115, 0.12);
  --sfia-shadow-panel: 0 8px 24px rgba(23, 37, 84, 0.1);
  --sfia-shadow-hero: 0 12px 26px rgba(36, 46, 89, 0.18);
  --sfia-shadow-workspace: 0 10px 28px rgba(36, 46, 89, 0.08);

  /* Layout (1440×1024 reference — Figma P0-01C/02C/03C/00C) */
  --sfia-rail-width: 64px;
  --sfia-topbar-height: 116px;
  --sfia-copilot-width-flush: 340px;
  --sfia-copilot-width-floating: 334px;
  --sfia-canvas-offset-flush: 92px;
  --sfia-canvas-width-flush: 972px;
  --sfia-copilot-gap-flush: 36px;
  --sfia-canvas-top-flush: 32px;
  --sfia-copilot-height-flush: 908px;
  --sfia-workspace-width-floating: 968px;
  --sfia-floating-pad: 18px;
  --sfia-floating-gap-rail: 18px;
  --sfia-floating-gap-copilot: 20px;
  --sfia-brand-accent-left: 84px;
  --sfia-brand-accent-width: 4px;
  --sfia-brand-accent-height: 150px;
  --sfia-brand-accent-top: 120px;

  /* Content geometry (flush) */
  --sfia-hero-h-synthese: 152px;
  --sfia-hero-h-cycle: 138px;
  --sfia-hero-h-decision: 128px;
  --sfia-hero-h-demande: 132px;
  --sfia-metric-w: 220px;
  --sfia-metric-w-wide: 264px;
  --sfia-metric-h: 122px;
  --sfia-metric-gap: 16px;
  --sfia-portfolio-w: 626px;
  --sfia-side-panel-w: 322px;
  --sfia-work-w: 632px;
  --sfia-inspector-w: 316px;
  --sfia-evidence-w: 580px;
  --sfia-decision-w: 368px;
  --sfia-col-gap: 24px;
  --sfia-stack-gap-sm: 10px;
  --sfia-stack-gap-md: 16px;
  --sfia-stack-gap-lg: 24px;
  --sfia-side-stack-gap: 18px;
  --sfia-tab-gap-flush: 64px;
  --sfia-tab-underline-h: 3px;
  --sfia-tab-underline-w: 78px;

  /* Typography */
  --sfia-font: var(--font-inter, "Inter", system-ui, sans-serif);
  --sfia-line-meta: 1.4;
  --sfia-line-body: 1.4;
  --sfia-line-hero: 1.22;
  --sfia-meta-size: 12px;
  --sfia-meta-size-sm: 11px;
  --sfia-space-xs: 8px;
  --sfia-space-sm: 12px;
  --sfia-space-md: 16px;
  --sfia-space-lg: 20px;
  --sfia-space-xl: 24px;
  --sfia-space-2xl: 28px;
  --sfia-radius-sm: 12px;
  --sfia-radius-md: 16px;
  --sfia-radius-lg: 20px;
  --sfia-radius-xl: 24px;
}

```

### `styles/shell.module.css`

```css
.page {
  min-height: 1024px;
  min-width: 1440px;
  font-family: var(--sfia-font);
  position: relative;
}

.pageFloating {
  composes: page;
  background: var(--sfia-bg-00c);
  padding: var(--sfia-floating-pad);
  display: grid;
  /* Explicit gutters: rail→ws 18, ws→copilot 20 (Figma P0-00C) */
  grid-template-columns:
    var(--sfia-rail-width)
    var(--sfia-floating-gap-rail)
    var(--sfia-workspace-width-floating)
    var(--sfia-floating-gap-copilot)
    var(--sfia-copilot-width-floating);
  grid-template-rows: 988px;
  gap: 0;
  align-items: start;
  box-sizing: border-box;
  width: 1440px;
  height: 1024px;
  overflow: hidden;
}

.pageFlush {
  composes: page;
  background: var(--sfia-bg);
  display: grid;
  grid-template-columns: var(--sfia-rail-width) 1fr;
  grid-template-rows: 1024px;
  height: 1024px;
  min-height: 1024px;
  width: 1440px;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.brandAccent {
  position: absolute;
  left: var(--sfia-brand-accent-left);
  top: var(--sfia-brand-accent-top);
  width: var(--sfia-brand-accent-width);
  height: var(--sfia-brand-accent-height);
  border-radius: 2px;
  background: linear-gradient(
    180deg,
    var(--sfia-gradient-brand-start) 10%,
    var(--sfia-gradient-brand-mid) 60%,
    var(--sfia-gradient-brand-end) 110%
  );
  z-index: 10;
  pointer-events: none;
}

.railFloating {
  grid-column: 1;
  width: var(--sfia-rail-width);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 22px;
  box-shadow: var(--sfia-shadow-lg);
  position: relative;
  box-sizing: border-box;
}

.railFlush {
  grid-row: 1 / -1;
  width: var(--sfia-rail-width);
  background: #fff;
  border-right: 1px solid var(--sfia-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 0;
  gap: 12px;
}

.mainFlush {
  display: flex;
  flex-direction: column;
  height: 1024px;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}

.bodyFlush {
  display: grid;
  grid-template-columns: var(--sfia-canvas-width-flush) var(--sfia-copilot-width-flush);
  column-gap: var(--sfia-copilot-gap-flush);
  padding-left: calc(var(--sfia-canvas-offset-flush) - var(--sfia-rail-width));
  padding-right: 0;
  flex: 1;
  height: var(--sfia-copilot-height-flush);
  min-height: 0;
  align-items: start;
  box-sizing: border-box;
}

.canvasFlush {
  padding: var(--sfia-canvas-top-flush) 0 0;
  width: var(--sfia-canvas-width-flush);
  min-width: 0;
  height: var(--sfia-copilot-height-flush);
  overflow: hidden;
  box-sizing: border-box;
}

.copilotFlush {
  padding: 0;
  margin-top: 0;
  width: var(--sfia-copilot-width-flush);
  height: var(--sfia-copilot-height-flush);
  align-self: start;
  box-sizing: border-box;
}

.workspaceFloating {
  grid-column: 3;
  width: var(--sfia-workspace-width-floating);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-workspace);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.copilotFloating {
  grid-column: 5;
  width: var(--sfia-copilot-width-floating);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.workspaceInner {
  flex: 1;
  overflow: hidden;
  padding: 0 24px 24px;
  box-sizing: border-box;
}

.workspaceTopbarFloating {
  height: 88px;
  padding: 18px 28px 0;
  border-bottom: 1px solid var(--sfia-border-00c);
  flex-shrink: 0;
}

.workspaceTabsFloating {
  height: 54px;
  padding: 0 28px;
  border-bottom: 1px solid var(--sfia-border-00c);
  display: flex;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
}

```

### `components/shell/topbar.module.css`

```css
.topbar {
  height: var(--sfia-topbar-height);
  padding: 17px 27px 0;
  border-bottom: 1px solid var(--sfia-border);
  background: #fff;
}

.topbarFloating {
  composes: topbar;
  height: 88px;
  padding: 18px 28px 0;
  border-bottom: 1px solid var(--sfia-border-00c);
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  color: var(--sfia-muted);
  text-transform: uppercase;
}

.eyebrowFloating {
  composes: eyebrow;
  color: var(--sfia-purple-00c);
  font-weight: 700;
}

.titleRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 6px;
  min-height: 42px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: var(--sfia-ink);
  margin: 0;
}

.titleFloating {
  composes: title;
  font-weight: 700;
  color: var(--sfia-ink-00c);
}

.pills {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

.tabs {
  display: flex;
  gap: var(--sfia-tab-gap-flush);
  margin-top: 14px;
  align-items: center;
}

.tab {
  font-size: 13px;
  font-weight: 500;
  color: var(--sfia-muted);
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: var(--sfia-tab-underline-h) solid transparent;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  font-family: var(--sfia-font);
  position: relative;
}

.tabActive {
  color: var(--sfia-blue);
  font-weight: 600;
  border-bottom-color: var(--sfia-blue);
}

.tabDisabled {
  composes: tab;
  opacity: 0.6;
  cursor: not-allowed;
}

.tabsFloating {
  display: flex;
  gap: 32px;
  align-items: center;
  height: 54px;
  padding: 0 28px;
  border-bottom: 1px solid var(--sfia-border-00c);
}

.tabFloating {
  font-size: 13px;
  font-weight: 500;
  color: var(--sfia-muted-00c);
  text-decoration: none;
}

.tabFloatingActive {
  composes: tabFloating;
  color: var(--sfia-blue-00c);
  font-weight: 600;
  position: relative;
}

.tabFloatingActive::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -16px;
  width: 72px;
  height: 3px;
  background: var(--sfia-blue-00c);
}

```

### `components/shell/copilot-panel.module.css`

```css
.panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.header {
  padding: 18px 20px;
  flex-shrink: 0;
  box-sizing: border-box;
}

.headerFlush {
  composes: header;
  background: var(--sfia-navy);
  border-radius: 14px 14px 0 0;
  color: #fff;
  height: 116px;
  min-height: 116px;
  max-height: 116px;
  padding: 20px;
}

.headerFloating {
  composes: header;
  border-bottom: 1px solid var(--sfia-border-00c);
  height: 88px;
  min-height: 88px;
  max-height: 88px;
  padding: 18px 20px;
  box-sizing: border-box;
}

.headerRow {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  min-height: 46px;
}

.levelPill {
  margin-left: auto;
  flex-shrink: 0;
}

.levelPillFlush {
  position: absolute;
  right: 0;
  top: 52px;
  flex-shrink: 0;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.avatarFlush {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  font-size: 14px;
}

.avatarPink {
  background: var(--sfia-accent-pink-00c);
}

.avatarPurple {
  background: var(--sfia-purple);
}

.avatarBlue {
  background: var(--sfia-blue);
}

.avatarPinkFlush {
  background: var(--sfia-pink);
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0;
  line-height: 1.2;
}

.nameFlush {
  composes: name;
  color: #fff;
  font-weight: 600;
}

.subtitle {
  font-size: 12px;
  color: var(--sfia-green-00c);
  margin: 4px 0 0;
  line-height: 1.25;
}

.subtitleFlush {
  composes: subtitle;
  color: #c7d1f0;
}

.body {
  flex: 1;
  overflow: hidden;
  padding: 24px 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  min-height: 0;
}

.message {
  background: var(--sfia-blue-soft-00c);
  border: 1px solid var(--sfia-border-soft);
  border-radius: 16px;
  padding: 16px;
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: var(--sfia-ink-00c);
  box-shadow: var(--sfia-shadow-panel);
  box-sizing: border-box;
  min-height: 92px;
}

.messageFlush {
  composes: message;
  background: #f5f7ff;
  color: var(--sfia-ink);
  min-height: 108px;
  border-radius: 16px;
}

.sectionTitle {
  font-size: 13px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0 0 6px;
}

.sectionLabel {
  font-size: 10px;
  font-weight: 700;
  color: var(--sfia-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: var(--sfia-line-meta);
  margin: 4px 0 0;
}

.watchList {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.watchItem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 13px;
  height: 46px;
  min-height: 46px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 14px;
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-ink);
  box-sizing: border-box;
}

.watchDot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
}

.risk {
  background: var(--sfia-purple-soft-00c);
  border-radius: 16px;
  padding: 14px 16px;
  margin-top: 4px;
  box-sizing: border-box;
  min-height: 102px;
}

.riskFlush {
  composes: risk;
  background: #fff2f5;
  border: 1px solid var(--sfia-border-soft);
}

.riskTitle {
  font-size: 10px;
  font-weight: 700;
  color: var(--sfia-purple-00c);
  margin: 0 0 8px;
  letter-spacing: 0.03em;
}

.riskTitleFlush {
  composes: riskTitle;
  color: var(--sfia-pink);
}

.riskText {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  color: var(--sfia-ink-00c);
  margin: 0;
}

.composer {
  margin-top: auto;
  padding: 16px;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 18px;
  background: #fff;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 116px;
  min-height: 116px;
}

.panel[data-variant="flush"] .composer,
.composerFlush {
  height: 110px;
  min-height: 110px;
}

.composerPlaceholder {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
  margin: 0 0 14px;
}

.composerRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.send {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--sfia-ink-00c);
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
}

.sendFlush {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}

.checklist {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 18px;
  padding: 15px;
}

.checkRow {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 12px;
  color: var(--sfia-ink-00c);
}

.checkIcon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--sfia-green-soft-00c);
  color: var(--sfia-green-00c);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.recommendationBadge {
  font-size: 10px;
  font-weight: 700;
  color: var(--sfia-purple-00c);
  text-transform: uppercase;
}

```

### `components/shell/CopilotPanel.tsx`

```tsx
import { StatusPill } from "@/components/ui/StatusPill";
import styles from "./copilot-panel.module.css";

export interface CopilotWatchItem {
  label: string;
  dotColor: string;
}

export interface CopilotProps {
  variant: "floating" | "flush";
  name: string;
  subtitle: string;
  avatarTone?: "pink" | "purple" | "blue" | "pinkFlush";
  levelPill?: string;
  summary: string;
  watchItems?: CopilotWatchItem[];
  watchLabel?: string;
  riskTitle?: string;
  riskText?: string;
  checklist?: string[];
  checklistTitle?: string;
  showRecommendationLabel?: boolean;
}

export function CopilotPanel({
  variant,
  name,
  subtitle,
  avatarTone = "pink",
  levelPill = "L0 humain",
  summary,
  watchItems = [],
  watchLabel = "CE QUE JE SURVEILLE",
  riskTitle,
  riskText,
  checklist,
  checklistTitle,
  showRecommendationLabel = false,
}: CopilotProps) {
  const isFlush = variant === "flush";

  const avatarClass = [
    styles.avatar,
    isFlush ? styles.avatarFlush : "",
    avatarTone === "pink"
      ? styles.avatarPink
      : avatarTone === "pinkFlush"
        ? styles.avatarPinkFlush
        : avatarTone === "blue"
          ? styles.avatarBlue
          : styles.avatarPurple,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      className={styles.panel}
      aria-label="Copilot Nora"
      data-testid="copilot-panel"
    >
      <div
        className={
          isFlush ? styles.headerFlush : styles.headerFloating
        }
      >
        <div className={styles.headerRow}>
          <div className={avatarClass}>SF</div>
          <div>
            <p className={isFlush ? styles.nameFlush : styles.name}>{name}</p>
            <p className={isFlush ? styles.subtitleFlush : styles.subtitle}>
              {subtitle}
            </p>
          </div>
          <div
            className={
              isFlush ? styles.levelPillFlush : styles.levelPill
            }
          >
            <StatusPill tone={isFlush ? "navy" : "orange"}>
              {levelPill}
            </StatusPill>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        {showRecommendationLabel && (
          <p className={styles.recommendationBadge}>
            Recommandation copilot — non décision Morris
          </p>
        )}

        <div className={isFlush ? styles.messageFlush : styles.message}>
          {summary}
        </div>

        {checklist && (
          <div className={styles.checklist}>
            <p className={styles.sectionTitle}>{checklistTitle}</p>
            {checklist.map((item) => (
              <div key={item} className={styles.checkRow}>
                <span className={styles.checkIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {watchItems.length > 0 && (
          <>
            <p className={styles.sectionLabel}>{watchLabel}</p>
            {watchItems.map((item) => (
              <div key={item.label} className={styles.watchItem}>
                <span
                  className={styles.watchDot}
                  style={{ background: item.dotColor }}
                  aria-hidden="true"
                />
                {item.label}
              </div>
            ))}
          </>
        )}

        {riskTitle && riskText && (
          <div className={isFlush ? styles.riskFlush : styles.risk}>
            <p
              className={
                isFlush ? styles.riskTitleFlush : styles.riskTitle
              }
            >
              {riskTitle}
            </p>
            <p className={styles.riskText}>{riskText}</p>
          </div>
        )}

        <div
          className={`${styles.composer} ${isFlush ? styles.composerFlush : ""}`}
        >
          <p className={styles.composerPlaceholder}>
            Demander une analyse ou préciser une contrainte…
          </p>
          <div className={styles.composerRow}>
            <StatusPill tone={isFlush ? "blueFlush" : "muted"}>
              @ contexte
            </StatusPill>
            <button
              type="button"
              className={`${styles.send} ${isFlush ? styles.sendFlush : ""}`}
              disabled
              title="Simulation — aucune action Git réelle"
              aria-disabled
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

```

### `components/ui/metric-card.module.css`

```css
.card {
  position: relative;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 18px;
  box-shadow: var(--sfia-shadow-md);
  padding: 18px 22px;
  height: var(--sfia-metric-h);
  min-height: var(--sfia-metric-h);
  max-height: var(--sfia-metric-h);
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
}

.bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 100%;
  border-radius: 3px;
}

.barBlue {
  background: var(--sfia-blue);
}

.barPurple {
  background: var(--sfia-purple);
}

.barOrange {
  background: var(--sfia-orange);
}

.barGreen {
  background: var(--sfia-green);
}

.label {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 600;
  color: var(--sfia-muted);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: var(--sfia-line-meta);
}

.value {
  margin-top: 14px;
  font-size: 26px;
  font-weight: 700;
  color: var(--sfia-ink);
  line-height: 1.15;
}


```

### `components/ui/gate-list.module.css`

```css
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  padding: 0 14px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
  box-sizing: border-box;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dotBlue {
  background: var(--sfia-blue);
}

.dotOrange {
  background: var(--sfia-orange);
}

.dotPurple {
  background: var(--sfia-purple);
}

.dotPink {
  background: var(--sfia-pink);
}

.dotGreen {
  background: var(--sfia-green);
}

.label {
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  color: var(--sfia-ink);
}

.timing {
  font-size: 10px;
  font-weight: 500;
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
}

```

### `features/synthese/synthese.module.css`

```css
.hero {
  background: var(--sfia-hero-synthese);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 20px 28px;
  color: #fff;
  height: var(--sfia-hero-h-synthese);
  min-height: var(--sfia-hero-h-synthese);
  max-height: var(--sfia-hero-h-synthese);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #9eb2ff;
  margin: 0 0 8px;
  line-height: 1.2;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 6px;
  max-width: 720px;
  line-height: var(--sfia-line-hero);
}

.heroText {
  font-size: 13px;
  line-height: 1.25;
  color: #c9d6f5;
  margin: 0;
  max-width: 670px;
}

.heroPills {
  position: absolute;
  right: 46px;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heroWrap {
  position: relative;
  width: 100%;
}

.heroPillDark {
  background: #303d66;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 140px;
  box-sizing: border-box;
  text-align: center;
}

.heroPillPurple {
  background: #42336b;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 140px;
  box-sizing: border-box;
  text-align: center;
}

.metrics {
  display: grid;
  grid-template-columns:
    var(--sfia-metric-w)
    var(--sfia-metric-w)
    var(--sfia-metric-w)
    var(--sfia-metric-w-wide);
  gap: var(--sfia-metric-gap);
  margin: var(--sfia-stack-gap-sm) 0 var(--sfia-stack-gap-lg);
  width: 100%;
  box-sizing: border-box;
}

.lower {
  display: grid;
  grid-template-columns: var(--sfia-portfolio-w) var(--sfia-side-panel-w);
  gap: var(--sfia-col-gap);
  align-items: start;
  width: 100%;
}

.portfolio {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 20px 18px 22px;
  height: 510px;
  min-height: 510px;
  max-height: 510px;
  box-sizing: border-box;
  overflow: hidden;
}

.portfolioHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.portfolioTitle {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
  line-height: 1.25;
}

.row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 16px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  margin-bottom: 20px;
  height: 72px;
  min-height: 72px;
  box-sizing: border-box;
}

.row:last-child {
  margin-bottom: 0;
}

.rowDot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
}

.rowName {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}

.rowSub {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin: 4px 0 0;
}

.rowProgress {
  margin-left: auto;
}

.sideColumn {
  display: flex;
  flex-direction: column;
  gap: var(--sfia-side-stack-gap);
}

.panel {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-md);
  padding: 18px 20px;
  box-sizing: border-box;
}

.gatesPanel {
  composes: panel;
  height: 244px;
  min-height: 244px;
  max-height: 244px;
  overflow: hidden;
}

.activityPanel {
  composes: panel;
  height: 248px;
  min-height: 248px;
  max-height: 248px;
  overflow: hidden;
}

.panelTitle {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 14px;
  line-height: 1.2;
}

.activityList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activityItem {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  font-weight: 500;
  color: var(--sfia-ink);
  margin-bottom: 24px;
}

.activityItem:last-child {
  margin-bottom: 0;
}

```

### `features/synthese/SyntheseScreen.tsx`

```tsx
import { MetricCard } from "@/components/ui/MetricCard";
import { GateList } from "@/components/ui/GateList";
import { StatusPill } from "@/components/ui/StatusPill";
import { cycles } from "@/fixtures/cycles";
import { gates } from "@/fixtures/gates";
import styles from "./synthese.module.css";

const dotColors = ["#7a4df5", "#3863f5", "#21c28a", "#faa629"];

const activities = [
  "Figma premium créé",
  "AF-CAND-11B validée",
  "PR #214 mergée",
  "Handoff publié",
];

export function SyntheseScreen() {
  return (
    <>
      <div className={styles.heroWrap}>
        <section className={styles.hero} aria-labelledby="synthese-hero">
          <p className={styles.heroEyebrow}>PILOTAGE EN TEMPS RÉEL</p>
          <h2 id="synthese-hero" className={styles.heroTitle}>
            Une vision claire de chaque cycle, chaque gate et chaque preuve.
          </h2>
          <p className={styles.heroText}>
            Le cockpit consolide la vérité Git, les décisions Morris et les
            prochaines actions sans créer une seconde vérité.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.heroPillDark}>4 projets actifs</span>
            <span className={styles.heroPillPurple}>2 gates ouvertes</span>
          </div>
        </section>
      </div>

      <div className={styles.metrics}>
        <MetricCard label="Projets actifs" value="04" accent="blue" />
        <MetricCard label="Cycles en cours" value="03" accent="purple" />
        <MetricCard label="Gates Morris" value="02" accent="orange" />
        <MetricCard label="Review packs" value="07 / 08" accent="green" />
      </div>

      <div className={styles.lower}>
        <section className={styles.portfolio} aria-labelledby="portfolio-title">
          <div className={styles.portfolioHeader}>
            <h2 id="portfolio-title" className={styles.portfolioTitle}>
              Portefeuille des cycles
            </h2>
            <StatusPill tone="blueFlush">Vue portefeuille</StatusPill>
          </div>
          {cycles.map((cycle, index) => (
            <div key={cycle.id} className={styles.row}>
              <span
                className={styles.rowDot}
                style={{ background: dotColors[index] }}
                aria-hidden
              />
              <div>
                <p className={styles.rowName}>{cycle.name}</p>
                <p className={styles.rowSub}>{cycle.subtitle}</p>
              </div>
              <span className={styles.rowProgress}>
                <StatusPill tone="blueFlush">{cycle.progress} %</StatusPill>
              </span>
            </div>
          ))}
        </section>

        <div className={styles.sideColumn}>
          <section className={styles.gatesPanel} aria-labelledby="gates-title">
            <h2 id="gates-title" className={styles.panelTitle}>
              Gates à arbitrer
            </h2>
            <GateList gates={gates} />
          </section>

          <section
            className={styles.activityPanel}
            aria-labelledby="activity-title"
          >
            <h2 id="activity-title" className={styles.panelTitle}>
              Activité récente
            </h2>
            <ul className={styles.activityList}>
              {activities.map((item) => (
                <li key={item} className={styles.activityItem}>
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

```

### `features/nouvelle-demande/nouvelle-demande.module.css`

```css
.hero {
  margin-top: 24px;
  padding: 24px 28px;
  border-radius: var(--sfia-radius-xl);
  background: linear-gradient(
    90deg,
    #141c3d 0%,
    #383b94 55%,
    #7833cc 100%
  );
  border: 1px solid var(--sfia-border-soft);
  box-shadow: var(--sfia-shadow-hero);
  color: #fff;
  position: relative;
  height: var(--sfia-hero-h-demande);
  min-height: var(--sfia-hero-h-demande);
  max-height: var(--sfia-hero-h-demande);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.heroTitle {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 6px;
  max-width: 560px;
  line-height: 1.2;
}

.heroText {
  font-size: 13px;
  line-height: 1.2;
  color: #e0e5ff;
  margin: 0 0 8px;
  max-width: 560px;
}

.heroOrb {
  position: absolute;
  right: 56px;
  top: 20px;
  width: 92px;
  height: 92px;
}

.grid {
  display: grid;
  grid-template-columns: 600px 298px;
  gap: 22px;
  margin-top: 24px;
  width: 100%;
  box-sizing: border-box;
}

.formCard {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-lg);
  box-shadow: 0 6px 18px rgba(36, 46, 89, 0.05);
  padding: 22px 24px;
  height: 638px;
  min-height: 638px;
  max-height: 638px;
  box-sizing: border-box;
  overflow: hidden;
}

.sectionLabel {
  font-size: 11px;
  font-weight: 700;
  color: var(--sfia-blue-00c);
  margin: 0 0 6px;
  line-height: 1.2;
}

.sectionLabelPurple {
  composes: sectionLabel;
  color: var(--sfia-purple-00c);
  margin-top: 18px;
}

.sectionTitle {
  font-size: 20px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0 0 12px;
  line-height: 1.2;
}

.field {
  background: var(--sfia-bg-00c);
  border: 1px solid var(--sfia-border-00c);
  border-radius: 14px;
  padding: 10px 16px;
  margin-bottom: 14px;
  box-sizing: border-box;
  height: 62px;
  min-height: 62px;
}

.fieldLabel {
  display: block;
  font-size: var(--sfia-meta-size-sm);
  font-weight: 600;
  color: var(--sfia-muted-00c);
  margin-bottom: 4px;
  line-height: var(--sfia-line-meta);
}

.fieldValue {
  font-size: 14px;
  line-height: 1.25;
  color: var(--sfia-ink-00c);
  margin: 0;
}

.fieldLarge {
  composes: field;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
  padding: 12px 16px;
}

.tags {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.contextCard {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 14px;
  box-shadow: var(--sfia-shadow-panel);
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 106px;
  min-height: 106px;
  box-sizing: border-box;
}

.ghIcon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--sfia-ink-00c);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.repoName {
  font-size: 14px;
  font-weight: 600;
  color: var(--sfia-ink-00c);
  margin: 0;
  line-height: 1.2;
}

.repoMeta {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
  margin: 4px 0 0;
}

.contextPill {
  margin-left: auto;
}

.attachment {
  margin-top: 16px;
  background: var(--sfia-blue-soft-00c);
  border-radius: 14px;
  padding: 0 18px;
  color: var(--sfia-blue-00c);
  font-size: 13px;
  font-weight: 600;
  height: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  gap: 16px;
  height: 42px;
}

.saved {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
}

.preview {
  background: var(--sfia-bg-00c);
  border-radius: var(--sfia-radius-lg);
  padding: 20px 18px;
  height: 638px;
  min-height: 638px;
  max-height: 638px;
  box-sizing: border-box;
  overflow: hidden;
}

.previewHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.previewTitle {
  font-size: 15px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0;
  line-height: 1.2;
  max-width: 160px;
}

.agentCard {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 16px;
  box-shadow: var(--sfia-shadow-panel);
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 20px;
  height: 96px;
  min-height: 96px;
  box-sizing: border-box;
  overflow: hidden;
}

.agentAvatar {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: var(--sfia-accent-pink-00c);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}

.statusRow {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 14px;
  padding: 0 16px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  height: 54px;
  min-height: 54px;
  box-sizing: border-box;
}

.statusDot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}

.statusTitle {
  font-size: 13px;
  font-weight: 600;
  color: var(--sfia-ink-00c);
  margin: 0;
  line-height: 1.2;
}

.statusSub {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
  margin: 2px 0 0;
}

.timeline {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 16px;
  padding: 14px 16px;
  margin-top: 14px;
  height: 160px;
  min-height: 160px;
  box-sizing: border-box;
  overflow: hidden;
}

.timelineTitle {
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 12px;
}

.timelineItem {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 8px;
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
}

.timelineItemActive {
  composes: timelineItem;
  color: var(--sfia-ink-00c);
  font-weight: 600;
}

.timelineDot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.trust {
  margin-top: 16px;
  background: var(--sfia-ink-00c);
  color: #fff;
  border-radius: 14px;
  padding: 0 16px;
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  font-weight: 600;
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.recommendationNote {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-purple-00c);
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 6px;
  letter-spacing: 0.03em;
}


```

### `features/cycle-actif/cycle-actif.module.css`

```css
.hero {
  background: var(--sfia-hero-cycle);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 20px 28px;
  color: #fff;
  height: var(--sfia-hero-h-cycle);
  min-height: var(--sfia-hero-h-cycle);
  max-height: var(--sfia-hero-h-cycle);
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #99b8ff;
  margin: 0 0 6px;
  line-height: 1.2;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 8px;
  max-width: 720px;
  line-height: 1.2;
}

.heroText {
  font-size: 13px;
  line-height: 1.25;
  color: #ccd6f5;
  margin: 0;
  max-width: 650px;
}

.heroPills {
  position: absolute;
  right: 48px;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pillPurple {
  background: #522e6b;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 104px;
  box-sizing: border-box;
  text-align: center;
}

.pillBlue {
  background: #214585;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 104px;
  box-sizing: border-box;
  text-align: center;
}

.stepper {
  margin: 14px 0 26px;
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 18px;
  box-shadow: var(--sfia-shadow-sm);
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 92px;
  min-height: 92px;
  max-height: 92px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.step {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stepCircle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.stepCircleDone {
  composes: stepCircle;
  background: var(--sfia-green);
}

.stepCircleActive {
  composes: stepCircle;
  background: var(--sfia-blue);
}

.stepCirclePending {
  composes: stepCircle;
  background: var(--sfia-border);
  color: var(--sfia-muted);
}

.stepLabel {
  font-size: 12px;
  font-weight: 500;
  color: var(--sfia-ink);
  white-space: nowrap;
}

.stepLabelActive {
  composes: stepLabel;
  color: var(--sfia-blue);
  font-weight: 600;
}

.connector {
  width: 54px;
  height: 2px;
  background: var(--sfia-green);
  flex-shrink: 0;
}

.connectorPending {
  composes: connector;
  background: var(--sfia-border);
}

.lower {
  display: grid;
  grid-template-columns: var(--sfia-work-w) var(--sfia-inspector-w);
  gap: var(--sfia-col-gap);
  align-items: start;
  width: 100%;
}

.work {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 22px 22px;
  height: 548px;
  min-height: 548px;
  max-height: 548px;
  box-sizing: border-box;
  overflow: hidden;
}

.workLabel {
  font-size: 10px;
  font-weight: 700;
  color: var(--sfia-blue);
  margin: 0 0 6px;
  letter-spacing: 0.03em;
}

.workTitle {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.2;
}

.workText {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  color: var(--sfia-muted);
  margin: 0 0 16px;
}

.checkRow {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 14px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  margin-bottom: 14px;
  height: 52px;
  min-height: 52px;
  box-sizing: border-box;
}

.checkDot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}

.checkLabel {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  align-items: center;
}

.inspector {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 20px 22px;
  height: 548px;
  min-height: 548px;
  max-height: 548px;
  box-sizing: border-box;
  overflow: hidden;
}

.inspectorTitle {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 18px;
  line-height: 1.2;
}

.fieldLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-muted);
  margin: 12px 0 4px;
  letter-spacing: 0.02em;
  line-height: var(--sfia-line-meta);
}

.fieldValue {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  font-weight: 500;
  color: var(--sfia-ink);
  margin: 0;
}

.stopBox {
  margin-top: 20px;
  background: #fff2f5;
  border: 1px solid #ffc9d4;
  border-radius: 16px;
  padding: 14px;
  min-height: 110px;
  box-sizing: border-box;
}

.stopTitle {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-pink);
  margin: 0 0 8px;
  letter-spacing: 0.03em;
}

.stopText {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  margin: 0;
}

.inspectorAction {
  margin-top: 18px;
}

```

### `features/decision/decision.module.css`

```css
.hero {
  background: var(--sfia-hero-decision);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 20px 28px;
  color: #fff;
  height: var(--sfia-hero-h-decision);
  min-height: var(--sfia-hero-h-decision);
  max-height: var(--sfia-hero-h-decision);
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #adb2ff;
  margin: 0 0 6px;
  line-height: 1.2;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.2;
}

.heroText {
  font-size: 13px;
  line-height: 1.25;
  color: #cfd6f2;
  margin: 0;
  max-width: 690px;
}

.heroPills {
  position: absolute;
  right: 32px;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.pillPurple {
  background: #612e66;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 150px;
  box-sizing: border-box;
  text-align: center;
}

.pillBlue {
  background: #294578;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
  width: 104px;
  box-sizing: border-box;
  text-align: center;
}

.content {
  display: grid;
  grid-template-columns: var(--sfia-evidence-w) var(--sfia-decision-w);
  gap: var(--sfia-col-gap);
  margin-top: 26px;
  align-items: start;
  width: 100%;
}

.evidencePanel {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 22px 22px;
  height: 664px;
  min-height: 664px;
  max-height: 664px;
  box-sizing: border-box;
  overflow: hidden;
}

.evidenceLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-purple);
  margin: 0 0 6px;
  letter-spacing: 0.03em;
}

.evidenceTitle {
  font-size: 19px;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.2;
}

.evidenceDesc {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  color: var(--sfia-muted);
  margin: 0 0 16px;
}

.decisionPanel {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-md);
  padding: 18px 18px 22px;
  height: 664px;
  min-height: 664px;
  max-height: 664px;
  box-sizing: border-box;
  overflow: hidden;
}

.decisionTitle {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.2;
}

.decisionHint {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin: 0 0 16px;
}

.option {
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border-soft);
  border-radius: 16px;
  box-shadow: var(--sfia-shadow-md);
  padding: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  height: 106px;
  min-height: 106px;
  max-height: 106px;
  box-sizing: border-box;
  font-family: var(--sfia-font);
  overflow: hidden;
}

.optionSelected {
  composes: option;
  border-color: var(--sfia-blue);
  box-shadow: 0 0 0 2px rgba(56, 99, 245, 0.15);
}

.optionTitle {
  font-size: 13px;
  font-weight: 600;
  margin: 10px 0 4px;
  color: var(--sfia-ink);
  line-height: 1.2;
}

.optionSub {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin: 0;
}

.confirmBox {
  background: #f2f7ff;
  border: 1px solid var(--sfia-border);
  border-radius: 16px;
  padding: 14px;
  margin-bottom: 14px;
  min-height: 112px;
  box-sizing: border-box;
}

.confirmLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-blue);
  margin: 0 0 8px;
  letter-spacing: 0.03em;
}

.confirmText {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  margin: 0;
}

.morrisLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-pink);
  text-transform: uppercase;
  margin: 0 0 10px;
  letter-spacing: 0.03em;
}

.simulatedNote {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin-top: 8px;
}

```

### `e2e/p0-polish-2-screenshots.spec.ts`

```ts
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const polish2Dir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots/polish-2",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-polish-2.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-polish-2.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-polish-2.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-polish-2.png",
  },
];

test.beforeAll(() => {
  fs.mkdirSync(polish2Dir, { recursive: true });
});

test.describe("P0 geometry polish-2 captures", () => {
  for (const route of routes) {
    test(`capture ${route.path}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1024 });
      await page.goto(route.path);
      await expect(
        page.getByRole("heading", { name: route.heading, level: 1 }),
      ).toBeVisible();

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
        dpr: window.devicePixelRatio,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
      expect(metrics.scrollHeight).toBeLessThanOrEqual(1024 + 1);

      await page.screenshot({
        path: path.join(polish2Dir, route.screenshot),
        clip: { x: 0, y: 0, width: 1440, height: 1024 },
      });
    });
  }
});

```

### `e2e/p0-polish-screenshots.spec.ts`

```ts
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * Polish-1 captures (lisibility pass). Disabled by default after geometry polish-2
 * to avoid overwriting historical evidence. Re-enable with SFIA_CAPTURE_POLISH1=1
 * only when intentionally regenerating polish-1 baselines.
 */
const polishDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots/polish",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-polish.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-polish.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-polish.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-polish.png",
  },
];

const describePolish = process.env.SFIA_CAPTURE_POLISH1
  ? test.describe
  : test.describe.skip;

describePolish("P0 polish captures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(polishDir, { recursive: true });
  });

  for (const route of routes) {
    test(`capture ${route.path}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1024 });
      await page.goto(route.path);
      await expect(
        page.getByRole("heading", { name: route.heading, level: 1 }),
      ).toBeVisible();

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);

      await page.screenshot({
        path: path.join(polishDir, route.screenshot),
        clip: { x: 0, y: 0, width: 1440, height: 1024 },
      });
    });
  }
});

```

## Annexe B — Mesures runtime before

```json
{
  "synthese": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1051
    },
    "rail": {
      "sel": "[class*=\"railFlush\"]",
      "x": 0,
      "y": 0,
      "w": 64,
      "h": 1051
    },
    "topbar": {
      "sel": "header",
      "x": 64,
      "y": 0,
      "w": 1376,
      "h": 116
    },
    "canvas": {
      "sel": "[class*=\"canvasFlush\"]",
      "x": 92,
      "y": 116,
      "w": 1008,
      "h": 935
    },
    "copilot": {
      "sel": "[class*=\"copilotFlush\"]",
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "copilotPanel": {
      "sel": "[class*=\"copilot-panel\"]",
      "x": 1108,
      "y": 116,
      "w": 316,
      "h": 892
    },
    "hero": {
      "sel": "[class*=\"heroWrap\"]",
      "x": 92,
      "y": 144,
      "w": 984,
      "h": 183
    },
    "metrics": {
      "sel": "[class*=\"metrics\"]",
      "x": 92,
      "y": 349,
      "w": 984,
      "h": 138
    },
    "lower": {
      "sel": "[class*=\"lower\"]",
      "x": 92,
      "y": 513,
      "w": 984,
      "h": 510
    },
    "h1": {
      "x": 91,
      "y": 60,
      "w": 159,
      "h": 29,
      "fontSize": "24px",
      "lineHeight": "normal"
    },
    "scroll": {
      "doc": 1051,
      "body": 1051,
      "client": 1024
    }
  },
  "nouvelle": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "rail": {
      "sel": "[class*=\"railFloating\"]",
      "x": 18,
      "y": 18,
      "w": 64,
      "h": 988
    },
    "topbar": {
      "sel": "header",
      "x": 101,
      "y": 19,
      "w": 966,
      "h": 142
    },
    "canvas": {
      "sel": "[class*=\"workspaceInner\"]",
      "x": 101,
      "y": 161,
      "w": 966,
      "h": 844
    },
    "copilot": {
      "sel": "[class*=\"copilotFloating\"]",
      "x": 1086,
      "y": 18,
      "w": 334,
      "h": 988
    },
    "copilotPanel": {
      "sel": "[class*=\"copilot-panel\"]",
      "x": 1087,
      "y": 19,
      "w": 332,
      "h": 986
    },
    "hero": {
      "sel": "[class*=\"hero\"]",
      "x": 124,
      "y": 177,
      "w": 920,
      "h": 172
    },
    "metrics": null,
    "lower": {
      "sel": "[class*=\"grid\"]",
      "x": 124,
      "y": 371,
      "w": 920,
      "h": 746
    },
    "h1": {
      "x": 129,
      "y": 80,
      "w": 219,
      "h": 29,
      "fontSize": "24px",
      "lineHeight": "normal"
    },
    "scroll": {
      "doc": 1024,
      "body": 1024,
      "client": 1024
    }
  },
  "cycle": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "rail": {
      "sel": "[class*=\"railFlush\"]",
      "x": 0,
      "y": 0,
      "w": 64,
      "h": 1024
    },
    "topbar": {
      "sel": "header",
      "x": 64,
      "y": 0,
      "w": 1376,
      "h": 116
    },
    "canvas": {
      "sel": "[class*=\"canvasFlush\"]",
      "x": 92,
      "y": 116,
      "w": 1008,
      "h": 863
    },
    "copilot": {
      "sel": "[class*=\"copilotFlush\"]",
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "copilotPanel": {
      "sel": "[class*=\"copilot-panel\"]",
      "x": 1108,
      "y": 116,
      "w": 316,
      "h": 892
    },
    "hero": {
      "sel": "[class*=\"hero\"]",
      "x": 92,
      "y": 144,
      "w": 984,
      "h": 138
    },
    "metrics": null,
    "lower": {
      "sel": "[class*=\"lower\"]",
      "x": 92,
      "y": 412,
      "w": 984,
      "h": 539
    },
    "h1": {
      "x": 91,
      "y": 60,
      "w": 124,
      "h": 29,
      "fontSize": "24px",
      "lineHeight": "normal"
    },
    "scroll": {
      "doc": 1024,
      "body": 1024,
      "client": 1024
    }
  },
  "decision": {
    "page": {
      "x": 0,
      "y": 0,
      "w": 1440,
      "h": 1024
    },
    "rail": {
      "sel": "[class*=\"railFlush\"]",
      "x": 0,
      "y": 0,
      "w": 64,
      "h": 1024
    },
    "topbar": {
      "sel": "header",
      "x": 64,
      "y": 0,
      "w": 1376,
      "h": 116
    },
    "canvas": {
      "sel": "[class*=\"canvasFlush\"]",
      "x": 92,
      "y": 116,
      "w": 1008,
      "h": 899
    },
    "copilot": {
      "sel": "[class*=\"copilotFlush\"]",
      "x": 1100,
      "y": 116,
      "w": 340,
      "h": 908
    },
    "copilotPanel": {
      "sel": "[class*=\"copilot-panel\"]",
      "x": 1108,
      "y": 116,
      "w": 316,
      "h": 892
    },
    "hero": {
      "sel": "[class*=\"hero\"]",
      "x": 92,
      "y": 144,
      "w": 984,
      "h": 129
    },
    "metrics": null,
    "lower": {
      "sel": "[class*=\"content\"]",
      "x": 92,
      "y": 297,
      "w": 984,
      "h": 691
    },
    "h1": {
      "x": 91,
      "y": 60,
      "w": 182,
      "h": 29,
      "fontSize": "24px",
      "lineHeight": "normal"
    },
    "scroll": {
      "doc": 1024,
      "body": 1024,
      "client": 1024
    }
  }
}

```
