# Review Pack — titre de préparation et continuité du projet

Date : 28 novembre 2026, 16:59 CET.
Cycle : 08 Delivery / implémentation. Profil Standard. Périmètre : nommage de la préparation et du projet.
Branche produit : sfia/next-ml5-integrated-delivery-20261123.
HEAD initial : aa04daba2d7591d8d28da1dc04901de142e274a3. Tree initial : e46457a96ddbe18ecd35c29f367e9b3b4afcbd40. Parent initial : df5d83be04100e41b03808800144a576552def73.
HEAD final : 7bd37c0e85ccd940ac54d44202f47526c8c94879. Tree final : ef04d660f47fa9d7c9aeec8b955fb83eb2ba7019. Parent final : aa04daba2d7591d8d28da1dc04901de142e274a3.
origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25.
Push : aa04daba..7bd37c0e, fast-forward. Aucune pull request. Aucune exécution Actions observée sur cette branche.
Commit : feat(next): name a preparation without deciding the project.
BUILD_ID DEV : lUwrkTT2SVDtnZ09Ryq8D. Port 3100. PID 48964. Base sfia_next_dev, schéma 029. RECETTE inchangée : port 3200, PID 58965, colonne title absente.

## Sources

Suivi v0.27, ref d9e7e3e2, §32.3. Contrats portefeuille ref 5008d51d : PF-30, PF-31, PF-34, PF-A04. Contrat technique §7.3.
Figma itgvCulInEnFY6DvgIegvP, session 918506b9-2989-4a3c-ada1-cbc7e6a0a495. État 14.10 / 1420:2539 relu : dialogue « Renommer la préparation », champ du titre courant, mention qu'un titre manuel ne sera plus écrasé par Nora, actions Annuler et Enregistrer. Le dialogue projet reprend le même cadre avec le nom officiel. SAS06 conserve le popup déjà livré à 702×823, dont les repères suivent les états réels.

## G3 — modèle retenu

Migration 029 additive. preparations.title nullable, title_source NONE/NORA/PILOT, title_revision, title_source_turn_id, title_intention_key. projects.name reste le nom officiel, avec name_revision et name_intention_key. Aucun backfill. Aucune contrainte UNIQUE rétroactive. Aucune réécriture des migrations 001 à 028.
Le champ suggestedPreparationTitle est optionnel dans la qualification existante. Une valeur absente, vide ou inutilisable ne fait pas échouer le tour. L'application a lieu après un tour COMPLETE dont le CAS a réussi, hors projet, et une seule fois tant que title_source vaut NONE et title_revision vaut 0.
Le renommage manuel passe à PILOT. Une suggestion ultérieure ne remplace ni NORA déjà accepté ni PILOT. Le renommage de projet réutilise normalizeProjectNameKey, namesConflictForSamePilot et le verrou sfia:d2:project-name, dans le même ordre que la création. Aucun effet Git. Le titre de préparation ne modifie pas previewName, previewSummary, projectionJson, creationRevision, ni le nom inspecté à la création.
Les projections du portefeuille affichent le titre canonique, sinon « Nouvelle préparation ». Le nom de projet affiché est projects.name. La réconciliation distingue l'accusé corrélé, la relecture du libellé et de sa version, le no-op, le conflit et l'état incertain. Supprimer reste indisponible.

## Preuves

Unitaires : preparation-title, portfolio-organization, portfolio-cursor, nora-live-output-schema. Exit 0.
PostgreSQL sfia_next_e2e : space-naming.pg.test.ts, 3 tests, exit 0. Premier titre, absence d'écrasement, rattachement réel par createProjectCommand, unicité, accents, no-op, version périmée, deux pilotes.
Navigateur, Turbopack isolé :3101, fixture, base sfia_next_e2e. preparation-title-continuity.spec.ts, 1 test, exit 0 en 17 s. Titre neutre, qualification admissible, titre affiché, renommage, suggestion tardive sans écrasement, création explicite, disparition de la préparation autonome, renommage du projet, même URL, isolation du pilote B.
Typecheck : 34 diagnostics, identiques au socle historique après retrait de deux erreurs introduites puis corrigées dans le test de réconciliation. Aucune erreur nouvelle.
Build de production : compilé. Lint des fichiers du cycle : 0 erreur, 3 avertissements préexistants.
E2E : sauvegarde /tmp/sfia-backups/sfia_next_e2e_pre029.dump, sha256 8476b8202503674b78675fcc9936f8cdd7bd61239e60245c9815cc4cdec9e30f, 201165 octets, puis migration 029.
DEV : avant migration, 233 projets et 265 préparations, sans colonne title. Sauvegarde /tmp/sfia-backups/sfia_next_dev_pre029.dump, sha256 98bb485509b8ea9423c785cef83c78e336c136bbf47b6662ecfb5fb9233ab6c6, 2669725 octets. Restauration d'essai sur sfia_next_dev_restore_trial : 233 et 265, puis base d'essai supprimée. Après migration : 233 projets, 0 renommés, 265 préparations, 0 titrées.
Lecture DEV non mutative après démarrage : login de test 200, portefeuille 200, 220 projets, 32 préparations, total filtré 252, nameRevision présent, une préparation encore intitulée « Nouvelle préparation ».

## Matrice

Titre intelligent : réalisé. Qualification existante, un seul tour, provenance du tour conservée.
Renommage préparation : réalisé. CAS, source PILOT, creationRevision et aperçu inchangés.
Renommage projet : réalisé. Même identité, même verrou d'unicité, aucun effet Git.
Projections : le portefeuille, la recherche et les favoris lisent le titre ou le nom propriétaire.
Continuité : la création reste explicite. Le popup SAS06 n'a pas été reconstruit. Il suit les états déjà établis.
Persistance : migration additive qualifiée sur E2E puis DEV. RECETTE non touchée.

PF-30, PF-31, PF-34 et PF-A04 sont couverts au niveau exercé. PF-A01, PF-A07 et PF-A08 ne sont pas rouverts. Leurs garanties de lecture et d'organisation restent en place. Les tests de réconciliation existants passent.

## Réserves

R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK, R-B-F2, R-B-PF34-BROWSER, R-B-KEYBOARD restent ouvertes. Le parcours navigateur exerce un rattachement réel, sans fermer R-A06-ATTACH comme une preuve générale.
Qualité naturelle des titres Nora en LIVE : non exercée. Aucune émission fournisseur dans ce cycle.
Verdict visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED. Les mesures F2 au viewport contracté ne sont pas produites.
Verdict technique : READY WITH RESERVES — MANDAT 2. Le mandat n'est pas accepté. Les mandats 3 à 6 ne sont pas engagés.

