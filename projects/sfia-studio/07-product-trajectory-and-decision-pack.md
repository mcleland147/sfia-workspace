# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 15 — Capitalisation / REX (post-Delivery P0) ; historique cadrage / conception conservé |
| **Profil** | Capitalization — Standard |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle intégrée (clôture formelle **ouverte**) |
| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND / AF-CAND / TA-DEC historiques inchangés ; **Option B — POC orchestration** = prochaine orientation Morris (**cadrage**, non lancé) |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` — cadrage → Delivery P0 intégrés |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Delivery P0 **CLÔTURÉ** (PR #217). Prochaine orientation : **cadrage POC orchestration** (Option B) — **non démarré**. Clôture formelle architecture fonctionnelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.

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
| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non démarrée** |
| Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
| Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |

> Les lignes « Delivery autorisé — non exécuté » des versions antérieures de ce document étaient **exactes à leur date**. Elles sont **obsolètes** après PR #217 et remplacées ici par l’état factuel ci-dessus.

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
  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
  → architecture POC ciblée             ← candidate
  → backlog POC borné                   ← candidate
  → delivery POC                        ← candidate
  → décision Morris : abandon / itération / préparation MVP
```

### Précisions

- Étapes jusqu’au cleanup P0 : **terminées**.
- Cadrage POC orchestration : **sélectionné** (Option B Morris), **non démarré**.
- Étapes post-cadrage POC : **candidates**, soumises aux résultats du cadrage.
- POC ≠ MVP ≠ industrialisation — **aucun** de ces jalons n’est engagé.
- Architecture **fonctionnelle** : VALIDÉE / INTÉGRÉE ; clôture formelle **non prononcée**.
- Architecture **technique P0** : VALIDÉE / INTÉGRÉE ; Delivery P0 **exécuté**.
- Desktop P0 uniquement (1440×1024) ; responsive / a11y complète / CI / Runtime réel **ouverts**.

### Orientation Option B — cadrage POC orchestration

> Le prochain cycle SFIA Studio sera un cycle de cadrage visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique sans préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.

**Sujets du futur cadrage (préparation — non exécution) :**

1. Objectif de preuve
2. Scénario métier unique
3. Frontières Studio / orchestrateur
4. Niveau d’automatisation maximal
5. Actions read-only ou simulées
6. Gates Morris
7. Stop conditions
8. Données de test
9. Preuves attendues
10. Critères de succès et d’abandon
11. Sécurité et réversibilité
12. Périmètre Git
13. Stratégie de démonstration

**Hors ce cycle de capitalisation :** architecture détaillée ; schéma API ; contrat JSON ; backlog complet ; choix d’outil Runtime ; code ; planning détaillé.

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

### 4.6 Cadrage POC orchestration (prochain)

| Champ | Contenu |
|-------|---------|
| Statut | **Sélectionné** (Option B Morris) — **non démarré** |
| Objectif | Définir un POC d’orchestration borné (faisabilité) |
| Ne lance pas | Architecture POC détaillée ; code ; outil Runtime ; MVP |

### 4.7 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Avant POC à permissions élevées |
| Pourquoi pas maintenant | Identification déjà faite au cadrage ; sujets à rouvrir dans le cadrage POC |

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
| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE** — sélectionnée, **non lancée** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au Delivery P0 **terminé** ; prochain = cadrage POC |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | À traiter dans le cadrage POC |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** (ce cycle) |
| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **Attendue** |
| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Attendue** après intégration capitalisation |

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

**Option B (Morris — capitalisation) :** prochaine orientation = **cadrage POC orchestration** — **non lancé**.

Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à Delivery P0 ; prochain = cadrage POC (Option B) |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** — objet du prochain cadrage |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **sélectionné**, non démarré.

---

## 8. Questions Morris

1. Autorisez-vous **commit / push / PR** de la capitalisation documentaire (README + `07`) ?
2. Après intégration : autorisez-vous le **GO cadrage POC orchestration** ?
3. Clôturez-vous formellement le cycle architecture fonctionnelle (décision **distincte**) ?
4. Quel sort pour les branches historiques restantes ?
5. Quelles réserves P0 (responsive / a11y / CI / postcss) prioriser avant ou pendant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État |
|---------|------|
| 04–07 complets et cohérents | **Oui** (07 synchronisé post-P0) |
| Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
| DF-G1 validé | **Oui** (D-VAL-9) |
| Clôture formelle cadrage | **FAIT** (D-VAL-11) |
| Cycle conception | **CLÔTURÉ** |
| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle ouverte |
| UX/UI | **CLÔTURÉ** |
| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** |
| Delivery P0 | **CLÔTURÉ** (PR #217) |
| Prochain cycle | **Cadrage POC orchestration** — sélectionné, non lancé |
| MVP / industrialisation / Runtime réel | **Non engagés** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Delivery P0 | **CLÔTURÉ** — `759ab0b…` / PR #217 |
| Statut produit | `p0-delivery-integrated-next-poc-orchestration-framing` |
| Option B POC | **Sélectionnée** — cadrage **non démarré** |
| Ready for POC code / Runtime | **Non** |
| Ready for Morris capitalisation review | **Oui** |

**Verdict :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — écrans P0 |
| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — décisions |
| [18-technical-architecture.md](./18-technical-architecture.md) | Architecture technique P0 |
| [19-technical-architecture-decision-pack.md](./19-technical-architecture-decision-pack.md) | TA-DEC (historique « delivery autorisé ») |
| [app/README.md](./app/README.md) | Runtime P0 intégré |

*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Morris décide.*
