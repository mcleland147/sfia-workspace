---
status: foundation
version: v1.1
previous: none
updated_after: SFIA foundation v1.1 consolidation
scope: knowledge layer
---

# SFIA Knowledge Layer v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Knowledge layer

## 1. Objectif

Ce document définit la couche knowledge SFIA v1.1.

Il précise comment SFIA transforme les contenus du repository en connaissance exploitable, navigable, éditorialisée et capitalisable.

Il clarifie également le rôle de Notion :

> Notion est une couche de connaissance éditorialisée, pas un miroir brut du repository.

Ce document définit aussi la **Documentation Routing Matrix** utilisée pour déterminer :

- les documents sources à lire ;
- les livrables à produire ;
- les dossiers à alimenter ;
- les règles à appliquer dans les prompts ChatGPT ↔ Cursor.

## v1.1 Engineering Principles Reference

The Knowledge Layer, Documentation Routing Matrix, Notion preparation rules and publication constraints must comply with:

- `docs/foundation/sfia-engineering-principles.md`

The repository-first, curated knowledge and human validation principles apply to all knowledge publication activities.

## 2. Positionnement

| Élément | Rôle |
|---------|------|
| Git repository | Source de vérité opérationnelle |
| Documents canoniques | Références versionnées |
| Audits / REX | Sources de capitalisation |
| Templates / prompts | Assets réutilisables |
| Practices | Pratiques par rôle ou discipline |
| Reference projects | Cas concrets de validation |
| Notion | Couche de lecture, navigation, synthèse et usage métier |
| Exports | Matériel préparé, non source de vérité |
| Archives | Historique conservé, non actif |

**Documents associés :**

- `method/sfia-fast-track/documentation/notion-target-content-map.md` — mapping cible (à actualiser terminologie SFIA)
- `method/sfia-fast-track/documentation/notion-publication-plan.md` — plan publication
- `exports/notion/README.md` — exports préparés, non source de vérité

## 3. Principes

| Principe | Description |
|----------|-------------|
| Repository first | La connaissance officielle naît dans le repo |
| Curated knowledge | La connaissance publiée est sélectionnée, structurée et éditorialisée |
| No raw mirror | Notion ne doit pas reproduire l'arborescence brute |
| Human approval | Publication validée humainement |
| Traceability | Chaque page knowledge doit pouvoir revenir à ses sources repo |
| Capitalization by design | Les audits, REX et cycles alimentent la connaissance |
| Progressive publication | Publication par lots validés, pas en masse |
| Archives with context | Les archives ne sont publiées que contextualisées |
| Routing by default | Tout livrable doit être orienté vers un dossier cible logique |

## 4. Types de connaissances SFIA

| Type | Exemple | Source |
|------|---------|--------|
| Foundation | Architecture, pipeline, repository blueprint | `docs/architecture/` |
| Engineering Principles | Principes d'ingénierie | `docs/foundation/` |
| Operating Method | Fast Track, Operating Model | `method/sfia-fast-track/` |
| Practice | QA, UX/UI, BPMN, architecture, rôles | `docs/practices/` |
| Template | PR, cycle, audit, REX | `docs/templates/`, `method/.../templates/` |
| Prompt | Cadrage, audit, validation, post-merge | `prompts/` |
| Evidence | Audit, tests, release readiness | `projects/interv360/` |
| REX | Retour d'expérience | `06-audit-rex/`, capitalization docs |
| Roadmap | Évolutions futures | `docs/roadmaps/`, `09-roadmap/` |
| Archive | Historique utile | `archive/` |

## 5. Knowledge lifecycle

| Étape | Description |
|-------|-------------|
| Produce | Un cycle produit un artefact |
| Validate | L'artefact est contrôlé |
| Capitalize | L'apprentissage est extrait |
| Classify | L'artefact est classé : foundation, method, practice, template, prompt, evidence, archive |
| Route | L'artefact est placé dans le dossier cible logique |
| Curate | Le contenu est éditorialisé pour lecture humaine |
| Publish | Le contenu est publié dans Notion uniquement après validation |
| Maintain | Les pages publiées sont suivies et mises à jour |
| Archive | Les contenus obsolètes sont retirés de l'usage actif mais conservés |

## 6. Documentation Routing Matrix

La Documentation Routing Matrix indique, pour chaque phase ou contexte SFIA :

- les documents sources à lire ;
- les documents ou livrables à produire ;
- le dossier cible à alimenter ;
- le type de capitalisation attendu ;
- les éléments à inclure dans les prompts ChatGPT ↔ Cursor.

Cette matrice doit être utilisée avant toute création documentaire significative.