## Fichiers créés — contenu intégral

### projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { renamePreparation } from "@/domains/preparation/space-naming";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      title?: unknown;
      expectedRevision?: unknown;
      intentionKey?: unknown;
    };
    if (typeof body.title !== "string" || typeof body.expectedRevision !== "number" || typeof body.intentionKey !== "string") {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "Titre, version et intention sont requis." }, { status: 400 });
    }
    const result = await renamePreparation({
      pilotId: session.pilotId,
      preparationId,
      title: body.title,
      expectedRevision: body.expectedRevision,
      intentionKey: body.intentionKey,
    });
    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { renameProject } from "@/domains/preparation/space-naming";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as {
      name?: unknown;
      expectedRevision?: unknown;
      intentionKey?: unknown;
    };
    if (typeof body.name !== "string" || typeof body.expectedRevision !== "number" || typeof body.intentionKey !== "string") {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "Nom, version et intention sont requis." }, { status: 400 });
    }
    const result = await renameProject({
      pilotId: session.pilotId,
      projectId,
      name: body.name,
      expectedRevision: body.expectedRevision,
      intentionKey: body.intentionKey,
    });
    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### projects/sfia-studio-next/web/src/db/migrations/029_preparation_title_and_project_name.sql

```
-- D2 preparation title and project name revision. Additive only.
-- Existing preparations stay untitled. Existing project names are not rewritten.

ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title text;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_source text NOT NULL DEFAULT 'NONE';
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_revision integer NOT NULL DEFAULT 0;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_source_turn_id text;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_intention_key text;

ALTER TABLE projects ADD COLUMN IF NOT EXISTS name_revision integer NOT NULL DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS name_intention_key text;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'preparations_title_source_chk'
  ) THEN
    ALTER TABLE preparations
      ADD CONSTRAINT preparations_title_source_chk
      CHECK (title_source IN ('NONE', 'NORA', 'PILOT'));
  END IF;
END $$;
```

### projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts

```
import { sql } from "@/db/client";
import { namesConflictForSamePilot, normalizeProjectNameKey } from "@/domains/preparation/projection";
import { StudioError } from "@/lib/http-errors";

export type PreparationTitleSource = "NONE" | "NORA" | "PILOT";

const TITLE_MAX_CODE_POINTS = 80;

export function normalizePreparationTitle(value: string): string | null {
  const single = value.normalize("NFC").replace(/[\t\f\v]+/g, " ").replace(/ {2,}/g, " ").trim();
  if (!single || /[\r\n]/.test(single)) return null;
  if ([...single].length > TITLE_MAX_CODE_POINTS) return null;
  if (/[<>]/.test(single)) return null;
  return single;
}

function displayProjectName(value: string): string {
  return value.normalize("NFC").replace(/\s+/g, " ").trim();
}

function readIntentionKey(value: unknown): string {
  if (typeof value !== "string" || !/^[A-Za-z0-9._:-]{8,80}$/.test(value)) {
    throw new StudioError("INVALID_REQUEST", "Clé d'intention invalide.");
  }
  return value;
}

function readRevision(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    throw new StudioError("INVALID_REQUEST", "Version attendue invalide.");
  }
  return value;
}

export async function applyFirstPreparationTitle(input: {
  pilotId: string;
  preparationId: string;
  turnCommandId: string;
  suggested: string;
}): Promise<{ applied: boolean }> {
  const title = normalizePreparationTitle(input.suggested);
  if (!title) return { applied: false };
  return sql.begin(async (tx) => {
    const rows = await tx<{
      title_source: string;
      title_revision: number;
      status: string;
    }[]>`
      SELECT title_source, title_revision, status
      FROM preparations
      WHERE id = ${input.preparationId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row || row.status !== "OPEN" || row.title_source !== "NONE" || Number(row.title_revision) !== 0) {
      return { applied: false };
    }
    const linked = await tx<{ preparation_id: string }[]>`
      SELECT preparation_id FROM preparation_project_links WHERE preparation_id = ${input.preparationId} LIMIT 1
    `;
    if (linked[0]) return { applied: false };
    const updated = await tx`
      UPDATE preparations
      SET title = ${title},
          title_source = 'NORA',
          title_revision = 1,
          title_source_turn_id = ${input.turnCommandId},
          updated_at = now()
      WHERE id = ${input.preparationId}
        AND owner_pilot_id = ${input.pilotId}
        AND status = 'OPEN'
        AND title_source = 'NONE'
        AND title_revision = 0
        AND NOT EXISTS (
          SELECT 1 FROM preparation_project_links WHERE preparation_id = ${input.preparationId}
        )
    `;
    return { applied: updated.count === 1 };
  });
}

