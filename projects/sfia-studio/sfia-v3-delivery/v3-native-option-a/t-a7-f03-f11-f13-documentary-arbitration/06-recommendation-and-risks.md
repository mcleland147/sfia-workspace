# 06 — Impacts, risques et séquence (post-décision)

| Champ | Valeur |
|-------|--------|
| **Statut** | décisions F03.3 / F11.2 / F13.4 **enregistrées** |
| **Autorisation technique** | **aucune** |

## 1. Décisions (rappel)

| Domaine | Choix | Statut |
|---------|-------|--------|
| F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
| F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
| F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
| Combo | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |

## 2. Impacts

| Impact | Effet |
|--------|-------|
| Prep technique | bloquée tant que set F03.3 non satisfait / non borné |
| API | exigence lecture/readiness future · pas d’implémentation maintenant |
| UI admin | non exigée |
| Historique | cible hybrid Git + RO bornée · pas d’implémentation maintenant |
| OPS1 | isolation avant retrait (D04) · pas de mod code |

## 3. Risques résiduels

| Risque | Mitigation |
|--------|------------|
| Confusion « décidé = prêt à coder » | anti-claims · gate integrate ≠ prep |
| Extension write API | gate mutation distinct |
| Hybrid mal discipliné | deny-write · inventaire allowlist (futurs) |
| HARD ignorés | anti-bypass B5/R1/HARD |

## 4. Dette / réversibilité

| Couche | Dette | Réversibilité |
|--------|-------|---------------|
| Documentaire | faible (options non retenues conservées) | haute (Git revert) |
| Technique | **nulle** ce cycle | N/A |

## 5. Stop conditions ajoutées

| ID | Trigger | Action |
|----|---------|--------|
| F-S1 | prep technique sans set F03.3 | STOP |
| F-S2 | implémentation API/UI hors gate | STOP |
| F-S3 | mutation historique / retrait sans isolation OPS1 | STOP |

## 6. Anti-claims

- décisions ≠ implémentation
- décisions ≠ delivery preparation / delivery / cutover
- décisions ≠ T-A7 OPEN
