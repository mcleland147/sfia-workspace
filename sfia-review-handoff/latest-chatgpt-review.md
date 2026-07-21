# Review pack Full — OPS1 I3 delivery — commit + push + PR #250

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Titre | Delivery OPS1 I3 Option B — commit / push / PR |
| Date / heure | 2026-07-21 14:13:53 CEST (Europe/Paris) |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `delivery/sfia-studio-ops1-i3-action-gate` |
| HEAD initial | `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` |
| HEAD commit | `3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57` |
| `origin/main` | `853959cafd85c207878b654dc3300770fed6fc08` |
| Merge-base (avant commit) | `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` |
| Rôle Cursor | Exécuteur Git contrôlé |
| Type | PR readiness + delivery Git borné |
| Profil SFIA | Standard |
| Typologie | INC — livraison incrémentale OPS1 I3 |
| Blocs | PR readiness, QA, UX/UI preuves, Review Handoff, garde-fous Git |

## 2. Décisions Morris

- `GO DELIVERY OPS1 I3 — OPTION B — FOUR GATE ACTIONS — FIXTURE FIRST — NO EXECUTION — ALLOWLIST DEFERRED TO I4`
- `GO MORRIS — CORRECTIF UI OPS1 I3 VALIDÉ`
- `GO MORRIS — COMMIT + PUSH + PR — DELIVERY OPS1 I3`
- Merge : **non autorisé** dans ce cycle

## 3. Sources consultées

- `origin/main`: template, routing, OM, guardrails, `scripts/sfia/README.md`, `scripts/sfia/publish-review-handoff.sh`
- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (tip antérieur `96d338b` — cycle UI I3 validé)
- Working tree / commit OPS1 I3 (15 fichiers)
- `package.json` scripts lint/test/typecheck

## 4. Truth check & base main

- Branche active confirmée ; staged initial vide ; remote branche absente avant push.
- `origin/main` = SHA attendu.
- Main en avance d’1 commit : `853959c` publisher #249 — fichiers méthode/scripts uniquement — **NO_OPS1_OVERLAP** — poursuite sans rebase.

## 5. Classification des fichiers (working tree avant commit)

### Inclus (code métier I3)
- `lib/ops1/actionGate.ts` (créé)
- `lib/ops1/actions.ts`, `types.ts`, `validation.ts`, `db.ts`, `ids.ts`, `index.ts`

### Inclus (UI / signalétique I3)
- `features/ops1/Ops1SessionScreen.tsx`, `ops1-session.module.css`
- `features/nouvelle-demande/NouvelleDemandePageClient.tsx`
- `lib/ops1/fixtureReply.ts`

### Inclus (tests)
- `__tests__/ops1/actionGate.test.ts` (créé)
- `__tests__/ops1/Ops1SessionScreen.test.tsx`
- `__tests__/ops1/globalModeBadge.ui.test.tsx`
- `e2e/ops1-i3-action-gate.spec.ts` (créé)

### Exclus (temporaire / interdit)
- `.tmp-sfia-review/**` — captures & review packs locaux
- `projects/.tmp-sfia-review/**` — artefacts historiques hors cycle
- worktree `sfia-review-handoff` — hors commit projet

### Étranger au cycle
Aucun fichier étranger détecté dans le diff projet.

## 6. Périmètre staged exact (15)

```
M  projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
A  projects/sfia-studio/app/__tests__/ops1/actionGate.test.ts
M  projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
A  projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
M  projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
M  projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
M  projects/sfia-studio/app/features/ops1/ops1-session.module.css
A  projects/sfia-studio/app/lib/ops1/actionGate.ts
M  projects/sfia-studio/app/lib/ops1/actions.ts
M  projects/sfia-studio/app/lib/ops1/db.ts
M  projects/sfia-studio/app/lib/ops1/fixtureReply.ts
M  projects/sfia-studio/app/lib/ops1/ids.ts
M  projects/sfia-studio/app/lib/ops1/index.ts
M  projects/sfia-studio/app/lib/ops1/types.ts
M  projects/sfia-studio/app/lib/ops1/validation.ts
```

STAGED_SCOPE_OK vs liste autorisée.

## 7. Diff stat commit

```
15 files changed, 2067 insertions(+), 229 deletions(-)
```

## 8. Justification par fichier

