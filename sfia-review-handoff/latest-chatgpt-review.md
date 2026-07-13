# SFIA Review Pack — Notion Product Space Cycle 1

**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle documentaire
**Type :** 2 — Conception fonctionnelle
**Profil :** Standard
**Branche :** `conception/sfia-notion-product-space`
**Base HEAD :** `c9f8bb5a3c2c78d0ba1a3845ad7d595fdba7810a`
**Verdict :** NOTION PRODUCT DESIGN READY FOR MORRIS REVIEW

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `main` @ `c9f8bb5` |
| Branche active | `conception/sfia-notion-product-space` |
| HEAD | `c9f8bb5a3c2c78d0ba1a3845ad7d595fdba7810a` (inchangé) |
| origin/main | `c9f8bb5` |
| merge-base | `c9f8bb5` |
| Modifications versionnées | **aucune** |
| Fichiers staged | **aucun** |
| Untracked connus | `.sfia/`, `.tmp-sfia-review/` |
| Livrables | 4 fichiers untracked dans `documentation/notion/` |

**Verdict :** PASS

---

## Git Review Index

- base branch : `main`
- HEAD avant : `c9f8bb5a3c2c78d0ba1a3845ad7d595fdba7810a`
- HEAD après : `c9f8bb5a3c2c78d0ba1a3845ad7d595fdba7810a`
- fichiers créés : 4 (notion product design)
- fichiers modifiés : 0 (index notion absent — non applicable)
- commits créés : none
- diff stat : 4 untracked files (~1177 lignes nouvelles)
- review pack : full

---

## Sources consultées

### Méthode obligatoire
1. `prompts/templates/sfia-cycle-execution-template.md`
2. `prompts/templates/09-prepare-notion-mapping.md`
3. `sfia-cycle-routing-guide.md`
4. `sfia-chatgpt-cursor-operating-model.md`
5. `sfia-rules-and-guardrails.md`
6. `sfia-knowledge-layer.md`
7. `sfia-validation-checklist.md` (référencé)
8. `docs/foundation/sfia-engineering-principles.md` (référencé)
9. `docs/architecture/2026-06-27-sfia-decision-engine.md` (référencé)

### Notion historique
10. `archive/notion/notion-target-content-map.md`
11. `archive/notion/notion-publication-plan.md`
12. `sfia-notion-content-categorization.md`
13. `sfia-notion-target-model-and-integration-plan.md`
14. `sfia-notion-current-space-inventory.md`
15. `exports/notion/README.md`

### SFIA core (lecture)
16. `README.md`, `method/sfia-fast-track/README.md`
17. Capitalisation rationalization (contexte — non modifié)

---

## Classification publishable / internal / excluded (synthèse)

| Classe | Exemples | Mode Notion |
|--------|----------|-------------|
| publishable curated | operating-model, rules-and-guardrails, engineering-principles | Page P0 |
| publishable summary | delivery-pipeline, platform-architecture | Page éditorialisée |
| metadata only | prompt-catalog, templates 01–10 | Base Référentiel |
| case-study candidate | Interv360 capitalizations | P1 §09 |
| internal only | cartography v2.6, lot execution reports | Exclu |
| excluded | code, CI, cmp-001, exports JSON | Exclu |

---

## Décisions Morris

### Validées (reprises)
- Couche Notion métier/marketing/pédagogique
- Git source de vérité ; pas de miroir repo
- Architecture et gouvernance avant publication
- Pas de pages Notion ce cycle

### Requises (futures)
- M1 Valider architecture MVP
- M2 Modèle page + métadonnées
- M3 Legacy vs nouvel espace
- M4 GO publication P0
- M5 Sélection cas P1

---

## Réserves

1. v2.5 cycles candidate — badge obligatoire sur §04
2. Effort backlog indicatif
3. Pas d'index notion/README — navigation index non modifié (fichier absent)
4. Anciens plans notion (target-model 7 lots) supplantés — référence historique

---

## Garde-fous confirmés

- Aucune page Notion créée ✓
- Aucune sync/API ✓
- Aucune modification CMP ✓
- Aucun prompt/template/core modifié ✓
- Aucun commit branche projet ✓
- grep : interdictions documentées uniquement ✓

---

## Content coverage

| Champ | Valeur |
|-------|--------|
| created product vision full content | yes |
| created information architecture full content | yes |
| created publication governance full content | yes |
| created MVP backlog full content | yes |
| modified index full diff | not applicable |
| useful diffs included | yes |
| synthesis only | no |
| review pack verdict | complete |

---

# FICHIER 1 — sfia-notion-product-vision.md (complet)

# SFIA Notion — Product Vision

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-product-vision.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle documentaire
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut :** **Candidate** — contrat produit — **aucune page Notion créée**
**Branche :** `conception/sfia-notion-product-space`
**Base Git :** `main` @ `c9f8bb5a3c2c78d0ba1a3845ad7d595fdba7810a`

---

## 1. Problème adressé

Le repository `mcleland147/sfia-workspace` concentre la méthode SFIA, les fondations, les prompts, les templates, les checklists, les capitalisations et les projets de référence. Cette richesse est **indispensable pour l'exécution** mais **inadaptée comme porte d'entrée** pour la majorité des audiences :

