-- Ensemble 06 / Journal — additive D4 revision tables (technical contract §16).
-- DEV lane only under ENV-01. No RECETTE/STABLE mutation in this cycle.
-- Reversible: DROP TABLE IF EXISTS the three new tables (no column drops on legacy rows).

-- A. Immutable subject summary revisions
CREATE TABLE IF NOT EXISTS knowledge_subject_summary_revisions (
  id text PRIMARY KEY,
  subject_id text NOT NULL REFERENCES knowledge_subjects(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  revision_number integer NOT NULL,
  summary_markdown text NOT NULL,
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  idempotency_key text,
  expected_revision integer,
  source_fingerprint text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT knowledge_subject_summary_revisions_rev_pos CHECK (revision_number > 0)
);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_rev_uidx
  ON knowledge_subject_summary_revisions(subject_id, revision_number);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_op_uidx
  ON knowledge_subject_summary_revisions(subject_id, operation_id)
  WHERE operation_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS knowledge_subject_summary_revisions_subj_idx
  ON knowledge_subject_summary_revisions(subject_id);

-- B. Immutable decision explanation revisions (narrative only — D6 remains authority)
CREATE TABLE IF NOT EXISTS knowledge_decision_explanation_revisions (
  id text PRIMARY KEY,
  decision_id text NOT NULL REFERENCES human_decisions(id),
  preparation_id text REFERENCES preparations(id),
  project_id text NOT NULL REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  revision_number integer NOT NULL,
  official_decision_fingerprint text NOT NULL,
  explanation_markdown text NOT NULL,
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  idempotency_key text,
  expected_revision integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT knowledge_decision_explanation_revisions_rev_pos CHECK (revision_number > 0)
);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_rev_uidx
  ON knowledge_decision_explanation_revisions(decision_id, revision_number);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_op_uidx
  ON knowledge_decision_explanation_revisions(decision_id, operation_id)
  WHERE operation_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS knowledge_decision_explanation_revisions_dec_idx
  ON knowledge_decision_explanation_revisions(decision_id);

-- C. Open-point factual event history (current row stays on knowledge_open_points)
CREATE TABLE IF NOT EXISTS knowledge_open_point_events (
  id text PRIMARY KEY,
  open_point_id text NOT NULL REFERENCES knowledge_open_points(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  event_type text NOT NULL, -- OPENED | RESOLVED | REOPENED
  reason text NOT NULL DEFAULT '',
  actor_kind text NOT NULL DEFAULT 'system', -- pilot | nora | system
  provenance_json text NOT NULL DEFAULT '{}',
  operation_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_open_point_events_point_idx
  ON knowledge_open_point_events(open_point_id);
CREATE UNIQUE INDEX IF NOT EXISTS knowledge_open_point_events_op_uidx
  ON knowledge_open_point_events(open_point_id, operation_id)
  WHERE operation_id IS NOT NULL;

COMMENT ON TABLE knowledge_subject_summary_revisions IS
  'D4 immutable subject synthesis revisions (Journal §16A); current = max revision_number';
COMMENT ON TABLE knowledge_decision_explanation_revisions IS
  'D4 immutable decision explanations; never authorizes HumanDecision (D6)';
COMMENT ON TABLE knowledge_open_point_events IS
  'D4 factual open-point lifecycle events; does not lift D6 restrictions';
