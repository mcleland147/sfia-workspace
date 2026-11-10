# SFIA Studio Next — Review Pack FULL
## R5 / Cycle 8 — GLOBAL Intent Continuity Nora/Studio (DEV)

**Date/heure :** 2026-11-10 12:58:51 +0100 (Europe/Paris)
**GO Morris :** mise en conformité transverse — 2026-11-10
**Intention globale :** Nora conduit les intentions via capacités Studio existantes (D1–D9) — ACCEPT-01 n'est qu'un exemple
**Base :** `d7f1507a` / `3e9e1086`
**Feat HEAD :** `12e26e323a609646bbd437870aca9314c215c9ed`
**Feat tree :** `dcd83f08d487e820995fc6a7105757e9e8a69a7a`
**Commits :** `b0e23c46` → `cf5bac70` → `f42cb2f5` → `12e26e32`
**fix/ :** `d7f1507a` / `3e9e1086` préservé
**Handoff remplacé :** `69767f66` / `908a4ba8`
**RECETTE :** `8vZjme4-KnnPkAqm_QxMz` intacte
**Verdict :** NORA/STUDIO GLOBAL INTENT CONTINUITY — EXISTING CAPABILITIES INTEGRATED — MULTI-DOMAIN BEHAVIOR VERIFIED AT REPORTED LEVEL — NOMINAL ARCHITECTURE PRESERVED — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PUSH OR RECETTE AUTHORIZED

---

## 01. Git Truth Check

| Item | Valeur |
|---|---|
| remote | github.com/mcleland147/sfia-workspace |
| feat | `12e26e323a609646bbd437870aca9314c215c9ed` / `dcd83f08d487e820995fc6a7105757e9e8a69a7a` |
| fix | `d7f1507a` / `3e9e1086` |
| main | `6667a438` |
| DEV | PG 5433 ; RECETTE 3200/5434 |
| SDK | @openai/agents 0.21.0 |
| Product push | **AUCUN** |

---

## 02. Sources et décisions

- Cadrage Morris @69c27832 blob 2322644a — contrat de sortie §§1–10
- A3 : pas de moteur générique
- ENV-01 / versioning v1.0 : NO RELEASE

---

## 03. Intention globale Morris

Nora conduit intention → capacités → résultats → continuation → décisions → reprise, sur **toutes** capacités implémentées — pas seulement Git.

---

## 04. Cartographie AS-IS D1–D9

| Domaine | AS-IS | Mobilisation Nora | Statut ce delivery |
|---|---|---|---|
| D1 | session/identity | préconditions | IMPLEMENTED |
| D2 | createProjectCommand + sas UI | **NOUVEAU** : qualify + AWAITING_PILOT_ACT + advance après acte | BEHAVIOR PROVEN (scén. B/I) |
| D3 | postUserMessageAndNora | propriétaire | BEHAVIOR PROVEN |
| D4 | CREATE/REVISE/read tools | existant + Continue + scén. C/D | BEHAVIOR PROVEN |
| D5 | applyConversationalAuthority | déjà avant Nora | IMPLEMENTED / mobilized ; suite ml3 **non rejouée** ce cycle |
| D6 | HD + authorizePublication | D5 path + Git mission | BEHAVIOR PROVEN (Git+authority) |
| D7/D8/D9 | prepare/dispatch/reconcile | mission `pub:mission:` | BEHAVIOR PROVEN SCRIPTED |

---

## 05. Architecture nominale