| Friction | Manifestation |
|----------|---------------|
| Densité technique | Arborescence profonde, vocabulaire Git/Cursor, statuts candidate/validated |
| Multiplicité des entrées | `docs/`, `method/`, `prompts/`, `projects/` sans parcours unique |
| Absence de couche métier | Peu de synthèse orientée décision, onboarding ou démonstration commerciale |
| Historique Notion obsolète | Anciens plans (`archive/notion/`), exports JSON (`exports/notion/`) non alignés v2.4/v2.6 |
| Risque de duplication | Tentation de miroir repo ou de seconde source canonique |

**Observation :** les audits antérieurs (`sfia-notion-content-categorization.md`, `sfia-notion-live-export-audit.md`) confirment qu'**environ 720+ documents** restent repo-only ; seule une **fraction éditorialisée** mérite une surface Notion.

---

## 2. Vision du produit Notion SFIA

> **SFIA Notion** est la couche de **compréhension, navigation, pédagogie et démonstration** de la méthode SFIA — pas son moteur d'exécution.

| Couche | Rôle |
|--------|------|
| **Git** | Source de vérité — canonique, versionné, décisions, prompts, templates, rapports |
| **Notion** | Produit documentaire éditorialisé — onboarding, vision métier, parcours, cas d'usage |
| **Démonstration** | Accès guidé aux preuves (Interv360, Chantiers360) sans exposer le repo brut |

**Positionnement :** un **IDE métier lisible** pour comprendre SFIA et décider comment l'appliquer — jamais un substitut à Git pour modifier la méthode.

---

## 3. Proposition de valeur

| Bénéfice | Description |
|----------|-------------|
| **Métier** | Comprendre SFIA en 5–30 minutes ; identifier le cycle et le profil adaptés ; voir les gates Morris |
| **Marketing** | Présenter la méthode, la trajectoire produit et les cas de référence sans exposer la complexité repo |
| **Onboarding** | Parcours structurés par persona — du dirigeant au développeur — avec liens vers sources Git |
| **Gouvernance** | Traçabilité source → page ; statuts ; propriétaires ; règle « Git prime » en cas de divergence |
| **Capitalisation** | Surface les synthèses et REX ; les rapports d'exécution restent repo avec résumé Notion si pertinent |

---

## 4. Objectifs

| # | Objectif | Mesure de succès MVP |
|---|----------|----------------------|
| O1 | Permettre la **découverte** SFIA sans ouvrir le repository | Parcours 5 min complétable |
| O2 | Expliquer **comment fonctionne un cycle** SFIA | Page cycle + base Cycles peuplée (≥15 entrées) |
| O3 | Orienter vers le **bon type de cycle / profil** | Matrice routage accessible |
| O4 | Documenter **gouvernance Git ↔ Notion** | Workflow publié et appliqué sur P0 |
| O5 | Fournir **référentiel** et **glossaire** initial | Base Référentiel + page glossaire |
| O6 | Préparer **cas d'usage** (P1) sans publier projets bruts | Backlog P1 structuré |
| O7 | Garantir **traçabilité Git** sur chaque page P0 | Métadonnées source obligatoires |

---

## 5. Non-objectifs

| Non-objectif | Confirmation cycle 1 |
|--------------|---------------------|
| Créer des pages Notion | **Non** |
| Synchroniser ou publier | **Non** |
| Miroir de l'arborescence Git | **Non** |
| Remplacer Git comme source canonique | **Non** |
| Automatiser Git → Notion (CMP, API) | **Non** — hors MVP |
| Publier code, CI, secrets, cartographie v2.6 | **Non** |
| Promouvoir SFIA v2.6 baseline | **Non** — v2.4 reste baseline |
| Modifier la méthode canonique | **Non** |

---

## 6. Audiences

| Audience | Besoin principal | Niveau de lecture |
|----------|------------------|-------------------|
| Dirigeant / prospect | Valeur, différenciation, preuve | Découverte (5 min) |
| Chef de projet / PMO | Cycles, gates, livrables, mise en œuvre | Compréhension (30 min) |
| PO / Business Analyst | Cadrage, backlog, articulation métier | Compréhension + pratique |
| Architecte | Standards, décisions, pipeline, routage | Technique modéré |
| Développeur / ingénieur | Prompts, templates, garde-fous, PR | Technique opérationnel |
| Responsable méthode / qualité | Règles, checklists, validation, capitalisation | Méthode complet |
| Nouvel utilisateur SFIA | Par où commencer, glossaire, premiers pas | Onboarding |

---

## 7. Personas prioritaires

### 7.1 Dirigeant / prospect

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Pourquoi SFIA ? Quel problème résout-il ? Preuve de maturité ? |
| **Ce qu'il doit comprendre** | Méthode contrôlée, cycles courts, IA assistée, gouvernance humaine (Morris) |
| **Ce qu'il ne doit pas lire dans Git** | Prompt catalog, merge commits, cartographie CSV, rapports d'exécution lot par lot |
| **Parcours d'entrée** | Accueil → Proposition de valeur → Cas d'usage (P1) → Documents de référence (liens) |

