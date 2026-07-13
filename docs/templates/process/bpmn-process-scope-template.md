# [PROJECT] — Cadrage de la phase processus BPMN

**Projet** : [PROJECT_ID]  
**Phase** : 03-process  
**Type** : Cadrage BPMN  
**Statut** : Draft  
**Méthode associée** : `docs/practices/process/bpmn-process-modeling-method.md`  
**Standard associé** : `docs/practices/process/bpmn-deliverables-standard.md`

---

## 1. Objectif

Décrire l'objectif de la phase BPMN pour le projet **[PROJECT]**.

**Précisions :**

- pourquoi BPMN est utile sur ce projet ;
- quel **processus métier** est concerné ;
- ce que le BPMN doit **clarifier** ;
- ce que le BPMN **ne doit pas** produire (backlog, tests, code, delivery).

---

## 2. Sources documentaires

| Source | Apport |
|--------|--------|
| [SOURCE_1] | [APPORT] |
| [SOURCE_2] | [APPORT] |
| [SOURCE_3] | [APPORT] |

---

## 3. Périmètre BPMN

Le BPMN couvre :

- [PROCESS_STEP_1]
- [PROCESS_STEP_2]
- [PROCESS_STEP_3]

---

## 4. Hors périmètre BPMN

Le BPMN ne couvre pas :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- delivery ;
- architecture technique détaillée ;
- publication Notion automatique.

---

## 5. Acteurs / lanes envisagés

| Acteur / lane | Rôle dans le processus |
|---------------|------------------------|
| [LANE_1] | [ROLE] |
| [LANE_2] | [ROLE] |
| [LANE_3] | [ROLE] |

---

## 6. Objets métier concernés

| Objet métier | Rôle dans le processus |
|--------------|------------------------|
| [OBJECT_1] | [ROLE] |
| [OBJECT_2] | [ROLE] |

---

## 7. Statuts / étapes à représenter

| Statut / étape | Sens métier |
|----------------|-------------|
| [STATUS_1] | [MEANING] |
| [STATUS_2] | [MEANING] |

---

## 8. Diagrammes prévus

| Diagramme | Fichier cible | Priorité | Objectif |
|-----------|---------------|----------|----------|
| Processus principal | `[project]-main-process.bpmn` | Haute | Happy path métier |
| Exceptions métier | `[project]-exceptions.bpmn` | Haute / Moyenne | Exceptions et branches |
| Anomalies d'intégration | `[project]-integration-errors.bpmn` | Selon projet | Flux d'erreurs / reprise |

---

## 9. Hypothèses

- [HYPOTHESIS_1]
- [HYPOTHESIS_2]

---

## 10. Points ouverts

| Sujet | Point ouvert | Décision attendue |
|-------|--------------|-------------------|
| [TOPIC] | [OPEN_POINT] | [EXPECTED_DECISION] |

---

## 11. Garde-fous

- [ ] pas de backlog produit ;
- [ ] pas de user stories produites ;
- [ ] pas de cas de tests produits ;
- [ ] pas de scénarios de tests produits ;
- [ ] pas de code applicatif produit ;
- [ ] pas de delivery ouvert ;
- [ ] pas de publication Notion automatique ;
- [ ] Git reste la source de vérité.

---

## 12. Conclusion

[Résumer si le projet est prêt pour la modélisation BPMN — Go / No-Go selon `docs/practices/process/bpmn-integration-checklist.md`.]

---

*Template cadrage BPMN — SFIA — à compléter par projet.*
