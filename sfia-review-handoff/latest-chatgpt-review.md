# ChatGPT Review Pack — FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-24 06:47:05 CEST (+0200) |
| **Cycle** | Delivery |
| **Profil** | Critical |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A1` |
| **Repository** | mcleland147/sfia-workspace |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **HEAD initial** | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **HEAD final** | `262d274b82573585e373448e7a4f94e9c5419e9a` |
| **Base / merge-base** | `origin/main` @ `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **Push projet** | **aucun** |
| **PR / merge** | **non exécutés** |
| **T-A2** | **non démarré / non autorisé** |
| **method/**** | **hors scope / inchangé** |
| **package.json** | **inchangé** |
| **Schemas modeled** | **inchangés** (lecture seule) |
| **SQL migrations** | **aucune** |
| **Handoff source attendu (pré-cycle)** | blob `c5cdccdca347b254d6573f306d110a37a9a78ada` |
| **Niveau** | FULL |

## 1. Truth Check

| Check | Résultat |
|-------|----------|
| Date Europe/Paris | 2026-07-24 06:47:05 CEST (+0200) |
| `origin/main` | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| PR #261 | MERGED (T-A0) — base du cycle |
| Branche T-A1 | créée depuis `8013c713…` ; 3 commits locaux |
| Handoff pré-cycle blob | `c5cdccdca347b254d6573f306d110a37a9a78ada` présent |
| Locks / rebase / merge en cours | aucun |
| Concurrent T-A1 PR | aucune au démarrage |

**Verdict Truth Check :** **PASS**

## 2. Définition canonique T-A1

| Champ | Valeur |
|-------|--------|
| **Source** | `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` |
| **Nom** | T-A1 — Project/LPS repos, versioning, conflict |
| **Dépend** | T-A0 |
| **Preuve** | optimistic lock tests |
| **Rollback** | restore snapshot |
| **Correspondance** | **MATCH** Project/LPS Foundation |

## 3. CKC / Sources consommées

- Architecture Option A docs 01–13 (AT-OA Project/LPS, slices)
- Modeled schemas: `project.schema.json`, `living-project-state.schema.json`, ErrorRecord, identifier, provenance, doctrine-package-ref
- T-A0 barrel `@/lib/oa/doctrine` (resolver, pin/ref, ClockPort, FixedClock/SystemClock, ActorReference, ProvenanceRecord)
- Fixtures doctrine: `pkg:studio-v3-oa` @ `1.0.0` digest `sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622`

## 4. Architecture livrée

Modular monolith sous `projects/sfia-studio/app/lib/oa/project/` :

```
domain/     types, errors, invariants
application/ CreateProject, GetProject, GetCurrentLivingProjectState,
             GetLivingProjectStateVersion, AppendLivingProjectStateVersion
ports/      ProjectRepository, LivingProjectStateRepository, ProjectAuditJournal
infrastructure/ MemoryProjectStore (+ transactional), memory repos, observability
index.ts    createInMemoryProjectServices / createTestProjectServices
```

- Domain n’importe **pas** l’infra filesystem doctrine
- Persistence **in-memory only** — NOT DATABASE SELECTED (réversible via ports)

## 5. Project / LPS / Doctrine pin

### CreateProject
1. IdempotencyKey optionnelle → retourne Project existant
2. Valide ids `prj:` / fields
3. `DoctrinePackageResolverPort.resolve({pin})` — seul `resolved` accepté
4. Transaction atomique : Project `active` + LPS v1 `active` + provenance
5. Audit `oa.project.created`

### AppendLivingProjectStateVersion
1. `expectedVersion === current.version` sinon `LPS_VERSION_CONFLICT` → modeled `STATE_CONFLICT`
2. Pin optionnel doit matcher `Project.doctrinePackageRef` (id+version+digest) — pas de re-resolve
3. Nouvelle version = current+1 ; précédent → `superseded` ; `Project.currentLpsVersionId` / `updatedAt` mis à jour
4. Audit `oa.lps.version_appended` / `oa.lps.version_conflict`

### Limites
- `MAX_LPS_SNAPSHOT_BYTES = 256_000`

## 6. Erreurs

| DetailCode | Modeled code |
|------------|--------------|
| DOCTRINE_UNRESOLVED | DOCTRINE_UNRESOLVED |
| LPS_VERSION_CONFLICT, PROJECT_*, LPS_*, PERSISTENCE_FAILURE | STATE_CONFLICT |

Structure : code + detailCode + safe message + internalCauseRef opaque ; domain `C`.

## 7. Observabilité

Events : `oa.project.created`, `oa.lps.version_appended`, `oa.lps.version_conflict`, `oa.project.load_failed` — **sans** snapshot complet.

## 8. Fichiers créés (24)

```
A	projects/sfia-studio/app/__tests__/oa/project/antiLegacy.test.ts
A	projects/sfia-studio/app/__tests__/oa/project/projectLpsFoundation.test.ts
A	projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
A	projects/sfia-studio/app/lib/oa/project/application/createProject.ts
A	projects/sfia-studio/app/lib/oa/project/application/getCurrentLivingProjectState.ts
A	projects/sfia-studio/app/lib/oa/project/application/getLivingProjectStateVersion.ts
A	projects/sfia-studio/app/lib/oa/project/application/getProject.ts
A	projects/sfia-studio/app/lib/oa/project/domain/errors.ts
A	projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
A	projects/sfia-studio/app/lib/oa/project/domain/types.ts
A	projects/sfia-studio/app/lib/oa/project/index.ts
A	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryLivingProjectStateRepository.ts
A	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
A	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
A	projects/sfia-studio/app/lib/oa/project/infrastructure/observability.ts
A	projects/sfia-studio/app/lib/oa/project/ports/livingProjectStateRepositoryPort.ts
A	projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
A	projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/01-scope-and-canonical-slice-definition.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/02-domain-contracts-and-invariants.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/03-persistence-consistency-and-failure-modes.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/04-tests-evidence-and-reserves.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/05-delivery-validation-and-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/README.md
```

**Shortstat :** 24 files changed, 2584 insertions(+)

Hors scope absents : `method/**`, modeled schemas, `package.json`, SQL, UI, OPS1 runtime, T-A2+.

## 9. Commits locaux (3)

```
262d274 docs(sfia-studio): document Option A T-A1 delivery
fc8a51a test(sfia-studio): validate T-A1 Project and LPS invariants
090e7be feat(sfia-studio): add v3 Project and LPS foundation
```

## 10. Tests / validations

| Suite | Résultat |
|-------|----------|
| `vitest __tests__/oa/project` | **20/20 PASS** (16 foundation + 4 anti-legacy) |
| `vitest __tests__/oa/doctrine` | **28/28 PASS** (régression T-A0) |
| `vitest platform + fixtures` | **10/10 PASS** |
| `tsc --noEmit` | **PASS** |
| `next lint` (`lib/oa`, `__tests__/oa`) | **PASS** |
| `next build` | **PASS** |
| `git diff --check` | **PASS** |
| Secrets probe | **PASS** |
| SQL / package.json / modeled schema edits | **ABSENT** |

## 11. Décisions candidates T-A1-D01…D10

| ID | Sujet | Statut |
|----|-------|--------|
| T-A1-D01 | Boundaries Project/LPS module | CANDIDATE |
| T-A1-D02 | Identité prj/lps/prv + LPS v1 | CANDIDATE |
| T-A1-D03 | Snapshot versionné + audit minimal | CANDIDATE |
| T-A1-D04 | Optimistic concurrency expectedVersion | CANDIDATE |
| T-A1-D05 | Doctrine pin persist (resolve create / match append) | CANDIDATE |
| T-A1-D06 | In-memory repos (NOT DATABASE SELECTED) | CANDIDATE |
| T-A1-D07 | Audit journal minimal | CANDIDATE |
| T-A1-D08 | Detail codes → STATE_CONFLICT / DOCTRINE_UNRESOLVED | CANDIDATE |
| T-A1-D09 | MAX_LPS_SNAPSHOT_BYTES=256_000 | CANDIDATE |
| T-A1-D10 | Readiness foundation-only | CANDIDATE |

Détail : `sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/05-delivery-validation-and-decision-pack.md`

## 12. Réserves / dette

1. Persistance mémoire seulement
2. Detail codes hors enum ErrorRecord modeled
3. Mapping NOT_FOUND/INVALID → STATE_CONFLICT (approximation)
4. Pas de re-verify digest à l’append
5. Module non branché UI/session
6. Pas de métriques runtime

## 13. Anti-claims

- Pas T-A1 MERGED / VALIDATED (Morris)
- Pas T-A2 AUTHORIZED
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED
- Pas push / PR / merge projet

## 14. Diff stat

```
.../app/__tests__/oa/project/antiLegacy.test.ts    | 100 +++++
 .../oa/project/projectLpsFoundation.test.ts        | 450 +++++++++++++++++++++
 .../application/appendLivingProjectStateVersion.ts | 261 ++++++++++++
 .../lib/oa/project/application/createProject.ts    | 262 ++++++++++++
 .../application/getCurrentLivingProjectState.ts    | 110 +++++
 .../application/getLivingProjectStateVersion.ts    | 125 ++++++
 .../app/lib/oa/project/application/getProject.ts   |  85 ++++
 .../app/lib/oa/project/domain/errors.ts            |  89 ++++
 .../app/lib/oa/project/domain/invariants.ts        | 180 +++++++++
 .../sfia-studio/app/lib/oa/project/domain/types.ts | 211 ++++++++++
 projects/sfia-studio/app/lib/oa/project/index.ts   | 130 ++++++
 .../memoryLivingProjectStateRepository.ts          |  58 +++
 .../infrastructure/memoryProjectRepository.ts      |  41 ++
 .../project/infrastructure/memoryProjectStore.ts   |  89 ++++
 .../lib/oa/project/infrastructure/observability.ts |  18 +
 .../ports/livingProjectStateRepositoryPort.ts      |  18 +
 .../oa/project/ports/projectAuditJournalPort.ts    |  50 +++
 .../lib/oa/project/ports/projectRepositoryPort.ts  |  13 +
 .../01-scope-and-canonical-slice-definition.md     |  48 +++
 .../02-domain-contracts-and-invariants.md          |  62 +++
 ...03-persistence-consistency-and-failure-modes.md |  69 ++++
 .../04-tests-evidence-and-reserves.md              |  33 ++
 .../05-delivery-validation-and-decision-pack.md    |  48 +++
 .../t-a1-project-lps-foundation/README.md          |  34 ++
 24 files changed, 2584 insertions(+)
```

## 15. Working tree

Propre hors `.tmp-sfia-review/` (untracked review artifacts).

## 16. Handoff

Publication bornée attendue sur `sfia/review-handoff` via `publish-review-handoff.sh` — message :

`docs(review-handoff): publish Studio Option A T-A1 delivery review`

## 17. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A1 PROJECT/LPS FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED**
