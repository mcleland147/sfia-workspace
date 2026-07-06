CREATE TABLE IF NOT EXISTS "chantiers" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "title" varchar(255) NOT NULL,
  "client" varchar(255) NOT NULL,
  "address" varchar(500) NOT NULL,
  "status" varchar(32) DEFAULT 'À démarrer' NOT NULL,
  "planned_start_date" date,
  "planned_end_date" date,
  "next_intervention_date" date,
  "simple_planning_comment" text,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
