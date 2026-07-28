# 08 — Morris decision pack — ouverture T-A7

| Champ | Valeur |
|-------|--------|
| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
| **Statut** | `MORRIS DECISION REQUIRED` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7 actuel** | `NOT OPEN` |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Présélection** | **aucune** |

---

## Question

**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**

---

## Options

### O1 — Ne pas ouvrir

Conditions insuffisantes ou blockers non traités.

- **Effet :** T-A7 reste `NOT OPEN` ; aucun code ; poursuivre blockers documentaires.
- **Réversibilité :** totale.
- **Dette :** faible (cadrage seulement).

### O2 — Ouvrir uniquement la préparation technique

Autoriser un lot borné de **design technique / tests** (contrats, specs, tests non branchés runtime legacy), **sans** delivery, **sans** mod `method/**` / OPS1 / MethodMode runtime, **sans** cutover.

- **Effet :** T-A7 pourrait passer à un état « prep only » **si** Morris le définit explicitement ; sinon rester `NOT OPEN` avec gate prep distinct.
- **Réversibilité :** haute (R0/R1).
- **Dette :** moyenne (specs/tests).

### O3 — Ouvrir un premier lot de développement borné

Uniquement si F03.3 est satisfait **et** blockers obligatoires maîtrisés.

- **État actuel :** **non supporté** par les preuves (F03.3 partiel · OPS1 non validé · P06–P09/P11 MISSING · F11/F13 non livrés).
- **Réversibilité :** moyenne/faible selon fichiers touchés.
- **Dette :** élevée si ouvert trop tôt.

### O4 — Custom / différer

Exemples : valider d’abord le contrat OPS1 ; lancer campagne preuves UNKNOWN ; borner un micro-cycle doc-only de satisfaction F03.3.

---

## Recommandation repo-informed (non décisionnelle)

**Statut :** `RECOMMENDED — NOT DECIDED`

**Recommandation Cursor/ChatGPT :** **O1** (ne pas ouvrir), avec enchaînement documentaire vers traitement des blockers ; **O2** uniquement si Morris impose un gate prep **strictement** borné (design/tests, fichiers protégés listés, aucune delivery).

**Ne pas choisir O3** sur la base des preuves actuelles.

### Preuves

- matrice P03–P11 : 0 SATISFIED / 4 PARTIAL / 5 MISSING ;
- OPS1 : `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` ;
- F11.2 / F13.4 : absents runtime ;
- HARD / B5 / R1 / R-M01 : `OPEN` ;
- rollback R1–R3 : `NOT TESTED`.

### Blockers (résumé)

Voir `07` §3.

### Risques si ouverture prématurée

- retrait / mod method sans remplacement (SC-02/SC-05) ;
- double identité OPS1/v3 (SC-12) ;
- cutover aveugle sans F11.2 ;
- mutation historique sans F13.4 ;
- bypass HARD / B5.

### Dette

- sur-cadrage si O2 mal borné ;
- sous-cadrage si O3.

### Réversibilité

- O1/O4 : maximale ;
- O2 : R0/R1 ;
- O3 : dépend du lot.

### Périmètre candidat d’un premier lot (si O2 ultérieur)

| Inclus candidat | Exclu / protégé |
|-----------------|-----------------|
| Specs contrats F11.2 read API | `method/**` |
| Design tests E-OPS-03 / E-F13-* | `app/lib/ops1/**` runtime |
| Docs runbook R1 | MethodMode runtime / DB |
| Mesure volumes (read-only) | delivery · cutover · IAM select |

### Fichiers protégés (non modifiables sans gate dédié)

- `method/**`
- `app/lib/ops1/**` · features/routes OPS1
- `app/lib/d1/**` MethodMode
- runtime / modeled / workflow / CI (hors tests purement additifs explicitement gated)

### Tests candidats

Voir `05` §3 — **non écrits** ici.

### Gate Morris exact (candidat, non consommé)

Si F03.3 reste partiel :

```
GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN
```

Si Morris valide ultérieurement F03.3 SATISFIED :

```
GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
```

---

## Bulletin — champs de décision

### D-T-A7-OPEN

| Champ | Valeur |
|-------|--------|
| **Question** | Ouvrir T-A7 pour un premier lot borné ? |
| **Options** | O1 · O2 · O3 · O4 |
| **Recommandation** | O1 (primaire) · O2 conditionnel · pas O3 |
| **Impacts** | gouvernance trajectoire retrait legacy |
| **Dette** | voir ci-dessus |
| **Réversibilité** | O1/O4 haute · O2 moyenne-haute · O3 variable |
| **Gate futur** | selon option |
| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · O3 ≠ cutover · ouverture ≠ MethodMode removed |
| **Champ** | `MORRIS DECISION REQUIRED` |

**Aucune option n’est pré-cochée comme décision.**

---

## Garde-fous

- F03.3 / F11.2 / F13.4 inchangées (`DECIDED`) ;
- combinaison inchangée ;
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
- T-A7 `NOT OPEN` ;
- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.

---

## Verdict section

`MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — RECOMMENDATION O1 (O2 CONDITIONAL) — O3 NOT SUPPORTED BY EVIDENCE — T-A7 NOT OPEN`
