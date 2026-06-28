# Interv360 — Inventaire prompts SFIA existants pour Prompt Library

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Type** : Inventaire avant publication  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté  
**Objet** : inventorier les prompts SFIA existants dans Git avant publication Notion

---

## 1. Objectif

Ce document **prépare la publication** des autres prompts SFIA déjà créés dans Git vers la **Prompt Library Notion**, sur le modèle QA / Testeur (payload CMP enrichi, revue manuelle, `create prompt` unitaire, trace Git).

- La famille **QA / Testeur** est **déjà publiée** (PROMPT-QA-001 à PROMPT-QA-010).
- Cette tâche **ne publie rien**.
- L'objectif est d'**éviter les doublons** et d'**identifier les familles prêtes à publier** par lots.

---

## 2. Référentiel analysé

| Source | Rôle |
|--------|------|
| `prompts/` | Arborescence familles ; 2 fichiers prompt Draft ; 1 famille QA |
| `prompts/prompt-catalog.md` | Catalogue maître — §4, §13, §14 |
| `docs/methods/roles/` | Méthodes officielles liées par rôle |
| `exports/notion/prompts.json` | Export Notion Git *(obsolète — 2 entrées ; ne reflète pas les QA publiés)* |
| `tools/cmp-001/src/schemas/prompt.schema.json` | Schéma CMP prompt — catégories et page_content |
| `notion-sync-qa-prompt-library-publication-log.md` | Référence modèle publication réussie |

*Note : `tools/cmp-001/exports/notion/prompts.json` n'existe pas — l'export actif est `exports/notion/prompts.json` à la racine du workspace.*

---

## 3. Prompts déjà publiés

| ID | Nom | Source | Statut |
|----|-----|--------|--------|
| PROMPT-QA-001 | Analyse de testabilité d'un besoin | `prompts/qa/qa-tester-prompt-family.md` + payload CMP | Publié Notion — Draft, QA |
| PROMPT-QA-002 | Revue QA d'une maquette UX/UI | idem | Publié Notion |
| PROMPT-QA-003 | Questions réflexes QA en revue transverse | idem | Publié Notion |
| PROMPT-QA-004 | Lecture happy path / non happy path | idem | Publié Notion |
| PROMPT-QA-005 | Grille de risques qualité | idem | Publié Notion |
| PROMPT-QA-006 | Préparation légère d'une stratégie de test | idem | Publié Notion — vigilance |
| PROMPT-QA-007 | Revue d'anomalie métier | idem | Publié Notion |
| PROMPT-QA-008 | Traçabilité besoin / critère / test futur / anomalie | idem | Publié Notion — vigilance |
| PROMPT-QA-009 | Revue des critères d'acceptation futurs | idem | Publié Notion — vigilance |
| PROMPT-QA-010 | Vérification des garde-fous QA | idem | Publié Notion |

**Hors catalogue SFIA mais présents dans l'export Notion** : PRM-001 (méta-prompt CMP), 1 entrée test archivée — **à exclure** de toute republication.

---

## 4. Prompts détectés dans Git

*Bilan catalogue : **39 prompts** référencés (10 QA + 14 §4 + 15 §13 UXUI). Hors QA publiés : **29 à traiter**.*

### 4.1 Architecture & Sécurité — fichiers Draft formalisés

| ID | Nom | Famille | Fichier source | Catégorie souhaitée | Statut proposé | Action recommandée |
|----|-----|---------|----------------|---------------------|----------------|-------------------|
| PROMPT-ARCH-001 | Revue intégrations et erreurs | Architecture | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Architecture | Draft | **À publier** — 1er lot prioritaire après revue payload |
| PROMPT-SEC-001 | Revue canal email sécurisé | Sécurité / RSSI | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Sécurité | Draft | **À publier** — 1er lot prioritaire après revue payload |

### 4.2 UX/UI V1 Governance — catalogue §13

