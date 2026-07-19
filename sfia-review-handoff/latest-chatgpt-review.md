# SFIA Review Pack — Cycle 8+9 Visual Polish P0

- **Date / heure :** 2026-07-19 10:23:51 UTC+02:00 (UTC+0200)
- **Cycle principal :** 8 — Delivery / implémentation corrective
- **Sous-cycle :** 9 — QA / validation visuelle
- **Profil :** Standard
- **Typologie :** EVOL corrective
- **Branche :** `project/sfia-studio-delivery-p0-implementation`
- **HEAD :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9` (inchangé — **aucun commit projet**)
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Push projet / PR / merge :** aucun

## 1. État Git initial et final

### Initial
- Branche delivery @ `ff5e3f6…` ; code P0 non commité sous `projects/sfia-studio/app/**`
- Artefacts review sous `.tmp-sfia-review/**`
- Aucun staged ; main aligné

### Final
- Branche : `project/sfia-studio-delivery-p0-implementation`
- HEAD : `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- Aucun staged ; aucun commit projet
- Modifications polish uniquement CSS / globals / e2e captures (JSX inchangé hors e2e)

```
?? .tmp-sfia-review/
?? projects/sfia-studio/app/
```

## 2. Sources consultées

- Template cycle + docs Studio `14`–`16`, `18`–`19` (validés)
- Handoff canonique Delivery P0
- Figma fileKey `lrjA1WEyRpL05vKR8k29LO` frames `19:2`, `22:2`, `22:133`, `22:270` @ 1440×1024
- Captures runtime avant (`.tmp-sfia-review/screenshots/before/`) et Playwright polish

## 3. Observations initiales (Morris + runtime)

1. Densité / respiration insuffisante (surtout Nouvelle demande et décision).
2. Textes secondaires (10–11px gris) trop faibles.
3. Copilot dense : gaps et paddings à aérer.
4. Alignements badges / titres / hauteurs de rangées à homogénéiser.
5. Rail actif plein bleu + onglet souligné = double signal trop fort.
6. Intention Option B et 4 frames à conserver (pas de refonte).

## 4. Corrections partagées

### Tokens (`styles/tokens.css`)
- `--sfia-muted` `#636e85` → `#51607a` (lisibilité AA secondaire)
- `--sfia-muted-00c` `#6e7894` → `#5a657c`
- Ajout `--sfia-line-meta`, `--sfia-line-body`, `--sfia-meta-size`, `--sfia-meta-size-sm`, `--sfia-space-*`

### Shell
- Canvas flush padding rééquilibré ; Copilot flush padding latéral
- `workspaceInner` padding bas +5px

### Copilot
- Gaps body 16→18 ; paddings message/risk/composer ; line-height body
- Labels section / risk title 10→11px ; watch items densifiés verticalement

### Navigation
- Topbar : `titleRow` min-height + alignement badges ; tab underline 3→2px ; gap tabs 48→40
- Rail flush actif : soft blue + texte bleu (complémentaire à l’onglet, moins concurrent)

### UI
- Gate timing / metric label / evidence label : meta-size + line-height
- `globals.css` : `prefers-reduced-motion`

## 5. Corrections par écran

| Écran | Corrections |
|-------|-------------|
| P0-00C Nouvelle demande | hero/form/preview paddings ; section gaps ; status rows min-height ; meta 10→11 ; recommendation note lisible |
| P0-01C Synthèse | metrics/lower gaps ; portfolio rows homogènes ; rowSub 12px ; panels padding |
| P0-02C Cycle actif | stepper min-height ; work/inspector padding ; check rows ; field labels meta ; stop box line-height |
| P0-03C Décision | content gap ; evidence/decision paddings ; option spacing ; optionSub/confirm/meta lisibles |

## 6. Fichiers polish — contenu complet

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

  /* Layout (1440×1024 reference) */
  --sfia-rail-width: 64px;
  --sfia-topbar-height: 116px;
  --sfia-copilot-width-flush: 340px;
  --sfia-copilot-width-floating: 334px;
  --sfia-canvas-offset-flush: 92px;
  --sfia-brand-accent-left: 84px;
  --sfia-brand-accent-width: 4px;
  --sfia-brand-accent-height: 150px;
  --sfia-brand-accent-top: 120px;

  /* Typography */
  --sfia-font: var(--font-inter, "Inter", system-ui, sans-serif);
  --sfia-line-meta: 1.45;
  --sfia-line-body: 1.5;
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
  padding: 18px;
  display: grid;
  grid-template-columns: 64px 968px 334px;
  grid-template-rows: 988px;
  gap: 18px;
  align-items: start;
}