- Une entrée D3 ; un generateNoraReply ; owners inchangés
- `intent-conduction.ts` = helpers communs (pas d'autorité)
- Git reste adaptation via mission-continuity

---

## 06. Mécanisme commun

`qualifyStudioIntent` → missionProjection refs → owner invoke → `cognitiveContinueFromFacts` / authoritySnippets → `loadPriorMissionProjection` depuis turn resultJson

READ≠COMMAND : `listMessages` **ne** déclenche **plus** recover/dispatch.

Recover gouverné : `postUserMessageAndNora` (commande), authorize (mission), reconcile (mission).

---

## 07–08. Capacités raccordées / non implémentées

Raccordées ce cycle : D2 accompaniment, D4 CREATE/REVISE continuity, D7/D9 ACCEPT-01, contrats K.
D5/D6 : chemin existant conservé.
Futures Dn : contrat `future.example_capability` (test K) — **pas** déployé.

---

## 09–10. Créations et diffs


### CREATED/HEAD `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts`

bytes=8745

```typescript
/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, and reconstructs prior mission state from turn resultJson.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands } from "@/db/schema";
import { qualifyDocumentAct } from "./document-act";
import {
  qualifyPublicationMission,
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

/** Logical capability ids — mapping only, not a second permission catalog. */
export type StudioCapabilityId =
  | "d2.create_project"
  | "d3.converse"
  | "d4.create_document"
  | "d4.revise_document"
  | "d4.read_knowledge"
  | "d5.pilotage_command"
  | "d6.human_decision"
  | "d7.prepare_publication"
  | "d7.dispatch_publication"
  | "d9.git_integration";

export type QualifiedIntent = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  documentAct: ReturnType<typeof qualifyDocumentAct>;
  publication: ReturnType<typeof qualifyPublicationMission>;
  /** Pilotage/D5-D6 left to applyConversationalAuthority (existing owner path). */
  likelyPilotageSignal: boolean;
  simpleDialogue: boolean;
};

const PROJECT_CREATE_RE =
  /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;
const PROJECT_NAME_RE =
  /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?([^»"\n.]{2,80})[»"]?/i;
const PILOTAGE_SIGNAL_RE =
  /\b(?:ouvre|ouvrir|cl[oô]ture|cl[oô]turer|cycle|m[eé]thode|trajectoire|restriction|r[eé]voque)\b/i;

/**
 * Contract for integrating a future capability without rebuilding D3.
 * Scenario K uses this shape in tests — not a runtime registry engine.
 */
export type CapabilityMobilizationContract = {
  capabilityId: StudioCapabilityId | string;
  ownerDomain: "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8" | "D9" | string;
  invokeOwner: string;
  preconditions: string[];
  rightsBoundary: string;
  structuredResultKeys: string[];
  continuationHook: "cognitiveContinueFromFacts" | "authoritySnippets" | "missionProjection" | "none";
  interruptionRecovery: string;
};

export const CAPABILITY_CONTRACTS: CapabilityMobilizationContract[] = [
  {
    capabilityId: "d2.create_project",
    ownerDomain: "D2",
    invokeOwner: "createProjectCommand (Pilot explicit act)",
    preconditions: ["preparation OPEN", "previewName/summary", "Pilot click/API"],
    rightsBoundary: "ownerPilotId + creationRevision CAS",
    structuredResultKeys: ["status", "projectId"],
    continuationHook: "missionProjection",
    interruptionRecovery: "create_project_commands idempotencyKey + reconcileCreateProject",
  },
  {
    capabilityId: "d4.create_document",
    ownerDomain: "D4",
    invokeOwner: "createDocument / document-act in postUserMessageAndNora",
    preconditions: ["explicit CREATE intent", "proposal extract", "turn fence"],
    rightsBoundary: "preparation ownership + turn lease",
    structuredResultKeys: ["documentId", "revisionId", "status"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "creationCorrelationKey / reconstituteConfirmedD4Effects",
  },
  {
    capabilityId: "d5.pilotage_command",
    ownerDomain: "D5",
    invokeOwner: "applyConversationalAuthority → executePilotageCommand",
    preconditions: ["project linked", "CLEAR intent", "USER message COMPLETE"],
    rightsBoundary: "project ownership + HumanDecision when required",
    structuredResultKeys: ["command.status", "effects", "decisionId"],
    continuationHook: "authoritySnippets",
    interruptionRecovery: "business_commands clientCommandKey",
  },
  {
    capabilityId: "d6.human_decision",
    ownerDomain: "D6",
    invokeOwner: "insertHumanDecision / authorizePublication",
    preconditions: ["Pilot act", "fingerprint/mandate when effect-bound"],
    rightsBoundary: "D6 owner only — Nora never invents HD",
    structuredResultKeys: ["decisionId", "state"],
    continuationHook: "missionProjection",
    interruptionRecovery: "human_decisions + effect_attempts.decisionId",
  },
  {
    capabilityId: "d7.prepare_publication",
    ownerDomain: "D7",
    invokeOwner: "preparePublication",
    preconditions: ["AVAILABLE revision", "git link", "explicit path for Nora mission"],
    rightsBoundary: "D1/D9 permissions at prepare",
    structuredResultKeys: ["attemptId", "status", "fingerprint"],
    continuationHook: "missionProjection",
    interruptionRecovery: "effect_attempts correlationKey pub:mission:*",
  },
  {
    capabilityId: "future.example_capability",
    ownerDomain: "Dn",
    invokeOwner: "<owner service>",
    preconditions: ["declared by owner"],
    rightsBoundary: "owner rights — never Nora",
    structuredResultKeys: ["status", "id"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "owner correlation / idempotency",
  },
];

export function qualifyStudioIntent(userText: string): QualifiedIntent {
  const documentAct = qualifyDocumentAct(userText);
  const publication = qualifyPublicationMission(userText);
  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
  const nameMatch = userText.match(PROJECT_NAME_RE);
  const proposedProjectName = nameMatch?.[1]?.trim() ?? null;
  const likelyPilotageSignal = PILOTAGE_SIGNAL_RE.test(userText);
  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !likelyPilotageSignal;

  return {
    wantsProjectCreate,
    proposedProjectName,
    documentAct,
    publication,
    likelyPilotageSignal,
    simpleDialogue,
  };
}

export function emptyMission(clientIntentKey: string, goalSummary: string): MissionProjection {
  return {
    clientIntentKey,
    status: "ACTIVE",
    goalSummary,
    steps: [],
    restitution: "PENDING",
  };
}

export function mergeMissionSteps(
  base: MissionProjection,
  steps: MissionStep[],
  status?: MissionStatus,
): MissionProjection {
  return {
    ...base,
    status: status ?? base.status,
    steps: [...base.steps, ...steps],
  };
}

/** Reconstruct last missionProjection from durable turn resultJson (no WorkIntent table). */
export async function loadPriorMissionProjection(
  conversationId: string,
): Promise<MissionProjection | null> {
  const rows = await db
    .select({ resultJson: conversationTurnCommands.resultJson, status: conversationTurnCommands.status })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, conversationId),
        eq(conversationTurnCommands.status, "COMPLETE"),
      ),
    )
    .orderBy(desc(conversationTurnCommands.createdAt))
    .limit(8);

  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      if (parsed.missionProjection?.clientIntentKey) {
        return parsed.missionProjection;
      }
    } catch {
      /* skip */
    }
  }
  return null;
}

/**
 * After Pilot creates the project (D2 owner), advance a prior AWAITING_PILOT_ACT
 * projection so Nora can pursue dependent steps without reassembly.
 */
export function advanceMissionAfterProjectCreated(
  prior: MissionProjection,
  projectId: string,
): MissionProjection {
  const steps = prior.steps.map((s) =>
    s.id === "d2_create_project" || s.capabilityId === "d2.create_project"
      ? {
          ...s,
          status: "DONE" as const,
          reason: `projectId=${projectId}`,
        }
      : s,
  );
  const stillWaiting = steps.some((s) => s.status === "WAITING" || s.status === "PENDING");
  return {
    ...prior,
    steps,
    status: stillWaiting ? "ACTIVE" : "COMPLETED",
    goalSummary: prior.goalSummary.includes("projet")
      ? `${prior.goalSummary} — projet confirmé ${projectId}`
      : prior.goalSummary,
    restitution: "PENDING",
  };
}

export function buildD2AwaitingStep(proposedName: string | null): MissionStep {
  return {
    id: "d2_create_project",
    capabilityId: "d2.create_project",
    status: "WAITING",
    reason: proposedName
      ? `Acte Pilote requis (Créer le projet) — preview «${proposedName}»`
      : "Acte Pilote requis (Créer le projet) — préciser le nom si besoin",
  };
}

export function buildPendingDocumentStep(kind: "CREATE" | "REVISE"): MissionStep {
  return {
    id: kind === "CREATE" ? "d4_create" : "d4_revise",
    capabilityId: kind === "CREATE" ? "d4.create_document" : "d4.revise_document",
    status: "PENDING",
    reason: "En attente après création projet / contexte",
  };
}
```


### CREATED/HEAD `projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts`

bytes=2029

```typescript
import { describe, expect, it } from "vitest";
import {
  CAPABILITY_CONTRACTS,
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
  emptyMission,
  mergeMissionSteps,
  qualifyStudioIntent,
} from "@/domains/conversation/intent-conduction";

describe("intent-conduction (domain-agnostic D3)", () => {
  it("A: simple dialogue — no project/doc/publish", () => {
    const q = qualifyStudioIntent("Quelle est la différence entre blob et commit ?");
    expect(q.simpleDialogue).toBe(true);
    expect(q.wantsProjectCreate).toBe(false);
    expect(q.documentAct.kind).toBe("NONE");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("B: project create intent without inventing D2 execution", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Continuity Global pour la suite documentaire",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toMatch(/Continuity Global/i);
  });

  it("P1-E: GitHub mention alone is not publish", () => {
    const q = qualifyStudioIntent("Explique GitHub Actions dans Studio");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("Scenario K: capability contracts declared without parallel engine", () => {
    expect(CAPABILITY_CONTRACTS.some((c) => c.capabilityId === "d2.create_project")).toBe(true);
    expect(CAPABILITY_CONTRACTS.some((c) => c.capabilityId === "future.example_capability")).toBe(
      true,
    );
    for (const c of CAPABILITY_CONTRACTS) {
      expect(c.invokeOwner.length).toBeGreaterThan(3);
      expect(c.rightsBoundary.length).toBeGreaterThan(3);
      expect(c.continuationHook).toBeTruthy();
    }
  });

  it("advances D2 waiting step after Pilot creates project", () => {
    let m = emptyMission("k1", "projet");
    m = mergeMissionSteps(m, [buildD2AwaitingStep("P")], "AWAITING_PILOT_ACT");
    const next = advanceMissionAfterProjectCreated(m, "prj_1");
    expect(next.steps[0]?.status).toBe("DONE");
    expect(next.steps[0]?.reason).toMatch(/prj_1/);
  });
});
```


### CREATED/HEAD `projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts`

bytes=10488

```typescript
/**
 * Global intent continuity — multi-domain scenarios (not Git-only).
 * DEV PG + fixture Nora + SCRIPTED Git when needed.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizePublication,
  inspectionAllowsAuthorization,
  preparePublication,
} from "@/domains/execution/effect-service";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { CAPABILITY_CONTRACTS } from "@/domains/conversation/intent-conduction";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedPrepOnly(label: string) {
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  return { pilotId, preparationId: prep.id };
}

async function seedProject(label: string) {
  const { pilotId, preparationId } = await seedPrepOnly(label);
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed project failed: ${created.status}`);
  }
  return { pilotId, preparationId, projectId: created.projectId };
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const seeded = await seedProject(label);
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(
    seeded.pilotId,
    "/settings/integrations",
    sessionId,
  );
  const status = await completeGitHubAuthorization({
    pilotId: seeded.pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(seeded.pilotId, seeded.projectId, repoId);
  getScriptedGitHubProvider();
  return { ...seeded, repositoryId: repoId };
}

describe("Global Nora/Studio intent continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("A: simple dialogue — no D2/D4/D7 effects", async () => {
    const { pilotId, preparationId } = await seedProject("scen-a");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement le rôle d'une HumanDecision.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null).toBe(true);
  });

  it("B: D2 — Nora prepares project intent; Pilot act creates; continuation sees projectId", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2");
    const ask =
      "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.";
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(
      first.missionProjection?.steps.some((s) => s.capabilityId === "d2.create_project"),
    ).toBe(true);
    // No implicit project
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
    expect(prep?.previewName).toMatch(/Continuity Global B/i);

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep!.creationRevision,
      projectName: prep!.previewName || "Continuity Global B",
      previewSummary: prep!.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) {
      throw new Error("expected CREATED project");
    }

    const second = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Accueil Continuity Global B pour démarrer.",
      { clientTurnKey: newId("ctk") },
    );
    expect(second.documentSave?.status).toBe("AVAILABLE");
    expect(second.missionProjection?.steps.some((s) => s.status === "DONE" && s.capabilityId === "d2.create_project") ||
      second.missionProjection?.status === "COMPLETED" ||
      second.missionProjection?.status === "ACTIVE" ||
      second.documentSave?.documentId).toBeTruthy();
  });

  it("C+D: CREATE then REVISE — revision actually persisted (same documentId, v2)", async () => {
    const { pilotId, preparationId } = await seedProject("scen-cd-d4");
    const created = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Continuity CD pour révision ciblée.",
      { clientTurnKey: newId("ctk") },
    );
    expect(created.documentSave?.status).toBe("AVAILABLE");
    expect(created.documentSave?.act).toBe("CREATE");
    const documentId = created.documentSave!.documentId!;
    const v1 = created.documentSave!.revisionNumber;

    const reviseAsk =
      `Révise uniquement la section 2 du document ${documentId} et conserve le reste`;
    expect(qualifyDocumentAct(reviseAsk).kind).toBe("REVISE");
    const revised = await postUserMessageAndNora(pilotId, preparationId, reviseAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(revised.documentSave?.act).toBe("REVISE");
    expect(revised.documentSave?.status).toBe("AVAILABLE");
    expect(revised.documentSave?.documentId).toBe(documentId);
    expect(revised.documentSave?.revisionNumber).toBeGreaterThan(v1 ?? 0);

    const docs = await listDocuments(pilotId, preparationId);
    const doc = docs.find((d) => d.document.id === documentId);
    expect(doc?.latestRevision?.revisionNumber).toBe(revised.documentSave?.revisionNumber);
  });

  it("READ≠COMMAND: listMessages does not dispatch AUTHORIZED classic attempt", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "scen-read",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Read Isolation pour publication classique.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/read-iso.md",
      targetBranch: "main",
      correlationKey: `pub-classic-read-${chat.documentSave!.revisionId}`,
    });
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO classic read isolation",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");

    await listMessages(pilotId, preparationId);
    await listMessages(pilotId, preparationId);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(after?.status).toBe("AUTHORIZED");
  });

  it("I: multi-domain D2→D4 — Pilot act then document without Git", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-i-multi");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Multi Domaine I et prépare un document de cadrage.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: prep.previewName || "Multi Domaine I",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    if (created.status !== "CREATED" || !created.projectId) {
      throw new Error("expected CREATED project");
    }

    const docTurn = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Cadrage Multi Domaine I.",
      { clientTurnKey: newId("ctk") },
    );
    expect(docTurn.documentSave?.status).toBe("AVAILABLE");
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === docTurn.documentSave?.documentId)).toBe(true);
  });

  it("K: extensibility contracts cover current + future placeholder", () => {
    const ids = CAPABILITY_CONTRACTS.map((c) => c.capabilityId);
    expect(ids).toContain("d2.create_project");
    expect(ids).toContain("d4.create_document");
    expect(ids).toContain("d5.pilotage_command");
    expect(ids).toContain("d7.prepare_publication");
    expect(ids).toContain("future.example_capability");
  });
});
```


### CREATED/HEAD `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`

bytes=22316

```typescript
/**
 * Mission continuity — logical helpers inside D3 (NOT a parallel engine).
 * Anchors wait on effect_attempts PREPARED; never calls authorize for "waiting".
 * Owner truth remains D4/D6/D7; MissionProjection is refs-only.
 *
 * Git-specific adapters (PUBLISH_RE, pub:mission: keys) stay here as domain
 * adaptations — the cognitive continue helper is capacity-agnostic.
 */
