# 06 — Templates, prompts et livrables

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 06 — Templates, prompts et livrables |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **Audience** | Développeur, qualité, contributeur méthode |
| **Niveau** | L3 |
| **Propriétaire** | Morris |
| **Sources Git** | `prompts/prompt-catalog.md` ; `prompts/templates/README.md` ; `method/sfia-fast-track/templates/` |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Clarifier la différence entre **template**, **prompt**, **checklist** et **livrable** — et indiquer **quand retourner dans Git** pour l'exécution.

## 2. À retenir en 30 secondes

- **Templates** = squelettes réutilisables (PR, cycle, capitalisation…).
- **Prompts** = contrats d'exécution Cursor instanciés par ChatGPT.
- **Checklists** = contrôles qualité avant/après livraison.
- **Livrables** = résultats d'un cycle (fichiers, rapports, PR).
- Le **prompt catalog** et les **templates numérotés** vivent dans Git — Notion ne les modifie **jamais**.

## 3. Contenu éditorial principal

### Définitions

| Concept | Rôle | Où dans Git |
|---------|------|-------------|
| **Template** | Structure attendue d'un document ou message | `prompts/templates/`, `method/.../templates/` |
| **Prompt** | Instructions complètes pour Cursor | Instancié depuis catalog + templates |
| **Checklist** | Liste de vérifications | `method/sfia-fast-track/checklists/` |
| **Livrable** | Sortie concrète du cycle | Branche, fichiers, review pack, PR |

### Familles de prompts (aperçu — pas de copie catalog)

| Famille | Usage typique |
|---------|---------------|
| Cadrage / fondation | Créer ou mettre à jour documents normatifs |
| Validation | Contrôler un résultat Cursor |
| PR / post-merge | Préparer merge et clôture |
| Capitalisation | Promouvoir un apprentissage en méthode |
| Notion preparation | Mapping sans publication |
| UX / QA / tooling | Blocs spécialisés selon cycle |

### Templates numérotés (référence)

Les templates `01` à `10` sous `prompts/templates/` couvrent le pipeline documentaire (foundation, checklist, PR summary, post-merge, capitalisation, Notion mapping, cleanup…). Le **template d'exécution de cycle** (`sfia-cycle-execution-template.md`) est **Candidate v2.5** — il sert à **générer** des prompts Cursor, pas à être envoyé tel quel à Cursor.

### Quand retourner dans Git

| Besoin | Action |
|--------|--------|
| Exécuter un cycle | Ouvrir le prompt instancié + fichiers cibles dans le repo |
| Modifier un template canonique | PR sur `prompts/` — gate Morris |
| Consulter une checklist complète | Lire le fichier checklist dans Git |
| Publier dans Notion | **Cycle 3** — pas depuis cette page |

## 4. Fonctionnement ou parcours

Contributeur : **06** → ouvre `prompts/templates/README.md` dans Git → choisit le template → cycle Cursor avec ChatGPT.

## 5. Exemple pédagogique

Cycle capitalisation : template `08-capitalize-method-asset.md` + sources evidence — le livrable est un **fichier méthode dans Git**, pas une page Notion.

## 6. Points de vigilance

- **Ne pas copier** le prompt catalog dans Notion — métadonnées et liens seulement (future Base Référentiel).
- Notion **ne modifie aucun prompt canonique**.
- `05-validate-pr-readiness.md` peut exister hors certains manifestes — vérifier dans Git.

## 7. Liens

→ [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) · [05 Routage](sfia-notion-05-request-routing-editorial-draft.md) · [08 Mise en place](sfia-notion-08-setup-sfia-editorial-draft.md) · [11 Glossaire](sfia-notion-11-glossary-editorial-draft.md)

## 8. Sources Git

- `prompts/prompt-catalog.md` (candidate v1.1)
- `prompts/templates/README.md`
- `method/sfia-fast-track/templates/` (cycle, PR, post-merge…)

## 9. Métadonnées publication

Type : **metadata + synthèse**. Entrées Référentiel par template/prompt (cycle 3).

## 10. Réserves

Catalog = spine opérationnelle — toute évolution = cycle Git dédié.
