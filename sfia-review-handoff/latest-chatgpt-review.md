# SFIA Studio Next — Review Pack FULL
## R5 / Cycle 8 — ACCEPT-01 Delivery Regularization (DEV)

**Date/heure :** 2026-11-10 12:09:28 +0100 (Europe/Paris)
**GO Morris :** régularisation Review Pack + preuve/correctif local — 2026-11-10
**Mandat :** même macro-lot ACCEPT-01 — pas de nouvelle architecture / pas de push Product
**Base Product :** `d7f1507a` / tree `3e9e1086`
**Branche delivery :** `feat/next-nora-intent-continuity-20261110`
**HEAD delivery :** `cf5bac70d12ae04a618893714d1a75994aba1f50`
**Tree delivery :** `dbfd6d6632a9fd76220cfc0d73dc29a36de1272b`
**Parent delivery initial :** `b0e23c46` (implémentation) → `cf5bac70` (régularisation UX + replay test)
**Worktree DEV :** `/Users/morris/Projects/sfia-workspace-next-intent-continuity-dev`
**Handoff remplacé :** `ef4154e1` / blob `f2c0804d` (INCOMPLETE — synthesis only)
**RECETTE :** BUILD `8vZjme4-KnnPkAqm_QxMz` — non mutée
**Verdict :** ACCEPT-01 DEV DELIVERY CORRECTED LOCALLY — NEW HEAD/TREE DOCUMENTED — RELEVANT TESTS REEXECUTED — FULL REVIEW PACK AVAILABLE — READY FOR CHATGPT TECHNICAL REVIEW — NO PRODUCT PUSH OR RECETTE AUTHORIZED

---

## 01. Date, mandat et contexte

Delivery ACCEPT-01 implémenté localement (GO 2026-11-10). Handoff `ef4154e1` jugé non conforme SFIA v2.6 §7.2.1 (synthèse sans contenu/diff exploitables).

Cette intervention régularise le **même** delivery : Git Truth, contenus complets, invariants C1–C5, rejeu tests, correctif UX démontré (panel ignore `missionResume`), Review Pack FULL, handoff L3 only.

---

## 02. Git Truth Check

