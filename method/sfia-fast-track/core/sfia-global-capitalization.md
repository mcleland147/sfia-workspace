# SFIA Fast Track — Global Capitalization

## v1.1 Status and Cross-References

Ce document est conservé comme **preuve opérationnelle** et trace de capitalisation issue du cycle Fast Track Interv360.

Il n'est pas la référence normative vivante pour l'exécution SFIA v1.1.

Les références d'exécution v1.1 actuelles sont :

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `prompts/prompt-catalog.md`
- `prompts/templates/`

Le rôle de ce document est de préserver la preuve opérationnelle que le cycle Interv360 a produit des actifs méthode SFIA réutilisables.

Le contenu historique ci-dessous reste inchangé à des fins de traçabilité.

## SFIA v2.6 cartography status

| Élément | Statut |
|---------|--------|
| Cartography tag | `lot-A` |
| Authority | **reference** — operational proof, not canonical |
| Proposed disposition (CSV) | `rename` — **not executed** in Lot A ; stabilization only |
| SFIA v2.4 | **Baseline** opérationnelle |
| SFIA v2.6 | **Candidate** — ne remplace pas v2.4 |

## 1. Objectif

Ce document capitalise la méthode SFIA Fast Track au-delà du seul cas Interv360.

Il transforme les apprentissages issus de la séquence Interv360 en règles réutilisables pour les prochains projets.

## 2. Sources de capitalisation

Cette capitalisation s'appuie sur :

- le MVP Interv360 ;
- la release `v0.1.0-mvp` ;
- le cycle Premium Design System ;
- la release `v0.2.0-premium-ui` ;
- l'audit de l'application actuelle ;
- le REX de l'application actuelle ;
- la méthode Figma Design-first UI ;
- la capitalisation finale Interv360/SFIA.

## 3. Synthèse exécutive

La séquence Interv360 valide SFIA Fast Track comme méthode de livraison rapide, contrôlée et capitalisable.

Les principes qui émergent sont :

- cadrer avant de coder ;
- livrer par cycles courts ;
- isoler chaque objectif dans une branche dédiée ;
- travailler par PR unique par cycle ;
- documenter les garde-fous ;
- valider systématiquement build/tests ;
- documenter le post-merge ;
- taguer ou releaser les jalons significatifs ;
- auditer avant d'ouvrir un nouveau cycle majeur ;
- capitaliser les apprentissages en méthode.

## 4. Principes SFIA Fast Track validés

### 4.1. Un cycle = un objectif

Chaque cycle doit porter un objectif clair :

- MVP fonctionnel ;
- Premium UI ;
- capitalisation méthode ;
- audit ;
- REX ;
- documentation ;
- amélioration SFIA.

Un cycle ne doit pas mélanger :

- refonte UI ;
- backend ;
- auth ;
- CRUD ;
- CI ;
- documentation ;
- publication Notion ;
- architecture nouvelle.

### 4.2. Branches explicites

Convention recommandée :

| Type | Convention |
|------|------------|
| Livraison produit | `feature/...` ou `delivery/...` |
| UI | `ui/...` |
| Méthode | `method/...` |
| Consolidation | `consolidation/...` |
| Documentation | `docs/...` |
| Correction ciblée | `fix/...` |

### 4.3. PR unique par cycle

La PR unique reste le format par défaut.

Elle doit contenir :

- un périmètre clair ;
- un body explicite ;
- les validations ;
- les garde-fous ;
- les hors scope ;
- les suites possibles.

### 4.4. Post-merge documenté

Après chaque merge significatif, documenter :

- numéro PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- statut ;
- garde-fous ;
- décision ;
- prochaine étape.

### 4.5. Releases jalons

Créer une release uniquement pour les jalons significatifs :

- MVP ;
- UI majeure ;
- version démontrable ;
- changement structurant.

Ne pas taguer chaque document ou chaque mini-cycle.

## 5. Garde-fous globaux

Par défaut, un cycle ne doit pas modifier :

- backend ;
- API ;
- modèle métier ;
- base de données ;
- CI ;
- scripts npm ;
- auth ;
- CRUD ;
- export PDF ;
- intégration CRM ;
- publication Notion ;
- `sfia-notion-sync`.

Exception :

uniquement si le cycle est explicitement cadré pour cela.

## 6. Règles UI

Pour toute UI premium :

1. Figma Design d'abord ;
2. Make uniquement en exploration ;
3. stack frontend choisie avant Cursor ;
4. tokens et composants définis avant code ;
5. mapping Figma → code documenté ;
6. implémentation Cursor seulement après validation design ;
7. comparaison Figma Design vs localhost ;
8. revue visuelle humaine obligatoire ;
9. actions hors scope désactivées ;
10. pas de comportement métier implicite.

## 7. Règles backend / API

Un cycle backend/API doit être distinct.

Avant de modifier backend ou API :

- cadrer le besoin métier ;
- documenter le contrat ;
- identifier impacts frontend ;
- prévoir tests ;
- documenter migration si données persistées ;
- éviter les changements opportunistes.

## 8. Règles documentation

La documentation doit être :

