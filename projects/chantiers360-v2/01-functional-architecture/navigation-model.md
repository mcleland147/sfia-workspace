# Chantiers360 v2 — Modèle de navigation fonctionnelle

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/01-functional-architecture/navigation-model.md`  
**Cycle :** Architecture fonctionnelle (post PR #96)

> **Niveau document :** navigation **fonctionnelle** — pas de maquette UI, pas de design visuel.

## 1. Principes de navigation

- **Entrée principale** : liste des chantiers.
- **Pivot** : fiche chantier — accès aux sections opérationnelles.
- **Vue transversale** : prochaines actions — accessible depuis l'entrée principale.
- **Profondeur limitée** : pas plus de 2 niveaux (liste → fiche → section) au MVP.
- **Pas de navigation client** — espace client hors MVP.

## 2. Carte de navigation

```
┌─────────────────────────────────────────────────────────┐
│  ENTREE PRINCIPALE                                       │
│  ┌─────────────────────┐  ┌──────────────────────────┐  │
│  │ Liste des chantiers │  │ Prochaines actions (UC-09)│  │
│  └──────────┬──────────┘  └──────────────────────────┘  │
│             │                                            │
│             │  Créer chantier (UC-01)                    │
│             │  Ouvrir chantier (UC-02)                   │
│             ▼                                            │
│  ┌─────────────────────────────────────────────────────┐│
│  │ FICHE CHANTIER (UC-03)                               ││
│  │  ┌─────────────┐ ┌─────────────┐ ┌───────────────┐  ││
│  │  │ Infos       │ │ Statut      │ │ Retard (UC-07)│  ││
│  │  │ chantier    │ │ chantier    │ │ manuel        │  ││
│  │  │ client      │ └─────────────┘ └───────────────┘  ││
│  │  │ adresse     │                                     ││
│  │  └─────────────┘                                     ││
│  │  ┌─────────────┐ ┌─────────────┐ ┌───────────────┐  ││
│  │  │ Tâches      │ │ Réserves    │ │ Jalons /      │  ││
│  │  │ (UC-04)     │ │ (UC-05)     │ │ planning (06) │  ││
│  │  └─────────────┘ └─────────────┘ └───────────────┘  ││
│  │  ┌─────────────────────────────────────────────┐    ││
│  │  │ Comptes rendus (UC-08)                       │    ││
│  │  └─────────────────────────────────────────────┘    ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## 3. Écrans / zones fonctionnelles

### 3.1 Liste des chantiers

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Point d'entrée — vue d'ensemble |
| **Contenu affiché** | Libellé chantier, client, statut, indicateur retard si actif |
| **Actions** | Créer chantier ; ouvrir fiche ; accéder prochaines actions |
| **Cas d'usage** | UC-01 (création), UC-02 (consultation liste) |
| **Priorité** | P1 |

### 3.2 Fiche chantier — en-tête

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Identité et pilotage global du chantier |
| **Contenu affiché** | Libellé, client, adresse, statut chantier, indicateur retard |
| **Actions** | Modifier statut ; marquer/démarquer retard ; modifier infos de base |
| **Cas d'usage** | UC-03, UC-07 |
| **Priorité** | P1 / P2 |

### 3.3 Section tâches

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Suivi du travail restant |
| **Contenu affiché** | Liste tâches : libellé, statut |
| **Actions** | Ajouter tâche ; modifier statut ; consulter |
| **Cas d'usage** | UC-04 |
| **Priorité** | P1 |

### 3.4 Section réserves

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Suivi des points à lever |
| **Contenu affiché** | Liste réserves : description, statut |
| **Actions** | Ajouter réserve ; modifier statut ; consulter |
| **Cas d'usage** | UC-05 |
| **Priorité** | P1 |

### 3.5 Section jalons / planning simple

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Visibilité calendrier légère |
| **Contenu affiché** | Dates prévues, prochaine intervention, jalon à venir, commentaire |
| **Actions** | Renseigner ; modifier ; consulter |
| **Cas d'usage** | UC-06 |
| **Priorité** | P2 |

### 3.6 Section comptes rendus

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Historique opérationnel textuel |
| **Contenu affiché** | Liste chronologique : date (auto), contenu |
| **Actions** | Rédiger nouveau compte rendu ; consulter historique |
| **Cas d'usage** | UC-08 |
| **Priorité** | P2 |

### 3.7 Prochaines actions

| Élément | Description fonctionnelle |
|---------|---------------------------|
| **Rôle** | Vue synthétique transversale — priorisation quotidienne |
| **Contenu affiché** | Items dérivés : tâches ouvertes, réserves ouvertes, jalons/interventions, chantiers en retard — avec lien vers source |
| **Actions** | Consulter ; naviguer vers chantier ou élément source |
| **Cas d'usage** | UC-09 |
| **Priorité** | P2 |
| **Règle Morris** | Pas de saisie manuelle — contenu 100 % dérivé |

## 4. Flux de navigation typiques

### Flux A — Création et premier suivi (P1)

```
Liste chantiers → [Créer] → Formulaire création → Fiche chantier
                                                      → Section tâches (ajout)
                                                      → Section réserves (ajout)
```

### Flux B — Mise à jour quotidienne (P1)

```
Liste chantiers → Fiche chantier → Modifier statut / tâches / réserves
```

### Flux C — Planification légère (P2)

```
Fiche chantier → Section jalons → Renseigner dates / prochaine intervention
```

### Flux D — Compte rendu terrain (P2)

```
Fiche chantier → Section comptes rendus → [Nouveau] → Saisie contenu libre
                                                        (date auto)
```

### Flux E — Priorisation matinale (P2)

```
Prochaines actions → [Item] → Fiche chantier (section source)
```

## 5. Navigation exclue du MVP

| Zone | Raison |
|------|--------|
| Espace client | Hors MVP — futur consultation / validation |
| Module devis | Extension métier future |
| Module facturation | Extension métier future |
| Intégrations comptables | Extension métier future |
| Planning avancé / Gantt | Hors MVP |
| Paramètres rôles / permissions | Multi-utilisateur simple — pas de gestion fine |
| Administration avancée | Hors MVP |

## 6. Limites avant UX/UI

Ce modèle **ne prescrit pas** :

- disposition visuelle, composants UI, responsive/mobile ;
- libellés exacts des boutons ou menus ;
- animations, modales, onglets vs pages ;
- charte graphique.

Le cycle **UX/UI** traduira ce modèle en parcours écran et wireframes.

---

**Documents liés :** `functional-architecture.md`, `functional-domains.md`, `state-model.md`
