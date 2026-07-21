# Review pack Full — OPS1 I3 Option B (Delivery)

## Métadonnées

- **Date / heure / fuseau :** 2026-07-21 07:40:26 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle principal :** 8 — Delivery
- **Cycles associés :** 4 UX/UI · 9 QA · 10 Sécurité
- **Profil :** Standard
- **Typologie :** EVOL / delivery
- **Incrément :** OPS1 I3
- **Option validée :** B — intermédiaire
- **Décision Morris :** `GO DELIVERY OPS1 I3 — OPTION B — FOUR GATE ACTIONS — FIXTURE FIRST — NO EXECUTION — ALLOWLIST DEFERRED TO I4`
- **Branche delivery :** `delivery/sfia-studio-ops1-i3-action-gate`
- **Base attendue / observée :** `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- **HEAD initial / courant (sans commit projet) :** `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- **Merge-base vs origin/main :** `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- **Review pack :** Full
- **Mode handoff :** publish-in-cycle
- **Branche handoff :** `sfia/review-handoff`
- **Fichier handoff :** `sfia-review-handoff/latest-chatgpt-review.md`

## État Git initial (truth check)

- `git fetch origin --prune` exécuté avant création de branche
- `origin/main` = `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` (OPS1 I2 live conversation #248)
- Worktree principal : branche créée `delivery/sfia-studio-ops1-i3-action-gate` depuis `origin/main`
- Staged initial : vide
- Fichiers suivis modifiés initiaux : aucun (hors résidus `.tmp-*` non suivis)
- Aucune branche I3 préexistante avec travail à préserver
- OPS1 I1 + I2 présents sur la base

## Sources consultées (Git)

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `projects/sfia-studio/41-operational-vertical-slice-1-framing.md`
3. `projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md`
4. `projects/sfia-studio/45-ops1-functional-design.md`
5. `projects/sfia-studio/46-ops1-functional-flows-and-rules.md`
6. `projects/sfia-studio/51-ops1-ux-ui-contract.md`
7. `projects/sfia-studio/57-ops1-technical-architecture.md`
8. `projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md`
9. `projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md`
10. `projects/sfia-studio/62-ops1-backlog-decision-pack.md`
11. Code OPS1 I1/I2 sur main (`lib/ops1/**`, `features/ops1/**`)
12. Tests unitaires / E2E OPS1 existants
13. Handoff cadrage I3 distant (`e7d74075…`)

## Contrat I3 retenu (Option B)

I3 = couche de décision humaine entre conversation I2 et exécution I4.

1. Session reste `OPEN`
2. Conversation I2 continue
3. Qualification `ACTION_REQUIRED` | `ACTION_NOT_REQUIRED`
4. `ActionCandidate` structuré distinct du chat
5. Panneau proposition + panneau gate
6. Raffinement titre / objectif / périmètre / risques
7. Quatre décisions : `GO` · `NO_GO` · `CORRIGER` · `ABANDONNER`
8. Persistance SQLite + survie au reload
9. **Aucune** exécution Cursor / Git / filesystem
10. Allowlist exécutable reportée à I4

### Règle produit centrale

`GO` = **Proposition validée — préparation I4 autorisée**
`GO` ≠ **Exécution démarrée**

Microcopy GO : `Proposition validée. Aucune exécution n’est lancée dans I3.`
Statuts UI : `ACTION PROPOSÉE — NON AUTORISÉE` → après GO `ACTION VALIDÉE — NON EXÉCUTÉE`
Banner : `GO ≠ exécution — préparation I4 uniquement`

## Architecture implémentée

Réutilise Session Store I1, journal/providers I2, server actions, SQLite, `Ops1SessionScreen`.

Ajouts :

- Types : `ActionCandidate`, `GateDecision`, `ActionQualification`, `SessionQualification`
- Module `actionGate.ts` (persist-only) : qualify, create fixture candidate, refine, recordGateDecision, refuseExecutionAttempt, getI3Bundle
- Tables SQLite : `session_qualifications`, `action_candidates`, `gate_decisions`
- Server actions I3 dans `actions.ts`
- UI : panneau qualification, panneau action, panneau gate (4 boutons), garde-fou refus exécution
- Tests unitaires `actionGate.test.ts` + E2E `ops1-i3-action-gate.spec.ts`

**Absent volontairement (I4+) :** ExecutionOrchestrator, CursorRunnerAdapter, GitWorkspaceManager, hash contrat exécutable, allowlist opposable, worktree d’exécution.

## Modèle de données

### ActionCandidate

- `actionCandidateId`, `sessionId`, `status`, `title`, `objective`, `scopeSummary`, `riskSummary`, `version`, `createdAt`, `updatedAt`

### Statuts candidat (sans exécution)

`PROPOSED` · `UNDER_REVIEW` · `APPROVED` · `REJECTED` · `CHANGES_REQUESTED` · `ABANDONED` · `NOT_REQUIRED`

### GateDecision

- `gateDecisionId`, `sessionId`, `actionCandidateId`, `actionVersion`, `kind`, `motif`, `createdAt`
- Kinds : `GO` · `NO_GO` · `CORRIGER` · `ABANDONNER`

### SessionQualification

- `sessionId`, `qualification` (`ACTION_REQUIRED` | `ACTION_NOT_REQUIRED`), `updatedAt`

### Événements audit

`ACTION_QUALIFIED_NOT_REQUIRED` · `ACTION_CANDIDATE_CREATED` · `ACTION_CANDIDATE_REFINED` · `GATE_DECISION_RECORDED` · `EXECUTION_REFUSED`

## Transitions d’état

| Action | Effet statut candidat | Session |
|---|---|---|
| qualify NOT_REQUIRED | (pas de candidat) | OPEN |
| create fixture candidate | PROPOSED + qualif ACTION_REQUIRED | OPEN |
| refine | version+1, UNDER_REVIEW | OPEN |
| GO | APPROVED | OPEN |
| NO_GO | REJECTED | OPEN |
| CORRIGER | CHANGES_REQUESTED | OPEN |
| ABANDONNER | ABANDONED | OPEN |
| refuse execution | event EXECUTION_REFUSED | OPEN |

Après GO, seul `CORRIGER` peut rouvrir le raffinement. Raffiner après GO sans CORRIGER → refus CONFLICT.

## Règles ACTION_NOT_REQUIRED

- Fixture explicite via CTA `ACTION_NOT_REQUIRED`
- Persiste dans `session_qualifications`
- N’invente pas d’ActionCandidate
- Session reste OPEN
- Chat reste utilisable

## Règles des quatre gates

1. **GO** — valide ; microcopy no-exec ; pas d’effet exécution
2. **NO_GO** — refuse ; session OPEN
3. **CORRIGER** — journalise motif ; statut CHANGES_REQUESTED ; pas d’exécution
4. **ABANDONNER** — abandonne la proposition ; ne ferme pas la session

Fail-closed : message chat « GO » ≠ décision ; seule interaction gate crée une décision ; IDs validés ; tentative exécution → refus + event.

## Garde-fous no-execution

- Aucun CTA « Exécuter » / « Lancer Cursor »
- `ops1RefuseExecutionAction` / `refuseExecutionAttempt` toujours refuse
- Pas de runner, worktree, allowlist, hash I4
- Mot « GO » dans le chat ne change pas le statut candidat

## Fichiers créés

| Fichier | Justification |
|---|---|
| `projects/sfia-studio/app/lib/ops1/actionGate.ts` | Domaine persist-only I3 |
| `projects/sfia-studio/app/__tests__/ops1/actionGate.test.ts` | Tests unitaires/intégration I3 |
| `projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts` | E2E fixture I3 + captures |

## Fichiers modifiés

| Fichier | Justification |
|---|---|
| `types.ts` | Types + microcopy I3 + events |
| `ids.ts` | IDs action/gate |
| `db.ts` | Schéma SQLite I3 |
| `validation.ts` | Asserts action/gate |
| `actions.ts` | Server actions I3 + getSession enrichi |
| `index.ts` | Exports |
| `Ops1SessionScreen.tsx` | UI conversation / action / gate |
| `ops1-session.module.css` | Styles panneaux I3 |
| `Ops1SessionScreen.test.tsx` | Mocks I3 |
| `globalModeBadge.ui.test.tsx` | Mocks I3 |

## Fichiers supprimés

Aucun.

## Contenu complet — fichiers créés

### actionGate.ts

```typescript
import type { DatabaseSync } from "node:sqlite";
import {
  createActionCandidateId,
  createEventId,
  createGateDecisionId,
} from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import {
  OPS1_I3_GO_MICROCOPY,
  type ActionCandidate,
  type ActionCandidateStatus,
  type ActionQualification,
  type GateDecision,
  type GateDecisionKind,
  type SessionEvent,
  type SessionEventType,
  type SessionQualification,
} from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
  createdAt = nowIsoWithOffset(),
): SessionEvent {
  const eventId = createEventId();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

function requireOpenSession(db: DatabaseSync, sessionId: string): void {
  const row = db
    .prepare(
      `SELECT status FROM cycle_sessions WHERE session_id = ?`,
    )
    .get(sessionId) as { status: string } | undefined;
  if (!row) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (row.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’est pas OPEN — I3 n’autorise pas CLOSED.",
    );
  }
}

function mapCandidate(row: Record<string, unknown>): ActionCandidate {
  return {
    actionCandidateId: String(row.action_candidate_id),
    sessionId: String(row.session_id),
    status: row.status as ActionCandidateStatus,
    title: String(row.title),
    objective: String(row.objective),
    scopeSummary: String(row.scope_summary),
    riskSummary: String(row.risk_summary),
    version: Number(row.version),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

function mapGate(row: Record<string, unknown>): GateDecision {
  return {
    gateDecisionId: String(row.gate_decision_id),
    sessionId: String(row.session_id),
    actionCandidateId: String(row.action_candidate_id),
    actionVersion: Number(row.action_version),
    kind: row.kind as GateDecisionKind,
    motif: row.motif == null ? null : String(row.motif),
    createdAt: String(row.created_at),
  };
}

export function getSessionQualification(
  sessionId: string,
  db = openOps1Db(),
): SessionQualification | null {
  const row = db
    .prepare(
      `SELECT session_id, qualification, updated_at
       FROM session_qualifications WHERE session_id = ?`,
    )
    .get(sessionId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    sessionId: String(row.session_id),
    qualification: row.qualification as ActionQualification,
    updatedAt: String(row.updated_at),
  };
}

export function listActionCandidates(
  sessionId: string,
  db = openOps1Db(),
): ActionCandidate[] {
  const rows = db
    .prepare(
      `SELECT * FROM action_candidates
       WHERE session_id = ?
       ORDER BY created_at ASC`,
    )
    .all(sessionId) as Array<Record<string, unknown>>;
  return rows.map(mapCandidate);
}

export function getActionCandidate(
  actionCandidateId: string,
  db = openOps1Db(),
): ActionCandidate | null {
  const row = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  return row ? mapCandidate(row) : null;
}

export function listGateDecisionsForAction(
  actionCandidateId: string,
  db = openOps1Db(),
): GateDecision[] {
  const rows = db
    .prepare(
      `SELECT * FROM gate_decisions
       WHERE action_candidate_id = ?
       ORDER BY created_at ASC`,
    )
    .all(actionCandidateId) as Array<Record<string, unknown>>;
  return rows.map(mapGate);
}

export function getLatestGateDecision(
  actionCandidateId: string,
  actionVersion?: number,
  db = openOps1Db(),
): GateDecision | null {
  if (actionVersion != null) {
    const row = db
      .prepare(
        `SELECT * FROM gate_decisions
         WHERE action_candidate_id = ? AND action_version = ?
         ORDER BY created_at DESC LIMIT 1`,
      )
      .get(actionCandidateId, actionVersion) as
      | Record<string, unknown>
      | undefined;
    return row ? mapGate(row) : null;
  }
  const row = db
    .prepare(
      `SELECT * FROM gate_decisions
       WHERE action_candidate_id = ?
       ORDER BY created_at DESC LIMIT 1`,
    )
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  return row ? mapGate(row) : null;
}

export function qualifyActionNotRequired(
  sessionId: string,
  db = openOps1Db(),
): { qualification: SessionQualification; event: SessionEvent } {
  requireOpenSession(db, sessionId);
  const now = nowIsoWithOffset();
  db.prepare(
    `INSERT INTO session_qualifications (session_id, qualification, updated_at)
     VALUES (?, 'ACTION_NOT_REQUIRED', ?)
     ON CONFLICT(session_id) DO UPDATE SET
       qualification = excluded.qualification,
       updated_at = excluded.updated_at`,
  ).run(sessionId, now);
  const event = insertEvent(
    db,
    sessionId,
    "ACTION_QUALIFIED_NOT_REQUIRED",
    "qualification=ACTION_NOT_REQUIRED",
    now,
  );
  return {
    qualification: {
      sessionId,
      qualification: "ACTION_NOT_REQUIRED",
      updatedAt: now,
    },
    event,
  };
}

const FIXTURE_DEFAULT = {
  title: "Proposition fixture OPS1 I3",
  objective:
    "Valider une proposition d’action structurée hors chat, sans exécution.",
  scopeSummary:
    "Périmètre documentaire simulé — allowlist exécutable reportée à I4.",
  riskSummary:
    "Aucun effet Cursor/Git/filesystem. GO = validation uniquement.",
};

export function createFixtureActionCandidate(
  sessionId: string,
  overrides?: Partial<
    Pick<ActionCandidate, "title" | "objective" | "scopeSummary" | "riskSummary">
  >,
  db = openOps1Db(),
): { candidate: ActionCandidate; event: SessionEvent } {
  requireOpenSession(db, sessionId);
  const now = nowIsoWithOffset();
  const actionCandidateId = createActionCandidateId();
  const title = overrides?.title?.trim() || FIXTURE_DEFAULT.title;
  const objective = overrides?.objective?.trim() || FIXTURE_DEFAULT.objective;
  const scopeSummary =
    overrides?.scopeSummary?.trim() || FIXTURE_DEFAULT.scopeSummary;
  const riskSummary =
    overrides?.riskSummary?.trim() || FIXTURE_DEFAULT.riskSummary;

  db.prepare(
    `INSERT INTO session_qualifications (session_id, qualification, updated_at)
     VALUES (?, 'ACTION_REQUIRED', ?)
     ON CONFLICT(session_id) DO UPDATE SET
       qualification = excluded.qualification,
       updated_at = excluded.updated_at`,
  ).run(sessionId, now);

  db.prepare(
    `INSERT INTO action_candidates (
      action_candidate_id, session_id, status, title, objective,
      scope_summary, risk_summary, version, created_at, updated_at
    ) VALUES (?, ?, 'PROPOSED', ?, ?, ?, ?, 1, ?, ?)`,
  ).run(
    actionCandidateId,
    sessionId,
    title,
    objective,
    scopeSummary,
    riskSummary,
    now,
    now,
  );

  const event = insertEvent(
    db,
    sessionId,
    "ACTION_CANDIDATE_CREATED",
    `actionCandidateId=${actionCandidateId};version=1;status=PROPOSED`,
    now,
  );

  const candidate = getActionCandidate(actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("PERSISTENCE", "ActionCandidate non relisible.");
  }
  return { candidate, event };
}

export function refineActionCandidate(
  input: {
    sessionId: string;
    actionCandidateId: string;
    title: string;
    objective: string;
    scopeSummary: string;
    riskSummary: string;
  },
  db = openOps1Db(),
): { candidate: ActionCandidate; event: SessionEvent } {
  requireOpenSession(db, input.sessionId);
  const existing = getActionCandidate(input.actionCandidateId, db);
  if (!existing || existing.sessionId !== input.sessionId) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (
    existing.status === "ABANDONED" ||
    existing.status === "REJECTED" ||
    existing.status === "NOT_REQUIRED"
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "Ce candidat ne peut plus être raffiné dans cet état.",
    );
  }
  if (existing.status === "APPROVED") {
    throw new Ops1Error(
      "CONFLICT",
      "Candidat déjà validé (GO). Utilisez CORRIGER pour rouvrir le raffinement.",
    );
  }

  const now = nowIsoWithOffset();
  const nextVersion = existing.version + 1;
  const title = input.title.trim();
  const objective = input.objective.trim();
  const scopeSummary = input.scopeSummary.trim();
  const riskSummary = input.riskSummary.trim();
  if (!title || !objective || !scopeSummary || !riskSummary) {
    throw new Ops1Error("VALIDATION", "Tous les champs action sont requis.");
  }

  db.prepare(
    `UPDATE action_candidates
     SET title = ?, objective = ?, scope_summary = ?, risk_summary = ?,
         version = ?, status = 'UNDER_REVIEW', updated_at = ?
     WHERE action_candidate_id = ?`,
  ).run(
    title,
    objective,
    scopeSummary,
    riskSummary,
    nextVersion,
    now,
    input.actionCandidateId,
  );

  const event = insertEvent(
    db,
    input.sessionId,
    "ACTION_CANDIDATE_REFINED",
    `actionCandidateId=${input.actionCandidateId};version=${nextVersion}`,
    now,
  );

  const candidate = getActionCandidate(input.actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("PERSISTENCE", "ActionCandidate non relisible.");
  }
  return { candidate, event };
}

function statusAfterGate(kind: GateDecisionKind): ActionCandidateStatus {
  switch (kind) {
    case "GO":
      return "APPROVED";
    case "NO_GO":
      return "REJECTED";
    case "CORRIGER":
      return "CHANGES_REQUESTED";
    case "ABANDONNER":
      return "ABANDONED";
  }
}

export function recordGateDecision(
  input: {
    sessionId: string;
    actionCandidateId: string;
    kind: GateDecisionKind;
    motif?: string | null;
  },
  db = openOps1Db(),
): {
  decision: GateDecision;
  candidate: ActionCandidate;
  event: SessionEvent;
  microcopy: string | null;
} {
  requireOpenSession(db, input.sessionId);
  const existing = getActionCandidate(input.actionCandidateId, db);
  if (!existing || existing.sessionId !== input.sessionId) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (
    existing.status === "ABANDONED" ||
    existing.status === "REJECTED" ||
    existing.status === "NOT_REQUIRED"
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "Aucune décision de gate possible sur ce candidat.",
    );
  }
  if (existing.status === "APPROVED" && input.kind !== "CORRIGER") {
    throw new Ops1Error(
      "CONFLICT",
      "Candidat déjà validé — seul CORRIGER peut rouvrir le raffinement.",
    );
  }
  if (
    (existing.status === "PROPOSED" ||
      existing.status === "UNDER_REVIEW" ||
      existing.status === "CHANGES_REQUESTED") &&
    input.kind === "CORRIGER"
  ) {
    // CORRIGER is allowed from review states to explicitly request changes
  }

  const now = nowIsoWithOffset();
  const gateDecisionId = createGateDecisionId();
  const nextStatus = statusAfterGate(input.kind);
  const motif = input.motif?.trim() || null;

  db.prepare(
    `INSERT INTO gate_decisions (
      gate_decision_id, session_id, action_candidate_id, action_version,
      kind, motif, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    gateDecisionId,
    input.sessionId,
    input.actionCandidateId,
    existing.version,
    input.kind,
    motif,
    now,
  );

  db.prepare(
    `UPDATE action_candidates
     SET status = ?, updated_at = ?
     WHERE action_candidate_id = ?`,
  ).run(nextStatus, now, input.actionCandidateId);

  const event = insertEvent(
    db,
    input.sessionId,
    "GATE_DECISION_RECORDED",
    `gateDecisionId=${gateDecisionId};kind=${input.kind};actionVersion=${existing.version};status=${nextStatus}`,
    now,
  );

  const decision = getLatestGateDecision(
    input.actionCandidateId,
    existing.version,
    db,
  );
  const candidate = getActionCandidate(input.actionCandidateId, db);
  if (!decision || !candidate) {
    throw new Ops1Error("PERSISTENCE", "Décision gate non relisible.");
  }

  return {
    decision,
    candidate,
    event,
    microcopy: input.kind === "GO" ? OPS1_I3_GO_MICROCOPY : null,
  };
}

/**
 * Fail-closed: I3 never executes. Always records EXECUTION_REFUSED.
 */