| Fichier | Rôle |
|---------|------|
| `actionGate.ts` | Domaine I3 : qualification, candidate, 4 gates, refuseExecution fail-closed |
| `actions.ts` | Wiring server actions I3 |
| `types.ts` | Types + microcopy GO ≠ exécution |
| `validation.ts` / `db.ts` / `ids.ts` / `index.ts` | Persistance / IDs / exports |
| `Ops1SessionScreen.tsx` + CSS | UI centre I3 + panneaux gate |
| `NouvelleDemandePageClient.tsx` | Shell signalétique OPS1 I3 |
| `fixtureReply.ts` | Texte journal fixture I3 |
| `actionGate.test.ts` | Unit domaine |
| `Ops1SessionScreen.test.tsx` / `globalModeBadge.ui.test.tsx` | UI / shell |
| `ops1-i3-action-gate.spec.ts` | E2E Option B |

## 9. Contenu exploitable — fichiers créés (complets)


### `projects/sfia-studio/app/lib/ops1/actionGate.ts` (complet, 480 lignes)

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
```

### `projects/sfia-studio/app/__tests__/ops1/actionGate.test.ts` (complet, 210 lignes)

```typescript
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
```

### `projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts` (complet, 180 lignes)

```typescript
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
```

## 10. Diffs utiles — signalétique & petits modules

### `fixtureReply.ts` + `NouvelleDemandePageClient.tsx` + `ids.ts` + `index.ts`

```diff
commit 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Tue Jul 21 14:13:23 2026 +0200

    feat(sfia-studio): deliver OPS1 I3 action gate

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
index c1f4fb4..5244a82 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
@@ -14,21 +14,21 @@ import {
 const COPILOT = {
   variant: "flush" as const,
   name: "Nora · SFIA Copilot",
-  subtitle: "OPS1 I2 — conversation live/fixture",
+  subtitle: "OPS1 I3 — action gate / fixture first",
   avatarTone: "blue" as const,
   levelPill: "L0 humain",
   summary:
-    "Conversation multi-tours (fixture ou GPT live serveur). Aucune exécution Cursor, aucun gate d’action.",
+    "Proposition d’action hors chat et gate Morris (GO / NO_GO / CORRIGER / ABANDONNER). Fixture first — aucune exécution ; allowlist reportée à I4.",
   checklist: [
-    "Créer session OPEN",
-    "Échanger fixture ou live",
-    "Persister journal + usage",
-    "Aucun effet d’exécution depuis le chat",
+    "Créer session OPEN (fixture first)",
+    "Qualifier ou proposer un ActionCandidate",
+    "Décider via les quatre gate actions",
+    "Aucune exécution Cursor / Git / filesystem",
   ],
-  checklistTitle: "Parcours I2",
+  checklistTitle: "Parcours I3",
   riskTitle: "PÉRIMÈTRE",
   riskText:
-    "I2 n’ouvre pas I3–I7, la clôture CLOSED, ni la CI. Chat ≠ exécution.",
+    "I3 n’ouvre pas l’exécution ni l’allowlist I4, ni la clôture CLOSED, ni la CI. GO ≠ exécution.",
 };

 function NouvelleDemandeBody({
@@ -81,7 +81,7 @@ export function NouvelleDemandePageClient() {
           tone: badge.tone,
           testId: "global-mode-badge",
         },
-        { label: "OPS1 I2", tone: "blueFlush" },
+        { label: "OPS1 I3", tone: "blueFlush", testId: "ops1-increment-badge" },
       ]}
       copilot={COPILOT}
     >
diff --git a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
index 8c70d74..de79cb7 100644
--- a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
+++ b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
@@ -3,7 +3,7 @@ export function buildFixtureAssistantReply(userContent: string): string {
   const preview =
     userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
   return [
-    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I2.",
+    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I3.",
     "Aucun fournisseur GPT n’a été appelé.",
     `Echo borné : « ${preview} »`,
   ].join(" ");
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
```

### Extraits critiques — `types.ts` microcopy I3

```typescript
86-  | "ACTION_CANDIDATE_REFINED"
87-  | "GATE_DECISION_RECORDED"
88:  | "EXECUTION_REFUSED";
89-
90-export interface SessionEvent {
--
96-}
97-
98:/** I3 — qualification outcome for a session (no execution). */
99-export type ActionQualification = "ACTION_REQUIRED" | "ACTION_NOT_REQUIRED";
100-
101-/**
102: * I3 ActionCandidate lifecycle — no execution states.
103- * GO → APPROVED means "validated for I4 preparation", never "executed".
104- */
105:export type ActionCandidateStatus =
106-  | "PROPOSED"
107-  | "UNDER_REVIEW"
--
112-  | "NOT_REQUIRED";
113-
114:export type GateDecisionKind = "GO" | "NO_GO" | "CORRIGER" | "ABANDONNER";
115-
116:export interface ActionCandidate {
117-  actionCandidateId: string;
118-  sessionId: string;
119:  status: ActionCandidateStatus;
120-  title: string;
121-  objective: string;
--
127-}
128-
129:export interface GateDecision {
130-  gateDecisionId: string;
131-  sessionId: string;
132-  actionCandidateId: string;
133-  actionVersion: number;
134:  kind: GateDecisionKind;
135-  motif: string | null;
136-  createdAt: string;
--
139-export interface SessionQualification {
140-  sessionId: string;
141:  qualification: ActionQualification;
142-  updatedAt: string;
143-}
--
152-
153-/** I3 microcopy — GO never means execution started. */
154:export const OPS1_I3_GO_MICROCOPY =
155-  "Proposition validée. Aucune exécution n’est lancée dans I3.";
156-
157:export const OPS1_I3_STATUS_UNAUTHORIZED = "ACTION PROPOSÉE — NON AUTORISÉE";
158:export const OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED =
159-  "ACTION VALIDÉE — NON EXÉCUTÉE";
160:export const OPS1_I3_GO_NE_PAS_EXEC =
161-  "GO ≠ exécution — préparation I4 uniquement";
```

### Extraits critiques — `actions.ts` refuseExecution

```typescript
7-} from "./repository";
8-import {
9-  createFixtureActionCandidate,
10:  getI3Bundle,
11-  qualifyActionNotRequired,
12-  recordGateDecision,
13-  refineActionCandidate,
14:  refuseExecutionAttempt,
15-} from "./actionGate";
16-import { Ops1Error, toSafeClientError } from "./errors";
17-import {
--
115-    if (!bundle) {
116-      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
117-    }
118:    const i3 = getI3Bundle(id);
119-    return {
120-      ok: true,
121-      data: {
--
234-  };
235-}
236-
237:/* ─── OPS1 I3 — action candidate + gate (no execution) ─── */
238-
239:export async function ops1QualifyActionNotRequiredAction(input: {
240-  sessionId: string;
241-}): Promise<Ops1ActionResult<{ qualification: SessionQualification }>> {
242-  try {
--
248-  }
249-}
250-
251:export async function ops1CreateFixtureActionCandidateAction(input: {
252-  sessionId: string;
253-}): Promise<Ops1ActionResult<{ candidate: ActionCandidate }>> {
254-  try {
--
285-  }
286-}
287-
288:export async function ops1RecordGateDecisionAction(input: {
289-  sessionId: string;
290-  actionCandidateId: string;
291-  kind: GateDecisionKind;
--
320-  }
321-}
322-
323:/** Explicit fail-closed — I3 never executes Cursor/Git/filesystem. */
324:export async function ops1RefuseExecutionAction(input: {
325-  sessionId: string;
326-}): Promise<Ops1ActionResult<{ refused: true; message: string }>> {
327-  try {
328-    const sessionId = assertSessionId(input.sessionId);
329:    refuseExecutionAttempt(sessionId);
330-    return {
331-      ok: true,
332-      data: {
333-        refused: true,
334-        message:
335:          "Exécution refusée — I3 n’autorise aucune exécution Cursor, Git ou filesystem.",
336-      },
337-    };
338-  } catch (error) {
```

### Extraits critiques — UI quatre gates (`Ops1SessionScreen.tsx`)

```tsx
27-} from "@/lib/ops1/types";
28-import {
29:  OPS1_I3_GO_MICROCOPY,
30:  OPS1_I3_GO_NE_PAS_EXEC,
31-  OPS1_I3_STATUS_UNAUTHORIZED,
32-  OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED,
--
414-    <div className={styles.root} data-testid="ops1-session-root">
415-      <header className={styles.header}>
416:        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I3</p>
417-        <h2 className={styles.title} id="ops1-session-heading">
418-          Session OPS1
--
799-          >
800-            <h2 id="ops1-i3-controls-title" className={styles.panelTitle}>
801:              Qualification I3 (fixture)
802-            </h2>
803-            <p className={styles.muted}>
--
854-              </p>
855-              <p className={styles.goNeExec} data-testid="ops1-go-ne-exec">
856:                {OPS1_I3_GO_NE_PAS_EXEC}
857-              </p>
858-              <dl className={styles.meta}>
--
990-              <p className={styles.muted} data-testid="ops1-gate-lede">
991-                Décision humaine explicite. Aucun effet Cursor, Git ou
992:                filesystem. {OPS1_I3_GO_NE_PAS_EXEC}.
993-              </p>
994-              {activeDecision ? (
--
1010-              )}
1011-              {gateMicrocopy ||
1012:              (activeCandidate.status === "APPROVED" ? OPS1_I3_GO_MICROCOPY : null) ? (
1013-                <p
1014-                  className={styles.goMicrocopy}
1015:                  data-testid="ops1-gate-go-microcopy"
1016-                  role="status"
1017-                >
1018:                  {gateMicrocopy ?? OPS1_I3_GO_MICROCOPY}
1019-                </p>
1020-              ) : null}
--
1025-                      onClick={() => onGate("GO")}
1026-                      disabled={pending}
1027:                      data-testid="ops1-gate-go"
1028-                    >
1029-                      GO
--
1033-                      onClick={() => onGate("NO_GO")}
1034-                      disabled={pending}
1035:                      data-testid="ops1-gate-no-go"
1036-                    >
1037-                      NO_GO
--
1041-                      onClick={() => onGate("CORRIGER")}
1042-                      disabled={pending}
1043:                      data-testid="ops1-gate-corriger"
1044-                    >
1045-                      CORRIGER
--
1049-                      onClick={() => onGate("ABANDONNER")}
1050-                      disabled={pending}
1051:                      data-testid="ops1-gate-abandonner"
1052-                    >
1053-                      ABANDONNER
--
1060-                    onClick={() => onGate("CORRIGER")}
1061-                    disabled={pending}
1062:                    data-testid="ops1-gate-corriger"
1063-                  >
1064-                    CORRIGER
```

> Diff intégral du commit disponible : `git show 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57` (Ops1SessionScreen ~964 lignes nettes de diff ; CSS +128 ; tests UI).

## 11. Tests

| Commande | Résultat |
|----------|----------|
| vitest OPS1 ciblé (5 fichiers) | **PASS** 31/31 |
| `npm run typecheck` | **PASS** |
| `npm run lint` (`next lint`) | **PASS** — 0 warnings/errors ; notice dépréciation Next 16 |
| `npx playwright test e2e/ops1-i3-action-gate.spec.ts` | **PASS** 5/5 |
| `git diff --check` / `git diff --cached --check` | **PASS** |

## 12. Validation fonctionnelle

- Quatre gates exactes : GO, NO_GO, CORRIGER, ABANDONNER (`actionGate.ts` switch + UI testIds)
- Fixture first : create mode fixture, e2e createFixtureSession
- No execution : `refuseExecutionAttempt` → `EXECUTION_REFUSED` ; e2e « execution attempt is refused »
- Allowlist I4 : texte « allowlist exécutable reportée à I4 » ; aucun module allowlist exécutable

## 13. Validation visuelle

- Captures : `.tmp-sfia-review/screenshots-ops1-i3-ui/` (avant/après) + `screenshots-ops1-i3/` (e2e)
- Signalétique shell + fixture en I3 (plus d’OPS1 I2 / Parcours I2 obsolètes)
- `GO MORRIS — CORRECTIF UI OPS1 I3 VALIDÉ`

## 14. Commit projet

| Champ | Valeur |
|-------|--------|
| SHA | `3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57` |
| Message | `feat(sfia-studio): deliver OPS1 I3 action gate` |
| Fichiers | 15 (voir §6) |
| Amend | non |

## 15. Push projet

| Champ | Valeur |
|-------|--------|
| Branche | `origin/delivery/sfia-studio-ops1-i3-action-gate` |
| SHA distant | `3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57` (= local) |
| Mode | premier push `-u` ; pas de force |
| FF | n/a (branche nouvelle) |

## 16. Pull Request

| Champ | Valeur |
|-------|--------|
| Numéro | **#250** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/250 |
| Base | `main` |
| Head | `delivery/sfia-studio-ops1-i3-action-gate` |
| Titre | `feat(sfia-studio): deliver OPS1 I3 action gate` |
| État | **OPEN** (non draft, `mergedAt=null`) |
| Body | Summary Option B + décisions Morris + scope + behavior + UI + test plan + guardrails + réserves + rollback + décision merge distincte |

## 17. Garde-fous

- Aucun merge de la PR
- Aucune suppression de branche
- Aucune modification de `main`
- Aucune action I4 / allowlist / exécution réelle
- Aucun fichier méthode / publisher / CI dans le commit
- Aucun secret

## 18. Réserves

### Non bloquantes
- Main en avance (#249 publisher) sans overlap OPS1 — éventuel merge GitHub pourra créer un merge commit ; pas de rebase local.
- `next lint` déprécié (Next 16) — lint PASS aujourd’hui.

### Bloquantes
Aucune.

## 19. Décision Morris suivante

**GO MERGE** distinct après revue ChatGPT / Morris du handoff et de la PR #250 — **interdit** dans ce cycle.

## 20. Review Handoff (métadonnées publication)

| Champ | Valeur |
|-------|--------|
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` depuis `origin/main` |
| Worktree | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| Commit message | `docs(review-handoff): publish OPS1 I3 delivery PR review` |
| Verdict / SHA / blob | *(complétés après publication)* |

## 21. Verdict final

**PR OPEN — READY FOR CHATGPT REVIEW**

(READY FOR MERGE interdit.)
