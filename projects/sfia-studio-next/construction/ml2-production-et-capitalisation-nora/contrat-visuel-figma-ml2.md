# ML2 — Contrat visuel extrait (Figma read-only)

| Métadonnée | Valeur |
| --- | --- |
| Fichier | `itgvCulInEnFY6DvgIegvP` |
| Session MCP | `db5ff300-d435-4edc-affa-12ad764571b9` |
| Date extraction | 2026-11-05 (Europe/Paris) |
| Édition Figma | AUCUNE |

## Frames prioritaires consultées

| Frame | node-id | Extraction |
| --- | --- | --- |
| Conversation 03 | `94:214` | get_design_context — structure rail / fil / contexte ; tokens `#0a0e17`, `#0d111b`, `#151c29`, `#1a2130`, `#252d40`, accent `#afa5ff` / `#656fe1`, ok `#a6dfbc`, warn `#ebc789` |
| Sujets 97 | `160:751` | get_screenshot — Journal Sujets |
| Autres (04, 05, 18, 14, 98–100, 205, 206) | listés au contrat ML2 | NON EXTRAITS exhaustivement dans ce cycle — référence SPEC §6.9 |

## Correspondance runtime

| Surface code | Pattern Figma | Conformité déclarée |
| --- | --- | --- |
| Rail layout.tsx + nav Travail/Journal/Document | Rail 240px + navigation | PARTIEL — pas de rail projet complet ni Trajectoire |
| SafeMarkdown + bulles Nora/Pilote | Message composite 03 | PARTIEL — markdown utile, pas tous les blocs INVESTIGATION/COMPARAISON structurés UI |
| Journal Sujets + split minimal | 97 / séparation GAP | PARTIEL — composition minimale sans nouvelle frame |
| Tokens globals.css | palette 03 | CONFORME tokens de base |
| Viewports 1680/1280/390/320 + a11y matrix | contrat transposition | PREUVE MANQUANTE (captures smoke seulement) |

**Aucun verdict de fidélité forte.** Aucune modification Figma.