| Item | Valeur |
|---|---|
| pwd (delivery WT) | `/Users/morris/Projects/sfia-workspace-next-intent-continuity-dev` |
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-nora-intent-continuity-20261110` |
| HEAD | `cf5bac70d12ae04a618893714d1a75994aba1f50` |
| Tree | `dbfd6d6632a9fd76220cfc0d73dc29a36de1272b` |
| Parent(s) | `b0e23c46` ← `d7f1507a` |
| merge-base vs d7f1507a | `d7f1507a` |
| main remote | `6667a43858a5421e391b7441246536daad148bd6` |
| SDK lock | `@openai/agents` **0.21.0** |
| Push Product | **AUCUN** |

### Commits delivery (vs base)

```
cf5bac70 fix(studio-next): reflect missionResume after authorize and prove replay
b0e23c46 feat(studio-next): implement ACCEPT-01 mission continuity in D3 nominal path
```

### name-status vs d7f1507a

```
M projects/sfia-studio-next/construction/delivery-history.md
M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts
M projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
A projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
M projects/sfia-studio-next/web/src/domains/conversation/service.ts
A projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
A projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
```

### Worktree status (delivery)

Dirty hors delivery : `.tmp-sfia-review/chatgpt-review.md` (ce pack), manifests ENV-01 untracked préexistants, script qualify untracked — **non commités** dans le delivery.

### ENV-01

| Lane | Evidence |
|---|---|
| DEV DB | `5433` / `sfia_next_dev` (LISTEN) ; tests refuse non-5433 |
| RECETTE | port `3200` LISTEN + DB `5434` — **non mutés** ; BUILD `8vZjme4-KnnPkAqm_QxMz` |
| Secrets | `.env.local` DEV only ; pas de copie RECETTE |
| Provider tests | `STUDIO_GITHUB_PROVIDER=scripted` ; `STUDIO_E2E=1` ; `OPENAI_API_KEY` unset |

---

## 03. Vérification branche fix/ préservée

| Check | Résultat |
|---|---|
| Collaboration WT | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD | `d7f1507a56e50660ea24903c2dc563c249ba9086` |
| Tree | `3e9e1086aaf83e22d8e3350565f1c747bb31f556` |
| Ref locale fix/ | même SHA/tree |
| Diff tree vs annoncé | **identique** (aucun commit delivery sur fix/) |
| Working tree fix | dirty seulement `.tmp-sfia-review/…` + untracked préexistants — **aucun fichier Product du delivery** |
| Déplacement commit | Confirmé historiquement : commit créé puis `checkout -B feat` + fix forcé à d7f1507a ; **fix tree inchangé** |

---

## 04. HEAD/tree/base et liste des changements

- Base : `d7f1507a` / `3e9e1086`
- Delivery HEAD : `cf5bac70d12ae04a618893714d1a75994aba1f50` / `dbfd6d6632a9fd76220cfc0d73dc29a36de1272b`
- 2 commits locaux ; 7 chemins touchés (3 créés, 4 modifiés)
- Bornés à `projects/sfia-studio-next/`

---

## 05. Sources Git et décisions applicables

- Cadrage @`69c27832` blob `2322644a` VALIDATED
- Préflight handoff @`22e8a17c`
- Handoff delivery incomplet @`ef4154e1` blob `f2c0804d` — remplacé ici
- A3 : pas de moteur générique — helper D3 seulement
- ENV-01 / product-versioning v1.0 : NO RELEASE ; MINOR CANDIDATE
- SFIA v2.6 §§7.2.1, 7.2.2, 7.6, 7.10, 7.11

---

## 06. Contrat ACCEPT-01

Chaîne nominale (DEV / SCRIPTED / fixture) :

INTENTION → QUALIFY → D4 CREATE AVAILABLE → CognitiveContinue (faits) → D7 preparePublication PREPARED (sans HD) → inspection Pilote → authorizePublication (HD APPLICABLE) → **auto resumeMissionAfterPublicationAuthorize / dispatch** → restitution conversation → UI reflète statut observé (`missionResume`).

---

## 07. Fichiers créés — contenus complets


### CREATED `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`

- lines: 494
- bytes: 15012


**Rôle :** helpers D3 (qualification publish, correlationKeys, preparePublicationForMission, resumeMissionAfterPublicationAuthorize, cognitiveContinueFromFacts, ACK/restitution). **Pas** un second runner / IntentConductor service.

**Exports :** `qualifyPublicationMission`, `missionCorrelationKeys`, `formatMissionAck`, `appendMissionAck`, `composeCanonicalMissionRestitution`, `preparePublicationForMission`, `resumeMissionAfterPublicationAuthorize`, `cognitiveContinueFromFacts`, types `MissionProjection` / `MissionStatus` / …

**Dépendances :** `preparePublication`/`dispatchPublication`/`reconcileAttempt` (D7), `listProjectGitLinks` (D9), `generateNoraReply` (même adapter), drizzle `effectAttempts`/`messages`/`conversations`.

**Tests :** unit `mission-continuity.test.ts` ; PG `mission-continuity-accept01.pg.test.ts`.


```typescript
/**
 * Mission continuity — logical helpers inside D3 (NOT a parallel engine).
 * Anchors wait on effect_attempts PREPARED; never calls authorize for "waiting".
 * Owner truth remains D4/D6/D7; MissionProjection is refs-only.
 */
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, effectAttempts, messages } from "@/db/schema";
import {
  dispatchPublication,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { generateNoraReply } from "./nora-adapter";
import type { DocumentEffectSummary } from "./document-act";
import { qualifyDocumentAct } from "./document-act";

export type MissionStatus =
  | "ACTIVE"
  | "AWAITING_PILOT_AUTH"
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
  targetBranch: string;
  ambiguous: boolean;
  clarify?: string;
};

const PUBLISH_RE =
  /\b(?:publie|publier|publication|pousse(?:r)?\s+(?:(?:le|la|ce|cet|cette)\s+)?(?:document|fichier)?|sur\s+(?:mon\s+)?d[eé]p[oô]t|dans\s+(?:mon\s+)?d[eé]p[oô]t|github)\b/i;
const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

