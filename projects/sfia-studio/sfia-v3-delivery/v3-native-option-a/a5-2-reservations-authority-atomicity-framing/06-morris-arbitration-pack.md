# 06 — Pack d’arbitrage Morris (A52-D01…D05)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
| **Gate consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
| **Autorité** | Morris Cleland — décisions explicites |
| **F03 / F08–F13** | `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |
| **Verdict F** | `NO F-DECISION AUTO-CONSUMPTION` |

---

## Bulletin Morris exact

```
A52-D03 = .3, puis .1 avant real Critical
A52-D04 = .4
A52-D02 = .2
A52-D01 = .3 + STOP BEFORE DELIVERY
A52-D05 = .2 + .4
```

Gate normalisé consommé :

```
GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

---

## A52-D01 — B5 / carry-forward LPS (+ C4)

**Question :** Comment traiter B5 (LPS satellite ids non carry-forward) et C4 (fusion candidate) ?

| Option | Description | Impact | Dette | Réversibilité |
|--------|-------------|--------|-------|---------------|
| A52-D01.1 | Fermer B5 avant toute delivery preparation | bloque prep LPS write | faible si fix T-A1 | moyenne |
| A52-D01.2 | Accepter temporairement B5 avec compensation + stop avant delivery | prep possible | haute | haute |
| A52-D01.3 | Intégrer C4 dans B5 comme réserve unique de tracking | simplifie registre | tracking only | haute |
| A52-D01.4 | Autre (carry-forward partiel documenté) | — | — | — |
| A52-D01.5 | Différer | B5/C4 restent ouverts | — | — |

**Choix Morris structure :** `.3`

**Choix Morris borne/stop :** `STOP BEFORE DELIVERY`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- C4 est fusionnée dans le suivi de B5 ;
- B5 devient la réserve principale de carry-forward LPS satellite IDs ;
- le sujet peut rester ouvert pendant framing et delivery preparation ;
- STOP obligatoire **avant delivery** tant que B5 n’est pas :
  - résolue ;
  - ou explicitement acceptée/bornée par Morris dans un gate ultérieur.

### Non-effets

- B5 n’est pas CLOSED ;
- C4 n’est pas automatiquement VALIDATED (`TRACKING MERGED INTO B5 — NOT VALIDATED`) ;
- F08 reste `NOT DECIDED` (A52-D01 prépare F08) ;
- delivery n’est pas autorisé ;
- stop ≠ avant delivery preparation.

---

## A52-D02 — R1 / atomicité Project↔Cycle

**Question :** Quel niveau d’atomicité Project↔Cycle avant delivery vs real execution ?

| Option | Description |
|--------|-------------|
| A52-D02.1 | Atomicité stricte avant delivery |
| A52-D02.2 | Txn logique + compensation/idempotence avant delivery ; durable avant real execution |
| A52-D02.3 | Cohérence éventuelle bornée |
| A52-D02.4 | Autre |
| A52-D02.5 | Différer |

**Choix Morris :** `.2`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- transaction logique ; compensation ; idempotence ;
- gestion des partial failures avant delivery ;
- garantie durable obligatoire avant real execution.

### Non-effets

- R1 reste `OPEN` ;
- aucune DB sélectionnée ;
- F10 reste `NOT DECIDED` (préparation).

---

## A52-D03 — R-T-A3-1 / Critical acknowledge

**Question :** Quelle posture d’autorité Critical avant Confirm réel ?

| Option | Description |
|--------|-------------|
| A52-D03.1 | API publique authentifiée + auditée obligatoire avant Confirm Critical réel |
| A52-D03.2 | Service interne borné temporaire ; aucune exécution publique |
| A52-D03.3 | Simulation / read-only ; Confirm fail-closed maintenu |
| A52-D03.4 | Autre |
| A52-D03.5 | Différer |

**Choix Morris :** `.3`, puis `.1` avant toute exécution Critical réelle

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- simulation/read-only uniquement à court terme ;
- aucune exécution Critical réelle ;
- fail-closed obligatoire ;
- API publique authentifiée, autorisée, auditée et anti-replay obligatoire avant real Critical (précondition future — **pas** implémentation).

### Non-effets

- R-T-A3-1 reste `OPEN HARD` ;
- IAM `NOT SELECTED` ;
- F09 / F10 restent `NOT DECIDED` (A52-D03 prépare F09/F10).

---

## A52-D04 — R-T-A3-2 / Decision↔LPS/Epistemic

**Question :** Quelle atomicité Decision↔LPS/Epistemic pour mémoire vs durable ?

