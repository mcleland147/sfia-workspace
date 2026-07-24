# 02 — Parcours utilisateurs et modèle de navigation

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
| **Document** | `02-user-flows-and-navigation-model.md` |

## 1. Modèle de navigation

```
[Conversation Option A]
     ├─ En-tête Project (A)
     ├─ Fil dominant (B)
     ├─ Panneau LPS (C) / Sheet mobile
     ├─ Confirmations (D) overlays
     └─ Détails (E) drawers secondaires
```

- Pas de nav latérale multi-apps comme entrée.
- OPS1 : hors Option A (audit/historique seulement si gate futur).
- Trajectoire : panneau + détail, **pas** stepper principal.

## 2. Catalogue des 38 parcours

| # | Parcours | Surface / état | Frame ref |
|---|----------|----------------|-----------|
| 1 | Démarrage sans Project | Empty + composer | OA-01 (variante) |
| 2 | Intention claire | Proposition Project | OA-01 |
| 3 | Intention ambiguë | Clarification questions | doc + pattern 03 |
| 4 | Rapprochement Project existant | Options match | pattern Decision |
| 5 | Création Project N2 | Confirmation N2 | OA-04 |
| 6 | DoctrinePackage résolu | Badge / panneau | OA-02 |
| 7 | DoctrinePackage invalide | Erreur bloquante | OA-10 |
| 8 | CKC detailed | Opaque « contexte chargé » | OA-02 |
| 9 | CKC synthetic silencieux | Pas d’UI CKC | — |
| 10 | CKC indisponible | Erreur CKC_UNAVAILABLE | pattern 07 |
| 11 | Qualification proposée | Carte qualification | OA-02 |
| 12 | Acknowledgment Critical | Action explicite | OA-03 |
| 13 | Clarification progressive | Q/R adaptatives | OA-01→02 |
| 14 | Construction LPS | Panneau rempli | OA-02 |
| 15 | Contradiction non bloquante | Badge Réserve | OA-02 |
| 16 | Contradiction bloquante | Gate + stop | OA-03 |
| 17 | Trajectoire candidate | TrajectorySummary | OA-02 |
| 18 | Comparaison d’options | Options cards | OA-03 |
| 19 | Recommandation | Badge Recommandation | OA-03 |
| 20 | HumanDecision | DecisionCard | OA-03 |
| 21 | Décision avec réserves | Decision + Réserves | OA-03 |
| 22 | Refus de décision | État refuse | pattern 05 |
| 23 | Confirmation N1 | Confirm légère | pattern 05 |
| 24 | Confirmation N2 | Dialog | OA-04 |
| 25 | Confirmation N3 | Modale stricte | OA-05 |
| 26 | ExecutionContract préparé | ContractCard | OA-06 |
| 27 | Agent sans capacité | CAPABILITY_MISSING | pattern 07 |
| 28 | Autorité refusée | AUTHORITY_DENIED | pattern 07 |
| 29 | Exécution en cours | ExecutionStatus | OA-07 |
| 30 | Exécution réussie | Completed | OA-09 path |
| 31 | Exécution échouée | Failed | pattern 07 |
| 32 | Timeout | EXECUTION_TIMEOUT | pattern 07 |
| 33 | Preuves incomplètes | Evidence incomplete | OA-08 |
| 34 | ReviewBundle complet | Bundle card | OA-09 |
| 35 | Mise à jour LPS | Panneau refresh | OA-09 |
| 36 | Replanification | REPLAN_REQUIRED | pattern 07 |
| 37 | Clôture CycleInstance | Résumé + close | pattern 02 |
| 38 | Poursuite Project | Next step | OA-09 |

## 3. Prototype navigable

Chaîne Figma : OA-01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10.
Starting point : `Option A · parcours nominal` sur `11:3`.

## 4. Retours / annulations

- N2/N3 : Annuler / Renoncer retour conversation.
- Erreur bloquante : composer limité aux actions de reprise.
- Supersession décision : DecisionCard état superseded.
