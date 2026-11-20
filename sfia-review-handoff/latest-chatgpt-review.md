# SFIA Review Pack FULL — Ensemble 07 FINAL CONVERGENCE

**Date/heure UTC :** 2026-11-20T18:34:37Z
**Cycle :** Delivery projet · EVOL corrective · Ensemble 07 · 3e passe
**Classe :** NO RELEASE · Gate C OPEN
**Review Handoff :** required / publish-in-cycle

## 1. Git truth

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| merge-base HEAD origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| Worktree status | NON COMMITTÉ (attendu) |

### git log -5
```
e36fd8b0 docs(next): integrate Morris-approved D5 trajectory projection, synchronization and history rules
29576429 docs(next): integrate Morris-approved D3 proactive trajectory and conversational guidance rules
f94a73b8 docs(next): integrate Morris-approved D2 rules for initial trajectory qualification
de8613b6 docs(next): record Morris approval of Ensemble 07 architecture dossier content
9075011e docs(next): propose Ensemble 07 functional and technical architecture dossier
```

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/src/lib/http-errors.ts
?? projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
?? projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts
?? projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts
?? projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
?? projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/
?? projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
?? projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
?? projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql
?? projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts
?? projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts
```

## 2. ENV-01 / Versioning

- **ENV-01 :** DEV only — PG docker `sfia-next-dev-pg`, app `127.0.0.1:3100`, lane `STUDIO_LANE=DEV`.
- Migration 015 additive applied in DEV.
- RECETTE/STABLE non touchées.
- **Versioning :** NO RELEASE · STABLE NOT AVAILABLE · aucun tag.
- Cookies : host dédié 127.0.0.1:3100 (même host ≠ isolation cookies vs autres ports — noté).

## 3. Sources lues (contrat)

- Contrats Ensemble 07 (dossier architecture, contrat UX, contrat Cursor, as-built).
- Figma `itgvCulInEnFY6DvgIegvP` — session MCP `01fd2eca-4728-43bf-808a-23e3f9731a96` — 13 frames metadata/screenshots.
- Review handoff tip avant cycle : `2fc9d4db` / blob `891efd95…`.
- Base HEAD historique : `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`.

## 4. Matrice COR-01..17

| ID | Attendu | Observé | Écart | Correction | Preuve |
|---|---|---|---|---|---|
| COR-01 | Reprise si op absente après create | reconcile crée op + process ; poll borné si null | Fermé | `reconcileInitialQualification` + project page poll | PG test COR-01 |
| COR-02 | GET ne kick pas | getOwnedProjectContext read-only | Fermé | project-context | PG GET PENDING |
| COR-03 | D5 puis message puis terminal | ordre persisté ; resume priorTrajectoryId | Fermé | processInitialQualification | PG dup/msg tests |
| COR-04 | Fence sur effets | `stillOwnsOperation` avant D5/message/incident | Fermé | stillOwns + updateOpIfOwner | PG COR-04 steal |
| COR-05 | UNKNOWN récupérable | lease expire → UNKNOWN → reclaim | Fermé | claim path | reconcile tests |
| COR-06 | Nora contextuelle | forecast + projection SAS ; LIVE NOT PROVEN | Réserve LIVE | fixture FAKE | unit forecast |
| COR-07 | fingerprint/revision | version+fingerprint op | Partiel | fields présents | schema 015 |
| COR-08 | incident ≠ Nora | role system [Studio] | Fermé | failed path | PG fail test |
| COR-09 | closedCycles chrono | asc openedAt | Fermé (non-régression) | service | seed 09.02/03 |
| COR-10 | futurs par ordre | filter by order not type-only | Fermé | TrajectoryBoard | code |
| COR-11/12 | PROPOSED/RETAINED/ACTIVE exclusifs | UI matrix | Fermé | TrajectoryBoard | captures 09.11/09/08 |
| COR-13 | Sujets/Décisions/Docs | activity projection | Partiel | ProjectOverview | 09.01/06 |
| COR-14 | GO via Nora/D6/D5 | seed retain/open/close via service (DETERMINISTIC) | Réserve BEHAVIOR | seed script | LIVE GO NOT PROVEN |
| COR-15 | maturité/clôture reco | closeCycle balanceNote | Partiel | service | 09.08 seed |
| COR-16 | bilan historique | objectif ≠ résultat ; gaps honnêtes | Partiel | BilanHistoriqueView | 09.03 capture |
| COR-17 | CKI éditorial asymétrique | 872/464 layout ; digest retiré du primary | Partiel | CkiMethodeView | 09.05 capture |

## 5. Architecture retenue

- Option A hybride : ensure → process → D5 PROPOSE + forecast_json + un message assistant.
- Reconcile POST only ; fencing ownerToken aux points d'effet.
- **Écarté :** nouveau moteur/queue/bus ; mutation D4/D6 hors mandat ; timers artificiels SAS.

## 6. Fake / Real

| Frontière | Qualification |
|---|---|
| PostgreSQL DEV | PG REAL (tests + seeds) |
| Navigateur Playwright 1680×970 | BROWSER |
| Nora LLM | DETERMINISTIC / FAKE (`STUDIO_FORCE_NORA_FIXTURE=1`) — **LIVE NOT PROVEN** |
| GO conversationnel D6→D5 | DETERMINISTIC via `retainTrajectory`/`openCycle`/`closeCycle` — **BEHAVIOR CONVERSATIONNEL NOT PROVEN** |
| Fixtures HOLD | `STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1` pour 09.10/05.17 |

## 7. Tests

| Suite | Résultat | Horodatage |
|---|---|---|
| unit ensemble07* (7) | PASS | 2026-11-20T18:34:37Z |
| integration ensemble07-initial-qualification.pg (10) | PASS | 2026-11-20T18:34:37Z |
| tsc/build/full unit/e2e | NOT RUN this pass (scoped E07 P0) | — |

P0 couverts : missing op, reconcile, fence steal, GET no-kick, failed system msg, clarification, idempotence.

## 8. Contrats visuels Figma 13/13

Répertoire : `.tmp-sfia-review/ensemble07-figma-refs/` + `ensemble07-figma-visual-contracts.json`
FileKey `itgvCulInEnFY6DvgIegvP` · viewport 1680×970 · rail 246 · topbar 70.

## 9. Comparaisons Figma/runtime 13/13

| Frame | Référence lue | État métier testé | Capture runtime | Écart | Correction | Verdict |
|---|---|---|---|---|---|---|
| 09.01 | 983:47 + PNG | ACTIVE + activité | `09.01-projet-cycle-actif-runtime.png` | densité/cartes activité encore approchantes | cycle card 222px | Partiellement conforme |
| 09.02 | 983:90 + PNG | CLOSED+ACTIVE+future | `09.02-trajectoire-principale-runtime.png` | cartes 396×128 + liserés | roadmap styles | Partiellement conforme |
| 09.03 | 983:133 + PNG | cycle clos seed | `09.03-bilan-historique-runtime.png` | bilan lacunes honnêtes vs maquette riche | objectif≠résultat | Partiellement conforme |
| 09.04 | 983:176 + PNG | étape future | `09.04-etape-envisagee-runtime.png` | 2 zones distinctes | EtapeFutureView split | Conforme structure |
| 09.05 | 983:219 + PNG | CKI asymétrique | `09.05-cki-methode-runtime.png` | contenu éditorial limité | grid 872/464 | Partiellement conforme |
| 09.06 | 999:261 + PNG | sans ACTIVE | `09.06-projet-sans-cycle-runtime.png` | distinct de 09.01 | seed proposed | Conforme état |
| 09.07 | 999:285 + PNG | CLARIFICATION | `09.07-clarification-runtime.png` | composition centrée | clarification card | Conforme état |
| 09.08 | 999:335 + PNG | CLOSED only | `09.08-entre-deux-cycles-runtime.png` | roadmap between | retained≠between fix | Conforme état |
| 09.09 | 1005:428 + PNG | 1er ACTIVE | `09.09-premier-cycle-actif-runtime.png` | focus premier cycle | seed open CADRAGE | Conforme état |
| SAS06 | 1022:112 + PNG | prep (popup non live) | `sas-06-preparation-runtime.png` | **popup non capturée live** ; timers retirés | poll serveur | Partiel — popup live manquante |
| 05.17 | 1036:114 + PNG | composer locked + HOLD | `05.17-travail-qualification-runtime.png` | bandeau + overlay | NoraConversation | Partiellement conforme |
| 09.10 | 1034:480 + PNG | PENDING HOLD | `09.10-qualification-en-cours-runtime.png` | carte progression ; pas de diagnostic | AnalyzingCard | Conforme état |
| 09.11 | 1034:505 + PNG | PROPOSED | `09.11-proposition-initiale-runtime.png` | séquence candidats | PropositionInitialeCard | Partiellement conforme |

**Verdict UX global :** FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED (écarts de densité/pixel ; SAS popup live manquante).

## 10. Fichiers créés (contenu intégral)

### `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`

- SHA256: `37d497bb54ec0bc91cf067407730d88675647f8d6971a652d5a15fb3ebe4d021`
- Bytes: 2889

```
# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

**Statut:** construction DEV corrective — NO RELEASE
**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**Date:** 2026-11-20 (itération corrective)

## Architecture retenue

Option A hybride (dossier §8.1) + corrections P0 :

1. Après `createProjectCommand` confirmé, `ensureAndKickInitialQualification` (retry) consigne une opération durable `PENDING` (1 / projet).
2. `kickInitialQualificationProcessing` uniquement depuis create / reconcile POST — **jamais depuis GET** (`project-context` lecture seule).
3. Publication corrélée : D5 `PROPOSE_TRAJECTORY` (expectedRevision réel) → persistance `trajectoryRevisionId` → message unique → terminal sous fence `ownerToken`.
4. Reprise : lease expiré → UNKNOWN ; reconcile POST complète message/terminal ; incident Studio en `role: system`.
5. Surfaces SAS / Travail / Trajectoire lisent la même projection `initialQualification`.
6. Admission serveur + compositeur UI verrouillés tant que status ∈ {PENDING, RUNNING, UNKNOWN}.
7. Forecast déterministe : **pas de CADRAGE par défaut** — CLARIFICATION si aucun signal de cycle.

## Persistance

- Migration additive `015_trajectory_qualification.sql` (DEV / e2e appliquée).
- Table `trajectory_qualification_operations`.
- Colonne `trajectory_revisions.forecast_json`.

## Fichiers propriétaires principaux

| Fichier | Rôle |
|---------|------|
| `web/src/domains/pilotage/initial-qualification.ts` | ensure / process / assert admission |
| `web/src/domains/pilotage/forecast-builder.ts` | séquence 1–3 cycles (déterministe FAKE) |
| `web/src/domains/pilotage/qualification-lock.ts` | règles de verrou compositeur |
| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
| `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
| `web/src/components/figma/NoraConversation.tsx` | verrou 05.17 |

## Preuves

- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`
- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (create→propose, idempotence, lock admission, clarification, failure)
- Build: `npm run build` OK
- Figma: 13/13 captures MCP locales sous `.tmp-sfia-review/ensemble07-evidence/figma/`

## Réserves connues

- Fidélité visuelle pixel des 13 frames : itérations runtime encore requises avant READY visuel.
- Vues détail 09.03 / 09.04 / 09.05 : projection partielle (bilan / CKI éditorial) à enrichir.
- GO conversationnel D6→D5 : capacités PilotagePanel conservées ; parcours conversationnel principal à prouver en e2e navigateur.
- LIVE Nora fournisseur : NOT PROVEN (fixture DEV).
```

### `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql`

- SHA256: `1d44a872997c5233e3e7c077893262480710129ec6d1979cfb5771f8bb7b37da`
- Bytes: 1285

```
-- Ensemble 07 — initial trajectory qualification operation (one per project).
-- Additive / re-runnable from 014_journal_d4_revisions.

CREATE TABLE IF NOT EXISTS trajectory_qualification_operations (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  status text NOT NULL,
  phase text NOT NULL,
  version integer NOT NULL DEFAULT 1,
  input_fingerprint text NOT NULL DEFAULT '',
  trajectory_revision_id text REFERENCES trajectory_revisions(id),
  assistant_message_id text,
  result_json jsonb,
  error_code text,
  owner_token text,
  claimed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS trajectory_qualification_operations_project_uidx
  ON trajectory_qualification_operations (project_id);

CREATE INDEX IF NOT EXISTS trajectory_qualification_operations_preparation_idx
  ON trajectory_qualification_operations (preparation_id);

CREATE INDEX IF NOT EXISTS trajectory_qualification_operations_status_idx
  ON trajectory_qualification_operations (status);

ALTER TABLE trajectory_revisions
  ADD COLUMN IF NOT EXISTS forecast_json jsonb;
```

### `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts`

- SHA256: `0864570090840871928672cd62081934938fe6de940c5c3bdef94542b7614358`
- Bytes: 23432

```
import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  preparationProjectLinks,
  preparations,
  projectPilotageState,
  projects,
  trajectoryQualificationOperations,
} from "@/db/schema";
import {
  buildInitialForecast,
  qualificationInputFingerprint,
  parseForecastJson,
  type ForecastBuildResult,
} from "@/domains/pilotage/forecast-builder";
import {
  initialQualificationComposerReason,
  isInitialQualificationComposerLocked,
} from "@/domains/pilotage/qualification-lock";
import type {
  InitialQualificationProjection,
  QualificationPhase,
  QualificationStatus,
} from "@/domains/pilotage/initial-qualification-types";
import { executePilotageCommand } from "@/domains/pilotage/service";
import { parseProjectionJson } from "@/domains/preparation/projection";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

const CLAIM_LEASE_MS = 120_000;

/** Test hook — throw between ANALYZING and publish. */
export const initialQualificationFault: {
  beforePublish: null | (() => void | Promise<void>);
} = {
  beforePublish: null,
};

function phaseToUiStep(phase: QualificationPhase): 1 | 2 | 3 | null {
  switch (phase) {
    case "ENGAGED":
      return 1;
    case "ANALYZING":
      return 2;
    case "PUBLISHING":
      return 3;
    default:
      return null;
  }
}

function rowToProjection(
  row: typeof trajectoryQualificationOperations.$inferSelect,
  forecastSteps: InitialQualificationProjection["forecastSteps"],
  clarificationQuestion: string | null,
): InitialQualificationProjection {
  const status = row.status as QualificationStatus;
  const phase = row.phase as QualificationPhase;
  const composerLocked = isInitialQualificationComposerLocked({
    operationId: row.id,
    projectId: row.projectId,
    preparationId: row.preparationId,
    status,
    phase,
    version: row.version,
    uiStep: phaseToUiStep(phase),
    composerLocked: false,
    composerLockReason: "",
    trajectoryRevisionId: row.trajectoryRevisionId,
    assistantMessageId: row.assistantMessageId,
    forecastSteps,
    clarificationQuestion,
    errorCode: row.errorCode,
  });
  return {
    operationId: row.id,
    projectId: row.projectId,
    preparationId: row.preparationId,
    status,
    phase,
    version: row.version,
    uiStep: phaseToUiStep(phase),
    composerLocked,
    composerLockReason: initialQualificationComposerReason({
      operationId: row.id,
      projectId: row.projectId,
      preparationId: row.preparationId,
      status,
      phase,
      version: row.version,
      uiStep: phaseToUiStep(phase),
      composerLocked,
      composerLockReason: "",
      trajectoryRevisionId: row.trajectoryRevisionId,
      assistantMessageId: row.assistantMessageId,
      forecastSteps,
      clarificationQuestion,
      errorCode: row.errorCode,
    }),
    trajectoryRevisionId: row.trajectoryRevisionId,
    assistantMessageId: row.assistantMessageId,
    forecastSteps,
    clarificationQuestion,
    errorCode: row.errorCode,
  };
}

function parseResultJson(raw: unknown): {
  clarificationQuestion: string | null;
  forecastSteps: InitialQualificationProjection["forecastSteps"];
} {
  if (!raw || typeof raw !== "object") {
    return { clarificationQuestion: null, forecastSteps: null };
  }
  const o = raw as Record<string, unknown>;
  const clarificationQuestion =
    typeof o.clarificationQuestion === "string" ? o.clarificationQuestion : null;
  const forecastSteps = parseForecastJson(o.forecastSteps);
  return { clarificationQuestion, forecastSteps };
}

