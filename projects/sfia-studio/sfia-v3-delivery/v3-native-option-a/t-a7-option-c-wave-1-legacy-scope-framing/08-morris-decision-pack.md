# 08 — Morris decision pack (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
| **Gate d’enregistrement** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — … — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 18:50:00 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Vague 1 technique** | **non ouverte** |
| **F03 / F11 / F13 (contenu)** | `NOT DECIDED` |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |

---

## T-A7-W1-D01 — Niveau de cadrage suite

**Question :** Quel niveau retenir pour la suite de la vague 1 ?

| Option | Description |
|--------|-------------|
| .1 | Inventaire seulement (W1-A) — vérité figée |
| .2 | Inventaire + plan de retrait candidat (W1-B) |
| .3 | Inventaire + isolation préalable candidate (W1-C) |
| .4 | Autre / différer |

**Choix Morris :** `.2` — `W1-B — INVENTORY PLUS CANDIDATE REMOVAL PLAN`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet autorisé :**

- préparer un **plan documentaire candidat** de retrait et d’isolation ;
- définir séquences, validations, rollback et gates (doc only).

**Anti-claims :**

- W1-B adopté ≠ préparation technique autorisée ;
- plan candidat ≠ retrait autorisé.

---

## T-A7-W1-D02 — Blocs legacy confirmés actifs

**Question :** Quels blocs sont confirmés **actifs** (évidence) ?

**Choix Morris :** confirmer comme actifs :

1. MethodMode dans D1 ;
2. le trio exact référencé dans `SFIA_CANONICAL_CORE_PATHS` ;
3. les consommateurs de `method/**` via prompts · loader canonique · OPS1 path-policy / allowlist.

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Anti-claims :**

- actif confirmé ≠ composant à conserver définitivement ;
- actif confirmé ≠ architecture cible.

---

## T-A7-W1-D03 — Candidats au retrait futur

**Question :** Quels blocs sont **candidats** au retrait futur (pas maintenant) ?

**Choix Morris :** classer comme candidats au retrait futur :

1. `actionSelectMethodMode` orpheline ;
2. MethodModeGate et route qualifiés `DOCUMENTATION ONLY` ;
3. archives et duplications non canoniques identifiées.

**Statut :** `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES`

**Anti-claims :**

- candidat au retrait ≠ suppression décidée ;
- aucune suppression ou modification n’est autorisée dans ce cycle d’enregistrement ;
- une preuve complémentaire reste obligatoire avant retrait effectif.

---

## T-A7-W1-D04 — Traitement OPS1

**Question :** Quel traitement pour OPS1 ?

**Choix Morris :** `ISOLATE OPS1 BEFORE ANY REMOVAL`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet :**

- toute trajectoire future de retrait doit d’abord définir une frontière d’isolation OPS1 ;
- conserver explicitement path-policy ≠ IAM ;
- tenir compte du couplage CT/D1.

**Anti-claims :**

- isolation décidée comme trajectoire ≠ isolation implémentée ;
- aucune modification OPS1 autorisée maintenant.

---

## T-A7-W1-D05 — Quand arbitrer F03, F11, F13 ?

**Question :** Quand consommer le **contenu** de F03 / F11 / F13 ?

**Choix Morris :** `DECIDE F03 F11 AND F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet :**

- F03, F11 et F13 deviennent des **gates obligatoires** avant toute préparation technique de retrait ;
- leur **contenu** reste à arbitrer séparément.

**Anti-claims :**

- calendrier / obligation d’arbitrage décidé ≠ contenu F décidé ;
- F03 / F11 / F13 restent `NOT DECIDED` (contenu).

---

## Bulletin Morris consommé (enregistrement)

```
GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — W1-D02=CONFIRM ACTIVE LEGACY BLOCKS — W1-D03=CONFIRM FUTURE REMOVAL CANDIDATES WITHOUT AUTHORIZING REMOVAL — W1-D04=ISOLATE OPS1 BEFORE ANY REMOVAL — W1-D05=DECIDE F03 F11 F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `CONSUMED — DECISIONS RECORDED` (enregistrement documentaire uniquement).

## Synthèse décisions

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-W1-D01 | W1-B (`.2`) | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D02 | actifs D1 MethodMode + trio canonical + consumers method | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D03 | orphan select · MethodModeGate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D05 | decide F03/F11/F13 before technical removal prep | `DECIDED — ADOPTED BY MORRIS` |
| W1-B | adopté via D01 | `DECIDED — ADOPTED BY MORRIS` |

## Séquencement futur (documentaire — non exécuté)

1. Plan candidat W1-B (séquences / validations / rollback / gates) — **doc only** · gate Morris distinct.
2. Isolation OPS1 (frontière) **avant** tout retrait — D04 · **pas** implémentée ici.
3. Arbitrage **contenu** F03 / F11 / F13 **avant** toute préparation technique de retrait — D05 · contenu encore `NOT DECIDED`.
4. Preuves complémentaires avant retrait effectif des candidats D03.
5. Aucune ouverture T-A7 · aucune delivery preparation / delivery / cutover.

## Garde-fous

- Option C adoptée · vague 1 = doc only (inventaire + décisions enregistrées)
- T-A7 `NOT OPEN` · delivery/cutover `NOT AUTHORIZED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- F03/F11/F13 contenu `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
