# ML5 — Figma page 12 L0/L1/L2 inventory (C24)

| Champ | Valeur |
|---|---|
| FileKey | `itgvCulInEnFY6DvgIegvP` |
| Page | `12 · ML5 — Exécution & Résultats · Conception UX candidate` |
| Page node | `1209:2` |
| Session C24 | `fd5981fb-031e-4cf4-8d3a-790dc598f8cc` |
| Date | 2026-11-24 |
| Viewport dominant | 1680×970 |

## Frames 12.01–12.14

| État | Node-id | Nom | Bounds | Shell L0 | PNG SHA-256 |
|---|---|---|---|---|---|
| 12.01 | `1210:233` | Nora prépare une intervention | 1680×970 @ (100,190) | Rail Travail 246 + surface | `7148425a94e022277aedcbcb54c80091151aacff8130967f471412643b8ab731` |
| 12.02 | `1211:117` | Inspecter le contrat Cursor | 1680×970 @ (1960,190) | Visionneuse contrat | `0945e464d7615d8afdf0c4e8c9ca1b8aed96d61b82d1042668a39f4831d03417` |
| 12.03 | `1211:676` | Confirmation du lancement | 1680×970 @ (3820,190) | Overlay modal 490×230 r10 | `ab70a562fdad175682e9545a7ddc767d313a8026716994f33841533ccf3f57bc` |
| 12.04 | `1211:277` | Exécution · Historique | 1680×970 @ (100,1370) | Rail Exécution | `8d26c5488b5aacce4ad6a85d27d002733402542eff5bea3c7604cf8d8e90c8e7` |
| 12.05 | `1211:424` | Contrat d’exécution | 1680×970 @ (1960,1370) | Instruction + autorité | `5ee353c22d554ccef136c7f69140350ff7c7cd41babd547d119a71d38632a44e` |
| 12.06 | `1212:383` | Réalisation LIVE | 1680×970 @ (3820,1370) | Suivi 607 + LIVE 733 | `3b3005b4725697f277cdc1c19b9fa0bd49ebc024d7ac3f620d3dfeecefc0017f` |
| 12.07 | `1212:510` | État à réconcilier | 1680×970 @ (100,2550) | UNKNOWN ≠ échec | `e500aa92a4d5046c8c586d8c4a55474efdc97532e6b36a0dc7929f07b974563a` |
| 12.08 | `1212:637` | Synthèse du dossier | 1680×970 @ (1960,2550) | Bilans 437 + dossier 903 | `40052074ec9a23934b24f4ef73b9e8cc40418ed7313d6c2ee53a4f08985abb58` |
| 12.09 | `1212:774` | Reprendre avec Nora | 1680×970 @ (3820,2550) | Chip dossier + fil | `4c3b601ce6a26af2663a5adfe9e1d01cac41a6711972bc110b4470d69b71054a` |
| 12.10 | `1212:895` | Nora sas | 1680×970 @ (100,3730) | Rail sas personnel | `e748dcf91e359a78093ef5601140af40ad8e7792ed580ded0b7cb9de3a87948d` |
| 12.11 | `1239:613` | Livrables et tests | 1680×970 @ (1960,3730) | Onglet livrables | `7a382a9bc067c2d775df420941c06e4fcd0d809f517d2778463361af8413fa98` |
| 12.12 | `1239:680` | Git, pièces et handoff | 1680×970 @ (3820,3730) | Onglet Git & pièces | `91b07f87a911f91909bf2a5c74d431560c527c62d6f3b11643a6acd80e70a935` |
| 12.13 | `1245:757` | Écarts | 1680×970 @ (100,4910) | Onglet écarts | `c20dffdab347a93061ff0b6756e95f38e392aa68bad83b745c7e23d30d69c388` |
| 12.14 | `1250:815` | Instruction intégrale | 1680×970 @ (1960,4910) | Instruction scrollable | `88d0e7b3c104645553f819d20586bbeb286211f06626807368785a16ce708378` |

PNG natifs : `web/.sfia-evidence/figma-page12/` + `MANIFEST-SHA256.txt`.

## L1 / L2 contractuels stables

| Token / mesure | Valeur native |
|---|---|
| Fond page | `#0b101b` |
| Rail | `#0c101a`, largeur **246** |
| Surface pad | `[30,38,26,38]`, gap **18** |
| Bandeau | h **70**, pad horizontal **38**, stroke `#2b3850` |
| Accent | `#7477ed` |
| Texte fort | `#f3f5ff` |
| Texte muted | `#a3b0c7` |
| Panneaux | `#151d2c`, radius **10**, stroke `#2b3850` |
| Cartes internes | `#1b2639`, radius **8–10** |
| Modal D6 (12.03) | **490×230**, radius **10**, Oui/Non |
| Résultats split (12.08) | liste **437** + dossier **903**, gap **18** |
| Onglets | `SYNTHÈSE` / `LIVRABLES ET TESTS` / `GIT & PIÈCES` / `ÉCARTS` |
| Appréciations | 3 cartes : Cursor déclaré · D8/D9 · Nora consultative |

## Mapping produit

| Frame | Responsabilité | Composant runtime |
|---|---|---|
| 12.01 / 12.10 | Activité Nora | `NoraConversation` + activity |
| 12.02 / 12.05 / 12.14 | Inspection contrat | `ContractViewer` |
| 12.03 | Confirmation D6 | `D6ConfirmLaunch` |
| 12.04 / 12.06 / 12.07 | Tentative LIVE | `CursorRealizationSurface` mode=execution |
| 12.08 / 11 / 12 / 13 | Bilan D8 | `CursorRealizationSurface` mode=results + `RealizationBilan` |
| 12.09 | Reprendre Nora | chip `dossier-composer-attachment` + fil projet |

## Statut C24

- L0 / L1 metadata : **FAIT** (14 frames confirmées).
- L2 tokens + PNG hashés : **FAIT**.
- Transposition runtime ciblée : **FAIT** (tabs, appréciations, split résultats, chip 12.09, labels nav, modal D6).
- Fixtures visuelles : `/dev/ml5-page12-visual/{12.01…12.14}`.
- F2 runtime vs native (δ ≤ 2 CSS px) : à qualifier via captures BROWSER du harness — **PARTIEL** jusqu’aux captures runtime.

## Écarts soumis / documentés

| Écart | Traitement |
|---|---|
| Données fictives Figma (RES-007…) | Jamais injectées comme runtime LIVE |
| Rail « Exécution » vs `surface=execution` | Aligné Accès directs |
| Label « Résultats & preuves » | Aligné (&) |
| Harness ≠ shell complet 1680 | Fixtures prouvent composition ; shell complet via Studio DEV |
