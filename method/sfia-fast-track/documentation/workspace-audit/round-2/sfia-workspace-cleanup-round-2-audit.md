# SFIA Workspace — Cleanup Round 2 Audit

## 1. Objectif

Ce document audite les incohérences restantes après le premier nettoyage opérationnel du workspace SFIA.

Objectif :

- identifier les incohérences encore présentes ;
- détecter les doublons de dossiers ;
- clarifier les racines méthode ;
- clarifier la numérotation Interv360 ;
- préparer une deuxième passe de nettoyage physique ;
- préparer la mise à jour Notion sur une base réellement propre.

Aucun fichier n'est déplacé dans cet audit.

**Inventaires Round 2 :** `round-2/directory-map-all.txt`, `directory-map-depth3.txt`, `markdown-files-all.txt`, inventaires par zone (`docs-files.txt`, `method-files.txt`, etc.)

## 2. État post-nettoyage initial

Le premier nettoyage (`c89aa30` → `74b420e`, 8 commits) a produit :

| Zone | État |
|------|------|
| `method/sfia-fast-track/` | Structuré (`core/`, `automation/`, `cycles/`, `ui/`, `audit-rex/`, `documentation/`, `templates/`, `checklists/`, `archive/`) |
| `projects/interv360/` | Phases principales normalisées (`04-delivery` … `08-roadmap`) |
| Archives Interv360 | `inc-*`, Notion, clarifications, pre-delivery, Figma v1, ADR précoces |
| Archives méthode | `interv360-realization` |
| Code | `app/`, `backend/`, CI, `tools/cmp-001/` non touchés |

**Mais une revue visuelle et une analyse de contenu révèlent des incohérences structurelles et documentaires persistantes.**

## 3. Incohérences restantes constatées

### 3.1. Racines méthode multiples

| Zone | Rôle actuel observé (contenu lu) | Problème |
|------|----------------------------------|----------|
| `method/` | Méthode active SFIA Fast Track uniquement (`sfia-fast-track/`) | Clair mais isolé — pas de pont explicite vers `docs/methods/` |
| `methods/` | Méthode complémentaire **Controlled Delivery** (14 fichiers, extraite du REX `inc-01`) | Nom quasi identique à `docs/methods/` — confusion systémique |
| `docs/methods/` | Méthodes **plateforme SFIA** : rôles (6), BPMN, archi fonctionnelle, UX reprise (44 fichiers utiles) | « Méthodes » au sens produit SFIA, pas au sens delivery projet |
| `docs/templates/` | Templates documentaires plateforme (BPMN, archi fonctionnelle, UX reprise, Penpot) | Doublon sémantique avec `method/sfia-fast-track/templates/` (cycle, PR, audit, REX) |
| `prompts/` | Catalogue + 7 familles de prompts (`architecture/`, `bpmn/`, `qa/`, `ux-ui/`, `security/`, `tooling/penpot/`) | Troisième couche « méthode » — liens vers `docs/methods/` et `exports/notion/prompts.json` |
| `README.md` racine | Décrit `templates/` et `standards/` **à la racine** | **Obsolète** — ces dossiers n'existent pas ; les vrais chemins sont `docs/templates/` et `docs/standards/` |

**Synthèse :** le workspace opère avec **quatre couches** non indexées ensemble :

1. **Méthode delivery active** → `method/sfia-fast-track/`
2. **Méthode delivery complémentaire** → `methods/controlled-delivery/`
3. **Méthodes plateforme (rôles, process, archi, UX)** → `docs/methods/`
4. **Prompts et templates plateforme** → `prompts/` + `docs/templates/`

`docs/methods/methods-structure-check.md` (2026-06-28) décrit encore une cible avec `templates/` et `standards/` à la racine — **document historique de transition**, non aligné avec l'état réel.

### 3.2. Numérotation Interv360 encore incohérente

