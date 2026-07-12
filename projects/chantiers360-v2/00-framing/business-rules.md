# Chantiers360 v2 — Règles métier simples (MVP)

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/business-rules.md`  
**Cycle :** Cadrage détaillé (post PR #95)

> **Note :** règles au **niveau cadrage métier** uniquement.  
> Pas de modèle de données technique. Pas de schéma base de données.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

## 1. Statut chantier

### Valeurs proposées

| Statut | Signification |
|--------|---------------|
| **À démarrer** | Chantier créé, travaux non commencés |
| **En cours** | Travaux en cours |
| **En pause** | Chantier suspendu temporairement |
| **Terminé** | Travaux achevés (suivi clos côté opérationnel) |

### Règles

- Chaque chantier possède **exactement un** statut à un instant donné.
- Le statut par défaut à la création est **À démarrer** (sauf décision Morris contraire).
- Passer en **Terminé** n'empêche pas la consultation — le chantier reste lisible.
- Le statut chantier est **indépendant** des statuts tâches et réserves (pas de calcul automatique imposé au cadrage).

## 2. Statut tâche

### Valeurs proposées

| Statut | Signification |
|--------|---------------|
| **À faire** | Tâche identifiée, non démarrée |
| **En cours** | Tâche en cours de réalisation |
| **Terminée** | Tâche achevée |

### Règles

- Une tâche est **rattachée à un seul chantier**.
- Une tâche possède un **libellé obligatoire** (description courte).
- Le statut par défaut à la création est **À faire**.
- Une tâche terminée reste visible pour historique — pas de suppression imposée au cadrage.

## 3. Statut réserve

### Valeurs proposées

| Statut | Signification |
|--------|---------------|
| **Ouverte** | Réserve identifiée, non traitée |
| **En cours de traitement** | Action engagée pour lever la réserve |
| **Levée** | Réserve résolue |

### Règles

- Une réserve est **rattachée à un seul chantier**.
- Une réserve possède une **description obligatoire** (contenu minimal).
- Le statut par défaut à la création est **Ouverte**.
- Une réserve levée reste visible — traçabilité conservée.

## 4. Jalons simples / planning simple

### Éléments autorisés

| Élément | Description |
|---------|-------------|
| **Date de début prévue** | Date cible de démarrage |
| **Date de fin prévue** | Date cible de fin |
| **Prochaine intervention** | Date ou libellé de la prochaine visite / action terrain |
| **Jalon à venir** | Point de passage simple (ex. : livraison matériaux, fin second œuvre) |
| **Commentaire planning** | Texte libre court |

### Règles

- Tous les éléments sont **optionnels** sauf si Morris impose un minimum à la validation.
- Pas de dépendances entre jalons au MVP.
- Pas de gestion de ressources ou de charges.
- Un jalon ou une date peut être **modifié** sans historique complexe imposé au cadrage.

## 5. Retard

### Règles proposées

- Un chantier peut être marqué **en retard** manuellement par l'utilisateur.
- Option future (à trancher Morris) : retard **suggéré** si la date du jour dépasse la date de fin prévue ou la prochaine intervention non honorée.
- Le retard est un **signal d'attention** — pas une règle comptable ou contractuelle au MVP.
- Un chantier en retard conserve son statut chantier (ex. : En cours + indicateur retard).

## 6. Compte rendu rapide

### Règles

- Un compte rendu est **rattaché à un chantier**.
- Contenu **textuel** — format libre au MVP (structure minimale : date + contenu — à valider Morris).
- Plusieurs comptes rendus possibles par chantier — ordre chronologique consultable.
- Pas de validation client sur le compte rendu au MVP.
- Pas de pièces jointes obligatoires au cadrage MVP.

## 7. Prochaines actions

### Sources possibles (cadrage)

Les prochaines actions peuvent agréger :

- tâches au statut **À faire** ou **En cours** ;
- réserves au statut **Ouverte** ou **En cours de traitement** ;
- **prochaine intervention** ou **jalon à venir** renseigné ;
- chantiers **en retard** ou statut nécessitant attention.

### Règles

- Vue **synthétique** — l'utilisateur identifie quoi traiter en priorité.
- Pas de moteur de priorisation complexe au MVP.
- Saisie manuelle d'actions additionnelles : **question ouverte** Morris (voir `2026-07-05-detailed-framing.md` §9).

## 8. Données obligatoires minimales

### Chantier (création)

| Champ | Obligatoire | Remarque |
|-------|-------------|----------|
| Libellé / nom chantier | ✅ Oui | Identifiant lisible |
| Client | ✅ Oui | Nom ou référence client |
| Adresse | ✅ Oui | Lieu du chantier |
| Statut | ✅ Oui | Défaut : À démarrer |
| Date début / fin prévue | ❌ Non | Optionnel — planning simple |
| Commentaire planning | ❌ Non | Optionnel |

### Tâche

| Champ | Obligatoire |
|-------|-------------|
| Libellé | ✅ Oui |
| Statut | ✅ Oui (défaut : À faire) |
| Chantier rattaché | ✅ Oui |

### Réserve

| Champ | Obligatoire |
|-------|-------------|
| Description | ✅ Oui |
| Statut | ✅ Oui (défaut : Ouverte) |
| Chantier rattaché | ✅ Oui |

### Compte rendu rapide

| Champ | Obligatoire |
|-------|-------------|
| Contenu | ✅ Oui |
| Date | ✅ Oui (auto ou saisie — à trancher Morris) |
| Chantier rattaché | ✅ Oui |

## 9. Règles transverses

- **Un chantier** peut avoir **plusieurs** tâches, réserves, comptes rendus et jalons.
- **Pas de lien** devis / facture / comptabilité au MVP.
- **Pas d'accès client** — données visibles uniquement par l'utilisateur interne.
- **Pas de suppression définitive imposée** au cadrage — comportement exact à définir au cycle architecture fonctionnelle.
- **Données fictives** acceptées en phase pilote.

---

**Documents liés :** `use-cases.md`, `scope-boundaries.md`, `2026-07-05-detailed-framing.md`

**Décisions Morris requises :** validation des statuts, champs obligatoires, règles retard et prochaines actions.
