import { sql } from "@/db/client";
import { StudioError } from "@/lib/http-errors";

export type OwnedSpaceType = "project" | "preparation";

const NONE = "__none__";

let interruptBeforeCommit = false;

/** One-shot test seam. The transaction has already deleted rows and must roll them back. */
export function failNextSpaceDeletionBeforeCommitForTests() {
  interruptBeforeCommit = true;
}

function blocked(message: string): never {
  throw new StudioError("CONFLICT", message, { httpStatus: 409 });
}

/**
 * Permanently delete one owned project, or one open unattached preparation.
 * The caller must be the authenticated owner. Shared accounts, repositories,
 * authorizations and provider snapshots are left untouched.
 */
export async function deleteOwnedSpace(
  ownerPilotId: string,
  spaceType: OwnedSpaceType,
  spaceId: string,
): Promise<{ deleted: true; spaceType: OwnedSpaceType; spaceId: string }> {
  const interrupt = interruptBeforeCommit;
  interruptBeforeCommit = false;
  return sql.begin(async (tx) => {
    const preps: string[] = [];
    let projectId = NONE;
    if (spaceType === "project") {
      const project = await tx<{ id: string }[]>`
        SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${ownerPilotId} FOR UPDATE
      `;
      if (!project[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
      projectId = project[0].id;
      const links = await tx<{ preparation_id: string }[]>`
        SELECT preparation_id FROM preparation_project_links WHERE project_id = ${projectId} FOR UPDATE
      `;
      for (const link of links) preps.push(link.preparation_id);
      if (preps.length) {
        const locked = await tx<{ id: string; owner_pilot_id: string }[]>`
          SELECT id, owner_pilot_id FROM preparations WHERE id = ANY(${preps}) FOR UPDATE
        `;
        if (locked.length !== preps.length || locked.some((row) => row.owner_pilot_id !== ownerPilotId)) {
          blocked("La préparation liée n'appartient pas au même Pilote.");
        }
      }
    } else {
      const preparation = await tx<{ id: string; status: string }[]>`
        SELECT id, status FROM preparations
        WHERE id = ${spaceId} AND owner_pilot_id = ${ownerPilotId}
        FOR UPDATE
      `;
      if (!preparation[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
      if (preparation[0].status !== "OPEN") {
        blocked("Seule une préparation ouverte et autonome peut être supprimée.");
      }
      const link = await tx<{ project_id: string }[]>`
        SELECT project_id FROM preparation_project_links WHERE preparation_id = ${spaceId} FOR UPDATE
      `;
      if (link[0]) blocked("Cette préparation est rattachée à un projet. Supprimez le projet pour effacer l'ensemble.");
      preps.push(preparation[0].id);
    }

    const scope = preps.length ? preps : [NONE];
    await assertExclusive(tx as unknown as typeof sql, scope, projectId);
    await assertIdle(tx as unknown as typeof sql, scope, projectId);

    await tx`SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
    await tx`SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
    await tx`SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;

    await tx`
      UPDATE document_revisions SET base_revision_id = NULL
      WHERE document_id IN (
        SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      UPDATE knowledge_acquis SET supersedes_acquis_id = NULL
      WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
    `;
    await tx`
      UPDATE knowledge_subjects
      SET parent_subject_id = NULL, originated_from_subject_id = NULL
      WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
    `;
    await tx`
      UPDATE human_decisions
      SET revokes_decision_id = NULL, supersedes_decision_id = NULL, lifts_restriction_id = NULL
      WHERE project_id = ${projectId}
    `;
    await tx`UPDATE governance_restrictions SET lift_decision_id = NULL WHERE project_id = ${projectId}`;
    await tx`UPDATE project_pilotage_state SET current_trajectory_revision_id = NULL WHERE project_id = ${projectId}`;
    await tx`
      UPDATE trajectory_qualification_operations SET trajectory_revision_id = NULL
      WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})
    `;

    await tx`
      DELETE FROM nora_activity_events
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      DELETE FROM provider_usage_observations
      WHERE project_id = ${projectId}
         OR preparation_id = ANY(${scope})
         OR conversation_id IN (
           SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
         )
         OR cognitive_work_id IN (
           SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
         )
         OR turn_id IN (
           SELECT turn.id FROM conversation_turn_commands turn
           JOIN conversations conversation ON conversation.id = turn.conversation_id
           WHERE conversation.preparation_id = ANY(${scope}) OR conversation.project_id = ${projectId}
         )
    `;
    await tx`
      DELETE FROM cognitive_work_checkpoints
      WHERE work_id IN (
        SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM cognitive_works WHERE project_id = ${projectId}`;
    await tx`DELETE FROM cognitive_works WHERE preparation_id = ANY(${scope})`;
    await tx`DELETE FROM realization_qualifications WHERE project_id = ${projectId}`;
    await tx`DELETE FROM realization_handoffs WHERE project_id = ${projectId}`;
    await tx`DELETE FROM observed_git_facts WHERE project_id = ${projectId}`;
    await tx`DELETE FROM document_publication_refs WHERE project_id = ${projectId}`;
    await tx`DELETE FROM technical_contracts WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM effect_attempts WHERE project_id = ${projectId}`;
    const derived = await tx<{ name: string | null }[]>`SELECT to_regclass('public.derived_embedding_chunks') AS name`;
    if (derived[0]?.name) {
      await tx`DELETE FROM derived_embedding_chunks WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    }
    await tx`DELETE FROM business_command_effects WHERE project_id = ${projectId}`;
    await tx`DELETE FROM business_commands WHERE project_id = ${projectId}`;
    await tx`DELETE FROM method_applications WHERE project_id = ${projectId}`;
    await tx`DELETE FROM project_cycles WHERE project_id = ${projectId}`;
    await tx`DELETE FROM trajectory_qualification_operations WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM trajectory_revisions WHERE project_id = ${projectId}`;
    await tx`DELETE FROM governance_restrictions WHERE project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_decision_explanation_revisions WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_open_point_events WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_open_points WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_acquis WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_subject_events WHERE preparation_id = ANY(${scope})`;
    await tx`DELETE FROM knowledge_subject_summary_revisions WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_subjects WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`
      DELETE FROM document_revisions
      WHERE document_id IN (
        SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`
      DELETE FROM messages
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      DELETE FROM conversation_turn_commands
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM create_project_commands WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM preparation_project_links WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM project_git_links WHERE project_id = ${projectId}`;
    await tx`DELETE FROM project_pilotage_state WHERE project_id = ${projectId}`;
    await tx`DELETE FROM human_decisions WHERE project_id = ${projectId}`;
    const removedIds = spaceType === "project" ? [projectId, ...preps] : preps;
    await tx`
      DELETE FROM pilot_space_organization
      WHERE owner_pilot_id = ${ownerPilotId} AND space_id = ANY(${removedIds})
    `;
    if (preps.length) await tx`DELETE FROM preparations WHERE id = ANY(${preps}) AND owner_pilot_id = ${ownerPilotId}`;
    if (projectId !== NONE) await tx`DELETE FROM projects WHERE id = ${projectId} AND owner_pilot_id = ${ownerPilotId}`;

    if (interrupt) throw new Error("space deletion interrupted before commit");
    return { deleted: true as const, spaceType, spaceId };
  });
}

async function assertExclusive(tx: typeof sql, preps: string[], projectId: string) {
  const tables = [
    "conversations",
    "documents",
    "cognitive_works",
    "knowledge_subjects",
    "knowledge_acquis",
    "knowledge_open_points",
    "provider_usage_observations",
    "technical_contracts",
  ];
  for (const table of tables) {
    const rows = await tx<{ n: number }[]>`
      SELECT count(*)::int AS n FROM ${tx(table)}
      WHERE preparation_id = ANY(${preps})
        AND project_id IS NOT NULL
        AND project_id <> ${projectId}
    `;
    if ((rows[0]?.n ?? 0) > 0) {
      blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
    }
    if (projectId !== NONE) {
      const inverse = await tx<{ n: number }[]>`
        SELECT count(*)::int AS n FROM ${tx(table)}
        WHERE project_id = ${projectId}
          AND preparation_id IS NOT NULL
          AND NOT (preparation_id = ANY(${preps}))
      `;
      if ((inverse[0]?.n ?? 0) > 0) {
        blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
      }
    }
  }
  const sharedObservation = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM provider_usage_observations
    WHERE project_id IS NOT NULL
      AND project_id <> ${projectId}
      AND (
        cognitive_work_id IN (
          SELECT id FROM cognitive_works
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR conversation_id IN (
          SELECT id FROM conversations
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR turn_id IN (
          SELECT turn.id FROM conversation_turn_commands turn
          JOIN conversations conversation ON conversation.id = turn.conversation_id
          WHERE conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId}
        )
      )
  `;
  if ((sharedObservation[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const foreignWork = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM cognitive_works
    WHERE conversation_id IN (
      SELECT id FROM conversations
      WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
    )
      AND (project_id IS NULL OR project_id <> ${projectId})
      AND NOT (preparation_id = ANY(${preps}))
  `;
  if ((foreignWork[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const outsideSubject = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM knowledge_subjects other
    WHERE NOT (other.preparation_id = ANY(${preps}))
      AND (other.project_id IS NULL OR other.project_id <> ${projectId})
      AND (
        other.parent_subject_id IN (
          SELECT id FROM knowledge_subjects
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR other.originated_from_subject_id IN (
          SELECT id FROM knowledge_subjects
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
      )
  `;
  if ((outsideSubject[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const foreignDecision = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM human_decisions other
    WHERE other.project_id <> ${projectId}
      AND (
        other.revokes_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
        OR other.supersedes_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
      )
  `;
  if ((foreignDecision[0]?.n ?? 0) > 0) {
    blocked("Une décision d'un autre projet référence encore cet espace.");
  }
  const foreignRestriction = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM governance_restrictions other
    WHERE other.project_id <> ${projectId}
      AND (
        other.origin_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
        OR other.lift_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
      )
  `;
  if ((foreignRestriction[0]?.n ?? 0) > 0) {
    blocked("Une décision d'un autre projet référence encore cet espace.");
  }
}

async function assertIdle(tx: typeof sql, preps: string[], projectId: string) {
  const turns = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n
    FROM conversation_turn_commands turn
    JOIN conversations conversation ON conversation.id = turn.conversation_id
    WHERE (conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId})
      AND turn.status IN ('RUNNING', 'ACCEPTED', 'UNKNOWN')
  `;
  if ((turns[0]?.n ?? 0) > 0) blocked("Un échange Nora est encore en cours.");
  const effects = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM effect_attempts
    WHERE project_id = ${projectId} AND status IN ('AUTHORIZED', 'DISPATCHED', 'AMBIGUOUS')
  `;
  if ((effects[0]?.n ?? 0) > 0) blocked("Une opération externe n'est pas terminée.");
  const qualification = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM trajectory_qualification_operations
    WHERE (project_id = ${projectId} OR preparation_id = ANY(${preps}))
      AND status IN ('PENDING', 'RUNNING', 'UNKNOWN')
  `;
  if ((qualification[0]?.n ?? 0) > 0) blocked("Une qualification est encore en cours.");
  const works = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM cognitive_works
    WHERE (preparation_id = ANY(${preps}) OR project_id = ${projectId})
      AND status = 'RUNNING'
  `;
  if ((works[0]?.n ?? 0) > 0) blocked("Un travail Nora est encore en cours.");
  const restrictions = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM governance_restrictions
    WHERE project_id = ${projectId} AND status = 'ACTIVE'
  `;
  if ((restrictions[0]?.n ?? 0) > 0) blocked("Une restriction active empêche cette suppression.");
}
