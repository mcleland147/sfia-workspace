# 05 — Pack d’arbitrage Morris (prochain pas T-A7)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `MORRIS T-A7-D01…D05 RECORDED` |
| **Gate consommé** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **A5.2 documentaire** | `CLOSED` |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` — aucune vague ouverte |
| **F03 / F08–F13 contenu** | `NOT DECIDED` |
| **F08/F09/F10 calendrier** | adopté (D05=.3) · contenu `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |

---

## T-A7-D01 — Ouvrir un cadrage complémentaire T-A7 ?

**Question :** Faut-il ouvrir un cycle de cadrage documentaire complémentaire (sans ouvrir T-A7 B/C/D) ?

| Option | Description |
|--------|-------------|
| .1 | Oui — cadrage complémentaire borné (legacy inventaire + stops A5.2) |
| .2 | Non — attendre d’abord une autre priorité (ex. B5 / HARD design) |
| .3 | Différer / autre |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** autoriser *ultérieurement* un cycle de cadrage documentaire complémentaire borné, sans ouvrir T-A7 niveaux B/C/D.

**Conséquences :**

- un gate séparé sera requis pour ouvrir ce cadrage ;
- ce cycle n’ouvre pas le cadrage complémentaire ;
- compatible Option C vague 1 (legacy/périmètre) — vague **non** ouverte ici.

**Anti-claims :**

- T-A7-D01 ≠ ouverture actuelle du cadrage complémentaire ;
- T-A7-D01 ≠ T-A7 `OPEN` ;
- T-A7-D01 ≠ delivery preparation / delivery / cutover.

**Restant ouvert :** gate d’ouverture du cadrage complémentaire · inventaire legacy concret.

---

## T-A7-D02 — Quel séquencement ?

**Question :** Quel séquencement adopter pour la trajectoire post-A5.2 ?

| Option | Description |
|--------|-------------|
| .1 | Option A — réserves critiques d’abord (HARD puis B5 · F09/F10) |
| .2 | Option B — legacy/cutover framing d’abord (F03/F11/F13) |
| .3 | Option C — séquencement par gates / vagues |
| .4 | Custom |

**Choix Morris :** `.3`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** adopter le séquencement Option C par gates et vagues :

1. legacy et périmètre ;
2. autorité ;
3. atomicité / persistence ;
4. delivery readiness ;
5. cutover.

**Conséquences :**

- Options A et B = `NOT SELECTED` ;
- trajectoire documentaire versionnée ;
- **aucune vague n’est ouverte automatiquement**.

**Anti-claims :**

- Option C adoptée ≠ vague 1…5 lancée ;
- Option C ≠ niveaux B/C/D autorisés ;
- chaque vague exige un GO Morris dédié.

**Restant ouvert :** ouverture de chaque vague · contenu des F associées.

---

## T-A7-D03 — Sujets ouverts pendant framing

**Question :** Quels sujets peuvent rester ouverts pendant un cadrage documentaire ?

| Option | Description |
|--------|-------------|
| .1 | Tous les sujets techniques listés (B5, HARD, R1, R-M01, legacy, persistence/IAM NOT SELECTED) — framing N pour toutes |
| .2 | Exiger fermeture HARD avant tout cadrage complémentaire |
| .3 | Custom |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** les sujets techniques suivants peuvent rester ouverts pendant un cadrage documentaire borné :

- B5 ;
- R-T-A3-1 / R-T-A3-2 (`OPEN HARD`) ;
- R1 ;
- R-M01 ;
- legacy ;
- persistence / IAM `NOT SELECTED`.

**Conséquences :**

- framing documentaire n’exige pas la fermeture préalable des HARD ;
- aligné T-A7 doc 04 + A5.2.

**Anti-claims :**

- « peut rester ouvert pendant framing » ≠ résolu ;
- ≠ acceptable pour delivery ;
- ≠ fermeture différée automatique.

**Restant ouvert :** toutes les réserves listées (statuts techniques inchangés).

---

## T-A7-D04 — Bloqueurs delivery preparation

**Question :** Quels sujets bloquent la **delivery preparation** (niveau B) ?

| Option | Description |
|--------|-------------|
| .1 | Aucun HARD n’interdit la prep documentaire ; B5 peut rester OPEN (A52-D01) ; F08/F09/F10 restent NOT DECIDED jusqu’à bulletin |
| .2 | Exiger F08/F09/F10 DECIDED avant toute prep |
| .3 | Exiger fermeture B5 avant prep |
| .4 | Custom |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** les réserves HARD et B5 ne bloquent pas, *par elles-mêmes*, une **future** préparation documentaire du delivery.

**Conséquences :**

- STOP B5 reste **avant delivery** (A52-D01), pas avant prep ;
- une future prep documentaire reste conditionnée à un gate dédié.

**Anti-claims :**

- delivery preparation reste actuellement `NOT AUTHORIZED` ;
- B5 reste `STOP BEFORE DELIVERY` ;
- cette décision ne ferme aucune réserve ;
- cette décision ne consomme aucune F ;
- choisir `.1` ≠ autoriser prep maintenant.

**Restant ouvert :** gate `GO PREPARE T-A7 DELIVERY` (ou équivalent) · contenu F08.

---

## T-A7-D05 — Quand arbitrer F08/F09/F10 ?

**Question :** Faut-il arbitrer F08/F09/F10 avant le cadrage documentaire, ou avant delivery / real Critical ?

| Option | Description |
|--------|-------------|
| .1 | Avant tout cadrage complémentaire |
| .2 | Avant delivery preparation (B) |
| .3 | Avant delivery (C) / real Critical / cutover selon F (F08 delivery · F09 Critical/cutover · F10 persistence/IAM) |
| .4 | Custom |

**Choix Morris :** `.3`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** arbitrer chaque décision F à son point de risque :

- **F08** avant delivery ;
- **F09** avant real Critical / cutover ;
- **F10** avant choix durable persistence / IAM.

**Conséquences :**

- calendrier F adopté ;
- préparation documentaire A5.2 déjà faite reste valide ;
- consommation F = bulletins séparés futurs.

**Anti-claims :**

- F08 / F09 / F10 restent actuellement `NOT DECIDED` (contenu) ;
- le calendrier est décidé, **pas** le contenu ;
- aucun bulletin F n’est consommé dans ce cycle ;
- F03 / F11–F13 restent `NOT DECIDED`.

**Restant ouvert :** contenu de chaque F · GO bulletins F dédiés.

---

## Bulletin Morris consommé (enregistrement)

```
GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut gate :** `CONSUMED` (enregistrement documentaire uniquement).

Interdit suite à ce GO : ouvrir T-A7 · ouvrir une vague · delivery/cutover · fermeture implicite · consommation contenu F · COMPLETE.

---

## Synthèse décisions

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Garde-fous absolus

- A5.2 documentaire : `CLOSED`
- réserves techniques : `OPEN` / `OPEN HARD`
- T-A6 COMPLETE : `NOT DECLARED`
- Option A : `NOT COMPLETE`
- T-A7 : `NOT OPEN`
- delivery preparation / delivery / cutover : `NOT AUTHORIZED`
- F03 / F08–F13 contenu : `NOT DECIDED`
- F08/F09/F10 calendrier : adopté (D05) · contenu `NOT DECIDED`
- persistence / IAM : `NOT SELECTED`
- RGPD production : `NOT VALIDATED`

Formulations interdites : « T-A7 ready to execute » · « T-A7 opened » · « delivery ready » · « cutover approved » · « reserves resolved » · « Option A complete » · « Option C waves started » · « F08/F09/F10 content decided ».
