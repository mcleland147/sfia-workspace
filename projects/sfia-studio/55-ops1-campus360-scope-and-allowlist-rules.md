# SFIA Studio — Campus360 : périmètre, cartographie et règles d’allowlist OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `55-ops1-campus360-scope-and-allowlist-rules.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-scope-validated-with-amendments` — **validé avec amendements** (2026-07-20 18:34:47 CEST) |
| **Gate** | `G-OPS1-SCENARIO-VAL` — **consommé** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage** | 2026-07-20 18:08:37 CEST |
| **Autorité** | Morris (L0) |

> Cartographie **repo-informed** et règles d’allowlist **validées avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
> **Campus360 éligible ≠ autorisation globale.**
> FD-CAND-20 / FD-CAND-26 **levées** pour le périmètre OPS1 / Campus360 OPS1 ; `03` **protégé par défaut**.

---

## 1. Ancrage projet pilote

| Élément | Valeur |
|---------|--------|
| Projet pilote OPS1 | **Campus360 exclusivement** |
| Chemin racine | `projects/campus360/` |
| Nature | Projet produit fictif étalon SFIA v2.6 (pré-cadrage clôturé) |
| Rôle pour OPS1 | Contexte métier/documentaire du pilote d’action |
| Non-rôle | OPS1 n’est **pas** une feature produit Campus360 |
| Repo | `mcleland147/sfia-workspace` |

---

## 2. Inventaire repo-informed (état constaté)

Recherche effectuée sur le repository (branche de conception scénario, base `5a595b0…`).

### 2.1 Arborescence réelle

```text
projects/campus360/
├── README.md
├── 01-opportunity-and-vision.md
├── 02-sfia-cycle-coverage-hypothesis.md
└── 03-pre-framing-decision-pack.md
```

**Aucun** autre fichier sous `projects/campus360/` au moment de la cartographie.
**Aucun** code, test, lockfile, secret ou configuration sous ce chemin.

### 2.2 Autres projets workspace (hors pilote d’action)

| Chemin | Statut OPS1 |
|--------|-------------|
| `projects/sfia-studio/**` | Hors allowlist d’action OPS1 (sauf lecture de contrats SFIA Studio hors exécution scénario) |
| `projects/chantiers360-v2/**` | **Exclu** du pilote |
| `projects/interv360/**` | **Exclu** |
| `projects/task-tracker/**` | **Exclu** |
| `method/**`, `prompts/**` | **Exclu** |
| `projects/sfia-studio/app/**`, `harness/**` | **Exclu** |
| `.github/**`, lockfiles, secrets | **Exclu** |

---

## 3. Distinction périmètre éligible / allowlist

| Notion | Définition |
|--------|------------|
| **Périmètre éligible** | Ensemble des Markdown documentaires **non protégés** sous `projects/campus360/` pouvant *être déclarés* dans une action |
| **Allowlist d’une action** | Liste **explicite, exhaustive, 1..n** des chemins réellement autorisés (reads / creates / modifies) pour **cette** action, présentée **avant** le gate et gelée au GO |

Règles :

- Le rattachement à Campus360 **n’autorise aucun fichier** implicitement.
- Hors allowlist = **interdit** (fail-closed), même si éligible.
- Pas de wildcard implicite non explicitée dans le contrat.
- Pas d’accès au dépôt entier.
- Multi-fichiers **uniquement si nécessaire** au besoin.
- Extension après GO = **interdite** ; correction + **nouveau gate**.

---

## 4. Cartographie fichier par fichier

| Chemin | Nature | Catégorie candidate | Risque | Autorité | Éligibilité | Protection / contraintes |
|--------|--------|---------------------|--------|----------|-------------|--------------------------|
| `projects/campus360/README.md` | Identité, navigation, gates, séparation | **Consultable** · **Modifiable** (proportionné) | Moyen (identité projet) | Morris via gate action | Oui si justifié | Ne pas altérer la séparation méthode/projet ; pas de secrets |
| `projects/campus360/01-opportunity-and-vision.md` | Vision / opportunité pré-cadrage | **Consultable** · **Modifiable** | Faible–moyen | Morris via gate | Oui | Diff vérifiable ; pas de PII |
| `projects/campus360/02-sfia-cycle-coverage-hypothesis.md` | Hypothèse couverture cycles | **Consultable** · **Modifiable** | Faible | Morris via gate | Oui | Ne pas promouvoir en doctrine méthode |
| `projects/campus360/03-pre-framing-decision-pack.md` | Decision pack clôture pré-cadrage | **Consultable** (si `allowedReads`) · **Protégé par défaut** (hors `allowedModifies` nominal) | Élevé (décisions Morris historisées) | Gate Morris **distinct** + cycle adapté + allowlist dédiée | Éligible en lecture ; **non** modifiable dans le scénario nominal OPS1 | Aucune modification de `03` dans le scénario nominal ; future modification seulement avec justification explicite |
| Nouveau `projects/campus360/NN-*.md` | Prochain document documentaire | **Créable** (candidat) | Moyen | Morris via gate | Oui si naming cohérent | Pas de code ; Markdown seul ; justification besoin |
| Tout hors `projects/campus360/` | — | **Exclu** | — | — | Non | Denylist structurelle |
| Secrets, `.env`, clés, PII | — | **Exclu / protégé** | Critique | — | Non | Absents aujourd’hui ; restent interdits |
| `method/**`, `prompts/**`, `app/**`, `harness/**`, `.github/**` | Méthode / code / CI | **Exclu** | Critique | Cycle distinct | Non | Hors OPS1 action |

### 4.1 Synthèse des catégories

