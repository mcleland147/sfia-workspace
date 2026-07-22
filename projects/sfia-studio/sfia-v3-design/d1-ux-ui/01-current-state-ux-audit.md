# 01 — Current-state UX audit

## 1. Observation visuelle (Morris + captures locales)

| Observation | Statut |
|-------------|--------|
| Page « Nouvelle demande » centrée Session OPS1 | Confirmé runtime |
| Journal conversationnel = zone principale | Confirmé |
| Copilot + parcours I6 panneau droit | Confirmé |
| Hiérarchie demande/session/exécution | Confirmé |
| Large zone inutilisée à droite sur viewports > 1440 | **Mesuré** |
| Contenu ne remplit pas viewport large | **Mesuré** |
| Colonnes insuffisamment fluides | Confirmé code |
| Project/Cycle/Context/Gates peu matérialisés | Confirmé |

## 2. Preuves runtime (2026-07-22)

URL : `http://127.0.0.1:3020/nouvelle-demande`
Captures : `.tmp-sfia-review/screenshots-d1-ux/runtime-{1728,1440,1280,1024}.png`
Métriques : `.tmp-sfia-review/screenshots-d1-ux/runtime-metrics.json`

| Viewport | pageWidth CSS | unusedRight | scrollWidth | h1 |
|----------|---------------|-------------|-------------|-----|
| 1728 | 1440px | **288px** | 1728 | Nouvelle demande |
| 1440 | 1440px | 0 | 1440 | Nouvelle demande |
| 1280 | 1440px | -160 (overflow H) | **1440** | Nouvelle demande |
| 1024 | 1440px | -416 (overflow H) | **1440** | Nouvelle demande |

Rail = 64px · Copilot = 340px · Main ≈ 1376px (dans shell 1440).

## 3. Cause technique confirmée (lecture code, non corrigée)

Fichiers : `app/styles/shell.module.css`, `app/styles/tokens.css`.

- `.page { min-width: 1440px; }`
- `.pageFloating` / `.pageFlush` : `width: 1440px; height: 1024px;`
- Tokens layout figés sur référence Figma P0 1440×1024 (`--sfia-canvas-width-flush: 972px`, `--sfia-copilot-width-flush: 340px`, etc.)
- Grid floating à largeurs fixes, pas `minmax(0,1fr)` + clamp rail contextuel.

**Conclusion :** le shell est un **cadre artboard 1440×1024**, pas un layout fluide viewport. Sur 1728 → bande vide ; sur <1440 → scroll horizontal.

## 4. Écart doctrinal

| Doctrine D1 | Runtime actuel |
|-------------|----------------|
| Project-first | Session/Demande-first |
| Cycle Header / MethodMode | Badge mode partiel OPS1 ; pas Cycle métier |
| Contextual rail = Context/Reserves/Decisions | Copilot + I6 steps |
| Chat = composant GuidedSession | Chat = centre produit |
| E0–E4 language | Gates action OPS1, pas langage E0–E4 D1 |

## 5. Recommandation UX (hors correction code)

Remplacer artboard fixe par shell fluide (doc 04) ; Project Cockpit pivot ; Copilot → ContextualRail doctrinal.
