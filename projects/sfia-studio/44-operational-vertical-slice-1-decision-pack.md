# SFIA Studio — Decision pack Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `44-operational-vertical-slice-1-decision-pack.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Statut** | `framing-validated-with-reservations` — `OPS1-CAND-01`…`14` **validées** (2026-07-20) ; conception / backlog / delivery / live / MVP **fermés** |
| **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
| **Autorité** | Morris (L0) |

> Pack de décisions du cadrage OPS1.
> **Validé avec réserves** sous `G-OPS1-FRAMING-VAL` (2026-07-20).
> Aucune ouverture automatique de conception, architecture, UX, backlog, delivery, GPT live, Cursor réel, MVP ou production.

---

## 1. Synthèse

Après A–E (`CLOSED_WITH_RESERVATIONS`), le cadrage OPS1 amendé est **validé** : conversation ChatGPT **réelle, libre, multi-tours** comme socle ; action **étroite** (Markdown) gouvernée ; chat ≠ GO.

Livrables :

| Doc | Rôle | Statut cadrage |
|-----|------|----------------|
| `41` | Intention, scénario, trajectoire | Validé avec réserves |
| `42` | Flux, états, CycleSession, contrats | Validé au niveau cadrage |
| `43` | Périmètre, NFR, critères de succès | Contrat de succès validé |
| `44` | Ce pack — `OPS1-CAND-*` | Décisions validées |

---

## 2. Décision Morris — 2026-07-20

| Champ | Valeur |
|-------|--------|
| Autorité | Morris (L0) |
| Gate | `G-OPS1-FRAMING-VAL` **consommé** |
| Date/heure/fuseau | 2026-07-20 12:21 CEST |
| Décision | Cadrage amendé OPS1 **validé avec réserves** |
| POC | **Reste en phase POC** |
| Trajectoire | Conversation-first I1–I7 **validée au niveau produit/cadrage** — **pas** backlog ni découpage delivery définitif |
| Gates suivants | **Aucun ouvert automatiquement** |
| Prochain cycle | Soumis à un **nouveau GO Morris** (typiquement conception fonctionnelle OPS1) |

### Formulation structurante validée

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action facultative proposée et structurée
  → gate Morris explicite
  → exécution strictement bornée
  → rapport et preuves
  → reprise de la conversation
  → décision Morris finale
