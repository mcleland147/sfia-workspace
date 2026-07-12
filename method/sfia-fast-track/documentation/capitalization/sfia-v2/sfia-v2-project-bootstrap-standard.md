---
status: candidate
version: v2.0
cycle_type: SFIA v2.0 capitalization / project bootstrap standard
scope: Standard for controlled, repo-first initialization of a new SFIA v2.0 pilot project
baseline: SFIA foundation v1.1 (closed)
references:
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md
---

# SFIA v2.0 — Project Bootstrap Standard

**Version :** v2.0 (candidate)
**Statut :** Candidate — validation Morris requise
**Branche :** `method/sfia-v2-project-bootstrap-standard`
**Base :** `main` @ `4dcb070` (post PR #91)
**Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

> **Ce document est un standard méthode.** Il ne crée aucun projet réel dans `projects/`. Le bootstrap concret sera exécuté dans un cycle ultérieur, après choix du projet pilote.

## 1. Purpose

Ce document définit **comment SFIA v2.0 initialise un nouveau projet pilote** de manière contrôlée, progressive et repo-first, sans créer d'usine à gaz documentaire.

**Objectifs :**

- cadrer le **démarrage projet** ;
- éviter une **création documentaire excessive** ;
- définir une **structure minimale** ;
- déterminer les **gates Morris** ;
- définir les **niveaux d'automatisation autorisés** ;
- préparer le futur **choix d'un projet pilote neuf** ;
- permettre à SFIA de conduire **progressivement un projet de bout en bout**.

Ce document ne modifie aucun document canonique v1.1 et ne crée aucune structure sous `projects/`.

## 2. Reference baseline

| Élément | Statut |
|---------|--------|
| **SFIA v1.1** | Baseline stable — méthode opérable, clôturée |
| **Vision v2.0** | PR #90 — automation + delivery |
| **Automation levels** | PR #91 — L0–L5 + trajectoire cycle de vie projet |
| **SFIA v2.0** | Zone de capitalisation dédiée — `capitalization/sfia-v2/` |
| **Git** | **Source de vérité** — Markdown, PR, traçabilité |
| **Notion** | **Dormant / optionnel** — non dépendance v2.0 |
| **Interv360** | Référence historique possible — **ne pas rouvrir par défaut** |
| **Morris** | Autorité de décision structurante |
| **ChatGPT** | Cadrage, routing, génération prompts, analyse rapports |
| **Cursor** | Exécuteur contrôlé dans le repo |

## 3. Bootstrap doctrine

> **Un bootstrap projet SFIA v2.0 doit créer le minimum nécessaire pour décider, cadrer et apprendre — pas une arborescence complète par anticipation.**

| Principe | Application |
|----------|-------------|
| **Commencer petit** | Deux fichiers + un dossier au premier bootstrap réel |
| **Créer uniquement ce qui sert le cycle** | Pas de livrables anticipés |
| **Ne pas dupliquer la méthode** | La méthode reste dans `method/sfia-fast-track/` |
| **Ne pas créer de dossiers vides** | Chaque dossier naît avec au moins un fichier utile |
| **Ne pas produire tous les livrables dès le départ** | Extensions après validation Morris |
| **Préserver la lisibilité du repo** | Structure claire, nommage kebab-case |
| **Morris gate** | GO bootstrap, nom projet, scope, PR, merge |

**Doctrine centrale (héritée v2.0) :** automatiser l'exécution répétable, jamais l'arbitrage structurant.

## 4. What bootstrap is / is not

| Bootstrap projet SFIA v2.0 **est** | Bootstrap projet SFIA v2.0 **n'est pas** |
|-------------------------------------|------------------------------------------|
| Démarrage contrôlé d'un projet pilote neuf | Génération complète et automatique d'un projet |
| Cadrage minimal repo-first | Création automatique de `app/` ou `backend/` |
| Base pour décider, apprendre et itérer | Création massive de documents par anticipation |
| Préparation à la delivery progressive | Contournement du cadrage ou des gates Morris |
| Support à la décision Morris | Automatisation L5 globale |
| Application des niveaux L0–L5 au cycle bootstrap | Duplication de la méthode SFIA dans le projet |
| Premier pas concret du cycle de vie projet | Ouverture ou modification d'Interv360 par défaut |

## 5. Minimal project structure

Structure minimale **recommandée** pour un projet pilote neuf — **cible du premier bootstrap réel, pas à créer dans ce cycle documentaire** :

```
projects/<project-name>/
├── README.md
└── 00-framing/
    └── 2026-07-07-project-framing.md
```

| Fichier | Rôle |
|---------|------|
| **README.md** | Identité projet, objectif, statut, références SFIA, prochaines étapes |
| **00-framing/2026-07-07-project-framing.md** | Intention, problème, utilisateurs, périmètre, hors périmètre, hypothèses, décisions ouvertes, risques, prochain cycle |

**Règle :** cette structure est le **maximum autorisé** au premier bootstrap réel, sauf décision Morris explicite documentée.

## 6. Optional project structure extensions

Extensions possibles **uniquement après validation Morris** et lorsqu'un cycle justifie le besoin :

```
projects/<project-name>/
├── 00-framing/
├── 01-functional-architecture/
├── 02-ux-ui/
├── 04-design/              ← cycle Design Figma MVP — voir sfia-v2-design-figma-cycle-standard.md
├── 03-backlog/             ← idéalement après 04-design
├── 05-delivery/
├── 06-validation/
└── 07-capitalization/
```

| Règle | Détail |
|-------|--------|
| **Pas par défaut** | Ces dossiers ne sont **pas** créés au bootstrap initial |
| **Création justifiée** | Un cycle SFIA dédié doit expliquer pourquoi le dossier est nécessaire |
| **Pas de dossiers vides** | Chaque dossier créé contient au moins un fichier utile |
| **Interdictions bootstrap** | `app/`, `backend/`, `.github/workflows/`, `tools/`, intégrations techniques — **jamais** sans cycle et décision dédiés |

Interv360 illustre une structure complète ; le pilote v2.0 **n'a pas à la reproduire** dès le départ.

## 7. Bootstrap lifecycle

| Step | Intent | Automation level | Morris gate |
|------|--------|------------------|-------------|
| 1. Intention projet | Formuler l'idée et l'opportunité | L2 | Morris valide l'intérêt |
| 2. Qualification initiale | Vérifier adéquation SFIA v2.0 | L2 | Morris valide le GO cadrage |
| 3. Choix du nom projet | Nommer le dossier `projects/<project-name>/` | L0–L2 | **Morris valide le nom** |
| 4. Vérification repo / conflits | Confirmer absence de collision, repo propre | L1 / L5 ciblé read-only | Morris si anomalie |
| 5. Création structure minimale | Créer `README.md` + `00-framing/` | L3 | Morris valide avant commit |
| 6. Rédaction README | Documenter identité et statut projet | L3 | Morris valide le contenu |
| 7. Rédaction project-framing | Cadrer intention, scope, risques | L3 | Morris valide le scope |
| 8. Validation Cursor result | GO/NO-GO sur le diff bootstrap | L2–L3 | **Morris — GO/NO-GO** |
| 9. PR readiness | Vérifier diff, garde-fous, rapport | L3–L4 | Morris valide la PR |
| 10. PR / merge manuel | Intégrer le bootstrap dans main | L0 | **Morris uniquement** |
| 11. Post-merge check | Confirmer merge, structure, guardrails | L4 / L5 ciblé | Morris si anomalie |
| 12. Capitalisation du bootstrap | Documenter apprentissages méthode | L2–L3 | Morris valide l'actif |

**Note :** les étapes 1–4 peuvent être conduites **avant** toute écriture repo — elles préparent le cycle d'exécution Cursor (étapes 5–8).

## 8. Automation boundaries

### Autorisé pendant un bootstrap réel

| Action | Niveau max | Condition |
|--------|------------|-----------|
| Créer `README.md` | L3 | Scope bootstrap validé |
| Créer `00-framing/2026-07-07-project-framing.md` | L3 | Scope bootstrap validé |
| Créer le dossier `00-framing/` | L3 | Avec fichier à l'intérieur |
| Proposer des extensions sans les créer | L2 | Rapport ou prompt uniquement |
| Générer un rapport structuré | L2–L3 | Sans modification repo si L2 |
| Commit local | L3 | **Uniquement si explicitement demandé** dans le prompt |

### Interdit pendant un bootstrap

| Action | Raison |
|--------|--------|
| Créer `app/` ou `backend/` | Hors scope bootstrap — cycle dédié requis |
| Créer tous les dossiers projet par anticipation | Violation doctrine bootstrap |
| Modifier Interv360 | Projet existant — chemins protégés |
| Modifier `.github/workflows/` | Chemin protégé |
| Modifier `tools/cmp-001/` | Chemin protégé |
| Créer fichiers Notion sync/export | Notion dormant |
| Lancer Notion ou CMP | Trajectoire pausée |
| Push / PR / merge sans validation | Gate Morris L0 |
| Supprimer ou déplacer des fichiers existants | Action destructive — GO explicite |
| Créer des dossiers vides | Violation doctrine bootstrap |

## 9. Required bootstrap inputs

| Input | Required? | Source | Notes |
|-------|-----------|--------|-------|
| Nom projet | **Oui** | Morris | kebab-case, voir §10 |
| Objectif | **Oui** | Morris / ChatGPT | Une phrase claire minimum |
| Problème à résoudre | **Oui** | Morris | Problem statement |
| Utilisateurs / cible | Recommandé | Morris | Peut être « à préciser » |
| Type de projet | Recommandé | Morris | Web, API, doc, lab, etc. |
| Niveau d'automatisation souhaité | Recommandé | Morris | L2–L3 typique au bootstrap |
| Périmètre initial | **Oui** | Morris | Ce que le bootstrap couvre |
| Hors périmètre | **Oui** | Morris | Ce qui est explicitement exclu |
| Contraintes | Optionnel | Morris | Temps, stack, dépendances |
| Risques connus | Recommandé | Morris / ChatGPT | Listés dans project-framing |
| Référence projet existant | Optionnel | Repo | Ex. Interv360 — lecture seule |
| Décision Morris GO bootstrap | **Oui** | Morris | Gate obligatoire avant exécution |

**Règle :** un bootstrap peut démarrer avec des informations **incomplètes**, mais les inconnues doivent être listées explicitement dans `2026-07-07-project-framing.md` (section *Open decisions* / *Décisions ouvertes*).

## 10. Project naming rules

| Règle | Détail |
|-------|--------|
| Format | **kebab-case** — minuscules, tirets |
| Longueur | Nom court et explicite |
| Caractères | Sans accent, sans espace |
| Unicité | Vérifier que `projects/<project-name>/` **n'existe pas** |
| Généricité | Éviter `test`, `demo`, `nouveau-projet`, `temp` |
| Cohérence SFIA | Le nom reflète l'intention, pas la stack technique seule |

**Exemples :**

| Nom | Verdict |
|-----|---------|
| `projects/sfia-v2-pilot/` | ✅ Bon |
| `projects/client-delivery-lab/` | ✅ Bon |
| `projects/test/` | ❌ Trop générique |
| `projects/nouveau projet/` | ❌ Espaces interdits |
| `projects/interv360/` | ❌ Existe déjà — collision |

## 11. Bootstrap document templates

### README.md minimal

Sections attendues (titres courts en anglais acceptables) :

| Section | Contenu attendu |
|---------|-----------------|
| **Project name** | Nom du projet et chemin repo |
| **Status** | Bootstrap / framing / active / paused |
| **Purpose** | Objectif en une à trois phrases |
| **Scope** | Périmètre initial du projet |
| **Current cycle** | Cycle SFIA en cours |
| **Key decisions** | Décisions déjà prises (ou « aucune ») |
| **Next steps** | Prochain cycle ou gate Morris |
| **SFIA references** | Liens vers docs v2.0, automation levels, méthode |

### 2026-07-07-project-framing.md minimal

| Section | Contenu attendu |
|---------|-----------------|
| **Intention** | Pourquoi ce projet existe |
| **Problem statement** | Problème concret à résoudre |
| **Target users** | Utilisateurs ou bénéficiaires |
| **Initial scope** | Inclus dans le bootstrap et premiers cycles |
| **Out of scope** | Explicitement exclu |
| **Assumptions** | Hypothèses de départ |
| **Open decisions** | Points non tranchés — **obligatoire si info incomplète** |
| **Risks** | Risques connus ou anticipés |
| **Automation level** | Niveau L autorisé pour ce projet (ex. L3) |
| **Next SFIA cycle** | Cycle suivant après bootstrap |

Les **descriptions et consignes** dans le standard restent en français ; le contenu projet peut utiliser des titres bilingues courts.

## 12. Guardrails

Checklist de garde-fous — **obligatoire** avant, pendant et après un bootstrap réel :

| # | Garde-fou | Contrôle |
|---|-----------|----------|
| 1 | Repo propre | `git status` — pas de modifications tracked inattendues |
| 2 | Branche dédiée | Branche bootstrap dédiée, pas de travail direct sur main |
| 3 | Pas de conflit projet | `projects/<project-name>/` inexistant |
| 4 | Structure minimale uniquement | README + 00-framing/2026-07-07-project-framing.md |
| 5 | Pas de dossiers vides | Chaque dossier contient un fichier |
| 6 | Pas de chemins protégés | app/, backend/, workflows/, cmp-001/, exports/ |
| 7 | Pas de Notion/CMP | Trajectoire dormant |
| 8 | Pas de push/PR/merge sans validation | Gate Morris L0 |
| 9 | Rapport obligatoire | Format L3+ (diff, guardrails, décision) |
| 10 | Validation Morris avant cycle suivant | GO explicite documenté |

**Stop conditions :** reprendre celles de `sfia-v2-automation-levels.md` §9 — arrêt immédiat si violation.

## 13. Bootstrap readiness checklist

Checklist **avant exécution du bootstrap réel** (cycle futur) :

| Check | Required status |
|-------|-----------------|
| Nom projet validé par Morris | ✅ Requis |
| Objectif projet formulé | ✅ Requis |
| Branche de bootstrap prévue | ✅ Requis |
| Structure minimale acceptée (§5) | ✅ Requis |
| Niveau d'automatisation autorisé (typ. L3) | ✅ Requis |
| Inputs manquants identifiés dans project-framing | ✅ Requis si incomplet |
| Chemins protégés hors scope confirmés | ✅ Requis |
| Gate Morris GO bootstrap confirmé | ✅ Requis |
| Document bootstrap standard mergé (ce document) | ✅ Requis |
| Choix projet pilote documenté | ✅ Requis — cycle suivant |

**Verdict readiness :** si un check requis est ❌, le bootstrap réel **ne démarre pas**.

## 14. Relationship with automation levels

Ce standard **applique** `sfia-v2-automation-levels.md` au contexte bootstrap :

| Niveau | Usage bootstrap |
|--------|-----------------|
| **L2** | Préparer cadrage, prompts, drafts README/framing, qualification |
| **L3** | Créer structure minimale, rédiger fichiers, commit local si autorisé |
| **L4** | Orchestrer repo check → exécution → validation → PR readiness (cycle futur) |
| **L5 ciblé** | Audits read-only — vérification collision nom, inventaire repo |
| **L5 global** | **Hors cible** — jamais au bootstrap |

| Étape bootstrap | Niveau max (now) | Gate Morris |
|-----------------|------------------|-------------|
| Intention / qualification | L2 | Oui |
| Vérification repo | L1 / L5 ciblé | Si anomalie |
| Création structure | L3 | Oui — avant commit |
| PR readiness | L3–L4 | Oui — avant PR |
| PR / merge | L0 | Morris uniquement |
| Post-merge | L4 / L5 ciblé | Si anomalie |

## 14bis. Qualification QA initiale

Dès le bootstrap, préparer la **testabilité** du projet — sans produire de tests.

| Action bootstrap | Détail |
|------------------|--------|
| **Qualifier testabilité** | Le besoin est-il vérifiable ? (gate QA-G0 pressenti) |
| **QA renforcée ?** | Projet pilote delivery, données persistantes, parcours critiques → noter besoin QA renforcée |
| **Ne pas produire de tests** | Bootstrap = structure et documentation ; tests au delivery INC-n |
| **Préparer testabilité** | Prévoir dossier futur `08-qa-test/` ; lier framing aux critères vérifiables |

**Référence :** `sfia-v2-delivery-qa-test-standard.md` — prompt QA-001.

## 15. Relationship with project lifecycle

Ce standard est la **première étape concrète** du cycle de vie projet décrit dans `sfia-v2-automation-levels.md` §12.

```
Intention → Qualification → [BOOTSTRAP] → Cadrage → Architecture fonctionnelle
→ UX/UI Markdown → Design Figma MVP → Backlog MVP → Architecture technique légère
→ Delivery incrémental → Validation → PR → Post-merge → Capitalisation
```

**Garde-fous design :** Git reste la source de vérité méthodologique ; Figma est un outil de validation visuelle, pas la source unique. Aucun code avant gate Morris design — voir `sfia-v2-design-figma-cycle-standard.md`.

| Principe | Application |
|----------|-------------|
| **Bootstrap = amorçage** | Crée la base repo-first pour la suite |
| **Pas de tout produire** | Architecture, design, delivery viennent après |
| **Trajectoire progressive** | Chaque extension de structure suit un cycle SFIA |
| **Gouvernance projet** | Les niveaux L s'appliquent à chaque étape post-bootstrap |
| **Apprentissage pilote** | Le bootstrap pilote alimente la capitalisation v2.0 |

Le bootstrap **ne remplace pas** le cadrage approfondi — il **initie** le projet avec le minimum pour décider et enchaîner.

## 16. Next recommended cycle

**Document proposé :**

`method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-05-sfia-v2-pilot-selection-decision.md`

**But :**

- choisir un **projet pilote neuf** adapté à SFIA v2.0 ;
- vérifier qu'il est adapté à la trajectoire automation + delivery ;
- éviter de **rouvrir Interv360** trop tôt ;
- décider si le **bootstrap réel** peut être lancé.

**Condition :** cycle **validé par Morris** avant exécution.

**Ordre validé SFIA v2.0 :**

1. Vision automation + delivery — ✅ PR #90
2. Automation levels L0–L5 — ✅ PR #91
3. **Project bootstrap standard — ce document**
4. Choix projet pilote — `2026-07-05-sfia-v2-pilot-selection-decision.md`
5. Bootstrap minimal du projet — exécution réelle sous `projects/`
6. Cycles projet semi-automatisés
7. Validation / PR readiness
8. Post-merge / capitalisation
9. Optimisation L4 puis L5 ciblé

---

## Decision (provisional)

**Décision proposée : SFIA V2.0 PROJECT BOOTSTRAP STANDARD DOCUMENTED — PENDING MORRIS VALIDATION**

| Critère | Statut |
|---------|--------|
| Aligné vision PR #90 | Oui |
| Aligné automation levels PR #91 | Oui |
| Structure minimale définie | Oui |
| Bootstrap réel différé | Oui — aucun dossier `projects/` créé |
| L5 global hors cible | Oui |
| v1.1 non modifié | Oui |
| Notion dormant | Oui |
| Document unique | Oui |

**Références :**

- `sfia-v2-automation-and-delivery-vision.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-design-figma-cycle-standard.md`
- `sfia-v2-delivery-qa-test-standard.md`
- `../../../core/sfia-cycle-routing-guide.md`
- `sfia-rules-and-guardrails.md`
- `../../../checklists/sfia-validation-checklist.md`
- `2026-07-04-sfia-notion-publication-track-pause-decision.md`