.pageFlush {
  composes: page;
  background: var(--sfia-bg);
  display: grid;
  grid-template-columns: var(--sfia-rail-width) 1fr;
  grid-template-rows: minmax(1024px, auto);
  min-height: 1024px;
  width: 1440px;
  max-width: 100%;
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
  width: 64px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 22px;
  box-shadow: var(--sfia-shadow-lg);
  position: relative;
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
  min-height: 1024px;
  min-width: 0;
}

.bodyFlush {
  display: grid;
  grid-template-columns: 1fr var(--sfia-copilot-width-flush);
  gap: 0;
  padding-left: calc(var(--sfia-canvas-offset-flush) - var(--sfia-rail-width));
  padding-right: 0;
  flex: 1;
  min-height: 908px;
  align-items: start;
}

.canvasFlush {
  padding: 28px 24px 28px 0;
  min-width: 0;
  overflow: visible;
}

.copilotFlush {
  padding: 0 16px 16px 8px;
  margin-top: 0;
  height: 908px;
  align-self: start;
}

.workspaceFloating {
  width: 968px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-workspace);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.copilotFloating {
  width: 334px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.workspaceInner {
  flex: 1;
  overflow: auto;
  padding: 0 23px 28px;
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

### `app/globals.css`

```css
@import "../styles/tokens.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: var(--sfia-bg);
  color: var(--sfia-ink);
  font-family: var(--sfia-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}

:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### `components/shell/copilot-panel.module.css`

```css
.panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.header {
  padding: 19px 20px;
  flex-shrink: 0;
}

.headerFlush {
  composes: header;
  background: var(--sfia-navy);
  border-radius: 14px 14px 0 0;
  color: #fff;
  min-height: 116px;
}

.headerFloating {
  composes: header;
  border-bottom: 1px solid var(--sfia-border-00c);
}

.headerRow {
  display: flex;
  align-items: flex-start;
  gap: 16px;
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
}

.subtitleFlush {
  composes: subtitle;
  color: #c7d1f0;
}

.body {
  flex: 1;
  overflow-y: auto;
  padding: 18px 17px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.message {
  background: var(--sfia-blue-soft-00c);
  border: 1px solid var(--sfia-border-soft);
  border-radius: 18px;
  padding: 15px 16px;
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: var(--sfia-ink-00c);
  box-shadow: var(--sfia-shadow-panel);
}

.messageFlush {
  composes: message;
  background: #f5f7ff;
  color: var(--sfia-ink);
}

.sectionTitle {
  font-size: 13px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0 0 8px;
}

.sectionLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: var(--sfia-line-meta);
  margin: 2px 0 0;
}

.watchItem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 13px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 14px;
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-ink);
}

.watchDot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
}

.risk {
  background: var(--sfia-purple-soft-00c);
  border-radius: 18px;
  padding: 16px 16px 18px;
  margin-top: 2px;
}

.riskFlush {
  composes: risk;
  background: #fff2f5;
}

.riskTitle {
  font-size: var(--sfia-meta-size-sm);
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
  font-size: 13px;
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
  gap: 40px;
  margin-top: 14px;
  align-items: center;
}

