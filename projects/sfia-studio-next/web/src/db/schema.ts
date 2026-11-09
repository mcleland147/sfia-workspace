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

/** D9 — GitHub App / integration authorization (pilot-scoped; not a D6 mandate). */
export const integrationAuthorizations = pgTable(
  "integration_authorizations",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    provider: text("provider").notNull().default("github"),
    status: text("status").notNull(), // CONNECTED | PENDING_APPROVAL | ACCESS_REMOVED | REVOKED | DISCONNECTED | EXPIRED | REQUIRES_REAUTH
    installationId: text("installation_id"),
    accountLogin: text("account_login"),
    /** Stable GitHub user id (not mutable login). */
    githubUserId: text("github_user_id"),
    /** AES-GCM ciphertext of user access token — never plaintext. */
    tokenCiphertext: text("token_ciphertext"),
    tokenNonce: text("token_nonce"),
    tokenKeyVersion: text("token_key_version"),
    refreshCiphertext: text("refresh_ciphertext"),
    refreshNonce: text("refresh_nonce"),
    tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }),
    /** Short-lived lease for a single in-flight refresh of this authorization generation. */
    refreshLeaseToken: text("refresh_lease_token"),
    refreshLeaseExpiresAt: timestamp("refresh_lease_expires_at", { withTimezone: true }),
    scopesJson: text("scopes_json").notNull().default("[]"),
    lastValidatedAt: timestamp("last_validated_at", { withTimezone: true }),
    metadataJson: text("metadata_json").notNull().default("{}"),
    connectedAt: timestamp("connected_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("integration_authorizations_pilot_idx").on(t.pilotId),
    index("integration_authorizations_pilot_status_idx").on(t.pilotId, t.status),
    index("integration_authorizations_github_user_idx").on(t.githubUserId),
    // C2: at most one CONNECTED per Pilot × provider (cross-process).
    uniqueIndex("integration_authorizations_one_connected_uidx")
      .on(t.pilotId, t.provider)
      .where(sql`status = 'CONNECTED'`),
  ],
);

/** D9 — OAuth/state for GitHub App user-to-server connect (CSRF + PKCE). */
export const integrationOauthStates = pgTable(
  "integration_oauth_states",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    stateToken: text("state_token").notNull(),
    returnPath: text("return_path").notNull().default("/settings/integrations"),
    codeVerifier: text("code_verifier"),
    nonce: text("nonce"),
    codeChallengeMethod: text("code_challenge_method"),
    /** Better Auth / DEV adapter session id — binds state to effective Studio session. */
    studioSessionId: text("studio_session_id"),
    /** Server-chosen flow at start: scripted | github_app_user_oauth — never client-chosen. */
    flow: text("flow"),
    consumedAt: timestamp("consumed_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("integration_oauth_states_token_uidx").on(t.stateToken),
    index("integration_oauth_states_session_idx").on(t.studioSessionId),
  ],
);

/** D9 — repos authorized for the installation (server-truth snapshot). */
export const authorizedRepositories = pgTable(
  "authorized_repositories",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    authorizationId: text("authorization_id")
      .notNull()
      .references(() => integrationAuthorizations.id),
    owner: text("owner").notNull(),
    name: text("name").notNull(),
    fullName: text("full_name").notNull(),
    defaultBranch: text("default_branch"),
    status: text("status").notNull().default("ACTIVE"), // ACTIVE | REMOVED
    permissionsJson: text("permissions_json").notNull().default("{}"),
    syncedAt: timestamp("synced_at", { withTimezone: true }).notNull().defaultNow(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("authorized_repositories_pilot_full_uidx").on(t.pilotId, t.fullName),
    index("authorized_repositories_auth_idx").on(t.authorizationId),
  ],
);

/** D9 — voluntary project ↔ repo attachment (distinct from authorization). */
export const projectGitLinks = pgTable(
  "project_git_links",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    repositoryId: text("repository_id")
      .notNull()
      .references(() => authorizedRepositories.id),
    status: text("status").notNull().default("ATTACHED"), // ATTACHED | DETACHED
    attachedAt: timestamp("attached_at", { withTimezone: true }).notNull().defaultNow(),
    detachedAt: timestamp("detached_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("project_git_links_project_idx").on(t.projectId, t.status),
    uniqueIndex("project_git_links_project_repo_uidx").on(t.projectId, t.repositoryId),
  ],
);

/** D4 — link between document revision and observed Git publication. */
export const documentPublicationRefs = pgTable(
  "document_publication_refs",
  {
    id: text("id").primaryKey(),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    documentId: text("document_id")
      .notNull()
      .references(() => documents.id),
    revisionId: text("revision_id")
      .notNull()
      .references(() => documentRevisions.id),
    repositoryId: text("repository_id")
      .notNull()
      .references(() => authorizedRepositories.id),
    targetPath: text("target_path").notNull(),
    targetBranch: text("target_branch").notNull(),
    baseSha: text("base_sha"),
    headSha: text("head_sha"),
    prNumber: integer("pr_number"),
    status: text("status").notNull(),
    effectAttemptId: text("effect_attempt_id"),
    detailJson: text("detail_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("document_publication_refs_project_idx").on(t.projectId),
    index("document_publication_refs_doc_rev_idx").on(t.documentId, t.revisionId),
    // Partial UNIQUE: one publicationRef per effect attempt (NULL allowed for detached remediation).
    uniqueIndex("document_publication_refs_effect_attempt_uidx")
      .on(t.effectAttemptId)
      .where(sql`${t.effectAttemptId} IS NOT NULL`),
  ],
);

/** D7 — Git effect attempt (publication / merge). */
export const effectAttempts = pgTable(
  "effect_attempts",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    kind: text("kind").notNull(), // GIT_PUBLICATION | GIT_MERGE
    status: text("status").notNull(),
    correlationKey: text("correlation_key").notNull(),
    fingerprint: text("fingerprint").notNull(),
    decisionId: text("decision_id").references(() => humanDecisions.id),
    effectConditions: text("effect_conditions"),
    planJson: text("plan_json").notNull().default("{}"),
    resultJson: text("result_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("effect_attempts_correlation_uidx").on(
      t.pilotId,
      t.projectId,
      t.correlationKey,
    ),
    index("effect_attempts_project_idx").on(t.projectId),
  ],
);

/** D8/D9 — observed Git facts after remote re-read. */
export const observedGitFacts = pgTable(
  "observed_git_facts",
  {
    id: text("id").primaryKey(),
    attemptId: text("attempt_id")
      .notNull()
      .references(() => effectAttempts.id),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    factKind: text("fact_kind").notNull(),
    repositoryFullName: text("repository_full_name").notNull(),
    refName: text("ref_name").notNull(),
    sha: text("sha").notNull(),
    prNumber: integer("pr_number"),
    observedAt: timestamp("observed_at", { withTimezone: true }).notNull().defaultNow(),
    detailJson: text("detail_json").notNull().default("{}"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("observed_git_facts_attempt_idx").on(t.attemptId),
    index("observed_git_facts_project_idx").on(t.projectId),
  ],
);

export const schemaRevision = "012_auth_concurrency_safety";