### 7.2 Chef de projet / PMO

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Enchaînement des cycles, profils, gates, livrables attendus, mise en place |
| **Ce qu'il doit comprendre** | Cycle = un objectif ; PR ; post-merge ; readiness unique ; Morris décide |
| **Ce qu'il ne doit pas lire dans Git** | `sfia-cycle-execution-template.md` intégral, automation engines, `.sfia/` |
| **Parcours d'entrée** | Accueil → Comment fonctionne un cycle → Cycles/profils/gates → Mettre SFIA en place |

### 7.3 PO / Business Analyst

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Cadrage, user stories, articulation fonctionnelle, templates métier |
| **Ce qu'il doit comprendre** | Types de cycles 1–15 ; routage demande → cycle ; blocs activables |
| **Ce qu'il ne doit pas lire dans Git** | Familles de prompts techniques, checklists validation engine |
| **Parcours d'entrée** | Comprendre SFIA → Routage → Templates/prompts/livrables (vue métier) |

### 7.4 Architecte

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Decision engine, pipeline, standards, architecture fonctionnelle/technique |
| **Ce qu'il doit comprendre** | Principes foundation ; gates architecture ; lien Git pour détail |
| **Ce qu'il ne doit pas lire dans Git** | Intégralité `docs/architecture/` sans filtre ; ADR projet non sélectionnés |
| **Parcours d'entrée** | Proposition de valeur → Gouvernance → Documents de référence (architecture) |

### 7.5 Développeur / ingénieur

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Comment exécuter un cycle Cursor ; templates ; garde-fous ; PR readiness |
| **Ce qu'il doit comprendre** | Operating model ; profils Light/Standard/Critical ; chemins protégés |
| **Ce qu'il ne doit pas lire dans Git** | Capitalisations v2.6, audits workspace, `.github/workflows` |
| **Parcours d'entrée** | Comment fonctionne un cycle → Templates/prompts → Gouvernance (garde-fous) |

### 7.6 Responsable méthode / qualité

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Règles, checklists, validation, capitalisation, traçabilité |
| **Ce qu'il doit comprendre** | Knowledge layer ; routing matrix ; review pack ; handoff ; no raw mirror |
| **Ce qu'il ne doit pas lire dans Git** | Tous les rapports lot-* — synthèses suffisent |
| **Parcours d'entrée** | Gouvernance → Documents de référence → Base Référentiel |

### 7.7 Nouvel utilisateur SFIA

| Dimension | Contenu |
|-----------|---------|
| **Ce qu'il cherche** | Par où commencer ; vocabulaire ; premiers pas concrets |
| **Ce qu'il doit comprendre** | SFIA = méthode + Git + ChatGPT/Cursor ; Notion = guide |
| **Ce qu'il ne doit pas lire dans Git** | Tout le repo en vrac |
| **Parcours d'entrée** | Accueil → Comprendre SFIA → Glossaire → Onboarding projet (P1) |

---

## 8. Cas d'usage principaux

| # | Cas d'usage | Persona | Résultat attendu |
|---|-------------|---------|------------------|
| UC1 | Découvrir SFIA avant un RDV commercial | Dirigeant | Pitch 5 min + lien preuve |
| UC2 | Lancer un nouveau projet avec SFIA | Chef de projet | Parcours onboarding + checklist mise en place |
| UC3 | Identifier le cycle pour une demande Morris | PO / PMO | Matrice routage + profil recommandé |
| UC4 | Préparer une exécution Cursor | Développeur | Lien vers template + garde-fous |
| UC5 | Auditer conformité méthode | Qualité | Pages gouvernance + sources Git |
| UC6 | Comprendre un cas Interv360 / Chantiers360 | Tous | Cas d'usage éditorialisé (P1) — pas repo projet |
| UC7 | Mettre à jour une page après merge Git | Responsable éditorial | Workflow gouvernance § publication |

---

## 9. Niveaux de lecture

| Niveau | Durée | Contenu | Pages clés |
|--------|-------|---------|------------|
| **L0 — Flash** | 30 s | Une phrase + CTA | Accueil (hero) |
| **L1 — Découverte** | 5 min | Valeur + schéma cycle | Accueil, Proposition de valeur |
| **L2 — Compréhension** | 30 min | Cycles, profils, routage, gouvernance | §01–07 MVP |
| **L3 — Mise en œuvre** | 2–4 h | Templates, prompts, mise en place, bases | §06, §08, bases |
| **L4 — Référence** | Au besoin | Documents fondateurs, glossaire, liens Git | §10, §11, Référentiel |

---

## 10. Articulation Git / Notion / démonstration

```text
Git (canonique)
  ├── modification structurante → PR → merge
  └── sources référencées par métadonnées Notion

Notion (éditorial)
  ├── synthèse, navigation, pédagogie
  ├── bases structurées (Référentiel, Cycles)
  └── lien retour Git (chemin, commit, statut)

Démonstration (cas d'usage)
  ├── Interv360 / Chantiers360 — extraits éditorialisés
  └── jamais export brut projet ou code
```

**Règle absolue :** en cas de divergence texte ou statut → **Git prime** ; Notion porte une bannière « vérifier source Git » si écart détecté.

---

## 11. Bénéfices par dimension

