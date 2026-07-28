# 05 — Pack d’arbitrage Morris (prochain pas T-A7)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **T-A7** | `NOT OPEN` |
| **A5.2 documentaire** | `CLOSED` |
| **F03 / F08–F13** | `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |

---

## T-A7-D01 — Ouvrir un cadrage complémentaire T-A7 ?

**Question :** Faut-il ouvrir un cycle de cadrage documentaire complémentaire (sans ouvrir T-A7 B/C/D) ?

| Option | Description |
|--------|-------------|
| .1 | Oui — cadrage complémentaire borné (legacy inventaire + stops A5.2) |
| .2 | Non — attendre d’abord une autre priorité (ex. B5 / HARD design) |
| .3 | Différer / autre |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (compatible Option C).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-D02 — Quel séquencement ?

**Question :** Quel séquencement adopter pour la trajectoire post-A5.2 ?

| Option | Description |
|--------|-------------|
| .1 | Option A — réserves critiques d’abord (HARD puis B5 · F09/F10) |
| .2 | Option B — legacy/cutover framing d’abord (F03/F11/F13) |
| .3 | Option C — séquencement par gates / vagues |
| .4 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.3**

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-D03 — Sujets ouverts pendant framing

**Question :** Quels sujets peuvent rester ouverts pendant un cadrage documentaire ?

| Option | Description |
|--------|-------------|
| .1 | Tous les sujets techniques listés (B5, HARD, R1, R-M01, legacy, persistence/IAM NOT SELECTED) — framing N pour toutes |
| .2 | Exiger fermeture HARD avant tout cadrage complémentaire |
| .3 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (aligné T-A7 doc 04 + A5.2).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-D04 — Bloqueurs delivery preparation

**Question :** Quels sujets bloquent la **delivery preparation** (niveau B) ?

| Option | Description |
|--------|-------------|
| .1 | Aucun HARD n’interdit la prep documentaire ; B5 peut rester OPEN (A52-D01) ; F08/F09/F10 restent NOT DECIDED jusqu’à bulletin |
| .2 | Exiger F08/F09/F10 DECIDED avant toute prep |
| .3 | Exiger fermeture B5 avant prep |
| .4 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (STOP = avant **delivery**, pas avant prep).

**Statut :** `MORRIS DECISION REQUIRED`

**Anti-claim :** choisir .1 ≠ autoriser delivery preparation maintenant. Prep reste `NOT AUTHORIZED` jusqu’à gate dédié.

---

## T-A7-D05 — Quand arbitrer F08/F09/F10 ?

**Question :** Faut-il arbitrer F08/F09/F10 avant le cadrage documentaire, ou avant delivery / real Critical ?

| Option | Description |
|--------|-------------|
| .1 | Avant tout cadrage complémentaire |
| .2 | Avant delivery preparation (B) |
| .3 | Avant delivery (C) / real Critical / cutover selon F (F08 delivery · F09 Critical/cutover · F10 persistence/IAM) |
| .4 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.3** (préparation documentaire A5.2 déjà faite ; consommation F = bulletin séparé).

**Statut :** `MORRIS DECISION REQUIRED`

---

## Bulletin Morris vierge

```
GO DECIDE NEXT T-A7 DECISION STEP — T-A7-D01=… — T-A7-D02=… — T-A7-D03=… — T-A7-D04=… — T-A7-D05=… — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

- Remplacer `…` par options choisies.
- Interdit : ouvrir T-A7 · delivery/cutover · fermeture implicite · consommation F automatique · COMPLETE.
- Statut actuel de ce GO : **NOT CONSUMED / NOT DRAFTED AS DECISION**.

---

## Synthèse recommandations (non décisionnelles)

| ID | Option recommandée | Label |
|----|--------------------|-------|
| T-A7-D01 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-D02 | .3 | `RECOMMENDED — NOT DECIDED` |
| T-A7-D03 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-D04 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-D05 | .3 | `RECOMMENDED — NOT DECIDED` |

## Garde-fous absolus

- A5.2 documentaire : `CLOSED`
- réserves techniques : `OPEN` / `OPEN HARD`
- T-A6 COMPLETE : `NOT DECLARED`
- Option A : `NOT COMPLETE`
- T-A7 : `NOT OPEN`
- delivery preparation / delivery / cutover : `NOT AUTHORIZED`
- F03/F08–F13 : `NOT DECIDED`
- persistence / IAM : `NOT SELECTED`
- RGPD production : `NOT VALIDATED`

Formulations interdites : « T-A7 ready to execute » · « T-A7 opened » · « delivery ready » · « cutover approved » · « reserves resolved » · « Option A complete ».
