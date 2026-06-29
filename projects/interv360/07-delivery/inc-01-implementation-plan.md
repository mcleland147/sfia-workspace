# Interv360 — INC-01 implementation plan

**Type** : Planification indicative de réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc-01-demo-data.md`](inc-01-demo-data.md), [`inc-01-qa-scenarios.md`](inc-01-qa-scenarios.md), [`inc-01-refusal-scenarios.md`](inc-01-refusal-scenarios.md), [`inc-01-implementation-estimate.md`](inc-01-implementation-estimate.md)

---

## 1. Objectif

Ce document prépare la planification indicative de réalisation de :

**INC-01 — Flux SAV minimal démontrable**

Il organise le travail autour du flux :

**RS-01 → RS-02 → RS-03 → RS-04 → RS-05**

et du chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Ce document **ne constitue pas** :

- un sprint plan ferme ;
- un engagement de dates ;
- un engagement de capacité ;
- un planning contractuel ;
- un devis.

Il ne crée pas de code, d'API, de SQL, de scripts, de tests automatisés ou de BPMN.

---

## 2. Principes de planification

La planification doit respecter les principes suivants :

- suivre l'ordre logique RS-01 à RS-05 ;
- sécuriser les dépendances entre séquences ;
- valider chaque statut avant de passer au suivant ;
- isoler RS-03 comme séquence la plus structurante ;
- préparer les contrôles QA au fil de l'eau ;
- maintenir les refus métier dans le périmètre de validation ;
- ne pas introduire CRM réel ;
- ne pas introduire dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- garder Figma non bloquant.

---

## 3. Ordre de réalisation recommandé

| Ordre | Séquence | Objectif | Résultat attendu |
|-------|----------|----------|------------------|
| 1 | **RS-01** — Socle demande SAV | Créer, afficher, ouvrir demande | STAT-01 visible liste + fiche |
| 2 | **RS-02** — Qualification minimale | Qualifier demande | STAT-02 visible |
| 3 | **RS-03** — Planification intervention | Intervention + créneau + technicien | STAT-03 visible planning / liste / fiche |
| 4 | **RS-04** — Réalisation terrain et CR | Consultation technicien + CR + résultat | STAT-04 |
| 5 | **RS-05** — Clôture locale | Clôturer localement | STAT-06 visible liste + fiche |

L'ordre est recommandé comme **strictement séquentiel** pour sécuriser le flux MVP.

---

## 4. Lots de réalisation indicatifs

| Lot | Contenu | Séquence | Charge indicative | Dépendance |
|-----|---------|----------|-------------------|------------|
| **LOT-R01** | Socle demande / liste / fiche | RS-01 | M | Démarrage |
| **LOT-R02** | Qualification minimale | RS-02 | S | Dépend LOT-R01 |
| **LOT-R03** | Planification intervention | RS-03 | L | Dépend LOT-R02 |
| **LOT-R04** | Parcours technicien / CR | RS-04 | M | Dépend LOT-R03 |
| **LOT-R05** | Clôture locale / STAT-06 | RS-05 | M | Dépend LOT-R04 |
| **LOT-R06** | QA nominale | RS-01 à RS-05 | M | Dépend lots fonctionnels |
| **LOT-R07** | Refus métier | RS-01 à RS-05 | S / M | Dépend règles statuts |
| **LOT-R08** | Données de démonstration | Transverse | S | Déjà préparées documentairement |

---

## 5. Jalons de validation

| Jalon | Condition de validation | Sortie attendue |
|-------|-------------------------|-----------------|
| **JAL-01** | RS-01 démontrable | Demande visible STAT-01 |
| **JAL-02** | RS-02 démontrable | Qualification STAT-02 |
| **JAL-03** | RS-03 démontrable | Intervention planifiée STAT-03 |
| **JAL-04** | RS-04 démontrable | CR + résultat disponibles STAT-04 |
| **JAL-05** | RS-05 démontrable | STAT-06 local visible |
| **JAL-06** | QA nominale déroulée | QA-NOM-001 à QA-NOM-016 couverts |
| **JAL-07** | Refus métier vérifiés | REF-001 à REF-010 couverts |
| **JAL-08** | Readiness INC-01 | Flux complet validable sans CRM / dashboard |

---

## 6. Conditions de passage entre séquences

| Passage | Condition |
|---------|-----------|
| **RS-01 → RS-02** | Demande visible en liste et fiche avec STAT-01 |
| **RS-02 → RS-03** | Qualification minimale validée et STAT-02 appliqué |
| **RS-03 → RS-04** | Intervention créée, créneau sélectionné, technicien affecté, STAT-03 appliqué |
| **RS-04 → RS-05** | CR saisi, résultat exploitable, STAT-04 appliqué |
| **RS-05 → clôture INC-01** | STAT-06 visible liste et fiche sans CRM ni sync bloquante |

---

## 7. Points de contrôle QA intégrés

| Moment | Contrôle QA |
|--------|-------------|
| **Après RS-01** | QA-NOM-001 à QA-NOM-003 |
| **Après RS-02** | QA-NOM-004 à QA-NOM-005 + refus qualification |
| **Après RS-03** | QA-NOM-006 à QA-NOM-009 + refus planification |
| **Après RS-04** | QA-NOM-010 à QA-NOM-013 + refus CR / résultat |
| **Après RS-05** | QA-NOM-014 à QA-NOM-016 + refus clôture |
| **Fin INC-01** | Journal minimal + garde-fous CRM / dashboard / STAT-07 / STAT-08 |

---

## 8. Préparation des dépendances

| Dépendance | Statut planning | Commentaire |
|------------|-----------------|-------------|
| **Données de démonstration** | Préparées documentairement | `inc-01-demo-data.md` |
| **Scénarios QA nominaux** | Préparés documentairement | `inc-01-qa-scenarios.md` |
| **Scénarios de refus** | Préparés documentairement | `inc-01-refusal-scenarios.md` |
| **Estimation indicative** | Préparée documentairement | `inc-01-implementation-estimate.md` |
| **Choix stack** | Non tranché | À confirmer avant réalisation |
| **Séparation front / back** | Non tranchée techniquement | À confirmer avant réalisation |
| **Design Figma** | Non bloquant | Specs Git suffisantes |
| **CRM** | Hors périmètre | Ne doit pas devenir dépendance |
| **Dashboard / BI** | Hors périmètre | Ne doit pas devenir dépendance |

---

## 9. Readiness avant démarrage réalisation

| Élément | Statut readiness |
|---------|------------------|
| **Périmètre INC-01** | Prêt à geler |
| **Données de démonstration** | Prêtes documentairement |
| **Scénarios QA** | Prêts documentairement |
| **Scénarios de refus** | Prêts documentairement |
| **Estimation** | Indicative prête |
| **Règles statuts** | Prêtes |
| **Modèle data** | Prêt au niveau conceptuel / logique |
| **Stratégie API** | API externe non requise |
| **Choix de stack** | À décider |
| **Backlog réalisation** | À préparer dans le prochain livrable |

---

## 10. Risques planning

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Démarrage code trop tôt** | Reprise | Finaliser backlog réalisation |
| **RS-03 sous-estimée** | Retard | Isoler et prioriser |
| **Choix stack tardif** | Incertitude | Décider avant réalisation |
| **Front trop détaillé** | Ralentissement | Rester MVP |
| **QA reportée trop tard** | Anomalies | Intégrer contrôles par séquence |
| **Refus métier oubliés** | Incohérences | Utiliser REF-001 à REF-010 |
| **CRM réintroduit** | Blocage | Hors périmètre |
| **Dashboard réintroduit** | Élargissement | Hors périmètre |
| **Figma bloquant** | Attente inutile | Specs Git suffisantes |

---

## 11. Décisions retenues

| Décision | Statut |
|----------|--------|
| Planification indicative uniquement | Retenu |
| Ordre RS-01 à RS-05 | Retenu |
| Réalisation séquentielle recommandée | Retenu |
| RS-03 séquence dominante | Retenu |
| QA intégrée après chaque séquence | Retenu |
| Refus métier intégrés | Retenu |
| Données démo utilisées | Retenu |
| Aucun sprint plan ferme | Retenu |
| Aucun engagement de dates | Retenu |
| Aucun CRM / dashboard | Retenu |

---

## 12. Garde-fous

- ne pas produire de sprint plan ferme ;
- ne pas produire d'engagement de dates ;
- ne pas produire de planning contractuel ;
- ne pas créer de code ;
- ne pas créer d'API ;
- ne pas créer de SQL ;
- ne pas créer de test automatisé ;
- ne pas créer de script ;
- ne pas créer de BPMN ;
- ne pas introduire CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 13. Critères de sortie

- [x] ordre de réalisation défini ;
- [x] lots indicatifs définis ;
- [x] jalons de validation définis ;
- [x] conditions de passage définies ;
- [x] contrôles QA intégrés ;
- [x] dépendances identifiées ;
- [x] readiness avant réalisation définie ;
- [x] risques planning identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 14. Prochaine action

Le prochain livrable est :

`inc-01-realization-backlog.md`

**Objectif :** préparer le backlog de réalisation d'INC-01 sans démarrer le code.
