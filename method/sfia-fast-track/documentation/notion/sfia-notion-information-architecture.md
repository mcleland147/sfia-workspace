# SFIA Notion — Information Architecture

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-information-architecture.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle
**Statut :** **Candidate** — architecture cible MVP — **aucune page Notion créée**
**Branche :** `conception/sfia-notion-product-space`
**Références :** `sfia-notion-product-vision.md` ; `sfia-knowledge-layer.md` ; `sfia-notion-content-categorization.md`

---

## 1. Principes d'architecture

| Principe | Application |
|----------|-------------|
| **Pas miroir repo** | L'arborescence Git n'est pas reproduite — navigation par **intention** |
| **Hypothèse challengée** | Structure §01–11 validée contre sources Git — écarts documentés |
| **Matrices = vues** | Routage cycles, profils, templates → vues de bases quand possible |
| **Progressive disclosure** | L0–L4 (vision) ; profondeur technique via liens Git |
| **Traçabilité** | Chaque page : `source Git`, `statut`, `commit`, `audience` |

**Écart vs anciens plans :** `archive/notion/notion-target-content-map.md` organisait par domaine technique (UI, Automation, Interv360 massif). L'architecture MVP **priorise le parcours utilisateur** (comprendre → cycler → router → mettre en place) et **reporte** le détail projet en §09 P1.

---

## 2. Arborescence cible MVP

```text
SFIA — Accueil
├── 01 — Comprendre SFIA
├── 02 — Proposition de valeur
├── 03 — Comment fonctionne un cycle
├── 04 — Cycles, profils et gates
├── 05 — Routage des demandes
├── 06 — Templates, prompts et livrables
├── 07 — Gouvernance et garde-fous
├── 08 — Mettre SFIA en place
├── 09 — Cas d'usage                    [P1]
├── 10 — Documents de référence
└── 11 — Glossaire
```

**Bases Notion (hors arborescence page classique) :**

- **Base A — Référentiel SFIA** (pages liées + métadonnées)
- **Base B — Cycles SFIA** (15 cycles projet + variantes)

---

## 3. Spécification des pages MVP

### 3.0 SFIA — Accueil

| Champ | Contenu |
|-------|---------|
| **Objectif** | Orienter en < 30 s ; proposer 3 parcours ; afficher statut produit |
| **Audience** | Tous |
| **Message principal** | SFIA = méthode contrôlée Git-first ; Notion = guide de compréhension |
| **Questions** | Qu'est-ce que SFIA ? Par où commencer ? Où est la source de vérité ? |
| **Contenus** | Hero L0 ; 3 CTA (5 min / 30 min / mise en œuvre) ; schéma Git↔Notion ; liens §01–08 |
| **Sources Git** | `README.md` ; `method/sfia-fast-track/README.md` ; `sfia-knowledge-layer.md` §2 |
| **Profondeur** | L0–L1 |
| **Liens** | → 01, 02, 03, 08, 11 |
| **Statut** | **MVP P0** |

### 3.1 01 — Comprendre SFIA

| Champ | Contenu |
|-------|---------|
| **Objectif** | Poser le cadre : méthode, baseline v2.4, rôles ChatGPT/Cursor/Morris |
| **Audience** | Nouvel utilisateur, PO, chef de projet |
| **Message** | SFIA structure la livraison assistée IA avec gouvernance humaine |
| **Questions** | Qu'est-ce que SFIA ? Qui fait quoi ? Quelle baseline ? |
| **Contenus** | Définition ; acteurs ; cycle de vie document ; candidate vs validated ; schéma |
| **Sources Git** | `sfia-chatgpt-cursor-operating-model.md` ; `docs/foundation/sfia-engineering-principles.md` ; `method/sfia-fast-track/README.md` |
| **Profondeur** | L1–L2 |
| **Liens** | → 02, 03, 07, 11 |
| **Statut** | **MVP P0** |

### 3.2 02 — Proposition de valeur