export function refuseExecutionAttempt(
  sessionId: string,
  reason = "I3 — aucune exécution autorisée",
  db = openOps1Db(),
): SessionEvent {
  requireOpenSession(db, sessionId);
  return insertEvent(
    db,
    sessionId,
    "EXECUTION_REFUSED",
    reason,
  );
}

export function getI3Bundle(
  sessionId: string,
  db = openOps1Db(),
): {
  qualification: SessionQualification | null;
  candidates: ActionCandidate[];
  latestDecisionsByAction: Record<string, GateDecision | null>;
} {
  const candidates = listActionCandidates(sessionId, db);
  const latestDecisionsByAction: Record<string, GateDecision | null> = {};
  for (const c of candidates) {
    latestDecisionsByAction[c.actionCandidateId] = getLatestGateDecision(
      c.actionCandidateId,
      c.version,
      db,
    );
  }
  return {
    qualification: getSessionQualification(sessionId, db),
    candidates,
    latestDecisionsByAction,
  };
}

\`\`\`

### actionGate.test.ts

\`\`\`typescript
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createOpenSession, resetOps1DbForTests } from "@/lib/ops1/repository";
import { openOps1Db } from "@/lib/ops1/db";
import { Ops1Error } from "@/lib/ops1/errors";
import {
  createFixtureActionCandidate,
  getI3Bundle,
  qualifyActionNotRequired,
  recordGateDecision,
  refineActionCandidate,
  refuseExecutionAttempt,
} from "@/lib/ops1/actionGate";
import { OPS1_I3_GO_MICROCOPY } from "@/lib/ops1/types";
import {
  assertActionCandidateId,
  assertGateDecisionKind,
} from "@/lib/ops1/validation";
import { createActionCandidateId, createGateDecisionId } from "@/lib/ops1/ids";

describe("ops1 I3 action gate domain", () => {
  let tmpRoot: string;

  beforeEach(() => {
    resetOps1DbForTests();
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i3-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("creates action and gate ids", () => {
    expect(createActionCandidateId()).toMatch(/^ops1-act-/);
    expect(createGateDecisionId()).toMatch(/^ops1-gate-/);
    expect(assertActionCandidateId(createActionCandidateId())).toMatch(
      /^ops1-act-/,
    );
    expect(assertGateDecisionKind("GO")).toBe("GO");
    expect(() => assertGateDecisionKind("EXECUTE")).toThrow(Ops1Error);
  });

  it("qualifies ACTION_NOT_REQUIRED and keeps session OPEN", () => {
    const { session } = createOpenSession();
    const { qualification } = qualifyActionNotRequired(session.sessionId);
    expect(qualification.qualification).toBe("ACTION_NOT_REQUIRED");
    const bundle = getI3Bundle(session.sessionId);
    expect(bundle.qualification?.qualification).toBe("ACTION_NOT_REQUIRED");
    expect(bundle.candidates).toHaveLength(0);
    const status = openOps1Db()
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(session.sessionId) as { status: string };
    expect(status.status).toBe("OPEN");
  });

  it("creates ActionCandidate distinct from chat and persists", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    expect(candidate.status).toBe("PROPOSED");
    expect(candidate.version).toBe(1);
    expect(candidate.title).toContain("fixture");
    const reloaded = getI3Bundle(session.sessionId);
    expect(reloaded.candidates).toHaveLength(1);
    expect(reloaded.candidates[0].actionCandidateId).toBe(
      candidate.actionCandidateId,
    );
    expect(reloaded.qualification?.qualification).toBe("ACTION_REQUIRED");
  });

  it("refines candidate and bumps version", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const refined = refineActionCandidate({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      title: "Titre raffiné",
      objective: "Objectif raffiné",
      scopeSummary: "Scope raffiné",
      riskSummary: "Risque raffiné",
    });
    expect(refined.candidate.version).toBe(2);
    expect(refined.candidate.status).toBe("UNDER_REVIEW");
    expect(refined.candidate.title).toBe("Titre raffiné");
  });

  it("records GO without execution side effects", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const result = recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    expect(result.candidate.status).toBe("APPROVED");
    expect(result.decision.kind).toBe("GO");
    expect(result.microcopy).toBe(OPS1_I3_GO_MICROCOPY);
    expect(result.decision.actionVersion).toBe(1);
    const status = openOps1Db()
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(session.sessionId) as { status: string };
    expect(status.status).toBe("OPEN");
  });

  it("records NO_GO, CORRIGER, ABANDONNER", () => {
    const { session: s1 } = createOpenSession();
    const c1 = createFixtureActionCandidate(s1.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s1.sessionId,
        actionCandidateId: c1.actionCandidateId,
        kind: "NO_GO",
      }).candidate.status,
    ).toBe("REJECTED");

    const { session: s2 } = createOpenSession();
    const c2 = createFixtureActionCandidate(s2.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s2.sessionId,
        actionCandidateId: c2.actionCandidateId,
        kind: "CORRIGER",
        motif: "à corriger",
      }).candidate.status,
    ).toBe("CHANGES_REQUESTED");

    const { session: s3 } = createOpenSession();
    const c3 = createFixtureActionCandidate(s3.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s3.sessionId,
        actionCandidateId: c3.actionCandidateId,
        kind: "ABANDONNER",
      }).candidate.status,
    ).toBe("ABANDONED");
  });

  it("GO then CORRIGER reopens refinement; refine bumps version", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "CORRIGER",
      motif: "reopen",
    });
    const refined = refineActionCandidate({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      title: "v2",
      objective: "obj",
      scopeSummary: "scope",
      riskSummary: "risk",
    });
    expect(refined.candidate.version).toBe(2);
    expect(refined.candidate.status).toBe("UNDER_REVIEW");
  });

  it("isolates candidates between sessions", () => {
    const a = createOpenSession().session;
    const b = createOpenSession().session;
    createFixtureActionCandidate(a.sessionId);
    createFixtureActionCandidate(b.sessionId);
    expect(getI3Bundle(a.sessionId).candidates).toHaveLength(1);
    expect(getI3Bundle(b.sessionId).candidates).toHaveLength(1);
    expect(getI3Bundle(a.sessionId).candidates[0].sessionId).toBe(a.sessionId);
  });

  it("refuses execution and records EXECUTION_REFUSED", () => {
    const { session } = createOpenSession();
    const event = refuseExecutionAttempt(session.sessionId);
    expect(event.type).toBe("EXECUTION_REFUSED");
    const row = openOps1Db()
      .prepare(
        `SELECT type FROM session_events WHERE session_id = ? AND type = ?`,
      )
      .get(session.sessionId, "EXECUTION_REFUSED") as { type: string };
    expect(row.type).toBe("EXECUTION_REFUSED");
  });

  it("blocks refine after GO until CORRIGER", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    expect(() =>
      refineActionCandidate({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        title: "x",
        objective: "y",
        scopeSummary: "z",
        riskSummary: "r",
      }),
    ).toThrow(Ops1Error);
  });
});

\`\`\`

### ops1-i3-action-gate.spec.ts

\`\`\`typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i3",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function createFixtureSession(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
}

test.describe("OPS1 I3 action gate — fixture first / no execution", () => {
  test("ACTION_NOT_REQUIRED after conversation", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-message-input").fill("Besoin d’info seulement");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-i3-qualify-not-required").click();
    await expect(page.getByTestId("ops1-i3-qualification")).toHaveAttribute(
      "data-qualification",
      "ACTION_NOT_REQUIRED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByTestId("ops1-action-panel")).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "01-action-not-required.png"),
      fullPage: true,
    });
  });

  test("ActionCandidate outside chat + four gates + refine + GO + reload", async ({
    page,
  }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-message-input").fill("Proposition à structurer");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-i3-create-candidate").click();
    await expect(page.getByTestId("ops1-action-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON AUTORISÉE",
    );
    await expect(page.getByTestId("ops1-go-ne-exec")).toContainText(
      "GO ≠ exécution",
    );
    await expect(page.getByTestId("ops1-gate-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-go")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-no-go")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-corriger")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-abandonner")).toBeVisible();

    // Chat GO does not create gate decision
    await page.getByTestId("ops1-message-input").fill("GO");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-gate-no-decision")).toBeVisible();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON AUTORISÉE",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "02-candidate-proposed-unauthorized.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "03-gate-four-actions.png"),
      fullPage: true,
    });

    // Refine
    await page.getByTestId("ops1-action-title-input").fill("Titre raffiné I3");
    await page
      .getByTestId("ops1-action-objective-input")
      .fill("Objectif raffiné I3");
    await page.getByTestId("ops1-action-scope-input").fill("Périmètre raffiné");
    await page.getByTestId("ops1-action-risk-input").fill("Risques raffinés");
    await page.getByTestId("ops1-action-refine-submit").click();
    await expect(page.getByTestId("ops1-action-version")).toHaveText("2");
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "UNDER_REVIEW",
    );

    // GO
    await page.getByTestId("ops1-gate-go").click();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON EXÉCUTÉE",
    );
    await expect(page.getByTestId("ops1-gate-go-microcopy")).toContainText(
      "Aucune exécution n’est lancée dans I3",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByRole("button", { name: /^Exécuter$/i })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("button", { name: /Lancer Cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "04-go-validated-not-executed.png"),
      fullPage: true,
    });

    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    const actionId = await page.getByTestId("ops1-action-id").innerText();

    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-action-id")).toHaveText(actionId);
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON EXÉCUTÉE",
    );
    await expect(page.getByTestId("ops1-gate-latest-decision")).toHaveAttribute(
      "data-kind",
      "GO",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "05-after-reload.png"),
      fullPage: true,
    });

    // CORRIGER returns to refinement
    await page.getByTestId("ops1-gate-corriger").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "CHANGES_REQUESTED",
    );
    await expect(page.getByTestId("ops1-action-refine")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "06-corriger-refinement.png"),
      fullPage: true,
    });
  });

  test("NO_GO keeps session OPEN", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-create-candidate").click();
    await page.getByTestId("ops1-gate-no-go").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "REJECTED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByTestId("ops1-gate-panel")).toHaveCount(0);
  });

  test("ABANDONNER keeps session OPEN", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-create-candidate").click();
    await page.getByTestId("ops1-gate-abandonner").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "ABANDONED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
  });

  test("execution attempt is refused", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-refuse-execution").click();
    await expect(page.getByTestId("ops1-i3-execution-refused")).toContainText(
      "Exécution refusée",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
  });
});

\`\`\`

## Diff utile complet — fichiers modifiés

\`\`\`diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
index 579223e..c4cbc53 100644
--- a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -14,8 +14,19 @@ vi.mock("@/lib/ops1/actions", () => ({
   ops1SendMessageAction: (...args: unknown[]) => send(...args),
   ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
   ops1AppendUserMessageAction: vi.fn(),
+  ops1QualifyActionNotRequiredAction: vi.fn(),
+  ops1CreateFixtureActionCandidateAction: vi.fn(),
+  ops1RefineActionCandidateAction: vi.fn(),
+  ops1RecordGateDecisionAction: vi.fn(),
+  ops1RefuseExecutionAction: vi.fn(),
 }));

+const emptyI3 = {
+  qualification: null,
+  candidates: [] as unknown[],
+  latestDecisionsByAction: {} as Record<string, null>,
+};
+
 const fixtureSession = {
   sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
   projectKey: "sfia-studio-ops1",
@@ -69,6 +80,7 @@ describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
         turns: [],
         attempts: [],
         presentation: "fixture",
+        ...emptyI3,
       },
     });
     render(<Ops1SessionScreen />);
@@ -117,6 +129,7 @@ describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
         ],
         attempts: [],
         presentation: "test_provider",
+        ...emptyI3,
       },
     });
     window.sessionStorage.setItem(
@@ -157,6 +170,7 @@ describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
         ],
         attempts: [],
         presentation: "openai_live",
+        ...emptyI3,
       },
     });
     window.sessionStorage.setItem(
diff --git a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
index 97db07a..26b126a 100644
--- a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
@@ -18,6 +18,11 @@ vi.mock("@/lib/ops1/actions", () => ({
   ops1SendMessageAction: (...args: unknown[]) => send(...args),
   ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
   ops1AppendUserMessageAction: vi.fn(),
+  ops1QualifyActionNotRequiredAction: vi.fn(),
+  ops1CreateFixtureActionCandidateAction: vi.fn(),
+  ops1RefineActionCandidateAction: vi.fn(),
+  ops1RecordGateDecisionAction: vi.fn(),
+  ops1RefuseExecutionAction: vi.fn(),
 }));

 const fixtureSession = {
@@ -66,6 +71,9 @@ describe("global mode badge on nouvelle-demande shell", () => {
         turns: [],
         attempts: [],
         presentation: "fixture",
+        qualification: null,
+        candidates: [],
+        latestDecisionsByAction: {},
       },
     });
     render(<NouvelleDemandePageClient />);
@@ -100,6 +108,9 @@ describe("global mode badge on nouvelle-demande shell", () => {
         turns: [],
         attempts: [],
         presentation: "test_provider",
+        qualification: null,
+        candidates: [],
+        latestDecisionsByAction: {},
       },
     });
     window.sessionStorage.setItem(
@@ -131,6 +142,9 @@ describe("global mode badge on nouvelle-demande shell", () => {
         turns: [],
         attempts: [],
         presentation: "openai_live",
+        qualification: null,
+        candidates: [],
+        latestDecisionsByAction: {},
       },
     });
     window.sessionStorage.setItem(
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index 8189cbf..74d4d47 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -4,19 +4,34 @@ import { useCallback, useEffect, useState, useTransition } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
+  ops1CreateFixtureActionCandidateAction,
   ops1CreateSessionAction,
   ops1GetLiveConfigAction,
   ops1GetSessionAction,
+  ops1QualifyActionNotRequiredAction,
+  ops1RecordGateDecisionAction,
+  ops1RefineActionCandidateAction,
+  ops1RefuseExecutionAction,
   ops1SendMessageAction,
 } from "@/lib/ops1/actions";
 import type {
+  ActionCandidate,
   ConversationMode,
   ConversationUsageCounters,
   CycleSession,
+  GateDecision,
+  GateDecisionKind,
   JournalTurn,
   ProviderPresentation,
+  SessionQualification,
+} from "@/lib/ops1/types";
+import {
+  OPS1_I3_GO_MICROCOPY,
+  OPS1_I3_GO_NE_PAS_EXEC,
+  OPS1_I3_STATUS_UNAUTHORIZED,
+  OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED,
+  OPS1_MAX_MESSAGE_CHARS,
 } from "@/lib/ops1/types";
-import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
 import type { GlobalModeContext } from "@/lib/ops1/globalModeBadge";
 import styles from "./ops1-session.module.css";

@@ -41,6 +56,37 @@ function roleLabel(
   return "Assistant live";
 }

+function actionStatusLabel(
+  candidate: ActionCandidate,
+  decision: GateDecision | null,
+): string {
+  if (candidate.status === "APPROVED" || decision?.kind === "GO") {
+    return OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED;
+  }
+  if (candidate.status === "NOT_REQUIRED") {
+    return "ACTION NON REQUISE";
+  }
+  if (candidate.status === "REJECTED") {
+    return "ACTION REFUSÉE (NO_GO)";
+  }
+  if (candidate.status === "ABANDONED") {
+    return "ACTION ABANDONNÉE";
+  }
+  if (candidate.status === "CHANGES_REQUESTED") {
+    return "CORRECTIONS DEMANDÉES";
+  }
+  return OPS1_I3_STATUS_UNAUTHORIZED;
+}
+
+function gateAvailable(candidate: ActionCandidate): boolean {
+  return (
+    candidate.status === "PROPOSED" ||
+    candidate.status === "UNDER_REVIEW" ||
+    candidate.status === "CHANGES_REQUESTED" ||
+    candidate.status === "APPROVED"
+  );
+}
+
 export function Ops1SessionScreen({
   onGlobalModeContextChange,
 }: {
@@ -60,6 +106,20 @@ export function Ops1SessionScreen({
   const [lastUsage, setLastUsage] = useState<ConversationUsageCounters | null>(
     null,
   );
+  const [qualification, setQualification] =
+    useState<SessionQualification | null>(null);
+  const [candidates, setCandidates] = useState<ActionCandidate[]>([]);
+  const [decisionsByAction, setDecisionsByAction] = useState<
+    Record<string, GateDecision | null>
+  >({});
+  const [gateMicrocopy, setGateMicrocopy] = useState<string | null>(null);
+  const [execRefuseMsg, setExecRefuseMsg] = useState<string | null>(null);
+  const [refineDraft, setRefineDraft] = useState({
+    title: "",
+    objective: "",
+    scopeSummary: "",
+    riskSummary: "",
+  });
   const [pending, startTransition] = useTransition();

   useEffect(() => {
@@ -79,24 +139,53 @@ export function Ops1SessionScreen({
     onGlobalModeContextChange,
   ]);

-  const loadBundle = useCallback(async (sessionId: string) => {
-    const result = await ops1GetSessionAction(sessionId);
-    if (!result.ok) {
-      setError(result.message);
-      setSession(null);
-      setTurns([]);
-      setPhase("idle");
-      if (typeof window !== "undefined") {
-        window.sessionStorage.removeItem(STORAGE_KEY);
+  const applyI3 = useCallback(
+    (data: {
+      qualification: SessionQualification | null;
+      candidates: ActionCandidate[];
+      latestDecisionsByAction: Record<string, GateDecision | null>;
+    }) => {
+      setQualification(data.qualification);
+      setCandidates(data.candidates);
+      setDecisionsByAction(data.latestDecisionsByAction);
+      const latest = data.candidates[data.candidates.length - 1];
+      if (latest) {
+        setRefineDraft({
+          title: latest.title,
+          objective: latest.objective,
+          scopeSummary: latest.scopeSummary,
+          riskSummary: latest.riskSummary,
+        });
       }
-      return;
-    }
-    setSession(result.data.session);
-    setTurns(result.data.turns);
-    setPresentation(result.data.presentation);
-    setError(null);
-    setPhase("open");
-  }, []);
+    },
+    [],
+  );
+
+  const loadBundle = useCallback(
+    async (sessionId: string) => {
+      const result = await ops1GetSessionAction(sessionId);
+      if (!result.ok) {
+        setError(result.message);
+        setSession(null);
+        setTurns([]);
+        setQualification(null);
+        setCandidates([]);
+        setDecisionsByAction({});
+        setPhase("idle");
+        if (typeof window !== "undefined") {
+          window.sessionStorage.removeItem(STORAGE_KEY);
+        }
+        return;
+      }
+      setSession(result.data.session);
+      setTurns(result.data.turns);
+      setPresentation(result.data.presentation);
+      applyI3(result.data);
+      setError(null);
+      setPhase("open");
+    },
+    [applyI3],
+  );

   useEffect(() => {
     let cancelled = false;
@@ -132,6 +221,11 @@ export function Ops1SessionScreen({
     }
     setError(null);
     setLastUsage(null);
+    setGateMicrocopy(null);
+    setExecRefuseMsg(null);
+    setQualification(null);
+    setCandidates([]);
+    setDecisionsByAction({});
     setPhase("creating");
     startTransition(async () => {
       const result = await ops1CreateSessionAction({ mode: createMode });
@@ -190,25 +284,142 @@ export function Ops1SessionScreen({
     setError(null);
     setLastUsage(null);
     setPresentation("fixture");
+    setQualification(null);
+    setCandidates([]);
+    setDecisionsByAction({});
+    setGateMicrocopy(null);
+    setExecRefuseMsg(null);
     setPhase("idle");
   };

+  const onQualifyNotRequired = () => {
+    if (!session) return;
+    setError(null);
+    startTransition(async () => {
+      const result = await ops1QualifyActionNotRequiredAction({
+        sessionId: session.sessionId,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setGateMicrocopy(null);
+      await loadBundle(session.sessionId);
+    });
+  };
+
+  const onCreateCandidate = () => {
+    if (!session) return;
+    setError(null);
+    startTransition(async () => {
+      const result = await ops1CreateFixtureActionCandidateAction({
+        sessionId: session.sessionId,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setGateMicrocopy(null);
+      await loadBundle(session.sessionId);
+    });
+  };
+
+  const onRefine = () => {
+    if (!session) return;
+    const candidate = candidates[candidates.length - 1];
+    if (!candidate) return;
+    setError(null);
+    startTransition(async () => {
+      const result = await ops1RefineActionCandidateAction({
+        sessionId: session.sessionId,
+        actionCandidateId: candidate.actionCandidateId,
+        ...refineDraft,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setGateMicrocopy(null);
+      await loadBundle(session.sessionId);
+    });
+  };
+
+  const onGate = (kind: GateDecisionKind) => {
+    if (!session) return;
+    const candidate = candidates[candidates.length - 1];
+    if (!candidate) return;
+    setError(null);
+    startTransition(async () => {
+      const result = await ops1RecordGateDecisionAction({
+        sessionId: session.sessionId,
+        actionCandidateId: candidate.actionCandidateId,
+        kind,
+        motif:
+          kind === "CORRIGER"
+            ? "Corrections demandées par Morris"
+            : kind === "NO_GO"
+              ? "Proposition refusée"
+              : kind === "ABANDONNER"
+                ? "Proposition abandonnée"
+                : null,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setGateMicrocopy(result.data.microcopy);
+      await loadBundle(session.sessionId);
+    });
+  };
+
+  const onRefuseExecution = () => {
+    if (!session) return;
+    setError(null);
+    startTransition(async () => {
+      const result = await ops1RefuseExecutionAction({
+        sessionId: session.sessionId,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setExecRefuseMsg(result.data.message);
+    });
+  };
+
   const lockedMode = session?.conversationMode;
   const isFixtureSession = lockedMode === "fixture";
   const isLiveSession = lockedMode === "live";
   const isTestPresentation = presentation === "test_provider";
   const isOpenAiLive = presentation === "openai_live";
+  const activeCandidate = candidates[candidates.length - 1] ?? null;
+  const activeDecision = activeCandidate
+    ? (decisionsByAction[activeCandidate.actionCandidateId] ?? null)
+    : null;
+  const canRefine =
+    activeCandidate &&
+    (activeCandidate.status === "PROPOSED" ||
+      activeCandidate.status === "UNDER_REVIEW" ||
+      activeCandidate.status === "CHANGES_REQUESTED");
+  const canGate = activeCandidate && gateAvailable(activeCandidate);
+  const showGoButtons =
+    activeCandidate &&
+    (activeCandidate.status === "PROPOSED" ||
+      activeCandidate.status === "UNDER_REVIEW" ||
+      activeCandidate.status === "CHANGES_REQUESTED");
+  const showCorrigerOnly =
+    activeCandidate && activeCandidate.status === "APPROVED";

   return (
     <div className={styles.root} data-testid="ops1-session-root">
       <header className={styles.header}>
-        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I2</p>
+        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I3</p>
         <h2 className={styles.title} id="ops1-session-heading">
           Session OPS1
         </h2>
         <p className={styles.lede}>
-          Conversation multi-tours. Le mode est choisi à la création puis
-          verrouillé. Aucune exécution, aucun gate, aucun Cursor depuis le chat.
+          Conversation, proposition d’action et gate Morris — sans exécution.
+          GO valide la proposition pour préparer I4 ; GO ≠ exécution.
         </p>
         <div className={styles.badgeRow} aria-live="polite">
           {!session ? (
@@ -258,7 +469,11 @@ export function Ops1SessionScreen({
               <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
             </span>
           ) : null}
-          {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
+          {session ? (
+            <span data-testid="ops1-badge-session-open">
+              <StatusPill tone="green">OPEN</StatusPill>
+            </span>
+          ) : null}
         </div>
       </header>

@@ -355,225 +570,538 @@ export function Ops1SessionScreen({
       ) : null}

       {session ? (
-        <section
-          className={styles.panel}
-          data-testid="ops1-open-session"
-          aria-labelledby="ops1-open-title"
-        >
-          <h2 id="ops1-open-title" className={styles.panelTitle}>
-            Session ouverte
-          </h2>
-          <dl className={styles.meta}>
-            <div>
-              <dt>sessionId</dt>
-              <dd data-testid="ops1-session-id">{session.sessionId}</dd>
-            </div>
-            <div>
-              <dt>Statut</dt>
-              <dd data-testid="ops1-session-status">{session.status}</dd>
-            </div>
-            <div>
-              <dt>Créée</dt>
-              <dd>{session.createdAt}</dd>
-            </div>
-            <div>
-              <dt>Projet</dt>
-              <dd>{session.projectKey}</dd>
-            </div>
-          </dl>
-
-          <div
-            className={styles.lockedMode}
-            data-testid="ops1-mode-locked"
-            aria-live="polite"
+        <>
+          <section
+            className={styles.panel}
+            data-testid="ops1-open-session"
+            aria-labelledby="ops1-open-title"
           >
-            <p className={styles.lockedModeLabel} data-testid="ops1-mode-label">
-              {session.conversationMode === "fixture"
-                ? "Mode de session : FIXTURE — verrouillé"
-                : isTestPresentation
-                  ? "Mode de session : LIVE TECHNIQUE (TEST) — verrouillé"
-                  : "Mode de session : GPT LIVE — verrouillé"}
-            </p>
-            <p className={styles.hint} data-testid="ops1-mode-lock-hint">
-              Le mode ne peut pas être modifié dans cette session. Créez une
-              nouvelle session pour changer de mode.
-            </p>
-            {/* Radios disabled — non-interactive lock proof for E2E */}
-            <div
-              className={styles.modeRow}
-              role="group"
-              aria-label="Mode de session verrouillé"
-              data-testid="ops1-mode-selector"
-            >
-              <label className={styles.modeOption}>
-                <input
-                  type="radio"
-                  name="ops1-mode-locked"
-                  value="fixture"
-                  checked={session.conversationMode === "fixture"}
-                  disabled
-                  data-testid="ops1-mode-fixture"
-                  readOnly
-                />
-                Fixture / non live
-              </label>
-              <label className={styles.modeOption}>
-                <input
-                  type="radio"
-                  name="ops1-mode-locked"
-                  value="live"
-                  checked={session.conversationMode === "live"}
-                  disabled
-                  data-testid="ops1-mode-live"
-                  readOnly
-                />
-                Live GPT
-              </label>
-            </div>
-          </div>
-
-          {isTestPresentation ? (
-            <p className={styles.warn} data-testid="ops1-test-env-notice">
-              Environnement de test — aucun appel OpenAI.
-            </p>
-          ) : null}
-
-          <div className={styles.journal} data-testid="ops1-journal">
-            <h3 className={styles.journalTitle}>Journal</h3>
-            {turns.length === 0 ? (
-              <p className={styles.muted} data-testid="ops1-journal-empty">
-                Aucun tour pour l’instant.
-              </p>
-            ) : (
-              <ol className={styles.turnList}>
-                {turns.map((turn) => (
-                  <li
-                    key={turn.turnId}
-                    className={
-                      turn.role === "user"
-                        ? styles.turnUser
-                        : styles.turnAssistant
-                    }
-                    data-testid="ops1-turn"
-                    data-role={turn.role}
-                    data-sequence={turn.sequence}
-                    data-fixture={turn.fixture ? "1" : "0"}
-                  >
-                    <div className={styles.turnMeta}>
-                      <span>#{turn.sequence}</span>
-                      <span>{roleLabel(turn.role, presentation)}</span>
-                      {turn.role === "assistant_fixture" ? (
-                        <span className={styles.fixtureTag}>
-                          FIXTURE / NON LIVE
-                        </span>
-                      ) : null}
-                      {turn.role === "assistant_live" &&
-                      isTestPresentation ? (
-                        <span className={styles.testTag}>TEST / FAKE</span>
-                      ) : null}
-                      {turn.role === "assistant_live" && isOpenAiLive ? (
-                        <span className={styles.liveTag}>GPT LIVE</span>
-                      ) : null}
-                    </div>
-                    <p className={styles.turnContent}>{turn.content}</p>
-                  </li>
-                ))}
-              </ol>
-            )}
-          </div>
-
-          {lastUsage ? (
-            <dl className={styles.usage} data-testid="ops1-usage">
+            <h2 id="ops1-open-title" className={styles.panelTitle}>
+              Conversation
+            </h2>
+            <dl className={styles.meta}>
               <div>
-                <dt>Provider</dt>
-                <dd>{lastUsage.provider}</dd>
+                <dt>sessionId</dt>
+                <dd data-testid="ops1-session-id">{session.sessionId}</dd>
               </div>
               <div>
-                <dt>Modèle</dt>
-                <dd>{lastUsage.model ?? "—"}</dd>
+                <dt>Statut</dt>
+                <dd data-testid="ops1-session-status">{session.status}</dd>
               </div>
               <div>
-                <dt>Tokens in/out/total</dt>
-                <dd>
-                  {lastUsage.inputTokens ?? "—"} /{" "}
-                  {lastUsage.outputTokens ?? "—"} /{" "}
-                  {lastUsage.totalTokens ?? "—"}
-                </dd>
+                <dt>Créée</dt>
+                <dd>{session.createdAt}</dd>
               </div>
               <div>
-                <dt>Durée (ms)</dt>
-                <dd>{lastUsage.durationMs ?? "—"}</dd>
+                <dt>Projet</dt>
+                <dd>{session.projectKey}</dd>
               </div>
             </dl>
-          ) : null}

-          {error ? (
-            <p className={styles.error} role="alert" data-testid="ops1-error">
-              {error}
-            </p>
-          ) : null}
+            <div
+              className={styles.lockedMode}
+              data-testid="ops1-mode-locked"
+              aria-live="polite"
+            >
+              <p
+                className={styles.lockedModeLabel}
+                data-testid="ops1-mode-label"
+              >
+                {session.conversationMode === "fixture"
+                  ? "Mode de session : FIXTURE — verrouillé"
+                  : isTestPresentation
+                    ? "Mode de session : LIVE TECHNIQUE (TEST) — verrouillé"
+                    : "Mode de session : GPT LIVE — verrouillé"}
+              </p>
+              <p className={styles.hint} data-testid="ops1-mode-lock-hint">
+                Le mode ne peut pas être modifié dans cette session. Créez une
+                nouvelle session pour changer de mode.
+              </p>
+              <div
+                className={styles.modeRow}
+                role="group"
+                aria-label="Mode de session verrouillé"
+                data-testid="ops1-mode-selector"
+              >
+                <label className={styles.modeOption}>
+                  <input
+                    type="radio"
+                    name="ops1-mode-locked"
+                    value="fixture"
+                    checked={session.conversationMode === "fixture"}
+                    disabled
+                    data-testid="ops1-mode-fixture"
+                    readOnly
+                  />
+                  Fixture / non live
+                </label>
+                <label className={styles.modeOption}>
+                  <input
+                    type="radio"
+                    name="ops1-mode-locked"
+                    value="live"
+                    checked={session.conversationMode === "live"}
+                    disabled
+                    data-testid="ops1-mode-live"
+                    readOnly
+                  />
+                  Live GPT
+                </label>
+              </div>
+            </div>

-          {phase === "sending" ? (
-            <p className={styles.muted} data-testid="ops1-sending">
-              Envoi en cours…
-            </p>
-          ) : null}
+            {isTestPresentation ? (
+              <p className={styles.warn} data-testid="ops1-test-env-notice">
+                Environnement de test — aucun appel OpenAI.
+              </p>
+            ) : null}
+
+            <div className={styles.journal} data-testid="ops1-journal">
+              <h3 className={styles.journalTitle}>Journal</h3>
+              {turns.length === 0 ? (
+                <p className={styles.muted} data-testid="ops1-journal-empty">
+                  Aucun tour pour l’instant.
+                </p>
+              ) : (
+                <ol className={styles.turnList}>
+                  {turns.map((turn) => (
+                    <li
+                      key={turn.turnId}
+                      className={
+                        turn.role === "user"
+                          ? styles.turnUser
+                          : styles.turnAssistant
+                      }
+                      data-testid="ops1-turn"
+                      data-role={turn.role}
+                      data-sequence={turn.sequence}
+                      data-fixture={turn.fixture ? "1" : "0"}
+                    >
+                      <div className={styles.turnMeta}>
+                        <span>#{turn.sequence}</span>
+                        <span>{roleLabel(turn.role, presentation)}</span>
+                        {turn.role === "assistant_fixture" ? (
+                          <span className={styles.fixtureTag}>
+                            FIXTURE / NON LIVE
+                          </span>
+                        ) : null}
+                        {turn.role === "assistant_live" &&
+                        isTestPresentation ? (
+                          <span className={styles.testTag}>TEST / FAKE</span>
+                        ) : null}
+                        {turn.role === "assistant_live" && isOpenAiLive ? (
+                          <span className={styles.liveTag}>GPT LIVE</span>
+                        ) : null}
+                      </div>
+                      <p className={styles.turnContent}>{turn.content}</p>
+                    </li>
+                  ))}
+                </ol>
+              )}
+            </div>

-          <form
-            className={styles.composer}
-            onSubmit={(e) => {
-              e.preventDefault();
-              onSend();
-            }}
+            {lastUsage ? (
+              <dl className={styles.usage} data-testid="ops1-usage">
+                <div>
+                  <dt>Provider</dt>
+                  <dd>{lastUsage.provider}</dd>
+                </div>
+                <div>
+                  <dt>Modèle</dt>
+                  <dd>{lastUsage.model ?? "—"}</dd>
+                </div>
+                <div>
+                  <dt>Tokens in/out/total</dt>
+                  <dd>
+                    {lastUsage.inputTokens ?? "—"} /{" "}
+                    {lastUsage.outputTokens ?? "—"} /{" "}
+                    {lastUsage.totalTokens ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Durée (ms)</dt>
+                  <dd>{lastUsage.durationMs ?? "—"}</dd>
+                </div>
+              </dl>
+            ) : null}
+
+            {error ? (
+              <p className={styles.error} role="alert" data-testid="ops1-error">
+                {error}
+              </p>
+            ) : null}
+
+            {phase === "sending" ? (
+              <p className={styles.muted} data-testid="ops1-sending">
+                Envoi en cours…
+              </p>
+            ) : null}
+
+            <form
+              className={styles.composer}
+              onSubmit={(e) => {
+                e.preventDefault();
+                onSend();
+              }}
+            >
+              <label className={styles.label} htmlFor="ops1-message">
+                Message (
+                {isFixtureSession
+                  ? "fixture locale"
+                  : isTestPresentation
+                    ? "test provider / non live"
+                    : "GPT live serveur"}
+                )
+              </label>
+              <textarea
+                id="ops1-message"
+                className={styles.textarea}
+                data-testid="ops1-message-input"
+                value={draft}
+                maxLength={OPS1_MAX_MESSAGE_CHARS}
+                rows={4}
+                disabled={pending || phase === "sending"}
+                onChange={(e) => setDraft(e.target.value)}
+                placeholder="Saisir un tour utilisateur…"
+              />
+              <div className={styles.composerActions}>
+                <CtaButton
+                  type="submit"
+                  disabled={pending || !draft.trim()}
+                  data-testid="ops1-send-message"
+                >
+                  {isFixtureSession
+                    ? "Envoyer (fixture)"
+                    : isTestPresentation
+                      ? "Envoyer (test provider)"
+                      : "Envoyer (GPT live)"}
+                </CtaButton>
+                <CtaButton
+                  variant="secondary"
+                  onClick={onClearLocalPointer}
+                  data-testid="ops1-clear-pointer"
+                >
+                  Revenir à l’écran vide
+                </CtaButton>
+              </div>
+              <p className={styles.hint} data-testid="ops1-no-execution-hint">
+                Un message du type « GO » ou « exécute Cursor » reste du texte
+                conversationnel — il ne crée aucune décision de gate. Max{" "}
+                {OPS1_MAX_MESSAGE_CHARS} caractères.
+              </p>
+            </form>
+          </section>
+
+          <section
+            className={`${styles.panel} ${styles.i3Panel}`}
+            data-testid="ops1-i3-controls"
+            aria-labelledby="ops1-i3-controls-title"
           >
-            <label className={styles.label} htmlFor="ops1-message">
-              Message (
-              {isFixtureSession
-                ? "fixture locale"
-                : isTestPresentation
-                  ? "test provider / non live"
-                  : "GPT live serveur"}
-              )
-            </label>
-            <textarea
-              id="ops1-message"
-              className={styles.textarea}
-              data-testid="ops1-message-input"
-              value={draft}
-              maxLength={OPS1_MAX_MESSAGE_CHARS}
-              rows={4}
-              disabled={pending || phase === "sending"}
-              onChange={(e) => setDraft(e.target.value)}
-              placeholder="Saisir un tour utilisateur…"
-            />
+            <h2 id="ops1-i3-controls-title" className={styles.panelTitle}>
+              Qualification I3 (fixture)
+            </h2>
+            <p className={styles.muted}>
+              Détermine si une action structurée est nécessaire. Aucune
+              exécution n’est déclenchée.
+            </p>
+            {qualification ? (
+              <p
+                className={styles.qualificationBadge}
+                data-testid="ops1-i3-qualification"
+                data-qualification={qualification.qualification}
+              >
+                Qualification : {qualification.qualification}
+              </p>
+            ) : (
+              <p className={styles.muted} data-testid="ops1-i3-qualification-empty">
+                Aucune qualification enregistrée.
+              </p>
+            )}
             <div className={styles.composerActions}>
               <CtaButton
-                type="submit"
-                disabled={pending || !draft.trim()}
-                data-testid="ops1-send-message"
+                variant="secondary"
+                onClick={onQualifyNotRequired}
+                disabled={pending}
+                data-testid="ops1-i3-qualify-not-required"
               >
-                {isFixtureSession
-                  ? "Envoyer (fixture)"
-                  : isTestPresentation
-                    ? "Envoyer (test provider)"
-                    : "Envoyer (GPT live)"}
+                ACTION_NOT_REQUIRED
               </CtaButton>
               <CtaButton
-                variant="secondary"
-                onClick={onClearLocalPointer}
-                data-testid="ops1-clear-pointer"
+                onClick={onCreateCandidate}
+                disabled={pending}
+                data-testid="ops1-i3-create-candidate"
               >
-                Revenir à l’écran vide
+                Créer ActionCandidate (fixture)
               </CtaButton>
             </div>
-            <p className={styles.hint} data-testid="ops1-no-execution-hint">
-              L’exécution (Cursor, gate, contrat, Git) nécessite un parcours
-              distinct — non disponible dans I2. Un message du type « exécute
-              Cursor » reste du texte conversationnel. Max{" "}
-              {OPS1_MAX_MESSAGE_CHARS} caractères.
+          </section>
+
+          {activeCandidate ? (
+            <section
+              className={`${styles.panel} ${styles.actionPanel}`}
+              data-testid="ops1-action-panel"
+              aria-labelledby="ops1-action-title"
+            >
+              <h2 id="ops1-action-title" className={styles.panelTitle}>
+                Proposition d’action
+              </h2>
+              <p
+                className={styles.actionStatus}
+                data-testid="ops1-action-status"
+                data-status={activeCandidate.status}
+              >
+                {actionStatusLabel(activeCandidate, activeDecision)}
+              </p>
+              <p className={styles.goNeExec} data-testid="ops1-go-ne-exec">
+                {OPS1_I3_GO_NE_PAS_EXEC}
+              </p>
+              <dl className={styles.meta}>
+                <div>
+                  <dt>actionCandidateId</dt>
+                  <dd data-testid="ops1-action-id">
+                    {activeCandidate.actionCandidateId}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Statut candidat</dt>
+                  <dd data-testid="ops1-action-candidate-status">
+                    {activeCandidate.status}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Version</dt>
+                  <dd data-testid="ops1-action-version">
+                    {activeCandidate.version}
+                  </dd>
+                </div>
+              </dl>
+
+              {canRefine ? (
+                <div
+                  className={styles.refineForm}
+                  data-testid="ops1-action-refine"
+                >
+                  <label className={styles.label} htmlFor="ops1-action-title-input">
+                    Titre
+                  </label>
+                  <input
+                    id="ops1-action-title-input"
+                    className={styles.fieldInput}
+                    data-testid="ops1-action-title-input"
+                    value={refineDraft.title}
+                    onChange={(e) =>
+                      setRefineDraft((d) => ({ ...d, title: e.target.value }))
+                    }
+                  />
+                  <label className={styles.label} htmlFor="ops1-action-objective">
+                    Objectif
+                  </label>
+                  <textarea
+                    id="ops1-action-objective"
+                    className={styles.textarea}
+                    rows={2}
+                    data-testid="ops1-action-objective-input"
+                    value={refineDraft.objective}
+                    onChange={(e) =>
+                      setRefineDraft((d) => ({
+                        ...d,
+                        objective: e.target.value,
+                      }))
+                    }
+                  />
+                  <label className={styles.label} htmlFor="ops1-action-scope">
+                    Périmètre
+                  </label>
+                  <textarea
+                    id="ops1-action-scope"
+                    className={styles.textarea}
+                    rows={2}
+                    data-testid="ops1-action-scope-input"
+                    value={refineDraft.scopeSummary}
+                    onChange={(e) =>
+                      setRefineDraft((d) => ({
+                        ...d,
+                        scopeSummary: e.target.value,
+                      }))
+                    }
+                  />
+                  <label className={styles.label} htmlFor="ops1-action-risk">
+                    Risques
+                  </label>
+                  <textarea
+                    id="ops1-action-risk"
+                    className={styles.textarea}
+                    rows={2}
+                    data-testid="ops1-action-risk-input"
+                    value={refineDraft.riskSummary}
+                    onChange={(e) =>
+                      setRefineDraft((d) => ({
+                        ...d,
+                        riskSummary: e.target.value,
+                      }))
+                    }
+                  />
+                  <CtaButton
+                    onClick={onRefine}
+                    disabled={pending}
+                    data-testid="ops1-action-refine-submit"
+                  >
+                    Enregistrer raffinement
+                  </CtaButton>
+                </div>
+              ) : (
+                <dl className={styles.actionFields} data-testid="ops1-action-readonly">
+                  <div>
+                    <dt>Titre</dt>
+                    <dd data-testid="ops1-action-title">{activeCandidate.title}</dd>
+                  </div>
+                  <div>
+                    <dt>Objectif</dt>
+                    <dd data-testid="ops1-action-objective">
+                      {activeCandidate.objective}
+                    </dd>
+                  </div>
+                  <div>
+                    <dt>Périmètre</dt>
+                    <dd data-testid="ops1-action-scope">
+                      {activeCandidate.scopeSummary}
+                    </dd>
+                  </div>
+                  <div>
+                    <dt>Risques</dt>
+                    <dd data-testid="ops1-action-risk">
+                      {activeCandidate.riskSummary}
+                    </dd>
+                  </div>
+                </dl>
+              )}
+            </section>
+          ) : null}
+
+          {activeCandidate && canGate ? (
+            <section
+              className={`${styles.panel} ${styles.gatePanel}`}
+              data-testid="ops1-gate-panel"
+              aria-labelledby="ops1-gate-title"
+            >
+              <h2 id="ops1-gate-title" className={styles.panelTitle}>
+                Gate Morris
+              </h2>
+              <p className={styles.muted} data-testid="ops1-gate-lede">
+                Décision humaine explicite. Aucun effet Cursor, Git ou
+                filesystem. {OPS1_I3_GO_NE_PAS_EXEC}.
+              </p>
+              {activeDecision ? (
+                <p
+                  className={styles.decisionBadge}
+                  data-testid="ops1-gate-latest-decision"
+                  data-kind={activeDecision.kind}
+                >
+                  Dernière décision (v{activeDecision.actionVersion}) :{" "}
+                  {activeDecision.kind}
+                </p>
+              ) : (
+                <p
+                  className={styles.muted}
+                  data-testid="ops1-gate-no-decision"
+                >
+                  Aucune décision sur cette version.
+                </p>
+              )}
+              {gateMicrocopy ||
+              (activeCandidate.status === "APPROVED" ? OPS1_I3_GO_MICROCOPY : null) ? (
+                <p
+                  className={styles.goMicrocopy}
+                  data-testid="ops1-gate-go-microcopy"
+                  role="status"
+                >
+                  {gateMicrocopy ?? OPS1_I3_GO_MICROCOPY}
+                </p>
+              ) : null}
+              <div className={styles.gateActions} data-testid="ops1-gate-actions">
+                {showGoButtons ? (
+                  <>
+                    <CtaButton
+                      onClick={() => onGate("GO")}
+                      disabled={pending}
+                      data-testid="ops1-gate-go"
+                    >
+                      GO
+                    </CtaButton>
+                    <CtaButton
+                      variant="secondary"
+                      onClick={() => onGate("NO_GO")}
+                      disabled={pending}
+                      data-testid="ops1-gate-no-go"
+                    >
+                      NO_GO
+                    </CtaButton>
+                    <CtaButton
+                      variant="secondary"
+                      onClick={() => onGate("CORRIGER")}
+                      disabled={pending}
+                      data-testid="ops1-gate-corriger"
+                    >
+                      CORRIGER
+                    </CtaButton>
+                    <CtaButton
+                      variant="secondary"
+                      onClick={() => onGate("ABANDONNER")}
+                      disabled={pending}
+                      data-testid="ops1-gate-abandonner"
+                    >
+                      ABANDONNER
+                    </CtaButton>
+                  </>
+                ) : null}
+                {showCorrigerOnly ? (
+                  <CtaButton
+                    variant="secondary"
+                    onClick={() => onGate("CORRIGER")}
+                    disabled={pending}
+                    data-testid="ops1-gate-corriger"
+                  >
+                    CORRIGER
+                  </CtaButton>
+                ) : null}
+              </div>
+            </section>
+          ) : null}
+
+          <section
+            className={`${styles.panel} ${styles.safetyPanel}`}
+            data-testid="ops1-i3-safety"
+            aria-labelledby="ops1-i3-safety-title"
+          >
+            <h2 id="ops1-i3-safety-title" className={styles.panelTitle}>
+              Garde-fou exécution
+            </h2>
+            <p className={styles.muted}>
+              I3 refuse toute tentative d’exécution. Preuve négative explicite.
             </p>
-          </form>
-        </section>
+            <CtaButton
+              variant="secondary"
+              onClick={onRefuseExecution}
+              disabled={pending}
+              data-testid="ops1-i3-refuse-execution"
+            >
+              Tenter exécution (doit refuser)
+            </CtaButton>
+            {execRefuseMsg ? (
+              <p
+                className={styles.error}
+                role="status"
+                data-testid="ops1-i3-execution-refused"
+              >
+                {execRefuseMsg}
+              </p>
+            ) : null}
+            <p className={styles.hint} data-testid="ops1-i3-no-exec-cta">
+              Aucun bouton « Exécuter », « Lancer Cursor » ou équivalent n’est
+              disponible dans I3.
+            </p>
+          </section>
+        </>
       ) : null}
     </div>
   );
diff --git a/projects/sfia-studio/app/features/ops1/ops1-session.module.css b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
index 675dc7c..1def9aa 100644
--- a/projects/sfia-studio/app/features/ops1/ops1-session.module.css
+++ b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
@@ -261,3 +261,116 @@
   font-size: 0.8rem;
   color: var(--sfia-muted);
 }
+
+.i3Panel {
+  border-color: #c5d4e8;
+  background: #f7fafc;
+}
+
+.actionPanel {
+  border-color: #d4c5e8;
+  background: #faf8fc;
+}
+
+.gatePanel {
+  border-color: #e8d4c5;
+  background: #fcfaf7;
+}
+
+.safetyPanel {
+  border-color: #e8c5c5;
+  background: #fcf7f7;
+}
+
+.qualificationBadge,
+.actionStatus,
+.decisionBadge {
+  margin: 0;
+  padding: 0.65rem 0.85rem;
+  border-radius: 8px;
+  font-weight: 600;
+  font-size: 0.9rem;
+}
+
+.qualificationBadge {
+  background: #eef4fb;
+  border: 1px solid #b8cce0;
+  color: #1e3a5f;
+}
+
+.actionStatus {
+  background: #f3eefb;
+  border: 1px solid #c9b6e0;
+  color: #3d2a5c;
+}
+
+.goNeExec {
+  margin: 0;
+  font-size: 0.85rem;
+  font-weight: 600;
+  color: #7a3b12;
+}
+
+.goMicrocopy {
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  background: #e8f6ee;
+  border: 1px solid #9dcfb0;
+  color: #1b5c38;
+  font-weight: 600;
+}
+
+.decisionBadge {
+  background: #fff6ee;
+  border: 1px solid #e0c4a8;
+  color: #5c3a1e;
+}
+
+.gateActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.65rem;
+}
+
+.refineForm {
+  display: flex;
+  flex-direction: column;
+  gap: 0.45rem;
+}
+
+.fieldInput {
+  width: 100%;
+  border-radius: 10px;
+  border: 1px solid var(--sfia-border);
+  padding: 0.65rem 0.85rem;
+  font: inherit;
+  color: var(--sfia-ink);
+  background: #fff;
+}
+
+.fieldInput:focus {
+  outline: 2px solid var(--sfia-blue);
+  outline-offset: 1px;
+}
+
+.actionFields {
+  display: flex;
+  flex-direction: column;
+  gap: 0.65rem;
+  margin: 0;
+}
+
+.actionFields dt {
+  font-size: 0.7rem;
+  text-transform: uppercase;
+  letter-spacing: 0.04em;
+  color: var(--sfia-muted);
+}
+
+.actionFields dd {
+  margin: 0.15rem 0 0;
+  color: var(--sfia-ink);
+  line-height: 1.45;
+  white-space: pre-wrap;
+}
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index d756c8e..3b8b912 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -5,9 +5,20 @@ import {
   getSessionBundle,
   listOpenSessions,
 } from "./repository";
+import {
+  createFixtureActionCandidate,
+  getI3Bundle,
+  qualifyActionNotRequired,
+  recordGateDecision,
+  refineActionCandidate,
+  refuseExecutionAttempt,
+} from "./actionGate";
 import { Ops1Error, toSafeClientError } from "./errors";
 import {
+  assertActionCandidateId,
+  assertActionField,
   assertConversationMode,
+  assertGateDecisionKind,
   assertMessageContent,
   assertSessionId,
 } from "./validation";
@@ -17,12 +28,16 @@ import {
 } from "./conversation/config";
 import { sendConversationMessage } from "./conversation/service";
 import type {
+  ActionCandidate,
   ConversationAttempt,
   ConversationMode,
   ConversationUsageCounters,
   CycleSession,
+  GateDecision,
+  GateDecisionKind,
   JournalTurn,
   ProviderPresentation,
+  SessionQualification,
 } from "./types";

 export type Ops1ActionResult<T> =
@@ -89,6 +104,9 @@ export async function ops1GetSessionAction(
     turns: JournalTurn[];
     attempts: ConversationAttempt[];
     presentation: ProviderPresentation;
+    qualification: SessionQualification | null;
+    candidates: ActionCandidate[];
+    latestDecisionsByAction: Record<string, GateDecision | null>;
   }>
 > {
   try {
@@ -97,11 +115,15 @@ export async function ops1GetSessionAction(
     if (!bundle) {
       throw new Ops1Error("NOT_FOUND", "Session introuvable.");
     }
+    const i3 = getI3Bundle(id);
     return {
       ok: true,
       data: {
         ...bundle,
         presentation: resolvePresentation(bundle.session.conversationMode),
+        qualification: i3.qualification,
+        candidates: i3.candidates,
+        latestDecisionsByAction: i3.latestDecisionsByAction,
       },
     };
   } catch (error) {
@@ -211,3 +233,109 @@ export async function ops1AppendUserMessageAction(input: {
     },
   };
 }
+
+/* ─── OPS1 I3 — action candidate + gate (no execution) ─── */
+
+export async function ops1QualifyActionNotRequiredAction(input: {
+  sessionId: string;
+}): Promise<Ops1ActionResult<{ qualification: SessionQualification }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const { qualification } = qualifyActionNotRequired(sessionId);
+    return { ok: true, data: { qualification } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1CreateFixtureActionCandidateAction(input: {
+  sessionId: string;
+}): Promise<Ops1ActionResult<{ candidate: ActionCandidate }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const { candidate } = createFixtureActionCandidate(sessionId);
+    return { ok: true, data: { candidate } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1RefineActionCandidateAction(input: {
+  sessionId: string;
+  actionCandidateId: string;
+  title: string;
+  objective: string;
+  scopeSummary: string;
+  riskSummary: string;
+}): Promise<Ops1ActionResult<{ candidate: ActionCandidate }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
+    const { candidate } = refineActionCandidate({
+      sessionId,
+      actionCandidateId,
+      title: assertActionField("Titre", input.title),
+      objective: assertActionField("Objectif", input.objective),
+      scopeSummary: assertActionField("Périmètre", input.scopeSummary),
+      riskSummary: assertActionField("Risques", input.riskSummary),
+    });
+    return { ok: true, data: { candidate } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1RecordGateDecisionAction(input: {
+  sessionId: string;
+  actionCandidateId: string;
+  kind: GateDecisionKind;
+  motif?: string | null;
+}): Promise<
+  Ops1ActionResult<{
+    decision: GateDecision;
+    candidate: ActionCandidate;
+    microcopy: string | null;
+  }>
+> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
+    const kind = assertGateDecisionKind(input.kind);
+    const result = recordGateDecision({
+      sessionId,
+      actionCandidateId,
+      kind,
+      motif: input.motif ?? null,
+    });
+    return {
+      ok: true,
+      data: {
+        decision: result.decision,
+        candidate: result.candidate,
+        microcopy: result.microcopy,
+      },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+/** Explicit fail-closed — I3 never executes Cursor/Git/filesystem. */
+export async function ops1RefuseExecutionAction(input: {
+  sessionId: string;
+}): Promise<Ops1ActionResult<{ refused: true; message: string }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    refuseExecutionAttempt(sessionId);
+    return {
+      ok: true,
+      data: {
+        refused: true,
+        message:
+          "Exécution refusée — I3 n’autorise aucune exécution Cursor, Git ou filesystem.",
+      },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
index 68446e4..27eeeed 100644
--- a/projects/sfia-studio/app/lib/ops1/db.ts
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -61,6 +61,49 @@ CREATE INDEX IF NOT EXISTS idx_turns_session_seq

 CREATE INDEX IF NOT EXISTS idx_attempts_session
   ON conversation_attempts(session_id, request_started_at);
+
+CREATE TABLE IF NOT EXISTS session_qualifications (
+  session_id TEXT PRIMARY KEY NOT NULL,
+  qualification TEXT NOT NULL
+    CHECK (qualification IN ('ACTION_REQUIRED', 'ACTION_NOT_REQUIRED')),
+  updated_at TEXT NOT NULL,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
+CREATE TABLE IF NOT EXISTS action_candidates (
+  action_candidate_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN (
+    'PROPOSED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED',
+    'CHANGES_REQUESTED', 'ABANDONED', 'NOT_REQUIRED'
+  )),
+  title TEXT NOT NULL,
+  objective TEXT NOT NULL,
+  scope_summary TEXT NOT NULL,
+  risk_summary TEXT NOT NULL,
+  version INTEGER NOT NULL CHECK (version >= 1),
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
+CREATE TABLE IF NOT EXISTS gate_decisions (
+  gate_decision_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  action_candidate_id TEXT NOT NULL,
+  action_version INTEGER NOT NULL CHECK (action_version >= 1),
+  kind TEXT NOT NULL CHECK (kind IN ('GO', 'NO_GO', 'CORRIGER', 'ABANDONNER')),
+  motif TEXT,
+  created_at TEXT NOT NULL,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
+  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_actions_session
+  ON action_candidates(session_id, updated_at);
+
+CREATE INDEX IF NOT EXISTS idx_gates_action
+  ON gate_decisions(action_candidate_id, created_at);
 `;

 let singleton: DatabaseSync | null = null;
