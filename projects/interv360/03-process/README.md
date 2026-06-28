# Interv360 — Phase 03 Processus BPMN

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Statut** : Draft  
**Méthode associée** : `docs/methods/process/bpmn-process-modeling-method.md`  
**Standard associé** : `docs/methods/process/bpmn-deliverables-standard.md`  
**Checklist associée** : `docs/methods/process/bpmn-integration-checklist.md`

---

## 1. Objectif

Cette phase formalise les **processus métier MVP Interv360** sous forme BPMN.

Elle intervient **après** :

- le cadrage métier ;
- l'analyse QA transverse ;
- le cycle de clarification MVP ;
- la priorisation des règles RG ;
- le mapping des statuts ;
- les arbitrages sur la clôture sans signature ;
- les arbitrages géolocalisation / IA.

Elle intervient **avant** :

- les ADR structurantes ;
- l'architecture fonctionnelle détaillée ;
- le design détaillé des écrans.

---

## 2. Positionnement dans la trajectoire Interv360

```
01-cadrage
→ 02-architecture / clarification
→ 03-process / BPMN
→ ADR structurantes
→ architecture fonctionnelle détaillée
→ 03-design / UX détaillée
```

**Note :** `03-process/` est ajouté avant l'exploitation détaillée de `03-design/`, conformément à la méthode BPMN SFIA.

---

## 3. Livrables attendus

| Livrable | Rôle | Statut |
|----------|------|--------|
| `process-scope.md` | Cadrage BPMN Interv360 | Draft |
| `bpmn/interv360-sav-mvp.bpmn` | Processus principal SAV MVP | À venir |
| `bpmn/interv360-sav-exceptions.bpmn` | Exceptions métier | À venir |
| `bpmn/interv360-integration-errors.bpmn` | Anomalies d'intégration | À venir |
| `exports/*.svg` | Exports de lecture | À venir |
| `process-analysis.md` | Analyse règles / statuts / ADR candidates | À venir |
| `process-cycle-closure.md` | Clôture du cycle BPMN projet | À venir |

---

## 4. Garde-fous

- Pas de backlog.
- Pas de user stories.
- Pas de cas de tests.
- Pas de scénarios de tests.
- Pas de code applicatif.
- Pas de delivery.
- Pas de publication Notion automatique.
- `.bpmn` reste la source de vérité Git.
- Les exports SVG/PNG sont uniquement des supports de lecture.

---

## 5. Outil

Les diagrammes seront produits avec **Camunda Modeler**.

La stack Camunda complète n'est pas requise pour cette phase de modélisation.

---

*Phase 03-process — Interv360 — SFIA.*