| Champ | Contenu |
|-------|---------|
| **Objectif** | Articuler bénéfices métier, marketing, onboarding |
| **Audience** | Dirigeant, prospect, chef de projet |
| **Message** | Cycles courts, garde-fous, capitalisation, preuve projets |
| **Questions** | Pourquoi SFIA ? Quels gains ? Quelles preuves ? |
| **Contenus** | Tableau bénéfices ; différenciation ; anti-patterns évités ; teaser cas d'usage P1 |
| **Sources Git** | `sfia-global-capitalization-reference.md` (éditorialisé) ; `docs/architecture/sfia-platform-architecture.md` (résumé) |
| **Profondeur** | L1 |
| **Liens** | → 09 (P1), 03, Accueil |
| **Statut** | **MVP P0** |

### 3.3 03 — Comment fonctionne un cycle

| Champ | Contenu |
|-------|---------|
| **Objectif** | Expliquer un cycle SFIA de bout en bout (sans template intégral) |
| **Audience** | Chef de projet, développeur, qualité |
| **Message** | Un cycle = un objectif ; branche ; exécution Cursor ; revue ; PR ; merge |
| **Questions** | Quelles étapes ? Qui décide ? Qu'est-ce qu'une readiness ? |
| **Contenus** | Diagramme séquence ; Local Git Truth Check ; review pack ; handoff ; post-merge |
| **Sources Git** | `sfia-chatgpt-cursor-operating-model.md` ; `prompts/templates/sfia-cycle-execution-template.md` (extrait) ; `sfia-global-capitalization-reference.md` |
| **Profondeur** | L2 |
| **Liens** | → 04, 06, 07, Base Cycles |
| **Statut** | **MVP P0** |

### 3.4 04 — Cycles, profils et gates

| Champ | Contenu |
|-------|---------|
| **Objectif** | Présenter 15 cycles projet, profils Light/Standard/Critical/Capitalization, gates Morris |
| **Audience** | PMO, PO, responsable méthode |
| **Message** | Qualifier avant d'exécuter ; Critical jamais implicite ; une readiness par cycle |
| **Questions** | Quel cycle ? Quel profil ? Quand STOP ? |
| **Contenus** | Table 15 cycles ; matrice profils ; exemples gates ; lien Base Cycles |
| **Sources Git** | `sfia-cycle-routing-guide.md` ; `prompts/templates/sfia-cycle-execution-template.md` §4–§6 |
| **Profondeur** | L2 |
| **Liens** | → 05, Base Cycles, 07 |
| **Statut** | **MVP P0** — **vue filtrée Base Cycles** |

### 3.5 05 — Routage des demandes

| Champ | Contenu |
|-------|---------|
| **Objectif** | Aider à mapper une demande Morris → type de cycle + profil |
| **Audience** | PO, chef de projet, architecte |
| **Message** | Le routage guide prime ; pas de mémoire conversationnelle implicite |
| **Questions** | Ma demande correspond à quel cycle ? Quel review pack ? |
| **Contenus** | Matrice demande → cycle/profil ; chaîne routing ; exemples |
| **Sources Git** | `sfia-cycle-routing-guide.md` ; `prompts/prompt-catalog.md` (index — pas copie intégrale) |
| **Profondeur** | L2 |
| **Liens** | → 04, 06, Base Cycles |
| **Statut** | **MVP P0** — **vue Base Cycles groupée par catégorie** |

### 3.6 06 — Templates, prompts et livrables

| Champ | Contenu |
|-------|---------|
| **Objectif** | Cartographier assets d'exécution sans dupliquer le catalog |
| **Audience** | Développeur, qualité, contributeur méthode |
| **Message** | Templates et prompts vivent dans Git ; Notion explique quand les utiliser |
| **Questions** | Quel template pour quel cycle ? Où est le prompt ? |
| **Contenus** | Table templates 01–10 + cycle-execution ; familles prompts ; lien repo |
| **Sources Git** | `prompts/templates/README.md` ; `prompts/prompt-catalog.md` ; `method/sfia-fast-track/templates/` |
| **Profondeur** | L3 |
| **Liens** | → Base Référentiel (type=prompt/template), 03, 05 |
| **Statut** | **MVP P0** — **Base Référentiel** |

