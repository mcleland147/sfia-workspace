# SFIA Review Pack FULL — Ensemble 07 · Projet, Trajectoire et conduite conversationnelle Nora

**Date/heure:** 2026-11-20T17:14:55.352074+00:00
**Cycle:** Standard EVOL · Delivery projet · R5/ML4D Ensemble 07 · Gate C OPEN
**Profil:** Standard (QA Figma renforcée) · Classe **NO RELEASE**
**Worktree:** `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**HEAD:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**Base contrat:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**origin/main:** `6e93a33d64dfeea2eab88fb7896d733b34053f97` (inchangé vs cadrage)

## Verdict candidat

**FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED**

Preuves fonctionnelles DEV solides (qualification, message unique, verrou admission, build, tests PG).
Captures Figma 13/13 établies avant code. Runtime navigateur prouvé pour Projet / Travail (message proactif) / Trajectoire proposition, mais **pas encore 13/13 paires comparées** au viewport 1680×970. Écarts structurels résiduels vs maquettes (chrome titres, densités, panneaux détail 09.03–09.05).

## Fake / Real

| Frontière | Qualification |
|-----------|---------------|
| Nora / forecast initial | DETERMINISTIC / FAKE (forecast-builder + fixture) |
| PostgreSQL DEV :5433 | REAL local DEV |
| Browser DEV :3100 | BROWSER PROVEN (3 surfaces) |
| Fournisseur LIVE | LIVE NOT PROVEN |
| CKI DELIVERED | NOT APPLICABLE (aucun cycle ouvert) |

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
.tmp-sfia-review/chatgpt-review.md                 | 250 ++++++------------
 .../construction/delivery-history.md               |  15 ++
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../[preparationId]/create-project/route.ts        |  23 ++
 .../web/src/app/api/projects/[projectId]/route.ts  |   2 +
 .../src/app/preparations/[preparationId]/page.tsx  |  29 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  88 ++++---
 .../web/src/components/figma/NoraConversation.tsx  |  29 +-
 .../web/src/components/figma/ProjectOverview.tsx   | 291 ++++++++++++---------
 projects/sfia-studio-next/web/src/db/schema.ts     |  36 +++
 .../web/src/domains/conversation/service.ts        |   4 +
 .../web/src/domains/pilotage/service.ts            |  29 ++
 .../web/src/domains/pilotage/types.ts              |  14 +
 .../web/src/domains/preparation/project-context.ts |  62 ++++-
 .../sfia-studio-next/web/src/lib/http-errors.ts    |   2 +
 15 files changed, 545 insertions(+), 332 deletions(-)
```

## Architecture

Option A hybride : `ensureInitialQualification` après create → `processInitialQualification` découplé → D5 PROPOSE + forecast_json + message assistant corrélé. Admission `QUALIFICATION_IN_PROGRESS`. UI : SasCreateProgressPopup, NoraConversation lock, ProjectOverview, TrajectoryBoard ; PilotagePanel diagnostic conservé.

## Figma contrat

Session `35b80def-cc14-4f44-897f-8b7ecfe1cce4` · fileKey `itgvCulInEnFY6DvgIegvP` · 13 frames lus · captures `.tmp-sfia-review/ensemble07-evidence/figma/` · contrat JSON `figma-visual-contract.json`.

## Runtime captures (partielles)

`.tmp-sfia-review/ensemble07-evidence/runtime/` — 09.06, travail, 09.11 (1680×970).

## Tests exécutés

- `vitest` unit+integration E07 : PASS
- `npm run build` : PASS
- `tsc --noEmit` : PASS

## Réserves / décision Morris

1. Continuer itérations fidélité visuelle 13 frames avant READY.
2. Enrichir 09.03/09.04/09.05 (bilan / étape / CKI).
3. E2E Playwright dédié create→lock→unlock.
4. Pas de merge/PR/release sans GO.


## Fichiers créés (contenu intégral)

### `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql` (sha256:1d44a872997c5233…, 1283 bytes)

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

### `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts` (sha256:4dfc600973c87c19…, 6424 bytes)

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

### `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts` (sha256:3a6f848cc8156f23…, 924 bytes)

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

### `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts` (sha256:e35d8e21d8e699ba…, 16318 bytes)

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

### `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts` (sha256:68dbb259f9d55b59…, 1339 bytes)

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

### `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx` (sha256:3aa1ee6969c37d64…, 7396 bytes)