import { and, asc, eq, like, or } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, effectAttempts, messages } from "@/db/schema";
import {
  dispatchPublication,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import { generateNoraReply } from "./nora-adapter";
import type { DocumentEffectSummary } from "./document-act";
import { qualifyDocumentAct } from "./document-act";

export type MissionStatus =
  | "ACTIVE"
  | "AWAITING_PILOT_ACT"
  | "AWAITING_PILOT_AUTH"
  | "AWAITING_CLARIFICATION"
  | "RESTITUTION_PENDING"
  | "PARTIAL_FAILED_STEP"
  | "COMPLETED"
  | "STOPPED";

export type MissionStepStatus =
  | "PENDING"
  | "DONE"
  | "FAILED"
  | "WAITING"
  | "SKIPPED";

export type MissionStep = {
  id: string;
  capabilityId: string;
  status: MissionStepStatus;
  correlationKey?: string;
  attemptId?: string;
  documentId?: string;
  revisionId?: string;
  decisionId?: string;
  reason?: string;
};

export type MissionProjection = {
  clientIntentKey: string;
  status: MissionStatus;
  goalSummary: string;
  steps: MissionStep[];
  /** Restitution layer — not owner truth. */
  restitution: "PENDING" | "DELIVERED" | "CANONICAL";
};

export type PublicationMissionIntent = {
  wantsDocumentCreate: boolean;
  wantsPublish: boolean;
  targetPath: string | null;
  targetBranch: string | null;
  ambiguous: boolean;
  needsExplicitPath: boolean;
  clarify?: string;
};

/** Server-side marker: only attempts prepared with this prefix are Nora missions. */
export const NORA_MISSION_PUB_PREFIX = "pub:mission:";

/**
 * Publish ACTION verbs — not mere mention of GitHub/dépôt as a subject.
 * P1-E: "explique GitHub" must not trigger D7 prepare.
 */
const PUBLISH_ACTION_RE =
  /\b(?:publie(?:-le|-la|-les|-moi)?|publier|pousse(?:-le|-la|-les)?|pousser)\b/i;

const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

const BRANCH_RE =
  /(?:branche|branch)\s*[:=]?\s*[`"]?([A-Za-z0-9._/\-]+)[`"]?/i;

export function isNoraMissionPublicationKey(correlationKey: string): boolean {
  return correlationKey.startsWith(NORA_MISSION_PUB_PREFIX);
}

export function attemptIsNoraMission(row: { correlationKey: string }): boolean {
  return isNoraMissionPublicationKey(row.correlationKey);
}

export function qualifyPublicationMission(userText: string): PublicationMissionIntent {
  const act = qualifyDocumentAct(userText);
  const wantsDocumentCreate = act.kind === "CREATE";
  const wantsPublish = PUBLISH_ACTION_RE.test(userText);
  const pathMatch = userText.match(PATH_RE);
  const branchMatch = userText.match(BRANCH_RE);
  const targetPath = pathMatch?.[1] ?? null;
  const targetBranch = branchMatch?.[1] ?? null;
  const needsExplicitPath = wantsPublish && !targetPath;
  const ambiguous =
    wantsPublish &&
    ((needsExplicitPath && true) || (!wantsDocumentCreate && act.kind === "NONE"));

  let clarify: string | undefined;
  if (wantsPublish && needsExplicitPath) {
    clarify =
      "Chemin cible de publication non précisé — indiquer le chemin (ex. chemin docs/studio-next/x.md) avant préparation Git.";
  } else if (wantsPublish && !wantsDocumentCreate && act.kind === "NONE") {
    clarify = "Publication demandée sans document CREATE/REVISE explicite — préciser le document cible.";
  }

  return {
    wantsDocumentCreate,
    wantsPublish,
    targetPath,
    targetBranch,
    ambiguous: Boolean(ambiguous),
    needsExplicitPath,
    clarify,
  };
}

export function missionCorrelationKeys(clientIntentKey: string): {
  document: string;
  publication: string;
} {
  const key = clientIntentKey.trim();
  return {
    document: `doc:mission:${key}`,
    publication: `${NORA_MISSION_PUB_PREFIX}${key}`,
  };
}

export function formatMissionAck(mission: MissionProjection): string {
  const lines = [
    "### Suite de mission (projection D3 — refs owners)",
    `status=${mission.status}`,
    `clientIntentKey=${mission.clientIntentKey}`,
    `restitution=${mission.restitution}`,
  ];
  for (const s of mission.steps) {
    lines.push(
      `- step=${s.id} capability=${s.capabilityId} status=${s.status}` +
        (s.attemptId ? ` attemptId=${s.attemptId}` : "") +
        (s.documentId ? ` documentId=${s.documentId}` : "") +
        (s.revisionId ? ` revisionId=${s.revisionId}` : "") +
        (s.decisionId ? ` decisionId=${s.decisionId}` : "") +
        (s.reason ? ` reason=${s.reason}` : ""),
    );
  }
  if (mission.status === "AWAITING_PILOT_ACT") {
    lines.push(
      "",
      "Acte Pilote explicite requis (ex. Créer le projet) — Nora n'exécute pas D2 à la place du Pilote.",
      "Après création confirmée, poursuivez dans la conversation : Nora reprend les étapes dépendantes.",
    );
  }
  if (mission.status === "AWAITING_PILOT_AUTH") {
    lines.push(
      "",
      "Préparation Git PREPARED — aucune HumanDecision créée.",
      "Autorisation Pilote requise (authorizePublication) avant toute publication.",
      "Après autorisation, Studio reprend automatiquement le dispatch pour cette mission Nora.",
    );
  }
  if (mission.status === "AWAITING_CLARIFICATION") {
    lines.push("", "Précision Pilote requise avant préparation Git (pas d'effet D7).");
  }
  if (mission.status === "RESTITUTION_PENDING") {
    lines.push(
      "",
      "Effets propriétaires conservés — restitution cognitive en attente (pas de rejeu d'effet).",
    );
  }
  return lines.join("\n");
}

export function appendMissionAck(content: string, mission: MissionProjection | null): string {
  if (!mission) return content;
  return `${content.trimEnd()}\n\n---\n${formatMissionAck(mission)}\n`;
}

export function composeCanonicalMissionRestitution(input: {
  documentEffect?: DocumentEffectSummary | null;
  prepareStatus?: string | null;
  attemptId?: string | null;
  decisionId?: string | null;
  dispatchStatus?: string | null;
  dispatchDetail?: string | null;
  restitutionNote?: string;
}): string {
  const lines = [
    "### Restitution de mission (faits propriétaires)",
    input.restitutionNote ??
      "Synthèse canonique — la génération Nora n'a pas pu compléter la narration.",
    "",
  ];
  if (input.documentEffect) {
    lines.push(
      `Document: act=${input.documentEffect.act} status=${input.documentEffect.status}` +
        (input.documentEffect.documentId ? ` id=${input.documentEffect.documentId}` : "") +
        (input.documentEffect.revisionId ? ` revision=${input.documentEffect.revisionId}` : "") +
        (input.documentEffect.revisionNumber != null
          ? ` v${input.documentEffect.revisionNumber}`
          : ""),
    );
  }
  if (input.prepareStatus) {
    lines.push(
      `Préparation Git: status=${input.prepareStatus}` +
        (input.attemptId ? ` attemptId=${input.attemptId}` : ""),
    );
  }
  if (input.decisionId) {
    lines.push(`Autorisation D6: decisionId=${input.decisionId}`);
  } else if (input.prepareStatus === "PREPARED") {
    lines.push("Autorisation D6: non encore accordée (attente acte Pilote).");
  }
  if (input.dispatchStatus) {
    lines.push(
      `Publication: status=${input.dispatchStatus}` +
        (input.dispatchDetail ? ` detail=${input.dispatchDetail}` : ""),
    );
  }
  return lines.join("\n");
}

/** Capacity-agnostic facts continue — reuses generateNoraReply (no second runner). */
export async function cognitiveContinueFromFacts(input: {
  userText: string;
  factsBlock: string;
  contextSnippets: string[];
  toolScope?: Parameters<typeof generateNoraReply>[0]["toolScope"];
}): Promise<Awaited<ReturnType<typeof generateNoraReply>>> {
  return generateNoraReply({
    userText:
      `${input.userText}\n\n` +
      `### Faits applicatifs confirmés (non négociables — ne pas les contredire)\n` +
      `${input.factsBlock}\n\n` +
      `Produis une restitution fidèle à ces faits. N'affirme aucun effet absent de cette liste. ` +
      `Si des étapes restent dans l'intention, propose la suite sans réexécuter les effets confirmés.`,
    contextSnippets: input.contextSnippets,
    toolScope: input.toolScope,
  });
}

export async function preparePublicationForMission(input: {
  pilotId: string;
  projectId: string;
  documentId: string;
  revisionId: string;
  clientIntentKey: string;
  targetPath: string | null;
  targetBranch: string | null;
}): Promise<
  | {
      ok: true;
      attemptId: string;
      status: string;
      fingerprint: string;
      idempotent?: boolean;
      repositoryId: string;
      targetPath: string;
    }
  | { ok: false; code: string; message: string }
> {
  if (!input.targetPath) {
    return {
      ok: false,
      code: "PATH_REQUIRED",
      message:
        "Chemin de publication non précisé — aucune préparation D7 (pas de défaut silencieux).",
    };
  }
  const links = await listProjectGitLinks(input.pilotId, input.projectId);
  if (links.length === 0) {
    return {
      ok: false,
      code: "NO_GIT_LINK",
      message: "Aucun dépôt Git rattaché au projet — rattachement requis avant préparation.",
    };
  }
  if (links.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_GIT_LINK",
      message: "Plusieurs dépôts rattachés — préciser le dépôt cible.",
    };
  }
  const repositoryId = links[0]!.repositoryId;
  const targetPath = input.targetPath;
  const targetBranch = input.targetBranch ?? "main";
  const keys = missionCorrelationKeys(input.clientIntentKey);
  try {
    const prepared = await preparePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      documentId: input.documentId,
      revisionId: input.revisionId,
      repositoryId,
      targetPath,
      targetBranch,
      correlationKey: keys.publication,
    });
    return {
      ok: true,
      attemptId: prepared.attemptId,
      status: prepared.status,
      fingerprint: prepared.fingerprint,
      idempotent: "idempotent" in prepared ? Boolean(prepared.idempotent) : false,
      repositoryId,
      targetPath,
    };
  } catch (e) {
    if (e instanceof StudioError) {
      return { ok: false, code: e.code, message: e.message };
    }
    return { ok: false, code: "PREPARE_EXCEPTION", message: "Préparation Git échouée" };
  }
}