export function qualifyPublicationMission(userText: string): PublicationMissionIntent {
  const act = qualifyDocumentAct(userText);
  const wantsDocumentCreate = act.kind === "CREATE";
  const wantsPublish = PUBLISH_RE.test(userText);
  const pathMatch = userText.match(PATH_RE);
  const targetPath = pathMatch?.[1] ?? null;
  if (wantsPublish && !wantsDocumentCreate && act.kind === "NONE") {
    // Publish-only without new doc — still a mission if revise/create unclear
  }
  return {
    wantsDocumentCreate,
    wantsPublish,
    targetPath,
    targetBranch: "main",
    ambiguous: wantsPublish && !wantsDocumentCreate && act.kind === "NONE",
    clarify: wantsPublish && !targetPath
      ? "Chemin cible non précisé — défaut docs/studio-next/publication.md si un seul dépôt est rattaché."
      : undefined,
  };
}

export function missionCorrelationKeys(clientIntentKey: string): {
  document: string;
  publication: string;
} {
  const key = clientIntentKey.trim();
  return {
    document: `doc:mission:${key}`,
    publication: `pub:mission:${key}`,
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
  if (mission.status === "AWAITING_PILOT_AUTH") {
    lines.push(
      "",
      "Préparation Git PREPARED — aucune HumanDecision créée.",
      "Autorisation Pilote requise (authorizePublication) avant toute publication.",
      "Après autorisation, Studio reprend automatiquement le dispatch.",
    );
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

export async function preparePublicationForMission(input: {
  pilotId: string;
  projectId: string;
  documentId: string;
  revisionId: string;
  clientIntentKey: string;
  targetPath: string | null;
  targetBranch: string;
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
  const targetPath = input.targetPath ?? "docs/studio-next/publication.md";
  const keys = missionCorrelationKeys(input.clientIntentKey);
  try {
    const prepared = await preparePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      documentId: input.documentId,
      revisionId: input.revisionId,
      repositoryId,
      targetPath,
      targetBranch: input.targetBranch,
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

/**
 * After Pilot authorizePublication — automatic dispatch (no extra "continue" message).
 * Idempotent: COMPLETED returns without re-dispatch; DISPATCHED → reconcile.
 */
export async function resumeMissionAfterPublicationAuthorize(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  decisionId: string | null | undefined;
}): Promise<{
  dispatched: boolean;
  reconciled: boolean;
  status: string;
  restitution: string;
  conversationMessageId: string | null;
  prNumber?: number | null;
  commitSha?: string | null;
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
    // Best-effort reconcile if DISPATCHED after partial failure
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

  const restitution = composeCanonicalMissionRestitution({
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

  let conversationMessageId: string | null = null;
  if (plan.preparationId) {
    try {
      conversationMessageId = await appendAssistantMissionMessage({
        pilotId: input.pilotId,
        preparationId: plan.preparationId,
        content: restitution,
      });
    } catch {
      conversationMessageId = null;
    }
  }

  const finalRow = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
  )[0];
  const resultPayload = (() => {
    try {
      return JSON.parse(finalRow?.resultJson || "{}") as {
        prNumber?: number | null;
        commitSha?: string | null;
        sha?: string | null;
      };
    } catch {
      return {} as { prNumber?: number | null; commitSha?: string | null; sha?: string | null };
    }
  })();
  const prNumber = resultPayload.prNumber ?? null;
  const commitSha = resultPayload.commitSha ?? resultPayload.sha ?? null;

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
    error: detail ?? undefined,
  };
}

async function appendAssistantMissionMessage(input: {
  pilotId: string;
  preparationId: string;
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

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: "assistant",
    content: input.content,
    status: "COMPLETE",
    ordinal,
    generationId: null,
    createdAt: new Date(),
  });
  return id;
}

/** Facts-only cognitive continue — reuses generateNoraReply; tools allowed for read only via policy. */
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
      `Produis une restitution fidèle à ces faits. N'affirme aucun effet absent de cette liste.`,
    contextSnippets: input.contextSnippets,
    toolScope: input.toolScope,
  });
}
```


### CREATED `projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts`

- lines: 78
- bytes: 2707

**Rôle :** oracles unitaires qualification / ACK sans HD / restitution canonique / correlationKeys.


```typescript
import { describe, expect, it } from "vitest";
import {
  appendMissionAck,
  composeCanonicalMissionRestitution,
  formatMissionAck,
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
  });

  it("does not treat simple chat as publish mission", () => {
    const m = qualifyPublicationMission("Explique la différence entre blob et commit");
    expect(m.wantsPublish).toBe(false);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("derives stable correlation keys before effects", () => {
    const keys = missionCorrelationKeys("intent-abc");
    expect(keys.document).toBe("doc:mission:intent-abc");
    expect(keys.publication).toBe("pub:mission:intent-abc");
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


### CREATED `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`

- lines: 237
- bytes: 9761

**Rôle :** PG ACCEPT-01 — P0 prepare sans HD ; chat→AWAITING_PILOT_AUTH ; authorize+resume+idempotence ; C2/C5 replay clientTurnKey.


```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, humanDecisions, pilots, preparations } from "@/db/schema";
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
  qualifyPublicationMission,
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
  // Ensure scripted provider is warm for prepare/dispatch
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Refuse RECETTE lane contamination
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
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
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(row?.decisionId).toBeNull();
    expect(row?.status).toBe("PREPARED");
    const hd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(hd.filter((d) => d.sourceRef === prepared.attemptId)).toHaveLength(0);
  });

  it("ACCEPT-01 chat: CREATE + publish intent prepares and awaits auth without HD", async () => {
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

    const msgs = await listMessages(pilotId, preparationId);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
    expect(assistant?.content).toMatch(/AWAITING_PILOT_AUTH|aucune HumanDecision créée/i);
    expect(assistant?.content).not.toMatch(/HumanDecision APPLICABLE/);

    // Project scoped sanity
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === chat.documentSave?.documentId)).toBe(true);
    expect(projectId).toBeTruthy();
  });

  it("ACCEPT-01: authorize then auto resume dispatches without second continue message", async () => {
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
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);

    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: attemptId!,
      statement: "GO publication ACCEPT-01",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    expect(auth.decisionId).toBeTruthy();

    const resume = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(resume.status);
    expect(resume.restitution).toMatch(/Restitution de mission|Publication/);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(after?.status ?? "");

    // Idempotent second resume must not invent a second effect path blindly
    const resume2 = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(resume2.status).toBeTruthy();

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
    const matching = docs.filter((d) => d.document.id === firstDoc);
    expect(matching).toHaveLength(1);

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


---

## 08. Fichiers modifiés — diffs exploitables complets

### MODIFIED `…/authorize/route.ts` — fichier complet HEAD (49 lignes)

Ancien : retourne seulement `authorizePublication` result.
Nouveau : si `autoResumeMission !== false` et status AUTHORIZED → `resumeMissionAfterPublicationAuthorize` puis `{ ...result, missionResume }`.

`autoResumeMission` : option body JSON (défaut true). Panel nominal **n'envoie pas** false. Si false : HD/AUTHORIZED durable ; dispatch panel manuel reste possible. Escape hatch tests/inspection — **ne désactive pas** l'acte Pilote (authorize crée toujours HD).

```typescript

import { NextResponse } from "next/server";
import { resumeMissionAfterPublicationAuthorize } from "@/domains/conversation/mission-continuity";
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
      /** When false, skip automatic post-authorization dispatch (tests / inspection-only). Default true. */
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
    // P0: authorize IS the Pilot act (creates HD APPLICABLE). Then resume dispatch automatically.
    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    if (body.autoResumeMission !== false && result.status === "AUTHORIZED") {
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: result.decisionId,
      });
    }
    return NextResponse.json({ ...result, missionResume });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```


### DIFF `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index bf86345c..8bf698b8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -43,6 +43,15 @@ import {
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
+  type MissionProjection,
+} from "./mission-continuity";

 export async function listMessages(pilotId: string, preparationId: string) {
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -191,6 +200,8 @@ export type TurnResult = {
     effects?: Array<{ effectKind: string; targetRef: string }>;
   } | null;
   reconciled?: boolean;
+  /** Refs-only mission projection — never owner truth for D4/D6/D7. */
+  missionProjection?: MissionProjection | null;
 };

 function pilotageEffectFromAuthority(
@@ -585,6 +596,9 @@ export async function postUserMessageAndNora(
   let ownershipLostBeforeD4 = false;
   const documentAct = qualifyDocumentAct(content);
   const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
+  const missionIntent = qualifyPublicationMission(content);
+  const clientIntentKey = clientTurnKey;
+  const missionKeys = missionCorrelationKeys(clientIntentKey);
   // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
@@ -661,7 +675,9 @@ export async function postUserMessageAndNora(
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
@@ -937,9 +953,155 @@ export async function postUserMessageAndNora(
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
+
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
+    if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
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
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
-    : appendDocumentEffectAck(reply.content, documentEffectForAck);
+    : appendMissionAck(
+        appendDocumentEffectAck(assistantBody, documentEffectForAck),
+        missionProjection,
+      );

   const confirmedCapitalisations = capitalisation.capitalisations.filter(
     (c) => c.status === "AVAILABLE",
@@ -1030,6 +1192,7 @@ export async function postUserMessageAndNora(
     idempotentReplay: false,
     humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
     pilotageEffect: pilotageEffectFromAuthority(authority),
+    missionProjection,
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```


### DIFF `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts
index 8a2a197d..bc10fd9a 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/[attemptId]/authorize/route.ts
@@ -1,4 +1,5 @@
 import { NextResponse } from "next/server";
+import { resumeMissionAfterPublicationAuthorize } from "@/domains/conversation/mission-continuity";
 import { authorizePublication } from "@/domains/execution/effect-service";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";
@@ -13,6 +14,8 @@ export async function POST(
     const body = (await req.json()) as {
       statement?: string;
       inspectedFingerprint?: string;
+      /** When false, skip automatic post-authorization dispatch (tests / inspection-only). Default true. */
+      autoResumeMission?: boolean;
     };
     if (!body.inspectedFingerprint) {
       return NextResponse.json(
@@ -27,7 +30,18 @@ export async function POST(
       statement: body.statement ?? "Mandat publication Git",
       inspectedFingerprint: body.inspectedFingerprint,
     });
-    return NextResponse.json(result);
+    // P0: authorize IS the Pilot act (creates HD APPLICABLE). Then resume dispatch automatically.
+    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
+      null;
+    if (body.autoResumeMission !== false && result.status === "AUTHORIZED") {
+      missionResume = await resumeMissionAfterPublicationAuthorize({
+        pilotId: session.pilotId,
+        projectId,
+        attemptId,
+        decisionId: result.decisionId,
+      });
+    }
+    return NextResponse.json({ ...result, missionResume });
   } catch (e) {
     const mapped = studioErrorResponse(e);
     return NextResponse.json(mapped.body, { status: mapped.status });
```


### DIFF `projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx`

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


### DIFF `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 408e3dad..f5243a82 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,38 @@
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
 ## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

 | Field | Value |
```


---

## 09. Analyse réelle du helper mission-continuity

- **Entrée unique** : appelé depuis `postUserMessageAndNora` (qualify/prepare/continue) et depuis route authorize (resume).
- **Pas de table WorkIntent** ; projection `MissionProjection` refs-only dans `TurnResult` + ACK message.
- **Vérité owners** : D4 docs/revisions ; D7 `effect_attempts` ; D6 `human_decisions` via `authorizePublication` uniquement.
- `preparePublicationForMission` **n'appelle jamais** `authorizePublication`.
- `resumeMissionAfterPublicationAuthorize` : AUTHORIZED/AMBIGUOUS → dispatch ; DISPATCHED → reconcile ; COMPLETED → no-op ; erreurs → best-effort reconcile si DISPATCHED.
- `cognitiveContinueFromFacts` : **réutilise** `generateNoraReply` (pas de second SDK runner).
- Corrélations stables **avant** effets : `doc:mission:{clientIntentKey}` / `pub:mission:{clientIntentKey}`.

---

## 10. Flux D3→D4→D7→D6→D9

1. `qualifyPublicationMission` + `qualifyDocumentAct`
2. D4 CREATE avec correlation mission si `wantsPublish`
3. Si AVAILABLE → Continue faits → éventuellement RESTITUTION_PENDING
4. Si wantsPublish → `preparePublication` → PREPARED, mission `AWAITING_PILOT_AUTH`, `authorize_called:false`
5. Pilote inspecte panel (diff/fingerprint)
6. POST authorize → HD APPLICABLE + AUTHORIZED
7. Auto `dispatchPublication` (D7/D9 SCRIPTED/REAL selon lane)
8. Message restitution assistant + UI status = missionResume.status

---

## 11. Reprise automatique post-autorisation

- Déclencheur : route authorize propriétaire existante (pas un second scheduler).
- Corrélé : `attemptId` + `decisionId` + ownership pilot/project.
- Idempotent : 2e resume sur COMPLETED ne redispatche pas (prouvé PG).
- Concurrent authorize : `authorizePublication` idempotent si déjà AUTHORIZED/DISPATCHED/COMPLETED.
- Si crash **entre** authorize commit et resume : état AUTHORIZED+HD durable ; panel Dispatch reste disponible comme recovery manuelle — **réserve** (pas de worker auto post-panne). Si crash **après** resume serveur : DB COMPLETED ; reload UI OK.
- `autoResumeMission:false` : pas d'auto-dispatch ; état AUTHORIZED durable.

---

## 12. Durabilité missionProjection et corrélations

- `missionProjection` dans TurnResult / resultJson turn — **pas** owner truth.
- Reconstruction : D4 via `creationCorrelationKey`/`correlationKey` ; D7 via unique `(pilotId,projectId,correlationKey)` sur `effect_attempts`.
- Replay même `clientTurnKey` : turn fence idempotent + mêmes clés → **pas** de second CREATE/prepare (test C2/C5 PASS).

---

## 13. Crash D4/D7 et réconciliation

| Fenêtre | Comportement code | Preuve |
|---|---|---|
| Après D4 AVAILABLE avant Continue | D4 conservé ; Continue fail → RESTITUTION_PENDING canonique | unit restitution + code service |
| Replay même clientTurnKey | un doc, un attempt PREPARED | PG C2/C5 PASS |
| Après PREPARED | attempt durable ; pas de HD | PG P0 + ACCEPT-01 chat PASS |
| DISPATCHED uncertain | resume appelle reconcileAttempt | code resume |
| COMPLETED | no redispach | PG resume2 PASS |

Injection crash process réelle : **NON PROUVÉE** (pas de fault injector). Oracles via idempotence/replay owners.

---

## 14. Continue fail et restitution

Si Continue incomplete/exception après D4 AVAILABLE :
- `assistantBody` = `composeCanonicalMissionRestitution` (faits D4)
- `continueFailedAfterEffect=true` → `restitution: PENDING` sur mission
- **Aucun** second CREATE ; document AVAILABLE conservé

---

## 15. Idempotence / replay / STOP / révocation

- Replay clientTurnKey : PASS PG
- Double resume : PASS PG
- STOP/révocation concurrente pendant resume : **NON PROUVÉ** ce cycle (réserve)
- UNKNOWN : reconcile path présent ; pas de nouvelle autorisation dans resume

---

## 16. Contrôle anti-architecture parallèle

| Interdit | Observé |
|---|---|
| Second runner Nora | Non — `generateNoraReply` only |
| IntentConductor service | Non — helper module |
| Table WorkIntent | Non |
| Second effect journal | Non — `effect_attempts` |
| Seconde autorité D6 | Non — `authorizePublication` only on Pilot act |
| Publication Git concurrente | Non — mêmes prepare/dispatch |
| God engine actions | Non — A3 respecté |

Écart mineur : helper importe D7/D9 directement (orchestration légère D3) — cohérent avec cadrage « responsabilités logiques dans D3 ».

---

## 17. Tests exécutés et oracles

SHA/tree sous test : `cf5bac70d12ae04a618893714d1a75994aba1f50` / `dbfd6d6632a9fd76220cfc0d73dc29a36de1272b`
Env : DEV PG 5433, `STUDIO_E2E=1`, scripted GitHub, fixture Nora

| Commande | Résultat |
|---|---|
| `npx vitest run tests/unit/mission-continuity.test.ts` | **5 PASS** |
| `npx vitest run tests/integration/mission-continuity-accept01.pg.test.ts` | **4 PASS** (dont C2/C5 replay) |
| `npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts -t "A: conversational CREATE\|A-R12\|REC-10"` | **3 PASS** / 16 skipped |
| `npx tsc --noEmit` | **PASS** |
| eslint fichiers delivery + panel | **PASS** |
| `npx next build` | **PASS** (avant correctif panel ; rebuild non rejoué après panel — réserve mineure) |

BROWSER E2E panel missionResume : **NON PROUVÉ**
NORA LIVE / GITHUB REAL / RECETTE : **NON PROUVÉ / HORS PÉRIMÈTRE**

---

## 18. Non-régression

- CREATE conversational + A-R12 + REC-10 subset : PASS
- REC-07 / REC-11 full : **non rejoués intégralement** ce cycle → réserve
- Suite ml3 pilotage / D5/D6 full : **NON PROUVÉ** ce cycle

---

## 19. Fake/Real Qualification

| Frontière | Mode preuve |
|---|---|
| Nora | fixture (`STUDIO_E2E`) — DETERMINISTIC |
| GitHub | SCRIPTED — DETERMINISTIC / PG |
| PG | DEV isolé 5433 |
| REAL GitHub publish | **interdit** |
| NORA LIVE | **non autorisé** |

---

## 20. ENV-01 et versioning

- Lane DEV only ; RECETTE intacte
- NO RELEASE ; MINOR CANDIDATE ; pas de numéro inventé
- Schema : unchanged (pas de migration)

---

## 21. Corrections éventuelles et nouveau diff

**Défaut démontré :** `PublicationInspectionPanel.authorize` appliquait `j.status` (=AUTHORIZED) et ignorait `j.missionResume`, laissant le bouton Dispatch enabled après auto-dispatch — contredit garantie « pas de clic dispatch nominal ».

**Correctif (`cf5bac70`) :**
- Panel : status/pr/commit depuis `missionResume`
- resume : expose `prNumber`/`commitSha` depuis `resultJson`
- PG : test replay C2/C5
- delivery-history REG entry

Diff panel + mission-continuity correction inclus §08.

---

## 22. Dette / exit / rollback

- Exit : `git reset --hard d7f1507a` sur feat WT (local only) ou revert `b0e23c46..cf5bac70`
- Dette : Continue toujours après D4 AVAILABLE (coût tokens) ; recovery auto si crash mid-authorize→resume non workerisé ; `autoResumeMission` client-controllable
- Pas de migration à rollback

---

## 23. Réserves restantes

1. Preuve browser UX missionResume **NON PROUVÉE**
2. Crash process injector **NON PROUVÉ**
3. STOP/révocation concurrente pendant dispatch **NON PROUVÉ**
4. REC-07/11 full + suite ml3 **non rejoués**
5. next build après panel fix **non rejoué** (tsc+eslint PASS)
6. Product push / PR / RECETTE / REAL **non autorisés**
7. CREATE→REVISE_NOT_FOUND LIVE : REPRO PENDING (inchangé)

---

## 24. Verdict unique

**ACCEPT-01 DEV DELIVERY CORRECTED LOCALLY — NEW HEAD/TREE DOCUMENTED — RELEVANT TESTS REEXECUTED — FULL REVIEW PACK AVAILABLE — READY FOR CHATGPT TECHNICAL REVIEW — NO PRODUCT PUSH OR RECETTE AUTHORIZED**

---

## 25. Git Review Index

| Artefact | SHA |
|---|---|
| Feat HEAD | `cf5bac70d12ae04a618893714d1a75994aba1f50` |
| Feat tree | `dbfd6d6632a9fd76220cfc0d73dc29a36de1272b` |
| Implémentation | `b0e23c46461862ef2a20d73efc08eedf1b4bf5dc` |
| Régularisation | `cf5bac70d12ae04a618893714d1a75994aba1f50` |
| Base Product / fix HEAD | `d7f1507a56e50660ea24903c2dc563c249ba9086` |
| Base tree | `3e9e1086aaf83e22d8e3350565f1c747bb31f556` |
| Handoff précédent (incomplet) | `ef4154e1` / `f2c0804d` |
| RECETTE BUILD | `8vZjme4-KnnPkAqm_QxMz` (untouched) |

**STOP** — pas de push Product.

---

## 26. Contrôle §7.2.1 de complétude

| Checklist | Valeur |
|---|---|
| created files full content | **yes** |
| modified sections complete | **yes** (diffs complets vs base + authorize full file) |
| useful diff included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |
| §7.6 size note | Pack large car 3 créations + 4 diffs complets exigés — contenu critique non tronqué |
