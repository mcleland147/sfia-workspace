# 04 — Options de séquencement (prochain pas)

| Champ | Valeur |
|-------|--------|
| **Gate décisions** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) |
| **Options A / B** | `NOT SELECTED` |
| **Vagues Option C** | **aucune ouverte** |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |

## Option A — Réserves critiques d’abord

**Statut :** `NOT SELECTED`

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

**Challenge (historique) :** utile si priorité Critical ; Option C jugée plus progressive.

## Option B — Legacy / cutover d’abord en framing

**Statut :** `NOT SELECTED`

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

**Challenge (historique) :** réduction risque Critical faible à court terme ; anti-claims obligatoires.

## Option C — Séquencement par gates — **ADOPTÉE**

**Statut :** `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3)

**Idée (trajectoire adoptée) :** framing global **borné** (read-only), puis vagues Morris **distinctes** et **successives** — chacune ouverte uniquement par gate dédié :

1. legacy et périmètre (F03/F11/F13 inventaire) ;
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

### Conséquences immédiates vs futures

| Immédiat (ce cycle) | Futur (gates séparés) |
|---------------------|------------------------|
| trajectoire Option C versionnée | vague 1+ = GO dédiés |
| aucune vague ouverte | cadrage complémentaire borné (T-A7-D01=.1) |
| T-A7 `NOT OPEN` | niveaux B/C/D restent à autoriser séparément |
| F contenu `NOT DECIDED` | F08/F09/F10 selon calendrier T-A7-D05 |

**Anti-claim :** adoption Option C ≠ lancement d’exécution ≠ ouverture vague 1 ≠ delivery preparation.

## Synthèse sélection

| Option | Statut |
|--------|--------|
| A | `NOT SELECTED` |
| B | `NOT SELECTED` |
| C | `DECIDED — ADOPTED BY MORRIS` |

**Trajectoire adoptée · exécution non autorisée.**
