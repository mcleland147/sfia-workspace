# Interv360 — Clôture du cycle BPMN

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Synthèse de clôture cycle BPMN  
**Statut** : Draft  
**Branche** : `process/interv360-bpmn-mvp`

---

## 1. Objectif

Ce document clôture le **cycle BPMN Interv360**.

Le cycle a permis de :

- créer la phase `03-process/` ;
- cadrer le périmètre BPMN ;
- préparer les trois diagrammes ;
- produire les trois fichiers `.bpmn` ;
- produire les exports SVG ;
- analyser les processus ;
- identifier les ADR candidates ;
- préparer la suite architecture / ADR / design.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. Livrables produits

| Livrable | Rôle | Statut |
|----------|------|--------|
| `README.md` | Index de la phase BPMN Interv360 | Draft |
| `process-scope.md` | Cadrage BPMN Interv360 | Draft |
| `interv360-sav-mvp-preparation.md` | Préparation processus principal | Draft |
| `interv360-sav-exceptions-preparation.md` | Préparation exceptions métier | Draft |
| `interv360-integration-errors-preparation.md` | Préparation anomalies d'intégration | Draft |
| `bpmn/interv360-sav-mvp.bpmn` | Source BPMN — processus principal SAV MVP | Draft |
| `bpmn/interv360-sav-exceptions.bpmn` | Source BPMN — exceptions métier | Draft |
| `bpmn/interv360-integration-errors.bpmn` | Source BPMN — anomalies d'intégration | Draft |
| `exports/interv360-sav-mvp.svg` | Export lecture — processus principal | Draft |
| `exports/interv360-sav-exceptions.svg` | Export lecture — exceptions métier | Draft |
| `exports/interv360-integration-errors.svg` | Export lecture — anomalies d'intégration | Draft |
| `process-analysis.md` | Analyse règles / statuts / ADR candidates | Draft |
| `process-cycle-closure.md` | Clôture du cycle BPMN | Draft |

**Total : 14 livrables** documentaires et diagrammes (hors `.gitkeep`).

---

## 3. Diagrammes produits

| Diagramme | Niveau | Objectif | Résultat |
|-----------|--------|----------|----------|
| `interv360-sav-mvp.bpmn` | Niveau 1 — processus principal | Représenter le cycle nominal demande → clôture locale → sync CRM | Produit et exporté |
| `interv360-sav-exceptions.bpmn` | Niveau 2 — exceptions métier | Représenter données insuffisantes, doublon, attente client, retard, clôture sans signature | Produit et exporté |
| `interv360-integration-errors.bpmn` | Niveau 3 — intégration / anomalies | Représenter sync CRM KO, gravité, reprise manuelle, dashboard | Produit et exporté |

Les trois diagrammes sont **non exécutables** (`isExecutable="false"`) et compatibles Camunda Modeler / BPMN 2.0 XML.

---

## 4. Décisions consolidées

| Domaine | Décision | Source |
|---------|----------|--------|
| Positionnement projet | `03-process/` précède `03-design/` | `projects/interv360/README.md` |
| Processus principal | Le cycle nominal est isolé dans `interv360-sav-mvp.bpmn` | `process-analysis.md` |
| Exceptions métier | Les exceptions sont isolées dans un diagramme dédié | `process-analysis.md` |
| Anomalies intégration | Les erreurs sync CRM sont isolées dans un diagramme dédié | `process-analysis.md` |
| Clôture locale | La clôture locale reste valide même si sync CRM échoue | `process-analysis.md` |
| Retard | STAT-07 En retard est un indicateur non bloquant | `process-analysis.md` |
| Anomalie intégration | STAT-08 Anomalie d'intégration ne remet pas en cause la clôture locale | `process-analysis.md` |
| Signature | Signature optionnelle, motif obligatoire si absente | `process-analysis.md` |
| Doublon | Arbitrage manuel, pas de fusion automatique | `process-analysis.md` |
| Attente client | Reprise via « Reprendre l'intervention » sans redémarrage complet | `interv360-sav-mvp.bpmn` |
| Géoloc / IA | Hors MVP | `process-analysis.md` |

---

## 5. Règles RG couvertes

| Règle | Couverture |
|-------|------------|
| RG-C04 | Doublon potentiel, arbitrage manuel |
| RG-C05 | Données minimales, maintien à qualifier |
| RG-I05 | Statuts, attente client, retard, dashboard |
| RG-I06 | Sync CRM, anomalie, gravité, reprise |
| RG-R02 | Signature optionnelle |
| RG-R05 | CR obligatoire, clôture traçable |