| Catégorie | Contenu constaté / candidat |
|-----------|-----------------------------|
| **Consultable** | Les 4 fichiers existants **uniquement s’ils figurent dans `allowedReads`** |
| **Créable** | Nouveaux `NN-*.md` sous `projects/campus360/` **uniquement s’ils figurent dans `allowedCreates`** |
| **Modifiable** | `README`, `01`, `02` **uniquement s’ils figurent dans `allowedModifies`** |
| **Protégée par défaut** | `03-pre-framing-decision-pack.md` — **hors** modifies du scénario nominal OPS1 |
| **Exclue** | Hors `projects/campus360/` ; code ; méthode ; prompts ; secrets ; autres projets |
| **Absente / à confirmer** | Docs cadrage détaillé `04+`, code Campus360, assets — **non présents** ; cartographie à réévaluer si le repo évolue |

### 4.2 Conflits possibles

| Zone | Conflit | Règle |
|------|---------|-------|
| Méthode SFIA | Apprentissage Campus360 ≠ standard méthode | CAPA + GO requis |
| Prompts | Hors allowlist | Cycle distinct |
| Code Studio | `app/**` / `harness/**` | Exclu de l’action OPS1 |
| Configuration / CI | `.github/**`, lockfiles | Exclu |
| Decision pack `03` | Réécriture des gates validés | Vigilance ; motif Morris obligatoire |

---

## 5. Règles d’allowlist opératoires (candidates)

1. **Exhaustivité** — chaque chemin read/create/modify est listé avant le gate.
2. **Distinction des rôles** — `allowedReads` / `allowedCreates` / `allowedModifies` séparés si besoin.
3. **Justification** — chaque fichier porte une raison liée à l’objectif.
4. **Proportion** — multi-fichiers seulement si le besoin le justifie.
5. **Interdits explicites** — `forbiddenPaths` + denylist structurelle.
6. **Ancrage** — `baseRef`, `headSha`, `branchName`, `contractHash` au GO.
7. **Gel** — allowlist immuable après GO.
8. **Extension post-GO** — refus ; nouveau contrat + nouveau gate.
9. **Rapport** — couverture de chaque fichier ; diff consolidé + par fichier.
10. **Default deny** — non listé = interdit.
11. **Pas de wildcard** non explicitée (`projects/campus360/**` seul = insuffisant sauf décision Morris contraire explicite listant la sémantique).
12. **Pas de secrets / lockfiles / code / méthode / prompts / config** sans cycle distinct.

---

## 6. Convention de branche candidate

### 6.1 Proposition à challenger

```text
scenario/campus360-<action-slug>-<session-id-court>
```

Exemple illustratif (non exécuté) : `scenario/campus360-clarify-vision-a1b2`

### 6.2 Règles candidates

| Règle | Proposition |
|-------|-------------|
| Base | Création depuis `origin/main` (ou base **explicitement** autorisée dans le contrat) |
| Localité | **Locale par défaut** ; **pas de push automatique** |
| Unicité | Un `branchName` distinct par action / session courte |
| Longueur | ≤ 80 caractères recommandés |
| Caractères | `[a-z0-9-]` après le préfixe ; slug ASCII ; pas d’espaces |
| Collision | Si branche existe déjà → STOP / nouveau nom / nouveau gate |
| Branche sale | Working tree dirty hors allowlist → refus démarrage |
| Reprise session | Même session sans nouvel actionId → pas de réutilisation opaque d’une branche d’une autre action |
| Cleanup | Après clôture / décision Morris ; **non automatique** dans OPS1 |
| Nouveau gate | Changement de base, de HEAD ancré, d’allowlist ou de branche ⇒ nouveau contrat + gate |

**Statut :** convention **validée avec amendements** (`OPS1-SCENARIO-CAND-07` — `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST`).

---

## 7. Lien avec les réserves FD-CAND-20 / 26

| Réserve | Apport de ce document | Statut après validation |
|---------|----------------------|-------------------------|
| FD-CAND-20 | 1..n explicite ; justification ; pas de wildcard ; reads/creates/modifies ; gel post-GO ; rapport consolidé + par fichier | `FD-CAND-20 — LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
| FD-CAND-26 | Inventaire réel ; exclusions ; `03` protégé par défaut ; Campus360 exclusif | `FD-CAND-26 — LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |

### 7.1 Protection de `03` (amendement)

- Aucune modification de `projects/campus360/03-pre-framing-decision-pack.md` dans le **scénario nominal** OPS1.
- Lecture possible uniquement si listé dans `allowedReads`.
- Modification future uniquement avec : justification explicite · cycle documentaire adapté · allowlist dédiée · **gate Morris distinct**.

---

## 8. Options si structure future change

Si de nouveaux fichiers apparaissent sous `projects/campus360/` :

1. Mettre à jour la cartographie (cycle doc ou amendement sous GO).
2. Ne **pas** les considérer allowlistés par défaut.
3. Réévaluer éligibilité (critères §11.4 du doc [`45`](./45-ops1-functional-design.md)).

Si Campus360 disparaissait ou devenait ambigu : **STOP — CAMPUS360 SCOPE REQUIRES MORRIS DECISION**. *Non applicable* : structure claire et présente.

---

## 9. Anti-claims

Pas d’autorisation globale Campus360 · pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE · pas d’ouverture tech-arch / backlog / code.

---

## 10. Verdict documentaire

`scenario-scope-validated-with-amendments`

`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`

Cartographie repo-informed validée pour l’état actuel (4 fichiers). Allowlist et branche **validées avec amendements**. `03` protégé par défaut.
