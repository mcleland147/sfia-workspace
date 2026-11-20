# SFIA Review Pack FULL — Ensemble 07 · Projet, Trajectoire et conduite conversationnelle Nora

**Date/heure:** 2026-11-20T17:26:34+00:00
**Cycle:** Standard EVOL · Delivery projet · R5/ML4D Ensemble 07 · Gate C OPEN
**Profil:** Standard (QA Figma renforcée) · Classe **NO RELEASE**
**Worktree:** `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**HEAD:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` (working tree uncommitted — base contrat)
**Base contrat:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**origin/main:** `6e93a33d64dfeea2eab88fb7896d733b34053f97`

## Verdict candidat

**FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED**

Vertical slice fonctionnel DEV prouvé (création → qualification durable → proposition D5 + message Nora unique → verrou compositeur UI+API).
Fidélité visuelle itérée : 09.06 / 09.10 / 09.11 / 09.04 / 09.05 / 05.17 rapprochés Figma après rewrite TrajectoryBoard + chrome breadcrumb-only.
Manquent encore des paires runtime fidèles pour 09.02 / 09.03 / 09.08 / 09.09 (cycle ACTIVE/CLOSED via GO D6→D5 non seedé) et SAS 06 popup isolée. 09.07 clarification non obtenue (seed a produit PROPOSED).

## Fake / Real

| Frontière | Qualification |
|-----------|---------------|
| Nora / forecast initial | DETERMINISTIC / FAKE (forecast-builder + STUDIO_FORCE_NORA_FIXTURE) |
| PostgreSQL DEV :5433 | REAL local DEV |
| Browser DEV :3100 | BROWSER PROVEN (surfaces listées) |
| Hold capture | STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1 DEV-only pour geler PENDING (09.10/05.17) |
| Fournisseur LIVE | LIVE NOT PROVEN |
| CKI DELIVERED | NOT APPLICABLE (aucun cycle ouvert dans captures) |

## Git status (worktree)

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
?? projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
?? projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts
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

## Diff stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 2946 +++++++++++++++++++-
 .../construction/delivery-history.md               |   16 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    3 +-
 .../[preparationId]/create-project/route.ts        |   23 +
 .../web/src/app/api/projects/[projectId]/route.ts  |    2 +
 .../src/app/preparations/[preparationId]/page.tsx  |   29 +-
 .../web/src/app/projects/[projectId]/page.tsx      |   88 +-
 .../web/src/components/figma/NoraConversation.tsx  |   42 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   16 +-
 .../web/src/components/figma/ProjectOverview.tsx   |  289 +-
 projects/sfia-studio-next/web/src/db/schema.ts     |   36 +
 .../web/src/domains/conversation/service.ts        |    4 +
 .../web/src/domains/pilotage/service.ts            |   29 +
 .../web/src/domains/pilotage/types.ts              |   14 +
 .../web/src/domains/preparation/project-context.ts |   62 +-
 .../sfia-studio-next/web/src/lib/http-errors.ts    |    2 +
 16 files changed, 3275 insertions(+), 326 deletions(-)