Les **six règles RG prioritaires** sont couvertes par le cycle BPMN.

---

## 6. Statuts couverts

| Statut | Couverture |
|--------|------------|
| STAT-01 À qualifier | Processus principal + exceptions |
| STAT-02 Qualifiée | Processus principal |
| STAT-03 Planifiée | Processus principal |
| STAT-04 En cours | Processus principal + exceptions |
| STAT-05 En attente client | Processus principal + exceptions |
| STAT-06 Clôturée | Processus principal + intégration |
| STAT-07 En retard | Exceptions — indicateur dashboard |
| STAT-08 Anomalie d'intégration | Processus principal + intégration |

---

## 7. ADR candidates

| ADR candidate | Priorité | Pourquoi |
|---------------|----------|----------|
| Mapping durable des statuts | Haute | Les transitions structurent le cycle SAV |
| Synchronisation CRM simulée | Haute | La sync post-clôture est structurante |
| Gestion des erreurs d'intégration | Haute | RG-I06 nécessite une politique claire |
| Clôture locale vs sync externe | Haute | La clôture reste valide même si sync KO |
| Clôture sans signature | Moyenne / Haute | Motif obligatoire et CR nécessaire |
| Gestion des doublons | Moyenne | Arbitrage manuel, pas de fusion automatique |
| Stratégie de reprise manuelle | Moyenne | Correction, relance, journalisation |

Ces éléments restent des **ADR candidates**. Aucune ADR formelle n'est créée dans cette phase.

---

## 8. Points restant à préciser

| Sujet | Point restant | Suite recommandée |
|-------|---------------|-------------------|
| ADR statut | Formaliser le mapping durable des statuts | Phase ADR |
| ADR sync CRM | Formaliser la synchronisation CRM simulée | Phase ADR |
| ADR erreurs intégration | Formaliser la gestion RG-I06 | Phase ADR |
| ADR clôture locale | Formaliser clôture locale vs sync externe | Phase ADR |
| Design UX | Décliner les flux en écrans | Phase design |
| Architecture fonctionnelle | Décrire fonctions, objets, responsabilités | Phase architecture fonctionnelle détaillée |

---

## 9. Garde-fous respectés

- pas de backlog produit ;
- pas de user stories produites ;
- pas de cas de tests produits ;
- pas de scénarios de tests produits ;
- pas de code applicatif produit ;
- pas de delivery ouvert ;
- pas de publication Notion automatique ;
- pas d'appel API Notion ;
- `.bpmn` versionnés dans Git ;
- exports SVG séparés dans `exports/` ;
- analyse Markdown associée ;
- PR non créée pendant la production des livrables.

---

## 10. Préparation PR unique

| Élément | Valeur |
|---------|--------|
| Branche source | `process/interv360-bpmn-mvp` |
| Branche cible | `main` |
| Type | Documentation / processus BPMN projet |
| Code applicatif | Non |
| Notion | Non |
| Delivery | Non |

**Commits attendus dans la PR :**

```
docs: close Interv360 BPMN process cycle
docs: analyze Interv360 BPMN processes
docs: add Interv360 integration errors BPMN diagram
docs: prepare Interv360 integration errors BPMN process
docs: refine Interv360 BPMN diagrams
docs: add Interv360 SAV exceptions BPMN diagram
docs: prepare Interv360 SAV exceptions BPMN process
docs: export Interv360 SAV MVP BPMN diagram
docs: add Interv360 SAV MVP BPMN diagram
docs: prepare Interv360 SAV MVP BPMN process
docs: initialize Interv360 BPMN process phase
```

---

## 11. Recommandation après merge

Après merge de la PR :

1. supprimer la branche `process/interv360-bpmn-mvp` ;
2. ouvrir une **phase ADR structurantes** ;
3. traiter en priorité :
   - mapping durable des statuts ;
   - synchronisation CRM simulée ;
   - gestion des erreurs d'intégration ;
   - clôture locale vs sync externe ;
4. poursuivre ensuite vers **architecture fonctionnelle détaillée** / **design**.

---

## 12. Conclusion

Le cycle BPMN Interv360 est **complet**.

Les trois diagrammes couvrent le niveau nécessaire pour alimenter la suite :

- **ADR structurantes** ;
- **architecture fonctionnelle détaillée** ;
- **design UX/UI**.

Aucun autre BPMN MVP n'est recommandé à ce stade, sauf besoin explicite.

---

*Clôture cycle BPMN — Interv360 — SFIA — Draft.*
