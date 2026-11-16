# SFIA Review Pack — FULL — ML4D Sas Nora Convergence Corrected

**Date:** 2026-11-16
**Republication:** Review Pack Full complet (contenu modifié manquant dans le handoff précédent)
**Cycle:** 8 — Delivery / implémentation · CRITICAL · EVOL
**CKC:** absent → fallback **SFIA v2.6**
**Verdict Cursor:** `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED`
**Note documentaire précédente:** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` (diffs partiels) — **corrigée par cette republication**.

---

## 1. GO Morris

GO 16 novembre 2026 — correctif final convergence Sas Nora (API PATCH / qualification / multi-tours).

Autorisé: DEV, tests, as-built, commit local, handoff L3.
**PAS DE GO:** RECETTE, push projet, PR, merge, migration structurelle, Figma, ADOPTED, Gate C.

---

## 2. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD correctif | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
| Parent | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
| Candidat Sas | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Tree web | `c97e0be1bd91eb736d3a478f8fa29ea5f2f1e3f7` |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `:3102` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| RECETTE | `b05dacf4` / `20blGylSEta7201PgVvlw` @ `:3200` **inchangée** |
| Push produit | **AUCUN** |
| Fichiers du commit | **19** (tous les diffs ci-dessous) |

---

## 3–4. Sources, contrats, Figma

- SFIA v2.6 §4.3.0b / §6.16 / §7 / §7.10–7.11
- Contrats docs@`22ee5540`
- Figma `itgvCulInEnFY6DvgIegvP` 607:3…277 — non modifié
- Handoff incomplet précédent tip `18c9505d` / blob `4d3d53a4`

---

## 5. Écarts

| ID | Constat | Correction |
| --- | --- | --- |
| A | PATCH CAS/HTTP incomplets | revision obligatoire ; 200/409/400/404/503 |
| B | Assessment heuristique | structuré uniquement ; maturation LIVE ; `proposedProjectName` |
| C | Preuve mono-message | multi-tours T1–T5 fixtures/PG/e2e |

---

## 6–7. Blast radius / choix

PATCH API, projection, semantic-qualification, nora-adapter, conversation/service, preparation/service, intent-conduction (nom inspecté), UI, fixtures, tests. Pas de migration 014.

---

## 8. Code créé — intégral

### `api/preparations/[preparationId]/route.ts` (POST-correctif intégral)

```typescript
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
import { listMessages } from "@/domains/conversation/service";
import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
import { listDocuments } from "@/domains/document/service";
import { listKnowledge } from "@/domains/knowledge/service";
import { studioErrorResponse, toStudioError } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const data = await getPreparationContext(session.pilotId, preparationId);
    const msgs = await listMessages(session.pilotId, preparationId);
    const docs = await listDocuments(session.pilotId, preparationId);
    const knowledge = await listKnowledge(session.pilotId, preparationId);
    // Structured awaiting mission — never parse Nora message text for binding.
    const awaitingMission = await getAwaitingMissionForPreparation(
      session.pilotId,
      preparationId,
    );
    return NextResponse.json({
      ...data,
      messages: msgs,
      documents: docs,
      knowledge,
      awaitingMission,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

/**
 * Pilot aperçu correction — CAS on expectedCreationRevision required.
 * Never maps DB/conflict failures to SESSION_INVALID.
 */
export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "INVALID_REQUEST", reason: "JSON body required" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "INVALID_REQUEST", reason: "object body required" }, { status: 400 });
    }

    const b = body as {
      previewName?: unknown;
      previewSummary?: unknown;
      expectedCreationRevision?: unknown;
    };

    if (typeof b.expectedCreationRevision !== "number" || !Number.isFinite(b.expectedCreationRevision)) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", reason: "expectedCreationRevision required" },
        { status: 400 },
      );
    }
    if (typeof b.previewName !== "string" || typeof b.previewSummary !== "string") {
      return NextResponse.json(
        { error: "INVALID_REQUEST", reason: "previewName and previewSummary strings required" },
        { status: 400 },
      );
    }

    const rev = await updatePreview(
      session.pilotId,
      preparationId,
      b.previewName,
      b.previewSummary,
      b.expectedCreationRevision,
    );
    const data = await getPreparationContext(session.pilotId, preparationId);

    // Re-read after commit: if another writer advanced revision, return coherent current state
    // (same revision + projection pair) rather than mixing an old revision with a newer projection.
    const confirmedRevision = data.preparation.creationRevision;
    if (confirmedRevision !== rev) {
      return NextResponse.json({
        creationRevision: confirmedRevision,
        projection: data.projection,
        preparation: data.preparation,
        reconciled: true,
      });
    }

    return NextResponse.json({
      creationRevision: rev,
      projection: data.projection,
      preparation: data.preparation,
    });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "CONFLICT") {
      return NextResponse.json(
        {
          error: "CONFLICT",
          actualCreationRevision: (e as { actualCreationRevision?: number }).actualCreationRevision,
        },
        { status: 409 },
      );
    }
    // FORBIDDEN on missing/foreign prep → 404 (non-disclosure); UNAVAILABLE → 503; else classified.
    if (code === "FORBIDDEN") {
      return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    }
    if (code === "UNAVAILABLE") {
      return NextResponse.json(
        { error: "DEPENDENCY_UNAVAILABLE", errorCategory: "DEPENDENCY_UNAVAILABLE" },
        { status: 503 },
      );
    }
    const mapped = studioErrorResponse(e);
    // Guard: never advertise success/session for persistence failures.
    if (mapped.status === 401 && toStudioError(e).code !== "SESSION_INVALID") {
      return NextResponse.json(
        { error: "INTERNAL", errorCategory: "INTERNAL" },
        { status: 500 },
      );
    }
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### `tests/integration/preparation-patch.pg.test.ts` (nouveau — intégral)

```typescript
/**
 * Gap A — PATCH /api/preparations/{id} CAS + HTTP classification (PG REAL).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

/**
 * COOKIE name in session.ts is frozen at module import — force DEV before any session import.
 */
const devSessionRef = vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  process.env.STUDIO_DEV_TEST_LOGIN = "1";
  delete process.env.OPENAI_API_KEY;
  return { token: "" };
});

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      // Must match session.ts studioSessionCookieName() at import time (DEV).
      if (name !== "sfia_studio_session__DEV") return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { PATCH } from "@/app/api/preparations/[preparationId]/route";
import { createDevTestSession } from "@/domains/identity/session";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { eq } from "drizzle-orm";
import { newId } from "@/lib/ids";
import {
  applyPilotApercuCorrection,
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function bindDevSession(which: "a" | "b") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  return sess;
}

async function patchHttp(
  preparationId: string,
  body: unknown,
): Promise<{ status: number; body: Record<string, unknown> }> {
  const res = await PATCH(
    new Request(`http://127.0.0.1:3100/api/preparations/${preparationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    { params: Promise.resolve({ preparationId }) },
  );
  let parsed: Record<string, unknown> = {};
  try {
    parsed = (await res.json()) as Record<string, unknown>;
  } catch {
    parsed = {};
  }
  return { status: res.status, body: parsed };
}

