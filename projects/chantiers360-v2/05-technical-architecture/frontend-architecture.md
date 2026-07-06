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
| Direction premium Frame 01 | Reproduire hiérarchie visuelle — objectif pixel-close desktop (voir §9) |
| Onglets Frame 02/03 | Pattern navigation fiche validé Morris |
| Polish mineur réservé | Non bloquant delivery INC-01 |
| Écrans P2 absents Figma | Wireframes Markdown comme fallback |
| Tokens / DS complet | Non requis — couleurs et espacements cohérents suffisent |

## 9. Fidélité Figma / pixel-close

### Objectif

Valider que la **stack front retenue**, les **captures Figma** et les **node IDs** permettent de reproduire au moins une frame P1 avec une **fidélité visuelle élevée / pixel-close** sur un **desktop de référence**.

> **Ce gate ne garantit pas un pixel-perfect strict.** L'objectif est une reproduction **pixel-close** sur viewport desktop de référence. Le **responsive** et les **données réelles** peuvent nécessiter des **adaptations contrôlées** — documentées et validées par Morris. Ce gate **ne remplace pas** la validation Morris finale.

### Frame de référence recommandée (spike)

| Élément | Valeur |
|---------|--------|
| **Frame** | 01 — Dashboard cockpit premium |
| **Node ID** | `38:502` |
| **Capture repo** | `04-design/captures/01-dashboard-cockpit-premium.png` |
| **Lien Figma** | `04-design/figma-brief.md` — frame Dashboard |

Un **micro-cycle « Figma Fidelity Spike »** pourra être ouvert **après validation architecture**, si Morris l'autorise — spike borné à une frame, sans livrer INC-01 complet.

### Éléments visuels à reproduire (Frame 01)

| Zone | Éléments |
|------|----------|
| **Sidebar** | Navigation latérale, icônes, états actif/inactif, largeur et espacements |
| **Hero / en-tête zone principale** | Titre, sous-titre ou métriques, hiérarchie typographique |
| **Cartes chantier** | Layout grille, ombres/bordures, padding, hover si présent |
| **Badges statut** | Couleurs, rayon, typographie par statut chantier |
| **Indicateur retard** | Badge ou icône discret — visible sans ouvrir fiche |
| **Typographie** | Familles, tailles, graisses, interlignage — alignés capture |
| **Couleurs** | Fond, surfaces, texte primaire/secondaire, accents |
| **Espacements** | Marges, gaps grille, padding cartes — cohérence globale |

### Références de travail

| Référence | Usage |
|-----------|--------|
| **Captures repo** (`04-design/captures/`) | Référence visuelle principale — comparaison côte à côte |
| **Node IDs Figma** | Référence structurelle — hiérarchie, nommage frames |
| **Fichier Figma** | Source détaillée espacements et tokens si exportés |

### Styling — Tailwind recommandé

**Tailwind CSS** est proposé comme **option de styling recommandée** pour faciliter la reproduction pixel-close :

- utilitaires d'espacement et de couleur proches des valeurs Figma ;
- itération rapide sur la frame spike ;
- pas de configuration Tailwind réelle dans ce cycle documentaire.

**Alternative :** CSS Modules — si Morris préfère moins de dépendance utilitaire. Décision liée à T8 et à la décision Morris M10.

### Revue Morris

| Étape | Responsable |
|-------|-------------|
| Comparaison capture vs implémentation spike | Cursor / équipe |
| Validation fidélité pixel-close acceptable | **Morris** — obligatoire |
| Arbitrage adaptations responsive / données réelles | **Morris** |

## 10. Limites

- Pas de prototype Figma cliquable requis pour INC-01
- Pas d'animations complexes
- Pas de dark mode au MVP
- Pas de i18n — français uniquement
- Pas de accessibilité WCAG audit complet — bonnes pratiques de base (labels, contrastes)

---

**Documents liés :** `../04-design/screen-design-spec.md`, `application-structure.md`, `../02-ux-ui/screen-map.md`
