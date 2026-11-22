# FINALISATION — Figma 11.06 G5 matrix (1680×970)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-22 Europe/Paris |
| File / node | `itgvCulInEnFY6DvgIegvP` / `1095:339` |
| Session Figma | `19ec70b7-b1f9-471d-82da-5b82221cdf4f` |
| PNG oracle SHA256 | `d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335` |
| Mesures | `runtime/runtime-11.06-dom-measures.json` |

## F2 rectangles stables (absolu viewport)

| Rectangle | Figma | Runtime | Δ | F2 ≤2 |
| --- | --- | --- | --- | --- |
| Rail w | 246 | 246 | 0 | PASS |
| Contenu x | 284 | 284.39 | 0.39 | PASS |
| Contenu w | 1358 | 1357.22 | 0.78 | PASS |
| Banner h | 44 | 44 | 0 | PASS |
| GitHub card w | 858 | 857.48 | 0.52 | PASS |
| GitHub card h | 610 | 610 | 0 | PASS |
| GitHub card y | 293 | 292.78 | 0.22 | PASS |
| Explain w | 482 | 481.73 | 0.27 | PASS |
| Explain h | 610 | 610 | 0 | PASS |
| Boutons | 205×42 | 205×42 | 0 | PASS |

## Causes corrigées (ce lot)

- `min-height: 610px` sur `.integrations-1106-card` (viewport ≥1280)
- Banner `min-height: 44px` + `line-height: 16px` (était ~45.5)
- Header `gap: 8px` pour y panneaux ≈293

## Variantes documentées

- Note WRITE (`integrations-write-boundary`) : hors maquette Figma ; microcopy Pilote non cockpit ; peut étendre h>610 si contenu dense — autorisé.
- Rail shell global : responsabilité partagée ; non modifié ce lot (w=246 conforme).
- Repos listés = provider réel (pas d’invention de 2e dépôt fixture).

## Viewports exercés

1680×970 · 1280×970 · 390×844 · 320×568 · zoom 200 % — captures sous `runtime/`.
