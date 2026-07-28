# T-A7 — Legacy Cutover Framing (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-27 22:39:24 CEST (+0200) — Europe/Paris |
| **Cycle** | 1 — Cadrage (+2 Conception fonctionnelle · 3 Architecture fonctionnelle · 6 Architecture technique · 9 QA · 10 Sécurité/RSSI · 12 RUN readiness · 15 Capitalisation) |
| **Profil** | Critical |
| **Typologie** | CADRAGE / T-A7 / CUTOVER / COMPLETION-CRITERIA / GOVERNANCE / DOCUMENTATION |
| **Gate consommé** | `GO FRAME T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETE CRITERIA — SFIA STUDIO V3-NATIVE — NO DELIVERY OR REAL EXECUTION` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Base SHA** | `c472eb412f3ade3e94fee9201042794fee502d8f` (`origin/main`) |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
| **Upstream** | **aucun** |
| **Pack path** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
| **Statut pack** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **T-A7** | **NOT OPEN** |
| **T-A7 delivery** | **NOT AUTHORIZED** |
| **Cutover** | **NOT AUTHORIZED** |
| **T-A6 COMPLETE** | **NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |
| **Real execution** | **NOT AUTHORIZED** |
| **Verdict** | `SFIA STUDIO T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETION CRITERIA FRAMED — DOCUMENTARY PACK CREATED LOCALLY — T-A7 FRAMING DEFINED — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — MORRIS DECISIONS REQUIRED — OPTION A NOT COMPLETE — T-A7 NOT OPEN` |

---

## Objectif

Définir le cadrage documentaire candidat de T-A7 et les matrices affirmatives de complétude T-A6 / Option A, sans ouvrir le delivery, sans cutover et sans fermer Option A.

## Définition T-A7 (candidate)

`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`

Source AT : `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` · D-T-A6-10 BOUNDARY APPROVED.

## Niveaux T-A7

| Niveau | Contenu | Autorisé dans ce cycle |
|--------|---------|------------------------|
| **A. Framing** | définition · préconditions · critères · décisions · aucune modification runtime | **OUI — ce pack** |
| **B. Delivery preparation** | backlog · AT détaillée · plan migration · tests candidats · aucun cutover | NON |
| **C. Delivery** | modifications code/frontières · hold flags · tests · migration progressive | NON |
| **D. Cutover** | retrait/désactivation effective · preuves runtime · rollback · GO Morris dédié | NON |

## Livrables

1. [README.md](./README.md) — ce fichier
2. [01-framing-and-scope.md](./01-framing-and-scope.md)
3. [02-t-a7-cutover-preconditions.md](./02-t-a7-cutover-preconditions.md)
4. [03-t-a6-and-option-a-completion-criteria.md](./03-t-a6-and-option-a-completion-criteria.md)
5. [04-reservations-risks-and-stop-conditions.md](./04-reservations-risks-and-stop-conditions.md)
6. [05-morris-decision-pack.md](./05-morris-decision-pack.md)

## Décisions Morris attendues

D-T-A7-F01…F14 — toutes **`NOT DECIDED`** — voir [05-morris-decision-pack.md](./05-morris-decision-pack.md).

## Gate suivant candidat

```
GO RE-REVIEW T-A7 FRAMING PACK AFTER CORRECTIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER
```

**NOT CONSUMED.**

> Gates déjà consommés (historique) : `GO FRAME…` · `GO REVIEW…` · `GO CORRECT…` — **ne plus** les présenter comme prochains gates.

## Anti-claims

- pack créé ≠ framing validé
- framing défini ≠ T-A7 OPEN
- T-A7 OPEN ultérieurement ≠ delivery autorisé
- delivery autorisé ≠ cutover autorisé
- critères proposés ≠ critères décidés
- critères techniquement satisfaits ≠ Option A COMPLETE
- product complete ≠ production ready
- intégration T-A0–T-A6 ≠ cutover readiness
- commit local ≠ publication
- assessment ≠ décision Morris
- aucune réserve fermée · aucun runtime/modeled/workflow modifié · aucun push projet
