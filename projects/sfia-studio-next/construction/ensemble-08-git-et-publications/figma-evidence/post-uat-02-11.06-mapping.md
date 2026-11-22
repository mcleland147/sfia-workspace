# POST-UAT 02 — Mapping Figma 11.06 → runtime

| Champ | Valeur |
| --- | --- |
| File | `itgvCulInEnFY6DvgIegvP` |
| Frame | `1095:339` — 11.06 · Intégrations — connexion GitHub active |
| Viewport ref | 1680×970 |
| PNG natif | `11.06-integrations-github-connected.png` |
| SHA256 | `d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335` |
| Session Figma | `8c88836d-7841-4c10-94a6-f2c482a7ade1` |

## Mapping nœud → React/DOM → CSS → assertion

| Node | Rôle | DOM / React | CSS | Assertion |
| --- | --- | --- | --- | --- |
| `1095:339` | Frame écran | shell + `/settings/integrations` | — | viewport 1680×970 |
| `1095:340` | Rail personnel 246 | `data-testid=studio-rail` | rail variant personnel | width 246 ±2 |
| `1095:334` | Nav Intégrations active | `nav-integrations.is-active` | `.studio-rail-nav-item.is-active` + `--fig-accent-bg` | class `is-active` |
| `1095:353` | Topbar 70 | shell header | shell | h≈70 (shell) |
| `1095:355` | Contenu x284 w1358 | `integrations-1106-page` / panel | max-width 1358 · shell inset | x≈284 w≈1358 ≤2px |
| `1095:357..359` | En-tête + microcopy | `integrations-1106-header` | eyebrow/title/lead | textes Figma |
| `1095:360` | Bandeau vert | `integrations-status-banner` | `.is-ok` → `--fig-ok-bg`/`--fig-ok` | computed rgb(23,56,47)/(108,219,186) |
| `1095:363` | Panneau GitHub 858 | `github-integration-card` | grid 858fr | w≈858 ≤2px |
| `1095:368+` | Cartes dépôts | `repo-list` / `integration-repo-*` | `.integrations-1106-repo` | données réelles provider (0..n) |
| `1095:375` | Actualiser les accès | `refresh-repos` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:377` | Déconnecter GitHub | `disconnect-github` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:379` | Panneau portée 482 | `integrations-explain-column` | grid 482fr | w≈482 ≤2px |
| `1095:380..389` | Microcopy droite | SCOPE_CARDS | — | 3 cartes Figma |

## F2 1680×970 (mesures runtime)

Voir `runtime/runtime-11.06-dom-measures.json`.

| Rectangle | Figma | Runtime | Δ | F2 ≤2 |
| --- | --- | --- | --- | --- |
| Rail w | 246 | 246 | 0 | PASS |
| Contenu x | 284 | 284.39 | 0.39 | PASS |
| Contenu w | 1358 | 1357.22 | 0.78 | PASS |
| GitHub card w | 858 | 857.48 | 0.52 | PASS |
| Explain w | 482 | 481.73 | 0.27 | PASS |
| Boutons | 205×42 | 205×42 | 0 | PASS |

## Réserves

- Repo cards : maquette montre 2 exemples ; runtime affiche N dépôts provider (SCRIPTED/REAL) — **pas d’invention**.
- G5 pixel-diff image globale : non utilisé comme critère unique ; F2 géométrie + styles computed + captures régionales.
- Hauteur panneaux / y : corrigés en FINALISATION — voir `finalisation-11.06-g5-matrix.md` (h=610 · y Δ0.22).
