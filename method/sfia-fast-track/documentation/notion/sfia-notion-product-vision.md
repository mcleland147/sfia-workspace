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
