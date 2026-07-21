---
status: foundation
version: v1.1
previous: sfia-rules-update.md
updated_after: SFIA foundation v1.1 consolidation
scope: rules and guardrails
---

# SFIA Rules & Guardrails v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Rules and guardrails

## 1. Objectif

Ce document consolide les règles et garde-fous fondamentaux de SFIA v1.1.

Il unifie :

- les règles issues de `sfia-rules-update.md` ;
- les principes d'ingénierie SFIA (`docs/foundation/sfia-engineering-principles.md`) ;
- les garde-fous opérationnels du modèle ChatGPT ↔ Cursor ;
- les règles de gouvernance repository ;
- les règles de préparation Notion ;
- les limites d'automatisation ;
- les règles de routage documentaire à appliquer aux prompts et aux cycles.

Ce document ne remplace pas les checklists opérationnelles.

Il sert de référence canonique pour comprendre les règles qui doivent encadrer les cycles SFIA.

## v1.1 Engineering Principles Reference

The rules and guardrails defined in this document operationalize:

- `docs/foundation/sfia-engineering-principles.md`

They must be interpreted as implementation constraints derived from the Engineering Principles, not as a competing source of truth.

## 2. Positionnement

| Document | Rôle |
|----------|------|
| `sfia-rules-and-guardrails.md` | Référence canonique des règles et garde-fous |
| `sfia-rules-update.md` | Historique et règles Fast Track existantes |
| `sfia-engineering-principles.md` | Principes d'ingénierie SFIA |
| `sfia-chatgpt-cursor-operating-model.md` | Application opérationnelle ChatGPT ↔ Cursor |
| `sfia-knowledge-layer.md` | Routage documentaire et couche connaissance |
| `checklists/` | Contrôles opérationnels utilisables dans les cycles |

## 3. Principes directeurs

| Principe | Description |
|----------|-------------|
| Repository first | Git est la source de vérité opérationnelle |
| Human validation first | Les décisions structurantes restent humaines |
| One cycle, one useful result | Un cycle doit produire un résultat utile |
| Prompt as contract | Le prompt Cursor est un contrat d'exécution |
| Scope before execution | Le périmètre est défini avant action |
| Documentation routing before prompt | Le prompt doit identifier les sources à lire et les dossiers à alimenter |
| Guardrails before automation | Les garde-fous précèdent l'automatisation |
| Capitalization by default | Les apprentissages sont capitalisés |
| No raw Notion sync | Notion n'est pas un miroir brut |
| Traceability by default | Les décisions et changements sont traçables |
| Platform over projects | Chaque projet doit renforcer SFIA |

## 4. Règles de cycle

| Règle | Description |
|-------|-------------|
| Un cycle = un objectif | Ne pas mélanger plusieurs chantiers dans un même cycle |
| Une branche = un cycle | Chaque cycle significatif utilise une branche dédiée |
| Un résultat utile | Chaque cycle produit un livrable, une correction, un audit ou une capitalisation |
| Un hors périmètre explicite | Les exclusions sont documentées avant exécution |
| Sources explicites | Les documents sources à lire sont indiqués avant exécution |
| Dossier cible explicite | Le dossier à alimenter est identifié avant production |
| Validation avant commit significatif | Les changements majeurs sont revus |
| PR unique par livraison | La PR doit raconter une livraison cohérente |
| Post-merge obligatoire | Toute PR significative doit avoir un statut post-merge |
| REX après jalon majeur | Les jalons importants alimentent la capitalisation |
| Audit avant cycle majeur | Auditer le socle avant un nouveau cycle produit significatif |
| Figma Design-first pour UI premium | Maquette Figma Design validée avant implémentation Cursor |
| Backend/API dans cycle dédié | Toute modification backend/API requiert un cycle séparé |
| Notion jamais automatique | Aucune publication Notion sans plan validé |

## 5. Règles de routage documentaire

Tout cycle SFIA doit déterminer :

