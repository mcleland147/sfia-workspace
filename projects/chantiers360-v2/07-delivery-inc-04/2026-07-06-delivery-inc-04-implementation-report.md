# Chantiers360 v2 — Delivery INC-04 — Rapport d'implémentation

**Branche :** `delivery/chantiers360-v2-inc-04`  
**Base :** `04e172c` (main)

## Modèle de données

Table **`comptes_rendus`** — alignée `data-model-light.md` §6 et backlog US-11.

| Champ DB | Type | Obligatoire | Détail |
|----------|------|-------------|--------|
| `id` | uuid | oui | PK auto |
| `chantier_id` | uuid FK | oui | CASCADE delete |
| `contenu` | text | oui | Contenu libre saisi |
| `created_at` | timestamptz | oui | Date auto à la création |
| `updated_at` | timestamptz | oui | Mise à jour serveur |

**Migration :** `app/drizzle/0003_comptes_rendus.sql`

**Décision nommage :** champ `contenu` (backlog / data-model) plutôt que `content` — documenté dans `2026-07-06-delivery-inc-04-decisions.md`.

## Code livré

| Zone | Fichiers |
|------|----------|
| Schéma | `lib/db/schema.ts` — `comptesRendus` |
| Domaine | `lib/comptes-rendus/queries.ts`, `actions.ts`, `format.ts` |
| UI | `AddCompteRenduForm.tsx`, `ComptesRendusSection.tsx`, `ChantierOperationalTabs` (onglet actif), `ChantierFiche`, `app/chantiers/[id]/page.tsx` |
| Tests | `e2e/inc-04.spec.ts` ; `inc-01.spec.ts` US-03 adapté (Comptes rendus actif) |

## Comportement

- Onglet **Comptes rendus** actif sur fiche chantier
- Formulaire textarea — contenu obligatoire
- Date d'enregistrement automatique (`created_at`) — affichée en locale fr-FR
- Historique trié du plus récent au plus ancien
- Plusieurs comptes rendus possibles par chantier
- Pas de workflow de statut, pas d'édition post-création (MVP)

## Hors scope respecté

Aucun code prochaines actions, PDF, signature, pièces jointes, auth, refonte dashboard, V0, Notion/CMP.

---

**Documents liés :** `2026-07-06-delivery-inc-04-validation-report.md`
