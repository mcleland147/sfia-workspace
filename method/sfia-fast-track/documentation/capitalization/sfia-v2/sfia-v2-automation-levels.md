---
status: candidate
version: v2.0
cycle_type: SFIA v2.0 capitalization / automation levels
scope: Operational definition of L0–L5 automation levels for project delivery
baseline: SFIA foundation v1.1 (closed)
references:
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
---

# SFIA v2.0 — Automation Levels

**Version :** v2.0 (candidate)  
**Statut :** Candidate — validation Morris requise  
**Branche :** `method/sfia-v2-automation-levels`  
**Base :** `main` @ `33550db` (post PR #90)  
**Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

## 1. Purpose

Ce document **décline opérationnellement** la vision SFIA v2.0 automation + delivery (`sfia-v2-automation-and-delivery-vision.md`).

**Objectifs :**

- définir les niveaux **L0 à L5** ;
- indiquer ce qui est **autorisé** à chaque niveau ;
- préciser les **garde-fous** ;
- préciser les **décisions humaines** requises ;
- préparer les **futurs cycles projet** SFIA v2.0.

Ce document ne modifie aucun document canonique v1.1.

## 2. Reference baseline

| Élément | Statut |
|---------|--------|
| **SFIA v1.1** | Baseline stable — méthode opérable, clôturée |
| **SFIA v2.0** | Zone de capitalisation dédiée — `capitalization/sfia-v2/` |
| **Vision v2.0** | Référence principale — PR #90 mergée |
| **Notion** | **Dormant / optionnel** — trajectoire active en pause |
| **Git** | **Source de vérité** — Markdown, PR, traçabilité |
| **Morris** | Autorité de décision structurante |
| **ChatGPT** | Cadrage, routing, génération prompts, analyse rapports |
| **Cursor** | Exécuteur contrôlé dans le repo |

## 3. Automation doctrine

> **Automatiser l'exécution répétable, jamais l'arbitrage structurant.**

| Automatiser | Garder sous Morris |
|-------------|-------------------|
| Contrôles Git et chemins protégés | Décisions d'architecture |
| Rapports structurés (exécution, validation, PR readiness) | Décisions méthode structurante |
| Génération de prompts depuis templates | Push |
| Tâches faibles risques read-only | Création PR (sauf demande explicite) |
| Sélection template selon Cycle Routing Guide | Merge |
| Post-merge checks read-only | Suppression de branche |
| Détection capitalisation | Modification chemins protégés |
| Audits documentation-only | Relance Notion / CMP |

**Invariant :** un niveau plus élevé **n'annule pas** la validation humaine aux points de décision — il réduit la charge opérationnelle répétitive.

## 4. Level overview

| Level | Name | Description | Target status |
|-------|------|-------------|---------------|
| **L0** | Manuel assisté | ChatGPT propose, Morris décide, Cursor exécute, validation manuelle | **Baseline v1.1** |
| **L1** | Contrôle automatisé | Vérifications Git, diff, garde-fous sans modification repo | **À industrialiser rapidement** |
| **L2** | Génération guidée | Prompts, rapports, synthèses générés depuis templates + contexte | **À industrialiser rapidement** |
| **L3** | Exécution bornée | Cursor modifie le repo dans un périmètre strict, rapport obligatoire | **Cible court terme** |
| **L4** | Orchestration contrôlée | Enchaînement contrôlé avec points d'arrêt Morris | **Cible opérationnelle v2.0** |
| **L5 ciblé** | Autonomie locale | Read-only, faible risque, réversible, localisé | **Expérimental / localisé** |
| **L5 global** | Autonomie complète | Décision + push + merge + suppression sans humain | **Hors cible actuelle** |

## 5. Detailed levels

### L0 — Manuel assisté

| Aspect | Détail |
|--------|--------|
| **Définition** | Mode v1.1 actuel — orchestration manuelle entre Morris, ChatGPT, Cursor et Git |
| **Exemples** | Cycle routing manuel ; prompt Cursor rédigé ou adapté à la main ; validation checklist lue manuellement |
| **Actions autorisées** | Toutes actions repo sous garde-fous v1.1 et validation Morris |
| **Actions interdites** | Contournement garde-fous ; exécution sans rapport ; push/merge sans validation |
| **Garde-fous** | Rules & Guardrails v1.1 ; chemins protégés ; validation checklist |
| **Rapport attendu** | Rapport Cursor structuré + décision Morris |
| **Décision Morris** | **Oui** — à chaque étape significative |

### L1 — Contrôle automatisé

| Aspect | Détail |
|--------|--------|
| **Définition** | Automatisation des **vérifications** sans écriture repo |
| **Exemples** | `git status` ; branche courante ; ahead/behind ; `git diff --stat` ; chemins protégés ; fichiers non suivis ; détection terme SFA erroné ; absence fichiers Notion/CMP/export dans diff |
| **Actions autorisées** | Lecture repo ; rapports d'anomalies ; listes de contrôle |
| **Actions interdites** | Modification fichiers ; commit ; push ; création PR |
| **Garde-fous** | Read-only strict ; pas de `--apply` Notion ; pas d'exécution CMP |
| **Rapport attendu** | État / anomalies / OK ou WARN par contrôle |
| **Décision Morris** | **Non** pour les contrôles seuls — **Oui** si anomalie détectée |

### L2 — Génération guidée

| Aspect | Détail |
|--------|--------|
| **Définition** | ChatGPT **génère** prompts ou rapports depuis templates v1.1 + contexte repo |
| **Exemples** | Prompt Cursor depuis template 01–10 ; rapport validation ; PR summary ; post-merge summary ; sélection template via Cycle Routing Guide |
| **Actions autorisées** | Génération texte ; préparation prompt ; draft PR body — **sans exécution repo** |
| **Actions interdites** | Exécution Cursor implicite ; push ; PR ; merge ; modification repo |
| **Garde-fous** | Template + routing obligatoires ; garde-fous Notion/CMP dans prompt généré |
| **Rapport attendu** | Prompt ou rapport généré + sources/templates utilisés |
| **Décision Morris** | **Oui** avant envoi du prompt à Cursor ou avant utilisation du draft PR |

### L3 — Exécution bornée

| Aspect | Détail |
|--------|--------|
| **Définition** | Cursor **exécute** un cycle à périmètre strict défini dans le prompt |
| **Exemples** | Création d'un document unique ; mise à jour documentaire limitée ; structure projet minimale validée ; commit local **uniquement si explicitement demandé** dans le prompt |
| **Actions autorisées** | Création/modification fichiers dans scope prompt ; commit local si autorisé ; rapports structurés |
| **Actions interdites** | Push ; PR ; merge ; modification chemins protégés ; multi-fichiers hors scope ; suppression |
| **Garde-fous** | Un cycle = périmètre explicite ; diff review ; chemins protégés ; pas de Notion/CMP |
| **Rapport attendu** | Diff + fichiers + contrôles + décision proposée + réserves |
| **Décision Morris** | **Oui** avant push, PR, merge, ou cycle suivant |

### L4 — Orchestration contrôlée

| Aspect | Détail |
|--------|--------|
| **Définition** | Enchaînement **L1 → L2 → L3 → validation** avec points d'arrêt Morris |
| **Exemples** | Repo check → génération prompt → exécution Cursor → rapport validation → PR readiness ; post-merge check après merge |
| **Actions autorisées** | Séquences prédéfinies ; plusieurs étapes sous garde-fous ; rapports cumulatifs |
| **Actions interdites** | Enchaînement jusqu'à push/merge sans arrêt ; modification scope en cours de séquence |
| **Garde-fous** | Stop conditions (§9) ; validation Morris aux gates |
| **Rapport attendu** | Rapport d'orchestration avec étapes, statuts, points d'arrêt, décision requise |
| **Décision Morris** | **Oui** aux gates — push, PR, merge, changement trajectoire |

### L5 ciblé — Autonomie locale

| Aspect | Détail |
|--------|--------|
| **Définition** | Automatisation **localisée** sur tâches read-only, faibles risques ou entièrement réversibles |
| **Exemples autorisés** | Audit repo read-only ; détection branches mergées ; rapport post-merge automatique ; inventaire documentaire ; suggestion capitalisation ; synthèse sans modification repo |
| **Actions autorisées** | Lecture ; analyse ; rapports ; suggestions — **zéro write repo** sauf exception documentée et réversible |
| **Actions interdites** | Push ; merge ; suppression ; modification chemins protégés ; décision architecture ; action destructive ; write repo non trivial |
| **Garde-fous** | Cas par cas ; validation Morris avant généralisation ; rollback trivial |
| **Rapport attendu** | Rapport read-only + confirmation aucune modification repo |
| **Décision Morris** | **Oui** pour promouvoir une tâche L5 ciblé en L3/L4 récurrent |

**Règle :** L5 ciblé **≠** L5 global. Expérimental uniquement.

### L5 global — Autonomie complète

| Aspect | Détail |
|--------|--------|
| **Définition** | Décision + exécution + push + PR + merge + suppression **sans humain** |
| **Statut** | **Hors cible actuelle** |
| **Raison** | Garde-fous exécutables pas matures ; gouvernance SFIA exige Morris aux arbitrages structurants |
| **Actions autorisées** | **Aucune** en production v2.0 actuelle |
| **Actions interdites** | Toute autonomie complète sur le cycle delivery |
| **Décision Morris** | Nouvelle **décision stratégique** requise pour toute réouverture |

## 6. Automation level by action type

| Action type | Maximum level allowed now | Human validation required | Notes |
|-------------|---------------------------|---------------------------|-------|
| Read-only repo audit | **L5 ciblé** | Si anomalie | Inventaire, post-merge check |
| Git status / diff check | **L1** | Si anomalie | Industrialiser en L1 standard |
| Prompt generation | **L2 / L3** | Avant exécution Cursor | Templates + routing |
| Cursor execution report | **L2** | Analyse Morris | Génération rapport |
| PR readiness analysis | **L3 / L4** | Avant PR | Pas de création PR auto |
| Figma Fidelity Spike — exécution bornée | **L3** | Avant push | Frame unique, mock data, pas delivery |
| Figma Fidelity Spike — PR readiness / post-merge | **L4** | Avant PR / après merge | Orchestration contrôlée |
| QA strategy generation | **L2** | Avant exécution | ChatGPT / Cursor — stratégie incrément |
| QA test scenario generation | **L2** | Avant exécution | Alignement AC — pas d'exécution auto |
| QA test implementation | **L3** | Avant push | Tests dans périmètre incrément |
| QA execution / reporting | **L3 / L4** | QA-G3 — Morris | Rapport factuel ; pas de GO auto |
| Regression testing (CI / post-merge) | **L4** | QA-G4 — Morris si écart | Non-régression automatisée |
| Automated business acceptance execution | **L4** | Morris — preuves | Recette métier automatisée |
| Final acceptance (QA) | **L0** | **Morris** | Valide preuves — ne déroule pas tests |
| GO PR / merge | **L0** | **Morris** | Distinct de tests passants |
| Comparaison visuelle automatisée (future) | **L5 ciblé** | Avant généralisation | Read-only ; pas de GO delivery auto |
| Post-merge check | **L4 / L5 ciblé** | Si écart | Read-only après merge |
| Capitalization detection | **L2 / L5 ciblé** | Avant capitalisation | Suggestion seulement |
| Incremental delivery closure document | **L3** | Morris — clôture INC-n | Distinct de GO INC-(n+1) |
| Post-INC-n capitalization report | **L3** | Morris — actif méthode | Recommandé après 1er incrément pilote |
| GO next delivery increment (INC-n+1) | **L0** | **Morris — toujours** | Séparé de clôture |
| Create one documentation file | **L3** | Avant push/PR | Scope strict |
| Update one documentation file | **L3** | Avant push/PR | Pas v1.1 canonique sans GO |
| Project bootstrap minimal | **L3** | **Oui** — avant exécution | Futur standard projet |
| Modify canonical v1.1 documents | **L0** | **Oui — GO explicite** | Promotion v2→canonique |
| Modify protected paths | **L0** | **Oui — toujours** | app/, backend/, cmp-001/, etc. |
| Push | **L0** | **Oui — demande explicite** | Jamais L5 global |
| Create PR | **L0** | **Oui — demande explicite** | gh/PR manuel ou GO |
| Merge | **L0** | **Oui — toujours** | Morris |
| Delete branch | **L0** | **Oui — toujours** | Morris |
| Notion apply/sync/publication | **Dormant** | **GO cycle dédié** | Trajectoire pausée |
| CMP/tooling execution | **Dormant** | **GO cycle dédié** | Hors scope v2.0 default |
| Architecture decision | **L0–L2** | **Oui — assistance seule** | Decision Engine |
| Business packaging decision | **L0** | **Oui — toujours** | Différé post-pilote |

## 7. Automation level by SFIA cycle

| SFIA cycle | Recommended level | Maximum level | Required validation |
|------------|-------------------|---------------|---------------------|
| Decision cycle | L0–L2 | L2 | Morris — décision structurante |
| Prompt Cursor cycle | L2–L3 | L3 | Morris avant exécution |
| Repository status check | L1 | L5 ciblé | Morris si anomalie |
| Document creation | L2–L3 | L3 | Morris avant push/PR |
| Document update | L2–L3 | L3 | Morris ; pas v1.1 sans GO |
| Cursor result validation | L2 | L2 | Morris — GO/NO-GO |
| PR readiness | L3–L4 | L4 | Morris avant PR |
| PR summary preparation | L2 | L2 | Morris avant PR |
| Post-merge status | L2–L4 | L5 ciblé | Morris si écart |
| Capitalization cycle | L2–L3 | L3 | Morris — routing matrix |
| Safe cleanup | L3 | L3 | Morris — git mv only |
| Project bootstrap | L3 | L3 | Morris — futur standard |
| Design Figma MVP cycle | L2–L3 | L3 | Morris — gate design (validation visuelle) |
| Figma Fidelity Gate / Spike | L2–L3 | L3 | Morris — D1/D2 spike ; D3/GO delivery séparé |
| Delivery QA / Test cycle | L2–L4 | L4 | Morris — QA-G0…G4 ; final acceptance L0 |
| Incremental delivery closure | L3 | L3 | Morris — CLOSED / CLOSED WITH RESERVES |
| Post-increment capitalization | L3 | L3 | Morris — GO next increment séparé |
| Project delivery cycle | L3–L4 | L4 | Morris aux gates ; QA-G3 avant PR readiness |
| Automation experiment | L5 ciblé | L5 ciblé | Morris — cas par cas |

**Référence routing :** `sfia-cycle-routing-guide.md` (v1.1) reste l'index des types de cycle — v2.0 ajoute le **niveau d'automation** recommandé par type.

## 8. Promotion rules

Une tâche peut **monter de niveau** uniquement si les critères sont remplis.

| Transition | Condition |
|--------------|-----------|
| L0 → L1 | Contrôles reproductibles identifiés ; checklist stable |
| L1 → L2 | Rapports L1 stables ; template prompt disponible |
| L2 → L3 | Diff borné ; périmètre fichier(s) explicite ; rollback trivial |
| L3 → L4 | Étapes répétables ; stop conditions testées ; gates Morris définis |
| → L5 ciblé | Read-only **ou** entièrement réversible ; faible risque ; pas de chemins protégés |
| → L5 global | **Interdit** sans nouvelle décision stratégique documentée |

**Critères de promotion :**

- faible risque ;
- répétabilité démontrée (≥3 cycles réussis) ;
- contrôle diff systématique ;
- rollback possible ;
- garde-fous exécutables ;
- validation humaine claire aux gates ;
- absence de dette documentaire introduite.

**Règle :** promotion **documentée** dans un cycle v2.0 dédié — pas d'élévation implicite.

## 9. Stop conditions

L'automatisation **doit s'arrêter** immédiatement si :

| # | Condition |
|---|-----------|
| 1 | Fichiers tracked modifiés non attendus |
| 2 | Chemins protégés touchés dans le diff |
| 3 | Fichiers Notion / CMP / export ajoutés sans autorisation |
| 4 | Changement de scope en cours de cycle |
| 5 | Suppression de fichiers non explicitement autorisée |
| 6 | Conflit Git ou divergence non résolue |
| 7 | Décision architecture nécessaire |
| 8 | Doute sur le type de cycle (routing ambigu) |
| 9 | Demande push / merge / suppression non validée par Morris |
| 10 | Création de trop nombreux fichiers hors périmètre |
| 11 | Dette documentaire détectée (duplication, SFA, scope flou) |
| 12 | Relance Notion ou CMP sans cycle dédié |
| 13 | Modification document canonique v1.1 sans GO |
| 14 | Échec contrôle L1 (anomalie non résolue) |

**Action :** rapport d'arrêt + escalade Morris — pas de continuation automatique.

## 10. Reporting requirements

| Level | Rapport attendu |
|-------|-----------------|
| **L1** | État / anomalies par contrôle ; OK / WARN / FAIL |
| **L2** | Prompt ou rapport généré ; templates et sources cités |
| **L3** | Diff ; fichiers créés/modifiés ; contrôles exécutés ; décision proposée ; réserves |
| **L4** | Rapport d'orchestration ; étapes ; gates ; points d'arrêt ; décision Morris requise |
| **L5 ciblé** | Rapport read-only ; **confirmation aucune modification repo** |
| **L5 global** | **Non applicable** — hors cible |

**Format minimal L3+ :** Branch status → Files changed → Guardrails check → Validation result → Decision needed from Morris.

## 11. Relationship with project delivery

Les niveaux L0–L5 serviront le futur **Project Bootstrap v2.0** et les cycles delivery :

| Phase projet | Niveau visé | Validation |
|--------------|-------------|------------|
| Lancement projet | L0–L2 | Morris — choix pilote |
| Structure minimale | L3 | Morris — avant commit |
| Cadrage documentaire | L3 | Morris — avant PR |
| Validation Cursor | L2–L3 | Morris — GO/NO-GO |
| PR readiness | L3–L4 | Morris — avant PR |
| Merge | L0 | Morris — toujours |
| Post-merge | L4 / L5 ciblé | Morris si écart |
| Capitalisation | L3 | Morris — routing |

**Objectif :** rendre la boucle delivery (vision §8) **plus courte et plus fiable** sans retirer Morris des décisions structurantes.

**Prochain grand chantier après ce document :** standard de démarrage projet — `sfia-v2-project-bootstrap-standard.md` (étape 3 de l'ordre validé). Voir **§12** pour la trajectoire détaillée du cycle de vie projet (*project lifecycle*).

## 12. Trajectoire d'automatisation du cycle de vie projet

SFIA v2.0 ne vise pas uniquement l'automatisation d'actions isolées dans le repo ; elle prépare l'automatisation progressive du cycle de vie projet, de l'intention initiale à la capitalisation post-merge.

**Principes :**

- SFIA v2.0 prépare la conduite **de bout en bout** d'un projet réel, avec des niveaux d'automatisation adaptés à chaque étape ;
- cette trajectoire **n'implique pas** que tout soit automatisé dès v2.0 — certaines étapes restent en L0 ou L2 pendant longtemps ;
- pour chaque étape projet, le document fixe : le **niveau cible** v2.0, le **niveau maximum autorisé aujourd'hui**, et le **gate Morris** obligatoire ;
- la conduite projet orchestrée par SFIA doit devenir **progressivement plus automatisable**, de l'intention initiale à la capitalisation, sans supprimer les arbitrages structurants.

**Trajectoire projet (intention → capitalisation) :**

| Étape du cycle de vie projet | Cible d'automatisation v2.0 | Niveau maximum actuel | Gate Morris |
|------------------------------|------------------------------|----------------------|-------------|
| Idée / opportunité projet | L2 | L2 | Morris valide l'intérêt |
| Qualification initiale | L2 | L2 | Morris valide le GO cadrage |
| Cadrage projet | L2–L3 | L3 | Morris valide le scope |
| Décisions initiales | L0–L2 | L2 | Morris valide les décisions |
| Architecture fonctionnelle | L2–L3 | L3 | Morris valide la structure |
| UX/UI fonctionnelle Markdown | L2–L3 | L3 | Morris valide wireframes repo-first |
| Design Figma MVP | L2–L3 | L3 | Morris valide visuellement — **Git = source de vérité** ; Figma ≠ source unique |
| Figma Fidelity Gate / Spike | L2–L3 | L3 | Morris valide D1/D2 fidélité code — **GO delivery séparé (D3/M7)** |
| Backlog MVP | L2–L3 | L3 | Morris valide les priorités — **idéalement après Figma** |
| Architecture technique légère | L0–L2 | L2 | Morris valide l'architecture — **après Figma et backlog validés** |
| Cycle d'implémentation | L3–L4 | L4 | Morris valide les gates |
| Delivery QA / Test (par incrément) | L2–L4 | L4 | Morris valide QA-G3 avant PR readiness — **final acceptance L0** |
| Validation / tests | L2–L4 | L4 | Morris valide GO/NO-GO — preuves QA, pas exécution Morris |
| PR readiness | L3–L4 | L4 | Morris valide la PR |
| PR / merge | L0 | L0 | Morris uniquement |
| Post-merge check | L4 / L5 ciblé | L5 ciblé | Morris intervient si anomalie |
| Incremental closure (INC-n) | L3 | L3 | Morris — clôture ≠ GO INC-(n+1) |
| Capitalisation post-incrément | L2–L3 | L3 | Morris — recommandée après 1er incrément pilote |
| Capitalisation | L2–L3 | L3 | Morris valide l'actif à capitaliser |
| Amélioration de la méthode | L2–L3 | L3 | Morris valide toute promotion vers document canonique |

Cette trajectoire sera **testée concrètement** via le futur **Project Bootstrap v2.0** et le projet pilote neuf. Le standard **Delivery QA / Test** (`sfia-v2-delivery-qa-test-standard.md`), le standard **Incremental Delivery Closure** (`sfia-v2-incremental-delivery-closure-standard.md`) et le standard de démarrage projet (`sfia-v2-project-bootstrap-standard.md`) reprennent cette logique étape par étape : niveau cible, niveau autorisé, gate Morris, livrables attendus.

**Rattrapage pilote :** si le backlog MVP a été produit avant Figma (ex. Chantiers360 v2), appliquer le cycle Design Figma MVP puis un micro-cycle **Backlog Alignment** si écarts — voir `sfia-v2-design-figma-cycle-standard.md` §8.

Les niveaux L ne sont pas uniquement des **niveaux techniques** (contrôles Git, génération de prompts, exécution Cursor) — ce sont aussi des **niveaux de gouvernance projet**. L'ambition de SFIA v2.0 est de rendre la méthode capable de conduire progressivement un projet complet, de l'intention à la capitalisation, en automatisant l'exécution répétable à chaque étape tout en conservant Morris aux points de décision structurants.

## 13. Prochain cycle recommandé

**Document proposé :**

`method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`

**Contenu attendu :** standard de démarrage d'un **projet pilote neuf** — structure minimale, garde-fous, niveaux L autorisés, checklist bootstrap.

**Condition :** cycle **validé par Morris** avant exécution.

---

## Decision (provisional)

**Décision proposée : SFIA V2.0 AUTOMATION LEVELS DOCUMENTED — PENDING MORRIS VALIDATION**

| Critère | Statut |
|---------|--------|
| Aligné vision PR #90 | Oui |
| L5 global hors cible | Oui |
| L5 ciblé limité | Oui |
| v1.1 non modifié | Oui |
| Notion dormant | Oui |
| Document unique | Oui |

**Références :**

- `sfia-v2-automation-and-delivery-vision.md`
- `sfia-v2-incremental-delivery-closure-standard.md`
- `prompts/prompt-catalog.md` — §14
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — §6.12–6.14
- `sfia-v2-figma-fidelity-gate-standard.md`
- `sfia-cycle-routing-guide.md`
- `sfia-validation-checklist.md`
- `prompts/templates/` (01–10)
- `sfia-notion-publication-track-pause-decision.md`
