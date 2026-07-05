# Chantiers360 v2 — Modèle d'états fonctionnels

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/01-functional-architecture/state-model.md`  
**Cycle :** Architecture fonctionnelle (post PR #96)

> **Niveau document :** états **métier** — pas de machine à états technique, pas de schéma implémentation.

## 1. Vue d'ensemble

Le MVP comporte **trois familles d'états** indépendants (chantier, tâche, réserve), plus un **indicateur binaire** (retard) et une **vue dérivée** (prochaines actions).

```
Chantier ── statut (4 valeurs) + retard (oui/non)
Tâche    ── statut (3 valeurs)
Réserve  ── statut (3 valeurs)
         │
         └──► Prochaines actions (agrégation dérivée)
```

**Principe Morris :** statuts conservés sans complexification — transitions libres entre états (pas de workflow imposé au MVP).

---

## 2. Statut chantier

### Valeurs

| Statut | Signification |
|--------|---------------|
| **À démarrer** | Chantier créé, travaux non commencés |
| **En cours** | Travaux en cours |
| **En pause** | Chantier suspendu temporairement |
| **Terminé** | Travaux achevés — suivi clos côté opérationnel |

### Règles fonctionnelles

- **Valeur par défaut** à la création : À démarrer.
- **Transitions** : l'utilisateur peut passer d'un statut à tout autre — pas de règle de séquence imposée au MVP.
- **Indépendance** : le statut chantier n'est **pas calculé** à partir des tâches ou réserves.
- **Consultation** : un chantier Terminé reste lisible et modifiable (historique conservé).

### Diagramme fonctionnel (simplifié)

```
        ┌─────────────┐
        │ À démarrer  │◄── défaut création
        └──────┬──────┘
               │  (transitions libres)
    ┌──────────┼──────────┐
    ▼          ▼          ▼
┌────────┐ ┌────────┐ ┌─────────┐
│En cours│ │En pause│ │ Terminé │
└────────┘ └────────┘ └─────────┘
    └──────────┴──────────┘
         (transitions libres entre tous)
```

---

## 3. Statut tâche

### Valeurs

| Statut | Signification |
|--------|---------------|
| **À faire** | Tâche identifiée, non démarrée |
| **En cours** | Tâche en cours de réalisation |
| **Terminée** | Tâche achevée |

### Règles fonctionnelles

- **Valeur par défaut** à la création : À faire.
- **Transitions** : libres entre les trois statuts.
- **Historique** : tâche Terminée reste visible.
- **Impact prochaines actions** : À faire et En cours → apparaissent dans prochaines actions.

---

## 4. Statut réserve

### Valeurs

| Statut | Signification |
|--------|---------------|
| **Ouverte** | Réserve identifiée, non traitée |
| **En cours de traitement** | Action engagée pour lever la réserve |
| **Levée** | Réserve résolue |

### Règles fonctionnelles

- **Valeur par défaut** à la création : Ouverte.
- **Transitions** : libres entre les trois statuts.
- **Historique** : réserve Levée reste visible.
- **Impact prochaines actions** : Ouverte et En cours de traitement → apparaissent dans prochaines actions.

---

## 5. Indicateur retard

### Nature

- **Type** : indicateur binaire sur le chantier (en retard / non).
- **Mode MVP** : **manuel** — l'utilisateur active ou désactive.
- **Option future** : suggestion automatique si date dépassée — **hors MVP**.

### Règles fonctionnelles

- Coexiste avec le **statut chantier** (ex. : En cours + en retard).
- Visible en **liste chantiers** et **fiche chantier**.
- Chantier en retard → apparaît dans **prochaines actions**.
- Retrait du marquage possible à tout moment.

### Diagramme fonctionnel

```
Chantier
   │
   ├── retard : non  (défaut)
   │
   └── retard : oui  ← action manuelle utilisateur
              │
              └──► visible prochaines actions + liste
```

---

## 6. Compte rendu rapide — état implicite

Les comptes rendus n'ont **pas de statut workflow** au MVP.

| Attribut | Règle |
|----------|-------|
| **Date** | Automatique à la création |
| **Contenu** | Texte libre obligatoire |
| **Cycle de vie** | Créé → consultable — pas de modification imposée au cadrage fonctionnel |

---

## 7. Prochaines actions — vue dérivée

### Nature

- **Pas un état** — agrégation fonctionnelle en lecture.
- **Pas de saisie** — Morris : pas de saisie manuelle dédiée au MVP.

### Sources et conditions d'inclusion

| Source | Condition d'inclusion |
|--------|----------------------|
| **Tâche** | Statut = À faire ou En cours |
| **Réserve** | Statut = Ouverte ou En cours de traitement |
| **Jalon / planning** | Prochaine intervention ou jalon à venir renseigné |
| **Retard** | Indicateur retard = oui sur le chantier |

### Relation avec les statuts

```
┌──────────────┐     statut ∈ {À faire, En cours}
│    Tâche     │ ──────────────────────────────────► Prochaines actions
└──────────────┘

┌──────────────┐     statut ∈ {Ouverte, En cours de traitement}
│   Réserve    │ ──────────────────────────────────► Prochaines actions
└──────────────┘

┌──────────────┐     prochaine intervention OU jalon renseigné
│    Jalon     │ ──────────────────────────────────► Prochaines actions
└──────────────┘

┌──────────────┐     retard = oui
│   Chantier   │ ──────────────────────────────────► Prochaines actions
└──────────────┘
```

### Comportement fonctionnel

- Mise à jour **automatique** quand l'état source change (tâche terminée → disparaît des prochaines actions).
- Chaque item permet la **navigation** vers le chantier et la section source.
- Pas de priorisation algorithmique complexe au MVP — ordre simple (ex. : retard en premier, puis par chantier).

---

## 8. Multi-utilisateur — impact sur les états

| Aspect | Règle MVP |
|--------|-----------|
| **Visibilité** | Petite équipe — tous voient les mêmes états |
| **Modification** | Tous les utilisateurs peuvent modifier (pas de rôles fins) |
| **Conflits** | Non traités au niveau fonctionnel MVP — cycle technique ultérieur |
| **Audit** | Non requis au MVP |

---

## 9. Exclusions

- Machine à états technique (XState, workflow engine, etc.)
- Règles de transition automatique entre statuts chantier et tâches
- Calcul automatique du retard au MVP
- États devis / facture / comptabilité
- États accès client (consultation, validation)

---

**Documents liés :** `functional-domains.md`, `functional-decisions.md`, `../00-framing/business-rules.md`