### Métier
- Réduction du temps de cadrage méthodologique
- Langage commun cycles / profils / gates
- Visibilité sur ce qui est candidate vs validated

### Marketing
- Surface professionnelle distincte du repo technique
- Cas d'usage et preuves sans exposer la dette documentaire interne
- Storytelling cohérent SFIA v2.4 baseline

### Onboarding
- Parcours persona sans surcharge
- Glossaire et référentiel centralisés
- Lien explicite vers assets d'exécution Git

---

## 12. Critères de succès du MVP

| # | Critère | Validation |
|---|---------|------------|
| C1 | 11 sections architecture P0 couvertes par au moins une page | Revue Morris post-cycle 3 |
| C2 | 100 % pages P0 avec métadonnées Git (source, commit, statut) | QA cycle 4 |
| C3 | Parcours 5 min et 30 min documentés et testables | Test utilisateur |
| C4 | Base Référentiel ≥ 25 entrées P0 | Inventaire backlog |
| C5 | Base Cycles ≥ 15 cycles projet documentés | Alignement routing guide v2.5 candidate |
| C6 | Aucune page sans propriétaire éditorial | Gouvernance |
| C7 | Zéro instruction de raw sync ou auto-publish dans contenu | grep QA |
| C8 | Ancien espace Notion traité comme legacy (décision cycle 3) | Gate Morris |

---

## 13. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Miroir repo | Confusion canonique ; dette sync | Doctrine no raw mirror ; classification sources |
| Obsolescence Notion | Pages désalignées post-merge | Métadonnées commit ; revue périodique |
| Scope creep P1 | Retard MVP | Backlog P0 strict ; gates Morris |
| Duplication anciens exports JSON | Contenu erroné | `exports/notion/` exclu — régénération contrôlée |
| Terminologie SFA/SFIA résiduelle | Incohérence | Harmonisation éditoriale cycle 2 |
| Sur-publication Interv360 | Fuite détail technique | case-study candidate — sélection Morris |

---

## 14. Hypothèses

1. **SFIA v2.4** reste baseline opérationnelle pendant la conception et le MVP.
2. **Morris** reste autorité de décision pour gates structurants et publication.
3. **Publication Notion** reste manuelle assistée (L0–L1) pour le MVP.
4. **ChatGPT** consommera le handoff Git pour revues — pas Notion comme source prompts.
5. **L'espace Notion legacy** existe ou existera — stratégie archive plutôt que suppression immédiate.
6. **Les ~18 pages dédiées** identifiées dans `sfia-notion-content-categorization.md` restent un ordre de grandeur valide.

---

## 15. Décisions Morris déjà validées

| Décision | Statut |
|----------|--------|
| Créer une couche Notion métier, marketing et pédagogique | **Validée** |
| Git = source de vérité | **Validée** |
| Ne pas dupliquer brutalement le repository | **Validée** |
| Définir d'abord architecture et gouvernance | **Validée** (présent cycle) |
| Reporter création effective pages Notion | **Validée** |
| Cycle 1 = conception uniquement — pas commit/PR/merge | **Validée** (présent prompt) |

---

## 16. Décisions Morris futures

| # | Décision | Cycle recommandé | Bloquante pour |
|---|----------|------------------|----------------|
| M1 | Valider architecture MVP §01–11 | Post-cycle 1 | Cycle 2 |
| M2 | Valider modèle de pages et métadonnées | Post-cycle 1 | Cycle 2 |
| M3 | Stratégie espace legacy vs nouvel espace | Cycle 3 | Publication |
| M4 | GO publication P0 | Cycle 3 | Création pages |
| M5 | Sélection cas Interv360 / Chantiers360 P1 | Cycle 2–3 | Cas d'usage |
| M6 | Niveau automatisation cible (L0 vs L2) | Post-MVP | CMP |
| M7 | Visibilité externe (partenaires, public) | Cycle 3–4 | Permissions Notion |

---

## 17. Verdict document

**Candidate — prêt pour cohérence avec Information Architecture, Governance et MVP Backlog.**

*Aucune page Notion créée. Aucune synchronisation. Git reste source de vérité.*

---

# FICHIER 2 — sfia-notion-information-architecture.md (complet)

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

---

# FICHIER 3 — sfia-notion-publication-governance.md (complet)

# SFIA Notion — Publication Governance

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-publication-governance.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle
**Statut :** **Candidate** — contrat gouvernance — **aucune publication**
**Branche :** `conception/sfia-notion-product-space`
**Références :** `sfia-knowledge-layer.md` ; `prompts/templates/09-prepare-notion-mapping.md` ; `sfia-rules-and-guardrails.md`

---

## 1. Objectif

Définir les règles de gouvernance entre **Git (source de vérité)** et **Notion (couche éditorialisée)** pour l'espace produit SFIA — sans activer sync, API ou CMP.

---

## 2. Hiérarchie des sources

| Rang | Source | Rôle |
|------|--------|------|
| **1** | Git `main` | Canonique — contenu, historique, décisions validées |
| **2** | Documents foundation / core validated | Norme méthode |
| **3** | Documents candidate | Exploratoires — publication Notion avec mention explicite |
| **4** | Notion | Synthèse, navigation, pédagogie — **jamais** autorité |
| **5** | `exports/notion/*.json` | **Exclu** — préparation historique non source |
| **6** | Espace Notion legacy | Archive — bannière — pas source active |

