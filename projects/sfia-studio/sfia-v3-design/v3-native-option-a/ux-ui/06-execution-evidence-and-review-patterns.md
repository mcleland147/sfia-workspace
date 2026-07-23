# 06 — ExecutionContract, exécution, Evidence, ReviewBundle

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
| **Document** | `06-execution-evidence-and-review-patterns.md` |

## 1. ExecutionContract (domaine F)

Carte métier (OA-06) :

- action proposée ;
- cible / périmètre ;
- agent + capacités ;
- contraintes / stop conditions ;
- preuve attendue ;
- statut préparation.

**Interdit** : présenter le Markdown Cursor comme contrat natif.
Lien secondaire « Voir export adaptateur » (domaine G) uniquement.

## 2. Exécution (OA-07)

| Statut | UI |
|--------|-----|
| prepared | ContractCard ready |
| executing | Progress + attempt |
| succeeded | Outcome + preuves |
| failed | EXECUTION_FAILED |
| timeout | EXECUTION_TIMEOUT |
| cancelled | Annulation tracée |

Reprise / non-reprise selon stop conditions.

## 3. Evidence (domaine H)

| État | Signal |
|------|--------|
| jointe | EvidenceCard |
| attendue | liste manquante |
| manquante | EVIDENCE_INCOMPLETE |
| stale | badge stale |
| liée décision/contrat | liens Zone E |

## 4. ReviewBundle

- Complet (OA-09) : claim accepté possible.
- Incomplet (OA-08) : **synthèse seule ≠ bundle**.
- Claim refusé : visible + next step.

## 5. Post-exécution

Mise à jour LPS (projection) · next step · éventuelle replanification.
