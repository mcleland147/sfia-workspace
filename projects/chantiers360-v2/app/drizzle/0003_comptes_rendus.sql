CREATE TABLE "comptes_rendus" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chantier_id" uuid NOT NULL,
	"contenu" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "comptes_rendus" ADD CONSTRAINT "comptes_rendus_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;