```
"use client";

import Link from "next/link";
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

export function TrajectoryBoard(props: {
  projectId: string;
  pilotage: PilotageProjection | null;
  initialQualification: InitialQualificationProjection | null;
  onOpenTravail: () => void;
}) {
  const q = props.initialQualification;
  const cycle = props.pilotage?.cycle;
  const proposed = props.pilotage?.trajectory.proposed;
  const retained = props.pilotage?.trajectory.retained;
  const forecast =
    proposed?.forecastSteps ??
    q?.forecastSteps ??
  null;
  const closed = props.pilotage?.closedCycles ?? [];

  const showAnalyzing = q && (q.status === "PENDING" || q.status === "RUNNING");

  return (
    <div className="trajectory-board space-y-4" data-testid="trajectory-board">
      {showAnalyzing ? (
        <section
          className="fig-panel border border-[#7477ed33]"
          data-testid="trajectory-qualification-progress"
          data-step={q.uiStep ?? 1}
        >
          <p className="fig-kicker text-[#7477ed]">QUALIFICATION EN COURS</p>
          <h2 className="fig-section-title">Nora prépare votre trajectoire</h2>
          <p className="text-sm text-[#a3b0c7]">
            Étape {q.uiStep ?? 2}/3 — identification des cycles et références CKI consultables.
            Aucun CKI principal n&apos;est activé tant qu&apos;un cycle n&apos;est pas ouvert.
          </p>
          <button type="button" className="btn secondary mt-3" onClick={props.onOpenTravail}>
            Revenir à Travail ↗
          </button>
        </section>
      ) : null}

      {q?.status === "CLARIFICATION" ? (
        <section className="fig-panel" data-testid="trajectory-clarification">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE À CONSTRUIRE</p>
          <h2 className="fig-section-title">Aucune trajectoire définie</h2>
          <p className="text-sm">{q.clarificationQuestion}</p>
          <button type="button" className="btn secondary mt-3" onClick={props.onOpenTravail}>
            Travailler sur le projet avec Nora ↗
          </button>
        </section>
      ) : null}

      {q?.status === "FAILED" ? (
        <section className="fig-panel" data-testid="trajectory-incident">
          <p className="fig-kicker text-[#a3b0c7]">Incident technique</p>
          <h2 className="fig-section-title">Qualification interrompue</h2>
          <p className="text-sm text-[#a3b0c7]">
            Le projet reste accessible. Reprenez la conversation pour préciser la direction.
          </p>
        </section>
      ) : null}

      <section className="fig-panel space-y-3" data-testid="trajectory-roadmap">
        <p className="fig-kicker">Trajectoire</p>
        <h2 className="fig-section-title">
          {cycle ? "Cycle actif et suites envisagées" : "Vue principale"}
        </h2>

        {closed.length > 0 ? (
          <div data-testid="trajectory-closed-cycles">
            <h3 className="text-xs uppercase tracking-wide text-[#a3b0c7]">Cycles clos</h3>
            <ul className="text-sm space-y-1 mt-1">
              {closed.map((c) => (
                <li key={c.id}>
                  <span className="text-[#6cdbba]">{labelCycle(c.cycleType)}</span>
                  <span className="text-[#a3b0c7]"> — {c.objective.slice(0, 80)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {cycle ? (
          <CycleCard
            label="Actif"
            cycleType={cycle.cycleType}
            objective={cycle.objective}
            tone="active"
          />
        ) : (
          <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-no-active-cycle">
            Aucun cycle actif — la trajectoire reste une proposition tant qu&apos;un GO n&apos;est pas exprimé.
          </p>
        )}

        {forecast && forecast.length > 0 ? (
          <section data-testid="trajectory-proposal-sequential" className="space-y-2">
            <p className="fig-kicker text-[#7477ed]">PROPOSITION INITIALE DE NORA</p>
            <h3 className="fig-section-title text-base">Une progression possible pour ce projet</h3>
            <ForecastSteps forecast={forecast} retainedId={retained?.id} proposedId={proposed?.id} />
            <button type="button" className="btn secondary" onClick={props.onOpenTravail}>
              Lire le message de Nora ↗
            </button>
          </section>
        ) : proposed ? (
          <p className="text-sm">{proposed.orientation}</p>
        ) : !showAnalyzing && q?.status !== "CLARIFICATION" ? (
          <p className="text-sm text-[#a3b0c7]">Aucune proposition de trajectoire pour l&apos;instant.</p>
        ) : null}
      </section>

      <p className="text-xs text-[#a3b0c7]">
        <Link href={`/projects/${props.projectId}?surface=travail`} className="underline-offset-2 hover:underline text-[#7477ed]">
          Travail avec Nora
        </Link>
        {" · consultation sans mutation"}
      </p>
    </div>
  );
}

function CycleCard(props: {
  label: string;
  cycleType: string;
  objective: string;
  tone: "active" | "future";
}) {
  return (
    <article
      className="rounded-lg border px-3 py-2"
      style={{
        borderColor: props.tone === "active" ? "#7477ed55" : "#a3b0c755",
        background: props.tone === "active" ? "#f3f5ff0d" : "transparent",
      }}
      data-testid={props.tone === "active" ? "trajectory-active-cycle" : "trajectory-future-cycle"}
    >
      <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">{props.label}</p>
      <p className="font-medium text-[#f3f5ff]">{labelCycle(props.cycleType)}</p>
      <p className="text-sm text-[#a3b0c7]">{props.objective}</p>
    </article>
  );
}

function ForecastSteps(props: {
  forecast: NonNullable<NonNullable<PilotageProjection["trajectory"]["proposed"]>["forecastSteps"]>;
  retainedId?: string | null;
  proposedId?: string | null;
}) {
  if (!props.forecast) return null;
  return (
    <div data-testid="trajectory-forecast-steps" className="space-y-2">
      <h3 className="text-xs uppercase tracking-wide text-[#a3b0c7]">Séquence proposée</h3>
      <ol className="space-y-2">
        {props.forecast.map((step) => (
          <li
            key={`${step.order}-${step.cycleType}`}
            className="text-sm border-l-2 pl-3"
            style={{ borderColor: step.certainty === "QUALIFIED" ? "#7477ed" : "#a3b0c7" }}
          >
            <span className="font-medium text-[#f3f5ff]">{labelCycle(step.cycleType)}</span>
            <span className="text-[#a3b0c7]">
              {step.certainty === "ENVISIONED" ? " (envisagé)" : ""}
            </span>
            {step.rationale ? <p className="text-[#a3b0c7] mt-0.5">{step.rationale}</p> : null}
          </li>
        ))}
      </ol>
      {props.proposedId && !props.retainedId ? (
        <p className="text-xs text-[#6cdbba]">Proposition D5 non retenue — décision Pilote attendue.</p>
      ) : null}
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx` (sha256:d46ebc57892b5578…, 3096 bytes)

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