### 3.7 07 — Gouvernance et garde-fous

| Champ | Contenu |
|-------|---------|
| **Objectif** | Exposer règles, statuts, chemins protégés, doctrine Git↔Notion |
| **Audience** | Responsable méthode, Morris, qualité |
| **Message** | Garde-fous non négociables ; Git prime ; pas de raw sync |
| **Questions** | Que est interdit ? Qui valide ? Comment gérer une divergence ? |
| **Contenus** | Table garde-fous ; protected paths ; workflow sync (résumé) ; lien governance doc |
| **Sources Git** | `sfia-rules-and-guardrails.md` ; `sfia-knowledge-layer.md` ; `sfia-notion-publication-governance.md` |
| **Profondeur** | L2–L3 |
| **Liens** | → 10, `sfia-notion-publication-governance.md` |
| **Statut** | **MVP P0** |

### 3.8 08 — Mettre SFIA en place

| Champ | Contenu |
|-------|---------|
| **Objectif** | Guide pratique démarrage projet / workspace |
| **Audience** | Chef de projet, tech lead |
| **Message** | Prérequis ; structure repo ; premier cycle ; checklist |
| **Questions** | Comment démarrer ? Quels outils ? Quelle première PR ? |
| **Contenus** | Checklist mise en place ; liens Cursor/MCP ; premier cycle recommandé |
| **Sources Git** | `docs/architecture/sfia-repository-blueprint.md` (résumé) ; `method/sfia-fast-track/checklists/` (index) |
| **Profondeur** | L3 |
| **Liens** | → 03, 06, 11 |
| **Statut** | **MVP P0** |

### 3.9 09 — Cas d'usage [P1]

| Champ | Contenu |
|-------|---------|
| **Objectif** | Démontrer SFIA sur cas réels éditorialisés |
| **Audience** | Dirigeant, prospect, chef de projet |
| **Message** | Preuve par l'exemple — pas export projet |
| **Questions** | Comment SFIA a été appliqué ? Quels enseignements ? |
| **Contenus** | Fiches Interv360 (MVP, Premium UI, REX) ; Chantiers360 (synthèse) |
| **Sources Git** | Capitalisations Interv360 ; `projects/interv360/06-audit-rex/` (extraits) ; Chantiers360 phases (sélection) |
| **Profondeur** | L1–L2 |
| **Liens** | → 02, 10 |
| **Statut** | **Post-MVP P1** — gate Morris sélection contenu |

### 3.10 10 — Documents de référence

| Champ | Contenu |
|-------|---------|
| **Objectif** | Index curé des sources canoniques avec liens Git |
| **Audience** | Architecte, responsable méthode |
| **Message** | Liste fermée — pas l'intégralité du repo |
| **Questions** | Où est le document fondateur X ? |
| **Contenus** | **Vue Base Référentiel** filtrée `visibilité=publique` |
| **Sources Git** | Foundation, architecture, core method (liste fermée backlog P0) |
| **Profondeur** | L4 |
| **Liens** | → Base Référentiel, 07 |
| **Statut** | **MVP P0** — **vue base** |

### 3.11 11 — Glossaire

| Champ | Contenu |
|-------|---------|
| **Objectif** | Définir termes SFIA (cycle, profil, gate, handoff, baseline, candidate…) |
| **Audience** | Nouvel utilisateur, tous |
| **Message** | Vocabulaire partagé |
| **Questions** | Que signifie X ? |
| **Contenus** | Entrées glossaire ; liens vers pages détaillées |
| **Sources Git** | Operating model ; routing guide ; engineering principles |
| **Profondeur** | L1–L4 |
| **Liens** | → toutes sections |
| **Statut** | **MVP P0** — peut être **base** ou page unique MVP |

---

## 4. Parcours de lecture

### 4.1 Découverte en 5 minutes

```text
Accueil (L0) → 02 Proposition de valeur → 03 Comment fonctionne un cycle (schéma seul) → CTA « aller plus loin »
```

**Objectif :** pitch + compréhension minimale du mécanisme cycle.

### 4.2 Compréhension en 30 minutes

