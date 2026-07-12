# Chantiers360 v2 — Domaines fonctionnels

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/01-functional-architecture/functional-domains.md`  
**Cycle :** Architecture fonctionnelle (post PR #96)

> Pas de modèle de données technique. Données décrites au **niveau fonctionnel** uniquement.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## 1. Chantier

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Unité centrale de suivi — regroupe toutes les informations opérationnelles d'un projet terrain |
| **Données principales** | Libellé, statut chantier, indicateur retard |
| **Actions principales** | Créer, consulter liste, ouvrir fiche, modifier statut, marquer/démarquer retard |
| **Règles métier** | Statuts : À démarrer, En cours, En pause, Terminé — défaut À démarrer ; statut indépendant des tâches/réserves |
| **Liens** | Contient client/adresse ; agrège tâches, réserves, jalons, comptes rendus ; alimente prochaines actions |
| **Hors périmètre** | Devis, facturation, accès client, lien comptable |

**Priorité delivery :** P1 (UC-01, UC-02, UC-03)

---

## 2. Client / adresse

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Identifier le client et localiser le chantier |
| **Données principales** | Nom ou référence client ; adresse du chantier |
| **Actions principales** | Saisir à la création ; consulter sur fiche chantier ; modifier si besoin |
| **Règles métier** | Obligatoires à la création du chantier |
| **Liens** | Attributs fonctionnels du chantier — pas de référentiel client autonome au MVP |
| **Hors périmètre** | CRM, historique client multi-chantiers avancé, portail client |

**Priorité delivery :** P1 (UC-01)

---

## 3. Tâches

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Décomposer et suivre le travail restant sur un chantier |
| **Données principales** | Libellé, statut tâche |
| **Actions principales** | Ajouter, lister, modifier statut, consulter |
| **Règles métier** | Statuts : À faire, En cours, Terminée — défaut À faire ; libellé obligatoire ; une tâche = un chantier |
| **Liens** | Rattachée au chantier ; alimente prochaines actions si À faire ou En cours |
| **Hors périmètre** | Assignation multi-équipe, dépendances, charges, Gantt |

**Priorité delivery :** P1 (UC-04)

---

## 4. Réserves

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Enregistrer et suivre les points à lever (réserves client, anomalies) |
| **Données principales** | Description, statut réserve |
| **Actions principales** | Ajouter, lister, modifier statut, consulter |
| **Règles métier** | Statuts : Ouverte, En cours de traitement, Levée — défaut Ouverte ; description obligatoire |
| **Liens** | Rattachée au chantier ; alimente prochaines actions si Ouverte ou En cours de traitement |
| **Hors périmètre** | Validation client, photos avant/après détaillées, workflow complexe |

**Priorité delivery :** P1 (UC-05)

---

## 5. Jalons simples / planning simple

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Donner une visibilité légère sur le calendrier du chantier |
| **Données principales** | Date début prévue, date fin prévue, prochaine intervention, jalon à venir, commentaire planning |
| **Actions principales** | Renseigner, modifier, consulter sur fiche chantier |
| **Règles métier** | Tous éléments optionnels ; pas de dépendances entre jalons ; pas de ressources ni charges |
| **Liens** | Attributs du chantier ; prochaine intervention et jalon à venir alimentent prochaines actions |
| **Hors périmètre** | Planning avancé, Gantt, multi-équipe, calendrier complet |

**Priorité delivery :** P2 (UC-06)

---

## 6. Retard

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Signaler qu'un chantier nécessite une attention particulière |
| **Données principales** | Indicateur retard (oui/non) sur le chantier |
| **Actions principales** | Marquer en retard, retirer le marquage, consulter en liste et fiche |
| **Règles métier** | **Manuel au MVP** — l'utilisateur active/désactive ; calcul automatique = option future ; le retard coexiste avec le statut chantier |
| **Liens** | Attribut du chantier ; chantier en retard apparaît dans prochaines actions |
| **Hors périmètre** | Règles contractuelles, pénalités, alertes automatiques complexes |

**Priorité delivery :** P2 (UC-07)

---

## 7. Compte rendu rapide

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Consigner brièvement ce qui s'est passé sur le chantier |
| **Données principales** | Date (automatique), contenu textuel libre |
| **Actions principales** | Rédiger, consulter historique chronologique sur fiche chantier |
| **Règles métier** | Date **automatique** à la création ; contenu **libre** obligatoire ; plusieurs comptes rendus par chantier ; pas de validation client |
| **Liens** | Rattaché au chantier ; consultation depuis section dédiée fiche chantier |
| **Hors périmètre** | Modèle documentaire complexe, pièces jointes obligatoires, export PDF, signature |

**Priorité delivery :** P2 (UC-08)

---

## 8. Prochaines actions

| Aspect | Description |
|--------|-------------|
| **Rôle fonctionnel** | Offrir une vue synthétique de ce qui requiert attention — sans reconstitution manuelle |
| **Données principales** | Agrégation dérivée — pas de saisie propre au MVP |
| **Actions principales** | Consulter vue synthétique ; naviguer vers chantier / élément source |
| **Règles métier** | **Dérivées uniquement** depuis : tâches À faire/En cours ; réserves Ouverte/En cours de traitement ; prochaine intervention ou jalon renseigné ; chantiers en retard |
| **Liens** | Lit tous les domaines opérationnels ; ne modifie pas les données sources |
| **Hors périmètre** | Saisie manuelle d'actions ; moteur de priorisation complexe ; notifications push |

**Priorité delivery :** P2 (UC-09)

---

## Synthèse des dépendances

| Domaine | Dépend de | Alimente |
|---------|-----------|----------|
| Chantier | — | Tous les autres |
| Client / adresse | Chantier | — |
| Tâches | Chantier | Prochaines actions |
| Réserves | Chantier | Prochaines actions |
| Jalons / planning | Chantier | Prochaines actions |
| Retard | Chantier | Prochaines actions, liste chantiers |
| Compte rendu | Chantier | — |
| Prochaines actions | Tâches, réserves, jalons, retard | — |

---

**Documents liés :** `functional-architecture.md`, `navigation-model.md`, `state-model.md`, `2026-07-05-functional-decisions.md`
