# SFIA Review Pack — FULL — ML4D Sas Nora Convergence Corrected

**Date:** 2026-11-16
**Cycle:** 8 — Delivery / implémentation · CRITICAL · EVOL
**CKC:** absent → fallback **SFIA v2.6**
**Verdict Cursor:** `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED`

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
| Tree web | `c97e0be1bd91eb736d3a478f8fa29ea5f2f1e3f7` |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `:3102` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| RECETTE | `b05dacf4` / `20blGylSEta7201PgVvlw` @ `:3200` **inchangée** |
| Push produit | **AUCUN** |
| Status final | clean produit (pack local `.tmp` seulement) |

### Diffstat `1dfc79ff..HEAD`

```
 .../as-built-ml4d-sas-nora-convergence-20261116.md |  44 ++---
 .../construction/delivery-history.md               |  16 ++
 .../app/api/preparations/[preparationId]/route.ts  |  83 ++++++--
 .../src/app/preparations/[preparationId]/page.tsx  |  36 +++-
 .../src/components/figma/PreparationProposal.tsx   |  10 +-
 .../conversation/fixture-semantic-qualify.ts       | 128 ++++++++++--
 .../src/domains/conversation/intent-conduction.ts  |   8 +-
 .../web/src/domains/conversation/nora-adapter.ts   |  18 +-
 .../domains/conversation/semantic-qualification.ts |  12 +-
 .../web/src/domains/conversation/service.ts        |   7 +-
 .../web/src/domains/preparation/projection.ts      |  66 +++----
 .../web/src/domains/preparation/service.ts         |  27 ++-
 .../web/tests/e2e/ml4d-sas-nora-projection.spec.ts | 113 +++++++++--
 .../tests/helpers/semantic-fixture-envelopes.ts    |   3 +
 .../tests/integration/create-project.pg.test.ts    |  72 ++++++-
 .../intent-continuity-global.pg.test.ts            |   8 +-
 .../tests/integration/preparation-patch.pg.test.ts | 219 +++++++++++++++++++++
 .../unit/nora-sas-maturation-instructions.test.ts  |  29 +++
 .../web/tests/unit/preparation-projection.test.ts  |  35 +++-
 19 files changed, 792 insertions(+), 142 deletions(-)

```

---

## 3–4. Sources, contrats, Figma

- SFIA v2.6 routing Next §4.3.0b / Fake-Real §6.16 / Pack §7 / Handoff §7.10–7.11
- Contrats docs@`22ee5540`
- Figma `itgvCulInEnFY6DvgIegvP` frames 607:3…277 — **non modifié**
- Handoff précédent tip `39c74851` / blob `f621c883`

---

## 5. Écarts constatés (matrice)

| Écart | CONSTATÉ | Correction |
| --- | --- | --- |
| A PATCH | CAS optionnel ; catch → SESSION_INVALID | `expectedCreationRevision` requis ; 200/409/400/404/503 |
| B Qualification | Heuristique name+intention → BASE_SUFFICIENTE | Assessment seulement si structuré ; instructions maturation ; `proposedProjectName` |
| C Multi-tours | E2E mono-message déjà riche | Fixtures T1–T4 + PG GapC + e2e multi-tours |

---

## 6. Blast radius

API PATCH, projection D2, semantic qualification D3, intent-conduction (name binding), UI page/proposal, fixtures/tests. Pas de migration. Pas de createProjectCommand rewrite hors binding nom inspecté.

---

## 7. Choix techniques

1. **PATCH:** require revision ; `studioErrorResponse` ; FORBIDDEN→404 non-disclosure ; UNAVAILABLE→503.
2. **Assessment:** no heuristic fabrication ; suggestion null si absent.
3. **proposedProjectName** on envelope for rename without second REQUEST_EFFECT (S05).
4. **Mission binding:** allow inspected name ≠ original Nora proposal on awaiting D2 act.

---

## 8. Code créé (intégral) — PATCH route

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

### Test PG PATCH (intégral)

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

---

## 9. Diffs exploitables

### route.ts

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

### projection.ts

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

### semantic-qualification.ts

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

### intent-conduction.ts (nom inspecté)

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

---

## 10–12. PATCH classification / conflit / succès

| Code | Cas |
| --- | --- |
| 200 | révision + projection + preparation cohérents |
| 400 | revision manquante / types invalides |
| 401 | SESSION_INVALID seulement |
| 404 | prep étrangère (non-disclosure) |
| 409 | CAS stale + `actualCreationRevision` |
| 503 | UNAVAILABLE DB |

Preuve PG: `PATCH 409: second client with stale revision does not overwrite first` — premier gagne, second 409, nom inchangé.

Provenance UI edit: `PILOT_UI_EDIT` (pas un faux tour conversation).

---

## 13. Instructions structurées Nora

`nora-adapter.ts` — bloc **MATURATION DU SAS** (10 points) dans le même `QUALIFICATION_INSTRUCTIONS` / même `outputType`.
UNIT structurelle: `nora-sas-maturation-instructions.test.ts` PASS.

---

## 14. Pipeline D3 → D2

qualification → `draftProjectionFromQualification` → merge prior → apply **après** COMPLETE.
Assessment/explanation uniquement si présents.
`proposedProjectName` envelope ∪ intent parameters.

---

## 15–16. Négation / assessment manquant / multi-tours

- UNIT: pas de fabrication BASE_SUFFICIENTE sans assessment.
- Fixture négation « pas suffisante » → CLARIFYING.
- GapC PG: T1 EXPLORING → T2 outcome → T3 scope+name → T4 Cockpit → create.
- E2E multi-tours: 5 PASS.