export async function renamePreparation(input: {
  pilotId: string;
  preparationId: string;
  title: string;
  expectedRevision: number;
  intentionKey: string;
}): Promise<{ label: string; revision: number; intentionKey: string; changed: boolean }> {
  const title = normalizePreparationTitle(input.title);
  if (!title) throw new StudioError("INVALID_REQUEST", "Ce titre n'est pas utilisable.");
  const expected = readRevision(input.expectedRevision);
  const intentionKey = readIntentionKey(input.intentionKey);
  return sql.begin(async (tx) => {
    const rows = await tx<{
      title: string | null;
      title_revision: number;
      title_intention_key: string | null;
      status: string;
    }[]>`
      SELECT title, title_revision, title_intention_key, status
      FROM preparations
      WHERE id = ${input.preparationId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row) throw new StudioError("NOT_FOUND", "Préparation introuvable.");
    if (row.status !== "OPEN") {
      throw new StudioError("CONFLICT", "Cette préparation n'est plus un espace autonome.");
    }
    const linked = await tx<{ preparation_id: string }[]>`
      SELECT preparation_id FROM preparation_project_links WHERE preparation_id = ${input.preparationId} LIMIT 1
    `;
    if (linked[0]) {
      throw new StudioError("CONFLICT", "Cette préparation est rattachée à un projet.");
    }
    const revision = Number(row.title_revision);
    if (row.title_intention_key === intentionKey) {
      if (row.title === title) {
        return { label: title, revision, intentionKey, changed: false };
      }
      throw new StudioError("CONFLICT", "Cette intention a déjà produit un autre titre.");
    }
    if (revision !== expected) {
      throw new StudioError("CONFLICT", "Le titre a changé. Relisez-le avant de confirmer.");
    }
    if (row.title === title) {
      await tx`
        UPDATE preparations
        SET title_intention_key = ${intentionKey}, updated_at = now()
        WHERE id = ${input.preparationId}
      `;
      return { label: title, revision, intentionKey, changed: false };
    }
    const next = revision + 1;
    await tx`
      UPDATE preparations
      SET title = ${title},
          title_source = 'PILOT',
          title_revision = ${next},
          title_intention_key = ${intentionKey},
          updated_at = now()
      WHERE id = ${input.preparationId} AND title_revision = ${revision}
    `;
    return { label: title, revision: next, intentionKey, changed: true };
  });
}

export async function renameProject(input: {
  pilotId: string;
  projectId: string;
  name: string;
  expectedRevision: number;
  intentionKey: string;
}): Promise<{ label: string; revision: number; intentionKey: string; changed: boolean }> {
  const name = displayProjectName(input.name);
  if (!name || /[\r\n]/.test(input.name)) {
    throw new StudioError("INVALID_REQUEST", "Ce nom n'est pas utilisable.");
  }
  const expected = readRevision(input.expectedRevision);
  const intentionKey = readIntentionKey(input.intentionKey);
  return sql.begin(async (tx) => {
    await tx`SELECT pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext('sfia:d2:project-name'))`;
    const rows = await tx<{
      id: string;
      name: string;
      name_revision: number;
      name_intention_key: string | null;
    }[]>`
      SELECT id, name, name_revision, name_intention_key
      FROM projects
      WHERE id = ${input.projectId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row) throw new StudioError("NOT_FOUND", "Projet introuvable.");
    const revision = Number(row.name_revision);
    if (row.name_intention_key === intentionKey) {
      if (normalizeProjectNameKey(row.name) === normalizeProjectNameKey(name)) {
        return { label: row.name, revision, intentionKey, changed: false };
      }
      throw new StudioError("CONFLICT", "Cette intention a déjà produit un autre nom.");
    }
    if (revision !== expected) {
      throw new StudioError("CONFLICT", "Le nom a changé. Relisez-le avant de confirmer.");
    }
    if (normalizeProjectNameKey(row.name) === normalizeProjectNameKey(name)) {
      await tx`
        UPDATE projects SET name_intention_key = ${intentionKey}
        WHERE id = ${input.projectId}
      `;
      return { label: row.name, revision, intentionKey, changed: false };
    }
    const others = await tx<{ id: string; name: string }[]>`
      SELECT id, name FROM projects
      WHERE owner_pilot_id = ${input.pilotId} AND id <> ${input.projectId}
    `;
    if (others.some((other) => namesConflictForSamePilot(other.name, name))) {
      throw new StudioError("CONFLICT", "Ce nom est déjà utilisé par un autre projet.");
    }
    const next = revision + 1;
    await tx`
      UPDATE projects
      SET name = ${name}, name_revision = ${next}, name_intention_key = ${intentionKey}
      WHERE id = ${input.projectId} AND name_revision = ${revision}
    `;
    return { label: name, revision: next, intentionKey, changed: true };
  });
}
```

### projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts

```
import { expect, test, type Page } from "@playwright/test";
import { constituteAndCreateProject, openNewPreparation, uniqueProjectName } from "./helpers/g4-chat-first";

async function sendPreparationMessage(page: Page, text: string) {
  const draft = page.getByTestId("prep-draft");
  const send = page.getByTestId("prep-send");
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await draft.fill(text);
  await expect(draft).toHaveValue(text);
  await expect(send).toBeEnabled();
  await send.click();
  await expect(page.getByText("suffisamment établi")).toBeVisible({ timeout: 60000 });
}