1. la phase ou le contexte du cycle ;
2. les documents sources à lire ;
3. les livrables attendus ;
4. le dossier cible à alimenter ;
5. le niveau de capitalisation attendu ;
6. les documents ou dossiers à ne pas modifier ;
7. les validations nécessaires.

Règle :

> Tout prompt Cursor doit s'appuyer sur la Documentation Routing Matrix définie dans `sfia-knowledge-layer.md`.

Un prompt Cursor incomplet sur les sources, les dossiers cibles ou les garde-fous doit être considéré comme insuffisant.

## 6. Garde-fous repository

| Garde-fou | Règle |
|-----------|-------|
| Code applicatif | Ne pas modifier sans demande explicite |
| Backend | Ne pas modifier sans demande explicite |
| CI | Ne pas modifier sans demande explicite |
| `tools/cmp-001/` | Ne pas modifier sans demande explicite |
| Exports Figma | Ne pas toucher aux exports non suivis |
| Déplacements | Utiliser `git mv` |
| Suppressions | Ne pas supprimer brutalement, préférer archive ou justification |
| Working tree | Vérifier `git status --short` |
| Chemins interdits | Vérifier systématiquement avant commit |
| Push | Ne pas push sans validation humaine |
| PR | Ne pas créer sans validation humaine |
| Merge | Ne pas merger automatiquement |

## 7. Garde-fous ChatGPT ↔ Cursor

| Garde-fou | Description |
|-----------|-------------|
| ChatGPT ne modifie pas le repo | Il produit analyse, cadrage, prompts, validation |
| Cursor exécute le contrat | Il ne doit pas improviser hors prompt |
| Sources obligatoires | Les documents sources doivent être explicitement indiqués |
| Dossiers cibles obligatoires | Les dossiers à alimenter doivent être explicitement indiqués |
| Retour structuré obligatoire | Cursor doit remonter fichiers, commits, contrôles et alertes |
| Analyse post-exécution | ChatGPT vérifie la cohérence du retour |
| Décision humaine | L'humain valide GO / réserves / NO-GO |
| Prompt complet | Le prompt doit contenir contexte, périmètre, hors périmètre, sources, dossiers, actions et contrôles |

## 8. Garde-fous Notion / Knowledge

| Garde-fou | Description |
|-----------|-------------|
| Pas de sync brute | Notion n'est jamais synchronisé automatiquement sans préparation |
| Repo source de vérité | Les documents versionnés dans Git sont la base opérationnelle |
| Notion couche éditorialisée | Notion sert à la lecture, navigation, synthèse et usage métier |
| Mapping obligatoire | Toute publication doit être précédée d'un mapping repo → Notion |
| Dry-run obligatoire | Toute publication doit être précédée d'un dry-run |
| Validation humaine | Toute publication doit être validée explicitement |
| Payloads historiques | Ne pas réutiliser les payloads JSON historiques tels quels |
| Archives contextualisées | Les archives ne doivent pas être publiées sans contexte |

## 9. Garde-fous automatisation

| Garde-fou | Description |
|-----------|-------------|
| Automatisation progressive | Niveau 0 → 4, sans saut prématuré |
| Pas d'autonomie non validée | Aucun moteur ne remplace la validation humaine en v1.1 |
| Moteurs après operating model | Les specs moteurs doivent dériver de l'Operating Model |
| Validation explicite | Tout moteur doit produire des résultats vérifiables |
| Logs and evidence | Toute automatisation future doit produire des traces |
| Désactivation possible | Toute automatisation doit pouvoir être arrêtée ou contournée |

## 10. Modèle de décision

SFIA utilise les décisions suivantes :

| Décision | Usage |
|----------|-------|
| GO | Continuer ou livrer |
| GO avec réserves | Continuer avec réserves documentées |
| NO-GO | Bloquer ou reprendre |
| COMPLETE | Travail complet |
| COMPLETE AVEC RÉSERVES | Exploitable avec réserves |
| INCOMPLETE | Insuffisant |
| FONDATIONS IDENTIFIÉES | Socle repéré |
| FONDATIONS PARTIELLES | Socle présent mais à consolider |
| FONDATIONS INSUFFISANTES | Socle non suffisant |