### E2E (fichier)

```typescript
import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";
import {
  SAS_MATURATION_T1,
  SAS_MATURATION_T2,
  SAS_MATURATION_T3,
  SAS_MATURATION_T4,
} from "../../src/domains/conversation/fixture-semantic-qualify";

async function loginPilot(
  page: import("@playwright/test").Page,
  which: "a" | "b" = "a",
) {
  await page.goto("/login");
  await page
    .getByRole("button", { name: which === "a" ? "Pilote A (DEV)" : "Pilote B (DEV)" })
    .click();
  await page.waitForURL("**/portfolio");
}

/**
 * Uniquify inspected name via PATCH (Gap A contract) then create — no UI adjust form.
 * Isolates same-pilot name CONFLICT across e2e DB pollution.
 */
async function uniquifyInspectedNameThenCreate(
  page: import("@playwright/test").Page,
  uniqueName: string,
): Promise<string> {
  const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(prepId).toBeTruthy();
  const getRes = await page.request.get(`/api/preparations/${prepId}`);
  expect(getRes.ok()).toBeTruthy();
  const before = (await getRes.json()) as {
    preparation: { creationRevision: number; previewSummary: string };
  };
  const patchRes = await page.request.patch(`/api/preparations/${prepId}`, {
    data: {
      previewName: uniqueName,
      previewSummary: before.preparation.previewSummary || "aperçu inspecté",
      expectedCreationRevision: before.preparation.creationRevision,
    },
  });
  expect(patchRes.status()).toBe(200);
  const patched = (await patchRes.json()) as { creationRevision?: number };
  expect(typeof patched.creationRevision).toBe("number");
  await page.reload();
  await expect(page.getByTestId("prep-field-name")).toContainText(uniqueName, { timeout: 15000 });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled();
  await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return projectId!;
}

test.describe("ML4D Sas Nora — corrective convergence", () => {
  test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
    page,
  }) => {
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await expect(page.getByTestId("prep-proposal")).toBeVisible();
    await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);
    await expect(page.getByRole("navigation", { name: "Surfaces sas" })).toHaveCount(0);
    await expect(page.getByTestId("sas-secondary-tools")).toBeVisible();

    await sendPrepMessage(
      page,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets");
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
    await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
  });

  test("AF primary path: create without constitute/adjust UI clicks", async ({ page }) => {
    await loginPilot(page, "b");
    await openNewPreparation(page);
    await sendPrepMessage(
      page,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
    const unique = `Cockpit B-${Date.now()}`;
    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    // Project shell may show truncated title; URL + continuity are the durable proofs.
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });

  test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
    const projectId = await constituteAndCreateProject(page, {
      name: `SasNoraAdjust-${Date.now()}`,
      summary: "Correction manuelle secondaire",
    });
    expect(projectId).toBeTruthy();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
  });

  test("AF negation: « pas suffisante » does not show Base suffisante", async ({ page }) => {
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await sendPrepMessage(page, "Cette base n'est pas suffisante pour démarrer.");
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
  });

  test("AF multi-turn maturation: vague → outcome → scope → rename → create", async ({ page }) => {
    test.setTimeout(240_000);
    await loginPilot(page, "b");
    await openNewPreparation(page);

    // T1 — vague intention: no invented name as fact, exploring
    await sendPrepMessage(page, SAS_MATURATION_T1);
    await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-create-project")).toBeDisabled();
    await expect(page).toHaveURL(/\/preparations\//);

    // T2 — desired outcome appears; still clarifying
    await sendPrepMessage(page, SAS_MATURATION_T2);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/décisions importantes/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page).toHaveURL(/\/preparations\//);

    // T3 — scope + proposed name; Nora may recommend starting
    await sendPrepMessage(page, SAS_MATURATION_T3);
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
    await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
    await expect(page).toHaveURL(/\/preparations\//);

    // T4 — rename via conversation; old name must not remain current
    await sendPrepMessage(page, SAS_MATURATION_T4);
    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets", {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();

    // T5 — uniquify via PATCH (Gap A) then create; no UI adjust form
    const unique = `Cockpit projets MT-${Date.now()}`;
    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });
});

```

---

## 17. Fake / Real / LIVE

| Niveau | Statut |
| --- | --- |
| UNIT | PROVEN |
| API/PG PATCH | PROVEN |
| PG create GapA/B/C | PROVEN |
| BROWSER FAKE | PROVEN (5/5 sas) |
| NORA LIVE | **NOT PROVEN** |

---

## 18. Non-régression

UX-003/004 PASS (cycle précédent + shell). GapA/GapB PG conservés. Rail secondaire inchangé.

---

## 19–22. SHA / DEV / RECETTE / 013 / PF-CRE-14

| Artefact | Valeur |
| --- | --- |
| SHA | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
| Tree web | `c97e0be1bd91eb736d3a478f8fa29ea5f2f1e3f7` |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` |
| RECETTE | inchangée `20blGylSEta7201PgVvlw` |
| Migration 013 | gate ouvert — pas de promo |
| PF-CRE-14 | contradiction ouverte |

---

## 23–25. Dette / verdict / gates Morris

Dette: LIVE ; PF-CRE-14 ; gate 013 ; recette UI Morris.

**Verdict:** `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED`

Gates restants: ChatGPT review ; 013 ; PF-CRE-14 ; LIVE ; GO RECETTE ; UI Morris ; Git promotion.

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

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant conclusion. Vérifier diffs, assertions, Fake≠LIVE.
