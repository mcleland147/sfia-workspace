# E3 Figma ↔ runtime comparison (candidate qualify build)

| Élément | Attendu Figma | Runtime | Statut | Preuve/réserve |
|---|---|---|---|---|
| Rail personnel | 246 px (`1334:70`) | 246 px (`f1-rail-personal.json`) | PASS F1/F2 (0 px) | `runtime-portfolio-rail.png` |
| Rail projet / Travail | 246 px (`700:40`) | 246 px (`f1-rail-project.json`) | PASS F1/F2 (0 px) | `runtime-travail-full.png` |
| Pied rail Paramètres | présent (`1334:99`) | `rail-settings-trigger` + popover | PASS | `runtime-rail-settings.png` |
| Panneau En bref / Repères | `1405:610` — récents + points | `travail-aside-recents` présent | PARTIEL | empty state possible sans consultations ; structure OK |
| Typographie fil | lisible | body 12.5px / lh 1.65 | PASS | `ml5-ux-refinements-browser/typography-measures.json` |
| Animation SAS | ring spin pending | animationName + transform change | PASS | `sas-nonreg.json` |
| Conversation rail 240 | mandat F1 texte 240 | Figma Travail `700:40` = **246** | ALIGN FIGMA | valeur 246 retenue (contrat visuel lu) |

Frames réellement lues : `700:39`, `1405:610`, `1334:70` (session Figma `c5075664-fd55-42da-a224-1a306c06cc2b`).
