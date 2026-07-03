# Interv360 — INC-01 implementation estimate

**Type** : Estimation détaillée indicative  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc-01-demo-data.md`](inc-01-demo-data.md), [`inc-01-qa-scenarios.md`](inc-01-qa-scenarios.md), [`inc-01-refusal-scenarios.md`](inc-01-refusal-scenarios.md), [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md)

---

## 1. Objectif

Ce document produit une estimation détaillée indicative pour préparer la réalisation de :

**INC-01 — Flux SAV minimal démontrable**

L'estimation porte sur le flux :

**RS-01 → RS-02 → RS-03 → RS-04 → RS-05**

et sur le chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Ce document **ne constitue pas** :

- un chiffrage contractuel ;
- un devis ;
- un engagement ferme ;
- un sprint plan ferme ;
- une estimation de production ;
- un engagement de capacité.

Il ne crée pas de code, d'API, de SQL, de scripts ou de tests automatisés.

---

## 2. Principes d'estimation

L'estimation doit respecter les principes suivants :

- rester indicative ;
- s'appuyer sur les séquences RS-01 à RS-05 ;
- distinguer front / back / data / QA ;
- tenir compte des scénarios nominaux et des refus métier ;
- identifier RS-03 comme séquence la plus structurante ;
- ne pas intégrer CRM réel ;
- ne pas intégrer dashboard / BI ;
- ne pas intégrer STAT-07 / STAT-08 ;
- ne pas intégrer multi-interventions ;
- ne pas intégrer pièces jointes ou signature avancées.

---

## 3. Hypothèses d'estimation

| Hypothèse | Impact |
|-----------|--------|
| **Réalisation limitée à INC-01** | Périmètre stable |
| **Architecture logique déjà cadrée** | Réduit l'incertitude |
| **Données de démonstration définies** | Facilite QA et démo |
| **Scénarios nominaux définis** | Facilite validation métier |
| **Scénarios de refus définis** | Réduit les oublis |
| **API externe non obligatoire** | Réduit complexité |
| **CRM réel hors périmètre** | Réduit dépendances |
| **Dashboard / BI hors périmètre** | Évite élargissement |
| **Figma non bloquant** | Évite attente design finale |
| **Stack non encore imposée** | Estimation reste indicative |

---

## 4. Estimation par séquence RS

| Séquence | Périmètre | Complexité | Charge relative | Justification |
|----------|-----------|------------|-----------------|---------------|
| **RS-01** | Socle demande SAV, liste, fiche, STAT-01 | Moyenne | **M** | Socle structurant front / back / data |
| **RS-02** | Qualification minimale, checklist, STAT-02 | Faible | **S** | Logique limitée dépendante de RS-01 |
| **RS-03** | Intervention, créneau, technicien, planning, STAT-03 | Élevée | **L** | Séquence la plus structurante |
| **RS-04** | Parcours technicien, CR, résultat, STAT-04 | Moyenne | **M** | Interaction terrain + data CR |
| **RS-05** | Clôture locale, STAT-06, visibilité liste / fiche | Moyenne | **M** | Règles de clôture + visibilité finale |

---

## 5. Estimation par domaine

| Domaine | Charge relative | Justification |
|---------|-----------------|---------------|
| **Front** | M / L | 5 écrans à couvrir, mais niveau MVP simple |
| **Back / métier** | L | Transitions, préconditions, refus, orchestration |
| **Data** | M | Objets simples mais liens et statut courant nécessaires |
| **QA métier** | M | Scénarios nominaux + refus à dérouler |
| **Design** | S | Figma non bloquant, specs Git suffisantes |
| **Intégration externe** | XS / hors périmètre | Pas de CRM réel ni API externe obligatoire |
| **Pilotage / BI** | Hors périmètre | Dashboard exclu |

---

## 6. Décomposition indicative par lots de réalisation

| Lot | Contenu | Charge indicative | Dépendances |
|-----|---------|-------------------|-------------|
| **LOT-R01** | Socle demande / liste / fiche | M | Démarrage |
| **LOT-R02** | Qualification minimale | S | Dépend LOT-R01 |
| **LOT-R03** | Planification intervention | L | Dépend LOT-R02 |
| **LOT-R04** | Parcours technicien / CR | M | Dépend LOT-R03 |
| **LOT-R05** | Clôture locale / STAT-06 | M | Dépend LOT-R04 |
| **LOT-R06** | QA nominale | M | Dépend LOT-R01 à LOT-R05 |
| **LOT-R07** | Refus métier | S / M | Dépend règles statuts |
| **LOT-R08** | Données de démonstration | S | Déjà préparées documentairement |

---

## 7. Points de complexité

| Point de complexité | Impact | Séquence concernée |
|---------------------|--------|--------------------|
| **Cohérence liste / fiche** | Impact moyen | RS-01 à RS-05 |
| **Gouvernance des statuts hors UI** | Impact élevé | RS-01 à RS-05 |
| **Planification intervention** | Impact élevé | RS-03 |
| **Lien demande / intervention / CR** | Impact moyen | RS-03 à RS-05 |
| **Refus métier** | Impact moyen | RS-01 à RS-05 |
| **Journal fonctionnel minimal** | Impact faible / moyen | RS-01 à RS-05 |
| **Absence CRM** | Réduit complexité mais nécessite garde-fou | RS-05 |
| **Figma non bloquant** | Réduit dépendance | Toutes |

---

## 8. Risques d'estimation

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **RS-03 sous-estimée** | Retard | Isoler planning simple |
| **Refus métier oubliés** | Reprises | Utiliser `inc-01-refusal-scenarios.md` |
| **Front plus lourd que prévu** | Retard | Garder MVP simple |
| **Back permissif** | Incohérences statuts | Règles statuts comme source |
| **Data trop détaillée** | Ralentissement | Rester modèle MVP |
| **CRM réintroduit** | Explosion charge | Maintenir hors périmètre |
| **Dashboard réintroduit** | Élargissement | Hors INC-01 |
| **Tests automatisés demandés trop tôt** | Charge non prévue | Hors cycle |

---

## 9. Estimation synthétique

| Axe | Niveau estimé |
|-----|---------------|
| **Complexité globale INC-01** | M / L |
| **Charge relative dominante** | RS-03 |
| **Incertitude principale** | Choix de stack / réalisation front-back |
| **Risque principal** | Élargissement périmètre |
| **Effort QA** | M |
| **Effort data** | M |
| **Effort intégration externe** | Hors périmètre |
| **Readiness réalisation** | Préparatoire, à confirmer |

---

## 10. Ce qui n'est pas inclus dans l'estimation

| Exclusion | Raison |
|-----------|--------|
| **CRM réel** | Hors INC-01 |
| **Synchronisation externe bloquante** | Hors INC-01 |
| **Dashboard / BI** | Hors INC-01 |
| **STAT-07 / STAT-08** | Hors INC-01 |
| **Multi-interventions** | Post-MVP |
| **Pièces jointes avancées** | Hors INC-01 |
| **Signature avancée** | Hors INC-01 |
| **API détaillée** | Reportée |
| **Tests automatisés** | Hors cycle |
| **Mise en production** | Hors cycle |
| **Design pixel perfect** | Non bloquant |

---

## 11. Conditions pour affiner l'estimation

| Condition | Effet attendu |
|-----------|---------------|
| **Choix de stack clarifié** | Estimation plus fiable |
| **Niveau de séparation front / back confirmé** | Estimation plus fiable |
| **Données de démonstration validées** | QA plus fiable |
| **Scénarios QA validés** | Périmètre plus stable |
| **Refus métier validés** | Moins de reprises |
| **Périmètre INC-01 gelé** | Estimation stabilisée |
| **Design Figma accepté comme non bloquant** | Moins de dépendance |
| **Absence CRM confirmée** | Charge contenue |

---

## 12. Décisions retenues

| Décision | Statut |
|----------|--------|
| Estimation indicative uniquement | Retenu |
| Aucune valeur contractuelle | Retenu |
| Estimation par RS | Retenu |
| RS-03 séquence dominante | Retenu |
| Front / back / data / QA distingués | Retenu |
| CRM hors estimation | Retenu |
| Dashboard hors estimation | Retenu |
| Tests automatisés hors estimation | Retenu |
| Stack non imposée | Retenu |
| Périmètre INC-01 non élargi | Retenu |

---

## 13. Garde-fous

- ne pas produire de chiffrage contractuel ;
- ne pas produire de devis ;
- ne pas produire d'engagement ferme ;
- ne pas produire de sprint plan ferme ;
- ne pas créer de code ;
- ne pas créer d'API ;
- ne pas créer de SQL ;
- ne pas créer de tests automatisés ;
- ne pas intégrer CRM réel ;
- ne pas intégrer dashboard / BI ;
- ne pas intégrer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 14. Critères de sortie

- [x] hypothèses d'estimation définies ;
- [x] estimation par RS définie ;
- [x] estimation par domaine définie ;
- [x] lots de réalisation indicatifs définis ;
- [x] points de complexité identifiés ;
- [x] risques d'estimation identifiés ;
- [x] synthèse d'estimation produite ;
- [x] exclusions listées ;
- [x] conditions d'affinage listées ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

`inc-01-implementation-plan.md`

**Objectif :** préparer la planification de réalisation d'INC-01, sans sprint plan ferme.