**Règle de divergence :** si texte, statut ou version diffèrent → **Git prime** ; Notion affiche alerte « source Git à vérifier » jusqu'à resync éditorial validé.

---

## 3. Types de contenu

| Type | Définition | Exemple | Modifiable dans Notion ? |
|------|------------|---------|--------------------------|
| **Contenu canonique** | Copie ou extrait d'un doc Git validated | Engineering principles (résumé) | Non — via Git seulement |
| **Synthèse éditoriale** | Texte rédigé pour Notion, trace Git | Page « Comprendre SFIA » | Oui — avec métadonnées source |
| **Extrait** | Citation courte d'un doc Git | Citation operating model § | Non — regénérer depuis Git |
| **Exemple** | Illustration pédagogique | Schéma cycle | Oui — si non normatif |
| **Schéma** | Diagramme Notion | Parcours 5 min | Oui |
| **Contenu marketing** | Pitch, valeur | Proposition de valeur | Oui — revue Morris |
| **Contenu interne** | Pilotage, réserves | Notes migration | Visibilité interne |
| **Archive** | Contexte historique | Bannière legacy | Lecture seule |

---

## 4. Règles de création

| Règle | Description |
|-------|-------------|
| G-C1 | Aucune page sans **entrée backlog** validée (MVP ou post-MVP) |
| G-C2 | Aucune page sans **propriétaire éditorial** et **audience** |
| G-C3 | Aucune page sans **source Git** référencée (ou justification « contenu marketing pur ») |
| G-C4 | Pas de création en masse depuis export JSON ou arborescence repo |
| G-C5 | Bases créées **après** validation architecture cycle 1 (Morris) |
| G-C6 | Cas d'usage projet : **gate Morris** sélection contenu |

---

## 5. Règles de modification

| Où | Qui | Comment |
|----|-----|---------|
| **Git** | Contributeur + PR + Morris si structurant | Flux normal SFIA |
| **Notion (synthèse)** | Propriétaire éditorial | Mise à jour manuelle post-merge Git source |
| **Notion (métadonnées)** | Propriétaire ou L1 assisté | Commit SHA, date sync |
| **Interdit** | Tout acteur | Modifier un texte canonique **uniquement** dans Notion |

---

## 6. Règles de validation

| Étape | Validateur | Critère |
|-------|------------|---------|
| Conception page (cycle 2) | Morris ou délégué méthode | Alignement IA + vision |
| Contenu éditorial (cycle 2) | Relecture qualité | Lisibilité, L1–L2, pas de jargon Git excessif |
| Pré-publication (cycle 3) | Morris GO | Checklist publication |
| Post-publication (cycle 4) | QA Notion | Métadonnées, liens, cohérence parcours |

**Aucune validation automatique ne remplace un GO Morris pour contenu structurant.**

---

## 7. Workflow de synchronisation cible

```text
Modification structurante (besoin métier/méthode)
  → modification Git (branche dédiée)
  → revue / PR
  → merge main
  → préparation éditoriale (cycle 2 — brouillon Git ou doc dérivé)
  → validation humaine (Morris si structurant)
  → mise à jour page Notion (manuelle L0)
  → ajout commit Git source + date sync
  → contrôle de cohérence (cycle 4 QA)
```

**Ce workflow est une cible — non exécuté au cycle 1.**

### 7.1 Synchronisation inverse (Notion → Git)

**Interdite** pour contenu canonique. **Autorisée** uniquement pour :
- retours UX informationnels (navigation, libellés) → **issue / demande Morris** → éventuel cycle doc Git.

---

## 8. Gestion des versions et statuts

| Champ | Source autorité | Valeurs |
|-------|-----------------|---------|
| Statut documentaire Git | Git frontmatter / cartographie | validated / candidate / historical / draft |
| Statut page Notion | Notion | brouillon / en revue / publié / obsolète |
| Version affichée | Git tag ou version doc | ex. v1.1, v2.4 baseline |
| Commit source | Git `main` | SHA complet |
| Dernière sync | Notion (manuel) | ISO date |

**Page obsolète :** bannière + lien vers remplaçant — pas suppression silencieuse.

---

## 9. Gestion des contenus candidate

| Situation | Règle |
|-----------|-------|
| Doc Git `candidate` | Notion peut publier avec badge **Candidate — non baseline** |
| Promotion validated Git | Mise à jour Notion **obligatoire** dans 30 jours (cible) |
| Doc Git deprecated | Notion → obsolète ou archive contextualisée |

---

## 10. Gestion des archives

- Archives Git : **pas de publication brute** — contextualisation en 1 paragraphe + lien si Morris valide.
- Espace Notion legacy : **renommer** « SFIA Legacy » ; bannière ; **pas de suppression** sans GO explicite.
- `archive/notion/*` : input historique uniquement — ne pas republier tel quel.

---

## 11. Gestion des liens Git

| Type lien | Format recommandé |
|-----------|-------------------|
| Chemin repo | `method/sfia-fast-track/core/sfia-knowledge-layer.md` |
| Lien GitHub | URL commit ou blob sur `main` |
| Branche handoff | **Ne pas** lier comme source canonique |

