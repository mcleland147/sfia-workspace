# 06 — Pack d’arbitrage Morris (A52-D01…D05)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **F03 / F08–F13 après A5.2** | `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |

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

**Recommandation ChatGPT/Cursor :** `RECOMMENDED — NOT DECIDED` → **A52-D01.3** + stops delivery (esprit A52-D01.2 sans « acceptation » formelle) : unifier le tracking C4→B5 ; garder **B5 OPEN** ; exiger stratégie/preuve avant delivery ; **aucune fermeture**.

**Risques :** confusion fusion tracking ≠ fix T-A1 ; claim implicite de fermeture.

**Fichiers touchés ultérieurement (estimés) :** contrats T-A1 LPS · tests adversarial · registres réserves.

**Gate nécessaire :** bulletin Morris A52-D01 (distinct).

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

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D02.2**

**Risques :** sous-estimer orphans ; sélection techno prématurée (interdit ici).

**Gate :** bulletin Morris A52-D02 · lien F10 futur.

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

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D03.3** maintenant ; trajectoire **A52-D03.1** avant real Critical.

**Risques :** service interne pris pour API publique ; IAM implicite.

**Gate :** bulletin Morris A52-D03 · lien F09/F10.

---

## A52-D04 — R-T-A3-2 / Decision↔LPS/Epistemic

**Question :** Quelle atomicité Decision↔LPS/Epistemic pour mémoire vs durable ?

| Option | Description |
|--------|-------------|
| A52-D04.1 | Transaction unique obligatoire |
| A52-D04.2 | Outbox / unit of work durable |
| A52-D04.3 | Saga / compensation contrôlée |
| A52-D04.4 | Mémoire bornée jusqu’à T-A6 COMPLETE déclaré ; pattern durable requis avant delivery réelle |
| A52-D04.5 | Autre |
| A52-D04.6 | Différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D04.4** (sans choisir .1/.2/.3).

**Risques :** mémoire présentée comme durable ; oubli résiduel HARD.

**Gate :** bulletin Morris A52-D04 · lien F08/F10.

---

## A52-D05 — R-M01 et C1–C4

**Question :** Comment arbitrer R-M01 et C1–C4 sans rouvrir F04 ?

| Option | Description |
|--------|-------------|
| A52-D05.1 | Tout séparer |
| A52-D05.2 | Fusionner C* dans réserves principales (C4→B5 ; C1–C3→R-M01) |
| A52-D05.3 | Borner R-M01 mémoire et reporter C1–C4 |
| A52-D05.4 | Exiger résolution/bornage avant déclaration T-A6 COMPLETE |
| A52-D05.5 | Custom |
| A52-D05.6 | Différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D05.2 + A52-D05.4**

**Risques :** fermeture implicite ; confusion validation technique ≠ closure.

**Gate :** bulletin Morris A52-D05 · **ne consomme pas** F08.

---

## Matrice F (relation)

| F | Statut avant | Impact A5.2 | Arbitrage préparé | Statut après |
|---|--------------|-------------|-------------------|--------------|
| F03 | NOT DECIDED | hors périmètre | — | `NOT DECIDED` |
| F04 | DECIDED (A4.1) | bornage R-M01/C* pour déclaration future | A52-D05 | `DECIDED — UNCHANGED` |
| F08 | NOT DECIDED | prépare critères réserves avant delivery | A52-D01/D02/D04 | `NOT DECIDED` |
| F09 | NOT DECIDED | prépare Critical/cutover | A52-D03 | `NOT DECIDED` |
| F10 | NOT DECIDED | prépare persistence/IAM order | A52-D02/D04 | `NOT DECIDED` |
| F11 | NOT DECIDED | hors sauf dépendance constatée | — | `NOT DECIDED` |
| F12 | NOT DECIDED | hors | — | `NOT DECIDED` |
| F13 | NOT DECIDED | hors | — | `NOT DECIDED` |

---

## Bulletin Morris vierge

```
GO DECIDE A5.2 ARBITRATIONS — A52-D01=… — A52-D02=… — A52-D03=… — A52-D04=… — A52-D05=… — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

- Remplacer `…` par options choisies.
- Interdit : delivery, cutover, ouverture T-A7, fermeture implicite, consommation F automatique.
- Statut actuel de ce GO : **NOT CONSUMED / NOT DRAFTED AS DECISION**.

---

## Synthèse recommandations (non décisionnelles)

| ID | Option recommandée | Label |
|----|--------------------|-------|
| A52-D01 | .3 (+ stops delivery) | `RECOMMENDED — NOT DECIDED` |
| A52-D02 | .2 | `RECOMMENDED — NOT DECIDED` |
| A52-D03 | .3 (→.1 avant real Critical) | `RECOMMENDED — NOT DECIDED` |
| A52-D04 | .4 | `RECOMMENDED — NOT DECIDED` |
| A52-D05 | .2 + .4 | `RECOMMENDED — NOT DECIDED` |
