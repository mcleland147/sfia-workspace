# SFIA Fast Track — Notion Publication Plan

## 1. Objectif

Ce document prépare la publication Notion de la documentation SFIA.

Il ne déclenche aucune synchronisation.

Il définit ce qui peut être publié, adapté, exclu ou différé.

## 2. Principes

La publication Notion doit respecter les principes suivants :

- pas de publication automatique ;
- pas de publication sans audit documentaire (cf. `documentation-audit.md`) ;
- pas de publication des documents internes repo ;
- pas de publication des statuts de merge bruts ;
- adaptation éditoriale avant publication ;
- séparation méthode / projet / automation ;
- validation humaine obligatoire avant sync ;
- pas d'exécution `sfia-notion-sync` depuis un cycle documentaire sans go explicite.

## 3. Public cible Notion

| Public | Besoin |
|--------|--------|
| Morris / SFIA owner | Pilotage méthode, consolidation, automation |
| Futurs contributeurs | Comprendre comment travailler en Fast Track |
| Utilisateurs métier | Comprendre la démarche, pas les détails Git |
| Partenaires techniques | Standards, garde-fous, architecture |

## 4. Pages Notion proposées

```text
SFIA Fast Track
├── Vision générale
│   ├── Qu'est-ce que SFIA Fast Track ?
│   ├── Relation Fast Track ↔ Controlled Delivery
│   └── Vision automation (résumé)
├── Méthode de livraison
│   ├── Un cycle = un objectif
│   ├── Branches et PR
│   ├── Post-merge
│   └── Releases jalons
├── Règles et garde-fous
│   ├── Garde-fous globaux
│   ├── Backend / API
│   └── Documentation
├── UI & Figma Design-first
│   ├── Figma Design vs Make
│   ├── Checklist UI premium
│   └── Cas Interv360 Premium UI (résumé)
├── Automatisation SFIA
│   ├── Vision application factory
│   ├── Niveaux d'automatisation
│   └── MVP plateforme (résumé)
├── Templates & checklists
│   ├── Template cycle MVP
│   └── Checklists validation (Chantier 5)
├── Cas de référence Interv360
│   ├── Trajectoire MVP → Premium UI
│   ├── REX — enseignements
│   ├── Audit — état actuel (résumé)
│   └── ADR clés (sélection)
└── Roadmap d'amélioration
    ├── Consolidation (statut)
    └── Prochain projet
```

## 5. Documents publiables

| Document repo | Page Notion cible | Action éditoriale |
|---------------|-------------------|-------------------|
| `sfia-global-capitalization.md` | Méthode de livraison + Règles | Adapter — retirer § merge, simplifier tableaux |
| `figma-design-first-ui-method.md` | UI & Figma Design-first | Publier — léger polish |
| `sfia-automation-architecture.md` | Automatisation SFIA | Résumer — vision + niveaux + MVP plateforme |
| `interv360-mvp-delivery-capitalization.md` | Cas Interv360 — MVP | Publier — focus pattern lots |
| `interv360-application-rex.md` | Cas Interv360 — REX | Adapter — enseignements, pas détails techniques |
| `interv360-final-capitalization.md` | Cas Interv360 — clôture | Fusionner avec REX en une page |
| `premium-design-system.md` | Cas Interv360 — Premium UI | Résumer — objectif, garde-fous, critères |
| `current-application-audit.md` | Cas Interv360 — état actuel | Résumer — décision + réserves |
| `mvp-release-readiness.md` | Méthode — Releases | Extraire pattern release |
| `docs/architecture/sfia-platform-architecture.md` | Vision générale | Publier ou lier |
| `controlled-delivery-standard.md` | Relation méthodes | Page dédiée Controlled Delivery |
| `templates/mvp-delivery-pattern-template.md` | Templates | Publier quand Chantier 5 complété |

## 6. Documents non publiables

| Document / famille | Raison |
|--------------------|--------|
| `sfia-consolidation-roadmap.md` | Pilotage interne consolidation |
| `documentation-audit.md` | Audit interne repo |
| `documentation-structure-target.md` | Cible réorganisation interne |
| `notion-publication-plan.md` | Méta-plan (ce document) |
| Tous § « Statut de merge » | Traçabilité Git interne |
| `07-delivery/inc-01-*` à `inc-04-*` | Historique incrémental obsolète |
| `02-architecture/notion-sync-*` | Logs opérationnels sync |
| `method/interv360-realization/*` | Méthode obsolète |
| `push-and-pr.md`, `pr-preparation.md` | Opérationnel Cursor/Git |
| `02-architecture/cmp-prompt-schema-extension-*` | Technique outillage CMP |
| `docs/workspace-readiness-report.md` | Rapport interne |

## 7. Documents à adapter avant publication

| Document | Adaptation nécessaire |
|----------|----------------------|
| `sfia-global-capitalization.md` | Retirer références commits/PR ; ton contributeur |
| `interv360-application-rex.md` | Moins Interv360-specific dans titres si page générique |
| `current-application-audit.md` | Synthèse 1 page : décision + 5 réserves max |
| `premium-design-system.md` | Retirer historique branches ; garder critères |
| `sfia-automation-architecture.md` | 10 moteurs → schéma visuel ; texte allégé |
| `interv360-final-capitalization.md` | Fusionner avec REX — éviter double lecture |
| ADR Interv360 | Sélection 3–5 ADR représentatifs, pas les 8 + candidat |

## 8. Ordre de publication recommandé

1. **Vision SFIA Fast Track** — synthèse depuis `sfia-global-capitalization` §3–4 ;
2. **Méthode de livraison** — cycles, PR, post-merge, releases ;
3. **Règles et garde-fous** — tableau garde-fous globaux ;
4. **Figma Design-first** — méthode UI complète ;
5. **Automation Architecture Vision** — résumé stratégique ;
6. **Cas Interv360** — MVP pattern + REX + audit résumé + Premium UI ;
7. **Templates / checklists** — après Chantier 5 ;
8. **Roadmap d'amélioration** — consolidation + prochain projet.

## 9. Préparation avant sync

Avant toute exécution `sfia-notion-sync` :

- [ ] valider arborescence cible (`documentation-structure-target.md`) ;
- [ ] valider liste documents publiables (§5) ;
- [ ] adapter les documents (§7) — versions « Notion-ready » si besoin ;
- [ ] exclure documents internes (§6) ;
- [ ] vérifier liens internes repo → liens Notion ;
- [ ] harmoniser titres et niveaux de heading ;
- [ ] définir propriétaire éditorial par page ;
- [ ] dry-run si outillage le permet (`exports/notion/`) ;
- [ ] obtenir **go humain** explicite ;
- [ ] ne pas publier `sfia-notion-sync` depuis un cycle non dédié.

## 10. Décision

Décision proposée :

> La publication Notion doit être préparée comme un produit éditorial, et non comme un simple export automatique du repo.

Volume cible première publication : **~12 pages Notion** (pas ~350 fichiers repo).

## 11. Suites

Ce plan alimente :

- Chantier 5 — règles Notion et templates éditoriaux ;
- `notion-publication-checklist.md` (à créer) ;
- future exécution contrôlée de `sfia-notion-sync` ;
- moteur **Notion Publication Engine** (`sfia-automation-architecture.md` §5.9).