```

## Grille Figma ↔ runtime (viewport 1680×970)

| Ref | Figma | Runtime | Statut | Écarts connus |
|-----|-------|---------|--------|---------------|
| 09.01 | figma/09.01-projet-vue-ensemble.png | runtime/09.01-projet-approx-sans-cycle-runtime.png | Partiellement conforme | Pas de cycle ACTIVE seedé — structure sans-cycle proche 09.06 |
| 09.02 | figma/09.02-trajectoire-vue-principale.png | — | Capture requise | Parcours CLOSED/ACTIVE/ENVISAGÉE non seedé GO |
| 09.03 | figma/09.03-bilan-historique.png | (UI présente via click bilan) | Capture requise | UI bilan avec lacunes historiques honnêtes ; pas de closed cycle seedé |
| 09.04 | figma/09.04-etape-future.png | runtime/09.04-etape-future-runtime.png | Conforme structure | Libellés Figma présents ; données métier réelles |
| 09.05 | figma/09.05-cki-methode.png | runtime/09.05-cki-methode-runtime.png | Partiellement conforme | CKI absent sans cycle (attendu) ; méthode ABSENT |
| 09.06 | figma/09.06-projet-sans-cycle.png | runtime/09.06-projet-runtime.png | Conforme structure | Compteurs à 0 (données vides réelles) ; chrome hero retiré |
| 09.07 | figma/09.07-trajectoire-init.png | runtime/09.07-trajectoire-init-or-proposal-runtime.png | Non conforme état | Seed clarification a produit PROPOSED |
| 09.08 | figma/09.08-entre-deux-cycles.png | — | Capture requise | Nécessite cycle clos + pas d'actif |
| 09.09 | figma/09.09-premier-cycle-actif.png | — | Capture requise | Nécessite OPEN_CYCLE après GO |
| SAS06 | figma/sas-06-popup-creation.png | runtime/sas-06-prep-or-popup-runtime.png | Partiellement conforme | Popup composant présent ; capture = page prep attachée |
| 05.17 | figma/travail-05.17-compositeur-verrouille.png | runtime/05.17-travail-compositeur-verrouille-runtime.png | Partiellement conforme | Lock + libellé OK ; hero Travail générique ; bandeau activité Figma incomplet |
| 09.10 | figma/09.10-trajectoire-analyse-en-cours.png | runtime/09.10-trajectoire-analyse-runtime.png | Conforme structure | Stepper / CTA / textes alignés ; diagnostic Pilotage encore visible |
| 09.11 | figma/09.11-premiere-proposition-sequentielle.png | runtime/09.11-trajectoire-runtime.png | Conforme structure | Cartes séquentielles horizontales + CTA Figma ; 2 steps (données) vs 3 illustratifs Figma |

### Inventaire captures

**Figma (13):**
- `.tmp-sfia-review/ensemble07-evidence/figma/09.01-projet-vue-ensemble.png` sha256=5f403dc1ca9bf1b6 bytes=100847
- `.tmp-sfia-review/ensemble07-evidence/figma/09.02-trajectoire-vue-principale.png` sha256=6d785fc71ab3c6e7 bytes=116627
- `.tmp-sfia-review/ensemble07-evidence/figma/09.03-bilan-historique.png` sha256=4c7d8eff3d1f1c63 bytes=121474
- `.tmp-sfia-review/ensemble07-evidence/figma/09.04-etape-future.png` sha256=f498a6dcdc70aba0 bytes=100233
- `.tmp-sfia-review/ensemble07-evidence/figma/09.05-cki-methode.png` sha256=160f4b3ef50992f1 bytes=138086
- `.tmp-sfia-review/ensemble07-evidence/figma/09.06-projet-sans-cycle.png` sha256=cd31d7b2c2e598f9 bytes=104794
- `.tmp-sfia-review/ensemble07-evidence/figma/09.07-trajectoire-init.png` sha256=a7bfecb9292b8e63 bytes=85386
- `.tmp-sfia-review/ensemble07-evidence/figma/09.08-entre-deux-cycles.png` sha256=05fd79562e5505f6 bytes=95056
- `.tmp-sfia-review/ensemble07-evidence/figma/09.09-premier-cycle-actif.png` sha256=08f1300d8849c2a9 bytes=94291
- `.tmp-sfia-review/ensemble07-evidence/figma/09.10-trajectoire-analyse-en-cours.png` sha256=57c15c9320978047 bytes=87029
- `.tmp-sfia-review/ensemble07-evidence/figma/09.11-premiere-proposition-sequentielle.png` sha256=90aa0f2e1ba4554e bytes=102737
- `.tmp-sfia-review/ensemble07-evidence/figma/sas-06-popup-creation.png` sha256=dc0b6cbe1c4d64b6 bytes=139300
- `.tmp-sfia-review/ensemble07-evidence/figma/travail-05.17-compositeur-verrouille.png` sha256=488a2e31cb2b1e0b bytes=135784

**Runtime (12):**
- `.tmp-sfia-review/ensemble07-evidence/runtime/05.17-or-travail-runtime.png` sha256=c472c8be59e411b9 bytes=134736
- `.tmp-sfia-review/ensemble07-evidence/runtime/05.17-travail-compositeur-verrouille-runtime.png` sha256=ff2a40d31bba91f1 bytes=132460
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.01-projet-approx-sans-cycle-runtime.png` sha256=aab13d453c0badc4 bytes=116171
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.04-etape-future-runtime.png` sha256=4d97ef104f7b6438 bytes=86200
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.05-cki-methode-runtime.png` sha256=eac8688e24eab812 bytes=95198
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.06-projet-runtime.png` sha256=aab13d453c0badc4 bytes=116171
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.07-trajectoire-init-or-proposal-runtime.png` sha256=de17481eadece706 bytes=120526
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.10-trajectoire-analyse-runtime.png` sha256=4c17da8e4c563e8d bytes=99600
- `.tmp-sfia-review/ensemble07-evidence/runtime/09.11-trajectoire-runtime.png` sha256=ed78dc881669e8c1 bytes=121548
- `.tmp-sfia-review/ensemble07-evidence/runtime/_login-probe.png` sha256=fc0e98c32ed50eaf bytes=136267
- `.tmp-sfia-review/ensemble07-evidence/runtime/sas-06-prep-or-popup-runtime.png` sha256=1a5129dec81a019f bytes=113401
- `.tmp-sfia-review/ensemble07-evidence/runtime/travail-apres-proposition-runtime.png` sha256=0a1591e2e4dab56e bytes=141543

## Architecture choisie (Option A hybride)

1. createProjectCommand inchangé (idempotence D2).
2. ensureInitialQualification + processInitialQualification (une opération/projet, claim token, terminal PROPOSED|CLARIFICATION|FAILED).
3. PROPOSE_TRAJECTORY D5 avec forecast_json additif (migration 015).
4. Un message assistant unique corrélé ; admission D3 refuse tours Pilote si PENDING/RUNNING/UNKNOWN.
5. Projection partagée initialQualification dans contexte projet → UI Travail + Trajectoire.
6. PilotagePanel conservé sous details diagnostic — capacités D5/D6 non retirées.

**Rejeté:** nouveau bus/workflow moteur ; suppression PilotagePanel avant GO conversationnel prouvé ; migration destructive.

## Tests exécutés

- npx tsc --noEmit PASS
- npm run test:unit — 85 files / 686 tests PASS
- npm run test:integration — 34 files / 516 tests PASS (incl. ensemble07 PG)
- Browser DEV captures Playwright 1680×970 — voir grille
- LIVE fournisseur NOT PROVEN

## Fichiers créés (contenu intégral)

### `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql`

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

```
import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  preparations,
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

