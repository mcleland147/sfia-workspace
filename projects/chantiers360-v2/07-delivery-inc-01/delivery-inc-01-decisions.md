# Chantiers360 v2 — Delivery INC-01 — Décisions

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-decisions.md`

## Décision Morris — GO delivery

| # | Décision | Statut |
|---|----------|--------|
| **M7** | GO delivery INC-01 | ✅ **Accordé** (2026-07-06) |
| Périmètre | US-01 à US-04 uniquement | ✅ Respecté |
| Auth | Différée après INC-01 | ✅ Non implémentée |
| DB | PostgreSQL local/dev | ✅ |

## Décisions techniques INC-01

| # | Décision | Détail |
|---|----------|--------|
| D-INC01-1 | Réutilisation spike | Dashboard spike conservé et branché DB |
| D-INC01-2 | ORM | Drizzle + migration `0000_initial.sql` |
| D-INC01-3 | Statuts chantier | À démarrer, En cours, **En retard**, Terminé |
| D-INC01-4 | Écart backlog US-04 | Backlog mentionne « En pause » — livraison Morris utilise « En retard » comme statut explicite ; micro-alignement backlog possible si Morris le demande |
| D-INC01-5 | Sections fiche | Placeholders désactivés tâches/réserves/jalons/CR |
| D-INC01-6 | Panneaux dashboard droite | Mock spike conservés — INC-05+ |

## Décisions Morris attendues

| # | Question | Statut |
|---|----------|--------|
| V1 | INC-01 validé pour PR ? | ✅ **GO PR readiness** — Morris (2026-07-06) — voir `pr-readiness-inc-01.md` |
| V2 | Aligner statuts avec backlog (En pause) ? | ⏳ Optionnel — réserve R-QA-02 acceptée |
| V3 | GO INC-02 ? | ❌ Non — décision séparée post-merge INC-01 |
| V4 | GO QA INC-01 (QA-G3) ? | ✅ **GO QA WITH RESERVES** — Morris (2026-07-06) |

---

**Documents liés :** `delivery-inc-01-overview.md`, `../03-backlog/acceptance-criteria.md`
