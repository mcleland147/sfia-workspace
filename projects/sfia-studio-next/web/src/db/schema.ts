import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  integer,
  uniqueIndex,
  index,
  boolean,
} from "drizzle-orm/pg-core";

/** D1 — Studio pilot identity (internal stable id). */
export const pilots = pgTable(
  "pilots",
  {
    id: text("id").primaryKey(),
    githubUserId: text("github_user_id"),
    displayName: text("display_name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("pilots_github_user_id_uidx").on(t.githubUserId)],
);

/** Better Auth core tables (minimal subset used with drizzle adapter). */
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  pilotId: text("pilot_id").references(() => pilots.id),
});

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    authMode: text("auth_mode").notNull().default("unknown"),
  },
  (t) => [index("sessions_user_id_idx").on(t.userId)],
);

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** D2 — durable preparation without project. */
export const preparations = pgTable(
  "preparations",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    status: text("status").notNull().default("OPEN"), // OPEN | ATTACHED
    creationRevision: integer("creation_revision").notNull().default(1),
    previewName: text("preview_name").notNull().default(""),
    previewSummary: text("preview_summary").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("preparations_owner_idx").on(t.ownerPilotId)],
);

export const projects = pgTable(
  "projects",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("projects_owner_idx").on(t.ownerPilotId)],
);

export const preparationProjectLinks = pgTable(
  "preparation_project_links",
  {
    preparationId: text("preparation_id")
      .primaryKey()
      .references(() => preparations.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    attachedAt: timestamp("attached_at", { withTimezone: true }).notNull().defaultNow(),
  },
);

export const createProjectCommands = pgTable(
  "create_project_commands",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    idempotencyKey: text("idempotency_key").notNull(),
    fingerprint: text("fingerprint").notNull(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    result: text("result").notNull(), // CREATED | ALREADY_CREATED | CONFLICT | ...
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("create_project_commands_pilot_key_uidx").on(t.pilotId, t.idempotencyKey),
  ],
);

/** D3 — conversation / messages. */
export const conversations = pgTable(
  "conversations",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("conversations_prep_idx").on(t.preparationId)],
);

export const messages = pgTable(
  "messages",
  {
    id: text("id").primaryKey(),
    conversationId: text("conversation_id")
      .notNull()
      .references(() => conversations.id),
    role: text("role").notNull(), // user | assistant | system
    content: text("content").notNull(),
    status: text("status").notNull(), // COMPLETE | FAILED | INTERRUPTED | UNKNOWN | PENDING
    generationId: text("generation_id"),
    ordinal: integer("ordinal").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("messages_conversation_idx").on(t.conversationId),
    uniqueIndex("messages_conversation_ordinal_uidx").on(t.conversationId, t.ordinal),
  ],
);

/**
 * D3 — durable turn command for full-turn idempotence.
 * Uniqueness: (conversation_id, client_turn_key). Short lock only around reservation.
 */