.tab {
  font-size: 13px;
  font-weight: 500;
  color: var(--sfia-muted);
  text-decoration: none;
  padding-bottom: 11px;
  border-bottom: 2px solid transparent;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  font-family: var(--sfia-font);
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

### `components/shell/utility-rail.module.css`

```css
.rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 13px 11px;
  height: 100%;
}

.brand {
  width: 40px;
  height: 40px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  background: var(--sfia-ink-00c);
  text-decoration: none;
}

.brandFlush {
  composes: brand;
  background: transparent;
  color: var(--sfia-blue);
  font-size: 22px;
  border-radius: 0;
  width: auto;
  height: auto;
  margin-bottom: 20px;
}

.item {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: var(--sfia-muted-00c);
  background: #fff;
  border: none;
}

.itemFlush {
  composes: item;
  color: var(--sfia-muted);
  border: 1px solid var(--sfia-border);
}

.itemActive {
  background: var(--sfia-blue-soft-00c);
  color: var(--sfia-blue-00c);
}

.itemActiveFlush {
  /* Softer than full fill so rail + horizontal tab stay complementary */
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  border-color: var(--sfia-blue);
  box-shadow: none;
  font-weight: 700;
}

.itemDisabled {
  composes: item;
  opacity: 0.5;
  cursor: not-allowed;
}

.spacer {
  flex: 1;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: var(--sfia-purple-00c);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatarFlush {
  width: 48px;
  height: 30px;
  border-radius: 15px;
  background: var(--sfia-navy);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.floating {
  composes: rail;
}

.flush {
  composes: rail;
  padding-top: 17px;
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
  min-height: 44px;
  padding: 0 13px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
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
  font-size: var(--sfia-meta-size-sm);
  font-weight: 500;
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
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
  padding: 17px 21px;
  min-height: 122px;
  overflow: hidden;
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
  margin-top: 18px;
  font-size: 26px;
  font-weight: 700;
  color: var(--sfia-ink);
}
```

### `components/ui/evidence-list.module.css`

```css
.list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.row {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 48px;
  padding: 0 13px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
}

.dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dotGreen {
  background: var(--sfia-green);
}

.dotBlue {
  background: var(--sfia-blue);
}

.dotOrange {
  background: var(--sfia-orange);
}

.label {
  flex: 1;
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  font-weight: 500;
  color: var(--sfia-ink);
}

.status {
  min-width: 160px;
  display: flex;
  justify-content: flex-end;
}
```

### `features/nouvelle-demande/nouvelle-demande.module.css`

```css
.hero {
  margin-top: 16px;
  padding: 24px 27px 26px;
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
  min-height: 132px;
}

.heroTitle {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px;
  max-width: 560px;
  line-height: 1.25;
}

.heroText {
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: #e0e5ff;
  margin: 0;
  max-width: 560px;
}

.heroOrb {
  position: absolute;
  right: 57px;
  top: 21px;
  width: 92px;
  height: 92px;
}

.grid {
  display: grid;
  grid-template-columns: 600px 298px;
  gap: 24px;
  margin-top: 22px;
}

.formCard {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-lg);
  box-shadow: 0 6px 18px rgba(36, 46, 89, 0.05);
  padding: 22px 23px 24px;
}

.sectionLabel {
  font-size: 11px;
  font-weight: 700;
  color: var(--sfia-blue-00c);
  margin: 0 0 8px;
}

.sectionLabelPurple {
  composes: sectionLabel;
  color: var(--sfia-purple-00c);
  margin-top: 28px;
}

.sectionTitle {
  font-size: 20px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0 0 14px;
  line-height: 1.3;
}

.field {
  background: var(--sfia-bg-00c);
  border: 1px solid var(--sfia-border-00c);
  border-radius: 14px;
  padding: 10px 15px 12px;
  margin-bottom: 14px;
}

.fieldLabel {
  display: block;
  font-size: var(--sfia-meta-size-sm);
  font-weight: 600;
  color: var(--sfia-muted-00c);
  margin-bottom: 6px;
  line-height: var(--sfia-line-meta);
}

.fieldValue {
  font-size: 14px;
  line-height: var(--sfia-line-body);
  color: var(--sfia-ink-00c);
  margin: 0;
}

.fieldLarge {
  composes: field;
  min-height: 150px;
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
  padding: 17px 15px;
  display: flex;
  align-items: center;
  gap: 16px;
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
}

.repoName {
  font-size: 14px;
  font-weight: 600;
  color: var(--sfia-ink-00c);
  margin: 0;
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
  margin-top: 18px;
  background: var(--sfia-blue-soft-00c);
  border-radius: 14px;
  padding: 22px 18px;
  color: var(--sfia-blue-00c);
  font-size: 13px;
  font-weight: 600;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  gap: 16px;
}

.saved {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
}

.preview {
  background: var(--sfia-bg-00c);
  border-radius: var(--sfia-radius-lg);
  padding: 20px 18px 22px;
  min-height: 638px;
}

.previewHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.previewTitle {
  font-size: 15px;
  font-weight: 700;
  color: var(--sfia-ink-00c);
  margin: 0;
}

.agentCard {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 16px;
  box-shadow: var(--sfia-shadow-panel);
  padding: 15px;
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
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
}

.statusRow {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 14px;
  padding: 11px 15px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  min-height: 54px;
}

.statusDot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.statusTitle {
  font-size: 13px;
  font-weight: 600;
  color: var(--sfia-ink-00c);
  margin: 0;
}

.statusSub {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted-00c);
  margin: 3px 0 0;
}

.timeline {
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 16px;
  padding: 13px 15px;
  margin-top: 16px;
}

.timelineTitle {
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 16px;
}

.timelineItem {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 10px;
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
}

.trust {
  margin-top: 20px;
  background: var(--sfia-ink-00c);
  color: #fff;
  border-radius: 14px;
  padding: 16px;
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  font-weight: 600;
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

### `features/synthese/synthese.module.css`

```css
.hero {
  background: var(--sfia-hero-synthese);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 19px 27px;
  color: #fff;
  min-height: 152px;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #9eb2ff;
  margin: 0 0 12px;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 12px;
  max-width: 720px;
}

.heroText {
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: #c9d6f5;
  margin: 0;
  max-width: 670px;
}

.heroPills {
  position: absolute;
  right: 47px;
  top: 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heroWrap {
  position: relative;
}

.heroPillDark {
  background: #303d66;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
}

.heroPillPurple {
  background: #42336b;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin: 22px 0 26px;
}

.lower {
  display: grid;
  grid-template-columns: 626px 322px;
  gap: 22px;
  align-items: start;
}

.portfolio {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 20px 18px 22px;
  min-height: 510px;
}

.portfolioHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.portfolioTitle {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 15px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  margin-bottom: 14px;
  min-height: 72px;
}

.rowDot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.rowName {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.rowSub {
  font-size: var(--sfia-meta-size);
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
  gap: 20px;
}

.panel {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-md);
  padding: 18px 19px 20px;
}

.panelTitle {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px;
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
  margin-bottom: 14px;
}
```

### `features/cycle-actif/cycle-actif.module.css`

```css
.hero {
  background: var(--sfia-hero-cycle);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 19px 27px;
  color: #fff;
  min-height: 138px;
  position: relative;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #99b8ff;
  margin: 0 0 10px;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 12px;
  max-width: 720px;
}

.heroText {
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: #ccd6f5;
  margin: 0;
}

.heroPills {
  position: absolute;
  right: 49px;
  top: 23px;
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
}

.pillBlue {
  background: #214585;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
}

.stepper {
  margin: 16px 0 22px;
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 18px;
  box-shadow: var(--sfia-shadow-sm);
  padding: 22px 23px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 92px;
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
}

.connectorPending {
  composes: connector;
  background: var(--sfia-border);
}

.lower {
  display: grid;
  grid-template-columns: 632px 316px;
  gap: 22px;
  align-items: start;
}

.work {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 21px 22px;
}

.workLabel {
  font-size: 10px;
  font-weight: 700;
  color: var(--sfia-blue);
  margin: 0 0 8px;
}

.workTitle {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
}

.workText {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  color: var(--sfia-muted);
  margin: 0 0 18px;
}

.checkRow {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 13px;
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  margin-bottom: 12px;
  min-height: 52px;
}

.checkDot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.checkLabel {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 22px;
  align-items: center;
}

.inspector {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 19px 22px;
}

.inspectorTitle {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px;
}

.fieldLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-muted);
  margin: 14px 0 4px;
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
  margin-top: 22px;
  background: #fff2f5;
  border: 1px solid #ffc9d4;
  border-radius: 16px;
  padding: 14px;
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
  margin-top: 22px;
}
```

### `features/decision/decision.module.css`

```css
.hero {
  background: var(--sfia-hero-decision);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-xl);
  padding: 19px 27px;
  color: #fff;
  min-height: 128px;
  position: relative;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  color: #adb2ff;
  margin: 0 0 10px;
}

