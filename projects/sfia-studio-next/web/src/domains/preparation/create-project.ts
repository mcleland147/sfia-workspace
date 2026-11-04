import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  createProjectCommands,
  documents,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { creationFingerprint } from "@/lib/fingerprint";
import { newId } from "@/lib/ids";

export type CreateProjectInput = {
  pilotId: string;
  preparationId: string;
  expectedCreationRevision: number;
  projectName: string;
  previewSummary: string;
  idempotencyKey: string;
};

export type CreateProjectResult =
  | { status: "CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "ALREADY_CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "CONFLICT"; actualCreationRevision: number; reason: string }
  | { status: "FORBIDDEN" }
  | { status: "INVALID_REQUEST"; reason: string };

type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

async function loadCommandUnderLock(
  tx: Tx,
  pilotId: string,
  idempotencyKey: string,
) {
  return (
    await tx
      .select()
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, pilotId),
          eq(createProjectCommands.idempotencyKey, idempotencyKey),
        ),
      )
      .limit(1)
  )[0];
}

function fingerprintConflict(reason: string): CreateProjectResult {
  return { status: "CONFLICT", actualCreationRevision: -1, reason };
}

/**
 * Atomic create-project:
 * 1. Serialize all creates for the same (pilotId, idempotencyKey) via advisory xact lock
 *    BEFORE any project/link mutation — covers cross-preparation collisions.
 * 2. Evaluate prior command + fingerprint under that lock.
 * 3. Only then mutate preparation/project. CONFLICT paths never insert orphans.
 * 4. If a late race is detected after mutation, throw to ROLLBACK the transaction.
 */