---

## 12. Propriétaires et responsabilités

| Rôle | Responsabilité |
|------|----------------|
| **Morris (L0)** | Gates publication, doctrine, arbitrages structurants |
| **Propriétaire éditorial Notion** | Cohérence pages assignées, sync post-merge |
| **Mainteneur méthode Git** | PR docs canoniques, statuts validated |
| **Contributeur cycle** | Produit brouillon éditorial cycle 2 — pas publish direct |
| **Cursor / ChatGPT** | Exécution cycles Git — **pas** publication Notion autonome |

---

## 13. Fréquence de revue

| Revue | Fréquence | Périmètre |
|-------|-----------|-----------|
| Cohérence métadonnées P0 | Mensuelle post-MVP | Commit SHA, statuts |
| Parcours utilisateur | Trimestrielle | 5 min / 30 min |
| Classification sources | Semestrielle ou post-lot migration | Matrice IA §7 |
| Gouvernance document | Annuelle ou post-baseline | Présent document |

---

## 14. Critères de dépublication

| Critère | Action |
|---------|--------|
| Source Git supprimée | Page → obsolète + archive |
| Contenu factuellement faux | Dépublication immédiate + correction |
| Doublon avec autre page | Fusion éditoriale |
| Fuite information interne | Restriction visibilité ou retrait |

---

## 15. Contrôle qualité

| Contrôle | Moment |
|----------|--------|
| Métadonnées complètes | Avant publish (cycle 3) |
| grep « raw sync », « auto-publish », `tools/cmp-001` | QA cycle 4 |
| Liens Git résolubles | QA cycle 4 |
| Pas de secret / token | Chaque commit handoff et publish |
| Parcours 5 min sans lien mort P0 | QA cycle 4 |

---

## 16. Sécurité et visibilité

| Niveau | Contenu | Notion |
|--------|---------|--------|
| **Public externe** | Marketing, valeur, cas d'usage sélectionnés | Workspace partagé contrôlé |
| **Contributeur** | Méthode, templates (métadonnées), gouvernance | Membres équipe |
| **Interne** | Cartographie, rapports exécution, roadmaps internes | **Exclu** ou espace privé Morris |
| **Secrets** | `.env`, tokens, CI secrets | **Jamais** |

---

## 17. Niveaux d'automatisation

| Niveau | Description | MVP | Décision structurante |
|--------|-------------|-----|----------------------|
| **L0** | Publication manuelle assistée | **Cible MVP** | Humain |
| **L1** | Contrôle métadonnées (script local, checklist) | Post-MVP | Humain valide |
| **L2** | Génération guidée brouillons éditoriaux Git | Post-MVP | Humain valide |
| **L3** | Publication bornée après validation explicite | Hors cible initiale | Morris GO chaque lot |
| **L4/L5** | Sync continue, CMP payload, API write | **Interdit** sans programme dédié | Morris + sécurité |

**Règle absolue :** aucune décision structurante (doctrine, baseline, gates, publication masse) **ne doit être automatisée**.

### 17.1 Automatisations explicitement interdites (cycle 1–3)

- Raw sync repository → Notion
- `sfia-notion-sync` sans GO explicite
- Modification `tools/cmp-001/`
- Régénération payload JSON CMP pour publish
- API Notion write depuis CI
- Webhook merge → update Notion sans revue

### 17.2 Automatisations autorisées (futures, bornées)

- L1 : script vérifiant présence champs métadonnées avant publish manuel
- L2 : génération brouillon Markdown **dans Git** (cycle 2) — pas dans Notion directement

---

## 18. Intégration avec cycles SFIA futurs

| Cycle SFIA | Rôle gouvernance |
|------------|------------------|
| **Cycle 2** — Préparation éditoriale Git | Produire contenus dérivés versionnés avant Notion |
| **Cycle 3** — Publication Notion contrôlée | Appliquer workflow §7 — L0 uniquement |
| **Cycle 4** — QA espace Notion | Contrôles §15 |

---

## 19. Verdict document

**Gouvernance Git ↔ Notion définie — L0 MVP — interdictions raw sync et CMP explicites.**

*Aucune publication. Aucune synchronisation.*

---

# FICHIER 4 — sfia-notion-mvp-backlog.md (complet)

# SFIA Notion — MVP Backlog

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-mvp-backlog.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle
**Statut :** **Candidate** — backlog exploitable — **non exécuté**
**Branche :** `conception/sfia-notion-product-space`
**Références :** `sfia-notion-product-vision.md` ; `sfia-notion-information-architecture.md` ; `sfia-notion-publication-governance.md`

---

## 1. Objectif

Fournir un backlog structuré (epics, features, pages, contenus) pour les cycles 2–4 — sans ouvrir ni exécuter ces cycles.

---

## 2. Epics

