# Figma L0–L2 — POST-UAT 01 (E08)

- File key: `itgvCulInEnFY6DvgIegvP`
- Session: `80b0f865-9353-4318-b761-d912f7b37cbe`
- Date: 2026-11-22
- Method: MCP `get_metadata` (L0/L1 structure + dimensions). Runtime pixel G5 ≤2px : **NOT PROVEN** (Morris UAT).

## Frames

| Frame | Node | Size | Notes |
|---|---|---|---|
| 11.01 Aucun dépôt | `1093:9` | 1680×970 | Zone contenu 1358 ; panneaux 848 + 492 ; hero « Dépôts Git » |
| 11.02 Gestion multi-dépôts | `1094:71` | 1680×970 | Hero « Gérer les dépôts… » ; main 848×600 ; side 492×600 ; 2 dépôts **fictifs** |
| 11.03 Explorateur 30/70 | `1094:172` | 1680×970 | Tree 406 / preview 934 ; actions Infos · GitHub · Agrandir — **état Infos ouvert non dessiné** |
| 11.06 Intégrations connecté | `1095:339` | 1680×970 | Badge Connecté ; liste dépôts ; Actualiser / Déconnecter ; colonne droite |
| 11.07 / 11.13 | (confirm) | — | Confirmation avant mutation locale (déconnexion / retrait) |

## Mapping runtime

| Figma | DOM / composant |
|---|---|
| Hero Dépôts Git | `GitRepositoriesSurface` `[data-testid=git-hero]` (chrome ProjectChrome breadcrumb-only) |
| Empty 11.01 | `[data-testid=git-empty]` |
| Manage 11.02 | `[data-testid=git-manage]` |
| Explorer 11.03 | `.git-split-3070` + `[data-testid=git-preview]` |
| Infos (ouvert) | `GitFileInfoPopover` `[data-testid=git-file-infos]` — **candidat UX** (pas d’état Figma validé) |
| Intégrations 11.06 | `IntegrationsPanel` `[data-testid=integrations-panel]` |

## Réserves

- FIGMA ALIGNED **non annoncé** : pas de captures runtime mesurées ce cycle.
- Différence de données CampusFlow (1 dépôt) vs maquette 11.02 (2) : **pas un défaut visuel**.
- Infos : si Morris exige un état Figma normatif → **DESIGN DECISION REQUIRED — MORRIS**.