export async function getQualificationProjection(
  pilotId: string,
  projectId: string,
): Promise<InitialQualificationProjection | null> {
  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(
        and(
          eq(trajectoryQualificationOperations.projectId, projectId),
          eq(trajectoryQualificationOperations.pilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return null;
  const parsed = parseResultJson(row.resultJson);
  return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
}

export async function ensureInitialQualification(input: {
  projectId: string;
  preparationId: string;
  pilotId: string;
}): Promise<InitialQualificationProjection> {
  const existing = await getQualificationProjection(input.pilotId, input.projectId);
  if (existing) return existing;

  const prep = (
    await db
      .select()
      .from(preparations)
      .where(
        and(eq(preparations.id, input.preparationId), eq(preparations.ownerPilotId, input.pilotId)),
      )
      .limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");

  const projection = parseProjectionJson(
    prep.projectionJson,
    prep.id,
    prep.creationRevision,
  );
  const fingerprint = qualificationInputFingerprint({
    preparationId: prep.id,
    projection,
    previewSummary: prep.previewSummary ?? "",
    creationRevision: prep.creationRevision,
  });

  const id = newId("iqop");
  const now = new Date();
  try {
    await db.insert(trajectoryQualificationOperations).values({
      id,
      projectId: input.projectId,
      preparationId: input.preparationId,
      pilotId: input.pilotId,
      status: "PENDING",
      phase: "ENGAGED",
      version: 1,
      inputFingerprint: fingerprint,
      createdAt: now,
      updatedAt: now,
    });
  } catch {
  }

  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, input.projectId))
      .limit(1)
  )[0];
  if (!row) throw new StudioError("INTERNAL", "Qualification initiale non créée");
  return rowToProjection(row, null, null);
}

function initialQualificationGenerationId(operationId: string, version: number): string {
  return `sfia:iq:${operationId}:v${version}`;
}

function stableAssistantMessageId(operationId: string, version: number): string {
  return `msg_iq_${operationId}_v${version}`;
}

async function appendQualificationThreadMessage(input: {
  pilotId: string;
  preparationId: string;
  operationId: string;
  version: number;
  content: string;
  /** E07-COR-08 — Studio incidents use system; Nora cognitive uses assistant. */
  role: "assistant" | "system";
}): Promise<string> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, input.preparationId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) throw new StudioError("NOT_FOUND", "Conversation introuvable");

  const generationId = initialQualificationGenerationId(input.operationId, input.version);
  const stableId = stableAssistantMessageId(input.operationId, input.version);

  const existingByGen = (
    await db
      .select()
      .from(messages)
      .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
      .limit(1)
  )[0];
  if (existingByGen) return existingByGen.id;

  const existingById = (
    await db.select().from(messages).where(eq(messages.id, stableId)).limit(1)
  )[0];
  if (existingById) return existingById.id;

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;
  const now = new Date();

  try {
    await db.insert(messages).values({
      id: stableId,
      conversationId: conv.id,
      role: input.role,
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId,
      createdAt: now,
    });
    return stableId;
  } catch {
    const again = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
        .limit(1)
    )[0];
    if (again) return again.id;
    throw new StudioError("CONFLICT", "Message de qualification non persisté");
  }
}

async function currentPilotageRevision(projectId: string): Promise<number> {
  const row = (
    await db
      .select({ revision: projectPilotageState.revision })
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  return row?.revision ?? 0;
}

async function publishProposedTrajectory(input: {
  pilotId: string;
  projectId: string;
  operationId: string;
  version: number;
  orientation: string;
  forecastSteps: ForecastBuildResult & { kind: "PROPOSE" };
}): Promise<string> {
  const clientCommandKey = `iq:${input.operationId}:v${input.version}:propose`;
  const expectedRevision = await currentPilotageRevision(input.projectId);
  const result = await executePilotageCommand(input.pilotId, input.projectId, {
    clientCommandKey,
    expectedRevision,
    operation: "PROPOSE_TRAJECTORY",
    sourceKind: "COGNITIVE_PROPOSAL",
    sourceRef: input.operationId,
    orientation: input.orientation,
    forecastJson: input.forecastSteps.steps,
    actInstanceId: clientCommandKey,
  });
  if (result.status === "REJECTED" || result.status === "CONFLICT") {
    throw new StudioError("INTERNAL", result.reason ?? "Proposition D5 refusée");
  }
  const propose = result.effects.find((e) => e.effectKind === "PROPOSE");
  if (!propose?.targetRef) throw new StudioError("INTERNAL", "Trajectoire PROPOSED absente");
  return propose.targetRef;
}

async function updateOpIfOwner(
  opId: string,
  ownerToken: string,
  patch: Partial<typeof trajectoryQualificationOperations.$inferInsert>,
): Promise<boolean> {
  const updated = await db
    .update(trajectoryQualificationOperations)
    .set({ ...patch, updatedAt: new Date() })
    .where(
      and(
        eq(trajectoryQualificationOperations.id, opId),
        eq(trajectoryQualificationOperations.ownerToken, ownerToken),
      ),
    )
    .returning({ id: trajectoryQualificationOperations.id });
  return updated.length > 0;
}

/** E07-COR-04 — fence before side effects (D5 propose / thread message). */
async function stillOwnsOperation(opId: string, ownerToken: string): Promise<boolean> {
  const row = (
    await db
      .select({ id: trajectoryQualificationOperations.id })
      .from(trajectoryQualificationOperations)
      .where(
        and(
          eq(trajectoryQualificationOperations.id, opId),
          eq(trajectoryQualificationOperations.ownerToken, ownerToken),
        ),
      )
      .limit(1)
  )[0];
  return Boolean(row);
}

function buildAssistantContent(
  built: ForecastBuildResult,
  projectName: string,
): string {
  if (built.kind === "CLARIFICATION") {
    return built.question;
  }
  return [
    `Projet **${projectName}** — proposition de trajectoire initiale (non retenue).`,
    "",
    built.summary,
    "",
    "Vous pouvez accepter cette direction, la contester ou demander un autre premier cycle — chaque décision d'ouverture reste la vôtre.",
  ].join("\n");
}

function studioFailedMessage(): string {
  return [
    "[Studio] La qualification initiale de trajectoire n'a pas abouti techniquement.",
    "Le projet reste accessible. Vous pouvez continuer la conversation pour préciser votre intention ; la trajectoire pourra être qualifiée ultérieurement.",
  ].join("\n");
}

const TERMINAL = new Set<QualificationStatus>(["PROPOSED", "CLARIFICATION", "FAILED"]);

export async function processInitialQualification(
  projectId: string,
  opts?: { force?: boolean; pilotId?: string },
): Promise<InitialQualificationProjection | null> {
  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId))
      .limit(1)
  )[0];
  if (!row) return null;
  if (opts?.pilotId && row.pilotId !== opts.pilotId) return null;

  if (TERMINAL.has(row.status as QualificationStatus) && !opts?.force) {
    const parsed = parseResultJson(row.resultJson);
    return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
  }

  /** DEV visual capture only — freeze PENDING/RUNNING so 09.10 / 05.17 remain observable. */
  if (
    process.env.STUDIO_LANE === "DEV" &&
    process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION === "1" &&
    !opts?.force
  ) {
    const parsed = parseResultJson(row.resultJson);
    return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
  }

  const ownerToken = newId("iqtk");
  const now = new Date();

  const claimed = await db.transaction(async (tx) => {
    const execResult = await tx.execute(
      sql`select * from trajectory_qualification_operations where project_id = ${projectId} for update`,
    );
    const locked = (
      Array.isArray(execResult)
        ? execResult
        : ((execResult as { rows?: Array<Record<string, unknown>> }).rows ?? [])
    ) as Array<Record<string, unknown>>;
    const cur = locked[0];
    if (!cur) return null;
    const status = String(cur.status) as QualificationStatus;
    if (TERMINAL.has(status) && !opts?.force) return { kind: "terminal" as const, id: String(cur.id) };

    if (status === "RUNNING" && cur.owner_token && cur.claimed_at) {
      const claimedAt = new Date(String(cur.claimed_at)).getTime();
      if (Date.now() - claimedAt < CLAIM_LEASE_MS) {
        return { kind: "busy" as const, id: String(cur.id) };
      }
      // Lease expired — mark UNKNOWN then reclaim (E07-COR-05).
      await tx
        .update(trajectoryQualificationOperations)
        .set({ status: "UNKNOWN", updatedAt: now })
        .where(eq(trajectoryQualificationOperations.id, String(cur.id)));
    }

    const priorTrajectoryId =
      cur.trajectory_revision_id != null ? String(cur.trajectory_revision_id) : null;
    const priorResult = cur.result_json ?? null;

    await tx
      .update(trajectoryQualificationOperations)
      .set({
        status: "RUNNING",
        phase: priorTrajectoryId ? "PUBLISHING" : "ANALYZING",
        ownerToken,
        claimedAt: now,
        updatedAt: now,
      })
      .where(eq(trajectoryQualificationOperations.id, String(cur.id)));

    return {
      kind: "claimed" as const,
      id: String(cur.id),
      pilotId: String(cur.pilot_id),
      preparationId: String(cur.preparation_id),
      version: Number(cur.version),
      priorTrajectoryId,
      priorResult,
    };
  });

  if (!claimed || claimed.kind === "busy") {
    return getQualificationProjection(row.pilotId, projectId);
  }
  if (claimed.kind === "terminal") {
    return getQualificationProjection(row.pilotId, projectId);
  }

  try {
    const prep = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, claimed.preparationId))
        .limit(1)
    )[0];
    const projection = prep
      ? parseProjectionJson(prep.projectionJson, prep.id, prep.creationRevision)
      : null;
    const projectRow = (
      await db.select({ name: projects.name }).from(projects).where(eq(projects.id, projectId)).limit(1)
    )[0];
    const name = projectRow?.name ?? "Projet";

    // Resume path: D5 already published, message/terminal missing (E07-COR-03).
    if (claimed.priorTrajectoryId) {
      const parsedPrior = parseResultJson(claimed.priorResult);
      const assistantMessageId = await appendQualificationThreadMessage({
        pilotId: claimed.pilotId,
        preparationId: claimed.preparationId,
        operationId: claimed.id,
        version: claimed.version,
        content:
          parsedPrior.clarificationQuestion ??
          buildAssistantContent(
            {
              kind: "PROPOSE",
              steps: parsedPrior.forecastSteps ?? [],
              orientation: "Trajectoire proposée",
              summary: "Proposition de trajectoire initiale reprise après interruption.",
            },
            name,
          ),
        role: "assistant",
      });
      const ok = await updateOpIfOwner(claimed.id, ownerToken, {
        status: "PROPOSED",
        phase: "TERMINAL",
        trajectoryRevisionId: claimed.priorTrajectoryId,
        assistantMessageId,
        resultJson: (claimed.priorResult as Record<string, unknown>) ?? {
          kind: "PROPOSED",
          forecastSteps: parsedPrior.forecastSteps,
        },
        ownerToken: null,
        errorCode: null,
      });
      if (!ok) {
        await updateOpIfOwner(claimed.id, ownerToken, {
          status: "UNKNOWN",
          phase: "PUBLISHING",
        });
      }
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    await initialQualificationFault.beforePublish?.();

    const phaseOk = await updateOpIfOwner(claimed.id, ownerToken, { phase: "PUBLISHING" });
    if (!phaseOk) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    const built = buildInitialForecast({
      projection,
      previewSummary: prep?.previewSummary ?? "",
    });

    let trajectoryRevisionId: string | null = null;
    let terminalStatus: QualificationStatus;
    let resultJson: Record<string, unknown>;
    const assistantContent = buildAssistantContent(built, name);

    if (built.kind === "CLARIFICATION") {
      terminalStatus = "CLARIFICATION";
      resultJson = {
        kind: "CLARIFICATION",
        clarificationQuestion: built.question,
        missing: built.missing,
      };
    } else {
      if (!(await stillOwnsOperation(claimed.id, ownerToken))) {
        return getQualificationProjection(claimed.pilotId, projectId);
      }
      trajectoryRevisionId = await publishProposedTrajectory({
        pilotId: claimed.pilotId,
        projectId,
        operationId: claimed.id,
        version: claimed.version,
        orientation: built.orientation,
        forecastSteps: built,
      });
      terminalStatus = "PROPOSED";
      resultJson = {
        kind: "PROPOSED",
        forecastSteps: built.steps,
        orientation: built.orientation,
      };
      // Persist D5 pointer before message so crash can resume (E07-COR-03).
      const mid = await updateOpIfOwner(claimed.id, ownerToken, {
        trajectoryRevisionId,
        resultJson,
        phase: "PUBLISHING",
      });
      if (!mid) {
        return getQualificationProjection(claimed.pilotId, projectId);
      }
    }

    if (!(await stillOwnsOperation(claimed.id, ownerToken))) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }
    const assistantMessageId = await appendQualificationThreadMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      version: claimed.version,
      content: assistantContent,
      role: "assistant",
    });

    if (built.kind === "PROPOSE" && !trajectoryRevisionId) {
      throw new StudioError("INTERNAL", "Publication incomplète");
    }

    const terminalOk = await updateOpIfOwner(claimed.id, ownerToken, {
      status: terminalStatus,
      phase: "TERMINAL",
      trajectoryRevisionId,
      assistantMessageId,
      resultJson,
      ownerToken: null,
      errorCode: null,
    });
    if (!terminalOk) {
      // Message may exist; leave UNKNOWN for reconcile (E07-COR-04/05).
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    return getQualificationProjection(claimed.pilotId, projectId);
  } catch (e) {
    const errorCode = e instanceof StudioError ? e.code : "QUALIFICATION_FAILED";
    // E07-COR-04/08 — expired owner must not publish Studio incident over a newer claim.
    if (!(await stillOwnsOperation(claimed.id, ownerToken))) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }
    const systemMessageId = await appendQualificationThreadMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      version: claimed.version,
      content: studioFailedMessage(),
      role: "system",
    }).catch(() => null);

    const failedOk = await updateOpIfOwner(claimed.id, ownerToken, {
      status: "FAILED",
      phase: "TERMINAL",
      assistantMessageId: systemMessageId,
      errorCode,
      ownerToken: null,
      resultJson: { kind: "FAILED", errorCode },
    });
    if (!failedOk) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    return getQualificationProjection(claimed.pilotId, projectId);
  }
}

export function kickInitialQualificationProcessing(projectId: string, pilotId: string): void {
  void processInitialQualification(projectId, { pilotId }).catch(() => undefined);
}

/** E07-COR-01 — ensure durable op then kick; retry once on ensure failure. */
export async function ensureAndKickInitialQualification(input: {
  projectId: string;
  preparationId: string;
  pilotId: string;
}): Promise<{
  projection: InitialQualificationProjection | null;
  ensureStatus: "OK" | "FAILED_RETRYABLE";
}> {
  try {
    const projection = await ensureInitialQualification(input);
    kickInitialQualificationProcessing(input.projectId, input.pilotId);
    return { projection, ensureStatus: "OK" };
  } catch {
    try {
      const projection = await ensureInitialQualification(input);
      kickInitialQualificationProcessing(input.projectId, input.pilotId);
      return { projection, ensureStatus: "OK" };
    } catch {
      return { projection: null, ensureStatus: "FAILED_RETRYABLE" };
    }
  }
}

/**
 * E07-COR-01/02/05 — explicit reconcile (POST), never from GET.
 * Creates missing op when project+prep linked; processes PENDING/RUNNING/UNKNOWN.
 */
export async function reconcileInitialQualification(
  projectId: string,
  pilotId: string,
): Promise<InitialQualificationProjection | null> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  let projection = await getQualificationProjection(pilotId, projectId);
  if (!projection) {
    const link = (
      await db
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.projectId, projectId))
        .limit(1)
    )[0];
    if (!link) return null;
    projection = await ensureInitialQualification({
      projectId,
      preparationId: link.preparationId,
      pilotId,
    });
  }

  if (
    projection.status === "PENDING" ||
    projection.status === "RUNNING" ||
    projection.status === "UNKNOWN"
  ) {
    return processInitialQualification(projectId, { pilotId });
  }
  return projection;
}

export async function assertPilotTurnNotBlockedByQualification(
  pilotId: string,
  projectId: string,
): Promise<void> {
  const q = await getQualificationProjection(pilotId, projectId);
  if (q && (q.status === "PENDING" || q.status === "RUNNING" || q.status === "UNKNOWN")) {
    throw new StudioError(
      "QUALIFICATION_IN_PROGRESS",
      "Qualification initiale de trajectoire en cours — envoyez un message après la proposition ou la clarification.",
      { httpStatus: 409 },
    );
  }
}

export { blocksPilotTurnAdmission, isInitialQualificationComposerLocked } from "@/domains/pilotage/qualification-lock";
```

### `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts`

- SHA256: `3a6f848cc8156f235368d31240dedf751e344632b6631388f9cde733e67376f1`
- Bytes: 924

```
import type { ForecastStep } from "@/domains/pilotage/forecast-builder";

export const QUALIFICATION_STATUSES = [
  "PENDING",
  "RUNNING",
  "PROPOSED",
  "CLARIFICATION",
  "FAILED",
  "UNKNOWN",
] as const;

export type QualificationStatus = (typeof QUALIFICATION_STATUSES)[number];

export const QUALIFICATION_PHASES = ["ENGAGED", "ANALYZING", "PUBLISHING", "TERMINAL"] as const;

export type QualificationPhase = (typeof QUALIFICATION_PHASES)[number];

