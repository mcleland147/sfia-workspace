# Chantiers360 v2 — Limites de scope (MVP)

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/scope-boundaries.md`  
**Cycle :** Cadrage détaillé (post PR #95)

## MVP confirmé

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## Dans le MVP

| Domaine | Contenu | Remarque |
|---------|---------|----------|
| **Chantier** | Création, consultation, liste, mise à jour | Socle produit |
| **Client** | Nom / référence client rattaché au chantier | Donnée minimale |
| **Adresse** | Lieu du chantier | Donnée minimale |
| **Statut chantier** | À démarrer, en cours, en pause, terminé | Voir `business-rules.md` |
| **Tâches** | Ajout, liste, statuts simples | Par chantier |
| **Réserves** | Ajout, liste, statuts simples | Par chantier |
| **Jalons simples / planning simple** | Dates prévues, prochaine intervention, jalon à venir, commentaire | Pas de planning avancé |
| **Retard** | Indicateur ou marquage simple | Signal d'attention |
| **Compte rendu rapide** | Rédaction et consultation textuelle | Par chantier |
| **Prochaines actions** | Vue synthétique des actions à mener | Dérivée tâches / réserves / jalons |

---

## Hors MVP

### Exclusions produit

| Élément | Statut | Commentaire |
|---------|--------|-------------|
| **Devis** | Hors MVP | **Extension métier prioritaire future** — gestion commerciale chantier |
| **Facturation** | Hors MVP | **Extension métier prioritaire future** — module facturation |
| **Intégrations comptables** | Hors MVP | **Extension métier prioritaire future** — sync compta |
| **Accès client** | Hors MVP | Futur espace consultation / validation client final |
| **Planning avancé** | Hors MVP | Ressources, dépendances, charges, Gantt, multi-équipe |
| **Application mobile native** | Hors MVP | Usage web / responsive éventuel — pas d'app native au MVP |
| **IA générative avancée** | Hors MVP | Pas de génération automatique complexe au MVP |
| **Gestion documentaire complète** | Hors MVP | Pas de GED, versioning documentaire |
| **Photos avant / après détaillées** | Hors MVP | Idée future — hors cadrage MVP |

> **Devis, facturation et intégrations comptables** ne sont **pas rejetés définitivement**.  
> Ils sont repositionnés comme **extensions métier prioritaires** à cadrer **après validation du socle chantier** — domaine gestion commerciale distinct du suivi opérationnel.

### Exclusions méthode / delivery

| Élément | Statut | Commentaire |
|---------|--------|-------------|
| **Architecture fonctionnelle détaillée** | Hors ce cycle | Cycle suivant après validation cadrage |
| **Architecture technique** | Hors MVP / hors cycle | Pas de stack, API, schéma DB au cadrage |
| **Code applicatif** | Hors MVP | Pas de `app/`, `backend/`, `frontend/` |
| **Backlog détaillé** | Hors ce cycle | Cycle dédié post architecture fonctionnelle |
| **Reprise Chantiers360 V0** | Interdit | Règle from scratch |
| **Comparaison V0** | Hors MVP | Fin de pilote uniquement — capitalisation méthodologique |

### Exclusions périmètre workspace

| Élément | Statut |
|---------|--------|
| Interv360 (`app/`, `backend/`, etc.) | Non modifié |
| Notion / CMP | Non modifié |
| `.tools/` | Non ajouté |
| Exports design Interv360 | Non ajoutés |

---

## Frontière planning simple / planning avancé

| Planning simple (MVP ✅) | Planning avancé (MVP ❌) |
|--------------------------|---------------------------|
| Date début / fin prévue | Calendrier multi-équipe |
| Prochaine intervention | Gestion des ressources |
| Jalon à venir | Dépendances entre tâches |
| Retard simple | Charges et capacité |
| Commentaire libre | Gantt, critical path |

---

## Frontière socle chantier / extensions commerciales

```
┌─────────────────────────────────────┐
│  MVP — Suivi opérationnel chantier  │
│  chantier, tâches, réserves, statut, │
│  jalons simples, CR rapide, actions  │
└─────────────────────────────────────┘
              │
              ▼ (post-validation socle)
┌─────────────────────────────────────┐
│  Extensions métier prioritaires      │
│  devis → facturation → comptabilité  │
└─────────────────────────────────────┘
              │
              ▼ (ultérieur)
┌─────────────────────────────────────┐
│  Accès client — consultation /       │
│  validation client final             │
└─────────────────────────────────────┘
```

---

## Critères de non-dérive

Le scope reste **conforme** si :

1. Aucune fonctionnalité devis / facturation / compta n'est introduite sans cycle d'extension dédié.
2. Aucun accès client n'est ajouté au MVP initial.
3. Le planning reste au niveau **jalons simples** — pas de montée vers planning avancé.
4. Aucun code ou architecture technique n'est produit dans le cycle cadrage.
5. Chantiers360 V0 n'est ni consultée ni reprise.

---

**Documents liés :** `2026-07-05-detailed-framing.md`, `use-cases.md`, `business-rules.md`, `2026-07-07-project-framing.md`

**Gate :** validation Morris requise avant architecture fonctionnelle.
