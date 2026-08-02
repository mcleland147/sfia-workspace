# V3.1-D2-A — Catalog Projection

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 03:26 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation |
| Profil | Standard |
| Typologie | EVOL |
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| Base / HEAD | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Statut | `PR READINESS COMPLETE — READY FOR PR WITH RESERVES — QA-G3 ACCEPTED — NO COMMIT/PUSH/PR` |

Le profil Standard est proportionné à un diff de fonctions de domaine pures,
types readonly, constante statique et tests, sans resolver, infrastructure,
mutation, UI, dépendance ni changement d'architecture.

## B. Gate Morris

Gate consommé le 2026-08-02 à 03:16 CEST :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## C. Sources

Template d'exécution SFIA, routing guide, operating model, guardrails,
validation checklist, engineering principles, delivery pipeline, carte CKC,
matrice CKC, méthode cycle §4.8, documents D2 `15` à `19`, backlog `08`,
README framing, contrat catalogue D1, types/erreurs/invariants/index T-A2,
tests cycle OA, README D1 et configurations TypeScript/Vitest/Next.

CKC : contrat détaillé absent ; fallback carte synthétique + méthode §4.8,
statut `method-candidate`, guidance cognitive expérimentale,
`executionAuthority=false`.

## D. Git Truth et transition de branche

- branche initiale : `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` ;
- `HEAD = main = origin/main = e1befcb8…` ; divergence `0/0` ;
- staged vide ; état documentaire attendu uniquement ;
- 77 worktrees ; prune dry-run vide ;
- branche Delivery locale et distante absentes ;
- handoff source : tip `dbb4e80…`, blob `85596ce…` ;
- branche créée localement, sans commit ni push ;
- empreintes SHA-256 de `15` à `19`, `08` et README identiques avant/après.

## E. Stories consommées

- BL-D2-A-01 — contrats dédiés et projection contractuelle ;
- BL-D2-A-02 — fingerprint statique et garde SHA-256 ;
- BL-D2-A-03 — projection pure et fail-closed ;
- BL-D2-A-04 — tests et non-régression.

## F. Décisions TA consommées

TA-01, TA-02, TA-03, TA-06 et la partie locale de TA-09 sont implémentées.
TA-04/05/07 appartiennent à D2-B ; TA-08/11 à D2-C ; TA-10 à D2-B/C.
TA-12 est respectée : D2-B et D2-C restent fermés.

## G. Périmètre

Contrats D2-A, projection fermée du catalogue, sérialisation canonique,
HASH-A statique, contrôle SHA-256 test-only, projection de sélection pure,
erreurs locales, exports additifs, tests et documentation.

## H. Hors périmètre

Resolver, manifest CKC, preuve de consommation, bridge QualifyCycle,
résultat global D2, audit, factory, infrastructure, CreateCycle, mutation,
UI, API, D2-B, D2-C, D2-D et D3.

## I. Contrats D2-A

`CatalogSelectionContext` conserve `cycleTypeId`, `catalogVersion`,
`catalogHash`, `correlationId`. `CatalogFingerprintEntry` ferme exactement
les champs identitaires, lifecycle, numéro de méthode et mapping CKC.
`ValidatedCycleTypeProjection` expose présentation D1, lifecycle, mapping CKC,
version, hash et corrélation, sans profil, décision ni consommation.

## J. Projection contractuelle du fingerprint

La projection conserve l'ordre contractuel des quinze entrées et un ordre fixe
des propriétés. `fallbackReference` absent est normalisé en `null`.
Labels, descriptions, displayOrder, methodReference et aliases sont exclus.

## K. HASH-A et mécanisme de garde

- format : `sha256-canonical-json-v1` ;
- valeur : `sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc` ;
- production : sérialisation JSON déterministe uniquement ;
- test : `createHash("sha256")` depuis `node:crypto`, jamais importé en production ;
- aucun artefact généré, script permanent, package ou changement CI.

## L. Catalog Projection

`projectSelectableCycleType` applique dans l'ordre : corrélation, version,
fingerprint, existence, lifecycle active, puis cohérence du mapping CKC.
Elle accepte un seam de catalogue pur pour les tests négatifs et utilise le
singleton D1 par défaut. Le résultat de succès et le mapping sont gelés.

## M. Erreurs locales

Erreurs structurées, bloquantes et sans projection partielle :
`CATALOG_CORRELATION_ID_REQUIRED`, `CATALOG_VERSION_INCOMPATIBLE`,
`CATALOG_FINGERPRINT_STALE`, `CYCLE_TYPE_UNKNOWN`,
`CYCLE_TYPE_NOT_SELECTABLE`, `CYCLE_TYPE_MAPPING_INVALID`.
`CycleDetailCode` et `CycleStructuredError` restent inchangés.

## N. Fichiers

Créés : trois modules de domaine, deux suites de tests et ce rapport.
Modifiés : barrel `index.ts` par trois exports uniquement, documents framing
`19`, `08` et `README`. Aucun autre fichier projet.

## O. Tests

Baseline avant modification : catalogue D1 **46/46 PASS** ; cycle OA
**94/94 PASS**. D2-A ciblé : fingerprint **8/8 PASS** ; projection
**16/16 PASS**.

## P. Résultats complets