| ID | Nom | Famille | Fichier source | Catégorie souhaitée | Statut proposé | Action recommandée |
|----|-----|---------|----------------|---------------------|----------------|-------------------|
| PROMPT-UXUI-001 | Ouverture jalon UX/UI V1 | UX/UI V1 Governance | `prompt-catalog.md` §13 → `projects/interv360/02-architecture/ux-ui-figma-opening-note.md` | UX/UI | Candidat | **À revoir** puis publier — lot 2 |
| PROMPT-UXUI-002 | Recherche design / benchmark UX/UI | UX/UI V1 Governance | §13 → `ux-ui-design-research-and-benchmark.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-003 | Instructions UX/UI V1 | UX/UI V1 Governance | §13 → `figma-design-instructions.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-004 | Production maquette UX/UI V1 | UX/UI V1 Governance | §13 → `figma-production-prompt.md` | UX/UI | Candidat | **À revoir** — lot 2 — vigilance delivery |
| PROMPT-UXUI-005 | Revue premier jet UX/UI V1 | UX/UI V1 Governance | §13 → `figma-first-draft-review.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-006 | Préparation revue transverse UX/UI V1 | UX/UI V1 Governance | §13 → `figma-review-session-preparation.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-007 | Template compte rendu revue UX/UI V1 | UX/UI V1 Governance | §13 → `figma-review-session-minutes-template.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-008 | Enrichissement méthodes rôle après UX/UI V1 | UX/UI V1 Governance | §13 → `role-methods-enrichment-after-figma-v1.md` | UX/UI / Rôles | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-009 | Compte rendu revue simulée UX/UI V1 | UX/UI V1 Governance | §13 → `figma-review-session-minutes.md` | UX/UI | Candidat | **À revoir** — lot 2 — vigilance participants |
| PROMPT-UXUI-010 | Clôture jalon UX/UI V1 | UX/UI V1 Governance | §13 → `figma-v1-closure-summary.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-011 | Sync gouvernance UX/UI V1 | UX/UI V1 Governance | §13 → `notion-sync-figma-v1-closure-summary.md` | Gouvernance | Candidat | **Ambigu** — proche workflow Notion sync ; arbitrage avant publication |
| PROMPT-UXUI-012 | Standard candidat UX/UI V1 | UX/UI V1 Governance | §13 → `sfia-figma-v1-standard-candidate.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-013 | Revue standard candidat UX/UI V1 | UX/UI V1 Governance | §13 → `sfia-figma-v1-standard-candidate-review.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-014 | Préparation promotion standard officiel | UX/UI V1 Governance | §13 → `sfia-figma-v1-standard-promotion-preparation.md` | UX/UI | Candidat | **À revoir** — lot 2 |
| PROMPT-UXUI-015 | Promotion standard officiel UX/UI V1 | UX/UI V1 Governance | §13 → `docs/standards/ux-ui-v1-governance-standard.md` | UX/UI | Candidat | **À revoir** — lot 2 |

### 4.3 Interv360 — catalogue §4 (candidats sans fichier dédié)

| ID | Nom | Famille | Fichier source | Catégorie souhaitée | Statut proposé | Action recommandée |
|----|-----|---------|----------------|---------------------|----------------|-------------------|
| PROMPT-CAD-001 | Cadrage métier projet | Cadrage | `prompt-catalog.md` §4 | Cadrage | Candidat | **À revoir** — formaliser fichier ou extraire contenu — lot 3 |
| PROMPT-CAD-002 | Revue cohérence cadrage | Cadrage | §4 | Cadrage | Candidat | **À revoir** — lot 3 |
| PROMPT-ARB-001 | Arbitrages MVP | Arbitrages | §4 | Product / Arbitrage | Candidat | **À revoir** — lot 3 |
| PROMPT-ARB-002 | Validation arbitrages MVP | Arbitrages | §4 | Product / Arbitrage | Candidat | **À revoir** — lot 3 |
| PROMPT-UX-001 | Brief UX/UI avant Figma | UX/UI | §4 | UX/UI | Candidat | **À revoir** — lot 4 |
| PROMPT-UX-002 | Validation brief UX/UI | UX/UI | §4 | UX/UI | Candidat | **À revoir** — lot 4 |
| PROMPT-UX-003 | Revue dashboard KPI UX | UX/UI | §4 | UX/UI | Candidat | **À revoir** — lot 4 |
| PROMPT-ROLE-001 | Méthode globale par rôle | Rôles | §4 | Rôles / Gouvernance | Candidat | **À revoir** — lot 5 |
| PROMPT-ROLE-002 | Revue méthode par rôle | Rôles | §4 | Rôles / Gouvernance | Candidat | **À revoir** — lot 5 |
| PROMPT-ROLE-003 | Extraction méthode rôle | Rôles | §4 + `docs/methods/roles/` | Rôles / Gouvernance | Candidat | **À revoir** — lot 5 |
| PROMPT-GOV-001 | Synchronisation gouvernance Notion projet | Gouvernance | §4 | Gouvernance | Candidat | **Ambigu** — méta-sync Notion ; arbitrage |
| PROMPT-GOV-002 | Contrôle structure méthodes | Gouvernance | §4 | Gouvernance | Candidat | **À revoir** — lot 5 |

