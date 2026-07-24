# 09 — Frames Figma, prototype et preuves visuelles

| Champ | Valeur |
|-------|--------|
| **Statut** | UX/UI **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/ux-ui` |
| **Gate consommé** | `GO UX/UI — SFIA STUDIO V3-NATIVE — OPTION A` |
| **FA capitalisée** | FA-OA-01…05 **VALIDATED BY MORRIS** |
| **FD capitalisées** | FD-OA-01…06 |
| **Décisions UX CC** | CC-D01, CC-D03, CC-D05, CC-D06, CC-D12, CC-D13 |
| **Figma fileKey** | `8xR5zSTfGtEVZSr6KK8Gww` |
| **Page Option A** | `SFIA Studio v3-native — Option A` (`11:2`) |
| **Anti-claims** | Pas UX VALIDATED · Pas DESIGN FINAL · Pas READY FOR MODELED · Pas READY FOR DELIVERY · Pas RUNTIME MATCHES FIGMA · Pas OPTION A IMPLEMENTED |
| **Code / schemas / SQL / runtime** | **Interdits** |
| **Document** | `09-figma-frames-prototype-and-visual-evidence.md` |

## 1. Fichier cible (vérifié MCP)

| Champ | Valeur |
|-------|--------|
| fileKey | `8xR5zSTfGtEVZSr6KK8Gww` |
| URL | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
| Page archive | `D1 — Conversational Convergence (LF)` · `0:1` · **non modifiée** |
| Page Option A | `SFIA Studio v3-native — Option A` · `11:2` |
| Prototype start | `Option A · parcours nominal` → `11:3` |

## 2. Frames produites

| Frame | node-id | W×H | URL | Parcours |
|-------|---------|-----|-----|----------|
| OA-00 Foundations | `11:291` | 900×280 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-291) | Principes |
| OA-01 Intention | `11:3` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-3) | 1–2, 13 |
| OA-02 LPS | `11:31` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-31) | 6, 11, 14, 17 |
| OA-03 Décision/gate | `11:62` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-62) | 12, 18–21 |
| OA-04 N2 | `11:91` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-91) | 5, 24 |
| OA-05 N3 | `11:117` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-117) | 25 |
| OA-06 ExecutionContract | `11:140` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-140) | 26 |
| OA-07 Exécution | `11:167` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-167) | 29 |
| OA-08 Evidence incomplete | `11:192` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-192) | 33 |
| OA-09 ReviewBundle | `11:213` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-213) | 34–35, 38 |
| OA-10 DOCTRINE_UNRESOLVED | `11:238` | 1440×1024 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-238) | 7 |
| OA-11 Mobile | `11:260` | 390×844 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-260) | Responsive |
| OA-12 1280 | `11:272` | 1280×800 | [lien](https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=11-272) | Responsive |

## 3. Prototype

Réactions ON_CLICK chaînées OA-01→…→OA-10 (API `actions`).

## 4. Screenshots MCP

Stockage local review : `.tmp-sfia-review/option-a-ux-ui-evidence/screenshots/`

| Fichier | Frame |
|---------|-------|
| OA-01-intention.png | Intention |
| OA-02-lps.png | LPS |
| OA-03-decision.png | Décision |
| OA-04-n2.png | N2 |
| OA-05-n3.png | N3 |
| OA-06-contract.png | ExecutionContract |
| OA-07-execution.png | Exécution |
| OA-08-evidence-incomplete.png | Evidence |
| OA-09-reviewbundle.png | ReviewBundle |
| OA-10-doctrine-error.png | Erreur |
| OA-11-mobile.png | Mobile |

## 5. Comparaison UX 87–89

| Conservé | Étendu / Option A |
|----------|-------------------|
| Conversation + panneau | LPS ownership C explicite |
| N2 / N3 | ExecutionContract natif |
| Gates fail-closed | Evidence / ReviewBundle |
| Anti-formulaire CKC | Isolation OPS1 / FA-OA-04 |
| Dimensions 1440/1280/390 | Page dédiée Option A |

Runtime historique : actifs conversationnels réutilisables ; dette cockpit / MethodMode **à ne pas reproduire**.

## 6. Runtime capture

`Runtime capture: not applicable — documentation/Figma-only cycle.`
