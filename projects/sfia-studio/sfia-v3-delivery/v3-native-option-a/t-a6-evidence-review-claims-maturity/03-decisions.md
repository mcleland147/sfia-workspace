# 03 — T-A6 Morris Decisions Materialization

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Décision / conception fonctionnelle (Critical) |
| **Gate** | `GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD arbitration** | `d2d4cf5bee8d956ae9bc3ad899bce89a5d09d0b7` |
| **Source decision pack** | `02-arbitration.md` + handoff blob `f1b43063f494a86b620763500bf98bf6940d704e` |
| **Modeled / runtime** | **NONE** modifié |
| **Horodatage** | 2026-07-26 01:12:00 CEST (+0200) |
| **Statut** | **DECISIONS APPROVED BY MORRIS** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DECISIONS RECORDED — MODELED MATERIALIZATION REQUIRES MORRIS GO` |

---

## 1. Autorité

Morris a fourni des choix **explicites** pour D-T-A6-01…12.

Ce cycle **enregistre** ces décisions dans Git. Il ne les invente pas, ne les élargit pas, et n’ajoute aucune décision supplémentaire.

| Rôle | Autorité |
|------|----------|
| Morris | décisions D-T-A6-01…12 |
| Cursor | transcription documentaire fidèle |
| Git | commit local + handoff L3 |

### CKC

| Item | Valeur |
|------|--------|
| Cycle | décision |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |

---

## 2. Décisions héritées (non re-votées)

| ID | Contenu | Source |
|----|---------|--------|
| M-OA-07 | Evidence ≠ ReviewBundle ≠ ClaimEvaluation | modeled |
| M-OA-08 | Maturité sans auto-promotion ; `autoPromoted=false` | modeled / schema |
| T-A5 D10 | T-A5 technique only ; Evidence/Claim/maturity = T-A6 | T-A5 |

---

## 3. Décisions Morris D-T-A6-01 … D-T-A6-12

Chaque décision porte le statut **`APPROVED BY MORRIS`**.

### D-T-A6-01 — Evidence ownership

**Formulation Morris exacte :**
`D-T-A6-01 = OPTION C — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- Evidence = entité T-A6 indépendante (`ev:`) ;
- provenance, intégrité, lifecycle et bindings explicites ;
- ExecutionAttempt peut être source primaire mais **n’est pas owner** ;
- sources manuelles et externes possibles ;
- ReviewBundle reste l’agrégat de cohérence de revue.

**Non validé :** schéma runtime, stockage physique.

**Impacts futurs :** modeled (bindings/docs) ; runtime T-A6 (pas T-A5).

---

### D-T-A6-02 — Conservation Evidence

**Formulation :**
`D-T-A6-02 = OPTION C — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- modèle logique **hybride** ;
- metadata et digest canoniques internes ;
- payload interne ou externe selon classification, disponibilité, rétention et legal hold ;
- aucun fournisseur/produit choisi ;
- U-M02 reste **OPEN** ;
- Evidence obligatoire indisponible **ne peut pas** supporter un PASS.

**Non validé :** technologie, architecture physique.

---

### D-T-A6-03 — ReviewBundle

**Formulation :**
`D-T-A6-03 = OPTION A+D — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- ReviewBundle = agrégat autonome versionné (`rb:`) ;
- draft mutable sous OCC ;
- freeze obligatoire avant review/verdict ;
- version gelée immutable ;
- verdict lié à id + version exacte ;
- correction = nouvelle version ou nouvelle review ;
- v1 : `ready_for_review` ≡ sémantique de `frozen`, sauf contradiction démontrée ultérieure.

**Invariant :** pas de verdict sur bundle non gelé.

---

### D-T-A6-04 — Claim / ClaimEvaluation

**Formulation :**
`D-T-A6-04 = OPTION B — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- séparation **sémantique** Claim / ClaimEvaluation ;
- implémentation physique v1 **unifiée** dans ClaimEvaluation (`clm:`) ;
- porte : définition, type, règles, Evidence requise, statut, reviewer, confirmation, waiver, dispute ;
- R-M01 reste **OPEN** jusqu’à matérialisation et validation du schema.

**Non validé :** contenu exact du schema ClaimEvaluation.

---

### D-T-A6-05 — Critical matrix

**Formulation :**
`D-T-A6-05 = OPTION D — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- matrice fermée type × criticité ;
- non-Critical déterministe borné : L3 possible ;
- Critical : système propose, humain autorisé confirme ;
- claims structurants / maturité structurante : Morris ;
- auteur système/agent ne valide pas son propre claim Critical ;
- NOT_PROVEN, FAIL, WAIVED, PASS restent **distincts**.

---

### D-T-A6-06 — Authority matrix

**Formulation :**
`D-T-A6-06 = RECOMMENDED AUTHORITY MATRIX — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

