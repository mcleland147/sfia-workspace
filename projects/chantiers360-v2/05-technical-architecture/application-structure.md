# Chantiers360 v2 — Structure applicative cible

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/application-structure.md`  
**Cycle :** Architecture technique légère

> Structure **cible documentaire** — **aucun dossier `app/`, `backend/` ou `frontend/` n'est créé dans ce cycle.**

## 1. Vue d'ensemble

Application web monolithique légère — une codebase Next.js avec séparation logique en couches :

```
┌─────────────────────────────────────────────────────────┐
│  UI (pages, composants, layouts)                        │
├─────────────────────────────────────────────────────────┤
│  Logique métier (services / use-cases)                  │
├─────────────────────────────────────────────────────────┤
│  Accès données (repositories / queries)                 │
├─────────────────────────────────────────────────────────┤
│  PostgreSQL                                             │
└─────────────────────────────────────────────────────────┘
```

## 2. Arborescence cible (proposition)

> Noms indicatifs — à adapter selon stack validée par Morris.

```
chantiers360-v2-app/          # racine future — NON CRÉÉE dans ce cycle
├── src/
│   ├── app/                  # App Router Next.js — routes et layouts
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Dashboard / liste chantiers
│   │   ├── chantiers/
│   │   │   ├── nouveau/      # Création chantier (US-01)
│   │   │   └── [id]/         # Fiche chantier pivot (US-03)
│   │   │       ├── page.tsx
│   │   │       ├── taches/   # Section tâches (INC-02)
│   │   │       ├── reserves/ # Section réserves (INC-02)
│   │   │       ├── jalons/   # Section jalons (INC-03)
│   │   │       └── comptes-rendus/  # INC-04
│   │   └── prochaines-actions/      # Vue transverse (INC-05)
│   ├── components/
│   │   ├── ui/               # Composants génériques (bouton, badge, carte)
│   │   ├── chantier/         # Carte chantier, en-tête fiche, formulaire
│   │   ├── tache/
│   │   ├── reserve/
│   │   └── layout/           # Header, navigation
│   ├── lib/
│   │   ├── services/         # Logique métier (statuts, prochaines actions)
│   │   ├── db/               # Client DB, schéma ORM
│   │   └── validators/       # Validation champs obligatoires
│   └── types/                # Types métier partagés
├── public/
└── package.json              # NON CRÉÉ dans ce cycle
```

## 3. Pages / routes principales

| Route cible | Écran | Priorité | Incrément | User stories |
|-------------|-------|----------|-----------|--------------|
| `/` | Liste chantiers / dashboard | P1 | INC-01 | US-02 |
| `/chantiers/nouveau` | Création chantier | P1 | INC-01 | US-01 |
| `/chantiers/[id]` | Fiche chantier pivot | P1 | INC-01 | US-03, US-04, US-05 |
| `/chantiers/[id]/taches` | Section tâches | P1 | INC-02 | US-06, US-07 |
| `/chantiers/[id]/reserves` | Section réserves | P1 | INC-02 | US-08, US-09 |
| `/chantiers/[id]/jalons` | Section jalons | P2 | INC-03 | US-10 |
| `/chantiers/[id]/comptes-rendus` | Section comptes rendus | P2 | INC-04 | US-11 |
| `/prochaines-actions` | Vue prochaines actions | P2 | INC-05 | US-12, US-13 |

**Note design Figma :** les frames P1 utilisent des **onglets** sur la fiche chantier (tâches / réserves) plutôt que des routes séparées — implémentation à arbitrer Morris (onglets client vs routes distinctes). Les deux restent compatibles avec cette structure.

## 4. Modules fonctionnels

| Module | Responsabilité | Entités |
|--------|----------------|---------|
| **chantiers** | CRUD chantier, statut, retard | Chantier |
| **taches** | CRUD tâches, statuts | Tâche |
| **reserves** | CRUD réserves, statuts | Réserve |
| **jalons** | Planning simple sur chantier | Attributs Chantier ou entité Jalon |
| **comptes-rendus** | CR chronologique | CompteRendu |
| **prochaines-actions** | Agrégation dérivée lecture seule | Vue dérivée |
| **navigation** | Routing, retours, liens transverses | — |

## 5. Séparation UI / logique métier / données

| Couche | Rôle | Exemples |
|--------|------|----------|
| **UI** | Rendu, interactions, formulaires | `ChantierCard`, `StatutBadge`, `FicheChantierLayout` |
| **Services** | Règles métier, agrégations | `computeProchainesActions()`, `validateChantierCreate()` |
| **Repositories** | Persistance CRUD | `chantierRepository.create()`, `tacheRepository.updateStatut()` |
| **Types** | Contrats données | `Chantier`, `StatutChantier`, `ProchaineAction` |

**Règle :** la logique **prochaines actions** reste en couche service — jamais en saisie UI (`2026-07-05-functional-decisions.md` §5).

## 6. Conventions de nommage (proposition)

| Élément | Convention |
|---------|------------|
| Fichiers composants | PascalCase — `ChantierCard.tsx` |
| Fichiers services | camelCase — `chantierService.ts` |
| Routes App Router | kebab-case — `/chantiers/nouveau` |
| Types / interfaces | PascalCase — `Chantier`, `StatutTache` |
| Tables DB (indicatif) | snake_case pluriel — `chantiers`, `taches`, `reserves` |
| Colonnes DB | snake_case — `statut_chantier`, `en_retard` |

## 7. Règles anti-sur-ingénierie

| # | Règle |
|---|-------|
| 1 | Pas de microservices — monolithe Next.js suffit au MVP |
| 2 | Pas de couche DTO/mapper si types partagés suffisent |
| 3 | Pas de state management global (Redux, Zustand) tant que props + server state suffisent |
| 4 | Pas de design system package séparé au MVP |
| 5 | Pas de tests E2E massifs avant INC-01 fonctionnel |
| 6 | Pas de cache distribué — PostgreSQL direct |
| 7 | Prochaines actions = requête/agrégation — pas de table dédiée |
| 8 | Un seul module `prochaines-actions` — pas de moteur de règles |

## 8. Alignement incréments delivery

| Incrément | Modules activés | Routes minimales |
|-----------|-----------------|------------------|
| **INC-01** | `chantiers`, `navigation` | `/`, `/chantiers/nouveau`, `/chantiers/[id]` |
| **INC-02** | + `taches`, `reserves` | + sections tâches / réserves |
| **INC-03** | + `jalons` | + section jalons, retard |
| **INC-04** | + `comptes-rendus` | + section CR |
| **INC-05** | + `prochaines-actions` | + `/prochaines-actions` |

---

**Documents liés :** `data-model-light.md`, `frontend-architecture.md`, `../03-backlog/delivery-increments.md`