/** Test hook — throw between ANALYZING and publish. */
export const initialQualificationFault: { beforePublish: null | (() => void) } = {
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

async function appendQualificationAssistantMessage(input: {
  pilotId: string;
  preparationId: string;
  operationId: string;
  version: number;
  content: string;
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
      role: "assistant",
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

async function publishProposedTrajectory(input: {
  pilotId: string;
  projectId: string;
  operationId: string;
  version: number;
  orientation: string;
  forecastSteps: ForecastBuildResult & { kind: "PROPOSE" };
}): Promise<string> {
  const clientCommandKey = `iq:${input.operationId}:v${input.version}:propose`;
  const result = await executePilotageCommand(input.pilotId, input.projectId, {
    clientCommandKey,
    expectedRevision: 0,
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
    const locked = (
      await tx.execute(
        sql`select * from trajectory_qualification_operations where project_id = ${projectId} for update`,
      )
    ) as unknown as Array<Record<string, unknown>>;
    const cur = locked[0];
    if (!cur) return null;
    const status = String(cur.status) as QualificationStatus;
    if (TERMINAL.has(status) && !opts?.force) return { kind: "terminal" as const, id: String(cur.id) };

    if (status === "RUNNING" && cur.owner_token && cur.claimed_at) {
      const claimedAt = new Date(String(cur.claimed_at)).getTime();
      if (Date.now() - claimedAt < 120_000) {
        return { kind: "busy" as const, id: String(cur.id) };
      }
    }

    await tx
      .update(trajectoryQualificationOperations)
      .set({
        status: "RUNNING",
        phase: "ANALYZING",
        ownerToken,
        claimedAt: now,
        updatedAt: now,
      })
      .where(eq(trajectoryQualificationOperations.id, String(cur.id)));

    return { kind: "claimed" as const, id: String(cur.id), pilotId: String(cur.pilot_id), preparationId: String(cur.preparation_id), version: Number(cur.version) };
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

    initialQualificationFault.beforePublish?.();

    await db
      .update(trajectoryQualificationOperations)
      .set({ phase: "PUBLISHING", updatedAt: new Date() })
      .where(eq(trajectoryQualificationOperations.id, claimed.id));

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
    }

    const assistantMessageId = await appendQualificationAssistantMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      version: claimed.version,
      content: assistantContent,
    });

    if (built.kind === "PROPOSE" && !trajectoryRevisionId) {
      throw new StudioError("INTERNAL", "Publication incomplète");
    }

    await db
      .update(trajectoryQualificationOperations)
      .set({
        status: terminalStatus,
        phase: "TERMINAL",
        trajectoryRevisionId,
        assistantMessageId,
        resultJson,
        ownerToken: null,
        errorCode: null,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(trajectoryQualificationOperations.id, claimed.id),
          eq(trajectoryQualificationOperations.ownerToken, ownerToken),
        ),
      );

    return getQualificationProjection(claimed.pilotId, projectId);
  } catch (e) {
    const errorCode = e instanceof StudioError ? e.code : "QUALIFICATION_FAILED";
    const assistantMessageId = await appendQualificationAssistantMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      version: claimed.version,
      content: studioFailedMessage(),
    }).catch(() => null);

    await db
      .update(trajectoryQualificationOperations)
      .set({
        status: "FAILED",
        phase: "TERMINAL",
        assistantMessageId,
        errorCode,
        ownerToken: null,
        resultJson: { kind: "FAILED", errorCode },
        updatedAt: new Date(),
      })
      .where(eq(trajectoryQualificationOperations.id, claimed.id));

    return getQualificationProjection(claimed.pilotId, projectId);
  }
}