| Acteur | Autorisé | Interdit |
|--------|----------|----------|
| Système | proposition ; contrôles déterministes | confirmer Critical ; fermer réserve humaine ; Morris ; authz exécution |
| Agent T-A5 | artefacts / refs techniques | Evidence validée ; Claim confirmé |
| N1 / N2 / N3 | revue selon scope | N3 ≠ Morris |
| Morris | claims/maturité/réserves/waivers structurants | — |
| Service / adapter | fournir artefact | juger conformité |

Séparation auteur/reviewer obligatoire pour Critical.

---

### D-T-A6-07 — Maturity

**Formulation :**
`D-T-A6-07 = OPTION C — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- maturité proposée puis confirmée ;
- assessment versionné (`mat:`) ;
- proposition dérivée de claims et Evidence ;
- confirmation humaine explicite ;
- Morris pour niveau structurant ;
- `autoPromoted=false` ;
- downgrade si preuve/claim invalidé ;
- supersession plutôt que réécriture ;
- aucune moyenne ne masque une dimension bloquante ;
- maturité ≠ autorisation d’exécution.

---

### D-T-A6-08 — Réserves et maturité

**Formulation :**
`D-T-A6-08 = OPTION D — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- réserves bloquent dimensions/niveaux associés ;
- réserve HARD bloque assertion incompatible ;
- PASS de claims **ne ferme** aucune réserve ;
- waiver ≠ fermeture : explicite, motivé, horodaté, autorisé, réversible ;
- système ne ferme aucune réserve structurante.

---

### D-T-A6-09 — Stockage et rétention

**Formulation :**
`D-T-A6-09 = PRINCIPLES PACK — APPROVED`

**Statut :** APPROVED BY MORRIS

**Principes validés :**

metadata canonique interne · payload séparé · digest/CAS quand applicable · classification obligatoire · bornes taille/nombre · rétention par classe · indisponibilité explicite · effacement et legal hold · chiffrement · contrôle d’accès · export borné · purge · déduplication · reconstruction.

**Non décidé :** technologie · fournisseur · architecture physique finale.

**U-M02 reste OPEN.**

---

### D-T-A6-10 — Frontière T-A6 / T-A7

**Formulation :**
`D-T-A6-10 = T-A6/T-A7 BOUNDARY — APPROVED`

**Statut :** APPROVED BY MORRIS

| T-A6 | T-A7 |
|------|------|
| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, findings/dette de review, reco de gate | cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale |

T-A6 **ne lance pas** T-A7. Aucune exécution réelle ouverte par T-A6.

---

### D-T-A6-11 — Automatisation

**Formulation :**
`D-T-A6-11 = L0–L3 DEFAULT / L4 GATED / L5 OUT — APPROVED`

**Statut :** APPROVED BY MORRIS

| Niveau | Contenu |
|--------|---------|
| L0 | revue manuelle assistée |
| L1 | présence, intégrité, cohérence |
| L2 | génération guidée bundles/claims |
| L3 | évaluation déterministe bornée non-Critical |
| L4 | orchestration sous gates Morris |
| L5 | hors cible |

**Interdit :** maturité auto-confirmée ; réserve humaine auto-fermée ; prochain cycle auto-lancé.

---

### D-T-A6-12 — Output contract

**Formulation :**
`D-T-A6-12 = OUTPUT CONTRACT WITHOUT AUTO NEXT CYCLE — APPROVED`

**Statut :** APPROVED BY MORRIS

**Sorties autorisées :** Evidence refs · ReviewBundle versionné · ClaimEvaluation · MaturityAssessment proposé/confirmé · Debt/Reserve refs · Findings · verdict de revue · recommandation de gate/cycle correctif.

**Sorties interdites :** lancement auto cycle suivant · mutation Trajectory non autorisée · autorisation d’exécution · fermeture implicite de réserve · promotion Option A · décision Morris implicite.

Propagation LPS sous réserve **B5 OPEN**.

---

## 4. Synthèse des 12 décisions

