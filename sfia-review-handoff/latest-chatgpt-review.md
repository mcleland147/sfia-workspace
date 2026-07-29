# SFIA Studio first visible slice V1 — Review pack FULL

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-29 16:16 CEST (+0200) |
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Branche projet | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| Base framing | `c1955179a36079e060c41a845c2a1950084966c8` |
| Base distante framing | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
| HEAD final | `ca93e0805b499f9cae6cacd84e37cbb122d89a1c` |
| Cycle / profil | 6 (+7/8/9/3/15) / Standard renforcé |
| Typologie | EVOL / DEV / QA / DOC |
| Niveau | FULL |

## Verdict

`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED — HANDOFF PUBLICATION REQUESTED`

## Gate et décisions

Gate consommé :

`GO IMPLEMENT FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE LOT V1 — D-VS-01 ADAPT EXISTING UI AND STUDIOSHELL — D-VS-02 OA MEMORY PLUS OPTIONAL LOCAL SQLITE AUDIT — D-VS-03 FIXTURES OFF HAPPY PATH — D-VS-04 PROJECT CREATION AND CORE COMPOSITION FIRST — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

- D-VS-01 : `DECIDED — ADOPTED BY MORRIS`
- D-VS-02 : `DECIDED — ADOPTED BY MORRIS`
- D-VS-03 : `DECIDED — ADOPTED BY MORRIS`
- D-VS-04 : `DECIDED — ADOPTED BY MORRIS`
- D-VS-05 : `NOT DECIDED — NOT CONSUMED`

## Truth check

PASSED :

- workspace et toplevel exacts ;
- branche framing initiale exacte ;
- HEAD initial `c1955179…` ;
- `origin/main=7916066…`, inchangé après fetch ;
- framing = 11 documents seulement par rapport à main ;
- tracked clean, staged vide, untracked `.tmp-sfia-review/**` seulement ;
- aucune opération Git inachevée ;
- branche V1 créée localement depuis `c1955179…`, sans upstream.

Le parent `origin/main` est ancêtre du commit framing. Aucun rebase, merge ou push projet n'a été effectué.

## Sources

Sources lues et appliquées :

- méthode SFIA et règles du repository ;
- onze documents du pack `first-user-visible-vertical-slice-framing` ;
- handoff parent `sfia/review-handoff` @ `f55764a8235054f69384a773ddd44c994f4816ef` ;
- surfaces publiques et tests T-A0 Doctrine ;
- surfaces publiques et tests T-A1 Project/LPS ;
- `boundedAtomicAudit.ts`, `db.ts`, exports D1 ;
- surfaces UI/fixture/harness en lecture seule ;
- tests de boundary et T-A7 pertinents.

Cycle Knowledge Contract : recherché ; aucun contrat n'a été utilisé comme autorité d'exécution. Fallback : méthode SFIA v2.6 + pack de framing.

## Architecture livrée

```text
future UI
  → LocalProjectFacade
    → T-A0 local DoctrinePackage resolver
      → registry + AJV schema + SHA-256 digest
    → T-A1 CreateProject/GetProject/GetCurrentLivingProjectState
      → MemoryProjectStore + memory repositories
    → optional LocalProjectCreationAuditPort
      → disabled/no-op | memory | existing bounded D1 audit table
    → immutable LocalProjectCreationView
```

Chemin choisi : `projects/sfia-studio/app/lib/vertical-slice-core/**`.

Justification : couche de composition interne et headless au-dessus de T-A0/T-A1 ; aucune logique React ; aucune dépendance OA vers D1 ; adapter D1 isolé à la périphérie V1 ; aucune architecture UI parallèle.

## Fichiers et contenu modifié

### `app/lib/vertical-slice-core/types.ts` — ajouté, 129 lignes

Command et projection substantiels :

```ts
export interface CreateLocalProjectCommand {
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly perceivedCriticality: "LOW" | "STANDARD" | "HIGH";
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

Erreurs discriminées : `INPUT_INVALID`, `DOCTRINE_UNRESOLVED`, `PROJECT_CREATION_FAILED`, `PROJECT_NOT_FOUND`, `PROJECTION_INVALID`. Résultat d'audit : `DISABLED`, `RECORDED`, `FAILED_NON_BLOCKING`.

### `app/lib/vertical-slice-core/audit.ts` — ajouté, 49 lignes

Contenu essentiel :

```ts
export type LocalProjectCreationAuditEventType =
  | "LOCAL_PROJECT_CREATION_REQUESTED"
  | "DOCTRINE_RESOLVED"
  | "PROJECT_CREATED"
  | "LPS_INITIALIZED"
  | "LOCAL_PROJECT_CREATION_FAILED";

export interface LocalProjectCreationAuditEvent {
  readonly event: LocalProjectCreationAuditEventType;
  readonly timestamp: string;
  readonly correlationId: string;
  readonly idempotencyKey: string;
  readonly projectId?: string;
  readonly lpsVersion?: number;
  readonly doctrinePackageId?: string;
  readonly doctrineStatus?: "resolved";
  readonly result: "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
  readonly errorCode?: string;
}
```

Le fichier fournit `NoOpLocalProjectCreationAudit`, `MemoryLocalProjectCreationAudit` et un adapter d'échec pour prouver le caractère non bloquant.

### `app/lib/vertical-slice-core/localSqliteAudit.ts` — ajouté, 63 lignes

Adapter substantiel :

```ts
export class BoundedSqliteLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort {
  constructor(private readonly store: BoundedAtomicAuditStore) {}

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

L'adapter réutilise exclusivement `d1_atomic_audit`. `db.ts` et le schéma ne changent pas. Objectif, contexte et contraintes ne sont pas des propriétés possibles du port.

### `app/lib/vertical-slice-core/localProjectComposition.ts` — ajouté, 498 lignes

Surface :

```ts
export interface LocalProjectFacade {
  createProject(command: CreateLocalProjectCommand):
    Promise<CreateLocalProjectResult>;
  getProjectOverview(projectId: string):
    Promise<GetLocalProjectOverviewResult>;
}

export function createLocalVerticalSliceServices(
  options: LocalVerticalSliceCompositionOptions,
): LocalVerticalSliceServices
```

Composition :

```ts
const clock = options.nowIso
  ? new FixedClock(options.nowIso)
  : new SystemClock();
const doctrineResolver = new ResolveDoctrinePackage(
  new FilesystemDoctrinePackageRepository({ registryRoot: options.registryRoot }),
  new AjvSchemaValidationAdapter({ schemasRoot: options.schemasRoot }),
  new Sha256DigestVerificationAdapter(),
  clock,
  new MemoryDoctrineAuditJournal(),
);
const projectServices = createInMemoryProjectServices({
  doctrineResolver,
  clock,
  audit: new MemoryProjectAuditJournal(),
});
```

Création réelle :

```ts
const result = await this.projects.createProject.execute({
  projectId: requestedProjectId,
  title: command.name,
  objective: command.objective,
  context: command.context,
  scope: serializeUiMetadata(command),
  doctrinePackagePin: this.doctrinePackagePin,
  createdBy: LOCAL_ACTOR,
  correlationId,
  idempotencyKey: command.idempotencyKey,
  lpsVersionId: this.idSource.nextLpsVersionId(),
});
```

Le pin par défaut est le package réel `pkg:studio-v3-oa@1.0.0` et son digest canonique. La même horloge injectable gouverne T-A0 et T-A1. L'acteur local a `authorityLevel: none`; ce n'est pas IAM et ce n'est pas une identité Morris.

Lecture :

```ts
const [projectResult, lpsResult] = await Promise.all([
  this.projects.getProject.execute({ projectId }),
  this.projects.getCurrentLivingProjectState.execute({ projectId }),
]);
```

La projection est ensuite reconstruite depuis ces deux résultats. Aucun cache UI n'existe.

Mapping metadata : criticité, contraintes et référence courte sont sérialisées dans un envelope versionné `sfia-visible-slice-project-ui.1` porté par le champ LPS `scope` existant. Aucun modèle T-A1 n'est modifié.

Audit : chaque append est entouré d'un `try/catch`. Une exception devient `FAILED_NON_BLOCKING`; elle ne change pas le résultat T-A1.

### `app/lib/vertical-slice-core/index.ts` — ajouté, 4 lignes

```ts
export * from "./types";
export * from "./audit";
export * from "./localProjectComposition";
export * from "./localSqliteAudit";
```

### `app/__tests__/vertical-slice-core/localProjectComposition.test.ts` — ajouté, 338 lignes

Treize tests couvrent :

- descriptor d'architecture headless ;
- audit no-op, mémoire et échec non bloquant ;
- audit SQLite réel sur la table existante et absence de texte métier ;
- Doctrine réelle et projection complète ;
- idempotence T-A1 ;
- lecture reconstruite et immutabilité ;
- input invalide ;
- Doctrine absente ;
- digest incompatible ;
- snapshot excessif ;
- not found.

Extrait anti-claim :

```ts
expect(result.project).toMatchObject({
  localMode: true,
  iam: "NOT_SELECTED",
  productPersistence: "NOT_SELECTED",
  realAgentExecution: "NOT_AVAILABLE",
  delivery: "NOT_AUTHORIZED",
  cutover: "NOT_AUTHORIZED",
  source: "REAL_LOCAL_CORE",
  fixture: false,
});
```

Extrait confidentialité audit :

```ts
const serialized = JSON.stringify(audit.events);
expect(serialized).not.toContain(COMMAND.objective);
expect(serialized).not.toContain(COMMAND.context);
expect(serialized).not.toContain(COMMAND.constraints[0]);
```

### `app/__tests__/vertical-slice-core/importBoundaries.test.ts` — ajouté, 83 lignes

Trois tests statiques parcourent les sources et refusent :

- React, Next/UI, fixtures VS, harness, OPS1, agents ;
- usages `sessionStorage`, `localStorage`, `fetch`, `document`, `window` ;
- dépendances T-A0/T-A1 vers V1 ou D1 ;
- imports de V1 depuis `app/**`, `components/**`, `features/**`.

### `first-user-visible-vertical-slice-framing/11-v1-local-project-core-composition.md` — ajouté, 198 lignes

Document complet : gate, décisions, architecture, modules, mapping command, Doctrine, atomicité/idempotence/concurrence, projection, lecture, audit, erreurs, résultats, fichiers non modifiés, risques, dette, rollback, anti-claims et gates candidats.

### `first-user-visible-vertical-slice-framing/README.md` — modifié, +28/-15

Modifications :

- framing conservé comme historique ;
- D-VS-01→04 marquées `DECIDED — ADOPTED BY MORRIS` ;
- D-VS-05 marquée `NOT DECIDED — NOT CONSUMED` ;
- V1 marquée exécutée localement et V2 non autorisée ;
- résultats 16 / 109 / 752 et validations globales ;
- index `11`, gate review candidat, verdict V1 ;
- push/PR/merge projet explicitement non exécutés.

### `first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md` — modifié, +4

Ajoute le statut local V1, le lien vers `11` et `V2 NOT AUTHORIZED`; le backlog historique n'est pas réécrit.

## Inputs, outputs et frontières d'état

Input minimal : nom, objectif, contexte, criticité perçue, contraintes, référence courte optionnelle, clé d'idempotence applicative.

État métier : exclusivement T-A1 OA mémoire.  
État UI : projection read-only calculée.  
Fixtures : aucune dépendance et `fixture=false`.  
Audit : événements de référence optionnels ; jamais vérité métier.  
Storage navigateur : absent.  
SQLite : audit seulement, jamais persistance produit.

## Idempotence, concurrence et rollback

- clé V1 obligatoire et transmise au repository T-A1 ;
- retries réutilisent le Project/LPS d'origine ;
- transaction snapshot + mutex T-A1 existants inchangés ;
- rollback Project/LPS prouvé par les tests T-A1 de régression ;
- aucune revendication multi-processus, cross-store ou production.

Rollback du lot : revert des trois commits. Aucune migration, donnée produit, route ou infrastructure à restaurer.

## Tests et validations

| Validation | Résultat |
|------------|----------|
| nouveaux tests | 2 fichiers, 16/16 |
| ciblés T-A0/T-A1/D1/T-A7/V1 | 12 fichiers, 109/109 |
| suite Vitest complète | 85 fichiers, 752/752 |
| typecheck | green |
| lint global | green, 0 warning |
| build production | green, 9 routes |
| diff check | green |

Note d'exécution : un typecheck lancé en parallèle du build a rencontré la suppression transitoire de `.next/types` par Next. Relancé séquentiellement après le build, il est green. Ce n'est pas une erreur source.

## Diff et commits

Diff base..HEAD : `10 files changed, 1394 insertions(+), 15 deletions(-)`.

Commits :

1. `f4337b3` — `feat(sfia-studio): add local project core composition`
2. `7be7e67` — `test(sfia-studio): validate local project core composition`
3. `449213c` — `docs(sfia-studio): document visible slice V1 foundation`
4. `ca93e08` — `fix(sfia-studio): share injected clock across V1 composition`

Fichiers interdits absents du diff :

- aucun `app/app/**`, `app/components/**`, `app/features/**` ;
- aucun fichier T-A0/T-A1 existant ;
- aucun `VsDemoContext`, harness, navigation ;
- aucun `db.ts`, package.json, lockfile, migration, schema, `.github/**`, method ou prompt.

## Findings

- Critical : 0
- Major : 0
- Minor bloquant : 0
- Réserve : le champ LPS `scope` porte temporairement un envelope UI versionné ; à réévaluer si le modèle produit reçoit un concept métier dédié.

## Risques et dette

- instance mémoire mono-processus et volatile ;
- chemins registry/schemas injectés à stabiliser lors du wiring serveur V2 ;
- adapter D1 mappe les événements V1 dans le vocabulaire de phases existant ;
- pas de projet visible tant que V2 n'est pas autorisé et implémenté.

## Anti-claims

Le lot ne revendique pas :

- UI finale, parcours visible ou conformité Figma ;
- IAM, identité Morris authentifiée ou autorité de décision ;
- persistance produit ;
- agent réel, shell, réseau, delivery ou cutover ;
- HARD closed, T-A6 complete, RUN READY ou T-A7 complete.

## Git final projet

- branche : `delivery/sfia-studio-visible-slice-v1-project-core-composition`
- HEAD : `ca93e0805b499f9cae6cacd84e37cbb122d89a1c`
- upstream : aucun
- tracked : propre
- staged : vide
- untracked : `.tmp-sfia-review/chatgpt-review.md` seulement
- push projet : non
- PR projet : non
- merge projet : non

## Actions non exécutées

Pas de push de la branche projet, PR, merge, suppression de branche, UI, Figma, IAM, persistance produit, API HTTP, agent réel, T-A2→T-A7 artificiel, delivery ou cutover.

## Gate candidat

`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Alternative après intégration explicite de V1 :

`GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Aucun gate automatique.