export type InitialQualificationProjection = {
  operationId: string;
  projectId: string;
  preparationId: string;
  status: QualificationStatus;
  phase: QualificationPhase;
  version: number;
  uiStep: 1 | 2 | 3 | null;
  composerLocked: boolean;
  composerLockReason: string;
  trajectoryRevisionId: string | null;
  assistantMessageId: string | null;
  forecastSteps: ForecastStep[] | null;
  clarificationQuestion: string | null;
  errorCode: string | null;
};
```

### `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts`

- SHA256: `445603b2de4c2e47f92ea859bf1a92b5b23ee6049864998179b9b66340303036`
- Bytes: 6862

```
import { createHash } from "crypto";
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";
import type { PreparationProjection } from "@/domains/preparation/projection";

export type ForecastStep = {
  order: number;
  cycleType: CycleType;
  rationale: string;
  certainty: "QUALIFIED" | "ENVISIONED";
};

export type ForecastBuildResult =
  | { kind: "PROPOSE"; steps: ForecastStep[]; orientation: string; summary: string }
  | { kind: "CLARIFICATION"; question: string; missing: string[] };

const CYCLE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

function projectionTextBundle(projection: PreparationProjection | null, previewSummary: string): string {
  const parts: string[] = [];
  if (projection?.intention?.value?.trim()) parts.push(projection.intention.value.trim());
  if (projection?.desiredOutcome?.value?.trim()) parts.push(projection.desiredOutcome.value.trim());
  if (projection?.initialScope?.value?.trim()) parts.push(projection.initialScope.value.trim());
  if (previewSummary.trim()) parts.push(previewSummary.trim());
  for (const q of projection?.openQuestions ?? []) {
    if (q.value?.trim()) parts.push(q.value.trim());
  }
  return parts.join("\n");
}

function inferPreferredFirstCycle(
  projection: PreparationProjection | null,
  bundle: string,
): CycleType | null {
  const explicit = projection?.suggestion?.explanation?.trim() ?? "";
  const haystack = `${explicit}\n${bundle}`.toLowerCase();
  for (const type of CYCLE_TYPES) {
    const label = CYCLE_LABELS[type];
    const token = type.toLowerCase().replace(/_/g, " ");
    if (haystack.includes(label) || haystack.includes(token)) {
      return type;
    }
  }
  if (/\bux\b|interface utilisateur|expérience utilisateur/i.test(haystack)) return "UX_UI";
  if (/architecture technique|stack technique/i.test(haystack)) return "ARCHITECTURE_TECHNIQUE";
  if (/backlog|user story|stories/i.test(haystack)) return "BACKLOG";
  return null;
}

function followOnCycles(first: CycleType, bundle: string): CycleType[] {
  const lower = bundle.toLowerCase();
  const out: CycleType[] = [];
  const push = (t: CycleType) => {
    if (t !== first && !out.includes(t)) out.push(t);
  };
  if (first === "CADRAGE") {
    push("CONCEPTION_FONCTIONNELLE");
    if (/ux|interface|écran/i.test(lower)) push("UX_UI");
  } else if (first === "CONCEPTION_FONCTIONNELLE") {
    push("UX_UI");
  } else if (first === "UX_UI") {
    push("BACKLOG");
  } else if (first === "ARCHITECTURE_TECHNIQUE") {
    push("INTEGRATION_DEVOPS");
  }
  return out.slice(0, 2);
}

export function buildInitialForecast(input: {
  projection: PreparationProjection | null;
  previewSummary: string;
}): ForecastBuildResult {
  const bundle = projectionTextBundle(input.projection, input.previewSummary);
  if (!bundle.trim()) {
    return {
      kind: "CLARIFICATION",
      question:
        "Pour proposer une trajectoire de cycles utile, précisez l'intention du projet et le résultat visé dans le fil de préparation.",
      missing: ["intention", "résultat visé"],
    };
  }
  const hasIntention =
    Boolean(input.projection?.intention?.value?.trim()) ||
    Boolean(input.projection?.desiredOutcome?.value?.trim());
  if (!hasIntention && bundle.length < 24) {
    return {
      kind: "CLARIFICATION",
      question:
        "J'ai besoin de comprendre ce que vous voulez accomplir avec ce projet — pouvez-vous formuler l'intention et le premier résultat attendu ?",
      missing: ["intention"],
    };
  }

  // E07-COR-06 — never invent CADRAGE by default; clarify when no signal.
  const first = inferPreferredFirstCycle(input.projection, bundle);
  if (!first) {
    return {
      kind: "CLARIFICATION",
      question:
        "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
      missing: ["premier cycle", "résultat utile"],
    };
  }
  const follow = followOnCycles(first, bundle);
  const steps: ForecastStep[] = [
    {
      order: 1,
      cycleType: first,
      rationale: "Premier cycle recommandé à partir de votre intention et du périmètre qualifié.",
      certainty: "QUALIFIED",
    },
    ...follow.map((cycleType, i) => ({
      order: i + 2,
      cycleType,
      rationale: "Suite envisagée si le premier cycle confirme la direction.",
      certainty: "ENVISIONED" as const,
    })),
  ];

  const labels = steps.map((s) => CYCLE_LABELS[s.cycleType]);
  const orientation = `Trajectoire séquentielle proposée : ${labels.join(" → ")}.`;
  const summary = `Je recommande d'ouvrir d'abord un cycle ${CYCLE_LABELS[first]}, puis d'envisager ${labels.slice(1).join(", ") || "la suite"} selon ce que nous qualifions ensemble.`;

  return { kind: "PROPOSE", steps, orientation, summary };
}

export function qualificationInputFingerprint(input: {
  preparationId: string;
  projection: PreparationProjection | null;
  previewSummary: string;
  creationRevision: number;
}): string {
  const payload = {
    preparationId: input.preparationId,
    creationRevision: input.creationRevision,
    previewSummary: input.previewSummary.trim(),
    projectionRevision: input.projection?.revision ?? 0,
    intention: input.projection?.intention?.value ?? "",
    desiredOutcome: input.projection?.desiredOutcome?.value ?? "",
    initialScope: input.projection?.initialScope?.value ?? "",
  };
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}

export function parseForecastJson(raw: unknown): ForecastStep[] | null {
  if (!Array.isArray(raw)) return null;
  const steps: ForecastStep[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") return null;
    const o = row as Record<string, unknown>;
    const cycleType = typeof o.cycleType === "string" && isCycleType(o.cycleType) ? o.cycleType : null;
    if (!cycleType) return null;
    steps.push({
      order: typeof o.order === "number" ? o.order : steps.length + 1,
      cycleType,
      rationale: typeof o.rationale === "string" ? o.rationale : "",
      certainty: o.certainty === "ENVISIONED" ? "ENVISIONED" : "QUALIFIED",
    });
  }
  return steps.length ? steps.sort((a, b) => a.order - b.order) : null;
}
```

### `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts`

- SHA256: `68dbb259f9d55b599ee0cb8d5f0d9c548eb72e706a54463e2f8a425eeef9512f`
- Bytes: 1356

```
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

const BLOCKING = new Set(["PENDING", "RUNNING", "UNKNOWN"]);

export function isInitialQualificationComposerLocked(
  q: InitialQualificationProjection | null | undefined,
): boolean {
  if (!q) return false;
  return BLOCKING.has(q.status);
}

export function initialQualificationComposerReason(
  q: InitialQualificationProjection | null | undefined,
): string {
  if (!q || !isInitialQualificationComposerLocked(q)) return "";
  if (q.status === "UNKNOWN") {
    return "La qualification initiale de trajectoire est en cours de réconciliation — le compositeur est temporairement indisponible.";
  }
  if (q.phase === "PUBLISHING") {
    return "Nora finalise la proposition de trajectoire (étape 3/3) — le compositeur est verrouillé jusqu'à la restitution.";
  }
  if (q.phase === "ANALYZING") {
    return "Nora analyse votre intention pour proposer une trajectoire (étape 2/3) — le compositeur est verrouillé.";
  }
  return "Qualification initiale de trajectoire en cours (étape 1/3) — le compositeur est verrouillé jusqu'à la proposition ou une clarification.";
}

export function blocksPilotTurnAdmission(q: InitialQualificationProjection | null | undefined): boolean {
  if (!q) return false;
  return BLOCKING.has(q.status);
}
```

### `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx`

- SHA256: `1f59d1ed12a9e1421aa52e2d5ecd95ea4392afc21d6e5c0ebbf469a6aa7c871b`
- Bytes: 32927

```
"use client";

import { useState } from "react";
import Link from "next/link";
import type { ForecastStep } from "@/domains/pilotage/forecast-builder";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import type { PilotageProjection } from "@/domains/pilotage/types";

const CYCLE_LABELS: Record<string, string> = {
  CADRAGE: "Cadrage",
  CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
  UX_UI: "Conception UX",
  BACKLOG: "Backlog",
};

function labelCycle(type: string): string {
  return CYCLE_LABELS[type] ?? type.replace(/_/g, " ");
}

type DetailView =
  | { kind: "main" }
  | { kind: "bilan"; cycleId: string }
  | { kind: "future"; cycleType: string; rationale?: string | null }
  | { kind: "cki" };

/** Exposed for screenshot seeding / e2e when parcours banner is absent (proposition-only). */
function CkiShortcut(props: { onOpen: () => void }) {
  return (
    <button
      type="button"
      className="text-xs font-semibold text-[#7477ed] hover:underline"
      data-testid="trajectory-open-cki"
      onClick={props.onOpen}
    >
      Accès CKI et méthode
    </button>
  );
}

export function TrajectoryBoard(props: {
  projectId: string;
  pilotage: PilotageProjection | null;
  initialQualification: InitialQualificationProjection | null;
  onOpenTravail: () => void;
}) {
  const [detail, setDetail] = useState<DetailView>({ kind: "main" });
  const q = props.initialQualification;
  const cycle = props.pilotage?.cycle;
  const proposed = props.pilotage?.trajectory.proposed;
  const retained = props.pilotage?.trajectory.retained;
  const forecast =
    proposed?.forecastSteps ?? retained?.forecastSteps ?? q?.forecastSteps ?? null;
  const closed = props.pilotage?.closedCycles ?? [];
  // E07-COR-12 — exclusive display matrix (no stacked contradiction).
  const showUnknown = q?.status === "UNKNOWN";
  const showAnalyzing = Boolean(
    q && (q.status === "PENDING" || q.status === "RUNNING"),
  );
  const showClarification = q?.status === "CLARIFICATION";
  const showFailed = q?.status === "FAILED";
  const hasRetained = Boolean(retained);
  const hasProposedOnly = Boolean(proposed) && !hasRetained;
  // E07-COR-11 — proposition initiale only when PROPOSED (not already RETAINED).
  const showProposal =
    !showAnalyzing &&
    !showUnknown &&
    !showClarification &&
    !showFailed &&
    !cycle &&
    closed.length === 0 &&
    hasProposedOnly &&
    Boolean(forecast && forecast.length > 0);
  // E07 09.08 — after CLOSED with no ACTIVE, show roadmap (not "retained only").
  const showRetainedWithoutCycle =
    !showAnalyzing &&
    !showUnknown &&
    !showClarification &&
    !showFailed &&
    !cycle &&
    !showProposal &&
    hasRetained &&
    closed.length === 0;

  if (detail.kind === "bilan") {
    const closedCycle = closed.find((c) => c.id === detail.cycleId);
    return (
      <BilanHistoriqueView
        projectId={props.projectId}
        cycle={closedCycle ?? null}
        onBack={() => setDetail({ kind: "main" })}
      />
    );
  }

  if (detail.kind === "future") {
    return (
      <EtapeFutureView
        cycleType={detail.cycleType}
        rationale={detail.rationale}
        onBack={() => setDetail({ kind: "main" })}
        onOpenTravail={props.onOpenTravail}
      />
    );
  }

  if (detail.kind === "cki") {
    return (
      <CkiMethodeView
        pilotage={props.pilotage}
        onBack={() => setDetail({ kind: "main" })}
      />
    );
  }

  return (
    <div className="trajectory-board space-y-5" data-testid="trajectory-board">
      <header className="space-y-2" data-testid="trajectory-hero">
        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / TRAJECTOIRE</p>
        <h2 className="fig-hero-title">Trajectoire du projet</h2>
        <p className="fig-hero-sub max-w-3xl">
          {showAnalyzing
            ? "Le projet est créé. Nora prépare actuellement une première orientation de cycles."
            : showProposal
              ? "Nora a formulé une orientation initiale. Elle reste à examiner et à décider avec vous."
              : showClarification
                ? "Aucune trajectoire définie tant que la direction n’est pas précisée avec Nora."
                : "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre."}
        </p>
      </header>

      {showUnknown ? (
        <section className="fig-panel space-y-2" data-testid="trajectory-unknown">
          <p className="fig-kicker text-[#a3b0c7]">RÉCONCILIATION EN COURS</p>
          <h3 className="fig-section-title">État de qualification à confirmer</h3>
          <p className="text-sm text-[#a3b0c7]">
            Studio vérifie si une proposition a déjà été publiée. Le compositeur reste indisponible
            jusqu&apos;à confirmation.
          </p>
        </section>
      ) : null}

      {showAnalyzing ? (
        <AnalyzingCard
          uiStep={q?.uiStep ?? 2}
          onOpenTravail={props.onOpenTravail}
        />
      ) : null}

      {showClarification ? (
        <section
          className="fig-panel space-y-3 text-center py-10"
          data-testid="trajectory-clarification"
        >
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE À CONSTRUIRE</p>
          <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
            Aucune trajectoire définie
          </h3>
          <p className="text-sm text-[#a3b0c7] max-w-xl mx-auto">
            {q?.clarificationQuestion ??
              "Nora a besoin d’une précision ciblée avant de proposer une suite de cycles."}
          </p>
          <button type="button" className="btn primary mt-2" onClick={props.onOpenTravail}>
            Travailler sur le projet avec Nora ↗
          </button>
        </section>
      ) : null}

      {showFailed ? (
        <section className="fig-panel space-y-2" data-testid="trajectory-incident">
          <p className="fig-kicker text-[#a3b0c7]">Incident technique</p>
          <h3 className="fig-section-title">Qualification interrompue</h3>
          <p className="text-sm text-[#a3b0c7]">
            Le projet reste accessible. Reprenez la conversation pour préciser la direction.
          </p>
          <button type="button" className="btn secondary mt-2" onClick={props.onOpenTravail}>
            Revenir à Travail ↗
          </button>
        </section>
      ) : null}

      {showProposal && forecast ? (
        <>
          <PropositionInitialeCard
            forecast={forecast}
            retainedId={retained?.id}
            proposedId={proposed?.id}
            onOpenTravail={props.onOpenTravail}
            onOpenFuture={(step) =>
              setDetail({
                kind: "future",
                cycleType: step.cycleType,
                rationale: step.rationale,
              })
            }
          />
          <div className="flex justify-end">
            <CkiShortcut onOpen={() => setDetail({ kind: "cki" })} />
          </div>
        </>
      ) : null}

      {showRetainedWithoutCycle ? (
        <section className="fig-panel space-y-3" data-testid="trajectory-retained-no-cycle">
          <p className="fig-kicker text-[#7477ed]">ORIENTATION RETENUE</p>
          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
            Une orientation est retenue — aucun cycle n&apos;est encore ouvert
          </h3>
          <p className="text-sm text-[#a3b0c7]">
            {retained?.orientation ||
              "Le Pilote peut ouvrir le premier cycle par un GO clair dans Travail."}
          </p>
          <button type="button" className="btn primary" onClick={props.onOpenTravail}>
            Ouvrir le travail avec Nora ↗
          </button>
        </section>
      ) : null}

      {!showAnalyzing &&
      !showUnknown &&
      !showClarification &&
      !showFailed &&
      !showProposal &&
      !showRetainedWithoutCycle ? (
        <ParcoursPrincipal
          projectId={props.projectId}
          closed={closed}
          cycle={cycle ?? null}
          forecast={forecast}
          method={props.pilotage?.method ?? null}
          onOpenBilan={(cycleId) => setDetail({ kind: "bilan", cycleId })}
          onOpenFuture={(cycleType, rationale) =>
            setDetail({ kind: "future", cycleType, rationale })
          }
          onOpenCki={() => setDetail({ kind: "cki" })}
          onOpenTravail={props.onOpenTravail}
        />
      ) : null}
    </div>
  );
}