```

### Invariants validés

- Conversation réelle, libre dans son contenu, contextuelle, multi-tours, non scénarisée, persistée et reprenable.
- Peut aboutir **ou non** à une action ; peut reprendre après rapport Cursor.
- Action limitée : un scénario documentaire, un Markdown non protégé, branche locale dédiée, Cursor borné sous GO, **aucune** action Git distante automatique.
- La conversation **ne constitue jamais** un GO implicite.

---

## 3. Observations (pré-validation — conservées)

1. A–E a prouvé des briques, pas un chat Studio libre.
2. Le risque du cadrage initial (formulaires) a été corrigé par l’amendement conversation réelle.
3. Fixtures légitimes pour tests ; illégitimes comme preuve métier du scénario pilote.
4. Invariants : Morris L0 ; Git vérité ; AF-Option C ; Option B ; no remote auto ; ≠ MVP.

---

## 4. Options retenues (statut post-validation)

| Sujet | Option retenue | Statut |
|-------|----------------|--------|
| Conversation | Réelle, libre, contextuelle + bornes budget/outils/effets | **Validée** |
| Chat simulé / scripté comme preuve | Rejetée | Confirmé |
| Chat illimité | Rejetée | Confirmé |
| Action pilote | Markdown local réversible | **Validée** |
| Séquencement | S1 — I1 puis I2 | **Validée** (cadrage) |
| Fusion I1+I2 | Non retenue pour le cadrage | Confirmé |

---

## 5. Décisions `OPS1-CAND-*` — statut après `G-OPS1-FRAMING-VAL`

| ID | Décision (version amendée) | Statut | Réserve |
|----|----------------------------|--------|---------|
| **OPS1-CAND-01** | Scénario d’**action** = Markdown non protégé, branche locale, sans push auto | **VALIDÉ** | Fichier Markdown exact et convention de branche **non choisis** |
| **OPS1-CAND-02** | Périmètre obligatoire = matrice doc `43` (conversation + action séparées) | **VALIDÉ** | — |
| **OPS1-CAND-03** | Conversation GPT **réelle, libre, contextuelle et multi-tours** obligatoire pour la preuve OPS1 ; bornes = budget, outils, données, effets — jamais dialogue pré-écrit ni single-shot | **VALIDÉ** | — |
| **OPS1-CAND-04** | Fixtures **uniquement** pour tests / intégration contrôlée ; preuve opératoire = GPT live (+ Cursor live sous GO) | **VALIDÉ** | — |
| **OPS1-CAND-05** | Action candidate **structurée et séparée** du dialogue ; intention chat ≠ GO | **VALIDÉ** | — |
| **OPS1-CAND-06** | Conversation peut conclure **sans action** ; conversation **post-exécution** obligatoire dans le BeB | **VALIDÉ** | — |
| **OPS1-CAND-07** | Modèle conceptuel `CycleSession` avec journal conversationnel | **VALIDÉ** | Noms de champs ajustables en conception |
| **OPS1-CAND-08** | Persistance minimale + reprise obligatoire ; stack non figée | **VALIDÉ** | Stack / BDD **non décidées** |
| **OPS1-CAND-09** | Aucune action Git distante automatique | **VALIDÉ** | — |
| **OPS1-CAND-10** | Trajectoire **conversation-first** I1→I7 ; option S1 (I1 avant I2) | **VALIDÉ AVEC RÉSERVE** | Trajectoire de **cadrage** validée — **non** backlog ni découpage delivery définitif ; chaque incrément futur sous GO |
| **OPS1-CAND-11** | Critères de réussite = §6 doc `43` | **VALIDÉ** | — |
| **OPS1-CAND-12** | Point d’arrêt POC après preuve OPS1 ; MVP = GO distinct ; MVP = projet bout en bout | **VALIDÉ** | — |
| **OPS1-CAND-13** | Machine d’états multi-couches doc `42` | **VALIDÉ AVEC RÉSERVE** | Base fonctionnelle de conception future ; **noms ajustables** |
| **OPS1-CAND-14** | FinOps : budgets, alertes, no retry, coûts séparés conversation / structuré / analyse | **VALIDÉ AVEC RÉSERVE** | **Valeurs numériques À définir** sous GO distinct |

Aucune nouvelle décision inventée. Identifiants = version amendée du document 44 pré-validation.

---

## 6. Trajectoire I1–I7 — validée au niveau cadrage

| # | Objectif | Statut cadrage |
|---|----------|----------------|
| **I1** | Session persistante et journal conversationnel | Trajectoire validée |
| **I2** | Conversation GPT réelle et libre | Trajectoire validée |
| **I3** | Proposition d’action structurée et gates | Trajectoire validée |
| **I4** | Contrat documentaire et Cursor borné | Trajectoire validée |
| **I5** | Rapport, preuves et conversation post-exécution | Trajectoire validée |
| **I6** | Clôture, historique et reprise complète | Trajectoire validée |
| **I7** | Démonstration opératoire OPS1 | Trajectoire validée |

**Statut global :** trajectoire produit **validée pour préparer la conception** ; noms et découpage delivery **non définitifs** ; chaque incrément futur soumis à qualification et GO Morris ; **aucun** gate live ou delivery ouvert par `G-OPS1-FRAMING-VAL`.

---

## 7. Réserves maintenues

- Fichier Markdown exact du scénario pilote **non choisi**
- Branche locale et convention de nommage **non figées**
- Plafonds FinOps numériques **À définir**
- Stack de persistance / BDD **non décidées**
- Protocole et API **non décidés**
- Architecture technique **non validée**
- UX/UI finale et Figma **non validés**
- CI distante SFIA Studio **non prouvée**
- Isolation OS/réseau **non industrialisée**
- Aucun backlog ou delivery **ouvert**
- Aucun claim MVP, production-ready ou industrialisation

---

## 8. Décisions explicitement non prises / non ouvertes

- Stack / BDD / protocole / API
- Maquettes Figma / UX finale
- Backlog stories / delivery
- Code `app/**` / `harness/**`
- Valeurs numériques FinOps
- Ouverture MVP
- Modification méthode ou prompts
- Commit / push / PR des documents de cadrage (hors handoff review)
- GPT live / Cursor réel

---

## 9. Gates Morris futurs (tous **fermés**)

| Gate | Objet | Statut |
|------|-------|--------|
| `G-OPS1-FRAMING-VAL` | Validation cadrage | **Consommé** |
| `G-OPS1-SCENARIO-VAL` | Scénario pilote (fichier/branche) | Fermé |
| `G-OPS1-SESSION-VAL` | Précisions session (si besoin) | Fermé |
| `G-OPS1-FUNC-DESIGN` | Conception fonctionnelle OPS1 | Fermé |
| `G-OPS1-FUNC-ARCH` | Architecture fonctionnelle | Fermé |
| `G-OPS1-UX` | UX/UI | Fermé |
| `G-OPS1-BACKLOG` | Backlog | Fermé |
| `G-OPS1-DEL-SESSION` | Delivery I1 | Fermé |
| `G-OPS1-LIVE-CONVERSATION` | GPT live conversationnel | Fermé |
| `G-OPS1-ACTION-GATE` | Delivery I3 | Fermé |
| `G-OPS1-LIVE-CURSOR` | Cursor réel | Fermé |
| `G-OPS1-PILOT-DEMO` | Démo I7 | Fermé |
| `G-OPS1-MVP-TRAJECTORY` | Trajectoire MVP | Fermé |
| `G-MVP-CLAIM` / `G-PRODUCTION-CLAIM` | Claims | Fermés |

---

## 10. Prochaine étape

La prochaine étape reste une **décision Morris distincte** sur l’ouverture éventuelle de la **conception fonctionnelle OPS1** (`G-OPS1-FUNC-DESIGN`).

Aucun cycle suivant n’est ouvert automatiquement par `G-OPS1-FRAMING-VAL`.

---

## 11. Verdict

`SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`

### Interdits (sans nouveau GO)

CONCEPTION OPENED · BACKLOG OPENED · READY FOR DELIVERY · GPT LIVE · CURSOR LIVE · MVP DEFINED · PRODUCTION READY · INDUSTRIALIZATION STARTED · FRAMING DOCS MERGED
