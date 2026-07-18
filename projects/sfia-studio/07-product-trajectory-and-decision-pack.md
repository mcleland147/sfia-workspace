# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `detailed-framing-validated` |
| **Décisions** | D-VAL-1 à D-VAL-10 |
| **Destinataire** | Morris |

> Trace la trajectoire et les décisions après validation du cadrage détaillé. Ne lance aucun cycle suivant. **Merge non autorisé.**

---

## 1. Rappel D-VAL-1 à D-VAL-10

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7)

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.**

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** — base du cadrage ; **pas de D-VAL inventé** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |

Le push du handoff `sfia/review-handoff` **≠ merge**. G7 **≠** autorisation de merge.

---

## 3. Trajectoire produit candidate

```text
Pré-cadrage
  → cadrage détaillé          ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement documentaire ← G7 autorisé (commit / push / draft PR) — merge interdit
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI initiale
  → architecture technique candidate
  → définition du POC
  → POC de faisabilité (lot multi-cycle)
  → décision de poursuite
  → backlog / MVP
  → delivery incrémental
  → QA / sécurité / release / RUN
  → industrialisation plateforme
  → capitalisation
```

### Précisions

- Trajectoire **non séquentielle rigide** ; activation par déclencheurs.
- POC = **lot** multi-cycle, pas un cycle SFIA autonome.
- MVP **distinct** du POC.
- G7 = versionnement du socle (commit / push / draft PR) — **distinct** du merge et des phases futures.
- Aucune stack / architecture validée.
- Prochain cycle **non sélectionné**.

---

## 4. Prochains cycles candidats (options de routage — non lancés)

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Validation documentaire du cadrage (**faite**) + sélection Morris |
| Objectif | Préciser comportements et règles métier des capacités |
| Dépendances | Documents 04–07 validés |
| Profil probable | Critical ou Standard — à requalifier |
| Gates possibles | Périmètre conception ; non-objectifs |
| Livrables attendus | Specs fonctionnelles bornées |
| Pourquoi pas maintenant | Prochain cycle **non sélectionné** |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin de structurer capacités / frontières |
| Objectif | Modules logiques ; séparation Studio / orchestration candidate |
| Dépendances | Conception ou capacité map validée |
| Profil probable | Critical |
| Gates possibles | Frontières ; non-choix de stack |
| Livrables attendus | Vue fonctionnelle — pas technique |
| Pourquoi pas maintenant | Risque de figer trop tôt |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Déclencheur | Parcours opérateur à concevoir |
| Objectif | Surfaces et parcours — accessibilité |
| Dépendances | Capacités / cas d’usage |
| Profil probable | Standard ou Critical |
| Gates possibles | Contrat visuel ultérieur |
| Livrables attendus | Maquettes / Figma (cycle dédié) |
| Pourquoi pas maintenant | Figma désactivé ; cycle non sélectionné |

### 4.4 Architecture technique

| Champ | Contenu |
|-------|---------|
| Déclencheur | Après archi fonctionnelle suffisante |
| Objectif | Options techniques candidates — non contractuelles |
| Dépendances | Frontières fonctionnelles |
| Profil probable | Critical |
| Gates possibles | Non-figeage de stack |
| Livrables attendus | Note d’options — pas de choix validé |
| Pourquoi pas maintenant | Prématuré |

### 4.5 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Avant POC à permissions élevées |
| Objectif | Familles de risques et contrôles minimaux |
| Dépendances | Capacités C13 / NFR sécurité |
| Profil probable | Critical |
| Gates possibles | Go sécurité borné |
| Livrables attendus | Note risques / contrôles — pas threat model complet |
| Pourquoi pas maintenant | Identification déjà faite au cadrage |

---

## 5. Décisions à préparer après cadrage

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du prochain cycle | Morris | **Non sélectionné** |
| D-NEXT-3 | Autorisation versionnement **G7** | Morris | **FAIT** (D-VAL-10) — merge interdit |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Non pris |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
| D-NEXT-9 | Ready-for-review / merge de la draft PR | Morris | **Merge interdit** à ce stade |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Dette** | Faible si bornée |
| **Prérequis** | Cadrage validé |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |
| **Dette** | Moyenne si dérive vers stack |
| **Prérequis** | Capacité map stable |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |
| **Dette** | Refonte UX si capacités changent |
| **Prérequis** | Cas d’usage prioritaires |

### Recommandation candidate (non décision)

**Option 1** comme séquence par défaut : conception fonctionnelle bornée → architecture fonctionnelle → puis UX ou technique selon risques.

Morris reste libre de choisir Option 2 ou 3. **Aucun cycle n’est lancé.**

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **PROPOSÉ** |
| **DF-G3** | Autoriser G7 (commit/push/draft PR projet) | **VALIDÉ** (D-VAL-10) — merge interdit |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G2 et DF-G4+ **ne sont pas** validés par ce document.

---

## 8. Questions Morris

1. Passez-vous la draft PR en ready-for-review ? (**merge = décision distincte, non autorisée ici**)
2. Quel prochain cycle (conception / archi / UX / autre) ?
3. Quel niveau d’architecture minimale avant POC ?
4. Quelles priorités NFR avant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État |
|---------|------|
| 04–07 complets et cohérents | **Oui** |
| Alignement D-VAL-1…10 / G1–G7 / DF-G1 | **Oui** |
| Pas d’archi/stack/MVP/POC démarrés | **Oui** |
| DF-G1 validé | **Oui** (D-VAL-9) |
| G7 commit / push / draft PR | **Autorisé** (D-VAL-10) |
| Merge | **Interdit** |
| Prochain cycle | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé documenté | Oui |
| DF-G1 | **VALIDÉ** |
| G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
| Ready for next cycle | **Non** — non sélectionné |
| Ready for merge | **Non** |
| Ready for POC | **Non** |

**Verdict :** `SFIA STUDIO DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |

---

*SFIA Studio — trajectoire et decision pack — D-VAL-10 / G7 autorisé — merge interdit — Morris décide.*
