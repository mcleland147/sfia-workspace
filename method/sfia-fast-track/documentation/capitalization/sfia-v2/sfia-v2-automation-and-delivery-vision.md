---
status: candidate
version: v2.0
cycle_type: SFIA v2.0 capitalization / automation and delivery vision
scope: First SFIA v2.0 document — automation and project delivery doctrine
validated_with: Morris
baseline: SFIA foundation v1.1 (closed)
---

# SFIA v2.0 — Automation and Delivery Vision

**Version :** v2.0 (candidate)  
**Statut :** Candidate — validation Morris requise  
**Branche :** `method/sfia-v2-automation-vision`  
**Base :** `main` @ `34615da` (post PR #89)  
**Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

## 1. Purpose

SFIA v2.0 ouvre une **nouvelle trajectoire** après la clôture documentée de **SFIA foundation v1.1**.

**Ce que v1.1 a accompli :**

- méthode opérable et documentée ;
- règles, garde-fous et Cycle Routing Guide ;
- templates de prompts et catalog ;
- validation structurée (checklist, engines) ;
- modèle ChatGPT ↔ Cursor ↔ Git ;
- repo-first et traçabilité PR ;
- capitalisation documentaire v1.1 ;
- Notion classé comme canal optionnel (trajectoire active en pause).

**Ce que v2.0 vise :**

- **ne pas refaire v1.1** ;
- rendre la méthode **automatisable** ;
- rendre SFIA capable de **lancer, structurer, produire, valider et capitaliser des projets réels** via ChatGPT, Cursor, Git, Markdown et PR ;
- tendre progressivement vers une logique de **centre de service IA** piloté par Morris ;
- **automatiser l'exécution répétable**, les contrôles, les rapports et les cycles faibles risques ;
- **ne pas automatiser** les décisions structurantes, les actions destructives, les merges ou les arbitrages humains.

Ce document est le **premier livrable v2.0**. Il ne modifie aucun document canonique v1.1.

## 2. From SFIA v1.1 to SFIA v2.0

| Dimension | SFIA v1.1 | SFIA v2.0 |
|-----------|-----------|-----------|
| **Méthode** | Documentée, opérable manuellement | Automatisable, orientée delivery projet |
| **Cycles** | Guidés par routing + prompts | Semi-exécutables selon niveau de risque |
| **Prompts** | Templates robustes, sélection manuelle | Générables / sélectionnables selon le risque |
| **Validation** | Structurée, humaine en fin de cycle | Semi-automatisée (contrôles, rapports, PR readiness) |
| **Capitalisation** | Documentaire, indexée | Détectable, routée, capitalisation progressive |
| **Repo-first** | Source de vérité Git | **Conservé** — invariant |
| **Décision humaine** | Requise pour actions significatives | **Conservée** — Morris reste l'autorité |
| **Notion** | Préparé puis pausé | **Optionnel / dormant** — non dépendance v2.0 |
| **Exécution Cursor** | Prompts préparés par ChatGPT | Exécution bornée, contrôles automatisés en amont |
| **Delivery projet** | Démontré (Interv360) | Standardisé pour **nouveaux projets pilotes** |
| **Niveau automation** | L0 (manuel assisté) | Cible L1→L4 ; L5 ciblé expérimental |

**Principe de continuité :** v1.1 reste la **baseline stable**. v2.0 s'ajoute dans une zone de capitalisation dédiée, sans refonte parallèle.

## 3. Validated v2.0 direction

Direction validée avec Morris :

1. **SFIA v2.0 doit permettre de lancer et développer de nouveaux projets** avec la méthode — pas seulement documenter la méthode elle-même.
2. **SFIA v2.0 doit progressivement automatiser les cycles répétables** — contrôles Git, rapports, PR readiness, sélection de templates.
3. **SFIA v2.0 prépare une logique de centre de service IA** piloté par Morris — sans packaging commercial immédiat.
4. **Morris reste l'autorité de décision** — architecture, trajectoire, merge, push, arbitrages méthode.
5. **Git reste la source de vérité** — Markdown versionné, PR, post-merge trace.
6. **Cursor = exécuteur contrôlé** — dans le repo, sous garde-fous et chemins protégés.
7. **ChatGPT = cadreur, routeur, générateur de prompts, analyste de rapports** — pas décideur autonome.
8. **Les actions structurantes restent soumises à validation humaine** — push, PR, merge, suppression, relance Notion, CMP.

## 4. Core principle

> **Automatiser l'exécution répétable, jamais l'arbitrage structurant.**

| Automatiser | Ne pas automatiser |
|-------------|-------------------|
| Contrôles Git (branche, status, diff) | Décisions d'architecture |
| Contrôles chemins protégés | Décisions méthode structurantes |
| Rapports d'exécution Cursor | Merges |
| Sélection de template selon cycle | Push |
| Génération de prompts (cycles faibles risques) | Suppressions / actions destructives |
| PR readiness (analyse, pas création PR) | Choix de trajectoire SFIA |
| Post-merge checks read-only | Relance Notion / CMP |
| Audits faibles risques read-only | L5 global (autonomie complète) |
| Détection besoin de capitalisation | Arbitrages Morris |

## 5. Automation levels

| Level | Name | Description | SFIA v2.0 position |
|-------|------|-------------|-------------------|
| **L0** | Manuel assisté | Humain + ChatGPT + Cursor ; prompts et contrôles manuels | **Baseline actuelle** (v1.1) |
| **L1** | Contrôle automatisé | Scripts / prompts vérifient Git, diff, chemins protégés | **À industrialiser rapidement** |
| **L2** | Génération guidée | ChatGPT génère prompts Cursor à partir de templates + contexte | **À industrialiser rapidement** |
| **L3** | Exécution bornée | Cursor exécute cycles documentés à périmètre strict, rapport obligatoire | **Cible court terme** |
| **L4** | Orchestration contrôlée | Enchaînement cycle → prompt → exécution → validation → rapport sous garde-fous | **Cible opérationnelle v2.0** |
| **L5 ciblé** | Autonomie locale | Tâches read-only, faibles risques, réversibles, localisées | **Expérimental** — cas par cas |
| **L5 global** | Autonomie complète | Décision, push, merge, suppression sans humain | **Hors cible actuelle** |

**Référence v1.1 :** le Operating Model décrit déjà une échelle 0–4 orientée Notion — v2.0 **remplace cette échelle** par L0–L5 ci-dessus pour la trajectoire automation + delivery, sans modifier le document v1.1 canonique.

## 6. What can be automated

Priorités d'automatisation v2.0 :

| Domaine | Automatisation visée |
|---------|---------------------|
| **État Git** | Branche courante, sync avec origin, commits ahead/behind |
| **Working tree** | Fichiers modifiés, non suivis, staged |
| **Chemins protégés** | Détection touch dans diff |
| **Diff** | Stat, name-only, scope documentation vs code |
| **Prompt Cursor** | Génération depuis template + cycle routing + contexte repo |
| **Rapport Cursor** | Structure attendue : fichiers, contrôles, décision, réserves |
| **PR readiness** | Analyse READY / NOT READY — sans création PR automatique |
| **Post-merge** | Vérifications read-only post-merge |
| **Capitalisation** | Détection besoin de capitaliser (asset type, routing matrix) |
| **Synthèses read-only** | Audits, inventaires, PR readiness reports |
| **Audits faibles risques** | Documentation-only, pas de write repo |

**Moyens :** prompts templates existants, context pack GPT, Cycle Routing Guide, validation checklist — **pas** de nouvelle usine à gaz dans ce cycle.

## 7. What must remain human-controlled

Sous décision **Morris** uniquement :

| Catégorie | Exemples |
|-----------|----------|
| **Trajectoire SFIA** | Ouverture v2.0, ordre des cycles, promotion v2→canonique |
| **Architecture** | ADR, stack, persistence, API contract |
| **Méthode structurante** | Modification rules, routing guide, engines canoniques |
| **Projet** | Choix projet pilote neuf, GO bootstrap, périmètre |
| **Validation PR** | GO merge, réserves acceptées |
| **Git remote** | Push (sauf demande explicite dans prompt) |
| **PR** | Création PR (sauf demande explicite) |
| **Merge** | Toujours humain |
| **Branches** | Suppression |
| **Chemins protégés** | Modification app/, backend/, workflows/, cmp-001/ |
| **Notion** | Relance trajectoire, apply, sync, publication |
| **CMP** | Payloads, exécution tooling |
| **Destructif** | rm, reset, force push, suppression contenu |
| **L5 global** | Autonomie sans humain dans la boucle |

## 8. Delivery vision

SFIA v2.0 doit permettre de **développer des projets réels** — pas seulement la méthode.

**Boucle cible :**

```text
Intention Morris
    → ChatGPT route le cycle (Cycle Routing Guide)
    → ChatGPT prépare le prompt Cursor (template + garde-fous)
    → Cursor exécute dans le repo
    → Git trace le changement
    → Cursor produit un rapport structuré
    → ChatGPT analyse (validation template)
    → Morris décide (GO / réserves / NO-GO)
    → PR readiness (semi-automatisé)
    → PR / merge manuel
    → post-merge status
    → capitalisation
```

**Objectif v2.0 :** rendre cette boucle **plus automatisable**, **plus courte** et **plus fiable** — en automatisant L1–L3 en priorité, puis L4.

**Livrables projet attendus :** cadrage, architecture, design, delivery, validation, REX — routés selon Knowledge Layer et blueprint existants v1.1.

## 9. AI service center trajectory

**Ambition long terme (secondaire à la sécurisation v2.0) :**

SFIA peut permettre à Morris de piloter une capacité de production proche d'un **mini-centre de service IA** :

| Rôle couvert | Acteur v2.0 |
|--------------|-------------|
| Cadrage | Morris + ChatGPT |
| Documentation | ChatGPT + Cursor |
| Conception | Morris + ChatGPT |
| Prompting | ChatGPT (templates) |
| Développement assisté | Cursor |
| Validation | ChatGPT analyse + Morris décide |
| Delivery | Boucle Git / PR |
| Capitalisation | Cursor + routing v1.1 |
| Pilotage | Morris |

**Ce n'est pas l'objectif immédiat :**

- remplacer toute expertise humaine ;
- business packaging ou offre commerciale formalisée ;
- centre de service opérationnel externalisé.

**Séquence :** sécuriser v2.0 sur un **projet pilote neuf** → prouver la boucle → puis seulement envisager industrialisation commerciale.

## 10. Repository strategy

| Règle | Application |
|-------|-------------|
| Ne pas refondre le repo | Structure v1.1 conservée |
| Ne pas écraser v1.1 | Documents canoniques intouchés sans décision explicite |
| Zone v2.0 dédiée | `method/sfia-fast-track/documentation/capitalization/sfia-v2/` |
| v1.1 = baseline stable | Référence pour exécution et validation |
| Promotion v2→canonique | Uniquement après validation Morris + retour d'usage |
| Pas de méthode parallèle | v2.0 capitalise et étend, ne duplique pas |
| Progression document par document | Pas de création massive de fichiers v2.0 |

**Notion :** reste dormant — voir `sfia-notion-publication-track-pause-decision.md`. Aucune dépendance v2.0.

## 11. Validated implementation order

Ordre validé avec Morris (provisoire — ajustable après retour d'usage) :

| # | Étape | Statut |
|---|-------|--------|
| 1 | Vision v2.0 automation + delivery | **Ce document** |
| 2 | Niveaux L0–L5 (document dédié) | À venir — validation Morris |
| 3 | Standard de démarrage projet | À venir |
| 4 | Choix d'un projet pilote neuf | À venir |
| 5 | Bootstrap minimal du projet | À venir |
| 6 | Cycles projet semi-automatisés | À venir |
| 7 | Validation / PR readiness | À venir |
| 8 | Post-merge / capitalisation | À venir |
| 9 | Optimisation vers L4 puis L5 ciblé | À venir |

**Règle :** un cycle = un document (ou un livrable) validé avant le suivant.

## 12. Explicitly deferred topics

Sujets **explicitement différés** — hors scope v2.0 phase initiale :

| Sujet | Raison |
|-------|--------|
| Notion publication / apply / sync | Trajectoire pausée — décision documentée |
| CMP / tooling modification | Hors scope sauf cycle dédié |
| GitHub Actions | Différé |
| Cursor Automations en exécution active | Différé — L4+ |
| Interv360 app/backend | Chemins protégés |
| Refonte massive du repo | Interdit par doctrine |
| Business model complet | Différé post-pilote |
| Centre de service formalisé | Ambition long terme |
| L5 global | Hors cible |
| Création massive templates / dossiers | Anti usine à gaz |
| Modification documents canoniques v1.1 | Après retour d'usage uniquement |

## 13. Next recommended cycle

**Prochain document proposé :**

`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`

**Contenu attendu :** détail opérationnel des niveaux L0–L5, critères de passage, exemples par type de cycle, garde-fous par niveau.

**Condition :** ce cycle **doit être validé par Morris** avant exécution — pas de rédaction automatique sans GO.

---

## Decision (provisional)

**Décision proposée : SFIA V2.0 VISION DOCUMENTED — PENDING MORRIS VALIDATION**

| Critère | Statut |
|---------|--------|
| v1.1 baseline préservée | Oui |
| Zone v2.0 conforme | Oui |
| Notion dormant | Oui |
| L5 global hors cible | Oui |
| Repo-first | Oui |
| Document unique | Oui |

**Références v1.1 (non modifiées) :**

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md`
- `prompts/templates/sfia-prompt-templates-context-pack.md`