| ID | Formulation Morris | Statut |
|----|-------------------|--------|
| D-T-A6-01 | OPTION C — APPROVED | APPROVED BY MORRIS |
| D-T-A6-02 | OPTION C — APPROVED | APPROVED BY MORRIS |
| D-T-A6-03 | OPTION A+D — APPROVED | APPROVED BY MORRIS |
| D-T-A6-04 | OPTION B — APPROVED | APPROVED BY MORRIS |
| D-T-A6-05 | OPTION D — APPROVED | APPROVED BY MORRIS |
| D-T-A6-06 | RECOMMENDED AUTHORITY MATRIX — APPROVED | APPROVED BY MORRIS |
| D-T-A6-07 | OPTION C — APPROVED | APPROVED BY MORRIS |
| D-T-A6-08 | OPTION D — APPROVED | APPROVED BY MORRIS |
| D-T-A6-09 | PRINCIPLES PACK — APPROVED | APPROVED BY MORRIS |
| D-T-A6-10 | T-A6/T-A7 BOUNDARY — APPROVED | APPROVED BY MORRIS |
| D-T-A6-11 | L0–L3 DEFAULT / L4 GATED / L5 OUT — APPROVED | APPROVED BY MORRIS |
| D-T-A6-12 | OUTPUT CONTRACT WITHOUT AUTO NEXT CYCLE — APPROVED | APPROVED BY MORRIS |

**Aucune recommandation additionnelle transformée en décision.**

---

## 5. Invariants consolidés (décisions)

- Evidence liée + provenance + intégrité (D-T-A6-01/02)
- Bundle gelé avant verdict (D-T-A6-03)
- PASS impossible si Evidence obligatoire absente/indisponible (D-T-A6-02/05)
- NOT_PROVEN ≠ FAIL ≠ WAIVED ≠ PASS (D-T-A6-05)
- Self-review Critical interdit (D-T-A6-05/06)
- N3 ≠ Morris (D-T-A6-06)
- `autoPromoted=false` ; downgrade possible (D-T-A6-07)
- Réserves bloquent niveaux associés ; PASS ≠ fermeture (D-T-A6-08)
- Maturité ≠ autorisation d’exécution (D-T-A6-07/12)
- Pas d’auto next cycle (D-T-A6-11/12)

---

## 6. Réserves existantes (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** — HARD exécution réelle Critical |
| R-T-A3-2 | **OPEN** — HARD exécution réelle |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — ClaimEvaluation schema |
| U-M02 | **OPEN** — stockage Evidence physique |

---

## 7. Traitement documentaire R-T-A6-1 … R-T-A6-9

Morris n’a **pas** créé ces IDs comme réserves validées. Traitement :

| ID | Traitement | Couverture |
|----|------------|------------|
| R-T-A6-1 | risque suivi candidat | D-T-A6-01/02 |
| R-T-A6-2 | invariant/risque (pas réserve autonome) | D-T-A6-03 |
| R-T-A6-3 | invariant Critical | D-T-A6-05/06 |
| R-T-A6-4 | invariant | D-T-A6-05 |
| R-T-A6-5 | risque | D-T-A6-07/08 |
| R-T-A6-6 | invariant | D-T-A6-08 |
| R-T-A6-7 | dette/risque sécurité-RGPD | principles + modeled 08/10 |
| R-T-A6-8 | rattacher à **U-M02** | D-T-A6-09 |
| R-T-A6-9 | dette process | gates materialize/validate |

**Aucune CREATE VALIDATED.** Aucune fermeture.

---

## 8. Dettes

| Dette | Lien |
|-------|------|
| Schema ClaimEvaluation | R-M01 |
| Stockage physique Evidence | U-M02 |
| Bindings Evidence multi-objets (docs/schema) | D-T-A6-01 → modeled materialize |
| Bornes numériques taille/count | D-T-A6-09 materialize |
| LPS satellite ids | B5 |
| PII/secret scanning | R-T-A6-7 |

---

## 9. Impacts futurs

### Modeled (sous `GO MATERIALIZE T-A6 MODELED` — non consommé)

- documenter D-T-A6 dans decision pack modeled ;
- enrichir ClaimEvaluation (R-M01) ;
- clarifier bindings Evidence / freeze ReviewBundle ;
- **ne pas** choisir vendor stockage.

### Runtime (hors scope immédiat)

- futur module T-A6 mémoire ;
- **aucune** modification T-A3/T-A4/T-A5 requise par ces décisions ;
- pas d’exécution réelle.

---

## 10. Anti-claims

- Modeled **non** matérialisé / **non** ready ;
- Delivery / runtime / production **non** ready ;
- Technologie de stockage **non** choisie ;
- Réserves **non** fermées / **non** créées validées (R-T-A6-*) ;
- T-A7 **non** ouvert ;
- Exécution réelle **non** autorisée ;
- Push / PR / merge **non** autorisés par ce cycle.

---

## 11. Stop conditions

- Transcrire une décision absente du GO Morris ;
- Fermer B5/R1/R-T-A3/R-M01/U-M02 ;
- Choisir un vendor ;
- Modifier modeled/runtime ;
- Ouvrir T-A7 ;
- Présenter maturité comme autorisation d’exécution.

---

## 12. Gate suivant candidat

`GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

---

## 13. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DECISIONS RECORDED — MODELED MATERIALIZATION REQUIRES MORRIS GO`