export const conversationTurnCommands = pgTable(
  "conversation_turn_commands",
  {
    id: text("id").primaryKey(),
    conversationId: text("conversation_id")
      .notNull()
      .references(() => conversations.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    clientTurnKey: text("client_turn_key").notNull(),
    requestFingerprint: text("request_fingerprint").notNull(),
    operationId: text("operation_id").notNull(),
    status: text("status").notNull(),
    ordinalUser: integer("ordinal_user"),
    ordinalAssistant: integer("ordinal_assistant"),
    userMessageId: text("user_message_id"),
    assistantMessageId: text("assistant_message_id"),
    generationId: text("generation_id"),
    resultJson: text("result_json"),
    errorCategory: text("error_category"),
    /** Ownership fence — invalidated on reconcile; required for terminal CAS / D4 gates. */
    ownerToken: text("owner_token"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("conversation_turn_commands_conv_key_uidx").on(t.conversationId, t.clientTurnKey),
    uniqueIndex("conversation_turn_commands_operation_uidx").on(t.operationId),
    index("conversation_turn_commands_conv_status_idx").on(t.conversationId, t.status),
  ],
);

/** D4 — documents / revisions. */
export const documents = pgTable(
  "documents",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    title: text("title").notNull(),
    creationCorrelationKey: text("creation_correlation_key"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("documents_prep_idx").on(t.preparationId)],
);

export const documentRevisions = pgTable(
  "document_revisions",
  {
    id: text("id").primaryKey(),
    documentId: text("document_id")
      .notNull()
      .references(() => documents.id),
    revisionNumber: integer("revision_number").notNull(),
    contentMarkdown: text("content_markdown").notNull(),
    status: text("status").notNull(), // SAVING | AVAILABLE | FAILED | UNKNOWN
    baseRevisionId: text("base_revision_id"),
    correlationKey: text("correlation_key"),
    provenanceJson: text("provenance_json").notNull().default("{}"),
    scope: text("scope").notNull().default("document"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("document_revisions_doc_rev_uidx").on(t.documentId, t.revisionNumber),
  ],
);

/** D4 — knowledge subjects / acquis / open points (ML2). */
export const knowledgeSubjects = pgTable(
  "knowledge_subjects",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    parentSubjectId: text("parent_subject_id"),
    title: text("title").notNull(),
    status: text("status").notNull().default("ACTIVE"),
    originatedFromSubjectId: text("originated_from_subject_id"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("knowledge_subjects_prep_idx").on(t.preparationId)],
);

export const knowledgeAcquis = pgTable(
  "knowledge_acquis",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    subjectId: text("subject_id").references(() => knowledgeSubjects.id),
    kind: text("kind").notNull().default("FACT"),
    statement: text("statement").notNull(),
    provenanceJson: text("provenance_json").notNull().default("{}"),
    status: text("status").notNull().default("CURRENT"),
    supersedesAcquisId: text("supersedes_acquis_id"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("knowledge_acquis_prep_idx").on(t.preparationId)],
);

export const knowledgeOpenPoints = pgTable(
  "knowledge_open_points",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    subjectId: text("subject_id").references(() => knowledgeSubjects.id),
    statement: text("statement").notNull(),
    status: text("status").notNull().default("OPEN"),
    provenanceJson: text("provenance_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("knowledge_open_points_prep_idx").on(t.preparationId)],
);

export const knowledgeSubjectEvents = pgTable(
  "knowledge_subject_events",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    subjectId: text("subject_id")
      .notNull()
      .references(() => knowledgeSubjects.id),
    eventType: text("event_type").notNull(),
    payloadJson: text("payload_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("knowledge_subject_events_subject_idx").on(t.subjectId)],
);

/** D6 — human decisions (authority). Revisions never delete the prior act. */
export const humanDecisions = pgTable(
  "human_decisions",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    sourceKind: text("source_kind").notNull(),
    sourceRef: text("source_ref").notNull(),
    kind: text("kind").notNull(),
    objectRef: text("object_ref").notNull().default(""),
    scope: text("scope").notNull().default("PROJECT"),
    statement: text("statement").notNull().default(""),
    state: text("state").notNull(), // APPLICABLE | REVISED | REVOKED | SUPERSEDED
    effectConditions: text("effect_conditions"),
    supersedesDecisionId: text("supersedes_decision_id"),
    revokesDecisionId: text("revokes_decision_id"),
    liftsRestrictionId: text("lifts_restriction_id"),
    effectiveAt: timestamp("effective_at", { withTimezone: true }).notNull().defaultNow(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("human_decisions_project_idx").on(t.projectId)],
);

/** D5 — trajectory revisions. PROPOSED is not authority; RETAINED points at a D6 act. */
export const trajectoryRevisions = pgTable(
  "trajectory_revisions",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    revisionNumber: integer("revision_number").notNull(),
    status: text("status").notNull(), // PROPOSED | RETAINED | SUPERSEDED
    orientation: text("orientation").notNull(),
    sourceKind: text("source_kind").notNull(),
    sourceRef: text("source_ref").notNull().default(""),
    decisionId: text("decision_id").references(() => humanDecisions.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("trajectory_revisions_project_rev_uidx").on(t.projectId, t.revisionNumber),
    index("trajectory_revisions_project_idx").on(t.projectId),
  ],
);

/** D5 — lockable project revision. Missing row means revision 0 (no cycle created with the project). */
export const projectPilotageState = pgTable("project_pilotage_state", {
  projectId: text("project_id")
    .primaryKey()
    .references(() => projects.id),
  revision: integer("revision").notNull().default(0),
  currentTrajectoryRevisionId: text("current_trajectory_revision_id").references(
    () => trajectoryRevisions.id,
  ),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** D5 — cycles. At most one ACTIVE per project (partial unique index). */
export const projectCycles = pgTable(
  "project_cycles",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    cycleType: text("cycle_type").notNull(),
    objective: text("objective").notNull(),
    status: text("status").notNull(), // ACTIVE | CLOSED
    revision: integer("revision").notNull().default(1),
    openedAt: timestamp("opened_at", { withTimezone: true }).notNull().defaultNow(),
    closedAt: timestamp("closed_at", { withTimezone: true }),
    openDecisionId: text("open_decision_id").references(() => humanDecisions.id),
    closeDecisionId: text("close_decision_id").references(() => humanDecisions.id),
    ckiId: text("cki_id"),
    ckiPinnedVersion: text("cki_pinned_version"),
    ckiContentDigest: text("cki_content_digest"),
    ckiManifestRef: text("cki_manifest_ref"),
    ckiPinOrigin: text("cki_pin_origin"),
    balanceNote: text("balance_note"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("project_cycles_one_active_uidx").on(t.projectId).where(sql`status = 'ACTIVE'`),
    index("project_cycles_project_idx").on(t.projectId),
  ],
);

/** D5 — method applications. One current row per (project, scope). */
export const methodApplications = pgTable(
  "method_applications",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    methodRef: text("method_ref").notNull(),
    methodVersion: text("method_version").notNull(),
    scope: text("scope").notNull().default("PROJECT"),
    decisionId: text("decision_id")
      .notNull()
      .references(() => humanDecisions.id),
    effectiveFrom: timestamp("effective_from", { withTimezone: true }).notNull().defaultNow(),
    effectiveUntil: timestamp("effective_until", { withTimezone: true }),
    closeReason: text("close_reason"),
    isCurrent: boolean("is_current").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("method_applications_current_uidx")
      .on(t.projectId, t.scope)
      .where(sql`is_current = true`),
    index("method_applications_project_idx").on(t.projectId),
  ],
);

/** D6 — restrictions. Lifting is a distinct act; rows are not deleted. */
export const governanceRestrictions = pgTable(
  "governance_restrictions",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    targetKind: text("target_kind").notNull(),
    targetRef: text("target_ref").notNull().default("*"),
    effect: text("effect").notNull().default("BLOCK"),
    originDecisionId: text("origin_decision_id")
      .notNull()
      .references(() => humanDecisions.id),
    liftDecisionId: text("lift_decision_id").references(() => humanDecisions.id),
    status: text("status").notNull(), // ACTIVE | LIFTED
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    liftedAt: timestamp("lifted_at", { withTimezone: true }),
  },
  (t) => [index("governance_restrictions_project_idx").on(t.projectId, t.status)],
);

/**
 * D5/D6 — business command.
 * Client key and human intent are unique. No PARTIAL status: internal CLOSE+OPEN share one commit.
 */
export const businessCommands = pgTable(
  "business_commands",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    actorPilotId: text("actor_pilot_id")
      .notNull()
      .references(() => pilots.id),
    clientCommandKey: text("client_command_key").notNull(),
    fingerprint: text("fingerprint").notNull(),
    sourceKind: text("source_kind").notNull(),
    sourceRef: text("source_ref").notNull(),
    sourceActionKey: text("source_action_key").notNull(),
    operation: text("operation").notNull(),
    expectedRevision: integer("expected_revision").notNull(),
    stateRevision: integer("state_revision"),
    status: text("status").notNull(), // APPLIED | REJECTED
    resultJson: text("result_json").notNull().default("{}"),
    decisionId: text("decision_id").references(() => humanDecisions.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("business_commands_client_key_uidx").on(
      t.projectId,
      t.actorPilotId,
      t.clientCommandKey,
    ),
    uniqueIndex("business_commands_human_intent_uidx").on(
      t.projectId,
      t.sourceKind,
      t.sourceRef,
      t.sourceActionKey,
    ),
    index("business_commands_project_idx").on(t.projectId),
  ],
);

/** Observable effects of one committed command. A transition stores CLOSE and OPEN together. */
export const businessCommandEffects = pgTable(
  "business_command_effects",
  {
    id: text("id").primaryKey(),
    commandId: text("command_id")
      .notNull()
      .references(() => businessCommands.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    effectKind: text("effect_kind").notNull(),
    targetRef: text("target_ref").notNull(),
    outcome: text("outcome").notNull(),
    ordinal: integer("ordinal").notNull(),
    detailJson: text("detail_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("business_command_effects_command_ordinal_uidx").on(t.commandId, t.ordinal),
    index("business_command_effects_command_idx").on(t.commandId),
  ],
);

export const schemaRevision = "007_ml3_pilotage_decisions";