| Phase / contexte | Sources à lire | Livrables attendus | Dossier cible | Type de capitalisation | Prompt ChatGPT ↔ Cursor doit mentionner |
|------------------|----------------|--------------------|---------------|------------------------|------------------------------------------|
| Cadrage cycle | Operating Model, Rules & Guardrails, Fast Track README | Cadrage, scope, hors scope, garde-fous | Dossier de capitalisation ou dossier projet concerné | Cycle setup | Branche, objectif, dernier commit, périmètre, hors périmètre, garde-fous |
| Audit méthode | Repository Blueprint, Platform Architecture, Delivery Pipeline, docs existants | Audit, matrice, décision, réserves | `method/sfia-fast-track/documentation/...` | Capitalisation méthode | Sources auditées, critères, décision attendue, réserves |
| Architecture plateforme | Platform Architecture, Domain Model, Meta Model, Repository Blueprint | ADR, architecture update, impact report | `docs/architecture/` | Fondation / architecture | Sources, impacts, relations, documents à ne pas modifier |
| Architecture projet | Architecture standards, project README, ADR projet | ADR, dossier architecture, choix techniques | `projects/<project>/02-architecture/` | Projet / référence | Projet cible, ADR, dépendances, garde-fous code |
| Delivery projet | Delivery Pipeline, project README, release docs | Delivery doc, release readiness, validation | `projects/<project>/04-delivery/` ou `05-release/` | Delivery evidence | Phase projet, fichiers modifiés, tests, critères de release |
| UX/UI | UX practices, Figma Design-first, design docs projet | Design system, UI audit, UX spec | `projects/<project>/03-design/` ou `docs/practices/ux-ui/` | Practice / project evidence | Source Figma, no backend, revue visuelle humaine |
| Audit / REX projet | Project docs, release docs, audit checklist | Audit, REX, réserves, roadmap | `projects/<project>/06-audit-rex/` | REX / evidence | Décision attendue, réserves, classification, suite |
| Roadmap projet | REX, audit, project README | Roadmap, backlog, next increments | `projects/<project>/09-roadmap/` | Roadmap | Priorités, dépendances, P0/P1/P2 |
| Capitalisation méthode | REX, audits, project outputs, Fast Track docs | Méthode, checklist, template, prompt | `method/sfia-fast-track/`, `docs/practices/`, `prompts/` | Méthode réutilisable | Sources projet, niveau de généralisation, document cible |
| Practice métier / rôle | Role Methods, pratiques existantes, REX | Practice, role method, checklist | `docs/practices/` | Practice | Rôle, responsabilités, inputs/outputs, validation |
| Template réutilisable | Livrable projet, REX, docs similaires | Template ou checklist | `docs/templates/` ou `method/sfia-fast-track/templates/` | Asset réutilisable | Usage, variables, structure attendue |
| Prompt réutilisable | Operating Model, Prompt Catalog, Rules | Prompt family, prompt template | `prompts/` | Prompt asset | Famille, variables, garde-fous, résultat attendu |
| Rules / guardrails | Operating Model, rules update, checklists | Règle, garde-fou, anti-pattern | `method/sfia-fast-track/core/` ou checklists | Normatif | Règle source, impact, validation |
| Notion preparation | Knowledge Layer, publication plan, mapping | Mapping, dry-run, publication plan | `exports/notion/` ou documentation Notion | Knowledge publication | No sync, no publish, dry-run only, validation humaine |
| Post-merge | PR, merge commit, branch status | Post-merge status, capitalisation | Dossier de capitalisation ou projet concerné | Clôture / trace | PR, commit, branche, décision, prochaine étape |
| Archive / cleanup | Repository Blueprint, docs existants, audit | Archive map, cleanup report | `archive/` ou dossier archive local | Traçabilité | Justification, git mv, aucun delete brutal |
| Foundation consolidation | Evolution matrix, capitalization inputs, foundation docs | Foundation update, consistency rules | `docs/architecture/`, `method/sfia-fast-track/core/` | Fondation v1.1 | v1.0 preserved, v1.1 prevails, no source rewrite |

Règle :

> Si une phase ou un contexte n'est pas couvert par la matrice, le cycle doit commencer par une clarification documentaire avant production.

## 7. Notion comme IDE métier SFIA

Notion doit devenir un IDE métier SFIA.

Cela signifie qu'il doit permettre de :

- comprendre la vision SFIA ;
- naviguer dans la méthode ;
- retrouver les documents fondateurs ;
- consulter les pratiques ;
- exploiter les templates ;
- réutiliser les prompts ;
- comprendre les projets de référence ;
- suivre la roadmap ;
- accéder aux connaissances capitalisées ;
- éviter la dispersion documentaire.

