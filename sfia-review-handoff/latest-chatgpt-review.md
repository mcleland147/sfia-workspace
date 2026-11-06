# Review Pack FULL — SFIA Studio Next R5/ML3 « Piloter et décider »

**Date/heure (UTC)** : 2026-11-06T11:41:43Z
**Cycle** : 8 — Delivery / implémentation · **Typologie** : INC · **Profil** : Critical
**Branche projet** : `sfia/next-pilotage-decisions-delivery`
**Base / HEAD** : `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (= `origin/main`, Merge PR #660)
**Push projet / PR / merge / RECETTE / STABLE** : **NON AUTORISÉS**
**Handoff** : publish-in-cycle L3 → `sfia/review-handoff` only

**Verdict** : `LOCAL ML3 DELIVERY COMPLETE — REVIEW REQUIRED`
**Pas ADOPTED / pas READY FOR REAL / NO RELEASE**

---

## 1. Git Truth Check

| Élément | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Entrée | était sur ML2 branch `54fc4e9c` ; bascule clean vers delivery |
| `origin/main` | `7f1f41c` = baseline attendue |
| PR #649/#659/#660 | MERGED (ML1/ML2/ML3-docs) |
| Branche delivery | créée depuis `origin/main@7f1f41c` ; **pas de remote tracking push** |
| Dirty | untracked `web/public/*.svg` préservés ; Review Pack local |
| Worktrees RECETTE | ML1 `:3200` / ML2 `:3210` observés — **non mutés** ; migration 007 **DEV + e2e only** |

---

## 2. Sources lues (rôle)

- Template SFIA v2.6 + routing Next Critical / Fake-Real / handoff
- ENV-01, product-versioning (NO RELEASE)
- Spec ML3 v0.4 §§1–11 + R01–R04 ; matrice 136 ; revue conception
- R2 trajectoire/décisions ; R3 audit §7 ; R4 cadrage §5.5 B01–B18
- CKI README + catalogue 15 ; contrat OBS
- Code ML1/ML2 : schema 006, session, conversation, nora-adapter, project-context

Métadonnées « candidate / NOT IMPLEMENTED » des docs ML3 = historiques post-#660 — **non bloquantes**.

---

## 3. Architecture solution

- **D6** propriétaire : `domains/decisions` (décisions, restrictions, journal)
- **D5** propriétaire : `domains/pilotage` (trajectoire, cycles, méthode, command-runner, CKI)
- Transaction : `SELECT projects FOR UPDATE` → idempotence clé+fingerprint → intention humaine unique → mutations D6+D5 → bump revision
- Transition R04 : CLOSE+OPEN **une TX** ; deux `business_command_effects` ; **pas de PARTIAL**
- CKI R01 : map type→specialty ; pin digest à l'ouverture si lisible ; ASSOCIATED/RESOLVED/DELIVERED
- Nora : `nora-context` joint guidance seulement si RESOLVED vérifié → DELIVERED
- UX : `PilotagePanel` (Figma lot B) ; #42 non rendu comme succès

---

## 4. Figma visual contract

# ML3 Figma visual contract — lot B (avant code UX)

**Fichier** : `itgvCulInEnFY6DvgIegvP` · **Session** : `93ce43a5-290b-4c2e-9e3c-fd4c81665279`
**Source** : audit R3 §7 + `index-geometrie-frames-r3.json` + metadata MCP native frame #22
**Date** : 2026-11-06

## Frames prioritaires

| # | Node | Rôle ML3 | Note |
|---|---|---|---|
| 22 | `125:33` | Trajectoire sans cycle | **Référence native lue** — 1680×970 |
| 23 | `127:35` | Qualification proposée | Maquette référence |
| 24 | `127:106` | Cycle ACTIVE + CKI | Après persistance réelle seulement |
| 28 | `127:391` | Méthode ABSENTE | État normal |
| 31 | `128:52` | Décision en vigueur | Après commit D6 |
| 33 | `128:195` | Suspension active | |
| 39 | `128:622` | CKI indisponible | Pas de faux « guidance OK » |
| 40 | `129:72` | Journal–Décisions | Lecture D6 |
| 41 | `129:144` | GO ambigu | Zéro effet |
| 47 | `131:156` | Transition combinée confirmée | Post-commit atomique |
| 54 | `143:447` | UNKNOWN / non confirmé | ACK perdu |
| 42 | `129:215` | Transition partielle | **INATTEIGNABLE ML3 interne** — ne pas rendre comme succès |

## Frame #22 — structure native (metadata)

- Canvas **1680×970**
- Rail gauche **246** (Logo, Projet, nav Travail/Projet/Journal/Trajectoire/Décisions/…)
- Barre projet **1434×65**
- En-tête (statut / titre / description)
- Contenu 2 colonnes : left **800** + right **510**
- Actions principales 3 boutons **218×38**
- Pied note

## Tokens / hiérarchie (observés)

- Typo titres page ~39px ; descriptions ~19px ; nav labels ~16px
- Espacements rail : items ~49px de pas ; padding contenu ~19–22
- Pas de carte « résultat confirmé » avant persistance (#52/#53 = attente)

## Limites

- Screenshots MCP pour #22 capturé ; autres frames : IDs + audit R3, pas toutes inspectées pixel-par-pixel ce cycle.
- Runtime UX ML3 : surfaces Pilotage/Trajectoire/Décisions intégrées au projet existant (pas duplication du rail complet Figma).
- Comparaison runtime 1680/1280/390/320 : à documenter après implémentation ; **pas de verdict pixel-perfect sans captures**.
- #42 explicitement hors rendu positif ML3 (R04).


---

## 5. Git Review Index

**Modifiés** : schema.ts (+213), db-migrate.sh, project API/page, nora-adapter/service, project-context, migrations-fresh test, delivery-history, spec §12 as-built, tracabilite preuves.

**Créés** : migration 007 ; domains decisions/ + pilotage/ ; API pilotage/decisions ; PilotagePanel ; tests unit/PG/e2e ML3.

**Diff stat (tracked vs origin/main, hors untracked)** : ~+374 / −18 sur fichiers déjà suivis ; volume principal dans untracked nouveaux modules (~3k LOC domaines+tests).

**Secrets** : aucun dans le pack. SVG untracked non embarqués.

---

## 6. Migration / DDL

- Fichier : `007_ml3_pilotage_decisions.sql`
- `schemaRevision = 007_ml3_pilotage_decisions`
- Appliqué : `sfia_next_dev` + `sfia_next_e2e` (**pas** RECETTE/STABLE)
- Invariants : unique ACTIVE cycle ; unique client key ; unique human intent ; method current unique

---

## 7. Fichiers créés

### `projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql` — FULL (175 lines)

```
-- ML3 D5/D6 — pilotage, cycles, method, human decisions, restrictions, business commands.
-- Additive and re-runnable from 006_ml2_turn_owner_token.
-- Does not create a cycle or a method when a project is created.
-- No PARTIAL: CLOSE+OPEN of an internal transition commit together or not at all.
-- DEV lane only until a later promotion gate. Never apply to RECETTE/STABLE from this script alone.

CREATE TABLE IF NOT EXISTS human_decisions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  source_kind text NOT NULL,
  source_ref text NOT NULL,
  kind text NOT NULL,
  object_ref text NOT NULL DEFAULT '',
  scope text NOT NULL DEFAULT 'PROJECT',
  statement text NOT NULL DEFAULT '',
  state text NOT NULL,
  effect_conditions text,
  supersedes_decision_id text REFERENCES human_decisions(id),
  revokes_decision_id text REFERENCES human_decisions(id),
  lifts_restriction_id text,
  effective_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS human_decisions_project_idx ON human_decisions(project_id);

CREATE TABLE IF NOT EXISTS trajectory_revisions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  revision_number integer NOT NULL,
  status text NOT NULL,
  orientation text NOT NULL,
  source_kind text NOT NULL,
  source_ref text NOT NULL DEFAULT '',
  decision_id text REFERENCES human_decisions(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT trajectory_revisions_project_rev_uidx UNIQUE (project_id, revision_number)
);
CREATE INDEX IF NOT EXISTS trajectory_revisions_project_idx ON trajectory_revisions(project_id);

CREATE TABLE IF NOT EXISTS project_pilotage_state (
  project_id text PRIMARY KEY REFERENCES projects(id),
  revision integer NOT NULL DEFAULT 0,
  current_trajectory_revision_id text REFERENCES trajectory_revisions(id),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_cycles (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  cycle_type text NOT NULL,
  objective text NOT NULL,
  status text NOT NULL,
  revision integer NOT NULL DEFAULT 1,
  opened_at timestamptz NOT NULL DEFAULT now(),
  closed_at timestamptz,
  open_decision_id text REFERENCES human_decisions(id),
  close_decision_id text REFERENCES human_decisions(id),
  cki_id text,
  cki_pinned_version text,
  cki_content_digest text,
  cki_manifest_ref text,
  cki_pin_origin text,
  balance_note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS project_cycles_one_active_uidx
  ON project_cycles(project_id) WHERE status = 'ACTIVE';
CREATE INDEX IF NOT EXISTS project_cycles_project_idx ON project_cycles(project_id);

CREATE TABLE IF NOT EXISTS method_applications (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  method_ref text NOT NULL,
  method_version text NOT NULL,
  scope text NOT NULL DEFAULT 'PROJECT',
  decision_id text NOT NULL REFERENCES human_decisions(id),
  effective_from timestamptz NOT NULL DEFAULT now(),
  effective_until timestamptz,
  close_reason text,
  is_current boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS method_applications_current_uidx
  ON method_applications(project_id, scope) WHERE is_current = true;
CREATE INDEX IF NOT EXISTS method_applications_project_idx ON method_applications(project_id);

CREATE TABLE IF NOT EXISTS governance_restrictions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  target_kind text NOT NULL,
  target_ref text NOT NULL DEFAULT '*',
  effect text NOT NULL DEFAULT 'BLOCK',
  origin_decision_id text NOT NULL REFERENCES human_decisions(id),
  lift_decision_id text REFERENCES human_decisions(id),
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  lifted_at timestamptz
);
CREATE INDEX IF NOT EXISTS governance_restrictions_project_idx
  ON governance_restrictions(project_id, status);

CREATE TABLE IF NOT EXISTS business_commands (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  actor_pilot_id text NOT NULL REFERENCES pilots(id),
  client_command_key text NOT NULL,
  fingerprint text NOT NULL,
  source_kind text NOT NULL,
  source_ref text NOT NULL,
  source_action_key text NOT NULL,
  operation text NOT NULL,
  expected_revision integer NOT NULL,
  state_revision integer,
  status text NOT NULL,
  result_json text NOT NULL DEFAULT '{}',
  decision_id text REFERENCES human_decisions(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS business_commands_client_key_uidx
  ON business_commands(project_id, actor_pilot_id, client_command_key);
CREATE UNIQUE INDEX IF NOT EXISTS business_commands_human_intent_uidx
  ON business_commands(project_id, source_kind, source_ref, source_action_key);
CREATE INDEX IF NOT EXISTS business_commands_project_idx ON business_commands(project_id);

CREATE TABLE IF NOT EXISTS business_command_effects (
  id text PRIMARY KEY,
  command_id text NOT NULL REFERENCES business_commands(id),
  project_id text NOT NULL REFERENCES projects(id),
  effect_kind text NOT NULL,
  target_ref text NOT NULL,
  outcome text NOT NULL,
  ordinal integer NOT NULL,
  detail_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS business_command_effects_command_ordinal_uidx
  ON business_command_effects(command_id, ordinal);
CREATE INDEX IF NOT EXISTS business_command_effects_command_idx
  ON business_command_effects(command_id);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'human_decisions_lifts_restriction_fkey') THEN
    ALTER TABLE human_decisions
      ADD CONSTRAINT human_decisions_lifts_restriction_fkey
      FOREIGN KEY (lifts_restriction_id) REFERENCES governance_restrictions(id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'human_decisions_state_chk') THEN
    ALTER TABLE human_decisions
      ADD CONSTRAINT human_decisions_state_chk
      CHECK (state IN ('APPLICABLE', 'REVISED', 'REVOKED', 'SUPERSEDED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'trajectory_revisions_status_chk') THEN
    ALTER TABLE trajectory_revisions
      ADD CONSTRAINT trajectory_revisions_status_chk
      CHECK (status IN ('PROPOSED', 'RETAINED', 'SUPERSEDED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'project_cycles_status_chk') THEN
    ALTER TABLE project_cycles
      ADD CONSTRAINT project_cycles_status_chk
      CHECK (status IN ('ACTIVE', 'CLOSED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'governance_restrictions_status_chk') THEN
    ALTER TABLE governance_restrictions
      ADD CONSTRAINT governance_restrictions_status_chk
      CHECK (status IN ('ACTIVE', 'LIFTED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'business_commands_status_chk') THEN
    ALTER TABLE business_commands
      ADD CONSTRAINT business_commands_status_chk
      CHECK (status IN ('APPLIED', 'REJECTED'));
  END IF;
END $$;
```

### `projects/sfia-studio-next/web/src/domains/decisions/types.ts` — FULL (37 lines)

```
/** D6 decision kinds stored on human_decisions.kind. */
export const DECISION_KINDS = [
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
] as const;