- fingerprint D2-A : **8/8 PASS** ;
- Catalog Projection D2-A : **16/16 PASS** ;
- catalogue D1 historique : **46/46 PASS** ;
- suite `oa/cycle` : **118/118 PASS** ;
- suite complète : **851/851 PASS** ;
- typecheck : **PASS** ;
- lint : **PASS**, aucun warning ni erreur ;
- build Next : **PASS**, compilation et 10 pages statiques ;
- frontières d'import : **PASS**.

Le détail reproductible est conservé dans le review pack et le rapport
temporaire du cycle.

## Q. Diff et volumétrie

Diff borné aux fichiers autorisés. Les documents `12` à `18`, les documents
D1, les dépendances, configurations et modules T-A2 protégés sont inchangés.

## R. Anti-claims

Delivery locale ≠ QA indépendante ; tests verts ≠ PR ready ; mapping CKC ≠
résolution ; fingerprint ≠ preuve de consommation ; projection ≠ bridge
QualifyCycle. Aucun commit/push/PR projet, aucune promotion méthode.

## S. Risques et réserves

Le fingerprint doit être mis à jour explicitement si un champ contractuel D1
change ; le test empêche une dérive silencieuse. `INHERITED-R-01` reste
acceptée, traçable et non levée. D2-B dépend d'une intégration/validation
ultérieure de D2-A et d'un gate Morris distinct.

## T. Readiness QA

La Delivery D2-A est complète localement et prête pour une QA indépendante.
La QA n'est pas exécutée par ce cycle et la PR readiness n'est pas ouverte.

## U. Verdict

```text
V3.1-D2-A CATALOG PROJECTION DELIVERY COMPLETE —
BL-D2-A-01…04 IMPLEMENTED —
STATIC HASH-A AND TEST-ONLY SHA-256 GUARD IMPLEMENTED —
PURE FAIL-CLOSED CATALOG PROJECTION IMPLEMENTED —
D1 PRESERVED —
READY FOR INDEPENDENT QA —
NOT PR READY —
NO D2-B — NO D2-C — NO D2-D — NO D3 —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR
```

## V. QA indépendante — 2026-08-02

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:30:25 CEST (+0200) |
| GO QA | consommé 2026-08-02 04:10 CEST |
| Profil | Critical |
| Tests QA ajoutés | 62 (fingerprint 25 · projection 37) |
| Résultats QA | fingerprint 25/25 PASS · projection 31 PASS / 6 FAIL |
| Réserve | R-QA-D2A-01 bloquante — binding fingerprint/catalogue |
| Verdict Cursor | **FAIL** |
| QA-G3 Morris | non décidé |
| PR readiness | fermée |
| D2-B / D2-C | fermés |
| Correction production | aucune |

Rapport : [`01-qa-validation-report.md`](./01-qa-validation-report.md).

## W. Delivery corrective — R-QA-D2A-01 — 2026-08-02 04:46:44 CEST (+0200)

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:46:44 CEST (+0200) |
| GO correctif | consommé 2026-08-02 04:39 CEST (+0200) |
| Finding | R-QA-D2A-01 — contournement public binding fingerprint/catalogue |
| Cause | hash contextuel lié à la constante, pas au catalogue effectivement utilisé |
| Fichier production modifié | `catalogProjection.ts` uniquement |
| Tests QA | **préservés** (empreintes inchangées) |
| Baseline rouge | 6 FAIL binding reproduits |
| Après correction | projection QA **37/37 PASS** · fingerprint QA 25/25 · Delivery 8+16 · D1 46 · oa/cycle 180 · suite 913 |
| HASH-A | inchangé |
| Crypto runtime / dépendance | aucune |
| Statut | `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED` |
| R-QA-D2A-01 | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
| QA-G3 Morris | non décidé |
| PR readiness | fermée |
| D2-B / D2-C / D3 | fermés |

Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).

## X. QA revalidation — R-QA-D2A-01 — 2026-08-02 13:57:07 CEST (+0200)

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 13:57:07 CEST (+0200) |
| GO revalidation | consommé 2026-08-02 05:31 CEST (+0200) |
| Profil | Critical |
| Tests rejoués | projection QA 37 · fingerprint Delivery/QA 8+25 · projection Delivery 16 · D1 46 · oa/cycle 180 · suite 913 |
| Résultats | **tous PASS** · binding filter 7/7 (6 historiques + seam) |
| Statut R-QA-D2A-01 | `CLOSED — INDEPENDENT QA REVALIDATION PASS` |
| Réserves | aucune bloquante ou majeure |
| Correction pendant QA | **aucune** |
| QA-G3 Morris | **en attente** — NOT DECIDED |
| PR readiness | fermée |
| D2-B / D2-C / D3 | fermés |

Rapport : [`03-qa-revalidation-report.md`](./03-qa-revalidation-report.md).

## Y. PR readiness — 2026-08-02 14:11:00 CEST (+0200)

| Champ | Valeur |
|-------|--------|
| QA-G3 | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST (+0200) |
| PR readiness | exécutée |
| Package | **20 fichiers** confirmés |
| Checks | 913/913 · typecheck/lint/build PASS |
| Verdict | **READY FOR PR WITH RESERVES** |
| Réserves | R-PR-D2A-01…03 mineures · INHERITED-R-01 |
| Staging / commit / push / PR | **non exécutés** |
| D2-B / D2-C / D3 | fermés |

Rapport : [`04-pr-readiness-report.md`](./04-pr-readiness-report.md).