test("preparation title stays independent of the official project name", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const preparationId = await openNewPreparation(page);
  await page.goto("/portfolio");
  const preparationRow = page.getByTestId(`resume-prep-${preparationId}`);
  await expect(preparationRow).toContainText("Nouvelle préparation");

  await page.goto(`/preparations/${preparationId}`);
  await sendPreparationMessage(page, "Je prépare la refonte des accès utilisateurs");
  await page.goto("/portfolio");
  await expect(preparationRow).toContainText("Refonte des accès utilisateurs");
  await page.getByTestId("portfolio-search").fill("Refonte des accès");
  await expect(preparationRow).toBeVisible();
  await page.getByTestId("portfolio-search").fill("");

  await preparationRow.getByRole("button", { name: "Actions de l'espace" }).click();
  await expect(page.getByRole("menuitem", { name: "Supprimer" })).toBeDisabled();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const dialog = page.getByTestId("portfolio-rename");
  await expect(dialog).toContainText("Il ne modifie pas le nom du futur projet");
  await page.getByTestId("portfolio-rename-input").fill("Titre retenu par le pilote");
  await dialog.getByRole("button", { name: "Enregistrer" }).click();
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });
  await page.reload();
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });

  const lateKey = `turn-${crypto.randomUUID()}`;
  const late = await page.request.post(`/api/preparations/${preparationId}/messages`, {
    data: { content: "Suggestion tardive de titre", clientTurnKey: lateKey, correlationKey: lateKey },
  });
  expect(late.ok()).toBeTruthy();
  await page.goto("/portfolio");
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });
  await expect(preparationRow).not.toContainText("Titre tardif");

  const officialName = uniqueProjectName("Nom officiel distinct");
  await page.goto(`/preparations/${preparationId}`);
  const projectId = await constituteAndCreateProject(page, {
    name: officialName,
    summary: "Création explicite",
    alreadyUnique: true,
  });
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

  await page.goto("/portfolio");
  await expect(page.getByTestId(`resume-prep-${preparationId}`)).toHaveCount(0);
  const projectRow = page.getByTestId(`open-project-${projectId}`);
  await expect(projectRow).toContainText(officialName);
  await projectRow.getByRole("button", { name: "Actions de l'espace" }).click();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const renamed = `${officialName} révisé`;
  await page.getByTestId("portfolio-rename-input").fill(renamed);
  await page.getByTestId("portfolio-rename").getByRole("button", { name: "Enregistrer" }).click();
  await expect(projectRow).toContainText(renamed);
  await page.goto(`/projects/${projectId}?surface=travail`);
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByText(renamed)).toHaveCount(0);
  await expect(page.getByTestId(`open-project-${projectId}`)).toHaveCount(0);
});
```

### projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts

```
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyFirstPreparationTitle,
  renamePreparation,
  renameProject,
} from "@/domains/preparation/space-naming";
import { StudioError } from "@/lib/http-errors";
import { loadPersonalBoard } from "@/domains/identity/portfolio-organization";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("preparation title and project name", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL?.includes("sfia_next_e2e")) {
      throw new Error("refusing naming tests outside sfia_next_e2e");
    }
  });

  it("keeps the first accepted title and the pilot choice", async () => {
    const pilotId = await seedPilot("title");
    const prep = await openOrCreatePreparation(pilotId);
    await db.update(preparations).set({ previewName: "apercu", previewSummary: "resume" }).where(eq(preparations.id, prep.id));
    const before = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];

    expect(await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-1", suggested: "",
    })).toEqual({ applied: false });
    expect(await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-1", suggested: "a".repeat(90),
    })).toEqual({ applied: false });

    const applied = await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-2", suggested: "  Analyse   documentaire ",
    });
    expect(applied.applied).toBe(true);
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-3", suggested: "Autre sujet",
    })).applied).toBe(false);

    const titled = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(titled.title).toBe("Analyse documentaire");
    expect(titled.titleSource).toBe("NORA");
    expect(titled.titleRevision).toBe(1);
    expect(titled.titleSourceTurnId).toBe("turn-2");
    expect(titled.previewName).toBe("apercu");
    expect(titled.previewSummary).toBe("resume");
    expect(titled.creationRevision).toBe(before.creationRevision);

    const manual = await renamePreparation({
      pilotId, preparationId: prep.id, title: "Titre du pilote", expectedRevision: 1, intentionKey: "manual-key1",
    });
    expect(manual).toMatchObject({ label: "Titre du pilote", revision: 2, changed: true });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-4", suggested: "Suggestion tardive",
    })).applied).toBe(false);
    const kept = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(kept.title).toBe("Titre du pilote");
    expect(kept.titleSource).toBe("PILOT");
    expect(kept.creationRevision).toBe(before.creationRevision);

    const replay = await renamePreparation({
      pilotId, preparationId: prep.id, title: "Titre du pilote", expectedRevision: 1, intentionKey: "manual-key1",
    });
    expect(replay.changed).toBe(false);
    expect(replay.revision).toBe(2);

    await expect(renamePreparation({
      pilotId, preparationId: prep.id, title: "Autre", expectedRevision: 2, intentionKey: "manual-key1",
    })).rejects.toBeInstanceOf(StudioError);
  });

  it("projects the title and refuses a rename after attachment", async () => {
    const pilotId = await seedPilot("attach");
    const prep = await openOrCreatePreparation(pilotId);
    await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-a", suggested: "Préparation visible",
    });
    const board = await loadPersonalBoard(pilotId, { scope: "current", filter: "all", query: "" });
    expect(board.items.some((item) => item.id === prep.id && item.label === "Préparation visible")).toBe(true);

    await updatePreview(pilotId, prep.id, "Nom officiel", "résumé");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Nom officiel",
      previewSummary: "résumé",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    await expect(renamePreparation({
      pilotId, preparationId: prep.id, title: "Après rattachement", expectedRevision: 1, intentionKey: "after-attach",
    })).rejects.toMatchObject({ code: "CONFLICT" });
    const project = (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId)))[0];
    expect(project.name).toBe("Nom officiel");
    expect(project.id).toBe(created.status === "CREATED" ? created.projectId : "");
    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links).toHaveLength(1);
    const after = await loadPersonalBoard(pilotId, { scope: "current", filter: "preparations", query: "" });
    expect(after.items.some((item) => item.id === prep.id)).toBe(false);
  });

  it("renames a project without changing its identity and keeps the name unique", async () => {
    const pilotId = await seedPilot("names");
    const otherPilot = await seedPilot("other");
    const first = newId("proj");
    const second = newId("proj");
    const foreign = newId("proj");
    await db.insert(projects).values([
      { id: first, ownerPilotId: pilotId, name: "Projet alpha" },
      { id: second, ownerPilotId: pilotId, name: "Projet bêta" },
      { id: foreign, ownerPilotId: otherPilot, name: "Projet alpha" },
    ]);
    const renamed = await renameProject({
      pilotId, projectId: first, name: "  Projet   révisé ", expectedRevision: 0, intentionKey: "name-key-1",
    });
    expect(renamed).toMatchObject({ label: "Projet révisé", revision: 1, changed: true });
    const row = (await db.select().from(projects).where(eq(projects.id, first)))[0];
    expect(row.id).toBe(first);
    expect(row.ownerPilotId).toBe(pilotId);

    const same = await renameProject({
      pilotId, projectId: first, name: "projet révisé", expectedRevision: 1, intentionKey: "name-key-2",
    });
    expect(same.changed).toBe(false);
    expect(same.revision).toBe(1);

    await expect(renameProject({
      pilotId, projectId: second, name: "PROJET RÉVISÉ", expectedRevision: 0, intentionKey: "name-key-3",
    })).rejects.toMatchObject({ code: "CONFLICT" });
    await expect(renameProject({
      pilotId, projectId: second, name: "Projet bêta", expectedRevision: 4, intentionKey: "name-key-4",
    })).rejects.toMatchObject({ code: "CONFLICT" });

    const foreignRename = await renameProject({
      pilotId: otherPilot, projectId: foreign, name: "Projet révisé", expectedRevision: 0, intentionKey: "name-key-5",
    });
    expect(foreignRename.changed).toBe(true);

    const accent = await renameProject({
      pilotId, projectId: second, name: "Ete", expectedRevision: 0, intentionKey: "name-key-6",
    });
    expect(accent.label).toBe("Ete");
    const distinct = await renameProject({
      pilotId, projectId: first, name: "Été", expectedRevision: 1, intentionKey: "name-key-7",
    });
    expect(distinct.label).toBe("Été");
  });
});
```

### projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts

```
import { describe, expect, it } from "vitest";
import {
  NoraTurnQualificationSchema,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
} from "@/domains/conversation/semantic-qualification";
import { normalizePreparationTitle } from "@/domains/preparation/space-naming";

describe("preparation title", () => {
  it("accepts a historical qualification that omits the title", () => {
    const parsed = NoraTurnQualificationSchema.parse({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "Bonjour",
      proposedProjectName: "Nom de travail",
    });
    expect(parsed.suggestedPreparationTitle).toBeUndefined();
    expect(parsed.proposedProjectName).toBe("Nom de travail");
    expect(parsed.goal).toBe("Bonjour");
  });

  it("keeps an unusable suggestion inside a valid qualification", () => {
    const tooLong = "a".repeat(90);
    const parsed = NoraTurnQualificationSchema.parse({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      suggestedPreparationTitle: tooLong,
    });
    expect(parsed.suggestedPreparationTitle).toBe(tooLong);
    expect(normalizePreparationTitle(tooLong)).toBeNull();
    expect(normalizePreparationTitle("  Refonte   des accès  ")).toBe("Refonte des accès");
    expect(normalizePreparationTitle("ligne\nautre")).toBeNull();
    expect(normalizePreparationTitle("<script>")).toBeNull();
    expect(normalizePreparationTitle("")).toBeNull();
  });
});
```

## Fichiers modifiés — diff utile

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index e0f7d5a1..f7888433 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,5 +1,7 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

+Le popup de création SAS06 reste celui déjà livré, à 702×823, et ses repères suivent la création, le contexte et la qualification réellement établis. Un titre de préparation, même proposé par Nora, ne crée pas le projet et ne remplace pas le nom inspecté. La reprise d'un projet existant ne rejoue pas ce popup.
+
 **Statut:** Morris UAT accepté (21/11) · réserve Acquis/À clarifier **techniquement levée** · RECETTE · NO RELEASE · prêt revue intégration Git
 **Base Git figée RECETTE antérieure:** `09a935bc71a3ab77eb063e9425b6f07ca1162417` · tree `5809a0bb707822eadde898b477e341125b746971`
 **Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery`
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 924ddb4c..ca3ea497 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,5 +1,12 @@
 # As-built — Portefeuille personnel et navigation