export async function createProjectCommand(input: CreateProjectInput): Promise<CreateProjectResult> {
  const name = input.projectName.trim();
  if (!name) return { status: "INVALID_REQUEST", reason: "projectName required" };
  if (!input.idempotencyKey) return { status: "INVALID_REQUEST", reason: "idempotencyKey required" };

  const fingerprint = creationFingerprint({
    preparationId: input.preparationId,
    projectName: name,
    previewSummary: input.previewSummary,
    expectedCreationRevision: input.expectedCreationRevision,
  });

  try {
    return await db.transaction(async (tx) => {
      // Cross-preparation serialization for this idempotency key (pilot-scoped).
      await tx.execute(
        sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${input.idempotencyKey}))`,
      );

      const prior = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
      if (prior) {
        if (prior.fingerprint !== fingerprint || prior.preparationId !== input.preparationId) {
          // Different preparation or payload — reject with ZERO mutations in this TX.
          return fingerprintConflict(
            prior.preparationId !== input.preparationId
              ? "idempotency key already used for another preparation"
              : "idempotency fingerprint mismatch under lock",
          );
        }
        if (prior.projectId) {
          return {
            status: "ALREADY_CREATED" as const,
            projectId: prior.projectId,
            preparationId: prior.preparationId,
            committedAt: prior.createdAt,
          };
        }
      }

      // Serialize concurrent creates for this preparation.
      const locked = await tx.execute(
        sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
      );
      const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
      const prepRow = rows[0];
      if (!prepRow) return { status: "FORBIDDEN" as const };

      const existingLink = (
        await tx
          .select()
          .from(preparationProjectLinks)
          .where(eq(preparationProjectLinks.preparationId, input.preparationId))
          .limit(1)
      )[0];

      if (existingLink) {
        // Preparation already attached: record replay under same key/fingerprint only.
        if (prior && prior.fingerprint !== fingerprint) {
          return fingerprintConflict("idempotency fingerprint mismatch on attached preparation");
        }
        if (!prior) {
          await tx.insert(createProjectCommands).values({
            id: newId("cmd"),
            pilotId: input.pilotId,
            idempotencyKey: input.idempotencyKey,
            fingerprint,
            preparationId: input.preparationId,
            projectId: existingLink.projectId,
            result: "ALREADY_CREATED",
          });
        }
        return {
          status: "ALREADY_CREATED" as const,
          projectId: existingLink.projectId,
          preparationId: input.preparationId,
          committedAt: existingLink.attachedAt,
        };
      }

      if (Number(prepRow.creation_revision) !== input.expectedCreationRevision) {
        return {
          status: "CONFLICT" as const,
          actualCreationRevision: Number(prepRow.creation_revision),
          reason: "expectedCreationRevision stale",
        };
      }

      const projectId = newId("proj");
      const now = new Date();
      await tx.insert(projects).values({
        id: projectId,
        ownerPilotId: input.pilotId,
        name,
        createdAt: now,
      });
      await tx.insert(preparationProjectLinks).values({
        preparationId: input.preparationId,
        projectId,
        attachedAt: now,
      });
      await tx
        .update(preparations)
        .set({ status: "ATTACHED", updatedAt: now })
        .where(eq(preparations.id, input.preparationId));
      await tx
        .update(conversations)
        .set({ projectId })
        .where(eq(conversations.preparationId, input.preparationId));
      await tx
        .update(documents)
        .set({ projectId })
        .where(eq(documents.preparationId, input.preparationId));

      // Record command AFTER mutations but still inside TX. Unique violation / fingerprint
      // mismatch must ROLLBACK — never return CONFLICT after orphan inserts.
      const inserted = await tx
        .insert(createProjectCommands)
        .values({
          id: newId("cmd"),
          pilotId: input.pilotId,
          idempotencyKey: input.idempotencyKey,
          fingerprint,
          preparationId: input.preparationId,
          projectId,
          result: "CREATED",
          createdAt: now,
        })
        .onConflictDoNothing({
          target: [createProjectCommands.pilotId, createProjectCommands.idempotencyKey],
        })
        .returning();

      if (inserted.length === 0) {
        const raced = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
        if (
          !raced ||
          raced.fingerprint !== fingerprint ||
          raced.preparationId !== input.preparationId
        ) {
          throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
        }
        // Same claim won elsewhere under advisory lock — should be unreachable; rollback safe.
        throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
      }

      return {
        status: "CREATED" as const,
        projectId,
        preparationId: input.preparationId,
        committedAt: now,
      };
    });
  } catch (e) {
    if (e instanceof Error && e.message === "IDEMPOTENCY_RACE_ROLLBACK") {
      return fingerprintConflict("idempotency race rolled back — no orphan mutations");
    }
    throw e;
  }
}

/**
 * Read-only reconciliation after lost ACK — never mutates.
 * When idempotencyKey is provided, the stored preparationId on the command MUST match
 * the requested preparationId — never return project A as confirmation for preparation B.
 */
export async function reconcileCreateProject(
  pilotId: string,
  preparationId: string,
  idempotencyKey?: string,
) {
  const prep = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!prep) {
    return { status: "FORBIDDEN" as const };
  }

  if (idempotencyKey) {
    const cmd = (
      await db
        .select()
        .from(createProjectCommands)
        .where(
          and(
            eq(createProjectCommands.pilotId, pilotId),
            eq(createProjectCommands.idempotencyKey, idempotencyKey),
          ),
        )
        .limit(1)
    )[0];
    if (cmd?.projectId) {
      if (cmd.preparationId !== preparationId) {
        return {
          status: "CONFLICT" as const,
          reason: "idempotency key belongs to another preparation",
          commandPreparationId: cmd.preparationId,
        };
      }
      return {
        status: "ALREADY_CREATED" as const,
        projectId: cmd.projectId,
        preparationId: cmd.preparationId,
      };
    }
  }
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  if (link) {
    const proj = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    if (proj) return { status: "ALREADY_CREATED" as const, projectId: proj.id, preparationId };
  }
  return { status: "NOT_CONFIRMED_OR_UNKNOWN" as const };
}
