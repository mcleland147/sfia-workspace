# [PROJECT] — Analyse des processus BPMN

**Projet** : [PROJECT_ID]  
**Phase** : 03-process  
**Type** : Analyse BPMN  
**Statut** : Draft  
**Diagrammes analysés** : [LISTE_DIAGRAMMES]

---

## 1. Objectif

Décrire l'objectif de l'analyse BPMN pour **[PROJECT]**.

**Précisions :**

- ce document **relie les diagrammes BPMN** aux règles métier ;
- il relie les diagrammes aux **statuts** ;
- il identifie les **ADR candidates** ;
- il **prépare l'architecture fonctionnelle détaillée** ;
- il **ne produit pas** de backlog, de tests ou de code.

---

## 2. Diagrammes analysés

| Diagramme | Fichier BPMN | Export | Statut |
|-----------|--------------|--------|--------|
| [DIAGRAM_NAME] | [file].bpmn | [file].svg | Draft / Validé |

---

## 3. Analyse du processus principal

| Étape BPMN | Acteur / lane | Règle liée | Statut lié | Commentaire |
|------------|---------------|------------|------------|-------------|
| [STEP] | [LANE] | [RULE] | [STATUS] | [COMMENT] |

---

## 4. Analyse des exceptions métier

| Exception | Déclencheur | Acteur responsable | Règle liée | Traitement |
|-----------|-------------|-------------------|------------|------------|
| [EXCEPTION] | [TRIGGER] | [OWNER] | [RULE] | [HANDLING] |

---

## 5. Analyse des anomalies d'intégration

| Anomalie | Flux concerné | Gravité | Reprise | ADR candidate ? |
|----------|---------------|---------|---------|-----------------|
| [ANOMALY] | [FLOW] | [SEVERITY] | [RECOVERY] | Oui / Non |

---

## 6. Correspondance BPMN / statuts

| Statut | Étape BPMN associée | Origine | Commentaire |
|--------|---------------------|---------|-------------|
| [STATUS] | [BPMN_STEP] | [SOURCE] | [COMMENT] |

---

## 7. Correspondance BPMN / écrans

| Étape BPMN | Écran ou parcours futur | Commentaire |
|------------|-------------------------|-------------|
| [STEP] | [SCREEN] | [COMMENT] |

---

## 8. ADR candidates identifiées

| ADR candidate | Source BPMN | Priorité | Pourquoi |
|---------------|-------------|----------|----------|
| [ADR] | [BPMN_ELEMENT] | Haute / Moyenne / Basse | [RATIONALE] |

---

## 9. Limites du modèle BPMN

- [Élément volontairement non représenté — ex. géoloc hors MVP]
- [Hypothèse — ex. sync CRM simulée unidirectionnelle à la clôture]
- [Simplification — ex. un seul canal email modélisé]
- [Point relégué à phase ultérieure — ex. architecture technique détaillée]

---

## 10. Garde-fous

- [ ] analyse sans backlog ;
- [ ] analyse sans user stories ;
- [ ] analyse sans cas de tests ;
- [ ] analyse sans scénarios de tests ;
- [ ] analyse sans code applicatif ;
- [ ] analyse sans delivery ;
- [ ] analyse sans publication Notion automatique.

---

## 11. Conclusion

[Résumer les apports du BPMN pour la suite — ADR, architecture fonctionnelle, design.]

---

*Template analyse BPMN — SFIA — à compléter par projet.*