| Dossier | Contenu réel (lu) | Problème | Décision proposée |
|---------|-------------------|----------|-------------------|
| `05-release/` | `2026-07-02-mvp-release-readiness.md` — document actif post-MVP | OK | Conserver `05-release/` |
| `05-tests/` | README stub « À venir » — stratégie tests jamais peuplée | **Collision numéro 05** avec `05-release/` | Archiver vers `archive/stubs/05-tests-readme.md` ; créer `04-delivery/tests/` si stratégie tests projet nécessaire |
| `06-audit-rex/` | `current-application-audit.md` (actif, audit 2026) + README hérité de `07-rex` (« À venir », titre obsolète « 07 — REX ») | **README incohérent** avec contenu réel | Réécrire README ; conserver `06-audit-rex/` |
| `06-documentation/` | README stub « À venir » — documentation projet jamais peuplée | **Collision numéro 06** avec `06-audit-rex/` | Archiver stub ; créer `07-documentation/` pour docs projet futures |
| `07-presentation/` | 4 fichiers démo actifs | OK mais bloque le numéro 07 pour documentation | Renommer en `08-presentation/` |
| `08-roadmap/` | 14 roadmaps/cadrages futurs actifs | OK mais devrait être 09 si documentation prend 07 | Renommer en `09-roadmap/` |

**Séquence cible proposée (un numéro = une phase) :**

```text
00-intake → 01-cadrage → 02-architecture → 03-design →
04-delivery → 05-release → 06-audit-rex →
07-documentation → 08-presentation → 09-roadmap
```

### 3.3. `02-architecture/` encore surchargé (31 fichiers racine hors `adr/`)

Après archivage Notion/Figma v1, **31 fichiers Markdown** subsistent à la racine de `02-architecture/` (hors `adr/`). Analyse par contenu :

