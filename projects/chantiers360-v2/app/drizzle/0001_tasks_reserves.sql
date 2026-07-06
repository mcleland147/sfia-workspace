CREATE TABLE "taches" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chantier_id" uuid NOT NULL,
	"label" varchar(500) NOT NULL,
	"status" varchar(32) DEFAULT 'À faire' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reserves" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chantier_id" uuid NOT NULL,
	"description" text NOT NULL,
	"status" varchar(64) DEFAULT 'Ouverte' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reserves" ADD CONSTRAINT "reserves_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;
