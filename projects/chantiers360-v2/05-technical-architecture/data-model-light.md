# Chantiers360 v2 — Modèle de données léger

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/data-model-light.md`  
**Cycle :** Architecture technique légère

> Modèle **documentaire uniquement** — pas de migration, SQL, ORM ni schéma exécutable.

## 1. Vue relationnelle

```
Chantier (1) ──< (N) Tâche
Chantier (1) ──< (N) Réserve
Chantier (1) ──< (N) CompteRendu
Chantier (1) ── planning simple (attributs intégrés ou entité JalonSimple)
ProchaineAction ── vue dérivée (non persistée)
```

---

## 2. Chantier

| Attribut | Détail |
|----------|--------|
| **Rôle** | Unité centrale de suivi — agrège tâches, réserves, jalons, comptes rendus |
| **User stories** | US-01, US-02, US-03, US-04, US-05, US-10 (partiel) |

### Champs principaux

| Champ | Type logique | Obligatoire | Défaut | Notes |
|-------|--------------|-------------|--------|-------|
| `id` | identifiant | oui | auto | UUID ou serial |
| `libelle` | texte | oui | — | Nom du chantier |
| `client` | texte | oui | — | Nom ou référence client |
| `adresse` | texte | oui | — | Adresse chantier |
| `statut` | énumération | oui | `À démarrer` | À démarrer, En cours, En pause, Terminé |
| `en_retard` | booléen | oui | `false` | Indicateur manuel — pas de calcul auto MVP |
| `date_debut_prevue` | date | non | null | Planning simple |
| `date_fin_prevue` | date | non | null | Planning simple |
| `prochaine_intervention` | date ou texte | non | null | Alimente prochaines actions si renseigné |
| `jalon_a_venir` | texte | non | null | Alimente prochaines actions si renseigné |
| `commentaire_planning` | texte | non | null | Libre |
| `created_at` | datetime | oui | auto | Audit léger |
| `updated_at` | datetime | oui | auto | Audit léger |

### Relations

- **1 → N** Tâches
- **1 → N** Réserves
- **1 → N** Comptes rendus

### Règles simples

- Statut indépendant des tâches/réserves — pas de calcul auto (`state-model.md` §2)
- `en_retard` manuel uniquement au MVP
- Chantier Terminé reste modifiable et consultable

### Hors scope

- Devis, facturation, documents joints, espace client

---

## 3. Tâche

| Attribut | Détail |
|----------|--------|
| **Rôle** | Suivi du travail restant sur un chantier |
| **User stories** | US-06, US-07 |

### Champs principaux

| Champ | Type logique | Obligatoire | Défaut |
|-------|--------------|-------------|--------|
| `id` | identifiant | oui | auto |
| `chantier_id` | FK → Chantier | oui | — |
| `libelle` | texte | oui | — |
| `statut` | énumération | oui | `À faire` |
| `created_at` | datetime | oui | auto |
| `updated_at` | datetime | oui | auto |

**Statuts :** À faire, En cours, Terminée

### Relations

- **N → 1** Chantier

### Règles simples

- Transitions libres entre statuts
- Tâche Terminée reste visible
- Statut ∈ {À faire, En cours} → incluse dans prochaines actions

### Hors scope

- Assignation, dépendances, sous-tâches

---

## 4. Réserve

| Attribut | Détail |
|----------|--------|
| **Rôle** | Point à lever sur un chantier |
| **User stories** | US-08, US-09 |

### Champs principaux

| Champ | Type logique | Obligatoire | Défaut |
|-------|--------------|-------------|--------|
| `id` | identifiant | oui | auto |
| `chantier_id` | FK → Chantier | oui | — |
| `description` | texte | oui | — |
| `statut` | énumération | oui | `Ouverte` |
| `created_at` | datetime | oui | auto |
| `updated_at` | datetime | oui | auto |

**Statuts :** Ouverte, En cours de traitement, Levée

### Relations

- **N → 1** Chantier

### Règles simples

- Transitions libres entre statuts
- Réserve Levée reste visible
- Statut ∈ {Ouverte, En cours de traitement} → incluse dans prochaines actions

### Hors scope

- Validation client, photos avant/après

---

## 5. Jalon simple / planning simple

| Attribut | Détail |
|----------|--------|
| **Rôle** | Visibilité calendrier légère — champs sur Chantier au MVP |
| **User stories** | US-10 |

### Approche proposée

**Option retenue (proposition) :** attributs intégrés sur **Chantier** (`date_debut_prevue`, `date_fin_prevue`, `prochaine_intervention`, `jalon_a_venir`, `commentaire_planning`) — pas d'entité séparée au MVP.

**Alternative :** entité `JalonSimple` 1:1 avec Chantier — à arbitrer Morris si besoin historique jalons.

### Règles simples

- `prochaine_intervention` ou `jalon_a_venir` renseigné → item dans prochaines actions
- Pas de Gantt, pas de dépendances

### Hors scope

- Planning avancé, ressources, multi-équipe

---

## 6. Compte rendu

| Attribut | Détail |
|----------|--------|
| **Rôle** | Historique opérationnel textuel par chantier |
| **User stories** | US-11 |

### Champs principaux

| Champ | Type logique | Obligatoire | Défaut |
|-------|--------------|-------------|--------|
| `id` | identifiant | oui | auto |
| `chantier_id` | FK → Chantier | oui | — |
| `contenu` | texte | oui | — |
| `date_creation` | datetime | oui | auto (serveur) |
| `created_at` | datetime | oui | auto |

### Relations

- **N → 1** Chantier

### Règles simples

- Date enregistrée automatiquement à la création
- Pas de workflow de statut
- Historique chronologique décroissant à l'affichage

### Hors scope

- Modèle documentaire, signature client, pièces jointes

---

## 7. Prochaine action (vue dérivée)

| Attribut | Détail |
|----------|--------|
| **Rôle** | Agrégation lecture seule — priorisation quotidienne |
| **User stories** | US-12, US-13 |

### Nature

- **Non persistée** — calculée à la volée ou via requête agrégée
- **Pas de table** `prochaines_actions`

### Champs affichés (logiques)

| Champ | Source |
|-------|--------|
| `type` | `tache` \| `reserve` \| `jalon` \| `retard` |
| `libelle` | Libellé tâche, description réserve, texte jalon, ou « Chantier en retard » |
| `chantier_id` | FK chantier source |
| `chantier_libelle` | Pour affichage liste |
| `source_id` | ID tâche/réserve si applicable |
| `section_cible` | Route/onglet navigation |

### Conditions d'inclusion

| Source | Condition |
|--------|-----------|
| Tâche | statut ∈ {À faire, En cours} |
| Réserve | statut ∈ {Ouverte, En cours de traitement} |
| Jalon | `prochaine_intervention` ou `jalon_a_venir` renseigné |
| Retard | `en_retard` = true sur Chantier |

### Règles simples

- Mise à jour automatique quand source change
- Ordre simple : retard en premier, puis par chantier
- **Aucune saisie manuelle**

### Hors scope

- Priorisation algorithmique complexe, notifications push

---

## 8. Multi-utilisateur (MVP)

| Aspect | Approche documentaire |
|--------|----------------------|
| Visibilité | Tous voient tous les chantiers |
| Rôles | Aucun au MVP |
| Conflits | Non traités — last-write-wins implicite |
| Audit | `created_at` / `updated_at` uniquement |

---

## 9. Exclusions explicites

- Tables devis, facture, client séparé (client = champ texte sur Chantier)
- Table utilisateurs (sauf si auth ajoutée — décision Morris)
- Fichiers / pièces jointes
- Événements / audit trail complet

---

**Documents liés :** `../01-functional-architecture/state-model.md`, `application-structure.md`, `../03-backlog/user-stories.md`