export type DecisionKind = (typeof DECISION_KINDS)[number];

export type DecisionState = "APPLICABLE" | "REVISED" | "REVOKED" | "SUPERSEDED";

/** Restriction target kinds understood by evaluateCurrentAuthority. */
export const RESTRICTION_TARGETS = ["CYCLE_MUTATION", "METHOD_USE", "PILOTAGE_EFFECT"] as const;

export type RestrictionTargetKind = (typeof RESTRICTION_TARGETS)[number];

export type AuthorityRestriction = {
  id: string;
  targetKind: string;
  targetRef: string;
  status: string;
};

export type AuthorityVerdict = {
  allowed: boolean;
  usageRestricted: boolean;
  restrictionId?: string;
  reason?: string;
};
```

### `projects/sfia-studio-next/web/src/domains/decisions/authority.ts` — FULL (71 lines)

```
import type { AuthorityRestriction, AuthorityVerdict } from "@/domains/decisions/types";

const CYCLE_OPS = new Set(["OPEN_CYCLE", "CLOSE_CYCLE", "TRANSITION_CYCLE"]);
const METHOD_OPS = new Set(["CHOOSE_METHOD", "REPLACE_METHOD", "WITHDRAW_METHOD"]);
const TRAJECTORY_OPS = new Set(["RETAIN_TRAJECTORY"]);

function active(restrictions: AuthorityRestriction[]): AuthorityRestriction[] {
  return restrictions.filter((r) => r.status === "ACTIVE");
}

function matchesMethod(targetRef: string, methodRef: string | null | undefined): boolean {
  if (targetRef === "*") return true;
  const ref = (methodRef ?? "").trim().toLowerCase();
  if (!ref) return targetRef === "*";
  return targetRef.trim().toLowerCase() === ref;
}

/**
 * Point-of-effect authority. A lifted restriction does not count.
 * METHOD_USE limits use in the projection; it does not erase the retained method
 * and it does not block a later governance act. CYCLE_MUTATION blocks cycle GO.
 * LIFT / REVOKE / APPLY / RECORD / PROPOSE stay available so the pilot can govern.
 */
export function evaluateCurrentAuthority(input: {
  operation: string;
  restrictions: AuthorityRestriction[];
  methodRef?: string | null;
}): AuthorityVerdict {
  const rows = active(input.restrictions);
  let usageRestricted = false;
  for (const r of rows) {
    if (r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, input.methodRef)) {
      usageRestricted = true;
    }
  }
  for (const r of rows) {
    if (r.targetKind === "CYCLE_MUTATION" && CYCLE_OPS.has(input.operation)) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Mutation de cycle restreinte",
      };
    }
    if (
      r.targetKind === "PILOTAGE_EFFECT" &&
      (CYCLE_OPS.has(input.operation) ||
        METHOD_OPS.has(input.operation) ||
        TRAJECTORY_OPS.has(input.operation))
    ) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Effet de pilotage restreint",
      };
    }
  }
  return { allowed: true, usageRestricted };
}

/** Projection flag: retained method whose use is restricted. Absence is not a restriction. */
export function methodUsageRestricted(
  restrictions: AuthorityRestriction[],
  methodRef: string | null | undefined,
): boolean {
  if (!methodRef) return false;
  return active(restrictions).some(
    (r) => r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, methodRef),
  );
}
```

### `projects/sfia-studio-next/web/src/domains/decisions/service.ts` — FULL (135 lines)

```
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { governanceRestrictions, humanDecisions, projects } from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

