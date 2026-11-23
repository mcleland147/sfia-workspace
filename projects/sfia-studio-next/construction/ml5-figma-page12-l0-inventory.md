# ML5 — Figma page 12 L0 inventory

| Champ | Valeur |
|---|---|
| FileKey | `itgvCulInEnFY6DvgIegvP` |
| Page | `12 · ML5 — Exécution & Résultats · Conception UX candidate` |
| Page node | `1209:2` |
| Session | `1f980882-5f58-4528-ab1b-9f310ffe135b` |
| Date | 2026-11-23 |
| Viewport dominant | 1680×970 |

## Frames 12.01–12.14

| État | Node-id | Nom | Bounds | Shell observé (L0) |
|---|---|---|---|---|
| 12.01 | `1210:233` | Nora prépare une intervention | 1680×970 @ (100,190) | Fil Nora + activité préparation contrat |
| 12.02 | `1211:117` | Inspecter le contrat Cursor | 1680×970 @ (1960,190) | Visionneuse 50/50 contrat |
| 12.03 | `1211:676` | Confirmation du lancement · contrat de fond | 1680×970 @ (3820,190) | **Seul overlay** de la page (`Modal / Confirmer le lancement` Oui/Non) |
| 12.04 | `1211:277` | Exécution · Historique des interventions | 1680×970 @ (100,1370) | Liste interventions / tentatives |
| 12.05 | `1211:424` | Contrat d’exécution · Instruction et autorité | 1680×970 @ (1960,1370) | Fiche contrat + autorité |
| 12.06 | `1212:383` | Réalisation en cours · LIVE Cursor SDK | 1680×970 @ (3820,1370) | LIVE observé |
| 12.07 | `1212:510` | Réalisation · État à réconcilier | 1680×970 @ (100,2550) | UNKNOWN / réconciliation |
| 12.08 | `1212:637` | Résultats & preuves · Synthèse du dossier | 1680×970 @ (1960,2550) | Bilan onglet synthèse |
| 12.09 | `1212:774` | Reprendre avec Nora | 1680×970 @ (3820,2550) | Retour fil Nora + ref bilan |
| 12.10 | `1212:895` | Nora travaille dans le sas | 1680×970 @ (100,3730) | Activité sas sans projet fictif |
| 12.11 | `1239:613` | Résultats & preuves · Livrables et tests | 1680×970 @ (1960,3730) | Onglet livrables/tests |
| 12.12 | `1239:680` | Résultats & preuves · Git, pièces et handoff | 1680×970 @ (3820,3730) | Onglet Git/pièces |
| 12.13 | `1245:757` | Résultats & preuves · Écarts | 1680×970 @ (100,4910) | Onglet écarts |
| 12.14 | `1250:815` | Contrat Cursor · Instruction intégrale | 1680×970 @ (1960,4910) | Instruction scrollable intégrale |

## Mapping initial produit → composant

| Frame | Responsabilité | Composant runtime | Assertion cible |
|---|---|---|---|
| 12.01 / 12.10 | Activité Nora | activity GET + fil | nature ANNOUNCED≠OBSERVED |
| 12.02 / 12.05 / 12.14 | Inspection contrat | `ContractViewer` | fingerprint + instruction full |
| 12.03 | Confirmation D6 | dialog Oui/Non | Non = aucun effet |
| 12.04 / 12.06 / 12.07 | Tentative LIVE | attempt GET / reconcile | pas de faux SUCCESS |
| 12.08 / 11 / 12 / 13 | Bilan D8 | `RealizationBilan` | 9 rubriques / 4 onglets |
| 12.09 | Discuter Nora | draft ref bilan | pas d'envoi auto |

## Statut L1/L2

- L0 : **FAIT** (node-ids natifs).
- L1 metadata : **FAIT** — `get_metadata` page `1209:2` (session `c2ce3ba7-75cb-4509-a7d0-2699722fabdb`) ; 14 frames 1680×970 confirmées.
- L1 design context : **PARTIEL** — `get_design_context` frame **12.02** (`1211:117`) acquis (rail 246px, tokens `--bg/#0b101b`, `--accent/#7477ed`, panneaux 50/50, engagements 4, volets 6).
- L2 tokens/assets PNG hashés pour les 14 états : **INCOMPLET**.
- F2 runtime vs native : **NOT PROVEN** (pas de capture BROWSER servie ce cycle).
- Note structure : Figma page 12 expose **Exécution** et **Résultats & preuves** dans Accès directs — runtime actuel mappe le parcours Cursor sur `?surface=publication` (libellé Résultats) sans nouveau shell ; écart rail « Exécution » documenté.