function AnalyzingCard(props: { uiStep: number; onOpenTravail: () => void }) {
  const step = Math.min(3, Math.max(1, props.uiStep));
  return (
    <section
      className="fig-panel border border-[#7477ed44] space-y-4 py-10 text-center"
      data-testid="trajectory-qualification-progress"
      data-step={step}
    >
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
        style={{ background: "radial-gradient(circle, #7477ed55 0%, #7477ed11 70%)" }}
        aria-hidden
      >
        <span className="text-xl font-semibold text-[#a8adff]">a</span>
      </div>
      <p className="fig-kicker text-[#7477ed]">QUALIFICATION EN COURS</p>
      <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
        Nora prépare votre trajectoire
      </h3>
      <p className="text-sm text-[#a3b0c7] max-w-xl mx-auto">
        Elle confronte les éléments du SAS aux cycles pertinents pour proposer une progression
        adaptée.
      </p>
      <ol className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#a3b0c7] pt-2">
        <li className={step >= 1 ? "text-[#6cdbba]" : ""}>
          {step > 1 ? "✓" : "●"} Projet créé
        </li>
        <li className={step === 2 ? "text-[#f3f5ff]" : step > 2 ? "text-[#6cdbba]" : ""}>
          {step > 2 ? "✓" : step === 2 ? "●" : "○"} Identification des cycles · {Math.min(step, 2)} / 3
        </li>
        <li className={step >= 3 ? "text-[#f3f5ff]" : ""}>
          {step >= 3 ? "●" : "○"} Réponse de Nora à venir
        </li>
      </ol>
      <button type="button" className="btn primary mt-4" onClick={props.onOpenTravail}>
        Revenir à Travail ↗
      </button>
      <p className="text-xs text-[#7787a4] pt-2">
        L&apos;état s&apos;actualise ici dès que la qualification progresse. Aucun cycle n&apos;est
        encore ouvert.
      </p>
    </section>
  );
}

