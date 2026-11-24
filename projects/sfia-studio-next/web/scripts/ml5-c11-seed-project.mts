/**
 * ML5 C11 — seed DEV project data only (no technical contract).
 * Contract must be produced by Nora LIVE (+ bridge), not by this seed.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { savePreparationDocument } from "../src/domains/document/service";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const OUT_DIR = join(process.cwd(), "../../../.tmp-sfia-review/browser/c11");

const DOC_NEED = `# Besoin technique — Démo C11 LIVE

## Objectif utilisateur
Créer dans le workspace Cursor de test le fichier \`DEMO_C11.txt\` contenant exactement une ligne :

\`\`\`
SFIA-C11-CURSOR-LIVE-OK
\`\`\`

Puis vérifier l'existence et le contenu du fichier.

## Contraintes
- Workspace isolé DEV uniquement (\`/tmp/sfia-c11-cursor-live-ws\`).
- Aucun push GitHub, aucune mutation RECETTE/STABLE.
- HumanDecision D6 obligatoire avant dispatch Cursor.
- Pas de MCP requis pour cette mission.
`;

const DOC_CTX = `# Contexte projet — Atlas DEV (fictif)

## Décision applicable
DÉC-C11-WS-01 — Les effets Cursor LIVE sont limités au workspace de test isolé.
Toute écriture hors de ce workspace est interdite.

## Restriction
R-C11-NO-GIT — Aucun commit ni push n'est autorisé pour la mission C11 primaire.

## Information incomplète contrôlée
Le chemin exact du binaire \`verify-demo\` mentionné dans une note interne n'est pas fourni
(fichier absent) — Nora doit signaler cette inconnue si elle est déterminante.
Elle ne doit pas inventer le binaire ; la vérification fichier suffit.

## Contradiction contrôlée
Note A : « le fichier témoin s'appelle DEMO_C11.txt ».
Note B (obsolète) : « le fichier témoin s'appelle DEMO_OK.txt ».
La Note A prévaut (décision DÉC-C11-WS-01 / besoin technique).
`;

async function resolvePilotA(): Promise<string> {
  const byGh = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (byGh) return byGh.id;
  const byName = (
    await db.select().from(pilots).where(eq(pilots.displayName, "Pilot A (DEV)")).limit(1)
  )[0];
  if (byName) return byName.id;
  throw new Error("Pilot A (DEV) introuvable — lancer auto-session d'abord");
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync("/tmp/sfia-c11-cursor-live-ws", { recursive: true });

  const pilotId = await resolvePilotA();
  const label = `ML5-C11-LIVE-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(
    pilotId,
    prep.id,
    label,
    "C11 DEV LIVE — Nora → D6 → Cursor SDK → D8 → Nora",
  );
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C11 LIVE chain — project data only",
    idempotencyKey: newId("idem"),
  });
  if (
    (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") ||
    !("projectId" in created) ||
    !created.projectId
  ) {
    throw new Error(`project create fail: ${JSON.stringify(created)}`);
  }
  const projectId = created.projectId;

  const docNeed = await savePreparationDocument(
    pilotId,
    prep.id,
    "Besoin technique C11 — DEMO_C11.txt",
    DOC_NEED,
    undefined,
    { correlationKey: `c11-doc-need-${newId("ck").slice(-8)}` },
  );
  const docCtx = await savePreparationDocument(
    pilotId,
    prep.id,
    "Contexte et décisions C11",
    DOC_CTX,
    undefined,
    { correlationKey: `c11-doc-ctx-${newId("ck").slice(-8)}` },
  );

  const manifest = {
    scenarioId: "ml5-c11-live-20261123",
    at: new Date().toISOString(),
    creationMechanism: "DOMAIN_SEED_PROJECT_DATA_ONLY",
    honesty:
      "Seed = projet + documents. Aucun contrat technique injecté. Contrat attendu de Nora LIVE.",
    pilotId,
    projectId,
    projectName: label,
    preparationId: prep.id,
    documents: [
      {
        title: "Besoin technique C11 — DEMO_C11.txt",
        status: docNeed.status,
        documentId: "documentId" in docNeed ? docNeed.documentId : null,
      },
      {
        title: "Contexte et décisions C11",
        status: docCtx.status,
        documentId: "documentId" in docCtx ? docCtx.documentId : null,
      },
    ],
    workspaceRoot: "/tmp/sfia-c11-cursor-live-ws",
    witnessFile: "DEMO_C11.txt",
    witnessContent: "SFIA-C11-CURSOR-LIVE-OK",
    frontier: "LIVE_TARGET",
  };
  writeFileSync(join(OUT_DIR, "scenario-ids.json"), JSON.stringify(manifest, null, 2));
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