## 11. Classification des réserves

| Type | Signification |
|------|---------------|
| Bloquante | Empêche la livraison ou la suite |
| Mineure | À traiter mais non bloquante |
| Résiduelle | Peut être suivie sans action immédiate |
| P0 | Priorité immédiate |
| P1 | Priorité prochaine passe |
| P2 | Amélioration ultérieure |

## 12. Règles de capitalisation

| Règle | Description |
|-------|-------------|
| Tout jalon majeur produit une capitalisation | Audit, REX, synthèse ou update méthode |
| Tout projet de référence enrichit SFIA | Interv360 est le cas de référence initial |
| Tout apprentissage doit être relié | Relier aux docs, prompts, templates, practices ou roadmap |
| Les archives sont conservées | Elles servent à la traçabilité, pas à l'usage actif |
| Les documents canoniques sont identifiés | Éviter les sources concurrentes |
| Les livrables sont routés | Chaque livrable doit être placé dans son dossier cible logique |
| Les prompts sont capitalisés | Les prompts réutilisables doivent alimenter `prompts/` |

## 13. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| Prompt vague | Modifications hors périmètre |
| Cycle trop large | PR illisible et validation difficile |
| Sources non précisées | Cursor ou le rédacteur travaille sans base fiable |
| Dossier cible absent | Livrable mal classé ou difficile à retrouver |
| Sync Notion brute | Publication de contenu non éditorialisé |
| Modification code en cycle documentaire | Régression ou dette non maîtrisée |
| Absence de post-merge | Perte de traçabilité |
| Suppression sans archive | Perte historique |
| Automatisation prématurée | Perte de contrôle |
| PR sans revue humaine | Livraison non gouvernée |
| Document créé sans source | Connaissance non traçable |
| UI avant maquette stable | Écart visuel et rework |
| Mélange UI + backend + auth | Dérive de périmètre |
| Rapport Cursor sans review pack light/full | Cycle incomplet — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |
| Rapport Cursor avec handoff `not required` ou `none` | Ambiguïté interdite — publication handoff obligatoire |
| Review pack light/full sans publish-in-cycle | Cycle incomplet — pas de publication remote |

## 13.1 Review Handoff Git — règle transverse (absorbée v2.6 — origine capitalisation v2.5)

> **Référence :** template §7.0, §7.10–§7.11 ; operating model §18.2.8.H ; routing guide §2.1.
> **Règle centrale :** `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.

| Règle | Application |
|-------|-------------|
| **Décision obligatoire** | Tout cycle Cursor produisant un rapport : Review Handoff Git = **required** + Mode **`publish-in-cycle`** + Push **oui — L3 borné** |
| **Prompt incomplet** | Rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme → **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** |
| **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné **dans le même cycle** |
| **Exception `local-only`** | Uniquement blocage technique / interdiction Morris explicite → **`HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED`** |
| **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
| **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor pour tout rapport Cursor |
| **Baseline** | Règle **absorbée dans SFIA v2.6 (baseline opérationnelle)** — origine capitalisation v2.5 ; v2.6 active sur `main` après merge PR #204 — alignement mandatory routing en attente de merge méthode |

## 14. Documents associés

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-update.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/documentation/archive/checklists/validation-checklist.md`
- `method/sfia-fast-track/documentation/archive/checklists/notion-publication-checklist.md`

## 15. Décision

`sfia-rules-and-guardrails.md` devient la référence canonique des règles et garde-fous SFIA v1.1.

Les checklists restent les supports opérationnels d'exécution.

La Documentation Routing Matrix définie dans `sfia-knowledge-layer.md` devient la référence pour déterminer les sources, les livrables et les dossiers à alimenter dans les cycles SFIA.
