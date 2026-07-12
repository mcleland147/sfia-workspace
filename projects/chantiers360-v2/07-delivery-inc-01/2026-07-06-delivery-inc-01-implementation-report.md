# Chantiers360 v2 — Delivery INC-01 — Rapport d'implémentation

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-01/2026-07-06-delivery-inc-01-implementation-report.md`

## Résumé

Extension du spike Figma Fidelity (PR #104) vers un socle applicatif INC-01 avec persistance PostgreSQL via Drizzle.

## Fichiers applicatifs principaux

| Zone | Contenu |
|------|---------|
| `app/lib/db/` | Schéma Drizzle `chantiers`, client PostgreSQL |
| `app/lib/chantiers/` | Queries, server actions, mappers, types |
| `app/drizzle/` | Migration initiale `0000_initial.sql` |
| `app/app/chantiers/nouveau/` | US-01 — formulaire création |
| `app/app/chantiers/[id]/` | US-03 / US-04 — fiche + statut |
| `app/app/page.tsx` | US-02 — liste depuis DB |
| `app/components/dashboard/` | Dashboard spike réutilisé (cartes, hero, sidebar) |
| `app/components/chantier/` | Formulaire création, fiche, sélecteur statut |

## Modèle Chantier

Champs : `id`, `title`, `client`, `address`, `status`, dates planning optionnelles, `createdAt`, `updatedAt`.

Statuts INC-01 : **À démarrer**, **En cours**, **En retard**, **Terminé**.

## Spike préservé

- Composants dashboard (Sidebar, Hero, ChantierCard, RightPanels)
- Tokens Tailwind navy / accent
- Panneaux latéraux mockés (prochaines actions hors scope — visuel conservé)

## Commandes exécutées

| Commande | Résultat |
|----------|----------|
| `npm install` | ✅ |
| `npm run lint` | ✅ No ESLint warnings or errors |
| `npm run build` | ✅ (avec `DATABASE_URL` défini) |
| `npm run db:migrate` | ⏳ À exécuter localement après création DB |
| `npm run dev` | ⏳ Test manuel Morris documenté ci-dessous |
| `npm run test:e2e` | ⏳ Playwright — voir `08-qa-test/inc-01/2026-07-06-qa-execution-report.md` |

## QA / Test (cycle INC-01)

| Élément | Détail |
|---------|--------|
| Dossier | `08-qa-test/inc-01/` |
| Outillage | Playwright E2E |
| Standard | SFIA v2.0 Delivery QA/Test — PR #107 |
| QA-G3 | ⏳ GO QA WITH RESERVES proposé — Morris |

## Setup local

```bash
cd projects/chantiers360-v2/app
cp .env.example .env
# Créer la base PostgreSQL chantiers360_v2
npm run db:migrate   # ou npm run db:push
npm run dev
```

## Tests manuels documentés

| Scénario | Attendu |
|----------|---------|
| Liste vide | Message + CTA nouveau chantier |
| Création chantier | Champs obligatoires ; redirect fiche ; statut À démarrer |
| Liste avec chantiers | Cartes cliquables ; filtres client |
| Fiche chantier | Libellé, client, adresse, statut, planning |
| Changement statut | Visible fiche + liste après refresh |
| Navigation | Dashboard → création → fiche → retour dashboard |
| Sections tâches/réserves | Placeholders désactivés INC-02+ |

## Réserves

- Progress ring dérivé du statut (pas de tâches réelles — INC-02)
- Compteurs tâches/réserves à 0 sur les cartes
- Panneaux droite dashboard encore mockés (INC-05+)
- `npm run build` requiert `DATABASE_URL` (pages dynamiques)
- Statuts INC-01 : **En retard** (livraison Morris) vs **En pause** (backlog US-04) — voir `2026-07-06-delivery-inc-01-decisions.md`