describe("PG REAL — preparation PATCH contract", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  });

  it("PATCH 200: returns confirmed revision + projection + preparation", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const before = await getPreparationContext(sess.pilotId, prep.id);
    const res = await patchHttp(prep.id, {
      previewName: "Cockpit inspecté",
      previewSummary: "Intention corrigée",
      expectedCreationRevision: before.preparation.creationRevision,
    });
    expect(res.status).toBe(200);
    expect(res.body.creationRevision).toBe(before.preparation.creationRevision + 1);
    expect((res.body.preparation as { previewName: string }).previewName).toBe("Cockpit inspecté");
    const proj = res.body.projection as {
      name: { value: string; status: string; source: { kind: string } };
    };
    expect(proj.name.value).toBe("Cockpit inspecté");
    expect(proj.name.status).toBe("PILOT_EXPRESSED");
    expect(proj.name.source.kind).toBe("PILOT_UI_EDIT");
  });

  it("PATCH 400 when expectedCreationRevision missing", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const res = await patchHttp(prep.id, {
      previewName: "X",
      previewSummary: "Y",
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("INVALID_REQUEST");
    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(row.previewName).toBe("");
  });

  it("PATCH 409: second client with stale revision does not overwrite first", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const rev0 = (await getPreparationContext(sess.pilotId, prep.id)).preparation.creationRevision;

    const first = await patchHttp(prep.id, {
      previewName: "Premier gagnant",
      previewSummary: "a",
      expectedCreationRevision: rev0,
    });
    expect(first.status).toBe(200);
    expect(first.body.creationRevision).toBe(rev0 + 1);

    const second = await patchHttp(prep.id, {
      previewName: "Deuxième perdant",
      previewSummary: "b",
      expectedCreationRevision: rev0,
    });
    expect(second.status).toBe(409);
    expect(second.body.error).toBe("CONFLICT");
    expect(second.body.actualCreationRevision).toBe(rev0 + 1);

    const after = await getPreparationContext(sess.pilotId, prep.id);
    expect(after.preparation.previewName).toBe("Premier gagnant");
    expect(after.projection?.name?.value).toBe("Premier gagnant");
    expect(after.preparation.creationRevision).toBe(rev0 + 1);
  });

  it("PATCH 404 for foreign preparation (non-disclosure)", async () => {
    const owner = await seedPilot("PatchOwner");
    const prep = await openOrCreatePreparation(owner);
    await bindDevSession("a"); // different pilot session
    const res = await patchHttp(prep.id, {
      previewName: "Intrusion",
      previewSummary: "x",
      expectedCreationRevision: 1,
    });
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("NOT_FOUND");
    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(row.previewName).toBe("");
  });

  it("service CAS: concurrent same revision → one APPLIED one CONFLICT", async () => {
    const pilotId = await seedPilot("PatchRace");
    const prep = await openOrCreatePreparation(pilotId);
    const rev = (await getPreparationContext(pilotId, prep.id)).preparation.creationRevision;
    const [a, b] = await Promise.all([
      applyPilotApercuCorrection({
        pilotId,
        preparationId: prep.id,
        previewName: "Race A",
        previewSummary: "a",
        expectedCreationRevision: rev,
      }),
      applyPilotApercuCorrection({
        pilotId,
        preparationId: prep.id,
        previewName: "Race B",
        previewSummary: "b",
        expectedCreationRevision: rev,
      }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses).toEqual(["APPLIED", "CONFLICT"]);
    const ctx = await getPreparationContext(pilotId, prep.id);
    expect(["Race A", "Race B"]).toContain(ctx.preparation.previewName);
    expect(ctx.preparation.creationRevision).toBe(rev + 1);
  });

  it("create after PATCH uses inspected name", async () => {
    const sess = await bindDevSession("a");
    const prep = await openOrCreatePreparation(sess.pilotId);
    const uniqueName = `Nom inspecté ${newId("n")}`;
    await updatePreview(sess.pilotId, prep.id, "Ancien", "s");
    const mid = await getPreparationContext(sess.pilotId, prep.id);
    const patched = await patchHttp(prep.id, {
      previewName: uniqueName,
      previewSummary: mid.preparation.previewSummary,
      expectedCreationRevision: mid.preparation.creationRevision,
    });
    expect(patched.status).toBe(200);
    const fresh = await getPreparationContext(sess.pilotId, prep.id);
    expect(fresh.projection?.name?.value).toBe(uniqueName);
    const { createProjectCommand } = await import("@/domains/preparation/create-project");
    const created = await createProjectCommand({
      pilotId: sess.pilotId,
      preparationId: prep.id,
      expectedCreationRevision: fresh.preparation.creationRevision,
      projectName: fresh.projection!.name!.value,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status === "CREATED") {
      const { projects } = await import("@/db/schema");
      const proj = (await db.select().from(projects).where(eq(projects.id, created.projectId)))[0];
      expect(proj?.name).toBe(uniqueName);
    }
  });
});

```

### `tests/unit/nora-sas-maturation-instructions.test.ts` (nouveau — intégral)

```typescript
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Structural proof: LIVE agent instructions include sas maturation duties
 * in the same qualification turn (no second prompt). Does not prove LIVE cognition.
 */
describe("Nora LIVE instructions — sas maturation (structural)", () => {
  const src = readFileSync(
    join(__dirname, "../../src/domains/conversation/nora-adapter.ts"),
    "utf8",
  );

  it("embeds maturation responsibilities in QUALIFICATION_INSTRUCTIONS", () => {
    expect(src).toContain("MATURATION DU SAS");
    expect(src).toContain("Comprendre l'intention libre");
    expect(src).toContain("Reformuler fidèlement");
    expect(src).toContain("desiredOutcome / initialScope");
    expect(src).toContain("Respecter négations et corrections");
    expect(src).toContain("preparationAssessment");
    expect(src).toContain("Ne jamais déduire une décision humaine");
    expect(src).toContain("omets preparationAssessment");
    // Single agent / single outputType — no second LLM for aperçu.
    expect(src).toContain("outputType: NoraTurnQualificationSchema");
    const maturationBlocks = src.split("MATURATION DU SAS").length - 1;
    expect(maturationBlocks).toBe(1);
  });
});

```

---

## 8bis. Nora LIVE instructions — maturation (extrait inspectable — cœur Gap B)

Fichier: `web/src/domains/conversation/nora-adapter.ts`
Même tour, même enveloppe, `outputType: NoraTurnQualificationSchema`.

```typescript
  const QUALIFICATION_INSTRUCTIONS = [
    SYSTEM_INSTRUCTIONS,
    "",
    "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
    "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
    "- goal = intention comprise (reformulation fidèle, sans invention).",
    "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ; sinon chaînes vides.",
    "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
    "- clarifications = questions réellement utiles (peu nombreuses), pas une checklist.",
    "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
    "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
    "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
    "- Pour d2.create_project, parameters.projectName si un nom de travail est proposé (peut rejoindre proposedProjectName).",
    "- documentProposal (optionnel) = { title, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000.",
    "- documentSource (optionnel) = { kind: PRIOR_ASSISTANT_MESSAGE, assistantMessageId } pour enregistrer une proposition ancienne sans la régénérer.",
    "- Ne combine jamais documentSource et documentProposal dans le même tour.",
    "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
    "- REQUEST_EFFECT uniquement pour une demande positive d'effet ; jamais pour négation, how-to, citation, hypothèse.",
    "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
    "- Une qualification n'est PAS une autorisation ni une HumanDecision.",
    "- Utilise search_conversation_history / read_conversation_messages pour retrouver des sources anciennes avant d'affirmer une absence.",
    "- search_conversation_history : la requête lexicale est un indice ; parcours paginé pour couverture — pas un filtre exclusif.",
    "- Ne place aucun diagnostic technique (clientIntentKey, step, capability status) dans replyDraft.",
    "- Sas sans projet: si le Pilote demande et autorise un document D4, status=QUALIFIED avec d4.create_document REQUEST_EFFECT + documentProposal ; Studio exécutera l'effet. Ne mets pas UNAVAILABLE pour seule absence de projet ou d'outil d'écriture Nora.",
    "",
    "MATURATION DU SAS (préparation sans projet) — même tour, même enveloppe :",
    "1. Comprendre l'intention libre du Pilote.",
    "2. Reformuler fidèlement dans goal / replyDraft.",
    "3. Identifier les questions déterminantes (clarifications).",
    "4. Proposer une direction utile sans imposer un formulaire.",
    "5. Expliciter les hypothèses ; ne pas les présenter comme des faits.",
    "6. Renseigner desiredOutcome / initialScope seulement s'ils sont justifiés par l'échange.",
    "7. Respecter négations et corrections du Pilote (y compris un nom préféré).",
    "8. Apprécier qualitativement la possibilité de commencer (preparationAssessment).",
    "9. Expliquer l'appréciation par les acquis réels (preparationAssessmentExplanation).",
    "10. Ne jamais déduire une décision humaine ni un GO de création — le Pilote reste maître de Créer le projet.",
  ].join("\n");


```

---

## 8ter. Fixtures multi-tours (extrait inspectable — cœur Gap C)

Fichier: `web/src/domains/conversation/fixture-semantic-qualify.ts`

```typescript
export const SAS_MATURATION_T1 =
  "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
export const SAS_MATURATION_T2 =
  "Ce qui me manque surtout, c'est de retrouver les décisions importantes et de savoir quoi faire ensuite.";
export const SAS_MATURATION_T3 =
  "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
export const SAS_MATURATION_T4 =
  "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";

register(
  SAS_MATURATION_T1,
  dialogue(
    "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
    "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
    ["NO_EFFECT"],
    {
      clarifications: [
        "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
      ],
      preparationAssessment: "EXPLORING",
      preparationAssessmentExplanation:
        "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
    },
  ),
);

register(
  SAS_MATURATION_T2,
  dialogue(
    "Retrouver les décisions importantes et savoir quoi faire ensuite",
    "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
    ["NO_EFFECT"],
    {
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      clarifications: [
        "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
      ],
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "Un résultat visé est désormais exprimé ; le périmètre initial et un nom de travail restent à préciser.",
    },
  ),
);

register(
  SAS_MATURATION_T3,
  effect(
    "Espace personnel : décisions, points ouverts, prochaines actions",
    "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
    [
      {
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Proposition Assistant de pilotage",
        parameters: { projectName: "Assistant de pilotage" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    {
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Intention, résultat et un premier périmètre personnel sont assez clairs pour démarrer. La collaboration d'équipe reste hors du périmètre immédiat.",
    },
  ),
);

register(
  SAS_MATURATION_T4,
  // Dialogue (no REQUEST_EFFECT): name correction while a D2 mission may still await Pilot create (S05).
  dialogue(
    "Espace personnel de pilotage nommé Cockpit projets",
    "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
    ["NAME_CORRECTION", "NO_EFFECT"],
    {
      proposedProjectName: "Cockpit projets",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est Cockpit projets.",
    },
  ),
);

register(
  "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
  effect(
    "Cockpit de suivi des projets",
    "Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : Cockpit projets. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.",
    [
      {
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Création Cockpit projets",
        parameters: { projectName: "Cockpit projets" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    {
      desiredOutcome: "Voir portefeuille et risques en un seul endroit",
      initialScope: "Portefeuille et risques en premier",
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Intention, résultat et périmètre initial sont assez clairs pour démarrer. Les raffinements peuvent se faire dans le projet.",
    },
  ),
);

register(
```

---

## 9. Code modifié — TOUS les diffs du commit (19/19)

Diff range: `1dfc79ff..acb5ce65`

### `api/preparations/[preparationId]/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
index a89ceee5..7cf992bd 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
@@ -5,6 +5,7 @@ import { listMessages } from "@/domains/conversation/service";
 import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
 import { listDocuments } from "@/domains/document/service";
 import { listKnowledge } from "@/domains/knowledge/service";
+import { studioErrorResponse, toStudioError } from "@/lib/http-errors";

 export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
   try {
@@ -27,29 +28,71 @@ export async function GET(_: Request, ctx: { params: Promise<{ preparationId: st
       awaitingMission,
     });
   } catch (e) {
-    const code = (e as { code?: string }).code;
-    if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+    const mapped = studioErrorResponse(e);
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }

+/**
+ * Pilot aperçu correction — CAS on expectedCreationRevision required.
+ * Never maps DB/conflict failures to SESSION_INVALID.
+ */
 export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
   try {
     const session = await requireStudioSession();
     const { preparationId } = await ctx.params;
-    const body = (await req.json()) as {
-      previewName?: string;
-      previewSummary?: string;
-      expectedCreationRevision?: number;
+
+    let body: unknown;
+    try {
+      body = await req.json();
+    } catch {
+      return NextResponse.json({ error: "INVALID_REQUEST", reason: "JSON body required" }, { status: 400 });
+    }
+
+    if (!body || typeof body !== "object" || Array.isArray(body)) {
+      return NextResponse.json({ error: "INVALID_REQUEST", reason: "object body required" }, { status: 400 });
+    }
+
+    const b = body as {
+      previewName?: unknown;
+      previewSummary?: unknown;
+      expectedCreationRevision?: unknown;
     };
+
+    if (typeof b.expectedCreationRevision !== "number" || !Number.isFinite(b.expectedCreationRevision)) {
+      return NextResponse.json(
+        { error: "INVALID_REQUEST", reason: "expectedCreationRevision required" },
+        { status: 400 },
+      );
+    }
+    if (typeof b.previewName !== "string" || typeof b.previewSummary !== "string") {
+      return NextResponse.json(
+        { error: "INVALID_REQUEST", reason: "previewName and previewSummary strings required" },
+        { status: 400 },
+      );
+    }
+
     const rev = await updatePreview(
       session.pilotId,
       preparationId,
-      body.previewName ?? "",
-      body.previewSummary ?? "",
-      body.expectedCreationRevision,
+      b.previewName,
+      b.previewSummary,
+      b.expectedCreationRevision,
     );
     const data = await getPreparationContext(session.pilotId, preparationId);
+
+    // Re-read after commit: if another writer advanced revision, return coherent current state
+    // (same revision + projection pair) rather than mixing an old revision with a newer projection.
+    const confirmedRevision = data.preparation.creationRevision;
+    if (confirmedRevision !== rev) {
+      return NextResponse.json({
+        creationRevision: confirmedRevision,
+        projection: data.projection,
+        preparation: data.preparation,
+        reconciled: true,
+      });
+    }
+
     return NextResponse.json({
       creationRevision: rev,
       projection: data.projection,
@@ -66,6 +109,24 @@ export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId
         { status: 409 },
       );
     }
-    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
+    // FORBIDDEN on missing/foreign prep → 404 (non-disclosure); UNAVAILABLE → 503; else classified.
+    if (code === "FORBIDDEN") {
+      return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
+    }
+    if (code === "UNAVAILABLE") {
+      return NextResponse.json(
+        { error: "DEPENDENCY_UNAVAILABLE", errorCategory: "DEPENDENCY_UNAVAILABLE" },
+        { status: 503 },
+      );
+    }
+    const mapped = studioErrorResponse(e);
+    // Guard: never advertise success/session for persistence failures.
+    if (mapped.status === 401 && toStudioError(e).code !== "SESSION_INVALID") {
+      return NextResponse.json(
+        { error: "INTERNAL", errorCategory: "INTERNAL" },
+        { status: 500 },
+      );
+    }
+    return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }
```

### `app/preparations/[preparationId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index ffda4a0b..8df4a8ba 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -498,20 +498,46 @@ export default function PreparationPage() {
         expectedCreationRevision: creationRevision,
       }),
     });
-    const j = await res.json();
+    let j: {
+      creationRevision?: number;
+      preparation?: { previewName?: string; previewSummary?: string; creationRevision?: number };
+      projection?: PreparationProjection | null;
+      error?: string;
+      actualCreationRevision?: number;
+      reason?: string;
+    } = {};
+    try {
+      j = (await res.json()) as typeof j;
+    } catch {
+      j = {};
+    }
     if (res.ok) {
+      // Trust the coherent server pair (revision + projection + preparation) — never mix.
       setPreviewName(j.preparation?.previewName ?? name);
       setPreviewSummary(j.preparation?.previewSummary ?? summary);
-      setCreationRevision(j.creationRevision);
+      setCreationRevision(
+        typeof j.creationRevision === "number"
+          ? j.creationRevision
+          : (j.preparation?.creationRevision ?? creationRevision),
+      );
       setProjection((j.projection as PreparationProjection | null) ?? null);
       setProjectionFreshness("current");
       setProposalEditing(false);
-      setStatus(`Aperçu corrigé · révision ${j.creationRevision}`);
+      setStatus(`Aperçu corrigé · révision ${j.creationRevision ?? "?"}`);
     } else if (res.status === 409) {
-      setStatus("CONFLICT: aperçu modifié ailleurs — rechargement");
+      setStatus(
+        `CONFLICT: aperçu modifié ailleurs (rév. actuelle ${j.actualCreationRevision ?? "?"}) — rechargement sans écrasement`,
+      );
+      await reload();
+    } else if (res.status === 401) {
+      setStatus("Session invalide — reconnexion requise");
+    } else if (res.status === 400) {
+      setStatus(`Requête invalide: ${j.reason ?? j.error ?? "corps"}`);
+    } else if (res.status === 503 || res.status === 500) {
+      setStatus("Enregistrement non confirmé (panne) — aucun succès annoncé ; rechargement");
       await reload();
     } else {
-      setStatus(`Échec enregistrement aperçu`);
+      setStatus(`Échec enregistrement aperçu (${res.status})`);
     }
   }
```

### `components/figma/PreparationProposal.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index 97bfadeb..b2cf861f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -18,8 +18,10 @@ const ASSESSMENT_LABEL: Record<string, string> = {
   BASE_SUFFICIENTE: "Base suffisante",
 };

-function statusLabel(status: string | undefined): string {
-  if (status === "PILOT_EXPRESSED") return "Exprimé";
+function statusLabel(status: string | undefined, sourceKind?: string): string {
+  if (status === "PILOT_EXPRESSED") {
+    return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
+  }
   if (status === "NORA_PROPOSED") return "Proposé";
   if (status === "NEEDS_CONFIRMATION") return "À préciser";
   return "—";
@@ -183,8 +185,8 @@ export function PreparationProposal(props: {
                     {name}
                   </span>
                   {projection?.name ? (
-                    <span className="muted text-xs ml-2">
-                      · {statusLabel(projection.name.status)}
+                    <span className="muted text-xs ml-2" data-testid="prep-field-name-provenance">
+                      · {statusLabel(projection.name.status, projection.name.source.kind)}
                     </span>
                   ) : null}
                 </div>
```

### `domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 8993d9e6..6f2be5ee 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -436,10 +436,12 @@ async function runLiveWithTools(
     "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
     "- goal = intention comprise (reformulation fidèle, sans invention).",
     "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ; sinon chaînes vides.",
+    "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
     "- clarifications = questions réellement utiles (peu nombreuses), pas une checklist.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
-    "- preparationAssessmentExplanation = justification qualitative courte ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
-    "- Pour d2.create_project, parameters.projectName si un nom de travail est proposé.",
+    "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
+    "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
+    "- Pour d2.create_project, parameters.projectName si un nom de travail est proposé (peut rejoindre proposedProjectName).",
     "- documentProposal (optionnel) = { title, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000.",
     "- documentSource (optionnel) = { kind: PRIOR_ASSISTANT_MESSAGE, assistantMessageId } pour enregistrer une proposition ancienne sans la régénérer.",
     "- Ne combine jamais documentSource et documentProposal dans le même tour.",
@@ -451,6 +453,18 @@ async function runLiveWithTools(
     "- search_conversation_history : la requête lexicale est un indice ; parcours paginé pour couverture — pas un filtre exclusif.",
     "- Ne place aucun diagnostic technique (clientIntentKey, step, capability status) dans replyDraft.",
     "- Sas sans projet: si le Pilote demande et autorise un document D4, status=QUALIFIED avec d4.create_document REQUEST_EFFECT + documentProposal ; Studio exécutera l'effet. Ne mets pas UNAVAILABLE pour seule absence de projet ou d'outil d'écriture Nora.",
+    "",
+    "MATURATION DU SAS (préparation sans projet) — même tour, même enveloppe :",
+    "1. Comprendre l'intention libre du Pilote.",
+    "2. Reformuler fidèlement dans goal / replyDraft.",
+    "3. Identifier les questions déterminantes (clarifications).",
+    "4. Proposer une direction utile sans imposer un formulaire.",
+    "5. Expliciter les hypothèses ; ne pas les présenter comme des faits.",
+    "6. Renseigner desiredOutcome / initialScope seulement s'ils sont justifiés par l'échange.",
+    "7. Respecter négations et corrections du Pilote (y compris un nom préféré).",
+    "8. Apprécier qualitativement la possibilité de commencer (preparationAssessment).",
+    "9. Expliquer l'appréciation par les acquis réels (preparationAssessmentExplanation).",
+    "10. Ne jamais déduire une décision humaine ni un GO de création — le Pilote reste maître de Créer le projet.",
   ].join("\n");

   const agent = new Agent({
```

### `domains/conversation/fixture-semantic-qualify.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 79879797..86174b7a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -38,20 +38,23 @@ function normalizeUtterance(text: string): string {
   return text.replace(/\s+/g, " ").trim();
 }

+type QualExtras = Partial<
+  Pick<
+    NoraTurnQualification,
+    | "desiredOutcome"
+    | "initialScope"
+    | "proposedProjectName"
+    | "clarifications"
+    | "preparationAssessment"
+    | "preparationAssessmentExplanation"
+  >
+>;
+
 function dialogue(
   goal: string,
   reply: string,
   constraints: string[] = [],
-  extras?: Partial<
-    Pick<
-      NoraTurnQualification,
-      | "desiredOutcome"
-      | "initialScope"
-      | "clarifications"
-      | "preparationAssessment"
-      | "preparationAssessmentExplanation"
-    >
-  >,
+  extras?: QualExtras,
 ): NoraTurnQualification {
   return {
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
@@ -59,6 +62,7 @@ function dialogue(
     goal,
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
+    proposedProjectName: extras?.proposedProjectName ?? "",
     intents: [
       {
         id: "i1",
@@ -82,16 +86,7 @@ function effect(
   goal: string,
   reply: string,
   intents: Array<Partial<Pick<QualifiedIntentItem, "id">> & Omit<QualifiedIntentItem, "id">>,
-  extras?: Partial<
-    Pick<
-      NoraTurnQualification,
-      | "desiredOutcome"
-      | "initialScope"
-      | "clarifications"
-      | "preparationAssessment"
-      | "preparationAssessmentExplanation"
-    >
-  >,
+  extras?: QualExtras,
 ): NoraTurnQualification {
   return {
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
@@ -99,6 +94,7 @@ function effect(
     goal,
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
+    proposedProjectName: extras?.proposedProjectName ?? "",
     intents: intents.map((it, idx) => ({
       ...it,
       id: it.id ?? `i${idx + 1}`,
@@ -182,6 +178,98 @@ register(
   ),
 );

+/** Multi-tour maturation scenario (exact utterances — TEST_BOUNDARY only). */
+export const SAS_MATURATION_T1 =
+  "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
+export const SAS_MATURATION_T2 =
+  "Ce qui me manque surtout, c'est de retrouver les décisions importantes et de savoir quoi faire ensuite.";
+export const SAS_MATURATION_T3 =
+  "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
+export const SAS_MATURATION_T4 =
+  "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";
+
+register(
+  SAS_MATURATION_T1,
+  dialogue(
+    "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
+    "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
+    ["NO_EFFECT"],
+    {
+      clarifications: [
+        "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
+      ],
+      preparationAssessment: "EXPLORING",
+      preparationAssessmentExplanation:
+        "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
+    },
+  ),
+);
+
+register(
+  SAS_MATURATION_T2,
+  dialogue(
+    "Retrouver les décisions importantes et savoir quoi faire ensuite",
+    "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
+    ["NO_EFFECT"],
+    {
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      clarifications: [
+        "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
+      ],
+      preparationAssessment: "CLARIFYING",
+      preparationAssessmentExplanation:
+        "Un résultat visé est désormais exprimé ; le périmètre initial et un nom de travail restent à préciser.",
+    },
+  ),
+);
+
+register(
+  SAS_MATURATION_T3,
+  effect(
+    "Espace personnel : décisions, points ouverts, prochaines actions",
+    "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
+    [
+      {
+        capabilityId: "d2.create_project",
+        mode: "REQUEST_EFFECT",
+        summary: "Proposition Assistant de pilotage",
+        parameters: { projectName: "Assistant de pilotage" },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+    {
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      initialScope:
+        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+      clarifications: [],
+      preparationAssessment: "BASE_SUFFICIENTE",
+      preparationAssessmentExplanation:
+        "Intention, résultat et un premier périmètre personnel sont assez clairs pour démarrer. La collaboration d'équipe reste hors du périmètre immédiat.",
+    },
+  ),
+);
+
+register(
+  SAS_MATURATION_T4,
+  // Dialogue (no REQUEST_EFFECT): name correction while a D2 mission may still await Pilot create (S05).
+  dialogue(
+    "Espace personnel de pilotage nommé Cockpit projets",
+    "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
+    ["NAME_CORRECTION", "NO_EFFECT"],
+    {
+      proposedProjectName: "Cockpit projets",
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      initialScope:
+        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+      preparationAssessment: "BASE_SUFFICIENTE",
+      preparationAssessmentExplanation:
+        "Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est Cockpit projets.",
+    },
+  ),
+);
+
 register(
   "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
   effect(
```

### `domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 7f04642a..b77dd839 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2069,6 +2069,11 @@ export async function postUserMessageAndNora(
       .filter((p) => p.kind === "OPEN_POINT")
       .map((p) => p.statement)
       .slice(0, 6);
+    const proposedName =
+      (qualification.proposedProjectName?.trim()
+        ? qualification.proposedProjectName.trim()
+        : null) ||
+      studioIntent.proposedProjectName;
     preparationProjectionDraft = draftProjectionFromQualification({
       preparationId,
       turnKey: clientIntentKey,
@@ -2077,7 +2082,7 @@ export async function postUserMessageAndNora(
       desiredOutcome: qualification.desiredOutcome || "",
       initialScope: qualification.initialScope || "",
       clarifications: qualification.clarifications ?? [],
-      proposedProjectName: studioIntent.proposedProjectName,
+      proposedProjectName: proposedName,
       openPointStatements: openFromQual,
       preparationAssessment: qualification.preparationAssessment ?? null,
       preparationAssessmentExplanation:
```

### `domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 4d4a9f90..48e32290 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -128,6 +128,11 @@ export const NoraTurnQualificationSchema = z.object({
   desiredOutcome: z.string().max(800).default(""),
   /** Périmètre initial lorsque réellement exprimé — ne pas inventer. */
   initialScope: z.string().max(800).default(""),
+  /**
+   * Nom de travail proposé pour le sas — distinct d'un REQUEST_EFFECT D2.
+   * Permet une correction de nom sans second acte d'effet concurrent (S05).
+   */
+  proposedProjectName: z.string().max(120).default(""),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
@@ -220,6 +225,7 @@ export function unavailableQualification(reason: string, replyDraft = ""): NoraT
     goal: "",
     desiredOutcome: "",
     initialScope: "",
+    proposedProjectName: "",
     intents: [],
     clarifications: [reason.slice(0, 400)],
     replyDraft:
@@ -402,9 +408,13 @@ export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioPr
     : null;

   const wantsProjectCreate = Boolean(createProject);
-  const proposedProjectName = createProject?.parameters.projectName
+  const fromIntent = createProject?.parameters.projectName
     ? sanitizeProposedLabel(createProject.parameters.projectName) || null
     : null;
+  const fromEnvelope = q.proposedProjectName?.trim()
+    ? sanitizeProposedLabel(q.proposedProjectName) || null
+    : null;
+  const proposedProjectName = fromIntent || fromEnvelope;

   const wantsFollowOnDocument = Boolean(
     wantsProjectCreate &&
```

### `domains/conversation/intent-conduction.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 776f6ea2..c9d7ca85 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -410,12 +410,12 @@ export async function verifyMissionForD2Act(input: {
     if (hinted.status === "AWAITING_PILOT_ACT") {
       const expected = hinted.proposedProjectName?.trim();
       const received = input.projectName?.trim();
+      // Name may have been corrected by Nora (conversation) or Pilot (aperçu UI) after the
+      // awaiting mission was opened. The Pilot create act remains explicit; use the inspected name.
       if (expected && received && normalizeProjectName(expected) !== normalizeProjectName(received)) {
         return {
-          status: "MISSION_NAME_MISMATCH",
-          reason: "projectName incompatible with awaiting mission proposal",
-          expected,
-          received,
+          status: "OK",
+          mission: { ...hinted, proposedProjectName: received },
         };
       }
       return { status: "OK", mission: hinted };
```

### `domains/preparation/projection.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index a7f8cdec..0a334199 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -10,7 +10,11 @@ export type ProjectionFieldStatus =
   | "NORA_PROPOSED"
   | "NEEDS_CONFIRMATION";

-export type ProjectionFieldSourceKind = "PILOT_TURN" | "NORA_TURN" | "KNOWLEDGE_REF";
+export type ProjectionFieldSourceKind =
+  | "PILOT_TURN"
+  | "PILOT_UI_EDIT"
+  | "NORA_TURN"
+  | "KNOWLEDGE_REF";

 export type ProposedField<T> = {
   value: T;
@@ -143,6 +147,16 @@ export function pilotExpressedField(value: string, editKey: string): ProposedFie
   };
 }

+/** UI aperçu correction — not a fabricated D3 conversation turn. */
+export function pilotUiEditField(value: string, editKey: string): ProposedField<string> {
+  return {
+    value: value.trim().slice(0, 500),
+    status: "PILOT_EXPRESSED",
+    source: { kind: "PILOT_UI_EDIT", ref: editKey },
+    isCurrent: true,
+  };
+}
+
 /**
  * Preserve Pilot-expressed fields against Nora re-proposal of the same slot.
  * Do not clear an acquired field when the new turn leaves it empty.
@@ -230,39 +244,21 @@ export function draftProjectionFromQualification(input: {
     noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
   );

-  let assessment: ProjectionAssessment = "EXPLORING";
-  let explanation =
-    "Nora explore encore l'intention. Aucune base de démarrage n'est affirmée.";
-
+  /**
+   * Assessment is attributed to Nora only when the structured qualification provides it.
+   * Presence of name/intention/outcome must NOT fabricate BASE_SUFFICIENTE / PROPOSAL.
+   * D2 eligibility (canCreate) is separate from Nora's qualitative advice.
+   */
+  let suggestion: PreparationProjection["suggestion"] = null;
   if (input.preparationAssessment) {
-    assessment = input.preparationAssessment;
-    explanation =
+    const explanation =
       input.preparationAssessmentExplanation?.trim() ||
-      (assessment === "BASE_SUFFICIENTE"
-        ? "Nora estime qu'une base de démarrage est raisonnable — suggestion qualitative, pas une autorisation."
-        : assessment === "PROPOSAL"
-          ? "Une proposition de travail est disponible."
-          : assessment === "CLARIFYING"
-            ? "Une clarification reste utile."
-            : explanation);
-  } else if (intention && openQuestions.length > 0 && !name) {
-    assessment = "CLARIFYING";
-    explanation =
-      "Des éléments sont compris, mais une clarification reste utile avant de figer un nom.";
-  } else if (intention && name && (desiredOutcome || initialScope) && openQuestions.length === 0) {
-    assessment = "BASE_SUFFICIENTE";
-    explanation =
-      "Intention, nom et premiers éléments de résultat/périmètre sont assez clairs pour démarrer.";
-  } else if (intention && name && openQuestions.length > 0) {
-    assessment = "PROPOSAL";
-    explanation =
-      "Une proposition de travail est disponible. Des points ouverts restent à préciser sans bloquer nécessairement la création.";
-  } else if (intention && name) {
-    assessment = "PROPOSAL";
-    explanation = "Une proposition de travail se dessine ; Nora peut encore préciser résultat et périmètre.";
-  } else if (intention) {
-    assessment = "CLARIFYING";
-    explanation = "Une intention se dessine ; Nora continue de clarifier le résultat et le périmètre.";
+      "Appréciation structurée fournie par Nora — suggestion qualitative, pas une autorisation.";
+    suggestion = {
+      assessment: input.preparationAssessment,
+      explanation,
+      sourceTurnKey: turnKey,
+    };
   }

   return {
@@ -274,11 +270,7 @@ export function draftProjectionFromQualification(input: {
     desiredOutcome,
     initialScope,
     openQuestions,
-    suggestion: {
-      assessment,
-      explanation,
-      sourceTurnKey: turnKey,
-    },
+    suggestion,
   };
 }
```

### `domains/preparation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/service.ts b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
index 003a76b2..0e3b314c 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
@@ -12,7 +12,7 @@ import {
   type PreparationProjection,
   mergeNoraDraftWithPrior,
   parseProjectionJson,
-  pilotExpressedField,
+  pilotUiEditField,
   previewFieldsFromProjection,
   projectionMateriallyChanged,
 } from "@/domains/preparation/projection";
@@ -130,16 +130,18 @@ export async function applyPilotApercuCorrection(input: {
       const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
       const editKey =
         input.editKey?.trim() ||
-        `pilot-edit:${input.preparationId}:${currentRev}:${Date.now()}`;
+        `pilot-ui-edit:${input.preparationId}:${currentRev}:${Date.now()}`;
       const nameRaw = input.previewName.trim();
       const summaryRaw = input.previewSummary.trim();
+      // Keep prior Nora suggestion if any; do not invent a Nora assessment from a UI edit.
+      // Annotate pilot correction in explanation only when we already had a suggestion, else leave null.
       const draft: Omit<PreparationProjection, "revision" | "observedAt"> = {
         schemaVersion: 1,
         preparationId: input.preparationId,
         updatedFromTurnKey: editKey,
-        name: nameRaw ? pilotExpressedField(nameRaw.slice(0, 120), editKey) : null,
+        name: nameRaw ? pilotUiEditField(nameRaw.slice(0, 120), editKey) : null,
         intention: summaryRaw
-          ? pilotExpressedField(summaryRaw.slice(0, 500), editKey)
+          ? pilotUiEditField(summaryRaw.slice(0, 500), editKey)
           : (prev?.intention ?? null),
         desiredOutcome: prev?.desiredOutcome ?? null,
         initialScope: prev?.initialScope ?? null,
@@ -147,17 +149,14 @@ export async function applyPilotApercuCorrection(input: {
         suggestion: prev?.suggestion
           ? {
               ...prev.suggestion,
-              explanation:
-                prev.suggestion.explanation ||
-                "Aperçu ajusté par le Pilote — la création utilisera le nom inspecté.",
+              explanation: [
+                prev.suggestion.explanation?.trim(),
+                "Aperçu ajusté explicitement par le Pilote (inspection UI) — la création utilisera le nom inspecté.",
+              ]
+                .filter(Boolean)
+                .join(" "),
             }
-          : {
-              assessment: nameRaw ? "PROPOSAL" : "EXPLORING",
-              explanation: nameRaw
-                ? "Aperçu ajusté explicitement par le Pilote."
-                : "Correction Pilote sans nom — clarification requise avant création.",
-              sourceTurnKey: editKey,
-            },
+          : null,
       };

       if (!projectionMateriallyChanged(prev, draft) && nameRaw === (row.preview_name ?? "").trim()) {
```

### `tests/e2e/ml4d-sas-nora-projection.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index 7e74629d..d078c6c9 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -4,21 +4,65 @@ import {
   openNewPreparation,
   sendPrepMessage,
 } from "./helpers/g4-chat-first";
+import {
+  SAS_MATURATION_T1,
+  SAS_MATURATION_T2,
+  SAS_MATURATION_T3,
+  SAS_MATURATION_T4,
+} from "../../src/domains/conversation/fixture-semantic-qualify";

-async function loginPilotA(page: import("@playwright/test").Page) {
+async function loginPilot(
+  page: import("@playwright/test").Page,
+  which: "a" | "b" = "a",
+) {
   await page.goto("/login");
-  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page
+    .getByRole("button", { name: which === "a" ? "Pilote A (DEV)" : "Pilote B (DEV)" })
+    .click();
   await page.waitForURL("**/portfolio");
 }

-test.describe("ML4D Sas Nora — corrective convergence", () => {
-  test.beforeEach(async ({ page }) => {
-    await loginPilotA(page);
+/**
+ * Uniquify inspected name via PATCH (Gap A contract) then create — no UI adjust form.
+ * Isolates same-pilot name CONFLICT across e2e DB pollution.
+ */
+async function uniquifyInspectedNameThenCreate(
+  page: import("@playwright/test").Page,
+  uniqueName: string,
+): Promise<string> {
+  const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
+  expect(prepId).toBeTruthy();
+  const getRes = await page.request.get(`/api/preparations/${prepId}`);
+  expect(getRes.ok()).toBeTruthy();
+  const before = (await getRes.json()) as {
+    preparation: { creationRevision: number; previewSummary: string };
+  };
+  const patchRes = await page.request.patch(`/api/preparations/${prepId}`, {
+    data: {
+      previewName: uniqueName,
+      previewSummary: before.preparation.previewSummary || "aperçu inspecté",
+      expectedCreationRevision: before.preparation.creationRevision,
+    },
   });
+  expect(patchRes.status()).toBe(200);
+  const patched = (await patchRes.json()) as { creationRevision?: number };
+  expect(typeof patched.creationRevision).toBe("number");
+  await page.reload();
+  await expect(page.getByTestId("prep-field-name")).toContainText(uniqueName, { timeout: 15000 });
+  await expect(page.getByTestId("prep-create-project")).toBeEnabled();
+  await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
+  await page.getByTestId("prep-create-project").click();
+  await page.waitForURL("**/projects/**", { timeout: 30000 });
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  expect(projectId).toBeTruthy();
+  return projectId!;
+}

+test.describe("ML4D Sas Nora — corrective convergence", () => {
   test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
     page,
   }) => {
+    await loginPilot(page, "a");
     await openNewPreparation(page);
     await expect(page.getByTestId("prep-proposal")).toBeVisible();
     await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);
@@ -35,7 +79,8 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
   });

-  test("AF primary path: create without constitute/adjust clicks", async ({ page }) => {
+  test("AF primary path: create without constitute/adjust UI clicks", async ({ page }) => {
+    await loginPilot(page, "b");
     await openNewPreparation(page);
     await sendPrepMessage(
       page,
@@ -43,18 +88,18 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     );
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-create-project")).toBeEnabled();
-    // Discriminant: never open adjust / constitute.
     await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
-    await page.getByTestId("prep-create-project").click();
-    await page.waitForURL("**/projects/**", { timeout: 20000 });
-    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
-    expect(projectId).toBeTruthy();
+    const unique = `Cockpit B-${Date.now()}`;
+    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
     await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
+    // Project shell may show truncated title; URL + continuity are the durable proofs.
+    await expect(page.getByTestId("studio-rail")).toBeVisible();
   });

   test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
+    await loginPilot(page, "a");
     await openNewPreparation(page);
     await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
     const projectId = await constituteAndCreateProject(page, {
@@ -66,10 +111,56 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
   });

   test("AF negation: « pas suffisante » does not show Base suffisante", async ({ page }) => {
+    await loginPilot(page, "a");
     await openNewPreparation(page);
     await sendPrepMessage(page, "Cette base n'est pas suffisante pour démarrer.");
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
     await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
   });
+
+  test("AF multi-turn maturation: vague → outcome → scope → rename → create", async ({ page }) => {
+    test.setTimeout(240_000);
+    await loginPilot(page, "b");
+    await openNewPreparation(page);
+
+    // T1 — vague intention: no invented name as fact, exploring
+    await sendPrepMessage(page, SAS_MATURATION_T1);
+    await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
+    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
+    await expect(page.getByTestId("prep-create-project")).toBeDisabled();
+    await expect(page).toHaveURL(/\/preparations\//);
+
+    // T2 — desired outcome appears; still clarifying
+    await sendPrepMessage(page, SAS_MATURATION_T2);
+    await expect(page.getByTestId("prep-field-intention")).toContainText(/décisions importantes/i, {
+      timeout: 30000,
+    });
+    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
+    await expect(page).toHaveURL(/\/preparations\//);
+
+    // T3 — scope + proposed name; Nora may recommend starting
+    await sendPrepMessage(page, SAS_MATURATION_T3);
+    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
+    await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
+    await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
+    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
+    await expect(page).toHaveURL(/\/preparations\//);
+
+    // T4 — rename via conversation; old name must not remain current
+    await sendPrepMessage(page, SAS_MATURATION_T4);
+    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets", {
+      timeout: 30000,
+    });
+    await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
+    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
+
+    // T5 — uniquify via PATCH (Gap A) then create; no UI adjust form
+    const unique = `Cockpit projets MT-${Date.now()}`;
+    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
+    await page.reload();
+    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
+    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId("studio-rail")).toBeVisible();
+  });
 });
```

### `tests/integration/create-project.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index c46d8a64..76f29f27 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -1,7 +1,14 @@
-import { beforeAll, describe, expect, it } from "vitest";
+import { beforeAll, describe, expect, it, vi } from "vitest";
 import { config } from "dotenv";
 config({ path: ".env.local" });

+// Force DEV fixture before conversation/nora modules evaluate lane (operator .env may be RECETTE).
+vi.hoisted(() => {
+  process.env.STUDIO_LANE = "DEV";
+  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+  delete process.env.OPENAI_API_KEY;
+});
+
 import { eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
@@ -27,6 +34,9 @@ describe("PostgreSQL create-project contracts", () => {
   beforeAll(() => {
     if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
     // Integration suite must stay on deterministic Nora fixture — LIVE costs/proofs are separate.
+    // Operator .env.local may set STUDIO_LANE=RECETTE + OPENAI_API_KEY; force DEV fixture lane.
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
     delete process.env.OPENAI_API_KEY;
   });

@@ -242,6 +252,7 @@ describe("PostgreSQL create-project contracts", () => {
     const afterEdit = await getPreparationContext(pilotId, prep.id);
     expect(afterEdit.projection?.name?.value).toBe("Cockpit projets v2");
     expect(afterEdit.projection?.name?.status).toBe("PILOT_EXPRESSED");
+    expect(afterEdit.projection?.name?.source.kind).toBe("PILOT_UI_EDIT");
     expect(afterEdit.preparation.previewName).toBe("Cockpit projets v2");
     const created = await createProjectCommand({
       pilotId,
@@ -260,6 +271,65 @@ describe("PostgreSQL create-project contracts", () => {
     }
   });

+  it("GapC multi-turn: vague → outcome → scope → rename → create (fixture path)", async () => {
+    const {
+      SAS_MATURATION_T1,
+      SAS_MATURATION_T2,
+      SAS_MATURATION_T3,
+      SAS_MATURATION_T4,
+    } = await import("@/domains/conversation/fixture-semantic-qualify");
+    const pilotId = await seedPilot("Maturation");
+    const prep = await openOrCreatePreparation(pilotId);
+
+    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T1);
+    let ctx = await getPreparationContext(pilotId, prep.id);
+    expect(ctx.projection).toBeTruthy();
+    expect(ctx.projection?.name ?? null).toBeNull();
+    expect(ctx.projection?.desiredOutcome ?? null).toBeNull();
+    expect(ctx.projection?.suggestion?.assessment).toBe("EXPLORING");
+    expect(ctx.projectId ?? null).toBeNull();
+    const rev1 = ctx.preparation.creationRevision;
+
+    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T2);
+    ctx = await getPreparationContext(pilotId, prep.id);
+    expect(ctx.projection?.desiredOutcome?.value).toMatch(/décisions importantes/i);
+    expect(ctx.projection?.initialScope ?? null).toBeNull();
+    expect(ctx.projection?.suggestion?.assessment).toBe("CLARIFYING");
+    expect(ctx.preparation.creationRevision).toBeGreaterThan(rev1);
+    expect(ctx.projectId ?? null).toBeNull();
+
+    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T3);
+    ctx = await getPreparationContext(pilotId, prep.id);
+    expect(ctx.projection?.name?.value).toBe("Assistant de pilotage");
+    expect(ctx.projection?.initialScope?.value).toMatch(/Espace personnel/i);
+    expect(ctx.projection?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
+    expect(ctx.projectId ?? null).toBeNull();
+
+    await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T4);
+    ctx = await getPreparationContext(pilotId, prep.id);
+    expect(ctx.projection?.name?.value).toBe("Cockpit projets");
+    expect(ctx.projection?.name?.value).not.toBe("Assistant de pilotage");
+    expect(ctx.projectId ?? null).toBeNull();
+
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: ctx.preparation.creationRevision,
+      projectName: ctx.projection!.name!.value,
+      previewSummary: ctx.preparation.previewSummary,
+      idempotencyKey: newId("idem"),
+    });
+    expect(created.status).toBe("CREATED");
+    if (created.status === "CREATED") {
+      const proj = (
+        await db.select().from(projects).where(eq(projects.id, created.projectId))
+      )[0];
+      expect(proj?.name).toBe("Cockpit projets");
+      const msgs = await listMessages(pilotId, prep.id);
+      expect(msgs.length).toBeGreaterThanOrEqual(8); // 4 user + 4 nora
+    }
+  });
+
   /**
    * Morris 2026-11-16 — same-pilot name uniqueness (app-level).
    * Diverges from design-only PF-CRE-14 (two same-name projects). Normative R2 not rewritten here.
```

### `tests/integration/intent-continuity-global.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 6c42efc7..bcd73e47 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -868,15 +868,17 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const prepAfter = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     expect(prepAfter.status).not.toBe("ATTACHED");

+    // Inspected name may diverge from the original Nora proposal (Pilot/Nora correction).
+    // Binding remains AUTHORIZED; create uses the inspected name.
     const nameAuth = await authorizeMissionBoundD2Create({
       pilotId,
       preparationId,
       clientIntentKey: keyA,
       projectName: "Wrong Name Entirely",
     });
-    expect(nameAuth.outcome).toBe("FORBIDDEN");
-    if (nameAuth.outcome === "FORBIDDEN") {
-      expect(["MISSION_NAME_MISMATCH", "MISSION_KEY_MISMATCH"]).toContain(nameAuth.code);
+    expect(nameAuth.outcome).toBe("AUTHORIZED");
+    if (nameAuth.outcome === "AUTHORIZED") {
+      expect(nameAuth.mission.proposedProjectName).toBe("Wrong Name Entirely");
     }
     expect(
       (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]?.status,
```

### `tests/integration/preparation-patch.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
new file mode 100644
index 00000000..4003155d
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
@@ -0,0 +1,219 @@
+/**
+ * Gap A — PATCH /api/preparations/{id} CAS + HTTP classification (PG REAL).
+ */
+import { beforeAll, describe, expect, it, vi } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+/**
+ * COOKIE name in session.ts is frozen at module import — force DEV before any session import.
+ */
+const devSessionRef = vi.hoisted(() => {
+  process.env.STUDIO_LANE = "DEV";
+  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+  process.env.STUDIO_DEV_TEST_LOGIN = "1";
+  delete process.env.OPENAI_API_KEY;
+  return { token: "" };
+});
+
+vi.mock("next/headers", () => ({
+  cookies: async () => ({
+    get: (name: string) => {
+      const token = devSessionRef.token;
+      if (!token) return undefined;
+      // Must match session.ts studioSessionCookieName() at import time (DEV).
+      if (name !== "sfia_studio_session__DEV") return undefined;
+      return { name, value: token };
+    },
+  }),
+  headers: async () => new Headers(),
+}));
+
+import { PATCH } from "@/app/api/preparations/[preparationId]/route";
+import { createDevTestSession } from "@/domains/identity/session";
+import { db } from "@/db/client";
+import { pilots, preparations } from "@/db/schema";
+import { eq } from "drizzle-orm";
+import { newId } from "@/lib/ids";
+import {
+  applyPilotApercuCorrection,
+  getPreparationContext,
+  openOrCreatePreparation,
+  updatePreview,
+} from "@/domains/preparation/service";
+
+async function seedPilot(label: string) {
+  const id = newId("pilot");
+  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
+  return id;
+}
+
+async function bindDevSession(which: "a" | "b") {
+  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
+  devSessionRef.token = sess.token;
+  return sess;
+}
+
+async function patchHttp(
+  preparationId: string,
+  body: unknown,
+): Promise<{ status: number; body: Record<string, unknown> }> {
+  const res = await PATCH(
+    new Request(`http://127.0.0.1:3100/api/preparations/${preparationId}`, {
+      method: "PATCH",
+      headers: { "Content-Type": "application/json" },
+      body: JSON.stringify(body),
+    }),
+    { params: Promise.resolve({ preparationId }) },
+  );
+  let parsed: Record<string, unknown> = {};
+  try {
+    parsed = (await res.json()) as Record<string, unknown>;
+  } catch {
+    parsed = {};
+  }
+  return { status: res.status, body: parsed };
+}
+
+describe("PG REAL — preparation PATCH contract", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+    delete process.env.OPENAI_API_KEY;
+  });
+
+  it("PATCH 200: returns confirmed revision + projection + preparation", async () => {
+    const sess = await bindDevSession("a");
+    const prep = await openOrCreatePreparation(sess.pilotId);
+    const before = await getPreparationContext(sess.pilotId, prep.id);
+    const res = await patchHttp(prep.id, {
+      previewName: "Cockpit inspecté",
+      previewSummary: "Intention corrigée",
+      expectedCreationRevision: before.preparation.creationRevision,
+    });
+    expect(res.status).toBe(200);
+    expect(res.body.creationRevision).toBe(before.preparation.creationRevision + 1);
+    expect((res.body.preparation as { previewName: string }).previewName).toBe("Cockpit inspecté");
+    const proj = res.body.projection as {
+      name: { value: string; status: string; source: { kind: string } };
+    };
+    expect(proj.name.value).toBe("Cockpit inspecté");
+    expect(proj.name.status).toBe("PILOT_EXPRESSED");
+    expect(proj.name.source.kind).toBe("PILOT_UI_EDIT");
+  });
+
+  it("PATCH 400 when expectedCreationRevision missing", async () => {
+    const sess = await bindDevSession("a");
+    const prep = await openOrCreatePreparation(sess.pilotId);
+    const res = await patchHttp(prep.id, {
+      previewName: "X",
+      previewSummary: "Y",
+    });
+    expect(res.status).toBe(400);
+    expect(res.body.error).toBe("INVALID_REQUEST");
+    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
+    expect(row.previewName).toBe("");
+  });
+
+  it("PATCH 409: second client with stale revision does not overwrite first", async () => {
+    const sess = await bindDevSession("a");
+    const prep = await openOrCreatePreparation(sess.pilotId);
+    const rev0 = (await getPreparationContext(sess.pilotId, prep.id)).preparation.creationRevision;
+
+    const first = await patchHttp(prep.id, {
+      previewName: "Premier gagnant",
+      previewSummary: "a",
+      expectedCreationRevision: rev0,
+    });
+    expect(first.status).toBe(200);
+    expect(first.body.creationRevision).toBe(rev0 + 1);
+
+    const second = await patchHttp(prep.id, {
+      previewName: "Deuxième perdant",
+      previewSummary: "b",
+      expectedCreationRevision: rev0,
+    });
+    expect(second.status).toBe(409);
+    expect(second.body.error).toBe("CONFLICT");
+    expect(second.body.actualCreationRevision).toBe(rev0 + 1);
+
+    const after = await getPreparationContext(sess.pilotId, prep.id);
+    expect(after.preparation.previewName).toBe("Premier gagnant");
+    expect(after.projection?.name?.value).toBe("Premier gagnant");
+    expect(after.preparation.creationRevision).toBe(rev0 + 1);
+  });
+
+  it("PATCH 404 for foreign preparation (non-disclosure)", async () => {
+    const owner = await seedPilot("PatchOwner");
+    const prep = await openOrCreatePreparation(owner);
+    await bindDevSession("a"); // different pilot session
+    const res = await patchHttp(prep.id, {
+      previewName: "Intrusion",
+      previewSummary: "x",
+      expectedCreationRevision: 1,
+    });
+    expect(res.status).toBe(404);
+    expect(res.body.error).toBe("NOT_FOUND");
+    const row = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
+    expect(row.previewName).toBe("");
+  });
+
+  it("service CAS: concurrent same revision → one APPLIED one CONFLICT", async () => {
+    const pilotId = await seedPilot("PatchRace");
+    const prep = await openOrCreatePreparation(pilotId);
+    const rev = (await getPreparationContext(pilotId, prep.id)).preparation.creationRevision;
+    const [a, b] = await Promise.all([
+      applyPilotApercuCorrection({
+        pilotId,
+        preparationId: prep.id,
+        previewName: "Race A",
+        previewSummary: "a",
+        expectedCreationRevision: rev,
+      }),
+      applyPilotApercuCorrection({
+        pilotId,
+        preparationId: prep.id,
+        previewName: "Race B",
+        previewSummary: "b",
+        expectedCreationRevision: rev,
+      }),
+    ]);
+    const statuses = [a.status, b.status].sort();
+    expect(statuses).toEqual(["APPLIED", "CONFLICT"]);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    expect(["Race A", "Race B"]).toContain(ctx.preparation.previewName);
+    expect(ctx.preparation.creationRevision).toBe(rev + 1);
+  });
+
+  it("create after PATCH uses inspected name", async () => {
+    const sess = await bindDevSession("a");
+    const prep = await openOrCreatePreparation(sess.pilotId);
+    const uniqueName = `Nom inspecté ${newId("n")}`;
+    await updatePreview(sess.pilotId, prep.id, "Ancien", "s");
+    const mid = await getPreparationContext(sess.pilotId, prep.id);
+    const patched = await patchHttp(prep.id, {
+      previewName: uniqueName,
+      previewSummary: mid.preparation.previewSummary,
+      expectedCreationRevision: mid.preparation.creationRevision,
+    });
+    expect(patched.status).toBe(200);
+    const fresh = await getPreparationContext(sess.pilotId, prep.id);
+    expect(fresh.projection?.name?.value).toBe(uniqueName);
+    const { createProjectCommand } = await import("@/domains/preparation/create-project");
+    const created = await createProjectCommand({
+      pilotId: sess.pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: fresh.preparation.creationRevision,
+      projectName: fresh.projection!.name!.value,
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(created.status).toBe("CREATED");
+    if (created.status === "CREATED") {
+      const { projects } = await import("@/db/schema");
+      const proj = (await db.select().from(projects).where(eq(projects.id, created.projectId)))[0];
+      expect(proj?.name).toBe(uniqueName);
+    }
+  });
+});
```

### `tests/unit/preparation-projection.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
index e7473f18..b7853da1 100644
--- a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
@@ -7,12 +7,13 @@ import {
   namesConflictForSamePilot,
   normalizeProjectNameKey,
   pilotExpressedField,
+  pilotUiEditField,
   previewFieldsFromProjection,
   projectionMateriallyChanged,
   type PreparationProjection,
 } from "@/domains/preparation/projection";

-describe("preparation projection helpers (corrective)", () => {
+describe("preparation projection helpers (final corrective)", () => {
   it("normalizes name keys (trim, spaces, case) while preserving accents", () => {
     expect(normalizeProjectNameKey("  Atlas   Pilot  ")).toBe("atlas pilot");
     expect(normalizeProjectNameKey("École")).toBe("école");
@@ -36,7 +37,25 @@ describe("preparation projection helpers (corrective)", () => {
     expect(clarifying?.suggestion?.assessment).not.toBe("BASE_SUFFICIENTE");
   });

-  it("fills desiredOutcome and initialScope from structured qualification", () => {
+  it("does not fabricate Nora assessment from name/intention presence alone", () => {
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-no-assess",
+      qualificationStatus: "QUALIFIED",
+      goal: "Cockpit de suivi",
+      desiredOutcome: "Voir portefeuille",
+      initialScope: "Portefeuille",
+      clarifications: [],
+      proposedProjectName: "Cockpit projets",
+      // no preparationAssessment
+    });
+    expect(draft?.name?.value).toBe("Cockpit projets");
+    expect(draft?.suggestion).toBeNull();
+    // D2 eligibility can still be true without Nora advice.
+    expect(canCreateFromProjection(draft as PreparationProjection, "")).toBe(true);
+  });
+
+  it("attributes BASE_SUFFICIENTE only from structured assessment", () => {
     const draft = draftProjectionFromQualification({
       preparationId: "prep-1",
       turnKey: "t-rich",
@@ -52,6 +71,7 @@ describe("preparation projection helpers (corrective)", () => {
     expect(draft?.desiredOutcome?.value).toBe("Voir portefeuille et risques");
     expect(draft?.initialScope?.value).toBe("Portefeuille et risques");
     expect(draft?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
+    expect(draft?.suggestion?.explanation).toContain("Base raisonnable");
   });

   it("preserves pilot-expressed name against Nora re-proposal", () => {
@@ -59,17 +79,17 @@ describe("preparation projection helpers (corrective)", () => {
       schemaVersion: 1,
       preparationId: "prep-1",
       revision: 2,
-      updatedFromTurnKey: "pilot-edit",
+      updatedFromTurnKey: "pilot-ui-edit",
       observedAt: "2026-11-16T10:00:00.000Z",
-      name: pilotExpressedField("Cockpit projets", "pilot-edit"),
-      intention: pilotExpressedField("Suivi projets", "pilot-edit"),
+      name: pilotUiEditField("Cockpit projets", "pilot-ui-edit"),
+      intention: pilotExpressedField("Suivi projets", "pilot-turn"),
       desiredOutcome: null,
       initialScope: null,
       openQuestions: [],
       suggestion: {
         assessment: "PROPOSAL",
         explanation: "corrigé",
-        sourceTurnKey: "pilot-edit",
+        sourceTurnKey: "pilot-ui-edit",
       },
     };
     const noraDraft = draftProjectionFromQualification({
@@ -84,6 +104,7 @@ describe("preparation projection helpers (corrective)", () => {
     const merged = mergeNoraDraftWithPrior(prior, noraDraft);
     expect(merged.name?.value).toBe("Cockpit projets");
     expect(merged.name?.status).toBe("PILOT_EXPRESSED");
+    expect(merged.name?.source.kind).toBe("PILOT_UI_EDIT");
   });

   it("refuses inventing Projet sans titre", () => {
@@ -102,6 +123,8 @@ describe("preparation projection helpers (corrective)", () => {
       goal: "Intention A",
       clarifications: [],
       proposedProjectName: "Nom A",
+      preparationAssessment: "PROPOSAL",
+      preparationAssessmentExplanation: "Proposition de travail.",
     })!;
     const prev: PreparationProjection = {
       ...draft,
```

### `tests/unit/nora-sas-maturation-instructions.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
new file mode 100644
index 00000000..d45f24b6
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
@@ -0,0 +1,29 @@
+import { readFileSync } from "node:fs";
+import { join } from "node:path";
+import { describe, expect, it } from "vitest";
+
+/**
+ * Structural proof: LIVE agent instructions include sas maturation duties
+ * in the same qualification turn (no second prompt). Does not prove LIVE cognition.
+ */
+describe("Nora LIVE instructions — sas maturation (structural)", () => {
+  const src = readFileSync(
+    join(__dirname, "../../src/domains/conversation/nora-adapter.ts"),
+    "utf8",
+  );
+
+  it("embeds maturation responsibilities in QUALIFICATION_INSTRUCTIONS", () => {
+    expect(src).toContain("MATURATION DU SAS");
+    expect(src).toContain("Comprendre l'intention libre");
+    expect(src).toContain("Reformuler fidèlement");
+    expect(src).toContain("desiredOutcome / initialScope");
+    expect(src).toContain("Respecter négations et corrections");
+    expect(src).toContain("preparationAssessment");
+    expect(src).toContain("Ne jamais déduire une décision humaine");
+    expect(src).toContain("omets preparationAssessment");
+    // Single agent / single outputType — no second LLM for aperçu.
+    expect(src).toContain("outputType: NoraTurnQualificationSchema");
+    const maturationBlocks = src.split("MATURATION DU SAS").length - 1;
+    expect(maturationBlocks).toBe(1);
+  });
+});
```

### `tests/helpers/semantic-fixture-envelopes.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
index 3de2eb1b..5589e302 100644
--- a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
+++ b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
@@ -65,6 +65,7 @@ export function dialogueEnvelope(
     goal,
     desiredOutcome: "",
     initialScope: "",
+    proposedProjectName: "",
     intents: normalizeIntents([
       {
         capabilityId: "d3.converse",
@@ -85,6 +86,7 @@ export function clarificationEnvelope(goal: string, clarifications: string[], re
     goal,
     desiredOutcome: "",
     initialScope: "",
+    proposedProjectName: "",
     intents: [],
     clarifications,
     replyDraft: reply,
@@ -102,6 +104,7 @@ export function effectEnvelope(
     goal,
     desiredOutcome: "",
     initialScope: "",
+    proposedProjectName: "",
     intents: normalizeIntents(intents),
     clarifications: [],
     replyDraft: reply,
```

### `construction/as-built-ml4d-sas-nora-convergence-20261116.md`

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
index c1f46c92..bcab3836 100644
--- a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
@@ -1,54 +1,54 @@
-# As-built — ML4D Sas Nora convergence + corrective (2026-11-16)
+# As-built — ML4D Sas Nora convergence + correctifs (2026-11-16)

 | Champ | Valeur |
 | --- | --- |
-| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctif |
+| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctifs |
 | Type | EVOL / MINOR candidate · **NO RELEASE** |
 | Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
-| Candidat Sas initial | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
+| Candidat Sas | `596718b1` → correctif `1dfc79ff` → **correctif final (ce cycle)** |
 | Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
 | Contrats | docs@`22ee5540` (fonctionnel + technique) |
 | Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
 | Lane | DEV only — RECETTE inchangée |
-| Build DEV (correctif) | `9uKvoZLw0AsjIFm46-eAC` @ `127.0.0.1:3102` |
+| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `127.0.0.1:3102` |
 | RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

 ## Architecture

-1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `preparationAssessment*`).
+1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
 2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
-3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED`.
-4. `updatePreview` / PATCH = `applyPilotApercuCorrection` (preview + projection, même révision).
-5. Création : `createProjectCommand` + verrou advisory pilote `sfia:d2:project-name` puis clé d’idempotence ; comparaison JS unique (`normalizeProjectNameKey` / `namesConflictForSamePilot`).
-6. UI : conversation + aperçu ; outils Journal/Documents en secondaire (`<details>`).
+3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
+4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; HTTP 409/400/401/404/503 classifiés (jamais conflit/DB → SESSION_INVALID).
+5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique name+intention → BASE_SUFFICIENTE).
+6. Création : `createProjectCommand` + verrou pilote ; nom inspecté après correction accepté sur mission awaiting.
+7. UI : conversation + aperçu ; Journal/Documents secondaires.

-## Quatre écarts corrigés
+## Écarts de ce correctif final

-| Écart | Cause | Correction |
+| Écart | Constat | Correction |
 | --- | --- | --- |
-| A Unicité concurrente | Verrou seulement sur idempotencyKey | Advisory lock pilote avant check ; comparaison JS (pas SQL `lower`) |
-| B Correction Pilote | PATCH preview sans projection | `applyPilotApercuCorrection` ; create via `inspectedCreatePayload` (pas « Projet sans titre ») |
-| C Maturation Nora | Regex « suffisant » ; outcome/scope null ; projection avant commit | Champs structurés ; assessment typé ; persist post-commit |
-| D UI sas | Onglets Discussion/Journal/Documents permanents | Outils secondaires ; pas de chrome projet avant création |
+| A PATCH | CAS partiel ; erreurs → 401 | `expectedCreationRevision` requis ; 200 cohérent ; 409/400/404/503 |
+| B Qualification | Heuristique fabriquait l’appréciation | Assessment seulement si structuré ; instructions LIVE maturation ; `proposedProjectName` |
+| C Multi-tours | E2E mono-message riche | Fixtures T1–T4 + PG GapC + e2e multi-tours |

 ## Contradiction PF-CRE-14

-Orientation Morris (unicité / Pilote) vs PF-CRE-14 (homonymes autorisés). Implémentation locale app-level. **R2 non réécrit.** Gate Morris D2 ouvert.
+Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate Morris ouvert.

 ## Migration 013

-`projection_json` jsonb additive — présente dans le candidat. Ce GO ne promeut pas RECETTE. Gate migration explicite avant mise à disposition RECETTE. Rollback logique = revert code ; `DROP COLUMN` perd les projections enregistrées.
+Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migration 014.

 ## Preuves

 | Niveau | Résultat |
 | --- | --- |
-| UNIT projection / rail | PASS |
-| PG REAL (21) dont GapA concurrent + GapB correction | PASS |
-| BROWSER FAKE sas corrective (4) | PASS (parcours sans formulaire + négation) |
-| UX-003/004 | voir Review Pack |
+| UNIT projection + instructions LIVE structurelles | PASS |
+| PG REAL create-project + PATCH | PASS |
+| BROWSER FAKE sas (dont multi-tours) | voir Review Pack |
+| UX-003/004 | PASS (cycle) |
 | NORA LIVE | **NOT PROVEN** |

 ## Rollback

-Revert commit correctif (+ candidat Sas si besoin). Aucune migration destructive ajoutée dans ce correctif.
+Revert commit(s) correctifs. Aucune migration destructive.
```

### `construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 69114eb2..ba05ace5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,22 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE-CORRECTED
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~12:40 CET (Europe/Paris) |
+| Macro-lot | ML4D — Sas Nora correctif final (PATCH API / qualification / multi-tours) |
+| Type | EVOL / MINOR candidate · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
+| Parent tip | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
+| Changes | PATCH CAS+HTTP ; assessment sans heuristique ; proposedProjectName ; multi-tours T1–T5 ; mission name binding accepte nom inspecté |
+| Schema | aucune nouvelle migration (013 inchangée) |
+| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; gate 013 avant RECETTE |
+| Lanes | DEV `:3102` BUILD `4uaTx97JzcebLhzIfr8h-` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CORRECTIVE

 | Field | Value |
```


---

## 10–12. PATCH HTTP

| Code | Cas |
| --- | --- |
| 200 | creationRevision + projection + preparation cohérents |
| 400 | expectedCreationRevision manquant / types |
| 401 | SESSION_INVALID seulement |
| 404 | prep étrangère |
| 409 | CAS + actualCreationRevision |
| 503 | UNAVAILABLE |

Provenance: `PILOT_UI_EDIT`.

---

## 13–16. Qualification / multi-tours / tests

- Assessment **uniquement** si `preparationAssessment` fourni (voir diff `projection.ts`).
- UNIT négation + no-fabrication PASS.
- PG GapC + PATCH 6 PASS.
- E2E sas 5 PASS (dont multi-tours).
- NORA LIVE **NOT PROVEN** (instructions structurelles UNIT seulement).

---

## 17–22. Preuves / SHA / RECETTE / gates

| Artefact | Valeur |
| --- | --- |
| SHA | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
| Tree web | `c97e0be1bd91eb736d3a478f8fa29ea5f2f1e3f7` |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` |
| RECETTE | inchangée |
| Migration 013 | gate ouvert |
| PF-CRE-14 | ouvert |

---

## 23–25. Verdict

`READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED`

Cette republication corrige `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` en exposant **les 19 diffs** + instructions Nora + fixtures multi-tours + fichiers nouveaux intégraux.

Gates Morris: ChatGPT ; 013 ; PF-CRE-14 ; LIVE ; RECETTE ; UI.

---

## Annexe as-built

# As-built — ML4D Sas Nora convergence + correctifs (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctifs |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas | `596718b1` → correctif `1dfc79ff` → **correctif final (ce cycle)** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
| Lane | DEV only — RECETTE inchangée |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `127.0.0.1:3102` |
| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

## Architecture

1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; HTTP 409/400/401/404/503 classifiés (jamais conflit/DB → SESSION_INVALID).
5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique name+intention → BASE_SUFFICIENTE).
6. Création : `createProjectCommand` + verrou pilote ; nom inspecté après correction accepté sur mission awaiting.
7. UI : conversation + aperçu ; Journal/Documents secondaires.

## Écarts de ce correctif final

| Écart | Constat | Correction |
| --- | --- | --- |
| A PATCH | CAS partiel ; erreurs → 401 | `expectedCreationRevision` requis ; 200 cohérent ; 409/400/404/503 |
| B Qualification | Heuristique fabriquait l’appréciation | Assessment seulement si structuré ; instructions LIVE maturation ; `proposedProjectName` |
| C Multi-tours | E2E mono-message riche | Fixtures T1–T4 + PG GapC + e2e multi-tours |

## Contradiction PF-CRE-14

Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate Morris ouvert.

## Migration 013

Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migration 014.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT projection + instructions LIVE structurelles | PASS |
| PG REAL create-project + PATCH | PASS |
| BROWSER FAKE sas (dont multi-tours) | voir Review Pack |
| UX-003/004 | PASS (cycle) |
| NORA LIVE | **NOT PROVEN** |

## Rollback

Revert commit(s) correctifs. Aucune migration destructive.


---

## Instruction ChatGPT

Relire le handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` **intégralement**, y compris section 9 (19 diffs) et section 8bis (instructions maturation).
