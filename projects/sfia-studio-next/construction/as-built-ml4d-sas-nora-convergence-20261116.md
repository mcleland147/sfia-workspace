# As-built — ML4D Sas Nora convergence (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création D2 |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base | UX-004 `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | `docs/next-ml4d-sas-nora-convergence-20261116@22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` frames `607:3` … `607:277` (consultés, non modifiés) |
| Lane | DEV only — RECETTE inchangée |

## Architecture retenue

1. **Un seul tour Nora** (`postUserMessageAndNora`) produit la qualification durable existante.
2. **Projection D2** dérivée de cette qualification (`draftProjectionFromQualification`) — pas de second appel modèle, pas de scraping Markdown comme autorité.
3. Persistance additive `preparations.projection_json` (migration `013`) alignée sur `creation_revision` (CAS).
4. `previewName` / `previewSummary` synchronisés depuis la même révision (pas de double vérité divergente).
5. Création inchangée : `POST …/create-project` → `createProjectCommand` (idempotence, fingerprint, expectedCreationRevision).
6. **Unicité de nom même Pilote** : contrôle applicatif dans la transaction (normalisation trim/espaces/casse ; accents conservés). **Pas de contrainte UNIQUE SQL** (collisions historiques PF-CRE-14 possibles).

## UI

- Aperçu vivant (`PreparationProposal`) : intention / nom / ouverts / appréciation qualitative.
- « Constituer une proposition » n’est plus le parcours principal ; « Ajuster l’aperçu » reste secondaire (testid `prep-constitute` pour non-régression e2e).
- Rail sas minimal : Portefeuille + Préparation en cours (plus de Travail/Pilotage/Documents/Journal désactivés).

## Contradiction normative

| Source | Règle |
| --- | --- |
| PF-CRE-14 (R2 design) | Deux projets de même nom, identités distinctes |
| Arbitrage Morris 16/11/2026 | Unicité par Pilote |

Implémentation locale = intention produit Morris. **Régularisation R2 non publiée.** Réception finale ne peut pas déclarer la règle « totalement gouvernée » tant que PF-CRE-14 n’est pas arbitrée.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT | `preparation-projection`, `studio-rail` PASS |
| PG REAL (`sfia_next_e2e`) | create-project + projection CAS + unicité nom PASS |
| BROWSER/FAKE | ciblé (voir Review Pack) |
| NORA LIVE | **NOT PROVEN** (fixture FAKE) |
| MORRIS UI REVIEW | **PENDING** |

## Rollback

- Code : revert commit candidat.
- Schéma : `ALTER TABLE preparations DROP COLUMN projection_json;` (réversible, non destructif sur preview legacy).