| ID | Epic | Priorité | Cycle SFIA | Gate Morris |
|----|------|----------|------------|-------------|
| E1 | Architecture et gouvernance validées | P0 | Cycle 1 (présent) | Review merge conception |
| E2 | Contenus éditoriaux P0 préparés dans Git | P0 | **Cycle 2** | GO cycle 2 |
| E3 | Espace Notion MVP publié (L0) | P0 | **Cycle 3** | GO publication P0 |
| E4 | QA et cohérence espace Notion | P0 | **Cycle 4** | GO clôture MVP |
| E5 | Cas d'usage et personas P1 | P1 | Cycle 2–3 | Sélection contenu |
| E6 | Automatisation métadonnées L1 | P2 | Post-MVP | GO outillage |

---

## 3. Périmètre MVP par priorité

### P0 — Indispensable MVP

| Élément | Description |
|---------|-------------|
| Accueil | Page d'orientation L0–L1 |
| Comprendre SFIA | Cadre méthode et acteurs |
| Fonctionnement d'un cycle | Séquence cycle + readiness |
| Cycles / profils / gates | Base Cycles + page synthèse |
| Routage | Matrice demande → cycle |
| Templates / prompts / livrables | Vue Référentiel |
| Gouvernance | Garde-fous + lien governance doc |
| Mise en place | Checklist démarrage |
| Glossaire initial | ≥ 20 termes |
| Référentiel minimal | Base ≥ 25 entrées |
| Base cycles minimale | 15 cycles projet |

### P1 — Forte valeur post-MVP immédiat

| Élément | Description |
|---------|-------------|
| Cas d'usage | Interv360, Chantiers360 éditorialisés |
| Parcours personas | Pages ou toggles par persona |
| Documents fondateurs éditorialisés | Foundation/architecture long form |
| Matrices avancées | Blocs activables, Figma contract |
| Exemples projet | 3–5 fiches max |

### P2 — Évolution

| Élément | Description |
|---------|-------------|
| Releases / roadmap Notion | Synthèse roadmaps Git |
| Automatisation contrôles L1 | Scripts métadonnées |
| Publication assistée L2 | Brouillons Git → Notion |
| Contenus commerciaux avancés | Decks, comparatifs |

---

## 4. Backlog détaillé — Pages P0

| ID | Page | Epic | Priorité | Sources Git principales | Effort | Risque | Gate | Cycle | Critères d'acceptation |
|----|------|------|----------|-------------------------|--------|--------|------|-------|------------------------|
| P-00 | Accueil | E3 | P0 | README, method README, knowledge-layer | M | Faible | M4 | 3 | 3 CTA ; schéma Git↔Notion ; métadonnées |
| P-01 | Comprendre SFIA | E2/E3 | P0 | operating-model, engineering-principles | M | Faible | M4 | 2→3 | L1 complet ; 5 termes liés glossaire |
| P-02 | Proposition de valeur | E2/E3 | P0 | global-capitalization-ref, platform-architecture | M | Moyen | M4 | 2→3 | Bénéfices métier/marketing ; pas de jargon merge |
| P-03 | Comment fonctionne un cycle | E2/E3 | P0 | operating-model, cycle-execution-template (extrait) | L | Moyen | M4 | 2→3 | Diagramme séquence ; readiness unique |
| P-04 | Cycles, profils, gates | E2/E3 | P0 | routing-guide, cycle-execution-template §4 | L | Moyen | M1 | 2→3 | 15 cycles ; 4 profils ; base peuplée |
| P-05 | Routage des demandes | E2/E3 | P0 | routing-guide | M | Faible | M1 | 2→3 | Matrice ≥ 8 demandes types |
| P-06 | Templates, prompts, livrables | E2/E3 | P0 | prompt-catalog, templates README | M | Moyen | M4 | 2→3 | Référentiel lié ; pas copie catalog |
| P-07 | Gouvernance et garde-fous | E2/E3 | P0 | rules-and-guardrails, knowledge-layer | M | Faible | M4 | 2→3 | Table garde-fous ; Git prime |
| P-08 | Mettre SFIA en place | E2/E3 | P0 | repository-blueprint, checklists index | M | Faible | M4 | 2→3 | Checklist ≥ 10 items actionnables |
| P-10 | Documents de référence | E3 | P0 | foundation, architecture, core (liste fermée) | S | Faible | M4 | 3 | Vue base Référentiel filtrée |
| P-11 | Glossaire | E2/E3 | P0 | operating-model, routing-guide | M | Faible | M4 | 2→3 | ≥ 20 entrées ; liens croisés |

**Effort :** S = small (< 4h éditorial), M = medium (4–8h), L = large (8–16h)

---

## 5. Backlog — Bases et contenus