export type InsertDecisionInput = {
  projectId: string;
  pilotId: string;
  sourceKind: string;
  sourceRef: string;
  kind: string;
  objectRef: string;
  scope?: string;
  statement: string;
  supersedesDecisionId?: string | null;
  revokesDecisionId?: string | null;
  liftsRestrictionId?: string | null;
};

export async function insertHumanDecision(tx: DbTx, input: InsertDecisionInput): Promise<string> {
  const id = newId("dec");
  const now = new Date();
  await tx.insert(humanDecisions).values({
    id,
    projectId: input.projectId,
    pilotId: input.pilotId,
    sourceKind: input.sourceKind,
    sourceRef: input.sourceRef,
    kind: input.kind,
    objectRef: input.objectRef.slice(0, 300),
    scope: input.scope ?? "PROJECT",
    statement: input.statement.slice(0, 500),
    state: "APPLICABLE",
    supersedesDecisionId: input.supersedesDecisionId ?? null,
    revokesDecisionId: input.revokesDecisionId ?? null,
    liftsRestrictionId: input.liftsRestrictionId ?? null,
    effectiveAt: now,
    createdAt: now,
  });
  return id;
}

export async function markDecisionState(
  tx: DbTx,
  decisionId: string,
  state: "SUPERSEDED" | "REVOKED" | "REVISED",
): Promise<void> {
  await tx.update(humanDecisions).set({ state }).where(eq(humanDecisions.id, decisionId));
}

export async function insertRestriction(
  tx: DbTx,
  input: {
    projectId: string;
    targetKind: string;
    targetRef: string;
    originDecisionId: string;
  },
): Promise<string> {
  const id = newId("grs");
  await tx.insert(governanceRestrictions).values({
    id,
    projectId: input.projectId,
    targetKind: input.targetKind,
    targetRef: input.targetRef || "*",
    effect: "BLOCK",
    originDecisionId: input.originDecisionId,
    status: "ACTIVE",
    createdAt: new Date(),
  });
  return id;
}

