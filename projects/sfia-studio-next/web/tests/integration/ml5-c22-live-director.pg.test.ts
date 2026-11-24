/**
 * C22 — bounded DEV LIVE director path (isolated workspace).
 * Skips when Cursor SDK credentials unavailable (TOOLING GAP).
 * Does not mutate the Studio Next construction worktree.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync, readFileSync, existsSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
} from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
  reconcileCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { resolveCursorApiKey } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

const LIVE = (process.env.SFIA_CURSOR_EFFECT_MODE || "").toUpperCase() === "LIVE";

function missionBody(wsHint: string): TechnicalContractBody {
  return {
    title: "C22 LIVE add(a,b) isolé",
    engagements: {
      willDo: "Créer src/add.ts exportant add(a:number,b:number)=>a+b et un test exit capture",
      willNotDo: "Aucun réseau, aucun git remote, hors workspace isolé",
      expectedResult: "fichier + capture test exit=0",
      pilotControl: "D6 HumanDecision",
    },
    volets: {
      mission: "add pure function",
      perimeter: wsHint,
      capabilitiesAuthority: "Cursor SDK local borné",
      stopConditions: "STOP si hors workspace",
      proofsSources: "rapport + fichiers + .sfia/test-captures",
      integrity: "fingerprint contrat",
    },
    instructionText: [
      "Workspace isolé uniquement.",
      "1. Créer src/add.ts avec export function add(a: number, b: number) { return a + b }",
      "2. Ne PAS écrire de faux fichier de succès de test — Studio vérifiera add indépendamment.",
      "3. Écrire .sfia/attempts/<attemptId>/realization-report.md avec lignes exactes:",
      "   attemptId: <attemptId>",
      "   contractFingerprint: <fingerprint du plan>",
      "   filesCreated: src/add.ts",
      "   testsDeclared: add",
      "4. Ne pas toucher d'autres répertoires. Pas de git push.",
    ].join("\n"),
    risks: ["effet hors sandbox"],
    exclusions: ["GitHub remote"],
    acceptance: {
      criteria: ["src/add.ts export add", "test add exit=0"],
      expectedProofs: ["fichier", "capture exit"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["fs_write"],
      permissionsNeeded: ["workspace"],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["pas de rollback auto"],
    gitScope: null,
  };
}

describe("C22 DEV LIVE director (bounded)", () => {
  let workspaceRoot = "";
  let keySource = "NONE";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    workspaceRoot = mkdtempSync(join(tmpdir(), "sfia-c22-live-ws-"));
    mkdirSync(join(workspaceRoot, "src"), { recursive: true });
    writeFileSync(join(workspaceRoot, "README.md"), "# isolated c22\n");
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = workspaceRoot;
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "1";
    const k = await resolveCursorApiKey();
    keySource = k.source;
  });

  afterAll(() => {
    // keep workspace for evidence inspection under /tmp
    writeFileSync(
      "/tmp/sfia-c22-campaign/live-workspace.txt",
      workspaceRoot + "\nkeySource=" + keySource + "\n",
    );
  });

  it(
    "LIVE dispatch → supervise → autonomous dossier (or skip TOOLING GAP)",
    async () => {
      if (!LIVE) {
        console.log("SKIP — SFIA_CURSOR_EFFECT_MODE not LIVE");
        return;
      }
      if (keySource === "NONE") {
        console.log("INCOMPLETE / TOOLING GAP — no Cursor API key");
        expect(keySource).toBe("NONE");
        return;
      }

      const seed = await seedPilotProjectWithCognitiveFiliation("c22-live");
      const c = await createTechnicalContract({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        preparationId: seed.preparationId,
        contractKey: "c22-live-add",
        body: missionBody(workspaceRoot),
        markReady: true,
        sourcesSufficient: true,
        cognitiveWorkId: seed.cognitiveWorkId,
        cognitiveRevision: seed.cognitiveRevision,
      });
      const prep = await prepareCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        contractId: c.contractId,
        correlationKey: newId("corr"),
        workspaceKey: "default",
      });
      await authorizeCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        statement: "J'autorise le contrat exact inspecté",
        inspectedFingerprint: c.fingerprint,
        confirmed: true,
      });

      const dispatched = await dispatchCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
      });

      // Observe up to ~3 min via reconcile (supervisor also ticks in-process).
      let terminal = dispatched.status === "COMPLETED";
      const deadline = Date.now() + 180_000;
      while (!terminal && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 4000));
        const rec = await reconcileCursorExecution({
          pilotId: seed.pilotId,
          projectId: seed.projectId,
          attemptId: prep.attemptId,
        });
        terminal =
          rec.status === "COMPLETED" ||
          rec.status === "FAILED" ||
          rec.status === "AMBIGUOUS";
        if (terminal) break;
      }

      const attempt = (
        await db
          .select()
          .from(effectAttempts)
          .where(eq(effectAttempts.id, prep.attemptId))
          .limit(1)
      )[0]!;
      const live = JSON.parse(attempt.resultJson || "{}") as {
        runId?: string;
        agentId?: string;
        terminalStatus?: string;
        restitutionPipelineStatus?: string;
      };

      writeFileSync(
        "/tmp/sfia-c22-campaign/live-attempt.json",
        JSON.stringify(
          {
            attemptId: prep.attemptId,
            status: attempt.status,
            live,
            fingerprint: c.fingerprint,
            workspaceRoot,
            keySource,
          },
          null,
          2,
        ),
      );

      expect(live.runId || live.agentId || attempt.status === "COMPLETED").toBeTruthy();

      // Allow restitution pipeline to finish
      for (let i = 0; i < 30; i++) {
        const h = (
          await db
            .select()
            .from(realizationHandoffs)
            .where(eq(realizationHandoffs.attemptId, prep.attemptId))
            .limit(1)
        )[0];
        const q = (
          await db
            .select()
            .from(realizationQualifications)
            .where(eq(realizationQualifications.attemptId, prep.attemptId))
            .limit(1)
        )[0];
        if (h && q) {
          writeFileSync(
            "/tmp/sfia-c22-campaign/live-dossier.json",
            JSON.stringify(
              {
                handoffId: h.id,
                handoffStatus: h.status,
                verdict: q.verdict,
                noraKind: (q.noraAnalysisMarkdown || "").slice(0, 80),
                limits: q.limitsJson,
              },
              null,
              2,
            ),
          );
          expect(h.id).toBeTruthy();
          expect(q.verdict).toBeTruthy();
          return;
        }
        await reconcileCursorExecution({
          pilotId: seed.pilotId,
          projectId: seed.projectId,
          attemptId: prep.attemptId,
        });
        await new Promise((r) => setTimeout(r, 3000));
      }

      // Soft fail with evidence — LIVE may still be running
      const still = (
        await db
          .select()
          .from(effectAttempts)
          .where(eq(effectAttempts.id, prep.attemptId))
          .limit(1)
      )[0];
      throw new Error(
        `LIVE dossier not materialised in time — status=${still?.status} live=${still?.resultJson?.slice(0, 400)}`,
      );
    },
    240_000,
  );
});