- proche du cycle ;
- structurée ;
- datée par contexte de livraison ;
- reliée à la PR ;
- mise à jour post-merge ;
- nettoyée lors des chantiers documentaires.

À éviter :

- documents orphelins ;
- doublons non assumés ;
- statuts obsolètes ;
- arborescence qui grossit sans logique.

## 9. Règles Notion

Notion ne doit pas être publié automatiquement depuis un cycle.

Avant publication Notion :

- auditer la documentation ;
- définir ce qui est publiable ;
- exclure les documents internes ;
- valider l'arborescence ;
- préparer un plan de publication ;
- exécuter la sync seulement après validation.

## 10. Règles tests et validation

Chaque cycle doit préciser ses validations :

| Type de cycle | Validations minimales |
|---------------|----------------------|
| Frontend | build + tests + revue visuelle si UI |
| Backend/API | tests backend + contrat API |
| Méthode/docs | diff docs-only + garde-fous |
| Release | tag + release notes + main propre |
| Audit/REX | sources relues + décisions explicites |

## 11. Règle d'audit avant nouveau cycle majeur

Avant tout nouveau cycle produit majeur :

1. vérifier l'état réel ;
2. auditer les dettes ;
3. relire les garde-fous ;
4. décider si le socle est sain ;
5. documenter la décision.

Cette règle est issue du Chantier 1 — Audit Interv360.

## 12. Règle REX après jalon majeur

Après un jalon majeur :

- MVP ;
- release UI ;
- changement méthode ;
- correction structurante ;

produire un REX si le cycle a généré des enseignements réutilisables.

Cette règle est issue du Chantier 2 — REX Interv360.

## 13. Prompts Cursor standards

### 13.1. Début de cycle

```text
Objectif :
Ouvrir un cycle SFIA Fast Track pour <objectif>.
Important :
Définir le périmètre, le hors scope, les garde-fous, les validations, la branche et le livrable attendu.
Ne pas modifier les zones hors scope.
```

### 13.2. Validation avant PR

```text
Objectif :
Valider le cycle avant PR.
Vérifier :
- diff ;
- build/tests ;
- garde-fous ;
- documentation ;
- absence de modifications hors scope ;
- statut Git.
```

### 13.3. Post-merge

```text
Objectif :
Documenter le post-merge de la PR #<numéro>.
Ajouter :
- PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- statut ;
- garde-fous ;
- décision ;
- prochaine étape.
```

## 14. Anti-patterns identifiés

| Anti-pattern | Risque | Règle associée |
|--------------|--------|----------------|
| Coder l'UI avant maquette stable | Écart visuel | Figma Design-first |
| Mélanger UI + backend + auth | Dérive de périmètre | Un cycle = un objectif |
| Garder une PR trop large | Revue difficile | PR unique ciblée |
| Ne pas documenter post-merge | Perte de traçabilité | Post-merge obligatoire |
| Publier Notion trop tôt | Documentation incohérente | Plan Notion préalable |
| Lancer nouveau projet sans audit | Dette cachée | Audit préalable |

## 15. Décision globale

La méthode SFIA Fast Track est validée comme cadre de livraison rapide et contrôlée.

Décision :

> SFIA Fast Track devient la méthode de référence pour les prochains projets, sous réserve de respecter les garde-fous, l'audit préalable, la documentation post-merge et la règle Figma Design-first pour les UI premium.

## 16. Vers une architecture d'orchestration SFIA

La capitalisation Interv360 montre que SFIA ne doit pas rester uniquement une méthode documentaire.

La cible est de transformer SFIA Fast Track en architecture d'orchestration automatisable.

Cette évolution vise à réduire les allers-retours manuels entre utilisateur, ChatGPT, Cursor, GitHub et documentation.

Référence :

`method/sfia-fast-track/automation/sfia-automation-architecture.md`

Décision :

> SFIA doit évoluer vers une application factory assistée par IA, en commençant par automatiser les livrables méthode, les prompts, les validations et les rapports avant d'automatiser la génération applicative complète.

## 17. Suites

Après cette capitalisation :

1. Chantier 4 — Mise à jour documentaire complète ;
2. Chantier 5 — Amélioration SFIA : règles, architecture, standards ;
3. préparation du nouveau projet ;
4. formalisation de l'architecture d'automatisation SFIA ;
5. expérimentation progressive d'un modèle semi-automatisé sur le prochain projet.

---

## 18. Statut de merge

La PR de capitalisation SFIA globale et vision d'automatisation a été mergée dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #79 — docs: add SFIA global capitalization and automation vision |
| Branche source | `consolidation/sfia-global-capitalization` |
| Branche cible | `main` |
| Commit d'intégration | `254744f` |
| Statut | Mergé |
| Type | Documentation méthode / capitalisation globale |
| Livrables | `sfia-global-capitalization.md`, `sfia-automation-architecture.md` |
| Code Interv360 | Non modifié |
| Backend / API / CI | Inchangés |
| `sfia-notion-sync` | Non modifié |
| Exports Figma | Non suivis |

Décision :

> Le Chantier 3 — Capitalisation SFIA globale est intégré à `main`. La consolidation peut passer au Chantier 4 — Mise à jour documentaire complète.
