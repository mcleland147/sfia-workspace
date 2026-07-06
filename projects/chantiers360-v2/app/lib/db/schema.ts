import {
  pgTable,
  uuid,
  varchar,
  text,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const chantiers = pgTable("chantiers", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  client: varchar("client", { length: 255 }).notNull(),
  address: varchar("address", { length: 500 }).notNull(),
  status: varchar("status", { length: 32 }).notNull().default("À démarrer"),
  plannedStartDate: date("planned_start_date"),
  plannedEndDate: date("planned_end_date"),
  nextInterventionDate: date("next_intervention_date"),
  simplePlanningComment: text("simple_planning_comment"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Chantier = typeof chantiers.$inferSelect;
export type NewChantier = typeof chantiers.$inferInsert;