diff --git a/projects/sfia-studio/app/lib/ops1/ids.ts b/projects/sfia-studio/app/lib/ops1/ids.ts
index 45f2b8d..cf0923e 100644
--- a/projects/sfia-studio/app/lib/ops1/ids.ts
+++ b/projects/sfia-studio/app/lib/ops1/ids.ts
@@ -15,3 +15,11 @@ export function createEventId(): string {
 export function createAttemptId(): string {
   return `ops1-att-${randomUUID()}`;
 }
+
+export function createActionCandidateId(): string {
+  return `ops1-act-${randomUUID()}`;
+}
+
+export function createGateDecisionId(): string {
+  return `ops1-gate-${randomUUID()}`;
+}
diff --git a/projects/sfia-studio/app/lib/ops1/index.ts b/projects/sfia-studio/app/lib/ops1/index.ts
index b6ae73e..d9493e6 100644
--- a/projects/sfia-studio/app/lib/ops1/index.ts
+++ b/projects/sfia-studio/app/lib/ops1/index.ts
@@ -11,3 +11,11 @@ export {
   mapGlobalModeBadgeTone,
   resolveGlobalModePresentation,
 } from "./globalModeBadge";
+export {
+  createFixtureActionCandidate,
+  getI3Bundle,
+  qualifyActionNotRequired,
+  recordGateDecision,
+  refineActionCandidate,
+  refuseExecutionAttempt,
+} from "./actionGate";
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index bb2f2fd..f38fbcb 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -80,7 +80,12 @@ export type SessionEventType =
   | "TURN_PERSISTENCE_FAILED"
   | "CONVERSATION_ATTEMPT_STARTED"
   | "CONVERSATION_ATTEMPT_SUCCEEDED"
-  | "CONVERSATION_ATTEMPT_FAILED";
+  | "CONVERSATION_ATTEMPT_FAILED"
+  | "ACTION_QUALIFIED_NOT_REQUIRED"
+  | "ACTION_CANDIDATE_CREATED"
+  | "ACTION_CANDIDATE_REFINED"
+  | "GATE_DECISION_RECORDED"
+  | "EXECUTION_REFUSED";

 export interface SessionEvent {
   eventId: string;
@@ -90,6 +95,53 @@ export interface SessionEvent {
   detail: string;
 }

+/** I3 — qualification outcome for a session (no execution). */
+export type ActionQualification = "ACTION_REQUIRED" | "ACTION_NOT_REQUIRED";
+
+/**
+ * I3 ActionCandidate lifecycle — no execution states.
+ * GO → APPROVED means "validated for I4 preparation", never "executed".
+ */
+export type ActionCandidateStatus =
+  | "PROPOSED"
+  | "UNDER_REVIEW"
+  | "APPROVED"
+  | "REJECTED"
+  | "CHANGES_REQUESTED"
+  | "ABANDONED"
+  | "NOT_REQUIRED";
+
+export type GateDecisionKind = "GO" | "NO_GO" | "CORRIGER" | "ABANDONNER";
+
+export interface ActionCandidate {
+  actionCandidateId: string;
+  sessionId: string;
+  status: ActionCandidateStatus;
+  title: string;
+  objective: string;
+  scopeSummary: string;
+  riskSummary: string;
+  version: number;
+  createdAt: string;
+  updatedAt: string;
+}
+
+export interface GateDecision {
+  gateDecisionId: string;
+  sessionId: string;
+  actionCandidateId: string;
+  actionVersion: number;
+  kind: GateDecisionKind;
+  motif: string | null;
+  createdAt: string;
+}
+
+export interface SessionQualification {
+  sessionId: string;
+  qualification: ActionQualification;
+  updatedAt: string;
+}
+
 export const OPS1_PROJECT_KEY = "sfia-studio-ops1";

 /** Local input guardrail — not a FinOps decision. */
@@ -97,3 +149,13 @@ export const OPS1_MAX_MESSAGE_CHARS = 4000;

 export const LEGACY_SESSION_MODE_AMBIGUOUS =
   "MORRIS DECISION REQUIRED — LEGACY SESSION MODE AMBIGUOUS";
+
+/** I3 microcopy — GO never means execution started. */
+export const OPS1_I3_GO_MICROCOPY =
+  "Proposition validée. Aucune exécution n’est lancée dans I3.";
+
+export const OPS1_I3_STATUS_UNAUTHORIZED = "ACTION PROPOSÉE — NON AUTORISÉE";
+export const OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED =
+  "ACTION VALIDÉE — NON EXÉCUTÉE";
+export const OPS1_I3_GO_NE_PAS_EXEC =
+  "GO ≠ exécution — préparation I4 uniquement";
diff --git a/projects/sfia-studio/app/lib/ops1/validation.ts b/projects/sfia-studio/app/lib/ops1/validation.ts
index eda1313..0a18d3e 100644
--- a/projects/sfia-studio/app/lib/ops1/validation.ts
+++ b/projects/sfia-studio/app/lib/ops1/validation.ts
@@ -1,11 +1,13 @@
 import {
   OPS1_MAX_MESSAGE_CHARS,
   type ConversationMode,
+  type GateDecisionKind,
   type TurnRole,
 } from "./types";
 import { Ops1Error } from "./errors";

 const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;
+const ACTION_ID_RE = /^ops1-act-[0-9a-f-]{36}$/i;

 export function assertSessionId(sessionId: unknown): string {
   if (typeof sessionId !== "string" || !SESSION_ID_RE.test(sessionId)) {
@@ -14,6 +16,39 @@ export function assertSessionId(sessionId: unknown): string {
   return sessionId;
 }

+export function assertActionCandidateId(id: unknown): string {
+  if (typeof id !== "string" || !ACTION_ID_RE.test(id)) {
+    throw new Ops1Error("VALIDATION", "Identifiant d’action invalide.");
+  }
+  return id;
+}
+
+export function assertGateDecisionKind(kind: unknown): GateDecisionKind {
+  if (
+    kind === "GO" ||
+    kind === "NO_GO" ||
+    kind === "CORRIGER" ||
+    kind === "ABANDONNER"
+  ) {
+    return kind;
+  }
+  throw new Ops1Error("VALIDATION", "Décision de gate invalide.");
+}
+
+export function assertActionField(label: string, value: unknown): string {
+  if (typeof value !== "string") {
+    throw new Ops1Error("VALIDATION", `${label} doit être du texte.`);
+  }
+  const trimmed = value.trim();
+  if (!trimmed) {
+    throw new Ops1Error("VALIDATION", `${label} ne peut pas être vide.`);
+  }
+  if (trimmed.length > OPS1_MAX_MESSAGE_CHARS) {
+    throw new Ops1Error("VALIDATION", `${label} trop long.`);
+  }
+  return trimmed;
+}
+
 export function assertMessageContent(content: unknown): string {
   if (typeof content !== "string") {
     throw new Ops1Error("VALIDATION", "Le message doit être du texte.");

\`\`\`

## Résultats QA

| Contrôle | Résultat |
|---|---|
| lint (\`next lint\`) | PASS — 0 warning/error |
| typecheck (\`tsc --noEmit\`) | PASS |
| tests unitaires/intégration (\`vitest run\`) | PASS — 20 files / 94 tests |
| suite OPS1 (domain, repository, conversation, actionGate, UI) | PASS |
| build production (\`next build\`) | PASS |
| E2E I1 | PASS |
| E2E I2 (fixture/test provider) | PASS |
| E2E I3 fixture | PASS — 5 scénarios |
| \`git diff --check\` | PASS |
| Secrets bornés au diff I3 | PASS — seules mentions \`OPENAI_API_KEY\` nom de variable (I2), aucune valeur secrète |

## Preuves visuelles

Viewport Playwright : **1440×1024**
Dossier : \`.tmp-sfia-review/screenshots-ops1-i3/\` (hors commit)

| Capture | Contenu | Dimensions pixels |
|---|---|---|
| \`01-action-not-required.png\` | Qualification ACTION_NOT_REQUIRED | 1440×1024 |
| \`02-candidate-proposed-unauthorized.png\` | ActionCandidate NON AUTORISÉE | 1440×1024 |
| \`03-gate-four-actions.png\` | Gate GO/NO_GO/CORRIGER/ABANDONNER | 1440×1024 |
| \`04-go-validated-not-executed.png\` | GO — VALIDÉE NON EXÉCUTÉE + microcopy | 1440×1024 |
| \`05-after-reload.png\` | Persistance après reload | 1440×1024 |
| \`06-corriger-refinement.png\` | CORRIGER → raffinement | 1440×1024 |

Éléments visibles attendus (runtime) : badge FIXTURE, statut OPEN, panneau conversation, panneau action, panneau gate, message \`GO ≠ exécution\`.

## Contrôles sécurité / preuves négatives

- Chat « GO » → aucune décision gate (E2E)
- Tentative exécution → refus explicite + event \`EXECUTION_REFUSED\`
- Aucun bouton Exécuter / Lancer Cursor
- Session jamais CLOSED
- Isolation multi-sessions (unit)
- Décision liée à \`actionVersion\`
- Fail-closed validation IDs / kinds

## Diff stat

\`\`\`
 .../app/__tests__/ops1/Ops1SessionScreen.test.tsx  |  14 +
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx |  14 +
 .../app/features/ops1/Ops1SessionScreen.tsx        | 964 ++++++++++++++++-----
 .../app/features/ops1/ops1-session.module.css      | 113 +++
 projects/sfia-studio/app/lib/ops1/actions.ts       | 128 +++
 projects/sfia-studio/app/lib/ops1/db.ts            |  43 +
 projects/sfia-studio/app/lib/ops1/ids.ts           |   8 +
 projects/sfia-studio/app/lib/ops1/index.ts         |   8 +
 projects/sfia-studio/app/lib/ops1/types.ts         |  64 +-
 projects/sfia-studio/app/lib/ops1/validation.ts    |  35 +
 10 files changed, 1172 insertions(+), 219 deletions(-)
?? projects/sfia-studio/app/lib/ops1/actionGate.ts
?? projects/sfia-studio/app/__tests__/ops1/actionGate.test.ts
?? projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
\`\`\`

## État Git final (projet)

- Branche : \`delivery/sfia-studio-ops1-i3-action-gate\`
- HEAD inchangé (aucun commit projet) : \`ae39a8c0375c2f8980d3ee394fa679dee8b06c0f\`
- Modifications locales non stagées / non commitées
- Aucun push projet
- Aucune PR
- Aucun merge

## Réserves

1. Génération GPT structurée d’ActionCandidate **non incluse** (fixture-first uniquement) — volontaire pour tenir le scope B.
2. Allowlist exécutable / hash contrat / runner **reportés à I4**.
3. Captures fullPage reportent 1440×1024 (viewport) ; contenu utile visible dans frame.
4. Résidus non suivis préexistants : \`projects/.tmp-sfia-review/\`, \`.tmp-sfia-review/\` — hors commit projet.

## Décisions Morris futures

1. Validation ChatGPT (ce handoff)
2. Validation visuelle Morris (captures)
3. GO commit / push / PR de la branche delivery I3 (cycle ultérieur)
4. Cadrage / GO I4 (exécution contrôlée)

## Verdict

\`OPS1 I3 OPTION B DELIVERED LOCALLY — FOUR GATES — NO EXECUTION — HANDOFF REMOTE VERIFIED — READY FOR REVIEW\`

*(Verdict handoff distant finalisé après publication L3 bornée ci-dessous.)*
