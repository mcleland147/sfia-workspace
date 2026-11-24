/**
 * ML5 C10 — seed a correlated DEV mono-attempt scenario (SCRIPTED fixture).
 * Creates: Pilot (existing DEV A), project, Nora preparation linkage, READY contract.
 * Does NOT claim Nora cognitively authored the contract — creationMechanism: DOMAIN_SEED_SCRIPTED.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const OUT_DIR = join(
  process.cwd(),
  "../../../.tmp-sfia-review/browser/c10",
);

const LONG_INSTRUCTION = [
  "# Instruction technique intégrale — ML5 Cycle 10 (SCRIPTED)",
  "",
  "## Objectif",
  "Démontrer un parcours mono-tentative gouverné depuis l'intention jusqu'au bilan D8,",
  "sans effet Cursor SDK LIVE ni push GitHub REAL.",
  "",
  "## Périmètre IN",
  "- Contrat inspectable (visionneuse 50/50)",
  "- HumanDecision D6 Oui/Non authentifiés",
  "- Adaptateur Cursor SCRIPTED phasé (RUNNING → COMPLETED)",
  "- Bilan D8 à quatre onglets",
  "- Retour Nora contextualisé sans envoi automatique",
  "",
  "## Périmètre OUT",
  "- Cursor SDK LIVE à effets externes",
  "- WEB LIVE (B09)",
  "- Push code projet / PR / merge",
  "- Mutations RECETTE/STABLE",
  "",
  "## Étapes techniques",
  "1. Inspecter ce contrat dans Travail / Exécution.",
  "2. Refuser une première préparation (D6 Non) — aucun dispatch.",
  "3. Préparer à nouveau, autoriser (D6 Oui) sur l'empreinte exacte.",
  "4. Observer RUNNING puis réconcilier vers COMPLETED (SCRIPTED_PHASED).",
  "5. Ouvrir le bilan D8, parcourir les quatre onglets, consulter les pièces.",
  "6. Revenir vers Nora avec la référence du bilan, brouillon non envoyé.",
  "",
  "## Critères d'acceptation",
  "- Même projectId / contractId / attemptId (mandat Oui) corrélés.",
  "- Refus D6 authentifié avec decisionId, sans tentative AUTHORIZED/DISPATCHED.",
  "- Observations SCRIPTED_OBSERVATION_RUNNING consultables avant terminaison.",
  "- Bilan D8 réellement ouvert (≠ liste seule).",
  "",
  "## STOP",
  "STOP si LIVE/REAL externe, double dispatch, ou empreinte divergente.",
  "",
  "## Empreinte / version",
  "Version contractuelle gérée par le serveur. Cette instruction doit rester",
  "lisible sans troncature forcée — scroll de la visionneuse autorisé.",
  "",
  ...Array.from({ length: 12 }, (_, i) =>
    `Paragraphe de densité ${i + 1}/12 — texte volontairement long pour valider le scroll et l'absence de troncature silencieuse de l'instruction intégrale dans ContractViewer.`,
  ),
].join("\n");

function sampleBody(): TechnicalContractBody {
  return {
    title: "ML5 C10 — Parcours mono-tentative gouverné (SCRIPTED)",
    engagements: {
      willDo:
        "Exécuter l'instruction autorisée via adaptateur Cursor SCRIPTED phasé, produire handoff et qualification D8.",
      willNotDo:
        "Aucun push GitHub REAL, aucun Cursor SDK LIVE externe, aucune mutation RECETTE/STABLE.",
      expectedResult:
        "Tentative COMPLETED SCRIPTED avec observations RUNNING, bilan D8 consultable, retour Nora contextualisé.",
      pilotControl: "HumanDecision D6 explicite Oui/Non — lecture ≠ autorisation.",
    },
    volets: {
      mission: "Démonstration E2E ML5 Cycle 10 — une tentative, des transitions prouvées.",
      perimeter: "DEV local 127.0.0.1:3100 / PostgreSQL :5433 / SCRIPTED only.",
      capabilitiesAuthority: "Adaptateur SCRIPTED déclaré — ≠ LIVE SDK.",
      stopConditions: "STOP sur LIVE non autorisé, empreinte divergente, double dispatch.",
      proofsSources: "Handoff SCRIPTED_ADAPTER + captures BROWSER C10 + manifeste mono-tentative.",
      integrity: "Fingerprint contrat = empreinte inspectée au D6 Oui.",
    },
    instructionText: LONG_INSTRUCTION,
    risks: [
      "Confusion fixture SCRIPTED ↔ observation LIVE",
      "401 sans cookie pris pour refus D6",
      "Liste des tentatives prise pour bilan D8",
    ],
    exclusions: ["Cursor SDK LIVE", "WEB LIVE B09", "Push code projet"],
    acceptance: {
      criteria: [
        "Contrat inspectable avec instruction intégrale",
        "D6 Non authentifié sans effet",
        "D6 Oui sur fingerprint exact",
        "RUNNING avec activité puis COMPLETED",
        "Bilan D8 4 onglets + retour Nora sans envoi auto",
      ],
      expectedProofs: [
        "Captures PNG C10 + SHA-256",
        "Manifeste mono-tentative",
        "decisionId refus et mandat",
        "attemptId unique Oui traversant Travail/Exécution/Résultats",
      ],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["SCRIPTED_PHASED"],
      permissionsNeeded: ["DEV_AUTO_SESSION"],
    },
    stopConditions: ["LIVE_WITHOUT_GO", "FINGERPRINT_MISMATCH", "DOUBLE_DISPATCH"],
    reversibilityLimits: ["Pas de rollback GitHub", "CANCEL ≠ rollback workspace"],
    gitScope: null,
  };
}

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
  process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";

  const pilotId = await resolvePilotA();
  const label = `ML5-C10-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "Parcours mono-tentative C10 SCRIPTED");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C10 mono-attempt E2E SCRIPTED",
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

  const contract = await createTechnicalContract({
    pilotId,
    projectId,
    preparationId: prep.id,
    contractKey: `c10-mono-${newId("ck").slice(-8)}`,
    body: sampleBody(),
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {
    scenarioId: "ml5-c10-mono-20261123",
    at: new Date().toISOString(),
    creationMechanism: "DOMAIN_SEED_SCRIPTED",
    honesty:
      "Contrat créé par seed domaine (markReady serveur) — ≠ création cognitive Nora LIVE.",
    pilotId,
    projectId,
    projectName: label,
    preparationId: prep.id,
    contractId: contract.contractId,
    contractKey: contract.contractKey,
    contractVersion: contract.version,
    fingerprint: contract.fingerprint,
    instructionBytes: LONG_INSTRUCTION.length,
    attemptIdYes: null as string | null,
    attemptIdRefuse: null as string | null,
    frontier: "SCRIPTED",
  };
  writeFileSync(join(OUT_DIR, "scenario-ids.json"), JSON.stringify(manifest, null, 2));
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