| ID | Feature | Type | Priorité | Sources | Responsable | Cycle | Critères d'acceptation |
|----|---------|------|----------|---------|-------------|-------|------------------------|
| B-A | Base Référentiel SFIA | Base | P0 | Voir IA §5 | Éditorial | 3 | 11 propriétés ; ≥ 25 entrées P0 |
| B-B | Base Cycles SFIA | Base | P0 | routing-guide §4 | Éditorial | 3 | 15 lignes ; relation templates |
| C-01 | Brouillon éditorial Accueil | Contenu Git | P0 | — | Cycle 2 | 2 | Fichier dérivé dans `documentation/notion/drafts/` ou équivalent |
| C-02 | Pack brouillons P0 (×9) | Contenu Git | P0 | Sources pages | Cycle 2 | 2 | Un MD dérivé par page P0 |
| C-03 | Checklist publication P0 | Contenu | P0 | governance doc | Cycle 3 | 3 | Dérivée `archive/checklists/notion-publication-checklist.md` |
| C-04 | Stratégie legacy Notion | Décision | P0 | target-model plan | Morris | 3 | M3 tranchée — archive ou nouveau workspace |
| C-05 | Fiche cas Interv360 MVP | Page P1 | P1 | mvp capitalization | Morris | 2–3 | 1 page ; gate sélection |
| C-06 | Fiche cas Chantiers360 | Page P1 | P1 | chantiers capitalization | Morris | 3 | Synthèse post-MVP |
| C-07 | Script L1 métadonnées | Outil | P2 | — | Post-MVP | — | Hors cmp-001 ; local only |

---

## 6. Dépendances

```text
E1 (conception cycle 1)
  → E2 (brouillons Git cycle 2)
    → E3 (publish L0 cycle 3)
      → E4 (QA cycle 4)
E5 (P1) parallèle après E3 partiel
E6 (P2) après E4
```

| ID | Dépend de | Bloque |
|----|-----------|--------|
| B-A, B-B | M1 architecture validée | P-06, P-10 |
| C-02 | E1 merged | E3 |
| E3 | M4 GO publication | E4 |
| C-05, C-06 | M5 sélection | §09 |

---

## 7. Cycles suivants proposés (non ouverts)

### Cycle 2 — Préparation éditoriale dans Git

| Champ | Contenu |
|-------|---------|
| **Objectif** | Produire brouillons éditoriaux versionnés pour pages P0 |
| **Profil** | Standard |
| **Livrables** | `drafts/*.md` ou `editorial/*.md` ; checklist relecture |
| **Interdit** | Notion API ; publish ; CMP |
| **Gate** | GO Morris cycle 2 |

### Cycle 3 — Publication Notion contrôlée

| Champ | Contenu |
|-------|---------|
| **Objectif** | Créer espace MVP ; pages P0 ; bases ; L0 manuel |
| **Profil** | Standard → Critical si espace prod |
| **Livrables** | Espace Notion ; rapport publication ; métadonnées |
| **Interdit** | raw sync ; L3+ sans GO |
| **Gate** | M3 espace + M4 GO publication |

### Cycle 4 — QA / validation espace Notion

| Champ | Contenu |
|-------|---------|
| **Objectif** | Valider parcours, liens, métadonnées, gouvernance appliquée |
| **Profil** | Standard |
| **Livrables** | Rapport QA ; réserves ; verdict MVP |
| **Gate** | Morris clôture MVP |

---

## 8. Matrice effort / risque / responsable

| Lot | Items | Effort cumulé | Risque dominant | Responsable suggéré |
|-----|-------|---------------|-----------------|---------------------|
| Conception (E1) | 4 docs Git | Fait cycle 1 | Scope creep | Cursor + Morris review |
| Éditorial P0 (E2) | 11 brouillons | ~80–100h | Terminologie candidate | Éditorial + méthode |
| Publication (E3) | 11 pages + 2 bases | ~40h | Legacy espace | Morris + éditorial |
| QA (E4) | Parcours + grep | ~16h | Liens morts | Qualité |
| P1 cas d'usage | 3–5 fiches | ~24h | Sur-publication projet | Morris |

---

## 9. Critères d'acceptation globaux MVP

| # | Critère |
|---|---------|
| AC1 | 11 pages P0 existent dans Notion avec modèle commun |
| AC2 | 2 bases peuplées selon seuils IA |
| AC3 | 100 % pages P0 : source Git + commit + propriétaire |
| AC4 | Parcours 5 min et 30 min testés sans lien mort |
| AC5 | Zéro instruction exécutable raw sync / CMP dans contenu publié |
| AC6 | Gouvernance §7 appliquée sur au moins 1 mise à jour pilote |
| AC7 | Legacy Notion traité selon M3 |
| AC8 | Rapport QA cycle 4 — verdict Morris |

---

## 10. Décisions Morris backlog

| ID | Décision | Priorité |
|----|----------|----------|
| M1 | Valider architecture §01–11 | Avant cycle 2 |
| M2 | Valider modèle page + métadonnées | Avant cycle 2 |
| M3 | Legacy vs nouvel espace Notion | Avant cycle 3 |
| M4 | GO publication P0 | Cycle 3 |
| M5 | Sélection cas P1 | Cycle 2–3 |
| M6 | Niveau automatisation post-MVP | P2 |

---

## 11. Réserves backlog

1. Estimation effort indicative — à affiner après cycle 2 premier brouillon.
2. 15 cycles v2.5 **candidate** — badge obligatoire jusqu'à validation baseline Morris.
3. `sfia-notion-target-model-and-integration-plan.md` (7 lots) **supplanté** par ce backlog — conserver comme référence historique.
4. Pas de ligne backlog pour modification `tools/cmp-001` — **exclu**.

---

## 12. Verdict document

**Backlog MVP P0/P1/P2 défini — cycles 2–4 proposés — prêt pour revue Morris.**

*Aucun cycle 2/3/4 ouvert. Aucune page Notion créée.*