```text
Accueil → 01 Comprendre SFIA → 03 Cycle → 04 Cycles/profils/gates → 07 Gouvernance (résumé) → 11 Glossaire (5 termes)
```

**Objectif :** opérer une première qualification de demande.

### 4.3 Onboarding projet

```text
08 Mettre SFIA en place → 03 Cycle → 05 Routage → 06 Templates/prompts → Base Cycles (filtre « quasi systématique »)
```

**Objectif :** démarrer un projet avec checklist.

### 4.4 Parcours chef de projet

```text
02 Valeur → 04 Cycles/profils → 05 Routage → 08 Mise en place → Base Cycles
```

### 4.5 Parcours technique

```text
01 Comprendre → 03 Cycle → 06 Templates/prompts → 07 Gouvernance → 10 Référence (architecture)
```

### 4.6 Parcours dirigeant / prospect

```text
Accueil → 02 Proposition de valeur → 09 Cas d'usage (P1) → lien preuve Git optionnel
```

### 4.7 Parcours mise en œuvre

```text
08 Mise en place → 06 Templates → 05 Routage → exécution Git (hors Notion)
```

---

## 5. Base A — Référentiel SFIA

### 5.1 Rôle

Inventorier les **assets et documents** publiables ou référencés — **pas** chaque fichier Markdown du repo.

### 5.2 Propriétés minimales

| Propriété | Type | Obligatoire P0 |
|-----------|------|----------------|
| Titre | Title | oui |
| Type | Select | oui — foundation / architecture / core / rule / routing / template / prompt / checklist / capitalization / case-study / glossary |
| Audience | Multi-select | oui |
| Statut documentaire | Select | oui — validated / candidate / historical / internal |
| Version | Text | oui — ex. v1.1, v2.4 baseline |
| Source Git | URL ou text | oui — chemin repo |
| Commit | Text | oui — SHA dernier sync |
| Dernière synchronisation | Date | oui |
| Propriétaire | Person | oui |
| Périmètre | Select | oui — SFIA method / project / platform / archive |
| Visibilité | Select | oui — public / contributeur / interne |

### 5.3 Entrées P0 indicatives (≥25)

Foundation (engineering principles, decision engine) ; architecture (pipeline, platform, blueprint résumé) ; core (operating model, routing guide, knowledge layer, rules-and-guardrails) ; prompts catalog + templates README ; checklists validation ; 10 templates numérotés (métadonnées) ; cycle-execution template (référence).

### 5.4 Pages vs base

**§06 Templates** et **§10 Documents de référence** = **vues filtrées** de cette base — pas duplication manuelle.

---

## 6. Base B — Cycles SFIA

### 6.1 Rôle

Structurer les **15 cycles projet** v2.5 candidate + liens templates et gates.

### 6.2 Propriétés minimales

| Propriété | Type | Obligatoire P0 |
|-----------|------|----------------|
| Cycle | Title | oui — ex. « 8 — Delivery » |
| Objectif | Text | oui |
| Déclencheurs | Text | oui |
| Profil habituel | Select | oui — Light / Standard / Critical / Capitalization |
| Entrées | Text | oui |
| Livrables | Text | oui |
| Blocs activables | Multi-select | non P0 |
| Gates Morris | Text | oui |
| Template Git | Relation → Référentiel | si applicable |
| Exemple | URL | non P0 |
| Statut | Select | oui — MVP / post-MVP |
| Source canonique | Text | oui — routing guide § |

### 6.3 Pages vs base

**§04 Cycles, profils et gates** et **§05 Routage** = **vues** :
- vue « par catégorie » (A/B quasi systématique / activable)
- vue « matrice demande → cycle »

---

## 7. Matrice de classification des sources Git

