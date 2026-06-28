# Interv360 — Préparation sync Notion Prompt Library — QA / Testeur

**Projet** : PRJ-INTERV360  
**Chantier** : QA / Testeur  
**Cible Notion** : SFIA Prompt Library  
**Type** : Préparation sync Prompt Library  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001** : non exécuté  
**Objet** : préparer la création ou mise à jour des entrées PROMPT-QA-001 à PROMPT-QA-010 dans la base Notion SFIA Prompt Library

---

## 1. Objectif

Cette note **prépare la synchronisation** des prompts **QA / Testeur** dans la base Notion **SFIA Prompt Library** (base exportée sous le titre **Prompts**).

- La **page projet Interv360** contient déjà la **synthèse gouvernance** QA / Testeur (publication CMP-001 projet, `notion-sync-qa-tester-cmp-publication-log.md`).
- La **Prompt Library** doit contenir les **prompts eux-mêmes** — une fiche par entrée PROMPT-QA-001 à PROMPT-QA-010.
- **Git** reste la **source détaillée** (`prompts/qa/qa-tester-prompt-family.md`, catalogue, méthode, validation).
- **Notion** doit recevoir une **fiche par prompt** (métadonnées CMP + contenu page à définir manuellement ou via évolution schéma).
- **Aucune publication** n'est faite dans cette tâche.

---

## 2. Source des prompts

| Source Git | Rôle |
|------------|------|
| `prompts/qa/qa-tester-prompt-family.md` | Famille officielle — 10 prompts candidats, objectifs, entrées, sorties, garde-fous |
| `prompts/prompt-catalog.md` | Catalogue SFIA §14 — référencement PROMPT-QA-001 à PROMPT-QA-010 |
| `docs/methods/roles/qa-tester-method.md` | Méthode officielle QA / Testeur liée |
| `projects/interv360/02-architecture/prompt-catalog-qa-tester-validation.md` | Validation manuelle — 7 validés, 3 avec vigilance |

---

## 3. Diagnostic connecteur Notion / CMP

Inspection réalisée dans `sfia-workspace/tools/cmp-001` (v1.1.2) — sans exécution CMP, sans lecture de `.env`.

| Élément vérifié | Résultat |
|-----------------|----------|
| **Commande CLI disponible** | `create prompt <json-file>` — **oui** ; `update prompt` — **non** (seuls `knowledge` et `project` supportent `update`) |
| **Type Notion compatible identifié** | **Oui** — type SFIA `prompt` → base configurée via `NOTION_DATABASE_PROMPTS` |
| **Schéma prompt disponible** | **Oui** — `src/schemas/prompt.schema.json` |
| **Export Prompt Library disponible** | **Oui** — `exports/notion/prompts.json` (2 entrées existantes : PRM-001, 1 test archivé ; **aucun PROMPT-QA-*** ) |
| **Database cible identifiée** | **Oui** — export `databaseTitle` : **Prompts** ; `databaseId` documenté dans l'export Git (pas dans `.env` affiché) ; variable `.env.example` : `NOTION_DATABASE_PROMPTS` |
| **Payload CMP direct possible** | **Partiellement** — création unitaire possible ; **pas** de batch ; **pas** de `update` ; enums **Status** et **Category** limités ; **pas** de champ `content` / `page_content` dans le schéma prompt |

### Détail schéma CMP `prompt`

| Champ CMP | Propriété Notion | Valeurs enum schéma | Impact QA / Testeur |
|-----------|------------------|---------------------|---------------------|
| `title` | Prompt | texte libre | Format attendu : `PROMPT-QA-NNN — Nom` |
| `status` | Status | Draft, Testing, Approved, Retired | **Pas** de `Candidate` — utiliser **Draft** en préparation |
| `category` | Category | Agent, RAG, Coding, Analysis, Writing | **Pas** de `QA / Testeur` — utiliser **Analysis** ou étendre schéma / Notion avant publication |
| `model` | Model | Generic, GPT, Claude, Gemini | **GPT** retenu |
| `version` | Version | rich_text | **v0.1** pour cette capitalisation |
| `tags` | Tags | multi_select libre | Tags suggérés : QA, Testeur, Interv360 |
| `rating` | Rating | number | Optionnel — non renseigné en préparation |

**Écarts notables** : le schéma prompt ne porte **pas** le corps détaillé (objectif, entrées, garde-fous) en `page_content` — contrairement à `project` et `knowledge`. La fiche Notion devra être complétée manuellement ou le schéma étendu avant publication riche.

---

## 4. Prompts à synchroniser

| ID | Nom | Statut | Catégorie | Modèle | Version | Commentaire |
|----|-----|--------|-----------|--------|---------|-------------|
| PROMPT-QA-001 | Analyse de testabilité d'un besoin | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-002 | Revue QA d'une maquette UX/UI | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-003 | Questions réflexes QA en revue transverse | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-004 | Lecture happy path / non happy path | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-005 | Grille de risques qualité | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-006 | Préparation légère d'une stratégie de test | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé avec vigilance — pas de stratégie de recette complète |
| PROMPT-QA-007 | Revue d'anomalie métier | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |
| PROMPT-QA-008 | Traçabilité besoin / critère / test futur / anomalie | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé avec vigilance — pas de matrice de tests détaillée |
| PROMPT-QA-009 | Revue des critères d'acceptation futurs | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé avec vigilance — pas de user stories ni backlog |
| PROMPT-QA-010 | Vérification des garde-fous QA | Draft | QA / Testeur *(→ Analysis en CMP)* | GPT | v0.1 | Validé |

