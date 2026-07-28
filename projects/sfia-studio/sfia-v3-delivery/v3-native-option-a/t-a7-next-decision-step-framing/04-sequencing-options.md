# 04 — Options de séquencement (prochain pas)

| Champ | Valeur |
|-------|--------|
| **Nature** | options distinctes · **aucune présélection** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` uniquement |
| **T-A7** | `NOT OPEN` |

## Option A — Réserves critiques d’abord

**Idée :** traiter d’abord R-T-A3-1 / R-T-A3-2 (autorité + atomicité Decision), puis B5 ; arbitrer F09/F10 ; ensuite élargir le cadrage legacy/cutover.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | aligne A52-D02/D03/D04 ; réduit risque d’ouvrir un framing cutover avant stops Critical |
| Risques | retarde inventaire MethodMode/`method/**`/OPS1 ; peut surinvestir design API trop tôt |
| Dette | design API/atomicité sans SELECTED techno |
| Décisions requises | F09/F10 · évent. F08 partiel · gates design |
| Laissés ouverts | legacy P03–P11 · OPS1 · UX |
| Stops | STOP BEFORE DELIVERY (B5) · `.1` avant real Critical |
| Réversibilité | haute (documentaire) |
| Complexité | moyenne-haute |

**Challenge :** utile maintenant ? **oui** si Morris priorise le chemin Critical. Plus simple ? Option C (gates) peut être plus progressive. Respecte STOP BEFORE DELIVERY / `.1` ? **oui**.

## Option B — Legacy / cutover d’abord en framing

**Idée :** cadrer dette legacy, MethodMode, `method/**`, OPS1 et rollback ; maintenir les réserves techniques comme **stops avant delivery** (pas comme prérequis de framing).

| Critère | Évaluation |
|---------|------------|
| Bénéfices | complète le pack T-A7 (#280) côté P03–P11/P24 ; clarifie F03/F11/F13 |
| Risques | illusion de « T-A7 ready » ; sous-estimer HARD Critical |
| Dette | inventaires sans preuve CI boundary |
| Décisions requises | F03 · F11 · F13 candidates (pas auto) |
| Laissés ouverts | HARD · B5 · persistence/IAM |
| Stops | A52-D01 · A52-D03 · HARD · F08/F09 |
| Réversibilité | haute |
| Complexité | moyenne |

**Challenge :** réduit-il le risque Critical ? **peu** à court terme. Compatible A5.2 ? **oui** si stops explicites. Risque de confusion framing/open ? **élevé** — anti-claims obligatoires.

## Option C — Séquencement par gates (recommandée)

**Idée :** framing global **borné** (read-only), puis vagues Morris distinctes :

1. legacy et scope (F03/F11/F13 inventaire) ;
2. autorité (F09 · trajectoire `.1`) ;
3. atomicité / persistence (F08/F10 · A52-D02/D04) ;
4. delivery readiness (F08 · B5 STOP) ;
5. cutover (niveau D · GO dédié).

| Critère | Évaluation |
|---------|------------|
| Bénéfices | préserve niveaux A–D ; évite big-bang ; compatible A5.2 |
| Risques | durée ; fatigue de gates ; sous-spécifier une vague |
| Dette | packs documentaires successifs |
| Décisions requises | une vague à la fois · F non consommées d’avance |
| Laissés ouverts | tout hors vague active |
| Stops | chaque vague réaffirme NOT OPEN / NOT AUTHORIZED |
| Réversibilité | très haute |
| Complexité | moyenne (orchestration) |

**Challenge :** plus simple qu’Option A seule ? **oui** opérationnellement. Répétable ? **oui** (pattern gates). Préparable sans ouvrir T-A7 ? **oui** — ce pack en est la preuve.

## Recommandation Cursor/ChatGPT

`RECOMMENDED — NOT DECIDED` → **Option C** (séquencement par gates), avec :

- première vague candidate = **cadrage complémentaire borné** (inventaire legacy + rappel stops A5.2) **sans** ouvrir T-A7 niveau B/C/D ;
- aucune consommation F automatique ;
- F08/F09/F10 **avant delivery / real Critical**, pas nécessairement avant tout cadrage documentaire.

**Aucune option n’est adoptée tant que Morris n’a pas tranché (T-A7-D02).**