+## Titre de préparation et nom de projet
+
+Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
+Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
+Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet ». Supprimer reste indisponible. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
+La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.
+
 ## Finitions après revue visuelle

 Source relue, sans modification : menu projet `1420:2138`, barre `1420:285`. Le filet du menu est un enfant de 270×1 px dans un empilement dont l'écart est de 5 px. Le nom fait 15/21 et le type 12/17.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a201141e..2aca4639 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PREPARATION-NAMING-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — titre de préparation et continuité vers le projet
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `aa04daba2d7591d8d28da1dc04901de142e274a3`
+- **commit**: `feat(next): name a preparation without deciding the project`
+- **schema_revision**: `029_preparation_title_and_project_name`, additive, après `028`
+- **scope**: premier titre issu de la qualification existante, renommage manuel de la préparation et du projet, projections du portefeuille, création explicite inchangée
+- **classe**: NO RELEASE · évolution additive · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-FINISH-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 3b43b331..0a4901dd 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -46,4 +46,5 @@ apply "025_provider_admin_security_and_canon.sql"
 apply "026_admin_collector_ops_and_password_null.sql"
 apply "027_derived_embedding_chunks.sql"
 apply "028_pilot_portfolio_organization.sql"
-echo "db:migrate OK (001→028)"
\ No newline at end of file
+apply "029_preparation_title_and_project_name.sql"
+echo "db:migrate OK (001→029)"
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index c0e47a17..db13411f 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -17,7 +17,8 @@ export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "u
 export type PortfolioReread = "reviewed" | "failed" | "not-attempted";

 export type PortfolioIntention = {
-  kind: "favorite" | "archive" | "preference" | "order";
+  kind: "favorite" | "archive" | "preference" | "order" | "rename";
+  intentionKey?: string;
   spaceType?: PersonalSpace["spaceType"];
   spaceId?: string;
   beforeSpaceType?: PersonalSpace["spaceType"];
@@ -38,6 +39,8 @@ export type OwnerSpaceRecord = {
   archived: boolean;
   rowVersion: number;
   customPosition: number | null;
+  displayLabel?: string;
+  nameRevision?: number;
 };

 export type OwnerEffect = "confirmed" | "current" | "absent" | "unchanged" | "unproven";
@@ -63,6 +66,11 @@ export function classifyPortfolioResponse(
     if (kind === "order") {
       return typeof body.version === "number" && typeof body.moved === "boolean" ? "confirmed" : "unknown";
     }
+    if (kind === "rename") {
+      return typeof body.label === "string" && typeof body.revision === "number" && typeof body.intentionKey === "string" && typeof body.changed === "boolean"
+        ? "confirmed"
+        : "unknown";
+    }
   }
   return "unknown";
 }
@@ -100,6 +108,8 @@ export function ownerSpaceRecord(
     archived: record.archived,
     rowVersion: record.rowVersion,
     customPosition: record.customPosition,
+    ...(typeof record.displayLabel === "string" ? { displayLabel: record.displayLabel } : {}),
+    ...(typeof record.nameRevision === "number" ? { nameRevision: record.nameRevision } : {}),
   };
 }

@@ -121,6 +131,12 @@ export function correlatedAcknowledgement(
   if (intention.kind === "order") {
     return body.version === intention.knownVersion + 1 && typeof body.moved === "boolean";
   }
+  if (intention.kind === "rename") {
+    return body.intentionKey === intention.intentionKey
+      && typeof body.revision === "number"
+      && typeof body.label === "string"
+      && (body.revision === intention.knownVersion || body.revision === intention.knownVersion + 1);
+  }
   return false;
 }

