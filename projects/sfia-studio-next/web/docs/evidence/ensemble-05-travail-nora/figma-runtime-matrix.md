# Ensemble 05 — matrice Figma ↔ runtime (consolidation 17/11/2026)

Session Figma MCP: `55ab43e8-d2bd-4208-a214-6b2356fa9d42`
Viewport desktop conception: **1680×970**. Mobile: **430×932**.
F2: cible 0 px, max 2 CSS px sur rectangles stables comparables.

## Contrat visuel extrait (metadata Figma)

| Node | Nom | W×H |
|---|---|---|
| 700:39 | Conversation nominale | 1680×970 |
| 701:62 | Fil long | 1680×970 |
| 701:105 | Composite / choix | 1680×970 |
| 701:148 | Choix expirés | 1680×970 |
| 701:191 | Compositeur multiligne | 1680×970 |
| 701:234 | Activité | 1680×970 |
| 701:277 | Erreur | 1680×970 |
| 701:320 | Incertain | 1680×970 |
| 701:363 | Viewer D4 50/50 | 1680×970 |
| 701:406 | Viewer Git | 1680×970 |
| 701:449 | Viewer agrandi | 1680×970 |
| 701:492 | Indisponible | 1680×970 |
| 701:535 | Mobile conversation | 430×932 |
| 701:537 | Mobile viewer | 430×932 |
| 708:98 | Activité historique | 1680×970 |
| 708:199 | Échec envoi | 1680×970 |

Repères conception: rail 246; composer 972×84; bottoms 857=857; split ~668/668.

## Matrice de conformité

| Frame | Runtime | Viewport | Capture Figma | Capture runtime | Mesures / delta | Statut | Réserve |
|---|---|---|---|---|---|---|---|
| 700:39 | Travail nominal | 1680×970 | figma-700-39-nominal.png | runtime-nominal-1680x970.png | viewports égaux; F2 px-par-px non certifié global | partiel | géométrie F2 non exhaustive |
| 701:62 | fil long + scroll e2e | 1680×970 | — | — | comportement PASS e2e | partiel | capture dédiée absente |
| 701:105 | choix typés | 1680×970 | figma-701-105-composite.png | runtime-nominal | choix PASS e2e | partiel | |
| 701:148 | choix expirés | 1680×970 | figma-701-148-expired.png | e2e actionable=0 | comportement PASS | partiel | |
| 701:191 | multiligne | 1680×970 | — | — | implémenté | non observé | |
| 701:234 | activité V1 | 1680×970 | — | — | preparing honnête | partiel | pas d'étapes mid-flight |
| 701:277 | erreur | 1680×970 | — | — | UI erreur | non observé | |
| 701:320 | ACK/UNKNOWN | 1680×970 | figma-701-320-uncertain.png | e2e C2 | freeze+pending PASS | partiel | |
| 701:363 | viewer D4 50/50 | 1680×970 | figma-701-363-viewer5050.png | e2e split | layout+contenu PASS; C1 révision exacte PASS | partiel | F2 split non mesuré px |
| 701:406 | viewer Git | 1680×970 | — | API branchée | chemin D9 existant | partiel | Git REAL NOT EXECUTED |
| 701:449 | agrandi | 1680×970 | figma-701-449-enlarged.png | e2e enlarged | PASS | partiel | |
| 701:492 | indisponible | 1680×970 | — | UI unavailable | honnête | partiel | |
| 701:535 | mobile | 430×932 | figma-701-535-mobile.png | runtime-mobile-430x932.png | viewports égaux | partiel | |
| 701:537 | mobile viewer | 430×932 | — | — | fermer=retour | non observé | |
| 708:98 | activité hist. | 1680×970 | — | — | details post-terminal | partiel | |
| 708:199 | échec envoi | 1680×970 | — | e2e C2 ACK | comportement | partiel | |

**Verdict visuel:** `FIGMA TO RUNTIME ALIGNED` **non déclaré** — preuves critiques (choix, incertitude, viewer, mobile) présentes; F2 ≤2px non certifié sur 16/16.