Notion ne doit pas devenir :

- un dump du repository ;
- une copie brute des fichiers ;
- une archive non contextualisée ;
- une source concurrente à Git ;
- un espace de publication automatique non validée.

## 8. Mapping repo → knowledge

| Source repo | Usage knowledge |
|-------------|----------------|
| `docs/architecture/` | Fondations conceptuelles |
| `docs/foundation/` | Principes d'ingénierie |
| `method/sfia-fast-track/core/` | Méthode active et fondations opérationnelles |
| `method/sfia-fast-track/automation/` | Vision et futures specs automation |
| `method/sfia-fast-track/templates/` | Templates Fast Track |
| `method/sfia-fast-track/checklists/` | Checklists opérationnelles |
| `method/complementary/` | Méthodes complémentaires |
| `docs/practices/` | Pratiques plateforme |
| `docs/templates/` | Templates plateforme |
| `docs/standards/` | Standards plateforme |
| `prompts/` | Familles de prompts |
| `projects/interv360/` | Projet de référence |
| `exports/notion/` | Exports préparés |
| `archive/` | Historique contextualisé uniquement |

## 9. Règles de publication Notion

| Règle | Description |
|-------|-------------|
| Mapping obligatoire | Définir la destination avant publication |
| Éditorialisation obligatoire | Adapter le contenu à la lecture métier |
| Dry-run obligatoire | Tester avant publication réelle |
| Validation humaine | Aucun publish sans validation |
| Pas de payload historique brut | Ne pas réutiliser les anciens JSON sans régénération |
| Pas d'archive brute | Les archives doivent être contextualisées |
| Pas de source concurrente | Notion ne remplace pas Git |
| Traçabilité | Chaque page doit pointer vers ses sources repo |

## 10. Structure cible Notion

Structure indicative :

```text
SFIA — Business IDE
├── 00 — Accueil
├── 01 — Vision SFIA
├── 02 — Fondations architecture
├── 03 — Méthode Fast Track
├── 04 — Operating Model ChatGPT Cursor
├── 05 — Rules & Guardrails
├── 06 — Practices
├── 07 — Templates & Checklists
├── 08 — Prompts
├── 09 — Reference Project Interv360
├── 10 — Automation Roadmap
└── 11 — Archives contextualisées
```

Cette structure doit être validée avant toute publication.

## 11. Relation avec les moteurs futurs

La Knowledge Layer sera alimentée par :

- Prompt Generation Engine ;
- Repository Execution Engine ;
- Validation Engine ;
- Documentation Engine.

Mais en v1.1, ces moteurs ne sont pas encore actifs.

La publication reste préparée manuellement et validée humainement.

## 12. Risques

| Risque | Description | Mitigation |
|--------|-------------|------------|
| Sync brute | Publication non lisible ou non gouvernée | Mapping + editorialisation |
| Source concurrente | Notion diverge du repo | Git source de vérité |
| Archives exposées | Ancien contenu présenté comme actif | Contextualisation |
| Payload obsolète | Publication depuis JSON historique | Régénération validée |
| Trop de pages | Notion devient inutilisable | Publication par lots |
| Perte traçabilité | Page sans source repo | Liens source obligatoires |
| Mauvais routage documentaire | Document utile mais introuvable ou mal classé | Documentation Routing Matrix |
| Prompt sans sources | Production non fiable | Sources obligatoires dans le prompt |

## 13. Critères de maturité

| Niveau | Critère |
|--------|---------|
| Draft | Mapping partiel |
| Candidate | Structure cible définie |
| Validated | Publication dry-run validée |
| Gold | Knowledge layer maintenue, versionnée et reliée aux moteurs |

**Statut v1.1 :**

> Candidate — ready for Notion preparation, not ready for raw sync.

## 14. Décision

La Knowledge Layer SFIA v1.1 est définie comme couche éditorialisée entre le repository Git et les usages métier.

La Documentation Routing Matrix devient la référence pour déterminer :

- les documents à lire ;
- les livrables à produire ;
- les dossiers à alimenter ;
- les éléments à intégrer dans les prompts ChatGPT ↔ Cursor.

Le chantier Notion ne doit pas être ouvert tant que :

- les fondations v1.1 ne sont pas consolidées ;
- les rules & guardrails ne sont pas validées ;
- le mapping repo → knowledge n'est pas validé ;
- le dry-run n'est pas préparé.

## 15. Next Steps

1. Valider ce document ;
2. consolider le plan de publication Notion ;
3. corriger les terminologies résiduelles éventuelles ;
4. préparer un mapping éditorial ;
5. préparer un dry-run ;
6. publier uniquement après validation humaine.