@@ -147,7 +163,7 @@ export function reconcileOwnerEffect(input: {
   records: Array<OwnerSpaceRecord | "absent">;
   board: {
     preferences: { view: string; sort: string; version: number };
-    items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition">>;
+    items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition"> & { label?: string }>;
   } | null;
 }): OwnerEffect {
   const { intention, outcome, acknowledgement, records, board } = input;
@@ -171,6 +187,15 @@ export function reconcileOwnerEffect(input: {
   if (intention.kind === "archive") {
     return primary.archived === intention.desired && primary.rowVersion === acknowledgement.rowVersion ? "confirmed" : "current";
   }
+  if (intention.kind === "rename") {
+    if (typeof primary.displayLabel !== "string" || typeof primary.nameRevision !== "number") return "unproven";
+    const named = board.items.find((entry) => entry.spaceType === primary.spaceType && entry.id === primary.id) as { label?: string } | undefined;
+    if (named && typeof named.label === "string" && named.label !== primary.displayLabel) return "unproven";
+    if (primary.displayLabel === acknowledgement.label && primary.nameRevision === acknowledgement.revision) {
+      return acknowledgement.changed === false ? "unchanged" : "confirmed";
+    }
+    return "current";
+  }
   if (intention.kind === "order") {
     if (acknowledgement.moved !== true) return "unchanged";
     if (board.preferences.version !== acknowledgement.version) return "current";
@@ -286,12 +311,14 @@ export function PersonalPortfolio() {
   const acknowledgementRef = useRef<Record<string, unknown> | null>(null);
   const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
   const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
+  const [renameTarget, setRenameTarget] = useState<PersonalSpace | null>(null);
+  const [renameValue, setRenameValue] = useState("");
   const requestSeq = useRef(0);

   useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

   useEffect(() => {
-    const open = Boolean(confirm || confirmRestore);
+    const open = Boolean(confirm || confirmRestore || renameTarget);
     if (!open) return;
     const root = dialogRef.current;
     const previous = menuTrigger.current ?? (document.activeElement as HTMLElement | null);
@@ -305,6 +332,7 @@ export function PersonalPortfolio() {
         if (!blocked.current) {
           setConfirm(null);
           setConfirmRestore(null);
+          setRenameTarget(null);
         }
         return;
       }
@@ -326,7 +354,7 @@ export function PersonalPortfolio() {
       document.removeEventListener("keydown", onKey);
       previous?.focus();
     };
-  }, [confirm, confirmRestore]);
+  }, [confirm, confirmRestore, renameTarget]);

   useEffect(() => {
     if (!menu) return;
@@ -436,11 +464,11 @@ export function PersonalPortfolio() {
       return;
     }
     if (effect === "unchanged") {
-      setNotice("L'espace n'a pas changé de place.");
+      setNotice(settledKind === "rename" ? "Le nom est déjà celui-ci." : "L'espace n'a pas changé de place.");
       return;
     }
     if (outcome === "confirmed" && effect === "confirmed") {
-      setNotice(settledKind === "order" ? "Ordre enregistré." : "");
+      setNotice(settledKind === "order" ? "Ordre enregistré." : settledKind === "rename" ? "Nom enregistré." : "");
       return;
     }
     if (outcome === "confirmed") {
@@ -539,6 +567,7 @@ export function PersonalPortfolio() {
       setPending("");
       setConfirm(null);
       setConfirmRestore(null);
+      setRenameTarget(null);
     }
   }

@@ -718,7 +747,7 @@ export function PersonalPortfolio() {
             <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
             <div className="personal-portfolio-menu-rule" role="separator" />
             <a role="menuitem" href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}><Mark name="arrow" />{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
-            <button type="button" role="menuitem" disabled title="Le renommage arrive avec le parcours de préparation."><Mark name="edit" />Renommer</button>
+            <button type="button" role="menuitem" disabled={locked} onClick={() => { setRenameTarget(space); setRenameValue(space.label); setMenu(null); }}><Mark name="edit" />Renommer</button>
             <button type="button" role="menuitem" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}><Mark name="star" />{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
             <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) - 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Monter</button>
             <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) + 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Descendre</button>
@@ -910,6 +939,32 @@ export function PersonalPortfolio() {
           </div>
         </div>
       ) : null}
+      {renameTarget ? (
+        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setRenameTarget(null); }}>
+          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label={renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"} data-testid="portfolio-rename" onClick={(event) => event.stopPropagation()}>
+            <h2>{renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"}</h2>
+            <p>{renameTarget.spaceType === "preparation" ? "Le titre sert à retrouver votre échange. Il ne modifie pas le nom du futur projet." : "Le nom officiel change. L’identité du projet, son fil et ses ressources restent les mêmes."}</p>
+            <label className="personal-portfolio-rename-field">
+              <span>{renameTarget.spaceType === "preparation" ? "TITRE DE LA PRÉPARATION" : "NOM DU PROJET"}</span>
+              <input data-testid="portfolio-rename-input" value={renameValue} onChange={(event) => setRenameValue(event.target.value)} />
+            </label>
+            {renameTarget.spaceType === "preparation" ? <p>Un titre manuel ne sera plus écrasé par Nora.</p> : null}
+            <div className="personal-portfolio-modal-actions">
+              <button type="button" onClick={() => setRenameTarget(null)}>Annuler</button>
+              <button type="button" className="personal-portfolio-primary" disabled={locked || !renameValue.trim()} onClick={() => {
+                const intentionKey = crypto.randomUUID();
+                const path = renameTarget.spaceType === "preparation"
+                  ? `/api/preparations/${renameTarget.id}/title`
+                  : `/api/projects/${renameTarget.id}/name`;
+                const payload = renameTarget.spaceType === "preparation"
+                  ? { title: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey }
+                  : { name: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey };
+                void mutate(path, "PUT", payload, { kind: "rename", spaceType: renameTarget.spaceType, spaceId: renameTarget.id, knownVersion: renameTarget.nameRevision, intentionKey });
+              }}>Enregistrer</button>
+            </div>
+          </div>
+        </div>
+      ) : null}
     </div>
   );
 }
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index 61f705ba..c4462c0a 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -342,6 +342,9 @@ button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
 .personal-portfolio-modal h2 { margin: 0 0 8px; font-size: 18px; }
 .personal-portfolio-modal p { margin: 0 0 16px; color: var(--pf-muted); }
 .personal-portfolio-modal-actions { display: flex; justify-content: flex-end; gap: 8px; }
+.personal-portfolio-rename-field { display: flex; flex-direction: column; gap: 6px; margin: 0 0 8px; }
+.personal-portfolio-rename-field span { font-size: 11px; letter-spacing: 0.04em; color: var(--pf-muted); }
+.personal-portfolio-rename-field input { height: 38px; border-radius: 9px; border: 1px solid #656fe1; background: #0a0e18; color: #f2f4fc; padding: 0 12px; }

 .personal-portfolio-skeleton {
   height: 136px;
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index 87099823..da29c99c 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -95,6 +95,11 @@ export const preparations = pgTable(
     creationRevision: integer("creation_revision").notNull().default(1),
     previewName: text("preview_name").notNull().default(""),
     previewSummary: text("preview_summary").notNull().default(""),
+    title: text("title"),
+    titleSource: text("title_source").notNull().default("NONE"),
+    titleRevision: integer("title_revision").notNull().default(0),
+    titleSourceTurnId: text("title_source_turn_id"),
+    titleIntentionKey: text("title_intention_key"),
     /** D2 PreparationProjection v1 JSON snapshot — additive; null = legacy/partial. */
     projectionJson: jsonb("projection_json").$type<Record<string, unknown> | null>(),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
@@ -111,6 +116,8 @@ export const projects = pgTable(
       .notNull()
       .references(() => pilots.id),
     name: text("name").notNull(),
+    nameRevision: integer("name_revision").notNull().default(0),
+    nameIntentionKey: text("name_intention_key"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
   },
   (t) => [index("projects_owner_idx").on(t.ownerPilotId)],
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 85a19871..ebfd6c01 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -45,6 +45,7 @@ type QualExtras = Partial<
     | "desiredOutcome"
     | "initialScope"
     | "proposedProjectName"
+    | "suggestedPreparationTitle"
     | "clarifications"
     | "continueChoices"
     | "resourceReferences"
@@ -68,6 +69,7 @@ function dialogue(
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
     proposedProjectName: extras?.proposedProjectName ?? "",
+    suggestedPreparationTitle: extras?.suggestedPreparationTitle,
     intents: [
       {
         id: "i1",
@@ -108,6 +110,7 @@ function effect(
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
     proposedProjectName: extras?.proposedProjectName ?? "",
+    suggestedPreparationTitle: extras?.suggestedPreparationTitle,
     intents: intents.map((it, idx) => ({
       ...it,
       id: it.id ?? `i${idx + 1}`,
@@ -2361,6 +2364,25 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
   if (mergePr?.[1]) {
     return mergePublicationQualification(Number(mergePr[1]));
   }
+  if (text === "Je prépare la refonte des accès utilisateurs") {
+    return dialogue(
+      "Préparer la refonte des accès",
+      "Le sujet est suffisamment établi pour proposer un titre de préparation.",
+      ["FIXTURE_PREPARATION_TITLE"],
+      {
+        projectIntention: "Refondre la gestion des accès",
+        suggestedPreparationTitle: "Refonte des accès utilisateurs",
+      },
+    );
+  }
+  if (text === "Suggestion tardive de titre") {
+    return dialogue(
+      "Suggestion tardive",
+      "Cette suggestion arrive après un titre déjà retenu.",
+      ["FIXTURE_PREPARATION_TITLE_LATE"],
+      { suggestedPreparationTitle: "Titre tardif à ignorer" },
+    );
+  }
   // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
   return dialogue(
     "Dialogue fixture par défaut",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 9d74b517..68925a7b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1129,6 +1129,7 @@ async function runLiveWithToolsInner(
     "- Si le Pilote établit ou corrige explicitement l'objectif fondateur (première intention ou réorientation métier) : renseigner projectIntention fidèlement.",
     "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ou corrigés ce tour ; sinon chaînes vides (conservation D2).",
     "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
+    "- suggestedPreparationTitle = titre court et autonome de la préparation, seulement si le sujet est établi. Chaîne vide sinon. Ce n'est pas proposedProjectName, pas un identifiant, pas une instruction.",
     "- clarifications = UNIQUEMENT les questions encore ouvertes après CE tour. Tableau vide [] = toutes résolues après réévaluation fiable. Ne pas répéter une question déjà tranchée.",
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index efa03dd7..e027da30 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -272,6 +272,12 @@ export const NoraTurnQualificationSchema = z.object({
    * Permet une correction de nom sans second acte d'effet concurrent (S05).
    */
   proposedProjectName: z.string().max(120).default(""),
+  /**
+   * Autonomous preparation title. Empty or absent means no suggestion.
+   * It is not the future official project name. An unusable value is ignored
+   * by the owner and must not invalidate the rest of the qualification.
+   */
+  suggestedPreparationTitle: z.string().max(2000).optional(),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   /**
    * Questions encore ouvertes APRÈS ce tour.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index cf3524b6..5a23cb41 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -21,6 +21,7 @@ import {
   getPreparationContext,
   openOrCreatePreparation,
 } from "@/domains/preparation/service";
+import { applyFirstPreparationTitle } from "@/domains/preparation/space-naming";
 import {
   maybeCapitalizeFromExchange,
   reconstituteConfirmedD4Effects,
@@ -5427,6 +5428,19 @@ export async function postUserMessageAndNora(
     resultPayload.preparationProjection = preparationProjectionAck;
   }

+  if (turnStatus === "COMPLETE" && applied.applied && !ctx.project?.id && !ownershipLostBeforeD4) {
+    try {
+      await applyFirstPreparationTitle({
+        pilotId,
+        preparationId,
+        turnCommandId: reserved.commandId,
+        suggested: qualification.suggestedPreparationTitle ?? "",
+      });
+    } catch {
+      // The confirmed turn stays confirmed. A title is never worth another provider call.
+    }
+  }
+
   emitObs({
     event_name: "d3.turn.completed",
     component: "d3.conversation",
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
index e24a457c..abb444f5 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
@@ -4,11 +4,9 @@ export type PreparationLabelInput = {
   previewSummary?: string;
 };

-/** Neutral label when preview fields are empty — never fabricate "recently modified". */
-export function preparationDisplayLabel(p: PreparationLabelInput): string {
-  const name = p.previewName?.trim();
-  if (name) return name;
-  const summary = p.previewSummary?.trim();
-  if (summary) return summary.slice(0, 80);
-  return `Préparation ${p.id.slice(0, 8)}`;
+/** Canonical title, otherwise the neutral label. Preview text is not a title. */
+export function preparationDisplayLabel(p: PreparationLabelInput & { title?: string | null }): string {
+  const title = p.title?.trim();
+  if (title) return title;
+  return "Nouvelle préparation";
 }
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
index 4c07e4f6..35b21df4 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
@@ -25,6 +25,7 @@ export type PersonalSpace = {
   archived: boolean;
   customPosition: number | null;
   rowVersion: number;
+  nameRevision: number;
   activityLabel: string;
 };

@@ -57,6 +58,7 @@ type Row = {
   archived_at: string | null;
   custom_position: number | null;
   row_version: number;
+  name_revision: number;
 };

 type ReadCursor = {
@@ -135,6 +137,7 @@ function asSpace(row: Row): PersonalSpace {
     archived: Boolean(row.archived_at),
     customPosition: row.custom_position,
     rowVersion: row.row_version ?? 0,
+    nameRevision: Number(row.name_revision) || 0,
     activityLabel: opened ? "Dernière ouverture" : "Créé le",
   };
 }
@@ -154,7 +157,8 @@ function collectionSql(pilotId: string) {
       COALESCE(o.favorite, false) AS favorite,
       o.archived_at,
       o.custom_position,
-      COALESCE(o.row_version, 0) AS row_version
+      COALESCE(o.row_version, 0) AS row_version,
+      COALESCE(p.name_revision, 0) AS name_revision
     FROM projects p
     LEFT JOIN pilot_space_organization o
       ON o.owner_pilot_id = p.owner_pilot_id
@@ -165,7 +169,7 @@ function collectionSql(pilotId: string) {
     SELECT
       'preparation'::text,
       pr.id,
-      COALESCE(NULLIF(pr.preview_name, ''), 'Nouvelle préparation'),
+      COALESCE(NULLIF(pr.title, ''), 'Nouvelle préparation'),
       pr.created_at,
       to_char(pr.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
       o.last_opened_at,
@@ -175,7 +179,8 @@ function collectionSql(pilotId: string) {
       COALESCE(o.favorite, false),
       o.archived_at,
       o.custom_position,
-      COALESCE(o.row_version, 0)
+      COALESCE(o.row_version, 0),
+      COALESCE(pr.title_revision, 0)
     FROM preparations pr
     LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
     LEFT JOIN pilot_space_organization o
@@ -304,7 +309,7 @@ export async function loadPersonalBoard(
       created_text AS created_at,
       opened_text AS last_opened_at,
       activity_text AS activity_at,
-      favorite, archived_at, custom_position, row_version
+      favorite, archived_at, custom_position, row_version, name_revision
     FROM (${collectionSql(pilotId)}) spaces
     WHERE ${scopeSql} ${filterSql} ${searchSql}
     ${cursor ? keysetSql(cursor) : sql``}
@@ -319,7 +324,7 @@ export async function loadPersonalBoard(
             created_text AS created_at,
             opened_text AS last_opened_at,
             activity_text AS activity_at,
-            favorite, archived_at, custom_position, row_version
+            favorite, archived_at, custom_position, row_version, name_revision
           FROM (${collectionSql(pilotId)}) spaces
           WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
           ORDER BY last_opened_at DESC, id DESC
@@ -688,7 +693,7 @@ export async function movePersonalSpace(
     }
     const rows = await tx<Row[]>`
       SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
-             activity_text AS activity_at, favorite, archived_at, custom_position, row_version
+             activity_text AS activity_at, favorite, archived_at, custom_position, row_version, name_revision
       FROM (${collectionSql(pilotId)}) spaces
       WHERE archived_at IS NULL
       ORDER BY custom_position ASC NULLS LAST, created_at DESC, id DESC
@@ -753,14 +758,21 @@ export async function movePersonalSpace(

 /** Owner read of one space, independent of the current page, filter, or sort. */
 export async function readPersonalSpaceRecord(pilotId: string, spaceType: SpaceType, spaceId: string) {
+  let projectLabel = "";
+  let projectRevision = 0;
   if (spaceType === "project") {
-    const owned = await sql<{ id: string }[]>`
-      SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
+    const owned = await sql<{ id: string; display_label: string; name_revision: number }[]>`
+      SELECT id, name AS display_label, name_revision FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
     `;
     if (!owned[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
+    projectLabel = owned[0].display_label;
+    projectRevision = Number(owned[0].name_revision) || 0;
   } else {
-    const owned = await sql<{ id: string; eligible: boolean }[]>`
-      SELECT pr.id, (pr.status = 'OPEN' AND l.preparation_id IS NULL) AS eligible
+    const owned = await sql<{ id: string; eligible: boolean; display_label: string; name_revision: number }[]>`
+      SELECT pr.id,
+             (pr.status = 'OPEN' AND l.preparation_id IS NULL) AS eligible,
+             COALESCE(NULLIF(pr.title, ''), 'Nouvelle préparation') AS display_label,
+             pr.title_revision AS name_revision
       FROM preparations pr
       LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
       WHERE pr.id = ${spaceId} AND pr.owner_pilot_id = ${pilotId}
@@ -779,6 +791,8 @@ export async function readPersonalSpaceRecord(pilotId: string, spaceType: SpaceT
       archived: Boolean(org[0]?.archived_at),
       rowVersion: org[0]?.row_version ?? 0,
       customPosition: org[0]?.custom_position ?? null,
+      displayLabel: owned[0].display_label,
+      nameRevision: Number(owned[0].name_revision) || 0,
     };
   }
   const org = await sql<{ favorite: boolean; archived_at: string | null; row_version: number; custom_position: number | null }[]>`
@@ -794,13 +808,15 @@ export async function readPersonalSpaceRecord(pilotId: string, spaceType: SpaceT
     archived: Boolean(org[0]?.archived_at),
     rowVersion: org[0]?.row_version ?? 0,
     customPosition: org[0]?.custom_position ?? null,
+    displayLabel: projectLabel,
+    nameRevision: projectRevision,
   };
 }

 export async function listFavoriteSpaces(pilotId: string): Promise<PersonalSpace[]> {
   const rows = await sql<Row[]>`
     SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
-           activity_text AS activity_at, favorite, archived_at, custom_position, row_version
+           activity_text AS activity_at, favorite, archived_at, custom_position, row_version, name_revision
     FROM (${collectionSql(pilotId)}) spaces
     WHERE favorite AND archived_at IS NULL
     ORDER BY label ASC, id ASC
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts
index 3f35a4b3..a1a26dfc 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts
@@ -33,16 +33,17 @@ describe("A1 preparations cursor", () => {

 describe("A1 preparation labels", () => {
   it("stays neutral when preview empty", () => {
-    expect(preparationDisplayLabel({ id: "abcdefghij" })).toBe("Préparation abcdefgh");
+    expect(preparationDisplayLabel({ id: "abcdefghij" })).toBe("Nouvelle préparation");
   });

-  it("prefers previewName", () => {
+  it("uses the canonical title and ignores the preview", () => {
     expect(
       preparationDisplayLabel({
         id: "x",
+        title: "Refonte des accès",
         previewName: "  Sas alpha  ",
         previewSummary: "ignored",
       }),
-    ).toBe("Sas alpha");
+    ).toBe("Refonte des accès");
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 1081a852..475f2c21 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -148,5 +148,23 @@ describe("portfolio organization rules", () => {
       records: [],
       board: { ...board, preferences: { ...board.preferences, view: "grouped", version: 9 } },
     })).toBe("current");
+    const renamed = { ...record, displayLabel: "Nouveau nom", nameRevision: 1 };
+    const rename: PortfolioIntention = { kind: "rename", spaceType: "project", spaceId: "prj_1", knownVersion: 0, intentionKey: "intent-01" };
+    expect(classifyPortfolioResponse(200, { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true }, "rename")).toBe("confirmed");
+    expect(classifyPortfolioResponse(200, { ok: true }, "rename")).toBe("unknown");
+    expect(reconcileOwnerEffect({
+      intention: rename,
+      outcome: "confirmed",
+      acknowledgement: { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true },
+      records: [renamed],
+      board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
+    })).toBe("confirmed");
+    expect(reconcileOwnerEffect({
+      intention: rename,
+      outcome: "confirmed",
+      acknowledgement: { label: "Autre", revision: 1, intentionKey: "intent-01", changed: true },
+      records: [renamed],
+      board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
+    })).toBe("current");
   });
 });
```

## Contrôle de couverture

| Fichier | État | Couverture |
| --- | --- | --- |
| projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/src/db/migrations/029_preparation_title_and_project_name.sql | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts | créé | contenu intégral ci-dessus |
| projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/construction/delivery-history.md | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/scripts/db-migrate.sh | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/db/schema.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/conversation/service.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/tests/unit/portfolio-cursor.test.ts | modifié | diff utile ci-dessus |
| projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts | modifié | diff utile ci-dessus |

Les 22 fichiers du diff aa04daba..7bd37c0e sont listés. Aucun autre fichier produit n'est inclus dans le commit.
