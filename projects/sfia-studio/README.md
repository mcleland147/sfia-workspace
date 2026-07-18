# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `detailed-framing-in-progress` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé produit (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL projet |
| **Cycle projet** | 1 — Cadrage (sous-phase : **cadrage détaillé produit**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/sfia-studio-pre-framing` |
| **Chemin** | `projects/sfia-studio/` |

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). Aucune décision Morris supplémentaire inventée. La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro

```text
Pré-cadrage → cadrage détaillé (ce cycle)
  → conception / architecture / UX (cycles futurs)
  → POC de faisabilité → décision de poursuite
  → MVP → delivery incrémental → industrialisation plateforme
```

Aucune stack / architecture validée. Aucun cycle suivant démarré.

---

## 3. Navigation

### Pré-cadrage

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (en cours)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

---

## 4. Justification Critical

Projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation ; risques de sur-cadrage et seconde vérité.

N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/push/PR projet.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git = source de vérité | Durable ; état opérationnel dérivé / reconstructible |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |

---

## 6. Gates G1–G7

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 (pas de D-VAL inventé) |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. **Merge non autorisé.**

---

## 7. Décisions D-VAL-1 à D-VAL-10

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** | G7 |

### En attente / non pris

| Décision | Statut |
|----------|--------|
| Merge de la PR | **INTERDIT** à ce stade |
| Prochain cycle (conception / archi / UX…) | **Non sélectionné** |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT de la draft PR + handoff.
2. Morris : passage ready-for-review / merge (décisions distinctes — **merge non autorisé ici**).
3. Sélection du prochain cycle (non lancée).

**Verdict documentaire :** `SFIA STUDIO DOCUMENTATION READY FOR COMMIT PUSH AND DRAFT PR — MERGE FORBIDDEN`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Documents projet | `projects/sfia-studio/` (locaux) |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné |

---

*SFIA Studio — cadrage détaillé validé — G7 commit/push/draft PR autorisés — merge interdit — Option C — Morris décide.*
