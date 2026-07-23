# SFIA Studio v3 — Cadrage doctrinal (VALIDATED)

| Métadonnée | Valeur |
|------------|--------|
| **Statut doctrinal** | Doctrine SFIA Studio v3 **validée par Morris** · intégration sur `main` en attente de merge |
| **Fondations** | **V3-F01 à V3-F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **SFIA v2.6** | Baseline **historique externe** à Studio · traçabilité d'héritage (`36`) · **jamais** doctrine active / source runtime / fallback Studio |
| **Maturité framing doctrine** | **VALIDATED** (Studio) |
| **Maturité design / modeled / delivery / runtime** | Non réévalués ici · runtime **non migré** · non MODELED/IMPLEMENTED complets · non ADOPTED runtime |
| **Adoption v3 hors Studio** | **Non** |
| **Trajectoire conception** | Option D (co-design borné) — actifs existants soumis à réévaluation (D-V3-04) |
| **Gates consommés** | `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD` · `GO PR READINESS, PUSH ET DRAFT PR — SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE` |
| **Gate suivant** | `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE` |
| **Anti-claims** | Pas runtime v3 actif · Pas migration terminée · Pas READY FOR DELIVERY · Pas baseline globale v3 · Pas suppression v2.6 du repository · Pas merge dans ce cycle |

## Règles d'exclusivité (D-V3-02 · D-V3-03)

1. SFIA Studio consomme **exclusivement** sa doctrine SFIA v3.
2. Le **DoctrinePackage** v3 est la future source doctrinale canonique de Studio.
3. Les CKC Studio sont résolus via la doctrine v3 et ses sources explicitement autorisées.
4. Le contrat natif d'exécution Studio est l'**ExecutionContract** v3.
5. Un export Markdown Cursor peut exister comme **adaptateur technique**, pas comme doctrine ni SoT.
6. SFIA v2.6 reste **externe** à Studio (historique, traçabilité, méthode repository actuelle jusqu'à migration d'outillage) — **pas** consommée comme doctrine produit.

## Décisions de cadrage validées (D1–D8)

| Id | Décision |
|----|----------|
| D1 | v3 exclusivement Studio-native |
| D2 | ReviewBundle hybride (handoff = export/résilience) |
| D3 / R1 | MD = pourquoi · JSON = quoi · SQL = état |
| D4 / R2 | Enforcement E0–E4 |
| D5 / R3 | SQL transactionnel + audit append-only |
| D6 / R4 | Maturité DOCUMENTED…ADOPTED |
| D7 / R5 | Pas de migration générale historiques |
| D8 | Option D trajectoire validée |

## Décisions de validation doctrinale (D-V3-01…05)

| Id | Décision |
|----|----------|
| D-V3-01 | V3-F01…F15 validées comme fondations Studio v3 |
| D-V3-02 | Doctrine exclusive SFIA v3 pour Studio |
| D-V3-03 | Aucune coexistence doctrinale opérationnelle v2.6/v3 |
| D-V3-04 | Réévaluation des actifs Studio existants (conserver / adapter / remplacer / retirer / preuve historique) |
| D-V3-05 | Commit · push branche · draft PR · handoff autorisés · **pas** de merge |

Détail : document `37`.

## Décisions UX validées (réf. 87–89 — hors main)

CC-D01 · CC-D03 · CC-D05 · CC-D06 · CC-D12 · CC-D13 — contraintes intégrées dans `30` / `34` / `37`.

## Couches et maturité réelle

| Couche | Rôle | Maturité réelle |
|--------|------|-----------------|
| Framing (`sfia-v3-framing`) | Doctrine validée Studio | **VALIDATED** (doctrine) · merge pending |
| Design (`sfia-v3-design`) | Conception fonctionnelle | À réévaluer (D-V3-04) |
| Modeled (`sfia-v3-modeled`) | Contrats / schemas | À enrichir après gate modeled |
| Delivery (`sfia-v3-delivery`) | Implémentation | À réévaluer · **non** = runtime v3 |
| Runtime Studio | Exécution produit | **Non migré** vers doctrine v3 |

## Index framing (01–37)

| # | Fichier |
|---|---------|
| 01–22 | Cadrage consolidé (clôture) |
| 23 | ReviewBundle & lifecycle |
| 24 | Sources MD/JSON (R1) |
| 25 | Enforcement E0–E4 (R2) |
| 26 | SQL & audit (R3) |
| 27 | Maturité & éligibilité (R4) |
| 28 | Projets historiques (R5) |
| 29 | Option D & slices D1–D3 |
| **30** | Doctrine connaissance, contexte, décision humaine (V3-F01, F05) |
| **31** | DoctrinePackage & résolution sources (V3-F03, F07) |
| **32** | Living Project State & trajectoire (V3-F02, F06, F09) |
| **33** | Épistémologie & contradictions (V3-F04, F08) |
| **34** | Agents, réversibilité, stop conditions (V3-F11, F12) |
| **35** | Artefacts, dette, apprentissage, maturité (V3-F10, F13–F15) |
| **36** | Matrice d'héritage historique v2.6 → concepts Studio v3 |
| **37** | Pack fondations & décisions Morris de validation |

## Dette et réserves (courtes)

| ID | Réserve |
|----|---------|
| VAL-R01 | Runtime / design / modeled / delivery non migrés |
| VAL-R02 | Dépendances v2.6 dans le code non auditées (hors périmètre PR) |
| VAL-R03 | Schemas DoctrinePackage / LPS non créés |
| VAL-R04 | UX 87–89 hors `main` |
| VAL-R05 | Onze CKC détaillés absents (fallback silencieux carte synthétique v3) |
| VAL-R06 | Merge soumis à GO Morris distinct |

## Prochaines étapes

1. Review Morris de la draft PR.
2. Merge si GO Morris.
3. Audit dépendances v2.6 dans les actifs Studio.
4. `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3 FOUNDATIONAL CONTRACTS` (après merge / gate dédié).
5. Réévaluation design / delivery / UX (D-V3-04).

## Verdict

**SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE VALIDATED — DRAFT PR PENDING MERGE**
