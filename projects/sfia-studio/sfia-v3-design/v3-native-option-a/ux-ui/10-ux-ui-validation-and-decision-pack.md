# 10 — Pack de validation UX/UI et décisions candidates

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
| **Document** | `10-ux-ui-validation-and-decision-pack.md` |

## 1. Décisions candidates UX-OA

| Id | Proposition | Statut |
|----|-------------|--------|
| UX-OA-01 | Valider le contrat UX/UI Option A (docs 01–09 + Figma) | **candidate** |
| UX-OA-02 | Structure conversation dominante + panneau vivant | candidate |
| UX-OA-03 | Hiérarchie LPS panneau (doc 04) | candidate |
| UX-OA-04 | Patterns épistémiques 8 types | candidate |
| UX-OA-05 | Matérialisation HumanDecision obligatoire | candidate |
| UX-OA-06 | Patterns N1 / N2 / N3 | candidate |
| UX-OA-07 | Présentation ExecutionContract métier (MD = adaptateur) | candidate |
| UX-OA-08 | Evidence + ReviewBundle (synthèse ≠ bundle) | candidate |
| UX-OA-09 | Responsive 1440 / 1280 / 1024 sheet / 390 | candidate |
| UX-OA-10 | Catalogue composants doc 08 | candidate |
| UX-OA-11 | Prototype page Option A = référence visuelle | candidate |
| UX-OA-12 | Ordre recommandé : validation UX → modeled | candidate |

*Aucune validation Morris explicite dans ce cycle.*

## 2. Contrat vers modeled (besoins, pas schémas)

Données visibles · états · variantes · statuts · actions · timestamps · actor · provenance · erreurs · confirmations · permissions · relations · historique · pagination · streaming · stale/conflict · hints responsive non normatifs.

## 3. Contrat vers architecture technique (besoins)

Streaming · attentes perçues · optimisme interdit sur mutation/exec · async · reprise · cache visible · sync LPS · conflit · notification · audit · a11y dynamique · upload · perf perçue.

## 4. Slices delivery candidates (non roadmap)

| Slice | Contenu |
|-------|---------|
| UX-A0 | Shell conversation + panneau vide |
| UX-A1 | Intention + clarification + épistémique |
| UX-A2 | Project + LPS + qualification |
| UX-A3 | Trajectoire + décision + N1–N3 |
| UX-A4 | ExecutionContract + statut |
| UX-A5 | Evidence + ReviewBundle + replan |

## 5. Inconnues / réserves / dette

| Id | Item |
|----|------|
| UX-U01 | Frame 1024 dédiée non produite (comportement sheet décrit) |
| UX-R01 | A11y runtime non prouvée |
| UX-R02 | Library Figma composants non formalisée |
| UX-R03 | Toutes les 14 erreurs pas chacune une frame dédiée |
| UX-D01 | Dette runtime historique cockpit / MethodMode |

## 6. Maturité

DOCUMENTED + prototyped · **candidate** · pas READY FOR MODELED · pas READY FOR DELIVERY.

## 7. Anti-claims

Pas UX VALIDATED · Pas DESIGN FINAL · Pas READY FOR MODELED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas RUNTIME MATCHES FIGMA · Pas VISUAL PARITY CONFIRMED · Pas OPTION A IMPLEMENTED.

## 8. Gate suivant

Après Morris : `GO VALIDATION UX/UI — SFIA STUDIO V3-NATIVE OPTION A`
Puis : `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A`

## 9. Verdict

**SFIA STUDIO V3-NATIVE OPTION A UX/UI DOCUMENTED AND PROTOTYPED — MORRIS VALIDATION REQUIRED**
