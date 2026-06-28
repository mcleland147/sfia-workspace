# [PROJECT] — Clôture du cycle BPMN

**Projet** : [PROJECT_ID]  
**Phase** : 03-process  
**Type** : Synthèse de clôture cycle BPMN  
**Statut** : Draft  
**Branche** : [BRANCH_NAME]

---

## 1. Objectif

Clôturer le **cycle BPMN** du projet **[PROJECT]**.

**Précisions :**

- diagrammes produits ;
- exports générés ;
- analyses réalisées ;
- décisions consolidées ;
- ADR candidates identifiées ;
- suites recommandées.

---

## 2. Livrables produits

| Livrable | Rôle | Statut |
|----------|------|--------|
| `[file].bpmn` | Source BPMN | Draft / Validé |
| `[file].svg` | Export de lecture | Draft / Validé |
| `process-scope.md` | Cadrage phase | Draft / Validé |
| `process-analysis.md` | Analyse et traçabilité | Draft / Validé |

---

## 3. Décisions consolidées

| Domaine | Décision | Source |
|---------|----------|--------|
| [DOMAIN] | [DECISION] | [SOURCE] |

---

## 4. ADR candidates

| ADR candidate | Priorité | Pourquoi |
|---------------|----------|----------|
| [ADR] | Haute / Moyenne / Basse | [RATIONALE] |

---

## 5. Points restant à préciser

| Sujet | Point restant | Suite recommandée |
|-------|---------------|---------------------|
| [TOPIC] | [OPEN_POINT] | [NEXT_STEP] |

---

## 6. Garde-fous respectés

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion automatique ;
- [x] `.bpmn` versionné dans Git ;
- [x] exports séparés dans `exports/` ;
- [x] analyse Markdown associée.

---

## 7. Préparation PR unique

| Élément | Valeur |
|---------|--------|
| Branche source | [BRANCH] |
| Branche cible | `main` |
| Type | Documentation / processus |
| Code applicatif | Non |
| Notion | Non |
| Delivery | Non |

---

## 8. Recommandation après merge

1. Revue **PR unique** ;
2. **Merge** vers `main` ;
3. **Suppression** de la branche cycle BPMN ;
4. Passage **ADR** ou **architecture fonctionnelle détaillée** selon priorités.

---

## 9. Conclusion

[Résumer l'état du cycle BPMN et les suites — ex. instruction ADR P1, design UX.]

---

*Template clôture cycle BPMN — SFIA — à compléter par projet.*