| Fichier | Contenu réel observé | Classification | Cible proposée |
|---------|---------------------|----------------|----------------|
| `architecture-p1-summary.md`, `architecture-p2-design-impact-summary.md` | Synthèses ADR P1/P2 actives | **Actif** | Conserver |
| `adr/` (9 ADR) | Décisions architecture MVP | **Actif** | Conserver |
| `status-mapping.md`, `status-mapping-summary.md` | Mapping statuts métier | **Actif** | Conserver |
| `geo-ai-arbitration.md`, `rules-rg-prioritization.md` | Arbitrages métier structurants | **Actif** | Conserver |
| `mvp-clarifications.md`, `2026-06-28-closure-without-signature.md` | Clarifications MVP / règles clôture | **Actif** (référence cadrage) | Conserver ou `01-cadrage/` si relecture |
| `notion-publication-tooling-check.md` | Diagnostic outillage Notion (2026-06-27), sans publication | **Log / historique** | `archive/notion-sync/` |
| `2026-06-28-merge-closure-prompt-library-sync.md` | Clôture PR #1 Prompt Library | **Log / historique** | `archive/cmp/` ou `archive/notion-sync/` |
| `prompt-catalog-enrichment-after-ux-ui-v1-standard.md` | Log enrichissement catalogue | **Log** | `archive/cmp/` |
| `prompt-catalog-qa-tester-validation.md`, `prompt-catalog-ux-ui-v1-validation.md` | Logs validation prompts | **Log** | `archive/cmp/` |
| `pull-request-qa-tester-governance-notion-sync.md` | Log PR governance | **Log** | `archive/notion-sync/` |
| `qa-tester-role-candidate-*.md` (3 fichiers) | Recherche rôle QA Testeur | **Méthode plateforme** | `docs/methods/roles/` ou archive si clos |
| `qa-transverse-analysis.md` | Analyse QA transverse | **Actif** ou archiver si clos | À arbitrer humainement |
| `role-methods-enrichment-after-adr-p1.md` (×3 variantes) | Logs enrichissement méthodes rôle | **Log** | `archive/clarification/` |
| `sfia-figma-v1-standard-*.md` (3 fichiers) | Promotion standard Figma v1 — **remplacé** par `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | **Historique** | `archive/figma-v1/` |
| `cmp-project-schema-extension-for-governance-content.md` | Extension schéma CMP | **Log** | `archive/cmp/` |
| `ux-ui-design-research-and-benchmark.md`, `ux-ui-figma-opening-note.md` | Recherche UX pré-design | **Historique** | `archive/pre-delivery-phases/` ou `archive/figma-v1/` |
| `README.md` | Phase « Open » datée juin 2026, décrit ouverture ADR P1 | **Obsolète** (cycle clos) | Réécrire en README index ADR + synthèses actives |

**Estimation :** ~15 fichiers encore archivables dans `02-architecture/` sans perte de référence active.

### 3.4. Docs plateforme / méthode / prompts

| Zone | Fichiers | Rôle réel | Recommandation |
|------|----------|-----------|----------------|
| `docs/foundation/` | `sfia-engineering-principles.md` | Principes plateforme — **actif, publiable Notion** | Conserver ; regrouper sous `docs/platform/` à valider |
| `docs/architecture/` | 6 docs (meta-model, domain, platform, pipeline…) | Architecture **produit SFIA** — **actif** | Conserver ; ≠ architecture projet Interv360 |
| `docs/standards/` | `ux-ui-v1-governance-standard.md` + README | Standard plateforme — **partiellement remplacé** par Fast Track UI method | Conserver avec bandeau « voir aussi Fast Track UI » |
| `docs/knowledge/` | README seul | Stub | Conserver stub ou alimenter depuis Notion |
| `docs/rex/` | README seul | Stub — REX plateforme vs `method/.../audit-rex/` | Clarifier dans README : REX projet vs REX plateforme |
| `docs/adr/` | README seul | Stub ADR plateforme | Conserver |
| `docs/roadmaps/` | `cmp-technical-roadmap.md` | Roadmap outillage CMP — **actif** | Conserver ; lier à `tools/cmp-001/` via README |
| `docs/tooling/penpot/` | 5 docs actifs | Méthode/outillage design Penpot | Conserver |
| `docs/2026-06-27-workspace-readiness-report.md` | Rapport readiness **2026-06-27** pré-Interv360 | **Historique** | `docs/archive/` |
| `docs/methods/` | 44 fichiers méthodes rôles/process/arch/ux | **Actif plateforme** | Conserver ; ne pas fusionner avec `method/` |
| `docs/templates/` | 12 templates BPMN/arch/ux | **Actif plateforme** | Conserver ; distinguer des templates Fast Track |

**Documents à ne pas remonter vers `method/sfia-fast-track/` :** méthodes rôles, BPMN, templates plateforme — ils décrivent le **produit SFIA**, pas le cycle delivery Fast Track.

**Documents Fast Track déjà bien placés :** règles, standards architecture delivery, capitalisations, templates cycle.

### 3.5. Notion / exports / CMP

| Élément | Contenu observé | Recommandation |
|---------|-----------------|----------------|
| `exports/notion/` | 11 JSON + README — snapshots CMP (prompts, templates, knowledge…) | **Conserver** comme référence locale ; rafraîchir avant chantier Notion ; ne pas archiver |
| `tools/cmp-001/` | Connecteur officiel v1.1.1 | **Ne pas toucher** ; documenter depuis README racine |
| `method/.../notion-publication-plan.md` | Plan éditorial — exclut sync brute | **Actif** — base du chantier Notion |
| `prompts/prompt-catalog.md` | Catalogue 39 prompts — source pilote Interv360 | **Actif** ; lien avec `exports/notion/prompts.json` à maintenir |
| Sync Notion | Non exécutée | Préparer pages éditorialisées **avant** tout sync |

**Préparation Notion comme IDE métier :**

1. Index racine clarifiant Git (source) vs Notion (gouvernance) ;
2. Arborescence Round 2 stable **avant** publication ;
3. Publication par lots validés (cf. notion-publication-plan) ;
4. Exclusion : logs archivés, merge summaries, `inc-*`, exports bruts.

### 3.6. Autres incohérences racine

| Élément | Constat | Action proposée |
|---------|---------|-----------------|
| `components/README.md` | Stub seul | Conserver ou documenter lien `exports/notion/components.json` |
| `docker/penpot/` | Stack Penpot self-host | Conserver ; lier depuis `docs/tooling/penpot/` |
| Liens obsolètes | `app/README.md`, audits `workspace-audit/`, archives `inc-*-pr-preparation.md` référencent encore `07-delivery`, `08-presentation` | Phase liens Round 2 |
| `06-audit-rex/current-application-audit.md` | Mentionne encore `07-delivery/` dans § périmètre | Corriger en Round 2 |

## 4. Cible d'arborescence finale proposée

```text
sfia-workspace/
├── README.md                          # Index workspace (à réécrire — structure réelle)
├── docs/
│   ├── README.md
│   ├── platform/                      # option : foundation + architecture fusionnés
│   ├── methods/                       # méthodes plateforme (rôles, process, arch, ux-ui)
│   ├── templates/                     # templates plateforme
│   ├── standards/
│   ├── knowledge/
│   ├── rex/
│   ├── roadmaps/
│   ├── tooling/
│   └── archive/                       # workspace-readiness-report, etc.
├── method/
│   └── sfia-fast-track/               # méthode delivery active
├── methods/
│   ├── README.md
│   └── controlled-delivery/           # méthode complémentaire
├── prompts/                           # familles prompts + catalogue
├── projects/
│   └── interv360/
│       ├── README.md                  # séquence 00–09 documentée
│       ├── 00-intake/
│       ├── 01-cadrage/
│       ├── 02-architecture/           # allégé (ADR + synthèses)
│       ├── 03-design/
│       ├── 04-delivery/
│       │   └── tests/                 # option : ex-05-tests
│       ├── 05-release/
│       ├── 06-audit-rex/
│       ├── 07-documentation/          # nouveau (ex-06-documentation stub)
│       ├── 08-presentation/           # ex-07-presentation
│       ├── 09-roadmap/                # ex-08-roadmap
│       ├── app/
│       ├── backend/
│       └── archive/
├── exports/
│   └── notion/
├── tools/
│   └── cmp-001/
├── components/
└── docker/
```

## 5. Décisions proposées

### Méthode et plateforme

- [ ] Conserver `method/` comme **seule méthode delivery active** (Fast Track)
- [ ] Conserver `methods/` comme **méthodes complémentaires** (Controlled Delivery)
- [ ] Conserver `docs/methods/` comme **méthodes plateforme SFIA** — ne pas déplacer vers `methods/`
- [ ] Créer `docs/SFIA-CONTENT-MAP.md` ou enrichir README racine expliquant les 4 couches
- [ ] Archiver `docs/2026-06-27-workspace-readiness-report.md` et mettre à jour `docs/methods/methods-structure-check.md`
- [ ] Corriger `README.md` racine (supprimer références `templates/` et `standards/` racine inexistants)

### Interv360

- [ ] Archiver stubs `05-tests/` et `06-documentation/`
- [ ] Renommer `07-presentation/` → `08-presentation/`
- [ ] Renommer `08-roadmap/` → `09-roadmap/`
- [ ] Créer `07-documentation/` (vide + README) pour documentation projet
- [ ] Réécrire `06-audit-rex/README.md` et `02-architecture/README.md`
- [ ] Archiver ~15 fichiers logs restants dans `02-architecture/`

### Notion

- [ ] Conserver `exports/notion/` comme snapshots de travail
- [ ] Ne pas exécuter sync avant validation plan Round 2 + arborescence stable
- [ ] Ajouter section CMP/Notion au README racine

## 6. Plan de nettoyage Round 2

| Phase | Action | Commit suggéré |
|-------|--------|----------------|
| 1 | Clarifier racines méthode (README racine, content map, corriger docs obsolètes) | `docs: clarify sfia method roots` |
| 2 | Normaliser phases Interv360 restantes (stubs, renumérotation 07→08, 08→09) | `docs: normalize remaining interv360 phases` |
| 3 | Alléger `02-architecture/` (archives logs restants) | `docs: archive remaining interv360 architecture logs` |
| 4 | Clarifier structure docs plateforme | `docs: clarify sfia platform docs structure` |
| 5 | Indexer prompts, exports Notion, CMP | `docs: index sfia prompts and notion assets` |
| 6 | Corriger liens obsolètes (hors `app/` sauf validation) | `docs: fix post-cleanup broken links` |
| 7 | Rapport final Round 2 | `docs: report sfia workspace cleanup round 2` |

## 7. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Trop déplacer | Perte de lisibilité | Commits séparés ; archive pas suppression |
| Casser liens | Docs cassées | Grep post-phase + correction ciblée |
| Confondre méthode active et plateforme | Mauvaise base Notion | README d'index + content map |
| Archiver un document utile | Perte de référence | Lecture contenu avant mv ; table §3.3 |
| Renommer phases Interv360 | Confusion Git diff | Commits séparés archive puis rename |
| Toucher `app/` par erreur | Hors scope | Zones interdites explicites |

## 8. Décision

Le workspace SFIA **nécessite une deuxième passe de nettoyage** avant d'être considéré comme prêt pour Notion.

Le premier nettoyage a résolu les doublons majeurs (delivery, roadmap, archives `inc-*`). Le Round 2 doit traiter :

- la **sémantique des racines méthode** ;
- la **numérotation unique** Interv360 ;
- l'**allègement final** de `02-architecture/` ;
- l'**indexation** plateforme / Notion / prompts.

## 9. Suite

Après validation humaine :

1. exécuter le nettoyage Round 2 (7 commits) ;
2. produire un rapport final Round 2 ;
3. créer une PR de nettoyage complet (Chantier 5) ;
4. seulement ensuite ouvrir le chantier Notion éditorialisé.