### `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts` (sha256:5e645a18d1e45650…, 1861 bytes)

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

### `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts` (sha256:d642205cccad1b47…, 1477 bytes)

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

### `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts` (sha256:bc2fd85e9445034d…, 1297 bytes)

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

### `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts` (sha256:ba381e02c4024dce…, 10657 bytes)

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

### `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md` (sha256:ce3006c35ce51660…, 2516 bytes)

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

## Fichiers modifiés (diff utile)

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

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 18a635c1..3f23f594 100644
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
@@ -369,8 +374,23 @@ export function NoraConversation(props: {
         <div
           className="fig-composer fig-travail-composer"
           data-testid="nora-composer"
+          data-composer-locked={composerLocked ? "1" : "0"}
           data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
         >
+          {composerLocked && props.composerLockReason ? (
+            <div className="fig-travail-composer-lock flex items-start gap-2 text-xs text-[#a3b0c7] mb-2">
+              <button
+                type="button"
+                className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
+                title={props.composerLockReason}
+                aria-label={props.composerLockReason}
+                data-testid="composer-lock-info"
+              >
+                i
+              </button>
+              <p data-testid="composer-lock-reason">{props.composerLockReason}</p>
+            </div>
+          ) : null}
           <div className="fig-travail-composer-row">
             <span className="fig-travail-composer-plus" aria-hidden>
               +
@@ -384,9 +404,16 @@ export function NoraConversation(props: {
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
@@ -399,7 +426,7 @@ export function NoraConversation(props: {
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

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index d0f5912a..bb86e7be 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -1,147 +1,188 @@
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
+  const description =
+    props.description?.trim() ||
+    props.pilotage?.trajectory.proposed?.orientation ||
+    props.pilotage?.trajectory.retained?.orientation ||
+    null;

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

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e273b49a..ffe3a307 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3225,3 +3225,18 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
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
+| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.10/09.11 ; forecast_json D5 |
+| Tests | unit E07 forecast/lock/ensure ; PG `ensemble07-initial-qualification` (6) ; `npm run build` OK |
+| Fake/Real | DETERMINISTIC/FAKE fixture Nora ; LIVE NOT PROVEN |
+| Preuves Figma | 13/13 captures MCP locales ; runtime 3/13 (projet, travail, trajectoire) |
+| Réserves | Fidélité visuelle 13 frames incomplète ; 09.03/04/05 partiels ; GO conversationnel e2e non clos ; PilotagePanel conservé en diagnostic |
+| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
+

```

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, ChatGPT doit relire depuis Git la branche sfia/review-handoff, fichier sfia-review-handoff/latest-chatgpt-review.md, vérifier l'identité du cycle, le HEAD, les sources, le contenu modifié, les preuves et la publication distante avant de donner son propre verdict.
