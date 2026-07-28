# T-A7 — Legacy Cutover Framing (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau (création)** | 2026-07-27 22:39:24 CEST (+0200) — Europe/Paris |
| **Date/heure/fuseau (décisions Morris)** | 2026-07-28 07:14:00 CEST (+0200) — Europe/Paris |
| **Cycle** | 15 — Capitalisation / enregistrement décisionnel (+1 · 3 · 6 · 9 · 13) |
| **Profil** | Critical |
| **Typologie** | DECISION-RECORD / GOVERNANCE / T-A7 / COMPLETION-DEFINITIONS / DOCUMENTATION |
| **Gate consommé (enregistrement)** | `GO RECORD MORRIS DECISIONS — A1=A1.1 — A2=A2.1 — A3=A3.2 — A4=A4.1 — A5=A5.1 — RESERVE=THEN A5.2 VIA DISTINCT GATE — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Base SHA** | `c472eb412f3ade3e94fee9201042794fee502d8f` (`origin/main`) |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
| **Upstream** | **aucun** |
| **Pack path** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
| **Statut pack** | **FRAMING VALIDATED — MORRIS DECISIONS RECORDED** |
| **Framing T-A7** | **VALIDATED** (A1.1) |
| **Modèle A/B/C/D** | **ADOPTED** (A1.1) |
| **T-A7** | **NOT OPEN** |
| **T-A7 delivery preparation** | **NOT AUTHORIZED** |
| **T-A7 delivery** | **NOT AUTHORIZED** |
| **Cutover** | **NOT AUTHORIZED** |
| **T-A6 COMPLETE definition** | **DEFINED** (A4.1) — **NOT DECLARED** |
| **Option A product complete definition** | **DEFINED** (A3.2) — **NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |
| **Production readiness** | **NOT DECLARED** (séparée — A2.1) |
| **Real execution** | **NOT AUTHORIZED** |
| **Prochain cycle** | **DOCUMENTARY PR READINESS** (A5.1) |
| **Cycle suivant** | **A5.2 VIA DISTINCT MORRIS GATE** |
| **Verdict** | `SFIA STUDIO T-A7 FRAMING AND OPTION A COMPLETION DEFINITIONS RECORDED — MORRIS A1.1 A2.1 A3.2 A4.1 A5.1 DECISIONS FORMALIZED — F01 F02 F04 F05 F06 F07 F14 DECIDED — F03 AND F08 TO F13 REMAIN NOT DECIDED — FRAMING VALIDATED — COMPLETION DEFINITIONS ADOPTED BUT NOT DECLARED SATISFIED — NEXT STEP DOCUMENTARY PR READINESS THEN A5.2 VIA DISTINCT MORRIS GATE — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — OPTION A NOT COMPLETE` |

---

## Objectif

Cadrage documentaire T-A7 et définitions de complétude T-A6 / Option A **validés par Morris** (A1–A5), sans ouvrir T-A7, sans delivery, sans cutover, sans déclarer les critères satisfaits.

## Définition T-A7 (normative)

`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`

Source AT : `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` · D-T-A6-10 BOUNDARY APPROVED.

## Niveaux T-A7 — **ADOPTED** (A1.1 / F01 · F02)

| Niveau | Contenu | Autorisé maintenant |
|--------|---------|---------------------|
| **A. Framing** | définition · préconditions · critères · décisions · aucune modification runtime | **VALIDATED** |
| **B. Delivery preparation** | backlog · AT détaillée · plan migration · tests candidats · aucun cutover | **NOT AUTHORIZED** |
| **C. Delivery** | modifications code/frontières · hold flags · tests · migration progressive | **NOT AUTHORIZED** |
| **D. Cutover** | retrait/désactivation effective · preuves runtime · rollback · GO Morris dédié | **NOT AUTHORIZED** |

Chaque niveau exige un **gate Morris distinct**. Aucune transition automatique.

## Décisions Morris enregistrées

| Arbitrage | Choix | Décisions F* | Statut |
|-----------|-------|--------------|--------|
| A1 | **A1.1** | F01 · F02 | `DECIDED — ACCEPTED BY MORRIS` |
| A2 | **A2.1** | F05 · F07 | `DECIDED — ADOPTED BY MORRIS` |
| A3 | **A3.2** | F06 | `DECIDED — ADOPTED BY MORRIS` |
| A4 | **A4.1** | F04 | `DECIDED — ADOPTED BY MORRIS` |
| A5 | **A5.1** | F14 | `DECIDED — ADOPTED BY MORRIS` |
| Réserve | **THEN A5.2 VIA DISTINCT GATE** | — | trajectoire · **non exécutée** |

**Toujours `NOT DECIDED` :** F03 · F08 · F09 · F10 · F11 · F12 · F13.

Détail : [05-morris-decision-pack.md](./05-morris-decision-pack.md).

## Taxonomie de complétude — **ADOPTED** (A2.1)

1. foundation complete
2. integrated runtime complete
3. product complete
4. real-execution ready
5. production ready
6. legacy cutover complete

**Norme :** `product complete ≠ production ready`.

## Définitions retenues (≠ déclarations de satisfaction)

- **T-A6 COMPLETE** (A4.1) : périmètre mémoire borné — D1–D5 + docs/CI + réserves fermées/acceptées/bornées + T6-C15 GO Morris dédié ultérieur — **NOT DECLARED**.
- **Option A product complete** (A3.2) : foundation + integrated runtime + surface API/UI minimale utilisable — cutover et production **distincts** — **NOT DECLARED** · Option A **NOT COMPLETE**.

## Livrables

1. [README.md](./README.md) — ce fichier
2. [01-framing-and-scope.md](./01-framing-and-scope.md)
3. [02-t-a7-cutover-preconditions.md](./02-t-a7-cutover-preconditions.md)
4. [03-t-a6-and-option-a-completion-criteria.md](./03-t-a6-and-option-a-completion-criteria.md)
5. [04-reservations-risks-and-stop-conditions.md](./04-reservations-risks-and-stop-conditions.md)
6. [05-morris-decision-pack.md](./05-morris-decision-pack.md)

## Gate suivant candidat

```
GO REVIEW T-A7 MORRIS DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER
```

**NOT CONSUMED.**

> Après PR readiness documentaire : **A5.2 via gate Morris distinct** (réserves / autorité / atomicité) — **non exécuté** ici.
> Historique : `GO FRAME…` · `GO REVIEW…` · `GO CORRECT…` · `GO RE-REVIEW…` · `GO DECIDE…` · `GO RECORD…`.

## Anti-claims

- décision enregistrée ≠ critères satisfaits
- framing validated ≠ T-A7 OPEN
- T-A7 OPEN ≠ delivery
- delivery ≠ cutover
- T-A6 COMPLETE definition ≠ T-A6 COMPLETE declaration
- Option A product complete definition ≠ Option A COMPLETE
- A5.1 ≠ PR autorisée / mergée
- A5.2 trajectory ≠ A5.2 executed
- commit local ≠ publication
- aucune réserve fermée · aucun runtime/modeled/workflow modifié · aucun push projet