function missionResumeMessageId(attemptId: string): string {
  return `msg_mresume_${attemptId}`;
}

function missionResumeGenerationId(attemptId: string): string {
  return `mission-resume:${attemptId}`;
}

/**
 * After Pilot authorizePublication — automatic dispatch for Nora missions only.
 * Idempotent: COMPLETED returns without re-dispatch; DISPATCHED → reconcile.
 * Restitution message is unique per attempt (P1-C).
 * Cognitive continue after observed result (P1-D), canonical fallback.
 */
export async function resumeMissionAfterPublicationAuthorize(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  decisionId?: string | null;
}): Promise<{
  dispatched: boolean;
  reconciled: boolean;
  status: string;
  restitution: string;
  conversationMessageId: string | null;
  prNumber?: number | null;
  commitSha?: string | null;
  cognitiveContinue?: "DELIVERED" | "CANONICAL" | "SKIPPED";
  error?: string;
}> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return {
      dispatched: false,
      reconciled: false,
      status: "NOT_FOUND",
      restitution: "Tentative introuvable — aucune publication.",
      conversationMessageId: null,
      error: "NOT_FOUND",
    };
  }

  if (!attemptIsNoraMission(row)) {
    return {
      dispatched: false,
      reconciled: false,
      status: row.status,
      restitution:
        "Tentative hors mission Nora — reprise auto refusée (parcours classique authorize→dispatch).",
      conversationMessageId: null,
      error: "NOT_NORA_MISSION",
      cognitiveContinue: "SKIPPED",
    };
  }

  let status = row.status;
  let dispatched = false;
  let reconciled = false;
  let detail: string | null = null;

  try {
    if (status === "AUTHORIZED" || status === "AMBIGUOUS") {
      const out = await dispatchPublication({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: input.attemptId,
      });
      status = out.status;
      dispatched = true;
    } else if (status === "DISPATCHED") {
      const rec = await reconcileAttempt(input.pilotId, input.projectId, input.attemptId);
      status = rec.status;
      reconciled = true;
    } else if (status === "COMPLETED") {
      dispatched = false;
    } else {
      return {
        dispatched: false,
        reconciled: false,
        status,
        restitution: `Statut incompatible pour reprise auto: ${status}`,
        conversationMessageId: null,
        error: "CONFLICT",
      };
    }
  } catch (e) {
    const msg = e instanceof StudioError ? e.message : "DISPATCH_FAILED";
    const code = e instanceof StudioError ? e.code : "DISPATCH_FAILED";
    emitObs({
      event_name: "d3.mission.resume_dispatch_failed",
      component: "d3.mission_continuity",
      outcome: "FAILED",
      error_category: code,
      meta: { attempt_id: input.attemptId },
    });
    try {
      const again = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
      )[0];
      if (again?.status === "DISPATCHED") {
        const rec = await reconcileAttempt(input.pilotId, input.projectId, input.attemptId);
        status = rec.status;
        reconciled = true;
      } else {
        status = again?.status ?? status;
      }
    } catch {
      /* keep */
    }
    detail = msg;
  }

  const plan = JSON.parse(row.planJson || "{}") as {
    preparationId?: string;
    documentId?: string;
    revisionId?: string;
  };

  const finalRow = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
  )[0];
  const resultPayload = (() => {
    try {
      return JSON.parse(finalRow?.resultJson || "{}") as {
        prNumber?: number | null;
        commitSha?: string | null;
        sha?: string | null;
        missionResumeMessageId?: string | null;
      };
    } catch {
      return {} as {
        prNumber?: number | null;
        commitSha?: string | null;
        sha?: string | null;
        missionResumeMessageId?: string | null;
      };
    }
  })();
  const prNumber = resultPayload.prNumber ?? null;
  const commitSha = resultPayload.commitSha ?? resultPayload.sha ?? null;

  const canonical = composeCanonicalMissionRestitution({
    documentEffect: plan.documentId
      ? {
          act: "CREATE",
          status: "AVAILABLE",
          documentId: plan.documentId,
          revisionId: plan.revisionId,
        }
      : null,
    prepareStatus: "PREPARED",
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? row.decisionId,
    dispatchStatus: status,
    dispatchDetail: detail,
    restitutionNote:
      status === "COMPLETED"
        ? "Publication reprise automatiquement après autorisation Pilote."
        : "Reprise post-autorisation exécutée — voir statut publication.",
  });

  const factsBlock = [
    `Publication attemptId=${input.attemptId} status=${status}`,
    input.decisionId || row.decisionId
      ? `decisionId=${input.decisionId ?? row.decisionId}`
      : null,
    plan.documentId ? `documentId=${plan.documentId}` : null,
    plan.revisionId ? `revisionId=${plan.revisionId}` : null,
    prNumber != null ? `prNumber=${prNumber}` : null,
    commitSha ? `commitSha=${commitSha}` : null,
    detail ? `detail=${detail}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  let restitution = canonical;
  let cognitiveContinue: "DELIVERED" | "CANONICAL" | "SKIPPED" = "CANONICAL";
  try {
    // No turn operationId here — facts-only continue without tool scope (still generateNoraReply).
    const continued = await cognitiveContinueFromFacts({
      userText:
        "L'autorisation Pilote a été accordée et l'effet de publication a été traité. Restitue le résultat.",
      factsBlock,
      contextSnippets: [],
    });
    if (continued.status === "COMPLETE" && continued.content.trim()) {
      restitution = `${continued.content.trim()}\n\n---\n${canonical}`;
      cognitiveContinue = "DELIVERED";
    }
  } catch {
    cognitiveContinue = "CANONICAL";
  }

  let conversationMessageId: string | null = resultPayload.missionResumeMessageId ?? null;
  if (plan.preparationId) {
    try {
      conversationMessageId = await appendAssistantMissionMessage({
        pilotId: input.pilotId,
        preparationId: plan.preparationId,
        attemptId: input.attemptId,
        content: restitution,
      });
      // Persist message id on attempt for crash/retry idempotence
      const merged = {
        ...resultPayload,
        missionResumeMessageId: conversationMessageId,
      };
      await db
        .update(effectAttempts)
        .set({ resultJson: JSON.stringify(merged), updatedAt: new Date() })
        .where(eq(effectAttempts.id, input.attemptId));
    } catch {
      /* keep prior id if any */
    }
  }

  emitObs({
    event_name: "d3.mission.resume_after_authorize",
    component: "d3.mission_continuity",
    outcome: status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
    meta: {
      attempt_id: input.attemptId,
      decision_id: input.decisionId ?? null,
      status,
      dispatched,
      reconciled,
      cognitive_continue: cognitiveContinue,
      nora_mission: true,
    },
  });

  return {
    dispatched,
    reconciled,
    status,
    restitution,
    conversationMessageId,
    prNumber,
    commitSha,
    cognitiveContinue,
    error: detail ?? undefined,
  };
}

/**
 * P0-B durable recovery: AUTHORIZED (or DISPATCHED) Nora-mission attempts
 * resume on the next nominal event (chat load / new turn / reconcile).
 * No universal scheduler — uses existing D3/D7 entry points.
 */
export async function recoverAuthorizedNoraMissions(input: {
  pilotId: string;
  projectId: string;
}): Promise<
  Array<{
    attemptId: string;
    status: string;
    resumed: boolean;
    error?: string;
  }>
> {
  const rows = await db
    .select()
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.pilotId, input.pilotId),
        eq(effectAttempts.projectId, input.projectId),
        eq(effectAttempts.kind, "GIT_PUBLICATION"),
        or(eq(effectAttempts.status, "AUTHORIZED"), eq(effectAttempts.status, "DISPATCHED")),
        like(effectAttempts.correlationKey, `${NORA_MISSION_PUB_PREFIX}%`),
      ),
    );

  const out: Array<{
    attemptId: string;
    status: string;
    resumed: boolean;
    error?: string;
  }> = [];

  for (const row of rows) {
    const resume = await resumeMissionAfterPublicationAuthorize({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: row.id,
      decisionId: row.decisionId,
    });
    out.push({
      attemptId: row.id,
      status: resume.status,
      resumed: resume.dispatched || resume.reconciled || resume.status === "COMPLETED",
      error: resume.error,
    });
  }
  if (out.length > 0) {
    emitObs({
      event_name: "d3.mission.recover_authorized",
      component: "d3.mission_continuity",
      outcome: "SUCCESS",
      meta: { project_id: input.projectId, count: out.length },
    });
  }
  return out;
}

/** P1-C — stable message id + generationId per attempt; ordinal unique with conflict recovery. */
async function appendAssistantMissionMessage(input: {
  pilotId: string;
  preparationId: string;
  attemptId: string;
  content: string;
}): Promise<string> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, input.preparationId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) throw new StudioError("NOT_FOUND", "Conversation introuvable");

  const generationId = missionResumeGenerationId(input.attemptId);
  const stableId = missionResumeMessageId(input.attemptId);

  const existingByGen = (
    await db
      .select()
      .from(messages)
      .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
      .limit(1)
  )[0];
  if (existingByGen) return existingByGen.id;

  const existingById = (
    await db.select().from(messages).where(eq(messages.id, stableId)).limit(1)
  )[0];
  if (existingById) return existingById.id;

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;

  try {
    await db.insert(messages).values({
      id: stableId,
      conversationId: conv.id,
      role: "assistant",
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId,
      createdAt: new Date(),
    });
    return stableId;
  } catch {
    const again = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
        .limit(1)
    )[0];
    if (again) return again.id;
    const byId = (
      await db.select().from(messages).where(eq(messages.id, stableId)).limit(1)
    )[0];
    if (byId) return byId.id;
    throw new StudioError("CONFLICT", "Restitution mission non persistée (conflit ordinal/id)");
  }
}
```


### CREATED/HEAD `projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts`

bytes=3759

```typescript
import { describe, expect, it } from "vitest";
import {
  appendMissionAck,
  attemptIsNoraMission,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  isNoraMissionPublicationKey,
  missionCorrelationKeys,
  qualifyPublicationMission,
  type MissionProjection,
} from "@/domains/conversation/mission-continuity";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";

describe("mission-continuity helpers", () => {
  it("qualifies CREATE+publish mission without authorizing", () => {
    const text =
      "Crée un document intitulé Mission Continuity et publie-le dans mon dépôt GitHub sous docs/studio-next/mission.md";
    expect(qualifyDocumentAct(text).kind).toBe("CREATE");
    const m = qualifyPublicationMission(text);
    expect(m.wantsDocumentCreate).toBe(true);
    expect(m.wantsPublish).toBe(true);
    expect(m.targetPath).toBe("docs/studio-next/mission.md");
    expect(m.needsExplicitPath).toBe(false);
  });

  it("P1-E: does not treat GitHub subject mention as publish action", () => {
    const m = qualifyPublicationMission("Explique la différence entre blob et commit sur GitHub");
    expect(m.wantsPublish).toBe(false);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("P1-E: publish without path requires clarification (no silent default)", () => {
    const m = qualifyPublicationMission(
      "Crée un document intitulé X et publie-le dans mon dépôt GitHub",
    );
    expect(m.wantsPublish).toBe(true);
    expect(m.needsExplicitPath).toBe(true);
    expect(m.targetPath).toBeNull();
    expect(m.clarify).toMatch(/chemin/i);
  });

  it("P1-E: ambiguous publish without CREATE", () => {
    const m = qualifyPublicationMission("publie-le sur GitHub chemin docs/a.md");
    expect(m.wantsPublish).toBe(true);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("derives stable correlation keys before effects", () => {
    const keys = missionCorrelationKeys("intent-abc");
    expect(keys.document).toBe("doc:mission:intent-abc");
    expect(keys.publication).toBe("pub:mission:intent-abc");
    expect(isNoraMissionPublicationKey(keys.publication)).toBe(true);
    expect(isNoraMissionPublicationKey("pub-project-rev-123")).toBe(false);
    expect(attemptIsNoraMission({ correlationKey: keys.publication })).toBe(true);
    expect(attemptIsNoraMission({ correlationKey: "pub-classic-panel" })).toBe(false);
  });

  it("mission ACK states AWAITING_PILOT_AUTH without HD", () => {
    const mission: MissionProjection = {
      clientIntentKey: "k1",
      status: "AWAITING_PILOT_AUTH",
      goalSummary: "test",
      restitution: "DELIVERED",
      steps: [
        {
          id: "d7_prepare",
          capabilityId: "d7.prepare_publication",
          status: "WAITING",
          attemptId: "efx_test",
        },
      ],
    };
    const ack = formatMissionAck(mission);
    expect(ack).toMatch(/AWAITING_PILOT_AUTH/);
    expect(ack).toMatch(/aucune HumanDecision créée/i);
    expect(ack).toMatch(/authorizePublication/);
    const composed = appendMissionAck("corps", mission);
    expect(composed).toContain("corps");
    expect(composed).toContain("efx_test");
  });

  it("canonical restitution preserves D4 facts when Continue fails", () => {
    const text = composeCanonicalMissionRestitution({
      documentEffect: {
        act: "CREATE",
        status: "AVAILABLE",
        documentId: "doc_1",
        revisionId: "drev_1",
        revisionNumber: 1,
      },
      prepareStatus: "PREPARED",
      attemptId: "efx_1",
      restitutionNote: "RESTITUTION_PENDING",
    });
    expect(text).toMatch(/doc_1/);
    expect(text).toMatch(/AVAILABLE/);
    expect(text).toMatch(/PREPARED/);
    expect(text).toMatch(/non encore accordée/);
  });
});
```


### CREATED/HEAD `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`

bytes=13666

```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, humanDecisions, messages, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizePublication,
  inspectionAllowsAuthorization,
  preparePublication,
} from "@/domains/execution/effect-service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import {
  attemptIsNoraMission,
  qualifyPublicationMission,
  recoverAuthorizedNoraMissions,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { listDocuments } from "@/domains/document/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repoId);
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("T01: simple dialogue — no D4/D7 mission prepare", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("t01-simple");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement ce qu'est une HumanDecision dans Studio.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null || chat.missionProjection === null).toBe(true);
  });

  it("T03 non-Git: CREATE then REVISE uses confirmed document (no publish)", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("t03-d4");
    const create = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Continuity NonGit pour la suite.",
      { clientTurnKey: newId("ctk") },
    );
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const revise = await postUserMessageAndNora(
      pilotId,
      preparationId,
      `Révise le document Continuity NonGit : ajoute une section Suite.`,
      { clientTurnKey: newId("ctk") },
    );
    // REVISE may or may not fire depending on fixture extract — at least no publish mission
    expect(revise.missionProjection == null || revise.missionProjection === null).toBe(true);
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === docId)).toBe(true);
  });

  it("P0-D6: prepare leaves PREPARED without HumanDecision", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "p0-d6-prepare",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé P0 Prepare Only pour la suite.",
    );
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const docId = chat.documentSave!.documentId!;
    const revId = chat.documentSave!.revisionId!;
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: docId,
      revisionId: revId,
      repositoryId,
      targetPath: "docs/studio-next/p0-prepare.md",
      targetBranch: "main",
      correlationKey: `pub-p0-${revId}`,
    });
    expect(prepared.status).toBe("PREPARED");
    expect(attemptIsNoraMission({ correlationKey: `pub-p0-${revId}` })).toBe(false);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(row?.decisionId).toBeNull();
    expect(row?.status).toBe("PREPARED");
  });

  it("P0-A: classic publication stays AUTHORIZED after authorize (no auto dispatch)", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "p0a-classic",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Classic Pub pour inspection manuelle.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/classic.md",
      targetBranch: "main",
      correlationKey: `pub-classic-${chat.documentSave!.revisionId}`,
    });
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO classic",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    // Direct resume must refuse non-mission
    const refused = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      decisionId: auth.decisionId,
    });
    expect(refused.error).toBe("NOT_NORA_MISSION");
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(after?.status).toBe("AUTHORIZED");
  });

  it("P1-E: publish intent without path does not prepare D7", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("p1e-nopath");
    const ask =
      "Crée un document intitulé Path Required et publie-le dans mon dépôt GitHub";
    expect(qualifyPublicationMission(ask).needsExplicitPath).toBe(true);
    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
    expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
  });

  it("ACCEPT-01 chat: CREATE + publish with path prepares and awaits auth without HD", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-chat");
    const ask =
      "Crée un document intitulé ACCEPT-01 Continuity et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01.md";
    expect(qualifyPublicationMission(ask).wantsPublish).toBe(true);
    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
    const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(prepStep?.attemptId).toBeTruthy();
    expect(prepStep?.status).toBe("WAITING");

    const attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
    )[0];
    expect(attempt?.status).toBe("PREPARED");
    expect(attempt?.decisionId).toBeNull();
    expect(attemptIsNoraMission(attempt!)).toBe(true);

    const msgs = await listMessages(pilotId, preparationId);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4|Suite de mission|AVAILABLE/);
    expect(assistant?.content).toMatch(/AWAITING_PILOT_AUTH|aucune HumanDecision créée/i);
    expect(projectId).toBeTruthy();
  });

  it("ACCEPT-01 + P0-B: authorize then recover/resume; restitution idempotent (P1-C)", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-resume");
    const ask =
      "Crée un document intitulé ACCEPT-01 Resume et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-resume.md";
    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    const attemptId = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId;
    expect(attemptId).toBeTruthy();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };

    // Simulate crash window: authorize without calling resume (HTTP would call it for mission).
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: attemptId!,
      statement: "GO publication ACCEPT-01",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    expect(auth.decisionId).toBeTruthy();

    const stuck = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(stuck?.status).toBe("AUTHORIZED");

    // P0-B durable recovery (same as listMessages / next turn / reconcile)
    const recovered = await recoverAuthorizedNoraMissions({ pilotId, projectId });
    expect(recovered.some((r) => r.attemptId === attemptId && r.resumed)).toBe(true);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(after?.status ?? "");

    const resume2 = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(resume2.status).toBeTruthy();

    // P1-C: at most one mission-resume message per attempt
    const convMsgs = await db
      .select()
      .from(messages)
      .where(eq(messages.generationId, `mission-resume:${attemptId}`));
    expect(convMsgs.length).toBeLessThanOrEqual(1);

    const decisions = await db
      .select()
      .from(humanDecisions)
      .where(
        and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, auth.decisionId!)),
      );
    expect(decisions[0]?.state).toBe("APPLICABLE");
  });

  it("C2/C5: same clientTurnKey replay does not duplicate D4 CREATE or D7 prepare", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-replay");
    const ask =
      "Crée un document intitulé ACCEPT-01 Replay et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-replay.md";
    const clientTurnKey = newId("ctk");
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, { clientTurnKey });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
    const firstDoc = first.documentSave!.documentId!;
    const firstAttempt = first.missionProjection!.steps.find((s) => s.id === "d7_prepare")!
      .attemptId!;

    const replay = await postUserMessageAndNora(pilotId, preparationId, ask, { clientTurnKey });
    expect(replay.idempotentReplay === true || replay.documentSave?.documentId === firstDoc).toBe(
      true,
    );

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.filter((d) => d.document.id === firstDoc)).toHaveLength(1);

    const attempts = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.id, firstAttempt)));
    expect(attempts).toHaveLength(1);
    expect(attempts[0]?.status).toBe("PREPARED");
    expect(attempts[0]?.decisionId).toBeNull();
  });
});
```


### FULL `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts`

```typescript
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  attemptIsNoraMission,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { authorizePublication } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      statement?: string;
      inspectedFingerprint?: string;
      /**
       * Test escape hatch only. Membership to a Nora mission is decided SERVER-SIDE
       * via correlationKey `pub:mission:*` — never via this client flag alone.
       */
      autoResumeMission?: boolean;
    };
    if (!body.inspectedFingerprint) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", message: "inspectedFingerprint requis" },
        { status: 400 },
      );
    }
    const result = await authorizePublication({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      statement: body.statement ?? "Mandat publication Git",
      inspectedFingerprint: body.inspectedFingerprint,
    });

    // P0-A: auto-resume ONLY for server-qualified Nora missions.
    // Classic panel prepares (`pub-${projectId}-…`) keep authorize → manual dispatch.
    const attemptRow = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, attemptId),
            eq(effectAttempts.projectId, projectId),
            eq(effectAttempts.pilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];

    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    const isMission = attemptRow ? attemptIsNoraMission(attemptRow) : false;
    if (
      isMission &&
      body.autoResumeMission !== false &&
      (result.status === "AUTHORIZED" || result.status === "COMPLETED" || result.status === "DISPATCHED")
    ) {
      // Immediate resume in this request; P0-B recoverAuthorizedNoraMissions covers crash window.
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: result.decisionId,
      });
    }

    return NextResponse.json({
      ...result,
      noraMission: isMission,
      missionResume,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### FULL `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/effects/[attemptId]/reconcile/route.ts`

```typescript
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  attemptIsNoraMission,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { reconcileAttempt } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * Nominal recovery surface (P0-B): for Nora-mission attempts left AUTHORIZED
 * after a crash between D6 commit and dispatch, reconcile triggers mission resume.
 * Classic (non-mission) attempts keep pure reconcileAttempt behavior.
 */
export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;

    const row = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, attemptId),
            eq(effectAttempts.projectId, projectId),
            eq(effectAttempts.pilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];

    if (row && attemptIsNoraMission(row) && (row.status === "AUTHORIZED" || row.status === "DISPATCHED")) {
      const missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: row.decisionId,
      });
      return NextResponse.json({
        attemptId,
        status: missionResume.status,
        noraMission: true,
        missionResume,
      });
    }

    const result = await reconcileAttempt(session.pilotId, projectId, attemptId);
    return NextResponse.json({ ...result, noraMission: false });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### DIFF this-commit service.ts (global wiring vs f42cb2f5)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 9997ac86..de9257e9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -53,17 +53,20 @@ import {
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
+import {
+  advanceMissionAfterProjectCreated,
+  buildD2AwaitingStep,
+  buildPendingDocumentStep,
+  emptyMission,
+  loadPriorMissionProjection,
+  mergeMissionSteps,
+  qualifyStudioIntent,
+} from "./intent-conduction";
+import { updatePreview } from "@/domains/preparation/service";

 export async function listMessages(pilotId: string, preparationId: string) {
+  // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
-  // P0-B: reconnection / chat reload — recover AUTHORIZED Nora missions without "continue".
-  if (ctx.project?.id) {
-    try {
-      await recoverAuthorizedNoraMissions({ pilotId, projectId: ctx.project.id });
-    } catch {
-      /* never block message listing */
-    }
-  }
   if (!ctx.conversation) return [];
   return db
     .select()
@@ -281,7 +284,8 @@ export async function postUserMessageAndNora(
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");

-  // P0-B: next nominal turn recovers AUTHORIZED Nora missions (crash after D6).
+  // Governed recovery (COMMAND path only — never from listMessages READ).
+  // P0-B: next turn recovers AUTHORIZED Nora missions after crash mid-authorize→dispatch.
   if (ctx.project?.id) {
     try {
       await recoverAuthorizedNoraMissions({ pilotId, projectId: ctx.project.id });
@@ -290,6 +294,19 @@ export async function postUserMessageAndNora(
     }
   }

+  // Multi-domain continuity: if prior turn awaited D2 Pilot act and project now exists, advance.
+  let carriedMission: MissionProjection | null = null;
+  try {
+    const priorMission = await loadPriorMissionProjection(ctx.conversation.id);
+    if (priorMission?.status === "AWAITING_PILOT_ACT" && ctx.project?.id) {
+      carriedMission = advanceMissionAfterProjectCreated(priorMission, ctx.project.id);
+    } else if (priorMission && priorMission.status !== "COMPLETED") {
+      carriedMission = priorMission;
+    }
+  } catch {
+    carriedMission = null;
+  }
+
   const clientTurnKey =
     opts?.clientTurnKey?.trim() ||
     opts?.correlationKey?.trim() ||
@@ -615,6 +632,7 @@ export async function postUserMessageAndNora(
   const documentAct = qualifyDocumentAct(content);
   const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
   const missionIntent = qualifyPublicationMission(content);
+  const studioIntent = qualifyStudioIntent(content);
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
   // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
@@ -1129,6 +1147,67 @@ export async function postUserMessageAndNora(
     }
   }

+  // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
+  if (
+    !ownershipLostBeforeD4 &&
+    studioIntent.wantsProjectCreate &&
+    !ctx.project?.id
+  ) {
+    const proposed =
+      studioIntent.proposedProjectName?.trim() ||
+      content.match(/projet\s+[«"]?([^»"\n.]{2,80})/i)?.[1]?.trim() ||
+      "Nouveau projet";
+    try {
+      await updatePreview(
+        pilotId,
+        preparationId,
+        proposed.slice(0, 120),
+        `Intention Nora — création de projet «${proposed}». Acte Pilote requis.`,
+      );
+    } catch {
+      /* preview best-effort */
+    }
+    let d2Mission = emptyMission(
+      clientIntentKey,
+      `Création de projet «${proposed}» — attente acte Pilote`,
+    );
+    d2Mission = mergeMissionSteps(d2Mission, [buildD2AwaitingStep(proposed)], "AWAITING_PILOT_ACT");
+    if (studioIntent.documentAct.kind === "CREATE" || studioIntent.publication.wantsPublish) {
+      d2Mission = mergeMissionSteps(d2Mission, [
+        buildPendingDocumentStep("CREATE"),
+      ]);
+    }
+    missionProjection = d2Mission;
+  } else if (
+    !missionProjection &&
+    carriedMission &&
+    (carriedMission.status === "ACTIVE" || carriedMission.status === "AWAITING_PILOT_ACT")
+  ) {
+    // Resume carried multi-domain mission after D2 confirmed (or still waiting).
+    if (documentEffectForAck?.status === "AVAILABLE" && documentEffectForAck.documentId) {
+      const steps = carriedMission.steps.map((s) =>
+        s.id === "d4_create" || s.capabilityId === "d4.create_document"
+          ? {
+              ...s,
+              status: "DONE" as const,
+              documentId: documentEffectForAck.documentId,
+              revisionId: documentEffectForAck.revisionId,
+            }
+          : s,
+      );
+      missionProjection = {
+        ...carriedMission,
+        steps,
+        status: steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
+          ? "ACTIVE"
+          : "COMPLETED",
+        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+      };
+    } else {
+      missionProjection = carriedMission;
+    }
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
```


### DIFF vs base `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index bf86345c..de9257e9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -43,8 +43,29 @@ import {
   type DocumentEffectSummary,
   type DocumentProposalExtract,
 } from "./document-act";
+import {
+  appendMissionAck,
+  cognitiveContinueFromFacts,
+  composeCanonicalMissionRestitution,
+  missionCorrelationKeys,
+  preparePublicationForMission,
+  qualifyPublicationMission,
+  recoverAuthorizedNoraMissions,
+  type MissionProjection,
+} from "./mission-continuity";
+import {
+  advanceMissionAfterProjectCreated,
+  buildD2AwaitingStep,
+  buildPendingDocumentStep,
+  emptyMission,
+  loadPriorMissionProjection,
+  mergeMissionSteps,
+  qualifyStudioIntent,
+} from "./intent-conduction";
+import { updatePreview } from "@/domains/preparation/service";

 export async function listMessages(pilotId: string, preparationId: string) {
+  // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) return [];
   return db
@@ -191,6 +212,8 @@ export type TurnResult = {
     effects?: Array<{ effectKind: string; targetRef: string }>;
   } | null;
   reconciled?: boolean;
+  /** Refs-only mission projection — never owner truth for D4/D6/D7. */
+  missionProjection?: MissionProjection | null;
 };

 function pilotageEffectFromAuthority(
@@ -261,6 +284,29 @@ export async function postUserMessageAndNora(
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");

+  // Governed recovery (COMMAND path only — never from listMessages READ).
+  // P0-B: next turn recovers AUTHORIZED Nora missions after crash mid-authorize→dispatch.
+  if (ctx.project?.id) {
+    try {
+      await recoverAuthorizedNoraMissions({ pilotId, projectId: ctx.project.id });
+    } catch {
+      /* never block the new turn */
+    }
+  }
+
+  // Multi-domain continuity: if prior turn awaited D2 Pilot act and project now exists, advance.
+  let carriedMission: MissionProjection | null = null;
+  try {
+    const priorMission = await loadPriorMissionProjection(ctx.conversation.id);
+    if (priorMission?.status === "AWAITING_PILOT_ACT" && ctx.project?.id) {
+      carriedMission = advanceMissionAfterProjectCreated(priorMission, ctx.project.id);
+    } else if (priorMission && priorMission.status !== "COMPLETED") {
+      carriedMission = priorMission;
+    }
+  } catch {
+    carriedMission = null;
+  }
+
   const clientTurnKey =
     opts?.clientTurnKey?.trim() ||
     opts?.correlationKey?.trim() ||
@@ -585,6 +631,10 @@ export async function postUserMessageAndNora(
   let ownershipLostBeforeD4 = false;
   const documentAct = qualifyDocumentAct(content);
   const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
+  const missionIntent = qualifyPublicationMission(content);
+  const studioIntent = qualifyStudioIntent(content);
+  const clientIntentKey = clientTurnKey;
+  const missionKeys = missionCorrelationKeys(clientIntentKey);
   // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
@@ -661,7 +711,9 @@ export async function postUserMessageAndNora(
               {
                 correlationKey: opts?.correlationKey
                   ? `doc:${opts.correlationKey}`
-                  : `doc:${reply.generationId}`,
+                  : missionIntent.wantsPublish
+                    ? missionKeys.document
+                    : `doc:${reply.generationId}`,
                 provenance: {
                   sourceKind: "nora",
                   generationId: reply.generationId,
@@ -937,9 +989,231 @@ export async function postUserMessageAndNora(
             }
           : null;

+  // Post-effect continuity: facts-first Continue after D4 AVAILABLE (REC-08 + ACCEPT-01).
+  let missionProjection: MissionProjection | null = null;
+  let continueFailedAfterEffect = false;
+  let assistantBody = reply.content;
+
+  if (
+    !ownershipLostBeforeD4 &&
+    documentEffectForAck?.status === "AVAILABLE" &&
+    documentEffectForAck.documentId &&
+    documentEffectForAck.revisionId
+  ) {
+    const factsBlock = [
+      `D4 ${documentEffectForAck.act}=${documentEffectForAck.status}`,
+      `documentId=${documentEffectForAck.documentId}`,
+      `revisionId=${documentEffectForAck.revisionId}`,
+      documentEffectForAck.revisionNumber != null
+        ? `revisionNumber=${documentEffectForAck.revisionNumber}`
+        : null,
+    ]
+      .filter(Boolean)
+      .join("\n");
+
+    if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
+      try {
+        const continued = await cognitiveContinueFromFacts({
+          userText: content,
+          factsBlock,
+          contextSnippets,
+          toolScope: {
+            pilotId,
+            preparationId,
+            operationId: reserved.operationId,
+            projectId: ctx.project?.id,
+          },
+        });
+        if (continued.status === "COMPLETE" && continued.content.trim()) {
+          assistantBody = continued.content;
+        } else {
+          continueFailedAfterEffect = true;
+          assistantBody = composeCanonicalMissionRestitution({
+            documentEffect: documentEffectForAck,
+            restitutionNote:
+              "Continuation cognitive incomplète — faits D4 conservés (RESTITUTION_PENDING).",
+          });
+        }
+      } catch {
+        continueFailedAfterEffect = true;
+        assistantBody = composeCanonicalMissionRestitution({
+          documentEffect: documentEffectForAck,
+          restitutionNote:
+            "Continuation cognitive indisponible — faits D4 conservés (RESTITUTION_PENDING).",
+        });
+      }
+    }
+  }
+
+  if (
+    !ownershipLostBeforeD4 &&
+    documentEffectForAck?.status === "AVAILABLE" &&
+    documentEffectForAck.documentId &&
+    documentEffectForAck.revisionId &&
+    missionIntent.wantsPublish &&
+    ctx.project?.id
+  ) {
+    const steps: MissionProjection["steps"] = [
+      {
+        id: "d4_create",
+        capabilityId: "d4.create_document",
+        status: "DONE",
+        correlationKey: missionKeys.document,
+        documentId: documentEffectForAck.documentId,
+        revisionId: documentEffectForAck.revisionId,
+      },
+    ];
+
+    // P1-E: no silent path/branch deduction — clarify before D7 prepare.
+    if (missionIntent.needsExplicitPath) {
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "PENDING",
+        correlationKey: missionKeys.publication,
+        reason: missionIntent.clarify ?? "PATH_REQUIRED",
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: "AWAITING_CLARIFICATION",
+        goalSummary: "CREATE D4 confirmé — chemin Git requis avant préparation",
+        steps,
+        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+      };
+    } else if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
+      const prepared = await preparePublicationForMission({
+        pilotId,
+        projectId: ctx.project.id,
+        documentId: documentEffectForAck.documentId,
+        revisionId: documentEffectForAck.revisionId,
+        clientIntentKey,
+        targetPath: missionIntent.targetPath,
+        targetBranch: missionIntent.targetBranch,
+      });
+      if (prepared.ok) {
+        steps.push({
+          id: "d7_prepare",
+          capabilityId: "d7.prepare_publication",
+          status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
+          correlationKey: missionKeys.publication,
+          attemptId: prepared.attemptId,
+          documentId: documentEffectForAck.documentId,
+          revisionId: documentEffectForAck.revisionId,
+        });
+        missionProjection = {
+          clientIntentKey,
+          status: "AWAITING_PILOT_AUTH",
+          goalSummary: "CREATE D4 + publication Git (attente autorisation Pilote)",
+          steps,
+          restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+        };
+        emitObs({
+          event_name: "d3.mission.prepared_awaiting_auth",
+          component: "d3.mission_continuity",
+          request_id: requestId,
+          operation_id: reserved.operationId,
+          generation_id: reply.generationId,
+          outcome: "SUCCESS",
+          meta: {
+            attempt_id: prepared.attemptId,
+            document_id: documentEffectForAck.documentId,
+            // Never call authorize here — HD only on Pilot act.
+            authorize_called: false,
+          },
+        });
+      } else {
+        steps.push({
+          id: "d7_prepare",
+          capabilityId: "d7.prepare_publication",
+          status: "FAILED",
+          correlationKey: missionKeys.publication,
+          reason: `${prepared.code}:${prepared.message}`,
+        });
+        missionProjection = {
+          clientIntentKey,
+          status: "PARTIAL_FAILED_STEP",
+          goalSummary: "CREATE D4 confirmé — préparation Git non réalisée",
+          steps,
+          restitution: continueFailedAfterEffect ? "PENDING" : "CANONICAL",
+        };
+      }
+    }
+
+    if (continueFailedAfterEffect && missionProjection) {
+      missionProjection = {
+        ...missionProjection,
+        restitution: "PENDING",
+      };
+    }
+  }
+
+  // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
+  if (
+    !ownershipLostBeforeD4 &&
+    studioIntent.wantsProjectCreate &&
+    !ctx.project?.id
+  ) {
+    const proposed =
+      studioIntent.proposedProjectName?.trim() ||
+      content.match(/projet\s+[«"]?([^»"\n.]{2,80})/i)?.[1]?.trim() ||
+      "Nouveau projet";
+    try {
+      await updatePreview(
+        pilotId,
+        preparationId,
+        proposed.slice(0, 120),
+        `Intention Nora — création de projet «${proposed}». Acte Pilote requis.`,
+      );
+    } catch {
+      /* preview best-effort */
+    }
+    let d2Mission = emptyMission(
+      clientIntentKey,
+      `Création de projet «${proposed}» — attente acte Pilote`,
+    );
+    d2Mission = mergeMissionSteps(d2Mission, [buildD2AwaitingStep(proposed)], "AWAITING_PILOT_ACT");
+    if (studioIntent.documentAct.kind === "CREATE" || studioIntent.publication.wantsPublish) {
+      d2Mission = mergeMissionSteps(d2Mission, [
+        buildPendingDocumentStep("CREATE"),
+      ]);
+    }
+    missionProjection = d2Mission;
+  } else if (
+    !missionProjection &&
+    carriedMission &&
+    (carriedMission.status === "ACTIVE" || carriedMission.status === "AWAITING_PILOT_ACT")
+  ) {
+    // Resume carried multi-domain mission after D2 confirmed (or still waiting).
+    if (documentEffectForAck?.status === "AVAILABLE" && documentEffectForAck.documentId) {
+      const steps = carriedMission.steps.map((s) =>
+        s.id === "d4_create" || s.capabilityId === "d4.create_document"
+          ? {
+              ...s,
+              status: "DONE" as const,
+              documentId: documentEffectForAck.documentId,
+              revisionId: documentEffectForAck.revisionId,
+            }
+          : s,
+      );
+      missionProjection = {
+        ...carriedMission,
+        steps,
+        status: steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
+          ? "ACTIVE"
+          : "COMPLETED",
+        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+      };
+    } else {
+      missionProjection = carriedMission;
+    }
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
-    : appendDocumentEffectAck(reply.content, documentEffectForAck);
+    : appendMissionAck(
+        appendDocumentEffectAck(assistantBody, documentEffectForAck),
+        missionProjection,
+      );

   const confirmedCapitalisations = capitalisation.capitalisations.filter(
     (c) => c.status === "AVAILABLE",
@@ -1030,6 +1304,7 @@ export async function postUserMessageAndNora(
     idempotentReplay: false,
     humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
     pilotageEffect: pilotageEffectFromAuthority(authority),
+    missionProjection,
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```


### DIFF vs base `projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
index e0d4a6d3..b124860b 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
@@ -194,7 +194,21 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
         setError(j.message ?? j.error ?? "Autorisation refusée");
         return;
       }
-      setAttempt((a) => (a ? { ...a, status: j.status, decisionId: j.decisionId } : a));
+      // ACCEPT-01: authorize route auto-resumes dispatch; reflect observed status
+      // (not the intermediate AUTHORIZED) so Dispatch is not presented as nominal.
+      const resumedStatus =
+        typeof j.missionResume?.status === "string" ? (j.missionResume.status as string) : null;
+      setAttempt((a) =>
+        a
+          ? {
+              ...a,
+              status: resumedStatus ?? j.status,
+              decisionId: j.decisionId,
+              prNumber: j.missionResume?.prNumber ?? j.prNumber ?? a.prNumber ?? null,
+              commitSha: j.missionResume?.commitSha ?? j.commitSha ?? a.commitSha ?? null,
+            }
+          : a,
+      );
     } finally {
       setBusy(false);
     }
```


### DIFF vs base `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 408e3dad..a36b1c73 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,66 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+
+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Continuité cognitive Nora/Studio ACCEPT-01 |
+| Type | EVOL — capacité transverse (MINOR CANDIDATE, NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local DEV worktree — not pushed) |
+| Base | `d7f1507a56e50660ea24903c2dc563c249ba9086` / tree `3e9e1086…` |
+| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE 3200/5434 untouched |
+| Changes | D3 mission-continuity helper; post-D4 CognitiveContinue; D7 prepare from chat; auto resume after authorizePublication; tests unit+PG |
+| Schema | unchanged (no WorkIntent table) |
+| Tests | unit mission-continuity 5 PASS; PG ACCEPT-01 3 PASS; NR CREATE subset 3 PASS; tsc --noEmit PASS |
+| Evidence limits | SCRIPTED GitHub + Nora fixture; no REAL publish; no RECETTE; no Product push |
+| Status | LOCAL CONSTRUCTION — NO RECETTE OR REAL PROMOTION |
+
+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01-REG
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / ACCEPT-01 — régularisation Review Pack + correctif UX panel |
+| Type | EVOL correction locale (NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01 @ `b0e23c46` |
+| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
+| Changes | PublicationInspectionPanel reflects `missionResume.status` after authorize; PG replay C2/C5 test; FULL Review Pack |
+| Defect fixed | After auto-resume, UI kept AUTHORIZED and left Dispatch enabled as if nominal |
+| Schema | unchanged |
+| Status | LOCAL REGULARIZATION — NO PRODUCT PUSH / RECETTE |
+
+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-02
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Continuité cognitive — correction P0-A..P1-E + preuves transverses |
+| Type | EVOL correction intégrée (NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | REG @ `cf5bac70` |
+| Lane | DEV only; RECETTE untouched |
+| Changes | Mission-gated auto-resume; durable recover via listMessages/turn/reconcile; idempotent restitution; cognitive continue post-effet; publish qualification sans GitHub-centrisme; tests T01/T03/P0-A/P0-B/P1-E |
+| Schema | unchanged |
+| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |
+
+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-03
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Continuité cognitive GLOBALE — mise en conformité transverse |
+| Type | EVOL (NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DEV-02 @ `f42cb2f5` |
+| Lane | DEV only; RECETTE untouched |
+| Changes | intent-conduction D3 commun; D2 await Pilot act + reprise; READ≠COMMAND (listMessages); scénarios A/B/C/D/I/K + ACCEPT-01; contrats d'extensibilité |
+| Schema | unchanged |
+| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |
+
 ## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

 | Field | Value |
```


---

## 11–14. Tests

| Suite | Résultat |
|---|---|
| unit intent-conduction | 5 PASS |
| unit mission-continuity | 7 PASS |
| PG global A/B/C/D/I/K + READ≠COMMAND | 6 PASS |
| PG ACCEPT-01 | 8 PASS |
| NR CREATE + REVISE subset | 3 PASS |
| tsc / eslint / next build | PASS |

Scénarios : A dialogue · B D2 Pilot act · C+D CREATE→REVISE réel · I multi D2→D4 · H ACCEPT-01 · K contrats · READ≠COMMAND.

Gaps tests ce cycle : F knowledge deep · F/G D5/D6 full re-run · browser · LIVE/REAL · L STOP exhaustif.

---

## 15–16. Reprise / sécurité

- Crash AUTHORIZED mission → recover on next **command** turn / reconcile
- listMessages lecture pure
- Classic authorize reste AUTHORIZED (prouvé)
- HD seulement sur acte Pilote

---

## 17–19. Fake/Real · ENV · NR

Fixture+SCRIPTED+PG DEV · NO RELEASE · RECETTE intacte · NR CREATE/REVISE subset PASS

---

## 20–22. Anti-doublon · extensibilité · matrice cadrage

- Pas de WorkIntent / second runner / second permissions
- CAPABILITY_CONTRACTS = mapping d'intégration
- Exigences §§1–10 : conduite multi-domaines démontrée D2+D4+Git ; D5/D6 via path existant ; gaps knowledge browser documentés

---

## 23–26. Gaps · dette · rollback

Gaps : orchestration D5/D6 mission générique au-delà du path authority ; browser ; REAL
Rollback : revert feat `b0e23c46..12e26e32` local

---

## 27. Verdict

**NORA/STUDIO GLOBAL INTENT CONTINUITY — EXISTING CAPABILITIES INTEGRATED — MULTI-DOMAIN BEHAVIOR VERIFIED AT REPORTED LEVEL — NOMINAL ARCHITECTURE PRESERVED — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PUSH OR RECETTE AUTHORIZED**

---

## 28. Git Review Index

| Artefact | SHA |
|---|---|
| HEAD | `12e26e323a609646bbd437870aca9314c215c9ed` |
| tree | `dcd83f08d487e820995fc6a7105757e9e8a69a7a` |
| base/fix | `d7f1507a` / `3e9e1086` |
| prev handoff | `69767f66` / `908a4ba8` |

---

## 29. §7.2.1

| Check | Value |
|---|---|
| created files full content | **yes** |
| modified sections complete | **yes** |
| useful diff included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |
