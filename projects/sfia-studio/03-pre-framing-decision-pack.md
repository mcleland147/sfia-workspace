# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut pré-cadrage** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Verdict** | `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN` |

---

## 1. Objet

Pack d’arbitrage **historique** du pré-cadrage, synchronisé après validation du cadrage détaillé.

Ce document :
1. trace D-VAL-1 à D-VAL-10 ;
2. enregistre le statut G1–G7 et DF-G1 ;
3. renvoie au cadrage détaillé validé (`04`–`07`) ;
4. rappelle que le **merge** et le **prochain cycle** restent des décisions Morris distinctes.

En cas d’écart sur l’état courant, **README et `04`–`07` priment**.

---

## 2. Décisions validées (D-VAL-1 à D-VAL-9)

| # | Décision | Gate | Statut |
|---|----------|------|--------|
| D-VAL-1 | Initier le pré-cadrage SFIA Studio | — | **VALIDÉE** |
| D-VAL-2 | Créer localement le socle documentaire | — | **VALIDÉE** |
| D-VAL-3 | Produit complet ; POC = faisabilité technique intermédiaire uniquement | Trajectoire | **VALIDÉE** |
| D-VAL-4 | SFIA Studio confirmé comme **projet officiel** | **G1** | **VALIDÉE** |
| D-VAL-5 | Problème et opportunité **validés** | **G2** | **VALIDÉE** |
| D-VAL-6 | **Option C** — produit indépendant consommant SFIA v2.6 | **G4** | **VALIDÉE** |
| D-VAL-7 | **Principe** d’un POC technique de faisabilité **validé** ; périmètre détaillé après cadrage/archi suffisants | **G5** | **VALIDÉE (principe)** |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | **G6** | **VALIDÉE** |
| D-VAL-9 | Cadrage détaillé SFIA Studio **validé** | **DF-G1** | **VALIDÉE** |
| D-VAL-10 | Commit, push et création d’une **draft PR** du socle documentaire **autorisés** par Morris ; **merge non autorisé** | **G7** | **VALIDÉE** |

### Contenu D-VAL-3 (rappel)

Produit complet ; POC ≠ produit ≠ MVP ≠ limite de trajectoire ; POC dérivé de vision/archi ; MVP et industrialisation distincts.

### Contenu D-VAL-6 (G4)

SFIA Studio adopte l’Option C. Toute évolution de méthode = cycle CAPA/EVOL méthode séparé + GO Morris. **Ne modifie pas** SFIA v2.6.

### Contenu D-VAL-7 (G5)

Principe POC validé. **N’autorise pas** le démarrage du POC. Périmètre précis ultérieur.

### Contenu D-VAL-8 / D-VAL-9

D-VAL-8 a autorisé le cadrage détaillé. D-VAL-9 / DF-G1 valide le cadrage documenté dans `04`–`07`. **Ne lance pas** le prochain cycle.

### Contenu D-VAL-10 (G7)

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.** Handoff review ≠ G7.

---

## 3. Statut des gates G1–G7 et DF-G1

| Gate | Statut | Formulation |
|------|--------|-------------|
| **G1** | **VALIDÉ** | SFIA Studio est un projet officiel. |
| **G2** | **VALIDÉ** | Le problème et l’opportunité sont validés. |
| **G3** | **REVUE CONFORME** | Vision corrigée = base validée du cadrage. |
| **G4** | **VALIDÉ — OPTION C** | Produit indépendant consommant SFIA v2.6. |
| **G5** | **VALIDÉ SUR LE PRINCIPE** | POC de faisabilité requis ; détail ultérieur. |
| **G6** | **VALIDÉ** | Cadrage détaillé autorisé (D-VAL-8). |
| **DF-G1** | **VALIDÉ** | Cadrage détaillé validé (D-VAL-9). |
| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** | D-VAL-10 |

> Le push technique du Review Handoff Git **ne vaut pas** G7. **Merge interdit.**

### Rappels d’effet

| Décision | N’autorise pas |
|----------|----------------|
| G1 validé | Automatisme des phases suivantes |
| G4 Option C | Modification de SFIA v2.6 |
| G5 principe | Démarrage du POC |
| G6 / DF-G1 | Conception / architecture / UX / prochain cycle |
| G7 / D-VAL-10 | Merge ; force push ; prochain cycle |

---

## 4. Réserves G3 traitées (R1–R5)

