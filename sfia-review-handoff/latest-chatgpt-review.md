# SFIA Studio first visible slice V1 — PR readiness Review pack FULL

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-29 16:52:43 CEST (+0200) |
| Cycle / profil | 13 — PR readiness (+7/8/9/14/15) / Standard renforcé |
| Typologie | EVOL / DEV / QA / DOC |
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Branche projet | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| HEAD | `ca93e0805b499f9cae6cacd84e37cbb122d89a1c` |
| Base V1 (framing) | `c1955179a36079e060c41a845c2a1950084966c8` |
| Base distante framing / origin/main | `7916066310777abce4fd5a64ff0c87759c375fd6` |
| Handoff parent | commit `57d9001cbef15185a97aa569c83cd29eab934a99` / blob `7bb8c3daff4b0917f383baa8e5819d8d3e7b30d8` |
| Niveau | FULL |
| PR | https://github.com/mcleland147/sfia-workspace/pull/292 |

## Gate consommé

`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Autorisé et exécuté : lecture Git, validation, tests, push, création PR, consultation checks, handoff.  
Non autorisé / non exécuté : merge, force-push, UI V2, Figma, IAM, persistance produit, agent réel, delivery, cutover, fermeture HARD/T-A6/B5/R1/R-M01.

Décisions D-VS :

- D-VS-01→04 : `DECIDED — ADOPTED BY MORRIS`
- D-VS-05 : `NOT DECIDED — NOT CONSUMED`

## Truth check

PASSED.

- workspace/toplevel exacts
- branche exacte
- HEAD exact `ca93e080…`
- aucun upstream avant push
- tracked propre, staged vide
- untracked `.tmp-sfia-review/**` uniquement
- aucune opération Git inachevée
- `origin/main` inchangé à `7916066…` (aucun nouveau commit)
- framing `c1955179` ancêtre de HEAD
- handoff parent SHA/blob exacts

## Sources

- méthode SFIA / operating model / guardrails (fallback)
- pack framing `first-user-visible-vertical-slice-framing/` (README, 03, 06, 08–11 prioritaires)
- handoff parent V1 clock composition
- `app/lib/vertical-slice-core/**`
- tests V1 + T-A0/T-A1/D1/T-A7
- `boundedAtomicAudit.ts` / `db.ts` (lecture)

Cycle Knowledge Contract : recherché ; aucune autorité d’exécution. Fallback méthode + framing + handoff V1.

## Commits (depuis framing base)

| SHA | Message |
|-----|---------|
| `f4337b3` | `feat(sfia-studio): add local project core composition` |
| `7be7e67` | `test(sfia-studio): validate local project core composition` |
| `449213c` | `docs(sfia-studio): document visible slice V1 foundation` |
| `ca93e08` | `fix(sfia-studio): share injected clock across V1 composition` |

Aucun commit supplémentaire non qualifié.

## Diff

Depuis `c1955179..HEAD` (lot V1 code/docs) :

`10 files changed, 1394 insertions(+), 15 deletions(-)`

| Status | Path |
|--------|------|
| A | `app/__tests__/vertical-slice-core/importBoundaries.test.ts` |
| A | `app/__tests__/vertical-slice-core/localProjectComposition.test.ts` |
| A | `app/lib/vertical-slice-core/audit.ts` |
| A | `app/lib/vertical-slice-core/index.ts` |
| A | `app/lib/vertical-slice-core/localProjectComposition.ts` |
| A | `app/lib/vertical-slice-core/localSqliteAudit.ts` |
| A | `app/lib/vertical-slice-core/types.ts` |
| M | framing `08-implementation-backlog-and-slicing.md` |
| A | framing `11-v1-local-project-core-composition.md` |
| M | framing `README.md` |

PR vs `main` inclut aussi le commit framing `c1955179` (pack 01–10 + README initial) → 19 fichiers, +2024 / −0 côté GitHub.

Fichiers interdits absents : `app/app/**`, `components/**`, `features/**`, `vertical-slice` fixtures, harness, package/lockfile, `db.ts`, migrations, `.github`, method, prompts.

## Architecture

```text
future UI
  → LocalProjectFacade
    → T-A0 ResolveDoctrinePackage (registry + AJV + SHA-256)
    → T-A1 CreateProject / GetProject / GetCurrentLivingProjectState
      → MemoryProjectStore transaction
    → optional LocalProjectCreationAuditPort
    → immutable LocalProjectCreationView
```

Chemin : `app/lib/vertical-slice-core/**` — composition interne, pas de domaine parallèle.

Horloge partagée :

```ts
const clock = options.nowIso ? new FixedClock(options.nowIso) : new SystemClock();
const doctrineResolver = new ResolveDoctrinePackage(
  new FilesystemDoctrinePackageRepository({ registryRoot: options.registryRoot }),
  new AjvSchemaValidationAdapter({ schemasRoot: options.schemasRoot }),
  new Sha256DigestVerificationAdapter(),
  clock,
  new MemoryDoctrineAuditJournal(),
);
const projectServices = createInMemoryProjectServices({ doctrineResolver, clock, ... });
```

## Contenu modifié substantiel

### `types.ts` (129 lignes)

```ts
export interface CreateLocalProjectCommand {
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly perceivedCriticality: PerceivedCriticality;
  readonly constraints: readonly string[];
  readonly shortReference?: string;
  readonly idempotencyKey: string;
}

export interface LocalProjectCreationView {
  readonly projectId: string;
  readonly projectName: string;
  readonly shortReference?: string;
  readonly objective: string;
  readonly contextSummary: string;
  readonly perceivedCriticality: PerceivedCriticality;
  readonly constraints: readonly string[];
  readonly doctrine: LocalProjectDoctrineProjection;
  readonly lps: LocalProjectLpsProjection;
  readonly localMode: true;
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "NOT_SELECTED";
  readonly realAgentExecution: "NOT_AVAILABLE";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  readonly source: "REAL_LOCAL_CORE";
  readonly fixture: false;
}
```

### `audit.ts` (49 lignes)

Événements : `LOCAL_PROJECT_CREATION_REQUESTED`, `DOCTRINE_RESOLVED`, `PROJECT_CREATED`, `LPS_INITIALIZED`, `LOCAL_PROJECT_CREATION_FAILED`.  
Adapters : `NoOp`, `Memory`, `Failing` (preuve non-bloquant).

### `localSqliteAudit.ts` (63 lignes)

```ts
export class BoundedSqliteLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort {
  append(event: LocalProjectCreationAuditEvent): void {
    this.store.append({
      opId: event.correlationId,
      idempotencyKey: event.idempotencyKey,
      phase: phaseFor(event),
      outcome: outcomeFor(event),
      correlationId: event.correlationId,
      projectRef: event.projectId ?? null,
      cycleRef: null,
      payload: {
        event: event.event,
        doctrinePackageId: event.doctrinePackageId,
        doctrineStatus: event.doctrineStatus,
        lpsVersion: event.lpsVersion,
        errorCode: event.errorCode,
      },
    });
  }
}
```

Aucun objectif/contexte/contrainte dans le payload. Aucun changement `db.ts`.

### `localProjectComposition.ts` (498 lignes)

- `createLocalVerticalSliceServices`
- `LocalProjectFacade.createProject` / `getProjectOverview`
- envelope `sfia-visible-slice-project-ui.1` dans LPS `scope`
- pin défaut `pkg:studio-v3-oa@1.0.0`
- acteur `authorityLevel: none`
- audit `try/catch` → `FAILED_NON_BLOCKING`

### Tests

- `localProjectComposition.test.ts` — 13 tests (happy path, doctrine fail, size, idempotence, audit, SQLite, lecture)
- `importBoundaries.test.ts` — 3 tests (pas React/Next/storage/fetch/harness/OPS1/agents ; OA ≠ V1/D1 ; UI n’importe pas V1)

### Docs

- `11-v1-local-project-core-composition.md` — exécution complète
- README + `08` — D-VS adoptées, V1 EXECUTED LOCALLY, V2 NOT AUTHORIZED

## T-A0

- registry réel + AJV + digest SHA-256
- même clock que T-A1
- fail-closed (missing / digest mismatch → aucune création Project/LPS)
- happy path = registry local injecté, pas VsDemoContext/harness

## T-A1

- CreateProject atomique Project + LPS v1
- idempotencyKey transmise
- GetProject + GetCurrentLivingProjectState pour lecture
- mutex/transaction mémoire inchangés
- aucune projection partielle

## Projection

Immutable, `REAL_LOCAL_CORE`, `fixture=false`, anti-claims honnêtes. Aucun HARD CLOSED / T-A6 COMPLETE / RUN READY.

## LPS.scope envelope

- schema `sfia-visible-slice-project-ui.1`
- parsing fail-closed → `PROJECTION_INVALID`
- pas de mutation modèle T-A1
- taille bornée par `MAX_LPS_SNAPSHOT_BYTES`
- dette documentée ; migration future non décidée

## Audit

no-op / mémoire / D1 existant ; échec non bloquant ; pas de secret ; pas de claim persistance produit.

## Boundaries

Confirmé code + tests :

- pas React / Next / sessionStorage / localStorage / fetch / window/document
- pas harness / VsDemoContext / OPS1 / agents / IAM
- OA n’importe pas V1 ni D1
- UI n’importe pas V1

## Tests (PR readiness)

| Validation | Résultat |
|------------|----------|
| V1 nouveaux | 16/16 |
| ciblés T-A0/T-A1/D1/T-A7/V1 | 109/109 |
| suite Vitest | 85 fichiers, 752/752 |
| typecheck | green |
| lint | green, 0 warning |
| build | green |
| diff check | green |

Aucune baisse du nombre de tests.

## Findings

| ID | Sévérité | Surface | Observation | Preuve | Impact | Correction | Gate |
|----|----------|---------|-------------|--------|--------|------------|------|
| F-01 | Info | LPS.scope | envelope UI versionné dans champ OA existant | `serializeUiMetadata` / doc 11 | dette temporaire | documentée ; pas de correction readiness | futur produit si modèle dédié |
| F-02 | Info | audit D1 | réutilise vocabulaire phases T-A7 | `localSqliteAudit.ts` | journal local seulement | aucune | aucun |

Critical : 0  
Major : 0  
Corrections readiness ce cycle : aucune (correctif horloge déjà dans `ca93e08`).

## PR readiness matrix

| Critère | Statut |
|---------|--------|
| Git truth | PASS |
| Périmètre | PASS |
| Architecture headless | PASS |
| T-A0 réel | PASS |
| T-A1 atomique | PASS |
| Projection / anti-claims | PASS |
| LPS.scope | PASS (dette Info) |
| Audit borné | PASS |
| Boundaries | PASS |
| Tests / typecheck / lint / build | PASS |
| Docs | PASS |
| Critical/Major | PASS (0) |

**Verdict readiness locale : PASS**

## Push

- `git push -u origin HEAD`
- local = remote = `ca93e0805b499f9cae6cacd84e37cbb122d89a1c`
- upstream : `origin/delivery/sfia-studio-visible-slice-v1-project-core-composition`
- aucun force-push

## PR

| Champ | Valeur |
|-------|--------|
| Numéro | 292 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/292 |
| Title | `feat(sfia-studio): add visible slice V1 project core composition` |
| Base | `main` |
| Head | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| Head OID | `ca93e0805b499f9cae6cacd84e37cbb122d89a1c` |
| Draft | false (ready for review) |
| State | OPEN |
| Mergeable | MERGEABLE |
| Merge state | BLOCKED (checks / rules) |
| Merge exécuté | **non** |

## Checks (instantané 16:52 CEST)

| Check | Status |
|-------|--------|
| Detect SFIA Studio changes (SFIA Studio CI) | pending / QUEUED |

Aucun check success/failure encore. Pas d’attente indéfinie. **Aucun merge.**

## Git final projet (pré-handoff)

- branche : `delivery/sfia-studio-visible-slice-v1-project-core-composition`
- HEAD : `ca93e0805b499f9cae6cacd84e37cbb122d89a1c`
- upstream = remote SHA
- tracked propre
- untracked `.tmp-sfia-review/**` uniquement
- `origin/main` inchangé `7916066…`

## Dette / risques

- envelope `sfia-visible-slice-project-ui.1` dans LPS.scope
- mémoire volatile mono-instance
- chemins registry/schemas injectés (wiring V2)
- CI encore pending

## Anti-claims

Pas d’IAM, persistance produit, agent réel, UI V2, Figma claim, HARD closed, T-A6 complete, delivery, cutover, merge autorisé.

## Actions non exécutées

merge PR, suppression branche, rebase, force-push, modification main, UI, Figma, IAM, HTTP, agent, delivery, cutover, fermeture blockers.

## Verdict

`SFIA STUDIO FIRST VISIBLE SLICE V1 PR OPENED — LOCAL PR READINESS PASSED — CI PENDING — NO MERGE AUTHORIZED`

Avec précision locale : readiness PASS, branche poussée, PR #292 ouverte, T-A0/T-A1 composition et projection vérifiées, tests green, 0 Critical/Major, aucun merge/IAM/persistance produit/UI V2/agent/delivery/cutover.

## Gate candidat suivant

Après CI verte uniquement :

`GO MERGE SFIA STUDIO FIRST VISIBLE SLICE V1 PR #292 — CI PASSED — NO IAM PRODUCT PERSISTENCE UI V2 REAL AGENT DELIVERY OR CUTOVER`

Aucun merge automatique.
