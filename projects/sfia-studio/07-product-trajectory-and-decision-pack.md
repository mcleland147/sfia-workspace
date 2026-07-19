# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 8 — Delivery harness-only POC-G9 |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
| **Destinataire** | Morris |
| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |

> Architecture Option B **intégrée**. Harness-only (POC-G9). Allowlist initiale **validée**. POC **non lancé**. GO commit/push/draft PR **consommé**. Merge **fermé**. `app/**` intact.

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **VALIDÉE** / **CLÔTURÉE** / **INTÉGRÉE** (PR #209) |
| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle **NON PRONONCÉE** |
| UX/UI P0 | **CLÔTURÉ** — Option B ; Figma ; docs `14`–`16` |
| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** (`18`/`19`) |
| Delivery P0 | **CLÔTURÉ** — implémenté, validé visuellement, mergé, post-mergé, cleanup |
| PR #217 | **MERGED** — `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers ; +12830 / −0 ; 4 routes P0 |
| Squash | Commit de branche non ancêtre de `main` ; trees app **identiques** |
| Branche Delivery | **Supprimée** (local + remote) |
| Gate Morris Delivery P0 | **Aucune restante** |
| App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
| Prochaine orientation | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
| Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
| Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
| Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| Branche backlog | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |

> Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.

### Trace factuelle — Delivery P0 (historique compact)

| Champ | Valeur |
|-------|--------|
| Autorisation initiale (TA-DEC-18) | Delivery P0 autorisé (historique `19`) |
| Exécution | Implémentation + polish + validation visuelle Morris |
| Intégration | PR #217 squash-mergée sur `main` |
| Post-merge | Validations reproductibles vertes |
| Cleanup | Branche Delivery locale + distante supprimées |
| Exclu / réserve | Responsive ; a11y complète ; CI ; fix postcss ; Runtime/Git/Cursor réels ; MVP |

---

## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.

### D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 validée. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → capitalisation P0 (PR #218)
  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
  → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
  → delivery harness-only                ← POC-G9 CONSOMMÉ ; draft PR Cycle 13 ; merge fermé
  → décision Morris : abandon / itération / préparation MVP
```

### Précisions

- Architecture : **Option B minimale** (intégrée).
- Option A : mode test / dégradé harness.
- Option C : écartée 1er POC.
- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.

### Orientation

> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. Draft PR autorisée ; merge **fermé**. POC **non lancé**.

---

## 4. Cycles (historique et prochain)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **FAIT / VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` (PR #209) |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — **validés** et **intégrés** |
| Profil | Critical |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration Git | **Réalisée** — `99eaeaa…` / `fdade59…` |
| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
| Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
| Livrables | `11` / `12` / `13` — sur `main` |
| Profil | Critical |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
| Branche | `project/sfia-studio-functional-architecture` — **conservée** |
| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
| Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — AF-CAND-11B VALIDÉE ; Option B ; Figma P0-00C…03C |
| Référence | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| Livrables | `14` / `15` / `16` |
| Suite | Delivery P0 **exécuté et clôturé** (PR #217) |
| Ne lance pas | POC ; MVP ; Runtime réel ; clôture architecture fonctionnelle |

### 4.4 Architecture technique P0

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) |
| Suite | Delivery P0 **CLÔTURÉ** depuis TA-DEC-18 (autorisation historique → exécution #217) |
| Ne lance pas | Architecture Runtime ; orchestration réelle ; MVP |

### 4.5 Delivery P0

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — PR #217 ; post-merge ; cleanup branche |
| Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
| Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |

### 4.6 Cadrage POC orchestration (Option B)

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Ne lance pas | POC ; backlog ; delivery ; MVP |

### 4.7 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Validé | Lecture Git réelle OK ; writes distantes simulées ; L5 global interdit ; secrets exclus |

---

## 5. Décisions à préparer

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
| D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
| D-NEXT-2i | Intégration PR #211 | Observation Git | **Fait Git** (`84e4863…`) |
| D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
| D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
| D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI clôturé |
| D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
| D-NEXT-2g2 | Lancement delivery P0 | Morris | **CLÔTURÉ** — PR #217 |
| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Historique** — intégré via trajectoire Delivery |
| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE + INTÉGRÉE** (PR #219) — POC **non lancé** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au cadrage POC **intégré** ; prochain = décision éventuelle POC-G7 |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | **Traité** dans le cadrage POC (G1–G6) — POC non lancé |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** + **intégrée** (PR #218) |
| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
| D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; draft PR Cycle 13 ; merge **fermé** |
| D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
| D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
| D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
| D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
| D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | UI/Docker **fermés** ; spike Cursor **prouvé avec réserves** (`29`) — versionnement ouvert |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Cadrage documentaire clôturé (D-VAL-11) |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |

### Recommandation (≠ décision / ≠ sélection)

**Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).

**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).

**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery P0 **exécuté et clôturé** (PR #217).

**Option B (Morris — capitalisation) :** cadrage POC orchestration **VALIDÉ + INTÉGRÉ** (PR #219). POC **non lancé**.

Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à cadrage POC intégré |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
| **DF-G4** | Autoriser définition détaillée du POC | **Partiellement couvert** par cadrage POC (G1–G6) — architecture POC = POC-G7 |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** — non validé |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Architecture Option B : **intégrée** (#221). POC-G8/G9 **CONSOMMÉS**. Draft PR harness Cycle 13 ; merge **fermé**.

---

## 8. Questions Morris

1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
2. Ouvrez-vous **POC-G9** (delivery borné) ?
3. Clôture formelle AF (séparée) ?

---

## 9. Critères

| Critère | État |
|---------|------|
| Architecture Option B | **INTÉGRÉE** |
| POC-G7 | **INTÉGRÉ** |
| POC-G8 | **CONSOMMÉ** |
| POC-G9 | **Fermé** |
| POC lancé | **Non** |

---

## 10. Verdict documentaire

**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [26](./26-poc-orchestration-backlog.md) · [27](./27-poc-orchestration-allowlist-and-acceptance.md) · [28](./28-poc-orchestration-delivery-gate-pack.md) | Backlog POC-G8 |
| [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Archi Option B |
| [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
| [11](./11-functional-architecture.md) | AF-Option C |

*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