| ID | Réserve | Traitement |
|----|---------|------------|
| **G3-R1** | « Industrialiser les cycles » | Vision : qualifier/lancer/suivre/clôturer les cycles ; industrialiser la **plateforme** |
| **G3-R2** | Runtime figé | Mécanisme d’orchestration déterministe **candidat** ; nom non contractuel ; archi non validée |
| **G3-R3** | macOS = plateforme produit | macOS = contrainte de **preuve** POC uniquement |
| **G3-R4** | POC = valeur produit | Critères candidats de valeur ajoutés ; POC = faisabilité ; MVP = valeur |
| **G3-R5** | 15 cycles obligatoires | Couverture **progressive** ; MVP = sous-ensemble à définir plus tard |

---

## 5. Formulation G5 (principe validé)

POC destiné **uniquement** à démontrer la faisabilité d’implémentation.

Questions techniques cibles (périmètre détaillé **non figé**) :

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA vers GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe (Runtime candidat) : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

### Le POC ne valide pas

Produit complet ; MVP ; industrialisation plateforme ; couverture des 15 cycles ; stack ; architecture définitive ; valeur métier complète.

---

## 6. Décisions non prises / restantes Morris

| Sujet | Statut |
|-------|--------|
| G7 commit / push / draft PR | **VALIDÉ** (D-VAL-10) — **merge interdit** |
| Sélection du prochain cycle | **Non sélectionné** |
| Ordre conception / architecture / UX | Non pris |
| Contenu exact POC / démarrage POC | Non pris |
| MVP / backlog | Non pris |
| Stack / architecture | Non pris |
| Sécurité détaillée / secrets | Non pris |
| Mode distribution produit | Non pris |
| L3/L4 | Non pris |
| Modification v2.6 | Interdite ici |

**DF-G1 est VALIDÉ.** Les autres gates futurs (DF-G2…) restent **non validés**.

---

## 7. Option C (validée) — rappel impacts

| Impact | Contenu |
|--------|---------|
| Produit | Indépendant, consomme v2.6 |
| Méthode | Inchangée sans cycle CAPA/EVOL + GO |
| Risque évité | Confusion extension = baseline |

Options A/B : non retenues pour la relation produit/méthode au démarrage.

---

## 8. Trajectoire macro

```text
Produit cible complet
  → pré-cadrage (01–03) — historique synchronisé
  → cadrage détaillé (04–07) — VALIDÉ D-VAL-9 / DF-G1
  → conception / architecture / UX — non lancés
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation de la plateforme
```

---

## 9. Risques résiduels

| ID | Risque | Reporté à |
|----|--------|-----------|
| R1 | Seconde vérité hors Git | Cadrage / sécurité |
| R2 | Contournement gates | Sécurité ; POC |
| R3 | Runtime figé trop tôt | Architecture |
| R4 | macOS pris pour plateforme produit | G3 final / cadrage |
| R5 | Confusion POC ↔ valeur | G3-R4 / MVP |
| R6 | 15 cycles pris pour obligation MVP | G3-R5 / backlog |
| R7 | Campus360 local coexistant | Discipline Git |

---

## 10. Questions ouvertes (post-synchronisation)

1. Passage ready-for-review / merge de la draft PR (décisions distinctes — **merge non autorisé ici**) ?
2. Quel prochain cycle (conception bornée recommandée, non décidée) ?
3. Ordre conception / architecture / UX ?
4. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
5. POC jetable ou réutilisable (post-POC) ?

---

## 11. Critères de clôture pré-cadrage (actualisés)

| Critère | Gate | État |
|---------|------|------|
| Projet officiel | G1 | **Fait** |
| Problème / opportunité | G2 | **Fait** |
| Vision produit | G3 | **Revue conforme** |
| Relation v2.6 Option C | G4 | **Fait** |
| Principe POC | G5 | **Fait (principe)** |
| Cadrage détaillé autorisé | G6 | **Fait** |
| Cadrage détaillé validé | DF-G1 / D-VAL-9 | **Fait** |
| Versionnement projet (commit / push / draft PR) | G7 / D-VAL-10 | **Fait (autorisé)** — merge interdit |

---

## 12. Prochaine décision recommandée

1. Revue ChatGPT de la draft PR + handoff.
2. Morris : ready-for-review / merge (**merge non autorisé ici**).
3. **Sélection du prochain cycle** (conception fonctionnelle bornée = recommandation, pas décision).

G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. G7 ≠ merge. Handoff ≠ merge.

---

## 13. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| D-VAL-1 à D-VAL-10 | Tracées |
| DF-G1 | **VALIDÉ** |
| G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
| Prochain cycle | Non sélectionné |
| Architecture / stack / POC / MVP | Non démarrés |
| Synchronisation 01–03 | **Oui** |

**Verdict :** `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`

---

## 14. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / décisions (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — decision pack historique — synchronisé post D-VAL-10 — G7 autorisé commit/push/draft PR — merge interdit — Morris décide.*