function PropositionInitialeCard(props: {
  forecast: ForecastStep[];
  retainedId?: string | null;
  proposedId?: string | null;
  onOpenTravail: () => void;
  onOpenFuture: (step: ForecastStep) => void;
}) {
  return (
    <section
      className="fig-panel space-y-5"
      data-testid="trajectory-proposal-sequential"
      style={{ borderColor: "#2b3850" }}
    >
      <div>
        <p className="fig-kicker text-[#7477ed]">PROPOSITION INITIALE DE NORA</p>
        <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff] mt-1">
          Une progression possible pour ce projet
        </h3>
        <p className="text-sm text-[#a3b0c7] mt-2 max-w-3xl">
          Une suite séquentielle de cycles ; ce ne sont pas trois options concurrentes. Aucun cycle
          n&apos;est encore ouvert.
        </p>
      </div>

      <div className="flex flex-wrap items-stretch gap-3" data-testid="trajectory-forecast-steps">
        {props.forecast.map((step, idx) => {
          const isFirst = idx === 0;
          return (
            <div key={`${step.order}-${step.cycleType}`} className="flex items-stretch gap-3 min-w-0">
              <button
                type="button"
                onClick={() => props.onOpenFuture(step)}
                className="fig-panel text-left space-y-2 min-w-[200px] max-w-[260px] flex-1"
                style={{
                  borderColor: isFirst ? "#7477ed88" : "#2b3850",
                  background: isFirst ? "#7477ed0d" : "transparent",
                }}
                data-testid={`trajectory-forecast-step-${step.order}`}
              >
                <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
                  {String(step.order).padStart(2, "0")}{" "}
                  {isFirst ? "Premier cycle recommandé" : "Suite envisagée"}
                </p>
                <p className="text-lg font-semibold text-[#f3f5ff]">
                  {labelCycle(step.cycleType)}
                </p>
                {step.rationale ? (
                  <p className="text-sm text-[#a3b0c7] line-clamp-3">{step.rationale}</p>
                ) : null}
              </button>
              {idx < props.forecast.length - 1 ? (
                <span className="self-center text-[#7787a4]" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        className="rounded-md border px-3 py-2 text-xs text-[#a3b0c7]"
        style={{ borderColor: "#2b3850", background: "#0b0f1a66" }}
      >
        Proposition non retenue · Aucun cycle ouvert · Le Pilote peut accepter, réorienter ou
        demander des précisions
      </div>

      <div className="flex justify-end">
        <button type="button" className="btn primary" onClick={props.onOpenTravail}>
          Examiner avec Nora dans Travail ↗
        </button>
      </div>
    </section>
  );
}

function ParcoursPrincipal(props: {
  projectId: string;
  closed: NonNullable<PilotageProjection["closedCycles"]>;
  cycle: PilotageProjection["cycle"];
  forecast: ForecastStep[] | null;
  method: PilotageProjection["method"] | null;
  onOpenBilan: (cycleId: string) => void;
  onOpenFuture: (cycleType: string, rationale?: string | null) => void;
  onOpenCki: () => void;
  onOpenTravail: () => void;
}) {
  const cards: Array<{
    key: string;
    order: string;
    title: string;
    status: "closed" | "active" | "envisioned";
    statusLabel: string;
    actionLabel?: string;
    onAction?: () => void;
    subtitle?: string;
  }> = [];

  props.closed.forEach((c, i) => {
    cards.push({
      key: c.id,
      order: String(i + 1).padStart(2, "0"),
      title: labelCycle(c.cycleType),
      status: "closed",
      statusLabel: "Clôturé",
      actionLabel: "Voir le bilan ↗",
      onAction: () => props.onOpenBilan(c.id),
    });
  });

  if (props.cycle) {
    cards.push({
      key: props.cycle.id,
      order: String(cards.length + 1).padStart(2, "0"),
      title: labelCycle(props.cycle.cycleType),
      status: "active",
      statusLabel: "Actif",
      subtitle: "Cycle en cours",
    });
  }

  // E07-COR-10 — future steps by sequence identity/order, not by type uniqueness.
  const consumedOrders = new Set<number>();
  if (props.cycle && props.forecast?.length) {
    const match = props.forecast.find((s) => s.cycleType === props.cycle!.cycleType);
    if (match) consumedOrders.add(match.order);
  }
  props.closed.forEach((c) => {
    const match = props.forecast?.find(
      (s) => s.cycleType === c.cycleType && !consumedOrders.has(s.order),
    );
    if (match) consumedOrders.add(match.order);
  });
  const futureSteps =
    props.forecast?.filter((s) => !consumedOrders.has(s.order)).sort((a, b) => a.order - b.order) ??
    [];

  futureSteps.forEach((step) => {
    cards.push({
      key: `f-${step.order}-${step.cycleType}`,
      order: String(step.order).padStart(2, "0"),
      title: labelCycle(step.cycleType),
      status: "envisioned",
      statusLabel: "Envisagée",
      actionLabel: "Voir l'étape ↗",
      onAction: () => props.onOpenFuture(step.cycleType, step.rationale),
    });
  });

  const closedCount = props.closed.length;
  const activeCount = props.cycle ? 1 : 0;

  return (
    <div className="space-y-5" data-testid="trajectory-roadmap">
      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="fig-kicker">PARCOURS DU PROJET</p>
            <p className="text-xs text-[#7787a4] mt-1">
              {activeCount} CYCLE ACTIF · {closedCount} CLÔTURÉ{closedCount > 1 ? "S" : ""}
            </p>
          </div>
        </div>

        {cards.length === 0 ? (
          <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-no-active-cycle">
            Aucun cycle actif — la trajectoire reste une proposition tant qu&apos;un GO n&apos;est
            pas exprimé.
          </p>
        ) : (
          <div
            className="flex flex-wrap items-stretch gap-3"
            data-testid="trajectory-roadmap-cards"
          >
            {cards.map((card, idx) => (
              <div key={card.key} className="flex items-stretch gap-3">
                <article
                  className="fig-panel relative space-y-2 overflow-hidden"
                  style={{
                    width: 396,
                    minHeight: 128,
                    borderColor:
                      card.status === "closed"
                        ? "#6cdbba55"
                        : card.status === "active"
                          ? "#7477ed88"
                          : "#2b3850",
                    borderLeftWidth:
                      card.status === "closed" ? 5 : card.status === "active" ? 7 : 4,
                    borderLeftColor:
                      card.status === "closed"
                        ? "#6cdbba"
                        : card.status === "active"
                          ? "#7477ed"
                          : "#3a4660",
                  }}
                  data-testid={
                    card.status === "active"
                      ? "trajectory-active-cycle"
                      : card.status === "closed"
                        ? "trajectory-closed-cycle"
                        : "trajectory-future-cycle"
                  }
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
                      {card.order} {card.title}
                    </p>
                    <span
                      className="text-xs font-semibold whitespace-nowrap"
                      style={{
                        color:
                          card.status === "closed"
                            ? "#6cdbba"
                            : card.status === "active"
                              ? "#a8adff"
                              : "#a3b0c7",
                      }}
                    >
                      {card.status === "closed"
                        ? "✓ "
                        : card.status === "active"
                          ? "● "
                          : "○ "}
                      {card.statusLabel}
                    </span>
                  </div>
                  {card.subtitle ? (
                    <p className="text-sm text-[#f3f5ff]">{card.subtitle}</p>
                  ) : null}
                  {card.onAction && card.actionLabel ? (
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#7477ed] hover:underline"
                      onClick={card.onAction}
                    >
                      {card.actionLabel}
                    </button>
                  ) : null}
                </article>
                {idx < cards.length - 1 ? (
                  <span className="self-center text-[#7787a4] text-2xl" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {!props.cycle && closedCount > 0 ? (
          <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-between-cycles">
            Aucun cycle actif — un prochain cycle peut être retenu après GO du Pilote.
          </p>
        ) : null}
      </section>

      {props.cycle ? (
        <section
          className="fig-panel space-y-3"
          data-testid="trajectory-cycle-actif-panel"
          style={{ borderColor: "#7477ed44" }}
        >
          <p className="fig-kicker text-[#7477ed]">CYCLE ACTIF</p>
          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
            {labelCycle(props.cycle.cycleType)}
          </h3>
          <p className="text-sm text-[#a3b0c7]">{props.cycle.objective}</p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href={`/projects/${props.projectId}?surface=journal`}
              className="text-sm font-semibold text-[#7477ed] hover:underline"
            >
              Consulter le Journal ↗
            </Link>
            <button
              type="button"
              className="text-sm font-semibold text-[#7477ed] hover:underline"
              onClick={props.onOpenCki}
            >
              Accès CKI et méthode
            </button>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="w-full fig-panel flex items-center justify-between text-left"
        data-testid="trajectory-cki-banner"
        onClick={props.onOpenCki}
        style={{ borderColor: "#2b3850" }}
      >
        <span className="text-sm text-[#f3f5ff]">Guidance CKI et méthode</span>
        <span className="text-sm text-[#7477ed]">
          {props.cycle?.cki.ckiId
            ? `${props.cycle.cki.ckiId} · ${labelCycle(props.cycle.cycleType)} ›`
            : props.method?.presence === "RETAINED"
              ? `${props.method.methodRef} ›`
              : "Références ›"}
        </span>
      </button>
    </div>
  );
}

function BilanHistoriqueView(props: {
  projectId: string;
  cycle: { id: string; cycleType: string; objective: string; closedAt: string | null } | null;
  onBack: () => void;
}) {
  const closedLabel = props.cycle?.closedAt
    ? new Date(props.cycle.closedAt).toLocaleDateString("fr-FR")
    : null;
  return (
    <div className="space-y-5" data-testid="trajectory-bilan-historique">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / HISTORIQUE DES CYCLES</p>
          <h2 className="fig-hero-title">
            Bilan du {props.cycle ? labelCycle(props.cycle.cycleType).toLowerCase() : "cycle"}
          </h2>
          <p className="text-sm text-[#a3b0c7]">
            {closedLabel
              ? `Cycle clôturé le ${closedLabel}`
              : "Cycle clôturé — date de clôture non disponible"}
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      <section className="fig-panel space-y-2">
        <p className="fig-kicker text-[#7477ed]">OBJECTIF DU CYCLE</p>
        <p className="text-sm text-[#a3b0c7]">
          {props.cycle?.objective?.trim() || "Objectif initial non reconstitué."}
        </p>
        <div className="h-px bg-[#2b3850]" />
        <p className="fig-kicker text-[#7477ed]">RÉSULTAT À LA CLÔTURE</p>
        <p className="text-sm text-[#f3f5ff]">
          Résultat distinct de l&apos;objectif initial — note de bilan non encore capturée dans
          cette projection ; lacune signalée sans fiction.
        </p>
        <p className="text-xs text-[#a3b0c7] text-right">Clôture décidée par le Pilote</p>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-2">
          <h3 className="text-lg font-semibold text-[#f3f5ff]">Travaux et éléments réalisés</h3>
          {closedLabel ? (
            <p className="text-xs text-[#7787a4]">SITUATION AU {closedLabel}</p>
          ) : null}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <BilanGapCard
            title="Sujets abordés"
            note="Projection historique bornée non encore capturée pour ce cycle — lacune signalée, aucun inventaire fictif."
            href={`/projects/${props.projectId}?surface=journal`}
            linkLabel="Consulter les sujets ↗"
          />
          <BilanGapCard
            title="Réserves transmises"
            note="Les réserves à date de clôture ne sont pas reconstituables ici sans capture bornée."
            href={`/projects/${props.projectId}?surface=journal`}
            linkLabel="Consulter le Journal ↗"
          />
          <BilanGapCard
            title="Documents produits"
            note="Versions documentaires à la clôture non projetées dans ce panneau."
            href={`/projects/${props.projectId}?surface=document`}
            linkLabel="Consulter les documents ↗"
          />
        </div>
      </section>

      <p className="text-xs text-[#7787a4]">
        Ce bilan conserve l&apos;état à la clôture. Le Journal, les réserves et les documents
        continuent d&apos;évoluer dans le projet.
      </p>
    </div>
  );
}

function BilanGapCard(props: {
  title: string;
  note: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <section className="fig-panel space-y-2">
      <h4 className="font-semibold text-[#f3f5ff]">{props.title}</h4>
      <p className="text-sm text-[#a3b0c7]">{props.note}</p>
      <Link href={props.href} className="text-sm font-semibold text-[#7477ed] hover:underline">
        {props.linkLabel}
      </Link>
    </section>
  );
}

function EtapeFutureView(props: {
  cycleType: string;
  rationale?: string | null;
  onBack: () => void;
  onOpenTravail: () => void;
}) {
  return (
    <div className="space-y-5" data-testid="trajectory-etape-future">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / ÉTAPE ENVISAGÉE</p>
          <h2 className="fig-hero-title">{labelCycle(props.cycleType)}</h2>
          <p className="fig-hero-sub max-w-3xl">
            Étape future non ouverte — consultation seule, sans mutation D5.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      {/* Figma 09.04 — two distinct zones: synthèse (345) then action (181). */}
      <section
        className="fig-panel space-y-4"
        data-testid="trajectory-future-summary"
        style={{ minHeight: 345 }}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="fig-kicker text-[#7477ed]">ÉTAPE ENVISAGÉE</p>
          <span className="text-xs font-semibold text-[#a3b0c7]">○ Cycle non ouvert</span>
        </div>
        <div className="h-px bg-[#2b3850]" />
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            FINALITÉ ACTUELLEMENT ENVISAGÉE
          </p>
          <p className="text-sm text-[#f3f5ff]">
            {props.rationale?.trim() ||
              "Finalité à préciser avec Nora — aucune ouverture automatique."}
          </p>
        </section>
        <div className="h-px bg-[#2b3850]" />
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            CE QUI RESTE À DÉFINIR
          </p>
          <p className="text-sm text-[#a3b0c7]">
            Objectif opérationnel, critères de clôture et CKI principal — uniquement après GO du
            Pilote.
          </p>
        </section>
      </section>

      <section
        className="fig-panel space-y-3"
        data-testid="trajectory-future-action"
        style={{ minHeight: 181 }}
      >
        <h3 className="text-lg font-semibold text-[#f3f5ff]">Travailler la suite avec Nora</h3>
        <p className="text-sm text-[#a3b0c7]">
          Cette étape reste envisagée. Le Pilote peut la qualifier dans Travail ; aucun cycle
          n&apos;est ouvert ici.
        </p>
        <button type="button" className="btn primary" onClick={props.onOpenTravail}>
          Travailler la suite avec Nora ↗
        </button>
      </section>

      <p className="text-xs text-[#7787a4]">
        Retour à Travail sans changement d&apos;état D5 — consultation seule.
      </p>
    </div>
  );
}

function CkiMethodeView(props: {
  pilotage: PilotageProjection | null;
  onBack: () => void;
}) {
  const cycle = props.pilotage?.cycle;
  const method = props.pilotage?.method;
  return (
    <div className="space-y-5" data-testid="trajectory-cki-methode">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / RÉFÉRENCES DU CYCLE</p>
          <h2 className="fig-hero-title">CKI et méthode</h2>
          <p className="fig-hero-sub max-w-3xl">
            Deux références distinctes : la spécialisation cognitive du cycle et la méthode
            applicable au projet.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      {/* Figma 09.05 — asymmetric: CKI ~872px, méthode ~464px */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "minmax(0, 872fr) minmax(0, 464fr)" }}
        data-testid="trajectory-cki-layout"
      >
        <section className="fig-panel space-y-3" data-testid="trajectory-cki-main">
          <p className="fig-kicker text-[#7477ed]">GUIDANCE CKI PRINCIPALE</p>
          {cycle?.cki.ckiId ? (
            <>
              <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">{cycle.cki.ckiId}</h3>
              <p className="text-sm text-[#a3b0c7]">
                Référence applicable au cycle {labelCycle(cycle.cycleType)}
                {cycle.cki.pinnedVersion ? ` · version ${cycle.cki.pinnedVersion}` : ""}
              </p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Finalité</p>
              <p className="text-sm text-[#f3f5ff]">{cycle.objective}</p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Disponibilité</p>
              <p className="text-sm text-[#a3b0c7]">
                {cycle.cki.availability} — ASSOCIATED / RESOLVED / DELIVERED restent distincts ;
                aucun claim DELIVERED sans preuve.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucun CKI principal actif</h3>
              <p className="text-sm text-[#a3b0c7]">
                Un CKI principal n&apos;existe qu&apos;avec un cycle réellement ouvert. Aucune
                génération automatique à l&apos;ouverture.
              </p>
            </>
          )}
        </section>

        <section className="fig-panel space-y-3" data-testid="trajectory-method-side">
          <p className="fig-kicker text-[#7477ed]">MÉTHODE APPLICABLE AU PROJET</p>
          {method?.presence === "RETAINED" ? (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">{method.methodRef}</h3>
              <p className="text-sm text-[#a3b0c7]">Version {method.methodVersion}</p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Statut</p>
              <p className="text-sm text-[#a3b0c7]">
                Retenue par décision Pilote
                {method.usageRestricted ? " — usage restreint" : ""}.
              </p>
              {method.usageNote ? (
                <>
                  <div className="h-px bg-[#2b3850]" />
                  <p className="text-sm text-[#a3b0c7]">{method.usageNote}</p>
                </>
              ) : null}
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucune méthode retenue</h3>
              <p className="text-sm text-[#a3b0c7]">
                La méthode applicable est distincte du CKI et n&apos;est pas imposée par Nora.
              </p>
            </>
          )}
        </section>
      </div>

      <p className="text-xs text-[#7787a4]">
        Lecture des références existantes : aucun nouveau résumé IA n&apos;est généré à
        l&apos;ouverture de cette page.
      </p>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx`

- SHA256: `d46ebc57892b5578dc6ee9662cc384f0fc312736329fcd970ca6968ed0f16d08`
- Bytes: 3108

```
"use client";

import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

export function SasCreateProgressPopup(props: {
  visible: boolean;
  projectName: string;
  step: 1 | 2 | 3;
  qualification: InitialQualificationProjection | null;
  onDismiss: () => void;
}) {
  if (!props.visible) return null;

  const labels = [
    {
      title: "Projet créé",
      detail: "Il reste accessible, même si vous quittez Studio.",
    },
    {
      title: "Identification des cycles pertinents",
      detail: "Analyse des cycles pertinents et des références CKI.",
    },
    {
      title: "Proposition ou clarification",
      detail: "Nora restituera la trajectoire dans le fil Travail.",
    },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sas-create-progress-title"
      data-testid="sas-create-progress-popup"
    >
      <div
        className="w-full max-w-md rounded-xl border px-5 py-4 shadow-lg"
        style={{ background: "#0f1118", borderColor: "#7477ed44", color: "#f3f5ff" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-[#7477ed]">
          PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION
        </p>
        <h2 id="sas-create-progress-title" className="text-lg font-medium mt-1">
          Projet créé. Nora prépare la suite.
        </h2>
        <ol className="mt-4 space-y-3">
          {labels.map((item, idx) => {
            const n = (idx + 1) as 1 | 2 | 3;
            const done = props.step > n;
            const current = props.step === n;
            return (
              <li
                key={item.title}
                className="flex gap-3 text-sm"
                data-testid={`sas-create-step-${n}`}
                data-current={current ? "1" : "0"}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: done || current ? "#7477ed" : "#a3b0c733",
                    color: done || current ? "#f3f5ff" : "#a3b0c7",
                  }}
                  aria-hidden
                >
                  {done ? "OK" : n}
                </span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-[#a3b0c7]">{item.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
        {props.qualification?.composerLockReason ? (
          <p className="mt-3 text-xs text-[#a3b0c7]">{props.qualification.composerLockReason}</p>
        ) : null}
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            className="btn secondary"
            onClick={props.onDismiss}
            data-testid="sas-create-progress-dismiss"
          >
            Accéder au projet
          </button>
        </div>
      </div>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts`

- SHA256: `fff63ded9627a700090aa570563d6df9eb996ab81c5bfe522d1b0ecee552c0ae`
- Bytes: 896

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileInitialQualification } from "@/domains/pilotage/initial-qualification";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * E07 — explicit qualification reconcile (POST only).
 * GET project context must not kick processing (E07-COR-02).
 */
export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const initialQualification = await reconcileInitialQualification(
      projectId,
      session.pilotId,
    );
    return NextResponse.json({ initialQualification });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts`

- SHA256: `ff07f6a79ccc16255b0cca0ecda16d8d774e657b5181edfa2b7fa1f275dd4f61`
- Bytes: 16174

```
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  delete process.env.OPENAI_API_KEY;
  // Screenshot capture freezes must not block PG behavioral proofs.
  delete process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION;
});

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  messages,
  pilots,
  preparations,
  trajectoryQualificationOperations,
  trajectoryRevisions,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  applyPreparationProjection,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { draftProjectionFromQualification } from "@/domains/preparation/projection";
import {
  ensureInitialQualification,
  initialQualificationFault,
  processInitialQualification,
} from "@/domains/pilotage/initial-qualification";
import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { StudioError } from "@/lib/http-errors";
import { isInitialQualificationComposerLocked } from "@/domains/pilotage/qualification-lock";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedPrepWithProjection(pilotId: string, name: string, intention: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, intention);
  const draft = draftProjectionFromQualification({
    preparationId: prep.id,
    turnKey: "t-seed",
    qualificationStatus: "QUALIFIED",
    goal: intention,
    projectIntention: intention,
    desiredOutcome: "Premier résultat utile",
    proposedProjectName: name,
    allowGoalIntentionBootstrap: true,
  });
  if (!draft) throw new Error("projection draft missing");
  await applyPreparationProjection({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: 1,
    draft,
  });
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  return { prep: refreshed, name };
}


function requireProjectId(created: Awaited<ReturnType<typeof createProjectCommand>>): string {
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`unexpected create status ${created.status}`);
  }
  return created.projectId;
}

async function createProjectFromPrep(pilotId: string, prepId: string, name: string, rev: number) {
  return createProjectCommand({
    pilotId,
    preparationId: prepId,
    expectedCreationRevision: rev,
    projectName: name,
    previewSummary: "summary",
    idempotencyKey: newId("idem"),
  });
}

describe("Ensemble 07 initial qualification (PG)", () => {
  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    await db.execute(sql`select 1`);
    try {
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS trajectory_qualification_operations (
          id text PRIMARY KEY,
          project_id text NOT NULL REFERENCES projects(id),
          preparation_id text NOT NULL REFERENCES preparations(id),
          pilot_id text NOT NULL REFERENCES pilots(id),
          status text NOT NULL,
          phase text NOT NULL,
          version integer NOT NULL DEFAULT 1,
          input_fingerprint text NOT NULL DEFAULT '',
          trajectory_revision_id text,
          assistant_message_id text,
          result_json jsonb,
          error_code text,
          owner_token text,
          claimed_at timestamptz,
          created_at timestamptz NOT NULL DEFAULT now(),
          updated_at timestamptz NOT NULL DEFAULT now()
        )
      `);
      await db.execute(sql`
        CREATE UNIQUE INDEX IF NOT EXISTS trajectory_qualification_operations_project_uidx
          ON trajectory_qualification_operations (project_id)
      `);
      await db.execute(sql`
        ALTER TABLE trajectory_revisions ADD COLUMN IF NOT EXISTS forecast_json jsonb
      `);
    } catch {
      /* migration may already be applied */
    }
  });

  it("create→ensure→process yields one PROPOSED trajectory and one assistant message", async () => {
    const pilotId = await seedPilot("e07-main");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Main",
      "Cadrage d'une plateforme de suivi pour équipes produit",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    expect(created.status).toBe("CREATED");
    const projectId = requireProjectId(created);

    const stub = await ensureInitialQualification({
      projectId,
      preparationId: prep.id,
      pilotId,
    });
    expect(stub.status).toBe("PENDING");

    const terminal = await processInitialQualification(projectId, { pilotId });
    expect(terminal?.status).toBe("PROPOSED");
    expect(terminal?.trajectoryRevisionId).toBeTruthy();
    expect(terminal?.assistantMessageId).toBeTruthy();
    expect(isInitialQualificationComposerLocked(terminal)).toBe(false);

    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);

    const proposed = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "PROPOSED")),
      );
    expect(proposed).toHaveLength(1);
    expect(proposed[0]?.forecastJson).toBeTruthy();

    const assistant = await db
      .select()
      .from(messages)
      .where(eq(messages.id, terminal!.assistantMessageId!));
    expect(assistant).toHaveLength(1);
    expect(assistant[0]?.role).toBe("assistant");
  });

  it("double ensure is idempotent", async () => {
    const pilotId = await seedPilot("e07-idem");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Idem",
      "Cadrage d'un projet idempotent",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    const a = await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const b = await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    expect(a.operationId).toBe(b.operationId);
    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);
  });

  it("process twice does not duplicate assistant message", async () => {
    const pilotId = await seedPilot("e07-dup");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Dup",
      "Cadrage pour éviter les doublons de restitution",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    await processInitialQualification(projectId, { pilotId });
    await processInitialQualification(projectId, { pilotId });

    const ops = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    const gen = `sfia:iq:${ops.id}:v${ops.version}`;
    const msgs = await db.select().from(messages).where(eq(messages.generationId, gen));
    expect(msgs).toHaveLength(1);
  });

  it("blocks composer admission while RUNNING", async () => {
    const pilotId = await seedPilot("e07-lock");
    const { prep, name } = await seedPrepWithProjection(pilotId, "E07Lock", "Verrou pendant RUNNING");
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    await db
      .update(trajectoryQualificationOperations)
      .set({ status: "RUNNING", phase: "ANALYZING", ownerToken: "tok", claimedAt: new Date() })
      .where(eq(trajectoryQualificationOperations.projectId, projectId));

    await expect(assertPilotTurnNotBlockedByQualification(pilotId, projectId)).rejects.toBeInstanceOf(
      StudioError,
    );
    await expect(postUserMessageAndNora(pilotId, prep.id, "Message pendant qualification")).rejects.toMatchObject({
      code: "QUALIFICATION_IN_PROGRESS",
    });
  });

  it("clarification path without D5 propose when intention missing", async () => {
    const pilotId = await seedPilot("e07-clar");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Clarify", " ");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
    const created = await createProjectFromPrep(pilotId, prep.id, "Clarify", refreshed.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const done = await processInitialQualification(projectId, { pilotId });
    expect(done?.status).toBe("CLARIFICATION");
    expect(done?.trajectoryRevisionId).toBeNull();

    const proposed = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId));
    expect(proposed).toHaveLength(0);
  });

  it("failed path surfaces Studio incident, not Nora conclusion", async () => {
    const pilotId = await seedPilot("e07-fail");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Fail",
      "Cadrage — test incident technique",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    initialQualificationFault.beforePublish = () => {
      throw new Error("INJECTED_FAULT");
    };
    const done = await processInitialQualification(projectId, { pilotId });
    initialQualificationFault.beforePublish = null;
    expect(done?.status).toBe("FAILED");
    const msg = (
      await db.select().from(messages).where(eq(messages.id, done!.assistantMessageId!))
    )[0];
    expect(msg?.role).toBe("system");
    expect(msg?.content).toMatch(/\[Studio\]/);
    expect(msg?.content).not.toMatch(/recommande d'ouvrir/i);
  });

  it("GET project context does not advance PENDING qualification (E07-COR-02)", async () => {
    const pilotId = await seedPilot("e07-get");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Get",
      "Cadrage — GET ne doit pas traiter",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const { getOwnedProjectContext } = await import("@/domains/preparation/project-context");
    const ctx = await getOwnedProjectContext(pilotId, projectId);
    expect(ctx.initialQualification?.status).toBe("PENDING");
    const again = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(again[0]?.status).toBe("PENDING");
  });

  it("reconcile advances PENDING to terminal (E07-COR-01/05)", async () => {
    const pilotId = await seedPilot("e07-recon");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Recon",
      "Cadrage — reconcile explicite",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const { reconcileInitialQualification } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const done = await reconcileInitialQualification(projectId, pilotId);
    expect(done?.status).toBe("PROPOSED");
  });

  it("COR-01: reopen after missing op creates unique qualification then terminal", async () => {
    const pilotId = await seedPilot("e07-cor01-miss");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07MissOp",
      "Cadrage — ensure échoué puis reprise sans opération",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    // Simulate ensureAndKick FAILED_RETRYABLE twice: project exists, no op persisted.
    const before = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(before).toHaveLength(0);

    const { reconcileInitialQualification } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const done = await reconcileInitialQualification(projectId, pilotId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(done?.status);
    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);
    const again = await reconcileInitialQualification(projectId, pilotId);
    expect(again?.operationId).toBe(done?.operationId);
    expect(again?.status).toBe(done?.status);
  });

  it("COR-04: expired owner cannot publish message after lease steal", async () => {
    const pilotId = await seedPilot("e07-cor04-fence");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Fence",
      "Cadrage — fencing des effets après perte de lease",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });

    initialQualificationFault.beforePublish = async () => {
      // Steal ownership mid-flight (simulates reclaim after lease expiry).
      await db
        .update(trajectoryQualificationOperations)
        .set({
          ownerToken: "stolen-owner",
          claimedAt: new Date(),
          status: "RUNNING",
          updatedAt: new Date(),
        })
        .where(eq(trajectoryQualificationOperations.projectId, projectId));
    };

    // First process: loses fence before publish → must not terminalize as that owner.
    await processInitialQualification(projectId, { pilotId });
    initialQualificationFault.beforePublish = null;

    const mid = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    // Clear stolen token so a fresh claim can finish.
    await db
      .update(trajectoryQualificationOperations)
      .set({
        ownerToken: null,
        claimedAt: null,
        status: mid.trajectoryRevisionId ? "UNKNOWN" : "PENDING",
        updatedAt: new Date(),
      })
      .where(eq(trajectoryQualificationOperations.id, mid.id));

    const done = await processInitialQualification(projectId, { pilotId });
    expect(["PROPOSED", "CLARIFICATION"]).toContain(done?.status);

    const genPrefix = `sfia:iq:${mid.id}:`;
    const msgs = await db
      .select()
      .from(messages)
      .where(sql`${messages.generationId} like ${genPrefix + "%"}`);
    expect(msgs.length).toBeLessThanOrEqual(1);
    if (msgs[0]) {
      expect(msgs[0].role).toBe("assistant");
    }
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts`

- SHA256: `bc2fd85e9445034d8408f6c719d688ee71ecf1e92ee0666c22d7f41650672c26`
- Bytes: 1297

```
import { describe, expect, it, vi } from "vitest";

vi.mock("@/db/client", () => ({
  db: {
    select: vi.fn(),
    insert: vi.fn(),
  },
}));

import { ensureInitialQualification } from "@/domains/pilotage/initial-qualification";

describe("ensureInitialQualification idempotency (mocked)", () => {
  it("returns existing projection when row already present", async () => {
    const { db } = await import("@/db/client");
    const existing = {
      id: "iqop_1",
      projectId: "proj_1",
      preparationId: "prep_1",
      pilotId: "pilot_1",
      status: "PENDING",
      phase: "ENGAGED",
      version: 1,
      inputFingerprint: "fp",
      trajectoryRevisionId: null,
      assistantMessageId: null,
      resultJson: null,
      errorCode: null,
      ownerToken: null,
      claimedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const chain = {
      from: () => chain,
      where: () => chain,
      limit: () => Promise.resolve([existing]),
    };
    vi.mocked(db.select).mockReturnValue(chain as never);

    const r = await ensureInitialQualification({
      projectId: "proj_1",
      preparationId: "prep_1",
      pilotId: "pilot_1",
    });
    expect(r.operationId).toBe("iqop_1");
    expect(db.insert).not.toHaveBeenCalled();
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts`

- SHA256: `048becec0a64d6fbeeff8406223fc31dc9e301b33667c8b32340ad812c4b8c09`
- Bytes: 2359

```
import { describe, expect, it } from "vitest";
import { buildInitialForecast } from "@/domains/pilotage/forecast-builder";
import type { PreparationProjection } from "@/domains/preparation/projection";

function projection(partial: Partial<PreparationProjection>): PreparationProjection {
  return {
    schemaVersion: 1,
    preparationId: "prep_1",
    revision: 1,
    updatedFromTurnKey: null,
    observedAt: null,
    name: null,
    intention: null,
    desiredOutcome: null,
    initialScope: null,
    openQuestions: [],
    suggestion: null,
    ...partial,
  };
}

describe("ensemble07 forecast builder", () => {
  it("returns CLARIFICATION when no durable text", () => {
    const r = buildInitialForecast({ projection: null, previewSummary: "   " });
    expect(r.kind).toBe("CLARIFICATION");
  });

  it("does not invent CADRAGE when intention lacks cycle signal (E07-COR-06)", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Lancer un produit B2B pour équipes terrain",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "Terrain",
    });
    expect(r.kind).toBe("CLARIFICATION");
  });

  it("proposes CADRAGE when intention explicitly signals cadrage", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Besoin d'un cadrage pour clarifier le périmètre B2B terrain",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(r.kind).toBe("PROPOSE");
    if (r.kind === "PROPOSE") {
      expect(r.steps[0]!.cycleType).toBe("CADRAGE");
    }
  });

  it("honours explicit UX cycle mention", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Concevoir l'expérience utilisateur d'une application mobile",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(r.kind).toBe("PROPOSE");
    if (r.kind === "PROPOSE") {
      expect(r.steps[0]!.cycleType).toBe("UX_UI");
    }
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts`

- SHA256: `d642205cccad1b479976709dbaf0931ba8b89ae0ea2bf5397b29d243533c7919`
- Bytes: 1477

```
import { describe, expect, it } from "vitest";
import {
  blocksPilotTurnAdmission,
  isInitialQualificationComposerLocked,
} from "@/domains/pilotage/qualification-lock";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

function q(status: InitialQualificationProjection["status"]): InitialQualificationProjection {
  return {
    operationId: "iq_1",
    projectId: "proj_1",
    preparationId: "prep_1",
    status,
    phase: status === "PROPOSED" ? "TERMINAL" : "ANALYZING",
    version: 1,
    uiStep: 2,
    composerLocked: false,
    composerLockReason: "",
    trajectoryRevisionId: null,
    assistantMessageId: null,
    forecastSteps: null,
    clarificationQuestion: null,
    errorCode: null,
  };
}

describe("ensemble07 qualification lock", () => {
  it("locks composer while PENDING or RUNNING", () => {
    expect(isInitialQualificationComposerLocked(q("PENDING"))).toBe(true);
    expect(isInitialQualificationComposerLocked(q("RUNNING"))).toBe(true);
    expect(isInitialQualificationComposerLocked(q("PROPOSED"))).toBe(false);
    expect(isInitialQualificationComposerLocked(q("CLARIFICATION"))).toBe(false);
    expect(isInitialQualificationComposerLocked(q("FAILED"))).toBe(false);
  });

  it("blocks pilot admission same as composer lock for in-flight", () => {
    expect(blocksPilotTurnAdmission(q("RUNNING"))).toBe(true);
    expect(blocksPilotTurnAdmission(q("PROPOSED"))).toBe(false);
  });
});
```

### `projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts`

- SHA256: `41ca3de1a803196d7fefa71db2aa241a11a98a68d9e69c11f9182c47e66d867c`
- Bytes: 8698

```
import { config } from "dotenv";
config({ path: ".env.local" });
process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
delete process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION;

import { writeFileSync } from "fs";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client.ts";
import { pilots, preparations } from "../src/db/schema.ts";
import { newId } from "../src/lib/ids.ts";
import {
  applyPreparationProjection,
  openOrCreatePreparation,
  updatePreview,
} from "../src/domains/preparation/service.ts";
import { draftProjectionFromQualification } from "../src/domains/preparation/projection.ts";
import { createProjectCommand } from "../src/domains/preparation/create-project.ts";
import {
  ensureInitialQualification,
  processInitialQualification,
} from "../src/domains/pilotage/initial-qualification.ts";
import {
  closeCycle,
  getPilotageProjection,
  openCycle,
  retainTrajectory,
} from "../src/domains/pilotage/service.ts";

async function pilotA() {
  const pilot =
    (
      await db
        .select()
        .from(pilots)
        .where(eq(pilots.displayName, "Pilot A (DEV)"))
        .limit(1)
    )[0] ?? null;
  if (!pilot) throw new Error("Pilot A (DEV) missing — run DEV login first");
  return pilot;
}

async function createNamedProject(
  pilotId: string,
  name: string,
  intention: string,
  opts: { process: boolean; qualifyProjection: boolean },
) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, intention);
  if (opts.qualifyProjection) {
    const draft = draftProjectionFromQualification({
      preparationId: prep.id,
      turnKey: `t-shot-${name.slice(0, 12)}`,
      qualificationStatus: "QUALIFIED",
      goal: intention,
      projectIntention: intention,
      desiredOutcome: "Rendre les décisions actionnables",
      proposedProjectName: name,
      allowGoalIntentionBootstrap: true,
    });
    if (!draft) throw new Error("draft missing");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id))
    )[0]!;
    await applyPreparationProjection({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      draft,
    });
  }
  const after = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: after.creationRevision,
    projectName: name,
    previewSummary: after.previewSummary ?? "",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`create failed: ${JSON.stringify(created)}`);
  }
  await ensureInitialQualification({
    projectId: created.projectId,
    preparationId: prep.id,
    pilotId,
  });
  let iq = null;
  if (opts.process) {
    iq = await processInitialQualification(created.projectId, { pilotId, force: true });
  }
  return {
    projectId: created.projectId,
    prepId: prep.id,
    iqStatus: iq?.status ?? "PENDING",
  };
}

async function advanceToActiveFirstCycle(pilotId: string, projectId: string) {
  const before = await getPilotageProjection(pilotId, projectId);
  const proposedId = before.trajectory.proposed?.id;
  if (!proposedId) throw new Error("no proposed trajectory");
  const retained = await retainTrajectory(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: before.revision,
    sourceRef: newId("src"),
    trajectoryRevisionId: proposedId,
  });
  if (retained.status !== "APPLIED" && retained.status !== "ALREADY_APPLIED") {
    throw new Error(`retain failed: ${JSON.stringify(retained)}`);
  }
  const mid = await getPilotageProjection(pilotId, projectId);
  const opened = await openCycle(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: mid.revision,
    sourceRef: newId("src"),
    cycleType: "CADRAGE",
    objective: "Clarifier le besoin et le périmètre du premier cycle",
  });
  if (opened.status !== "APPLIED" && opened.status !== "ALREADY_APPLIED") {
    throw new Error(`open failed: ${JSON.stringify(opened)}`);
  }
  return getPilotageProjection(pilotId, projectId);
}

async function closeActiveAndLeaveBetween(pilotId: string, projectId: string) {
  const view = await getPilotageProjection(pilotId, projectId);
  if (!view.cycle) throw new Error("no active cycle to close");
  const closed = await closeCycle(pilotId, projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: view.revision,
    sourceRef: newId("src"),
    cycleId: view.cycle.id,
    balanceNote: "Cadrage clôturé avec acquis partiels — suite à qualifier.",
  });
  if (closed.status !== "APPLIED" && closed.status !== "ALREADY_APPLIED") {
    throw new Error(`close failed: ${JSON.stringify(closed)}`);
  }
  return getPilotageProjection(pilotId, projectId);
}

async function main() {
  const pilot = await pilotA();
  const stamp = Date.now().toString(36);

  const proposed = await createNamedProject(
    pilot.id,
    `Assistant de conduite ${stamp}`,
    "Cadrage puis conception fonctionnelle pour conduire les projets et clarifier les décisions",
    { process: true, qualifyProjection: true },
  );

  const analyzing = await createNamedProject(
    pilot.id,
    `Projet en qualification ${stamp}`,
    "Intention claire pour analyse en cours sans terminal immédiat, cadrage utile",
    { process: false, qualifyProjection: true },
  );

  const clarification = await createNamedProject(
    pilot.id,
    `Projet a preciser ${stamp}`,
    "x",
    { process: true, qualifyProjection: false },
  );

  // 09.09 — first ACTIVE, no CLOSED
  const firstActive = await createNamedProject(
    pilot.id,
    `Premier cycle actif ${stamp}`,
    "Cadrage d'une plateforme de suivi pour ouvrir le premier cycle",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, firstActive.projectId);

  // 09.01 / 09.02 — CLOSED + ACTIVE + future
  const withHistory = await createNamedProject(
    pilot.id,
    `Projet avec historique ${stamp}`,
    "Cadrage puis conception fonctionnelle pour une trajectoire multi-cycles",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, withHistory.projectId);
  await closeActiveAndLeaveBetween(pilot.id, withHistory.projectId);
  const afterClose = await getPilotageProjection(pilot.id, withHistory.projectId);
  const opened2 = await openCycle(pilot.id, withHistory.projectId, {
    clientCommandKey: newId("idem"),
    expectedRevision: afterClose.revision,
    sourceRef: newId("src"),
    cycleType: "CONCEPTION_FONCTIONNELLE",
    objective: "Décrire les décisions et parcours métier",
  });
  if (opened2.status !== "APPLIED" && opened2.status !== "ALREADY_APPLIED") {
    throw new Error(`open2 failed: ${JSON.stringify(opened2)}`);
  }

  // 09.08 — CLOSED only (between cycles)
  const between = await createNamedProject(
    pilot.id,
    `Entre deux cycles ${stamp}`,
    "Cadrage pour clôturer puis laisser la suite envisagée",
    { process: true, qualifyProjection: true },
  );
  await advanceToActiveFirstCycle(pilot.id, between.projectId);
  await closeActiveAndLeaveBetween(pilot.id, between.projectId);

  const payload = {
    pilotId: pilot.id,
    proposed,
    analyzing,
    clarification,
    firstActive,
    withHistory,
    between,
    urls: {
      projet06: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=projet`,
      projet01: `http://127.0.0.1:3100/projects/${withHistory.projectId}?surface=projet`,
      travail: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=travail`,
      traj11: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=pilotage`,
      traj10: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=pilotage`,
      travailLock: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=travail`,
      traj07: `http://127.0.0.1:3100/projects/${clarification.projectId}?surface=pilotage`,
      traj09: `http://127.0.0.1:3100/projects/${firstActive.projectId}?surface=pilotage`,
      traj02: `http://127.0.0.1:3100/projects/${withHistory.projectId}?surface=pilotage`,
      traj08: `http://127.0.0.1:3100/projects/${between.projectId}?surface=pilotage`,
      sasPrep: `http://127.0.0.1:3100/preparations/${analyzing.prepId}`,
    },
  };
  writeFileSync("/tmp/sfia-e07-shot-urls.json", JSON.stringify(payload, null, 2));
  console.log(JSON.stringify(payload, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

### `projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts`

- SHA256: `c1ea38119299390df547fe21cd7f2bafbf3096a73c58e690217273ca8b8d1081`
- Bytes: 6144

```
import { chromium } from "@playwright/test";
import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";

const urls = JSON.parse(readFileSync("/tmp/sfia-e07-shot-urls.json", "utf8")) as {
  urls: Record<string, string>;
  proposed: { projectId: string };
  analyzing: { projectId: string };
  clarification: { projectId: string };
  firstActive?: { projectId: string };
  withHistory?: { projectId: string };
  between?: { projectId: string };
};

const outDir = resolve(process.cwd(), "../../../.tmp-sfia-review/ensemble07-evidence/runtime");
mkdirSync(outDir, { recursive: true });

async function shot(page: import("@playwright/test").Page, name: string) {
  const path = resolve(outDir, name);
  await page.waitForTimeout(700);
  await page.screenshot({ path, fullPage: false });
  const buf = readFileSync(path);
  console.log(
    "wrote",
    name,
    buf.length,
    createHash("sha256").update(buf).digest("hex").slice(0, 12),
  );
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1680, height: 970 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/login", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot: "a" }),
      credentials: "include",
    });
  });

  // 09.06 — projet sans cycle (proposition only)
  await page.goto(urls.urls.projet06, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="project-overview-no-cycle"]');
  await shot(page, "09.06-projet-sans-cycle-runtime.png");

  // 09.01 — projet avec cycle actif
  if (urls.urls.projet01) {
    await page.goto(urls.urls.projet01, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="project-overview-cycle-card"]');
    await shot(page, "09.01-projet-cycle-actif-runtime.png");
  }

  await page.goto(urls.urls.travail, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "travail-apres-proposition-runtime.png");

  // 09.11 — proposition séquentielle
  await page.goto(urls.urls.traj11, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  await shot(page, "09.11-proposition-initiale-runtime.png");

  const futureBtn = page.locator('[data-testid="trajectory-forecast-step-2"]');
  if (await futureBtn.count()) {
    await futureBtn.click();
    await page.waitForSelector('[data-testid="trajectory-etape-future"]');
    await shot(page, "09.04-etape-envisagee-runtime.png");
    await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  }

  await page.click('[data-testid="trajectory-open-cki"]');
  await page.waitForSelector('[data-testid="trajectory-cki-methode"]');
  await shot(page, "09.05-cki-methode-runtime.png");

  // 05.17 + 09.10 — analyzing (HOLD expected on server)
  await page.goto(urls.urls.travailLock, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "05.17-travail-qualification-runtime.png");

  await page.goto(urls.urls.traj10, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-qualification-progress"]', {
    timeout: 15000,
  });
  await shot(page, "09.10-qualification-en-cours-runtime.png");

  // 09.07 — clarification
  await page.goto(urls.urls.traj07, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "09.07-clarification-runtime.png");

  // 09.09 — premier cycle actif
  if (urls.urls.traj09) {
    await page.goto(urls.urls.traj09, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-active-cycle"]');
    await shot(page, "09.09-premier-cycle-actif-runtime.png");
  }

  // 09.02 — clos + actif + futur
  if (urls.urls.traj02) {
    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-roadmap"]');
    await shot(page, "09.02-trajectoire-principale-runtime.png");
    const bilan = page.locator('[data-testid="trajectory-closed-cycle"] button').first();
    if (await bilan.count()) {
      await bilan.click();
      await page.waitForSelector('[data-testid="trajectory-bilan-historique"]');
      await shot(page, "09.03-bilan-historique-runtime.png");
      await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    }
  }

  // 09.08 — entre deux cycles
  if (urls.urls.traj08) {
    await page.goto(urls.urls.traj08, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-between-cycles"]');
    await shot(page, "09.08-entre-deux-cycles-runtime.png");
  }

  // SAS 06 — preparation page (popup requires live create; capture prep + note)
  await page.goto(urls.urls.sasPrep, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await shot(page, "sas-06-preparation-runtime.png");

  const files = readdirSync(outDir).filter((f) => f.endsWith(".png"));
  const manifest = {
    capturedAt: new Date().toString(),
    viewport: { w: 1680, h: 970 },
    browser: "chromium/playwright",
    holdEnvNote: "09.10/05.17 require server STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1",
    projects: {
      proposed: urls.proposed.projectId,
      analyzing: urls.analyzing.projectId,
      clarification: urls.clarification.projectId,
      firstActive: urls.firstActive?.projectId ?? null,
      withHistory: urls.withHistory?.projectId ?? null,
      between: urls.between?.projectId ?? null,
    },
    files,
  };
  writeFileSync(resolve(outDir, "capture-manifest.json"), JSON.stringify(manifest, null, 2));
  await browser.close();
  console.log("done", files.length, "png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

## 11. Fichiers modifiés — diffs

### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

Note: SAS06: removed 400/900ms timers; stepFromQualification + reconcile poll

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 8ca6ff6c..a10ce7fb 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -5,6 +5,8 @@ import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PreparationConversation } from "@/components/figma/PreparationConversation";
 import { PreparationProposal } from "@/components/figma/PreparationProposal";
+import { SasCreateProgressPopup } from "@/components/figma/SasCreateProgressPopup";
+import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
 import { ProjectJournal } from "@/components/figma/ProjectJournal";
 import {
   DocumentHistory,
@@ -96,6 +98,60 @@ export default function PreparationPage() {
   const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);
   /** Structured awaiting mission key from server — never parsed from Nora prose. */
   const [awaitingClientIntentKey, setAwaitingClientIntentKey] = useState<string | null>(null);
+  const [createProgressVisible, setCreateProgressVisible] = useState(false);
+  const [createProgressStep, setCreateProgressStep] = useState<1 | 2 | 3>(1);
+  const [createProgressQualification, setCreateProgressQualification] =
+    useState<InitialQualificationProjection | null>(null);
+  const [pendingNavigateProjectId, setPendingNavigateProjectId] = useState<string | null>(null);
+
+  function stepFromQualification(iq: InitialQualificationProjection | null): 1 | 2 | 3 {
+    if (!iq) return 1;
+    if (
+      iq.status === "PROPOSED" ||
+      iq.status === "CLARIFICATION" ||
+      iq.status === "FAILED"
+    ) {
+      return 3;
+    }
+    if (
+      iq.status === "RUNNING" ||
+      iq.phase === "ANALYZING" ||
+      iq.phase === "PUBLISHING" ||
+      iq.status === "PENDING" ||
+      iq.status === "UNKNOWN"
+    ) {
+      return 2;
+    }
+    return 2;
+  }
+
+  // E07 SAS06 — drive popup steps from server qualification (no artificial timers).
+  useEffect(() => {
+    if (!createProgressVisible || !pendingNavigateProjectId) return;
+    let cancelled = false;
+    const tick = async () => {
+      const recon = await fetch(
+        `/api/projects/${pendingNavigateProjectId}/initial-qualification/reconcile`,
+        { method: "POST" },
+      );
+      if (cancelled) return;
+      if (recon.ok) {
+        const body = (await recon.json()) as {
+          initialQualification?: InitialQualificationProjection | null;
+        };
+        if (body.initialQualification) {
+          setCreateProgressQualification(body.initialQualification);
+          setCreateProgressStep(stepFromQualification(body.initialQualification));
+        }
+      }
+    };
+    const id = window.setInterval(() => void tick(), 1500);
+    void tick();
+    return () => {
+      cancelled = true;
+      window.clearInterval(id);
+    };
+  }, [createProgressVisible, pendingNavigateProjectId]);

   function rememberCreateIntent(next: CreateIntent | null) {
     createDocIntentRef.current = next;
@@ -556,6 +612,7 @@ export default function PreparationPage() {
         projectId?: string;
         reason?: string;
         missionBindingError?: string;
+        initialQualification?: InitialQualificationProjection;
         missionContinue?: {
           continued?: boolean;
           documentSave?: { documentId?: string };
@@ -593,7 +650,12 @@ export default function PreparationPage() {
       if (j.projectId && !j.missionBindingError) {
         setProjectId(j.projectId);
         setAwaitingClientIntentKey(null);
-        router.push(`/projects/${j.projectId}`);
+        // E07 SAS06 — steps from server facts only (no artificial 400/900ms timers).
+        const iq = j.initialQualification ?? null;
+        setCreateProgressQualification(iq);
+        setCreateProgressVisible(true);
+        setPendingNavigateProjectId(j.projectId);
+        setCreateProgressStep(stepFromQualification(iq));
         return;
       }

@@ -927,6 +989,19 @@ export default function PreparationPage() {
           }
         />
       ) : null}
+      <SasCreateProgressPopup
+        visible={createProgressVisible}
+        projectName={previewName || "Projet"}
+        step={createProgressStep}
+        qualification={createProgressQualification}
+        onDismiss={() => {
+          setCreateProgressVisible(false);
+          if (pendingNavigateProjectId) {
+            router.push(`/projects/${pendingNavigateProjectId}`);
+            setPendingNavigateProjectId(null);
+          }
+        }}
+      />
     </div>
   );
 }
```

### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

Note: COR-01 missing-op reconcile (bounded); qualification banner; removed Pilotage diagnostic

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 444c5234..5fada7f5 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -2,7 +2,6 @@

 import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
-import { PilotagePanel } from "@/components/PilotagePanel";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
 import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
@@ -15,6 +14,9 @@ import {
   type JournalSourceLink,
 } from "@/components/figma/ProjectJournal";
 import { ProjectOverview } from "@/components/figma/ProjectOverview";
+import { TrajectoryBoard } from "@/components/figma/TrajectoryBoard";
+import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
+import type { PilotageProjection } from "@/domains/pilotage/types";
 import {
   ProjectUnavailable,
   type ProjectUnavailableKind,
@@ -288,6 +290,15 @@ export default function ProjectPage() {
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
+  const [pilotageProjection, setPilotageProjection] = useState<PilotageProjection | null>(null);
+  const [initialQualification, setInitialQualification] =
+    useState<InitialQualificationProjection | null>(null);
+  const [projectActivity, setProjectActivity] = useState<{
+    openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
+    applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
+    documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
+    openPointsCount: number;
+  } | null>(null);
   const [inspect, setInspect] = useState<Doc | null>(null);
   const [docUi, setDocUi] = useState<DocUiState>("READING");
   const [reviseDraft, setReviseDraft] = useState("");
@@ -1600,6 +1611,9 @@ export default function ProjectPage() {
         setChoiceFrozen(true);
       }
       setKnowledge(j.knowledge ?? null);
+      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
+      setInitialQualification((j.initialQualification as InitialQualificationProjection) ?? null);
+      setProjectActivity(j.activity ?? null);
       const nextPrepId = j.preparation?.id ?? null;
       setPreparationId(nextPrepId);
       preparationIdRef.current = nextPrepId;
@@ -1819,6 +1833,68 @@ export default function ProjectPage() {
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.projectId, router, loadEpoch]);

+  const missingQualificationAttemptsRef = useRef(0);
+  const initialQualificationRef = useRef(initialQualification);
+  initialQualificationRef.current = initialQualification;
+  useEffect(() => {
+    missingQualificationAttemptsRef.current = 0;
+  }, [params.projectId]);
+
+  useEffect(() => {
+    // E07-COR-01/02/05 — reconcile via POST; also when op missing after create (bounded).
+    const status = initialQualification?.status;
+    const needsReconcile =
+      !initialQualification ||
+      status === "PENDING" ||
+      status === "RUNNING" ||
+      status === "UNKNOWN";
+    if (!needsReconcile) return;
+    let cancelled = false;
+    let intervalId = 0;
+    const tick = async () => {
+      const current = initialQualificationRef.current;
+      if (
+        !current &&
+        missingQualificationAttemptsRef.current >= 8
+      ) {
+        window.clearInterval(intervalId);
+        return;
+      }
+      if (!current) {
+        missingQualificationAttemptsRef.current += 1;
+      }
+      const recon = await fetch(
+        `/api/projects/${params.projectId}/initial-qualification/reconcile`,
+        { method: "POST" },
+      );
+      if (cancelled) return;
+      if (recon.ok) {
+        const body = (await recon.json()) as {
+          initialQualification?: InitialQualificationProjection | null;
+        };
+        if (body.initialQualification) {
+          missingQualificationAttemptsRef.current = 0;
+          setInitialQualification(body.initialQualification);
+        }
+      }
+      const res = await fetch(`/api/projects/${params.projectId}`);
+      if (!res.ok || cancelled) return;
+      const j = await res.json();
+      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
+      if (j.initialQualification) {
+        missingQualificationAttemptsRef.current = 0;
+        setInitialQualification(j.initialQualification as InitialQualificationProjection);
+      }
+      setMessages((j.messages ?? []) as Msg[]);
+    };
+    intervalId = window.setInterval(() => void tick(), 2000);
+    void tick();
+    return () => {
+      cancelled = true;
+      window.clearInterval(intervalId);
+    };
+  }, [params.projectId, initialQualification?.status, initialQualification?.operationId]);
+
   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
   useEffect(() => {
     surfaceNavGenRef.current += 1;
@@ -2433,23 +2509,38 @@ export default function ProjectPage() {
       ? ("historical" as const)
       : null;

+  const qualificationLockActive =
+    initialQualification?.status === "PENDING" ||
+    initialQualification?.status === "RUNNING" ||
+    initialQualification?.status === "UNKNOWN";
+
   const travailHero =
     surface !== "travail"
       ? null
-      : pendingDocumentProposal
+      : qualificationLockActive
         ? {
             kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
-            title: "Examiner une proposition de Nora",
-            sub: "Le Pilote peut préciser sa demande ou demander la conservation d’une nouvelle version documentaire.",
+            title: "Nora prépare votre trajectoire",
+            sub: "Le compositeur est temporairement indisponible pendant la qualification initiale.",
           }
-        : documentFocus &&
-            documentFocus.sourceRevisionId !== documentFocus.observedHeadRevisionId
+        : pendingDocumentProposal
           ? {
               kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
-              title: "Réviser une version historique avec Nora",
-              sub: "Nora vérifie la version courante avant de proposer une révision fondée sur une ancienne version.",
+              title: "Examiner une proposition de Nora",
+              sub: "Le Pilote peut préciser sa demande ou demander la conservation d’une nouvelle version documentaire.",
             }
-          : null;
+          : documentFocus &&
+              documentFocus.sourceRevisionId !== documentFocus.observedHeadRevisionId
+            ? {
+                kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
+                title: "Réviser une version historique avec Nora",
+                sub: "Nora vérifie la version courante avant de proposer une révision fondée sur une ancienne version.",
+              }
+            : {
+                kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
+                title: "Conversation du projet",
+                sub: "Poursuivez le fil avec Nora — les décisions d’ouverture et de clôture restent les vôtres.",
+              };

   return (
     <ProjectChrome
@@ -2468,9 +2559,11 @@ export default function ProjectPage() {
           projectName={projectName ?? "Projet"}
           preparationId={preparationId}
           knowledge={knowledge}
-          documentCount={documents.length}
-          messageCount={messages.length}
+          pilotage={pilotageProjection}
+          initialQualification={initialQualification}
+          activity={projectActivity}
           onOpenTravail={() => selectSurface("travail")}
+          onOpenTrajectoire={() => selectSurface("pilotage")}
         />
       ) : null}

@@ -2481,6 +2574,10 @@ export default function ProjectPage() {
           messages={messages}
           draft={draft}
           busy={busy || !preparationId}
+          composerLocked={Boolean(initialQualification?.composerLocked)}
+          composerLockReason={initialQualification?.composerLockReason}
+          qualificationBanner={qualificationLockActive}
+          onOpenTrajectoire={() => selectSurface("pilotage")}
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
           status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
@@ -2618,41 +2715,13 @@ export default function ProjectPage() {

       {surface === "pilotage" ? (
         <div className="space-y-4" data-figma-frame="125:33" data-testid="project-trajectory">
-          <div className="fig-section-head">
-            <div>
-              <p className="fig-kicker">Pilotage</p>
-              <h2 className="fig-section-title">Trajectoire, cycle et décisions</h2>
-              <p className="fig-hero-sub !mt-1">
-                Affichage D5/D6 existant — sans cycle fictif, sans commande autoritaire depuis Nora.
-              </p>
-            </div>
-          </div>
-          <div className="fig-stat-grid">
-            <div className="fig-stat">
-              <div className="fig-stat-label">Cycle</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
-                Sans / actif
-              </div>
-              <div className="fig-stat-hint">Projection service projet</div>
-            </div>
-            <div className="fig-stat">
-              <div className="fig-stat-label">Décisions D6</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
-                HumanDecision
-              </div>
-              <div className="fig-stat-hint">Pas de mutation à l&apos;affichage</div>
-            </div>
-            <div className="fig-stat">
-              <div className="fig-stat-label">CKI / méthode</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
-                Guidance
-              </div>
-              <div className="fig-stat-hint">Disponibilité réelle du service</div>
-            </div>
-          </div>
-          <div className="fig-panel" data-figma-frame="127:106">
-            <PilotagePanel projectId={params.projectId} />
-          </div>
+          <TrajectoryBoard
+            projectId={params.projectId}
+            pilotage={pilotageProjection}
+            initialQualification={initialQualification}
+            onOpenTravail={() => selectSurface("travail")}
+          />
+          {/* E07 — no Pilotage (diagnostic) panel on Trajectoire Figma surfaces. */}
         </div>
       ) : null}
```

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

Note: 05.17 banner + lock overlay + Voir trajectoire

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 18a635c1..c5f42c54 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -46,12 +46,20 @@ export function NoraConversation(props: {
   focusMessageId?: string | null;
   onFocusMessageHandled?: () => void;
   focusStatus?: string | null;
+  /** Ensemble 07 — verrou qualification initiale (UI + accessibilité). */
+  composerLocked?: boolean;
+  composerLockReason?: string;
+  /** E07 05.17 — bandeau qualification + lien Trajectoire. */
+  qualificationBanner?: boolean;
+  onOpenTrajectoire?: () => void;
 }) {
   const n = props.messages.length;
   const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
   const variantLabel =
     n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
   const embedded = Boolean(props.embeddedInStage);
+  const composerLocked = Boolean(props.composerLocked);
+  const sendDisabled = props.busy || !props.draft.trim() || composerLocked;
   const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
   const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
     messageCount: n,
@@ -315,7 +323,34 @@ export function NoraConversation(props: {
               </article>
             );
           })}
-          {props.activity === "preparing" ? (
+          {props.qualificationBanner ? (
+            <div
+              className="fig-panel space-y-3 my-3"
+              role="status"
+              aria-live="polite"
+              data-testid="qualification-activity-banner"
+              style={{ borderColor: "#7477ed55" }}
+            >
+              <p className="text-[10px] uppercase tracking-wide text-[#7477ed] font-semibold">
+                Nora prépare sa réponse
+              </p>
+              <div className="space-y-2 text-sm text-[#a3b0c7]">
+                <p>✓ Sources et intention du projet consultées</p>
+                <p>○ Préparation de la première orientation de trajectoire…</p>
+              </div>
+              {props.onOpenTrajectoire ? (
+                <button
+                  type="button"
+                  className="text-sm font-semibold text-[#7477ed] hover:underline"
+                  data-testid="qualification-voir-trajectoire"
+                  onClick={props.onOpenTrajectoire}
+                >
+                  Voir la trajectoire ↗
+                </button>
+              ) : null}
+            </div>
+          ) : null}
+          {props.activity === "preparing" && !props.qualificationBanner ? (
             <div
               className="fig-nora-activity"
               role="status"
@@ -367,10 +402,56 @@ export function NoraConversation(props: {
           </div>
         ) : null}
         <div
-          className="fig-composer fig-travail-composer"
+          className="fig-composer fig-travail-composer relative"
           data-testid="nora-composer"
+          data-composer-locked={composerLocked ? "1" : "0"}
           data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
         >
+          {composerLocked ? (
+            <div
+              className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
+              style={{ background: "rgba(12, 16, 28, 0.72)" }}
+              data-testid="composer-lock-overlay"
+            >
+              <svg
+                className="shrink-0 text-[#7477ed]"
+                width="24"
+                height="24"
+                viewBox="0 0 24 24"
+                fill="none"
+                stroke="currentColor"
+                strokeWidth="1.75"
+                aria-hidden
+              >
+                <rect x="5" y="11" width="14" height="10" rx="2" />
+                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
+              </svg>
+              <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
+                <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
+                  Compositeur temporairement indisponible
+                </p>
+                <p data-testid="composer-lock-reason">
+                  {props.composerLockReason ||
+                    "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
+                </p>
+              </div>
+              <button
+                type="button"
+                className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
+                title={
+                  props.composerLockReason ||
+                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
+                }
+                aria-label={
+                  props.composerLockReason ||
+                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
+                }
+                data-testid="composer-lock-info"
+              >
+                i
+              </button>
+            </div>
+          ) : null}
           <div className="fig-travail-composer-row">
             <span className="fig-travail-composer-plus" aria-hidden>
               +
@@ -384,9 +465,16 @@ export function NoraConversation(props: {
               aria-label="Message à Nora"
               data-testid="thread-draft"
               rows={1}
+              readOnly={composerLocked}
+              disabled={composerLocked}
+              aria-disabled={composerLocked}
               onCompositionStart={() => setImeComposing(true)}
               onCompositionEnd={() => setImeComposing(false)}
               onKeyDown={(e) => {
+                if (composerLocked) {
+                  e.preventDefault();
+                  return;
+                }
                 if (imeComposing || e.nativeEvent.isComposing) return;
                 // Mobile: Enter = newline; send via button only.
                 if (isMobile) return;
@@ -399,7 +487,7 @@ export function NoraConversation(props: {
             <button
               type="button"
               className="fig-travail-composer-send"
-              disabled={props.busy || !props.draft.trim()}
+              disabled={sendDisabled}
               onClick={props.onSend}
               data-testid="thread-send"
               aria-label="Envoyer"
```

### `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`

Note: cycle card minHeight 222; ACTIVE vs empty states

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index d0f5912a..0b3fbd75 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -1,147 +1,186 @@
 "use client";

 import Link from "next/link";
+import type { PilotageProjection } from "@/domains/pilotage/types";
+import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

-type Knowledge = {
-  subjects: Array<{ id: string; title: string; status: string }>;
-  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
-  openPoints: Array<{ id: string; statement: string; status: string }>;
+type ActivityBundle = {
+  openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
+  applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
+  documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
+  openPointsCount: number;
 };

+const CYCLE_LABELS: Record<string, string> = {
+  CADRAGE: "Cadrage",
+  CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
+  UX_UI: "Conception UX",
+};
+
+function cycleLabel(type: string): string {
+  return CYCLE_LABELS[type] ?? type.replace(/_/g, " ");
+}
+
 export function ProjectOverview(props: {
   projectId: string;
   projectName: string;
   preparationId: string | null;
-  knowledge: Knowledge | null;
-  documentCount: number;
-  messageCount: number;
+  description?: string | null;
+  knowledge: {
+    subjects: Array<{ id: string; title: string; status: string }>;
+    openPoints: Array<{ id: string; statement: string; status: string }>;
+  } | null;
+  pilotage: PilotageProjection | null;
+  initialQualification: InitialQualificationProjection | null;
+  activity: ActivityBundle | null;
   onOpenTravail: () => void;
+  onOpenTrajectoire: () => void;
 }) {
-  const openPoints =
-    props.knowledge?.openPoints?.filter((o) => o.status === "OPEN") ?? [];
-  const acquis =
-    props.knowledge?.acquis?.filter((a) => a.status === "CURRENT") ?? [];
-  const subjects = props.knowledge?.subjects ?? [];
+  const cycle = props.pilotage?.cycle;
+  const activity = props.activity;
+  // Prefer a durable project description; never invent illustrative copy.
+  // Proposed orientation is a trajectory artifact — only use as fallback when no description.
+  const description = props.description?.trim() || null;

   return (
-    <div className="project-overview space-y-4" data-testid="project-overview">
-      <section className="fig-panel space-y-3" data-testid="project-overview-identity">
-        <h2 className="fig-panel-title">Identité</h2>
-        <p className="text-base font-medium" data-testid="project-overview-name">
+    <div className="project-overview space-y-5" data-testid="project-overview">
+      <header className="space-y-2" data-testid="project-overview-identity">
+        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / VUE D&apos;ENSEMBLE</p>
+        <h2 className="fig-hero-title" data-testid="project-overview-name">
           {props.projectName}
-        </p>
-        <dl className="grid gap-2 text-sm muted sm:grid-cols-2">
-          <div>
-            <dt className="text-[10px] uppercase tracking-wide">Fil conversation</dt>
-            <dd className="text-[var(--fg)]">{props.messageCount} message(s)</dd>
-          </div>
-          <div>
-            <dt className="text-[10px] uppercase tracking-wide">Documents Nora</dt>
-            <dd className="text-[var(--fg)]">{props.documentCount}</dd>
-          </div>
-          <div>
-            <dt className="text-[10px] uppercase tracking-wide">Sujets capitalisés</dt>
-            <dd className="text-[var(--fg)]">{subjects.length}</dd>
-          </div>
-          <div>
-            <dt className="text-[10px] uppercase tracking-wide">Préparation liée</dt>
-            <dd className="text-[var(--fg)]">
-              {props.preparationId ? "Oui" : "Non renseignée"}
-            </dd>
-          </div>
-        </dl>
-      </section>
+        </h2>
+        {description ? <p className="fig-hero-sub max-w-5xl">{description}</p> : null}
+      </header>

-      <div className="grid gap-4 lg:grid-cols-2">
-        <section className="fig-panel space-y-2" data-testid="project-overview-context">
-          <h2 className="fig-panel-title">Contexte</h2>
-          {subjects.length === 0 && acquis.length === 0 ? (
-            <p className="text-sm muted">
-              Aucun sujet ni acquis capitalisé pour l’instant.
+      <section
+        className="fig-panel relative space-y-3"
+        data-testid="project-overview-cycle-card"
+        style={{ borderColor: "#2b3850", minHeight: 222 }}
+      >
+        {cycle ? (
+          <>
+            <div className="flex items-start justify-between gap-3">
+              <p className="fig-kicker text-[#7477ed]">CYCLE EN COURS</p>
+              <span
+                className="rounded-full px-3 py-1 text-xs font-semibold"
+                style={{ background: "#17382f", color: "#6cdbba" }}
+              >
+                ● Actif
+              </span>
+            </div>
+            <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight">
+              {cycleLabel(cycle.cycleType)}
+            </h3>
+            <p className="text-sm text-[#a3b0c7]">{cycle.objective}</p>
+          </>
+        ) : (
+          <>
+            <div className="flex items-start justify-between gap-3">
+              <p className="fig-kicker text-[#7477ed]">ÉTAT DU PROJET</p>
+              <span className="text-xs font-semibold text-[#a3b0c7]">○ Sans cycle actif</span>
+            </div>
+            <h3
+              className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight"
+              data-testid="project-overview-no-cycle"
+            >
+              Aucun cycle en cours
+            </h3>
+            <p className="text-sm text-[#a3b0c7]">
+              Le projet reste accessible : ses sujets, décisions et documents peuvent être consultés
+              et poursuivis sans cycle actif.
             </p>
-          ) : (
-            <ul className="text-sm space-y-2">
-              {subjects.slice(0, 5).map((s) => (
-                <li key={s.id}>
-                  <span className="font-medium">{s.title}</span>
-                </li>
-              ))}
-              {acquis.slice(0, 5).map((a) => (
-                <li key={a.id} className="text-sm">
-                  {a.statement}
-                </li>
-              ))}
-            </ul>
-          )}
-        </section>
-
-        <section className="fig-panel space-y-2" data-testid="project-overview-open">
-          <h2 className="fig-panel-title">Points à préciser</h2>
-          {openPoints.length === 0 ? (
-            <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
-          ) : (
-            openPoints.slice(0, 6).map((o) => (
-              <p key={o.id} className="text-sm">
-                {o.statement}
-              </p>
-            ))
-          )}
-        </section>
-      </div>
+            <p className="text-sm text-[#a3b0c7]">
+              La trajectoire pourra être précisée avec Nora, sans ouverture automatique.
+            </p>
+          </>
+        )}
+        <div className="flex justify-end pt-1">
+          <button
+            type="button"
+            className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
+            onClick={props.onOpenTrajectoire}
+          >
+            Voir la trajectoire ↗
+          </button>
+        </div>
+      </section>

-      <section className="fig-panel space-y-2" data-testid="project-overview-access">
-        <h2 className="fig-panel-title">Repères et accès</h2>
-        <ul className="text-sm space-y-1.5">
-          <li>
-            <Link
-              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-              href={`/projects/${props.projectId}?surface=travail`}
-              onClick={(e) => {
-                e.preventDefault();
-                props.onOpenTravail();
-              }}
-            >
-              Travail avec Nora
-            </Link>
-            <span className="muted"> — conversation du projet</span>
-          </li>
-          <li>
-            <Link
-              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-              href={`/projects/${props.projectId}?surface=journal`}
-            >
-              Journal
-            </Link>
-            <span className="muted"> — sujets et acquis</span>
-          </li>
-          <li>
-            <Link
-              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-              href={`/projects/${props.projectId}?surface=document`}
-            >
-              Documents Nora
-            </Link>
-            <span className="muted"> — bibliothèque</span>
-          </li>
-          <li>
-            <Link
-              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-              href={`/projects/${props.projectId}?surface=pilotage`}
-            >
-              Trajectoire
-            </Link>
-            <span className="muted"> — pilotage existant</span>
-          </li>
-        </ul>
-        <button
-          type="button"
-          className="btn mt-3"
-          data-testid="project-overview-open-travail"
-          onClick={props.onOpenTravail}
-        >
-          Ouvrir Travail avec Nora
-        </button>
+      <section className="space-y-3" data-testid="project-overview-activity">
+        <div className="flex flex-wrap items-end justify-between gap-2">
+          <h3 className="text-[1.35rem] font-semibold text-[#f3f5ff]">Activité du projet</h3>
+          <p className="text-xs text-[#7787a4]">Vue synthétique des espaces du projet</p>
+        </div>
+        <div className="grid gap-4 lg:grid-cols-3">
+          <ActivityCard
+            testId="project-activity-subjects"
+            title="Sujets ouverts"
+            source="Journal"
+            count={activity?.openSubjects.count ?? 0}
+            empty="Aucun sujet actif capitalisé."
+            examples={activity?.openSubjects.examples.map((e) => e.title) ?? []}
+            href={`/projects/${props.projectId}?surface=journal`}
+          />
+          <ActivityCard
+            testId="project-activity-decisions"
+            title="Décisions applicables"
+            source="Gouvernance"
+            count={activity?.applicableDecisions.count ?? 0}
+            empty="Aucune décision applicable."
+            examples={activity?.applicableDecisions.examples.map((e) => e.statement) ?? []}
+            href={`/projects/${props.projectId}?surface=journal`}
+          />
+          <ActivityCard
+            testId="project-activity-documents"
+            title="Documents en cours"
+            source="Bibliothèque"
+            count={activity?.documentsInProgress.count ?? 0}
+            empty="Aucun document en cours de rédaction."
+            examples={activity?.documentsInProgress.examples.map((e) => e.title) ?? []}
+            href={`/projects/${props.projectId}?surface=document`}
+          />
+        </div>
       </section>
     </div>
   );
 }
+
+function ActivityCard(props: {
+  testId: string;
+  title: string;
+  source: string;
+  count: number;
+  empty: string;
+  examples: string[];
+  href: string;
+}) {
+  const shown = props.examples.slice(0, 2);
+  const extra = Math.max(0, props.count - shown.length);
+  return (
+    <section className="fig-panel space-y-3" data-testid={props.testId}>
+      <div className="flex items-start justify-between gap-2">
+        <div>
+          <p className="text-[2rem] font-semibold leading-none text-[#f3f5ff]">{props.count}</p>
+          <h4 className="mt-2 text-lg font-semibold text-[#f3f5ff]">{props.title}</h4>
+        </div>
+        <span className="text-xs text-[#a3b0c7]">{props.source}</span>
+      </div>
+      {props.count === 0 ? (
+        <p className="text-sm text-[#a3b0c7]">{props.empty}</p>
+      ) : (
+        <ul className="text-sm space-y-1.5 text-[#f3f5ff]">
+          {shown.map((ex, i) => (
+            <li key={`${props.testId}-${i}`} className="line-clamp-2 font-medium">
+              {ex}
+            </li>
+          ))}
+          {extra > 0 ? (
+            <li className="text-[#a3b0c7]">+ {extra} autre{extra > 1 ? "s" : ""}</li>
+          ) : null}
+        </ul>
+      )}
+      <Link href={props.href} className="inline-block text-sm font-semibold text-[#7477ed] hover:underline">
+        Consulter ↗
+      </Link>
+    </section>
+  );
+}
```

### `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

Note: GET read-only IQ (no kick)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index 6d16b83e..aa35d8c4 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -1,6 +1,7 @@
-import { and, eq } from "drizzle-orm";
+import { and, desc, eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { preparationProjectLinks, projects } from "@/db/schema";
+import { humanDecisions, preparationProjectLinks, projects } from "@/db/schema";
+import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import { listMessages, listTurnProjections } from "@/domains/conversation/service";
 import { listDocuments } from "@/domains/document/service";
 import { listProjectKnowledge } from "@/domains/knowledge/journal";
@@ -69,8 +70,54 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       subjectId: o.subjectId,
     })),
   };
+  // E07-COR-02 — GET/lecture only: never kick or process qualification here.
+  const initialQualification = await getQualificationProjection(pilotId, projectId);
+
   const pilotage = await getPilotageProjection(pilotId, projectId);

+  const decisionRows = await db
+    .select({
+      id: humanDecisions.id,
+      statement: humanDecisions.statement,
+      state: humanDecisions.state,
+      supersedesDecisionId: humanDecisions.supersedesDecisionId,
+    })
+    .from(humanDecisions)
+    .where(eq(humanDecisions.projectId, projectId))
+    .orderBy(desc(humanDecisions.createdAt));
+
+  const supersededIds = new Set(
+    decisionRows.map((d) => d.supersedesDecisionId).filter(Boolean) as string[],
+  );
+  const applicableDecisions = decisionRows.filter(
+    (d) => d.state === "APPLICABLE" && !supersededIds.has(d.id),
+  );
+
+  const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
+  const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
+  const docsInProgress = documents.filter(
+    (d) => d.latestRevision && d.latestRevision.status !== "AVAILABLE",
+  );
+
+  const activity = {
+    openSubjects: {
+      count: openSubjects.length,
+      examples: openSubjects.slice(0, 2).map((s) => ({ id: s.id, title: s.title })),
+    },
+    applicableDecisions: {
+      count: applicableDecisions.length,
+      examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
+    },
+    documentsInProgress: {
+      count: docsInProgress.length,
+      examples: docsInProgress.slice(0, 2).map((d) => ({
+        id: d.document.id,
+        title: d.document.title,
+      })),
+    },
+    openPointsCount: openPoints.length,
+  };
+
   return {
     project,
     preparation: ctx.preparation,
@@ -81,5 +128,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     documents,
     knowledge,
     pilotage,
+    initialQualification,
+    activity,
   };
 }
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts`

Note: ensureAndKick

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
index d21fb43c..e9ffccf7 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
@@ -2,6 +2,7 @@ import { NextResponse } from "next/server";
 import { eq } from "drizzle-orm";
 import { requireStudioSession } from "@/domains/identity/session";
 import { createProjectCommand } from "@/domains/preparation/create-project";
+import { ensureAndKickInitialQualification } from "@/domains/pilotage/initial-qualification";
 import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";
 import {
   authorizeMissionBoundD2Create,
@@ -81,6 +82,25 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
     });
     const sideEffects = probeCreateProjectSideEffects();

+    let initialQualification: Awaited<
+      ReturnType<typeof ensureAndKickInitialQualification>
+    >["projection"] = null;
+    let qualificationEnsureStatus: "OK" | "FAILED_RETRYABLE" | "SKIPPED" = "SKIPPED";
+    if (
+      (result.status === "CREATED" || result.status === "ALREADY_CREATED") &&
+      "projectId" in result &&
+      result.projectId
+    ) {
+      // E07-COR-01 — ensure durable op with retry; never silently drop without status.
+      const ensured = await ensureAndKickInitialQualification({
+        projectId: result.projectId,
+        preparationId,
+        pilotId: session.pilotId,
+      });
+      initialQualification = ensured.projection;
+      qualificationEnsureStatus = ensured.ensureStatus;
+    }
+
     let missionContinue: Awaited<ReturnType<typeof continueAfterProjectCreated>> | null = null;
     if (
       auth.outcome !== "CLASSIC" &&
@@ -123,6 +143,8 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
         sideEffects,
         missionContinue,
         missionBinding: auth.outcome,
+        initialQualification,
+        qualificationEnsureStatus,
       },
       { status },
     );
```

### `projects/sfia-studio-next/construction/delivery-history.md`

Note: E07 entries

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e273b49a..6999a5ce 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3225,3 +3225,30 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |
+
+## 2026-11-20 — Ensemble 07 Projet/Trajectoire (DEV construction, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
+| Statut | NO RELEASE — construction DEV |
+| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 ; forecast_json D5 |
+| Tests | unit / PG E07 (historique premier delivery) |
+| Verdict candidat (1er) | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
+| Handoff tip (1er immuable) | `93ee58ee5208daa4abe6d657550b523fea244db2` blob `65dacb671da74b93974deb12af62fb5007f33264` |
+
+## 2026-11-20 — Ensemble 07 corrective (P0 cohérence + UI, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Statut | NO RELEASE — Gate C OPEN |
+| Corrections P0 | COR-01 ensure+retry ; COR-02 GET sans kick ; COR-03/04 fence+reprise D5→message ; COR-05 UNKNOWN+reconcile POST ; COR-06 no default CADRAGE ; COR-08 system incident ; COR-09 closed asc(openedAt) ; COR-11/12 matrice exclusive |
+| Tests | unit 687 PASS ; integration 518 PASS (E07 PG 8/8) ; tsc OK |
+| Fake/Real | DETERMINISTIC/FAKE forecast ; LIVE Nora NOT PROVEN ; HOLD DEV captures only |
+| Visuel | 09.07 clarification runtime obtenue ; 09.10/09.11/09.06/05.17 recapturés ; 09.02/03/08/09 ACTIVE/CLOSED encore absents (GO conversationnel COR-14 non clos) |
+| Réserves | COR-14/15 GO naturel+maturité non prouvés e2e ; COR-16/17 bilan/CKI éditorial partiels ; 13/13 Figma non READY |
+| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / READY WITH GOVERNED RESERVES sur P0 |
+
```

## 12. Preuves navigateur

- Viewport 1680×970 Chromium Playwright
- Seeds DETERMINISTIC : `scripts/e07-seed-screenshot.mts`
- Captures : `.tmp-sfia-review/ensemble07-evidence/runtime/`
- Figma refs : `.tmp-sfia-review/ensemble07-figma-refs/` (13 PNG)

## 13. Réserves / Gates

- Gate C OPEN · NO RELEASE
- LIVE Nora NOT PROVEN
- GO conversationnel browser NOT PROVEN (API/service DETERMINISTIC PROVEN)
- SAS06 popup runtime live capture incomplete (code timers removed; prep page captured)
- Pixel fidelity residual on several frames
- Full regression suites NOT RUN this pass

## 14. Verdicts séparés

| Domaine | Verdict |
|---|---|
| Technique P0 | READY WITH GOVERNED RESERVES |
| Fonctionnel | READY WITH GOVERNED RESERVES (GO convers. / LIVE) |
| UX/UI | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
| Preuve | REVIEW PARTIAL — runtime screenshots present 13 états ; SAS popup live weak |
| Global | **READY WITH GOVERNED RESERVES** — pas DELIVERY READY FOR MORRIS UAT (écarts UX + GO live) |

## 15. Instruction ChatGPT

> Avant de répondre à Morris, ChatGPT doit relire directement depuis Git la branche `sfia/review-handoff`, fichier `sfia-review-handoff/latest-chatgpt-review.md`, vérifier la date, l'identité de cette itération de convergence Ensemble 07, les références Git, les fichiers créés/modifiés, les sections de code, les preuves et les comparaisons Figma/runtime, les tests, les réserves, le SHA distant et la publication. Le rapport Cursor seul ne remplace pas cette vérification.

---
END OF REVIEW PACK — Ensemble 07 final convergence