.heroTitle {
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 12px;
}

.heroText {
  font-size: 13px;
  line-height: var(--sfia-line-body);
  color: #cfd6f2;
  margin: 0;
  max-width: 690px;
}

.heroPills {
  position: absolute;
  right: 33px;
  top: 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pillPurple {
  background: #612e66;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
}

.pillBlue {
  background: #294578;
  color: #fff;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 12px;
}

.content {
  display: grid;
  grid-template-columns: 580px 368px;
  gap: 22px;
  margin-top: 24px;
  align-items: start;
}

.evidencePanel {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-sm);
  padding: 18px 21px 22px;
}

.evidenceLabel {
  font-size: var(--sfia-meta-size-sm);
  font-weight: 700;
  color: var(--sfia-purple);
  margin: 0 0 8px;
  letter-spacing: 0.03em;
}

.evidenceTitle {
  font-size: 19px;
  font-weight: 600;
  margin: 0 0 8px;
}

.evidenceDesc {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-body);
  color: var(--sfia-muted);
  margin: 0 0 18px;
}

.decisionPanel {
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-lg);
  box-shadow: var(--sfia-shadow-md);
  padding: 18px 21px 22px;
}

.decisionTitle {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
}

.decisionHint {
  font-size: var(--sfia-meta-size);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin: 0 0 18px;
}