*Statut **Draft** retenu car le schéma CMP n'accepte pas `Candidate`. Ajustement possible vers `Testing` après revue manuelle.*

---

## 5. Contenu type d'une fiche Prompt Library

Chaque fiche Notion devrait contenir :

### Propriétés (base)

| Champ | Valeur type |
|-------|-------------|
| **Prompt** | ID + nom (ex. `PROMPT-QA-001 — Analyse de testabilité d'un besoin`) |
| **Status** | Draft (ou Testing après revue) |
| **Owner** | Morris / SFIA *(convention existante — propriété Owner présente dans l'export)* |
| **Category** | QA / Testeur *(ou Analysis si enum CMP inchangé)* |
| **Model** | GPT |
| **Version** | v0.1 |
| **Tags** | QA, Testeur, Interv360 *(suggestion)* |

### Métadonnées documentaires (page ou évolution schéma)

| Champ | Valeur |
|-------|--------|
| **Source Git** | `prompts/qa/qa-tester-prompt-family.md` |
| **Méthode liée** | `docs/methods/roles/qa-tester-method.md` |
| **Projet source** | PRJ-INTERV360 |
| **Garde-fou** | ne pas ouvrir delivery, backlog, user stories ou code |

### Contenu page

- **Objectif**
- **Entrées**
- **Sortie attendue**
- **Garde-fous**
- **Statut de validation** (validated / validated_with_vigilance)
- **Vigilance éventuelle** (QA-006, QA-008, QA-009)
- **Source Git**

---

## 6. Points de vigilance

- Ne **pas dupliquer** des prompts déjà présents dans Notion — l'export actuel ne contient **aucun** PROMPT-QA-* ; vérifier à nouveau avant publication.
- Vérifier si la base Notion impose des **valeurs contrôlées** sur Status et Category (alignement schéma CMP / colonnes réelles).
- **Status** : le schéma CMP n'accepte pas `Candidate` — utiliser **Draft** en préparation.
- **Category** : le schéma CMP n'accepte pas `QA / Testeur` — utiliser **Analysis** ou étendre schéma + base avant publication.
- CMP ne sait **pas** créer plusieurs pages d'un coup — **une commande `create prompt` par fichier JSON**.
- CMP ne propose **pas** `update prompt` — mise à jour ultérieure manuelle ou évolution connecteur.
- Le schéma prompt **ne porte pas** le contenu page structuré — prévoir complément manuel ou extension schéma.
- Ne **pas publier** sans **revue manuelle** du payload (`notion-sync-qa-prompt-library-payload.json` et items CMP).
- Ne **pas afficher** de secret ; ne **pas** utiliser le payload projet Interv360 (`notion-sync-qa-tester-cmp-project-update.json`) pour alimenter la Prompt Library.

---

## 7. Décision de préparation

**Décision** : préparation Prompt Library QA / Testeur **réalisée** — **revue manuelle du payload requise avant publication**.

Un payload CMP-compatible partiel est fourni (`notion-sync-qa-prompt-library-cmp-payload.json`) — création unitaire possible, avec écarts documentés (category, status, absence de page content, pas de batch).

---

## 8. Prochaine étape

1. Relire cette préparation et les payloads associés.
2. Valider les champs Notion attendus (Status, Category, Owner, contenu page).
3. Valider le payload générique et les 10 items CMP.
4. Publier dans **SFIA Prompt Library** dans une **tâche dédiée** (10× `create prompt` ou évolution outillage).
5. Tracer la publication dans Git (log de publication dédié).

---

## Mise à jour après extension schéma CMP Prompt

*Suite à `cmp-prompt-schema-extension-for-qa-library.md` — schéma et payload enrichis, publication toujours non exécutée.*

| Évolution | Statut |
|-----------|--------|
| **Catégorie QA** | Désormais supportée dans `prompt.schema.json` — `category: QA` |
| **summary / content** | Désormais supportés (`notionType: page_content`) — contenu page riche via `create prompt` |
| **Payload CMP** | `notion-sync-qa-prompt-library-cmp-payload.json` mis à jour — 10 items avec summary, content, `category: QA` |
| **Code CMP** | Inchangé — `createObject.js` exploite déjà `buildPageContentBlocks` de façon générique |
| **Publication** | **Non exécutée** — revue manuelle requise avant `create prompt` |
| **update prompt** | Toujours **hors périmètre** |
| **batch** | Toujours **hors périmètre** — 10 commandes distinctes |

---

*Préparation sync Prompt Library QA / Testeur — gouvernance SFIA — non publié dans Notion.*