export async function liftRestrictionRow(
  tx: DbTx,
  input: { projectId: string; restrictionId: string; liftDecisionId: string },
): Promise<"ok" | "missing" | "inactive"> {
  const row = (
    await tx
      .select()
      .from(governanceRestrictions)
      .where(
        and(
          eq(governanceRestrictions.id, input.restrictionId),
          eq(governanceRestrictions.projectId, input.projectId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return "missing";
  if (row.status !== "ACTIVE") return "inactive";
  await tx
    .update(governanceRestrictions)
    .set({
      status: "LIFTED",
      liftDecisionId: input.liftDecisionId,
      liftedAt: new Date(),
    })
    .where(eq(governanceRestrictions.id, row.id));
  return "ok";
}

/** Journal is a D6 projection. It does not authorize a new effect. */
export async function listDecisionJournal(pilotId: string, projectId: string) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  return db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      objectRef: humanDecisions.objectRef,
      sourceKind: humanDecisions.sourceKind,
      sourceRef: humanDecisions.sourceRef,
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
      revokesDecisionId: humanDecisions.revokesDecisionId,
      liftsRestrictionId: humanDecisions.liftsRestrictionId,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(asc(humanDecisions.createdAt));
}
```

### `projects/sfia-studio-next/web/src/domains/pilotage/types.ts` — FULL (152 lines)

```
import type { CkiAvailability } from "@/domains/pilotage/cki-resolve";
import type { CycleType } from "@/domains/pilotage/cki-resolve";

/** Internal command outcomes. PARTIAL is intentionally absent: CLOSE+OPEN share one commit. */
export const COMMAND_STATUSES = [
  "APPLIED",
  "ALREADY_APPLIED",
  "REJECTED",
  "CONFLICT",
  "UNKNOWN",
] as const;

export type CommandStatus = (typeof COMMAND_STATUSES)[number];

export const PILOTAGE_OPERATIONS = [
  "PROPOSE_TRAJECTORY",
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
] as const;

export type PilotageOperation = (typeof PILOTAGE_OPERATIONS)[number];

export const SOURCE_KINDS = ["USER_MESSAGE", "EXPLICIT_INTERACTION", "COGNITIVE_PROPOSAL"] as const;

export type SourceKind = (typeof SOURCE_KINDS)[number];

export type CommandEffectView = {
  effectKind: string;
  targetRef: string;
  outcome: string;
  ordinal: number;
};

export type CommandResult = {
  status: CommandStatus;
  commandId: string | null;
  projectId: string;
  revision: number | null;
  decisionId: string | null;
  effects: CommandEffectView[];
  reason?: string;
  reasonCode?: string;
};

export type PilotageRequestBody = {
  clientCommandKey?: string;
  expectedRevision?: number;
  operation?: string;
  utterance?: string;
  sourceKind?: string;
  sourceRef?: string;
  objective?: string;
  cycleType?: string;
  cycleId?: string;
  toCycleType?: string;
  orientation?: string;
  trajectoryRevisionId?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  restrictionId?: string;
  targetKind?: string;
  targetRef?: string;
  statement?: string;
  balanceNote?: string;
};

export type ClassifiedCommand = {
  operation: PilotageOperation;
  sourceActionKey: string;
  sourceKind: SourceKind;
  sourceRef: string;
  objective: string;
  cycleType: CycleType | null;
  cycleId: string | null;
  toCycleType: CycleType | null;
  orientation: string;
  trajectoryRevisionId: string | null;
  methodRef: string;
  methodVersion: string;
  decisionId: string | null;
  restrictionId: string | null;
  targetKind: string;
  targetRef: string;
  statement: string;
  balanceNote: string;
};

export type TrajectoryView = {
  id: string;
  revisionNumber: number;
  status: string;
  orientation: string;
  decisionId: string | null;
} | null;

export type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: TrajectoryView;
    proposed: TrajectoryView;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    revision: number;
    cki: {
      ckiId: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
      manifestRef: string | null;
      pinOrigin: string | null;
      availability: CkiAvailability;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        methodRef: string;
        methodVersion: string;
        decisionId: string;
        applicationId: string;
        scope: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

export function pilotageCommandHttpStatus(result: CommandResult): number {
  if (result.status === "CONFLICT") return 409;
  if (
    result.status === "REJECTED" &&
    (result.reasonCode === "AMBIGUOUS" || result.reasonCode === "INVALID")
  ) {
    return 400;
  }
  if (result.status === "UNKNOWN") return 503;
  return 200;
}
```

### `projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts` — FULL (193 lines)

```
import { createHash } from "crypto";
import { existsSync, readFileSync, readdirSync } from "fs";
import { resolve } from "path";

/** Initial catalogue: one cycle type, one CKI specialty. Files live in projects/sfia-studio-next/cki. */
export const CYCLE_TYPES = [
  "CADRAGE",
  "CONCEPTION_FONCTIONNELLE",
  "ARCHITECTURE_FONCTIONNELLE",
  "UX_UI",
  "BACKLOG",
  "ARCHITECTURE_TECHNIQUE",
  "INTEGRATION_DEVOPS",
  "DELIVERY",
  "QA_VALIDATION",
  "SECURITE",
  "DEPLOIEMENT_RELEASE",
  "OBSERVABILITE",
  "PR_READINESS",
  "POST_MERGE",
  "CAPITALISATION",
] as const;

export type CycleType = (typeof CYCLE_TYPES)[number];

export const CYCLE_CKI: Record<CycleType, string> = {
  CADRAGE: "01-cadrage",
  CONCEPTION_FONCTIONNELLE: "02-conception-fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "03-architecture-fonctionnelle",
  UX_UI: "04-ux-ui",
  BACKLOG: "05-backlog-user-stories",
  ARCHITECTURE_TECHNIQUE: "06-architecture-technique",
  INTEGRATION_DEVOPS: "07-integration-devops",
  DELIVERY: "08-delivery-implementation",
  QA_VALIDATION: "09-qa-validation",
  SECURITE: "10-securite-rssi",
  DEPLOIEMENT_RELEASE: "11-deploiement-release",
  OBSERVABILITE: "12-observabilite-run-readiness",
  PR_READINESS: "13-pr-readiness",
  POST_MERGE: "14-post-merge",
  CAPITALISATION: "15-capitalisation-rex",
};

/** Corpus marker validated in the CKI files. Pin only when the bytes are actually read. */
export const CKI_CORPUS_VERSION = "0.2.0";

/** ASSOCIATED = specialty linked. RESOLVED = pinned bytes checked. DELIVERED is not produced here. */
export type CkiAvailability = "ASSOCIATED" | "RESOLVED" | "UNAVAILABLE";

export type CkiDelivery = CkiAvailability | "DELIVERED";

export type CkiPin = {
  ckiId: string;
  pinnedVersion: string | null;
  contentDigest: string | null;
  manifestRef: string | null;
  pinOrigin: "OPEN_PIN" | "UNRESOLVED" | null;
  availability: CkiAvailability;
};

export function isCycleType(value: string): value is CycleType {
  return (CYCLE_TYPES as readonly string[]).includes(value);
}

export function resolveCkiDirectory(): string {
  if (process.env.SFIA_CKI_ROOT) return process.env.SFIA_CKI_ROOT;
  const candidates = [
    resolve(process.cwd(), "../cki"),
    resolve(process.cwd(), "cki"),
    resolve(process.cwd(), "projects/sfia-studio-next/cki"),
  ];
  for (const dir of candidates) {
    if (existsSync(resolve(dir, "01-cadrage.md"))) return dir;
  }
  return candidates[0];
}

export function listCkiSpecialtyFiles(dir = resolveCkiDirectory()): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => /^\d{2}-.+\.md$/.test(name))
    .sort();
}

type ReadBytes = { digest: string; version: string | null; text: string };

function readSpecialty(ckiId: string): ReadBytes | null {
  const path = resolve(resolveCkiDirectory(), `${ckiId}.md`);
  if (!existsSync(path)) return null;
  try {
    const text = readFileSync(path, "utf8");
    const digest = createHash("sha256").update(text).digest("hex");
    const version = text.includes(CKI_CORPUS_VERSION) ? CKI_CORPUS_VERSION : null;
    return { digest, version, text };
  } catch {
    return null;
  }
}

/**
 * Pin at cycle open. Readable bytes → RESOLVED with digest.
 * Unreadable specialty → ASSOCIATED, null pin. Never DELIVERED.
 */
export function resolveForOpen(cycleType: CycleType): CkiPin {
  const ckiId = CYCLE_CKI[cycleType];
  const bytes = readSpecialty(ckiId);
  if (!bytes) {
    return {
      ckiId,
      pinnedVersion: null,
      contentDigest: null,
      manifestRef: null,
      pinOrigin: "UNRESOLVED",
      availability: "ASSOCIATED",
    };
  }
  return {
    ckiId,
    pinnedVersion: bytes.version,
    contentDigest: bytes.digest,
    manifestRef: `cki/${ckiId}.md@${bytes.version ?? "unversioned"}`,
    pinOrigin: "OPEN_PIN",
    availability: "RESOLVED",
  };
}

/**
 * Re-read a pin. Same digest → RESOLVED. Divergent or missing pinned bytes → UNAVAILABLE.
 * No digest was stored → stay ASSOCIATED (do not silent-pin on a later read).
 */
export function resolvePinnedCki(pin: {
  ckiId: string | null;
  contentDigest: string | null;
  pinnedVersion: string | null;
  manifestRef?: string | null;
  pinOrigin?: string | null;
}): CkiPin {
  if (!pin.ckiId) {
    return {
      ckiId: "",
      pinnedVersion: null,
      contentDigest: null,
      manifestRef: null,
      pinOrigin: null,
      availability: "ASSOCIATED",
    };
  }
  if (!pin.contentDigest) {
    return {
      ckiId: pin.ckiId,
      pinnedVersion: null,
      contentDigest: null,
      manifestRef: pin.manifestRef ?? null,
      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "UNRESOLVED",
      availability: "ASSOCIATED",
    };
  }
  const bytes = readSpecialty(pin.ckiId);
  if (!bytes || bytes.digest !== pin.contentDigest) {
    return {
      ckiId: pin.ckiId,
      pinnedVersion: pin.pinnedVersion,
      contentDigest: pin.contentDigest,
      manifestRef: pin.manifestRef ?? null,
      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "OPEN_PIN",
      availability: "UNAVAILABLE",
    };
  }
  return {
    ckiId: pin.ckiId,
    pinnedVersion: pin.pinnedVersion ?? bytes.version,
    contentDigest: bytes.digest,
    manifestRef: pin.manifestRef ?? `cki/${pin.ckiId}.md@${pin.pinnedVersion ?? bytes.version ?? "unversioned"}`,
    pinOrigin: "OPEN_PIN",
    availability: "RESOLVED",
  };
}

/**
 * DELIVERED only when a caller has actually attached RESOLVED guidance to Nora's context.
 * This module never sets that flag by itself.
 */
export function deliveryState(availability: CkiAvailability, contentAttachedToNora: boolean): CkiDelivery {
  if (contentAttachedToNora && availability === "RESOLVED") return "DELIVERED";
  return availability;
}

/** Bytes of a pinned specialty. Null when the digest does not match — no fallback corpus. */
export function loadVerifiedCkiText(ckiId: string, expectedDigest: string): string | null {
  const bytes = readSpecialty(ckiId);
  if (!bytes || bytes.digest !== expectedDigest) return null;
  return bytes.text;
}
```

### `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts` — FULL (194 lines)

```
import type { CycleType } from "@/domains/pilotage/cki-resolve";
import type { PilotageOperation } from "@/domains/pilotage/types";

export type IntentQualification =
  | {
      clarity: "CLEAR";
      operation: PilotageOperation;
      cycleType?: CycleType;
      toCycleType?: CycleType;
      methodRef?: string;
      methodVersion?: string;
      objective?: string;
    }
  | { clarity: "AMBIGUOUS"; reason: string }
  | { clarity: "NONE"; reason: string };

const PHRASES: Array<{ type: CycleType; phrase: string }> = [
  { type: "CONCEPTION_FONCTIONNELLE", phrase: "conception fonctionnelle" },
  { type: "ARCHITECTURE_FONCTIONNELLE", phrase: "architecture fonctionnelle" },
  { type: "ARCHITECTURE_TECHNIQUE", phrase: "architecture technique" },
  { type: "INTEGRATION_DEVOPS", phrase: "intégration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "integration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "devops" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "déploiement" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "deploiement" },
  { type: "OBSERVABILITE", phrase: "observabilité" },
  { type: "OBSERVABILITE", phrase: "observabilite" },
  { type: "PR_READINESS", phrase: "pr readiness" },
  { type: "POST_MERGE", phrase: "post-merge" },
  { type: "POST_MERGE", phrase: "post merge" },
  { type: "CAPITALISATION", phrase: "capitalisation" },
  { type: "QA_VALIDATION", phrase: "validation" },
  { type: "QA_VALIDATION", phrase: "qa" },
  { type: "SECURITE", phrase: "sécurité" },
  { type: "SECURITE", phrase: "securite" },
  { type: "BACKLOG", phrase: "user stories" },
  { type: "BACKLOG", phrase: "backlog" },
  { type: "UX_UI", phrase: "ux/ui" },
  { type: "UX_UI", phrase: "ux" },
  { type: "DELIVERY", phrase: "réalisation" },
  { type: "DELIVERY", phrase: "realisation" },
  { type: "CADRAGE", phrase: "cadrage" },
];

const AMBIGUOUS_EXACT =
  /^(ok|okay|oui|d'accord|dac|vas-y|go|parfait|ça marche|ca marche)\.?$/i;

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

function escapeRe(phrase: string): string {
  return phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function cyclesMentioned(text: string): CycleType[] {
  let masked = normalize(text);
  const found: CycleType[] = [];
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const re = new RegExp(`(?:^|\\s)${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (re.test(masked)) {
      if (!found.includes(item.type)) found.push(item.type);
      masked = masked.replace(item.phrase, " ");
    }
  }
  return found;
}

function matchCyclePrefix(
  text: string,
): { type: CycleType; rest: string } | { ambiguous: true } | null {
  const n = normalize(text);
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const boundary = new RegExp(`^${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (!boundary.test(n)) continue;
    const rest = n.slice(item.phrase.length).trim();
    if (cyclesMentioned(rest).length > 0) return { ambiguous: true };
    return { type: item.type, rest };
  }
  return null;
}

function splitMethod(raw: string): { ref: string; version: string | null } {
  const text = raw.trim().replace(/[.;]+$/, "");
  const versioned = text.match(/^(.*?)(?:\s+version\s+(\S+))$/i);
  if (versioned && versioned[1].trim()) {
    return { ref: versioned[1].trim(), version: versioned[2] };
  }
  return { ref: text, version: null };
}

/**
 * Natural-language qualification. An exact "OK" / "go" is never a cycle GO.
 * Two specialties in one sentence without an explicit transition are ambiguous.
 * "Annule cette méthode" is ambiguous until the pilot names withdraw, replace, or a decision.
 */
export function qualifyPilotageIntent(utterance: string): IntentQualification {
  const text = utterance.trim().replace(/\s+/g, " ");
  if (!text) return { clarity: "AMBIGUOUS", reason: "Énoncé vide" };
  if (AMBIGUOUS_EXACT.test(text)) return { clarity: "AMBIGUOUS", reason: "Énoncé insuffisant" };
  if (
    /\b(annule|annuler|révoque|revoque)\b/i.test(text) &&
    !/\b(retire|retirer|remplace|remplacer)\b/i.test(text)
  ) {
    return { clarity: "AMBIGUOUS", reason: "Cible d'annulation ambiguë" };
  }

  const transition = text.match(
    /cl[oô]ture(?:r)?\s+(?:le\s+)?cycle\s+(.+?)\s+et\s+ouvre(?:r)?\s+(?:le\s+)?cycle\s+(.+)$/i,
  );
  if (transition) {
    const from = matchCyclePrefix(transition[1]);
    const to = matchCyclePrefix(transition[2]);
    if (!from || "ambiguous" in from || !to || "ambiguous" in to || from.type === to.type) {
      return { clarity: "AMBIGUOUS", reason: "Transition ambiguë" };
    }
    return {
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: from.type,
      toCycleType: to.type,
      objective: text,
    };
  }

  const replace = text.match(
    /remplace(?:r)?\s+(?:la\s+)?méthode\s+(.+?)\s+par\s+(?:la\s+méthode\s+)?(.+)$/i,
  );
  if (replace) {
    const next = splitMethod(replace[2]);
    if (!next.ref) return { clarity: "AMBIGUOUS", reason: "Méthode de remplacement non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "REPLACE_METHOD",
      methodRef: next.ref,
      methodVersion: next.version ?? "",
      objective: text,
    };
  }

  if (/retire(?:r)?\s+(?:la\s+)?méthode|sans méthode|plus de méthode/i.test(text)) {
    return { clarity: "CLEAR", operation: "WITHDRAW_METHOD", objective: text };
  }

  const choose = text.match(
    /(?:retiens|retenir|choisis|choisir|adopte|adopter)\s+(?:la\s+)?méthode\s+(.+)$/i,
  );
  if (choose) {
    const method = splitMethod(choose[1]);
    if (!method.ref) return { clarity: "AMBIGUOUS", reason: "Méthode non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "CHOOSE_METHOD",
      methodRef: method.ref,
      methodVersion: method.version ?? "",
      objective: text,
    };
  }

  const open = text.match(
    /^(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?(.+)$/i,
  );
  if (open) {
    const matched = matchCyclePrefix(open[1]);
    if (!matched || "ambiguous" in matched) {
      return { clarity: "AMBIGUOUS", reason: "Type de cycle ambigu" };
    }
    return {
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: matched.type,
      objective: matched.rest || `Cycle ${matched.type}`,
    };
  }

  const close = text.match(
    /^(?:cl[oô]ture|cl[oô]turer|clore|ferme|fermer)\s+(?:le\s+)?cycle(?:\s+(.+))?$/i,
  );
  if (close) {
    if (!close[1]) return { clarity: "CLEAR", operation: "CLOSE_CYCLE", objective: text };
    const matched = matchCyclePrefix(close[1]);
    if (!matched || "ambiguous" in matched) {
      return { clarity: "AMBIGUOUS", reason: "Clôture ambiguë" };
    }
    return { clarity: "CLEAR", operation: "CLOSE_CYCLE", cycleType: matched.type, objective: text };
  }

  if (cyclesMentioned(text).length >= 2) {
    return { clarity: "AMBIGUOUS", reason: "Plusieurs cycles cités" };
  }
  return { clarity: "NONE", reason: "Intention non reconnue" };
}
```

### `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts` — EXCERPT 1–120 / 496 lines (§7.6)

```
import { createHash } from "crypto";
import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommandEffects, businessCommands, governanceRestrictions, projectPilotageState } from "@/db/schema";
import { evaluateCurrentAuthority } from "@/domains/decisions/authority";
import type { ClassifiedCommand, CommandResult, PilotageRequestBody } from "@/domains/pilotage/types";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

export type DbTx = Parameters<Parameters<typeof db.transaction>[0]>[0];

export type ClientEnvelope = {
  pilotId: string;
  projectId: string;
  body: PilotageRequestBody;
};

export type ClassifyResult =
  | { ok: true; command: ClassifiedCommand }
  | { ok: false; reasonCode: string; reason: string; sourceActionKey: string };

export type EffectDraft = {
  effectKind: string;
  targetRef: string;
  outcome?: string;
  detail?: unknown;
};

export type MutateResult =
  | { kind: "APPLIED"; decisionId: string | null; revision: number; effects: EffectDraft[] }
  | { kind: "REJECTED"; reasonCode: string; reason: string; persist: boolean }
  | { kind: "CONFLICT"; reasonCode: string; reason: string };

type CommandRow = typeof businessCommands.$inferSelect;
type EffectRow = typeof businessCommandEffects.$inferSelect;

function asRows<T>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[];
  if (result && typeof result === "object" && Array.isArray((result as { rows?: T[] }).rows)) {
    return (result as { rows: T[] }).rows;
  }
  return [];
}

function errorText(e: unknown): string {
  if (e instanceof Error) {
    const cause = "cause" in e ? errorText(e.cause) : "";
    return `${e.message} ${cause}`;
  }
  return "";
}

function pgCode(e: unknown): string | undefined {
  if (!e || typeof e !== "object") return undefined;
  const code = (e as { code?: unknown }).code;
  if (typeof code === "string" && /^[0-9A-Z]{5}$/.test(code)) return code;
  if ("cause" in e) return pgCode((e as { cause?: unknown }).cause);
  return undefined;
}

export function commandFingerprint(input: ClientEnvelope): string {
  const b = input.body;
  const canonical = JSON.stringify({
    balanceNote: (b.balanceNote ?? "").trim(),
    cycleId: b.cycleId ?? "",
    cycleType: b.cycleType ?? "",
    decisionId: b.decisionId ?? "",
    expectedRevision: b.expectedRevision,
    methodRef: (b.methodRef ?? "").trim(),
    methodVersion: (b.methodVersion ?? "").trim(),
    objective: (b.objective ?? "").trim(),
    operation: b.operation ?? "",
    orientation: (b.orientation ?? "").trim(),
    projectId: input.projectId,
    restrictionId: b.restrictionId ?? "",
    sourceKind: b.sourceKind ?? "",
    sourceRef: b.sourceRef ?? "",
    statement: (b.statement ?? "").trim(),
    targetKind: b.targetKind ?? "",
    targetRef: (b.targetRef ?? "").trim(),
    toCycleType: b.toCycleType ?? "",
    trajectoryRevisionId: b.trajectoryRevisionId ?? "",
    utterance: (b.utterance ?? "").trim(),
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function buildSourceActionKey(input: {
  operation: string;
  cycleType?: string | null;
  toCycleType?: string | null;
  methodRef?: string | null;
  methodVersion?: string | null;
  decisionId?: string | null;
  trajectoryRevisionId?: string | null;
  targetKind?: string | null;
  targetRef?: string | null;
  restrictionId?: string | null;
}): string {
  return [
    input.operation,
    input.cycleType ?? "",
    input.toCycleType ?? "",
    (input.methodRef ?? "").trim().toLowerCase(),
    (input.methodVersion ?? "").trim(),
    input.decisionId ?? "",
    input.trajectoryRevisionId ?? "",
    input.targetKind ?? "",
    (input.targetRef ?? "").trim().toLowerCase(),
    input.restrictionId ?? "",
  ].join("|");
}

function parseResultJson(raw: string): { reason?: string; reasonCode?: string } {
  try {
    const value = JSON.parse(raw) as { reason?: string; reasonCode?: string };
    return value ?? {};
  } catch {
    return {};
  }

… [truncated for pack size — 376 further lines in `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts` — SFIA §7.6 volume exception; ChatGPT must read Git worktree file for remainder]

```

### `projects/sfia-studio-next/web/src/domains/pilotage/service.ts` — EXCERPT 1–120 / 1081 lines (§7.6)

```
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  conversations,
  governanceRestrictions,
  humanDecisions,
  messages,
  methodApplications,
  projectCycles,
  projectPilotageState,
  projects,
  trajectoryRevisions,
} from "@/db/schema";
import { RESTRICTION_TARGETS, type RestrictionTargetKind } from "@/domains/decisions/types";
import { methodUsageRestricted } from "@/domains/decisions/authority";
import {
  insertHumanDecision,
  insertRestriction,
  liftRestrictionRow,
  markDecisionState,
} from "@/domains/decisions/service";
import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
import {
  buildSourceActionKey,
  runBusinessCommand,
  toCommandResult,
  type ClassifyResult,
  type ClientEnvelope,
  type DbTx,
  type MutateResult,
} from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent, type IntentQualification } from "@/domains/pilotage/intent";
import {
  PILOTAGE_OPERATIONS,
  SOURCE_KINDS,
  type ClassifiedCommand,
  type PilotageOperation,
  type PilotageProjection,
  type PilotageRequestBody,
  type SourceKind,
  type TrajectoryView,
} from "@/domains/pilotage/types";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

/** Test-only fault between CLOSE and OPEN. A throw rolls back both effects. */
export const pilotageFault: { afterCloseBeforeOpen: null | (() => void) } = {
  afterCloseBeforeOpen: null,
};

type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }>;

function rejected(reasonCode: string, reason: string): MutateResult {
  return { kind: "REJECTED", reasonCode, reason, persist: true };
}

async function bumpRevision(
  tx: DbTx,
  projectId: string,
  pointer?: { id: string | null },
): Promise<number> {
  const row = (
    await tx
      .select()
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  const now = new Date();
  if (!row) {
    await tx.insert(projectPilotageState).values({
      projectId,
      revision: 1,
      currentTrajectoryRevisionId: pointer ? pointer.id : null,
      updatedAt: now,
    });
    return 1;
  }
  const revision = row.revision + 1;
  await tx
    .update(projectPilotageState)
    .set({
      revision,
      updatedAt: now,
      ...(pointer ? { currentTrajectoryRevisionId: pointer.id } : {}),
    })
    .where(eq(projectPilotageState.projectId, projectId));
  return revision;
}

async function nextTrajectoryNumber(tx: DbTx, projectId: string): Promise<number> {
  const last = (
    await tx
      .select({ n: trajectoryRevisions.revisionNumber })
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];
  return (last?.n ?? 0) + 1;
}

async function activeCycle(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")))
      .limit(1)
  )[0];
}

async function currentMethod(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(methodApplications)
      .where(and(eq(methodApplications.projectId, projectId), eq(methodApplications.isCurrent, true)))

… [truncated for pack size — 961 further lines in `projects/sfia-studio-next/web/src/domains/pilotage/service.ts` — SFIA §7.6 volume exception; ChatGPT must read Git worktree file for remainder]

```

### `projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts` — FULL (131 lines)

```
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparationProjectLinks } from "@/db/schema";
import {
  deliveryState,
  loadVerifiedCkiText,
  type CkiDelivery,
} from "@/domains/pilotage/cki-resolve";
import { getPilotageProjection } from "@/domains/pilotage/service";

export type NoraPilotageContext = {
  snippets: string[];
  /** True only when RESOLVED CKI bytes were attached to the prompt. */
  ckiContentAttached: boolean;
  ckiDelivery: CkiDelivery | "NONE";
  projectId: string | null;
};

/**
 * Build bounded D5/D6 + CKI guidance snippets for Nora.
 * Never elevates CKI to authority. DELIVERED only when verified text is attached.
 */
export async function buildNoraPilotageContext(
  pilotId: string,
  preparationId: string,
): Promise<NoraPilotageContext> {
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];

  if (!link) {
    return {
      snippets: [
        "### Pilotage D5/D6",
        "(préparation sans projet — pas de cycle/méthode/CKI ; Nora reste générale)",
      ],
      ckiContentAttached: false,
      ckiDelivery: "NONE",
      projectId: null,
    };
  }

  const projection = await getPilotageProjection(pilotId, link.projectId);
  const snippets: string[] = [
    "### Pilotage D5/D6 (projection — pas d'autorité)",
    `projet=${projection.projectId} revision=${projection.revision}`,
  ];

  if (!projection.cycle) {
    snippets.push("cycle=ABSENT (état normal) — aucune spécialité CKI imposée");
  } else {
    const c = projection.cycle;
    snippets.push(
      `cycle=${c.id} type=${c.cycleType} status=${c.status} objective=${c.objective.slice(0, 200)}`,
      `cki specialty=${c.cki.ckiId} availability=${c.cki.availability} pin=${c.cki.pinnedVersion ?? "∅"} digest=${c.cki.contentDigest?.slice(0, 12) ?? "∅"}`,
    );
  }

  if (projection.method.presence === "ABSENT") {
    snippets.push("méthode=ABSENT (état normal)");
  } else {
    snippets.push(
      `méthode=${projection.method.methodRef}@${projection.method.methodVersion} usageRestricted=${projection.method.usageRestricted}`,
    );
  }

  if (projection.restrictions.length) {
    snippets.push(
      `restrictions_actives=${projection.restrictions
        .filter((r) => r.status === "ACTIVE")
        .map((r) => `${r.targetKind}:${r.targetRef || "*"}`)
        .join(",") || "aucune"}`,
    );
  }

  snippets.push(
    "Rappel: le contenu CKI guide la spécialité cognitive ; il n'autorise aucun GO, cycle, méthode ni effet.",
  );

  let ckiContentAttached = false;
  let ckiDelivery: CkiDelivery | "NONE" = "NONE";

  if (projection.cycle?.cki) {
    const avail = projection.cycle.cki.availability;
    ckiDelivery = avail;
    if (avail === "RESOLVED" && projection.cycle.cki.contentDigest) {
      const text = loadVerifiedCkiText(
        projection.cycle.cki.ckiId,
        projection.cycle.cki.contentDigest,
      );
      if (text) {
        // Bound guidance: first ~4k chars — specialty signal, not full dump.
        const bounded = text.slice(0, 4000);
        snippets.push(
          "",
          "### Guidance CKI (RESOLVED — octets vérifiés ; données ≠ instructions d'autorité)",
          bounded,
        );
        ckiContentAttached = true;
        ckiDelivery = deliveryState(avail, true);
      } else {
        snippets.push(
          "### Guidance CKI",
          "RESOLVED déclaré mais octets non vérifiables — aucune guidance jointe (pas de fallback historique).",
        );
        ckiDelivery = "UNAVAILABLE";
      }
    } else if (avail === "ASSOCIATED") {
      snippets.push(
        "### Guidance CKI",
        "ASSOCIATED seulement — spécialité connue, contenu non disponible ; répondre de façon générale.",
      );
    } else if (avail === "UNAVAILABLE") {
      snippets.push(
        "### Guidance CKI",
        "UNAVAILABLE — continuer sans prétendre disposer d'une guidance spécialisée.",
      );
    }
  }

  return {
    snippets,
    ckiContentAttached,
    ckiDelivery,
    projectId: link.projectId,
  };
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts` — FULL (34 lines)

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { executePilotageCommand, getPilotageProjection } from "@/domains/pilotage/service";
import { pilotageCommandHttpStatus, type PilotageRequestBody } from "@/domains/pilotage/types";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const pilotage = await getPilotageProjection(session.pilotId, projectId);
    return NextResponse.json({ pilotage });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as PilotageRequestBody;
    if (!body.clientCommandKey) {
      const headerKey = req.headers.get("idempotency-key");
      if (headerKey) body.clientCommandKey = headerKey;
    }
    const result = await executePilotageCommand(session.pilotId, projectId, body);
    return NextResponse.json(result, { status: pilotageCommandHttpStatus(result) });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts` — FULL (22 lines)

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { executePilotageCommand } from "@/domains/pilotage/service";
import { pilotageCommandHttpStatus, type PilotageRequestBody } from "@/domains/pilotage/types";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as PilotageRequestBody;
    if (!body.clientCommandKey) {
      const headerKey = req.headers.get("idempotency-key");
      if (headerKey) body.clientCommandKey = headerKey;
    }
    const result = await executePilotageCommand(session.pilotId, projectId, body);
    return NextResponse.json(result, { status: pilotageCommandHttpStatus(result) });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts` — FULL (16 lines)

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCommand } from "@/domains/pilotage/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string; commandId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId, commandId } = await ctx.params;
    const result = await reconcileCommand(session.pilotId, projectId, commandId);
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts` — FULL (16 lines)

```
import { NextResponse } from "next/server";
import { listDecisionJournal } from "@/domains/decisions/service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const decisions = await listDecisionJournal(session.pilotId, projectId);
    return NextResponse.json({ decisions });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `projects/sfia-studio-next/web/src/components/PilotagePanel.tsx` — EXCERPT 1–120 / 388 lines (§7.6)

```
"use client";

import { useCallback, useEffect, useState } from "react";

type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: { id: string; revisionNumber: number; orientation: string } | null;
    proposed: { id: string; revisionNumber: number; orientation: string } | null;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    cki: {
      ckiId: string;
      availability: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        methodRef: string;
        methodVersion: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

type DecisionRow = {
  id: string;
  kind: string;
  statement: string;
  validity: string;
  createdAt: string;
};

type CommandResult = {
  status: string;
  commandId: string | null;
  revision: number | null;
  reason?: string;
  reasonCode?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

/**
 * Surfaces ML3 Pilotage (Figma lot B #22/#24/#28/#40/#41/#39) — états honnêtes.
 * Jamais d'effet présenté comme confirmé avant réponse serveur APPLIED/ALREADY_APPLIED.
 */
export function PilotagePanel({ projectId }: { projectId: string }) {
  const [projection, setProjection] = useState<PilotageProjection | null>(null);
  const [decisions, setDecisions] = useState<DecisionRow[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [pendingLabel, setPendingLabel] = useState<string | null>(null);
  const [cycleType, setCycleType] = useState("UX_UI");
  const [objective, setObjective] = useState("Qualifier l'expérience Pilote–Nora");
  const [methodRef, setMethodRef] = useState("sfia-fast-track");
  const [methodVersion, setMethodVersion] = useState("2.6");
  const [utterance, setUtterance] = useState("");

  const load = useCallback(async () => {
    const [pRes, dRes] = await Promise.all([
      fetch(`/api/projects/${projectId}/pilotage`),
      fetch(`/api/projects/${projectId}/decisions`),
    ]);
    if (pRes.status === 401 || dRes.status === 401) {
      setError("Session requise");
      return;
    }
    if (!pRes.ok) {
      setError("Impossible de charger le pilotage");
      return;
    }
    const pj = await pRes.json();
    setProjection(pj.pilotage ?? pj);
    if (dRes.ok) {
      const dj = await dRes.json();
      setDecisions(dj.decisions ?? []);
    }
    setError("");
  }, [projectId]);

  useEffect(() => {
    void load();
  }, [load]);

  async function runCommand(body: Record<string, unknown>, pending: string) {
    setBusy(true);
    setPendingLabel(pending);
    setStatus("");
    const key = `cmd_${crypto.randomUUID()}`;
    const res = await fetch(`/api/projects/${projectId}/pilotage/commands`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": key,
      },
      body: JSON.stringify({
        clientCommandKey: key,
        expectedRevision: projection?.revision,
        ...body,
      }),
    });
    const j = (await res.json()) as CommandResult & { error?: string };
    setBusy(false);
    setPendingLabel(null);
    if (!res.ok && !j.status) {
      setStatus(j.error ?? `HTTP ${res.status}`);
      return;
    }
    setStatus(
      `${j.status}${j.reasonCode ? ` · ${j.reasonCode}` : ""}${j.reason ? ` — ${j.reason}` : ""}`,

… [truncated for pack size — 268 further lines in `projects/sfia-studio-next/web/src/components/PilotagePanel.tsx` — SFIA §7.6 volume exception; ChatGPT must read Git worktree file for remainder]

```

### `projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts` — FULL (95 lines)

```
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { resolve } from "path";
import { describe, expect, it } from "vitest";
import { schemaRevision } from "@/db/schema";
import {
  CYCLE_CKI,
  CYCLE_TYPES,
  deliveryState,
  listCkiSpecialtyFiles,
  resolveForOpen,
  resolvePinnedCki,
} from "@/domains/pilotage/cki-resolve";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import { COMMAND_STATUSES } from "@/domains/pilotage/types";

describe("ml3 CKI resolution and intent", () => {
  it("records schema revision 007", () => {
    expect(schemaRevision).toBe("007_ml3_pilotage_decisions");
    expect(COMMAND_STATUSES).toEqual([
      "APPLIED",
      "ALREADY_APPLIED",
      "REJECTED",
      "CONFLICT",
      "UNKNOWN",
    ]);
  });

  it("maps each cycle type to one CKI specialty file", () => {
    const files = listCkiSpecialtyFiles();
    expect(CYCLE_TYPES).toHaveLength(15);
    expect(files).toHaveLength(15);
    expect(new Set(CYCLE_TYPES.map((type) => `${CYCLE_CKI[type]}.md`))).toEqual(new Set(files));
  });

  it("pins a readable specialty as RESOLVED and delivers only when Nora attaches it", () => {
    const pin = resolveForOpen("CADRAGE");
    expect(pin.ckiId).toBe("01-cadrage");
    expect(pin.availability).toBe("RESOLVED");
    expect(pin.pinnedVersion).toBe("0.2.0");
    expect(pin.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    const bytes = readFileSync(resolve(process.cwd(), "../cki/01-cadrage.md"));
    expect(pin.contentDigest).toBe(createHash("sha256").update(bytes).digest("hex"));
    expect(deliveryState(pin.availability, false)).toBe("RESOLVED");
    expect(deliveryState("RESOLVED", true)).toBe("DELIVERED");
    expect(deliveryState("ASSOCIATED", true)).toBe("ASSOCIATED");
  });

  it("stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges", () => {
    expect(
      resolvePinnedCki({ ckiId: "01-cadrage", contentDigest: null, pinnedVersion: null }).availability,
    ).toBe("ASSOCIATED");
    expect(
      resolvePinnedCki({
        ckiId: "01-cadrage",
        contentDigest: "ab".repeat(32),
        pinnedVersion: "0.2.0",
      }).availability,
    ).toBe("UNAVAILABLE");

    const previous = process.env.SFIA_CKI_ROOT;
    process.env.SFIA_CKI_ROOT = "/tmp/sfia-cki-missing-ml3";
    try {
      const pin = resolveForOpen("SECURITE");
      expect(pin.ckiId).toBe("10-securite-rssi");
      expect(pin.availability).toBe("ASSOCIATED");
      expect(pin.contentDigest).toBeNull();
      expect(pin.pinnedVersion).toBeNull();
    } finally {
      if (previous === undefined) delete process.env.SFIA_CKI_ROOT;
      else process.env.SFIA_CKI_ROOT = previous;
    }
  });

  it("qualifies a clear GO and rejects ambiguous utterances", () => {
    expect(qualifyPilotageIntent("ouvre le cycle cadrage")).toMatchObject({
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("annule cette méthode").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("retire la méthode")).toMatchObject({
      clarity: "CLEAR",
      operation: "WITHDRAW_METHOD",
    });
    expect(qualifyPilotageIntent("clôture le cycle cadrage et ouvre le cycle ux")).toMatchObject({
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: "CADRAGE",
      toCycleType: "UX_UI",
    });
    expect(qualifyPilotageIntent("ouvre le cycle cadrage et le cycle sécurité").clarity).toBe("AMBIGUOUS");
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts` — FULL (47 lines)

```
import { describe, expect, it } from "vitest";
import { evaluateCurrentAuthority, methodUsageRestricted } from "@/domains/decisions/authority";

describe("ml3 authority restrictions", () => {
  const cycleBlock = {
    id: "r-cycle",
    targetKind: "CYCLE_MUTATION",
    targetRef: "*",
    status: "ACTIVE",
  };

  it("blocks cycle mutations and still allows a lift", () => {
    expect(evaluateCurrentAuthority({ operation: "OPEN_CYCLE", restrictions: [cycleBlock] }).allowed).toBe(
      false,
    );
    expect(
      evaluateCurrentAuthority({ operation: "TRANSITION_CYCLE", restrictions: [cycleBlock] }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({ operation: "LIFT_RESTRICTION", restrictions: [cycleBlock] }).allowed,
    ).toBe(true);
    expect(
      evaluateCurrentAuthority({
        operation: "OPEN_CYCLE",
        restrictions: [{ ...cycleBlock, status: "LIFTED" }],
      }).allowed,
    ).toBe(true);
  });

  it("marks method use as restricted without treating that as erasure or a cycle block", () => {
    const methodUse = {
      id: "r-method",
      targetKind: "METHOD_USE",
      targetRef: "Scrum",
      status: "ACTIVE",
    };
    expect(methodUsageRestricted([methodUse], "Scrum")).toBe(true);
    expect(methodUsageRestricted([methodUse], "Kanban")).toBe(false);
    const verdict = evaluateCurrentAuthority({
      operation: "OPEN_CYCLE",
      restrictions: [methodUse],
      methodRef: "Scrum",
    });
    expect(verdict.allowed).toBe(true);
    expect(verdict.usageRestricted).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts` — EXCERPT 1–120 / 475 lines (§7.6)

```
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  methodApplications,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import { listDecisionJournal } from "@/domains/decisions/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyGovernanceRestriction,
  chooseMethod,
  executePilotageCommand,
  getPilotageProjection,
  liftGovernanceRestriction,
  openCycle,
  pilotageFault,
  proposeTrajectory,
  reconcileCommand,
  replaceMethod,
  retainTrajectory,
  revokeFoundingDecision,
  transitionCycle,
  withdrawMethod,
} from "@/domains/pilotage/service";
import { newId } from "@/lib/ids";

async function seedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

async function insertUserMessage(preparationId: string, content: string) {
  const conv = (
    await db.select().from(conversations).where(eq(conversations.preparationId, preparationId)).limit(1)
  )[0];
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: "user",
    content,
    status: "COMPLETE",
    ordinal: 1,
  });
  return id;
}

describe("PostgreSQL ML3 pilotage and decisions", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  });

  it("starts empty: no cycle, no method, no retained trajectory", async () => {
    const { pilotId, projectId } = await seedProject("empty");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.revision).toBe(0);
    expect(view.cycle).toBeNull();
    expect(view.method).toEqual({ presence: "ABSENT", usageRestricted: false });
    expect(view.trajectory.retained).toBeNull();
    expect(view.trajectory.proposed).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
  });

  it("propose stays non-authoritative until an explicit retain", async () => {
    const { pilotId, projectId } = await seedProject("traj");
    const proposed = await proposeTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      orientation: "Explorer le cadrage avant de construire",
    });
    expect(proposed.status).toBe("APPLIED");
    expect(proposed.decisionId).toBeNull();
    const mid = await getPilotageProjection(pilotId, projectId);
    expect(mid.trajectory.proposed?.orientation).toContain("cadrage");
    expect(mid.trajectory.retained).toBeNull();
    expect(mid.cycle).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);

    const retained = await retainTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: mid.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: mid.trajectory.proposed?.id,
    });
    expect(retained.status).toBe("APPLIED");
    expect(retained.decisionId).toBeTruthy();
    const after = await getPilotageProjection(pilotId, projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.cycle).toBeNull();
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.map((d) => d.kind)).toEqual(["RETAIN_TRAJECTORY"]);
  });

  it("opens one cycle on an explicit GO and pins the cadrage CKI", async () => {
    const { pilotId, projectId } = await seedProject("open");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),

… [truncated for pack size — 355 further lines in `projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts` — SFIA §7.6 volume exception; ChatGPT must read Git worktree file for remainder]

```

### `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts` — FULL (45 lines)

```
import { test, expect } from "@playwright/test";
import path from "path";

/**
 * ML3 browser FAKE — pilotage surfaces. LIVE Nora forbidden in E2E.
 * Does not claim pixel-perfect Figma conformity.
 */
test("ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 e2e seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 Pilotage");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e ml3");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("pilotage-panel")).toBeVisible();
  await expect(page.getByTestId("cycle-absent")).toBeVisible();
  await expect(page.getByTestId("method-absent")).toBeVisible();

  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-pending")).toBeVisible();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);

  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("method-retained")).toBeVisible({ timeout: 15000 });

  const shot = path.join("tests/e2e/artifacts", `ml3-pilotage-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
```


---

## 8. Fichiers modifiés (extraits utiles)

### `schema.ts` — tables ML3 + schemaRevision

Voir worktree : ajouts `projectPilotageState`, `trajectoryRevisions`, `projectCycles`, `methodApplications`, `humanDecisions`, `governanceRestrictions`, `businessCommands`, `businessCommandEffects` ; `schemaRevision = "007_ml3_pilotage_decisions"`.

### `nora-adapter.ts` / `service.ts`

- Input `pilotageSnippets` + `ckiDelivery`
- Prompt section Pilotage/CKI
- `buildNoraPilotageContext` avant `generateNoraReply`

### Docs

- `specification-technique.md` §12 As-built
- `tracabilite-r2-r3-r4.md` preuves B01–B18
- `delivery-history.md` DELIV-2026-11-06-ML3-…-14

---

## 9. Matrice QA B01–B18 / preuves

| Suite | Résultat exact |
|---|---|
| `tsc --noEmit` | PASS |
| unit (vitest) | **59 passed** |
| integration PG | **103 passed** (dont ML3 + fresh 001→007) |
| Total unit+PG | **162 passed** |
| Playwright FAKE | ml1 ✓ · ml2 ✓ · **ml3 ✓** (3/3 when full suite earlier 2+1) |
| lint | PASS (warnings preexistants modelApplied unused) |
| build | PASS |
| LIVE Nora | **NOT EXECUTED — GATE MORRIS REQUIRED** |
| RECETTE ML3 | **NOT AVAILABLE** (pas de candidat gelé / pas de GO) |

Couverture B01–B18 : mapping dans `tracabilite-r2-r3-r4.md` annex preuves ; assertions concentrées dans `ml3-pilotage.pg.test.ts` + unit CKI/authority + e2e surface.

---

## 10. Fake/Real Qualification

| Frontière | Niveau |
|---|---|
| PostgreSQL DEV/e2e | REAL local (tests) |
| Session DEV test login | FAKE/REAL boundary test |
| Playwright | BROWSER FAKE |
| Nora fixture | DETERMINISTIC |
| Nora LIVE fournisseur | NOT EXECUTED |
| OAuth GitHub | NOT PROVEN |
| Figma native | #22 metadata+screenshot ; runtime e2e screenshot — **pas pixel-perfect claim** |

---

## 11. Impact ML1/ML2 / dettes

- Régression ML1/ML2 e2e PASS
- Blast radius AUTH/D3/D4 maîtrisé ; humanDecisionCreated reste false côté tour D3 (actes D6 via API pilotage)
- Dettes : LIVE Nora ; RECETTE SHA ; Roadmap snapshot ML2 obsolète (KNOWN GAP, pas modifié) ; responsive 390/320 non exhaustif ; #42 volontairement non positif

**Exit dettes** : GO Morris LIVE borné ; GO RECETTE ; doc Roadmap sous mandat distinct.

---

## 12. Arbitrages Morris encore nécessaires

1. Revue contenu delivery + handoff
2. Autorisation commit/push/PR projet (non accordée ici)
3. LIVE Nora borné si qualification cognitive requise
4. Activation RECETTE ML3 isolée
5. Merge/promotion ultérieurs

---

## 13. Instruction ChatGPT

- Relire ce handoff distant `sfia-review-handoff/latest-chatgpt-review.md`
- Vérifier Git Truth `sfia/next-pilotage-decisions-delivery` @ `7f1f41c` (travail local uncommitted jusqu'à GO commit)
- Lire sources ML3 + code D5/D6 + preuves tests
- **Aucun GO push/PR/merge/promotion** dans ce cycle

---

## 14. Verdict

`LOCAL ML3 DELIVERY COMPLETE — REVIEW REQUIRED`