| Source Git | Usage Notion | Mode de traitement | Audience | Publier ? | Réserve |
|------------|--------------|-------------------|----------|-----------|---------|
| **Foundation** (`docs/foundation/`) | Principes normatifs | curated page | Contributeur / architecte | Oui — summary+page | v2.4 baseline |
| **Architecture** (`docs/architecture/`) | Vision technique | curated page / summary | Architecte / tech lead | Oui — éditorialiser | Dense — pas tout P0 |
| **Core method** (`method/.../core/`) | Operating model | curated page | Tous méthode | Oui — P0 | candidate tags |
| **Rules / guardrails** | Garde-fous | curated page | Qualité / Morris | Oui — P0 | — |
| **Routing** | Matrices cycles | metadata + base view | PMO / PO | Oui — base Cycles | v2.5 candidate |
| **Cycles** (template execution) | Procédure | summary + lien Git | Exécuteur Cursor | Summary only | Ne pas copier intégral |
| **Profiles** | Qualification | intégré §04 | PMO | Oui — page | — |
| **Templates** (`prompts/templates/`) | Assets exécution | metadata in Référentiel | Développeur | Metadata + lien | Protected — pas modifier via Notion |
| **Prompts** (catalog, families) | Index | base Référentiel | Développeur | Metadata / summary | Catalog = spine |
| **Checklists** | Validation | summary + lien | Qualité | Summary P0 | — |
| **Capitalisation** (v2.5, v2.6) | REX méthode | summary / case-study | Méthode | Sélectif | v2.6 = internal mostly |
| **Projets référence** (Interv360, Chantiers360) | Preuve | case-study candidate | Marketing / PMO | P1 — sélection | Jamais repo brut |
| **Archives** (`archive/`) | Contexte historique | archive contextualized only | Interne | Non sauf bannière | notion-target-content-map obsolète |
| **Rapports d'exécution** (lot-*, execution) | Traçabilité | internal only | Morris | Non | Photographies Git |
| **Fichiers techniques** (CI, tools, code) | — | excluded | — | Non | — |
| **Secrets / configuration** | — | excluded | — | Non | — |
| **exports/notion/** JSON | — | excluded | — | Non | Régénérer si besoin |
| **Cartographie v2.6** | Audit repo | internal only | Morris | Non | — |
| **Repository migration plan** | Pilotage | internal only | Morris | Non | — |

**Légende modes :** `publishable as curated page` | `publishable as summary` | `publishable as metadata only` | `case-study candidate` | `internal only` | `excluded` | `archive contextualized only`

---

## 8. Modèle de page commun

Chaque page Notion P0+ doit inclure :

| Bloc | Description |
|------|-------------|
| **Objectif de la page** | Une phrase |
| **À retenir en 30 secondes** | 3–5 bullets |
| **Explication métier** | Corps principal L1–L2 |
| **Fonctionnement** | Schéma / étapes si applicable |
| **Exemple** | Optionnel P0 ; requis P1 cas d'usage |
| **Points de vigilance** | Garde-fous, erreurs courantes |
| **Sources canoniques Git** | Chemins + statut + commit |
| **Statut** | draft Notion / publié / à revoir |
| **Version / commit** | SHA |
| **Dernière synchronisation** | Date |
| **Propriétaire** | Person |
| **Audience** | Tags |
| **Liens associés** | Pages + bases |

### 8.1 Variantes

| Variante | Spécificité |
|----------|-------------|
| **Page découverte** | L0–L1 dominant ; CTA |
| **Page méthode** | Cycles, profils, process |
| **Page cycle** | Entrée base Cycles ou embed |
| **Page pratique** | Checklists, mise en place |
| **Page document de référence** | Lien Git prominent |
| **Page cas d'usage** | Narratif + preuves |
| **Page glossaire** | Définitions courtes |

---

## 9. Cohérence et écarts documentés

| Écart | Résolution |
|-------|------------|
| Ancien plan 10 sections « Automation / UI » séparés | Fusionné dans §06 et §10 — détail P1 |
| `sfia-notion-target-model-and-integration-plan.md` (7 lots intégration) | Remplacé par backlog cycles 2–4 — référence historique |
| Terminologie SFA | Harmoniser SFIA en cycle 2 éditorial |
| v2.5 cycles candidate | Pages §04 marquent « candidate — v2.4 baseline » |

---

## 10. Verdict document

**Architecture MVP P0 définie — 9 pages P0 + 2 bases + 2 pages P1 — parcours et classification complets.**

*Aucune page Notion créée.*
