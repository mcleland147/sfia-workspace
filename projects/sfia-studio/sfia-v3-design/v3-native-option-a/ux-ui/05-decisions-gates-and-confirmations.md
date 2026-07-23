# 05 — Décisions, gates et confirmations N1–N3

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
| **Document** | `05-decisions-gates-and-confirmations.md` |

## 1. HumanDecision

Une phrase libre **n’est pas** une décision. Matérialisation obligatoire :

- options présentées ;
- impacts ;
- recommandation (distincte) ;
- réserves ;
- décision retenue ;
- acteur ;
- timestamp ;
- supersession / refus.

Surface : `DecisionCard` (OA-03).

## 2. Gates

Gate bloquant = Zone D + fil + panneau.
Retour clarification si décision refusée ou incomplete.

## 3. Niveaux de confirmation

### N1 — faible risque, réversible

- Confirmation légère (inline / toast action).
- Annulation rapide.
- Focus : bouton principal + Esc.

### N2 — mutation persistante / impact significatif

- Dialog plein cadre (OA-04).
- Résumé des effets.
- Boutons distincts Confirmer / Annuler.
- Expiration affichée si applicable.
- Anti double-soumission : disabled après submit.

### N3 — structurant / externe / irréversible

- Modale stricte (OA-05).
- Impacts détaillés · scope · preuve · avertissement.
- Confirmation explicite forte.
- Renoncer clairement.
- Focus trap ; Esc = renoncer.
- État déjà exécuté : lecture seule.

## 4. Labels (candidats FR)

| Niveau | Primary | Secondary |
|--------|---------|-----------|
| N1 | Confirmer | Annuler |
| N2 | Confirmer la mutation | Annuler |
| N3 | Je confirme l’action irréversible | Renoncer |

## 5. Matrice autorités (FA-OA-05)

La surface UX doit rendre visibles : capacité · autorité · confirmation · mutation · exécution · promotion maturité — sans exposer l’implémentation.