.option {
  background: var(--sfia-surface);
  border: 1px solid var(--sfia-border-soft);
  border-radius: 16px;
  box-shadow: var(--sfia-shadow-md);
  padding: 14px 14px 15px;
  margin-bottom: 14px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-family: var(--sfia-font);
}

.optionSelected {
  composes: option;
  border-color: var(--sfia-blue);
  box-shadow: 0 0 0 2px rgba(56, 99, 245, 0.15);
}

.optionTitle {
  font-size: 13px;
  font-weight: 600;
  margin: 12px 0 4px;
  color: var(--sfia-ink);
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
  margin-bottom: 18px;
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
  margin: 0 0 12px;
  letter-spacing: 0.03em;
}

.simulatedNote {
  font-size: var(--sfia-meta-size-sm);
  line-height: var(--sfia-line-meta);
  color: var(--sfia-muted);
  margin-top: 10px;
}
```

### `e2e/p0-polish-screenshots.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

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

test.beforeAll(() => {
  fs.mkdirSync(polishDir, { recursive: true });
});

test.describe("P0 polish captures", () => {
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

## 7. Résultats tests

| Contrôle | Résultat |
|----------|----------|
| lint | ✔ No ESLint warnings or errors |
| typecheck | ✔ |
| Vitest | ✔ 9/9 |
| build | ✔ 4 routes + redirect |
| Playwright | ✔ 10/10 (6 smoke + 4 polish captures) |
| overflow horizontal 1440 | ✔ aucun |
| axe critical/serious | ✔ aucun |

## 8. Captures

### Avant
- `.tmp-sfia-review/screenshots/before/p0-00c-nouvelle-demande-runtime.png` — 307460 B — SHA `396ec5097b15ee443524204953e5baf196e8e41c53808b7a10aefd2a8fcffdc3`
- `.tmp-sfia-review/screenshots/before/p0-01c-synthese-runtime.png` — 185321 B — SHA `a26d7f0374166705d2a83ae23ba86220c32f6900ecf5a5cda41fb44965bdc6d4`
- `.tmp-sfia-review/screenshots/before/p0-02c-cycle-actif-runtime.png` — 183912 B — SHA `40f912869dd9f2edef16e67da8b9dfef09453dc50bf00dc27e298402013261c8`
- `.tmp-sfia-review/screenshots/before/p0-03c-decision-runtime.png` — 198137 B — SHA `758395f816302dccffbd5205d3ae0ffed4e67349870dbd9d6a1778b4edfad71a`

### Après (polish)
- `.tmp-sfia-review/screenshots/polish/p0-00c-nouvelle-demande-polish.png` — 307195 B — SHA `6c26d32d1b1357aee578e32a58affbebab8f28486dbeff28dd8322bbbd01c50f`
- `.tmp-sfia-review/screenshots/polish/p0-01c-synthese-polish.png` — 187275 B — SHA `5f2143c2fcbdb8755f43bc2a87e00eacb32f064bd5c55bc430b16bbb7077e881`
- `.tmp-sfia-review/screenshots/polish/p0-02c-cycle-actif-polish.png` — 186255 B — SHA `cd6bafd174d674eaa86837bd91c8a02e76a9444fc6b82aa598d1ccc94ea2ec3d`
- `.tmp-sfia-review/screenshots/polish/p0-03c-decision-polish.png` — 199626 B — SHA `90e0319aadb892ca182f69bcdad56ae7ae0250c5801f9399e633abed778a17d9`

## 9. Matrice avant / après / Figma

| Écran | Problème initial | Correction | Avant | Après | Figma | Écart résiduel | Verdict |
|---|---|---|---|---|---|---|---|
| P0-00C | Densité form/preview ; meta 10px | Espacements + typo secondaire | before/…runtime | polish/…polish | 19:2 | Densité preview encore riche (volontaire Figma) | AMÉLIORÉ |
| P0-01C | Gaps métriques ; rowSub 11px ; rail actif fort | Gaps + muted + rail soft | before | polish | 22:2 | Écart mineur vs absolute Figma | AMÉLIORÉ |
| P0-02C | Inspector labels 10px ; check rows | Meta + paddings + min-heights | before | polish | 22:133 | Stepper copy Figma conservée | AMÉLIORÉ |
| P0-03C | Options tassées ; optionSub 11px | Respiration colonnes + typo | before | polish | 22:270 | Hauteurs colonnes non forçées égales | AMÉLIORÉ |
| Shell/nav | Double signal actif rail+tab | Rail soft + tab 2px | — | — | flush frames | Soft vs Figma fill rail = choix lisibilité documenté | CORRIGÉ |
| Copilot | Gaps/paddings denses | Body gap + paddings + line-height | — | — | panels | Largeur inchangée (pas de divergence) | AMÉLIORÉ |

## 10. Accessibilité

- Contraste muted amélioré ; focus-visible inchangé ; reduced-motion ajouté.
- axe smoke : pas de critical/serious.
- Verdict : **a11y smoke conforme** — pas ACCESSIBILITY READY.

## 11. Garde-fous

- Pas de refonte / Figma / nouvelles routes / deps / fixtures / docs projet.
- JSX écrans non modifié ; CSS + globals + e2e captures seulement.
- Aucun commit/push/PR/merge projet.

## 12. Écarts résiduels

- Pixel-perfect non revendiqué.
- Rail flush soft ≠ fill bleu Figma (arbitrage double-signal actif).
- Preview Nouvelle demande reste informationnellement dense (contenu Figma).
- 1280 / mobile hors périmètre.

## 13. Décisions Morris requises

- Validation runtime finale
- GO commit / push / PR / merge projet
- GO cleanup

## 14. Verdict

**VISUAL POLISH COMPLETE — MINOR RESIDUALS DOCUMENTED**