---

## 5. Mapping catégories CMP

Valeurs CMP actuelles (`prompt.schema.json`) : **Agent**, **RAG**, **Coding**, **Analysis**, **Writing**, **QA**.

| Famille | Catégorie souhaitée | Catégorie CMP existante | Écart | Recommandation |
|---------|---------------------|-------------------------|-------|----------------|
| QA / Testeur | QA | **QA** | Aucun | Déjà utilisé — modèle de référence |
| Architecture | Architecture | — | Catégorie absente | **Ajouter `Architecture`** au schéma CMP (tâche dédiée) ou portage temporaire via **Analysis** + tag Architecture |
| Sécurité / RSSI | Sécurité | — | Catégorie absente | **Ajouter `Security`** ou **RSSI** au schéma ; sinon **Analysis** + tags Sécurité, RSSI |
| UX/UI | UX/UI | — | Catégorie absente | **Ajouter `UX/UI`** ou `Design` au schéma ; sinon **Writing** + tags UX, UI |
| UX/UI V1 Governance | UX/UI Governance | — | Catégorie absente | Même que UX/UI ; nuance via tags `V1`, `Governance` |
| Cadrage | Cadrage | — | Catégorie absente | **Writing** ou nouvelle catégorie **Cadrage** ; tags Cadrage, BA |
| Arbitrages | Product / Arbitrage | — | Catégorie absente | **Analysis** + tags Product, MVP, Arbitrage |
| Rôles | Rôles / Gouvernance | Agent (partiel) | Agent trop générique | **Agent** + tags Rôles, Méthode — ou catégorie **Governance** |
| Gouvernance | Gouvernance | Agent (partiel) | Idem | **Agent** + tags Gouvernance, Notion — arbitrage GOV-001 |

*Ne pas forcer toutes les familles en Analysis — documenter l'écart et étendre le schéma par lot si nécessaire.*

---

## 6. Candidats à publication par lot

| Lot | Famille | Nombre | Prêt à publier | Conditions |
|-----|---------|--------|----------------|------------|
| **0** | QA / Testeur | 10 | **Déjà publié** | Trace : `notion-sync-qa-prompt-library-publication-log.md` |
| **1** | Architecture & Sécurité | 2 | **Proche** — fichiers Draft complets | Préparer payload CMP ; décider catégories CMP (extension schéma recommandée) ; revue manuelle |
| **2** | UX/UI V1 Governance | 15 | **À revoir** | Extraire contenu depuis sources `projects/interv360/` ; arbitrage UXUI-011 ; catégorie UX/UI |
| **3** | Cadrage & Arbitrages | 4 | **Non** — Candidat catalogue seul | Formaliser fichiers ou synthèse contenu ; revue par lot |
| **4** | UX/UI classique | 3 | **Non** — Candidat catalogue seul | Idem lot 3 |
| **5** | Rôles & Gouvernance | 5 | **Non** — Candidat ; 2 ambigus | Arbitrage GOV-001 ; formalisation préalable |

---

## 7. Risques et garde-fous

- **Doublon Notion** : export Git obsolète — revérifier Notion ou ré-exporter avant chaque lot.
- **Pas de `update prompt`** : correction = action manuelle ou évolution CMP.
- **Pas de batch** : une commande `create prompt` par entrée.
- **Revue manuelle obligatoire** par lot (payload + contenu + catégories).
- Ne **pas publier** sans validation explicite.
- Ne **pas ouvrir delivery** ; ne pas produire backlog, user stories ou code via cette industrialisation.
- **PRM-001** : ne pas republier — rôle outillage distinct.

---

## 8. Décision proposée

**Décision proposée** : préparer la publication Prompt Library **par lots, famille par famille**, après **revue manuelle** de chaque payload CMP enrichi.

**Premier lot recommandé hors QA** : **Lot 1 — Architecture & Sécurité** (PROMPT-ARCH-001, PROMPT-SEC-001) — seuls prompts avec fichiers Draft formalisés sous `prompts/` hors QA.

---

## 9. Prochaine étape recommandée

1. Valider cet inventaire.
2. Choisir le **premier lot hors QA** (recommandation : Lot 1 Architecture & Sécurité).
3. Préparer le **payload CMP enrichi** du lot (summary/content, catégories, tags).
4. **Relire et valider** (note de revue dédiée).
5. **Publier** dans Notion via `create prompt`.
6. **Tracer** dans Git (log de publication).

---

*Inventaire prompts SFIA — Prompt Library — gouvernance SFIA — non publié dans Notion.*