export function kickInitialQualificationProcessing(projectId: string, pilotId: string): void {
  void processInitialQualification(projectId, { pilotId }).catch(() => undefined);
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

  const first = inferPreferredFirstCycle(input.projection, bundle) ?? "CADRAGE";
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
  const showAnalyzing = Boolean(q && (q.status === "PENDING" || q.status === "RUNNING"));
  const showClarification = q?.status === "CLARIFICATION";
  const showFailed = q?.status === "FAILED";
  const showProposal =
    !showAnalyzing &&
    !showClarification &&
    !cycle &&
    closed.length === 0 &&
    Boolean(forecast && forecast.length > 0);

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

      {!showAnalyzing && !showClarification && !showProposal ? (
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
        {props.proposedId && !props.retainedId ? (
          <span className="text-[#6cdbba]"> · Proposition D5 enregistrée</span>
        ) : null}
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
      statusLabel: "✓ Clôturé",
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
      statusLabel: "● Actif",
      subtitle: "Cycle en cours",
    });
  }

  const futureSteps =
    props.forecast?.filter((s) => {
      if (props.cycle && s.cycleType === props.cycle.cycleType) return false;
      if (props.closed.some((c) => c.cycleType === s.cycleType)) return false;
      return true;
    }) ?? [];

  futureSteps.forEach((step) => {
    cards.push({
      key: `f-${step.order}-${step.cycleType}`,
      order: String(cards.length + 1).padStart(2, "0"),
      title: labelCycle(step.cycleType),
      status: "envisioned",
      statusLabel: "○ Envisagée",
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
          <div className="flex flex-wrap items-stretch gap-3">
            {cards.map((card, idx) => (
              <div key={card.key} className="flex items-stretch gap-3">
                <article
                  className="fig-panel space-y-2 min-w-[180px] max-w-[240px]"
                  style={{
                    borderColor:
                      card.status === "closed"
                        ? "#6cdbba55"
                        : card.status === "active"
                          ? "#7477ed88"
                          : "#2b3850",
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
                  <span className="self-center text-[#7787a4]" aria-hidden>
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
        <p className="fig-kicker text-[#7477ed]">RÉSULTAT À LA CLÔTURE</p>
        <p className="text-sm text-[#f3f5ff]">
          {props.cycle?.objective?.trim() ||
            "Objectif de clôture non reconstitué depuis les sources durables."}
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
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      <section className="fig-panel space-y-3">
        <div className="flex items-start justify-between gap-2">
          <p className="fig-kicker text-[#7477ed]">ÉTAPE ENVISAGÉE</p>
          <span className="text-xs font-semibold text-[#a3b0c7]">○ Cycle non ouvert</span>
        </div>
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            FINALITÉ ACTUELLEMENT ENVISAGÉE
          </p>
          <p className="text-sm text-[#f3f5ff]">
            {props.rationale?.trim() ||
              "Finalité à préciser avec Nora — aucune ouverture automatique."}
          </p>
        </section>
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            CE QUI RESTE À DÉFINIR
          </p>
          <p className="text-sm text-[#a3b0c7]">
            Objectif opérationnel, critères de clôture et CKI principal — uniquement après GO du
            Pilote.
          </p>
        </section>
        <div className="flex justify-end pt-2">
          <button type="button" className="btn primary" onClick={props.onOpenTravail}>
            Ouvrir le travail avec Nora ↗
          </button>
        </div>
      </section>
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

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="fig-panel space-y-3">
          <p className="fig-kicker text-[#7477ed]">CKI PRINCIPAL</p>
          {cycle?.cki.ckiId ? (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">{cycle.cki.ckiId}</h3>
              <p className="text-xs text-[#a3b0c7]">
                Disponibilité {cycle.cki.availability}
                {cycle.cki.pinnedVersion ? ` · pin ${cycle.cki.pinnedVersion}` : ""}
                {cycle.cki.contentDigest
                  ? ` · digest ${cycle.cki.contentDigest.slice(0, 12)}`
                  : ""}
              </p>
              <p className="text-sm text-[#a3b0c7]">
                ASSOCIATED / RESOLVED / DELIVERED restent distincts — aucun claim DELIVERED sans
                preuve d&apos;attachement.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucun CKI principal actif</h3>
              <p className="text-sm text-[#a3b0c7]">
                Le catalogue peut être consulté ; un CKI principal n&apos;existe qu&apos;avec un
                cycle réellement ouvert.
              </p>
            </>
          )}
        </section>

        <section className="fig-panel space-y-3">
          <p className="fig-kicker text-[#7477ed]">MÉTHODE DU PROJET</p>
          {method?.presence === "RETAINED" ? (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">
                {method.methodRef} · {method.methodVersion}
              </h3>
              <p className="text-sm text-[#a3b0c7]">
                Méthode retenue par décision Pilote
                {method.usageRestricted ? " — usage restreint" : ""}.
              </p>
              {method.usageNote ? (
                <p className="text-sm text-[#a3b0c7]">{method.usageNote}</p>
              ) : null}
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucune méthode retenue</h3>
              <p className="text-sm text-[#a3b0c7]">
                La méthode applicable est distincte du CKI et n&apos;est imposée par Nora.
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

### `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts`

```
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  delete process.env.OPENAI_API_KEY;
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
      "Plateforme de suivi pour équipes produit",
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
    const { prep, name } = await seedPrepWithProjection(pilotId, "E07Idem", "Projet idempotent");
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
      "Eviter les doublons de restitution",
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
    const { prep, name } = await seedPrepWithProjection(pilotId, "E07Fail", "Test incident technique");
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
    expect(msg?.content).toMatch(/\[Studio\]/);
    expect(msg?.content).not.toMatch(/recommande d'ouvrir/i);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts`

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

  it("prefers CADRAGE when intention is present", () => {
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

### `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`

```
# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

**Statut:** construction DEV en cours — NO RELEASE
**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**Date:** 2026-11-20

## Architecture retenue

Option A hybride (dossier §8.1) :

1. Après `createProjectCommand` confirmé, `ensureInitialQualification` consigne une opération durable `PENDING` (1 / projet).
2. `kickInitialQualificationProcessing` lance `processInitialQualification` hors latence critique HTTP (fire-and-forget).
3. Publication corrélée : D5 `PROPOSE_TRAJECTORY` + `forecast_json` + un message assistant unique (`generationId` = `sfia:iq:{op}:v{n}`).
4. Surfaces SAS / Travail / Trajectoire lisent la même projection `initialQualification`.
5. Admission serveur + compositeur UI verrouillés tant que status ∈ {PENDING, RUNNING, UNKNOWN}.

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

### `projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts`

```
import { config } from "dotenv";
config({ path: ".env.local" });
process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";

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
    // force bypasses STUDIO_DEV_HOLD_INITIAL_QUALIFICATION (DEV capture freeze)
    iq = await processInitialQualification(created.projectId, { pilotId, force: true });
  }
  return {
    projectId: created.projectId,
    prepId: prep.id,
    iqStatus: iq?.status ?? "PENDING",
  };
}

async function main() {
  const pilot = await pilotA();

  const stamp = Date.now().toString(36);

  const proposed = await createNamedProject(
    pilot.id,
    `Assistant de conduite ${stamp}`,
    "Conduire les projets et clarifier les décisions avec un cadrage puis une conception fonctionnelle",
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

  const payload = {
    pilotId: pilot.id,
    proposed,
    analyzing,
    clarification,
    urls: {
      projet06: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=projet`,
      travail: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=travail`,
      traj11: `http://127.0.0.1:3100/projects/${proposed.projectId}?surface=pilotage`,
      traj10: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=pilotage`,
      travailLock: `http://127.0.0.1:3100/projects/${analyzing.projectId}?surface=travail`,
      traj07: `http://127.0.0.1:3100/projects/${clarification.projectId}?surface=pilotage`,
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
};

const outDir = resolve(process.cwd(), "../../../.tmp-sfia-review/ensemble07-evidence/runtime");
mkdirSync(outDir, { recursive: true });

async function shot(page: import("@playwright/test").Page, name: string) {
  const path = resolve(outDir, name);
  await page.waitForTimeout(800);
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

  await page.goto(urls.urls.projet06, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="project-overview"]');
  await shot(page, "09.06-projet-runtime.png");
  await shot(page, "09.01-projet-approx-sans-cycle-runtime.png");

  await page.goto(urls.urls.travail, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "travail-apres-proposition-runtime.png");

  await page.goto(urls.urls.traj11, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  await shot(page, "09.11-trajectoire-runtime.png");

  const futureBtn = page.locator('[data-testid="trajectory-forecast-step-2"]');
  if (await futureBtn.count()) {
    await futureBtn.click();
    await page.waitForSelector('[data-testid="trajectory-etape-future"]');
    await shot(page, "09.04-etape-future-runtime.png");
    await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  }

  await page.click('[data-testid="trajectory-open-cki"]');
  await page.waitForSelector('[data-testid="trajectory-cki-methode"]');
  await shot(page, "09.05-cki-methode-runtime.png");

  await page.goto(urls.urls.travailLock, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "05.17-travail-compositeur-verrouille-runtime.png");

  await page.goto(urls.urls.traj10, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-qualification-progress"]', {
    timeout: 15000,
  });
  await shot(page, "09.10-trajectoire-analyse-runtime.png");

  await page.goto(urls.urls.traj07, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "09.07-trajectoire-init-or-proposal-runtime.png");

  await page.goto(urls.urls.sasPrep, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await shot(page, "sas-06-prep-or-popup-runtime.png");

  const files = readdirSync(outDir).filter((f) => f.endsWith(".png"));
  const manifest = {
    capturedAt: new Date().toISOString(),
    viewport: { w: 1680, h: 970 },
    holdEnv: "STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1",
    projects: {
      proposed: urls.proposed.projectId,
      analyzing: urls.analyzing.projectId,
      clarification: urls.clarification.projectId,
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

## Fichiers modifiés (diff utile)

### `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index d0f5912a..bf750981 100644
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
+        style={{ borderColor: "#2b3850" }}
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

### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index b164002c..2792d128 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -17,14 +17,14 @@ const HERO: Record<
     sub: "Le chat reste à gauche ; le document sélectionné s’ouvre dans la visionneuse à droite.",
   },
   projet: {
-    kicker: "Espace projet  /  Projet",
-    title: "Vue d'ensemble du projet",
-    sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
+    kicker: "ESPACE PROJET / VUE D'ENSEMBLE",
+    title: "Vue d'ensemble",
+    sub: "Identité, cycle et activité du projet.",
   },
   pilotage: {
-    kicker: "Espace projet  /  Trajectoire",
-    title: "Pilotage · cycle et décisions",
-    sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
+    kicker: "ESPACE PROJET / TRAJECTOIRE",
+    title: "Trajectoire du projet",
+    sub: "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre.",
   },
   journal: {
     kicker: "ESPACE PROJET  /  JOURNAL",
@@ -76,7 +76,9 @@ export function ProjectChrome(props: {
   const isTravail = props.surface === "travail";
   /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
   const isJournal = props.surface === "journal";
-  const breadcrumbOnly = isTravail || isJournal;
+  /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
+  const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
+  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (

```

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 18a635c1..1bc911d2 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -46,12 +46,17 @@ export function NoraConversation(props: {
   focusMessageId?: string | null;
   onFocusMessageHandled?: () => void;
   focusStatus?: string | null;
+  /** Ensemble 07 — verrou qualification initiale (UI + accessibilité). */
+  composerLocked?: boolean;
+  composerLockReason?: string;
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
@@ -369,8 +374,36 @@ export function NoraConversation(props: {
         <div
           className="fig-composer fig-travail-composer"
           data-testid="nora-composer"
+          data-composer-locked={composerLocked ? "1" : "0"}
           data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
         >
+          {composerLocked ? (
+            <div className="fig-travail-composer-lock flex items-start gap-2 text-xs text-[#a3b0c7] mb-2">
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
+              <div>
+                <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
+                  Compositeur temporairement indisponible
+                </p>
+                {props.composerLockReason ? (
+                  <p data-testid="composer-lock-reason">{props.composerLockReason}</p>
+                ) : null}
+              </div>
+            </div>
+          ) : null}
           <div className="fig-travail-composer-row">
             <span className="fig-travail-composer-plus" aria-hidden>
               +
@@ -384,9 +417,16 @@ export function NoraConversation(props: {
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
@@ -399,7 +439,7 @@ export function NoraConversation(props: {
             <button
               type="button"
               className="fig-travail-composer-send"
-              disabled={props.busy || !props.draft.trim()}
+              disabled={sendDisabled}
               onClick={props.onSend}
               data-testid="thread-send"
               aria-label="Envoyer"

```

### `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index f0cb7cac..72de6781 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -22,6 +22,8 @@ import {
   markDecisionState,
 } from "@/domains/decisions/service";
 import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
+import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
+import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import {
   buildSourceActionKey,
   runBusinessCommand,
@@ -134,6 +136,7 @@ function trajectoryView(row: {
   status: string;
   orientation: string;
   decisionId: string | null;
+  forecastJson?: unknown;
 } | undefined): TrajectoryView {
   if (!row) return null;
   return {
@@ -142,6 +145,7 @@ function trajectoryView(row: {
     status: row.status,
     orientation: row.orientation,
     decisionId: row.decisionId,
+    forecastSteps: parseForecastJson(row.forecastJson),
   };
 }

@@ -191,6 +195,19 @@ export async function getPilotageProjection(pilotId: string, projectId: string):
     ? methodUsageRestricted(restrictions, method.methodRef)
     : false;

+  const closedCycles = await db
+    .select({
+      id: projectCycles.id,
+      cycleType: projectCycles.cycleType,
+      objective: projectCycles.objective,
+      closedAt: projectCycles.closedAt,
+    })
+    .from(projectCycles)
+    .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "CLOSED")))
+    .orderBy(desc(projectCycles.closedAt));
+
+  const initialQualification = await getQualificationProjection(pilotId, projectId);
+
   return {
     projectId,
     revision: state?.revision ?? 0,
@@ -232,6 +249,13 @@ export async function getPilotageProjection(pilotId: string, projectId: string):
       targetRef: r.targetRef,
       status: r.status,
     })),
+    closedCycles: closedCycles.map((c) => ({
+      id: c.id,
+      cycleType: c.cycleType,
+      objective: c.objective,
+      closedAt: c.closedAt ? c.closedAt.toISOString() : null,
+    })),
+    initialQualification,
   };
 }

@@ -743,6 +767,10 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie

   if (command.operation === "PROPOSE_TRAJECTORY") {
     const id = newId("trj");
+    const forecastJson =
+      input.body.forecastJson && input.body.forecastJson.length > 0
+        ? input.body.forecastJson
+        : null;
     await tx.insert(trajectoryRevisions).values({
       id,
       projectId,
@@ -752,6 +780,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       sourceKind: command.sourceKind,
       sourceRef: command.sourceRef,
       decisionId: null,
+      forecastJson,
       createdAt: now,
     });
     const revision = await bumpRevision(tx, projectId);

```

### `projects/sfia-studio-next/web/src/domains/pilotage/types.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
index 9121af5f..74b2dca4 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
@@ -1,5 +1,7 @@
 import type { CkiAvailability } from "@/domains/pilotage/cki-resolve";
 import type { CycleType } from "@/domains/pilotage/cki-resolve";
+import type { ForecastStep } from "@/domains/pilotage/forecast-builder";
+import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

 /** Internal command outcomes. PARTIAL is intentionally absent: CLOSE+OPEN share one commit. */
 export const COMMAND_STATUSES = [
@@ -80,6 +82,8 @@ export type PilotageRequestBody = {
   /** Durable Nora intent id correlated to this USER_MESSAGE command (SEM). */
   semanticIntentId?: string;
   semanticSchemaVersion?: string;
+  /** Ensemble 07 — structured forecast persisted on trajectory revision. */
+  forecastJson?: ForecastStep[];
 };

 export type ClassifiedCommand = {
@@ -111,8 +115,16 @@ export type TrajectoryView = {
   status: string;
   orientation: string;
   decisionId: string | null;
+  forecastSteps: ForecastStep[] | null;
 } | null;

+export type ClosedCycleView = {
+  id: string;
+  cycleType: string;
+  objective: string;
+  closedAt: string | null;
+};
+
 export type PilotageProjection = {
   projectId: string;
   revision: number;
@@ -149,6 +161,8 @@ export type PilotageProjection = {
         scope: string;
       };
   restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
+  closedCycles: ClosedCycleView[];
+  initialQualification: InitialQualificationProjection | null;
 };

 export function pilotageCommandHttpStatus(result: CommandResult): number {

```

### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 96867946..83bc164d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -71,6 +71,7 @@ import {
   type ConversationalAuthorityOutcome,
 } from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
+import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
 import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
@@ -826,6 +827,9 @@ export async function postUserMessageAndNora(
   // P0-B: next turn recovers AUTHORIZED Nora missions after crash mid-authorize→dispatch.
   // G2: also recover interrupted D2→D4 mission continuation when project already exists.
   if (ctx.project?.id) {
+    // Ensemble 07 — RG-CONV-018: refuse pilot turns while initial trajectory qualification is open.
+    await assertPilotTurnNotBlockedByQualification(pilotId, ctx.project.id);
+
     try {
       await recoverAuthorizedNoraMissions({ pilotId, projectId: ctx.project.id });
     } catch {

```

### `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index 6d16b83e..5b2743cb 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -1,6 +1,11 @@
-import { and, eq } from "drizzle-orm";
+import { and, desc, eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { preparationProjectLinks, projects } from "@/db/schema";
+import { humanDecisions, preparationProjectLinks, projects } from "@/db/schema";
+import {
+  getQualificationProjection,
+  kickInitialQualificationProcessing,
+  processInitialQualification,
+} from "@/domains/pilotage/initial-qualification";
 import { listMessages, listTurnProjections } from "@/domains/conversation/service";
 import { listDocuments } from "@/domains/document/service";
 import { listProjectKnowledge } from "@/domains/knowledge/journal";
@@ -69,8 +74,59 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       subjectId: o.subjectId,
     })),
   };
+  let initialQualification = await getQualificationProjection(pilotId, projectId);
+  if (initialQualification?.status === "PENDING") {
+    kickInitialQualificationProcessing(projectId, pilotId);
+  } else if (initialQualification?.status === "RUNNING") {
+    void processInitialQualification(projectId, { pilotId }).catch(() => undefined);
+  }
+  initialQualification = (await getQualificationProjection(pilotId, projectId)) ?? initialQualification;
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
@@ -81,5 +137,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     documents,
     knowledge,
     pilotage,
+    initialQualification,
+    activity,
   };
 }

```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
index d21fb43c..0801a3d1 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
@@ -2,6 +2,10 @@ import { NextResponse } from "next/server";
 import { eq } from "drizzle-orm";
 import { requireStudioSession } from "@/domains/identity/session";
 import { createProjectCommand } from "@/domains/preparation/create-project";
+import {
+  ensureInitialQualification,
+  kickInitialQualificationProcessing,
+} from "@/domains/pilotage/initial-qualification";
 import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";
 import {
   authorizeMissionBoundD2Create,
@@ -81,6 +85,24 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
     });
     const sideEffects = probeCreateProjectSideEffects();

+    let initialQualification: Awaited<ReturnType<typeof ensureInitialQualification>> | null = null;
+    if (
+      (result.status === "CREATED" || result.status === "ALREADY_CREATED") &&
+      "projectId" in result &&
+      result.projectId
+    ) {
+      try {
+        initialQualification = await ensureInitialQualification({
+          projectId: result.projectId,
+          preparationId,
+          pilotId: session.pilotId,
+        });
+        kickInitialQualificationProcessing(result.projectId, session.pilotId);
+      } catch {
+        initialQualification = null;
+      }
+    }
+
     let missionContinue: Awaited<ReturnType<typeof continueAfterProjectCreated>> | null = null;
     if (
       auth.outcome !== "CLASSIC" &&
@@ -123,6 +145,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
         sideEffects,
         missionContinue,
         missionBinding: auth.outcome,
+        initialQualification,
       },
       { status },
     );

```

### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 444c5234..fa486646 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -15,6 +15,9 @@ import {
   type JournalSourceLink,
 } from "@/components/figma/ProjectJournal";
 import { ProjectOverview } from "@/components/figma/ProjectOverview";
+import { TrajectoryBoard } from "@/components/figma/TrajectoryBoard";
+import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
+import type { PilotageProjection } from "@/domains/pilotage/types";
 import {
   ProjectUnavailable,
   type ProjectUnavailableKind,
@@ -288,6 +291,15 @@ export default function ProjectPage() {
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
@@ -1600,6 +1612,9 @@ export default function ProjectPage() {
         setChoiceFrozen(true);
       }
       setKnowledge(j.knowledge ?? null);
+      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
+      setInitialQualification((j.initialQualification as InitialQualificationProjection) ?? null);
+      setProjectActivity(j.activity ?? null);
       const nextPrepId = j.preparation?.id ?? null;
       setPreparationId(nextPrepId);
       preparationIdRef.current = nextPrepId;
@@ -1819,6 +1834,28 @@ export default function ProjectPage() {
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.projectId, router, loadEpoch]);

+  useEffect(() => {
+    const locked =
+      initialQualification?.status === "PENDING" ||
+      initialQualification?.status === "RUNNING";
+    if (!locked) return;
+    let cancelled = false;
+    const tick = async () => {
+      const res = await fetch(`/api/projects/${params.projectId}`);
+      if (!res.ok || cancelled) return;
+      const j = await res.json();
+      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
+      setInitialQualification((j.initialQualification as InitialQualificationProjection) ?? null);
+      setMessages((j.messages ?? []) as Msg[]);
+    };
+    const id = window.setInterval(() => void tick(), 2000);
+    void tick();
+    return () => {
+      cancelled = true;
+      window.clearInterval(id);
+    };
+  }, [params.projectId, initialQualification?.status, initialQualification?.operationId]);
+
   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
   useEffect(() => {
     surfaceNavGenRef.current += 1;
@@ -2468,9 +2505,11 @@ export default function ProjectPage() {
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

@@ -2481,6 +2520,8 @@ export default function ProjectPage() {
           messages={messages}
           draft={draft}
           busy={busy || !preparationId}
+          composerLocked={Boolean(initialQualification?.composerLocked)}
+          composerLockReason={initialQualification?.composerLockReason}
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
           status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
@@ -2618,41 +2659,16 @@ export default function ProjectPage() {

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
+          <TrajectoryBoard
+            projectId={params.projectId}
+            pilotage={pilotageProjection}
+            initialQualification={initialQualification}
+            onOpenTravail={() => selectSurface("travail")}
+          />
+          <details className="fig-panel text-sm" data-testid="pilotage-diagnostic">
+            <summary>Pilotage (diagnostic)</summary>
             <PilotagePanel projectId={params.projectId} />
-          </div>
+          </details>
         </div>
       ) : null}


```

### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 8ca6ff6c..2419bb72 100644
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
@@ -96,6 +98,11 @@ export default function PreparationPage() {
   const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);
   /** Structured awaiting mission key from server — never parsed from Nora prose. */
   const [awaitingClientIntentKey, setAwaitingClientIntentKey] = useState<string | null>(null);
+  const [createProgressVisible, setCreateProgressVisible] = useState(false);
+  const [createProgressStep, setCreateProgressStep] = useState<1 | 2 | 3>(1);
+  const [createProgressQualification, setCreateProgressQualification] =
+    useState<InitialQualificationProjection | null>(null);
+  const [pendingNavigateProjectId, setPendingNavigateProjectId] = useState<string | null>(null);

   function rememberCreateIntent(next: CreateIntent | null) {
     createDocIntentRef.current = next;
@@ -556,6 +563,7 @@ export default function PreparationPage() {
         projectId?: string;
         reason?: string;
         missionBindingError?: string;
+        initialQualification?: InitialQualificationProjection;
         missionContinue?: {
           continued?: boolean;
           documentSave?: { documentId?: string };
@@ -593,7 +601,13 @@ export default function PreparationPage() {
       if (j.projectId && !j.missionBindingError) {
         setProjectId(j.projectId);
         setAwaitingClientIntentKey(null);
-        router.push(`/projects/${j.projectId}`);
+        setCreateProgressStep(1);
+        setCreateProgressQualification(j.initialQualification ?? null);
+        setCreateProgressVisible(true);
+        setPendingNavigateProjectId(j.projectId);
+        setCreateProgressStep(j.initialQualification ? 2 : 1);
+        window.setTimeout(() => setCreateProgressStep(2), 400);
+        window.setTimeout(() => setCreateProgressStep(3), 900);
         return;
       }

@@ -927,6 +941,19 @@ export default function PreparationPage() {
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

### `projects/sfia-studio-next/web/src/db/schema.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index cb71e766..e31c56a4 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -480,6 +480,8 @@ export const trajectoryRevisions = pgTable(
     sourceKind: text("source_kind").notNull(),
     sourceRef: text("source_ref").notNull().default(""),
     decisionId: text("decision_id").references(() => humanDecisions.id),
+    /** Structured sequential cycle forecast (Ensemble 07). */
+    forecastJson: jsonb("forecast_json"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
   },
   (t) => [
@@ -488,6 +490,40 @@ export const trajectoryRevisions = pgTable(
   ],
 );

+/** D5/D3 — one durable initial trajectory qualification per project (Ensemble 07). */
+export const trajectoryQualificationOperations = pgTable(
+  "trajectory_qualification_operations",
+  {
+    id: text("id").primaryKey(),
+    projectId: text("project_id")
+      .notNull()
+      .references(() => projects.id),
+    preparationId: text("preparation_id")
+      .notNull()
+      .references(() => preparations.id),
+    pilotId: text("pilot_id")
+      .notNull()
+      .references(() => pilots.id),
+    status: text("status").notNull(),
+    phase: text("phase").notNull(),
+    version: integer("version").notNull().default(1),
+    inputFingerprint: text("input_fingerprint").notNull().default(""),
+    trajectoryRevisionId: text("trajectory_revision_id").references(() => trajectoryRevisions.id),
+    assistantMessageId: text("assistant_message_id"),
+    resultJson: jsonb("result_json"),
+    errorCode: text("error_code"),
+    ownerToken: text("owner_token"),
+    claimedAt: timestamp("claimed_at", { withTimezone: true }),
+    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
+    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
+  },
+  (t) => [
+    uniqueIndex("trajectory_qualification_operations_project_uidx").on(t.projectId),
+    index("trajectory_qualification_operations_preparation_idx").on(t.preparationId),
+    index("trajectory_qualification_operations_status_idx").on(t.status),
+  ],
+);
+
 /** D5 — lockable project revision. Missing row means revision 0 (no cycle created with the project). */
 export const projectPilotageState = pgTable("project_pilotage_state", {
   projectId: text("project_id")

```

### `projects/sfia-studio-next/web/scripts/db-migrate.sh`

```diff
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index cc81197d..9a298db6 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -32,4 +32,5 @@ apply "011_oauth_session_binding.sql"
 apply "012_auth_concurrency_safety.sql"
 apply "013_preparation_projection.sql"
 apply "014_journal_d4_revisions.sql"
-echo "db:migrate OK (001→014)"
+apply "015_trajectory_qualification.sql"
+echo "db:migrate OK (001→015)"

```

### `projects/sfia-studio-next/web/src/lib/http-errors.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/lib/http-errors.ts b/projects/sfia-studio-next/web/src/lib/http-errors.ts
index 8fae28a2..481ea9f5 100644
--- a/projects/sfia-studio-next/web/src/lib/http-errors.ts
+++ b/projects/sfia-studio-next/web/src/lib/http-errors.ts
@@ -13,6 +13,7 @@ export type StudioErrorCode =
   | "DEPENDENCY_UNAVAILABLE"
   | "INTERNAL"
   | "TURN_IN_PROGRESS"
+  | "QUALIFICATION_IN_PROGRESS"
   | "PAYLOAD_MISMATCH"
   | "NOT_CONFIGURED"
   | "REQUIRES_REQUALIFICATION"
@@ -49,6 +50,7 @@ function defaultStatus(code: StudioErrorCode): number {
       return 400;
     case "CONFLICT":
     case "TURN_IN_PROGRESS":
+    case "QUALIFICATION_IN_PROGRESS":
     case "PAYLOAD_MISMATCH":
       return 409;
     case "DEPENDENCY_UNAVAILABLE":

```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
index f22d02af..65a21943 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
@@ -19,6 +19,8 @@ export async function GET(_: Request, ctx: { params: Promise<{ projectId: string
       documents: data.documents,
       knowledge: data.knowledge,
       pilotage: data.pilotage,
+      initialQualification: data.initialQualification,
+      activity: data.activity,
     });
   } catch (e) {
     const code = (e as { code?: string }).code;

```

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e273b49a..87157e77 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3225,3 +3225,19 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
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
+| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 (parcours, bilan lacunes, étape future, CKI/méthode, analyse, proposition séquentielle) ; forecast_json D5 |
+| Tests | unit 686 PASS ; E07 forecast/lock/ensure ; PG `ensemble07-initial-qualification` ; `tsc` OK |
+| Fake/Real | DETERMINISTIC/FAKE fixture Nora ; LIVE NOT PROVEN ; hold DEV `STUDIO_DEV_HOLD_INITIAL_QUALIFICATION` pour captures 09.10/05.17 uniquement |
+| Preuves Figma | 13/13 exports MCP ; runtime comparables ~9/13 (09.04, 09.05, 09.06, 09.10, 09.11, 05.17 + approx 09.01/09.07/SAS) |
+| Réserves | Pas de runtime 09.02/09.03/09.08/09.09 (cycle ACTIVE/CLOSED non seedé GO) ; SAS popup non isolée ; PilotagePanel diagnostic encore visible ; e2e create→lock→unlock Playwright non clos |
+| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
+| Handoff tip (1er) | `10847446510d1dfdd2e415da32296a483f937cb7` — republication attendue après itération visuelle |
+

```

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, ChatGPT doit relire depuis Git la branche sfia/review-handoff, fichier sfia-review-handoff/latest-chatgpt-review.md, vérifier l'identité du cycle, le HEAD, les sources, le contenu modifié, les preuves et la publication distante avant de donner son propre verdict.

## Verdict final pack

**FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED**

Gate C OPEN · NO RELEASE · No project push/PR/merge · Handoff L3 republished after visual iteration.