| Option | Description |
|--------|-------------|
| A52-D04.1 | Transaction unique obligatoire |
| A52-D04.2 | Outbox / unit of work durable |
| A52-D04.3 | Saga / compensation contrôlée |
| A52-D04.4 | Mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire |
| A52-D04.5 | Autre |
| A52-D04.6 | Différer |

**Choix Morris :** `.4`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- atomicité bornée au périmètre mémoire ;
- acceptable uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire ;
- aucune résolution durable ; aucune exécution réelle/production.

### Non-effets

- R-T-A3-2 reste `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` ;
- F10 reste `NOT DECIDED` (A52-D02/D04 préparent F10).

---

## A52-D05 — R-M01 et C1–C4

**Question :** Comment arbitrer R-M01 et C1–C4 sans rouvrir F04 ?

| Option | Description |
|--------|-------------|
| A52-D05.1 | Tout séparer |
| A52-D05.2 | Fusionner C* dans réserves principales (C4→B5 ; C1–C3→R-M01) |
| A52-D05.3 | Borner R-M01 mémoire et reporter C1–C4 |
| A52-D05.4 | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
| A52-D05.5 | Custom |
| A52-D05.6 | Différer |

**Choix Morris :** `.2 + .4`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- C4 rattachée à B5 ; C1–C3 rattachées à R-M01 / plan de preuves ;
- avant future déclaration T-A6 COMPLETE : résolution, acceptation explicite, ou bornage conforme A4.1.

### Non-effets

- R-M01 `OPEN` ; C1–C3 `RECOMMENDED — NOT VALIDATED` ; C4 `TRACKING MERGED INTO B5 — NOT VALIDATED` ;
- T-A6 COMPLETE `NOT DECLARED` ;
- F04 `DECIDED — UNCHANGED` (A52-D05 borne la future application de F04).

---

## Matrice F (relation — aucune auto-consommation)

| F | Statut avant | Impact A5.2 | Arbitrage | Statut après |
|---|--------------|-------------|-----------|--------------|
| F03 | NOT DECIDED | hors périmètre | — | `NOT DECIDED` |
| F04 | DECIDED (A4.1) | A52-D05 borne application future | A52-D05 | `DECIDED — UNCHANGED` |
| F08 | NOT DECIDED | A52-D01 prépare critères B5 | A52-D01 | `NOT DECIDED` |
| F09 | NOT DECIDED | A52-D03 prépare Critical | A52-D03 | `NOT DECIDED` |
| F10 | NOT DECIDED | A52-D02/D03/D04 préparent | A52-D02/D03/D04 | `NOT DECIDED` |
| F11 | NOT DECIDED | hors | — | `NOT DECIDED` |
| F12 | NOT DECIDED | hors | — | `NOT DECIDED` |
| F13 | NOT DECIDED | hors | — | `NOT DECIDED` |

**Verdict :** `NO F-DECISION AUTO-CONSUMPTION`

---

## Statuts après décision

| Item | Statut |
|------|--------|
| A52-D01…D05 | `DECIDED — ADOPTED BY MORRIS` |
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-T-A3-1 | `OPEN HARD` |
| R-T-A3-2 | `OPEN HARD` |
| R-M01 | `OPEN` |
| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| F04 | `DECIDED — UNCHANGED` |
| F03 / F08–F13 | `NOT DECIDED` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery preparation | `NOT AUTHORIZED` |
| Delivery | `NOT AUTHORIZED` |
| Cutover | `NOT AUTHORIZED` |
| Persistence | `NOT SELECTED` |
| IAM | `NOT SELECTED` |
| RGPD production | `NOT VALIDATED` |

---

## Effets / non-effets (synthèse)

**Effets :** normes A52 adoptées documentairement ; tracking C4→B5 ; C1–C3→R-M01 ; simulation Critical ; atomicité mémoire/logique ; stop avant delivery pour B5 ; préparation F08/F09/F10.

**Non-effets :** aucune réserve CLOSED ; aucune F consommée ; aucun COMPLETE ; T-A7 NOT OPEN ; delivery/cutover NOT AUTHORIZED ; persistence/IAM NOT SELECTED.

---

## Gates futurs (candidats — NOT CONSUMED)

1. `GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` ← **immédiat**
2. Résolution B5 avant delivery (ou acceptation/bornage Morris)
3. Conception API autorité Critical (précondition `.1`)
4. Architecture durable atomicité/persistence (sans sélection techno ici)
5. Future déclaration T-A6 COMPLETE (après R-M01/C1–C4)

Aucun gate delivery ou cutover ouvert.
