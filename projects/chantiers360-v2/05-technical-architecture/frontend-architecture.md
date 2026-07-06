# Chantiers360 v2 — Architecture frontend

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/frontend-architecture.md`  
**Cycle :** Architecture technique légère

> Description **documentaire** — aucun composant React ni code généré.

## 1. Référence design Figma P1

| Frame Figma | Node ID | Route cible | Incrément |
|-------------|---------|-------------|-----------|
| 01 — Dashboard cockpit premium | `38:502` | `/` | INC-01 |
| 04 — Création chantier | `38:3` | `/chantiers/nouveau` | INC-01 |
| 02 — Fiche chantier — Tâches | `38:294` | `/chantiers/[id]` (onglet tâches) | INC-01 pivot / INC-02 |
| 03 — Fiche chantier — Réserves | `38:105` | `/chantiers/[id]` (onglet réserves) | INC-01 pivot / INC-02 |

**Lien Figma :** `04-design/figma-brief.md`  
**Captures repo :** `04-design/captures/`

**Écrans P2 sans frame Figma :** jalons, comptes rendus, prochaines actions — s'appuyer sur `02-ux-ui/wireframes-functional.md` en delivery.

## 2. Écrans P1 — mapping technique

### 2.1 Dashboard / liste chantiers (US-02)

| Aspect | Détail |
|--------|--------|
| **Layout** | Header app + zone cartes chantier + CTA création |
| **Données** | Liste `Chantier` — libellé, client, statut, `en_retard` |
| **Interactions** | Clic carte → fiche ; bouton `+ Nouveau` → création |
| **États UI** | Liste vide, liste peuplée, au moins un retard visible |

### 2.2 Création chantier (US-01)

| Aspect | Détail |
|--------|--------|
| **Layout** | Formulaire centré ou panneau — champs obligatoires marqués |
| **Champs** | libellé, client, adresse, statut (défaut À démarrer), planning optionnel |
| **Validation** | Blocage submit si obligatoires manquants |
| **Succès** | Redirection fiche chantier créée |

### 2.3 Fiche chantier pivot (US-03, US-04, US-05)

| Aspect | Détail |
|--------|--------|
| **Layout** | Hero en-tête (identité, statut, retard) + navigation sections (onglets) |
| **En-tête** | Libellé, client, adresse, sélecteur statut, toggle retard |
| **Navigation** | Onglets : Tâches, Réserves — (+ Jalons, CR en P2) |
| **Alignement Figma** | Frame 02/03 — hero premium + onglets |

### 2.4 Section tâches (US-06, US-07) — INC-02

| Aspect | Détail |
|--------|--------|
| **Layout** | Liste tâches + formulaire ajout inline ou modal |
| **Composants** | `TacheList`, `TacheRow`, `StatutTacheSelect`, `AddTacheForm` |
| **États** | Liste vide, liste avec statuts variés |

### 2.5 Section réserves (US-08, US-09) — INC-02

| Aspect | Détail |
|--------|--------|
| **Layout** | Liste réserves + formulaire ajout |
| **Composants** | `ReserveList`, `ReserveRow`, `StatutReserveSelect`, `AddReserveForm` |
| **Distinction visuelle** | Différenciation claire tâche vs réserve (onglets + libellés) |

## 3. Composants UI probables

| Composant | Rôle | Réutilisation |
|-----------|------|---------------|
| `AppHeader` | Titre Chantiers360, navigation globale | Toutes pages |
| `ChantierCard` | Carte dashboard — statut, retard, client | Dashboard |
| `StatutBadge` | Badge coloré statut chantier/tâche/réserve | Partout |
| `RetardIndicator` | Icône/badge retard discret | Dashboard, fiche |
| `ChantierForm` | Création / édition chantier | Création, édition |
| `FicheChantierHero` | En-tête identité chantier | Fiche pivot |
| `SectionTabs` | Onglets tâches / réserves / … | Fiche pivot |
| `EmptyState` | Message liste vide + CTA | Listes |
| `ProchaineActionRow` | Ligne vue transverse | INC-05 |

**Pas de design system package** — composants locaux suffisants au MVP (`design-decisions.md`).

## 4. Navigation

```
Dashboard (/)
    ├── Création (/chantiers/nouveau)
    ├── Fiche (/chantiers/[id])
    │       ├── Onglet Tâches
    │       ├── Onglet Réserves
    │       ├── Onglet Jalons (P2)
    │       └── Onglet Comptes rendus (P2)
    └── Prochaines actions (/prochaines-actions) (P2)
```

**Profondeur max :** 2 niveaux (liste → fiche → section/onglet) — conforme `navigation-model.md`.

**Retours :** lien ou bouton retour dashboard depuis fiche et création.

## 5. États UI

| État | Comportement |
|------|--------------|
| **Loading** | Skeleton ou spinner minimal sur listes |
| **Empty** | Message + CTA (ex. « Aucun chantier — créer le premier ») |
| **Error** | Message inline formulaire ou toast discret |
| **Success** | Redirection ou feedback bref après save |
| **Validation** | Champs obligatoires — feedback visuel sur formulaire création |

Pas de gestion offline au MVP.

## 6. Statuts et badges

| Entité | Valeurs | Affichage proposé |
|--------|---------|-------------------|
| Chantier | À démarrer, En cours, En pause, Terminé | Badge couleur distincte par statut |
| Tâche | À faire, En cours, Terminée | Badge ou select inline |
| Réserve | Ouverte, En cours de traitement, Levée | Badge ou select inline |
| Retard | oui / non | Icône ⚠ ou badge « Retard » discret |

**Alignement Figma :** badges visibles sans ouvrir la fiche sur le dashboard (Frame 01).

## 7. Responsive léger

| Breakpoint | Comportement |
|------------|--------------|
| **Mobile** (< 768px) | Cartes pleine largeur ; onglets scrollables ; formulaire empilé |
| **Tablette / desktop** | Grille cartes 2 colonnes ; fiche avec hero large |

Pas d'app native — web responsive suffit (`ux-ui-overview.md`).

## 8. Dépendances avec design Figma

| Dépendance | Traitement |
|------------|------------|
| Direction premium Frame 01 | Reproduire hiérarchie visuelle — pas pixel-perfect obligatoire |
| Onglets Frame 02/03 | Pattern navigation fiche validé Morris |
| Polish mineur réservé | Non bloquant delivery INC-01 |
| Écrans P2 absents Figma | Wireframes Markdown comme fallback |
| Tokens / DS complet | Non requis — couleurs et espacements cohérents suffisent |

## 9. Limites

- Pas de prototype Figma cliquable requis pour INC-01
- Pas d'animations complexes
- Pas de dark mode au MVP
- Pas de i18n — français uniquement
- Pas de accessibilité WCAG audit complet — bonnes pratiques de base (labels, contrastes)

---

**Documents liés :** `../04-design/screen-design-spec.md`, `application-structure.md`, `../02-ux-ui/screen-map.md`
