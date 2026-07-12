# Interv360 — Clôture du premier lot ADR structurantes

**Projet** : PRJ-INTERV360  
**Phase** : 04-adr  
**Type** : Synthèse de clôture ADR  
**Statut** : Draft  
**Branche** : `adr/interv360-structurantes`

---

## 1. Objectif

Ce document clôture le **premier lot d'ADR structurantes Interv360**.

Ce lot transforme les principales **ADR candidates** issues du cycle BPMN en **décisions formelles**.

Il couvre :

- le mapping durable des statuts ;
- la synchronisation CRM simulée ;
- la gestion des erreurs d'intégration ;
- la séparation entre clôture locale et synchronisation externe.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. ADR produites

| ADR | Sujet | Statut | Rôle |
|-----|-------|--------|------|
| ADR-001 | Mapping durable des statuts | Accepted | Stabilise STAT-01 à STAT-08 |
| ADR-002 | Synchronisation CRM simulée | Accepted | Définit Interv360 comme source de vérité locale et CRM comme cible simulée |
| ADR-003 | Gestion des erreurs d'intégration | Accepted | Formalise RG-I06, STAT-08, gravités et reprise manuelle |
| ADR-004 | Clôture locale vs synchronisation externe | Accepted | Confirme que STAT-06 reste valide même si sync KO |

**Fichiers :**

- `adr-001-status-mapping.md`
- `adr-002-simulated-crm-sync.md`
- `adr-003-integration-error-management.md`
- `2026-06-28-adr-004-local-closure-vs-external-sync.md`

**Documents de cadrage :** `adr-structuring-scope.md`, `2026-06-28-adr-cycle-closure.md` (ce document).

---

## 3. Décisions consolidées

| Domaine | Décision consolidée |
|---------|---------------------|
| Statuts | STAT-01 à STAT-06 portent le cycle métier ; STAT-07 et STAT-08 sont des indicateurs internes |
| CRM simulé | Le CRM simulé est une cible représentative, pas une source de vérité |
| Source de vérité | Interv360 reste source de vérité locale du MVP |
| Erreurs intégration | Les erreurs significatives créent une anomalie STAT-08 |
| Gravité | Les anomalies utilisent Information, Bloquant métier, Bloquant sync |
| Clôture locale | La clôture locale est autonome et ne dépend pas de la sync CRM |
| Sync KO | Un échec de sync n'annule pas la clôture locale |
| Dashboard | Retards et anomalies doivent être visibles en pilotage |

---

## 4. Socle fonctionnel obtenu

Le premier lot ADR donne un socle pour :

- architecture fonctionnelle détaillée ;
- modèle de statuts ;
- logique de synchronisation simulée ;
- gestion des anomalies ;
- vue dashboard / pilotage ;
- parcours de clôture ;
- futures décisions de reprise manuelle.

---

## 5. ADR différables

Les ADR suivantes restent **candidates pour un second lot** :

| Sujet | Pourquoi différable |
|-------|---------------------|
| Clôture sans signature | Déjà cadrée fonctionnellement, peut être formalisée avant design écran clôture |
| Gestion des doublons | Important mais moins structurant que statuts / CRM / sync |
| Stratégie de reprise manuelle | À préciser après architecture fonctionnelle et dashboard anomalies |

---

## 6. Garde-fous respectés

- pas de backlog produit ;
- pas de user stories produites ;
- pas de cas de tests produits ;
- pas de scénarios de tests produits ;
- pas de code applicatif produit ;
- pas de delivery ouvert ;
- pas de publication Notion automatique ;
- pas d'appel API Notion ;
- pas de modification BPMN ;
- pas de modification SVG.

---

## 7. Préparation PR

| Élément | Valeur |
|---------|--------|
| Branche source | `adr/interv360-structurantes` |
| Branche cible | `main` |
| Type | Documentation / ADR projet |
| Code applicatif | Non |
| Notion | Non |
| Delivery | Non |

**Commits attendus dans la PR :**

```
docs: close Interv360 ADR structuring cycle
docs: add Interv360 local closure ADR
docs: add Interv360 integration error ADR
docs: add Interv360 simulated CRM sync ADR
docs: add Interv360 status mapping ADR
docs: open Interv360 ADR structuring phase
```

---

## 8. Recommandation après merge

Après merge de la PR :

1. supprimer la branche `adr/interv360-structurantes` ;
2. ouvrir la phase **architecture fonctionnelle détaillée** ;
3. alimenter le **design UX/UI** avec les décisions ADR ;
4. instruire éventuellement un **second lot ADR** si nécessaire.

---

## 9. Conclusion

Le **premier lot ADR structurantes Interv360** est **complet**.

Les décisions **ADR-001 à ADR-004** donnent un socle robuste pour poursuivre vers :

- architecture fonctionnelle détaillée ;
- design UX/UI ;
- dashboard / pilotage ;
- reprise manuelle ;
- futurs écrans.

---

*Clôture premier lot ADR — Interv360 — SFIA — Draft.*
